# @ngxi/jam

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Jam Icons
- **Prefix**: `jam`
- **Icons**: 940
- **License**: [MIT](https://github.com/cyberalien/jam-backup/blob/main/LICENSE)
- **Author**: [Michael Amprimo](https://github.com/michaelampr)
- **Website**: [https://github.com/michaelampr](https://github.com/michaelampr)

## Installation

```sh
pnpm add @ngxi/jam
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiJam, jamChevronsSquareUpRight } from '@ngxi/jam'

@Component({
  imports: [NgxiJam],
  template: `<svg [ngxiJam]="jamChevronsSquareUpRight"></svg>`
})
export class UsageIcon {
  protected jamChevronsSquareUpRight = jamChevronsSquareUpRight
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/jam?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/jam
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/jam?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/jam
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/jam?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/jam
[license-src]: https://img.shields.io/npm/l/@ngxi/jam?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/jam
