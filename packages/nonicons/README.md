# @ngxi/nonicons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Nonicons
- **Prefix**: `nonicons`
- **Icons**: 69
- **License**: [MIT](https://github.com/yamatsum/nonicons/blob/master/LICENSE)
- **Author**: [yamatsum](https://github.com/yamatsum/nonicons)
- **Website**: [https://github.com/yamatsum/nonicons](https://github.com/yamatsum/nonicons)

## Installation

```sh
pnpm add @ngxi/nonicons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiNonicons, noniconsKotlin16 } from '@ngxi/nonicons'

@Component({
  imports: [NgxiNonicons],
  template: `<svg [ngxiNonicons]="noniconsKotlin16"></svg>`
})
export class UsageIcon {
  protected noniconsKotlin16 = noniconsKotlin16
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/nonicons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/nonicons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/nonicons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/nonicons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/nonicons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/nonicons
[license-src]: https://img.shields.io/npm/l/@ngxi/nonicons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/nonicons
