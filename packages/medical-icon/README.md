# @ngxi/medical-icon

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Medical Icons
- **Prefix**: `medical-icon`
- **Icons**: 144
- **License**: [MIT](https://github.com/samcome/webfont-medical-icons/blob/master/LICENSE)
- **Author**: [Samuel Frémondière](https://github.com/samcome/webfont-medical-icons)
- **Website**: [https://github.com/samcome/webfont-medical-icons](https://github.com/samcome/webfont-medical-icons)

## Installation

```sh
pnpm add @ngxi/medical-icon
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiMedicalIcon, medicalIconICareStaffArea } from '@ngxi/medical-icon'

@Component({
  imports: [NgxiMedicalIcon],
  template: `<svg [ngxiMedicalIcon]="medicalIconICareStaffArea"></svg>`
})
export class UsageIcon {
  protected medicalIconICareStaffArea = medicalIconICareStaffArea
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/medical-icon?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/medical-icon
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/medical-icon?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/medical-icon
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/medical-icon?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/medical-icon
[license-src]: https://img.shields.io/npm/l/@ngxi/medical-icon?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/medical-icon
