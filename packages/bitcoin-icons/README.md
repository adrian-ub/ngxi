# @ngxi/bitcoin-icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Bitcoin Icons
- **Prefix**: `bitcoin-icons`
- **Icons**: 250
- **License**: [MIT](https://github.com/BitcoinDesign/Bitcoin-Icons/blob/main/LICENSE-MIT)
- **Author**: [Bitcoin Design Community](https://github.com/BitcoinDesign/Bitcoin-Icons)
- **Website**: [https://github.com/BitcoinDesign/Bitcoin-Icons](https://github.com/BitcoinDesign/Bitcoin-Icons)

## Installation

```sh
pnpm add @ngxi/bitcoin-icons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiBitcoinIcons, bitcoinIconsExchangeOutline } from '@ngxi/bitcoin-icons'

@Component({
  imports: [NgxiBitcoinIcons],
  template: `<svg [ngxiBitcoinIcons]="bitcoinIconsExchangeOutline"></svg>`
})
export class UsageIcon {
  protected bitcoinIconsExchangeOutline = bitcoinIconsExchangeOutline
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/bitcoin-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/bitcoin-icons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/bitcoin-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/bitcoin-icons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/bitcoin-icons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/bitcoin-icons
[license-src]: https://img.shields.io/npm/l/@ngxi/bitcoin-icons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/bitcoin-icons
