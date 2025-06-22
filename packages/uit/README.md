# @ngxi/uit

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Unicons Thin Line
- **Prefix**: `uit`
- **Icons**: 216
- **License**: [Apache 2.0](https://github.com/Iconscout/unicons/blob/master/LICENSE)
- **Author**: [Iconscout](https://github.com/Iconscout/unicons)
- **Website**: [https://github.com/Iconscout/unicons](https://github.com/Iconscout/unicons)

## Installation

```sh
pnpm add @ngxi/uit
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiUit, uitCircuit } from '@ngxi/uit'

@Component({
  imports: [NgxiUit],
  template: `<svg [ngxiUit]="uitCircuit"></svg>`
})
export class UsageIcon {
  protected uitCircuit = uitCircuit
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

Apache 2.0 License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/uit?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/uit
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/uit?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/uit
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/uit?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/uit
[license-src]: https://img.shields.io/npm/l/@ngxi/uit?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/uit
