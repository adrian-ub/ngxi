# @ngxi/fa

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Font Awesome 4
- **Prefix**: `fa`
- **Icons**: 678
- **License**: [Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&amp;id=OFL)
- **Author**: [Dave Gandy](https://github.com/FortAwesome/Font-Awesome/tree/fa-4)
- **Website**: [https://github.com/FortAwesome/Font-Awesome/tree/fa-4](https://github.com/FortAwesome/Font-Awesome/tree/fa-4)

## Installation

```sh
pnpm add @ngxi/fa
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiFa, faWrench } from '@ngxi/fa'

@Component({
  imports: [NgxiFa],
  template: `<svg [ngxiFa]="faWrench"></svg>`
})
export class UsageIcon {
  protected faWrench = faWrench
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

Open Font License License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/fa?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/fa
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/fa?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/fa
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/fa?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/fa
[license-src]: https://img.shields.io/npm/l/@ngxi/fa?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/fa
