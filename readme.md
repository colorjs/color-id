# color-id [![test](https://github.com/colorjs/color-id/actions/workflows/test.yml/badge.svg)](https://github.com/colorjs/color-id/actions/workflows/test.yml)

Pack RGBA color channels into a single uint32 integer and back.

## Install

```
npm install color-id
```

## Usage

```js
import colorId, { from } from 'color-id'

// normalized 0..1 (default)
colorId([1, 0, 0, 1])     // 0xff0000ff
from(0xff0000ff)           // [1, 0, 0, 1]

// byte values 0..255
colorId([255, 0, 0, 255], false)  // 0xff0000ff
from(0xff0000ff, false)           // [255, 0, 0, 255]
```

## API

### `coloId(rgba, normalized=true)` / default export

Pack `[r, g, b, a?]` channels into a uint32. Values are clamped to valid range. Alpha defaults to `1` (normalized) or `255` (byte).

### `from(n, normalized=true)`

Unpack uint32 into `[r, g, b, a]` channels.

**`normalized`** — `true` for 0..1 range, `false` for 0..255 byte values.

## Related

- [color-rgba](https://github.com/colorjs/color-rgba) — parse color string to rgba array
- [color-alpha](https://github.com/colorjs/color-alpha) — change alpha channel for a color
- [color-interpolate](https://github.com/colorjs/color-interpolate) — interpolate over palette or gradient

## License


<p align=center><a href="./LICENSE">MIT</a> • <a href="https://github.com/krishnized/license/">ॐ</a></p>
