# color-id [![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

Convert color channels to single integer. Useful to get an id for a color.

[![npm install color-id](https://nodei.co/npm/color-id.png?mini=true)](https://npmjs.org/package/color-id/)

```js
const colorId = require('color-id');

colorId([.1, .5, .5, .1]); //
```

## `colorId(channels, normalized = true)`

Get id for normalized to 0..1 rgb[a] channel values. Optionally pass normalized flag to indicate that values are normalized to 0..1 range, defaults to `true`.


## Related

> [color-interpolate](https://github.com/dfcreative/color-interpolate) — interpolate color over palette, colormap or gradient.
> [color-rgba](https://github.com/dfcreative/color-rgba) — convert color string to rgba array.
> [color-alpha](https://github.com/dfcreative/color-alpha) — change alpha channel for a color.
