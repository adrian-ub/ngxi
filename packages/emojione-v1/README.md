# @ngxi/emojione-v1

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Emoji One (v1)
- **Prefix**: `emojione-v1`
- **Icons**: 1262
- **License**: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **Author**: [Emoji One](https://github.com/joypixels/emojione-legacy)
- **Website**: [https://github.com/joypixels/emojione-legacy](https://github.com/joypixels/emojione-legacy)

## Installation

```sh
pnpm add @ngxi/emojione-v1
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiEmojioneV1, emojioneV1FaceSavoringFood } from '@ngxi/emojione-v1'

@Component({
  imports: [NgxiEmojioneV1],
  template: `<svg [ngxiEmojioneV1]="emojioneV1FaceSavoringFood"></svg>`
})
export class UsageIcon {
  protected emojioneV1FaceSavoringFood = emojioneV1FaceSavoringFood
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

CC BY-SA 4.0 License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/emojione-v1?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/emojione-v1
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/emojione-v1?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/emojione-v1
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/emojione-v1?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/emojione-v1
[license-src]: https://img.shields.io/npm/l/@ngxi/emojione-v1?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/emojione-v1
