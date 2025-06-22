# @ngxi/ix

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Siemens Industrial Experience Icons
- **Prefix**: `ix`
- **Icons**: 1315
- **License**: [MIT](https://github.com/siemens/ix-icons/blob/main/LICENSE.md)
- **Author**: [Siemens AG](https://github.com/siemens/ix-icons)
- **Website**: [https://github.com/siemens/ix-icons](https://github.com/siemens/ix-icons)

## Installation

```sh
pnpm add @ngxi/ix
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiIx, ixNotificationFilled } from '@ngxi/ix'

@Component({
  imports: [NgxiIx],
  template: `<svg [ngxiIx]="ixNotificationFilled"></svg>`
})
export class UsageIcon {
  protected ixNotificationFilled = ixNotificationFilled
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/ix?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/ix
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/ix?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/ix
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/ix?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/ix
[license-src]: https://img.shields.io/npm/l/@ngxi/ix?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/ix
