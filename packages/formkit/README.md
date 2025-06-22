# @ngxi/formkit

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: FormKit Icons
- **Prefix**: `formkit`
- **Icons**: 144
- **License**: [MIT](https://github.com/formkit/formkit/blob/master/packages/icons/LICENSE)
- **Author**: [FormKit, Inc](https://github.com/formkit/formkit/tree/master/packages/icons)
- **Website**: [https://github.com/formkit/formkit/tree/master/packages/icons](https://github.com/formkit/formkit/tree/master/packages/icons)

## Installation

```sh
pnpm add @ngxi/formkit
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiFormkit, formkitCheckbox } from '@ngxi/formkit'

@Component({
  imports: [NgxiFormkit],
  template: `<svg [ngxiFormkit]="formkitCheckbox"></svg>`
})
export class UsageIcon {
  protected formkitCheckbox = formkitCheckbox
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/formkit?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/formkit
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/formkit?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/formkit
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/formkit?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/formkit
[license-src]: https://img.shields.io/npm/l/@ngxi/formkit?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/formkit
