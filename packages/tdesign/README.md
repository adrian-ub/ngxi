# @ngxi/tdesign

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: TDesign Icons
- **Prefix**: `tdesign`
- **Icons**: 2124
- **License**: [MIT](https://github.com/Tencent/tdesign-icons/blob/main/LICENSE)
- **Author**: [TDesign](https://github.com/Tencent/tdesign-icons)
- **Website**: [https://github.com/Tencent/tdesign-icons](https://github.com/Tencent/tdesign-icons)

## Installation

```sh
pnpm add @ngxi/tdesign
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiTdesign, tdesignActivity } from '@ngxi/tdesign'

@Component({
  imports: [NgxiTdesign],
  template: `<svg [ngxiTdesign]="tdesignActivity"></svg>`
})
export class UsageIcon {
  protected tdesignActivity = tdesignActivity
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/tdesign?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/tdesign
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/tdesign?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/tdesign
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/tdesign?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/tdesign
[license-src]: https://img.shields.io/npm/l/@ngxi/tdesign?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/tdesign
