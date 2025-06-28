# @ngxi/token-branded

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Web3 Icons Branded
- **Prefix**: `token-branded`
- **Icons**: 1984
- **License**: [MIT](https://github.com/0xa3k5/web3icons/blob/main/LICENCE)
- **Author**: [0xa3k5](https://github.com/0xa3k5/web3icons)
- **Website**: [https://github.com/0xa3k5/web3icons](https://github.com/0xa3k5/web3icons)

## Installation

```sh
pnpm add @ngxi/token-branded
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiTokenBranded, tokenBrandedBit } from '@ngxi/token-branded'

@Component({
  imports: [NgxiTokenBranded],
  template: `<svg [ngxiTokenBranded]="tokenBrandedBit"></svg>`
})
export class UsageIcon {
  protected tokenBrandedBit = tokenBrandedBit
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/token-branded?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/token-branded
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/token-branded?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/token-branded
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/token-branded?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/token-branded
[license-src]: https://img.shields.io/npm/l/@ngxi/token-branded?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/token-branded
