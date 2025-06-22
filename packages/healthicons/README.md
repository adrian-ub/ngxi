# @ngxi/healthicons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Health Icons
- **Prefix**: `healthicons`
- **Icons**: 2000
- **License**: [MIT](https://github.com/resolvetosavelives/healthicons/blob/main/LICENSE)
- **Author**: [Resolve to Save Lives](https://github.com/resolvetosavelives/healthicons)
- **Website**: [https://github.com/resolvetosavelives/healthicons](https://github.com/resolvetosavelives/healthicons)

## Installation

```sh
pnpm add @ngxi/healthicons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiHealthicons, healthiconsColdChain } from '@ngxi/healthicons'

@Component({
  imports: [NgxiHealthicons],
  template: `<svg [ngxiHealthicons]="healthiconsColdChain"></svg>`
})
export class UsageIcon {
  protected healthiconsColdChain = healthiconsColdChain
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/healthicons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/healthicons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/healthicons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/healthicons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/healthicons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/healthicons
[license-src]: https://img.shields.io/npm/l/@ngxi/healthicons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/healthicons
