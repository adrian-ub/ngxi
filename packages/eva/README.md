# @ngxi/eva

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Eva Icons
- **Prefix**: `eva`
- **Icons**: 490
- **License**: [MIT](https://github.com/akveo/eva-icons/blob/master/LICENSE.txt)
- **Author**: [Akveo](https://github.com/akveo/eva-icons/)
- **Website**: [https://github.com/akveo/eva-icons/](https://github.com/akveo/eva-icons/)

## Installation

```sh
pnpm add @ngxi/eva
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiEva, evaDropletOffOutline } from '@ngxi/eva'

@Component({
  imports: [NgxiEva],
  template: `<svg [ngxiEva]="evaDropletOffOutline"></svg>`
})
export class UsageIcon {
  protected evaDropletOffOutline = evaDropletOffOutline
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/eva?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/eva
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/eva?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/eva
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/eva?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/eva
[license-src]: https://img.shields.io/npm/l/@ngxi/eva?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/eva
