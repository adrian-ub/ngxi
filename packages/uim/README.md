# @ngxi/uim

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Unicons Monochrome
- **Prefix**: `uim`
- **Icons**: 298
- **License**: [Apache 2.0](https://github.com/Iconscout/unicons/blob/master/LICENSE)
- **Author**: [Iconscout](https://github.com/Iconscout/unicons)
- **Website**: [https://github.com/Iconscout/unicons](https://github.com/Iconscout/unicons)

## Installation

```sh
pnpm add @ngxi/uim
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiUim, uimAirplay } from '@ngxi/uim'

@Component({
  imports: [NgxiUim],
  template: `<svg [ngxiUim]="uimAirplay"></svg>`
})
export class UsageIcon {
  protected uimAirplay = uimAirplay
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

Apache 2.0 License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/uim?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/uim
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/uim?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/uim
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/uim?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/uim
[license-src]: https://img.shields.io/npm/l/@ngxi/uim?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/uim
