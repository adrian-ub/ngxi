# @ngxi/heroicons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: HeroIcons
- **Prefix**: `heroicons`
- **Icons**: 1288
- **License**: [MIT](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE)
- **Author**: [Refactoring UI Inc](https://github.com/tailwindlabs/heroicons)
- **Website**: [https://github.com/tailwindlabs/heroicons](https://github.com/tailwindlabs/heroicons)

## Installation

```sh
pnpm add @ngxi/heroicons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiHeroicons, heroiconsCamera } from '@ngxi/heroicons'

@Component({
  imports: [NgxiHeroicons],
  template: `<svg [ngxiHeroicons]="heroiconsCamera"></svg>`
})
export class UsageIcon {
  protected heroiconsCamera = heroiconsCamera
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/heroicons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/heroicons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/heroicons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/heroicons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/heroicons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/heroicons
[license-src]: https://img.shields.io/npm/l/@ngxi/heroicons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/heroicons
