# @ngxi/noto

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Noto Emoji
- **Prefix**: `noto`
- **Icons**: 3562
- **License**: [Apache 2.0](https://github.com/googlefonts/noto-emoji/blob/main/svg/LICENSE)
- **Author**: [Google Inc](https://github.com/googlefonts/noto-emoji)
- **Website**: [https://github.com/googlefonts/noto-emoji](https://github.com/googlefonts/noto-emoji)

## Installation

```sh
pnpm add @ngxi/noto
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiNoto, notoBeamingFaceWithSmilingEyes } from '@ngxi/noto'

@Component({
  imports: [NgxiNoto],
  template: `<svg [ngxiNoto]="notoBeamingFaceWithSmilingEyes"></svg>`
})
export class UsageIcon {
  protected notoBeamingFaceWithSmilingEyes = notoBeamingFaceWithSmilingEyes
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/noto?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/noto
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/noto?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/noto
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/noto?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/noto
[license-src]: https://img.shields.io/npm/l/@ngxi/noto?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/noto
