# @ngxi/vaadin

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Vaadin Icons
- **Prefix**: `vaadin`
- **Icons**: 636
- **License**: [Apache 2.0]()
- **Author**: [Vaadin](https://github.com/vaadin/web-components)
- **Website**: [https://github.com/vaadin/web-components](https://github.com/vaadin/web-components)

## Installation

```sh
pnpm add @ngxi/vaadin
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiVaadin, vaadinAreaSelect } from '@ngxi/vaadin'

@Component({
  imports: [NgxiVaadin],
  template: `<svg [ngxiVaadin]="vaadinAreaSelect"></svg>`
})
export class UsageIcon {
  protected vaadinAreaSelect = vaadinAreaSelect
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/vaadin?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/vaadin
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/vaadin?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/vaadin
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/vaadin?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/vaadin
[license-src]: https://img.shields.io/npm/l/@ngxi/vaadin?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/vaadin
