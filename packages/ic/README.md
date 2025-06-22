# @ngxi/ic

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Google Material Icons
- **Prefix**: `ic`
- **Icons**: 10955
- **License**: [Apache 2.0](https://github.com/material-icons/material-icons/blob/master/LICENSE)
- **Author**: [Material Design Authors](https://github.com/material-icons/material-icons)
- **Website**: [https://github.com/material-icons/material-icons](https://github.com/material-icons/material-icons)

## Installation

```sh
pnpm add @ngxi/ic
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiIc, icBaselineNotificationsActive } from '@ngxi/ic'

@Component({
  imports: [NgxiIc],
  template: `<svg [ngxiIc]="icBaselineNotificationsActive"></svg>`
})
export class UsageIcon {
  protected icBaselineNotificationsActive = icBaselineNotificationsActive
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/ic?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/ic
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/ic?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/ic
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/ic?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/ic
[license-src]: https://img.shields.io/npm/l/@ngxi/ic?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/ic
