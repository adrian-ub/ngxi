# @ngxi/academicons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Academicons
- **Prefix**: `academicons`
- **Icons**: 158
- **License**: [Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&amp;id=OFL)
- **Author**: [James Walsh](https://github.com/jpswalsh/academicons)
- **Website**: [https://github.com/jpswalsh/academicons](https://github.com/jpswalsh/academicons)

## Installation

```sh
pnpm add @ngxi/academicons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiAcademicons, academiconsConversation } from '@ngxi/academicons'

@Component({
  imports: [NgxiAcademicons],
  template: `<svg [ngxiAcademicons]="academiconsConversation"></svg>`
})
export class UsageIcon {
  protected academiconsConversation = academiconsConversation
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/academicons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/academicons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/academicons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/academicons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/academicons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/academicons
[license-src]: https://img.shields.io/npm/l/@ngxi/academicons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/academicons
