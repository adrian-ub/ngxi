# @ngxi/websymbol

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Web Symbols Liga
- **Prefix**: `websymbol`
- **Icons**: 85
- **License**: [Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&amp;id=OFL)
- **Author**: [Just Be Nice studio]()
- **Website**: []()

## Installation

```sh
pnpm add @ngxi/websymbol
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiWebsymbol, websymbolClock } from '@ngxi/websymbol'

@Component({
  imports: [NgxiWebsymbol],
  template: `<svg [ngxiWebsymbol]="websymbolClock"></svg>`
})
export class UsageIcon {
  protected websymbolClock = websymbolClock
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/websymbol?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/websymbol
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/websymbol?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/websymbol
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/websymbol?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/websymbol
[license-src]: https://img.shields.io/npm/l/@ngxi/websymbol?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/websymbol
