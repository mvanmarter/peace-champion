#!/usr/bin/env bash
# Captures desktop (1440x900) and mobile (390x844) reference screenshots
# of every link in docs/deslign-links.md into docs/design-refs/.
# Uses the Chrome (or Chromium/Edge/Brave) already installed on this Mac in headless mode.
set -u
cd "$(dirname "$0")/.."

LINKS=docs/deslign-links.md
OUT=docs/design-refs
mkdir -p "$OUT"

BROWSER=""
for b in \
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  "/Applications/Chromium.app/Contents/MacOS/Chromium" \
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge" \
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser"; do
  [ -x "$b" ] && BROWSER="$b" && break
done
if [ -z "$BROWSER" ]; then
  echo "No Chrome/Chromium/Edge/Brave found in /Applications." >&2
  exit 1
fi
echo "Using: $BROWSER"

PROFILE=$(mktemp -d)
UA_MOBILE="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"

shoot() { # url outfile width height [user-agent]
  local args=(--headless=new --disable-gpu --hide-scrollbars --no-first-run
    --no-default-browser-check --user-data-dir="$PROFILE"
    --virtual-time-budget=10000 --window-size="$3,$4" --screenshot="$2")
  [ -n "${5:-}" ] && args+=(--user-agent="$5")
  "$BROWSER" "${args[@]}" "$1" >/dev/null 2>&1 &
  local pid=$!
  ( sleep 45; kill $pid 2>/dev/null ) & local watchdog=$!
  wait $pid 2>/dev/null; kill $watchdog 2>/dev/null
}

ok=0; fail=0; failed=()
# Lines look like: 1. [name](https://url): description
while IFS= read -r line; do
  n=$(echo "$line" | sed -E 's/^([0-9]+)\..*/\1/')
  url=$(echo "$line" | sed -E 's/.*\]\(([^)]+)\).*/\1/')
  slug=$(echo "$line" | sed -E 's/^[0-9]+\. \[([^]]+)\].*/\1/' | tr '/.' '--' | sed 's/-$//')
  base=$(printf "%s/%02d-%s" "$OUT" "$n" "$slug")
  echo "[$n] $url"
  shoot "$url" "$base-desktop.png" 1440 900
  shoot "$url" "$base-mobile.png" 390 844 "$UA_MOBILE"
  if [ -s "$base-desktop.png" ]; then ok=$((ok+1)); else fail=$((fail+1)); failed+=("$url"); fi
done < <(grep -E '^[0-9]+\. \[' "$LINKS")

rm -rf "$PROFILE"
echo
echo "Done: $ok captured, $fail failed. Files in $OUT/"
[ $fail -gt 0 ] && printf '  failed: %s\n' "${failed[@]}"
exit 0
