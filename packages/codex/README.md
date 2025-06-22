# @ngxi/codex

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: CodeX Icons
- **Prefix**: `codex`
- **Icons**: 78
- **License**: [MIT](https://github.com/codex-team/icons/blob/master/LICENSE)
- **Author**: [CodeX](https://github.com/codex-team/icons)
- **Website**: [https://github.com/codex-team/icons](https://github.com/codex-team/icons)

## Installation

```sh
pnpm add @ngxi/codex
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiCodex, codexAlignLeft } from '@ngxi/codex'

@Component({
  imports: [NgxiCodex],
  template: `<svg [ngxiCodex]="codexAlignLeft"></svg>`
})
export class UsageIcon {
  protected codexAlignLeft = codexAlignLeft
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/codex?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/codex
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/codex?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/codex
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/codex?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/codex
[license-src]: https://img.shields.io/npm/l/@ngxi/codex?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/codex
