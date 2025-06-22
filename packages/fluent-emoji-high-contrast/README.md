# @ngxi/fluent-emoji-high-contrast

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Fluent Emoji High Contrast
- **Prefix**: `fluent-emoji-high-contrast`
- **Icons**: 1595
- **License**: [MIT](https://github.com/microsoft/fluentui-emoji/blob/main/LICENSE)
- **Author**: [Microsoft Corporation](https://github.com/microsoft/fluentui-emoji)
- **Website**: [https://github.com/microsoft/fluentui-emoji](https://github.com/microsoft/fluentui-emoji)

## Installation

```sh
pnpm add @ngxi/fluent-emoji-high-contrast
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiFluentEmojiHighContrast, fluentEmojiHighContrastAvocado } from '@ngxi/fluent-emoji-high-contrast'

@Component({
  imports: [NgxiFluentEmojiHighContrast],
  template: `<svg [ngxiFluentEmojiHighContrast]="fluentEmojiHighContrastAvocado"></svg>`
})
export class UsageIcon {
  protected fluentEmojiHighContrastAvocado = fluentEmojiHighContrastAvocado
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/fluent-emoji-high-contrast?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/fluent-emoji-high-contrast
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/fluent-emoji-high-contrast?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/fluent-emoji-high-contrast
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/fluent-emoji-high-contrast?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/fluent-emoji-high-contrast
[license-src]: https://img.shields.io/npm/l/@ngxi/fluent-emoji-high-contrast?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/fluent-emoji-high-contrast
