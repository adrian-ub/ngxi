# @ngxi/svg-spinners

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: SVG Spinners
- **Prefix**: `svg-spinners`
- **Icons**: 46
- **License**: [MIT](https://github.com/n3r4zzurr0/svg-spinners/blob/main/LICENSE)
- **Author**: [Utkarsh Verma](https://github.com/n3r4zzurr0/svg-spinners)
- **Website**: [https://github.com/n3r4zzurr0/svg-spinners](https://github.com/n3r4zzurr0/svg-spinners)

## Installation

```sh
pnpm add @ngxi/svg-spinners
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiSvgSpinners, svgSpinnersTadpole } from '@ngxi/svg-spinners'

@Component({
  imports: [NgxiSvgSpinners],
  template: `<svg [ngxiSvgSpinners]="svgSpinnersTadpole"></svg>`
})
export class UsageIcon {
  protected svgSpinnersTadpole = svgSpinnersTadpole
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/svg-spinners?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/svg-spinners
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/svg-spinners?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/svg-spinners
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/svg-spinners?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/svg-spinners
[license-src]: https://img.shields.io/npm/l/@ngxi/svg-spinners?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/svg-spinners
