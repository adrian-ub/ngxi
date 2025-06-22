# @ngxi/cryptocurrency-color

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Cryptocurrency Color Icons
- **Prefix**: `cryptocurrency-color`
- **Icons**: 483
- **License**: [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)
- **Author**: [Christopher Downer](https://github.com/atomiclabs/cryptocurrency-icons)
- **Website**: [https://github.com/atomiclabs/cryptocurrency-icons](https://github.com/atomiclabs/cryptocurrency-icons)

## Installation

```sh
pnpm add @ngxi/cryptocurrency-color
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiCryptocurrencyColor, cryptocurrencyColorBtc } from '@ngxi/cryptocurrency-color'

@Component({
  imports: [NgxiCryptocurrencyColor],
  template: `<svg [ngxiCryptocurrencyColor]="cryptocurrencyColorBtc"></svg>`
})
export class UsageIcon {
  protected cryptocurrencyColorBtc = cryptocurrencyColorBtc
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

CC0 1.0 License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/cryptocurrency-color?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/cryptocurrency-color
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/cryptocurrency-color?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/cryptocurrency-color
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/cryptocurrency-color?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/cryptocurrency-color
[license-src]: https://img.shields.io/npm/l/@ngxi/cryptocurrency-color?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/cryptocurrency-color
