# @ngxi/subway

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Subway Icon Set
- **Prefix**: `subway`
- **Icons**: 306
- **License**: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Author**: [Mariusz Ostrowski](https://github.com/mariuszostrowski/subway)
- **Website**: [https://github.com/mariuszostrowski/subway](https://github.com/mariuszostrowski/subway)

## Installation

```sh
pnpm add @ngxi/subway
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiSubway, subwayCall2 } from '@ngxi/subway'

@Component({
  imports: [NgxiSubway],
  template: `<svg [ngxiSubway]="subwayCall2"></svg>`
})
export class UsageIcon {
  protected subwayCall2 = subwayCall2
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/subway?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/subway
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/subway?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/subway
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/subway?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/subway
[license-src]: https://img.shields.io/npm/l/@ngxi/subway?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/subway
