# @ngxi/devicon

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Devicon
- **Prefix**: `devicon`
- **Icons**: 938
- **License**: [MIT](https://github.com/devicons/devicon/blob/master/LICENSE)
- **Author**: [konpa](https://github.com/devicons/devicon/tree/master)
- **Website**: [https://github.com/devicons/devicon/tree/master](https://github.com/devicons/devicon/tree/master)

## Installation

```sh
pnpm add @ngxi/devicon
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiDevicon, deviconWindows8 } from '@ngxi/devicon'

@Component({
  imports: [NgxiDevicon],
  template: `<svg [ngxiDevicon]="deviconWindows8"></svg>`
})
export class UsageIcon {
  protected deviconWindows8 = deviconWindows8
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/devicon?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/devicon
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/devicon?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/devicon
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/devicon?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/devicon
[license-src]: https://img.shields.io/npm/l/@ngxi/devicon?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/devicon
