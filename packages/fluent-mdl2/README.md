# @ngxi/fluent-mdl2

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Fluent UI MDL2
- **Prefix**: `fluent-mdl2`
- **Icons**: 1735
- **License**: [MIT](https://github.com/microsoft/fluentui/blob/master/packages/react-icons-mdl2/LICENSE)
- **Author**: [Microsoft Corporation](https://github.com/microsoft/fluentui/tree/master/packages/react-icons-mdl2)
- **Website**: [https://github.com/microsoft/fluentui/tree/master/packages/react-icons-mdl2](https://github.com/microsoft/fluentui/tree/master/packages/react-icons-mdl2)

## Installation

```sh
pnpm add @ngxi/fluent-mdl2
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiFluentMdl2, fluentMdl2Flow } from '@ngxi/fluent-mdl2'

@Component({
  imports: [NgxiFluentMdl2],
  template: `<svg [ngxiFluentMdl2]="fluentMdl2Flow"></svg>`
})
export class UsageIcon {
  protected fluentMdl2Flow = fluentMdl2Flow
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/fluent-mdl2?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/fluent-mdl2
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/fluent-mdl2?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/fluent-mdl2
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/fluent-mdl2?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/fluent-mdl2
[license-src]: https://img.shields.io/npm/l/@ngxi/fluent-mdl2?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/fluent-mdl2
