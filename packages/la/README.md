# @ngxi/la

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Line Awesome
- **Prefix**: `la`
- **Icons**: 1544
- **License**: [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
- **Author**: [Icons8](https://github.com/icons8/line-awesome)
- **Website**: [https://github.com/icons8/line-awesome](https://github.com/icons8/line-awesome)

## Installation

```sh
pnpm add @ngxi/la
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiLa, laArchiveSolid } from '@ngxi/la'

@Component({
  imports: [NgxiLa],
  template: `<svg [ngxiLa]="laArchiveSolid"></svg>`
})
export class UsageIcon {
  protected laArchiveSolid = laArchiveSolid
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/la?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/la
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/la?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/la
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/la?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/la
[license-src]: https://img.shields.io/npm/l/@ngxi/la?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/la
