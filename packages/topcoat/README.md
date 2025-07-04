# @ngxi/topcoat

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: TopCoat Icons
- **Prefix**: `topcoat`
- **Icons**: 89
- **License**: [Apache 2.0](https://github.com/topcoat/icons/blob/master/LICENSE)
- **Author**: [TopCoat](https://github.com/topcoat/icons)
- **Website**: [https://github.com/topcoat/icons](https://github.com/topcoat/icons)

## Installation

```sh
pnpm add @ngxi/topcoat
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiTopcoat, topcoatWifi } from '@ngxi/topcoat'

@Component({
  imports: [NgxiTopcoat],
  template: `<svg [ngxiTopcoat]="topcoatWifi"></svg>`
})
export class UsageIcon {
  protected topcoatWifi = topcoatWifi
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/topcoat?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/topcoat
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/topcoat?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/topcoat
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/topcoat?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/topcoat
[license-src]: https://img.shields.io/npm/l/@ngxi/topcoat?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/topcoat
