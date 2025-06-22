# @ngxi/et

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Elegant
- **Prefix**: `et`
- **Icons**: 100
- **License**: [GPL 3.0](https://www.gnu.org/licenses/gpl.html)
- **Author**: [Kenny Sing](https://github.com/pprince/etlinefont-bower)
- **Website**: [https://github.com/pprince/etlinefont-bower](https://github.com/pprince/etlinefont-bower)

## Installation

```sh
pnpm add @ngxi/et
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiEt, etProfileFemale } from '@ngxi/et'

@Component({
  imports: [NgxiEt],
  template: `<svg [ngxiEt]="etProfileFemale"></svg>`
})
export class UsageIcon {
  protected etProfileFemale = etProfileFemale
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

GPL 3.0 License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/et?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/et
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/et?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/et
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/et?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/et
[license-src]: https://img.shields.io/npm/l/@ngxi/et?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/et
