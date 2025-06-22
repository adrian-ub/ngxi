# @ngxi/picon

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Pico-icon
- **Prefix**: `picon`
- **Icons**: 824
- **License**: [Open Font License](https://github.com/yne/picon/blob/master/OFL.txt)
- **Author**: [Picon Contributors](https://github.com/yne/picon)
- **Website**: [https://github.com/yne/picon](https://github.com/yne/picon)

## Installation

```sh
pnpm add @ngxi/picon
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiPicon, piconBookmark } from '@ngxi/picon'

@Component({
  imports: [NgxiPicon],
  template: `<svg [ngxiPicon]="piconBookmark"></svg>`
})
export class UsageIcon {
  protected piconBookmark = piconBookmark
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

Open Font License License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/picon?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/picon
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/picon?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/picon
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/picon?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/picon
[license-src]: https://img.shields.io/npm/l/@ngxi/picon?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/picon
