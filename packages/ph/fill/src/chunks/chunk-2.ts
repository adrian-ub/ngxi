import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberTwoFillIcon],svg[ph-number-two-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-40 152a8 8 0 0 1 0 16H96a8 8 0 0 1-5.79-13.52L145.9 120a24 24 0 0 0-35.73-32a23.3 23.3 0 0 0-3.17 4.38a8 8 0 0 1-14-7.77a40.2 40.2 0 0 1 5.28-7.38a40 40 0 0 1 59.45 53.54l-.16.16L114.66 176Z"></svg:path>`,
})
export class PhNumberTwoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberZeroFillIcon],svg[ph-number-zero-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M157.68 88.39C164.34 98.52 168 112.59 168 128s-3.66 29.47-10.32 39.61C150.55 178.49 140.56 184 128 184s-22.55-5.51-29.68-16.39C91.66 157.47 88 143.41 88 128s3.66-29.48 10.32-39.61C105.45 77.51 115.44 72 128 72s22.55 5.51 29.68 16.39M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-32 88c0-18.49-4.6-35.68-12.94-48.39C160.92 64.16 146 56 128 56s-32.92 8.16-43.06 23.61C76.6 92.32 72 109.51 72 128s4.6 35.68 12.94 48.39C95.08 191.84 110 200 128 200s32.92-8.16 43.06-23.61C179.4 163.68 184 146.49 184 128"></svg:path>`,
})
export class PhNumberZeroFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumpadFillIcon],svg[ph-numpad-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M80 164a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m48 120a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m48 80a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhNumpadFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNutFillIcon],svg[ph-nut-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.68 66.15l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhNutFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNyTimesLogoFillIcon],svg[ph-ny-times-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 136a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12.62-32.75l-65.71-30.66a71.95 71.95 0 0 0-62.85 68.71l68.18-36.36A8 8 0 0 1 136 112v103.55a71.64 71.64 0 0 0 60.71-50A8 8 0 0 1 212 170.4a88 88 0 1 1-160.26-70.3A36 36 0 0 1 68 32a8.05 8.05 0 0 1 3.38.75l118.25 55.18A20 20 0 0 0 188 48a8 8 0 0 1 0-16a36 36 0 0 1 0 72a8.05 8.05 0 0 1-3.38-.75M96 208.47v-70.34l-38.49 20.53A72.23 72.23 0 0 0 96 208.47M96.13 62L66.37 48.07a20 20 0 0 0-5.2 38.71c.6-.71 1.2-1.42 1.84-2.11A88 88 0 0 1 96.13 62"></svg:path>`,
})
export class PhNyTimesLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOctagonFillIcon],svg[ph-octagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.31 80.23l-51.54-51.54A16.13 16.13 0 0 0 164.45 24h-72.9a16.13 16.13 0 0 0-11.32 4.69L28.69 80.23A16.13 16.13 0 0 0 24 91.55v72.9a16.13 16.13 0 0 0 4.69 11.32l51.54 51.54A16.13 16.13 0 0 0 91.55 232h72.9a16.13 16.13 0 0 0 11.32-4.69l51.54-51.54a16.13 16.13 0 0 0 4.69-11.32v-72.9a16.13 16.13 0 0 0-4.69-11.32"></svg:path>`,
})
export class PhOctagonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOfficeChairFillIcon],svg[ph-office-chair-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 128a8 8 0 0 1-8 8h-16.67A48.08 48.08 0 0 1 176 176h-40v24h24a32 32 0 0 1 32 32a8 8 0 0 1-16 0a16 16 0 0 0-16-16h-24v16a8 8 0 0 1-16 0v-16H96a16 16 0 0 0-16 16a8 8 0 0 1-16 0a32 32 0 0 1 32-32h24v-24H80a48.08 48.08 0 0 1-47.33-40H16a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8a32 32 0 0 0 32 32h96a32 32 0 0 0 32-32a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8M80 144h96a16 16 0 0 0 15.84-18.26l-13.72-96A16.08 16.08 0 0 0 162.28 16H93.72a16.08 16.08 0 0 0-15.84 13.74l-13.72 96A16 16 0 0 0 80 144"></svg:path>`,
})
export class PhOfficeChairFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOnigiriFillIcon],svg[ph-onigiri-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m231.53 146.57l-55.85-95.91l-.11-.19a56 56 0 0 0-95.14 0l-.11.19l-55.85 95.91A56 56 0 0 0 72.09 232h111.82a56 56 0 0 0 47.62-85.43m-12.68 48.88A39.49 39.49 0 0 1 183.91 216H176v-48a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v48h-7.91a40 40 0 0 1-34-61.09a2 2 0 0 0 .11-.2l55.85-95.9a40 40 0 0 1 67.84 0l55.85 95.9a2 2 0 0 0 .11.2a39.5 39.5 0 0 1 1 40.54"></svg:path>`,
})
export class PhOnigiriFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOpenAiLogoFillIcon],svg[ph-open-ai-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.32 114.24a56 56 0 0 0-60.07-76.57a56 56 0 0 0-96.32 13.77a56 56 0 0 0-36.25 90.32A56 56 0 0 0 69 217a56.4 56.4 0 0 0 14.59 2a56 56 0 0 0 8.17-.61a56 56 0 0 0 96.31-13.78a56 56 0 0 0 36.25-90.32Zm-80.32 23l-16 9.24l-16-9.24v-18.48l16-9.24l16 9.24Zm38.85-82.81a40 40 0 0 1 28.56 48a51 51 0 0 0-2.91-1.81L164 74.88a8 8 0 0 0-8 0l-44 25.41V81.81l40.5-23.38a39.76 39.76 0 0 1 30.35-4m-142 32.5a39.75 39.75 0 0 1 23.27-18.36A56 56 0 0 0 64 72v51.38a8 8 0 0 0 4 6.93l44 25.4L96 165l-40.5-23.43a40 40 0 0 1-14.64-54.64ZM136 224a39.8 39.8 0 0 1-27.52-10.95c1-.51 2-1.05 3-1.63L156 185.73a8 8 0 0 0 4-6.92V128l16 9.24V184a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhOpenAiLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOptionFillIcon],svg[ph-option-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-16 136h-47.06a15.92 15.92 0 0 1-14.31-8.84L103.06 96H56a8 8 0 0 1 0-16h47.06a15.92 15.92 0 0 1 14.31 8.84L152.94 160H200a8 8 0 0 1 0 16m0-80h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhOptionFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOrangeFillIcon],svg[ph-orange-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M165.87 72.58A64.06 64.06 0 0 0 200 16a8 8 0 0 0-8-8h-8a64 64 0 0 0-56 33.06A64 64 0 0 0 72 8h-8a8 8 0 0 0 0 16h8a48.08 48.08 0 0 1 47.4 40.42a88 88 0 1 0 46.47 8.16M183.33 24a48.09 48.09 0 0 1-46.66 40a48.09 48.09 0 0 1 46.66-40m.56 137.32a57.5 57.5 0 0 1-46.57 46.57a8.5 8.5 0 0 1-1.32.11a8 8 0 0 1-1.31-15.89a41.29 41.29 0 0 0 33.43-33.43a8 8 0 0 1 15.78 2.64Z"></svg:path>`,
})
export class PhOrangeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOrangeSliceFillIcon],svg[ph-orange-slice-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51.18 145.51A95.5 95.5 0 0 1 32 88c0-1.41 0-2.81.09-4.21a4 4 0 0 1 4-3.79H107a4 4 0 0 1 2.83 6.83ZM120 183.66V99.31l-58.17 58.18A95.68 95.68 0 0 0 120 183.66m84.82-38.15A95.5 95.5 0 0 0 224 88c0-1.41 0-2.81-.09-4.21a4 4 0 0 0-4-3.79H149a4 4 0 0 0-2.83 6.83ZM248 80h-4.08a4 4 0 0 0-4 4.14c0 1.28.07 2.57.07 3.86A112 112 0 0 1 16 88c0-1.29 0-2.58.07-3.86a4 4 0 0 0-4-4.14H8a8 8 0 0 0-8 8a128 128 0 1 0 256 0a8 8 0 0 0-8-8M136 99.31v84.35a95.68 95.68 0 0 0 58.17-26.17Z"></svg:path>`,
})
export class PhOrangeSliceFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOvenFillIcon],svg[ph-oven-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-36 24a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-44 0a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-44 0a12 12 0 1 1-12 12a12 12 0 0 1 12-12m108 136H64v-88h128Z"></svg:path>`,
})
export class PhOvenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPackageFillIcon],svg[ph-package-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.68 66.15l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 32l80.35 44l-29.78 16.29l-80.35-44Zm0 88L47.65 76l33.91-18.57l80.35 44Zm88 55.85l-80 43.79v-85.81l32-17.51V152a8 8 0 0 0 16 0v-44.44l32-17.51v85.76Z"></svg:path>`,
})
export class PhPackageFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintBrushBroadFillIcon],svg[ph-paint-brush-broad-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 24H72a40 40 0 0 0-40 40v72a24 24 0 0 0 24 24h48l-7.89 46.67A8.4 8.4 0 0 0 96 208a32 32 0 0 0 64 0a8.4 8.4 0 0 0-.11-1.33L152 160h48a24 24 0 0 0 24-24V32a8 8 0 0 0-8-8M72 40h104v40a8 8 0 0 0 16 0V40h16v72H48V64a24 24 0 0 1 24-24"></svg:path>`,
})
export class PhPaintBrushBroadFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintBrushFillIcon],svg[ph-paint-brush-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 32a8 8 0 0 0-8-8c-44.08 0-89.31 49.71-114.43 82.63A60 60 0 0 0 32 164c0 30.88-19.54 44.73-20.47 45.37A8 8 0 0 0 16 224h76a60 60 0 0 0 57.37-77.57C182.3 121.31 232 76.08 232 32m-107.58 81.55q5.14-6.66 10.09-12.55A76.2 76.2 0 0 1 155 121.49q-5.9 4.94-12.55 10.09a60.5 60.5 0 0 0-18.03-18.03m42.7-2.68a92.6 92.6 0 0 0-22-22c31.78-34.53 55.75-45 69.9-47.91c-2.85 14.16-13.37 38.13-47.9 69.91"></svg:path>`,
})
export class PhPaintBrushFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintBrushHouseholdFillIcon],svg[ph-paint-brush-household-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.64 25.36a32 32 0 0 0-45.26 0q-.21.21-.42.45l-53.41 62.41L121 77.64a24 24 0 0 0-33.95 0l-76.69 76.7a8 8 0 0 0 0 11.31l80 80a8 8 0 0 0 11.31 0L178.36 169a24 24 0 0 0 0-33.95l-10.58-10.57L230.19 71c.15-.14.31-.28.45-.43a32 32 0 0 0 0-45.21M96 228.69L79.32 212l22.34-22.35a8 8 0 0 0-11.31-11.31L68 200.68L55.32 188l22.34-22.35a8 8 0 0 0-11.31-11.31L44 176.68L27.31 160l50.35-50.34l68.69 68.69Z"></svg:path>`,
})
export class PhPaintBrushHouseholdFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintBucketFillIcon],svg[ph-paint-bucket-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 208a24 24 0 0 1-48 0c0-17.91 15.57-41.77 17.34-44.44a8 8 0 0 1 13.32 0C240.43 166.23 256 190.09 256 208m-123.51-83.51a12 12 0 0 0-17-17a12 12 0 0 0 17 16.94ZM37.65 18.34a8 8 0 0 0-11.31 11.32l32.6 32.6L70.25 51Zm196.88 120.73a8 8 0 0 0 3.13-13.24L122.17 10.34a8 8 0 0 0-11.31 0L70.25 51l40.43 40.42a28 28 0 1 1-11.31 11.32L58.94 62.26L15 106.17a24 24 0 0 0 0 33.94L99.89 225a24 24 0 0 0 33.94 0l78.49-78.49Z"></svg:path>`,
})
export class PhPaintBucketFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintRollerFillIcon],svg[ph-paint-roller-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 104v50a16.07 16.07 0 0 1-11.6 15.38L136 198v34a8 8 0 0 1-16 0v-34a16.07 16.07 0 0 1 11.6-15.38L232 154v-50h-16v24a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-24H16a8 8 0 0 1 0-16h16V64a16 16 0 0 1 16-16h152a16 16 0 0 1 16 16v24h16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhPaintRollerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaletteFillIcon],svg[ph-palette-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.77 53.89A103.27 103.27 0 0 0 128 24h-1.07A104 104 0 0 0 24 128c0 43 26.58 79.06 69.36 94.17A32 32 0 0 0 136 192a16 16 0 0 1 16-16h46.21a31.81 31.81 0 0 0 31.2-24.88a104.4 104.4 0 0 0 2.59-24a103.28 103.28 0 0 0-31.23-73.23M84 168a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-56a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44-24a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 24a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhPaletteFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPanoramaFillIcon],svg[ph-panorama-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.75 51.32a15.87 15.87 0 0 0-13.86-2.77l-3.48.94C205.61 54.56 170.61 64 128 64s-77.61-9.44-96.41-14.51l-3.48-.94A16 16 0 0 0 8 64v128a16 16 0 0 0 16 16a16.2 16.2 0 0 0 4.18-.55l3.18-.86C50.13 201.49 85.17 192 128 192s77.87 9.49 96.69 14.59l3.18.86A16 16 0 0 0 248 192V64a15.9 15.9 0 0 0-6.25-12.68M204 96a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-76 80c-45 0-82.72 10.23-100.87 15.14L24 192v-39.3l46.34-46.35a8 8 0 0 1 11.32 0L152.28 177c-7.79-.65-15.91-1-24.28-1m100.87 15.14a449 449 0 0 0-51-11.2l-35.26-35.26L157 130.34a8 8 0 0 1 11.31 0l60.89 60.88Z"></svg:path>`,
})
export class PhPanoramaFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPantsFillIcon],svg[ph-pants-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m53.44 43.5l.68-5.5A16 16 0 0 1 70 24h116a16 16 0 0 1 15.88 14l.68 5.49a4 4 0 0 1-4 4.5H57.41a4 4 0 0 1-3.97-4.49M169 64a32.06 32.06 0 0 0 31 24h3.59a4 4 0 0 0 4-4.5l-2-16a4 4 0 0 0-4-3.5ZM52.41 88H56a32.06 32.06 0 0 0 31-24H54.41a4 4 0 0 0-4 3.5l-2 16a4 4 0 0 0 4 4.5m171.47 126l-13.32-106.5a4 4 0 0 0-4-3.5H200a48.07 48.07 0 0 1-47.32-40H136v39.73a8.18 8.18 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V64h-16.68A48.07 48.07 0 0 1 56 104h-6.59a4 4 0 0 0-4 3.5L32.12 214a16 16 0 0 0 6.71 15.09a16.56 16.56 0 0 0 9.56 2.91h40.3a16 16 0 0 0 15.51-12.06l23.8-92l23.79 91.94A16 16 0 0 0 167.31 232h40.3a16.54 16.54 0 0 0 9.56-2.89a16 16 0 0 0 6.71-15.11"></svg:path>`,
})
export class PhPantsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperPlaneFillIcon],svg[ph-paper-plane-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.2 218.31A15.88 15.88 0 0 1 224 224a16.2 16.2 0 0 1-5.37-.92l-79.95-27a4 4 0 0 1-2.72-3.79V120a8 8 0 0 0-8.53-8a8.19 8.19 0 0 0-7.47 8.26v72a4 4 0 0 1-2.72 3.79l-79.95 27a16 16 0 0 1-19.26-22.92l95.97-168a16 16 0 0 1 27.89 0L237.9 200.1a15.89 15.89 0 0 1-1.7 18.21"></svg:path>`,
})
export class PhPaperPlaneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperPlaneRightFillIcon],svg[ph-paper-plane-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 127.89a16 16 0 0 1-8.18 14L63.9 237.9A16.15 16.15 0 0 1 56 240a16 16 0 0 1-15-21.33l27-79.95a4 4 0 0 1 3.72-2.72H144a8 8 0 0 0 8-8.53a8.19 8.19 0 0 0-8.26-7.47h-72a4 4 0 0 1-3.79-2.72l-27-79.94a16 16 0 0 1 22.89-19.27l168 95.89a16 16 0 0 1 8.16 13.93"></svg:path>`,
})
export class PhPaperPlaneRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperPlaneTiltFillIcon],svg[ph-paper-plane-tilt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.4 44.34v.15l-58.2 191.94a15.88 15.88 0 0 1-14 11.51q-.69.06-1.38.06a15.86 15.86 0 0 1-14.42-9.15l-36.4-74.7a4 4 0 0 1 .77-4.58l57.92-57.92a8 8 0 0 0-11.31-11.31l-57.95 57.92a4 4 0 0 1-4.58.77l-74.77-36.39a16 16 0 0 1 2.49-29.8l191.94-58.2h.15a16 16 0 0 1 19.74 19.7"></svg:path>`,
})
export class PhPaperPlaneTiltFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperclipFillIcon],svg[ph-paperclip-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m37.66 50.34a8 8 0 0 0-11.32 0L87.09 143A24 24 0 1 0 121 177l49.32-50.32a8 8 0 1 1 11.42 11.2l-49.37 50.38a40 40 0 1 1-56.62-56.51L143 63.09A24 24 0 1 1 177 97l-67.29 68.6a8 8 0 1 1-11.42-11.2l67.31-68.69a8 8 0 0 0 .06-11.37"></svg:path>`,
})
export class PhPaperclipFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperclipHorizontalFillIcon],svg[ph-paperclip-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 144H72a24 24 0 0 1 0-48h96a8 8 0 0 1 0 16H72a8 8 0 0 0 0 16h96a24 24 0 0 0 0-48H96a8 8 0 0 1 0-16h72a40 40 0 0 1 0 80"></svg:path>`,
})
export class PhPaperclipHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phParachuteFillIcon],svg[ph-parachute-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 120A104.12 104.12 0 0 0 128 16A104.12 104.12 0 0 0 24 120a8 8 0 0 0 3.21 6.39L120 196v20h-8a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16h-8v-20l92.8-69.6a8 8 0 0 0 3.2-6.4m-16.36-8h-39.81c-1.54-37.95-13.91-62.43-25.11-77a88.2 88.2 0 0 1 64.92 77m-61.24 16L128 175.53L101.6 128Zm-71.11 0l19.5 35.09L56 128Zm89.42 0H200l-46.79 35.09Zm-67.43-93c-11.2 14.57-23.57 39.05-25.11 77H40.36a88.2 88.2 0 0 1 64.92-77"></svg:path>`,
})
export class PhParachuteFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phParagraphFillIcon],svg[ph-paragraph-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48a8 8 0 0 1-8 8h-16v152a8 8 0 0 1-16 0V56h-24v152a8 8 0 0 1-16 0v-40H96a64 64 0 0 1 0-128h112a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhParagraphFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phParallelogramFillIcon],svg[ph-parallelogram-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.58 62.57l-64.8 144a16 16 0 0 1-14.59 9.43H24a16 16 0 0 1-14.58-22.57l64.8-144A16 16 0 0 1 88.81 40H232a16 16 0 0 1 14.59 22.57Z"></svg:path>`,
})
export class PhParallelogramFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phParkFillIcon],svg[ph-park-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 192h-32v-24h24a8 8 0 0 0 7.76-9.94l-32-128a8 8 0 0 0-15.52 0l-32 128A8 8 0 0 0 160 168h24v24h-64v-16h8a8 8 0 0 0 0-16h-8v-16h8a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16h8v16h-8a8 8 0 0 0 0 16h8v16H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-128 0H64v-16h40Zm0-32H64v-16h40Zm12-64a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12"></svg:path>`,
})
export class PhParkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPasswordFillIcon],svg[ph-password-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-19.42 94.71a8 8 0 1 1-13 9.41L184 141.61l-7.63 10.51a8 8 0 1 1-13-9.41l7.64-10.5l-12.36-4a8 8 0 1 1 5-15.21l12.35 4v-13a8 8 0 0 1 16 0v13l12.35-4a8 8 0 0 1 5 15.21l-12.36 4Zm-72 0a8 8 0 1 1-13 9.41L112 141.61l-7.63 10.51a8 8 0 1 1-13-9.41l7.64-10.5l-12.36-4a8 8 0 1 1 5-15.21l12.35 4v-13a8 8 0 0 1 16 0v13l12.35-4a8 8 0 1 1 5 15.21l-12.36 4ZM64 88v80a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhPasswordFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPathFillIcon],svg[ph-path-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 200a28 28 0 0 1-54.83 8H72a48 48 0 0 1 0-96h96a24 24 0 0 0 0-48H72a8 8 0 0 1 0-16h96a40 40 0 0 1 0 80H72a32 32 0 0 0 0 64h101.17a28 28 0 0 1 54.83 8"></svg:path>`,
})
export class PhPathFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPatreonLogoFillIcon],svg[ph-patreon-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 93.17c0 41-29.69 52.47-53.55 61.67c-8.41 3.24-16.35 6.3-22.21 10.28c-11.39 7.72-18.59 21.78-25.55 35.38c-9.94 19.42-20.23 39.5-43.17 39.5c-12.91 0-24.61-11.64-33.85-33.66s-14.31-51-13.61-77.45c1.08-40.65 14.58-62.68 25.7-74c14.95-15.2 35.24-25.3 58.68-29.2c21.79-3.62 44.14-1.38 62.93 6.3C215.73 43.6 232 65.9 232 93.17"></svg:path>`,
})
export class PhPatreonLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPauseCircleFillIcon],svg[ph-pause-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24m-16 136a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhPauseCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPauseFillIcon],svg[ph-pause-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48v160a16 16 0 0 1-16 16h-40a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16M96 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhPauseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPawPrintFillIcon],svg[ph-paw-print-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 108a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-168 0a28 28 0 1 0-28 28a28 28 0 0 0 28-28m20-20a28 28 0 1 0-28-28a28 28 0 0 0 28 28m72 0a28 28 0 1 0-28-28a28 28 0 0 0 28 28m23.12 60.86a35.3 35.3 0 0 1-16.87-21.14a44 44 0 0 0-84.5 0A35.25 35.25 0 0 1 69 148.82A40 40 0 0 0 88 224a39.5 39.5 0 0 0 15.52-3.13a64.1 64.1 0 0 1 48.87 0a40 40 0 0 0 34.73-72Z"></svg:path>`,
})
export class PhPawPrintFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaypalLogoFillIcon],svg[ph-paypal-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.12 93.54a55.8 55.8 0 0 0-20.19-16.18A56 56 0 0 0 144 24H84a16 16 0 0 0-15.52 12.12l-36 144A16 16 0 0 0 48 200h27.5l-3 12.12A16 16 0 0 0 88 232h31.5a16 16 0 0 0 15.5-12.12l9-35.88h32a56 56 0 0 0 44.14-90.46ZM48 184L84 40h60a40 40 0 0 1 39.3 32.49A57 57 0 0 0 176 72h-56a16 16 0 0 0-15.53 12.12L79.52 184zm166.77-46.3A39.94 39.94 0 0 1 176 168h-32a16 16 0 0 0-15.52 12.12l-9 35.88H88l20-80h36a55.9 55.9 0 0 0 54-41.39a40.2 40.2 0 0 1 9.48 8.77a39.73 39.73 0 0 1 7.3 34.32Z"></svg:path>`,
})
export class PhPaypalLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPeaceFillIcon],svg[ph-peace-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m136 143.37l46 32.2a71.86 71.86 0 0 1-46 24ZM56 128a71.6 71.6 0 0 0 8.81 34.48L120 123.84V56.46A72.08 72.08 0 0 0 56 128m64 71.54v-56.17l-46 32.2a71.86 71.86 0 0 0 46 23.97m16-143.08v67.38l55.19 38.64A72 72 0 0 0 136 56.46M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></svg:path>`,
})
export class PhPeaceFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPenFillIcon],svg[ph-pen-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69l83.67-83.66l3.48 13.9l-36.8 36.79a8 8 0 0 0 11.31 11.32l40-40a8 8 0 0 0 2.11-7.6l-6.9-27.61L227.32 96a16 16 0 0 0 0-22.63M192 108.69L147.32 64l24-24L216 84.69Z"></svg:path>`,
})
export class PhPenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPenNibFillIcon],svg[ph-pen-nib-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.31 81.36l-68.68-68.68a16 16 0 0 0-22.63 0l-28.44 28.44l-58 21.76a16 16 0 0 0-10.2 12.35l-20.77 124.6a4 4 0 0 0 6.77 3.49l57-57a23.85 23.85 0 0 1-2.29-12.08a24 24 0 1 1 13.6 23.4l-57 57a4 4 0 0 0 3.49 6.77l124.61-20.77a16 16 0 0 0 12.35-10.16l21.77-58.07L243.31 104a16 16 0 0 0 0-22.63ZM208 116.68L139.32 48l24-24L232 92.68Z"></svg:path>`,
})
export class PhPenNibFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPenNibStraightFillIcon],svg[ph-pen-nib-straight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222.33 123.89c-.06-.13-.12-.26-.19-.38L192 69.91V32a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v37.9l-30.14 53.61c-.07.12-.13.25-.2.38a15.94 15.94 0 0 0 1.46 16.57l.11.14l77.61 100.81A4 4 0 0 0 120 239v-84.37a24 24 0 1 1 16 0V239a4 4 0 0 0 7.16 2.44l77.6-100.81l.11-.14a15.92 15.92 0 0 0 1.46-16.6M176 64H80V32h96Z"></svg:path>`,
})
export class PhPenNibStraightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilCircleFillIcon],svg[ph-pencil-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46M128 170.87a31.93 31.93 0 0 0-32.31-9.77L111 128h34l15.27 33.1a31.93 31.93 0 0 0-32.27 9.77m40 35.5a88 88 0 0 1-32 9.22V192a16 16 0 0 1 32 0Zm22.22-16.14c-2 2-4.08 3.87-6.22 5.64V176a7.9 7.9 0 0 0-.74-3.35l-48-104a8 8 0 0 0-14.52 0l-48 104A7.9 7.9 0 0 0 72 176v19.87a89 89 0 0 1-6.22-5.64a88 88 0 1 1 124.44 0"></svg:path>`,
})
export class PhPencilCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilFillIcon],svg[ph-pencil-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.31 73.37l-44.68-44.69a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69L227.31 96a16 16 0 0 0 0-22.63M51.31 160l90.35-90.35l16.68 16.69L68 176.68ZM48 179.31L76.69 208H48Zm48 25.38L79.31 188l90.35-90.35l16.68 16.69Z"></svg:path>`,
})
export class PhPencilFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilLineFillIcon],svg[ph-pencil-line-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h168a8 8 0 0 0 0-16H115.32l112-112a16 16 0 0 0 0-22.63M79.32 188l90.34-90.34l16.69 16.68L96 204.69Zm79-101.66L68 176.69L51.31 160l90.35-90.34ZM48 179.31L76.69 208H48Z"></svg:path>`,
})
export class PhPencilLineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilRulerFillIcon],svg[ph-pencil-ruler-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48v160a16 16 0 0 1-16 16h-48a16 16 0 0 1-16-16v-28a4 4 0 0 1 4-4h36a8 8 0 0 0 8-8.53a8.18 8.18 0 0 0-8.25-7.47H148a4 4 0 0 1-4-4v-16a4 4 0 0 1 4-4h36a8 8 0 0 0 8-8.53a8.18 8.18 0 0 0-8.25-7.47H148a4 4 0 0 1-4-4v-16a4 4 0 0 1 4-4h36a8 8 0 0 0 8-8.53a8.18 8.18 0 0 0-8.27-7.47H148a4 4 0 0 1-4-4V48a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16M109.66 58.34A8 8 0 0 1 112 64v144a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V64a8 8 0 0 1 2.34-5.66l32-32a8 8 0 0 1 11.32 0ZM48 80v104h16V80Zm32 0v104h16V80ZM51.31 64h41.38L72 43.31Z"></svg:path>`,
})
export class PhPencilRulerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilSimpleFillIcon],svg[ph-pencil-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.31 73.37l-44.68-44.69a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69L227.31 96a16 16 0 0 0 0-22.63M192 108.68L147.31 64l24-24L216 84.68Z"></svg:path>`,
})
export class PhPencilSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilSimpleLineFillIcon],svg[ph-pencil-simple-line-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h168a8 8 0 0 0 0-16H115.32l112-112a16 16 0 0 0 0-22.63M192 108.69L147.32 64l24-24L216 84.69Z"></svg:path>`,
})
export class PhPencilSimpleLineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilSimpleSlashFillIcon],svg[ph-pencil-simple-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0l-44.36 44.36a4 4 0 0 0-.14 5.52l58.73 64.6a4 4 0 0 0 5.79.13l47.3-47.3a16 16 0 0 0 0-22.63M192 108.69L147.32 64l24-24L216 84.69Zm21.92 101.93a8 8 0 1 1-11.84 10.76l-47.68-52.46l-50.4 50.39A15.86 15.86 0 0 1 92.69 224H48a16 16 0 0 1-16-16v-44.69A15.9 15.9 0 0 1 36.68 152l53.6-53.6l-48-52.82a8.18 8.18 0 0 1-.37-10.75a8 8 0 0 1 12-.21Z"></svg:path>`,
})
export class PhPencilSimpleSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilSlashFillIcon],svg[ph-pencil-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62a8 8 0 1 0-11.84 10.76l48.2 53L36.68 152A15.9 15.9 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69l50.4-50.39l47.69 52.46a8 8 0 1 0 11.84-10.76Zm47.14 75.64L117 127.74l-49 48.95L51.31 160ZM48 208v-28.69L76.69 208Zm48-3.31L79.32 188l48.41-48.41l15.89 17.48ZM227.32 96L183 140.34A8 8 0 0 1 171.67 129l14.68-14.68l-16.69-16.66L156.31 111A8 8 0 0 1 145 99.69l13.35-13.35l-16.69-16.68l-12 12a8 8 0 0 1-11.32-11.31L160 28.69a16 16 0 0 1 22.63 0l44.69 44.68a16 16 0 0 1 0 22.63"></svg:path>`,
})
export class PhPencilSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPentagonFillIcon],svg[ph-pentagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m231.26 105.19l-32 107.54l-.06.17A15.94 15.94 0 0 1 184 224H72a15.94 15.94 0 0 1-15.2-11.1l-.06-.17l-32-107.54a16 16 0 0 1 5.7-17.63l87.92-68.31l.18-.14a15.93 15.93 0 0 1 18.92 0l.18.14l87.92 68.31a16 16 0 0 1 5.7 17.63"></svg:path>`,
})
export class PhPentagonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPentagramFillIcon],svg[ph-pentagram-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.18 129.52a4 4 0 0 1-6.15 2L22.66 109a15.78 15.78 0 0 1-5.82-18a16.33 16.33 0 0 1 15.59-11h38.31a4 4 0 0 1 3.81 5.24Zm-7 73.48A15.75 15.75 0 0 0 59 220.88a15.74 15.74 0 0 0 18.77 0l32.05-23.06a4 4 0 0 0 0-6.5l-38.44-27.6a4 4 0 0 0-6.14 2Zm90.05-183.74a15.93 15.93 0 0 0-30.45-.05L100 58.76a4 4 0 0 0 3.76 5.24h48.48a4 4 0 0 0 3.81-5.23ZM160 80H96a4 4 0 0 0-3.8 2.77l-19.2 59a4 4 0 0 0 1.47 4.48l51.17 36.82a4 4 0 0 0 4.68 0l51.17-36.82a4 4 0 0 0 1.47-4.48l-19.15-59A4 4 0 0 0 160 80m79.13 11a16.33 16.33 0 0 0-15.59-11h-38.28a4 4 0 0 0-3.81 5.24l14.37 44.29a4 4 0 0 0 6.14 2l31.41-22.6A15.75 15.75 0 0 0 239.16 91Zm-54.55 72.75l-38.4 27.63a4 4 0 0 0 0 6.5l32 23A16 16 0 0 0 202.85 203l-12.09-37.27a4 4 0 0 0-6.15-2.01Z"></svg:path>`,
})
export class PhPentagramFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPepperFillIcon],svg[ph-pepper-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M167.27 40.42A40.06 40.06 0 0 0 128 8a8 8 0 0 0 0 16a24 24 0 0 1 22.85 16.66A64.08 64.08 0 0 0 96 104c0 46.75-25.75 78-76.53 93a16 16 0 0 0 1.77 31.13A265 265 0 0 0 66.75 232c40.78 0 86.16-9.15 117.53-35.46C210.64 174.44 224 143.3 224 104a64.07 64.07 0 0 0-56.73-63.58M192 95l-28.42-14.17a8 8 0 0 0-7.16 0L128 95l-13.37-6.68a48 48 0 0 1 90.74 0Z"></svg:path>`,
})
export class PhPepperFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPercentFillIcon],svg[ph-percent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 172a12 12 0 1 1-12-12a12 12 0 0 1 12 12M92 96a12 12 0 1 0-12-12a12 12 0 0 0 12 12m132-48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M64 84a28 28 0 1 0 28-28a28 28 0 0 0-28 28m128 88a28 28 0 1 0-28 28a28 28 0 0 0 28-28m-2.34-105.66a8 8 0 0 0-11.32 0l-112 112a8 8 0 0 0 11.32 11.32l112-112a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhPercentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonArmsSpreadFillIcon],svg[ph-person-arms-spread-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 36a28 28 0 1 1 28 28a28 28 0 0 1-28-28m127.6 56.57A15.7 15.7 0 0 0 212 80H44a16 16 0 0 0-6.7 30.53h.06l53.89 23.73l-21.92 83.3a16 16 0 0 0 7.9 20.91A15.8 15.8 0 0 0 84 240a16 16 0 0 0 14.44-9.06L128 180l29.58 51a16 16 0 0 0 29.07-13.35l-21.92-83.3l54-23.76a15.7 15.7 0 0 0 8.87-18.02"></svg:path>`,
})
export class PhPersonArmsSpreadFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonFillIcon],svg[ph-person-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 36a28 28 0 1 1 28 28a28 28 0 0 1-28-28m115.42 104.78l-45.25-51.3a28 28 0 0 0-21-9.48h-42.34a28 28 0 0 0-21 9.48l-45.25 51.3a16 16 0 0 0 22.56 22.69L89 142.7l-19.7 74.88a16 16 0 0 0 29.08 13.35L128 180l29.58 51a16 16 0 0 0 29.08-13.35L167 142.7l25.9 20.77a16 16 0 0 0 22.56-22.69Z"></svg:path>`,
})
export class PhPersonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleBikeFillIcon],svg[ph-person-simple-bike-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 52a28 28 0 1 1 28 28a28 28 0 0 1-28-28m104 124a40 40 0 1 1-40-40a40 40 0 0 1 40 40m-16 0a24 24 0 1 0-24 24a24 24 0 0 0 24-24m-24-64a8 8 0 0 0-8-8h-36.69l-29.65-29.66a8 8 0 0 0-11.32 0l-32 32a8 8 0 0 0 0 11.32L120 155.31V200a8 8 0 0 0 16 0v-48a8 8 0 0 0-2.34-5.66L99.31 112L120 91.31l26.34 26.35A8 8 0 0 0 152 120h40a8 8 0 0 0 8-8M96 176a40 40 0 1 1-40-40a40 40 0 0 1 40 40m-16 0a24 24 0 1 0-24 24a24 24 0 0 0 24-24"></svg:path>`,
})
export class PhPersonSimpleBikeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleCircleFillIcon],svg[ph-person-simple-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 40a16 16 0 1 1-16 16a16 16 0 0 1 16-16m48 56h-40v13.58l30.66 46a8 8 0 0 1-13.32 8.88l-25.34-38l-25.34 38a8 8 0 1 1-13.32-8.88l30.66-46V120H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhPersonSimpleCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleFillIcon],svg[ph-person-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M95.89 48a32 32 0 1 1 32 32a32 32 0 0 1-32-32m132.23 73.14C226.4 120.11 185.55 96 128 96s-98.4 24.11-100.12 25.14a8 8 0 0 0 8.24 13.72c.36-.22 34.91-20.6 83.88-22.68V149l-62 69.69a8 8 0 1 0 12 10.62L128 164l58 65.27a8 8 0 0 0 12-10.62L136 149v-36.81c48.77 2.08 83.53 22.46 83.88 22.67a8 8 0 1 0 8.24-13.72"></svg:path>`,
})
export class PhPersonSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleHikeFillIcon],svg[ph-person-simple-hike-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 48a32 32 0 1 1 32 32a32 32 0 0 1-32-32m72 88c-23.37 0-28.92-8.56-36.6-20.4c-3.65-5.64-7.79-12-14.16-17.55a41 41 0 0 0-8-5.47a8 8 0 0 0-11 3.92L64.66 228.81a8 8 0 0 0 4.15 10.52A7.8 7.8 0 0 0 72 240a8 8 0 0 0 7.34-4.81l33.59-77.27l31.07 22.2V232a8 8 0 0 0 16 0v-56a8 8 0 0 0-3.35-6.51l-37.2-26.57l13.4-30.81c3.57 3.62 6.28 7.8 9.13 12.19c7.67 11.84 16.27 25.11 42 27.36V232a8 8 0 0 0 16 0v-88a8 8 0 0 0-7.98-8M72 152a8 8 0 0 0 7.36-4.85l24-56a8 8 0 0 0-4.2-10.5l-28-12a8 8 0 0 0-10.5 4.2l-24 56a8 8 0 0 0 4.2 10.5l28 12A8 8 0 0 0 72 152"></svg:path>`,
})
export class PhPersonSimpleHikeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleRunFillIcon],svg[ph-person-simple-run-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 56a32 32 0 1 1 32 32a32 32 0 0 1-32-32m103.28 74.08a8 8 0 0 0-10.6-4c-.25.12-26.71 10.72-72.18-20.19c-52.29-35.54-88-7.77-89.51-6.57a8 8 0 1 0 10 12.48c.26-.21 25.12-19.5 64.07 3.27c-4.25 13.35-12.76 31.82-25.25 47c-18.56 22.48-41.11 32.56-67 30A8 8 0 0 0 31.2 208a92 92 0 0 0 9.34.47c27.38 0 52-12.38 71.63-36.18c.57-.69 1.14-1.4 1.69-2.1C133.31 175.29 168 190.3 168 232a8 8 0 0 0 16 0c0-24.65-10.08-45.35-29.15-59.86a104.3 104.3 0 0 0-31.31-15.81A169.3 169.3 0 0 0 139 124c26.14 16.09 46.84 20 60.69 20c12.18 0 19.06-3 19.67-3.28a8 8 0 0 0 3.92-10.64"></svg:path>`,
})
export class PhPersonSimpleRunFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleSkiFillIcon],svg[ph-person-simple-ski-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 60a28 28 0 1 1 28 28a28 28 0 0 1-28-28M37.76 87.68l111 32.36l5.61 5.61A8 8 0 0 0 160 128h40a8 8 0 0 0 0-16h-36.69l-4.72-4.72l-24.9-24.9a8 8 0 0 0-11.32 0L112 92.67L42.24 72.32a8 8 0 0 0-4.48 15.36m200.9 105.47a8 8 0 0 0-11.1-2.22a53.78 53.78 0 0 1-45 6.9l-62.79-18.28l29.9-29.9a8 8 0 0 0-3.46-13.35l-56-16a8 8 0 0 0-4.4 15.39L128.73 148l-26.5 26.49l-76-22.13a8 8 0 1 0-4.48 15.36l156.31 45.52a69.78 69.78 0 0 0 58.37-8.95a8 8 0 0 0 2.23-11.14"></svg:path>`,
})
export class PhPersonSimpleSkiFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleSnowboardFillIcon],svg[ph-person-simple-snowboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 52a28 28 0 1 1 28 28a28 28 0 0 1-28-28m87.67 70.25a8 8 0 0 1-9.93 5.42l-79.07-23.26l-7.78 11.67l35.33 10.23a8 8 0 0 1 4.42 12.14l-19.75 29.44l50.89 14.75A25.32 25.32 0 0 1 216 206.81A25.28 25.28 0 0 1 190.79 232a26 26 0 0 1-7.14-1L26.21 185.35A25.32 25.32 0 0 1 8 161.18A25.25 25.25 0 0 1 40.34 137l44.73 13l33.52-50.28l-40.85-12a8 8 0 1 1 4.52-15.35l136 40a8 8 0 0 1 5.41 9.88M117.58 130l-16.4 24.6l29.58 8.58l16.49-24.59Z"></svg:path>`,
})
export class PhPersonSimpleSnowboardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleSwimFillIcon],svg[ph-person-simple-swim-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 72a32 32 0 1 1 32 32a32 32 0 0 1-32-32m66.89 112.19c-31.83 26.39-53.72 14.51-79.07.74c-26.61-14.44-56.76-30.81-96.93 2.49a8 8 0 1 0 10.22 12.31c31.83-26.39 53.72-14.5 79.07-.74c15.11 8.2 31.35 17 49.93 17c14.14 0 29.64-5.11 47-19.5a8 8 0 0 0-10.22-12.32Zm-176-36.76a8 8 0 1 0 10.22 12.31c31.83-26.38 53.72-14.5 79.07-.74c15.11 8.2 31.35 17 49.93 17c14.14 0 29.64-5.11 47-19.5a8 8 0 1 0-10.22-12.31a75.8 75.8 0 0 1-19.28 12.06l-53.84-53.82A103.34 103.34 0 0 0 64.24 72H40a8 8 0 0 0 0 16h24.24a87.66 87.66 0 0 1 41.88 10.56l-29.63 29.61c-12.67 1.19-26.42 6.67-41.6 19.25Z"></svg:path>`,
})
export class PhPersonSimpleSwimFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleTaiChiFillIcon],svg[ph-person-simple-tai-chi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 48a32 32 0 1 1 32 32a32 32 0 0 1-32-32m120 48H40a8 8 0 0 0 0 16h80v28.44l-77.35 69.61A8 8 0 0 0 53.35 222l76.2-68.58L176 173.28V216a8 8 0 0 0 16 0v-48a8 8 0 0 0-4.85-7.35L136 138.72V112h80a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhPersonSimpleTaiChiFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleThrowFillIcon],svg[ph-person-simple-throw-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 56a32 32 0 1 1 32 32a32 32 0 0 1-32-32m125 43.36c-1.5-1.2-37.22-29-89.51 6.57c-45.49 30.91-71.92 20.3-72.17 20.19a8 8 0 1 0-6.63 14.56c.61.28 7.49 3.27 19.67 3.27c14.21 0 35.64-4.11 62.77-21.29c-2.28 29.41-12.73 83.47-73.43 101.68a8 8 0 1 0 4.6 15.32c34.83-10.45 59.45-32.34 73.2-65.08a142 142 0 0 0 5.1-14.33l22.08 18.4l-14.27 42.82a8 8 0 0 0 15.18 5.06l16-48a8 8 0 0 0-2.47-8.68l-32.42-27a216 216 0 0 0 3-30.34c36.18-18.57 59-.85 59.28-.65a8 8 0 1 0 10-12.48ZM64 112a16 16 0 1 0-16-16a16 16 0 0 0 16 16"></svg:path>`,
})
export class PhPersonSimpleThrowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleWalkFillIcon],svg[ph-person-simple-walk-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 48a32 32 0 1 1 32 32a32 32 0 0 1-32-32m88 88c-28.64 0-41.81-13.3-55.75-27.37c-3.53-3.57-7.18-7.26-11-10.58c-37-32.14-96.22 22.73-98.72 25.08a8 8 0 0 0 10.95 11.66A164 164 0 0 1 84 113c13.78-7.38 25.39-10.23 34.7-8.58L64.66 228.81a8 8 0 0 0 4.15 10.52A7.8 7.8 0 0 0 72 240a8 8 0 0 0 7.34-4.81l33.59-77.27l31.07 22.2V232a8 8 0 0 0 16 0v-56a8 8 0 0 0-3.35-6.51l-37.2-26.57L132.88 112c2.64 2.44 5.26 5.07 8 7.84C155.05 134.19 172.69 152 208 152a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhPersonSimpleWalkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPerspectiveFillIcon],svg[ph-perspective-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 136a8 8 0 0 1-8 8h-16v64a16 16 0 0 1-16 16a16.5 16.5 0 0 1-2.87-.26l-160-29.09A16 16 0 0 1 32 178.91V144H16a8 8 0 0 1 0-16h224a8 8 0 0 1 8 8M36 112h184a4 4 0 0 0 4-4V48.42a16.48 16.48 0 0 0-4.07-11.08a16 16 0 0 0-14.79-5.08l-160 29.09A16 16 0 0 0 32 77.09V108a4 4 0 0 0 4 4"></svg:path>`,
})
export class PhPerspectiveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneCallFillIcon],svg[ph-phone-call-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144.27 45.93a8 8 0 0 1 9.8-5.66a86.22 86.22 0 0 1 61.66 61.66a8 8 0 0 1-5.66 9.8a8.2 8.2 0 0 1-2.07.27a8 8 0 0 1-7.73-5.93a70.35 70.35 0 0 0-50.33-50.34a8 8 0 0 1-5.67-9.8m-2.33 41.8c13.79 3.68 22.65 12.55 26.33 26.34A8 8 0 0 0 176 120a8.2 8.2 0 0 0 2.07-.27a8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46m72.43 78.73l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8 8 0 0 0-.75.56L126.87 168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L89.54 41.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 24 88c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62"></svg:path>`,
})
export class PhPhoneCallFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneDisconnectFillIcon],svg[ph-phone-disconnect-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.28 161.84a16 16 0 0 1-18.38 5.06l-49-17.39l-.29-.11a16 16 0 0 1-9.72-11.59l-6.21-29.75a76.52 76.52 0 0 0-49.68.11l-5.9 29.52a16 16 0 0 1-9.75 11.73l-.29.11l-49 17.37a15.8 15.8 0 0 1-5.71 1.1a16 16 0 0 1-12.63-6.14c-17.23-22.22-15.3-51.71 4.69-71.71c56.15-56.17 151-56.17 207.18 0c19.99 19.98 21.92 49.47 4.69 71.69M216 192H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhPhoneDisconnectFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneFillIcon],svg[ph-phone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62"></svg:path>`,
})
export class PhPhoneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneIncomingFillIcon],svg[ph-phone-incoming-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.88 183.08A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62M152 112h40a8 8 0 0 0 0-16h-20.68l34.34-34.34a8 8 0 0 0-11.32-11.32L160 84.69V64a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhPhoneIncomingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneListFillIcon],svg[ph-phone-list-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.88 183.08A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15a.6.6 0 0 0 0 .12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.18-1.4l.12.06l47.1 21.11a16 16 0 0 1 9.56 16.62M144 72h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16m0 40h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhPhoneListFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneOutgoingFillIcon],svg[ph-phone-outgoing-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M146.34 109.66a8 8 0 0 1 0-11.32L180.69 64H160a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8v40a8 8 0 0 1-16 0V75.31l-34.34 34.35a8 8 0 0 1-11.32 0m68 56.8l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8 8 0 0 0-.75.56L126.87 168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L89.54 41.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 24 88c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62Z"></svg:path>`,
})
export class PhPhoneOutgoingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhonePauseFillIcon],svg[ph-phone-pause-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.88 183.08A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.18-1.4l.12.06l47.1 21.11a16 16 0 0 1 9.56 16.62M200 112a8 8 0 0 0 8-8V48a8 8 0 0 0-16 0v56a8 8 0 0 0 8 8m-40 0a8 8 0 0 0 8-8V48a8 8 0 0 0-16 0v56a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhPhonePauseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhonePlusFillIcon],svg[ph-phone-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.88 183.08A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15a.6.6 0 0 0 0 .12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.18-1.4l.12.06l47.1 21.11a16 16 0 0 1 9.56 16.62M144 88h24v24a8 8 0 0 0 16 0V88h24a8 8 0 0 0 0-16h-24V48a8 8 0 0 0-16 0v24h-24a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhPhonePlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneSlashFillIcon],svg[ph-phone-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.28 177.85a16 16 0 0 1-18.38 5.07l-24.76-19a3.4 3.4 0 0 1-.53-.48l-83.43-91.82a4 4 0 0 1 2.55-6.68c43-4.62 87.74 9.12 119.86 41.24c19.99 19.99 21.92 49.46 4.69 71.67M53.93 34.62a8 8 0 1 0-11.84 10.76l27.62 30.39a142 142 0 0 0-45.3 30.41c-20 20-21.92 49.46-4.69 71.67a16 16 0 0 0 18.38 5.07l49-17.37l.29-.11a16 16 0 0 0 9.75-11.72l5.9-29.51a74 74 0 0 1 8.57-2.39l90.5 99.56a8 8 0 1 0 11.84-10.76Z"></svg:path>`,
})
export class PhPhoneSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneTransferFillIcon],svg[ph-phone-transfer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 72a8 8 0 0 1 8-8h52.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L196.69 80H144a8 8 0 0 1-8-8m78.36 94.46l-47.11-21.11l-.11-.06a16 16 0 0 0-15.18 1.4a8 8 0 0 0-.75.56L126.87 168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L89.54 41.64a16 16 0 0 0-16.62-9.51A56.24 56.24 0 0 0 24 88c0 79.4 64.6 144 144 144a56.24 56.24 0 0 0 55.87-48.92a16 16 0 0 0-9.51-16.62"></svg:path>`,
})
export class PhPhoneTransferFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneXFillIcon],svg[ph-phone-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M146.34 98.34L164.69 80l-18.35-18.34a8 8 0 0 1 11.32-11.32L176 68.69l18.34-18.35a8 8 0 0 1 11.32 11.32L187.32 80l18.34 18.34a8 8 0 0 1-11.32 11.32L176 91.31l-18.34 18.35a8 8 0 0 1-11.32-11.32m68 68.12l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8 8 0 0 0-.75.56L126.87 168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L89.54 41.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 24 88c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62Z"></svg:path>`,
})
export class PhPhoneXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhosphorLogoFillIcon],svg[ph-phosphor-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 32H72a8 8 0 0 0-8 8v128a80.09 80.09 0 0 0 80 80a8 8 0 0 0 8-8v-64a72 72 0 0 0 0-144m-16 199.5A64.14 64.14 0 0 1 80.51 176H136Zm0-94L85.68 48H136Zm16 22.5V48a56 56 0 0 1 0 112"></svg:path>`,
})
export class PhPhosphorLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPiFillIcon],svg[ph-pi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-36 136a12 12 0 0 0 12-12a8 8 0 0 1 16 0a28 28 0 0 1-56 0V96h-32v80a8 8 0 0 1-16 0V96h-8a24 24 0 0 0-24 24a8 8 0 0 1-16 0a40 40 0 0 1 40-40h104a8 8 0 0 1 0 16h-32v60a12 12 0 0 0 12 12"></svg:path>`,
})
export class PhPiFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPianoKeysFillIcon],svg[ph-piano-keys-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M88 208H48V48h24v96a8 8 0 0 0 8 8h8Zm64 0h-48v-56h8a8 8 0 0 0 8-8V48h16v96a8 8 0 0 0 8 8h8Zm56 0h-40v-56h8a8 8 0 0 0 8-8V48h24z"></svg:path>`,
})
export class PhPianoKeysFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPicnicTableFillIcon],svg[ph-picnic-table-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m146.85 96l14.54 32H94.61l14.54-32ZM232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-24 80a8 8 0 0 0-8-8h-21l-14.58-32H176a8 8 0 0 0 0-16H80a8 8 0 0 0 0 16h11.58L77 128H56a8 8 0 0 0 0 16h13.76l-13 28.69a8 8 0 1 0 14.56 6.62l16-35.31h81.34l16.05 35.31a8 8 0 0 0 14.56-6.62l-13-28.69H200a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhPicnicTableFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPictureInPictureFillIcon],svg[ph-picture-in-picture-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144h-80v-64h80z"></svg:path>`,
})
export class PhPictureInPictureFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPiggyBankFillIcon],svg[ph-piggy-bank-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226 88.08c-.4-1-.82-2-1.25-3a87.93 87.93 0 0 0-30.17-37H216a8 8 0 0 0 0-16H112a88.12 88.12 0 0 0-87.72 81A32 32 0 0 0 0 144a8 8 0 0 0 16 0a16 16 0 0 1 8.57-14.16A87.7 87.7 0 0 0 46 178.22l12.56 35.16A16 16 0 0 0 73.64 224h12.72a16 16 0 0 0 15.07-10.62l1.92-5.38h57.3l1.92 5.38A16 16 0 0 0 177.64 224h12.72a16 16 0 0 0 15.07-10.62L221.64 168H224a24 24 0 0 0 24-24v-32a24 24 0 0 0-22-23.92M152 72h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m28 56a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhPiggyBankFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPillFillIcon],svg[ph-pill-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.43 39.6a53.27 53.27 0 0 0-75.33 0L39.6 141.09a53.26 53.26 0 0 0 75.32 75.31l101.51-101.49a53.32 53.32 0 0 0 0-75.31m-11.32 64l-50.75 50.74l-52.69-52.68l50.75-50.75a37.26 37.26 0 0 1 52.69 52.69m-15.43-21.26a8 8 0 0 1 0 11.32l-24 24a8 8 0 1 1-11.31-11.32l24-24a8 8 0 0 1 11.31 0"></svg:path>`,
})
export class PhPillFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPingPongFillIcon],svg[ph-ping-pong-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 196a16 16 0 0 0-6.65-11.7l-38-27.15l17-16.95a39.67 39.67 0 0 0 11-35.79a99.52 99.52 0 0 0-35.4-57.89A101.93 101.93 0 0 0 122.58 24A100.29 100.29 0 0 0 24 122.58a102.12 102.12 0 0 0 22.55 65.28a99.52 99.52 0 0 0 57.89 35.4a39.68 39.68 0 0 0 35.79-11l16.95-17l27.15 38A16 16 0 0 0 196 240c.44 0 .88.05 1.32.05a16 16 0 0 0 11.31-4.69l26.64-26.64A16 16 0 0 0 240 196m-42.6 28l-32.63-45.69a8 8 0 0 0-5.85-3.32h-.66a8 8 0 0 0-5.66 2.34l-23.63 23.63a23.68 23.68 0 0 1-21.36 6.63a80 80 0 0 1-12.3-3.5l108.8-108.8a80.6 80.6 0 0 1 3.5 12.3a23.67 23.67 0 0 1-6.63 21.36l-23.68 23.6a8 8 0 0 0 1 12.17l45.7 32.64Z"></svg:path>`,
})
export class PhPingPongFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPintGlassFillIcon],svg[ph-pint-glass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 26.69a8 8 0 0 0-6-2.69H56a8 8 0 0 0-7.94 9l23.15 193a16 16 0 0 0 15.89 14h81.8a16 16 0 0 0 15.89-14.09L207.94 33a8 8 0 0 0-1.94-6.31M191 40l-2.9 24H67.9L65 40Z"></svg:path>`,
})
export class PhPintGlassFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPinterestLogoFillIcon],svg[ph-pinterest-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 128.7c-.38 56.49-46.46 102.73-102.94 103.29a104.2 104.2 0 0 1-25.94-3a4 4 0 0 1-2.91-4.86l8.64-34.55A60.6 60.6 0 0 0 144 196c37 0 66.7-33.45 63.81-73.36A72 72 0 1 0 69.24 155A8 8 0 0 0 80 159.29a8.19 8.19 0 0 0 4-10.49a56 56 0 1 1 107.86-24.93C194 154.4 171.73 180 144 180a44.87 44.87 0 0 1-23.14-6.44l14.9-59.62a8 8 0 0 0-15.52-3.88L93.38 217.51a4 4 0 0 1-5.71 2.59A104 104 0 0 1 32 126.88C32.6 70.52 78.67 24.52 135 24a104 104 0 0 1 105 104.7"></svg:path>`,
})
export class PhPinterestLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPinwheelFillIcon],svg[ph-pinwheel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 218.34l-48.42-48.41c1.1-.33 2.19-.68 3.27-1.07A60 60 0 0 0 220.37 92a8 8 0 0 0-10.25-4.78l-44.2 16.08c.32-.62.64-1.24.93-1.88A60 60 0 0 0 92 19.65a8 8 0 0 0-4.82 10.25l16.09 44.22c-.63-.32-1.25-.65-1.89-1a60 60 0 0 0-81.73 74.89a8 8 0 0 0 10.25 4.78l44.2-16.09c-.32.63-.64 1.25-.93 1.89a60 60 0 0 0 74.89 81.73a8 8 0 0 0 4.78-10.25l-16.08-44.18c.62.31 1.24.62 1.88.91a59.9 59.9 0 0 0 22.48 5.58l57.22 57.23a8 8 0 0 0 11.32-11.32ZM109 203.87a44 44 0 0 1-3.73-77.81l29.6 81.33a43.6 43.6 0 0 1-25.87-3.52m43.4-109.25A43.77 43.77 0 0 1 134.8 114l-29.61-81.37a44 44 0 0 1 47.16 62Z"></svg:path>`,
})
export class PhPinwheelFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPipeFillIcon],svg[ph-pipe-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 104h-24V56h24a8 8 0 0 0 0-16h-26.17A16 16 0 0 0 192 32h-16a16 16 0 0 0-13.83 8H144A104.11 104.11 0 0 0 40 144v18.16A16 16 0 0 0 32 176v16a16 16 0 0 0 8 13.84V232a8 8 0 0 0 16 0v-24h48v24a8 8 0 0 0 16 0v-26.16a16 16 0 0 0 8-13.84v-16a16 16 0 0 0-8-13.84V144a24 24 0 0 1 24-24h18.17a16 16 0 0 0 13.83 8h16a16 16 0 0 0 13.83-8H232a8 8 0 0 0 0-16m-120 88H48v-16h64Zm64-80V48h16v64Z"></svg:path>`,
})
export class PhPipeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPipeWrenchFillIcon],svg[ph-pipe-wrench-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.28 55l-.17-.17l-44.9-42.28a16 16 0 0 0-22.5.08l-44.54 44.24l-1.54-1.56a25 25 0 0 0-35.36 35.27l1.46 1.48L52.69 112a16 16 0 0 0 0 22.63l12.68 12.68a16 16 0 0 0 22.59 0l19.93-19.65L120 140l-64.69 65.37a25 25 0 1 0 35.34 35.29l88.67-89.35a16 16 0 0 0 0-22.6l-35.69-36.05L156.56 80l.1.09L194 115.4a16 16 0 0 0 22.53-.09l3.71-3.71a40 40 0 0 0 0-56.57ZM76.69 136L64 123.33l20-19.88l12.69 12.86ZM209 100.28l-3.75 3.72a1.2 1.2 0 0 0-.16-.16l-37.4-35.34a16.05 16.05 0 0 0-22.39.12l-12.93 12.67l-12.94-13.06L164 24l.17.16l44.88 42.26a24 24 0 0 1-.08 33.86Z"></svg:path>`,
})
export class PhPipeWrenchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPixLogoFillIcon],svg[ph-pix-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.34 139.28l-19.56 19.55A4 4 0 0 1 213 160h-41.68l-32-32l32-32H213a4 4 0 0 1 2.82 1.17l19.56 19.55a16 16 0 0 1-.04 22.56M67.05 80H88a8 8 0 0 1 5.65 2.34L128 116.68l34.35-34.34A8 8 0 0 1 168 80h21a4 4 0 0 0 2.83-6.83l-52.5-52.51a16 16 0 0 0-22.56 0L64.22 73.17A4 4 0 0 0 67.05 80M189 176h-21a8 8 0 0 1-5.65-2.34L128 139.31l-34.35 34.35A8 8 0 0 1 88 176H67a4 4 0 0 0-2.83 6.83l52.5 52.51a16 16 0 0 0 22.56 0l52.5-52.51A4 4 0 0 0 189 176m-72.26-48l-32-32H43a4 4 0 0 0-2.82 1.17l-19.52 19.55a16 16 0 0 0 0 22.56l19.56 19.55A4 4 0 0 0 43 160h41.68Z"></svg:path>`,
})
export class PhPixLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPizzaFillIcon],svg[ph-pizza-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.54 63a15.9 15.9 0 0 0-7.25-9.9a201.49 201.49 0 0 0-208.58 0a16 16 0 0 0-5.37 22l96 157.27a16 16 0 0 0 27.36 0l96-157.27a15.82 15.82 0 0 0 1.84-12.1m-55.1 68.53a40 40 0 0 0-41.38 67.77L128 224l-31.5-51.57a40 40 0 1 0-41.35-67.76L48.8 94.26a152 152 0 0 1 158.39 0Z"></svg:path>`,
})
export class PhPizzaFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlaceholderFillIcon],svg[ph-placeholder-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-20.69 155.31a8 8 0 0 1-11.31 0L68.69 80A8 8 0 0 1 80 68.69L187.31 176a8 8 0 0 1 0 11.31"></svg:path>`,
})
export class PhPlaceholderFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlanetFillIcon],svg[ph-planet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.11 60.68c-7.65-13.19-27.85-16.16-58.5-8.66a96 96 0 0 0-153.8 88.28C5.09 169 5.49 186 10.9 195.32C16 204.16 26.64 208 40.64 208a124 124 0 0 0 28.79-4a96 96 0 0 0 153.78-88.25c12.51-13 20.83-25.35 23.66-35.92c1.96-7.32 1.37-13.76-1.76-19.15m-13.69 15c-6.11 22.78-48.65 57.31-87.52 79.64c-67.81 39-113.62 41.52-119.16 32c-1.46-2.51-.65-7.24 2.22-13a80 80 0 0 1 10.28-15.05a95.5 95.5 0 0 0 6.23 14.18a4 4 0 0 0 4 2.12a122 122 0 0 0 16.95-3.32c21.23-5.55 46.63-16.48 71.52-30.78s47-30.66 62.45-46.15a123 123 0 0 0 11.31-12.87a4 4 0 0 0 .17-4.52a96 96 0 0 0-9.1-12.46c14.21-2.35 27.37-2.17 30.5 3.24c.92 1.57.97 3.92.15 6.98Z"></svg:path>`,
})
export class PhPlanetFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlantFillIcon],svg[ph-plant-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.41 159.07a60.9 60.9 0 0 1-31.83 8.86a71.7 71.7 0 0 1-27.36-5.66A55.55 55.55 0 0 0 136 194.51V224a8 8 0 0 1-8.53 8a8.18 8.18 0 0 1-7.47-8.25v-12.44l-38.62-38.62A52.5 52.5 0 0 1 63.44 176a45.8 45.8 0 0 1-23.92-6.67C17.73 156.09 6 125.62 8.27 87.79a8 8 0 0 1 7.52-7.52c37.83-2.23 68.3 9.46 81.5 31.25a46 46 0 0 1 6.45 28.48a4 4 0 0 1-6.89 2.43l-19.2-20.1a8 8 0 0 0-11.31 11.31l53.88 55.25c.06-.78.13-1.56.21-2.33a68.56 68.56 0 0 1 18.64-39.46l50.59-53.46a8 8 0 0 0-11.31-11.32l-49 51.82a4 4 0 0 1-6.78-1.74c-4.74-17.48-2.65-34.88 6.4-49.82c17.86-29.48 59.42-45.26 111.18-42.22a8 8 0 0 1 7.52 7.52c3 51.77-12.78 93.33-42.26 111.19"></svg:path>`,
})
export class PhPlantFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlayCircleFillIcon],svg[ph-play-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40.55 110.58l-52 36A8 8 0 0 1 104 164V92a8 8 0 0 1 12.55-6.58l52 36a8 8 0 0 1 0 13.16"></svg:path>`,
})
export class PhPlayCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlayFillIcon],svg[ph-play-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82a16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128"></svg:path>`,
})
export class PhPlayFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlayPauseFillIcon],svg[ph-play-pause-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 64v128a8 8 0 0 1-16 0V64a8 8 0 0 1 16 0m40-8a8 8 0 0 0-8 8v128a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8m-87.33 58.66L48.48 58.51A15.91 15.91 0 0 0 24 71.85v112.3A15.83 15.83 0 0 0 32.23 198a15.95 15.95 0 0 0 16.25-.53l88.19-56.15a15.8 15.8 0 0 0 0-26.68Z"></svg:path>`,
})
export class PhPlayPauseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlaylistFillIcon],svg[ph-playlist-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M64 72h128a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m0 48h72a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m40 64H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m103.59-53.47a8 8 0 0 1-10.12 5.06L184 131.1V176a24 24 0 1 1-16-22.62V120a8 8 0 0 1 10.53-7.59l24 8a8 8 0 0 1 5.06 10.12"></svg:path>`,
})
export class PhPlaylistFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlugChargingFillIcon],svg[ph-plug-charging-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 56h-48V16a8 8 0 0 0-16 0v40H96V16a8 8 0 0 0-8-8c-3.21 0-8 2.27-8 8.54V56H32.55C26.28 56 24 60.78 24 64a8 8 0 0 0 8 8h16v88a40 40 0 0 0 40 40h32v40a8 8 0 0 0 16 0v-40h32a40 40 0 0 0 40-40V72h16a8 8 0 0 0 0-16m-72.51 74.81l-12 32a8 8 0 0 1-15-5.62l8-21.19H112a8 8 0 0 1-7.49-10.81l12-32a8 8 0 1 1 15 5.62l-8 21.19H144a8 8 0 0 1 7.49 10.81"></svg:path>`,
})
export class PhPlugChargingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlugFillIcon],svg[ph-plug-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.66 77.66L203.31 112l26.35 26.34a8 8 0 0 1-11.32 11.32l-6.34-6.35l-53 53a40 40 0 0 1-56.57 0l-15.68-15.74l-49.09 49.09a8 8 0 0 1-11.32-11.32l49.09-49.09l-15.71-15.71a40 40 0 0 1 0-56.57l53-53l-6.35-6.34a8 8 0 0 1 11.32-11.32L144 52.69l34.34-34.35a8 8 0 1 1 11.32 11.32L155.31 64L192 100.69l34.34-34.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhPlugFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlugsConnectedFillIcon],svg[ph-plugs-connected-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88.57 35a8 8 0 0 1 14.86-6l8 20a8 8 0 0 1-14.86 6ZM29 103.43l20 8a8 8 0 1 0 6-14.86l-20-8a8 8 0 0 0-6 14.86m198 49.14l-20-8a8 8 0 1 0-6 14.86l20 8a8 8 0 0 0 6-14.86M159.43 201a8 8 0 0 0-14.86 6l8 20a8 8 0 1 0 14.86-6Zm78.48-182.48a8 8 0 0 0-11.5-.18L174 70.75l-5.38-5.38a32 32 0 0 0-45.28 0l-17.2 17.17a4 4 0 0 0 0 5.66l61.7 61.66a4 4 0 0 0 5.66 0l16.74-16.74a32.76 32.76 0 0 0 9.81-22.52a31.82 31.82 0 0 0-9.37-23.17l-5.38-5.37l52.2-52.17a8.22 8.22 0 0 0 .41-11.37M85.64 90.34a8 8 0 0 0-11.49.18a8.22 8.22 0 0 0 .41 11.37l6.11 6.11l-15.33 15.31A31.82 31.82 0 0 0 56 146.47A32.75 32.75 0 0 0 65.77 169l5 4.94l-52.28 52.19a8.21 8.21 0 0 0-.61 11.1a8 8 0 0 0 11.72.43L82 185.25l5.37 5.38a32.1 32.1 0 0 0 45.29 0L148 175.31l6.34 6.35a8 8 0 0 0 11.32-11.32Z"></svg:path>`,
})
export class PhPlugsConnectedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlugsFillIcon],svg[ph-plugs-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.66 149.66L131.31 168l18.35 18.34a8 8 0 0 1-11.32 11.32l-6.34-6.35l-23.31 23.32a32.06 32.06 0 0 1-45.26 0l-5.37-5.38l-28.4 28.41a8 8 0 0 1-11.32-11.32l28.41-28.4l-5.38-5.37a32 32 0 0 1 0-45.26L64.69 124l-6.35-6.34a8 8 0 0 1 11.32-11.32L88 124.69l18.34-18.35a8 8 0 0 1 11.32 11.32L99.31 136L120 156.69l18.34-18.35a8 8 0 0 1 11.32 11.32m88-131.32a8 8 0 0 0-11.32 0l-28.4 28.41l-5.37-5.38a32.05 32.05 0 0 0-45.26 0L124 64.69l-6.34-6.35a8 8 0 0 0-11.32 11.32l80 80a8 8 0 0 0 11.32-11.32l-6.35-6.34l23.32-23.31a32 32 0 0 0 0-45.26l-5.38-5.37l28.41-28.4a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhPlugsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlusCircleFillIcon],svg[ph-plus-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24m40 112h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhPlusCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlusFillIcon],svg[ph-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 104h-48v48a8 8 0 0 1-16 0v-48H72a8 8 0 0 1 0-16h48V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlusMinusFillIcon],svg[ph-plus-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 96a8 8 0 0 1 8-8h16V72a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16H96v16a8 8 0 0 1-16 0v-16H64a8 8 0 0 1-8-8m24 96a8 8 0 0 1-5.66-13.66l96-96a8 8 0 0 1 11.32 11.32l-96 96A8 8 0 0 1 80 192m112-8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhPlusMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlusSquareFillIcon],svg[ph-plus-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-40 104h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhPlusSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPokerChipFillIcon],svg[ph-poker-chip-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M60.4 71.72l17.07 17.07a63.66 63.66 0 0 0-13 31.21h-24.1A87.6 87.6 0 0 1 60.4 71.72M40.37 136h24.15a63.66 63.66 0 0 0 13 31.21L60.4 184.28A87.6 87.6 0 0 1 40.37 136M120 215.63a87.6 87.6 0 0 1-48.28-20l17.07-17.07A63.66 63.66 0 0 0 120 191.48Zm0-151.11a63.66 63.66 0 0 0-31.21 13L71.72 60.4a87.6 87.6 0 0 1 48.28-20ZM215.63 120h-24.15a63.66 63.66 0 0 0-12.95-31.21l17.07-17.07A87.6 87.6 0 0 1 215.63 120M136 40.37a87.6 87.6 0 0 1 48.28 20l-17.07 17.1a63.66 63.66 0 0 0-31.21-13Zm0 175.26v-24.15a63.66 63.66 0 0 0 31.21-12.95l17.07 17.07A87.6 87.6 0 0 1 136 215.63m59.6-31.35l-17.07-17.07A63.66 63.66 0 0 0 191.48 136h24.15a87.6 87.6 0 0 1-20.03 48.28"></svg:path>`,
})
export class PhPokerChipFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPoliceCarFillIcon],svg[ph-police-car-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 24a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8m152 88a8 8 0 0 1-8 8h-8v80a16 16 0 0 1-16 16h-24a16 16 0 0 1-16-16v-8H80v8a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16v-80h-8a8 8 0 0 1 0-16h11.36l27.39-47.94A16 16 0 0 1 68.64 48h118.72a16 16 0 0 1 13.89 8.06L228.64 104H240a8 8 0 0 1 8 8M88 144a8 8 0 0 0-8-8H56a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m120 0a8 8 0 0 0-8-8h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m2.21-40l-22.85-40H68.64l-22.85 40Z"></svg:path>`,
})
export class PhPoliceCarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPolygonFillIcon],svg[ph-polygon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.81 52.19a28 28 0 0 0-39.6 0a28 28 0 0 0-4 5L148 47.33a28 28 0 0 0-47.8-19.14A28 28 0 0 0 94.7 60L54.58 96.1a28 28 0 0 0-34.39 4.1a28 28 0 0 0 36.7 42.12l76.75 56.28a28 28 0 1 0 46.17-10.39a28 28 0 0 0-3.33-2.84L206.63 100h1.38a28 28 0 0 0 19.8-47.79Zm-66.42 127.86a28 28 0 0 0-18.29 5.64l-76.74-56.28A28.15 28.15 0 0 0 65.29 108l40.12-36.11a28 28 0 0 0 38.37-9.12L180 72.66a27.88 27.88 0 0 0 8.17 19.13a28.6 28.6 0 0 0 3.32 2.85Z"></svg:path>`,
})
export class PhPolygonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPopcornFillIcon],svg[ph-popcorn-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.52 74.21a8 8 0 0 0-7.13-2A44 44 0 0 0 168 41.67a44 44 0 0 0-80 0a44 44 0 0 0-54.4 30.51a8 8 0 0 0-9.4 9.65l30.56 129.84A16 16 0 0 0 70.34 224h115.32a16 16 0 0 0 15.58-12.33l30.55-129.84a8 8 0 0 0-2.27-7.62M70.34 208L42.91 91.44l37.85 10.81L94.86 208Zm51.72-134.24l-34.49 13.8L49 76.54a28 28 0 0 1 40.1-17.28a8 8 0 0 0 11.56-5.34a28 28 0 0 1 54.66 0a8 8 0 0 0 11.56 5.34A28 28 0 0 1 207 76.54l-38.56 11l-34.49-13.8a16 16 0 0 0-11.89.02M185.66 208h-24.52l14.1-105.75l37.85-10.81Z"></svg:path>`,
})
export class PhPopcornFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPopsicleFillIcon],svg[ph-popsicle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 8a72.08 72.08 0 0 0-72 72v96a16 16 0 0 0 16 16h32v40a24 24 0 0 0 48 0v-40h32a16 16 0 0 0 16-16V80a72.08 72.08 0 0 0-72-72m-16 144a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0Zm24 80a8 8 0 0 1-16 0v-40h16Zm24-80a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhPopsicleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPottedPlantFillIcon],svg[ph-potted-plant-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 144h-76.7l22.41-22.41a59.55 59.55 0 0 0 26.1 6.36a49.56 49.56 0 0 0 25.89-7.22c23.72-14.36 36.43-47.6 34-88.92a8 8 0 0 0-7.52-7.52c-41.32-2.43-74.56 10.28-88.93 34c-9.35 15.45-9.59 34.11-.86 52L120 124.68l-12.21-12.21c6-13.25 5.57-27-1.39-38.48C95.53 56 70.61 46.41 39.73 48.22a8 8 0 0 0-7.51 7.51C30.4 86.6 40 111.52 58 122.4a38.2 38.2 0 0 0 20 5.6a45 45 0 0 0 18.52-4.19L108.69 136l-8 8H56a8 8 0 0 0 0 16h9.59l13.21 59.47A15.89 15.89 0 0 0 94.42 232h67.17a15.91 15.91 0 0 0 15.62-12.53L190.42 160H200a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhPottedPlantFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPowerFillIcon],svg[ph-power-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104 104 0 0 0 128 24m-8 40a8 8 0 0 1 16 0v64a8 8 0 0 1-16 0Zm8 144A80 80 0 0 1 83.55 61.48a8 8 0 1 1 8.9 13.29a64 64 0 1 0 71.1 0a8 8 0 1 1 8.9-13.29A80 80 0 0 1 128 208"></svg:path>`,
})
export class PhPowerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPrescriptionFillIcon],svg[ph-prescription-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 120H96V72h32a24 24 0 0 1 0 48m96-72v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-34.34 138.34L175.31 172l14.35-14.34a8 8 0 0 0-11.32-11.32L164 160.69l-26-26A40 40 0 0 0 128 56H88a8 8 0 0 0-8 8v112a8 8 0 0 0 16 0v-40h20.69l36 36l-14.35 14.34a8 8 0 0 0 11.32 11.32L164 183.31l14.34 14.35a8 8 0 0 0 11.32-11.32"></svg:path>`,
})
export class PhPrescriptionFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPresentationChartFillIcon],svg[ph-presentation-chart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40h-80V24a8 8 0 0 0-16 0v16H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h39.36l-21.61 27a8 8 0 0 0 12.5 10l29.59-37h56.32l29.59 37a8 8 0 1 0 12.5-10l-21.61-27H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M104 144a8 8 0 0 1-16 0v-24a8 8 0 0 1 16 0Zm32 0a8 8 0 0 1-16 0v-40a8 8 0 0 1 16 0Zm32 0a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhPresentationChartFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPresentationFillIcon],svg[ph-presentation-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40h-80V24a8 8 0 0 0-16 0v16H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h39.36l-21.61 27a8 8 0 0 0 12.5 10l29.59-37h56.32l29.59 37a8 8 0 1 0 12.5-10l-21.61-27H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhPresentationFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPrinterFillIcon],svg[ph-printer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 96v80a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8v-32H24a8 8 0 0 1-8-8V96c0-13.23 11.36-24 25.33-24H56V40a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8v32h14.67C228.64 72 240 82.77 240 96M72 72h112V48H72Zm112 88H72v48h112Zm16-44a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhPrinterFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phProhibitFillIcon],svg[ph-prohibit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 128a71.7 71.7 0 0 1-15.78 44.91L83.09 71.78A71.95 71.95 0 0 1 200 128m-144 0a71.95 71.95 0 0 0 116.91 56.22L71.78 83.09A71.7 71.7 0 0 0 56 128m180 0A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-20 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></svg:path>`,
})
export class PhProhibitFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phProhibitInsetFillIcon],svg[ph-prohibit-inset-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m37.66 141.66a8 8 0 0 1-11.32 0l-64-64a8 8 0 0 1 11.32-11.32l64 64a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhProhibitInsetFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phProjectorScreenChartFillIcon],svg[ph-projector-screen-chart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 64V48a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16v96h-8a8 8 0 0 0 0 16h88v17.38a24 24 0 1 0 16 0V192h88a8 8 0 0 0 0-16h-8V80a16 16 0 0 0 16-16m-128 80a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm24 96a8 8 0 1 1 8-8a8 8 0 0 1-8 8m8-96a8 8 0 0 1-16 0v-24a8 8 0 0 1 16 0Zm32 0a8 8 0 0 1-16 0v-32a8 8 0 0 1 16 0ZM40 64V48h176v16z"></svg:path>`,
})
export class PhProjectorScreenChartFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phProjectorScreenFillIcon],svg[ph-projector-screen-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 64V48a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16v96h-8a8 8 0 0 0 0 16h88v17.38a24 24 0 1 0 16 0V192h88a8 8 0 0 0 0-16h-8V80a16 16 0 0 0 16-16M128 240a8 8 0 1 1 8-8a8 8 0 0 1-8 8M40 48h176v16H40Z"></svg:path>`,
})
export class PhProjectorScreenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPulseFillIcon],svg[ph-pulse-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-8 96h-19.36L159 188a8 8 0 0 1-6.95 4h-.46a8 8 0 0 1-6.89-4.84L103 89.92L79 132a8 8 0 0 1-7 4H48a8 8 0 0 1 0-16h19.36l29.69-52a8 8 0 0 1 14.3.82L153 166.08l24-42.05a8 8 0 0 1 6.95-4h24a8 8 0 0 1 0 16Z"></svg:path>`,
})
export class PhPulseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPushPinFillIcon],svg[ph-push-pin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.33 104l-53.47 53.65c4.56 12.67 6.45 33.89-13.19 60A15.93 15.93 0 0 1 157 224h-1.13a16 16 0 0 1-11.32-4.69L96.29 171l-42.63 42.66a8 8 0 0 1-11.32-11.32L85 159.71l-48.3-48.3A16 16 0 0 1 38 87.63c25.42-20.51 49.75-16.48 60.4-13.14L152 20.7a16 16 0 0 1 22.63 0l60.69 60.68a16 16 0 0 1 .01 22.62"></svg:path>`,
})
export class PhPushPinFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPushPinSimpleFillIcon],svg[ph-push-pin-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 176a8 8 0 0 1-8 8h-80v56a8 8 0 0 1-16 0v-56H40a8 8 0 0 1 0-16h9.29L70.46 48H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16h-6.46l21.17 120H216a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhPushPinSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPushPinSimpleSlashFillIcon],svg[ph-push-pin-simple-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M79.25 38.69a4 4 0 0 1 3-6.69H192a8 8 0 0 1 8 8.53a8.17 8.17 0 0 1-8.27 7.47h-6.19l21.16 119.91a4 4 0 0 1-6.9 3.39Zm134.67 171.93l-160-176a8 8 0 1 0-11.84 10.76L66.24 72l-16.95 96H40a8 8 0 0 0 0 16h80v56a8 8 0 0 0 16 0v-56h32.1l34 37.38a8 8 0 1 0 11.84-10.76Z"></svg:path>`,
})
export class PhPushPinSimpleSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPushPinSlashFillIcon],svg[ph-push-pin-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.33 104l-47.62 47.78a4 4 0 0 1-5.79-.14L108 70.27a4 4 0 0 1 .13-5.51L152 20.7a16 16 0 0 1 22.63 0l60.69 60.68a16 16 0 0 1 .01 22.62M53.92 34.62a8 8 0 0 0-12 .21a8.18 8.18 0 0 0 .37 10.75l25.03 27.57C58.26 75.09 48.2 79.37 38 87.63a16 16 0 0 0-1.29 23.78L85 159.71l-42.45 42.43a8.17 8.17 0 0 0-.6 11.09a8 8 0 0 0 11.71.43L96.29 171l48.29 48.29A16 16 0 0 0 155.9 224h1.13a15.93 15.93 0 0 0 11.64-6.33a88.6 88.6 0 0 0 11.64-20.2l21.77 23.95a8 8 0 1 0 11.84-10.76Z"></svg:path>`,
})
export class PhPushPinSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPuzzlePieceFillIcon],svg[ph-puzzle-piece-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M165.78 224H208a16 16 0 0 0 16-16v-37.65a8 8 0 0 0-11.06-7.35a23.4 23.4 0 0 1-8.94 1.77c-13.23 0-24-11.1-24-24.73s10.77-24.73 24-24.73a23.4 23.4 0 0 1 8.94 1.77a8 8 0 0 0 11.06-7.43V72a16 16 0 0 0-16-16h-36.22a35 35 0 0 0 .22-4a36 36 0 0 0-72 0a35 35 0 0 0 .22 4H64a16 16 0 0 0-16 16v32.22a35 35 0 0 0-4-.22a36 36 0 0 0 0 72a35 35 0 0 0 4-.22V208a16 16 0 0 0 16 16h42.22"></svg:path>`,
})
export class PhPuzzlePieceFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQrCodeFillIcon],svg[ph-qr-code-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 56v48a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16m-16 80H56a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m96-96h-48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-56 144a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m64-32h-24v-8a8 8 0 0 0-16 0v56h-24a8 8 0 0 0 0 16h32a8 8 0 0 0 8-8v-40h24a8 8 0 0 0 0-16m0 32a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhQrCodeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQuestionFillIcon],svg[ph-question-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 168a12 12 0 1 1 12-12a12 12 0 0 1-12 12m8-48.72v.72a8 8 0 0 1-16 0v-8a8 8 0 0 1 8-8c13.23 0 24-9 24-20s-10.77-20-24-20s-24 9-24 20v4a8 8 0 0 1-16 0v-4c0-19.85 17.94-36 40-36s40 16.15 40 36c0 17.38-13.76 31.93-32 35.28"></svg:path>`,
})
export class PhQuestionFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQuestionMarkFillIcon],svg[ph-question-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-64 119.28v.72a8 8 0 0 1-16 0v-8a8 8 0 0 1 8-8c13.23 0 24-9 24-20s-10.77-20-24-20s-24 9-24 20v4a8 8 0 0 1-16 0v-4c0-19.85 17.94-36 40-36s40 16.15 40 36c0 17.38-13.77 31.93-32 35.28m4 36.72a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhQuestionMarkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQueueFillIcon],svg[ph-queue-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M64 72h128a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m40 112H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m0-48H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m92.44 22.66l-48 32A8 8 0 0 1 144 192a8 8 0 0 1-8-8v-64a8 8 0 0 1 12.44-6.66l48 32a8 8 0 0 1 0 13.32"></svg:path>`,
})
export class PhQueueFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQuotesFillIcon],svg[ph-quotes-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 72v88a48.05 48.05 0 0 1-48 48a8 8 0 0 1 0-16a32 32 0 0 0 32-32v-8H40a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h60a16 16 0 0 1 16 16m100-16h-60a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h60v8a32 32 0 0 1-32 32a8 8 0 0 0 0 16a48.05 48.05 0 0 0 48-48V72a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhQuotesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRabbitFillIcon],svg[ph-rabbit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M199.28 149.8A71.6 71.6 0 0 0 193 129c19-37.94 30.45-88.28 17.34-110a22 22 0 0 0-19.4-11c-14.12 0-26 11.89-36.44 36.36c-6.22 14.62-10.85 31.32-14 44.74a71.8 71.8 0 0 0-25 0c-3.13-13.42-7.76-30.12-14-44.74C91.1 19.89 79.18 8 65.06 8a22 22 0 0 0-19.42 11.08C32.53 40.76 44 91.1 63 129a71.6 71.6 0 0 0-6.26 20.76A52 52 0 1 0 128 225.52l-21.12-19.37a8 8 0 1 1 10.24-12.3L128 202.9l10.88-9.05a8 8 0 0 1 10.24 12.3L128 225.52a52 52 0 1 0 71.28-75.72m-126-36.53A218.5 218.5 0 0 1 58.4 67.08c-3.49-18.13-3.15-33 .93-39.72A6 6 0 0 1 65.06 24c6.61 0 14.52 9.7 21.72 26.62c5.93 13.94 10.35 30.12 13.33 43a71.7 71.7 0 0 0-26.88 19.64ZM100 176a12 12 0 1 1 12-12a12 12 0 0 1-12 12m56 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m20.55-69.17a71.9 71.9 0 0 0-20.66-13.2c3-12.89 7.4-29.07 13.33-43C176.42 33.7 184.33 24 190.94 24a6 6 0 0 1 5.73 3.36c4.08 6.74 4.42 21.59.93 39.72a218.5 218.5 0 0 1-14.83 46.19a73 73 0 0 0-6.22-6.44"></svg:path>`,
})
export class PhRabbitFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRacquetFillIcon],svg[ph-racquet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 26.05C202-1.88 151.53 3.16 117.4 37.3c-31.79 31.79-38.33 77.77-16.51 106.49l-29.56 29.56l-.68-.68a16 16 0 0 0-22.64 0L20.69 200a16 16 0 0 0 0 22.64l12.69 12.69a16 16 0 0 0 22.63 0L83.34 208a16 16 0 0 0 0-22.63l-.69-.69l29.56-29.56c11.29 8.58 25.24 12.79 40 12.79c22.72 0 47.25-10 66.54-29.3C252.83 104.47 257.88 54 230 26.05M224.23 104h-24.17V72h32a72.45 72.45 0 0 1-7.83 32M136 149.61A44.15 44.15 0 0 1 106.39 120H136ZM104 104a72.24 72.24 0 0 1 7.86-32H136v32Zm48-32h32v32h-32Zm77.67-16h-29.61V26.28a44.23 44.23 0 0 1 29.66 29.66Zm-45.82-32h.16v32h-32V31.76a72.5 72.5 0 0 1 31.89-7.86ZM136 42.06v13.88h-13.84a90 90 0 0 1 6.56-7.32a93 93 0 0 1 7.28-6.56m16 109.92V120h32v24.16a72.24 72.24 0 0 1-31.95 7.84Zm48-18.14V120h14a92 92 0 0 1-6.56 7.32a90 90 0 0 1-7.38 6.52Z"></svg:path>`,
})
export class PhRacquetFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRadicalFillIcon],svg[ph-radical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 80a8 8 0 0 1-16 0v-8h-66.58l-30 75a8 8 0 0 1-14.86 0l-32-80a8 8 0 1 1 14.87-6L88 154.46L112.57 93a8 8 0 0 1 7.43-5h80a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhRadicalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRadioButtonFillIcon],svg[ph-radio-button-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m56-88a56 56 0 1 1-56-56a56.06 56.06 0 0 1 56 56"></svg:path>`,
})
export class PhRadioButtonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRadioFillIcon],svg[ph-radio-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 64H86.51L194.3 31.67a8 8 0 0 0-4.6-15.33l-160 48A8 8 0 0 0 24 72v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16M104 176H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m0-32H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m0-32H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m64 56a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class PhRadioFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRadioactiveFillIcon],svg[ph-radioactive-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 128a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-15.78 3.51A29 29 0 0 1 100 128a28 28 0 0 1 16.94-25.73a4 4 0 0 0 1.87-5.66L90.75 48a16 16 0 0 0-23.1-5.07a103.83 103.83 0 0 0-43.58 75.49a16.2 16.2 0 0 0 4.17 12.37A16 16 0 0 0 40 136h56.26a4 4 0 0 0 3.96-4.49m131.71-13.09a103.83 103.83 0 0 0-43.58-75.49a16 16 0 0 0-23.1 5.07l-28.06 48.61a4 4 0 0 0 1.87 5.66A28 28 0 0 1 156 128a29 29 0 0 1-.22 3.51a4 4 0 0 0 4 4.49H216a16 16 0 0 0 11.76-5.21a16.2 16.2 0 0 0 4.17-12.37m-81.13 33.06a4 4 0 0 0-5.91-1.15a28 28 0 0 1-33.78 0a4 4 0 0 0-5.91 1.15l-27.95 48.43a16 16 0 0 0 7.12 22.52a104.24 104.24 0 0 0 87.26 0a16 16 0 0 0 7.12-22.52Z"></svg:path>`,
})
export class PhRadioactiveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRainbowCloudFillIcon],svg[ph-rainbow-cloud-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 160a48.05 48.05 0 0 1-48 48h-48c-17.65 0-32-14.75-32-32.89s14.35-32.89 32-32.89a31 31 0 0 1 3.34.18A48 48 0 0 1 248 160M112 72a87.57 87.57 0 0 1 61.35 24.91a8 8 0 0 0 11.15-11.47A104 104 0 0 0 8 160v16a8 8 0 0 0 16 0v-16a88.1 88.1 0 0 1 88-88m0 32a55.58 55.58 0 0 1 33.13 10.84A8 8 0 1 0 154.6 102A72 72 0 0 0 40 160v16a8 8 0 0 0 16 0v-16a56.06 56.06 0 0 1 56-56m15.21 26.71a8 8 0 0 0-5.94-9.63A40 40 0 0 0 72 160v16a8 8 0 0 0 16 0v-16a24 24 0 0 1 29.57-23.35a8 8 0 0 0 9.64-5.94"></svg:path>`,
})
export class PhRainbowCloudFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRainbowFillIcon],svg[ph-rainbow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 48A120.13 120.13 0 0 0 8 168v16a8 8 0 0 0 8 8h224a8 8 0 0 0 8-8v-16A120.13 120.13 0 0 0 128 48m32 128a8 8 0 0 1-8-8a24 24 0 0 0-48 0a8 8 0 0 1-16 0a40 40 0 0 1 80 0a8 8 0 0 1-8 8m32 0a8 8 0 0 1-8-8a56 56 0 0 0-112 0a8 8 0 0 1-16 0a72 72 0 0 1 144 0a8 8 0 0 1-8 8m32 0a8 8 0 0 1-8-8a88 88 0 0 0-176 0a8 8 0 0 1-16 0a104 104 0 0 1 208 0a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhRainbowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRankingFillIcon],svg[ph-ranking-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 200h-8v-56a16 16 0 0 0-16-16h-40V56a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v32H40a16 16 0 0 0-16 16v96h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-160 0H40v-96h40Zm60-64a8 8 0 0 1-16 0v-28.9l-1.47.49a8 8 0 0 1-5.06-15.18l12-4A8 8 0 0 1 140 96Zm76 64h-40v-56h40Z"></svg:path>`,
})
export class PhRankingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phReadCvLogoFillIcon],svg[ph-read-cv-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51m-75.28 92.31a8 8 0 0 1-7.87 6.61a8.3 8.3 0 0 1-1.4-.12l-41.5-7.33A8 8 0 0 1 87.52 115l41.48 7.29a8 8 0 0 1 6.5 9.27m47-24.18a8 8 0 0 1-7.86 6.61a7.6 7.6 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1 2.79-15.76l83 14.66a8 8 0 0 1 6.51 9.27Zm5.55-31.52a8 8 0 0 1-7.87 6.61a8.4 8.4 0 0 1-1.4-.12l-83-14.66a8 8 0 1 1 2.78-15.75l83 14.65a8 8 0 0 1 6.52 9.27Z"></svg:path>`,
})
export class PhReadCvLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phReceiptFillIcon],svg[ph-receipt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v152a8 8 0 0 0 11.58 7.15L64 200.94l28.42 14.21a8 8 0 0 0 7.16 0L128 200.94l28.42 14.21a8 8 0 0 0 7.16 0L192 200.94l28.42 14.21A8 8 0 0 0 232 208V56a16 16 0 0 0-16-16m-40 104H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m0-32H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhReceiptFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phReceiptXFillIcon],svg[ph-receipt-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v152a8 8 0 0 0 11.58 7.15L64 200.94l28.42 14.21a8 8 0 0 0 7.16 0L128 200.94l28.42 14.21a8 8 0 0 0 7.16 0L192 200.94l28.42 14.21A8 8 0 0 0 232 208V56a16 16 0 0 0-16-16m-58.34 98.34a8 8 0 0 1-11.32 11.32L128 131.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L116.69 120l-18.35-18.34a8 8 0 0 1 11.32-11.32L128 108.69l18.34-18.35a8 8 0 0 1 11.32 11.32L139.31 120Z"></svg:path>`,
})
export class PhReceiptXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRecordFillIcon],svg[ph-record-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m72-88a72 72 0 1 1-72-72a72.08 72.08 0 0 1 72 72"></svg:path>`,
})
export class PhRecordFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRectangleDashedFillIcon],svg[ph-rectangle-dashed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M80 192H64a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h16a8 8 0 0 1 0 16m0-112H64v32a8 8 0 0 1-16 0V80a16 16 0 0 1 16-16h16a8 8 0 0 1 0 16m64 112h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16m0-112h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16m64 96a16 16 0 0 1-16 16h-16a8 8 0 0 1 0-16h16v-32a8 8 0 0 1 16 0Zm0-64a8 8 0 0 1-16 0V80h-16a8 8 0 0 1 0-16h16a16 16 0 0 1 16 16Z"></svg:path>`,
})
export class PhRectangleDashedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRectangleFillIcon],svg[ph-rectangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhRectangleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRecycleFillIcon],svg[ph-recycle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 208a8 8 0 0 1-8 8H40a24 24 0 0 1-20.77-36l28-48.3l-13.82-8a8 8 0 0 1 1.92-14.7l32.77-8.77a8 8 0 0 1 9.8 5.66l8.79 32.77a8 8 0 0 1-11.73 9l-13.88-8L33.11 188A8 8 0 0 0 40 200h48a8 8 0 0 1 8 8m32-176a7.85 7.85 0 0 1 6.92 4l28 48.3l-13.82 8a8 8 0 0 0 1.9 14.62l32.78 8.79a8.2 8.2 0 0 0 2.07.27a8 8 0 0 0 7.72-5.93l8.79-32.79a8 8 0 0 0-11.72-9l-13.89 8L148.77 28a24 24 0 0 0-41.54 0L84.07 68a8 8 0 0 0 13.85 8l23.16-40a7.85 7.85 0 0 1 6.92-4m108.73 148l-23.14-40a8 8 0 0 0-13.84 8l23.14 40a8 8 0 0 1-6.89 12h-56v-16a8 8 0 0 0-13.66-5.66l-24 24a8 8 0 0 0 0 11.32l24 24A8 8 0 0 0 160 232v-16h56a24 24 0 0 0 20.77-36Z"></svg:path>`,
})
export class PhRecycleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRedditLogoFillIcon],svg[ph-reddit-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 104a32 32 0 0 0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17l17.72 2.72a24 24 0 1 0 2.87-15.74l-26-4a8 8 0 0 0-9.11 6.59l-6.87 41.48c-21.84.94-42.82 6.38-60.26 15.65a32 32 0 0 0-42.59 47.74A59 59 0 0 0 16 144c0 21.93 12 42.35 33.91 57.49C70.88 216 98.61 224 128 224s57.12-8 78.09-22.51C228 186.35 240 165.93 240 144a59 59 0 0 0-2.35-16.45A32.16 32.16 0 0 0 248 104M72 128a16 16 0 1 1 16 16a16 16 0 0 1-16-16m91.75 55.07a76.18 76.18 0 0 1-71.5 0a8 8 0 1 1 7.5-14.14a60.18 60.18 0 0 0 56.5 0a8 8 0 1 1 7.5 14.14M168 144a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhRedditLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRepeatFillIcon],svg[ph-repeat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 128a72.08 72.08 0 0 1 72-72h96V40a8 8 0 0 1 13.66-5.66l24 24a8 8 0 0 1 0 11.32l-24 24A8 8 0 0 1 192 88V72H96a56.06 56.06 0 0 0-56 56a8 8 0 0 1-16 0m200-8a8 8 0 0 0-8 8a56.06 56.06 0 0 1-56 56H64v-16a8 8 0 0 0-13.66-5.66l-24 24a8 8 0 0 0 0 11.32l24 24A8 8 0 0 0 64 216v-16h96a72.08 72.08 0 0 0 72-72a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhRepeatFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRepeatOnceFillIcon],svg[ph-repeat-once-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 128a72.08 72.08 0 0 1 72-72h96V40a8 8 0 0 1 13.66-5.66l24 24a8 8 0 0 1 0 11.32l-24 24A8 8 0 0 1 192 88V72H96a56.06 56.06 0 0 0-56 56a8 8 0 0 1-16 0m200-8a8 8 0 0 0-8 8a56.06 56.06 0 0 1-56 56H64v-16a8 8 0 0 0-13.66-5.66l-24 24a8 8 0 0 0 0 11.32l24 24A8 8 0 0 0 64 216v-16h96a72.08 72.08 0 0 0 72-72a8 8 0 0 0-8-8m-88 40a8 8 0 0 0 8-8v-48a8 8 0 0 0-11.58-7.16l-16 8a8 8 0 1 0 7.16 14.31l4.42-2.21V152a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhRepeatOnceFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phReplitLogoFillIcon],svg[ph-replit-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 160h72v56a16 16 0 0 1-16 16H72a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16m56-136H72a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h72V40a16 16 0 0 0-16-16m88 72h-72v64h72a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhReplitLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phResizeFillIcon],svg[ph-resize-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 120v88a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-88a8 8 0 0 1 8-8h88a8 8 0 0 1 8 8m64 56a8 8 0 0 0-8 8v16h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16v-16a8 8 0 0 0-8-8m0-72a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m-8-64h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0V56a16 16 0 0 0-16-16m-56 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16M48 88a8 8 0 0 0 8-8V56h16a8 8 0 0 0 0-16H56a16 16 0 0 0-16 16v24a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhResizeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRewindCircleFillIcon],svg[ph-rewind-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m56 140a8 8 0 0 1-12.8 6.4l-48-36a8 8 0 0 1-3.2-6.4v36a8 8 0 0 1-12.8 6.4l-48-36a8 8 0 0 1 0-12.8l48-36A8 8 0 0 1 120 92v36a8 8 0 0 1 3.2-6.4l48-36A8 8 0 0 1 184 92Z"></svg:path>`,
})
export class PhRewindCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRewindFillIcon],svg[ph-rewind-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 71.84v112.32a15.92 15.92 0 0 1-24.48 13.34L128 146.86v37.3a15.92 15.92 0 0 1-24.48 13.34l-88.19-56.16a15.8 15.8 0 0 1 0-26.68l88.19-56.16A15.91 15.91 0 0 1 128 71.84v37.3l79.52-50.64A15.91 15.91 0 0 1 232 71.84"></svg:path>`,
})
export class PhRewindFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRoadHorizonFillIcon],svg[ph-road-horizon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239 188.08L173.68 72h58a8.17 8.17 0 0 0 8.32-7.47a8 8 0 0 0-8-8.53H24.27A8.17 8.17 0 0 0 16 63.47A8 8 0 0 0 24 72h58.32L17 188.08a8 8 0 0 0 1.17 9.43a8.24 8.24 0 0 0 6 2.49H116a4 4 0 0 0 4-4v-19.73a8.17 8.17 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v20a4 4 0 0 0 4 4h91.77a8.24 8.24 0 0 0 6-2.49a8 8 0 0 0 1.23-9.45M136 140a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm0-52a8 8 0 0 1-16 0v-8a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhRoadHorizonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRobotFillIcon],svg[ph-robot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 48h-64V16a8 8 0 0 0-16 0v32H56a32 32 0 0 0-32 32v112a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V80a32 32 0 0 0-32-32m-28 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-76 88H80a16 16 0 0 1 0-32h16Zm-12-64a12 12 0 1 1 12-12a12 12 0 0 1-12 12m60 64h-32v-32h32Zm32 0h-16v-32h16a16 16 0 0 1 0 32"></svg:path>`,
})
export class PhRobotFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRocketFillIcon],svg[ph-rocket-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 224a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m71.62-68.17l-12.36 55.63a16 16 0 0 1-25.51 9.11L158.51 200h-61l-27.26 20.57a16 16 0 0 1-25.51-9.11l-12.36-55.63a16.09 16.09 0 0 1 3.32-13.71l28.56-34.26a123 123 0 0 1 8.57-36.67c12.9-32.34 36-52.63 45.37-59.85a16 16 0 0 1 19.6 0c9.34 7.22 32.47 27.51 45.37 59.85a123 123 0 0 1 8.57 36.67l28.56 34.26a16.09 16.09 0 0 1 3.32 13.71m-139.23 34q-16.11-29.33-19.56-57.67L48 152.36L60.36 208l.18-.13ZM140 100a12 12 0 1 0-12 12a12 12 0 0 0 12-12m68 52.36l-16.83-20.2q-3.42 28.28-19.56 57.69l23.85 18l.18.13Z"></svg:path>`,
})
export class PhRocketFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRocketLaunchFillIcon],svg[ph-rocket-launch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M101.85 191.14C97.34 201 82.29 224 40 224a8 8 0 0 1-8-8c0-42.29 23-57.34 32.86-61.85a8 8 0 0 1 6.64 14.56c-6.43 2.93-20.62 12.36-23.12 38.91c26.55-2.5 36-16.69 38.91-23.12a8 8 0 1 1 14.56 6.64m122-144a16 16 0 0 0-15-15c-12.58-.75-44.73.4-71.4 27.07L88 108.7a8 8 0 0 1-11.33-11.31l26.56-26.57a4 4 0 0 0-2.82-6.82H74.35A15.9 15.9 0 0 0 63 68.68L28.7 103a16 16 0 0 0 9.07 27.16l38.47 5.37l44.21 44.21l5.37 38.49a15.94 15.94 0 0 0 10.78 12.92a16.1 16.1 0 0 0 5.1.83a15.9 15.9 0 0 0 11.3-4.68l34.32-34.3a16 16 0 0 0 4.68-11.35v-26.06a4 4 0 0 0-6.83-2.82l-26.57 26.56a8 8 0 0 1-11.71-.42a8.2 8.2 0 0 1 .6-11.1l49.27-49.27c26.69-26.68 27.84-58.83 27.09-71.42Z"></svg:path>`,
})
export class PhRocketLaunchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRowsFillIcon],svg[ph-rows-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 152v40a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M208 48H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhRowsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRowsPlusBottomFillIcon],svg[ph-rows-plus-bottom-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128v24a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-24a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16-88H48a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-56 168h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhRowsPlusBottomFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRowsPlusTopFillIcon],svg[ph-rows-plus-top-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 176v24a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-24a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16-88H48a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-24a16 16 0 0 0-16-16M104 48h16v16a8 8 0 0 0 16 0V48h16a8 8 0 0 0 0-16h-16V16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhRowsPlusTopFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

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
  selector: 'svg[phSmileyXEyesFillIcon],svg[ph-smiley-x-eyes-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24m-18.34 98.34a8 8 0 0 1-11.32 11.32L88 123.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L76.69 112l-10.35-10.34a8 8 0 0 1 11.32-11.32L88 100.69l10.34-10.35a8 8 0 0 1 11.32 11.32L99.31 112ZM128 192a12 12 0 1 1 12-12a12 12 0 0 1-12 12m61.66-69.66a8 8 0 0 1-11.32 11.32L168 123.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L156.69 112l-10.35-10.34a8 8 0 0 1 11.32-11.32L168 100.69l10.34-10.35a8 8 0 0 1 11.32 11.32L179.31 112Z"></svg:path>`,
})
export class PhSmileyXEyesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSnapchatLogoFillIcon],svg[ph-snapchat-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.47 189.74c-7.1 6.67-17.67 7.71-27.88 8.72c-6.31.62-12.83 1.27-16.39 3.23c-3.37 1.86-6.85 6.62-10.21 11.22c-5.4 7.41-11.53 15.8-21.23 18.28a26.4 26.4 0 0 1-6.64.81c-6.88 0-13.7-2.32-19.9-4.43c-5.55-1.89-10.8-3.68-15.21-3.68s-9.66 1.79-15.21 3.68c-8.19 2.79-17.47 6-26.54 3.62c-9.71-2.48-15.84-10.87-21.24-18.28c-3.36-4.6-6.84-9.36-10.21-11.22c-3.56-2-10.08-2.61-16.38-3.23c-10.22-1-20.79-2.05-27.89-8.72a8 8 0 0 1 2.77-13.36c.09 0 12.84-4.86 25.36-19a94 94 0 0 0 17.74-30.2L37 119.43a8 8 0 1 1 6-14.86l17.85 7.15A151.2 151.2 0 0 0 64 80a64 64 0 0 1 128 0a149 149 0 0 0 3.21 31.73l17.79-7.16a8 8 0 1 1 6 14.86l-19.3 7.72c14.08 38.35 42.64 49.09 43 49.23a8 8 0 0 1 2.77 13.36"></svg:path>`,
})
export class PhSnapchatLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSneakerFillIcon],svg[ph-sneaker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.65 129.11l-28.06-9.35a4 4 0 0 0-2.63 0l-43.23 15.72a8.1 8.1 0 0 1-2.73.52a8 8 0 0 1-7.71-5.88a8.17 8.17 0 0 1 5.22-9.73l18.49-6.72a2.54 2.54 0 0 0-.06-4.8a23.9 23.9 0 0 1-8.8-5.25a4 4 0 0 0-4.17-.91l-24.22 8.8a8 8 0 0 1-10.44-5.39a8.17 8.17 0 0 1 5.22-9.73L146 88.93a4 4 0 0 0 2.31-5.34l-3.06-7.16a4 4 0 0 0-5.05-2.19l-25.5 9.27a8 8 0 0 1-10.44-5.39a8.17 8.17 0 0 1 5.22-9.73l24-8.73a4 4 0 0 0 2.31-5.33l-5.4-12.73v-.1a16 16 0 0 0-20.14-8.5L34.53 60.49A16.05 16.05 0 0 0 24 75.53V192a16 16 0 0 0 16 16h200a16 16 0 0 0 16-16v-24.94a40 40 0 0 0-27.35-37.95M240 192H40v-16h200Z"></svg:path>`,
})
export class PhSneakerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSneakerMoveFillIcon],svg[ph-sneaker-move-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M70.8 184H32a8 8 0 0 1 0-16h38.8a8 8 0 1 1 0 16m32 16H48a8 8 0 0 0 0 16h54.8a8 8 0 1 0 0-16m128.36-33.37l-28.63-14.31A47.74 47.74 0 0 1 176 109.39V80a8 8 0 0 0-7.93-8A48.05 48.05 0 0 1 120 24.07a8 8 0 0 0-12.83-6.44L45.11 64.68a4 4 0 0 0-.41 6l51.44 51.44a8.19 8.19 0 0 1 .6 11.09a8 8 0 0 1-11.71.43l-53-53a4 4 0 0 0-6.44 1.09a16 16 0 0 0 3.12 18.22L142.4 213.66a8 8 0 0 0 5.66 2.34H224a16 16 0 0 0 16-16v-19.06a15.92 15.92 0 0 0-8.84-14.31"></svg:path>`,
})
export class PhSneakerMoveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSnowflakeFillIcon],svg[ph-snowflake-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m42.37 119.22l18.94-6.76a8 8 0 1 1 5.38 15.08l-15.48 5.52l4.52 16.87a8 8 0 0 1-5.66 9.8a8.2 8.2 0 0 1-2.07.27a8 8 0 0 1-7.73-5.93l-5.57-20.8l-26.7-15.41v30.83l13.66 13.65a8 8 0 0 1-11.32 11.32L128 187.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L120 172.69v-30.83l-26.7 15.41l-5.57 20.8A8 8 0 0 1 80 184a8.2 8.2 0 0 1-2.07-.27a8 8 0 0 1-5.66-9.8l4.52-16.87l-15.48-5.52a8 8 0 0 1 5.38-15.08l18.94 6.76L112 128l-26.37-15.22l-18.94 6.76A8.2 8.2 0 0 1 64 120a8 8 0 0 1-2.69-15.54l15.48-5.52l-4.52-16.87a8 8 0 0 1 15.46-4.14l5.57 20.8l26.7 15.41V83.31l-13.66-13.65a8 8 0 0 1 11.32-11.32L128 68.69l10.34-10.35a8 8 0 0 1 11.32 11.32L136 83.31v30.83l26.7-15.41l5.57-20.8a8 8 0 0 1 15.46 4.14l-4.52 16.87l15.48 5.52A8 8 0 0 1 192 120a8.2 8.2 0 0 1-2.69-.46l-18.94-6.76L144 128Z"></svg:path>`,
})
export class PhSnowflakeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSoccerBallFillIcon],svg[ph-soccer-ball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 39.38l24.79-17.05a88.4 88.4 0 0 1 36.18 27l-8 26.94c-.2 0-.41.1-.61.17l-22.82 7.41a8 8 0 0 0-1 .4L136 88.62zM95.24 46.33L120 63.38v25.24l-28.56 19.67a8 8 0 0 0-1-.4l-22.82-7.41c-.2-.07-.41-.12-.61-.17l-8-26.94a88.4 88.4 0 0 1 36.23-27.04m-13 129.09H53.9a87.4 87.4 0 0 1-13.79-43.07l22-16.88a6 6 0 0 0 .58.22l22.83 7.42a8 8 0 0 0 .93.22l10.79 31.42c-.15.18-.3.36-.44.55l-14.1 19.41a8 8 0 0 0-.46.71M150.69 213a88.16 88.16 0 0 1-45.38 0l-10.06-28.4c.13-.16.27-.31.39-.48l14.11-19.42a8 8 0 0 0 .46-.7h35.58a8 8 0 0 0 .46.7l14.11 19.42c.12.17.26.32.39.48Zm23.07-37.61a8 8 0 0 0-.46-.71l-14.11-19.38c-.14-.19-.29-.37-.44-.55l10.79-31.42a8 8 0 0 0 .93-.22l22.83-7.42a6 6 0 0 0 .58-.22l22 16.88a87.4 87.4 0 0 1-13.79 43.07Z"></svg:path>`,
})
export class PhSoccerBallFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSockFillIcon],svg[ph-sock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 16h-88a16 16 0 0 0-16 16v76.69l-38.75 38.74a58.92 58.92 0 0 0 83.32 83.32L201 162.34a23.85 23.85 0 0 0 7-17V32a16 16 0 0 0-16-16m0 16v24h-88V32Zm-2.34 119l-31.86 31.88a48 48 0 0 1 34.2-70.2v32.69a8 8 0 0 1-2.34 5.63"></svg:path>`,
})
export class PhSockFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSolarPanelFillIcon],svg[ph-solar-panel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 104a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m39.43-45.25a8 8 0 0 0 11.32-11.32L71.43 36.12a8 8 0 0 0-11.31 11.31ZM128 40a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v16a8 8 0 0 0 8 8m50.91 21.09a8 8 0 0 0 5.66-2.34l11.31-11.32a8 8 0 0 0-11.31-11.31l-11.32 11.31a8 8 0 0 0 5.66 13.66M192 104a8 8 0 0 0 8 8h16a8 8 0 0 0 0-16h-16a8 8 0 0 0-8 8m-104 8a8 8 0 0 0 8-8a32 32 0 0 1 64 0a8 8 0 0 0 16 0a48 48 0 0 0-96 0a8 8 0 0 0 8 8m55.2 24h-30.4a4 4 0 0 0-3.91 3.15L102.62 168h50.76l-6.27-28.85a4 4 0 0 0-3.91-3.15M31.75 186L17 212.06a8 8 0 0 0 1.16 9.45a8.22 8.22 0 0 0 6 2.49h46.69a4 4 0 0 0 3.91-3.15l8-36.85H35.23a4 4 0 0 0-3.48 2m207.21 26l-14.71-26a4 4 0 0 0-3.48-2h-47.54l8 36.85a4 4 0 0 0 3.91 3.15h46.62a8.22 8.22 0 0 0 6-2.49a8 8 0 0 0 1.24-9.45Zm-28.27-50l-12.42-22a8 8 0 0 0-7-4.06h-23.51a4 4 0 0 0-3.91 4.85l5.9 27.15h37.45a4 4 0 0 0 3.49-5.94M88.24 136H64.7a8 8 0 0 0-7 4.06L45.31 162a4 4 0 0 0 3.49 6h37.45l5.9-27.15a4 4 0 0 0-3.91-4.85m68.62 48H99.14l-7.64 35.15a4 4 0 0 0 3.91 4.85h65.18a4 4 0 0 0 3.91-4.85Z"></svg:path>`,
})
export class PhSolarPanelFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSolarRoofFillIcon],svg[ph-solar-roof-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m247.16 124.42l-40-80A8 8 0 0 0 200 40H56a8 8 0 0 0-7.16 4.42l-40 80A8.1 8.1 0 0 0 8 128v56a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16v-56a8.1 8.1 0 0 0-.84-3.58M99.06 56l12 24H80.94l-12-24Zm48 0l12 24h-30.12l-12-24Zm-46.12 64l-12-24h30.12l12 24Zm48 0l-12-24h30.12l12 24Zm48 0l-12-24h30.12l12 24Zm10.12-40h-30.12l-12-24h30.12ZM104 184v-48h128v48Z"></svg:path>`,
})
export class PhSolarRoofFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSortAscendingFillIcon],svg[ph-sort-ascending-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 72h96a8 8 0 0 1 0 16H72a8 8 0 0 1 0-16m40 112H72a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m8-48H72a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m77.66 29.66l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L160 164.69V120a8 8 0 0 1 16 0v44.69l10.34-10.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhSortAscendingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSortDescendingFillIcon],svg[ph-sort-descending-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 72h40a8 8 0 0 1 0 16H72a8 8 0 0 1 0-16m0 48h48a8 8 0 0 1 0 16H72a8 8 0 0 1 0-16m96 64H72a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m29.66-82.34a8 8 0 0 1-11.32 0L176 91.31V136a8 8 0 0 1-16 0V91.31l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0l24 24a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhSortDescendingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSoundcloudLogoFillIcon],svg[ph-soundcloud-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 120v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0m24-32a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8m32-8a8 8 0 0 0-8 8v104a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m32-32a8 8 0 0 0-8 8v136a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8m110.84 58.34A80 80 0 0 0 144 40h-4a4 4 0 0 0-4 4v152a4 4 0 0 0 4 4h67.21c25.58 0 47.27-19.72 48.71-45.26a48.06 48.06 0 0 0-33.08-48.4"></svg:path>`,
})
export class PhSoundcloudLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpadeFillIcon],svg[ph-spade-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 136a56 56 0 0 1-83.4 48.82l11.06 36.88A8 8 0 0 1 152 232h-48a8 8 0 0 1-7.66-10.3l11.06-36.88A56 56 0 0 1 24 136c0-32 17.65-62.84 51-89.27a234 234 0 0 1 49.89-30.11a7.93 7.93 0 0 1 6.16 0A234 234 0 0 1 181 46.73C214.35 73.16 232 104 232 136"></svg:path>`,
})
export class PhSpadeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSparkleFillIcon],svg[ph-sparkle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 144a15.78 15.78 0 0 1-10.42 14.94L146 178l-19 51.62a15.92 15.92 0 0 1-29.88 0L78 178l-51.62-19a15.92 15.92 0 0 1 0-29.88L78 110l19-51.62a15.92 15.92 0 0 1 29.88 0L146 110l51.62 19A15.78 15.78 0 0 1 208 144m-56-96h16v16a8 8 0 0 0 16 0V48h16a8 8 0 0 0 0-16h-16V16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16m88 32h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhSparkleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerHifiFillIcon],svg[ph-speaker-hifi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 160a24 24 0 1 1-24-24a24 24 0 0 1 24 24m56-120v176a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16m-92 28a12 12 0 1 0 12-12a12 12 0 0 0-12 12m52 92a40 40 0 1 0-40 40a40 40 0 0 0 40-40"></svg:path>`,
})
export class PhSpeakerHifiFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerHighFillIcon],svg[ph-speaker-high-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 32.25v191.44a8.29 8.29 0 0 1-3.91 7.18a8 8 0 0 1-9-.56l-65.57-51a4 4 0 0 1-1.52-3.15V79.84a4 4 0 0 1 1.55-3.15l65.57-51a8 8 0 0 1 10 .16a8.27 8.27 0 0 1 2.88 6.4M60 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h28a4 4 0 0 0 4-4V84a4 4 0 0 0-4-4m126.77 20.84a8 8 0 0 0-.72 11.3a24 24 0 0 1 0 31.72a8 8 0 1 0 12 10.58a40 40 0 0 0 0-52.88a8 8 0 0 0-11.31-.72Zm40.89-26.17a8 8 0 1 0-11.92 10.66a64 64 0 0 1 0 85.34a8 8 0 1 0 11.92 10.66a80 80 0 0 0 0-106.66"></svg:path>`,
})
export class PhSpeakerHighFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerLowFillIcon],svg[ph-speaker-low-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 32.25v191.44a8.29 8.29 0 0 1-3.91 7.18a8 8 0 0 1-9-.56l-65.57-51a4 4 0 0 1-1.52-3.15V79.84a4 4 0 0 1 1.55-3.15l65.57-51a8 8 0 0 1 10 .16a8.27 8.27 0 0 1 2.88 6.4M60 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h28a4 4 0 0 0 4-4V84a4 4 0 0 0-4-4m138 21.56a8 8 0 1 0-12 10.58a24 24 0 0 1 0 31.72a8 8 0 1 0 12 10.58a40 40 0 0 0 0-52.88"></svg:path>`,
})
export class PhSpeakerLowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerNoneFillIcon],svg[ph-speaker-none-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 84v88a4 4 0 0 1-4 4H32a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h28a4 4 0 0 1 4 4m93.15-58.15a8 8 0 0 0-10-.16l-65.57 51A4 4 0 0 0 80 79.84v96.32a4 4 0 0 0 1.55 3.15l65.57 51a8 8 0 0 0 9 .56a8.29 8.29 0 0 0 3.91-7.18V32.25a8.27 8.27 0 0 0-2.91-6.4Z"></svg:path>`,
})
export class PhSpeakerNoneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleHighFillIcon],svg[ph-speaker-simple-high-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 32v192a8 8 0 0 1-12.91 6.31L85.25 176H40a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h45.25l69.84-54.31A8 8 0 0 1 168 32m32 64a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8m32-16a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhSpeakerSimpleHighFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleLowFillIcon],svg[ph-speaker-simple-low-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 32v192a8 8 0 0 1-12.91 6.31L85.25 176H40a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h45.25l69.84-54.31A8 8 0 0 1 168 32m32 64a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhSpeakerSimpleLowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleNoneFillIcon],svg[ph-speaker-simple-none-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M163.52 24.81a8 8 0 0 0-8.43.88L85.25 80H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A7.94 7.94 0 0 0 160 232a8 8 0 0 0 8-8V32a8 8 0 0 0-4.48-7.19"></svg:path>`,
})
export class PhSpeakerSimpleNoneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleSlashFillIcon],svg[ph-speaker-simple-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.92 210.62a8 8 0 1 1-11.84 10.76L168 175.09v48.6a8.29 8.29 0 0 1-3.91 7.18a8 8 0 0 1-9-.56L85.25 176H40a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h41.55L50.08 45.38a8 8 0 0 1 11.84-10.76ZM200.53 160a8.17 8.17 0 0 0 7.47-8.25v-47.48a8.17 8.17 0 0 0-7.47-8.27a8 8 0 0 0-8.53 8v48a8 8 0 0 0 8.53 8M161 119.87a4 4 0 0 0 7-2.7V32.24a8.25 8.25 0 0 0-2.88-6.39a8 8 0 0 0-10-.16l-43.29 33.64a4 4 0 0 0-.5 5.85ZM231.47 80a8.17 8.17 0 0 0-7.47 8.27v79.46a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8V88a8 8 0 0 0-8.53-8"></svg:path>`,
})
export class PhSpeakerSimpleSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleXFillIcon],svg[ph-speaker-simple-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M163.52 24.81a8 8 0 0 0-8.43.88L85.25 80H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A7.94 7.94 0 0 0 160 232a8 8 0 0 0 8-8V32a8 8 0 0 0-4.48-7.19M235.31 128l18.35-18.34a8 8 0 0 0-11.32-11.32L224 116.69l-18.34-18.35a8 8 0 0 0-11.32 11.32L212.69 128l-18.35 18.34a8 8 0 0 0 11.32 11.32L224 139.31l18.34 18.35a8 8 0 0 0 11.32-11.32Z"></svg:path>`,
})
export class PhSpeakerSimpleXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSlashFillIcon],svg[ph-speaker-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.92 210.62a8 8 0 1 1-11.84 10.76L160 175.09v48.6a8.29 8.29 0 0 1-3.91 7.18a8 8 0 0 1-9-.56l-65.55-51a4 4 0 0 1-1.54-3.13V87.09L42.08 45.38a8 8 0 1 1 11.84-10.76Zm-27.21-55.46a8 8 0 0 0 11.29-.7a40 40 0 0 0 0-52.88a8 8 0 1 0-12 10.57a24 24 0 0 1 0 31.72a8 8 0 0 0 .71 11.29m40.92-80.49a8 8 0 1 0-11.92 10.66a64 64 0 0 1 0 85.34a8 8 0 1 0 11.92 10.66a80 80 0 0 0 0-106.66M153 119.87a4 4 0 0 0 7-2.7V32.25a8.27 8.27 0 0 0-2.88-6.4a8 8 0 0 0-10-.16l-43.29 33.64a4 4 0 0 0-.5 5.85ZM60 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h28a4 4 0 0 0 4-4V84a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhSpeakerSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerXFillIcon],svg[ph-speaker-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.66 146.34a8 8 0 0 1-11.32 11.32L216 139.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L204.69 128l-18.35-18.34a8 8 0 0 1 11.32-11.32L216 116.69l18.34-18.35a8 8 0 0 1 11.32 11.32L227.31 128ZM60 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h28a4 4 0 0 0 4-4V84a4 4 0 0 0-4-4m97.15-54.15a8 8 0 0 0-10-.16l-65.57 51A4 4 0 0 0 80 79.84v96.32a4 4 0 0 0 1.55 3.15l65.57 51a8 8 0 0 0 9 .56a8.29 8.29 0 0 0 3.91-7.18V32.25a8.27 8.27 0 0 0-2.91-6.4Z"></svg:path>`,
})
export class PhSpeakerXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeedometerFillIcon],svg[ph-speedometer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.87 90.86a4 4 0 0 0-6.17-.62l-75.42 75.42A8 8 0 0 1 129 154.35l92.7-92.69a8 8 0 0 0-11.32-11.32L197 63.73A112.05 112.05 0 0 0 22.34 189.25A16.09 16.09 0 0 0 37.46 200h181.07a16 16 0 0 0 15.11-10.71a112.28 112.28 0 0 0-11.77-98.43M57.44 166.41a8 8 0 0 1-6.25 9.43a8 8 0 0 1-1.6.16a8 8 0 0 1-7.83-6.41A88.06 88.06 0 0 1 143.59 65.38a8 8 0 0 1-2.82 15.75a72.07 72.07 0 0 0-83.33 85.28"></svg:path>`,
})
export class PhSpeedometerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSphereFillIcon],svg[ph-sphere-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 16c8.15 0 24 31.06 24 88c0 8.24-.34 15.92-.93 23.07c-7.15.59-14.83.93-23.07.93c-56.94 0-88-15.85-88-24a88.1 88.1 0 0 1 88-88M43.4 152.26C63.28 162.65 95.76 168 128 168c7.09 0 14.19-.26 21.17-.77C144.23 199 134 216 128 216a88.17 88.17 0 0 1-84.6-63.74"></svg:path>`,
})
export class PhSphereFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpinnerBallFillIcon],svg[ph-spinner-ball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.9 87.9 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"></svg:path>`,
})
export class PhSpinnerBallFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpinnerFillIcon],svg[ph-spinner-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m33.94 58.75l17-17a8 8 0 0 1 11.32 11.32l-17 17a8 8 0 0 1-11.31-11.31ZM48 136a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16Zm46.06 37.25l-17 17a8 8 0 0 1-11.32-11.32l17-17a8 8 0 0 1 11.31 11.31Zm0-79.19a8 8 0 0 1-11.31 0l-17-17a8 8 0 0 1 11.34-11.29l17 17a8 8 0 0 1-.03 11.29M136 208a8 8 0 0 1-16 0v-24a8 8 0 0 1 16 0Zm0-136a8 8 0 0 1-16 0V48a8 8 0 0 1 16 0Zm54.23 118.23a8 8 0 0 1-11.32 0l-17-17a8 8 0 0 1 11.31-11.31l17 17a8 8 0 0 1 .01 11.31M208 136h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhSpinnerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpinnerGapFillIcon],svg[ph-spinner-gap-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M48 136a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16Zm46.06 37.25l-17 17a8 8 0 0 1-11.32-11.32l17-17a8 8 0 0 1 11.31 11.31Zm0-79.19a8 8 0 0 1-11.31 0l-17-17a8 8 0 0 1 11.34-11.29l17 17a8 8 0 0 1-.03 11.29M136 208a8 8 0 0 1-16 0v-24a8 8 0 0 1 16 0Zm0-136a8 8 0 0 1-16 0V48a8 8 0 0 1 16 0Zm54.23 118.23a8 8 0 0 1-11.32 0l-17-17a8 8 0 0 1 11.31-11.31l17 17a8 8 0 0 1 .01 11.31M208 136h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhSpinnerGapFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpiralFillIcon],svg[ph-spiral-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 144a8 8 0 0 1-16 0a96.11 96.11 0 0 0-96-96c-1.4 0-2.8 0-4.18.1A80.06 80.06 0 0 0 56 128a64.07 64.07 0 0 0 64 64a44.05 44.05 0 0 0 44-44a32 32 0 0 0-32-32a8 8 0 0 0 0 16a16 16 0 0 1 16 16a28 28 0 0 1-28 28a48.05 48.05 0 0 1-48-48a64.07 64.07 0 0 1 64-64a80.09 80.09 0 0 1 80 80a88.1 88.1 0 0 1-88 88a96.11 96.11 0 0 1-96-96A104.11 104.11 0 0 1 136 32a112.12 112.12 0 0 1 112 112"></svg:path>`,
})
export class PhSpiralFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSplitHorizontalFillIcon],svg[ph-split-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 48v160a8 8 0 0 1-16 0v-72H64v24a8 8 0 0 1-13.66 5.66l-32-32a8 8 0 0 1 0-11.32l32-32A8 8 0 0 1 64 96v24h32V48a8 8 0 0 1 16 0m125.66 74.34l-32-32A8 8 0 0 0 192 96v24h-32V48a8 8 0 0 0-16 0v160a8 8 0 0 0 16 0v-72h32v24a8 8 0 0 0 13.66 5.66l32-32a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhSplitHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSplitVerticalFillIcon],svg[ph-split-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 152a8 8 0 0 1-8 8h-72v32h24a8 8 0 0 1 5.66 13.66l-32 32a8 8 0 0 1-11.32 0l-32-32A8 8 0 0 1 96 192h24v-32H48a8 8 0 0 1 0-16h160a8 8 0 0 1 8 8M48 112h160a8 8 0 0 0 0-16h-72V64h24a8 8 0 0 0 5.66-13.66l-32-32a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 96 64h24v32H48a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhSplitVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpotifyLogoFillIcon],svg[ph-spotify-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m31.07 145.74a8 8 0 0 1-10.81 3.33a42.79 42.79 0 0 0-40.52 0a8 8 0 0 1-7.48-14.14a59.33 59.33 0 0 1 55.48 0a8 8 0 0 1 3.33 10.81m16-28a8 8 0 0 1-10.82 3.3a77.07 77.07 0 0 0-72.48 0a8 8 0 0 1-7.52-14.12a93 93 0 0 1 87.52 0a8 8 0 0 1 3.29 10.84Zm16-28a8 8 0 0 1-10.83 3.29a110.62 110.62 0 0 0-104.46 0a8 8 0 0 1-7.54-14.12a126.67 126.67 0 0 1 119.54 0a8 8 0 0 1 3.28 10.85Z"></svg:path>`,
})
export class PhSpotifyLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSprayBottleFillIcon],svg[ph-spray-bottle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 80a8 8 0 0 0 8-8a56.06 56.06 0 0 0-56-56H80a16 16 0 0 0-16 16v48a24 24 0 0 1-24 24a8 8 0 0 0 0 16a40 40 0 0 0 40-40h32v24.62a23.87 23.87 0 0 1-9 18.74l-16 12.79a39.79 39.79 0 0 0-15 31.23V224a16 16 0 0 0 16 16h104a16 16 0 0 0 16-16v-12.53A270.9 270.9 0 0 0 174 80ZM80 32h72a40.08 40.08 0 0 1 39.2 32H80Z"></svg:path>`,
})
export class PhSprayBottleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareFillIcon],svg[ph-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareHalfBottomFillIcon],svg[ph-square-half-bottom-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v72H56V56Z"></svg:path>`,
})
export class PhSquareHalfBottomFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareHalfFillIcon],svg[ph-square-half-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M56 56h72v144H56Z"></svg:path>`,
})
export class PhSquareHalfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareLogoFillIcon],svg[ph-square-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM168 96v64a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSquareLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareSplitHorizontalFillIcon],svg[ph-square-split-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 44v168a4 4 0 0 1-4 4H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h60a4 4 0 0 1 4 4m80-4h-60a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h60a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhSquareSplitHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareSplitVerticalFillIcon],svg[ph-square-split-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 56v60a4 4 0 0 1-4 4H44a4 4 0 0 1-4-4V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-4 80H44a4 4 0 0 0-4 4v60a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-60a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhSquareSplitVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquaresFourFillIcon],svg[ph-squares-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 56v48a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16m80-16h-48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-96 96H56a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m96 0h-48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhSquaresFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackFillIcon],svg[ph-stack-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m220 169.09l-92 53.65l-92-53.65a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 1 0-8.06-13.82"></svg:path><svg:path d="m220 121.09l-92 53.65l-92-53.65a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 1 0-8.06-13.82"></svg:path><svg:path d="m28 86.91l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 0 0 0-13.82l-96-56a8 8 0 0 0-8.06 0l-96 56a8 8 0 0 0 0 13.82"></svg:path></svg:g>`,
})
export class PhStackFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackMinusFillIcon],svg[ph-stack-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.91 124a8 8 0 0 1-2.91 10.91l-96 56a8 8 0 0 1-8.06 0l-96-56A8 8 0 0 1 36 121.09l92 53.65l92-53.65a8 8 0 0 1 10.91 2.91M28 86.91l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 0 0 0-13.82l-96-56a8 8 0 0 0-8.06 0l-96 56a8 8 0 0 0 0 13.82M232 192h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m-92 23.76l-12 7l-92-53.67a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l16-9.33a8 8 0 1 0-8.06-13.82"></svg:path>`,
})
export class PhStackMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackOverflowLogoFillIcon],svg[ph-stack-overflow-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-73.14 14.86a8 8 0 0 1 11.32 0l45.25 45.26a8 8 0 0 1-11.31 11.31l-45.26-45.25a8 8 0 0 1 0-11.32m-34.68 51.91a8 8 0 0 1 10.45-4.33l59.13 24.49a8 8 0 0 1-3.06 15.4a7.9 7.9 0 0 1-3.06-.62l-59.13-24.49a8 8 0 0 1-4.33-10.45M96 152h64a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16m104 40a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v40h112v-40a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhStackOverflowLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackPlusFillIcon],svg[ph-stack-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 80a8 8 0 0 1 4-6.91l96-56a8 8 0 0 1 8.06 0l96 56a8 8 0 0 1 0 13.82l-96 56a8 8 0 0 1-8.06 0l-96-56A8 8 0 0 1 24 80m196 41.09l-92 53.65l-92-53.65a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 1 0-8.06-13.82M232 192h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16m-92 23.76l-12 7l-92-53.67a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l16-9.33a8 8 0 1 0-8.06-13.82"></svg:path>`,
})
export class PhStackPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackSimpleFillIcon],svg[ph-stack-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m12 111l112 64a8 8 0 0 0 7.94 0l112-64a8 8 0 0 0 0-13.9l-112-64a8 8 0 0 0-7.94 0l-112 64a8 8 0 0 0 0 13.9"></svg:path><svg:path d="m236 137.05l-108 61.74l-108-61.74A8 8 0 1 0 12 151l112 64a8 8 0 0 0 7.94 0l112-64a8 8 0 1 0-7.94-13.9Z"></svg:path></svg:g>`,
})
export class PhStackSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStairsFillIcon],svg[ph-stairs-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-40 80h40v24h-40Zm-48 40h88v24h-88Zm88 72H56v-32h144z"></svg:path>`,
})
export class PhStairsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStampFillIcon],svg[ph-stamp-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 224a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-16-96h-56.43l15.71-73.29A32 32 0 0 0 136 16h-16a32 32 0 0 0-31.28 38.71L104.43 128H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhStampFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStandardDefinitionFillIcon],svg[ph-standard-definition-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 128a32 32 0 0 1-32 32h-8V96h8a32 32 0 0 1 32 32m40-72v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-112 92c0-19.88-19.92-25.35-34.47-29.34c-12.06-3.31-20-5.84-20-10.66c0-6.73 8.1-12 18.44-12c8 0 14.85 3.13 17.42 8a8 8 0 1 0 14.13-7.51C110.16 86.31 98.07 80 84 80c-19.64 0-34.44 12-34.44 28c0 17.38 17.6 22.21 31.74 26.09c16 4.39 22.7 7.3 22.7 13.91c0 5.68-8.21 12-20 12s-20-6.32-20-12a8 8 0 0 0-16 0c0 15.7 15.81 28 36 28s36-12.3 36-28m88-20a48.05 48.05 0 0 0-48-48h-16a8 8 0 0 0-8 8v80a8 8 0 0 0 8 8h16a48.05 48.05 0 0 0 48-48"></svg:path>`,
})
export class PhStandardDefinitionFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarAndCrescentFillIcon],svg[ph-star-and-crescent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 206.4a8 8 0 0 1-4.36 7.13A94.9 94.9 0 0 1 112 224a96 96 0 0 1 0-192a94.9 94.9 0 0 1 43.64 10.47a8 8 0 0 1 0 14.25a80 80 0 0 0 0 142.56a8 8 0 0 1 4.36 7.12m91.17-85.75l-26.5-11.43l-2.31-29.84a8 8 0 0 0-14.14-4.47l-18.59 22.51l-27.71-6.85a8 8 0 0 0-8.81 11.82L168.18 128l-15.07 25.61a8 8 0 0 0 8.81 11.82l27.71-6.85l18.59 22.51a8 8 0 0 0 14.14-4.47l2.31-29.84l26.5-11.43a8 8 0 0 0 0-14.7"></svg:path>`,
})
export class PhStarAndCrescentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarFillIcon],svg[ph-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z"></svg:path>`,
})
export class PhStarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarFourFillIcon],svg[ph-star-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 128a15.79 15.79 0 0 1-10.5 15l-63.44 23.07L143 229.5a16 16 0 0 1-30 0l-23.06-63.44L26.5 143a16 16 0 0 1 0-30l63.44-23.06L113 26.5a16 16 0 0 1 30 0l23.07 63.44L229.5 113a15.79 15.79 0 0 1 10.5 15"></svg:path>`,
})
export class PhStarFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarHalfFillIcon],svg[ph-star-half-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.18 97.26A16.38 16.38 0 0 0 224.92 86l-59-4.76l-22.78-55.09a16.36 16.36 0 0 0-30.27 0L90.11 81.23L31.08 86a16.46 16.46 0 0 0-9.37 28.86l45 38.83L53 211.75a16.4 16.4 0 0 0 24.5 17.82l50.5-31.08l50.53 31.08A16.4 16.4 0 0 0 203 211.75l-13.76-58.07l45-38.83a16.43 16.43 0 0 0 4.94-17.59m-15.34 5.47l-48.7 42a8 8 0 0 0-2.56 7.91l14.88 62.8a.37.37 0 0 1-.17.48c-.18.14-.23.11-.38 0l-54.72-33.65a8 8 0 0 0-4.19-1.17V32c.24 0 .27.08.35.26L153 91.86a8 8 0 0 0 6.75 4.92l63.91 5.16c.16 0 .25 0 .34.29s0 .4-.16.5"></svg:path>`,
})
export class PhStarHalfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarOfDavidFillIcon],svg[ph-star-of-david-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.21 128L231 76a8 8 0 0 0-7-12h-59.35L135 12a8 8 0 0 0-13.9 0L91.33 64H32a8 8 0 0 0-6.95 12l29.72 52l-29.72 52a8 8 0 0 0 7 12h59.28l29.72 52a8 8 0 0 0 13.9 0l29.7-52H224a8 8 0 0 0 7-12Zm-18.42 0l-27.42 48h-54.75L73.2 128l27.42-48h54.75Z"></svg:path>`,
})
export class PhStarOfDavidFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSteamLogoFillIcon],svg[ph-steam-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.92 132.11c-2.09 54-45.83 97.72-99.81 99.81A104.06 104.06 0 0 1 25.6 109.76a4 4 0 0 1 6.77-2.08l43 43a28 28 0 0 0 42.42 34.92l61.1-49.84a36 36 0 1 0-50.71-50.65l-43 52.74L35 87.67a4 4 0 0 1-.76-4.6a104 104 0 0 1 197.7 49Zm-110.34-13.56l-30.81 37.78a11.83 11.83 0 0 0-2.77 6.86A12.19 12.19 0 0 0 99.85 176a11.84 11.84 0 0 0 7.78-2.74l37.78-30.81a36.18 36.18 0 0 1-23.83-23.9M175.9 110a20 20 0 1 0-17.9 17.9a20 20 0 0 0 17.9-17.9"></svg:path>`,
})
export class PhSteamLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSteeringWheelFillIcon],svg[ph-steering-wheel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M49.63 168h40.82l17 45.58A88.35 88.35 0 0 1 49.63 168M128 156a16 16 0 1 1 16-16a16 16 0 0 1-16 16m20.46 57.59L165.55 168h40.82a88.34 88.34 0 0 1-57.91 45.59M128 96a136.38 136.38 0 0 0-88 32.33V128a88 88 0 0 1 176 0v.33A136.38 136.38 0 0 0 128 96"></svg:path>`,
})
export class PhSteeringWheelFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStepsFillIcon],svg[ph-steps-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 56v144a8 8 0 0 1-8 8H8a8 8 0 0 1 0-16h48v-40a8 8 0 0 1 8-8h48v-40a8 8 0 0 1 8-8h48V56a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhStepsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStethoscopeFillIcon],svg[ph-stethoscope-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 160a32 32 0 1 0-39.93 31a8 8 0 0 0-.07 1a32 32 0 0 1-32 32h-24a32 32 0 0 1-32-32v-40.52c31.47-4 56-31.47 56-64.31V40a8 8 0 0 0-8-8h-24a8 8 0 0 0 0 16h16v39.17c0 26.58-21.25 48.49-47.36 48.83A48 48 0 0 1 56 88V48h16a8 8 0 0 0 0-16H48a8 8 0 0 0-8 8v48a64 64 0 0 0 56 63.49V192a48.05 48.05 0 0 0 48 48h24a48.05 48.05 0 0 0 48-48a8 8 0 0 0-.07-1A32 32 0 0 0 240 160m-32 8a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhStethoscopeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStickerFillIcon],svg[ph-sticker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 32H88a56.06 56.06 0 0 0-56 56v80a56.06 56.06 0 0 0 56 56h48a8 8 0 0 0 2.53-.41c26.23-8.75 76.31-58.83 85.06-85.06A8 8 0 0 0 224 136V88a56.06 56.06 0 0 0-56-56m-32 175.42V176a40 40 0 0 1 40-40h31.42c-9.26 21.55-49.87 62.16-71.42 71.42"></svg:path>`,
})
export class PhStickerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStoolFillIcon],svg[ph-stool-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h6.64L56.1 222.75a8 8 0 0 0 6.65 9.15a8 8 0 0 0 1.25.1a8 8 0 0 0 7.89-6.75L79.68 176h96.64l7.78 49.25A8 8 0 0 0 192 232a8 8 0 0 0 1.26-.1a8 8 0 0 0 6.65-9.15L177.36 80H184a16 16 0 0 0 16-16m-26.21 96H82.21l12.63-80h66.32Z"></svg:path>`,
})
export class PhStoolFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStopCircleFillIcon],svg[ph-stop-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m32 132a4 4 0 0 1-4 4h-56a4 4 0 0 1-4-4v-56a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhStopCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStopFillIcon],svg[ph-stop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhStopFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStorefrontFillIcon],svg[ph-storefront-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.69 93.81L217.35 43.6A16.07 16.07 0 0 0 202 32H54a16.07 16.07 0 0 0-15.35 11.6L24.31 93.81A8 8 0 0 0 24 96v16a40 40 0 0 0 16 32v72a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-72a40 40 0 0 0 16-32V96a8 8 0 0 0-.31-2.19M88 112a24 24 0 0 1-35.12 21.26a8 8 0 0 0-1.82-1.06A24 24 0 0 1 40 112v-8h48Zm64 0a24 24 0 0 1-48 0v-8h48Zm64 0a24 24 0 0 1-11.07 20.2a8 8 0 0 0-1.8 1.05A24 24 0 0 1 168 112v-8h48Z"></svg:path>`,
})
export class PhStorefrontFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStrategyFillIcon],svg[ph-strategy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 188a32 32 0 1 1-32-32a32 32 0 0 1 32 32m-54.34-70.34L68 103.31l14.34 14.35a8 8 0 0 0 11.32-11.32L79.31 92l14.35-14.34a8 8 0 0 0-11.32-11.32L68 80.69L53.66 66.34a8 8 0 0 0-11.32 11.32L56.69 92l-14.35 14.34a8 8 0 0 0 11.32 11.32M215.31 188l14.35-14.34a8 8 0 0 0-11.32-11.32L204 176.69l-14.34-14.35a8 8 0 0 0-11.32 11.32L192.69 188l-14.35 14.34a8 8 0 0 0 11.32 11.32L204 199.31l14.34 14.35a8 8 0 0 0 11.32-11.32ZM165.66 50.34L163.31 48H184a8 8 0 0 0 0-16h-40a8 8 0 0 0-8 8v40a8 8 0 0 0 16 0V59.31l2.34 2.35c17.93 17.93 17.9 35.4 14.71 46.9c-4.64 16.77-19.36 31.77-35 35.68A8 8 0 0 0 136 160a8 8 0 0 0 1.95-.24c21.21-5.3 40.35-24.6 46.53-46.93c6.1-22.05-.58-44.24-18.82-62.49"></svg:path>`,
})
export class PhStrategyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStripeLogoFillIcon],svg[ph-stripe-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 152c-22.06 0-40-14.35-40-32a8 8 0 0 1 16 0c0 8.67 11 16 24 16s24-7.33 24-16c0-9.48-8.61-13-26.88-18.26c-15.75-4.54-35.34-10.19-35.34-29.74c0-18.24 16.43-32 38.22-32c15.72 0 29.18 7.3 35.12 19a8 8 0 1 1-14.27 7.22C145.64 91.94 137.65 88 128 88c-12.67 0-22.22 6.88-22.22 16c0 7 9 10.1 23.77 14.36C145.78 123 168 129.45 168 152c0 17.65-17.94 32-40 32"></svg:path>`,
})
export class PhStripeLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStudentFillIcon],svg[ph-student-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32A8 8 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.9 47.9 0 0 1 176 120"></svg:path>`,
})
export class PhStudentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubsetOfFillIcon],svg[ph-subset-of-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 152H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m-64-48h64a8 8 0 0 1 0 16h-64a40 40 0 0 1 0-80h64a8 8 0 0 1 0 16h-64a24 24 0 0 0 0 48"></svg:path>`,
})
export class PhSubsetOfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubsetProperOfFillIcon],svg[ph-subset-proper-of-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 144h48a8 8 0 0 1 0 16h-48a64 64 0 0 1 0-128h48a8 8 0 0 1 0 16h-48a48 48 0 0 0 0 96"></svg:path>`,
})
export class PhSubsetProperOfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubtitlesFillIcon],svg[ph-subtitles-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M56 128h16a8 8 0 0 1 0 16H56a8 8 0 0 1 0-16m96 48H56a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m48 0h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-96a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhSubtitlesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubtitlesSlashFillIcon],svg[ph-subtitles-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62a8 8 0 0 0-11.48-.37a8.23 8.23 0 0 0-.14 11.38L44.46 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h157.92l12.16 13.38a8 8 0 0 0 11.33.51a8.31 8.31 0 0 0 .3-11.51ZM104 128h13.19l14.54 16h-27.46a8.18 8.18 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53m-48 0h16a8 8 0 0 1 8 8.53a8.18 8.18 0 0 1-8.27 7.47H56.27a8.18 8.18 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53m96 48H56.27a8.18 8.18 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h90.28l11.9 13.09A8 8 0 0 1 152 176m88-112v128a16 16 0 0 1-5.19 11.78a4 4 0 0 1-5.7-.24L175 144h25a8 8 0 0 0 8-8.53a8.17 8.17 0 0 0-8.25-7.47h-39.3L93.79 54.69a4 4 0 0 1 3-6.69H224a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhSubtitlesSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubtractFillIcon],svg[ph-subtract-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174.63 81.35a80 80 0 1 0-93.28 93.28a80 80 0 1 0 93.28-93.28M96 160a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"></svg:path>`,
})
export class PhSubtractFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubtractSquareFillIcon],svg[ph-subtract-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 88h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8M48 48h104v104H48Z"></svg:path>`,
})
export class PhSubtractSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubwayFillIcon],svg[ph-subway-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 176v-24h20v16a8 8 0 0 1-8 8Zm-16 0v-24h-24v24Zm36-88a8 8 0 0 0-8-8H88a8 8 0 0 0-8 8v48h96Zm-24-64h-48a72 72 0 0 0-72 72v112a8 8 0 0 0 8 8h36.58a4 4 0 0 0 3.58-2.21L91.06 192H88a24 24 0 0 1-24-24V88a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v80a24 24 0 0 1-24 24h-3.06l10.9 21.79a4 4 0 0 0 3.58 2.21H216a8 8 0 0 0 8-8V96a72 72 0 0 0-72-72m-4.94 168h-38.12l-9.1 18.21a4 4 0 0 0 3.58 5.79h49.16a4 4 0 0 0 3.58-5.79ZM80 168a8 8 0 0 0 8 8h12v-24H80Z"></svg:path>`,
})
export class PhSubwayFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSuitcaseFillIcon],svg[ph-suitcase-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M96 72h64v128H96Zm0-24a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Z"></svg:path>`,
})
export class PhSuitcaseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSuitcaseRollingFillIcon],svg[ph-suitcase-rolling-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 48h-24V24a24 24 0 0 0-24-24h-32a24 24 0 0 0-24 24v24H64a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h16v16a8 8 0 0 0 16 0v-16h64v16a8 8 0 0 0 16 0v-16h16a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M96 192a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Zm40 0a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Zm16-144h-48V24a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8Zm24 144a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhSuitcaseRollingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSuitcaseSimpleFillIcon],svg[ph-suitcase-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M96 48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 24v72H40V72Z"></svg:path>`,
})
export class PhSuitcaseSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSunDimFillIcon],svg[ph-sun-dim-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 40v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0m8 24a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m-69.66 5.66a8 8 0 0 0 11.32-11.32l-8-8a8 8 0 0 0-11.32 11.32Zm0 116.68l-8 8a8 8 0 0 0 11.32 11.32l8-8a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l8-8a8 8 0 0 0-11.32-11.32l-8 8A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l8 8a8 8 0 0 0 11.32-11.32ZM40 120h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16m88 88a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8m96-88h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhSunDimFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSunFillIcon],svg[ph-sun-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m8 24a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m-69.66 5.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhSunFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSunHorizonFillIcon],svg[ph-sun-horizon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 160a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h40.45a74 74 0 0 1-.45-8a72 72 0 0 1 144 0a74 74 0 0 1-.45 8H240a8 8 0 0 1 8 8m-40 32H48a8 8 0 0 0 0 16h160a8 8 0 0 0 0-16M80.84 59.58a8 8 0 0 0 14.32-7.16l-8-16a8 8 0 0 0-14.32 7.16Zm-60.42 43.58l16 8a8 8 0 1 0 7.16-14.31l-16-8a8 8 0 1 0-7.16 14.31M216 112a8 8 0 0 0 3.57-.84l16-8a8 8 0 1 0-7.16-14.31l-16 8A8 8 0 0 0 216 112m-51.58-48.84a8 8 0 0 0 10.74-3.58l8-16a8 8 0 0 0-14.32-7.16l-8 16a8 8 0 0 0 3.58 10.74"></svg:path>`,
})
export class PhSunHorizonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSunglassesFillIcon],svg[ph-sunglasses-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40a8 8 0 0 0 0 16a16 16 0 0 1 16 16v56H40V72a16 16 0 0 1 16-16a8 8 0 0 0 0-16a32 32 0 0 0-32 32v92a44 44 0 0 0 88 0v-20h32v20a44 44 0 0 0 88 0V72a32 32 0 0 0-32-32M91.22 179.22a8 8 0 0 1-11.31 0l-21.57-21.56a8 8 0 0 1 11.32-11.32l21.56 21.57a8 8 0 0 1 0 11.31m120 0a8 8 0 0 1-11.31 0l-21.57-21.56a8 8 0 0 1 11.32-11.32l21.56 21.57a8 8 0 0 1 0 11.31"></svg:path>`,
})
export class PhSunglassesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSupersetOfFillIcon],svg[ph-superset-of-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 152H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m-32-32H80a8 8 0 0 1 0-16h64a24 24 0 0 0 0-48H80a8 8 0 0 1 0-16h64a40 40 0 0 1 0 80"></svg:path>`,
})
export class PhSupersetOfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSupersetProperOfFillIcon],svg[ph-superset-proper-of-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 160H80a8 8 0 0 1 0-16h48a48 48 0 0 0 0-96H80a8 8 0 0 1 0-16h48a64 64 0 0 1 0 128"></svg:path>`,
})
export class PhSupersetProperOfFillIcon {
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
  selector: 'svg[phTramFillIcon],svg[ph-tram-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 48h-48V24h32a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h32v24H72a32 32 0 0 0-32 32v104a32 32 0 0 0 32 32h8l-14.4 19.2a8 8 0 1 0 12.8 9.6L100 216h56l21.6 28.8a8 8 0 1 0 12.8-9.6L176 216h8a32 32 0 0 0 32-32V80a32 32 0 0 0-32-32m0 152H72a16 16 0 0 1-16-16v-56h144v56a16 16 0 0 1-16 16m-88-28a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTramFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTranslateFillIcon],svg[ph-translate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 129.89L175.06 160h-30.12l6.36-12.7ZM224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16.84 140.42l-40-80a8 8 0 0 0-14.32 0l-13.18 26.38a62.3 62.3 0 0 1-23.61-10A79.6 79.6 0 0 0 135.6 80H152a8 8 0 0 0 0-16h-40v-8a8 8 0 0 0-16 0v8H56a8 8 0 0 0 0 16h63.48a63.73 63.73 0 0 1-15.3 34.05a66 66 0 0 1-9-13.61a8 8 0 0 0-14.32 7.12a81.8 81.8 0 0 0 11.4 17.15A63.6 63.6 0 0 1 56 136a8 8 0 0 0 0 16a79.56 79.56 0 0 0 48.11-16.13a78.3 78.3 0 0 0 28.18 13.66l-19.45 38.89a8 8 0 0 0 14.32 7.16l9.78-19.58h46.12l9.78 19.58a8 8 0 1 0 14.32-7.16"></svg:path>`,
})
export class PhTranslateFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashFillIcon],svg[ph-trash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M112 168a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm0-120H96v-8a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhTrashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashSimpleFillIcon],svg[ph-trash-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 56a8 8 0 0 1-8 8h-8v144a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64h-8a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M88 32h80a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhTrashSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowDownFillIcon],svg[ph-tray-arrow-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M90.34 114.34a8 8 0 0 1 11.32 0L120 132.69V72a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 0-11.32M208 208H48v-40h28.69L96 187.32a15.9 15.9 0 0 0 11.31 4.68h41.38a15.86 15.86 0 0 0 11.31-4.69L179.31 168H208z"></svg:path>`,
})
export class PhTrayArrowDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowUpFillIcon],svg[ph-tray-arrow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M90.34 98.34l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L136 91.31V152a8 8 0 0 1-16 0V91.31l-18.34 18.35a8 8 0 0 1-11.32-11.32M208 208H48v-40h28.69L96 187.31a15.86 15.86 0 0 0 11.31 4.69h41.38a15.86 15.86 0 0 0 11.31-4.69L179.31 168H208z"></svg:path>`,
})
export class PhTrayArrowUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayFillIcon],svg[ph-tray-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48v-40h28.69L96 187.32a15.9 15.9 0 0 0 11.31 4.68h41.38a15.86 15.86 0 0 0 11.31-4.69L179.31 168H208z"></svg:path>`,
})
export class PhTrayFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreasureChestFillIcon],svg[ph-treasure-chest-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 124v68a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-68a4 4 0 0 1 4-4h36v64a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.27V120h40v20a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4v-20h40v64a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.25V120h36a4 4 0 0 1 4 4m-56-84H72a56 56 0 0 0-56 56v4a4 4 0 0 0 4 4h36V64.27A8.17 8.17 0 0 1 63.47 56A8 8 0 0 1 72 64v40h40V92a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v12h40V64.27a8.17 8.17 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8v40h36a4 4 0 0 0 4-4v-4a56 56 0 0 0-56-56"></svg:path>`,
})
export class PhTreasureChestFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeEvergreenFillIcon],svg[ph-tree-evergreen-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.19 195.51A8 8 0 0 1 224 200h-88v40a8 8 0 0 1-16 0v-40H32a8 8 0 0 1-6.31-12.91l46-59.09H48a8 8 0 0 1-6.34-12.88l80-104a8 8 0 0 1 12.68 0l80 104A8 8 0 0 1 208 128h-23.64l45.95 59.09a8 8 0 0 1 .88 8.42"></svg:path>`,
})
export class PhTreeEvergreenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeFillIcon],svg[ph-tree-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 187.85a72 72 0 0 0 8 4.62V232a8 8 0 0 1-16 0v-39.53a72 72 0 0 0 8-4.62m70.1-125.26a76 76 0 0 0-140.2 0A71.71 71.71 0 0 0 16 127.8C15.9 166 48 199 86.14 200a72.2 72.2 0 0 0 33.86-7.53v-35.53l-43.58-21.78a8 8 0 1 1 7.16-14.32L120 139.06V88a8 8 0 0 1 16 0v27.06l36.42-18.22a8 8 0 1 1 7.16 14.32L136 132.94v59.53a72.2 72.2 0 0 0 32 7.53h1.82c38.18-1 70.29-34 70.18-72.2a71.71 71.71 0 0 0-41.9-65.21"></svg:path>`,
})
export class PhTreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreePalmFillIcon],svg[ph-tree-palm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.84 60.33a8 8 0 0 1-4.65 5.75L179 90.55a71.42 71.42 0 0 1 43.36 33.21a70.64 70.64 0 0 1 7.2 54.32a8 8 0 0 1-12.56 4.28l-81-61.68V224a8 8 0 0 1-16 0V120.68l-81 61.68a8 8 0 0 1-12.57-4.28a70.64 70.64 0 0 1 7.2-54.32A71.42 71.42 0 0 1 77 90.55L20.81 66.08a8 8 0 0 1-2.6-12.85a66.86 66.86 0 0 1 97.74 0a72.2 72.2 0 0 1 12 17a72.2 72.2 0 0 1 12.05-17a66.86 66.86 0 0 1 97.74 0a8 8 0 0 1 2.1 7.1"></svg:path>`,
})
export class PhTreePalmFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeStructureFillIcon],svg[ph-tree-structure-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 96V80h-16a8 8 0 0 0-8 8v80a8 8 0 0 0 8 8h16v-16a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v48a16 16 0 0 1-16 16h-48a16 16 0 0 1-16-16v-16h-16a24 24 0 0 1-24-24v-32H72v8a16 16 0 0 1-16 16H24a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v8h32V88a24 24 0 0 1 24-24h16V48a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v48a16 16 0 0 1-16 16h-48a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhTreeStructureFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeViewFillIcon],svg[ph-tree-view-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 136v-8H88v64a8 8 0 0 0 8 8h64v-8a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16v-8H96a24 24 0 0 1-24-24V80h-8a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-8v32h72v-8a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhTreeViewFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendDownFillIcon],svg[ph-trend-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 128v64a8 8 0 0 1-8 8h-64a8 8 0 0 1-5.66-13.66L188.69 160L136 107.31l-34.34 34.35a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L96 124.69l34.34-34.35a8 8 0 0 1 11.32 0L200 148.69l26.34-26.35A8 8 0 0 1 240 128"></svg:path>`,
})
export class PhTrendDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendUpFillIcon],svg[ph-trend-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 56v64a8 8 0 0 1-13.66 5.66L200 99.31l-58.34 58.35a8 8 0 0 1-11.32 0L96 123.31l-66.34 66.35a8 8 0 0 1-11.32-11.32l72-72a8 8 0 0 1 11.32 0L136 140.69L188.69 88l-26.35-26.34A8 8 0 0 1 168 48h64a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTrendUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleDashedFillIcon],svg[ph-triangle-dashed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.34 24.34 0 0 0 40.55 224h174.9a24.34 24.34 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72M108 200H60.79a12 12 0 0 1-10.39-18l24.18-42a8 8 0 0 1 13.87 8l-20.74 36H108a8 8 0 0 1 0 16m-1.12-84A8 8 0 0 1 93 108l24.59-42.7a12 12 0 0 1 20.8 0L163 108a8 8 0 0 1-13.87 8L128 79.31Zm98.72 78a12.05 12.05 0 0 1-10.39 6H148a8 8 0 0 1 0-16h40.29l-20.74-36a8 8 0 0 1 13.87-8l24.18 42a12 12 0 0 1 0 12"></svg:path>`,
})
export class PhTriangleDashedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleFillIcon],svg[ph-triangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.78 211.81A24.34 24.34 0 0 1 215.45 224H40.55a24.34 24.34 0 0 1-21.33-12.19a23.51 23.51 0 0 1 0-23.72l87.43-151.87a24.76 24.76 0 0 1 42.7 0l87.45 151.87a23.51 23.51 0 0 1-.02 23.72"></svg:path>`,
})
export class PhTriangleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleyFillIcon],svg[ph-trolley-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 224a16 16 0 1 1-16-16a16 16 0 0 1 16 16m128-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m24-32H56V75.31A15.86 15.86 0 0 0 51.31 64L29.66 42.34a8 8 0 0 0-11.32 11.32L40 75.31V176h-8a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M88 160h128a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16"></svg:path>`,
})
export class PhTrolleyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleySuitcaseFillIcon],svg[ph-trolley-suitcase-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 224a16 16 0 1 1-16-16a16 16 0 0 1 16 16m128-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m24-32H56V75.31A15.86 15.86 0 0 0 51.31 64L29.66 42.34a8 8 0 0 0-11.32 11.32L40 75.31V176h-8a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M72 144V72a16 16 0 0 1 16-16h32V40a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v16h32a16 16 0 0 1 16 16v72a16 16 0 0 1-16 16H88a16 16 0 0 1-16-16m64-88h32V40h-32Z"></svg:path>`,
})
export class PhTrolleySuitcaseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrophyFillIcon],svg[ph-trophy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 64h-24V48a8 8 0 0 0-8-8H56a8 8 0 0 0-8 8v16H24A16 16 0 0 0 8 80v16a40 40 0 0 0 40 40h3.65A80.13 80.13 0 0 0 120 191.61V216H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-24.42c31.94-3.23 58.44-25.64 68.08-55.58H208a40 40 0 0 0 40-40V80a16 16 0 0 0-16-16M48 120a24 24 0 0 1-24-24V80h24v32q0 4 .39 8Zm184-24a24 24 0 0 1-24 24h-.5a82 82 0 0 0 .5-8.9V80h24Z"></svg:path>`,
})
export class PhTrophyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckFillIcon],svg[ph-truck-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m255.43 117l-14-35a15.93 15.93 0 0 0-14.85-10H192v-8a8 8 0 0 0-8-8H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a8.1 8.1 0 0 0-.57-3M80 208a16 16 0 1 1 16-16a16 16 0 0 1-16 16m-48-72V72h144v64Zm160 72a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-96V88h34.58l9.6 24Z"></svg:path>`,
})
export class PhTruckFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckTrailerFillIcon],svg[ph-truck-trailer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 96.8V96a56.06 56.06 0 0 0-56-56h-8a16 16 0 0 0-16 16v120h-16V72a8 8 0 0 0-8-8H16A16 16 0 0 0 0 80v104a32 32 0 0 0 56 21.13A32 32 0 0 0 111 192h82a32 32 0 0 0 63-8v-48a40.07 40.07 0 0 0-32-39.2M32 200a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m144 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhTruckTrailerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTumblrLogoFillIcon],svg[ph-tumblr-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 120v48a8 8 0 0 0 8 8h32a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8h-40a64.07 64.07 0 0 1-64-64v-56H64a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8a40 40 0 0 0 40-40a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v40h40a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8Z"></svg:path>`,
})
export class PhTumblrLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitchLogoFillIcon],svg[ph-twitch-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h16v32a8 8 0 0 0 13.12 6.15L122.9 208h42.2a16 16 0 0 0 10.25-3.71l42.89-35.75a15.93 15.93 0 0 0 5.76-12.29V48a16 16 0 0 0-16-16m-80 104a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhTwitchLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitterLogoFillIcon],svg[ph-twitter-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.66 77.66l-29.9 29.9C209.72 177.58 150.67 232 80 232c-14.52 0-26.49-2.3-35.58-6.84c-7.33-3.67-10.33-7.6-11.08-8.72a8 8 0 0 1 3.85-11.93c.26-.1 24.24-9.31 39.47-26.84a111 111 0 0 1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8 8 0 0 1 13.65-4.92c.35.35 33.28 33.1 73.54 43.72V88a47.87 47.87 0 0 1 14.36-34.3A46.87 46.87 0 0 1 168.1 40a48.66 48.66 0 0 1 41.47 24H240a8 8 0 0 1 5.66 13.66"></svg:path>`,
})
export class PhTwitterLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaFillIcon],svg[ph-umbrella-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 126.63A112.21 112.21 0 0 0 128 24A112.21 112.21 0 0 0 16.05 126.63A16 16 0 0 0 32 144h88v56a32 32 0 0 0 64 0a8 8 0 0 0-16 0a16 16 0 0 1-32 0v-56h88a16 16 0 0 0 16-17.37M32 128a96.15 96.15 0 0 1 76.2-85.89C96.48 58 81.85 86.11 80.17 128zm143.83 0c-1.68-41.89-16.31-70-28-85.94A96.07 96.07 0 0 1 224 128Z"></svg:path>`,
})
export class PhUmbrellaFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaSimpleFillIcon],svg[ph-umbrella-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.76 138.83A16 16 0 0 1 224 144h-88v56a16 16 0 0 0 32 0a8 8 0 0 1 16 0a32 32 0 0 1-64 0v-56H32a16 16 0 0 1-16-17.37a112.44 112.44 0 0 1 188.2-72.88a111.56 111.56 0 0 1 35.8 72.88a16.1 16.1 0 0 1-4.24 12.2"></svg:path>`,
})
export class PhUmbrellaSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUnionFillIcon],svg[ph-union-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 104a56 56 0 0 1-112 0V80a8 8 0 0 1 16 0v56a40 40 0 0 0 80 0V80a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhUnionFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteFillIcon],svg[ph-unite-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 164a76 76 0 0 1-151.9 3.9a76 76 0 1 1 79.8-79.8A76.1 76.1 0 0 1 240 164"></svg:path>`,
})
export class PhUniteFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteSquareFillIcon],svg[ph-unite-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 96v120a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8v-48H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h120a8 8 0 0 1 8 8v48h48a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhUniteSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadFillIcon],svg[ph-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M74.34 77.66a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1-11.32 11.32L136 43.31V128a8 8 0 0 1-16 0V43.31L85.66 77.66a8 8 0 0 1-11.32 0M240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h68a4 4 0 0 1 4 4v3.46c0 13.45 11 24.79 24.46 24.54A24 24 0 0 0 152 128v-4a4 4 0 0 1 4-4h68a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhUploadFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadSimpleFillIcon],svg[ph-upload-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 144v64a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0M88 80h32v64a8 8 0 0 0 16 0V80h32a8 8 0 0 0 5.66-13.66l-40-40a8 8 0 0 0-11.32 0l-40 40A8 8 0 0 0 88 80"></svg:path>`,
})
export class PhUploadSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsbFillIcon],svg[ph-usb-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 128a4 4 0 0 1-1.78 3.33l-48 32A4 4 0 0 1 196 160v-24H72v48h36v-8a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v32a12 12 0 0 1-12 12h-32a12 12 0 0 1-12-12v-8H72a16 16 0 0 1-16-16v-48H8a8 8 0 0 1 0-16h48V72a16 16 0 0 1 16-16h37.17a28 28 0 1 1 0 16H72v48h124V96a4 4 0 0 1 6.22-3.33l48 32A4 4 0 0 1 252 128"></svg:path>`,
})
export class PhUsbFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCheckFillIcon],svg[ph-user-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m253.66 133.66l-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L216 148.69l26.34-26.35a8 8 0 0 1 11.32 11.32M144 157.68a68 68 0 1 0-71.9 0c-20.65 6.76-39.23 19.39-54.17 37.17A8 8 0 0 0 24 208h168a8 8 0 0 0 6.13-13.15c-14.95-17.78-33.53-30.41-54.13-37.17"></svg:path>`,
})
export class PhUserCheckFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleCheckFillIcon],svg[ph-user-circle-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.56 110.68a103.92 103.92 0 1 1-85.24-85.24a8 8 0 0 1-2.64 15.78A88.07 88.07 0 0 0 40 128a87.62 87.62 0 0 0 22.24 58.41A79.7 79.7 0 0 1 84 165.1a4 4 0 0 1 4.84.32a59.8 59.8 0 0 0 78.26 0a4 4 0 0 1 4.84-.32a79.9 79.9 0 0 1 21.79 21.31A87.62 87.62 0 0 0 216 128a89 89 0 0 0-1.22-14.68a8 8 0 1 1 15.78-2.64M84 120a44 44 0 1 0 44-44a44 44 0 0 0-44 44m153.66-85.66a8 8 0 0 0-11.32 0L200 60.69l-10.34-10.35a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhUserCircleCheckFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleDashedFillIcon],svg[ph-user-circle-dashed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96.26 37a8 8 0 0 1 5.74-9.71a104.1 104.1 0 0 1 52 0a8 8 0 0 1-2 15.75a8.2 8.2 0 0 1-2-.26a88 88 0 0 0-44 0A8 8 0 0 1 96.26 37m-62.91 73a8 8 0 0 0 9.85-5.57a88 88 0 0 1 22-38.09a8 8 0 0 0-11.41-11.2a104.05 104.05 0 0 0-26 45a8 8 0 0 0 5.56 9.86m179.44-5.56a8 8 0 0 0 15.42-4.28a104 104 0 0 0-26-45a8 8 0 1 0-11.41 11.22a88 88 0 0 1 21.99 38.07Zm9.87 41.56a8 8 0 0 0-9.85 5.58a87.6 87.6 0 0 1-19 34.83a79.8 79.8 0 0 0-21.81-21.3a4 4 0 0 0-4.83.31a59.81 59.81 0 0 1-78.27 0a4 4 0 0 0-4.84-.31a79.5 79.5 0 0 0-22 21.12a87.7 87.7 0 0 1-18.83-34.67a8 8 0 0 0-15.42 4.28a104.07 104.07 0 0 0 200.46 0a8 8 0 0 0-5.61-9.84M128 164a44 44 0 1 0-44-44a44.05 44.05 0 0 0 44 44"></svg:path>`,
})
export class PhUserCircleDashedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleFillIcon],svg[ph-user-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44.05 44.05 0 0 1 44 44m60 8A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88.09 88.09 0 0 0-91.47-87.93C77.43 41.89 39.87 81.12 40 128.25a87.65 87.65 0 0 0 22.24 58.16A79.7 79.7 0 0 1 84 165.1a4 4 0 0 1 4.83.32a59.83 59.83 0 0 0 78.28 0a4 4 0 0 1 4.83-.32a79.7 79.7 0 0 1 21.79 21.31A87.62 87.62 0 0 0 216 128"></svg:path>`,
})
export class PhUserCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleGearFillIcon],svg[ph-user-circle-gear-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.25 63.07l-4.66-2.69a23.6 23.6 0 0 0 0-8.76l4.66-2.69a8 8 0 0 0-8-13.86l-4.67 2.7a23.9 23.9 0 0 0-7.58-4.39V28a8 8 0 0 0-16 0v5.38a23.9 23.9 0 0 0-7.58 4.39l-4.67-2.7a8 8 0 1 0-8 13.86l4.66 2.69a23.6 23.6 0 0 0 0 8.76l-4.66 2.69a8 8 0 0 0 4 14.93a7.9 7.9 0 0 0 4-1.07l4.67-2.7a23.9 23.9 0 0 0 7.58 4.39V84a8 8 0 0 0 16 0v-5.38a23.9 23.9 0 0 0 7.58-4.39l4.67 2.7a7.9 7.9 0 0 0 4 1.07a8 8 0 0 0 4-14.93M200 64a8 8 0 1 1 8-8a8 8 0 0 1-8 8m-72 12a44 44 0 1 1-44 44a44 44 0 0 1 44-44m102.56 34.68a103.92 103.92 0 1 1-85.24-85.24a8 8 0 0 1-2.64 15.78A88.07 88.07 0 0 0 40 128a87.62 87.62 0 0 0 22.24 58.41A79.7 79.7 0 0 1 84 165.1a4 4 0 0 1 4.83.32a59.81 59.81 0 0 0 78.27 0a4 4 0 0 1 4.84-.32a79.9 79.9 0 0 1 21.79 21.31A87.62 87.62 0 0 0 216 128a89 89 0 0 0-1.22-14.68a8 8 0 1 1 15.78-2.64"></svg:path>`,
})
export class PhUserCircleGearFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleMinusFillIcon],svg[ph-user-circle-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 76a44 44 0 1 1-44 44a44 44 0 0 1 44-44m48-12h48a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16m39.87 24.46A8 8 0 0 0 211 98.67a88 88 0 0 1-17.23 87.74A79.9 79.9 0 0 0 172 165.1a4 4 0 0 0-4.84.32a59.81 59.81 0 0 1-78.27 0a4 4 0 0 0-4.89-.32a79.7 79.7 0 0 0-21.79 21.31A88 88 0 0 1 128 40a89 89 0 0 1 14.68 1.22a8 8 0 0 0 2.64-15.78a103.9 103.9 0 1 0 80.76 67.89a8 8 0 0 0-10.21-4.87"></svg:path>`,
})
export class PhUserCircleMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCirclePlusFillIcon],svg[ph-user-circle-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 76a44 44 0 1 1-44 44a44 44 0 0 1 44-44m48-12h16v16a8 8 0 0 0 16 0V64h16a8 8 0 0 0 0-16h-16V32a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16m45.35 40.11a8 8 0 0 0-6.57 9.21A89 89 0 0 1 216 128a87.62 87.62 0 0 1-22.24 58.41A79.9 79.9 0 0 0 172 165.1a4 4 0 0 0-4.84.32a59.81 59.81 0 0 1-78.27 0a4 4 0 0 0-4.89-.32a79.7 79.7 0 0 0-21.79 21.31A88 88 0 0 1 128 40a89 89 0 0 1 14.68 1.22a8 8 0 0 0 2.64-15.78a103.92 103.92 0 1 0 85.24 85.24a8 8 0 0 0-9.21-6.57"></svg:path>`,
})
export class PhUserCirclePlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserFillIcon],svg[ph-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.93 220a8 8 0 0 1-6.93 4H32a8 8 0 0 1-6.92-12c15.23-26.33 38.7-45.21 66.09-54.16a72 72 0 1 1 73.66 0c27.39 8.95 50.86 27.83 66.09 54.16a8 8 0 0 1 .01 8"></svg:path>`,
})
export class PhUserFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserFocusFillIcon],svg[ph-user-focus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40v36a8 8 0 0 1-16 0V48h-28a8 8 0 0 1 0-16h36a8 8 0 0 1 8 8m-8 132a8 8 0 0 0-8 8v28h-28a8 8 0 0 0 0 16h36a8 8 0 0 0 8-8v-36a8 8 0 0 0-8-8M76 208H48v-28a8 8 0 0 0-16 0v36a8 8 0 0 0 8 8h36a8 8 0 0 0 0-16M40 84a8 8 0 0 0 8-8V48h28a8 8 0 0 0 0-16H40a8 8 0 0 0-8 8v36a8 8 0 0 0 8 8m61 57.51a67.94 67.94 0 0 0-27.4 21.68A8 8 0 0 0 80 176h96a8 8 0 0 0 6.4-12.81a67.94 67.94 0 0 0-27.4-21.68a40 40 0 1 0-53.94 0Z"></svg:path>`,
})
export class PhUserFocusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserGearFillIcon],svg[ph-user-gear-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.13 194.85A8 8 0 0 1 192 208H24a8 8 0 0 1-6.12-13.15c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17M255.18 154a8 8 0 0 1-6.94 4a7.9 7.9 0 0 1-4-1.07l-4.67-2.7a23.9 23.9 0 0 1-7.58 4.39V164a8 8 0 0 1-16 0v-5.38a23.9 23.9 0 0 1-7.58-4.39l-4.67 2.7a7.9 7.9 0 0 1-4 1.07a8 8 0 0 1-4-14.93l4.66-2.69a23.6 23.6 0 0 1 0-8.76l-4.66-2.69a8 8 0 1 1 8-13.86l4.67 2.7a23.9 23.9 0 0 1 7.58-4.39V108a8 8 0 0 1 16 0v5.38a23.9 23.9 0 0 1 7.58 4.39l4.67-2.7a8 8 0 1 1 8 13.86l-4.66 2.69a23.6 23.6 0 0 1 0 8.76l4.66 2.69a8 8 0 0 1 2.94 10.93M224 144a8 8 0 1 0-8-8a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhUserGearFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserListFillIcon],svg[ph-user-list-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 80a8 8 0 0 1 8-8h88a8 8 0 0 1 0 16h-88a8 8 0 0 1-8-8m96 40h-88a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16m0 48h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m-138.71-26a48 48 0 1 0-58.58 0c-20.62 8.73-36.87 26.3-42.46 48A8 8 0 0 0 16 200h128a8 8 0 0 0 7.75-10c-5.59-21.71-21.84-39.28-42.46-48"></svg:path>`,
})
export class PhUserListFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserMinusFillIcon],svg[ph-user-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.13 194.85A8 8 0 0 1 192 208H24a8 8 0 0 1-6.12-13.15c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17M248 128h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhUserMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserPlusFillIcon],svg[ph-user-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 136a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8m-112 21.68a68 68 0 1 0-71.9 0c-20.65 6.76-39.23 19.39-54.17 37.17A8 8 0 0 0 24 208h168a8 8 0 0 0 6.13-13.15c-14.95-17.78-33.53-30.41-54.13-37.17"></svg:path>`,
})
export class PhUserPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserRectangleFillIcon],svg[ph-user-rectangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44m60-64v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 144V56H40v144h14.68a80 80 0 0 1 29.41-34.84a4 4 0 0 1 4.83.31a59.82 59.82 0 0 0 78.16 0a4 4 0 0 1 4.83-.31A80 80 0 0 1 201.32 200z"></svg:path>`,
})
export class PhUserRectangleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSoundFillIcon],svg[ph-user-sound-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.13 202.85A8 8 0 0 1 192 216H24a8 8 0 0 1-6.12-13.15c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17m-1.27-141.46a8 8 0 0 0-4.22 10.5a92.26 92.26 0 0 1 0 72.22a8 8 0 1 0 14.72 6.29a108.36 108.36 0 0 0 0-84.8a8 8 0 0 0-10.5-4.21m39.85-8.54a8 8 0 1 0-14.7 6.3a124.43 124.43 0 0 1 0 97.7a8 8 0 1 0 14.7 6.3a140.34 140.34 0 0 0 0-110.3"></svg:path>`,
})
export class PhUserSoundFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSquareFillIcon],svg[ph-user-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44m52-72v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 160V48H48v160h3.67a80.6 80.6 0 0 1 26.07-38.25q3.08-2.48 6.36-4.62a4 4 0 0 1 4.81.33a59.82 59.82 0 0 0 78.18 0a4 4 0 0 1 4.81-.33q3.28 2.15 6.36 4.62A80.6 80.6 0 0 1 204.33 208z"></svg:path>`,
})
export class PhUserSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSwitchFillIcon],svg[ph-user-switch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 120a44 44 0 1 1 44 44a44 44 0 0 1-44-44m126.16 57.18a8.21 8.21 0 0 0-10.86 2.41a87 87 0 0 1-5.52 6.85A79.8 79.8 0 0 0 172 165.1a4 4 0 0 0-4.84.32a59.8 59.8 0 0 1-78.26 0a4 4 0 0 0-4.9-.32a79.7 79.7 0 0 0-21.79 21.31A87.66 87.66 0 0 1 40.37 136h15.4a8.2 8.2 0 0 0 6.69-3.28a8 8 0 0 0-.8-10.38l-24-24a8 8 0 0 0-11.32 0l-24 24a8 8 0 0 0-.8 10.38A8.2 8.2 0 0 0 8.23 136H24.3a104 104 0 0 0 188.18 52.67a8 8 0 0 0-2.32-11.49m45.23-52.24A8 8 0 0 0 248 120h-16.3A104 104 0 0 0 43.52 67.33a8 8 0 0 0 13 9.34A88 88 0 0 1 215.63 120H200a8 8 0 0 0-5.66 13.66l24 24a8 8 0 0 0 11.32 0l24-24a8 8 0 0 0 1.73-8.72"></svg:path>`,
})
export class PhUserSwitchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersFillIcon],svg[ph-users-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164.47 195.63a8 8 0 0 1-6.7 12.37H10.23a8 8 0 0 1-6.7-12.37a95.83 95.83 0 0 1 47.22-37.71a60 60 0 1 1 66.5 0a95.83 95.83 0 0 1 47.22 37.71m87.91-.15a95.87 95.87 0 0 0-47.13-37.56A60 60 0 0 0 144.7 54.59a4 4 0 0 0-1.33 6a75.83 75.83 0 0 1 3.63 89.94a4 4 0 0 0 1.07 5.53a112.3 112.3 0 0 1 29.85 30.83a23.92 23.92 0 0 1 3.65 16.47a4 4 0 0 0 3.95 4.64h60.3a8 8 0 0 0 7.73-5.93a8.22 8.22 0 0 0-1.17-6.59"></svg:path>`,
})
export class PhUsersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersFourFillIcon],svg[ph-users-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.4 219.19A8 8 0 0 1 224 232H32a8 8 0 0 1-6.4-12.8A67.9 67.9 0 0 1 53 197.51a40 40 0 1 1 53.93 0a67.4 67.4 0 0 1 21 14.29a67.4 67.4 0 0 1 21-14.29a40 40 0 1 1 53.93 0a67.85 67.85 0 0 1 27.54 21.68M27.2 126.4a8 8 0 0 0 11.2-1.6a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8 0a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 93.51a40 40 0 1 0-53.93 0a67.4 67.4 0 0 0-21 14.29a67.4 67.4 0 0 0-21-14.29a40 40 0 1 0-53.93 0A67.9 67.9 0 0 0 25.6 115.2a8 8 0 0 0 1.6 11.2"></svg:path>`,
})
export class PhUsersFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersThreeFillIcon],svg[ph-users-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64.12 147.8a4 4 0 0 1-4 4.2H16a8 8 0 0 1-7.8-6.17a8.35 8.35 0 0 1 1.62-6.93A67.8 67.8 0 0 1 37 117.51a40 40 0 1 1 66.46-35.8a3.94 3.94 0 0 1-2.27 4.18A64.08 64.08 0 0 0 64 144c0 1.28 0 2.54.12 3.8m182-8.91A67.76 67.76 0 0 0 219 117.51a40 40 0 1 0-66.46-35.8a3.94 3.94 0 0 0 2.27 4.18A64.08 64.08 0 0 1 192 144c0 1.28 0 2.54-.12 3.8a4 4 0 0 0 4 4.2H240a8 8 0 0 0 7.8-6.17a8.33 8.33 0 0 0-1.63-6.94Zm-89 43.18a48 48 0 1 0-58.37 0A72.13 72.13 0 0 0 65.07 212A8 8 0 0 0 72 224h112a8 8 0 0 0 6.93-12a72.15 72.15 0 0 0-33.74-29.93Z"></svg:path>`,
})
export class PhUsersThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVanFillIcon],svg[ph-van-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m254.07 106.79l-45.54-53.06A16 16 0 0 0 196.26 48H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a8 8 0 0 0-1.93-5.21M32 104V64h56v40Zm48 96a16 16 0 1 1 16-16a16 16 0 0 1-16 16m80-96h-56V64h56Zm32 96a16 16 0 1 1 16-16a16 16 0 0 1-16 16m-16-96V64h20.26l34.33 40Z"></svg:path>`,
})
export class PhVanFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVaultFillIcon],svg[ph-vault-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h16v16a8 8 0 0 0 16 0v-16h112v16a8 8 0 0 0 16 0v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-8 96h-28.91a36 36 0 1 1 0-16H208a8 8 0 0 1 0 16m-44-8a20 20 0 1 1-20-20a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhVaultFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorThreeFillIcon],svg[ph-vector-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.66 141.66l-32 32A8 8 0 0 1 192 168v-24h-68.69l-40 40l18.35 18.34A8 8 0 0 1 96 216H48a8 8 0 0 1-8-8v-48a8 8 0 0 1 13.66-5.66L72 172.69l40-40V64H88a8 8 0 0 1-5.66-13.66l32-32a8 8 0 0 1 11.32 0l32 32A8 8 0 0 1 152 64h-24v64h64v-24a8 8 0 0 1 13.66-5.66l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhVectorThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorTwoFillIcon],svg[ph-vector-two-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 197.66l-32 32A8 8 0 0 1 184 224v-24H80a8 8 0 0 1-8-8V80H48a8 8 0 0 1-5.66-13.66l32-32a8 8 0 0 1 11.32 0l32 32A8 8 0 0 1 112 80H88v104h96v-24a8 8 0 0 1 13.66-5.66l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhVectorTwoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVibrateFillIcon],svg[ph-vibrate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 56v144a24 24 0 0 1-24 24H96a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h64a24 24 0 0 1 24 24m24 24a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m32 16a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8M48 80a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8M16 96a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhVibrateFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraFillIcon],svg[ph-video-camera-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 72v112a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m58 .25a8.23 8.23 0 0 0-6.63 1.22l-33.59 22.39a4 4 0 0 0-1.78 3.33v57.62a4 4 0 0 0 1.78 3.33l33.78 22.52a8 8 0 0 0 8.58.19a8.33 8.33 0 0 0 3.86-7.17V80a8 8 0 0 0-6-7.75"></svg:path>`,
})
export class PhVideoCameraFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraSlashFillIcon],svg[ph-video-camera-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 80.23v95.45a8.33 8.33 0 0 1-3.86 7.17a8 8 0 0 1-8.58-.19l-33.78-22.52a4 4 0 0 1-1.78-3.33V99.19a4 4 0 0 1 1.78-3.32l33.78-22.53a8 8 0 0 1 9.73.66a8.23 8.23 0 0 1 2.71 6.23M53.92 34.62a8 8 0 1 0-11.84 10.76L51.73 56H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h150.64l19.44 21.38a8 8 0 1 0 11.84-10.76ZM185 155.07a4 4 0 0 0 7-2.7V72a16 16 0 0 0-16-16h-72a4 4 0 0 0-3 6.69Z"></svg:path>`,
})
export class PhVideoCameraSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoConferenceFillIcon],svg[ph-video-conference-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 88a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-12 68a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-96-52a16 16 0 1 0 16 16a16 16 0 0 0-16-16m136-48v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-64 64h48V56h-48Zm-32.25 46a39.76 39.76 0 0 0-17.19-23.34a32 32 0 1 0-45.12 0A39.84 39.84 0 0 0 56.25 166a8 8 0 0 0 15.5 4c2.64-10.25 13.06-18 24.25-18s21.62 7.73 24.25 18a8 8 0 1 0 15.5-4M216 200v-64h-48v64z"></svg:path>`,
})
export class PhVideoConferenceFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoFillIcon],svg[ph-video-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8m0-152v112a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-68 56a8 8 0 0 0-3.41-6.55l-40-28A8 8 0 0 0 108 84v56a8 8 0 0 0 12.59 6.55l40-28A8 8 0 0 0 164 112"></svg:path>`,
})
export class PhVideoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVignetteFillIcon],svg[ph-vignette-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-16 88c0 30.93-32.24 56-72 56s-72-25.07-72-56s32.24-56 72-56s72 25.07 72 56"></svg:path>`,
})
export class PhVignetteFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVinylRecordFillIcon],svg[ph-vinyl-record-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M72 128a8 8 0 0 1-16 0a72.08 72.08 0 0 1 72-72a8 8 0 0 1 0 16a56.06 56.06 0 0 0-56 56m32 0a24 24 0 1 1 24 24a24 24 0 0 1-24-24m24 72a8 8 0 0 1 0-16a56.06 56.06 0 0 0 56-56a8 8 0 0 1 16 0a72.08 72.08 0 0 1-72 72"></svg:path>`,
})
export class PhVinylRecordFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirtualRealityFillIcon],svg[ph-virtual-reality-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 48H80a80 80 0 0 0 0 160h96a80 80 0 0 0 0-160m-52.51 50.81l-24 64a8 8 0 0 1-15 0l-24-64a8 8 0 1 1 15-5.62l16.51 44l16.51-44a8 8 0 1 1 15 5.62ZM191 156a8 8 0 0 1-13.9 7.94l-11.44-20c-.53 0-1.07.05-1.61.05H152v16a8 8 0 0 1-16 0V96a8 8 0 0 1 8-8h20a28 28 0 0 1 16.84 50.35Zm-15-40a12 12 0 0 1-12 12h-12v-24h12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhVirtualRealityFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirusFillIcon],svg[ph-virus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 120h-16.34a95.52 95.52 0 0 0-22.39-53.95l12.39-12.39a8 8 0 0 0-11.32-11.32L190 54.73a95.52 95.52 0 0 0-54-22.39V16a8 8 0 0 0-16 0v16.34a95.52 95.52 0 0 0-53.95 22.39L53.66 42.34a8 8 0 0 0-11.32 11.32l12.39 12.39a95.52 95.52 0 0 0-22.39 54H16a8 8 0 0 0 0 16h16.34A95.52 95.52 0 0 0 54.73 190l-12.39 12.34a8 8 0 0 0 11.32 11.32l12.39-12.39a95.52 95.52 0 0 0 54 22.39V240a8 8 0 0 0 16 0v-16.34A95.52 95.52 0 0 0 190 201.27l12.39 12.39a8 8 0 0 0 11.32-11.32L201.27 190a95.52 95.52 0 0 0 22.39-54H240a8 8 0 0 0 0-16M80 108a28 28 0 1 1 28 28a28 28 0 0 1-28-28m48 84a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48-48a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhVirusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVisorFillIcon],svg[ph-visor-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.05 56H72A72 72 0 0 0 .08 131.4c1.69 36.69 31.76 66.79 68.45 68.52c15.84.72 32-5.9 49.38-20.3a15.87 15.87 0 0 1 20.24 0C148.72 188.39 165 200 184 200a72 72 0 0 0 72-72.95C255.49 87.87 222.76 56 183.05 56M176 104H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhVisorFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVoicemailFillIcon],svg[ph-voicemail-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 72a56 56 0 0 0-39.14 96H95.14A56 56 0 1 0 56 184h144a56 56 0 0 0 0-112M56 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40m144 0a40 40 0 1 1 40-40a40 40 0 0 1-40 40m24-40a24 24 0 1 1-24-24a24 24 0 0 1 24 24m-144 0a24 24 0 1 1-24-24a24 24 0 0 1 24 24"></svg:path>`,
})
export class PhVoicemailFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVolleyballFillIcon],svg[ph-volleyball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m87.63 96h-34.26a104.18 104.18 0 0 0-35.78-78.23A88.18 88.18 0 0 1 215.63 120m-171.1 35.87a87.95 87.95 0 0 1 32.74-99.74l17.12 29.65a104.14 104.14 0 0 0-49.86 70.09m14.37 26.56a88 88 0 0 1 43.49-82.79L118.76 128l-41.49 71.87a88.6 88.6 0 0 1-18.37-17.44m150.84-21.85a88 88 0 0 1-93.49 3.78L132.62 136h83a87.2 87.2 0 0 1-5.88 24.58"></svg:path>`,
})
export class PhVolleyballFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWallFillIcon],svg[ph-wall-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56v32a4 4 0 0 1-4 4h-92V52a4 4 0 0 1 4-4h84a8 8 0 0 1 8 8m-4 52h-44v44h44a4 4 0 0 0 4-4v-36a4 4 0 0 0-4-4M88 152h80v-44H88Zm-60 0h44v-44H28a4 4 0 0 0-4 4v36a4 4 0 0 0 4 4m200 16h-92v36a4 4 0 0 0 4 4h84a8 8 0 0 0 8-8v-28a4 4 0 0 0-4-4M28 92h92V52a4 4 0 0 0-4-4H32a8 8 0 0 0-8 8v32a4 4 0 0 0 4 4m-4 80v28a8 8 0 0 0 8 8h84a4 4 0 0 0 4-4v-36H28a4 4 0 0 0-4 4"></svg:path>`,
})
export class PhWallFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWalletFillIcon],svg[ph-wallet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 64H56a8 8 0 0 1 0-16h136a8 8 0 0 0 0-16H56a24 24 0 0 0-24 24v128a24 24 0 0 0 24 24h160a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m-36 80a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhWalletFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarehouseFillIcon],svg[ph-warehouse-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 184h-8V57.9l9.67-2.08a8 8 0 1 0-3.35-15.64l-224 48A8 8 0 0 0 16 104a8 8 0 0 0 1.69-.18l6.31-1.35V184h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-56 0H72v-16h112Zm0-32H72v-16h112Z"></svg:path>`,
})
export class PhWarehouseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningCircleFillIcon],svg[ph-warning-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-8 56a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm8 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhWarningCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningDiamondFillIcon],svg[ph-warning-diamond-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.33 116.72l-96.05-96.06a16 16 0 0 0-22.56 0l-96 96.06a16 16 0 0 0 0 22.56l96.05 96.06a16 16 0 0 0 22.56 0l96.05-96.06a16 16 0 0 0 0-22.56ZM120 80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm8 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhWarningDiamondFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningFillIcon],svg[ph-warning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72M120 104a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm8 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhWarningFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningOctagonFillIcon],svg[ph-warning-octagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.31 80.23l-51.54-51.54A16.13 16.13 0 0 0 164.45 24h-72.9a16.13 16.13 0 0 0-11.32 4.69L28.69 80.23A16.13 16.13 0 0 0 24 91.55v72.9a16.13 16.13 0 0 0 4.69 11.32l51.54 51.54A16.13 16.13 0 0 0 91.55 232h72.9a16.13 16.13 0 0 0 11.32-4.69l51.54-51.54a16.13 16.13 0 0 0 4.69-11.32v-72.9a16.13 16.13 0 0 0-4.69-11.32M120 80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm8 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhWarningOctagonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWashingMachineFillIcon],svg[ph-washing-machine-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 152a56 56 0 1 1 56-56a56 56 0 0 1-56 56m60-104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m-54.34 29.66l-32 32a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 11.32m32-3.32a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0"></svg:path>`,
})
export class PhWashingMachineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWatchFillIcon],svg[ph-watch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m175.3 63.53l-6.24-34.38A16 16 0 0 0 153.32 16h-50.64a16 16 0 0 0-15.74 13.15L80.7 63.53a79.9 79.9 0 0 0 0 128.94l6.24 34.38A16 16 0 0 0 102.68 240h50.64a16 16 0 0 0 15.74-13.15l6.24-34.38a79.9 79.9 0 0 0 0-128.94M102.68 32h50.64l3.91 21.55a79.75 79.75 0 0 0-58.46 0Zm50.64 192h-50.64l-3.91-21.55a79.75 79.75 0 0 0 58.46 0ZM168 136h-40a8 8 0 0 1-8-8V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhWatchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSawtoothFillIcon],svg[ph-wave-sawtooth-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-11.56 94.66l-72 48A8 8 0 0 1 128 184a8 8 0 0 1-8-8V95l-59.56 39.66a8 8 0 1 1-8.88-13.32l72-48A8 8 0 0 1 136 80v81.05l59.56-39.71a8 8 0 0 1 8.88 13.32"></svg:path>`,
})
export class PhWaveSawtoothFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSineFillIcon],svg[ph-wave-sine-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-4.78 91.44c-16.68 35-31.06 50.56-46.65 50.56c-19.68 0-31.39-24.56-43.79-50.56C112 113 101 90 91.43 90c-3.74 0-14.37 4-32.21 41.44a8 8 0 0 1-14.44-6.88C61.46 89.59 75.84 74 91.43 74c19.68 0 31.39 24.56 43.79 50.56C144 143 155 166 164.57 166c3.74 0 14.37-4 32.21-41.44a8 8 0 1 1 14.44 6.88"></svg:path>`,
})
export class PhWaveSineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSquareFillIcon],svg[ph-wave-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-8 128a8 8 0 0 1-8 8h-72a8 8 0 0 1-8-8V96H64v32a8 8 0 0 1-16 0V88a8 8 0 0 1 8-8h72a8 8 0 0 1 8 8v72h56v-32a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhWaveSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveTriangleFillIcon],svg[ph-wave-triangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-9.85 93.12l-40 48A8 8 0 0 1 160 184h-.43a8 8 0 0 1-6.23-3.55l-58-87.09l-33.19 39.76a8 8 0 0 1-12.3-10.24l40-48a8 8 0 0 1 12.81.68l58.05 87.09l33.14-39.77a8 8 0 1 1 12.3 10.24"></svg:path>`,
})
export class PhWaveTriangleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformFillIcon],svg[ph-waveform-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M72 152a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm32 32a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0Zm32-16a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm32-16a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm32 8a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhWaveformFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformSlashFillIcon],svg[ph-waveform-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 56a8 8 0 0 1 16 0v50.75a8 8 0 0 1-16 0Zm-32 8a8 8 0 0 1 16 0v10.75a8 8 0 0 1-16 0Zm-80 48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm125.66 45.66a8 8 0 0 1-11.32 0L136 147.31V168a8 8 0 0 1-16 0v-36.69l-16-16V184a8 8 0 0 1-16 0V99.32L58.34 69.66a8 8 0 0 1 11.32-11.32l128 128a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhWaveformSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWavesFillIcon],svg[ph-waves-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-10.8 144.87c-13.07 11.18-24.9 15.1-35.64 15.1c-14.26 0-26.62-6.92-37.47-13c-18.41-10.31-32.95-18.45-54.89.31a8 8 0 1 1-10.4-12.16c30.42-26 54.09-12.76 73.11-2.11c18.41 10.31 33 18.45 54.89-.31a8 8 0 0 1 10.4 12.16Zm0-44c-13.07 11.18-24.9 15.1-35.64 15.1c-14.26 0-26.62-6.92-37.47-13c-18.41-10.31-32.95-18.45-54.89.31a8 8 0 0 1-10.4-12.16c30.42-26 54.09-12.76 73.11-2.11c18.41 10.31 33 18.45 54.89-.31a8 8 0 1 1 10.4 12.16Zm0-44c-13.07 11.18-24.9 15.1-35.64 15.1c-14.26 0-26.62-6.92-37.47-13c-18.41-10.31-32.95-18.45-54.89.31a8 8 0 0 1-10.4-12.15c30.42-26 54.09-12.76 73.11-2.11c18.41 10.31 33 18.45 54.89-.31a8 8 0 1 1 10.4 12.16"></svg:path>`,
})
export class PhWavesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
