import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRssFillIcon],svg[ph-rss-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M76 192a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a8 8 0 0 1-8-8a40 40 0 0 0-40-40a8 8 0 0 1 0-16a56.06 56.06 0 0 1 56 56a8 8 0 0 1-8 8m32 0a8 8 0 0 1-8-8a72.08 72.08 0 0 0-72-72a8 8 0 0 1 0-16a88.1 88.1 0 0 1 88 88a8 8 0 0 1-8 8m32 0a8 8 0 0 1-8-8A104.11 104.11 0 0 0 72 80a8 8 0 0 1 0-16a120.13 120.13 0 0 1 120 120a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhRssFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRssLightIcon],svg[ph-rss-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M105.5 150.5A69.54 69.54 0 0 1 126 200a6 6 0 0 1-12 0a58 58 0 0 0-58-58a6 6 0 0 1 0-12a69.54 69.54 0 0 1 49.5 20.5M56 82a6 6 0 0 0 0 12a106 106 0 0 1 106 106a6 6 0 0 0 12 0A118 118 0 0 0 56 82m117.38.62A164.92 164.92 0 0 0 56 34a6 6 0 0 0 0 12a153 153 0 0 1 108.89 45.11A153 153 0 0 1 210 200a6 6 0 0 0 12 0a164.92 164.92 0 0 0-48.62-117.38M60 186a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhRssLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRssSimpleIcon],svg[ph-rss-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 192a8 8 0 0 1-16 0c0-79.4-64.6-144-144-144a8 8 0 0 1 0-16c88.22 0 160 71.78 160 160M64 104a8 8 0 0 0 0 16a72.08 72.08 0 0 1 72 72a8 8 0 0 0 16 0a88.1 88.1 0 0 0-88-88m4 72a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhRssSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRssSimpleBoldIcon],svg[ph-rss-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 192a12 12 0 0 1-24 0c0-77.2-62.8-140-140-140a12 12 0 0 1 0-24c90.43 0 164 73.57 164 164M64 100a12 12 0 0 0 0 24a68.07 68.07 0 0 1 68 68a12 12 0 0 0 24 0a92.1 92.1 0 0 0-92-92m4 72a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhRssSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRssSimpleDuotoneIcon],svg[ph-rss-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 192H64V40a152 152 0 0 1 152 152" opacity=".2"></svg:path><svg:path d="M224 192a8 8 0 0 1-16 0c0-79.4-64.6-144-144-144a8 8 0 0 1 0-16c88.22 0 160 71.78 160 160M64 104a8 8 0 0 0 0 16a72.08 72.08 0 0 1 72 72a8 8 0 0 0 16 0a88.1 88.1 0 0 0-88-88m4 72a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhRssSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRssSimpleFillIcon],svg[ph-rss-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M76 192a12 12 0 1 1 12-12a12 12 0 0 1-12 12m60 0a8 8 0 0 1-8-8a56.06 56.06 0 0 0-56-56a8 8 0 0 1 0-16a72.08 72.08 0 0 1 72 72a8 8 0 0 1-8 8m48 0a8 8 0 0 1-8-8A104.11 104.11 0 0 0 72 80a8 8 0 0 1 0-16a120.13 120.13 0 0 1 120 120a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhRssSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRssSimpleLightIcon],svg[ph-rss-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 192a6 6 0 0 1-12 0c0-80.5-65.5-146-146-146a6 6 0 0 1 0-12c87.12 0 158 70.88 158 158M64 106a6 6 0 0 0 0 12a74.09 74.09 0 0 1 74 74a6 6 0 0 0 12 0a86.1 86.1 0 0 0-86-86m4 72a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhRssSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRssSimpleThinIcon],svg[ph-rss-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 192a4 4 0 0 1-8 0c0-81.61-66.39-148-148-148a4 4 0 0 1 0-8c86 0 156 70 156 156M64 108a4 4 0 0 0 0 8a76.08 76.08 0 0 1 76 76a4 4 0 0 0 8 0a84.09 84.09 0 0 0-84-84m4 72a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhRssSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRssThinIcon],svg[ph-rss-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104.08 151.92A67.52 67.52 0 0 1 124 200a4 4 0 0 1-8 0a60 60 0 0 0-60-60a4 4 0 0 1 0-8a67.52 67.52 0 0 1 48.08 19.92M56 84a4 4 0 0 0 0 8a108 108 0 0 1 108 108a4 4 0 0 0 8 0A116 116 0 0 0 56 84m116 0A162.92 162.92 0 0 0 56 36a4 4 0 0 0 0 8a155 155 0 0 1 110.31 45.69A155 155 0 0 1 212 200a4 4 0 0 0 8 0a162.92 162.92 0 0 0-48-116M60 188a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhRssThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRugIcon],svg[ph-rug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 16a8 8 0 0 0-8 8v16h-32V24a8 8 0 0 0-16 0v16h-32V24a8 8 0 0 0-16 0v16H64V24a8 8 0 0 0-16 0v208a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0V24a8 8 0 0 0-8-8M64 56h128v144H64Zm64 120a8 8 0 0 0 6.86-3.88l24-40a8 8 0 0 0 0-8.24l-24-40a8 8 0 0 0-13.72 0l-24 40a8 8 0 0 0 0 8.24l24 40A8 8 0 0 0 128 176m0-72.45L142.67 128L128 152.45L113.33 128Z"></svg:path>`,
})
export class PhRugIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRugBoldIcon],svg[ph-rug-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 12a12 12 0 0 0-12 12v12h-24V24a12 12 0 0 0-24 0v12h-24V24a12 12 0 0 0-24 0v12H68V24a12 12 0 0 0-24 0v208a12 12 0 0 0 24 0v-12h24v12a12 12 0 0 0 24 0v-12h24v12a12 12 0 0 0 24 0v-12h24v12a12 12 0 0 0 24 0V24a12 12 0 0 0-12-12M68 60h120v136H68Zm60 120a12 12 0 0 0 10.29-5.83l24-40a12 12 0 0 0 0-12.34l-24-40a12 12 0 0 0-20.58 0l-24 40a12 12 0 0 0 0 12.34l24 40A12 12 0 0 0 128 180m0-68.68L138 128l-10 16.68L118 128Z"></svg:path>`,
})
export class PhRugBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRugDuotoneIcon],svg[ph-rug-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M56 48v160h144V48Zm72 120l-24-40l24-40l24 40Z" opacity=".2"></svg:path><svg:path d="M200 16a8 8 0 0 0-8 8v16h-32V24a8 8 0 0 0-16 0v16h-32V24a8 8 0 0 0-16 0v16H64V24a8 8 0 0 0-16 0v208a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0V24a8 8 0 0 0-8-8m-8 184H64V56h128Zm-70.86-27.88a8 8 0 0 0 13.72 0l24-40a8 8 0 0 0 0-8.24l-24-40a8 8 0 0 0-13.72 0l-24 40a8 8 0 0 0 0 8.24Zm6.86-68.57L142.67 128L128 152.45L113.33 128Z"></svg:path></svg:g>`,
})
export class PhRugDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRugFillIcon],svg[ph-rug-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 16a8 8 0 0 0-8 8v16h-32V24a8 8 0 0 0-16 0v16h-32V24a8 8 0 0 0-16 0v16H64V24a8 8 0 0 0-16 0v208a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0V24a8 8 0 0 0-8-8m-44.57 114.06l-24 40a4 4 0 0 1-6.86 0l-24-40a4 4 0 0 1 0-4.12l24-40a4 4 0 0 1 6.86 0l24 40a4 4 0 0 1 0 4.12"></svg:path>`,
})
export class PhRugFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRugLightIcon],svg[ph-rug-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 18a6 6 0 0 0-6 6v18h-36V24a6 6 0 0 0-12 0v18h-36V24a6 6 0 0 0-12 0v18H62V24a6 6 0 0 0-12 0v208a6 6 0 0 0 12 0v-18h36v18a6 6 0 0 0 12 0v-18h36v18a6 6 0 0 0 12 0v-18h36v18a6 6 0 0 0 12 0V24a6 6 0 0 0-6-6M62 54h132v148H62Zm66 120a6 6 0 0 0 5.14-2.91l24-40a6 6 0 0 0 0-6.18l-24-40a6 6 0 0 0-10.28 0l-24 40a6 6 0 0 0 0 6.18l24 40A6 6 0 0 0 128 174m0-74.34L145 128l-17 28.34L111 128Z"></svg:path>`,
})
export class PhRugLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRugThinIcon],svg[ph-rug-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 20a4 4 0 0 0-4 4v20h-40V24a4 4 0 0 0-8 0v20h-40V24a4 4 0 0 0-8 0v20H60V24a4 4 0 0 0-8 0v208a4 4 0 0 0 8 0v-20h40v20a4 4 0 0 0 8 0v-20h40v20a4 4 0 0 0 8 0v-20h40v20a4 4 0 0 0 8 0V24a4 4 0 0 0-4-4M60 52h136v152H60Zm68 120a4 4 0 0 0 3.43-1.94l24-40a4 4 0 0 0 0-4.12l-24-40a4 4 0 0 0-6.86 0l-24 40a4 4 0 0 0 0 4.12l24 40A4 4 0 0 0 128 172m0-76.23L147.33 128L128 160.23L108.67 128Z"></svg:path>`,
})
export class PhRugThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRulerIcon],svg[ph-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.32 73.37l-52.69-52.68a16 16 0 0 0-22.63 0L20.68 160a16 16 0 0 0 0 22.63l52.69 52.68a16 16 0 0 0 22.63 0L235.32 96a16 16 0 0 0 0-22.63M84.68 224L32 171.31l32-32l26.34 26.35a8 8 0 0 0 11.32-11.32L75.31 128L96 107.31l26.34 26.35a8 8 0 0 0 11.32-11.32L107.31 96L128 75.31l26.34 26.35a8 8 0 0 0 11.32-11.32L139.31 64l32-32L224 84.69Z"></svg:path>`,
})
export class PhRulerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRulerBoldIcon],svg[ph-ruler-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m238.15 70.54l-52.69-52.68a20 20 0 0 0-28.29 0L17.85 157.17a20 20 0 0 0 0 28.29l52.69 52.68a20 20 0 0 0 28.29 0L238.15 98.83a20 20 0 0 0 0-28.29M84.68 218.34l-47-47L64 145l23.52 23.52a12 12 0 0 0 17-17L81 128l15-15l23.51 23.52a12 12 0 0 0 17-17L113 96l15-15l23.52 23.52a12 12 0 0 0 17-17L145 64l26.35-26.34l47 47Z"></svg:path>`,
})
export class PhRulerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRulerDuotoneIcon],svg[ph-ruler-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M229.66 90.34L90.34 229.66a8 8 0 0 1-11.31 0L26.34 177a8 8 0 0 1 0-11.31L165.66 26.34a8 8 0 0 1 11.31 0L229.66 79a8 8 0 0 1 0 11.34" opacity=".2"></svg:path><svg:path d="m235.32 73.37l-52.69-52.68a16 16 0 0 0-22.63 0L20.68 160a16 16 0 0 0 0 22.63l52.69 52.68a16 16 0 0 0 22.63 0L235.32 96a16 16 0 0 0 0-22.63M84.68 224L32 171.31l32-32l26.34 26.35a8 8 0 0 0 11.32-11.32L75.31 128L96 107.31l26.34 26.35a8 8 0 0 0 11.32-11.32L107.31 96L128 75.31l26.34 26.35a8 8 0 0 0 11.32-11.32L139.31 64l32-32L224 84.69Z"></svg:path></svg:g>`,
})
export class PhRulerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRulerFillIcon],svg[ph-ruler-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.32 96L96 235.31a16 16 0 0 1-22.63 0l-52.69-52.68a16 16 0 0 1 0-22.63l29.17-29.17a4 4 0 0 1 5.66 0l34.83 34.83a8 8 0 0 0 11.71-.43a8.18 8.18 0 0 0-.6-11.09l-34.63-34.63a4 4 0 0 1 0-5.65l15-15a4 4 0 0 1 5.66 0l34.83 34.83a8 8 0 0 0 11.71-.43a8.18 8.18 0 0 0-.6-11.09L98.83 87.51a4 4 0 0 1 0-5.65l15-15a4 4 0 0 1 5.65 0l34.83 34.83a8 8 0 0 0 11.72-.43a8.18 8.18 0 0 0-.61-11.09l-34.59-34.66a4 4 0 0 1 0-5.65L160 20.69a16 16 0 0 1 22.63 0l52.69 52.68a16 16 0 0 1 0 22.63"></svg:path>`,
})
export class PhRulerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRulerLightIcon],svg[ph-ruler-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233.91 74.79L181.22 22.1a14 14 0 0 0-19.8 0L22.09 161.41a14 14 0 0 0 0 19.8l52.69 52.69a14 14 0 0 0 19.8 0L233.91 94.59a14 14 0 0 0 0-19.8m-8.49 11.31L86.1 225.41a2 2 0 0 1-2.83 0l-52.69-52.68a2 2 0 0 1 0-2.83L64 136.48l27.76 27.76a6 6 0 1 0 8.48-8.48L72.48 128L96 104.48l27.76 27.76a6 6 0 0 0 8.48-8.48L104.48 96L128 72.49l27.76 27.75a6 6 0 0 0 8.48-8.48L136.49 64l33.41-33.41a2 2 0 0 1 2.83 0l52.69 52.68a2 2 0 0 1 0 2.83"></svg:path>`,
})
export class PhRulerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRulerThinIcon],svg[ph-ruler-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.49 76.2L179.8 23.51a12 12 0 0 0-17 0L23.51 162.83a12 12 0 0 0 0 17l52.69 52.66a12 12 0 0 0 17 0L232.49 93.17a12 12 0 0 0 0-16.97m-5.66 11.31L87.51 226.83a4 4 0 0 1-5.65 0l-52.69-52.69a4 4 0 0 1 0-5.65L64 133.66l29.17 29.17a4 4 0 1 0 5.66-5.66L69.65 128L96 101.66l29.17 29.17a4 4 0 0 0 5.66-5.66L101.65 96L128 69.66l29.17 29.17a4 4 0 1 0 5.66-5.66L133.66 64l34.83-34.83a4 4 0 0 1 5.65 0l52.69 52.69a4 4 0 0 1 0 5.65"></svg:path>`,
})
export class PhRulerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSailboatIcon],svg[ph-sailboat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.21 172.53A8 8 0 0 0 240 168h-96v-24h72a8 8 0 0 0 5.92-13.38L144 44.91V8a8 8 0 0 0-14.21-5l-104 128A8 8 0 0 0 32 144h96v24H16a8 8 0 0 0-6.25 13l29.6 37a15.93 15.93 0 0 0 12.49 6h152.32a15.93 15.93 0 0 0 12.49-6l29.6-37a8 8 0 0 0 .96-8.47M197.92 128H144V68.69Zm-149.11 0L128 30.53V128Zm155.35 80H51.84l-19.2-24h190.72Z"></svg:path>`,
})
export class PhSailboatIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSailboatBoldIcon],svg[ph-sailboat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M250.82 170.8A12 12 0 0 0 240 164h-92v-16h68a12 12 0 0 0 8.88-20.07L148 43.36V12a12 12 0 0 0-21.19-7.71l-104 124A12 12 0 0 0 32 148h92v16H16a12 12 0 0 0-9.37 19.5l29.6 37a19.9 19.9 0 0 0 15.61 7.5h152.32a19.9 19.9 0 0 0 15.61-7.51l29.6-37a12 12 0 0 0 1.45-12.69M188.87 124H148V79Zm-131.14 0L124 45v79Zm144.5 80H53.77L41 188h174Z"></svg:path>`,
})
export class PhSailboatBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSailboatDuotoneIcon],svg[ph-sailboat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m240 176l-29.6 37a8 8 0 0 1-6.24 3H51.84a8 8 0 0 1-6.24-3L16 176ZM136 8L32 136h104Z" opacity=".2"></svg:path><svg:path d="M247.21 172.53A8 8 0 0 0 240 168h-96v-24h72a8 8 0 0 0 5.92-13.38L144 44.91V8a8 8 0 0 0-14.21-5l-104 128A8 8 0 0 0 32 144h96v24H16a8 8 0 0 0-6.25 13l29.6 37a15.93 15.93 0 0 0 12.49 6h152.32a15.93 15.93 0 0 0 12.49-6l29.6-37a8 8 0 0 0 .96-8.47M197.92 128H144V68.69Zm-149.11 0L128 30.53V128Zm155.35 80H51.84l-19.2-24h190.72Z"></svg:path></svg:g>`,
})
export class PhSailboatDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSailboatFillIcon],svg[ph-sailboat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 140V72.85a4 4 0 0 1 7-2.69l55 60.46a8 8 0 0 1 .43 10.26a8.24 8.24 0 0 1-6.58 3.12H164a4 4 0 0 1-4-4m87.21 32.53A8 8 0 0 0 240 168h-96V8a8 8 0 0 0-14.21-5l-104 128A8 8 0 0 0 32 144h96v24H16a8 8 0 0 0-6.25 13l29.6 37a15.93 15.93 0 0 0 12.49 6h152.32a15.93 15.93 0 0 0 12.49-6l29.6-37a8 8 0 0 0 .96-8.47"></svg:path>`,
})
export class PhSailboatFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSailboatLightIcon],svg[ph-sailboat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.41 173.4A6 6 0 0 0 240 170h-98v-28h74a6 6 0 0 0 4.44-10L142 45.68V8a6 6 0 0 0-10.66-3.78l-104 128A6 6 0 0 0 32 142h98v28H16a6 6 0 0 0-4.69 9.75l29.6 37A14 14 0 0 0 51.84 222h152.32a14 14 0 0 0 10.93-5.25l29.6-37a6 6 0 0 0 .72-6.35m-43-43.4H142V63.52Zm-157.8 0L130 24.9V130Zm161.11 79.25a2 2 0 0 1-1.56.75H51.84a2 2 0 0 1-1.56-.75L28.48 182h199Z"></svg:path>`,
})
export class PhSailboatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSailboatThinIcon],svg[ph-sailboat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.61 174.27A4 4 0 0 0 240 172H140v-32h76a4 4 0 0 0 3-6.69l-79-86.86V8a4 4 0 0 0-7.1-2.52l-104 128A4 4 0 0 0 32 140h100v32H16a4 4 0 0 0-3.12 6.5l29.59 37a12 12 0 0 0 9.37 4.5h152.32a12 12 0 0 0 9.37-4.5l29.59-37a4 4 0 0 0 .49-4.23M207 132h-67V58.35Zm-166.6 0L132 19.27V132Zm166.88 78.5a4 4 0 0 1-3.12 1.5H51.84a4 4 0 0 1-3.12-1.5L24.32 180h207.36Z"></svg:path>`,
})
export class PhSailboatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScalesIcon],svg[ph-scales-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.43 133l-32-80a8 8 0 0 0-9.16-4.84L136 62V40a8 8 0 0 0-16 0v25.58L54.26 80.19A8 8 0 0 0 48.57 85v.06l-32 79.94a7.9 7.9 0 0 0-.57 3c0 23.31 24.54 32 40 32s40-8.69 40-32a7.9 7.9 0 0 0-.57-3L66.92 93.77L120 82v126h-16a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16h-16V78.42l51-11.32l-26.43 65.9a7.9 7.9 0 0 0-.57 3c0 23.31 24.54 32 40 32s40-8.69 40-32a7.9 7.9 0 0 0-.57-3M56 184c-7.53 0-22.76-3.61-23.93-14.64L56 109.54l23.93 59.82C78.76 180.39 63.53 184 56 184m144-32c-7.53 0-22.76-3.61-23.93-14.64L200 77.54l23.93 59.82C222.76 148.39 207.53 152 200 152"></svg:path>`,
})
export class PhScalesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScalesBoldIcon],svg[ph-scales-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.14 131.54l-32-80a12 12 0 0 0-13.73-7.25L140 57V40a12 12 0 0 0-24 0v22.37L53.4 76.29a12 12 0 0 0-8.54 7.25l-32 79.92A12 12 0 0 0 12 168c0 12.13 6.2 22.43 17.45 29A55 55 0 0 0 56 204a55 55 0 0 0 26.55-7C93.8 190.43 100 180.13 100 168a12 12 0 0 0-.86-4.46L72.38 96.65L116 87v117h-12a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24h-12V81.63l40.42-9l-23.56 58.9A12 12 0 0 0 156 136c0 12.13 6.2 22.43 17.45 29a53.78 53.78 0 0 0 53.1 0c11.25-6.57 17.45-16.87 17.45-29a12 12 0 0 0-.86-4.46M56 180c-3.71 0-18-1.87-19.81-10.18L56 120.31l19.81 49.51C74 178.13 59.71 180 56 180m144-32c-3.71 0-18-1.87-19.81-10.18L200 88.31l19.81 49.51C218 146.13 203.71 148 200 148"></svg:path>`,
})
export class PhScalesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScalesDuotoneIcon],svg[ph-scales-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m56 88l32 80c0 17.67-20 24-32 24s-32-6.33-32-24Zm144-32l-32 80c0 17.67 20 24 32 24s32-6.33 32-24Z" opacity=".2"></svg:path><svg:path d="m239.43 133l-32-80a8 8 0 0 0-9.16-4.84L136 62V40a8 8 0 0 0-16 0v25.58L54.26 80.19A8 8 0 0 0 48.57 85v.06l-32 79.94a7.9 7.9 0 0 0-.57 3c0 23.31 24.54 32 40 32s40-8.69 40-32a7.9 7.9 0 0 0-.57-3L66.92 93.77L120 82v126h-16a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16h-16V78.42l51-11.32l-26.43 65.9a7.9 7.9 0 0 0-.57 3c0 23.31 24.54 32 40 32s40-8.69 40-32a7.9 7.9 0 0 0-.57-3M56 184c-7.53 0-22.76-3.61-23.93-14.64L56 109.54l23.93 59.82C78.76 180.39 63.53 184 56 184m144-32c-7.53 0-22.76-3.61-23.93-14.64L200 77.54l23.93 59.82C222.76 148.39 207.53 152 200 152"></svg:path></svg:g>`,
})
export class PhScalesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScalesFillIcon],svg[ph-scales-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.43 133l-32-80a8 8 0 0 0-7.43-5a8.3 8.3 0 0 0-1.73.21L136 62V40a8 8 0 0 0-16 0v25.58L54.27 80.21a8 8 0 0 0-5.7 4.79l-32 80a7.9 7.9 0 0 0-.57 3c0 23.31 24.54 32 40 32s40-8.69 40-32a7.9 7.9 0 0 0-.57-3L66.92 93.77L120 82v126h-16a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16h-16V78.42l51-11.32l-26.43 65.9a7.9 7.9 0 0 0-.57 3c0 23.31 24.54 32 40 32s40-8.69 40-32a7.9 7.9 0 0 0-.57-3m-160 35H32.62L56 109.54Zm97.24-32L200 77.54L223.38 136Z"></svg:path>`,
})
export class PhScalesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScalesLightIcon],svg[ph-scales-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.57 133.77l-32-80a6 6 0 0 0-6.86-3.63L134 64.52V40a6 6 0 0 0-12 0v27.19l-67.3 15a6 6 0 0 0-4.27 3.63l-32 80A6.1 6.1 0 0 0 18 168c0 21.86 23.31 30 38 30s38-8.14 38-30a6.1 6.1 0 0 0-.43-2.23L64.19 92.33L122 79.48V210h-18a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12h-18V76.81l56.21-12.49l-27.78 69.45A6.1 6.1 0 0 0 162 136c0 21.86 23.31 30 38 30s38-8.14 38-30a6.1 6.1 0 0 0-.43-2.23M56 186a36.9 36.9 0 0 1-17.48-4.56c-5.37-3.13-8.15-7.18-8.49-12.37l26-64.91l26 64.91C81.06 182.85 62.58 186 56 186m144-32a36.9 36.9 0 0 1-17.48-4.56c-5.37-3.13-8.15-7.18-8.49-12.37l26-64.91l26 64.91C225.06 150.85 206.58 154 200 154"></svg:path>`,
})
export class PhScalesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScalesThinIcon],svg[ph-scales-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.71 134.51l-32-80a4 4 0 0 0-4.57-2.41L132 67V40a4 4 0 0 0-8 0v28.79L55.13 84.1a4 4 0 0 0-2.84 2.41l-32 80A4 4 0 0 0 20 168c0 20.4 22.08 28 36 28s36-7.6 36-28a4 4 0 0 0-.29-1.49L61.46 90.88L124 77v135h-20a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8h-20V75.21l61.47-13.66l-29.18 73A4 4 0 0 0 164 136c0 20.4 22.08 28 36 28s36-7.6 36-28a4 4 0 0 0-.29-1.49M56 188c-7.15 0-27.37-3.56-28-19.27l28-70l28 70C83.37 184.44 63.15 188 56 188m144-32c-7.15 0-27.37-3.56-28-19.27l28-70l28 70c-.63 15.71-20.85 19.27-28 19.27"></svg:path>`,
})
export class PhScalesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScanIcon],svg[ph-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40v40a8 8 0 0 1-16 0V48h-32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M80 208H48v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16m136-40a8 8 0 0 0-8 8v32h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M40 88a8 8 0 0 0 8-8V48h32a8 8 0 0 0 0-16H40a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8m40-16h96a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8m8 96h80V88H88Z"></svg:path>`,
})
export class PhScanIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScanBoldIcon],svg[ph-scan-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 40v40a12 12 0 0 1-24 0V52h-28a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12M80 204H52v-28a12 12 0 0 0-24 0v40a12 12 0 0 0 12 12h40a12 12 0 0 0 0-24m136-40a12 12 0 0 0-12 12v28h-28a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12M40 92a12 12 0 0 0 12-12V52h28a12 12 0 0 0 0-24H40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12m44-20h88a12 12 0 0 1 12 12v88a12 12 0 0 1-12 12H84a12 12 0 0 1-12-12V84a12 12 0 0 1 12-12m12 88h64V96H96Z"></svg:path>`,
})
export class PhScanBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScanDuotoneIcon],svg[ph-scan-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 80v96H80V80Z" opacity=".2"></svg:path><svg:path d="M224 40v40a8 8 0 0 1-16 0V48h-32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M80 208H48v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16m136-40a8 8 0 0 0-8 8v32h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M40 88a8 8 0 0 0 8-8V48h32a8 8 0 0 0 0-16H40a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8m40-16h96a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8m8 96h80V88H88Z"></svg:path></svg:g>`,
})
export class PhScanDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScanFillIcon],svg[ph-scan-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40v40a8 8 0 0 1-16 0V48h-32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M80 208H48v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16m136-40a8 8 0 0 0-8 8v32h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M40 88a8 8 0 0 0 8-8V48h32a8 8 0 0 0 0-16H40a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8m32-8v96a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8"></svg:path>`,
})
export class PhScanFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScanLightIcon],svg[ph-scan-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 40v40a6 6 0 0 1-12 0V46h-34a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6M80 210H46v-34a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6h40a6 6 0 0 0 0-12m136-40a6 6 0 0 0-6 6v34h-34a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6M40 86a6 6 0 0 0 6-6V46h34a6 6 0 0 0 0-12H40a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6m40-12h96a6 6 0 0 1 6 6v96a6 6 0 0 1-6 6H80a6 6 0 0 1-6-6V80a6 6 0 0 1 6-6m6 96h84V86H86Z"></svg:path>`,
})
export class PhScanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScanSmileyIcon],svg[ph-scan-smiley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40v36a8 8 0 0 1-16 0V48h-28a8 8 0 0 1 0-16h36a8 8 0 0 1 8 8m-8 132a8 8 0 0 0-8 8v28h-28a8 8 0 0 0 0 16h36a8 8 0 0 0 8-8v-36a8 8 0 0 0-8-8M76 208H48v-28a8 8 0 0 0-16 0v36a8 8 0 0 0 8 8h36a8 8 0 0 0 0-16M40 84a8 8 0 0 0 8-8V48h28a8 8 0 0 0 0-16H40a8 8 0 0 0-8 8v36a8 8 0 0 0 8 8m88 116a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72m56-72a56 56 0 1 0-56 56a56.06 56.06 0 0 0 56-56m-68-12a12 12 0 1 0-12 12a12 12 0 0 0 12-12m36-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-5.29 42c-3.81 3.37-12 6-18.71 6s-14.9-2.63-18.71-6a8 8 0 1 0-10.58 12c7.83 6.91 20.35 10 29.29 10s21.46-3.09 29.29-10a8 8 0 1 0-10.58-12"></svg:path>`,
})
export class PhScanSmileyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScanSmileyBoldIcon],svg[ph-scan-smiley-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 40v28a12 12 0 0 1-24 0V52h-16a12 12 0 0 1 0-24h28a12 12 0 0 1 12 12m-12 136a12 12 0 0 0-12 12v16h-16a12 12 0 0 0 0 24h28a12 12 0 0 0 12-12v-28a12 12 0 0 0-12-12M68 204H52v-16a12 12 0 0 0-24 0v28a12 12 0 0 0 12 12h28a12 12 0 0 0 0-24M40 80a12 12 0 0 0 12-12V52h16a12 12 0 0 0 0-24H40a12 12 0 0 0-12 12v28a12 12 0 0 0 12 12m88 128a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80m56-80a56 56 0 1 0-56 56a56.06 56.06 0 0 0 56-56m-80-24a16 16 0 1 0 16 16a16 16 0 0 0-16-16m48 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhScanSmileyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScanSmileyDuotoneIcon],svg[ph-scan-smiley-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 128a64 64 0 1 1-64-64a64 64 0 0 1 64 64" opacity=".2"></svg:path><svg:path d="M224 40v36a8 8 0 0 1-16 0V48h-28a8 8 0 0 1 0-16h36a8 8 0 0 1 8 8m-8 132a8 8 0 0 0-8 8v28h-28a8 8 0 0 0 0 16h36a8 8 0 0 0 8-8v-36a8 8 0 0 0-8-8M76 208H48v-28a8 8 0 0 0-16 0v36a8 8 0 0 0 8 8h36a8 8 0 0 0 0-16M40 84a8 8 0 0 0 8-8V48h28a8 8 0 0 0 0-16H40a8 8 0 0 0-8 8v36a8 8 0 0 0 8 8m88 116a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72m56-72a56 56 0 1 0-56 56a56.06 56.06 0 0 0 56-56m-68-12a12 12 0 1 0-12 12a12 12 0 0 0 12-12m36-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-5.29 42c-3.81 3.37-12 6-18.71 6s-14.9-2.63-18.71-6a8 8 0 1 0-10.58 12c7.83 6.91 20.35 10 29.29 10s21.46-3.09 29.29-10a8 8 0 1 0-10.58-12"></svg:path></svg:g>`,
})
export class PhScanSmileyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScanSmileyFillIcon],svg[ph-scan-smiley-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40v36a8 8 0 0 1-16 0V48h-28a8 8 0 0 1 0-16h36a8 8 0 0 1 8 8m-8 132a8 8 0 0 0-8 8v28h-28a8 8 0 0 0 0 16h36a8 8 0 0 0 8-8v-36a8 8 0 0 0-8-8M76 208H48v-28a8 8 0 0 0-16 0v36a8 8 0 0 0 8 8h36a8 8 0 0 0 0-16M40 84a8 8 0 0 0 8-8V48h28a8 8 0 0 0 0-16H40a8 8 0 0 0-8 8v36a8 8 0 0 0 8 8m88 116a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72m-24-72a12 12 0 1 0-12-12a12 12 0 0 0 12 12m54 18.71a8 8 0 0 0-11.29-.71c-3.81 3.37-12 6-18.71 6s-14.9-2.63-18.71-6a8 8 0 1 0-10.58 12c7.83 6.91 20.35 10 29.29 10s21.46-3.09 29.29-10a8 8 0 0 0 .71-11.29m6-30.71a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhScanSmileyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScanSmileyLightIcon],svg[ph-scan-smiley-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 40v36a6 6 0 0 1-12 0V46h-30a6 6 0 0 1 0-12h36a6 6 0 0 1 6 6m-6 134a6 6 0 0 0-6 6v30h-30a6 6 0 0 0 0 12h36a6 6 0 0 0 6-6v-36a6 6 0 0 0-6-6M76 210H46v-30a6 6 0 0 0-12 0v36a6 6 0 0 0 6 6h36a6 6 0 0 0 0-12M40 82a6 6 0 0 0 6-6V46h30a6 6 0 0 0 0-12H40a6 6 0 0 0-6 6v36a6 6 0 0 0 6 6m88 116a70 70 0 1 1 70-70a70.08 70.08 0 0 1-70 70m58-70a58 58 0 1 0-58 58a58.07 58.07 0 0 0 58-58m-72-12a10 10 0 1 0-10 10a10 10 0 0 0 10-10m38-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-4 41.5c-4.2 3.71-12.81 6.5-20 6.5s-15.83-2.79-20-6.5a6 6 0 0 0-7.94 9c7.44 6.56 19.41 9.5 28 9.5s20.53-2.94 28-9.5a6 6 0 1 0-7.94-9Z"></svg:path>`,
})
export class PhScanSmileyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScanSmileyThinIcon],svg[ph-scan-smiley-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 40v36a4 4 0 0 1-8 0V44h-32a4 4 0 0 1 0-8h36a4 4 0 0 1 4 4m-4 136a4 4 0 0 0-4 4v32h-32a4 4 0 0 0 0 8h36a4 4 0 0 0 4-4v-36a4 4 0 0 0-4-4M76 212H44v-32a4 4 0 0 0-8 0v36a4 4 0 0 0 4 4h36a4 4 0 0 0 0-8M40 80a4 4 0 0 0 4-4V44h32a4 4 0 0 0 0-8H40a4 4 0 0 0-4 4v36a4 4 0 0 0 4 4m88 116a68 68 0 1 1 68-68a68.07 68.07 0 0 1-68 68m60-68a60 60 0 1 0-60 60a60.07 60.07 0 0 0 60-60m-76-12a8 8 0 1 0-8 8a8 8 0 0 0 8-8m40-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m-2.65 41c-4.52 4-13.7 7-21.35 7s-16.83-3-21.35-7a4 4 0 0 0-5.3 6c6 5.3 17 9 26.65 9s20.64-3.7 26.65-9a4 4 0 1 0-5.3-6"></svg:path>`,
})
export class PhScanSmileyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScanThinIcon],svg[ph-scan-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 40v40a4 4 0 0 1-8 0V44h-36a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4M80 212H44v-36a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4h40a4 4 0 0 0 0-8m136-40a4 4 0 0 0-4 4v36h-36a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4M40 84a4 4 0 0 0 4-4V44h36a4 4 0 0 0 0-8H40a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4m40-8h96a4 4 0 0 1 4 4v96a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4m4 96h88V84H84Z"></svg:path>`,
})
export class PhScanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScissorsIcon],svg[ph-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M157.73 113.13a8 8 0 0 1 2.09-11.13l67.66-46.3a8 8 0 0 1 9 13.21l-67.67 46.3a7.9 7.9 0 0 1-4.51 1.4a8 8 0 0 1-6.57-3.48m80.87 85.09a8 8 0 0 1-11.12 2.08L136 137.7l-42.51 29.08a36 36 0 1 1-9-13.19L121.83 128l-37.39-25.59a35.86 35.86 0 1 1 9-13.19l143 97.87a8 8 0 0 1 2.16 11.13M80 180a20 20 0 1 0-5.86 14.14A19.85 19.85 0 0 0 80 180m-5.86-89.87a20 20 0 1 0-28.28 0a19.85 19.85 0 0 0 28.28 0"></svg:path>`,
})
export class PhScissorsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScissorsBoldIcon],svg[ph-scissors-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238.78 183.79L98.28 87.65A40.2 40.2 0 0 0 100 76a40 40 0 1 0-15.29 31.45l30 20.56l-30 20.56a40 40 0 1 0 3.57 59.74A39.73 39.73 0 0 0 100 180a40.2 40.2 0 0 0-1.72-11.66l37.72-25.8l89.22 61.06a12 12 0 0 0 13.56-19.81m-167.47 7.54A16 16 0 1 1 76 180a16 16 0 0 1-4.69 11.33M48.69 87.3a16 16 0 1 1 22.62 0a16 16 0 0 1-22.62 0m112.82 23.24a12 12 0 0 1 3.13-16.68l60.58-41.46a12 12 0 0 1 13.56 19.81l-60.59 41.46a12 12 0 0 1-16.68-3.13"></svg:path>`,
})
export class PhScissorsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScissorsDuotoneIcon],svg[ph-scissors-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M40.2 95.8a28 28 0 1 1 39.6 0a28 28 0 0 1-39.6 0m0 64.4a28 28 0 1 0 39.6 0a28 28 0 0 0-39.6 0" opacity=".2"></svg:path><svg:path d="M157.73 113.13a8 8 0 0 1 2.09-11.13l67.66-46.3a8 8 0 0 1 9 13.21l-67.67 46.3a7.9 7.9 0 0 1-4.51 1.4a8 8 0 0 1-6.57-3.48m80.87 85.09a8 8 0 0 1-11.12 2.08L136 137.7l-42.51 29.08a36 36 0 1 1-9-13.19L121.83 128l-37.39-25.59a35.86 35.86 0 1 1 9-13.19l143 97.87a8 8 0 0 1 2.16 11.13M80 180a20 20 0 1 0-5.86 14.14A19.85 19.85 0 0 0 80 180m-5.86-89.87a20 20 0 1 0-28.28 0a19.85 19.85 0 0 0 28.28 0"></svg:path></svg:g>`,
})
export class PhScissorsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScissorsFillIcon],svg[ph-scissors-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.52 187.09l-143-97.87a36 36 0 1 0-14.38 17.27l21.39 21.69l-21.38 21.36a35.91 35.91 0 1 0 14.38 17.27l26.91-18.41L170 198.64a32.26 32.26 0 0 0 22.7 9.37a31.5 31.5 0 0 0 4.11-.27h.28l36.27-6.11a8 8 0 0 0 3.19-14.5Zm-162.38-97A20 20 0 1 1 80 76a20 20 0 0 1-5.86 14.13Zm0 104A20 20 0 1 1 80 180a20 20 0 0 1-5.86 14.15Zm61-101.5l34.8-35.19a32.19 32.19 0 0 1 26.84-9.14h.28l36 6.07a8.21 8.21 0 0 1 6.09 4.42a8 8 0 0 1-2.67 10.12l-69.93 47.85a4 4 0 0 1-4.51 0l-26.31-18a4 4 0 0 1-.55-6.07Z"></svg:path>`,
})
export class PhScissorsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScissorsLightIcon],svg[ph-scissors-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M159.38 112a6 6 0 0 1 1.57-8.34l67.66-46.31a6 6 0 0 1 6.78 9.91l-67.67 46.3a6 6 0 0 1-8.34-1.56M237 197.09a6 6 0 0 1-8.34 1.56L136 135.27l-45 30.79A34 34 0 1 1 84 156a2 2 0 0 0 .19.2l41.18-28.2l-41.14-28.16l-.23.16a34 34 0 1 1 7-10.1l144.38 98.8a6 6 0 0 1 1.62 8.39M75.56 91.55a22 22 0 1 0-31.12 0a21.88 21.88 0 0 0 31.12 0M82 180a22 22 0 1 0-6.44 15.56A21.88 21.88 0 0 0 82 180"></svg:path>`,
})
export class PhScissorsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScissorsThinIcon],svg[ph-scissors-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161 110.87a4 4 0 0 1 1.05-5.56L229.74 59a4 4 0 0 1 4.52 6.61l-67.67 46.3a4 4 0 0 1-5.56-1ZM235.3 196a4 4 0 0 1-5.56 1L136 132.85l-47.53 32.53a32 32 0 1 1-5.84-8c.45.45.89.92 1.31 1.4l45-30.78l-45-30.78c-.42.48-.86 1-1.31 1.4a31.86 31.86 0 1 1 5.84-8l49.69 34l96.09 65.76a4 4 0 0 1 1.05 5.62M77 93a24.4 24.4 0 0 0 2.82-3.38A24 24 0 1 0 77 93m7 87a23.75 23.75 0 0 0-4.15-13.49v-.06A24.5 24.5 0 0 0 77 163a24 24 0 1 0 0 34a23.85 23.85 0 0 0 7-17"></svg:path>`,
})
export class PhScissorsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScooterIcon],svg[ph-scooter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 136c-1.18 0-2.35.06-3.51.17l-32.9-98.7A8 8 0 0 0 168 32h-32a8 8 0 0 0 0 16h26.23l17.44 52.31L124.21 168H79.77a36 36 0 1 0-1.83 16H128a8 8 0 0 0 6.19-2.93l51.46-62.81l7.66 23A36 36 0 1 0 212 136M44 192a20 20 0 1 1 20-20a20 20 0 0 1-20 20m168 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhScooterIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScooterBoldIcon],svg[ph-scooter-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 132h-.68l-31.94-95.79A12 12 0 0 0 168 28h-32a12 12 0 0 0 0 24h23.35l14.83 44.49L114.59 164H83.2a40 40 0 1 0-2.55 24H120a12 12 0 0 0 9-4.06l54-61.13l5.6 16.81A40 40 0 1 0 212 132M44 188a16 16 0 1 1 16-16a16 16 0 0 1-16 16m168 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhScooterBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScooterDuotoneIcon],svg[ph-scooter-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M72 172a28 28 0 1 1-28-28a28 28 0 0 1 28 28m140-28a28 28 0 1 0 28 28a28 28 0 0 0-28-28" opacity=".2"></svg:path><svg:path d="M212 136c-1.18 0-2.35.06-3.51.17l-32.9-98.7A8 8 0 0 0 168 32h-32a8 8 0 0 0 0 16h26.23l17.44 52.31L124.21 168H79.77a36 36 0 1 0-1.83 16H128a8 8 0 0 0 6.19-2.93l51.46-62.81l7.66 23A36 36 0 1 0 212 136M44 192a20 20 0 1 1 20-20a20 20 0 0 1-20 20m168 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path></svg:g>`,
})
export class PhScooterDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScooterFillIcon],svg[ph-scooter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 172a32 32 0 1 1-49.38-26.85l-9-26.89l-51.46 62.81A8 8 0 0 1 128 184H73.66a32 32 0 1 1 2.08-16h48.47l55.46-67.69L162.23 48H136a8 8 0 0 1 0-16h32a8 8 0 0 1 7.59 5.47l34.21 102.61c.72-.05 1.46-.08 2.2-.08a32 32 0 0 1 32 32"></svg:path>`,
})
export class PhScooterFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScooterLightIcon],svg[ph-scooter-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 138a34 34 0 0 0-4.89.36L173.69 38.1A6 6 0 0 0 168 34h-32a6 6 0 0 0 0 12h27.68l18.24 54.73L125.16 170H77.94a34 34 0 1 0-1.44 12H128a6 6 0 0 0 4.64-2.2l53.76-65.62l9.33 28A34 34 0 1 0 212 138M44 194a22 22 0 1 1 22-22a22 22 0 0 1-22 22m168 0a22 22 0 1 1 22-22a22 22 0 0 1-22 22"></svg:path>`,
})
export class PhScooterLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScooterThinIcon],svg[ph-scooter-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 140a31.3 31.3 0 0 0-6.24.62l-34-101.88A4 4 0 0 0 168 36h-32a4 4 0 0 0 0 8h29.12l19 57.14l-58 70.86H76a32 32 0 1 0-1 8h53a4 4 0 0 0 3.09-1.46l56.06-68.43l11 33A32 32 0 1 0 212 140M44 196a24 24 0 1 1 24-24a24 24 0 0 1-24 24m168 0a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhScooterThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScreencastIcon],svg[ph-screencast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56v144a16 16 0 0 1-16 16h-72a8 8 0 0 1 0-16h72V56H40v40a8 8 0 0 1-16 0V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16M32 184a8 8 0 0 0 0 16a8 8 0 0 1 8 8a8 8 0 0 0 16 0a24 24 0 0 0-24-24m0-32a8 8 0 0 0 0 16a40 40 0 0 1 40 40a8 8 0 0 0 16 0a56.06 56.06 0 0 0-56-56m0-32a8 8 0 0 0 0 16a72.08 72.08 0 0 1 72 72a8 8 0 0 0 16 0a88.1 88.1 0 0 0-88-88"></svg:path>`,
})
export class PhScreencastIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScreencastBoldIcon],svg[ph-screencast-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 60v136a20 20 0 0 1-20 20h-40a12 12 0 0 1 0-24h36V64H48v4a12 12 0 0 1-24 0v-8a20 20 0 0 1 20-20h168a20 20 0 0 1 20 20M36 176a12 12 0 0 0 0 24a4 4 0 0 1 4 4a12 12 0 0 0 24 0a28 28 0 0 0-28-28m0-40a12 12 0 0 0 0 24a44.05 44.05 0 0 1 44 44a12 12 0 0 0 24 0a68.07 68.07 0 0 0-68-68m0-40a12 12 0 0 0 0 24a84.09 84.09 0 0 1 84 84a12 12 0 0 0 24 0A108.12 108.12 0 0 0 36 96"></svg:path>`,
})
export class PhScreencastBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScreencastDuotoneIcon],svg[ph-screencast-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v144a8 8 0 0 1-8 8H48a16 16 0 0 0-16-16V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M232 56v144a16 16 0 0 1-16 16h-72a8 8 0 0 1 0-16h72V56H40v40a8 8 0 0 1-16 0V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16M32 184a8 8 0 0 0 0 16a8 8 0 0 1 8 8a8 8 0 0 0 16 0a24 24 0 0 0-24-24m0-32a8 8 0 0 0 0 16a40 40 0 0 1 40 40a8 8 0 0 0 16 0a56.06 56.06 0 0 0-56-56m0-32a8 8 0 0 0 0 16a72.08 72.08 0 0 1 72 72a8 8 0 0 0 16 0a88.1 88.1 0 0 0-88-88"></svg:path></svg:g>`,
})
export class PhScreencastDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScreencastFillIcon],svg[ph-screencast-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 208a8 8 0 0 1-8.24 8a8.28 8.28 0 0 1-7.76-8.24a8 8 0 0 0-7.76-7.76a8.28 8.28 0 0 1-8.24-7.76a8 8 0 0 1 8-8.24a24 24 0 0 1 24 24m-24-56a8 8 0 0 0-8 8.65a8.17 8.17 0 0 0 8.24 7.35A40 40 0 0 1 72 207.76a8.17 8.17 0 0 0 7.36 8.24a8 8 0 0 0 8.64-8a56.06 56.06 0 0 0-56-56m0-32a8 8 0 0 0-8 8.6a8.22 8.22 0 0 0 8.3 7.4a72.08 72.08 0 0 1 71.7 71.68a8.22 8.22 0 0 0 7.4 8.3a8 8 0 0 0 8.6-8A88.1 88.1 0 0 0 32 120m184-80H40a16 16 0 0 0-16 16v44.08a4 4 0 0 0 4.15 4a104.11 104.11 0 0 1 107.78 107.77a4 4 0 0 0 4 4.15H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhScreencastFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScreencastLightIcon],svg[ph-screencast-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 56v144a14 14 0 0 1-14 14h-72a6 6 0 0 1 0-12h72a2 2 0 0 0 2-2V56a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v40a6 6 0 0 1-12 0V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14M32 186a6 6 0 0 0 0 12a10 10 0 0 1 10 10a6 6 0 0 0 12 0a22 22 0 0 0-22-22m0-32a6 6 0 0 0 0 12a42 42 0 0 1 42 42a6 6 0 0 0 12 0a54.06 54.06 0 0 0-54-54m0-32a6 6 0 0 0 0 12a74.09 74.09 0 0 1 74 74a6 6 0 0 0 12 0a86.1 86.1 0 0 0-86-86"></svg:path>`,
})
export class PhScreencastLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScreencastThinIcon],svg[ph-screencast-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 56v144a12 12 0 0 1-12 12h-72a4 4 0 0 1 0-8h72a4 4 0 0 0 4-4V56a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v40a4 4 0 0 1-8 0V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12M32 188a4 4 0 0 0 0 8a12 12 0 0 1 12 12a4 4 0 0 0 8 0a20 20 0 0 0-20-20m0-32a4 4 0 0 0 0 8a44.05 44.05 0 0 1 44 44a4 4 0 0 0 8 0a52.06 52.06 0 0 0-52-52m0-32a4 4 0 0 0 0 8a76.08 76.08 0 0 1 76 76a4 4 0 0 0 8 0a84.09 84.09 0 0 0-84-84"></svg:path>`,
})
export class PhScreencastThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScrewdriverIcon],svg[ph-screwdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.66 50.32a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32-11.31l56-56a8 8 0 0 1 11.32-.01M248 58.41a50.13 50.13 0 0 1-14.77 35.66L180 147.3a15.86 15.86 0 0 1-11.31 4.7H152v16.83a16 16 0 0 1-3.25 9.66a8 8 0 0 1-.72.83l-8 8a16 16 0 0 1-22.62 0L98.7 168.6l-77 77.06a8 8 0 0 1-11.32-11.32l77.05-77.05l-18.7-18.71a16 16 0 0 1 0-22.63l8-8a8 8 0 0 1 .82-.72a16.14 16.14 0 0 1 9.62-3.23H104V87.3a15.92 15.92 0 0 1 4.68-11.3l53.24-53.23A50.43 50.43 0 0 1 248 58.41m-16 0a34.43 34.43 0 0 0-58.77-24.35L120 87.3V104a16 16 0 0 1-16 16H87.28L80 127.27L128.72 176l7.28-7.28V152a16 16 0 0 1 16-16h16.69l53.23-53.24A34.2 34.2 0 0 0 232 58.41"></svg:path>`,
})
export class PhScrewdriverIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScrewdriverBoldIcon],svg[ph-screwdriver-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.49 47.49a12 12 0 0 1 0 17l-52 52a12 12 0 0 1-17-17l52-52a12 12 0 0 1 17 0M252 58.41a54.1 54.1 0 0 1-15.94 38.49l-53.23 53.23a19.86 19.86 0 0 1-14.14 5.87H156v12.83a20.13 20.13 0 0 1-4.06 12.08a11.5 11.5 0 0 1-1.08 1.23l-8 8a20 20 0 0 1-28.28 0L98.7 174.26l-74.21 74.22a12 12 0 1 1-17-17l74.22-74.22l-15.85-15.85a20 20 0 0 1 0-28.29l8-8A11.6 11.6 0 0 1 75.1 104a20.08 20.08 0 0 1 12.07-4H100V87.3a19.9 19.9 0 0 1 5.86-14.15l53.23-53.23A54.43 54.43 0 0 1 252 58.41m-24 0a30.43 30.43 0 0 0-51.94-21.52L124 89v15a20 20 0 0 1-20 20H88.94l-3.28 3.28l21.52 21.53l21.53 21.52l3.28-3.28V152a20 20 0 0 1 20-20h15l52.06-52.07A30.24 30.24 0 0 0 228 58.41"></svg:path>`,
})
export class PhScrewdriverBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScrewdriverDuotoneIcon],svg[ph-screwdriver-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m227.57 88.43l-53.23 53.23a8 8 0 0 1-5.65 2.34H152a8 8 0 0 0-8 8v16.83a8 8 0 0 1-1.62 4.83l-8 8a8 8 0 0 1-11.32 0l-48.72-48.72a8 8 0 0 1 0-11.32l8-8a8 8 0 0 1 4.83-1.62H104a8 8 0 0 0 8-8V87.31a8 8 0 0 1 2.34-5.65l53.23-53.23a42.42 42.42 0 0 1 60 0a42.42 42.42 0 0 1 0 60" opacity=".2"></svg:path><svg:path d="M205.66 50.32a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32-11.31l56-56a8 8 0 0 1 11.32-.01M248 58.41a50.13 50.13 0 0 1-14.77 35.66L180 147.3a15.86 15.86 0 0 1-11.31 4.7H152v16.83a16 16 0 0 1-3.25 9.66a8 8 0 0 1-.72.83l-8 8a16 16 0 0 1-22.62 0L98.7 168.6l-77 77.06a8 8 0 0 1-11.32-11.32l77.05-77.05l-18.7-18.71a16 16 0 0 1 0-22.63l8-8a8 8 0 0 1 .82-.72a16.14 16.14 0 0 1 9.62-3.23H104V87.3a15.92 15.92 0 0 1 4.68-11.3l53.24-53.23A50.43 50.43 0 0 1 248 58.41m-16 0a34.43 34.43 0 0 0-58.77-24.35L120 87.3V104a16 16 0 0 1-16 16H87.28L80 127.27L128.72 176l7.28-7.28V152a16 16 0 0 1 16-16h16.69l53.23-53.24A34.2 34.2 0 0 0 232 58.41"></svg:path></svg:g>`,
})
export class PhScrewdriverDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScrewdriverFillIcon],svg[ph-screwdriver-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233.23 22.75a50.46 50.46 0 0 0-71.31 0L108.68 76A15.92 15.92 0 0 0 104 87.3V104H87.17a16.14 16.14 0 0 0-9.66 3.24a8 8 0 0 0-.82.72l-8 8a16 16 0 0 0 0 22.63l18.7 18.71l-77 77.05a8 8 0 0 0 11.32 11.32l77-77.06l18.71 18.71a16 16 0 0 0 22.62 0l8-8a8 8 0 0 0 .72-.83a16 16 0 0 0 3.25-9.66V152h16.69a15.86 15.86 0 0 0 11.3-4.7l53.23-53.23a50.43 50.43 0 0 0 0-71.32m-27.57 38.89l-56 56a8 8 0 0 1-11.32-11.31l56-56a8 8 0 0 1 11.32 11.32Z"></svg:path>`,
})
export class PhScrewdriverFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScrewdriverLightIcon],svg[ph-screwdriver-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.24 51.74a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48-8.49l56-56a6 6 0 0 1 8.48.01M246 58.41a48.12 48.12 0 0 1-14.18 34.24l-53.24 53.24a13.9 13.9 0 0 1-9.89 4.1H152a2 2 0 0 0-2 2v16.83a14.07 14.07 0 0 1-2.84 8.45a7 7 0 0 1-.54.62l-8 8a14 14 0 0 1-19.8 0L98.7 165.77l-78.46 78.47a6 6 0 0 1-8.48-8.48l78.46-78.47l-20.12-20.12a14 14 0 0 1 0-19.8l8-8a4.5 4.5 0 0 1 .62-.54a14 14 0 0 1 8.45-2.83H104a2 2 0 0 0 2-2V87.3a13.92 13.92 0 0 1 4.1-9.9l53.23-53.24A48.43 48.43 0 0 1 246 58.41m-12 0a36.43 36.43 0 0 0-62.18-25.76l-53.24 53.23a2 2 0 0 0-.58 1.42V104a14 14 0 0 1-14 14H87.17a2.1 2.1 0 0 0-1 .25l-7.61 7.61a2 2 0 0 0 0 2.83l48.73 48.73a2 2 0 0 0 2.82 0l7.62-7.61a2.1 2.1 0 0 0 .25-1V152a14 14 0 0 1 14-14h16.69a2 2 0 0 0 1.41-.59l53.23-53.23A36.2 36.2 0 0 0 234 58.41"></svg:path>`,
})
export class PhScrewdriverLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScrewdriverThinIcon],svg[ph-screwdriver-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.83 53.15a4 4 0 0 1 0 5.66l-56 56a4 4 0 0 1-5.66-5.66l56-56a4 4 0 0 1 5.66 0M244 58.41a46.13 46.13 0 0 1-13.6 32.83l-53.23 53.24a11.93 11.93 0 0 1-8.48 3.51H152a4 4 0 0 0-4 4v16.83a12.08 12.08 0 0 1-2.44 7.25c-.11.14-.23.28-.35.41l-8 8a12 12 0 0 1-17 0L98.7 163l-79.87 79.83a4 4 0 0 1-5.66-5.66l79.88-79.88l-21.54-21.54a12 12 0 0 1 0-17l8-8a3.6 3.6 0 0 1 .42-.36a12 12 0 0 1 7.24-2.39H104a4 4 0 0 0 4-4V87.3a12 12 0 0 1 3.51-8.49l53.24-53.23A46.43 46.43 0 0 1 244 58.41m-8 0a38.43 38.43 0 0 0-65.6-27.18l-53.23 53.24A4 4 0 0 0 116 87.3V104a12 12 0 0 1-12 12H87.17a4 4 0 0 0-2.23.68l-7.77 7.77a4 4 0 0 0 0 5.66l48.72 48.72a4 4 0 0 0 5.66 0l7.77-7.77a4 4 0 0 0 .68-2.23V152a12 12 0 0 1 12-12h16.69a4 4 0 0 0 2.82-1.17l53.24-53.24A38.2 38.2 0 0 0 236 58.41"></svg:path>`,
})
export class PhScrewdriverThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScribbleIcon],svg[ph-scribble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.67 189.66a14.61 14.61 0 0 0 0 20.68a8 8 0 0 1-11.32 11.32a30.64 30.64 0 0 1 0-43.32l9.38-9.37A14.63 14.63 0 0 0 183 148.28L116.28 215A30.63 30.63 0 0 1 73 171.72L171.72 73A14.63 14.63 0 0 0 151 52.28L84.28 119A30.63 30.63 0 0 1 41 75.72l41.34-41.38a8 8 0 0 1 11.31 11.32L52.27 87A14.63 14.63 0 0 0 73 107.72L139.72 41A30.63 30.63 0 0 1 183 84.28L84.28 183A14.63 14.63 0 0 0 105 203.72L171.72 137A30.63 30.63 0 0 1 215 180.28Z"></svg:path>`,
})
export class PhScribbleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScribbleBoldIcon],svg[ph-scribble-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.5 192.49a10.6 10.6 0 0 0 0 15a12 12 0 0 1-17 17a34.62 34.62 0 0 1 0-49l9.37-9.37a10.63 10.63 0 0 0-15-15l-66.76 66.75a34.63 34.63 0 0 1-49-49l98.76-98.75a10.63 10.63 0 0 0-15-15l-66.76 66.74a34.63 34.63 0 0 1-49-49l41.4-41.35a12 12 0 1 1 17 17L55.1 89.86a10.63 10.63 0 0 0 15 15l66.76-66.75a34.63 34.63 0 1 1 49 49l-98.75 98.75a10.63 10.63 0 0 0 15 15l66.75-66.75a34.63 34.63 0 0 1 49 49Z"></svg:path>`,
})
export class PhScribbleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScribbleDuotoneIcon],svg[ph-scribble-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M205.67 189.66a14.61 14.61 0 0 0 0 20.68a8 8 0 0 1-11.32 11.32a30.64 30.64 0 0 1 0-43.32l9.38-9.37A14.63 14.63 0 0 0 183 148.28L116.28 215A30.63 30.63 0 0 1 73 171.72L171.72 73A14.63 14.63 0 0 0 151 52.28L84.28 119A30.63 30.63 0 0 1 41 75.72l41.34-41.38a8 8 0 0 1 11.31 11.32L52.27 87A14.63 14.63 0 0 0 73 107.72L139.72 41A30.63 30.63 0 0 1 183 84.28L84.28 183A14.63 14.63 0 0 0 105 203.72L171.72 137A30.63 30.63 0 0 1 215 180.28Z"></svg:path></svg:g>`,
})
export class PhScribbleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScribbleFillIcon],svg[ph-scribble-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-14.34 137.66l-8 8a9 9 0 0 0 0 12.68l4 4a8 8 0 0 1-11.32 11.32l-4-4a25 25 0 0 1 0-35.32l8-8a9 9 0 0 0 0-12.68a9 9 0 0 0-12.68 0l-48 48a25 25 0 0 1-35.32-35.32l72-72a9 9 0 0 0 0-12.68a9 9 0 0 0-12.68 0l-48 48a25 25 0 0 1-35.32-35.32l28-28a8 8 0 0 1 11.32 11.32l-28 28a9 9 0 0 0 0 12.68a9 9 0 0 0 12.68 0l48-48a25 25 0 0 1 35.32 35.32l-72 72a9 9 0 0 0 0 12.68a9 9 0 0 0 12.68 0l48-48a25 25 0 0 1 35.32 35.32"></svg:path>`,
})
export class PhScribbleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScribbleLightIcon],svg[ph-scribble-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.25 188.24a16.63 16.63 0 0 0 0 23.52a6 6 0 1 1-8.48 8.48a28.61 28.61 0 0 1 0-40.48l9.37-9.38a16.63 16.63 0 0 0-23.52-23.51l-66.75 66.75a28.63 28.63 0 0 1-40.49-40.49l98.76-98.75a16.63 16.63 0 0 0-23.52-23.51l-66.76 66.75a28.63 28.63 0 0 1-40.49-40.49l41.38-41.37a6 6 0 1 1 8.49 8.48L50.86 85.62a16.63 16.63 0 0 0 23.52 23.51l66.75-66.75a28.63 28.63 0 0 1 40.49 40.49l-98.76 98.75a16.63 16.63 0 0 0 23.52 23.51l66.76-66.75a28.63 28.63 0 0 1 40.49 40.49Z"></svg:path>`,
})
export class PhScribbleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScribbleLoopIcon],svg[ph-scribble-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M253.93 154.63c-1.32-1.46-24.09-26.22-61-40.56c-1.72-18.42-8.46-35.17-19.41-47.92C158.87 49 137.58 40 112 40c-51.52 0-85.11 46.18-86.51 48.15a8 8 0 0 0 13 9.31C38.8 97.05 68.81 56 112 56c20.77 0 37.86 7.11 49.41 20.57c7.42 8.64 12.44 19.69 14.67 32A141 141 0 0 0 140.6 104c-26.06 0-47.93 6.81-63.26 19.69C63.78 135.09 56 151 56 167.25a47.6 47.6 0 0 0 13.87 34.05c9.66 9.62 23.06 14.7 38.73 14.7c51.81 0 81.18-42.13 84.49-84.42a161.4 161.4 0 0 1 49 33.79a8 8 0 1 0 11.86-10.74Zm-94.46 21.64C150.64 187.09 134.66 200 108.6 200C83.32 200 72 183.55 72 167.25C72 144.49 93.47 120 140.6 120a124.3 124.3 0 0 1 36.78 5.68c-.45 18.76-6.92 37.1-17.91 50.59"></svg:path>`,
})
export class PhScribbleLoopIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScribbleLoopBoldIcon],svg[ph-scribble-loop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252.9 152c-1.33-1.47-23.75-25.85-60.21-40.69c-2.15-18.28-9.1-34.9-20.1-47.71C157.12 45.52 134.79 36 108 36c-53.56 0-88.31 47.79-89.76 49.82a12 12 0 0 0 19.53 14C38.05 99.38 66.65 60 108 60c19.85 0 35.45 6.45 46.38 19.18a61.35 61.35 0 0 1 12.4 24a143.6 143.6 0 0 0-30.17-3.18c-27 0-49.79 7.13-65.85 20.63C56.3 132.79 48 149.78 48 167.25C48 193.46 67.44 220 104.61 220c51.93 0 82.34-40.28 87.87-82.43a156.5 156.5 0 0 1 42.62 30.48A12 12 0 1 0 252.9 152m-100.53 21.74C144.09 183.9 129.09 196 104.61 196C82.08 196 72 181.56 72 167.25C72 146.42 92.22 124 136.61 124a120 120 0 0 1 32.64 4.62c-1.01 16.82-7.04 33.04-16.88 45.12"></svg:path>`,
})
export class PhScribbleLoopBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScribbleLoopDuotoneIcon],svg[ph-scribble-loop-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M108.6 208c-64 0-64-96 32-96a134.4 134.4 0 0 1 44.73 7.83C187 162.36 159.88 208 108.6 208" opacity=".2"></svg:path><svg:path d="M253.93 154.63c-1.32-1.46-24.09-26.22-61-40.56c-1.72-18.42-8.46-35.17-19.41-47.92C158.87 49 137.58 40 112 40c-51.52 0-85.11 46.18-86.51 48.15a8 8 0 0 0 13 9.31C38.8 97.05 68.81 56 112 56c20.77 0 37.86 7.11 49.41 20.57c7.42 8.64 12.44 19.69 14.67 32A141 141 0 0 0 140.6 104c-26.06 0-47.93 6.81-63.26 19.69C63.78 135.09 56 151 56 167.25a47.6 47.6 0 0 0 13.87 34.05c9.66 9.62 23.06 14.7 38.73 14.7c51.81 0 81.18-42.13 84.49-84.42a161.4 161.4 0 0 1 49 33.79a8 8 0 1 0 11.86-10.74Zm-94.46 21.64C150.64 187.09 134.66 200 108.6 200C83.32 200 72 183.55 72 167.25C72 144.49 93.47 120 140.6 120a124.3 124.3 0 0 1 36.78 5.68c-.45 18.76-6.92 37.1-17.91 50.59"></svg:path></svg:g>`,
})
export class PhScribbleLoopDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScribbleLoopFillIcon],svg[ph-scribble-loop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 128a81.4 81.4 0 0 1 25.69 4.28C151.56 154.87 137.33 176 112 176c-15.8 0-24.06-10.85-24.06-21.58c0-6.59 3-12.75 8.56-17.35c7.12-5.93 18.02-9.07 31.5-9.07m96-80v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-18.11 98.59a120.2 120.2 0 0 0-36.08-25.21c-.9-14.35-5.75-27.54-13.89-37.55C145.38 70.86 130.19 64 112 64c-35.56 0-61.32 33.76-62.4 35.2a8 8 0 0 0 12.79 9.62C62.61 108.53 84.51 80 112 80c13.4 0 24 4.68 31.5 13.92a47.54 47.54 0 0 1 9.48 21.4A96.8 96.8 0 0 0 128 112c-17.27 0-31.71 4.42-41.74 12.78C77 132.47 71.94 143 71.94 154.42C71.94 172.64 86 192 112 192a54 54 0 0 0 43.53-21.23A70 70 0 0 0 169 138.89a106.2 106.2 0 0 1 25.13 18.52a8 8 0 1 0 11.78-10.82Z"></svg:path>`,
})
export class PhScribbleLoopFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScribbleLoopLightIcon],svg[ph-scribble-loop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252.45 156c-1.32-1.46-24.27-26.42-61.37-40.5c-1.5-18.49-8.13-35.31-19-48C157.74 50.8 137 42 112 42c-50.51 0-83.5 45.38-84.88 47.31a6 6 0 1 0 9.76 7C37.18 95.87 67.75 54 112 54c21.37 0 39 7.35 50.93 21.27c8.26 9.62 13.64 22.14 15.62 36.06a139 139 0 0 0-38-5.33c-25.58 0-47 6.65-62 19.22c-13.1 11-20.62 26.34-20.62 42a45.65 45.65 0 0 0 13.28 32.64C80.56 209.12 93.47 214 108.6 214c51.73 0 80.55-43.09 82.68-85.38c32.05 13.49 52 35.09 52.27 35.4a6 6 0 0 0 8.9-8ZM161 177.53c-9.08 11.16-25.56 24.47-52.4 24.47C90 202 70 191.12 70 167.25C70 143.53 92.09 118 140.6 118a126.7 126.7 0 0 1 38.8 6.22c-.14 19.72-6.82 39.12-18.4 53.31"></svg:path>`,
})
export class PhScribbleLoopLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScribbleLoopThinIcon],svg[ph-scribble-loop-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M251 157.32c-1.32-1.46-24.47-26.63-61.79-40.43c-1.26-18.56-7.78-35.45-18.66-48.13C156.62 52.56 136.38 44 112 44c-49.49 0-81.9 44.58-83.26 46.48a4 4 0 0 0 6.51 4.65C35.56 94.7 66.68 52 112 52c22 0 40.11 7.6 52.45 22c9.11 10.61 14.81 24.62 16.46 40.13A137.8 137.8 0 0 0 140.6 108c-25.1 0-46.09 6.48-60.69 18.75C67.26 137.39 60 152.15 60 167.25a43.64 43.64 0 0 0 12.69 31.22C81.59 207.32 94 212 108.6 212c51.63 0 79.87-44.08 80.78-86.32c34.07 13.58 55.36 36.67 55.65 37a4 4 0 1 0 5.94-5.36Zm-88.4 21.47c-9.37 11.5-26.34 25.21-54 25.21c-27.89 0-40.6-19-40.6-36.75C68 142.57 90.72 116 140.6 116a129.2 129.2 0 0 1 40.8 6.77v.81c0 20.42-6.86 40.52-18.83 55.21Z"></svg:path>`,
})
export class PhScribbleLoopThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScribbleThinIcon],svg[ph-scribble-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.84 186.83a18.61 18.61 0 0 0 0 26.34a4 4 0 0 1-5.66 5.66a26.63 26.63 0 0 1 0-37.66l9.38-9.37a18.63 18.63 0 1 0-26.35-26.34l-66.76 66.74a26.63 26.63 0 0 1-37.66-37.66l98.76-98.74a18.63 18.63 0 1 0-26.35-26.34L81.45 116.2a26.63 26.63 0 0 1-37.66-37.66l41.38-41.37a4 4 0 1 1 5.65 5.66L49.44 84.2a18.63 18.63 0 1 0 26.35 26.34l66.76-66.74a26.63 26.63 0 0 1 37.66 37.66L81.45 180.2a18.63 18.63 0 1 0 26.35 26.34l66.75-66.74a26.63 26.63 0 0 1 37.66 37.66Z"></svg:path>`,
})
export class PhScribbleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScrollIcon],svg[ph-scroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 104a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16h-64a8 8 0 0 1-8-8m8 40h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16m128 48a32 32 0 0 1-32 32H88a32 32 0 0 1-32-32V64a16 16 0 0 0-32 0c0 5.74 4.83 9.62 4.88 9.66A8 8 0 0 1 24 88a7.9 7.9 0 0 1-4.79-1.61C18.05 85.54 8 77.61 8 64a32 32 0 0 1 32-32h136a32 32 0 0 1 32 32v104h8a8 8 0 0 1 4.8 1.6c1.2.86 11.2 8.79 11.2 22.4M96.26 173.48A8.07 8.07 0 0 1 104 168h88V64a16 16 0 0 0-16-16H67.69A31.7 31.7 0 0 1 72 64v128a16 16 0 0 0 32 0c0-5.74-4.83-9.62-4.88-9.66a7.82 7.82 0 0 1-2.86-8.86M216 192a12.58 12.58 0 0 0-3.23-8h-94a27 27 0 0 1 1.21 8a31.8 31.8 0 0 1-4.29 16H200a16 16 0 0 0 16-16"></svg:path>`,
})
export class PhScrollIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScrollBoldIcon],svg[ph-scroll-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 92a12 12 0 0 1 12-12h60a12 12 0 0 1 0 24h-60a12 12 0 0 1-12-12m12 52h60a12 12 0 0 0 0-24h-60a12 12 0 0 0 0 24m132 48a36 36 0 0 1-36 36H88a36 36 0 0 1-36-36V64a12 12 0 0 0-24 0c0 3.73 3.35 6.51 3.38 6.54l-.18-.14a12 12 0 1 1-14.39 19.19C15.49 88.62 4 79.55 4 64a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v100h4a12 12 0 0 1 7.2 2.4c1.31.98 12.8 10.05 12.8 25.6M92.62 172.2A12 12 0 0 1 104 164h84V64a12 12 0 0 0-12-12H73.94A35.9 35.9 0 0 1 76 64v128a12 12 0 0 0 24 0c0-3.58-3.17-6.38-3.2-6.4a12 12 0 0 1-4.18-13.4M212 192a7.7 7.7 0 0 0-1.24-4h-87a30 30 0 0 1 .26 4a35.8 35.8 0 0 1-2.06 12H200a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhScrollBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScrollDuotoneIcon],svg[ph-scroll-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 176h-96s8 6 8 16a24 24 0 0 1-48 0V64a24 24 0 0 0-24-24h136a24 24 0 0 1 24 24Z" opacity=".2"></svg:path><svg:path d="M96 104a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16h-64a8 8 0 0 1-8-8m8 40h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16m128 48a32 32 0 0 1-32 32H88a32 32 0 0 1-32-32V64a16 16 0 0 0-32 0c0 5.74 4.83 9.62 4.88 9.66A8 8 0 0 1 24 88a7.9 7.9 0 0 1-4.79-1.61C18.05 85.54 8 77.61 8 64a32 32 0 0 1 32-32h136a32 32 0 0 1 32 32v104h8a8 8 0 0 1 4.8 1.6c1.2.86 11.2 8.79 11.2 22.4M96.26 173.48A8.07 8.07 0 0 1 104 168h88V64a16 16 0 0 0-16-16H67.69A31.7 31.7 0 0 1 72 64v128a16 16 0 0 0 32 0c0-5.74-4.83-9.62-4.88-9.66a7.82 7.82 0 0 1-2.86-8.86M216 192a12.58 12.58 0 0 0-3.23-8h-94a27 27 0 0 1 1.21 8a31.8 31.8 0 0 1-4.29 16H200a16 16 0 0 0 16-16"></svg:path></svg:g>`,
})
export class PhScrollDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScrollFillIcon],svg[ph-scroll-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.8 169.6a8 8 0 0 0-4.8-1.6h-8V64a32 32 0 0 0-32-32H40A32 32 0 0 0 8 64c0 13.61 10.05 21.54 11.2 22.4A7.9 7.9 0 0 0 24 88a8 8 0 0 0 4.87-14.33C28.83 73.62 24 69.74 24 64a16 16 0 0 1 32 0v128a32 32 0 0 0 32 32h112a32 32 0 0 0 32-32c0-13.61-10-21.54-11.2-22.4M104 96h64a8 8 0 0 1 0 16h-64a8 8 0 0 1 0-16m-8 40a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16h-64a8 8 0 0 1-8-8m104 72h-92.29a31.8 31.8 0 0 0 4.29-16a27 27 0 0 0-1.21-8h102a12.58 12.58 0 0 1 3.23 8A16 16 0 0 1 200 208"></svg:path>`,
})
export class PhScrollFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScrollLightIcon],svg[ph-scroll-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M98 136a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12h-64a6 6 0 0 1-6-6m6-26h64a6 6 0 0 0 0-12h-64a6 6 0 0 0 0 12m126 82a30 30 0 0 1-30 30H88a30 30 0 0 1-30-30V64a18 18 0 0 0-36 0c0 6.76 5.58 11.19 5.64 11.23a6 6 0 1 1-7.24 9.57C20 84.48 10 76.85 10 64a30 30 0 0 1 30-30h136a30 30 0 0 1 30 30v106h10a6 6 0 0 1 3.6 1.2c.4.32 10.4 7.95 10.4 20.8m-124 0c0-6.76-5.59-11.19-5.64-11.23A6 6 0 0 1 104 170h90V64a18 18 0 0 0-18-18H64a29.82 29.82 0 0 1 6 18v128a18 18 0 0 0 36 0m112 0a14.94 14.94 0 0 0-4.34-10h-97.78a24.8 24.8 0 0 1 2.12 10a29.87 29.87 0 0 1-6 18h88a18 18 0 0 0 18-18"></svg:path>`,
})
export class PhScrollLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScrollThinIcon],svg[ph-scroll-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 104a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8h-64a4 4 0 0 1-4-4m4 36h64a4 4 0 0 0 0-8h-64a4 4 0 0 0 0 8m124 52a28 28 0 0 1-28 28H88a28 28 0 0 1-28-28V64a20 20 0 0 0-40 0c0 7.78 6.34 12.75 6.4 12.8a4 4 0 1 1-4.8 6.4c-.39-.29-9.6-7.34-9.6-19.2a28 28 0 0 1 28-28h136a28 28 0 0 1 28 28v108h12a4 4 0 0 1 2.4.8c.39.29 9.6 7.34 9.6 19.2m-120 0c0-7.78-6.34-12.75-6.4-12.8a4 4 0 0 1 2.4-7.2h92V64a20 20 0 0 0-20-20H59.57A27.9 27.9 0 0 1 68 64v128a20 20 0 0 0 40 0m112 0c0-6-3.74-10.3-5.5-12H112.61a23.3 23.3 0 0 1 3.39 12a27.94 27.94 0 0 1-8.42 20H200a20 20 0 0 0 20-20"></svg:path>`,
})
export class PhScrollThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealIcon],svg[ph-seal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.57-1.47-7.63-5.37-11.57-9.14C146.27 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.57-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14C109.73 232.49 117.56 240 128 240s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57c6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18m-11.55 39.29c-4.79 5-9.75 10.17-12.38 16.52c-2.52 6.1-2.63 13.07-2.73 19.82c-.1 7-.21 14.33-3.32 17.43s-10.39 3.22-17.43 3.32c-6.75.1-13.72.21-19.82 2.73c-6.35 2.63-11.52 7.59-16.52 12.38S132 224 128 224s-9.14-4.92-14.11-9.69s-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73c-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82c-2.63-6.35-7.59-11.52-12.38-16.52S32 132 32 128s4.92-9.14 9.69-14.11s9.75-10.17 12.38-16.52c2.52-6.1 2.63-13.07 2.73-19.82c.1-7 .21-14.33 3.32-17.43s10.39-3.22 17.43-3.32c6.75-.1 13.72-.21 19.82-2.73c6.35-2.63 11.52-7.59 16.52-12.38S124 32 128 32s9.14 4.92 14.11 9.69s10.17 9.75 16.52 12.38c6.1 2.52 13.07 2.63 19.82 2.73c7 .1 14.33.21 17.43 3.32s3.22 10.39 3.32 17.43c.1 6.75.21 13.72 2.73 19.82c2.63 6.35 7.59 11.52 12.38 16.52S224 124 224 128s-4.92 9.14-9.69 14.11"></svg:path>`,
})
export class PhSealIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealBoldIcon],svg[ph-seal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.75 100.05c-3.52-3.67-7.15-7.46-8.34-10.33c-1.06-2.56-1.14-7.83-1.21-12.47c-.15-10-.34-22.44-9.18-31.27s-21.27-9-31.27-9.18c-4.64-.07-9.91-.15-12.47-1.21c-2.87-1.19-6.66-4.82-10.33-8.34C148.87 20.46 140.05 12 128 12s-20.87 8.46-27.95 15.25c-3.67 3.52-7.46 7.15-10.33 8.34c-2.56 1.06-7.83 1.14-12.47 1.21c-10 .2-22.44.34-31.25 9.2s-9 21.25-9.2 31.25c-.07 4.64-.15 9.91-1.21 12.47c-1.19 2.87-4.82 6.66-8.34 10.33C20.46 107.13 12 116 12 128s8.46 20.87 15.25 28c3.52 3.67 7.15 7.46 8.34 10.33c1.06 2.56 1.14 7.83 1.21 12.47c.15 10 .34 22.44 9.18 31.27s21.27 9 31.27 9.18c4.64.07 9.91.15 12.47 1.21c2.87 1.19 6.66 4.82 10.33 8.34C107.13 235.54 116 244 128 244s20.87-8.46 27.95-15.25c3.67-3.52 7.46-7.15 10.33-8.34c2.56-1.06 7.83-1.14 12.47-1.21c10-.15 22.44-.34 31.27-9.18s9-21.27 9.18-31.27c.07-4.64.15-9.91 1.21-12.47c1.19-2.87 4.82-6.66 8.34-10.33c6.79-7.08 15.25-15.9 15.25-27.95s-8.46-20.87-15.25-27.95m-17.32 39.29c-4.82 5-10.28 10.72-13.2 17.76c-2.81 6.8-2.92 14.16-3 21.29c-.08 5.36-.19 12.71-2.15 14.66s-9.3 2.07-14.66 2.15c-7.13.11-14.49.22-21.29 3c-7 2.91-12.74 8.37-17.76 13.19c-3.59 3.45-8.97 8.61-11.37 8.61s-7.78-5.16-11.34-8.57c-5-4.82-10.72-10.28-17.76-13.2c-6.8-2.81-14.16-2.92-21.29-3c-5.36-.08-12.71-.19-14.66-2.15s-2.07-9.3-2.15-14.66c-.11-7.13-.22-14.49-3-21.29c-2.92-7-8.38-12.73-13.2-17.76c-3.44-3.59-8.6-8.97-8.6-11.37s5.16-7.78 8.57-11.34c4.82-5 10.28-10.72 13.2-17.76c2.81-6.8 2.92-14.16 3-21.29C60.88 72.25 61 64.9 63 63s9.3-2.07 14.66-2.15c7.13-.11 14.49-.22 21.29-3c7-2.91 12.74-8.37 17.76-13.19C120.22 41.16 125.6 36 128 36s7.78 5.16 11.34 8.57c5 4.82 10.72 10.28 17.76 13.2c6.8 2.81 14.16 2.92 21.29 3c5.36.08 12.71.19 14.66 2.15s2.07 9.3 2.15 14.66c.11 7.13.22 14.49 3 21.29c2.92 7 8.38 12.73 13.2 17.76c3.41 3.56 8.57 8.94 8.57 11.34s-5.13 7.81-8.54 11.37"></svg:path>`,
})
export class PhSealBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealCheckIcon],svg[ph-seal-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14c6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57c6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18m-11.55 39.29c-4.79 5-9.75 10.17-12.38 16.52c-2.52 6.1-2.63 13.07-2.73 19.82c-.1 7-.21 14.33-3.32 17.43s-10.39 3.22-17.43 3.32c-6.75.1-13.72.21-19.82 2.73c-6.35 2.63-11.52 7.59-16.52 12.38S132 224 128 224s-9.15-4.92-14.11-9.69s-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73c-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82c-2.63-6.35-7.59-11.52-12.38-16.52S32 132 32 128s4.92-9.15 9.69-14.11s9.75-10.17 12.38-16.52c2.52-6.1 2.63-13.07 2.73-19.82c.1-7 .21-14.33 3.32-17.43s10.39-3.22 17.43-3.32c6.75-.1 13.72-.21 19.82-2.73c6.35-2.63 11.52-7.59 16.52-12.38S124 32 128 32s9.15 4.92 14.11 9.69s10.17 9.75 16.52 12.38c6.1 2.52 13.07 2.63 19.82 2.73c7 .1 14.33.21 17.43 3.32s3.22 10.39 3.32 17.43c.1 6.75.21 13.72 2.73 19.82c2.63 6.35 7.59 11.52 12.38 16.52S224 124 224 128s-4.92 9.15-9.69 14.11m-40.65-43.77a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0"></svg:path>`,
})
export class PhSealCheckIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealCheckBoldIcon],svg[ph-seal-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.75 100.05c-3.52-3.67-7.15-7.46-8.34-10.33c-1.06-2.56-1.14-7.83-1.21-12.47c-.15-10-.34-22.44-9.18-31.27s-21.27-9-31.27-9.18c-4.64-.07-9.91-.15-12.47-1.21c-2.87-1.19-6.66-4.82-10.33-8.34C148.87 20.46 140.05 12 128 12s-20.87 8.46-27.95 15.25c-3.67 3.52-7.46 7.15-10.33 8.34c-2.56 1.06-7.83 1.14-12.47 1.21c-10 .2-22.44.34-31.25 9.2s-9 21.25-9.2 31.25c-.07 4.64-.15 9.91-1.21 12.47c-1.19 2.87-4.82 6.66-8.34 10.33C20.46 107.13 12 116 12 128s8.46 20.87 15.25 28c3.52 3.67 7.15 7.46 8.34 10.33c1.06 2.56 1.14 7.83 1.21 12.47c.15 10 .34 22.44 9.18 31.27s21.27 9 31.27 9.18c4.64.07 9.91.15 12.47 1.21c2.87 1.19 6.66 4.82 10.33 8.34C107.13 235.54 116 244 128 244s20.87-8.46 27.95-15.25c3.67-3.52 7.46-7.15 10.33-8.34c2.56-1.06 7.83-1.14 12.47-1.21c10-.15 22.44-.34 31.27-9.18s9-21.27 9.18-31.27c.07-4.64.15-9.91 1.21-12.47c1.19-2.87 4.82-6.66 8.34-10.33c6.79-7.08 15.25-15.9 15.25-27.95s-8.46-20.87-15.25-27.95m-17.32 39.29c-4.82 5-10.28 10.72-13.19 17.76c-2.82 6.8-2.93 14.16-3 21.29c-.08 5.36-.19 12.71-2.15 14.66s-9.3 2.07-14.66 2.15c-7.13.11-14.49.22-21.29 3c-7 2.91-12.73 8.37-17.76 13.19c-3.6 3.45-8.98 8.61-11.38 8.61s-7.78-5.16-11.34-8.57c-5-4.82-10.72-10.28-17.76-13.19c-6.8-2.82-14.16-2.93-21.29-3c-5.36-.08-12.71-.19-14.66-2.15s-2.07-9.3-2.15-14.66c-.11-7.13-.22-14.49-3-21.29c-2.91-7-8.37-12.73-13.19-17.76C41.16 135.78 36 130.4 36 128s5.16-7.78 8.57-11.34c4.82-5 10.28-10.72 13.19-17.76c2.82-6.8 2.93-14.16 3-21.29C60.88 72.25 61 64.9 63 63s9.3-2.07 14.66-2.15c7.13-.11 14.49-.22 21.29-3c7-2.91 12.73-8.37 17.76-13.19C120.22 41.16 125.6 36 128 36s7.78 5.16 11.34 8.57c5 4.82 10.72 10.28 17.76 13.19c6.8 2.82 14.16 2.93 21.29 3c5.36.08 12.71.19 14.66 2.15s2.07 9.3 2.15 14.66c.11 7.13.22 14.49 3 21.29c2.91 7 8.37 12.73 13.19 17.76c3.41 3.56 8.57 8.94 8.57 11.34s-5.12 7.82-8.53 11.38m-34.94-43.83a12 12 0 0 1 0 17l-56 56a12 12 0 0 1-17 0l-24-24a12 12 0 1 1 17-17L112 143l47.51-47.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhSealCheckBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealCheckDuotoneIcon],svg[ph-seal-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 128c0 12.51-17.82 21.95-22.68 33.69c-4.68 11.32 1.42 30.65-7.78 39.85s-28.53 3.1-39.85 7.78C150 214.18 140.5 232 128 232s-22-17.82-33.69-22.68c-11.32-4.68-30.65 1.42-39.85-7.78s-3.1-28.53-7.78-39.85C41.82 150 24 140.5 24 128s17.82-22 22.68-33.69c4.68-11.31-1.42-30.65 7.78-39.85s28.54-3.1 39.85-7.78C106.05 41.82 115.5 24 128 24s22 17.82 33.69 22.68c11.32 4.68 30.65-1.42 39.85 7.78s3.1 28.53 7.78 39.85C214.18 106.05 232 115.5 232 128" opacity=".2"></svg:path><svg:path d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14c6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57c6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18m-11.55 39.29c-4.79 5-9.75 10.17-12.38 16.52c-2.52 6.1-2.63 13.07-2.73 19.82c-.1 7-.21 14.33-3.32 17.43s-10.39 3.22-17.43 3.32c-6.75.1-13.72.21-19.82 2.73c-6.35 2.63-11.52 7.59-16.52 12.38S132 224 128 224s-9.15-4.92-14.11-9.69s-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73c-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82c-2.63-6.35-7.59-11.52-12.38-16.52S32 132 32 128s4.92-9.15 9.69-14.11s9.75-10.17 12.38-16.52c2.52-6.1 2.63-13.07 2.73-19.82c.1-7 .21-14.33 3.32-17.43s10.39-3.22 17.43-3.32c6.75-.1 13.72-.21 19.82-2.73c6.35-2.63 11.52-7.59 16.52-12.38S124 32 128 32s9.15 4.92 14.11 9.69s10.17 9.75 16.52 12.38c6.1 2.52 13.07 2.63 19.82 2.73c7 .1 14.33.21 17.43 3.32s3.22 10.39 3.32 17.43c.1 6.75.21 13.72 2.73 19.82c2.63 6.35 7.59 11.52 12.38 16.52S224 124 224 128s-4.92 9.15-9.69 14.11m-40.65-43.77a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhSealCheckDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealCheckFillIcon],svg[ph-seal-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14c6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57c6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18m-52.2 6.84l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhSealCheckFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealCheckLightIcon],svg[ph-seal-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.42 104.2c-3.9-4.07-7.93-8.27-9.55-12.18c-1.5-3.63-1.58-9-1.67-14.68c-.14-9.38-.3-20-7.42-27.12S188 42.94 178.66 42.8c-5.68-.09-11-.17-14.68-1.67c-3.91-1.62-8.11-5.65-12.18-9.55C145.16 25.22 137.64 18 128 18s-17.16 7.22-23.8 13.58c-4.07 3.9-8.27 7.93-12.18 9.55c-3.63 1.5-9 1.58-14.68 1.67c-9.38.14-20 .3-27.12 7.42S42.94 68 42.8 77.34c-.09 5.68-.17 11-1.67 14.68c-1.62 3.91-5.65 8.11-9.55 12.18C25.22 110.84 18 118.36 18 128s7.22 17.16 13.58 23.8c3.9 4.07 7.93 8.27 9.55 12.18c1.5 3.63 1.58 9 1.67 14.68c.14 9.38.3 20 7.42 27.12s17.78 7.28 27.12 7.42c5.68.09 11 .17 14.68 1.67c3.91 1.62 8.11 5.65 12.18 9.55c6.64 6.36 14.16 13.58 23.8 13.58s17.16-7.22 23.8-13.58c4.07-3.9 8.27-7.93 12.18-9.55c3.63-1.5 9-1.58 14.68-1.67c9.38-.14 20-.3 27.12-7.42s7.28-17.74 7.42-27.12c.09-5.68.17-11 1.67-14.68c1.62-3.91 5.65-8.11 9.55-12.18c6.36-6.64 13.58-14.16 13.58-23.8s-7.22-17.16-13.58-23.8m-8.66 39.3c-4.67 4.86-9.5 9.9-12 15.9c-2.38 5.74-2.48 12.52-2.58 19.08c-.11 7.44-.23 15.14-3.9 18.82s-11.38 3.79-18.82 3.9c-6.56.1-13.34.2-19.08 2.58c-6 2.48-11 7.31-15.91 12c-5.25 5-10.68 10.24-15.49 10.24s-10.24-5.21-15.5-10.24c-4.86-4.67-9.9-9.5-15.9-12c-5.74-2.38-12.52-2.48-19.08-2.58c-7.44-.11-15.14-.23-18.82-3.9s-3.79-11.38-3.9-18.82c-.1-6.56-.2-13.34-2.58-19.08c-2.48-6-7.31-11-12-15.91C35.21 138.24 30 132.81 30 128s5.21-10.24 10.24-15.5c4.67-4.86 9.5-9.9 12-15.9c2.38-5.74 2.48-12.52 2.58-19.08c.11-7.44.23-15.14 3.9-18.82s11.38-3.79 18.82-3.9c6.56-.1 13.34-.2 19.08-2.58c6-2.48 11-7.31 15.91-12C117.76 35.21 123.19 30 128 30s10.24 5.21 15.5 10.24c4.86 4.67 9.9 9.5 15.9 12c5.74 2.38 12.52 2.48 19.08 2.58c7.44.11 15.14.23 18.82 3.9s3.79 11.38 3.9 18.82c.1 6.56.2 13.34 2.58 19.08c2.48 6 7.31 11 12 15.91c5 5.25 10.24 10.68 10.24 15.49s-5.23 10.22-10.26 15.48m-43.52-43.74a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L112 151.51l51.76-51.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhSealCheckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealCheckThinIcon],svg[ph-seal-check-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 105.58c-4-4.2-8.2-8.54-10-12.8c-1.65-4-1.73-9.53-1.82-15.41c-.14-9-.29-19.19-6.83-25.74s-16.74-6.69-25.74-6.83c-5.88-.09-11.43-.17-15.41-1.82c-4.26-1.76-8.6-5.93-12.8-9.95c-6.68-6.41-13.59-13-22.42-13s-15.74 6.62-22.42 13c-4.2 4-8.54 8.2-12.8 10c-4 1.65-9.53 1.73-15.41 1.82c-9 .14-19.19.29-25.74 6.83s-6.67 16.69-6.81 25.69c-.09 5.88-.17 11.43-1.82 15.41c-1.76 4.26-5.93 8.6-9.95 12.8c-6.41 6.68-13 13.59-13 22.42s6.62 15.74 13 22.42c4 4.2 8.2 8.54 10 12.8c1.65 4 1.73 9.53 1.82 15.41c.14 9 .29 19.19 6.83 25.74s16.74 6.69 25.74 6.83c5.88.09 11.43.17 15.41 1.82c4.26 1.76 8.6 5.93 12.8 9.95c6.68 6.41 13.59 13 22.42 13s15.74-6.62 22.42-13c4.2-4 8.54-8.2 12.8-10c4-1.65 9.53-1.73 15.41-1.82c9-.14 19.19-.29 25.74-6.83s6.69-16.74 6.83-25.74c.09-5.88.17-11.43 1.82-15.41c1.76-4.26 5.93-8.6 9.95-12.8c6.41-6.68 13-13.59 13-22.42s-6.64-15.69-13.02-22.37m-5.78 39.3c-4.54 4.73-9.24 9.63-11.57 15.28c-2.23 5.39-2.33 12-2.43 18.35c-.12 8.2-.24 16-4.49 20.2s-12 4.37-20.2 4.49c-6.37.1-13 .2-18.35 2.43c-5.65 2.33-10.55 7-15.28 11.57c-5.81 5.55-11.28 10.8-16.9 10.8s-11.09-5.25-16.88-10.8c-4.73-4.54-9.63-9.24-15.28-11.57c-5.39-2.23-12-2.33-18.35-2.43c-8.2-.12-15.95-.24-20.2-4.49s-4.37-12-4.49-20.2c-.1-6.37-.2-13-2.43-18.35c-2.33-5.65-7-10.55-11.57-15.28C33.25 139.09 28 133.62 28 128s5.25-11.09 10.8-16.88c4.54-4.73 9.24-9.63 11.57-15.28c2.23-5.39 2.33-12 2.43-18.35c.12-8.2.24-15.95 4.49-20.2s12-4.37 20.2-4.49c6.37-.1 13-.2 18.35-2.43c5.65-2.33 10.55-7 15.28-11.57C116.91 33.25 122.38 28 128 28s11.09 5.25 16.88 10.8c4.73 4.54 9.63 9.24 15.28 11.57c5.39 2.23 12 2.33 18.35 2.43c8.2.12 16 .24 20.2 4.49s4.37 12 4.49 20.2c.1 6.37.2 13 2.43 18.35c2.33 5.65 7 10.55 11.57 15.28c5.55 5.79 10.8 11.26 10.8 16.88s-5.25 11.09-10.8 16.88Zm-46.37-43.71a4 4 0 0 1 0 5.66l-56 56a4 4 0 0 1-5.66 0l-24-24a4 4 0 0 1 5.66-5.66L112 154.34l53.17-53.17a4 4 0 0 1 5.66 0Z"></svg:path>`,
})
export class PhSealCheckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealDuotoneIcon],svg[ph-seal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 128c0 12.51-17.82 21.95-22.68 33.69c-4.68 11.32 1.42 30.64-7.78 39.85s-28.53 3.1-39.85 7.78C150 214.18 140.5 232 128 232s-22-17.82-33.69-22.68c-11.32-4.68-30.64 1.42-39.85-7.78s-3.1-28.53-7.78-39.85C41.82 150 24 140.5 24 128s17.82-22 22.68-33.69c4.68-11.31-1.42-30.64 7.78-39.85s28.54-3.1 39.85-7.78C106.05 41.82 115.5 24 128 24s22 17.82 33.69 22.68c11.32 4.68 30.64-1.42 39.85 7.78s3.1 28.53 7.78 39.85C214.18 106.05 232 115.5 232 128" opacity=".2"></svg:path><svg:path d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.57-1.47-7.63-5.37-11.57-9.14C146.27 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.57-5.37 7.63-9.14 11.57C23.51 109.73 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.57 1.47 7.63 5.37 11.57 9.14C109.73 232.49 117.56 240 128 240s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.57 5.37-7.63 9.14-11.57C232.49 146.27 240 138.44 240 128s-7.51-18.27-14.14-25.18m-11.55 39.29c-4.79 5-9.75 10.17-12.38 16.52c-2.52 6.1-2.63 13.07-2.73 19.82c-.1 7-.21 14.33-3.32 17.43s-10.39 3.22-17.43 3.32c-6.75.1-13.72.21-19.82 2.73c-6.35 2.63-11.52 7.59-16.52 12.38S132 224 128 224s-9.14-4.92-14.11-9.69s-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73c-7-.1-14.33-.21-17.43-3.32c-3.11-3.1-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82c-2.63-6.35-7.59-11.52-12.38-16.52S32 132 32 128s4.92-9.14 9.69-14.11s9.75-10.17 12.38-16.52c2.52-6.1 2.63-13.07 2.73-19.82c.1-7 .21-14.33 3.32-17.43s10.39-3.22 17.43-3.32c6.75-.1 13.72-.21 19.82-2.73c6.35-2.63 11.52-7.59 16.52-12.38S124 32 128 32s9.14 4.92 14.11 9.69s10.17 9.75 16.52 12.38c6.1 2.52 13.07 2.63 19.82 2.73c7 .1 14.33.21 17.43 3.32s3.22 10.39 3.32 17.43c.1 6.75.21 13.72 2.73 19.82c2.63 6.35 7.59 11.52 12.38 16.52S224 124 224 128s-4.92 9.14-9.69 14.11"></svg:path></svg:g>`,
})
export class PhSealDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealFillIcon],svg[ph-seal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 128c0 10.44-7.51 18.27-14.14 25.18c-3.77 3.94-7.67 8-9.14 11.57c-1.36 3.27-1.44 8.69-1.52 13.94c-.15 9.76-.31 20.82-8 28.51s-18.75 7.85-28.51 8c-5.25.08-10.67.16-13.94 1.52c-3.57 1.47-7.63 5.37-11.57 9.14C146.27 232.49 138.44 240 128 240s-18.27-7.51-25.18-14.14c-3.94-3.77-8-7.67-11.57-9.14c-3.27-1.36-8.69-1.44-13.94-1.52c-9.76-.15-20.82-.31-28.51-8s-7.85-18.75-8-28.51c-.08-5.25-.16-10.67-1.52-13.94c-1.47-3.57-5.37-7.63-9.14-11.57C23.51 146.27 16 138.44 16 128s7.51-18.27 14.14-25.18c3.77-3.94 7.67-8 9.14-11.57c1.36-3.27 1.44-8.69 1.52-13.94c.15-9.76.31-20.82 8-28.51s18.75-7.85 28.51-8c5.25-.08 10.67-.16 13.94-1.52c3.57-1.47 7.63-5.37 11.57-9.14C109.73 23.51 117.56 16 128 16s18.27 7.51 25.18 14.14c3.94 3.77 8 7.67 11.57 9.14c3.27 1.36 8.69 1.44 13.94 1.52c9.76.15 20.82.31 28.51 8s7.85 18.75 8 28.51c.08 5.25.16 10.67 1.52 13.94c1.47 3.57 5.37 7.63 9.14 11.57C232.49 109.73 240 117.56 240 128"></svg:path>`,
})
export class PhSealFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealLightIcon],svg[ph-seal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.42 104.2c-3.9-4.07-7.93-8.27-9.55-12.18c-1.5-3.63-1.58-9-1.67-14.68c-.14-9.38-.3-20-7.42-27.12S188 42.94 178.66 42.8c-5.68-.09-11-.17-14.68-1.67c-3.91-1.62-8.11-5.65-12.18-9.55C145.16 25.22 137.64 18 128 18s-17.16 7.22-23.8 13.58c-4.07 3.9-8.27 7.93-12.18 9.55c-3.63 1.5-9 1.58-14.68 1.67c-9.38.14-20 .3-27.12 7.42S42.94 68 42.8 77.34c-.09 5.68-.17 11-1.67 14.68c-1.62 3.91-5.65 8.11-9.55 12.18C25.22 110.84 18 118.36 18 128s7.22 17.16 13.58 23.8c3.9 4.07 7.93 8.27 9.55 12.18c1.5 3.63 1.58 9 1.67 14.68c.14 9.38.3 20 7.42 27.12s17.78 7.28 27.12 7.42c5.68.09 11 .17 14.68 1.67c3.91 1.62 8.11 5.65 12.18 9.55c6.64 6.36 14.16 13.58 23.8 13.58s17.16-7.22 23.8-13.58c4.07-3.9 8.27-7.93 12.18-9.55c3.63-1.5 9-1.58 14.68-1.67c9.38-.14 20-.3 27.12-7.42s7.28-17.74 7.42-27.12c.09-5.68.17-11 1.67-14.68c1.62-3.91 5.65-8.11 9.55-12.18c6.36-6.64 13.58-14.16 13.58-23.8s-7.22-17.16-13.58-23.8m-8.66 39.29c-4.67 4.87-9.5 9.91-12 15.91c-2.38 5.74-2.48 12.52-2.58 19.08c-.11 7.44-.23 15.14-3.9 18.82s-11.38 3.79-18.82 3.9c-6.56.1-13.34.2-19.08 2.58c-6 2.48-11 7.31-15.91 12c-5.25 5-10.68 10.24-15.49 10.24s-10.24-5.21-15.49-10.24c-4.87-4.67-9.91-9.5-15.91-12c-5.74-2.38-12.52-2.48-19.08-2.58c-7.44-.11-15.14-.23-18.82-3.9s-3.79-11.38-3.9-18.82c-.1-6.56-.2-13.34-2.58-19.08c-2.48-6-7.31-11-12-15.91C35.21 138.24 30 132.81 30 128s5.21-10.24 10.24-15.5c4.67-4.86 9.5-9.9 12-15.9c2.38-5.74 2.48-12.52 2.58-19.08c.11-7.44.23-15.14 3.9-18.82s11.38-3.79 18.82-3.9c6.56-.1 13.34-.2 19.08-2.58c6-2.48 11-7.31 15.91-12C117.76 35.21 123.19 30 128 30s10.24 5.21 15.49 10.24c4.87 4.67 9.91 9.5 15.91 12c5.74 2.38 12.52 2.48 19.08 2.58c7.44.11 15.14.23 18.82 3.9s3.79 11.38 3.9 18.82c.1 6.56.2 13.34 2.58 19.08c2.48 6 7.31 11 12 15.91c5 5.25 10.24 10.68 10.24 15.49s-5.23 10.22-10.26 15.47"></svg:path>`,
})
export class PhSealLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealPercentIcon],svg[ph-seal-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.73 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14c6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57C232.49 146.27 240 138.44 240 128s-7.51-18.27-14.14-25.18m-11.55 39.29c-4.79 5-9.75 10.17-12.38 16.52c-2.52 6.1-2.63 13.07-2.73 19.82c-.1 7-.21 14.33-3.32 17.43s-10.39 3.22-17.43 3.32c-6.75.1-13.72.21-19.82 2.73c-6.35 2.63-11.52 7.59-16.52 12.38S132 224 128 224s-9.15-4.92-14.11-9.69s-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73c-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82c-2.63-6.35-7.59-11.52-12.38-16.52S32 132 32 128s4.92-9.14 9.69-14.11s9.75-10.17 12.38-16.52c2.52-6.1 2.63-13.07 2.73-19.82c.1-7 .21-14.33 3.32-17.43s10.39-3.22 17.43-3.32c6.75-.1 13.72-.21 19.82-2.73c6.35-2.63 11.52-7.59 16.52-12.38S124 32 128 32s9.15 4.92 14.11 9.69s10.17 9.75 16.52 12.38c6.1 2.52 13.07 2.63 19.82 2.73c7 .1 14.33.21 17.43 3.32s3.22 10.39 3.32 17.43c.1 6.75.21 13.72 2.73 19.82c2.63 6.35 7.59 11.52 12.38 16.52S224 124 224 128s-4.92 9.14-9.69 14.11M120 96a24 24 0 1 0-24 24a24 24 0 0 0 24-24m-32 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m72 40a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 32a8 8 0 1 1 8-8a8 8 0 0 1-8 8m13.66-74.34l-80 80a8 8 0 0 1-11.32-11.32l80-80a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhSealPercentIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealPercentBoldIcon],svg[ph-seal-percent-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.75 100.05c-3.52-3.67-7.15-7.46-8.34-10.33c-1.06-2.56-1.14-7.83-1.21-12.47c-.15-10-.34-22.44-9.18-31.27s-21.27-9-31.27-9.18c-4.64-.07-9.9-.15-12.47-1.21c-2.87-1.19-6.66-4.82-10.33-8.34C148.87 20.46 140.05 12 128 12s-20.87 8.46-27.95 15.25c-3.67 3.52-7.46 7.15-10.33 8.34c-2.56 1.06-7.83 1.14-12.47 1.21c-10 .2-22.44.34-31.25 9.2s-9 21.25-9.2 31.25c-.07 4.64-.15 9.91-1.21 12.47c-1.19 2.87-4.82 6.66-8.34 10.33C20.46 107.13 12 116 12 128s8.46 20.87 15.25 28c3.52 3.67 7.15 7.46 8.34 10.33c1.06 2.56 1.14 7.83 1.21 12.47c.15 10 .34 22.44 9.18 31.27s21.27 9 31.27 9.18c4.64.07 9.9.15 12.47 1.21c2.87 1.19 6.66 4.82 10.33 8.34C107.13 235.54 116 244 128 244s20.87-8.46 27.95-15.25c3.67-3.52 7.46-7.15 10.33-8.34c2.56-1.06 7.83-1.14 12.47-1.21c10-.15 22.44-.34 31.27-9.18s9-21.27 9.18-31.27c.07-4.64.15-9.91 1.21-12.47c1.19-2.87 4.82-6.66 8.34-10.33c6.79-7.08 15.25-15.9 15.25-27.95s-8.46-20.87-15.25-27.95m-17.32 39.29c-4.82 5-10.28 10.72-13.19 17.76c-2.82 6.8-2.93 14.17-3 21.29c-.08 5.36-.19 12.71-2.15 14.66s-9.3 2.07-14.66 2.15c-7.13.11-14.49.22-21.29 3c-7 2.92-12.73 8.38-17.76 13.2c-3.6 3.44-8.98 8.6-11.38 8.6s-7.78-5.16-11.34-8.57c-5-4.82-10.72-10.28-17.76-13.2c-6.8-2.81-14.17-2.92-21.29-3c-5.36-.08-12.71-.19-14.66-2.15s-2.07-9.3-2.15-14.66c-.11-7.13-.22-14.49-3-21.29c-2.91-7-8.37-12.74-13.19-17.76C41.16 135.78 36 130.4 36 128s5.16-7.78 8.57-11.34c4.82-5 10.28-10.72 13.19-17.76c2.82-6.8 2.93-14.17 3-21.29C60.88 72.25 61 64.9 63 63s9.3-2.07 14.66-2.15c7.13-.11 14.49-.22 21.29-3c7-2.92 12.73-8.38 17.76-13.2C120.22 41.16 125.6 36 128 36s7.78 5.16 11.34 8.57c5 4.82 10.72 10.28 17.76 13.2c6.8 2.81 14.17 2.92 21.29 3c5.36.08 12.71.19 14.66 2.15s2.07 9.3 2.15 14.66c.11 7.13.22 14.49 3 21.29c2.91 7 8.37 12.74 13.19 17.76c3.41 3.56 8.57 8.94 8.57 11.34s-5.12 7.81-8.53 11.37M80 96a16 16 0 1 1 16 16a16 16 0 0 1-16-16m96 64a16 16 0 1 1-16-16a16 16 0 0 1 16 16m.49-80.49a12 12 0 0 1 0 17l-80 80a12 12 0 0 1-17-17l80-80a12 12 0 0 1 17 0"></svg:path>`,
})
export class PhSealPercentBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealPercentDuotoneIcon],svg[ph-seal-percent-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 128c0 12.51-17.82 21.95-22.68 33.69c-4.68 11.32 1.42 30.65-7.78 39.85s-28.53 3.1-39.85 7.78C150 214.18 140.5 232 128 232s-22-17.82-33.69-22.68c-11.32-4.68-30.64 1.42-39.85-7.78s-3.1-28.53-7.78-39.85C41.82 150 24 140.5 24 128s17.82-22 22.68-33.69c4.68-11.31-1.42-30.65 7.78-39.85s28.54-3.1 39.85-7.78C106.05 41.82 115.5 24 128 24s22 17.82 33.69 22.68c11.32 4.68 30.64-1.42 39.85 7.78s3.1 28.53 7.78 39.85C214.18 106.05 232 115.5 232 128" opacity=".2"></svg:path><svg:path d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.73 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14c6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57C232.49 146.27 240 138.44 240 128s-7.51-18.27-14.14-25.18m-11.55 39.29c-4.79 5-9.75 10.17-12.38 16.52c-2.52 6.1-2.63 13.07-2.73 19.82c-.1 7-.21 14.33-3.32 17.43s-10.39 3.22-17.43 3.32c-6.75.1-13.72.21-19.82 2.73c-6.35 2.63-11.52 7.59-16.52 12.38S132 224 128 224s-9.15-4.92-14.11-9.69s-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73c-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82c-2.63-6.35-7.59-11.52-12.38-16.52S32 132 32 128s4.92-9.14 9.69-14.11s9.75-10.17 12.38-16.52c2.52-6.1 2.63-13.07 2.73-19.82c.1-7 .21-14.33 3.32-17.43s10.39-3.22 17.43-3.32c6.75-.1 13.72-.21 19.82-2.73c6.35-2.63 11.52-7.59 16.52-12.38S124 32 128 32s9.15 4.92 14.11 9.69s10.17 9.75 16.52 12.38c6.1 2.52 13.07 2.63 19.82 2.73c7 .1 14.33.21 17.43 3.32s3.22 10.39 3.32 17.43c.1 6.75.21 13.72 2.73 19.82c2.63 6.35 7.59 11.52 12.38 16.52S224 124 224 128s-4.92 9.14-9.69 14.11M120 96a24 24 0 1 0-24 24a24 24 0 0 0 24-24m-32 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m72 40a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 32a8 8 0 1 1 8-8a8 8 0 0 1-8 8m13.66-74.34l-80 80a8 8 0 0 1-11.32-11.32l80-80a8 8 0 0 1 11.32 11.32"></svg:path></svg:g>`,
})
export class PhSealPercentDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealPercentFillIcon],svg[ph-seal-percent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 104a8 8 0 1 1 8-8a8 8 0 0 1-8 8m64 48a8 8 0 1 0 8 8a8 8 0 0 0-8-8m80-24c0 10.44-7.51 18.27-14.14 25.18c-3.77 3.94-7.67 8-9.14 11.57c-1.36 3.27-1.44 8.69-1.52 13.94c-.15 9.76-.31 20.82-8 28.51s-18.75 7.85-28.51 8c-5.25.08-10.67.16-13.94 1.52c-3.57 1.47-7.63 5.37-11.57 9.14C146.27 232.49 138.44 240 128 240s-18.27-7.51-25.18-14.14c-3.94-3.77-8-7.67-11.57-9.14c-3.27-1.36-8.69-1.44-13.94-1.52c-9.76-.15-20.82-.31-28.51-8s-7.85-18.75-8-28.51c-.08-5.25-.16-10.67-1.52-13.94c-1.47-3.57-5.37-7.63-9.14-11.57C23.51 146.27 16 138.44 16 128s7.51-18.27 14.14-25.18c3.77-3.94 7.67-8 9.14-11.57c1.36-3.27 1.44-8.69 1.52-13.94c.15-9.76.31-20.82 8-28.51s18.75-7.85 28.51-8c5.25-.08 10.67-.16 13.94-1.52c3.57-1.47 7.63-5.37 11.57-9.14C109.73 23.51 117.56 16 128 16s18.27 7.51 25.18 14.14c3.94 3.77 8 7.67 11.57 9.14c3.27 1.36 8.69 1.44 13.94 1.52c9.76.15 20.82.31 28.51 8s7.85 18.75 8 28.51c.08 5.25.16 10.67 1.52 13.94c1.47 3.57 5.37 7.63 9.14 11.57C232.49 109.73 240 117.56 240 128m-144-8a24 24 0 1 0-24-24a24 24 0 0 0 24 24m77.66-26.34a8 8 0 0 0-11.32-11.32l-80 80a8 8 0 0 0 11.32 11.32ZM184 160a24 24 0 1 0-24 24a24 24 0 0 0 24-24"></svg:path>`,
})
export class PhSealPercentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealPercentLightIcon],svg[ph-seal-percent-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.42 104.2c-3.9-4.07-7.93-8.27-9.55-12.18c-1.5-3.63-1.58-9-1.67-14.68c-.14-9.38-.3-20-7.42-27.12S188 42.94 178.66 42.8c-5.68-.09-11-.17-14.68-1.67c-3.91-1.62-8.11-5.65-12.18-9.55C145.16 25.22 137.64 18 128 18s-17.16 7.22-23.8 13.58c-4.07 3.9-8.27 7.93-12.18 9.55c-3.63 1.5-9 1.58-14.68 1.67c-9.38.14-20 .3-27.12 7.42S42.94 68 42.8 77.34c-.09 5.68-.17 11-1.67 14.68c-1.62 3.91-5.65 8.11-9.55 12.18C25.22 110.84 18 118.36 18 128s7.22 17.16 13.58 23.8c3.9 4.07 7.93 8.27 9.55 12.18c1.5 3.63 1.58 9 1.67 14.68c.14 9.38.3 20 7.42 27.12s17.78 7.28 27.12 7.42c5.68.09 11 .17 14.68 1.67c3.91 1.62 8.11 5.65 12.18 9.55c6.64 6.36 14.16 13.58 23.8 13.58s17.16-7.22 23.8-13.58c4.07-3.9 8.27-7.93 12.18-9.55c3.63-1.5 9-1.58 14.68-1.67c9.38-.14 20-.3 27.12-7.42s7.28-17.74 7.42-27.12c.09-5.68.17-11 1.67-14.68c1.62-3.91 5.65-8.11 9.55-12.18c6.36-6.64 13.58-14.16 13.58-23.8s-7.22-17.16-13.58-23.8m-8.66 39.29c-4.67 4.87-9.5 9.91-12 15.91c-2.38 5.74-2.48 12.52-2.58 19.08c-.11 7.44-.23 15.14-3.9 18.82s-11.38 3.79-18.82 3.9c-6.56.1-13.34.2-19.08 2.58c-6 2.48-11 7.31-15.91 12c-5.25 5-10.68 10.24-15.49 10.24s-10.24-5.21-15.5-10.24c-4.86-4.67-9.9-9.5-15.9-12c-5.74-2.38-12.52-2.48-19.08-2.58c-7.44-.11-15.14-.23-18.82-3.9s-3.79-11.38-3.9-18.82c-.1-6.56-.2-13.34-2.58-19.08c-2.48-6-7.31-11-12-15.91C35.21 138.24 30 132.81 30 128s5.21-10.24 10.24-15.49c4.67-4.87 9.5-9.91 12-15.91c2.38-5.74 2.48-12.52 2.58-19.08c.11-7.44.23-15.14 3.9-18.82s11.38-3.79 18.82-3.9c6.56-.1 13.34-.2 19.08-2.58c6-2.48 11-7.31 15.91-12C117.76 35.21 123.19 30 128 30s10.24 5.21 15.5 10.24c4.86 4.67 9.9 9.5 15.9 12c5.74 2.38 12.52 2.48 19.08 2.58c7.44.11 15.14.23 18.82 3.9s3.79 11.38 3.9 18.82c.1 6.56.2 13.34 2.58 19.08c2.48 6 7.31 11 12 15.91c5 5.25 10.24 10.68 10.24 15.49s-5.23 10.22-10.26 15.47M118 96a22 22 0 1 0-22 22a22 22 0 0 0 22-22m-32 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10m74 42a22 22 0 1 0 22 22a22 22 0 0 0-22-22m0 32a10 10 0 1 1 10-10a10 10 0 0 1-10 10m12.24-77.76l-80 80a6 6 0 0 1-8.48-8.48l80-80a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhSealPercentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealPercentThinIcon],svg[ph-seal-percent-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 105.58c-4-4.2-8.2-8.54-10-12.8c-1.65-4-1.73-9.53-1.82-15.41c-.14-9-.29-19.19-6.83-25.74s-16.74-6.69-25.74-6.83c-5.88-.09-11.43-.17-15.41-1.82c-4.26-1.76-8.6-5.93-12.8-10c-6.68-6.4-13.59-13-22.42-13s-15.74 6.62-22.42 13c-4.2 4-8.54 8.2-12.8 10c-4 1.65-9.53 1.73-15.41 1.82c-9 .14-19.19.29-25.74 6.83s-6.67 16.74-6.81 25.74c-.09 5.88-.17 11.43-1.82 15.41c-1.76 4.26-5.93 8.6-10 12.8c-6.4 6.68-13 13.59-13 22.42s6.62 15.74 13 22.42c4 4.2 8.2 8.54 10 12.8c1.65 4 1.73 9.53 1.82 15.41c.14 9 .29 19.19 6.83 25.74s16.74 6.69 25.74 6.83c5.88.09 11.43.17 15.41 1.82c4.26 1.76 8.6 5.93 12.8 10c6.68 6.4 13.59 13 22.42 13s15.74-6.62 22.42-13c4.2-4 8.54-8.2 12.8-10c4-1.65 9.53-1.73 15.41-1.82c9-.14 19.19-.29 25.74-6.83s6.69-16.74 6.83-25.74c.09-5.88.17-11.43 1.82-15.41c1.76-4.26 5.93-8.6 10-12.8c6.4-6.68 13-13.59 13-22.42s-6.64-15.74-13.02-22.42m-5.78 39.3c-4.54 4.73-9.24 9.63-11.57 15.28c-2.23 5.39-2.33 12-2.43 18.35c-.12 8.2-.24 16-4.49 20.2s-12 4.37-20.2 4.49c-6.37.1-13 .2-18.35 2.43c-5.65 2.34-10.55 7-15.28 11.57c-5.81 5.55-11.28 10.8-16.9 10.8s-11.09-5.25-16.88-10.8c-4.73-4.54-9.63-9.23-15.28-11.57c-5.39-2.23-12-2.33-18.35-2.43c-8.2-.12-15.95-.24-20.2-4.49s-4.37-12-4.49-20.2c-.1-6.37-.2-13-2.43-18.35c-2.33-5.65-7-10.55-11.57-15.28C33.25 139.09 28 133.62 28 128s5.25-11.09 10.8-16.88c4.54-4.73 9.24-9.63 11.57-15.28c2.23-5.39 2.33-12 2.43-18.35c.12-8.2.24-15.95 4.49-20.2s12-4.37 20.2-4.49c6.37-.1 13-.2 18.35-2.43c5.65-2.34 10.55-7 15.28-11.57C116.91 33.25 122.38 28 128 28s11.09 5.25 16.88 10.8c4.73 4.54 9.63 9.23 15.28 11.57c5.39 2.23 12 2.33 18.35 2.43c8.2.12 16 .24 20.2 4.49s4.37 12 4.49 20.2c.1 6.37.2 13 2.43 18.35c2.33 5.65 7 10.55 11.57 15.28c5.55 5.79 10.8 11.26 10.8 16.88s-5.25 11.09-10.8 16.88ZM116 96a20 20 0 1 0-20 20a20 20 0 0 0 20-20m-32 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12m76 44a20 20 0 1 0 20 20a20 20 0 0 0-20-20m0 32a12 12 0 1 1 12-12a12 12 0 0 1-12 12m10.83-81.17l-80 80a4 4 0 0 1-5.66-5.66l80-80a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhSealPercentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealQuestionIcon],svg[ph-seal-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14c6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57c6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18m-11.55 39.29c-4.79 5-9.75 10.17-12.38 16.52c-2.52 6.1-2.63 13.07-2.73 19.82c-.1 7-.21 14.33-3.32 17.43s-10.39 3.22-17.43 3.32c-6.75.1-13.72.21-19.82 2.73c-6.35 2.63-11.52 7.59-16.52 12.38S132 224 128 224s-9.15-4.92-14.11-9.69s-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73c-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82c-2.63-6.35-7.59-11.52-12.38-16.52S32 132 32 128s4.92-9.15 9.69-14.11s9.75-10.17 12.38-16.52c2.52-6.1 2.63-13.07 2.73-19.82c.1-7 .21-14.33 3.32-17.43s10.39-3.22 17.43-3.32c6.75-.1 13.72-.21 19.82-2.73c6.35-2.63 11.52-7.59 16.52-12.38S124 32 128 32s9.15 4.92 14.11 9.69s10.17 9.75 16.52 12.38c6.1 2.52 13.07 2.63 19.82 2.73c7 .1 14.33.21 17.43 3.32s3.22 10.39 3.32 17.43c.1 6.75.21 13.72 2.73 19.82c2.63 6.35 7.59 11.52 12.38 16.52S224 124 224 128s-4.92 9.15-9.69 14.11M140 180a12 12 0 1 1-12-12a12 12 0 0 1 12 12m28-72c0 17.38-13.76 31.93-32 35.28v.72a8 8 0 0 1-16 0v-8a8 8 0 0 1 8-8c13.23 0 24-9 24-20s-10.77-20-24-20s-24 9-24 20v4a8 8 0 0 1-16 0v-4c0-19.85 17.94-36 40-36s40 16.15 40 36"></svg:path>`,
})
export class PhSealQuestionIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealQuestionBoldIcon],svg[ph-seal-question-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.75 100.05c-3.52-3.67-7.15-7.46-8.34-10.33c-1.06-2.56-1.14-7.83-1.21-12.47c-.15-10-.34-22.44-9.18-31.27s-21.27-9-31.27-9.18c-4.64-.07-9.91-.15-12.47-1.21c-2.87-1.19-6.66-4.82-10.33-8.34C148.87 20.46 140.05 12 128 12s-20.87 8.46-27.95 15.25c-3.67 3.52-7.46 7.15-10.33 8.34c-2.56 1.06-7.83 1.14-12.47 1.21c-10 .2-22.44.34-31.25 9.2s-9 21.25-9.2 31.25c-.07 4.64-.15 9.91-1.21 12.47c-1.19 2.87-4.82 6.66-8.34 10.33C20.46 107.13 12 116 12 128s8.46 20.87 15.25 28c3.52 3.67 7.15 7.46 8.34 10.33c1.06 2.56 1.14 7.83 1.21 12.47c.15 10 .34 22.44 9.18 31.27s21.27 9 31.27 9.18c4.64.07 9.91.15 12.47 1.21c2.87 1.19 6.66 4.82 10.33 8.34C107.13 235.54 116 244 128 244s20.87-8.46 27.95-15.25c3.67-3.52 7.46-7.15 10.33-8.34c2.56-1.06 7.83-1.14 12.47-1.21c10-.15 22.44-.34 31.27-9.18s9-21.27 9.18-31.27c.07-4.64.15-9.91 1.21-12.47c1.19-2.87 4.82-6.66 8.34-10.33c6.79-7.08 15.25-15.9 15.25-27.95s-8.46-20.87-15.25-27.95m-17.32 39.29c-4.82 5-10.28 10.72-13.19 17.76c-2.82 6.8-2.93 14.16-3 21.29c-.08 5.36-.19 12.71-2.15 14.66s-9.3 2.07-14.66 2.15c-7.13.11-14.49.22-21.29 3c-7 2.91-12.73 8.37-17.76 13.19c-3.6 3.45-8.98 8.61-11.38 8.61s-7.78-5.16-11.34-8.57c-5-4.82-10.72-10.28-17.76-13.19c-6.8-2.82-14.16-2.93-21.29-3c-5.36-.08-12.71-.19-14.66-2.15s-2.07-9.3-2.15-14.66c-.11-7.13-.22-14.49-3-21.29c-2.91-7-8.37-12.73-13.19-17.76C41.16 135.78 36 130.4 36 128s5.16-7.78 8.57-11.34c4.82-5 10.28-10.72 13.19-17.76c2.82-6.8 2.93-14.16 3-21.29C60.88 72.25 61 64.9 63 63s9.3-2.07 14.66-2.15c7.13-.11 14.49-.22 21.29-3c7-2.91 12.73-8.37 17.76-13.19C120.22 41.16 125.6 36 128 36s7.78 5.16 11.34 8.57c5 4.82 10.72 10.28 17.76 13.19c6.8 2.82 14.16 2.93 21.29 3c5.36.08 12.71.19 14.66 2.15s2.07 9.3 2.15 14.66c.11 7.13.22 14.49 3 21.29c2.91 7 8.37 12.73 13.19 17.76c3.41 3.56 8.57 8.94 8.57 11.34s-5.12 7.82-8.53 11.38M144 180a16 16 0 1 1-16-16a16 16 0 0 1 16 16m28-72c0 18.37-13.69 33.88-32.27 38.56A12 12 0 0 1 116 144v-8a12 12 0 0 1 12-12c11 0 20-7.18 20-16s-9-16-20-16s-20 7.18-20 16v4a12 12 0 0 1-24 0v-4c0-22.06 19.74-40 44-40s44 17.94 44 40"></svg:path>`,
})
export class PhSealQuestionBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealQuestionDuotoneIcon],svg[ph-seal-question-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 128c0 12.51-17.82 21.95-22.68 33.69c-4.68 11.32 1.42 30.64-7.78 39.85s-28.53 3.1-39.85 7.78C150 214.18 140.5 232 128 232s-22-17.82-33.69-22.68c-11.32-4.68-30.65 1.42-39.85-7.78s-3.1-28.53-7.78-39.85C41.82 150 24 140.5 24 128s17.82-22 22.68-33.69c4.68-11.31-1.42-30.65 7.78-39.85s28.54-3.1 39.85-7.78C106.05 41.82 115.5 24 128 24s22 17.82 33.69 22.68c11.32 4.68 30.65-1.42 39.85 7.78s3.1 28.53 7.78 39.85C214.18 106.05 232 115.5 232 128" opacity=".2"></svg:path><svg:path d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14c6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57c6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18m-11.55 39.29c-4.79 5-9.75 10.17-12.38 16.52c-2.52 6.1-2.63 13.07-2.73 19.82c-.1 7-.21 14.33-3.32 17.43s-10.39 3.22-17.43 3.32c-6.75.1-13.72.21-19.82 2.73c-6.35 2.63-11.52 7.59-16.52 12.38S132 224 128 224s-9.15-4.92-14.11-9.69s-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73c-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82c-2.63-6.35-7.59-11.52-12.38-16.52S32 132 32 128s4.92-9.15 9.69-14.11s9.75-10.17 12.38-16.52c2.52-6.1 2.63-13.07 2.73-19.82c.1-7 .21-14.33 3.32-17.43s10.39-3.22 17.43-3.32c6.75-.1 13.72-.21 19.82-2.73c6.35-2.63 11.52-7.59 16.52-12.38S124 32 128 32s9.15 4.92 14.11 9.69s10.17 9.75 16.52 12.38c6.1 2.52 13.07 2.63 19.82 2.73c7 .1 14.33.21 17.43 3.32s3.22 10.39 3.32 17.43c.1 6.75.21 13.72 2.73 19.82c2.63 6.35 7.59 11.52 12.38 16.52S224 124 224 128s-4.92 9.15-9.69 14.11M140 180a12 12 0 1 1-12-12a12 12 0 0 1 12 12m28-72c0 17.38-13.76 31.93-32 35.28v.72a8 8 0 0 1-16 0v-8a8 8 0 0 1 8-8c13.23 0 24-9 24-20s-10.77-20-24-20s-24 9-24 20v4a8 8 0 0 1-16 0v-4c0-19.85 17.94-36 40-36s40 16.15 40 36"></svg:path></svg:g>`,
})
export class PhSealQuestionDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealQuestionFillIcon],svg[ph-seal-question-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14c6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57c6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18M128 192a12 12 0 1 1 12-12a12 12 0 0 1-12 12m8-48.72v.72a8 8 0 0 1-16 0v-8a8 8 0 0 1 8-8c13.23 0 24-9 24-20s-10.77-20-24-20s-24 9-24 20v4a8 8 0 0 1-16 0v-4c0-19.85 17.94-36 40-36s40 16.15 40 36c0 17.38-13.76 31.93-32 35.28"></svg:path>`,
})
export class PhSealQuestionFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealQuestionLightIcon],svg[ph-seal-question-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.42 104.2c-3.9-4.07-7.93-8.27-9.55-12.18c-1.5-3.63-1.58-9-1.67-14.68c-.14-9.38-.3-20-7.42-27.12S188 42.94 178.66 42.8c-5.68-.09-11-.17-14.68-1.67c-3.91-1.62-8.11-5.65-12.18-9.55C145.16 25.22 137.64 18 128 18s-17.16 7.22-23.8 13.58c-4.07 3.9-8.27 7.93-12.18 9.55c-3.63 1.5-9 1.58-14.68 1.67c-9.38.14-20 .3-27.12 7.42S42.94 68 42.8 77.34c-.09 5.68-.17 11-1.67 14.68c-1.62 3.91-5.65 8.11-9.55 12.18C25.22 110.84 18 118.36 18 128s7.22 17.16 13.58 23.8c3.9 4.07 7.93 8.27 9.55 12.18c1.5 3.63 1.58 9 1.67 14.68c.14 9.38.3 20 7.42 27.12s17.78 7.28 27.12 7.42c5.68.09 11 .17 14.68 1.67c3.91 1.62 8.11 5.65 12.18 9.55c6.64 6.36 14.16 13.58 23.8 13.58s17.16-7.22 23.8-13.58c4.07-3.9 8.27-7.93 12.18-9.55c3.63-1.5 9-1.58 14.68-1.67c9.38-.14 20-.3 27.12-7.42s7.28-17.74 7.42-27.12c.09-5.68.17-11 1.67-14.68c1.62-3.91 5.65-8.11 9.55-12.18c6.36-6.64 13.58-14.16 13.58-23.8s-7.22-17.16-13.58-23.8m-8.66 39.3c-4.67 4.86-9.5 9.9-12 15.9c-2.38 5.74-2.48 12.52-2.58 19.08c-.11 7.44-.23 15.14-3.9 18.82s-11.38 3.79-18.82 3.9c-6.56.1-13.34.2-19.08 2.58c-6 2.48-11 7.31-15.91 12c-5.25 5-10.68 10.24-15.49 10.24s-10.24-5.21-15.5-10.24c-4.86-4.67-9.9-9.5-15.9-12c-5.74-2.38-12.52-2.48-19.08-2.58c-7.44-.11-15.14-.23-18.82-3.9s-3.79-11.38-3.9-18.82c-.1-6.56-.2-13.34-2.58-19.08c-2.48-6-7.31-11-12-15.91C35.21 138.24 30 132.81 30 128s5.21-10.24 10.24-15.5c4.67-4.86 9.5-9.9 12-15.9c2.38-5.74 2.48-12.52 2.58-19.08c.11-7.44.23-15.14 3.9-18.82s11.38-3.79 18.82-3.9c6.56-.1 13.34-.2 19.08-2.58c6-2.48 11-7.31 15.91-12C117.76 35.21 123.19 30 128 30s10.24 5.21 15.5 10.24c4.86 4.67 9.9 9.5 15.9 12c5.74 2.38 12.52 2.48 19.08 2.58c7.44.11 15.14.23 18.82 3.9s3.79 11.38 3.9 18.82c.1 6.56.2 13.34 2.58 19.08c2.48 6 7.31 11 12 15.91c5 5.25 10.24 10.68 10.24 15.49s-5.23 10.22-10.26 15.48M138 180a10 10 0 1 1-10-10a10 10 0 0 1 10 10m28-72c0 16.92-13.89 31-32 33.58V144a6 6 0 0 1-12 0v-8a6 6 0 0 1 6-6c14.34 0 26-9.87 26-22s-11.66-22-26-22s-26 9.87-26 22v4a6 6 0 0 1-12 0v-4c0-18.75 17-34 38-34s38 15.25 38 34"></svg:path>`,
})
export class PhSealQuestionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealQuestionThinIcon],svg[ph-seal-question-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 105.58c-4-4.2-8.2-8.54-10-12.8c-1.65-4-1.73-9.53-1.82-15.41c-.14-9-.29-19.19-6.83-25.74s-16.74-6.69-25.74-6.83c-5.88-.09-11.43-.17-15.41-1.82c-4.26-1.76-8.6-5.93-12.8-9.95c-6.68-6.41-13.59-13-22.42-13s-15.74 6.62-22.42 13c-4.2 4-8.54 8.2-12.8 10c-4 1.65-9.53 1.73-15.41 1.82c-9 .14-19.19.29-25.74 6.83s-6.67 16.69-6.81 25.69c-.09 5.88-.17 11.43-1.82 15.41c-1.76 4.26-5.93 8.6-9.95 12.8c-6.41 6.68-13 13.59-13 22.42s6.62 15.74 13 22.42c4 4.2 8.2 8.54 10 12.8c1.65 4 1.73 9.53 1.82 15.41c.14 9 .29 19.19 6.83 25.74s16.74 6.69 25.74 6.83c5.88.09 11.43.17 15.41 1.82c4.26 1.76 8.6 5.93 12.8 9.95c6.68 6.41 13.59 13 22.42 13s15.74-6.62 22.42-13c4.2-4 8.54-8.2 12.8-10c4-1.65 9.53-1.73 15.41-1.82c9-.14 19.19-.29 25.74-6.83s6.69-16.74 6.83-25.74c.09-5.88.17-11.43 1.82-15.41c1.76-4.26 5.93-8.6 9.95-12.8c6.41-6.68 13-13.59 13-22.42s-6.64-15.69-13.02-22.37m-5.78 39.3c-4.54 4.73-9.24 9.63-11.57 15.28c-2.23 5.39-2.33 12-2.43 18.35c-.12 8.2-.24 16-4.49 20.2s-12 4.37-20.2 4.49c-6.37.1-13 .2-18.35 2.43c-5.65 2.33-10.55 7-15.28 11.57c-5.81 5.55-11.28 10.8-16.9 10.8s-11.09-5.25-16.88-10.8c-4.73-4.54-9.63-9.24-15.28-11.57c-5.39-2.23-12-2.33-18.35-2.43c-8.2-.12-15.95-.24-20.2-4.49s-4.37-12-4.49-20.2c-.1-6.37-.2-13-2.43-18.35c-2.33-5.65-7-10.55-11.57-15.28C33.25 139.09 28 133.62 28 128s5.25-11.09 10.8-16.88c4.54-4.73 9.24-9.63 11.57-15.28c2.23-5.39 2.33-12 2.43-18.35c.12-8.2.24-15.95 4.49-20.2s12-4.37 20.2-4.49c6.37-.1 13-.2 18.35-2.43c5.65-2.33 10.55-7 15.28-11.57C116.91 33.25 122.38 28 128 28s11.09 5.25 16.88 10.8c4.73 4.54 9.63 9.24 15.28 11.57c5.39 2.23 12 2.33 18.35 2.43c8.2.12 16 .24 20.2 4.49s4.37 12 4.49 20.2c.1 6.37.2 13 2.43 18.35c2.33 5.65 7 10.55 11.57 15.28c5.55 5.79 10.8 11.26 10.8 16.88s-5.25 11.09-10.8 16.88ZM136 180a8 8 0 1 1-8-8a8 8 0 0 1 8 8m28-72c0 16.44-14 30-32 31.8v4.2a4 4 0 0 1-8 0v-8a4 4 0 0 1 4-4c15.44 0 28-10.77 28-24s-12.56-24-28-24s-28 10.77-28 24v4a4 4 0 0 1-8 0v-4c0-17.64 16.15-32 36-32s36 14.36 36 32"></svg:path>`,
})
export class PhSealQuestionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealThinIcon],svg[ph-seal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 105.58c-4-4.2-8.2-8.54-10-12.8c-1.65-4-1.73-9.53-1.82-15.41c-.14-9-.29-19.19-6.83-25.74s-16.74-6.69-25.74-6.83c-5.88-.09-11.43-.17-15.41-1.82c-4.26-1.76-8.6-5.93-12.8-10c-6.68-6.4-13.59-13-22.42-13s-15.74 6.62-22.42 13c-4.2 4-8.54 8.2-12.8 10c-4 1.65-9.53 1.73-15.41 1.82c-9 .14-19.19.29-25.74 6.83s-6.67 16.74-6.81 25.74c-.09 5.88-.17 11.43-1.82 15.41c-1.76 4.26-5.93 8.6-9.95 12.8c-6.41 6.68-13 13.59-13 22.42s6.62 15.74 13 22.42c4 4.2 8.2 8.54 10 12.8c1.65 4 1.73 9.53 1.82 15.41c.14 9 .29 19.19 6.83 25.74c6.55 6.54 16.75 6.69 25.74 6.83c5.88.09 11.43.17 15.41 1.82c4.26 1.76 8.6 5.93 12.8 10c6.68 6.4 13.59 13 22.42 13s15.74-6.62 22.42-13c4.2-4 8.54-8.2 12.8-10c4-1.65 9.53-1.73 15.41-1.82c9-.14 19.19-.29 25.74-6.83s6.69-16.74 6.83-25.74c.09-5.88.17-11.43 1.82-15.41c1.76-4.26 5.93-8.6 9.95-12.8c6.41-6.68 13-13.59 13-22.42s-6.64-15.74-13.02-22.42m-5.78 39.3c-4.54 4.73-9.24 9.63-11.57 15.28c-2.23 5.39-2.33 12-2.43 18.35c-.12 8.2-.24 16-4.49 20.2s-12 4.37-20.2 4.49c-6.37.1-13 .2-18.35 2.43c-5.65 2.33-10.55 7-15.28 11.57c-5.81 5.55-11.28 10.8-16.9 10.8s-11.09-5.25-16.88-10.8c-4.73-4.54-9.63-9.24-15.28-11.57c-5.39-2.23-12-2.33-18.35-2.43c-8.2-.12-15.95-.24-20.2-4.49s-4.37-12-4.49-20.2c-.1-6.37-.2-13-2.43-18.35c-2.33-5.65-7-10.55-11.57-15.28C33.25 139.09 28 133.62 28 128s5.25-11.09 10.8-16.88c4.54-4.73 9.24-9.63 11.57-15.28c2.23-5.39 2.33-12 2.43-18.35c.12-8.2.24-15.95 4.49-20.2s12-4.37 20.2-4.49c6.37-.1 13-.2 18.35-2.43c5.65-2.33 10.55-7 15.28-11.57C116.91 33.25 122.38 28 128 28s11.09 5.25 16.88 10.8c4.73 4.54 9.63 9.24 15.28 11.57c5.39 2.23 12 2.33 18.35 2.43c8.2.12 16 .24 20.2 4.49s4.37 12 4.49 20.2c.1 6.37.2 13 2.43 18.35c2.33 5.65 7 10.55 11.57 15.28c5.55 5.79 10.8 11.26 10.8 16.88s-5.25 11.09-10.8 16.88Z"></svg:path>`,
})
export class PhSealThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealWarningIcon],svg[ph-seal-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14c6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57c6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18m-11.55 39.29c-4.79 5-9.75 10.17-12.38 16.52c-2.52 6.1-2.63 13.07-2.73 19.82c-.1 7-.21 14.33-3.32 17.43s-10.39 3.22-17.43 3.32c-6.75.1-13.72.21-19.82 2.73c-6.35 2.63-11.52 7.59-16.52 12.38S132 224 128 224s-9.15-4.92-14.11-9.69s-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73c-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82c-2.63-6.35-7.59-11.52-12.38-16.52S32 132 32 128s4.92-9.15 9.69-14.11s9.75-10.17 12.38-16.52c2.52-6.1 2.63-13.07 2.73-19.82c.1-7 .21-14.33 3.32-17.43s10.39-3.22 17.43-3.32c6.75-.1 13.72-.21 19.82-2.73c6.35-2.63 11.52-7.59 16.52-12.38S124 32 128 32s9.15 4.92 14.11 9.69s10.17 9.75 16.52 12.38c6.1 2.52 13.07 2.63 19.82 2.73c7 .1 14.33.21 17.43 3.32s3.22 10.39 3.32 17.43c.1 6.75.21 13.72 2.73 19.82c2.63 6.35 7.59 11.52 12.38 16.52S224 124 224 128s-4.92 9.15-9.69 14.11M120 136V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhSealWarningIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealWarningBoldIcon],svg[ph-seal-warning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.75 100.05c-3.52-3.67-7.15-7.46-8.34-10.33c-1.06-2.56-1.14-7.83-1.21-12.47c-.15-10-.34-22.44-9.18-31.27s-21.27-9-31.27-9.18c-4.64-.07-9.91-.15-12.47-1.21c-2.87-1.19-6.66-4.82-10.33-8.34C148.87 20.46 140.05 12 128 12s-20.87 8.46-27.95 15.25c-3.67 3.52-7.46 7.15-10.33 8.34c-2.56 1.06-7.83 1.14-12.47 1.21c-10 .2-22.44.34-31.25 9.2s-9 21.25-9.2 31.25c-.07 4.64-.15 9.91-1.21 12.47c-1.19 2.87-4.82 6.66-8.34 10.33C20.46 107.13 12 116 12 128s8.46 20.87 15.25 28c3.52 3.67 7.15 7.46 8.34 10.33c1.06 2.56 1.14 7.83 1.21 12.47c.15 10 .34 22.44 9.18 31.27s21.27 9 31.27 9.18c4.64.07 9.91.15 12.47 1.21c2.87 1.19 6.66 4.82 10.33 8.34C107.13 235.54 116 244 128 244s20.87-8.46 27.95-15.25c3.67-3.52 7.46-7.15 10.33-8.34c2.56-1.06 7.83-1.14 12.47-1.21c10-.15 22.44-.34 31.27-9.18s9-21.27 9.18-31.27c.07-4.64.15-9.91 1.21-12.47c1.19-2.87 4.82-6.66 8.34-10.33c6.79-7.08 15.25-15.9 15.25-27.95s-8.46-20.87-15.25-27.95m-17.32 39.29c-4.82 5-10.28 10.72-13.19 17.76c-2.82 6.8-2.93 14.16-3 21.29c-.08 5.36-.19 12.71-2.15 14.66s-9.3 2.07-14.66 2.15c-7.13.11-14.49.22-21.29 3c-7 2.91-12.73 8.37-17.76 13.19c-3.6 3.45-8.98 8.61-11.38 8.61s-7.78-5.16-11.34-8.57c-5-4.82-10.72-10.28-17.76-13.19c-6.8-2.82-14.16-2.93-21.29-3c-5.36-.08-12.71-.19-14.66-2.15s-2.07-9.3-2.15-14.66c-.11-7.13-.22-14.49-3-21.29c-2.91-7-8.37-12.73-13.19-17.76C41.16 135.78 36 130.4 36 128s5.16-7.78 8.57-11.34c4.82-5 10.28-10.72 13.19-17.76c2.82-6.8 2.93-14.16 3-21.29C60.88 72.25 61 64.9 63 63s9.3-2.07 14.66-2.15c7.13-.11 14.49-.22 21.29-3c7-2.91 12.73-8.37 17.76-13.19C120.22 41.16 125.6 36 128 36s7.78 5.16 11.34 8.57c5 4.82 10.72 10.28 17.76 13.19c6.8 2.82 14.16 2.93 21.29 3c5.36.08 12.71.19 14.66 2.15s2.07 9.3 2.15 14.66c.11 7.13.22 14.49 3 21.29c2.91 7 8.37 12.73 13.19 17.76c3.41 3.56 8.57 8.94 8.57 11.34s-5.12 7.82-8.53 11.38M116 132V80a12 12 0 0 1 24 0v52a12 12 0 0 1-24 0m28 40a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhSealWarningBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealWarningDuotoneIcon],svg[ph-seal-warning-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 128c0 12.51-17.82 21.95-22.68 33.69c-4.68 11.32 1.42 30.64-7.78 39.85s-28.53 3.1-39.85 7.78C150 214.18 140.5 232 128 232s-22-17.82-33.69-22.68c-11.32-4.68-30.65 1.42-39.85-7.78s-3.1-28.53-7.78-39.85C41.82 150 24 140.5 24 128s17.82-22 22.68-33.69c4.68-11.31-1.42-30.65 7.78-39.85s28.54-3.1 39.85-7.78C106.05 41.82 115.5 24 128 24s22 17.82 33.69 22.68c11.32 4.68 30.65-1.42 39.85 7.78s3.1 28.53 7.78 39.85C214.18 106.05 232 115.5 232 128" opacity=".2"></svg:path><svg:path d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14c6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57c6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18m-11.55 39.29c-4.79 5-9.75 10.17-12.38 16.52c-2.52 6.1-2.63 13.07-2.73 19.82c-.1 7-.21 14.33-3.32 17.43s-10.39 3.22-17.43 3.32c-6.75.1-13.72.21-19.82 2.73c-6.35 2.63-11.52 7.59-16.52 12.38S132 224 128 224s-9.15-4.92-14.11-9.69s-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73c-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82c-2.63-6.35-7.59-11.52-12.38-16.52S32 132 32 128s4.92-9.15 9.69-14.11s9.75-10.17 12.38-16.52c2.52-6.1 2.63-13.07 2.73-19.82c.1-7 .21-14.33 3.32-17.43s10.39-3.22 17.43-3.32c6.75-.1 13.72-.21 19.82-2.73c6.35-2.63 11.52-7.59 16.52-12.38S124 32 128 32s9.15 4.92 14.11 9.69s10.17 9.75 16.52 12.38c6.1 2.52 13.07 2.63 19.82 2.73c7 .1 14.33.21 17.43 3.32s3.22 10.39 3.32 17.43c.1 6.75.21 13.72 2.73 19.82c2.63 6.35 7.59 11.52 12.38 16.52S224 124 224 128s-4.92 9.15-9.69 14.11M120 136V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhSealWarningDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealWarningFillIcon],svg[ph-seal-warning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14c6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57c6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18M120 80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm8 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhSealWarningFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealWarningLightIcon],svg[ph-seal-warning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.42 104.2c-3.9-4.07-7.93-8.27-9.55-12.18c-1.5-3.63-1.58-9-1.67-14.68c-.14-9.38-.3-20-7.42-27.12S188 42.94 178.66 42.8c-5.68-.09-11-.17-14.68-1.67c-3.91-1.62-8.11-5.65-12.18-9.55C145.16 25.22 137.64 18 128 18s-17.16 7.22-23.8 13.58c-4.07 3.9-8.27 7.93-12.18 9.55c-3.63 1.5-9 1.58-14.68 1.67c-9.38.14-20 .3-27.12 7.42S42.94 68 42.8 77.34c-.09 5.68-.17 11-1.67 14.68c-1.62 3.91-5.65 8.11-9.55 12.18C25.22 110.84 18 118.36 18 128s7.22 17.16 13.58 23.8c3.9 4.07 7.93 8.27 9.55 12.18c1.5 3.63 1.58 9 1.67 14.68c.14 9.38.3 20 7.42 27.12s17.78 7.28 27.12 7.42c5.68.09 11 .17 14.68 1.67c3.91 1.62 8.11 5.65 12.18 9.55c6.64 6.36 14.16 13.58 23.8 13.58s17.16-7.22 23.8-13.58c4.07-3.9 8.27-7.93 12.18-9.55c3.63-1.5 9-1.58 14.68-1.67c9.38-.14 20-.3 27.12-7.42s7.28-17.74 7.42-27.12c.09-5.68.17-11 1.67-14.68c1.62-3.91 5.65-8.11 9.55-12.18c6.36-6.64 13.58-14.16 13.58-23.8s-7.22-17.16-13.58-23.8m-8.66 39.3c-4.67 4.86-9.5 9.9-12 15.9c-2.38 5.74-2.48 12.52-2.58 19.08c-.11 7.44-.23 15.14-3.9 18.82s-11.38 3.79-18.82 3.9c-6.56.1-13.34.2-19.08 2.58c-6 2.48-11 7.31-15.91 12c-5.25 5-10.68 10.24-15.49 10.24s-10.24-5.21-15.5-10.24c-4.86-4.67-9.9-9.5-15.9-12c-5.74-2.38-12.52-2.48-19.08-2.58c-7.44-.11-15.14-.23-18.82-3.9s-3.79-11.38-3.9-18.82c-.1-6.56-.2-13.34-2.58-19.08c-2.48-6-7.31-11-12-15.91C35.21 138.24 30 132.81 30 128s5.21-10.24 10.24-15.5c4.67-4.86 9.5-9.9 12-15.9c2.38-5.74 2.48-12.52 2.58-19.08c.11-7.44.23-15.14 3.9-18.82s11.38-3.79 18.82-3.9c6.56-.1 13.34-.2 19.08-2.58c6-2.48 11-7.31 15.91-12C117.76 35.21 123.19 30 128 30s10.24 5.21 15.5 10.24c4.86 4.67 9.9 9.5 15.9 12c5.74 2.38 12.52 2.48 19.08 2.58c7.44.11 15.14.23 18.82 3.9s3.79 11.38 3.9 18.82c.1 6.56.2 13.34 2.58 19.08c2.48 6 7.31 11 12 15.91c5 5.25 10.24 10.68 10.24 15.49s-5.23 10.22-10.26 15.48M122 136V80a6 6 0 0 1 12 0v56a6 6 0 0 1-12 0m16 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhSealWarningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealWarningThinIcon],svg[ph-seal-warning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 105.58c-4-4.2-8.2-8.54-10-12.8c-1.65-4-1.73-9.53-1.82-15.41c-.14-9-.29-19.19-6.83-25.74s-16.74-6.69-25.74-6.83c-5.88-.09-11.43-.17-15.41-1.82c-4.26-1.76-8.6-5.93-12.8-9.95c-6.68-6.41-13.59-13-22.42-13s-15.74 6.62-22.42 13c-4.2 4-8.54 8.2-12.8 10c-4 1.65-9.53 1.73-15.41 1.82c-9 .14-19.19.29-25.74 6.83s-6.67 16.69-6.81 25.69c-.09 5.88-.17 11.43-1.82 15.41c-1.76 4.26-5.93 8.6-9.95 12.8c-6.41 6.68-13 13.59-13 22.42s6.62 15.74 13 22.42c4 4.2 8.2 8.54 10 12.8c1.65 4 1.73 9.53 1.82 15.41c.14 9 .29 19.19 6.83 25.74s16.74 6.69 25.74 6.83c5.88.09 11.43.17 15.41 1.82c4.26 1.76 8.6 5.93 12.8 9.95c6.68 6.41 13.59 13 22.42 13s15.74-6.62 22.42-13c4.2-4 8.54-8.2 12.8-10c4-1.65 9.53-1.73 15.41-1.82c9-.14 19.19-.29 25.74-6.83s6.69-16.74 6.83-25.74c.09-5.88.17-11.43 1.82-15.41c1.76-4.26 5.93-8.6 9.95-12.8c6.41-6.68 13-13.59 13-22.42s-6.64-15.69-13.02-22.37m-5.78 39.3c-4.54 4.73-9.24 9.63-11.57 15.28c-2.23 5.39-2.33 12-2.43 18.35c-.12 8.2-.24 16-4.49 20.2s-12 4.37-20.2 4.49c-6.37.1-13 .2-18.35 2.43c-5.65 2.33-10.55 7-15.28 11.57c-5.81 5.55-11.28 10.8-16.9 10.8s-11.09-5.25-16.88-10.8c-4.73-4.54-9.63-9.24-15.28-11.57c-5.39-2.23-12-2.33-18.35-2.43c-8.2-.12-15.95-.24-20.2-4.49s-4.37-12-4.49-20.2c-.1-6.37-.2-13-2.43-18.35c-2.33-5.65-7-10.55-11.57-15.28C33.25 139.09 28 133.62 28 128s5.25-11.09 10.8-16.88c4.54-4.73 9.24-9.63 11.57-15.28c2.23-5.39 2.33-12 2.43-18.35c.12-8.2.24-15.95 4.49-20.2s12-4.37 20.2-4.49c6.37-.1 13-.2 18.35-2.43c5.65-2.33 10.55-7 15.28-11.57C116.91 33.25 122.38 28 128 28s11.09 5.25 16.88 10.8c4.73 4.54 9.63 9.24 15.28 11.57c5.39 2.23 12 2.33 18.35 2.43c8.2.12 16 .24 20.2 4.49s4.37 12 4.49 20.2c.1 6.37.2 13 2.43 18.35c2.33 5.65 7 10.55 11.57 15.28c5.55 5.79 10.8 11.26 10.8 16.88s-5.25 11.09-10.8 16.88ZM124 136V80a4 4 0 0 1 8 0v56a4 4 0 0 1-8 0m12 36a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSealWarningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSeatIcon],svg[ph-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 232a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8m0-72v32a16 16 0 0 1-16 16h-93.89a15.93 15.93 0 0 1-14.32-8.85l-58.11-116a16.1 16.1 0 0 1 0-14.32l22.12-44A16 16 0 0 1 85 17.56l33.69 14.22l.47.22a16 16 0 0 1 7.15 21.46a1.5 1.5 0 0 1-.11.22L112 80l31.78 64H208a16 16 0 0 1 16 16m-16 0h-64.23a15.91 15.91 0 0 1-14.31-8.85l-31.79-64a16.07 16.07 0 0 1 0-14.29l.12-.22L112 46.32L78.57 32.21a5 5 0 0 1-.47-.21L56 76l58.1 116H208Z"></svg:path>`,
})
export class PhSeatIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSeatBoldIcon],svg[ph-seat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 232a12 12 0 0 1-12 12H112a12 12 0 0 1 0-24h104a12 12 0 0 1 12 12m0-72v28a20 20 0 0 1-20 20h-95.9a19.9 19.9 0 0 1-17.89-11.06L38.1 85a20.12 20.12 0 0 1 0-17.9L60.22 23a20 20 0 0 1 26.72-9l29.81 14.27l.18.09a20 20 0 0 1 8.95 26.83l-.17.33l-13.21 24.56L142.25 140H208a20 20 0 0 1 20 20m-24 4h-64.23a19.9 19.9 0 0 1-17.89-11.06l-31.79-64a20.07 20.07 0 0 1 0-17.86c.06-.11.12-.22.17-.33l12.2-22.62L79.91 37.3L60.47 76l54.1 108H204Z"></svg:path>`,
})
export class PhSeatBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSeatDuotoneIcon],svg[ph-seat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 160v32a8 8 0 0 1-8 8h-93.89a8 8 0 0 1-7.15-4.42l-58.12-116a8 8 0 0 1 0-7.16l22.16-44a8 8 0 0 1 10.73-3.57l33.89 14.31a8 8 0 0 1 3.57 10.73l-14.35 26.53a8 8 0 0 0 0 7.16l31.78 64a8 8 0 0 0 7.16 4.42H208a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M224 232a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8m0-72v32a16 16 0 0 1-16 16h-93.89a15.93 15.93 0 0 1-14.32-8.85l-58.11-116a16.1 16.1 0 0 1 0-14.32l22.12-44A16 16 0 0 1 85 17.56l33.69 14.22l.47.22a16 16 0 0 1 7.15 21.46a1.5 1.5 0 0 1-.11.22L112 80l31.78 64H208a16 16 0 0 1 16 16m-16 0h-64.23a15.91 15.91 0 0 1-14.31-8.85l-31.79-64a16.07 16.07 0 0 1 0-14.29l.12-.22L112 46.32L78.57 32.21c-.16-.06-.31-.14-.46-.21L56 76l58.1 116H208Z"></svg:path></svg:g>`,
})
export class PhSeatDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSeatFillIcon],svg[ph-seat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 232a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8m-16-88h-64.22L112 80l14.19-26.32a1.5 1.5 0 0 0 .11-.22A16 16 0 0 0 119.15 32l-.47-.22L85 17.57a16 16 0 0 0-21.2 7.27l-22.12 44a16.1 16.1 0 0 0 0 14.32l58.11 116a15.93 15.93 0 0 0 14.32 8.84H208a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhSeatFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSeatLightIcon],svg[ph-seat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 232a6 6 0 0 1-6 6H112a6 6 0 1 1 0-12h104a6 6 0 0 1 6 6m0-72v32a14 14 0 0 1-14 14h-93.89a13.94 13.94 0 0 1-12.53-7.74l-58.11-116a14.06 14.06 0 0 1 0-12.52l22.12-44a14 14 0 0 1 18.58-6.35l33.74 14.24l.34.17a14 14 0 0 1 6.27 18.78l-.09.16l-14.25 26.42a2 2 0 0 0 0 1.73l31.78 64a2 2 0 0 0 1.78 1.09H208A14 14 0 0 1 222 160m-12 0a2 2 0 0 0-2-2h-64.23a13.94 13.94 0 0 1-12.52-7.74l-31.78-64a14 14 0 0 1 0-12.5l.09-.17l14.25-26.42a2 2 0 0 0 .08-1.47a2 2 0 0 0-.89-1.1L79.35 30.37l-.35-.16a2 2 0 0 0-.89-.21a2 2 0 0 0-1.79 1.1l-22.12 44a2 2 0 0 0 0 1.78l58.12 116a2 2 0 0 0 1.79 1.11H208a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhSeatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSeatThinIcon],svg[ph-seat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 232a4 4 0 0 1-4 4H112a4 4 0 0 1 0-8h104a4 4 0 0 1 4 4m0-72v32a12 12 0 0 1-12 12h-93.89a11.94 11.94 0 0 1-10.74-6.63l-58.11-116a12.07 12.07 0 0 1 0-10.74l22.12-44a12 12 0 0 1 16-5.42l33.78 14.27l.23.11a12 12 0 0 1 5.37 16.1l-.06.1l-14.3 26.47a4 4 0 0 0 0 3.53l31.78 64a4 4 0 0 0 3.57 2.2H208A12 12 0 0 1 220 160m-8 0a4 4 0 0 0-4-4h-64.23a11.94 11.94 0 0 1-10.77-6.63l-31.78-64a12 12 0 0 1 0-10.72l.06-.11l14.27-26.47a4 4 0 0 0-1.71-5.27L80.13 28.53l-.24-.11a3.9 3.9 0 0 0-1.78-.42a4 4 0 0 0-3.58 2.21l-22.12 44a4 4 0 0 0 0 3.57l58.11 116a4 4 0 0 0 3.58 2.21H208a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhSeatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSeatbeltIcon],svg[ph-seatbelt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 68a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44m-44 28a28 28 0 1 1 28-28a28 28 0 0 1-28 28m80 128a8 8 0 0 1-8 8H56a8 8 0 0 1-5.29-14l98.07-86.54a64 64 0 0 0-84 50.33A8 8 0 0 1 49 179.25a80 80 0 0 1 113.16-59.59L186.71 98a8 8 0 0 1 10.58 12L77.16 216H200a8 8 0 0 1 8 8m-14.27-77.62A79.6 79.6 0 0 1 208 192a8 8 0 0 1-16 0a63.67 63.67 0 0 0-11.41-36.49a8 8 0 0 1 13.14-9.13"></svg:path>`,
})
export class PhSeatbeltIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSeatbeltBoldIcon],svg[ph-seatbelt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 212H89.45l110.18-90.74a12 12 0 1 0-15.26-18.52l-17.78 14.64a83.3 83.3 0 0 0-17-6.55a48 48 0 1 0-43.26 0a83.9 83.9 0 0 0-58 54.49a12 12 0 0 0 22.76 7.62a60.05 60.05 0 0 1 74.54-38.3l-97.26 80.1A12 12 0 0 0 56 236h144a12 12 0 0 0 0-24M128 44a24 24 0 1 1-24 24a24 24 0 0 1 24-24m76.61 113.51a83.6 83.6 0 0 1 6.88 25.17a12 12 0 0 1-23.86 2.64a59.2 59.2 0 0 0-4.9-17.95a12 12 0 0 1 21.88-9.86"></svg:path>`,
})
export class PhSeatbeltBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSeatbeltDuotoneIcon],svg[ph-seatbelt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M92 68a36 36 0 1 1 36 36a36 36 0 0 1-36-36m36 52a72 72 0 0 0-72 72v32h144v-32a72 72 0 0 0-72-72" opacity=".2"></svg:path><svg:path d="M172 68a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44m-44 28a28 28 0 1 1 28-28a28 28 0 0 1-28 28m80 128a8 8 0 0 1-8 8H56a8 8 0 0 1-5.29-14l98.07-86.54a64 64 0 0 0-84 50.33A8 8 0 0 1 49 179.25a80 80 0 0 1 113.16-59.59L186.71 98a8 8 0 0 1 10.58 12L77.16 216H200a8 8 0 0 1 8 8m-14.27-77.62A79.6 79.6 0 0 1 208 192a8 8 0 0 1-16 0a63.67 63.67 0 0 0-11.41-36.49a8 8 0 0 1 13.14-9.13"></svg:path></svg:g>`,
})
export class PhSeatbeltDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSeatbeltFillIcon],svg[ph-seatbelt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 112a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44m72 104H77.16l120.13-106a8 8 0 0 0 1.1-1.19a8.07 8.07 0 0 0 1.61-5.08A8 8 0 0 0 186.71 98l-24.54 21.65A80 80 0 0 0 49 179.25a8 8 0 0 0-.1 1.1l-.9 43.48a8 8 0 0 0 8 8.17h144a8 8 0 0 0 0-16m-11.88-73a8 8 0 0 0-6.25 1.94L119.47 200H200a8 8 0 0 0 8-8a79.6 79.6 0 0 0-14.27-45.62a8 8 0 0 0-5.61-3.38"></svg:path>`,
})
export class PhSeatbeltFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSeatbeltLightIcon],svg[ph-seatbelt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 110a42 42 0 1 0-42-42a42 42 0 0 0 42 42m0-72a30 30 0 1 1-30 30a30 30 0 0 1 30-30m78 186a6 6 0 0 1-6 6H56a6 6 0 0 1-4-10.5l100.58-88.75a66 66 0 0 0-89.78 50.72a6 6 0 0 1-5.91 5.05a6 6 0 0 1-1-.07a6 6 0 0 1-5-6.88A78 78 0 0 1 162.49 122L188 99.5a6 6 0 1 1 7.94 9L71.87 218H200a6 6 0 0 1 6 6m-13.92-76.48A77.53 77.53 0 0 1 206 192a6 6 0 0 1-12 0a65.6 65.6 0 0 0-11.77-37.63a6 6 0 0 1 9.85-6.85"></svg:path>`,
})
export class PhSeatbeltLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSeatbeltThinIcon],svg[ph-seatbelt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 108a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-72a32 32 0 1 1-32 32a32 32 0 0 1 32-32m76 188a4 4 0 0 1-4 4H56a4 4 0 0 1-2.65-7l103-90.84a68 68 0 0 0-95.44 51a4 4 0 0 1-3.94 3.37a4.5 4.5 0 0 1-.64-.05a4 4 0 0 1-3.33-4.59a76 76 0 0 1 109.8-55.46L189.35 101a4 4 0 1 1 5.3 6L66.58 220H200a4 4 0 0 1 4 4m-13.56-75.33A75.5 75.5 0 0 1 204 192a4 4 0 0 1-8 0a67.55 67.55 0 0 0-12.13-38.77a4 4 0 1 1 6.57-4.56"></svg:path>`,
})
export class PhSeatbeltThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSecurityCameraIcon],svg[ph-security-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 136a8 8 0 0 0-8 8v16h-44.69L177 141.66l50.34-50.35a16 16 0 0 0 0-22.62l-56-56a16 16 0 0 0-22.63 0L2.92 158.94A10 10 0 0 0 10 176h39.37l35.32 35.31a16 16 0 0 0 22.62 0L165.66 153L184 171.31a15.86 15.86 0 0 0 11.31 4.69H240v16a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8M160 24l12.69 12.69L49.37 160H24.46ZM96 200l-32-32L184 48l32 32Z"></svg:path>`,
})
export class PhSecurityCameraIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSecurityCameraBoldIcon],svg[ph-security-camera-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 132a12 12 0 0 0-12 12v12h-35l-14.35-14.34l47.52-47.52a20 20 0 0 0 0-28.28l-56-56a20 20 0 0 0-28.32 0L6.42 150.47A22 22 0 0 0 22 188h33.7l26.14 26.14a20 20 0 0 0 28.29 0l55.51-55.51l15.52 15.51a19.86 19.86 0 0 0 14.15 5.86H232v12a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12M160 29.67l15 15L55.71 164h-28.9ZM96 194.34L77.65 176L192 61.66L210.34 80l-53.17 53.17Z"></svg:path>`,
})
export class PhSecurityCameraBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSecurityCameraDuotoneIcon],svg[ph-security-camera-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m221.66 85.66l-120 120a8 8 0 0 1-11.32 0L52.69 168L184 36.69l37.66 37.65a8 8 0 0 1 0 11.32" opacity=".2"></svg:path><svg:path d="M248 136a8 8 0 0 0-8 8v16h-44.69L177 141.66l50.34-50.35a16 16 0 0 0 0-22.62l-56-56a16 16 0 0 0-22.63 0L2.92 158.94A10 10 0 0 0 10 176h39.37l35.32 35.31a16 16 0 0 0 22.62 0L165.66 153L184 171.31a15.86 15.86 0 0 0 11.31 4.69H240v16a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8M160 24l12.69 12.69L49.37 160H24.46ZM96 200l-32-32L184 48l32 32Z"></svg:path></svg:g>`,
})
export class PhSecurityCameraDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSecurityCameraFillIcon],svg[ph-security-camera-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 136a8 8 0 0 0-8 8v16h-44.69L177 141.66l50.34-50.35a16 16 0 0 0 0-22.62L189.66 31l-18.35-18.31a16 16 0 0 0-22.63 0L2.92 158.94A10 10 0 0 0 10 176h39.37l35.32 35.31a16 16 0 0 0 22.62 0L165.66 153L184 171.31a15.86 15.86 0 0 0 11.31 4.69H240v16a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8M160 24l12.69 12.69L49.37 160H24.46Z"></svg:path>`,
})
export class PhSecurityCameraFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSecurityCameraLightIcon],svg[ph-security-camera-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 138a6 6 0 0 0-6 6v18h-46.69a2 2 0 0 1-1.41-.59l-19.76-19.75L225.9 89.9a14 14 0 0 0 0-19.8l-56-56a14 14 0 0 0-19.81 0L4.34 160.35A8 8 0 0 0 10 174h40.2l35.9 35.9a14 14 0 0 0 19.8 0l59.76-59.76l19.75 19.76a13.94 13.94 0 0 0 9.9 4.1H242v18a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6M158.59 22.59a2 2 0 0 1 2.82 0l14.1 14.1L50.2 162H19.64ZM97.41 201.41a2 2 0 0 1-2.82 0L61.17 168L184 45.17l33.41 33.42a2 2 0 0 1 0 2.82Z"></svg:path>`,
})
export class PhSecurityCameraLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSecurityCameraThinIcon],svg[ph-security-camera-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 140a4 4 0 0 0-4 4v20h-48.69a4 4 0 0 1-2.82-1.17l-21.18-21.17l53.18-53.17a12 12 0 0 0 0-17l-56-56a12 12 0 0 0-17 0L5.76 161.76A6 6 0 0 0 10 172h41l36.48 36.49a12 12 0 0 0 17 0l61.18-61.18l21.17 21.17a11.9 11.9 0 0 0 8.48 3.52H244v20a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4M157.17 21.17a4.1 4.1 0 0 1 5.66 0l15.51 15.52L51 164H14.82ZM98.83 202.83a4.1 4.1 0 0 1-5.66 0L58.34 168L184 42.34l34.83 34.83a4 4 0 0 1 0 5.66Z"></svg:path>`,
})
export class PhSecurityCameraThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionIcon],svg[ph-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 40a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-8 168h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-176h-24a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0V48a16 16 0 0 0-16-16m8 72a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m0 72a8 8 0 0 0-8 8v24h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16v-24a8 8 0 0 0-8-8M40 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 56H48v-24a8 8 0 0 0-16 0v24a16 16 0 0 0 16 16h24a8 8 0 0 0 0-16m0-176H48a16 16 0 0 0-16 16v24a8 8 0 0 0 16 0V48h24a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhSelectionIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionAllIcon],svg[ph-selection-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 40a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8m40 168h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-176h-24a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0V48a16 16 0 0 0-16-16m8 72a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m0 72a8 8 0 0 0-8 8v24h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16v-24a8 8 0 0 0-8-8M40 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 56H48v-24a8 8 0 0 0-16 0v24a16 16 0 0 0 16 16h24a8 8 0 0 0 0-16M40 80a8 8 0 0 0 8-8V48h24a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v24a8 8 0 0 0 8 8m136 104H80a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8m-8-96H88v80h80Z"></svg:path>`,
})
export class PhSelectionAllIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionAllBoldIcon],svg[ph-selection-all-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 40a12 12 0 0 1 12-12h32a12 12 0 0 1 0 24h-32a12 12 0 0 1-12-12m44 164h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24m64-176h-24a12 12 0 0 0 0 24h20v20a12 12 0 0 0 24 0V48a20 20 0 0 0-20-20m8 72a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12m0 72a12 12 0 0 0-12 12v20h-20a12 12 0 0 0 0 24h24a20 20 0 0 0 20-20v-24a12 12 0 0 0-12-12M40 156a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12m32 48H52v-20a12 12 0 0 0-24 0v24a20 20 0 0 0 20 20h24a12 12 0 0 0 0-24M40 84a12 12 0 0 0 12-12V52h20a12 12 0 0 0 0-24H48a20 20 0 0 0-20 20v24a12 12 0 0 0 12 12m40-16h96a12 12 0 0 1 12 12v96a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12m12 96h72V92H92Z"></svg:path>`,
})
export class PhSelectionAllBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionAllDuotoneIcon],svg[ph-selection-all-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 80v96H80V80Z" opacity=".2"></svg:path><svg:path d="M104 40a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8m40 168h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-176h-24a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0V48a16 16 0 0 0-16-16m8 72a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m0 72a8 8 0 0 0-8 8v24h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16v-24a8 8 0 0 0-8-8M40 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 56H48v-24a8 8 0 0 0-16 0v24a16 16 0 0 0 16 16h24a8 8 0 0 0 0-16M40 80a8 8 0 0 0 8-8V48h24a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v24a8 8 0 0 0 8 8m136 104H80a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8m-8-96H88v80h80Z"></svg:path></svg:g>`,
})
export class PhSelectionAllDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionAllFillIcon],svg[ph-selection-all-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 40a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8m40 168h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-176h-24a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0V48a16 16 0 0 0-16-16m8 72a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m0 72a8 8 0 0 0-8 8v24h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16v-24a8 8 0 0 0-8-8M40 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 56H48v-24a8 8 0 0 0-16 0v24a16 16 0 0 0 16 16h24a8 8 0 0 0 0-16M40 80a8 8 0 0 0 8-8V48h24a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v24a8 8 0 0 0 8 8m144 96V80a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhSelectionAllFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionAllLightIcon],svg[ph-selection-all-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106 40a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12h-32a6 6 0 0 1-6-6m38 170h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m64-176h-24a6 6 0 0 0 0 12h24a2 2 0 0 1 2 2v24a6 6 0 0 0 12 0V48a14 14 0 0 0-14-14m8 72a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m0 72a6 6 0 0 0-6 6v24a2 2 0 0 1-2 2h-24a6 6 0 0 0 0 12h24a14 14 0 0 0 14-14v-24a6 6 0 0 0-6-6M40 150a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 60H48a2 2 0 0 1-2-2v-24a6 6 0 0 0-12 0v24a14 14 0 0 0 14 14h24a6 6 0 0 0 0-12M40 78a6 6 0 0 0 6-6V48a2 2 0 0 1 2-2h24a6 6 0 0 0 0-12H48a14 14 0 0 0-14 14v24a6 6 0 0 0 6 6m136 104H80a6 6 0 0 1-6-6V80a6 6 0 0 1 6-6h96a6 6 0 0 1 6 6v96a6 6 0 0 1-6 6m-6-96H86v84h84Z"></svg:path>`,
})
export class PhSelectionAllLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionAllThinIcon],svg[ph-selection-all-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 40a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-32a4 4 0 0 1-4-4m36 172h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m64-176h-24a4 4 0 0 0 0 8h24a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V48a12 12 0 0 0-12-12m8 72a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m0 72a4 4 0 0 0-4 4v24a4 4 0 0 1-4 4h-24a4 4 0 0 0 0 8h24a12 12 0 0 0 12-12v-24a4 4 0 0 0-4-4M40 148a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m32 64H48a4 4 0 0 1-4-4v-24a4 4 0 0 0-8 0v24a12 12 0 0 0 12 12h24a4 4 0 0 0 0-8M40 76a4 4 0 0 0 4-4V48a4 4 0 0 1 4-4h24a4 4 0 0 0 0-8H48a12 12 0 0 0-12 12v24a4 4 0 0 0 4 4m140 100a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4Zm-8-92H84v88h88Z"></svg:path>`,
})
export class PhSelectionAllThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionBackgroundIcon],svg[ph-selection-background-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 80H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m0 128H48V96h112ZM136 40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m88 8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8a16 16 0 0 1 16 16m0 48v16a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m0 56v8a16 16 0 0 1-16 16h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0M80 56v-8a16 16 0 0 1 16-16h8a8 8 0 0 1 0 16h-8v8a8 8 0 0 1-16 0"></svg:path>`,
})
export class PhSelectionBackgroundIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionBackgroundBoldIcon],svg[ph-selection-background-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 80H48a20 20 0 0 0-20 20v108a20 20 0 0 0 20 20h108a20 20 0 0 0 20-20V100a20 20 0 0 0-20-20m-4 124H52V104h100ZM132 40a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24h-16a12 12 0 0 1-12-12m96 8v8a12 12 0 0 1-24 0v-4h-4a12 12 0 0 1 0-24h8a20 20 0 0 1 20 20m0 48v16a12 12 0 0 1-24 0V96a12 12 0 0 1 24 0m0 56v8a20 20 0 0 1-20 20h-8a12 12 0 0 1 0-24h4v-4a12 12 0 0 1 24 0M76 56v-8a20 20 0 0 1 20-20h8a12 12 0 0 1 0 24h-4v4a12 12 0 0 1-24 0"></svg:path>`,
})
export class PhSelectionBackgroundBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionBackgroundDuotoneIcon],svg[ph-selection-background-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v112a8 8 0 0 1-8 8h-40V96a8 8 0 0 0-8-8H88V48a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M160 80H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m0 128H48V96h112ZM136 40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m88 8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8a16 16 0 0 1 16 16m0 48v16a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m0 56v8a16 16 0 0 1-16 16h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0M80 56v-8a16 16 0 0 1 16-16h8a8 8 0 0 1 0 16h-8v8a8 8 0 0 1-16 0"></svg:path></svg:g>`,
})
export class PhSelectionBackgroundDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionBackgroundFillIcon],svg[ph-selection-background-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 112h72v72H72Zm152-64v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M96 72a8 8 0 0 0 16 0h16a8 8 0 0 0 0-16h-16a16 16 0 0 0-16 16m64 40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v72a16 16 0 0 0 16 16h72a16 16 0 0 0 16-16Zm40 16a8 8 0 0 0-16 0v16a8 8 0 0 0 0 16a16 16 0 0 0 16-16Zm0-56a16 16 0 0 0-16-16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0Z"></svg:path>`,
})
export class PhSelectionBackgroundFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionBackgroundLightIcon],svg[ph-selection-background-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 82H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2ZM138 40a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m84 8v8a6 6 0 0 1-12 0v-8a2 2 0 0 0-2-2h-8a6 6 0 0 1 0-12h8a14 14 0 0 1 14 14m0 48v16a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m0 56v8a14 14 0 0 1-14 14h-8a6 6 0 0 1 0-12h8a2 2 0 0 0 2-2v-8a6 6 0 0 1 12 0M82 56v-8a14 14 0 0 1 14-14h8a6 6 0 0 1 0 12h-8a2 2 0 0 0-2 2v8a6 6 0 0 1-12 0"></svg:path>`,
})
export class PhSelectionBackgroundLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionBackgroundThinIcon],svg[ph-selection-background-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 84H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4ZM140 40a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m80 8v8a4 4 0 0 1-8 0v-8a4 4 0 0 0-4-4h-8a4 4 0 0 1 0-8h8a12 12 0 0 1 12 12m0 48v16a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m0 56v8a12 12 0 0 1-12 12h-8a4 4 0 0 1 0-8h8a4 4 0 0 0 4-4v-8a4 4 0 0 1 8 0M84 56v-8a12 12 0 0 1 12-12h8a4 4 0 0 1 0 8h-8a4 4 0 0 0-4 4v8a4 4 0 0 1-8 0"></svg:path>`,
})
export class PhSelectionBackgroundThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionBoldIcon],svg[ph-selection-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 40a12 12 0 0 1-12 12h-32a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12m-12 164h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24m64-176h-24a12 12 0 0 0 0 24h20v20a12 12 0 0 0 24 0V48a20 20 0 0 0-20-20m8 72a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12m0 72a12 12 0 0 0-12 12v20h-20a12 12 0 0 0 0 24h24a20 20 0 0 0 20-20v-24a12 12 0 0 0-12-12M40 156a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12m32 48H52v-20a12 12 0 0 0-24 0v24a20 20 0 0 0 20 20h24a12 12 0 0 0 0-24m0-176H48a20 20 0 0 0-20 20v24a12 12 0 0 0 24 0V52h20a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhSelectionBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionDuotoneIcon],svg[ph-selection-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176H40V40Z" opacity=".2"></svg:path><svg:path d="M152 40a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-8 168h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-176h-24a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0V48a16 16 0 0 0-16-16m8 72a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m0 72a8 8 0 0 0-8 8v24h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16v-24a8 8 0 0 0-8-8M40 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 56H48v-24a8 8 0 0 0-16 0v24a16 16 0 0 0 16 16h24a8 8 0 0 0 0-16m0-176H48a16 16 0 0 0-16 16v24a8 8 0 0 0 16 0V48h24a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhSelectionDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionFillIcon],svg[ph-selection-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M104 200H72a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16m0-128H72v32a8 8 0 0 1-16 0V72a16 16 0 0 1 16-16h32a8 8 0 0 1 0 16m96 112a16 16 0 0 1-16 16h-32a8 8 0 0 1 0-16h32v-32a8 8 0 0 1 16 0Zm0-80a8 8 0 0 1-16 0V72h-32a8 8 0 0 1 0-16h32a16 16 0 0 1 16 16Z"></svg:path>`,
})
export class PhSelectionFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionForegroundIcon],svg[ph-selection-foreground-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 216a8 8 0 0 1-8 8h-8a16 16 0 0 1-16-16v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8m48-8H96a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m-72-40a8 8 0 0 0 8-8v-16a8 8 0 0 0-16 0v16a8 8 0 0 0 8 8m128 24a8 8 0 0 0-8 8v8h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16v-8a8 8 0 0 0-8-8m0-80a8 8 0 0 0 8-8v-8a16 16 0 0 0-16-16h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 8 8M56 80h-8a16 16 0 0 0-16 16v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16m152-48H96a16 16 0 0 0-16 16v40a4 4 0 0 0 0 .55A8 8 0 0 0 88 96h24a8 8 0 0 0 0-16H96V48h112v112h-32v-16a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhSelectionForegroundIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionForegroundBoldIcon],svg[ph-selection-foreground-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M68 216a12 12 0 0 1-12 12h-8a20 20 0 0 1-20-20v-8a12 12 0 0 1 24 0v4h4a12 12 0 0 1 12 12m44-12H96a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24m-72-32a12 12 0 0 0 12-12v-16a12 12 0 0 0-24 0v16a12 12 0 0 0 12 12m128 16a12 12 0 0 0-12 12v4h-4a12 12 0 0 0 0 24h8a20 20 0 0 0 20-20v-8a12 12 0 0 0-12-12m0-72a12 12 0 0 0 12-12v-8a20 20 0 0 0-20-20h-8a12 12 0 0 0 0 24h4v4a12 12 0 0 0 12 12M56 76h-8a20 20 0 0 0-20 20v8a12 12 0 0 0 24 0v-4h4a12 12 0 0 0 0-24m152-48H100a20 20 0 0 0-20 20v40a6 6 0 0 0 0 .6A12 12 0 0 0 92 100h20a12 12 0 0 0 0-24h-8V52h100v100h-24v-8a12 12 0 0 0-24 0v20a12 12 0 0 0 12 12h40a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20"></svg:path>`,
})
export class PhSelectionForegroundBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionForegroundDuotoneIcon],svg[ph-selection-foreground-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 96v112a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M64 216a8 8 0 0 1-8 8h-8a16 16 0 0 1-16-16v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8m48-8H96a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m-72-40a8 8 0 0 0 8-8v-16a8 8 0 0 0-16 0v16a8 8 0 0 0 8 8m128 24a8 8 0 0 0-8 8v8h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16v-8a8 8 0 0 0-8-8m0-80a8 8 0 0 0 8-8v-8a16 16 0 0 0-16-16h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 8 8M56 80h-8a16 16 0 0 0-16 16v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16m152-48H96a16 16 0 0 0-16 16v40a4 4 0 0 0 0 .55A8 8 0 0 0 88 96h24a8 8 0 0 0 0-16H96V48h112v112h-32v-16a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path></svg:g>`,
})
export class PhSelectionForegroundDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionForegroundFillIcon],svg[ph-selection-foreground-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M88 200H72a16 16 0 0 1-16-16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16m0-88H72v16a8 8 0 0 1-16 0v-16a16 16 0 0 1 16-16h16a8 8 0 0 1 0 16m72 72a16 16 0 0 1-16 16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0Zm0-56a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16a16 16 0 0 1 16 16Zm40 16a16 16 0 0 1-16 16a8 8 0 0 1 0-16V72h-72a8 8 0 0 1-16 0a16 16 0 0 1 16-16h72a16 16 0 0 1 16 16Z"></svg:path>`,
})
export class PhSelectionForegroundFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionForegroundLightIcon],svg[ph-selection-foreground-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62 216a6 6 0 0 1-6 6h-8a14 14 0 0 1-14-14v-8a6 6 0 0 1 12 0v8a2 2 0 0 0 2 2h8a6 6 0 0 1 6 6m50-6H96a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12m-72-44a6 6 0 0 0 6-6v-16a6 6 0 0 0-12 0v16a6 6 0 0 0 6 6m128 28a6 6 0 0 0-6 6v8a2 2 0 0 1-2 2h-8a6 6 0 0 0 0 12h8a14 14 0 0 0 14-14v-8a6 6 0 0 0-6-6m0-84a6 6 0 0 0 6-6v-8a14 14 0 0 0-14-14h-8a6 6 0 0 0 0 12h8a2 2 0 0 1 2 2v8a6 6 0 0 0 6 6M56 82h-8a14 14 0 0 0-14 14v8a6 6 0 0 0 12 0v-8a2 2 0 0 1 2-2h8a6 6 0 0 0 0-12m152-48H96a14 14 0 0 0-14 14v40a6 6 0 0 0 6 6h24a6 6 0 0 0 0-12H94V48a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2v112a2 2 0 0 1-2 2h-34v-18a6 6 0 0 0-12 0v24a6 6 0 0 0 6 6h40a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14"></svg:path>`,
})
export class PhSelectionForegroundLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionForegroundThinIcon],svg[ph-selection-foreground-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 216a4 4 0 0 1-4 4h-8a12 12 0 0 1-12-12v-8a4 4 0 0 1 8 0v8a4 4 0 0 0 4 4h8a4 4 0 0 1 4 4m52-4H96a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m-72-48a4 4 0 0 0 4-4v-16a4 4 0 0 0-8 0v16a4 4 0 0 0 4 4m128 32a4 4 0 0 0-4 4v8a4 4 0 0 1-4 4h-8a4 4 0 0 0 0 8h8a12 12 0 0 0 12-12v-8a4 4 0 0 0-4-4m0-88a4 4 0 0 0 4-4v-8a12 12 0 0 0-12-12h-8a4 4 0 0 0 0 8h8a4 4 0 0 1 4 4v8a4 4 0 0 0 4 4M56 84h-8a12 12 0 0 0-12 12v8a4 4 0 0 0 8 0v-8a4 4 0 0 1 4-4h8a4 4 0 0 0 0-8m152-48H96a12 12 0 0 0-12 12v40a4 4 0 0 0 4 4h24a4 4 0 0 0 0-8H92V48a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4v112a4 4 0 0 1-4 4h-36v-20a4 4 0 0 0-8 0v24a4 4 0 0 0 3.51 3.95a2.2 2.2 0 0 0 .49.05h40a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhSelectionForegroundThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionInverseIcon],svg[ph-selection-inverse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 216a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8M40 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 56H48v-24a8 8 0 0 0-16 0v24a16 16 0 0 0 16 16h24a8 8 0 0 0 0-16M224 48v160a16 16 0 0 1-16 16h-24a8 8 0 0 1 0-16h12.69L48 59.31V72a8 8 0 0 1-16 0V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 0H59.31L208 196.69Z"></svg:path>`,
})
export class PhSelectionInverseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionInverseBoldIcon],svg[ph-selection-inverse-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 216a12 12 0 0 1-12 12h-32a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12M40 156a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12m32 48H52v-20a12 12 0 0 0-24 0v24a20 20 0 0 0 20 20h24a12 12 0 0 0 0-24M228 48v160a20 20 0 0 1-20 20h-24a12 12 0 0 1 0-24h3L52 69v3a12 12 0 0 1-24 0V48a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20m-24 4H69l135 135Z"></svg:path>`,
})
export class PhSelectionInverseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionInverseDuotoneIcon],svg[ph-selection-inverse-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-2.34 5.66L42.34 42.34A8 8 0 0 1 48 40h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M152 216a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8M40 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 56H48v-24a8 8 0 0 0-16 0v24a16 16 0 0 0 16 16h24a8 8 0 0 0 0-16M224 48v160a16 16 0 0 1-16 16h-24a8 8 0 0 1 0-16h12.69L48 59.31V72a8 8 0 0 1-16 0V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 0H59.31L208 196.69Z"></svg:path></svg:g>`,
})
export class PhSelectionInverseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionInverseFillIcon],svg[ph-selection-inverse-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 216a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8M40 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 56H48v-24a8 8 0 0 0-16 0v24a16 16 0 0 0 16 16h24a8 8 0 0 0 0-16M224 48a16 16 0 0 0-16-16H48a15.87 15.87 0 0 0-10.66 4.11a7.7 7.7 0 0 0-1.23 1.23A15.87 15.87 0 0 0 32 48v24a8 8 0 0 0 16 0V59.31L196.69 208H184a8 8 0 0 0 0 16h24a15.9 15.9 0 0 0 10.66-4.1a7 7 0 0 0 .65-.59a6 6 0 0 0 .58-.65A15.87 15.87 0 0 0 224 208Z"></svg:path>`,
})
export class PhSelectionInverseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionInverseLightIcon],svg[ph-selection-inverse-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 216a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6M40 150a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 60H48a2 2 0 0 1-2-2v-24a6 6 0 0 0-12 0v24a14 14 0 0 0 14 14h24a6 6 0 0 0 0-12M222 48v160a14 14 0 0 1-14 14h-24a6 6 0 0 1 0-12h17.51L46 54.48V72a6 6 0 0 1-12 0V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14m-14-2H54.49L210 201.52V48a2 2 0 0 0-2-2"></svg:path>`,
})
export class PhSelectionInverseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionInverseThinIcon],svg[ph-selection-inverse-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 216a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4M40 148a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m32 64H48a4 4 0 0 1-4-4v-24a4 4 0 0 0-8 0v24a12 12 0 0 0 12 12h24a4 4 0 0 0 0-8M220 48v160a12 12 0 0 1-12 12h-24a4 4 0 0 1 0-8h22.34L44 49.66V72a4 4 0 0 1-8 0V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-12-4H49.66L212 206.34V48a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhSelectionInverseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionLightIcon],svg[ph-selection-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 40a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m-6 170h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m64-176h-24a6 6 0 0 0 0 12h24a2 2 0 0 1 2 2v24a6 6 0 0 0 12 0V48a14 14 0 0 0-14-14m8 72a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m0 72a6 6 0 0 0-6 6v24a2 2 0 0 1-2 2h-24a6 6 0 0 0 0 12h24a14 14 0 0 0 14-14v-24a6 6 0 0 0-6-6M40 150a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 60H48a2 2 0 0 1-2-2v-24a6 6 0 0 0-12 0v24a14 14 0 0 0 14 14h24a6 6 0 0 0 0-12m0-176H48a14 14 0 0 0-14 14v24a6 6 0 0 0 12 0V48a2 2 0 0 1 2-2h24a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhSelectionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionPlusIcon],svg[ph-selection-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 40a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-8 168h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-160v24a8 8 0 0 0 16 0V48a16 16 0 0 0-16-16h-24a8 8 0 0 0 0 16Zm8 56a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8M40 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 56H48v-24a8 8 0 0 0-16 0v24a16 16 0 0 0 16 16h24a8 8 0 0 0 0-16m0-176H48a16 16 0 0 0-16 16v24a8 8 0 0 0 16 0V48h24a8 8 0 0 0 0-16m168 176h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhSelectionPlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionPlusBoldIcon],svg[ph-selection-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 40a12 12 0 0 1-12 12h-32a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12m-12 164h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24m60-152v20a12 12 0 0 0 24 0V48a20 20 0 0 0-20-20h-24a12 12 0 0 0 0 24Zm12 48a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12M40 156a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12m32 48H52v-20a12 12 0 0 0-24 0v24a20 20 0 0 0 20 20h24a12 12 0 0 0 0-24m0-176H48a20 20 0 0 0-20 20v24a12 12 0 0 0 24 0V52h20a12 12 0 0 0 0-24m168 176h-12v-12a12 12 0 0 0-24 0v12h-12a12 12 0 0 0 0 24h12v12a12 12 0 0 0 24 0v-12h12a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhSelectionPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionPlusDuotoneIcon],svg[ph-selection-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176H40V40Z" opacity=".2"></svg:path><svg:path d="M152 40a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-8 168h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-160v24a8 8 0 0 0 16 0V48a16 16 0 0 0-16-16h-24a8 8 0 0 0 0 16Zm8 56a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8M40 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 56H48v-24a8 8 0 0 0-16 0v24a16 16 0 0 0 16 16h24a8 8 0 0 0 0-16m0-176H48a16 16 0 0 0-16 16v24a8 8 0 0 0 16 0V48h24a8 8 0 0 0 0-16m168 176h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhSelectionPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionPlusFillIcon],svg[ph-selection-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 72a16 16 0 0 1 16-16h24a8 8 0 0 1 0 16H72v24a8 8 0 0 1-16 0Zm56 112H72a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h40a8 8 0 0 1 0 16m16-120a8 8 0 0 1 8-8h32a16 16 0 0 1 16 16v40a8 8 0 0 1-16 0V72h-32a8 8 0 0 1-8-8m72 120h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhSelectionPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionPlusLightIcon],svg[ph-selection-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 40a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m-6 170h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m66-162v24a6 6 0 0 0 12 0V48a14 14 0 0 0-14-14h-24a6 6 0 0 0 0 12h24a2 2 0 0 1 2 2m6 58a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6M40 150a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 60H48a2 2 0 0 1-2-2v-24a6 6 0 0 0-12 0v24a14 14 0 0 0 14 14h24a6 6 0 0 0 0-12m0-176H48a14 14 0 0 0-14 14v24a6 6 0 0 0 12 0V48a2 2 0 0 1 2-2h24a6 6 0 0 0 0-12m168 176h-18v-18a6 6 0 0 0-12 0v18h-18a6 6 0 0 0 0 12h18v18a6 6 0 0 0 12 0v-18h18a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhSelectionPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionPlusThinIcon],svg[ph-selection-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 40a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m-4 172h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m68-164v24a4 4 0 0 0 8 0V48a12 12 0 0 0-12-12h-24a4 4 0 0 0 0 8h24a4 4 0 0 1 4 4m4 60a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4M40 148a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m32 64H48a4 4 0 0 1-4-4v-24a4 4 0 0 0-8 0v24a12 12 0 0 0 12 12h24a4 4 0 0 0 0-8m0-176H48a12 12 0 0 0-12 12v24a4 4 0 0 0 8 0V48a4 4 0 0 1 4-4h24a4 4 0 0 0 0-8m168 176h-20v-20a4 4 0 0 0-8 0v20h-20a4 4 0 0 0 0 8h20v20a4 4 0 0 0 8 0v-20h20a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhSelectionPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionSlashIcon],svg[ph-selection-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 40a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8m40 168h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-176h-24a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0V48a16 16 0 0 0-16-16m8 72a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8M40 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 56H48v-24a8 8 0 0 0-16 0v24a16 16 0 0 0 16 16h24a8 8 0 0 0 0-16M53.92 34.62a8 8 0 1 0-11.84 10.76l160 176a8 8 0 1 0 11.84-10.76Z"></svg:path>`,
})
export class PhSelectionSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionSlashBoldIcon],svg[ph-selection-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 40a12 12 0 0 1 12-12h32a12 12 0 0 1 0 24h-32a12 12 0 0 1-12-12m44 164h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24m64-176h-24a12 12 0 0 0 0 24h20v20a12 12 0 0 0 24 0V48a20 20 0 0 0-20-20m8 72a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12M40 156a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12m32 48H52v-20a12 12 0 0 0-24 0v24a20 20 0 0 0 20 20h24a12 12 0 0 0 0-24M56.88 31.93a12 12 0 1 0-17.76 16.14l160 176a12 12 0 0 0 17.76-16.14Z"></svg:path>`,
})
export class PhSelectionSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionSlashDuotoneIcon],svg[ph-selection-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176H40V40Z" opacity=".2"></svg:path><svg:path d="M104 40a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8m40 168h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-176h-24a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0V48a16 16 0 0 0-16-16m8 72a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8M40 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 56H48v-24a8 8 0 0 0-16 0v24a16 16 0 0 0 16 16h24a8 8 0 0 0 0-16M53.92 34.62a8 8 0 1 0-11.84 10.76l160 176a8 8 0 1 0 11.84-10.76Z"></svg:path></svg:g>`,
})
export class PhSelectionSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionSlashFillIcon],svg[ph-selection-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-56 24h32a16 16 0 0 1 16 16v32a8 8 0 0 1-16 0V72h-32a8 8 0 0 1 0-16m-48 144H72a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16m101.66 5.66a8 8 0 0 1-11.32 0l-5.65-5.66H152a8 8 0 0 1 0-16h20.69L72 83.31V104a8 8 0 0 1-16 0V67.31l-5.66-5.65a8 8 0 0 1 11.32-11.32l8 8l136 136a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhSelectionSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionSlashLightIcon],svg[ph-selection-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106 40a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12h-32a6 6 0 0 1-6-6m38 170h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m64-176h-24a6 6 0 0 0 0 12h24a2 2 0 0 1 2 2v24a6 6 0 0 0 12 0V48a14 14 0 0 0-14-14m8 72a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6M40 150a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 60H48a2 2 0 0 1-2-2v-24a6 6 0 0 0-12 0v24a14 14 0 0 0 14 14h24a6 6 0 0 0 0-12M52.44 36a6 6 0 0 0-8.88 8l160 176a6 6 0 0 0 8.88-8.08Z"></svg:path>`,
})
export class PhSelectionSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionSlashThinIcon],svg[ph-selection-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 40a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-32a4 4 0 0 1-4-4m36 172h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m64-176h-24a4 4 0 0 0 0 8h24a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V48a12 12 0 0 0-12-12m8 72a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4M40 148a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m32 64H48a4 4 0 0 1-4-4v-24a4 4 0 0 0-8 0v24a12 12 0 0 0 12 12h24a4 4 0 0 0 0-8M51 37.31a4 4 0 0 0-6 5.38l160 176a4 4 0 1 0 5.92-5.38Z"></svg:path>`,
})
export class PhSelectionSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionThinIcon],svg[ph-selection-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 40a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m-4 172h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m64-176h-24a4 4 0 0 0 0 8h24a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V48a12 12 0 0 0-12-12m8 72a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m0 72a4 4 0 0 0-4 4v24a4 4 0 0 1-4 4h-24a4 4 0 0 0 0 8h24a12 12 0 0 0 12-12v-24a4 4 0 0 0-4-4M40 148a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m32 64H48a4 4 0 0 1-4-4v-24a4 4 0 0 0-8 0v24a12 12 0 0 0 12 12h24a4 4 0 0 0 0-8m0-176H48a12 12 0 0 0-12 12v24a4 4 0 0 0 8 0V48a4 4 0 0 1 4-4h24a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhSelectionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShapesIcon],svg[ph-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M71.59 61.47a8 8 0 0 0-15.18 0l-40 120A8 8 0 0 0 24 192h80a8 8 0 0 0 7.59-10.53ZM35.1 176L64 89.3L92.9 176ZM208 76a52 52 0 1 0-52 52a52.06 52.06 0 0 0 52-52m-88 0a36 36 0 1 1 36 36a36 36 0 0 1-36-36m104 68h-88a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8m-8 56h-72v-40h72Z"></svg:path>`,
})
export class PhShapesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShapesBoldIcon],svg[ph-shapes-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M71.49 60.55a12 12 0 0 0-23 0l-36 120A12 12 0 0 0 24 196h72a12 12 0 0 0 11.49-15.45ZM40.13 172L60 105.76L79.87 172ZM212 74a54 54 0 1 0-54 54a54.06 54.06 0 0 0 54-54m-84 0a30 30 0 1 1 30 30a30 30 0 0 1-30-30m96 70h-88a12 12 0 0 0-12 12v52a12 12 0 0 0 12 12h88a12 12 0 0 0 12-12v-52a12 12 0 0 0-12-12m-12 52h-64v-28h64Z"></svg:path>`,
})
export class PhShapesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShapesDuotoneIcon],svg[ph-shapes-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m64 64l40 120H24Zm136 12a44 44 0 1 0-44 44a44 44 0 0 0 44-44m-64 76v56h88v-56Z" opacity=".2"></svg:path><svg:path d="M224 144h-88a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8m-8 56h-72v-40h72ZM71.59 61.47a8 8 0 0 0-15.18 0l-40 120A8 8 0 0 0 24 192h80a8 8 0 0 0 7.59-10.53ZM35.1 176L64 89.3L92.9 176ZM208 76a52 52 0 1 0-52 52a52.06 52.06 0 0 0 52-52m-88 0a36 36 0 1 1 36 36a36 36 0 0 1-36-36"></svg:path></svg:g>`,
})
export class PhShapesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShapesFillIcon],svg[ph-shapes-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M111.59 181.47A8 8 0 0 1 104 192H24a8 8 0 0 1-7.59-10.53l40-120a8 8 0 0 1 15.18 0ZM208 76a52 52 0 1 0-52 52a52.06 52.06 0 0 0 52-52m16 68h-88a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhShapesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShapesLightIcon],svg[ph-shapes-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M69.69 62.1a6 6 0 0 0-11.38 0l-40 120A6 6 0 0 0 24 190h80a6 6 0 0 0 5.69-7.9ZM32.32 178L64 83l31.68 95ZM206 76a50 50 0 1 0-50 50a50.06 50.06 0 0 0 50-50m-88 0a38 38 0 1 1 38 38a38 38 0 0 1-38-38m106 70h-88a6 6 0 0 0-6 6v56a6 6 0 0 0 6 6h88a6 6 0 0 0 6-6v-56a6 6 0 0 0-6-6m-6 56h-76v-44h76Z"></svg:path>`,
})
export class PhShapesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShapesThinIcon],svg[ph-shapes-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M67.79 62.74a4 4 0 0 0-7.58 0l-40 120A4 4 0 0 0 24 188h80a4 4 0 0 0 3.79-5.26ZM29.55 180L64 76.65L98.45 180ZM204 76a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48m-88 0a40 40 0 1 1 40 40a40 40 0 0 1-40-40m108 72h-88a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h88a4 4 0 0 0 4-4v-56a4 4 0 0 0-4-4m-4 56h-80v-48h80Z"></svg:path>`,
})
export class PhShapesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareIcon],svg[ph-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 109.66l-48 48a8 8 0 0 1-11.32-11.32L204.69 112H165a88 88 0 0 0-85.23 66a8 8 0 0 1-15.5-4A103.94 103.94 0 0 1 165 96h39.71l-34.37-34.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32M192 208H40V88a8 8 0 0 0-16 0v128a8 8 0 0 0 8 8h160a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhShareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareBoldIcon],svg[ph-share-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 112.49l-48 48a12 12 0 0 1-17-17L195 116h-30a84 84 0 0 0-81.36 63a12 12 0 1 1-23.24-6A107.94 107.94 0 0 1 165 92h30l-27.49-27.52a12 12 0 0 1 17-17l48 48a12 12 0 0 1-.02 17.01M192 204H44V88a12 12 0 0 0-24 0v128a12 12 0 0 0 12 12h160a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhShareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareDuotoneIcon],svg[ph-share-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 104l-48 48V56Z" opacity=".2"></svg:path><svg:path d="m229.66 98.34l-48-48A8 8 0 0 0 168 56v40h-3a103.94 103.94 0 0 0-100.75 78a8 8 0 0 0 15.5 4A88 88 0 0 1 165 112h3v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32M184 132.69V75.31L212.69 104ZM200 216a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V88a8 8 0 0 1 16 0v120h152a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhShareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareFatIcon],svg[ph-share-fat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.66 106.35l-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91c-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3M160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.2 196.2 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z"></svg:path>`,
})
export class PhShareFatIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareFatBoldIcon],svg[ph-share-fat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.49 103.52l-80-80A12 12 0 0 0 140 32v36.74c-25.76 3.12-53.66 15.89-76.75 35.47c-29.16 24.74-47.32 56.69-51.14 90A16 16 0 0 0 39.67 207c10.46-11.14 47-45.74 100.33-50.42V192a12 12 0 0 0 20.48 8.48l80-80a12 12 0 0 0 .01-16.96M164 163v-19a12 12 0 0 0-12-12c-49 0-86.57 21.56-109.79 40.11c7.13-18.16 19.63-35.22 36.57-49.59C101.3 103.41 128.67 92 152 92a12 12 0 0 0 12-12V61l51 51Z"></svg:path>`,
})
export class PhShareFatBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareFatDuotoneIcon],svg[ph-share-fat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 192v-48c-61.4 0-104.61 37.19-121.07 54.72a4 4 0 0 1-6.9-3.18C31.51 130.45 99.19 80 152 80V32l80 80Z" opacity=".2"></svg:path><svg:path d="m237.66 106.35l-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91c-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3M160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.2 196.2 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z"></svg:path></svg:g>`,
})
export class PhShareFatDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareFatFillIcon],svg[ph-share-fat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.66 117.66l-80 80A8 8 0 0 1 144 192v-39.77c-57.1 3.24-96.25 40.27-107.24 52a12 12 0 0 1-20.68-9.58c3.71-32.26 21.38-63.29 49.76-87.37c23.57-20 52.22-32.69 78.16-34.91V32a8 8 0 0 1 13.66-5.66l80 80a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhShareFatFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareFatLightIcon],svg[ph-share-fat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.24 107.76l-80-80A6 6 0 0 0 146 32v42.2c-54.48 3.59-120.39 55-127.93 120.66a10 10 0 0 0 17.23 8C46.56 190.85 87 152.6 146 150.13V192a6 6 0 0 0 10.24 4.24l80-80a6 6 0 0 0 0-8.48M158 177.52V144a6 6 0 0 0-6-6c-27.73 0-54.76 7.25-80.32 21.55a193.4 193.4 0 0 0-40.81 30.65c4.7-26.56 20.16-52 44-72.27C98.47 97.94 127.29 86 152 86a6 6 0 0 0 6-6V46.49L223.51 112Z"></svg:path>`,
})
export class PhShareFatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareFatThinIcon],svg[ph-share-fat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.83 109.17l-80-80A4 4 0 0 0 148 32v44.09c-54 2.44-120.43 53.55-127.94 119a7.87 7.87 0 0 0 4.58 8.16a8 8 0 0 0 3.41.77a7.9 7.9 0 0 0 5.79-2.55c11.53-12.27 53.29-51.73 114.16-53.4V192a4 4 0 0 0 6.83 2.83l80-80a4 4 0 0 0 0-5.66M156 182.33V144a4 4 0 0 0-4-4c-27.39 0-54.08 7.17-79.34 21.3A189.9 189.9 0 0 0 28 196l2.92 2.74L28 196c3.36-29.21 19.55-57.48 45.6-79.57C97.53 96.11 126.83 84 152 84a4 4 0 0 0 4-4V41.66L226.34 112Z"></svg:path>`,
})
export class PhShareFatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareFillIcon],svg[ph-share-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 109.66l-48 48A8 8 0 0 1 168 152v-40h-3a88 88 0 0 0-85.23 66a8 8 0 0 1-15.5-4A103.94 103.94 0 0 1 165 96h3V56a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32M192 208H40V88a8 8 0 0 0-16 0v128a8 8 0 0 0 8 8h160a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhShareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareLightIcon],svg[ph-share-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 108.24l-48 48a6 6 0 0 1-8.48-8.48L209.51 110H165a89.94 89.94 0 0 0-87.17 67.5a6 6 0 0 1-11.62-3A101.94 101.94 0 0 1 165 98h44.53l-37.77-37.76a6 6 0 0 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48M192 210H38V88a6 6 0 0 0-12 0v128a6 6 0 0 0 6 6h160a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhShareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareNetworkIcon],svg[ph-share-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 160a39.9 39.9 0 0 0-28.62 12.09l-46.1-29.63a39.8 39.8 0 0 0 0-28.92l46.1-29.63a40 40 0 1 0-8.66-13.45l-46.1 29.63a40 40 0 1 0 0 55.82l46.1 29.63A40 40 0 1 0 176 160m0-128a24 24 0 1 1-24 24a24 24 0 0 1 24-24M64 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24m112 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhShareNetworkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareNetworkBoldIcon],svg[ph-share-network-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 156a43.78 43.78 0 0 0-29.09 11l-40.81-26.2a44.07 44.07 0 0 0 0-25.6L146.91 89a43.83 43.83 0 1 0-13-20.17L93.09 95a44 44 0 1 0 0 65.94l40.81 26.26A44 44 0 1 0 176 156m0-120a20 20 0 1 1-20 20a20 20 0 0 1 20-20M64 148a20 20 0 1 1 20-20a20 20 0 0 1-20 20m112 72a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhShareNetworkBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareNetworkDuotoneIcon],svg[ph-share-network-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 200a32 32 0 1 1-32-32a32 32 0 0 1 32 32M176 88a32 32 0 1 0-32-32a32 32 0 0 0 32 32" opacity=".2"></svg:path><svg:path d="M176 160a39.9 39.9 0 0 0-28.62 12.09l-46.1-29.63a39.8 39.8 0 0 0 0-28.92l46.1-29.63a40 40 0 1 0-8.66-13.45l-46.1 29.63a40 40 0 1 0 0 55.82l46.1 29.63A40 40 0 1 0 176 160m0-128a24 24 0 1 1-24 24a24 24 0 0 1 24-24M64 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24m112 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path></svg:g>`,
})
export class PhShareNetworkDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareNetworkFillIcon],svg[ph-share-network-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 200a36 36 0 1 1-69.85-12.25l-53-34.05a36 36 0 1 1 0-51.4l53-34a36.09 36.09 0 1 1 8.67 13.45l-53 34.05a36 36 0 0 1 0 24.5l53 34.05A36 36 0 0 1 212 200"></svg:path>`,
})
export class PhShareNetworkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareNetworkLightIcon],svg[ph-share-network-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 162a37.9 37.9 0 0 0-28.3 12.67l-48.9-31.43a37.9 37.9 0 0 0 0-30.48l48.9-31.43a38 38 0 1 0-6.5-10.09l-48.9 31.43a38 38 0 1 0 0 50.66l48.9 31.43A38 38 0 1 0 176 162m0-132a26 26 0 1 1-26 26a26 26 0 0 1 26-26M64 154a26 26 0 1 1 26-26a26 26 0 0 1-26 26m112 72a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhShareNetworkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareNetworkThinIcon],svg[ph-share-network-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 164a36 36 0 0 0-27.92 13.3L96.25 144a35.92 35.92 0 0 0 0-32l51.83-33.3a35.93 35.93 0 1 0-4.33-6.7l-51.83 33.3a36 36 0 1 0 0 45.4l51.83 33.3A36 36 0 1 0 176 164m0-136a28 28 0 1 1-28 28a28 28 0 0 1 28-28M64 156a28 28 0 1 1 28-28a28 28 0 0 1-28 28m112 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhShareNetworkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareThinIcon],svg[ph-share-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 106.83l-48 48a4 4 0 0 1-5.66-5.66L214.34 108H165a92 92 0 0 0-89.11 69a4 4 0 0 1-3.89 3a4 4 0 0 1-1-.13a4 4 0 0 1-2.87-4.87A99.93 99.93 0 0 1 165 100h49.36l-41.19-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66M192 212H36V88a4 4 0 0 0-8 0v128a4 4 0 0 0 4 4h160a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhShareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldIcon],svg[ph-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1-.26 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m0 72c0 37.07-13.66 67.16-40.6 89.42a129.3 129.3 0 0 1-39.4 22.2a128.3 128.3 0 0 1-38.92-21.81C61.82 179.51 48 149.3 48 112V56h160Z"></svg:path>`,
})
export class PhShieldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldBoldIcon],svg[ph-shield-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a20 20 0 0 0-20 20v56c0 54.29 26.32 87.22 48.4 105.29c23.71 19.39 47.44 26 48.44 26.29a12.1 12.1 0 0 0 6.32 0c1-.28 24.73-6.9 48.44-26.29c22.08-18.07 48.4-51 48.4-105.29V56a20 20 0 0 0-20-20m-4 76c0 35.71-13.09 64.69-38.91 86.15A126.3 126.3 0 0 1 128 219.38a126.1 126.1 0 0 1-37.09-21.23C65.09 176.69 52 147.71 52 112V60h152Z"></svg:path>`,
})
export class PhShieldBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldCheckIcon],svg[ph-shield-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.26 47 25.53a8 8 0 0 0 4.2 0c1-.27 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m0 72c0 37.07-13.66 67.16-40.6 89.42a129.3 129.3 0 0 1-39.4 22.2a128.3 128.3 0 0 1-38.92-21.81C61.82 179.51 48 149.3 48 112V56h160ZM82.34 141.66a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32l-56 56a8 8 0 0 1-11.32 0Z"></svg:path>`,
})
export class PhShieldCheckIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldCheckBoldIcon],svg[ph-shield-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a20 20 0 0 0-20 20v56c0 54.29 26.32 87.22 48.4 105.29c23.71 19.39 47.44 26 48.44 26.29a12.1 12.1 0 0 0 6.32 0c1-.28 24.73-6.9 48.44-26.29c22.08-18.07 48.4-51 48.4-105.29V56a20 20 0 0 0-20-20m-4 76c0 35.71-13.09 64.69-38.91 86.15A126.3 126.3 0 0 1 128 219.38a126.1 126.1 0 0 1-37.09-21.23C65.09 176.69 52 147.71 52 112V60h152ZM79.51 144.49a12 12 0 1 1 17-17L112 143l47.51-47.52a12 12 0 0 1 17 17l-56 56a12 12 0 0 1-17 0Z"></svg:path>`,
})
export class PhShieldCheckBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldCheckDuotoneIcon],svg[ph-shield-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v56c0 96-88 120-88 120s-88-24-88-120V56a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.26 47 25.53a8 8 0 0 0 4.2 0c1-.27 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m0 72c0 37.07-13.66 67.16-40.6 89.42a129.3 129.3 0 0 1-39.4 22.2a128.3 128.3 0 0 1-38.92-21.81C61.82 179.51 48 149.3 48 112V56h160ZM82.34 141.66a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32l-56 56a8 8 0 0 1-11.32 0Z"></svg:path></svg:g>`,
})
export class PhShieldCheckDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldCheckFillIcon],svg[ph-shield-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.26 47 25.53a8 8 0 0 0 4.2 0c1-.27 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m-34.32 69.66l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32Z"></svg:path>`,
})
export class PhShieldCheckFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldCheckLightIcon],svg[ph-shield-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 42H48a14 14 0 0 0-14 14v56c0 51.94 25.12 83.4 46.2 100.64c22.73 18.6 45.27 24.89 46.22 25.15a6 6 0 0 0 3.16 0c.95-.26 23.49-6.55 46.22-25.15C196.88 195.4 222 163.94 222 112V56a14 14 0 0 0-14-14m2 70c0 37.76-13.94 68.39-41.44 91.06A131.2 131.2 0 0 1 128 225.72a131 131 0 0 1-40.56-22.66C59.94 180.39 46 149.76 46 112V56a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-37.76-12.24a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L112 151.51l51.76-51.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhShieldCheckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldCheckThinIcon],svg[ph-shield-check-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H48a12 12 0 0 0-12 12v56c0 51.16 24.73 82.12 45.47 99.1c22.4 18.32 44.55 24.5 45.48 24.76a4 4 0 0 0 2.1 0c.93-.26 23.08-6.44 45.48-24.76c20.74-17 45.47-47.94 45.47-99.1V56a12 12 0 0 0-12-12m4 68c0 38.44-14.23 69.63-42.29 92.71A132.5 132.5 0 0 1 128 227.82a132.2 132.2 0 0 1-41.71-23.11C58.23 181.63 44 150.44 44 112V56a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-41.17-10.83a4 4 0 0 1 0 5.66l-56 56a4 4 0 0 1-5.66 0l-24-24a4 4 0 0 1 5.66-5.66L112 154.34l53.17-53.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhShieldCheckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldCheckeredIcon],svg[ph-shield-checkered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1-.26 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m0 16v56c0 2.71-.08 5.37-.23 8H136V56ZM48 56h72v64H48.23c-.15-2.63-.23-5.29-.23-8Zm2.06 80H120v84.55a131 131 0 0 1-30.93-18.74c-21.15-17.3-34.2-39.37-38.99-65.81Zm117.34 65.42a131.3 131.3 0 0 1-31.4 19.11V136h69.91c-4.75 26.24-17.64 48.18-38.51 65.42"></svg:path>`,
})
export class PhShieldCheckeredIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldCheckeredBoldIcon],svg[ph-shield-checkered-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a20 20 0 0 0-20 20v56c0 54.29 26.32 87.22 48.4 105.29c23.71 19.39 47.44 26 48.44 26.29a12.1 12.1 0 0 0 6.32 0c1-.28 24.73-6.9 48.44-26.29c22.08-18.07 48.4-51 48.4-105.29V56a20 20 0 0 0-20-20m-4 76c0 1.34 0 2.68-.06 4H140V60h64ZM52 60h64v56H52.06c0-1.32-.06-2.66-.06-4Zm3 80h61v74.29a127 127 0 0 1-25.09-16.14C72.22 182.61 60.2 163.13 55 140m110.1 58.15a127 127 0 0 1-25.1 16.14V140h61c-5.2 23.13-17.22 42.61-35.91 58.15Z"></svg:path>`,
})
export class PhShieldCheckeredBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldCheckeredDuotoneIcon],svg[ph-shield-checkered-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 48v80H40.87a146 146 0 0 1-.87-16V56a8 8 0 0 1 8-8Zm0 80v104s78.06-21.3 87.13-104Z" opacity=".2"></svg:path><svg:path d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1-.26 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m-88 180.55a131 131 0 0 1-30.93-18.74c-21.15-17.3-34.2-39.37-39-65.81H120ZM120 120H48.23c-.15-2.63-.23-5.29-.23-8V56h72Zm47.4 81.42a131.3 131.3 0 0 1-31.4 19.11V136h69.91c-4.75 26.24-17.64 48.18-38.51 65.42M208 112c0 2.71-.08 5.37-.23 8H136V56h72Z"></svg:path></svg:g>`,
})
export class PhShieldCheckeredDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldCheckeredFillIcon],svg[ph-shield-checkered-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1-.26 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m-80 183.62a128.3 128.3 0 0 1-38.92-21.81C65.83 182.79 52.37 158 48.9 128H128V56h80v56a141 141 0 0 1-.9 16H128z"></svg:path>`,
})
export class PhShieldCheckeredFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldCheckeredLightIcon],svg[ph-shield-checkered-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 42H48a14 14 0 0 0-14 14v56c0 51.94 25.12 83.4 46.2 100.64c22.73 18.6 45.27 24.89 46.22 25.15a6 6 0 0 0 3.16 0c.95-.26 23.49-6.55 46.22-25.15C196.88 195.4 222 163.94 222 112V56a14 14 0 0 0-14-14m2 14v56c0 3.39-.12 6.72-.34 10H134V54h74a2 2 0 0 1 2 2M46 56a2 2 0 0 1 2-2h74v68H46.34c-.22-3.28-.34-6.61-.34-10Zm1.71 78H122v89.52a133.1 133.1 0 0 1-34.56-20.46C65.5 185 52.2 161.8 47.71 134m120.85 69.06A133.1 133.1 0 0 1 134 223.52V134h74.29c-4.49 27.8-17.79 51-39.73 69.06"></svg:path>`,
})
export class PhShieldCheckeredLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldCheckeredThinIcon],svg[ph-shield-checkered-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H48a12 12 0 0 0-12 12v56c0 51.16 24.73 82.12 45.47 99.1c22.4 18.32 44.55 24.5 45.48 24.76a4 4 0 0 0 2.1 0c.93-.26 23.08-6.44 45.48-24.76c20.74-17 45.47-47.94 45.47-99.1V56a12 12 0 0 0-12-12m4 12v56q0 6.12-.49 12H132V52h76a4 4 0 0 1 4 4M44 56a4 4 0 0 1 4-4h76v72H44.49q-.49-5.88-.49-12Zm1.38 76H124v94.44a135.2 135.2 0 0 1-37.71-21.73C63.27 185.78 49.56 161.38 45.38 132m124.33 72.71A134.9 134.9 0 0 1 132 226.44V132h78.62c-4.18 29.38-17.89 53.78-40.91 72.71"></svg:path>`,
})
export class PhShieldCheckeredThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldChevronIcon],svg[ph-shield-chevron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.26 47 25.53a8 8 0 0 0 4.2 0c1-.27 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m-40.6 161.42a129.3 129.3 0 0 1-39.4 22.2a128.3 128.3 0 0 1-38.92-21.81a111.8 111.8 0 0 1-24.51-27.64l63.43-44.4l63.43 44.4a111.6 111.6 0 0 1-24.03 27.25M208 112q0 26.31-9.14 47.84l-66.27-46.39a8 8 0 0 0-9.18 0l-66.28 46.39C51.06 145.52 48 129.54 48 112V56h160Z"></svg:path>`,
})
export class PhShieldChevronIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldChevronBoldIcon],svg[ph-shield-chevron-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a20 20 0 0 0-20 20v56c0 54.29 26.32 87.22 48.4 105.29c23.71 19.39 47.44 26 48.44 26.29a12.1 12.1 0 0 0 6.32 0c1-.28 24.73-6.9 48.44-26.29c22.08-18.07 48.4-51 48.4-105.29V56a20 20 0 0 0-20-20M52 60h152v52a119.5 119.5 0 0 1-7 41.64l-62.11-43.47a12 12 0 0 0-13.76 0L59 153.64A119.5 119.5 0 0 1 52 112Zm113.09 138.15A126.3 126.3 0 0 1 128 219.38a126.1 126.1 0 0 1-37.09-21.23A109 109 0 0 1 70 175.23l58-40.58l58 40.58a109 109 0 0 1-20.91 22.92"></svg:path>`,
})
export class PhShieldChevronBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldChevronDuotoneIcon],svg[ph-shield-chevron-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M202 171.78C177.13 218.6 128 232 128 232s-49.13-13.4-74-60.22L128 120Z" opacity=".2"></svg:path><svg:path d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.26 47 25.53a8 8 0 0 0 4.2 0c1-.27 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m-40.6 161.42a129.3 129.3 0 0 1-39.4 22.2a128.3 128.3 0 0 1-38.92-21.81a111.8 111.8 0 0 1-24.51-27.64l63.43-44.4l63.43 44.4a111.6 111.6 0 0 1-24.03 27.25M208 112q0 26.31-9.14 47.84l-66.27-46.39a8 8 0 0 0-9.18 0l-66.28 46.39C51.06 145.52 48 129.54 48 112V56h160Z"></svg:path></svg:g>`,
})
export class PhShieldChevronDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldChevronFillIcon],svg[ph-shield-chevron-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.26 47 25.53a8 8 0 0 0 4.2 0c1-.27 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m0 72q0 26.31-9.14 47.84l-66.27-46.39a8 8 0 0 0-9.18 0l-66.28 46.39C51.06 145.52 48 129.54 48 112V56h160Z"></svg:path>`,
})
export class PhShieldChevronFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldChevronLightIcon],svg[ph-shield-chevron-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 42H48a14 14 0 0 0-14 14v56c0 51.94 25.12 83.4 46.2 100.64c22.73 18.6 45.27 24.89 46.22 25.15a6 6 0 0 0 3.16 0c.95-.26 23.49-6.55 46.22-25.15C196.88 195.4 222 163.94 222 112V56a14 14 0 0 0-14-14m-39.44 161.06A131.2 131.2 0 0 1 128 225.72a131 131 0 0 1-40.56-22.66a113.1 113.1 0 0 1-25.56-29.45L128 127.32l66.12 46.29a113.1 113.1 0 0 1-25.56 29.45M210 112c0 18.75-3.44 35.75-10.28 50.88l-68.28-47.8a6 6 0 0 0-6.88 0l-68.28 47.8C49.44 147.75 46 130.75 46 112V56a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhShieldChevronLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldChevronThinIcon],svg[ph-shield-chevron-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H48a12 12 0 0 0-12 12v56c0 51.16 24.73 82.12 45.47 99.1c22.4 18.32 44.55 24.5 45.48 24.76a4 4 0 0 0 2.1 0c.93-.26 23.08-6.44 45.48-24.76c20.74-17 45.47-47.94 45.47-99.1V56a12 12 0 0 0-12-12m-38.29 160.71A132.5 132.5 0 0 1 128 227.82a132.2 132.2 0 0 1-41.71-23.11A115.1 115.1 0 0 1 59.21 173L128 124.88L196.79 173a115.1 115.1 0 0 1-27.08 31.71M212 112c0 20-3.85 38-11.46 53.89l-70.25-49.17a4 4 0 0 0-4.58 0l-70.25 49.17C47.85 150 44 132 44 112V56a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhShieldChevronThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldDuotoneIcon],svg[ph-shield-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v56c0 96-88 120-88 120s-88-24-88-120V56a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1-.26 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m0 72c0 37.07-13.66 67.16-40.6 89.42a129.3 129.3 0 0 1-39.4 22.2a128.3 128.3 0 0 1-38.92-21.81C61.82 179.51 48 149.3 48 112V56h160Z"></svg:path></svg:g>`,
})
export class PhShieldDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldFillIcon],svg[ph-shield-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 56v56c0 52.72-25.52 84.67-46.93 102.19c-23.06 18.86-46 25.27-47 25.53a8 8 0 0 1-4.2 0c-1-.26-23.91-6.67-47-25.53C57.52 196.67 32 164.72 32 112V56a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhShieldFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldLightIcon],svg[ph-shield-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 42H48a14 14 0 0 0-14 14v56c0 51.94 25.12 83.4 46.2 100.64c22.73 18.6 45.27 24.89 46.22 25.15a6 6 0 0 0 3.16 0c.95-.26 23.49-6.55 46.22-25.15C196.88 195.4 222 163.94 222 112V56a14 14 0 0 0-14-14m2 70c0 37.76-13.94 68.39-41.44 91.06A131.2 131.2 0 0 1 128 225.72a131 131 0 0 1-40.56-22.66C59.94 180.39 46 149.76 46 112V56a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhShieldLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldPlusIcon],svg[ph-shield-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 128a8 8 0 0 1 8-8h24V96a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16h-24v24a8 8 0 0 1-16 0v-24H96a8 8 0 0 1-8-8m136-72v56c0 52.72-25.52 84.67-46.93 102.19c-23.06 18.86-46 25.27-47 25.53a8 8 0 0 1-4.2 0c-1-.26-23.91-6.67-47-25.53C57.52 196.67 32 164.72 32 112V56a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 0H48v56c0 37.3 13.82 67.51 41.07 89.81A128.3 128.3 0 0 0 128 223.62a129.3 129.3 0 0 0 39.41-22.2C194.34 179.16 208 149.07 208 112Z"></svg:path>`,
})
export class PhShieldPlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldPlusBoldIcon],svg[ph-shield-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 128a12 12 0 0 1 12-12h20V96a12 12 0 0 1 24 0v20h20a12 12 0 0 1 0 24h-20v20a12 12 0 0 1-24 0v-20H96a12 12 0 0 1-12-12m144-72v56c0 54.29-26.32 87.22-48.4 105.29c-23.71 19.39-47.44 26-48.44 26.29a12.1 12.1 0 0 1-6.32 0c-1-.28-24.73-6.9-48.44-26.29C54.32 199.22 28 166.29 28 112V56a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20m-24 4H52v52c0 35.71 13.09 64.69 38.91 86.15A126.1 126.1 0 0 0 128 219.38a126.3 126.3 0 0 0 37.09-21.23C190.91 176.69 204 147.71 204 112Z"></svg:path>`,
})
export class PhShieldPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldPlusDuotoneIcon],svg[ph-shield-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v56c0 96-88 120-88 120s-88-24-88-120V56a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M88 128a8 8 0 0 1 8-8h24V96a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16h-24v24a8 8 0 0 1-16 0v-24H96a8 8 0 0 1-8-8m136-72v56c0 52.72-25.52 84.67-46.93 102.19c-23.06 18.86-46 25.27-47 25.53a8 8 0 0 1-4.2 0c-1-.26-23.91-6.67-47-25.53C57.52 196.67 32 164.72 32 112V56a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 0H48v56c0 37.3 13.82 67.51 41.07 89.81A128.3 128.3 0 0 0 128 223.62a129.3 129.3 0 0 0 39.41-22.2C194.34 179.16 208 149.07 208 112Z"></svg:path></svg:g>`,
})
export class PhShieldPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldPlusFillIcon],svg[ph-shield-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1-.26 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m-48 96h-24v24a8 8 0 0 1-16 0v-24H96a8 8 0 0 1 0-16h24V96a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhShieldPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldPlusLightIcon],svg[ph-shield-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 128a6 6 0 0 1-6 6h-26v26a6 6 0 0 1-12 0v-26H96a6 6 0 0 1 0-12h26V96a6 6 0 0 1 12 0v26h26a6 6 0 0 1 6 6m56-72v56c0 51.94-25.12 83.4-46.2 100.64c-22.73 18.6-45.27 24.89-46.22 25.15a6 6 0 0 1-3.16 0c-1-.26-23.49-6.55-46.22-25.15C59.12 195.4 34 163.94 34 112V56a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v56c0 37.75 13.94 68.39 41.44 91.06A130.8 130.8 0 0 0 128 225.72a131 131 0 0 0 40.56-22.66C196.06 180.39 210 149.75 210 112Z"></svg:path>`,
})
export class PhShieldPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldPlusThinIcon],svg[ph-shield-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 128a4 4 0 0 1-4 4h-28v28a4 4 0 0 1-8 0v-28H96a4 4 0 0 1 0-8h28V96a4 4 0 0 1 8 0v28h28a4 4 0 0 1 4 4m56-72v56c0 51.16-24.73 82.12-45.47 99.1c-22.4 18.32-44.55 24.5-45.48 24.76a4 4 0 0 1-2.1 0c-.93-.26-23.08-6.44-45.48-24.76C60.73 194.12 36 163.16 36 112V56a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v56c0 38.44 14.23 69.63 42.29 92.71A132.2 132.2 0 0 0 128 227.82a132.5 132.5 0 0 0 41.71-23.11C197.77 181.63 212 150.44 212 112Z"></svg:path>`,
})
export class PhShieldPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldSlashIcon],svg[ph-shield-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62A8 8 0 0 0 40.26 42A16 16 0 0 0 32 56v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1.36-.37 31.27-8.78 57.09-34.72l14.89 16.38a8 8 0 1 0 11.84-10.76Zm74.07 189a128.5 128.5 0 0 1-38.92-21.81C61.82 179.51 48 149.3 48 112V56h3.71l124.7 137.15A129.26 129.26 0 0 1 128 223.62ZM224 56v56c0 20.58-3.89 39.61-11.56 56.59a8 8 0 1 1-14.58-6.59c6.73-14.89 10.14-31.71 10.14-50V56H98.52a8 8 0 1 1 0-16H208a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhShieldSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldSlashBoldIcon],svg[ph-shield-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93A12 12 0 0 0 36 40a20 20 0 0 0-8 16v56c0 54.29 26.32 87.22 48.4 105.29c23.71 19.39 47.44 26 48.44 26.29a12.1 12.1 0 0 0 6.32 0c1.35-.37 30-8.42 55.86-32.82l12.1 13.31a12 12 0 0 0 17.76-16.14ZM128 219.38a126.4 126.4 0 0 1-37.09-21.23C65.09 176.69 52 147.71 52 112V62.24L170.87 193A126 126 0 0 1 128 219.38M228 56v56a144 144 0 0 1-8.23 49.16a12 12 0 0 1-11.28 7.92a11.9 11.9 0 0 1-4.08-.72a12 12 0 0 1-7.2-15.37A120.3 120.3 0 0 0 204 112V60h-94.67a12 12 0 1 1 0-24H208a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhShieldSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldSlashDuotoneIcon],svg[ph-shield-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v56c0 96-88 120-88 120s-88-24-88-120V56a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M53.92 34.62A8 8 0 0 0 40.26 42A16 16 0 0 0 32 56v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1.36-.37 31.27-8.78 57.09-34.72l14.89 16.38a8 8 0 1 0 11.84-10.76Zm74.07 189a128.5 128.5 0 0 1-38.92-21.81C61.82 179.51 48 149.3 48 112V56h3.71l124.7 137.15A129.26 129.26 0 0 1 128 223.62ZM224 56v56c0 20.58-3.89 39.61-11.56 56.59a8 8 0 1 1-14.58-6.59c6.73-14.89 10.14-31.71 10.14-50V56H98.52a8 8 0 1 1 0-16H208a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhShieldSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldSlashFillIcon],svg[ph-shield-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 56v56c0 25.24-5.85 45.72-14.3 62.14a4 4 0 0 1-6.53.87L86.52 46.69a4 4 0 0 1 3-6.69H208a16 16 0 0 1 16 16M53.92 34.62A8 8 0 0 0 40.26 42A16 16 0 0 0 32 56v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1-.26 23.91-6.67 47-25.53a132 132 0 0 0 10.05-9.19l14.9 16.38a8 8 0 1 0 11.84-10.76Z"></svg:path>`,
})
export class PhShieldSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldSlashLightIcon],svg[ph-shield-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-9.63 7A14 14 0 0 0 34 56v56c0 51.94 25.12 83.4 46.2 100.64c22.73 18.6 45.27 24.89 46.22 25.15a6 6 0 0 0 3.16 0c1.36-.37 31.91-8.95 57.67-35.7L203.56 220a6 6 0 0 0 8.88-8.08ZM128 225.72a130.8 130.8 0 0 1-40.56-22.66C59.94 180.39 46 149.75 46 112V56a2 2 0 0 1 2-2h4.6l126.56 139.19A130.7 130.7 0 0 1 128 225.72M222 56v56c0 20.29-3.83 39.05-11.38 55.77a6 6 0 0 1-5.47 3.53a5.9 5.9 0 0 1-2.47-.54a6 6 0 0 1-3-7.93C206.53 147.67 210 130.57 210 112V56a2 2 0 0 0-2-2H98.52a6 6 0 1 1 0-12H208a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhShieldSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldSlashThinIcon],svg[ph-shield-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38l1.31 1.44A12 12 0 0 0 36 56v56c0 51.16 24.73 82.12 45.47 99.1c22.4 18.32 44.55 24.5 45.48 24.76a4 4 0 0 0 2.1 0c1.37-.37 32.56-9.14 58.23-36.71L205 218.69a4 4 0 1 0 5.92-5.38Zm77 190.51a132.2 132.2 0 0 1-41.71-23.11C58.23 181.63 44 150.44 44 112V56a4 4 0 0 1 4-4h5.5l128.38 141.21c-21.65 23.49-48.3 32.85-53.88 34.61M220 56v56c0 20-3.77 38.49-11.2 54.94a4 4 0 0 1-3.65 2.36a4.1 4.1 0 0 1-1.65-.36a4 4 0 0 1-2-5.29c7-15.41 10.49-32.79 10.49-51.65V56a4 4 0 0 0-4-4H98.52a4 4 0 1 1 0-8H208a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhShieldSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldStarIcon],svg[ph-shield-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80.57 117A8 8 0 0 1 91 112.57l29 11.61V96a8 8 0 0 1 16 0v28.18l29-11.61a8 8 0 1 1 6 14.86l-30.31 12.12l17.71 23.65a8 8 0 1 1-12.8 9.6L128 149.33l-17.6 23.47a8 8 0 1 1-12.8-9.6l17.74-23.65L85 127.43A8 8 0 0 1 80.57 117M224 56v56c0 52.72-25.52 84.67-46.93 102.19c-23.06 18.86-46 25.27-47 25.53a8 8 0 0 1-4.2 0c-1-.26-23.91-6.67-47-25.53C57.52 196.67 32 164.72 32 112V56a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 0H48v56c0 37.3 13.82 67.51 41.07 89.81A128.3 128.3 0 0 0 128 223.62a129.3 129.3 0 0 0 39.41-22.2C194.34 179.16 208 149.07 208 112Z"></svg:path>`,
})
export class PhShieldStarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldStarBoldIcon],svg[ph-shield-star-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76.86 115.54a12 12 0 0 1 15.6-6.68l23.54 9.42V96a12 12 0 0 1 24 0v22.28l23.54-9.42a12 12 0 0 1 8.92 22.28L147 141.33l14.6 19.47a12 12 0 1 1-19.2 14.4L128 156l-14.4 19.2a12 12 0 1 1-19.2-14.4l14.6-19.47l-25.46-10.19a12 12 0 0 1-6.68-15.6M228 56v56c0 54.29-26.32 87.22-48.4 105.29c-23.71 19.39-47.44 26-48.44 26.29a12.1 12.1 0 0 1-6.32 0c-1-.28-24.73-6.9-48.44-26.29C54.32 199.22 28 166.29 28 112V56a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20m-24 4H52v52c0 35.71 13.09 64.69 38.91 86.15A126.1 126.1 0 0 0 128 219.38a126.3 126.3 0 0 0 37.09-21.23C190.91 176.69 204 147.71 204 112Z"></svg:path>`,
})
export class PhShieldStarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldStarDuotoneIcon],svg[ph-shield-star-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v56c0 96-88 120-88 120s-88-24-88-120V56a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M80.57 117A8 8 0 0 1 91 112.57l29 11.61V96a8 8 0 0 1 16 0v28.18l29-11.61a8 8 0 1 1 6 14.86l-30.31 12.12l17.71 23.65a8 8 0 1 1-12.8 9.6L128 149.33l-17.6 23.47a8 8 0 1 1-12.8-9.6l17.74-23.65L85 127.43A8 8 0 0 1 80.57 117M224 56v56c0 52.72-25.52 84.67-46.93 102.19c-23.06 18.86-46 25.27-47 25.53a8 8 0 0 1-4.2 0c-1-.26-23.91-6.67-47-25.53C57.52 196.67 32 164.72 32 112V56a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 0H48v56c0 37.3 13.82 67.51 41.07 89.81A128.3 128.3 0 0 0 128 223.62a129.3 129.3 0 0 0 39.41-22.2C194.34 179.16 208 149.07 208 112Z"></svg:path></svg:g>`,
})
export class PhShieldStarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldStarFillIcon],svg[ph-shield-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1-.26 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m-37 87.43l-30.31 12.12l17.71 23.65a8 8 0 1 1-12.8 9.6L128 149.33l-17.6 23.47a8 8 0 1 1-12.8-9.6l17.74-23.65L85 127.43a8 8 0 1 1 6-14.86l29 11.61V96a8 8 0 0 1 16 0v28.18l29-11.61a8 8 0 1 1 6 14.86"></svg:path>`,
})
export class PhShieldStarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldStarLightIcon],svg[ph-shield-star-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M173.57 117.77a6 6 0 0 1-3.34 7.8l-32.73 13.09l19.3 25.74a6 6 0 0 1-9.6 7.2L128 146l-19.2 25.6a6 6 0 1 1-9.6-7.2l19.3-25.74l-32.73-13.09a6 6 0 0 1 4.46-11.14L122 127.14V96a6 6 0 0 1 12 0v31.14l31.77-12.71a6 6 0 0 1 7.8 3.34M222 56v56c0 51.94-25.12 83.4-46.2 100.64c-22.73 18.6-45.27 24.89-46.22 25.15a6 6 0 0 1-3.16 0c-1-.26-23.49-6.55-46.22-25.15C59.12 195.4 34 163.94 34 112V56a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v56c0 37.75 13.94 68.39 41.44 91.06A131 131 0 0 0 128 225.72a131.2 131.2 0 0 0 40.56-22.66C196.06 180.39 210 149.75 210 112Z"></svg:path>`,
})
export class PhShieldStarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldStarThinIcon],svg[ph-shield-star-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171.71 118.51a4 4 0 0 1-2.22 5.2l-35.16 14.07l20.87 27.82a4 4 0 1 1-6.4 4.8L128 142.67l-20.8 27.73a4 4 0 0 1-6.4-4.8l20.87-27.82l-35.16-14.07a4 4 0 1 1 3-7.42l34.49 13.8V96a4 4 0 0 1 8 0v34.09l34.51-13.8a4 4 0 0 1 5.2 2.22M220 56v56c0 51.16-24.73 82.12-45.47 99.1c-22.4 18.32-44.55 24.5-45.48 24.76a4 4 0 0 1-2.1 0c-.93-.26-23.08-6.44-45.48-24.76C60.73 194.12 36 163.16 36 112V56a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v56c0 38.44 14.23 69.63 42.29 92.71A132.2 132.2 0 0 0 128 227.82a132.5 132.5 0 0 0 41.71-23.11C197.77 181.63 212 150.44 212 112Z"></svg:path>`,
})
export class PhShieldStarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldThinIcon],svg[ph-shield-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H48a12 12 0 0 0-12 12v56c0 51.16 24.73 82.12 45.47 99.1c22.4 18.32 44.55 24.5 45.48 24.76a4 4 0 0 0 2.1 0c.93-.26 23.08-6.44 45.48-24.76c20.74-17 45.47-47.94 45.47-99.1V56a12 12 0 0 0-12-12m4 68c0 38.44-14.23 69.63-42.29 92.71A132.5 132.5 0 0 1 128 227.82a132.2 132.2 0 0 1-41.71-23.11C58.23 181.63 44 150.44 44 112V56a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhShieldThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldWarningIcon],svg[ph-shield-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 136V96a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m8 48a12 12 0 1 0-12-12a12 12 0 0 0 12 12m96-128v56c0 52.72-25.52 84.67-46.93 102.19c-23.06 18.86-46 25.27-47 25.53a8 8 0 0 1-4.2 0c-1-.26-23.91-6.67-47-25.53C57.52 196.67 32 164.72 32 112V56a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 0H48v56c0 37.3 13.82 67.51 41.07 89.81A128.3 128.3 0 0 0 128 223.62a129.3 129.3 0 0 0 39.41-22.2C194.34 179.16 208 149.07 208 112Z"></svg:path>`,
})
export class PhShieldWarningIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldWarningBoldIcon],svg[ph-shield-warning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 132V96a12 12 0 0 1 24 0v36a12 12 0 0 1-24 0m12 56a16 16 0 1 0-16-16a16 16 0 0 0 16 16M228 56v56c0 54.29-26.32 87.22-48.4 105.29c-23.71 19.39-47.44 26-48.44 26.29a12.1 12.1 0 0 1-6.32 0c-1-.28-24.73-6.9-48.44-26.29C54.32 199.22 28 166.29 28 112V56a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20m-24 4H52v52c0 35.71 13.09 64.69 38.91 86.15A126.1 126.1 0 0 0 128 219.38a126.3 126.3 0 0 0 37.09-21.23C190.91 176.69 204 147.71 204 112Z"></svg:path>`,
})
export class PhShieldWarningBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldWarningDuotoneIcon],svg[ph-shield-warning-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v56c0 96-88 120-88 120s-88-24-88-120V56a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M120 136V96a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m8 48a12 12 0 1 0-12-12a12 12 0 0 0 12 12m96-128v56c0 52.72-25.52 84.67-46.93 102.19c-23.06 18.86-46 25.27-47 25.53a8 8 0 0 1-4.2 0c-1-.26-23.91-6.67-47-25.53C57.52 196.67 32 164.72 32 112V56a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 0H48v56c0 37.3 13.82 67.51 41.07 89.81A128.3 128.3 0 0 0 128 223.62a129.3 129.3 0 0 0 39.41-22.2C194.34 179.16 208 149.07 208 112Z"></svg:path></svg:g>`,
})
export class PhShieldWarningDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldWarningFillIcon],svg[ph-shield-warning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1-.26 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m-88 56a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm8 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhShieldWarningFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldWarningLightIcon],svg[ph-shield-warning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 136V96a6 6 0 0 1 12 0v40a6 6 0 0 1-12 0m6 26a10 10 0 1 0 10 10a10 10 0 0 0-10-10m94-106v56c0 51.94-25.12 83.4-46.2 100.64c-22.73 18.6-45.27 24.89-46.22 25.15a6 6 0 0 1-3.16 0c-1-.26-23.49-6.55-46.22-25.15C59.12 195.4 34 163.94 34 112V56a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v56c0 37.75 13.94 68.39 41.44 91.06A131 131 0 0 0 128 225.72a131.2 131.2 0 0 0 40.56-22.66C196.06 180.39 210 149.75 210 112Z"></svg:path>`,
})
export class PhShieldWarningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldWarningThinIcon],svg[ph-shield-warning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 136V96a4 4 0 0 1 8 0v40a4 4 0 0 1-8 0m4 28a8 8 0 1 0 8 8a8 8 0 0 0-8-8m92-108v56c0 51.16-24.73 82.12-45.47 99.1c-22.4 18.32-44.55 24.5-45.48 24.76a4 4 0 0 1-2.1 0c-.93-.26-23.08-6.44-45.48-24.76C60.73 194.12 36 163.16 36 112V56a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v56c0 38.44 14.23 69.63 42.29 92.71A132.2 132.2 0 0 0 128 227.82a132.5 132.5 0 0 0 41.71-23.11C197.77 181.63 212 150.44 212 112Z"></svg:path>`,
})
export class PhShieldWarningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShippingContainerIcon],svg[ph-shipping-container-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.4 70.65L130.2 40.31a8 8 0 0 0-3.33-.23L21.74 55.1A16.08 16.08 0 0 0 8 70.94v114.12a16.08 16.08 0 0 0 13.74 15.84l105.13 15a8.5 8.5 0 0 0 1.13.1a8 8 0 0 0 2.2-.31l106.2-30.34A16.07 16.07 0 0 0 248 170V86a16.07 16.07 0 0 0-11.6-15.35M96 120H80V62.94l40-5.72v141.56l-40-5.72V136h16a8 8 0 0 0 0-16M24 70.94l40-5.72V120H48a8 8 0 0 0 0 16h16v54.78l-40-5.72Zm112 126.45V58.61L232 86v84Z"></svg:path>`,
})
export class PhShippingContainerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShippingContainerBoldIcon],svg[ph-shipping-container-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.5 66.8L131.3 36.46a12.1 12.1 0 0 0-5-.34l-105.13 15A20.1 20.1 0 0 0 4 70.94v114.12a20.1 20.1 0 0 0 17.17 19.8l105.13 15a12 12 0 0 0 1.7.12a12 12 0 0 0 3.3-.46l106.2-30.32A20.09 20.09 0 0 0 252 170V86a20.08 20.08 0 0 0-14.5-19.2M92 116h-8V66.41l32-4.57v132.32l-32-4.57V140h8a12 12 0 0 0 0-24M28 74.41l32-4.57V116h-8a12 12 0 0 0 0 24h8v46.16l-32-4.57ZM228 167l-88 25.14V63.91l88 25.14Z"></svg:path>`,
})
export class PhShippingContainerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShippingContainerDuotoneIcon],svg[ph-shipping-container-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 86v84a8 8 0 0 1-5.8 7.69L128 208V48l106.2 30.34A8 8 0 0 1 240 86" opacity=".2"></svg:path><svg:path d="M236.4 70.65L130.2 40.31a8 8 0 0 0-3.33-.23L21.74 55.1A16.08 16.08 0 0 0 8 70.94v114.12a16.08 16.08 0 0 0 13.74 15.84l105.13 15a8.5 8.5 0 0 0 1.13.1a8 8 0 0 0 2.2-.31l106.2-30.34A16.07 16.07 0 0 0 248 170V86a16.07 16.07 0 0 0-11.6-15.35M96 120H80V62.94l40-5.72v141.56l-40-5.72V136h16a8 8 0 0 0 0-16M24 70.94l40-5.72V120H48a8 8 0 0 0 0 16h16v54.78l-40-5.72Zm112 126.45V58.61L232 86v84Z"></svg:path></svg:g>`,
})
export class PhShippingContainerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShippingContainerFillIcon],svg[ph-shipping-container-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.4 70.65L130.2 40.31a8 8 0 0 0-3.33-.23L21.74 55.1A16.08 16.08 0 0 0 8 70.94v114.12a16.08 16.08 0 0 0 13.74 15.84l105.13 15a8.5 8.5 0 0 0 1.13.1a8 8 0 0 0 2.2-.31l106.2-30.34A16.07 16.07 0 0 0 248 170V86a16.07 16.07 0 0 0-11.6-15.35M64 120H48a8 8 0 0 0 0 16h16v54.78l-40-5.72V70.94l40-5.72Zm56 78.78l-40-5.72V136h16a8 8 0 0 0 0-16H80V62.94l40-5.72Z"></svg:path>`,
})
export class PhShippingContainerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShippingContainerLightIcon],svg[ph-shipping-container-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.85 72.57l-106.2-30.34a6 6 0 0 0-2.5-.17L22 57.08a14.07 14.07 0 0 0-12 13.86v114.12a14.07 14.07 0 0 0 12 13.86l105.13 15a6 6 0 0 0 .85.06a6 6 0 0 0 1.65-.23l106.2-30.34A14.06 14.06 0 0 0 246 170V86a14.06 14.06 0 0 0-10.15-13.43M96 122H78V61.2l44-6.28v146.16l-44-6.28V134h18a6 6 0 0 0 0-12m-74 63.06V70.94a2 2 0 0 1 1.72-2l42.28-6V122H48a6 6 0 0 0 0 12h18v59.08l-42.28-6a2 2 0 0 1-1.72-2.02M234 170a2 2 0 0 1-1.45 1.92L134 200.05V56l98.55 28.16A2 2 0 0 1 234 86Z"></svg:path>`,
})
export class PhShippingContainerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShippingContainerThinIcon],svg[ph-shipping-container-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.3 74.5L129.1 44.15a4.1 4.1 0 0 0-1.67-.11L22.3 59.06A12.06 12.06 0 0 0 12 70.94v114.12a12.06 12.06 0 0 0 10.3 11.88l105.13 15a3.6 3.6 0 0 0 .57 0a4 4 0 0 0 1.1-.15l106.2-30.29A12 12 0 0 0 244 170V86a12 12 0 0 0-8.7-11.5M96 124H76V59.47l48-6.86v150.78l-48-6.86V132h20a4 4 0 0 0 0-8m-76 61.06V70.94a4 4 0 0 1 3.43-4L68 60.61V124H48a4 4 0 0 0 0 8h20v63.39L23.43 189a4 4 0 0 1-3.43-3.94M236 170a4 4 0 0 1-2.9 3.84L132 202.7V53.3l101.1 28.89A4 4 0 0 1 236 86Z"></svg:path>`,
})
export class PhShippingContainerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShirtFoldedIcon],svg[ph-shirt-folded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40h-20.69l-13.65-13.66A8 8 0 0 0 160 24H96a8 8 0 0 0-5.66 2.34L76.69 40H56a16 16 0 0 0-16 16v152a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-72 25.58L111 40h34.1Zm33.24-21l6.76 6.73V104l-29.43-25.44ZM88 51.31l6.76-6.75l22.67 34L88 104ZM56 56h16v48a15.85 15.85 0 0 0 9.21 14.49A16.1 16.1 0 0 0 88 120a15.9 15.9 0 0 0 10.2-3.73a.5.5 0 0 0 .11-.1L120 97.48V208H56Zm144 152h-64V97.48l21.65 18.7a.5.5 0 0 0 .11.1A15.9 15.9 0 0 0 168 120a16.1 16.1 0 0 0 6.83-1.54A15.85 15.85 0 0 0 184 104V56h16Z"></svg:path>`,
})
export class PhShirtFoldedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShirtFoldedBoldIcon],svg[ph-shirt-folded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 36h-23l-12.51-12.49A12 12 0 0 0 156 20h-56a12 12 0 0 0-8.49 3.51L79 36H56a20 20 0 0 0-20 20v152a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20M96 53l7.33-7.33l15.49 26.53L96 94.48Zm41.18 19.2l15.49-26.56L160 53v41.48ZM60 60h12v44a20 20 0 0 0 34.08 14.21l9.92-9.71V204H60Zm136 144h-56v-95.5l9.92 9.69A20 20 0 0 0 184 104V60h12Z"></svg:path>`,
})
export class PhShirtFoldedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShirtFoldedDuotoneIcon],svg[ph-shirt-folded-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 56v152a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h24v56a8 8 0 0 0 13.12 6.15L128 80l34.88 30.13A8 8 0 0 0 176 104V48h24a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M200 40h-20.69l-13.65-13.66A8 8 0 0 0 160 24H96a8 8 0 0 0-5.66 2.34L76.69 40H56a16 16 0 0 0-16 16v152a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-38.76 4.56l6.76 6.75V104l-29.43-25.44ZM88 51.31l6.76-6.75l22.67 34L88 104ZM56 56h16v48a15.85 15.85 0 0 0 9.21 14.49A16.1 16.1 0 0 0 88 120a15.9 15.9 0 0 0 10.2-3.73a.5.5 0 0 0 .11-.1L120 97.48V208H56Zm144 152h-64V97.48l21.65 18.7a.5.5 0 0 0 .11.1A15.9 15.9 0 0 0 168 120a16.1 16.1 0 0 0 6.83-1.54A15.85 15.85 0 0 0 184 104V56h16Z"></svg:path></svg:g>`,
})
export class PhShirtFoldedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShirtFoldedFillIcon],svg[ph-shirt-folded-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201 40h-21.65l-13.69-13.66A8 8 0 0 0 160 24H96a8 8 0 0 0-5.66 2.34L76.65 40H55a15 15 0 0 0-15 15v154a15 15 0 0 0 15 15h61a4 4 0 0 0 4-4V104.27a8.18 8.18 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8v116a4 4 0 0 0 4 4h61a15 15 0 0 0 15-15V55a15 15 0 0 0-15-15M86.54 107.08A4 4 0 0 1 80 104V59.31l15.24-15.24l23.47 35.21ZM176 104a4 4 0 0 1-2.3 3.63a3.93 3.93 0 0 1-4.21-.51l-32.2-27.82l23.47-35.21L176 59.31Z"></svg:path>`,
})
export class PhShirtFoldedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShirtFoldedLightIcon],svg[ph-shirt-folded-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 42h-21.52l-14.23-14.24A6 6 0 0 0 160 26H96a6 6 0 0 0-4.25 1.76L77.52 42H56a14 14 0 0 0-14 14v152a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m-72 27.18L107.21 38h41.58Zm32.93-27.76l9.07 9.07V104a2 2 0 0 1-3.25 1.56l-30.82-26.64ZM86 50.49l9.07-9.07l25 37.5l-30.82 26.62A2 2 0 0 1 86 104ZM54 208V56a2 2 0 0 1 2-2h18v50a13.87 13.87 0 0 0 8.06 12.68A14.1 14.1 0 0 0 88 118a13.87 13.87 0 0 0 9-3.26l.08-.07l25-21.56V210H56a2 2 0 0 1-2-2m148 0a2 2 0 0 1-2 2h-66V93.11l25 21.56l.08.07A13.87 13.87 0 0 0 168 118a14.1 14.1 0 0 0 6-1.35a13.87 13.87 0 0 0 8-12.65V54h18a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhShirtFoldedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShirtFoldedThinIcon],svg[ph-shirt-folded-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44h-22.34l-14.83-14.83A4 4 0 0 0 160 28H96a4 4 0 0 0-2.83 1.17L78.34 44H56a12 12 0 0 0-12 12v152a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m-72 28.79L103.47 36h49.06Zm32.62-34.51L172 49.66V104a4 4 0 0 1-2.3 3.63a3.93 3.93 0 0 1-4.21-.51l-32.2-27.82ZM84 49.66l11.38-11.38l27.33 41l-32.17 27.8A4 4 0 0 1 84 104ZM52 208V56a4 4 0 0 1 4-4h20v52a11.89 11.89 0 0 0 6.91 10.87A12.1 12.1 0 0 0 88 116a11.88 11.88 0 0 0 7.65-2.8h.06L124 88.74V212H56a4 4 0 0 1-4-4m152 0a4 4 0 0 1-4 4h-68V88.74l28.32 24.46A11.9 11.9 0 0 0 168 116a12.1 12.1 0 0 0 5.12-1.15A11.89 11.89 0 0 0 180 104V52h20a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhShirtFoldedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShootingStarIcon],svg[ph-shooting-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.35 70.08a13.41 13.41 0 0 0-11.77-9.28l-36.94-2.92l-14.21-33.66a13.51 13.51 0 0 0-24.86 0l-14.21 33.66l-36.94 2.92a13.39 13.39 0 0 0-7.66 23.58l28.06 23.68l-8.56 35.39a13.32 13.32 0 0 0 5.1 13.91a13.51 13.51 0 0 0 15 .69L164 139l31.65 19.06a13.54 13.54 0 0 0 15-.69a13.34 13.34 0 0 0 5.09-13.91l-8.56-35.39l28.06-23.68a13.32 13.32 0 0 0 4.11-14.31M193.08 99a8 8 0 0 0-2.61 8l8.28 34.21l-30.62-18.41a8 8 0 0 0-8.25 0l-30.62 18.43l8.28-34.23a8 8 0 0 0-2.62-8L108 76.26l35.52-2.81a8 8 0 0 0 6.74-4.87L164 35.91l13.79 32.67a8 8 0 0 0 6.74 4.87l35.53 2.81Zm-105 24.18l-58.42 58.48a8 8 0 0 1-11.32-11.32l58.45-58.45a8 8 0 0 1 11.32 11.32Zm10.81 49.87a8 8 0 0 1 0 11.31l-53.23 53.3a8 8 0 0 1-11.32-11.32l53.27-53.26a8 8 0 0 1 11.31 0Zm73-1a8 8 0 0 1 0 11.32l-54.28 54.28a8 8 0 0 1-11.32-11.32l54.29-54.28a8 8 0 0 1 11.36.01Z"></svg:path>`,
})
export class PhShootingStarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShootingStarBoldIcon],svg[ph-shooting-star-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.16 68.85a17.4 17.4 0 0 0-15.26-12l-34.52-2.72l-13.26-31.47a17.52 17.52 0 0 0-32.24 0l-13.26 31.43l-34.51 2.72a17.39 17.39 0 0 0-9.93 30.62l26.17 22.1l-8 33a17.46 17.46 0 0 0 26 19L164 143.66l29.59 17.81a17.46 17.46 0 0 0 26-19l-8-33l26.17-22.1a17.3 17.3 0 0 0 5.4-18.52M190.5 96a12 12 0 0 0-3.92 12l6 24.91l-22.41-13.5a12.06 12.06 0 0 0-12.38 0l-22.41 13.5l6-24.91a12 12 0 0 0-3.93-12L118 79.48l25.83-2a12 12 0 0 0 10.11-7.3L164 46.2l10.11 23.94a12 12 0 0 0 10.11 7.3l25.82 2Zm-158 88.52a12 12 0 0 1-17-17l51.76-51.75a12 12 0 0 1 17 17Zm63.59-8.57a12 12 0 0 1 0 17l-47.59 47.6a12 12 0 0 1-17-17l47.6-47.59a12 12 0 0 1 16.98-.04Zm62.44 9.56a12 12 0 0 1 0 17l-38 38a12 12 0 0 1-17-17l38-38a12 12 0 0 1 16.99-.03Z"></svg:path>`,
})
export class PhShootingStarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShootingStarDuotoneIcon],svg[ph-shooting-star-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m230.08 78.26l-31.84 26.88l9.76 40.19a5.46 5.46 0 0 1-8.19 5.86L164 129.66l-35.78 21.53a5.46 5.46 0 0 1-8.19-5.86l9.73-40.19l-31.84-26.88a5.38 5.38 0 0 1 3.13-9.48l41.79-3.31l16.1-38.14a5.51 5.51 0 0 1 10.12 0l16.1 38.14L227 68.78a5.38 5.38 0 0 1 3.08 9.48" opacity=".2"></svg:path><svg:path d="M239.35 70.08a13.41 13.41 0 0 0-11.77-9.28l-36.94-2.92l-14.21-33.66a13.51 13.51 0 0 0-24.86 0l-14.21 33.66l-36.94 2.92a13.39 13.39 0 0 0-7.66 23.58l28.06 23.68l-8.56 35.39a13.32 13.32 0 0 0 5.1 13.91a13.51 13.51 0 0 0 15 .69L164 139l31.65 19.06a13.54 13.54 0 0 0 15-.69a13.34 13.34 0 0 0 5.09-13.91l-8.56-35.39l28.06-23.68a13.32 13.32 0 0 0 4.11-14.31M193.08 99a8 8 0 0 0-2.61 8l8.28 34.21l-30.62-18.41a8 8 0 0 0-8.25 0l-30.62 18.43l8.28-34.23a8 8 0 0 0-2.62-8L108 76.26l35.52-2.81a8 8 0 0 0 6.74-4.87L164 35.91l13.79 32.67a8 8 0 0 0 6.74 4.87l35.53 2.81Zm-105 24.18l-58.42 58.48a8 8 0 0 1-11.32-11.32l58.45-58.45a8 8 0 0 1 11.32 11.32Zm10.81 49.87a8 8 0 0 1 0 11.31l-53.23 53.3a8 8 0 0 1-11.32-11.32l53.27-53.26a8 8 0 0 1 11.31 0Zm73-1a8 8 0 0 1 0 11.32l-54.28 54.28a8 8 0 0 1-11.32-11.32l54.29-54.28a8 8 0 0 1 11.36.01Z"></svg:path></svg:g>`,
})
export class PhShootingStarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShootingStarFillIcon],svg[ph-shooting-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.24 84.38l-28.06 23.68l8.56 35.39a13.34 13.34 0 0 1-5.09 13.91a13.54 13.54 0 0 1-15 .69L164 139l-31.65 19.06a13.51 13.51 0 0 1-15-.69a13.32 13.32 0 0 1-5.1-13.91l8.56-35.39l-28.05-23.69a13.39 13.39 0 0 1 7.66-23.58l36.94-2.92l14.21-33.66a13.51 13.51 0 0 1 24.86 0l14.21 33.66l36.94 2.92a13.39 13.39 0 0 1 7.66 23.58M88.11 111.89a8 8 0 0 0-11.32 0l-58.45 58.45a8 8 0 0 0 11.32 11.32l58.45-58.45a8 8 0 0 0 0-11.32m-.5 61.19l-53.27 53.26a8 8 0 0 0 11.32 11.32l53.26-53.27a8 8 0 0 0-11.31-11.31m73-1l-54.29 54.28a8 8 0 0 0 11.32 11.32l54.28-54.28a8 8 0 0 0-11.31-11.32"></svg:path>`,
})
export class PhShootingStarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShootingStarLightIcon],svg[ph-shooting-star-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.45 70.69a11.42 11.42 0 0 0-10-7.9l-38.16-3L174.59 25a11.51 11.51 0 0 0-21.18 0l-14.68 34.78l-38.15 3a11.39 11.39 0 0 0-6.53 20.06l29 24.48l-8.86 36.59a11.35 11.35 0 0 0 4.34 11.83a11.51 11.51 0 0 0 12.78.58L164 136.66l32.69 19.67a11.5 11.5 0 0 0 12.77-.58a11.33 11.33 0 0 0 4.34-11.83l-8.8-36.59l29-24.48a11.32 11.32 0 0 0 3.45-12.16m-43.08 29.87a6 6 0 0 0-2 6l9.41 38.86l-34.68-20.9a6 6 0 0 0-6.19 0l-34.72 20.89l9.41-38.86a6 6 0 0 0-2-6l-30.66-25.9l40.37-3.19a6 6 0 0 0 5.06-3.65l15.63-37l15.63 37a6 6 0 0 0 5.06 3.65l40.37 3.19ZM86.69 121.79l-58.45 58.45a6 6 0 0 1-8.48-8.48l58.45-58.45a6 6 0 0 1 8.48 8.48m10.82 52.7a6 6 0 0 1 0 8.49l-53.27 53.26a6 6 0 0 1-8.48-8.48L89 174.49a6 6 0 0 1 8.51 0m73-1a6 6 0 0 1 0 8.48l-54.29 54.28a6 6 0 0 1-8.48-8.48L162 173.48a6 6 0 0 1 8.53 0Z"></svg:path>`,
})
export class PhShootingStarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShootingStarThinIcon],svg[ph-shooting-star-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.55 71.3a9.44 9.44 0 0 0-8.28-6.51l-39.37-3.11l-15.15-35.91a9.51 9.51 0 0 0-17.49 0L140.1 61.68l-39.36 3.11a9.39 9.39 0 0 0-5.4 16.53l30 25.28l-9.14 37.79a9.24 9.24 0 0 0 3.58 9.75a9.52 9.52 0 0 0 10.56.48l33.66-20.3l33.72 20.3a9.52 9.52 0 0 0 10.56-.48a9.24 9.24 0 0 0 3.58-9.75l-9.15-37.79l29.95-25.28a9.34 9.34 0 0 0 2.89-10.02m-8.05 3.91l-31.84 26.87a4 4 0 0 0-1.31 4l9.73 40.19a1.28 1.28 0 0 1-.53 1.42a1.5 1.5 0 0 1-1.71.07l-35.77-21.53a4 4 0 0 0-4.13 0l-35.78 21.53a1.48 1.48 0 0 1-1.7-.07a1.3 1.3 0 0 1-.54-1.42l9.73-40.19a4 4 0 0 0-1.31-4l-31.83-26.87a1.29 1.29 0 0 1-.44-1.46a1.4 1.4 0 0 1 1.3-1l41.79-3.3a4 4 0 0 0 3.37-2.45l16.1-38.15a1.51 1.51 0 0 1 2.75 0L181.48 67a4 4 0 0 0 3.37 2.43l41.79 3.3a1.39 1.39 0 0 1 1.29 1a1.27 1.27 0 0 1-.43 1.48M85.28 120.38l-58.45 58.45a4 4 0 0 1-5.66-5.66l58.45-58.45a4 4 0 0 1 5.66 5.66m10.81 55.53a4 4 0 0 1 0 5.65l-53.26 53.27a4 4 0 0 1-5.66-5.66l53.27-53.26a4 4 0 0 1 5.65 0m73-1a4 4 0 0 1 0 5.66l-54.28 54.28a4 4 0 0 1-5.66-5.66l54.29-54.28a4 4 0 0 1 5.67-.02Z"></svg:path>`,
})
export class PhShootingStarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingBagIcon],svg[ph-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176zM176 88a48 48 0 0 1-96 0a8 8 0 0 1 16 0a32 32 0 0 0 64 0a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhShoppingBagIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingBagBoldIcon],svg[ph-shopping-bag-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 160H44V60h168ZM76 88a12 12 0 0 1 24 0a28 28 0 0 0 56 0a12 12 0 0 1 24 0a52 52 0 0 1-104 0"></svg:path>`,
})
export class PhShoppingBagBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingBagDuotoneIcon],svg[ph-shopping-bag-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176zM176 88a48 48 0 0 1-96 0a8 8 0 0 1 16 0a32 32 0 0 0 64 0a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhShoppingBagDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingBagFillIcon],svg[ph-shopping-bag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-88 96a48.05 48.05 0 0 1-48-48a8 8 0 0 1 16 0a32 32 0 0 0 64 0a8 8 0 0 1 16 0a48.05 48.05 0 0 1-48 48"></svg:path>`,
})
export class PhShoppingBagFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingBagLightIcon],svg[ph-shopping-bag-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 158a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM174 88a46 46 0 0 1-92 0a6 6 0 0 1 12 0a34 34 0 0 0 68 0a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhShoppingBagLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingBagOpenIcon],svg[ph-shopping-bag-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v16H40V56Zm0 144H40V88h176zm-40-88a48 48 0 0 1-96 0a8 8 0 0 1 16 0a32 32 0 0 0 64 0a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhShoppingBagOpenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingBagOpenBoldIcon],svg[ph-shopping-bag-open-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 24v16H44V60ZM44 196v-96h168v96Zm136-72a52 52 0 0 1-104 0a12 12 0 0 1 24 0a28 28 0 0 0 56 0a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhShoppingBagOpenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingBagOpenDuotoneIcon],svg[ph-shopping-bag-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v24H32V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v16H40V56Zm0 144H40V88h176zm-40-88a48 48 0 0 1-96 0a8 8 0 0 1 16 0a32 32 0 0 0 64 0a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhShoppingBagOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingBagOpenFillIcon],svg[ph-shopping-bag-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-88 120a48.05 48.05 0 0 1-48-48a8 8 0 0 1 16 0a32 32 0 0 0 64 0a8 8 0 0 1 16 0a48.05 48.05 0 0 1-48 48M40 72V56h176v16Z"></svg:path>`,
})
export class PhShoppingBagOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingBagOpenLightIcon],svg[ph-shopping-bag-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M40 54h176a2 2 0 0 1 2 2v18H38V56a2 2 0 0 1 2-2m176 148H40a2 2 0 0 1-2-2V86h180v114a2 2 0 0 1-2 2m-42-90a46 46 0 0 1-92 0a6 6 0 0 1 12 0a34 34 0 0 0 68 0a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhShoppingBagOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingBagOpenThinIcon],svg[ph-shopping-bag-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M40 52h176a4 4 0 0 1 4 4v20H36V56a4 4 0 0 1 4-4m176 152H40a4 4 0 0 1-4-4V84h184v116a4 4 0 0 1-4 4m-44-92a44 44 0 0 1-88 0a4 4 0 0 1 8 0a36 36 0 0 0 72 0a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhShoppingBagOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingBagThinIcon],svg[ph-shopping-bag-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM172 88a44 44 0 0 1-88 0a4 4 0 0 1 8 0a36 36 0 0 0 72 0a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhShoppingBagThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingCartIcon],svg[ph-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m4-74.57a8 8 0 0 1-7.9 6.57H77.22L65.59 72h148.82Z"></svg:path>`,
})
export class PhShoppingCartIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingCartBoldIcon],svg[ph-shopping-cart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233.21 56.31A12 12 0 0 0 224 52H66l-5.47-30.15A12 12 0 0 0 48.73 12H24a12 12 0 0 0 0 24h14.71l24.91 137a28 28 0 0 0 4.07 10.21A32 32 0 1 0 123 196h34a32 32 0 1 0 31-24H91.17a4 4 0 0 1-3.93-3.28L84.92 156H196.1a28 28 0 0 0 27.55-23l12.16-66.86a12 12 0 0 0-2.6-9.83M100 204a8 8 0 1 1-8-8a8 8 0 0 1 8 8m88 8a8 8 0 1 1 8-8a8 8 0 0 1-8 8m12-83.28a4 4 0 0 1-3.9 3.28H80.56L70.38 76h139.24Z"></svg:path>`,
})
export class PhShoppingCartBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingCartDuotoneIcon],svg[ph-shopping-cart-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 64l-12.16 66.86A16 16 0 0 1 196.1 144H70.55L56 64Z" opacity=".2"></svg:path><svg:path d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m4-74.57a8 8 0 0 1-7.9 6.57H77.22L65.59 72h148.82Z"></svg:path></svg:g>`,
})
export class PhShoppingCartDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingCartFillIcon],svg[ph-shopping-cart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhShoppingCartFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingCartLightIcon],svg[ph-shopping-cart-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.61 60.16A6 6 0 0 0 224 58H61l-6.37-35.07a6 6 0 0 0-5.9-4.93H24a6 6 0 0 0 0 12h19.72l25.81 141.94a21.93 21.93 0 0 0 6.24 11.77a26 26 0 1 0 38.12 6.29h52.22A26 26 0 1 0 188 178H91.17a10 10 0 0 1-9.84-8.21L77.73 150H196.1a22 22 0 0 0 21.65-18.06l12.15-66.87a6 6 0 0 0-1.29-4.91M106 204a14 14 0 1 1-14-14a14 14 0 0 1 14 14m96 0a14 14 0 1 1-14-14a14 14 0 0 1 14 14m3.94-74.21a10 10 0 0 1-9.84 8.21H75.55L63.19 70h153.62Z"></svg:path>`,
})
export class PhShoppingCartLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingCartSimpleIcon],svg[ph-shopping-cart-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 216a16 16 0 1 1-16-16a16 16 0 0 1 16 16m88-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m47.71-125.86l-25.64 92.28A24.06 24.06 0 0 1 191 184H92.16A24.06 24.06 0 0 1 69 166.42L33.92 40H16a8 8 0 0 1 0-16h24a8 8 0 0 1 7.71 5.86L57.19 64H232a8 8 0 0 1 7.71 10.14M221.47 80H61.64l22.81 82.14a8 8 0 0 0 7.71 5.86H191a8 8 0 0 0 7.71-5.86Z"></svg:path>`,
})
export class PhShoppingCartSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingCartSimpleBoldIcon],svg[ph-shopping-cart-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.55 64.74A12 12 0 0 0 232 60H60.23l-8.67-31.21A12 12 0 0 0 40 20H20a12 12 0 0 0 0 24h10.88l34.3 123.49a28.09 28.09 0 0 0 27 20.51H191a28.09 28.09 0 0 0 27-20.51l25.63-92.28a12 12 0 0 0-2.08-10.47m-46.75 96.33A4 4 0 0 1 191 164H92.16a4 4 0 0 1-3.85-2.93L66.9 84h149.31ZM108 220a20 20 0 1 1-20-20a20 20 0 0 1 20 20m104 0a20 20 0 1 1-20-20a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhShoppingCartSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingCartSimpleDuotoneIcon],svg[ph-shopping-cart-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m232 72l-25.63 92.28A16 16 0 0 1 191 176H92.16a16 16 0 0 1-15.41-11.72L51.11 72Z" opacity=".2"></svg:path><svg:path d="M104 216a16 16 0 1 1-16-16a16 16 0 0 1 16 16m88-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m47.71-125.86l-25.64 92.28A24.06 24.06 0 0 1 191 184H92.16A24.06 24.06 0 0 1 69 166.42L33.92 40H16a8 8 0 0 1 0-16h24a8 8 0 0 1 7.71 5.86L57.19 64H232a8 8 0 0 1 7.71 10.14M221.47 80H61.64l22.81 82.14a8 8 0 0 0 7.71 5.86H191a8 8 0 0 0 7.71-5.86Z"></svg:path></svg:g>`,
})
export class PhShoppingCartSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingCartSimpleFillIcon],svg[ph-shopping-cart-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.71 74.14l-25.64 92.28A24.06 24.06 0 0 1 191 184H92.16A24.06 24.06 0 0 1 69 166.42L33.92 40H16a8 8 0 0 1 0-16h24a8 8 0 0 1 7.71 5.86L57.19 64H232a8 8 0 0 1 7.71 10.14M88 200a16 16 0 1 0 16 16a16 16 0 0 0-16-16m104 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhShoppingCartSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingCartSimpleLightIcon],svg[ph-shopping-cart-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.78 68.37A6 6 0 0 0 232 66H55.67l-9.89-35.61A6 6 0 0 0 40 26H16a6 6 0 0 0 0 12h19.44L71 165.89A22.08 22.08 0 0 0 92.16 182H191a22.08 22.08 0 0 0 21.2-16.11l25.63-92.28a6 6 0 0 0-1.05-5.24m-36.2 94.31A10 10 0 0 1 191 170H92.16a10 10 0 0 1-9.63-7.32L59 78h165.11ZM102 216a14 14 0 1 1-14-14a14 14 0 0 1 14 14m104 0a14 14 0 1 1-14-14a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhShoppingCartSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingCartSimpleThinIcon],svg[ph-shopping-cart-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.18 69.58A4 4 0 0 0 232 68H54.15l-10.3-37.07A4 4 0 0 0 40 28H16a4 4 0 0 0 0 8h21l35.89 129.35A20.06 20.06 0 0 0 92.16 180H191a20.06 20.06 0 0 0 19.27-14.65l25.63-92.28a4 4 0 0 0-.72-3.49m-32.67 93.63A12 12 0 0 1 191 172H92.16a12 12 0 0 1-11.56-8.79L56.37 76h170.37ZM100 216a12 12 0 1 1-12-12a12 12 0 0 1 12 12m104 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhShoppingCartSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingCartThinIcon],svg[ph-shopping-cart-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.07 61.44A4 4 0 0 0 224 60H59.34l-6.68-36.72A4 4 0 0 0 48.73 20H24a4 4 0 0 0 0 8h21.39l6.69 36.8l19.41 106.78A20 20 0 0 0 79 183.85a24 24 0 1 0 30.87 4.15h60.26a24 24 0 1 0 17.87-8H91.17a12 12 0 0 1-11.8-9.85l-4-22.15H196.1a20 20 0 0 0 19.68-16.42l12.16-66.86a4 4 0 0 0-.87-3.28M108 204a16 16 0 1 1-16-16a16 16 0 0 1 16 16m96 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m3.91-73.85A12 12 0 0 1 196.1 140H73.88L60.79 68h158.42Z"></svg:path>`,
})
export class PhShoppingCartThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShovelIcon],svg[ph-shovel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.66 58.34l-48-48a8 8 0 0 0-11.32 11.32L204.69 40l-71 71l-34.38-34.32a16 16 0 0 0-22.62 0l-56 56A15.9 15.9 0 0 0 16 144v80a16 16 0 0 0 16 16h80a15.86 15.86 0 0 0 11.31-4.69l56-56a16 16 0 0 0 0-22.62L145 122.34l71-71l18.34 18.35a8 8 0 0 0 11.32-11.32ZM168 168l-56 56H32v-80l56-56l34.34 34.34l-40 40a8 8 0 0 0 11.32 11.32l40-40Z"></svg:path>`,
})
export class PhShovelIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShovelBoldIcon],svg[ph-shovel-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m248.49 55.51l-48-48a12 12 0 0 0-17 17L199 40l-65.37 65.37l-31.49-31.51a20 20 0 0 0-28.28 0l-56 56A19.9 19.9 0 0 0 12 144v80a20 20 0 0 0 20 20h80a19.86 19.86 0 0 0 14.14-5.86l56-56a20 20 0 0 0 0-28.28l-31.51-31.52L216 57l15.51 15.52a12 12 0 1 0 17-17ZM162.34 168l-52 52H36v-74.34l52-52l28.69 28.68l-37.18 37.17a12 12 0 0 0 17 17l37.17-37.18Z"></svg:path>`,
})
export class PhShovelBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShovelDuotoneIcon],svg[ph-shovel-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m173.66 173.66l-56 56A8 8 0 0 1 112 232H32a8 8 0 0 1-8-8v-80a8 8 0 0 1 2.34-5.66l56-56a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 0 11.32" opacity=".2"></svg:path><svg:path d="m245.66 58.34l-48-48a8 8 0 0 0-11.32 11.32L204.69 40l-71 71l-34.38-34.32a16 16 0 0 0-22.62 0l-56 56A15.9 15.9 0 0 0 16 144v80a16 16 0 0 0 16 16h80a15.86 15.86 0 0 0 11.31-4.69l56-56a16 16 0 0 0 0-22.62L145 122.34l71-71l18.34 18.35a8 8 0 0 0 11.32-11.32ZM168 168l-56 56H32v-80l56-56l34.34 34.34l-40 40a8 8 0 0 0 11.32 11.32l40-40Z"></svg:path></svg:g>`,
})
export class PhShovelDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShovelFillIcon],svg[ph-shovel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.66 69.66a8 8 0 0 1-11.32 0L216 51.31l-71 71L133.66 111l71-71l-18.32-18.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32M88 176a8 8 0 0 1-5.66-13.66L133.66 111L99.31 76.68a16 16 0 0 0-22.62 0l-56 56A15.9 15.9 0 0 0 16 144v80a16 16 0 0 0 16 16h80a15.86 15.86 0 0 0 11.31-4.69l56-56a16 16 0 0 0 0-22.62L145 122.34l-51.34 51.32A8 8 0 0 1 88 176"></svg:path>`,
})
export class PhShovelFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShovelLightIcon],svg[ph-shovel-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244.24 59.76l-48-48a6 6 0 0 0-8.48 8.48L207.52 40l-73.86 73.86L97.9 78.1a14 14 0 0 0-19.8 0l-56 56A13.94 13.94 0 0 0 18 144v80a14 14 0 0 0 14 14h80a13.94 13.94 0 0 0 9.9-4.1l56-56a14 14 0 0 0 0-19.8l-35.76-35.76L216 48.48l19.76 19.76a6 6 0 1 0 8.48-8.48m-74.83 106.82a2 2 0 0 1 0 2.84l-56 56a2 2 0 0 1-1.41.58H32a2 2 0 0 1-2-2v-80a2 2 0 0 1 .58-1.42l56-56A2 2 0 0 1 88 86a2.07 2.07 0 0 1 1.42.58l35.75 35.76l-41.41 41.42a6 6 0 1 0 8.48 8.48l41.42-41.41Z"></svg:path>`,
})
export class PhShovelLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShovelThinIcon],svg[ph-shovel-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242.83 61.17l-48-48a4 4 0 0 0-5.66 5.66L210.34 40l-76.68 76.69l-37.17-37.18a12 12 0 0 0-17 0l-56 56A11.93 11.93 0 0 0 20 144v80a12 12 0 0 0 12 12h80a12 12 0 0 0 8.49-3.51l56-56a12 12 0 0 0 0-17l-37.18-37.17L216 45.66l21.17 21.17a4 4 0 1 0 5.66-5.66m-72 104a4 4 0 0 1 0 5.66l-56 56A4 4 0 0 1 112 228H32a4 4 0 0 1-4-4v-80a4 4 0 0 1 1.17-2.83l56-56a4 4 0 0 1 5.66 0L128 122.34l-42.83 42.83a4 4 0 0 0 5.66 5.66L133.66 128Z"></svg:path>`,
})
export class PhShovelThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShowerIcon],svg[ph-shower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 236a12 12 0 1 1-12-12a12 12 0 0 1 12 12m20-44a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-64 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m32-32a12 12 0 1 0 12 12a12 12 0 0 0-12-12M256 40a8 8 0 0 1-8 8h-28.69l-27.85 27.86l-21.66 126.79a16 16 0 0 1-27.09 8.66l-98-98a16 16 0 0 1 8.69-27.1l126.74-21.67l30.2-30.2A8 8 0 0 1 216 32h32a8 8 0 0 1 8 8m-81.79 41.79L56 102l98 98Z"></svg:path>`,
})
export class PhShowerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShowerBoldIcon],svg[ph-shower-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M68 236a16 16 0 1 1-16-16a16 16 0 0 1 16 16m16-48a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-64 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16m32 0a16 16 0 1 0-16-16a16 16 0 0 0 16 16M256 40a12 12 0 0 1-12 12h-23l-25.81 25.79l-21.45 125.54a20 20 0 0 1-33.86 10.8l-98-98a20 20 0 0 1 10.84-33.88l125.5-21.44l29.29-29.3A12 12 0 0 1 216 28h28a12 12 0 0 1 12 12m-86.68 46.68l-105 17.94l87.07 87.07Z"></svg:path>`,
})
export class PhShowerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShowerDuotoneIcon],svg[ph-shower-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m184 72l-22.09 129.31a8 8 0 0 1-13.54 4.34l-98-98a8 8 0 0 1 4.34-13.54Z" opacity=".2"></svg:path><svg:path d="M64 236a12 12 0 1 1-12-12a12 12 0 0 1 12 12m20-44a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-64 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m32-32a12 12 0 1 0 12 12a12 12 0 0 0-12-12M256 40a8 8 0 0 1-8 8h-28.69l-27.85 27.86l-21.66 126.79a16 16 0 0 1-27.09 8.66l-98-98a16 16 0 0 1 8.69-27.1l126.74-21.67l30.2-30.2A8 8 0 0 1 216 32h32a8 8 0 0 1 8 8m-81.79 41.79L56 102l98 98Z"></svg:path></svg:g>`,
})
export class PhShowerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShowerFillIcon],svg[ph-shower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 236a12 12 0 1 1-12-12a12 12 0 0 1 12 12m20-44a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-64 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m32-32a12 12 0 1 0 12 12a12 12 0 0 0-12-12M248 32h-32a8 8 0 0 0-5.66 2.34l-30.2 30.2L53.38 86.19a16 16 0 0 0-8.69 27.1l98 98a16 16 0 0 0 27.09-8.66l21.68-126.77L219.31 48H248a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhShowerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShowerLightIcon],svg[ph-shower-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62 236a10 10 0 1 1-10-10a10 10 0 0 1 10 10m22-42a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-64 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m32-32a10 10 0 1 0 10 10a10 10 0 0 0-10-10M254 40a6 6 0 0 1-6 6h-29.51l-28.9 28.89l-21.76 127.43a14 14 0 0 1-23.71 7.57l-98-98a14 14 0 0 1 7.6-23.71l127.4-21.76l30.65-30.65A6 6 0 0 1 216 34h32a6 6 0 0 1 6 6m-77.34 39.34L55.7 100a2 2 0 0 0-1.11 3.39l98 98a2 2 0 0 0 3.39-1.09Z"></svg:path>`,
})
export class PhShowerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShowerThinIcon],svg[ph-shower-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 236a8 8 0 1 1-8-8a8 8 0 0 1 8 8m24-40a8 8 0 1 0 8 8a8 8 0 0 0-8-8m-64 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m32-32a8 8 0 1 0 8 8a8 8 0 0 0-8-8M252 40a4 4 0 0 1-4 4h-30.34l-29.93 29.93L165.86 202a12 12 0 0 1-8.17 9.44a12.1 12.1 0 0 1-3.69.56a12 12 0 0 1-8.46-3.52l-98-98A12 12 0 0 1 54 90.14l128-21.87l31.1-31.1A4 4 0 0 1 216 36h32a4 4 0 0 1 4 4m-72.89 36.89L55.37 98a4 4 0 0 0-2.19 6.78l98 98a4 4 0 0 0 6.78-2.17Z"></svg:path>`,
})
export class PhShowerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShrimpIcon],svg[ph-shrimp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 116a12 12 0 1 1 12 12a12 12 0 0 1-12-12m87.8-30.62A80.09 80.09 0 0 1 144 160h-32a12 12 0 0 0 0 24h56a8 8 0 0 1 0 16h-48v16h32a8 8 0 0 1 0 16H96a80 80 0 0 1 0-160h116a12 12 0 0 0 0-24h-84a24 24 0 0 1-24-24a8 8 0 0 1 16 0a8 8 0 0 0 8 8h84a28 28 0 0 1 11.8 53.38m-173 111.91l33.22-23.73V172a28 28 0 0 1 1-7.48L33 140.87a63.74 63.74 0 0 0 17.84 56.42Zm39-8.2l-25.68 18.37A63.6 63.6 0 0 0 96 216h8v-17.17a28.13 28.13 0 0 1-14.16-9.74Zm14.2-43.92V88h-8a64.07 64.07 0 0 0-58.22 37.48l55.87 25.39a28 28 0 0 1 10.35-5.7M207.5 88H120v56h24a64.09 64.09 0 0 0 63.5-56"></svg:path>`,
})
export class PhShrimpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShrimpBoldIcon],svg[ph-shrimp-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 60a32 32 0 0 0-32-32h-84a4 4 0 0 1-4-4a12 12 0 0 0-24 0a28 28 0 0 0 28 28h84a8 8 0 0 1 0 16H96.9c-46.47 0-84.56 37.4-84.9 83.37A84 84 0 0 0 96 236h56a12 12 0 0 0 0-24h-28v-16h44a12 12 0 0 0 0-24h-56a8 8 0 0 1 0-16h40a76.1 76.1 0 0 0 75.58-68.07A32 32 0 0 0 244 60M96.9 92h3.1v42.34a32.2 32.2 0 0 0-12.65 9.27l-44-20A61.19 61.19 0 0 1 96.9 92M36 151.54c0-1.61.11-3.21.25-4.79l43.87 19.94a30 30 0 0 0 .66 4.29L51.31 192A59.54 59.54 0 0 1 36 151.54M96 212a59.8 59.8 0 0 1-24.23-5.09l22.66-16.18a32.5 32.5 0 0 0 5.57 2.93V212Zm56-80h-28V92h78.6a52.08 52.08 0 0 1-50.6 40"></svg:path>`,
})
export class PhShrimpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShrimpDuotoneIcon],svg[ph-shrimp-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M112 80v72a20 20 0 0 0 0 40v32H96a72 72 0 0 1 0-144Z" opacity=".2"></svg:path><svg:path d="M136 116a12 12 0 1 1 12 12a12 12 0 0 1-12-12m87.8-30.62A80.09 80.09 0 0 1 144 160h-32a12 12 0 0 0 0 24h56a8 8 0 0 1 0 16h-48v16h32a8 8 0 0 1 0 16H96a80 80 0 0 1 0-160h116a12 12 0 0 0 0-24h-84a24 24 0 0 1-24-24a8 8 0 0 1 16 0a8 8 0 0 0 8 8h84a28 28 0 0 1 11.8 53.38m-173 111.91l33.22-23.73V172a28 28 0 0 1 1-7.48L33 140.87a63.74 63.74 0 0 0 17.84 56.42Zm39-8.2l-25.68 18.37A63.6 63.6 0 0 0 96 216h8v-17.17a28.13 28.13 0 0 1-14.16-9.74Zm14.2-43.92V88h-8a64.07 64.07 0 0 0-58.22 37.48l55.87 25.39a28 28 0 0 1 10.35-5.7M207.5 88H120v56h24a64.09 64.09 0 0 0 63.5-56"></svg:path></svg:g>`,
})
export class PhShrimpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShrimpFillIcon],svg[ph-shrimp-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 116a12 12 0 1 1 12 12a12 12 0 0 1-12-12m104-56a28 28 0 0 1-16.2 25.38A80.09 80.09 0 0 1 144 160h-32a12 12 0 0 0 0 24h56a8 8 0 0 1 0 16h-48v16h32a8 8 0 0 1 0 16H96a80 80 0 0 1 0-160h116a12 12 0 0 0 0-24h-84a24 24 0 0 1-24-24a8 8 0 0 1 16 0a8 8 0 0 0 8 8h84a28 28 0 0 1 28 28M85.72 182.2a8 8 0 0 0-11.16-1.86l-15.36 11a8 8 0 0 0 9.3 13l15.36-11a8 8 0 0 0 1.86-11.14m-1.5-35.62L45.55 129a8 8 0 1 0-6.62 14.56l38.67 17.59a8 8 0 0 0 10.59-4a8 8 0 0 0-3.97-10.57M207.5 88H120v56h24a64.09 64.09 0 0 0 63.5-56"></svg:path>`,
})
export class PhShrimpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShrimpLightIcon],svg[ph-shrimp-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 116a10 10 0 1 1 10 10a10 10 0 0 1-10-10m83.9-32a78.1 78.1 0 0 1-77.9 74h-32a14 14 0 0 0 0 28h56a6 6 0 0 1 0 12h-50v20h34a6 6 0 0 1 0 12H96a78 78 0 0 1 0-156h116a14 14 0 0 0 0-28h-84a22 22 0 0 1-22-22a6 6 0 0 1 12 0a10 10 0 0 0 10 10h84a26 26 0 0 1 9.9 50M50.65 199.88l35.48-25.34A24 24 0 0 1 86 172a25.9 25.9 0 0 1 1.46-8.57L31.51 138a65.8 65.8 0 0 0 19.14 61.88M90.3 186.3l-29.81 21.29A65.56 65.56 0 0 0 96 218h10v-20.71a26.05 26.05 0 0 1-15.7-10.99m15.7-39.59V86H96a66.1 66.1 0 0 0-60.86 40.47L94 153.24a25.86 25.86 0 0 1 12-6.53M209.73 86H118v60h26a66.09 66.09 0 0 0 65.73-60"></svg:path>`,
})
export class PhShrimpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShrimpThinIcon],svg[ph-shrimp-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 116a8 8 0 1 1 8 8a8 8 0 0 1-8-8m79.93-33.35A76.07 76.07 0 0 1 144 156h-32a16 16 0 0 0 0 32h56a4 4 0 0 1 0 8h-52v24h36a4 4 0 0 1 0 8H96a76 76 0 0 1 0-152h116a16 16 0 0 0 0-32h-84a20 20 0 0 1-20-20a4 4 0 0 1 8 0a12 12 0 0 0 12 12h84a24 24 0 0 1 7.93 46.65M50.47 202.46l37.78-27A25 25 0 0 1 88 172a23.85 23.85 0 0 1 2-9.6l-59.9-27.23a68 68 0 0 0 20.36 67.29Zm40.43-19L57 207.64A67.6 67.6 0 0 0 96 220h12v-24.34a24.07 24.07 0 0 1-17.1-12.24Zm17.1-35.12V84H96a68.1 68.1 0 0 0-63.42 43.51l61.89 28.13a23.94 23.94 0 0 1 13.53-7.3M211.88 84H116v64h28a68.08 68.08 0 0 0 67.88-64"></svg:path>`,
})
export class PhShrimpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleIcon],svg[ph-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.66 178.34a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L212.69 192h-11.75a72.12 72.12 0 0 1-58.59-30.15l-41.72-58.4A56.1 56.1 0 0 0 55.06 80H32a8 8 0 0 1 0-16h23.06a72.12 72.12 0 0 1 58.59 30.15l41.72 58.4A56.1 56.1 0 0 0 200.94 176h11.75l-10.35-10.34a8 8 0 0 1 11.32-11.32ZM143 107a8 8 0 0 0 11.16-1.86l1.2-1.67A56.1 56.1 0 0 1 200.94 80h11.75l-10.35 10.34a8 8 0 0 0 11.32 11.32l24-24a8 8 0 0 0 0-11.32l-24-24a8 8 0 0 0-11.32 11.32L212.69 64h-11.75a72.12 72.12 0 0 0-58.59 30.15l-1.2 1.67A8 8 0 0 0 143 107m-30 42a8 8 0 0 0-11.16 1.86l-1.2 1.67A56.1 56.1 0 0 1 55.06 176H32a8 8 0 0 0 0 16h23.06a72.12 72.12 0 0 0 58.59-30.15l1.2-1.67A8 8 0 0 0 113 149"></svg:path>`,
})
export class PhShuffleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleAngularIcon],svg[ph-shuffle-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.66 178.34a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L212.69 192H168a8 8 0 0 1-6.51-3.35L83.88 80H32a8 8 0 0 1 0-16h56a8 8 0 0 1 6.51 3.35L172.12 176h40.57l-10.35-10.34a8 8 0 0 1 11.32-11.32ZM143 107a8 8 0 0 0 11.16-1.86l18-25.12h40.57l-10.39 10.32a8 8 0 0 0 11.32 11.32l24-24a8 8 0 0 0 0-11.32l-24-24a8 8 0 0 0-11.32 11.32L212.69 64H168a8 8 0 0 0-6.51 3.35l-20.34 28.47A8 8 0 0 0 143 107m-30 42a8 8 0 0 0-11.16 1.86L83.88 176H32a8 8 0 0 0 0 16h56a8 8 0 0 0 6.51-3.35l20.34-28.47A8 8 0 0 0 113 149"></svg:path>`,
})
export class PhShuffleAngularIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleAngularBoldIcon],svg[ph-shuffle-angular-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240.49 175.51a12 12 0 0 1 0 17l-24 24a12 12 0 0 1-17-17L203 196h-35a12 12 0 0 1-9.76-5L81.82 84H32a12 12 0 0 1 0-24h56a12 12 0 0 1 9.76 5l76.42 107H203l-3.52-3.51a12 12 0 0 1 17-17ZM110.4 152.64a12 12 0 0 0-16.74 2.79L81.82 172H32a12 12 0 0 0 0 24h56a12 12 0 0 0 9.76-5l15.43-21.59a12 12 0 0 0-2.79-16.77m35.2-49.28a12 12 0 0 0 16.74-2.79L174.18 84H203l-3.52 3.51a12 12 0 0 0 17 17l24-24a12 12 0 0 0 0-17l-24-24a12 12 0 0 0-17 17L203 60h-35a12 12 0 0 0-9.76 5l-15.43 21.6a12 12 0 0 0 2.79 16.76"></svg:path>`,
})
export class PhShuffleAngularBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleAngularDuotoneIcon],svg[ph-shuffle-angular-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m88 72l40 56l-40 56H32V72Zm80 0l-40 56l40 56h64V72Z" opacity=".2"></svg:path><svg:path d="M237.66 178.34a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L212.69 192H168a8 8 0 0 1-6.51-3.35L83.88 80H32a8 8 0 0 1 0-16h56a8 8 0 0 1 6.51 3.35L172.12 176h40.57l-10.35-10.34a8 8 0 0 1 11.32-11.32ZM143 107a8 8 0 0 0 11.16-1.86l18-25.12h40.57l-10.39 10.32a8 8 0 0 0 11.32 11.32l24-24a8 8 0 0 0 0-11.32l-24-24a8 8 0 0 0-11.32 11.32L212.69 64H168a8 8 0 0 0-6.51 3.35l-20.34 28.47A8 8 0 0 0 143 107m-30 42a8 8 0 0 0-11.16 1.86L83.88 176H32a8 8 0 0 0 0 16h56a8 8 0 0 0 6.51-3.35l20.34-28.47A8 8 0 0 0 113 149"></svg:path></svg:g>`,
})
export class PhShuffleAngularDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleAngularFillIcon],svg[ph-shuffle-angular-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.66 178.34a8 8 0 0 1 0 11.32l-24 24A8 8 0 0 1 200 208v-16h-32a8 8 0 0 1-6.51-3.35L83.88 80H32a8 8 0 0 1 0-16h56a8 8 0 0 1 6.51 3.35L172.12 176H200v-16a8 8 0 0 1 13.66-5.66ZM143 107a8 8 0 0 0 11.16-1.86l18-25.12H200V96a8 8 0 0 0 13.66 5.66l24-24a8 8 0 0 0 0-11.32l-24-24A8 8 0 0 0 200 48v16h-32a8 8 0 0 0-6.51 3.35l-20.34 28.47A8 8 0 0 0 143 107m-30 42a8 8 0 0 0-11.16 1.86L83.88 176H32a8 8 0 0 0 0 16h56a8 8 0 0 0 6.51-3.35l20.34-28.47A8 8 0 0 0 113 149"></svg:path>`,
})
export class PhShuffleAngularFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleAngularLightIcon],svg[ph-shuffle-angular-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.24 179.76a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48-8.48L217.52 190H168a6 6 0 0 1-4.88-2.51L84.91 78H32a6 6 0 0 1 0-12h56a6 6 0 0 1 4.88 2.51L171.09 178h46.43l-13.76-13.76a6 6 0 0 1 8.48-8.48Zm-92.07-74.4a6 6 0 0 0 8.37-1.4l18.55-26h46.43l-13.76 13.8a6 6 0 1 0 8.48 8.48l24-24a6 6 0 0 0 0-8.48l-24-24a6 6 0 0 0-8.48 8.48L217.52 66H168a6 6 0 0 0-4.88 2.51L142.78 97a6 6 0 0 0 1.39 8.36m-32.34 45.28a6 6 0 0 0-8.37 1.4L84.91 178H32a6 6 0 0 0 0 12h56a6 6 0 0 0 4.88-2.51L113.22 159a6 6 0 0 0-1.39-8.36"></svg:path>`,
})
export class PhShuffleAngularLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleAngularThinIcon],svg[ph-shuffle-angular-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.83 181.17a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L222.34 188H168a4 4 0 0 1-3.25-1.67L85.94 76H32a4 4 0 0 1 0-8h56a4 4 0 0 1 3.25 1.67L170.06 180h52.28l-17.17-17.17a4 4 0 0 1 5.66-5.66Zm-89.49-77.44a4 4 0 0 0 5.58-.93L170.06 76h52.28l-17.17 17.17a4 4 0 0 0 5.66 5.66l24-24a4 4 0 0 0 0-5.66l-24-24a4 4 0 0 0-5.66 5.66L222.34 68H168a4 4 0 0 0-3.25 1.67l-20.34 28.48a4 4 0 0 0 .93 5.58m-34.68 48.54a4 4 0 0 0-5.58.93L85.94 180H32a4 4 0 0 0 0 8h56a4 4 0 0 0 3.25-1.67l20.34-28.48a4 4 0 0 0-.93-5.58"></svg:path>`,
})
export class PhShuffleAngularThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleBoldIcon],svg[ph-shuffle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240.49 175.51a12 12 0 0 1 0 17l-24 24a12 12 0 0 1-17-17L203 196h-2.09a76.17 76.17 0 0 1-61.85-31.83l-41.68-58.39A52.1 52.1 0 0 0 55.06 84H32a12 12 0 0 1 0-24h23.06a76.17 76.17 0 0 1 61.85 31.83l41.71 58.39A52.1 52.1 0 0 0 200.94 172H203l-3.52-3.51a12 12 0 0 1 17-17Zm-95.62-72.62a12 12 0 0 0 16.93-1.13A52 52 0 0 1 200.94 84H203l-3.52 3.51a12 12 0 0 0 17 17l24-24a12 12 0 0 0 0-17l-24-24a12 12 0 0 0-17 17L203 60h-2.09a76 76 0 0 0-57.2 26a12 12 0 0 0 1.16 16.89m-33.74 50.22a12 12 0 0 0-16.93 1.13A52 52 0 0 1 55.06 172H32a12 12 0 0 0 0 24h23.06a76 76 0 0 0 57.2-26a12 12 0 0 0-1.13-16.89"></svg:path>`,
})
export class PhShuffleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleDuotoneIcon],svg[ph-shuffle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M107.14 98.8L128 128l-20.86 29.2A64 64 0 0 1 55.06 184H32V72h23.06a64 64 0 0 1 52.08 26.8m93.8-26.8a64 64 0 0 0-52.08 26.8L128 128l20.86 29.2a64 64 0 0 0 52.08 26.8H232V72Z" opacity=".2"></svg:path><svg:path d="M237.66 178.34a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L212.69 192h-11.75a72.12 72.12 0 0 1-58.59-30.15l-41.72-58.4A56.1 56.1 0 0 0 55.06 80H32a8 8 0 0 1 0-16h23.06a72.12 72.12 0 0 1 58.59 30.15l41.72 58.4A56.1 56.1 0 0 0 200.94 176h11.75l-10.35-10.34a8 8 0 0 1 11.32-11.32ZM143 107a8 8 0 0 0 11.16-1.86l1.2-1.67A56.1 56.1 0 0 1 200.94 80h11.75l-10.35 10.34a8 8 0 0 0 11.32 11.32l24-24a8 8 0 0 0 0-11.32l-24-24a8 8 0 0 0-11.32 11.32L212.69 64h-11.75a72.12 72.12 0 0 0-58.59 30.15l-1.2 1.67A8 8 0 0 0 143 107m-30 42a8 8 0 0 0-11.16 1.86l-1.2 1.67A56.1 56.1 0 0 1 55.06 176H32a8 8 0 0 0 0 16h23.06a72.12 72.12 0 0 0 58.59-30.15l1.2-1.67A8 8 0 0 0 113 149"></svg:path></svg:g>`,
})
export class PhShuffleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleFillIcon],svg[ph-shuffle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.66 178.34a8 8 0 0 1 0 11.32l-24 24A8 8 0 0 1 200 208v-16a72.15 72.15 0 0 1-57.65-30.14l-41.72-58.4A56.1 56.1 0 0 0 55.06 80H32a8 8 0 0 1 0-16h23.06a72.12 72.12 0 0 1 58.59 30.15l41.72 58.4A56.08 56.08 0 0 0 200 176v-16a8 8 0 0 1 13.66-5.66ZM143 107a8 8 0 0 0 11.16-1.86l1.2-1.67A56.08 56.08 0 0 1 200 80v16a8 8 0 0 0 13.66 5.66l24-24a8 8 0 0 0 0-11.32l-24-24A8 8 0 0 0 200 48v16a72.15 72.15 0 0 0-57.65 30.14l-1.2 1.67A8 8 0 0 0 143 107m-30 42a8 8 0 0 0-11.16 1.86l-1.2 1.67A56.1 56.1 0 0 1 55.06 176H32a8 8 0 0 0 0 16h23.06a72.12 72.12 0 0 0 58.59-30.15l1.2-1.67A8 8 0 0 0 113 149"></svg:path>`,
})
export class PhShuffleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleLightIcon],svg[ph-shuffle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.24 179.76a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48-8.48L217.52 190h-16.58a70.16 70.16 0 0 1-57-29.31l-41.71-58.4A58.11 58.11 0 0 0 55.06 78H32a6 6 0 0 1 0-12h23.06a70.16 70.16 0 0 1 57 29.31l41.71 58.4A58.11 58.11 0 0 0 200.94 178h16.58l-13.76-13.76a6 6 0 0 1 8.48-8.48Zm-92.06-74.41a5.9 5.9 0 0 0 3.48 1.12a6 6 0 0 0 4.89-2.51l1.19-1.67A58.11 58.11 0 0 1 200.94 78h16.58l-13.76 13.76a6 6 0 1 0 8.48 8.48l24-24a6 6 0 0 0 0-8.48l-24-24a6 6 0 0 0-8.48 8.48L217.52 66h-16.58a70.16 70.16 0 0 0-57 29.31L142.78 97a6 6 0 0 0 1.4 8.35m-32.36 45.3a6 6 0 0 0-8.37 1.39l-1.19 1.67A58.11 58.11 0 0 1 55.06 178H32a6 6 0 0 0 0 12h23.06a70.16 70.16 0 0 0 57-29.31l1.19-1.67a6 6 0 0 0-1.43-8.37"></svg:path>`,
})
export class PhShuffleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleSimpleIcon],svg[ph-shuffle-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48v40a8 8 0 0 1-16 0V67.31L156.28 111A8 8 0 0 1 145 99.72L188.69 56H168a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m-8 112a8 8 0 0 0-8 8v20.69L53.66 42.34a8 8 0 0 0-11.32 11.32L188.69 200H168a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M99.72 145l-57.38 57.34a8 8 0 0 0 11.32 11.32L111 156.28A8 8 0 0 0 99.72 145"></svg:path>`,
})
export class PhShuffleSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleSimpleBoldIcon],svg[ph-shuffle-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 48v40a12 12 0 0 1-24 0V77l-31.23 31.2a12 12 0 0 1-17-17L179 60h-11a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12m-12 108a12 12 0 0 0-12 12v11L56.49 39.51a12 12 0 0 0-17 17L179 196h-11a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12m-116.77-8.2l-51.72 51.71a12 12 0 0 0 17 17l51.71-51.72a12 12 0 0 0-17-17Z"></svg:path>`,
})
export class PhShuffleSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleSimpleDuotoneIcon],svg[ph-shuffle-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m48 48l80 80l-80 80Zm80 80l80 80V48Z" opacity=".2"></svg:path><svg:path d="M216 48v40a8 8 0 0 1-16 0V67.31L156.28 111A8 8 0 0 1 145 99.72L188.69 56H168a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m-8 112a8 8 0 0 0-8 8v20.69L53.66 42.34a8 8 0 0 0-11.32 11.32L188.69 200H168a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M99.72 145l-57.38 57.34a8 8 0 0 0 11.32 11.32L111 156.28A8 8 0 0 0 99.72 145"></svg:path></svg:g>`,
})
export class PhShuffleSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleSimpleFillIcon],svg[ph-shuffle-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48v40a8 8 0 0 1-13.66 5.66L188 79.31L156.28 111A8 8 0 0 1 145 99.72L176.69 68l-14.35-14.34A8 8 0 0 1 168 40h40a8 8 0 0 1 8 8m-4.94 112.61a8 8 0 0 0-8.72 1.73L188 176.69L53.66 42.34a8 8 0 0 0-11.32 11.32L176.69 188l-14.35 14.34A8 8 0 0 0 168 216h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-4.94-7.39M99.72 145l-57.38 57.34a8 8 0 0 0 11.32 11.32L111 156.28A8 8 0 0 0 99.72 145"></svg:path>`,
})
export class PhShuffleSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleSimpleLightIcon],svg[ph-shuffle-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 48v40a6 6 0 0 1-12 0V62.48l-47.13 47.14a6 6 0 0 1-8.49-8.49L193.52 54H168a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m-6 114a6 6 0 0 0-6 6v25.52L52.24 43.76a6 6 0 0 0-8.48 8.48L193.52 202H168a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6m-106.87-15.62l-57.37 57.38a6 6 0 1 0 8.48 8.48l57.38-57.37a6 6 0 0 0-8.49-8.49"></svg:path>`,
})
export class PhShuffleSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleSimpleThinIcon],svg[ph-shuffle-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 48v40a4 4 0 0 1-8 0V57.66l-50.54 50.54a4 4 0 1 1-5.66-5.66L198.34 52H168a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m-4 116a4 4 0 0 0-4 4v30.34L50.83 45.17a4 4 0 0 0-5.66 5.66L198.34 204H168a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4m-105.46-16.2l-57.37 57.37a4 4 0 0 0 5.66 5.66l57.37-57.37a4 4 0 1 0-5.66-5.66"></svg:path>`,
})
export class PhShuffleSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleThinIcon],svg[ph-shuffle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.83 181.17a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L222.34 188h-21.4a68.15 68.15 0 0 1-55.34-28.48l-41.71-58.39A60.11 60.11 0 0 0 55.06 76H32a4 4 0 0 1 0-8h23.06a68.15 68.15 0 0 1 55.34 28.48l41.71 58.39A60.11 60.11 0 0 0 200.94 180h21.4l-17.17-17.17a4 4 0 0 1 5.66-5.66Zm-89.49-77.44a4 4 0 0 0 5.58-.93l1.19-1.67A60.11 60.11 0 0 1 200.94 76h21.4l-17.17 17.17a4 4 0 0 0 5.66 5.66l24-24a4 4 0 0 0 0-5.66l-24-24a4 4 0 0 0-5.66 5.66L222.34 68h-21.4a68.15 68.15 0 0 0-55.34 28.48l-1.19 1.67a4 4 0 0 0 .93 5.58m-34.68 48.54a4 4 0 0 0-5.58.93l-1.19 1.67A60.11 60.11 0 0 1 55.06 180H32a4 4 0 0 0 0 8h23.06a68.15 68.15 0 0 0 55.34-28.48l1.19-1.67a4 4 0 0 0-.93-5.58"></svg:path>`,
})
export class PhShuffleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSidebarIcon],svg[ph-sidebar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 152h16a8 8 0 0 0 0-16H40v-16h16a8 8 0 0 0 0-16H40V88h16a8 8 0 0 0 0-16H40V56h40v144H40Zm176 48H96V56h120z"></svg:path>`,
})
export class PhSidebarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSidebarBoldIcon],svg[ph-sidebar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20M44 104h28v20H44Zm28-44v20H44V60Zm-28 88h28v48H44Zm168 48H96V60h116Z"></svg:path>`,
})
export class PhSidebarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSidebarDuotoneIcon],svg[ph-sidebar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 48v160H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8Z" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 152h16a8 8 0 0 0 0-16H40v-16h16a8 8 0 0 0 0-16H40V88h16a8 8 0 0 0 0-16H40V56h40v144H40Zm176 48H96V56h120z"></svg:path></svg:g>`,
})
export class PhSidebarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSidebarFillIcon],svg[ph-sidebar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M64 152H48a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32H48a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32H48a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m152 112H88V56h128z"></svg:path>`,
})
export class PhSidebarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSidebarLightIcon],svg[ph-sidebar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M38 200v-50h18a6 6 0 0 0 0-12H38v-20h18a6 6 0 0 0 0-12H38V86h18a6 6 0 0 0 0-12H38V56a2 2 0 0 1 2-2h42v148H40a2 2 0 0 1-2-2m180 0a2 2 0 0 1-2 2H94V54h122a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhSidebarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSidebarSimpleIcon],svg[ph-sidebar-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 56h40v144H40Zm176 144H96V56h120z"></svg:path>`,
})
export class PhSidebarSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSidebarSimpleBoldIcon],svg[ph-sidebar-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20M44 60h32v136H44Zm168 136H100V60h112Z"></svg:path>`,
})
export class PhSidebarSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSidebarSimpleDuotoneIcon],svg[ph-sidebar-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 48v160H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8Z" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 56h40v144H40Zm176 144H96V56h120z"></svg:path></svg:g>`,
})
export class PhSidebarSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSidebarSimpleFillIcon],svg[ph-sidebar-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H88V56h128z"></svg:path>`,
})
export class PhSidebarSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSidebarSimpleLightIcon],svg[ph-sidebar-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M38 200V56a2 2 0 0 1 2-2h42v148H40a2 2 0 0 1-2-2m180 0a2 2 0 0 1-2 2H94V54h122a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhSidebarSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSidebarSimpleThinIcon],svg[ph-sidebar-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M36 200V56a4 4 0 0 1 4-4h44v152H40a4 4 0 0 1-4-4m184 0a4 4 0 0 1-4 4H92V52h124a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhSidebarSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSidebarThinIcon],svg[ph-sidebar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M36 200v-52h20a4 4 0 0 0 0-8H36v-24h20a4 4 0 0 0 0-8H36V84h20a4 4 0 0 0 0-8H36V56a4 4 0 0 1 4-4h44v152H40a4 4 0 0 1-4-4m184 0a4 4 0 0 1-4 4H92V52h124a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhSidebarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSigmaIcon],svg[ph-sigma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 72V56H80.65l53.6 67a8 8 0 0 1 0 10l-53.6 67H184v-16a8 8 0 0 1 16 0v24a8 8 0 0 1-8 8H64a8 8 0 0 1-6.25-13l60-75l-60-75A8 8 0 0 1 64 40h128a8 8 0 0 1 8 8v24a8 8 0 0 1-16 0"></svg:path>`,
})
export class PhSigmaIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSigmaBoldIcon],svg[ph-sigma-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 72V60H89l48.4 60.5a12 12 0 0 1 0 15L89 196h91v-12a12 12 0 0 1 24 0v24a12 12 0 0 1-12 12H64a12 12 0 0 1-9.37-19.5l58-72.5l-58-72.5A12 12 0 0 1 64 36h128a12 12 0 0 1 12 12v24a12 12 0 0 1-24 0"></svg:path>`,
})
export class PhSigmaBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSigmaDuotoneIcon],svg[ph-sigma-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 48v160H64l64-80l-64-80Z" opacity=".2"></svg:path><svg:path d="M184 72V56H80.65l53.6 67a8 8 0 0 1 0 10l-53.6 67H184v-16a8 8 0 0 1 16 0v24a8 8 0 0 1-8 8H64a8 8 0 0 1-6.25-13l60-75l-60-75A8 8 0 0 1 64 40h128a8 8 0 0 1 8 8v24a8 8 0 0 1-16 0"></svg:path></svg:g>`,
})
export class PhSigmaDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSigmaFillIcon],svg[ph-sigma-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-16 64a8 8 0 0 1-16 0V72H96l38.4 51.2a8 8 0 0 1 0 9.6L96 184h72v-16a8 8 0 0 1 16 0v24a8 8 0 0 1-8 8H80a8 8 0 0 1-6.4-12.8L118 128L73.6 68.8A8 8 0 0 1 80 56h96a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhSigmaFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSigmaLightIcon],svg[ph-sigma-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186 72V54H76.48l56.21 70.25a6 6 0 0 1 0 7.5L76.48 202H186v-18a6 6 0 0 1 12 0v24a6 6 0 0 1-6 6H64a6 6 0 0 1-4.69-9.75l61-76.25l-61-76.25A6 6 0 0 1 64 42h128a6 6 0 0 1 6 6v24a6 6 0 0 1-12 0"></svg:path>`,
})
export class PhSigmaLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSigmaThinIcon],svg[ph-sigma-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 72V52H72.32l58.8 73.5a4 4 0 0 1 0 5L72.32 204H188v-20a4 4 0 0 1 8 0v24a4 4 0 0 1-4 4H64a4 4 0 0 1-3.12-6.5l62-77.5l-62-77.5A4 4 0 0 1 64 44h128a4 4 0 0 1 4 4v24a4 4 0 0 1-8 0"></svg:path>`,
})
export class PhSigmaThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignInIcon],svg[ph-sign-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m141.66 133.66l-40 40a8 8 0 0 1-11.32-11.32L116.69 136H24a8 8 0 0 1 0-16h92.69L90.34 93.66a8 8 0 0 1 11.32-11.32l40 40a8 8 0 0 1 0 11.32M200 32h-64a8 8 0 0 0 0 16h56v160h-56a8 8 0 0 0 0 16h64a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhSignInIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignInBoldIcon],svg[ph-sign-in-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m144.49 136.49l-40 40a12 12 0 0 1-17-17L107 140H24a12 12 0 0 1 0-24h83L87.51 96.49a12 12 0 0 1 17-17l40 40a12 12 0 0 1-.02 17M200 28h-64a12 12 0 0 0 0 24h52v152h-52a12 12 0 0 0 0 24h64a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhSignInBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignInDuotoneIcon],svg[ph-sign-in-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v176H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16Z" opacity=".2"></svg:path><svg:path d="m141.66 133.66l-40 40a8 8 0 0 1-11.32-11.32L116.69 136H24a8 8 0 0 1 0-16h92.69L90.34 93.66a8 8 0 0 1 11.32-11.32l40 40a8 8 0 0 1 0 11.32M200 32h-64a8 8 0 0 0 0 16h56v160h-56a8 8 0 0 0 0 16h64a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhSignInDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignInFillIcon],svg[ph-sign-in-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m141.66 133.66l-40 40A8 8 0 0 1 88 168v-32H24a8 8 0 0 1 0-16h64V88a8 8 0 0 1 13.66-5.66l40 40a8 8 0 0 1 0 11.32M200 32h-64a8 8 0 0 0 0 16h56v160h-56a8 8 0 0 0 0 16h64a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhSignInFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignInLightIcon],svg[ph-sign-in-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m140.24 132.24l-40 40a6 6 0 0 1-8.48-8.48L121.51 134H24a6 6 0 0 1 0-12h97.51L91.76 92.24a6 6 0 0 1 8.48-8.48l40 40a6 6 0 0 1 0 8.48M200 34h-64a6 6 0 0 0 0 12h58v164h-58a6 6 0 0 0 0 12h64a6 6 0 0 0 6-6V40a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhSignInLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignInThinIcon],svg[ph-sign-in-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m138.83 130.83l-40 40a4 4 0 0 1-5.66-5.66L126.34 132H24a4 4 0 0 1 0-8h102.34L93.17 90.83a4 4 0 0 1 5.66-5.66l40 40a4 4 0 0 1 0 5.66M200 36h-64a4 4 0 0 0 0 8h60v168h-60a4 4 0 0 0 0 8h64a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhSignInThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignOutIcon],svg[ph-sign-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 216a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H56v160h56a8 8 0 0 1 8 8m109.66-93.66l-40-40a8 8 0 0 0-11.32 11.32L204.69 120H112a8 8 0 0 0 0 16h92.69l-26.35 26.34a8 8 0 0 0 11.32 11.32l40-40a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhSignOutIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignOutBoldIcon],svg[ph-sign-out-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 216a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H60v152h52a12 12 0 0 1 12 12m108.49-96.49l-40-40a12 12 0 0 0-17 17L195 116h-83a12 12 0 0 0 0 24h83l-19.52 19.51a12 12 0 0 0 17 17l40-40a12 12 0 0 0 .01-17"></svg:path>`,
})
export class PhSignOutBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignOutDuotoneIcon],svg[ph-sign-out-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v144a16 16 0 0 1-16 16H48V40h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M120 216a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H56v160h56a8 8 0 0 1 8 8m109.66-93.66l-40-40a8 8 0 0 0-11.32 11.32L204.69 120H112a8 8 0 0 0 0 16h92.69l-26.35 26.34a8 8 0 0 0 11.32 11.32l40-40a8 8 0 0 0 0-11.32"></svg:path></svg:g>`,
})
export class PhSignOutDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignOutFillIcon],svg[ph-sign-out-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 216a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H56v160h56a8 8 0 0 1 8 8m109.66-93.66l-40-40A8 8 0 0 0 176 88v32h-64a8 8 0 0 0 0 16h64v32a8 8 0 0 0 13.66 5.66l40-40a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhSignOutFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignOutLightIcon],svg[ph-sign-out-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M118 216a6 6 0 0 1-6 6H48a6 6 0 0 1-6-6V40a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H54v164h58a6 6 0 0 1 6 6m110.24-92.24l-40-40a6 6 0 0 0-8.48 8.48L209.51 122H112a6 6 0 0 0 0 12h97.51l-29.75 29.76a6 6 0 1 0 8.48 8.48l40-40a6 6 0 0 0 0-8.48"></svg:path>`,
})
export class PhSignOutLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignOutThinIcon],svg[ph-sign-out-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 216a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H52v168h60a4 4 0 0 1 4 4m110.83-90.83l-40-40a4 4 0 0 0-5.66 5.66L214.34 124H112a4 4 0 0 0 0 8h102.34l-33.17 33.17a4 4 0 0 0 5.66 5.66l40-40a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhSignOutThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignatureIcon],svg[ph-signature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 168H63.86c2.66-5.24 5.33-10.63 8-16.11c15 1.65 32.58-8.78 52.66-31.14c5 13.46 14.45 30.93 30.58 31.25c9.06.18 18.11-5.2 27.42-16.37C189.31 143.75 203.3 152 232 152a8 8 0 0 0 0-16c-30.43 0-39.43-10.45-40-16.11a7.67 7.67 0 0 0-5.46-7.75a8.14 8.14 0 0 0-9.25 3.49c-12.07 18.54-19.38 20.43-21.92 20.37c-8.26-.16-16.66-19.52-19.54-33.42a8 8 0 0 0-14.09-3.37c-20.2 25.34-33.74 33.87-42.17 36.08c8.49-18.87 14.83-35.44 18.89-49.39c6.82-23.44 7.32-39.83 1.51-50.1c-3-5.38-9.34-11.8-22.06-11.8c-16.06 0-28.73 15.18-34.77 41.65c-3.59 15.71-4.18 33.21-1.62 48s7.87 25.55 15.59 31.94c-3.73 7.72-7.53 15.26-11.23 22.41H24a8 8 0 0 0 0 16h13.41c-11.32 21-20.12 35.64-20.26 35.88a8 8 0 1 0 13.71 8.24c.15-.26 11.27-18.79 24.7-44.12H232a8 8 0 0 0 0-16M58.74 69.21C62.72 51.74 70.43 40 77.91 40c5.33 0 7.1 1.86 8.13 3.67c3 5.33 6.52 24.19-21.66 86.39c-8.26-11.28-11.07-37.06-5.64-60.85"></svg:path>`,
})
export class PhSignatureIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignatureBoldIcon],svg[ph-signature-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 164H70.38c2.2-4.42 4.41-8.94 6.59-13.52l.79-1.66c13.52-1.65 28.69-11.3 45.38-28.87c5.31 12 14 24.73 27.59 27.29c5.26 1 13.51.79 22.93-5.82a58 58 0 0 0 9-7.91C190.9 141.2 205.68 148 232 148a12 12 0 0 0 0-24c-31 0-35.42-10.49-36-12.38c.49-5.37-2.75-9.76-7.88-11.63s-11.17.78-14.22 5.46c-10 15.32-16.62 18.62-18.75 18.21c-4.88-.91-12.39-15.54-15.44-30.09a12 12 0 0 0-21.13-5c-10.3 12.92-19.16 21.79-26.47 27.56c21.19-52.94 17-72.22 11.37-82.25C98.48 24.91 89.41 20 78 20c-18.08 0-32.64 16.55-39 44.26c-3.45 15.1-4 31.81-1.46 45.85c2.65 14.71 8.36 25.7 16.68 32.23c-3.53 7.44-7.22 14.72-10.75 21.66H24a12 12 0 0 0 0 24h6.7c-9.7 17.67-16.85 29.6-17 29.81a12 12 0 1 0 20.56 12.38C34.91 229.15 45.23 212 58 188h174a12 12 0 0 0 0-24M62.43 69.6C65.77 55 72.45 44 78 44c3.71 0 4.29 1 4.64 1.64c1.43 2.53 6.55 17.07-17.44 72.78a44.6 44.6 0 0 1-4-12.56c-1.97-10.97-1.52-24.19 1.23-36.26"></svg:path>`,
})
export class PhSignatureBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignatureDuotoneIcon],svg[ph-signature-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M67.41 142.56C35.71 129.52 45.41 32.07 78 32c33.82.05 14 58.26-10.59 110.56" opacity=".2"></svg:path><svg:path d="M232 168H63.86c2.66-5.24 5.33-10.63 8-16.11c14.94 1.65 32.58-8.78 52.66-31.14c5 13.46 14.45 30.93 30.58 31.25c9.09.18 18.11-5.2 27.42-16.37C189.31 143.75 203.3 152 232 152a8 8 0 0 0 0-16c-30.43 0-39.43-10.45-40-16.11a7.67 7.67 0 0 0-5.46-7.75a8.14 8.14 0 0 0-9.25 3.49C165.23 134.17 158 136.06 155.38 136c-8.26-.16-16.66-19.52-19.54-33.42a8 8 0 0 0-14.09-3.37c-20.21 25.34-33.75 33.87-42.18 36.08c8.49-18.87 14.83-35.44 18.89-49.39c6.82-23.44 7.32-39.83 1.51-50.1c-3-5.38-9.34-11.8-22.06-11.8c-16.06 0-28.73 15.18-34.77 41.65c-3.59 15.71-4.18 33.21-1.62 48s7.87 25.55 15.59 31.94c-3.73 7.72-7.53 15.26-11.23 22.41H24a8 8 0 0 0 0 16h13.41c-11.32 21-20.12 35.64-20.26 35.88a8 8 0 1 0 13.71 8.24c.15-.26 11.27-18.79 24.7-44.12H232a8 8 0 0 0 0-16M58.74 69.21C62.72 51.74 70.43 40 77.91 40c5.33 0 7.1 1.86 8.13 3.67c3 5.33 6.52 24.19-21.66 86.39c-8.26-11.28-11.07-37.06-5.64-60.85"></svg:path></svg:g>`,
})
export class PhSignatureDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignatureFillIcon],svg[ph-signature-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80.3 120.26a58.3 58.3 0 0 1 .7-23.19C83.32 87 87.89 80 92.1 80c2.57 0 2.94.67 3.12 1c.88 1.61 4 10.93-12.63 46.52a29 29 0 0 1-2.29-7.26M232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16M84 160c2-3.59 3.94-7.32 5.9-11.14c10.34-.32 22.21-7.57 35.47-21.68c5 9.69 11.38 15.25 18.87 16.55c8 1.38 16-2.38 23.94-11.2c6 5.53 16.15 11.47 31.8 11.47a8 8 0 0 0 0-16c-17.91 0-24.3-10.88-24.84-11.86a7.83 7.83 0 0 0-6.54-4.51a8 8 0 0 0-7.25 3.6c-6.78 10-11.87 13.16-14.39 12.73c-4-.69-9.15-10-11.23-18a8 8 0 0 0-14-3c-8.88 10.94-16.3 17.79-22.13 21.66c15.8-35.65 13.27-48.59 9.6-55.3c-1.85-3.48-6.61-9.32-17.1-9.32c-12.44 0-22.42 11-26.69 29.46a75 75 0 0 0-.83 29.81c1.7 8.9 5.17 15.73 10.16 20.12c-3 5.81-6.09 11.43-9 16.61H56a8 8 0 0 0 0 16h.44c-4.26 7.12-7.11 11.59-7.18 11.69a8 8 0 0 0 13.48 8.62c.36-.55 5.47-8.57 12.29-20.31H200a8 8 0 0 0 0-16Z"></svg:path>`,
})
export class PhSignatureFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignatureLightIcon],svg[ph-signature-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 170H60.6c3.34-6.54 6.73-13.35 10.06-20.29a26.6 26.6 0 0 0 4.3.35c14.23 0 31.09-11.12 50.33-33.22c1 3 2.2 6.25 3.68 9.56c6.89 15.45 15.68 23.39 26.14 23.6h.39c8.81 0 17.71-5.77 27-17.58c5.83 8.26 19.12 17.58 49.5 17.58a6 6 0 0 0 0-12c-39.69 0-41.88-16.61-42-18.06a5.83 5.83 0 0 0-4.15-5.8a6.09 6.09 0 0 0-6.88 2.59c-12.16 18.67-20.07 21.33-23.63 21.27c-10.78-.21-19.11-23.68-21.46-35a6 6 0 0 0-10.57-2.53C104.64 123.86 88 137 76.18 137.92C100 85.84 107.23 52.7 98.23 36.78C95.44 31.86 89.66 26 77.91 26c-15 0-27 14.62-32.82 40.1c-6.81 29.84-2.97 65.9 14.53 78.9c-4.15 8.64-8.4 17.08-12.52 25H24a6 6 0 0 0 0 12h16.76c-12.11 22.58-21.76 38.66-21.9 38.91a6 6 0 1 0 10.28 6.18c.16-.26 11.56-19.27 25.21-45.09H232a6 6 0 0 0 0-12M56.79 68.77C61.05 50.08 69.34 38 77.91 38c6.4 0 8.64 2.51 9.87 4.69c4 7 6 28.15-22.88 91c-10.31-10.3-14.17-38.39-8.11-64.92"></svg:path>`,
})
export class PhSignatureLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignatureThinIcon],svg[ph-signature-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 172H57.32c4-7.83 8.18-16.11 12.21-24.56c15.14 3.55 34.13-8.06 56.54-34.59c3.67 12.5 12.53 34.83 29.08 35.15h.35c8.71 0 17.64-6.25 27.16-19.06c4.51 8.2 16.65 19.06 49.34 19.06a4 4 0 0 0 0-8c-42.88 0-44-19.24-44-20a4 4 0 0 0-7.35-2.18C168.74 136.1 160.42 140 155.48 140h-.18c-13-.25-21.29-26.52-23.38-36.61a4 4 0 0 0-7-1.69c-20.94 26.27-39.06 39.55-51.8 38.2c24.19-52.4 32.07-86.74 23.37-102.13C94 33.31 88.7 28 77.91 28C64.09 28 52.54 42.41 47 66.54A122.7 122.7 0 0 0 45.46 113c2.64 15.29 8.39 26.05 16.69 31.35c-4.58 9.6-9.3 19-13.84 27.68H24a4 4 0 0 0 0 8h20.1c-12.87 24.17-23.37 41.68-23.53 41.94a4 4 0 0 0 1.37 5.49A3.93 3.93 0 0 0 24 228a4 4 0 0 0 3.43-1.94c.16-.27 11.85-19.75 25.72-46.06H232a4 4 0 0 0 0-8M53.34 111.61a114.8 114.8 0 0 1 1.49-43.29C58.4 52.7 66.34 36 77.91 36c7.52 0 10.23 3.26 11.61 5.7C99 58.4 79.92 106 65.6 137c-5.84-4.31-10.14-13.17-12.26-25.39"></svg:path>`,
})
export class PhSignatureThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignpostIcon],svg[ph-signpost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 106.65L212.33 69.3a16 16 0 0 0-11.89-5.3H136V32a8 8 0 0 0-16 0v32H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h80v64a8 8 0 0 0 16 0v-64h64.44a16 16 0 0 0 11.89-5.3L246 117.35a8 8 0 0 0 0-10.7M200.44 144H40V80h160.44l28.8 32Z"></svg:path>`,
})
export class PhSignpostIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignpostBoldIcon],svg[ph-signpost-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248.92 104L215.3 66.62A20 20 0 0 0 200.44 60H140V32a12 12 0 0 0-24 0v28H40a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h76v60a12 12 0 0 0 24 0v-60h60.44a20 20 0 0 0 14.86-6.62L248.92 120a12 12 0 0 0 0-16m-50.26 36H44V84h154.66l25.2 28Z"></svg:path>`,
})
export class PhSignpostBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignpostDuotoneIcon],svg[ph-signpost-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m240 112l-33.62 37.35a8 8 0 0 1-5.94 2.65H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h160.44a8 8 0 0 1 5.94 2.65Z" opacity=".2"></svg:path><svg:path d="M246 106.65L212.33 69.3a16 16 0 0 0-11.89-5.3H136V32a8 8 0 0 0-16 0v32H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h80v64a8 8 0 0 0 16 0v-64h64.44a16 16 0 0 0 11.89-5.3L246 117.35a8 8 0 0 0 0-10.7M200.44 144H40V80h160.44l28.8 32Z"></svg:path></svg:g>`,
})
export class PhSignpostDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignpostFillIcon],svg[ph-signpost-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246 117.35l-33.67 37.35a16 16 0 0 1-11.89 5.3H136v64a8 8 0 0 1-16 0v-64H40a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h80V32a8 8 0 0 1 16 0v32h64.44a16 16 0 0 1 11.89 5.3L246 106.65a8 8 0 0 1 0 10.7"></svg:path>`,
})
export class PhSignpostFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignpostLightIcon],svg[ph-signpost-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244.46 108l-33.62-37.37a14 14 0 0 0-10.4-4.63H134V32a6 6 0 0 0-12 0v34H40a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h82v66a6 6 0 0 0 12 0v-66h66.44a14 14 0 0 0 10.4-4.63L244.46 116a6 6 0 0 0 0-8m-42.54 37.35a2 2 0 0 1-1.48.66H40a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h160.44a2 2 0 0 1 1.48.66l30 33.34Z"></svg:path>`,
})
export class PhSignpostLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignpostThinIcon],svg[ph-signpost-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243 109.32L209.36 72a12.06 12.06 0 0 0-8.92-4H132V32a4 4 0 0 0-8 0v36H40a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h84v68a4 4 0 0 0 8 0v-68h68.44a12.06 12.06 0 0 0 8.92-4L243 114.68a4 4 0 0 0 0-5.36m-39.56 37.36a4 4 0 0 1-3 1.32H40a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h160.44a4 4 0 0 1 3 1.32L234.62 112Z"></svg:path>`,
})
export class PhSignpostThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSimCardIcon],svg[ph-sim-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M200 216H56V40h92.69L200 91.31zm-24-104H80a8 8 0 0 0-8 8v72a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8v-72a8 8 0 0 0-8-8m-8 72h-16v-32a8 8 0 0 0-16 0v32h-16v-32a8 8 0 0 0-16 0v32H88v-56h80Z"></svg:path>`,
})
export class PhSimCardIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSimCardBoldIcon],svg[ph-sim-card-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.51l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49M196 212H60V44h87l49 49ZM88 112a12 12 0 0 0-12 12v60a12 12 0 0 0 12 12h80a12 12 0 0 0 12-12v-60a12 12 0 0 0-12-12Zm12 24h16v36h-16Zm56 36h-16v-36h16Z"></svg:path>`,
})
export class PhSimCardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSimCardDuotoneIcon],svg[ph-sim-card-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 120v72H80v-72Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M200 216H56V40h92.69L200 91.31zm-24-104H80a8 8 0 0 0-8 8v72a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8v-72a8 8 0 0 0-8-8m-8 72h-16v-32a8 8 0 0 0-16 0v32h-16v-32a8 8 0 0 0-16 0v32H88v-56h80Z"></svg:path></svg:g>`,
})
export class PhSimCardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSimCardFillIcon],svg[ph-sim-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M184 192a8 8 0 0 1-8 8h-16a4 4 0 0 1-4-4v-35.73a8.17 8.17 0 0 0-7.47-8.25a8 8 0 0 0-8.53 8v36a4 4 0 0 1-4 4h-16a4 4 0 0 1-4-4v-35.75a8.17 8.17 0 0 0-7.47-8.25a8 8 0 0 0-8.53 8v36a4 4 0 0 1-4 4H80a8 8 0 0 1-8-8V136a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhSimCardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSimCardLightIcon],svg[ph-sim-card-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M202 216a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h93.52L202 90.49ZM74 120v72a6 6 0 0 0 6 6h96a6 6 0 0 0 6-6v-72a6 6 0 0 0-6-6H80a6 6 0 0 0-6 6m12 6h84v60h-20v-34a6 6 0 0 0-12 0v34h-20v-34a6 6 0 0 0-12 0v34H86Z"></svg:path>`,
})
export class PhSimCardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSimCardThinIcon],svg[ph-sim-card-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M204 216a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h94.35L204 89.66ZM76 120v72a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4v-72a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4m8 4h88v64h-24v-36a4 4 0 0 0-8 0v36h-24v-36a4 4 0 0 0-8 0v36H84Z"></svg:path>`,
})
export class PhSimCardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSirenIcon],svg[ph-siren-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 16V8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0m80 32a8 8 0 0 0 5.66-2.34l8-8a8 8 0 0 0-11.32-11.32l-8 8A8 8 0 0 0 200 48M50.34 45.66a8 8 0 0 0 11.32-11.32l-8-8a8 8 0 0 0-11.32 11.32Zm87 26.45a8 8 0 1 0-2.64 15.78C153.67 91.08 168 108.32 168 128a8 8 0 0 0 16 0c0-27.4-20.07-51.43-46.68-55.89ZM232 176v24a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16v-24a16 16 0 0 1 16-16v-32a88 88 0 0 1 88.67-88c48.15.36 87.33 40.29 87.33 89v31a16 16 0 0 1 16 16M56 160h144v-31c0-40-32.05-72.71-71.45-73H128a72 72 0 0 0-72 72Zm160 40v-24H40v24z"></svg:path>`,
})
export class PhSirenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSirenBoldIcon],svg[ph-siren-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 20v-8a12 12 0 0 1 24 0v8a12 12 0 0 1-24 0m84 36a12 12 0 0 0 8.49-3.51l8-8a12 12 0 1 0-17-17l-8 8A12 12 0 0 0 200 56M47.51 52.49a12 12 0 0 0 17-17l-8-8a12 12 0 0 0-17 17ZM236 176v24a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20v-24a20 20 0 0 1 16-19.6V140a92 92 0 0 1 92-92h.71C179 48.38 220 90.1 220 141v15.4a20 20 0 0 1 16 19.6M60 140v16h136v-15c0-37.77-30.27-68.72-67.48-69H128a68 68 0 0 0-68 68m152 40H44v16h168Zm-75.6-66.72a28 28 0 0 1 18.32 18.32a12 12 0 0 0 22.9-7.2a52 52 0 0 0-34-34a12 12 0 0 0-7.2 22.9Z"></svg:path>`,
})
export class PhSirenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSirenDuotoneIcon],svg[ph-siren-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 129v39H48v-40a80 80 0 0 1 80.61-80c44.11.33 79.39 36.89 79.39 81" opacity=".2"></svg:path><svg:path d="M120 16V8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0m80 32a8 8 0 0 0 5.66-2.34l8-8a8 8 0 0 0-11.32-11.32l-8 8A8 8 0 0 0 200 48M50.34 45.66a8 8 0 0 0 11.32-11.32l-8-8a8 8 0 0 0-11.32 11.32Zm87 26.45a8 8 0 1 0-2.64 15.78C153.67 91.08 168 108.32 168 128a8 8 0 0 0 16 0c0-27.4-20.07-51.43-46.68-55.89ZM232 176v24a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16v-24a16 16 0 0 1 16-16v-32a88 88 0 0 1 88-88h.68c48.15.36 87.33 40.29 87.33 89v31A16 16 0 0 1 232 176M56 160h144v-31c0-40-32.05-72.71-71.45-73H128a72 72 0 0 0-72 72Zm160 40v-24H40v24z"></svg:path></svg:g>`,
})
export class PhSirenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSirenFillIcon],svg[ph-siren-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 16V8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0m80 32a8 8 0 0 0 5.66-2.34l8-8a8 8 0 0 0-11.32-11.32l-8 8A8 8 0 0 0 200 48M50.34 45.66a8 8 0 0 0 11.32-11.32l-8-8a8 8 0 0 0-11.32 11.32ZM232 176v24a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16v-24a16 16 0 0 1 16-16v-32a88 88 0 0 1 88.67-88c48.15.36 87.33 40.29 87.33 89v31a16 16 0 0 1 16 16m-97.32-88.11C153.67 91.08 168 108.32 168 128a8 8 0 0 0 16 0c0-27.4-20.07-51.43-46.68-55.89a8 8 0 1 0-2.64 15.78M216 200v-24H40v24z"></svg:path>`,
})
export class PhSirenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSirenLightIcon],svg[ph-siren-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 16V8a6 6 0 0 1 12 0v8a6 6 0 0 1-12 0m78 30a6 6 0 0 0 4.24-1.76l8-8a6 6 0 1 0-8.48-8.48l-8 8A6 6 0 0 0 200 46M51.76 44.24a6 6 0 0 0 8.48-8.48l-8-8a6 6 0 0 0-8.48 8.48ZM137 74.08a6 6 0 1 0-2 11.84c20 3.34 35 21.44 35 42.08a6 6 0 0 0 12 0c0-26.43-19.35-49.61-45-53.92M230 176v24a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14v-24a14 14 0 0 1 14-14h2v-34a86 86 0 0 1 86-86h.65c47.06.35 85.35 39.38 85.35 87v33h2a14 14 0 0 1 14 14M54 162h148v-33c0-41-32.94-74.7-73.44-75H128a74 74 0 0 0-74 74Zm164 14a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhSirenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSirenThinIcon],svg[ph-siren-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 16V8a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0m76 28a4 4 0 0 0 2.83-1.17l8-8a4 4 0 1 0-5.66-5.66l-8 8A4 4 0 0 0 200 44M53.17 42.83a4 4 0 0 0 5.66-5.66l-8-8a4 4 0 0 0-5.66 5.66Zm83.49 33.22a4 4 0 0 0-1.32 7.9C156.24 87.45 172 106.39 172 128a4 4 0 0 0 8 0c0-25.47-18.63-47.8-43.34-51.95M228 176v24a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h4v-36a84 84 0 0 1 84-84h.64c46 .34 83.36 38.47 83.36 85v35h4a12 12 0 0 1 12 12M52 164h152v-35c0-42.15-33.83-76.69-75.42-77A76 76 0 0 0 52 128Zm168 12a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhSirenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSketchLogoIcon],svg[ph-sketch-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246 98.73l-56-64a8 8 0 0 0-6-2.73H72a8 8 0 0 0-6 2.73l-56 64a8 8 0 0 0 .17 10.73l112 120a8 8 0 0 0 11.7 0l112-120a8 8 0 0 0 .13-10.73M222.37 96H180l-36-48h36.37ZM74.58 112l30.13 75.33L34.41 112Zm89.6 0L128 202.46L91.82 112ZM96 96l32-42.67L160 96Zm85.42 16h40.17l-70.3 75.33ZM75.63 48H112L76 96H33.63Z"></svg:path>`,
})
export class PhSketchLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSketchLogoBoldIcon],svg[ph-sketch-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249 96.1l-56-64a12 12 0 0 0-9-4.1H72a12 12 0 0 0-9 4.1l-56 64a12 12 0 0 0 .26 16.09l112 120a12 12 0 0 0 17.54 0l112-120a12 12 0 0 0 .2-16.09M213.55 92H182l-30-40h26.55ZM71.88 116l21.19 53l-49.46-53Zm86.4 0L128 191.69L97.72 116ZM104 92l24-32l24 32Zm80.12 24h28.27l-49.46 53ZM77.45 52H104L74 92H42.45Z"></svg:path>`,
})
export class PhSketchLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSketchLogoDuotoneIcon],svg[ph-sketch-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 104L128 224L80 104l48-64h56Z" opacity=".2"></svg:path><svg:path d="m246 98.73l-56-64a8 8 0 0 0-6-2.73H72a8 8 0 0 0-6 2.73l-56 64a8 8 0 0 0 .17 10.73l112 120a8 8 0 0 0 11.7 0l112-120a8 8 0 0 0 .13-10.73M222.37 96H180l-36-48h36.37ZM74.58 112l30.13 75.33L34.41 112Zm89.6 0L128 202.46L91.82 112ZM96 96l32-42.67L160 96Zm85.42 16h40.17l-70.3 75.33ZM75.63 48H112L76 96H33.63Z"></svg:path></svg:g>`,
})
export class PhSketchLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSketchLogoFillIcon],svg[ph-sketch-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246 98.73l-56-64a8 8 0 0 0-6-2.73H72a8 8 0 0 0-6 2.73l-56 64a8 8 0 0 0 .17 10.73l112 120a8 8 0 0 0 11.7 0l112-120a8 8 0 0 0 .13-10.73M222.37 96H180l-36-48h36.37ZM74.58 112l30.13 75.33L34.41 112Zm106.84 0h40.17l-70.3 75.33ZM75.63 48H112L76 96H33.63Z"></svg:path>`,
})
export class PhSketchLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSketchLogoLightIcon],svg[ph-sketch-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244.52 100.05l-56-64A6 6 0 0 0 184 34H72a6 6 0 0 0-4.52 2l-56 64a6 6 0 0 0 .13 8l112 120a6 6 0 0 0 8.78 0l112-120a6 6 0 0 0 .13-7.95M75.94 110l34.6 86.49L29.81 110Zm91.2 0L128 207.84L88.86 110ZM92 98l36-48l36 48Zm88.06 12h46.13l-80.73 86.49Zm46.72-12H179l-39-52h41.28ZM74.72 46H116L77 98H29.22Z"></svg:path>`,
})
export class PhSketchLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSketchLogoThinIcon],svg[ph-sketch-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243 101.37l-56-64a4 4 0 0 0-3-1.37H72a4 4 0 0 0-3 1.37l-56 64a4 4 0 0 0 .09 5.36l112 120a4 4 0 0 0 5.84 0l112-120a4 4 0 0 0 .07-5.36M77.29 108l39.07 97.66L25.2 108Zm92.8 0L128 213.23L85.91 108ZM88 100l40-53.33L168 100Zm90.71 8h52.09l-91.16 97.66Zm52.47-8H178l-42-56h46.18ZM73.82 44H120l-42 56H24.82Z"></svg:path>`,
})
export class PhSketchLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipBackIcon],svg[ph-skip-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M199.81 34a16 16 0 0 0-16.24.43L64 109.23V40a8 8 0 0 0-16 0v176a8 8 0 0 0 16 0v-69.23l119.57 74.78A15.95 15.95 0 0 0 208 208.12V47.88A15.86 15.86 0 0 0 199.81 34M192 208L64.16 128L192 48.07Z"></svg:path>`,
})
export class PhSkipBackIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipBackBoldIcon],svg[ph-skip-back-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.75 30.52a20 20 0 0 0-20.3.53L68 102V40a12 12 0 0 0-24 0v176a12 12 0 0 0 24 0v-62l113.45 71A20 20 0 0 0 212 208.12V47.88a19.86 19.86 0 0 0-10.25-17.36M188 200.73L71.7 128L188 55.27Z"></svg:path>`,
})
export class PhSkipBackBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipBackCircleIcon],svg[ph-skip-back-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m35.88-135a8 8 0 0 0-8.12.22L104 113.57V88a8 8 0 0 0-16 0v80a8 8 0 0 0 16 0v-25.57l51.76 32.35A8 8 0 0 0 168 168V88a8 8 0 0 0-4.12-7M152 153.57L111.09 128L152 102.43Z"></svg:path>`,
})
export class PhSkipBackCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipBackCircleBoldIcon],svg[ph-skip-back-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m37.82-134.5a12 12 0 0 0-12.18.32L108 106.35V88a12 12 0 0 0-24 0v80a12 12 0 0 0 24 0v-18.35l45.64 28.53A12 12 0 0 0 172 168V88a12 12 0 0 0-6.18-10.5M148 146.35L118.64 128L148 109.65Z"></svg:path>`,
})
export class PhSkipBackCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipBackCircleDuotoneIcon],svg[ph-skip-back-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32a96 96 0 1 0 96 96a96 96 0 0 0-96-96m32 136l-64-40l64-40Z" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m35.88-135a8 8 0 0 0-8.12.22L104 113.57V88a8 8 0 0 0-16 0v80a8 8 0 0 0 16 0v-25.57l51.76 32.35A8 8 0 0 0 168 168V88a8 8 0 0 0-4.12-7M152 153.57L111.09 128L152 102.43Z"></svg:path></svg:g>`,
})
export class PhSkipBackCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipBackCircleFillIcon],svg[ph-skip-back-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 144a8 8 0 0 1-12.65 6.51L104 137.83V168a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0v30.17l51.35-36.68A8 8 0 0 1 168 88Z"></svg:path>`,
})
export class PhSkipBackCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipBackCircleLightIcon],svg[ph-skip-back-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m34.91-135.25a6 6 0 0 0-6.09.16L102 117.17V88a6 6 0 0 0-12 0v80a6 6 0 0 0 12 0v-29.17l54.82 34.26A6 6 0 0 0 166 168V88a6 6 0 0 0-3.09-5.25M154 157.17L107.32 128L154 98.83Z"></svg:path>`,
})
export class PhSkipBackCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipBackCircleThinIcon],svg[ph-skip-back-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m33.94-135.5a4 4 0 0 0-4.06.11L100 120.78V88a4 4 0 0 0-8 0v80a4 4 0 0 0 8 0v-32.78l57.88 36.17a4 4 0 0 0 2.12.61a4.06 4.06 0 0 0 1.94-.5A4 4 0 0 0 164 168V88a4 4 0 0 0-2.06-3.5M156 160.78L103.55 128L156 95.22Z"></svg:path>`,
})
export class PhSkipBackCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipBackDuotoneIcon],svg[ph-skip-back-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 47.88v160.24a8 8 0 0 1-12.19 6.65L59.7 134.65a7.83 7.83 0 0 1 0-13.3l128.11-80.12A8 8 0 0 1 200 47.88" opacity=".2"></svg:path><svg:path d="M199.81 34a16 16 0 0 0-16.24.43L64 109.23V40a8 8 0 0 0-16 0v176a8 8 0 0 0 16 0v-69.23l119.57 74.78A15.95 15.95 0 0 0 208 208.12V47.88A15.86 15.86 0 0 0 199.81 34M192 208L64.16 128L192 48.07Z"></svg:path></svg:g>`,
})
export class PhSkipBackDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipBackFillIcon],svg[ph-skip-back-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 47.88v160.24a16 16 0 0 1-24.43 13.43L64 146.77V216a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0v69.23l119.57-74.78A15.95 15.95 0 0 1 208 47.88"></svg:path>`,
})
export class PhSkipBackFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipBackLightIcon],svg[ph-skip-back-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.84 35.77a14 14 0 0 0-14.21.37L62 112.83V40a6 6 0 0 0-12 0v176a6 6 0 0 0 12 0v-72.84l122.63 76.7a14 14 0 0 0 14.21.37a13.69 13.69 0 0 0 7.16-12.11V47.88a13.69 13.69 0 0 0-7.16-12.11M194 208.12a1.79 1.79 0 0 1-1 1.62a2 2 0 0 1-2-.05L62.88 129.56a1.82 1.82 0 0 1 0-3.12L191 46.31a2 2 0 0 1 1-.31a2.1 2.1 0 0 1 1 .26a1.79 1.79 0 0 1 1 1.62Z"></svg:path>`,
})
export class PhSkipBackLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipBackThinIcon],svg[ph-skip-back-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M197.87 37.52a12 12 0 0 0-12.18.32L60 116.44V40a4 4 0 0 0-8 0v176a4 4 0 0 0 8 0v-76.44l125.69 78.6a12 12 0 0 0 12.18.32a11.69 11.69 0 0 0 6.13-10.36V47.88a11.69 11.69 0 0 0-6.13-10.36M196 208.12a3.8 3.8 0 0 1-2 3.37a4 4 0 0 1-4.06-.11L61.82 131.26a3.83 3.83 0 0 1 0-6.52l128.12-80.12a4 4 0 0 1 2.11-.62a4 4 0 0 1 1.95.51a3.8 3.8 0 0 1 2 3.37Z"></svg:path>`,
})
export class PhSkipBackThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardIcon],svg[ph-skip-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 32a8 8 0 0 0-8 8v69.23L72.43 34.45A15.95 15.95 0 0 0 48 47.88v160.24a16 16 0 0 0 24.43 13.43L192 146.77V216a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8M64 207.93V48.05l127.84 80Z"></svg:path>`,
})
export class PhSkipForwardIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardBoldIcon],svg[ph-skip-forward-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 28a12 12 0 0 0-12 12v62L74.55 31A20 20 0 0 0 44 47.88v160.24A20 20 0 0 0 74.55 225L188 154v62a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12M68 200.73V55.27L184.3 128Z"></svg:path>`,
})
export class PhSkipForwardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardCircleIcon],svg[ph-skip-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m32-136a8 8 0 0 0-8 8v25.57l-51.76-32.35A8 8 0 0 0 88 88v80a8 8 0 0 0 12.24 6.78L152 142.43V168a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m-56 73.57v-51.14L144.91 128Z"></svg:path>`,
})
export class PhSkipForwardCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardCircleBoldIcon],svg[ph-skip-forward-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m32-136a12 12 0 0 0-12 12v18.35l-45.64-28.53A12 12 0 0 0 84 88v80a12 12 0 0 0 18.36 10.18L148 149.65V168a12 12 0 0 0 24 0V88a12 12 0 0 0-12-12m-52 70.35v-36.7L137.36 128Z"></svg:path>`,
})
export class PhSkipForwardCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardCircleDuotoneIcon],svg[ph-skip-forward-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32a96 96 0 1 0 96 96a96 96 0 0 0-96-96M96 168V88l64 40Z" opacity=".2"></svg:path><svg:path d="M160 80a8 8 0 0 0-8 8v25.57l-51.76-32.35A8 8 0 0 0 88 88v80a8 8 0 0 0 12.24 6.78L152 142.43V168a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m-56 73.57v-51.14L144.91 128ZM128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88"></svg:path></svg:g>`,
})
export class PhSkipForwardCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardCircleFillIcon],svg[ph-skip-forward-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 144a8 8 0 0 1-16 0v-30.17l-51.35 36.68A8 8 0 0 1 88 168V88a8 8 0 0 1 12.65-6.51L152 118.17V88a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhSkipForwardCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardCircleLightIcon],svg[ph-skip-forward-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m32-136a6 6 0 0 0-6 6v29.17L99.18 82.91A6 6 0 0 0 90 88v80a6 6 0 0 0 9.18 5.09L154 138.83V168a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6m-58 75.17V98.83L148.68 128Z"></svg:path>`,
})
export class PhSkipForwardCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardCircleThinIcon],svg[ph-skip-forward-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m32-136a4 4 0 0 0-4 4v32.78L98.12 84.61A4 4 0 0 0 92 88v80a4 4 0 0 0 2.06 3.5a4.06 4.06 0 0 0 1.94.5a4 4 0 0 0 2.12-.61L156 135.22V168a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4m-60 76.78V95.22L152.45 128Z"></svg:path>`,
})
export class PhSkipForwardCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardDuotoneIcon],svg[ph-skip-forward-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M196.3 134.65L68.19 214.77A8 8 0 0 1 56 208.12V47.88a8 8 0 0 1 12.19-6.65l128.11 80.12a7.83 7.83 0 0 1 0 13.3" opacity=".2"></svg:path><svg:path d="M200 32a8 8 0 0 0-8 8v69.23L72.43 34.45A15.95 15.95 0 0 0 48 47.88v160.24a16 16 0 0 0 24.43 13.43L192 146.77V216a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8M64 207.93V48.05l127.84 80Z"></svg:path></svg:g>`,
})
export class PhSkipForwardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardFillIcon],svg[ph-skip-forward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40v176a8 8 0 0 1-16 0v-69.23L72.43 221.55A15.95 15.95 0 0 1 48 208.12V47.88a15.95 15.95 0 0 1 24.43-13.43L192 109.23V40a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhSkipForwardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardLightIcon],svg[ph-skip-forward-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 34a6 6 0 0 0-6 6v72.84L71.37 36.14a14 14 0 0 0-14.21-.37A13.69 13.69 0 0 0 50 47.88v160.24a13.69 13.69 0 0 0 7.16 12.11a14 14 0 0 0 14.21-.37L194 143.17V216a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6m-6.88 95.56L65 209.69a2 2 0 0 1-2 .05a1.79 1.79 0 0 1-1-1.62V47.88a1.79 1.79 0 0 1 1-1.62a2.1 2.1 0 0 1 1-.26a2 2 0 0 1 1 .31l128.12 80.13a1.82 1.82 0 0 1 0 3.12"></svg:path>`,
})
export class PhSkipForwardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardThinIcon],svg[ph-skip-forward-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 36a4 4 0 0 0-4 4v76.44L70.31 37.84a12 12 0 0 0-12.18-.32A11.69 11.69 0 0 0 52 47.88v160.24a11.69 11.69 0 0 0 6.13 10.36a12 12 0 0 0 12.18-.32L196 139.56V216a4 4 0 0 0 8 0V40a4 4 0 0 0-4-4m-5.82 95.26L66.06 211.38a4 4 0 0 1-4.06.11a3.8 3.8 0 0 1-2-3.37V47.88a3.8 3.8 0 0 1 2-3.37a4 4 0 0 1 2-.51a4 4 0 0 1 2.11.62l128.12 80.12a3.83 3.83 0 0 1 0 6.52Z"></svg:path>`,
})
export class PhSkipForwardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkullIcon],svg[ph-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 104a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72-40a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12M128 16C70.65 16 24 60.86 24 116c0 34.1 18.27 66 48 84.28V216a16 16 0 0 0 16 16h80a16 16 0 0 0 16-16v-15.72C213.73 182 232 150.1 232 116c0-55.14-46.65-100-104-100m44.12 172.69a8 8 0 0 0-4.12 7V216h-16v-24a8 8 0 0 0-16 0v24h-16v-24a8 8 0 0 0-16 0v24H88v-20.31a8 8 0 0 0-4.12-7C56.81 173.69 40 145.84 40 116c0-46.32 39.48-84 88-84s88 37.68 88 84c0 29.83-16.81 57.69-43.88 72.69"></svg:path>`,
})
export class PhSkullIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkullBoldIcon],svg[ph-skull-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 132a24 24 0 1 1-24-24a24 24 0 0 1 24 24m48-24a24 24 0 1 0 24 24a24 24 0 0 0-24-24m72 8c0 29.85-13.05 57.78-36 77.52V216a20 20 0 0 1-20 20H76a20 20 0 0 1-20-20v-22.48C33 173.78 20 145.85 20 116C20 58.65 68.45 12 128 12s108 46.65 108 104m-24 0c0-44.11-37.68-80-84-80s-84 35.89-84 80c0 24.31 11.41 47 31.31 62.3a12 12 0 0 1 4.69 9.52V212h16v-20a12 12 0 0 1 24 0v20h16v-20a12 12 0 0 1 24 0v20h16v-24.18a12 12 0 0 1 4.69-9.51C200.59 163 212 140.31 212 116"></svg:path>`,
})
export class PhSkullBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkullDuotoneIcon],svg[ph-skull-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 24c-53 0-96 41.19-96 92c0 34.05 19.31 63.78 48 79.69V216a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-20.31c28.69-15.91 48-45.64 48-79.69c0-50.81-43-92-96-92M92 152a20 20 0 1 1 20-20a20 20 0 0 1-20 20m72 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20" opacity=".2"></svg:path><svg:path d="M92 104a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72-40a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12M128 16C70.65 16 24 60.86 24 116c0 34.1 18.27 66 48 84.28V216a16 16 0 0 0 16 16h80a16 16 0 0 0 16-16v-15.72C213.73 182 232 150.1 232 116c0-55.14-46.65-100-104-100m44.12 172.69a8 8 0 0 0-4.12 7V216h-16v-24a8 8 0 0 0-16 0v24h-16v-24a8 8 0 0 0-16 0v24H88v-20.31a8 8 0 0 0-4.12-7C56.81 173.69 40 145.84 40 116c0-46.32 39.48-84 88-84s88 37.68 88 84c0 29.83-16.81 57.69-43.88 72.69"></svg:path></svg:g>`,
})
export class PhSkullDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkullFillIcon],svg[ph-skull-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 16C70.65 16 24 60.86 24 116c0 34.1 18.27 66 48 84.28V216a16 16 0 0 0 16 16h8a4 4 0 0 0 4-4v-27.73a8.17 8.17 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v28a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-27.75a8.17 8.17 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v28a4 4 0 0 0 4 4h8a16 16 0 0 0 16-16v-15.74C213.73 182 232 150.1 232 116c0-55.14-46.65-100-104-100M92 152a20 20 0 1 1 20-20a20 20 0 0 1-20 20m72 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhSkullFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkullLightIcon],svg[ph-skull-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 106a26 26 0 1 0 26 26a26 26 0 0 0-26-26m0 40a14 14 0 1 1 14-14a14 14 0 0 1-14 14m72-40a26 26 0 1 0 26 26a26 26 0 0 0-26-26m0 40a14 14 0 1 1 14-14a14 14 0 0 1-14 14M128 18C71.76 18 26 62 26 116c0 33.77 18.3 65.31 48 83.15V216a14 14 0 0 0 14 14h80a14 14 0 0 0 14-14v-16.85c29.7-17.84 48-49.38 48-83.15c0-54-45.76-98-102-98m45.09 172.44a6 6 0 0 0-3.09 5.25V216a2 2 0 0 1-2 2h-18v-26a6 6 0 0 0-12 0v26h-20v-26a6 6 0 0 0-12 0v26H88a2 2 0 0 1-2-2v-20.31a6 6 0 0 0-3.09-5.25C55.21 175.09 38 146.56 38 116c0-47.42 40.37-86 90-86s90 38.58 90 86c0 30.56-17.21 59.09-44.91 74.44"></svg:path>`,
})
export class PhSkullLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkullThinIcon],svg[ph-skull-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 108a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 40a16 16 0 1 1 16-16a16 16 0 0 1-16 16m72-40a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 40a16 16 0 1 1 16-16a16 16 0 0 1-16 16M128 20C72.86 20 28 63.07 28 116c0 33.43 18.33 64.64 48 82v18a12 12 0 0 0 12 12h80a12 12 0 0 0 12-12v-18c29.67-17.38 48-48.59 48-82c0-52.93-44.86-96-100-96m46.06 172.19a4 4 0 0 0-2.06 3.5V216a4 4 0 0 1-4 4h-20v-28a4 4 0 0 0-8 0v28h-24v-28a4 4 0 0 0-8 0v28H88a4 4 0 0 1-4-4v-20.31a4 4 0 0 0-2.06-3.5C53.6 176.48 36 147.29 36 116c0-48.52 41.27-88 92-88s92 39.48 92 88c0 31.29-17.6 60.48-45.94 76.19"></svg:path>`,
})
export class PhSkullThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkypeLogoIcon],svg[ph-skype-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 152c0 17.64-17.94 32-40 32s-40-14.36-40-32a8 8 0 0 1 16 0c0 8.67 11 16 24 16s24-7.33 24-16c0-9.48-8.61-13-26.88-18.26c-15.75-4.54-35.34-10.19-35.34-29.74c0-18.24 16.43-32 38.22-32c15.72 0 29.18 7.3 35.12 19a8 8 0 1 1-14.27 7.22C145.64 91.94 137.65 88 128 88c-12.67 0-22.22 6.88-22.22 16c0 7 9 10.1 23.77 14.36C145.78 123 168 129.45 168 152m64 24a56.06 56.06 0 0 1-56 56a55.4 55.4 0 0 1-31.17-9.47A96.09 96.09 0 0 1 33.47 111.17A55.4 55.4 0 0 1 24 80a56.06 56.06 0 0 1 56-56a55.4 55.4 0 0 1 31.17 9.47a96.09 96.09 0 0 1 111.36 111.36A55.4 55.4 0 0 1 232 176m-16 0a39.6 39.6 0 0 0-8.32-24.42a8 8 0 0 1-1.49-6.58A80.07 80.07 0 0 0 111 49.81a8 8 0 0 1-6.58-1.49A39.6 39.6 0 0 0 80 40a40 40 0 0 0-40 40a39.6 39.6 0 0 0 8.32 24.42a8 8 0 0 1 1.49 6.58A80.07 80.07 0 0 0 145 206.19a8 8 0 0 1 6.58 1.49A39.6 39.6 0 0 0 176 216a40 40 0 0 0 40-40"></svg:path>`,
})
export class PhSkypeLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkypeLogoBoldIcon],svg[ph-skype-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 152c0 20.19-19.33 36-44 36c-21.26 0-39.46-12.35-43.27-29.38a12 12 0 0 1 23.42-5.24C109.3 158.49 117.21 164 128 164c9.44 0 20-5.13 20-12c0-6.37-6.29-9.32-24-14.42c-16.14-4.65-38.23-11-38.23-33.58c0-20.52 18.15-36 42.22-36c17.24 0 32.06 8.14 38.69 21.24a12 12 0 1 1-21.41 10.84C142.8 95.17 136 92 128 92c-10.22 0-18.22 5.27-18.22 12c0 1.09 0 2.21 3.28 4.17c4.18 2.48 11 4.45 17.6 6.35c8.75 2.52 17.8 5.13 25.38 9.86C169.23 132.61 172 143.94 172 152m64 24a60.07 60.07 0 0 1-60 60a59.36 59.36 0 0 1-32-9.27a101 101 0 0 1-16 1.27A100.11 100.11 0 0 1 28 128a101 101 0 0 1 1.27-16A59.36 59.36 0 0 1 20 80a60.07 60.07 0 0 1 60-60a59.36 59.36 0 0 1 32.05 9.27A101 101 0 0 1 128 28a100.11 100.11 0 0 1 100 100a101 101 0 0 1-1.27 16a59.36 59.36 0 0 1 9.27 32m-24 0a35.63 35.63 0 0 0-7.49-22a12 12 0 0 1-2.23-9.87a76.07 76.07 0 0 0-90.43-90.43a12 12 0 0 1-9.85-2.21A35.63 35.63 0 0 0 80 44a36 36 0 0 0-36 36a35.63 35.63 0 0 0 7.49 22a12 12 0 0 1 2.23 9.87a76.07 76.07 0 0 0 90.43 90.43a12 12 0 0 1 9.87 2.23A35.63 35.63 0 0 0 176 212a36 36 0 0 0 36-36"></svg:path>`,
})
export class PhSkypeLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkypeLogoDuotoneIcon],svg[ph-skype-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 176a48 48 0 0 1-77.31 38A88.07 88.07 0 0 1 42 109.31A48 48 0 0 1 109.31 42A88.07 88.07 0 0 1 214 146.69A47.77 47.77 0 0 1 224 176" opacity=".2"></svg:path><svg:path d="M168 152c0 17.64-17.94 32-40 32s-40-14.36-40-32a8 8 0 0 1 16 0c0 8.67 11 16 24 16s24-7.33 24-16c0-9.48-8.61-13-26.88-18.26c-15.75-4.54-35.34-10.19-35.34-29.74c0-18.24 16.43-32 38.22-32c15.72 0 29.18 7.3 35.12 19a8 8 0 1 1-14.27 7.22C145.64 91.94 137.65 88 128 88c-12.67 0-22.22 6.88-22.22 16c0 7 9 10.1 23.77 14.36C145.78 123 168 129.45 168 152m64 24a56.06 56.06 0 0 1-56 56a55.4 55.4 0 0 1-31.17-9.47A96.09 96.09 0 0 1 33.47 111.17A55.4 55.4 0 0 1 24 80a56.06 56.06 0 0 1 56-56a55.4 55.4 0 0 1 31.17 9.47a96.09 96.09 0 0 1 111.36 111.36A55.4 55.4 0 0 1 232 176m-16 0a39.6 39.6 0 0 0-8.32-24.42a8 8 0 0 1-1.49-6.58A80.07 80.07 0 0 0 111 49.81a8 8 0 0 1-6.58-1.49A39.6 39.6 0 0 0 80 40a40 40 0 0 0-40 40a39.6 39.6 0 0 0 8.32 24.42a8 8 0 0 1 1.49 6.58A80.07 80.07 0 0 0 145 206.19a8 8 0 0 1 6.58 1.49A39.6 39.6 0 0 0 176 216a40 40 0 0 0 40-40"></svg:path></svg:g>`,
})
export class PhSkypeLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkypeLogoFillIcon],svg[ph-skype-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222.53 144.83A96.09 96.09 0 0 0 111.17 33.47A55.4 55.4 0 0 0 80 24a56.06 56.06 0 0 0-56 56a55.4 55.4 0 0 0 9.47 31.17a96.09 96.09 0 0 0 111.36 111.36A55.4 55.4 0 0 0 176 232a56.06 56.06 0 0 0 56-56a55.4 55.4 0 0 0-9.47-31.17M128 184c-22.06 0-40-14.36-40-32a8 8 0 0 1 16 0c0 8.67 11 16 24 16s24-7.33 24-16c0-9.48-8.61-13-26.88-18.26c-15.75-4.54-35.34-10.19-35.34-29.74c0-18.24 16.43-32 38.22-32c15.72 0 29.18 7.3 35.12 19a8 8 0 1 1-14.27 7.22C145.64 91.94 137.65 88 128 88c-12.67 0-22.22 6.88-22.22 16c0 7 9 10.1 23.77 14.36C145.78 123 168 129.45 168 152c0 17.64-17.94 32-40 32"></svg:path>`,
})
export class PhSkypeLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkypeLogoLightIcon],svg[ph-skype-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 152c0 16.54-17.05 30-38 30s-38-13.46-38-30a6 6 0 0 1 12 0c0 9.76 11.91 18 26 18s26-8.24 26-18c0-11.21-10.7-15.1-28.33-20.18c-15.89-4.58-33.89-9.77-33.89-27.82c0-17.1 15.57-30 36.22-30c15 0 27.74 6.88 33.34 18a6 6 0 0 1-10.71 5.42C147.08 90.36 138.41 86 128 86c-13.81 0-24.22 7.74-24.22 18c0 8.41 9.52 11.76 25.21 16.29C145.48 125 166 131 166 152m64 24a54.06 54.06 0 0 1-54 54a53.43 53.43 0 0 1-30.72-9.59A94.06 94.06 0 0 1 35.59 110.72A53.43 53.43 0 0 1 26 80a54.06 54.06 0 0 1 54-54a53.43 53.43 0 0 1 30.72 9.59a94.06 94.06 0 0 1 109.69 109.69A53.43 53.43 0 0 1 230 176m-12 0a41.57 41.57 0 0 0-8.74-25.65a6 6 0 0 1-1.11-4.93a82.09 82.09 0 0 0-97.57-97.57a6 6 0 0 1-4.93-1.11A41.57 41.57 0 0 0 80 38a42 42 0 0 0-42 42a41.57 41.57 0 0 0 8.74 25.65a6 6 0 0 1 1.11 4.93a82.09 82.09 0 0 0 97.57 97.57a5.95 5.95 0 0 1 4.93 1.11A41.57 41.57 0 0 0 176 218a42 42 0 0 0 42-42"></svg:path>`,
})
export class PhSkypeLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkypeLogoThinIcon],svg[ph-skype-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 152c0 15.44-16.15 28-36 28s-36-12.56-36-28a4 4 0 0 1 8 0c0 11 12.56 20 28 20s28-9 28-20c0-12.58-11.79-16.92-29.78-22.11c-15.22-4.38-32.44-9.35-32.44-25.89c0-16 14.71-28 34.22-28c14.2 0 26.29 6.46 31.55 16.85a4 4 0 1 1-7.13 3.61C148.53 88.78 139.17 84 128 84c-15 0-26.22 8.6-26.22 20c0 9.81 10.07 13.43 26.66 18.21S164 132.46 164 152m64 24a52.06 52.06 0 0 1-52 52a51.43 51.43 0 0 1-30.26-9.71a92.08 92.08 0 0 1-108-108A51.43 51.43 0 0 1 28 80a52.06 52.06 0 0 1 52-52a51.43 51.43 0 0 1 30.26 9.71a92.08 92.08 0 0 1 108 108A51.43 51.43 0 0 1 228 176m-8 0a43.63 43.63 0 0 0-9.15-26.87a4 4 0 0 1-.75-3.29a84.07 84.07 0 0 0-99.94-99.94a4 4 0 0 1-3.29-.75a44 44 0 0 0-61.72 61.72a4 4 0 0 1 .75 3.29a84.07 84.07 0 0 0 99.94 99.94a4 4 0 0 1 3.29.75A44 44 0 0 0 220 176"></svg:path>`,
})
export class PhSkypeLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlackLogoIcon],svg[ph-slack-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.13 128A32 32 0 0 0 184 76.31V56a32 32 0 0 0-56-21.13A32 32 0 0 0 76.31 72H56a32 32 0 0 0-21.13 56A32 32 0 0 0 72 179.69V200a32 32 0 0 0 56 21.13A32 32 0 0 0 179.69 184H200a32 32 0 0 0 21.13-56M72 152a16 16 0 1 1-16-16h16Zm48 48a16 16 0 0 1-32 0v-48a16 16 0 0 1 16-16h16Zm0-80H56a16 16 0 0 1 0-32h48a16 16 0 0 1 16 16Zm0-48h-16a16 16 0 1 1 16-16Zm16-16a16 16 0 0 1 32 0v48a16 16 0 0 1-16 16h-16Zm16 160a16 16 0 0 1-16-16v-16h16a16 16 0 0 1 0 32m48-48h-48a16 16 0 0 1-16-16v-16h64a16 16 0 0 1 0 32m0-48h-16v-16a16 16 0 1 1 16 16"></svg:path>`,
})
export class PhSlackLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlackLogoBoldIcon],svg[ph-slack-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 104a36 36 0 0 0-48-33.94V56a36 36 0 0 0-60-26.8A36 36 0 0 0 70.06 68H56a36 36 0 0 0-26.8 60A36 36 0 0 0 68 185.94V200a36 36 0 0 0 60 26.8a36 36 0 0 0 57.94-38.8H200a36 36 0 0 0 26.8-60a35.82 35.82 0 0 0 9.2-24m-36-12a12 12 0 0 1 0 24h-12v-12a12 12 0 0 1 12-12m-48-48a12 12 0 0 1 12 12v48a12 12 0 0 1-12 12h-12V56a12 12 0 0 1 12-12M92 56a12 12 0 0 1 24 0v12h-12a12 12 0 0 1-12-12M56 92h48a12 12 0 0 1 12 12v12H56a12 12 0 0 1 0-24m0 72a12 12 0 0 1 0-24h12v12a12 12 0 0 1-12 12m48 48a12 12 0 0 1-12-12v-48a12 12 0 0 1 12-12h12v60a12 12 0 0 1-12 12m60-12a12 12 0 0 1-24 0v-12h12a12 12 0 0 1 12 12m36-36h-48a12 12 0 0 1-12-12v-12h60a12 12 0 0 1 0 24"></svg:path>`,
})
export class PhSlackLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlackLogoDuotoneIcon],svg[ph-slack-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 152a24 24 0 0 1-24 24h-48a24 24 0 0 1 24 24a24 24 0 0 1-24 24a24 24 0 0 1-24-24v-24h24a24 24 0 0 1-24-24v-24h72a24 24 0 0 1 24 24M104 80h24V56a24 24 0 0 0-24-24a24 24 0 0 0-24 24a24 24 0 0 0 24 24H56a24 24 0 0 0-24 24a24 24 0 0 0 24 24h72v-24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M221.13 128A32 32 0 0 0 184 76.31V56a32 32 0 0 0-56-21.13A32 32 0 0 0 76.31 72H56a32 32 0 0 0-21.13 56A32 32 0 0 0 72 179.69V200a32 32 0 0 0 56 21.13A32 32 0 0 0 179.69 184H200a32 32 0 0 0 21.13-56M200 88a16 16 0 0 1 0 32h-16v-16a16 16 0 0 1 16-16m-48-48a16 16 0 0 1 16 16v48a16 16 0 0 1-16 16h-16V56a16 16 0 0 1 16-16M88 56a16 16 0 0 1 32 0v16h-16a16 16 0 0 1-16-16m-48 48a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v16H56a16 16 0 0 1-16-16m16 64a16 16 0 0 1 0-32h16v16a16 16 0 0 1-16 16m48 48a16 16 0 0 1-16-16v-48a16 16 0 0 1 16-16h16v64a16 16 0 0 1-16 16m64-16a16 16 0 0 1-32 0v-16h16a16 16 0 0 1 16 16m32-32h-48a16 16 0 0 1-16-16v-16h64a16 16 0 0 1 0 32"></svg:path></svg:g>`,
})
export class PhSlackLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlackLogoFillIcon],svg[ph-slack-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.13 128A32 32 0 0 0 184 76.31V56a32 32 0 0 0-56-21.13A32 32 0 0 0 76.31 72H56a32 32 0 0 0-21.13 56A32 32 0 0 0 72 179.69V200a32 32 0 0 0 56 21.13A32 32 0 0 0 179.69 184H200a32 32 0 0 0 21.13-56M88 56a16 16 0 0 1 32 0v16h-16a16 16 0 0 1-16-16m-48 48a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v16H56a16 16 0 0 1-16-16m128 96a16 16 0 0 1-32 0v-16h16a16 16 0 0 1 16 16m32-32h-48a16 16 0 0 1-16-16v-16h64a16 16 0 0 1 0 32"></svg:path>`,
})
export class PhSlackLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlackLogoLightIcon],svg[ph-slack-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218 128a30 30 0 1 0-36-48V56a30 30 0 0 0-54-18a30 30 0 1 0-48 36H56a30 30 0 0 0-18 54a30 30 0 1 0 36 48v24a30 30 0 0 0 54 18a30 30 0 1 0 48-36h24a30 30 0 0 0 18-54m-18-42a18 18 0 0 1 0 36h-18v-18a18 18 0 0 1 18-18m-48-48a18 18 0 0 1 18 18v48a18 18 0 0 1-18 18h-18V56a18 18 0 0 1 18-18M86 56a18 18 0 0 1 36 0v18h-18a18 18 0 0 1-18-18m-48 48a18 18 0 0 1 18-18h48a18 18 0 0 1 18 18v18H56a18 18 0 0 1-18-18m18 66a18 18 0 0 1 0-36h18v18a18 18 0 0 1-18 18m48 48a18 18 0 0 1-18-18v-48a18 18 0 0 1 18-18h18v66a18 18 0 0 1-18 18m66-18a18 18 0 0 1-36 0v-18h18a18 18 0 0 1 18 18m30-30h-48a18 18 0 0 1-18-18v-18h66a18 18 0 0 1 0 36"></svg:path>`,
})
export class PhSlackLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlackLogoThinIcon],svg[ph-slack-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214.4 128A28 28 0 1 0 180 84.43V56a28 28 0 0 0-52-14.4A28 28 0 1 0 84.43 76H56a28 28 0 0 0-14.4 52A28 28 0 1 0 76 171.57V200a28 28 0 0 0 52 14.41A28 28 0 1 0 171.57 180H200a28 28 0 0 0 14.4-52M76 152a20 20 0 1 1-20-20h20Zm48 48a20 20 0 0 1-40 0v-48a20 20 0 0 1 20-20h20Zm0-76H56a20 20 0 0 1 0-40h48a20 20 0 0 1 20 20Zm0-48h-20a20 20 0 1 1 20-20Zm56 28a20 20 0 1 1 20 20h-20Zm-48-48a20 20 0 0 1 40 0v48a20 20 0 0 1-20 20h-20Zm40 144a20 20 0 0 1-40 0v-20h20a20 20 0 0 1 20 20m28-28h-48a20 20 0 0 1-20-20v-20h68a20 20 0 0 1 0 40"></svg:path>`,
})
export class PhSlackLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlidersIcon],svg[ph-sliders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 105V40a8 8 0 0 0-16 0v65a32 32 0 0 0 0 62v49a8 8 0 0 0 16 0v-49a32 32 0 0 0 0-62m-8 47a16 16 0 1 1 16-16a16 16 0 0 1-16 16m80-95V40a8 8 0 0 0-16 0v17a32 32 0 0 0 0 62v97a8 8 0 0 0 16 0v-97a32 32 0 0 0 0-62m-8 47a16 16 0 1 1 16-16a16 16 0 0 1-16 16m104 64a32.06 32.06 0 0 0-24-31V40a8 8 0 0 0-16 0v97a32 32 0 0 0 0 62v17a8 8 0 0 0 16 0v-17a32.06 32.06 0 0 0 24-31m-32 16a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhSlidersIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlidersBoldIcon],svg[ph-sliders-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M68 102.06V40a12 12 0 0 0-24 0v62.06a36 36 0 0 0 0 67.88V216a12 12 0 0 0 24 0v-46.06a36 36 0 0 0 0-67.88M56 148a12 12 0 1 1 12-12a12 12 0 0 1-12 12m108-60a36.07 36.07 0 0 0-24-33.94V40a12 12 0 0 0-24 0v14.06a36 36 0 0 0 0 67.88V216a12 12 0 0 0 24 0v-94.06A36.07 36.07 0 0 0 164 88m-36 12a12 12 0 1 1 12-12a12 12 0 0 1-12 12m108 68a36.07 36.07 0 0 0-24-33.94V40a12 12 0 0 0-24 0v94.06a36 36 0 0 0 0 67.88V216a12 12 0 0 0 24 0v-14.06A36.07 36.07 0 0 0 236 168m-36 12a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhSlidersBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlidersDuotoneIcon],svg[ph-sliders-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 136a24 24 0 1 1-24-24a24 24 0 0 1 24 24m48-72a24 24 0 1 0 24 24a24 24 0 0 0-24-24m72 80a24 24 0 1 0 24 24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M64 105V40a8 8 0 0 0-16 0v65a32 32 0 0 0 0 62v49a8 8 0 0 0 16 0v-49a32 32 0 0 0 0-62m-8 47a16 16 0 1 1 16-16a16 16 0 0 1-16 16m80-95V40a8 8 0 0 0-16 0v17a32 32 0 0 0 0 62v97a8 8 0 0 0 16 0v-97a32 32 0 0 0 0-62m-8 47a16 16 0 1 1 16-16a16 16 0 0 1-16 16m104 64a32.06 32.06 0 0 0-24-31V40a8 8 0 0 0-16 0v97a32 32 0 0 0 0 62v17a8 8 0 0 0 16 0v-17a32.06 32.06 0 0 0 24-31m-32 16a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhSlidersDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlidersFillIcon],svg[ph-sliders-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 136a28 28 0 0 1-20 26.83V216a8 8 0 0 1-16 0v-53.17a28 28 0 0 1 0-53.66V40a8 8 0 0 1 16 0v69.17A28 28 0 0 1 84 136m52-74.83V40a8 8 0 0 0-16 0v21.17a28 28 0 0 0 0 53.66V216a8 8 0 0 0 16 0V114.83a28 28 0 0 0 0-53.66m72 80V40a8 8 0 0 0-16 0v101.17a28 28 0 0 0 0 53.66V216a8 8 0 0 0 16 0v-21.17a28 28 0 0 0 0-53.66"></svg:path>`,
})
export class PhSlidersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlidersHorizontalIcon],svg[ph-sliders-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 88h33a32 32 0 0 0 62 0h81a8 8 0 0 0 0-16h-81a32 32 0 0 0-62 0H40a8 8 0 0 0 0 16m64-24a16 16 0 1 1-16 16a16 16 0 0 1 16-16m112 104h-17a32 32 0 0 0-62 0H40a8 8 0 0 0 0 16h97a32 32 0 0 0 62 0h17a8 8 0 0 0 0-16m-48 24a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhSlidersHorizontalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlidersHorizontalBoldIcon],svg[ph-sliders-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 92h30.06a36 36 0 0 0 67.88 0H216a12 12 0 0 0 0-24h-78.06a36 36 0 0 0-67.88 0H40a12 12 0 0 0 0 24m64-24a12 12 0 1 1-12 12a12 12 0 0 1 12-12m112 96h-14.06a36 36 0 0 0-67.88 0H40a12 12 0 0 0 0 24h94.06a36 36 0 0 0 67.88 0H216a12 12 0 0 0 0-24m-48 24a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhSlidersHorizontalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlidersHorizontalDuotoneIcon],svg[ph-sliders-horizontal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 80a24 24 0 1 1-24-24a24 24 0 0 1 24 24m40 72a24 24 0 1 0 24 24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M40 88h33a32 32 0 0 0 62 0h81a8 8 0 0 0 0-16h-81a32 32 0 0 0-62 0H40a8 8 0 0 0 0 16m64-24a16 16 0 1 1-16 16a16 16 0 0 1 16-16m112 104h-17a32 32 0 0 0-62 0H40a8 8 0 0 0 0 16h97a32 32 0 0 0 62 0h17a8 8 0 0 0 0-16m-48 24a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhSlidersHorizontalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlidersHorizontalFillIcon],svg[ph-sliders-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 80a8 8 0 0 1 8-8h37.17a28 28 0 0 1 53.66 0H216a8 8 0 0 1 0 16h-85.17a28 28 0 0 1-53.66 0H40a8 8 0 0 1-8-8m184 88h-21.17a28 28 0 0 0-53.66 0H40a8 8 0 0 0 0 16h101.17a28 28 0 0 0 53.66 0H216a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhSlidersHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlidersHorizontalLightIcon],svg[ph-sliders-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 86h34.6a30 30 0 0 0 58.8 0H216a6 6 0 0 0 0-12h-82.6a30 30 0 0 0-58.8 0H40a6 6 0 0 0 0 12m64-24a18 18 0 1 1-18 18a18 18 0 0 1 18-18m112 108h-18.6a30 30 0 0 0-58.8 0H40a6 6 0 0 0 0 12h98.6a30 30 0 0 0 58.8 0H216a6 6 0 0 0 0-12m-48 24a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhSlidersHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlidersHorizontalThinIcon],svg[ph-sliders-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 84h36.29a28 28 0 0 0 55.42 0H216a4 4 0 0 0 0-8h-84.29a28 28 0 0 0-55.42 0H40a4 4 0 0 0 0 8m64-24a20 20 0 1 1-20 20a20 20 0 0 1 20-20m112 112h-20.29a28 28 0 0 0-55.42 0H40a4 4 0 0 0 0 8h100.29a28 28 0 0 0 55.42 0H216a4 4 0 0 0 0-8m-48 24a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhSlidersHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlidersLightIcon],svg[ph-sliders-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62 106.6V40a6 6 0 0 0-12 0v66.6a30 30 0 0 0 0 58.8V216a6 6 0 0 0 12 0v-50.6a30 30 0 0 0 0-58.8M56 154a18 18 0 1 1 18-18a18 18 0 0 1-18 18m78-95.4V40a6 6 0 0 0-12 0v18.6a30 30 0 0 0 0 58.8V216a6 6 0 0 0 12 0v-98.6a30 30 0 0 0 0-58.8m-6 47.4a18 18 0 1 1 18-18a18 18 0 0 1-18 18m102 62a30.05 30.05 0 0 0-24-29.4V40a6 6 0 0 0-12 0v98.6a30 30 0 0 0 0 58.8V216a6 6 0 0 0 12 0v-18.6a30.05 30.05 0 0 0 24-29.4m-30 18a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhSlidersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlidersThinIcon],svg[ph-sliders-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 108.29V40a4 4 0 0 0-8 0v68.29a28 28 0 0 0 0 55.42V216a4 4 0 0 0 8 0v-52.29a28 28 0 0 0 0-55.42M56 156a20 20 0 1 1 20-20a20 20 0 0 1-20 20m76-95.71V40a4 4 0 0 0-8 0v20.29a28 28 0 0 0 0 55.42V216a4 4 0 0 0 8 0V115.71a28 28 0 0 0 0-55.42M128 108a20 20 0 1 1 20-20a20 20 0 0 1-20 20m100 60a28 28 0 0 0-24-27.71V40a4 4 0 0 0-8 0v100.29a28 28 0 0 0 0 55.42V216a4 4 0 0 0 8 0v-20.29A28 28 0 0 0 228 168m-28 20a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhSlidersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlideshowIcon],svg[ph-slideshow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 48H64a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H64V64h128zm48-136v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0M32 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhSlideshowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlideshowBoldIcon],svg[ph-slideshow-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 44H72a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144H76V68h104Zm64-132v144a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0M36 56v144a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhSlideshowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlideshowDuotoneIcon],svg[ph-slideshow-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 64v128a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M192 48H64a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H64V64h128zm48-136v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0M32 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhSlideshowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlideshowFillIcon],svg[ph-slideshow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 64v128a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16m24-16a8 8 0 0 0-8 8v144a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8M24 48a8 8 0 0 0-8 8v144a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhSlideshowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlideshowLightIcon],svg[ph-slideshow-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 50H64a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2Zm44-136v144a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0M30 56v144a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhSlideshowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlideshowThinIcon],svg[ph-slideshow-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 52H64a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4Zm40-136v144a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0M28 56v144a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhSlideshowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyIcon],svg[ph-smiley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M80 108a12 12 0 1 1 12 12a12 12 0 0 1-12-12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-1.07 48c-10.29 17.79-27.4 28-46.93 28s-36.63-10.2-46.92-28a8 8 0 1 1 13.84-8c7.47 12.91 19.21 20 33.08 20s25.61-7.1 33.07-20a8 8 0 0 1 13.86 8"></svg:path>`,
})
export class PhSmileyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyAngryIcon],svg[ph-smiley-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 152a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72-24a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88m-44.44-46.66L128 110.39l-43.56-29a8 8 0 1 0-8.88 13.32l48 32a8 8 0 0 0 8.88 0l48-32a8 8 0 0 0-8.88-13.32Zm-15.13 96C148 171.73 139.94 168 128 168s-20 3.73-28.43 9.34a8 8 0 0 0 8.86 13.32C114.93 186.34 120 184 128 184s13.07 2.34 19.57 6.66a8 8 0 1 0 8.86-13.32"></svg:path>`,
})
export class PhSmileyAngryIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyAngryBoldIcon],svg[ph-smiley-angry-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 156a16 16 0 1 1 16-16a16 16 0 0 1-16 16m72-32a16 16 0 1 0 16 16a16 16 0 0 0-16-16m72 4A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84M85.34 102l36 24a12 12 0 0 0 13.32 0l36-24a12 12 0 0 0-13.32-20L128 101.58L98.66 82a12 12 0 0 0-13.32 20M154 167.12a51.1 51.1 0 0 0-52 0a12 12 0 1 0 12 20.76a27.13 27.13 0 0 1 28 0a12 12 0 1 0 12-20.76"></svg:path>`,
})
export class PhSmileyAngryBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyAngryDuotoneIcon],svg[ph-smiley-angry-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M92 152a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72-24a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88m-44.44-46.66L128 110.39l-43.56-29a8 8 0 1 0-8.88 13.32l48 32a8 8 0 0 0 8.88 0l48-32a8 8 0 0 0-8.88-13.32Zm-15.13 96C148 171.73 139.94 168 128 168s-20 3.73-28.43 9.34a8 8 0 0 0 8.86 13.32C114.93 186.34 120 184 128 184s13.07 2.34 19.57 6.66a8 8 0 1 0 8.86-13.32"></svg:path></svg:g>`,
})
export class PhSmileyAngryDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyAngryFillIcon],svg[ph-smiley-angry-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M80 140a12 12 0 1 1 12 12a12 12 0 0 1-12-12m78.66 48.43a8 8 0 0 1-11.09 2.23C141.07 186.34 136 184 128 184s-13.07 2.34-19.57 6.66a8 8 0 0 1-8.86-13.32C108 171.73 116.06 168 128 168s20 3.73 28.43 9.34a8 8 0 0 1 2.23 11.09M164 152a12 12 0 1 1 12-12a12 12 0 0 1-12 12m16.44-57.34l-48 32a8 8 0 0 1-8.88 0l-48-32a8 8 0 1 1 8.88-13.32L128 110.39l43.56-29a8 8 0 0 1 8.88 13.32Z"></svg:path>`,
})
export class PhSmileyAngryFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyAngryLightIcon],svg[ph-smiley-angry-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 150a10 10 0 1 1 10-10a10 10 0 0 1-10 10m72-20a10 10 0 1 0 10 10a10 10 0 0 0-10-10m66-2A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90m-45.33-45L128 112.79L83.33 83a6 6 0 0 0-6.66 10l48 32a6 6 0 0 0 6.66 0l48-32a6 6 0 1 0-6.66-10m-17.35 96c-8.13-5.4-15.88-9-27.32-9s-19.19 3.6-27.32 9a6 6 0 0 0 6.64 10c6.67-4.43 12.19-7 20.68-7s14 2.57 20.68 7a5.94 5.94 0 0 0 3.31 1a6 6 0 0 0 3.33-11"></svg:path>`,
})
export class PhSmileyAngryLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyAngryThinIcon],svg[ph-smiley-angry-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 140a8 8 0 1 1-8-8a8 8 0 0 1 8 8m64-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m64-4A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92a92.1 92.1 0 0 0 92-92m-46.22-43.33L128 115.19L82.22 84.67a4 4 0 1 0-4.44 6.66l48 32a4 4 0 0 0 4.44 0l48-32a4 4 0 1 0-4.44-6.66m-19.57 96c-7.82-5.2-15.27-8.67-26.21-8.67s-18.39 3.47-26.21 8.67a4 4 0 1 0 4.42 6.66C113.2 182.69 119 180 128 180s14.8 2.69 21.79 7.33a4 4 0 1 0 4.42-6.66"></svg:path>`,
})
export class PhSmileyAngryThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyBlankIcon],svg[ph-smiley-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-24-108a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhSmileyBlankIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyBlankBoldIcon],svg[ph-smiley-blank-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m-20-104a16 16 0 1 1-16-16a16 16 0 0 1 16 16m72 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhSmileyBlankBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyBlankDuotoneIcon],svg[ph-smiley-blank-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-24-108a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhSmileyBlankDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyBlankFillIcon],svg[ph-smiley-blank-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24m-36 96a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhSmileyBlankFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyBlankLightIcon],svg[ph-smiley-blank-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m-26-110a10 10 0 1 1-10-10a10 10 0 0 1 10 10m72 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhSmileyBlankLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyBlankThinIcon],svg[ph-smiley-blank-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m-28-112a8 8 0 1 1-8-8a8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSmileyBlankThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyBoldIcon],svg[ph-smiley-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178.39 158c-11 19.06-29.39 30-50.39 30s-39.36-10.93-50.39-30a12 12 0 0 1 20.78-12c3.89 6.73 12.91 18 29.61 18s25.72-11.28 29.61-18a12 12 0 1 1 20.78 12M236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84m-120-4a16 16 0 1 0-16-16a16 16 0 0 0 16 16m72-32a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhSmileyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyDuotoneIcon],svg[ph-smiley-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M80 108a12 12 0 1 1 12 12a12 12 0 0 1-12-12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-1.08 48c-10.29 17.79-27.39 28-46.92 28s-36.63-10.2-46.92-28a8 8 0 1 1 13.84-8c7.47 12.91 19.21 20 33.08 20s25.61-7.1 33.08-20a8 8 0 1 1 13.84 8"></svg:path></svg:g>`,
})
export class PhSmileyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyFillIcon],svg[ph-smiley-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M92 96a12 12 0 1 1-12 12a12 12 0 0 1 12-12m82.92 60c-10.29 17.79-27.39 28-46.92 28s-36.63-10.2-46.92-28a8 8 0 1 1 13.84-8c7.47 12.91 19.21 20 33.08 20s25.61-7.1 33.08-20a8 8 0 1 1 13.84 8M164 120a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhSmileyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyLightIcon],svg[ph-smiley-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M173.19 155c-9.92 17.16-26.39 27-45.19 27s-35.27-9.84-45.19-27a6 6 0 0 1 10.38-6c7.84 13.54 20.2 21 34.81 21s27-7.46 34.81-21a6 6 0 1 1 10.38 6M230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90M92 118a10 10 0 1 0-10-10a10 10 0 0 0 10 10m72-20a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhSmileyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyMehIcon],svg[ph-smiley-meh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-56a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m-96-52a12 12 0 1 1 12 12a12 12 0 0 1-12-12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhSmileyMehIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyMehBoldIcon],svg[ph-smiley-meh-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m52-52a12 12 0 0 1-12 12H88a12 12 0 0 1 0-24h80a12 12 0 0 1 12 12M76 108a16 16 0 1 1 16 16a16 16 0 0 1-16-16m104 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhSmileyMehBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyMehDuotoneIcon],svg[ph-smiley-meh-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-56a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m-96-52a12 12 0 1 1 12 12a12 12 0 0 1-12-12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhSmileyMehDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyMehFillIcon],svg[ph-smiley-meh-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24M92 96a12 12 0 1 1-12 12a12 12 0 0 1 12-12m76 72H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16m-4-48a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhSmileyMehFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyMehLightIcon],svg[ph-smiley-meh-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m46-58a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6m-92-52a10 10 0 1 1 10 10a10 10 0 0 1-10-10m92 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhSmileyMehLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyMehThinIcon],svg[ph-smiley-meh-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m44-60a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4m-88-52a8 8 0 1 1 8 8a8 8 0 0 1-8-8m88 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSmileyMehThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyMeltingIcon],svg[ph-smiley-melting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-48-48a12 12 0 1 0-12 12a12 12 0 0 0 12-12m73-38A104 104 0 0 0 50.48 197.33a8 8 0 1 0 11.92-10.67a88 88 0 1 1 131.19 0a8 8 0 0 0 11.93 10.67A104 104 0 0 0 201 54m-49 114h-16c-21.74 0-48-17.84-48-40a41 41 0 0 1 .55-6.68a8 8 0 1 0-15.78-2.64A57 57 0 0 0 72 128c0 14.88 7.46 29.13 21 40.15c12.4 10.07 28.07 15.85 43 15.85h16a8 8 0 0 1 0 16H96a24 24 0 0 0 0 48a8 8 0 0 0 0-16a8 8 0 0 1 0-16h56a24 24 0 0 0 0-48"></svg:path>`,
})
export class PhSmileyMeltingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyMeltingBoldIcon],svg[ph-smiley-melting-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 136a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-44-44a16 16 0 1 0-16 16a16 16 0 0 0 16-16m67.83-40.9A108 108 0 0 0 47.5 200a12 12 0 0 0 17.89-16a84 84 0 1 1 125.22 0a12 12 0 0 0 17.89 16a108 108 0 0 0-4.67-148.9M140 164h-4c-19.81 0-44-16.61-44-36a36.5 36.5 0 0 1 .5-6a12 12 0 0 0-23.67-4a60.7 60.7 0 0 0-.83 10c0 16.1 8 31.46 22.49 43.25C103.58 181.9 120.17 188 136 188h4a8 8 0 0 1 0 16h-40a32 32 0 0 0-32 32a12 12 0 0 0 24 0a8 8 0 0 1 8-8h40a32 32 0 0 0 0-64"></svg:path>`,
})
export class PhSmileyMeltingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyMeltingDuotoneIcon],svg[ph-smiley-melting-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a95.63 95.63 0 0 1-24.44 64H56.44A95.67 95.67 0 0 1 32 126.06C33 74.58 75.15 32.73 126.63 32A96 96 0 0 1 224 128" opacity=".2"></svg:path><svg:path d="M176 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-48-48a12 12 0 1 0-12 12a12 12 0 0 0 12-12m73-38a103.24 103.24 0 0 0-73-30h-1.49a104 104 0 0 0-76 173.32a8 8 0 1 0 11.89-10.65a88 88 0 1 1 131.19 0a8 8 0 0 0 11.93 10.66A104 104 0 0 0 201 54m-49 114h-16c-21.74 0-48-17.84-48-40a41 41 0 0 1 .55-6.68a8 8 0 1 0-15.78-2.64A57 57 0 0 0 72 128c0 14.88 7.46 29.13 21 40.15c12.4 10.07 28.07 15.85 43 15.85h16a8 8 0 0 1 0 16H96a24 24 0 0 0 0 48a8 8 0 0 0 0-16a8 8 0 0 1 0-16h56a24 24 0 0 0 0-48"></svg:path></svg:g>`,
})
export class PhSmileyMeltingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyMeltingFillIcon],svg[ph-smiley-melting-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.6 176h-15.36a104 104 0 1 0-184.52 0H20.4A12.26 12.26 0 0 0 8 187.78A12 12 0 0 0 20 200h60a8 8 0 0 1 0 16h-7.84a8.2 8.2 0 0 0-8 6.33A8 8 0 0 0 72 232h127.73a8.18 8.18 0 0 0 8.25-7.47a8 8 0 0 0-8-8.53H144a8 8 0 0 1 0-16h7.79a8.28 8.28 0 0 0 8.15-7.05A8 8 0 0 0 152 184h-16c-14.93 0-30.59-5.78-43-15.85c-13.55-11-21-25.27-21-40.15a57 57 0 0 1 .71-9a8.21 8.21 0 0 1 8.85-7a8 8 0 0 1 7 9.27A41.3 41.3 0 0 0 88 128c0 22.16 26.26 40 48 40h15.44c13.5 0 24.86 11.05 24.55 24.55a24 24 0 0 1-.23 2.83a4 4 0 0 0 4 4.62H236a12 12 0 0 0 12-12.22A12.26 12.26 0 0 0 235.6 176M127.9 93.56a12 12 0 1 1-13.46-13.46a12 12 0 0 1 13.46 13.46m48 48a12 12 0 1 1-13.46-13.46a12 12 0 0 1 13.46 13.46"></svg:path>`,
})
export class PhSmileyMeltingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyMeltingLightIcon],svg[ph-smiley-melting-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 140a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-48-48a10 10 0 1 0-10 10a10 10 0 0 0 10-10m73.62-36.63A102 102 0 0 0 52 196a6 6 0 1 0 8.94-8a90.09 90.09 0 0 1 65.78-150H128a90 90 0 0 1 67.07 150a6 6 0 0 0 8.95 8a102 102 0 0 0-4.41-140.63ZM152 170h-16c-22.65 0-50-18.73-50-42a43 43 0 0 1 .58-7a6 6 0 1 0-11.83-2a54 54 0 0 0-.75 9c0 14.26 7.2 28 20.27 38.6c12 9.79 27.26 15.4 41.73 15.4h16a10 10 0 0 1 0 20H96a22 22 0 0 0 0 44a6 6 0 0 0 0-12a10 10 0 0 1 0-20h56a22 22 0 0 0 0-44"></svg:path>`,
})
export class PhSmileyMeltingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyMeltingThinIcon],svg[ph-smiley-melting-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 140a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-48-48a8 8 0 1 0-8 8a8 8 0 0 0 8-8m74.21-35.2A100 100 0 0 0 53.46 194.67a4 4 0 1 0 6-5.34a92 92 0 1 1 137.16 0a4 4 0 0 0 6 5.34a100 100 0 0 0-4.41-137.87M152 172h-16c-12 0-25.28-4.92-35.42-13.16C89.89 150.15 84 139.19 84 128a44 44 0 0 1 .61-7.34a4 4 0 0 0-7.89-1.32A52 52 0 0 0 76 128c0 29.29 32.25 52 60 52h16a12 12 0 0 1 0 24H96a20 20 0 0 0 0 40a4 4 0 0 0 0-8a12 12 0 0 1 0-24h56a20 20 0 0 0 0-40"></svg:path>`,
})
export class PhSmileyMeltingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyNervousIcon],svg[ph-smiley-nervous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M80 108a12 12 0 1 1 12 12a12 12 0 0 1-12-12m72 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12m32 60a8 8 0 0 1-8 8c-10 0-15.06-6.74-18.4-11.2c-3-4-3.92-4.8-5.6-4.8s-2.57.76-5.6 4.8c-3.34 4.46-8.4 11.2-18.4 11.2s-15.06-6.74-18.4-11.2c-3-4-3.92-4.8-5.6-4.8s-2.57.76-5.6 4.8C95.06 169.26 90 176 80 176a8 8 0 0 1 0-16c1.68 0 2.57-.76 5.6-4.8C88.94 150.74 94 144 104 144s15.06 6.74 18.4 11.2c3 4 3.92 4.8 5.6 4.8s2.57-.76 5.6-4.8c3.34-4.46 8.4-11.2 18.4-11.2s15.06 6.74 18.4 11.2c3 4 3.92 4.8 5.6 4.8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSmileyNervousIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyNervousBoldIcon],svg[ph-smiley-nervous-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84M76 108a16 16 0 1 1 16 16a16 16 0 0 1-16-16m72 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16m30.92 64.94a12 12 0 0 1-16.78 2.52a38.2 38.2 0 0 1-7.74-8.26a35 35 0 0 0-2.4-3a35 35 0 0 0-2.4 3C146 172 140 180 128 180s-18-8-21.6-12.8a35 35 0 0 0-2.4-3a35 35 0 0 0-2.4 3a38.2 38.2 0 0 1-7.74 8.26a12 12 0 0 1-14.27-19.3a23 23 0 0 0 2.81-3.36C86 148 92 140 104 140s18 8 21.6 12.8a35 35 0 0 0 2.4 3a35 35 0 0 0 2.4-3C134 148 140 140 152 140s18 8 21.6 12.8a23 23 0 0 0 2.81 3.36a12 12 0 0 1 2.51 16.78"></svg:path>`,
})
export class PhSmileyNervousBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyNervousDuotoneIcon],svg[ph-smiley-nervous-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M80 108a12 12 0 1 1 12 12a12 12 0 0 1-12-12m72 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12m32 60a8 8 0 0 1-8 8c-10 0-15.05-6.74-18.4-11.2c-3-4-3.92-4.8-5.6-4.8s-2.57.76-5.6 4.8c-3.35 4.46-8.4 11.2-18.4 11.2s-15-6.74-18.4-11.2c-3-4-3.92-4.8-5.6-4.8s-2.57.76-5.6 4.8C95.05 169.26 90 176 80 176a8 8 0 0 1 0-16c1.68 0 2.57-.76 5.6-4.8C89 150.74 94 144 104 144s15 6.74 18.4 11.2c3 4 3.92 4.8 5.6 4.8s2.57-.76 5.6-4.8C137 150.74 142 144 152 144s15.05 6.74 18.4 11.2c3 4 3.92 4.8 5.6 4.8a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhSmileyNervousDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyNervousFillIcon],svg[ph-smiley-nervous-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m36 72a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-72 0a12 12 0 1 1-12 12a12 12 0 0 1 12-12m84 80c-10 0-15.05-6.74-18.4-11.2c-3-4-3.92-4.8-5.6-4.8s-2.57.76-5.6 4.8c-3.35 4.46-8.4 11.2-18.4 11.2s-15-6.74-18.4-11.2c-3-4-3.92-4.8-5.6-4.8s-2.57.76-5.6 4.8C95.05 169.26 90 176 80 176a8 8 0 0 1 0-16c1.68 0 2.57-.76 5.6-4.8C89 150.74 94 144 104 144s15 6.74 18.4 11.2c3 4 3.92 4.8 5.6 4.8s2.57-.76 5.6-4.8C137 150.74 142 144 152 144s15.05 6.74 18.4 11.2c3 4 3.92 4.8 5.6 4.8a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhSmileyNervousFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyNervousLightIcon],svg[ph-smiley-nervous-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90M82 108a10 10 0 1 1 10 10a10 10 0 0 1-10-10m72 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10m28 60a6 6 0 0 1-6 6c-9 0-13.51-6-16.8-10.4c-3-4.06-4.46-5.6-7.2-5.6s-4.15 1.54-7.2 5.6C141.51 168 137 174 128 174s-13.51-6-16.8-10.4c-3-4.06-4.46-5.6-7.2-5.6s-4.15 1.54-7.2 5.6C93.51 168 89 174 80 174a6 6 0 0 1 0-12c2.74 0 4.15-1.54 7.2-5.6C90.49 152 95 146 104 146s13.51 6 16.8 10.4c3 4.06 4.46 5.6 7.2 5.6s4.15-1.54 7.2-5.6C138.49 152 143 146 152 146s13.51 6 16.8 10.4c3 4.06 4.46 5.6 7.2 5.6a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhSmileyNervousLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyNervousThinIcon],svg[ph-smiley-nervous-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92M84 108a8 8 0 1 1 8 8a8 8 0 0 1-8-8m72 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m24 60a4 4 0 0 1-4 4c-8 0-12-5.32-15.2-9.6c-3.07-4.09-5-6.4-8.8-6.4s-5.73 2.31-8.8 6.4c-3.2 4.28-7.2 9.6-15.2 9.6s-12-5.32-15.2-9.6c-3.07-4.09-5-6.4-8.8-6.4s-5.73 2.31-8.8 6.4C92 166.68 88 172 80 172a4 4 0 0 1 0-8c3.81 0 5.73-2.31 8.8-6.4C92 153.32 96 148 104 148s12 5.32 15.2 9.6c3.07 4.09 5 6.4 8.8 6.4s5.73-2.31 8.8-6.4c3.2-4.28 7.2-9.6 15.2-9.6s12 5.32 15.2 9.6c3.07 4.09 5 6.4 8.8 6.4a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhSmileyNervousThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileySadIcon],svg[ph-smiley-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M80 108a12 12 0 1 1 12 12a12 12 0 0 1-12-12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-1.08 64a8 8 0 1 1-13.84 8c-7.47-12.91-19.21-20-33.08-20s-25.61 7.1-33.08 20a8 8 0 1 1-13.84-8c10.29-17.79 27.39-28 46.92-28s36.63 10.2 46.92 28"></svg:path>`,
})
export class PhSmileySadIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileySadBoldIcon],svg[ph-smiley-sad-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84M76 108a16 16 0 1 1 16 16a16 16 0 0 1-16-16m104 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-3.26 57a12 12 0 0 1-19.48 14a36 36 0 0 0-58.52 0a12 12 0 0 1-19.48-14a60 60 0 0 1 97.48 0"></svg:path>`,
})
export class PhSmileySadBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileySadDuotoneIcon],svg[ph-smiley-sad-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M80 108a12 12 0 1 1 12 12a12 12 0 0 1-12-12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-1.08 64a8 8 0 1 1-13.84 8c-7.47-12.91-19.21-20-33.08-20s-25.61 7.1-33.08 20a8 8 0 1 1-13.84-8c10.29-17.79 27.39-28 46.92-28s36.63 10.2 46.92 28"></svg:path></svg:g>`,
})
export class PhSmileySadDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileySadFillIcon],svg[ph-smiley-sad-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M92 96a12 12 0 1 1-12 12a12 12 0 0 1 12-12m80 86.92a8 8 0 0 1-10.92-2.92c-7.47-12.91-19.21-20-33.08-20s-25.61 7.1-33.08 20a8 8 0 1 1-13.84-8c10.29-17.79 27.39-28 46.92-28s36.63 10.2 46.92 28a8 8 0 0 1-2.92 10.92M164 120a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhSmileySadFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileySadLightIcon],svg[ph-smiley-sad-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90M82 108a10 10 0 1 1 10 10a10 10 0 0 1-10-10m92 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-.81 65a6 6 0 0 1-10.38 6c-7.84-13.54-20.2-21-34.81-21s-27 7.46-34.81 21a6 6 0 0 1-5.2 3a5.9 5.9 0 0 1-3-.81a6 6 0 0 1-2.18-8.19c9.92-17.16 26.39-27 45.19-27s35.27 9.84 45.19 27"></svg:path>`,
})
export class PhSmileySadLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileySadThinIcon],svg[ph-smiley-sad-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92M84 108a8 8 0 1 1 8 8a8 8 0 0 1-8-8m88 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-.54 66a4 4 0 0 1-1.46 5.46a3.93 3.93 0 0 1-2 .54a4 4 0 0 1-3.46-2c-8.21-14.19-21.19-22-36.54-22s-28.33 7.81-36.54 22a4 4 0 0 1-6.92-4c9.55-16.52 25.4-26 43.46-26s33.91 9.48 43.46 26"></svg:path>`,
})
export class PhSmileySadThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyStickerIcon],svg[ph-smiley-sticker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174.92 156c-10.29 17.79-27.39 28-46.92 28s-36.63-10.2-46.93-28a8 8 0 1 1 13.86-8c7.46 12.91 19.2 20 33.07 20s25.61-7.1 33.08-20a8 8 0 1 1 13.84 8M232 128a104.4 104.4 0 0 1-4.56 30.56a8 8 0 0 1-2 3.31l-63.57 63.57a7.9 7.9 0 0 1-3.3 2A104 104 0 1 1 232 128m-16 0a87.89 87.89 0 1 0-64 84.69L212.69 152a88 88 0 0 0 3.31-24m-124-8a12 12 0 1 0-12-12a12 12 0 0 0 12 12m72-24a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhSmileyStickerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyStickerBoldIcon],svg[ph-smiley-sticker-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 31.74 211.26a12 12 0 0 0 5-3l63.57-63.57a12.05 12.05 0 0 0 3-5A108.08 108.08 0 0 0 128 20m81.12 129.91l-59.2 59.2a83.87 83.87 0 1 1 59.2-59.2M76 108a16 16 0 1 1 16 16a16 16 0 0 1-16-16m104 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-1.61 50c-11 19.06-29.39 30-50.39 30s-39.36-10.93-50.39-30a12 12 0 0 1 20.78-12c3.89 6.73 12.91 18 29.61 18s25.72-11.28 29.61-18a12 12 0 1 1 20.78 12"></svg:path>`,
})
export class PhSmileyStickerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyStickerDuotoneIcon],svg[ph-smiley-sticker-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a95.9 95.9 0 0 1-4.21 28.21l-63.57 63.58A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M174.92 156c-10.29 17.79-27.39 28-46.92 28s-36.63-10.2-46.92-28a8 8 0 1 1 13.84-8c7.47 12.91 19.21 20 33.08 20s25.61-7.1 33.08-20a8 8 0 1 1 13.84 8M232 128a104.4 104.4 0 0 1-4.56 30.56a8 8 0 0 1-2 3.31l-63.57 63.57a7.9 7.9 0 0 1-3.3 2A104 104 0 1 1 232 128m-16 0a87.89 87.89 0 1 0-64 84.69L212.69 152a88 88 0 0 0 3.31-24m-124-8a12 12 0 1 0-12-12a12 12 0 0 0 12 12m72-24a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhSmileyStickerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyStickerFillIcon],svg[ph-smiley-sticker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 30.57 203.43a7.9 7.9 0 0 0 3.3-2l63.57-63.57a8 8 0 0 0 2-3.31A104.09 104.09 0 0 0 128 24M92 96a12 12 0 1 1-12 12a12 12 0 0 1 12-12m82.92 60c-10.29 17.79-27.39 28-46.92 28s-36.63-10.2-46.92-28a8 8 0 1 1 13.84-8c7.47 12.91 19.21 20 33.08 20s25.61-7.1 33.08-20a8 8 0 1 1 13.84 8M164 120a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhSmileyStickerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyStickerLightIcon],svg[ph-smiley-sticker-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 30 199.52a6 6 0 0 0 2.48-1.49L224 160.46a6 6 0 0 0 1.49-2.49A102.06 102.06 0 0 0 128 26m86.47 127l-61.42 61.43A89.91 89.91 0 1 1 214.47 153M82 108a10 10 0 1 1 10 10a10 10 0 0 1-10-10m92 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-.81 47c-9.92 17.16-26.39 27-45.19 27s-35.27-9.84-45.19-27a6 6 0 0 1 10.38-6c7.84 13.54 20.2 21 34.81 21s27-7.46 34.81-21a6 6 0 1 1 10.38 6"></svg:path>`,
})
export class PhSmileyStickerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyStickerThinIcon],svg[ph-smiley-sticker-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 29.39 195.61a3.94 3.94 0 0 0 1.66-1L222.62 159a4 4 0 0 0 1-1.65A100.07 100.07 0 0 0 128 28m88.25 126.1l-62.15 62.15a91.88 91.88 0 1 1 62.15-62.15M84 108a8 8 0 1 1 8 8a8 8 0 0 1-8-8m88 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-.54 46c-9.55 16.52-25.39 26-43.46 26s-33.91-9.48-43.46-26a4 4 0 0 1 6.92-4c8.21 14.19 21.19 22 36.54 22s28.33-7.81 36.54-22a4 4 0 1 1 6.92 4"></svg:path>`,
})
export class PhSmileyStickerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyThinIcon],svg[ph-smiley-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171.46 154c-9.55 16.52-25.39 26-43.46 26s-33.91-9.48-43.46-26a4 4 0 0 1 6.92-4c8.21 14.19 21.19 22 36.54 22s28.33-7.81 36.54-22a4 4 0 1 1 6.92 4M228 128A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92a92.1 92.1 0 0 0 92-92M92 116a8 8 0 1 0-8-8a8 8 0 0 0 8 8m72-16a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhSmileyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyWinkIcon],svg[ph-smiley-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M80 108a12 12 0 1 1 12 12a12 12 0 0 1-12-12m104 0a8 8 0 0 1-8 8h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8m-9.08 48c-10.29 17.79-27.39 28-46.92 28s-36.63-10.2-46.93-28a8 8 0 1 1 13.86-8c7.46 12.91 19.2 20 33.07 20s25.61-7.1 33.08-20a8 8 0 1 1 13.84 8"></svg:path>`,
})
export class PhSmileyWinkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyWinkBoldIcon],svg[ph-smiley-wink-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84M76 108a16 16 0 1 1 16 16a16 16 0 0 1-16-16m112 0a12 12 0 0 1-12 12h-24a12 12 0 0 1 0-24h24a12 12 0 0 1 12 12m-9.61 50c-11 19.06-29.39 30-50.39 30s-39.36-10.93-50.39-30a12 12 0 0 1 20.78-12c3.89 6.73 12.91 18 29.61 18s25.72-11.28 29.61-18a12 12 0 1 1 20.78 12"></svg:path>`,
})
export class PhSmileyWinkBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyWinkDuotoneIcon],svg[ph-smiley-wink-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M80 108a12 12 0 1 1 12 12a12 12 0 0 1-12-12m104 0a8 8 0 0 1-8 8h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8m-9.08 48c-10.29 17.79-27.39 28-46.92 28s-36.63-10.2-46.92-28a8 8 0 1 1 13.84-8c7.47 12.91 19.21 20 33.08 20s25.61-7.1 33.08-20a8 8 0 1 1 13.84 8"></svg:path></svg:g>`,
})
export class PhSmileyWinkDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyWinkFillIcon],svg[ph-smiley-wink-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M92 96a12 12 0 1 1-12 12a12 12 0 0 1 12-12m82.92 60c-10.29 17.79-27.39 28-46.92 28s-36.63-10.2-46.92-28a8 8 0 1 1 13.84-8c7.47 12.91 19.21 20 33.08 20s25.61-7.1 33.08-20a8 8 0 1 1 13.84 8m9.08-40h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhSmileyWinkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyWinkLightIcon],svg[ph-smiley-wink-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90M82 108a10 10 0 1 1 10 10a10 10 0 0 1-10-10m100 0a6 6 0 0 1-6 6h-24a6 6 0 0 1 0-12h24a6 6 0 0 1 6 6m-8.81 47c-9.92 17.16-26.39 27-45.19 27s-35.27-9.84-45.19-27a6 6 0 0 1 10.38-6c7.84 13.54 20.2 21 34.81 21s27-7.46 34.81-21a6 6 0 1 1 10.38 6"></svg:path>`,
})
export class PhSmileyWinkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
