# Ngxi

> 236+ Iconify icon sets as zero-dependency SVG components for Angular.

Ngxi brings the [Iconify](https://iconify.design/) ecosystem to Angular by transforming icon sets into reusable SVG components — no runtime Iconify dependency.

Browse all available icon sets at [ngxi.adrianub.dev](https://ngxi.adrianub.dev).

## Features

- 🎨 236+ icon sets from the Iconify ecosystem
- 🧩 Reusable Angular SVG components
- 🌈 Customizable icons through standard SVG attributes
- 📦 Install only the icon sets you need
- ⚡ No runtime dependency on Iconify
- 🅰️ Built specifically for Angular

## Installation

Install the icon set you want to use:

```bash
pnpm add @ngxi/fontawesome-solid
```

## Usage

Import the icon component and add it to the component's imports:

```ts
import { Component } from '@angular/core'
import { FaSolidSearchPlus } from '@ngxi/fa-solid'

@Component({
  imports: [FaSolidSearchPlus],
  template: `<svg faSolidSearchPlus></svg>`
})
export default class {}
```

The icon is rendered directly inside the native `<svg>` element.

You can then customize it using standard SVG attributes and CSS:

```html
<svg
  faSolidSearchPlus
  width="24"
  height="24"
  aria-label="Search"
></svg>
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)
