# @ngxi/streamline-freehand

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Freehand free icons
- **Prefix**: `streamline-freehand`
- **Icons**: 1000
- **License**: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Author**: [Streamline](https://github.com/webalys-hq/streamline-vectors)
- **Website**: [https://github.com/webalys-hq/streamline-vectors](https://github.com/webalys-hq/streamline-vectors)

## Installation

```sh
pnpm add @ngxi/streamline-freehand
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiStreamlineFreehand, streamlineFreehandTerminal } from '@ngxi/streamline-freehand'

@Component({
  imports: [NgxiStreamlineFreehand],
  template: `<svg [ngxiStreamlineFreehand]="streamlineFreehandTerminal"></svg>`
})
export class UsageIcon {
  protected streamlineFreehandTerminal = streamlineFreehandTerminal
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/streamline-freehand?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/streamline-freehand
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/streamline-freehand?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/streamline-freehand
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/streamline-freehand?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/streamline-freehand
[license-src]: https://img.shields.io/npm/l/@ngxi/streamline-freehand?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/streamline-freehand
