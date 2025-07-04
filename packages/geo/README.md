# @ngxi/geo

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: GeoGlyphs
- **Prefix**: `geo`
- **Icons**: 30
- **License**: [MIT](https://github.com/cugos/geoglyphs/blob/main/LICENSE.md)
- **Author**: [Sam Matthews](https://github.com/cugos/geoglyphs)
- **Website**: [https://github.com/cugos/geoglyphs](https://github.com/cugos/geoglyphs)

## Installation

```sh
pnpm add @ngxi/geo
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiGeo, geoTurfCenter } from '@ngxi/geo'

@Component({
  imports: [NgxiGeo],
  template: `<svg [ngxiGeo]="geoTurfCenter"></svg>`
})
export class UsageIcon {
  protected geoTurfCenter = geoTurfCenter
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

MIT License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/geo?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/geo
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/geo?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/geo
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/geo?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/geo
[license-src]: https://img.shields.io/npm/l/@ngxi/geo?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/geo
