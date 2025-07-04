# @ngxi/flat-ui

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Flat UI Icons
- **Prefix**: `flat-ui`
- **Icons**: 100
- **License**: [MIT](https://github.com/designmodo/Flat-UI/blob/master/LICENSE)
- **Author**: [Designmodo, Inc.](https://github.com/designmodo/Flat-UI)
- **Website**: [https://github.com/designmodo/Flat-UI](https://github.com/designmodo/Flat-UI)

## Installation

```sh
pnpm add @ngxi/flat-ui
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiFlatUi, flatUiMap } from '@ngxi/flat-ui'

@Component({
  imports: [NgxiFlatUi],
  template: `<svg [ngxiFlatUi]="flatUiMap"></svg>`
})
export class UsageIcon {
  protected flatUiMap = flatUiMap
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/flat-ui?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/flat-ui
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/flat-ui?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/flat-ui
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/flat-ui?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/flat-ui
[license-src]: https://img.shields.io/npm/l/@ngxi/flat-ui?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/flat-ui
