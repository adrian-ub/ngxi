# @ngxi/octicon

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Octicons
- **Prefix**: `octicon`
- **Icons**: 651
- **License**: [MIT](https://github.com/primer/octicons/blob/main/LICENSE)
- **Author**: [GitHub](https://github.com/primer/octicons/)
- **Website**: [https://github.com/primer/octicons/](https://github.com/primer/octicons/)

## Installation

```sh
pnpm add @ngxi/octicon
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiOcticon, octiconAlert24 } from '@ngxi/octicon'

@Component({
  imports: [NgxiOcticon],
  template: `<svg [ngxiOcticon]="octiconAlert24"></svg>`
})
export class UsageIcon {
  protected octiconAlert24 = octiconAlert24
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/octicon?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/octicon
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/octicon?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/octicon
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/octicon?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/octicon
[license-src]: https://img.shields.io/npm/l/@ngxi/octicon?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/octicon
