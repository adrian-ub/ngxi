import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberThreeIcon],svg[ph-number-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 160a56 56 0 0 1-93.33 41.74a8 8 0 1 1 10.66-11.92A40 40 0 1 0 120 120a8 8 0 0 1-6.4-12.8L152 56H88a8 8 0 0 1 0-16h80a8 8 0 0 1 6.4 12.8l-39.84 53.12A56.1 56.1 0 0 1 176 160"></svg:path>`,
})
export class PhNumberThreeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberTwoIcon],svg[ph-number-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 208a8 8 0 0 1-8 8H88a8 8 0 0 1-6.4-12.8l71.94-95.92a32 32 0 1 0-51.1-38.53a32.5 32.5 0 0 0-3.78 6.46A8 8 0 1 1 84 68.8a48 48 0 1 1 82.33 48.09L104 200h64a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhNumberTwoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberZeroIcon],svg[ph-number-zero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.25 63.2C170.25 42.79 151.15 32 128 32S85.75 42.79 72.75 63.2C62 80.18 56 103.19 56 128s6 47.82 16.75 64.8c13 20.41 32.1 31.2 55.25 31.2s42.25-10.79 55.25-31.2c10.8-17 16.75-40 16.75-64.8s-5.95-47.82-16.75-64.8M128 208c-38.68 0-56-40.18-56-80s17.32-80 56-80s56 40.18 56 80s-17.32 80-56 80"></svg:path>`,
})
export class PhNumberZeroIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumpadIcon],svg[ph-numpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 48a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m64 32a16 16 0 1 0-16-16a16 16 0 0 0 16 16M64 88a16 16 0 1 0 16 16a16 16 0 0 0-16-16m64 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16m64 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16M64 144a16 16 0 1 0 16 16a16 16 0 0 0-16-16m64 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0 56a16 16 0 1 0 16 16a16 16 0 0 0-16-16m64-56a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhNumpadIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNutIcon],svg[ph-nut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.06 48.06 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m95.68-93.85l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 224l-88-48.18V80.18L128 32l88 48.17v95.64Z"></svg:path>`,
})
export class PhNutIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNyTimesLogoIcon],svg[ph-ny-times-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 136a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12.62-32.75l-65.71-30.66a71.95 71.95 0 0 0-62.85 68.71l68.18-36.36A8 8 0 0 1 136 112v103.55a71.64 71.64 0 0 0 60.71-50A8 8 0 0 1 212 170.4a88 88 0 1 1-160.26-70.3A36 36 0 0 1 68 32a8.05 8.05 0 0 1 3.38.75l118.25 55.18A20 20 0 0 0 188 48a8 8 0 0 1 0-16a36 36 0 0 1 0 72a8.05 8.05 0 0 1-3.38-.75M88 203.83V142.4l-30.49 16.26A72.15 72.15 0 0 0 88 203.83m32-78.5l-16 8.54v78a71 71 0 0 0 16 3.67ZM96.13 62L66.37 48.07a20 20 0 0 0-5.2 38.71c.6-.71 1.2-1.42 1.84-2.11A88 88 0 0 1 96.13 62"></svg:path>`,
})
export class PhNyTimesLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOctagonIcon],svg[ph-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.31 80.24l-51.55-51.55A15.86 15.86 0 0 0 164.45 24h-72.9a15.86 15.86 0 0 0-11.31 4.69L28.69 80.24A15.86 15.86 0 0 0 24 91.55v72.9a15.86 15.86 0 0 0 4.69 11.31l51.55 51.55A15.86 15.86 0 0 0 91.55 232h72.9a15.86 15.86 0 0 0 11.31-4.69l51.55-51.55a15.86 15.86 0 0 0 4.69-11.31v-72.9a15.86 15.86 0 0 0-4.69-11.31M216 164.45L164.45 216h-72.9L40 164.45v-72.9L91.55 40h72.9L216 91.55Z"></svg:path>`,
})
export class PhOctagonIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOfficeChairIcon],svg[ph-office-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 128a8 8 0 0 1-8 8h-16.67A48.08 48.08 0 0 1 176 176h-40v24h24a32 32 0 0 1 32 32a8 8 0 0 1-16 0a16 16 0 0 0-16-16h-24v16a8 8 0 0 1-16 0v-16H96a16 16 0 0 0-16 16a8 8 0 0 1-16 0a32 32 0 0 1 32-32h24v-24H80a48.08 48.08 0 0 1-47.33-40H16a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8a32 32 0 0 0 32 32h96a32 32 0 0 0 32-32a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8M67.91 138.48a16 16 0 0 1-3.75-12.74l13.72-96A16.08 16.08 0 0 1 93.72 16h68.56a16.08 16.08 0 0 1 15.84 13.74l13.72 96A16 16 0 0 1 176 144H80a16 16 0 0 1-12.09-5.52M80 128h96l-13.72-96H93.71Z"></svg:path>`,
})
export class PhOfficeChairIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOnigiriIcon],svg[ph-onigiri-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m231.53 146.57l-55.85-95.91l-.11-.19a56 56 0 0 0-95.14 0l-.11.19l-55.85 95.91A56 56 0 0 0 72.09 232h111.82a56 56 0 0 0 47.62-85.43M160 216H96v-48h64Zm58.86-20.55A39.49 39.49 0 0 1 183.91 216H176v-48a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v48h-7.91a40 40 0 0 1-34-61.09a2 2 0 0 0 .11-.2l55.85-95.9a40 40 0 0 1 67.84 0l55.85 95.9a2 2 0 0 0 .11.2a39.5 39.5 0 0 1 1 40.54Z"></svg:path>`,
})
export class PhOnigiriIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOpenAiLogoIcon],svg[ph-open-ai-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.32 114.24a56 56 0 0 0-60.07-76.57a56 56 0 0 0-96.32 13.77a56 56 0 0 0-36.25 90.32A56 56 0 0 0 69 217a56.4 56.4 0 0 0 14.59 2a56 56 0 0 0 8.17-.61a56 56 0 0 0 96.31-13.78a56 56 0 0 0 36.25-90.32Zm-41.47-59.81a40 40 0 0 1 28.56 48a51 51 0 0 0-2.91-1.81L164 74.88a8 8 0 0 0-8 0l-44 25.41V81.81l40.5-23.38a39.76 39.76 0 0 1 30.35-4M144 137.24l-16 9.24l-16-9.24v-18.48l16-9.24l16 9.24ZM80 72a40 40 0 0 1 67.53-29c-1 .51-2 1-3 1.62L100 70.27a8 8 0 0 0-4 6.92V128l-16-9.24ZM40.86 86.93a39.75 39.75 0 0 1 23.26-18.36A56 56 0 0 0 64 72v51.38a8 8 0 0 0 4 6.93l44 25.4L96 165l-40.5-23.43a40 40 0 0 1-14.64-54.64m32.29 114.64a40 40 0 0 1-28.56-48c.95.63 1.91 1.24 2.91 1.81L92 181.12a8 8 0 0 0 8 0l44-25.41v18.48l-40.5 23.38a39.76 39.76 0 0 1-30.35 4M176 184a40 40 0 0 1-67.52 29.05c1-.51 2-1.05 3-1.63L156 185.73a8 8 0 0 0 4-6.92V128l16 9.24Zm39.14-14.93a39.75 39.75 0 0 1-23.26 18.36c.07-1.14.12-2.28.12-3.43v-51.38a8 8 0 0 0-4-6.93l-44-25.4l16-9.24l40.5 23.38a40 40 0 0 1 14.64 54.64"></svg:path>`,
})
export class PhOpenAiLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOptionIcon],svg[ph-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 192a8 8 0 0 1-8 8h-63.06a15.92 15.92 0 0 1-14.31-8.84L95.06 88H32a8 8 0 0 1 0-16h63.06a15.92 15.92 0 0 1 14.31 8.84L160.94 184H224a8 8 0 0 1 8 8M152 88h72a8 8 0 0 0 0-16h-72a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhOptionIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOrangeIcon],svg[ph-orange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M165.87 72.58A64.06 64.06 0 0 0 200 16a8 8 0 0 0-8-8h-8a64 64 0 0 0-56 33.06A64 64 0 0 0 72 8h-8a8 8 0 0 0 0 16h8a48.08 48.08 0 0 1 47.4 40.42a88 88 0 1 0 46.47 8.16M183.33 24a48.09 48.09 0 0 1-46.66 40a48.09 48.09 0 0 1 46.66-40M128 224a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72m55.89-62.68a57.5 57.5 0 0 1-46.57 46.57a8.5 8.5 0 0 1-1.32.11a8 8 0 0 1-1.31-15.89a41.29 41.29 0 0 0 33.43-33.43a8 8 0 0 1 15.78 2.64Z"></svg:path>`,
})
export class PhOrangeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOrangeSliceIcon],svg[ph-orange-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 80H8a8 8 0 0 0-8 8a128 128 0 0 0 256 0a8 8 0 0 0-8-8M77.4 149.91l42.6-42.6v60.29a79.6 79.6 0 0 1-42.6-17.69M66.09 138.6A79.6 79.6 0 0 1 48.4 96h60.29ZM136 107.31l42.6 42.6A79.6 79.6 0 0 1 136 167.6Zm53.91 31.29L147.31 96h60.29a79.6 79.6 0 0 1-17.69 42.6M128 200A112.15 112.15 0 0 1 16.28 96h16.06a96 96 0 0 0 191.32 0h16.06A112.15 112.15 0 0 1 128 200"></svg:path>`,
})
export class PhOrangeSliceIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOvenIcon],svg[ph-oven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM72 76a12 12 0 1 1 12 12a12 12 0 0 1-12-12m44 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12m44 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12m24 28H72a8 8 0 0 0-8 8v72a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-72a8 8 0 0 0-8-8m-8 72H80v-56h96Z"></svg:path>`,
})
export class PhOvenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPackageIcon],svg[ph-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.68 66.15l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 32l80.34 44l-29.77 16.3l-80.35-44Zm0 88L47.66 76l33.9-18.56l80.34 44ZM40 90l80 43.78v85.79l-80-43.75Zm176 85.78l-80 43.79v-85.75l32-17.51V152a8 8 0 0 0 16 0v-44.45L216 90v85.77Z"></svg:path>`,
})
export class PhPackageIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintBrushIcon],svg[ph-paint-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 32a8 8 0 0 0-8-8c-44.08 0-89.31 49.71-114.43 82.63A60 60 0 0 0 32 164c0 30.88-19.54 44.73-20.47 45.37A8 8 0 0 0 16 224h76a60 60 0 0 0 57.37-77.57C182.3 121.31 232 76.08 232 32M92 208H34.63C41.38 198.41 48 183.92 48 164a44 44 0 1 1 44 44m32.42-94.45q5.14-6.66 10.09-12.55A76.2 76.2 0 0 1 155 121.49q-5.9 4.94-12.55 10.09a60.5 60.5 0 0 0-18.03-18.03m42.7-2.68a92.6 92.6 0 0 0-22-22c31.78-34.53 55.75-45 69.9-47.91c-2.85 14.16-13.37 38.13-47.9 69.91"></svg:path>`,
})
export class PhPaintBrushIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintBrushBroadIcon],svg[ph-paint-brush-broad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 24H72a40 40 0 0 0-40 40v72a24 24 0 0 0 24 24h48l-7.89 46.67A8.4 8.4 0 0 0 96 208a32 32 0 0 0 64 0a8.4 8.4 0 0 0-.11-1.33L152 160h48a24 24 0 0 0 24-24V32a8 8 0 0 0-8-8M72 40h104v40a8 8 0 0 0 16 0V40h16v64H48V64a24 24 0 0 1 24-24m128 104h-48a16 16 0 0 0-15.84 18.26v.2L144 208.6a16 16 0 0 1-32 0l7.8-46.14v-.2A16 16 0 0 0 104 144H56a8 8 0 0 1-8-8v-16h160v16a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhPaintBrushBroadIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintBrushHouseholdIcon],svg[ph-paint-brush-household-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.64 25.36a32 32 0 0 0-45.26 0q-.21.21-.42.45l-53.41 62.41L121 77.64a24 24 0 0 0-33.95 0l-76.69 76.7a8 8 0 0 0 0 11.31l80 80a8 8 0 0 0 11.31 0L178.36 169a24 24 0 0 0 0-33.95l-10.58-10.57L230.19 71c.15-.14.31-.28.45-.43a32 32 0 0 0 0-45.21M96 228.69L79.32 212l22.34-22.35a8 8 0 0 0-11.31-11.31L68 200.68L55.32 188l22.34-22.35a8 8 0 0 0-11.31-11.31L44 176.68L27.31 160L72 115.31L140.69 184ZM219.52 59.1l-68.71 58.81a8 8 0 0 0-.46 11.74L167 146.34a8 8 0 0 1 0 11.31l-15 15L83.32 104l15-15a8 8 0 0 1 11.31 0l16.69 16.69a8 8 0 0 0 11.74-.46l58.84-68.75a16 16 0 0 1 22.62 22.62"></svg:path>`,
})
export class PhPaintBrushHouseholdIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintBucketIcon],svg[ph-paint-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.53 139.07a8 8 0 0 0 3.13-13.24L122.17 10.34a8 8 0 0 0-11.31 0L70.25 51l-24.6-24.66a8 8 0 0 0-11.31 11.32l24.6 24.6L15 106.17a24 24 0 0 0 0 33.94L99.89 225a24 24 0 0 0 33.94 0l78.49-78.49Zm-32.19-5.24l-79.83 79.83a8 8 0 0 1-11.31 0L26.34 128.8a8 8 0 0 1 0-11.31l43.91-43.92l29.12 29.12a28 28 0 1 0 11.31-11.32L81.57 62.26l35-34.95L217.19 128l-11.72 3.9a8.1 8.1 0 0 0-3.13 1.93m-86.83-26.31a13.26 13.26 0 1 1-.05.06s.05-.05.05-.06m123.15 56a8 8 0 0 0-13.32 0C223.57 166.23 208 190.09 208 208a24 24 0 0 0 48 0c0-17.91-15.57-41.77-17.34-44.44ZM232 216a8 8 0 0 1-8-8c0-6.8 4-16.32 8-24.08c4 7.76 8 17.34 8 24.08a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhPaintBucketIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintRollerIcon],svg[ph-paint-roller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 88h-16V64a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v24H16a8 8 0 0 0 0 16h16v24a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16v-24h16v50l-100.4 28.65A16.07 16.07 0 0 0 120 198v34a8 8 0 0 0 16 0v-34l100.4-28.68A16.07 16.07 0 0 0 248 154v-50a16 16 0 0 0-16-16m-32 40H48V64h152z"></svg:path>`,
})
export class PhPaintRollerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaletteIcon],svg[ph-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.77 53.89A103.27 103.27 0 0 0 128 24h-1.07A104 104 0 0 0 24 128c0 43 26.58 79.06 69.36 94.17A32 32 0 0 0 136 192a16 16 0 0 1 16-16h46.21a31.81 31.81 0 0 0 31.2-24.88a104.4 104.4 0 0 0 2.59-24a103.28 103.28 0 0 0-31.23-73.23m13 93.71a15.89 15.89 0 0 1-15.56 12.4H152a32 32 0 0 0-32 32a16 16 0 0 1-21.31 15.07C62.49 194.3 40 164 40 128a88 88 0 0 1 87.09-88h.9a88.35 88.35 0 0 1 88 87.25a89 89 0 0 1-2.18 20.35ZM140 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-44 24a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0 56a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhPaletteIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPanoramaIcon],svg[ph-panorama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.75 51.32a15.88 15.88 0 0 0-13.86-2.77l-3.48.94C205.61 54.56 170.61 64 128 64s-77.61-9.44-96.41-14.51l-3.48-.94A16 16 0 0 0 8 64v128a16 16 0 0 0 16 16a16.2 16.2 0 0 0 4.18-.55l3.18-.86C50.13 201.49 85.17 192 128 192s77.87 9.49 96.69 14.59l3.18.86A16 16 0 0 0 248 192V64a15.9 15.9 0 0 0-6.25-12.68M27.42 64.93C46.94 70.2 83.27 80 128 80s81.06-9.8 100.58-15.07L232 64v118.76l-58.07-58.07a16 16 0 0 0-22.63 0l-20 20l-44-44a16 16 0 0 0-22.62 0L24 141.37V64Zm186.42 122.28a391 391 0 0 0-49-9L142.63 156l20-20Zm-186.71 3.93L24 192v-28l52-52l64.25 64.25q-6-.24-12.25-.25c-45 0-82.72 10.23-100.87 15.14M192 108a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhPanoramaIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPantsIcon],svg[ph-pants-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.88 214l-22-176A16 16 0 0 0 186 24H70a16 16 0 0 0-15.88 14l-22 176A16 16 0 0 0 48 232h40.69a16 16 0 0 0 15.51-12.06l23.8-92l23.79 91.94A16 16 0 0 0 167.31 232H208a16 16 0 0 0 15.88-18M192.9 95.2A32.13 32.13 0 0 1 169 72h21ZM186 40l2 16H68l2-16ZM66 72h21a32.13 32.13 0 0 1-23.9 23.2Zm22.69 144H48l13-104.27A48.08 48.08 0 0 0 103.32 72H120v23Zm78.6-.06L136 95V72h16.68A48.08 48.08 0 0 0 195 111.73L208 216Z"></svg:path>`,
})
export class PhPantsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperPlaneIcon],svg[ph-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.9 200.1L141.85 32.18a16 16 0 0 0-27.89 0l-95.89 168a16 16 0 0 0 19.26 22.92L128 192.45l90.67 30.63a16.2 16.2 0 0 0 5.33.92a16 16 0 0 0 13.86-23.9Zm-14.05 7.84L136 178.26V120a8 8 0 0 0-16 0v58.26l-87.84 29.68l-.16.06l95.86-168L224 208Z"></svg:path>`,
})
export class PhPaperPlaneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperPlaneRightIcon],svg[ph-paper-plane-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m231.87 114l-168-95.89a16 16 0 0 0-22.95 19.23L71.55 128l-30.63 90.67A16 16 0 0 0 56 240a16.15 16.15 0 0 0 7.93-2.1l167.92-96.05a16 16 0 0 0 .05-27.89ZM56 224a.6.6 0 0 0 0-.12L85.74 136H144a8 8 0 0 0 0-16H85.74L56.06 32.16A.5.5 0 0 0 56 32l168 95.83Z"></svg:path>`,
})
export class PhPaperPlaneRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperPlaneTiltIcon],svg[ph-paper-plane-tilt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.32 28.68a16 16 0 0 0-15.66-4.08h-.15L19.57 82.84a16 16 0 0 0-2.49 29.8L102 154l41.3 84.87a15.86 15.86 0 0 0 14.44 9.13q.69 0 1.38-.06a15.88 15.88 0 0 0 14-11.51l58.2-191.94v-.15a16 16 0 0 0-4-15.66m-69.49 203.17l-.05.14v-.07l-40.06-82.3l48-48a8 8 0 0 0-11.31-11.31l-48 48l-82.33-40.06h-.07h.14L216 40Z"></svg:path>`,
})
export class PhPaperPlaneTiltIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperclipIcon],svg[ph-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209.66 122.34a8 8 0 0 1 0 11.32l-82.05 82a56 56 0 0 1-79.2-79.21l99.26-100.72a40 40 0 1 1 56.61 56.55L105 193a24 24 0 1 1-34-34l83.3-84.62a8 8 0 1 1 11.4 11.22l-83.31 84.71a8 8 0 1 0 11.27 11.36L192.93 81A24 24 0 1 0 159 47L59.76 147.68a40 40 0 1 0 56.53 56.62l82.06-82a8 8 0 0 1 11.31.04"></svg:path>`,
})
export class PhPaperclipIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperclipHorizontalIcon],svg[ph-paperclip-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 128a56.06 56.06 0 0 1-56 56H48a40 40 0 0 1 0-80h144a24 24 0 0 1 0 48H80a8 8 0 0 1 0-16h112a8 8 0 0 0 0-16H48a24 24 0 0 0 0 48h144a40 40 0 0 0 0-80H80a8 8 0 0 1 0-16h112a56.06 56.06 0 0 1 56 56"></svg:path>`,
})
export class PhPaperclipHorizontalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phParachuteIcon],svg[ph-parachute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 120A104.12 104.12 0 0 0 128 16A104.12 104.12 0 0 0 24 120a7.94 7.94 0 0 0 3.05 6.27a1 1 0 0 0 .15.13L120 196v20h-8a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16h-8v-20l92.8-69.6a8 8 0 0 0 3.2-6.4m-16.36-8h-39.81c-1.54-37.95-13.91-62.43-25.11-77a88.2 88.2 0 0 1 64.92 77M128 34a77 77 0 0 1 13.88 16.22C149.49 62 158.45 81.87 159.82 112H96.18c1.37-30.13 10.33-50 17.94-61.74A77 77 0 0 1 128 34m26.4 94L128 175.53L101.6 128Zm-71.11 0l19.5 35.09L56 128Zm89.42 0H200l-46.79 35.09Zm-67.43-93c-11.2 14.57-23.57 39.05-25.11 77H40.36a88.2 88.2 0 0 1 64.92-77"></svg:path>`,
})
export class PhParachuteIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phParagraphIcon],svg[ph-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H96a64 64 0 0 0 0 128h40v40a8 8 0 0 0 16 0V56h24v152a8 8 0 0 0 16 0V56h16a8 8 0 0 0 0-16m-72 112H96a48 48 0 0 1 0-96h40Z"></svg:path>`,
})
export class PhParagraphIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phParallelogramIcon],svg[ph-parallelogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.43 47.31A15.94 15.94 0 0 0 232 40H88.81a16 16 0 0 0-14.59 9.43l-64.8 144A16 16 0 0 0 24 216h143.19a16 16 0 0 0 14.59-9.43l64.8-144a16 16 0 0 0-1.15-15.26M167.19 200H24L88.81 56H232Z"></svg:path>`,
})
export class PhParallelogramIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phParkIcon],svg[ph-park-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 192h-32v-24h24a8 8 0 0 0 7.76-9.94l-32-128a8 8 0 0 0-15.52 0l-32 128A8 8 0 0 0 160 168h24v24h-64v-16h8a8 8 0 0 0 0-16h-8v-16h8a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16h8v16h-8a8 8 0 0 0 0 16h8v16H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M192 65l21.75 87h-43.5ZM64 144h40v16H64Zm0 32h40v16H64Zm52-80a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12"></svg:path>`,
})
export class PhParkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPasswordIcon],svg[ph-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m92 54.5l-20 6.5V96a8 8 0 0 0-16 0v21l-20-6.5a8 8 0 0 0-5 15.22l20 6.49l-12.34 17a8 8 0 1 0 12.94 9.4l12.34-17l12.34 17a8 8 0 1 0 12.94-9.4l-12.34-17l20-6.49A8 8 0 0 0 140 110.5m106 5.14a8 8 0 0 0-10-5.14l-20 6.5V96a8 8 0 0 0-16 0v21l-20-6.49a8 8 0 0 0-4.95 15.22l20 6.49l-12.34 17a8 8 0 1 0 12.94 9.4l12.34-17l12.34 17a8 8 0 1 0 12.94-9.4l-12.34-17l20-6.49a8 8 0 0 0 5.07-10.09"></svg:path>`,
})
export class PhPasswordIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPathIcon],svg[ph-path-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 168a32.06 32.06 0 0 0-31 24H72a32 32 0 0 1 0-64h96a40 40 0 0 0 0-80H72a8 8 0 0 0 0 16h96a24 24 0 0 1 0 48H72a48 48 0 0 0 0 96h97a32 32 0 1 0 31-40m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhPathIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPatreonLogoIcon],svg[ph-patreon-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M187.37 32c-18.79-7.68-41.14-9.92-62.93-6.3c-23.44 3.9-43.73 14-58.68 29.2c-11.12 11.32-24.62 33.35-25.7 74c-.7 26.49 4.39 55.44 13.61 77.45S74.61 240 87.52 240c22.94 0 33.23-20.08 43.17-39.5c7-13.6 14.16-27.66 25.55-35.38c5.86-4 13.8-7 22.21-10.28c23.86-9.2 53.55-20.66 53.55-61.67C232 65.9 215.73 43.6 187.37 32m-14.68 107.91c-9.28 3.58-18.05 7-25.43 12c-14.78 10-23.3 26.66-30.81 41.33c-9.78 19.06-16.4 30.76-28.93 30.76c-4.52 0-12.18-7.37-19.09-23.85c-8.39-20-13-46.49-12.37-70.83c.73-27.66 8.23-50.11 21.11-63.21C95.23 47.74 120.79 40 144.57 40a98.5 98.5 0 0 1 36.74 6.76c13 5.3 34.69 18.38 34.69 46.37c0 30.08-20.07 37.87-43.31 46.78"></svg:path>`,
})
export class PhPatreonLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPauseIcon],svg[ph-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 32h-40a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-40V48h40ZM96 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H56V48h40Z"></svg:path>`,
})
export class PhPauseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPauseCircleIcon],svg[ph-pause-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M112 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhPauseCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPawPrintIcon],svg[ph-paw-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 80a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12M72 108a28 28 0 1 0-28 28a28 28 0 0 0 28-28m-28 12a12 12 0 1 1 12-12a12 12 0 0 1-12 12m48-32a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12m72 40a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12m23.12 100.86a35.3 35.3 0 0 1-16.87-21.14a44 44 0 0 0-84.5 0A35.25 35.25 0 0 1 69 148.82A40 40 0 0 0 88 224a39.5 39.5 0 0 0 15.52-3.13a64.1 64.1 0 0 1 48.87 0a40 40 0 0 0 34.73-72ZM168 208a24 24 0 0 1-9.45-1.93a80.14 80.14 0 0 0-61.19 0a24 24 0 0 1-20.71-43.26a51.22 51.22 0 0 0 24.46-30.67a28 28 0 0 1 53.78 0a51.27 51.27 0 0 0 24.53 30.71A24 24 0 0 1 168 208"></svg:path>`,
})
export class PhPawPrintIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaypalLogoIcon],svg[ph-paypal-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.12 93.54a55.8 55.8 0 0 0-20.19-16.18A56 56 0 0 0 144 24H84a16 16 0 0 0-15.52 12.12l-36 144A16 16 0 0 0 48 200h27.5l-3 12.12A16 16 0 0 0 88 232h31.5a16 16 0 0 0 15.5-12.12l9-35.88h32a56 56 0 0 0 44.14-90.46ZM48 184L84 40h60a40 40 0 0 1 39.3 32.49A57 57 0 0 0 176 72h-56a16 16 0 0 0-15.53 12.12L79.52 184zm135-95.38c-.08.36-.15.72-.24 1.08A39.94 39.94 0 0 1 144 120h-32l8-32h56a40 40 0 0 1 7 .62m31.76 49.08A39.94 39.94 0 0 1 176 168h-32a16 16 0 0 0-15.52 12.12l-9 35.88H88l20-80h36a55.9 55.9 0 0 0 54-41.39a40.2 40.2 0 0 1 9.48 8.77a39.73 39.73 0 0 1 7.3 34.32Z"></svg:path>`,
})
export class PhPaypalLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPeaceIcon],svg[ph-peace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m88 104a87.5 87.5 0 0 1-11.64 43.7L136 123.84V40.37A88.11 88.11 0 0 1 216 128m-96-87.63v83.47L51.64 171.7A88 88 0 0 1 120 40.37M60.84 184.79L120 143.37v72.26a87.85 87.85 0 0 1-59.16-30.84M136 215.63v-72.26l59.16 41.42A87.85 87.85 0 0 1 136 215.63"></svg:path>`,
})
export class PhPeaceIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPenIcon],svg[ph-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69l83.67-83.66l3.48 13.9l-36.8 36.79a8 8 0 0 0 11.31 11.32l40-40a8 8 0 0 0 2.11-7.6l-6.9-27.61L227.32 96a16 16 0 0 0 0-22.63M48 179.31L76.69 208H48Zm48 25.38L51.31 160L136 75.31L180.69 120Zm96-96L147.32 64l24-24L216 84.69Z"></svg:path>`,
})
export class PhPenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPenNibIcon],svg[ph-pen-nib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 92.68a15.86 15.86 0 0 0-4.69-11.31l-68.68-68.69a16 16 0 0 0-22.63 0l-28.43 28.43l-58 21.77a16.06 16.06 0 0 0-10.22 12.35L32.11 214.68A8 8 0 0 0 40 224a8.4 8.4 0 0 0 1.32-.11l139.44-23.24a16 16 0 0 0 12.35-10.17l21.77-58L243.31 104A15.87 15.87 0 0 0 248 92.68m-69.87 92.19L63.32 204l47.37-47.37a28 28 0 1 0-11.32-11.32L52 192.7L71.13 77.86L126 57.29L198.7 130ZM112 132a12 12 0 1 1 12 12a12 12 0 0 1-12-12m96-15.32L139.31 48l24-24L232 92.68Z"></svg:path>`,
})
export class PhPenNibIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPenNibStraightIcon],svg[ph-pen-nib-straight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222.33 123.89c-.06-.13-.12-.26-.19-.38L192 69.9V32a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v37.92l-30.14 53.59c-.07.12-.13.25-.2.38a15.94 15.94 0 0 0 1.46 16.57l.11.14l86.44 112.28a8 8 0 0 0 12.67 0l86.43-112.28l.11-.14a15.92 15.92 0 0 0 1.45-16.57M176 32v32H80V32Zm-48 112a12 12 0 1 1 12-12a12 12 0 0 1-12 12m8 80.5v-65.67a28 28 0 1 0-16 0v65.66L48 131l28.69-51h102.63L208 131Z"></svg:path>`,
})
export class PhPenNibStraightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilIcon],svg[ph-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.31 73.37l-44.68-44.69a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69L227.31 96a16 16 0 0 0 0-22.63M51.31 160L136 75.31L152.69 92L68 176.68ZM48 179.31L76.69 208H48Zm48 25.38L79.31 188L164 103.31L180.69 120Zm96-96L147.31 64l24-24L216 84.68Z"></svg:path>`,
})
export class PhPencilIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilCircleIcon],svg[ph-pencil-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46M88 192a16 16 0 0 1 32 0v23.59a88 88 0 0 1-32-9.22Zm48 0a16 16 0 0 1 32 0v14.37a88 88 0 0 1-32 9.22Zm-28.73-56h41.46l11.58 25.1a31.93 31.93 0 0 0-32.31 9.77a31.93 31.93 0 0 0-32.31-9.77Zm7.39-16L128 91.09L141.34 120Zm75.56 70.23c-2 2-4.08 3.87-6.22 5.64V176a7.9 7.9 0 0 0-.74-3.35l-48-104a8 8 0 0 0-14.52 0l-48 104A7.9 7.9 0 0 0 72 176v19.87a89 89 0 0 1-6.22-5.64a88 88 0 1 1 124.44 0"></svg:path>`,
})
export class PhPencilCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilLineIcon],svg[ph-pencil-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h168a8 8 0 0 0 0-16H115.32l112-112a16 16 0 0 0 0-22.63M136 75.31L152.69 92L68 176.69L51.31 160ZM48 208v-28.69L76.69 208Zm48-3.31L79.32 188L164 103.31L180.69 120Zm96-96L147.32 64l24-24L216 84.69Z"></svg:path>`,
})
export class PhPencilLineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilRulerIcon],svg[ph-pencil-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-48v-32h24a8 8 0 0 0 0-16h-24v-24h24a8 8 0 0 0 0-16h-24V96h24a8 8 0 0 0 0-16h-24V48h48zM77.66 26.34a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 32 64v144a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V64a8 8 0 0 0-2.34-5.66ZM48 176V80h16v96Zm32-96h16v96H80Zm-8-36.69L92.69 64H51.31ZM48 208v-16h48v16Z"></svg:path>`,
})
export class PhPencilRulerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilSimpleIcon],svg[ph-pencil-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.31 73.37l-44.68-44.69a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69L227.31 96a16 16 0 0 0 0-22.63M92.69 208H48v-44.69l88-88L180.69 120ZM192 108.68L147.31 64l24-24L216 84.68Z"></svg:path>`,
})
export class PhPencilSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilSimpleLineIcon],svg[ph-pencil-simple-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h168a8 8 0 0 0 0-16H115.32l112-112a16 16 0 0 0 0-22.63M92.69 208H48v-44.69l88-88L180.69 120ZM192 108.69L147.32 64l24-24L216 84.69Z"></svg:path>`,
})
export class PhPencilSimpleLineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilSimpleSlashIcon],svg[ph-pencil-simple-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62a8 8 0 1 0-11.84 10.76l48.2 53L36.68 152A15.9 15.9 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69l50.4-50.39l47.69 52.46a8 8 0 1 0 11.84-10.76ZM92.69 208H48v-44.69l53.06-53l42.56 46.81ZM227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0l-41.67 41.67a8 8 0 0 0 11.32 11.31l6.35-6.36L180.69 120l-9 9A8 8 0 0 0 183 140.34L227.32 96a16 16 0 0 0 0-22.63M192 108.69L147.32 64l24-24L216 84.69Z"></svg:path>`,
})
export class PhPencilSimpleSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilSlashIcon],svg[ph-pencil-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62a8 8 0 1 0-11.84 10.76l48.2 53L36.68 152A15.9 15.9 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69l50.4-50.39l47.69 52.46a8 8 0 1 0 11.84-10.76Zm63 93.12L68 176.69L51.31 160l49.75-49.74ZM48 179.31L76.69 208H48Zm48 25.38L79.32 188l48.41-48.41l15.89 17.48ZM227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0l-41.67 41.67a8 8 0 0 0 11.32 11.31l6.35-6.36L152.69 92L145 99.69A8 8 0 1 0 156.31 111l7.69-7.69L180.69 120l-9 9A8 8 0 0 0 183 140.34L227.32 96a16 16 0 0 0 0-22.63M192 108.69L147.32 64l24-24L216 84.69Z"></svg:path>`,
})
export class PhPencilSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPentagonIcon],svg[ph-pentagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m225.56 87.56l-87.92-68.31l-.18-.14a15.93 15.93 0 0 0-18.92 0l-.18.14l-87.92 68.31a16 16 0 0 0-5.7 17.63l32 107.54l.06.17A15.94 15.94 0 0 0 72 224h112a15.94 15.94 0 0 0 15.23-11.1l.06-.17l32-107.54a16 16 0 0 0-5.73-17.63m-9.62 13L184 208H72L40 100.56l-.06-.17l.18-.14L128 32l87.82 68.23l.18.14Z"></svg:path>`,
})
export class PhPentagonIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPentagramIcon],svg[ph-pentagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.18 91.05A15.75 15.75 0 0 0 224 80h-61l-19.77-60.74a15.93 15.93 0 0 0-30.45-.05L93.06 80H32a16 16 0 0 0-9.37 29l49.46 35.58L53.15 203A15.75 15.75 0 0 0 59 220.88a15.74 15.74 0 0 0 18.77 0L128 184.75l50.23 36.13A16 16 0 0 0 202.85 203l-19-58.46l49.49-35.61a15.74 15.74 0 0 0 5.84-17.88M128 24.15L146.12 80h-36.24ZM32 96h55.87L77.3 128.56Zm36.34 112l17.39-53.59l28.54 20.54Zm22.57-69.57L104.69 96h46.62l13.75 42.38L128 165ZM187.6 208l-45.9-33l28.54-20.54Zm-8.93-79.38L168.13 96H224Z"></svg:path>`,
})
export class PhPentagramIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPepperIcon],svg[ph-pepper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M167.27 40.42A40.06 40.06 0 0 0 128 8a8 8 0 0 0 0 16a24 24 0 0 1 22.85 16.66A64.08 64.08 0 0 0 96 104c0 46.75-25.75 78-76.53 93a16 16 0 0 0 1.77 31.13A265 265 0 0 0 66.75 232c40.78 0 86.16-9.15 117.53-35.46C210.64 174.44 224 143.3 224 104a64.07 64.07 0 0 0-56.73-63.58M160 56a48.07 48.07 0 0 1 45.37 32.37L192 95l-28.42-14.17a8 8 0 0 0-7.16 0L128 95l-13.37-6.68A48.08 48.08 0 0 1 160 56m14 128.3c-18 15.07-43.6 25.26-74.12 29.47a254 254 0 0 1-75.88-1.4c57.23-16.87 87.63-54 88-107.42l12.44 6.22a8 8 0 0 0 7.16 0L160 96.93l28.42 14.21a8 8 0 0 0 7.16 0l12.41-6.2c-.21 33.9-11.64 60.6-33.99 79.35Z"></svg:path>`,
})
export class PhPepperIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPercentIcon],svg[ph-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m205.66 61.64l-144 144a8 8 0 0 1-11.32-11.32l144-144a8 8 0 0 1 11.32 11.31Zm-155.12 39.8a36 36 0 0 1 50.92-50.91a36 36 0 0 1-50.92 50.91M56 76a20 20 0 1 0 34.14-14.16A20 20 0 0 0 56 76m160 104a36 36 0 1 1-10.54-25.46A35.76 35.76 0 0 1 216 180m-16 0a20 20 0 1 0-5.86 14.14A19.87 19.87 0 0 0 200 180"></svg:path>`,
})
export class PhPercentIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonIcon],svg[ph-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 40a32 32 0 1 0-32 32a32 32 0 0 0 32-32m-32 16a16 16 0 1 1 16-16a16 16 0 0 1-16 16m90.34 78.05l-45.17-51.22a32 32 0 0 0-24-10.83h-42.34a32 32 0 0 0-24 10.83l-45.17 51.22a20 20 0 0 0 28.13 28.43l16.3-13.08l-16.54 62.88A20 20 0 0 0 102 228.8l26-44.87l26 44.87a20 20 0 0 0 36.41-16.52l-16.5-62.88l16.3 13.08a20 20 0 0 0 28.13-28.43m-11.51 16.77a4 4 0 0 1-5.66 0c-.21-.2-.42-.4-.65-.58L165 121.76a8 8 0 0 0-12.74 8.24l22.88 87a7.7 7.7 0 0 0 .48 1.35a4 4 0 1 1-7.25 3.38a6 6 0 0 0-.33-.63L134.92 164a8 8 0 0 0-13.84 0L88 221.05a6 6 0 0 0-.33.63a4 4 0 0 1-2.26 2.07a4 4 0 0 1-5-5.45a7.7 7.7 0 0 0 .48-1.35L103.74 130A8 8 0 0 0 91 121.76l-35.52 28.48c-.23.18-.44.38-.65.58a4 4 0 1 1-5.66-5.65c.12-.12.23-.24.34-.37l45.32-51.39a16 16 0 0 1 12-5.41h42.34a16 16 0 0 1 12 5.41l45.32 51.39c.11.13.22.25.34.37a4 4 0 0 1 0 5.65"></svg:path>`,
})
export class PhPersonIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonArmsSpreadIcon],svg[ph-person-arms-spread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 40a32 32 0 1 0-32 32a32 32 0 0 0 32-32m-32 16a16 16 0 1 1 16-16a16 16 0 0 1-16 16m103.5 31.71A19.62 19.62 0 0 0 212 72H44a20 20 0 0 0-8.38 38.16h.13l50.75 22.35l-21 79.72A20 20 0 0 0 102 228.8l26-44.87l26 44.87a20 20 0 0 0 36.4-16.52l-21-79.72l50.75-22.35h.13a19.64 19.64 0 0 0 11.22-22.5m-17.8 7.9l-56.93 25.06a8 8 0 0 0-4.51 9.36L175.13 217a7 7 0 0 0 .49 1.35a4 4 0 0 1-5 5.45a4 4 0 0 1-2.25-2.07a6 6 0 0 0-.34-.63L134.92 164a8 8 0 0 0-13.84 0L88 221.05a6 6 0 0 0-.34.63a4 4 0 0 1-2.25 2.07a4 4 0 0 1-5-5.45a7 7 0 0 0 .49-1.35L103.74 130a8 8 0 0 0-4.51-9.36L42.3 95.61A4 4 0 0 1 44 88h168a4 4 0 0 1 1.73 7.61Z"></svg:path>`,
})
export class PhPersonArmsSpreadIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleIcon],svg[ph-person-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 80a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m102.86 100.12a8 8 0 0 1-11 2.74c-.35-.21-35.11-20.59-83.88-22.67V149l62 69.73a8 8 0 1 1-12 10.62L128 164l-58 65.31a8 8 0 1 1-12-10.62L120 149v-36.82c-49 2.08-83.52 22.46-83.88 22.68a8 8 0 1 1-8.23-13.72C29.6 120.11 70.45 96 128 96s98.4 24.11 100.12 25.14a8 8 0 0 1 2.74 10.98"></svg:path>`,
})
export class PhPersonSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleBikeIcon],svg[ph-person-simple-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 80a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12m36 96a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24M56 136a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m136-80h-40a8 8 0 0 1-5.66-2.34L120 91.31L99.31 112l34.35 34.34A8 8 0 0 1 136 152v48a8 8 0 0 1-16 0v-44.69l-37.66-37.65a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 0L155.31 104H192a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhPersonSimpleBikeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleCircleIcon],svg[ph-person-simple-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M112 80a16 16 0 1 1 16 16a16 16 0 0 1-16-16m72 32a8 8 0 0 1-8 8h-40v13.58l30.66 46a8 8 0 0 1-13.32 8.88l-25.34-38l-25.34 38a8 8 0 1 1-13.32-8.88l30.66-46V120H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhPersonSimpleCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleHikeIcon],svg[ph-person-simple-hike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 80a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m48 112v88a8 8 0 0 1-16 0v-80.34c-25.75-2.25-34.35-15.52-42-27.36c-2.85-4.39-5.56-8.57-9.13-12.19l-13.4 30.81l37.2 26.57A8 8 0 0 1 160 176v56a8 8 0 0 1-16 0v-51.88l-31.07-22.2l-33.59 77.27A8 8 0 0 1 72 240a7.8 7.8 0 0 1-3.19-.67a8 8 0 0 1-4.14-10.52L122.19 96.5a8 8 0 0 1 11-3.92a41 41 0 0 1 8 5.47c6.37 5.52 10.51 11.91 14.16 17.55c7.68 11.84 13.22 20.4 36.6 20.4a8 8 0 0 1 8.05 8m-128 8a8 8 0 0 0 7.35-4.85l24-56a8 8 0 0 0-4.2-10.5l-28-12a8 8 0 0 0-10.5 4.2l-24 56a8 8 0 0 0 4.2 10.5l28 12A8 8 0 0 0 72 152m-17.49-24.2L72.2 86.5l13.3 5.7l-17.7 41.29Z"></svg:path>`,
})
export class PhPersonSimpleHikeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleRunIcon],svg[ph-person-simple-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 88a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m67.31 100.68c-.61.28-7.49 3.28-19.67 3.28c-13.85 0-34.55-3.88-60.69-20a169.3 169.3 0 0 1-15.41 32.34a104.3 104.3 0 0 1 31.31 15.81C173.92 186.65 184 207.35 184 232a8 8 0 0 1-16 0c0-41.7-34.69-56.71-54.14-61.85c-.55.7-1.12 1.41-1.69 2.1c-19.64 23.8-44.25 36.18-71.63 36.18a92 92 0 0 1-9.34-.43a8 8 0 0 1 1.6-16c25.92 2.58 48.47-7.49 67-30c12.49-15.14 21-33.61 25.25-47c-38.92-22.65-63.78-3.37-64.05-3.16a8 8 0 1 1-10-12.48c1.5-1.2 37.22-29 89.51 6.57c45.47 30.91 71.93 20.31 72.18 20.19a8 8 0 1 1 6.63 14.56Z"></svg:path>`,
})
export class PhPersonSimpleRunIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleSkiIcon],svg[ph-person-simple-ski-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 88a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12M32.32 77.76a8 8 0 0 1 9.92-5.44L112 92.67l10.32-10.33a8 8 0 0 1 11.32 0L163.31 112H200a8 8 0 0 1 0 16h-40a8 8 0 0 1-5.66-2.34l-5.61-5.66l-111-32.36a8 8 0 0 1-5.41-9.88m204.12 126.48a69.78 69.78 0 0 1-58.37 8.95l-156.3-45.52a8 8 0 1 1 4.47-15.36l76 22.13L128.73 148L85.8 135.69a8 8 0 0 1 4.4-15.39l56 16a8 8 0 0 1 3.46 13.35l-29.9 29.9l62.79 18.28a53.78 53.78 0 0 0 45-6.9a8 8 0 1 1 8.88 13.31Z"></svg:path>`,
})
export class PhPersonSimpleSkiIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleSnowboardIcon],svg[ph-person-simple-snowboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 80a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12m54.25 72.32l-136-40a8 8 0 1 0-4.52 15.35l40.85 12L85.07 150l-44.73-13a25.18 25.18 0 1 0-14.13 48.34L183.65 231a26 26 0 0 0 7.14 1a25.17 25.17 0 0 0 7-49.36l-50.89-14.75l19.75-29.44a8 8 0 0 0-4.42-12.14l-35.33-10.23l7.78-11.67l79.07 23.26a8 8 0 0 0 4.51-15.35ZM200 206.81a9.07 9.07 0 0 1-3.67 7.3a9.27 9.27 0 0 1-8.22 1.5L30.67 170a9.24 9.24 0 0 1-6.67-8.8a9.06 9.06 0 0 1 3.66-7.3a9.26 9.26 0 0 1 8.23-1.5L193.33 198a9.23 9.23 0 0 1 6.67 8.81m-52.75-68.18l-16.49 24.59l-29.58-8.58l16.4-24.6Z"></svg:path>`,
})
export class PhPersonSimpleSnowboardIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleSwimIcon],svg[ph-person-simple-swim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 104a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m46.16 129.24a8 8 0 0 1-1 11.26c-17.36 14.39-32.86 19.5-47 19.5c-18.58 0-34.82-8.82-49.93-17c-25.35-13.76-47.24-25.65-79.07.74a8 8 0 1 1-10.22-12.31c40.17-33.29 70.32-16.93 96.93-2.49c25.35 13.77 47.24 25.65 79.07-.74a8 8 0 0 1 11.22 1.04M34.89 147.42a8 8 0 1 0 10.22 12.31c31.83-26.38 53.72-14.5 79.07-.74c15.11 8.2 31.35 17 49.93 17c14.14 0 29.64-5.11 47-19.5a8 8 0 1 0-10.22-12.31a75.8 75.8 0 0 1-19.28 12.06l-53.84-53.82A103.34 103.34 0 0 0 64.24 72H40a8 8 0 0 0 0 16h24.24a87.66 87.66 0 0 1 41.88 10.56l-29.63 29.61c-12.67 1.18-26.42 6.67-41.6 19.25m91.57-33.67l46.13 46.12c-14-.43-26.88-7.39-40.77-14.93c-10.75-5.84-22.09-12-34.42-15.05l22.26-22.26a87 87 0 0 1 6.8 6.12"></svg:path>`,
})
export class PhPersonSimpleSwimIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleTaiChiIcon],svg[ph-person-simple-tai-chi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 80a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m96 72a8 8 0 0 1-8 8h-80v26.72l51.15 21.93A8 8 0 0 1 192 168v48a8 8 0 0 1-16 0v-42.72l-46.45-19.91L53.35 222a8 8 0 1 1-10.7-11.9L120 140.44V112H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhPersonSimpleTaiChiIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleThrowIcon],svg[ph-person-simple-throw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 88a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16M48 96a16 16 0 1 1 16 16a16 16 0 0 1-16-16m174.24 14.61a8 8 0 0 1-11.24 1.26c-1.15-.89-23.71-17.7-59.32.61a215 215 0 0 1-3 30.35l32.43 27a8 8 0 0 1 2.47 8.68l-16 48a8 8 0 0 1-15.18-5.06l14.27-42.82l-22.08-18.4a142 142 0 0 1-5.1 14.33c-13.75 32.74-38.38 54.63-73.2 65.08a8 8 0 0 1-4.6-15.32c60.68-18.21 71.14-72.22 73.42-101.65C108 139.88 86.57 144 72.36 144a59.6 59.6 0 0 1-19.67-3.27A8 8 0 0 1 56 125.4a7.8 7.8 0 0 1 3.31.73s26.76 10.68 72.19-20.2c52.29-35.54 88-7.77 89.51-6.57a8 8 0 0 1 1.23 11.25"></svg:path>`,
})
export class PhPersonSimpleThrowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleWalkIcon],svg[ph-person-simple-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 80a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m64 112a8 8 0 0 1-8 8c-35.31 0-52.95-17.81-67.12-32.12c-2.74-2.77-5.36-5.4-8-7.84l-13.43 30.88l37.2 26.57A8 8 0 0 1 160 176v56a8 8 0 0 1-16 0v-51.88l-31.07-22.2l-33.59 77.27A8 8 0 0 1 72 240a7.8 7.8 0 0 1-3.19-.67a8 8 0 0 1-4.15-10.52l54.08-124.37c-9.31-1.65-20.92 1.2-34.7 8.58a164 164 0 0 0-30.57 21.77a8 8 0 0 1-10.95-11.66c2.5-2.35 61.69-57.23 98.72-25.08c3.83 3.32 7.48 7 11 10.57C166.19 122.7 179.36 136 208 136a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhPersonSimpleWalkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPerspectiveIcon],svg[ph-perspective-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 120h-16V48a16 16 0 0 0-18.86-15.74l-160 29.09A16 16 0 0 0 32 77.09V120H16a8 8 0 0 0 0 16h16v42.91a16 16 0 0 0 13.14 15.74l160 29.09a16.5 16.5 0 0 0 2.86.26a16 16 0 0 0 16-16v-72h16a8 8 0 0 0 0-16M48 77.09L208 48v72H48ZM208 208L48 178.91V136h160Z"></svg:path>`,
})
export class PhPerspectiveIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneIcon],svg[ph-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8 8 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.6.6 0 0 0 0 .12l21 47l-20.67 24.74a6 6 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8 8 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208"></svg:path>`,
})
export class PhPhoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneCallIcon],svg[ph-phone-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144.27 45.93a8 8 0 0 1 9.8-5.66a86.22 86.22 0 0 1 61.66 61.66a8 8 0 0 1-5.66 9.8a8.2 8.2 0 0 1-2.07.27a8 8 0 0 1-7.73-5.94a70.35 70.35 0 0 0-50.33-50.33a8 8 0 0 1-5.67-9.8m-2.33 41.8c13.79 3.68 22.65 12.54 26.33 26.33A8 8 0 0 0 176 120a8.2 8.2 0 0 0 2.07-.27a8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46m81.94 95.35A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62m-15.88-2h-.11l-47-21.05l-24.35 20.71a8 8 0 0 1-.74.56a16 16 0 0 1-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7a6 6 0 0 1 .57-.77L96 95.15l-21-47a.6.6 0 0 1 0-.12A40.2 40.2 0 0 0 40 88a128.14 128.14 0 0 0 128 128a40.21 40.21 0 0 0 40-34.93Z"></svg:path>`,
})
export class PhPhoneCallIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneDisconnectIcon],svg[ph-phone-disconnect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.59 90.13C175.44 34 80.56 34 24.41 90.13c-20 20-21.92 49.49-4.69 71.71A16 16 0 0 0 32.35 168a15.8 15.8 0 0 0 5.75-1.08l49-17.37l.29-.11a16 16 0 0 0 9.75-11.73l5.9-29.52a76.52 76.52 0 0 1 49.68-.11l6.21 29.75a16 16 0 0 0 9.72 11.59l.29.11l49 17.39a16 16 0 0 0 18.38-5.06c17.19-22.24 15.26-51.73-4.73-71.73M223.67 152l-.3-.12l-48.82-17.33l-6.21-29.74A16 16 0 0 0 158 93a92.56 92.56 0 0 0-60.34.13a16 16 0 0 0-10.32 12l-5.9 29.51l-48.81 17.22c-.1 0-.17.13-.27.17c-12.33-15.91-11-36.23 3.36-50.58c25-25 58.65-37.53 92.28-37.53s67.27 12.51 92.28 37.53c14.33 14.35 15.72 34.67 3.39 50.55m.32 48a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhPhoneDisconnectIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneIncomingIcon],svg[ph-phone-incoming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 104V64a8 8 0 0 1 16 0v20.69l34.34-34.35a8 8 0 0 1 11.32 11.32L171.32 96H192a8 8 0 0 1 0 16h-40a8 8 0 0 1-8-8m79.88 79.08A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.24 56.24 0 0 1 48.92-55.87a16 16 0 0 1 16.62 9.51l21.12 47.15v.12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62m-15.88-2h-.11l-47-21.05l-24.35 20.71a7 7 0 0 1-.74.56a16 16 0 0 1-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7a6 6 0 0 1 .57-.77L96 95.15l-21-47a.6.6 0 0 1 0-.12A40.2 40.2 0 0 0 40 88a128.14 128.14 0 0 0 128 128a40.21 40.21 0 0 0 40-34.93Z"></svg:path>`,
})
export class PhPhoneIncomingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneListIcon],svg[ph-phone-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m214.36 166.46l-47.1-21.11l-.12-.06a16 16 0 0 0-15.18 1.4a8 8 0 0 0-.75.56L126.87 168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06a.6.6 0 0 1 0-.12L89.54 41.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 24 88c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.52-16.62M168 216A128.14 128.14 0 0 1 40 88a40.2 40.2 0 0 1 34.87-40a.6.6 0 0 0 0 .12l21 47l-20.67 24.74a6 6 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a7 7 0 0 0 .74-.57L160.89 160l47 21.06h.11A40.21 40.21 0 0 1 168 216M136 64a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16h-64a8 8 0 0 1-8-8m0 40a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16h-64a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhPhoneListIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneOutgoingIcon],svg[ph-phone-outgoing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M146.34 109.66a8 8 0 0 1 0-11.32L180.69 64H160a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8v40a8 8 0 0 1-16 0V75.31l-34.34 34.35a8 8 0 0 1-11.32 0m77.54 73.42A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.51l21.12 47.16v.12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a15.93 15.93 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62m-15.88-2h-.11l-47-21.06l-24.35 20.72a8 8 0 0 1-.74.56a16 16 0 0 1-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7a6 6 0 0 1 .57-.77L96 95.15l-21-47a.6.6 0 0 1 0-.12A40.2 40.2 0 0 0 40 88a128.14 128.14 0 0 0 128 128a40.21 40.21 0 0 0 40-34.93Z"></svg:path>`,
})
export class PhPhoneOutgoingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhonePauseIcon],svg[ph-phone-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m214.36 166.46l-47.1-21.11l-.12-.06a16 16 0 0 0-15.18 1.4a8 8 0 0 0-.75.56L126.87 168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L89.54 41.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 24 88c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.52-16.62M168 216A128.14 128.14 0 0 1 40 88a40.2 40.2 0 0 1 34.87-40a.6.6 0 0 0 0 .12l21 47l-20.67 24.74a6 6 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a7 7 0 0 0 .74-.57L160.89 160l47 21.06h.11A40.21 40.21 0 0 1 168 216m24-112V48a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0m-40 0V48a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0"></svg:path>`,
})
export class PhPhonePauseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhonePlusIcon],svg[ph-phone-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m214.36 166.46l-47.1-21.11l-.12-.06a16 16 0 0 0-15.18 1.4a8 8 0 0 0-.75.56L126.87 168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06a.6.6 0 0 1 0-.12L89.54 41.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 24 88c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.52-16.62M168 216A128.14 128.14 0 0 1 40 88a40.2 40.2 0 0 1 34.87-40a.6.6 0 0 0 0 .12l21 47l-20.67 24.74a6 6 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a7 7 0 0 0 .74-.57L160.89 160l47 21.06h.11A40.21 40.21 0 0 1 168 216M136 80a8 8 0 0 1 8-8h24V48a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16h-24v24a8 8 0 0 1-16 0V88h-24a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhPhonePlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneSlashIcon],svg[ph-phone-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.93 34.62a8 8 0 1 0-11.84 10.76l27.59 30.36a141.3 141.3 0 0 0-45.27 30.44c-20 20-21.92 49.46-4.69 71.67a16 16 0 0 0 18.38 5.07l49-17.37l.29-.11a16 16 0 0 0 9.75-11.72l5.9-29.51a76 76 0 0 1 8.56-2.4l90.51 99.57a8 8 0 1 0 11.84-10.76Zm43.7 74.52a16 16 0 0 0-10.32 11.94l-5.9 29.5l-48.78 17.3c-.1 0-.17.13-.27.17c-12.33-15.9-11-36.22 3.36-50.56a125.8 125.8 0 0 1 45.47-29.1l18.3 20.14c-.62.2-1.24.39-1.86.61m138.65 68.71a16 16 0 0 1-18.38 5.07l-9.25-3.28a8 8 0 0 1 5.35-15.08l9.37 3.32l.3.12c12.3-15.85 11-36.17-3.39-50.51c-25.66-25.66-61.88-39.27-99.35-37.31a8 8 0 1 1-.83-16c42-2.19 82.63 13.1 111.49 42c19.99 19.99 21.92 49.46 4.69 71.67"></svg:path>`,
})
export class PhPhoneSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneTransferIcon],svg[ph-phone-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 72a8 8 0 0 1 8-8h52.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L196.69 80H144a8 8 0 0 1-8-8m87.87 111.08A56.24 56.24 0 0 1 168 232C88.6 232 24 167.4 24 88a56.24 56.24 0 0 1 48.92-55.87a16 16 0 0 1 16.62 9.51l21.12 47.15v.12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.18-1.4l.11.06l47.11 21.11a16 16 0 0 1 9.55 16.62m-15.87-2h-.11l-47-21.05l-24.35 20.71a8 8 0 0 1-.74.56a16 16 0 0 1-15.75 1.14c-18.73-9-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7a7 7 0 0 1 .57-.77L96 95.15l-21-47a.6.6 0 0 1 0-.12A40.2 40.2 0 0 0 40 88a128.14 128.14 0 0 0 128 128a40.21 40.21 0 0 0 40-34.93Z"></svg:path>`,
})
export class PhPhoneTransferIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneXIcon],svg[ph-phone-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M146.34 98.34L164.69 80l-18.35-18.34a8 8 0 0 1 11.32-11.32L176 68.69l18.34-18.35a8 8 0 0 1 11.32 11.32L187.32 80l18.34 18.34a8 8 0 0 1-11.32 11.32L176 91.31l-18.34 18.35a8 8 0 0 1-11.32-11.32m77.54 84.74A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62m-15.88-2h-.11l-47-21.05l-24.35 20.71a8 8 0 0 1-.74.56a16 16 0 0 1-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7a6 6 0 0 1 .57-.77L96 95.15l-21-47a.6.6 0 0 1 0-.12A40.2 40.2 0 0 0 40 88a128.14 128.14 0 0 0 128 128a40.21 40.21 0 0 0 40-34.93Z"></svg:path>`,
})
export class PhPhoneXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhosphorLogoIcon],svg[ph-phosphor-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 32H72a8 8 0 0 0-8 8v128a80.09 80.09 0 0 0 80 80a8 8 0 0 0 8-8v-64a72 72 0 0 0 0-144M80 70.54L130.32 160H80Zm56 66.92L85.68 48H136ZM80.51 176H136v55.5A64.14 64.14 0 0 1 80.51 176M152 160V48a56 56 0 0 1 0 112"></svg:path>`,
})
export class PhPhosphorLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPiIcon],svg[ph-pi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 172a36 36 0 0 1-72 0V72H96v128a8 8 0 0 1-16 0V72h-8a40 40 0 0 0-40 40a8 8 0 0 1-16 0a56.06 56.06 0 0 1 56-56h152a8 8 0 0 1 0 16h-48v100a20 20 0 0 0 40 0a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhPiIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPianoKeysIcon],svg[ph-piano-keys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 48h24v88H80Zm32 104a8 8 0 0 0 8-8V48h16v96a8 8 0 0 0 8 8h8v56h-48v-56Zm40-16V48h24v88ZM48 48h16v96a8 8 0 0 0 8 8h16v56H48Zm160 160h-40v-56h16a8 8 0 0 0 8-8V48h16z"></svg:path>`,
})
export class PhPianoKeysIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPicnicTableIcon],svg[ph-picnic-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 128h-47.06l-28-56H192a8 8 0 0 0 0-16H64a8 8 0 0 0 0 16h19.06l-28 56H8a8 8 0 0 0 0 16h39.06l-22.22 44.42a8 8 0 0 0 3.58 10.73A7.9 7.9 0 0 0 32 200a8 8 0 0 0 7.17-4.42L64.94 144h126.12l25.78 51.58A8 8 0 0 0 224 200a7.9 7.9 0 0 0 3.57-.85a8 8 0 0 0 3.58-10.73L208.94 144H248a8 8 0 0 0 0-16m-175.06 0l28-56h54.12l28 56Z"></svg:path>`,
})
export class PhPicnicTableIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPictureInPictureIcon],svg[ph-picture-in-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M40 64h176v56h-80a8 8 0 0 0-8 8v64H40Zm176 128h-72v-56h72z"></svg:path>`,
})
export class PhPictureInPictureIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPiggyBankIcon],svg[ph-piggy-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 116a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-40-52h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16m96 48v32a24 24 0 0 1-24 24h-2.36l-16.21 45.38A16 16 0 0 1 190.36 224h-12.72a16 16 0 0 1-15.07-10.62l-1.92-5.38h-57.3l-1.92 5.38A16 16 0 0 1 86.36 224H73.64a16 16 0 0 1-15.07-10.62L46 178.22a87.7 87.7 0 0 1-21.44-48.38A16 16 0 0 0 16 144a8 8 0 0 1-16 0a32 32 0 0 1 24.28-31A88.12 88.12 0 0 1 112 32h104a8 8 0 0 1 0 16h-21.39a87.93 87.93 0 0 1 30.17 37c.43 1 .85 2 1.25 3A24 24 0 0 1 248 112m-16 0a8 8 0 0 0-8-8h-3.66a8 8 0 0 1-7.64-5.6A71.9 71.9 0 0 0 144 48h-32a72 72 0 0 0-53.09 120.64a8 8 0 0 1 1.64 2.71L73.64 208h12.72l3.82-10.69a8 8 0 0 1 7.53-5.31h68.58a8 8 0 0 1 7.53 5.31l3.82 10.69h12.72l18.11-50.69A8 8 0 0 1 216 152h8a8 8 0 0 0 8-8Z"></svg:path>`,
})
export class PhPiggyBankIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPillIcon],svg[ph-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.42 39.6a53.26 53.26 0 0 0-75.32 0L39.6 141.09a53.26 53.26 0 0 0 75.32 75.31l101.51-101.49a53.31 53.31 0 0 0-.01-75.31M103.61 205.09a37.26 37.26 0 0 1-52.7-52.69L96 107.31L148.7 160Zm101.5-101.49L160 148.69L107.32 96l45.1-45.09a37.26 37.26 0 0 1 52.69 52.69m-15.43-21.26a8 8 0 0 1 0 11.32l-24 24a8 8 0 1 1-11.31-11.32l24-24a8 8 0 0 1 11.31 0"></svg:path>`,
})
export class PhPillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPingPongIcon],svg[ph-ping-pong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 196a16 16 0 0 0-6.65-11.7l-38-27.15l17-16.95a39.67 39.67 0 0 0 11-35.79a99.52 99.52 0 0 0-35.4-57.89A101.93 101.93 0 0 0 122.58 24A100.29 100.29 0 0 0 24 122.58a102.12 102.12 0 0 0 22.55 65.28a99.52 99.52 0 0 0 57.89 35.4a39.68 39.68 0 0 0 35.79-11l16.95-17l27.15 38A16 16 0 0 0 196 240c.44 0 .88.05 1.32.05a16 16 0 0 0 11.31-4.69l26.64-26.64A16 16 0 0 0 240 196M59 177.83a86.1 86.1 0 0 1-19-55A84.27 84.27 0 0 1 122.8 40a86.28 86.28 0 0 1 55 19a85.1 85.1 0 0 1 18.78 21.1L80.1 196.58A85.1 85.1 0 0 1 59 177.83M197.35 224l-32.63-45.69a8 8 0 0 0-5.85-3.32h-.66a8 8 0 0 0-5.66 2.34l-23.63 23.63a23.68 23.68 0 0 1-21.36 6.63a80 80 0 0 1-12.3-3.5l108.8-108.8a80.6 80.6 0 0 1 3.5 12.3a23.67 23.67 0 0 1-6.63 21.36l-23.63 23.6a8 8 0 0 0 1 12.17l45.7 32.63Z"></svg:path>`,
})
export class PhPingPongIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPintGlassIcon],svg[ph-pint-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 26.69a8 8 0 0 0-6-2.69H56a8 8 0 0 0-7.94 9l23.15 193a16 16 0 0 0 15.89 14h81.8a16 16 0 0 0 15.89-14.09L207.94 33a8 8 0 0 0-1.94-6.31M191 40l-2.9 24H67.9L65 40Zm-22.1 184H87.1L69.82 80h116.36Z"></svg:path>`,
})
export class PhPintGlassIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPinterestLogoIcon],svg[ph-pinterest-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 112c0 22.57-7.9 43.2-22.23 58.11C188.39 184 170.25 192 152 192c-17.88 0-29.82-5.86-37.43-12l-10.78 45.82A8 8 0 0 1 96 232a8.2 8.2 0 0 1-1.84-.21a8 8 0 0 1-6-9.62l32-136a8 8 0 0 1 15.58 3.66l-16.9 71.8C122 166 131.3 176 152 176c27.53 0 56-23.94 56-64a72 72 0 1 0-134.37 36a8 8 0 0 1-13.85 8A88 88 0 1 1 224 112"></svg:path>`,
})
export class PhPinterestLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPinwheelIcon],svg[ph-pinwheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 218.34l-48.42-48.41c1.1-.33 2.19-.68 3.27-1.07A60 60 0 0 0 220.37 92a8 8 0 0 0-10.25-4.78l-44.2 16.08c.32-.62.64-1.24.93-1.88A60 60 0 0 0 92 19.65a8 8 0 0 0-4.82 10.25l16.08 44.2c-.62-.32-1.24-.64-1.88-.93a60 60 0 0 0-81.73 74.89a8 8 0 0 0 10.25 4.78l44.2-16.09c-.32.63-.64 1.25-.93 1.89a60 60 0 0 0 74.89 81.73a8 8 0 0 0 4.78-10.25l-16.09-44.2c.63.32 1.25.64 1.89.93a59.9 59.9 0 0 0 22.48 5.58l57.22 57.23a8 8 0 0 0 11.32-11.32M131.07 36.15A44 44 0 0 1 134.8 114l-29.61-81.37a43.63 43.63 0 0 1 25.88 3.52m-98.44 98.67a44 44 0 0 1 81.37-29.6ZM109 203.87a44 44 0 0 1-3.73-77.81l29.6 81.33a43.6 43.6 0 0 1-25.87-3.52m55.56-47.38h-.11a44.14 44.14 0 0 1-38.34-21.69l81.33-29.61a44.06 44.06 0 0 1-42.88 51.3"></svg:path>`,
})
export class PhPinwheelIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPipeIcon],svg[ph-pipe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 104h-24V56h24a8 8 0 0 0 0-16h-26.17A16 16 0 0 0 192 32h-16a16 16 0 0 0-13.83 8H144A104.11 104.11 0 0 0 40 144v18.16A16 16 0 0 0 32 176v16a16 16 0 0 0 8 13.84V232a8 8 0 0 0 16 0v-24h48v24a8 8 0 0 0 16 0v-26.16a16 16 0 0 0 8-13.84v-16a16 16 0 0 0-8-13.84V144a24 24 0 0 1 24-24h18.17a16 16 0 0 0 13.83 8h16a16 16 0 0 0 13.83-8H232a8 8 0 0 0 0-16m-120 72v16H48v-16Zm-8-32v16H56v-16a88.1 88.1 0 0 1 88-88h16v48h-16a40 40 0 0 0-40 40m72-32V48h16v64Z"></svg:path>`,
})
export class PhPipeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPipeWrenchIcon],svg[ph-pipe-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.28 55l-.17-.17l-44.9-42.28a16 16 0 0 0-22.5.08l-44.54 44.24l-1.54-1.56a25 25 0 0 0-35.36 35.27l1.46 1.48L52.69 112a16 16 0 0 0 0 22.63l12.68 12.68a16 16 0 0 0 22.59 0l19.93-19.65L120 140l-64.69 65.37a25 25 0 1 0 35.34 35.29l88.67-89.35a16 16 0 0 0 0-22.6l-35.69-36.05L156.56 80l.1.09L194 115.4a16 16 0 0 0 22.53-.09l3.71-3.71a40 40 0 0 0 0-56.57ZM76.69 136L64 123.33l20-19.88l12.69 12.86Zm2.62 93.37a9 9 0 1 1-12.65-12.71l64.67-65.37a16 16 0 0 0 0-22.57l-48.7-49.41A9 9 0 0 1 95.29 66.6L168 140ZM209 100.28l-3.75 3.72a1.2 1.2 0 0 0-.16-.16l-37.4-35.34a16.05 16.05 0 0 0-22.39.12l-12.93 12.67l-12.94-13.06L164 24l.17.16l44.88 42.26a24 24 0 0 1-.08 33.86Z"></svg:path>`,
})
export class PhPipeWrenchIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPixLogoIcon],svg[ph-pix-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.34 116.72l-96.06-96.06a16 16 0 0 0-22.56 0l-96.06 96.06a16 16 0 0 0 0 22.56l96.06 96.06a16 16 0 0 0 22.56 0l96.06-96.06a16 16 0 0 0 0-22.56M128 32l56 56h-24a8 8 0 0 0-5.66 2.34L128 116.68l-26.34-26.34A8 8 0 0 0 96 88H72Zm-72 72h36.68l24 24l-24 24H56l-24-24Zm72 120l-56-56h24a8 8 0 0 0 5.66-2.34L128 139.31l26.34 26.35A8 8 0 0 0 160 168h24Zm72-72h-36.68l-24-24l24-24H200l24 24Z"></svg:path>`,
})
export class PhPixLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPizzaIcon],svg[ph-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.54 63a15.9 15.9 0 0 0-7.25-9.9a201.49 201.49 0 0 0-208.58 0a16 16 0 0 0-5.37 22l96 157.27a16 16 0 0 0 27.36 0l96-157.27a15.82 15.82 0 0 0 1.84-12.1M63.59 118.5a24 24 0 1 1 24.47 40.09Zm87.92 66.95A24 24 0 0 1 176 145.37Zm32.93-53.93a40 40 0 0 0-41.38 67.77L128 224l-31.5-51.57a40 40 0 1 0-41.35-67.76L48.8 94.26a152 152 0 0 1 158.39 0Zm31.1-50.93a168.12 168.12 0 0 0-175.08 0L32 66.77a185.6 185.6 0 0 1 192 0Z"></svg:path>`,
})
export class PhPizzaIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlaceholderIcon],svg[ph-placeholder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M48 208V59.31L196.69 208ZM59.31 48H208v148.7Z"></svg:path>`,
})
export class PhPlaceholderIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlanetIcon],svg[ph-planet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.11 60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93 95.93 0 0 0 32 128a98 98 0 0 0 .78 12.31C5.09 169 5.49 186 10.9 195.32C16 204.16 26.64 208 40.64 208a124 124 0 0 0 28.79-4A95.93 95.93 0 0 0 224 128a97 97 0 0 0-.77-12.25c12.5-13 20.82-25.35 23.65-35.92c1.95-7.32 1.36-13.76-1.77-19.15M128 48a80.11 80.11 0 0 1 78 62.2c-17.06 16.06-40.15 32.53-62.07 45.13c-27.55 15.81-51.45 25.67-70.51 31.07A79.94 79.94 0 0 1 128 48M24.74 187.29c-1.46-2.51-.65-7.24 2.22-13a79 79 0 0 1 10.29-15.05a96 96 0 0 0 18 31.32c-17.25 2.9-28.01 1.05-30.51-3.27M128 208a79.45 79.45 0 0 1-38.56-9.94a370 370 0 0 0 62.43-28.86c21.58-12.39 40.68-25.82 56.07-39.08A80.07 80.07 0 0 1 128 208M231.42 75.69c-1.7 6.31-6.19 13.53-12.63 21.13a95.7 95.7 0 0 0-18-31.35c14.21-2.35 27.37-2.17 30.5 3.24c.9 1.57.95 3.92.13 6.98"></svg:path>`,
})
export class PhPlanetIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlantIcon],svg[ph-plant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.63 47.89a8 8 0 0 0-7.52-7.52c-51.76-3-93.32 12.74-111.18 42.22c-11.8 19.49-11.78 43.16-.16 65.74a71.3 71.3 0 0 0-14.17 27L98.33 159c7.82-16.33 7.52-33.35-1-47.49c-13.2-21.79-43.67-33.47-81.5-31.25a8 8 0 0 0-7.52 7.52c-2.23 37.83 9.46 68.3 31.25 81.5A45.8 45.8 0 0 0 63.44 176A54.6 54.6 0 0 0 87 170.33l25 25V224a8 8 0 0 0 16 0v-29.49a55.6 55.6 0 0 1 12.27-35a73.9 73.9 0 0 0 33.31 8.4a60.9 60.9 0 0 0 31.83-8.86c29.48-17.84 45.26-59.4 42.22-111.16M47.81 155.6C32.47 146.31 23.79 124.32 24 96c28.32-.24 50.31 8.47 59.6 23.81c4.85 8 5.64 17.33 2.46 26.94l-24.41-24.41a8 8 0 0 0-11.31 11.31l24.41 24.41c-9.61 3.18-18.93 2.39-26.94-2.46m149.31-10.22c-13.4 8.11-29.15 8.73-45.15 2l53.69-53.7a8 8 0 0 0-11.31-11.31L140.65 136c-6.76-16-6.15-31.76 2-45.15c13.94-23 47-35.82 89.33-34.83c.96 42.32-11.84 75.42-34.86 89.36"></svg:path>`,
})
export class PhPlantIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlayIcon],svg[ph-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.4 114.49L88.32 26.35a16 16 0 0 0-16.2-.3A15.86 15.86 0 0 0 64 39.87v176.26A15.94 15.94 0 0 0 80 232a16.07 16.07 0 0 0 8.36-2.35l144.04-88.14a15.81 15.81 0 0 0 0-27ZM80 215.94V40l143.83 88Z"></svg:path>`,
})
export class PhPlayIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlayCircleIcon],svg[ph-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48.24-94.78l-64-40A8 8 0 0 0 100 88v80a8 8 0 0 0 12.24 6.78l64-40a8 8 0 0 0 0-13.56M116 153.57v-51.14L156.91 128Z"></svg:path>`,
})
export class PhPlayCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlayPauseIcon],svg[ph-play-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 64v128a8 8 0 0 1-16 0V64a8 8 0 0 1 16 0m40-8a8 8 0 0 0-8 8v128a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8m-80 72a15.76 15.76 0 0 1-7.33 13.34l-88.19 56.15A15.91 15.91 0 0 1 24 184.15V71.85a15.91 15.91 0 0 1 24.48-13.34l88.19 56.15A15.76 15.76 0 0 1 144 128m-16.18 0L40 72.08v111.85Z"></svg:path>`,
})
export class PhPlayPauseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlaylistIcon],svg[ph-playlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h120a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m72 48H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m135.66-57.7a8 8 0 0 1-10 5.36L208 122.75V192a32.05 32.05 0 1 1-16-27.69V112a8 8 0 0 1 10.3-7.66l40 12a8 8 0 0 1 5.36 9.96M192 192a16 16 0 1 0-16 16a16 16 0 0 0 16-16"></svg:path>`,
})
export class PhPlaylistIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlugIcon],svg[ph-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.66 66.34a8 8 0 0 0-11.32 0L192 100.69L155.31 64l34.35-34.34a8 8 0 1 0-11.32-11.32L144 52.69l-26.34-26.35a8 8 0 0 0-11.32 11.32l6.35 6.34l-53 53a40 40 0 0 0 0 56.57l15.71 15.71l-49.06 49.06a8 8 0 0 0 11.32 11.32l49.09-49.09l15.71 15.71a40 40 0 0 0 56.57 0l53-53l6.34 6.35a8 8 0 0 0 11.32-11.32L203.31 112l34.35-34.34a8 8 0 0 0 0-11.32M147.72 185a24 24 0 0 1-33.95 0L71 142.23a24 24 0 0 1 0-33.95l53-53L200.69 132Z"></svg:path>`,
})
export class PhPlugIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlugChargingIcon],svg[ph-plug-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 56h-48V16a8 8 0 0 0-16 0v40H96V16a8 8 0 0 0-16 0v40H32.55C26.28 56 24 60.78 24 64a8 8 0 0 0 8 8h16v88a40 40 0 0 0 40 40h32v40a8 8 0 0 0 16 0v-40h32a40 40 0 0 0 40-40V72h16a8 8 0 0 0 0-16m-56 128H88a24 24 0 0 1-24-24V72h128v88a24 24 0 0 1-24 24m-17.42-60.56a8 8 0 0 1 .91 7.37l-12 32a8 8 0 0 1-15-5.62l8-21.19H112a8 8 0 0 1-7.49-10.81l12-32a8 8 0 1 1 15 5.62l-8 21.19H144a8 8 0 0 1 6.58 3.44"></svg:path>`,
})
export class PhPlugChargingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlugsIcon],svg[ph-plugs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.66 138.34a8 8 0 0 0-11.32 0L120 156.69L99.31 136l18.35-18.34a8 8 0 0 0-11.32-11.32L88 124.69l-18.34-18.35a8 8 0 0 0-11.32 11.32l6.35 6.34l-23.32 23.31a32 32 0 0 0 0 45.26l5.38 5.37l-28.41 28.4a8 8 0 0 0 11.32 11.32l28.4-28.41l5.37 5.38a32 32 0 0 0 45.26 0L132 191.31l6.34 6.35a8 8 0 0 0 11.32-11.32L131.31 168l18.35-18.34a8 8 0 0 0 0-11.32m-52.29 65a16 16 0 0 1-22.62 0l-22.06-22.09a16 16 0 0 1 0-22.62L76 135.31L120.69 180Zm140.29-185a8 8 0 0 0-11.32 0l-28.4 28.41l-5.37-5.38a32.05 32.05 0 0 0-45.26 0L124 64.69l-6.34-6.35a8 8 0 0 0-11.32 11.32l80 80a8 8 0 0 0 11.32-11.32l-6.35-6.34l23.32-23.31a32 32 0 0 0 0-45.26l-5.38-5.37l28.41-28.4a8 8 0 0 0 0-11.32m-34.35 79L180 120.69L135.31 76l23.32-23.31a16 16 0 0 1 22.62 0l22.06 22a16 16 0 0 1 0 22.68Z"></svg:path>`,
})
export class PhPlugsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlugsConnectedIcon],svg[ph-plugs-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.66 18.34a8 8 0 0 0-11.32 0l-52.4 52.41l-5.37-5.38a32.05 32.05 0 0 0-45.26 0L100 88.69l-6.34-6.35a8 8 0 0 0-11.32 11.32l6.35 6.34l-23.32 23.31a32 32 0 0 0 0 45.26l5.38 5.37l-52.41 52.4a8 8 0 0 0 11.32 11.32l52.4-52.41l5.37 5.38a32 32 0 0 0 45.26 0L156 167.31l6.34 6.35a8 8 0 0 0 11.32-11.32l-6.35-6.34l23.32-23.31a32 32 0 0 0 0-45.26l-5.38-5.37l52.41-52.4a8 8 0 0 0 0-11.32m-116.29 161a16 16 0 0 1-22.62 0l-22.06-22.09a16 16 0 0 1 0-22.62L100 111.31L144.69 156Zm57.94-57.94L156 144.69L111.31 100l23.32-23.31a16 16 0 0 1 22.62 0l22.06 22a16 16 0 0 1 0 22.68ZM88.57 35a8 8 0 0 1 14.86-6l8 20a8 8 0 0 1-14.86 6Zm-64 58A8 8 0 0 1 35 88.57l20 8a8 8 0 0 1-6 14.86l-20-8A8 8 0 0 1 24.57 93m206.86 70a8 8 0 0 1-10.4 4.46l-20-8a8 8 0 1 1 5.97-14.89l20 8a8 8 0 0 1 4.43 10.43m-64 58.06a8 8 0 0 1-14.86 5.94l-8-20a8 8 0 0 1 14.86-6Z"></svg:path>`,
})
export class PhPlugsConnectedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlusIcon],svg[ph-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhPlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlusCircleIcon],svg[ph-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhPlusCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlusMinusIcon],svg[ph-plus-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m205.66 61.66l-144 144a8 8 0 0 1-11.32-11.32l144-144a8 8 0 0 1 11.32 11.32M64 112a8 8 0 0 0 16 0V80h32a8 8 0 0 0 0-16H80V32a8 8 0 0 0-16 0v32H32a8 8 0 0 0 0 16h32Zm160 64h-80a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhPlusMinusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlusSquareIcon],svg[ph-plus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-32-80a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhPlusSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPokerChipIcon],svg[ph-poker-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 152a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48m39.21-98.53a63.66 63.66 0 0 0-31.21-13v-24.1a87.6 87.6 0 0 1 48.28 20ZM120 64.52a63.66 63.66 0 0 0-31.21 13L71.72 60.4a87.6 87.6 0 0 1 48.28-20ZM77.47 88.79a63.66 63.66 0 0 0-13 31.21h-24.1a87.6 87.6 0 0 1 20-48.28ZM64.52 136a63.66 63.66 0 0 0 13 31.21L60.4 184.28a87.6 87.6 0 0 1-20-48.28Zm24.27 42.53A63.66 63.66 0 0 0 120 191.48v24.15a87.6 87.6 0 0 1-48.28-20ZM136 191.48a63.66 63.66 0 0 0 31.21-12.95l17.07 17.07a87.6 87.6 0 0 1-48.28 20Zm42.53-24.27A63.66 63.66 0 0 0 191.48 136h24.15a87.6 87.6 0 0 1-20 48.28ZM191.48 120a63.66 63.66 0 0 0-12.95-31.21l17.07-17.07a87.6 87.6 0 0 1 20 48.28Z"></svg:path>`,
})
export class PhPokerChipIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPoliceCarIcon],svg[ph-police-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 104h-11.36l-27.39-47.94A16 16 0 0 0 187.36 48H68.64a16 16 0 0 0-13.89 8.06L27.36 104H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h96v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16M68.64 64h118.72l22.85 40H45.79ZM64 200H40v-16h24Zm128 0v-16h24v16Zm24-32H40v-48h176ZM56 144a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8m112 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8M96 24a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhPoliceCarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPolygonIcon],svg[ph-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.64 49.36a32 32 0 0 0-45.26 0a32 32 0 0 0-5.16 6.76L152 48.42a32 32 0 0 0-54.63-23.06a32.06 32.06 0 0 0-5.76 37.41L57.67 93.32a32.05 32.05 0 0 0-40.31 4.05a32 32 0 0 0 42.89 47.41l70 51.36a32 32 0 1 0 47.57-14.69l27.39-77.59q1.38.12 2.76.12a32 32 0 0 0 22.63-54.62Zm-122-12.69a16 16 0 1 1 0 22.64a16 16 0 0 1 .04-22.64Zm-80 94.65a16 16 0 0 1 0-22.64a16 16 0 1 1 0 22.64m142.65 88a16 16 0 0 1-22.63-22.63a16 16 0 1 1 22.63 22.63m-8.55-43.18a32 32 0 0 0-23 7.08l-70-51.36a32.17 32.17 0 0 0-1.34-26.65l33.95-30.55a32 32 0 0 0 45.47-10.81L176 71.56a32 32 0 0 0 14.12 27ZM219.3 83.3a16 16 0 1 1-22.6-22.62a16 16 0 0 1 22.63 22.63Z"></svg:path>`,
})
export class PhPolygonIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPopcornIcon],svg[ph-popcorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.52 74.21a8 8 0 0 0-7.13-2A44 44 0 0 0 168 41.67a44 44 0 0 0-80 0a44 44 0 0 0-54.4 30.51a8 8 0 0 0-9.4 9.65l30.56 129.84A16 16 0 0 0 70.34 224h115.32a16 16 0 0 0 15.58-12.33l30.55-129.84a8 8 0 0 0-2.27-7.62M76 56a27.7 27.7 0 0 1 13.11 3.26a8 8 0 0 0 11.56-5.34a28 28 0 0 1 54.66 0a8 8 0 0 0 11.56 5.34A28 28 0 0 1 207 76.54l-38.56 11l-34.49-13.8a16 16 0 0 0-11.88 0l-34.5 13.82L49 76.54A28 28 0 0 1 76 56m-5.66 152L42.91 91.44l37.85 10.81L94.86 208Zm74.66 0h-34L96.75 101.12L128 88.62l31.25 12.5Zm40.66 0h-24.52l14.1-105.75l37.85-10.81Z"></svg:path>`,
})
export class PhPopcornIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPopsicleIcon],svg[ph-popsicle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 8a72.08 72.08 0 0 0-72 72v96a16 16 0 0 0 16 16h32v40a24 24 0 0 0 48 0v-40h32a16 16 0 0 0 16-16V80a72.08 72.08 0 0 0-72-72m8 224a8 8 0 0 1-16 0v-40h16Zm48-56H72V80a56 56 0 0 1 112 0zM120 72v80a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0m32 0v80a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhPopsicleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPottedPlantIcon],svg[ph-potted-plant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 144h-76.7l2.35-2.35l20.06-20.06a59.55 59.55 0 0 0 26.1 6.36a49.56 49.56 0 0 0 25.89-7.22c23.72-14.36 36.43-47.6 34-88.92a8 8 0 0 0-7.52-7.52c-41.32-2.42-74.56 10.28-88.92 34c-9.36 15.45-9.6 34.11-.87 52L120 124.68l-12.21-12.21c6-13.25 5.57-27-1.39-38.48C95.53 56 70.61 46.41 39.73 48.22a8 8 0 0 0-7.51 7.51C30.4 86.6 40 111.52 58 122.4a38.2 38.2 0 0 0 20 5.6a45 45 0 0 0 18.52-4.19L108.68 136l-8 8H56a8 8 0 0 0 0 16h9.59l13.21 59.47A15.91 15.91 0 0 0 94.42 232h67.17a15.91 15.91 0 0 0 15.62-12.53L190.42 160H200a8 8 0 0 0 0-16m-51-77.42c10.46-17.26 35.24-27 67-26.57c.41 31.81-9.31 56.58-26.57 67c-11.51 7-25.4 6.54-39.28-1.18C142.42 92 142 78.09 149 66.58m-56.89 41.53c-9.2 4.93-18.31 5.16-25.83.6C54.78 101.74 48.15 85.31 48 64c21.31.15 37.75 6.78 44.71 18.28c4.56 7.52 4.29 16.63-.6 25.83M161.59 216H94.42L82 160h92Z"></svg:path>`,
})
export class PhPottedPlantIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPowerIcon],svg[ph-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 128V48a8 8 0 0 1 16 0v80a8 8 0 0 1-16 0m60.37-78.7a8 8 0 0 0-8.74 13.4C194.74 77.77 208 101.57 208 128a80 80 0 0 1-160 0c0-26.43 13.26-50.23 36.37-65.3a8 8 0 0 0-8.74-13.4C47.9 67.38 32 96.06 32 128a96 96 0 0 0 192 0c0-31.94-15.9-60.62-43.63-78.7"></svg:path>`,
})
export class PhPowerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPrescriptionIcon],svg[ph-prescription-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m183.31 188l22.35-22.34a8 8 0 0 0-11.32-11.32L172 176.69l-41.15-41.16A52 52 0 0 0 124 32H72a8 8 0 0 0-8 8v152a8 8 0 0 0 16 0v-56h28.69l52 52l-22.35 22.34a8 8 0 0 0 11.32 11.32L172 199.31l22.34 22.35a8 8 0 0 0 11.32-11.32ZM80 48h44a36 36 0 0 1 0 72H80Z"></svg:path>`,
})
export class PhPrescriptionIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPresentationIcon],svg[ph-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40h-80V24a8 8 0 0 0-16 0v16H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h39.36l-21.61 27a8 8 0 0 0 12.5 10l29.59-37h56.32l29.59 37a8 8 0 1 0 12.5-10l-21.61-27H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 136H40V56h176z"></svg:path>`,
})
export class PhPresentationIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPresentationChartIcon],svg[ph-presentation-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40h-80V24a8 8 0 0 0-16 0v16H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h39.36l-21.61 27a8 8 0 0 0 12.5 10l29.59-37h56.32l29.59 37a8 8 0 1 0 12.5-10l-21.61-27H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 136H40V56h176zm-112-56v24a8 8 0 0 1-16 0v-24a8 8 0 0 1 16 0m32-16v40a8 8 0 0 1-16 0v-40a8 8 0 0 1 16 0m32-16v56a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhPresentationChartIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPrinterIcon],svg[ph-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214.67 72H200V40a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8v32H41.33C27.36 72 16 82.77 16 96v80a8 8 0 0 0 8 8h32v32a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-32h32a8 8 0 0 0 8-8V96c0-13.23-11.36-24-25.33-24M72 48h112v24H72Zm112 160H72v-48h112Zm40-40h-24v-16a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8v16H32V96c0-4.41 4.19-8 9.33-8h173.34c5.14 0 9.33 3.59 9.33 8Zm-24-52a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhPrinterIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phProhibitIcon],svg[ph-prohibit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m88 104a87.56 87.56 0 0 1-20.41 56.28L71.72 60.4A88 88 0 0 1 216 128m-176 0a87.56 87.56 0 0 1 20.41-56.28L184.28 195.6A88 88 0 0 1 40 128"></svg:path>`,
})
export class PhProhibitIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phProhibitInsetIcon],svg[ph-prohibit-inset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M165.66 154.34a8 8 0 0 1-11.32 11.32l-64-64a8 8 0 0 1 11.32-11.32ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></svg:path>`,
})
export class PhProhibitInsetIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phProjectorScreenIcon],svg[ph-projector-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 64V48a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16v96h-8a8 8 0 0 0 0 16h88v17.38a24 24 0 1 0 16 0V192h88a8 8 0 0 0 0-16h-8V80a16 16 0 0 0 16-16M128 240a8 8 0 1 1 8-8a8 8 0 0 1-8 8M40 48h176v16H40Zm160 128H56V80h144Z"></svg:path>`,
})
export class PhProjectorScreenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phProjectorScreenChartIcon],svg[ph-projector-screen-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 144v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8v-24a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m56-72v96h8a8 8 0 0 1 0 16h-88v17.38a24 24 0 1 1-16 0V192H32a8 8 0 0 1 0-16h8V80a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16m-80 152a8 8 0 1 0-8 8a8 8 0 0 0 8-8M40 64h176V48H40Zm160 16H56v96h144Z"></svg:path>`,
})
export class PhProjectorScreenChartIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPulseIcon],svg[ph-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 128a8 8 0 0 1-8 8h-27.06l-37.78 75.58A8 8 0 0 1 160 216h-.4a8 8 0 0 1-7.08-5.14L95.35 60.76l-32.07 70.55A8 8 0 0 1 56 136H24a8 8 0 0 1 0-16h26.85l37.87-83.31a8 8 0 0 1 14.76.46l57.51 151l31.85-63.71A8 8 0 0 1 200 120h32a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhPulseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPushPinIcon],svg[ph-push-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.32 81.37l-60.69-60.68a16 16 0 0 0-22.63 0l-53.63 53.8c-10.66-3.34-35-7.37-60.4 13.14a16 16 0 0 0-1.29 23.78L85 159.71l-42.66 42.63a8 8 0 0 0 11.32 11.32L96.29 171l48.29 48.29A16 16 0 0 0 155.9 224h1.13a15.93 15.93 0 0 0 11.64-6.33c19.64-26.1 17.75-47.32 13.19-60L235.33 104a16 16 0 0 0-.01-22.63M224 92.69l-57.27 57.46a8 8 0 0 0-1.49 9.22c9.46 18.93-1.8 38.59-9.34 48.62L48 100.08c12.08-9.74 23.64-12.31 32.48-12.31A40.1 40.1 0 0 1 96.81 91a8 8 0 0 0 9.25-1.51L163.32 32L224 92.68Z"></svg:path>`,
})
export class PhPushPinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPushPinSimpleIcon],svg[ph-push-pin-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 168h-9.29L185.54 48H192a8 8 0 0 0 0-16H64a8 8 0 0 0 0 16h6.46L49.29 168H40a8 8 0 0 0 0 16h80v56a8 8 0 0 0 16 0v-56h80a8 8 0 0 0 0-16M86.71 48h82.58l21.17 120H65.54Z"></svg:path>`,
})
export class PhPushPinSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPushPinSimpleSlashIcon],svg[ph-push-pin-simple-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M83.25 40a8 8 0 0 1 8-8H192a8 8 0 0 1 0 16h-6.46l18.75 106.3a8 8 0 0 1-6.48 9.26a7.5 7.5 0 0 1-1.4.13a8 8 0 0 1-7.87-6.61L169.29 48h-78a8 8 0 0 1-8.04-8m130.13 181.92a8 8 0 0 1-11.3-.54L168.1 184H136v56a8 8 0 0 1-16 0v-56H40a8 8 0 0 1 0-16h9.29l16.95-96l-24.16-26.62a8 8 0 1 1 11.84-10.76l160 176a8 8 0 0 1-.54 11.3M153.55 168L79.84 86.92L65.54 168Z"></svg:path>`,
})
export class PhPushPinSimpleSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPushPinSlashIcon],svg[ph-push-pin-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62a8 8 0 1 0-11.84 10.76L67.37 73.2A69.8 69.8 0 0 0 38 87.63a16 16 0 0 0-1.29 23.78L85 159.71l-42.66 42.63a8 8 0 0 0 11.32 11.32L96.29 171l48.29 48.29A16 16 0 0 0 155.9 224h1.13a15.93 15.93 0 0 0 11.64-6.33a89.8 89.8 0 0 0 11.58-20.27l21.84 24a8 8 0 1 0 11.84-10.76ZM155.9 208L48 100.08c10.23-8.25 21.2-12.36 32.66-12.27l87.16 95.88c-2.23 9.87-7.58 18.54-11.92 24.31m79.42-104l-44.64 44.79a8 8 0 1 1-11.33-11.3L224 92.7L163.32 32L122.1 73.35a8 8 0 0 1-11.33-11.29L152 20.7a16 16 0 0 1 22.63 0l60.69 60.68a16 16 0 0 1 0 22.62"></svg:path>`,
})
export class PhPushPinSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPuzzlePieceIcon],svg[ph-puzzle-piece-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.27 158.54a8 8 0 0 0-7.7-.46a20 20 0 1 1 0-36.16a8 8 0 0 0 11.43-7.23V72a16 16 0 0 0-16-16h-36.22a35 35 0 0 0 .22-4a36.1 36.1 0 0 0-11.36-26.24a36 36 0 0 0-60.55 23.62a36.6 36.6 0 0 0 .14 6.62H64a16 16 0 0 0-16 16v32.22a35 35 0 0 0-4-.22a36.12 36.12 0 0 0-26.24 11.36a35.7 35.7 0 0 0-9.69 27a36.08 36.08 0 0 0 33.31 33.6a35.7 35.7 0 0 0 6.62-.14V208a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-42.69a8 8 0 0 0-3.73-6.77M208 208H64v-42.69a8 8 0 0 0-11.43-7.23a20 20 0 1 1 0-36.16A8 8 0 0 0 64 114.69V72h46.69a8 8 0 0 0 7.23-11.43a20 20 0 1 1 36.16 0A8 8 0 0 0 161.31 72H208v32.23a35.7 35.7 0 0 0-6.62-.14A36 36 0 0 0 204 176a35 35 0 0 0 4-.22Z"></svg:path>`,
})
export class PhPuzzlePieceIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQrCodeIcon],svg[ph-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 40H56a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 64H56V56h48zm0 32H56a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64H56v-48h48zm96-160h-48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 64h-48V56h48zm-64 72v-32a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m80-16a8 8 0 0 1-8 8h-24v40a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h24v-56a8 8 0 0 1 16 0v8h24a8 8 0 0 1 8 8m0 32v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhQrCodeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQuestionIcon],svg[ph-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 180a12 12 0 1 1-12-12a12 12 0 0 1 12 12M128 72c-22.06 0-40 16.15-40 36v4a8 8 0 0 0 16 0v-4c0-11 10.77-20 24-20s24 9 24 20s-10.77 20-24 20a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-.72c18.24-3.35 32-17.9 32-35.28c0-19.85-17.94-36-40-36m104 56A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></svg:path>`,
})
export class PhQuestionIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQuestionMarkIcon],svg[ph-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 96c0 28.51-24.47 52.11-56 55.56V160a8 8 0 0 1-16 0v-16a8 8 0 0 1 8-8c26.47 0 48-17.94 48-40s-21.53-40-48-40s-48 17.94-48 40a8 8 0 0 1-16 0c0-30.88 28.71-56 64-56s64 25.12 64 56m-64 96a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhQuestionMarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQueueIcon],svg[ph-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m104 56H40a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16m0 64H40a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16m112-24a8 8 0 0 1-3.76 6.78l-64 40A8 8 0 0 1 168 200v-80a8 8 0 0 1 12.24-6.78l64 40A8 8 0 0 1 248 160m-23.09 0L184 134.43v51.14Z"></svg:path>`,
})
export class PhQueueIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQuotesIcon],svg[ph-quotes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 56H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h60v8a32 32 0 0 1-32 32a8 8 0 0 0 0 16a48.05 48.05 0 0 0 48-48V72a16 16 0 0 0-16-16m0 80H40V72h60Zm116-80h-60a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h60v8a32 32 0 0 1-32 32a8 8 0 0 0 0 16a48.05 48.05 0 0 0 48-48V72a16 16 0 0 0-16-16m0 80h-60V72h60Z"></svg:path>`,
})
export class PhQuotesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRabbitIcon],svg[ph-rabbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 164a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m60 36a52 52 0 0 1-88 37.52a52 52 0 1 1-71.28-75.72A71.6 71.6 0 0 1 63 129C44 91.1 32.53 40.76 45.64 19.08A22 22 0 0 1 65.06 8c14.12 0 26 11.89 36.44 36.36c6.22 14.62 10.85 31.32 14 44.74a71.8 71.8 0 0 1 25 0c3.13-13.42 7.76-30.12 14-44.74C164.9 19.89 176.82 8 190.94 8a22 22 0 0 1 19.42 11.08C223.47 40.76 212 91.1 193 129a71.6 71.6 0 0 1 6.26 20.76A51.77 51.77 0 0 1 216 188m-60.11-94.37a71.7 71.7 0 0 1 26.88 19.64a218.5 218.5 0 0 0 14.83-46.19c3.49-18.13 3.15-33-.93-39.72a6 6 0 0 0-5.73-3.36c-6.61 0-14.52 9.7-21.72 26.62c-5.93 13.94-10.35 30.12-13.33 43.01m-82.66 19.64a71.7 71.7 0 0 1 26.88-19.64c-3-12.89-7.4-29.07-13.33-43C79.58 33.7 71.67 24 65.06 24a6 6 0 0 0-5.73 3.36C55.25 34.1 54.91 49 58.4 67.08a218.5 218.5 0 0 0 14.83 46.19M200 188a35.87 35.87 0 0 0-13.34-28a8 8 0 0 1-2.92-5.45a56 56 0 0 0-111.48 0a8 8 0 0 1-2.92 5.45a36 36 0 1 0 47.28 54.21l-9.74-8.09a8 8 0 1 1 10.24-12.3L128 202.9l10.88-9.05a8 8 0 0 1 10.24 12.3l-9.74 8.09A36 36 0 0 0 200 188"></svg:path>`,
})
export class PhRabbitIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRacquetIcon],svg[ph-racquet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 26.05C202-1.88 151.53 3.16 117.4 37.3c-31.79 31.79-38.33 77.77-16.51 106.49l-29.56 29.56l-.68-.68a16 16 0 0 0-22.64 0L20.69 200a16 16 0 0 0 0 22.64l12.69 12.69a16 16 0 0 0 22.63 0L83.34 208a16 16 0 0 0 0-22.63l-.69-.69l29.56-29.56c11.29 8.58 25.24 12.79 40 12.79c22.72 0 47.25-10 66.54-29.3C252.83 104.47 257.88 54 230 26.05M44.7 224L32 211.31L59.33 184l6.33 6.34l6.34 6.33Zm179.53-120h-24.17V72h32a72.45 72.45 0 0 1-7.83 32M136 149.61A44.15 44.15 0 0 1 106.39 120H136ZM104 104a72.24 72.24 0 0 1 7.86-32H136v32Zm48-32h32v32h-32Zm77.67-16h-29.61V26.28a44.23 44.23 0 0 1 29.66 29.66Zm-45.82-32h.16v32h-32V31.76a72.5 72.5 0 0 1 31.89-7.86ZM136 42.06v13.88h-13.84a90 90 0 0 1 6.56-7.32a93 93 0 0 1 7.28-6.56m16 109.92V120h32v24.16a72.24 72.24 0 0 1-31.95 7.84Zm48-18.14V120h14a92 92 0 0 1-6.56 7.32a90 90 0 0 1-7.38 6.52Z"></svg:path>`,
})
export class PhRacquetIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRadicalIcon],svg[ph-radical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 80v24a8 8 0 0 1-16 0V88h-98.45L87.49 210.81a8 8 0 0 1-15 0l-48-128a8 8 0 1 1 15-5.62L80 185.22l40.51-108A8 8 0 0 1 128 72h112a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhRadicalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRadioIcon],svg[ph-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 168a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-8-40H64a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m0-32H64a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m136-16v112a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V72a8 8 0 0 1 5.7-7.66l160-48a8 8 0 0 1 4.6 15.33L86.51 64H216a16 16 0 0 1 16 16m-16 112V80H40v112zm-16-56a40 40 0 1 1-40-40a40 40 0 0 1 40 40m-16 0a24 24 0 1 0-24 24a24 24 0 0 0 24-24"></svg:path>`,
})
export class PhRadioIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRadioButtonIcon],svg[ph-radio-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m0-144a56 56 0 1 0 56 56a56.06 56.06 0 0 0-56-56m0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhRadioButtonIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRadioactiveIcon],svg[ph-radioactive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 136H40a16 16 0 0 1-11.76-5.21a16.2 16.2 0 0 1-4.17-12.37a103.83 103.83 0 0 1 43.58-75.49A16 16 0 0 1 90.75 48l26 45a8 8 0 1 1-13.86 8l-26-45A87.83 87.83 0 0 0 40 119.86a.19.19 0 0 0 .07.16L92 120a8 8 0 0 1 0 16m139.93-17.58a103.83 103.83 0 0 0-43.58-75.49a16 16 0 0 0-23.1 5.07L139.3 93a8 8 0 0 0 13.86 8l26-45A87.87 87.87 0 0 1 216 119.86v.14h-52a8 8 0 0 0 0 16h52a16 16 0 0 0 11.76-5.21a16.2 16.2 0 0 0 4.17-12.37m-79 36.76a8 8 0 1 0-13.86 8l25.84 44.73a88.22 88.22 0 0 1-73.81 0l25.83-44.73a8 8 0 1 0-13.86-8l-25.82 44.73a16 16 0 0 0 7.12 22.52a104.24 104.24 0 0 0 87.26 0a16 16 0 0 0 7.12-22.52ZM128 140a12 12 0 1 0-12-12a12 12 0 0 0 12 12"></svg:path>`,
})
export class PhRadioactiveIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRainbowIcon],svg[ph-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 168v16a8 8 0 0 1-16 0v-16a40 40 0 0 0-80 0v16a8 8 0 0 1-16 0v-16a56 56 0 0 1 112 0m-56-88a88.1 88.1 0 0 0-88 88v16a8 8 0 0 0 16 0v-16a72 72 0 0 1 144 0v16a8 8 0 0 0 16 0v-16a88.1 88.1 0 0 0-88-88m0-32A120.13 120.13 0 0 0 8 168v16a8 8 0 0 0 16 0v-16a104 104 0 0 1 208 0v16a8 8 0 0 0 16 0v-16A120.13 120.13 0 0 0 128 48"></svg:path>`,
})
export class PhRainbowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRainbowCloudIcon],svg[ph-rainbow-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 112a48.18 48.18 0 0 0-44.66 30.4a31 31 0 0 0-3.34-.18c-17.65 0-32 14.76-32 32.89S134.35 208 152 208h48a48 48 0 0 0 0-96m0 80h-48c-8.82 0-16-7.58-16-16.89s7.18-16.89 16-16.89a15 15 0 0 1 5.78 1.14a8 8 0 0 0 10.87-5.81A32 32 0 1 1 200 192M24 160v16a8 8 0 0 1-16 0v-16a104 104 0 0 1 176.5-74.56a8 8 0 0 1-11.15 11.47A88 88 0 0 0 24 160m32 0v16a8 8 0 0 1-16 0v-16a72 72 0 0 1 114.6-58a8 8 0 1 1-9.47 12.89A56 56 0 0 0 56 160m61.57-23.35A24 24 0 0 0 88 160v16a8 8 0 0 1-16 0v-16a40 40 0 0 1 49.27-38.92a8 8 0 1 1-3.7 15.57"></svg:path>`,
})
export class PhRainbowCloudIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRankingIcon],svg[ph-ranking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112.41 102.53a8 8 0 0 1 5.06-10.12l12-4A8 8 0 0 1 140 96v40a8 8 0 0 1-16 0v-28.9l-1.47.49a8 8 0 0 1-10.12-5.06M248 208a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h8v-96a16 16 0 0 1 16-16h40V56a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v72h40a16 16 0 0 1 16 16v56h8a8 8 0 0 1 8 8m-72-64v56h40v-56Zm-80 56h64V56H96Zm-56 0h40v-96H40Z"></svg:path>`,
})
export class PhRankingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phReadCvLogoIcon],svg[ph-read-cv-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51M178.26 224L48 201L77.75 32L208 55ZM89.34 58.42a8 8 0 0 1 9.27-6.48l83 14.65a8 8 0 0 1-1.39 15.88a8.4 8.4 0 0 1-1.4-.12l-83-14.66a8 8 0 0 1-6.48-9.27M83.8 89.94a8 8 0 0 1 9.27-6.49l83 14.66a8 8 0 0 1-1.4 15.89a7.6 7.6 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1-6.46-9.28m-5.55 31.51a8 8 0 0 1 9.27-6.45l41.48 7.29a8 8 0 0 1-1.38 15.88a8.3 8.3 0 0 1-1.4-.12l-41.5-7.33a8 8 0 0 1-6.47-9.27"></svg:path>`,
})
export class PhReadCvLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phReceiptIcon],svg[ph-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 104a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m8 40h96a8 8 0 0 0 0-16H80a8 8 0 0 0 0 16m152-88v152a8 8 0 0 1-11.58 7.15L192 200.94l-28.42 14.21a8 8 0 0 1-7.16 0L128 200.94l-28.42 14.21a8 8 0 0 1-7.16 0L64 200.94l-28.42 14.21A8 8 0 0 1 24 208V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 0H40v139.06l20.42-10.22a8 8 0 0 1 7.16 0L96 199.06l28.42-14.22a8 8 0 0 1 7.16 0L160 199.06l28.42-14.22a8 8 0 0 1 7.16 0L216 195.06Z"></svg:path>`,
})
export class PhReceiptIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phReceiptXIcon],svg[ph-receipt-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v152a8 8 0 0 0 11.58 7.15L64 200.94l28.42 14.21a8 8 0 0 0 7.16 0L128 200.94l28.42 14.21a8 8 0 0 0 7.16 0L192 200.94l28.42 14.21A8 8 0 0 0 232 208V56a16 16 0 0 0-16-16m0 155.06l-20.42-10.22a8 8 0 0 0-7.16 0L160 199.06l-28.42-14.22a8 8 0 0 0-7.16 0L96 199.06l-28.42-14.22a8 8 0 0 0-7.16 0L40 195.06V56h176ZM98.34 138.34L116.69 120l-18.35-18.34a8 8 0 0 1 11.32-11.32L128 108.69l18.34-18.35a8 8 0 0 1 11.32 11.32L139.31 120l18.35 18.34a8 8 0 0 1-11.32 11.32L128 131.31l-18.34 18.35a8 8 0 0 1-11.32-11.32"></svg:path>`,
})
export class PhReceiptXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRecordIcon],svg[ph-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m0-160a72 72 0 1 0 72 72a72.08 72.08 0 0 0-72-72m0 128a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56"></svg:path>`,
})
export class PhRecordIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRectangleIcon],svg[ph-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176z"></svg:path>`,
})
export class PhRectangleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRectangleDashedIcon],svg[ph-rectangle-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 48a8 8 0 0 1-8 8H40v16a8 8 0 0 1-16 0V56a16 16 0 0 1 16-16h32a8 8 0 0 1 8 8M32 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m40 48H40v-16a8 8 0 0 0-16 0v16a16 16 0 0 0 16 16h32a8 8 0 0 0 0-16m72 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m80-24a8 8 0 0 0-8 8v16h-32a8 8 0 0 0 0 16h32a16 16 0 0 0 16-16v-16a8 8 0 0 0-8-8m0-72a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m-8-64h-32a8 8 0 0 0 0 16h32v16a8 8 0 0 0 16 0V56a16 16 0 0 0-16-16m-72 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhRectangleDashedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRecycleIcon],svg[ph-recycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 208a8 8 0 0 1-8 8H40a24 24 0 0 1-20.77-36l34.29-59.25l-14.05 3.75a8 8 0 1 1-4.14-15.5l32.77-8.77a8 8 0 0 1 9.8 5.66l8.79 32.77A8 8 0 0 1 81 148.5a8.4 8.4 0 0 1-2.08.27a8 8 0 0 1-7.72-5.93l-3.8-14.15L33.11 188A8 8 0 0 0 40 200h48a8 8 0 0 1 8 8m140.73-28l-23.14-40a8 8 0 0 0-13.84 8l23.14 40a8 8 0 0 1-6.89 12h-68.69l10.34-10.34a8 8 0 0 0-11.31-11.32l-24 24a8 8 0 0 0 0 11.32l24 24a8 8 0 0 0 11.31-11.32L147.31 216H216a24 24 0 0 0 20.77-36ZM128 32a7.85 7.85 0 0 1 6.92 4l34.29 59.25l-14.08-3.78a8 8 0 0 0-4.13 15.45l32.78 8.79a8.2 8.2 0 0 0 2.07.27a8 8 0 0 0 7.72-5.93l8.79-32.79a8 8 0 1 0-15.45-4.14l-3.8 14.17L148.77 28a24 24 0 0 0-41.54 0L84.07 68a8 8 0 0 0 13.85 8l23.16-40a7.85 7.85 0 0 1 6.92-4"></svg:path>`,
})
export class PhRecycleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRedditLogoIcon],svg[ph-reddit-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 104a32 32 0 0 0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17l17.72 2.72a24 24 0 1 0 2.87-15.74l-26-4a8 8 0 0 0-9.11 6.59l-6.87 41.48c-21.84.94-42.82 6.38-60.26 15.65a32 32 0 0 0-42.59 47.74A59 59 0 0 0 16 144c0 21.93 12 42.35 33.91 57.49C70.88 216 98.61 224 128 224s57.12-8 78.09-22.51C228 186.35 240 165.93 240 144a59 59 0 0 0-2.35-16.45A32.16 32.16 0 0 0 248 104m-64-80a8 8 0 1 1-8 8a8 8 0 0 1 8-8m40.13 93.78a8 8 0 0 0-3.29 10A43.6 43.6 0 0 1 224 144c0 16.53-9.59 32.27-27 44.33C178.67 201 154.17 208 128 208s-50.67-7-69-19.67c-17.41-12.06-27-27.8-27-44.33a43.8 43.8 0 0 1 3.14-16.17a8 8 0 0 0-3.27-10a16 16 0 1 1 21.07-23.24a8 8 0 0 0 10.45 2.23l.36-.22C81.45 85.9 104.25 80 128 80c23.73 0 46.53 5.9 64.23 16.6l.42.25a8 8 0 0 0 10.39-2.26a16 16 0 1 1 21.07 23.19ZM88 144a16 16 0 1 1 16-16a16 16 0 0 1-16 16m96-16a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-16.93 44.25a8 8 0 0 1-3.32 10.82a76.18 76.18 0 0 1-71.5 0a8 8 0 1 1 7.5-14.14a60.18 60.18 0 0 0 56.5 0a8 8 0 0 1 10.82 3.32"></svg:path>`,
})
export class PhRedditLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRepeatIcon],svg[ph-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 128a72.08 72.08 0 0 1 72-72h108.69l-10.35-10.34a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L204.69 72H96a56.06 56.06 0 0 0-56 56a8 8 0 0 1-16 0m200-8a8 8 0 0 0-8 8a56.06 56.06 0 0 1-56 56H51.31l10.35-10.34a8 8 0 0 0-11.32-11.32l-24 24a8 8 0 0 0 0 11.32l24 24a8 8 0 0 0 11.32-11.32L51.31 200H160a72.08 72.08 0 0 0 72-72a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhRepeatIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRepeatOnceIcon],svg[ph-repeat-once-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 128a72.08 72.08 0 0 1 72-72h108.69l-10.35-10.34a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L204.69 72H96a56.06 56.06 0 0 0-56 56a8 8 0 0 1-16 0m200-8a8 8 0 0 0-8 8a56.06 56.06 0 0 1-56 56H51.31l10.35-10.34a8 8 0 0 0-11.32-11.32l-24 24a8 8 0 0 0 0 11.32l24 24a8 8 0 0 0 11.32-11.32L51.31 200H160a72.08 72.08 0 0 0 72-72a8 8 0 0 0-8-8m-88 40a8 8 0 0 0 8-8v-48a8 8 0 0 0-11.58-7.16l-16 8a8 8 0 1 0 7.16 14.31l4.42-2.21V152a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhRepeatOnceIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phReplitLogoIcon],svg[ph-replit-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 88h-64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h64v48H72a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-48h64a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m-80 128H72v-48h64Zm0-176v48H72V40zm80 112h-64v-48h64Z"></svg:path>`,
})
export class PhReplitLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phResizeIcon],svg[ph-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 112H48a8 8 0 0 0-8 8v88a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8v-88a8 8 0 0 0-8-8m-8 88H56v-72h72Zm88-16v16a16 16 0 0 1-16 16h-24a8 8 0 0 1 0-16h24v-16a8 8 0 0 1 16 0m0-72v32a8 8 0 0 1-16 0v-32a8 8 0 0 1 16 0m0-56v16a8 8 0 0 1-16 0V56h-16a8 8 0 0 1 0-16h16a16 16 0 0 1 16 16m-64-8a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8M40 80V56a16 16 0 0 1 16-16h16a8 8 0 0 1 0 16H56v24a8 8 0 0 1-16 0"></svg:path>`,
})
export class PhResizeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRewindIcon],svg[ph-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.77 58a16 16 0 0 0-16.25.53L128 109.14v-37.3a15.91 15.91 0 0 0-24.48-13.34l-88.19 56.16a15.8 15.8 0 0 0 0 26.68l88.19 56.16A15.91 15.91 0 0 0 128 184.16v-37.3l79.52 50.64A15.91 15.91 0 0 0 232 184.16V71.84A15.83 15.83 0 0 0 223.77 58M112 183.93L24.18 128L112 72.06Zm104 0L128.18 128L216 72.06Z"></svg:path>`,
})
export class PhRewindIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRewindCircleIcon],svg[ph-rewind-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M115.58 84.84a8 8 0 0 0-8.38.76l-48 36a8 8 0 0 0 0 12.8l48 36a8 8 0 0 0 4.8 1.6a8 8 0 0 0 8-8V92a8 8 0 0 0-4.42-7.16M104 148l-26.67-20L104 108Zm75.58-63.16a8 8 0 0 0-8.38.76l-48 36a8 8 0 0 0 0 12.8l48 36a8 8 0 0 0 4.8 1.6a8 8 0 0 0 8-8V92a8 8 0 0 0-4.42-7.16M168 148l-26.67-20L168 108Z"></svg:path>`,
})
export class PhRewindCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRoadHorizonIcon],svg[ph-road-horizon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.92 199a8 8 0 0 1-10.92-3.08L155.32 72H136v8a8 8 0 0 1-16 0v-8h-19.32L31 195.92a8 8 0 0 1-14-7.84L82.32 72H24a8 8 0 0 1 0-16h208a8 8 0 0 1 0 16h-58.32L239 188.08a8 8 0 0 1-3.08 10.92M128 112a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8m0 56a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhRoadHorizonIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRobotIcon],svg[ph-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 48h-64V16a8 8 0 0 0-16 0v32H56a32 32 0 0 0-32 32v112a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V80a32 32 0 0 0-32-32m16 144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16Zm-52-56H92a28 28 0 0 0 0 56h72a28 28 0 0 0 0-56m-24 16v24h-24v-24Zm-60 12a12 12 0 0 1 12-12h8v24h-8a12 12 0 0 1-12-12m84 12h-8v-24h8a12 12 0 0 1 0 24m-92-68a12 12 0 1 1 12 12a12 12 0 0 1-12-12m88 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhRobotIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRocketIcon],svg[ph-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 224a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-24-112a12 12 0 1 0-12-12a12 12 0 0 0 12 12m95.62 43.83l-12.36 55.63a16 16 0 0 1-25.51 9.11L158.51 200h-61l-27.26 20.57a16 16 0 0 1-25.51-9.11l-12.36-55.63a16.09 16.09 0 0 1 3.32-13.71l28.56-34.26a123 123 0 0 1 8.57-36.67c12.9-32.34 36-52.63 45.37-59.85a16 16 0 0 1 19.6 0c9.34 7.22 32.47 27.51 45.37 59.85a123 123 0 0 1 8.57 36.67l28.56 34.26a16.09 16.09 0 0 1 3.32 13.71M99.43 184h57.14c21.12-37.54 25.07-73.48 11.74-106.88C156.55 47.64 134.49 29 128 24c-6.51 5-28.57 23.64-40.33 53.12c-13.31 33.4-9.36 69.34 11.76 106.88m-15 5.85q-16.15-29.35-19.6-57.69L48 152.36L60.36 208l.18-.13ZM208 152.36l-16.83-20.2q-3.42 28.28-19.56 57.69l23.85 18l.18.13Z"></svg:path>`,
})
export class PhRocketIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRocketLaunchIcon],svg[ph-rocket-launch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.85 47.12a16 16 0 0 0-15-15c-12.58-.75-44.73.4-71.41 27.07L132.69 64H74.36A15.9 15.9 0 0 0 63 68.68L28.7 103a16 16 0 0 0 9.07 27.16l38.47 5.37l44.21 44.21l5.37 38.49a15.94 15.94 0 0 0 10.78 12.92a16.1 16.1 0 0 0 5.1.83a15.9 15.9 0 0 0 11.3-4.68l34.32-34.3a15.9 15.9 0 0 0 4.68-11.36v-58.33l4.77-4.77c26.68-26.68 27.83-58.83 27.08-71.42M74.36 80h42.33l-39.53 39.52L40 114.34Zm74.41-9.45a76.65 76.65 0 0 1 59.11-22.47a76.46 76.46 0 0 1-22.42 59.16L128 164.68L91.32 128ZM176 181.64L141.67 216l-5.19-37.17L176 139.31Zm-74.16 9.5C97.34 201 82.29 224 40 224a8 8 0 0 1-8-8c0-42.29 23-57.34 32.86-61.85a8 8 0 0 1 6.64 14.56c-6.43 2.93-20.62 12.36-23.12 38.91c26.55-2.5 36-16.69 38.91-23.12a8 8 0 1 1 14.56 6.64Z"></svg:path>`,
})
export class PhRocketLaunchIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRowsIcon],svg[ph-rows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 136H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16m0 56H48v-40h160zm0-144H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 56H48V64h160z"></svg:path>`,
})
export class PhRowsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRowsPlusBottomIcon],svg[ph-rows-plus-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 112H48a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-24a16 16 0 0 0-16-16m0 40H48v-24h160zm0-112H48a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 40H48V56h160zm-48 136a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhRowsPlusBottomIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRowsPlusTopIcon],svg[ph-rows-plus-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 160H48a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-24a16 16 0 0 0-16-16m0 40H48v-24h160zm0-112H48a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-24a16 16 0 0 0-16-16m0 40H48v-24h160zM96 40a8 8 0 0 1 8-8h16V16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V48h-16a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhRowsPlusTopIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRssIcon],svg[ph-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106.91 149.09A71.53 71.53 0 0 1 128 200a8 8 0 0 1-16 0a56 56 0 0 0-56-56a8 8 0 0 1 0-16a71.53 71.53 0 0 1 50.91 21.09M56 80a8 8 0 0 0 0 16a104 104 0 0 1 104 104a8 8 0 0 0 16 0A120 120 0 0 0 56 80m118.79 1.21A166.9 166.9 0 0 0 56 32a8 8 0 0 0 0 16a151 151 0 0 1 107.48 44.52A151 151 0 0 1 208 200a8 8 0 0 0 16 0a166.9 166.9 0 0 0-49.21-118.79M60 184a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhRssIcon {
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
  selector: 'svg[phSmileyXEyesIcon],svg[ph-smiley-x-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m61.66-93.66a8 8 0 0 1-11.32 11.32L168 123.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L156.69 112l-10.35-10.34a8 8 0 0 1 11.32-11.32L168 100.69l10.34-10.35a8 8 0 0 1 11.32 11.32L179.31 112Zm-80-20.68L99.31 112l10.35 10.34a8 8 0 0 1-11.32 11.32L88 123.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L76.69 112l-10.35-10.34a8 8 0 0 1 11.32-11.32L88 100.69l10.34-10.35a8 8 0 0 1 11.32 11.32M140 180a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhSmileyXEyesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSnapchatLogoIcon],svg[ph-snapchat-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.83 182.28a8 8 0 0 0-5.13-5.9c-.39-.14-28.95-10.88-43-49.23l19.3-7.72a8 8 0 1 0-6-14.86l-17.82 7.13A149 149 0 0 1 192 80a64 64 0 0 0-128 0a151.2 151.2 0 0 1-3.18 31.75L43 104.57a8 8 0 1 0-6 14.86l19.37 7.75a94 94 0 0 1-17.74 30.2c-12.52 14.14-25.27 19-25.36 19a8 8 0 0 0-2.77 13.36c7.1 6.67 17.67 7.71 27.88 8.72c6.31.62 12.83 1.27 16.39 3.23c3.37 1.86 6.85 6.62 10.21 11.22c5.4 7.41 11.53 15.8 21.24 18.28c9.07 2.33 18.35-.83 26.54-3.62c5.55-1.89 10.8-3.68 15.21-3.68s9.66 1.79 15.21 3.68c6.2 2.11 13 4.43 19.9 4.43a26.4 26.4 0 0 0 6.64-.81c9.7-2.48 15.83-10.87 21.23-18.28c3.36-4.6 6.84-9.36 10.21-11.22c3.56-2 10.08-2.61 16.39-3.23c10.21-1 20.78-2.05 27.88-8.72a8 8 0 0 0 2.4-7.46m-31.82.26c-7.91.78-16.08 1.59-22.53 5.13s-11 9.79-15.41 15.81c-4 5.48-8.15 11.16-12.28 12.21c-4.46 1.15-10.76-1-17.42-3.27s-13.31-4.53-20.37-4.53s-13.83 2.3-20.37 4.53s-13 4.42-17.42 3.27c-4.13-1.05-8.27-6.73-12.28-12.21c-4.39-6-8.93-12.24-15.41-15.81S47.9 183.32 40 182.54c-1.55-.15-3.15-.31-4.74-.49a97.3 97.3 0 0 0 14.69-13.29c8.37-9.27 17.72-23.23 23.74-43.13l.06-.13a8.6 8.6 0 0 0 .46-1.61A158.5 158.5 0 0 0 80 80a48 48 0 0 1 96 0a158.4 158.4 0 0 0 5.8 43.92a8.6 8.6 0 0 0 .46 1.61l.06.13c6 19.9 15.37 33.86 23.74 43.13a97.3 97.3 0 0 0 14.69 13.29c-1.59.15-3.18.31-4.75.46Z"></svg:path>`,
})
export class PhSnapchatLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSneakerIcon],svg[ph-sneaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.65 129.11l-60.73-20.24a24 24 0 0 1-14.32-13L130.39 41.6v-.1a16 16 0 0 0-20.14-8.5L34.53 60.49A16.05 16.05 0 0 0 24 75.53V192a16 16 0 0 0 16 16h200a16 16 0 0 0 16-16v-24.94a40 40 0 0 0-27.35-37.95M115.72 48l7.11 16.63l-21.56 7.85A8 8 0 0 0 104 88a7.9 7.9 0 0 0 2.73-.49l22.4-8.14l4.74 11.07l-16.6 6A8 8 0 0 0 120 112a7.9 7.9 0 0 0 2.73-.49l17.6-6.4a40.2 40.2 0 0 0 7.68 10l-14.74 5.36A8 8 0 0 0 136 136a8.1 8.1 0 0 0 2.73-.48l28-10.18l56.87 18.95A24 24 0 0 1 238.93 160H40V75.53ZM40 192v-16h200v16Z"></svg:path>`,
})
export class PhSneakerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSneakerMoveIcon],svg[ph-sneaker-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m231.16 166.63l-28.63-14.31A47.74 47.74 0 0 1 176 109.39V80a8 8 0 0 0-8-8a48.05 48.05 0 0 1-48-48a8 8 0 0 0-12.83-6.37L30.13 76l-.2.16a16 16 0 0 0-1.24 23.75L142.4 213.66a8 8 0 0 0 5.66 2.34H224a16 16 0 0 0 16-16v-19.06a15.92 15.92 0 0 0-8.84-14.31M224 200h-72.63L40 88.63l12.87-9.76l38.79 38.79A8 8 0 0 0 103 106.34L65.74 69.11l40-30.31A64.15 64.15 0 0 0 160 87.5v21.89a63.65 63.65 0 0 0 35.38 57.24L224 180.94ZM70.8 184H32a8 8 0 0 1 0-16h38.8a8 8 0 1 1 0 16m40 24a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h54.8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSneakerMoveIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSnowflakeIcon],svg[ph-snowflake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.77 150.09a8 8 0 0 1-5.86 9.68l-24.64 6l6.46 24.11a8 8 0 0 1-5.66 9.8a8.3 8.3 0 0 1-2.07.32a8 8 0 0 1-7.72-5.93l-7.72-28.8L136 141.86v46.83l21.66 21.65a8 8 0 0 1-11.32 11.32L128 203.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L120 188.69v-46.83l-40.55 23.41l-7.72 28.8A8 8 0 0 1 64 200a8.3 8.3 0 0 1-2.08-.27a8 8 0 0 1-5.66-9.8l6.46-24.11l-24.64-6a8 8 0 0 1 3.82-15.54l29.45 7.23L112 128l-40.64-23.46l-29.45 7.23A8 8 0 0 1 40 112a8 8 0 0 1-1.91-15.77l24.64-6l-6.46-24.16a8 8 0 0 1 15.46-4.14l7.72 28.8L120 114.14V67.31L98.34 45.66a8 8 0 0 1 11.32-11.32L128 52.69l18.34-18.35a8 8 0 0 1 11.32 11.32L136 67.31v46.83l40.55-23.41l7.72-28.8a8 8 0 0 1 15.46 4.14l-6.46 24.11l24.64 6A8 8 0 0 1 216 112a8 8 0 0 1-1.91-.23l-29.45-7.23L144 128l40.64 23.46l29.45-7.23a8 8 0 0 1 9.68 5.86"></svg:path>`,
})
export class PhSnowflakeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSoccerBallIcon],svg[ph-soccer-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z"></svg:path>`,
})
export class PhSoccerBallIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSockIcon],svg[ph-sock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 16h-88a16 16 0 0 0-16 16v76.69l-38.75 38.74a58.92 58.92 0 0 0 83.32 83.32L201 162.34a23.85 23.85 0 0 0 7-17V32a16 16 0 0 0-16-16m0 16v16h-88V32Zm-70.75 187.43a42.91 42.91 0 1 1-60.68-60.68l41.09-41.09A8 8 0 0 0 104 112V64h88v40.58A56.09 56.09 0 0 0 144 160a55.4 55.4 0 0 0 7.93 28.76ZM189.66 151l-25.91 25.91A39.6 39.6 0 0 1 160 160a40.05 40.05 0 0 1 32-39.19v24.56a8 8 0 0 1-2.34 5.63"></svg:path>`,
})
export class PhSockIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSolarPanelIcon],svg[ph-solar-panel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 104a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m39.43-45.25a8 8 0 0 0 11.32-11.32L71.43 36.12a8 8 0 0 0-11.31 11.31ZM128 40a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v16a8 8 0 0 0 8 8m50.91 21.09a8 8 0 0 0 5.66-2.34l11.31-11.32a8 8 0 0 0-11.31-11.31l-11.32 11.31a8 8 0 0 0 5.66 13.66M192 104a8 8 0 0 0 8 8h16a8 8 0 0 0 0-16h-16a8 8 0 0 0-8 8m-104 8a8 8 0 0 0 8-8a32 32 0 0 1 64 0a8 8 0 0 0 16 0a48 48 0 0 0-96 0a8 8 0 0 0 8 8m150.91 108a8 8 0 0 1-6.91 4H24a8 8 0 0 1-7-11.94l40.69-72a8 8 0 0 1 7-4.06H191.3a8 8 0 0 1 7 4.06l40.69 72a8 8 0 0 1-.08 7.94m-52.27-68h-24.37l3.48 16h29.93Zm-37.26 16l-3.48-16h-35.8l-3.48 16Zm-46.24 16l-5.21 24h60.14l-5.21-24Zm-42.82-16h29.93l3.48-16H69.36Zm-22.61 40h43.84l5.22-24H51.28Zm180.58 0l-13.57-24h-35.49l5.22 24Z"></svg:path>`,
})
export class PhSolarPanelIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSolarRoofIcon],svg[ph-solar-roof-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m247.16 124.42l-40-80A8 8 0 0 0 200 40H56a8 8 0 0 0-7.16 4.42l-40 80A8.1 8.1 0 0 0 8 128v56a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16v-56a8.1 8.1 0 0 0-.84-3.58M99.06 56l12 24H80.94l-12-24Zm48 0l12 24h-30.12l-12-24Zm-46.12 64l-12-24h30.12l12 24Zm48 0l-12-24h30.12l12 24Zm48 0l-12-24h30.12l12 24Zm10.12-40h-30.12l-12-24h30.12ZM24 129.89l32-64l32 64V184H24ZM104 184v-48h128v48Z"></svg:path>`,
})
export class PhSolarRoofIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSortAscendingIcon],svg[ph-sort-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 128a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h72a8 8 0 0 1 8 8M48 72h136a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16m56 112H48a8 8 0 0 0 0 16h56a8 8 0 0 0 0-16m125.66-21.66a8 8 0 0 0-11.32 0L192 188.69V112a8 8 0 0 0-16 0v76.69l-26.34-26.35a8 8 0 0 0-11.32 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhSortAscendingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSortDescendingIcon],svg[ph-sort-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 128a8 8 0 0 1 8-8h72a8 8 0 0 1 0 16H48a8 8 0 0 1-8-8m8-56h56a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16m136 112H48a8 8 0 0 0 0 16h136a8 8 0 0 0 0-16m45.66-101.66l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 11.32 11.32L176 67.31V144a8 8 0 0 0 16 0V67.31l26.34 26.35a8 8 0 0 0 11.32-11.32"></svg:path>`,
})
export class PhSortDescendingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSoundcloudLogoIcon],svg[ph-soundcloud-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 120v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0m24-32a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8m32-8a8 8 0 0 0-8 8v104a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m32-32a8 8 0 0 0-8 8v136a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8m110.84 58.34A80 80 0 0 0 144 40a8 8 0 0 0 0 16a63.76 63.76 0 0 1 63.68 57.53a8 8 0 0 0 6.44 7A32 32 0 0 1 208 184h-64a8 8 0 0 0 0 16h64a48 48 0 0 0 14.84-93.66"></svg:path>`,
})
export class PhSoundcloudLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpadeIcon],svg[ph-spade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M131.58 16.85a8 8 0 0 0-7.16 0C120.32 18.9 24 67.84 24 136a56 56 0 0 0 74.15 53l-9.81 32.7A8 8 0 0 0 96 232h64a8 8 0 0 0 7.66-10.3l-9.81-32.7A56 56 0 0 0 232 136c0-68.16-96.32-117.1-100.42-119.15M176 176a40 40 0 0 1-26.29-9.85a8 8 0 0 0-12.92 8.33L149.25 216h-42.5l12.46-41.52a8 8 0 0 0-12.92-8.33A40 40 0 0 1 40 136c0-29.88 24.41-56.55 44.89-73.66A279 279 0 0 1 128 33.06a279 279 0 0 1 43.11 29.28c37.1 31 44.89 57.17 44.89 73.66a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhSpadeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSparkleIcon],svg[ph-sparkle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M197.58 129.06L146 110l-19-51.62a15.92 15.92 0 0 0-29.88 0L78 110l-51.62 19a15.92 15.92 0 0 0 0 29.88L78 178l19 51.62a15.92 15.92 0 0 0 29.88 0L146 178l51.62-19a15.92 15.92 0 0 0 0-29.88ZM137 164.22a8 8 0 0 0-4.74 4.74L112 223.85L91.78 169a8 8 0 0 0-4.78-4.78L32.15 144L87 123.78a8 8 0 0 0 4.78-4.78L112 64.15L132.22 119a8 8 0 0 0 4.74 4.74L191.85 144ZM144 40a8 8 0 0 1 8-8h16V16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V48h-16a8 8 0 0 1-8-8m104 48a8 8 0 0 1-8 8h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSparkleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerHifiIcon],svg[ph-speaker-hifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 24H64a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H64V40h128ZM116 76a12 12 0 1 1 12 12a12 12 0 0 1-12-12m12 116a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-64a24 24 0 1 1-24 24a24 24 0 0 1 24-24"></svg:path>`,
})
export class PhSpeakerHifiIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerHighIcon],svg[ph-speaker-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M155.51 24.81a8 8 0 0 0-8.42.88L77.25 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 160 224V32a8 8 0 0 0-4.49-7.19M32 96h40v64H32Zm112 111.64l-56-43.55V91.91l56-43.55Zm54-106.08a40 40 0 0 1 0 52.88a8 8 0 0 1-12-10.58a24 24 0 0 0 0-31.72a8 8 0 0 1 12-10.58M248 128a79.9 79.9 0 0 1-20.37 53.34a8 8 0 0 1-11.92-10.67a64 64 0 0 0 0-85.33a8 8 0 1 1 11.92-10.67A79.83 79.83 0 0 1 248 128"></svg:path>`,
})
export class PhSpeakerHighIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerLowIcon],svg[ph-speaker-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M155.51 24.81a8 8 0 0 0-8.42.88L77.25 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 160 224V32a8 8 0 0 0-4.49-7.19M32 96h40v64H32Zm112 111.64l-56-43.55V91.91l56-43.55ZM208 128a39.93 39.93 0 0 1-10 26.46a8 8 0 0 1-12-10.58a24 24 0 0 0 0-31.72a8 8 0 1 1 12-10.58A40 40 0 0 1 208 128"></svg:path>`,
})
export class PhSpeakerLowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerNoneIcon],svg[ph-speaker-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M155.51 24.81a8 8 0 0 0-8.42.88L77.25 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 160 224V32a8 8 0 0 0-4.49-7.19M32 96h40v64H32Zm112 111.64l-56-43.55V91.91l56-43.55Z"></svg:path>`,
})
export class PhSpeakerNoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleHighIcon],svg[ph-speaker-simple-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M163.51 24.81a8 8 0 0 0-8.42.88L85.25 80H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 168 224V32a8 8 0 0 0-4.49-7.19M152 207.64l-59.09-45.95A7.94 7.94 0 0 0 88 160H40V96h48a7.94 7.94 0 0 0 4.91-1.69L152 48.36ZM208 104v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0m32-16v80a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhSpeakerSimpleHighIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleLowIcon],svg[ph-speaker-simple-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M163.51 24.81a8 8 0 0 0-8.42.88L85.25 80H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 168 224V32a8 8 0 0 0-4.49-7.19M152 207.64l-59.09-45.95A7.94 7.94 0 0 0 88 160H40V96h48a7.94 7.94 0 0 0 4.91-1.69L152 48.36ZM208 104v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhSpeakerSimpleLowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleNoneIcon],svg[ph-speaker-simple-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M163.51 24.81a8 8 0 0 0-8.42.88L85.25 80H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 168 224V32a8 8 0 0 0-4.49-7.19M152 207.64l-59.09-45.95A7.94 7.94 0 0 0 88 160H40V96h48a7.94 7.94 0 0 0 4.91-1.69L152 48.36Z"></svg:path>`,
})
export class PhSpeakerSimpleNoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleSlashIcon],svg[ph-speaker-simple-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 152v-48a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0m40-72a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m-10.08 130.62a8 8 0 1 1-11.84 10.76L168 175.09V224a8 8 0 0 1-12.91 6.31L85.25 176H40a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h41.55L50.08 45.38a8 8 0 0 1 11.84-10.76ZM152 157.49L96.1 96H40v64h48a7.94 7.94 0 0 1 4.91 1.69L152 207.64Zm-26.94-88.18l26.94-21v58.47a8 8 0 0 0 16 0V32a8 8 0 0 0-12.91-6.31l-39.85 31a8 8 0 0 0 9.82 12.63Z"></svg:path>`,
})
export class PhSpeakerSimpleSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleXIcon],svg[ph-speaker-simple-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M163.51 24.81a8 8 0 0 0-8.42.88L85.25 80H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 168 224V32a8 8 0 0 0-4.49-7.19M152 207.64l-59.09-45.95A7.94 7.94 0 0 0 88 160H40V96h48a7.94 7.94 0 0 0 4.91-1.69L152 48.36Zm101.66-61.3a8 8 0 0 1-11.32 11.32L224 139.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L212.69 128l-18.35-18.34a8 8 0 0 1 11.32-11.32L224 116.69l18.34-18.35a8 8 0 0 1 11.32 11.32L235.31 128Z"></svg:path>`,
})
export class PhSpeakerSimpleXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSlashIcon],svg[ph-speaker-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62a8 8 0 1 0-11.84 10.76L73.55 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 160 224v-48.91l42.08 46.29a8 8 0 1 0 11.84-10.76ZM32 96h40v64H32Zm112 111.64l-56-43.55v-68.2l56 61.6Zm42-63.77a24 24 0 0 0 0-31.72a8 8 0 1 1 12-10.57a40 40 0 0 1 0 52.88a8 8 0 0 1-12-10.59m-80.16-76a8 8 0 0 1 1.4-11.23l39.85-31A8 8 0 0 1 160 32v74.83a8 8 0 0 1-16 0V48.36l-26.94 21a8 8 0 0 1-11.22-1.45ZM248 128a79.9 79.9 0 0 1-20.37 53.34a8 8 0 0 1-11.92-10.67a64 64 0 0 0 0-85.33a8 8 0 1 1 11.92-10.67A79.83 79.83 0 0 1 248 128"></svg:path>`,
})
export class PhSpeakerSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerXIcon],svg[ph-speaker-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M155.51 24.81a8 8 0 0 0-8.42.88L77.25 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 160 224V32a8 8 0 0 0-4.49-7.19M32 96h40v64H32Zm112 111.64l-56-43.55V91.91l56-43.55Zm101.66-61.3a8 8 0 0 1-11.32 11.32L216 139.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L204.69 128l-18.35-18.34a8 8 0 0 1 11.32-11.32L216 116.69l18.34-18.35a8 8 0 0 1 11.32 11.32L227.31 128Z"></svg:path>`,
})
export class PhSpeakerXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeedometerIcon],svg[ph-speedometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m114.34 154.34l96-96a8 8 0 0 1 11.32 11.32l-96 96a8 8 0 0 1-11.32-11.32M128 88a63.9 63.9 0 0 1 20.44 3.33a8 8 0 1 0 5.11-15.16a80 80 0 0 0-105.06 84.71a8 8 0 0 0 7.94 7.12c.29 0 .59 0 .89-.05a8 8 0 0 0 7.07-8.83A65 65 0 0 1 64 152a64.07 64.07 0 0 1 64-64m99.74 13a8 8 0 0 0-14.24 7.3a96.27 96.27 0 0 1 5 75.71l-181.1-.07A96.24 96.24 0 0 1 128 56h.88a95 95 0 0 1 42.82 10.5a8 8 0 1 0 7.3-14.23a112 112 0 0 0-156.66 137A16.07 16.07 0 0 0 37.46 200h181.07a16 16 0 0 0 15.11-10.71a112.35 112.35 0 0 0-5.9-88.3Z"></svg:path>`,
})
export class PhSpeedometerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSphereIcon],svg[ph-sphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m88 104c0 6-17 16.23-48.77 21.17c.51-7 .77-14.08.77-21.17c0-32.24-5.35-64.72-15.74-84.6A88.17 88.17 0 0 1 216 128m-88-88c8.15 0 24 31.06 24 88c0 8.24-.34 15.92-.93 23.07c-7.15.59-14.83.93-23.07.93c-56.94 0-88-15.85-88-24a88.1 88.1 0 0 1 88-88M43.4 152.26C63.28 162.65 95.76 168 128 168c7.09 0 14.19-.26 21.17-.77C144.23 199 134 216 128 216a88.17 88.17 0 0 1-84.6-63.74m108.86 60.34c6.29-12 10.73-28.67 13.26-47.08c18.41-2.53 35-7 47.08-13.26a88.4 88.4 0 0 1-60.34 60.34"></svg:path>`,
})
export class PhSphereIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpinnerIcon],svg[ph-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 32v32a8 8 0 0 1-16 0V32a8 8 0 0 1 16 0m37.25 58.75a8 8 0 0 0 5.66-2.35l22.63-22.62a8 8 0 0 0-11.32-11.32L167.6 77.09a8 8 0 0 0 5.65 13.66M224 120h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m-45.09 47.6a8 8 0 0 0-11.31 11.31l22.62 22.63a8 8 0 0 0 11.32-11.32ZM128 184a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m-50.91-16.4l-22.63 22.62a8 8 0 0 0 11.32 11.32l22.62-22.63a8 8 0 0 0-11.31-11.31M72 128a8 8 0 0 0-8-8H32a8 8 0 0 0 0 16h32a8 8 0 0 0 8-8m-6.22-73.54a8 8 0 0 0-11.32 11.32L77.09 88.4A8 8 0 0 0 88.4 77.09Z"></svg:path>`,
})
export class PhSpinnerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpinnerBallIcon],svg[ph-spinner-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m87.82 98.46c-28.34 20-49.57 14.68-71.87 4.39c20.06-14.19 38.86-32.21 39.53-67.11a87.92 87.92 0 0 1 32.34 62.72m-48.71-73.27C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.9 87.9 0 0 1 70.5 3.4Zm-87.79 5.54c31.45 14.55 37.47 35.58 39.71 60c-22.33-10.29-47.35-17.59-77.93-.68a88.18 88.18 0 0 1 38.22-59.32m-39.14 78.81c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m48.71 73.27C85.76 172.29 101 156.56 121 142.39c2.25 24.48 8.44 49.8 38.37 67.82a87.9 87.9 0 0 1-70.5-3.4Zm87.79-5.54c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"></svg:path>`,
})
export class PhSpinnerBallIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpinnerGapIcon],svg[ph-spinner-gap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 32v32a8 8 0 0 1-16 0V32a8 8 0 0 1 16 0m88 88h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m-45.09 47.6a8 8 0 0 0-11.31 11.31l22.62 22.63a8 8 0 0 0 11.32-11.32ZM128 184a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m-50.91-16.4l-22.63 22.62a8 8 0 0 0 11.32 11.32l22.62-22.63a8 8 0 0 0-11.31-11.31M72 128a8 8 0 0 0-8-8H32a8 8 0 0 0 0 16h32a8 8 0 0 0 8-8m-6.22-73.54a8 8 0 0 0-11.32 11.32L77.09 88.4A8 8 0 0 0 88.4 77.09Z"></svg:path>`,
})
export class PhSpinnerGapIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpiralIcon],svg[ph-spiral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 144a8 8 0 0 1-16 0a96.11 96.11 0 0 0-96-96a88.1 88.1 0 0 0-88 88a80.09 80.09 0 0 0 80 80a72.08 72.08 0 0 0 72-72a64.07 64.07 0 0 0-64-64a56.06 56.06 0 0 0-56 56a48.05 48.05 0 0 0 48 48a40 40 0 0 0 40-40a32 32 0 0 0-32-32a24 24 0 0 0-24 24a16 16 0 0 0 16 16a8 8 0 0 0 8-8a8 8 0 0 1 0-16a16 16 0 0 1 16 16a24 24 0 0 1-24 24a32 32 0 0 1-32-32a40 40 0 0 1 40-40a48.05 48.05 0 0 1 48 48a56.06 56.06 0 0 1-56 56a64.07 64.07 0 0 1-64-64a72.08 72.08 0 0 1 72-72a80.09 80.09 0 0 1 80 80a88.1 88.1 0 0 1-88 88a96.11 96.11 0 0 1-96-96A104.11 104.11 0 0 1 136 32a112.12 112.12 0 0 1 112 112"></svg:path>`,
})
export class PhSpiralIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSplitHorizontalIcon],svg[ph-split-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 48v160a8 8 0 0 1-16 0v-72H43.31l18.35 18.34a8 8 0 0 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32L43.31 120H96V48a8 8 0 0 1 16 0m125.66 74.34l-32-32a8 8 0 0 0-11.32 11.32L212.69 120H160V48a8 8 0 0 0-16 0v160a8 8 0 0 0 16 0v-72h52.69l-18.35 18.34a8 8 0 0 0 11.32 11.32l32-32a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhSplitHorizontalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSplitVerticalIcon],svg[ph-split-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 152a8 8 0 0 1-8 8h-72v52.69l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 212.69V160H48a8 8 0 0 1 0-16h160a8 8 0 0 1 8 8M48 112h160a8 8 0 0 0 0-16h-72V43.31l18.34 18.35a8 8 0 0 0 11.32-11.32l-32-32a8 8 0 0 0-11.32 0l-32 32a8 8 0 0 0 11.32 11.32L120 43.31V96H48a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhSplitVerticalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpotifyLogoIcon],svg[ph-spotify-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m31.07-46.26a8 8 0 0 1-10.81 3.33a42.79 42.79 0 0 0-40.52 0a8 8 0 0 1-7.48-14.14a59.33 59.33 0 0 1 55.48 0a8 8 0 0 1 3.33 10.81m32-56a8 8 0 0 1-10.83 3.29a110.62 110.62 0 0 0-104.46 0a8 8 0 0 1-7.54-14.12a126.67 126.67 0 0 1 119.54 0a8 8 0 0 1 3.28 10.85Zm-16 28a8 8 0 0 1-10.82 3.3a77 77 0 0 0-72.48 0a8 8 0 0 1-7.52-14.12a93 93 0 0 1 87.52 0a8 8 0 0 1 3.29 10.84Z"></svg:path>`,
})
export class PhSpotifyLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSprayBottleIcon],svg[ph-spray-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 80a8 8 0 0 0 8-8a56.06 56.06 0 0 0-56-56H80a16 16 0 0 0-16 16v48a24 24 0 0 1-24 24a8 8 0 0 0 0 16a40 40 0 0 0 40-40h32v24.62a23.87 23.87 0 0 1-9 18.74l-16 12.79a39.79 39.79 0 0 0-15 31.23V224a16 16 0 0 0 16 16h104a16 16 0 0 0 16-16v-12.53A270.9 270.9 0 0 0 174 80ZM80 32h72a40.08 40.08 0 0 1 39.2 32H80Zm112 179.47V224H88v-56.62a23.87 23.87 0 0 1 9-18.74l16-12.79a39.79 39.79 0 0 0 15-31.23V80h27.52A254.86 254.86 0 0 1 192 211.47"></svg:path>`,
})
export class PhSprayBottleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareIcon],svg[ph-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160z"></svg:path>`,
})
export class PhSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareHalfIcon],svg[ph-square-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-64 80h64v16h-64Zm0-16V88h64v16Zm0 48h64v16h-64Zm64-80h-64V56h64ZM56 56h64v144H56Zm144 144h-64v-16h64z"></svg:path>`,
})
export class PhSquareHalfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareHalfBottomIcon],svg[ph-square-half-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v64H56V56Zm-96 80v64H88v-64Zm16 0h16v64h-16Zm32 0h16v64h-16Zm-96 0h16v64H56Zm144 64h-16v-64h16z"></svg:path>`,
})
export class PhSquareHalfBottomIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareLogoIcon],svg[ph-square-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM160 88H96a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8m-8 64h-48v-48h48Z"></svg:path>`,
})
export class PhSquareLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareSplitHorizontalIcon],svg[ph-square-split-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M56 56h64v144H56Zm144 144h-64V56h64z"></svg:path>`,
})
export class PhSquareSplitHorizontalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareSplitVerticalIcon],svg[ph-square-split-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v64H56V56Zm0 144H56v-64h144z"></svg:path>`,
})
export class PhSquareSplitVerticalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquaresFourIcon],svg[ph-squares-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 40H56a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 64H56V56h48zm96-64h-48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 64h-48V56h48zm-96 32H56a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64H56v-48h48zm96-64h-48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64h-48v-48h48z"></svg:path>`,
})
export class PhSquaresFourIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackIcon],svg[ph-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.91 172a8 8 0 0 1-2.91 10.91l-96 56a8 8 0 0 1-8.06 0l-96-56A8 8 0 0 1 36 169.09l92 53.65l92-53.65a8 8 0 0 1 10.91 2.91M220 121.09l-92 53.65l-92-53.65a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 1 0-8.06-13.82M24 80a8 8 0 0 1 4-6.91l96-56a8 8 0 0 1 8.06 0l96 56a8 8 0 0 1 0 13.82l-96 56a8 8 0 0 1-8.06 0l-96-56A8 8 0 0 1 24 80m23.88 0L128 126.74L208.12 80L128 33.26Z"></svg:path>`,
})
export class PhStackIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackMinusIcon],svg[ph-stack-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.91 124a8 8 0 0 1-2.91 10.91l-96 56a8 8 0 0 1-8.06 0l-96-56A8 8 0 0 1 36 121.09l92 53.65l92-53.65a8 8 0 0 1 10.91 2.91M24 80a8 8 0 0 1 4-6.91l96-56a8 8 0 0 1 8.06 0l96 56a8 8 0 0 1 0 13.82l-96 56a8 8 0 0 1-8.06 0l-96-56A8 8 0 0 1 24 80m23.88 0L128 126.74L208.12 80L128 33.26ZM232 192h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m-92 23.76l-12 7l-92-53.67a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l16-9.33a8 8 0 1 0-8.06-13.82"></svg:path>`,
})
export class PhStackMinusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackOverflowLogoIcon],svg[ph-stack-overflow-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 152.09V216a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-63.91a8 8 0 0 1 16 0V208h144v-55.91a8 8 0 0 1 16 0m-128 32h80a8 8 0 1 0 0-16H88a8 8 0 1 0 0 16m4.88-53l77.27 20.68a8 8 0 0 0 2.08.28a8 8 0 0 0 2.07-15.71L97 115.61A8 8 0 1 0 92.88 131Zm18.45-49.93l69.28 40a8 8 0 0 0 10.93-2.93a8 8 0 0 0-2.93-10.91l-69.28-40.05a8 8 0 1 0-8 13.84Zm87.33 13A8 8 0 1 0 210 82.84l-56.57-56.5a8 8 0 0 0-11.32 11.3Z"></svg:path>`,
})
export class PhStackOverflowLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackPlusIcon],svg[ph-stack-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.91 124a8 8 0 0 1-2.91 10.91l-96 56a8 8 0 0 1-8.06 0l-96-56A8 8 0 0 1 36 121.09l92 53.65l92-53.65a8 8 0 0 1 10.91 2.91M24 80a8 8 0 0 1 4-6.91l96-56a8 8 0 0 1 8.06 0l96 56a8 8 0 0 1 0 13.82l-96 56a8 8 0 0 1-8.06 0l-96-56A8 8 0 0 1 24 80m23.88 0L128 126.74L208.12 80L128 33.26ZM232 192h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16m-92 23.76l-12 7l-92-53.67a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l16-9.33a8 8 0 1 0-8.06-13.82"></svg:path>`,
})
export class PhStackPlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackSimpleIcon],svg[ph-stack-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 111l112 64a8 8 0 0 0 7.94 0l112-64a8 8 0 0 0 0-13.9l-112-64a8 8 0 0 0-7.94 0l-112 64a8 8 0 0 0 0 13.9m116-61.79L223.87 104L128 158.79L32.13 104ZM246.94 140a8 8 0 0 1-2.94 11l-112 64a8 8 0 0 1-7.94 0L12 151a8 8 0 0 1 8-13.95l108 61.74l108-61.74a8 8 0 0 1 10.94 2.95"></svg:path>`,
})
export class PhStackSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStairsIcon],svg[ph-stairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-48 120h48v24h-88v-24Zm8-16v-24h40v24Zm40-88v48h-48a8 8 0 0 0-8 8v32h-40a8 8 0 0 0-8 8v32H56V40Zm0 176H56v-32h144z"></svg:path>`,
})
export class PhStairsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStampIcon],svg[ph-stamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 224a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m0-80v40a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h56.43L88.72 54.71A32 32 0 0 1 120 16h16a32 32 0 0 1 31.29 38.71L151.57 128H208a16 16 0 0 1 16 16m-103.21-16h14.42l16.43-76.65A16 16 0 0 0 136 32h-16a16 16 0 0 0-15.65 19.35ZM208 184v-40H48v40z"></svg:path>`,
})
export class PhStampIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStandardDefinitionIcon],svg[ph-standard-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 72a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h24a56 56 0 0 0 0-112Zm64 56a40 40 0 0 1-40 40h-16V88h16a40 40 0 0 1 40 40M24 48a8 8 0 0 1 8-8h192a8 8 0 0 1 0 16H32a8 8 0 0 1-8-8m208 160a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8m-128-56c0-9.48-8.61-13-26.88-18.26c-15.75-4.54-35.34-10.19-35.34-29.74c0-18.24 16.43-32 38.22-32c15.72 0 29.18 7.3 35.12 19a8 8 0 1 1-14.27 7.22C97.64 91.93 89.65 88 80 88c-12.67 0-22.22 6.88-22.22 16c0 7 9 10.1 23.77 14.36C97.78 123 120 129.45 120 152c0 17.64-17.94 32-40 32s-40-14.36-40-32a8 8 0 0 1 16 0c0 8.67 11 16 24 16s24-7.33 24-16"></svg:path>`,
})
export class PhStandardDefinitionIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarIcon],svg[ph-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.18 97.26A16.38 16.38 0 0 0 224.92 86l-59-4.76l-22.78-55.09a16.36 16.36 0 0 0-30.27 0L90.11 81.23L31.08 86a16.46 16.46 0 0 0-9.37 28.86l45 38.83L53 211.75a16.38 16.38 0 0 0 24.5 17.82l50.5-31.08l50.53 31.08A16.4 16.4 0 0 0 203 211.75l-13.76-58.07l45-38.83a16.43 16.43 0 0 0 4.94-17.59m-15.34 5.47l-48.7 42a8 8 0 0 0-2.56 7.91l14.88 62.8a.37.37 0 0 1-.17.48c-.18.14-.23.11-.38 0l-54.72-33.65a8 8 0 0 0-8.38 0l-54.72 33.67c-.15.09-.19.12-.38 0a.37.37 0 0 1-.17-.48l14.88-62.8a8 8 0 0 0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16a8 8 0 0 0 6.72-4.94l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153 91.86a8 8 0 0 0 6.75 4.92l63.92 5.16c.15 0 .24 0 .33.29s0 .4-.16.5"></svg:path>`,
})
export class PhStarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarAndCrescentIcon],svg[ph-star-and-crescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M155.64 199.28a80 80 0 0 1 0-142.56a8 8 0 0 0 0-14.25A94.9 94.9 0 0 0 112 32a96 96 0 0 0 0 192a94.9 94.9 0 0 0 43.64-10.47a8 8 0 0 0 0-14.25M112 208a80 80 0 1 1 22.4-156.84a96.08 96.08 0 0 0 0 153.68A79.8 79.8 0 0 1 112 208m139.17-87.35l-26.5-11.43l-2.31-29.84a8 8 0 0 0-14.14-4.47l-18.59 22.51l-27.71-6.85a8 8 0 0 0-8.81 11.82L168.18 128l-15.07 25.61a8 8 0 0 0 8.81 11.82l27.71-6.85l18.59 22.51a8 8 0 0 0 14.14-4.47l2.31-29.84l26.5-11.43a8 8 0 0 0 0-14.7M213.89 134a8 8 0 0 0-4.8 6.73l-1.15 14.89l-9.18-11.11a8 8 0 0 0-6.17-2.91a8.4 8.4 0 0 0-1.92.23l-14.12 3.5l7.81-13.27a8 8 0 0 0 0-8.12l-7.81-13.27l14.12 3.5a8 8 0 0 0 8.09-2.68l9.18-11.11l1.15 14.89a8 8 0 0 0 4.8 6.73l13.92 6Z"></svg:path>`,
})
export class PhStarAndCrescentIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarFourIcon],svg[ph-star-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.5 113l-63.44-23.06L143 26.5a16 16 0 0 0-30 0L89.94 89.94L26.5 113a16 16 0 0 0 0 30l63.44 23.07L113 229.5a16 16 0 0 0 30 0l23.07-63.44L229.5 143a16 16 0 0 0 0-30m-72.42 39.3a8 8 0 0 0-4.78 4.78L128 223.9l-24.3-66.82a8 8 0 0 0-4.78-4.78L32.1 128l66.82-24.3a8 8 0 0 0 4.78-4.78L128 32.1l24.3 66.82a8 8 0 0 0 4.78 4.78L223.9 128Z"></svg:path>`,
})
export class PhStarFourIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarHalfIcon],svg[ph-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.29 114.85l-5.06 4.37a8 8 0 0 1-10.45-12.12l5.06-4.37c.12-.1.23-.19.13-.5s-.18-.27-.34-.29l-8.27-.67a8 8 0 1 1 1.29-15.94l8.27.66a16.46 16.46 0 0 1 9.37 28.86m-61.71 37.79l4.08 17.22a8 8 0 0 0 7.78 6.16a8 8 0 0 0 1.85-.22a8 8 0 0 0 5.94-9.63l-3-12.49l8-6.86a8 8 0 0 0-10.45-12.12l-11.64 10a8 8 0 0 0-2.56 7.94m29.13 53.53a8 8 0 0 0-15.57 3.69l1.32 5.58a.37.37 0 0 1-.17.48c-.18.14-.23.11-.38 0l-6.72-4.13a8 8 0 0 0-8.38 13.63l6.72 4.13a16.4 16.4 0 0 0 24.47-17.8ZM175.36 98.05l-15.64-1.27a8 8 0 0 1-6.72-4.92l-17-41.08v133.85l7.43 4.57a8 8 0 1 1-8.38 13.63l-7.05-4.34l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l10.76.87a8 8 0 1 1-1.29 16ZM120 184.63V50.78l-17 41.08a8 8 0 0 1-6.75 4.92l-63.92 5.16c-.15 0-.24 0-.33.29a.39.39 0 0 0 .13.51l48.7 42a8 8 0 0 1 2.56 7.91l-14.88 62.8a.37.37 0 0 0 .17.48c.18.14.23.11.38 0Z"></svg:path>`,
})
export class PhStarHalfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarOfDavidIcon],svg[ph-star-of-david-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.21 128L231 76a8 8 0 0 0-7-12h-59.35L135 12a8 8 0 0 0-13.9 0L91.33 64H32a8 8 0 0 0-6.95 12l29.72 52l-29.72 52a8 8 0 0 0 7 12h59.28l29.72 52a8 8 0 0 0 13.9 0l29.7-52H224a8 8 0 0 0 7-12Zm9-48L192 111.88L173.79 80Zm-27.42 48l-27.42 48h-54.75L73.2 128l27.42-48h54.75ZM128 32.12L146.22 64h-36.45ZM45.78 80h36.41L64 111.88Zm0 95.92L64 144.12L82.19 176ZM128 223.88L109.77 192h36.45ZM173.79 176L192 144.12L210.21 176Z"></svg:path>`,
})
export class PhStarOfDavidIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSteamLogoIcon],svg[ph-steam-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-10.61 161.92l62-50.55a36 36 0 1 0-51.14-50.23l-43 52.73L45.28 98A88 88 0 1 1 40 128a90 90 0 0 1 .8-11.88l34.57 34.57a28 28 0 0 0 42 35.23Zm4.19-67.37a36.18 36.18 0 0 0 23.87 23.87l-18.26 14.89a28.11 28.11 0 0 0-20.5-20.5ZM156 128a20 20 0 1 1 20-20a20 20 0 0 1-20 20m-56 24a12 12 0 1 1-12 12a12 12 0 0 1 12-12"></svg:path>`,
})
export class PhSteamLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSteeringWheelIcon],svg[ph-steering-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 152a12 12 0 1 1 12-12a12 12 0 0 1-12 12m104-24A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-192 0v.33a135.93 135.93 0 0 1 176 0V128a88 88 0 0 0-176 0m67.5 85.58L90.45 168H49.63a88.35 88.35 0 0 0 57.87 45.58M128 216h2.49l20.07-53.57a16.07 16.07 0 0 1 15-10.39h47.12c.38-1.31.72-2.64 1-4a120 120 0 0 0-171.4 0c.31 1.34.65 2.67 1 4h47.17a16.08 16.08 0 0 1 15 10.4l20 53.56zm78.37-48h-40.82l-17.09 45.59A88.34 88.34 0 0 0 206.37 168"></svg:path>`,
})
export class PhSteeringWheelIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStepsIcon],svg[ph-steps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 56a8 8 0 0 1-8 8h-48v40a8 8 0 0 1-8 8h-48v40a8 8 0 0 1-8 8H80v40a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h48v-40a8 8 0 0 1 8-8h48v-40a8 8 0 0 1 8-8h48V56a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhStepsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStethoscopeIcon],svg[ph-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 160a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-4.55 39.29A48.08 48.08 0 0 1 168 240h-24a48.05 48.05 0 0 1-48-48v-40.51A64 64 0 0 1 40 88V40a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16H56v40a48 48 0 0 0 48.64 48c26.11-.34 47.36-22.25 47.36-48.83V48h-16a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8v47.17c0 32.84-24.53 60.29-56 64.31V192a32 32 0 0 0 32 32h24a32.06 32.06 0 0 0 31.22-25a40 40 0 1 1 16.23.27ZM232 160a24 24 0 1 0-24 24a24 24 0 0 0 24-24"></svg:path>`,
})
export class PhStethoscopeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStickerIcon],svg[ph-sticker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 32H88a56.06 56.06 0 0 0-56 56v80a56.06 56.06 0 0 0 56 56h48a8 8 0 0 0 2.53-.41c26.23-8.75 76.31-58.83 85.06-85.06A8 8 0 0 0 224 136V88a56.06 56.06 0 0 0-56-56M48 168V88a40 40 0 0 1 40-40h80a40 40 0 0 1 40 40v40h-24a56.06 56.06 0 0 0-56 56v24H88a40 40 0 0 1-40-40m96 35.14V184a40 40 0 0 1 40-40h19.14C191 163.5 163.5 191 144 203.14"></svg:path>`,
})
export class PhStickerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStoolIcon],svg[ph-stool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h6.64L56.1 222.75a8 8 0 0 0 6.65 9.15a8 8 0 0 0 1.25.1a8 8 0 0 0 7.89-6.75L79.68 176h96.64l7.78 49.25A8 8 0 0 0 192 232a8 8 0 0 0 1.26-.1a8 8 0 0 0 6.65-9.15L177.36 80H184a16 16 0 0 0 16-16M72 40h112v24H72Zm101.79 120H82.21l12.63-80h66.32Z"></svg:path>`,
})
export class PhStoolIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStopIcon],svg[ph-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H56V56h144z"></svg:path>`,
})
export class PhStopIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStopCircleIcon],svg[ph-stop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m32-128H96a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8m-8 64h-48v-48h48Z"></svg:path>`,
})
export class PhStopCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStorefrontIcon],svg[ph-storefront-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 96a8 8 0 0 0-.3-2.2l-14.35-50.2A16.07 16.07 0 0 0 202 32H54a16.07 16.07 0 0 0-15.35 11.6L24.31 93.8A8 8 0 0 0 24 96v16a40 40 0 0 0 16 32v72a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-72a40 40 0 0 0 16-32zM54 48h148l11.42 40H42.61Zm50 56h48v8a24 24 0 0 1-48 0Zm-16 0v8a24 24 0 0 1-35.12 21.26a8 8 0 0 0-1.82-1.06A24 24 0 0 1 40 112v-8Zm112 104H56v-56.8a40.6 40.6 0 0 0 8 .8a40 40 0 0 0 32-16a40 40 0 0 0 64 0a40 40 0 0 0 32 16a40.6 40.6 0 0 0 8-.8Zm4.93-75.8a8 8 0 0 0-1.8 1.05A24 24 0 0 1 168 112v-8h48v8a24 24 0 0 1-11.07 20.2"></svg:path>`,
})
export class PhStorefrontIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStrategyIcon],svg[ph-strategy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 152a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 56a20 20 0 1 1 20-20a20 20 0 0 1-20 20M42.34 106.34L56.69 92L42.34 77.66a8 8 0 0 1 11.32-11.32L68 80.69l14.34-14.35a8 8 0 0 1 11.32 11.32L79.31 92l14.35 14.34a8 8 0 0 1-11.32 11.32L68 103.31l-14.34 14.35a8 8 0 0 1-11.32-11.32m187.32 96a8 8 0 0 1-11.32 11.32L204 199.31l-14.34 14.35a8 8 0 0 1-11.32-11.32L192.69 188l-14.35-14.34a8 8 0 0 1 11.32-11.32L204 176.69l14.34-14.35a8 8 0 0 1 11.32 11.32L215.31 188Zm-45.19-89.51c-6.18 22.33-25.32 41.63-46.53 46.93a8 8 0 0 1-1.94.24a8 8 0 0 1-1.93-15.76c15.63-3.91 30.35-18.91 35-35.68c3.19-11.5 3.22-29-14.71-46.9L152 59.31V80a8 8 0 0 1-16 0V40a8 8 0 0 1 8-8h40a8 8 0 0 1 0 16h-20.69l2.35 2.34c18.24 18.25 24.92 40.44 18.81 62.49"></svg:path>`,
})
export class PhStrategyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStripeLogoIcon],svg[ph-stripe-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 152c0 17.65-17.94 32-40 32s-40-14.35-40-32a8 8 0 0 1 16 0c0 8.67 11 16 24 16s24-7.33 24-16c0-9.48-8.61-13-26.88-18.26c-15.75-4.54-35.34-10.19-35.34-29.74c0-18.24 16.43-32 38.22-32c15.72 0 29.18 7.3 35.12 19a8 8 0 1 1-14.27 7.22C145.64 91.94 137.65 88 128 88c-12.67 0-22.22 6.88-22.22 16c0 7 9 10.1 23.77 14.36C145.78 123 168 129.45 168 152m56-104v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 160V48H48v160z"></svg:path>`,
})
export class PhStripeLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStudentIcon],svg[ph-student-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32A8 8 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.9 47.9 0 0 1 176 120m-48-32.43L57.3 64L128 40.43L198.7 64Z"></svg:path>`,
})
export class PhStudentIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubsetOfIcon],svg[ph-subset-of-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 208a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h152a8 8 0 0 1 8 8m-8-48h-96a48 48 0 0 1 0-96h96a8 8 0 0 0 0-16h-96a64 64 0 0 0 0 128h96a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhSubsetOfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubsetProperOfIcon],svg[ph-subset-proper-of-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 208a8 8 0 0 1-8 8h-72a88 88 0 0 1 0-176h72a8 8 0 0 1 0 16h-72a72 72 0 0 0 0 144h72a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSubsetProperOfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubtitlesIcon],svg[ph-subtitles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H32V64h192zM48 136a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H56a8 8 0 0 1-8-8m160 0a8 8 0 0 1-8 8h-96a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8m-48 32a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8m48 0a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSubtitlesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubtitlesSlashIcon],svg[ph-subtitles-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 136a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H56a8 8 0 0 1-8-8m165.92 74.62a8 8 0 1 1-11.84 10.76L189.92 208H32a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h12.46l-2.38-2.62a8 8 0 1 1 11.84-10.76ZM175.37 192l-14.55-16H56a8 8 0 0 1 0-16h90.28l-14.55-16H104a8 8 0 0 1 0-16h13.19L59 64H32v128ZM200 144a8 8 0 0 0 0-16h-21.48a8 8 0 1 0 0 16Zm24-96H105.79a8 8 0 0 0 0 16H224v130.83a8 8 0 1 0 16 0V64a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhSubtitlesSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubtractIcon],svg[ph-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174.63 81.35a80 80 0 1 0-93.28 93.28a80 80 0 1 0 93.28-93.28M224 160c0 1.52-.07 3-.18 4.51l-50-50A80 80 0 0 0 176 98a63.81 63.81 0 0 1 48 62m-77.4-2.09l52.61 52.62A64 64 0 0 1 183 219.7l-51.86-51.86a80.5 80.5 0 0 0 15.46-9.93m11.31-11.31a80.5 80.5 0 0 0 9.93-15.44L219.7 183a64 64 0 0 1-9.17 16.19ZM32 96a64 64 0 1 1 64 64a64.07 64.07 0 0 1-64-64m66 80a80 80 0 0 0 16.5-2.13l50 50c-1.49.11-3 .18-4.51.18A63.81 63.81 0 0 1 98 176"></svg:path>`,
})
export class PhSubtractIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubtractSquareIcon],svg[ph-subtract-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 160V96a8 8 0 0 0-8-8h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8zm-60.69 48l-40-40h33.38l40 40Zm4.69-51.31v-33.38l40 40v33.38Zm40-16L171.31 104H208ZM48 48h104v104H48Zm56 123.31L140.69 208H104Z"></svg:path>`,
})
export class PhSubtractSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubwayIcon],svg[ph-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 96v112a8 8 0 0 1-16 0V96a56.06 56.06 0 0 0-56-56h-48a56.06 56.06 0 0 0-56 56v112a8 8 0 0 1-16 0V96a72.08 72.08 0 0 1 72-72h48a72.08 72.08 0 0 1 72 72m-40 0v72a24 24 0 0 1-19.29 23.53l2.45 4.89a8 8 0 0 1-14.32 7.16L147.06 192h-38.12l-5.78 11.58a8 8 0 0 1-14.32-7.16l2.45-4.89A24 24 0 0 1 72 168V96a24 24 0 0 1 24-24h64a24 24 0 0 1 24 24m-96 0v48h80V96a8 8 0 0 0-8-8H96a8 8 0 0 0-8 8m32 64v16h16v-16Zm-24 16h8v-16H88v8a8 8 0 0 0 8 8m72-8v-8h-16v16h8a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhSubwayIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSuitcaseIcon],svg[ph-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M96 48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm64 24v128H96V72ZM40 72h40v128H40Zm176 128h-40V72h40z"></svg:path>`,
})
export class PhSuitcaseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSuitcaseRollingIcon],svg[ph-suitcase-rolling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 88v96a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0m24-8a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m32 0a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m48-16v144a16 16 0 0 1-16 16h-16v16a8 8 0 0 1-16 0v-16H96v16a8 8 0 0 1-16 0v-16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h24V24a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v24h24a16 16 0 0 1 16 16M104 48h48V24a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8Zm88 160V64H64v144z"></svg:path>`,
})
export class PhSuitcaseRollingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSuitcaseSimpleIcon],svg[ph-suitcase-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M96 48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 24v72H40V72Zm0 128H40v-40h176z"></svg:path>`,
})
export class PhSuitcaseSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSunIcon],svg[ph-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64m-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48M58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhSunIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSunDimIcon],svg[ph-sun-dim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 40v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0m72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64m-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48M58.34 69.66a8 8 0 0 0 11.32-11.32l-8-8a8 8 0 0 0-11.32 11.32Zm0 116.68l-8 8a8 8 0 0 0 11.32 11.32l8-8a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l8-8a8 8 0 0 0-11.32-11.32l-8 8A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l8 8a8 8 0 0 0 11.32-11.32ZM40 120h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16m88 88a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8m96-88h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhSunDimIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSunHorizonIcon],svg[ph-sun-horizon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 152h-40.45a74 74 0 0 0 .45-8a72 72 0 0 0-144 0a74 74 0 0 0 .45 8H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-168-8a56 56 0 1 1 111.41 8H72.59a56 56 0 0 1-.59-8m144 56a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h160a8 8 0 0 1 8 8M72.84 43.58a8 8 0 0 1 14.32-7.16l8 16a8 8 0 0 1-14.32 7.16Zm-56 48.84a8 8 0 0 1 10.74-3.57l16 8a8 8 0 0 1-7.16 14.31l-16-8a8 8 0 0 1-3.58-10.74m192 15.16a8 8 0 0 1 3.58-10.73l16-8a8 8 0 1 1 7.16 14.31l-16 8a8 8 0 0 1-10.74-3.58m-48-55.16l8-16a8 8 0 0 1 14.32 7.16l-8 16a8 8 0 1 1-14.32-7.16"></svg:path>`,
})
export class PhSunHorizonIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSunglassesIcon],svg[ph-sunglasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40a8 8 0 0 0 0 16a16 16 0 0 1 16 16v56H40V72a16 16 0 0 1 16-16a8 8 0 0 0 0-16a32 32 0 0 0-32 32v92a44 44 0 0 0 88 0v-20h32v20a44 44 0 0 0 88 0V72a32 32 0 0 0-32-32m12.63 137.31L179.31 144H216v20a27.8 27.8 0 0 1-3.37 13.31M40 164v-16.69l41.31 41.32A28 28 0 0 1 40 164m56 0a27.8 27.8 0 0 1-3.37 13.31L59.31 144H96Zm64 0v-16.69l41.31 41.32A28 28 0 0 1 160 164"></svg:path>`,
})
export class PhSunglassesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSupersetOfIcon],svg[ph-superset-of-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 200a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h152a8 8 0 0 1 8 8m-64-48H56a8 8 0 0 0 0 16h96a64 64 0 0 0 0-128H56a8 8 0 0 0 0 16h96a48 48 0 0 1 0 96"></svg:path>`,
})
export class PhSupersetOfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSupersetProperOfIcon],svg[ph-superset-proper-of-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a88.1 88.1 0 0 1-88 88H64a8 8 0 0 1 0-16h72a72 72 0 0 0 0-144H64a8 8 0 0 1 0-16h72a88.1 88.1 0 0 1 88 88"></svg:path>`,
})
export class PhSupersetProperOfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwapIcon],svg[ph-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48v104a16 16 0 0 1-16 16H99.31l10.35 10.34a8 8 0 0 1-11.32 11.32l-24-24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L99.31 152H208V48H96v8a8 8 0 0 1-16 0v-8a16 16 0 0 1 16-16h112a16 16 0 0 1 16 16m-56 144a8 8 0 0 0-8 8v8H48V104h108.69l-10.35 10.34a8 8 0 0 0 11.32 11.32l24-24a8 8 0 0 0 0-11.32l-24-24a8 8 0 0 0-11.32 11.32L156.69 88H48a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhSwapIcon {
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
  selector: 'svg[phTramIcon],svg[ph-tram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 48h-48V24h32a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h32v24H72a32 32 0 0 0-32 32v104a32 32 0 0 0 32 32h8l-14.4 19.2a8 8 0 1 0 12.8 9.6L100 216h56l21.6 28.8a8 8 0 1 0 12.8-9.6L176 216h8a32 32 0 0 0 32-32V80a32 32 0 0 0-32-32M72 64h112a16 16 0 0 1 16 16v40H56V80a16 16 0 0 1 16-16m112 136H72a16 16 0 0 1-16-16v-48h144v48a16 16 0 0 1-16 16m-88-28a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTramIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTranslateIcon],svg[ph-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m247.15 212.42l-56-112a8 8 0 0 0-14.31 0l-21.71 43.43A88 88 0 0 1 108 126.93A103.65 103.65 0 0 0 135.69 64H160a8 8 0 0 0 0-16h-56V32a8 8 0 0 0-16 0v16H32a8 8 0 0 0 0 16h87.63A87.76 87.76 0 0 1 96 116.35a87.7 87.7 0 0 1-19-31a8 8 0 1 0-15.08 5.34A103.6 103.6 0 0 0 84 127a87.55 87.55 0 0 1-52 17a8 8 0 0 0 0 16a103.46 103.46 0 0 0 64-22.08a104.2 104.2 0 0 0 51.44 21.31l-26.6 53.19a8 8 0 0 0 14.31 7.16L148.94 192h70.11l13.79 27.58A8 8 0 0 0 240 224a8 8 0 0 0 7.15-11.58M156.94 176L184 121.89L211.05 176Z"></svg:path>`,
})
export class PhTranslateIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashIcon],svg[ph-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhTrashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashSimpleIcon],svg[ph-trash-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16m-24 160H64V64h128ZM80 24a8 8 0 0 1 8-8h80a8 8 0 0 1 0 16H88a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhTrashSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayIcon],svg[ph-tray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 16v104h-28.7a15.86 15.86 0 0 0-11.3 4.69L148.69 176h-41.38L88 156.69A15.86 15.86 0 0 0 76.69 152H48V48Zm0 160H48v-40h28.69L96 187.31a15.86 15.86 0 0 0 11.31 4.69h41.38a15.86 15.86 0 0 0 11.31-4.69L179.31 168H208z"></svg:path>`,
})
export class PhTrayIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowDownIcon],svg[ph-tray-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 16v104h-28.7a15.86 15.86 0 0 0-11.3 4.69L148.69 176h-41.38L88 156.69A15.86 15.86 0 0 0 76.69 152H48V48Zm0 160H48v-40h28.69L96 187.31a15.86 15.86 0 0 0 11.31 4.69h41.38a15.86 15.86 0 0 0 11.31-4.69L179.31 168H208zM90.34 125.66a8 8 0 0 1 11.32-11.32L120 132.69V72a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0Z"></svg:path>`,
})
export class PhTrayArrowDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowUpIcon],svg[ph-tray-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 16v104h-28.7a15.86 15.86 0 0 0-11.3 4.69L148.69 176h-41.38L88 156.69A15.86 15.86 0 0 0 76.69 152H48V48Zm0 160H48v-40h28.69L96 187.31a15.86 15.86 0 0 0 11.31 4.69h41.38a15.86 15.86 0 0 0 11.31-4.69L179.31 168H208zM90.34 109.66a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L136 91.31V152a8 8 0 0 1-16 0V91.31l-18.34 18.35a8 8 0 0 1-11.32 0"></svg:path>`,
})
export class PhTrayArrowUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreasureChestIcon],svg[ph-treasure-chest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 40H72a56.06 56.06 0 0 0-56 56v96a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V96a56.06 56.06 0 0 0-56-56m40 56v8h-32V56.8A40.07 40.07 0 0 1 224 96m-88 40h-16v-32h16Zm-24 16h32a8 8 0 0 0 8-8v-24h24v72H80v-72h24v24a8 8 0 0 0 8 8m40-48v-8a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v8H80V56h96v48ZM64 56.8V104H32v-8a40.07 40.07 0 0 1 32-39.2M32 120h32v72H32Zm192 72h-32v-72h32z"></svg:path>`,
})
export class PhTreasureChestIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeIcon],svg[ph-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.1 62.59a76 76 0 0 0-140.2 0A71.71 71.71 0 0 0 16 127.8C15.9 166 48 199 86.14 200a72.1 72.1 0 0 0 33.86-7.53V232a8 8 0 0 0 16 0v-39.53a72.2 72.2 0 0 0 32 7.53h1.82c38.18-1 70.29-34 70.18-72.2a71.71 71.71 0 0 0-41.9-65.21M169.45 184A56.08 56.08 0 0 1 136 174v-41l43.58-21.78a8 8 0 1 0-7.16-14.32L136 115.06V88a8 8 0 0 0-16 0v51.06l-36.42-18.22a8 8 0 1 0-7.16 14.32L120 156.94v17a56 56 0 0 1-33.45 10c-29.65-.71-54.63-26.42-54.55-56.1A55.77 55.77 0 0 1 67.11 76a8 8 0 0 0 4.53-4.67a60 60 0 0 1 112.72 0a8 8 0 0 0 4.53 4.67A55.79 55.79 0 0 1 224 127.84c.08 29.68-24.9 55.39-54.55 56.16"></svg:path>`,
})
export class PhTreeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeEvergreenIcon],svg[ph-tree-evergreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m230.32 187.09l-46-59.09H208a8 8 0 0 0 6.34-12.88l-80-104a8 8 0 0 0-12.68 0l-80 104A8 8 0 0 0 48 128h23.64l-46 59.09A8 8 0 0 0 32 200h88v40a8 8 0 0 0 16 0v-40h88a8 8 0 0 0 6.32-12.91M48.36 184l46-59.09A8 8 0 0 0 88 112H64.25L128 29.12L191.75 112H168a8 8 0 0 0-6.31 12.91L207.64 184Z"></svg:path>`,
})
export class PhTreeEvergreenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreePalmIcon],svg[ph-tree-palm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.79 53.23a66.86 66.86 0 0 0-97.74 0a72.2 72.2 0 0 0-12.05 17a72.2 72.2 0 0 0-12-17a66.86 66.86 0 0 0-97.74 0a8 8 0 0 0 2.6 12.85L77 90.55a71.42 71.42 0 0 0-43.36 33.21a70.64 70.64 0 0 0-7.2 54.32A8 8 0 0 0 39 182.36l81-61.68V224a8 8 0 0 0 16 0V120.68l81 61.68a8 8 0 0 0 12.57-4.28a70.64 70.64 0 0 0-7.2-54.32A71.42 71.42 0 0 0 179 90.55l56.22-24.47a8 8 0 0 0 2.6-12.85ZM67.08 48a51.13 51.13 0 0 1 37.28 16.26a56.53 56.53 0 0 1 14.26 26.93L39 56.53A50.5 50.5 0 0 1 67.08 48M40 161.5a54.8 54.8 0 0 1 7.47-29.7a55.55 55.55 0 0 1 34-25.89A56.5 56.5 0 0 1 96.1 104a55.8 55.8 0 0 1 16.23 2.41Zm168.5-29.7a54.8 54.8 0 0 1 7.5 29.7l-72.3-55.1a56.3 56.3 0 0 1 64.83 25.4Zm-71.12-40.61a56.53 56.53 0 0 1 14.26-26.93A51.13 51.13 0 0 1 188.92 48A50.5 50.5 0 0 1 217 56.53Z"></svg:path>`,
})
export class PhTreePalmIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeStructureIcon],svg[ph-tree-structure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 112h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v16h-16a24 24 0 0 0-24 24v32H72v-8a16 16 0 0 0-16-16H24a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-8h32v32a24 24 0 0 0 24 24h16v16a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v16h-16a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h16v16a16 16 0 0 0 16 16M56 144H24v-32h32zm104 16h48v48h-48Zm0-112h48v48h-48Z"></svg:path>`,
})
export class PhTreeStructureIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeViewIcon],svg[ph-tree-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 152h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H88V80h8a16 16 0 0 0 16-16V32a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v112a24 24 0 0 0 24 24h64v8a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H96a8 8 0 0 1-8-8v-64h72v8a16 16 0 0 0 16 16M64 32h32v32H64Zm112 160h32v32h-32Zm0-88h32v32h-32Z"></svg:path>`,
})
export class PhTreeViewIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendDownIcon],svg[ph-trend-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 128v64a8 8 0 0 1-8 8h-64a8 8 0 0 1 0-16h44.69L136 107.31l-34.34 34.35a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L96 124.69l34.34-34.35a8 8 0 0 1 11.32 0L224 172.69V128a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhTrendDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendUpIcon],svg[ph-trend-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 56v64a8 8 0 0 1-16 0V75.31l-82.34 82.35a8 8 0 0 1-11.32 0L96 123.31l-66.34 66.35a8 8 0 0 1-11.32-11.32l72-72a8 8 0 0 1 11.32 0L136 140.69L212.69 64H168a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTrendUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleIcon],svg[ph-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.34 24.34 0 0 0 40.55 224h174.9a24.34 24.34 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72m-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72"></svg:path>`,
})
export class PhTriangleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleDashedIcon],svg[ph-triangle-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 216a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m76.8-27.91l-4.66-8.09a8 8 0 0 0-13.86 8l4.65 8.09a7.59 7.59 0 0 1 0 7.72a8.5 8.5 0 0 1-7.48 4.2H192a8 8 0 0 0 0 16h23.45a24.34 24.34 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.73M64 208H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l4.65-8.08a8 8 0 1 0-13.86-8l-4.66 8.08a23.51 23.51 0 0 0 0 23.72A24.34 24.34 0 0 0 40.55 224H64a8 8 0 0 0 0-16m138.18-56a8 8 0 0 0 6.93-12l-23-40a8 8 0 0 0-13.86 8l23 40a8 8 0 0 0 6.93 4M149.35 36.22a24.76 24.76 0 0 0-42.7 0L93 60a8 8 0 1 0 13.86 8l13.7-23.78a8.75 8.75 0 0 1 15 0L149.18 68a8 8 0 0 0 6.94 4a7.9 7.9 0 0 0 4-1.07A8 8 0 0 0 163 60Zm-68.5 60.85A8 8 0 0 0 69.93 100l-23 40a8 8 0 0 0 13.87 8l23-40a8 8 0 0 0-2.95-10.93"></svg:path>`,
})
export class PhTriangleDashedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleyIcon],svg[ph-trolley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 224a16 16 0 1 1-16-16a16 16 0 0 1 16 16m128-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m24-32H56V75.31A15.86 15.86 0 0 0 51.31 64L29.66 42.34a8 8 0 0 0-11.32 11.32L40 75.31V176h-8a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhTrolleyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleySuitcaseIcon],svg[ph-trolley-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 224a16 16 0 1 1-16-16a16 16 0 0 1 16 16m128-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m24-32H56V75.31A15.86 15.86 0 0 0 51.31 64L29.66 42.34a8 8 0 0 0-11.32 11.32L40 75.31V176h-8a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M72 144V72a16 16 0 0 1 16-16h32V40a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v16h32a16 16 0 0 1 16 16v72a16 16 0 0 1-16 16H88a16 16 0 0 1-16-16m64-88h32V40h-32Zm-48 88h128V72H88Z"></svg:path>`,
})
export class PhTrolleySuitcaseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrophyIcon],svg[ph-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 64h-24V48a8 8 0 0 0-8-8H56a8 8 0 0 0-8 8v16H24A16 16 0 0 0 8 80v16a40 40 0 0 0 40 40h3.65A80.13 80.13 0 0 0 120 191.61V216H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-24.42c31.94-3.23 58.44-25.64 68.08-55.58H208a40 40 0 0 0 40-40V80a16 16 0 0 0-16-16M48 120a24 24 0 0 1-24-24V80h24v32q0 4 .39 8Zm144-8.9c0 35.52-29 64.64-64 64.9a64 64 0 0 1-64-64V56h128ZM232 96a24 24 0 0 1-24 24h-.5a82 82 0 0 0 .5-8.9V80h24Z"></svg:path>`,
})
export class PhTrophyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckIcon],svg[ph-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m255.42 117l-14-35a15.93 15.93 0 0 0-14.84-10H192v-8a8 8 0 0 0-8-8H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a7.9 7.9 0 0 0-.58-3M192 88h34.58l9.6 24H192ZM32 72h144v64H32Zm48 136a16 16 0 1 1 16-16a16 16 0 0 1-16 16m81-24h-50a32 32 0 0 0-62 0H32v-32h144v12.31A32.1 32.1 0 0 0 161 184m31 24a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48-24h-17a32.06 32.06 0 0 0-31-24v-32h48Z"></svg:path>`,
})
export class PhTruckIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckTrailerIcon],svg[ph-truck-trailer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 96.8V96a56.06 56.06 0 0 0-56-56h-8a16 16 0 0 0-16 16v120h-16V72a8 8 0 0 0-8-8H16A16 16 0 0 0 0 80v104a32 32 0 0 0 56 21.13A32 32 0 0 0 111 192h82a32 32 0 0 0 63-8v-48a40.07 40.07 0 0 0-32-39.2M160 56h8a40 40 0 0 1 40 40v8a8 8 0 0 0 8 8a24 24 0 0 1 24 24v20.31a31.7 31.7 0 0 0-16-4.31a32.06 32.06 0 0 0-31 24h-33Zm-48 24v96h-1a32 32 0 0 0-55-13.13a31.9 31.9 0 0 0-40-6.56V80ZM32 200a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m144 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhTruckTrailerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTumblrLogoIcon],svg[ph-tumblr-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 120a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8h-40V24a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8a40 40 0 0 1-40 40a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h24v56a64.07 64.07 0 0 0 64 64h40a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8h-32a8 8 0 0 1-8-8v-48Zm-32 72h24v32h-32a48.05 48.05 0 0 1-48-48v-64a8 8 0 0 0-8-8H72V79.43A56.13 56.13 0 0 0 119.43 32H136v40a8 8 0 0 0 8 8h40v24h-40a8 8 0 0 0-8 8v56a24 24 0 0 0 24 24"></svg:path>`,
})
export class PhTumblrLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitchLogoIcon],svg[ph-twitch-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h16v32a8 8 0 0 0 13.12 6.15L122.9 208h42.2a16 16 0 0 0 10.25-3.71l42.89-35.75a15.93 15.93 0 0 0 5.76-12.29V48a16 16 0 0 0-16-16m0 124.25L165.1 192H120a8 8 0 0 0-5.12 1.85L80 222.92V200a8 8 0 0 0-8-8H48V48h160ZM160 136V88a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0m-48 0V88a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0"></svg:path>`,
})
export class PhTwitchLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitterLogoIcon],svg[ph-twitter-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.39 68.94A8 8 0 0 0 240 64h-30.43a48.66 48.66 0 0 0-41.47-24a46.9 46.9 0 0 0-33.75 13.7A47.9 47.9 0 0 0 120 88v6.09C79.74 83.47 46.81 50.72 46.46 50.37a8 8 0 0 0-13.65 4.92c-4.31 47.79 9.57 79.77 22 98.18a111 111 0 0 0 21.88 24.2c-15.23 17.53-39.21 26.74-39.47 26.84a8 8 0 0 0-3.85 11.93c.75 1.12 3.75 5.05 11.08 8.72C53.51 229.7 65.48 232 80 232c70.67 0 129.72-54.42 135.75-124.44l29.91-29.9a8 8 0 0 0 1.73-8.72m-45 29.41a8 8 0 0 0-2.32 5.14C196 166.58 143.28 216 80 216c-10.56 0-18-1.4-23.22-3.08c11.51-6.25 27.56-17 37.88-32.48A8 8 0 0 0 92 169.08c-.47-.27-43.91-26.34-44-96c16 13 45.25 33.17 78.67 38.79A8 8 0 0 0 136 104V88a32 32 0 0 1 9.6-22.92A30.94 30.94 0 0 1 167.9 56c12.66.16 24.49 7.88 29.44 19.21a8 8 0 0 0 7.33 4.79h16Z"></svg:path>`,
})
export class PhTwitterLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaIcon],svg[ph-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 126.63A112.44 112.44 0 0 0 51.75 53.75a111.56 111.56 0 0 0-35.7 72.88A16 16 0 0 0 32 144h88v56a32 32 0 0 0 64 0a8 8 0 0 0-16 0a16 16 0 0 1-32 0v-56h88a16 16 0 0 0 16-17.37M32 128a96.15 96.15 0 0 1 76.2-85.89C96.48 58 81.85 86.11 80.17 128Zm64.15 0c1.39-30.77 10.53-52.81 18.3-66.24A106.4 106.4 0 0 1 128 43.16a106.3 106.3 0 0 1 13.52 18.6C154.8 84.7 159 109.28 159.82 128Zm79.65 0c-1.68-41.89-16.31-70-28-85.94A96.07 96.07 0 0 1 224 128Z"></svg:path>`,
})
export class PhUmbrellaIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaSimpleIcon],svg[ph-umbrella-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 126.63A112.44 112.44 0 0 0 51.75 53.75a111.56 111.56 0 0 0-35.7 72.88A16 16 0 0 0 32 144h88v56a32 32 0 0 0 64 0a8 8 0 0 0-16 0a16 16 0 0 1-32 0v-56h88a16 16 0 0 0 16-17.37M32 128a96.43 96.43 0 0 1 161.4-62.48A95.32 95.32 0 0 1 224 128Z"></svg:path>`,
})
export class PhUmbrellaSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUnionIcon],svg[ph-union-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 64v80a80 80 0 0 1-160 0V64a8 8 0 0 1 16 0v80a64 64 0 0 0 128 0V64a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhUnionIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteIcon],svg[ph-unite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174.63 81.37a80 80 0 1 0-93.26 93.26a80 80 0 1 0 93.26-93.26M224 160c0 1.52-.07 3-.18 4.51l-50-50A80 80 0 0 0 176 98a64.11 64.11 0 0 1 48 62M45.47 56.79l52.62 52.61a80.5 80.5 0 0 0-9.93 15.44L36.3 73a64 64 0 0 1 9.17-16.21M73 36.3l51.86 51.86a80.5 80.5 0 0 0-15.44 9.93L56.79 45.47A64 64 0 0 1 73 36.3m61.46 110.83l-25.57-25.57a64.7 64.7 0 0 1 12.69-12.69l25.57 25.57a64.7 64.7 0 0 1-12.71 12.69ZM155.31 120L136 100.69A63.5 63.5 0 0 1 160 96a63.5 63.5 0 0 1-4.69 24m-54.62 16L120 155.31A63.5 63.5 0 0 1 96 160a63.5 63.5 0 0 1 4.69-24m45.91 21.91l52.61 52.62A64 64 0 0 1 183 219.7l-51.86-51.86a80.5 80.5 0 0 0 15.46-9.93m11.31-11.31a80.5 80.5 0 0 0 9.93-15.44L219.7 183a64 64 0 0 1-9.17 16.19Zm.09-66.55a80 80 0 0 0-16.49 2.13l-50-50C93 32.07 94.48 32 96 32a64.11 64.11 0 0 1 62 48.05M32 96c0-1.52.07-3 .18-4.51l50 50A80 80 0 0 0 80.05 158A64.11 64.11 0 0 1 32 96m66 80a80 80 0 0 0 16.49-2.13l50 50c-1.49.11-3 .18-4.51.18A64.11 64.11 0 0 1 98 176"></svg:path>`,
})
export class PhUniteIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteSquareIcon],svg[ph-unite-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 152V96a8 8 0 0 0-8-8h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8zm-68.69 56L48 100.69V59.31L196.69 208Zm-96-160h41.38L208 155.31v41.38ZM208 132.69L179.31 104H208Zm-56-56L123.31 48H152ZM48 123.31L76.69 152H48Zm56 56L132.69 208H104Z"></svg:path>`,
})
export class PhUniteSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadIcon],svg[ph-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h48a8 8 0 0 1 0 16H32v64h192v-64h-48a8 8 0 0 1 0-16h48a16 16 0 0 1 16 16M85.66 77.66L120 43.31V128a8 8 0 0 0 16 0V43.31l34.34 34.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32M200 168a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhUploadIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadSimpleIcon],svg[ph-upload-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 144v64a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0M93.66 77.66L120 51.31V144a8 8 0 0 0 16 0V51.31l26.34 26.35a8 8 0 0 0 11.32-11.32l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 11.32 11.32"></svg:path>`,
})
export class PhUploadSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsbIcon],svg[ph-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m252.44 121.34l-48-32A8 8 0 0 0 192 96v24H72V72h33a32 32 0 1 0 0-16H72a16 16 0 0 0-16 16v48H8a8 8 0 0 0 0 16h48v48a16 16 0 0 0 16 16h32v8a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H72v-48h120v24a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M136 48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m-16 128h32v32h-32Zm88-30.95V111l25.58 17Z"></svg:path>`,
})
export class PhUsbIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserIcon],svg[ph-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"></svg:path>`,
})
export class PhUserIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCheckIcon],svg[ph-user-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 157.68a68 68 0 1 0-71.9 0c-20.65 6.76-39.23 19.39-54.17 37.17a8 8 0 0 0 12.25 10.3C50.25 181.19 77.91 168 108 168s57.75 13.19 77.87 37.15a8 8 0 0 0 12.25-10.3c-14.94-17.78-33.52-30.41-54.12-37.17M56 100a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52m197.66 33.66l-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L216 148.69l26.34-26.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhUserCheckIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleIcon],svg[ph-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M74.08 197.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m97.76 66.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75a88 88 0 1 1 131.52 0"></svg:path>`,
})
export class PhUserCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleCheckIcon],svg[ph-user-circle-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.35 104.11a8 8 0 0 0-6.57 9.21A89 89 0 0 1 216 128a87.62 87.62 0 0 1-22.24 58.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75A88 88 0 0 1 128 40a89 89 0 0 1 14.68 1.22a8 8 0 0 0 2.64-15.78a103.92 103.92 0 1 0 85.24 85.24a8 8 0 0 0-9.21-6.57M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m-21.92 77.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0M237.66 45.66l-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L200 60.69l26.34-26.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhUserCircleCheckIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleDashedIcon],svg[ph-user-circle-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96.26 37a8 8 0 0 1 5.74-9.71a104.1 104.1 0 0 1 52 0a8 8 0 0 1-2 15.75a8.2 8.2 0 0 1-2-.26a88 88 0 0 0-44 0A8 8 0 0 1 96.26 37m-62.91 73a8 8 0 0 0 9.85-5.57a87.9 87.9 0 0 1 22-38.09a8 8 0 0 0-11.4-11.2a103.9 103.9 0 0 0-26 45a8 8 0 0 0 5.55 9.86M150 213.22a88 88 0 0 1-44 0a8 8 0 0 0-4 15.49a104.1 104.1 0 0 0 52 0a8 8 0 0 0-4-15.49m62.8-108.77a8 8 0 0 0 15.42-4.28a104 104 0 0 0-26-45a8 8 0 1 0-11.41 11.21a88.14 88.14 0 0 1 21.98 38.07Zm15.44 51.39a103.7 103.7 0 0 1-30.68 49.47a8 8 0 0 1-12.49-2.31a64 64 0 0 0-114.14 0a8 8 0 0 1-12.48 2.32a103.74 103.74 0 0 1-30.68-49.49a8 8 0 0 1 15.42-4.27a87.6 87.6 0 0 0 19 34.88a79.57 79.57 0 0 1 36.1-28.77a48 48 0 1 1 59.38 0a79.57 79.57 0 0 1 36.1 28.77a87.6 87.6 0 0 0 19-34.88a8 8 0 1 1 15.42 4.28ZM128 152a32 32 0 1 0-32-32a32 32 0 0 0 32 32"></svg:path>`,
})
export class PhUserCircleDashedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleGearIcon],svg[ph-user-circle-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.25 63.07l-4.66-2.69a23.6 23.6 0 0 0 0-8.76l4.66-2.69a8 8 0 0 0-8-13.86l-4.67 2.7a23.9 23.9 0 0 0-7.58-4.39V28a8 8 0 0 0-16 0v5.38a23.9 23.9 0 0 0-7.58 4.39l-4.67-2.7a8 8 0 1 0-8 13.86l4.66 2.69a23.6 23.6 0 0 0 0 8.76l-4.66 2.69a8 8 0 0 0 4 14.93a7.9 7.9 0 0 0 4-1.07l4.67-2.7a23.9 23.9 0 0 0 7.58 4.39V84a8 8 0 0 0 16 0v-5.38a23.9 23.9 0 0 0 7.58-4.39l4.67 2.7a7.9 7.9 0 0 0 4 1.07a8 8 0 0 0 4-14.93M192 56a8 8 0 1 1 8 8a8 8 0 0 1-8-8m29.35 48.11a8 8 0 0 0-6.57 9.21A89 89 0 0 1 216 128a87.62 87.62 0 0 1-22.24 58.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75A88 88 0 0 1 128 40a89 89 0 0 1 14.68 1.22a8 8 0 0 0 2.64-15.78a103.92 103.92 0 1 0 85.24 85.24a8 8 0 0 0-9.21-6.57M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m-21.92 77.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0"></svg:path>`,
})
export class PhUserCircleGearIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleMinusIcon],svg[ph-user-circle-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 56a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8m58.08 37.33a103.93 103.93 0 1 1-80.76-67.89a8 8 0 0 1-2.64 15.78A88.07 88.07 0 0 0 40 128a87.62 87.62 0 0 0 22.24 58.41a79.66 79.66 0 0 1 36.06-28.75a48 48 0 1 1 59.4 0a79.66 79.66 0 0 1 36.06 28.75A88 88 0 0 0 211 98.67a8 8 0 0 1 15.09-5.34ZM128 152a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0 64a87.57 87.57 0 0 0 53.92-18.5a64 64 0 0 0-107.84 0A87.57 87.57 0 0 0 128 216"></svg:path>`,
})
export class PhUserCircleMinusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCirclePlusIcon],svg[ph-user-circle-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 56a8 8 0 0 1 8-8h16V32a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V64h-16a8 8 0 0 1-8-8m62.56 54.68a103.92 103.92 0 1 1-85.24-85.24a8 8 0 0 1-2.64 15.78A88.07 88.07 0 0 0 40 128a87.62 87.62 0 0 0 22.24 58.41a79.66 79.66 0 0 1 36.06-28.75a48 48 0 1 1 59.4 0a79.66 79.66 0 0 1 36.06 28.75A87.62 87.62 0 0 0 216 128a89 89 0 0 0-1.22-14.68a8 8 0 1 1 15.78-2.64M128 152a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0 64a87.57 87.57 0 0 0 53.92-18.5a64 64 0 0 0-107.84 0A87.57 87.57 0 0 0 128 216"></svg:path>`,
})
export class PhUserCirclePlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserFocusIcon],svg[ph-user-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40v36a8 8 0 0 1-16 0V48h-28a8 8 0 0 1 0-16h36a8 8 0 0 1 8 8m-8 132a8 8 0 0 0-8 8v28h-28a8 8 0 0 0 0 16h36a8 8 0 0 0 8-8v-36a8 8 0 0 0-8-8M76 208H48v-28a8 8 0 0 0-16 0v36a8 8 0 0 0 8 8h36a8 8 0 0 0 0-16M40 84a8 8 0 0 0 8-8V48h28a8 8 0 0 0 0-16H40a8 8 0 0 0-8 8v36a8 8 0 0 0 8 8m136 92a8 8 0 0 1-6.41-3.19a52 52 0 0 0-83.2 0a8 8 0 1 1-12.8-9.62A67.94 67.94 0 0 1 101 141.51a40 40 0 1 1 53.94 0a67.94 67.94 0 0 1 27.43 21.68A8 8 0 0 1 176 176m-48-40a24 24 0 1 0-24-24a24 24 0 0 0 24 24"></svg:path>`,
})
export class PhUserFocusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserGearIcon],svg[ph-user-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 157.68a68 68 0 1 0-71.9 0c-20.65 6.76-39.23 19.39-54.17 37.17a8 8 0 1 0 12.24 10.3C50.25 181.19 77.91 168 108 168s57.75 13.19 77.87 37.15a8 8 0 0 0 12.26-10.3c-14.95-17.78-33.53-30.41-54.13-37.17M56 100a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52m196.25 43.07l-4.66-2.69a23.6 23.6 0 0 0 0-8.76l4.66-2.69a8 8 0 1 0-8-13.86l-4.67 2.7a23.9 23.9 0 0 0-7.58-4.39V108a8 8 0 0 0-16 0v5.38a23.9 23.9 0 0 0-7.58 4.39l-4.67-2.7a8 8 0 1 0-8 13.86l4.66 2.69a23.6 23.6 0 0 0 0 8.76l-4.66 2.69a8 8 0 0 0 8 13.86l4.67-2.7a23.9 23.9 0 0 0 7.58 4.39V164a8 8 0 0 0 16 0v-5.38a23.9 23.9 0 0 0 7.58-4.39l4.67 2.7a7.9 7.9 0 0 0 4 1.07a8 8 0 0 0 4-14.93M216 136a8 8 0 1 1 8 8a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhUserGearIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserListIcon],svg[ph-user-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 80a8 8 0 0 1 8-8h88a8 8 0 0 1 0 16h-88a8 8 0 0 1-8-8m96 40h-88a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16m0 48h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m-96.25 22a8 8 0 0 1-5.76 9.74a7.6 7.6 0 0 1-2 .26a8 8 0 0 1-7.75-6c-6.16-23.94-30.34-42-56.25-42s-50.09 18.05-56.25 42a8 8 0 0 1-15.5-4c5.59-21.71 21.84-39.29 42.46-48a48 48 0 1 1 58.58 0c20.63 8.71 36.88 26.29 42.47 48M80 136a32 32 0 1 0-32-32a32 32 0 0 0 32 32"></svg:path>`,
})
export class PhUserListIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserMinusIcon],svg[ph-user-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 136a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m-57.87 58.85a8 8 0 0 1-12.26 10.3C165.75 181.19 138.09 168 108 168s-57.75 13.19-77.87 37.15a8 8 0 0 1-12.25-10.3c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17M108 152a52 52 0 1 0-52-52a52.06 52.06 0 0 0 52 52"></svg:path>`,
})
export class PhUserMinusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserPlusIcon],svg[ph-user-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 136a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8m-57.87 58.85a8 8 0 0 1-12.26 10.3C165.75 181.19 138.09 168 108 168s-57.75 13.19-77.87 37.15a8 8 0 0 1-12.25-10.3c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17M108 152a52 52 0 1 0-52-52a52.06 52.06 0 0 0 52 52"></svg:path>`,
})
export class PhUserPlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserRectangleIcon],svg[ph-user-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m-23.43 80a64 64 0 0 1 110.86 0ZM216 200h-14.67a80.14 80.14 0 0 0-43.69-42.28a48 48 0 1 0-59.28 0A80.14 80.14 0 0 0 54.67 200H40V56h176z"></svg:path>`,
})
export class PhUserRectangleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSoundIcon],svg[ph-user-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 165.68a68 68 0 1 0-71.9 0c-20.65 6.76-39.23 19.39-54.17 37.17a8 8 0 0 0 12.25 10.3C50.25 189.19 77.91 176 108 176s57.75 13.19 77.88 37.15a8 8 0 1 0 12.25-10.3c-14.95-17.78-33.53-30.41-54.13-37.17M56 108a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52m151.36-42.4a108.36 108.36 0 0 1 0 84.8a8 8 0 0 1-7.36 4.86a8 8 0 0 1-7.36-11.15a92.26 92.26 0 0 0 0-72.22a8 8 0 0 1 14.72-6.29M248 108a139 139 0 0 1-11.29 55.15a8 8 0 0 1-14.7-6.3a124.43 124.43 0 0 0 0-97.7a8 8 0 1 1 14.7-6.3A139 139 0 0 1 248 108"></svg:path>`,
})
export class PhUserSoundIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSquareIcon],svg[ph-user-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m-27.33 88a64.36 64.36 0 0 1 19.13-25.8a64 64 0 0 1 80.4 0a64.36 64.36 0 0 1 19.13 25.8ZM208 208h-3.67a79.9 79.9 0 0 0-46.68-50.29a48 48 0 1 0-59.3 0A79.9 79.9 0 0 0 51.67 208H48V48h160z"></svg:path>`,
})
export class PhUserSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSwitchIcon],svg[ph-user-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m253.66 133.66l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L216 132.69V128A88 88 0 0 0 56.49 76.67a8 8 0 0 1-13-9.34A104 104 0 0 1 232 128v4.69l10.34-10.35a8 8 0 0 1 11.32 11.32m-41.18 55A104 104 0 0 1 24 128v-4.69l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0l24 24a8 8 0 0 1-11.32 11.32L40 123.31V128a87.62 87.62 0 0 0 22.24 58.41a79.66 79.66 0 0 1 36.06-28.75a48 48 0 1 1 59.4 0a79.6 79.6 0 0 1 36.08 28.78a90 90 0 0 0 5.71-7.11a8 8 0 0 1 13 9.34ZM128 152a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0 64a88.2 88.2 0 0 0 53.92-18.49a64 64 0 0 0-107.84 0A87.57 87.57 0 0 0 128 216"></svg:path>`,
})
export class PhUserSwitchIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersIcon],svg[ph-users-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M117.25 157.92a60 60 0 1 0-66.5 0a95.83 95.83 0 0 0-47.22 37.71a8 8 0 1 0 13.4 8.74a80 80 0 0 1 134.14 0a8 8 0 0 0 13.4-8.74a95.83 95.83 0 0 0-47.22-37.71M40 108a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44m210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16a44 44 0 1 0-16.34-84.87a8 8 0 1 1-5.94-14.85a60 60 0 0 1 55.53 105.64a95.83 95.83 0 0 1 47.22 37.71a8 8 0 0 1-2.33 11.07"></svg:path>`,
})
export class PhUsersIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersFourIcon],svg[ph-users-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.2 126.4a8 8 0 0 0 11.2-1.6a52 52 0 0 1 83.2 0a8 8 0 0 0 11.2 1.59a7.7 7.7 0 0 0 1.59-1.59a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 93.51a40 40 0 1 0-53.94 0a67.3 67.3 0 0 0-21 14.31a67.3 67.3 0 0 0-21-14.31a40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 25.6 115.2a8 8 0 0 0 1.6 11.2M176 40a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-96 0a24 24 0 1 1-24 24a24 24 0 0 1 24-24m123 157.51a40 40 0 1 0-53.94 0a67.3 67.3 0 0 0-21 14.31a67.3 67.3 0 0 0-21-14.31a40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 25.6 219.2a8 8 0 1 0 12.8 9.6a52 52 0 0 1 83.2 0a8 8 0 0 0 11.2 1.59a7.7 7.7 0 0 0 1.59-1.59a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 197.51M80 144a24 24 0 1 1-24 24a24 24 0 0 1 24-24m96 0a24 24 0 1 1-24 24a24 24 0 0 1 24-24"></svg:path>`,
})
export class PhUsersFourIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersThreeIcon],svg[ph-users-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1-7.37-4.89a8 8 0 0 1 0-6.22A8 8 0 0 1 192 112a24 24 0 1 0-23.24-30a8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68a8 8 0 0 1-1.63 11.21M190.92 212a8 8 0 1 1-13.84 8a57 57 0 0 0-98.16 0a8 8 0 1 1-13.84-8a72.06 72.06 0 0 1 33.74-29.92a48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212M128 176a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-56-56a8 8 0 0 0-8-8a24 24 0 1 1 23.24-30a8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68a8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhUsersThreeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVanIcon],svg[ph-van-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m254.07 106.79l-45.54-53.06A16 16 0 0 0 196.26 48H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a8 8 0 0 0-1.93-5.21M230.59 104H176V64h20.26ZM104 104V64h56v40ZM88 64v40H32V64Zm-8 136a16 16 0 1 1 16-16a16 16 0 0 1-16 16m112 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m31-24a32 32 0 0 0-62 0h-50a32 32 0 0 0-62 0H32v-56h208v56Z"></svg:path>`,
})
export class PhVanIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVaultIcon],svg[ph-vault-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h16v16a8 8 0 0 0 16 0v-16h112v16a8 8 0 0 0 16 0v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 152H40V56h176v64h-16.68a48 48 0 1 0 0 16H216zm-50.16-72a16 16 0 1 0 0 16H183a32 32 0 1 1 0-16Z"></svg:path>`,
})
export class PhVaultIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorThreeIcon],svg[ph-vector-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.66 141.66l-32 32a8 8 0 0 1-11.32-11.32L212.69 144h-89.38l-56 56H96a8 8 0 0 1 0 16H48a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v28.69l56-56V43.31L93.66 61.66a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L128 43.31V128h84.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhVectorThreeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorTwoIcon],svg[ph-vector-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 197.66l-32 32a8 8 0 0 1-11.32-11.32L204.69 200H80a8 8 0 0 1-8-8V59.31L53.66 77.66a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L88 59.31V184h116.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhVectorTwoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVibrateIcon],svg[ph-vibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 32H96a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h64a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24m8 168a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8Zm48-112v80a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0m32 16v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0M56 88v80a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0m-32 16v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhVibrateIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoIcon],svg[ph-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m164.44 105.34l-48-32A8 8 0 0 0 104 80v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M120 129.05V95l25.58 17ZM216 40H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 128H40V56h176zm16 40a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhVideoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraIcon],svg[ph-video-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-25l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7M192 184H32V72h160zm48-22.95l-32-21.33v-23.44L240 95Z"></svg:path>`,
})
export class PhVideoCameraIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraSlashIcon],svg[ph-video-camera-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16h-78.94a8 8 0 0 0 0 16H192v87.63a8 8 0 0 0 16 0V159l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7M240 161.05l-32-21.33v-23.44L240 95ZM53.92 34.62a8 8 0 1 0-11.84 10.76L51.73 56H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h150.64l19.44 21.38a8 8 0 1 0 11.84-10.76ZM32 184V72h34.28L168.1 184Z"></svg:path>`,
})
export class PhVideoCameraSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoConferenceIcon],svg[ph-video-conference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 80h-48V56h48ZM40 56h112v144H40Zm176 144h-48v-64h48zM180 88a12 12 0 1 1 12 12a12 12 0 0 1-12-12m24 80a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-68.25-2a39.76 39.76 0 0 0-17.19-23.34a32 32 0 1 0-45.12 0A39.84 39.84 0 0 0 56.25 166a8 8 0 0 0 15.5 4c2.64-10.25 13.06-18 24.25-18s21.62 7.73 24.25 18a8 8 0 1 0 15.5-4M80 120a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhVideoConferenceIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVignetteIcon],svg[ph-vignette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176zM178.05 87.66C164.59 77.56 146.81 72 128 72s-36.59 5.56-50 15.66C63.79 98.27 56 112.6 56 128s7.79 29.73 22 40.34c13.41 10.1 31.19 15.66 50 15.66s36.59-5.56 50.05-15.66C192.21 157.73 200 143.4 200 128s-7.79-29.73-21.95-40.34M128 168c-30.88 0-56-17.94-56-40s25.12-40 56-40s56 17.94 56 40s-25.12 40-56 40"></svg:path>`,
})
export class PhVignetteIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVinylRecordIcon],svg[ph-vinyl-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m0-144a56.06 56.06 0 0 0-56 56a8 8 0 0 1-16 0a72.08 72.08 0 0 1 72-72a8 8 0 0 1 0 16m72 56a72.08 72.08 0 0 1-72 72a8 8 0 0 1 0-16a56.06 56.06 0 0 0 56-56a8 8 0 0 1 16 0m-40 0a32 32 0 1 0-32 32a32 32 0 0 0 32-32m-48 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhVinylRecordIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirtualRealityIcon],svg[ph-virtual-reality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m123.49 98.81l-24 64a8 8 0 0 1-15 0l-24-64a8 8 0 1 1 15-5.62l16.51 44l16.51-44a8 8 0 1 1 15 5.62ZM256 128a80.09 80.09 0 0 1-80 80H80a80 80 0 0 1 0-160h96a80.09 80.09 0 0 1 80 80m-16 0a64.07 64.07 0 0 0-64-64H80a64 64 0 0 0 0 128h96a64.07 64.07 0 0 0 64-64m-59.16 10.35L191 156a8 8 0 0 1-13.9 7.94l-11.44-20c-.53 0-1.07.05-1.61.05H152v16a8 8 0 0 1-16 0V96a8 8 0 0 1 8-8h20a28 28 0 0 1 16.84 50.35M152 128h12a12 12 0 0 0 0-24h-12Z"></svg:path>`,
})
export class PhVirtualRealityIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirusIcon],svg[ph-virus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 108a28 28 0 1 0-28 28a28 28 0 0 0 28-28m-28 12a12 12 0 1 1 12-12a12 12 0 0 1-12 12m68-8a16 16 0 1 1-16 16a16 16 0 0 1 16-16m-32 64a16 16 0 1 1-16-16a16 16 0 0 1 16 16m96-56h-16.34a95.52 95.52 0 0 0-22.39-53.95l12.39-12.39a8 8 0 0 0-11.32-11.32L190 54.73a95.52 95.52 0 0 0-54-22.39V16a8 8 0 0 0-16 0v16.34a95.52 95.52 0 0 0-53.95 22.39L53.66 42.34a8 8 0 0 0-11.32 11.32l12.39 12.39a95.52 95.52 0 0 0-22.39 54H16a8 8 0 0 0 0 16h16.34A95.52 95.52 0 0 0 54.73 190l-12.39 12.34a8 8 0 0 0 11.32 11.32l12.39-12.39a95.52 95.52 0 0 0 54 22.39V240a8 8 0 0 0 16 0v-16.34A95.52 95.52 0 0 0 190 201.27l12.39 12.39a8 8 0 0 0 11.32-11.32L201.27 190a95.52 95.52 0 0 0 22.39-54H240a8 8 0 0 0 0-16m-112 88a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80"></svg:path>`,
})
export class PhVirusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVisorIcon],svg[ph-visor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.05 56H72A72 72 0 0 0 .08 131.4c1.69 36.69 31.76 66.79 68.45 68.52c15.85.74 32-5.9 49.38-20.3a15.88 15.88 0 0 1 20.24 0C148.72 188.39 165 200 184 200a72 72 0 0 0 72-72.95C255.49 87.87 222.76 56 183.05 56m40.81 111.34A55.63 55.63 0 0 1 184 184c-13.88 0-27-9.51-35.65-16.67a31.91 31.91 0 0 0-40.65 0C93.52 179 80.94 184.49 69.28 183.94a56.36 56.36 0 0 1-53.22-53.28A56 56 0 0 1 72 72h111.05c31 0 56.55 24.79 56.95 55.25a55.66 55.66 0 0 1-16.14 40.09M184 96a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhVisorIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVoicemailIcon],svg[ph-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 72a56 56 0 0 0-39.14 96H95.14A56 56 0 1 0 56 184h144a56 56 0 0 0 0-112M16 128a40 40 0 1 1 40 40a40 40 0 0 1-40-40m184 40a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhVoicemailIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVolleyballIcon],svg[ph-volleyball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m81.74 136.58a88 88 0 0 1-93.49 3.78L132.62 136h83a87.2 87.2 0 0 1-5.88 24.58M91.12 48.11a87.6 87.6 0 0 1 24.22-7.2a88 88 0 0 1 50 79.09h-32.72ZM215.63 120h-34.26a104.18 104.18 0 0 0-35.78-78.23A88.18 88.18 0 0 1 215.63 120M77.27 56.13l17.12 29.65a104.14 104.14 0 0 0-49.86 70.09a87.95 87.95 0 0 1 32.74-99.74M58.9 182.43a88 88 0 0 1 43.49-82.79L118.76 128l-41.49 71.87a88.6 88.6 0 0 1-18.37-17.44M128 216a87.5 87.5 0 0 1-36.88-8.11l17.13-29.67a104.23 104.23 0 0 0 85.53 8.17A87.8 87.8 0 0 1 128 216"></svg:path>`,
})
export class PhVolleyballIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWallIcon],svg[ph-wall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h192a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8M88 144v-32h80v32Zm-48 0v-32h32v32Zm144-32h32v32h-32Zm32-16h-80V64h80Zm-96-32v32H40V64Zm-80 96h80v32H40Zm96 32v-32h80v32Z"></svg:path>`,
})
export class PhWallIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWalletIcon],svg[ph-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 64H56a8 8 0 0 1 0-16h136a8 8 0 0 0 0-16H56a24 24 0 0 0-24 24v128a24 24 0 0 0 24 24h160a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 128H56a8 8 0 0 1-8-8V78.63A23.8 23.8 0 0 0 56 80h160Zm-48-60a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhWalletIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarehouseIcon],svg[ph-warehouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 184h-8V57.9l9.67-2.08a8 8 0 1 0-3.35-15.64l-224 48A8 8 0 0 0 16 104a8 8 0 0 0 1.69-.18l6.31-1.35V184h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 99l176-37.67V184h-24v-56a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v56H40Zm136 53H80v-16h96Zm-96 16h96v16H80Z"></svg:path>`,
})
export class PhWarehouseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningIcon],svg[ph-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72m-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72M120 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhWarningIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningCircleIcon],svg[ph-warning-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-8-80V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhWarningCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningDiamondIcon],svg[ph-warning-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 72a8 8 0 0 1 8 8v56a8 8 0 0 1-16 0V80a8 8 0 0 1 8-8m-12 100a12 12 0 1 0 12-12a12 12 0 0 0-12 12m124-44a15.85 15.85 0 0 1-4.67 11.28l-96.05 96.06a16 16 0 0 1-22.56 0l-96-96.06a16 16 0 0 1 0-22.56l96.05-96.06a16 16 0 0 1 22.56 0l96.05 96.06A15.85 15.85 0 0 1 240 128m-16 0l-96-96l-96 96l96 96Z"></svg:path>`,
})
export class PhWarningDiamondIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningOctagonIcon],svg[ph-warning-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 136V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0m112-44.45v72.9a15.86 15.86 0 0 1-4.69 11.31l-51.55 51.55a15.86 15.86 0 0 1-11.31 4.69h-72.9a15.86 15.86 0 0 1-11.31-4.69l-51.55-51.55A15.86 15.86 0 0 1 24 164.45v-72.9a15.86 15.86 0 0 1 4.69-11.31l51.55-51.55A15.86 15.86 0 0 1 91.55 24h72.9a15.86 15.86 0 0 1 11.31 4.69l51.55 51.55A15.86 15.86 0 0 1 232 91.55m-16 0L164.45 40h-72.9L40 91.55v72.9L91.55 216h72.9L216 164.45ZM128 160a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhWarningOctagonIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWashingMachineIcon],svg[ph-washing-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM128 64a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 112a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48m72-108a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-74.34 49.66l-16 16a8 8 0 0 1-11.32-11.32l16-16a8 8 0 0 1 11.32 11.32m32-3.32a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0"></svg:path>`,
})
export class PhWashingMachineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWatchIcon],svg[ph-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 128a79.94 79.94 0 0 0-32.7-64.47l-6.24-34.38A16 16 0 0 0 153.32 16h-50.64a16 16 0 0 0-15.74 13.15L80.7 63.53a79.9 79.9 0 0 0 0 128.94l6.24 34.38A16 16 0 0 0 102.68 240h50.64a16 16 0 0 0 15.74-13.15l6.24-34.38A79.94 79.94 0 0 0 208 128M102.68 32h50.64l3.91 21.55a79.75 79.75 0 0 0-58.46 0ZM64 128a64 64 0 1 1 64 64a64.07 64.07 0 0 1-64-64m89.32 96h-50.64l-3.91-21.55a79.75 79.75 0 0 0 58.46 0ZM120 128V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16h-40a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhWatchIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSawtoothIcon],svg[ph-wave-sawtooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.19 134.81l-104 64A8 8 0 0 1 120 192V78.32l-91.81 56.49a8 8 0 0 1-8.38-13.62l104-64A8 8 0 0 1 136 64v113.68l91.81-56.49a8 8 0 0 1 8.38 13.62"></svg:path>`,
})
export class PhWaveSawtoothIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSineIcon],svg[ph-wave-sine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.24 131.4c-22 46.8-41.4 68.6-61.2 68.6c-25.1 0-40.73-33.32-57.28-68.6C107.7 103.56 92.9 72 78 72c-16.4 0-36.31 37.21-46.72 59.4a8 8 0 0 1-14.48-6.8C38.71 77.8 58.16 56 78 56c25.1 0 40.73 33.32 57.28 68.6C148.3 152.44 163.1 184 178 184c16.4 0 36.31-37.21 46.72-59.4a8 8 0 0 1 14.48 6.8Z"></svg:path>`,
})
export class PhWaveSineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSquareIcon],svg[ph-wave-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 128v56a8 8 0 0 1-8 8H128a8 8 0 0 1-8-8V80H32v48a8 8 0 0 1-16 0V72a8 8 0 0 1 8-8h104a8 8 0 0 1 8 8v104h88v-48a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhWaveSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveTriangleIcon],svg[ph-wave-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m238.48 132.68l-52 72a8 8 0 0 1-13 0L76 69.66l-45.51 63a8 8 0 1 1-13-9.36l52-72a8 8 0 0 1 13 0l97.51 135l45.51-63a8 8 0 1 1 13 9.36Z"></svg:path>`,
})
export class PhWaveTriangleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformIcon],svg[ph-waveform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m32-72a8 8 0 0 0-8 8v192a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8m40 32a8 8 0 0 0-8 8v128a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8m40 32a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8m40-16a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhWaveformIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
