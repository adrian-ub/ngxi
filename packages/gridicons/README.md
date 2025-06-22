# @ngxi/gridicons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Gridicons
- **Prefix**: `gridicons`
- **Icons**: 207
- **License**: [GPL 2.0](https://github.com/Automattic/gridicons/blob/trunk/LICENSE.md)
- **Author**: [Automattic](https://github.com/Automattic/gridicons)
- **Website**: [https://github.com/Automattic/gridicons](https://github.com/Automattic/gridicons)

## Installation

```sh
pnpm add @ngxi/gridicons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiGridicons, gridiconsCode } from '@ngxi/gridicons'

@Component({
  imports: [NgxiGridicons],
  template: `<svg [ngxiGridicons]="gridiconsCode"></svg>`
})
export class UsageIcon {
  protected gridiconsCode = gridiconsCode
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

GPL 2.0 License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/gridicons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/gridicons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/gridicons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/gridicons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/gridicons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/gridicons
[license-src]: https://img.shields.io/npm/l/@ngxi/gridicons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/gridicons
