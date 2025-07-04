# @ngxi/iconamoon

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: IconaMoon
- **Prefix**: `iconamoon`
- **Icons**: 1781
- **License**: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Author**: [Dariush Habibpour](https://github.com/dariushhpg1/IconaMoon)
- **Website**: [https://github.com/dariushhpg1/IconaMoon](https://github.com/dariushhpg1/IconaMoon)

## Installation

```sh
pnpm add @ngxi/iconamoon
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiIconamoon, iconamoonShieldOffThin } from '@ngxi/iconamoon'

@Component({
  imports: [NgxiIconamoon],
  template: `<svg [ngxiIconamoon]="iconamoonShieldOffThin"></svg>`
})
export class UsageIcon {
  protected iconamoonShieldOffThin = iconamoonShieldOffThin
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/iconamoon?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/iconamoon
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/iconamoon?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/iconamoon
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/iconamoon?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/iconamoon
[license-src]: https://img.shields.io/npm/l/@ngxi/iconamoon?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/iconamoon
