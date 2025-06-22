# @ngxi/memory

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Memory Icons
- **Prefix**: `memory`
- **Icons**: 651
- **License**: [Apache 2.0](https://github.com/Pictogrammers/Memory/blob/main/LICENSE)
- **Author**: [Pictogrammers](https://github.com/Pictogrammers/Memory)
- **Website**: [https://github.com/Pictogrammers/Memory](https://github.com/Pictogrammers/Memory)

## Installation

```sh
pnpm add @ngxi/memory
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiMemory, memoryChartBar } from '@ngxi/memory'

@Component({
  imports: [NgxiMemory],
  template: `<svg [ngxiMemory]="memoryChartBar"></svg>`
})
export class UsageIcon {
  protected memoryChartBar = memoryChartBar
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/memory?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/memory
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/memory?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/memory
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/memory?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/memory
[license-src]: https://img.shields.io/npm/l/@ngxi/memory?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/memory
