# @ngxi/fad

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: FontAudio
- **Prefix**: `fad`
- **Icons**: 155
- **License**: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Author**: [@fefanto](https://github.com/fefanto/fontaudio)
- **Website**: [https://github.com/fefanto/fontaudio](https://github.com/fefanto/fontaudio)

## Installation

```sh
pnpm add @ngxi/fad
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiFad, fadShuffle } from '@ngxi/fad'

@Component({
  imports: [NgxiFad],
  template: `<svg [ngxiFad]="fadShuffle"></svg>`
})
export class UsageIcon {
  protected fadShuffle = fadShuffle
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/fad?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/fad
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/fad?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/fad
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/fad?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/fad
[license-src]: https://img.shields.io/npm/l/@ngxi/fad?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/fad
