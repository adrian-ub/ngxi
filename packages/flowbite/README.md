# @ngxi/flowbite

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Flowbite Icons
- **Prefix**: `flowbite`
- **Icons**: 751
- **License**: [MIT](https://github.com/themesberg/flowbite-icons/blob/main/LICENSE)
- **Author**: [Themesberg](https://github.com/themesberg/flowbite-icons)
- **Website**: [https://github.com/themesberg/flowbite-icons](https://github.com/themesberg/flowbite-icons)

## Installation

```sh
pnpm add @ngxi/flowbite
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiFlowbite, flowbiteUserOutline } from '@ngxi/flowbite'

@Component({
  imports: [NgxiFlowbite],
  template: `<svg [ngxiFlowbite]="flowbiteUserOutline"></svg>`
})
export class UsageIcon {
  protected flowbiteUserOutline = flowbiteUserOutline
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/flowbite?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/flowbite
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/flowbite?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/flowbite
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/flowbite?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/flowbite
[license-src]: https://img.shields.io/npm/l/@ngxi/flowbite?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/flowbite
