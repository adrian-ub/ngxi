# @ngxi/clarity

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Clarity
- **Prefix**: `clarity`
- **Icons**: 1103
- **License**: [MIT](https://github.com/vmware/clarity-assets/blob/master/LICENSE)
- **Author**: [VMware](https://github.com/vmware/clarity)
- **Website**: [https://github.com/vmware/clarity](https://github.com/vmware/clarity)

## Installation

```sh
pnpm add @ngxi/clarity
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiClarity, clarityHelpOutlineBadged } from '@ngxi/clarity'

@Component({
  imports: [NgxiClarity],
  template: `<svg [ngxiClarity]="clarityHelpOutlineBadged"></svg>`
})
export class UsageIcon {
  protected clarityHelpOutlineBadged = clarityHelpOutlineBadged
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/clarity?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/clarity
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/clarity?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/clarity
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/clarity?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/clarity
[license-src]: https://img.shields.io/npm/l/@ngxi/clarity?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/clarity
