# @ngxi/flag

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Flag Icons
- **Prefix**: `flag`
- **Icons**: 542
- **License**: [MIT](https://github.com/lipis/flag-icons/blob/main/LICENSE)
- **Author**: [Panayiotis Lipiridis](https://github.com/lipis/flag-icons)
- **Website**: [https://github.com/lipis/flag-icons](https://github.com/lipis/flag-icons)

## Installation

```sh
pnpm add @ngxi/flag
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiFlag, flagFr1x1 } from '@ngxi/flag'

@Component({
  imports: [NgxiFlag],
  template: `<svg [ngxiFlag]="flagFr1x1"></svg>`
})
export class UsageIcon {
  protected flagFr1x1 = flagFr1x1
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/flag?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/flag
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/flag?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/flag
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/flag?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/flag
[license-src]: https://img.shields.io/npm/l/@ngxi/flag?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/flag
