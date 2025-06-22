# @ngxi/meteocons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Meteocons
- **Prefix**: `meteocons`
- **Icons**: 447
- **License**: [MIT](https://github.com/basmilius/weather-icons/blob/dev/LICENSE)
- **Author**: [Bas Milius](https://github.com/basmilius/weather-icons)
- **Website**: [https://github.com/basmilius/weather-icons](https://github.com/basmilius/weather-icons)

## Installation

```sh
pnpm add @ngxi/meteocons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiMeteocons, meteoconsHurricaneFill } from '@ngxi/meteocons'

@Component({
  imports: [NgxiMeteocons],
  template: `<svg [ngxiMeteocons]="meteoconsHurricaneFill"></svg>`
})
export class UsageIcon {
  protected meteoconsHurricaneFill = meteoconsHurricaneFill
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/meteocons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/meteocons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/meteocons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/meteocons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/meteocons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/meteocons
[license-src]: https://img.shields.io/npm/l/@ngxi/meteocons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/meteocons
