# @ngxi/akar-icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Akar Icons
- **Prefix**: `akar-icons`
- **Icons**: 454
- **License**: [MIT](https://github.com/artcoholic/akar-icons/blob/master/LICENSE)
- **Author**: [Arturo Wibawa](https://github.com/artcoholic/akar-icons)
- **Website**: [https://github.com/artcoholic/akar-icons](https://github.com/artcoholic/akar-icons)

## Installation

```sh
pnpm add @ngxi/akar-icons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiAkarIcons, akarIconsPaper } from '@ngxi/akar-icons'

@Component({
  imports: [NgxiAkarIcons],
  template: `<svg [ngxiAkarIcons]="akarIconsPaper"></svg>`
})
export class UsageIcon {
  protected akarIconsPaper = akarIconsPaper
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/akar-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/akar-icons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/akar-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/akar-icons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/akar-icons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/akar-icons
[license-src]: https://img.shields.io/npm/l/@ngxi/akar-icons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/akar-icons
