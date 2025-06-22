# @ngxi/streamline-flex

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Flex free icons
- **Prefix**: `streamline-flex`
- **Icons**: 1500
- **License**: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Author**: [Streamline](https://github.com/webalys-hq/streamline-vectors)
- **Website**: [https://github.com/webalys-hq/streamline-vectors](https://github.com/webalys-hq/streamline-vectors)

## Installation

```sh
pnpm add @ngxi/streamline-flex
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiStreamlineFlex, streamlineFlexShield2 } from '@ngxi/streamline-flex'

@Component({
  imports: [NgxiStreamlineFlex],
  template: `<svg [ngxiStreamlineFlex]="streamlineFlexShield2"></svg>`
})
export class UsageIcon {
  protected streamlineFlexShield2 = streamlineFlexShield2
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/streamline-flex?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/streamline-flex
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/streamline-flex?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/streamline-flex
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/streamline-flex?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/streamline-flex
[license-src]: https://img.shields.io/npm/l/@ngxi/streamline-flex?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/streamline-flex
