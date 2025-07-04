# @ngxi/maki

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Maki
- **Prefix**: `maki`
- **Icons**: 215
- **License**: [CC0](https://creativecommons.org/publicdomain/zero/1.0/)
- **Author**: [Mapbox](https://github.com/mapbox/maki)
- **Website**: [https://github.com/mapbox/maki](https://github.com/mapbox/maki)

## Installation

```sh
pnpm add @ngxi/maki
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiMaki, makiEntranceAlt1 } from '@ngxi/maki'

@Component({
  imports: [NgxiMaki],
  template: `<svg [ngxiMaki]="makiEntranceAlt1"></svg>`
})
export class UsageIcon {
  protected makiEntranceAlt1 = makiEntranceAlt1
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

CC0 License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/maki?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/maki
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/maki?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/maki
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/maki?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/maki
[license-src]: https://img.shields.io/npm/l/@ngxi/maki?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/maki
