# @ngxi/pepicons-pop

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Pepicons Pop!
- **Prefix**: `pepicons-pop`
- **Icons**: 1275
- **License**: [CC BY 4.0](https://github.com/CyCraft/pepicons/blob/dev/LICENSE)
- **Author**: [CyCraft](https://github.com/CyCraft/pepicons)
- **Website**: [https://github.com/CyCraft/pepicons](https://github.com/CyCraft/pepicons)

## Installation

```sh
pnpm add @ngxi/pepicons-pop
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiPepiconsPop, pepiconsPopBookmark } from '@ngxi/pepicons-pop'

@Component({
  imports: [NgxiPepiconsPop],
  template: `<svg [ngxiPepiconsPop]="pepiconsPopBookmark"></svg>`
})
export class UsageIcon {
  protected pepiconsPopBookmark = pepiconsPopBookmark
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

CC BY 4.0 License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/pepicons-pop?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/pepicons-pop
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/pepicons-pop?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/pepicons-pop
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/pepicons-pop?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/pepicons-pop
[license-src]: https://img.shields.io/npm/l/@ngxi/pepicons-pop?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/pepicons-pop
