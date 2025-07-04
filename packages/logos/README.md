# @ngxi/logos

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: SVG Logos
- **Prefix**: `logos`
- **Icons**: 1838
- **License**: [CC0](https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt)
- **Author**: [Gil Barbara](https://github.com/gilbarbara/logos)
- **Website**: [https://github.com/gilbarbara/logos](https://github.com/gilbarbara/logos)

## Installation

```sh
pnpm add @ngxi/logos
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiLogos, logosNpmIcon } from '@ngxi/logos'

@Component({
  imports: [NgxiLogos],
  template: `<svg [ngxiLogos]="logosNpmIcon"></svg>`
})
export class UsageIcon {
  protected logosNpmIcon = logosNpmIcon
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

CC0 License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/logos?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/logos
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/logos?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/logos
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/logos?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/logos
[license-src]: https://img.shields.io/npm/l/@ngxi/logos?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/logos
