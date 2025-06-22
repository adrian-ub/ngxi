# @ngxi/iconoir

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Iconoir
- **Prefix**: `iconoir`
- **Icons**: 1671
- **License**: [MIT](https://github.com/iconoir-icons/iconoir/blob/main/LICENSE)
- **Author**: [Luca Burgio](https://github.com/iconoir-icons/iconoir)
- **Website**: [https://github.com/iconoir-icons/iconoir](https://github.com/iconoir-icons/iconoir)

## Installation

```sh
pnpm add @ngxi/iconoir
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiIconoir, iconoirChatBubbleCheck } from '@ngxi/iconoir'

@Component({
  imports: [NgxiIconoir],
  template: `<svg [ngxiIconoir]="iconoirChatBubbleCheck"></svg>`
})
export class UsageIcon {
  protected iconoirChatBubbleCheck = iconoirChatBubbleCheck
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/iconoir?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/iconoir
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/iconoir?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/iconoir
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/iconoir?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/iconoir
[license-src]: https://img.shields.io/npm/l/@ngxi/iconoir?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/iconoir
