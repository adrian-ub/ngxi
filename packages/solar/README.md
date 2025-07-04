# @ngxi/solar

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Solar
- **Prefix**: `solar`
- **Icons**: 7401
- **License**: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Author**: [480 Design](https://www.figma.com/community/file/1166831539721848736)
- **Website**: [https://www.figma.com/community/file/1166831539721848736](https://www.figma.com/community/file/1166831539721848736)

## Installation

```sh
pnpm add @ngxi/solar
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiSolar, solarMagniferZoomOutBroken } from '@ngxi/solar'

@Component({
  imports: [NgxiSolar],
  template: `<svg [ngxiSolar]="solarMagniferZoomOutBroken"></svg>`
})
export class UsageIcon {
  protected solarMagniferZoomOutBroken = solarMagniferZoomOutBroken
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/solar?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/solar
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/solar?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/solar
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/solar?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/solar
[license-src]: https://img.shields.io/npm/l/@ngxi/solar?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/solar
