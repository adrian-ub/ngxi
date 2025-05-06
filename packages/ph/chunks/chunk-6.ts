import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDivideThinIcon],svg[ph-divide-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m-92-52a12 12 0 1 0-12-12a12 12 0 0 0 12 12m0 104a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhDivideThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDnaIcon],svg[ph-dna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 204.5V232a8 8 0 0 1-16 0v-27.5a63.67 63.67 0 0 0-35.38-57.25l-48.4-24.19A79.58 79.58 0 0 1 56 51.5V24a8 8 0 0 1 16 0v27.5a63.67 63.67 0 0 0 35.38 57.25l48.4 24.19A79.58 79.58 0 0 1 200 204.5m-40-4.5H72.17a63.6 63.6 0 0 1 3.23-16h72.71a8 8 0 0 0 0-16H83.46a63.7 63.7 0 0 1 14.65-15.08A8 8 0 1 0 88.64 140A80.27 80.27 0 0 0 56 204.5V232a8 8 0 0 0 16 0v-16h88a8 8 0 0 0 0-16m32-184a8 8 0 0 0-8 8v16H96a8 8 0 0 0 0 16h87.83a63.6 63.6 0 0 1-3.23 16h-72.71a8 8 0 1 0 0 16h64.65a63.7 63.7 0 0 1-14.65 15.08a8 8 0 0 0 9.47 12.9A80.27 80.27 0 0 0 200 51.5V24a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhDnaIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDnaBoldIcon],svg[ph-dna-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 204.5V232a12 12 0 0 1-24 0v-27.5a59.68 59.68 0 0 0-33.17-53.67l-48.4-24.2A83.54 83.54 0 0 1 52 51.5V24a12 12 0 0 1 24 0v27.5a59.68 59.68 0 0 0 33.17 53.67l48.4 24.2A83.54 83.54 0 0 1 204 204.5m-52-.5H76a59.8 59.8 0 0 1 2.34-16h56.2a12 12 0 0 0 0-24H91.76c1-1.1 2-2.18 3.13-3.21a12 12 0 0 0-16.45-17.48A84.38 84.38 0 0 0 52 204.5V232a12 12 0 0 0 24 0v-4h76a12 12 0 0 0 0-24m40-192a12 12 0 0 0-12 12v4h-76a12 12 0 0 0 0 24h76a59.8 59.8 0 0 1-2.34 16h-56.22a12 12 0 0 0 0 24h42.8c-1 1.1-2 2.18-3.13 3.21a12 12 0 0 0 16.45 17.48A84.38 84.38 0 0 0 204 51.5V24a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhDnaBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDnaDuotoneIcon],svg[ph-dna-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M103.8 140.1L128 128l24.2 12.1a72 72 0 0 1 39.8 64.4v3.5H64v-3.5a72 72 0 0 1 39.8-64.4M192 51.5V48H64v3.5a72 72 0 0 0 39.8 64.4L128 128l24.2-12.1A72 72 0 0 0 192 51.5" opacity=".2"></svg:path><svg:path d="M200 204.5V232a8 8 0 0 1-16 0v-27.5a63.67 63.67 0 0 0-35.38-57.25l-48.4-24.19A79.58 79.58 0 0 1 56 51.5V24a8 8 0 0 1 16 0v27.5a63.67 63.67 0 0 0 35.38 57.25l48.4 24.19A79.58 79.58 0 0 1 200 204.5m-40-4.5H72.17a63.6 63.6 0 0 1 3.23-16h72.71a8 8 0 0 0 0-16H83.46a63.7 63.7 0 0 1 14.65-15.08A8 8 0 1 0 88.64 140A80.27 80.27 0 0 0 56 204.5V232a8 8 0 0 0 16 0v-16h88a8 8 0 0 0 0-16m32-184a8 8 0 0 0-8 8v16H96a8 8 0 0 0 0 16h87.83a63.6 63.6 0 0 1-3.23 16h-72.71a8 8 0 1 0 0 16h64.65a63.7 63.7 0 0 1-14.65 15.08a8 8 0 0 0 9.47 12.9A80.27 80.27 0 0 0 200 51.5V24a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhDnaDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDnaFillIcon],svg[ph-dna-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 204.5V232a8 8 0 0 1-16 0v-27.5a63.67 63.67 0 0 0-35.38-57.25l-48.4-24.19A79.58 79.58 0 0 1 56 51.5V24a8 8 0 0 1 16 0v27.5a63.67 63.67 0 0 0 35.38 57.25l48.4 24.19A79.58 79.58 0 0 1 200 204.5M163.18 192H83.91a8 8 0 0 1-8-8.53a8.18 8.18 0 0 1 8.27-7.47h65.52a4 4 0 0 0 2.75-6.9a48.2 48.2 0 0 0-11-7.53L94.8 138.23a4 4 0 0 0-4.08.3A79.51 79.51 0 0 0 56 204.5v27.23a8.17 8.17 0 0 0 7.47 8.27a8 8 0 0 0 8.53-8v-16h92a4 4 0 0 0 4-4v-7.5a49 49 0 0 0-.9-9.32a4 4 0 0 0-3.92-3.18m28.29-176a8.17 8.17 0 0 0-7.47 8.27V40H92a4 4 0 0 0-4 4v7.5a49 49 0 0 0 .9 9.32A4 4 0 0 0 92.82 64h79a8.18 8.18 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53H106.3a4 4 0 0 0-2.75 6.9a48.2 48.2 0 0 0 11 7.53l46.67 23.34a4 4 0 0 0 4.08-.3A79.51 79.51 0 0 0 200 51.5V24a8 8 0 0 0-8.53-8"></svg:path>`,
})
export class PhDnaFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDnaLightIcon],svg[ph-dna-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 204.5V232a6 6 0 0 1-12 0v-27.5a65.64 65.64 0 0 0-36.48-59l-48.4-24.2A77.57 77.57 0 0 1 58 51.5V24a6 6 0 0 1 12 0v27.5a65.64 65.64 0 0 0 36.48 59l48.4 24.2A77.57 77.57 0 0 1 198 204.5m-38-2.5H70.05A66 66 0 0 1 74 182h74.13a6 6 0 0 0 0-12H79.77a65.9 65.9 0 0 1 17.16-18.7a6 6 0 0 0-7.1-9.67A78.27 78.27 0 0 0 58 204.5V232a6 6 0 0 0 12 0v-18h90a6 6 0 0 0 0-12m32-184a6 6 0 0 0-6 6v18H96a6 6 0 0 0 0 12h90a66 66 0 0 1-4 20h-74.11a6 6 0 1 0 0 12h68.34a65.9 65.9 0 0 1-17.16 18.7a6 6 0 0 0 7.1 9.67A78.27 78.27 0 0 0 198 51.5V24a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhDnaLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDnaThinIcon],svg[ph-dna-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 204.5V232a4 4 0 0 1-8 0v-27.5a67.62 67.62 0 0 0-37.59-60.82L102 119.48a75.6 75.6 0 0 1-42-68V24a4 4 0 0 1 8 0v27.5a67.62 67.62 0 0 0 37.59 60.82l48.4 24.2A75.6 75.6 0 0 1 196 204.5m-36-.5H68a67.7 67.7 0 0 1 4.59-24h75.51a4 4 0 0 0 0-8H76.3a67.9 67.9 0 0 1 19.45-22.31a4 4 0 0 0-4.75-6.45a76.26 76.26 0 0 0-31 61.26V232a4 4 0 0 0 8 0v-20h92a4 4 0 0 0 0-8m32-184a4 4 0 0 0-4 4v20H96a4 4 0 0 0 0 8h92a67.7 67.7 0 0 1-4.59 24h-75.52a4 4 0 1 0 0 8h71.81a67.9 67.9 0 0 1-19.45 22.31a4 4 0 0 0 4.74 6.45A76.26 76.26 0 0 0 196 51.5V24a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhDnaThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDogIcon],svg[ph-dog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.71 125l-16.42-88a16 16 0 0 0-19.61-12.58l-.31.09L150.85 40h-45.7L52.63 24.56l-.31-.09a16 16 0 0 0-19.61 12.58L16.29 125a15.77 15.77 0 0 0 9.12 17.52a16.3 16.3 0 0 0 6.71 1.48a15.5 15.5 0 0 0 7.88-2.16V184a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-42.15a15.5 15.5 0 0 0 7.87 2.16a16.3 16.3 0 0 0 6.72-1.47a15.77 15.77 0 0 0 9.12-17.54M32 128l16.43-88L90.5 52.37Zm144 80h-40v-12.69l13.66-13.65a8 8 0 0 0-11.32-11.32L128 180.69l-10.34-10.35a8 8 0 0 0-11.32 11.32L120 195.31V208H80a24 24 0 0 1-24-24v-60.89L107.92 56h40.15L200 123.11V184a24 24 0 0 1-24 24m48-80l-58.5-75.63L207.57 40zm-120 12a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDogIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDogBoldIcon],svg[ph-dog-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 136a16 16 0 1 1-16-16a16 16 0 0 1 16 16m56-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m68.24 26.18a20.4 20.4 0 0 1-8.41 1.85a19.6 19.6 0 0 1-3.83-.39V184a44.05 44.05 0 0 1-44 44H80a44.05 44.05 0 0 1-44-44v-36.37a19 19 0 0 1-3.85.39a20.3 20.3 0 0 1-8.39-1.84a19.71 19.71 0 0 1-11.4-21.9l16.42-88a20 20 0 0 1 24.51-15.69l.47.13l52 15.27h44.54l52-15.27l.47-.13a20 20 0 0 1 24.51 15.72l16.42 88a19.71 19.71 0 0 1-11.46 21.87m-60-91.63L217 112.42l-12.56-67.33ZM39 112.42l44.76-57.87l-32.2-9.46ZM196 184v-59.52L146.11 60h-36.22L60 124.48V184a20 20 0 0 0 20 20h36v-7l-12.48-12.49a12 12 0 0 1 17-17L128 175l7.51-7.52a12 12 0 0 1 17 17L140 197v7h36a20 20 0 0 0 20-20"></svg:path>`,
})
export class PhDogBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDogDuotoneIcon],svg[ph-dog-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 120.38V184a32 32 0 0 1-32 32H80a32 32 0 0 1-32-32v-63.62L104 48h48Z" opacity=".2"></svg:path><svg:path d="m239.71 125l-16.42-88a16 16 0 0 0-19.61-12.58l-.31.09L150.85 40h-45.7L52.63 24.56l-.31-.09a16 16 0 0 0-19.61 12.58L16.29 125a15.77 15.77 0 0 0 9.12 17.52a16.3 16.3 0 0 0 6.71 1.48a15.5 15.5 0 0 0 7.88-2.16V184a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-42.15a15.5 15.5 0 0 0 7.87 2.16a16.3 16.3 0 0 0 6.72-1.47a15.77 15.77 0 0 0 9.12-17.54M32 128l16.43-88L90.5 52.37Zm144 80h-40v-12.69l13.66-13.65a8 8 0 0 0-11.32-11.32L128 180.69l-10.34-10.35a8 8 0 0 0-11.32 11.32L120 195.31V208H80a24 24 0 0 1-24-24v-60.89L107.93 56h40.14L200 123.11V184a24 24 0 0 1-24 24m48-80l-58.5-75.63L207.57 40zm-120 12a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDogDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDogFillIcon],svg[ph-dog-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.71 125l-16.42-88a16 16 0 0 0-19.61-12.58l-.31.09L150.85 40h-45.7L52.63 24.56l-.31-.09a16 16 0 0 0-19.61 12.58L16.29 125a15.77 15.77 0 0 0 9.12 17.52a16.3 16.3 0 0 0 6.71 1.48a15.5 15.5 0 0 0 7.88-2.16V184a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-42.15a15.5 15.5 0 0 0 7.87 2.16a16.3 16.3 0 0 0 6.72-1.47a15.77 15.77 0 0 0 9.12-17.54M176 208h-40v-12.69l13.66-13.65a8 8 0 0 0-11.32-11.32L128 180.69l-10.34-10.35a8 8 0 0 0-11.32 11.32L120 195.31V208H80a24 24 0 0 1-24-24v-60.89L107.93 56h40.14L200 123.11V184a24 24 0 0 1-24 24m-72-68a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDogFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDogLightIcon],svg[ph-dog-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102 140a10 10 0 1 1-10-10a10 10 0 0 1 10 10m62-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m65.77 10.72a14.2 14.2 0 0 1-5.89 1.29a13.72 13.72 0 0 1-9.88-4.23V184a38 38 0 0 1-38 38H80a38 38 0 0 1-38-38v-46.22a13.76 13.76 0 0 1-9.89 4.22a14.2 14.2 0 0 1-5.88-1.29a13.82 13.82 0 0 1-8-15.34l16.42-88a14 14 0 0 1 17.16-11l.24.07L104.86 42h46.28l52.79-15.51l.24-.07a14 14 0 0 1 17.16 11l16.42 88a13.81 13.81 0 0 1-7.98 15.3M93.88 51.27L48.84 38a1.9 1.9 0 0 0-1.49.27a2 2 0 0 0-.88 1.32l-16.42 88a2 2 0 0 0 3.54 1.61ZM202 184v-61.57L149.06 54h-42.12L54 122.43V184a26 26 0 0 0 26 26h42v-15.52l-14.24-14.24a6 6 0 0 1 8.48-8.48L128 183.51l11.76-11.75a6 6 0 0 1 8.48 8.48L134 194.48V210h42a26 26 0 0 0 26-26m24-56.4l-16.42-88a2 2 0 0 0-.88-1.31a2.07 2.07 0 0 0-1.49-.27l-45 13.23l60.32 78a2 2 0 0 0 3.47-1.65"></svg:path>`,
})
export class PhDogLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDogThinIcon],svg[ph-dog-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 140a8 8 0 1 1-8-8a8 8 0 0 1 8 8m64 8a8 8 0 1 0-8-8a8 8 0 0 0 8 8m64.94-9.11a12.1 12.1 0 0 1-5 1.11a11.83 11.83 0 0 1-9.35-4.62l-2.59-3.29V184a36 36 0 0 1-36 36H80a36 36 0 0 1-36-36v-51.91l-2.53 3.27A11.88 11.88 0 0 1 32.1 140a12.1 12.1 0 0 1-5-1.11a11.82 11.82 0 0 1-6.84-13.14l16.42-88a12 12 0 0 1 14.7-9.43h.16L104.58 44h46.84l53.08-15.6h.16a12 12 0 0 1 14.7 9.43l16.42 88a11.81 11.81 0 0 1-6.84 13.06M97.25 50.18L49.34 36.1a4.2 4.2 0 0 0-.92-.1a4 4 0 0 0-3.92 3.26l-16.42 88a4 4 0 0 0 7.08 3.22ZM204 121.75L150 52h-44l-54 69.75V184a28 28 0 0 0 28 28h44v-18.34l-14.83-14.83a4 4 0 0 1 5.66-5.66L128 186.34l13.17-13.17a4 4 0 0 1 5.66 5.66L132 193.66V212h44a28 28 0 0 0 28-28Zm23.92 5.48l-16.42-88a4 4 0 0 0-4.84-3.16l-47.91 14.11l62.11 80.28a4 4 0 0 0 7.06-3.23"></svg:path>`,
})
export class PhDogThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorIcon],svg[ph-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 216h-24V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v176H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M64 40h128v176H64Zm104 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDoorIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorBoldIcon],svg[ph-door-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 212h-20V40a20 20 0 0 0-20-20H64a20 20 0 0 0-20 20v172H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24M68 44h120v168H68Zm104 88a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDoorBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorDuotoneIcon],svg[ph-door-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v184H56V40a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M232 216h-24V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v176H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M64 40h128v176H64Zm104 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDoorDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorFillIcon],svg[ph-door-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 216h-24V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v176H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-68-72a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDoorFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorLightIcon],svg[ph-door-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 218h-26V40a14 14 0 0 0-14-14H64a14 14 0 0 0-14 14v178H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12M62 40a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v178H62Zm104 92a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDoorLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorOpenIcon],svg[ph-door-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 216h-24V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v176H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-40 0h-16V40h16ZM64 40h96v176H64Zm80 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDoorOpenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorOpenBoldIcon],svg[ph-door-open-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 212h-20V40a20 20 0 0 0-20-20H64a20 20 0 0 0-20 20v172H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24m-44 0h-16V44h16ZM68 44h80v168H68Zm68 84a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDoorOpenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorOpenDuotoneIcon],svg[ph-door-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v184h-32V32h24a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M232 216h-24V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v176H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-40 0h-16V40h16ZM64 40h96v176H64Zm80 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDoorOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorOpenFillIcon],svg[ph-door-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 216h-24V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v176H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-64 0H64V40h104Zm-40-84a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhDoorOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorOpenLightIcon],svg[ph-door-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 218h-26V40a14 14 0 0 0-14-14H64a14 14 0 0 0-14 14v178H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12M194 40v178h-20V38h18a2 2 0 0 1 2 2M62 40a2 2 0 0 1 2-2h98v180H62Zm80 92a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDoorOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorOpenThinIcon],svg[ph-door-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 220h-28V40a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v180H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8M196 40v180h-24V36h20a4 4 0 0 1 4 4M60 40a4 4 0 0 1 4-4h100v184H60Zm80 92a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDoorOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorThinIcon],svg[ph-door-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 220h-28V40a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v180H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8M60 40a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v180H60Zm104 92a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDoorThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotIcon],svg[ph-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDotIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotBoldIcon],svg[ph-dot-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDotBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotDuotoneIcon],svg[ph-dot-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 128a48 48 0 1 1-48-48a48 48 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDotDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotFillIcon],svg[ph-dot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0 60a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDotFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotLightIcon],svg[ph-dot-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 128a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDotLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotOutlineIcon],svg[ph-dot-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhDotOutlineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotOutlineBoldIcon],svg[ph-dot-outline-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 40a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhDotOutlineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotOutlineDuotoneIcon],svg[ph-dot-outline-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 128a24 24 0 1 1-24-24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhDotOutlineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotOutlineFillIcon],svg[ph-dot-outline-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28"></svg:path>`,
})
export class PhDotOutlineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotOutlineLightIcon],svg[ph-dot-outline-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 98a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhDotOutlineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotOutlineThinIcon],svg[ph-dot-outline-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 100a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhDotOutlineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotThinIcon],svg[ph-dot-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 128a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDotThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsNineIcon],svg[ph-dots-nine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 60a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12M60 116a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12M60 184a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhDotsNineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsNineBoldIcon],svg[ph-dots-nine-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 60a16 16 0 1 1-16-16a16 16 0 0 1 16 16m52-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m68 32a16 16 0 1 0-16-16a16 16 0 0 0 16 16M60 112a16 16 0 1 0 16 16a16 16 0 0 0-16-16m68 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16m68 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16M60 180a16 16 0 1 0 16 16a16 16 0 0 0-16-16m68 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16m68 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhDotsNineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsNineDuotoneIcon],svg[ph-dots-nine-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M72 60a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12M60 116a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12M60 184a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhDotsNineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsNineFillIcon],svg[ph-dots-nine-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M76 192a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m52 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m52 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDotsNineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsNineLightIcon],svg[ph-dots-nine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M70 60a10 10 0 1 1-10-10a10 10 0 0 1 10 10m58-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 20a10 10 0 1 0-10-10a10 10 0 0 0 10 10M60 118a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10M60 186a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhDotsNineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsNineThinIcon],svg[ph-dots-nine-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M68 60a8 8 0 1 1-8-8a8 8 0 0 1 8 8m60-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 16a8 8 0 1 0-8-8a8 8 0 0 0 8 8M60 120a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8M60 188a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhDotsNineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixIcon],svg[ph-dots-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12M60 152a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhDotsSixIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixBoldIcon],svg[ph-dots-six-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 92a16 16 0 1 1-16-16a16 16 0 0 1 16 16m52-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m68 32a16 16 0 1 0-16-16a16 16 0 0 0 16 16M60 148a16 16 0 1 0 16 16a16 16 0 0 0-16-16m68 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16m68 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhDotsSixBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixDuotoneIcon],svg[ph-dots-six-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 64v128a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M72 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12M60 152a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhDotsSixDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixFillIcon],svg[ph-dots-six-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M68 168a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-56a12 12 0 1 1 12-12a12 12 0 0 1-12 12m60 56a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-56a12 12 0 1 1 12-12a12 12 0 0 1-12 12m60 56a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-56a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDotsSixFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixLightIcon],svg[ph-dots-six-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M70 92a10 10 0 1 1-10-10a10 10 0 0 1 10 10m58-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 20a10 10 0 1 0-10-10a10 10 0 0 0 10 10M60 154a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhDotsSixLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixThinIcon],svg[ph-dots-six-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M68 92a8 8 0 1 1-8-8a8 8 0 0 1 8 8m60-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 16a8 8 0 1 0-8-8a8 8 0 0 0 8 8M60 156a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhDotsSixThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixVerticalIcon],svg[ph-dots-six-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 60a12 12 0 1 1-12-12a12 12 0 0 1 12 12m60 12a12 12 0 1 0-12-12a12 12 0 0 0 12 12m-72 44a12 12 0 1 0 12 12a12 12 0 0 0-12-12m72 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-72 68a12 12 0 1 0 12 12a12 12 0 0 0-12-12m72 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhDotsSixVerticalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixVerticalBoldIcon],svg[ph-dots-six-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 60a16 16 0 1 1-16-16a16 16 0 0 1 16 16m56 16a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-72 36a16 16 0 1 0 16 16a16 16 0 0 0-16-16m72 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-72 68a16 16 0 1 0 16 16a16 16 0 0 0-16-16m72 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhDotsSixVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixVerticalDuotoneIcon],svg[ph-dots-six-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 32v192a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M104 60a12 12 0 1 1-12-12a12 12 0 0 1 12 12m60 12a12 12 0 1 0-12-12a12 12 0 0 0 12 12m-72 44a12 12 0 1 0 12 12a12 12 0 0 0-12-12m72 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-72 68a12 12 0 1 0 12 12a12 12 0 0 0-12-12m72 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhDotsSixVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixVerticalFillIcon],svg[ph-dots-six-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 16H64a16 16 0 0 0-16 16v192a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V32a16 16 0 0 0-16-16m-92 184a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12a12 12 0 0 1-12 12m56 120a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDotsSixVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixVerticalLightIcon],svg[ph-dots-six-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102 60a10 10 0 1 1-10-10a10 10 0 0 1 10 10m62 10a10 10 0 1 0-10-10a10 10 0 0 0 10 10m-72 48a10 10 0 1 0 10 10a10 10 0 0 0-10-10m72 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-72 68a10 10 0 1 0 10 10a10 10 0 0 0-10-10m72 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhDotsSixVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixVerticalThinIcon],svg[ph-dots-six-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 60a8 8 0 1 1-8-8a8 8 0 0 1 8 8m64 8a8 8 0 1 0-8-8a8 8 0 0 0 8 8m-72 52a8 8 0 1 0 8 8a8 8 0 0 0-8-8m72 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m-72 68a8 8 0 1 0 8 8a8 8 0 0 0-8-8m72 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhDotsSixVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeIcon],svg[ph-dots-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-136 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhDotsThreeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeBoldIcon],svg[ph-dots-three-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-84-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m136 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhDotsThreeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleIcon],svg[ph-dots-three-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m12-88a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDotsThreeCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleBoldIcon],svg[ph-dots-three-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m-16-84a16 16 0 1 1-16-16a16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDotsThreeCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleDuotoneIcon],svg[ph-dots-three-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m56-88a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDotsThreeCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleFillIcon],svg[ph-dots-three-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24M84 140a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDotsThreeCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleLightIcon],svg[ph-dots-three-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m10-90a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-44 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m88 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDotsThreeCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleThinIcon],svg[ph-dots-three-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m8-92a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-44 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m88 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDotsThreeCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleVerticalIcon],svg[ph-dots-three-circle-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m12-88a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0-44a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0 88a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDotsThreeCircleVerticalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleVerticalBoldIcon],svg[ph-dots-three-circle-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m16-116a16 16 0 1 1-16-16a16 16 0 0 1 16 16m0 64a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDotsThreeCircleVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleVerticalDuotoneIcon],svg[ph-dots-three-circle-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m12-88a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0-44a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0 88a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDotsThreeCircleVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleVerticalFillIcon],svg[ph-dots-three-circle-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128a104 104 0 1 0-104 104a104.13 104.13 0 0 0 104-104M116 84a12 12 0 1 1 12 12a12 12 0 0 1-12-12m0 44a12 12 0 1 1 12 12a12 12 0 0 1-12-12m0 44a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhDotsThreeCircleVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleVerticalLightIcon],svg[ph-dots-three-circle-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m10-134a10 10 0 1 1-10-10a10 10 0 0 1 10 10m0 44a10 10 0 1 1-10-10a10 10 0 0 1 10 10m0 44a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDotsThreeCircleVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleVerticalThinIcon],svg[ph-dots-three-circle-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m8-136a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0 44a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0 44a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDotsThreeCircleVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeDuotoneIcon],svg[ph-dots-three-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 96v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-136 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhDotsThreeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeFillIcon],svg[ph-dots-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M60 140a12 12 0 1 1 12-12a12 12 0 0 1-12 12m68 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m68 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDotsThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeLightIcon],svg[ph-dots-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 128a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-78-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m136 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhDotsThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineIcon],svg[ph-dots-three-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16M48 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m160-48a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhDotsThreeOutlineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineBoldIcon],svg[ph-dots-three-outline-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 40a8 8 0 1 1 8-8a8 8 0 0 1-8 8m80-40a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 40a8 8 0 1 1 8-8a8 8 0 0 1-8 8M48 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 40a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhDotsThreeOutlineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineDuotoneIcon],svg[ph-dots-three-outline-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 128a24 24 0 1 1-24-24a24 24 0 0 1 24 24M48 104a24 24 0 1 0 24 24a24 24 0 0 0-24-24m160 0a24 24 0 1 0 24 24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16M48 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m160-48a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhDotsThreeOutlineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineFillIcon],svg[ph-dots-three-outline-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28M48 100a28 28 0 1 0 28 28a28 28 0 0 0-28-28m160 0a28 28 0 1 0 28 28a28 28 0 0 0-28-28"></svg:path>`,
})
export class PhDotsThreeOutlineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineLightIcon],svg[ph-dots-three-outline-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 98a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18M48 98a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18m160-48a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhDotsThreeOutlineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineThinIcon],svg[ph-dots-three-outline-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 100a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20m-80-48a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20m160-48a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhDotsThreeOutlineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineVerticalIcon],svg[ph-dots-three-outline-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-64a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m0 144a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhDotsThreeOutlineVerticalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineVerticalBoldIcon],svg[ph-dots-three-outline-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 40a8 8 0 1 1 8-8a8 8 0 0 1-8 8m0-56a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-40a8 8 0 1 1-8 8a8 8 0 0 1 8-8m0 136a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 40a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhDotsThreeOutlineVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineVerticalDuotoneIcon],svg[ph-dots-three-outline-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 128a24 24 0 1 1-24-24a24 24 0 0 1 24 24m-24-56a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0 112a24 24 0 1 0 24 24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-64a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m0 144a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhDotsThreeOutlineVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineVerticalFillIcon],svg[ph-dots-three-outline-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-28-52a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0 104a28 28 0 1 0 28 28a28 28 0 0 0-28-28"></svg:path>`,
})
export class PhDotsThreeOutlineVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineVerticalLightIcon],svg[ph-dots-three-outline-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 98a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18m0-68a30 30 0 1 0-30-30a30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18a18 18 0 0 1 18-18m0 148a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhDotsThreeOutlineVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineVerticalThinIcon],svg[ph-dots-three-outline-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 100a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20m0-72a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-48a20 20 0 1 1-20 20a20 20 0 0 1 20-20m0 152a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhDotsThreeOutlineVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeThinIcon],svg[ph-dots-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 128a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-76-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m136 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhDotsThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeVerticalIcon],svg[ph-dots-three-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-12-56a12 12 0 1 0-12-12a12 12 0 0 0 12 12m0 112a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhDotsThreeVerticalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeVerticalBoldIcon],svg[ph-dots-three-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 60a16 16 0 1 1 16 16a16 16 0 0 1-16-16m16 52a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0 68a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhDotsThreeVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeVerticalDuotoneIcon],svg[ph-dots-three-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 32v192a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-12-56a12 12 0 1 0-12-12a12 12 0 0 0 12 12m0 112a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhDotsThreeVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeVerticalFillIcon],svg[ph-dots-three-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 16H96a16 16 0 0 0-16 16v192a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V32a16 16 0 0 0-16-16m-32 192a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-68a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-68a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDotsThreeVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeVerticalLightIcon],svg[ph-dots-three-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M118 60a10 10 0 1 1 10 10a10 10 0 0 1-10-10m10 58a10 10 0 1 0 10 10a10 10 0 0 0-10-10m0 68a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhDotsThreeVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeVerticalThinIcon],svg[ph-dots-three-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 60a8 8 0 1 1 8 8a8 8 0 0 1-8-8m8 60a8 8 0 1 0 8 8a8 8 0 0 0-8-8m0 68a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhDotsThreeVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadIcon],svg[ph-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h40a8 8 0 0 1 0 16H32v64h192v-64h-40a8 8 0 0 1 0-16h40a16 16 0 0 1 16 16m-117.66-2.34a8 8 0 0 0 11.32 0l48-48a8 8 0 0 0-11.32-11.32L136 108.69V24a8 8 0 0 0-16 0v84.69L85.66 74.34a8 8 0 0 0-11.32 11.32ZM200 168a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhDownloadIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadBoldIcon],svg[ph-download-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M71.51 88.49a12 12 0 0 1 17-17L116 99V24a12 12 0 0 1 24 0v75l27.51-27.52a12 12 0 0 1 17 17l-48 48a12 12 0 0 1-17 0ZM224 116h-36a12 12 0 0 0 0 24h32v56H36v-56h32a12 12 0 0 0 0-24H32a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-64a20 20 0 0 0-20-20m-20 52a16 16 0 1 0-16 16a16 16 0 0 0 16-16"></svg:path>`,
})
export class PhDownloadBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadDuotoneIcon],svg[ph-download-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 136v64a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h40a8 8 0 0 1 0 16H32v64h192v-64h-40a8 8 0 0 1 0-16h40a16 16 0 0 1 16 16m-117.66-2.34a8 8 0 0 0 11.32 0l48-48a8 8 0 0 0-11.32-11.32L136 108.69V24a8 8 0 0 0-16 0v84.69L85.66 74.34a8 8 0 0 0-11.32 11.32ZM200 168a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path></svg:g>`,
})
export class PhDownloadDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadFillIcon],svg[ph-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhDownloadFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadLightIcon],svg[ph-download-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 136v64a14 14 0 0 1-14 14H32a14 14 0 0 1-14-14v-64a14 14 0 0 1 14-14h40a6 6 0 0 1 0 12H32a2 2 0 0 0-2 2v64a2 2 0 0 0 2 2h192a2 2 0 0 0 2-2v-64a2 2 0 0 0-2-2h-40a6 6 0 0 1 0-12h40a14 14 0 0 1 14 14m-114.24-3.76a6 6 0 0 0 8.48 0l48-48a6 6 0 0 0-8.48-8.48L134 113.51V24a6 6 0 0 0-12 0v89.51L84.24 75.76a6 6 0 0 0-8.48 8.48ZM198 168a10 10 0 1 0-10 10a10 10 0 0 0 10-10"></svg:path>`,
})
export class PhDownloadLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadSimpleIcon],svg[ph-download-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 144v64a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0m-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 124.69V32a8 8 0 0 0-16 0v92.69L93.66 98.34a8 8 0 0 0-11.32 11.32Z"></svg:path>`,
})
export class PhDownloadSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadSimpleBoldIcon],svg[ph-download-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 144v64a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12v-64a12 12 0 0 1 24 0v52h152v-52a12 12 0 0 1 24 0m-108.49 8.49a12 12 0 0 0 17 0l40-40a12 12 0 0 0-17-17L140 115V32a12 12 0 0 0-24 0v83L96.49 95.51a12 12 0 0 0-17 17Z"></svg:path>`,
})
export class PhDownloadSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadSimpleDuotoneIcon],svg[ph-download-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160H40V48a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M224 144v64a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0m-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 124.69V32a8 8 0 0 0-16 0v92.69L93.66 98.34a8 8 0 0 0-11.32 11.32Z"></svg:path></svg:g>`,
})
export class PhDownloadSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadSimpleFillIcon],svg[ph-download-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 144v64a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0m-101.66 5.66a8 8 0 0 0 11.32 0l40-40A8 8 0 0 0 168 96h-32V32a8 8 0 0 0-16 0v64H88a8 8 0 0 0-5.66 13.66Z"></svg:path>`,
})
export class PhDownloadSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadSimpleLightIcon],svg[ph-download-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 144v64a6 6 0 0 1-6 6H40a6 6 0 0 1-6-6v-64a6 6 0 0 1 12 0v58h164v-58a6 6 0 0 1 12 0m-98.24 4.24a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0-8.48-8.48L134 129.51V32a6 6 0 0 0-12 0v97.51L92.24 99.76a6 6 0 0 0-8.48 8.48Z"></svg:path>`,
})
export class PhDownloadSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadSimpleThinIcon],svg[ph-download-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 144v64a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-64a4 4 0 0 1 8 0v60h168v-60a4 4 0 0 1 8 0m-94.83 2.83a4 4 0 0 0 5.66 0l40-40a4 4 0 1 0-5.66-5.66L132 134.34V32a4 4 0 0 0-8 0v102.34l-33.17-33.17a4 4 0 0 0-5.66 5.66Z"></svg:path>`,
})
export class PhDownloadSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadThinIcon],svg[ph-download-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 136v64a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12v-64a12 12 0 0 1 12-12h40a4 4 0 0 1 0 8H32a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h192a4 4 0 0 0 4-4v-64a4 4 0 0 0-4-4h-40a4 4 0 0 1 0-8h40a12 12 0 0 1 12 12m-110.83-5.17a4 4 0 0 0 5.66 0l48-48a4 4 0 1 0-5.66-5.66L132 118.34V24a4 4 0 0 0-8 0v94.34L82.83 77.17a4 4 0 0 0-5.66 5.66ZM196 168a8 8 0 1 0-8 8a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhDownloadThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDressIcon],svg[ph-dress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214.7 209.7a2 2 0 0 0-.11-.25l-45.48-96.86l20.5-32.18a2 2 0 0 0 .11-.18a16 16 0 0 0 0-16.46c-.09-.16-.2-.32-.3-.47L168 32.7V8a8 8 0 0 0-16 0v24.42L146.74 39a24 24 0 0 1-37.48 0L104 32.42V8a8 8 0 0 0-16 0v24.7L66.58 63.3c-.1.15-.21.31-.3.47a16 16 0 0 0 0 16.46a2 2 0 0 0 .11.18l20.5 32.18l-45.48 96.86a2 2 0 0 0-.11.25A16 16 0 0 0 56 232h144a16 16 0 0 0 14.71-22.3ZM80 72l16.43-23.43l.33.42a40 40 0 0 0 62.48 0l.33-.42L176 72l-20.38 32h-55.23ZM56 216l45.07-96h53.84L200 216Z"></svg:path>`,
})
export class PhDressIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDressBoldIcon],svg[ph-dress-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.38 208.12c-.06-.12-.11-.25-.17-.37l-44.54-94.87L193 82.56c.06-.09.12-.18.17-.27a20 20 0 0 0 0-20.58c-.14-.24-.3-.48-.46-.71L172 31.44V12a12 12 0 0 0-24 0v19l-4.38 5.47a20 20 0 0 1-31.24 0L108 31V12a12 12 0 0 0-24 0v19.44L63.31 61c-.16.23-.32.47-.46.71a20 20 0 0 0 0 20.58c0 .09.11.18.17.27l19.31 30.32l-44.54 94.87c-.06.12-.11.25-.17.37A20 20 0 0 0 56 236h144a20 20 0 0 0 18.39-27.88ZM128 68a43.75 43.75 0 0 0 31.21-13l12 17.1l-17.79 27.9h-50.84L84.82 72.12l12-17.1A43.75 43.75 0 0 0 128 68M62.31 212l41.31-88h48.76l41.31 88Z"></svg:path>`,
})
export class PhDressBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDressDuotoneIcon],svg[ph-dress-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 224H56a8 8 0 0 1-7.35-11.15L96 112L73.14 76.12a8 8 0 0 1 0-8.24L96 35.23l7 8.77a32 32 0 0 0 50 0l7-8.76l22.86 32.65a8 8 0 0 1 0 8.24L160 112l47.34 100.85A8 8 0 0 1 200 224" opacity=".2"></svg:path><svg:path d="M214.7 209.7a2 2 0 0 0-.11-.25l-45.48-96.86l20.5-32.18l.11-.18a16 16 0 0 0 0-16.46c-.09-.16-.2-.32-.3-.47L168 32.7V8a8 8 0 0 0-16 0v24.42L146.74 39a24 24 0 0 1-37.48 0L104 32.42V8a8 8 0 0 0-16 0v24.7L66.58 63.3c-.1.15-.21.31-.3.47a16 16 0 0 0 0 16.46l.11.18l20.5 32.18l-45.48 96.86a2 2 0 0 0-.11.25A16 16 0 0 0 56 232h144a16 16 0 0 0 14.71-22.3ZM80 72l16.43-23.43l.33.42a40 40 0 0 0 62.48 0l.33-.42L176 72l-20.38 32h-55.23ZM56 216l45.07-96h53.84L200 216Z"></svg:path></svg:g>`,
})
export class PhDressDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDressFillIcon],svg[ph-dress-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M66.26 80.23a15.26 15.26 0 0 1-1.65-12.17a15.5 15.5 0 0 1 2-4.76L88 32.7V8a8 8 0 0 1 8.53-8A8.17 8.17 0 0 1 104 8.27v24.15l5.25 6.58a23.91 23.91 0 0 0 19.13 9a24.67 24.67 0 0 0 18.71-9.43l4.91-6.15V8a8 8 0 0 1 8.53-8A8.17 8.17 0 0 1 168 8.27V32.7l21.42 30.6a15.5 15.5 0 0 1 2 4.76a15.26 15.26 0 0 1-1.65 12.17a2 2 0 0 0-.11.18l-13.86 21.74a4 4 0 0 1-3.4 1.85H83.6a4 4 0 0 1-3.37-1.85L66.37 80.41a2 2 0 0 0-.11-.18m148.5 129.56a2.5 2.5 0 0 0-.15-.34l-40.92-87.15a4 4 0 0 0-3.63-2.3H85.94a4 4 0 0 0-3.63 2.3l-40.92 87.15a2.5 2.5 0 0 0-.15.34A16.2 16.2 0 0 0 41.6 223a16 16 0 0 0 14.4 9h144a16 16 0 0 0 14.39-9a16.2 16.2 0 0 0 .37-13.21"></svg:path>`,
})
export class PhDressFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDressLightIcon],svg[ph-dress-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.86 210.49a1 1 0 0 0-.08-.19l-45.94-97.86l21.08-33.1l.09-.14a14 14 0 0 0 0-14.4c-.07-.12-.15-.24-.23-.36L166 33.33V8a6 6 0 0 0-12 0v25.12l-5.7 7.12a26 26 0 0 1-40.6 0l-5.7-7.12V8a6 6 0 0 0-12 0v25.33L68.22 64.44c-.08.12-.16.24-.23.36a14 14 0 0 0 0 14.4l.09.14l21.08 33.1l-45.94 97.86a1 1 0 0 0-.08.19A14 14 0 0 0 56 230h144a14 14 0 0 0 12.87-19.51ZM78.26 73a2 2 0 0 1-.05-1.89l18.11-25.88l2 2.51a38 38 0 0 0 59.34 0l2-2.51l18.11 25.86a2 2 0 0 1 0 1.89l-21 33H99.29Zm123.4 144.1a1.93 1.93 0 0 1-1.67.9H56a2 2 0 0 1-1.87-2.72L99.81 118h56.38l45.67 97.28a1.92 1.92 0 0 1-.2 1.82"></svg:path>`,
})
export class PhDressLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDressThinIcon],svg[ph-dress-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m211 211.27l-.06-.12l-46.41-98.86l21.68-34v-.1a11.94 11.94 0 0 0 0-12.34l-.15-.24L164 34V8a4 4 0 0 0-8 0v25.82l-6.13 7.67a28 28 0 0 1-43.74 0L100 33.82V8a4 4 0 0 0-8 0v26L69.86 65.59l-.15.24a11.94 11.94 0 0 0 0 12.34a1 1 0 0 1 .05.1l21.68 34L45 211.15l-.06.12A12 12 0 0 0 56 228h144a12 12 0 0 0 11-16.73M76.54 74a4 4 0 0 1 0-4l19.67-28.1l3.68 4.59a36 36 0 0 0 56.22 0l3.68-4.59l19.7 28.1a4 4 0 0 1 0 4l-21.65 34H98.19Zm126.79 144.2A3.94 3.94 0 0 1 200 220H56a3.94 3.94 0 0 1-3.33-1.8a3.89 3.89 0 0 1-.36-3.72L98.54 116h58.92l46.23 98.48a3.89 3.89 0 0 1-.36 3.72"></svg:path>`,
})
export class PhDressThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDresserIcon],svg[ph-dresser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 192a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8M120 72h16a8 8 0 0 0 0-16h-16a8 8 0 0 0 0 16m16 48h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m80-80v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16M56 152h144v-48H56Zm0-112v48h144V40Zm144 176v-48H56v48z"></svg:path>`,
})
export class PhDresserIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDresserBoldIcon],svg[ph-dresser-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 176a12 12 0 0 1-12 12h-16a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12m-28-84h16a12 12 0 0 0 0-24h-16a12 12 0 0 0 0 24m100-52v176a20 20 0 0 1-20 20H56a20 20 0 0 1-20-20V40a20 20 0 0 1 20-20h144a20 20 0 0 1 20 20M60 44v72h136V44Zm136 168v-72H60v72Z"></svg:path>`,
})
export class PhDresserBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDresserDuotoneIcon],svg[ph-dresser-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40v176a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M144 192a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8M120 72h16a8 8 0 0 0 0-16h-16a8 8 0 0 0 0 16m16 48h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m80-80v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16M56 152h144v-48H56Zm0-112v48h144V40Zm144 176v-48H56v48z"></svg:path></svg:g>`,
})
export class PhDresserDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDresserFillIcon],svg[ph-dresser-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v40a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V40a16 16 0 0 0-16-16m-64 40h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m76 36H44a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4m-76 36h-15.73a8.18 8.18 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h15.73a8.18 8.18 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53m76 36H44a4 4 0 0 0-4 4v40a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-40a4 4 0 0 0-4-4m-76 36h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhDresserFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDresserLightIcon],svg[ph-dresser-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142 192a6 6 0 0 1-6 6h-16a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6M120 70h16a6 6 0 0 0 0-12h-16a6 6 0 0 0 0 12m16 52h-16a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12m78-82v176a14 14 0 0 1-14 14H56a14 14 0 0 1-14-14V40a14 14 0 0 1 14-14h144a14 14 0 0 1 14 14M54 154h148v-52H54Zm0-114v50h148V40a2 2 0 0 0-2-2H56a2 2 0 0 0-2 2m148 176v-50H54v50a2 2 0 0 0 2 2h144a2 2 0 0 0 2-2"></svg:path>`,
})
export class PhDresserLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDresserThinIcon],svg[ph-dresser-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 192a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4M120 68h16a4 4 0 0 0 0-8h-16a4 4 0 0 0 0 8m16 56h-16a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m76-84v176a12 12 0 0 1-12 12H56a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h144a12 12 0 0 1 12 12M52 156h152v-56H52Zm0-116v52h152V40a4 4 0 0 0-4-4H56a4 4 0 0 0-4 4m152 176v-52H52v52a4 4 0 0 0 4 4h144a4 4 0 0 0 4-4"></svg:path>`,
})
export class PhDresserThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDribbbleLogoIcon],svg[ph-dribbble-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m87.65 96.18q-3.82-.18-7.65-.18a168.6 168.6 0 0 0-43.94 5.84A166.5 166.5 0 0 0 150.61 96a168.3 168.3 0 0 0 38.2-31.55a87.78 87.78 0 0 1 26.84 55.73m-39.37-65.72A151.8 151.8 0 0 1 142 82.52a169.2 169.2 0 0 0-38.63-39a88 88 0 0 1 73 10.94Zm-90.63-3.58a153.1 153.1 0 0 1 42 39.18A151.8 151.8 0 0 1 64 104a154 154 0 0 1-20.28-1.35a88.4 88.4 0 0 1 41.93-51.77M40 128a88 88 0 0 1 .53-9.64A169 169 0 0 0 64 120a167.84 167.84 0 0 0 72.52-16.4a151 151 0 0 1 12.31 27.13a167 167 0 0 0-24.59 11.6a169.2 169.2 0 0 0-55.07 51.06A87.8 87.8 0 0 1 40 128m42 75a152.9 152.9 0 0 1 50.24-46.79a149 149 0 0 1 20.95-10a152.5 152.5 0 0 1 3.73 33.47a153 153 0 0 1-3.49 32.56A87.92 87.92 0 0 1 82 203m89.06 1.73a170 170 0 0 0 1.86-25a168.7 168.7 0 0 0-4.45-38.47A152.3 152.3 0 0 1 208 136q3.8 0 7.61.19a88.13 88.13 0 0 1-44.55 68.53Z"></svg:path>`,
})
export class PhDribbbleLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDribbbleLogoBoldIcon],svg[ph-dribbble-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m83.13 96h-3.12a172.6 172.6 0 0 0-41.39 5.06A171 171 0 0 0 156 97.39a172.3 172.3 0 0 0 32.9-27.15A83.7 83.7 0 0 1 211.13 116M170 55.3a148.5 148.5 0 0 1-27 21.88a173.3 173.3 0 0 0-30.58-31.71A83.52 83.52 0 0 1 170 55.3m-84.46.27a149.2 149.2 0 0 1 35.9 32.87A147.7 147.7 0 0 1 64 100c-5 0-10-.26-14.94-.75a84.5 84.5 0 0 1 36.47-43.68ZM44 128c0-1.73.07-3.44.17-5.14A175 175 0 0 0 64 124a171.8 171.8 0 0 0 70.84-15.22a146 146 0 0 1 8.92 19.65a171 171 0 0 0-21.52 10.44a173 173 0 0 0-53.68 48.44A83.77 83.77 0 0 1 44 128m43.77 73.72a149 149 0 0 1 46.46-42.06a147 147 0 0 1 16-7.94a148.5 148.5 0 0 1 2.67 28a148.7 148.7 0 0 1-2.9 29.34a83.8 83.8 0 0 1-62.22-7.34Zm88.29-4.89c.56-5.68.86-11.4.86-17.14a172.6 172.6 0 0 0-3.72-35.54A149 149 0 0 1 208 140h3.11a84.07 84.07 0 0 1-35.05 56.83"></svg:path>`,
})
export class PhDribbbleLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDribbbleLogoDuotoneIcon],svg[ph-dribbble-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m87.65 96.18q-3.82-.18-7.65-.18a168.6 168.6 0 0 0-43.94 5.84A166.5 166.5 0 0 0 150.61 96a168.3 168.3 0 0 0 38.2-31.55a87.78 87.78 0 0 1 26.84 55.73m-39.37-65.72A151.8 151.8 0 0 1 142 82.52a169.2 169.2 0 0 0-38.63-39a88 88 0 0 1 73 10.94Zm-90.63-3.58a153.1 153.1 0 0 1 42 39.18A151.8 151.8 0 0 1 64 104a154 154 0 0 1-20.28-1.35a88.4 88.4 0 0 1 41.93-51.77M40 128a88 88 0 0 1 .53-9.64A169 169 0 0 0 64 120a167.84 167.84 0 0 0 72.52-16.4a151 151 0 0 1 12.31 27.13a167 167 0 0 0-24.59 11.6a169.2 169.2 0 0 0-55.07 51.06A87.8 87.8 0 0 1 40 128m42 75a152.9 152.9 0 0 1 50.24-46.79a149 149 0 0 1 20.95-10a152.5 152.5 0 0 1 3.73 33.47a153 153 0 0 1-3.49 32.56A87.92 87.92 0 0 1 82 203m89.06 1.73a170 170 0 0 0 1.86-25a168.7 168.7 0 0 0-4.45-38.47A152.3 152.3 0 0 1 208 136q3.8 0 7.61.19a88.13 88.13 0 0 1-44.55 68.53Z"></svg:path></svg:g>`,
})
export class PhDribbbleLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDribbbleLogoFillIcon],svg[ph-dribbble-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M93.27 36.86a4 4 0 0 1 .82-7.19a103.94 103.94 0 0 1 88.66 9.95a4 4 0 0 1 1 5.87a153.3 153.3 0 0 1-41.89 37a169.4 169.4 0 0 0-48.59-45.63M127.58 90a153 153 0 0 0-56-46.91a3.94 3.94 0 0 0-4 .33a104.4 104.4 0 0 0-38.34 52a4 4 0 0 0 3 5.16A152.3 152.3 0 0 0 64 104a151 151 0 0 0 63.58-14m103.8 26.69a103.8 103.8 0 0 0-29.19-61.49a4 4 0 0 0-6 .34a169.2 169.2 0 0 1-45.69 40.4a167.7 167.7 0 0 1 13.55 29.9A167.6 167.6 0 0 1 208 120a169 169 0 0 1 19 1.07a4 4 0 0 0 4.38-4.35Zm-62.91 24.5a167.7 167.7 0 0 1 4.45 38.47a168 168 0 0 1-4.11 36.85a4 4 0 0 0 5.69 4.49a104.25 104.25 0 0 0 56.57-79.25a4 4 0 0 0-3.49-4.49a152.4 152.4 0 0 0-59.11 4Zm-19.64-10.45a152 152 0 0 0-12.39-27.21A167 167 0 0 1 64 120a168.4 168.4 0 0 1-34.88-3.65a4 4 0 0 0-4.81 3.56q-.31 4-.32 8.09a103.72 103.72 0 0 0 33 75.91a4 4 0 0 0 6.15-.92a169 169 0 0 1 85.69-72.22Zm-73.14 82.51a4 4 0 0 0 1.52 5.48a103.88 103.88 0 0 0 68.85 11.69a3.93 3.93 0 0 0 3.06-2.65a152.6 152.6 0 0 0 7.8-48.08a151.3 151.3 0 0 0-3.74-33.46a152.94 152.94 0 0 0-77.49 67.02"></svg:path>`,
})
export class PhDribbbleLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDribbbleLogoLightIcon],svg[ph-dribbble-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m89.81 96.3c-3.26-.19-6.54-.3-9.8-.3a166.4 166.4 0 0 0-45.25 6.29A164.3 164.3 0 0 0 148.33 96c-.14-.25-.3-.49-.44-.74a166.3 166.3 0 0 0 40.79-33.71a89.8 89.8 0 0 1 29.13 60.75m-38.52-68.21a154.5 154.5 0 0 1-37.9 31.11a167 167 0 0 0-42.51-42.36a89.87 89.87 0 0 1 80.41 11.25m-93.58-5.51a155 155 0 0 1 45 42.27A153.7 153.7 0 0 1 64 106a157 157 0 0 1-22.84-1.69a90.37 90.37 0 0 1 44.55-55.73M38 128a90 90 0 0 1 .79-11.92A167 167 0 0 0 64 118a165.7 165.7 0 0 0 73.29-17c.22.37.46.73.67 1.1a152.2 152.2 0 0 1 13.38 29.9a164.6 164.6 0 0 0-26.09 12.11a167 167 0 0 0-55.68 52.29A89.84 89.84 0 0 1 38 128m41.19 75.58a155.24 155.24 0 0 1 52.05-49.12a153 153 0 0 1 23.38-10.93a154.3 154.3 0 0 1 4.3 36.16a154.8 154.8 0 0 1-3.81 34.13a89.88 89.88 0 0 1-75.92-10.24m89.24 4.81a167 167 0 0 0 2.49-28.7a166.7 166.7 0 0 0-4.86-39.87A154.6 154.6 0 0 1 208 134c3.25 0 6.52.11 9.77.32a90.16 90.16 0 0 1-49.34 74.07"></svg:path>`,
})
export class PhDribbbleLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDribbbleLogoThinIcon],svg[ph-dribbble-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m91.92 96.43C216 124.15 212 124 208 124a164.4 164.4 0 0 0-46.55 6.74A163.5 163.5 0 0 0 146.61 97c-.49-.82-1-1.64-1.5-2.46a164 164 0 0 0 43.39-35.79a91.8 91.8 0 0 1 31.42 65.68m-37.67-70.68a156.2 156.2 0 0 1-41.46 34.08a165 165 0 0 0-46.3-45.51a91.86 91.86 0 0 1 87.76 11.43m-96.47-7.47a157 157 0 0 1 47.9 45.34A155.7 155.7 0 0 1 64 108a157.5 157.5 0 0 1-25.33-2a92.35 92.35 0 0 1 47.11-59.72M36 128a92 92 0 0 1 1.1-14.2A165.6 165.6 0 0 0 64 116a163.6 163.6 0 0 0 74.05-17.62c.55.9 1.11 1.79 1.64 2.7a155 155 0 0 1 14.14 32.11a162.7 162.7 0 0 0-27.59 12.61A164.94 164.94 0 0 0 70 199.36A91.84 91.84 0 0 1 36 128m40.44 76.16a157.1 157.1 0 0 1 53.8-51.43A154 154 0 0 1 156 140.91a156.3 156.3 0 0 1 4.9 38.78a157 157 0 0 1-4.11 35.69a91.94 91.94 0 0 1-80.37-11.22Zm89.3 7.74a165 165 0 0 0 3.18-32.21a164.3 164.3 0 0 0-5.28-41.26A156.4 156.4 0 0 1 208 132c4 0 7.94.15 11.88.45a92.17 92.17 0 0 1-54.14 79.45"></svg:path>`,
})
export class PhDribbbleLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDroneIcon],svg[ph-drone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M189.66 66.34a8 8 0 0 0-11.32 0L148.69 96h-41.38L77.66 66.34a8 8 0 0 0-11.32 11.32L96 107.31v41.38l-29.66 29.65a8 8 0 0 0 11.32 11.32L107.31 160h41.38l29.65 29.66a8 8 0 0 0 11.32-11.32L160 148.69v-41.38l29.66-29.65a8 8 0 0 0 0-11.32M112 112h32v32h-32Zm26.51-50.67a44 44 0 1 1 56.16 56.16a7.9 7.9 0 0 1-2.67.51a8 8 0 0 1-2.67-15.54a28 28 0 1 0-35.74-35.74a8 8 0 1 1-15.08-5.34ZM224 180a44 44 0 0 1-85.49 14.67a8 8 0 0 1 15.08-5.34a28 28 0 1 0 35.74-35.74a8 8 0 0 1 5.34-15.08A44.07 44.07 0 0 1 224 180m-106.51 14.67a44 44 0 1 1-56.16-56.16a8 8 0 0 1 5.34 15.08a28 28 0 1 0 35.74 35.74a8 8 0 0 1 15.08 5.34M32 76a44 44 0 0 1 85.49-14.67a8 8 0 1 1-15.08 5.34a28 28 0 1 0-35.74 35.74A8 8 0 0 1 64 118a7.9 7.9 0 0 1-2.67-.46A44.07 44.07 0 0 1 32 76"></svg:path>`,
})
export class PhDroneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDroneBoldIcon],svg[ph-drone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.06 109.94a48 48 0 1 1 67.88-67.88A12 12 0 0 1 93 59a24 24 0 1 0-34 34a12 12 0 1 1-17 17ZM163 59a24 24 0 1 1 34 34a12 12 0 1 0 17 17a48 48 0 1 0-67.88-67.88a12 12 0 0 0 17 17Zm33.94 87a12 12 0 0 0 0 17A24 24 0 1 1 163 197a12 12 0 0 0-17 17a48 48 0 1 0 67.88-67.88a12 12 0 0 0-16.88-.06ZM93 197a24 24 0 1 1-34-34a12 12 0 0 0-17-17a48 48 0 1 0 67.88 67.88a12 12 0 1 0-17-17Zm71-88v38l24.49 24.48a12 12 0 0 1-17 17L147 164h-38l-24.51 24.49a12 12 0 0 1-17-17L92 147v-38L67.51 84.49a12 12 0 0 1 17-17L109 92h38l24.48-24.49a12 12 0 0 1 17 17Zm-48 31h24v-24h-24Z"></svg:path>`,
})
export class PhDroneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDroneDuotoneIcon],svg[ph-drone-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M112 76a36 36 0 1 1-36-36a36 36 0 0 1 36 36m68 36a36 36 0 1 0-36-36a36 36 0 0 0 36 36M76 144a36 36 0 1 0 36 36a36 36 0 0 0-36-36m104 0a36 36 0 1 0 36 36a36 36 0 0 0-36-36" opacity=".2"></svg:path><svg:path d="M189.66 66.34a8 8 0 0 0-11.32 0L148.69 96h-41.38L77.66 66.34a8 8 0 0 0-11.32 11.32L96 107.31v41.38l-29.66 29.65a8 8 0 0 0 11.32 11.32L107.31 160h41.38l29.65 29.66a8 8 0 0 0 11.32-11.32L160 148.69v-41.38l29.66-29.65a8 8 0 0 0 0-11.32M112 112h32v32h-32Zm26.51-50.67a44 44 0 1 1 56.16 56.16a7.9 7.9 0 0 1-2.67.51a8 8 0 0 1-2.67-15.54a28 28 0 1 0-35.74-35.74a8 8 0 1 1-15.08-5.34ZM224 180a44 44 0 0 1-85.49 14.67a8 8 0 0 1 15.08-5.34a28 28 0 1 0 35.74-35.74a8 8 0 0 1 5.34-15.08A44.07 44.07 0 0 1 224 180m-106.51 14.67a44 44 0 1 1-56.16-56.16a8 8 0 0 1 5.34 15.08a28 28 0 1 0 35.74 35.74a8 8 0 0 1 15.08 5.34M32 76a44 44 0 0 1 85.49-14.67a8 8 0 1 1-15.08 5.34a28 28 0 1 0-35.74 35.74A8 8 0 0 1 64 118a7.9 7.9 0 0 1-2.67-.46A44.07 44.07 0 0 1 32 76"></svg:path></svg:g>`,
})
export class PhDroneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDroneFillIcon],svg[ph-drone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M189.66 77.66L160 107.31v41.38l29.66 29.65a8 8 0 0 1-11.32 11.32L148.69 160h-41.38l-29.65 29.66a8 8 0 0 1-11.32-11.32L96 148.69v-41.38L66.34 77.66a8 8 0 0 1 11.32-11.32L107.31 96h41.38l29.65-29.66a8 8 0 0 1 11.32 11.32m-46.28-6.12a8 8 0 0 0 10.21-4.87a28 28 0 1 1 35.74 35.74A8 8 0 0 0 192 118a7.9 7.9 0 0 0 2.67-.46a44 44 0 1 0-56.16-56.16a8 8 0 0 0 4.87 10.16m51.29 67a8 8 0 0 0-5.34 15.08a28 28 0 1 1-35.74 35.74a8 8 0 0 0-15.08 5.34a44 44 0 1 0 56.16-56.16m-82 46a8 8 0 0 0-10.21 4.87a28 28 0 1 1-35.74-35.74a8 8 0 0 0-5.34-15.08a44 44 0 1 0 56.16 56.16a8 8 0 0 0-4.92-10.29Zm-51.29-67A7.9 7.9 0 0 0 64 118a8 8 0 0 0 2.67-15.54a28 28 0 1 1 35.74-35.74a8 8 0 1 0 15.08-5.34a44 44 0 1 0-56.16 56.16Z"></svg:path>`,
})
export class PhDroneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDroneLightIcon],svg[ph-drone-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.24 67.76a6 6 0 0 0-8.48 0L149.52 98h-43L76.24 67.76a6 6 0 0 0-8.48 8.48L98 106.48v43l-30.24 30.28a6 6 0 1 0 8.48 8.48L106.48 158h43l30.24 30.24a6 6 0 0 0 8.48-8.48L158 149.52v-43l30.24-30.24a6 6 0 0 0 0-8.52M110 110h36v36h-36Zm30.39-48A42 42 0 1 1 194 115.61a6.1 6.1 0 0 1-2 .34a6 6 0 0 1-2-11.66A30 30 0 1 0 151.71 66a6 6 0 1 1-11.32-4M222 180a42 42 0 0 1-81.61 14a6 6 0 0 1 11.32-4A30 30 0 1 0 190 151.71a6 6 0 0 1 4-11.32A42.07 42.07 0 0 1 222 180m-106.39 14A42 42 0 1 1 62 140.39a6 6 0 1 1 4 11.32A30 30 0 1 0 104.29 190a6 6 0 0 1 11.32 4M34 76a42 42 0 0 1 81.61-14a6 6 0 1 1-11.32 4A30 30 0 1 0 66 104.29A6 6 0 0 1 64 116a6.1 6.1 0 0 1-2-.34A42.07 42.07 0 0 1 34 76"></svg:path>`,
})
export class PhDroneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDroneThinIcon],svg[ph-drone-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186.83 74.83a4 4 0 1 0-5.66-5.66L150.34 100h-44.68L74.83 69.17a4 4 0 0 0-5.66 5.66L100 105.66v44.68l-30.83 30.83a4 4 0 0 0 5.66 5.66L105.66 156h44.68l30.83 30.83a4 4 0 0 0 5.66-5.66L156 150.34v-44.68ZM108 108h40v40h-40Zm34.28-45.33a40 40 0 1 1 51.05 51.05a3.9 3.9 0 0 1-1.33.28a4 4 0 0 1-1.33-7.77a32 32 0 1 0-40.85-40.85a4 4 0 1 1-7.54-2.66ZM220 180a40 40 0 0 1-77.72 13.33a4 4 0 1 1 7.54-2.66a32 32 0 1 0 40.85-40.85a4 4 0 0 1 2.66-7.54A40.06 40.06 0 0 1 220 180m-106.28 13.33a40 40 0 1 1-51-51.05a4 4 0 0 1 2.66 7.54a32 32 0 1 0 40.85 40.85a4 4 0 0 1 7.54 2.66ZM36 76a40 40 0 0 1 77.72-13.33a4 4 0 0 1-7.54 2.66a32 32 0 1 0-40.85 40.85A4 4 0 0 1 64 114a3.9 3.9 0 0 1-1.33-.23A40.06 40.06 0 0 1 36 76"></svg:path>`,
})
export class PhDroneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropIcon],svg[ph-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M128 216a72.08 72.08 0 0 1-72-72c0-57.23 55.47-105 72-118c16.53 13 72 60.75 72 118a72.08 72.08 0 0 1-72 72m55.89-62.66a57.6 57.6 0 0 1-46.56 46.55a9 9 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"></svg:path>`,
})
export class PhDropIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropBoldIcon],svg[ph-drop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134.88 6.17a12 12 0 0 0-13.76 0a259 259 0 0 0-42.18 39C50.85 77.43 36 111.62 36 144a92 92 0 0 0 184 0c0-77.36-81.64-135.4-85.12-137.83M128 212a68.07 68.07 0 0 1-68-68c0-33.31 20-63.37 36.7-82.71A249.4 249.4 0 0 1 128 31.11a249.4 249.4 0 0 1 31.3 30.18C176 80.63 196 110.69 196 144a68.07 68.07 0 0 1-68 68m49.62-52.4a52 52 0 0 1-34 34a12.2 12.2 0 0 1-3.6.55a12 12 0 0 1-3.6-23.45a28 28 0 0 0 18.32-18.32a12 12 0 0 1 22.9 7.2Z"></svg:path>`,
})
export class PhDropBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropDuotoneIcon],svg[ph-drop-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 144a80 80 0 0 1-160 0c0-72 80-128 80-128s80 56 80 128" opacity=".2"></svg:path><svg:path d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M128 216a72.08 72.08 0 0 1-72-72c0-57.23 55.47-105 72-118c16.53 13 72 60.75 72 118a72.08 72.08 0 0 1-72 72m55.89-62.66a57.6 57.6 0 0 1-46.56 46.55a9 9 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"></svg:path></svg:g>`,
})
export class PhDropDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropFillIcon],svg[ph-drop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25m9.85 105.59a57.6 57.6 0 0 1-46.56 46.55a9 9 0 0 1-1.29.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"></svg:path>`,
})
export class PhDropFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfIcon],svg[ph-drop-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M200 144a71 71 0 0 1-.46 8H136v-16h63.64q.36 4 .36 8m-16.61-56H136V72h36.89a176 176 0 0 1 10.5 16M136 200h37.19A71.67 71.67 0 0 1 136 215.54Zm0-16v-16h59.87a72 72 0 0 1-8 16Zm0-64v-16h55.39a117 117 0 0 1 5.45 16Zm23.89-64H136V32.6A257 257 0 0 1 159.89 56M56 144c0-50 42.26-92.71 64-111.4v182.94A72.08 72.08 0 0 1 56 144"></svg:path>`,
})
export class PhDropHalfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfBoldIcon],svg[ph-drop-half-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134.88 6.17a12 12 0 0 0-13.76 0a259 259 0 0 0-42.18 39C50.85 77.43 36 111.63 36 144a92 92 0 0 0 184 0c0-77.36-81.64-135.4-85.12-137.83M194.08 160H140v-16h56a68 68 0 0 1-1.92 16M140 120v-16h47a115 115 0 0 1 5.68 16Zm19.3-58.71A197 197 0 0 1 173.68 80H140V41.46a244 244 0 0 1 19.3 19.83M60 144c0-33.31 20-63.37 36.7-82.71A244 244 0 0 1 116 41.46v169.46A68.1 68.1 0 0 1 60 144m80 66.92V184h42.94A68 68 0 0 1 140 210.92"></svg:path>`,
})
export class PhDropHalfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfBottomIcon],svg[ph-drop-half-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M187.83 184H68.17a72 72 0 0 1-8-16h135.7a72 72 0 0 1-8.04 16M200 144a71 71 0 0 1-.46 8H56.46a71 71 0 0 1-.46-8q0-4 .36-8h143.28q.36 4 .36 8M128 26c14.16 11.1 56.86 47.74 68.84 94H59.16C71.14 73.76 113.84 37.12 128 26M82.81 200h90.38a71.82 71.82 0 0 1-90.38 0"></svg:path>`,
})
export class PhDropHalfBottomIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfBottomBoldIcon],svg[ph-drop-half-bottom-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134.88 6.17a12 12 0 0 0-13.76 0a259 259 0 0 0-42.18 39C50.85 77.43 36 111.63 36 144a92 92 0 0 0 184 0c0-77.36-81.64-135.4-85.12-137.83M191.61 168H64.39a67 67 0 0 1-3.9-16h135a67 67 0 0 1-3.88 16M96.7 61.29A249.4 249.4 0 0 1 128 31.11a249.4 249.4 0 0 1 31.3 30.18c14 16.19 30.27 39.89 35.2 66.71h-133c4.93-26.82 21.19-50.52 35.2-66.71M128 212a67.78 67.78 0 0 1-48.12-20h96.24A67.78 67.78 0 0 1 128 212"></svg:path>`,
})
export class PhDropHalfBottomBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfBottomDuotoneIcon],svg[ph-drop-half-bottom-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 144a80 80 0 0 1-160 0a101 101 0 0 1 1.3-16h157.4a101 101 0 0 1 1.3 16" opacity=".2"></svg:path><svg:path d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M128 26c14.16 11.1 56.86 47.74 68.84 94H59.16C71.14 73.76 113.84 37.12 128 26m0 190a72.08 72.08 0 0 1-72-72q0-4 .36-8h143.28q.36 4 .36 8a72.08 72.08 0 0 1-72 72"></svg:path></svg:g>`,
})
export class PhDropHalfBottomDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfBottomFillIcon],svg[ph-drop-half-bottom-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M128 26c14.16 11.1 56.86 47.74 68.84 94H59.16C71.14 73.76 113.84 37.12 128 26"></svg:path>`,
})
export class PhDropHalfBottomFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfBottomLightIcon],svg[ph-drop-half-bottom-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.53 49.06a251.4 251.4 0 0 0-41.09-38a6 6 0 0 0-6.88 0a251.4 251.4 0 0 0-41.09 38C56.34 80.26 42 113.09 42 144a86 86 0 0 0 172 0c0-30.91-14.34-63.74-41.47-94.94M188.88 186H67.12a74 74 0 0 1-9.78-20h141.32a74 74 0 0 1-9.78 20M54.69 154a75 75 0 0 1-.69-10a92 92 0 0 1 .56-10h146.88a92 92 0 0 1 .56 10a75 75 0 0 1-.69 10ZM128 23.49c13.13 10.12 59.83 49.06 71.39 98.51H56.61C68.17 72.55 114.87 33.61 128 23.49M77.48 198h101a73.81 73.81 0 0 1-101 0"></svg:path>`,
})
export class PhDropHalfBottomLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfBottomThinIcon],svg[ph-drop-half-bottom-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 50.37a250.2 250.2 0 0 0-40.73-37.65a4 4 0 0 0-4.58 0A250.2 250.2 0 0 0 85 50.37C58.17 81.21 44 113.58 44 144a84 84 0 0 0 168 0c0-30.42-14.17-62.79-41-93.63M189.91 188H66.09a75.6 75.6 0 0 1-11.4-24h146.62a75.6 75.6 0 0 1-11.4 24M53 156a75.4 75.4 0 0 1-1-12a93 93 0 0 1 .79-12h150.42a93 93 0 0 1 .79 12a75.4 75.4 0 0 1-1 12ZM90.9 55.77A254 254 0 0 1 128 21a254 254 0 0 1 37.1 34.81c14.37 16.55 31 40.61 36.77 68.23H54.13c5.8-27.66 22.4-51.72 36.77-68.27M128 220a75.77 75.77 0 0 1-55.35-24h110.7A75.77 75.77 0 0 1 128 220"></svg:path>`,
})
export class PhDropHalfBottomThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfDuotoneIcon],svg[ph-drop-half-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 144a80 80 0 0 1-80 80V16s80 56 80 128" opacity=".2"></svg:path><svg:path d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M56 144c0-50 42.26-92.71 64-111.4v182.94A72.08 72.08 0 0 1 56 144m80 71.54V32.6C157.74 51.29 200 94 200 144a72.08 72.08 0 0 1-64 71.54"></svg:path></svg:g>`,
})
export class PhDropHalfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfFillIcon],svg[ph-drop-half-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M56 144c0-57.23 55.47-105 72-118v190a72.08 72.08 0 0 1-72-72"></svg:path>`,
})
export class PhDropHalfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfLightIcon],svg[ph-drop-half-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.53 49.06a251.4 251.4 0 0 0-41.09-38a6 6 0 0 0-6.88 0a251.4 251.4 0 0 0-41.09 38C56.34 80.26 42 113.09 42 144a86 86 0 0 0 172 0c0-30.91-14.34-63.74-41.47-94.94M202 144a75 75 0 0 1-.69 10H134v-20h67.44a92 92 0 0 1 .56 10m-15.2-54H134V70h39.89a176 176 0 0 1 12.91 20M134 198h44.52A73.76 73.76 0 0 1 134 217.74Zm0-12v-20h64.66a74 74 0 0 1-9.78 20Zm0-64v-20h58.7a117.4 117.4 0 0 1 6.69 20Zm30.29-64H134V28.3A257 257 0 0 1 164.29 58M54 144c0-53.42 47.35-98.56 68-115.7v189.44A74.09 74.09 0 0 1 54 144"></svg:path>`,
})
export class PhDropHalfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfThinIcon],svg[ph-drop-half-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 50.37a250.2 250.2 0 0 0-40.73-37.65a4 4 0 0 0-4.58 0A250.2 250.2 0 0 0 85 50.37C58.17 81.21 44 113.58 44 144a84 84 0 0 0 168 0c0-30.42-14.17-62.79-41-93.63M204 144a75.4 75.4 0 0 1-1 12h-71v-24h71.21a93 93 0 0 1 .79 12m-13.86-52H132V68h43a176.6 176.6 0 0 1 15.14 24M132 164h69.31a75.6 75.6 0 0 1-11.4 24H132Zm0-40v-24h62a120 120 0 0 1 7.88 24Zm33.1-68.23q1.77 2 3.59 4.23H132V24.07a256.4 256.4 0 0 1 33.1 31.7M52 144c0-35.9 21.15-67.8 38.9-88.23a256.4 256.4 0 0 1 33.1-31.7v195.82A76.09 76.09 0 0 1 52 144m80 75.89V196h51.35A75.8 75.8 0 0 1 132 219.89"></svg:path>`,
})
export class PhDropHalfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropLightIcon],svg[ph-drop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.53 49.06a253 253 0 0 0-41.09-38a6 6 0 0 0-6.88 0a253 253 0 0 0-41.09 38C56.34 80.26 42 113.09 42 144a86 86 0 0 0 172 0c0-30.91-14.34-63.74-41.47-94.94M128 218a74.09 74.09 0 0 1-74-74c0-59.62 59-108.93 74-120.51c15 11.58 74 60.89 74 120.51a74.09 74.09 0 0 1-74 74m53.92-65A55.58 55.58 0 0 1 137 197.92a7 7 0 0 1-1 .08a6 6 0 0 1-1-11.92c17.38-2.92 32.13-17.68 35.08-35.08a6 6 0 1 1 11.84 2"></svg:path>`,
})
export class PhDropLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSimpleIcon],svg[ph-drop-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M128 216a72.08 72.08 0 0 1-72-72c0-57.23 55.47-105 72-118c16.53 13 72 60.75 72 118a72.08 72.08 0 0 1-72 72"></svg:path>`,
})
export class PhDropSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSimpleBoldIcon],svg[ph-drop-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134.88 6.17a12 12 0 0 0-13.76 0a259 259 0 0 0-42.18 39C50.85 77.43 36 111.63 36 144a92 92 0 0 0 184 0c0-77.36-81.64-135.4-85.12-137.83M128 212a68.07 68.07 0 0 1-68-68c0-33.31 20-63.37 36.7-82.71A249.4 249.4 0 0 1 128 31.11a249.4 249.4 0 0 1 31.3 30.18C176 80.63 196 110.69 196 144a68.07 68.07 0 0 1-68 68"></svg:path>`,
})
export class PhDropSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSimpleDuotoneIcon],svg[ph-drop-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 144a80 80 0 0 1-160 0c0-72 80-128 80-128s80 56 80 128" opacity=".2"></svg:path><svg:path d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M128 216a72.08 72.08 0 0 1-72-72c0-57.23 55.47-105 72-118c16.53 13 72 60.75 72 118a72.08 72.08 0 0 1-72 72"></svg:path></svg:g>`,
})
export class PhDropSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSimpleFillIcon],svg[ph-drop-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25"></svg:path>`,
})
export class PhDropSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSimpleLightIcon],svg[ph-drop-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.53 49.06a251.4 251.4 0 0 0-41.09-38a6 6 0 0 0-6.88 0a251.4 251.4 0 0 0-41.09 38C56.34 80.26 42 113.09 42 144a86 86 0 0 0 172 0c0-30.91-14.34-63.74-41.47-94.94M128 218a74.09 74.09 0 0 1-74-74c0-59.62 59-108.93 74-120.51c15 11.58 74 60.89 74 120.51a74.09 74.09 0 0 1-74 74"></svg:path>`,
})
export class PhDropSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSimpleThinIcon],svg[ph-drop-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 50.37a250.2 250.2 0 0 0-40.73-37.65a4 4 0 0 0-4.58 0A250.2 250.2 0 0 0 85 50.37C58.17 81.21 44 113.58 44 144a84 84 0 0 0 168 0c0-30.42-14.17-62.79-41-93.63M128 220a76.08 76.08 0 0 1-76-76c0-35.9 21.15-67.8 38.9-88.23A254 254 0 0 1 128 21a254 254 0 0 1 37.1 34.81C182.85 76.2 204 108.1 204 144a76.08 76.08 0 0 1-76 76"></svg:path>`,
})
export class PhDropSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSlashIcon],svg[ph-drop-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62a8 8 0 1 0-11.84 10.76l22.64 24.91C48.32 95 40 119.78 40 144a88 88 0 0 0 149.21 63.22l12.87 14.16a8 8 0 1 0 11.84-10.76ZM128 216a72.08 72.08 0 0 1-72-72c0-19.93 6.68-40.57 19.86-61.46l102.57 112.82A71.84 71.84 0 0 1 128 216M90 50.51a8 8 0 0 1-.27-11.31a248 248 0 0 1 33.68-29.75a8 8 0 0 1 9.18 0C136 11.83 216 68.7 216 144a88 88 0 0 1-3.15 23.4a8 8 0 0 1-7.71 5.88A7.8 7.8 0 0 1 203 173a8 8 0 0 1-5.59-9.83A72.6 72.6 0 0 0 200 144c0-57.24-55.48-105-72-118a252 252 0 0 0-26.66 24.23a8 8 0 0 1-11.34.28"></svg:path>`,
})
export class PhDropSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSlashBoldIcon],svg[ph-drop-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93a12 12 0 1 0-17.76 16.14l20.56 22.62C44 95.22 36 119.84 36 144a92 92 0 0 0 153 68.9l10.16 11.17a12 12 0 0 0 17.76-16.14ZM128 212a68.07 68.07 0 0 1-68-68c0-17.74 5.54-36.12 16.49-54.82l96.32 106A67.84 67.84 0 0 1 128 212M92.61 47.44a12 12 0 0 1 .12-17a244 244 0 0 1 28.39-24.3a12 12 0 0 1 13.76 0C138.36 8.6 220 66.64 220 144a93 93 0 0 1-1 13.34a12 12 0 0 1-11.86 10.28a13 13 0 0 1-1.74-.13a12 12 0 0 1-10.15-13.6A69 69 0 0 0 196 144c0-52.93-49.49-97.91-68-112.88c-4.64 3.73-11.2 9.33-18.41 16.44a12 12 0 0 1-16.98-.12"></svg:path>`,
})
export class PhDropSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSlashDuotoneIcon],svg[ph-drop-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 144a80 80 0 0 1-160 0c0-72 80-128 80-128s80 56 80 128" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l22.64 24.91C48.32 95 40 119.78 40 144a88 88 0 0 0 149.21 63.22l12.87 14.16a8 8 0 1 0 11.84-10.76ZM128 216a72.08 72.08 0 0 1-72-72c0-19.93 6.68-40.57 19.86-61.46l102.57 112.82A71.84 71.84 0 0 1 128 216M90 50.51a8 8 0 0 1-.27-11.31a248 248 0 0 1 33.68-29.75a8 8 0 0 1 9.18 0C136 11.83 216 68.7 216 144a88 88 0 0 1-3.15 23.4a8 8 0 0 1-7.71 5.88A7.8 7.8 0 0 1 203 173a8 8 0 0 1-5.59-9.83A72.6 72.6 0 0 0 200 144c0-57.24-55.48-105-72-118a252 252 0 0 0-26.66 24.23a8 8 0 0 1-11.34.28"></svg:path></svg:g>`,
})
export class PhDropSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSlashFillIcon],svg[ph-drop-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-12.9-14.19A87.7 87.7 0 0 1 128 232c-48 0-87.49-38.93-88-86.88c-.27-24.34 8.22-49.84 24.73-74.81L42.3 45.63a8.23 8.23 0 0 1 .14-11.38a8 8 0 0 1 11.48.37Zm-10.07-34.86a4 4 0 0 0 6.7-1.27A87.7 87.7 0 0 0 216 144c0-31.4-14.51-64.68-42-96.25a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A251.3 251.3 0 0 0 87.17 42a4 4 0 0 0 0 5.41Z"></svg:path>`,
})
export class PhDropSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSlashLightIcon],svg[ph-drop-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l23.7 26.07C50.51 94.93 42 119.77 42 144a86 86 0 0 0 147.28 60.33L203.56 220a6 6 0 0 0 8.88-8.08ZM128 218a74.09 74.09 0 0 1-74-74c0-21 7.27-42.76 21.59-64.73l105.59 116.15A73.8 73.8 0 0 1 128 218M91.4 49.07a6 6 0 0 1-.2-8.49a245.6 245.6 0 0 1 33.36-29.49a6 6 0 0 1 6.88 0a251.4 251.4 0 0 1 41.09 38C199.66 80.26 214 113.09 214 144a86.2 86.2 0 0 1-3.08 22.87a6 6 0 0 1-5.78 4.41a6.2 6.2 0 0 1-1.59-.21a6 6 0 0 1-4.2-7.38A74 74 0 0 0 202 144c0-59.63-59-108.94-74-120.52a254 254 0 0 0-28.12 25.38a6 6 0 0 1-8.48.21"></svg:path>`,
})
export class PhDropSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSlashThinIcon],svg[ph-drop-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38l24.81 27.24C52.7 94.85 44 119.75 44 144a84 84 0 0 0 145.32 57.4L205 218.69a4 4 0 1 0 5.92-5.38ZM128 220a76.08 76.08 0 0 1-76-76c0-22.1 7.85-44.95 23.33-68l108.59 119.46A75.83 75.83 0 0 1 128 220M92.78 47.62a4 4 0 0 1-.13-5.62a245 245 0 0 1 33.06-29.24a4 4 0 0 1 4.58 0A250.2 250.2 0 0 1 171 50.37c26.81 30.84 41 63.21 41 93.63a84.3 84.3 0 0 1-3 22.34a4 4 0 0 1-3.86 2.94a4 4 0 0 1-1.06-.14a4 4 0 0 1-2.8-4.92A76 76 0 0 0 204 144c0-62.29-63.08-113.25-76-123a251.4 251.4 0 0 0-29.56 26.48a4 4 0 0 1-5.66.14"></svg:path>`,
})
export class PhDropSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropThinIcon],svg[ph-drop-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 50.38a250 250 0 0 0-40.73-37.66a4 4 0 0 0-4.58 0A250 250 0 0 0 85 50.38C58.17 81.21 44 113.58 44 144a84 84 0 0 0 168 0c0-30.42-14.17-62.79-41-93.62M128 220a76.08 76.08 0 0 1-76-76c0-35.9 21.15-67.8 38.9-88.24A255 255 0 0 1 128 21a255 255 0 0 1 37.1 34.8C182.85 76.2 204 108.1 204 144a76.08 76.08 0 0 1-76 76m51.94-67.33a53.51 53.51 0 0 1-43.28 43.27a3.7 3.7 0 0 1-.66.06a4 4 0 0 1-.66-7.94c18.18-3.06 33.63-18.51 36.72-36.73a4 4 0 0 1 7.88 1.34"></svg:path>`,
})
export class PhDropThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropboxLogoIcon],svg[ph-dropbox-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.55 149.42L194.05 120l42.5-29.42a8 8 0 0 0 0-13.16l-52-36a8 8 0 0 0-9.1 0L128 74.27L80.55 41.42a8 8 0 0 0-9.1 0l-52 36a8 8 0 0 0 0 13.16L62 120l-42.5 29.42a8 8 0 0 0 0 13.16l52 36a8 8 0 0 0 9.1 0l47.4-32.85l47.45 32.85a8 8 0 0 0 9.1 0l52-36a8 8 0 0 0 0-13.16M128 146.27L90.05 120l38-26.27L166 120Zm52-88.54L218 84l-38 26.27L142.05 84Zm-104 0L114 84l-38 26.27L38.05 84Zm0 124.54L38.05 156l38-26.27L114 156Zm104 0L142.05 156L180 129.73L218 156Zm-21.53 24.64a8 8 0 0 1-2 11.13l-23.89 16.54a8 8 0 0 1-9.1 0L99.56 218a8 8 0 0 1 9.1-13.16L128 218.27l19.34-13.39a8 8 0 0 1 11.13 2.03"></svg:path>`,
})
export class PhDropboxLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropboxLogoBoldIcon],svg[ph-dropbox-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238.83 146.13L201.08 120l37.75-26.13a12 12 0 0 0 0-19.74l-52-36a12 12 0 0 0-13.66 0L128 69.41L82.83 38.13a12 12 0 0 0-13.66 0l-52 36a12 12 0 0 0 0 19.74L54.92 120l-37.75 26.13a12 12 0 0 0 0 19.74l52 36a12 12 0 0 0 13.66 0L128 170.59l45.17 31.28a12 12 0 0 0 13.66 0l52-36a12 12 0 0 0 0-19.74M128 141.41L97.08 120L128 98.59L158.92 120Zm52-78.81L210.92 84L180 105.4L149.08 84Zm-104 0L106.92 84L76 105.4L45.08 84Zm0 114.8L45.08 156L76 134.6l30.92 21.4Zm104 0L149.08 156L180 134.6l30.92 21.4Zm-25.27 32.09a12 12 0 0 1-3 16.7l-16.86 11.68a12 12 0 0 1-13.66 0l-16.86-11.68A12 12 0 1 1 118 206.46l10 6.94l10-6.94a12 12 0 0 1 16.73 3.03"></svg:path>`,
})
export class PhDropboxLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropboxLogoDuotoneIcon],svg[ph-dropbox-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m128 84l-52 36l-52-36l52-36Zm104 0l-52-36l-52 36l52 36ZM24 156l52 36l52-36l-52-36Zm104 0l52 36l52-36l-52-36Z" opacity=".2"></svg:path><svg:path d="M236.55 149.42L194.05 120l42.5-29.42a8 8 0 0 0 0-13.16l-52-36a8 8 0 0 0-9.1 0L128 74.27L80.55 41.42a8 8 0 0 0-9.1 0l-52 36a8 8 0 0 0 0 13.16L62 120l-42.5 29.42a8 8 0 0 0 0 13.16l52 36a8 8 0 0 0 9.1 0l47.4-32.85l47.45 32.85a8 8 0 0 0 9.1 0l52-36a8 8 0 0 0 0-13.16M180 57.73L218 84l-38 26.27L142.05 84ZM38.05 84L76 57.73L114 84l-38 26.27Zm38 98.27l-38-26.27l38-26.27L114 156Zm14-62.27l38-26.27L166 120l-38 26.27Zm90 62.27l-38-26.27L180 129.73L218 156Zm-21.53 24.64a8 8 0 0 1-2 11.13l-23.89 16.54a8 8 0 0 1-9.1 0L99.56 218a8 8 0 0 1 9.1-13.16L128 218.27l19.34-13.39a8 8 0 0 1 11.13 2.03Z"></svg:path></svg:g>`,
})
export class PhDropboxLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropboxLogoFillIcon],svg[ph-dropbox-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m188 120l-60-40l55.56-37a8 8 0 0 1 8.88 0L238 73.34a8 8 0 0 1 0 13.32ZM72.44 43a8 8 0 0 0-8.88 0L18 73.34a8 8 0 0 0 0 13.32L68 120l60-40ZM238 153.34L188 120l-60 40l55.56 37a8 8 0 0 0 8.88 0L238 166.66a8 8 0 0 0 0-13.32m-220 0a8 8 0 0 0 0 13.32L63.56 197a8 8 0 0 0 8.88 0L128 160l-60-40Zm150.61 52.95l-38.37-25.58a4 4 0 0 0-4.44 0l-38.39 25.58a4 4 0 0 0 0 6.65L123.56 237a8 8 0 0 0 8.88 0l36.15-24.1a4 4 0 0 0 0-6.61Z"></svg:path>`,
})
export class PhDropboxLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropboxLogoLightIcon],svg[ph-dropbox-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.42 151.07L190.54 120l44.88-31.07a6 6 0 0 0 0-9.86l-52-36a6 6 0 0 0-6.84 0L128 76.7L79.42 43.07a6 6 0 0 0-6.84 0l-52 36a6 6 0 0 0 0 9.86L65.46 120l-44.88 31.07a6 6 0 0 0 0 9.86l52 36a6 6 0 0 0 6.84 0L128 163.3l48.58 33.63a6 6 0 0 0 6.84 0l52-36a6 6 0 0 0 0-9.86M128 148.7L86.54 120L128 91.3l41.46 28.7Zm52-93.4L221.46 84L180 112.7L138.54 84Zm-104 0L117.46 84L76 112.7L34.54 84Zm0 129.4L34.54 156L76 127.3l41.46 28.7Zm104 0L138.54 156L180 127.3l41.46 28.7ZM156.82 208a6 6 0 0 1-1.51 8.35l-23.89 16.54a6 6 0 0 1-6.84 0l-23.89-16.54a6 6 0 0 1 6.83-9.86L128 220.7l20.48-14.17a6 6 0 0 1 8.34 1.47"></svg:path>`,
})
export class PhDropboxLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropboxLogoThinIcon],svg[ph-dropbox-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.28 152.71L187 120l47.25-32.71a4 4 0 0 0 0-6.58l-52-36a4 4 0 0 0-4.56 0L128 79.14L78.28 44.71a4 4 0 0 0-4.56 0l-52 36a4 4 0 0 0 0 6.58L69 120l-47.28 32.71a4 4 0 0 0 0 6.58l52 36a4 4 0 0 0 4.56 0L128 160.86l49.72 34.43a4 4 0 0 0 4.56 0l52-36a4 4 0 0 0 0-6.58M128 151.14L83 120l45-31.14L173 120Zm52-98.27L225 84l-45 31.13L135 84Zm-104 0L121 84l-45 31.13L31 84Zm0 134.26L31 156l45-31.13L121 156Zm104 0L135 156l45-31.13L225 156Zm-24.82 22.05a4 4 0 0 1-1 5.57l-23.89 16.54a4 4 0 0 1-4.56 0l-23.89-16.54a4 4 0 0 1 4.56-6.58l21.61 15l21.61-15a4 4 0 0 1 5.56 1.01"></svg:path>`,
})
export class PhDropboxLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarIcon],svg[ph-ear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 104a8 8 0 0 1-16 0a72 72 0 0 0-144 0c0 26.7 8.53 34.92 17.57 43.64C82.21 156 92 165.41 92 188a36 36 0 0 0 36 36c10.24 0 18.45-4.16 25.83-13.09a8 8 0 1 1 12.34 10.18C155.81 233.64 143 240 128 240a52.06 52.06 0 0 1-52-52c0-15.79-5.68-21.27-13.54-28.84C52.46 149.5 40 137.5 40 104a88 88 0 0 1 176 0m-38.13 57.08a8 8 0 0 0-10.94 2.92a8 8 0 0 1-14.93-4c0-9.33 4.82-15.76 10.4-23.2c6.37-8.5 13.6-18.13 13.6-32.8a48 48 0 0 0-96 0a8 8 0 0 0 16 0a32 32 0 0 1 64 0c0 9.33-4.82 15.76-10.4 23.2c-6.37 8.5-13.6 18.13-13.6 32.8a24 24 0 0 0 44.78 12a8 8 0 0 0-2.91-10.92"></svg:path>`,
})
export class PhEarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarBoldIcon],svg[ph-ear-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 104a12 12 0 0 1-24 0a68 68 0 0 0-136 0c0 25 7.58 32.3 16.35 40.76S96 163.71 96 188a32 32 0 0 0 32 32c9 0 16.19-3.7 22.75-11.64a12 12 0 0 1 18.5 15.28C158.09 237.15 144.21 244 128 244a56.06 56.06 0 0 1-56-56c0-14.09-4.63-18.56-12.31-26C49.13 151.86 36 139.19 36 104a92 92 0 0 1 184 0m-40.13 53.61a12 12 0 0 0-16.4 4.38a4 4 0 0 1-7.47-2c0-7.61 3.65-12.86 9.6-20.8C172 130.65 180 120 180 104a52 52 0 0 0-104 0a12 12 0 0 0 24 0a28 28 0 0 1 56 0c0 7.61-3.65 12.86-9.6 20.8C140 133.35 132 144 132 160a28 28 0 0 0 52.25 14a12 12 0 0 0-4.38-16.39"></svg:path>`,
})
export class PhEarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarDuotoneIcon],svg[ph-ear-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104c0 40-14.44 72-48 112c-8.07 9.77-18.34 16-32 16a44 44 0 0 1-44-44c0-41.49-36-28-36-84a80 80 0 0 1 160 0" opacity=".2"></svg:path><svg:path d="M216 104a8 8 0 0 1-16 0a72 72 0 0 0-144 0c0 26.7 8.53 34.92 17.57 43.64C82.21 156 92 165.41 92 188a36 36 0 0 0 36 36c10.24 0 18.45-4.16 25.83-13.09a8 8 0 1 1 12.34 10.18C155.81 233.64 143 240 128 240a52.06 52.06 0 0 1-52-52c0-15.79-5.68-21.27-13.54-28.84C52.46 149.5 40 137.5 40 104a88 88 0 0 1 176 0m-38.13 57.08a8 8 0 0 0-10.94 2.92a8 8 0 0 1-14.93-4c0-9.33 4.82-15.76 10.4-23.2c6.37-8.5 13.6-18.13 13.6-32.8a48 48 0 0 0-96 0a8 8 0 0 0 16 0a32 32 0 0 1 64 0c0 9.33-4.82 15.76-10.4 23.2c-6.37 8.5-13.6 18.13-13.6 32.8a24 24 0 0 0 44.78 12a8 8 0 0 0-2.91-10.92"></svg:path></svg:g>`,
})
export class PhEarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarFillIcon],svg[ph-ear-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m20 128a4.2 4.2 0 0 0 1.33-.22a8 8 0 0 1 5.34 15.08A20 20 0 0 1 128 148c0-8.85 4.77-15.23 9-20.87c3.77-5 7-9.38 7-15.13a16 16 0 0 0-32 0a8 8 0 0 1-16 0a32 32 0 0 1 64 0c0 11.07-5.66 18.63-10.2 24.71c-3.6 4.81-5.8 7.93-5.8 11.29a4 4 0 0 0 4 4m36-32a8 8 0 0 1-8-8a48 48 0 0 0-96 0c0 11.9 6.71 20.5 13.82 29.6c7 8.92 14.18 18.15 14.18 30.4a20 20 0 0 0 34 14.29a8 8 0 1 1 11.19 11.42A36 36 0 0 1 92 172c0-6.74-5-13.14-10.79-20.55C73.54 141.63 64 129.41 64 112a64 64 0 0 1 128 0a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhEarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarLightIcon],svg[ph-ear-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 104a6 6 0 0 1-12 0a74 74 0 0 0-148 0c0 27.55 8.83 36.06 18.18 45.08c4.31 4.15 8.77 8.45 12.16 14.47C88.15 170.31 90 178.3 90 188a38 38 0 0 0 38 38c10.74 0 19.69-4.52 27.37-13.82a6 6 0 0 1 9.26 7.64C154.66 231.88 142.34 238 128 238a50.06 50.06 0 0 1-50-50c0-16.64-6.24-22.66-14.15-30.29C54.12 148.33 42 136.64 42 104a86 86 0 0 1 172 0m-37.14 58.81a6 6 0 0 0-8.19 2.19a10 10 0 0 1-18.67-5c0-10 5-16.67 10.8-24.4C167 127.35 174 118 174 104a46 46 0 0 0-92 0a6 6 0 0 0 12 0a34 34 0 0 1 68 0c0 10-5 16.67-10.8 24.4C145 136.65 138 146 138 160a22 22 0 0 0 41.05 11a6 6 0 0 0-2.19-8.19"></svg:path>`,
})
export class PhEarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarSlashIcon],svg[ph-ear-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-35-38.45A24 24 0 0 1 136 160a40.8 40.8 0 0 1 1.21-10L96 104.66a8 8 0 0 1-16-.66a47.8 47.8 0 0 1 2.22-14.46L64.5 70a71.5 71.5 0 0 0-8.5 34c0 26.7 8.53 34.92 17.57 43.64C82.21 156 92 165.41 92 188a36 36 0 0 0 36 36c10.24 0 18.45-4.16 25.83-13.09a8 8 0 1 1 12.34 10.18C155.81 233.64 143 240 128 240a52.06 52.06 0 0 1-52-52c0-15.79-5.68-21.27-13.54-28.84C52.46 149.5 40 137.5 40 104a87.26 87.26 0 0 1 13.21-46.38L42.08 45.38a8 8 0 1 1 11.84-10.76ZM91.09 42.17A72 72 0 0 1 200 104a8 8 0 0 0 16 0A88 88 0 0 0 82.87 28.44a8 8 0 1 0 8.22 13.73m69.23 85a8 8 0 0 0 10.78-3.44A41.9 41.9 0 0 0 176 104a48 48 0 0 0-63.57-45.42a8 8 0 0 0 5.19 15.14A32 32 0 0 1 160 104a26 26 0 0 1-3.12 12.34a8 8 0 0 0 3.44 10.78Z"></svg:path>`,
})
export class PhEarSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarSlashBoldIcon],svg[ph-ear-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.88 207.93a12 12 0 1 1-17.76 16.14l-33.35-36.68a28.4 28.4 0 0 1-5.77.61a28 28 0 0 1-28-28a46 46 0 0 1 .85-8.82l-35.77-39.35A12 12 0 0 1 76 104a52 52 0 0 1 1.75-13.43L65.52 77.11A67.7 67.7 0 0 0 60 104c0 25 7.58 32.3 16.35 40.76S96 163.71 96 188a32 32 0 0 0 32 32c9 0 16.19-3.7 22.75-11.64a12 12 0 0 1 18.5 15.28C158.09 237.15 144.21 244 128 244a56.06 56.06 0 0 1-56-56c0-14.09-4.63-18.56-12.31-26C49.13 151.86 36 139.19 36 104a91.3 91.3 0 0 1 12.25-45.88l-9.13-10a12 12 0 1 1 17.76-16.19ZM99.34 42.31A67.4 67.4 0 0 1 128 36a68.07 68.07 0 0 1 68 68a12 12 0 0 0 24 0A92 92 0 0 0 89.21 20.56a12 12 0 0 0 10.13 21.75m65.09 81a11.5 11.5 0 0 0 2.72.32a12 12 0 0 0 11.68-9.29A45.3 45.3 0 0 0 180 104a52.06 52.06 0 0 0-52-52c-1.7 0-3.42.08-5.11.25a12 12 0 0 0 2.33 23.89c.92-.09 1.86-.14 2.78-.14a28 28 0 0 1 28 28a21.7 21.7 0 0 1-.54 4.88a12 12 0 0 0 8.97 14.4Z"></svg:path>`,
})
export class PhEarSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarSlashDuotoneIcon],svg[ph-ear-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104c0 40-14.44 72-48 112c-8.07 9.77-18.34 16-32 16a44 44 0 0 1-44-44c0-41.49-36-28-36-84a80 80 0 0 1 160 0" opacity=".2"></svg:path><svg:path d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-35-38.45A24 24 0 0 1 136 160a40.8 40.8 0 0 1 1.21-10L96 104.66a8 8 0 0 1-16-.66a47.8 47.8 0 0 1 2.22-14.46L64.5 70a71.5 71.5 0 0 0-8.5 34c0 26.7 8.53 34.92 17.57 43.64C82.21 156 92 165.41 92 188a36 36 0 0 0 36 36c10.24 0 18.45-4.16 25.83-13.09a8 8 0 1 1 12.34 10.18C155.81 233.64 143 240 128 240a52.06 52.06 0 0 1-52-52c0-15.79-5.68-21.27-13.54-28.84C52.46 149.5 40 137.5 40 104a87.26 87.26 0 0 1 13.21-46.38L42.08 45.38a8 8 0 1 1 11.84-10.76ZM91.09 42.17A72 72 0 0 1 200 104a8 8 0 0 0 16 0A88 88 0 0 0 82.87 28.44a8 8 0 1 0 8.22 13.73m69.23 85a8 8 0 0 0 10.78-3.44A41.9 41.9 0 0 0 176 104a48 48 0 0 0-63.57-45.42a8 8 0 0 0 5.19 15.14A32 32 0 0 1 160 104a26 26 0 0 1-3.12 12.34a8 8 0 0 0 3.44 10.78Z"></svg:path></svg:g>`,
})
export class PhEarSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarSlashFillIcon],svg[ph-ear-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-10.28-11.31a103 103 0 0 0 11.83-10.77ZM64.2 45.93L53.92 34.62a8 8 0 1 0-11.84 10.76L52.37 56.7A103 103 0 0 1 64.2 45.93M203.63 199.3L64.2 45.93A103.94 103.94 0 0 1 203.63 199.3M159 104a32 32 0 0 0-20.08-22.09a8 8 0 0 0-5.45 15a16 16 0 0 1 10 11a8 8 0 0 0 7.74 6a7.7 7.7 0 0 0 2-.26A8 8 0 0 0 159 104m33 8a64 64 0 0 0-85.89-60.16a8 8 0 0 0 5.47 15A48 48 0 0 1 176 112a8 8 0 0 0 16 0m-44 56a20 20 0 0 1-20-20a24.1 24.1 0 0 1 1-7l-20.45-22.5A7.9 7.9 0 0 1 104 120a8 8 0 0 1-8-8a32 32 0 0 1 .68-6.56L84.39 91.92A47.6 47.6 0 0 0 80 112c0 11.9 6.71 20.5 13.82 29.6c7 8.92 14.18 18.15 14.18 30.4a20 20 0 0 0 34 14.29a8 8 0 1 1 11.19 11.42A36 36 0 0 1 92 172c0-6.74-5-13.14-10.79-20.55C73.54 141.63 64 129.41 64 112a63.5 63.5 0 0 1 9-32.66L52.37 56.7A103.94 103.94 0 0 0 191.8 210.07l-38.8-42.7a19.8 19.8 0 0 1-5 .63"></svg:path>`,
})
export class PhEarSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarSlashLightIcon],svg[ph-ear-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l12.16 13.41A85.34 85.34 0 0 0 42 104c0 32.64 12.12 44.33 21.85 53.71C71.76 165.34 78 171.36 78 188a50.06 50.06 0 0 0 50 50c14.34 0 26.66-6.12 36.63-18.18a6 6 0 0 0-9.26-7.64C147.69 221.48 138.74 226 128 226a38 38 0 0 1-38-38c0-21.74-9.06-30.48-17.82-38.92C62.83 140.06 54 131.55 54 104a73.4 73.4 0 0 1 10.12-37.35l20.37 22.41A46 46 0 0 0 82 104a6 6 0 0 0 12 0a36 36 0 0 1 .26-4.19l45.15 49.66A39.3 39.3 0 0 0 138 160a22 22 0 0 0 29.71 20.6l35.85 39.4a6 6 0 0 0 8.88-8.08Zm97.64 125.25l7.78 8.55a10 10 0 0 1-7.78-8.59ZM81.83 38.38a6 6 0 0 1 2.07-8.22A86 86 0 0 1 214 104a6 6 0 0 1-12 0A74 74 0 0 0 90.06 40.45a6 6 0 0 1-8.23-2.07m76.83 78.87A27.9 27.9 0 0 0 162 104a34 34 0 0 0-45-32.17a6 6 0 0 1-3.89-11.35A46 46 0 0 1 174 104a40 40 0 0 1-4.68 18.76a6 6 0 1 1-10.66-5.51"></svg:path>`,
})
export class PhEarSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarSlashThinIcon],svg[ph-ear-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38L58.23 57.2A83.4 83.4 0 0 0 44 104c0 31.79 11.28 42.68 21.24 52.28C73.16 163.91 80 170.51 80 188a48.05 48.05 0 0 0 48 48c13.71 0 25.52-5.87 35.08-17.45a4 4 0 0 0-6.16-5.1C148.83 223.24 139.37 228 128 228a40 40 0 0 1-40-40c0-20.89-8.75-29.33-17.21-37.48C61.55 141.61 52 132.4 52 104a75.36 75.36 0 0 1 11.8-40.67l23 25.27A43.7 43.7 0 0 0 84 104a4 4 0 0 0 8 0a36.2 36.2 0 0 1 1-8.53L141.65 149a37 37 0 0 0-1.65 11a20 20 0 0 0 28.24 18.21L205 218.69a4 4 0 1 0 5.92-5.38ZM160 172a12 12 0 0 1-12-12a30 30 0 0 1 .24-3.79l14.13 15.55a12.4 12.4 0 0 1-2.37.24M83.55 37.36a4 4 0 0 1 1.37-5.49A84 84 0 0 1 212 104a4 4 0 0 1-8 0A76 76 0 0 0 89 38.74a4 4 0 0 1-5.45-1.38m76.89 80.81A29.85 29.85 0 0 0 164 104a36 36 0 0 0-47.68-34.06a4 4 0 1 1-2.59-7.57A44 44 0 0 1 172 104a38 38 0 0 1-4.46 17.84A4 4 0 0 1 164 124a3.9 3.9 0 0 1-1.83-.45a4 4 0 0 1-1.73-5.38"></svg:path>`,
})
export class PhEarSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarThinIcon],svg[ph-ear-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 104a4 4 0 0 1-8 0a76 76 0 0 0-152 0c0 28.4 9.55 37.61 18.79 46.52C79.25 158.67 88 167.11 88 188a40 40 0 0 0 40 40c11.37 0 20.83-4.76 28.92-14.55a4 4 0 0 1 6.16 5.1C153.52 230.13 141.71 236 128 236a48.05 48.05 0 0 1-48-48c0-17.49-6.84-24.09-14.76-31.72C55.28 146.68 44 135.79 44 104a84 84 0 0 1 168 0m-36.14 60.54a4 4 0 0 0-5.46 1.46a12 12 0 0 1-22.4-6c0-10.67 5.44-17.92 11.2-25.6c6.29-8.4 12.8-17.07 12.8-30.4a44 44 0 0 0-88 0a4 4 0 0 0 8 0a36 36 0 0 1 72 0c0 10.67-5.44 17.92-11.2 25.6c-6.29 8.4-12.8 17.07-12.8 30.4a20 20 0 0 0 37.32 10a4 4 0 0 0-1.46-5.46"></svg:path>`,
})
export class PhEarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggIcon],svg[ph-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186.66 59.56C168.47 32.29 146.54 16 128 16S87.53 32.29 69.34 59.56C50.7 87.54 40 121.23 40 152a88 88 0 0 0 176 0c0-30.77-10.7-64.46-29.34-92.44M128 224a72.08 72.08 0 0 1-72-72c0-27.69 9.72-58.15 26.66-83.56C97.19 46.64 115.41 32 128 32s30.81 14.64 45.34 36.44C190.28 93.85 200 124.31 200 152a72.08 72.08 0 0 1-72 72"></svg:path>`,
})
export class PhEggIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggBoldIcon],svg[ph-egg-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M190 57.34C171.06 29 147.88 12 128 12S84.94 29 66 57.34C46.94 86 36 120.46 36 152a92 92 0 0 0 184 0c0-31.54-10.94-66-30-94.66M128 220a68.07 68.07 0 0 1-68-68c0-61.12 46.19-116 68-116s68 54.88 68 116a68.07 68.07 0 0 1-68 68"></svg:path>`,
})
export class PhEggBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggCrackIcon],svg[ph-egg-crack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186.66 59.56C168.47 32.29 146.54 16 128 16S87.53 32.29 69.34 59.56C50.7 87.54 40 121.23 40 152a88 88 0 0 0 176 0c0-30.77-10.7-64.46-29.34-92.44M128 224a72.08 72.08 0 0 1-72-72c0-27.69 9.72-58.15 26.66-83.56C97.19 46.64 115.41 32 128 32c9.5 0 22.2 8.33 34.1 21.78L122 98.67a8 8 0 0 0 4 13.09l24.6 6.15l-6.5 32.52a8 8 0 0 0 6.27 9.41a7.8 7.8 0 0 0 1.63.16a8 8 0 0 0 7.83-6.43l8-40a8 8 0 0 0-5.9-9.33l-19.16-4.79L172.1 66.6c.42.61.83 1.22 1.24 1.84C190.28 93.85 200 124.31 200 152a72.08 72.08 0 0 1-72 72"></svg:path>`,
})
export class PhEggCrackIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggCrackBoldIcon],svg[ph-egg-crack-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M190 57.34C171.06 29 147.88 12 128 12S84.94 29 66 57.34C46.94 86 36 120.46 36 152a92 92 0 0 0 184 0c0-31.54-10.94-66-30-94.66M128 220a68.07 68.07 0 0 1-68-68c0-61.12 46.19-116 68-116c7.59 0 18.13 6.65 28.64 17.88L119.05 96a12 12 0 0 0 6 19.63l20.9 5.23l-5.76 28.78a12 12 0 0 0 9.42 14.12a12 12 0 0 0 2.39.24a12 12 0 0 0 11.76-9.65l8-40a12 12 0 0 0-8.86-14l-12.74-3.19l21.4-24C185.2 94.34 196 122.44 196 152a68.07 68.07 0 0 1-68 68"></svg:path>`,
})
export class PhEggCrackBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggCrackDuotoneIcon],svg[ph-egg-crack-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 152a80 80 0 0 1-160 0c0-64 48-128 80-128s80 64 80 128" opacity=".2"></svg:path><svg:path d="M186.66 59.56C168.47 32.29 146.54 16 128 16S87.53 32.29 69.34 59.56C50.7 87.54 40 121.23 40 152a88 88 0 0 0 176 0c0-30.77-10.7-64.46-29.34-92.44M128 224a72.08 72.08 0 0 1-72-72c0-27.69 9.72-58.15 26.66-83.56C97.19 46.64 115.41 32 128 32c9.5 0 22.2 8.33 34.1 21.78L122 98.67a8 8 0 0 0 4 13.09l24.6 6.15l-6.5 32.52a8 8 0 0 0 6.27 9.41a7.8 7.8 0 0 0 1.63.16a8 8 0 0 0 7.83-6.43l8-40a8 8 0 0 0-5.9-9.33l-19.16-4.79L172.1 66.6c.42.61.83 1.22 1.24 1.84C190.28 93.85 200 124.31 200 152a72.08 72.08 0 0 1-72 72"></svg:path></svg:g>`,
})
export class PhEggCrackDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggCrackFillIcon],svg[ph-egg-crack-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 152a88.11 88.11 0 0 1-87.8 88c-50.66.12-90.21-43-88.12-93.62c1.21-29.21 11.71-60.54 29.23-86.82C87.5 32.29 109.43 16 128 16c13.25 0 28.23 8.32 42.34 23a4 4 0 0 1 .09 5.44L122 98.67a8 8 0 0 0 4 13.09l24.61 6.15l-6.51 32.52a8 8 0 0 0 6.28 9.41a7.7 7.7 0 0 0 1.62.16a8 8 0 0 0 7.83-6.43l8-40a8 8 0 0 0-5.9-9.33l-19.16-4.79l36.89-41.33a4 4 0 0 1 6.29.41c.24.34.47.68.7 1C205.3 87.54 216 121.23 216 152"></svg:path>`,
})
export class PhEggCrackFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggCrackLightIcon],svg[ph-egg-crack-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185 60.67C167.18 34 145.87 18 128 18S88.82 34 71 60.67C52.57 88.32 42 121.61 42 152a86 86 0 0 0 172 0c0-30.39-10.57-63.68-29-91.33M128 226a74.09 74.09 0 0 1-74-74c0-28.08 9.84-58.94 27-84.67C96.11 44.65 114.56 30 128 30c10.52 0 24.12 9 36.78 23.77L123.52 100a6 6 0 0 0 3 9.82l26.48 6.61l-6.87 34.39a6 6 0 0 0 4.7 7.06a6 6 0 0 0 1.17.12a6 6 0 0 0 5.87-4.82l8-40a6 6 0 0 0-4.42-7l-22.37-5.59l33.2-37.2q1.36 1.92 2.72 3.94c17.15 25.73 27 56.59 27 84.67a74.09 74.09 0 0 1-74 74"></svg:path>`,
})
export class PhEggCrackLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggCrackThinIcon],svg[ph-egg-crack-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20c-35.13 0-84 66.52-84 132a84 84 0 0 0 168 0c0-65.48-48.87-132-84-132m0 208a76.08 76.08 0 0 1-76-76c0-28.46 10-59.73 27.33-85.78C94.81 43 113.91 28 128 28c11.39 0 26.05 9.8 39.42 25.82L125 101.34a4 4 0 0 0 2 6.54l28.3 7.08l-7.25 36.26a4 4 0 0 0 3.14 4.7a3.4 3.4 0 0 0 .78.08a4 4 0 0 0 3.92-3.22l8-40a4 4 0 0 0-2.95-4.66l-25.58-6.4l37.08-41.52q2.16 2.91 4.23 6C194 92.27 204 123.54 204 152a76.08 76.08 0 0 1-76 76"></svg:path>`,
})
export class PhEggCrackThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggDuotoneIcon],svg[ph-egg-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 152a80 80 0 0 1-160 0c0-64 48-128 80-128s80 64 80 128" opacity=".2"></svg:path><svg:path d="M186.66 59.56C168.47 32.29 146.54 16 128 16S87.53 32.29 69.34 59.56C50.7 87.54 40 121.23 40 152a88 88 0 0 0 176 0c0-30.77-10.7-64.46-29.34-92.44M128 224a72.08 72.08 0 0 1-72-72c0-27.69 9.72-58.15 26.66-83.56C97.19 46.64 115.41 32 128 32s30.81 14.64 45.34 36.44C190.28 93.85 200 124.31 200 152a72.08 72.08 0 0 1-72 72"></svg:path></svg:g>`,
})
export class PhEggDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggFillIcon],svg[ph-egg-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 152a88 88 0 0 1-176 0c0-30.77 10.7-64.46 29.34-92.44C87.53 32.29 109.46 16 128 16s40.47 16.29 58.66 43.56C205.3 87.54 216 121.23 216 152"></svg:path>`,
})
export class PhEggFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggLightIcon],svg[ph-egg-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185 60.67C167.18 34 145.87 18 128 18S88.82 34 71 60.67C52.57 88.32 42 121.61 42 152a86 86 0 0 0 172 0c0-30.39-10.57-63.68-29-91.33M128 226a74.09 74.09 0 0 1-74-74c0-28.08 9.84-58.94 27-84.67C96.11 44.65 114.56 30 128 30s31.89 14.65 47 37.33c17.15 25.73 27 56.59 27 84.67a74.09 74.09 0 0 1-74 74"></svg:path>`,
})
export class PhEggLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggThinIcon],svg[ph-egg-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20c-35.13 0-84 66.52-84 132a84 84 0 0 0 168 0c0-65.48-48.87-132-84-132m0 208a76.08 76.08 0 0 1-76-76c0-28.46 10-59.73 27.33-85.78C94.81 43 113.91 28 128 28s33.19 15 48.67 38.22C194 92.27 204 123.54 204 152a76.08 76.08 0 0 1-76 76"></svg:path>`,
})
export class PhEggThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectIcon],svg[ph-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 152H48a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-24a16 16 0 0 0-16-16m0 40H48v-24h160ZM48.24 136h159.52a16.18 16.18 0 0 0 14.93-9.76a15.59 15.59 0 0 0-3.1-17.12l-73.73-77.51a24.76 24.76 0 0 0-35.72 0l-73.73 77.51a15.59 15.59 0 0 0-3.1 17.12A16.18 16.18 0 0 0 48.24 136m73.49-93.36a8.77 8.77 0 0 1 12.54 0L207.85 120H48.14Z"></svg:path>`,
})
export class PhEjectIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectBoldIcon],svg[ph-eject-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 152H48a20 20 0 0 0-20 20v20a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-20a20 20 0 0 0-20-20m-4 36H52v-12h152ZM48.27 136h159.46a20.27 20.27 0 0 0 14.61-34.3l-73.76-76.92a28.51 28.51 0 0 0-41.16 0L33.66 101.7A20.27 20.27 0 0 0 48.27 136m76.48-94.61a4.49 4.49 0 0 1 6.5 0L199 112H57Z"></svg:path>`,
})
export class PhEjectBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectDuotoneIcon],svg[ph-eject-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 168v24a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-24a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8M48.23 128h159.54c7.16 0 10.89-8.27 6-13.37l-73.74-77.5a16.76 16.76 0 0 0-24.14 0l-73.74 77.5c-4.81 5.1-1.08 13.37 6.08 13.37" opacity=".2"></svg:path><svg:path d="M208 152H48a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-24a16 16 0 0 0-16-16m0 40H48v-24h160ZM48.24 136h159.52a16.18 16.18 0 0 0 14.93-9.76a15.59 15.59 0 0 0-3.1-17.12l-73.73-77.51a24.76 24.76 0 0 0-35.72 0l-73.73 77.51a15.59 15.59 0 0 0-3.1 17.12A16.18 16.18 0 0 0 48.24 136m73.49-93.36a8.77 8.77 0 0 1 12.54 0L207.85 120H48.14Z"></svg:path></svg:g>`,
})
export class PhEjectDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectFillIcon],svg[ph-eject-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.31 126.24a15.59 15.59 0 0 1 3.1-17.12l73.73-77.51a24.76 24.76 0 0 1 35.72 0l73.73 77.51a15.59 15.59 0 0 1 3.1 17.12a16.18 16.18 0 0 1-14.93 9.76H48.24a16.18 16.18 0 0 1-14.93-9.76M208 152H48a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhEjectFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectLightIcon],svg[ph-eject-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 154H48a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-24a14 14 0 0 0-14-14m2 38a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-24a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM48.24 134h159.52a14.19 14.19 0 0 0 13.1-8.55a13.61 13.61 0 0 0-2.72-15L144.41 33a22.76 22.76 0 0 0-32.82 0l-73.73 77.5a13.61 13.61 0 0 0-2.72 15a14.19 14.19 0 0 0 13.1 8.5m-1.69-15.23l73.73-77.51a10.77 10.77 0 0 1 15.44 0l73.73 77.51a1.67 1.67 0 0 1 .38 2a2.11 2.11 0 0 1-2.07 1.27H48.24a2.11 2.11 0 0 1-2.07-1.27a1.67 1.67 0 0 1 .38-2"></svg:path>`,
})
export class PhEjectLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectSimpleIcon],svg[ph-eject-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 200a8 8 0 0 1-8 8H32a8 8 0 1 1 0-16h192a8 8 0 0 1 8 8M25.59 150.84a16 16 0 0 1 2-17.07l81.67-100.83a24.11 24.11 0 0 1 37.48 0l81.65 100.83A16.1 16.1 0 0 1 215.91 160H40.09a16 16 0 0 1-14.5-9.16M40 143.91s0 .09.08.11h175.83s.08-.09.08-.13L134.3 43a8.1 8.1 0 0 0-12.6 0L40 143.84a.3.3 0 0 0 0 .07"></svg:path>`,
})
export class PhEjectSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectSimpleBoldIcon],svg[ph-eject-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 200a12 12 0 0 1-12 12H32a12 12 0 1 1 0-24h192a12 12 0 0 1 12 12M22 152.57a20 20 0 0 1 2.52-21.32l81.64-100.82a28.08 28.08 0 0 1 43.68 0l81.65 100.82A20.1 20.1 0 0 1 215.91 164H40.09A19.9 19.9 0 0 1 22 152.57M48.3 140h159.4l-76.5-94.47a4.11 4.11 0 0 0-6.4 0Z"></svg:path>`,
})
export class PhEjectSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectSimpleDuotoneIcon],svg[ph-eject-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M215.92 152H40.08a8.1 8.1 0 0 1-6.26-13.2L115.48 38a16.1 16.1 0 0 1 25 0l81.7 100.8a8.1 8.1 0 0 1-6.26 13.2" opacity=".2"></svg:path><svg:path d="M232 200a8 8 0 0 1-8 8H32a8 8 0 1 1 0-16h192a8 8 0 0 1 8 8M25.59 150.84a16 16 0 0 1 2-17.07l81.67-100.83a24.11 24.11 0 0 1 37.48 0l81.65 100.83A16.1 16.1 0 0 1 215.91 160H40.09a16 16 0 0 1-14.5-9.16M40 143.91s0 .09.08.11h175.83s.08-.09.08-.13L134.3 43a8.1 8.1 0 0 0-12.6 0L40 143.84a.3.3 0 0 0 0 .07"></svg:path></svg:g>`,
})
export class PhEjectSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectSimpleFillIcon],svg[ph-eject-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 200a8 8 0 0 1-8 8H32a8 8 0 1 1 0-16h192a8 8 0 0 1 8 8M40.09 160h175.82a16.1 16.1 0 0 0 12.48-26.23L146.74 32.94a24.11 24.11 0 0 0-37.48 0L27.61 133.77A16.1 16.1 0 0 0 40.09 160"></svg:path>`,
})
export class PhEjectSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectSimpleLightIcon],svg[ph-eject-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 200a6 6 0 0 1-6 6H32a6 6 0 0 1 0-12h192a6 6 0 0 1 6 6M27.39 150a14 14 0 0 1 1.77-15l81.66-100.8a22.1 22.1 0 0 1 34.36 0L226.84 135a14.09 14.09 0 0 1-10.93 23H40.09a14 14 0 0 1-12.7-8m10.83-5.16a2 2 0 0 0 1.87 1.16h175.82a2 2 0 0 0 1.87-1.18a2 2 0 0 0-.27-2.24L135.86 41.76a10.1 10.1 0 0 0-15.72 0L38.49 142.58a2 2 0 0 0-.27 2.24Z"></svg:path>`,
})
export class PhEjectSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectSimpleThinIcon],svg[ph-eject-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 200a4 4 0 0 1-4 4H32a4 4 0 0 1 0-8h192a4 4 0 0 1 4 4M29.2 149.12a12 12 0 0 1 1.51-12.83l81.66-100.83a20.1 20.1 0 0 1 31.26 0l81.66 100.83a12.1 12.1 0 0 1-9.37 19.71H40.08a12 12 0 0 1-10.88-6.88m7.22-3.44a4 4 0 0 0 3.66 2.32h175.84a4 4 0 0 0 3.66-2.32a4 4 0 0 0-.51-4.36L137.41 40.5a12.09 12.09 0 0 0-18.82 0L36.93 141.32a4 4 0 0 0-.51 4.36"></svg:path>`,
})
export class PhEjectSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectThinIcon],svg[ph-eject-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 156H48a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12m4 36a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-24a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM48.23 132h159.54a12 12 0 0 0 11.23-7.33a11.68 11.68 0 0 0-2.33-12.8L143 34.37a20.75 20.75 0 0 0-29.92 0l-73.78 77.5a11.68 11.68 0 0 0-2.3 12.8A12 12 0 0 0 48.23 132m-3.13-14.61l73.73-77.51a12.78 12.78 0 0 1 18.34 0l73.73 77.51a3.66 3.66 0 0 1 .77 4.12a4.1 4.1 0 0 1-3.9 2.49H48.23a4.1 4.1 0 0 1-3.9-2.49a3.66 3.66 0 0 1 .77-4.12"></svg:path>`,
})
export class PhEjectThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phElevatorIcon],svg[ph-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 80v96h-40v-96Zm-56 96H80v-96h40Zm88 0h-16V104a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v104H48V48h160zM152 72a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhElevatorIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phElevatorBoldIcon],svg[ph-elevator-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-44 100v76h-24v-76Zm-48 76H92v-76h24Zm88 0h-16v-88a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v88H52V52h152ZM100 76a12 12 0 0 1 12-12h32a12 12 0 0 1 0 24h-32a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhElevatorBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phElevatorDuotoneIcon],svg[ph-elevator-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 104v112H72V104Z" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 80v96h-40v-96Zm-56 96H80v-96h40Zm88 0h-16V104a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v104H48V48h160zM152 72a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhElevatorDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phElevatorFillIcon],svg[ph-elevator-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-96 24h32a8 8 0 0 1 0 16h-32a8 8 0 0 1 0-16m8 152H64V96h56Zm72 0h-56V96h56Z"></svg:path>`,
})
export class PhElevatorFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phElevatorLightIcon],svg[ph-elevator-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m-30 76v100h-44V110Zm-56 100H78V110h44Zm88-2a2 2 0 0 1-2 2h-18V104a6 6 0 0 0-6-6H72a6 6 0 0 0-6 6v106H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM150 72a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhElevatorLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phElevatorThinIcon],svg[ph-elevator-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m-28 72v104h-48V108Zm-56 104H76V108h48Zm88-4a4 4 0 0 1-4 4h-20V104a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4v108H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM148 72a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhElevatorThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEmptyIcon],svg[ph-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m198.24 62.63l15.68-17.25a8 8 0 0 0-11.84-10.76L186.4 51.86A95.95 95.95 0 0 0 57.76 193.37l-15.68 17.25a8 8 0 1 0 11.84 10.76l15.68-17.24A95.95 95.95 0 0 0 198.24 62.63M48 128a80 80 0 0 1 127.6-64.25l-107 117.73A79.63 79.63 0 0 1 48 128m80 80a79.55 79.55 0 0 1-47.6-15.75l107-117.73A79.95 79.95 0 0 1 128 208"></svg:path>`,
})
export class PhEmptyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEmptyBoldIcon],svg[ph-empty-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m203.63 62.65l13.25-14.58a12 12 0 0 0-17.76-16.14l-13.24 14.56A100 100 0 0 0 52.37 193.35l-13.25 14.58a12 12 0 1 0 17.76 16.14l13.24-14.56A100 100 0 0 0 203.63 62.65M52 128a75.94 75.94 0 0 1 117.58-63.57l-100.91 111A75.6 75.6 0 0 1 52 128m76 76a75.5 75.5 0 0 1-41.58-12.43l100.91-111A75.94 75.94 0 0 1 128 204"></svg:path>`,
})
export class PhEmptyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEmptyDuotoneIcon],svg[ph-empty-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88" opacity=".2"></svg:path><svg:path d="m198.24 62.63l15.68-17.25a8 8 0 0 0-11.84-10.76L186.4 51.86A95.95 95.95 0 0 0 57.76 193.37l-15.68 17.25a8 8 0 1 0 11.84 10.76l15.68-17.24A95.95 95.95 0 0 0 198.24 62.63M48 128a80 80 0 0 1 127.6-64.25l-107 117.73A79.63 79.63 0 0 1 48 128m80 80a79.55 79.55 0 0 1-47.6-15.75l107-117.73A79.95 79.95 0 0 1 128 208"></svg:path></svg:g>`,
})
export class PhEmptyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEmptyFillIcon],svg[ph-empty-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.49 91.59A56 56 0 0 1 97.54 175ZM128 72a56 56 0 0 0-42.49 92.41l73-83.37A55.67 55.67 0 0 0 128 72m104 56A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104m-32 0a71.68 71.68 0 0 0-18.89-48.55l4.89-6.18a8 8 0 1 0-12-10.54l-4.91 6.18a72 72 0 0 0-94.2 107.64L70 182.73a8 8 0 0 0 12 10.54l4.91-6.18A71.95 71.95 0 0 0 200 128"></svg:path>`,
})
export class PhEmptyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEmptyLightIcon],svg[ph-empty-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M195.51 62.66L212.44 44a6 6 0 1 0-8.88-8l-16.93 18.58A94 94 0 0 0 60.49 193.34L43.56 212a6 6 0 0 0 8.88 8l16.93-18.62A94 94 0 0 0 195.51 62.66M46 128a81.93 81.93 0 0 1 132.53-64.51L68.59 184.43A81.7 81.7 0 0 1 46 128m82 82a81.57 81.57 0 0 1-50.53-17.49L187.41 71.57A81.94 81.94 0 0 1 128 210"></svg:path>`,
})
export class PhEmptyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEmptyThinIcon],svg[ph-empty-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m192.76 62.72l18.2-20a4 4 0 0 0-5.96-5.41l-18.2 20a92 92 0 0 0-123.6 136l-18.2 20a4 4 0 1 0 6 5.38l18.2-20A92 92 0 0 0 192.76 62.72M44 128a84 84 0 0 1 137.46-64.75L68.63 187.36A83.72 83.72 0 0 1 44 128m84 84a83.64 83.64 0 0 1-53.46-19.25L187.37 68.64A84 84 0 0 1 128 212"></svg:path>`,
})
export class PhEmptyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEngineIcon],svg[ph-engine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 104h-12.69L192 68.69A15.86 15.86 0 0 0 180.69 64H140V40h24a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16h24v24H64a16 16 0 0 0-16 16v52H24v-24a8 8 0 0 0-16 0v64a8 8 0 0 0 16 0v-24h24v20.69A15.86 15.86 0 0 0 52.69 180L92 219.31a15.86 15.86 0 0 0 11.31 4.69h77.38a15.86 15.86 0 0 0 11.31-4.69L227.31 184H240a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64h-16a8 8 0 0 0-5.66 2.34L180.69 208h-77.38L64 168.69V80h116.69l37.65 37.66A8 8 0 0 0 224 120h16Z"></svg:path>`,
})
export class PhEngineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEngineBoldIcon],svg[ph-engine-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 100h-11l-34.17-34.14A19.86 19.86 0 0 0 176.69 60H144V44h20a12 12 0 0 0 0-24h-64a12 12 0 0 0 0 24h20v16H64a20 20 0 0 0-20 20v48H28v-20a12 12 0 0 0-24 0v64a12 12 0 0 0 24 0v-20h16v16.69a19.86 19.86 0 0 0 5.86 14.14l39.31 39.31a19.86 19.86 0 0 0 14.14 5.86h73.38a19.86 19.86 0 0 0 14.14-5.86L225 188h11a20 20 0 0 0 20-20v-48a20 20 0 0 0-20-20m-4 64h-12a12 12 0 0 0-8.49 3.51L175 204h-70l-37-37V84h107l36.48 36.49A12 12 0 0 0 220 124h12Z"></svg:path>`,
})
export class PhEngineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEngineDuotoneIcon],svg[ph-engine-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M248 120v48a8 8 0 0 1-8 8h-16l-37.66 37.66a8 8 0 0 1-5.65 2.34h-77.38a8 8 0 0 1-5.65-2.34l-39.32-39.32a8 8 0 0 1-2.34-5.65V80a8 8 0 0 1 8-8h116.69a8 8 0 0 1 5.65 2.34L224 112h16a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M240 104h-12.69L192 68.69A15.86 15.86 0 0 0 180.69 64H140V40h24a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16h24v24H64a16 16 0 0 0-16 16v52H24v-24a8 8 0 0 0-16 0v64a8 8 0 0 0 16 0v-24h24v20.69A15.86 15.86 0 0 0 52.69 180L92 219.31a15.86 15.86 0 0 0 11.31 4.69h77.38a15.86 15.86 0 0 0 11.31-4.69L227.31 184H240a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64h-16a8 8 0 0 0-5.66 2.34L180.69 208h-77.38L64 168.69V80h116.69l37.65 37.66A8 8 0 0 0 224 120h16Z"></svg:path></svg:g>`,
})
export class PhEngineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEngineFillIcon],svg[ph-engine-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 120v48a16 16 0 0 1-16 16h-12.69L192 219.31a15.86 15.86 0 0 1-11.31 4.69h-77.38A15.86 15.86 0 0 1 92 219.31L52.69 180A15.86 15.86 0 0 1 48 168.69V148H24v24a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0v24h24V80a16 16 0 0 1 16-16h60V40h-24a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16h-24v24h40.69A15.86 15.86 0 0 1 192 68.69L227.31 104H240a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhEngineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEngineLightIcon],svg[ph-engine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 106h-13.51l-35.91-35.9a13.9 13.9 0 0 0-9.89-4.1H138V38h26a6 6 0 0 0 0-12h-64a6 6 0 0 0 0 12h26v28H64a14 14 0 0 0-14 14v54H22v-26a6 6 0 0 0-12 0v64a6 6 0 0 0 12 0v-26h28v22.69a13.9 13.9 0 0 0 4.1 9.89l39.32 39.32a13.9 13.9 0 0 0 9.89 4.1h77.38a13.9 13.9 0 0 0 9.89-4.1l35.91-35.9H240a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2h-16a6 6 0 0 0-4.24 1.76l-37.66 37.66a2 2 0 0 1-1.41.58h-77.38a2 2 0 0 1-1.41-.58L62.58 170.1a2 2 0 0 1-.58-1.41V80a2 2 0 0 1 2-2h116.69a2 2 0 0 1 1.41.58l37.66 37.66A6 6 0 0 0 224 118h16a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhEngineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEngineThinIcon],svg[ph-engine-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 108h-14.34l-36.49-36.49a11.93 11.93 0 0 0-8.48-3.51H136V36h28a4 4 0 0 0 0-8h-64a4 4 0 0 0 0 8h28v32H64a12 12 0 0 0-12 12v56H20v-28a4 4 0 0 0-8 0v64a4 4 0 0 0 8 0v-28h32v24.69a11.93 11.93 0 0 0 3.51 8.48l39.32 39.32a11.93 11.93 0 0 0 8.48 3.51h77.38a11.93 11.93 0 0 0 8.48-3.51L225.66 180H240a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4h-16a4 4 0 0 0-2.83 1.17l-37.66 37.66a4 4 0 0 1-2.82 1.17h-77.38a4 4 0 0 1-2.82-1.17l-39.32-39.32a4 4 0 0 1-1.17-2.82V80a4 4 0 0 1 4-4h116.69a4 4 0 0 1 2.82 1.17l37.66 37.66A4 4 0 0 0 224 116h16a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhEngineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeIcon],svg[ph-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-96 85.15L52.57 64h150.86ZM98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z"></svg:path>`,
})
export class PhEnvelopeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeBoldIcon],svg[ph-envelope-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44H32a12 12 0 0 0-12 12v136a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a12 12 0 0 0-12-12m-96 83.72L62.85 68h130.3Zm-35.21.28L44 172.72V83.28Zm17.76 16.28l9.34 8.57a12 12 0 0 0 16.22 0l9.34-8.57l47.7 43.72H62.85ZM163.21 128L212 83.28v89.44Z"></svg:path>`,
})
export class PhEnvelopeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeDuotoneIcon],svg[ph-envelope-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 56l-96 88l-96-88Z" opacity=".2"></svg:path><svg:path d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-96 85.15L52.57 64h150.86ZM98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z"></svg:path></svg:g>`,
})
export class PhEnvelopeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeFillIcon],svg[ph-envelope-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8M98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z"></svg:path>`,
})
export class PhEnvelopeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeLightIcon],svg[ph-envelope-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a6 6 0 0 0-6 6v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a6 6 0 0 0-6-6m-96 85.86L47.42 62h161.16ZM101.67 128L38 186.36V69.64Zm8.88 8.14L124 148.42a6 6 0 0 0 8.1 0l13.4-12.28L208.58 194H47.43Zm43.78-8.14L218 69.64v116.72Z"></svg:path>`,
})
export class PhEnvelopeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeOpenIcon],svg[ph-envelope-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M96.72 152L40 192v-80.47Zm16.37 8h29.82l56.63 40H56.46Zm46.19-8L216 111.53V192ZM128 41.61l81.91 54.61l-67 47.78h-29.8l-67-47.78Z"></svg:path>`,
})
export class PhEnvelopeOpenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeOpenBoldIcon],svg[ph-envelope-open-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m230.66 86l-96-64a12 12 0 0 0-13.32 0l-96 64A12 12 0 0 0 20 96v104a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V96a12 12 0 0 0-5.34-10M89.81 152L44 184.31v-65Zm24.55 12h27.28L187 196H69.05Zm51.83-12L212 119.29v65ZM128 46.42l74.86 49.91L141.61 140h-27.22L53.14 96.33Z"></svg:path>`,
})
export class PhEnvelopeOpenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeOpenDuotoneIcon],svg[ph-envelope-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 96l-78.55 56h-34.9L32 96l96-64Z" opacity=".2"></svg:path><svg:path d="m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M96.72 152L40 192v-80.47Zm16.37 8h29.82l56.63 40H56.46Zm46.19-8L216 111.53V192ZM128 41.61l81.91 54.61l-67 47.78h-29.8l-67-47.78Z"></svg:path></svg:g>`,
})
export class PhEnvelopeOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeOpenFillIcon],svg[ph-envelope-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M96.72 152L40 192v-80.47Zm16.37 8h29.82l56.63 40H56.46Zm46.19-8L216 111.53V192Z"></svg:path>`,
})
export class PhEnvelopeOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeOpenLightIcon],svg[ph-envelope-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.33 91l-96-64a6 6 0 0 0-6.66 0l-96 64A6 6 0 0 0 26 96v104a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V96a6 6 0 0 0-2.67-5m-127.15 61L38 195.9v-88.25Zm12.27 6h31.1l62.29 44H50.16Zm43.37-6L218 107.65v88.25ZM128 39.21l85.43 57l-69.9 49.79h-31.06l-69.9-49.83Z"></svg:path>`,
})
export class PhEnvelopeOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeOpenThinIcon],svg[ph-envelope-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.22 92.67l-96-64a4 4 0 0 0-4.44 0l-96 64A4 4 0 0 0 28 96v104a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V96a4 4 0 0 0-1.78-3.33M103.63 152L36 199.76v-96Zm8.19 4h32.36l68 48H43.86Zm40.55-4L220 103.76v96ZM128 36.81l89 59.3L144.17 148h-32.34L39.05 96.11Z"></svg:path>`,
})
export class PhEnvelopeOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleIcon],svg[ph-envelope-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-20.57 16L128 133.15L52.57 64ZM216 192H40V74.19l82.59 75.71a8 8 0 0 0 10.82 0L216 74.19z"></svg:path>`,
})
export class PhEnvelopeSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleBoldIcon],svg[ph-envelope-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44H32a12 12 0 0 0-12 12v136a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a12 12 0 0 0-12-12m-30.85 24L128 127.72L62.85 68ZM44 188V83.28l75.89 69.57a12 12 0 0 0 16.22 0L212 83.28V188Z"></svg:path>`,
})
export class PhEnvelopeSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleDuotoneIcon],svg[ph-envelope-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 56l-96 88l-96-88Z" opacity=".2"></svg:path><svg:path d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-20.57 16L128 133.15L52.57 64ZM216 192H40V74.19l82.59 75.71a8 8 0 0 0 10.82 0L216 74.19z"></svg:path></svg:g>`,
})
export class PhEnvelopeSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleFillIcon],svg[ph-envelope-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-8 144H40V74.19l82.59 75.71a8 8 0 0 0 10.82 0L216 74.19z"></svg:path>`,
})
export class PhEnvelopeSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleLightIcon],svg[ph-envelope-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a6 6 0 0 0-6 6v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a6 6 0 0 0-6-6m-15.42 12L128 135.86L47.42 62ZM216 194H40a2 2 0 0 1-2-2V69.64l86 78.78a6 6 0 0 0 8.1 0L218 69.64V192a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhEnvelopeSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleOpenIcon],svg[ph-envelope-simple-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M128 41.61l81.91 54.61l-67 47.78h-29.8l-67-47.78ZM40 200v-88.47l65.9 47a8 8 0 0 0 4.65 1.49h34.9a8 8 0 0 0 4.65-1.49l65.9-47V200Z"></svg:path>`,
})
export class PhEnvelopeSimpleOpenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleOpenBoldIcon],svg[ph-envelope-simple-open-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m230.66 86l-96-64a12 12 0 0 0-13.32 0l-96 64A12 12 0 0 0 20 96v104a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V96a12 12 0 0 0-5.34-10M128 46.42l74.86 49.91L141.61 140h-27.22L53.14 96.33ZM44 196v-76.71l59.58 42.48a12 12 0 0 0 7 2.23h34.9a12 12 0 0 0 7-2.23L212 119.29V196Z"></svg:path>`,
})
export class PhEnvelopeSimpleOpenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleOpenDuotoneIcon],svg[ph-envelope-simple-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 96l-78.55 56h-34.9L32 96l96-64Z" opacity=".2"></svg:path><svg:path d="m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M128 41.61l81.91 54.61l-67 47.78h-29.8l-67-47.78ZM40 200v-88.47l65.9 47a8 8 0 0 0 4.65 1.49h34.9a8 8 0 0 0 4.65-1.49l65.9-47V200Z"></svg:path></svg:g>`,
})
export class PhEnvelopeSimpleOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleOpenFillIcon],svg[ph-envelope-simple-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M40 200v-88.47l65.9 47a8 8 0 0 0 4.65 1.49h34.9a8 8 0 0 0 4.65-1.49l65.9-47V200Z"></svg:path>`,
})
export class PhEnvelopeSimpleOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleOpenLightIcon],svg[ph-envelope-simple-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.33 91l-96-64a6 6 0 0 0-6.66 0l-96 64A6 6 0 0 0 26 96v104a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V96a6 6 0 0 0-2.67-5M128 39.21l85.43 57l-69.9 49.79h-31.06l-69.9-49.83ZM216 202H40a2 2 0 0 1-2-2v-92.35l69.06 49.24a6.06 6.06 0 0 0 3.49 1.11h34.9a6.06 6.06 0 0 0 3.49-1.11L218 107.65V200a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhEnvelopeSimpleOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleOpenThinIcon],svg[ph-envelope-simple-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.22 92.67l-96-64a4 4 0 0 0-4.44 0l-96 64A4 4 0 0 0 28 96v104a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V96a4 4 0 0 0-1.78-3.33M128 36.81l89 59.3L144.17 148h-32.34L39.05 96.11ZM216 204H40a4 4 0 0 1-4-4v-96.24l72.22 51.5a4 4 0 0 0 2.33.74h34.9a4 4 0 0 0 2.33-.74l72.22-51.5V200a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhEnvelopeSimpleOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleThinIcon],svg[ph-envelope-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a4 4 0 0 0-4 4v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a4 4 0 0 0-4-4m-10.28 8L128 138.57L42.28 60ZM216 196H40a4 4 0 0 1-4-4V65.09L125.3 147a4 4 0 0 0 5.4 0L220 65.09V192a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhEnvelopeSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeThinIcon],svg[ph-envelope-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a4 4 0 0 0-4 4v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a4 4 0 0 0-4-4m-96 86.57L42.28 60h171.44ZM104.63 128L36 190.91V65.09Zm5.92 5.43L125.3 147a4 4 0 0 0 5.4 0l14.75-13.52L213.72 196H42.28Zm40.82-5.43L220 65.09v125.82Z"></svg:path>`,
})
export class PhEnvelopeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualizerIcon],svg[ph-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 96a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m-8 24H24a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32H24a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32H24a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m80-64h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m80-96h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m-48-16h48a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16m48 48h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhEqualizerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualizerBoldIcon],svg[ph-equalizer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 108a12 12 0 0 1-12 12H28a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12m-12 28H28a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m0 40H28a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m80-40h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m0 40h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m40-96h40a12 12 0 0 0 0-24h-40a12 12 0 0 0 0 24m40 16h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m0 40h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m0 40h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhEqualizerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualizerDuotoneIcon],svg[ph-equalizer-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 64v128H24V80a16 16 0 0 1 16-16Z" opacity=".2"></svg:path><svg:path d="M80 96a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m-8 24H24a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32H24a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32H24a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m80-64h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m80-96h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m-48-16h48a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16m48 48h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhEqualizerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualizerFillIcon],svg[ph-equalizer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 96a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m72 24h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m32-48h48a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16M72 120H24a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-64a8 8 0 0 0-8-8m160-32h-48a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8m-80 64h-48a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhEqualizerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualizerLightIcon],svg[ph-equalizer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78 96a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-6 26H24a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32H24a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32H24a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m80-64h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m80-96h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m-48-20h48a6 6 0 0 0 0-12h-48a6 6 0 0 0 0 12m48 52h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhEqualizerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualizerThinIcon],svg[ph-equalizer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 96a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m-4 28H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m80-64h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m80-96h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m-48-24h48a4 4 0 0 0 0-8h-48a4 4 0 0 0 0 8m48 56h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhEqualizerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualsIcon],svg[ph-equals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 160a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 104h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhEqualsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualsBoldIcon],svg[ph-equals-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 160a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M40 108h176a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24"></svg:path>`,
})
export class PhEqualsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualsDuotoneIcon],svg[ph-equals-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M224 160a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 104h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16"></svg:path></svg:g>`,
})
export class PhEqualsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualsFillIcon],svg[ph-equals-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 128H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16m0-48H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhEqualsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualsLightIcon],svg[ph-equals-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 160a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M40 102h176a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12"></svg:path>`,
})
export class PhEqualsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualsThinIcon],svg[ph-equals-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 160a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4M40 100h176a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8"></svg:path>`,
})
export class PhEqualsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEraserIcon],svg[ph-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225 80.4L183.6 39a24 24 0 0 0-33.94 0L31 157.66a24 24 0 0 0 0 33.94l30.06 30.06a8 8 0 0 0 5.68 2.34H216a8 8 0 0 0 0-16h-84.7l93.7-93.66a24 24 0 0 0 0-33.94M108.68 208H70.05l-27.72-27.72a8 8 0 0 1 0-11.31L96 115.31L148.69 168Zm105-105L160 156.69L107.31 104L161 50.34a8 8 0 0 1 11.32 0l41.38 41.38a8 8 0 0 1 0 11.31Z"></svg:path>`,
})
export class PhEraserIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEraserBoldIcon],svg[ph-eraser-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 204h-75l86.84-86.84a28 28 0 0 0 0-39.6l-41.41-41.37a28 28 0 0 0-39.6 0L28.19 154.82a28 28 0 0 0 0 39.6l30.06 30.07a12 12 0 0 0 8.49 3.51H216a12 12 0 0 0 0-24M163.8 53.16a4 4 0 0 1 5.66 0l41.38 41.38a4 4 0 0 1 0 5.65L160 151l-47-47ZM71.71 204l-26.55-26.55a4 4 0 0 1 0-5.65L96 121l47 47l-36 36Z"></svg:path>`,
})
export class PhEraserBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEraserDuotoneIcon],svg[ph-eraser-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m160 168l-48 48H66.75l-30.06-30.06a16 16 0 0 1 0-22.63L96 104Z" opacity=".2"></svg:path><svg:path d="M225 80.4L183.6 39a24 24 0 0 0-33.94 0L31 157.66a24 24 0 0 0 0 33.94l30.06 30.06a8 8 0 0 0 5.68 2.34H216a8 8 0 0 0 0-16h-84.7l93.7-93.66a24 24 0 0 0 0-33.94M108.68 208H70.05l-27.72-27.72a8 8 0 0 1 0-11.31L96 115.31L148.69 168Zm105-105L160 156.69L107.31 104L161 50.34a8 8 0 0 1 11.32 0l41.38 41.38a8 8 0 0 1 0 11.31Z"></svg:path></svg:g>`,
})
export class PhEraserDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEraserFillIcon],svg[ph-eraser-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225 80.4L183.6 39a24 24 0 0 0-33.94 0L31 157.66a24 24 0 0 0 0 33.94l30.06 30.06a8 8 0 0 0 5.68 2.34H216a8 8 0 0 0 0-16h-84.7l93.7-93.66a24 24 0 0 0 0-33.94M213.67 103L160 156.69L107.31 104L161 50.34a8 8 0 0 1 11.32 0l41.38 41.38a8 8 0 0 1 0 11.31Z"></svg:path>`,
})
export class PhEraserFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEraserLightIcon],svg[ph-eraser-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.57 81.81l-41.38-41.38a22 22 0 0 0-31.12 0L32.43 159.07a22 22 0 0 0 0 31.11l30.07 30.06a6 6 0 0 0 4.24 1.76H216a6 6 0 0 0 0-12h-89.51l97.08-97.08a22 22 0 0 0 0-31.11M109.51 210H69.22l-28.3-28.3a10 10 0 0 1 0-14.15L96 112.48L151.52 168Zm105.57-105.56L160 159.51L104.48 104l55.08-55.07a10 10 0 0 1 14.14 0l41.38 41.37a10 10 0 0 1 0 14.14"></svg:path>`,
})
export class PhEraserLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEraserThinIcon],svg[ph-eraser-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.15 83.22l-41.38-41.37a20 20 0 0 0-28.28 0L33.85 160.48a20 20 0 0 0 0 28.29l30.06 30.06a4 4 0 0 0 2.83 1.17H216a4 4 0 0 0 0-8h-94.34l100.49-100.49a20 20 0 0 0 0-28.29M110.34 212H68.4l-28.89-28.89a12 12 0 0 1 0-17L96 109.65L154.35 168Zm106.15-106.15L160 162.34L101.65 104l56.49-56.48a12 12 0 0 1 17 0l41.37 41.37a12 12 0 0 1-.02 16.96"></svg:path>`,
})
export class PhEraserThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorDownIcon],svg[ph-escalator-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.34 85.66a8 8 0 0 1 11.32-11.32L192 84.69V48a8 8 0 0 1 16 0v36.69l10.34-10.35a8 8 0 0 1 11.32 11.32l-24 24a8 8 0 0 1-11.32 0ZM240 160v40a16 16 0 0 1-16 16h-56a8 8 0 0 1-5.88-2.57L68.5 112H32a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h56a8 8 0 0 1 5.88 2.57L187.5 144H224a16 16 0 0 1 16 16m-16 0h-40a8 8 0 0 1-5.88-2.57L84.5 56H32v40h40a8 8 0 0 1 5.88 2.57L171.5 200H224Z"></svg:path>`,
})
export class PhEscalatorDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorDownBoldIcon],svg[ph-escalator-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M167.51 88.49a12 12 0 0 1 17-17L188 75V48a12 12 0 0 1 24 0v27l3.51-3.52a12 12 0 0 1 17 17l-24 24a12 12 0 0 1-17 0ZM244 160v40a20 20 0 0 1-20 20h-56a12 12 0 0 1-8.82-3.86L66.75 116H32a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h56a12 12 0 0 1 8.82 3.86L189.25 140H224a20 20 0 0 1 20 20m-24 4h-36a12 12 0 0 1-8.82-3.86L82.75 60H36v32h36a12 12 0 0 1 8.82 3.86L173.25 196H220Z"></svg:path>`,
})
export class PhEscalatorDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorDownDuotoneIcon],svg[ph-escalator-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 160v40a8 8 0 0 1-8 8h-56L72 104H32a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h56l96 104h40a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M170.34 85.66a8 8 0 0 1 11.32-11.32L192 84.69V48a8 8 0 0 1 16 0v36.69l10.34-10.35a8 8 0 0 1 11.32 11.32l-24 24a8 8 0 0 1-11.32 0ZM240 160v40a16 16 0 0 1-16 16h-56a8 8 0 0 1-5.88-2.57L68.5 112H32a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h56a8 8 0 0 1 5.88 2.57L187.5 144H224a16 16 0 0 1 16 16m-16 0h-40a8 8 0 0 1-5.88-2.57L84.5 56H32v40h40a8 8 0 0 1 5.88 2.57L171.5 200H224Z"></svg:path></svg:g>`,
})
export class PhEscalatorDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorDownFillIcon],svg[ph-escalator-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.34 85.66a8 8 0 0 1 11.32-11.32L192 84.69V48a8 8 0 0 1 16 0v36.69l10.34-10.35a8 8 0 0 1 11.32 11.32l-24 24a8 8 0 0 1-11.32 0ZM224 144h-36.5L93.88 42.57A8 8 0 0 0 88 40H32a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h36.5l93.62 101.43A8 8 0 0 0 168 216h56a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhEscalatorDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorDownLightIcon],svg[ph-escalator-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171.76 84.24a6 6 0 0 1 8.48-8.48L194 89.51V48a6 6 0 0 1 12 0v41.51l13.76-13.75a6 6 0 0 1 8.48 8.48l-24 24a6 6 0 0 1-8.48 0ZM238 160v40a14 14 0 0 1-14 14h-56a6 6 0 0 1-4.41-1.93L69.37 110H32a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h56a6 6 0 0 1 4.41 1.93L186.63 146H224a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2h-40a6 6 0 0 1-4.41-1.93L85.37 54H32a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h40a6 6 0 0 1 4.41 1.93L170.63 202H224a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhEscalatorDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorDownThinIcon],svg[ph-escalator-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M173.17 82.83a4 4 0 0 1 5.66-5.66L196 94.34V48a4 4 0 0 1 8 0v46.34l17.17-17.17a4 4 0 1 1 5.66 5.66l-24 24a4 4 0 0 1-5.66 0ZM236 160v40a12 12 0 0 1-12 12h-56a4 4 0 0 1-2.94-1.29L70.25 108H32a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h56a4 4 0 0 1 2.94 1.29L185.75 148H224a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4h-40a4 4 0 0 1-2.94-1.29L86.25 52H32a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h40a4 4 0 0 1 2.94 1.29L169.75 204H224a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhEscalatorDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorUpIcon],svg[ph-escalator-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40h-56a8 8 0 0 0-5.88 2.57L68.5 144H32a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h56a8 8 0 0 0 5.88-2.57L187.5 112H224a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 56h-40a8 8 0 0 0-5.88 2.57L84.5 200H32v-40h40a8 8 0 0 0 5.88-2.57L171.5 56H224Zm5.66 74.34a8 8 0 0 1-11.32 11.32L208 171.31V208a8 8 0 0 1-16 0v-36.69l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0Z"></svg:path>`,
})
export class PhEscalatorUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorUpBoldIcon],svg[ph-escalator-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 36h-56a12 12 0 0 0-8.82 3.86L66.75 140H32a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h56a12 12 0 0 0 8.82-3.86L189.25 116H224a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 56h-36a12 12 0 0 0-8.82 3.86L82.75 196H36v-32h36a12 12 0 0 0 8.82-3.86L173.25 60H220Zm12.49 75.51a12 12 0 0 1-17 17L212 181v27a12 12 0 0 1-24 0v-27l-3.51 3.52a12 12 0 0 1-17-17l24-24a12 12 0 0 1 17 0Z"></svg:path>`,
})
export class PhEscalatorUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorUpDuotoneIcon],svg[ph-escalator-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 56v40a8 8 0 0 1-8 8h-40L88 208H32a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8h40l96-104h56a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M224 40h-56a8 8 0 0 0-5.88 2.57L68.5 144H32a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h56a8 8 0 0 0 5.88-2.57L187.5 112H224a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 56h-40a8 8 0 0 0-5.88 2.57L84.5 200H32v-40h40a8 8 0 0 0 5.88-2.57L171.5 56H224Zm5.66 74.34a8 8 0 0 1-11.32 11.32L208 171.31V208a8 8 0 0 1-16 0v-36.69l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0Z"></svg:path></svg:g>`,
})
export class PhEscalatorUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorUpFillIcon],svg[ph-escalator-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 56v40a16 16 0 0 1-16 16h-36.5L93.88 213.43A8 8 0 0 1 88 216H32a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h36.5l93.62-101.43A8 8 0 0 1 168 40h56a16 16 0 0 1 16 16m-34.34 90.34a8 8 0 0 0-11.32 0l-24 24a8 8 0 0 0 11.32 11.32L192 171.31V208a8 8 0 0 0 16 0v-36.69l10.34 10.35a8 8 0 0 0 11.32-11.32Z"></svg:path>`,
})
export class PhEscalatorUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorUpLightIcon],svg[ph-escalator-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 42h-56a6 6 0 0 0-4.41 1.93L69.37 146H32a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h56a6 6 0 0 0 4.41-1.93L186.63 110H224a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 54a2 2 0 0 1-2 2h-40a6 6 0 0 0-4.41 1.93L85.37 202H32a2 2 0 0 1-2-2v-40a2 2 0 0 1 2-2h40a6 6 0 0 0 4.41-1.93L170.63 54H224a2 2 0 0 1 2 2Zm2.24 75.76a6 6 0 1 1-8.48 8.48L206 166.49V208a6 6 0 0 1-12 0v-41.51l-13.76 13.75a6 6 0 0 1-8.48-8.48l24-24a6 6 0 0 1 8.48 0Z"></svg:path>`,
})
export class PhEscalatorUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorUpThinIcon],svg[ph-escalator-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44h-56a4 4 0 0 0-2.94 1.29L70.25 148H32a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h56a4 4 0 0 0 2.94-1.29L185.75 108H224a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 52a4 4 0 0 1-4 4h-40a4 4 0 0 0-2.94 1.29L86.25 204H32a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4h40a4 4 0 0 0 2.94-1.29L169.75 52H224a4 4 0 0 1 4 4Zm-1.17 77.17a4 4 0 0 1-5.66 5.66L204 161.66V208a4 4 0 0 1-8 0v-46.34l-17.17 17.17a4 4 0 0 1-5.66-5.66l24-24a4 4 0 0 1 5.66 0Z"></svg:path>`,
})
export class PhEscalatorUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExamIcon],svg[ph-exam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v160a8 8 0 0 0 11.58 7.16L64 208.94l28.42 14.22a8 8 0 0 0 7.16 0L128 208.94l28.42 14.22a8 8 0 0 0 7.16 0L192 208.94l28.42 14.22A8 8 0 0 0 232 216V56a16 16 0 0 0-16-16m0 163.06l-20.42-10.22a8 8 0 0 0-7.16 0L160 207.06l-28.42-14.22a8 8 0 0 0-7.16 0L96 207.06l-28.42-14.22a8 8 0 0 0-7.16 0L40 203.06V56h176Zm-155.58-35.9a8 8 0 0 0 10.74-3.58L76.94 152h38.12l5.78 11.58a8 8 0 1 0 14.32-7.16l-32-64a8 8 0 0 0-14.32 0l-32 64a8 8 0 0 0 3.58 10.74M96 113.89L107.06 136H84.94ZM136 128a8 8 0 0 1 8-8h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhExamIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExamBoldIcon],svg[ph-exam-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v160a12 12 0 0 0 17.37 10.73L64 213.42l26.63 13.31a12 12 0 0 0 10.74 0L128 213.42l26.63 13.31a12 12 0 0 0 10.74 0L192 213.42l26.63 13.31A12 12 0 0 0 236 216V56a20 20 0 0 0-20-20m-4 160.58l-14.63-7.31a12 12 0 0 0-10.74 0L160 202.58l-26.63-13.31a12 12 0 0 0-10.74 0L96 202.58l-26.63-13.31a12 12 0 0 0-10.74 0L44 196.58V60h168ZM62.63 170.73a12 12 0 0 0 16.1-5.36l2.69-5.37h37.16l2.69 5.37a12 12 0 1 0 21.46-10.74l-32-64a12 12 0 0 0-21.46 0l-32 64a12 12 0 0 0 5.36 16.1M106.58 136H93.42l6.58-13.17Zm37.42-8a12 12 0 0 1 12-12h4v-4a12 12 0 0 1 24 0v4h4a12 12 0 0 1 0 24h-4v4a12 12 0 0 1-24 0v-4h-4a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhExamBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExamDuotoneIcon],svg[ph-exam-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v160l-32-16l-32 16l-32-16l-32 16l-32-16l-32 16V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v160a8 8 0 0 0 11.58 7.16L64 208.94l28.42 14.22a8 8 0 0 0 7.16 0L128 208.94l28.42 14.22a8 8 0 0 0 7.16 0L192 208.94l28.42 14.22A8 8 0 0 0 232 216V56a16 16 0 0 0-16-16m0 163.06l-20.42-10.22a8 8 0 0 0-7.16 0L160 207.06l-28.42-14.22a8 8 0 0 0-7.16 0L96 207.06l-28.42-14.22a8 8 0 0 0-7.16 0L40 203.06V56h176Zm-155.58-35.9a8 8 0 0 0 10.74-3.58L76.94 152h38.12l5.78 11.58a8 8 0 1 0 14.32-7.16l-32-64a8 8 0 0 0-14.32 0l-32 64a8 8 0 0 0 3.58 10.74M96 113.89L107.06 136H84.94ZM136 128a8 8 0 0 1 8-8h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhExamDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExamFillIcon],svg[ph-exam-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 113.89L107.06 136H84.94ZM232 56v160a8 8 0 0 1-11.58 7.16L192 208.94l-28.42 14.22a8 8 0 0 1-7.16 0L128 208.94l-28.42 14.22a8 8 0 0 1-7.16 0L64 208.94l-28.42 14.22A8 8 0 0 1 24 216V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-96.84 100.42l-32-64a8 8 0 0 0-14.32 0l-32 64a8 8 0 0 0 14.32 7.16L76.94 152h38.12l5.78 11.58a8 8 0 1 0 14.32-7.16M208 128a8 8 0 0 0-8-8h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhExamFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExamLightIcon],svg[ph-exam-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v160a6 6 0 0 0 8.68 5.37L64 206.71l29.32 14.66a6 6 0 0 0 5.36 0L128 206.71l29.32 14.66a6 6 0 0 0 5.36 0L192 206.71l29.32 14.66a6 6 0 0 0 2.68.63a5.93 5.93 0 0 0 3.15-.9A6 6 0 0 0 230 216V56a14 14 0 0 0-14-14m2 164.29l-23.32-11.66a6 6 0 0 0-5.36 0L160 209.29l-29.32-14.66a6 6 0 0 0-5.36 0L96 209.29l-29.32-14.66a6 6 0 0 0-5.36 0L38 206.29V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Zm-116.63-113a6 6 0 0 0-10.74 0l-32 64a6 6 0 1 0 10.74 5.36L75.71 150h40.58l6.34 12.68a6 6 0 1 0 10.74-5.36ZM81.71 138L96 109.42L110.29 138ZM198 128a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhExamLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExamThinIcon],svg[ph-exam-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v160a4 4 0 0 0 5.79 3.58L64 204.47l30.21 15.11a4 4 0 0 0 3.58 0L128 204.47l30.21 15.11a4 4 0 0 0 3.58 0L192 204.47l30.21 15.11a4.05 4.05 0 0 0 1.79.42a4 4 0 0 0 4-4V56a12 12 0 0 0-12-12m4 165.53l-26.21-13.11a4 4 0 0 0-3.58 0L160 211.53l-30.21-15.11a4 4 0 0 0-3.58 0L96 211.53l-30.21-15.11a4 4 0 0 0-3.58 0L36 209.53V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM99.58 94.21a4 4 0 0 0-7.16 0l-32 64a4 4 0 0 0 7.16 3.58L74.47 148h43.06l6.89 13.79A4 4 0 0 0 128 164a4.1 4.1 0 0 0 1.79-.42a4 4 0 0 0 1.79-5.37ZM78.47 140L96 104.94L113.53 140ZM196 128a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhExamThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExclamationMarkIcon],svg[ph-exclamation-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 200a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-16-40a8 8 0 0 0 8-8V48a8 8 0 0 0-16 0v104a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhExclamationMarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExclamationMarkBoldIcon],svg[ph-exclamation-mark-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 200a20 20 0 1 1-20-20a20 20 0 0 1 20 20m-20-40a12 12 0 0 0 12-12V48a12 12 0 0 0-24 0v100a12 12 0 0 0 12 12"></svg:path>`,
})
export class PhExclamationMarkBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExclamationMarkDuotoneIcon],svg[ph-exclamation-mark-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M144 200a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-16-40a8 8 0 0 0 8-8V48a8 8 0 0 0-16 0v104a8 8 0 0 0 8 8"></svg:path></svg:g>`,
})
export class PhExclamationMarkDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExclamationMarkFillIcon],svg[ph-exclamation-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-72 136a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-8-24V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0"></svg:path>`,
})
export class PhExclamationMarkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExclamationMarkLightIcon],svg[ph-exclamation-mark-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142 200a14 14 0 1 1-14-14a14 14 0 0 1 14 14m-14-42a6 6 0 0 0 6-6V48a6 6 0 0 0-12 0v104a6 6 0 0 0 6 6"></svg:path>`,
})
export class PhExclamationMarkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExclamationMarkThinIcon],svg[ph-exclamation-mark-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 200a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-12-44a4 4 0 0 0 4-4V48a4 4 0 0 0-8 0v104a4 4 0 0 0 4 4"></svg:path>`,
})
export class PhExclamationMarkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeIcon],svg[ph-exclude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174.63 81.37a80 80 0 1 0-93.26 93.26a80 80 0 1 0 93.26-93.26M224 160c0 1.52-.07 3-.18 4.51l-50-50A80 80 0 0 0 176 98a64.11 64.11 0 0 1 48 62m-13.47 39.21l-52.62-52.61a80.5 80.5 0 0 0 9.93-15.44L219.7 183a64 64 0 0 1-9.17 16.21M183 219.7l-51.86-51.86a80.5 80.5 0 0 0 15.44-9.93l52.61 52.62A64 64 0 0 1 183 219.7M45.47 56.79l52.62 52.61a80.5 80.5 0 0 0-9.93 15.44L36.3 73a64 64 0 0 1 9.17-16.21M73 36.3l51.86 51.86a80.5 80.5 0 0 0-15.44 9.93L56.79 45.47A64 64 0 0 1 73 36.3M160 96a64.07 64.07 0 0 1-64 64a64.07 64.07 0 0 1 64-64m-2-16a80 80 0 0 0-16.49 2.13l-50-50C93 32.07 94.48 32 96 32a64.11 64.11 0 0 1 62 48.05ZM32 96c0-1.52.07-3 .18-4.51l50 50A80 80 0 0 0 80.05 158A64.11 64.11 0 0 1 32 96m66 80a80 80 0 0 0 16.49-2.13l50 50c-1.49.11-3 .18-4.51.18A64.11 64.11 0 0 1 98 176"></svg:path>`,
})
export class PhExcludeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeBoldIcon],svg[ph-exclude-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178 78A84 84 0 1 0 78 178A84 84 0 1 0 178 78m42 82a61 61 0 0 1-.38 6.65l-44-44a83.3 83.3 0 0 0 4-19.34A60.09 60.09 0 0 1 220 160m-119.84-4.16a60.07 60.07 0 0 1 55.68-55.68a60.07 60.07 0 0 1-55.68 55.68m52.51-79.5a83.3 83.3 0 0 0-19.34 4l-44-44A61 61 0 0 1 96 36a60.09 60.09 0 0 1 56.67 40.34M64.19 45.16l46.73 46.73a85 85 0 0 0-19 19l-46.76-46.7a60.45 60.45 0 0 1 19.03-19.03M36 96a61 61 0 0 1 .38-6.65l44 44a83.3 83.3 0 0 0-4 19.34A60.09 60.09 0 0 1 36 96m67.33 83.66a83.3 83.3 0 0 0 19.34-4l44 44a61 61 0 0 1-6.67.34a60.09 60.09 0 0 1-56.67-40.34m88.48 31.18l-46.73-46.73a85 85 0 0 0 19-19l46.73 46.73a60.45 60.45 0 0 1-19 19"></svg:path>`,
})
export class PhExcludeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeDuotoneIcon],svg[ph-exclude-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 160a73 73 0 0 0 .4 7.6a72 72 0 1 1 79.2-79.2a73 73 0 0 0-7.6-.4a72 72 0 0 0-72 72m79.6-71.6a73 73 0 0 1 .4 7.6a72 72 0 0 1-72 72a73 73 0 0 1-7.6-.4a72 72 0 1 0 79.2-79.2" opacity=".2"></svg:path><svg:path d="M174.63 81.37a80 80 0 1 0-93.26 93.26a80 80 0 1 0 93.26-93.26M32 96a64 64 0 0 1 126-16a80.08 80.08 0 0 0-77.95 78A64.11 64.11 0 0 1 32 96m128 0a64.07 64.07 0 0 1-64 64a64.07 64.07 0 0 1 64-64m0 128a64.11 64.11 0 0 1-62-48a80.08 80.08 0 0 0 78-78a64 64 0 0 1-16 126"></svg:path></svg:g>`,
})
export class PhExcludeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeFillIcon],svg[ph-exclude-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 160a80 80 0 0 1-158.64 14.64a80 80 0 0 0 93.28-93.28A80 80 0 0 1 240 160m-80-80a80.3 80.3 0 0 1 14.64 1.36a80 80 0 1 0-93.28 93.28A80 80 0 0 1 160 80"></svg:path>`,
})
export class PhExcludeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeLightIcon],svg[ph-exclude-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.91 83.09a78 78 0 1 0-89.82 89.82a78 78 0 1 0 89.82-89.82M226 160a65 65 0 0 1-.62 8.9l-53.76-53.77A77.8 77.8 0 0 0 174 96v-.49A66.1 66.1 0 0 1 226 160M45.31 53.79l55.5 55.5a77.9 77.9 0 0 0-12 19L34 73.48a66 66 0 0 1 11.31-19.69M73.48 34l54.8 54.81a77.9 77.9 0 0 0-19 12l-55.5-55.5A66 66 0 0 1 73.48 34M94 160a66.08 66.08 0 0 1 66-66h1.95c0 .65.05 1.3.05 2a66.08 66.08 0 0 1-66 66c-.65 0-1.3 0-2-.05zm52.71-4.81l55.5 55.5A66 66 0 0 1 182.52 222l-54.8-54.81a77.9 77.9 0 0 0 18.99-12m8.48-8.48a77.9 77.9 0 0 0 12-19L222 182.52a66 66 0 0 1-11.35 19.69Zm5.3-64.7H160a77.8 77.8 0 0 0-19.13 2.38L87.1 30.62A65 65 0 0 1 96 30a66.1 66.1 0 0 1 64.49 52ZM30 96a65 65 0 0 1 .62-8.9l53.76 53.77A77.8 77.8 0 0 0 82 160v.49A66.1 66.1 0 0 1 30 96m65.51 78H96a77.8 77.8 0 0 0 19.13-2.38l53.77 53.76a65 65 0 0 1-8.9.62a66.1 66.1 0 0 1-64.49-52"></svg:path>`,
})
export class PhExcludeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeSquareIcon],svg[ph-exclude-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 160V96a8 8 0 0 0-8-8h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8zm-60.69 48l-40-40h33.38l40 40ZM48 59.31l40 40v33.38l-40-40ZM92.69 48l40 40H99.31l-40-40ZM104 152v-48h48v48Zm64 4.69v-33.38l40 40v33.38Zm40-16L171.31 104H208Zm-56-56L115.31 48H152ZM48 115.31L84.69 152H48Zm56 56L140.69 208H104Z"></svg:path>`,
})
export class PhExcludeSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeSquareBoldIcon],svg[ph-exclude-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 160V96a12 12 0 0 0-12-12h-44V40a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h44v44a12 12 0 0 0 12 12h120a12 12 0 0 0 12-12zm-63 44l-32-32h22l32 32ZM52 69l32 32v22L52 91Zm39-17l32 32h-22L69 52Zm17 96v-40h40v40Zm64 7v-22l32 32v22Zm32-24l-23-23h23Zm-56-56l-23-23h23Zm-96 50l23 23H52Zm56 56l23 23h-23Z"></svg:path>`,
})
export class PhExcludeSquareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeSquareDuotoneIcon],svg[ph-exclude-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M96 96v64H40V40h120v56Zm64 0v64H96v56h120V96Z" opacity=".2"></svg:path><svg:path d="M216 88h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8M48 152V48h104v40H96a8 8 0 0 0-8 8v56Zm104-48v48h-48v-48Zm56 104H104v-40h56a8 8 0 0 0 8-8v-56h40Z"></svg:path></svg:g>`,
})
export class PhExcludeSquareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeSquareFillIcon],svg[ph-exclude-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 88v80H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h120a8 8 0 0 1 8 8v48Zm128 0h-48v80H88v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhExcludeSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeSquareLightIcon],svg[ph-exclude-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 90h-50V40a6 6 0 0 0-6-6H40a6 6 0 0 0-6 6v120a6 6 0 0 0 6 6h50v50a6 6 0 0 0 6 6h120a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6m-53.52 120l-44-44h39l44 44ZM46 54.48l44 44v39l-44-44ZM93.52 46l44 44h-39l-44-44ZM102 154v-52h52v52Zm64 3.52v-39l44 44v39Zm44-12L166.48 102H210Zm-56-56L110.48 46H154Zm-108 21L89.52 154H46Zm56 56L145.52 210H102Z"></svg:path>`,
})
export class PhExcludeSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeSquareThinIcon],svg[ph-exclude-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 92h-52V40a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v120a4 4 0 0 0 4 4h52v52a4 4 0 0 0 4 4h120a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4m-54.34 120l-48-48h44.68l48 48ZM44 49.66l48 48v44.68l-48-48ZM94.34 44l48 48H97.66l-48-48ZM100 156v-56h56v56Zm64 2.34v-44.68l48 48v44.68ZM212 100v50.34l-48-48V100Zm-56-8h-2.34l-48-48H156ZM44 156v-50.34l48 48V156Zm56 8h2.34l48 48H100Z"></svg:path>`,
})
export class PhExcludeSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeThinIcon],svg[ph-exclude-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171.17 84.83a76 76 0 1 0-86.34 86.34a76 76 0 1 0 86.34-86.34M228 160a68.6 68.6 0 0 1-1.27 13.07l-57.34-57.34A76 76 0 0 0 172 96c0-1 0-2-.07-2.93A68.1 68.1 0 0 1 228 160m-17.2 45.14l-58.34-58.33a76.4 76.4 0 0 0 14.09-22.6L224.33 182a68.1 68.1 0 0 1-13.53 23.14M182 224.33l-57.78-57.78a76.4 76.4 0 0 0 22.6-14.09l58.33 58.34A68.1 68.1 0 0 1 182 224.33M45.2 50.86l58.34 58.33a76.4 76.4 0 0 0-14.09 22.6L31.67 74A68.1 68.1 0 0 1 45.2 50.86M74 31.67l57.78 57.78a76.4 76.4 0 0 0-22.6 14.09L50.86 45.2A68.1 68.1 0 0 1 74 31.67M92 160a68.07 68.07 0 0 1 68-68c1.3 0 2.6 0 3.88.12c.12 1.28.12 2.58.12 3.88a68.07 68.07 0 0 1-68 68c-1.3 0-2.6-.05-3.88-.12c-.07-1.28-.12-2.58-.12-3.88m70.93-75.93c-1 0-2-.07-2.93-.07a76 76 0 0 0-19.73 2.61L82.93 29.27a68 68 0 0 1 80 54.8M28 96a68.6 68.6 0 0 1 1.27-13.07l57.34 57.34A76 76 0 0 0 84 160c0 1 0 2 .07 2.93A68.1 68.1 0 0 1 28 96m65.07 75.93c1 0 2 .07 2.93.07a76 76 0 0 0 19.73-2.61l57.34 57.34a68 68 0 0 1-80-54.8"></svg:path>`,
})
export class PhExcludeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExportIcon],svg[ph-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 112v96a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16v-96a16 16 0 0 1 16-16h24a8 8 0 0 1 0 16H56v96h144v-96h-24a8 8 0 0 1 0-16h24a16 16 0 0 1 16 16M93.66 69.66L120 43.31V136a8 8 0 0 0 16 0V43.31l26.34 26.35a8 8 0 0 0 11.32-11.32l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 11.32 11.32"></svg:path>`,
})
export class PhExportIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExportBoldIcon],svg[ph-export-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 112v96a20 20 0 0 1-20 20H56a20 20 0 0 1-20-20v-96a20 20 0 0 1 20-20h20a12 12 0 0 1 0 24H60v88h136v-88h-16a12 12 0 0 1 0-24h20a20 20 0 0 1 20 20M96.49 72.49L116 53v83a12 12 0 0 0 24 0V53l19.51 19.52a12 12 0 1 0 17-17l-40-40a12 12 0 0 0-17 0l-40 40a12 12 0 1 0 17 17Z"></svg:path>`,
})
export class PhExportBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExportDuotoneIcon],svg[ph-export-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104v112H48V104Z" opacity=".2"></svg:path><svg:path d="M216 112v96a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16v-96a16 16 0 0 1 16-16h24a8 8 0 0 1 0 16H56v96h144v-96h-24a8 8 0 0 1 0-16h24a16 16 0 0 1 16 16M93.66 69.66L120 43.31V136a8 8 0 0 0 16 0V43.31l26.34 26.35a8 8 0 0 0 11.32-11.32l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 11.32 11.32"></svg:path></svg:g>`,
})
export class PhExportDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExportFillIcon],svg[ph-export-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 112v96a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16v-96a16 16 0 0 1 16-16h64v48a8 8 0 0 0 16 0V96h64a16 16 0 0 1 16 16m-80-68.69l26.34 26.35a8 8 0 0 0 11.32-11.32l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 11.32 11.32L120 43.31V96h16Z"></svg:path>`,
})
export class PhExportFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExportLightIcon],svg[ph-export-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 112v96a14 14 0 0 1-14 14H56a14 14 0 0 1-14-14v-96a14 14 0 0 1 14-14h24a6 6 0 0 1 0 12H56a2 2 0 0 0-2 2v96a2 2 0 0 0 2 2h144a2 2 0 0 0 2-2v-96a2 2 0 0 0-2-2h-24a6 6 0 0 1 0-12h24a14 14 0 0 1 14 14M92.24 68.24L122 38.49V136a6 6 0 0 0 12 0V38.49l29.76 29.75a6 6 0 1 0 8.48-8.48l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 1 0 8.48 8.48"></svg:path>`,
})
export class PhExportLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExportThinIcon],svg[ph-export-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 112v96a12 12 0 0 1-12 12H56a12 12 0 0 1-12-12v-96a12 12 0 0 1 12-12h24a4 4 0 0 1 0 8H56a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h144a4 4 0 0 0 4-4v-96a4 4 0 0 0-4-4h-24a4 4 0 0 1 0-8h24a12 12 0 0 1 12 12M90.83 66.83L124 33.66V136a4 4 0 0 0 8 0V33.66l33.17 33.17a4 4 0 1 0 5.66-5.66l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 5.66 5.66"></svg:path>`,
})
export class PhExportThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeIcon],svg[ph-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class PhEyeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeBoldIcon],svg[ph-eye-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M251 123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63 57.67 164 44 128 44S59.37 57.67 33.51 83.52C14.16 102.87 5.4 122.32 5 123.13a12.08 12.08 0 0 0 0 9.75c.37.82 9.13 20.26 28.49 39.61C59.37 198.34 92 212 128 212s68.63-13.66 94.48-39.51c19.36-19.35 28.12-38.79 28.49-39.61a12.08 12.08 0 0 0 .03-9.75m-46.06 33C183.47 177.27 157.59 188 128 188s-55.47-10.73-76.91-31.88A130.4 130.4 0 0 1 29.52 128a130.5 130.5 0 0 1 21.57-28.11C72.54 78.73 98.41 68 128 68s55.46 10.73 76.91 31.89A130.4 130.4 0 0 1 226.48 128a130.5 130.5 0 0 1-21.57 28.12ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhEyeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeClosedIcon],svg[ph-eye-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 175a8 8 0 0 1-10.92-3l-19-33.2A123.2 123.2 0 0 1 162 155.46l5.87 35.22a8 8 0 0 1-6.58 9.21a8.4 8.4 0 0 1-1.29.11a8 8 0 0 1-7.88-6.69l-5.77-34.58a133 133 0 0 1-36.68 0l-5.77 34.58A8 8 0 0 1 96 200a8.4 8.4 0 0 1-1.32-.11a8 8 0 0 1-6.58-9.21l5.9-35.22a123.2 123.2 0 0 1-36.06-16.69L39 172a8 8 0 1 1-13.94-8l20-35a153.5 153.5 0 0 1-19.3-20a8 8 0 1 1 12.46-10c16.6 20.54 45.64 45 89.78 45s73.18-24.49 89.78-45a8 8 0 1 1 12.44 10a153.5 153.5 0 0 1-19.3 20l20 35a8 8 0 0 1-2.92 11"></svg:path>`,
})
export class PhEyeClosedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeClosedBoldIcon],svg[ph-eye-closed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.42 162a12 12 0 1 1-20.84 12l-16.86-29.5a127.2 127.2 0 0 1-30.17 13.86l5.29 31.64a12 12 0 0 1-9.87 13.8a11 11 0 0 1-2 .17a12 12 0 0 1-11.82-10l-5.15-30.8a136.5 136.5 0 0 1-30.06 0l-5.1 30.83A12 12 0 0 1 96 204a11 11 0 0 1-2-.17A12 12 0 0 1 84.16 190l5.29-31.72a127.2 127.2 0 0 1-30.17-13.86L42.42 174a12 12 0 1 1-20.84-12L40 129.85a160 160 0 0 1-17.31-18.31a12 12 0 0 1 18.65-15.08C57.38 116.32 85.44 140 128 140s70.62-23.68 86.66-43.54a12 12 0 0 1 18.67 15.08A160 160 0 0 1 216 129.85Z"></svg:path>`,
})
export class PhEyeClosedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeClosedDuotoneIcon],svg[ph-eye-closed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 104c-16.81 20.81-47.63 48-96 48s-79.19-27.19-96-48c16.81-20.81 47.63-48 96-48s79.19 27.19 96 48" opacity=".2"></svg:path><svg:path d="M228 175a8 8 0 0 1-10.92-3l-19-33.2A123.2 123.2 0 0 1 162 155.46l5.87 35.22a8 8 0 0 1-6.58 9.21a8.4 8.4 0 0 1-1.29.11a8 8 0 0 1-7.88-6.69l-5.77-34.58a133 133 0 0 1-36.68 0l-5.77 34.58A8 8 0 0 1 96 200a8.4 8.4 0 0 1-1.32-.11a8 8 0 0 1-6.58-9.21l5.9-35.22a123.2 123.2 0 0 1-36.06-16.69L39 172a8 8 0 1 1-13.94-8l20-35a153.5 153.5 0 0 1-19.3-20a8 8 0 1 1 12.46-10c16.6 20.54 45.64 45 89.78 45s73.18-24.49 89.78-45a8 8 0 1 1 12.44 10a153.5 153.5 0 0 1-19.3 20l20 35a8 8 0 0 1-2.92 11"></svg:path></svg:g>`,
})
export class PhEyeClosedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeClosedFillIcon],svg[ph-eye-closed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.94 164a8 8 0 1 1-13.89 8l-19-33.2A123.2 123.2 0 0 1 162 155.46l5.87 35.22a8 8 0 0 1-6.58 9.21a8.4 8.4 0 0 1-1.29.11a8 8 0 0 1-7.88-6.69l-5.77-34.58a133 133 0 0 1-36.68 0l-5.77 34.58A8 8 0 0 1 96 200a8.4 8.4 0 0 1-1.32-.11a8 8 0 0 1-6.58-9.21l5.9-35.22a123.2 123.2 0 0 1-36.06-16.69L39 172a8 8 0 1 1-13.94-8l20-35a153 153 0 0 1-19.3-20a8 8 0 0 1 0-10.06C44.56 75.72 77.55 48 128 48s83.44 27.72 102.22 51a8 8 0 0 1 0 10.06a153 153 0 0 1-19.3 20Z"></svg:path>`,
})
export class PhEyeClosedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeClosedLightIcon],svg[ph-eye-closed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.21 165a6 6 0 0 1-10.42 6l-20-35.08a122 122 0 0 1-39 18.09l6.17 37a6 6 0 0 1-4.93 6.91a7 7 0 0 1-1 .08a6 6 0 0 1-5.91-5L148 156.44a128.9 128.9 0 0 1-40 0L101.92 193a6 6 0 0 1-5.92 5a7 7 0 0 1-1-.08a6 6 0 0 1-4.92-6.92l6.17-37a122 122 0 0 1-39-18.09L37.21 171a6 6 0 1 1-10.42-6l20.85-36.48a152 152 0 0 1-20.31-20.77a6 6 0 0 1 9.34-7.54C53.54 121.11 83.07 146 128 146s74.46-24.89 91.33-45.77a6 6 0 0 1 9.34 7.54a152 152 0 0 1-20.31 20.77Z"></svg:path>`,
})
export class PhEyeClosedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeClosedThinIcon],svg[ph-eye-closed-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226 171.47a3.9 3.9 0 0 1-2 .53a4 4 0 0 1-3.47-2l-21.15-37a120 120 0 0 1-41.91 19.53l6.53 38.81a4 4 0 0 1-3.29 4.6a4 4 0 0 1-.67.06a4 4 0 0 1-3.94-3.34l-6.41-38.5a128.2 128.2 0 0 1-43.28 0l-6.41 38.5a4 4 0 0 1-4 3.34a4 4 0 0 1-.67-.06a4 4 0 0 1-3.29-4.6l6.48-38.83A120 120 0 0 1 56.62 133l-21.15 37a4 4 0 0 1-3.47 2a3.9 3.9 0 0 1-2-.53a4 4 0 0 1-1.47-5.47l21.68-37.94a148.2 148.2 0 0 1-21.32-21.56a4 4 0 1 1 6.22-5C52.25 122.71 82.29 148 128 148s75.75-25.29 92.89-46.51a4 4 0 1 1 6.22 5a148.2 148.2 0 0 1-21.32 21.56L227.47 166a4 4 0 0 1-1.47 5.47"></svg:path>`,
})
export class PhEyeClosedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeDuotoneIcon],svg[ph-eye-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 56c-80 0-112 72-112 72s32 72 112 72s112-72 112-72s-32-72-112-72m0 112a40 40 0 1 1 40-40a40 40 0 0 1-40 40" opacity=".2"></svg:path><svg:path d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path></svg:g>`,
})
export class PhEyeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeFillIcon],svg[ph-eye-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhEyeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeLightIcon],svg[ph-eye-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.48 125.57c-.34-.78-8.66-19.23-27.24-37.81C201 70.54 171.38 50 128 50S55 70.54 37.76 87.76c-18.58 18.58-26.9 37-27.24 37.81a6 6 0 0 0 0 4.88c.34.77 8.66 19.22 27.24 37.8C55 185.47 84.62 206 128 206s73-20.53 90.24-37.75c18.58-18.58 26.9-37 27.24-37.8a6 6 0 0 0 0-4.88M128 194c-31.38 0-58.78-11.42-81.45-33.93A134.8 134.8 0 0 1 22.69 128a134.6 134.6 0 0 1 23.86-32.06C69.22 73.42 96.62 62 128 62s58.78 11.42 81.45 33.94A134.6 134.6 0 0 1 233.31 128C226.94 140.21 195 194 128 194m0-112a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34"></svg:path>`,
})
export class PhEyeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeSlashIcon],svg[ph-eye-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62a8 8 0 1 0-11.84 10.76l19.24 21.17C25 88.84 9.38 123.2 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208a127.1 127.1 0 0 0 52.07-10.83l22 24.21a8 8 0 1 0 11.84-10.76Zm47.33 75.84l41.67 45.85a32 32 0 0 1-41.67-45.85M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.2 133.2 0 0 1 25 128c4.69-8.79 19.66-33.39 47.35-49.38l18 19.75a48 48 0 0 0 63.66 70l14.73 16.2A112 112 0 0 1 128 192m6-95.43a8 8 0 0 1 3-15.72a48.16 48.16 0 0 1 38.77 42.64a8 8 0 0 1-7.22 8.71a6 6 0 0 1-.75 0a8 8 0 0 1-8-7.26A32.09 32.09 0 0 0 134 96.57m113.28 34.69c-.42.94-10.55 23.37-33.36 43.8a8 8 0 1 1-10.67-11.92a132.8 132.8 0 0 0 27.8-35.14a133.2 133.2 0 0 0-23.12-30.77C185.67 75.19 158.78 64 128 64a118.4 118.4 0 0 0-19.36 1.57A8 8 0 1 1 106 49.79A134 134 0 0 1 128 48c34.88 0 66.57 13.26 91.66 38.35c18.83 18.83 27.3 37.62 27.65 38.41a8 8 0 0 1 0 6.5Z"></svg:path>`,
})
export class PhEyeSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeSlashBoldIcon],svg[ph-eye-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93a12 12 0 1 0-17.76 16.14l16 17.65C20.67 88.66 5.72 121.58 5 123.13a12.08 12.08 0 0 0 0 9.75c.37.82 9.13 20.26 28.49 39.61C59.37 198.34 92 212 128 212a131.3 131.3 0 0 0 51-10l20.09 22.1a12 12 0 0 0 17.76-16.14ZM128 188c-29.59 0-55.47-10.73-76.91-31.88A130.7 130.7 0 0 1 29.52 128c5.27-9.31 18.79-29.9 42-44.29l90.09 99.11A109.3 109.3 0 0 1 128 188m123-55.12c-.36.81-9 20-28 39.16a12 12 0 1 1-17-16.9A130.5 130.5 0 0 0 226.48 128a130.4 130.4 0 0 0-21.57-28.12C183.46 78.73 157.59 68 128 68c-3.35 0-6.7.14-10 .42a12 12 0 1 1-2-23.91c3.93-.34 8-.51 12-.51c36 0 68.63 13.67 94.49 39.52c19.35 19.35 28.11 38.8 28.48 39.61a12.08 12.08 0 0 1 .03 9.75"></svg:path>`,
})
export class PhEyeSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeSlashDuotoneIcon],svg[ph-eye-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 56c-80 0-112 72-112 72s32 72 112 72s112-72 112-72s-32-72-112-72m0 112a40 40 0 1 1 40-40a40 40 0 0 1-40 40" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l19.24 21.17C25 88.84 9.38 123.2 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208a127.1 127.1 0 0 0 52.07-10.83l22 24.21a8 8 0 1 0 11.84-10.76Zm47.33 75.84l41.67 45.85a32 32 0 0 1-41.67-45.85M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.2 133.2 0 0 1 25 128c4.69-8.79 19.66-33.39 47.35-49.38l18 19.75a48 48 0 0 0 63.66 70l14.73 16.2A112 112 0 0 1 128 192m6-95.43a8 8 0 0 1 3-15.72a48.16 48.16 0 0 1 38.77 42.64a8 8 0 0 1-7.22 8.71a6 6 0 0 1-.75 0a8 8 0 0 1-8-7.26A32.09 32.09 0 0 0 134 96.57m113.28 34.69c-.42.94-10.55 23.37-33.36 43.8a8 8 0 1 1-10.67-11.92a132.8 132.8 0 0 0 27.8-35.14a133.2 133.2 0 0 0-23.12-30.77C185.67 75.19 158.78 64 128 64a118.4 118.4 0 0 0-19.36 1.57A8 8 0 1 1 106 49.79A134 134 0 0 1 128 48c34.88 0 66.57 13.26 91.66 38.35c18.83 18.83 27.3 37.62 27.65 38.41a8 8 0 0 1 0 6.5Z"></svg:path></svg:g>`,
})
export class PhEyeSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeSlashFillIcon],svg[ph-eye-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96.68 57.87a4 4 0 0 1 2.08-6.6A130 130 0 0 1 128 48c34.88 0 66.57 13.26 91.66 38.35c18.83 18.83 27.3 37.62 27.65 38.41a8 8 0 0 1 0 6.5c-.35.79-8.82 19.57-27.65 38.4q-4.28 4.26-8.79 8.07a4 4 0 0 1-5.55-.36Zm117.24 152.75a8 8 0 1 1-11.84 10.76L180 197.13A127.2 127.2 0 0 1 128 208c-34.88 0-66.57-13.26-91.66-38.34C17.51 150.83 9 132.05 8.69 131.26a8 8 0 0 1 0-6.5c.31-.76 8.82-19.58 27.65-38.41a135 135 0 0 1 25-19.78L42.08 45.38a8 8 0 1 1 11.84-10.76Zm-65.49-48.25l-52.69-58a40 40 0 0 0 52.69 58"></svg:path>`,
})
export class PhEyeSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeSlashLightIcon],svg[ph-eye-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l20.88 23c-37.28 21.9-53.23 57-53.92 58.57a6 6 0 0 0 0 4.88c.34.77 8.66 19.22 27.24 37.8C55 185.47 84.62 206 128 206a124.9 124.9 0 0 0 52.57-11.25l23 25.29a6 6 0 0 0 8.88-8.08Zm48.62 71.32l45 49.52a34 34 0 0 1-45-49.52M128 194c-31.38 0-58.78-11.42-81.45-33.93A134.6 134.6 0 0 1 22.69 128c4.29-8.2 20.1-35.18 50-51.91l20.2 22.21a46 46 0 0 0 61.35 67.48l17.81 19.6A113.5 113.5 0 0 1 128 194m6.4-99.4a6 6 0 0 1 2.25-11.79a46.17 46.17 0 0 1 37.15 40.87a6 6 0 0 1-5.42 6.53h-.56a6 6 0 0 1-6-5.45A34.1 34.1 0 0 0 134.4 94.6m111.08 35.85c-.41.92-10.37 23-32.86 43.12a6 6 0 1 1-8-8.94A134.1 134.1 0 0 0 233.31 128a134.7 134.7 0 0 0-23.86-32.07C186.78 73.42 159.38 62 128 62a120 120 0 0 0-19.69 1.6a6 6 0 1 1-2-11.83A131 131 0 0 1 128 50c43.38 0 73 20.54 90.24 37.76c18.58 18.58 26.9 37 27.24 37.81a6 6 0 0 1 0 4.88"></svg:path>`,
})
export class PhEyeSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeSlashThinIcon],svg[ph-eye-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38L67.59 67.5C29.34 89 13 124.81 12.34 126.38a4.08 4.08 0 0 0 0 3.25c.34.77 8.52 18.89 26.83 37.2c17 17 46.14 37.17 88.83 37.17a122.6 122.6 0 0 0 53.06-11.69l24 26.38a4 4 0 1 0 5.92-5.38Zm98.1 119.85a36 36 0 0 1-48.1-52.94ZM128 196c-32 0-59.89-11.65-83-34.62A135.8 135.8 0 0 1 20.44 128c3.65-7.23 20.09-36.81 52.68-54.43l22.45 24.7a44 44 0 0 0 59 64.83l20.89 23A114.9 114.9 0 0 1 128 196m6.78-103.36a4 4 0 0 1 1.49-7.86a44.15 44.15 0 0 1 35.54 39.09a4 4 0 0 1-3.61 4.35h-.38a4 4 0 0 1-4-3.63a36.1 36.1 0 0 0-29.04-31.95m108.88 37c-.41.91-10.2 22.58-32.38 42.45a4 4 0 0 1-2.67 1a4 4 0 0 1-2.67-7A136.7 136.7 0 0 0 235.56 128A136 136 0 0 0 211 94.62C187.89 71.65 160 60 128 60a122 122 0 0 0-20 1.63a4 4 0 0 1-1.32-7.89A129.3 129.3 0 0 1 128 52c42.7 0 71.87 20.22 88.83 37.18c18.31 18.31 26.49 36.44 26.83 37.2a4.08 4.08 0 0 1 0 3.25Z"></svg:path>`,
})
export class PhEyeSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeThinIcon],svg[ph-eye-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.66 126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87 72.22 170.7 52 128 52S56.13 72.22 39.17 89.18c-18.31 18.31-26.49 36.44-26.83 37.2a4.08 4.08 0 0 0 0 3.25c.34.77 8.52 18.89 26.83 37.2c17 17 46.14 37.17 88.83 37.17s71.87-20.21 88.83-37.17c18.31-18.31 26.49-36.43 26.83-37.2a4.08 4.08 0 0 0 0-3.25m-32.7 35c-23.07 23-51 34.62-83 34.62s-59.89-11.65-83-34.62A135.7 135.7 0 0 1 20.44 128A135.7 135.7 0 0 1 45 94.62C68.11 71.65 96 60 128 60s59.89 11.65 83 34.62A135.8 135.8 0 0 1 235.56 128A135.7 135.7 0 0 1 211 161.38ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhEyeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperIcon],svg[ph-eyedropper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 67.3a35.8 35.8 0 0 0-11.26-25.66c-14-13.28-36.72-12.78-50.62 1.13L142.8 62.2a24 24 0 0 0-33.14.77l-9 9a16 16 0 0 0 0 22.64l2 2.06l-51 51a39.75 39.75 0 0 0-10.53 38l-8 18.41A13.68 13.68 0 0 0 36 219.3a15.92 15.92 0 0 0 17.71 3.35L71.23 215a39.89 39.89 0 0 0 37.06-10.75l51-51l2.06 2.06a16 16 0 0 0 22.62 0l9-9a24 24 0 0 0 .74-33.18l19.75-19.87A35.75 35.75 0 0 0 224 67.3M97 193a24 24 0 0 1-24 6a8 8 0 0 0-5.55.31l-18.1 7.91L57 189.41a8 8 0 0 0 .25-5.75A23.88 23.88 0 0 1 63 159l51-51l33.94 34ZM202.13 82l-25.37 25.52a8 8 0 0 0 0 11.3l4.89 4.89a8 8 0 0 1 0 11.32l-9 9L112 83.26l9-9a8 8 0 0 1 11.31 0l4.89 4.89a8 8 0 0 0 11.33 0l24.94-25.09c7.81-7.82 20.5-8.18 28.29-.81a20 20 0 0 1 .39 28.7Z"></svg:path>`,
})
export class PhEyedropperIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperBoldIcon],svg[ph-eyedropper-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 67.24a39.77 39.77 0 0 0-12.51-28.52c-15.58-14.72-40.78-14.22-56.2 1.21l-16.81 16.91a28 28 0 0 0-35.64 3.29l-9 9a20 20 0 0 0-.73 27.49L48.9 144.84A43.76 43.76 0 0 0 37 185.28l-7.5 17.19a17.66 17.66 0 0 0 3.71 19.65a19.9 19.9 0 0 0 22.15 4.19l16.31-7.13a43.88 43.88 0 0 0 39.45-12.09l48.24-48.26a20 20 0 0 0 27.47-.73l9-9a28.06 28.06 0 0 0 3.26-35.72l17.23-17.33A39.7 39.7 0 0 0 228 67.24M94.15 190.11a20 20 0 0 1-20 5a11.93 11.93 0 0 0-8.32.47l-8.83 3.8l3.69-8.38a12 12 0 0 0 .37-8.64a19.92 19.92 0 0 1 4.81-20.55l48.2-48.22l28.28 28.3Zm105.14-111l-25.37 25.52a12 12 0 0 0 0 16.95l4.88 4.89a4 4 0 0 1 0 5.66l-6.14 6.15l-55-55.05l6.14-6.14a4 4 0 0 1 5.65 0l4.9 4.91a12 12 0 0 0 8.49 3.51a12 12 0 0 0 8.5-3.51l24.94-25.08c6.3-6.3 16.48-6.63 22.71-.74a16 16 0 0 1 .3 23Z"></svg:path>`,
})
export class PhEyedropperBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperDuotoneIcon],svg[ph-eyedropper-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m207.8 87.6l-25.37 25.53l4.89 4.88a16 16 0 0 1 0 22.64l-9 9a8 8 0 0 1-11.32 0l-60.68-60.7a8 8 0 0 1 0-11.32l9-9a16 16 0 0 1 22.63 0l4.88 4.89l25-25.11c10.79-10.79 28.37-11.45 39.45-1a28 28 0 0 1 .52 40.19" opacity=".2"></svg:path><svg:path d="M224 67.3a35.8 35.8 0 0 0-11.26-25.66c-14-13.28-36.72-12.78-50.62 1.13L142.8 62.2a24 24 0 0 0-33.14.77l-9 9a16 16 0 0 0 0 22.64l2 2.06l-51 51a39.75 39.75 0 0 0-10.53 38l-8 18.41A13.68 13.68 0 0 0 36 219.3a15.92 15.92 0 0 0 17.71 3.35L71.23 215a39.89 39.89 0 0 0 37.06-10.75l51-51l2.06 2.06a16 16 0 0 0 22.62 0l9-9a24 24 0 0 0 .74-33.18l19.75-19.87A35.75 35.75 0 0 0 224 67.3M97 193a24 24 0 0 1-24 6a8 8 0 0 0-5.55.31l-18.1 7.91L57 189.41a8 8 0 0 0 .25-5.75A23.88 23.88 0 0 1 63 159l51-51l33.94 34ZM202.13 82l-25.37 25.52a8 8 0 0 0 0 11.3l4.89 4.89a8 8 0 0 1 0 11.32l-9 9L112 83.26l9-9a8 8 0 0 1 11.31 0l4.89 4.89a8 8 0 0 0 5.65 2.34a8 8 0 0 0 5.66-2.36l24.94-25.09c7.81-7.82 20.5-8.18 28.29-.81a20 20 0 0 1 .39 28.7Z"></svg:path></svg:g>`,
})
export class PhEyedropperDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperFillIcon],svg[ph-eyedropper-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 67.3a35.8 35.8 0 0 0-11.26-25.66c-14-13.28-36.72-12.78-50.62 1.13L138.8 66.2a24 24 0 0 0-33.14.77l-5 5a16 16 0 0 0 0 22.64l2 2.06l-51 51a39.75 39.75 0 0 0-10.53 38l-8 18.41A13.68 13.68 0 0 0 36 219.3a15.92 15.92 0 0 0 17.71 3.35L71.23 215a39.89 39.89 0 0 0 37.06-10.75l51-51l2.06 2.06a16 16 0 0 0 22.62 0l5-5a24 24 0 0 0 .74-33.18l23.75-23.87A35.75 35.75 0 0 0 224 67.3M97 193a24 24 0 0 1-24 6a8 8 0 0 0-5.55.31l-18.1 7.91L57 189.41a8 8 0 0 0 .25-5.75A23.88 23.88 0 0 1 63 159l51-51l33.94 34Z"></svg:path>`,
})
export class PhEyedropperFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperLightIcon],svg[ph-eyedropper-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 67.34a33.8 33.8 0 0 0-10.64-24.25c-13.24-12.53-34.68-12.09-47.82 1.09L142.82 65l-.63-.63a22 22 0 0 0-31.11 0l-9 9a14 14 0 0 0 0 19.81l3.47 3.47l-52.41 52.45a37.79 37.79 0 0 0-9.84 36.73l-8.31 19a11.68 11.68 0 0 0 2.46 13a13.9 13.9 0 0 0 9.87 4.17a14.15 14.15 0 0 0 5.68-1.18l18-7.9a37.92 37.92 0 0 0 35.84-10.07l52.44-52.46l3.47 3.48a14 14 0 0 0 19.8 0l9-9a22 22 0 0 0 0-31.12l-.66-.66L212 91.85a33.76 33.76 0 0 0 10-24.51m-123.61 127a26 26 0 0 1-26 6.47a6 6 0 0 0-4.16.24l-20 8.75a2 2 0 0 1-2.09-.31l9.12-20.9a5.94 5.94 0 0 0 .19-4.31a25.88 25.88 0 0 1 6.26-26.72l52.44-52.45l36.76 36.78Zm105.16-111l-25.38 25.56a6 6 0 0 0 0 8.47l4.88 4.89a10 10 0 0 1 0 14.15l-9 9a2 2 0 0 1-2.82 0l-60.69-60.7a2 2 0 0 1 0-2.83l9-9a10 10 0 0 1 14.14 0l4.89 4.89a6 6 0 0 0 4.24 1.75a6 6 0 0 0 4.25-1.77L172 52.66c8.58-8.58 22.52-9 31.08-.85a22 22 0 0 1 .44 31.57Z"></svg:path>`,
})
export class PhEyedropperLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperSampleIcon],svg[ph-eyedropper-sample-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 67.3a35.8 35.8 0 0 0-11.26-25.66c-14-13.28-36.72-12.78-50.62 1.13L142.8 62.2a24 24 0 0 0-33.14.77l-9 9a16 16 0 0 0 0 22.64l2 2.06l-51 51a39.75 39.75 0 0 0-10.53 38l-8 18.41A13.65 13.65 0 0 0 36 219.29a15.9 15.9 0 0 0 17.71 3.36L71.24 215a39.9 39.9 0 0 0 37.05-10.75l51-51l2.06 2.06a16 16 0 0 0 22.62 0l9-9a24 24 0 0 0 .74-33.18l19.75-19.87A35.75 35.75 0 0 0 224 67.3M97 193a24 24 0 0 1-24 6a8 8 0 0 0-5.55.31l-18.1 7.9l7.65-17.8a8 8 0 0 0 .25-5.75a24 24 0 0 1 .1-15.69H122Zm41-41H70.07l44-44l33.94 34Zm64.18-70l-25.37 25.52a8 8 0 0 0 0 11.31l4.89 4.88a8 8 0 0 1 0 11.32l-9 9L112 83.26l9-9a8 8 0 0 1 11.31 0l4.89 4.89a8 8 0 0 0 5.65 2.34a8 8 0 0 0 5.66-2.36l24.94-25.09c7.81-7.82 20.5-8.18 28.29-.81a20 20 0 0 1 .39 28.7Z"></svg:path>`,
})
export class PhEyedropperSampleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperSampleBoldIcon],svg[ph-eyedropper-sample-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 67.24a39.77 39.77 0 0 0-12.51-28.52c-15.58-14.72-40.78-14.22-56.2 1.21l-16.81 16.91a28 28 0 0 0-35.64 3.29l-9 9a20 20 0 0 0-.73 27.49L48.9 144.84A43.76 43.76 0 0 0 37 185.28l-7.5 17.19a17.66 17.66 0 0 0 3.71 19.65a19.9 19.9 0 0 0 22.15 4.19l16.31-7.13a43.89 43.89 0 0 0 39.45-12.09l48.24-48.26a20 20 0 0 0 27.47-.73l9-9a28.06 28.06 0 0 0 3.25-35.71l17.24-17.34A39.7 39.7 0 0 0 228 67.24m-85.65 74.66l-6.06 6.1H79.73l34.34-34.36Zm-48.2 48.21a20 20 0 0 1-20 5a11.93 11.93 0 0 0-8.32.47l-8.83 3.8l3.69-8.38a12 12 0 0 0 .37-8.64a20 20 0 0 1-.65-10.36h51.88Zm105.14-111l-25.37 25.52a12 12 0 0 0 0 17l4.88 4.88a4 4 0 0 1 0 5.66l-6.14 6.15l-4.88-4.89l-45.23-45.29l-4.88-4.89l6.14-6.14a4 4 0 0 1 5.66 0l4.88 4.89a12 12 0 0 0 8.49 3.51a12 12 0 0 0 8.5-3.51l24.94-25.08c6.3-6.3 16.48-6.63 22.71-.74a16 16 0 0 1 .3 23Z"></svg:path>`,
})
export class PhEyedropperSampleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperSampleDuotoneIcon],svg[ph-eyedropper-sample-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M52.3 160h89l-38.62 38.63a32 32 0 0 1-32.06 8l-20 8.74a8 8 0 0 1-8.86-1.67a5.74 5.74 0 0 1-1.2-6.36l9.19-21.06A32.07 32.07 0 0 1 52.3 160M207.23 47.51c-11.07-10.49-28.65-9.83-39.44 1l-25 25.1l-4.89-4.88a16 16 0 0 0-22.63 0l-9 9a8 8 0 0 0 0 11.31L167 149.66a8 8 0 0 0 11.31 0l9-9a16 16 0 0 0 0-22.63l-4.88-4.89l25.37-25.48a28 28 0 0 0-.57-40.15" opacity=".2"></svg:path><svg:path d="M224 67.3a35.8 35.8 0 0 0-11.26-25.66c-14-13.28-36.72-12.78-50.62 1.13L142.8 62.2a24 24 0 0 0-33.14.77l-9 9a16 16 0 0 0 0 22.64l2 2.06l-51 51a39.75 39.75 0 0 0-10.53 38l-8 18.41A13.65 13.65 0 0 0 36 219.29a15.9 15.9 0 0 0 17.71 3.36L71.24 215a39.9 39.9 0 0 0 37.05-10.75l51-51l2.06 2.06a16 16 0 0 0 22.62 0l9-9a24 24 0 0 0 .74-33.18l19.75-19.87A35.75 35.75 0 0 0 224 67.3M97 193a24 24 0 0 1-24 6a8 8 0 0 0-5.55.31l-18.1 7.9l7.65-17.8a8 8 0 0 0 .25-5.75a24 24 0 0 1 .1-15.69H122Zm41-41H70.07l44-44l33.94 34Zm64.18-70l-25.37 25.52a8 8 0 0 0 0 11.31l4.89 4.88a8 8 0 0 1 0 11.32l-9 9L112 83.26l9-9a8 8 0 0 1 11.31 0l4.89 4.89a8 8 0 0 0 5.65 2.34a8 8 0 0 0 5.66-2.36l24.94-25.09c7.81-7.82 20.5-8.18 28.29-.81a20 20 0 0 1 .39 28.7Z"></svg:path></svg:g>`,
})
export class PhEyedropperSampleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperSampleFillIcon],svg[ph-eyedropper-sample-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 67.3a35.8 35.8 0 0 0-11.26-25.66c-14-13.28-36.72-12.78-50.62 1.13L138.8 66.2a24 24 0 0 0-33.14.77l-5 5a16 16 0 0 0 0 22.64l2 2.06l-51 51a39.75 39.75 0 0 0-10.53 38l-8 18.41A13.65 13.65 0 0 0 36 219.29a15.9 15.9 0 0 0 17.71 3.36L71.24 215a39.9 39.9 0 0 0 37.05-10.75l51-51l2.06 2.06a16 16 0 0 0 22.62 0l5-5a24 24 0 0 0 .74-33.18l23.75-23.87A35.75 35.75 0 0 0 224 67.3M138 152H70.07l44-44l33.94 34Z"></svg:path>`,
})
export class PhEyedropperSampleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperSampleLightIcon],svg[ph-eyedropper-sample-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 67.34a33.8 33.8 0 0 0-10.64-24.25c-13.24-12.53-34.68-12.09-47.82 1.09L142.82 65l-.63-.63a22 22 0 0 0-31.11 0l-9 9a14 14 0 0 0 0 19.81l3.47 3.47l-52.41 52.45a37.81 37.81 0 0 0-9.84 36.73l-8.31 19a11.68 11.68 0 0 0 2.46 13a13.9 13.9 0 0 0 9.87 4.17a14.15 14.15 0 0 0 5.68-1.18l18-7.9a37.92 37.92 0 0 0 35.84-10.07l52.44-52.46l3.47 3.48a14 14 0 0 0 19.8 0l9-9a22.06 22.06 0 0 0 0-31.13l-.66-.65L212 91.85a33.76 33.76 0 0 0 10-24.51m-123.61 127a26 26 0 0 1-26 6.47a6 6 0 0 0-4.17.24l-20 8.75a2 2 0 0 1-2.09-.31l9.12-20.9a5.94 5.94 0 0 0 .19-4.31A25.9 25.9 0 0 1 56 166h70.78ZM138.78 154H65.24l48.83-48.84l36.76 36.78Zm64.77-70.59l-25.38 25.49a6 6 0 0 0 0 8.47l4.88 4.89a10 10 0 0 1 0 14.15l-9 9a2 2 0 0 1-2.82 0l-60.69-60.7a2 2 0 0 1 0-2.83l9-9a10 10 0 0 1 14.14 0l4.89 4.89a6 6 0 0 0 4.24 1.75a6 6 0 0 0 4.25-1.77L172 52.66c8.57-8.58 22.51-9 31.07-.85a22 22 0 0 1 .44 31.57Z"></svg:path>`,
})
export class PhEyedropperSampleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperSampleThinIcon],svg[ph-eyedropper-sample-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 67.37a31.8 31.8 0 0 0-10-22.82c-12.46-11.8-32.66-11.33-45 1.05l-22.18 22.26l-2-2a20 20 0 0 0-28.28 0l-9 9a12 12 0 0 0 0 17l4.89 4.89l-53.88 53.77A35.81 35.81 0 0 0 45.42 186l-8.6 19.7a9.7 9.7 0 0 0 2 10.79A12 12 0 0 0 52.15 219l18.72-8.18a35.92 35.92 0 0 0 34.59-9.37l53.86-53.87l4.88 4.89a12 12 0 0 0 17 0l9-9a20 20 0 0 0 0-28.29l-2.06-2.06l22.55-22.69A31.76 31.76 0 0 0 220 67.37M99.81 195.78a28 28 0 0 1-28 7a4 4 0 0 0-2.78.15l-20 8.75a4 4 0 0 1-4.43-.84a1.73 1.73 0 0 1-.36-1.93l9.19-21.06a4 4 0 0 0 .12-2.88a27.93 27.93 0 0 1 1.22-21h76.83ZM139.6 156H60.41l53.65-53.67l39.6 39.61Zm40-45.66a4 4 0 0 0 0 5.65l4.89 4.89a12 12 0 0 1 0 17l-9 9a4 4 0 0 1-5.66 0L109.18 86.1a4 4 0 0 1 0-5.66l9-9a12 12 0 0 1 17 0l4.82 4.92a4 4 0 0 0 2.83 1.17a4 4 0 0 0 2.83-1.18l25-25.1c9.33-9.34 24.52-9.73 33.87-.89a24 24 0 0 1 .47 34.43Z"></svg:path>`,
})
export class PhEyedropperSampleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperThinIcon],svg[ph-eyedropper-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 67.37a31.82 31.82 0 0 0-10-22.82c-12.46-11.8-32.66-11.33-45 1.05l-22.18 22.26l-2-2a20 20 0 0 0-28.28 0l-9 9a12 12 0 0 0 0 17l4.89 4.89l-53.88 53.77A35.81 35.81 0 0 0 45.42 186l-8.6 19.7a9.7 9.7 0 0 0 2 10.79A12 12 0 0 0 52.15 219l18.72-8.18a35.9 35.9 0 0 0 34.59-9.37l53.86-53.87l4.88 4.89a12 12 0 0 0 17 0l9-9a20 20 0 0 0 0-28.3l-2.06-2.06l22.55-22.69A31.75 31.75 0 0 0 220 67.37M99.81 195.78a28 28 0 0 1-28 7a4 4 0 0 0-2.78.15l-20 8.75a4 4 0 0 1-4.43-.84a1.73 1.73 0 0 1-.36-1.93l9.19-21.06a4 4 0 0 0 .12-2.88a27.87 27.87 0 0 1 6.74-28.77l53.85-53.87l39.6 39.61Zm79.78-85.47a4 4 0 0 0 0 5.65l4.89 4.89a12 12 0 0 1 0 17l-9 9a4 4 0 0 1-5.66 0L109.18 86.1a4 4 0 0 1 0-5.66l9-9a12 12 0 0 1 17 0l4.82 4.92a4 4 0 0 0 2.83 1.17a4 4 0 0 0 2.83-1.18l25-25.1c9.33-9.34 24.52-9.73 33.87-.89a24 24 0 0 1 .47 34.43Z"></svg:path>`,
})
export class PhEyedropperThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeglassesIcon],svg[ph-eyeglasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40a8 8 0 0 0 0 16a16 16 0 0 1 16 16v58.08A44 44 0 0 0 145.68 152h-35.36A44 44 0 0 0 40 130.08V72a16 16 0 0 1 16-16a8 8 0 0 0 0-16a32 32 0 0 0-32 32v92a44 44 0 0 0 87.81 4h32.38a44 44 0 0 0 87.81-4V72a32 32 0 0 0-32-32M68 192a28 28 0 1 1 28-28a28 28 0 0 1-28 28m120 0a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhEyeglassesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeglassesBoldIcon],svg[ph-eyeglasses-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 36a12 12 0 0 0 0 24a12 12 0 0 1 12 12v50.46A47.94 47.94 0 0 0 142.75 148h-29.5A47.94 47.94 0 0 0 44 122.46V72a12 12 0 0 1 12-12a12 12 0 0 0 0-24a36 36 0 0 0-36 36v92a48 48 0 0 0 95.32 8h25.36a48 48 0 0 0 95.32-8V72a36 36 0 0 0-36-36M68 188a24 24 0 1 1 24-24a24 24 0 0 1-24 24m120 0a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhEyeglassesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeglassesDuotoneIcon],svg[ph-eyeglasses-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 164a36 36 0 1 1-36-36a36 36 0 0 1 36 36m84-36a36 36 0 1 0 36 36a36 36 0 0 0-36-36" opacity=".2"></svg:path><svg:path d="M200 40a8 8 0 0 0 0 16a16 16 0 0 1 16 16v58.08A44 44 0 0 0 145.68 152h-35.36A44 44 0 0 0 40 130.08V72a16 16 0 0 1 16-16a8 8 0 0 0 0-16a32 32 0 0 0-32 32v92a44 44 0 0 0 87.81 4h32.38a44 44 0 0 0 87.81-4V72a32 32 0 0 0-32-32M68 192a28 28 0 1 1 28-28a28 28 0 0 1-28 28m120 0a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path></svg:g>`,
})
export class PhEyeglassesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeglassesFillIcon],svg[ph-eyeglasses-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 72v92a44 44 0 0 1-87.81 4h-32.38A44 44 0 0 1 24 164V72a32 32 0 0 1 32-32a8 8 0 0 1 0 16a16 16 0 0 0-16 16v58.08A44 44 0 0 1 110.32 152h35.36A44 44 0 0 1 216 130.08V72a16 16 0 0 0-16-16a8 8 0 0 1 0-16a32 32 0 0 1 32 32"></svg:path>`,
})
export class PhEyeglassesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeglassesLightIcon],svg[ph-eyeglasses-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 42a6 6 0 0 0 0 12a18 18 0 0 1 18 18v62.65A42 42 0 0 0 147.21 154h-38.42A42 42 0 0 0 38 134.65V72a18 18 0 0 1 18-18a6 6 0 0 0 0-12a30 30 0 0 0-30 30v92a42 42 0 0 0 84 2h36.1a42 42 0 0 0 83.9-2V72a30 30 0 0 0-30-30M68 194a30 30 0 1 1 30-30a30 30 0 0 1-30 30m120 0a30 30 0 1 1 30-30a30 30 0 0 1-30 30"></svg:path>`,
})
export class PhEyeglassesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeglassesThinIcon],svg[ph-eyeglasses-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44a4 4 0 0 0 0 8a20 20 0 0 1 20 20v68a40 40 0 0 0-71.2 16h-41.6A40 40 0 0 0 36 140V72a20 20 0 0 1 20-20a4 4 0 0 0 0-8a28 28 0 0 0-28 28v92a40 40 0 0 0 80 0h40a40 40 0 0 0 80 0V72a28 28 0 0 0-28-28M68 196a32 32 0 1 1 32-32a32 32 0 0 1-32 32m120 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class PhEyeglassesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyesIcon],svg[ph-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 32c-20.61 0-38.28 18.16-48 45.85C118.28 50.16 100.61 32 80 32c-31.4 0-56 42.17-56 96s24.6 96 56 96c20.61 0 38.28-18.16 48-45.85c9.72 27.69 27.39 45.85 48 45.85c31.4 0 56-42.17 56-96s-24.6-96-56-96m-69.08 154.39C99.43 200.12 89.62 208 80 208s-19.43-7.88-26.92-21.61a104.8 104.8 0 0 1-10.24-29.23a32 32 0 1 0 0-58.32a104.8 104.8 0 0 1 10.24-29.23C60.57 55.88 70.38 48 80 48s19.43 7.88 26.92 21.61C115.35 85.07 120 105.81 120 128s-4.65 42.93-13.08 58.39M40 128a16 16 0 1 1 16 16a16 16 0 0 1-16-16m162.92 58.39C195.43 200.12 185.62 208 176 208s-19.43-7.88-26.92-21.61a104.8 104.8 0 0 1-10.24-29.23a32 32 0 1 0 0-58.32a104.8 104.8 0 0 1 10.24-29.23C156.57 55.88 166.38 48 176 48s19.43 7.88 26.92 21.61C211.35 85.07 216 105.81 216 128s-4.65 42.93-13.08 58.39M136 128a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhEyesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyesBoldIcon],svg[ph-eyes-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.48 60C209.21 39.37 193.42 28 176 28s-33.21 11.37-44.48 32c-1.24 2.28-2.42 4.65-3.52 7.11c-1.1-2.46-2.28-4.83-3.52-7.11C113.21 39.37 97.42 28 80 28S46.79 39.37 35.52 60C25.51 78.38 20 102.52 20 128s5.51 49.62 15.52 68c11.27 20.62 27.06 32 44.48 32s33.21-11.38 44.48-32c1.24-2.28 2.42-4.65 3.52-7.11c1.1 2.46 2.28 4.83 3.52 7.11c11.27 20.65 27.06 32 44.48 32s33.21-11.38 44.48-32c10-18.35 15.52-42.49 15.52-68s-5.51-49.62-15.52-68M152 116a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-96 0a12 12 0 1 1-12 12a12 12 0 0 1 12-12m24 88c-12.08 0-25.13-15.72-31.7-40.84a35.6 35.6 0 0 0 7.7.84a36 36 0 0 0 0-72a35.6 35.6 0 0 0-7.7.84C54.87 67.72 67.92 52 80 52c17 0 36 31.21 36 76s-19 76-36 76m96 0c-12.08 0-25.13-15.72-31.7-40.84a35.6 35.6 0 0 0 7.7.84a36 36 0 0 0 0-72a35.6 35.6 0 0 0-7.7.84C150.87 67.72 163.92 52 176 52c17 0 36 31.21 36 76s-19 76-36 76"></svg:path>`,
})
export class PhEyesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyesDuotoneIcon],svg[ph-eyes-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 128a24 24 0 1 1-24-24a24 24 0 0 1 24 24m72-24a24 24 0 1 0 24 24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M176 32c-20.61 0-38.28 18.16-48 45.85C118.28 50.16 100.61 32 80 32c-31.4 0-56 42.17-56 96s24.6 96 56 96c20.61 0 38.28-18.16 48-45.85c9.72 27.69 27.39 45.85 48 45.85c31.4 0 56-42.17 56-96s-24.6-96-56-96m-69.08 154.39C99.43 200.12 89.62 208 80 208s-19.43-7.88-26.92-21.61a104.8 104.8 0 0 1-10.24-29.23a32 32 0 1 0 0-58.32a104.8 104.8 0 0 1 10.24-29.23C60.57 55.88 70.38 48 80 48s19.43 7.88 26.92 21.61C115.35 85.07 120 105.81 120 128s-4.65 42.93-13.08 58.39M40 128a16 16 0 1 1 16 16a16 16 0 0 1-16-16m162.92 58.39C195.43 200.12 185.62 208 176 208s-19.43-7.88-26.92-21.61a104.8 104.8 0 0 1-10.24-29.23a32 32 0 1 0 0-58.32a104.8 104.8 0 0 1 10.24-29.23C156.57 55.88 166.38 48 176 48s19.43 7.88 26.92 21.61C211.35 85.07 216 105.81 216 128s-4.65 42.93-13.08 58.39M136 128a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path></svg:g>`,
})
export class PhEyesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyesFillIcon],svg[ph-eyes-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 32c-20.61 0-38.28 18.16-48 45.85C118.28 50.16 100.61 32 80 32c-31.4 0-56 42.17-56 96s24.6 96 56 96c20.61 0 38.28-18.16 48-45.85c9.72 27.69 27.39 45.85 48 45.85c31.4 0 56-42.17 56-96s-24.6-96-56-96m-69.08 154.39C99.43 200.12 89.62 208 80 208s-19.43-7.88-26.92-21.61a104.8 104.8 0 0 1-10.24-29.23a32 32 0 1 0 0-58.32a104.8 104.8 0 0 1 10.24-29.23C60.57 55.88 70.38 48 80 48s19.43 7.88 26.92 21.61C115.35 85.07 120 105.81 120 128s-4.65 42.93-13.08 58.39m96 0C195.43 200.12 185.62 208 176 208s-19.43-7.88-26.92-21.61a104.8 104.8 0 0 1-10.24-29.23a32 32 0 1 0 0-58.32a104.8 104.8 0 0 1 10.24-29.23C156.57 55.88 166.38 48 176 48s19.43 7.88 26.92 21.61C211.35 85.07 216 105.81 216 128s-4.65 42.93-13.08 58.39"></svg:path>`,
})
export class PhEyesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyesLightIcon],svg[ph-eyes-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 34c-21.15 0-39.1 20.15-48 50.26C119.1 54.15 101.15 34 80 34c-30.28 0-54 41.29-54 94s23.72 94 54 94c21.15 0 39.1-20.15 48-50.26c8.9 30.11 26.85 50.26 48 50.26c30.28 0 54-41.29 54-94s-23.72-94-54-94M80 210c-18.24 0-34.19-24.1-39.83-56.53a30 30 0 1 0 0-50.94C45.81 70.1 61.76 46 80 46c22.77 0 42 37.55 42 82s-19.23 82-42 82m-42-82a18 18 0 1 1 18 18a18 18 0 0 1-18-18m138 82c-18.24 0-34.19-24.1-39.83-56.53a30 30 0 1 0 0-50.94C141.81 70.1 157.76 46 176 46c22.77 0 42 37.55 42 82s-19.23 82-42 82m-42-82a18 18 0 1 1 18 18a18 18 0 0 1-18-18"></svg:path>`,
})
export class PhEyesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyesThinIcon],svg[ph-eyes-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.45 63.86C203.65 45.89 190.35 36 176 36s-27.65 9.89-37.45 27.86A114 114 0 0 0 128 92.31a114 114 0 0 0-10.55-28.45C107.65 45.89 94.35 36 80 36s-27.65 9.89-37.45 27.86C33.17 81.06 28 103.84 28 128s5.17 46.94 14.55 64.14C52.35 210.11 65.65 220 80 220s27.65-9.89 37.45-27.86A114 114 0 0 0 128 163.69a114 114 0 0 0 10.55 28.45c9.8 18 23.1 27.86 37.45 27.86s27.65-9.89 37.45-27.86c9.38-17.2 14.55-40 14.55-64.14s-5.17-46.94-14.55-64.14m-103 124.45C102.1 203.59 91.29 212 80 212s-22.1-8.41-30.43-23.69c-6-11-10.17-24.59-12.18-39.42a28 28 0 1 0 0-41.78c2-14.83 6.17-28.39 12.18-39.42C57.9 52.41 68.71 44 80 44s22.1 8.41 30.43 23.69C119.18 83.73 124 105.15 124 128s-4.82 44.27-13.57 60.31ZM36 128a20 20 0 1 1 20 20a20 20 0 0 1-20-20m170.43 60.31C198.1 203.59 187.29 212 176 212s-22.1-8.41-30.43-23.69c-6-11-10.17-24.59-12.18-39.42a28 28 0 1 0 0-41.78c2-14.83 6.17-28.39 12.18-39.42C153.9 52.41 164.71 44 176 44s22.1 8.41 30.43 23.69C215.18 83.73 220 105.15 220 128s-4.82 44.27-13.57 60.31M132 128a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhEyesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFaceMaskIcon],svg[ph-face-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 104a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m-8 24H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16m88-24v24a32 32 0 0 1-32 32h-5.19c-7.19 15.8-21.79 29.43-43.23 40.16a191.2 191.2 0 0 1-46.15 15.71a7.9 7.9 0 0 1-2.86 0a191.2 191.2 0 0 1-46.15-15.71C59 189.43 44.38 175.8 37.19 160H32a32 32 0 0 1-32-32v-24a32 32 0 0 1 32-32h.85a16 16 0 0 1 9.68-10l80-29.09a16.06 16.06 0 0 1 10.94 0l80 29.09a16 16 0 0 1 9.68 10h.85a32 32 0 0 1 32 32M32.55 144a59 59 0 0 1-.55-8V88a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16ZM208 136V77.09L128 48L48 77.09V136c0 45 69.09 61.52 80 63.84c10.89-2.32 80-18.84 80-63.84m32-32a16 16 0 0 0-16-16v48a59 59 0 0 1-.55 8h.55a16 16 0 0 0 16-16Z"></svg:path>`,
})
export class PhFaceMaskIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFaceMaskBoldIcon],svg[ph-face-mask-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 88h72a12 12 0 0 1 0 24H92a12 12 0 0 1 0-24m72 40H92a12 12 0 0 0 0 24h72a12 12 0 0 0 0-24m92-24v24a36 36 0 0 1-36 36h-6.15c-7.22 15.48-20.72 28.87-40.07 39.52a169 169 0 0 1-43.43 16.25a12.1 12.1 0 0 1-4.7 0a169 169 0 0 1-43.43-16.25c-19.35-10.65-32.85-24-40.07-39.52H36a36 36 0 0 1-36-36v-24a36 36 0 0 1 36-36h2a19.93 19.93 0 0 1 10.55-9.77l72-28.8a19.9 19.9 0 0 1 14.86 0l72 28.8A19.93 19.93 0 0 1 218 68h2a36 36 0 0 1 36 36M36.13 140c-.08-1.32-.13-2.65-.13-4V92a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12ZM196 79.51l-68-27.2l-68 27.2V136c0 40.63 55.72 56.65 68 59.69c12.25-3 68-19.05 68-59.69ZM232 104a12 12 0 0 0-12-12v44c0 1.35-.05 2.68-.13 4h.13a12 12 0 0 0 12-12Z"></svg:path>`,
})
export class PhFaceMaskBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFaceMaskDuotoneIcon],svg[ph-face-mask-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 77.09V136c0 56-88 72-88 72s-88-16-88-72V77.09a8 8 0 0 1 5.27-7.52l80-29.09a8 8 0 0 1 5.46 0l80 29.09a8 8 0 0 1 5.27 7.52" opacity=".2"></svg:path><svg:path d="M176 104a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m-8 24H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16m88-24v24a32 32 0 0 1-32 32h-5.19c-7.19 15.8-21.79 29.43-43.23 40.16a191.2 191.2 0 0 1-46.15 15.71a7.9 7.9 0 0 1-2.86 0a191.2 191.2 0 0 1-46.15-15.71C59 189.43 44.38 175.8 37.19 160H32a32 32 0 0 1-32-32v-24a32 32 0 0 1 32-32h.85a16 16 0 0 1 9.68-10l80-29.09a16.06 16.06 0 0 1 10.94 0l80 29.09a16 16 0 0 1 9.68 10h.85a32 32 0 0 1 32 32M32.55 144a59 59 0 0 1-.55-8V88a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16ZM208 136V77.09L128 48L48 77.09V136c0 45 69.09 61.52 80 63.84c10.89-2.32 80-18.84 80-63.84m32-32a16 16 0 0 0-16-16v48a59 59 0 0 1-.55 8h.55a16 16 0 0 0 16-16Z"></svg:path></svg:g>`,
})
export class PhFaceMaskDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFaceMaskFillIcon],svg[ph-face-mask-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 72h-.85a16 16 0 0 0-9.68-10l-80-29a16.06 16.06 0 0 0-10.94 0l-80 29.09a16 16 0 0 0-9.68 10H32A32 32 0 0 0 0 104v24a32 32 0 0 0 32 32h5.19c7.19 15.8 21.79 29.43 43.23 40.16a191.2 191.2 0 0 0 46.15 15.71a7.9 7.9 0 0 0 2.86 0a191.2 191.2 0 0 0 46.15-15.71c21.44-10.73 36-24.36 43.23-40.16H224a32 32 0 0 0 32-32v-24a32 32 0 0 0-32-32M32 144a16 16 0 0 1-16-16v-24a16 16 0 0 1 16-16v48a59 59 0 0 0 .55 8Zm136 0H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16m0-32H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16m72 16a16 16 0 0 1-16 16h-.55a59 59 0 0 0 .55-8V88a16 16 0 0 1 16 16Z"></svg:path>`,
})
export class PhFaceMaskFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFaceMaskLightIcon],svg[ph-face-mask-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 104a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6m-6 26H88a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12m86-26v24a30 30 0 0 1-30 30h-6.5c-6.81 15.88-21.28 29.6-42.82 40.37a189 189 0 0 1-45.61 15.53a5.8 5.8 0 0 1-2.14 0a189 189 0 0 1-45.61-15.53C59.78 187.6 45.31 173.88 38.5 158H32a30 30 0 0 1-30-30v-24a30 30 0 0 1 30-30h2.35a14 14 0 0 1 8.87-10.07l80-29.09a14 14 0 0 1 9.56 0l80 29.09A14 14 0 0 1 221.65 74H224a30 30 0 0 1 30 30M34.89 146a57 57 0 0 1-.89-10V86h-2a18 18 0 0 0-18 18v24a18 18 0 0 0 18 18ZM210 136V77.09a2 2 0 0 0-1.32-1.88l-80-29.09a2 2 0 0 0-1.36 0l-80 29.09A2 2 0 0 0 46 77.09V136c0 20.7 13.61 38 40.46 51.52A180.8 180.8 0 0 0 128 201.88a181 181 0 0 0 41.54-14.36C196.39 174 210 156.7 210 136m32-32a18 18 0 0 0-18-18h-2v50a57 57 0 0 1-.89 10H224a18 18 0 0 0 18-18Z"></svg:path>`,
})
export class PhFaceMaskLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFaceMaskThinIcon],svg[ph-face-mask-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 104a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4m-4 28H88a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8m84-28v24a28 28 0 0 1-28 28h-7.84c-6.41 16-20.74 29.76-42.37 40.58a187 187 0 0 1-45.07 15.36a4.4 4.4 0 0 1-1.44 0a187 187 0 0 1-45.07-15.36C60.58 185.76 46.25 172 39.84 156H32a28 28 0 0 1-28-28v-24a28 28 0 0 1 28-28h4.06a12 12 0 0 1 7.84-10.19l80-29.09a12 12 0 0 1 8.2 0l80 29.09A12 12 0 0 1 219.94 76H224a28 28 0 0 1 28 28M37.35 148A53.7 53.7 0 0 1 36 136V84h-4a20 20 0 0 0-20 20v24a20 20 0 0 0 20 20ZM212 136V77.09a4 4 0 0 0-2.63-3.76l-80-29.09a4 4 0 0 0-2.74 0l-80 29.09A4 4 0 0 0 44 77.09V136c0 49.42 75.76 66.24 84 67.92c8.24-1.68 84-18.5 84-67.92m32-32a20 20 0 0 0-20-20h-4v52a53.7 53.7 0 0 1-1.35 12H224a20 20 0 0 0 20-20Z"></svg:path>`,
})
export class PhFaceMaskThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFacebookLogoIcon],svg[ph-facebook-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 191.63V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32 32 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.63a88 88 0 1 1 16 0"></svg:path>`,
})
export class PhFacebookLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFacebookLogoBoldIcon],svg[ph-facebook-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 191.13V156h20a12 12 0 0 0 0-24h-20v-20a12 12 0 0 1 12-12h16a12 12 0 0 0 0-24h-16a36 36 0 0 0-36 36v20H96a12 12 0 0 0 0 24h20v55.13a84 84 0 1 1 24 0"></svg:path>`,
})
export class PhFacebookLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFacebookLogoDuotoneIcon],svg[ph-facebook-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 191.63V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32 32 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.63a88 88 0 1 1 16 0"></svg:path></svg:g>`,
})
export class PhFacebookLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFacebookLogoFillIcon],svg[ph-facebook-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128a104.16 104.16 0 0 1-91.55 103.26a4 4 0 0 1-4.45-4V152h24a8 8 0 0 0 8-8.53a8.17 8.17 0 0 0-8.25-7.47H136v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 8-8.53a8.17 8.17 0 0 0-8.27-7.47H152a32 32 0 0 0-32 32v24H96a8 8 0 0 0-8 8.53a8.17 8.17 0 0 0 8.27 7.47H120v75.28a4 4 0 0 1-4.44 4a104.15 104.15 0 0 1-91.49-107.19c2-54 45.74-97.9 99.78-100A104.12 104.12 0 0 1 232 128"></svg:path>`,
})
export class PhFacebookLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFacebookLogoLightIcon],svg[ph-facebook-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m6 191.8V150h26a6 6 0 0 0 0-12h-26v-26a18 18 0 0 1 18-18h16a6 6 0 0 0 0-12h-16a30 30 0 0 0-30 30v26H96a6 6 0 0 0 0 12h26v67.8a90 90 0 1 1 12 0"></svg:path>`,
})
export class PhFacebookLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFacebookLogoThinIcon],svg[ph-facebook-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m4 191.91V148h28a4 4 0 0 0 0-8h-28v-28a20 20 0 0 1 20-20h16a4 4 0 0 0 0-8h-16a28 28 0 0 0-28 28v28H96a4 4 0 0 0 0 8h28v71.91a92 92 0 1 1 8 0"></svg:path>`,
})
export class PhFacebookLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFactoryIcon],svg[ph-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 176a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h28a8 8 0 0 1 8 8m60-8h-28a8 8 0 0 0 0 16h28a8 8 0 0 0 0-16m64 48a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h8V88a8 8 0 0 1 12.8-6.4L96 120V88a8 8 0 0 1 12.8-6.4l38.74 29.05l11.56-80.91A16.08 16.08 0 0 1 174.94 16h18.12a16.08 16.08 0 0 1 15.84 13.74l15 105.13s.08.78.08 1.13v72h8a8 8 0 0 1 8.02 8m-77.86-94.4l8.53 6.4h36.11l-13.72-96h-18.12ZM48 208h160v-64h-40a8 8 0 0 1-4.8-1.6l-14.4-10.8L112 104v32a8 8 0 0 1-12.8 6.4L48 104Z"></svg:path>`,
})
export class PhFactoryIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFactoryBoldIcon],svg[ph-factory-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 176a12 12 0 0 1-12 12H80a12 12 0 0 1 0-24h28a12 12 0 0 1 12 12m56-12h-28a12 12 0 0 0 0 24h28a12 12 0 0 0 0-24m68 52a12 12 0 0 1-12 12H24a12 12 0 0 1 0-24h4V88a12 12 0 0 1 19.2-9.6L92 112V88a12 12 0 0 1 19.2-9.6l33.33 25l10.61-74.23A20.1 20.1 0 0 1 174.94 12h18.12a20.1 20.1 0 0 1 19.8 17.17l15 105.13c0 .1.12 1.34.12 1.7v68h4A12 12 0 0 1 244 216m-77.57-96.17L172 124h30.16l-12.57-88h-11.18ZM52 204h152v-56h-36a12 12 0 0 1-7.2-2.4l-14.38-10.78h-.06L116 112v24a12 12 0 0 1-19.2 9.6L52 112Z"></svg:path>`,
})
export class PhFactoryBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFactoryDuotoneIcon],svg[ph-factory-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 136v80H40V88l64 48V88l64 48Z" opacity=".2"></svg:path><svg:path d="M116 176a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h28a8 8 0 0 1 8 8m60-8h-28a8 8 0 0 0 0 16h28a8 8 0 0 0 0-16m64 48a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h8V88a8 8 0 0 1 12.8-6.4L96 120V88a8 8 0 0 1 12.8-6.4l38.74 29.05l11.56-80.91A16.08 16.08 0 0 1 174.94 16h18.12a16.08 16.08 0 0 1 15.84 13.74l15 105.13s.08.78.08 1.13v72h8a8 8 0 0 1 8.02 8m-77.86-94.4l8.53 6.4h36.11l-13.72-96h-18.12ZM48 208h160v-64h-40a8 8 0 0 1-4.8-1.6l-14.4-10.8L112 104v32a8 8 0 0 1-12.8 6.4L48 104Z"></svg:path></svg:g>`,
})
export class PhFactoryDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFactoryFillIcon],svg[ph-factory-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 208h-8v-72.98a1 1 0 0 0 0-.15L209 29.74A16.08 16.08 0 0 0 193.06 16h-18.12a16.08 16.08 0 0 0-15.84 13.74l-11.56 80.91L108.8 81.6A8 8 0 0 0 96 88v32L44.8 81.6A8 8 0 0 0 32 88v120h-8a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-124-24H80a8 8 0 0 1 0-16h28a8 8 0 0 1 0 16m68 0h-28a8 8 0 0 1 0-16h28a8 8 0 0 1 0 16m-5.33-56l-8.53-6.4l12.8-89.6h18.12l13.72 96Z"></svg:path>`,
})
export class PhFactoryFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFactoryLightIcon],svg[ph-factory-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M114 176a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h28a6 6 0 0 1 6 6m62-6h-28a6 6 0 0 0 0 12h28a6 6 0 0 0 0-12m62 46a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h10V88a6 6 0 0 1 9.6-4.8L98 124V88a6 6 0 0 1 9.6-4.8l41.4 31.08l12-84.26a14.07 14.07 0 0 1 13.86-12h18.12a14.07 14.07 0 0 1 13.86 12l15 105.13s.06.59.06.85v74h10a6 6 0 0 1 6.1 6m-78-93.51l10 7.51h39.08L195 31.72a2 2 0 0 0-2-1.72h-18.06a2 2 0 0 0-2 1.72ZM46 210h164v-68h-42a6 6 0 0 1-3.6-1.2L150 130l-40-30v36a6 6 0 0 1-9.6 4.8L46 100Z"></svg:path>`,
})
export class PhFactoryLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFactoryThinIcon],svg[ph-factory-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 176a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h28a4 4 0 0 1 4 4m64-4h-28a4 4 0 0 0 0 8h28a4 4 0 0 0 0-8m60 44a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h12V88a4 4 0 0 1 6.4-3.2L100 128V88a4 4 0 0 1 6.4-3.2l44.14 33.11l12.52-87.61A12.06 12.06 0 0 1 174.94 20h18.12a12.06 12.06 0 0 1 11.88 10.3l15 105.13a3.6 3.6 0 0 1 0 .57v76h12a4 4 0 0 1 4.06 4m-78.16-92.62l11.49 8.62h42.06L197 31.43a4 4 0 0 0-4-3.43h-18.06a4 4 0 0 0-4 3.43ZM44 212h168v-72h-44a4 4 0 0 1-2.4-.8L108 96v40a4 4 0 0 1-6.4 3.2L44 96Z"></svg:path>`,
})
export class PhFactoryThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersIcon],svg[ph-faders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 120v96a8 8 0 0 1-16 0v-96a8 8 0 0 1 16 0m64 72a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8m24-32h-16V40a8 8 0 0 0-16 0v120h-16a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m-168 0a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8m24-32H64V40a8 8 0 0 0-16 0v88H32a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m72-48h-16V40a8 8 0 0 0-16 0v40h-16a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhFadersIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersBoldIcon],svg[ph-faders-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 124v92a12 12 0 0 1-24 0v-92a12 12 0 0 1 24 0m60 68a12 12 0 0 0-12 12v12a12 12 0 0 0 24 0v-12a12 12 0 0 0-12-12m24-40h-12V40a12 12 0 0 0-24 0v112h-12a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24m-168 8a12 12 0 0 0-12 12v44a12 12 0 0 0 24 0v-44a12 12 0 0 0-12-12m24-40H68V40a12 12 0 0 0-24 0v80H32a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24m72-48h-12V40a12 12 0 0 0-24 0v32h-12a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhFadersBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersDuotoneIcon],svg[ph-faders-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v176H56V40Z" opacity=".2"></svg:path><svg:path d="M136 120v96a8 8 0 0 1-16 0v-96a8 8 0 0 1 16 0m64 72a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8m24-32h-16V40a8 8 0 0 0-16 0v120h-16a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m-168 0a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8m24-32H64V40a8 8 0 0 0-16 0v88H32a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m72-48h-16V40a8 8 0 0 0-16 0v40h-16a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhFadersDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersFillIcon],svg[ph-faders-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 120v96a8 8 0 0 1-16 0v-96a8 8 0 0 1 16 0m64 72a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8m24-48h-16V40a8 8 0 0 0-16 0v104h-16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8M56 160a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8m24-48H64V40a8 8 0 0 0-16 0v72H32a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8m72-48h-16V40a8 8 0 0 0-16 0v24h-16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhFadersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersHorizontalIcon],svg[ph-faders-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 80a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8M40 88h104v16a8 8 0 0 0 16 0V56a8 8 0 0 0-16 0v16H40a8 8 0 0 0 0 16m176 80h-96a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16M88 144a8 8 0 0 0-8 8v16H40a8 8 0 0 0 0 16h40v16a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhFadersHorizontalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersHorizontalBoldIcon],svg[ph-faders-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 80a12 12 0 0 1 12-12h28a12 12 0 0 1 0 24h-28a12 12 0 0 1-12-12M40 92h96v12a12 12 0 0 0 24 0V56a12 12 0 0 0-24 0v12H40a12 12 0 0 0 0 24m176 72h-92a12 12 0 0 0 0 24h92a12 12 0 0 0 0-24M84 140a12 12 0 0 0-12 12v12H40a12 12 0 0 0 0 24h32v12a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhFadersHorizontalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersHorizontalDuotoneIcon],svg[ph-faders-horizontal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v96H40V80Z" opacity=".2"></svg:path><svg:path d="M176 80a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8M40 88h104v16a8 8 0 0 0 16 0V56a8 8 0 0 0-16 0v16H40a8 8 0 0 0 0 16m176 80h-96a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16M88 144a8 8 0 0 0-8 8v16H40a8 8 0 0 0 0 16h40v16a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhFadersHorizontalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersHorizontalFillIcon],svg[ph-faders-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 80a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8M40 88h96v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v16H40a8 8 0 0 0 0 16m176 80h-88a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16M96 144H80a8 8 0 0 0-8 8v16H40a8 8 0 0 0 0 16h32v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhFadersHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersHorizontalLightIcon],svg[ph-faders-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178 80a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12h-32a6 6 0 0 1-6-6M40 86h106v18a6 6 0 0 0 12 0V56a6 6 0 0 0-12 0v18H40a6 6 0 0 0 0 12m176 84h-96a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12M88 146a6 6 0 0 0-6 6v18H40a6 6 0 0 0 0 12h42v18a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhFadersHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersHorizontalThinIcon],svg[ph-faders-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 80a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-32a4 4 0 0 1-4-4M40 84h108v20a4 4 0 0 0 8 0V56a4 4 0 0 0-8 0v20H40a4 4 0 0 0 0 8m176 88h-96a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8M88 148a4 4 0 0 0-4 4v20H40a4 4 0 0 0 0 8h44v20a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhFadersHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersLightIcon],svg[ph-faders-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 120v96a6 6 0 0 1-12 0v-96a6 6 0 0 1 12 0m66 74a6 6 0 0 0-6 6v16a6 6 0 0 0 12 0v-16a6 6 0 0 0-6-6m24-32h-18V40a6 6 0 0 0-12 0v122h-18a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m-168 0a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6m24-32H62V40a6 6 0 0 0-12 0v90H32a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m72-48h-18V40a6 6 0 0 0-12 0v42h-18a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhFadersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersThinIcon],svg[ph-faders-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 120v96a4 4 0 0 1-8 0v-96a4 4 0 0 1 8 0m68 76a4 4 0 0 0-4 4v16a4 4 0 0 0 8 0v-16a4 4 0 0 0-4-4m24-32h-20V40a4 4 0 0 0-8 0v124h-20a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m-168 0a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4m24-32H60V40a4 4 0 0 0-8 0v92H32a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m72-48h-20V40a4 4 0 0 0-8 0v44h-20a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhFadersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFalloutShelterIcon],svg[ph-fallout-shelter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m71.05-91.77A8 8 0 0 0 192 120h-49l23.71-35.56A8 8 0 0 0 160 72H96a8 8 0 0 0-6.66 12.44L113.05 120H64a8 8 0 0 0-6.66 12.44l32 48a8 8 0 0 0 13.32 0l25.34-38l25.34 38a8 8 0 0 0 13.32 0l32-48a8 8 0 0 0 .39-8.21m-54-36.23L128 113.58L111 88ZM96 161.58L79 136h34.1Zm64 0L143 136h34.1Z"></svg:path>`,
})
export class PhFalloutShelterIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFalloutShelterBoldIcon],svg[ph-fallout-shelter-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m66-73.34l-24 36a12 12 0 0 1-20 0l-22-33l-22 33a12 12 0 0 1-20 0l-24-36A12 12 0 0 1 72 120h41.58L94 90.66A12 12 0 0 1 104 72h48a12 12 0 0 1 10 18.66L142.42 120H184a12 12 0 0 1 10 18.66"></svg:path>`,
})
export class PhFalloutShelterBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFalloutShelterDuotoneIcon],svg[ph-fallout-shelter-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32a96 96 0 1 0 96 96a96 96 0 0 0-96-96m32 144l-32-48l-32 48l-32-48h64L96 80h64l-32 48h64Z" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m71.05-91.77A8 8 0 0 0 192 120h-49l23.71-35.56A8 8 0 0 0 160 72H96a8 8 0 0 0-6.66 12.44L113.05 120H64a8 8 0 0 0-6.66 12.44l32 48a8 8 0 0 0 13.32 0l25.34-38l25.34 38a8 8 0 0 0 13.32 0l32-48a8 8 0 0 0 .39-8.21m-54-36.23L128 113.58L111 88ZM96 161.58L79 136h34.1Zm64 0L143 136h34.1Z"></svg:path></svg:g>`,
})
export class PhFalloutShelterDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFalloutShelterFillIcon],svg[ph-fallout-shelter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.94 124.55c-1.77-54.49-46-98.72-100.49-100.49A104.09 104.09 0 0 0 24.06 131.45c1.77 54.49 46 98.72 100.49 100.49a104.09 104.09 0 0 0 107.39-107.39m-33.56 16.92l-23.45 32.83a8.52 8.52 0 0 1-13.86 0L128 128l-33.07 46.3a8.52 8.52 0 0 1-13.86 0l-23.45-32.83A8.52 8.52 0 0 1 64.55 128H128L97.62 85.47A8.52 8.52 0 0 1 104.55 72h46.9a8.52 8.52 0 0 1 6.93 13.47L128 128h63.45a8.52 8.52 0 0 1 6.93 13.47"></svg:path>`,
})
export class PhFalloutShelterFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFalloutShelterLightIcon],svg[ph-fallout-shelter-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m69.29-92.83A6 6 0 0 0 192 122h-52.79L165 83.33a6 6 0 0 0-5-9.33H96a6 6 0 0 0-5 9.33L116.79 122H64a6 6 0 0 0-5 9.33l32 48a6 6 0 0 0 10 0l27-40.51l27 40.51a6 6 0 0 0 10 0l32-48a6 6 0 0 0 .29-6.16M148.79 86L128 117.18L107.21 86ZM96 165.18L75.21 134h41.58Zm64 0L139.21 134h41.58Z"></svg:path>`,
})
export class PhFalloutShelterLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFalloutShelterThinIcon],svg[ph-fallout-shelter-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m67.53-93.89A4 4 0 0 0 192 124h-56.53l27.86-41.78A4 4 0 0 0 160 76H96a4 4 0 0 0-3.33 6.22L120.53 124H64a4 4 0 0 0-3.33 6.22l32 48a4 4 0 0 0 6.66 0l28.67-43l28.67 43a4 4 0 0 0 6.66 0l32-48a4 4 0 0 0 .2-4.11m-43-42.11L128 120.79L103.47 84ZM96 168.79L71.47 132h49.06Zm64 0L135.47 132h49.06Z"></svg:path>`,
})
export class PhFalloutShelterThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFanIcon],svg[ph-fan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233 135a60 60 0 0 0-89.62-35.45l16.39-65.44a8 8 0 0 0-3.45-8.68a60 60 0 1 0-60.63 103.48l-64.87 18.53a8 8 0 0 0-5.8 7.32a60 60 0 0 0 44.42 60.66a60.5 60.5 0 0 0 15.62 2.07a60.07 60.07 0 0 0 59.88-62l48.48 46.92a8 8 0 0 0 9.25 1.35A60 60 0 0 0 233 135m-121-7a16 16 0 1 1 16 16a16 16 0 0 1-16-16M80 76a44 44 0 0 1 62.75-39.82L127.77 96a32 32 0 0 0-27.92 16.8A43.85 43.85 0 0 1 80 76m27 119.57a44 44 0 0 1-65.86-34.43l59.31-16.94A32 32 0 0 0 128 160h.91A43.82 43.82 0 0 1 107 195.57m106.17-23a43.9 43.9 0 0 1-13 14.14l-44.32-42.89a31.91 31.91 0 0 0-.59-32.57a44 44 0 0 1 57.91 61.32"></svg:path>`,
})
export class PhFanIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFanBoldIcon],svg[ph-fan-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.85 134a64 64 0 0 0-87.43-42.11l14.22-56.77a12 12 0 0 0-5.17-13A64 64 0 0 0 86 127.52l-56.28 16.07a12 12 0 0 0-8.69 11a64 64 0 0 0 127.56 10l42 40.7a12 12 0 0 0 13.86 2a64 64 0 0 0 32.4-73.29M116 128a12 12 0 1 1 12 12a12 12 0 0 1-12-12m8-92a40 40 0 0 1 14 2.53l-13.4 53.64a36 36 0 0 0-25.85 14.88A40 40 0 0 1 124 36m-19 156.1A40 40 0 0 1 45.5 164l53.18-15.19a36 36 0 0 0 25.8 15A39.84 39.84 0 0 1 105 192.1m104.7-21.56a39.9 39.9 0 0 1-9.21 10.89L160.73 143a35.9 35.9 0 0 0 .05-29.83a40 40 0 0 1 48.89 57.4Z"></svg:path>`,
})
export class PhFanBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFanDuotoneIcon],svg[ph-fan-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M136.5 150.45A52 52 0 1 1 33 155.13l71.91-20.54A24 24 0 0 0 128 152a23.8 23.8 0 0 0 8.5-1.56Zm-32.19-26.31a24 24 0 0 1 29.52-19.42L152 32.17a52 52 0 1 0-47.69 92ZM201 105.5a52 52 0 0 0-57.84 3.91a24 24 0 0 1 2.06 35.26l53.74 52a52 52 0 0 0 2-91.2Z" opacity=".2"></svg:path><svg:path d="M233 135a60 60 0 0 0-89.62-35.45l16.39-65.44a8 8 0 0 0-3.45-8.68a60 60 0 1 0-60.63 103.48l-64.87 18.53a8 8 0 0 0-5.8 7.32a60 60 0 0 0 44.42 60.66a60.5 60.5 0 0 0 15.62 2.07a60.07 60.07 0 0 0 59.88-62l48.48 46.92a8 8 0 0 0 9.25 1.35A60 60 0 0 0 233 135m-121-7a16 16 0 1 1 16 16a16 16 0 0 1-16-16M80 76a44 44 0 0 1 62.75-39.82L127.77 96a32 32 0 0 0-27.92 16.8A43.85 43.85 0 0 1 80 76m27 119.57a44 44 0 0 1-65.86-34.43l59.31-16.94A32 32 0 0 0 128 160h.91A43.82 43.82 0 0 1 107 195.57m106.17-23a43.9 43.9 0 0 1-13 14.14l-44.32-42.89a31.91 31.91 0 0 0-.59-32.57a44 44 0 0 1 57.91 61.32"></svg:path></svg:g>`,
})
export class PhFanDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFanFillIcon],svg[ph-fan-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233 135a60 60 0 0 0-89.62-35.45l16.39-65.44a8 8 0 0 0-3.45-8.68a60 60 0 1 0-60.63 103.48l-64.87 18.53a8 8 0 0 0-5.8 7.32a60 60 0 0 0 44.42 60.66a60.5 60.5 0 0 0 15.62 2.07a60.07 60.07 0 0 0 59.88-62l48.48 46.92a8 8 0 0 0 9.25 1.35A60 60 0 0 0 233 135m-102.56 12.85a20 20 0 1 1 17.41-22.29a20 20 0 0 1-17.41 22.29"></svg:path>`,
})
export class PhFanFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFanLightIcon],svg[ph-fan-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.06 135.52a58 58 0 0 0-88-33.42c-.69-.41-1.41-.8-2.14-1.15l16.86-67.32a6 6 0 0 0-2.58-6.51A58 58 0 1 0 98 127.86v.14c0 .77 0 1.54.1 2.3l-66.73 19.06a6 6 0 0 0-4.37 5.49a58 58 0 1 0 115.88-.85c.7-.4 1.39-.83 2.06-1.29L194.81 201a6 6 0 0 0 6.94 1a58 58 0 0 0 29.31-66.51ZM110 128a18 18 0 1 1 18 18a18 18 0 0 1-18-18M78 76a46 46 0 0 1 67.08-40.9L129.32 98H128a30 30 0 0 0-27.33 17.66A45.84 45.84 0 0 1 78 76m30 121.3a46 46 0 0 1-69-37.64l62.39-17.82A30 30 0 0 0 128 158a29 29 0 0 0 3-.15a45.85 45.85 0 0 1-23 39.45m106.9-23.76a45.9 45.9 0 0 1-15 15.7l-46.63-45.12a29.91 29.91 0 0 0-.93-33.62a46 46 0 0 1 62.52 63Z"></svg:path>`,
})
export class PhFanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFanThinIcon],svg[ph-fan-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.12 136a56 56 0 0 0-86-31.56a28.3 28.3 0 0 0-4.56-2.39l17.27-68.94a4 4 0 0 0-1.72-4.34A56 56 0 1 0 100 126.62V128a27 27 0 0 0 .26 3.76l-68.35 19.52a4 4 0 0 0-2.91 3.66a56 56 0 0 0 41.45 56.62a56.5 56.5 0 0 0 14.59 1.93a56.07 56.07 0 0 0 55.73-60.59a28 28 0 0 0 4.33-2.77l51.09 49.44a4 4 0 0 0 2.81 1.13a4.06 4.06 0 0 0 1.84-.45A56 56 0 0 0 229.12 136M128 148a20 20 0 1 1 20-20a20 20 0 0 1-20 20M76 76a48 48 0 0 1 71.4-41.92l-16.55 66.06c-.94-.09-1.89-.14-2.85-.14a28.06 28.06 0 0 0-26.34 18.49A47.82 47.82 0 0 1 76 76m33 123a48 48 0 0 1-72-40.87l65.5-18.7A28 28 0 0 0 128 156a29 29 0 0 0 4.94-.44A47.81 47.81 0 0 1 109 199m107.6-24.46a47.93 47.93 0 0 1-17 17.22l-49-47.37a27.91 27.91 0 0 0-1.3-34.44a48 48 0 0 1 67.22 64.59Z"></svg:path>`,
})
export class PhFanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFarmIcon],svg[ph-farm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136.83 220.43a8 8 0 0 1-11.09 2.23A183.15 183.15 0 0 0 24 192a8 8 0 0 1 0-16a199.1 199.1 0 0 1 110.6 33.34a8 8 0 0 1 2.23 11.09M24 144a8 8 0 0 0 0 16a214.8 214.8 0 0 1 151.17 61.71a8 8 0 1 0 11.2-11.42A230.7 230.7 0 0 0 24 144m208 16a216.5 216.5 0 0 0-48.59 5.49q8.24 6.25 16 13.16A201.5 201.5 0 0 1 232 176a8 8 0 0 1 0 16c-6 0-11.93.29-17.85.86q8.32 8.67 15.94 18.14a8 8 0 1 1-12.48 10A247 247 0 0 0 24 128a8 8 0 0 1 0-16a266.3 266.3 0 0 1 48 4.37V80a8 8 0 0 1 3.2-6.4l64-48a8 8 0 0 1 9.6 0l64 48A8 8 0 0 1 216 80v32.49c5.31-.31 10.64-.49 16-.49a8 8 0 0 1 0 16a246.3 246.3 0 0 0-84.26 14.69q9.44 5 18.46 10.78A232.2 232.2 0 0 1 232 144a8 8 0 0 1 0 16M120 88h48a8 8 0 0 1 8 8v21.94q11.88-2.56 24-4V84l-56-42l-56 42v35.81q12.19 3 24 7.18V96a8 8 0 0 1 8-8m8.07 45.27A262.5 262.5 0 0 1 160 121.94V104h-32v29.24Z"></svg:path>`,
})
export class PhFarmIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFarmBoldIcon],svg[ph-farm-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M177.17 207.11A12 12 0 1 1 161 224.88A203.53 203.53 0 0 0 24 172a12 12 0 0 1 0-24a227.45 227.45 0 0 1 153.17 59.11m-74.74-2A186.5 186.5 0 0 0 24 188a12 12 0 0 0 0 24a162.6 162.6 0 0 1 68.41 14.9a12 12 0 1 0 10-21.81ZM244 160a12 12 0 0 1-12 12a205 205 0 0 0-31.38 2.4a270 270 0 0 1 32.59 34.09a12 12 0 1 1-18.72 15A243 243 0 0 0 24 132a12 12 0 0 1 0-24a271 271 0 0 1 44 3.6V80a12 12 0 0 1 4.8-9.6l64-48a12 12 0 0 1 14.4 0l64 48A12 12 0 0 1 220 80v28.28c4-.17 8-.28 12-.28a12 12 0 0 1 0 24a242.9 242.9 0 0 0-74.42 11.55q9.28 5.35 18.15 11.46A228.6 228.6 0 0 1 232 148a12 12 0 0 1 12 12m-88-52h-24v19.3q11.83-4.77 24-8.39Zm-64 8.69c5.39 1.4 10.72 3 16 4.72V96a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v17q8-1.56 16-2.65V86l-52-39l-52 39Z"></svg:path>`,
})
export class PhFarmBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFarmDuotoneIcon],svg[ph-farm-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M223.85 216H24v-96a257 257 0 0 1 56.2 6.21l-.2-.07V80l64-48l64 48v41.11a255 255 0 0 0-40 7V96h-48v42.61A256.8 256.8 0 0 1 223.85 216" opacity=".2"></svg:path><svg:path d="M232 160a8 8 0 0 0 0-16a232.2 232.2 0 0 0-65.8 9.47q-9-5.78-18.46-10.78A246.3 246.3 0 0 1 232 128a8 8 0 0 0 0-16c-5.36 0-10.69.18-16 .49V80a8 8 0 0 0-3.2-6.4l-64-48a8 8 0 0 0-9.6 0l-64 48A8 8 0 0 0 72 80v36.37A266.3 266.3 0 0 0 24 112a8 8 0 0 0 0 16a247 247 0 0 1 193.61 93a8 8 0 1 0 12.48-10q-7.59-9.5-15.94-18.14c5.92-.57 11.89-.86 17.85-.86a8 8 0 0 0 0-16a201.5 201.5 0 0 0-32.59 2.65q-7.75-6.92-16-13.16A216.5 216.5 0 0 1 232 160m-104-26.76V104h32v17.94a262.5 262.5 0 0 0-31.93 11.33ZM88 84l56-42l56 42v29.93q-12.12 1.45-24 4V96a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v31q-11.79-4.15-24-7.18Zm48.83 136.43a8 8 0 0 1-11.09 2.23A183.15 183.15 0 0 0 24 192a8 8 0 0 1 0-16a199.1 199.1 0 0 1 110.6 33.34a8 8 0 0 1 2.23 11.09m49.54-10.14a8 8 0 1 1-11.2 11.42A214.8 214.8 0 0 0 24 160a8 8 0 0 1 0-16a230.7 230.7 0 0 1 162.37 66.29"></svg:path></svg:g>`,
})
export class PhFarmDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFarmFillIcon],svg[ph-farm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136.83 220.43a8 8 0 0 1-11.09 2.23A183.15 183.15 0 0 0 24 192a8 8 0 0 1 0-16a199.1 199.1 0 0 1 110.6 33.34a8 8 0 0 1 2.23 11.09M24 144a8 8 0 0 0 0 16a214.8 214.8 0 0 1 151.17 61.71a8 8 0 1 0 11.2-11.42A230.7 230.7 0 0 0 24 144m208 16a216.5 216.5 0 0 0-48.59 5.49q8.24 6.25 16 13.16A201.5 201.5 0 0 1 232 176a8 8 0 0 1 0 16c-6 0-11.93.29-17.85.86q8.32 8.67 15.94 18.14a8 8 0 1 1-12.48 10A247 247 0 0 0 24 128a8 8 0 0 1 0-16a265.4 265.4 0 0 1 48 4.38V80a8 8 0 0 1 3.2-6.4l64-48a8 8 0 0 1 9.6 0l64 48A8 8 0 0 1 216 80v32.5c5.31-.32 10.64-.5 16-.5a8 8 0 0 1 0 16a246.3 246.3 0 0 0-84.26 14.69q9.44 5 18.46 10.78A232.2 232.2 0 0 1 232 144a8 8 0 0 1 0 16m-103.93-26.73A261.5 261.5 0 0 1 168 119.81V96h-48v34c2.71 1 5.4 2.13 8.07 3.27"></svg:path>`,
})
export class PhFarmFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFarmLightIcon],svg[ph-farm-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 158a6 6 0 0 0 0-12a230.1 230.1 0 0 0-66.11 9.65a260 260 0 0 0-23.07-13.28A248.3 248.3 0 0 1 232 126a6 6 0 0 0 0-12c-6 0-12 .22-18 .62V80a6 6 0 0 0-2.4-4.8l-64-48a6 6 0 0 0-7.2 0l-64 48A6 6 0 0 0 74 80v38.77A264.3 264.3 0 0 0 24 114a6 6 0 0 0 0 12a249 249 0 0 1 195.17 93.75a6 6 0 0 0 4.69 2.25a6 6 0 0 0 4.67-9.75a265 265 0 0 0-18.69-20.94A191 191 0 0 1 232 190a6 6 0 0 0 0-12a199 199 0 0 0-33.21 2.79q-9.63-8.65-20-16.25A218.7 218.7 0 0 1 232 158m-106-23.44V102h36v21.46a259 259 0 0 0-33.93 12ZM86 83l58-43.5L202 83v32.71a261 261 0 0 0-28 4.73V96a6 6 0 0 0-6-6h-48a6 6 0 0 0-6 6v33.85a259 259 0 0 0-28-8.46Zm49.17 136.32a6 6 0 0 1-8.32 1.68A185.14 185.14 0 0 0 24 190a6 6 0 0 1 0-12a197.1 197.1 0 0 1 109.49 33a6 6 0 0 1 1.68 8.32m49.8-7.61a6 6 0 1 1-8.4 8.57A216.8 216.8 0 0 0 24 158a6 6 0 0 1 0-12a228.74 228.74 0 0 1 161 65.71Z"></svg:path>`,
})
export class PhFarmLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFarmThinIcon],svg[ph-farm-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 156a4 4 0 0 0 0-8a228.1 228.1 0 0 0-66.42 9.84a257 257 0 0 0-27.66-15.67A250.1 250.1 0 0 1 232 124a4 4 0 0 0 0-8q-10.06 0-20 .76V80a4 4 0 0 0-1.6-3.2l-64-48a4 4 0 0 0-4.8 0l-64 48A4 4 0 0 0 76 80v41.2a261.7 261.7 0 0 0-52-5.2a4 4 0 0 0 0 8a251 251 0 0 1 196.73 94.5a4 4 0 0 0 6.24-5a263 263 0 0 0-21.44-23.64A190 190 0 0 1 232 188a4 4 0 0 0 0-8a198 198 0 0 0-33.84 2.92a261 261 0 0 0-24-19.25A220.5 220.5 0 0 1 232 156m-68-31a260 260 0 0 0-35.93 12.65c-1.36-.58-2.71-1.18-4.07-1.74V100h40ZM84 82l60-45l60 45v35.49a259 259 0 0 0-32 5.45V96a4 4 0 0 0-4-4h-48a4 4 0 0 0-4 4v36.71A259 259 0 0 0 84 123Zm49.5 136.21a4 4 0 0 1-5.55 1.12A187.1 187.1 0 0 0 24 188a4 4 0 0 1 0-8a195.1 195.1 0 0 1 108.38 32.67a4 4 0 0 1 1.12 5.54m50.07-5.07a4 4 0 0 1-5.6 5.72A218.76 218.76 0 0 0 24 156a4 4 0 0 1 0-8a226.7 226.7 0 0 1 159.57 65.14"></svg:path>`,
})
export class PhFarmThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardIcon],svg[ph-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248.67 114.66L160.48 58.5A15.91 15.91 0 0 0 136 71.84v37.3L56.48 58.5A15.91 15.91 0 0 0 32 71.84v112.32a15.92 15.92 0 0 0 24.48 13.34L136 146.86v37.3a15.92 15.92 0 0 0 24.48 13.34l88.19-56.16a15.8 15.8 0 0 0 0-26.68M48 183.94V72.07L135.82 128Zm104 0V72.07L239.82 128Z"></svg:path>`,
})
export class PhFastForwardIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardBoldIcon],svg[ph-fast-forward-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.81 111.29l-88.18-56.17A19.91 19.91 0 0 0 128 71.84v30L54.63 55.12A19.91 19.91 0 0 0 24 71.84v112.32a19.93 19.93 0 0 0 30.63 16.72L128 154.15v30a19.93 19.93 0 0 0 30.63 16.72l88.18-56.17a19.79 19.79 0 0 0 0-33.42ZM48 176.64V79.36L124.38 128Zm104 0V79.36L228.38 128Z"></svg:path>`,
})
export class PhFastForwardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardCircleIcon],svg[ph-fast-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m68.8-94.4l-48-36A8 8 0 0 0 136 92v72a8 8 0 0 0 12.8 6.4l48-36a8 8 0 0 0 0-12.8M152 148v-40l26.67 20Zm-19.2-26.4l-48-36A8 8 0 0 0 72 92v72a8 8 0 0 0 12.8 6.4l48-36a8 8 0 0 0 0-12.8M88 148v-40l26.67 20Z"></svg:path>`,
})
export class PhFastForwardCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardCircleBoldIcon],svg[ph-fast-forward-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 128a12 12 0 0 1-4.5 9.37l-40 32A12 12 0 0 1 132 160v-19.83l-36.5 29.2A12 12 0 0 1 76 160V96a12 12 0 0 1 19.5-9.37l36.5 29.2V96a12 12 0 0 1 19.5-9.37l40 32A12 12 0 0 1 196 128m40 0A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84"></svg:path>`,
})
export class PhFastForwardCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardCircleDuotoneIcon],svg[ph-fast-forward-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32a96 96 0 1 0 96 96a96 96 0 0 0-96-96M80 164V92l48 36Zm64 0V92l48 36Z" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m68.8-94.4l-48-36A8 8 0 0 0 136 92v72a8 8 0 0 0 12.8 6.4l48-36a8 8 0 0 0 0-12.8M152 148v-40l26.67 20Zm-19.2-26.4l-48-36A8 8 0 0 0 72 92v72a8 8 0 0 0 12.8 6.4l48-36a8 8 0 0 0 0-12.8M88 148v-40l26.67 20Z"></svg:path></svg:g>`,
})
export class PhFastForwardCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardCircleFillIcon],svg[ph-fast-forward-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m68.8 110.4l-48 36a8 8 0 0 1-4.8 1.6a8 8 0 0 1-8-8v-36a8 8 0 0 1-3.2 6.4l-48 36A8 8 0 0 1 80 172a8 8 0 0 1-8-8V92a8 8 0 0 1 12.8-6.4l48 36a8 8 0 0 1 3.2 6.4V92a8 8 0 0 1 12.8-6.4l48 36a8 8 0 0 1 0 12.8"></svg:path>`,
})
export class PhFastForwardCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardCircleLightIcon],svg[ph-fast-forward-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m63.6-94.8l-48-36A6 6 0 0 0 134 92v30L87.6 87.2A6 6 0 0 0 78 92v72a6 6 0 0 0 9.6 4.8L134 134v30a6 6 0 0 0 9.6 4.8l48-36a6 6 0 0 0 0-9.6M90 152v-48l32 24Zm56 0v-48l32 24Z"></svg:path>`,
})
export class PhFastForwardCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardCircleThinIcon],svg[ph-fast-forward-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m62.4-95.2l-48-36A4 4 0 0 0 136 92v72a4 4 0 0 0 2.21 3.58a4.05 4.05 0 0 0 1.79.42a4 4 0 0 0 2.4-.8l48-36a4 4 0 0 0 0-6.4M144 156v-56l37.33 28Zm-9.6-31.2l-48-36A4 4 0 0 0 80 92v72a4 4 0 0 0 2.21 3.58A4.05 4.05 0 0 0 84 168a4 4 0 0 0 2.4-.8l48-36a4 4 0 0 0 0-6.4M88 156v-56l37.33 28Z"></svg:path>`,
})
export class PhFastForwardCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardDuotoneIcon],svg[ph-fast-forward-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M144 128a7.76 7.76 0 0 1-3.63 6.59l-88.19 56.15A7.91 7.91 0 0 1 40 184.15V71.85a7.91 7.91 0 0 1 12.18-6.59l88.19 56.15A7.76 7.76 0 0 1 144 128m100.37-6.59l-88.19-56.15A7.91 7.91 0 0 0 144 71.85v112.3a7.91 7.91 0 0 0 12.18 6.59l88.19-56.15a7.8 7.8 0 0 0 0-13.18" opacity=".2"></svg:path><svg:path d="M248.67 114.66L160.48 58.5A15.91 15.91 0 0 0 136 71.84v37.3L56.48 58.5A15.91 15.91 0 0 0 32 71.84v112.32a15.92 15.92 0 0 0 24.48 13.34L136 146.86v37.3a15.92 15.92 0 0 0 24.48 13.34l88.19-56.16a15.8 15.8 0 0 0 0-26.68M48 183.94V72.07L135.82 128Zm104 0V72.07L239.82 128Z"></svg:path></svg:g>`,
})
export class PhFastForwardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardFillIcon],svg[ph-fast-forward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 128a15.76 15.76 0 0 1-7.33 13.34l-88.19 56.16A15.91 15.91 0 0 1 136 184.16v-37.3L56.48 197.5A15.91 15.91 0 0 1 32 184.16V71.84A15.91 15.91 0 0 1 56.48 58.5L136 109.14v-37.3a15.91 15.91 0 0 1 24.48-13.34l88.19 56.16A15.76 15.76 0 0 1 256 128"></svg:path>`,
})
export class PhFastForwardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardLightIcon],svg[ph-fast-forward-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m247.59 116.35l-88.18-56.17a14 14 0 0 0-14.22-.46A13.83 13.83 0 0 0 138 71.84v41L55.41 60.18a14 14 0 0 0-14.22-.46A13.83 13.83 0 0 0 34 71.84v112.32a13.83 13.83 0 0 0 7.19 12.12a14 14 0 0 0 14.22-.46L138 143.21v40.95a13.83 13.83 0 0 0 7.19 12.12a14 14 0 0 0 14.22-.46l88.18-56.17a13.79 13.79 0 0 0 0-23.3m-110.44 13.18L49 185.69a1.9 1.9 0 0 1-2 .06a1.73 1.73 0 0 1-1-1.59V71.84a1.73 1.73 0 0 1 1-1.59a2 2 0 0 1 1-.26a1.87 1.87 0 0 1 1 .32l88.19 56.16a1.8 1.8 0 0 1 0 3.06Zm104 0L153 185.69a1.9 1.9 0 0 1-2 .06a1.73 1.73 0 0 1-1-1.59V71.84a1.73 1.73 0 0 1 1-1.59a2 2 0 0 1 1-.26a1.87 1.87 0 0 1 1 .32l88.19 56.16a1.8 1.8 0 0 1 0 3.06Z"></svg:path>`,
})
export class PhFastForwardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardThinIcon],svg[ph-fast-forward-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.52 118l-88.19-56.13a12 12 0 0 0-12.18-.39A11.66 11.66 0 0 0 140 71.84v44.59L54.33 61.87a12 12 0 0 0-12.18-.39A11.66 11.66 0 0 0 36 71.84v112.32a11.66 11.66 0 0 0 6.15 10.36a12 12 0 0 0 12.18-.39L140 139.57v44.59a11.66 11.66 0 0 0 6.15 10.36a12 12 0 0 0 12.18-.39L246.52 138a11.81 11.81 0 0 0 0-19.94Zm-108.3 13.19L50 187.38a3.91 3.91 0 0 1-4 .13a3.76 3.76 0 0 1-2-3.35V71.84a3.76 3.76 0 0 1 2-3.35a4 4 0 0 1 1.91-.5a3.94 3.94 0 0 1 2.13.63l88.18 56.16a3.8 3.8 0 0 1 0 6.44Zm104 0L154 187.38a3.91 3.91 0 0 1-4 .13a3.76 3.76 0 0 1-2-3.35V71.84a3.76 3.76 0 0 1 2-3.35a4 4 0 0 1 1.91-.5a3.94 3.94 0 0 1 2.13.63l88.18 56.16a3.8 3.8 0 0 1 0 6.44Z"></svg:path>`,
})
export class PhFastForwardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFeatherIcon],svg[ph-feather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.28 34.75a64 64 0 0 0-90.49 0L60.69 104A15.9 15.9 0 0 0 56 115.31v73.38l-29.66 29.65a8 8 0 0 0 11.32 11.32L67.32 200h73.38a15.92 15.92 0 0 0 11.3-4.68l69.23-70a64 64 0 0 0 .05-90.57m-79.21 11.31A48 48 0 0 1 211.79 112h-56.46l34.35-34.34a8 8 0 0 0-11.32-11.32L120 124.69V67.87ZM72 115.35l32-31.67v57l-32 32ZM140.7 184H83.32l56-56h56.74Z"></svg:path>`,
})
export class PhFeatherIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFeatherBoldIcon],svg[ph-feather-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.11 31.92a68 68 0 0 0-96.11-.05l-70.12 69.3A19.9 19.9 0 0 0 52 115.31V187l-28.48 28.51a12 12 0 0 0 17 17L69 204h71.7a19.87 19.87 0 0 0 14.15-5.86h.05l69.21-70a68.06 68.06 0 0 0 0-96.22m-79.21 17A44 44 0 0 1 210 108h-45l27.52-27.51a12 12 0 0 0-17-17L124 115V69.54ZM76 117l24-23.72V139l-24 24Zm63 63H93l48-48h45.5Z"></svg:path>`,
})
export class PhFeatherBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFeatherDuotoneIcon],svg[ph-feather-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m215.8 119.6l-69.26 70.06a8 8 0 0 1-5.65 2.34H64.2v-76.69a8 8 0 0 1 2.34-5.65l45.66-45.14V144l24-24Z" opacity=".2"></svg:path><svg:path d="M221.28 34.75a64 64 0 0 0-90.49 0L60.69 104A15.9 15.9 0 0 0 56 115.31v73.38l-29.66 29.65a8 8 0 0 0 11.32 11.32L67.32 200h73.38a15.92 15.92 0 0 0 11.3-4.68l69.23-70a64 64 0 0 0 .05-90.57m-79.21 11.31A48 48 0 0 1 211.79 112h-56.46l34.35-34.34a8 8 0 0 0-11.32-11.32L120 124.69V67.87ZM72 115.35l32-31.67v57l-32 32ZM140.7 184H83.32l56-56h56.74Z"></svg:path></svg:g>`,
})
export class PhFeatherDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFeatherFillIcon],svg[ph-feather-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m211.84 134.81l-59.79 60.47a15.75 15.75 0 0 1-11.2 4.68H75.32l-29.66 29.7a8 8 0 0 1-11.32-11.32l22.59-22.58L124.7 128H209a4 4 0 0 1 2.84 6.81m4.86-104.24a64 64 0 0 0-85.9 4.14l-9.6 9.48A4 4 0 0 0 120 47v63l55-55a8 8 0 0 1 11.31 11.31L140.71 112h88.38a4 4 0 0 0 3.56-2.16a64.08 64.08 0 0 0-15.95-79.27M62.83 167.23L104 126.06v-55.3a4 4 0 0 0-6.81-2.84L60.69 104A15.9 15.9 0 0 0 56 115.31v49.09a4 4 0 0 0 6.83 2.83"></svg:path>`,
})
export class PhFeatherFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFeatherLightIcon],svg[ph-feather-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 80a62 62 0 0 0-105.82-43.86L62.1 105.41a13.94 13.94 0 0 0-4.1 9.9v74.21l-30.24 30.24a6 6 0 1 0 8.48 8.48L66.48 198h74.21a13.94 13.94 0 0 0 9.9-4.1l68.83-69.63l.39-.4A61.6 61.6 0 0 0 238 80m-97.36-35.36a50 50 0 0 1 72 69.36h-62.16l37.76-37.76a6 6 0 0 0-8.48-8.48l-48 48L118 129.52V67ZM70 115.31a2 2 0 0 1 .56-1.39l35.44-35v62.63l-36 36Zm72.09 70.11a2 2 0 0 1-1.4.58H78.48l37.76-37.75L138.48 126h62.35Z"></svg:path>`,
})
export class PhFeatherLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFeatherThinIcon],svg[ph-feather-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 80a60 60 0 0 0-102.41-42.44l-70.07 69.27a11.9 11.9 0 0 0-3.52 8.48v75l-30.83 30.86a4 4 0 0 0 5.66 5.66L65.66 196h75a12 12 0 0 0 8.48-3.51L218 122.83l.4-.4A59.63 59.63 0 0 0 236 80m-96.77-36.77A52 52 0 0 1 213.5 116h-67.84l41.17-41.17a4 4 0 1 0-5.66-5.66L116 134.34V66.19ZM68 115.31a4 4 0 0 1 1.16-2.81L108 74.1v68.24l-40 40Zm75.51 71.52a4 4 0 0 1-2.82 1.17h-67l64-64h68Z"></svg:path>`,
})
export class PhFeatherThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFediverseLogoIcon],svg[ph-fediverse-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 96a27.8 27.8 0 0 0-10.51 2L171 59.94A28 28 0 1 0 120 44a29 29 0 0 0 .15 2.94L73.68 66.3a28 28 0 1 0-28.6 44.83l1.85 46.38a28 28 0 1 0 32.74 41.42L128 212.47a28 28 0 1 0 49.13-18.79l27.21-42.75A28 28 0 1 0 212 96m-56 88h-.89l-16.18-48.53l46.65-2.22a27.9 27.9 0 0 0 5.28 9L163.65 185a28 28 0 0 0-7.65-1m-93.08-27.13l-1.85-46.38a28 28 0 0 0 10.12-6.13L113.72 129l-41.46 32.22a28 28 0 0 0-9.34-4.35M149.57 72a27.8 27.8 0 0 0 8.94-2L189 108.06a27.9 27.9 0 0 0-4.18 9.22l-46.57 2.22ZM82.09 173.85L124 141.26l15.94 47.83a28.2 28.2 0 0 0-7.6 8L84 183.53a28 28 0 0 0-1.91-9.68M148 32a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-21.68 29.7a28.4 28.4 0 0 0 7.68 6.54l-11.3 47.45l-43.47-25.17A28 28 0 0 0 80 84a29 29 0 0 0-.15-2.94ZM40 84a12 12 0 1 1 12 12a12 12 0 0 1-12-12m16 112a12 12 0 1 1 12-12a12 12 0 0 1-12 12m100 28a12 12 0 1 1 12-12a12 12 0 0 1-12 12m56-88a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhFediverseLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFediverseLogoBoldIcon],svg[ph-fediverse-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 92a31.9 31.9 0 0 0-9.16 1.34l-27-33.68A32 32 0 1 0 116 44v.33L74.75 61.52a32 32 0 1 0-33.55 52.6l1.62 40.73a32 32 0 1 0 38.49 48.7l42.89 12a32 32 0 1 0 57.8-22.12l24.16-38a31.7 31.7 0 0 0 5.8.54a32 32 0 0 0 0-64ZM71.64 109.24l34.93 20.22L72 156.33a31.7 31.7 0 0 0-5.24-2.45l-1.62-40.73a32.3 32.3 0 0 0 6.5-3.91m81.16-33.6a33 33 0 0 0 4.36-1l27 33.68a33 33 0 0 0-2.31 5.08l-38.43 1.83Zm-66 99.62l35.2-27.37l13.26 39.79a32.6 32.6 0 0 0-4.55 4.77l-42.89-12a33 33 0 0 0-1.04-5.19Zm71.2 4.81l-13.62-40.84L183 137.4a31.7 31.7 0 0 0 3 5.17l-24.16 38a32 32 0 0 0-3.84-.5M148 36a8 8 0 1 1-8 8a8 8 0 0 1 8-8m-22.75 30.48a33.5 33.5 0 0 0 4.21 3.58l-9.4 39.48l-36.38-21.06A31.6 31.6 0 0 0 84 84v-.33ZM52 76a8 8 0 1 1-8 8a8 8 0 0 1 8-8m4 116a8 8 0 1 1 8-8a8 8 0 0 1-8 8m100 28a8 8 0 1 1 8-8a8 8 0 0 1-8 8m56-88a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhFediverseLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFediverseLogoDuotoneIcon],svg[ph-fediverse-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M148 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20m64 40a20 20 0 1 0 20 20a20 20 0 0 0-20-20m-56 88a20 20 0 1 0 20 20a20 20 0 0 0-20-20M56 164a20 20 0 1 0 20 20a20 20 0 0 0-20-20m-4-60a20 20 0 1 0-20-20a20 20 0 0 0 20 20" opacity=".2"></svg:path><svg:path d="M212 96a27.8 27.8 0 0 0-10.51 2L171 59.94A28 28 0 1 0 120 44a29 29 0 0 0 .15 2.94L73.68 66.3a28 28 0 1 0-28.6 44.83l1.85 46.38a28 28 0 1 0 32.74 41.42L128 212.47a28 28 0 1 0 49.13-18.79l27.21-42.75A28 28 0 1 0 212 96m-56 88h-.89l-16.18-48.53l46.65-2.22a27.9 27.9 0 0 0 5.28 9L163.65 185a28 28 0 0 0-7.65-1m-93.08-27.13l-1.85-46.38a28 28 0 0 0 10.12-6.13L113.72 129l-41.46 32.22a28 28 0 0 0-9.34-4.35M149.57 72a27.8 27.8 0 0 0 8.94-2L189 108.06a27.9 27.9 0 0 0-4.18 9.22l-46.57 2.22ZM82.09 173.85L124 141.26l15.94 47.83a28.2 28.2 0 0 0-7.6 8L84 183.53a28 28 0 0 0-1.91-9.68M148 32a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-21.68 29.7a28.4 28.4 0 0 0 7.68 6.54l-11.3 47.45l-43.47-25.17A28 28 0 0 0 80 84a29 29 0 0 0-.15-2.94ZM40 84a12 12 0 1 1 12 12a12 12 0 0 1-12-12m16 112a12 12 0 1 1 12-12a12 12 0 0 1-12 12m100 28a12 12 0 1 1 12-12a12 12 0 0 1-12 12m56-88a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path></svg:g>`,
})
export class PhFediverseLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFediverseLogoFillIcon],svg[ph-fediverse-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 96a27.8 27.8 0 0 0-10.51 2L171 59.94A28 28 0 1 0 120 44a29 29 0 0 0 .15 2.94L73.68 66.3a28 28 0 1 0-28.6 44.83l1.85 46.38a28 28 0 1 0 32.74 41.42L128 212.47a28 28 0 1 0 49.13-18.79l27.21-42.75A28 28 0 1 0 212 96m-140.81 8.36L113.72 129l-41.46 32.22a28 28 0 0 0-9.34-4.35l-1.85-46.38a28 28 0 0 0 10.12-6.13M149.57 72a27.8 27.8 0 0 0 8.94-2L189 108.06a27.9 27.9 0 0 0-4.18 9.22l-46.57 2.22ZM82.09 173.85L124 141.26l15.94 47.83a28.2 28.2 0 0 0-7.6 8L84 183.53a28 28 0 0 0-1.91-9.68M156 184h-.89l-16.18-48.53l46.65-2.22a27.9 27.9 0 0 0 5.28 9L163.65 185a28 28 0 0 0-7.65-1M126.32 61.7a28.4 28.4 0 0 0 7.68 6.54l-11.3 47.45l-43.47-25.17A28 28 0 0 0 80 84a29 29 0 0 0-.15-2.94Z"></svg:path>`,
})
export class PhFediverseLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFediverseLogoLightIcon],svg[ph-fediverse-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 98a25.85 25.85 0 0 0-11.11 2.5L168.48 60A26 26 0 1 0 122 44a26 26 0 0 0 .34 4.19L73 68.74a26 26 0 1 0-26 40.78L49 159a26 26 0 1 0 29.74 37.6L130 211v1a26 26 0 1 0 44.63-18.11l28.85-45.33A26 26 0 1 0 212 98m-56 88c-.78 0-1.55 0-2.31.11l-17.49-52.49l50.8-2.42a26.1 26.1 0 0 0 6.35 10.91l-28.85 45.33A25.9 25.9 0 0 0 156 186m-83.73-22.26A26 26 0 0 0 61 158.48L59 109a26 26 0 0 0 11.86-7.17l46.42 26.87ZM148 70a25.85 25.85 0 0 0 11.11-2.5l32.41 40.5a25.9 25.9 0 0 0-5.07 11.2l-50.76 2.42zm0-40a14 14 0 1 1-14 14a14 14 0 0 1 14-14m-21 29.26a26.2 26.2 0 0 0 9.34 7.95L124 118.77L76.9 91.48a26 26 0 0 0 .76-11.67ZM38 84a14 14 0 1 1 14 14a14 14 0 0 1-14-14m18 114a14 14 0 1 1 14-14a14 14 0 0 1-14 14m26-13v-1a25.9 25.9 0 0 0-2.35-10.79L125 137.94l17.32 52a26.2 26.2 0 0 0-9.05 9.49Zm74 41a14 14 0 1 1 14-14a14 14 0 0 1-14 14m56-88a14 14 0 1 1 14-14a14 14 0 0 1-14 14"></svg:path>`,
})
export class PhFediverseLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFediverseLogoThinIcon],svg[ph-fediverse-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 100a23.8 23.8 0 0 0-11.65 3L165.9 60a24 24 0 1 0-41.28-10.56L72.29 71.21A24 24 0 1 0 49 107.8l2.11 52.71a24 24 0 1 0 26.59 33.72l54.43 15.24c-.08.83-.13 1.68-.13 2.53a24 24 0 1 0 40.07-17.81l30.6-48.08A23.8 23.8 0 0 0 212 148a24 24 0 0 0 0-48m-23.82 21.13l-55.06 2.62l13.29-55.81q.79.06 1.59.06a23.8 23.8 0 0 0 11.65-3l34.45 43a23.9 23.9 0 0 0-5.92 13.13m-116 45.19a23.9 23.9 0 0 0-13.16-6.12l-2.11-52.71a24.05 24.05 0 0 0 13.52-8.18l50.4 29.18ZM148 28a16 16 0 1 1-16 16a16 16 0 0 1 16-16m-20.29 28.79a24 24 0 0 0 10.92 9.3l-13.28 55.76l-50.87-29.46A23.8 23.8 0 0 0 76 84a24 24 0 0 0-.62-5.41ZM36 84a16 16 0 1 1 16 16a16 16 0 0 1-16-16m20 116a16 16 0 1 1 16-16a16 16 0 0 1-16 16m23.87-13.47c.08-.83.13-1.68.13-2.53a23.86 23.86 0 0 0-2.87-11.37l48.86-38l18.73 56.19a24.17 24.17 0 0 0-10.42 11ZM156 228a16 16 0 1 1 16-16a16 16 0 0 1-16 16m9.33-38.11A23.8 23.8 0 0 0 156 188a25 25 0 0 0-3.69.28l-18.85-56.54l55.1-2.62a23.92 23.92 0 0 0 7.37 12.69ZM212 140a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhFediverseLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFigmaLogoIcon],svg[ph-figma-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 96a40 40 0 0 0-24-72H96a40 40 0 0 0-24 72a40 40 0 0 0 1.37 65A44 44 0 1 0 144 196v-36a40 40 0 1 0 48-64m0-32a24 24 0 0 1-24 24h-24V40h24a24 24 0 0 1 24 24M72 64a24 24 0 0 1 24-24h32v48H96a24 24 0 0 1-24-24m24 88a24 24 0 0 1 0-48h32v48zm32 44a28 28 0 1 1-28-28h28Zm40-44a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhFigmaLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFigmaLogoBoldIcon],svg[ph-figma-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.15 96A44 44 0 0 0 168 20H96a44 44 0 0 0-30.15 76a43.9 43.9 0 0 0 1.23 65.12A48 48 0 1 0 148 196v-28.83A44 44 0 0 0 198.15 96M188 64a20 20 0 0 1-20 20h-20V44h20a20 20 0 0 1 20 20M76 64a20 20 0 0 1 20-20h28v40H96a20 20 0 0 1-20-20m20 84a20 20 0 0 1 0-40h28v40zm28 48a24 24 0 1 1-24-24h24Zm44-48a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhFigmaLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFigmaLogoDuotoneIcon],svg[ph-figma-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 128a32 32 0 1 1-32-32a32 32 0 0 1 32 32M96 96h40V32H96a32 32 0 0 0 0 64M64 196a36 36 0 0 0 72 0v-36h-36a36 36 0 0 0-36 36" opacity=".2"></svg:path><svg:path d="M192 96a40 40 0 0 0-24-72H96a40 40 0 0 0-24 72a40 40 0 0 0 1.37 65A44 44 0 1 0 144 196v-36a40 40 0 1 0 48-64m0-32a24 24 0 0 1-24 24h-24V40h24a24 24 0 0 1 24 24M72 64a24 24 0 0 1 24-24h32v48H96a24 24 0 0 1-24-24m24 88a24 24 0 0 1 0-48h32v48zm32 44a28 28 0 1 1-28-28h28Zm40-44a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path></svg:g>`,
})
export class PhFigmaLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFigmaLogoFillIcon],svg[ph-figma-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 96a40 40 0 0 0-24-72H96a40 40 0 0 0-24 72a40 40 0 0 0 1.37 65A44 44 0 1 0 144 196v-36a40 40 0 1 0 48-64m-64 56H96a24 24 0 0 1 0-48h32Zm40-64h-24V40h24a24 24 0 0 1 0 48"></svg:path>`,
})
export class PhFigmaLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFigmaLogoLightIcon],svg[ph-figma-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.45 96A38 38 0 0 0 168 26H96a38 38 0 0 0-20.45 70A38 38 0 0 0 77 160.89A42 42 0 1 0 142 196v-40.32A38 38 0 1 0 188.45 96M194 64a26 26 0 0 1-26 26h-26V38h26a26 26 0 0 1 26 26M70 64a26 26 0 0 1 26-26h34v52H96a26 26 0 0 1-26-26m26 90a26 26 0 0 1 0-52h34v52zm34 42a30 30 0 1 1-30-30h30Zm38-42a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhFigmaLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFigmaLogoThinIcon],svg[ph-figma-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184.46 96A36 36 0 0 0 168 28H96a36 36 0 0 0-16.46 68a36 36 0 0 0 1.56 64.76A40 40 0 1 0 140 196v-45.41A36 36 0 1 0 184.46 96M196 64a28 28 0 0 1-28 28h-28V36h28a28 28 0 0 1 28 28m-56 36h5.41a36.4 36.4 0 0 0-5.41 5.41ZM68 64a28 28 0 0 1 28-28h36v56H96a28 28 0 0 1-28-28m64 132a32 32 0 1 1-32-32h32Zm0-40H96a28 28 0 0 1 0-56h36Zm36 0a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhFigmaLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileIcon],svg[ph-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48z"></svg:path>`,
})
export class PhFileIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArchiveIcon],svg[ph-file-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216h-88v-16h8a8 8 0 0 0 0-16h-8v-16h8a8 8 0 0 0 0-16h-8v-16h8a8 8 0 0 0 0-16h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v16h-8a8 8 0 0 0 0 16h8v16h-8a8 8 0 0 0 0 16h8v16H56V40h88v48a8 8 0 0 0 8 8h48z"></svg:path>`,
})
export class PhFileArchiveIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArchiveBoldIcon],svg[ph-file-archive-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.51l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49M183 80h-23V57Zm-67 132v-20h8a12 12 0 0 0 0-24h-8v-16h8a12 12 0 0 0 0-24h-8v-12a12 12 0 0 0-24 0v12h-8a12 12 0 0 0 0 24h8v16h-8a12 12 0 0 0 0 24h8v20H60V44h76v48a12 12 0 0 0 12 12h48v108Z"></svg:path>`,
})
export class PhFileArchiveBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArchiveDuotoneIcon],svg[ph-file-archive-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216h-88v-16h8a8 8 0 0 0 0-16h-8v-16h8a8 8 0 0 0 0-16h-8v-16h8a8 8 0 0 0 0-16h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v16h-8a8 8 0 0 0 0 16h8v16h-8a8 8 0 0 0 0 16h8v16H56V40h88v48a8 8 0 0 0 8 8h48z"></svg:path></svg:g>`,
})
export class PhFileArchiveDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArchiveFillIcon],svg[ph-file-archive-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h36a4 4 0 0 0 4-4v-20h-7.73a8.17 8.17 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h8v-16h-7.73a8.17 8.17 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h8v-16h-7.73a8.17 8.17 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h8v-7.73a8.18 8.18 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v8h7.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53h-8v16h7.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53h-8v16h7.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53h-8v20a4 4 0 0 0 4 4h84a16 16 0 0 0 16-16V88a8 8 0 0 0-2.28-5.66M152 88V44l44 44Z"></svg:path>`,
})
export class PhFileArchiveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArchiveLightIcon],svg[ph-file-archive-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218h-90v-20h10a6 6 0 0 0 0-12h-10v-20h10a6 6 0 0 0 0-12h-10v-20h10a6 6 0 0 0 0-12h-10v-10a6 6 0 0 0-12 0v10H88a6 6 0 0 0 0 12h10v20H88a6 6 0 0 0 0 12h10v20H88a6 6 0 0 0 0 12h10v20H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhFileArchiveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArchiveThinIcon],svg[ph-file-archive-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220h-92v-24h12a4 4 0 0 0 0-8h-12v-24h12a4 4 0 0 0 0-8h-12v-24h12a4 4 0 0 0 0-8h-12v-12a4 4 0 0 0-8 0v12H88a4 4 0 0 0 0 8h12v24H88a4 4 0 0 0 0 8h12v24H88a4 4 0 0 0 0 8h12v24H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhFileArchiveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowDownIcon],svg[ph-file-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-42.34-61.66a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L120 164.69V120a8 8 0 0 1 16 0v44.69l10.34-10.35a8 8 0 0 1 11.32 0"></svg:path>`,
})
export class PhFileArrowDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowDownBoldIcon],svg[ph-file-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48M160 57l23 23h-23ZM60 212V44h76v48a12 12 0 0 0 12 12h48v108Zm100.49-60.49a12 12 0 0 1 0 17l-24 24a12 12 0 0 1-17 0l-24-24a12 12 0 0 1 17-17L116 155v-31a12 12 0 0 1 24 0v31l3.51-3.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhFileArrowDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowDownDuotoneIcon],svg[ph-file-arrow-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-42.34-61.66a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L120 164.69V120a8 8 0 0 1 16 0v44.69l10.34-10.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhFileArrowDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowDownFillIcon],svg[ph-file-arrow-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66m-56 83.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L120 164.69V120a8 8 0 0 1 16 0v44.69l10.34-10.35a8 8 0 0 1 11.32 11.32M152 88V44l44 44Z"></svg:path>`,
})
export class PhFileArrowDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowDownLightIcon],svg[ph-file-arrow-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2m-43.76-62.24a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L122 169.51V120a6 6 0 0 1 12 0v49.51l13.76-13.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhFileArrowDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowDownThinIcon],svg[ph-file-arrow-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4m-45.17-62.83a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66 0l-24-24a4 4 0 0 1 5.66-5.66L124 174.34V120a4 4 0 0 1 8 0v54.34l17.17-17.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhFileArrowDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowUpIcon],svg[ph-file-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-42.34-77.66a8 8 0 0 1-11.32 11.32L136 139.31V184a8 8 0 0 1-16 0v-44.69l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0Z"></svg:path>`,
})
export class PhFileArrowUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowUpBoldIcon],svg[ph-file-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48M183 80h-23V57ZM60 212V44h76v48a12 12 0 0 0 12 12h48v108Zm100.49-72.49a12 12 0 0 1-17 17L140 153v31a12 12 0 0 1-24 0v-31l-3.51 3.52a12 12 0 0 1-17-17l24-24a12 12 0 0 1 17 0Z"></svg:path>`,
})
export class PhFileArrowUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowUpDuotoneIcon],svg[ph-file-arrow-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-42.34-77.66a8 8 0 0 1-11.32 11.32L136 139.31V184a8 8 0 0 1-16 0v-44.69l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0Z"></svg:path></svg:g>`,
})
export class PhFileArrowUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowUpFillIcon],svg[ph-file-arrow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66m-56 67.32a8 8 0 0 1-11.32 0L136 139.31V184a8 8 0 0 1-16 0v-44.69l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0l24 24a8 8 0 0 1 0 11.32M152 88V44l44 44Z"></svg:path>`,
})
export class PhFileArrowUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowUpLightIcon],svg[ph-file-arrow-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2m-43.76-78.24a6 6 0 1 1-8.48 8.48L134 134.49V184a6 6 0 0 1-12 0v-49.51l-13.76 13.75a6 6 0 0 1-8.48-8.48l24-24a6 6 0 0 1 8.48 0Z"></svg:path>`,
})
export class PhFileArrowUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowUpThinIcon],svg[ph-file-arrow-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4m-45.17-78.83a4 4 0 0 1-5.66 5.66L132 129.66V184a4 4 0 0 1-8 0v-54.34l-17.17 17.17a4 4 0 0 1-5.66-5.66l24-24a4 4 0 0 1 5.66 0Z"></svg:path>`,
})
export class PhFileArrowUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileAudioIcon],svg[ph-file-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M99.06 128.61a8 8 0 0 0-8.72 1.73L68.69 152H48a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h20.69l21.65 21.66A8 8 0 0 0 104 224v-88a8 8 0 0 0-4.94-7.39M88 204.69l-10.34-10.35A8 8 0 0 0 72 192H56v-24h16a8 8 0 0 0 5.66-2.34L88 155.31ZM152 180a40.55 40.55 0 0 1-20 34.91a8 8 0 0 1-8-13.82a24.49 24.49 0 0 0 0-42.18a8 8 0 0 1 8-13.82A40.55 40.55 0 0 1 152 180m61.66-97.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v80a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-32a8 8 0 0 0 0 16h32a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160Z"></svg:path>`,
})
export class PhFileAudioIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileAudioBoldIcon],svg[ph-file-audio-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96.59 124.91a12 12 0 0 0-13.08 2.6L63 148H44a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h19l20.48 20.48A12 12 0 0 0 104 224v-88a12 12 0 0 0-7.41-11.09M80 195l-3.51-3.52A12 12 0 0 0 68 188H56v-16h12a12 12 0 0 0 8.49-3.51L80 165Zm80-15a44.55 44.55 0 0 1-21.95 38.36A12 12 0 1 1 126 197.64a20.51 20.51 0 0 0 0-35.28a12 12 0 1 1 12.1-20.72A44.55 44.55 0 0 1 160 180m56.49-100.49l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v72a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108h-16a12 12 0 0 0 0 24h20a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49M160 57l23 23h-23Z"></svg:path>`,
})
export class PhFileAudioBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileAudioDuotoneIcon],svg[ph-file-audio-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m72 160l24-24v88l-24-24H48v-40Zm80-128v56h56Z" opacity=".2"></svg:path><svg:path d="M99.06 128.61a8 8 0 0 0-8.72 1.73L68.69 152H48a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h20.69l21.65 21.66A8 8 0 0 0 104 224v-88a8 8 0 0 0-4.94-7.39M88 204.69l-10.34-10.35A8 8 0 0 0 72 192H56v-24h16a8 8 0 0 0 5.66-2.34L88 155.31ZM152 180a40.55 40.55 0 0 1-20 34.91a8 8 0 0 1-8-13.82a24.49 24.49 0 0 0 0-42.18a8 8 0 0 1 8-13.82A40.55 40.55 0 0 1 152 180m61.66-97.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v80a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-32a8 8 0 0 0 0 16h32a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160Z"></svg:path></svg:g>`,
})
export class PhFileAudioDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileAudioFillIcon],svg[ph-file-audio-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 180a40.55 40.55 0 0 1-20 34.91a8 8 0 0 1-8-13.82a24.49 24.49 0 0 0 0-42.18a8 8 0 0 1 8-13.82A40.55 40.55 0 0 1 152 180m-52.94-51.39a8 8 0 0 0-8.72 1.73L68.69 152H48a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h20.69l21.65 21.66A8 8 0 0 0 104 224v-88a8 8 0 0 0-4.94-7.39M216 88v128a16 16 0 0 1-16 16h-32a8 8 0 0 1 0-16h32V96h-48a8 8 0 0 1-8-8V40H56v80a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Z"></svg:path>`,
})
export class PhFileAudioFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileAudioLightIcon],svg[ph-file-audio-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M98.3 130.46a6 6 0 0 0-6.54 1.3L69.51 154H48a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6h21.51l22.25 22.24A6 6 0 0 0 102 224v-88a6 6 0 0 0-3.7-5.54m-8.3 79l-13.76-13.7A6 6 0 0 0 72 194H54v-28h18a6 6 0 0 0 4.24-1.76L90 150.49ZM150 180a38.53 38.53 0 0 1-19 33.18a6 6 0 0 1-6-10.36a26.5 26.5 0 0 0 0-45.64a6 6 0 0 1 6-10.36A38.53 38.53 0 0 1 150 180m62.24-96.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v80a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-32a6 6 0 0 0 0 12h32a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158Z"></svg:path>`,
})
export class PhFileAudioLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileAudioThinIcon],svg[ph-file-audio-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M97.53 132.3a4 4 0 0 0-4.36.87L70.34 156H48a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h22.34l22.83 22.83A4 4 0 0 0 100 224v-88a4 4 0 0 0-2.47-3.7m-5.53 82l-17.17-17.13A4 4 0 0 0 72 196H52v-32h20a4 4 0 0 0 2.83-1.17L92 145.66Zm56-34.3a36.52 36.52 0 0 1-18 31.45a4 4 0 0 1-4-6.9a28.5 28.5 0 0 0 0-49.1a4 4 0 0 1 4-6.9A36.52 36.52 0 0 1 148 180m62.83-94.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v80a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-32a4 4 0 0 0 0 8h32a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156Z"></svg:path>`,
})
export class PhFileAudioThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileBoldIcon],svg[ph-file-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48M160 57l23 23h-23ZM60 212V44h76v48a12 12 0 0 0 12 12h48v108Z"></svg:path>`,
})
export class PhFileBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCIcon],svg[ph-file-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 180c0 11 7.18 20 16 20a14.24 14.24 0 0 0 10.22-4.66a8 8 0 0 1 11.56 11.06A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30.06 30.06 0 0 1 21.78 9.6a8 8 0 0 1-11.56 11.06A14.24 14.24 0 0 0 64 160c-8.82 0-16 9-16 20m168-92v128a16 16 0 0 1-16 16h-80a8 8 0 0 1 0-16h80V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Z"></svg:path>`,
})
export class PhFileCIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCBoldIcon],svg[ph-file-c-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.51l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108h-72a12 12 0 0 0 0 24h76a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49M160 57l23 23h-23ZM48 180c0 8.67 5.5 16 12 16a10.27 10.27 0 0 0 7.33-3.43a12 12 0 1 1 17.34 16.6A34 34 0 0 1 60 220c-19.85 0-36-17.94-36-40s16.15-40 36-40a34 34 0 0 1 24.67 10.83a12 12 0 1 1-17.34 16.6A10.27 10.27 0 0 0 60 164c-6.5 0-12 7.33-12 16"></svg:path>`,
})
export class PhFileCBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCDuotoneIcon],svg[ph-file-c-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.22-4.66a8 8 0 0 1 11.56 11.06A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30.06 30.06 0 0 1 21.78 9.6a8 8 0 0 1-11.56 11.06A14.18 14.18 0 0 0 64 160c-8.82 0-16 9-16 20m168-92v128a16 16 0 0 1-16 16h-80a8 8 0 0 1 0-16h80V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Z"></svg:path></svg:g>`,
})
export class PhFileCDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCFillIcon],svg[ph-file-c-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 180c0 11 7.18 20 16 20a14.07 14.07 0 0 0 10.07-4.51a8.19 8.19 0 0 1 10.88-.9a8 8 0 0 1 .83 11.81A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30 30 0 0 1 21.39 9.19a8.26 8.26 0 0 1 .73 11.09a8 8 0 0 1-11.9.38A14.24 14.24 0 0 0 64 160c-8.82 0-16 9-16 20m168-92v128a16 16 0 0 1-16 16h-84a4 4 0 0 1-4-4V124a4 4 0 0 0-4-4H44a4 4 0 0 1-4-4V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-20 0l-44-44v44Z"></svg:path>`,
})
export class PhFileCFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCLightIcon],svg[ph-file-c-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 180c0 12.13 8.07 22 18 22a16.23 16.23 0 0 0 11.67-5.28a6 6 0 0 1 8.66 8.3A28.06 28.06 0 0 1 64 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a28.06 28.06 0 0 1 20.33 9a6 6 0 0 1-8.66 8.3A16.23 16.23 0 0 0 64 158c-9.93 0-18 9.87-18 22m168-92v128a14 14 0 0 1-14 14h-80a6 6 0 0 1 0-12h80a2 2 0 0 0 2-2V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88m-56-6h35.52L158 46.48Z"></svg:path>`,
})
export class PhFileCLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCSharpIcon],svg[ph-file-c-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 180c0 11 7.18 20 16 20a14.24 14.24 0 0 0 10.22-4.66a8 8 0 0 1 11.56 11.06A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30.06 30.06 0 0 1 21.78 9.6a8 8 0 0 1-11.56 11.06A14.24 14.24 0 0 0 64 160c-8.82 0-16 9-16 20m168-92v136a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Zm8 88v16h8a8 8 0 0 1 0 16h-8v8a8 8 0 0 1-16 0v-8h-16v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-16h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h16v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 0 16Zm-16 0h-16v16h16Z"></svg:path>`,
})
export class PhFileCSharpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCSharpBoldIcon],svg[ph-file-c-sharp-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.51l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v120a12 12 0 0 0 24 0V88a12 12 0 0 0-3.51-8.49M160 57l23 23h-23ZM40 180c0 8.67 5.5 16 12 16a10.27 10.27 0 0 0 7.33-3.43a12 12 0 1 1 17.34 16.6A34 34 0 0 1 52 220c-19.85 0-36-17.94-36-40s16.15-40 36-40a34 34 0 0 1 24.67 10.83a12 12 0 1 1-17.34 16.6A10.27 10.27 0 0 0 52 164c-6.5 0-12 7.33-12 16m132-8a12 12 0 0 0 0-24h-4v-4a12 12 0 0 0-24 0v4h-12v-4a12 12 0 0 0-24 0v4h-4a12 12 0 0 0 0 24h4v12h-4a12 12 0 0 0 0 24h4v4a12 12 0 0 0 24 0v-4h12v4a12 12 0 0 0 24 0v-4h4a12 12 0 0 0 0-24h-4v-12Zm-28 12h-12v-12h12Z"></svg:path>`,
})
export class PhFileCSharpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCSharpDuotoneIcon],svg[ph-file-c-sharp-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.22-4.66a8 8 0 0 1 11.56 11.06A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30.06 30.06 0 0 1 21.78 9.6a8 8 0 0 1-11.56 11.06A14.18 14.18 0 0 0 64 160c-8.82 0-16 9-16 20m168-92v136a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Zm8 88v16h8a8 8 0 0 1 0 16h-8v8a8 8 0 0 1-16 0v-8h-16v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-16h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h16v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 0 16Zm-16 0h-16v16h16Z"></svg:path></svg:g>`,
})
export class PhFileCSharpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCSharpFillIcon],svg[ph-file-c-sharp-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 180c0 11 7.18 20 16 20a14.07 14.07 0 0 0 10.07-4.51a8.19 8.19 0 0 1 10.88-.9a8 8 0 0 1 .83 11.81A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30 30 0 0 1 21.38 9.19a8.25 8.25 0 0 1 .74 11.09a8 8 0 0 1-11.9.38A14.24 14.24 0 0 0 64 160c-8.82 0-16 9-16 20m168-92v135.75a8.15 8.15 0 0 1-6.81 8.16A8 8 0 0 1 200 224V124a4 4 0 0 0-4-4H44a4 4 0 0 1-4-4V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-20 0l-44-44v44Zm-28 80v16h7.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53h-8v7.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8v-8H136v7.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8v-8h-7.73a8.17 8.17 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h8V168h-7.73a8.17 8.17 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h8v-7.73a8.17 8.17 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v8h16v-7.73a8.17 8.17 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v8h7.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53Zm-16 0h-16v16h16Z"></svg:path>`,
})
export class PhFileCSharpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCSharpLightIcon],svg[ph-file-c-sharp-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 180c0 12.13 8.07 22 18 22a16.23 16.23 0 0 0 11.67-5.28a6 6 0 0 1 8.66 8.3A28.06 28.06 0 0 1 64 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a28.06 28.06 0 0 1 20.33 9a6 6 0 0 1-8.66 8.3A16.23 16.23 0 0 0 64 158c-9.93 0-18 9.87-18 22m168-92v136a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88m-56-6h35.52L158 46.48Zm8 84v20h10a6 6 0 0 1 0 12h-10v10a6 6 0 0 1-12 0v-10h-20v10a6 6 0 0 1-12 0v-10h-10a6 6 0 0 1 0-12h10v-20h-10a6 6 0 0 1 0-12h10v-10a6 6 0 0 1 12 0v10h20v-10a6 6 0 0 1 12 0v10h10a6 6 0 0 1 0 12Zm-12 0h-20v20h20Z"></svg:path>`,
})
export class PhFileCSharpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCSharpThinIcon],svg[ph-file-c-sharp-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 180c0 13.23 9 24 20 24a18.15 18.15 0 0 0 13.11-5.9a4 4 0 1 1 5.78 5.54A26.1 26.1 0 0 1 64 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a26.1 26.1 0 0 1 18.89 8.36a4 4 0 1 1-5.78 5.54A18.15 18.15 0 0 0 64 156c-11 0-20 10.77-20 24m168-92v136a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-56-4h42.34L156 41.65Zm8 80v24h12a4 4 0 0 1 0 8h-12v12a4 4 0 0 1-8 0v-12h-24v12a4 4 0 0 1-8 0v-12h-12a4 4 0 0 1 0-8h12v-24h-12a4 4 0 0 1 0-8h12v-12a4 4 0 0 1 8 0v12h24v-12a4 4 0 0 1 8 0v12h12a4 4 0 0 1 0 8Zm-8 0h-24v24h24Z"></svg:path>`,
})
export class PhFileCSharpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCThinIcon],svg[ph-file-c-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 180c0 13.23 9 24 20 24a18.15 18.15 0 0 0 13.11-5.9a4 4 0 1 1 5.78 5.54A26.1 26.1 0 0 1 64 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a26.1 26.1 0 0 1 18.89 8.36a4 4 0 1 1-5.78 5.54A18.15 18.15 0 0 0 64 156c-11 0-20 10.77-20 24m168-92v128a12 12 0 0 1-12 12h-80a4 4 0 0 1 0-8h80a4 4 0 0 0 4-4V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-56-4h42.34L156 41.65Z"></svg:path>`,
})
export class PhFileCThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCloudIcon],svg[ph-file-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v88a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM108 128a52 52 0 0 0-48 32a36 36 0 0 0 0 72h48a52 52 0 0 0 0-104m0 88H60a20 20 0 0 1-3.81-39.64a8 8 0 0 0 16 .36a38 38 0 0 1 1.06-6.09a8 8 0 0 0 .27-1A36 36 0 1 1 108 216"></svg:path>`,
})
export class PhFileCloudIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCloudBoldIcon],svg[ph-file-cloud-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v84a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108h-16a12 12 0 0 0 0 24h20a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48M160 57l23 23h-23Zm-52 67a56 56 0 0 0-50.65 32.09A40 40 0 0 0 60 236h48a56 56 0 0 0 0-112m0 88H60a16 16 0 0 1-6.54-30.6a12 12 0 0 0 22.67-4.32a33 33 0 0 1 .92-5.3c.12-.36.22-.72.31-1.09A32 32 0 1 1 108 212"></svg:path>`,
})
export class PhFileCloudBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCloudDuotoneIcon],svg[ph-file-cloud-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Zm-100 48a44 44 0 0 0-42.34 32H60a28 28 0 0 0 0 56h48a44 44 0 0 0 0-88" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v88a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM108 128a52 52 0 0 0-48 32a36 36 0 0 0 0 72h48a52 52 0 0 0 0-104m0 88H60a20 20 0 0 1-3.81-39.64a8 8 0 0 0 16 .36a38 38 0 0 1 1.06-6.09a8 8 0 0 0 .27-1A36 36 0 1 1 108 216"></svg:path></svg:g>`,
})
export class PhFileCloudDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCloudFillIcon],svg[ph-file-cloud-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 181a52.06 52.06 0 0 1-52 51H60.72C40.87 232 24 215.77 24 195.92a36 36 0 0 1 19.28-31.79a4 4 0 0 1 5.77 4.33a63.5 63.5 0 0 0-1 11.15a8.22 8.22 0 0 0 7.5 8.39a8 8 0 0 0 8.45-8a47.55 47.55 0 0 1 4.37-20A48 48 0 0 1 160 181m56-93v128a16 16 0 0 1-16 16h-24a8 8 0 0 1 0-16h24V96h-48a8 8 0 0 1-8-8V40H56v88a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-27.31-8L160 51.31V80Z"></svg:path>`,
})
export class PhFileCloudFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCloudLightIcon],svg[ph-file-cloud-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v88a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-24a6 6 0 0 0 0 12h24a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM108 130a50 50 0 0 0-46.66 32H60a34 34 0 0 0 0 68h48a50 50 0 0 0 0-100m0 88H60a22 22 0 0 1-1.65-43.94c-.06.47-.1.93-.15 1.4a6 6 0 1 0 12 1.08a38.6 38.6 0 0 1 1.1-6.54a6 6 0 0 0 .24-.86A38 38 0 1 1 108 218"></svg:path>`,
})
export class PhFileCloudLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCloudThinIcon],svg[ph-file-cloud-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v88a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-24a4 4 0 0 0 0 8h24a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM108 132a47.72 47.72 0 0 0-45.3 32H60a32 32 0 0 0 0 64h48a48 48 0 0 0 0-96m0 88H60a24 24 0 0 1 0-48h.66c-.2 1.2-.35 2.41-.46 3.64a4 4 0 0 0 8 .72a41 41 0 0 1 1.23-6.92a5 5 0 0 0 .21-.73A40 40 0 1 1 108 220"></svg:path>`,
})
export class PhFileCloudThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCodeIcon],svg[ph-file-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M181.66 146.34a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L164.69 152l-18.35-18.34a8 8 0 0 1 11.32-11.32Zm-72-24a8 8 0 0 0-11.32 0l-24 24a8 8 0 0 0 0 11.32l24 24a8 8 0 0 0 11.32-11.32L91.31 152l18.35-18.34a8 8 0 0 0 0-11.32M216 88v128a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Zm40 136V96h-48a8 8 0 0 1-8-8V40H56v176z"></svg:path>`,
})
export class PhFileCodeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCodeBoldIcon],svg[ph-file-code-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180.49 143.51a12 12 0 0 1 0 17l-24 24a12 12 0 0 1-17-17L155 152l-15.52-15.51a12 12 0 1 1 17-17Zm-64-24a12 12 0 0 0-17 0l-24 24a12 12 0 0 0 0 17l24 24a12 12 0 0 0 17-17L101 152l15.52-15.51a12 12 0 0 0-.03-16.98M220 88v128a20 20 0 0 1-20 20H56a20 20 0 0 1-20-20V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.52l56 56A12 12 0 0 1 220 88m-60-31v23h23Zm36 155V104h-48a12 12 0 0 1-12-12V44H60v168Z"></svg:path>`,
})
export class PhFileCodeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCodeDuotoneIcon],svg[ph-file-code-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M181.66 146.34a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L164.69 152l-18.35-18.34a8 8 0 0 1 11.32-11.32Zm-72-24a8 8 0 0 0-11.32 0l-24 24a8 8 0 0 0 0 11.32l24 24a8 8 0 0 0 11.32-11.32L91.31 152l18.35-18.34a8 8 0 0 0 0-11.32M216 88v128a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Zm40 136V96h-48a8 8 0 0 1-8-8V40H56v176z"></svg:path></svg:g>`,
})
export class PhFileCodeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCodeFillIcon],svg[ph-file-code-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66m-104 88a8 8 0 0 1-11.32 11.32l-24-24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L91.31 152Zm72-12.68l-24 24a8 8 0 0 1-11.32-11.32L164.69 152l-18.35-18.34a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32M152 88V44l44 44Z"></svg:path>`,
})
export class PhFileCodeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCodeLightIcon],svg[ph-file-code-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180.24 147.76a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48-8.48L167.51 152l-19.75-19.76a6 6 0 1 1 8.48-8.48Zm-72-24a6 6 0 0 0-8.48 0l-24 24a6 6 0 0 0 0 8.48l24 24a6 6 0 1 0 8.48-8.48L88.49 152l19.75-19.76a6 6 0 0 0 0-8.48M214 88v128a14 14 0 0 1-14 14H56a14 14 0 0 1-14-14V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88m-56-6h35.52L158 46.48Zm44 134V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v176a2 2 0 0 0 2 2h144a2 2 0 0 0 2-2"></svg:path>`,
})
export class PhFileCodeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCodeThinIcon],svg[ph-file-code-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178.83 149.17a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L170.34 152l-21.17-21.17a4 4 0 1 1 5.66-5.66Zm-72-24a4 4 0 0 0-5.66 0l-24 24a4 4 0 0 0 0 5.66l24 24a4 4 0 1 0 5.66-5.66L85.66 152l21.17-21.17a4 4 0 0 0 0-5.66M212 88v128a12 12 0 0 1-12 12H56a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-56-4h42.34L156 41.65Zm48 132V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v176a4 4 0 0 0 4 4h144a4 4 0 0 0 4-4"></svg:path>`,
})
export class PhFileCodeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCppIcon],svg[ph-file-cpp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.22-4.66a8 8 0 0 1 11.56 11.06A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30.06 30.06 0 0 1 21.78 9.6a8 8 0 0 1-11.56 11.06A14.24 14.24 0 0 0 64 160c-8.82 0-16 9-16 20m-8-68V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.69L160 51.31Zm-12 92h-12v-12a8 8 0 0 0-16 0v12h-12a8 8 0 0 0 0 16h12v12a8 8 0 0 0 16 0v-12h12a8 8 0 0 0 0-16m68 0h-12v-12a8 8 0 0 0-16 0v12h-12a8 8 0 0 0 0 16h12v12a8 8 0 0 0 16 0v-12h12a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhFileCppIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCppBoldIcon],svg[ph-file-cpp-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 180c0 8.67 5.5 16 12 16a10.23 10.23 0 0 0 7.33-3.43a12 12 0 1 1 17.34 16.6A34 34 0 0 1 60 220c-19.85 0-36-17.94-36-40s16.15-40 36-40a34 34 0 0 1 24.67 10.83a12 12 0 1 1-17.34 16.6A10.27 10.27 0 0 0 60 164c-6.5 0-12 7.33-12 16m-12-72V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.51l56 56A12 12 0 0 1 220 88v20a12 12 0 0 1-24 0v-4h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 0 1-24 0m124-51v23h23Zm-12 111h-8v-8a12 12 0 0 0-24 0v8h-8a12 12 0 0 0 0 24h8v8a12 12 0 0 0 24 0v-8h8a12 12 0 0 0 0-24m72 0h-8v-8a12 12 0 0 0-24 0v8h-8a12 12 0 0 0 0 24h8v8a12 12 0 0 0 24 0v-8h8a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhFileCppBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCppDuotoneIcon],svg[ph-file-cpp-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.22-4.66a8 8 0 0 1 11.56 11.06A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30.06 30.06 0 0 1 21.78 9.6a8 8 0 0 1-11.56 11.06A14.18 14.18 0 0 0 64 160c-8.82 0-16 9-16 20m-8-68V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.69L160 51.31Zm-12 92h-12v-12a8 8 0 0 0-16 0v12h-12a8 8 0 0 0 0 16h12v12a8 8 0 0 0 16 0v-12h12a8 8 0 0 0 0-16m68 0h-12v-12a8 8 0 0 0-16 0v12h-12a8 8 0 0 0 0 16h12v12a8 8 0 0 0 16 0v-12h12a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhFileCppDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCppFillIcon],svg[ph-file-cpp-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76l44 44h-44ZM48 180c0 11 7.18 20 16 20a14.07 14.07 0 0 0 10.07-4.51a8.19 8.19 0 0 1 10.88-.9a8 8 0 0 1 .83 11.81A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30 30 0 0 1 21.39 9.2a8.24 8.24 0 0 1 .73 11.08a8 8 0 0 1-11.9.38A14.18 14.18 0 0 0 64 160c-8.82 0-16 9-16 20m108 .53a8.18 8.18 0 0 1-8.25 7.47H136v11.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V188h-11.73a8.18 8.18 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h12v-11.73a8.17 8.17 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v12h12a8 8 0 0 1 7.98 8.51m68 0a8.18 8.18 0 0 1-8.25 7.47H204v11.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V188h-11.73a8.18 8.18 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h12v-11.73a8.17 8.17 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v12h12a8 8 0 0 1 7.98 8.51"></svg:path>`,
})
export class PhFileCppFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCppLightIcon],svg[ph-file-cpp-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 180c0 12.13 8.07 22 18 22a16.23 16.23 0 0 0 11.67-5.28a6 6 0 0 1 8.66 8.3A28.06 28.06 0 0 1 64 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a28.06 28.06 0 0 1 20.33 9a6 6 0 0 1-8.66 8.3A16.23 16.23 0 0 0 64 158c-9.93 0-18 9.87-18 22m-4-68V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88v24a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0m116-30h35.52L158 46.48Zm-10 92h-14v-14a6 6 0 0 0-12 0v14h-14a6 6 0 0 0 0 12h14v14a6 6 0 0 0 12 0v-14h14a6 6 0 0 0 0-12m68 0h-14v-14a6 6 0 0 0-12 0v14h-14a6 6 0 0 0 0 12h14v14a6 6 0 0 0 12 0v-14h14a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhFileCppLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCppThinIcon],svg[ph-file-cpp-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 180c0 13.23 9 24 20 24a18.15 18.15 0 0 0 13.11-5.9a4 4 0 1 1 5.78 5.54A26.1 26.1 0 0 1 64 212c-15.44 0-28-14.35-28-32s12.56-32 28-32a26.1 26.1 0 0 1 18.89 8.36a4 4 0 1 1-5.78 5.54A18.15 18.15 0 0 0 64 156c-11 0-20 10.77-20 24m160-88h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88v24a4 4 0 0 1-8 0Zm-48-8h42.34L156 41.65Zm-8 92h-16v-16a4 4 0 0 0-8 0v16h-16a4 4 0 0 0 0 8h16v16a4 4 0 0 0 8 0v-16h16a4 4 0 0 0 0-8m68 0h-16v-16a4 4 0 0 0-8 0v16h-16a4 4 0 0 0 0 8h16v16a4 4 0 0 0 8 0v-16h16a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhFileCppThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCssIcon],svg[ph-file-css-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 180c0 11 7.18 20 16 20a14.24 14.24 0 0 0 10.22-4.66a8 8 0 1 1 11.55 11.06A30 30 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30 30 0 0 1 21.77 9.6a8 8 0 1 1-11.55 11.06A14.24 14.24 0 0 0 64 160c-8.82 0-16 9-16 20m79.6-8.69c-4-1.16-8.14-2.35-10.45-3.84c-1.26-.81-1.23-1-1.12-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.34-1.73 19.83-.56a8 8 0 0 0 4.07-15.48c-2.12-.55-21-5.22-32.83 2.76a20.55 20.55 0 0 0-9 14.95c-2 15.88 13.64 20.41 23 23.11c12.07 3.49 13.13 4.92 12.78 7.59c-.31 2.41-1.26 3.34-2.14 3.93c-4.6 3.06-15.17 1.56-19.55.36a8 8 0 0 0-4.3 15.41a61.2 61.2 0 0 0 15.18 2c5.83 0 12.3-1 17.49-4.46a20.82 20.82 0 0 0 9.19-15.23c2.25-17.28-14.27-22.11-24.15-24.97m64 0c-4-1.16-8.14-2.35-10.45-3.84c-1.25-.81-1.23-1-1.12-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.34-1.73 19.82-.56a8 8 0 0 0 4.07-15.48c-2.11-.55-21-5.22-32.83 2.76a20.58 20.58 0 0 0-8.95 14.95c-2 15.88 13.65 20.41 23 23.11c12.06 3.49 13.12 4.92 12.78 7.59c-.31 2.41-1.26 3.34-2.15 3.93c-4.6 3.06-15.16 1.56-19.54.36a8 8 0 0 0-4.3 15.44a61.3 61.3 0 0 0 15.19 2c5.82 0 12.3-1 17.49-4.46a20.81 20.81 0 0 0 9.18-15.23c2.21-17.31-14.31-22.14-24.2-25ZM40 112V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 1 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.68L160 51.31Z"></svg:path>`,
})
export class PhFileCssIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCssBoldIcon],svg[ph-file-css-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 180c0 8.67 5.5 16 12 16a10.27 10.27 0 0 0 7.33-3.43a12 12 0 1 1 17.34 16.6A34 34 0 0 1 60 220c-19.85 0-36-18-36-40s16.15-40 36-40a34 34 0 0 1 24.67 10.83a12 12 0 1 1-17.34 16.6A10.27 10.27 0 0 0 60 164c-6.5 0-12 7.31-12 16m97.51-5.71c-5.12-3.45-11.32-5.24-16.8-6.82a80 80 0 0 1-7.91-2.59c2.45-1.18 9.71-1.3 16.07.33A12 12 0 0 0 143 142a69 69 0 0 0-12-1.86c-9.93-.66-18 1.08-24.1 5.17a24.45 24.45 0 0 0-10.69 17.76c-1.1 8.74 2.49 16.27 10.11 21.19c4.78 3.09 10.36 4.7 15.75 6.26c3 .89 7.94 2.3 9.88 3.53a2.5 2.5 0 0 1-.21.71c-1.37 1.55-9.58 1.79-16.39-.06a12 12 0 1 0-6.46 23.11A63.8 63.8 0 0 0 125.1 220c6.46 0 13.73-1.17 19.73-5.15a24.73 24.73 0 0 0 10.95-18c1.22-9.32-2.45-17.32-10.27-22.58Zm68 0c-5.12-3.45-11.32-5.24-16.8-6.82a80 80 0 0 1-7.91-2.59c2.45-1.18 9.71-1.3 16.07.33A12 12 0 0 0 211 142a69 69 0 0 0-12-1.86c-9.93-.66-18 1.08-24.1 5.17a24.45 24.45 0 0 0-10.69 17.76c-1.1 8.74 2.49 16.27 10.11 21.19c4.78 3.09 10.36 4.7 15.75 6.26c3 .89 7.94 2.3 9.88 3.53a2.5 2.5 0 0 1-.21.71c-1.37 1.55-9.58 1.79-16.39-.06a12 12 0 1 0-6.46 23.11A63.8 63.8 0 0 0 193.1 220c6.46 0 13.73-1.17 19.73-5.15a24.73 24.73 0 0 0 10.95-18c1.22-9.32-2.45-17.32-10.27-22.58ZM36 108V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.51l56 56A12 12 0 0 1 220 88v20a12 12 0 1 1-24 0v-4h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 1 1-24 0m124-28h23l-23-23Z"></svg:path>`,
})
export class PhFileCssBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCssDuotoneIcon],svg[ph-file-css-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M48 180c0 11 7.18 20 16 20a14.2 14.2 0 0 0 10.22-4.66a8 8 0 1 1 11.55 11.06A30 30 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30 30 0 0 1 21.77 9.6a8 8 0 1 1-11.55 11.06A14.24 14.24 0 0 0 64 160c-8.82 0-16 9-16 20m79.6-8.69c-4-1.16-8.14-2.35-10.45-3.84c-1.26-.81-1.23-1-1.12-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.35-1.73 19.83-.56a8 8 0 0 0 4.07-15.48c-2.12-.55-21-5.22-32.83 2.76a20.55 20.55 0 0 0-9 14.95c-2 15.88 13.64 20.41 23 23.11c12.07 3.49 13.13 4.92 12.78 7.59c-.31 2.41-1.26 3.34-2.14 3.93c-4.6 3.06-15.17 1.56-19.55.36a8 8 0 0 0-4.3 15.41a61.2 61.2 0 0 0 15.18 2c5.83 0 12.3-1 17.49-4.46a20.82 20.82 0 0 0 9.19-15.23c2.25-17.28-14.27-22.11-24.15-24.97m64 0c-4-1.16-8.14-2.35-10.45-3.84c-1.25-.81-1.23-1-1.12-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.34-1.73 19.82-.56a8 8 0 0 0 4.07-15.48c-2.11-.55-21-5.22-32.83 2.76a20.58 20.58 0 0 0-8.95 14.95c-2 15.88 13.65 20.41 23 23.11c12.06 3.49 13.12 4.92 12.78 7.59c-.31 2.41-1.26 3.34-2.15 3.93c-4.6 3.06-15.16 1.56-19.54.36a8 8 0 0 0-4.3 15.44a61.3 61.3 0 0 0 15.19 2c5.82 0 12.3-1 17.49-4.46a20.81 20.81 0 0 0 9.18-15.23c2.21-17.31-14.31-22.14-24.2-25ZM40 112V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 1 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.68L160 51.31Z"></svg:path></svg:g>`,
})
export class PhFileCssDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCssFillIcon],svg[ph-file-css-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.06-4.5a8.2 8.2 0 0 1 10.9-.91a8 8 0 0 1 .81 11.81A30 30 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30 30 0 0 1 21.38 9.19a8.26 8.26 0 0 1 .74 11.09a8 8 0 0 1-11.9.38A14.2 14.2 0 0 0 64 160c-8.82 0-16 9-16 20m79.6-8.69c-4-1.16-8.14-2.35-10.45-3.84c-1.26-.81-1.23-1-1.12-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.35-1.73 19.83-.56a8 8 0 0 0 4.07-15.48c-2.12-.55-21-5.22-32.83 2.76a20.55 20.55 0 0 0-9 14.95c-2 15.88 13.64 20.41 23 23.11c12.07 3.49 13.13 4.92 12.78 7.59c-.31 2.41-1.26 3.34-2.14 3.93c-4.6 3.06-15.17 1.56-19.55.36a8 8 0 0 0-4.3 15.41a61.2 61.2 0 0 0 15.18 2c5.83 0 12.3-1 17.49-4.46a20.82 20.82 0 0 0 9.19-15.23c2.25-17.28-14.27-22.11-24.15-24.97m64 0c-4-1.16-8.14-2.35-10.45-3.84c-1.25-.81-1.23-1-1.12-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.34-1.73 19.82-.56a8 8 0 0 0 4.07-15.48c-2.11-.55-21-5.22-32.83 2.76a20.58 20.58 0 0 0-8.95 14.95c-2 15.88 13.65 20.41 23 23.11c12.06 3.49 13.12 4.92 12.78 7.59c-.31 2.41-1.26 3.34-2.15 3.93c-4.6 3.06-15.16 1.56-19.54.36a8 8 0 0 0-4.3 15.44a61.3 61.3 0 0 0 15.19 2c5.82 0 12.3-1 17.49-4.46a20.81 20.81 0 0 0 9.18-15.23c2.21-17.31-14.31-22.14-24.2-25ZM40 116V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v28a4 4 0 0 1-4 4H44a4 4 0 0 1-4-4m112-28h44l-44-44Z"></svg:path>`,
})
export class PhFileCssFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCssLightIcon],svg[ph-file-css-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 180c0 12.13 8.07 22 18 22a16.2 16.2 0 0 0 11.66-5.28a6 6 0 0 1 8.67 8.3A28.1 28.1 0 0 1 64 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a28.1 28.1 0 0 1 20.33 9a6 6 0 0 1-8.67 8.3A16.2 16.2 0 0 0 64 158c-9.93 0-18 9.86-18 22m81-6.77c-10.85-3.13-13.4-4.69-13-7.91a6.56 6.56 0 0 1 2.88-5.08c5.59-3.79 17.66-1.82 21.44-.84a6 6 0 1 0 3.06-11.6c-2-.53-20.09-5-31.2 2.48a18.62 18.62 0 0 0-8.09 13.54c-1.79 14.19 12.27 18.25 21.57 20.94c12.12 3.5 14.78 5.33 14.21 9.76a6.89 6.89 0 0 1-3 5.34c-5.6 3.73-17.48 1.64-21.18.62a6 6 0 1 0-3.21 11.52a59.3 59.3 0 0 0 14.67 2c5.49 0 11.55-.95 16.36-4.14a18.89 18.89 0 0 0 8.31-13.81c2.01-15.66-12.9-19.97-22.82-22.83Zm64 0c-10.85-3.13-13.41-4.69-13-7.91a6.59 6.59 0 0 1 2.88-5.08c5.6-3.79 17.65-1.83 21.44-.84a6 6 0 0 0 3.07-11.6c-2-.54-20.1-5-31.21 2.48a18.64 18.64 0 0 0-8.08 13.54c-1.8 14.19 12.26 18.25 21.57 20.94c12.12 3.5 14.77 5.33 14.2 9.76a6.85 6.85 0 0 1-3 5.34c-5.61 3.73-17.48 1.64-21.19.62a6 6 0 0 0-3.21 11.52a59.4 59.4 0 0 0 14.68 2c5.49 0 11.54-.95 16.36-4.14a18.89 18.89 0 0 0 8.31-13.81c2.01-15.66-12.91-19.97-22.82-22.83ZM202 94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 1 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.24 1.76l56 56A6 6 0 0 1 214 88v24a6 6 0 1 1-12 0Zm-8.5-12L158 46.48V82Z"></svg:path>`,
})
export class PhFileCssLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCssThinIcon],svg[ph-file-css-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 180c0 13.23 9 24 20 24a18.15 18.15 0 0 0 13.11-5.9a4 4 0 0 1 5.78 5.54A26.13 26.13 0 0 1 64 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a26.13 26.13 0 0 1 18.89 8.36a4 4 0 0 1-5.78 5.54A18.15 18.15 0 0 0 64 156c-11 0-20 10.77-20 24m82.49-4.85c-10.53-3-15.08-4.91-14.43-10.08a8.57 8.57 0 0 1 3.75-6.49c6.26-4.23 18.77-2.24 23.07-1.11a4 4 0 0 0 2-7.74a61 61 0 0 0-10.47-1.61c-8.12-.54-14.54.75-19.1 3.82a16.63 16.63 0 0 0-7.22 12.13c-1.58 12.49 10.46 16 20.14 18.77c11.25 3.25 16.47 5.49 15.63 11.94a8.93 8.93 0 0 1-3.9 6.75c-6.28 4.17-18.61 2.05-22.83.88a4 4 0 1 0-2.15 7.7a57.8 57.8 0 0 0 14.21 1.89c5.18 0 10.83-.86 15.22-3.77a17 17 0 0 0 7.43-12.41c1.8-13.98-11.58-17.82-21.35-20.67m64 0c-10.53-3-15.08-4.91-14.43-10.08a8.57 8.57 0 0 1 3.75-6.49c6.26-4.23 18.77-2.24 23.07-1.11a4 4 0 0 0 2-7.74a61.3 61.3 0 0 0-10.48-1.61c-8.11-.54-14.54.75-19.09 3.82a16.63 16.63 0 0 0-7.22 12.13c-1.59 12.49 10.46 16 20.14 18.77c11.25 3.25 16.46 5.49 15.63 11.94a8.93 8.93 0 0 1-3.9 6.75c-6.28 4.17-18.61 2.05-22.83.88a4 4 0 1 0-2.15 7.7a57.7 57.7 0 0 0 14.21 1.89c5.17 0 10.83-.86 15.22-3.77a17 17 0 0 0 7.43-12.41c1.79-13.98-11.58-17.82-21.35-20.67M204 92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88v24a4 4 0 0 1-8 0Zm-5.65-8L156 41.65V84Z"></svg:path>`,
})
export class PhFileCssThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCsvIcon],svg[ph-file-csv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 180c0 11 7.18 20 16 20a14.24 14.24 0 0 0 10.22-4.66a8 8 0 0 1 11.56 11.06A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30.06 30.06 0 0 1 21.78 9.6a8 8 0 0 1-11.56 11.06A14.24 14.24 0 0 0 64 160c-8.82 0-16 9-16 20m79.6-8.69c-4-1.16-8.14-2.35-10.45-3.84c-1.25-.81-1.23-1-1.12-1.9a4.57 4.57 0 0 1 2-3.67c4.6-3.12 15.34-1.73 19.82-.56a8 8 0 0 0 4.15-15.48c-2.12-.55-21-5.22-32.84 2.76a20.58 20.58 0 0 0-9 14.95c-2 15.88 13.65 20.41 23 23.11c12.06 3.49 13.12 4.92 12.78 7.59c-.31 2.41-1.26 3.34-2.14 3.93c-4.6 3.06-15.17 1.56-19.55.36a8 8 0 0 0-4.31 15.44a61.3 61.3 0 0 0 15.19 2c5.82 0 12.3-1 17.49-4.46a20.82 20.82 0 0 0 9.19-15.23c2.19-17.31-14.32-22.14-24.21-25m83.09-26.84a8 8 0 0 0-10.23 4.84L188 184.21l-12.47-34.9a8 8 0 0 0-15.07 5.38l20 56a8 8 0 0 0 15.07 0l20-56a8 8 0 0 0-4.84-10.22M216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-27.31-8L160 51.31V80Z"></svg:path>`,
})
export class PhFileCsvIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCsvBoldIcon],svg[ph-file-csv-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 180c0 8.67 5.49 16 12 16a10.27 10.27 0 0 0 7.33-3.43a12 12 0 1 1 17.34 16.6A34 34 0 0 1 60 220c-19.85 0-36-18-36-40s16.15-40 36-40a34 34 0 0 1 24.67 10.83a12 12 0 1 1-17.34 16.6A10.27 10.27 0 0 0 60 164c-6.51 0-12 7.31-12 16m97.51-5.71c-5.13-3.45-11.33-5.24-16.8-6.82a80 80 0 0 1-7.91-2.59c2.45-1.18 9.71-1.3 16.07.33A12 12 0 0 0 143 142a69 69 0 0 0-12-1.86c-9.93-.66-18 1.08-24.1 5.17a24.45 24.45 0 0 0-10.69 17.76c-1.1 8.74 2.48 16.27 10.11 21.19c4.78 3.09 10.36 4.7 15.75 6.26c3 .89 7.94 2.3 9.88 3.53a2 2 0 0 1-.22.71c-1.36 1.55-9.57 1.79-16.39-.06a12 12 0 0 0-6.45 23.11a63.7 63.7 0 0 0 16.2 2.19c6.47 0 13.74-1.17 19.74-5.15a24.73 24.73 0 0 0 10.95-18c1.22-9.32-2.46-17.32-10.27-22.58ZM216 140.68a12 12 0 0 0-15.3 7.32l-8.7 24.3l-8.7-24.3a12 12 0 1 0-22.6 8l20 56a12 12 0 0 0 22.6 0l20-56a12 12 0 0 0-7.3-15.32M36 108V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.51l56 56A12 12 0 0 1 220 88v20a12 12 0 1 1-24 0v-4h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 1 1-24 0m124-28h23l-23-23Z"></svg:path>`,
})
export class PhFileCsvBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCsvDuotoneIcon],svg[ph-file-csv-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M48 180c0 11 7.18 20 16 20a14.24 14.24 0 0 0 10.22-4.66a8 8 0 0 1 11.56 11.06A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30.06 30.06 0 0 1 21.78 9.6a8 8 0 0 1-11.56 11.06A14.24 14.24 0 0 0 64 160c-8.82 0-16 9-16 20m79.6-8.69c-4-1.16-8.14-2.35-10.45-3.84c-1.25-.81-1.23-1-1.12-1.9a4.57 4.57 0 0 1 2-3.67c4.6-3.12 15.34-1.73 19.83-.56a8 8 0 0 0 4.14-15.48c-2.12-.55-21-5.22-32.84 2.76a20.58 20.58 0 0 0-9 14.95c-2 15.88 13.65 20.41 23 23.11c12.06 3.49 13.12 4.92 12.78 7.59c-.31 2.41-1.26 3.34-2.14 3.93c-4.6 3.06-15.17 1.56-19.55.36a8 8 0 0 0-4.31 15.44a61.3 61.3 0 0 0 15.19 2c5.82 0 12.3-1 17.49-4.46a20.82 20.82 0 0 0 9.19-15.23c2.19-17.31-14.32-22.14-24.21-25m83.09-26.84a8 8 0 0 0-10.23 4.84L188 184.21l-12.47-34.9a8 8 0 0 0-15.07 5.38l20 56a8 8 0 0 0 15.07 0l20-56a8 8 0 0 0-4.84-10.22M216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-27.31-8L160 51.31V80Z"></svg:path></svg:g>`,
})
export class PhFileCsvDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCsvFillIcon],svg[ph-file-csv-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44ZM48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.06-4.5a8.21 8.21 0 0 1 10.9-.91a8 8 0 0 1 .82 11.81A30.06 30.06 0 0 1 64 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a30 30 0 0 1 21.39 9.19a8.26 8.26 0 0 1 .73 11.09a8 8 0 0 1-11.9.38A14.17 14.17 0 0 0 64 160c-8.82 0-16 9-16 20m103.81 16.31a20.82 20.82 0 0 1-9.19 15.23C137.43 215 131 216 125.13 216a61 61 0 0 1-15.13-2a8 8 0 1 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97M215.42 155l-19.89 55.68a8 8 0 0 1-15.06 0L160.58 155a8.21 8.21 0 0 1 4.5-10.45a8 8 0 0 1 10.45 4.76l12.47 34.9l12.47-34.9a8 8 0 0 1 10.45-4.76a8.23 8.23 0 0 1 4.5 10.45"></svg:path>`,
})
export class PhFileCsvFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCsvLightIcon],svg[ph-file-csv-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 180c0 12.13 8.07 22 18 22a16.24 16.24 0 0 0 11.67-5.28a6 6 0 0 1 8.66 8.3A28.06 28.06 0 0 1 64 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a28.06 28.06 0 0 1 20.33 9a6 6 0 0 1-8.66 8.3A16.23 16.23 0 0 0 64 158c-9.93 0-18 9.86-18 22m81.05-6.77c-10.86-3.13-13.41-4.69-13-7.91a6.59 6.59 0 0 1 2.88-5.08c5.6-3.79 17.66-1.82 21.45-.84a6 6 0 0 0 3.06-11.6c-2-.53-20.1-5-31.21 2.48a18.61 18.61 0 0 0-8.08 13.54c-1.8 14.19 12.26 18.25 21.57 20.94c12.12 3.5 14.78 5.33 14.2 9.76a6.85 6.85 0 0 1-3 5.34c-5.61 3.73-17.48 1.64-21.19.62a6 6 0 0 0-3.25 11.52a59.4 59.4 0 0 0 14.68 2c5.49 0 11.54-.95 16.36-4.14a18.89 18.89 0 0 0 8.31-13.81c2.01-15.66-12.91-19.97-22.78-22.83Zm83-26.88a6 6 0 0 0-7.67 3.63L188 190.15L173.65 150a6 6 0 1 0-11.3 4l20 56a6 6 0 0 0 11.3 0l20-56a6 6 0 0 0-3.65-7.66ZM214 88v24a6 6 0 1 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 1 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.24 1.76l56 56A6 6 0 0 1 214 88m-20.49-6L158 46.48V82Z"></svg:path>`,
})
export class PhFileCsvLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCsvThinIcon],svg[ph-file-csv-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 180c0 13.23 9 24 20 24a18.15 18.15 0 0 0 13.11-5.9a4 4 0 1 1 5.78 5.54A26.1 26.1 0 0 1 64 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a26.1 26.1 0 0 1 18.89 8.36a4 4 0 1 1-5.78 5.54A18.15 18.15 0 0 0 64 156c-11 0-20 10.77-20 24m82.49-4.85c-10.53-3-15.08-4.91-14.42-10.08a8.51 8.51 0 0 1 3.75-6.49c6.25-4.23 18.77-2.24 23.06-1.11a4 4 0 0 0 2-7.74a61 61 0 0 0-10.47-1.61c-8.12-.54-14.54.75-19.1 3.82a16.66 16.66 0 0 0-7.22 12.13c-1.58 12.49 10.46 16 20.14 18.77c11.26 3.25 16.47 5.49 15.64 11.94a8.94 8.94 0 0 1-3.91 6.75c-6.27 4.17-18.61 2.05-22.83.88a4 4 0 1 0-2.15 7.7a58 58 0 0 0 14.21 1.89c5.18 0 10.83-.86 15.22-3.77a17 17 0 0 0 7.43-12.41c1.8-13.98-11.58-17.82-21.35-20.67m82.85-26.92a4 4 0 0 0-5.11 2.42L188 196.11l-16.23-45.46a4 4 0 1 0-7.54 2.7l20 56a4 4 0 0 0 7.54 0l20-56a4 4 0 0 0-2.43-5.12M212 88v24a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-13.66-4L156 41.65V84Z"></svg:path>`,
})
export class PhFileCsvThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDashedIcon],svg[ph-file-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 224a8 8 0 0 1-8 8H56a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h16a8 8 0 0 1 8 8M216 88v48a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40h-24a8 8 0 0 1 0-16h32a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31ZM80 24H56a16 16 0 0 0-16 16v24a8 8 0 0 0 16 0V40h24a8 8 0 0 0 0-16m128 144a8 8 0 0 0-8 8v40h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16v-40a8 8 0 0 0-8-8M48 152a8 8 0 0 0 8-8v-40a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8m104 64h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhFileDashedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDashedBoldIcon],svg[ph-file-dashed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 224a12 12 0 0 1-12 12H56a20 20 0 0 1-20-20v-32a12 12 0 0 1 24 0v28h12a12 12 0 0 1 12 12M220 88v48a12 12 0 0 1-24 0v-32h-48a12 12 0 0 1-12-12V44h-16a12 12 0 0 1 0-24h32a12 12 0 0 1 8.49 3.51l56 56A12 12 0 0 1 220 88m-60-8h23l-23-23ZM80 20H56a20 20 0 0 0-20 20v24a12 12 0 0 0 24 0V44h20a12 12 0 0 0 0-24m128 144a12 12 0 0 0-12 12v36h-4a12 12 0 0 0 0 24h8a20 20 0 0 0 20-20v-40a12 12 0 0 0-12-12m-160-8a12 12 0 0 0 12-12v-40a12 12 0 0 0-24 0v40a12 12 0 0 0 12 12m104 56h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhFileDashedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDashedDuotoneIcon],svg[ph-file-dashed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M80 224a8 8 0 0 1-8 8H56a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h16a8 8 0 0 1 8 8M216 88v48a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40h-24a8 8 0 0 1 0-16h32a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31ZM80 24H56a16 16 0 0 0-16 16v24a8 8 0 0 0 16 0V40h24a8 8 0 0 0 0-16m128 144a8 8 0 0 0-8 8v40h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16v-40a8 8 0 0 0-8-8M48 152a8 8 0 0 0 8-8v-40a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8m104 64h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhFileDashedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDashedFillIcon],svg[ph-file-dashed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 224a8 8 0 0 1-8 8H56a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h16a8 8 0 0 1 8 8M213.66 82.34l-56-56A8 8 0 0 0 152 24h-32a8 8 0 0 0 0 16h24v48a8 8 0 0 0 8 8h48v40a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66M80 24H56a16 16 0 0 0-16 16v24a8 8 0 0 0 16 0V40h24a8 8 0 0 0 0-16m128 144a8 8 0 0 0-8 8v40h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16v-40a8 8 0 0 0-8-8M48 152a8 8 0 0 0 8-8v-40a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8m104 64h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhFileDashedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDashedLightIcon],svg[ph-file-dashed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78 224a6 6 0 0 1-6 6H56a14 14 0 0 1-14-14v-32a6 6 0 0 1 12 0v32a2 2 0 0 0 2 2h16a6 6 0 0 1 6 6M214 88v48a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38h-26a6 6 0 0 1 0-12h32a6 6 0 0 1 4.24 1.76l56 56A6 6 0 0 1 214 88m-56-6h35.51L158 46.49ZM80 26H56a14 14 0 0 0-14 14v24a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h24a6 6 0 0 0 0-12m128 144a6 6 0 0 0-6 6v40a2 2 0 0 1-2 2h-8a6 6 0 0 0 0 12h8a14 14 0 0 0 14-14v-40a6 6 0 0 0-6-6M48 150a6 6 0 0 0 6-6v-40a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6m104 68h-40a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhFileDashedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDashedThinIcon],svg[ph-file-dashed-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 224a4 4 0 0 1-4 4H56a12 12 0 0 1-12-12v-32a4 4 0 0 1 8 0v32a4 4 0 0 0 4 4h16a4 4 0 0 1 4 4M212 88v48a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36h-28a4 4 0 0 1 0-8h32a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-56-4h42.34L156 41.66ZM80 28H56a12 12 0 0 0-12 12v24a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h24a4 4 0 0 0 0-8m128 144a4 4 0 0 0-4 4v40a4 4 0 0 1-4 4h-8a4 4 0 0 0 0 8h8a12 12 0 0 0 12-12v-40a4 4 0 0 0-4-4M48 148a4 4 0 0 0 4-4v-40a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4m104 72h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhFileDashedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDocIcon],svg[ph-file-doc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 144H36a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h16a36 36 0 0 0 0-72m0 56h-8v-40h8a20 20 0 0 1 0 40m169.53-4.91a8 8 0 0 1 .25 11.31A30.06 30.06 0 0 1 200 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30.06 30.06 0 0 1 21.78 9.6a8 8 0 0 1-11.56 11.06A14.24 14.24 0 0 0 200 160c-8.82 0-16 9-16 20s7.18 20 16 20a14.24 14.24 0 0 0 10.22-4.66a8 8 0 0 1 11.31-.25M128 144c-17.65 0-32 16.15-32 36s14.35 36 32 36s32-16.15 32-36s-14.35-36-32-36m0 56c-8.82 0-16-9-16-20s7.18-20 16-20s16 9 16 20s-7.18 20-16 20m-80-80a8 8 0 0 0 8-8V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 8 8m112-68.69L188.69 80H160Z"></svg:path>`,
})
export class PhFileDocIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDocBoldIcon],svg[ph-file-doc-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 140H32a12 12 0 0 0-12 12v56a12 12 0 0 0 12 12h16a40 40 0 0 0 0-80m0 56h-4v-32h4a16 16 0 0 1 0 32m180.3-3.8a12 12 0 0 1 .37 17A34 34 0 0 1 204 220c-19.85 0-36-17.94-36-40s16.15-40 36-40a34 34 0 0 1 24.67 10.83a12 12 0 0 1-17.34 16.6A10.27 10.27 0 0 0 204 164c-6.5 0-12 7.33-12 16s5.5 16 12 16a10.27 10.27 0 0 0 7.33-3.43a12 12 0 0 1 16.97-.37M128 140c-19.85 0-36 17.94-36 40s16.15 40 36 40s36-17.94 36-40s-16.15-40-36-40m0 56c-6.5 0-12-7.33-12-16s5.5-16 12-16s12 7.33 12 16s-5.5 16-12 16m-80-76a12 12 0 0 0 12-12V44h76v48a12 12 0 0 0 12 12h48v4a12 12 0 0 0 24 0V88a12 12 0 0 0-3.51-8.48l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 12 12m112-63l23 23h-23Z"></svg:path>`,
})
export class PhFileDocBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDocDuotoneIcon],svg[ph-file-doc-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M52 144H36a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h16a36 36 0 0 0 0-72m0 56h-8v-40h8a20 20 0 0 1 0 40m169.53-4.91a8 8 0 0 1 .25 11.31A30.06 30.06 0 0 1 200 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30.06 30.06 0 0 1 21.78 9.6a8 8 0 0 1-11.56 11.06A14.24 14.24 0 0 0 200 160c-8.82 0-16 9-16 20s7.18 20 16 20a14.18 14.18 0 0 0 10.22-4.66a8 8 0 0 1 11.31-.25M128 144c-17.64 0-32 16.15-32 36s14.36 36 32 36s32-16.15 32-36s-14.36-36-32-36m0 56c-8.82 0-16-9-16-20s7.18-20 16-20s16 9 16 20s-7.18 20-16 20m-80-80a8 8 0 0 0 8-8V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 8 8m112-68.69L188.69 80H160Z"></svg:path></svg:g>`,
})
export class PhFileDocDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDocFillIcon],svg[ph-file-doc-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 120h168.07a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56a8 8 0 0 0-5.68-2.34H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76l44 44h-44ZM52 144H36a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h15.33C71 216 87.55 200.52 88 180.87A36 36 0 0 0 52 144m-.49 56H44v-40h8a20 20 0 0 1 20 20.77C71.59 191.59 62.35 200 51.52 200Zm170.67-4.28a8.26 8.26 0 0 1-.73 11.09a30 30 0 0 1-21.4 9.19c-17.65 0-32-16.15-32-36s14.36-36 32-36a30 30 0 0 1 21.4 9.19a8.26 8.26 0 0 1 .73 11.09a8 8 0 0 1-11.9.38a14.2 14.2 0 0 0-10.22-4.66c-8.82 0-16 9-16 20s7.18 20 16 20a14.25 14.25 0 0 0 10.23-4.66a8 8 0 0 1 11.9.38ZM128 144c-17.65 0-32 16.15-32 36s14.37 36 32 36s32-16.15 32-36s-14.31-36-32-36m0 56c-8.83 0-16-9-16-20s7.18-20 16-20s16 9 16 20s-7.14 20-16 20"></svg:path>`,
})
export class PhFileDocFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDocLightIcon],svg[ph-file-doc-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 146H36a6 6 0 0 0-6 6v56a6 6 0 0 0 6 6h16a34 34 0 0 0 0-68m0 56H42v-44h10a22 22 0 0 1 0 44m168.15-5.46a6 6 0 0 1 .18 8.48A28.06 28.06 0 0 1 200 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a28.06 28.06 0 0 1 20.33 9a6 6 0 0 1-8.66 8.3A16.23 16.23 0 0 0 200 158c-9.93 0-18 9.87-18 22s8.07 22 18 22a16.23 16.23 0 0 0 11.67-5.28a6 6 0 0 1 8.48-.18M128 146c-16.54 0-30 15.25-30 34s13.46 34 30 34s30-15.25 30-34s-13.46-34-30-34m0 56c-9.93 0-18-9.87-18-22s8.07-22 18-22s18 9.87 18 22s-8.07 22-18 22m-80-84a6 6 0 0 0 6-6V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 0 0 12 0V88a6 6 0 0 0-1.76-4.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 6 6m110-71.52L193.52 82H158Z"></svg:path>`,
})
export class PhFileDocLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
