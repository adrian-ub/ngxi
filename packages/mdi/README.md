# @ngxi/mdi

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Material Design Icons
- **Prefix**: `mdi`
- **Icons**: 7447
- **License**: [Apache 2.0](https://github.com/Templarian/MaterialDesign/blob/master/LICENSE)
- **Author**: [Pictogrammers](https://github.com/Templarian/MaterialDesign)
- **Website**: [https://github.com/Templarian/MaterialDesign](https://github.com/Templarian/MaterialDesign)

## Installation

```sh
pnpm add @ngxi/mdi
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiMdi, mdiAccountCheck } from '@ngxi/mdi'

@Component({
  imports: [NgxiMdi],
  template: `<svg [ngxiMdi]="mdiAccountCheck"></svg>`
})
export class UsageIcon {
  protected mdiAccountCheck = mdiAccountCheck
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/mdi?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/mdi
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/mdi?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/mdi
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/mdi?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/mdi
[license-src]: https://img.shields.io/npm/l/@ngxi/mdi?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/mdi
