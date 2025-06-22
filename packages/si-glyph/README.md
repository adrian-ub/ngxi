# @ngxi/si-glyph

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: SmartIcons Glyph
- **Prefix**: `si-glyph`
- **Icons**: 799
- **License**: [CC BY SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **Author**: [SmartIcons]()
- **Website**: []()

## Installation

```sh
pnpm add @ngxi/si-glyph
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiSiGlyph, siGlyphCircleLoadLeft } from '@ngxi/si-glyph'

@Component({
  imports: [NgxiSiGlyph],
  template: `<svg [ngxiSiGlyph]="siGlyphCircleLoadLeft"></svg>`
})
export class UsageIcon {
  protected siGlyphCircleLoadLeft = siGlyphCircleLoadLeft
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

CC BY SA 4.0 License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/si-glyph?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/si-glyph
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/si-glyph?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/si-glyph
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/si-glyph?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/si-glyph
[license-src]: https://img.shields.io/npm/l/@ngxi/si-glyph?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/si-glyph
