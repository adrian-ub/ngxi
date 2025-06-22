# @ngxi/noto-v1

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Noto Emoji (v1)
- **Prefix**: `noto-v1`
- **Icons**: 2162
- **License**: [Apache 2.0](https://github.com/googlefonts/noto-emoji/blob/main/svg/LICENSE)
- **Author**: [Google Inc](https://github.com/googlefonts/noto-emoji)
- **Website**: [https://github.com/googlefonts/noto-emoji](https://github.com/googlefonts/noto-emoji)

## Installation

```sh
pnpm add @ngxi/noto-v1
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiNotoV1, notoV1FaceWithOpenMouth } from '@ngxi/noto-v1'

@Component({
  imports: [NgxiNotoV1],
  template: `<svg [ngxiNotoV1]="notoV1FaceWithOpenMouth"></svg>`
})
export class UsageIcon {
  protected notoV1FaceWithOpenMouth = notoV1FaceWithOpenMouth
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/noto-v1?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/noto-v1
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/noto-v1?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/noto-v1
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/noto-v1?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/noto-v1
[license-src]: https://img.shields.io/npm/l/@ngxi/noto-v1?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/noto-v1
