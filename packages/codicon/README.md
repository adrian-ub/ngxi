# @ngxi/codicon

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Codicons
- **Prefix**: `codicon`
- **Icons**: 490
- **License**: [CC BY 4.0](https://github.com/microsoft/vscode-codicons/blob/main/LICENSE)
- **Author**: [Microsoft Corporation](https://github.com/microsoft/vscode-codicons)
- **Website**: [https://github.com/microsoft/vscode-codicons](https://github.com/microsoft/vscode-codicons)

## Installation

```sh
pnpm add @ngxi/codicon
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiCodicon, codiconAccount } from '@ngxi/codicon'

@Component({
  imports: [NgxiCodicon],
  template: `<svg [ngxiCodicon]="codiconAccount"></svg>`
})
export class UsageIcon {
  protected codiconAccount = codiconAccount
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

CC BY 4.0 License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/codicon?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/codicon
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/codicon?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/codicon
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/codicon?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/codicon
[license-src]: https://img.shields.io/npm/l/@ngxi/codicon?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/codicon
