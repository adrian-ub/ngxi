# @ngxi/fa-solid

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Font Awesome 5 Solid
- **Prefix**: `fa-solid`
- **Icons**: 1001
- **License**: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Author**: [Dave Gandy](https://github.com/FortAwesome/Font-Awesome)
- **Website**: [https://github.com/FortAwesome/Font-Awesome](https://github.com/FortAwesome/Font-Awesome)

## Installation

```sh
pnpm add @ngxi/fa-solid
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiFaSolid, faSolidSearchPlus } from '@ngxi/fa-solid'

@Component({
  imports: [NgxiFaSolid],
  template: `<svg [ngxiFaSolid]="faSolidSearchPlus"></svg>`
})
export class UsageIcon {
  protected faSolidSearchPlus = faSolidSearchPlus
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/fa-solid?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/fa-solid
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/fa-solid?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/fa-solid
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/fa-solid?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/fa-solid
[license-src]: https://img.shields.io/npm/l/@ngxi/fa-solid?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/fa-solid
