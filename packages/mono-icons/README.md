# @ngxi/mono-icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Mono Icons
- **Prefix**: `mono-icons`
- **Icons**: 180
- **License**: [MIT](https://github.com/mono-company/mono-icons/blob/master/LICENSE.md)
- **Author**: [Mono](https://github.com/mono-company/mono-icons)
- **Website**: [https://github.com/mono-company/mono-icons](https://github.com/mono-company/mono-icons)

## Installation

```sh
pnpm add @ngxi/mono-icons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiMonoIcons, monoIconsUser } from '@ngxi/mono-icons'

@Component({
  imports: [NgxiMonoIcons],
  template: `<svg [ngxiMonoIcons]="monoIconsUser"></svg>`
})
export class UsageIcon {
  protected monoIconsUser = monoIconsUser
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/mono-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/mono-icons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/mono-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/mono-icons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/mono-icons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/mono-icons
[license-src]: https://img.shields.io/npm/l/@ngxi/mono-icons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/mono-icons
