# @ngxi/gg

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: css.gg
- **Prefix**: `gg`
- **Icons**: 704
- **License**: [MIT](https://github.com/astrit/css.gg/blob/master/LICENSE)
- **Author**: [Astrit](https://github.com/astrit/css.gg)
- **Website**: [https://github.com/astrit/css.gg](https://github.com/astrit/css.gg)

## Installation

```sh
pnpm add @ngxi/gg
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiGg, ggAlignLeft } from '@ngxi/gg'

@Component({
  imports: [NgxiGg],
  template: `<svg [ngxiGg]="ggAlignLeft"></svg>`
})
export class UsageIcon {
  protected ggAlignLeft = ggAlignLeft
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/gg?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/gg
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/gg?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/gg
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/gg?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/gg
[license-src]: https://img.shields.io/npm/l/@ngxi/gg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/gg
