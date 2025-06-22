# @ngxi/dinkie-icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Dinkie Icons
- **Prefix**: `dinkie-icons`
- **Icons**: 1198
- **License**: [MIT](https://github.com/atelier-anchor/dinkie-icons/blob/main/LICENSE)
- **Author**: [atelierAnchor](https://github.com/atelier-anchor/dinkie-icons)
- **Website**: [https://github.com/atelier-anchor/dinkie-icons](https://github.com/atelier-anchor/dinkie-icons)

## Installation

```sh
pnpm add @ngxi/dinkie-icons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiDinkieIcons, dinkieIconsLockSmallFilled } from '@ngxi/dinkie-icons'

@Component({
  imports: [NgxiDinkieIcons],
  template: `<svg [ngxiDinkieIcons]="dinkieIconsLockSmallFilled"></svg>`
})
export class UsageIcon {
  protected dinkieIconsLockSmallFilled = dinkieIconsLockSmallFilled
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/dinkie-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/dinkie-icons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/dinkie-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/dinkie-icons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/dinkie-icons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/dinkie-icons
[license-src]: https://img.shields.io/npm/l/@ngxi/dinkie-icons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/dinkie-icons
