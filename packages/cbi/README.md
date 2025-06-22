# @ngxi/cbi

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Custom Brand Icons
- **Prefix**: `cbi`
- **Icons**: 1469
- **License**: [CC BY-NC-SA 4.0](https://github.com/elax46/custom-brand-icons/blob/main/LICENSE)
- **Author**: [Emanuele &amp; rchiileea](https://github.com/elax46/custom-brand-icons)
- **Website**: [https://github.com/elax46/custom-brand-icons](https://github.com/elax46/custom-brand-icons)

## Installation

```sh
pnpm add @ngxi/cbi
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiCbi, cbiMitsubishi } from '@ngxi/cbi'

@Component({
  imports: [NgxiCbi],
  template: `<svg [ngxiCbi]="cbiMitsubishi"></svg>`
})
export class UsageIcon {
  protected cbiMitsubishi = cbiMitsubishi
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

CC BY-NC-SA 4.0 License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/cbi?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/cbi
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/cbi?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/cbi
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/cbi?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/cbi
[license-src]: https://img.shields.io/npm/l/@ngxi/cbi?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/cbi
