# @ngxi/fontisto

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Fontisto
- **Prefix**: `fontisto`
- **Icons**: 615
- **License**: [MIT](https://github.com/kenangundogan/fontisto/blob/master/LICENSE)
- **Author**: [Kenan Gündoğan](https://github.com/kenangundogan/fontisto)
- **Website**: [https://github.com/kenangundogan/fontisto](https://github.com/kenangundogan/fontisto)

## Installation

```sh
pnpm add @ngxi/fontisto
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiFontisto, fontistoPrescription } from '@ngxi/fontisto'

@Component({
  imports: [NgxiFontisto],
  template: `<svg [ngxiFontisto]="fontistoPrescription"></svg>`
})
export class UsageIcon {
  protected fontistoPrescription = fontistoPrescription
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/fontisto?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/fontisto
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/fontisto?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/fontisto
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/fontisto?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/fontisto
[license-src]: https://img.shields.io/npm/l/@ngxi/fontisto?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/fontisto
