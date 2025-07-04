# @ngxi/gravity-ui

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Gravity UI Icons
- **Prefix**: `gravity-ui`
- **Icons**: 739
- **License**: [MIT](https://github.com/gravity-ui/icons/blob/main/LICENSE)
- **Author**: [YANDEX LLC](https://github.com/gravity-ui/icons/)
- **Website**: [https://github.com/gravity-ui/icons/](https://github.com/gravity-ui/icons/)

## Installation

```sh
pnpm add @ngxi/gravity-ui
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiGravityUi, gravityUiMagnifier } from '@ngxi/gravity-ui'

@Component({
  imports: [NgxiGravityUi],
  template: `<svg [ngxiGravityUi]="gravityUiMagnifier"></svg>`
})
export class UsageIcon {
  protected gravityUiMagnifier = gravityUiMagnifier
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/gravity-ui?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/gravity-ui
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/gravity-ui?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/gravity-ui
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/gravity-ui?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/gravity-ui
[license-src]: https://img.shields.io/npm/l/@ngxi/gravity-ui?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/gravity-ui
