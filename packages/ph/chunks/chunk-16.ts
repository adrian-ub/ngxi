import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSwapBoldIcon],svg[ph-swap-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 48v104a20 20 0 0 1-20 20h-95.08a12 12 0 0 1-17.41 16.49l-20-20a12 12 0 0 1 0-17l20-20A12 12 0 0 1 112.92 148H204V52H100a12 12 0 0 1-24 0v-4a20 20 0 0 1 20-20h112a20 20 0 0 1 20 20m-60 144a12 12 0 0 0-12 12H52v-96h91.08a12 12 0 0 0 17.41 16.49l20-20a12 12 0 0 0 0-17l-20-20A12 12 0 0 0 143.08 84H48a20 20 0 0 0-20 20v104a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20v-4a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhSwapBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwapDuotoneIcon],svg[ph-swap-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v104a8 8 0 0 1-8 8h-40v48a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V104a8 8 0 0 1 8-8h40V48a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M224 48v104a16 16 0 0 1-16 16H99.31l10.35 10.34a8 8 0 0 1-11.32 11.32l-24-24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L99.31 152H208V48H96v8a8 8 0 0 1-16 0v-8a16 16 0 0 1 16-16h112a16 16 0 0 1 16 16m-56 144a8 8 0 0 0-8 8v8H48V104h108.69l-10.35 10.34a8 8 0 0 0 11.32 11.32l24-24a8 8 0 0 0 0-11.32l-24-24a8 8 0 0 0-11.32 11.32L156.69 88H48a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-8a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhSwapDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwapFillIcon],svg[ph-swap-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48v104a16 16 0 0 1-16 16h-96v16a8 8 0 0 1-13.66 5.66l-24-24a8 8 0 0 1 0-11.32l24-24A8 8 0 0 1 112 136v16h96V48H96v8a8 8 0 0 1-16 0v-8a16 16 0 0 1 16-16h112a16 16 0 0 1 16 16m-56 144a8 8 0 0 0-8 8v8H48V104h96v16a8 8 0 0 0 13.66 5.66l24-24a8 8 0 0 0 0-11.32l-24-24A8 8 0 0 0 144 72v16H48a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhSwapFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwapLightIcon],svg[ph-swap-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 48v104a14 14 0 0 1-14 14H94.49l13.75 13.76a6 6 0 1 1-8.48 8.48l-24-24a6 6 0 0 1 0-8.48l24-24a6 6 0 0 1 8.48 8.48L94.49 154H208a2 2 0 0 0 2-2V48a2 2 0 0 0-2-2H96a2 2 0 0 0-2 2v8a6 6 0 0 1-12 0v-8a14 14 0 0 1 14-14h112a14 14 0 0 1 14 14m-54 146a6 6 0 0 0-6 6v8a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V104a2 2 0 0 1 2-2h113.51l-13.75 13.76a6 6 0 1 0 8.48 8.48l24-24a6 6 0 0 0 0-8.48l-24-24a6 6 0 0 0-8.48 8.48L161.51 90H48a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-8a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhSwapLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwapThinIcon],svg[ph-swap-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 48v104a12 12 0 0 1-12 12H89.66l17.17 17.17a4 4 0 0 1-5.66 5.66l-24-24a4 4 0 0 1 0-5.66l24-24a4 4 0 0 1 5.66 5.66L89.66 156H208a4 4 0 0 0 4-4V48a4 4 0 0 0-4-4H96a4 4 0 0 0-4 4v8a4 4 0 0 1-8 0v-8a12 12 0 0 1 12-12h112a12 12 0 0 1 12 12m-52 148a4 4 0 0 0-4 4v8a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V104a4 4 0 0 1 4-4h118.34l-17.17 17.17a4 4 0 0 0 5.66 5.66l24-24a4 4 0 0 0 0-5.66l-24-24a4 4 0 0 0-5.66 5.66L166.34 92H48a12 12 0 0 0-12 12v104a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-8a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhSwapThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwatchesIcon],svg[ph-swatches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 180a12 12 0 1 1-12-12a12 12 0 0 1 12 12m152-23.81V208a16 16 0 0 1-16 16H76a46.4 46.4 0 0 1-7.94-.68a44 44 0 0 1-35.43-50.95l25-143.13a15.94 15.94 0 0 1 18.47-13L130.84 26a16 16 0 0 1 12.92 18.52l-12.08 69L199.49 89a16 16 0 0 1 20.45 9.52L239 150.69a18.4 18.4 0 0 1 1 5.5m-137 28.68l25-143.13L73.46 32l-25 143.1a28 28 0 0 0 22.44 32.47A27.3 27.3 0 0 0 91.46 203A27.84 27.84 0 0 0 103 184.87M116.78 195L224 156.11L204.92 104l-76.42 27.7l-9.78 55.92a44.6 44.6 0 0 1-1.94 7.38M224 173.12L127.74 208H224Z"></svg:path>`,
})
export class PhSwatchesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwatchesBoldIcon],svg[ph-swatches-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M242.79 149.32L223.7 97.11a20 20 0 0 0-25.58-11.91l-61.31 22.22l10.89-62.24A20 20 0 0 0 131.55 22l-54.68-9.69a19.94 19.94 0 0 0-23.11 16.24l-25 143.13a48 48 0 0 0 38.64 55.58a51 51 0 0 0 8.7.74H224a20 20 0 0 0 20-20v-51.81a21.7 21.7 0 0 0-1.21-6.87M99 184.18a23.84 23.84 0 0 1-9.86 15.56a23.28 23.28 0 0 1-17.56 3.89a24 24 0 0 1-19.23-27.82L76.71 36.66L123.37 45zm23.64 4.13l9.39-53.64l70.49-25.54l16.3 44.59l-96.23 34.87c.03-.09.06-.18.07-.28ZM220 204h-69.48L220 178.82ZM89.22 174.07l-1.4 8A12 12 0 0 1 76 192a12.4 12.4 0 0 1-2.08-.18a12 12 0 0 1-9.75-13.89l1.4-8a12 12 0 0 1 23.64 4.14Z"></svg:path>`,
})
export class PhSwatchesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwatchesDuotoneIcon],svg[ph-swatches-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m135.88 43.11l-25 143.14a35.71 35.71 0 0 1-41.34 29.2a36 36 0 0 1-28.95-41.71l25-143.13a8 8 0 0 1 9.19-6.49l54.67 9.73a8 8 0 0 1 6.43 9.26" opacity=".2"></svg:path><svg:path d="M88 180a12 12 0 1 1-12-12a12 12 0 0 1 12 12m152-23.81V208a16 16 0 0 1-16 16H76a46.4 46.4 0 0 1-7.94-.68a44 44 0 0 1-35.43-50.95l25-143.13a15.94 15.94 0 0 1 18.47-13L130.84 26a16 16 0 0 1 12.92 18.52l-12.08 69L199.49 89a16 16 0 0 1 20.45 9.52L239 150.69a18.4 18.4 0 0 1 1 5.5m-137 28.68l25-143.13L73.46 32l-25 143.1a28 28 0 0 0 22.44 32.47A27.3 27.3 0 0 0 91.46 203A27.84 27.84 0 0 0 103 184.87M116.78 195L224 156.11L204.92 104l-76.42 27.7l-9.78 55.92a44.6 44.6 0 0 1-1.94 7.38M224 173.12L127.74 208H224Z"></svg:path></svg:g>`,
})
export class PhSwatchesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwatchesFillIcon],svg[ph-swatches-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 155.91a16 16 0 0 0-1-5.22l-19.06-52.21A16 16 0 0 0 199.49 89l-67.81 24.57l12.08-69A16 16 0 0 0 130.84 26l-54.67-9.75a15.94 15.94 0 0 0-18.47 13l-25 143.12A43.82 43.82 0 0 0 75.78 224H224a16 16 0 0 0 16-16ZM76 196a16 16 0 1 1 16-16a16 16 0 0 1-16 16m42.72-8.38l9.78-55.92l76.42-27.7L224 156.11L116.78 195a45 45 0 0 0 1.94-7.38M224 208h-96.26L224 173.11Z"></svg:path>`,
})
export class PhSwatchesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwatchesLightIcon],svg[ph-swatches-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M86 180a10 10 0 1 1-10-10a10 10 0 0 1 10 10m152-23.81V208a14 14 0 0 1-14 14H76a44 44 0 0 1-7.58-.65a42 42 0 0 1-33.81-48.64l25-143.13a13.94 13.94 0 0 1 16.21-11.36l54.67 9.72a14 14 0 0 1 11.3 16.21l-12.67 72.44l71-25.75a14 14 0 0 1 17.89 8.32l19.09 52.22a15.7 15.7 0 0 1 .9 4.81m-133.07 29L130 42.08a2 2 0 0 0-1.58-2.32L73.72 30h-.34a1.84 1.84 0 0 0-1.07.35a2 2 0 0 0-.82 1.3l-25 143.13a30 30 0 0 0 24.09 34.76a29.25 29.25 0 0 0 22-4.89a29.8 29.8 0 0 0 12.33-19.44Zm8.25 13.17L224.71 158a2 2 0 0 0 1.11-1a1.86 1.86 0 0 0 .06-1.46l-19.09-52.21a2 2 0 0 0-2.53-1.17l-77.53 28.09l-10 57.07a42 42 0 0 1-3.55 11.06ZM226 170.27L116.35 210H224a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhSwatchesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwatchesThinIcon],svg[ph-swatches-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.27 152.07l-19.08-52.22a12 12 0 0 0-15.34-7.13l-74.3 26.92l13.27-75.83a12 12 0 0 0-9.68-13.9l-54.67-9.72a11.75 11.75 0 0 0-8.89 2a11.9 11.9 0 0 0-4.94 7.77l-25 143.13a40 40 0 0 0 32.16 46.3a42.7 42.7 0 0 0 7.2.61h148a12 12 0 0 0 12-12v-51.81a14 14 0 0 0-.73-4.12m-31.7-51.83a4 4 0 0 1 5.1 2.36l19.09 52.21a3.9 3.9 0 0 1-.13 3a3.94 3.94 0 0 1-2.24 2l-116.61 42.3a40 40 0 0 0 6-15.17L125 128.73ZM93.75 206.29a31.25 31.25 0 0 1-23.55 5.22a32 32 0 0 1-25.71-37.08l25-143.13a4 4 0 0 1 1.64-2.59a3.85 3.85 0 0 1 2.25-.71a4 4 0 0 1 .69.06l54.67 9.73a4 4 0 0 1 3.2 4.64l-25 143.13a31.8 31.8 0 0 1-13.19 20.73M228 208a4 4 0 0 1-4 4H105l123-44.59ZM84 180a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSwatchesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwimmingPoolIcon],svg[ph-swimming-pool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 149.39a8 8 0 0 0 8-8V128h64v15.29a8 8 0 0 0 16 0V32a8 8 0 0 0-16 0v16H96V32a8 8 0 0 0-16 0v109.39a8 8 0 0 0 8 8M96 112V96h64v16Zm64-48v16H96V64ZM24 168a8 8 0 0 1 8-8c14.42 0 22.19 5.18 28.44 9.34C66 173.06 70.42 176 80 176s14-2.94 19.56-6.66c6.24-4.16 14-9.34 28.43-9.34s22.2 5.18 28.44 9.34c5.58 3.72 10 6.66 19.57 6.66s14-2.94 19.56-6.66c6.25-4.16 14-9.34 28.44-9.34a8 8 0 0 1 0 16c-9.58 0-14 2.94-19.56 6.66c-6.25 4.16-14 9.34-28.44 9.34s-22.2-5.18-28.44-9.34C142 178.94 137.57 176 128 176s-14 2.94-19.56 6.66c-6.24 4.16-14 9.34-28.43 9.34s-22.19-5.18-28.44-9.34C46 178.94 41.58 176 32 176a8 8 0 0 1-8-8m208 40a8 8 0 0 1-8 8c-9.58 0-14 2.94-19.56 6.66c-6.25 4.16-14 9.34-28.44 9.34s-22.2-5.18-28.44-9.34C142 218.94 137.57 216 128 216s-14 2.94-19.56 6.66c-6.24 4.16-14 9.34-28.43 9.34s-22.19-5.18-28.44-9.34C46 218.94 41.58 216 32 216a8 8 0 0 1 0-16c14.42 0 22.19 5.18 28.44 9.34C66 213.06 70.42 216 80 216s14-2.94 19.56-6.66c6.24-4.16 14-9.34 28.43-9.34s22.2 5.18 28.44 9.34c5.58 3.72 10 6.66 19.57 6.66s14-2.94 19.56-6.66c6.25-4.16 14-9.34 28.44-9.34a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSwimmingPoolIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwimmingPoolBoldIcon],svg[ph-swimming-pool-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 149.39a12 12 0 0 0 12-12V136h56v3.29a12 12 0 0 0 24 0V32a12 12 0 0 0-24 0v8h-56v-8a12 12 0 0 0-24 0v105.39a12 12 0 0 0 12 12M100 112v-12h56v12Zm56-48v12h-56V64ZM20 164a12 12 0 0 1 12-12c15.63 0 24 5.55 30.66 10c5.4 3.6 9 6 17.34 6s11.93-2.38 17.34-6c6.69-4.47 15-10 30.65-10s24 5.55 30.66 10c5.41 3.6 9 6 17.35 6s11.94-2.38 17.34-6c6.7-4.47 15-10 30.66-10a12 12 0 0 1 0 24c-8.37 0-11.94 2.38-17.35 6c-6.69 4.47-15 10-30.65 10s-24-5.55-30.66-10c-5.41-3.6-9-6-17.35-6s-11.93 2.38-17.34 6c-6.69 4.47-15 10-30.65 10s-24-5.55-30.66-10c-5.4-3.6-9-6-17.34-6a12 12 0 0 1-12-12m216 44a12 12 0 0 1-12 12c-8.37 0-11.94 2.38-17.35 6c-6.69 4.47-15 10-30.65 10s-24-5.55-30.66-10c-5.41-3.6-9-6-17.35-6s-11.93 2.38-17.34 6c-6.69 4.47-15 10-30.65 10s-24-5.55-30.66-10c-5.4-3.6-9-6-17.34-6a12 12 0 0 1 0-24c15.63 0 24 5.55 30.66 10c5.4 3.6 9 6 17.34 6s11.93-2.38 17.34-6c6.69-4.47 15-10 30.65-10s24 5.55 30.66 10c5.41 3.6 9 6 17.35 6s11.94-2.38 17.34-6c6.7-4.47 15-10 30.66-10a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhSwimmingPoolBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwimmingPoolDuotoneIcon],svg[ph-swimming-pool-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 168v40c-24 0-24 16-48 16s-24-16-48-16s-24 16-48 16s-24-16-48-16v-40c24 0 24 16 48 16s24-16 48-16s24 16 48 16s24-16 48-16" opacity=".2"></svg:path><svg:path d="M88 149.39a8 8 0 0 0 8-8V128h64v15.29a8 8 0 0 0 16 0V32a8 8 0 0 0-16 0v16H96V32a8 8 0 0 0-16 0v109.39a8 8 0 0 0 8 8M96 112V96h64v16Zm64-48v16H96V64ZM24 168a8 8 0 0 1 8-8c14.42 0 22.19 5.18 28.44 9.34C66 173.06 70.42 176 80 176s14-2.94 19.56-6.66c6.24-4.16 14-9.34 28.43-9.34s22.2 5.18 28.44 9.34c5.58 3.72 10 6.66 19.57 6.66s14-2.94 19.56-6.66c6.25-4.16 14-9.34 28.44-9.34a8 8 0 0 1 0 16c-9.58 0-14 2.94-19.56 6.66c-6.25 4.16-14 9.34-28.44 9.34s-22.2-5.18-28.44-9.34C142 178.94 137.57 176 128 176s-14 2.94-19.56 6.66c-6.24 4.16-14 9.34-28.43 9.34s-22.19-5.18-28.44-9.34C46 178.94 41.58 176 32 176a8 8 0 0 1-8-8m208 40a8 8 0 0 1-8 8c-9.58 0-14 2.94-19.56 6.66c-6.25 4.16-14 9.34-28.44 9.34s-22.2-5.18-28.44-9.34C142 218.94 137.57 216 128 216s-14 2.94-19.56 6.66c-6.24 4.16-14 9.34-28.43 9.34s-22.19-5.18-28.44-9.34C46 218.94 41.58 216 32 216a8 8 0 0 1 0-16c14.42 0 22.19 5.18 28.44 9.34C66 213.06 70.42 216 80 216s14-2.94 19.56-6.66c6.24-4.16 14-9.34 28.43-9.34s22.2 5.18 28.44 9.34c5.58 3.72 10 6.66 19.57 6.66s14-2.94 19.56-6.66c6.25-4.16 14-9.34 28.44-9.34a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhSwimmingPoolDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwimmingPoolFillIcon],svg[ph-swimming-pool-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 168a8 8 0 0 1 8-8c14.42 0 22.19 5.18 28.44 9.34C66 173.06 70.42 176 80 176s14-2.94 19.56-6.66c6.24-4.16 14-9.34 28.43-9.34s22.2 5.18 28.44 9.34c5.58 3.72 10 6.66 19.57 6.66s14-2.94 19.56-6.66c6.25-4.16 14-9.34 28.44-9.34a8 8 0 0 1 0 16c-9.58 0-14 2.94-19.56 6.66c-6.25 4.16-14 9.34-28.44 9.34s-22.2-5.18-28.44-9.34C142 178.94 137.57 176 128 176s-14 2.94-19.56 6.66c-6.24 4.16-14 9.34-28.43 9.34s-22.19-5.18-28.44-9.34C46 178.94 41.58 176 32 176a8 8 0 0 1-8-8m200 32c-14.42 0-22.19 5.18-28.44 9.34C190 213.06 185.58 216 176 216s-14-2.94-19.57-6.66c-6.24-4.16-14-9.34-28.44-9.34s-22.19 5.18-28.43 9.34C94 213.06 89.57 216 80 216s-14-2.94-19.56-6.66C54.19 205.18 46.42 200 32 200a8 8 0 0 0 0 16c9.58 0 14 2.94 19.56 6.66c6.25 4.16 14 9.34 28.44 9.34s22.19-5.18 28.43-9.34c5.58-3.72 10-6.66 19.56-6.66s14 2.94 19.57 6.66c6.24 4.16 14 9.34 28.44 9.34s22.19-5.18 28.44-9.34c5.57-3.72 10-6.66 19.56-6.66a8 8 0 0 0 0-16M80 141.39V32a8 8 0 0 1 16 0v8h64v-8a8 8 0 0 1 16 0v111.29a8 8 0 0 1-16 0V136H96v5.39a8 8 0 0 1-16 0M96 72a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8m0 32a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8"></svg:path>`,
})
export class PhSwimmingPoolFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwimmingPoolLightIcon],svg[ph-swimming-pool-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 147.39a6 6 0 0 0 6-6V126h68v17.29a6 6 0 0 0 12 0V32a6 6 0 0 0-12 0v18H94V32a6 6 0 0 0-12 0v109.39a6 6 0 0 0 6 6M94 114V94h68v20Zm68-52v20H94V62ZM26 168a6 6 0 0 1 6-6c13.82 0 21 4.79 27.33 9c5.63 3.75 10.48 7 20.67 7s15-3.24 20.67-7c6.33-4.22 13.51-9 27.32-9s21 4.79 27.33 9c5.63 3.75 10.49 7 20.68 7s15-3.24 20.67-7c6.33-4.22 13.51-9 27.33-9a6 6 0 0 1 0 12c-10.18 0-15 3.24-20.67 7c-6.34 4.22-13.52 9-27.33 9s-21-4.79-27.33-9c-5.63-3.75-10.49-7-20.68-7s-15 3.24-20.67 7c-6.33 4.22-13.51 9-27.32 9s-21-4.79-27.33-9c-5.67-3.76-10.49-7-20.67-7a6 6 0 0 1-6-6m204 40a6 6 0 0 1-6 6c-10.18 0-15 3.24-20.67 7c-6.34 4.22-13.52 9-27.33 9s-21-4.79-27.33-9c-5.63-3.75-10.49-7-20.68-7s-15 3.24-20.67 7c-6.33 4.22-13.51 9-27.32 9s-21-4.79-27.33-9c-5.67-3.76-10.49-7-20.67-7a6 6 0 0 1 0-12c13.82 0 21 4.79 27.33 9c5.63 3.75 10.48 7 20.67 7s15-3.24 20.67-7c6.33-4.22 13.51-9 27.32-9s21 4.79 27.33 9c5.63 3.75 10.49 7 20.68 7s15-3.24 20.67-7c6.33-4.22 13.51-9 27.33-9a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhSwimmingPoolLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwimmingPoolThinIcon],svg[ph-swimming-pool-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 145.39a4 4 0 0 0 4-4V124h72v19.29a4 4 0 0 0 8 0V32a4 4 0 0 0-8 0v20H92V32a4 4 0 0 0-8 0v109.39a4 4 0 0 0 4 4M92 116V92h72v24Zm72-56v24H92V60ZM28 168a4 4 0 0 1 4-4c13.21 0 20.12 4.61 26.22 8.67c5.9 3.93 11 7.33 21.78 7.33s15.88-3.4 21.78-7.33c6.09-4.06 13-8.67 26.21-8.67s20.13 4.61 26.22 8.67c5.9 3.93 11 7.33 21.79 7.33s15.88-3.4 21.78-7.33c6.1-4.06 13-8.67 26.22-8.67a4 4 0 0 1 0 8c-10.79 0-15.88 3.4-21.78 7.33c-6.1 4.06-13 8.67-26.22 8.67s-20.13-4.61-26.22-8.67c-5.9-3.93-11-7.33-21.79-7.33s-15.88 3.4-21.78 7.33c-6.09 4.06-13 8.67-26.21 8.67s-20.12-4.61-26.22-8.67C47.88 175.4 42.79 172 32 172a4 4 0 0 1-4-4m200 40a4 4 0 0 1-4 4c-10.79 0-15.88 3.4-21.78 7.33c-6.1 4.06-13 8.67-26.22 8.67s-20.13-4.61-26.22-8.67c-5.9-3.93-11-7.33-21.79-7.33s-15.88 3.4-21.78 7.33c-6.09 4.06-13 8.67-26.21 8.67s-20.12-4.61-26.22-8.67C47.88 215.4 42.79 212 32 212a4 4 0 0 1 0-8c13.21 0 20.12 4.61 26.22 8.67c5.9 3.93 11 7.33 21.78 7.33s15.88-3.4 21.78-7.33c6.09-4.06 13-8.67 26.21-8.67s20.13 4.61 26.22 8.67c5.9 3.93 11 7.33 21.79 7.33s15.88-3.4 21.78-7.33c6.1-4.06 13-8.67 26.22-8.67a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhSwimmingPoolThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwordIcon],svg[ph-sword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 32h-64a8 8 0 0 0-6.34 3.12l-64 83.21l-9.66-9.64a16 16 0 0 0-22.64 0l-12.69 12.7a16 16 0 0 0 0 22.63l20 20l-28 28a16 16 0 0 0 0 22.63l12.69 12.68a16 16 0 0 0 22.62 0l28-28l20 20a16 16 0 0 0 22.64 0l12.69-12.7a16 16 0 0 0 0-22.63l-9.64-9.64l83.21-64A8 8 0 0 0 224 104V40a8 8 0 0 0-8-8M52.69 216L40 203.32l28-28L80.68 188Zm70.61-8L48 132.71L60.7 120l75.3 75.31ZM208 100.06l-81.74 62.88L115.32 152l50.34-50.34a8 8 0 0 0-11.32-11.31L104 140.68l-10.93-10.94L155.94 48H208Z"></svg:path>`,
})
export class PhSwordIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwordBoldIcon],svg[ph-sword-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 28h-64a12 12 0 0 0-9.33 4.45L79.5 110.51l-4.66-4.65a20 20 0 0 0-28.29 0l-16.69 16.69a20 20 0 0 0 0 28.29L45 166l-21.14 21.17a20 20 0 0 0 0 28.28l16.69 16.69a20 20 0 0 0 28.28 0L90 211l15.17 15.16a20 20 0 0 0 28.29 0l16.69-16.69a20 20 0 0 0 0-28.3l-4.65-4.65l78.06-63.17A12 12 0 0 0 228 104V40a12 12 0 0 0-12-12M54.69 212.34l-11-11L62 183l11 11Zm64.61-6L49.65 136.7l11.05-11l69.65 69.65ZM204 98.27l-75.58 61.17L121 152l47.51-47.5a12 12 0 0 0-17-17L104 135l-7.45-7.44L157.73 52H204Z"></svg:path>`,
})
export class PhSwordBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwordDuotoneIcon],svg[ph-sword-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M141.66 201L129 213.66a8 8 0 0 1-11.32 0L92 188l-33.65 33.66a8 8 0 0 1-11.32 0L34.34 209a8 8 0 0 1 0-11.31L68 164l-25.66-25.64a8 8 0 0 1 0-11.32L55 114.34a8 8 0 0 1 11.32 0l75.3 75.3a8 8 0 0 1 .04 11.36" opacity=".2"></svg:path><svg:path d="M216 32h-64a8 8 0 0 0-6.34 3.12l-64 83.21l-9.66-9.64a16 16 0 0 0-22.64 0l-12.69 12.7a16 16 0 0 0 0 22.63l20 20l-28 28a16 16 0 0 0 0 22.63l12.69 12.68a16 16 0 0 0 22.62 0l28-28l20 20a16 16 0 0 0 22.64 0l12.69-12.7a16 16 0 0 0 0-22.63l-9.64-9.64l83.21-64A8 8 0 0 0 224 104V40a8 8 0 0 0-8-8M52.69 216L40 203.32l28-28L80.68 188Zm70.61-8L48 132.71L60.7 120l75.3 75.31ZM208 100.06l-81.74 62.88L115.32 152l50.34-50.34a8 8 0 0 0-11.32-11.31L104 140.68l-10.93-10.94L155.94 48H208Z"></svg:path></svg:g>`,
})
export class PhSwordDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwordFillIcon],svg[ph-sword-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 32h-64a8 8 0 0 0-6.34 3.12l-64 83.21l-9.66-9.64a16 16 0 0 0-22.64 0l-8.69 8.7a16 16 0 0 0 0 22.63l22 22l-32 32a16 16 0 0 0 0 22.63l8.69 8.68a16 16 0 0 0 22.62 0l32-32l22 22a16 16 0 0 0 22.64 0l8.69-8.7a16 16 0 0 0 0-22.63l-9.64-9.64l83.21-64A8 8 0 0 0 224 104V40a8 8 0 0 0-8-8m-8 68.06l-81.74 62.88L115.32 152l50.34-50.34a8 8 0 0 0-11.32-11.31L104 140.68l-10.93-10.94L155.94 48H208Z"></svg:path>`,
})
export class PhSwordFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwordLightIcon],svg[ph-sword-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 34h-64a6 6 0 0 0-4.76 2.34l-65.39 85L70.6 110.1a14 14 0 0 0-19.8 0l-12.7 12.7a14 14 0 0 0 0 19.81L59.51 164L30.1 193.42a14 14 0 0 0 0 19.8l12.69 12.69a14 14 0 0 0 19.8 0L92 196.5l21.4 21.4a14 14 0 0 0 19.8 0l12.7-12.69a14 14 0 0 0 0-19.81l-11.25-11.25l85-65.39A6 6 0 0 0 222 104V40a6 6 0 0 0-6-6M54.1 217.42a2 2 0 0 1-2.83 0l-12.68-12.69a2 2 0 0 1 0-2.82L68 172.5L83.51 188Zm83.31-20.7l-12.69 12.7a2 2 0 0 1-2.84 0l-75.29-75.3a2 2 0 0 1 0-2.83l12.69-12.7a2 2 0 0 1 2.84 0l75.29 75.3a2 2 0 0 1 0 2.83M210 101.05l-83.91 64.55l-13.6-13.6l51.75-51.76a6 6 0 0 0-8.48-8.48L104 143.51l-13.6-13.6L155 46h55Z"></svg:path>`,
})
export class PhSwordLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwordThinIcon],svg[ph-sword-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36h-64a4 4 0 0 0-3.17 1.56l-66.78 86.82l-12.86-12.86a12 12 0 0 0-17 0l-12.67 12.69a12 12 0 0 0 0 17L62.34 164l-30.82 30.83a12 12 0 0 0 0 17l12.68 12.66a12 12 0 0 0 17 0L92 193.67l22.81 22.82a12 12 0 0 0 17 0l12.69-12.7a12 12 0 0 0 0-17L131.62 174l86.82-66.79A4 4 0 0 0 220 104V40a4 4 0 0 0-4-4M55.52 218.83a4 4 0 0 1-5.66 0l-12.69-12.68a4 4 0 0 1 0-5.66L68 169.67L86.34 188Zm83.31-26.36a4 4 0 0 1 0 5.67l-12.7 12.69a4 4 0 0 1-5.66 0l-75.3-75.3a4 4 0 0 1 0-5.66l12.7-12.69a4 4 0 0 1 5.66 0ZM212 102l-86.08 66.22L109.66 152l53.17-53.17a4 4 0 1 0-5.66-5.66L104 146.34l-16.25-16.26L154 44h58Z"></svg:path>`,
})
export class PhSwordThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSynagogueIcon],svg[ph-synagogue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 57.38V32a8 8 0 0 0-16 0v25.38A24 24 0 0 0 176 80v42.21l-40-22.85V72a8 8 0 0 0-16 0v27.36l-40 22.85V80a24 24 0 0 0-16-22.62V32a8 8 0 0 0-16 0v25.38A24 24 0 0 0 32 80v136a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8V80a24 24 0 0 0-16-22.62M200 72a8 8 0 0 1 8 8v24h-16V80a8 8 0 0 1 8-8M56 72a8 8 0 0 1 8 8v24H48V80a8 8 0 0 1 8-8m-8 48h16v88H48Zm80 32a24 24 0 0 0-24 24v32H80v-67.36l48-27.43l48 27.43V208h-24v-32a24 24 0 0 0-24-24m64 56v-88h16v88Z"></svg:path>`,
})
export class PhSynagogueIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSynagogueBoldIcon],svg[ph-synagogue-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 54.34V32a12 12 0 0 0-24 0v22.34A32.06 32.06 0 0 0 164 84v26.75L140 97V72a12 12 0 0 0-24 0v25l-24 13.75V84a32.06 32.06 0 0 0-20-29.66V32a12 12 0 0 0-24 0v22.34A32.06 32.06 0 0 0 28 84v132a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V84a32.06 32.06 0 0 0-20-29.66M128 160a12 12 0 0 0-12 12v32H92v-65.61l36-20.57l36 20.57V204h-24v-32a12 12 0 0 0-12-12M52 84a8 8 0 0 1 16 0v16H52Zm136 0a8 8 0 0 1 16 0v16h-16ZM52 124h16v80H52Zm136 80v-80h16v80Z"></svg:path>`,
})
export class PhSynagogueBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSynagogueDuotoneIcon],svg[ph-synagogue-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v32h-32V80a16 16 0 0 1 16-16a16 16 0 0 1 16 16M72 80a16 16 0 0 0-16-16a16 16 0 0 0-16 16v32h32Zm0 56v80h40v-40a16 16 0 0 1 16-16a16 16 0 0 1 16 16v40h40v-80l-56-32Z" opacity=".2"></svg:path><svg:path d="M208 57.38V32a8 8 0 0 0-16 0v25.38A24 24 0 0 0 176 80v42.21l-40-22.85V72a8 8 0 0 0-16 0v27.36l-40 22.85V80a24 24 0 0 0-16-22.62V32a8 8 0 0 0-16 0v25.38A24 24 0 0 0 32 80v136a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8V80a24 24 0 0 0-16-22.62M200 72a8 8 0 0 1 8 8v24h-16V80a8 8 0 0 1 8-8M56 72a8 8 0 0 1 8 8v24H48V80a8 8 0 0 1 8-8m-8 48h16v88H48Zm80 32a24 24 0 0 0-24 24v32H80v-67.36l48-27.43l48 27.43V208h-24v-32a24 24 0 0 0-24-24m64 56v-88h16v88Z"></svg:path></svg:g>`,
})
export class PhSynagogueDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSynagogueFillIcon],svg[ph-synagogue-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 57.38V32a8 8 0 0 0-16 0v25.38A24 24 0 0 0 176 80v42.21l-40-22.85V72a8 8 0 0 0-16 0v27.36l-40 22.85V80a24 24 0 0 0-16-22.62V32a8 8 0 0 0-16 0v25.38A24 24 0 0 0 32 80v136a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-40a16 16 0 0 1 32 0v40a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V80a24 24 0 0 0-16-22.62M64 208H48v-96h16Zm144 0h-16v-96h16Z"></svg:path>`,
})
export class PhSynagogueFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSynagogueLightIcon],svg[ph-synagogue-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 58.84V32a6 6 0 0 0-12 0v26.84A22 22 0 0 0 178 80v45.66l-44-25.14V72a6 6 0 0 0-12 0v28.52l-44 25.14V80a22 22 0 0 0-16-21.16V32a6 6 0 0 0-12 0v26.84A22 22 0 0 0 34 80v136a6 6 0 0 0 6 6h72a6 6 0 0 0 6-6v-40a10 10 0 0 1 20 0v40a6 6 0 0 0 6 6h72a6 6 0 0 0 6-6V80a22 22 0 0 0-16-21.16M200 70a10 10 0 0 1 10 10v26h-20V80a10 10 0 0 1 10-10M56 70a10 10 0 0 1 10 10v26H46V80a10 10 0 0 1 10-10m-10 48h20v92H46Zm82 36a22 22 0 0 0-22 22v34H78v-70.52l50-28.57l50 28.57V210h-28v-34a22 22 0 0 0-22-22m62 56v-92h20v92Z"></svg:path>`,
})
export class PhSynagogueLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSynagogueThinIcon],svg[ph-synagogue-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 60.4V32a4 4 0 0 0-8 0v28.4A20 20 0 0 0 180 80v49.11l-48-27.43V72a4 4 0 0 0-8 0v29.68l-48 27.43V80a20 20 0 0 0-16-19.6V32a4 4 0 0 0-8 0v28.4A20 20 0 0 0 36 80v136a4 4 0 0 0 4 4h72a4 4 0 0 0 4-4v-40a12 12 0 0 1 24 0v40a4 4 0 0 0 4 4h72a4 4 0 0 0 4-4V80a20 20 0 0 0-16-19.6m-4 7.6a12 12 0 0 1 12 12v28h-24V80a12 12 0 0 1 12-12M56 68a12 12 0 0 1 12 12v28H44V80a12 12 0 0 1 12-12m-12 48h24v96H44Zm84 40a20 20 0 0 0-20 20v36H76v-73.68l52-29.71l52 29.71V212h-32v-36a20 20 0 0 0-20-20m60 56v-96h24v96Z"></svg:path>`,
})
export class PhSynagogueThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSyringeIcon],svg[ph-syringe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.66 66.34l-48-48a8 8 0 0 0-11.32 11.32L196.69 48L168 76.69l-34.34-34.35a8 8 0 0 0-11.32 11.32l6.35 6.34l-84 84A15.86 15.86 0 0 0 40 155.31v49.38l-21.66 21.65a8 8 0 0 0 11.32 11.32L51.31 216h49.38a15.86 15.86 0 0 0 11.31-4.69l84-84l6.34 6.35a8 8 0 0 0 11.32-11.32L179.31 88L208 59.31l18.34 18.35a8 8 0 0 0 11.32-11.32M100.69 200H56v-44.69l18-18l20.34 20.35a8 8 0 0 0 11.32-11.32L85.31 126L98 113.31l20.34 20.35a8 8 0 0 0 11.32-11.32L109.31 102L140 71.31L184.69 116Z"></svg:path>`,
})
export class PhSyringeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSyringeBoldIcon],svg[ph-syringe-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.49 63.51l-48-48a12 12 0 0 0-17 17L191 48l-23 23l-31.51-31.49a12 12 0 1 0-17 17L123 60l-81.14 81.17A19.86 19.86 0 0 0 36 155.31V203l-20.49 20.51a12 12 0 0 0 17 17L53 220h47.72a19.86 19.86 0 0 0 14.14-5.86L196 133l3.51 3.52a12 12 0 0 0 17-17L185 88l23-23l15.51 15.52a12 12 0 1 0 17-17ZM99 196H60v-39l14-14l17.51 17.52a12 12 0 0 0 17-17L91 126l11-11l17.51 17.52a12 12 0 0 0 17-17L119 98l21-21l39 39Z"></svg:path>`,
})
export class PhSyringeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSyringeDuotoneIcon],svg[ph-syringe-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m196 116l-89.66 89.66a8 8 0 0 1-5.65 2.34H48v-52.69a8 8 0 0 1 2.34-5.65L140 60Z" opacity=".2"></svg:path><svg:path d="m237.66 66.34l-48-48a8 8 0 0 0-11.32 11.32L196.69 48L168 76.69l-34.34-34.35a8 8 0 0 0-11.32 11.32l6.35 6.34l-84 84A15.86 15.86 0 0 0 40 155.31v49.38l-21.66 21.65a8 8 0 0 0 11.32 11.32L51.31 216h49.38a15.86 15.86 0 0 0 11.31-4.69l84-84l6.34 6.35a8 8 0 0 0 11.32-11.32L179.31 88L208 59.31l18.34 18.35a8 8 0 0 0 11.32-11.32M100.69 200H56v-44.69l18-18l20.34 20.35a8 8 0 0 0 11.32-11.32L85.31 126L98 113.31l20.34 20.35a8 8 0 0 0 11.32-11.32L109.31 102L140 71.31L184.69 116Z"></svg:path></svg:g>`,
})
export class PhSyringeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSyringeFillIcon],svg[ph-syringe-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.66 77.6a8 8 0 0 1-11.32 0L208 59.25L179.3 88l34.35 34.35a8 8 0 0 1-11.32 11.32l-6.33-6.4l-84 84a16 16 0 0 1-11.35 4.73H51.26L29.6 237.66a8 8 0 0 1-11.72-.43a8.21 8.21 0 0 1 .61-11.1l21.45-21.46v-49.39A16 16 0 0 1 44.63 144l15.18-15.18a4 4 0 0 1 5.66 0l28.83 28.81a8 8 0 1 0 11.32-11.32l-28.84-28.84a4 4 0 0 1 0-5.66l11-11a4 4 0 0 1 5.66 0l28.84 28.84a8 8 0 1 0 11.32-11.32l-28.81-28.87a4 4 0 0 1 0-5.66l23.87-23.86l-6.35-6.35a8 8 0 0 1 .18-11.49a8.22 8.22 0 0 1 11.37.41L168 76.63l28.69-28.7l-18.36-18.35a8 8 0 0 1 .17-11.49a8.23 8.23 0 0 1 11.38.41l47.78 47.78a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhSyringeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSyringeLightIcon],svg[ph-syringe-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.24 67.76l-48-48a6 6 0 0 0-8.48 8.48L199.51 48L168 79.51l-35.76-35.75a6 6 0 1 0-8.48 8.48l7.75 7.76l-85.41 85.41a13.94 13.94 0 0 0-4.1 9.9v50.2l-22.24 22.25a6 6 0 1 0 8.48 8.48L50.49 214h50.2a13.94 13.94 0 0 0 9.9-4.1L196 124.49l7.76 7.75a6 6 0 0 0 8.48-8.48L176.49 88L208 56.49l19.76 19.75a6 6 0 0 0 8.48-8.48M102.1 201.41a2 2 0 0 1-1.41.59H54v-46.69a2 2 0 0 1 .59-1.41L74 134.49l21.76 21.75a6 6 0 1 0 8.48-8.48L82.49 126L98 110.49l21.76 21.75a6 6 0 0 0 8.48-8.48L106.49 102L140 68.49L187.51 116Z"></svg:path>`,
})
export class PhSyringeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSyringeThinIcon],svg[ph-syringe-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.83 69.17l-48-48a4 4 0 0 0-5.66 5.66L202.34 48L168 82.34l-37.17-37.17a4 4 0 1 0-5.66 5.66l9.17 9.17l-86.83 86.83a12 12 0 0 0-3.51 8.48v51l-22.83 22.86a4 4 0 0 0 5.66 5.66L49.66 212h51a11.93 11.93 0 0 0 8.48-3.51L196 121.66l9.17 9.17a4 4 0 0 0 5.66-5.66L173.66 88L208 53.66l21.17 21.17a4 4 0 1 0 5.66-5.66M103.51 202.83a4 4 0 0 1-2.82 1.17H52v-48.69a4 4 0 0 1 1.17-2.82L74 131.66l23.17 23.17a4 4 0 1 0 5.66-5.66L79.66 126L98 107.66l23.17 23.17a4 4 0 0 0 5.66-5.66L103.66 102L140 65.66l25.17 25.17L190.34 116Z"></svg:path>`,
})
export class PhSyringeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTShirtIcon],svg[ph-t-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.59 61.22L195.83 33a8 8 0 0 0-3.83-1h-32a8 8 0 0 0-8 8a24 24 0 0 1-48 0a8 8 0 0 0-8-8H64a8 8 0 0 0-3.84 1L8.41 61.22a15.76 15.76 0 0 0-6.59 21.26l19.27 36.81A16.37 16.37 0 0 0 35.67 128H56v80a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-80h20.34a16.37 16.37 0 0 0 14.58-8.71l19.27-36.81a15.76 15.76 0 0 0-6.6-21.26M35.67 112a.62.62 0 0 1-.41-.13L16.09 75.26L56 53.48V112ZM184 208H72V48h16.8a40 40 0 0 0 78.38 0H184Zm36.75-96.14a.55.55 0 0 1-.41.14H200V53.48l39.92 21.78Z"></svg:path>`,
})
export class PhTShirtIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTShirtBoldIcon],svg[ph-t-shirt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.17 57.9l-48.08-28.25A11.9 11.9 0 0 0 192 28h-32a12 12 0 0 0-12 12a20 20 0 0 1-40 0a12 12 0 0 0-12-12H64a11.9 11.9 0 0 0-6.07 1.66L9.83 57.9A20.18 20.18 0 0 0 2 84l17.9 36.8A19.62 19.62 0 0 0 37.67 132H52v76a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20v-76h14.32a19.64 19.64 0 0 0 17.75-11.17L254 84a20.18 20.18 0 0 0-7.83-26.1M40.37 108L25.16 76.73L52 61v47ZM180 204H76V52h9.67a44 44 0 0 0 84.68 0H180Zm35.62-96H204V61l26.83 15.76Z"></svg:path>`,
})
export class PhTShirtBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTShirtDuotoneIcon],svg[ph-t-shirt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m247.11 78.77l-19.27 36.81a8.44 8.44 0 0 1-7.5 4.42H192V40l51.78 28.25a7.81 7.81 0 0 1 3.33 10.52m-238.22 0l19.27 36.81a8.44 8.44 0 0 0 7.5 4.42H64V40L12.22 68.25a7.81 7.81 0 0 0-3.33 10.52" opacity=".2"></svg:path><svg:path d="M247.59 61.22L195.83 33a8 8 0 0 0-3.83-1h-32a8 8 0 0 0-8 8a24 24 0 0 1-48 0a8 8 0 0 0-8-8H64a8 8 0 0 0-3.84 1L8.41 61.22a15.76 15.76 0 0 0-6.59 21.26l19.27 36.81A16.37 16.37 0 0 0 35.67 128H56v80a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-80h20.34a16.37 16.37 0 0 0 14.58-8.71l19.27-36.81a15.76 15.76 0 0 0-6.6-21.26M35.67 112a.62.62 0 0 1-.41-.13L16.09 75.26L56 53.48V112ZM184 208H72V48h16.8a40 40 0 0 0 78.38 0H184Zm36.75-96.14a.55.55 0 0 1-.41.14H200V53.48l39.92 21.78Z"></svg:path></svg:g>`,
})
export class PhTShirtDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTShirtFillIcon],svg[ph-t-shirt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.59 61.22L195.83 33a8 8 0 0 0-3.83-1h-32a8 8 0 0 0-8 8a24 24 0 0 1-48 0a8 8 0 0 0-8-8H64a8 8 0 0 0-3.84 1L8.41 61.22a15.76 15.76 0 0 0-6.59 21.26l19.27 36.81A16.37 16.37 0 0 0 35.67 128H56v80a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-80h20.34a16.37 16.37 0 0 0 14.58-8.71l19.27-36.81a15.76 15.76 0 0 0-6.6-21.26M35.67 112a.62.62 0 0 1-.41-.13L16.09 75.26L56 53.48V112Zm185.07-.14a.55.55 0 0 1-.41.14H200V53.48l39.92 21.78Z"></svg:path>`,
})
export class PhTShirtFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTShirtLightIcon],svg[ph-t-shirt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.64 63l-51.77-28.26A5.9 5.9 0 0 0 192 34h-32a6 6 0 0 0-6 6a26 26 0 0 1-52 0a6 6 0 0 0-6-6H64a5.9 5.9 0 0 0-2.88.74L9.36 63a13.77 13.77 0 0 0-5.78 18.55l19.28 36.81A14.38 14.38 0 0 0 35.67 126H58v82a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-82h22.34a14.38 14.38 0 0 0 12.81-7.64l19.28-36.81A13.77 13.77 0 0 0 246.64 63m-211 51a2.42 2.42 0 0 1-2.18-1.21L14.21 76a1.82 1.82 0 0 1 .9-2.47L58 50.11V114ZM186 208a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2V46h20.48a38 38 0 0 0 75 0H186Zm55.8-132l-19.28 36.8a2.42 2.42 0 0 1-2.18 1.21H198v-63.9l42.9 23.4a1.83 1.83 0 0 1 .89 2.49Z"></svg:path>`,
})
export class PhTShirtLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTShirtThinIcon],svg[ph-t-shirt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.68 64.73l-51.77-28.24A4 4 0 0 0 192 36h-32a4 4 0 0 0-4 4a28 28 0 0 1-56 0a4 4 0 0 0-4-4H64a4 4 0 0 0-1.9.5L10.32 64.73a11.79 11.79 0 0 0-5 15.89l19.28 36.81a12.37 12.37 0 0 0 11 6.57H60v84a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-84h24.33a12.37 12.37 0 0 0 11-6.57l19.28-36.81a11.79 11.79 0 0 0-4.93-15.89M35.67 116a4.46 4.46 0 0 1-4-2.28L12.44 76.91a3.79 3.79 0 0 1 1.71-5.15L60 46.74V116ZM188 208a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4V44h24.22a36 36 0 0 0 71.56 0H188Zm55.56-131.09l-19.27 36.81a4.46 4.46 0 0 1-4 2.28H196V46.74l45.85 25a3.79 3.79 0 0 1 1.71 5.17"></svg:path>`,
})
export class PhTShirtThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTableIcon],svg[ph-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8M40 112h40v32H40Zm56 0h120v32H96Zm120-48v32H40V64ZM40 160h40v32H40Zm176 32H96v-32h120z"></svg:path>`,
})
export class PhTableIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTableBoldIcon],svg[ph-table-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44H32a12 12 0 0 0-12 12v136a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a12 12 0 0 0-12-12M44 116h32v24H44Zm56 0h112v24H100Zm112-48v24H44V68ZM44 164h32v24H44Zm56 24v-24h112v24Z"></svg:path>`,
})
export class PhTableBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTableDuotoneIcon],svg[ph-table-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 104v96H32v-96Z" opacity=".2"></svg:path><svg:path d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8M40 112h40v32H40Zm56 0h120v32H96Zm120-48v32H40V64ZM40 160h40v32H40Zm176 32H96v-32h120z"></svg:path></svg:g>`,
})
export class PhTableDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTableFillIcon],svg[ph-table-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8M40 112h40v32H40Zm56 0h120v32H96Zm-56 48h40v32H40Zm176 32H96v-32h120z"></svg:path>`,
})
export class PhTableFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTableLightIcon],svg[ph-table-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a6 6 0 0 0-6 6v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a6 6 0 0 0-6-6M38 110h44v36H38Zm56 0h124v36H94Zm124-48v36H38V62ZM38 192v-34h44v36H40a2 2 0 0 1-2-2m178 2H94v-36h124v34a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhTableLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTableThinIcon],svg[ph-table-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a4 4 0 0 0-4 4v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a4 4 0 0 0-4-4M36 108h48v40H36Zm56 0h128v40H92Zm128-48v40H36V60ZM36 192v-36h48v40H40a4 4 0 0 1-4-4m180 4H92v-40h128v36a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhTableThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTabsIcon],svg[ph-tabs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M255.66 165.7a.2.2 0 0 0 0-.08L233.37 91.4A15.89 15.89 0 0 0 218.05 80H208a8 8 0 0 0 0 16h10.05l19.2 64H206l-20.63-68.6A15.89 15.89 0 0 0 170.05 80H160a8 8 0 0 0 0 16h10.05l19.2 64H158l-20.63-68.6A15.89 15.89 0 0 0 122.05 80H38a15.89 15.89 0 0 0-15.37 11.4L.37 165.6v.13A8.1 8.1 0 0 0 0 168a8 8 0 0 0 8 8h240a8 8 0 0 0 7.66-10.3M38 96h84.1l19.2 64H18.75Z"></svg:path>`,
})
export class PhTabsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTabsBoldIcon],svg[ph-tabs-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M255.49 164.55v-.06a.3.3 0 0 0 0-.09L233.2 90.25A19.87 19.87 0 0 0 214.05 76H204a12 12 0 0 0 0 24h7.07l16.8 56h-30.94L177.2 90.25A19.87 19.87 0 0 0 158.05 76H148a12 12 0 0 0 0 24h7.07l16.8 56h-30.94L121.2 90.25A19.87 19.87 0 0 0 102.05 76H42a19.87 19.87 0 0 0-19.2 14.25L.55 164.4a.3.3 0 0 0 0 .09v.06a6 6 0 0 0-.16.62A12 12 0 0 0 12 180h232a12 12 0 0 0 11.49-15.45M44.93 100h54.14l16.8 56H28.13Z"></svg:path>`,
})
export class PhTabsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTabsDuotoneIcon],svg[ph-tabs-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 168H8l22.29-74.3A8 8 0 0 1 38 88h84.1a8 8 0 0 1 7.66 5.7Z" opacity=".2"></svg:path><svg:path d="M255.66 165.7a.2.2 0 0 0 0-.08L233.37 91.4A15.89 15.89 0 0 0 218.05 80H208a8 8 0 0 0 0 16h10.05l19.2 64H206l-20.63-68.6A15.89 15.89 0 0 0 170.05 80H160a8 8 0 0 0 0 16h10.05l19.2 64H158l-20.63-68.6A15.89 15.89 0 0 0 122.05 80H38a15.89 15.89 0 0 0-15.37 11.4L.37 165.6v.13A8.1 8.1 0 0 0 0 168a8 8 0 0 0 8 8h240a8 8 0 0 0 7.66-10.3M38 96h84.1l19.2 64H18.75Z"></svg:path></svg:g>`,
})
export class PhTabsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTabsFillIcon],svg[ph-tabs-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 168a8 8 0 0 1-8 8H8a8 8 0 0 1-7.63-10.4l22.26-74.2A15.89 15.89 0 0 1 38 80h84.1a15.89 15.89 0 0 1 15.32 11.4L158 160h15.3l-22.51-74.85a4 4 0 0 1 3.83-5.15h15.43a16 16 0 0 1 15.32 11.4L206 160h15.3l-22.51-74.85a4 4 0 0 1 3.83-5.15h15.43a16 16 0 0 1 15.32 11.4l22.26 74.18A8.1 8.1 0 0 1 256 168"></svg:path>`,
})
export class PhTabsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTabsLightIcon],svg[ph-tabs-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M253.75 166.28L231.46 92a13.91 13.91 0 0 0-13.41-10H208a6 6 0 0 0 0 12h10.05a2 2 0 0 1 1.95 1.42L240 162h-35.54l-21-70a13.91 13.91 0 0 0-13.41-10H160a6 6 0 0 0 0 12h10.05a2 2 0 0 1 1.95 1.42L192 162h-35.54l-21-70a13.91 13.91 0 0 0-13.41-10H38a13.91 13.91 0 0 0-13.46 10L2.28 166.2v.2a3 3 0 0 0-.1.39a.1.1 0 0 0 0 .05A6 6 0 0 0 8 174h240a6 6 0 0 0 5.75-7.72M36 95.42A2 2 0 0 1 38 94h84.1a2 2 0 0 1 1.9 1.43L144 162H16.06Z"></svg:path>`,
})
export class PhTabsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTabsThinIcon],svg[ph-tabs-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251.81 166.86l-22.29-74.3A11.92 11.92 0 0 0 218.05 84H208a4 4 0 0 0 0 8h10.05a4 4 0 0 1 3.83 2.85L242.62 164H203l-21.46-71.45A11.92 11.92 0 0 0 170.05 84H160a4 4 0 0 0 0 8h10.05a4 4 0 0 1 3.83 2.85L194.62 164H155l-21.46-71.45A11.92 11.92 0 0 0 122.05 84H38a11.92 11.92 0 0 0-11.49 8.55l-22.34 74.3v.17A4 4 0 0 0 8 172h240a4 4 0 0 0 4-4a3.9 3.9 0 0 0-.19-1.14m-217.69-72A4 4 0 0 1 38 92h84.1a4 4 0 0 1 3.83 2.85L146.62 164H13.38Z"></svg:path>`,
})
export class PhTabsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagIcon],svg[ph-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.31 136L144 36.69A15.86 15.86 0 0 0 132.69 32H40a8 8 0 0 0-8 8v92.69A15.86 15.86 0 0 0 36.69 144L136 243.31a16 16 0 0 0 22.63 0l84.68-84.68a16 16 0 0 0 0-22.63m-96 96L48 132.69V48h84.69L232 147.31ZM96 84a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTagIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagBoldIcon],svg[ph-tag-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.15 133.18l-99.32-99.32A19.85 19.85 0 0 0 132.69 28H40a12 12 0 0 0-12 12v92.69a19.85 19.85 0 0 0 5.86 14.14l99.32 99.32a20 20 0 0 0 28.28 0l84.69-84.69a20 20 0 0 0 0-28.28m-98.83 93.17L52 131V52h79l95.32 95.32ZM104 88a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhTagBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagChevronIcon],svg[ph-tag-chevron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246.66 123.56L201 55.12A16 16 0 0 0 187.72 48H32a8 8 0 0 0-6.66 12.44L70.39 128l-45 67.56A8 8 0 0 0 32 208h155.72a16 16 0 0 0 13.28-7.12l45.63-68.44a8 8 0 0 0 .03-8.88M187.72 192H47l39.71-59.56a8 8 0 0 0 0-8.88L47 64h140.72l42.67 64Z"></svg:path>`,
})
export class PhTagChevronIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagChevronBoldIcon],svg[ph-tag-chevron-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250 121.34l-45.64-68.43A20 20 0 0 0 187.72 44H32a12 12 0 0 0-10 18.66L65.58 128L22 193.34A12 12 0 0 0 32 212h155.72a20 20 0 0 0 16.64-8.91L250 134.66a12 12 0 0 0 0-13.32M185.58 188H54.42L90 134.66a12 12 0 0 0 0-13.32L54.42 68h131.16l40 60Z"></svg:path>`,
})
export class PhTagChevronBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagChevronDuotoneIcon],svg[ph-tag-chevron-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m240 128l-45.62 68.44a8 8 0 0 1-6.66 3.56H32l48-72l-48-72h155.72a8 8 0 0 1 6.66 3.56Z" opacity=".2"></svg:path><svg:path d="M246.66 123.56L201 55.12A16 16 0 0 0 187.72 48H32a8 8 0 0 0-6.66 12.44L70.39 128l-45 67.56A8 8 0 0 0 32 208h155.72a16 16 0 0 0 13.28-7.12l45.63-68.44a8 8 0 0 0 .03-8.88M187.72 192H47l39.71-59.56a8 8 0 0 0 0-8.88L47 64h140.72l42.67 64Z"></svg:path></svg:g>`,
})
export class PhTagChevronDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagChevronFillIcon],svg[ph-tag-chevron-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246.66 132.44L201 200.88a16 16 0 0 1-13.28 7.12H32a8 8 0 0 1-6.66-12.44L70.39 128l-45-67.56A8 8 0 0 1 32 48h155.72A16 16 0 0 1 201 55.12l45.63 68.44a8 8 0 0 1 .03 8.88"></svg:path>`,
})
export class PhTagChevronFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagChevronLightIcon],svg[ph-tag-chevron-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245 124.67l-45.63-68.44A14 14 0 0 0 187.72 50H32a6 6 0 0 0-5 9.33L72.79 128L27 196.67a6 6 0 0 0 5 9.33h155.72a14 14 0 0 0 11.65-6.23L245 131.33a6 6 0 0 0 0-6.66m-55.61 68.44a2 2 0 0 1-1.66.89H43.21L85 131.33a6 6 0 0 0 0-6.66L43.21 62h144.51a2 2 0 0 1 1.66.89L232.79 128Z"></svg:path>`,
})
export class PhTagChevronLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagChevronThinIcon],svg[ph-tag-chevron-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.33 125.78L197.7 57.34a12 12 0 0 0-10-5.34H32a4 4 0 0 0-3.33 6.22L75.19 128l-46.52 69.78A4 4 0 0 0 32 204h155.72a12 12 0 0 0 10-5.34l45.63-68.44a4 4 0 0 0-.02-4.44m-52.28 68.44a4 4 0 0 1-3.33 1.78H39.47l43.86-65.78a4 4 0 0 0 0-4.44L39.47 60h148.25a4 4 0 0 1 3.33 1.78L235.19 128Z"></svg:path>`,
})
export class PhTagChevronThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagDuotoneIcon],svg[ph-tag-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M237.66 153L153 237.66a8 8 0 0 1-11.31 0l-99.35-99.32a8 8 0 0 1-2.34-5.65V40h92.69a8 8 0 0 1 5.65 2.34l99.32 99.32a8 8 0 0 1 0 11.34" opacity=".2"></svg:path><svg:path d="M243.31 136L144 36.69A15.86 15.86 0 0 0 132.69 32H40a8 8 0 0 0-8 8v92.69A15.86 15.86 0 0 0 36.69 144L136 243.31a16 16 0 0 0 22.63 0l84.68-84.68a16 16 0 0 0 0-22.63m-96 96L48 132.69V48h84.69L232 147.31ZM96 84a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhTagDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagFillIcon],svg[ph-tag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.31 136L144 36.69A15.86 15.86 0 0 0 132.69 32H40a8 8 0 0 0-8 8v92.69A15.86 15.86 0 0 0 36.69 144L136 243.31a16 16 0 0 0 22.63 0l84.68-84.68a16 16 0 0 0 0-22.63M84 96a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhTagFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagLightIcon],svg[ph-tag-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.91 137.42L142.59 38.1a13.94 13.94 0 0 0-9.9-4.1H40a6 6 0 0 0-6 6v92.69a13.94 13.94 0 0 0 4.1 9.9l99.32 99.32a14 14 0 0 0 19.8 0l84.69-84.69a14 14 0 0 0 0-19.8m-8.49 11.31l-84.69 84.69a2 2 0 0 1-2.83 0L46.59 134.1a2 2 0 0 1-.59-1.41V46h86.69a2 2 0 0 1 1.41.59l99.32 99.31a2 2 0 0 1 0 2.83M94 84a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhTagLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagSimpleIcon],svg[ph-tag-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246.66 123.56L201 55.13A15.94 15.94 0 0 0 187.72 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h147.72a16 16 0 0 0 13.28-7.12l45.63-68.44a8 8 0 0 0 .03-8.88M187.72 192H40V64h147.72l42.66 64Z"></svg:path>`,
})
export class PhTagSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagSimpleBoldIcon],svg[ph-tag-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250 121.34l-45.64-68.43A20 20 0 0 0 187.72 44H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h147.72a20 20 0 0 0 16.64-8.91L250 134.66a12 12 0 0 0 0-13.32M185.58 188H44V68h141.58l40 60Z"></svg:path>`,
})
export class PhTagSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagSimpleDuotoneIcon],svg[ph-tag-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m240 128l-45.62 68.44a8 8 0 0 1-6.66 3.56H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h147.72a8 8 0 0 1 6.66 3.56Z" opacity=".2"></svg:path><svg:path d="M246.66 123.56L201 55.13A15.94 15.94 0 0 0 187.72 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h147.72a16 16 0 0 0 13.28-7.12l45.63-68.44a8 8 0 0 0 .03-8.88M187.72 192H40V64h147.72l42.66 64Z"></svg:path></svg:g>`,
})
export class PhTagSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagSimpleFillIcon],svg[ph-tag-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246.66 123.56L201 55.13A15.94 15.94 0 0 0 187.72 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h147.72a16 16 0 0 0 13.28-7.12l45.63-68.44a8 8 0 0 0 .03-8.88"></svg:path>`,
})
export class PhTagSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagSimpleLightIcon],svg[ph-tag-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245 124.67l-45.63-68.44A14 14 0 0 0 187.72 50H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h147.72a14 14 0 0 0 11.65-6.23L245 131.33a6 6 0 0 0 0-6.66m-55.61 68.44a2 2 0 0 1-1.66.89H40a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h147.72a2 2 0 0 1 1.66.89L232.79 128Z"></svg:path>`,
})
export class PhTagSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagSimpleThinIcon],svg[ph-tag-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.33 125.78L197.7 57.34a12 12 0 0 0-10-5.34H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h147.72a12 12 0 0 0 10-5.34l45.63-68.44a4 4 0 0 0-.02-4.44m-52.28 68.44a4 4 0 0 1-3.33 1.78H40a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h147.72a4 4 0 0 1 3.33 1.78L235.19 128Z"></svg:path>`,
})
export class PhTagSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagThinIcon],svg[ph-tag-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.49 138.83l-99.32-99.32a11.93 11.93 0 0 0-8.48-3.51H40a4 4 0 0 0-4 4v92.69a11.93 11.93 0 0 0 3.51 8.48l99.32 99.32a12 12 0 0 0 17 0l84.69-84.69a12 12 0 0 0 0-17Zm-5.66 11.31l-84.69 84.69a4 4 0 0 1-5.65 0l-99.32-99.32a4 4 0 0 1-1.17-2.82V44h88.69a4 4 0 0 1 2.82 1.17l99.32 99.32a4 4 0 0 1 0 5.65M92 84a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTagThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTargetIcon],svg[ph-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.87 83.16A104.1 104.1 0 1 1 195.67 49l22.67-22.68a8 8 0 0 1 11.32 11.32l-96 96a8 8 0 0 1-11.32-11.32l27.72-27.72a40 40 0 1 0 17.87 31.09a8 8 0 1 1 16-.9a56 56 0 1 1-22.38-41.65l22.75-22.75a87.88 87.88 0 1 0 23.13 29.67a8 8 0 0 1 14.44-6.9"></svg:path>`,
})
export class PhTargetIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTargetBoldIcon],svg[ph-target-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.26 90.4a108 108 0 0 1-177.63 114A108 108 0 0 1 195.41 43.63l20.1-20.11a12 12 0 0 1 17 17l-96 96a12 12 0 1 1-17-17l24-24a36 36 0 1 0 19.76 39.65a12 12 0 0 1 23.53 4.74a60 60 0 1 1-25.73-62l17.23-17.17a84 84 0 1 0 28.46 38a12 12 0 1 1 22.5-8.35Z"></svg:path>`,
})
export class PhTargetBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTargetDuotoneIcon],svg[ph-target-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 128a48 48 0 1 1-48-48a48 48 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M221.87 83.16A104.1 104.1 0 1 1 195.67 49l22.67-22.68a8 8 0 0 1 11.32 11.32l-96 96a8 8 0 0 1-11.32-11.32l27.72-27.72a40 40 0 1 0 17.87 31.09a8 8 0 1 1 16-.9a56 56 0 1 1-22.38-41.65l22.75-22.75a87.88 87.88 0 1 0 23.13 29.67a8 8 0 0 1 14.44-6.9"></svg:path></svg:g>`,
})
export class PhTargetDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTargetFillIcon],svg[ph-target-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.87 83.16A104.1 104.1 0 1 1 195.67 49l22.67-22.68a8 8 0 0 1 11.32 11.32L167.6 99.71l-37.71 37.71l-23.95 23.95a40 40 0 0 0 62-35.67a8 8 0 1 1 16-.9a56 56 0 0 1-95.5 42.79a56 56 0 0 1 73.13-84.43l22.73-22.77a87.88 87.88 0 1 0 23.13 29.67a8 8 0 0 1 14.44-6.9"></svg:path>`,
})
export class PhTargetFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTargetLightIcon],svg[ph-target-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.06 84a102.06 102.06 0 1 1-24.31-32.27l24-24a6 6 0 0 1 8.48 8.49l-96 96a6 6 0 1 1-8.48-8.49l29.39-29.4a42 42 0 1 0 16.78 31.24a6 6 0 1 1 12-.68a54 54 0 1 1-20.22-39.06l25.54-25.55a89.91 89.91 0 1 0 22 28.93A6 6 0 1 1 220.06 84"></svg:path>`,
})
export class PhTargetLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTargetThinIcon],svg[ph-target-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.26 84.89a100.16 100.16 0 1 1-22.44-30.37l25.35-25.35a4 4 0 1 1 5.66 5.66l-96 96a4 4 0 0 1-5.66-5.66l31-31a44 44 0 1 0 15.78 31.3a4 4 0 0 1 8-.46a52 52 0 1 1-18.1-36.51l28.34-28.33A92 92 0 0 0 63 193.05A92 92 0 0 0 211 88.33a4 4 0 1 1 7.22-3.44Z"></svg:path>`,
})
export class PhTargetThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTaxiIcon],svg[ph-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 104h-11.36l-27.39-47.94A16 16 0 0 0 187.36 48h-21.94l-12-29.94A15.93 15.93 0 0 0 138.58 8h-21.16a15.93 15.93 0 0 0-14.86 10.06L90.58 48H68.64a16 16 0 0 0-13.89 8.06L27.36 104H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h96v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16M117.42 24h21.16l9.6 24h-40.36ZM68.64 64h118.72l22.85 40H45.79ZM64 200H40v-16h24Zm128 0v-16h24v16Zm24-32H40v-48h176ZM56 144a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8m112 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhTaxiIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTaxiBoldIcon],svg[ph-taxi-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 100h-9l-26.28-45.92A20 20 0 0 0 187.36 44h-19.24l-11-27.43A19.9 19.9 0 0 0 138.58 4h-21.16a19.9 19.9 0 0 0-18.57 12.57L87.88 44H68.64a20 20 0 0 0-17.36 10.08L25 100h-9a12 12 0 0 0 0 24h4v76a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-20h80v20a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-76h4a12 12 0 0 0 0-24M120.12 28h15.76l6.4 16h-28.56ZM71 68h114l18.28 32H52.68Zm-7 128H44v-16h20Zm148 0h-20v-16h20Zm0-40H44v-32h168Z"></svg:path>`,
})
export class PhTaxiBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTaxiDuotoneIcon],svg[ph-taxi-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 176h40v24a8 8 0 0 1-8 8h-24a8 8 0 0 1-8-8ZM32 200a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8v-24H32ZM194.3 60a8 8 0 0 0-6.94-4H68.64a8 8 0 0 0-6.94 4L32 112h192Z" opacity=".2"></svg:path><svg:path d="M240 104h-11.36l-27.39-47.94A16 16 0 0 0 187.36 48h-21.94l-12-29.94A15.93 15.93 0 0 0 138.58 8h-21.16a15.93 15.93 0 0 0-14.86 10.06L90.58 48H68.64a16 16 0 0 0-13.89 8.06L27.36 104H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h96v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16M117.42 24h21.16l9.6 24h-40.36ZM68.64 64h118.72l22.85 40H45.79ZM64 200H40v-16h24Zm128 0v-16h24v16Zm24-32H40v-48h176ZM56 144a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8m112 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhTaxiDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTaxiFillIcon],svg[ph-taxi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 104h-11.36l-27.39-47.94A16 16 0 0 0 187.36 48h-21.94l-12-29.94A15.93 15.93 0 0 0 138.58 8h-21.16a15.93 15.93 0 0 0-14.86 10.06L90.58 48H68.64a16 16 0 0 0-13.89 8.06L27.36 104H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-8h96v8a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16M80 152H56a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m120 0h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16M45.79 104l22.85-40h118.72l22.85 40Z"></svg:path>`,
})
export class PhTaxiFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTaxiLightIcon],svg[ph-taxi-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 106h-12.52l-28-48.95a14 14 0 0 0-12.15-7h-23.3L151.58 18.8a13.93 13.93 0 0 0-13-8.8h-21.16a13.93 13.93 0 0 0-13 8.8L91.94 50h-23.3a14 14 0 0 0-12.15 7l-28 49H16a6 6 0 0 0 0 12h10v82a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-18h100v18a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-82h10a6 6 0 0 0 0-12M115.56 23.26a2 2 0 0 1 1.86-1.26h21.16a2 2 0 0 1 1.86 1.26L151.14 50h-46.28ZM66.91 63a2 2 0 0 1 1.73-1h118.72a2 2 0 0 1 1.73 1l24.57 43H42.34ZM66 200a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-18h28Zm150 2h-24a2 2 0 0 1-2-2v-18h28v18a2 2 0 0 1-2 2m2-32H38v-52h180ZM58 144a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H64a6 6 0 0 1-6-6m112 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhTaxiLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTaxiThinIcon],svg[ph-taxi-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 108h-13.68l-28.54-49.95a12 12 0 0 0-10.42-6h-24.65l-13-32.46A12 12 0 0 0 138.58 12h-21.16a12 12 0 0 0-11.15 7.54L93.29 52H68.64a12 12 0 0 0-10.42 6l-28.54 50H16a4 4 0 0 0 0 8h12v84a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-20h104v20a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-84h12a4 4 0 0 0 0-8M113.7 22.51a4 4 0 0 1 3.72-2.51h21.16a4 4 0 0 1 3.72 2.51L154.09 52h-52.18ZM65.17 62a4 4 0 0 1 3.47-2h118.72a4 4 0 0 1 3.47 2l26.28 46H38.89ZM68 200a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-20h32Zm148 4h-24a4 4 0 0 1-4-4v-20h32v20a4 4 0 0 1-4 4m4-32H36v-56h184ZM60 144a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H64a4 4 0 0 1-4-4m112 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhTaxiThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTeaBagIcon],svg[ph-tea-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 160a16 16 0 0 1-16-16V64a56 56 0 0 0-112 0v8H76.53a16.09 16.09 0 0 0-13.72 7.77L42.28 114a16.06 16.06 0 0 0-2.28 8.22V216a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-93.78a16.06 16.06 0 0 0-2.28-8.24l-20.53-34.21A16.09 16.09 0 0 0 131.47 72H112v-8a40 40 0 0 1 80 0v80a32 32 0 0 0 32 32a8 8 0 0 0 0-16m-92.53-72L152 122.22V216H56v-93.78L76.53 88H96v48a8 8 0 0 0 16 0V88Z"></svg:path>`,
})
export class PhTeaBagIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTeaBagBoldIcon],svg[ph-tea-bag-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 156a12 12 0 0 1-12-12V64a60 60 0 0 0-120 0v4H76.53a20.1 20.1 0 0 0-17.15 9.71l-20.53 34.21a20.07 20.07 0 0 0-2.85 10.3V216a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20v-93.78a20 20 0 0 0-2.85-10.29l-20.53-34.22A20.1 20.1 0 0 0 131.47 68H116v-4a36 36 0 0 1 72 0v80a36 36 0 0 0 36 36a12 12 0 0 0 0-24m-94.79-64L148 123.32V212H60v-88.68L78.79 92H92v44a12 12 0 0 0 24 0V92Z"></svg:path>`,
})
export class PhTeaBagBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTeaBagDuotoneIcon],svg[ph-tea-bag-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 122.22V216a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8v-93.78a8 8 0 0 1 1.14-4.12l20.53-34.22A8 8 0 0 1 76.53 80h54.94a8 8 0 0 1 6.86 3.88l20.53 34.22a8 8 0 0 1 1.14 4.12" opacity=".2"></svg:path><svg:path d="M224 160a16 16 0 0 1-16-16V64a56 56 0 0 0-112 0v8H76.53a16.09 16.09 0 0 0-13.72 7.77L42.28 114a16.06 16.06 0 0 0-2.28 8.22V216a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-93.78a16.06 16.06 0 0 0-2.28-8.24l-20.53-34.21A16.09 16.09 0 0 0 131.47 72H112v-8a40 40 0 0 1 80 0v80a32 32 0 0 0 32 32a8 8 0 0 0 0-16m-92.53-72L152 122.22V216H56v-93.78L76.53 88H96v48a8 8 0 0 0 16 0V88Z"></svg:path></svg:g>`,
})
export class PhTeaBagDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTeaBagFillIcon],svg[ph-tea-bag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 136V72h19.47a16.09 16.09 0 0 1 13.72 7.77L165.72 114a16.06 16.06 0 0 1 2.28 8.24V216a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16v-93.78a16.06 16.06 0 0 1 2.28-8.22l20.53-34.23A16.09 16.09 0 0 1 76.53 72H96v64a8 8 0 0 0 16 0m112 24a16 16 0 0 1-16-16V64a56 56 0 0 0-112 0v8h16v-8a40 40 0 0 1 80 0v80a32 32 0 0 0 32 32a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhTeaBagFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTeaBagLightIcon],svg[ph-tea-bag-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 162a18 18 0 0 1-18-18V64a54 54 0 0 0-108 0v10H76.53a14.07 14.07 0 0 0-12 6.8L44 115a14 14 0 0 0-2 7.21V216a14 14 0 0 0 14 14h96a14 14 0 0 0 14-14v-93.78a14 14 0 0 0-2-7.21L143.48 80.8a14.07 14.07 0 0 0-12-6.8H110V64a42 42 0 0 1 84 0v80a30 30 0 0 0 30 30a6 6 0 0 0 0-12m-92.53-76a2 2 0 0 1 1.72 1l20.53 34.22a2 2 0 0 1 .28 1V216a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-93.78a2 2 0 0 1 .29-1L74.81 87a2 2 0 0 1 1.72-1H98v50a6 6 0 0 0 12 0V86Z"></svg:path>`,
})
export class PhTeaBagLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTeaBagThinIcon],svg[ph-tea-bag-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 164a20 20 0 0 1-20-20V64a52 52 0 0 0-104 0v12H76.53a12.06 12.06 0 0 0-10.29 5.83L45.71 116a12 12 0 0 0-1.71 6.22V216a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12v-93.78a12 12 0 0 0-1.71-6.18l-20.53-34.21A12.06 12.06 0 0 0 131.47 76H108V64a44 44 0 0 1 88 0v80a28 28 0 0 0 28 28a4 4 0 0 0 0-8m-92.53-80a4 4 0 0 1 3.43 1.94l20.53 34.22a4 4 0 0 1 .57 2.06V216a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-93.78a4 4 0 0 1 .57-2.06L73.1 85.94A4 4 0 0 1 76.53 84H100v52a4 4 0 0 0 8 0V84Z"></svg:path>`,
})
export class PhTeaBagThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelegramLogoIcon],svg[ph-telegram-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.88 26.19a9 9 0 0 0-9.16-1.57L17.06 103.93a14.22 14.22 0 0 0 2.43 27.21L72 141.45V200a15.92 15.92 0 0 0 10 14.83a15.91 15.91 0 0 0 17.51-3.73l25.32-26.26L165 220a15.88 15.88 0 0 0 10.51 4a16.3 16.3 0 0 0 5-.79a15.85 15.85 0 0 0 10.67-11.63L231.77 35a9 9 0 0 0-2.89-8.81m-61.14 36l-89.59 64.16l-49.6-9.73ZM88 200v-47.48l24.79 21.74Zm87.53 8l-82.68-72.5l119-85.29Z"></svg:path>`,
})
export class PhTelegramLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelegramLogoBoldIcon],svg[ph-telegram-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.49 23.16a13 13 0 0 0-13.23-2.26L15.6 100.21a18.22 18.22 0 0 0 3.12 34.86L68 144.74V200a20 20 0 0 0 34.4 13.88l22.67-23.51L162.35 223a20 20 0 0 0 32.7-10.54l40.62-176.55a13 13 0 0 0-4.18-12.75m-92.08 54.36l-62.19 44.57l-34.43-6.75ZM92 190.06v-28.71l15 13.15Zm81.16 10.52l-73.88-64.77l106.31-76.18Z"></svg:path>`,
})
export class PhTelegramLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelegramLogoDuotoneIcon],svg[ph-telegram-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M223.41 32.09L80 134.87L21 123.3a6.23 6.23 0 0 1-1-11.92l202.63-79.31a1 1 0 0 1 .78.02M80 200a8 8 0 0 0 13.76 5.56l30.61-31.76L80 134.87Z" opacity=".2"></svg:path><svg:path d="M228.88 26.19a9 9 0 0 0-9.16-1.57L17.06 103.93a14.22 14.22 0 0 0 2.43 27.21L72 141.45V200a15.92 15.92 0 0 0 10 14.83a15.91 15.91 0 0 0 17.51-3.73l25.32-26.26L165 220a15.88 15.88 0 0 0 10.51 4a16.3 16.3 0 0 0 5-.79a15.85 15.85 0 0 0 10.67-11.63L231.77 35a9 9 0 0 0-2.89-8.81M78.15 126.35l-49.61-9.73l139.2-54.48ZM88 200v-47.48l24.79 21.74Zm87.53 8l-82.68-72.5l119-85.29Z"></svg:path></svg:g>`,
})
export class PhTelegramLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelegramLogoFillIcon],svg[ph-telegram-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.88 26.19a9 9 0 0 0-9.16-1.57L17.06 103.93a14.22 14.22 0 0 0 2.43 27.21L72 141.45V200a15.92 15.92 0 0 0 10 14.83a15.91 15.91 0 0 0 17.51-3.73l25.32-26.26L165 220a15.88 15.88 0 0 0 10.51 4a16.3 16.3 0 0 0 5-.79a15.85 15.85 0 0 0 10.67-11.63L231.77 35a9 9 0 0 0-2.89-8.81M175.53 208l-82.68-72.5l119-85.29Z"></svg:path>`,
})
export class PhTelegramLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelegramLogoLightIcon],svg[ph-telegram-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.57 27.7a7 7 0 0 0-7.13-1.22L17.78 105.79a12.23 12.23 0 0 0 2.1 23.39L74 139.81V200a14 14 0 0 0 24.08 9.71l26.64-27.63l41.58 36.45a13.9 13.9 0 0 0 9.2 3.49a14.3 14.3 0 0 0 4.36-.69a13.86 13.86 0 0 0 9.34-10.17l40.62-176.59a7 7 0 0 0-2.25-6.87M22.05 117.37a.46.46 0 0 1 0-.32a.5.5 0 0 1 .15-.08l159.71-62.52l-103.3 74l-56.41-11.04Zm67.39 84A2 2 0 0 1 86 200v-51.89l29.69 26Zm88.07 7.08a1.93 1.93 0 0 1-1.34 1.44a2 2 0 0 1-2-.4l-84.53-74.15L215 45.5Z"></svg:path>`,
})
export class PhTelegramLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelegramLogoThinIcon],svg[ph-telegram-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.27 29.22a5 5 0 0 0-5.1-.87L18.51 107.66a10.22 10.22 0 0 0 1.75 19.56L76 138.16V200a12 12 0 0 0 7.51 11.13A12.1 12.1 0 0 0 88 212a12 12 0 0 0 8.62-3.68l28-29l43 37.71a12 12 0 0 0 7.89 3a12.5 12.5 0 0 0 3.74-.59a11.87 11.87 0 0 0 8-8.72l40.62-176.6a5 5 0 0 0-1.6-4.9M20 117.38a2.13 2.13 0 0 1 1.42-2.27l174.65-68.35l-117 83.85l-57.26-11.24a2.12 2.12 0 0 1-1.81-1.99m70.87 85.38A4 4 0 0 1 84 200v-56.3l34.58 30.3Zm88.58 6.14a4 4 0 0 1-6.57 2.09l-86.45-75.81l131.7-94.38Z"></svg:path>`,
})
export class PhTelegramLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelevisionIcon],svg[ph-television-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 64h-68.69l34.35-34.34a8 8 0 1 0-11.32-11.32L128 60.69L85.66 18.34a8 8 0 0 0-11.32 11.32L108.69 64H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16M40 80h104v120H40Zm176 120h-56V80h56zm-16-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0 48a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTelevisionIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelevisionBoldIcon],svg[ph-television-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 60h-59l27.52-27.52a12 12 0 0 0-17-17L128 55L88.49 15.51a12 12 0 0 0-17 17L99 60H40a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20M44 84h84v112H44Zm168 112h-60V84h60Zm-44-80a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 48a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhTelevisionBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelevisionDuotoneIcon],svg[ph-television-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 72v136H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8Z" opacity=".2"></svg:path><svg:path d="M216 64h-68.69l34.35-34.34a8 8 0 1 0-11.32-11.32L128 60.69L85.66 18.34a8 8 0 0 0-11.32 11.32L108.69 64H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16M40 80h104v120H40Zm176 120h-56V80h56zm-16-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0 48a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhTelevisionDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelevisionFillIcon],svg[ph-television-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 64h-68.69l34.35-34.34a8 8 0 1 0-11.32-11.32L128 60.69L85.66 18.34a8 8 0 0 0-11.32 11.32L108.69 64H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 136h-56V80h56zm-16-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0 48a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTelevisionFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelevisionLightIcon],svg[ph-television-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 66h-73.52l37.76-37.76a6 6 0 0 0-8.48-8.48L128 63.51L84.24 19.76a6 6 0 1 0-8.48 8.48L113.52 66H40a14 14 0 0 0-14 14v120a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14M38 200V80a2 2 0 0 1 2-2h106v124H40a2 2 0 0 1-2-2m180 0a2 2 0 0 1-2 2h-58V78h58a2 2 0 0 1 2 2Zm-20-84a10 10 0 1 1-10-10a10 10 0 0 1 10 10m0 48a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhTelevisionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelevisionSimpleIcon],svg[ph-television-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 64h-68.69l34.35-34.34a8 8 0 1 0-11.32-11.32L128 60.69L85.66 18.34a8 8 0 0 0-11.32 11.32L108.69 64H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 136H40V80h176z"></svg:path>`,
})
export class PhTelevisionSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelevisionSimpleBoldIcon],svg[ph-television-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 60h-59l27.52-27.52a12 12 0 0 0-17-17L128 55L88.49 15.51a12 12 0 0 0-17 17L99 60H40a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m-4 136H44V84h168Z"></svg:path>`,
})
export class PhTelevisionSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelevisionSimpleDuotoneIcon],svg[ph-television-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 80v120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 64h-68.69l34.35-34.34a8 8 0 1 0-11.32-11.32L128 60.69L85.66 18.34a8 8 0 0 0-11.32 11.32L108.69 64H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 136H40V80h176z"></svg:path></svg:g>`,
})
export class PhTelevisionSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelevisionSimpleFillIcon],svg[ph-television-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 64h-68.69l34.35-34.34a8 8 0 1 0-11.32-11.32L128 60.69L85.66 18.34a8 8 0 0 0-11.32 11.32L108.69 64H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 136H40V80h176zm-16-100v80a4 4 0 0 1-4 4H60a4 4 0 0 1-4-4v-80a4 4 0 0 1 4-4h136a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhTelevisionSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelevisionSimpleLightIcon],svg[ph-television-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 66h-73.52l37.76-37.76a6 6 0 0 0-8.48-8.48L128 63.51L84.24 19.76a6 6 0 1 0-8.48 8.48L113.52 66H40a14 14 0 0 0-14 14v120a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14m2 134a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhTelevisionSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelevisionSimpleThinIcon],svg[ph-television-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-78.34l41.17-41.17a4 4 0 1 0-5.66-5.66L128 66.34L82.83 21.17a4 4 0 0 0-5.66 5.66L118.34 68H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12m4 132a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhTelevisionSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelevisionThinIcon],svg[ph-television-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-78.34l41.17-41.17a4 4 0 1 0-5.66-5.66L128 66.34L82.83 21.17a4 4 0 0 0-5.66 5.66L118.34 68H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12M36 200V80a4 4 0 0 1 4-4h108v128H40a4 4 0 0 1-4-4m184 0a4 4 0 0 1-4 4h-60V76h60a4 4 0 0 1 4 4Zm-24-84a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0 48a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTelevisionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTennisBallIcon],svg[ph-tennis-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.57 54.46a104 104 0 1 0 0 147.08a103.4 103.4 0 0 0 0-147.08M65.75 65.77a87.63 87.63 0 0 1 53.66-25.31A87.3 87.3 0 0 1 94 94.06a87.42 87.42 0 0 1-53.62 25.35a87.58 87.58 0 0 1 25.37-53.64m-25.42 69.71a103.3 103.3 0 0 0 65-30.11a103.24 103.24 0 0 0 30.13-65a87.78 87.78 0 0 1 80.18 80.14a104 104 0 0 0-95.16 95.1a87.78 87.78 0 0 1-80.18-80.14Zm149.92 54.75a87.7 87.7 0 0 1-53.66 25.31a88 88 0 0 1 79-78.95a87.58 87.58 0 0 1-25.34 53.64"></svg:path>`,
})
export class PhTennisBallIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTennisBallBoldIcon],svg[ph-tennis-ball-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.4 51.6a108 108 0 1 0 0 152.8a108.16 108.16 0 0 0 0-152.8m-135.82 17a83.47 83.47 0 0 1 46.2-23.52a84.09 84.09 0 0 1-69.72 69.72a83.47 83.47 0 0 1 23.52-46.22Zm-23.84 70.47a107.27 107.27 0 0 0 63.45-30.88a107.27 107.27 0 0 0 30.88-63.45a83.84 83.84 0 0 1 72.19 72.19a108.11 108.11 0 0 0-94.33 94.32a83.82 83.82 0 0 1-72.19-72.18m142.68 48.35a83.53 83.53 0 0 1-46.2 23.52a84.09 84.09 0 0 1 69.72-69.72a83.47 83.47 0 0 1-23.52 46.2"></svg:path>`,
})
export class PhTennisBallBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTennisBallDuotoneIcon],svg[ph-tennis-ball-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M60.12 60.09A95.74 95.74 0 0 1 127.83 32A95.94 95.94 0 0 1 32 127.75a95.64 95.64 0 0 1 28.12-67.66M32 127.92v-.17Zm124.28 28.26a95.54 95.54 0 0 0-28.11 67.65A96 96 0 0 0 224 128.08a95.8 95.8 0 0 0-67.72 28.1M128.17 224v-.17Z" opacity=".2"></svg:path><svg:path d="M201.57 54.46a104 104 0 1 0 0 147.08a103.4 103.4 0 0 0 0-147.08M65.75 65.77a87.63 87.63 0 0 1 53.66-25.31A87.3 87.3 0 0 1 94 94.06a87.42 87.42 0 0 1-53.62 25.35a87.58 87.58 0 0 1 25.37-53.64m-25.42 69.71a103.3 103.3 0 0 0 65-30.11a103.24 103.24 0 0 0 30.13-65a87.78 87.78 0 0 1 80.18 80.14a104 104 0 0 0-95.16 95.1a87.78 87.78 0 0 1-80.18-80.14Zm149.92 54.75a87.7 87.7 0 0 1-53.66 25.31a88 88 0 0 1 79-78.95a87.58 87.58 0 0 1-25.34 53.64"></svg:path></svg:g>`,
})
export class PhTennisBallDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTennisBallFillIcon],svg[ph-tennis-ball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.81 115.41a103.9 103.9 0 0 1 90.6-90.65a4 4 0 0 1 4.47 3.79a87.82 87.82 0 0 1-91.27 91.33a4 4 0 0 1-3.8-4.47m202.54 20.7c-1.12 0-2.23-.07-3.35-.07a87.84 87.84 0 0 0-87.88 91.41a4 4 0 0 0 4.47 3.79a103.9 103.9 0 0 0 90.6-90.66a4 4 0 0 0-3.84-4.47m-76.89 14.35A103.33 103.33 0 0 1 224 120h3.09a4 4 0 0 0 4.12-4.43a103.91 103.91 0 0 0-90.88-90.89a4 4 0 0 0-4.43 4.12a103.72 103.72 0 0 1-30.36 76.7A103.33 103.33 0 0 1 32 136h-3.09a4 4 0 0 0-4.12 4.43a103.91 103.91 0 0 0 90.88 90.89a4 4 0 0 0 4.43-4.12a103.72 103.72 0 0 1 30.36-76.74"></svg:path>`,
})
export class PhTennisBallFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTennisBallLightIcon],svg[ph-tennis-ball-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.16 55.88a102 102 0 1 0 0 144.24a101.4 101.4 0 0 0 0-144.24M64.33 64.36a89.62 89.62 0 0 1 57.25-26.07a89.32 89.32 0 0 1-26.12 57.18a89.38 89.38 0 0 1-57.21 26.11a89.6 89.6 0 0 1 26.08-57.22M38.2 133.63A101.36 101.36 0 0 0 104 104a101.24 101.24 0 0 0 29.68-65.72a89.76 89.76 0 0 1 84.17 84.13a102 102 0 0 0-95.43 95.39a89.76 89.76 0 0 1-84.22-84.17m153.47 58a89.63 89.63 0 0 1-57.25 26.06a89.94 89.94 0 0 1 83.33-83.28a89.6 89.6 0 0 1-26.08 57.23Z"></svg:path>`,
})
export class PhTennisBallLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTennisBallThinIcon],svg[ph-tennis-ball-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.74 57.29A99.4 99.4 0 0 0 128 28h-.19a100 100 0 1 0 70.93 29.29M62.92 63a91.38 91.38 0 0 1 60.8-26.85a91.3 91.3 0 0 1-26.85 60.74a91.44 91.44 0 0 1-60.77 26.84A91.6 91.6 0 0 1 62.92 63m-26.83 68.74a99.36 99.36 0 0 0 66.44-29.2a99.25 99.25 0 0 0 29.21-66.45a91.9 91.9 0 0 1 88.17 88.17a100 100 0 0 0-95.65 95.65a91.9 91.9 0 0 1-88.17-88.17m157 61.31a91.38 91.38 0 0 1-60.8 26.85a92 92 0 0 1 87.62-87.63a91.6 91.6 0 0 1-26.83 60.78Z"></svg:path>`,
})
export class PhTennisBallThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTentIcon],svg[ph-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m255.31 188.75l-64-144A8 8 0 0 0 184 40H72a8 8 0 0 0-7.27 4.69a.2.2 0 0 0 0 .06v.12L.69 188.75A8 8 0 0 0 8 200h240a8 8 0 0 0 7.31-11.25M64 184H20.31L64 85.7Zm16 0V85.7l43.69 98.3Zm61.2 0L84.31 56h94.49l56.89 128Z"></svg:path>`,
})
export class PhTentIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTentBoldIcon],svg[ph-tent-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m255 187.13l-64-144A12 12 0 0 0 180 36H76a12 12 0 0 0-10.85 6.9a2 2 0 0 0-.12.23l-.03.17L1 187.13A12 12 0 0 0 12 204h232a12 12 0 0 0 11-16.87M64 104.55V180H30.46ZM88 180v-75.45L121.54 180Zm59.8 0L94.47 60h77.73l53.34 120Z"></svg:path>`,
})
export class PhTentBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTentDuotoneIcon],svg[ph-tent-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M136 192H8L72 48Z" opacity=".2"></svg:path><svg:path d="m255.31 188.75l-64-144A8 8 0 0 0 184 40H72a8 8 0 0 0-7.27 4.69a.2.2 0 0 0 0 .06v.12L.69 188.75A8 8 0 0 0 8 200h240a8 8 0 0 0 7.31-11.25M64 184H20.31L64 85.7Zm16 0V85.7l43.69 98.3Zm61.2 0L84.31 56h94.49l56.89 128Z"></svg:path></svg:g>`,
})
export class PhTentDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTentFillIcon],svg[ph-tent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m255.31 188.75l-64-144A8 8 0 0 0 184 40H72a8 8 0 0 0-7.31 4.75v.12l-64 143.88A8 8 0 0 0 8 200h240a8 8 0 0 0 7.31-11.25M64 184H20.31L64 85.7Zm16 0V85.7l43.69 98.3Z"></svg:path>`,
})
export class PhTentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTentLightIcon],svg[ph-tent-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m253.48 189.56l-64-144A6 6 0 0 0 184 42H72a6 6 0 0 0-5.45 3.51v.14L2.52 189.56A6 6 0 0 0 8 198h240a6 6 0 0 0 5.48-8.44M66 76.27V186H17.23ZM78 186V76.27L126.77 186Zm61.9 0L81.23 54h98.87l58.67 132Z"></svg:path>`,
})
export class PhTentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTentThinIcon],svg[ph-tent-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251.66 190.38l-64-144A4 4 0 0 0 184 44H72a4 4 0 0 0-3.63 2.35v.06l-64 143.93A4 4 0 0 0 8 196h240a4 4 0 0 0 3.66-5.62M68 66.85V188H14.16ZM76 188V66.85L129.84 188Zm62.6 0L78.16 52H181.4l60.44 136Z"></svg:path>`,
})
export class PhTentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTerminalIcon],svg[ph-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m117.31 134l-72 64a8 8 0 1 1-10.63-12L100 128L34.69 70a8 8 0 1 1 10.63-12l72 64a8 8 0 0 1 0 12ZM216 184h-96a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhTerminalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTerminalBoldIcon],svg[ph-terminal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m120 137l-72 64a12 12 0 1 1-16-18l61.91-55L32 73a12 12 0 1 1 16-18l72 64a12 12 0 0 1 0 18m96 43h-96a12 12 0 0 0 0 24h96a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhTerminalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTerminalDuotoneIcon],svg[ph-terminal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v112H40V64h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m117.31 134l-72 64a8 8 0 1 1-10.63-12L100 128L34.69 70a8 8 0 1 1 10.63-12l72 64a8 8 0 0 1 0 12ZM216 184h-96a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhTerminalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTerminalFillIcon],svg[ph-terminal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M77.66 173.66a8 8 0 0 1-11.32-11.32L100.69 128L66.34 93.66a8 8 0 0 1 11.32-11.32l40 40a8 8 0 0 1 0 11.32ZM192 176h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhTerminalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTerminalLightIcon],svg[ph-terminal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m116 132.48l-72 64a6 6 0 0 1-8-9L103 128L36 68.49a6 6 0 0 1 8-9l72 64a6 6 0 0 1 0 9ZM216 186h-96a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTerminalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTerminalThinIcon],svg[ph-terminal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 128a4 4 0 0 1-1.34 3l-72 64a4 4 0 1 1-5.32-6L106 128L37.34 67a4 4 0 0 1 5.32-6l72 64a4 4 0 0 1 1.34 3m100 60h-96a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTerminalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTerminalWindowIcon],svg[ph-terminal-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 128a8 8 0 0 1-3 6.25l-40 32a8 8 0 1 1-10-12.5L107.19 128L75 102.25a8 8 0 1 1 10-12.5l40 32a8 8 0 0 1 3 6.25m48 24h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16m56-96v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 144V56H40v144z"></svg:path>`,
})
export class PhTerminalWindowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTerminalWindowBoldIcon],svg[ph-terminal-window-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72.5 150.63L100.79 128L72.5 105.37a12 12 0 1 1 15-18.74l40 32a12 12 0 0 1 0 18.74l-40 32a12 12 0 0 1-15-18.74M144 172h32a12 12 0 0 0 0-24h-32a12 12 0 0 0 0 24m92-116v144a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20m-24 4H44v136h168Z"></svg:path>`,
})
export class PhTerminalWindowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTerminalWindowDuotoneIcon],svg[ph-terminal-window-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M128 128a8 8 0 0 1-3 6.25l-40 32a8 8 0 1 1-10-12.5L107.19 128L75 102.25a8 8 0 1 1 10-12.5l40 32a8 8 0 0 1 3 6.25m48 24h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16m56-96v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 144V56H40v144z"></svg:path></svg:g>`,
})
export class PhTerminalWindowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTerminalWindowFillIcon],svg[ph-terminal-window-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-91 94.25l-40 32a8 8 0 1 1-10-12.5L107.19 128L75 102.25a8 8 0 1 1 10-12.5l40 32a8 8 0 0 1 0 12.5M176 168h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhTerminalWindowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTerminalWindowLightIcon],svg[ph-terminal-window-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126 128a6 6 0 0 1-2.25 4.69l-40 32a6 6 0 0 1-7.5-9.38L110.4 128l-34.15-27.31a6 6 0 1 1 7.5-9.38l40 32A6 6 0 0 1 126 128m50 26h-40a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12m54-98v144a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v144a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhTerminalWindowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTerminalWindowThinIcon],svg[ph-terminal-window-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122.5 124.88a4 4 0 0 1 0 6.24l-40 32a4 4 0 0 1-5-6.24L113.6 128L77.5 99.12a4 4 0 0 1 5-6.24ZM176 156h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8m52-100v144a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhTerminalWindowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTestTubeIcon],svg[ph-test-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.66 86.34l-60-60a8 8 0 0 0-11.32 0L37.11 155.57a44.77 44.77 0 0 0 63.32 63.32L212.32 107l22.21-7.4a8 8 0 0 0 3.13-13.25ZM89.11 207.57a28.77 28.77 0 0 1-40.68-40.68l28.8-28.8c8.47-2.9 21.75-4 39.07 5c10.6 5.54 20.18 8 28.56 8.73ZM205.47 92.41a8 8 0 0 0-3.13 1.93l-39.57 39.57c-8.47 2.9-21.75 4-39.07-5c-10.6-5.54-20.18-8-28.56-8.73L172 43.31l45.19 45.19Z"></svg:path>`,
})
export class PhTestTubeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTestTubeBoldIcon],svg[ph-test-tube-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.49 83.51l-60-60a12 12 0 0 0-17 0L34.28 152.75a48.77 48.77 0 0 0 69 69l111.2-111.26l21.31-7.11a12 12 0 0 0 4.7-19.87M86.28 204.75a24.77 24.77 0 0 1-35-35l28.13-28.13c7.73-2.41 19.58-3 35.06 5a84 84 0 0 0 21.95 8ZM204.2 88.62a12.15 12.15 0 0 0-4.69 2.89l-38.89 38.9c-7.73 2.41-19.58 3-35.06-5a84 84 0 0 0-21.94-8L172 49l37.79 37.79Z"></svg:path>`,
})
export class PhTestTubeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTestTubeDuotoneIcon],svg[ph-test-tube-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m167.18 140.82l-72.41 72.41a36.77 36.77 0 0 1-52 0a36.77 36.77 0 0 1 0-52l30-30c9.37-3.65 25.78-6.36 47.18 4.82s37.86 8.42 47.23 4.77" opacity=".2"></svg:path><svg:path d="m237.66 86.34l-60-60a8 8 0 0 0-11.32 0L37.11 155.57a44.77 44.77 0 0 0 63.32 63.32L212.32 107l22.21-7.4a8 8 0 0 0 3.13-13.25ZM89.11 207.57a28.77 28.77 0 0 1-40.68-40.68l28.8-28.8c8.47-2.9 21.75-4 39.07 5c10.6 5.54 20.18 8 28.56 8.73ZM205.47 92.41a8 8 0 0 0-3.13 1.93l-39.57 39.57c-8.47 2.9-21.75 4-39.07-5c-10.6-5.54-20.18-8-28.56-8.73L172 43.31l45.19 45.19Z"></svg:path></svg:g>`,
})
export class PhTestTubeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTestTubeFillIcon],svg[ph-test-tube-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.66 86.34l-60-60a8 8 0 0 0-11.32 0L37.11 155.57a44.77 44.77 0 0 0 63.32 63.32L212.32 107l22.21-7.4a8 8 0 0 0 3.13-13.25Zm-32.19 6.07a8 8 0 0 0-3.13 1.93l-39.57 39.57c-8.47 2.9-21.75 4-39.07-5c-10.6-5.54-20.18-8-28.56-8.73L172 43.31l45.19 45.19Z"></svg:path>`,
})
export class PhTestTubeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTestTubeLightIcon],svg[ph-test-tube-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.24 87.76l-60-60a6 6 0 0 0-8.48 0L38.53 157A42.77 42.77 0 1 0 99 217.47l112.24-112.23l22.66-7.55a6 6 0 0 0 2.34-9.93M90.53 209A30.77 30.77 0 1 1 47 165.47l29.13-29.12c8.84-3.14 22.84-4.56 41.08 5c12.28 6.41 23.13 8.66 32.27 8.71ZM206.1 94.31a6 6 0 0 0-2.34 1.45l-39.9 39.89c-8.84 3.14-22.84 4.56-41.08-5c-12.28-6.38-23.13-8.65-32.27-8.65L172 40.49l48.89 48.89Z"></svg:path>`,
})
export class PhTestTubeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTestTubeThinIcon],svg[ph-test-tube-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.83 89.18l-60-60a4 4 0 0 0-5.66 0L39.94 158.41a40.78 40.78 0 0 0 57.66 57.67L210.16 103.5l23.1-7.7a4 4 0 0 0 1.57-6.62M91.94 210.42a32.77 32.77 0 1 1-46.34-46.35L75 134.63c9.2-3.38 23.94-5.08 43.11 4.93c12.09 6.31 22.74 8.48 31.66 8.48c1.64 0 3.2-.09 4.73-.22Zm114.8-114.21a4.06 4.06 0 0 0-1.57 1L165 137.39c-9.2 3.38-23.94 5.08-43.11-4.93c-14.3-7.47-26.58-9.13-36.38-8.27L172 37.66l52.6 52.6Z"></svg:path>`,
})
export class PhTestTubeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAUnderlineIcon],svg[ph-text-a-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.59 175.24a8 8 0 0 0 10.65-3.83L87.9 136h80.2l16.66 35.41a8 8 0 1 0 14.48-6.82l-64-136a8 8 0 0 0-14.48 0l-64 136a8 8 0 0 0 3.83 10.65M128 50.79L160.57 120H95.43ZM224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTextAUnderlineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAUnderlineBoldIcon],svg[ph-text-a-underline-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M58.89 178.86a12 12 0 0 0 16-5.75L90.44 140h75.12l15.58 33.11a12 12 0 0 0 21.72-10.22l-64-136a12 12 0 0 0-21.72 0l-64 136a12 12 0 0 0 5.75 15.97M128 60.18L154.27 116h-52.54ZM228 216a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTextAUnderlineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAUnderlineDuotoneIcon],svg[ph-text-a-underline-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M173.18 128H82.82L128 32Z" opacity=".2"></svg:path><svg:path d="M60.59 175.24a8 8 0 0 0 10.65-3.83L87.9 136h80.2l16.66 35.41a8 8 0 1 0 14.48-6.82l-64-136a8 8 0 0 0-14.48 0l-64 136a8 8 0 0 0 3.83 10.65M128 50.79L160.57 120H95.43ZM224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhTextAUnderlineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAUnderlineFillIcon],svg[ph-text-a-underline-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148.73 120h-41.46L128 75.09ZM216 32v192a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V32a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8M76.65 167.26a8 8 0 0 0 10.61-3.91L99.89 136h56.22l12.63 27.35a8 8 0 0 0 14.52-6.7l-48-104a8 8 0 0 0-14.52 0l-48 104a8 8 0 0 0 3.91 10.61M200 192a8 8 0 0 0-8-8H64a8 8 0 0 0 0 16h128a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhTextAUnderlineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAUnderlineLightIcon],svg[ph-text-a-underline-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61.45 173.43a6 6 0 0 0 8-2.88L86.63 134h82.74l17.2 36.55A6 6 0 0 0 192 174a5.9 5.9 0 0 0 2.55-.57a6 6 0 0 0 2.88-8l-64-136a6 6 0 0 0-10.86 0l-64 136a6 6 0 0 0 2.88 8M128 46.09L163.72 122H92.28ZM222 216a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhTextAUnderlineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAUnderlineThinIcon],svg[ph-text-a-underline-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62.3 171.62a4 4 0 0 0 5.32-1.92L85.36 132h85.28l17.74 37.7a4 4 0 1 0 7.24-3.4l-64-136a4 4 0 0 0-7.24 0l-64 136a4 4 0 0 0 1.92 5.32M128 41.39L166.87 124H89.13ZM220 216a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhTextAUnderlineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAaIcon],svg[ph-text-aa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M87.24 52.59a8 8 0 0 0-14.48 0l-64 136a8 8 0 1 0 14.48 6.81L39.9 160h80.2l16.66 35.4a8 8 0 1 0 14.48-6.81ZM47.43 144L80 74.79L112.57 144ZM200 96c-12.76 0-22.73 3.47-29.63 10.32a8 8 0 0 0 11.26 11.36c3.8-3.77 10-5.68 18.37-5.68c13.23 0 24 9 24 20v3.22a42.76 42.76 0 0 0-24-7.22c-22.06 0-40 16.15-40 36s17.94 36 40 36a42.73 42.73 0 0 0 24-7.25a8 8 0 0 0 16-.75v-60c0-19.85-17.94-36-40-36m0 88c-13.23 0-24-9-24-20s10.77-20 24-20s24 9 24 20s-10.77 20-24 20"></svg:path>`,
})
export class PhTextAaIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAaBoldIcon],svg[ph-text-aa-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90.86 50.89a12 12 0 0 0-21.72 0l-64 136a12 12 0 0 0 21.71 10.22L42.44 164h75.12l15.58 33.11a12 12 0 0 0 21.72-10.22ZM53.74 140L80 84.18L106.27 140ZM200 84c-13.85 0-24.77 3.86-32.45 11.48a12 12 0 1 0 16.9 17c3-3 8.26-4.52 15.55-4.52c11 0 20 7.18 20 16v4.39a47.3 47.3 0 0 0-20-4.35c-24.26 0-44 17.94-44 40s19.74 40 44 40a47.2 47.2 0 0 0 22-5.38a12 12 0 0 0 22-6.62v-68c0-22.06-19.74-40-44-40m0 96c-11 0-20-7.18-20-16s9-16 20-16s20 7.18 20 16s-9 16-20 16"></svg:path>`,
})
export class PhTextAaBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAaDuotoneIcon],svg[ph-text-aa-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 164c0 15.46-14.33 28-32 28s-32-12.54-32-28s14.33-28 32-28s32 12.54 32 28M34.82 152h90.36L80 56Z" opacity=".2"></svg:path><svg:path d="M87.24 52.59a8 8 0 0 0-14.48 0l-64 136a8 8 0 1 0 14.48 6.81L39.9 160h80.2l16.66 35.4a8 8 0 1 0 14.48-6.81ZM47.43 144L80 74.79L112.57 144ZM200 96c-12.76 0-22.73 3.47-29.63 10.32a8 8 0 0 0 11.26 11.36c3.8-3.77 10-5.68 18.37-5.68c13.23 0 24 9 24 20v3.22a42.76 42.76 0 0 0-24-7.22c-22.06 0-40 16.15-40 36s17.94 36 40 36a42.73 42.73 0 0 0 24-7.25a8 8 0 0 0 16-.75v-60c0-19.85-17.94-36-40-36m0 88c-13.23 0-24-9-24-20s10.77-20 24-20s24 9 24 20s-10.77 20-24 20"></svg:path></svg:g>`,
})
export class PhTextAaDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAaFillIcon],svg[ph-text-aa-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 156c0 6.5-7.33 12-16 12s-16-5.5-16-12s7.33-12 16-12s16 5.5 16 12m32-100v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-88.63 116.88l-44-104a8 8 0 0 0-14.74 0l-44 104a8 8 0 0 0 14.74 6.24L66.84 152h50.32l11.47 27.12a8 8 0 0 0 14.74-6.24M216 124c0-15.44-14.36-28-32-28a34.86 34.86 0 0 0-20.78 6.68a8 8 0 0 0 9.56 12.83A18.84 18.84 0 0 1 184 112c8.56 0 15.8 5.36 16 11.76v8a35.24 35.24 0 0 0-16-3.76c-17.64 0-32 12.56-32 28s14.36 28 32 28a35.1 35.1 0 0 0 16.93-4.26A8 8 0 0 0 216 176ZM73.61 136h36.78L92 92.53Z"></svg:path>`,
})
export class PhTextAaFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAaLightIcon],svg[ph-text-aa-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85.43 53.45a6 6 0 0 0-10.86 0l-64 136a6 6 0 1 0 10.86 5.11L38.63 158h82.74l17.2 36.55a6 6 0 1 0 10.86-5.11ZM44.28 146L80 70.09L115.72 146ZM200 98c-12.21 0-21.71 3.28-28.23 9.74a6 6 0 0 0 8.46 8.52c4.18-4.15 10.84-6.26 19.77-6.26c14.34 0 26 9.87 26 22v7.24a40.36 40.36 0 0 0-26-9.24c-20.95 0-38 15.25-38 34s17.05 34 38 34a40.36 40.36 0 0 0 26-9.24V192a6 6 0 0 0 12 0v-60c0-18.75-17-34-38-34m0 88c-14.34 0-26-9.87-26-22s11.66-22 26-22s26 9.87 26 22s-11.66 22-26 22"></svg:path>`,
})
export class PhTextAaLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAaThinIcon],svg[ph-text-aa-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M83.62 54.3a4 4 0 0 0-7.24 0l-64 136a4 4 0 0 0 7.24 3.4L37.36 156h85.28l17.74 37.7a4 4 0 1 0 7.24-3.4ZM41.13 148L80 65.39L118.87 148ZM200 100c-11.67 0-20.69 3.08-26.82 9.16a4 4 0 1 0 5.64 5.68c4.57-4.54 11.7-6.84 21.18-6.84c15.44 0 28 10.77 28 24v11.92A37.78 37.78 0 0 0 200 132c-19.85 0-36 14.35-36 32s16.15 32 36 32a37.78 37.78 0 0 0 28-11.92V192a4 4 0 0 0 8 0v-60c0-17.64-16.15-32-36-32m0 88c-15.44 0-28-10.77-28-24s12.56-24 28-24s28 10.77 28 24s-12.56 24-28 24"></svg:path>`,
})
export class PhTextAaThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignCenterIcon],svg[ph-text-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m32 32a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16Zm152 40H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m-24 40H64a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhTextAlignCenterIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignCenterBoldIcon],svg[ph-text-align-center-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m36 28a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24Zm152 40H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24m-24 40H64a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhTextAlignCenterBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignCenterDuotoneIcon],svg[ph-text-align-center-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v104a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V64Z" opacity=".2"></svg:path><svg:path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m32 32a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16Zm152 40H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m-24 40H64a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhTextAlignCenterDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignCenterFillIcon],svg[ph-text-align-center-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 152H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m16-32H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16M72 112a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m120-24H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhTextAlignCenterFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignCenterLightIcon],svg[ph-text-align-center-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m30 34a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12Zm152 40H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12m-24 40H64a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTextAlignCenterLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignCenterThinIcon],svg[ph-text-align-center-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m28 36a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8Zm152 40H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8m-24 40H64a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTextAlignCenterThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignJustifyIcon],svg[ph-text-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m184 32H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m0 40H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m0 40H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhTextAlignJustifyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignJustifyBoldIcon],svg[ph-text-align-justify-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m188 28H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24m0 40H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24m0 40H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhTextAlignJustifyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignJustifyDuotoneIcon],svg[ph-text-align-justify-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v120H40V64Z" opacity=".2"></svg:path><svg:path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m184 32H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m0 40H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m0 40H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhTextAlignJustifyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignJustifyFillIcon],svg[ph-text-align-justify-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-16 152H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16m0-32H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16m0-32H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16m0-32H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhTextAlignJustifyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignJustifyLightIcon],svg[ph-text-align-justify-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m182 34H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12m0 40H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12m0 40H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTextAlignJustifyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignJustifyThinIcon],svg[ph-text-align-justify-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m180 36H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8m0 40H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8m0 40H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTextAlignJustifyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignLeftIcon],svg[ph-text-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 48h128a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 24H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m-48 40H40a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhTextAlignLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignLeftBoldIcon],svg[ph-text-align-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m12 52h128a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m176 16H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24m-48 40H40a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhTextAlignLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignLeftDuotoneIcon],svg[ph-text-align-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v104a16 16 0 0 1-16 16H40V64Z" opacity=".2"></svg:path><svg:path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 48h128a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 24H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m-48 40H40a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhTextAlignLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignLeftFillIcon],svg[ph-text-align-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-48 152H64a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m32-32H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16M56 112a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8m136-24H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhTextAlignLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignLeftLightIcon],svg[ph-text-align-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m6 46h128a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m176 28H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12m-48 40H40a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTextAlignLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignLeftThinIcon],svg[ph-text-align-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m4 44h128a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m176 32H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8m-48 40H40a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTextAlignLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignRightIcon],svg[ph-text-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m184 32H88a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16m0 40H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m0 40H88a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhTextAlignRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignRightBoldIcon],svg[ph-text-align-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m188 28H88a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24m0 40H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24m0 40H88a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhTextAlignRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignRightDuotoneIcon],svg[ph-text-align-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v120H56a16 16 0 0 1-16-16V64Z" opacity=".2"></svg:path><svg:path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m184 32H88a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16m0 40H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m0 40H88a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhTextAlignRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignRightFillIcon],svg[ph-text-align-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-16 152H96a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m0-32H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m0-32H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhTextAlignRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignRightLightIcon],svg[ph-text-align-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m182 34H88a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12m0 40H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12m0 40H88a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTextAlignRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignRightThinIcon],svg[ph-text-align-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m180 36H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8m0 40H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8m0 40H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTextAlignRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextBIcon],svg[ph-text-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178.48 115.7A44 44 0 0 0 148 40H80a8 8 0 0 0-8 8v152a8 8 0 0 0 8 8h80a48 48 0 0 0 18.48-92.3M88 56h60a28 28 0 0 1 0 56H88Zm72 136H88v-64h72a32 32 0 0 1 0 64"></svg:path>`,
})
export class PhTextBIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextBBoldIcon],svg[ph-text-b-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185.08 114.46A48 48 0 0 0 148 36H80a12 12 0 0 0-12 12v152a12 12 0 0 0 12 12h80a52 52 0 0 0 25.08-97.54M92 60h56a24 24 0 0 1 0 48H92Zm68 128H92v-56h68a28 28 0 0 1 0 56"></svg:path>`,
})
export class PhTextBBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextBDuotoneIcon],svg[ph-text-b-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 160a40 40 0 0 1-40 40H80V48h68a36 36 0 0 1 0 72h12a40 40 0 0 1 40 40" opacity=".2"></svg:path><svg:path d="M178.48 115.7A44 44 0 0 0 148 40H80a8 8 0 0 0-8 8v152a8 8 0 0 0 8 8h80a48 48 0 0 0 18.48-92.3M88 56h60a28 28 0 0 1 0 56H88Zm72 136H88v-64h72a32 32 0 0 1 0 64"></svg:path></svg:g>`,
})
export class PhTextBDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextBFillIcon],svg[ph-text-b-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 156a20 20 0 0 1-20 20H96v-40h52a20 20 0 0 1 20 20m56-108v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-40 108a36 36 0 0 0-18-31.15A36 36 0 0 0 140 64H88a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h60a36 36 0 0 0 36-36m-24-56a20 20 0 0 0-20-20H96v40h44a20 20 0 0 0 20-20"></svg:path>`,
})
export class PhTextBFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextBLightIcon],svg[ph-text-b-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174.69 116.41A42 42 0 0 0 148 42H80a6 6 0 0 0-6 6v152a6 6 0 0 0 6 6h80a46 46 0 0 0 14.69-89.59M86 54h62a30 30 0 0 1 0 60H86Zm74 140H86v-68h74a34 34 0 0 1 0 68"></svg:path>`,
})
export class PhTextBLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextBThinIcon],svg[ph-text-b-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.27 117.21A40 40 0 0 0 148 44H80a4 4 0 0 0-4 4v152a4 4 0 0 0 4 4h80a44 44 0 0 0 10.27-86.79M84 52h64a32 32 0 0 1 0 64H84Zm76 144H84v-72h76a36 36 0 0 1 0 72"></svg:path>`,
})
export class PhTextBThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextBolderIcon],svg[ph-text-bolder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.5 115.7A44 44 0 0 0 140 40H64a7.9 7.9 0 0 0-8 8v152a8 8 0 0 0 8 8h88a48 48 0 0 0 18.5-92.3ZM72 56h68a28 28 0 0 1 0 56H72Zm80 136H72v-64h80a32 32 0 0 1 0 64Z"></svg:path>`,
})
export class PhTextBolderIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextBolderBoldIcon],svg[ph-text-bolder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M177.1 114.5A48 48 0 0 0 140 36H64a12 12 0 0 0-12 12v152a12 12 0 0 0 12 12h88a52 52 0 0 0 25.1-97.5ZM76 60h64a24 24 0 0 1 0 48H76Zm76 128H76v-56h76a28 28 0 0 1 0 56Z"></svg:path>`,
})
export class PhTextBolderBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextBolderLightIcon],svg[ph-text-bolder-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166.7 116.4A42 42 0 0 0 140 42H64a6.2 6.2 0 0 0-6 6v152a6 6 0 0 0 6 6h88a46 46 0 0 0 14.7-89.6ZM70 54h70a30 30 0 0 1 0 60H70Zm82 140H70v-68h82a34 34 0 0 1 0 68Z"></svg:path>`,
})
export class PhTextBolderLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextBolderThinIcon],svg[ph-text-bolder-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162.3 117.2A40 40 0 0 0 140 44H64a4.1 4.1 0 0 0-4 4v152a4 4 0 0 0 4 4h88a44 44 0 0 0 10.3-86.8ZM68 52h72a32 32 0 0 1 0 64H68Zm84 144H68v-72h84a36 36 0 0 1 0 72Z"></svg:path>`,
})
export class PhTextBolderThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextColumnsIcon],svg[ph-text-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 64a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h72a8 8 0 0 1 8 8m-8 32H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0 40H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0 40H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m32-104h72a8 8 0 0 0 0-16h-72a8 8 0 0 0 0 16m72 24h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0 40h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0 40h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhTextColumnsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextColumnsBoldIcon],svg[ph-text-columns-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 64a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h68a12 12 0 0 1 12 12m-12 28H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m0 40H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m0 40H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m40-96h68a12 12 0 0 0 0-24h-68a12 12 0 0 0 0 24m68 16h-68a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m0 40h-68a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m0 40h-68a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhTextColumnsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextColumnsDuotoneIcon],svg[ph-text-columns-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v120H40V64Z" opacity=".2"></svg:path><svg:path d="M120 64a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h72a8 8 0 0 1 8 8m-8 32H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0 40H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0 40H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m32-104h72a8 8 0 0 0 0-16h-72a8 8 0 0 0 0 16m72 24h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0 40h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0 40h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhTextColumnsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextColumnsFillIcon],svg[ph-text-columns-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M112 184H56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32H56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32H56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32H56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m88 96h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhTextColumnsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextColumnsLightIcon],svg[ph-text-columns-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M118 64a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h72a6 6 0 0 1 6 6m-6 34H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m32-108h72a6 6 0 0 0 0-12h-72a6 6 0 0 0 0 12m72 28h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTextColumnsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextColumnsThinIcon],svg[ph-text-columns-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 64a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h72a4 4 0 0 1 4 4m-4 36H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 40H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 40H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m32-112h72a4 4 0 0 0 0-8h-72a4 4 0 0 0 0 8m72 32h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 40h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 40h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTextColumnsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHIcon],svg[ph-text-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 56v144a8 8 0 0 1-16 0v-64H64v64a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v64h128V56a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhTextHIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHBoldIcon],svg[ph-text-h-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 56v144a12 12 0 0 1-24 0v-60H68v60a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0v60h120V56a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhTextHBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHDuotoneIcon],svg[ph-text-h-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 56v144H56V56Z" opacity=".2"></svg:path><svg:path d="M208 56v144a8 8 0 0 1-16 0v-64H64v64a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v64h128V56a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhTextHDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHFillIcon],svg[ph-text-h-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 144a8 8 0 0 1-16 0v-40H88v40a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0v40h80V80a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhTextHFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHFiveIcon],svg[ph-text-h-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0m60 88a38.8 38.8 0 0 0-9.41 1.14l4.19-25.14H240a8 8 0 0 0 0-16h-40a8 8 0 0 0-7.89 6.68l-8 48a8 8 0 0 0 13.6 6.92A19.73 19.73 0 0 1 212 160a20 20 0 0 1 0 40a19.73 19.73 0 0 1-14.29-5.6a8 8 0 1 0-11.42 11.2A35.54 35.54 0 0 0 212 216a36 36 0 0 0 0-72"></svg:path>`,
})
export class PhTextHFiveIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHFiveBoldIcon],svg[ph-text-h-five-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 180a40 40 0 0 1-40 40a39.53 39.53 0 0 1-28.57-11.6a12 12 0 1 1 17.14-16.8A15.54 15.54 0 0 0 212 196a16 16 0 0 0 0-32a15.54 15.54 0 0 0-11.43 4.4a12 12 0 0 1-20.41-10.4l8-48A12 12 0 0 1 200 100h40a12 12 0 0 1 0 24h-29.83l-2.71 16.23A45 45 0 0 1 212 140a40 40 0 0 1 40 40M144 44a12 12 0 0 0-12 12v48H52V56a12 12 0 0 0-24 0v120a12 12 0 0 0 24 0v-48h80v48a12 12 0 0 0 24 0V56a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhTextHFiveBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHFiveDuotoneIcon],svg[ph-text-h-five-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 72v120a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56h184a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0m60 88a38.8 38.8 0 0 0-9.41 1.14l4.19-25.14H240a8 8 0 0 0 0-16h-40a8 8 0 0 0-7.89 6.68l-8 48a8 8 0 0 0 13.6 6.92A19.73 19.73 0 0 1 212 160a20 20 0 0 1 0 40a19.73 19.73 0 0 1-14.29-5.6a8 8 0 1 0-11.42 11.2A35.54 35.54 0 0 0 212 216a36 36 0 0 0 0-72"></svg:path></svg:g>`,
})
export class PhTextHFiveDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHFiveFillIcon],svg[ph-text-h-five-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 128a8 8 0 0 1-16 0v-32H72v32a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0v32h40V80a8 8 0 0 1 16 0Zm40-40a32 32 0 1 1-21.34 55.85a8 8 0 0 1 10.67-11.92a16 16 0 1 0 0-24a8 8 0 0 1-13.17-7.61l8-38A8 8 0 0 1 160 88h32a8 8 0 0 1 0 16h-25.51L163 120.37a34 34 0 0 1 5-.37"></svg:path>`,
})
export class PhTextHFiveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHFiveLightIcon],svg[ph-text-h-five-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 180a34 34 0 0 1-34 34a33.6 33.6 0 0 1-24.29-9.8a6 6 0 0 1 8.58-8.4A21.65 21.65 0 0 0 212 202a22 22 0 0 0 0-44a21.65 21.65 0 0 0-15.71 6.2a6 6 0 0 1-10.21-5.2l8-48a6 6 0 0 1 5.92-5h40a6 6 0 0 1 0 12h-34.92l-5 30a36 36 0 0 1 11.92-2a34 34 0 0 1 34 34M144 50a6 6 0 0 0-6 6v54H46V56a6 6 0 0 0-12 0v120a6 6 0 0 0 12 0v-54h92v54a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhTextHFiveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHFiveThinIcon],svg[ph-text-h-five-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 180a32 32 0 0 1-32 32a31.62 31.62 0 0 1-22.86-9.2a4 4 0 0 1 5.72-5.6A23.67 23.67 0 0 0 212 204a24 24 0 0 0 0-48a23.67 23.67 0 0 0-17.14 6.8a4 4 0 0 1-6.81-3.46l8-48A4 4 0 0 1 200 108h40a4 4 0 0 1 0 8h-36.61l-5.87 35.21A33.26 33.26 0 0 1 212 148a32 32 0 0 1 32 32M144 52a4 4 0 0 0-4 4v56H44V56a4 4 0 0 0-8 0v120a4 4 0 0 0 8 0v-56h96v56a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhTextHFiveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHFourIcon],svg[ph-text-h-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0m104 128a8 8 0 0 1-8 8h-8v16a8 8 0 0 1-16 0v-16h-48a8 8 0 0 1-6.31-12.91l56-72A8 8 0 0 1 240 112v64h8a8 8 0 0 1 8 8m-32-48.68L192.36 176H224Z"></svg:path>`,
})
export class PhTextHFourIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHFourBoldIcon],svg[ph-text-h-four-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 56v120a12 12 0 0 1-24 0v-48H52v48a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0v48h80V56a12 12 0 0 1 24 0m100 128a12 12 0 0 1-12 12v12a12 12 0 0 1-24 0v-12h-40a12 12 0 0 1-9.73-19l52-72a12 12 0 0 1 21.73 7v60a12 12 0 0 1 12 12m-36-34.89L203.47 172H220Z"></svg:path>`,
})
export class PhTextHFourBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHFourDuotoneIcon],svg[ph-text-h-four-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M248 72v120a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56h192a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0m104 128a8 8 0 0 1-8 8h-8v16a8 8 0 0 1-16 0v-16h-48a8 8 0 0 1-6.31-12.91l56-72A8 8 0 0 1 240 112v64h8a8 8 0 0 1 8 8m-32-48.68L192.36 176H224Z"></svg:path></svg:g>`,
})
export class PhTextHFourDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHFourFillIcon],svg[ph-text-h-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164.46 144L184 119.13V144ZM224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-96 32a8 8 0 0 0-16 0v32H72V80a8 8 0 0 0-16 0v80a8 8 0 0 0 16 0v-32h40v32a8 8 0 0 0 16 0Zm84 72a8 8 0 0 0-8-8h-4V96a8 8 0 0 0-14.29-4.94l-44 56A8 8 0 0 0 148 160h36v16a8 8 0 0 0 16 0v-16h4a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhTextHFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHFourLightIcon],svg[ph-text-h-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 56v120a6 6 0 0 1-12 0v-54H46v54a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0v54h92V56a6 6 0 0 1 12 0m104 128a6 6 0 0 1-6 6h-10v18a6 6 0 0 1-12 0v-18h-50a6 6 0 0 1-4.74-9.68l56-72A6 6 0 0 1 238 112v66h10a6 6 0 0 1 6 6m-28-54.51L188.27 178H226Z"></svg:path>`,
})
export class PhTextHFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHFourThinIcon],svg[ph-text-h-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 56v120a4 4 0 0 1-8 0v-56H44v56a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0v56h96V56a4 4 0 0 1 8 0m104 128a4 4 0 0 1-4 4h-12v20a4 4 0 0 1-8 0v-20h-52a4 4 0 0 1-3.16-6.46l56-72A4 4 0 0 1 236 112v68h12a4 4 0 0 1 4 4m-24-60.34L184.18 180H228Z"></svg:path>`,
})
export class PhTextHFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHLightIcon],svg[ph-text-h-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 56v144a6 6 0 0 1-12 0v-66H62v66a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0v66h132V56a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhTextHLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHOneIcon],svg[ph-text-h-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0m75.77 49a8 8 0 0 0-8.21.39l-24 16a8 8 0 1 0 8.88 13.32L216 127v81a8 8 0 0 0 16 0v-96a8 8 0 0 0-4.23-7"></svg:path>`,
})
export class PhTextHOneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHOneBoldIcon],svg[ph-text-h-one-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 112v96a12 12 0 0 1-24 0v-73.58l-5.34 3.58a12 12 0 0 1-13.32-20l24-16A12 12 0 0 1 236 112m-92-68a12 12 0 0 0-12 12v48H52V56a12 12 0 0 0-24 0v120a12 12 0 0 0 24 0v-48h80v48a12 12 0 0 0 24 0V56a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhTextHOneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHOneDuotoneIcon],svg[ph-text-h-one-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 72v136H56a16 16 0 0 1-16-16V56h168a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0m75.77 49a8 8 0 0 0-8.21.39l-24 16a8 8 0 1 0 8.88 13.32L216 127v81a8 8 0 0 0 16 0v-96a8 8 0 0 0-4.23-7"></svg:path></svg:g>`,
})
export class PhTextHOneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHOneFillIcon],svg[ph-text-h-one-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-64 128a8 8 0 0 1-16 0v-32H72v32a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0v32h56V80a8 8 0 0 1 16 0Zm56 16a8 8 0 0 1-16 0v-65l-11.56 7.71a8 8 0 1 1-8.88-13.32l24-16A8 8 0 0 1 200 96Z"></svg:path>`,
})
export class PhTextHOneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHOneLightIcon],svg[ph-text-h-one-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 112v96a6 6 0 0 1-12 0v-84.79L203.33 133a6 6 0 0 1-6.66-10l24-16a6 6 0 0 1 9.33 5m-86-62a6 6 0 0 0-6 6v54H46V56a6 6 0 0 0-12 0v120a6 6 0 0 0 12 0v-54h92v54a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhTextHOneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHOneThinIcon],svg[ph-text-h-one-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 112v96a4 4 0 0 1-8 0v-88.53l-17.78 11.86a4 4 0 1 1-4.44-6.66l24-16A4 4 0 0 1 228 112m-84-60a4 4 0 0 0-4 4v56H44V56a4 4 0 0 0-8 0v120a4 4 0 0 0 8 0v-56h96v56a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhTextHOneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHSixIcon],svg[ph-text-h-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0m96 124a36 36 0 1 1-67.34-17.68c.07-.14.14-.28.22-.42l32.25-54a8 8 0 0 1 13.74 8.2l-16.69 28c.6 0 1.21-.05 1.82-.05A36 36 0 0 1 248 180m-16 0a20 20 0 1 0-20 20a20 20 0 0 0 20-20"></svg:path>`,
})
export class PhTextHSixIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHSixBoldIcon],svg[ph-text-h-six-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m217.06 140.33l13.24-22.18a12 12 0 1 0-20.6-12.3l-32.25 54c-.09.15-.17.31-.25.47a40 40 0 1 0 39.86-20ZM212 196a16 16 0 1 1 16-16a16 16 0 0 1-16 16M156 56v120a12 12 0 0 1-24 0v-48H52v48a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0v48h80V56a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhTextHSixBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHSixDuotoneIcon],svg[ph-text-h-six-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 72v120a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56h184a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0m96 124a36 36 0 1 1-67.34-17.68c.07-.14.14-.28.22-.42l32.25-54a8 8 0 0 1 13.74 8.2l-16.69 28c.6 0 1.21-.05 1.82-.05A36 36 0 0 1 248 180m-16 0a20 20 0 1 0-20 20a20 20 0 0 0 20-20"></svg:path></svg:g>`,
})
export class PhTextHSixDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHSixFillIcon],svg[ph-text-h-six-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 152a16 16 0 1 1-16-16a16 16 0 0 1 16 16m32-104v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-96 32a8 8 0 0 0-16 0v32H72V80a8 8 0 0 0-16 0v80a8 8 0 0 0 16 0v-32h40v32a8 8 0 0 0 16 0Zm80 72a32 32 0 0 0-32-32l11.55-20a8 8 0 0 0-13.86-8l-25.4 44l-.14.27A32 32 0 1 0 208 152"></svg:path>`,
})
export class PhTextHSixFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHSixLightIcon],svg[ph-text-h-six-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 146a34.5 34.5 0 0 0-5.6.47l18.75-31.39a6 6 0 0 0-10.3-6.16l-32.25 54l-.22.41A34 34 0 1 0 212 146m0 56a22 22 0 1 1 22-22a22 22 0 0 1-22 22M150 56v120a6 6 0 0 1-12 0v-54H46v54a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0v54h92V56a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhTextHSixLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHSixThinIcon],svg[ph-text-h-six-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 148a32 32 0 0 0-9.75 1.52l21.18-35.47a4 4 0 0 0-6.86-4.1l-32.25 54a1 1 0 0 0-.08.17A32 32 0 1 0 212 148m0 56a24 24 0 1 1 24-24a24 24 0 0 1-24 24M148 56v120a4 4 0 0 1-8 0v-56H44v56a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0v56h96V56a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhTextHSixThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHThinIcon],svg[ph-text-h-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 56v144a4 4 0 0 1-8 0v-68H60v68a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0v68h136V56a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhTextHThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHThreeIcon],svg[ph-text-h-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0m73.52 90.63l21-30A8 8 0 0 0 240 104h-48a8 8 0 0 0 0 16h32.63l-19.18 27.41A8 8 0 0 0 212 160a20 20 0 1 1-14.29 34a8 8 0 1 0-11.42 11.19A36 36 0 0 0 248 180a36.07 36.07 0 0 0-22.48-33.37"></svg:path>`,
})
export class PhTextHThreeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHThreeBoldIcon],svg[ph-text-h-three-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 180a40 40 0 0 1-68.57 28a12 12 0 1 1 17.14-16.79A16 16 0 1 0 212 164a12 12 0 0 1-9.83-18.88L217 124h-25a12 12 0 0 1 0-24h48a12 12 0 0 1 9.83 18.88l-18.34 26.2A40 40 0 0 1 252 180M144 44a12 12 0 0 0-12 12v48H52V56a12 12 0 0 0-24 0v120a12 12 0 0 0 24 0v-48h80v48a12 12 0 0 0 24 0V56a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhTextHThreeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHThreeDuotoneIcon],svg[ph-text-h-three-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 72v120a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56h184a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0m73.52 90.63l21-30A8 8 0 0 0 240 104h-48a8 8 0 0 0 0 16h32.63l-19.18 27.41A8 8 0 0 0 212 160a20 20 0 1 1-14.29 34a8 8 0 1 0-11.42 11.19A36 36 0 0 0 248 180a36.07 36.07 0 0 0-22.48-33.37"></svg:path></svg:g>`,
})
export class PhTextHThreeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHThreeFillIcon],svg[ph-text-h-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 128a8 8 0 0 1-16 0v-32H72v32a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0v32h40V80a8 8 0 0 1 16 0Zm40 24a32 32 0 0 1-21.34-8.15a8 8 0 1 1 10.68-11.92A16 16 0 1 0 168 136a8 8 0 0 1-6.4-12.8L176 104h-24a8 8 0 0 1 0-16h40a8 8 0 0 1 6.4 12.8l-16.71 22.28A32 32 0 0 1 168 184"></svg:path>`,
})
export class PhTextHThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHThreeLightIcon],svg[ph-text-h-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 180a34 34 0 0 1-58.29 23.79a6 6 0 0 1 8.58-8.39A22 22 0 1 0 212 158a6 6 0 0 1-4.92-9.44l21.4-30.56H192a6 6 0 0 1 0-12h48a6 6 0 0 1 4.91 9.44l-22.52 32.18A34.06 34.06 0 0 1 246 180M144 50a6 6 0 0 0-6 6v54H46V56a6 6 0 0 0-12 0v120a6 6 0 0 0 12 0v-54h92v54a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhTextHThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHThreeThinIcon],svg[ph-text-h-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 180a32 32 0 0 1-54.86 22.4a4 4 0 0 1 5.72-5.6A24 24 0 1 0 212 156a4 4 0 0 1-3.28-6.29l23.6-33.71H192a4 4 0 0 1 0-8h48a4 4 0 0 1 3.28 6.29l-24.16 34.51A32.06 32.06 0 0 1 244 180M144 52a4 4 0 0 0-4 4v56H44V56a4 4 0 0 0-8 0v120a4 4 0 0 0 8 0v-56h96v56a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhTextHThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHTwoIcon],svg[ph-text-h-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0m88 144h-32l33.55-44.74a32 32 0 1 0-55.73-29.93a8 8 0 1 0 15.08 5.34a16.3 16.3 0 0 1 2.32-4.3a16 16 0 1 1 25.54 19.27L185.6 203.2A8 8 0 0 0 192 216h48a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhTextHTwoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHTwoBoldIcon],svg[ph-text-h-two-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 56v120a12 12 0 0 1-24 0v-48H52v48a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0v48h80V56a12 12 0 0 1 24 0m84 140h-24l28.74-38.33A36 36 0 1 0 182.05 124a12 12 0 0 0 22.63 8a11.7 11.7 0 0 1 1.73-3.22a12 12 0 1 1 19.15 14.46L182.4 200.8A12 12 0 0 0 192 220h48a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhTextHTwoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHTwoDuotoneIcon],svg[ph-text-h-two-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 72v136H56a16 16 0 0 1-16-16V56h184a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M248 208a8 8 0 0 1-8 8h-48a8 8 0 0 1-6.4-12.8l43.16-57.56a16 16 0 1 0-25.54-19.27a16.3 16.3 0 0 0-2.32 4.3a8 8 0 1 1-15.08-5.34a32 32 0 1 1 55.73 29.93L208 200h32a8 8 0 0 1 8 8M144 48a8 8 0 0 0-8 8v52H48V56a8 8 0 0 0-16 0v120a8 8 0 0 0 16 0v-52h88v52a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhTextHTwoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHTwoFillIcon],svg[ph-text-h-two-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 128a8 8 0 0 1-16 0v-32H72v32a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0v32h40V80a8 8 0 0 1 16 0Zm64 24h-40a8 8 0 0 1-6.4-12.8l36-48a12 12 0 1 0-19.15-14.46a13.1 13.1 0 0 0-2.58 4.81a8 8 0 1 1-15.68-3.18a28.17 28.17 0 1 1 50.2 22.44L168 168h24a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhTextHTwoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHTwoLightIcon],svg[ph-text-h-two-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 56v120a6 6 0 0 1-12 0v-54H46v54a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0v54h92V56a6 6 0 0 1 12 0m90 146h-36l36-47.95A30 30 0 1 0 187.71 126a6 6 0 1 0 11.29 4a18 18 0 0 1 14.47-11.82a18 18 0 0 1 16.87 28.66L187.2 204.4a6 6 0 0 0 4.8 9.6h48a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTextHTwoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHTwoThinIcon],svg[ph-text-h-two-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 56v120a4 4 0 0 1-8 0v-56H44v56a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0v56h96V56a4 4 0 0 1 8 0m92 148h-40l38.36-51.15a28 28 0 1 0-48.77-26.18a4 4 0 1 0 7.54 2.66A20.4 20.4 0 0 1 200 124a20 20 0 0 1 32 24l-43.2 57.6a4 4 0 0 0 3.2 6.4h48a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTextHTwoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextIndentIcon],svg[ph-text-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8M112 72h104a8 8 0 0 0 0-16H112a8 8 0 0 0 0 16m104 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M34.34 141.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32l-40-40a8 8 0 0 0-11.32 11.32L68.69 96l-34.35 34.34a8 8 0 0 0 0 11.32"></svg:path>`,
})
export class PhTextIndentIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextIndentBoldIcon],svg[ph-text-indent-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a12 12 0 0 1-12 12h-96a12 12 0 0 1 0-24h96a12 12 0 0 1 12 12M120 76h96a12 12 0 0 0 0-24h-96a12 12 0 0 0 0 24m96 104H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24M31.51 144.49a12 12 0 0 0 17 0l40-40a12 12 0 0 0 0-17l-40-40a12 12 0 0 0-17 17L63 96l-31.49 31.51a12 12 0 0 0 0 16.98"></svg:path>`,
})
export class PhTextIndentBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextIndentDuotoneIcon],svg[ph-text-indent-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128H40V64Z" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8M112 72h104a8 8 0 0 0 0-16H112a8 8 0 0 0 0 16m104 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M34.34 141.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32l-40-40a8 8 0 0 0-11.32 11.32L68.69 96l-34.35 34.34a8 8 0 0 0 0 11.32"></svg:path></svg:g>`,
})
export class PhTextIndentDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextIndentFillIcon],svg[ph-text-indent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8M112 72h104a8 8 0 0 0 0-16H112a8 8 0 0 0 0 16m104 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M36.94 143.39a8 8 0 0 0 8.72-1.73l40-40a8 8 0 0 0 0-11.32l-40-40A8 8 0 0 0 32 56v80a8 8 0 0 0 4.94 7.39"></svg:path>`,
})
export class PhTextIndentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextIndentLightIcon],svg[ph-text-indent-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H112a6 6 0 0 1 0-12h104a6 6 0 0 1 6 6M112 70h104a6 6 0 0 0 0-12H112a6 6 0 0 0 0 12m104 116H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12M35.76 140.24a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48l-40-40a6 6 0 0 0-8.48 8.48L71.51 96l-35.75 35.76a6 6 0 0 0 0 8.48"></svg:path>`,
})
export class PhTextIndentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextIndentThinIcon],svg[ph-text-indent-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4H112a4 4 0 0 1 0-8h104a4 4 0 0 1 4 4M112 68h104a4 4 0 0 0 0-8H112a4 4 0 0 0 0 8m104 120H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8M37.17 138.83a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66l-40-40a4 4 0 0 0-5.66 5.66L74.34 96l-37.17 37.17a4 4 0 0 0 0 5.66"></svg:path>`,
})
export class PhTextIndentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextItalicIcon],svg[ph-text-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 56a8 8 0 0 1-8 8h-34.23L115.1 192H144a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16h34.23L140.9 64H112a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTextItalicIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextItalicBoldIcon],svg[ph-text-italic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 56a12 12 0 0 1-12 12h-31.35l-40 120H144a12 12 0 0 1 0 24H64a12 12 0 0 1 0-24h31.35l40-120H112a12 12 0 0 1 0-24h80a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTextItalicBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextItalicDuotoneIcon],svg[ph-text-italic-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m192 56l-48 144H64l48-144Z" opacity=".2"></svg:path><svg:path d="M200 56a8 8 0 0 1-8 8h-34.23L115.1 192H144a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16h34.23L140.9 64H112a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhTextItalicDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextItalicFillIcon],svg[ph-text-italic-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 48h-22.36l-34.29 96H136a8 8 0 0 1 0 16H80a8 8 0 0 1 0-16h22.36l34.29-96H120a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhTextItalicFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextItalicLightIcon],svg[ph-text-italic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 56a6 6 0 0 1-6 6h-35.68l-44 132H144a6 6 0 0 1 0 12H64a6 6 0 0 1 0-12h35.68l44-132H112a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhTextItalicLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextItalicThinIcon],svg[ph-text-italic-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 56a4 4 0 0 1-4 4h-37.12l-45.33 136H144a4 4 0 0 1 0 8H64a4 4 0 0 1 0-8h37.12l45.33-136H112a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhTextItalicThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextOutdentIcon],svg[ph-text-outdent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8M112 72h104a8 8 0 0 0 0-16H112a8 8 0 0 0 0 16m104 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M72 144a8 8 0 0 0 5.66-13.66L43.31 96l34.35-34.34a8 8 0 0 0-11.32-11.32l-40 40a8 8 0 0 0 0 11.32l40 40A8 8 0 0 0 72 144"></svg:path>`,
})
export class PhTextOutdentIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextOutdentBoldIcon],svg[ph-text-outdent-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a12 12 0 0 1-12 12h-96a12 12 0 0 1 0-24h96a12 12 0 0 1 12 12M120 76h96a12 12 0 0 0 0-24h-96a12 12 0 0 0 0 24m96 104H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24M72 148a12 12 0 0 0 8.49-20.49L49 96l31.49-31.52a12 12 0 0 0-17-17l-40 40a12 12 0 0 0 0 17l40 40A12 12 0 0 0 72 148"></svg:path>`,
})
export class PhTextOutdentBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextOutdentDuotoneIcon],svg[ph-text-outdent-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128H40V88l24-24Z" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8M112 72h104a8 8 0 0 0 0-16H112a8 8 0 0 0 0 16m104 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M72 144a8 8 0 0 0 5.66-13.66L43.31 96l34.35-34.34a8 8 0 0 0-11.32-11.32l-40 40a8 8 0 0 0 0 11.32l40 40A8 8 0 0 0 72 144"></svg:path></svg:g>`,
})
export class PhTextOutdentDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextOutdentFillIcon],svg[ph-text-outdent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8M112 72h104a8 8 0 0 0 0-16H112a8 8 0 0 0 0 16m104 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M72 144a8 8 0 0 0 8-8V56a8 8 0 0 0-13.66-5.66l-40 40a8 8 0 0 0 0 11.32l40 40A8 8 0 0 0 72 144"></svg:path>`,
})
export class PhTextOutdentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextOutdentLightIcon],svg[ph-text-outdent-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H112a6 6 0 0 1 0-12h104a6 6 0 0 1 6 6M112 70h104a6 6 0 0 0 0-12H112a6 6 0 0 0 0 12m104 116H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12M72 142a6 6 0 0 0 4.24-10.24L40.49 96l35.75-35.76a6 6 0 0 0-8.48-8.48l-40 40a6 6 0 0 0 0 8.48l40 40A6 6 0 0 0 72 142"></svg:path>`,
})
export class PhTextOutdentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextOutdentThinIcon],svg[ph-text-outdent-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4H112a4 4 0 0 1 0-8h104a4 4 0 0 1 4 4M112 68h104a4 4 0 0 0 0-8H112a4 4 0 0 0 0 8m104 120H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8M72 140a4 4 0 0 0 2.83-6.83L37.66 96l37.17-37.17a4 4 0 0 0-5.66-5.66l-40 40a4 4 0 0 0 0 5.66l40 40A4 4 0 0 0 72 140"></svg:path>`,
})
export class PhTextOutdentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextStrikethroughIcon],svg[ph-text-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a8 8 0 0 1-8 8h-40.07c9.19 7.11 16.07 17.2 16.07 32c0 13.34-7 25.7-19.75 34.79C160.33 211.31 144.61 216 128 216s-32.33-4.69-44.25-13.21C71 193.7 64 181.34 64 168a8 8 0 0 1 16 0c0 17.35 22 32 48 32s48-14.65 48-32c0-14.85-10.54-23.58-38.77-32H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M76.33 104a8 8 0 0 0 7.61-10.49a17.3 17.3 0 0 1-.83-5.51c0-18.24 19.3-32 44.89-32c18.84 0 34.16 7.42 41 19.85a8 8 0 0 0 14-7.7C173.33 50.52 152.77 40 128 40c-34.71 0-60.89 20.63-60.89 48a33.7 33.7 0 0 0 1.62 10.49a8 8 0 0 0 7.6 5.51"></svg:path>`,
})
export class PhTextStrikethroughIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextStrikethroughBoldIcon],svg[ph-text-strikethrough-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a12 12 0 0 1-12 12h-30.14A41.48 41.48 0 0 1 196 168c0 14.45-7.81 28.32-21.43 38.05C162 215.05 145.44 220 128 220s-34-4.95-46.57-13.95C67.81 196.32 60 182.45 60 168a12 12 0 0 1 24 0c0 15.18 20.15 28 44 28s44-12.82 44-28c0-12.76-9.3-20.18-35.35-28H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M75.11 100a12 12 0 0 0 12-12c0-16 17.58-28 40.89-28c17.36 0 31.37 6.65 37.48 17.78a12 12 0 0 0 21-11.56C176.13 47.3 154.25 36 128 36c-37 0-64.89 22.35-64.89 52a12 12 0 0 0 12 12"></svg:path>`,
})
export class PhTextStrikethroughBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextStrikethroughDuotoneIcon],svg[ph-text-strikethrough-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m176 72l-55.31 51.05c-24-6.7-45.58-14.26-45.58-35c0-22.09 22-40 52.89-40c23.2-.05 40.37 9.59 48 23.95m-55.31 51.05L72 168c0 22.09 25.07 40 56 40s56-17.91 56-40c0-29.57-33.48-36.6-63.31-44.95" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-8 8h-40.07c9.19 7.11 16.07 17.2 16.07 32c0 13.34-7 25.7-19.75 34.79C160.33 211.31 144.61 216 128 216s-32.33-4.69-44.25-13.21C71 193.7 64 181.34 64 168a8 8 0 0 1 16 0c0 17.35 22 32 48 32s48-14.65 48-32c0-14.85-10.54-23.58-38.77-32H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M76.33 104a8 8 0 0 0 7.61-10.49a17.3 17.3 0 0 1-.83-5.51c0-18.24 19.3-32 44.89-32c18.84 0 34.16 7.42 41 19.85a8 8 0 0 0 14-7.7C173.33 50.52 152.77 40 128 40c-34.71 0-60.89 20.63-60.89 48a33.7 33.7 0 0 0 1.62 10.49a8 8 0 0 0 7.6 5.51"></svg:path></svg:g>`,
})
export class PhTextStrikethroughDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextStrikethroughFillIcon],svg[ph-text-strikethrough-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M82.71 94.58C86 76.57 104.58 64 128 64c18.2 0 33.59 7.41 41.18 19.83a8 8 0 1 1-13.66 8.34C150.94 84.66 140.39 80 128 80c-15.3 0-27.73 7.33-29.55 17.42a8 8 0 0 1-7.86 6.58a8 8 0 0 1-1.43-.13a8 8 0 0 1-6.45-9.29M192 136h-23.71a28.45 28.45 0 0 1 7.71 20c0 20.19-21.08 36-48 36c-23.89 0-43.83-12.78-47.43-30.4a8 8 0 1 1 15.67-3.2c2 9.87 16 17.6 31.76 17.6c17.35 0 32-9.16 32-20c0-9.14-6.76-14.43-25.72-20H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhTextStrikethroughFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextStrikethroughLightIcon],svg[ph-text-strikethrough-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6h-46.55c11.28 6.92 20.55 17.38 20.55 34c0 25.36-27.81 46-62 46s-62-20.64-62-46a6 6 0 0 1 12 0c0 18.75 22.43 34 50 34s50-15.25 50-34c0-18.23-15.46-26.59-40.47-34H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M76.33 102a6.2 6.2 0 0 0 1.88-.3A6 6 0 0 0 82 94.13a19.7 19.7 0 0 1-.89-6.13c0-19.38 20.16-34 46.89-34c19.58 0 35.56 7.81 42.74 20.89a6 6 0 0 0 10.52-5.78C171.94 52.13 152 42 128 42c-33.57 0-58.89 19.77-58.89 46a31.6 31.6 0 0 0 1.52 9.87a6 6 0 0 0 5.7 4.13"></svg:path>`,
})
export class PhTextStrikethroughLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextStrikethroughThinIcon],svg[ph-text-strikethrough-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4h-54.84c15.45 7.24 26.84 17.8 26.84 36c0 24.26-26.92 44-60 44s-60-19.74-60-44a4 4 0 0 1 8 0c0 19.85 23.33 36 52 36s52-16.15 52-36c0-19.54-16.13-28.3-42.18-36H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4M76.33 100a3.9 3.9 0 0 0 1.25-.2a4 4 0 0 0 2.55-5a21.9 21.9 0 0 1-1-6.75c0-20.52 21-36 48.89-36c20.32 0 37 8.2 44.49 21.92a4 4 0 0 0 7-3.85C170.54 53.75 151.29 44 128 44c-32.43 0-56.89 18.92-56.89 44a29.8 29.8 0 0 0 1.42 9.25a4 4 0 0 0 3.8 2.75"></svg:path>`,
})
export class PhTextStrikethroughThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextSubscriptIcon],svg[ph-text-subscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 208a8 8 0 0 1-8 8h-48a8 8 0 0 1-6.4-12.8l43.17-57.56a16 16 0 1 0-27.86-15a8 8 0 0 1-15.09-5.34a32.2 32.2 0 0 1 4.63-8.59a32 32 0 0 1 51.11 38.52L208 200h32a8 8 0 0 1 8 8M149.24 50a8 8 0 0 0-11.29.81L92 103.78l-45.95-53A8 8 0 0 0 34 61.24L81.41 116L34 170.76a8 8 0 0 0 12.1 10.48l46-53l45.95 53a8 8 0 1 0 12.1-10.48L102.59 116l47.46-54.76a8 8 0 0 0-.81-11.24"></svg:path>`,
})
export class PhTextSubscriptIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextSubscriptBoldIcon],svg[ph-text-subscript-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 208a12 12 0 0 1-12 12h-48a12 12 0 0 1-9.6-19.2l43.17-57.56a12 12 0 0 0-2.35-16.82a12 12 0 0 0-18.54 5.58a12 12 0 0 1-22.63-8a36.3 36.3 0 0 1 5.2-9.67a36 36 0 0 1 57.5 43.34L216 196h24a12 12 0 0 1 12 12M151.86 46.93a12 12 0 0 0-16.93 1.21L92 97.68L49.07 48.14a12 12 0 0 0-18.14 15.72L76.12 116l-45.19 52.14a12 12 0 0 0 18.14 15.72L92 134.32l42.93 49.54a12 12 0 1 0 18.14-15.72L107.88 116l45.19-52.14a12 12 0 0 0-1.21-16.93"></svg:path>`,
})
export class PhTextSubscriptBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextSubscriptDuotoneIcon],svg[ph-text-subscript-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 72v136H56a16 16 0 0 1-16-16V56h184a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M248 208a8 8 0 0 1-8 8h-48a8 8 0 0 1-6.4-12.8l43.17-57.56a16 16 0 1 0-27.86-15a8 8 0 0 1-15.09-5.34a32.2 32.2 0 0 1 4.63-8.59a32 32 0 0 1 51.11 38.52L208 200h32a8 8 0 0 1 8 8M149.24 50a8 8 0 0 0-11.29.81L92 103.78l-45.95-53A8 8 0 0 0 34 61.24L81.41 116L34 170.76a8 8 0 0 0 12.1 10.48l46-53l45.95 53a8 8 0 1 0 12.1-10.48L102.59 116l47.46-54.76a8 8 0 0 0-.81-11.24"></svg:path></svg:g>`,
})
export class PhTextSubscriptDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextSubscriptFillIcon],svg[ph-text-subscript-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-81.45 115.41a8 8 0 1 1-13.1 9.18L92 126l-21.45 30.59a8 8 0 1 1-13.1-9.18L82.23 112L57.45 76.59a8 8 0 0 1 13.1-9.18L92 98.05l21.45-30.64a8 8 0 0 1 13.1 9.18L101.77 112ZM192 192h-40a8 8 0 0 1-6.4-12.8l36-48a12 12 0 1 0-19.15-14.46a13.1 13.1 0 0 0-2.58 4.81a8 8 0 1 1-15.68-3.18a28.17 28.17 0 1 1 50.2 22.44L168 176h24a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhTextSubscriptFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextSubscriptLightIcon],svg[ph-text-subscript-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 208a6 6 0 0 1-6 6h-48a6 6 0 0 1-4.8-9.6l43.17-57.56A18 18 0 1 0 199 130a6 6 0 1 1-11.31-4A30 30 0 1 1 240 154.06L204 202h36a6 6 0 0 1 6 6M147.93 51.47a6 6 0 0 0-8.46.6L92 106.84L44.53 52.07a6 6 0 1 0-9.06 7.86L84.06 116l-48.59 56.07a6 6 0 1 0 9.06 7.86L92 125.16l47.47 54.77a6 6 0 0 0 9.06-7.86L99.94 116l48.59-56.07a6 6 0 0 0-.6-8.46"></svg:path>`,
})
export class PhTextSubscriptLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextSubscriptThinIcon],svg[ph-text-subscript-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 208a4 4 0 0 1-4 4h-48a4 4 0 0 1-3.2-6.4L232 148a20 20 0 0 0-4-28a20 20 0 0 0-28 4a20.2 20.2 0 0 0-2.89 5.37a4 4 0 0 1-7.55-2.66a28.3 28.3 0 0 1 4-7.52a28 28 0 0 1 44.72 33.7L200 204h40a4 4 0 0 1 4 4M146.62 53a4 4 0 0 0-5.64.4L92 109.89L43 53.38a4 4 0 1 0-6 5.24L86.71 116L37 173.38a4 4 0 1 0 6 5.24l49-56.51l49 56.51a4 4 0 0 0 6-5.24L97.29 116L147 58.62a4 4 0 0 0-.38-5.62"></svg:path>`,
})
export class PhTextSubscriptThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextSuperscriptIcon],svg[ph-text-superscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 144a8 8 0 0 1-8 8h-48a8 8 0 0 1-6.4-12.8l43.17-57.55a16 16 0 1 0-27.86-15a8 8 0 0 1-15.09-5.33a32 32 0 1 1 55.74 29.92L208 136h32a8 8 0 0 1 8 8m-98.76-70a8 8 0 0 0-11.29.8L92 127.79l-45.95-53A8 8 0 0 0 34 85.24L81.41 140L34 194.76a8 8 0 0 0 12.1 10.48l46-53l45.95 53a8 8 0 1 0 12.1-10.48L102.59 140l47.46-54.76a8 8 0 0 0-.81-11.24"></svg:path>`,
})
export class PhTextSuperscriptIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextSuperscriptBoldIcon],svg[ph-text-superscript-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 144a12 12 0 0 1-12 12h-48a12 12 0 0 1-9.6-19.2l43.17-57.55A12 12 0 1 0 204.68 68a12 12 0 0 1-22.63-8a36.2 36.2 0 0 1 5.2-9.66a36 36 0 0 1 57.5 43.33L216 132h24a12 12 0 0 1 12 12M151.86 70.94a12 12 0 0 0-16.93 1.2L92 121.68L49.07 72.14a12 12 0 0 0-18.14 15.72L76.12 140l-45.19 52.14a12 12 0 0 0 18.14 15.72L92 158.32l42.93 49.54a12 12 0 1 0 18.14-15.72L107.88 140l45.19-52.14a12 12 0 0 0-1.21-16.92"></svg:path>`,
})
export class PhTextSuperscriptBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextSuperscriptDuotoneIcon],svg[ph-text-superscript-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 64v120a16 16 0 0 1-16 16H40V64a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M248 144a8 8 0 0 1-8 8h-48a8 8 0 0 1-6.4-12.8l43.17-57.55a16 16 0 1 0-27.86-15a8 8 0 0 1-15.09-5.33a32 32 0 1 1 55.74 29.92L208 136h32a8 8 0 0 1 8 8m-98.76-70a8 8 0 0 0-11.29.8L92 127.79l-45.95-53A8 8 0 0 0 34 85.24L81.41 140L34 194.76a8 8 0 0 0 12.1 10.48l46-53l45.95 53a8 8 0 1 0 12.1-10.48L102.59 140l47.46-54.76a8 8 0 0 0-.81-11.24"></svg:path></svg:g>`,
})
export class PhTextSuperscriptDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextSuperscriptFillIcon],svg[ph-text-superscript-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-81.45 147.41a8 8 0 1 1-13.1 9.18L92 158l-21.45 30.59a8 8 0 1 1-13.1-9.18L82.23 144l-24.78-35.41a8 8 0 1 1 13.1-9.18L92 130.05l21.45-30.64a8 8 0 0 1 13.1 9.18L101.77 144ZM192 160h-40a8 8 0 0 1-6.4-12.8l36-48a12 12 0 1 0-19.15-14.46a13.1 13.1 0 0 0-2.58 4.81a8 8 0 1 1-15.68-3.18a28.17 28.17 0 1 1 50.2 22.44L168 144h24a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhTextSuperscriptFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextSuperscriptLightIcon],svg[ph-text-superscript-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 144a6 6 0 0 1-6 6h-48a6 6 0 0 1-4.8-9.6l43.17-57.55A18 18 0 1 0 199 66a6 6 0 0 1-11.31-4a30.1 30.1 0 0 1 4.31-8a30 30 0 0 1 48 36.06L204 138h36a6 6 0 0 1 6 6m-98.07-68.53a6 6 0 0 0-8.46.6L92 130.84L44.53 76.07a6 6 0 1 0-9.06 7.86L84.06 140l-48.59 56.07a6 6 0 1 0 9.06 7.86L92 149.16l47.47 54.77a6 6 0 0 0 9.06-7.86L99.94 140l48.59-56.07a6 6 0 0 0-.6-8.46"></svg:path>`,
})
export class PhTextSuperscriptLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextSuperscriptThinIcon],svg[ph-text-superscript-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 144a4 4 0 0 1-4 4h-48a4 4 0 0 1-3.2-6.4L232 84.05a20 20 0 0 0-18.78-31.85a20 20 0 0 0-16.08 13.14a4 4 0 1 1-7.55-2.67a28.3 28.3 0 0 1 4-7.52a28 28 0 1 1 44.72 33.7L200 140h40a4 4 0 0 1 4 4m-97.38-67a4 4 0 0 0-5.64.4L92 133.89L43 77.38a4 4 0 0 0-6 5.24L86.71 140L37 197.38a4 4 0 1 0 6 5.24l49-56.51l49 56.51a4 4 0 0 0 6-5.24L97.29 140L147 82.62a4 4 0 0 0-.38-5.62"></svg:path>`,
})
export class PhTextSuperscriptThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextTIcon],svg[ph-text-t-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 56v32a8 8 0 0 1-16 0V64h-56v128h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24V64H64v24a8 8 0 0 1-16 0V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTextTIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextTBoldIcon],svg[ph-text-t-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 56v32a12 12 0 0 1-24 0V68h-48v120h20a12 12 0 0 1 0 24H96a12 12 0 0 1 0-24h20V68H68v20a12 12 0 0 1-24 0V56a12 12 0 0 1 12-12h144a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTextTBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextTDuotoneIcon],svg[ph-text-t-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 56v128a16 16 0 0 1-16 16H72a16 16 0 0 1-16-16V56Z" opacity=".2"></svg:path><svg:path d="M208 56v32a8 8 0 0 1-16 0V64h-56v128h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24V64H64v24a8 8 0 0 1-16 0V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhTextTDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextTFillIcon],svg[ph-text-t-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 64a8 8 0 0 1-16 0v-8h-32v88h12a8 8 0 0 1 0 16h-40a8 8 0 0 1 0-16h12V88H88v8a8 8 0 0 1-16 0V80a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhTextTFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextTLightIcon],svg[ph-text-t-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 56v32a6 6 0 0 1-12 0V62h-60v132h26a6 6 0 0 1 0 12H96a6 6 0 0 1 0-12h26V62H62v26a6 6 0 0 1-12 0V56a6 6 0 0 1 6-6h144a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhTextTLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextTSlashIcon],svg[ph-text-t-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.38 221.92a8 8 0 0 1-11.3-.54L136 148.69V192h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24v-60.91l-56-61.6V88a8 8 0 0 1-16 0V56a8 8 0 0 1 .72-3.31l-6.64-7.31a8 8 0 1 1 11.84-10.76l160 176a8 8 0 0 1-.54 11.3M105.79 64H120v16.43a8 8 0 0 0 16 0V64h56v24a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8h-94.21a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhTextTSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextTSlashBoldIcon],svg[ph-text-t-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.07 224.88a12 12 0 0 1-16.95-.81L140 159v29h20a12 12 0 0 1 0 24H96a12 12 0 0 1 0-24h20v-55.36l-48-52.8V88a12 12 0 0 1-24 0V56a12 12 0 0 1 .23-2.31l-5.11-5.62a12 12 0 1 1 17.76-16.14l160 176a12 12 0 0 1-.81 16.95M116 68v.57a12 12 0 1 0 24 0V68h48v20a12 12 0 0 0 24 0V56a12 12 0 0 0-12-12h-83.4a12 12 0 0 0-.6 24"></svg:path>`,
})
export class PhTextTSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextTSlashDuotoneIcon],svg[ph-text-t-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 56v144H72a16 16 0 0 1-16-16V56Z" opacity=".2"></svg:path><svg:path d="M213.38 221.92a8 8 0 0 1-11.3-.54L136 148.69V192h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24v-60.91l-56-61.6V88a8 8 0 0 1-16 0V56a8 8 0 0 1 .72-3.31l-6.64-7.31a8 8 0 1 1 11.84-10.76l160 176a8 8 0 0 1-.54 11.3M105.79 64H120v16.43a8 8 0 0 0 16 0V64h56v24a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8h-94.21a8 8 0 0 0 0 16"></svg:path></svg:g>`,
})
export class PhTextTSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextTSlashFillIcon],svg[ph-text-t-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 40h48a8 8 0 0 1 8 8v16a8 8 0 0 1-16 0v-8h-40a8 8 0 0 1 0-16m61.27 126a8 8 0 0 1-11.29-.75l-42-48V176h12a8 8 0 0 1 0 16H108a8 8 0 0 1 0-16h12v-45L88 94.43V96a8 8 0 0 1-16 0V80a8.1 8.1 0 0 1 .63-3.13L66 69.27a8 8 0 0 1 12-10.54l112 128a8 8 0 0 1-.73 11.27"></svg:path>`,
})
export class PhTextTSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextTSlashLightIcon],svg[ph-text-t-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 220.44a6 6 0 0 1-8.48-.4L134 143.52V194h26a6 6 0 0 1 0 12H96a6 6 0 0 1 0-12h26v-63.68l-60-66V88a6 6 0 0 1-12 0V56a6 6 0 0 1 1.19-3.57L43.56 44a6 6 0 0 1 8.88-8l160 176a6 6 0 0 1-.44 8.44M105.79 62H122v18.43a6 6 0 0 0 12 0V62h60v26a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6h-94.21a6 6 0 0 0 0 12"></svg:path>`,
})
export class PhTextTSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextTSlashThinIcon],svg[ph-text-t-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.69 219a4 4 0 0 1-5.65-.27l-73-80.34V196h28a4 4 0 0 1 0 8H96a4 4 0 0 1 0-8h28v-66.45L60.78 60H60v28a4 4 0 0 1-8 0V56a4 4 0 0 1 2-3.45l-9-9.86a4 4 0 0 1 6-5.38l160 176a4 4 0 0 1-.31 5.69M105.79 60H124v20.43a4 4 0 0 0 8 0V60h64v28a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4h-94.21a4 4 0 0 0 0 8"></svg:path>`,
})
export class PhTextTSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextTThinIcon],svg[ph-text-t-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 56v32a4 4 0 0 1-8 0V60h-64v136h28a4 4 0 0 1 0 8H96a4 4 0 0 1 0-8h28V60H60v28a4 4 0 0 1-8 0V56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhTextTThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextUnderlineIcon],svg[ph-text-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 224a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h128a8 8 0 0 1 8 8m-72-24a64.07 64.07 0 0 0 64-64V56a8 8 0 0 0-16 0v80a48 48 0 0 1-96 0V56a8 8 0 0 0-16 0v80a64.07 64.07 0 0 0 64 64"></svg:path>`,
})
export class PhTextUnderlineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextUnderlineBoldIcon],svg[ph-text-underline-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 224a12 12 0 0 1-12 12H64a12 12 0 0 1 0-24h128a12 12 0 0 1 12 12m-76-28a68.07 68.07 0 0 0 68-68V56a12 12 0 0 0-24 0v72a44 44 0 0 1-88 0V56a12 12 0 0 0-24 0v72a68.07 68.07 0 0 0 68 68"></svg:path>`,
})
export class PhTextUnderlineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextUnderlineDuotoneIcon],svg[ph-text-underline-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 56v80a56 56 0 0 1-112 0V56Z" opacity=".2"></svg:path><svg:path d="M200 224a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h128a8 8 0 0 1 8 8m-72-24a64.07 64.07 0 0 0 64-64V56a8 8 0 0 0-16 0v80a48 48 0 0 1-96 0V56a8 8 0 0 0-16 0v80a64.07 64.07 0 0 0 64 64"></svg:path></svg:g>`,
})
export class PhTextUnderlineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextUnderlineFillIcon],svg[ph-text-underline-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 72a8 8 0 0 1 16 0v48a32 32 0 0 0 64 0V72a8 8 0 0 1 16 0v48a48 48 0 0 1-96 0Zm96 128H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhTextUnderlineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextUnderlineLightIcon],svg[ph-text-underline-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 224a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h128a6 6 0 0 1 6 6m-70-26a62.07 62.07 0 0 0 62-62V56a6 6 0 0 0-12 0v80a50 50 0 0 1-100 0V56a6 6 0 0 0-12 0v80a62.07 62.07 0 0 0 62 62"></svg:path>`,
})
export class PhTextUnderlineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextUnderlineThinIcon],svg[ph-text-underline-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 224a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h128a4 4 0 0 1 4 4m-68-28a60.07 60.07 0 0 0 60-60V56a4 4 0 0 0-8 0v80a52 52 0 0 1-104 0V56a4 4 0 0 0-8 0v80a60.07 60.07 0 0 0 60 60"></svg:path>`,
})
export class PhTextUnderlineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextboxIcon],svg[ph-textbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 40a8 8 0 0 0-8 8v16H24A16 16 0 0 0 8 80v96a16 16 0 0 0 16 16h80v16a8 8 0 0 0 16 0V48a8 8 0 0 0-8-8M24 176V80h80v96Zm224-96v96a16 16 0 0 1-16 16h-88a8 8 0 0 1 0-16h88V80h-88a8 8 0 0 1 0-16h88a16 16 0 0 1 16 16M88 112a8 8 0 0 1-8 8h-8v24a8 8 0 0 1-16 0v-24h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTextboxIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextboxBoldIcon],svg[ph-textbox-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 36a12 12 0 0 0-12 12v12H24A20 20 0 0 0 4 80v96a20 20 0 0 0 20 20h76v12a12 12 0 0 0 24 0V48a12 12 0 0 0-12-12M28 172V84h72v88Zm224-92v96a20 20 0 0 1-20 20h-80a12 12 0 0 1 0-24h76V84h-76a12 12 0 0 1 0-24h80a20 20 0 0 1 20 20M88 112a12 12 0 0 1-12 12v20a12 12 0 0 1-24 0v-20a12 12 0 0 1 0-24h24a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTextboxBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextboxDuotoneIcon],svg[ph-textbox-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 80v96a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h208a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M112 40a8 8 0 0 0-8 8v16H24A16 16 0 0 0 8 80v96a16 16 0 0 0 16 16h80v16a8 8 0 0 0 16 0V48a8 8 0 0 0-8-8M24 176V80h80v96Zm224-96v96a16 16 0 0 1-16 16h-88a8 8 0 0 1 0-16h88V80h-88a8 8 0 0 1 0-16h88a16 16 0 0 1 16 16M88 112a8 8 0 0 1-8 8h-8v24a8 8 0 0 1-16 0v-24h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhTextboxDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextboxFillIcon],svg[ph-textbox-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 80v96a16 16 0 0 1-16 16h-92a4 4 0 0 1-4-4V68a4 4 0 0 1 4-4h92a16 16 0 0 1 16 16M120 48v160a8 8 0 0 1-16 0v-16H24a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h80V48a8 8 0 0 1 16 0m-32 64a8 8 0 0 0-8-8H48a8 8 0 0 0 0 16h8v24a8 8 0 0 0 16 0v-24h8a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhTextboxFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextboxLightIcon],svg[ph-textbox-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 42a6 6 0 0 0-6 6v18H24a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h82v18a6 6 0 0 0 12 0V48a6 6 0 0 0-6-6M24 178a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h82v100Zm222-98v96a14 14 0 0 1-14 14h-88a6 6 0 0 1 0-12h88a2 2 0 0 0 2-2V80a2 2 0 0 0-2-2h-88a6 6 0 0 1 0-12h88a14 14 0 0 1 14 14M86 112a6 6 0 0 1-6 6H70v26a6 6 0 0 1-12 0v-26H48a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhTextboxLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextboxThinIcon],svg[ph-textbox-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 44a4 4 0 0 0-4 4v20H24a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h84v20a4 4 0 0 0 8 0V48a4 4 0 0 0-4-4M24 180a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h84v104ZM244 80v96a12 12 0 0 1-12 12h-88a4 4 0 0 1 0-8h88a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4h-88a4 4 0 0 1 0-8h88a12 12 0 0 1 12 12M84 112a4 4 0 0 1-4 4H68v28a4 4 0 0 1-8 0v-28H48a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhTextboxThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerIcon],svg[ph-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 56a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m-84 57V88a8 8 0 0 0-16 0v65a32 32 0 1 0 16 0m-8 47a16 16 0 1 1 16-16a16 16 0 0 1-16 16m40-66V48a40 40 0 0 0-80 0v86a64 64 0 1 0 80 0m-40 98a48 48 0 0 1-27.42-87.4A8 8 0 0 0 96 138V48a24 24 0 0 1 48 0v90a8 8 0 0 0 3.42 6.56A48 48 0 0 1 120 232"></svg:path>`,
})
export class PhThermometerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerBoldIcon],svg[ph-thermometer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 52a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 40a8 8 0 1 1 8-8a8 8 0 0 1-8 8m-52-36a52 52 0 0 0-104 0v94.69a64 64 0 1 0 104 0Zm-52 172a40 40 0 0 1-30.91-65.39a12 12 0 0 0 2.91-7.83V56a28 28 0 0 1 56 0v98.77a12 12 0 0 0 2.77 7.68A40 40 0 0 1 108 228m24-40a24 24 0 1 1-36-20.78V92a12 12 0 0 1 24 0v75.22A24 24 0 0 1 132 188"></svg:path>`,
})
export class PhThermometerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerColdIcon],svg[ph-thermometer-cold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m248.91 77.72l-20 6.49l12.34 17a8 8 0 1 1-12.94 9.4l-12.31-17l-12.34 17a8 8 0 0 1-12.94-9.4l12.34-17l-20-6.49A8 8 0 0 1 188 62.5l20 6.5V48a8 8 0 0 1 16 0v21l20-6.49a8 8 0 0 1 4.95 15.22ZM152 184a32 32 0 1 1-40-31v-33a8 8 0 0 1 16 0v33a32.06 32.06 0 0 1 24 31m-16 0a16 16 0 1 0-16 16a16 16 0 0 0 16-16m48 0a64 64 0 1 1-104-50V48a40 40 0 0 1 80 0v86a64.08 64.08 0 0 1 24 50m-16 0a48.08 48.08 0 0 0-20.58-39.4A8 8 0 0 1 144 138V48a24 24 0 0 0-48 0v90a8 8 0 0 1-3.42 6.56A48 48 0 1 0 168 184"></svg:path>`,
})
export class PhThermometerColdIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerColdBoldIcon],svg[ph-thermometer-cold-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 56a52 52 0 0 0-104 0v94.69a64 64 0 1 0 104 0Zm-52 172a40 40 0 0 1-30.91-65.39a12 12 0 0 0 2.91-7.83V56a28 28 0 0 1 56 0v98.77a12 12 0 0 0 2.77 7.68A40 40 0 0 1 108 228M246.14 81.52l-14.72 4.79l9.1 12.52a12 12 0 1 1-19.42 14.11l-9.1-12.52l-9.1 12.52a12 12 0 1 1-19.42-14.11l9.1-12.52l-14.72-4.79a12 12 0 1 1 7.41-22.82L200 63.48V48a12 12 0 0 1 24 0v15.48l14.73-4.78a12 12 0 1 1 7.41 22.82M132 188a24 24 0 1 1-36-20.78V132a12 12 0 0 1 24 0v35.22A24 24 0 0 1 132 188"></svg:path>`,
})
export class PhThermometerColdBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerColdDuotoneIcon],svg[ph-thermometer-cold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 138V48a32 32 0 0 0-64 0v90a56 56 0 1 0 64 0m-32 70a24 24 0 1 1 24-24a24 24 0 0 1-24 24" opacity=".2"></svg:path><svg:path d="m248.91 77.72l-20 6.49l12.34 17a8 8 0 1 1-12.94 9.4l-12.31-17l-12.34 17a8 8 0 0 1-12.94-9.4l12.34-17l-20-6.49A8 8 0 0 1 188 62.5l20 6.5V48a8 8 0 0 1 16 0v21l20-6.49a8 8 0 0 1 4.95 15.22ZM152 184a32 32 0 1 1-40-31v-33a8 8 0 0 1 16 0v33a32.06 32.06 0 0 1 24 31m-16 0a16 16 0 1 0-16 16a16 16 0 0 0 16-16m48 0a64 64 0 1 1-104-50V48a40 40 0 0 1 80 0v86a64.08 64.08 0 0 1 24 50m-16 0a48.08 48.08 0 0 0-20.58-39.4A8 8 0 0 1 144 138V48a24 24 0 0 0-48 0v90a8 8 0 0 1-3.42 6.56A48 48 0 1 0 168 184"></svg:path></svg:g>`,
})
export class PhThermometerColdDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerColdFillIcon],svg[ph-thermometer-cold-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m248.91 77.72l-20 6.49l12.34 17a8 8 0 1 1-12.94 9.4l-12.31-17l-12.34 17a8 8 0 0 1-12.94-9.4l12.34-17l-20-6.49A8 8 0 0 1 188 62.5l20 6.5V48a8 8 0 0 1 16 0v21l20-6.49a8 8 0 0 1 4.95 15.22ZM176 192a56 56 0 1 1-88-46V40a32 32 0 0 1 64 0v106a56.23 56.23 0 0 1 24 46m-95.18-8h78.36A40.16 40.16 0 0 0 140 157.35a8 8 0 0 1-4-6.93V40a16 16 0 0 0-32 0v110.42a8 8 0 0 1-4 6.93A40.16 40.16 0 0 0 80.82 184"></svg:path>`,
})
export class PhThermometerColdFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerColdLightIcon],svg[ph-thermometer-cold-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m248.29 75.82l-22.58 7.33l13.95 19.21a6 6 0 1 1-9.7 7.06L216 90.21l-14 19.21a6 6 0 1 1-9.7-7.06l13.95-19.21l-22.58-7.33a6 6 0 1 1 3.71-11.41L210 71.74V48a6 6 0 0 1 12 0v23.74l22.58-7.33a6 6 0 0 1 3.71 11.41M150 184a30 30 0 1 1-36-29.4V120a6 6 0 0 1 12 0v34.6a30.05 30.05 0 0 1 24 29.4m-12 0a18 18 0 1 0-18 18a18 18 0 0 0 18-18m44 0a62 62 0 1 1-100-49V48a38 38 0 0 1 76 0v87a62.06 62.06 0 0 1 24 49m-12 0a50.07 50.07 0 0 0-21.43-41a6 6 0 0 1-2.57-5V48a26 26 0 0 0-52 0v90a6 6 0 0 1-2.57 5A50 50 0 1 0 170 184"></svg:path>`,
})
export class PhThermometerColdLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerColdThinIcon],svg[ph-thermometer-cold-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m247.67 73.92l-25.2 8.18L238 103.54a4 4 0 1 1-6.47 4.7L216 86.81l-15.57 21.43a4 4 0 0 1-3.24 1.65a4 4 0 0 1-3.23-6.35l15.57-21.44l-25.2-8.18a4 4 0 1 1 2.47-7.61l25.2 8.18V48a4 4 0 0 1 8 0v26.49l25.2-8.18a4 4 0 1 1 2.47 7.61M148 184a28 28 0 1 1-32-27.71V120a4 4 0 0 1 8 0v36.29A28 28 0 0 1 148 184m-8 0a20 20 0 1 0-20 20a20 20 0 0 0 20-20m40 0a60 60 0 1 1-96-48V48a36 36 0 0 1 72 0v88a60.06 60.06 0 0 1 24 48m-8 0a52.06 52.06 0 0 0-22.29-42.68A4 4 0 0 1 148 138V48a28 28 0 0 0-56 0v90a4 4 0 0 1-1.71 3.28A52 52 0 1 0 172 184"></svg:path>`,
})
export class PhThermometerColdThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerDuotoneIcon],svg[ph-thermometer-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 138V48a32 32 0 0 0-64 0v90a56 56 0 1 0 64 0m-32 70a24 24 0 1 1 24-24a24 24 0 0 1-24 24" opacity=".2"></svg:path><svg:path d="M212 56a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m-84 57V88a8 8 0 0 0-16 0v65a32 32 0 1 0 16 0m-8 47a16 16 0 1 1 16-16a16 16 0 0 1-16 16m40-66V48a40 40 0 0 0-80 0v86a64 64 0 1 0 80 0m-40 98a48 48 0 0 1-27.42-87.4A8 8 0 0 0 96 138V48a24 24 0 0 1 48 0v90a8 8 0 0 0 3.42 6.56A48 48 0 0 1 120 232"></svg:path></svg:g>`,
})
export class PhThermometerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerFillIcon],svg[ph-thermometer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 56a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m-60 50.08V40a32 32 0 0 0-64 0v106.08a56 56 0 1 0 64 0M136 104h-32V40a16 16 0 0 1 32 0Z"></svg:path>`,
})
export class PhThermometerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerHotIcon],svg[ph-thermometer-hot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 153V48a8 8 0 0 0-16 0v105a32 32 0 1 0 16 0m-8 47a16 16 0 1 1 16-16a16 16 0 0 1-16 16m40-66V48a40 40 0 0 0-80 0v86a64 64 0 1 0 80 0m-40 98a48 48 0 0 1-27.42-87.4A8 8 0 0 0 96 138V48a24 24 0 0 1 48 0v90a8 8 0 0 0 3.42 6.56A48 48 0 0 1 120 232m57.3-151.23a8 8 0 0 1 2.33-11.07c15-9.79 26.87-4.75 35.51-1.06c7.86 3.36 12.62 5.36 20.49.25a8 8 0 0 1 8.74 13.41C237.88 86.53 232 88 226.69 88c-7 0-12.92-2.54-17.83-4.63C201 80 196.24 78 188.37 83.11a8 8 0 0 1-11.07-2.34m69.4 22.46a8 8 0 0 1-2.33 11.07c-6.49 4.23-12.37 5.7-17.68 5.7c-7 0-12.92-2.54-17.83-4.63c-7.87-3.36-12.62-5.38-20.49-.25a8 8 0 0 1-8.74-13.41c15-9.79 26.87-4.75 35.51-1.06c7.87 3.36 12.62 5.39 20.49.25a8 8 0 0 1 11.07 2.33"></svg:path>`,
})
export class PhThermometerHotIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerHotBoldIcon],svg[ph-thermometer-hot-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 56a52 52 0 0 0-104 0v94.69a64 64 0 1 0 104 0Zm-52 172a40 40 0 0 1-30.91-65.39a12 12 0 0 0 2.91-7.83V56a28 28 0 0 1 56 0v98.77a12 12 0 0 0 2.77 7.68A40 40 0 0 1 108 228m24-40a24 24 0 1 1-36-20.78V56a12 12 0 0 1 24 0v111.22A24 24 0 0 1 132 188m41.94-105a12 12 0 0 1 3.51-16.6c16.82-11 30.32-5.2 39.26-1.39c8.09 3.46 10.93 4.37 16.74.58a12 12 0 0 1 13.1 20.11c-7.27 4.68-13.91 6.3-19.84 6.3c-7.79 0-14.34-2.8-19.42-5c-8.09-3.46-10.93-4.37-16.74-.58A12 12 0 0 1 173.94 83m76.11 26.1a12 12 0 0 1-3.5 16.6c-7.27 4.73-13.91 6.35-19.84 6.35c-7.79 0-14.34-2.8-19.42-5c-8.09-3.46-10.93-4.37-16.74-.58a12 12 0 1 1-13.1-20.11c16.82-11 30.32-5.2 39.26-1.39c8.09 3.46 10.93 4.37 16.74.58a12 12 0 0 1 16.6 3.5Z"></svg:path>`,
})
export class PhThermometerHotBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerHotDuotoneIcon],svg[ph-thermometer-hot-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 138V48a32 32 0 0 0-64 0v90a56 56 0 1 0 64 0m-32 70a24 24 0 1 1 24-24a24 24 0 0 1-24 24" opacity=".2"></svg:path><svg:path d="M128 153V48a8 8 0 0 0-16 0v105a32 32 0 1 0 16 0m-8 47a16 16 0 1 1 16-16a16 16 0 0 1-16 16m40-66V48a40 40 0 0 0-80 0v86a64 64 0 1 0 80 0m-40 98a48 48 0 0 1-27.42-87.4A8 8 0 0 0 96 138V48a24 24 0 0 1 48 0v90a8 8 0 0 0 3.42 6.56A48 48 0 0 1 120 232m57.3-151.23a8 8 0 0 1 2.33-11.07c15-9.79 26.87-4.75 35.51-1.06c7.86 3.36 12.62 5.36 20.49.25a8 8 0 0 1 8.74 13.41C237.88 86.53 232 88 226.69 88c-7 0-12.92-2.54-17.83-4.63C201 80 196.24 78 188.37 83.11a8 8 0 0 1-11.07-2.34m69.4 22.46a8 8 0 0 1-2.33 11.07c-6.49 4.23-12.37 5.7-17.68 5.7c-7 0-12.92-2.54-17.83-4.63c-7.87-3.36-12.62-5.38-20.49-.25a8 8 0 0 1-8.74-13.41c15-9.79 26.87-4.75 35.51-1.06c7.87 3.36 12.62 5.39 20.49.25a8 8 0 0 1 11.07 2.33"></svg:path></svg:g>`,
})
export class PhThermometerHotDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerHotFillIcon],svg[ph-thermometer-hot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 146.08V40a32 32 0 0 0-64 0v106.08a56 56 0 1 0 64 0M136 56h-32V40a16 16 0 0 1 32 0Zm41.3 24.77a8 8 0 0 1 2.33-11.07c15-9.79 26.87-4.75 35.51-1.06c7.86 3.36 12.62 5.36 20.49.25a8 8 0 0 1 8.74 13.41C237.88 86.53 232 88 226.69 88c-7 0-12.92-2.54-17.83-4.63C201 80 196.24 78 188.37 83.11a8 8 0 0 1-11.07-2.34m69.4 22.46a8 8 0 0 1-2.33 11.07c-6.49 4.23-12.37 5.7-17.68 5.7c-7 0-12.92-2.54-17.83-4.63c-7.87-3.36-12.62-5.38-20.49-.25a8 8 0 0 1-8.74-13.41c15-9.79 26.87-4.75 35.51-1.06c7.87 3.36 12.62 5.39 20.49.25a8 8 0 0 1 11.07 2.33"></svg:path>`,
})
export class PhThermometerHotFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerHotLightIcon],svg[ph-thermometer-hot-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126 154.6V48a6 6 0 0 0-12 0v106.6a30 30 0 1 0 12 0m-6 47.4a18 18 0 1 1 18-18a18 18 0 0 1-18 18m38-67V48a38 38 0 0 0-76 0v87a62 62 0 1 0 76 0m-38 99a50 50 0 0 1-28.57-91a6 6 0 0 0 2.57-5V48a26 26 0 0 1 52 0v90a6 6 0 0 0 2.57 4.92A50 50 0 0 1 120 234m59-154.32a6 6 0 0 1 1.75-8.3c14.14-9.21 24.95-4.61 33.63-.9c7.9 3.37 13.6 5.8 22.37.09a6 6 0 1 1 6.55 10.05c-6.12 4-11.62 5.39-16.59 5.39c-6.51 0-12.11-2.39-17-4.49c-7.89-3.37-13.59-5.8-22.37-.09a6 6 0 0 1-8.34-1.75m66 24.64a6 6 0 0 1-1.76 8.3c-6.12 4-11.62 5.39-16.59 5.39c-6.51 0-12.11-2.39-17-4.49c-7.89-3.37-13.59-5.8-22.37-.09a6 6 0 0 1-6.55-10.05c14.14-9.21 24.95-4.6 33.63-.9c7.9 3.37 13.6 5.8 22.37.09a6 6 0 0 1 8.27 1.75"></svg:path>`,
})
export class PhThermometerHotLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerHotThinIcon],svg[ph-thermometer-hot-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 156.29V48a4 4 0 0 0-8 0v108.29a28 28 0 1 0 8 0M120 204a20 20 0 1 1 20-20a20 20 0 0 1-20 20m36-68V48a36 36 0 0 0-72 0v88a60 60 0 1 0 72 0m-36 100a52 52 0 0 1-29.71-94.68A4 4 0 0 0 92 138V48a28 28 0 0 1 56 0v90a4 4 0 0 0 1.71 3.28A52 52 0 0 1 120 236m60.65-157.41a4 4 0 0 1 1.17-5.54c13.24-8.63 23.07-4.43 31.75-.73c8.15 3.48 14.58 6.22 24.25-.07a4 4 0 1 1 4.36 6.7C236.43 82.7 231.32 84 226.67 84c-6.06 0-11.33-2.25-16.24-4.34c-8.15-3.47-14.58-6.22-24.25.07a4 4 0 0 1-5.53-1.14m62.7 26.82a4 4 0 0 1-1.17 5.54c-5.75 3.75-10.86 5.07-15.51 5.07c-6.06 0-11.33-2.25-16.24-4.34c-8.15-3.47-14.58-6.22-24.25.07a4 4 0 1 1-4.36-6.7c13.24-8.63 23.07-4.43 31.75-.73c8.15 3.48 14.58 6.22 24.25-.07a4 4 0 0 1 5.53 1.16"></svg:path>`,
})
export class PhThermometerHotThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerLightIcon],svg[ph-thermometer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 58a26 26 0 1 0 26 26a26 26 0 0 0-26-26m0 40a14 14 0 1 1 14-14a14 14 0 0 1-14 14m-86 56.6V88a6 6 0 0 0-12 0v66.6a30 30 0 1 0 12 0m-6 47.4a18 18 0 1 1 18-18a18 18 0 0 1-18 18m38-67V48a38 38 0 0 0-76 0v87a62 62 0 1 0 76 0m-38 99a50 50 0 0 1-28.57-91a6 6 0 0 0 2.57-5V48a26 26 0 0 1 52 0v90a6 6 0 0 0 2.57 4.92A50 50 0 0 1 120 234"></svg:path>`,
})
export class PhThermometerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerSimpleIcon],svg[ph-thermometer-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 153V88a8 8 0 0 0-16 0v65a32 32 0 1 0 16 0m-8 47a16 16 0 1 1 16-16a16 16 0 0 1-16 16m40-66V48a40 40 0 0 0-80 0v86a64 64 0 1 0 80 0m-40 98a48 48 0 0 1-27.42-87.4A8 8 0 0 0 104 138V48a24 24 0 0 1 48 0v90a8 8 0 0 0 3.42 6.56A48 48 0 0 1 128 232"></svg:path>`,
})
export class PhThermometerSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerSimpleBoldIcon],svg[ph-thermometer-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 150.69V56a52 52 0 0 0-104 0v94.69a64 64 0 1 0 104 0M128 228a40 40 0 0 1-30.91-65.39a12 12 0 0 0 2.91-7.83V56a28 28 0 0 1 56 0v98.77a12 12 0 0 0 2.77 7.68A40 40 0 0 1 128 228m24-40a24 24 0 1 1-36-20.78V92a12 12 0 0 1 24 0v75.22A24 24 0 0 1 152 188"></svg:path>`,
})
export class PhThermometerSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerSimpleDuotoneIcon],svg[ph-thermometer-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 138V48a32 32 0 0 0-64 0v90a56 56 0 1 0 64 0m-32 70a24 24 0 1 1 24-24a24 24 0 0 1-24 24" opacity=".2"></svg:path><svg:path d="M136 153V88a8 8 0 0 0-16 0v65a32 32 0 1 0 16 0m-8 47a16 16 0 1 1 16-16a16 16 0 0 1-16 16m40-66V48a40 40 0 0 0-80 0v86a64 64 0 1 0 80 0m-40 98a48 48 0 0 1-27.42-87.4A8 8 0 0 0 104 138V48a24 24 0 0 1 48 0v90a8 8 0 0 0 3.42 6.56A48 48 0 0 1 128 232"></svg:path></svg:g>`,
})
export class PhThermometerSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerSimpleFillIcon],svg[ph-thermometer-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 146.08V40a32 32 0 0 0-64 0v106.08a56 56 0 1 0 64 0M128 24a16 16 0 0 1 16 16v64h-32V40a16 16 0 0 1 16-16"></svg:path>`,
})
export class PhThermometerSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerSimpleLightIcon],svg[ph-thermometer-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 154.6V88a6 6 0 0 0-12 0v66.6a30 30 0 1 0 12 0m-6 47.4a18 18 0 1 1 18-18a18 18 0 0 1-18 18m38-67V48a38 38 0 0 0-76 0v87a62 62 0 1 0 76 0m-38 99a50 50 0 0 1-28.57-91a6 6 0 0 0 2.57-5V48a26 26 0 0 1 52 0v90a6 6 0 0 0 2.57 4.92A50 50 0 0 1 128 234"></svg:path>`,
})
export class PhThermometerSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerSimpleThinIcon],svg[ph-thermometer-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 156.29V88a4 4 0 0 0-8 0v68.29a28 28 0 1 0 8 0M128 204a20 20 0 1 1 20-20a20 20 0 0 1-20 20m36-68V48a36 36 0 0 0-72 0v88a60 60 0 1 0 72 0m-36 100a52 52 0 0 1-29.71-94.68A4 4 0 0 0 100 138V48a28 28 0 0 1 56 0v90a4 4 0 0 0 1.71 3.28A52 52 0 0 1 128 236"></svg:path>`,
})
export class PhThermometerSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerThinIcon],svg[ph-thermometer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 60a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 40a16 16 0 1 1 16-16a16 16 0 0 1-16 16m-88 56.29V88a4 4 0 0 0-8 0v68.29a28 28 0 1 0 8 0M120 204a20 20 0 1 1 20-20a20 20 0 0 1-20 20m36-68V48a36 36 0 0 0-72 0v88a60 60 0 1 0 72 0m-36 100a52 52 0 0 1-29.71-94.68A4 4 0 0 0 92 138V48a28 28 0 0 1 56 0v90a4 4 0 0 0 1.71 3.28A52 52 0 0 1 120 236"></svg:path>`,
})
export class PhThermometerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThreadsLogoIcon],svg[ph-threads-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186.42 123.65a64 64 0 0 0-11.13-6.72c-4-29.89-24-39.31-33.1-42.07c-19.78-6-42.51 1.19-52.85 16.7a8 8 0 0 0 13.32 8.88c6.37-9.56 22-14.16 34.89-10.27c9.95 3 16.82 10.3 20.15 21a81 81 0 0 0-15.29-1.43c-13.92 0-26.95 3.59-36.67 10.1C94.3 127.57 88 139 88 152c0 20.58 15.86 35.52 37.71 35.52a48 48 0 0 0 34.35-14.81c6.44-6.7 14-18.36 15.61-37.1c.38.26.74.53 1.1.8C186.88 144.05 192 154.68 192 168c0 19.36-20.34 48-64 48c-26.73 0-45.48-8.65-57.34-26.44C60.93 175 56 154.26 56 128s4.93-47 14.66-61.56C82.52 48.65 101.27 40 128 40c32.93 0 54 13.25 64.53 40.52a8 8 0 1 0 14.93-5.75C194.68 41.56 167.2 24 128 24c-32 0-55.81 11.29-70.66 33.56C45.83 74.83 40 98.52 40 128s5.83 53.17 17.34 70.44C72.19 220.71 96 232 128 232c30.07 0 48.9-11.48 59.4-21.1C200.3 199.08 208 183 208 168c0-18.34-7.46-33.68-21.58-44.35m-37.89 38a31.94 31.94 0 0 1-22.82 9.9c-10.81 0-21.71-6-21.71-19.52c0-12.63 12-26.21 38.41-26.21a64 64 0 0 1 17.59 2.42c0 14.08-4 25.62-11.47 33.38Z"></svg:path>`,
})
export class PhThreadsLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThreadsLogoBoldIcon],svg[ph-threads-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.84 120.46a68 68 0 0 0-10-6.23c-3.72-21.68-16.41-37.41-35.52-43.2c-21.38-6.48-46.03 1.39-57.32 18.31a12 12 0 0 0 20 13.32c5.47-8.2 19.11-12.08 30.41-8.66a24.72 24.72 0 0 1 14.88 12.24a87 87 0 0 0-8.86-.45C108.56 105.79 84 125.22 84 152c0 22.9 17.54 39.52 41.71 39.52a52 52 0 0 0 37.23-16c6-6.23 12.88-16.46 15.72-32.07c6.2 6.42 9.34 14.67 9.34 24.59c0 17.74-19.07 44-60 44c-45.76 0-68-27.48-68-84s22.24-84 68-84c31.08 0 51 12.42 60.8 38a12 12 0 0 0 22.4-8.62C197.77 38.44 169 20 128 20c-59.33 0-92 38.35-92 108s32.67 108 92 108c31.36 0 51.08-12.05 62.11-22.15C203.81 201.28 212 184.14 212 168c0-19.64-8-36.08-23.16-47.54m-43.2 38.39a27.9 27.9 0 0 1-19.93 8.67c-8.17 0-17.71-4.06-17.71-15.52c0-15.26 17.84-22.21 34.41-22.21a60.2 60.2 0 0 1 13.51 1.52c-.56 11.62-4.08 21.1-10.28 27.54"></svg:path>`,
})
export class PhThreadsLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThreadsLogoDuotoneIcon],svg[ph-threads-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 128c0 48-16 96-80 96s-80-48-80-96s16-96 80-96s80 48 80 96" opacity=".2"></svg:path><svg:path d="M186.42 123.65a64 64 0 0 0-11.13-6.72c-4-29.89-24-39.31-33.1-42.07c-19.78-6-42.51 1.19-52.85 16.7a8 8 0 0 0 13.32 8.88c6.37-9.56 22-14.16 34.89-10.27c9.95 3 16.82 10.3 20.15 21a81 81 0 0 0-15.29-1.43c-13.92 0-26.95 3.59-36.67 10.1C94.3 127.57 88 139 88 152c0 20.58 15.86 35.52 37.71 35.52a48 48 0 0 0 34.35-14.81c6.44-6.7 14-18.36 15.61-37.1c.38.26.74.53 1.1.8C186.88 144.05 192 154.68 192 168c0 19.36-20.34 48-64 48c-26.73 0-45.48-8.65-57.34-26.44C60.93 175 56 154.26 56 128s4.93-47 14.66-61.56C82.52 48.65 101.27 40 128 40c32.93 0 54 13.25 64.53 40.52a8 8 0 1 0 14.93-5.75C194.68 41.56 167.2 24 128 24c-32 0-55.81 11.29-70.66 33.56C45.83 74.83 40 98.52 40 128s5.83 53.17 17.34 70.44C72.19 220.71 96 232 128 232c30.07 0 48.9-11.48 59.4-21.1C200.3 199.08 208 183 208 168c0-18.34-7.46-33.68-21.58-44.35m-37.89 38a31.94 31.94 0 0 1-22.82 9.9c-10.81 0-21.71-6-21.71-19.52c0-12.63 12-26.21 38.41-26.21a64 64 0 0 1 17.59 2.42c0 14.08-4 25.62-11.47 33.38Z"></svg:path></svg:g>`,
})
export class PhThreadsLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThreadsLogoFillIcon],svg[ph-threads-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138.62 128a53.5 53.5 0 0 1 13.1 1.63c-.57 8.21-3.34 15-8.11 19.61A23.9 23.9 0 0 1 127 156c-11.87 0-15-7.58-15-12.07C112 133 125.8 128 138.62 128m85.38 0c0 65.12-35.89 104-96 104s-96-38.88-96-104S67.89 24 128 24s96 38.88 96 104m-152 0c0-43.07 18.32-64 56-64c26.34 0 43 10.08 50.81 30.83a8 8 0 0 0 15-5.66C180.9 55.14 150.9 48 128 48c-26.1 0-45.52 8.7-57.72 25.86C60.8 87.19 56 105.4 56 128s4.8 40.81 14.28 54.14C82.48 199.3 101.9 208 128 208c24.45 0 39.82-8.8 48.41-16.18c10.76-9.25 17.19-21.89 17.19-33.82c0-14.3-6.59-26.79-18.56-35.17a54 54 0 0 0-7.77-4.5c-2.09-14.65-10-25.75-22.34-31.07c-14.5-6.26-32.93-3.33-43.72 6.93a8 8 0 0 0 11 11.62c5.43-5.14 16.79-8 26.4-3.85a20.05 20.05 0 0 1 10.77 10.92a69 69 0 0 0-10.76-.85C113.53 112 96 125.15 96 143.93C96 160.2 109 172 127 172a40 40 0 0 0 27.75-11.29c4.7-4.59 10.11-12.2 12.17-24A25.55 25.55 0 0 1 177.6 158c0 13.71-15.76 34-49.6 34c-37.68 0-56-20.93-56-64"></svg:path>`,
})
export class PhThreadsLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThreadsLogoLightIcon],svg[ph-threads-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185.22 125.25a62 62 0 0 0-11.78-7c-3.53-29.6-23-38.82-31.83-41.5c-19-5.74-40.73 1.09-50.6 15.9a6 6 0 1 0 10 6.66c6.94-10.41 23.25-15.28 37.14-11.07c7.22 2.18 18.39 8.34 22.39 25.61a78.7 78.7 0 0 0-18.11-2.08c-13.53 0-26.16 3.46-35.55 9.77C96 128.85 90 139.66 90 152c0 22 18 33.52 35.71 33.52a46 46 0 0 0 32.91-14.19c6.58-6.85 14.35-19.11 15.29-39.26a45 45 0 0 1 4.07 2.75c10.48 7.92 16 19.4 16 33.18c0 20.16-21 50-66 50c-27.07 0-46.92-9.19-59-27.33C59 175.75 54 154.66 54 128s5-47.75 15-62.67C81.08 47.19 100.93 38 128 38c33.85 0 55.57 13.67 66.4 41.8a6 6 0 1 0 11.2-4.31C193 42.65 166.85 26 128 26c-31.33 0-54.54 11-69 32.67C47.72 75.6 42 98.93 42 128s5.72 52.4 17 69.33C73.46 219 96.67 230 128 230c29.43 0 47.81-11.19 58.05-20.58C198.54 198 206 182.49 206 168c0-17.69-7.19-32.48-20.78-42.75M150 163a33.94 33.94 0 0 1-24.26 10.51c-16.41.01-23.74-10.8-23.74-21.51c0-13.59 12.64-28.21 40.41-28.21a65.3 65.3 0 0 1 19.58 3v1.24c.01 14.69-4.15 26.79-11.99 34.97"></svg:path>`,
})
export class PhThreadsLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThreadsLogoThinIcon],svg[ph-threads-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 126.84a59.8 59.8 0 0 0-12.42-7.16c-3-29.38-22-38.4-30.56-41c-18.16-5.5-39 1-48.36 15.09a4 4 0 0 0 6.66 4.44c7.4-11.1 24.7-16.32 39.38-11.87c8.12 2.45 20.95 9.6 24.41 30.32a75.8 75.8 0 0 0-20.71-2.88c-13.14 0-25.37 3.34-34.44 9.43c-10.45 7-16 17-16 28.78c0 20.7 17 31.52 33.71 31.52a44 44 0 0 0 31.47-13.58c9.56-9.94 14.68-24.19 14.82-41.23a50 50 0 0 1 7.19 4.51c11 8.32 16.81 20.34 16.81 34.78c0 11.73-6.25 24.46-16.7 34.05c-8.9 8.2-25.05 17.96-51.26 17.96c-50.43 0-76-30.95-76-92s25.57-92 76-92c34.29 0 57.26 14.5 68.27 43.08a4 4 0 1 0 7.46-2.87C191.42 44.22 165.94 28 128 28c-54.95 0-84 34.58-84 100s29.05 100 84 100c28.79 0 46.72-10.9 56.7-20.05c12.09-11.08 19.3-26 19.3-39.95c0-17-6.91-31.27-20-41.16m-32.6 37.55a35.92 35.92 0 0 1-25.7 11.13c-12.38 0-25.71-7.36-25.71-23.52c0-20.76 22-30.21 42.41-30.21a67.1 67.1 0 0 1 21.6 3.51c0 .88.05 1.78.05 2.7c-.05 15.25-4.4 27.83-12.64 36.39Z"></svg:path>`,
})
export class PhThreadsLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThreeDIcon],svg[ph-three-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 148a20 20 0 0 0-20-20a8 8 0 0 1-6.55-12.59L88.63 88H56a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 12.59l-21 30A36 36 0 0 1 76 184a35.7 35.7 0 0 1-25.71-10.81A8 8 0 1 1 61.71 162A20 20 0 0 0 96 148m64-76a56 56 0 0 1 0 112h-24a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8Zm0 16h-16v80h16a40 40 0 0 0 0-80M32 56h192a8 8 0 0 0 0-16H32a8 8 0 0 0 0 16m192 144H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhThreeDIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThreeDBoldIcon],svg[ph-three-d-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 148a16 16 0 0 0-16-16a12 12 0 0 1-9.83-18.88L77 92H52a12 12 0 0 1 0-24h48a12 12 0 0 1 9.83 18.88l-18.34 26.2A40 40 0 1 1 43.43 176a12 12 0 1 1 17.14-16.8A16 16 0 0 0 88 148m76-80a60 60 0 0 1 0 120h-24a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12Zm0 24h-12v72h12a36 36 0 0 0 0-72M32 56h192a12 12 0 0 0 0-24H32a12 12 0 0 0 0 24m192 144H32a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhThreeDBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThreeDDuotoneIcon],svg[ph-three-d-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160H32V48Z" opacity=".2"></svg:path><svg:path d="M96 148a20 20 0 0 0-20-20a8 8 0 0 1-6.55-12.59L88.63 88H56a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 12.59l-21 30A36 36 0 0 1 76 184a35.7 35.7 0 0 1-25.71-10.81A8 8 0 1 1 61.71 162A20 20 0 0 0 96 148m64-76a56 56 0 0 1 0 112h-24a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8Zm0 16h-16v80h16a40 40 0 0 0 0-80M32 56h192a8 8 0 0 0 0-16H32a8 8 0 0 0 0 16m192 144H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhThreeDDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThreeDFillIcon],svg[ph-three-d-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 128a32 32 0 0 1-32 32h-8V96h8a32 32 0 0 1 32 32m48-72v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-120 88a32 32 0 0 0-18.31-28.92L110.4 92.8A8 8 0 0 0 104 80H64a8 8 0 0 0 0 16h24l-14.4 19.2A8 8 0 0 0 80 128a16 16 0 1 1-10.66 27.93a8 8 0 1 0-10.68 11.92A32 32 0 0 0 112 144m88-16a48.05 48.05 0 0 0-48-48h-16a8 8 0 0 0-8 8v80a8 8 0 0 0 8 8h16a48.05 48.05 0 0 0 48-48"></svg:path>`,
})
export class PhThreeDFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThreeDLightIcon],svg[ph-three-d-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M98 148a22 22 0 0 0-22-22a6 6 0 0 1-4.92-9.44L92.48 86H56a6 6 0 0 1 0-12h48a6 6 0 0 1 4.92 9.44l-22.53 32.18a34 34 0 1 1-34.68 56.17a6 6 0 0 1 8.58-8.39A22 22 0 0 0 98 148m62-74a54 54 0 0 1 0 108h-24a6 6 0 0 1-6-6V80a6 6 0 0 1 6-6Zm0 12h-18v84h18a42 42 0 0 0 0-84M32 54h192a6 6 0 0 0 0-12H32a6 6 0 0 0 0 12m192 148H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhThreeDLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThreeDThinIcon],svg[ph-three-d-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 148a24 24 0 0 0-24-24a4 4 0 0 1-3.28-6.29L96.32 84H56a4 4 0 0 1 0-8h48a4 4 0 0 1 3.28 6.29L83.12 116.8a32 32 0 1 1-30 53.6a4 4 0 1 1 5.72-5.6A24 24 0 0 0 100 148m60-72a52 52 0 0 1 0 104h-24a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4Zm0 8h-20v88h20a44 44 0 0 0 0-88M32 52h192a4 4 0 0 0 0-8H32a4 4 0 0 0 0 8m192 152H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhThreeDThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThumbsDownIcon],svg[ph-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.82 157l-12-96A24 24 0 0 0 204 40H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h43.06l37.78 75.58A8 8 0 0 0 120 240a40 40 0 0 0 40-40v-16h56a24 24 0 0 0 23.82-27M72 144H32V56h40Zm150 21.29a7.88 7.88 0 0 1-6 2.71h-64a8 8 0 0 0-8 8v24a24 24 0 0 1-19.29 23.54L88 150.11V56h116a8 8 0 0 1 7.94 7l12 96a7.87 7.87 0 0 1-1.94 6.29"></svg:path>`,
})
export class PhThumbsDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThumbsDownBoldIcon],svg[ph-thumbs-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.78 156.53l-12-96A28 28 0 0 0 204 36H32a20 20 0 0 0-20 20v88a20 20 0 0 0 20 20h40.58l36.69 73.37A12 12 0 0 0 120 244a44.05 44.05 0 0 0 44-44v-12h52a28 28 0 0 0 27.78-31.47M68 140H36V60h32Zm151 22.65a4 4 0 0 1-3 1.35h-64a12 12 0 0 0-12 12v24a20 20 0 0 1-13.18 18.8L92 149.17V60h112a4 4 0 0 1 4 3.5l12 96a4 4 0 0 1-1 3.15"></svg:path>`,
})
export class PhThumbsDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThumbsDownDuotoneIcon],svg[ph-thumbs-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 48v104H32a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8Z" opacity=".2"></svg:path><svg:path d="m239.82 157l-12-96A24 24 0 0 0 204 40H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h43.06l37.78 75.58A8 8 0 0 0 120 240a40 40 0 0 0 40-40v-16h56a24 24 0 0 0 23.82-27M72 144H32V56h40Zm150 21.29a7.88 7.88 0 0 1-6 2.71h-64a8 8 0 0 0-8 8v24a24 24 0 0 1-19.29 23.54L88 150.11V56h116a8 8 0 0 1 7.94 7l12 96a7.87 7.87 0 0 1-1.94 6.29"></svg:path></svg:g>`,
})
export class PhThumbsDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThumbsDownFillIcon],svg[ph-thumbs-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.82 157l-12-96A24 24 0 0 0 204 40H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h43.06l37.78 75.58A8 8 0 0 0 120 240a40 40 0 0 0 40-40v-16h56a24 24 0 0 0 23.82-27M72 144H32V56h40Z"></svg:path>`,
})
export class PhThumbsDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThumbsDownLightIcon],svg[ph-thumbs-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.83 157.27l-12-96A22 22 0 0 0 204 42H32a14 14 0 0 0-14 14v88a14 14 0 0 0 14 14h44.29l38.34 76.68A6 6 0 0 0 120 238a38 38 0 0 0 38-38v-18h58a22 22 0 0 0 21.83-24.73M74 146H32a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h42Zm149.5 20.62A9.9 9.9 0 0 1 216 170h-64a6 6 0 0 0-6 6v24a26 26 0 0 1-22.42 25.75L86 150.58V54h118a10 10 0 0 1 9.92 8.76l12 96a9.9 9.9 0 0 1-2.42 7.86"></svg:path>`,
})
export class PhThumbsDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThumbsDownThinIcon],svg[ph-thumbs-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.85 157.52l-12-96A20 20 0 0 0 204 44H32a12 12 0 0 0-12 12v88a12 12 0 0 0 12 12h45.53l38.89 77.79A4 4 0 0 0 120 236a36 36 0 0 0 36-36v-20h60a20 20 0 0 0 19.85-22.48M76 148H32a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h44Zm149 19.94a12 12 0 0 1-9 4.06h-64a4 4 0 0 0-4 4v24a28 28 0 0 1-25.58 27.9L84 151.06V52h120a12 12 0 0 1 11.91 10.51l12 96a12 12 0 0 1-2.91 9.43"></svg:path>`,
})
export class PhThumbsDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThumbsUpIcon],svg[ph-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234 80.12A24 24 0 0 0 216 72h-56V56a40 40 0 0 0-40-40a8 8 0 0 0-7.16 4.42L75.06 96H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h172a24 24 0 0 0 23.82-21l12-96A24 24 0 0 0 234 80.12M32 112h40v88H32Zm191.94-15l-12 96a8 8 0 0 1-7.94 7H88v-94.11l36.71-73.43A24 24 0 0 1 144 56v24a8 8 0 0 0 8 8h64a8 8 0 0 1 7.94 9"></svg:path>`,
})
export class PhThumbsUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThumbsUpBoldIcon],svg[ph-thumbs-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237 77.47A28 28 0 0 0 216 68h-52V56a44.05 44.05 0 0 0-44-44a12 12 0 0 0-10.73 6.63L72.58 92H32a20 20 0 0 0-20 20v88a20 20 0 0 0 20 20h172a28 28 0 0 0 27.78-24.53l12-96a28 28 0 0 0-6.78-22M36 116h32v80H36Zm184-19.5l-12 96a4 4 0 0 1-4 3.5H92v-89.17l34.82-69.63A20 20 0 0 1 140 56v24a12 12 0 0 0 12 12h64a4 4 0 0 1 4 4.5"></svg:path>`,
})
export class PhThumbsUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThumbsUpDuotoneIcon],svg[ph-thumbs-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 104v104H32a8 8 0 0 1-8-8v-88a8 8 0 0 1 8-8Z" opacity=".2"></svg:path><svg:path d="M234 80.12A24 24 0 0 0 216 72h-56V56a40 40 0 0 0-40-40a8 8 0 0 0-7.16 4.42L75.06 96H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h172a24 24 0 0 0 23.82-21l12-96A24 24 0 0 0 234 80.12M32 112h40v88H32Zm191.94-15l-12 96a8 8 0 0 1-7.94 7H88v-94.11l36.71-73.43A24 24 0 0 1 144 56v24a8 8 0 0 0 8 8h64a8 8 0 0 1 7.94 9"></svg:path></svg:g>`,
})
export class PhThumbsUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThumbsUpFillIcon],svg[ph-thumbs-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234 80.12A24 24 0 0 0 216 72h-56V56a40 40 0 0 0-40-40a8 8 0 0 0-7.16 4.42L75.06 96H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h172a24 24 0 0 0 23.82-21l12-96A24 24 0 0 0 234 80.12M32 112h40v88H32Z"></svg:path>`,
})
export class PhThumbsUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThumbsUpLightIcon],svg[ph-thumbs-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.49 81.44A22 22 0 0 0 216 74h-58V56a38 38 0 0 0-38-38a6 6 0 0 0-5.37 3.32L76.29 98H32a14 14 0 0 0-14 14v88a14 14 0 0 0 14 14h172a22 22 0 0 0 21.83-19.27l12-96a22 22 0 0 0-5.34-17.29M30 200v-88a2 2 0 0 1 2-2h42v92H32a2 2 0 0 1-2-2M225.92 97.24l-12 96A10 10 0 0 1 204 202H86v-96.58l37.58-75.17A26 26 0 0 1 146 56v24a6 6 0 0 0 6 6h64a10 10 0 0 1 9.92 11.24"></svg:path>`,
})
export class PhThumbsUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThumbsUpThinIcon],svg[ph-thumbs-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231 82.76A20 20 0 0 0 216 76h-60V56a36 36 0 0 0-36-36a4 4 0 0 0-3.58 2.21L77.53 100H32a12 12 0 0 0-12 12v88a12 12 0 0 0 12 12h172a20 20 0 0 0 19.85-17.52l12-96A20 20 0 0 0 231 82.76M76 204H32a4 4 0 0 1-4-4v-88a4 4 0 0 1 4-4h44ZM227.91 97.49l-12 96A12 12 0 0 1 204 204H84v-99.06l38.42-76.84A28 28 0 0 1 148 56v24a4 4 0 0 0 4 4h64a12 12 0 0 1 11.91 13.49"></svg:path>`,
})
export class PhThumbsUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTicketIcon],svg[ph-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 104a8 8 0 0 0 8-8V64a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v32a8 8 0 0 0 8 8a24 24 0 0 1 0 48a8 8 0 0 0-8 8v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a8 8 0 0 0-8-8a24 24 0 0 1 0-48M32 167.2a40 40 0 0 0 0-78.4V64h56v128H32Zm192 0V192H104V64h120v24.8a40 40 0 0 0 0 78.4"></svg:path>`,
})
export class PhTicketIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTicketBoldIcon],svg[ph-ticket-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 108a12 12 0 0 0 12-12V64a20 20 0 0 0-20-20H32a20 20 0 0 0-20 20v32a12 12 0 0 0 12 12a20 20 0 0 1 0 40a12 12 0 0 0-12 12v32a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-32a12 12 0 0 0-12-12a20 20 0 0 1 0-40M36 170.34a44 44 0 0 0 0-84.68V68h52v120H36Zm184 0V188H112V68h108v17.66a44 44 0 0 0 0 84.68"></svg:path>`,
})
export class PhTicketBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTicketDuotoneIcon],svg[ph-ticket-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 128a32 32 0 0 0 32 32v32a8 8 0 0 1-8 8H96V56h128a8 8 0 0 1 8 8v32a32 32 0 0 0-32 32" opacity=".2"></svg:path><svg:path d="M232 104a8 8 0 0 0 8-8V64a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v32a8 8 0 0 0 8 8a24 24 0 0 1 0 48a8 8 0 0 0-8 8v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a8 8 0 0 0-8-8a24 24 0 0 1 0-48M32 167.2a40 40 0 0 0 0-78.4V64h56v128H32Zm192 0V192H104V64h120v24.8a40 40 0 0 0 0 78.4"></svg:path></svg:g>`,
})
export class PhTicketDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTicketFillIcon],svg[ph-ticket-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 104a8 8 0 0 0 8-8V64a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v32a8 8 0 0 0 8 8a24 24 0 0 1 0 48a8 8 0 0 0-8 8v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a8 8 0 0 0-8-8a24 24 0 0 1 0-48M32 167.2a40 40 0 0 0 0-78.4V64h56v128H32Z"></svg:path>`,
})
export class PhTicketFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTicketLightIcon],svg[ph-ticket-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 102a6 6 0 0 0 6-6V64a14 14 0 0 0-14-14H32a14 14 0 0 0-14 14v32a6 6 0 0 0 6 6a26 26 0 0 1 0 52a6 6 0 0 0-6 6v32a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14v-32a6 6 0 0 0-6-6a26 26 0 0 1 0-52M30 192v-26.47a38 38 0 0 0 0-75.06V64a2 2 0 0 1 2-2h58v132H32a2 2 0 0 1-2-2m196-26.47V192a2 2 0 0 1-2 2H102V62h122a2 2 0 0 1 2 2v26.47a38 38 0 0 0 0 75.06"></svg:path>`,
})
export class PhTicketLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTicketThinIcon],svg[ph-ticket-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 100a4 4 0 0 0 4-4V64a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v32a4 4 0 0 0 4 4a28 28 0 0 1 0 56a4 4 0 0 0-4 4v32a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-32a4 4 0 0 0-4-4a28 28 0 0 1 0-56M28 192v-28.22a36 36 0 0 0 0-71.56V64a4 4 0 0 1 4-4h60v136H32a4 4 0 0 1-4-4m168-64a36.06 36.06 0 0 0 32 35.78V192a4 4 0 0 1-4 4H100V60h124a4 4 0 0 1 4 4v28.22A36.06 36.06 0 0 0 196 128"></svg:path>`,
})
export class PhTicketThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTidalLogoIcon],svg[ph-tidal-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m253.66 90.34l-40-40a8 8 0 0 0-11.32 0L168 84.69l-34.34-34.35a8 8 0 0 0-11.32 0L88 84.69L53.66 50.34a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0L88 107.31L116.69 136l-34.35 34.34a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32L139.31 136L168 107.31l34.34 34.35a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32M48 124.69L19.31 96L48 67.31L76.69 96Zm80 80L99.31 176L128 147.31L156.69 176Zm0-80L99.31 96L128 67.31L156.69 96Zm80 0L179.31 96L208 67.31L236.69 96Z"></svg:path>`,
})
export class PhTidalLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTidalLogoBoldIcon],svg[ph-tidal-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m252.49 87.51l-38-38a12 12 0 0 0-17 0L168 79l-31.51-31.49a12 12 0 0 0-17 0L88 79L58.49 49.51a12 12 0 0 0-17 0l-38 38a12 12 0 0 0 0 17l38 38a12 12 0 0 0 17 0L88 113l23 23l-31.49 31.51a12 12 0 0 0 0 17l40 40a12 12 0 0 0 17 0l40-40a12 12 0 0 0 0-17L145 136l23-23l29.51 29.52a12 12 0 0 0 17 0l38-38a12 12 0 0 0-.02-17.01M50 117L29 96l21-21l21 21Zm78 82l-23-23l23-23l23 23Zm0-80l-23-23l23-23l23 23Zm78-2l-21-21l21-21l21 21Z"></svg:path>`,
})
export class PhTidalLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTidalLogoDuotoneIcon],svg[ph-tidal-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m48 56l40 40l-40 40L8 96Zm40 40l40 40l40-40l-40-40Zm40 120l40-40l-40-40l-40 40Zm80-160l-40 40l40 40l40-40Z" opacity=".2"></svg:path><svg:path d="m253.66 90.34l-40-40a8 8 0 0 0-11.32 0L168 84.69l-34.34-34.35a8 8 0 0 0-11.32 0L88 84.69L53.66 50.34a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0L88 107.31L116.69 136l-34.35 34.34a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32L139.31 136L168 107.31l34.34 34.35a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32M48 124.69L19.31 96L48 67.31L76.69 96Zm80 80L99.31 176L128 147.31L156.69 176Zm0-80L99.31 96L128 67.31L156.69 96Zm80 0L179.31 96L208 67.31L236.69 96Z"></svg:path></svg:g>`,
})
export class PhTidalLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTidalLogoFillIcon],svg[ph-tidal-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m253.66 101.66l-36 36a8 8 0 0 1-11.32 0l-36-36l-.34-.38l-.34.38L135.31 136l34.35 34.34a8 8 0 0 1 0 11.32l-36 36a8 8 0 0 1-11.32 0l-36-36a8 8 0 0 1 0-11.32L120.69 136l-34.35-34.34l-.34-.38l-.34.38l-36 36a8 8 0 0 1-11.32 0l-36-36a8 8 0 0 1 0-11.32l36-36a8 8 0 0 1 11.32 0l36 36l.34.38l.34-.38l36-36a8 8 0 0 1 11.32 0l36 36l.34.38l.34-.38l36-36a8 8 0 0 1 11.32 0l36 36a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhTidalLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTidalLogoLightIcon],svg[ph-tidal-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m252.24 91.76l-40-40a6 6 0 0 0-8.48 0L168 87.52l-35.76-35.76a6 6 0 0 0-8.48 0L88 87.52L52.24 51.76a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 0 8.48l40 40a6 6 0 0 0 8.48 0L88 104.48L119.52 136l-35.76 35.76a6 6 0 0 0 0 8.48l40 40a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48L136.48 136L168 104.48l35.76 35.76a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48M48 127.51L16.49 96L48 64.49L79.51 96Zm80 80L96.49 176L128 144.49L159.51 176Zm0-80L96.49 96L128 64.49L159.51 96Zm80 0L176.49 96L208 64.49L239.51 96Z"></svg:path>`,
})
export class PhTidalLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTidalLogoThinIcon],svg[ph-tidal-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250.83 93.17l-40-40a4 4 0 0 0-5.66 0L168 90.34l-37.17-37.17a4 4 0 0 0-5.66 0L88 90.34L50.83 53.17a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 0 5.66l40 40a4 4 0 0 0 5.66 0L88 101.66L122.34 136l-37.17 37.17a4 4 0 0 0 0 5.66l40 40a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66L133.66 136L168 101.66l37.17 37.17a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66M48 130.34L13.66 96L48 61.66L82.34 96Zm80 80L93.66 176L128 141.66L162.34 176Zm0-80L93.66 96L128 61.66L162.34 96Zm80 0L173.66 96L208 61.66L242.34 96Z"></svg:path>`,
})
export class PhTidalLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTiktokLogoIcon],svg[ph-tiktok-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 72a48.05 48.05 0 0 1-48-48a8 8 0 0 0-8-8h-40a8 8 0 0 0-8 8v132a20 20 0 1 1-28.57-18.08a8 8 0 0 0 4.57-7.23V88a8 8 0 0 0-9.4-7.88C50.91 86.48 24 119.1 24 156a76 76 0 0 0 152 0v-39.71A103.25 103.25 0 0 0 224 128a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8m-8 39.64a87.2 87.2 0 0 1-43.33-16.15A8 8 0 0 0 160 102v54a60 60 0 0 1-120 0c0-25.9 16.64-49.13 40-57.6v27.67A36 36 0 1 0 136 156V32h24.5A64.14 64.14 0 0 0 216 87.5Z"></svg:path>`,
})
export class PhTiktokLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTiktokLogoBoldIcon],svg[ph-tiktok-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 68a44.05 44.05 0 0 1-44-44a12 12 0 0 0-12-12h-40a12 12 0 0 0-12 12v132a16 16 0 1 1-22.85-14.47a12 12 0 0 0 6.85-10.84V88a12 12 0 0 0-14.1-11.81a79.35 79.35 0 0 0-47.08 27.74A81.84 81.84 0 0 0 20 156a80 80 0 0 0 160 0v-33.33a107.5 107.5 0 0 0 44 9.33a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12m-12 39.15a83.05 83.05 0 0 1-37-14.91a12 12 0 0 0-19 9.76v54a56 56 0 0 1-112 0a57.86 57.86 0 0 1 32-51.56V124a40 40 0 1 0 64 32V36h17.06A68.21 68.21 0 0 0 212 90.94Z"></svg:path>`,
})
export class PhTiktokLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTiktokLogoDuotoneIcon],svg[ph-tiktok-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 120a95.55 95.55 0 0 1-56-18v54a68 68 0 0 1-136 0c0-33.46 24.17-62.33 56-68v42.69A28 28 0 1 0 128 156V24h40a56 56 0 0 0 56 56Z" opacity=".2"></svg:path><svg:path d="M224 72a48.05 48.05 0 0 1-48-48a8 8 0 0 0-8-8h-40a8 8 0 0 0-8 8v132a20 20 0 1 1-28.57-18.08a8 8 0 0 0 4.57-7.23V88a8 8 0 0 0-9.4-7.88C50.91 86.48 24 119.1 24 156a76 76 0 0 0 152 0v-39.71A103.25 103.25 0 0 0 224 128a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8m-8 39.64a87.2 87.2 0 0 1-43.33-16.15A8 8 0 0 0 160 102v54a60 60 0 0 1-120 0c0-25.9 16.64-49.13 40-57.6v27.67A36 36 0 1 0 136 156V32h24.5A64.14 64.14 0 0 0 216 87.5Z"></svg:path></svg:g>`,
})
export class PhTiktokLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTiktokLogoFillIcon],svg[ph-tiktok-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 80v40a8 8 0 0 1-8 8a103.25 103.25 0 0 1-48-11.71V156a76 76 0 0 1-152 0c0-36.9 26.91-69.52 62.6-75.88A8 8 0 0 1 96 88v42.69a8 8 0 0 1-4.57 7.23A20 20 0 1 0 120 156V24a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8a48.05 48.05 0 0 0 48 48a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTiktokLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTiktokLogoLightIcon],svg[ph-tiktok-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 74a50.06 50.06 0 0 1-50-50a6 6 0 0 0-6-6h-40a6 6 0 0 0-6 6v132a22 22 0 1 1-31.43-19.89a6 6 0 0 0 3.43-5.42V88a6 6 0 0 0-7-5.91C52.2 88.28 26 120.05 26 156a74 74 0 0 0 148 0v-43.07A101.3 101.3 0 0 0 224 126a6 6 0 0 0 6-6V80a6 6 0 0 0-6-6m-6 39.8a89.13 89.13 0 0 1-46.5-16.69A6 6 0 0 0 162 102v54a62 62 0 0 1-124 0c0-27.72 18.47-52.48 44-60.38v31.53A34 34 0 1 0 134 156V30h28.29A62.09 62.09 0 0 0 218 85.71Z"></svg:path>`,
})
export class PhTiktokLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTiktokLogoThinIcon],svg[ph-tiktok-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 76a52.06 52.06 0 0 1-52-52a4 4 0 0 0-4-4h-40a4 4 0 0 0-4 4v132a24 24 0 1 1-34.28-21.69a4 4 0 0 0 2.28-3.62V88a4 4 0 0 0-4.7-3.94C53.49 90.08 28 121 28 156a72 72 0 0 0 144 0v-46.56A99.26 99.26 0 0 0 224 124a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4m-4 39.92a91.3 91.3 0 0 1-49.66-17.18A4 4 0 0 0 164 102v54a64 64 0 0 1-128 0c0-29.52 20.32-55.79 48-63v35.31A32 32 0 1 0 132 156V28h32.13A60.11 60.11 0 0 0 220 83.87Z"></svg:path>`,
})
export class PhTiktokLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTildeIcon],svg[ph-tilde-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222.23 130.59c-14.51 18-28.84 27.6-43.8 29.17a43 43 0 0 1-4.5.24c-19.3 0-35.39-13.1-51-25.8c-14.91-12.14-29-23.61-43.7-22c-10.51 1.1-21.31 8.72-33 23.28a8 8 0 0 1-12.46-10c14.51-18 28.84-27.6 43.8-29.17c21.32-2.25 38.69 11.89 55.48 25.56c14.91 12.14 29 23.62 43.7 22c10.51-1.1 21.31-8.72 33-23.28a8 8 0 1 1 12.46 10Z"></svg:path>`,
})
export class PhTildeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTildeBoldIcon],svg[ph-tilde-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.35 133.1c-15.22 18.93-30.43 29-46.5 30.65a47 47 0 0 1-4.85.25c-20.81 0-38.16-14.13-53.59-26.7c-14.24-11.6-27.68-22.54-40.75-21.18c-9.26 1-19.46 8.32-30.32 21.82a12 12 0 0 1-18.7-15C45.87 104 61.08 94 77.15 92.25c23-2.42 41.82 12.92 58.43 26.45c14.24 11.6 27.68 22.54 40.75 21.18c9.26-1 19.46-8.32 30.32-21.82a12 12 0 1 1 18.7 15Z"></svg:path>`,
})
export class PhTildeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTildeDuotoneIcon],svg[ph-tilde-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M222.23 130.59c-14.51 18-28.84 27.6-43.8 29.17a43 43 0 0 1-4.5.24c-19.3 0-35.39-13.1-51-25.8c-14.91-12.14-29-23.61-43.7-22c-10.51 1.1-21.31 8.72-33 23.28a8 8 0 0 1-12.46-10c14.51-18 28.84-27.6 43.8-29.17c21.32-2.25 38.69 11.89 55.48 25.56c14.91 12.14 29 23.62 43.7 22c10.51-1.1 21.31-8.72 33-23.28a8 8 0 1 1 12.46 10Z"></svg:path></svg:g>`,
})
export class PhTildeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTildeFillIcon],svg[ph-tilde-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-10 99.66c-13.19 15-25.34 20.29-36.37 20.29c-14.94 0-27.81-9.61-38.43-17.54c-19.2-14.34-31.89-23.81-53.2.48a8 8 0 1 1-12-10.55c31.05-35.41 56.34-16.53 74.8-2.75c19.2 14.34 31.89 23.81 53.2-.48a8 8 0 1 1 12 10.55"></svg:path>`,
})
export class PhTildeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTildeLightIcon],svg[ph-tilde-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.68 129.34c-14.17 17.62-28.06 26.92-42.46 28.44a41 41 0 0 1-4.22.22c-18.64 0-34.44-12.87-49.76-25.35S94.57 108.51 79 110.16c-11.06 1.16-22.3 9-34.36 24a6 6 0 1 1-9.36-7.52c14.17-17.61 28.06-26.92 42.46-28.43c20.52-2.18 37.54 11.7 54 25.12c15.26 12.43 29.68 24.15 45.26 22.51c11.06-1.16 22.3-9 34.36-24a6 6 0 0 1 9.36 7.52Z"></svg:path>`,
})
export class PhTildeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTildeThinIcon],svg[ph-tilde-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.12 128.09c-13.82 17.18-27.26 26.24-41.11 27.7a39 39 0 0 1-4 .21c-18 0-33.48-12.64-48.53-24.9c-15.57-12.68-30.29-24.66-46.64-22.93c-11.62 1.22-23.3 9.32-35.71 24.76a4 4 0 0 1-6.24-5c13.81-17.2 27.25-26.26 41.11-27.72c19.67-2.08 36.38 11.53 52.54 24.69c15.57 12.68 30.29 24.66 46.64 22.93c11.62-1.22 23.3-9.32 35.71-24.76a4 4 0 1 1 6.24 5Z"></svg:path>`,
})
export class PhTildeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTimerIcon],svg[ph-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80m45.66-125.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0M96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhTimerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTimerBoldIcon],svg[ph-timer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 44a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 168a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72m36.49-112.49a12 12 0 0 1 0 17l-28 28a12 12 0 0 1-17-17l28-28a12 12 0 0 1 17 0M92 16a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhTimerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTimerDuotoneIcon],svg[ph-timer-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 136a88 88 0 1 1-88-88a88 88 0 0 1 88 88" opacity=".2"></svg:path><svg:path d="M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80m45.66-125.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0M96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhTimerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTimerFillIcon],svg[ph-timer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m45.66 61.66l-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 11.32M96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhTimerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTimerLightIcon],svg[ph-timer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 42a94 94 0 1 0 94 94a94.11 94.11 0 0 0-94-94m0 176a82 82 0 1 1 82-82a82.1 82.1 0 0 1-82 82m44.24-126.24a6 6 0 0 1 0 8.48l-40 40a6 6 0 1 1-8.48-8.48l40-40a6 6 0 0 1 8.48 0M98 16a6 6 0 0 1 6-6h48a6 6 0 0 1 0 12h-48a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhTimerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTimerThinIcon],svg[ph-timer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 44a92 92 0 1 0 92 92a92.1 92.1 0 0 0-92-92m0 176a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m42.83-126.83a4 4 0 0 1 0 5.66l-40 40a4 4 0 1 1-5.66-5.66l40-40a4 4 0 0 1 5.66 0M100 16a4 4 0 0 1 4-4h48a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhTimerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTipJarIcon],svg[ph-tip-jar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 48.81V32a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v16.81A40.05 40.05 0 0 0 40 88v112a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40V88a40.05 40.05 0 0 0-32-39.19M168 48h-16V32h16Zm-48 0V32h16v16Zm-16-16v16H88V32Zm96 168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V88a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24Zm-40-40a24 24 0 0 1-24 24v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h24a8 8 0 0 0 0-16h-16a24 24 0 0 1 0-48v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 0 16h-24a8 8 0 0 0 0 16h16a24 24 0 0 1 24 24"></svg:path>`,
})
export class PhTipJarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTipJarBoldIcon],svg[ph-tip-jar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 49.68V32a20 20 0 0 0-20-20H88a20 20 0 0 0-20 20v17.68A44.06 44.06 0 0 0 36 92v108a44.05 44.05 0 0 0 44 44h96a44.05 44.05 0 0 0 44-44V92a44.06 44.06 0 0 0-32-42.32M164 48h-24V36h24Zm-48-12v12H92V36Zm80 164a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V92a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20Zm-28-38a30 30 0 0 1-28 29.93V196a12 12 0 0 1-24 0v-4h-8a12 12 0 0 1 0-24h30a6 6 0 0 0 0-12h-20a30 30 0 0 1-2-59.93V96a12 12 0 0 1 24 0h8a12 12 0 0 1 0 24h-30a6 6 0 0 0 0 12h20a30 30 0 0 1 30 30"></svg:path>`,
})
export class PhTipJarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTipJarDuotoneIcon],svg[ph-tip-jar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88v112a32 32 0 0 1-32 32H80a32 32 0 0 1-32-32V88a32 32 0 0 1 32-32h96a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M184 48.81V32a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v16.81A40.05 40.05 0 0 0 40 88v112a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40V88a40.05 40.05 0 0 0-32-39.19M168 48h-16V32h16Zm-48 0V32h16v16Zm-16-16v16H88V32Zm96 168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V88a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24Zm-40-40a24 24 0 0 1-24 24v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h24a8 8 0 0 0 0-16h-16a24 24 0 0 1 0-48v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 0 16h-24a8 8 0 0 0 0 16h16a24 24 0 0 1 24 24"></svg:path></svg:g>`,
})
export class PhTipJarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTipJarFillIcon],svg[ph-tip-jar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 48.81V32a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v16.81A40.05 40.05 0 0 0 40 88v112a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40V88a40.05 40.05 0 0 0-32-39.19M120 32h16v16h-16Zm-32 0h16v16H88Zm48 152v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h24a8 8 0 0 0 0-16h-16a24 24 0 0 1 0-48v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 0 16h-24a8 8 0 0 0 0 16h16a24 24 0 0 1 0 48m32-136h-16V32h16Z"></svg:path>`,
})
export class PhTipJarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTipJarLightIcon],svg[ph-tip-jar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 50.48V32a14 14 0 0 0-14-14H88a14 14 0 0 0-14 14v18.48A38.05 38.05 0 0 0 42 88v112a38 38 0 0 0 38 38h96a38 38 0 0 0 38-38V88a38.05 38.05 0 0 0-32-37.52M170 32v18h-20V30h18a2 2 0 0 1 2 2m-52 18V30h20v20ZM88 30h18v20H86V32a2 2 0 0 1 2-2m114 170a26 26 0 0 1-26 26H80a26 26 0 0 1-26-26V88a26 26 0 0 1 26-26h96a26 26 0 0 1 26 26Zm-44-40a22 22 0 0 1-22 22h-2v10a6 6 0 0 1-12 0v-10h-10a6 6 0 0 1 0-12h24a10 10 0 0 0 0-20h-16a22 22 0 0 1 0-44h2V96a6 6 0 0 1 12 0v10h10a6 6 0 0 1 0 12h-24a10 10 0 0 0 0 20h16a22 22 0 0 1 22 22"></svg:path>`,
})
export class PhTipJarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTipJarThinIcon],svg[ph-tip-jar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 52.23V32a12 12 0 0 0-12-12H88a12 12 0 0 0-12 12v20.23A36 36 0 0 0 44 88v112a36 36 0 0 0 36 36h96a36 36 0 0 0 36-36V88a36 36 0 0 0-32-35.77M148 28h20a4 4 0 0 1 4 4v20h-24Zm-32 0h24v24h-24Zm-32 4a4 4 0 0 1 4-4h20v24H84Zm120 168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V88a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28Zm-48-40a20 20 0 0 1-20 20h-4v12a4 4 0 0 1-8 0v-12h-12a4 4 0 0 1 0-8h24a12 12 0 0 0 0-24h-16a20 20 0 0 1 0-40h4V96a4 4 0 0 1 8 0v12h12a4 4 0 0 1 0 8h-24a12 12 0 0 0 0 24h16a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhTipJarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTipiIcon],svg[ph-tipi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238.74 211.69L137.5 53.5l21.24-33.19a8 8 0 0 0-13.48-8.62L128 38.66l-17.26-27a8 8 0 1 0-13.48 8.62L118.5 53.5L17.26 211.69A8 8 0 0 0 24 224h208a8 8 0 0 0 6.74-12.31M86.3 208l41.7-65.16L169.7 208Zm102.4 0l-54-84.31a8 8 0 0 0-13.48 0L67.3 208H38.62L128 68.34L217.38 208Z"></svg:path>`,
})
export class PhTipiIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTipiBoldIcon],svg[ph-tipi-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242.11 209.53l-99.86-156l19.86-31a12 12 0 1 0-20.22-13L128 31.24L114.11 9.53a12 12 0 0 0-20.22 12.94l19.86 31l-99.86 156A12 12 0 0 0 24 228h208a12 12 0 0 0 10.11-18.47M96.17 204L128 154.26L159.83 204Zm92.16 0l-50.22-78.47a12 12 0 0 0-20.22 0L67.67 204H45.93L128 75.76L210.07 204Z"></svg:path>`,
})
export class PhTipiBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTipiDuotoneIcon],svg[ph-tipi-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184.32 216H71.68L128 128Z" opacity=".2"></svg:path><svg:path d="M238.74 211.69L137.5 53.5l21.24-33.19a8 8 0 0 0-13.48-8.62L128 38.66l-17.26-27a8 8 0 1 0-13.48 8.62L118.5 53.5L17.26 211.69A8 8 0 0 0 24 224h208a8 8 0 0 0 6.74-12.31M86.3 208l41.7-65.16L169.7 208Zm102.4 0l-54-84.31a8 8 0 0 0-13.48 0L67.3 208H38.62L128 68.34L217.38 208Z"></svg:path></svg:g>`,
})
export class PhTipiDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTipiFillIcon],svg[ph-tipi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238.74 211.69L137.5 53.5l21.24-33.19a8 8 0 0 0-13.48-8.62L128 38.66l-17.26-27a8 8 0 1 0-13.48 8.62L118.5 53.5L17.26 211.69A8 8 0 0 0 24 224h208a8 8 0 0 0 6.74-12.31m-50-3.69l-54-84.31a8 8 0 0 0-13.48 0L67.3 208H38.62L128 68.34L217.38 208Z"></svg:path>`,
})
export class PhTipiFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTipiLightIcon],svg[ph-tipi-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.05 212.77L135.12 53.5l21.93-34.26A6 6 0 1 0 147 12.77l-19 29.6l-19-29.6a6 6 0 1 0-10 6.47l21.88 34.26L19 212.77a6 6 0 0 0 5 9.23h208a6 6 0 0 0 5.05-9.23M82.64 210L128 139.13L173.36 210Zm105 0l-54.55-85.23a6 6 0 0 0-10.1 0L68.4 210H35l93-145.37L221 210Z"></svg:path>`,
})
export class PhTipiLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTipiThinIcon],svg[ph-tipi-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.37 213.84L132.75 53.5l22.62-35.34a4 4 0 1 0-6.74-4.32L128 46.08l-20.63-32.24a4 4 0 0 0-6.74 4.32l22.62 35.34L20.63 213.84A4 4 0 0 0 24 220h208a4 4 0 0 0 3.37-6.16M79 212l49-76.58L177 212Zm107.52 0l-55.14-86.16a4 4 0 0 0-6.74 0L69.49 212H31.31L128 60.92L224.69 212Z"></svg:path>`,
})
export class PhTipiThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTireIcon],svg[ph-tire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.26 159.26C155.09 173.82 163.5 176 168 176s12.91-2.18 18.74-16.74c3.39-8.48 5.26-19.58 5.26-31.26s-1.87-22.78-5.26-31.26C180.91 82.18 172.5 80 168 80s-12.91 2.18-18.74 16.74c-3.39 8.48-5.26 19.58-5.26 31.26s1.87 22.78 5.26 31.26M168 96.2c2.62 2.06 8 13 8 31.8s-5.38 29.74-8 31.8c-2.62-2.06-8-13-8-31.8s5.38-29.74 8-31.8M232 216h-35.59c16.71-18.27 27.59-50.53 27.59-88c0-58.32-26.35-104-60-104H92c-33.65 0-60 45.68-60 104s26.35 104 60 104h140a8 8 0 0 0 0-16M193.74 63.93C202.93 80.91 208 103.67 208 128s-5.07 47.09-14.26 64.07C185.38 207.5 174.82 216 164 216s-21.38-8.5-29.74-23.93C125.07 175.09 120 152.33 120 128s5.07-47.09 14.26-64.07C142.62 48.5 153.18 40 164 40s21.38 8.5 29.74 23.93M48 128c0-2.5.07-5 .17-7.44L80 97.83l24.43 17.45c-.28 4.16-.43 8.41-.43 12.72a180 180 0 0 0 3.07 33.5l-22.42-16a8 8 0 0 0-9.3 0l-23.74 17A161 161 0 0 1 48 128m14.26-64.07C70.62 48.5 81.18 40 92 40h39.59c-11.9 13-20.84 33.12-25 57.16L84.65 81.49a8 8 0 0 0-9.3 0L50.49 99.25C52.85 86 56.83 74 62.26 63.93m0 128.14a100 100 0 0 1-5.94-13.32L80 161.83l33.94 24.24c4.6 12 10.6 22.22 17.65 29.93H92c-10.82 0-21.38-8.5-29.74-23.93"></svg:path>`,
})
export class PhTireIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTireBoldIcon],svg[ph-tire-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 128c0-22.09 7.16-40 16-40s16 17.91 16 40s-7.16 40-16 40s-16-17.91-16-40m92 96a12 12 0 0 1-12 12H92c-18.5 0-35.3-12.22-47.32-34.4C33.92 181.74 28 155.6 28 128s5.92-53.74 16.68-73.6C56.7 32.22 73.5 20 92 20h72c18.5 0 35.3 12.22 47.32 34.4C222.08 74.26 228 100.4 228 128s-5.92 53.74-16.68 73.6a95 95 0 0 1-6.51 10.4H232a12 12 0 0 1 12 12M164 44c-18.92 0-40 34.5-40 84s21.08 84 40 84s40-34.5 40-84s-21.08-84-40-84M54.33 155.59L73 142.24a12 12 0 0 1 13.94 0l14.66 10.46A187 187 0 0 1 100 128c0-3.61.11-7.2.31-10.75L80 102.75l-27.91 19.93C52 124.44 52 126.21 52 128a160 160 0 0 0 2.33 27.59M56.54 90L73 78.24a12 12 0 0 1 13.94 0l16.91 12.07a134.8 134.8 0 0 1 12.8-35.91a95 95 0 0 1 6.54-10.4H92c-13.56 0-28.23 17.73-35.46 46M92 212h31.19a95 95 0 0 1-6.51-10.4a116 116 0 0 1-6-12.91L80 166.75l-18.86 13.47C69 200.08 80.88 212 92 212"></svg:path>`,
})
export class PhTireBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTireDuotoneIcon],svg[ph-tire-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M164 224H92c-28.72 0-52-43-52-96s23.28-96 52-96h72c-28.72 0-52 43-52 96s23.28 96 52 96m4-136c-8.84 0-16 17.91-16 40s7.16 40 16 40s16-17.91 16-40s-7.16-40-16-40" opacity=".2"></svg:path><svg:path d="M149.26 159.26C155.09 173.82 163.5 176 168 176s12.91-2.18 18.74-16.74c3.39-8.48 5.26-19.58 5.26-31.26s-1.87-22.78-5.26-31.26C180.91 82.18 172.5 80 168 80s-12.91 2.18-18.74 16.74c-3.39 8.48-5.26 19.58-5.26 31.26s1.87 22.78 5.26 31.26M168 96.2c2.62 2.06 8 13 8 31.8s-5.38 29.74-8 31.8c-2.62-2.06-8-13-8-31.8s5.38-29.74 8-31.8M232 216h-35.59c16.71-18.27 27.59-50.53 27.59-88c0-58.32-26.35-104-60-104H92c-33.65 0-60 45.68-60 104s26.35 104 60 104h140a8 8 0 0 0 0-16M193.74 63.93C202.93 80.91 208 103.67 208 128s-5.07 47.09-14.26 64.07C185.38 207.5 174.82 216 164 216s-21.38-8.5-29.74-23.93C125.07 175.09 120 152.33 120 128s5.07-47.09 14.26-64.07C142.62 48.5 153.18 40 164 40s21.38 8.5 29.74 23.93M48 128c0-2.5.07-5 .17-7.44L80 97.83l24.43 17.45c-.28 4.16-.43 8.41-.43 12.72a180 180 0 0 0 3.07 33.5l-22.42-16a8 8 0 0 0-9.3 0l-23.74 17A161 161 0 0 1 48 128m14.26-64.07C70.62 48.5 81.18 40 92 40h39.59c-11.9 13-20.84 33.12-25 57.16L84.65 81.49a8 8 0 0 0-9.3 0L50.49 99.25C52.85 86 56.83 74 62.26 63.93m0 128.14a100 100 0 0 1-5.94-13.32L80 161.83l33.94 24.24c4.6 12 10.6 22.22 17.65 29.93H92c-10.82 0-21.38-8.5-29.74-23.93"></svg:path></svg:g>`,
})
export class PhTireDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTireFillIcon],svg[ph-tire-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 128c0 22.09-7.16 40-16 40s-16-17.91-16-40s7.16-40 16-40s16 17.91 16 40m56 96a8 8 0 0 1-8 8H92c-33.64 0-60-45.68-60-104S58.36 24 92 24h72c33.64 0 60 45.68 60 104c0 37.47-10.88 69.73-27.59 88H232a8 8 0 0 1 8 8M57.87 111.81a7.93 7.93 0 0 0 4.64-1.49L80 97.83l13.28 9.49a8 8 0 0 0 9.3-13L84.65 81.49a8 8 0 0 0-9.3 0L53.21 97.3a8 8 0 0 0 4.66 14.51m46.67 47.89l-19.89-14.21a8 8 0 0 0-9.3 0L56 159.29a8 8 0 1 0 9.3 13L80 161.83l15.24 10.88a8 8 0 1 0 9.3-13Zm89.2 32.37c9.19-17 14.26-39.74 14.26-64.07s-5.07-47.09-14.26-64.07C185.38 48.5 174.82 40 164 40s-21.38 8.5-29.74 23.93C125.07 80.91 120 103.67 120 128s5.07 47.09 14.26 64.07C142.62 207.5 153.18 216 164 216s21.38-8.5 29.74-23.93"></svg:path>`,
})
export class PhTireFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTireLightIcon],svg[ph-tire-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 174c14.44 0 22-23.14 22-46s-7.56-46-22-46s-22 23.14-22 46s7.56 46 22 46m0-80c2.57 0 10 11.69 10 34s-7.43 34-10 34s-10-11.69-10-34s7.43-34 10-34m64 124h-40.29c18.18-17 30.29-50.57 30.29-90c0-57.2-25.48-102-58-102H92c-32.52 0-58 44.8-58 102s25.48 102 58 102h140a6 6 0 0 0 0-12m-22-90c0 48.79-21.07 90-46 90s-46-41.21-46-90s21.07-90 46-90s46 41.21 46 90m-164 0c0-2.86.08-5.69.22-8.5L80 95.37l26.5 18.93c-.33 4.47-.5 9-.5 13.7a175.7 175.7 0 0 0 4 38.08l-26.55-19a6 6 0 0 0-7 0l-26.1 18.64A160.2 160.2 0 0 1 46 128m46-90h44.29c-13.8 12.92-24.09 35.35-28.29 62.65L83.49 83.12a6 6 0 0 0-7 0l-28.7 20.51C53.37 66.24 71.36 38 92 38m0 180c-15.58 0-29.64-16.08-38-40l26-18.58l35.53 25.39c5.22 13.92 12.34 25.35 20.76 33.24Z"></svg:path>`,
})
export class PhTireLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTireThinIcon],svg[ph-tire-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 172c13 0 20-22.67 20-44s-7-44-20-44s-20 22.67-20 44s7 44 20 44m0-80c4.89 0 12 14 12 36s-7.11 36-12 36s-12-14-12-36s7.11-36 12-36m64 128h-45.77c6.72-5.11 12.85-12.59 18.06-22.21C214.42 179.08 220 154.3 220 128s-5.58-51.08-15.71-69.79C193.73 38.73 179.43 28 164 28H92c-15.43 0-29.73 10.73-40.29 30.21C41.58 76.92 36 101.7 36 128s5.58 51.08 15.71 69.79C62.27 217.27 76.57 228 92 228h140a4 4 0 0 0 0-8M197.25 62c9.51 17.58 14.75 41 14.75 66s-5.24 48.42-14.75 66c-9.09 16.78-20.9 26-33.25 26s-24.16-9.24-33.25-26c-9.51-17.58-14.75-41-14.75-66s5.24-48.42 14.75-66c9.09-16.78 20.9-26 33.25-26s24.16 9.24 33.25 26m-138.5 0C67.84 45.24 79.65 36 92 36h49.77c-6.72 5.11-12.85 12.59-18.06 22.21c-7 12.93-11.83 28.77-14.14 46L82.33 84.75a4 4 0 0 0-4.66 0L45.17 108c2.02-17.34 6.67-33.22 13.58-46m-14.49 56.44L80 92.92l28.59 20.42c-.39 4.81-.59 9.71-.59 14.66a169.7 169.7 0 0 0 5.32 42.89l-31-22.14a4 4 0 0 0-4.66 0l-28.53 20.38A161.4 161.4 0 0 1 44 128q0-4.81.26-9.56M92 220c-12.35 0-24.16-9.24-33.25-26a106.6 106.6 0 0 1-7.19-16.75L80 156.92l37.32 26.65a111 111 0 0 0 6.39 14.22c5.21 9.62 11.34 17.1 18.06 22.21Z"></svg:path>`,
})
export class PhTireThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToggleLeftIcon],svg[ph-toggle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 56H80a72 72 0 0 0 0 144h96a72 72 0 0 0 0-144m0 128H80a56 56 0 0 1 0-112h96a56 56 0 0 1 0 112M80 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhToggleLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToggleLeftBoldIcon],svg[ph-toggle-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 52H80a76 76 0 0 0 0 152h96a76 76 0 0 0 0-152m0 128H80a52 52 0 0 1 0-104h96a52 52 0 0 1 0 104M80 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 56a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhToggleLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToggleLeftDuotoneIcon],svg[ph-toggle-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M112 128a32 32 0 1 1-32-32a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M176 56H80a72 72 0 0 0 0 144h96a72 72 0 0 0 0-144m0 128H80a56 56 0 0 1 0-112h96a56 56 0 0 1 0 112M80 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path></svg:g>`,
})
export class PhToggleLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToggleLeftFillIcon],svg[ph-toggle-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 56H80a72 72 0 0 0 0 144h96a72 72 0 0 0 0-144M80 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhToggleLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToggleLeftLightIcon],svg[ph-toggle-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 58H80a70 70 0 0 0 0 140h96a70 70 0 0 0 0-140m0 128H80a58 58 0 0 1 0-116h96a58 58 0 0 1 0 116M80 90a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhToggleLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToggleLeftThinIcon],svg[ph-toggle-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 60H80a68 68 0 0 0 0 136h96a68 68 0 0 0 0-136m0 128H80a60 60 0 0 1 0-120h96a60 60 0 0 1 0 120M80 92a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhToggleLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToggleRightIcon],svg[ph-toggle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 56H80a72 72 0 0 0 0 144h96a72 72 0 0 0 0-144m0 128H80a56 56 0 0 1 0-112h96a56 56 0 0 1 0 112m0-96a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhToggleRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToggleRightBoldIcon],svg[ph-toggle-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 52H80a76 76 0 0 0 0 152h96a76 76 0 0 0 0-152m0 128H80a52 52 0 0 1 0-104h96a52 52 0 0 1 0 104m0-92a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 56a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhToggleRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToggleRightDuotoneIcon],svg[ph-toggle-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 128a32 32 0 1 1-32-32a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M176 56H80a72 72 0 0 0 0 144h96a72 72 0 0 0 0-144m0 128H80a56 56 0 0 1 0-112h96a56 56 0 0 1 0 112m0-96a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path></svg:g>`,
})
export class PhToggleRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToggleRightFillIcon],svg[ph-toggle-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 56H80a72 72 0 0 0 0 144h96a72 72 0 0 0 0-144m0 112a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhToggleRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToggleRightLightIcon],svg[ph-toggle-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 58H80a70 70 0 0 0 0 140h96a70 70 0 0 0 0-140m0 128H80a58 58 0 0 1 0-116h96a58 58 0 0 1 0 116m0-96a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhToggleRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToggleRightThinIcon],svg[ph-toggle-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 60H80a68 68 0 0 0 0 136h96a68 68 0 0 0 0-136m0 128H80a60 60 0 0 1 0-120h96a60 60 0 0 1 0 120m0-96a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhToggleRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToiletIcon],svg[ph-toilet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 64a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8m52.32 133.14l3.52 24.6A16 16 0 0 1 160 240H96a16 16 0 0 1-15.84-18.26l3.52-24.6A96.09 96.09 0 0 1 32 112a8 8 0 0 1 8-8h16V40a16 16 0 0 1 16-16h112a16 16 0 0 1 16 16v64h16a8 8 0 0 1 8 8a96.09 96.09 0 0 1-51.68 85.14M72 104h112V40H72Zm85.07 99.5a96.15 96.15 0 0 1-58.14 0L96 224h64ZM207.6 120H48.4a80 80 0 0 0 159.2 0"></svg:path>`,
})
export class PhToiletIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToiletBoldIcon],svg[ph-toilet-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 68a12 12 0 0 1-12 12h-16a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12m48.15 127.62l3.65 25.55A20 20 0 0 1 160 244H96a20 20 0 0 1-19.8-22.83l3.65-25.55A100.08 100.08 0 0 1 28 108a12 12 0 0 1 12-12h12V40a20 20 0 0 1 20-20h112a20 20 0 0 1 20 20v56h12a12 12 0 0 1 12 12a100.08 100.08 0 0 1-51.85 87.62M76 96h104V44H76Zm77.21 108.78a100.3 100.3 0 0 1-50.42 0L100.61 220h54.78ZM203.05 120H53a76 76 0 0 0 150.1 0Z"></svg:path>`,
})
export class PhToiletBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToiletDuotoneIcon],svg[ph-toilet-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M167.92 222.87A8 8 0 0 1 160 232H96a8 8 0 0 1-7.92-9.13l4.34-30.36a88.2 88.2 0 0 0 71.14 0ZM184 32H72a8 8 0 0 0-8 8v72h128V40a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M120 64a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8m52.32 133.14l3.52 24.6A16 16 0 0 1 160 240H96a16 16 0 0 1-15.84-18.26l3.52-24.6A96.09 96.09 0 0 1 32 112a8 8 0 0 1 8-8h16V40a16 16 0 0 1 16-16h112a16 16 0 0 1 16 16v64h16a8 8 0 0 1 8 8a96.09 96.09 0 0 1-51.68 85.14M72 104h112V40H72Zm85.07 99.5a96.15 96.15 0 0 1-58.14 0L96 224h64ZM207.6 120H48.4a80 80 0 0 0 159.2 0"></svg:path></svg:g>`,
})
export class PhToiletDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToiletFillIcon],svg[ph-toilet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 88h136a4 4 0 0 0 4-4V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v44a4 4 0 0 0 4 4m28-40h15.73a8.18 8.18 0 0 1 8.27 7.47a8 8 0 0 1-8 8.53H88.27A8.18 8.18 0 0 1 80 56.53A8 8 0 0 1 88 48m136 64.06a8 8 0 0 0-8-8.06H40a8 8 0 0 0-8 8.06a96.1 96.1 0 0 0 51.68 85.08l-3.47 24.27a16.43 16.43 0 0 0 1.63 10A16 16 0 0 0 96 240h63.66a16.52 16.52 0 0 0 9.72-3a16 16 0 0 0 6.46-15.23l-3.52-24.6A96.1 96.1 0 0 0 224 112.06M96 224l2.93-20.5a96.15 96.15 0 0 0 58.14 0L160 224Z"></svg:path>`,
})
export class PhToiletFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToiletLightIcon],svg[ph-toilet-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M118 64a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6m52.14 132l3.72 26A14 14 0 0 1 160 238H96a14 14 0 0 1-13.86-16l3.72-26A94.1 94.1 0 0 1 34 112a6 6 0 0 1 6-6h18V40a14 14 0 0 1 14-14h112a14 14 0 0 1 14 14v66h18a6 6 0 0 1 6 6a94.1 94.1 0 0 1-51.86 84M70 106h116V40a2 2 0 0 0-2-2H72a2 2 0 0 0-2 2Zm88.71 94.84a94 94 0 0 1-61.42 0L94 223.72a2 2 0 0 0 .47 1.59A2 2 0 0 0 96 226h64a2 2 0 0 0 1.51-.69a2 2 0 0 0 .47-1.59ZM209.78 118H46.22a82 82 0 0 0 163.56 0"></svg:path>`,
})
export class PhToiletLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToiletPaperIcon],svg[ph-toilet-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 120a12 12 0 1 1-12-12a12 12 0 0 1 12 12m164 0v88a16 16 0 0 1-16 16H112a16 16 0 0 1-16-16v-21.65C87.37 200.37 76.18 208 64 208c-13.87 0-26.46-9.89-35.44-27.85C20.46 164 16 142.59 16 120s4.46-43.95 12.56-60.15C37.54 41.89 50.13 32 64 32h128c13.87 0 26.46 9.89 35.44 27.85C235.54 76.05 240 97.41 240 120m-144 0c0-42.43-16.86-72-32-72s-32 29.57-32 72s16.86 72 32 72s32-29.57 32-72m128 88v-80h-16a8 8 0 0 1 0-16h15.79c-1.95-38.1-17.63-64-31.79-64H92.12a73.6 73.6 0 0 1 7.32 11.85c7.14 14.28 11.44 32.56 12.37 52.15H128a8 8 0 0 1 0 16h-16v80Zm-48-96h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhToiletPaperIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToiletPaperBoldIcon],svg[ph-toilet-paper-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 120a16 16 0 1 1-16-16a16 16 0 0 1 16 16m164 0v88a20 20 0 0 1-20 20H112a20 20 0 0 1-20-20v-9.61C84 207.07 74.46 212 64 212c-29.65 0-52-39.55-52-92s22.35-92 52-92h128c29.65 0 52 39.55 52 92m-152 0c0-19.26-3.81-37.92-10.45-51.2C76.29 58.28 69.73 52 64 52s-12.29 6.28-17.55 16.8C39.81 82.08 36 100.74 36 120s3.81 37.92 10.45 51.2C51.71 181.72 58.27 188 64 188s12.29-6.28 17.55-16.8C88.19 157.92 92 139.26 92 120m128 84v-72h-8a12 12 0 0 1 0-24h7.5c-1.23-14.85-4.7-28.71-9.95-39.2S197.73 52 192 52H99.74c8.61 14.11 14.35 33.56 15.86 56h8.4a12 12 0 0 1 0 24h-8v72Zm-48-96h-8a12 12 0 0 0 0 24h8a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhToiletPaperBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToiletPaperDuotoneIcon],svg[ph-toilet-paper-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 120c0 44.18-17.91 80-40 80s-40-35.82-40-80s17.91-80 40-80s40 35.82 40 80" opacity=".2"></svg:path><svg:path d="M76 120a12 12 0 1 1-12-12a12 12 0 0 1 12 12m164 0v88a16 16 0 0 1-16 16H112a16 16 0 0 1-16-16v-21.65C87.37 200.37 76.18 208 64 208c-13.87 0-26.46-9.89-35.44-27.85C20.46 164 16 142.59 16 120s4.46-43.95 12.56-60.15C37.54 41.89 50.13 32 64 32h128c13.87 0 26.46 9.89 35.44 27.85C235.54 76.05 240 97.41 240 120m-144 0c0-42.43-16.86-72-32-72s-32 29.57-32 72s16.86 72 32 72s32-29.57 32-72m128 88v-80h-16a8 8 0 0 1 0-16h15.79c-1.95-38.1-17.63-64-31.79-64H92.12a73.6 73.6 0 0 1 7.32 11.85c7.14 14.28 11.44 32.56 12.37 52.15H128a8 8 0 0 1 0 16h-16v80Zm-48-96h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhToiletPaperDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToiletPaperFillIcon],svg[ph-toilet-paper-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 120a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8m56 0v88a16 16 0 0 1-16 16H112a16 16 0 0 1-16-16v-21.65C87.37 200.37 76.18 208 64 208c-13.87 0-26.46-9.89-35.44-27.85C20.46 164 16 142.59 16 120s4.46-43.95 12.56-60.15C37.54 41.89 50.13 32 64 32h128c13.87 0 26.46 9.89 35.44 27.85C235.54 76.05 240 97.41 240 120m-164 0a12 12 0 1 0-12 12a12 12 0 0 0 12-12m148 8h-16a8 8 0 0 1 0-16h15.79c-1.95-38.1-17.63-64-31.79-64H92.12a73.6 73.6 0 0 1 7.32 11.85c7.14 14.28 11.44 32.56 12.37 52.15H128a8 8 0 0 1 0 16h-16v80h112Z"></svg:path>`,
})
export class PhToiletPaperFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToiletPaperLightIcon],svg[ph-toilet-paper-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M74 120a10 10 0 1 1-10-10a10 10 0 0 1 10 10m164 0v88a14 14 0 0 1-14 14H112a14 14 0 0 1-14-14v-29.52C89.65 195.49 77.6 206 64 206c-25.79 0-46-37.78-46-86s20.21-86 46-86h128c25.79 0 46 37.78 46 86m-140 0c0-44.26-17.58-74-34-74s-34 29.74-34 74s17.58 74 34 74s34-29.73 34-74m128 88v-82h-18a6 6 0 0 1 0-12h17.88c-1.51-40.92-18.21-68-33.88-68H87.76c12.57 13.92 21.09 38.74 22.12 68H128a6 6 0 0 1 0 12h-18v82a2 2 0 0 0 2 2h112a2 2 0 0 0 2-2m-50-94h-16a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhToiletPaperLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToiletPaperThinIcon],svg[ph-toilet-paper-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 120a8 8 0 1 1-8-8a8 8 0 0 1 8 8m164 0v88a12 12 0 0 1-12 12H112a12 12 0 0 1-12-12v-39.14C92.1 190.26 79 204 64 204c-24.67 0-44-36.9-44-84s19.33-84 44-84h128c24.67 0 44 36.9 44 84m-136 0c0-41.2-16.49-76-36-76s-36 34.8-36 76s16.49 76 36 76s36-34.8 36-76m128 88v-84h-20a4 4 0 0 1 0-8h20c-1-39.42-17.07-72-35.95-72h-109c14.29 12.8 24.14 39.76 24.9 72h20a4 4 0 0 1 0 8H108v84a4 4 0 0 0 4 4h112a4 4 0 0 0 4-4m-52-92h-16a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhToiletPaperThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToiletThinIcon],svg[ph-toilet-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 64a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4m52 130.86l3.92 27.44A12 12 0 0 1 160 236H96a12 12 0 0 1-11.88-13.7L88 194.86A92.11 92.11 0 0 1 36 112a4 4 0 0 1 4-4h20V40a12 12 0 0 1 12-12h112a12 12 0 0 1 12 12v68h20a4 4 0 0 1 4 4a92.11 92.11 0 0 1-52 82.86M68 108h120V40a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4Zm92.34 90.13a92 92 0 0 1-64.68 0L92 223.43a4 4 0 0 0 .94 3.19A3.93 3.93 0 0 0 96 228h64a3.93 3.93 0 0 0 3-1.38a4 4 0 0 0 .94-3.19ZM211.91 116H44.09a84 84 0 0 0 167.82 0"></svg:path>`,
})
export class PhToiletThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToolboxIcon],svg[ph-toolbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 64h-48v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16M96 56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm128 24v32h-32v-8a8 8 0 0 0-16 0v8H80v-8a8 8 0 0 0-16 0v8H32V80Zm0 112H32v-64h32v8a8 8 0 0 0 16 0v-8h96v8a8 8 0 0 0 16 0v-8h32z"></svg:path>`,
})
export class PhToolboxIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToolboxBoldIcon],svg[ph-toolbox-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 64h-44v-8a28 28 0 0 0-28-28h-48a28 28 0 0 0-28 28v8H32a20 20 0 0 0-20 20v108a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V84a20 20 0 0 0-20-20m-124-8a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v8h-56Zm120 32v32h-24v-4a12 12 0 0 0-24 0v4H84v-4a12 12 0 0 0-24 0v4H36V88ZM36 188v-44h24v4a12 12 0 0 0 24 0v-4h88v4a12 12 0 0 0 24 0v-4h24v44Z"></svg:path>`,
})
export class PhToolboxBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToolboxDuotoneIcon],svg[ph-toolbox-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 120v72a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8v-72Z" opacity=".2"></svg:path><svg:path d="M224 64h-48v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16M96 56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96ZM32 80h192v32h-32v-8a8 8 0 0 0-16 0v8H80v-8a8 8 0 0 0-16 0v8H32Zm192 112H32v-64h32v8a8 8 0 0 0 16 0v-8h96v8a8 8 0 0 0 16 0v-8h32z"></svg:path></svg:g>`,
})
export class PhToolboxDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToolboxFillIcon],svg[ph-toolbox-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 64h-48v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H32a16 16 0 0 0-16 16v28a4 4 0 0 0 4 4h44V96.27A8.17 8.17 0 0 1 71.47 88A8 8 0 0 1 80 96v16h96V96.27a8.17 8.17 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8v16h44a4 4 0 0 0 4-4V80a16 16 0 0 0-16-16m-64 0H96v-8a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Zm80 68v60a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-60a4 4 0 0 1 4-4h44v16a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.27V128h96v16a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.25V128h44a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhToolboxFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToolboxLightIcon],svg[ph-toolbox-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 66h-50V56a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H32a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14M94 56a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94ZM32 78h192a2 2 0 0 1 2 2v34h-36v-10a6 6 0 0 0-12 0v10H78v-10a6 6 0 0 0-12 0v10H30V80a2 2 0 0 1 2-2m192 116H32a2 2 0 0 1-2-2v-66h36v10a6 6 0 0 0 12 0v-10h100v10a6 6 0 0 0 12 0v-10h36v66a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhToolboxLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToolboxThinIcon],svg[ph-toolbox-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 68h-52V56a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H32a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12M92 56a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92ZM32 76h192a4 4 0 0 1 4 4v36h-40v-12a4 4 0 0 0-8 0v12H76v-12a4 4 0 0 0-8 0v12H28V80a4 4 0 0 1 4-4m192 120H32a4 4 0 0 1-4-4v-68h40v12a4 4 0 0 0 8 0v-12h104v12a4 4 0 0 0 8 0v-12h40v68a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhToolboxThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToothIcon],svg[ph-tooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 71.42L149.54 80L171 88.57a8 8 0 1 1-6 14.85l-37-14.81l-37 14.81a8 8 0 1 1-6-14.85L106.46 80L85 71.42a8 8 0 1 1 6-14.85l37 14.81l37-14.81a8 8 0 1 1 6 14.85m53 8.33c0 42.72-8 75.4-14.69 95.28c-8.73 25.8-20.63 45.49-32.65 54a15.69 15.69 0 0 1-15.95 1.41a16.09 16.09 0 0 1-9.18-13.36c-.85-11.5-5.05-49.08-23.53-49.08s-22.68 37.59-23.53 49.11a16.09 16.09 0 0 1-16 14.9a15.67 15.67 0 0 1-9.13-2.95c-12-8.53-23.92-28.22-32.65-54C40 155.15 32 122.47 32 79.75A56 56 0 0 1 88 24h80a56 56 0 0 1 56 55.75m-16 0A40 40 0 0 0 168 40H88a40 40 0 0 0-40 39.76c0 40.55 7.51 71.4 13.85 90.14c11.05 32.66 23 43.37 26.61 46C91.57 174.67 105.59 152 128 152s36.45 22.71 39.49 63.94c3.6-2.59 15.57-13.26 26.66-46c6.34-18.78 13.85-49.63 13.85-90.18Z"></svg:path>`,
})
export class PhToothIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToothBoldIcon],svg[ph-tooth-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.46 83.15L160.31 88l12.15 4.85a12 12 0 1 1-8.92 22.29L128 100.93l-35.54 14.22a12 12 0 0 1-8.92-22.29L95.69 88l-12.15-4.85a12 12 0 0 1 8.92-22.29L128 75.08l35.54-14.22a12 12 0 0 1 8.92 22.29m55.54-3.4c.08 76.45-25.2 135.68-49 152.59a20 20 0 0 1-31.44-14.92c-.67-9.06-2.33-22-6.46-32.23C135.76 172 129.92 172 128 172c-7.76 0-11.77 9.92-13.08 13.18c-4.13 10.22-5.79 23.17-6.46 32.23A20 20 0 0 1 88.51 236A19.86 19.86 0 0 1 77 232.34C53.2 215.43 27.92 156.2 28 79.75A60 60 0 0 1 88 20h80a60 60 0 0 1 60 59.75m-24 0A36 36 0 0 0 168 44H88a36 36 0 0 0-36 35.78c-.06 61.09 17.83 109.52 33.3 127.66C91.24 156 114.32 148 128 148s36.76 8 42.7 59.43c15.47-18.12 33.36-66.55 33.3-127.65Z"></svg:path>`,
})
export class PhToothBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToothDuotoneIcon],svg[ph-tooth-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 79.76c.07 71.42-23.48 128.23-44 142.78a8 8 0 0 1-12.52-6C158 196.31 152 160 128 160s-30 36.31-31.51 56.53a8 8 0 0 1-12.52 6C63.48 208 39.93 151.18 40 79.76A47.94 47.94 0 0 1 88 32h80a47.94 47.94 0 0 1 48 47.76" opacity=".2"></svg:path><svg:path d="M171 71.42L149.54 80L171 88.57a8 8 0 1 1-6 14.85l-37-14.81l-37 14.81a8 8 0 1 1-6-14.85L106.46 80L85 71.42a8 8 0 1 1 6-14.85l37 14.81l37-14.81a8 8 0 1 1 6 14.85m53 8.33c0 42.72-8 75.4-14.7 95.28c-8.72 25.8-20.62 45.49-32.64 54a15.69 15.69 0 0 1-15.95 1.41a16.09 16.09 0 0 1-9.18-13.36c-.85-11.5-5.05-49.08-23.53-49.08s-22.68 37.59-23.53 49.11a16.09 16.09 0 0 1-16 14.9a15.67 15.67 0 0 1-9.13-2.95c-12-8.53-23.92-28.22-32.64-54C40 155.15 32 122.47 32 79.75A56 56 0 0 1 88 24h80a56 56 0 0 1 56 55.75m-16 0A40 40 0 0 0 168 40H88a40 40 0 0 0-40 39.76c0 40.55 7.51 71.4 13.85 90.14c11.05 32.66 23 43.37 26.61 46C91.57 174.67 105.59 152 128 152s36.45 22.71 39.49 63.94c3.6-2.59 15.57-13.26 26.66-46c6.34-18.78 13.85-49.63 13.85-90.18Z"></svg:path></svg:g>`,
})
export class PhToothDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToothFillIcon],svg[ph-tooth-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 24H88a56 56 0 0 0-56 55.75c0 42.72 8 75.4 14.7 95.28c8.72 25.8 20.62 45.49 32.64 54a15.67 15.67 0 0 0 9.13 2.97a16.09 16.09 0 0 0 16-14.9c.85-11.52 5-49.11 23.53-49.11s22.68 37.59 23.53 49.11a16.09 16.09 0 0 0 9.18 13.36a15.69 15.69 0 0 0 15.95-1.41c12-8.53 23.92-28.22 32.64-54c6.7-19.9 14.7-52.58 14.7-95.3A56 56 0 0 0 168 24m3 56.57a8 8 0 1 1-6 14.85l-37-14.81l-37 14.81a8 8 0 1 1-6-14.85L106.46 72L85 63.42a8 8 0 1 1 6-14.85l37 14.81l37-14.81a8 8 0 1 1 6 14.85L149.54 72Z"></svg:path>`,
})
export class PhToothFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToothLightIcon],svg[ph-tooth-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.23 69.57L144.16 80l26.07 10.43a6 6 0 1 1-4.46 11.14L128 86.46l-37.77 15.11a6 6 0 0 1-7.8-3.35a6 6 0 0 1 3.34-7.79L111.84 80L85.77 69.57a6 6 0 0 1 4.46-11.14L128 73.53l37.77-15.1a6 6 0 1 1 4.46 11.14M222 79.75c0 42.45-7.91 74.9-14.59 94.64c-8.59 25.41-20.22 44.74-31.91 53a13.7 13.7 0 0 1-13.94 1.23a14.1 14.1 0 0 1-8-11.69c-1.13-15.33-5.87-51-25.52-51s-24.39 35.64-25.52 51a14.1 14.1 0 0 1-14 13a13.7 13.7 0 0 1-8-2.58c-11.69-8.29-23.32-27.62-31.91-53C41.91 154.65 34 122.2 34 79.75A54 54 0 0 1 88 26h80a54 54 0 0 1 54 53.75m-12 0A42 42 0 0 0 168 38H88a42 42 0 0 0-42 41.76c-.07 73.93 24.69 126 41.44 137.88a1.77 1.77 0 0 0 1.88.15a2 2 0 0 0 1.19-1.71C93.46 176 106.77 154 128 154s34.54 22 37.49 62.09a2 2 0 0 0 1.19 1.71a1.77 1.77 0 0 0 1.88-.15c16.75-11.91 41.51-63.96 41.44-137.89Z"></svg:path>`,
})
export class PhToothLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToothThinIcon],svg[ph-tooth-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M169.49 67.71L138.77 80l30.72 12.28A4 4 0 0 1 168 100a3.9 3.9 0 0 1-1.49-.29L128 84.31l-38.51 15.4A3.9 3.9 0 0 1 88 100a4 4 0 0 1-1.49-7.72L117.23 80L86.51 67.71a4 4 0 0 1 3-7.43L128 75.69l38.51-15.41a4 4 0 0 1 3 7.43Zm50.51 12c.07 71.08-23.16 130.07-45.65 146.05a11.74 11.74 0 0 1-11.93 1a11.91 11.91 0 0 1-6.9-10C154.35 200.93 149.33 164 128 164s-26.35 36.94-27.52 52.82a12.11 12.11 0 0 1-12 11.19a11.77 11.77 0 0 1-6.83-2.2c-22.49-16-45.72-75-45.65-146A52 52 0 0 1 88 28h80a52 52 0 0 1 52 51.75Zm-8 0A44 44 0 0 0 168 36H88a44 44 0 0 0-44 43.76c-.07 67.58 21.9 125 42.29 139.51a3.77 3.77 0 0 0 3.89.33a4 4 0 0 0 2.32-3.37C95.36 177.39 108 156 128 156s32.64 21.4 35.5 60.24a4 4 0 0 0 2.32 3.37a3.77 3.77 0 0 0 3.89-.33C190.1 204.8 212.07 147.34 212 79.76Z"></svg:path>`,
})
export class PhToothThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTornadoIcon],svg[ph-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 40a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h168a8 8 0 0 1 8 8m-48 32a8 8 0 0 0-8-8H32a8 8 0 0 0 0 16h144a8 8 0 0 0 8-8m-16 32a8 8 0 0 0-8-8H56a8 8 0 0 0 0 16h104a8 8 0 0 0 8-8m16 32a8 8 0 0 0-8-8H88a8 8 0 0 0 0 16h88a8 8 0 0 0 8-8m0 24h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m-24 32h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m-32 32h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhTornadoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTornadoBoldIcon],svg[ph-tornado-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 44a12 12 0 0 1-12 12H60a12 12 0 0 1 0-24h160a12 12 0 0 1 12 12m-56 44a12 12 0 0 0-12-12H44a12 12 0 0 0 0 24h120a12 12 0 0 0 12-12m0 44a12 12 0 0 0-12-12H76a12 12 0 0 0 0 24h88a12 12 0 0 0 12-12m-4 32h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m-32 44h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhTornadoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTornadoDuotoneIcon],svg[ph-tornado-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M232 40a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h168a8 8 0 0 1 8 8m-48 32a8 8 0 0 0-8-8H32a8 8 0 0 0 0 16h144a8 8 0 0 0 8-8m-16 32a8 8 0 0 0-8-8H56a8 8 0 0 0 0 16h104a8 8 0 0 0 8-8m16 32a8 8 0 0 0-8-8H88a8 8 0 0 0 0 16h88a8 8 0 0 0 8-8m0 24h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m-24 32h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m-32 32h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhTornadoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTornadoFillIcon],svg[ph-tornado-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 228a12 12 0 0 1-12 12h-16a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12m76-196H60a12 12 0 0 0 0 24a12 12 0 0 1 0 24H44a12 12 0 0 0 0 24h32a12 12 0 0 1 0 24a12 12 0 0 0 0 24h48a12 12 0 0 1 0 24a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24a12 12 0 0 1 0-24h16a12 12 0 0 0 0-24h-24a12 12 0 0 1 0-24a12 12 0 0 0 0-24a12 12 0 0 1 0-24h56a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhTornadoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTornadoLightIcon],svg[ph-tornado-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 40a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h168a6 6 0 0 1 6 6m-48 32a6 6 0 0 0-6-6H32a6 6 0 0 0 0 12h144a6 6 0 0 0 6-6m-16 32a6 6 0 0 0-6-6H56a6 6 0 0 0 0 12h104a6 6 0 0 0 6-6m16 32a6 6 0 0 0-6-6H88a6 6 0 0 0 0 12h88a6 6 0 0 0 6-6m2 26h-64a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m-24 32h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m-32 32h-16a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTornadoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTornadoThinIcon],svg[ph-tornado-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 40a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h168a4 4 0 0 1 4 4m-48 32a4 4 0 0 0-4-4H32a4 4 0 0 0 0 8h144a4 4 0 0 0 4-4m-16 32a4 4 0 0 0-4-4H56a4 4 0 0 0 0 8h104a4 4 0 0 0 4-4m16 32a4 4 0 0 0-4-4H88a4 4 0 0 0 0 8h88a4 4 0 0 0 4-4m4 28h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m-24 32h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m-32 32h-16a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTornadoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToteIcon],svg[ph-tote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 69.4a16.13 16.13 0 0 0-12.08-5.4H176a48 48 0 0 0-96 0H32.08a16.13 16.13 0 0 0-12 5.4a16 16 0 0 0-3.92 12.48l14.26 120a16 16 0 0 0 16 14.12h163.25a16 16 0 0 0 16-14.12l14.26-120A16 16 0 0 0 236 69.4M128 32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m81.76 168a.13.13 0 0 1-.09 0H46.25L32.08 80H80v24a8 8 0 0 0 16 0V80h64v24a8 8 0 0 0 16 0V80h48Z"></svg:path>`,
})
export class PhToteIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToteBoldIcon],svg[ph-tote-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239 66.75A20.12 20.12 0 0 0 224 60h-44.17a52 52 0 0 0-103.66 0H32.08a20 20 0 0 0-19.94 22.35l14.25 120A20.06 20.06 0 0 0 46.33 220h163.34a20.06 20.06 0 0 0 19.94-17.65l14.25-120a20 20 0 0 0-4.86-15.6M128 36a28 28 0 0 1 27.71 24h-55.42A28 28 0 0 1 128 36m78.19 160H49.81L36.5 84H76v20a12 12 0 0 0 24 0V84h56v20a12 12 0 0 0 24 0V84h39.5Z"></svg:path>`,
})
export class PhToteBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToteDuotoneIcon],svg[ph-tote-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m231.94 80.93l-14.25 120a8.06 8.06 0 0 1-8 7.07H46.33a8.06 8.06 0 0 1-8-7.07l-14.25-120a8 8 0 0 1 8-8.93h191.84a8 8 0 0 1 8.02 8.93" opacity=".2"></svg:path><svg:path d="M236 69.4a16.13 16.13 0 0 0-12.08-5.4H176a48 48 0 0 0-96 0H32.08a16.13 16.13 0 0 0-12 5.4a16 16 0 0 0-3.92 12.48l14.26 120a16 16 0 0 0 16 14.12h163.25a16 16 0 0 0 16-14.12l14.26-120A16 16 0 0 0 236 69.4M128 32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m81.76 168a.13.13 0 0 1-.09 0H46.25L32.08 80H80v24a8 8 0 0 0 16 0V80h64v24a8 8 0 0 0 16 0V80h48Z"></svg:path></svg:g>`,
})
export class PhToteDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToteFillIcon],svg[ph-tote-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 69.4a16.13 16.13 0 0 0-12.08-5.4H176a48 48 0 0 0-96 0H32.08a16.13 16.13 0 0 0-12 5.4a16 16 0 0 0-3.92 12.48l14.26 120a16 16 0 0 0 16 14.12h163.25a16 16 0 0 0 16-14.12l14.26-120A16 16 0 0 0 236 69.4M96 104a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm32-72a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m48 72a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhToteFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToteLightIcon],svg[ph-tote-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.47 70.73A14.1 14.1 0 0 0 223.92 66H174v-2a46 46 0 0 0-92 0v2H32.08a14 14 0 0 0-14 15.64l14.25 120a14.06 14.06 0 0 0 14 12.36h163.34a14.06 14.06 0 0 0 14-12.36l14.25-120a14 14 0 0 0-3.45-10.91M94 64a34 34 0 0 1 68 0v2H94Zm117.73 136.23a2 2 0 0 1-2.06 1.77H46.33a2 2 0 0 1-2.06-1.77L30 80.23a1.92 1.92 0 0 1 .49-1.53a2.07 2.07 0 0 1 1.58-.7H82v26a6 6 0 0 0 12 0V78h68v26a6 6 0 0 0 12 0V78h49.92a2.07 2.07 0 0 1 1.58.7a1.92 1.92 0 0 1 .49 1.53Z"></svg:path>`,
})
export class PhToteLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToteSimpleIcon],svg[ph-tote-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 69.4a16.13 16.13 0 0 0-12.08-5.4H176a48 48 0 0 0-96 0H32.08a16.13 16.13 0 0 0-12 5.4a16 16 0 0 0-3.92 12.48l14.26 120a16 16 0 0 0 16 14.12h163.25a16 16 0 0 0 16-14.12l14.26-120A16 16 0 0 0 236 69.4M128 32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m81.76 168a.13.13 0 0 1-.09 0H46.25L32.08 80H224Z"></svg:path>`,
})
export class PhToteSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToteSimpleBoldIcon],svg[ph-tote-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239 66.75A20.12 20.12 0 0 0 224 60h-44.17a52 52 0 0 0-103.66 0H32.08a20 20 0 0 0-19.94 22.35l14.25 120A20.06 20.06 0 0 0 46.33 220h163.34a20.06 20.06 0 0 0 19.94-17.65l14.25-120a20 20 0 0 0-4.86-15.6M128 36a28 28 0 0 1 27.71 24h-55.42A28 28 0 0 1 128 36m78.19 160H49.81L36.5 84h183Z"></svg:path>`,
})
export class PhToteSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToteSimpleDuotoneIcon],svg[ph-tote-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m231.94 80.93l-14.25 120a8.06 8.06 0 0 1-8 7.07H46.33a8.06 8.06 0 0 1-8-7.07l-14.25-120a8 8 0 0 1 8-8.93h191.84a8 8 0 0 1 8.02 8.93" opacity=".2"></svg:path><svg:path d="M236 69.4a16.13 16.13 0 0 0-12.08-5.4H176a48 48 0 0 0-96 0H32.08a16.13 16.13 0 0 0-12 5.4a16 16 0 0 0-3.92 12.48l14.26 120a16 16 0 0 0 16 14.12h163.25a16 16 0 0 0 16-14.12l14.26-120A16 16 0 0 0 236 69.4M128 32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m81.76 168a.13.13 0 0 1-.09 0H46.25L32.08 80H224Z"></svg:path></svg:g>`,
})
export class PhToteSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToteSimpleFillIcon],svg[ph-tote-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 69.4a16.13 16.13 0 0 0-12.08-5.4H176a48 48 0 0 0-96 0H32.08a16.13 16.13 0 0 0-12 5.4a16 16 0 0 0-3.92 12.48l14.26 120a16 16 0 0 0 16 14.12h163.25a16 16 0 0 0 16-14.12l14.26-120A16 16 0 0 0 236 69.4M128 32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32"></svg:path>`,
})
export class PhToteSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToteSimpleLightIcon],svg[ph-tote-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.47 70.73A14.1 14.1 0 0 0 223.92 66H174v-2a46 46 0 0 0-92 0v2H32.08a14 14 0 0 0-14 15.64l14.25 120a14.06 14.06 0 0 0 14 12.36h163.34a14.06 14.06 0 0 0 14-12.36l14.25-120a14 14 0 0 0-3.45-10.91M94 64a34 34 0 0 1 68 0v2H94Zm117.73 136.23a2 2 0 0 1-2.06 1.77H46.33a2 2 0 0 1-2.06-1.77L30 80.23a1.92 1.92 0 0 1 .49-1.53a2.07 2.07 0 0 1 1.58-.7h191.85a2.07 2.07 0 0 1 1.58.7a1.92 1.92 0 0 1 .49 1.53Z"></svg:path>`,
})
export class PhToteSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToteSimpleThinIcon],svg[ph-tote-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233 72.06a12.1 12.1 0 0 0-9.08-4.06H172v-4a44 44 0 0 0-88 0v4H32.08A12.1 12.1 0 0 0 23 72.06a12 12 0 0 0-2.94 9.35l14.26 120a12 12 0 0 0 12 10.59h163.35a12 12 0 0 0 12-10.59l14.26-120a12 12 0 0 0-2.93-9.35M92 64a36 36 0 0 1 72 0v4H92Zm136 16.46l-14.25 120a4 4 0 0 1-4.05 3.54H46.33a4 4 0 0 1-4-3.54L28 80.46a3.9 3.9 0 0 1 1-3.09A4.08 4.08 0 0 1 32.08 76h191.84a4.08 4.08 0 0 1 3.08 1.37a3.9 3.9 0 0 1 1 3.09"></svg:path>`,
})
export class PhToteSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToteThinIcon],svg[ph-tote-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233 72.06a12.1 12.1 0 0 0-9.08-4.06H172v-4a44 44 0 0 0-88 0v4H32.08A12.1 12.1 0 0 0 23 72.06a12 12 0 0 0-2.94 9.35l14.26 120a12 12 0 0 0 12 10.59h163.35a12 12 0 0 0 12-10.59l14.26-120a12 12 0 0 0-2.93-9.35M92 64a36 36 0 0 1 72 0v4H92Zm136 16.46l-14.25 120a4 4 0 0 1-4.05 3.54H46.33a4 4 0 0 1-4-3.54L28 80.46a3.9 3.9 0 0 1 1-3.09A4.08 4.08 0 0 1 32.08 76H84v28a4 4 0 0 0 8 0V76h72v28a4 4 0 0 0 8 0V76h51.92a4.08 4.08 0 0 1 3.08 1.37a3.9 3.9 0 0 1 1 3.09"></svg:path>`,
})
export class PhToteThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTowelIcon],svg[ph-towel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H72a24 24 0 0 0-24 24v168a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16V48a8 8 0 0 1 16 0v104a8 8 0 0 0 16 0V48a24 24 0 0 0-24-24M72 40h105.37a23.8 23.8 0 0 0-1.37 8v136H64V48a8 8 0 0 1 8-8m-8 176v-16h112v16Z"></svg:path>`,
})
export class PhTowelIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTowelBoldIcon],svg[ph-towel-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M197.16 20H72a28 28 0 0 0-28 28v168a20 20 0 0 0 20 20h104a20 20 0 0 0 20-20V52a8 8 0 0 1 8-8h.35a8.33 8.33 0 0 1 7.7 8.48V148a12 12 0 0 0 24 0V52.48A32.13 32.13 0 0 0 197.16 20M72 44h93a32.2 32.2 0 0 0-1 8v120H68V48a4 4 0 0 1 4-4m-4 168v-16h96v16Z"></svg:path>`,
})
export class PhTowelBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTowelDuotoneIcon],svg[ph-towel-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 192v24a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8v-24Z" opacity=".2"></svg:path><svg:path d="M200 24H72a24 24 0 0 0-24 24v168a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16V48a8 8 0 0 1 16 0v104a8 8 0 0 0 16 0V48a24 24 0 0 0-24-24M72 40h105.37a23.8 23.8 0 0 0-1.37 8v136H64V48a8 8 0 0 1 8-8m-8 176v-16h112v16Z"></svg:path></svg:g>`,
})
export class PhTowelDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTowelFillIcon],svg[ph-towel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48v104a8 8 0 0 1-8.53 8a8.17 8.17 0 0 1-7.47-8.25V48a8 8 0 0 0-8.55-8a8.19 8.19 0 0 0-7.45 8.28V180a4 4 0 0 1-4 4H52a4 4 0 0 1-4-4V48a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24m-36 152H52a4 4 0 0 0-4 4v12a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-12a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhTowelFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTowelLightIcon],svg[ph-towel-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 26H72a22 22 0 0 0-22 22v168a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14V48a10 10 0 0 1 20 0v104a6 6 0 0 0 12 0V48a22 22 0 0 0-22-22M72 38h108.41A21.84 21.84 0 0 0 178 48v138H62V48a10 10 0 0 1 10-10m104 180H64a2 2 0 0 1-2-2v-18h116v18a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhTowelLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTowelThinIcon],svg[ph-towel-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 28H72a20 20 0 0 0-20 20v168a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12V48a12 12 0 0 1 24 0v104a4 4 0 0 0 8 0V48a20 20 0 0 0-20-20M72 36h112a19.86 19.86 0 0 0-4 12v140H60V48a12 12 0 0 1 12-12m104 184H64a4 4 0 0 1-4-4v-20h120v20a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhTowelThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTractorIcon],svg[ph-tractor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 165.41V134a15.89 15.89 0 0 0-11.4-15.32l-.21-.06l-36.39-9.91V72a8 8 0 0 0-16 0v32.38l-24-6.5V56h8a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16h8v32h-8a8 8 0 0 0 0 16h28a68.07 68.07 0 0 1 68 68v12a8 8 0 0 0 8 8h32.23A36 36 0 1 0 240 165.41M68 88h-4V56h72v66.77A83.92 83.92 0 0 0 68 88m84 26.45L224 134v20.1a36 36 0 0 0-45.94 21.9H152ZM212 208a20 20 0 1 1 20-20a20 20 0 0 1-20 20M68 120a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52m0 88a36 36 0 1 1 36-36a36 36 0 0 1-36 36m12-36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTractorIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTractorBoldIcon],svg[ph-tractor-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 164v-30a19.87 19.87 0 0 0-14.25-19.15l-.31-.09l-33.44-9.11V76a12 12 0 0 0-24 0v23.15l-16-4.33V60h4a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24h4v24h-4a12 12 0 0 0 0 24h28a64.07 64.07 0 0 1 64 64v12a12 12 0 0 0 12 12h28.8a40 40 0 1 0 71.2-32m-112-52.33A87.75 87.75 0 0 0 68 84V60h64ZM175.35 172H156v-52.32L220 137v11.8a40.6 40.6 0 0 0-8-.8a40.06 40.06 0 0 0-36.65 24M212 204a16 16 0 1 1 16-16a16 16 0 0 1-16 16M64 124a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52m0 80a28 28 0 1 1 28-28a28 28 0 0 1-28 28m16-28a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhTractorBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTractorDuotoneIcon],svg[ph-tractor-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 188a28 28 0 1 1-28-28a28 28 0 0 1 28 28M68 128a44 44 0 1 0 44 44a44 44 0 0 0-44-44" opacity=".2"></svg:path><svg:path d="M240 165.41V134a15.89 15.89 0 0 0-11.4-15.32l-.21-.06l-36.39-9.91V72a8 8 0 0 0-16 0v32.38l-24-6.5V56h8a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16h8v32h-8a8 8 0 0 0 0 16h28a68.07 68.07 0 0 1 68 68v12a8 8 0 0 0 8 8h32.23A36 36 0 1 0 240 165.41M68 88h-4V56h72v66.77A83.92 83.92 0 0 0 68 88m84 26.45L224 134v20.1a36 36 0 0 0-45.94 21.9H152ZM212 208a20 20 0 1 1 20-20a20 20 0 0 1-20 20M68 120a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52m0 88a36 36 0 1 1 36-36a36 36 0 0 1-36 36m12-36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhTractorDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTractorFillIcon],svg[ph-tractor-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 172a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a52 52 0 1 1-52-52a52.06 52.06 0 0 1 52 52m-24 0a28 28 0 1 0-28 28a28 28 0 0 0 28-28m152 16a36 36 0 0 1-71.77 4H144a8 8 0 0 1-8-8v-12a68.07 68.07 0 0 0-68-68H40a8 8 0 0 1 0-16h8V56h-8a8 8 0 0 1 0-16h120a8 8 0 0 1 0 16h-8v41.88l24 6.5V72a8 8 0 0 1 16 0v36.71l36.39 9.86l.21.06A15.89 15.89 0 0 1 240 134v31.46a35.8 35.8 0 0 1 8 22.54m-20 0a16 16 0 1 0-16 16a16 16 0 0 0 16-16"></svg:path>`,
})
export class PhTractorFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTractorLightIcon],svg[ph-tractor-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 166.12V134a13.91 13.91 0 0 0-10-13.41h-.15L190 110.24V72a6 6 0 0 0-12 0v35l-28-7.58V54h10a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12h10v36H40a6 6 0 0 0 0 12h28a70.08 70.08 0 0 1 70 70v12a6 6 0 0 0 6 6h34.06A34 34 0 1 0 238 166.12M68 90h-6V54h76v75.34A82 82 0 0 0 68 90m82 82v-60.16l74.63 20.21A2 2 0 0 1 226 134v23a34 34 0 0 0-46.5 21H150Zm62 38a22 22 0 1 1 22-22a22 22 0 0 1-22 22M68 122a50 50 0 1 0 50 50a50.06 50.06 0 0 0-50-50m0 88a38 38 0 1 1 38-38a38 38 0 0 1-38 38m10-38a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhTractorLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTractorThinIcon],svg[ph-tractor-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 166.87V134a11.92 11.92 0 0 0-8.55-11.49h-.11L188 111.77V72a4 4 0 0 0-8 0v37.61l-32-8.67V52h12a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8h12v40H40a4 4 0 0 0 0 8h28a72.08 72.08 0 0 1 72 72v12a4 4 0 0 0 4 4h36a32 32 0 1 0 56-21.13M68 92h-8V52h80v85.15A80.1 80.1 0 0 0 68 92m80 88v-70.77l77.19 20.9A4 4 0 0 1 228 134v26.36a31.7 31.7 0 0 0-16-4.36a32.06 32.06 0 0 0-31 24Zm64 32a24 24 0 1 1 24-24a24 24 0 0 1-24 24M68 124a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 88a40 40 0 1 1 40-40a40 40 0 0 1-40 40m8-40a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTractorThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrademarkIcon],svg[ph-trademark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-16-112a8 8 0 0 1-8 8h-8v40a8 8 0 0 1-16 0v-40h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m80 0v48a8 8 0 0 1-16 0v-26.71l-14 16a8 8 0 0 1-12 0l-14-16V152a8 8 0 0 1-16 0v-48a8 8 0 0 1 14-5.27l22 25.12l22-25.12a8 8 0 0 1 14 5.27"></svg:path>`,
})
export class PhTrademarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrademarkBoldIcon],svg[ph-trademark-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m64-104v40a12 12 0 0 1-24 0v-13.91l-8.19 7a12 12 0 0 1-15.62 0l-8.19-7V148a12 12 0 0 1-24 0v-28h-12v28a12 12 0 0 1-24 0v-28h-4a12 12 0 0 1 0-24h52a12 12 0 0 1 7.81 2.89L152 116.2l20.19-17.31A12 12 0 0 1 192 108"></svg:path>`,
})
export class PhTrademarkBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrademarkDuotoneIcon],svg[ph-trademark-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-16-112a8 8 0 0 1-8 8h-8v40a8 8 0 0 1-16 0v-40h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m80 0v48a8 8 0 0 1-16 0v-26.71l-14 16a8 8 0 0 1-12 0l-14-16V152a8 8 0 0 1-16 0v-48a8 8 0 0 1 14-5.27l22 25.12l22-25.12a8 8 0 0 1 14 5.27"></svg:path></svg:g>`,
})
export class PhTrademarkDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrademarkFillIcon],svg[ph-trademark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-24 88h-8v40a8 8 0 0 1-16 0v-40h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16m88 40a8 8 0 0 1-16 0v-26.71l-14 16a8 8 0 0 1-12 0l-14-16V152a8 8 0 0 1-16 0v-48a8 8 0 0 1 14-5.27l22 25.12l22-25.12a8 8 0 0 1 14 5.27Z"></svg:path>`,
})
export class PhTrademarkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrademarkLightIcon],svg[ph-trademark-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m-18-114a6 6 0 0 1-6 6H94v42a6 6 0 0 1-12 0v-42H72a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m80 0v48a6 6 0 0 1-12 0v-32l-17.48 20a6 6 0 0 1-9 0L134 120v32a6 6 0 0 1-12 0v-48a6 6 0 0 1 10.52-4L156 126.89l23.48-26.84A6 6 0 0 1 190 104"></svg:path>`,
})
export class PhTrademarkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrademarkRegisteredIcon],svg[ph-trademark-registered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m23.09-75.79A32 32 0 0 0 136 80h-32a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0v-24h22.39l19 28.44a8 8 0 0 0 13.32-8.88ZM112 96h24a16 16 0 0 1 0 32h-24Z"></svg:path>`,
})
export class PhTrademarkRegisteredIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrademarkRegisteredBoldIcon],svg[ph-trademark-registered-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m28.7-70.58A36 36 0 0 0 136 76h-32a12 12 0 0 0-12 12v80a12 12 0 0 0 24 0v-20h16.24L150 174.66a12 12 0 0 0 20-13.32ZM116 100h20a12 12 0 0 1 0 24h-20Z"></svg:path>`,
})
export class PhTrademarkRegisteredBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrademarkRegisteredDuotoneIcon],svg[ph-trademark-registered-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m23.09-75.79A32 32 0 0 0 136 80h-32a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0v-24h22.39l19 28.44a8 8 0 0 0 13.32-8.88ZM112 96h24a16 16 0 0 1 0 32h-24Z"></svg:path></svg:g>`,
})
export class PhTrademarkRegisteredDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrademarkRegisteredFillIcon],svg[ph-trademark-registered-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 112a16 16 0 0 1-16 16h-24V96h24a16 16 0 0 1 16 16m80 16A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88m-16 0a72 72 0 1 1-72-72a72.08 72.08 0 0 1 72 72m-33.34 35.56l-15.57-23.35A32 32 0 0 0 136 80h-32a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0v-24h22.39l19 28.44a8 8 0 0 0 13.32-8.88Z"></svg:path>`,
})
export class PhTrademarkRegisteredFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrademarkRegisteredLightIcon],svg[ph-trademark-registered-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m20.16-78.58A30 30 0 0 0 136 82h-32a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0v-26h25.46L155 171.33a6 6 0 1 0 10-6.66ZM110 94h26a18 18 0 0 1 0 36h-26Z"></svg:path>`,
})
export class PhTrademarkRegisteredLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrademarkRegisteredThinIcon],svg[ph-trademark-registered-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m17.12-81.53A28 28 0 0 0 136 84h-32a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0v-28h28.52l20.15 30.23a4 4 0 0 0 6.66-4.44ZM108 92h28a20 20 0 0 1 0 40h-28Z"></svg:path>`,
})
export class PhTrademarkRegisteredThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrademarkThinIcon],svg[ph-trademark-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m-20-116a4 4 0 0 1-4 4H92v44a4 4 0 0 1-8 0v-44H72a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m80 0v48a4 4 0 0 1-8 0v-37.35l-21 24a4 4 0 0 1-6 0l-21-24V152a4 4 0 0 1-8 0v-48a4 4 0 0 1 7-2.63l25 28.56l25-28.56a4 4 0 0 1 7 2.63"></svg:path>`,
})
export class PhTrademarkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficConeIcon],svg[ph-traffic-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 208h-18.31L153.42 34.75A16 16 0 0 0 138.31 24h-20.62a16 16 0 0 0-15.11 10.74L42.31 208H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M95.43 104h65.14l16.7 48H78.73Zm22.26-64h20.62L155 88h-54ZM73.17 168h109.66l13.92 40H59.25Z"></svg:path>`,
})
export class PhTrafficConeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficConeBoldIcon],svg[ph-traffic-cone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 204h-15.47L157.2 33.43A20 20 0 0 0 138.31 20h-20.62A20 20 0 0 0 98.8 33.43L39.47 204H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24M98.27 108h59.46l13.91 40H84.36Zm22.26-64h14.94l13.91 40h-42.76ZM76 172h104l11.13 32H64.88Z"></svg:path>`,
})
export class PhTrafficConeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficConeDuotoneIcon],svg[ph-traffic-cone-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M188.52 160h-121l22.22-64h76.52Z" opacity=".2"></svg:path><svg:path d="M232 208h-18.31L153.42 34.75A16 16 0 0 0 138.31 24h-20.62a16 16 0 0 0-15.11 10.74L42.31 208H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M117.69 40h20.62L155 88h-54Zm-22.26 64h65.14l16.7 48H78.73ZM59.25 208l13.92-40h109.66l13.92 40Z"></svg:path></svg:g>`,
})
export class PhTrafficConeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficConeFillIcon],svg[ph-traffic-cone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 208h-18.31L153.42 34.75A16 16 0 0 0 138.31 24h-20.62a16 16 0 0 0-15.11 10.74L42.31 208H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M95.43 104h65.14l16.7 48H78.73Z"></svg:path>`,
})
export class PhTrafficConeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficConeLightIcon],svg[ph-traffic-cone-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 210h-19.73L151.54 35.4a14 14 0 0 0-13.23-9.4h-20.62a14 14 0 0 0-13.23 9.4L43.73 210H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12M94 102h68l18.08 52H75.92Zm21.8-62.66a2 2 0 0 1 1.89-1.34h20.62a2 2 0 0 1 1.89 1.34L157.82 90H98.18ZM71.74 166h112.52l15.3 44H56.44Z"></svg:path>`,
})
export class PhTrafficConeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficConeThinIcon],svg[ph-traffic-cone-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 212h-21.16L149.65 36.06A12 12 0 0 0 138.31 28h-20.62a12 12 0 0 0-11.34 8.06L45.16 212H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8M92.58 100h70.84l19.47 56H73.11Zm21.33-61.31a4 4 0 0 1 3.78-2.69h20.62a4 4 0 0 1 3.78 2.69L160.63 92H95.37ZM70.32 164h115.36l16.69 48H53.63Z"></svg:path>`,
})
export class PhTrafficConeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignIcon],svg[ph-traffic-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.15 116.29L139.71 12.85a16.56 16.56 0 0 0-23.42 0L12.85 116.29a16.56 16.56 0 0 0 0 23.42l103.44 103.44a16.56 16.56 0 0 0 23.42 0l103.44-103.44a16.56 16.56 0 0 0 0-23.42m-11.31 12.1L128.4 231.84a.58.58 0 0 1-.8 0L24.16 128.39a.56.56 0 0 1 0-.78L127.6 24.16a.58.58 0 0 1 .8 0l103.44 103.45a.56.56 0 0 1 0 .78m-58.18-14a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L148.69 128H112a16 16 0 0 0-16 16v8a8 8 0 0 1-16 0v-8a32 32 0 0 1 32-32h36.69l-10.35-10.34a8 8 0 0 1 11.32-11.32Z"></svg:path>`,
})
export class PhTrafficSignIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignBoldIcon],svg[ph-traffic-sign-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 113.46L142.54 10a20.57 20.57 0 0 0-29.08 0L10 113.46a20.57 20.57 0 0 0 0 29.08L113.46 246a20.57 20.57 0 0 0 29.08 0L246 142.54a20.57 20.57 0 0 0 0-29.08M128 226.57L29.43 128L128 29.43L226.57 128Zm7.51-122.08a12 12 0 0 1 17-17l24 24a12 12 0 0 1 0 17l-24 24a12 12 0 0 1-17-17L139 132h-27a12 12 0 0 0-12 12v4a12 12 0 0 1-24 0v-4a36 36 0 0 1 36-36h27Z"></svg:path>`,
})
export class PhTrafficSignBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignDuotoneIcon],svg[ph-traffic-sign-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M237.49 134.05L134.05 237.49a8.54 8.54 0 0 1-12.1 0L18.51 134.05a8.54 8.54 0 0 1 0-12.1L122 18.51a8.54 8.54 0 0 1 12.1 0L237.49 122a8.54 8.54 0 0 1 0 12.05" opacity=".2"></svg:path><svg:path d="M243.15 116.29L139.71 12.85a16.56 16.56 0 0 0-23.42 0L12.85 116.29a16.56 16.56 0 0 0 0 23.42l103.44 103.44a16.56 16.56 0 0 0 23.42 0l103.44-103.44a16.56 16.56 0 0 0 0-23.42m-11.31 12.1L128.39 231.84a.56.56 0 0 1-.78 0L24.16 128.39a.56.56 0 0 1 0-.78L127.61 24.16A.52.52 0 0 1 128 24a.58.58 0 0 1 .4.16l103.44 103.45a.56.56 0 0 1 0 .78m-58.18-14a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L148.69 128H112a16 16 0 0 0-16 16v8a8 8 0 0 1-16 0v-8a32 32 0 0 1 32-32h36.69l-10.35-10.34a8 8 0 0 1 11.32-11.32Z"></svg:path></svg:g>`,
})
export class PhTrafficSignDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignFillIcon],svg[ph-traffic-sign-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.15 116.29L139.71 12.85a16.56 16.56 0 0 0-23.42 0L12.85 116.29a16.56 16.56 0 0 0 0 23.42l103.44 103.44a16.56 16.56 0 0 0 23.42 0l103.44-103.44a16.56 16.56 0 0 0 0-23.42m-69.49 9.37l-24 24a8 8 0 0 1-11.32-11.32L148.69 128H112a16 16 0 0 0-16 16v8a8 8 0 0 1-16 0v-8a32 32 0 0 1 32-32h36.69l-10.35-10.34a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhTrafficSignFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignLightIcon],svg[ph-traffic-sign-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.74 117.71L138.29 14.26a14.56 14.56 0 0 0-20.58 0L14.26 117.71a14.56 14.56 0 0 0 0 20.58l103.45 103.45a14.56 14.56 0 0 0 20.58 0l103.45-103.45a14.56 14.56 0 0 0 0-20.58m-8.49 12.1L129.81 233.25a2.56 2.56 0 0 1-3.62 0L22.75 129.81a2.56 2.56 0 0 1 0-3.62L126.19 22.75a2.56 2.56 0 0 1 3.62 0l103.44 103.44a2.56 2.56 0 0 1 0 3.62m-61-14a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48-8.48L153.51 126H112a18 18 0 0 0-18 18v8a6 6 0 0 1-12 0v-8a30 30 0 0 1 30-30h41.51l-13.75-13.76a6 6 0 0 1 8.48-8.48Z"></svg:path>`,
})
export class PhTrafficSignLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignThinIcon],svg[ph-traffic-sign-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240.32 119.12L136.88 15.68a12.55 12.55 0 0 0-17.76 0L15.68 119.12a12.55 12.55 0 0 0 0 17.76l103.44 103.44a12.55 12.55 0 0 0 17.76 0l103.44-103.44a12.55 12.55 0 0 0 0-17.76m-5.66 12.1L131.22 234.67a4.56 4.56 0 0 1-6.44 0L21.33 131.22a4.55 4.55 0 0 1 0-6.44L124.78 21.33a4.56 4.56 0 0 1 6.44 0l103.45 103.45a4.55 4.55 0 0 1 0 6.44Zm-63.83-14a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L158.34 124H112a20 20 0 0 0-20 20v8a4 4 0 0 1-8 0v-8a28 28 0 0 1 28-28h46.34l-17.17-17.17a4 4 0 0 1 5.66-5.66Z"></svg:path>`,
})
export class PhTrafficSignThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignalIcon],svg[ph-traffic-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 56a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m88-40h-16V80h16a8 8 0 0 0 0-16h-16V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v24H40a8 8 0 0 0 0 16h16v64H40a8 8 0 0 0 0 16h16v56a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-56h16a8 8 0 0 0 0-16m-32 72H72V40h112z"></svg:path>`,
})
export class PhTrafficSignalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignalBoldIcon],svg[ph-traffic-signal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 140h-12V84h12a12 12 0 0 0 0-24h-12V40a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v20H40a12 12 0 0 0 0 24h12v56H40a12 12 0 0 0 0 24h12v52a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20v-52h12a12 12 0 0 0 0-24m-36 72H76V44h104Zm-52-92a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-40a8 8 0 1 1-8 8a8 8 0 0 1 8-8m0 120a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-40a8 8 0 1 1-8 8a8 8 0 0 1 8-8"></svg:path>`,
})
export class PhTrafficSignalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignalDuotoneIcon],svg[ph-traffic-signal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 32H72a8 8 0 0 0-8 8v176a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-56 160a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-80a24 24 0 1 1 24-24a24 24 0 0 1-24 24" opacity=".2"></svg:path><svg:path d="M128 56a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m88-40h-16V80h16a8 8 0 0 0 0-16h-16V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v24H40a8 8 0 0 0 0 16h16v64H40a8 8 0 0 0 0 16h16v56a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-56h16a8 8 0 0 0 0-16m-32 72H72V40h112z"></svg:path></svg:g>`,
})
export class PhTrafficSignalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignalFillIcon],svg[ph-traffic-signal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 144h-16V80h16a8 8 0 0 0 0-16h-16V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v24H40a8 8 0 0 0 0 16h16v64H40a8 8 0 0 0 0 16h16v56a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-56h16a8 8 0 0 0 0-16m-88-28a28 28 0 1 1 28-28a28 28 0 0 1-28 28m0 24a28 28 0 1 1-28 28a28 28 0 0 1 28-28"></svg:path>`,
})
export class PhTrafficSignalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignalLightIcon],svg[ph-traffic-signal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 58a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18m0 32a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18m88-40h-18V78h18a6 6 0 0 0 0-12h-18V40a14 14 0 0 0-14-14H72a14 14 0 0 0-14 14v26H40a6 6 0 0 0 0 12h18v68H40a6 6 0 0 0 0 12h18v58a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-58h18a6 6 0 0 0 0-12m-30 70a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhTrafficSignalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignalThinIcon],svg[ph-traffic-signal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 60a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20m0 32a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20m88-40h-20V76h20a4 4 0 0 0 0-8h-20V40a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v28H40a4 4 0 0 0 0 8h20v72H40a4 4 0 0 0 0 8h20v60a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-60h20a4 4 0 0 0 0-8m-28 68a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhTrafficSignalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainIcon],svg[ph-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 24H72a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h8l-14.4 19.2a8 8 0 1 0 12.8 9.6L100 216h56l21.6 28.8a8 8 0 1 0 12.8-9.6L176 216h8a32 32 0 0 0 32-32V56a32 32 0 0 0-32-32M56 120V80h64v40Zm80-40h64v40h-64ZM72 40h112a16 16 0 0 1 16 16v8H56v-8a16 16 0 0 1 16-16m112 160H72a16 16 0 0 1-16-16v-48h144v48a16 16 0 0 1-16 16m-88-28a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTrainIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainBoldIcon],svg[ph-train-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 20H72a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36l-9.6 12.8a12 12 0 1 0 19.2 14.4L102 220h52l20.4 27.2a12 12 0 0 0 19.2-14.4L184 220a36 36 0 0 0 36-36V56a36 36 0 0 0-36-36M60 116V84h56v32Zm80-32h56v32h-56ZM72 44h112a12 12 0 0 1 12 12v4H60v-4a12 12 0 0 1 12-12m112 152H72a12 12 0 0 1-12-12v-44h136v44a12 12 0 0 1-12 12m-80-28a16 16 0 1 1-16-16a16 16 0 0 1 16 16m80 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhTrainBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainDuotoneIcon],svg[ph-train-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 72v56H48V72Z" opacity=".2"></svg:path><svg:path d="M184 24H72a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h8l-14.4 19.2a8 8 0 1 0 12.8 9.6L100 216h56l21.6 28.8a8 8 0 1 0 12.8-9.6L176 216h8a32 32 0 0 0 32-32V56a32 32 0 0 0-32-32M56 120V80h64v40Zm80-40h64v40h-64ZM72 40h112a16 16 0 0 1 16 16v8H56v-8a16 16 0 0 1 16-16m112 160H72a16 16 0 0 1-16-16v-48h144v48a16 16 0 0 1-16 16m-88-28a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhTrainDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainFillIcon],svg[ph-train-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 24H72a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h8l-14.4 19.2a8 8 0 1 0 12.8 9.6L100 216h56l21.6 28.8a8 8 0 1 0 12.8-9.6L176 216h8a32 32 0 0 0 32-32V56a32 32 0 0 0-32-32M84 184a12 12 0 1 1 12-12a12 12 0 0 1-12 12m36-64H56V80h64Zm52 64a12 12 0 1 1 12-12a12 12 0 0 1-12 12m28-64h-64V80h64Z"></svg:path>`,
})
export class PhTrainFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainLightIcon],svg[ph-train-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 26H72a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h12l-16.8 22.4a6 6 0 1 0 9.6 7.2L99 214h58l22.2 29.6a6 6 0 0 0 9.6-7.2L172 214h12a30 30 0 0 0 30-30V56a30 30 0 0 0-30-30M54 122V78h68v44Zm80-44h68v44h-68ZM72 38h112a18 18 0 0 1 18 18v10H54V56a18 18 0 0 1 18-18m112 164H72a18 18 0 0 1-18-18v-50h148v50a18 18 0 0 1-18 18m-2-30a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-88 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhTrainLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainRegionalIcon],svg[ph-train-regional-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.72 117.9l-22.39-82.11A16 16 0 0 0 185.89 24H70.11a16 16 0 0 0-15.44 11.79L32.28 117.9a8.1 8.1 0 0 0 0 4.2l22.39 82.11A16 16 0 0 0 70.11 216H80l-14.4 19.2a8 8 0 1 0 12.8 9.6L100 216h56l21.6 28.8a8 8 0 1 0 12.8-9.6L176 216h9.89a16 16 0 0 0 15.44-11.79l22.39-82.11a8.1 8.1 0 0 0 0-4.2M70.11 40h115.78L206 113.69l-78 14.18l-78-14.18Zm-19 90.14L120 142.68V200H70.11ZM185.89 200H136v-57.32l68.94-12.54ZM88 88a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhTrainRegionalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainRegionalBoldIcon],svg[ph-train-regional-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.58 116.84l-22.4-82.1A20 20 0 0 0 185.89 20H70.11a20 20 0 0 0-19.29 14.74l-22.4 82.1a12.1 12.1 0 0 0 0 6.32l22.4 82.1A20 20 0 0 0 70.11 220H72l-9.6 12.8a12 12 0 1 0 19.2 14.4L102 220h52l20.4 27.2a12 12 0 0 0 19.2-14.4L184 220h1.89a20 20 0 0 0 19.29-14.74l22.4-82.1a12.1 12.1 0 0 0 0-6.32M73.17 44h109.66L201 110.53l-73 13.27l-73-13.27Zm-16.58 91.21L116 146v50H73.17ZM182.83 196H140v-50l59.41-10.8ZM84 88a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhTrainRegionalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainRegionalDuotoneIcon],svg[ph-train-regional-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m216 120l-22.39 82.1a8 8 0 0 1-7.72 5.9H70.11a8 8 0 0 1-7.72-5.9L40 120l88 16Z" opacity=".2"></svg:path><svg:path d="m223.72 117.9l-22.39-82.11A16 16 0 0 0 185.89 24H70.11a16 16 0 0 0-15.44 11.79L32.28 117.9a8.1 8.1 0 0 0 0 4.2l22.39 82.11A16 16 0 0 0 70.11 216H80l-14.4 19.2a8 8 0 1 0 12.8 9.6L100 216h56l21.6 28.8a8 8 0 1 0 12.8-9.6L176 216h9.89a16 16 0 0 0 15.44-11.79l22.39-82.11a8.1 8.1 0 0 0 0-4.2M70.11 40h115.78L206 113.69l-78 14.18l-78-14.18Zm-19 90.14L120 142.68V200H70.11ZM185.89 200H136v-57.32l68.94-12.54ZM88 88a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhTrainRegionalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainRegionalFillIcon],svg[ph-train-regional-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 88a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m55.72 34.1l-22.39 82.11A16 16 0 0 1 185.89 216H176l14.4 19.2a8 8 0 1 1-12.8 9.6L156 216h-56l-21.6 28.8a8 8 0 1 1-12.8-9.6L80 216h-9.89a16 16 0 0 1-15.44-11.79L32.28 122.1a8.1 8.1 0 0 1 0-4.2l22.39-82.11A16 16 0 0 1 70.11 24h115.78a16 16 0 0 1 15.44 11.79l22.39 82.11a8.1 8.1 0 0 1 0 4.2M136 152a8 8 0 0 0-16 0v40a8 8 0 0 0 16 0Zm70-38.31L185.89 40H70.11L50 113.69l78 14.18Z"></svg:path>`,
})
export class PhTrainRegionalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainRegionalLightIcon],svg[ph-train-regional-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.79 118.42l-22.39-82.1A14 14 0 0 0 185.89 26H70.11A14 14 0 0 0 56.6 36.32l-22.39 82.1a6 6 0 0 0 0 3.16l22.39 82.1A14 14 0 0 0 70.11 214H84l-16.8 22.4a6 6 0 1 0 9.6 7.2L99 214h58l22.2 29.6a6 6 0 0 0 9.6-7.2L172 214h13.89a14 14 0 0 0 13.51-10.32l22.39-82.1a6 6 0 0 0 0-3.16M68.18 39.47A2 2 0 0 1 70.11 38h115.78a2 2 0 0 1 1.93 1.47l20.67 75.8L128 129.9l-80.49-14.63Zm0 161.06l-19.89-72.92L122 141v61H70.11a2 2 0 0 1-1.93-1.47m119.64 0a2 2 0 0 1-1.93 1.47H134v-61l73.71-13.4ZM90 88a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhTrainRegionalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainRegionalThinIcon],svg[ph-train-regional-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m219.86 119l-22.39-82.16A12 12 0 0 0 185.89 28H70.11a12 12 0 0 0-11.58 8.84L36.14 119a3.94 3.94 0 0 0 0 2.1l22.39 82.11A12 12 0 0 0 70.11 212H88l-19.2 25.6a4 4 0 1 0 6.4 4.8L98 212h60l22.8 30.4a4 4 0 0 0 6.4-4.8L168 212h17.89a12 12 0 0 0 11.58-8.84l22.39-82.11a3.94 3.94 0 0 0 0-2.05M66.25 39a4 4 0 0 1 3.86-3h115.78a4 4 0 0 1 3.86 3L211 116.84l-83 15.09l-83-15.09Zm0 162.1l-20.72-76L124 139.34V204H70.11a4 4 0 0 1-3.86-2.95Zm123.5 0a4 4 0 0 1-3.86 2.95H132v-64.71l78.47-14.27ZM92 88a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhTrainRegionalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainSimpleIcon],svg[ph-train-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 24H72a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h8l-14.4 19.2a8 8 0 1 0 12.8 9.6L100 216h56l21.6 28.8a8 8 0 1 0 12.8-9.6L176 216h8a32 32 0 0 0 32-32V56a32 32 0 0 0-32-32M72 40h112a16 16 0 0 1 16 16v64H56V56a16 16 0 0 1 16-16m112 160H72a16 16 0 0 1-16-16v-48h144v48a16 16 0 0 1-16 16m-88-28a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTrainSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainSimpleBoldIcon],svg[ph-train-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 20H72a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36l-9.6 12.8a12 12 0 1 0 19.2 14.4L102 220h52l20.4 27.2a12 12 0 0 0 19.2-14.4L184 220a36 36 0 0 0 36-36V56a36 36 0 0 0-36-36M72 44h112a12 12 0 0 1 12 12v60H60V56a12 12 0 0 1 12-12m112 152H72a12 12 0 0 1-12-12v-44h136v44a12 12 0 0 1-12 12m-80-28a16 16 0 1 1-16-16a16 16 0 0 1 16 16m80 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhTrainSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainSimpleDuotoneIcon],svg[ph-train-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 56v72H48V56a24 24 0 0 1 24-24h112a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M184 24H72a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h8l-14.4 19.2a8 8 0 1 0 12.8 9.6L100 216h56l21.6 28.8a8 8 0 1 0 12.8-9.6L176 216h8a32 32 0 0 0 32-32V56a32 32 0 0 0-32-32M72 40h112a16 16 0 0 1 16 16v64H56V56a16 16 0 0 1 16-16m112 160H72a16 16 0 0 1-16-16v-48h144v48a16 16 0 0 1-16 16m-88-28a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhTrainSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainSimpleFillIcon],svg[ph-train-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 24H72a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h8l-14.4 19.2a8 8 0 1 0 12.8 9.6L100 216h56l21.6 28.8a8 8 0 1 0 12.8-9.6L176 216h8a32 32 0 0 0 32-32V56a32 32 0 0 0-32-32m0 176H72a16 16 0 0 1-16-16v-48h144v48a16 16 0 0 1-16 16m-88-28a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTrainSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainSimpleLightIcon],svg[ph-train-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 26H72a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h12l-16.8 22.4a6 6 0 1 0 9.6 7.2L99 214h58l22.2 29.6a6 6 0 0 0 9.6-7.2L172 214h12a30 30 0 0 0 30-30V56a30 30 0 0 0-30-30M72 38h112a18 18 0 0 1 18 18v66H54V56a18 18 0 0 1 18-18m112 164H72a18 18 0 0 1-18-18v-50h148v50a18 18 0 0 1-18 18m-2-30a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-88 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhTrainSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainSimpleThinIcon],svg[ph-train-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 28H72a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h16l-19.2 25.6a4 4 0 1 0 6.4 4.8L98 212h60l22.8 30.4a4 4 0 0 0 6.4-4.8L168 212h16a28 28 0 0 0 28-28V56a28 28 0 0 0-28-28M72 36h112a20 20 0 0 1 20 20v68H52V56a20 20 0 0 1 20-20m112 168H72a20 20 0 0 1-20-20v-52h152v52a20 20 0 0 1-20 20m-92-32a8 8 0 1 1-8-8a8 8 0 0 1 8 8m88 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTrainSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
