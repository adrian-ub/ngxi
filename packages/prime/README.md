# @ngxi/prime

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Prime Icons
- **Prefix**: `prime`
- **Icons**: 313
- **License**: [MIT](https://github.com/primefaces/primeicons/blob/master/LICENSE)
- **Author**: [PrimeTek](https://github.com/primefaces/primeicons)
- **Website**: [https://github.com/primefaces/primeicons](https://github.com/primefaces/primeicons)

## Installation

```sh
pnpm add @ngxi/prime
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiPrime, primeBook } from '@ngxi/prime'

@Component({
  imports: [NgxiPrime],
  template: `<svg [ngxiPrime]="primeBook"></svg>`
})
export class UsageIcon {
  protected primeBook = primeBook
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/prime?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/prime
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/prime?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/prime
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/prime?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/prime
[license-src]: https://img.shields.io/npm/l/@ngxi/prime?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/prime
