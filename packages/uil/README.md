# @ngxi/uil

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Unicons
- **Prefix**: `uil`
- **Icons**: 1215
- **License**: [Apache 2.0](https://github.com/Iconscout/unicons/blob/master/LICENSE)
- **Author**: [Iconscout](https://github.com/Iconscout/unicons)
- **Website**: [https://github.com/Iconscout/unicons](https://github.com/Iconscout/unicons)

## Installation

```sh
pnpm add @ngxi/uil
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiUil, uilArrowCircleRight } from '@ngxi/uil'

@Component({
  imports: [NgxiUil],
  template: `<svg [ngxiUil]="uilArrowCircleRight"></svg>`
})
export class UsageIcon {
  protected uilArrowCircleRight = uilArrowCircleRight
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/uil?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/uil
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/uil?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/uil
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/uil?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/uil
[license-src]: https://img.shields.io/npm/l/@ngxi/uil?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/uil
