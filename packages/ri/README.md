# @ngxi/ri

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Remix Icon
- **Prefix**: `ri`
- **Icons**: 3058
- **License**: [Apache 2.0](https://github.com/Remix-Design/RemixIcon/blob/master/License)
- **Author**: [Remix Design](https://github.com/Remix-Design/RemixIcon)
- **Website**: [https://github.com/Remix-Design/RemixIcon](https://github.com/Remix-Design/RemixIcon)

## Installation

```sh
pnpm add @ngxi/ri
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiRi, riLock2Line } from '@ngxi/ri'

@Component({
  imports: [NgxiRi],
  template: `<svg [ngxiRi]="riLock2Line"></svg>`
})
export class UsageIcon {
  protected riLock2Line = riLock2Line
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/ri?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/ri
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/ri?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/ri
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/ri?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/ri
[license-src]: https://img.shields.io/npm/l/@ngxi/ri?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/ri
