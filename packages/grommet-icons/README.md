# @ngxi/grommet-icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Grommet Icons
- **Prefix**: `grommet-icons`
- **Icons**: 634
- **License**: [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
- **Author**: [Grommet](https://github.com/grommet/grommet-icons)
- **Website**: [https://github.com/grommet/grommet-icons](https://github.com/grommet/grommet-icons)

## Installation

```sh
pnpm add @ngxi/grommet-icons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiGrommetIcons, grommetIconsUserExpert } from '@ngxi/grommet-icons'

@Component({
  imports: [NgxiGrommetIcons],
  template: `<svg [ngxiGrommetIcons]="grommetIconsUserExpert"></svg>`
})
export class UsageIcon {
  protected grommetIconsUserExpert = grommetIconsUserExpert
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/grommet-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/grommet-icons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/grommet-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/grommet-icons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/grommet-icons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/grommet-icons
[license-src]: https://img.shields.io/npm/l/@ngxi/grommet-icons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/grommet-icons
