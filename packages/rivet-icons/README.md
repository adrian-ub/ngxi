# @ngxi/rivet-icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Rivet Icons
- **Prefix**: `rivet-icons`
- **Icons**: 210
- **License**: [BSD 3-Clause](https://github.com/indiana-university/rivet-icons/blob/develop/LICENSE)
- **Author**: [Indiana University](https://github.com/indiana-university/rivet-icons)
- **Website**: [https://github.com/indiana-university/rivet-icons](https://github.com/indiana-university/rivet-icons)

## Installation

```sh
pnpm add @ngxi/rivet-icons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiRivetIcons, rivetIconsLightning } from '@ngxi/rivet-icons'

@Component({
  imports: [NgxiRivetIcons],
  template: `<svg [ngxiRivetIcons]="rivetIconsLightning"></svg>`
})
export class UsageIcon {
  protected rivetIconsLightning = rivetIconsLightning
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

BSD 3-Clause License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/rivet-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/rivet-icons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/rivet-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/rivet-icons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/rivet-icons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/rivet-icons
[license-src]: https://img.shields.io/npm/l/@ngxi/rivet-icons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/rivet-icons
