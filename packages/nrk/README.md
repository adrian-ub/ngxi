# @ngxi/nrk

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: NRK Core Icons
- **Prefix**: `nrk`
- **Icons**: 236
- **License**: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Author**: [Norsk rikskringkasting](https://github.com/nrkno/core-icons)
- **Website**: [https://github.com/nrkno/core-icons](https://github.com/nrkno/core-icons)

## Installation

```sh
pnpm add @ngxi/nrk
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiNrk, nrkLyn } from '@ngxi/nrk'

@Component({
  imports: [NgxiNrk],
  template: `<svg [ngxiNrk]="nrkLyn"></svg>`
})
export class UsageIcon {
  protected nrkLyn = nrkLyn
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

CC BY 4.0 License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/nrk?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/nrk
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/nrk?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/nrk
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/nrk?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/nrk
[license-src]: https://img.shields.io/npm/l/@ngxi/nrk?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/nrk
