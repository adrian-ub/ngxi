# @ngxi/oi

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Open Iconic
- **Prefix**: `oi`
- **Icons**: 223
- **License**: [MIT](https://github.com/iconic/open-iconic/blob/master/ICON-LICENSE)
- **Author**: [Iconic](https://github.com/iconic/open-iconic)
- **Website**: [https://github.com/iconic/open-iconic](https://github.com/iconic/open-iconic)

## Installation

```sh
pnpm add @ngxi/oi
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiOi, oiBug } from '@ngxi/oi'

@Component({
  imports: [NgxiOi],
  template: `<svg [ngxiOi]="oiBug"></svg>`
})
export class UsageIcon {
  protected oiBug = oiBug
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/oi?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/oi
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/oi?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/oi
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/oi?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/oi
[license-src]: https://img.shields.io/npm/l/@ngxi/oi?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/oi
