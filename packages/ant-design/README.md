# @ngxi/ant-design

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Ant Design Icons
- **Prefix**: `ant-design`
- **Icons**: 830
- **License**: [MIT](https://github.com/ant-design/ant-design-icons/blob/master/LICENSE)
- **Author**: [HeskeyBaozi](https://github.com/ant-design/ant-design-icons)
- **Website**: [https://github.com/ant-design/ant-design-icons](https://github.com/ant-design/ant-design-icons)

## Installation

```sh
pnpm add @ngxi/ant-design
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiAntDesign, antDesignPushpinFilled } from '@ngxi/ant-design'

@Component({
  imports: [NgxiAntDesign],
  template: `<svg [ngxiAntDesign]="antDesignPushpinFilled"></svg>`
})
export class UsageIcon {
  protected antDesignPushpinFilled = antDesignPushpinFilled
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/ant-design?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/ant-design
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/ant-design?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/ant-design
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/ant-design?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/ant-design
[license-src]: https://img.shields.io/npm/l/@ngxi/ant-design?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/ant-design
