# @ngxi/emojione

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Emoji One (Colored)
- **Prefix**: `emojione`
- **Icons**: 1834
- **License**: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Author**: [Emoji One](https://github.com/EmojiTwo/emojitwo)
- **Website**: [https://github.com/EmojiTwo/emojitwo](https://github.com/EmojiTwo/emojitwo)

## Installation

```sh
pnpm add @ngxi/emojione
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiEmojione, emojioneAnxiousFaceWithSweat } from '@ngxi/emojione'

@Component({
  imports: [NgxiEmojione],
  template: `<svg [ngxiEmojione]="emojioneAnxiousFaceWithSweat"></svg>`
})
export class UsageIcon {
  protected emojioneAnxiousFaceWithSweat = emojioneAnxiousFaceWithSweat
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

CC BY 4.0 License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/emojione?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/emojione
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/emojione?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/emojione
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/emojione?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/emojione
[license-src]: https://img.shields.io/npm/l/@ngxi/emojione?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/emojione
