# @ngxi/flat-color-icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Flat Color Icons
- **Prefix**: `flat-color-icons`
- **Icons**: 329
- **License**: [MIT]()
- **Author**: [Icons8](https://github.com/icons8/flat-Color-icons)
- **Website**: [https://github.com/icons8/flat-Color-icons](https://github.com/icons8/flat-Color-icons)

## Installation

```sh
pnpm add @ngxi/flat-color-icons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiFlatColorIcons, flatColorIconsEditImage } from '@ngxi/flat-color-icons'

@Component({
  imports: [NgxiFlatColorIcons],
  template: `<svg [ngxiFlatColorIcons]="flatColorIconsEditImage"></svg>`
})
export class UsageIcon {
  protected flatColorIconsEditImage = flatColorIconsEditImage
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/flat-color-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/flat-color-icons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/flat-color-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/flat-color-icons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/flat-color-icons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/flat-color-icons
[license-src]: https://img.shields.io/npm/l/@ngxi/flat-color-icons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/flat-color-icons
