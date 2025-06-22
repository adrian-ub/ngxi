# @ngxi/lsicon

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Lsicon
- **Prefix**: `lsicon`
- **Icons**: 716
- **License**: [MIT](https://github.com/wisdesignsystem/lsicon/blob/main/LICENSE)
- **Author**: [Wis Design](https://www.lsicon.com/)
- **Website**: [https://www.lsicon.com/](https://www.lsicon.com/)

## Installation

```sh
pnpm add @ngxi/lsicon
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiLsicon, lsiconPointerOutline } from '@ngxi/lsicon'

@Component({
  imports: [NgxiLsicon],
  template: `<svg [ngxiLsicon]="lsiconPointerOutline"></svg>`
})
export class UsageIcon {
  protected lsiconPointerOutline = lsiconPointerOutline
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/lsicon?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/lsicon
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/lsicon?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/lsicon
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/lsicon?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/lsicon
[license-src]: https://img.shields.io/npm/l/@ngxi/lsicon?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/lsicon
