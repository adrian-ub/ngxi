# @ngxi/bxl

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: BoxIcons Logo
- **Prefix**: `bxl`
- **Icons**: 155
- **License**: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Author**: [Atisa](https://github.com/atisawd/boxicons)
- **Website**: [https://github.com/atisawd/boxicons](https://github.com/atisawd/boxicons)

## Installation

```sh
pnpm add @ngxi/bxl
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiBxl, bxlPatreon } from '@ngxi/bxl'

@Component({
  imports: [NgxiBxl],
  template: `<svg [ngxiBxl]="bxlPatreon"></svg>`
})
export class UsageIcon {
  protected bxlPatreon = bxlPatreon
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/bxl?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/bxl
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/bxl?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/bxl
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/bxl?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/bxl
[license-src]: https://img.shields.io/npm/l/@ngxi/bxl?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/bxl
