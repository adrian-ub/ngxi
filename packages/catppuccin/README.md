# @ngxi/catppuccin

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Catppuccin Icons
- **Prefix**: `catppuccin`
- **Icons**: 560
- **License**: [MIT](https://github.com/catppuccin/vscode-icons/blob/main/LICENSE)
- **Author**: [Catppuccin](https://github.com/catppuccin/vscode-icons)
- **Website**: [https://github.com/catppuccin/vscode-icons](https://github.com/catppuccin/vscode-icons)

## Installation

```sh
pnpm add @ngxi/catppuccin
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiCatppuccin, catppuccinFolder } from '@ngxi/catppuccin'

@Component({
  imports: [NgxiCatppuccin],
  template: `<svg [ngxiCatppuccin]="catppuccinFolder"></svg>`
})
export class UsageIcon {
  protected catppuccinFolder = catppuccinFolder
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/catppuccin?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/catppuccin
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/catppuccin?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/catppuccin
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/catppuccin?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/catppuccin
[license-src]: https://img.shields.io/npm/l/@ngxi/catppuccin?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/catppuccin
