# @ngxi/humbleicons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Humbleicons
- **Prefix**: `humbleicons`
- **Icons**: 256
- **License**: [MIT](https://github.com/zraly/humbleicons/blob/master/license)
- **Author**: [Jiří Zralý](https://github.com/zraly/humbleicons)
- **Website**: [https://github.com/zraly/humbleicons](https://github.com/zraly/humbleicons)

## Installation

```sh
pnpm add @ngxi/humbleicons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiHumbleicons, humbleiconsAid } from '@ngxi/humbleicons'

@Component({
  imports: [NgxiHumbleicons],
  template: `<svg [ngxiHumbleicons]="humbleiconsAid"></svg>`
})
export class UsageIcon {
  protected humbleiconsAid = humbleiconsAid
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/humbleicons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/humbleicons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/humbleicons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/humbleicons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/humbleicons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/humbleicons
[license-src]: https://img.shields.io/npm/l/@ngxi/humbleicons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/humbleicons
