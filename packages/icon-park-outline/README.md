# @ngxi/icon-park-outline

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: IconPark Outline
- **Prefix**: `icon-park-outline`
- **Icons**: 2658
- **License**: [Apache 2.0](https://github.com/bytedance/IconPark/blob/master/LICENSE)
- **Author**: [ByteDance](https://github.com/bytedance/IconPark)
- **Website**: [https://github.com/bytedance/IconPark](https://github.com/bytedance/IconPark)

## Installation

```sh
pnpm add @ngxi/icon-park-outline
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiIconParkOutline, iconParkOutlineAddOne } from '@ngxi/icon-park-outline'

@Component({
  imports: [NgxiIconParkOutline],
  template: `<svg [ngxiIconParkOutline]="iconParkOutlineAddOne"></svg>`
})
export class UsageIcon {
  protected iconParkOutlineAddOne = iconParkOutlineAddOne
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/icon-park-outline?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/icon-park-outline
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/icon-park-outline?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/icon-park-outline
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/icon-park-outline?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/icon-park-outline
[license-src]: https://img.shields.io/npm/l/@ngxi/icon-park-outline?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/icon-park-outline
