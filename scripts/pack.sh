#!/usr/bin/env bash

set -euo pipefail

bun run build
(cd dist/github-custom-themes-extension && zip -qr ../github-custom-themes-extension.zip .)
