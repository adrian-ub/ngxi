# @ngxi/brandico

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Brandico
- **Prefix**: `brandico`
- **Icons**: 45
- **License**: [CC BY SA](https://creativecommons.org/licenses/by-sa/3.0/)
- **Author**: [Fontello](https://github.com/fontello/brandico.font)
- **Website**: [https://github.com/fontello/brandico.font](https://github.com/fontello/brandico.font)

## Installation

```sh
pnpm add @ngxi/brandico
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiBrandico, brandicoVimeo } from '@ngxi/brandico'

@Component({
  imports: [NgxiBrandico],
  template: `<svg [ngxiBrandico]="brandicoVimeo"></svg>`
})
export class UsageIcon {
  protected brandicoVimeo = brandicoVimeo
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

CC BY SA License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/brandico?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/brandico
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/brandico?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/brandico
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/brandico?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/brandico
[license-src]: https://img.shields.io/npm/l/@ngxi/brandico?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/brandico
