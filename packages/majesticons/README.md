# @ngxi/majesticons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Majesticons
- **Prefix**: `majesticons`
- **Icons**: 760
- **License**: [MIT](https://github.com/halfmage/majesticons/blob/main/LICENSE)
- **Author**: [Gerrit Halfmann](https://github.com/halfmage/majesticons)
- **Website**: [https://github.com/halfmage/majesticons](https://github.com/halfmage/majesticons)

## Installation

```sh
pnpm add @ngxi/majesticons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiMajesticons, majesticonsChatsLine } from '@ngxi/majesticons'

@Component({
  imports: [NgxiMajesticons],
  template: `<svg [ngxiMajesticons]="majesticonsChatsLine"></svg>`
})
export class UsageIcon {
  protected majesticonsChatsLine = majesticonsChatsLine
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/majesticons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/majesticons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/majesticons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/majesticons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/majesticons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/majesticons
[license-src]: https://img.shields.io/npm/l/@ngxi/majesticons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/majesticons
