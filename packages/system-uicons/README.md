# @ngxi/system-uicons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: System UIcons
- **Prefix**: `system-uicons`
- **Icons**: 430
- **License**: [Unlicense](https://github.com/CoreyGinnivan/system-uicons/blob/master/LICENSE)
- **Author**: [Corey Ginnivan](https://github.com/CoreyGinnivan/system-uicons)
- **Website**: [https://github.com/CoreyGinnivan/system-uicons](https://github.com/CoreyGinnivan/system-uicons)

## Installation

```sh
pnpm add @ngxi/system-uicons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiSystemUicons, systemUiconsBell } from '@ngxi/system-uicons'

@Component({
  imports: [NgxiSystemUicons],
  template: `<svg [ngxiSystemUicons]="systemUiconsBell"></svg>`
})
export class UsageIcon {
  protected systemUiconsBell = systemUiconsBell
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

Unlicense License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/system-uicons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/system-uicons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/system-uicons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/system-uicons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/system-uicons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/system-uicons
[license-src]: https://img.shields.io/npm/l/@ngxi/system-uicons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/system-uicons
