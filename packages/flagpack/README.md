# @ngxi/flagpack

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Flagpack
- **Prefix**: `flagpack`
- **Icons**: 255
- **License**: [MIT](https://github.com/Yummygum/flagpack-core/blob/main/LICENSE)
- **Author**: [Yummygum](https://github.com/Yummygum/flagpack-core)
- **Website**: [https://github.com/Yummygum/flagpack-core](https://github.com/Yummygum/flagpack-core)

## Installation

```sh
pnpm add @ngxi/flagpack
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiFlagpack, flagpackCi } from '@ngxi/flagpack'

@Component({
  imports: [NgxiFlagpack],
  template: `<svg [ngxiFlagpack]="flagpackCi"></svg>`
})
export class UsageIcon {
  protected flagpackCi = flagpackCi
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/flagpack?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/flagpack
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/flagpack?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/flagpack
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/flagpack?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/flagpack
[license-src]: https://img.shields.io/npm/l/@ngxi/flagpack?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/flagpack
