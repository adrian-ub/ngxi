# @ngxi/gala

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Gala Icons
- **Prefix**: `gala`
- **Icons**: 51
- **License**: [GPL](https://github.com/cyberalien/gala-icons/blob/main/LICENSE)
- **Author**: [Jake Wells](https://github.com/cyberalien/gala-icons)
- **Website**: [https://github.com/cyberalien/gala-icons](https://github.com/cyberalien/gala-icons)

## Installation

```sh
pnpm add @ngxi/gala
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiGala, galaBrochure } from '@ngxi/gala'

@Component({
  imports: [NgxiGala],
  template: `<svg [ngxiGala]="galaBrochure"></svg>`
})
export class UsageIcon {
  protected galaBrochure = galaBrochure
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

GPL License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/gala?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/gala
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/gala?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/gala
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/gala?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/gala
[license-src]: https://img.shields.io/npm/l/@ngxi/gala?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/gala
