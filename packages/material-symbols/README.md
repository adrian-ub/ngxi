# @ngxi/material-symbols

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Material Symbols
- **Prefix**: `material-symbols`
- **Icons**: 14404
- **License**: [Apache 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)
- **Author**: [Google](https://github.com/google/material-design-icons)
- **Website**: [https://github.com/google/material-design-icons](https://github.com/google/material-design-icons)

## Installation

```sh
pnpm add @ngxi/material-symbols
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiMaterialSymbols, materialSymbolsDownloading } from '@ngxi/material-symbols'

@Component({
  imports: [NgxiMaterialSymbols],
  template: `<svg [ngxiMaterialSymbols]="materialSymbolsDownloading"></svg>`
})
export class UsageIcon {
  protected materialSymbolsDownloading = materialSymbolsDownloading
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/material-symbols?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/material-symbols
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/material-symbols?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/material-symbols
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/material-symbols?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/material-symbols
[license-src]: https://img.shields.io/npm/l/@ngxi/material-symbols?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/material-symbols
