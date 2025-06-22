# @ngxi/nimbus

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Nimbus
- **Prefix**: `nimbus`
- **Icons**: 140
- **License**: [MIT](https://github.com/cyberalien/nimbus-icons/blob/main/LICENSE)
- **Author**: [Linkedstore S.A.](https://github.com/cyberalien/nimbus-icons)
- **Website**: [https://github.com/cyberalien/nimbus-icons](https://github.com/cyberalien/nimbus-icons)

## Installation

```sh
pnpm add @ngxi/nimbus
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiNimbus, nimbusBarcode } from '@ngxi/nimbus'

@Component({
  imports: [NgxiNimbus],
  template: `<svg [ngxiNimbus]="nimbusBarcode"></svg>`
})
export class UsageIcon {
  protected nimbusBarcode = nimbusBarcode
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/nimbus?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/nimbus
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/nimbus?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/nimbus
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/nimbus?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/nimbus
[license-src]: https://img.shields.io/npm/l/@ngxi/nimbus?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/nimbus
