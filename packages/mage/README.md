# @ngxi/mage

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Mage Icons
- **Prefix**: `mage`
- **Icons**: 1042
- **License**: [Apache 2.0](https://github.com/Mage-Icons/mage-icons/blob/main/License.txt)
- **Author**: [MageIcons](https://github.com/Mage-Icons/mage-icons)
- **Website**: [https://github.com/Mage-Icons/mage-icons](https://github.com/Mage-Icons/mage-icons)

## Installation

```sh
pnpm add @ngxi/mage
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiMage, mageChart25 } from '@ngxi/mage'

@Component({
  imports: [NgxiMage],
  template: `<svg [ngxiMage]="mageChart25"></svg>`
})
export class UsageIcon {
  protected mageChart25 = mageChart25
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/mage?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/mage
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/mage?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/mage
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/mage?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/mage
[license-src]: https://img.shields.io/npm/l/@ngxi/mage?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/mage
