# @ngxi/pepicons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Pepicons
- **Prefix**: `pepicons`
- **Icons**: 428
- **License**: [CC BY 4.0](https://github.com/CyCraft/pepicons/blob/dev/LICENSE)
- **Author**: [CyCraft](https://github.com/CyCraft/pepicons)
- **Website**: [https://github.com/CyCraft/pepicons](https://github.com/CyCraft/pepicons)

## Installation

```sh
pnpm add @ngxi/pepicons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiPepicons, pepiconsBookmarkPrint } from '@ngxi/pepicons'

@Component({
  imports: [NgxiPepicons],
  template: `<svg [ngxiPepicons]="pepiconsBookmarkPrint"></svg>`
})
export class UsageIcon {
  protected pepiconsBookmarkPrint = pepiconsBookmarkPrint
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

CC BY 4.0 License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/pepicons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/pepicons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/pepicons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/pepicons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/pepicons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/pepicons
[license-src]: https://img.shields.io/npm/l/@ngxi/pepicons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/pepicons
