# @ngxi/duo-icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Duoicons
- **Prefix**: `duo-icons`
- **Icons**: 91
- **License**: [MIT](https://github.com/fazdiu/duo-icons/blob/master/LICENSE)
- **Author**: [fernandcf](https://github.com/fazdiu/duo-icons)
- **Website**: [https://github.com/fazdiu/duo-icons](https://github.com/fazdiu/duo-icons)

## Installation

```sh
pnpm add @ngxi/duo-icons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiDuoIcons, duoIconsCreditCard } from '@ngxi/duo-icons'

@Component({
  imports: [NgxiDuoIcons],
  template: `<svg [ngxiDuoIcons]="duoIconsCreditCard"></svg>`
})
export class UsageIcon {
  protected duoIconsCreditCard = duoIconsCreditCard
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/duo-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/duo-icons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/duo-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/duo-icons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/duo-icons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/duo-icons
[license-src]: https://img.shields.io/npm/l/@ngxi/duo-icons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/duo-icons
