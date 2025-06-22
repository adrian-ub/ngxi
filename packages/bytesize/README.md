# @ngxi/bytesize

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Bytesize Icons
- **Prefix**: `bytesize`
- **Icons**: 101
- **License**: [MIT](https://github.com/danklammer/bytesize-icons/blob/master/LICENSE.md)
- **Author**: [Dan Klammer](https://github.com/danklammer/bytesize-icons)
- **Website**: [https://github.com/danklammer/bytesize-icons](https://github.com/danklammer/bytesize-icons)

## Installation

```sh
pnpm add @ngxi/bytesize
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiBytesize, bytesizeDesktop } from '@ngxi/bytesize'

@Component({
  imports: [NgxiBytesize],
  template: `<svg [ngxiBytesize]="bytesizeDesktop"></svg>`
})
export class UsageIcon {
  protected bytesizeDesktop = bytesizeDesktop
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/bytesize?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/bytesize
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/bytesize?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/bytesize
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/bytesize?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/bytesize
[license-src]: https://img.shields.io/npm/l/@ngxi/bytesize?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/bytesize
