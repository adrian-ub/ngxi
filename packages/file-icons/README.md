# @ngxi/file-icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: File Icons
- **Prefix**: `file-icons`
- **Icons**: 930
- **License**: [ISC](https://github.com/file-icons/icons/blob/master/LICENSE.md)
- **Author**: [John Gardner](https://github.com/file-icons/icons)
- **Website**: [https://github.com/file-icons/icons](https://github.com/file-icons/icons)

## Installation

```sh
pnpm add @ngxi/file-icons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiFileIcons, fileIconsAdobe } from '@ngxi/file-icons'

@Component({
  imports: [NgxiFileIcons],
  template: `<svg [ngxiFileIcons]="fileIconsAdobe"></svg>`
})
export class UsageIcon {
  protected fileIconsAdobe = fileIconsAdobe
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

ISC License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/file-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/file-icons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/file-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/file-icons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/file-icons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/file-icons
[license-src]: https://img.shields.io/npm/l/@ngxi/file-icons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/file-icons
