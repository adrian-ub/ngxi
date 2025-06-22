# @ngxi/ci

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: coolicons
- **Prefix**: `ci`
- **Icons**: 442
- **License**: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Author**: [Kryston Schwarze](https://github.com/krystonschwarze/coolicons)
- **Website**: [https://github.com/krystonschwarze/coolicons](https://github.com/krystonschwarze/coolicons)

## Installation

```sh
pnpm add @ngxi/ci
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiCi, ciBulb } from '@ngxi/ci'

@Component({
  imports: [NgxiCi],
  template: `<svg [ngxiCi]="ciBulb"></svg>`
})
export class UsageIcon {
  protected ciBulb = ciBulb
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/ci?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/ci
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/ci?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/ci
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/ci?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/ci
[license-src]: https://img.shields.io/npm/l/@ngxi/ci?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/ci
