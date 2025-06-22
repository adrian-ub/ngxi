# @ngxi/cuida

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Cuida Icons
- **Prefix**: `cuida`
- **Icons**: 180
- **License**: [Apache 2.0](https://github.com/Sysvale/cuida-icons/blob/main/LICENSE)
- **Author**: [Sysvale](https://github.com/Sysvale/cuida-icons)
- **Website**: [https://github.com/Sysvale/cuida-icons](https://github.com/Sysvale/cuida-icons)

## Installation

```sh
pnpm add @ngxi/cuida
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiCuida, cuidaSidebarExpandOutline } from '@ngxi/cuida'

@Component({
  imports: [NgxiCuida],
  template: `<svg [ngxiCuida]="cuidaSidebarExpandOutline"></svg>`
})
export class UsageIcon {
  protected cuidaSidebarExpandOutline = cuidaSidebarExpandOutline
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/cuida?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/cuida
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/cuida?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/cuida
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/cuida?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/cuida
[license-src]: https://img.shields.io/npm/l/@ngxi/cuida?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/cuida
