# @ngxi/skill-icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- **Name**: Skill Icons
- **Prefix**: `skill-icons`
- **Icons**: 397
- **License**: [MIT](https://github.com/tandpfun/skill-icons/blob/main/LICENSE)
- **Author**: [tandpfun](https://github.com/tandpfun/skill-icons)
- **Website**: [https://github.com/tandpfun/skill-icons](https://github.com/tandpfun/skill-icons)

## Installation

```sh
pnpm add @ngxi/skill-icons
```

## Usage

```ts
import { Component } from '@angular/core'
import { NgxiSkillIcons, skillIconsMarkdownLight } from '@ngxi/skill-icons'

@Component({
  imports: [NgxiSkillIcons],
  template: `<svg [ngxiSkillIcons]="skillIconsMarkdownLight"></svg>`
})
export class UsageIcon {
  protected skillIconsMarkdownLight = skillIconsMarkdownLight
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

[npm-version-src]: https://img.shields.io/npm/v/@ngxi/skill-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@ngxi/skill-icons
[npm-downloads-src]: https://img.shields.io/npm/dm/@ngxi/skill-icons?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@ngxi/skill-icons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@ngxi/skill-icons?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@ngxi/skill-icons
[license-src]: https://img.shields.io/npm/l/@ngxi/skill-icons?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/ngxi/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@ngxi/skill-icons
