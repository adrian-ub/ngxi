# @ngxi/cib

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: CoreUI Brands
- **Prefix**: `cib`
- **Icons**: 830
- **License**: [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)
- **Author**: [creativeLabs Łukasz Holeczek](https://github.com/coreui/coreui-icons)
- **Website**: [https://github.com/coreui/coreui-icons](https://github.com/coreui/coreui-icons)

## Installation

```sh
pnpm add @ngxi/cib
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiCib, cibCcAmazonPay } from '@ngxi/cib'

@Component({
  imports: [NgxiCib],
  template: `<svg [ngxiCib]="cibCcAmazonPay"></svg>`
})
export class UsageIcon {
  protected cibCcAmazonPay = cibCcAmazonPay
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

CC0 1.0 License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/cib?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/cib
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/cib?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/cib
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/cib?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/cib
[license-src]: https://img.shields.io/npm/l/@ngxi/cib?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/cib
