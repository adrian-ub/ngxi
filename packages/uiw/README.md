# @ngxi/uiw

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: uiw icons
- **Prefix**: `uiw`
- **Icons**: 214
- **License**: [MIT](https://github.com/uiwjs/icons/blob/master/LICENSE)
- **Author**: [liwen0526](https://github.com/uiwjs/icons)
- **Website**: [https://github.com/uiwjs/icons](https://github.com/uiwjs/icons)

## Installation

```sh
pnpm add @ngxi/uiw
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiUiw, uiwCut } from '@ngxi/uiw'

@Component({
  imports: [NgxiUiw],
  template: `<svg [ngxiUiw]="uiwCut"></svg>`
})
export class UsageIcon {
  protected uiwCut = uiwCut
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/uiw?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/uiw
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/uiw?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/uiw
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/uiw?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/uiw
[license-src]: https://img.shields.io/npm/l/@ngxi/uiw?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/uiw
