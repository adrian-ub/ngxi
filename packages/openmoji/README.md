# @ngxi/openmoji

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: OpenMoji
- **Prefix**: `openmoji`
- **Icons**: 4182
- **License**: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **Author**: [OpenMoji](https://github.com/hfg-gmuend/openmoji)
- **Website**: [https://github.com/hfg-gmuend/openmoji](https://github.com/hfg-gmuend/openmoji)

## Installation

```sh
pnpm add @ngxi/openmoji
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiOpenmoji, openmojiBicycle } from '@ngxi/openmoji'

@Component({
  imports: [NgxiOpenmoji],
  template: `<svg [ngxiOpenmoji]="openmojiBicycle"></svg>`
})
export class UsageIcon {
  protected openmojiBicycle = openmojiBicycle
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

CC BY-SA 4.0 License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/openmoji?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/openmoji
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/openmoji?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/openmoji
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/openmoji?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/openmoji
[license-src]: https://img.shields.io/npm/l/@ngxi/openmoji?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/openmoji
