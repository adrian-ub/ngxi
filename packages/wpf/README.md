# @ngxi/wpf

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Icons8 Windows 8 Icons
- **Prefix**: `wpf`
- **Icons**: 200
- **License**: [MIT]()
- **Author**: [Icons8](https://github.com/icons8/WPF-UI-Framework)
- **Website**: [https://github.com/icons8/WPF-UI-Framework](https://github.com/icons8/WPF-UI-Framework)

## Installation

```sh
pnpm add @ngxi/wpf
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiWpf, wpfCheckFile } from '@ngxi/wpf'

@Component({
  imports: [NgxiWpf],
  template: `<svg [ngxiWpf]="wpfCheckFile"></svg>`
})
export class UsageIcon {
  protected wpfCheckFile = wpfCheckFile
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/wpf?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/wpf
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/wpf?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/wpf
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/wpf?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/wpf
[license-src]: https://img.shields.io/npm/l/@ngxi/wpf?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/wpf
