# @ngxi/qlementine-icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Qlementine Icons
- **Prefix**: `qlementine-icons`
- **Icons**: 732
- **License**: [MIT](https://github.com/oclero/qlementine-icons/blob/master/LICENSE)
- **Author**: [Olivier Cléro](https://github.com/oclero/qlementine-icons)
- **Website**: [https://github.com/oclero/qlementine-icons](https://github.com/oclero/qlementine-icons)

## Installation

```sh
pnpm add @ngxi/qlementine-icons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiQlementineIcons, qlementineIconsWindows16 } from '@ngxi/qlementine-icons'

@Component({
  imports: [NgxiQlementineIcons],
  template: `<svg [ngxiQlementineIcons]="qlementineIconsWindows16"></svg>`
})
export class UsageIcon {
  protected qlementineIconsWindows16 = qlementineIconsWindows16
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/qlementine-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/qlementine-icons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/qlementine-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/qlementine-icons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/qlementine-icons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/qlementine-icons
[license-src]: https://img.shields.io/npm/l/@ngxi/qlementine-icons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/qlementine-icons
