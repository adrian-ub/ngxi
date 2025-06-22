# @ngxi/bi

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Bootstrap Icons
- **Prefix**: `bi`
- **Icons**: 2078
- **License**: [MIT](https://github.com/twbs/icons/blob/main/LICENSE.md)
- **Author**: [The Bootstrap Authors](https://github.com/twbs/icons)
- **Website**: [https://github.com/twbs/icons](https://github.com/twbs/icons)

## Installation

```sh
pnpm add @ngxi/bi
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiBi, biGraphUp } from '@ngxi/bi'

@Component({
  imports: [NgxiBi],
  template: `<svg [ngxiBi]="biGraphUp"></svg>`
})
export class UsageIcon {
  protected biGraphUp = biGraphUp
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/bi?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/bi
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/bi?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/bi
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/bi?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/bi
[license-src]: https://img.shields.io/npm/l/@ngxi/bi?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/bi
