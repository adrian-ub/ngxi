# @ngxi/fluent-color

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Fluent UI System Color Icons
- **Prefix**: `fluent-color`
- **Icons**: 889
- **License**: [MIT](https://github.com/microsoft/fluentui-system-icons/blob/main/LICENSE)
- **Author**: [Microsoft Corporation](https://github.com/microsoft/fluentui-system-icons)
- **Website**: [https://github.com/microsoft/fluentui-system-icons](https://github.com/microsoft/fluentui-system-icons)

## Installation

```sh
pnpm add @ngxi/fluent-color
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiFluentColor, fluentColorMic20 } from '@ngxi/fluent-color'

@Component({
  imports: [NgxiFluentColor],
  template: `<svg [ngxiFluentColor]="fluentColorMic20"></svg>`
})
export class UsageIcon {
  protected fluentColorMic20 = fluentColorMic20
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/fluent-color?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/fluent-color
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/fluent-color?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/fluent-color
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/fluent-color?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/fluent-color
[license-src]: https://img.shields.io/npm/l/@ngxi/fluent-color?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/fluent-color
