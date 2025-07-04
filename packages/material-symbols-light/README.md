# @ngxi/material-symbols-light

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Material Symbols Light
- **Prefix**: `material-symbols-light`
- **Icons**: 14481
- **License**: [Apache 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)
- **Author**: [Google](https://github.com/google/material-design-icons)
- **Website**: [https://github.com/google/material-design-icons](https://github.com/google/material-design-icons)

## Installation

```sh
pnpm add @ngxi/material-symbols-light
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiMaterialSymbolsLight, materialSymbolsLightDownloading } from '@ngxi/material-symbols-light'

@Component({
  imports: [NgxiMaterialSymbolsLight],
  template: `<svg [ngxiMaterialSymbolsLight]="materialSymbolsLightDownloading"></svg>`
})
export class UsageIcon {
  protected materialSymbolsLightDownloading = materialSymbolsLightDownloading
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/material-symbols-light?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/material-symbols-light
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/material-symbols-light?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/material-symbols-light
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/material-symbols-light?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/material-symbols-light
[license-src]: https://img.shields.io/npm/l/@ngxi/material-symbols-light?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/material-symbols-light
