# @ngxi/dashicons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Dashicons
- **Prefix**: `dashicons`
- **Icons**: 342
- **License**: [GPL](https://github.com/WordPress/dashicons/blob/master/gpl.txt)
- **Author**: [WordPress](https://github.com/WordPress/dashicons)
- **Website**: [https://github.com/WordPress/dashicons](https://github.com/WordPress/dashicons)

## Installation

```sh
pnpm add @ngxi/dashicons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiDashicons, dashiconsShortcode } from '@ngxi/dashicons'

@Component({
  imports: [NgxiDashicons],
  template: `<svg [ngxiDashicons]="dashiconsShortcode"></svg>`
})
export class UsageIcon {
  protected dashiconsShortcode = dashiconsShortcode
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

GPL License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/dashicons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/dashicons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/dashicons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/dashicons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/dashicons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/dashicons
[license-src]: https://img.shields.io/npm/l/@ngxi/dashicons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/dashicons
