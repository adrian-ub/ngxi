# @ngxi/fxemoji

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Firefox OS Emoji
- **Prefix**: `fxemoji`
- **Icons**: 1034
- **License**: [Apache 2.0](https://mozilla.github.io/fxemoji/LICENSE.md)
- **Author**: [Mozilla](https://github.com/mozilla/fxemoji)
- **Website**: [https://github.com/mozilla/fxemoji](https://github.com/mozilla/fxemoji)

## Installation

```sh
pnpm add @ngxi/fxemoji
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiFxemoji, fxemojiFoxweary } from '@ngxi/fxemoji'

@Component({
  imports: [NgxiFxemoji],
  template: `<svg [ngxiFxemoji]="fxemojiFoxweary"></svg>`
})
export class UsageIcon {
  protected fxemojiFoxweary = fxemojiFoxweary
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/fxemoji?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/fxemoji
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/fxemoji?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/fxemoji
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/fxemoji?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/fxemoji
[license-src]: https://img.shields.io/npm/l/@ngxi/fxemoji?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/fxemoji
