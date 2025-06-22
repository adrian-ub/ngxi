# @ngxi/fontelico

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Fontelico
- **Prefix**: `fontelico`
- **Icons**: 34
- **License**: [CC BY SA](https://creativecommons.org/licenses/by-sa/3.0/)
- **Author**: [Fontello](https://github.com/fontello/fontelico.font)
- **Website**: [https://github.com/fontello/fontelico.font](https://github.com/fontello/fontelico.font)

## Installation

```sh
pnpm add @ngxi/fontelico
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiFontelico, fontelicoSpin5 } from '@ngxi/fontelico'

@Component({
  imports: [NgxiFontelico],
  template: `<svg [ngxiFontelico]="fontelicoSpin5"></svg>`
})
export class UsageIcon {
  protected fontelicoSpin5 = fontelicoSpin5
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

CC BY SA License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/fontelico?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/fontelico
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/fontelico?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/fontelico
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/fontelico?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/fontelico
[license-src]: https://img.shields.io/npm/l/@ngxi/fontelico?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/fontelico
