import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAcornBoldIcon],svg[ph-acorn-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 104a60.07 60.07 0 0 0-60-60h-35.6A20 20 0 0 1 160 28a12 12 0 0 0 0-24a44.06 44.06 0 0 0-43.81 40H80a60.07 60.07 0 0 0-60 60a20 20 0 0 0 8 16v8c0 37.45 34 64.71 61.23 86.61c10.22 8.2 25.63 20.58 26.77 25.56a12 12 0 0 0 24 0c1.14-5 16.55-17.36 26.77-25.56C194.05 192.71 228 165.45 228 128v-8a20 20 0 0 0 8-16M80 68h96a36.06 36.06 0 0 1 35.78 32H44.22A36.06 36.06 0 0 1 80 68m71.74 127.9c-9.17 7.36-17.46 14-23.74 20.55c-6.28-6.53-14.57-13.19-23.74-20.55C81 177.2 52 153.94 52 128v-4h152v4c0 25.94-29 49.2-52.26 67.9"></svg:path>`,
})
export class PhAcornBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAcornIcon],svg[ph-acorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 104a56.06 56.06 0 0 0-56-56h-40a24 24 0 0 1 24-24a8 8 0 0 0 0-16a40 40 0 0 0-40 40H80a56.06 56.06 0 0 0-56 56a16 16 0 0 0 8 13.83V128c0 35.53 33.12 62.12 59.74 83.49C103.66 221.07 120 234.18 120 240a8 8 0 0 0 16 0c0-5.82 16.34-18.93 28.26-28.51C190.88 190.12 224 163.53 224 128v-10.17a16 16 0 0 0 8-13.83M80 64h96a40.06 40.06 0 0 1 40 40H40a40 40 0 0 1 40-40m74.25 135c-10.62 8.52-20 16-26.25 23.37c-6.25-7.32-15.63-14.85-26.25-23.37C77.8 179.79 48 155.86 48 128v-8h160v8c0 27.86-29.8 51.79-53.75 71"></svg:path>`,
})
export class PhAcornIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAcornDuotoneIcon],svg[ph-acorn-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 112v16c0 53-88 88-88 112c0-24-88-59-88-112v-16Z" opacity=".2"></svg:path><svg:path d="M232 104a56.06 56.06 0 0 0-56-56h-40a24 24 0 0 1 24-24a8 8 0 0 0 0-16a40 40 0 0 0-40 40H80a56.06 56.06 0 0 0-56 56a16 16 0 0 0 8 13.83V128c0 35.53 33.12 62.12 59.74 83.49C103.66 221.07 120 234.18 120 240a8 8 0 0 0 16 0c0-5.82 16.34-18.93 28.26-28.51C190.88 190.12 224 163.53 224 128v-10.17a16 16 0 0 0 8-13.83M80 64h96a40.06 40.06 0 0 1 40 40H40a40 40 0 0 1 40-40m74.25 135c-10.62 8.52-20 16-26.25 23.37c-6.25-7.32-15.63-14.85-26.25-23.37C77.8 179.79 48 155.86 48 128v-8h160v8c0 27.86-29.8 51.79-53.75 71"></svg:path></svg:g>`,
})
export class PhAcornDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAcornFillIcon],svg[ph-acorn-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 104a56.06 56.06 0 0 0-56-56h-40a24 24 0 0 1 24-24a8 8 0 0 0 0-16a40 40 0 0 0-40 40H80a56.06 56.06 0 0 0-56 56a16 16 0 0 0 8 13.84V128c0 35.53 33.12 62.12 59.74 83.49C103.66 221.07 120 234.18 120 240a8 8 0 0 0 16 0c0-5.82 16.34-18.93 28.26-28.51C190.88 190.12 224 163.53 224 128v-10.16a16 16 0 0 0 8-13.84m-77.75 95c-10.62 8.52-20 16-26.25 23.37c-6.25-7.32-15.63-14.85-26.25-23.37C77.8 179.79 48 155.86 48 128v-8h160v8c0 27.86-29.8 51.79-53.75 71"></svg:path>`,
})
export class PhAcornFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAcornLightIcon],svg[ph-acorn-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 104a54.06 54.06 0 0 0-54-54h-42v-2a26 26 0 0 1 26-26a6 6 0 0 0 0-12a38 38 0 0 0-38 38v2H80a54.06 54.06 0 0 0-54 54a14 14 0 0 0 8 12.63V128c0 34.57 32.71 60.83 59 81.93c14.26 11.45 29 23.29 29 30.07a6 6 0 0 0 12 0c0-6.78 14.75-18.62 29-30.07c26.28-21.1 59-47.36 59-81.93v-11.37a14 14 0 0 0 8-12.63M80 62h96a42 42 0 0 1 42 42a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2a42 42 0 0 1 42-42m75.5 138.58c-11.48 9.21-21.48 17.24-27.5 25c-6-7.72-16-15.75-27.5-25C76.22 181.08 46 156.82 46 128v-10h164v10c0 28.82-30.22 53.08-54.5 72.58"></svg:path>`,
})
export class PhAcornLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phActivityIcon],svg[ph-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 216h-.4a8.1 8.1 0 0 1-7.1-5.2l-57.2-150l-32 70.5A8 8 0 0 1 56 136H24a8 8 0 0 1 0-16h26.8l37.9-83.3a8.2 8.2 0 0 1 7.6-4.7a8 8 0 0 1 7.2 5.2L161 188.1l31.8-63.7a8.2 8.2 0 0 1 7.2-4.4h32a8 8 0 0 1 0 16h-27.1l-37.7 75.6a8.2 8.2 0 0 1-7.2 4.4Z"></svg:path>`,
})
export class PhActivityIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAcornThinIcon],svg[ph-acorn-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 104a52.06 52.06 0 0 0-52-52h-44v-4a28 28 0 0 1 28-28a4 4 0 0 0 0-8a36 36 0 0 0-36 36v4H80a52.06 52.06 0 0 0-52 52a12 12 0 0 0 8 11.3V128c0 33.61 32.29 59.54 58.24 80.37C109.54 220.66 124 232.27 124 240a4 4 0 0 0 8 0c0-7.73 14.46-19.34 29.76-31.63C187.71 187.54 220 161.61 220 128v-12.7a12 12 0 0 0 8-11.3m-71.25 98.13c-12.51 10.05-23.23 18.65-28.75 26.79c-5.52-8.14-16.24-16.74-28.75-26.79C74.63 182.37 44 157.78 44 128v-12h168v12c0 29.78-30.63 54.37-55.25 74.13M216 108H40a4 4 0 0 1-4-4a44.05 44.05 0 0 1 44-44h96a44.05 44.05 0 0 1 44 44a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhAcornThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phActivityBoldIcon],svg[ph-activity-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 220h-.6a12.1 12.1 0 0 1-10.6-7.7L95 71.1L66.9 133a12 12 0 0 1-10.9 7H24a12 12 0 0 1 0-24h24.3l36.8-81a12 12 0 0 1 22.1.7l54.3 142.5l27.8-55.6A12.1 12.1 0 0 1 200 116h32a12 12 0 0 1 0 24h-24.6l-36.7 73.4A12.1 12.1 0 0 1 160 220Z"></svg:path>`,
})
export class PhActivityBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phActivityLightIcon],svg[ph-activity-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 214h-.3a5.8 5.8 0 0 1-5.3-3.9L95.5 55.6l-34 74.9A6.1 6.1 0 0 1 56 134H24a6 6 0 0 1 0-12h28.1l38.4-84.5a6 6 0 0 1 11.1.4l59.1 155.2l33.9-67.8a6 6 0 0 1 5.4-3.3h32a6 6 0 0 1 0 12h-28.3l-38.3 76.7a6.2 6.2 0 0 1-5.4 3.3Z"></svg:path>`,
})
export class PhActivityLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phActivityThinIcon],svg[ph-activity-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 212h-.2a3.9 3.9 0 0 1-3.5-2.6l-60.6-159l-36.1 79.3A3.9 3.9 0 0 1 56 132H24a4 4 0 0 1 0-8h29.4l39-85.7a3.8 3.8 0 0 1 3.7-2.3a4 4 0 0 1 3.6 2.6l60.8 159.5l35.9-71.9a4.2 4.2 0 0 1 3.6-2.2h32a4 4 0 0 1 0 8h-29.5l-38.9 77.8a4.2 4.2 0 0 1-3.6 2.2Z"></svg:path>`,
})
export class PhActivityThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAddressBookIcon],svg[ph-address-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M83.19 174.4a8 8 0 0 0 11.21-1.6a52 52 0 0 1 83.2 0a8 8 0 1 0 12.8-9.6a67.9 67.9 0 0 0-27.4-21.69a40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 81.6 163.2a8 8 0 0 0 1.59 11.2M112 112a24 24 0 1 1 24 24a24 24 0 0 1-24-24m96-88H64a16 16 0 0 0-16 16v24H32a8 8 0 0 0 0 16h16v40H32a8 8 0 0 0 0 16h16v40H32a8 8 0 0 0 0 16h16v24a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H64V40h144Z"></svg:path>`,
})
export class PhAddressBookIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAddressBookBoldIcon],svg[ph-address-book-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 20H64a20 20 0 0 0-20 20v20H32a12 12 0 0 0 0 24h12v32H32a12 12 0 0 0 0 24h12v32H32a12 12 0 0 0 0 24h12v20a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H68V44h136Zm-103.2-40.63a48 48 0 0 1 70.4 0a12 12 0 0 0 17.6-16.32a72 72 0 0 0-19.21-14.68a44 44 0 1 0-67.19 0a72.1 72.1 0 0 0-19.2 14.68a12 12 0 0 0 17.6 16.32M116 112a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhAddressBookBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAddressBookDuotoneIcon],svg[ph-address-book-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 32H64a8 8 0 0 0-8 8v176a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-72 112a32 32 0 1 1 32-32a32 32 0 0 1-32 32" opacity=".2"></svg:path><svg:path d="M83.19 174.4a8 8 0 0 0 11.21-1.6a52 52 0 0 1 83.2 0a8 8 0 1 0 12.8-9.6a67.9 67.9 0 0 0-27.4-21.69a40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 81.6 163.2a8 8 0 0 0 1.59 11.2M112 112a24 24 0 1 1 24 24a24 24 0 0 1-24-24m96-88H64a16 16 0 0 0-16 16v24H32a8 8 0 0 0 0 16h16v40H32a8 8 0 0 0 0 16h16v40H32a8 8 0 0 0 0 16h16v24a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H64V40h144Z"></svg:path></svg:g>`,
})
export class PhAddressBookDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAddressBookFillIcon],svg[ph-address-book-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 112a24 24 0 1 1-24-24a24 24 0 0 1 24 24m64-72v176a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16v-24H32a8 8 0 0 1 0-16h16v-40H32a8 8 0 0 1 0-16h16V80H32a8 8 0 0 1 0-16h16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-33.6 123.2a67.9 67.9 0 0 0-27.4-21.69a40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 81.6 163.2a8 8 0 1 0 12.8 9.6a52 52 0 0 1 83.2 0a8 8 0 1 0 12.8-9.6"></svg:path>`,
})
export class PhAddressBookFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAddressBookLightIcon],svg[ph-address-book-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M159.11 142.13a38 38 0 1 0-46.22 0A65.75 65.75 0 0 0 83.2 164.4a6 6 0 0 0 9.6 7.2a54 54 0 0 1 86.4 0a6 6 0 0 0 9.6-7.2a65.75 65.75 0 0 0-29.69-22.27M110 112a26 26 0 1 1 26 26a26 26 0 0 1-26-26m98-86H64a14 14 0 0 0-14 14v26H32a6 6 0 0 0 0 12h18v44H32a6 6 0 0 0 0 12h18v44H32a6 6 0 0 0 0 12h18v26a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m2 190a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhAddressBookLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAddressBookTabsIcon],svg[ph-address-book-tabs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-16 72h16v48h-16Zm16-16h-16V48h16ZM48 48h128v160H48Zm160 160h-16v-40h16zm-56.25-42a39.76 39.76 0 0 0-17.19-23.34a32 32 0 1 0-45.12 0A39.84 39.84 0 0 0 72.25 166a8 8 0 0 0 15.5 4c2.64-10.25 13.06-18 24.25-18s21.62 7.73 24.25 18a8 8 0 1 0 15.5-4M96 120a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhAddressBookTabsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAddressBookTabsBoldIcon],svg[ph-address-book-tabs-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-20 80h16v40h-16Zm16-24h-16V52h16ZM52 52h112v152H52Zm136 152v-32h16v32Zm-36.38-39a43.22 43.22 0 0 0-15.16-23a36 36 0 1 0-56.92 0a43.35 43.35 0 0 0-15.16 23a12 12 0 1 0 23.24 6c2.2-8.54 11-15 20.38-15s18.19 6.44 20.38 15a12 12 0 0 0 23.24-6M96 120a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhAddressBookTabsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAddressBookTabsDuotoneIcon],svg[ph-address-book-tabs-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M48 40a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h136V40Zm64 104a24 24 0 1 1 24-24a24 24 0 0 1-24 24" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-16 72h16v48h-16Zm16-16h-16V48h16ZM48 48h128v160H48Zm160 160h-16v-40h16zm-56.25-42a39.76 39.76 0 0 0-17.19-23.34a32 32 0 1 0-45.12 0A39.84 39.84 0 0 0 72.25 166a8 8 0 0 0 15.5 4c2.64-10.25 13.06-18 24.25-18s21.62 7.73 24.25 18a8 8 0 1 0 15.5-4M96 120a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path></svg:g>`,
})
export class PhAddressBookTabsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAddressBookTabsFillIcon],svg[ph-address-book-tabs-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 16h24v40h-24Zm0 56h24v48h-24Zm-38 71.75a8 8 0 0 1-9.74-5.76c-2.63-10.26-13.06-18-24.25-18s-21.61 7.74-24.25 18a8 8 0 0 1-15.5-4a39.84 39.84 0 0 1 17.19-23.34a32 32 0 1 1 45.12 0A39.76 39.76 0 0 1 151.75 166a8 8 0 0 1-5.75 9.75M208 208h-24v-40h24zm-80-88a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhAddressBookTabsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAddressBookTabsLightIcon],svg[ph-address-book-tabs-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m-18 68h20v52h-20Zm20-54v42h-20V46h18a2 2 0 0 1 2 2M46 208V48a2 2 0 0 1 2-2h130v164H48a2 2 0 0 1-2-2m162 2h-18v-44h20v42a2 2 0 0 1-2 2m-58.19-43.49A38 38 0 0 0 131.23 143a30 30 0 1 0-38.45 0a38 38 0 0 0-18.59 23.5a6 6 0 0 0 11.62 3C88.67 158.38 99.93 150 112 150s23.34 8.38 26.19 19.49a6 6 0 0 0 11.62-3ZM94 120a18 18 0 1 1 18 18a18 18 0 0 1-18-18"></svg:path>`,
})
export class PhAddressBookTabsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAddressBookTabsThinIcon],svg[ph-address-book-tabs-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m-20 64h24v56h-24Zm24-52v44h-24V44h20a4 4 0 0 1 4 4M44 208V48a4 4 0 0 1 4-4h132v168H48a4 4 0 0 1-4-4m164 4h-20v-48h24v44a4 4 0 0 1-4 4m-60.12-45a36.24 36.24 0 0 0-20.44-23.67a28 28 0 1 0-30.88 0A36.28 36.28 0 0 0 76.13 167a4 4 0 0 0 2.87 4.87a4 4 0 0 0 1 .13a4 4 0 0 0 3.87-3C87 157 99.05 148 112 148s25.05 9 28.12 21a4 4 0 0 0 7.76-2M92 120a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhAddressBookTabsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAddressBookThinIcon],svg[ph-address-book-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M154.7 142.75a36 36 0 1 0-37.4 0a63.6 63.6 0 0 0-32.5 22.85a4 4 0 0 0 6.4 4.8a56 56 0 0 1 89.6 0a4 4 0 0 0 6.4-4.8a63.65 63.65 0 0 0-32.5-22.85M108 112a28 28 0 1 1 28 28a28 28 0 0 1-28-28m100-84H64a12 12 0 0 0-12 12v28H32a4 4 0 0 0 0 8h20v48H32a4 4 0 0 0 0 8h20v48H32a4 4 0 0 0 0 8h20v28a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m4 188a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhAddressBookThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirTrafficControlIcon],svg[ph-air-traffic-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.11 70.82A16 16 0 0 0 216 64h-80V32h16a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16h16v32H40a16 16 0 0 0-15 21.47l26.19 72a16 16 0 0 0 15 10.53H96v64a8 8 0 0 0 16 0v-64h32v64a8 8 0 0 0 16 0v-64h29.82a16 16 0 0 0 15-10.53l26.19-72a16 16 0 0 0-1.9-14.65M110.68 152l-13.1-72h60.84l-13.1 72ZM40 80h41.32l13.09 72H66.18Zm149.82 72h-28.23l13.09-72H216Z"></svg:path>`,
})
export class PhAirTrafficControlIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirTrafficControlBoldIcon],svg[ph-air-traffic-control-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.38 68.52A20 20 0 0 0 216 60h-76V36h12a12 12 0 0 0 0-24h-48a12 12 0 0 0 0 24h12v24H40a20 20 0 0 0-18.8 26.83l26.19 72A20.06 20.06 0 0 0 66.18 172H92v60a12 12 0 0 0 24 0v-60h24v60a12 12 0 0 0 24 0v-60h25.82a20.06 20.06 0 0 0 18.79-13.17l26.19-72a20 20 0 0 0-2.42-18.31M114 148l-11.62-64h51.24L142 148ZM45.71 84H78l11.64 64H69ZM187 148h-20.62L178 84h32.27Z"></svg:path>`,
})
export class PhAirTrafficControlBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirTrafficControlDuotoneIcon],svg[ph-air-traffic-control-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m223.51 82.73l-26.18 72a8 8 0 0 1-7.52 5.27H66.19a8 8 0 0 1-7.52-5.27l-26.18-72A8 8 0 0 1 40 72h176a8 8 0 0 1 7.51 10.73" opacity=".2"></svg:path><svg:path d="M229.11 70.82A16 16 0 0 0 216 64h-80V32h16a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16h16v32H40a16 16 0 0 0-15 21.47l26.19 72a16 16 0 0 0 15 10.53H96v64a8 8 0 0 0 16 0v-64h32v64a8 8 0 0 0 16 0v-64h29.82a16 16 0 0 0 15-10.53l26.19-72a16 16 0 0 0-1.9-14.65M110.68 152l-13.1-72h60.84l-13.1 72ZM40 80h41.32l13.09 72H66.18Zm149.82 72h-28.23l13.09-72H216Z"></svg:path></svg:g>`,
})
export class PhAirTrafficControlDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirTrafficControlFillIcon],svg[ph-air-traffic-control-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.11 70.82A16 16 0 0 0 216 64h-80V32h16a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16h16v32H40a16 16 0 0 0-15 21.47l26.19 72a16 16 0 0 0 15 10.53h123.63a16 16 0 0 0 15-10.53l26.19-72a16 16 0 0 0-1.9-14.65m-126.59 81.05a8 8 0 0 1-1.44.13a8 8 0 0 1-7.86-6.57L83 89.43a8 8 0 0 1 15.75-2.86l10.18 56a8 8 0 0 1-6.41 9.3M173 89.43l-10.19 56a8 8 0 0 1-7.86 6.57a8 8 0 0 1-1.44-.13a8 8 0 0 1-6.44-9.3l10.18-56A8 8 0 0 1 173 89.43M160 188v44a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-44a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhAirTrafficControlFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirTrafficControlLightIcon],svg[ph-air-traffic-control-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.47 72A14 14 0 0 0 216 66h-82V30h18a6 6 0 0 0 0-12h-48a6 6 0 0 0 0 12h18v36H40a14 14 0 0 0-13.16 18.78l26.19 72A14 14 0 0 0 66.18 166H98v66a6 6 0 0 0 12 0v-66h36v66a6 6 0 0 0 12 0v-66h31.82a14 14 0 0 0 13.18-9.22l26.19-72A14 14 0 0 0 227.47 72M109 154L95.19 78h65.62L147 154Zm-44.7-1.32l-26.18-72a2 2 0 0 1 .24-1.83A1.94 1.94 0 0 1 40 78h43l13.82 76H66.18a2 2 0 0 1-1.88-1.32m153.58-72l-26.18 72a2 2 0 0 1-1.88 1.32h-30.63L173 78h43a1.94 1.94 0 0 1 1.64.85a2 2 0 0 1 .24 1.83"></svg:path>`,
})
export class PhAirTrafficControlLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirTrafficControlThinIcon],svg[ph-air-traffic-control-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.83 73.11A12 12 0 0 0 216 68h-84V28h20a4 4 0 0 0 0-8h-48a4 4 0 0 0 0 8h20v40H40a12 12 0 0 0-11.28 16.1l26.19 72a12 12 0 0 0 11.27 7.9H100v68a4 4 0 0 0 8 0v-68h40v68a4 4 0 0 0 8 0v-68h33.82a12 12 0 0 0 11.27-7.9l26.19-72a12 12 0 0 0-1.45-10.99M107.34 156L92.79 76h70.42l-14.55 80Zm-44.92-2.63l-26.18-72A4 4 0 0 1 40 76h44.66l14.54 80h-33a4 4 0 0 1-3.78-2.63m157.34-72l-26.18 72a4 4 0 0 1-3.76 2.63h-33l14.55-80H216a4 4 0 0 1 3.76 5.37"></svg:path>`,
})
export class PhAirTrafficControlThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneIcon],svg[ph-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.58 128.84L160 91.06V48a32 32 0 0 0-64 0v43.06l-75.58 37.78A8 8 0 0 0 16 136v32a8 8 0 0 0 9.57 7.84L96 161.76v18.93l-13.66 13.65A8 8 0 0 0 80 200v32a8 8 0 0 0 11 7.43l37-14.81l37 14.81a8 8 0 0 0 11-7.43v-32a8 8 0 0 0-2.34-5.66L160 180.69v-18.93l70.43 14.08A8 8 0 0 0 240 168v-32a8 8 0 0 0-4.42-7.16M224 158.24l-70.43-14.08A8 8 0 0 0 144 152v32a8 8 0 0 0 2.34 5.66L160 203.31v16.87l-29-11.61a8 8 0 0 0-5.94 0L96 220.18v-16.87l13.66-13.65A8 8 0 0 0 112 184v-32a8 8 0 0 0-9.57-7.84L32 158.24v-17.3l75.58-37.78A8 8 0 0 0 112 96V48a16 16 0 0 1 32 0v48a8 8 0 0 0 4.42 7.16L224 140.94Z"></svg:path>`,
})
export class PhAirplaneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneBoldIcon],svg[ph-airplane-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.37 125.27L164 88.58V48a36 36 0 0 0-72 0v40.58l-73.37 36.69A12 12 0 0 0 12 136v32a12 12 0 0 0 14.35 11.77L92 166.64V179l-12.49 12.51A12 12 0 0 0 76 200v32a12 12 0 0 0 16.46 11.14L128 228.92l35.54 14.22a11.9 11.9 0 0 0 4.46.86a12 12 0 0 0 12-12v-32a12 12 0 0 0-3.51-8.49L164 179v-12.36l65.65 13.13A12 12 0 0 0 244 168v-32a12 12 0 0 0-6.63-10.73M220 153.36l-65.65-13.13A12 12 0 0 0 140 152v32a12 12 0 0 0 3.51 8.49L156 205v9.31l-23.54-9.42a12 12 0 0 0-8.92 0L100 214.28V205l12.49-12.48A12 12 0 0 0 116 184v-32a12 12 0 0 0-14.35-11.77L36 153.36v-9.94l73.37-36.69A12 12 0 0 0 116 96V48a12 12 0 0 1 24 0v48a12 12 0 0 0 6.63 10.73L220 143.42Z"></svg:path>`,
})
export class PhAirplaneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneDuotoneIcon],svg[ph-airplane-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 152v32l16 16v32l-40-16l-40 16v-32l16-16v-32l-80 16v-32l80-40V48a24 24 0 0 1 48 0v48l80 40v32Z" opacity=".2"></svg:path><svg:path d="M235.58 128.84L160 91.06V48a32 32 0 0 0-64 0v43.06l-75.58 37.78A8 8 0 0 0 16 136v32a8 8 0 0 0 9.57 7.84L96 161.76v18.93l-13.66 13.65A8 8 0 0 0 80 200v32a8 8 0 0 0 11 7.43l37-14.81l37 14.81a8 8 0 0 0 11-7.43v-32a8 8 0 0 0-2.34-5.66L160 180.69v-18.93l70.43 14.08A8 8 0 0 0 240 168v-32a8 8 0 0 0-4.42-7.16M224 158.24l-70.43-14.08A8 8 0 0 0 144 152v32a8 8 0 0 0 2.34 5.66L160 203.31v16.87l-29-11.61a8 8 0 0 0-5.94 0L96 220.18v-16.87l13.66-13.65A8 8 0 0 0 112 184v-32a8 8 0 0 0-9.57-7.84L32 158.24v-17.3l75.58-37.78A8 8 0 0 0 112 96V48a16 16 0 0 1 32 0v48a8 8 0 0 0 4.42 7.16L224 140.94Z"></svg:path></svg:g>`,
})
export class PhAirplaneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneFillIcon],svg[ph-airplane-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 136v32a8 8 0 0 1-8 8a7.6 7.6 0 0 1-1.57-.16L156 161v23.73l17.66 17.65A8 8 0 0 1 176 208v24a8 8 0 0 1-11 7.43l-37-14.81l-37 14.81A8 8 0 0 1 80 232v-24a8 8 0 0 1 2.34-5.66L100 184.69V161l-74.43 14.84A7.6 7.6 0 0 1 24 176a8 8 0 0 1-8-8v-32a8 8 0 0 1 4.42-7.16L100 89.06V44a28 28 0 0 1 56 0v45.06l79.58 39.78A8 8 0 0 1 240 136"></svg:path>`,
})
export class PhAirplaneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneInFlightIcon],svg[ph-airplane-in-flight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 216a8 8 0 0 1-8 8H72a8 8 0 1 1 0-16h144a8 8 0 0 1 8 8m24-80v24a8 8 0 0 1-8 8H61.07a39.75 39.75 0 0 1-38.31-28.51L8.69 92.6A16 16 0 0 1 24 72h8a8 8 0 0 1 5.65 2.34L59.32 96h22.49l-9-26.94A16 16 0 0 1 88 48h8a8 8 0 0 1 5.66 2.34L147.32 96H208a40 40 0 0 1 40 40m-16 0a24 24 0 0 0-24-24h-64a8 8 0 0 1-5.65-2.34L92.69 64H88l12.49 37.47A8 8 0 0 1 92.91 112H56a8 8 0 0 1-5.66-2.34L28.69 88H24l14.07 46.9a23.85 23.85 0 0 0 23 17.1H232Z"></svg:path>`,
})
export class PhAirplaneInFlightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneInFlightBoldIcon],svg[ph-airplane-in-flight-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 216a12 12 0 0 1-12 12H72a12 12 0 0 1 0-24h144a12 12 0 0 1 12 12m24-80v24a12 12 0 0 1-12 12H61.07a43.72 43.72 0 0 1-42.14-31.36L4.86 93.75A20 20 0 0 1 24 68h8a12 12 0 0 1 8.48 3.51L61 92h15.27L69 70.32A20 20 0 0 1 88 44h8a12 12 0 0 1 8.48 3.51L149 92h59a44.05 44.05 0 0 1 44 44m-24 0a20 20 0 0 0-20-20h-64a12 12 0 0 1-8.48-3.51l-40.69-40.7l9.47 28.42A12 12 0 0 1 92.91 116H56a12 12 0 0 1-8.49-3.51L30.4 95.36l11.51 38.39A19.89 19.89 0 0 0 61.07 148H228Z"></svg:path>`,
})
export class PhAirplaneInFlightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneInFlightDuotoneIcon],svg[ph-airplane-in-flight-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 136v24H61.06a32 32 0 0 1-30.65-22.8L16.34 90.3A8 8 0 0 1 24 80h8l24 24h36.91L80.42 66.53A8 8 0 0 1 88 56h8l48 48h64a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M224 216a8 8 0 0 1-8 8H72a8 8 0 1 1 0-16h144a8 8 0 0 1 8 8m24-80v24a8 8 0 0 1-8 8H61.07a39.75 39.75 0 0 1-38.31-28.51L8.69 92.6A16 16 0 0 1 24 72h8a8 8 0 0 1 5.65 2.34L59.32 96h22.49l-9-26.94A16 16 0 0 1 88 48h8a8 8 0 0 1 5.66 2.34L147.32 96H208a40 40 0 0 1 40 40m-16 0a24 24 0 0 0-24-24h-64a8 8 0 0 1-5.65-2.34L92.69 64H88l12.49 37.47A8 8 0 0 1 92.91 112H56a8 8 0 0 1-5.66-2.34L28.69 88H24l14.07 46.9a23.85 23.85 0 0 0 23 17.1H232Z"></svg:path></svg:g>`,
})
export class PhAirplaneInFlightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneInFlightFillIcon],svg[ph-airplane-in-flight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 216a8 8 0 0 1-8 8H72a8 8 0 1 1 0-16h144a8 8 0 0 1 8 8M208 96h-60.68l-45.66-45.66A8 8 0 0 0 96 48h-8a16 16 0 0 0-15.17 21.06l9 26.94H59.32L37.66 74.34A8 8 0 0 0 32 72h-8A16 16 0 0 0 8.69 92.6l14.07 46.89A39.75 39.75 0 0 0 61.07 168H240a8 8 0 0 0 8-8v-24a40 40 0 0 0-40-40"></svg:path>`,
})
export class PhAirplaneInFlightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneInFlightLightIcon],svg[ph-airplane-in-flight-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 216a6 6 0 0 1-6 6H72a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6m24-80v24a6 6 0 0 1-6 6H61.07a37.77 37.77 0 0 1-36.4-27.08L10.6 92A14 14 0 0 1 24 74h8a6 6 0 0 1 4.24 1.76L58.49 98h26.1l-9.86-29.57A14 14 0 0 1 88 50h8a6 6 0 0 1 4.25 1.76L146.49 98H208a38 38 0 0 1 38 38m-12 0a26 26 0 0 0-26-26h-64a6 6 0 0 1-4.24-1.76L93.52 62H88a2 2 0 0 0-1.9 2.63l12.5 37.47a6 6 0 0 1-5.69 7.9H56a6 6 0 0 1-4.24-1.76L29.52 86H24a1.93 1.93 0 0 0-1.6.81a1.91 1.91 0 0 0-.31 1.76l14.06 46.9A25.86 25.86 0 0 0 61.07 154H234Z"></svg:path>`,
})
export class PhAirplaneInFlightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneInFlightThinIcon],svg[ph-airplane-in-flight-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 216a4 4 0 0 1-4 4H72a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4m24-80v24a4 4 0 0 1-4 4H61.06a35.79 35.79 0 0 1-34.48-25.66L12.52 91.45A12 12 0 0 1 24 76h8a4 4 0 0 1 2.83 1.17L57.66 100h29.7L76.63 67.79A12 12 0 0 1 88 52h8a4 4 0 0 1 2.83 1.17L145.66 100H208a36 36 0 0 1 36 36m-8 0a28 28 0 0 0-28-28h-64a4 4 0 0 1-2.83-1.17L94.35 60H88a4 4 0 0 0-3.8 5.26l12.5 37.48a4 4 0 0 1-3.79 5.26H56a4 4 0 0 1-2.82-1.17L30.35 84H24a4 4 0 0 0-3.83 5.15l14.07 46.9A27.83 27.83 0 0 0 61.06 156H236Z"></svg:path>`,
})
export class PhAirplaneInFlightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneLandingIcon],svg[ph-airplane-landing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 216a8 8 0 0 1-8 8H104a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m-26.16-24.3L53.21 142.24A40.12 40.12 0 0 1 24 103.72V48a16 16 0 0 1 21.06-15.18l5.47 1.82a8 8 0 0 1 5 4.87l10.6 29.37L96 77.39V48a16 16 0 0 1 21.06-15.18l5.47 1.82a8 8 0 0 1 4.85 4.5l22.5 53.63l60.84 17A40.13 40.13 0 0 1 240 148.32V184a8 8 0 0 1-10.16 7.7M224 148.32a24.09 24.09 0 0 0-17.58-23.13l-64.57-18a8 8 0 0 1-5.23-4.61L114 48.67l-2-.67v40a8 8 0 0 1-10.19 7.7l-44-12.54a8 8 0 0 1-5.33-5L41.79 48.59L40 48v55.72a24.09 24.09 0 0 0 17.53 23.12L224 173.45Z"></svg:path>`,
})
export class PhAirplaneLandingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneLandingBoldIcon],svg[ph-airplane-landing-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 216a12 12 0 0 1-12 12H104a12 12 0 0 1 0-24h140a12 12 0 0 1 12 12m-27.24-24.45L52.14 142.09A44.13 44.13 0 0 1 20 99.72V48a20 20 0 0 1 26.32-19l5.48 1.83a12 12 0 0 1 7.49 7.3l9.91 27.46l22.8 6.5V48a20 20 0 0 1 26.32-19l5.48 1.83a12 12 0 0 1 7.27 6.74l21.75 51.85l59 16.49A44.12 44.12 0 0 1 244 148.32V180a12 12 0 0 1-15.24 11.55M220 148.32a20.05 20.05 0 0 0-14.65-19.27L140.77 111a12 12 0 0 1-7.84-6.91L116 63.71V88a12 12 0 0 1-15.29 11.54L56.71 87a12 12 0 0 1-8-7.46L44 66.48v33.24A20.07 20.07 0 0 0 58.61 119L220 164.18Z"></svg:path>`,
})
export class PhAirplaneLandingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneLandingDuotoneIcon],svg[ph-airplane-landing-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 148.32V184L55.37 134.54A32 32 0 0 1 32 103.73V48a8 8 0 0 1 10.53-7.59L48 42.24l12 33.22L104 88V48a8 8 0 0 1 10.53-7.59l5.47 1.83l24 57.2l64.56 18A32 32 0 0 1 232 148.32" opacity=".2"></svg:path><svg:path d="M256 216a8 8 0 0 1-8 8H104a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m-26.16-24.3L53.21 142.24A40.12 40.12 0 0 1 24 103.72V48a16 16 0 0 1 21.06-15.18l5.47 1.82a8 8 0 0 1 5 4.87l10.6 29.37L96 77.39V48a16 16 0 0 1 21.06-15.18l5.47 1.82a8 8 0 0 1 4.85 4.5l22.5 53.63l60.84 17A40.13 40.13 0 0 1 240 148.32V184a8 8 0 0 1-10.16 7.7M224 148.32a24.09 24.09 0 0 0-17.58-23.13l-64.57-18a8 8 0 0 1-5.23-4.61L114 48.67l-2-.67v40a8 8 0 0 1-10.19 7.7l-44-12.54a8 8 0 0 1-5.33-5L41.79 48.59L40 48v55.72a24.09 24.09 0 0 0 17.53 23.12L224 173.45Z"></svg:path></svg:g>`,
})
export class PhAirplaneLandingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneLandingFillIcon],svg[ph-airplane-landing-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 216a8 8 0 0 1-8 8H104a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m-24-24a8 8 0 0 0 8-8v-35.68a40.13 40.13 0 0 0-29.28-38.54l-60.84-17l-22.5-53.63a8 8 0 0 0-4.85-4.5l-5.47-1.82A16 16 0 0 0 96 48v29.39l-29.87-8.51l-10.61-29.37a8 8 0 0 0-5-4.87l-5.47-1.82A16 16 0 0 0 24 48v55.72a40.12 40.12 0 0 0 29.21 38.52l176.63 49.46a8 8 0 0 0 2.16.3"></svg:path>`,
})
export class PhAirplaneLandingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneLandingLightIcon],svg[ph-airplane-landing-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M254 216a6 6 0 0 1-6 6H104a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6m-23.62-26.22L53.75 140.32A38.14 38.14 0 0 1 26 103.72V48a14 14 0 0 1 18.43-13.29l5.47 1.83a6 6 0 0 1 3.74 3.65l11 30.33L98 80V48a14 14 0 0 1 18.43-13.29l5.47 1.83a6 6 0 0 1 3.63 3.37l22.88 54.53l61.77 17.27A38.09 38.09 0 0 1 238 148.32V184a6 6 0 0 1-7.62 5.78M226 148.32a26.07 26.07 0 0 0-19-25l-64.58-18a6 6 0 0 1-3.91-3.46l-23-54.7l-2.89-1A2 2 0 0 0 110 48v40a6 6 0 0 1-7.64 5.77l-44-12.54a6 6 0 0 1-4-3.73L43.34 47l-2.71-.9A1.9 1.9 0 0 0 40 46a2 2 0 0 0-1.16.38A2 2 0 0 0 38 48v55.72a26.09 26.09 0 0 0 19 25l169 47.33Z"></svg:path>`,
})
export class PhAirplaneLandingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneLandingThinIcon],svg[ph-airplane-landing-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 216a4 4 0 0 1-4 4H104a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4m-21.08-28.15L54.29 138.4A36.12 36.12 0 0 1 28 103.73V48a12 12 0 0 1 15.79-11.37l5.48 1.82a4 4 0 0 1 2.49 2.44l11.31 31.29L100 82.71V48a12 12 0 0 1 15.79-11.38l5.48 1.82a4 4 0 0 1 2.42 2.25l23.25 55.42l62.7 17.52a36.1 36.1 0 0 1 26.36 34.7V184a4 4 0 0 1-5.08 3.85M228 148.33a28.07 28.07 0 0 0-20.51-27l-64.57-18a4 4 0 0 1-2.61-2.31L117 45.47l-3.75-1.25A4 4 0 0 0 108 48v40a4 4 0 0 1-5.1 3.85l-44-12.54a4 4 0 0 1-2.66-2.49L44.9 45.43l-3.64-1.21a3.95 3.95 0 0 0-3.6.55A4 4 0 0 0 36 48v55.72a28.1 28.1 0 0 0 20.45 27l171.55 48Z"></svg:path>`,
})
export class PhAirplaneLandingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneLightIcon],svg[ph-airplane-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.68 130.63L158 92.29V48a30 30 0 0 0-60 0v44.29l-76.68 38.34A6 6 0 0 0 18 136v32a6 6 0 0 0 7.18 5.88L98 159.32v22.19l-14.24 14.25A6 6 0 0 0 82 200v32a6 6 0 0 0 8.23 5.57L128 222.46l37.77 15.11A6 6 0 0 0 174 232v-32a6 6 0 0 0-1.76-4.24L158 181.51v-22.19l72.82 14.56A6 6 0 0 0 238 168v-32a6 6 0 0 0-3.32-5.37M226 160.68l-72.82-14.56A6 6 0 0 0 146 152v32a6 6 0 0 0 1.76 4.24L162 202.49v20.65l-31.77-12.71a6 6 0 0 0-4.46 0L94 223.14v-20.65l14.24-14.25A6 6 0 0 0 110 184v-32a6 6 0 0 0-7.18-5.88L30 160.68v-21l76.68-38.34A6 6 0 0 0 110 96V48a18 18 0 0 1 36 0v48a6 6 0 0 0 3.32 5.37L226 139.71Z"></svg:path>`,
})
export class PhAirplaneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneTakeoffIcon],svg[ph-airplane-takeoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 216a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m71.86-122.85a8 8 0 0 1-3.76 5.39l-147.41 88a40.2 40.2 0 0 1-20.26 5.52a39.78 39.78 0 0 1-27.28-10.87l-.12-.12L13 145.8a16 16 0 0 1 4.49-26.21l3-1.47a8 8 0 0 1 6.08-.4l28.26 9.54L75 115.06L53.17 93.87A16 16 0 0 1 57.7 67.4l.32-.13l7.15-2.71a8 8 0 0 1 5.59 0l53.94 19.82l51.57-30.78a39.82 39.82 0 0 1 51.28 9.12l.12.15l18.64 23.89a8 8 0 0 1 1.55 6.39m-19.74-3.7l-13-16.67a23.88 23.88 0 0 0-30.68-5.42l-54.8 32.72a8.06 8.06 0 0 1-6.87.64L68 80.58l-4 1.53l.21.2l29.36 28.49a8 8 0 0 1-1.43 12.58l-32.21 19.49a8 8 0 0 1-6.7.73l-28.67-9.67l-.19.1l-.37.17a.7.7 0 0 1 .13.12l36 35.26a23.85 23.85 0 0 0 28.42 3.18Z"></svg:path>`,
})
export class PhAirplaneTakeoffIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneTakeoffBoldIcon],svg[ph-airplane-takeoff-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 216a12 12 0 0 1-12 12H24a12 12 0 1 1 0-24h144a12 12 0 0 1 12 12m71.79-126.12a12 12 0 0 1-5.64 8.1L98.75 186l-.13.07a43.74 43.74 0 0 1-52.2-5.94l-.19-.18l-36-35.25a20 20 0 0 1 5.55-32.7l2.94-1.44a12 12 0 0 1 9.12-.59l26.5 8.94l14.15-8.56l-18.07-17.57a20 20 0 0 1 5.7-33.05l.48-.2l7.15-2.7a12 12 0 0 1 8.4 0L124.29 76l49.93-29.8a43.8 43.8 0 0 1 56.43 10a2 2 0 0 1 .17.22l18.64 23.88a11.94 11.94 0 0 1 2.33 9.58m-29.61-5.54L212 71.29a19.89 19.89 0 0 0-25.54-4.48l-54.77 32.7a12 12 0 0 1-10.3 1l-46-16.94l21 20.4a12 12 0 0 1-2.15 18.87L62 142.29a12 12 0 0 1-10 1.1l-13.35-4.5l24.31 23.8a19.89 19.89 0 0 0 23.6 2.65Z"></svg:path>`,
})
export class PhAirplaneTakeoffBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneTakeoffDuotoneIcon],svg[ph-airplane-takeoff-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m240 91.64l-147.41 88a32 32 0 0 1-38-4.32L18.53 140a8 8 0 0 1 2.32-13.19l3.15-1.54L55.79 136L88 116.51L58.65 88a8 8 0 0 1 2.2-13.3L68 72l57.53 21.17l54.84-32.75a32 32 0 0 1 41 7.32Z" opacity=".2"></svg:path><svg:path d="M176 216a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m71.86-122.85a8 8 0 0 1-3.76 5.39l-147.41 88a40.2 40.2 0 0 1-20.26 5.52a39.78 39.78 0 0 1-27.28-10.87l-.12-.12L13 145.8a16 16 0 0 1 4.49-26.21l3-1.47a8 8 0 0 1 6.08-.4l28.26 9.54L75 115.06L53.17 93.87A16 16 0 0 1 57.7 67.4l.32-.13l7.15-2.71a8 8 0 0 1 5.59 0l53.94 19.82l51.57-30.78a39.82 39.82 0 0 1 51.28 9.12l.12.15l18.64 23.89a8 8 0 0 1 1.55 6.39m-19.74-3.7l-13-16.67a23.88 23.88 0 0 0-30.68-5.42l-54.8 32.72a8.06 8.06 0 0 1-6.87.64L68 80.58l-4 1.53l.21.2l29.36 28.49a8 8 0 0 1-1.43 12.58l-32.21 19.49a8 8 0 0 1-6.7.73l-28.67-9.67l-.19.1l-.37.17a.7.7 0 0 1 .13.12l36 35.26a23.85 23.85 0 0 0 28.42 3.18Z"></svg:path></svg:g>`,
})
export class PhAirplaneTakeoffDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneTakeoffFillIcon],svg[ph-airplane-takeoff-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 216a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m70.31-129.24l-18.64-23.89l-.12-.15a39.82 39.82 0 0 0-51.28-9.12L124.7 84.38L70.76 64.54a8 8 0 0 0-5.59 0L58 67.27l-.32.13a16 16 0 0 0-4.53 26.47L75 115.06l-20.17 12.2l-28.26-9.54a8 8 0 0 0-6.08.4l-3 1.47A16 16 0 0 0 13 145.8l36 35.27l.12.12a39.78 39.78 0 0 0 27.28 10.87a40.2 40.2 0 0 0 20.26-5.52l147.41-88a8 8 0 0 0 2.21-11.78Z"></svg:path>`,
})
export class PhAirplaneTakeoffFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneTakeoffLightIcon],svg[ph-airplane-takeoff-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 216a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6m71.9-123.22a6 6 0 0 1-2.82 4l-147.41 88a38.2 38.2 0 0 1-19.23 5.23a37.8 37.8 0 0 1-25.92-10.33l-.1-.09l-36.05-35.23a14 14 0 0 1 4-23l3-1.49a6 6 0 0 1 4.56-.29l29.15 9.83l23.17-14l-23.7-23a14 14 0 0 1 4-23.18l.24-.1l7.15-2.71a6 6 0 0 1 4.19 0l54.84 20.18l52.38-31.27A37.81 37.81 0 0 1 226 64l.09.11L244.73 88a6 6 0 0 1 1.17 4.78M231.09 90l-14.42-18.47a25.86 25.86 0 0 0-33.26-5.89L128.6 98.36a6 6 0 0 1-5.15.48L68 78.45l-4.9 1.85a1.91 1.91 0 0 0-1.1 1.47a2 2 0 0 0 .63 1.82l.17.15l29.35 28.49a6 6 0 0 1-1.07 9.44l-32.19 19.49a6 6 0 0 1-5 .55l-29.45-9.94l-.93.46l-.28.13a2 2 0 0 0-.58 3.29l.1.09l36 35.28a25.84 25.84 0 0 0 30.81 3.47Z"></svg:path>`,
})
export class PhAirplaneTakeoffLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneTakeoffThinIcon],svg[ph-airplane-takeoff-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 216a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4m71.93-123.59a4 4 0 0 1-1.88 2.7l-147.41 88a36.15 36.15 0 0 1-18.2 4.95a35.78 35.78 0 0 1-24.55-9.79l-36.16-35.38a12 12 0 0 1 3.44-19.68l3.07-1.5a4 4 0 0 1 3-.2l30 10.13L81.5 115.8L55.91 91a12 12 0 0 1 3.36-19.89l.16-.06l7.15-2.71a4 4 0 0 1 2.8 0l55.73 20.46L178.32 57a35.83 35.83 0 0 1 46.14 8.22l18.69 24a4 4 0 0 1 .78 3.19m-9.87-1.85l-15.85-20.32a27.85 27.85 0 0 0-35.81-6.33l-54.82 32.73a4 4 0 0 1-3.44.32L68 76.31l-5.66 2.14a4 4 0 0 0-1 6.62a1 1 0 0 0 .11.11l29.35 28.49a4 4 0 0 1-.72 6.29l-32.22 19.48a4 4 0 0 1-3.35.37l-30.23-10.2l-1.67.82l-.18.09a4 4 0 0 0-1.16 6.59l36.15 35.39a27.82 27.82 0 0 0 33.16 3.72Z"></svg:path>`,
})
export class PhAirplaneTakeoffThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneTaxiingIcon],svg[ph-airplane-taxiing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 96h-60.68l-45.66-45.66A8 8 0 0 0 96 48h-8a16 16 0 0 0-15.17 21.06l9 26.94H59.32L37.66 74.34A8 8 0 0 0 32 72h-8A16 16 0 0 0 8.69 92.6l14.07 46.89A39.75 39.75 0 0 0 61.07 168H240a8 8 0 0 0 8-8v-24a40 40 0 0 0-40-40m24 56H61.07a23.85 23.85 0 0 1-23-17.1L24 88h4.68l21.66 21.66A8 8 0 0 0 56 112h36.9a8 8 0 0 0 7.59-10.53L88 64h4.68l45.66 45.66A8 8 0 0 0 144 112h64a24 24 0 0 1 24 24Zm-8 48a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-96 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhAirplaneTaxiingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneTaxiingBoldIcon],svg[ph-airplane-taxiing-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 88h-59l-44.51-44.49A12 12 0 0 0 96 40h-8a20 20 0 0 0-19 26.33L76.27 88H61L40.49 67.51A12 12 0 0 0 32 64h-8A20 20 0 0 0 4.86 89.75l14.07 46.89A43.72 43.72 0 0 0 61.07 168H240a12 12 0 0 0 12-12v-24a44.05 44.05 0 0 0-44-44m20 56H61.07a19.89 19.89 0 0 1-19.16-14.25L30.4 91.36l17.12 17.13A12 12 0 0 0 56 112h36.9a12 12 0 0 0 11.4-15.79l-9.47-28.42l40.69 40.7A12 12 0 0 0 144 112h64a20 20 0 0 1 20 20Zm0 60a20 20 0 1 1-20-20a20 20 0 0 1 20 20m-96 0a20 20 0 1 1-20-20a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhAirplaneTaxiingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneTaxiingDuotoneIcon],svg[ph-airplane-taxiing-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 136v24H61.06a32 32 0 0 1-30.65-22.8L16.34 90.3A8 8 0 0 1 24 80h8l24 24h36.91L80.42 66.53A8 8 0 0 1 88 56h8l48 48h64a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M208 96h-60.68l-45.66-45.66A8 8 0 0 0 96 48h-8a16 16 0 0 0-15.17 21.06l9 26.94H59.32L37.66 74.34A8 8 0 0 0 32 72h-8A16 16 0 0 0 8.69 92.6l14.07 46.89A39.75 39.75 0 0 0 61.07 168H240a8 8 0 0 0 8-8v-24a40 40 0 0 0-40-40m24 56H61.07a23.85 23.85 0 0 1-23-17.1L24 88h4.68l21.66 21.66A8 8 0 0 0 56 112h36.9a8 8 0 0 0 7.59-10.53L88 64h4.68l45.66 45.66A8 8 0 0 0 144 112h64a24 24 0 0 1 24 24Zm-8 48a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-96 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhAirplaneTaxiingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneTaxiingFillIcon],svg[ph-airplane-taxiing-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 136v24a8 8 0 0 1-8 8H61.07a39.75 39.75 0 0 1-38.31-28.51L8.69 92.6A16 16 0 0 1 24 72h8a8 8 0 0 1 5.65 2.34L59.32 96h22.49l-9-26.94A16 16 0 0 1 88 48h8a8 8 0 0 1 5.66 2.34L147.32 96H208a40 40 0 0 1 40 40m-40 48a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-96 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhAirplaneTaxiingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneTaxiingLightIcon],svg[ph-airplane-taxiing-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 98h-61.51l-46.24-46.24A6 6 0 0 0 96 50h-8a14 14 0 0 0-13.27 18.43L84.59 98h-26.1L36.25 75.76A6 6 0 0 0 32 74h-8a14 14 0 0 0-13.4 18l14.07 46.9a37.77 37.77 0 0 0 36.4 27.1H240a6 6 0 0 0 6-6v-24a38 38 0 0 0-38-38m26 56H61.07a25.86 25.86 0 0 1-24.91-18.53L22.1 88.57a1.91 1.91 0 0 1 .31-1.76A1.93 1.93 0 0 1 24 86h5.51l22.24 22.24A6 6 0 0 0 56 110h36.91a6 6 0 0 0 5.69-7.9L86.11 64.63A2 2 0 0 1 88 62h5.51l46.24 46.24A6 6 0 0 0 144 110h64a26 26 0 0 1 26 26Zm-12 46a14 14 0 1 1-14-14a14 14 0 0 1 14 14m-96 0a14 14 0 1 1-14-14a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhAirplaneTaxiingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneTaxiingThinIcon],svg[ph-airplane-taxiing-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 100h-62.34L98.83 53.17A4 4 0 0 0 96 52h-8a12 12 0 0 0-11.37 15.79L87.36 100h-29.7L34.83 77.17A4 4 0 0 0 32 76h-8a12 12 0 0 0-11.48 15.45l14.06 46.89A35.79 35.79 0 0 0 61.06 164H240a4 4 0 0 0 4-4v-24a36 36 0 0 0-36-36m28 56H61.06a27.83 27.83 0 0 1-26.81-19.95l-14.07-46.9A4 4 0 0 1 24 84h6.34l22.83 22.83A4 4 0 0 0 56 108h36.91a4 4 0 0 0 3.79-5.26L84.21 65.26A4 4 0 0 1 88 60h6.34l46.82 46.83A4 4 0 0 0 144 108h64a28 28 0 0 1 28 28Zm-16 44a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhAirplaneTaxiingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneThinIcon],svg[ph-airplane-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233.79 132.42L156 93.53V48a28 28 0 0 0-56 0v45.53l-77.79 38.89A4 4 0 0 0 20 136v32a4 4 0 0 0 4.78 3.92l75.22-15v25.46l-14.83 14.79A4 4 0 0 0 84 200v32a4 4 0 0 0 5.49 3.71l38.51-15.4l38.51 15.4a3.9 3.9 0 0 0 1.49.29a3.94 3.94 0 0 0 2.24-.69A4 4 0 0 0 172 232v-32a4 4 0 0 0-1.17-2.83L156 182.34v-25.46l75.22 15A4 4 0 0 0 236 168v-32a4 4 0 0 0-2.21-3.58m-5.79 30.7l-75.22-15A4 4 0 0 0 148 152v32a4 4 0 0 0 1.17 2.83L164 201.66v24.43l-34.51-13.8a4 4 0 0 0-3 0L92 226.09v-24.43l14.83-14.83A4 4 0 0 0 108 184v-32a4 4 0 0 0-4.78-3.92L28 163.12v-24.65l77.79-38.89A4 4 0 0 0 108 96V48a20 20 0 0 1 40 0v48a4 4 0 0 0 2.21 3.58L228 138.47Z"></svg:path>`,
})
export class PhAirplaneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneTiltIcon],svg[ph-airplane-tilt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m185.33 114.21l29.14-27.42l.17-.17a32 32 0 0 0-45.26-45.26c0 .06-.11.11-.17.17l-27.42 29.14l-83-30.2a8 8 0 0 0-8.39 1.86l-24 24a8 8 0 0 0 1.22 12.31l63.89 42.59L76.69 136H56a8 8 0 0 0-5.65 2.34l-24 24A8 8 0 0 0 29 175.42l36.82 14.73l14.7 36.75l.06.16a8 8 0 0 0 13.18 2.47l23.87-23.88A8 8 0 0 0 120 200v-20.69l14.76-14.76l42.59 63.89a8 8 0 0 0 12.31 1.22l24-24a8 8 0 0 0 1.86-8.39Zm-.07 97.23l-42.59-63.88a8 8 0 0 0-5.87-3.56h-.79a8 8 0 0 0-5.66 2.35l-24 24A8 8 0 0 0 104 176v20.69l-13.07 13.07L79.43 181a8 8 0 0 0-4.43-4.43l-28.74-11.5L59.32 152H80a8 8 0 0 0 5.66-2.34l24-24a8 8 0 0 0-1.22-12.32l-63.88-42.6l13.5-13.49l83.22 30.26a8 8 0 0 0 8.56-2l30.94-32.91a16 16 0 0 1 22.62 22.63l-32.87 30.93a8 8 0 0 0-2 8.56l30.26 83.22Z"></svg:path>`,
})
export class PhAirplaneTiltIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneTiltBoldIcon],svg[ph-airplane-tilt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m190 115.31l27.21-25.61l.26-.26a36 36 0 0 0-50.91-50.91c-.09.08-.17.17-.26.26L140.69 66L60.1 36.71a12 12 0 0 0-12.58 2.79l-24 24A12 12 0 0 0 25.34 82l59.83 39.88L75 132H56a12 12 0 0 0-8.48 3.51l-24 24a12 12 0 0 0 4 19.62l35.23 14.1l14.06 35.14l.09.22a12 12 0 0 0 19.76 3.7l23.81-23.81A12 12 0 0 0 124 200v-19l10.13-10.13L174 230.65a12 12 0 0 0 18.47 1.83l24-24a12 12 0 0 0 2.79-12.59Zm-4.11 89.85L146 145.33a12 12 0 0 0-8.8-5.28a12 12 0 0 0-1.2-.05a12 12 0 0 0-8.49 3.52l-24 24A12 12 0 0 0 100 176v19l-7.62 7.62l-9.24-23.1a12 12 0 0 0-6.69-6.69l-23.1-9.24L61 156h19a12 12 0 0 0 8.48-3.51l24-24a12 12 0 0 0-1.82-18.49L50.84 70.12l8.24-8.25l80.83 29.39a12 12 0 0 0 12.84-3.05l30.89-32.82a12 12 0 0 1 17 17l-32.82 30.89a12 12 0 0 0-3.06 12.84l29.4 80.82Z"></svg:path>`,
})
export class PhAirplaneTiltBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneTiltDuotoneIcon],svg[ph-airplane-tilt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m209 81l-33 31l32 88l-24 24l-48-72l-24 24v24l-24 24l-16-40l-40-16l24-24h24l24-24l-72-48l24-24l88 32l31-33a24 24 0 0 1 34 34" opacity=".2"></svg:path><svg:path d="m185.33 114.21l29.14-27.43l.17-.16a32 32 0 0 0-45.26-45.26l-.16.17l-27.43 29.14l-83-30.2a8 8 0 0 0-8.39 1.86l-24 24a8 8 0 0 0 1.22 12.31l63.89 42.59L76.69 136H56a8 8 0 0 0-5.65 2.34l-24 24A8 8 0 0 0 29 175.42l36.82 14.73l14.7 36.75l.06.16a8 8 0 0 0 13.18 2.47l23.87-23.88A8 8 0 0 0 120 200v-20.69l14.76-14.76l42.59 63.89a8 8 0 0 0 12.31 1.22l24-24a8 8 0 0 0 1.86-8.39Zm-.07 97.23l-42.59-63.89a8 8 0 0 0-5.87-3.55a7 7 0 0 0-.79 0a8 8 0 0 0-5.66 2.34l-24 24A8 8 0 0 0 104 176v20.69l-13.07 13.07L79.43 181a8 8 0 0 0-4.43-4.43l-28.74-11.5L59.32 152H80a8 8 0 0 0 5.66-2.34l24-24a8 8 0 0 0-1.22-12.32l-63.88-42.6l13.5-13.49l83.22 30.26a8 8 0 0 0 8.56-2l30.94-32.88a16 16 0 0 1 22.62 22.59l-32.87 30.94a8 8 0 0 0-2 8.56l30.26 83.22Z"></svg:path></svg:g>`,
})
export class PhAirplaneTiltDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneTiltFillIcon],svg[ph-airplane-tilt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.52 197.26a8 8 0 0 1-1.86 8.39l-24 24A8 8 0 0 1 184 232a7 7 0 0 1-.79 0a8 8 0 0 1-5.87-3.52l-44.07-66.12L112 183.59V208a8 8 0 0 1-2.34 5.65s-14 14.06-15.88 15.88a7.9 7.9 0 0 1-2.78 1.88a8 8 0 0 1-10.41-4.35l-.06-.15l-14.7-36.76L29 175.42a8 8 0 0 1-2.69-13.08l16-16A8 8 0 0 1 48 144h24.4l21.27-21.27l-66.11-44.08a8 8 0 0 1-1.22-12.32l24-24a8 8 0 0 1 8.39-1.86l85.94 31.25l31.53-31.53a28 28 0 0 1 39.6 39.6l-31.53 31.53Z"></svg:path>`,
})
export class PhAirplaneTiltFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneTiltLightIcon],svg[ph-airplane-tilt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m183 113.65l30.1-28.32l.13-.13a30 30 0 0 0-42.43-42.43l-.13.13L142.35 73l-84.3-30.65a6 6 0 0 0-6.29 1.39l-24 24a6 6 0 0 0 .91 9.26l65.92 43.94L77.52 138H56a6 6 0 0 0-4.24 1.76l-24 24a6 6 0 0 0 2 9.82l37.62 15l15 37.56v.12a6 6 0 0 0 7.81 3.27a5.9 5.9 0 0 0 2.07-1.41l23.91-23.91A6 6 0 0 0 118 200v-21.52l17.07-17.07L179 227.33a6 6 0 0 0 9.23.91l24-24a6 6 0 0 0 1.39-6.29Zm1.94 100.93L141 148.66a6 6 0 0 0-4.4-2.64h-.59a6 6 0 0 0-4.24 1.76l-24 24A6 6 0 0 0 106 176v21.52l-15.8 15.8l-12.63-31.55a6 6 0 0 0-3.34-3.35L42.68 165.8L58.49 150H80a6 6 0 0 0 4.25-1.76l24-24a6 6 0 0 0-.92-9.23L41.42 71.06l16.12-16.13L142 85.63a6 6 0 0 0 6.42-1.53l31-32.9a18 18 0 0 1 25.38 25.46l-32.9 31a6 6 0 0 0-1.53 6.42l30.7 84.41Z"></svg:path>`,
})
export class PhAirplaneTiltLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplaneTiltThinIcon],svg[ph-airplane-tilt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m180.67 113.1l31.05-29.23l.09-.08a28 28 0 0 0-39.6-39.6l-.08.09l-29.23 31.05l-85.53-31.1a4 4 0 0 0-4.2.93l-24 24a4 4 0 0 0 .61 6.16l68 45.29L78.35 140H56a4 4 0 0 0-2.83 1.18l-24 24a4 4 0 0 0 1.34 6.54l38.42 15.36l15.34 38.37v.09a4 4 0 0 0 6.59 1.23l23.93-23.93A4 4 0 0 0 116 200v-22.35l19.38-19.38l45.29 67.95a4 4 0 0 0 6.16.61l24-24a4 4 0 0 0 .93-4.2Zm4 104.62l-45.29-67.94a4 4 0 0 0-2.98-1.78h-.39a4 4 0 0 0-2.83 1.18l-24 24A4 4 0 0 0 108 176v22.34l-18.53 18.54l-13.75-34.37a4 4 0 0 0-2.23-2.23l-34.37-13.75L57.66 148H80a4 4 0 0 0 2.83-1.17l24-24a4 4 0 0 0-.61-6.16l-67.94-45.3L57 52.62l85.61 31.13a4 4 0 0 0 4.28-1l31-32.93a20 20 0 0 1 28.31 28.27l-32.93 31a4 4 0 0 0-1 4.28L203.38 199Z"></svg:path>`,
})
export class PhAirplaneTiltThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplayIcon],svg[ph-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134.08 154.79a8 8 0 0 0-12.15 0l-48 56A8 8 0 0 0 80 224h96a8 8 0 0 0 6.07-13.21ZM97.39 208L128 172.29L158.61 208ZM232 64v112a24 24 0 0 1-24 24h-8a8 8 0 0 1 0-16h8a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8H48a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h8a8 8 0 0 1 0 16h-8a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h160a24 24 0 0 1 24 24"></svg:path>`,
})
export class PhAirplayIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplayBoldIcon],svg[ph-airplay-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M137.11 152.19a12 12 0 0 0-18.22 0l-48 56A12 12 0 0 0 80 228h96a12 12 0 0 0 9.11-19.81Zm-31 51.81L128 178.44L149.91 204ZM236 64v112a28 28 0 0 1-28 28h-4a12 12 0 0 1 0-24h4a4 4 0 0 0 4-4V64a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v112a4 4 0 0 0 4 4h4a12 12 0 0 1 0 24h-4a28 28 0 0 1-28-28V64a28 28 0 0 1 28-28h160a28 28 0 0 1 28 28"></svg:path>`,
})
export class PhAirplayBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplayDuotoneIcon],svg[ph-airplay-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v112a16 16 0 0 1-16 16h-52.57L128 160l-27.43 32H48a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M134.08 154.79a8 8 0 0 0-12.15 0l-48 56A8 8 0 0 0 80 224h96a8 8 0 0 0 6.07-13.21ZM97.39 208L128 172.29L158.61 208ZM232 64v112a24 24 0 0 1-24 24h-8a8 8 0 0 1 0-16h8a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8H48a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h8a8 8 0 0 1 0 16h-8a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h160a24 24 0 0 1 24 24"></svg:path></svg:g>`,
})
export class PhAirplayDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplayFillIcon],svg[ph-airplay-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174.15 210.88A8 8 0 0 1 168 224H88a8 8 0 0 1-6.15-13.12l40-48a8 8 0 0 1 12.29 0ZM208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h20.22a4 4 0 0 0 3.07-1.44l38.28-45.92a24 24 0 0 1 21-8.51a24.68 24.68 0 0 1 16.25 8.94l37.91 45.49a4 4 0 0 0 3.07 1.44H208a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24"></svg:path>`,
})
export class PhAirplayFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplayLightIcon],svg[ph-airplay-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132.56 156.1a6 6 0 0 0-9.11 0l-48 56A6 6 0 0 0 80 222h96a6 6 0 0 0 4.56-9.9ZM93.05 210l35-40.78L163 210ZM230 64v112a22 22 0 0 1-22 22h-8a6 6 0 0 1 0-12h8a10 10 0 0 0 10-10V64a10 10 0 0 0-10-10H48a10 10 0 0 0-10 10v112a10 10 0 0 0 10 10h8a6 6 0 0 1 0 12h-8a22 22 0 0 1-22-22V64a22 22 0 0 1 22-22h160a22 22 0 0 1 22 22"></svg:path>`,
})
export class PhAirplayLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAirplayThinIcon],svg[ph-airplay-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M131 157.4a4 4 0 0 0-6.07 0l-48 56a4 4 0 0 0 3 6.6h96a4 4 0 0 0 3-6.6ZM88.7 212l39.3-45.85L167.3 212ZM228 64v112a20 20 0 0 1-20 20h-8a4 4 0 0 1 0-8h8a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h8a4 4 0 0 1 0 8h-8a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhAirplayThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlarmIcon],svg[ph-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80M61.66 37.66l-32 32a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 11.32m176 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32M184 128a8 8 0 0 1 0 16h-56a8 8 0 0 1-8-8V80a8 8 0 0 1 16 0v48Z"></svg:path>`,
})
export class PhAlarmIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlarmBoldIcon],svg[ph-alarm-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 36a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 36m0 176a76 76 0 1 1 76-76a76.08 76.08 0 0 1-76 76M32.49 72.49a12 12 0 1 1-17-17l32-32a12 12 0 1 1 17 17Zm208 0a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17l32 32a12 12 0 0 1 0 17M176 124a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12V88a12 12 0 0 1 24 0v36Z"></svg:path>`,
})
export class PhAlarmBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlarmDuotoneIcon],svg[ph-alarm-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 136a88 88 0 1 1-88-88a88 88 0 0 1 88 88" opacity=".2"></svg:path><svg:path d="M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80M61.66 37.66l-32 32a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 11.32m176 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32M184 128a8 8 0 0 1 0 16h-56a8 8 0 0 1-8-8V80a8 8 0 0 1 16 0v48Z"></svg:path></svg:g>`,
})
export class PhAlarmDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlarmFillIcon],svg[ph-alarm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m61.66 37.66l-32 32a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 11.32m176 20.68l-32-32a8 8 0 0 0-11.32 11.32l32 32a8 8 0 0 0 11.32-11.32M224 136a96 96 0 1 1-96-96a96.11 96.11 0 0 1 96 96m-32 0a8 8 0 0 0-8-8h-48V80a8 8 0 0 0-16 0v56a8 8 0 0 0 8 8h56a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhAlarmFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlarmLightIcon],svg[ph-alarm-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 42a94 94 0 1 0 94 94a94.11 94.11 0 0 0-94-94m0 176a82 82 0 1 1 82-82a82.1 82.1 0 0 1-82 82M60.24 36.24l-32 32a6 6 0 1 1-8.48-8.48l32-32a6 6 0 1 1 8.48 8.48m176 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48l32 32a6 6 0 0 1 0 8.48M184 130a6 6 0 0 1 0 12h-56a6 6 0 0 1-6-6V80a6 6 0 0 1 12 0v50Z"></svg:path>`,
})
export class PhAlarmLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlarmThinIcon],svg[ph-alarm-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 44a92 92 0 1 0 92 92a92.1 92.1 0 0 0-92-92m0 176a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84M58.83 34.83l-32 32a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 5.66m176 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66l32 32a4 4 0 0 1 0 5.66M188 136a4 4 0 0 1-4 4h-56a4 4 0 0 1-4-4V80a4 4 0 0 1 8 0v52h52a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhAlarmThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlienIcon],svg[ph-alien-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 16a96.11 96.11 0 0 0-96 96c0 24 12.56 55.06 33.61 83c21.18 28.15 44.5 45 62.39 45s41.21-16.81 62.39-45c21.05-28 33.61-59 33.61-83a96.11 96.11 0 0 0-96-96m49.61 169.42C160.24 208.49 140.31 224 128 224s-32.24-15.51-49.61-38.58C59.65 160.5 48 132.37 48 112a80 80 0 0 1 160 0c0 20.37-11.65 48.5-30.39 73.42M120 136a40 40 0 0 0-40-40a16 16 0 0 0-16 16a40 40 0 0 0 40 40a16 16 0 0 0 16-16m-40-24a24 24 0 0 1 24 24a24 24 0 0 1-24-24m96-16a40 40 0 0 0-40 40a16 16 0 0 0 16 16a40 40 0 0 0 40-40a16 16 0 0 0-16-16m-24 40a24 24 0 0 1 24-24a24 24 0 0 1-24 24m0 48a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhAlienIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlienBoldIcon],svg[ph-alien-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 12A100.11 100.11 0 0 0 28 112c0 24.86 12.86 56.8 34.41 85.44C70.63 208.36 99.64 244 128 244s57.37-35.64 65.59-46.56C215.14 168.8 228 136.86 228 112A100.11 100.11 0 0 0 128 12m46.41 171c-13.83 18.38-34.21 37-46.41 37s-32.58-18.61-46.41-37C63.34 158.75 52 131.54 52 112a76 76 0 0 1 152 0c0 19.54-11.34 46.75-29.59 71M104 148a36 36 0 0 1-36-36a12 12 0 0 1 12-12a36 36 0 0 1 36 36a12 12 0 0 1-12 12m84-36a36 36 0 0 1-36 36a12 12 0 0 1-12-12a36 36 0 0 1 36-36a12 12 0 0 1 12 12m-36 72a12 12 0 0 1-12 12h-24a12 12 0 0 1 0-24h24a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhAlienBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlienDuotoneIcon],svg[ph-alien-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 24a88 88 0 0 0-88 88c0 48.6 56 120 88 120s88-71.4 88-120a88 88 0 0 0-88-88m-24 120a32 32 0 0 1-32-32a8 8 0 0 1 8-8a32 32 0 0 1 32 32a8 8 0 0 1-8 8m48 0a8 8 0 0 1-8-8a32 32 0 0 1 32-32a8 8 0 0 1 8 8a32 32 0 0 1-32 32" opacity=".2"></svg:path><svg:path d="M128 16a96.11 96.11 0 0 0-96 96c0 24 12.56 55.06 33.61 83c21.18 28.15 44.5 45 62.39 45s41.21-16.81 62.39-45c21.05-28 33.61-59 33.61-83a96.11 96.11 0 0 0-96-96m49.61 169.42C160.24 208.49 140.31 224 128 224s-32.24-15.51-49.61-38.58C59.65 160.5 48 132.37 48 112a80 80 0 0 1 160 0c0 20.37-11.65 48.5-30.39 73.42M120 136a40 40 0 0 0-40-40a16 16 0 0 0-16 16a40 40 0 0 0 40 40a16 16 0 0 0 16-16m-40-24a24 24 0 0 1 24 24a24 24 0 0 1-24-24m96-16a40 40 0 0 0-40 40a16 16 0 0 0 16 16a40 40 0 0 0 40-40a16 16 0 0 0-16-16m-24 40a24 24 0 0 1 24-24a24 24 0 0 1-24 24m0 48a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhAlienDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlienFillIcon],svg[ph-alien-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 16a96.11 96.11 0 0 0-96 96c0 24 12.56 55.06 33.61 83c21.18 28.15 44.5 45 62.39 45s41.21-16.81 62.39-45c21.05-28 33.61-59 33.61-83a96.11 96.11 0 0 0-96-96M64 116a12 12 0 0 1 12-12a36 36 0 0 1 36 36a12 12 0 0 1-12 12a36 36 0 0 1-36-36m80 84h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16m12-48a12 12 0 0 1-12-12a36 36 0 0 1 36-36a12 12 0 0 1 12 12a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhAlienFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlienLightIcon],svg[ph-alien-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 18a94.11 94.11 0 0 0-94 94c0 23.6 12.41 54.2 33.21 81.83C83.27 215.18 107.68 238 128 238s44.73-22.82 60.79-44.17C209.59 166.2 222 135.6 222 112a94.11 94.11 0 0 0-94-94m51.21 168.62C161.48 210.17 140.91 226 128 226s-33.48-15.83-51.21-39.38C57.8 161.37 46 132.78 46 112a82 82 0 0 1 164 0c0 20.78-11.8 49.37-30.79 74.62M118 136a38 38 0 0 0-38-38a14 14 0 0 0-14 14a38 38 0 0 0 38 38a14 14 0 0 0 14-14m-14 2a26 26 0 0 1-26-26a2 2 0 0 1 2-2a26 26 0 0 1 26 26a2 2 0 0 1-2 2m72-40a38 38 0 0 0-38 38a14 14 0 0 0 14 14a38 38 0 0 0 38-38a14 14 0 0 0-14-14m-24 40a2 2 0 0 1-2-2a26 26 0 0 1 26-26a2 2 0 0 1 2 2a26 26 0 0 1-26 26m-2 46a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhAlienLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlienThinIcon],svg[ph-alien-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a92.1 92.1 0 0 0-92 92c0 23.19 12.26 53.33 32.8 80.63C84.58 213.6 108.41 236 128 236s43.42-22.4 59.2-43.37c20.54-27.3 32.8-57.44 32.8-80.63a92.1 92.1 0 0 0-92-92m52.8 167.82C162.44 212.23 141.71 228 128 228s-34.44-15.77-52.8-40.18C56 162.24 44 133.19 44 112a84 84 0 0 1 168 0c0 21.19-11.95 50.24-31.2 75.82M116 136a36 36 0 0 0-36-36a12 12 0 0 0-12 12a36 36 0 0 0 36 36a12 12 0 0 0 12-12m-12 4a28 28 0 0 1-28-28a4 4 0 0 1 4-4a28 28 0 0 1 28 28a4 4 0 0 1-4 4m72-40a36 36 0 0 0-36 36a12 12 0 0 0 12 12a36 36 0 0 0 36-36a12 12 0 0 0-12-12m-24 40a4 4 0 0 1-4-4a28 28 0 0 1 28-28a4 4 0 0 1 4 4a28 28 0 0 1-28 28m-4 44a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhAlienThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignBottomIcon],svg[ph-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-88-40V80a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v96a16 16 0 0 1-16 16h-40a16 16 0 0 1-16-16m16 0h40V80h-40Zm-104 0V40a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v136a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16m16 0h40V40H64Z"></svg:path>`,
})
export class PhAlignBottomIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignBottomBoldIcon],svg[ph-align-bottom-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 216a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12m-92-48V80a20 20 0 0 1 20-20h36a20 20 0 0 1 20 20v88a20 20 0 0 1-20 20h-36a20 20 0 0 1-20-20m24-4h28V84h-28Zm-116 4V40a20 20 0 0 1 20-20h36a20 20 0 0 1 20 20v128a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20m24-4h28V44H68Z"></svg:path>`,
})
export class PhAlignBottomBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignBottomDuotoneIcon],svg[ph-align-bottom-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 80v96a8 8 0 0 1-8 8h-40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8m-96-48H64a8 8 0 0 0-8 8v136a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M64 192h40a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16m0-152h40v136H64Zm160 176a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-72-24h40a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16h-40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16m0-112h40v96h-40Z"></svg:path></svg:g>`,
})
export class PhAlignBottomDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignBottomFillIcon],svg[ph-align-bottom-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-72-24h40a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16h-40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16m-88 0h40a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16"></svg:path>`,
})
export class PhAlignBottomFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignBottomLightIcon],svg[ph-align-bottom-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 216a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6m-84-40V80a14 14 0 0 1 14-14h40a14 14 0 0 1 14 14v96a14 14 0 0 1-14 14h-40a14 14 0 0 1-14-14m12 0a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V80a2 2 0 0 0-2-2h-40a2 2 0 0 0-2 2Zm-100 0V40a14 14 0 0 1 14-14h40a14 14 0 0 1 14 14v136a14 14 0 0 1-14 14H64a14 14 0 0 1-14-14m12 0a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V40a2 2 0 0 0-2-2H64a2 2 0 0 0-2 2Z"></svg:path>`,
})
export class PhAlignBottomLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignBottomSimpleIcon],svg[ph-align-bottom-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 232a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8M80 192V40a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v152a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16m16 0h64V40H96Z"></svg:path>`,
})
export class PhAlignBottomSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignBottomSimpleBoldIcon],svg[ph-align-bottom-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 232a12 12 0 0 1-12 12H56a12 12 0 0 1 0-24h144a12 12 0 0 1 12 12M76 184V40a20 20 0 0 1 20-20h64a20 20 0 0 1 20 20v144a20 20 0 0 1-20 20H96a20 20 0 0 1-20-20m24-4h56V44h-56Z"></svg:path>`,
})
export class PhAlignBottomSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignBottomSimpleDuotoneIcon],svg[ph-align-bottom-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 40v152a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 232a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8M80 192V40a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v152a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16m16 0h64V40H96Z"></svg:path></svg:g>`,
})
export class PhAlignBottomSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignBottomSimpleFillIcon],svg[ph-align-bottom-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 232a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8M96 208h64a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v152a16 16 0 0 0 16 16"></svg:path>`,
})
export class PhAlignBottomSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignBottomSimpleLightIcon],svg[ph-align-bottom-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 232a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6M82 192V40a14 14 0 0 1 14-14h64a14 14 0 0 1 14 14v152a14 14 0 0 1-14 14H96a14 14 0 0 1-14-14m12 0a2 2 0 0 0 2 2h64a2 2 0 0 0 2-2V40a2 2 0 0 0-2-2H96a2 2 0 0 0-2 2Z"></svg:path>`,
})
export class PhAlignBottomSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignBottomSimpleThinIcon],svg[ph-align-bottom-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 232a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4M84 192V40a12 12 0 0 1 12-12h64a12 12 0 0 1 12 12v152a12 12 0 0 1-12 12H96a12 12 0 0 1-12-12m8 0a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4H96a4 4 0 0 0-4 4Z"></svg:path>`,
})
export class PhAlignBottomSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignBottomThinIcon],svg[ph-align-bottom-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 216a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m-80-40V80a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12v96a12 12 0 0 1-12 12h-40a12 12 0 0 1-12-12m8 0a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4h-40a4 4 0 0 0-4 4Zm-96 0V40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12v136a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12m8 0a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4Z"></svg:path>`,
})
export class PhAlignBottomThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterHorizontalIcon],svg[ph-align-center-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 136h-72v-16h48a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16h-48V32a8 8 0 0 0-16 0v16H72a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h48v16H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h72v16a8 8 0 0 0 16 0v-16h72a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16M72 64h112v40H72Zm136 128H48v-40h160z"></svg:path>`,
})
export class PhAlignCenterHorizontalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterHorizontalBoldIcon],svg[ph-align-center-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 136h-68v-16h44a20 20 0 0 0 20-20V60a20 20 0 0 0-20-20h-44v-8a12 12 0 0 0-24 0v8H72a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h44v16H48a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h68v8a12 12 0 0 0 24 0v-8h68a20 20 0 0 0 20-20v-40a20 20 0 0 0-20-20M76 64h104v32H76Zm128 128H52v-32h152Z"></svg:path>`,
})
export class PhAlignCenterHorizontalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterHorizontalDuotoneIcon],svg[ph-align-center-horizontal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M64 104V64a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8H72a8 8 0 0 1-8-8m144 40H48a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M208 136h-72v-16h48a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16h-48V32a8 8 0 0 0-16 0v16H72a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h48v16H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h72v16a8 8 0 0 0 16 0v-16h72a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16M72 64h112v40H72Zm136 128H48v-40h160z"></svg:path></svg:g>`,
})
export class PhAlignCenterHorizontalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterHorizontalFillIcon],svg[ph-align-center-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 152v40a16 16 0 0 1-16 16h-72v16a8 8 0 0 1-16 0v-16H48a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h72v-16H72a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h48V32a8 8 0 0 1 16 0v16h48a16 16 0 0 1 16 16v40a16 16 0 0 1-16 16h-48v16h72a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhAlignCenterHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterHorizontalLightIcon],svg[ph-align-center-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 138h-74v-20h50a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14h-50V32a6 6 0 0 0-12 0v18H72a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h50v20H48a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h74v18a6 6 0 0 0 12 0v-18h74a14 14 0 0 0 14-14v-40a14 14 0 0 0-14-14M70 104V64a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2v40a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2m140 88a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-40a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhAlignCenterHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterHorizontalSimpleIcon],svg[ph-align-center-horizontal-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80h-72V48a8 8 0 0 0-16 0v32H48a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h72v32a8 8 0 0 0 16 0v-32h72a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m0 80H48V96h160z"></svg:path>`,
})
export class PhAlignCenterHorizontalSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterHorizontalSimpleBoldIcon],svg[ph-align-center-horizontal-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 76h-68V48a12 12 0 0 0-24 0v28H48a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h68v28a12 12 0 0 0 24 0v-28h68a20 20 0 0 0 20-20V96a20 20 0 0 0-20-20m-4 80H52v-56h152Z"></svg:path>`,
})
export class PhAlignCenterHorizontalSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterHorizontalSimpleDuotoneIcon],svg[ph-align-center-horizontal-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 80h-72V48a8 8 0 0 0-16 0v32H48a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h72v32a8 8 0 0 0 16 0v-32h72a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m0 80H48V96h160z"></svg:path></svg:g>`,
})
export class PhAlignCenterHorizontalSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterHorizontalSimpleFillIcon],svg[ph-align-center-horizontal-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 96v64a16 16 0 0 1-16 16h-72v32a8 8 0 0 1-16 0v-32H48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h72V48a8 8 0 0 1 16 0v32h72a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhAlignCenterHorizontalSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterHorizontalSimpleLightIcon],svg[ph-align-center-horizontal-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82h-74V48a6 6 0 0 0-12 0v34H48a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h74v34a6 6 0 0 0 12 0v-34h74a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14m2 78a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhAlignCenterHorizontalSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterHorizontalSimpleThinIcon],svg[ph-align-center-horizontal-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84h-76V48a4 4 0 0 0-8 0v36H48a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h76v36a4 4 0 0 0 8 0v-36h76a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12m4 76a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhAlignCenterHorizontalSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterHorizontalThinIcon],svg[ph-align-center-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 140h-76v-24h52a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12h-52V32a4 4 0 0 0-8 0v20H72a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h52v24H48a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h76v20a4 4 0 0 0 8 0v-20h76a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12M68 104V64a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4m144 88a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhAlignCenterHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterVerticalIcon],svg[ph-align-center-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 120h-16V72a16 16 0 0 0-16-16h-40a16 16 0 0 0-16 16v48h-16V48a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v72H32a8 8 0 0 0 0 16h16v72a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16v-72h16v48a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16v-48h16a8 8 0 0 0 0-16m-120 88H64V48h40Zm88-24h-40V72h40Z"></svg:path>`,
})
export class PhAlignCenterVerticalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterVerticalBoldIcon],svg[ph-align-center-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 116h-8V72a20 20 0 0 0-20-20h-40a20 20 0 0 0-20 20v44h-16V48a20 20 0 0 0-20-20H60a20 20 0 0 0-20 20v68h-8a12 12 0 0 0 0 24h8v68a20 20 0 0 0 20 20h40a20 20 0 0 0 20-20v-68h16v44a20 20 0 0 0 20 20h40a20 20 0 0 0 20-20v-44h8a12 12 0 0 0 0-24M96 204H64V52h32Zm96-24h-32V76h32Z"></svg:path>`,
})
export class PhAlignCenterVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterVerticalDuotoneIcon],svg[ph-align-center-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 72v112a8 8 0 0 1-8 8h-40a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8m-96-32H64a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M224 120h-16V72a16 16 0 0 0-16-16h-40a16 16 0 0 0-16 16v48h-16V48a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v72H32a8 8 0 0 0 0 16h16v72a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16v-72h16v48a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16v-48h16a8 8 0 0 0 0-16m-120 88H64V48h40Zm88-24h-40V72h40Z"></svg:path></svg:g>`,
})
export class PhAlignCenterVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterVerticalFillIcon],svg[ph-align-center-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128a8 8 0 0 1-8 8h-16v48a16 16 0 0 1-16 16h-40a16 16 0 0 1-16-16v-48h-16v72a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16v-72H32a8 8 0 0 1 0-16h16V48a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v72h16V72a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v48h16a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhAlignCenterVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterVerticalLightIcon],svg[ph-align-center-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 122h-18V72a14 14 0 0 0-14-14h-40a14 14 0 0 0-14 14v50h-20V48a14 14 0 0 0-14-14H64a14 14 0 0 0-14 14v74H32a6 6 0 0 0 0 12h18v74a14 14 0 0 0 14 14h40a14 14 0 0 0 14-14v-74h20v50a14 14 0 0 0 14 14h40a14 14 0 0 0 14-14v-50h18a6 6 0 0 0 0-12m-118 86a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h40a2 2 0 0 1 2 2Zm88-24a2 2 0 0 1-2 2h-40a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h40a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhAlignCenterVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterVerticalSimpleIcon],svg[ph-align-center-vertical-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 120h-32V48a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v72H48a8 8 0 0 0 0 16h32v72a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-72h32a8 8 0 0 0 0-16m-48 88H96V48h64Z"></svg:path>`,
})
export class PhAlignCenterVerticalSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterVerticalSimpleBoldIcon],svg[ph-align-center-vertical-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 116h-28V48a20 20 0 0 0-20-20H96a20 20 0 0 0-20 20v68H48a12 12 0 0 0 0 24h28v68a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20v-68h28a12 12 0 0 0 0-24m-52 88h-56V52h56Z"></svg:path>`,
})
export class PhAlignCenterVerticalSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterVerticalSimpleDuotoneIcon],svg[ph-align-center-vertical-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 48v160a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 120h-32V48a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v72H48a8 8 0 0 0 0 16h32v72a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-72h32a8 8 0 0 0 0-16m-48 88H96V48h64Z"></svg:path></svg:g>`,
})
export class PhAlignCenterVerticalSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterVerticalSimpleFillIcon],svg[ph-align-center-vertical-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 128a8 8 0 0 1-8 8h-32v72a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-72H48a8 8 0 0 1 0-16h32V48a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v72h32a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhAlignCenterVerticalSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterVerticalSimpleLightIcon],svg[ph-align-center-vertical-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 122h-34V48a14 14 0 0 0-14-14H96a14 14 0 0 0-14 14v74H48a6 6 0 0 0 0 12h34v74a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14v-74h34a6 6 0 0 0 0-12m-46 86a2 2 0 0 1-2 2H96a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhAlignCenterVerticalSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterVerticalSimpleThinIcon],svg[ph-align-center-vertical-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 124h-36V48a12 12 0 0 0-12-12H96a12 12 0 0 0-12 12v76H48a4 4 0 0 0 0 8h36v76a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-76h36a4 4 0 0 0 0-8m-44 84a4 4 0 0 1-4 4H96a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhAlignCenterVerticalSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterVerticalThinIcon],svg[ph-align-center-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 124h-20V72a12 12 0 0 0-12-12h-40a12 12 0 0 0-12 12v52h-24V48a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v76H32a4 4 0 0 0 0 8h20v76a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-76h24v52a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-52h20a4 4 0 0 0 0-8m-116 84a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4Zm88-24a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhAlignCenterVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignLeftIcon],svg[ph-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0m16 64V64a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16v40a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16m16 0h96V64H80Zm152 48v40a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h136a16 16 0 0 1 16 16m-16 40v-40H80v40z"></svg:path>`,
})
export class PhAlignLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignLeftBoldIcon],svg[ph-align-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 40v176a12 12 0 0 1-24 0V40a12 12 0 0 1 24 0m16 60V64a20 20 0 0 1 20-20h88a20 20 0 0 1 20 20v36a20 20 0 0 1-20 20H88a20 20 0 0 1-20-20m24-4h80V68H92Zm144 60v36a20 20 0 0 1-20 20H88a20 20 0 0 1-20-20v-36a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20m-24 4H92v28h120Z"></svg:path>`,
})
export class PhAlignLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignLeftDuotoneIcon],svg[ph-align-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M72 104V64a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8m144 40H80a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h136a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M216 136H80a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h136a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16m0 56H80v-40h136zM48 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0m32 80h96a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16m0-56h96v40H80Z"></svg:path></svg:g>`,
})
export class PhAlignLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignLeftFillIcon],svg[ph-align-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 152v40a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h136a16 16 0 0 1 16 16M40 32a8 8 0 0 0-8 8v176a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8m40 88h96a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16"></svg:path>`,
})
export class PhAlignLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignLeftLightIcon],svg[ph-align-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 40v176a6 6 0 0 1-12 0V40a6 6 0 0 1 12 0m20 64V64a14 14 0 0 1 14-14h96a14 14 0 0 1 14 14v40a14 14 0 0 1-14 14H80a14 14 0 0 1-14-14m12 0a2 2 0 0 0 2 2h96a2 2 0 0 0 2-2V64a2 2 0 0 0-2-2H80a2 2 0 0 0-2 2Zm152 48v40a14 14 0 0 1-14 14H80a14 14 0 0 1-14-14v-40a14 14 0 0 1 14-14h136a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H80a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h136a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhAlignLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignLeftSimpleIcon],svg[ph-align-left-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m200 40v64a16 16 0 0 1-16 16H72a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h152a16 16 0 0 1 16 16m-16 64V96H72v64z"></svg:path>`,
})
export class PhAlignLeftSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignLeftSimpleBoldIcon],svg[ph-align-left-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 56v144a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0m200 40v64a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V96a20 20 0 0 1 20-20h144a20 20 0 0 1 20 20m-24 4H84v56h136Z"></svg:path>`,
})
export class PhAlignLeftSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignLeftSimpleDuotoneIcon],svg[ph-align-left-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 96v64a8 8 0 0 1-8 8H72a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h152a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M40 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m200 40v64a16 16 0 0 1-16 16H72a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h152a16 16 0 0 1 16 16m-16 64V96H72v64z"></svg:path></svg:g>`,
})
export class PhAlignLeftSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignLeftSimpleFillIcon],svg[ph-align-left-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m184 24H72a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhAlignLeftSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignLeftSimpleLightIcon],svg[ph-align-left-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38 56v144a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0m200 40v64a14 14 0 0 1-14 14H72a14 14 0 0 1-14-14V96a14 14 0 0 1 14-14h152a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H72a2 2 0 0 0-2 2v64a2 2 0 0 0 2 2h152a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhAlignLeftSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignLeftSimpleThinIcon],svg[ph-align-left-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 56v144a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0m200 40v64a12 12 0 0 1-12 12H72a12 12 0 0 1-12-12V96a12 12 0 0 1 12-12h152a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h152a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhAlignLeftSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignLeftThinIcon],svg[ph-align-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 40v176a4 4 0 0 1-8 0V40a4 4 0 0 1 8 0m24 64V64a12 12 0 0 1 12-12h96a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12m8 0a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4V64a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4Zm152 48v40a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h136a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h136a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhAlignLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignRightIcon],svg[ph-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0m-32 24v40a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16m-16 0H80v40h96Zm16 88v40a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h136a16 16 0 0 1 16 16m-16 0H40v40h136Z"></svg:path>`,
})
export class PhAlignRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignRightBoldIcon],svg[ph-align-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 40v176a12 12 0 0 1-24 0V40a12 12 0 0 1 24 0m-40 24v36a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h88a20 20 0 0 1 20 20m-24 4H84v28h80Zm24 88v36a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20v-36a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20m-24 4H44v28h120Z"></svg:path>`,
})
export class PhAlignRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignRightDuotoneIcon],svg[ph-align-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 64v40a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8m-8 80H40a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h136a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M224 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0m-32 24v40a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16m-16 0H80v40h96Zm16 88v40a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h136a16 16 0 0 1 16 16m-16 0H40v40h136Z"></svg:path></svg:g>`,
})
export class PhAlignRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignRightFillIcon],svg[ph-align-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0m-48 8H80a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 88H40a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h136a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhAlignRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignRightLightIcon],svg[ph-align-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 40v176a6 6 0 0 1-12 0V40a6 6 0 0 1 12 0m-32 24v40a14 14 0 0 1-14 14H80a14 14 0 0 1-14-14V64a14 14 0 0 1 14-14h96a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H80a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h96a2 2 0 0 0 2-2Zm12 88v40a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14v-40a14 14 0 0 1 14-14h136a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h136a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhAlignRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignRightSimpleIcon],svg[ph-align-right-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m-32 40v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h152a16 16 0 0 1 16 16m-16 0H32v64h152Z"></svg:path>`,
})
export class PhAlignRightSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignRightSimpleBoldIcon],svg[ph-align-right-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 56v144a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0m-40 40v64a20 20 0 0 1-20 20H32a20 20 0 0 1-20-20V96a20 20 0 0 1 20-20h144a20 20 0 0 1 20 20m-24 4H36v56h136Z"></svg:path>`,
})
export class PhAlignRightSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignRightSimpleDuotoneIcon],svg[ph-align-right-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 96v64a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h152a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M232 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m-32 40v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h152a16 16 0 0 1 16 16m-16 0H32v64h152Z"></svg:path></svg:g>`,
})
export class PhAlignRightSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignRightSimpleFillIcon],svg[ph-align-right-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m-48 24H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhAlignRightSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignRightSimpleLightIcon],svg[ph-align-right-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 56v144a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0m-32 40v64a14 14 0 0 1-14 14H32a14 14 0 0 1-14-14V96a14 14 0 0 1 14-14h152a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H32a2 2 0 0 0-2 2v64a2 2 0 0 0 2 2h152a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhAlignRightSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignRightSimpleThinIcon],svg[ph-align-right-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 56v144a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0m-32 40v64a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V96a12 12 0 0 1 12-12h152a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H32a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h152a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhAlignRightSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignRightThinIcon],svg[ph-align-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 40v176a4 4 0 0 1-8 0V40a4 4 0 0 1 8 0m-32 24v40a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h96a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Zm8 88v40a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h136a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h136a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhAlignRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignTopIcon],svg[ph-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-16 40v96a16 16 0 0 1-16 16h-40a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16m-16 0h-40v96h40Zm-72 0v136a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16m-16 0H64v136h40Z"></svg:path>`,
})
export class PhAlignTopIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignTopBoldIcon],svg[ph-align-top-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 40a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12m-16 48v88a20 20 0 0 1-20 20h-36a20 20 0 0 1-20-20V88a20 20 0 0 1 20-20h36a20 20 0 0 1 20 20m-24 4h-28v80h28Zm-68-4v128a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V88a20 20 0 0 1 20-20h36a20 20 0 0 1 20 20m-24 4H68v120h28Z"></svg:path>`,
})
export class PhAlignTopBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignTopDuotoneIcon],svg[ph-align-top-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 80v96a8 8 0 0 1-8 8h-40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8m-96-8H64a8 8 0 0 0-8 8v136a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-16 40v96a16 16 0 0 1-16 16h-40a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16m-16 0h-40v96h40Zm-72 0v136a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16m-16 0H64v136h40Z"></svg:path></svg:g>`,
})
export class PhAlignTopDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignTopFillIcon],svg[ph-align-top-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-32 24h-40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m-88 0H64a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhAlignTopFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignTopLightIcon],svg[ph-align-top-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 40a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6m-16 40v96a14 14 0 0 1-14 14h-40a14 14 0 0 1-14-14V80a14 14 0 0 1 14-14h40a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2h-40a2 2 0 0 0-2 2v96a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2Zm-76 0v136a14 14 0 0 1-14 14H64a14 14 0 0 1-14-14V80a14 14 0 0 1 14-14h40a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H64a2 2 0 0 0-2 2v136a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhAlignTopLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignTopSimpleIcon],svg[ph-align-top-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m-32 40v152a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16m-16 0H96v152h64Z"></svg:path>`,
})
export class PhAlignTopSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignTopSimpleBoldIcon],svg[ph-align-top-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 32a12 12 0 0 1-12 12H56a12 12 0 0 1 0-24h144a12 12 0 0 1 12 12m-32 48v144a20 20 0 0 1-20 20H96a20 20 0 0 1-20-20V80a20 20 0 0 1 20-20h64a20 20 0 0 1 20 20m-24 4h-56v136h56Z"></svg:path>`,
})
export class PhAlignTopSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignTopSimpleDuotoneIcon],svg[ph-align-top-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 72v152a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m-32 40v152a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16m-16 0H96v152h64Z"></svg:path></svg:g>`,
})
export class PhAlignTopSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignTopSimpleFillIcon],svg[ph-align-top-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m-48 24H96a16 16 0 0 0-16 16v152a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhAlignTopSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignTopSimpleLightIcon],svg[ph-align-top-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 32a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6m-32 40v152a14 14 0 0 1-14 14H96a14 14 0 0 1-14-14V72a14 14 0 0 1 14-14h64a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H96a2 2 0 0 0-2 2v152a2 2 0 0 0 2 2h64a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhAlignTopSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignTopSimpleThinIcon],svg[ph-align-top-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 32a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4m-32 40v152a12 12 0 0 1-12 12H96a12 12 0 0 1-12-12V72a12 12 0 0 1 12-12h64a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H96a4 4 0 0 0-4 4v152a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhAlignTopSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAlignTopThinIcon],svg[ph-align-top-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 40a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m-16 40v96a12 12 0 0 1-12 12h-40a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4h-40a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4Zm-80 0v136a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4v136a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhAlignTopThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAmazonLogoIcon],svg[ph-amazon-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 168v32a8 8 0 0 1-16 0v-12.69l-2.21 2.22C226.69 192.9 189.44 232 128 232c-62.84 0-100.38-40.91-101.95-42.65A8 8 0 0 1 38 178.65c.27.35 34.5 37.35 90 37.35s89.73-37 90.07-37.36a4 4 0 0 1 .27-.3l2.35-2.34H208a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-88-73.47V84a36 36 0 0 0-68.08-16.36a8 8 0 0 1-14.25-7.28A52 52 0 0 1 176 84v92a8 8 0 0 1-16 0v-6.53a52 52 0 1 1 0-74.94m0 37.47a36 36 0 1 0-36 36a36 36 0 0 0 36-36"></svg:path>`,
})
export class PhAmazonLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAmazonLogoBoldIcon],svg[ph-amazon-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 168v32a12 12 0 0 1-24 0v-3.09C215.56 208.41 180.25 236 128 236c-64.6 0-103.3-42.18-104.92-44a12 12 0 1 1 17.84-16c.3.33 33.48 36 87.08 36c42.65 0 72.34-22.58 82.87-32H208a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12m-96-81.92V84a32 32 0 0 0-58.83-17.45a12 12 0 0 1-20.11-13.1A56 56 0 0 1 180 84v92a12 12 0 0 1-23.85 1.81a56 56 0 1 1-.15-91.73m0 45.92a32 32 0 1 0-32 32a32 32 0 0 0 32-32"></svg:path>`,
})
export class PhAmazonLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAmazonLogoDuotoneIcon],svg[ph-amazon-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 132a44 44 0 1 1-44-44a44 44 0 0 1 44 44" opacity=".2"></svg:path><svg:path d="M248 168v32a8 8 0 0 1-16 0v-12.69l-2.21 2.22C226.69 192.9 189.44 232 128 232c-62.84 0-100.38-40.91-101.95-42.65A8 8 0 0 1 38 178.65c.27.35 34.5 37.35 90 37.35s89.73-37 90.07-37.36a4 4 0 0 1 .27-.3l2.35-2.34H208a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-88-73.47V84a36 36 0 0 0-68.08-16.36a8 8 0 0 1-14.25-7.28A52 52 0 0 1 176 84v92a8 8 0 0 1-16 0v-6.53a52 52 0 1 1 0-74.94m0 37.47a36 36 0 1 0-36 36a36 36 0 0 0 36-36"></svg:path></svg:g>`,
})
export class PhAmazonLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAmazonLogoFillIcon],svg[ph-amazon-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 136a24 24 0 1 1-24-24a24 24 0 0 1 24 24m80-8A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-80-24a40 40 0 1 0 0 64a8 8 0 0 0 16 0v-64a40 40 0 0 0-73.87-21.29a8 8 0 0 0 13.54 8.52A24 24 0 0 1 152 104m44.81 65.61a8 8 0 0 0-11.2 1.58a72 72 0 0 1-115.22 0a8 8 0 1 0-12.78 9.62a88 88 0 0 0 140.78 0a8 8 0 0 0-1.58-11.2"></svg:path>`,
})
export class PhAmazonLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAmazonLogoLightIcon],svg[ph-amazon-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 168v32a6 6 0 0 1-12 0v-17.52l-5.66 5.66C225.6 191.15 188.86 230 128 230c-62 0-98.92-40.27-100.46-42a6 6 0 1 1 8.92-8c.34.37 35.09 38 91.54 38s91.2-37.64 91.55-38l.21-.22l5.76-5.76H208a6 6 0 0 1 0-12h32a6 6 0 0 1 6 5.98m-84-68.44V84a38 38 0 0 0-71.86-17.27a6 6 0 1 1-10.68-5.46A50 50 0 0 1 174 84v92a6 6 0 0 1-12 0v-11.56a50 50 0 1 1 0-64.88m0 32.44a38 38 0 1 0-38 38a38 38 0 0 0 38-38"></svg:path>`,
})
export class PhAmazonLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAmazonLogoThinIcon],svg[ph-amazon-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 168v32a4 4 0 0 1-8 0v-22.34l-9.1 9.1C224.52 189.37 188.3 228 128 228c-61.08 0-97.45-39.64-99-41.32a4 4 0 0 1 6-5.36c.35.39 35.63 38.68 93 38.68s92.68-38.29 93-38.68l.14-.15l9.17-9.17H208a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m-80-62.49V84a40 40 0 0 0-75.64-18.18a4 4 0 1 1-7.12-3.64A48 48 0 0 1 172 84v92a4 4 0 0 1-8 0v-17.51a48 48 0 1 1 0-53Zm0 26.49a40 40 0 1 0-40 40a40 40 0 0 0 40-40"></svg:path>`,
})
export class PhAmazonLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAmbulanceIcon],svg[ph-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 120a8 8 0 0 1 8-8h16V96a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16H88a8 8 0 0 1-8-8m176 0v64a16 16 0 0 1-16 16h-17a32 32 0 0 1-62 0h-50a32 32 0 0 1-62 0H32a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h152a8 8 0 0 1 8 8v8h34.58a15.93 15.93 0 0 1 14.86 10.06l14 35A7.9 7.9 0 0 1 256 120m-64-32v24h44.18l-9.6-24ZM32 184h17a32 32 0 0 1 62 0h50a32.1 32.1 0 0 1 15-19.69V72H32Zm64 8a16 16 0 1 0-16 16a16 16 0 0 0 16-16m112 0a16 16 0 1 0-16 16a16 16 0 0 0 16-16m32-8v-56h-48v32a32.06 32.06 0 0 1 31 24Z"></svg:path>`,
})
export class PhAmbulanceIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAmbulanceBoldIcon],svg[ph-ambulance-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 120a12 12 0 0 1 12-12h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 0 24h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1-12-12m176 0v64a20 20 0 0 1-20 20h-10.06a36 36 0 0 1-67.88 0h-44.12a36 36 0 0 1-67.88 0H32a20 20 0 0 1-20-20V72a20 20 0 0 1 20-20h152a12 12 0 0 1 12 12v4h26.58a19.9 19.9 0 0 1 18.57 12.57l14 35A12 12 0 0 1 256 120m-60-28v16h30.28l-6.4-16ZM36 180h10.06a36 36 0 0 1 67.88 0h44.12A36.32 36.32 0 0 1 172 162.08V76H36Zm56 12a12 12 0 1 0-12 12a12 12 0 0 0 12-12m112 0a12 12 0 1 0-12 12a12 12 0 0 0 12-12m28-12v-48h-36v24.23A36.09 36.09 0 0 1 225.94 180Z"></svg:path>`,
})
export class PhAmbulanceBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAmbulanceDuotoneIcon],svg[ph-ambulance-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M248 120v64a8 8 0 0 1-8 8h-24a24 24 0 0 0-32-22.63A24 24 0 0 0 168 192h-64a24 24 0 0 0-48 0H32a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h152v56Z" opacity=".2"></svg:path><svg:path d="M80 120a8 8 0 0 1 8-8h16V96a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16H88a8 8 0 0 1-8-8m176 0v64a16 16 0 0 1-16 16h-17a32 32 0 0 1-62 0h-50a32 32 0 0 1-62 0H32a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h152a8 8 0 0 1 8 8v8h34.58a15.93 15.93 0 0 1 14.86 10.06l14 35A7.9 7.9 0 0 1 256 120m-64-32v24h44.18l-9.6-24ZM32 184h17a32 32 0 0 1 62 0h50a32.1 32.1 0 0 1 15-19.69V72H32Zm64 8a16 16 0 1 0-16 16a16 16 0 0 0 16-16m112 0a16 16 0 1 0-16 16a16 16 0 0 0 16-16m32-8v-56h-48v32a32.06 32.06 0 0 1 31 24Z"></svg:path></svg:g>`,
})
export class PhAmbulanceDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAmbulanceFillIcon],svg[ph-ambulance-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m255.43 117l-14-35a15.93 15.93 0 0 0-14.85-10H192v-8a8 8 0 0 0-8-8H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a7.9 7.9 0 0 0-.57-3M80 208a16 16 0 1 1 16-16a16 16 0 0 1-16 16m56-80h-16v16a8 8 0 0 1-16 0v-16H88a8 8 0 0 1 0-16h16V96a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16m56 80a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-96V88h34.58l9.6 24Z"></svg:path>`,
})
export class PhAmbulanceFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAmbulanceLightIcon],svg[ph-ambulance-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M82 120a6 6 0 0 1 6-6h18V96a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12h-18v18a6 6 0 0 1-12 0v-18H88a6 6 0 0 1-6-6m172 0v64a14 14 0 0 1-14 14h-18.6a30 30 0 0 1-58.8 0h-53.2a30 30 0 0 1-58.8 0H32a14 14 0 0 1-14-14V72a14 14 0 0 1 14-14h152a6 6 0 0 1 6 6v10h36.58a13.93 13.93 0 0 1 13 8.8l14 35a6.1 6.1 0 0 1 .42 2.2m-64-34v28h49.14l-10.7-26.74a2 2 0 0 0-1.86-1.26ZM32 186h18.6a30 30 0 0 1 58.8 0h53.2a30.1 30.1 0 0 1 15.4-20.52V70H32a2 2 0 0 0-2 2v112a2 2 0 0 0 2 2m66 6a18 18 0 1 0-18 18a18 18 0 0 0 18-18m112 0a18 18 0 1 0-18 18a18 18 0 0 0 18-18m32-8v-58h-52v36.07c.66 0 1.33-.07 2-.07a30.05 30.05 0 0 1 29.4 24H240a2 2 0 0 0 2-2"></svg:path>`,
})
export class PhAmbulanceLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAmbulanceThinIcon],svg[ph-ambulance-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 120a4 4 0 0 1 4-4h20V96a4 4 0 0 1 8 0v20h20a4 4 0 0 1 0 8h-20v20a4 4 0 0 1-8 0v-20H88a4 4 0 0 1-4-4m168 0v64a12 12 0 0 1-12 12h-20.29a28 28 0 0 1-55.42 0h-56.58a28 28 0 0 1-55.42 0H32a12 12 0 0 1-12-12V72a12 12 0 0 1 12-12h152a4 4 0 0 1 4 4v12h38.58a12 12 0 0 1 11.15 7.54l14 35A4 4 0 0 1 252 120m-64-36v32h54.09L230.3 86.51a4 4 0 0 0-3.72-2.51ZM32 188h20.29a28 28 0 0 1 55.42 0h56.58A28.05 28.05 0 0 1 180 166.71V68H32a4 4 0 0 0-4 4v112a4 4 0 0 0 4 4m68 4a20 20 0 1 0-20 20a20 20 0 0 0 20-20m112 0a20 20 0 1 0-20 20a20 20 0 0 0 20-20m32-8v-60h-56v40.29A28 28 0 0 1 219.71 188H240a4 4 0 0 0 4-4"></svg:path>`,
})
export class PhAmbulanceThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAnchorIcon],svg[ph-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 136a8 8 0 0 0-8 8c0 24.69-13.77 29.64-38.1 36.28c-11.36 3.1-24.12 6.6-33.9 14.34V128h32a8 8 0 0 0 0-16h-32V87a32 32 0 1 0-16 0v25H88a8 8 0 0 0 0 16h32v66.62c-9.78-7.74-22.54-11.24-33.9-14.34C61.77 173.64 48 168.69 48 144a8 8 0 0 0-16 0c0 38.11 27.67 45.66 49.9 51.72c24.33 6.64 38.1 11.59 38.1 36.28a8 8 0 0 0 16 0c0-24.69 13.77-29.64 38.1-36.28c22.23-6.06 49.9-13.61 49.9-51.72a8 8 0 0 0-8-8M112 56a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhAnchorIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAnchorBoldIcon],svg[ph-anchor-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 132a12 12 0 0 0-12 12c0 21.86-11.41 25.95-35.16 32.42c-9.12 2.49-19.61 5.36-28.84 10.69V132h28a12 12 0 0 0 0-24h-28V89.94a36 36 0 1 0-24 0V108H88a12 12 0 0 0 0 24h28v55.11c-9.23-5.33-19.72-8.2-28.84-10.69C63.41 170 52 165.86 52 144a12 12 0 0 0-24 0c0 41.17 30.54 49.5 52.84 55.58C104.59 206.05 116 210.14 116 232a12 12 0 0 0 24 0c0-21.86 11.41-25.95 35.16-32.42C197.46 193.5 228 185.17 228 144a12 12 0 0 0-12-12m-88-88a12 12 0 1 1-12 12a12 12 0 0 1 12-12"></svg:path>`,
})
export class PhAnchorBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAnchorDuotoneIcon],svg[ph-anchor-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 56a24 24 0 1 1-24-24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M216 136a8 8 0 0 0-8 8c0 24.69-13.77 29.64-38.1 36.28c-11.36 3.1-24.12 6.6-33.9 14.34V128h32a8 8 0 0 0 0-16h-32V87a32 32 0 1 0-16 0v25H88a8 8 0 0 0 0 16h32v66.62c-9.78-7.74-22.54-11.24-33.9-14.34C61.77 173.64 48 168.69 48 144a8 8 0 0 0-16 0c0 38.11 27.67 45.66 49.9 51.72c24.33 6.64 38.1 11.59 38.1 36.28a8 8 0 0 0 16 0c0-24.69 13.77-29.64 38.1-36.28c22.23-6.06 49.9-13.61 49.9-51.72a8 8 0 0 0-8-8M112 56a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path></svg:g>`,
})
export class PhAnchorDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAnchorFillIcon],svg[ph-anchor-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 144c0 38.11-27.67 45.66-49.9 51.72c-24.33 6.64-38.1 11.59-38.1 36.28a8 8 0 0 1-16 0c0-24.69-13.77-29.64-38.1-36.28C59.67 189.66 32 182.11 32 144a8 8 0 0 1 16 0c0 24.69 13.77 29.64 38.1 36.28c11.36 3.1 24.12 6.6 33.9 14.34V128H88a8 8 0 0 1 0-16h32V82.83a28 28 0 1 1 16 0V112h32a8 8 0 0 1 0 16h-32v66.62c9.78-7.74 22.54-11.24 33.9-14.34c24.33-6.64 38.1-11.59 38.1-36.28a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhAnchorFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAnchorLightIcon],svg[ph-anchor-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 138a6 6 0 0 0-6 6c0 26.09-15 31.52-39.58 38.21c-12.42 3.39-26.63 7.26-36.42 16.95V126h34a6 6 0 0 0 0-12h-34V85.4a30 30 0 1 0-12 0V114H88a6 6 0 0 0 0 12h34v73.16c-9.79-9.69-24-13.56-36.42-16.95C61 175.52 46 170.09 46 144a6 6 0 0 0-12 0c0 36.58 26.85 43.91 48.42 49.79C107 200.48 122 205.91 122 232a6 6 0 0 0 12 0c0-26.09 15-31.52 39.58-38.21C195.15 187.91 222 180.58 222 144a6 6 0 0 0-6-6M110 56a18 18 0 1 1 18 18a18 18 0 0 1-18-18"></svg:path>`,
})
export class PhAnchorLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAnchorSimpleIcon],svg[ph-anchor-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 112h-24a8 8 0 0 0 0 16h15.64A88.15 88.15 0 0 1 136 207.63V95a32 32 0 1 0-16 0v112.63A88.15 88.15 0 0 1 40.36 128H56a8 8 0 0 0 0-16H32a8 8 0 0 0-8 8a104 104 0 0 0 208 0a8 8 0 0 0-8-8M112 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhAnchorSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAnchorSimpleBoldIcon],svg[ph-anchor-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 108h-24a12 12 0 0 0 0 24h11.15A84.21 84.21 0 0 1 140 203.14V97.94a36 36 0 1 0-24 0v105.2A84.21 84.21 0 0 1 44.85 132H56a12 12 0 0 0 0-24H32a12 12 0 0 0-12 12a108 108 0 0 0 216 0a12 12 0 0 0-12-12m-96-56a12 12 0 1 1-12 12a12 12 0 0 1 12-12"></svg:path>`,
})
export class PhAnchorSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAnchorSimpleDuotoneIcon],svg[ph-anchor-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 64a24 24 0 1 1-24-24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M224 112h-24a8 8 0 0 0 0 16h15.64A88.15 88.15 0 0 1 136 207.63V95a32 32 0 1 0-16 0v112.63A88.15 88.15 0 0 1 40.36 128H56a8 8 0 0 0 0-16H32a8 8 0 0 0-8 8a104 104 0 0 0 208 0a8 8 0 0 0-8-8M112 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path></svg:g>`,
})
export class PhAnchorSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAnchorSimpleFillIcon],svg[ph-anchor-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 120a104 104 0 0 1-208 0a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16H40.36A88.15 88.15 0 0 0 120 207.63V90.83a28 28 0 1 1 16 0v116.8A88.15 88.15 0 0 0 215.64 128H200a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhAnchorSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAnchorSimpleLightIcon],svg[ph-anchor-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 114h-24a6 6 0 0 0 0 12h17.8a90.13 90.13 0 0 1-83.8 83.78V93.4a30 30 0 1 0-12 0v116.38A90.13 90.13 0 0 1 38.2 126H56a6 6 0 0 0 0-12H32a6 6 0 0 0-6 6a102 102 0 0 0 204 0a6 6 0 0 0-6-6M110 64a18 18 0 1 1 18 18a18 18 0 0 1-18-18"></svg:path>`,
})
export class PhAnchorSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAnchorSimpleThinIcon],svg[ph-anchor-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 116h-24a4 4 0 0 0 0 8h19.91A92.13 92.13 0 0 1 132 211.91V91.71a28 28 0 1 0-8 0v120.2A92.13 92.13 0 0 1 36.09 124H56a4 4 0 0 0 0-8H32a4 4 0 0 0-4 4a100 100 0 0 0 200 0a4 4 0 0 0-4-4M108 64a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhAnchorSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAnchorThinIcon],svg[ph-anchor-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 140a4 4 0 0 0-4 4c0 28.94-19 34.13-41.05 40.14c-14.29 3.9-29.82 8.14-38.95 20.24V124h36a4 4 0 0 0 0-8h-36V83.71a28 28 0 1 0-8 0V116H88a4 4 0 0 0 0 8h36v80.38c-9.13-12.1-24.66-16.34-38.95-20.24c-22-6-41-11.2-41-40.14a4 4 0 0 0-8 0c0 35.06 24.94 41.86 47 47.86S124 203.06 124 232a4 4 0 0 0 8 0c0-28.94 19-34.13 41.05-40.14S220 179.06 220 144a4 4 0 0 0-4-4M108 56a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhAnchorThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAndroidLogoIcon],svg[ph-android-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 148a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-84-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m148 24v24a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-22.87a113.38 113.38 0 0 1 35.4-82.41L26.34 53.66a8 8 0 0 1 11.32-11.32L63.82 68.5a111.43 111.43 0 0 1 128.55-.19l26-26a8 8 0 0 1 11.32 11.32L204.82 78.5c.75.71 1.5 1.43 2.24 2.17A111.25 111.25 0 0 1 240 160m-16 0a96 96 0 0 0-96-96h-.34C74.91 64.18 32 107.75 32 161.13V184h192Z"></svg:path>`,
})
export class PhAndroidLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAndroidLogoBoldIcon],svg[ph-android-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 148a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-88-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m152 28v24a20 20 0 0 1-20 20H32a20 20 0 0 1-20-20v-22.87a117.35 117.35 0 0 1 33.72-82.44l-22.21-22.2a12 12 0 0 1 17-17L64.3 63.33A114.35 114.35 0 0 1 127.59 44h.41a115.15 115.15 0 0 1 63.89 19.14l23.62-23.63a12 12 0 0 1 17 17l-22 22A115.18 115.18 0 0 1 244 160m-24 0a92 92 0 0 0-92.33-92C77.12 68.18 36 110 36 161.13V180h184Z"></svg:path>`,
})
export class PhAndroidLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAndroidLogoDuotoneIcon],svg[ph-android-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 160v24a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8v-22.87C24 103.65 70.15 56.2 127.63 56A104 104 0 0 1 232 160" opacity=".2"></svg:path><svg:path d="M176 148a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-84-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m148 24v24a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-22.87a113.38 113.38 0 0 1 35.4-82.41L26.34 53.66a8 8 0 0 1 11.32-11.32L63.82 68.5a111.4 111.4 0 0 1 128.55-.18l26-26a8 8 0 0 1 11.32 11.32L204.82 78.5c.75.71 1.5 1.43 2.24 2.17A111.25 111.25 0 0 1 240 160m-16 0a96 96 0 0 0-96-96h-.34C74.91 64.18 32 107.75 32 161.13V184h192Z"></svg:path></svg:g>`,
})
export class PhAndroidLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAndroidLogoFillIcon],svg[ph-android-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207.06 80.67c-.74-.74-1.49-1.46-2.24-2.17l24.84-24.84a8 8 0 0 0-11.32-11.32l-26 26a111.43 111.43 0 0 0-128.55.19L37.66 42.34a8 8 0 0 0-11.32 11.32L51.4 78.72A113.38 113.38 0 0 0 16 161.13V184a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-24a111.25 111.25 0 0 0-32.94-79.33M92 160a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhAndroidLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAndroidLogoLightIcon],svg[ph-android-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 148a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-82-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m146 22v24a14 14 0 0 1-14 14H32a14 14 0 0 1-14-14v-22.87a111.44 111.44 0 0 1 36.28-82.37L27.76 52.24a6 6 0 1 1 8.48-8.48l27.37 27.36a108.6 108.6 0 0 1 64-21.12h.39a109.17 109.17 0 0 1 64.58 20.93l27.18-27.17a6 6 0 0 1 8.48 8.48l-26.31 26.31c1.26 1.15 2.5 2.32 3.72 3.53A109.3 109.3 0 0 1 238 160m-12 0a98 98 0 0 0-98-98h-.35C73.81 62.19 30 106.66 30 161.13V184a2 2 0 0 0 2 2h192a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhAndroidLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAndroidLogoThinIcon],svg[ph-android-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 148a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-80-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m144 20v24a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12v-22.87a109.43 109.43 0 0 1 37.18-82.29l-28-28a4 4 0 0 1 5.66-5.66l28.57 28.57A106.63 106.63 0 0 1 127.62 52h.38a107.16 107.16 0 0 1 64.78 21.57l28.39-28.4a4 4 0 1 1 5.66 5.66L199 78.64c1.78 1.56 3.52 3.17 5.21 4.86A107.25 107.25 0 0 1 236 160m-8 0A100 100 0 0 0 128 60h-.35C72.7 60.19 28 105.56 28 161.13V184a4 4 0 0 0 4 4h192a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhAndroidLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAngleIcon],svg[ph-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 72a8 8 0 0 1 8-8a104.11 104.11 0 0 1 104 104a8 8 0 0 1-16 0a88.1 88.1 0 0 0-88-88a8 8 0 0 1-8-8m144 120H80V32a8 8 0 0 0-16 0v32H32a8 8 0 0 0 0 16h32v120a8 8 0 0 0 8 8h168a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhAngleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAngleBoldIcon],svg[ph-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 200a12 12 0 0 1-12 12H72a12 12 0 0 1-12-12V84H32a12 12 0 0 1 0-24h28V32a12 12 0 0 1 24 0v156h156a12 12 0 0 1 12 12M111 84.29a84 84 0 0 1 76.7 76.7a12 12 0 0 0 11.95 11h1a12 12 0 0 0 11-13A108 108 0 0 0 113 60.37a12 12 0 1 0-2 23.92"></svg:path>`,
})
export class PhAngleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAngleDuotoneIcon],svg[ph-angle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 168v32H72V72h32a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M96 72a8 8 0 0 1 8-8a104.11 104.11 0 0 1 104 104a8 8 0 0 1-16 0a88.1 88.1 0 0 0-88-88a8 8 0 0 1-8-8m144 120H80V32a8 8 0 0 0-16 0v32H32a8 8 0 0 0 0 16h32v120a8 8 0 0 0 8 8h168a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhAngleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAngleFillIcon],svg[ph-angle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M112 88a64.07 64.07 0 0 1 64 64a8 8 0 0 1-16 0a48.05 48.05 0 0 0-48-48a8 8 0 0 1 0-16m88 104H80a8 8 0 0 1-8-8v-80H56a8 8 0 0 1 0-16h16V72a8 8 0 0 1 16 0v104h112a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhAngleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAngleLightIcon],svg[ph-angle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M98 72a6 6 0 0 1 6-6a102.12 102.12 0 0 1 102 102a6 6 0 0 1-12 0a90.1 90.1 0 0 0-90-90a6 6 0 0 1-6-6m142 122H78V32a6 6 0 0 0-12 0v34H32a6 6 0 0 0 0 12h34v122a6 6 0 0 0 6 6h168a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhAngleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAngleThinIcon],svg[ph-angle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 72a4 4 0 0 1 4-4a100.11 100.11 0 0 1 100 100a4 4 0 0 1-8 0a92.1 92.1 0 0 0-92-92a4 4 0 0 1-4-4m140 124H76V32a4 4 0 0 0-8 0v36H32a4 4 0 0 0 0 8h36v124a4 4 0 0 0 4 4h168a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhAngleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAngularLogoIcon],svg[ph-angular-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.08 64.62l-96-40a7.93 7.93 0 0 0-6.16 0l-96 40a8 8 0 0 0-4.85 8.44l16 120a8 8 0 0 0 4.35 6.1l80 40a8 8 0 0 0 7.16 0l80-40a8 8 0 0 0 4.35-6.1l16-120a8 8 0 0 0-4.85-8.44m-26.45 122.12L128 223.06l-72.63-36.32L40.74 77L128 40.67L215.26 77ZM121 84.12l-40 72a8 8 0 1 0 14 7.76L106 144h44l11 19.88a8 8 0 1 0 14-7.76l-40-72a8 8 0 0 0-14 0M141.07 128h-26.14L128 104.47Z"></svg:path>`,
})
export class PhAngularLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAngularLogoBoldIcon],svg[ph-angular-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.61 60.92l-96-40a12 12 0 0 0-9.24 0l-96 40a12 12 0 0 0-7.28 12.67l16 120a12 12 0 0 0 6.52 9.14l80 40a12 12 0 0 0 10.74 0l80-40a12 12 0 0 0 6.52-9.14l16-120a12 12 0 0 0-7.26-12.67M197 184.11l-69 34.47l-68.95-34.47L45.11 79.54L128 45l82.89 34.54ZM117.51 82.17l-40 72a12 12 0 1 0 21 11.66l7.66-13.83h43.66l7.68 13.83a12 12 0 1 0 21-11.66l-40-72a12 12 0 0 0-21 0m2 45.83l8.49-15.29l8.49 15.29Z"></svg:path>`,
})
export class PhAngularLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAngularLogoDuotoneIcon],svg[ph-angular-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 72l-16 120l-80 40l-80-40L32 72l96-40Z" opacity=".2"></svg:path><svg:path d="m227.08 64.62l-96-40a7.93 7.93 0 0 0-6.16 0l-96 40a8 8 0 0 0-4.85 8.44l16 120a8 8 0 0 0 4.35 6.1l80 40a8 8 0 0 0 7.16 0l80-40a8 8 0 0 0 4.35-6.1l16-120a8 8 0 0 0-4.85-8.44m-26.45 122.12L128 223.06l-72.63-36.32L40.74 77L128 40.67L215.26 77ZM121 84.12l-40 72a8 8 0 1 0 14 7.76L106 144h44l11 19.88a8 8 0 1 0 14-7.76l-40-72a8 8 0 0 0-14 0M141.07 128h-26.14L128 104.47Z"></svg:path></svg:g>`,
})
export class PhAngularLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAngularLogoFillIcon],svg[ph-angular-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 104.47L141.07 128h-26.14Zm103.93-31.41l-16 120a8 8 0 0 1-4.35 6.1l-80 40a8 8 0 0 1-7.16 0l-80-40a8 8 0 0 1-4.35-6.1l-16-120a8 8 0 0 1 4.85-8.44l96-40a7.93 7.93 0 0 1 6.16 0l96 40a8 8 0 0 1 4.85 8.44M175 156.12l-40-72a8 8 0 0 0-14 0l-40 72a8 8 0 1 0 14 7.76L106 144h44l11 19.88a8 8 0 1 0 14-7.76"></svg:path>`,
})
export class PhAngularLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAngularLogoLightIcon],svg[ph-angular-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.31 66.46l-96-40a6.06 6.06 0 0 0-4.62 0l-96 40a6 6 0 0 0-3.64 6.33l16 120a6 6 0 0 0 3.27 4.58l80 40a6 6 0 0 0 5.36 0l80-40a6 6 0 0 0 3.27-4.58l16-120a6 6 0 0 0-3.64-6.33m-23.84 121.6L128 225.29l-74.47-37.23l-15-112.29L128 38.5l89.44 37.27Zm-79.72-103l-40 72a6 6 0 0 0 10.5 5.82L104.86 142h46.28l11.61 20.91A6 6 0 0 0 168 166a5.9 5.9 0 0 0 2.9-.76a6 6 0 0 0 2.34-8.15l-40-72a6 6 0 0 0-10.5 0ZM144.47 130h-32.94L128 100.35Z"></svg:path>`,
})
export class PhAngularLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAngularLogoThinIcon],svg[ph-angular-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m225.54 68.31l-96-40a4 4 0 0 0-3.08 0l-96 40A4 4 0 0 0 28 72.53l16 120a4 4 0 0 0 2.17 3.05l80 40a4 4 0 0 0 3.58 0l80-40a4 4 0 0 0 2.17-3.05l16-120a4 4 0 0 0-2.38-4.22m-21.22 121.06L128 227.53l-76.32-38.16L36.37 74.51L128 36.33l91.63 38.18ZM124.5 86.06l-40 72a4 4 0 1 0 7 3.88L103.69 140h48.62l12.19 21.94a4 4 0 1 0 7-3.88l-40-72a4 4 0 0 0-7 0M147.87 132h-39.74L128 96.24Z"></svg:path>`,
})
export class PhAngularLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phApertureIcon],svg[ph-aperture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46m-11.31 11.32a88 88 0 0 1 11 13.48L167.55 119l-27.92-78.22a87.34 87.34 0 0 1 50.6 25M155.59 133l-18.16 21.37l-27.59-5l-9.43-26.37l18.16-21.37l27.59 5ZM65.77 65.78a87.34 87.34 0 0 1 56.66-25.59l17.51 49L58.3 74.32a88 88 0 0 1 7.47-8.54m-19.12 95.76a88.4 88.4 0 0 1 2.53-72.62l51.21 9.35Zm19.12 28.68a88 88 0 0 1-11-13.48L88.45 137l27.92 78.18a87.34 87.34 0 0 1-50.6-24.96m124.46 0a87.34 87.34 0 0 1-56.66 25.59l-17.51-49l81.64 14.91a88 88 0 0 1-7.47 8.5m-34.62-32.49l53.74-63.27a88.4 88.4 0 0 1-2.53 72.62Z"></svg:path>`,
})
export class PhApertureIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phApertureBoldIcon],svg[ph-aperture-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.41 51.63a108 108 0 1 0 0 152.74a107.38 107.38 0 0 0 0-152.74m-17 17A84 84 0 0 1 196.26 79L169 111.09l-23.3-65.21a83.5 83.5 0 0 1 41.73 22.72Zm-118.85 0a83.44 83.44 0 0 1 51.11-24.2l14.16 39.65l-68.12-12.47c.93-1.02 1.88-2.02 2.87-3.01ZM48 153.7a84.48 84.48 0 0 1 3.4-60.3l41.44 7.6Zm20.55 33.7a84 84 0 0 1-8.81-10.4L87 144.91l23.3 65.21a83.53 83.53 0 0 1-41.72-22.72Zm36.36-63.61l15.18-17.85l23.06 4.21l7.88 22.06l-15.17 17.85l-23.06-4.21Zm82.49 63.61a83.5 83.5 0 0 1-51.11 24.2L122.15 172l68.14 12.44c-.93.97-1.88 1.97-2.86 2.96ZM163.16 155L208 102.3a84.43 84.43 0 0 1-3.41 60.3Z"></svg:path>`,
})
export class PhApertureBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phApertureDuotoneIcon],svg[ph-aperture-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M195.88 60.12a96 96 0 1 0 0 135.76a96 96 0 0 0 0-135.76m-55.34 103l-36.68-6.69l-12.54-35.13l24.14-28.41l36.68 6.69l12.54 35.12Z" opacity=".2"></svg:path><svg:path d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46m-11.31 11.32a88 88 0 0 1 11 13.48L167.55 119l-27.92-78.22a87.34 87.34 0 0 1 50.6 25M155.59 133l-18.16 21.37l-27.59-5l-9.43-26.37l18.16-21.37l27.59 5ZM65.77 65.78a87.34 87.34 0 0 1 56.66-25.59l17.51 49L58.3 74.32a88 88 0 0 1 7.47-8.54m-19.12 95.76a88.4 88.4 0 0 1 2.53-72.62l51.21 9.35Zm19.12 28.68a88 88 0 0 1-11-13.48L88.45 137l27.92 78.18a87.34 87.34 0 0 1-50.6-24.96m124.46 0a87.34 87.34 0 0 1-56.66 25.59l-17.51-49l81.64 14.91a88 88 0 0 1-7.47 8.5m-34.62-32.49l53.74-63.27a88.4 88.4 0 0 1-2.53 72.62Z"></svg:path></svg:g>`,
})
export class PhApertureDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phApertureFillIcon],svg[ph-aperture-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128A104 104 0 0 0 54.46 54.46A104 104 0 0 0 128 232h.09A104 104 0 0 0 232 128M49.18 88.92l51.21 9.35l-53.74 63.26a88.4 88.4 0 0 1 2.53-72.61m160.17 5.54a88.4 88.4 0 0 1-2.53 72.62l-51.21-9.35Zm-8.08-15.2L167.55 119l-27.92-78.22a87.38 87.38 0 0 1 50.6 25a88.7 88.7 0 0 1 11.04 13.48m-78.84-39.07l17.51 49L58.3 74.32a89 89 0 0 1 7.47-8.55a87.37 87.37 0 0 1 56.66-25.58m-67.7 136.55L88.45 137l27.92 78.18a88 88 0 0 1-61.64-38.48Zm78.84 39.06l-17.51-49l23.08 4.2l58.52 10.69a87.5 87.5 0 0 1-64.13 34.12Z"></svg:path>`,
})
export class PhApertureFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phApertureLightIcon],svg[ph-aperture-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.12 55.88A102 102 0 0 0 55.87 200.12A102 102 0 1 0 200.12 55.88m-102 66.67l19.65-23.14l29.86 5.46l10.21 28.58l-19.65 23.14l-29.86-5.46Zm111.81-31.86a90.24 90.24 0 0 1-2 78.63l-56.14-10.24Zm-6.16-11.28l-36.94 43.48l-30.17-84.47a89.3 89.3 0 0 1 55 25.94a91.3 91.3 0 0 1 12.11 15.05m-139.41-15a89.37 89.37 0 0 1 59.45-26.31L143 91.82L54.75 75.71a91 91 0 0 1 9.61-11.35ZM48 86.68l56.14 10.24l-58.07 68.39a90.24 90.24 0 0 1 2-78.63Zm4.21 89.91l36.94-43.48l30.17 84.47a89.3 89.3 0 0 1-55-25.94a91.3 91.3 0 0 1-12.09-15.05Zm139.41 15a89.32 89.32 0 0 1-59.45 26.26L113 164.18l88.24 16.11a91 91 0 0 1-9.6 11.35Z"></svg:path>`,
})
export class PhApertureLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phApertureThinIcon],svg[ph-aperture-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.71 57.29A100 100 0 1 0 57.29 198.71A100 100 0 1 0 198.71 57.29m10.37 114.27l-61-11.14L210.4 87a92.26 92.26 0 0 1-1.32 84.52ZM95.87 122.13L117 97.24l32.14 5.86l11 30.77L139 158.76l-32.14-5.86Zm110.37-42.55l-40.13 47.25l-32.36-90.63a92.09 92.09 0 0 1 72.49 43.38M63 63a91.3 91.3 0 0 1 62.26-26.88L146 94.41l-94.68-17.3A93 93 0 0 1 63 63M47 84.49l61 11.14L45.6 169a92.26 92.26 0 0 1 1.32-84.52Zm2.84 92l40.13-47.25l32.36 90.63a92.09 92.09 0 0 1-72.49-43.38m143.29 16.63A91.3 91.3 0 0 1 130.87 220L110 161.59l94.72 17.3a93 93 0 0 1-11.67 14.16Z"></svg:path>`,
})
export class PhApertureThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAppStoreLogoIcon],svg[ph-app-store-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m64.34 196.07l-9.45 16a8 8 0 1 1-13.78-8.14l9.46-16a8 8 0 1 1 13.77 8.14M232 152h-47.8l-30.73-52a8 8 0 1 0-13.77 8.14l61.41 103.93a8 8 0 0 0 13.78-8.14L193.66 168H232a8 8 0 0 0 0-16m-89.53 0H90.38l68.51-115.93a8 8 0 0 0-13.78-8.14L128 56.89l-17.11-29a8 8 0 1 0-13.78 8.14l21.6 36.55L71.8 152H24a8 8 0 0 0 0 16h118.47a8 8 0 1 0 0-16"></svg:path>`,
})
export class PhAppStoreLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAppStoreLogoBoldIcon],svg[ph-app-store-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 160a12 12 0 0 1-12 12h-31.33l17.66 29.89a12 12 0 1 1-20.66 12.21L140.9 118a12 12 0 0 1 20.66-12.2l24.92 42.2H232a12 12 0 0 1 12 12m-110.85-12H97.39l64.94-109.89a12 12 0 1 0-20.66-12.21L128 49l-13.67-23.1a12 12 0 1 0-20.66 12.21l20.39 34.51L69.52 148H24a12 12 0 0 0 0 24h109.15a12 12 0 0 0 0-24m-74.32 41.67a12 12 0 0 0-16.43 4.22l-4.73 8a12 12 0 1 0 20.66 12.21l4.73-8a12 12 0 0 0-4.23-16.43"></svg:path>`,
})
export class PhAppStoreLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAppStoreLogoDuotoneIcon],svg[ph-app-store-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M179.64 160H76.36L128 72.62Z" opacity=".2"></svg:path><svg:path d="m64.34 196.07l-9.45 16a8 8 0 1 1-13.78-8.14l9.46-16a8 8 0 1 1 13.77 8.14M232 152h-47.8l-30.73-52a8 8 0 1 0-13.77 8.14l61.41 103.93a8 8 0 0 0 13.78-8.14L193.66 168H232a8 8 0 0 0 0-16m-89.53 0H90.38l68.51-115.93a8 8 0 0 0-13.78-8.14L128 56.89l-17.11-29a8 8 0 1 0-13.78 8.14l21.6 36.55L71.8 152H24a8 8 0 0 0 0 16h118.47a8 8 0 1 0 0-16"></svg:path></svg:g>`,
})
export class PhAppStoreLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAppStoreLogoFillIcon],svg[ph-app-store-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M83.66 180.12l-4.8 8a8 8 0 1 1-13.72-8.24l4.8-8a8 8 0 0 1 13.72 8.24M128 152H56a8 8 0 0 1 0-16h35.47l27.2-45.33l-13.53-22.55a8 8 0 0 1 13.72-8.24L128 75.12l9.14-15.24a8 8 0 0 1 13.72 8.24L110.13 136H128a8 8 0 0 1 0 16m72 0h-25.87l16.73 27.88a8 8 0 0 1-13.72 8.24l-38.4-64a8 8 0 0 1 13.72-8.24L164.53 136H200a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhAppStoreLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAppStoreLogoLightIcon],svg[ph-app-store-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m62.62 195.05l-9.45 16A6 6 0 0 1 42.83 205l9.46-16a6 6 0 1 1 10.33 6.1ZM232 154h-48.94l-31.31-53a6 6 0 1 0-10.33 6.11l61.41 103.93a6 6 0 0 0 10.34-6.1l-23-38.95H232a6 6 0 0 0 0-12Zm-89.53 0H86.88l70.29-118.95A6 6 0 0 0 146.83 29L128 60.82L109.17 29a6 6 0 0 0-10.34 6.1L121 72.62L72.94 154H24a6 6 0 0 0 0 12h118.47a6 6 0 1 0 0-12"></svg:path>`,
})
export class PhAppStoreLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAppStoreLogoThinIcon],svg[ph-app-store-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m60.9 194l-9.46 16a4 4 0 1 1-6.88-4L54 190a4 4 0 0 1 6.9 4M232 156h-50.08L150 102a4 4 0 1 0-6.89 4.07L204.56 210a4 4 0 1 0 6.88-4.07l-24.79-42H232a4 4 0 0 0 0-8Zm-89.53 0h-59.1l72.07-122a4 4 0 1 0-6.88-4L128 64.75L107.44 30a4 4 0 1 0-6.88 4l22.79 38.58L74.08 156H24a4 4 0 0 0 0 8h118.47a4 4 0 1 0 0-8"></svg:path>`,
})
export class PhAppStoreLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAppWindowIcon],svg[ph-app-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176zM80 84a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhAppWindowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAppWindowBoldIcon],svg[ph-app-window-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 160H44V60h168ZM60 92a16 16 0 1 1 16 16a16 16 0 0 1-16-16m48 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhAppWindowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAppWindowDuotoneIcon],svg[ph-app-window-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176zM80 84a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhAppWindowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAppWindowFillIcon],svg[ph-app-window-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M68 96a12 12 0 1 1 12-12a12 12 0 0 1-12 12m40 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhAppWindowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAppWindowLightIcon],svg[ph-app-window-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 158a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM78 84a10 10 0 1 1-10-10a10 10 0 0 1 10 10m40 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhAppWindowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAppWindowThinIcon],svg[ph-app-window-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM76 84a8 8 0 1 1-8-8a8 8 0 0 1 8 8m40 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhAppWindowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAppleLogoIcon],svg[ph-apple-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.3 169.59a8.07 8.07 0 0 0-2.8-3.4C203.53 154.53 200 134.64 200 120c0-17.67 13.47-33.06 21.5-40.67a8 8 0 0 0 0-11.62C208.82 55.74 187.82 48 168 48a72.2 72.2 0 0 0-40 12.13a71.56 71.56 0 0 0-90.71 9.09A74.63 74.63 0 0 0 16 123.4a127.06 127.06 0 0 0 40.14 89.73A39.8 39.8 0 0 0 83.59 224h87.68a39.84 39.84 0 0 0 29.12-12.57a125 125 0 0 0 17.82-24.6c7.02-12.83 6.12-14.83 5.09-17.24m-34.63 30.94a23.76 23.76 0 0 1-17.4 7.47H83.59a23.82 23.82 0 0 1-16.44-6.51A111.14 111.14 0 0 1 32 123a58.5 58.5 0 0 1 16.65-42.53A54.8 54.8 0 0 1 88 64h.78A55.45 55.45 0 0 1 123 76.28a8 8 0 0 0 10 0A55.44 55.44 0 0 1 168 64a70.64 70.64 0 0 1 36 10.35c-13 14.52-20 30.47-20 45.65c0 23.77 7.64 42.73 22.18 55.3a105.8 105.8 0 0 1-17.51 25.23M128.23 30A40 40 0 0 1 167 0h1a8 8 0 0 1 0 16h-1a24 24 0 0 0-23.24 18a8 8 0 1 1-15.5-4Z"></svg:path>`,
})
export class PhAppleLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAppleLogoBoldIcon],svg[ph-apple-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227 168a12 12 0 0 0-4.21-5.09C207.25 152.22 204 133.68 204 120c0-16.17 12.68-30.6 20.25-37.76a12 12 0 0 0 0-17.43C210.89 52.17 188.81 44 168 44a76.3 76.3 0 0 0-40 11.37a75.59 75.59 0 0 0-93.58 11A78.64 78.64 0 0 0 12 123.51A131 131 0 0 0 53.43 216a43.8 43.8 0 0 0 30.17 12h87.69a43.87 43.87 0 0 0 32.05-13.85a127.6 127.6 0 0 0 18.4-25.39c1.57-2.88 3-5.71 4.14-8.41c1.59-3.68 3.24-7.48 1.12-12.35m-41.23 29.82a19.78 19.78 0 0 1-14.48 6.18H83.6a19.85 19.85 0 0 1-13.7-5.42a107.18 107.18 0 0 1-33.9-75.7a54.5 54.5 0 0 1 15.5-39.6A50.86 50.86 0 0 1 88 68h.72a51.5 51.5 0 0 1 31.76 11.4a12 12 0 0 0 15 0A51.4 51.4 0 0 1 168 68a67.24 67.24 0 0 1 29.88 7.4C186.26 89.66 180 105.13 180 120c0 23.33 7.47 42.89 21.25 56.19a103.3 103.3 0 0 1-15.49 21.62ZM128.75 13a43.8 43.8 0 0 1 13.42-11.49a12 12 0 0 1 11.64 21a19.8 19.8 0 0 0-6.11 5.24A12 12 0 0 1 128.75 13"></svg:path>`,
})
export class PhAppleLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAppleLogoDuotoneIcon],svg[ph-apple-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 172.78c-16.79-11.53-24-30.87-24-52.78c0-18.3 11.68-34.81 24-46.48C204.53 62.66 185 56 168 56a63.72 63.72 0 0 0-40 14a63.7 63.7 0 0 0-39.12-14C52 55.5 23.06 86.3 24 123.19a119.62 119.62 0 0 0 37.65 84.12A32 32 0 0 0 83.6 216h87.7a31.75 31.75 0 0 0 23.26-10c15.85-17 21.44-33.2 21.44-33.2Z" opacity=".2"></svg:path><svg:path d="M223.3 169.59a8.07 8.07 0 0 0-2.8-3.4C203.53 154.53 200 134.64 200 120c0-17.67 13.47-33.06 21.5-40.67a8 8 0 0 0 0-11.62C208.82 55.74 187.82 48 168 48a72.23 72.23 0 0 0-40 12.13a71.56 71.56 0 0 0-90.71 9.09A74.63 74.63 0 0 0 16 123.4a127 127 0 0 0 40.14 89.73A39.8 39.8 0 0 0 83.59 224h87.68a39.84 39.84 0 0 0 29.12-12.57a125 125 0 0 0 17.82-24.6c7.02-12.83 6.12-14.83 5.09-17.24m-34.63 30.94a23.76 23.76 0 0 1-17.4 7.47H83.59a23.82 23.82 0 0 1-16.44-6.51A111.14 111.14 0 0 1 32 123a58.5 58.5 0 0 1 16.65-42.53A54.8 54.8 0 0 1 88 64h.78A55.45 55.45 0 0 1 123 76.28a8 8 0 0 0 10 0A55.4 55.4 0 0 1 168 64a70.64 70.64 0 0 1 36 10.35c-13 14.52-20 30.47-20 45.65c0 23.77 7.64 42.73 22.18 55.3a105.5 105.5 0 0 1-17.51 25.23M128.23 30A40 40 0 0 1 167 0h1a8 8 0 0 1 0 16h-1a24 24 0 0 0-23.24 18a8 8 0 1 1-15.5-4Z"></svg:path></svg:g>`,
})
export class PhAppleLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAppleLogoFillIcon],svg[ph-apple-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128.23 30A40 40 0 0 1 167 0h1a8 8 0 0 1 0 16h-1a24 24 0 0 0-23.24 18a8 8 0 1 1-15.5-4Zm95.07 139.59a8.07 8.07 0 0 0-2.8-3.4C203.53 154.53 200 134.64 200 120c0-17.67 13.47-33.06 21.5-40.67a8 8 0 0 0 0-11.62C208.82 55.74 187.82 48 168 48a72.23 72.23 0 0 0-40 12.13a71.56 71.56 0 0 0-90.71 9.09A74.63 74.63 0 0 0 16 123.4a127 127 0 0 0 40.14 89.73A39.8 39.8 0 0 0 83.59 224h87.68a39.84 39.84 0 0 0 29.12-12.57a125 125 0 0 0 17.82-24.6c7.02-12.83 6.12-14.83 5.09-17.24"></svg:path>`,
})
export class PhAppleLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAppleLogoLightIcon],svg[ph-apple-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.4 167.84C201.71 155.69 198 135.12 198 120c0-18.42 13.86-34.29 22.12-42.12a6 6 0 0 0 0-8.71C208 57.7 187.07 50 168 50a70.23 70.23 0 0 0-40 12.55a69.6 69.6 0 0 0-89.31 8.08A72.63 72.63 0 0 0 18 123.35a125.1 125.1 0 0 0 39.53 88.33A37.85 37.85 0 0 0 83.6 222h87.7a37.83 37.83 0 0 0 27.7-11.93a122.6 122.6 0 0 0 17.54-24.2c6.55-12 5.77-13.75 5-15.48a6.07 6.07 0 0 0-2.14-2.55m-29.23 34A25.82 25.82 0 0 1 171.3 210H83.6a25.85 25.85 0 0 1-17.82-7A113.2 113.2 0 0 1 30 123a60.55 60.55 0 0 1 17.21-44A56.82 56.82 0 0 1 88 62h.81a57.35 57.35 0 0 1 35.44 12.71a6 6 0 0 0 7.5 0A57.4 57.4 0 0 1 168 62c13.89 0 28.81 4.68 39.11 12c-9.44 10.14-21.1 26.59-21.1 46c0 23.78 7.81 42.6 22.66 54.77a107.3 107.3 0 0 1-18.5 27.12Zm-60-171.39A38 38 0 0 1 167 2h1a6 6 0 0 1 0 12h-1a26 26 0 0 0-25.18 19.5a6 6 0 1 1-11.62-3Z"></svg:path>`,
})
export class PhAppleLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAppleLogoThinIcon],svg[ph-apple-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.27 169.49C199.86 156.84 196 135.6 196 120c0-19.17 14.25-35.53 22.75-43.57a4 4 0 0 0 0-5.81C207 59.48 186.59 52 168 52a68.3 68.3 0 0 0-40 13a67.61 67.61 0 0 0-87.88 7A70.65 70.65 0 0 0 20 123.3a123.1 123.1 0 0 0 38.9 86.92A35.8 35.8 0 0 0 83.6 220h87.7a35.84 35.84 0 0 0 26.19-11.3a120 120 0 0 0 17.24-23.79c6.08-11.1 5.42-12.62 4.94-13.72a4 4 0 0 0-1.4-1.7m-26.64 33.77A27.83 27.83 0 0 1 171.3 212H83.6a27.84 27.84 0 0 1-19.19-7.6A115.15 115.15 0 0 1 28 123.09a62.55 62.55 0 0 1 17.81-45.43A58.78 58.78 0 0 1 88 60h.84a59.37 59.37 0 0 1 36.66 13.15a4 4 0 0 0 5 0A59.35 59.35 0 0 1 168 60c15.12 0 31.45 5.41 42.11 13.73C200.68 83.42 188 100.16 188 120c0 23.79 8 42.44 23.12 54.17a107.6 107.6 0 0 1-19.49 29.09M132.13 31A36 36 0 0 1 167 4h1a4 4 0 0 1 0 8h-1a28 28 0 0 0-27.12 21a4 4 0 0 1-3.88 3a4 4 0 0 1-1-.13a4 4 0 0 1-2.87-4.87"></svg:path>`,
})
export class PhAppleLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phApplePodcastsLogoIcon],svg[ph-apple-podcasts-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M154.2 138.33a32 32 0 1 0-52.4 0a24.3 24.3 0 0 0-8.76 7a23.68 23.68 0 0 0-4.3 20.49l12.18 48A24.18 24.18 0 0 0 124.44 232h7.12a24.18 24.18 0 0 0 23.52-18.15l12.18-48a23.68 23.68 0 0 0-4.3-20.49a24.3 24.3 0 0 0-8.76-7.03M128 104a16 16 0 1 1-16 16a16 16 0 0 1 16-16m23.75 57.91l-12.18 48a8.18 8.18 0 0 1-8 6.09h-7.12a8.18 8.18 0 0 1-8-6.09l-12.18-48a7.71 7.71 0 0 1 1.42-6.73a8.26 8.26 0 0 1 6.58-3.18h31.5a8.26 8.26 0 0 1 6.58 3.18a7.71 7.71 0 0 1 1.4 6.73M72 128a56.3 56.3 0 0 0 2 15a8 8 0 0 1-15.41 4.29a72 72 0 1 1 138.74 0A8 8 0 0 1 182 143a56 56 0 1 0-110-15m160 0a103.92 103.92 0 0 1-46.18 86.46a8 8 0 0 1-8.9-13.3a88 88 0 1 0-97.84 0a8 8 0 0 1-8.9 13.3A104 104 0 1 1 232 128"></svg:path>`,
})
export class PhApplePodcastsLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phApplePodcastsLogoBoldIcon],svg[ph-apple-podcasts-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161.36 130a40 40 0 1 0-66.72 0a28.4 28.4 0 0 0-4.52 4.51a27.86 27.86 0 0 0-5.42 23.67l12.75 56A27.87 27.87 0 0 0 124.77 236h6.46a27.87 27.87 0 0 0 27.32-21.79l12.75-56a27.86 27.86 0 0 0-5.42-23.67a28.4 28.4 0 0 0-4.52-4.54M128 92a16 16 0 1 1-16 16a16 16 0 0 1 16-16m19.89 60.88l-12.74 56a4 4 0 0 1-3.92 3.12h-6.46a4 4 0 0 1-3.92-3.12l-12.74-56a3.92 3.92 0 0 1 .77-3.37A4 4 0 0 1 112 148h32a4 4 0 0 1 3.15 1.51a3.92 3.92 0 0 1 .74 3.37M236 128a107.88 107.88 0 0 1-38 82.21A12 12 0 0 1 182.47 192a84 84 0 1 0-108.94 0A12 12 0 0 1 58 210.21A108 108 0 1 1 236 128"></svg:path>`,
})
export class PhApplePodcastsLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phApplePodcastsLogoDuotoneIcon],svg[ph-apple-podcasts-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 120a24 24 0 1 1 24 24a24 24 0 0 1-24-24m39.75 24h-31.5a16.06 16.06 0 0 0-15.76 19.88l12.19 48A16.2 16.2 0 0 0 124.44 224h7.12a16.2 16.2 0 0 0 15.76-12.12l12.19-48A16.06 16.06 0 0 0 143.75 144" opacity=".2"></svg:path><svg:path d="M154.2 138.33a32 32 0 1 0-52.4 0a24.2 24.2 0 0 0-8.76 7a23.68 23.68 0 0 0-4.3 20.49l12.18 48A24.18 24.18 0 0 0 124.44 232h7.12a24.18 24.18 0 0 0 23.52-18.15l12.18-48a23.68 23.68 0 0 0-4.3-20.49a24.2 24.2 0 0 0-8.76-7.03M128 104a16 16 0 1 1-16 16a16 16 0 0 1 16-16m23.75 57.91l-12.18 48a8.18 8.18 0 0 1-8 6.09h-7.12a8.18 8.18 0 0 1-8-6.09l-12.18-48a7.71 7.71 0 0 1 1.42-6.73a8.26 8.26 0 0 1 6.58-3.18h31.5a8.26 8.26 0 0 1 6.58 3.18a7.71 7.71 0 0 1 1.4 6.73M72 128a56.3 56.3 0 0 0 2 15a8 8 0 0 1-15.41 4.29a72 72 0 1 1 138.74 0A8 8 0 0 1 182 143a56 56 0 1 0-110-15m160 0a103.92 103.92 0 0 1-46.18 86.46a8 8 0 0 1-8.9-13.3a88 88 0 1 0-97.84 0a8 8 0 0 1-8.9 13.3A104 104 0 1 1 232 128"></svg:path></svg:g>`,
})
export class PhApplePodcastsLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phApplePodcastsLogoFillIcon],svg[ph-apple-podcasts-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M159.8 151.82a19.67 19.67 0 0 1 3.58 17.05l-12.18 48A20.17 20.17 0 0 1 131.56 232h-7.12a20.17 20.17 0 0 1-19.64-15.13l-12.18-48a19.67 19.67 0 0 1 3.58-17.05a20.17 20.17 0 0 1 16-7.82h31.5a20.17 20.17 0 0 1 16.1 7.82M156 116a28 28 0 1 0-28 28a28 28 0 0 0 28-28m26 27a8 8 0 1 0 15.41 4.29a72 72 0 1 0-138.74 0A8 8 0 0 0 74 143a56 56 0 1 1 108 0M128 24a104 104 0 0 0-57.82 190.46a8 8 0 1 0 8.9-13.3a88 88 0 1 1 97.84 0a8 8 0 0 0 8.9 13.3A104 104 0 0 0 128 24"></svg:path>`,
})
export class PhApplePodcastsLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phApplePodcastsLogoLightIcon],svg[ph-apple-podcasts-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M151 139.2a30 30 0 1 0-46.06 0a22.14 22.14 0 0 0-10.35 7.39a21.68 21.68 0 0 0-3.94 18.77l12.18 48A22.17 22.17 0 0 0 124.44 230h7.12a22.17 22.17 0 0 0 21.58-16.64l12.18-48a21.68 21.68 0 0 0-3.94-18.77A22.14 22.14 0 0 0 151 139.2M128 102a18 18 0 1 1-18 18a18 18 0 0 1 18-18m25.69 60.4l-12.18 48a10.19 10.19 0 0 1-9.95 7.6h-7.12a10.19 10.19 0 0 1-10-7.6l-12.18-48a9.75 9.75 0 0 1 1.78-8.44a10.25 10.25 0 0 1 8.16-4h31.5a10.25 10.25 0 0 1 8.16 4a9.75 9.75 0 0 1 1.83 8.44M186 128a58 58 0 1 0-113.89 15.58a6 6 0 0 1-11.56 3.21a70 70 0 1 1 134.9 0a6 6 0 0 1-11.56-3.21A58.3 58.3 0 0 0 186 128m44 0a101.91 101.91 0 0 1-45.29 84.79a6 6 0 1 1-6.68-10a90 90 0 1 0-100.06 0a6 6 0 0 1-6.68 10A102 102 0 1 1 230 128"></svg:path>`,
})
export class PhApplePodcastsLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phApplePodcastsLogoThinIcon],svg[ph-apple-podcasts-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M147.26 140.3a28 28 0 1 0-38.52 0a20.12 20.12 0 0 0-12.54 7.52a19.67 19.67 0 0 0-3.58 17.05l12.18 48A20.17 20.17 0 0 0 124.44 228h7.12a20.17 20.17 0 0 0 19.64-15.13l12.18-48a19.67 19.67 0 0 0-3.58-17.05a20.12 20.12 0 0 0-12.54-7.52M108 120a20 20 0 1 1 20 20a20 20 0 0 1-20-20m47.63 42.9l-12.18 48a12.19 12.19 0 0 1-11.89 9.1h-7.12a12.19 12.19 0 0 1-11.89-9.1l-12.18-48a11.76 11.76 0 0 1 2.14-10.17a12.24 12.24 0 0 1 9.74-4.73h31.5a12.24 12.24 0 0 1 9.74 4.73a11.76 11.76 0 0 1 2.14 10.17M188 128a60 60 0 1 0-117.81 16.11a4 4 0 1 1-7.71 2.14a68 68 0 1 1 131 0a4 4 0 0 1-3.85 2.93a4 4 0 0 1-1.07-.14a4 4 0 0 1-2.79-4.93A60.2 60.2 0 0 0 188 128m40 0a99.92 99.92 0 0 1-44.4 83.13a4 4 0 0 1-4.46-6.64a92 92 0 1 0-102.28 0a4 4 0 0 1-4.46 6.64A100 100 0 1 1 228 128"></svg:path>`,
})
export class PhApplePodcastsLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phApproximateEqualsIcon],svg[ph-approximate-equals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222.16 153.26a8 8 0 0 1-1 11.25c-17.36 14.38-32.86 19.49-47 19.49c-18.58 0-34.82-8.81-49.93-17c-25.35-13.75-47.24-25.63-79.07.74a8 8 0 1 1-10.22-12.3c40.17-33.27 70.32-16.92 96.93-2.48c25.35 13.75 47.24 25.62 79.07-.75a8 8 0 0 1 11.22 1.05m-177-49.46c31.83-26.37 53.72-14.5 79.07-.75c15.11 8.2 31.35 17 49.93 17c14.14 0 29.64-5.11 47-19.49a8 8 0 1 0-10.22-12.3c-31.83 26.37-53.72 14.49-79.07.74c-26.61-14.43-56.76-30.79-96.93 2.48a8 8 0 0 0 10.17 12.32Z"></svg:path>`,
})
export class PhApproximateEqualsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phApproximateEqualsBoldIcon],svg[ph-approximate-equals-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.24 150.73a12 12 0 0 1-1.58 16.9C205.49 182.7 189.06 188 174.15 188c-19.76 0-36.86-9.29-51.88-17.44c-25.06-13.62-44.86-24.37-74.61.3a12 12 0 1 1-15.32-18.48c42.25-35 75-17.23 101.39-2.92c25.06 13.61 44.86 24.37 74.61-.31a12 12 0 0 1 16.9 1.58M47.66 106.85c29.75-24.68 49.55-13.92 74.61-.31c15 8.16 32.12 17.45 51.88 17.45c14.91 0 31.34-5.3 49.51-20.37a12 12 0 0 0-15.32-18.48c-29.75 24.67-49.55 13.92-74.61.3c-26.35-14.3-59.14-32.11-101.39 2.93a12 12 0 0 0 15.32 18.48"></svg:path>`,
})
export class PhApproximateEqualsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phApproximateEqualsDuotoneIcon],svg[ph-approximate-equals-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M222.16 153.26a8 8 0 0 1-1 11.25c-17.36 14.38-32.86 19.49-47 19.49c-18.58 0-34.82-8.81-49.93-17c-25.35-13.75-47.24-25.63-79.07.74a8 8 0 1 1-10.22-12.3c40.17-33.27 70.32-16.92 96.93-2.48c25.35 13.75 47.24 25.62 79.07-.75a8 8 0 0 1 11.22 1.05m-177-49.46c31.83-26.37 53.72-14.5 79.07-.75c15.11 8.2 31.35 17 49.93 17c14.14 0 29.64-5.11 47-19.49a8 8 0 1 0-10.22-12.3c-31.83 26.37-53.72 14.49-79.07.74c-26.61-14.43-56.76-30.79-96.93 2.48a8 8 0 0 0 10.17 12.32Z"></svg:path></svg:g>`,
})
export class PhApproximateEqualsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phApproximateEqualsFillIcon],svg[ph-approximate-equals-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-10.8 128.87c-13.07 11.18-24.9 15.1-35.64 15.1c-14.26 0-26.62-6.92-37.47-13c-18.41-10.31-32.95-18.45-54.89.31a8 8 0 1 1-10.4-12.16c30.42-26 54.09-12.76 73.11-2.11c18.41 10.31 33 18.45 54.89-.31a8 8 0 0 1 10.4 12.16Zm0-56c-13.07 11.18-24.9 15.1-35.64 15.1c-14.26 0-26.62-6.92-37.47-13c-18.41-10.31-32.95-18.45-54.89.31a8 8 0 0 1-10.4-12.15c30.42-26 54.09-12.76 73.11-2.11c18.41 10.31 33 18.45 54.89-.31a8 8 0 1 1 10.4 12.16"></svg:path>`,
})
export class PhApproximateEqualsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phApproximateEqualsLightIcon],svg[ph-approximate-equals-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.62 154.57a6 6 0 0 1-.79 8.45c-16.87 14-32 19-45.75 19c-18.19 0-34.13-8.66-48.94-16.71c-26-14.12-48.44-26.31-81.31 1a6 6 0 1 1-7.66-9.31c39.13-32.46 68.65-16.42 94.69-2.27s48.44 26.31 81.31-1a6 6 0 0 1 8.45.84M43.83 102.22c32.87-27.27 55.32-15.08 81.31-1c14.81 8 30.75 16.71 48.94 16.71c13.79 0 28.88-5 45.75-19a6 6 0 0 0-7.66-9.24c-32.87 27.27-55.32 15.08-81.31 1S75.3 60.52 36.17 93a6 6 0 0 0 7.66 9.24Z"></svg:path>`,
})
export class PhApproximateEqualsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phApproximateEqualsThinIcon],svg[ph-approximate-equals-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.08 155.84a4 4 0 0 1-.53 5.63C203.56 173.9 188.9 180 173.93 180a55 55 0 0 1-6.12-.34c-15-1.65-28.6-9-41.72-16.14c-25.52-13.86-49.62-27-83.54 1.18a4 4 0 0 1-5.1-6.16c17-14.12 33.62-20.07 50.74-18.2c15 1.65 28.6 9 41.72 16.15c25.52 13.86 49.62 26.94 83.54-1.18a4 4 0 0 1 5.63.53M42.55 100.69c33.92-28.12 58-15 83.54-1.18c13.12 7.13 26.69 14.5 41.72 16.15a57 57 0 0 0 6.12.33c15 0 29.63-6.1 44.62-18.53a4 4 0 1 0-5.1-6.16c-33.92 28.13-58 15-83.54 1.18c-13.12-7.13-26.69-14.48-41.72-16.14c-17.12-1.88-33.72 4.07-50.74 18.19a4 4 0 1 0 5.1 6.16"></svg:path>`,
})
export class PhApproximateEqualsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArchiveIcon],svg[ph-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16v88a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-16 144H48v-88h160Zm16-104H32V64h192zM96 136a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhArchiveIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArchiveBoldIcon],svg[ph-archive-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44H32a20 20 0 0 0-20 20v24a20 20 0 0 0 16 19.6V192a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-84.4A20 20 0 0 0 244 88V64a20 20 0 0 0-20-20M36 68h184v16H36Zm16 120v-80h152v80Zm112-52a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhArchiveBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArchiveDuotoneIcon],svg[ph-archive-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v96a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96Z" opacity=".2"></svg:path><svg:path d="M224 48H32a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16v88a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-16 144H48v-88h160Zm16-104H32V64h192zM96 136a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhArchiveDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArchiveFillIcon],svg[ph-archive-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16v88a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-72 96h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m72-56H32V64h192z"></svg:path>`,
})
export class PhArchiveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArchiveLightIcon],svg[ph-archive-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h2v90a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-90h2a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m-14 142a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-90h164Zm16-104a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2ZM98 136a6 6 0 0 1 6-6h48a6 6 0 0 1 0 12h-48a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhArchiveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArchiveThinIcon],svg[ph-archive-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h4v92a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-92h4a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m-12 140a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-92h168Zm16-104a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4Zm-128 48a4 4 0 0 1 4-4h48a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhArchiveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArchiveTrayBoldIcon],svg[ph-archive-tray-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 24v96h-24.69a19.86 19.86 0 0 0-14.14 5.86L147 172h-38l-18.17-18.14A19.86 19.86 0 0 0 76.69 148H52V52ZM52 204v-32h23l18.14 18.14a19.86 19.86 0 0 0 14.17 5.86h41.38a19.86 19.86 0 0 0 14.14-5.86L181 172h23v32Zm35.51-79.51a12 12 0 0 1 17-17L116 119V76a12 12 0 0 1 24 0v43l11.51-11.52a12 12 0 0 1 17 17l-32 32a12 12 0 0 1-17 0Z"></svg:path>`,
})
export class PhArchiveTrayBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArmchairIcon],svg[ph-armchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 88.8V72a40 40 0 0 0-40-40H80a40 40 0 0 0-40 40v16.8a40 40 0 0 0 0 78.4V200a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-32.8a40 40 0 0 0 0-78.4M80 48h96a24 24 0 0 1 24 24v16.8a40.07 40.07 0 0 0-32 39.2H88a40.07 40.07 0 0 0-32-39.2V72a24 24 0 0 1 24-24m128.39 104H208a8 8 0 0 0-8 8v40H56v-40a8 8 0 0 0-8-8h-.39A24 24 0 1 1 72 128v40a8 8 0 0 0 16 0v-24h80v24a8 8 0 0 0 16 0v-40a24 24 0 1 1 24.39 24"></svg:path>`,
})
export class PhArmchairIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArmchairBoldIcon],svg[ph-armchair-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 78.53V72a44.05 44.05 0 0 0-44-44H80a44.05 44.05 0 0 0-44 44v6.53a52 52 0 0 0 0 99V200a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-22.49a52 52 0 0 0 0-99ZM80 52h96a20 20 0 0 1 20 20v4.62A52.09 52.09 0 0 0 152.17 124h-48.34A52.09 52.09 0 0 0 60 76.62V72a20 20 0 0 1 20-20m126.81 103.86A12 12 0 0 0 196 167.8V196H60v-28.2a12 12 0 0 0-10.81-11.94A28 28 0 1 1 80 128v36a12 12 0 0 0 24 0v-16h48v16a12 12 0 0 0 24 0v-36a28 28 0 1 1 30.81 27.86"></svg:path>`,
})
export class PhArmchairBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArmchairDuotoneIcon],svg[ph-armchair-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 128a32 32 0 0 1-32 32v40a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8v-40a32 32 0 0 1 0-64V72a32 32 0 0 1 32-32h96a32 32 0 0 1 32 32v24a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M216 88.8V72a40 40 0 0 0-40-40H80a40 40 0 0 0-40 40v16.8a40 40 0 0 0 0 78.4V200a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-32.8a40 40 0 0 0 0-78.4M80 48h96a24 24 0 0 1 24 24v16.8a40.07 40.07 0 0 0-32 39.2H88a40.07 40.07 0 0 0-32-39.2V72a24 24 0 0 1 24-24m128.39 104H208a8 8 0 0 0-8 8v40H56v-40a8 8 0 0 0-8-8h-.39A24 24 0 1 1 72 128v40a8 8 0 0 0 16 0v-24h80v24a8 8 0 0 0 16 0v-40a24 24 0 1 1 24.39 24"></svg:path></svg:g>`,
})
export class PhArmchairDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArmchairFillIcon],svg[ph-armchair-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 132a28 28 0 0 1-24 27.71V200a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16v-40.29A28 28 0 1 1 72 132v36a8 8 0 0 0 16 0v-24h80v24a8 8 0 0 0 16 0v-36a28 28 0 0 1 56 0M44 88a44.06 44.06 0 0 1 43.81 40h80.38A44.06 44.06 0 0 1 212 88a4 4 0 0 0 4-4V72a40 40 0 0 0-40-40H80a40 40 0 0 0-40 40v12a4 4 0 0 0 4 4"></svg:path>`,
})
export class PhArmchairFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArmchairLightIcon],svg[ph-armchair-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 90.48V72a38 38 0 0 0-38-38H80a38 38 0 0 0-38 38v18.48a38 38 0 0 0 0 75.05V200a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-34.47a38 38 0 0 0 0-75ZM80 46h96a26 26 0 0 1 26 26v18.48A38.05 38.05 0 0 0 170 128v2H86v-2a38.05 38.05 0 0 0-32-37.52V72a26 26 0 0 1 26-26m128.35 108H208a6 6 0 0 0-6 6v40a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-40a6 6 0 0 0-6-6h-.35A26 26 0 1 1 74 128v40a6 6 0 0 0 12 0v-26h84v26a6 6 0 0 0 12 0v-40a26 26 0 1 1 26.35 26"></svg:path>`,
})
export class PhArmchairLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArmchairThinIcon],svg[ph-armchair-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 92.23V72a36 36 0 0 0-36-36H80a36 36 0 0 0-36 36v20.23a36 36 0 0 0 0 71.55V200a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-36.22a36 36 0 0 0 0-71.55M80 44h96a28 28 0 0 1 28 28v20.23A36 36 0 0 0 172 128v4H84v-4a36 36 0 0 0-32-35.77V72a28 28 0 0 1 28-28m128.3 112h-.3a4 4 0 0 0-4 4v40a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-40a4 4 0 0 0-4-4h-.3A28 28 0 1 1 76 128v40a4 4 0 0 0 8 0v-28h88v28a4 4 0 0 0 8 0v-40a28 28 0 1 1 28.3 28"></svg:path>`,
})
export class PhArmchairThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowArcLeftIcon],svg[ph-arrow-arc-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 184a8 8 0 0 1-16 0a88 88 0 0 0-150.22-62.22L43.4 144H88a8 8 0 0 1 0 16H24a8 8 0 0 1-8-8V88a8 8 0 0 1 16 0v44.77l22.48-22.33A104 104 0 0 1 232 184"></svg:path>`,
})
export class PhArrowArcLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowArcLeftBoldIcon],svg[ph-arrow-arc-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 184a12 12 0 0 1-24 0a84 84 0 0 0-143.4-59.4L53.11 140H88a12 12 0 0 1 0 24H24a12 12 0 0 1-12-12V88a12 12 0 0 1 24 0v35.16l15.66-15.55A108 108 0 0 1 236 184"></svg:path>`,
})
export class PhArrowArcLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowArcLeftDuotoneIcon],svg[ph-arrow-arc-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 152H24V88Z" opacity=".2"></svg:path><svg:path d="M201.54 110.46a104 104 0 0 0-145.4-1.63L29.66 82.34A8 8 0 0 0 16 88v64a8 8 0 0 0 8 8h64a8 8 0 0 0 5.66-13.66l-26.19-26.18A88 88 0 0 1 216 184a8 8 0 0 0 16 0a103.33 103.33 0 0 0-30.46-73.54M32 144v-36.69L68.69 144Z"></svg:path></svg:g>`,
})
export class PhArrowArcLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowArcLeftFillIcon],svg[ph-arrow-arc-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 184a8 8 0 0 1-16 0a88 88 0 0 0-148.53-63.84l26.19 26.18A8 8 0 0 1 88 160H24a8 8 0 0 1-8-8V88a8 8 0 0 1 13.66-5.66l26.48 26.48A104 104 0 0 1 232 184"></svg:path>`,
})
export class PhArrowArcLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowArcLeftLightIcon],svg[ph-arrow-arc-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 184a6 6 0 0 1-12 0a90 90 0 0 0-153.64-63.64L38.55 146H88a6 6 0 0 1 0 12H24a6 6 0 0 1-6-6V88a6 6 0 0 1 12 0v49.58l25.89-25.72A102 102 0 0 1 230 184"></svg:path>`,
})
export class PhArrowArcLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowArcLeftThinIcon],svg[ph-arrow-arc-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 184a4 4 0 0 1-8 0a92 92 0 0 0-157-65l-29.3 29H88a4 4 0 0 1 0 8H24a4 4 0 0 1-4-4V88a4 4 0 0 1 8 0v54.39l29.3-29.11A100 100 0 0 1 228 184"></svg:path>`,
})
export class PhArrowArcLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowArcRightIcon],svg[ph-arrow-arc-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 88v64a8 8 0 0 1-8 8h-64a8 8 0 0 1 0-16h44.6l-22.36-22.21A88 88 0 0 0 40 184a8 8 0 0 1-16 0a104 104 0 0 1 177.54-73.54L224 132.77V88a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhArrowArcRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowArcRightBoldIcon],svg[ph-arrow-arc-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 88v64a12 12 0 0 1-12 12h-64a12 12 0 0 1 0-24h34.9l-15.48-15.37A84 84 0 0 0 44 184a12 12 0 0 1-24 0a108 108 0 0 1 184.37-76.37L220 123.16V88a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhArrowArcRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowArcRightDuotoneIcon],svg[ph-arrow-arc-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 88v64h-64Z" opacity=".2"></svg:path><svg:path d="M235.06 80.61a8 8 0 0 0-8.72 1.73l-26.48 26.49A104 104 0 0 0 24 184a8 8 0 0 0 16 0a88 88 0 0 1 148.53-63.84l-26.19 26.18A8 8 0 0 0 168 160h64a8 8 0 0 0 8-8V88a8 8 0 0 0-4.94-7.39M224 144h-36.69L224 107.31Z"></svg:path></svg:g>`,
})
export class PhArrowArcRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowArcRightFillIcon],svg[ph-arrow-arc-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 88v64a8 8 0 0 1-8 8h-64a8 8 0 0 1-5.66-13.66l26.19-26.18A88 88 0 0 0 40 184a8 8 0 0 1-16 0a104 104 0 0 1 175.86-75.18l26.48-26.48A8 8 0 0 1 240 88"></svg:path>`,
})
export class PhArrowArcRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowArcRightLightIcon],svg[ph-arrow-arc-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 88v64a6 6 0 0 1-6 6h-64a6 6 0 0 1 0-12h49.45l-25.8-25.63A90 90 0 0 0 38 184a6 6 0 0 1-12 0a102 102 0 0 1 174.12-72.12l25.88 25.7V88a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhArrowArcRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowArcRightThinIcon],svg[ph-arrow-arc-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 88v64a4 4 0 0 1-4 4h-64a4 4 0 0 1 0-8h54.3l-29.24-29A92 92 0 0 0 36 184a4 4 0 0 1-8 0a100 100 0 0 1 170.71-70.71l29.29 29.1V88a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhArrowArcRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDoubleUpLeftIcon],svg[ph-arrow-bend-double-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85.66 146.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L43.31 104ZM128 96H99.31l34.35-34.34a8 8 0 0 0-11.32-11.32l-48 48a8 8 0 0 0 0 11.32l48 48a8 8 0 0 0 11.32-11.32L99.31 112H128a88.1 88.1 0 0 1 88 88a8 8 0 0 0 16 0A104.11 104.11 0 0 0 128 96"></svg:path>`,
})
export class PhArrowBendDoubleUpLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDoubleUpLeftBoldIcon],svg[ph-arrow-bend-double-up-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88.49 143.51a12 12 0 0 1-17 17l-48-48a12 12 0 0 1 0-17l48-48a12 12 0 0 1 17 17L49 104ZM128 92h-11l27.52-27.52a12 12 0 0 0-17-17l-48 48a12 12 0 0 0 0 17l48 48a12 12 0 0 0 17-17L117 116h11a84.09 84.09 0 0 1 84 84a12 12 0 0 0 24 0A108.12 108.12 0 0 0 128 92"></svg:path>`,
})
export class PhArrowBendDoubleUpLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDoubleUpLeftDuotoneIcon],svg[ph-arrow-bend-double-up-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 56v96l-48-48Z" opacity=".2"></svg:path><svg:path d="M85.66 146.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L43.31 104ZM232 200a8 8 0 0 1-16 0a88.11 88.11 0 0 0-80-87.63V152a8 8 0 0 1-13.66 5.66l-48-48a8 8 0 0 1 0-11.32l48-48A8 8 0 0 1 136 56v40.3A104.15 104.15 0 0 1 232 200M120 75.31L91.31 104L120 132.69Z"></svg:path></svg:g>`,
})
export class PhArrowBendDoubleUpLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDoubleUpLeftFillIcon],svg[ph-arrow-bend-double-up-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85.66 146.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L43.31 104ZM136 96.3V56a8 8 0 0 0-13.66-5.66l-48 48a8 8 0 0 0 0 11.32l48 48A8 8 0 0 0 136 152v-39.63A88.11 88.11 0 0 1 216 200a8 8 0 0 0 16 0a104.15 104.15 0 0 0-96-103.7"></svg:path>`,
})
export class PhArrowBendDoubleUpLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDoubleUpLeftLightIcon],svg[ph-arrow-bend-double-up-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84.24 147.76a6 6 0 1 1-8.48 8.48l-48-48a6 6 0 0 1 0-8.48l48-48a6 6 0 0 1 8.48 8.48L40.49 104ZM128 98H94.49l37.75-37.76a6 6 0 0 0-8.48-8.48l-48 48a6 6 0 0 0 0 8.48l48 48a6 6 0 0 0 8.48-8.48L94.49 110H128a90.1 90.1 0 0 1 90 90a6 6 0 0 0 12 0A102.12 102.12 0 0 0 128 98"></svg:path>`,
})
export class PhArrowBendDoubleUpLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDoubleUpLeftThinIcon],svg[ph-arrow-bend-double-up-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M82.83 149.17a4 4 0 0 1-5.66 5.66l-48-48a4 4 0 0 1 0-5.66l48-48a4 4 0 0 1 5.66 5.66L37.66 104ZM128 100H89.66l41.17-41.17a4 4 0 0 0-5.66-5.66l-48 48a4 4 0 0 0 0 5.66l48 48a4 4 0 0 0 5.66-5.66L89.66 108H128a92.1 92.1 0 0 1 92 92a4 4 0 0 0 8 0a100.11 100.11 0 0 0-100-100"></svg:path>`,
})
export class PhArrowBendDoubleUpLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDoubleUpRightIcon],svg[ph-arrow-bend-double-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 109.66l-48 48a8 8 0 0 1-11.32-11.32L212.69 104l-42.35-42.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32m-48-11.32l-48-48a8 8 0 0 0-11.32 11.32L156.69 96H128A104.11 104.11 0 0 0 24 200a8 8 0 0 0 16 0a88.1 88.1 0 0 1 88-88h28.69l-34.35 34.34a8 8 0 0 0 11.32 11.32l48-48a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhArrowBendDoubleUpRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDoubleUpRightBoldIcon],svg[ph-arrow-bend-double-up-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 112.49l-48 48a12 12 0 0 1-17-17L207 104l-39.49-39.52a12 12 0 0 1 17-17l48 48a12 12 0 0 1-.02 17.01m-56-17l-48-48a12 12 0 1 0-17 17L139 92h-11A108.12 108.12 0 0 0 20 200a12 12 0 0 0 24 0a84.09 84.09 0 0 1 84-84h11l-27.52 27.51a12 12 0 0 0 17 17l48-48a12 12 0 0 0 .01-17Z"></svg:path>`,
})
export class PhArrowBendDoubleUpRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDoubleUpRightDuotoneIcon],svg[ph-arrow-bend-double-up-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m176 104l-48 48V56Z" opacity=".2"></svg:path><svg:path d="m229.66 109.66l-48 48a8 8 0 0 1-11.32-11.32L212.69 104l-42.35-42.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32m-48 0l-48 48A8 8 0 0 1 120 152v-39.63A88.11 88.11 0 0 0 40 200a8 8 0 0 1-16 0a104.15 104.15 0 0 1 96-103.7V56a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32m-17-5.66L136 75.31v57.38Z"></svg:path></svg:g>`,
})
export class PhArrowBendDoubleUpRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDoubleUpRightFillIcon],svg[ph-arrow-bend-double-up-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 109.66l-48 48a8 8 0 0 1-11.32-11.32L212.69 104l-42.35-42.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32m-48-11.32l-48-48A8 8 0 0 0 120 56v40.3A104.15 104.15 0 0 0 24 200a8 8 0 0 0 16 0a88.11 88.11 0 0 1 80-87.63V152a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhArrowBendDoubleUpRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDoubleUpRightLightIcon],svg[ph-arrow-bend-double-up-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 108.24l-48 48a6 6 0 0 1-8.48-8.48L215.51 104l-43.75-43.76a6 6 0 0 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48m-48-8.48l-48-48a6 6 0 1 0-8.48 8.48L161.51 98H128A102.12 102.12 0 0 0 26 200a6 6 0 0 0 12 0a90.1 90.1 0 0 1 90-90h33.51l-37.75 37.76a6 6 0 1 0 8.48 8.48l48-48a6 6 0 0 0 0-8.48"></svg:path>`,
})
export class PhArrowBendDoubleUpRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDoubleUpRightThinIcon],svg[ph-arrow-bend-double-up-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 106.83l-48 48a4 4 0 0 1-5.66-5.66L218.34 104l-45.17-45.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66m-48-5.66l-48-48a4 4 0 1 0-5.66 5.66L166.34 100H128A100.11 100.11 0 0 0 28 200a4 4 0 0 0 8 0a92.1 92.1 0 0 1 92-92h38.34l-41.17 41.17a4 4 0 0 0 5.66 5.66l48-48a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhArrowBendDoubleUpRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDownLeftIcon],svg[ph-arrow-bend-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56a104.11 104.11 0 0 1-104 104H51.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L51.31 144H128a88.1 88.1 0 0 0 88-88a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhArrowBendDownLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDownLeftBoldIcon],svg[ph-arrow-bend-down-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 56a108.12 108.12 0 0 1-108 108H61l27.52 27.51a12 12 0 0 1-17 17l-48-48a12 12 0 0 1 0-17l48-48a12 12 0 0 1 17 17L61 140h67a84.09 84.09 0 0 0 84-84a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhArrowBendDownLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDownLeftDuotoneIcon],svg[ph-arrow-bend-down-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 104v96l-48-48Z" opacity=".2"></svg:path><svg:path d="M224 48a8 8 0 0 0-8 8a88.1 88.1 0 0 1-88 88H88v-40a8 8 0 0 0-13.66-5.66l-48 48a8 8 0 0 0 0 11.32l48 48A8 8 0 0 0 88 200v-40h40A104.11 104.11 0 0 0 232 56a8 8 0 0 0-8-8M72 180.69L43.31 152L72 123.31Z"></svg:path></svg:g>`,
})
export class PhArrowBendDownLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDownLeftFillIcon],svg[ph-arrow-bend-down-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56a104.11 104.11 0 0 1-104 104H88v40a8 8 0 0 1-13.66 5.66l-48-48a8 8 0 0 1 0-11.32l48-48A8 8 0 0 1 88 104v40h40a88.1 88.1 0 0 0 88-88a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhArrowBendDownLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDownLeftLightIcon],svg[ph-arrow-bend-down-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 56a102.12 102.12 0 0 1-102 102H46.49l37.75 37.76a6 6 0 1 1-8.48 8.48l-48-48a6 6 0 0 1 0-8.48l48-48a6 6 0 0 1 8.48 8.48L46.49 146H128a90.1 90.1 0 0 0 90-90a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhArrowBendDownLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDownLeftThinIcon],svg[ph-arrow-bend-down-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 56a100.11 100.11 0 0 1-100 100H41.66l41.17 41.17a4 4 0 0 1-5.66 5.66l-48-48a4 4 0 0 1 0-5.66l48-48a4 4 0 0 1 5.66 5.66L41.66 148H128a92.1 92.1 0 0 0 92-92a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhArrowBendDownLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDownRightIcon],svg[ph-arrow-bend-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 157.66l-48 48a8 8 0 0 1-11.32-11.32L204.69 160H128A104.11 104.11 0 0 1 24 56a8 8 0 0 1 16 0a88.1 88.1 0 0 0 88 88h76.69l-34.35-34.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowBendDownRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDownRightBoldIcon],svg[ph-arrow-bend-down-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 160.49l-48 48a12 12 0 0 1-17-17L195 164h-67A108.12 108.12 0 0 1 20 56a12 12 0 0 1 24 0a84.09 84.09 0 0 0 84 84h67l-27.52-27.51a12 12 0 0 1 17-17l48 48a12 12 0 0 1 .01 17"></svg:path>`,
})
export class PhArrowBendDownRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDownRightDuotoneIcon],svg[ph-arrow-bend-down-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 152l-48 48v-96Z" opacity=".2"></svg:path><svg:path d="m229.66 146.34l-48-48A8 8 0 0 0 168 104v40h-40a88.1 88.1 0 0 1-88-88a8 8 0 0 0-16 0a104.11 104.11 0 0 0 104 104h40v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32M184 180.69v-57.38L212.69 152Z"></svg:path></svg:g>`,
})
export class PhArrowBendDownRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDownRightFillIcon],svg[ph-arrow-bend-down-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 157.66l-48 48A8 8 0 0 1 168 200v-40h-40A104.11 104.11 0 0 1 24 56a8 8 0 0 1 16 0a88.1 88.1 0 0 0 88 88h40v-40a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowBendDownRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDownRightLightIcon],svg[ph-arrow-bend-down-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 156.24l-48 48a6 6 0 0 1-8.48-8.48L209.51 158H128A102.12 102.12 0 0 1 26 56a6 6 0 0 1 12 0a90.1 90.1 0 0 0 90 90h81.51l-37.75-37.76a6 6 0 0 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhArrowBendDownRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDownRightThinIcon],svg[ph-arrow-bend-down-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 154.83l-48 48a4 4 0 0 1-5.66-5.66L214.34 156H128A100.11 100.11 0 0 1 28 56a4 4 0 0 1 8 0a92.1 92.1 0 0 0 92 92h86.34l-41.17-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhArrowBendDownRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendLeftDownIcon],svg[ph-arrow-bend-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32a8 8 0 0 1-8 8a88.1 88.1 0 0 0-88 88v76.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L96 204.69V128A104.11 104.11 0 0 1 200 24a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhArrowBendLeftDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendLeftDownBoldIcon],svg[ph-arrow-bend-left-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 32a12 12 0 0 1-12 12a84.09 84.09 0 0 0-84 84v67l27.51-27.52a12 12 0 0 1 17 17l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 0 1 17-17L92 195v-67A108.12 108.12 0 0 1 200 20a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhArrowBendLeftDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendLeftDownDuotoneIcon],svg[ph-arrow-bend-left-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m152 176l-48 48l-48-48Z" opacity=".2"></svg:path><svg:path d="M200 24A104.11 104.11 0 0 0 96 128v40H56a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 152 168h-40v-40a88.1 88.1 0 0 1 88-88a8 8 0 0 0 0-16m-96 188.69L75.31 184h57.38Z"></svg:path></svg:g>`,
})
export class PhArrowBendLeftDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendLeftDownFillIcon],svg[ph-arrow-bend-left-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32a8 8 0 0 1-8 8a88.1 88.1 0 0 0-88 88v40h40a8 8 0 0 1 5.66 13.66l-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 56 168h40v-40A104.11 104.11 0 0 1 200 24a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhArrowBendLeftDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendLeftDownLightIcon],svg[ph-arrow-bend-left-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 32a6 6 0 0 1-6 6a90.1 90.1 0 0 0-90 90v81.51l37.76-37.75a6 6 0 0 1 8.48 8.48l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L98 209.51V128A102.12 102.12 0 0 1 200 26a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhArrowBendLeftDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendLeftDownThinIcon],svg[ph-arrow-bend-left-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 32a4 4 0 0 1-4 4a92.1 92.1 0 0 0-92 92v86.34l41.17-41.17a4 4 0 0 1 5.66 5.66l-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 0 1 5.66-5.66L100 214.34V128A100.11 100.11 0 0 1 200 28a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhArrowBendLeftDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendLeftUpIcon],svg[ph-arrow-bend-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 224a8 8 0 0 1-8 8A104.11 104.11 0 0 1 96 128V51.31L61.66 85.66a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1-11.32 11.32L112 51.31V128a88.1 88.1 0 0 0 88 88a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhArrowBendLeftUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendLeftUpBoldIcon],svg[ph-arrow-bend-left-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 224a12 12 0 0 1-12 12A108.12 108.12 0 0 1 92 128V61L64.49 88.49a12 12 0 0 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1-17 17L116 61v67a84.09 84.09 0 0 0 84 84a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhArrowBendLeftUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendLeftUpDuotoneIcon],svg[ph-arrow-bend-left-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 80H56l48-48Z" opacity=".2"></svg:path><svg:path d="M200 216a88.1 88.1 0 0 1-88-88V88h40a8 8 0 0 0 5.66-13.66l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 56 88h40v40a104.11 104.11 0 0 0 104 104a8 8 0 0 0 0-16M104 43.31L132.69 72H75.31Z"></svg:path></svg:g>`,
})
export class PhArrowBendLeftUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendLeftUpFillIcon],svg[ph-arrow-bend-left-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 224a8 8 0 0 1-8 8A104.11 104.11 0 0 1 96 128V88H56a8 8 0 0 1-5.66-13.66l48-48a8 8 0 0 1 11.32 0l48 48A8 8 0 0 1 152 88h-40v40a88.1 88.1 0 0 0 88 88a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhArrowBendLeftUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendLeftUpLightIcon],svg[ph-arrow-bend-left-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 224a6 6 0 0 1-6 6A102.12 102.12 0 0 1 98 128V46.49L60.24 84.24a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 1 1-8.48 8.48L110 46.49V128a90.1 90.1 0 0 0 90 90a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhArrowBendLeftUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendLeftUpThinIcon],svg[ph-arrow-bend-left-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 224a4 4 0 0 1-4 4a100.11 100.11 0 0 1-100-100V41.66L58.83 82.83a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1-5.66 5.66L108 41.66V128a92.1 92.1 0 0 0 92 92a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhArrowBendLeftUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendRightDownIcon],svg[ph-arrow-bend-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m205.66 181.66l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L144 204.69V128a88.1 88.1 0 0 0-88-88a8 8 0 0 1 0-16a104.11 104.11 0 0 1 104 104v76.69l34.34-34.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhArrowBendRightDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendRightDownBoldIcon],svg[ph-arrow-bend-right-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m208.49 184.49l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 0 1 17-17L140 195v-67a84.09 84.09 0 0 0-84-84a12 12 0 0 1 0-24a108.12 108.12 0 0 1 108 108v67l27.51-27.52a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhArrowBendRightDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendRightDownDuotoneIcon],svg[ph-arrow-bend-right-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m200 176l-48 48l-48-48Z" opacity=".2"></svg:path><svg:path d="M207.39 172.94A8 8 0 0 0 200 168h-40v-40A104.11 104.11 0 0 0 56 24a8 8 0 0 0 0 16a88.1 88.1 0 0 1 88 88v40h-40a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48a8 8 0 0 0 1.73-8.72M152 212.69L123.31 184h57.38Z"></svg:path></svg:g>`,
})
export class PhArrowBendRightDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendRightDownFillIcon],svg[ph-arrow-bend-right-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m205.66 181.66l-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 104 168h40v-40a88.1 88.1 0 0 0-88-88a8 8 0 0 1 0-16a104.11 104.11 0 0 1 104 104v40h40a8 8 0 0 1 5.66 13.66"></svg:path>`,
})
export class PhArrowBendRightDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendRightDownLightIcon],svg[ph-arrow-bend-right-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m204.24 180.24l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L146 209.51V128a90.1 90.1 0 0 0-90-90a6 6 0 0 1 0-12a102.12 102.12 0 0 1 102 102v81.51l37.76-37.75a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhArrowBendRightDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendRightDownThinIcon],svg[ph-arrow-bend-right-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m202.83 178.83l-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 0 1 5.66-5.66L148 214.34V128a92.1 92.1 0 0 0-92-92a4 4 0 0 1 0-8a100.11 100.11 0 0 1 100 100v86.34l41.17-41.17a4 4 0 0 1 5.66 5.66"></svg:path>`,
})
export class PhArrowBendRightDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendRightUpIcon],svg[ph-arrow-bend-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.66 85.66a8 8 0 0 1-11.32 0L160 51.31V128A104.11 104.11 0 0 1 56 232a8 8 0 0 1 0-16a88.1 88.1 0 0 0 88-88V51.31l-34.34 34.35a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowBendRightUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendRightUpBoldIcon],svg[ph-arrow-bend-right-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.49 88.49a12 12 0 0 1-17 0L164 61v67A108.12 108.12 0 0 1 56 236a12 12 0 0 1 0-24a84.09 84.09 0 0 0 84-84V61l-27.51 27.49a12 12 0 0 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1 0 17"></svg:path>`,
})
export class PhArrowBendRightUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendRightUpDuotoneIcon],svg[ph-arrow-bend-right-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 80h-96l48-48Z" opacity=".2"></svg:path><svg:path d="m205.66 74.34l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 104 88h40v40a88.1 88.1 0 0 1-88 88a8 8 0 0 0 0 16a104.11 104.11 0 0 0 104-104V88h40a8 8 0 0 0 5.66-13.66M123.31 72L152 43.31L180.69 72Z"></svg:path></svg:g>`,
})
export class PhArrowBendRightUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendRightUpFillIcon],svg[ph-arrow-bend-right-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207.39 83.06A8 8 0 0 1 200 88h-40v40A104.11 104.11 0 0 1 56 232a8 8 0 0 1 0-16a88.1 88.1 0 0 0 88-88V88h-40a8 8 0 0 1-5.66-13.66l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1 1.73 8.72"></svg:path>`,
})
export class PhArrowBendRightUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendRightUpLightIcon],svg[ph-arrow-bend-right-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.24 84.24a6 6 0 0 1-8.48 0L158 46.49V128A102.12 102.12 0 0 1 56 230a6 6 0 0 1 0-12a90.1 90.1 0 0 0 90-90V46.49l-37.76 37.75a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhArrowBendRightUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendRightUpThinIcon],svg[ph-arrow-bend-right-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.83 82.83a4 4 0 0 1-5.66 0L156 41.66V128A100.11 100.11 0 0 1 56 228a4 4 0 0 1 0-8a92.1 92.1 0 0 0 92-92V41.66l-41.17 41.17a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhArrowBendRightUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendUpLeftIcon],svg[ph-arrow-bend-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 200a8 8 0 0 1-16 0a88.1 88.1 0 0 0-88-88H51.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L51.31 96H128a104.11 104.11 0 0 1 104 104"></svg:path>`,
})
export class PhArrowBendUpLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendUpLeftBoldIcon],svg[ph-arrow-bend-up-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 200a12 12 0 0 1-24 0a84.09 84.09 0 0 0-84-84H61l27.52 27.51a12 12 0 0 1-17 17l-48-48a12 12 0 0 1 0-17l48-48a12 12 0 0 1 17 17L61 92h67a108.12 108.12 0 0 1 108 108"></svg:path>`,
})
export class PhArrowBendUpLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendUpLeftDuotoneIcon],svg[ph-arrow-bend-up-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 56v96l-48-48Z" opacity=".2"></svg:path><svg:path d="M128 96H88V56a8 8 0 0 0-13.66-5.66l-48 48a8 8 0 0 0 0 11.32l48 48A8 8 0 0 0 88 152v-40h40a88.1 88.1 0 0 1 88 88a8 8 0 0 0 16 0A104.11 104.11 0 0 0 128 96m-56 36.69L43.31 104L72 75.31Z"></svg:path></svg:g>`,
})
export class PhArrowBendUpLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendUpLeftFillIcon],svg[ph-arrow-bend-up-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 200a8 8 0 0 1-16 0a88.1 88.1 0 0 0-88-88H88v40a8 8 0 0 1-13.66 5.66l-48-48a8 8 0 0 1 0-11.32l48-48A8 8 0 0 1 88 56v40h40a104.11 104.11 0 0 1 104 104"></svg:path>`,
})
export class PhArrowBendUpLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendUpLeftLightIcon],svg[ph-arrow-bend-up-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 200a6 6 0 0 1-12 0a90.1 90.1 0 0 0-90-90H46.49l37.75 37.76a6 6 0 1 1-8.48 8.48l-48-48a6 6 0 0 1 0-8.48l48-48a6 6 0 0 1 8.48 8.48L46.49 98H128a102.12 102.12 0 0 1 102 102"></svg:path>`,
})
export class PhArrowBendUpLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendUpLeftThinIcon],svg[ph-arrow-bend-up-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 200a4 4 0 0 1-8 0a92.1 92.1 0 0 0-92-92H41.66l41.17 41.17a4 4 0 0 1-5.66 5.66l-48-48a4 4 0 0 1 0-5.66l48-48a4 4 0 0 1 5.66 5.66L41.66 100H128a100.11 100.11 0 0 1 100 100"></svg:path>`,
})
export class PhArrowBendUpLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendUpRightIcon],svg[ph-arrow-bend-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 109.66l-48 48a8 8 0 0 1-11.32-11.32L204.69 112H128a88.1 88.1 0 0 0-88 88a8 8 0 0 1-16 0A104.11 104.11 0 0 1 128 96h76.69l-34.35-34.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowBendUpRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendUpRightBoldIcon],svg[ph-arrow-bend-up-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 112.49l-48 48a12 12 0 0 1-17-17L195 116h-67a84.09 84.09 0 0 0-84 84a12 12 0 0 1-24 0A108.12 108.12 0 0 1 128 92h67l-27.49-27.52a12 12 0 0 1 17-17l48 48a12 12 0 0 1-.02 17.01"></svg:path>`,
})
export class PhArrowBendUpRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendUpRightDuotoneIcon],svg[ph-arrow-bend-up-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 104l-48 48V56Z" opacity=".2"></svg:path><svg:path d="m229.66 98.34l-48-48A8 8 0 0 0 168 56v40h-40A104.11 104.11 0 0 0 24 200a8 8 0 0 0 16 0a88.1 88.1 0 0 1 88-88h40v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32M184 132.69V75.31L212.69 104Z"></svg:path></svg:g>`,
})
export class PhArrowBendUpRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendUpRightFillIcon],svg[ph-arrow-bend-up-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 109.66l-48 48A8 8 0 0 1 168 152v-40h-40a88.1 88.1 0 0 0-88 88a8 8 0 0 1-16 0A104.11 104.11 0 0 1 128 96h40V56a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowBendUpRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendUpRightLightIcon],svg[ph-arrow-bend-up-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 108.24l-48 48a6 6 0 0 1-8.48-8.48L209.51 110H128a90.1 90.1 0 0 0-90 90a6 6 0 0 1-12 0A102.12 102.12 0 0 1 128 98h81.51l-37.75-37.76a6 6 0 0 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhArrowBendUpRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowBendUpRightThinIcon],svg[ph-arrow-bend-up-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 106.83l-48 48a4 4 0 0 1-5.66-5.66L214.34 108H128a92.1 92.1 0 0 0-92 92a4 4 0 0 1-8 0a100.11 100.11 0 0 1 100-100h86.34l-41.17-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhArrowBendUpRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownIcon],svg[ph-arrow-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m37.66-85.66a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 148.69V88a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 0"></svg:path>`,
})
export class PhArrowCircleDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownBoldIcon],svg[ph-arrow-circle-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m40.49-84.49a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L116 139V88a12 12 0 0 1 24 0v51l11.51-11.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhArrowCircleDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownDuotoneIcon],svg[ph-arrow-circle-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m37.66-85.66a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 148.69V88a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhArrowCircleDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownFillIcon],svg[ph-arrow-circle-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m37.66 117.66l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 148.69V88a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhArrowCircleDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownLeftIcon],svg[ph-arrow-circle-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m37.66-125.66a8 8 0 0 1 0 11.32L115.31 152H144a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v28.69l50.34-50.35a8 8 0 0 1 11.32 0"></svg:path>`,
})
export class PhArrowCircleDownLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownLeftBoldIcon],svg[ph-arrow-circle-down-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m40.49-124.49a12 12 0 0 1 0 17L125 148h19a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12v-48a12 12 0 0 1 24 0v19l43.51-43.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhArrowCircleDownLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownLeftDuotoneIcon],svg[ph-arrow-circle-down-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m37.66-125.66a8 8 0 0 1 0 11.32L115.31 152H144a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v28.69l50.34-50.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhArrowCircleDownLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownLeftFillIcon],svg[ph-arrow-circle-down-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m37.66 77.66L115.31 152H144a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v28.69l50.34-50.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhArrowCircleDownLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownLeftLightIcon],svg[ph-arrow-circle-down-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m36.24-126.24a6 6 0 0 1 0 8.48L110.49 154H144a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6v-48a6 6 0 0 1 12 0v33.51l53.76-53.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhArrowCircleDownLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownLeftThinIcon],svg[ph-arrow-circle-down-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m34.83-126.83a4 4 0 0 1 0 5.66L105.66 156H144a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4v-48a4 4 0 0 1 8 0v38.34l57.17-57.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhArrowCircleDownLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownLightIcon],svg[ph-arrow-circle-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m36.24-86.24a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L122 153.51V88a6 6 0 0 1 12 0v65.51l21.76-21.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhArrowCircleDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownRightIcon],svg[ph-arrow-circle-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m40-104v48a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h28.69l-50.35-50.34a8 8 0 0 1 11.32-11.32L152 140.69V112a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhArrowCircleDownRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownRightBoldIcon],svg[ph-arrow-circle-down-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m44-100v48a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h19l-43.49-43.51a12 12 0 0 1 17-17L148 131v-19a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhArrowCircleDownRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownRightDuotoneIcon],svg[ph-arrow-circle-down-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m40-104v48a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h28.69l-50.35-50.34a8 8 0 0 1 11.32-11.32L152 140.69V112a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhArrowCircleDownRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownRightFillIcon],svg[ph-arrow-circle-down-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 136a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h28.69l-50.35-50.34a8 8 0 0 1 11.32-11.32L152 140.69V112a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhArrowCircleDownRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownRightLightIcon],svg[ph-arrow-circle-down-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m38-106v48a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h33.51l-53.75-53.76a6 6 0 0 1 8.48-8.48L154 145.51V112a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhArrowCircleDownRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownRightThinIcon],svg[ph-arrow-circle-down-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m36-108v48a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h38.34L93.17 98.83a4 4 0 0 1 5.66-5.66L156 150.34V112a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhArrowCircleDownRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownThinIcon],svg[ph-arrow-circle-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m34.83-86.83a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L124 158.34V88a4 4 0 0 1 8 0v70.34l25.17-25.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhArrowCircleDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleLeftIcon],svg[ph-arrow-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a8 8 0 0 1-8 8h-60.69l18.35 18.34a8 8 0 0 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32L107.31 120H168a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhArrowCircleLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleLeftBoldIcon],svg[ph-arrow-circle-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m52-84a12 12 0 0 1-12 12h-51l11.52 11.51a12 12 0 0 1-17 17l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 0 1 17 17L117 116h51a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhArrowCircleLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleLeftDuotoneIcon],svg[ph-arrow-circle-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a8 8 0 0 1-8 8h-60.69l18.35 18.34a8 8 0 0 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32L107.31 120H168a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhArrowCircleLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleLeftFillIcon],svg[ph-arrow-circle-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 112h-60.69l18.35 18.34a8 8 0 0 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32L107.31 120H168a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhArrowCircleLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleLeftLightIcon],svg[ph-arrow-circle-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m46-90a6 6 0 0 1-6 6h-65.51l21.75 21.76a6 6 0 1 1-8.48 8.48l-32-32a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 8.48L102.49 122H168a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhArrowCircleLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleLeftThinIcon],svg[ph-arrow-circle-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m44-92a4 4 0 0 1-4 4H97.66l25.17 25.17a4 4 0 0 1-5.66 5.66l-32-32a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 5.66L97.66 124H168a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhArrowCircleLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleRightIcon],svg[ph-arrow-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m45.66-93.66a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L148.69 136H88a8 8 0 0 1 0-16h60.69l-18.35-18.34a8 8 0 0 1 11.32-11.32Z"></svg:path>`,
})
export class PhArrowCircleRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleRightBoldIcon],svg[ph-arrow-circle-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m48.49-92.49a12 12 0 0 1 0 17l-32 32a12 12 0 1 1-17-17L139 140H88a12 12 0 0 1 0-24h51l-11.52-11.51a12 12 0 1 1 17-17Z"></svg:path>`,
})
export class PhArrowCircleRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleRightDuotoneIcon],svg[ph-arrow-circle-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m45.66-93.66a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L148.69 136H88a8 8 0 0 1 0-16h60.69l-18.35-18.34a8 8 0 0 1 11.32-11.32Z"></svg:path></svg:g>`,
})
export class PhArrowCircleRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleRightFillIcon],svg[ph-arrow-circle-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m45.66 109.66l-32 32a8 8 0 0 1-11.32-11.32L148.69 136H88a8 8 0 0 1 0-16h60.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowCircleRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleRightLightIcon],svg[ph-arrow-circle-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m44.24-94.24a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48L153.51 134H88a6 6 0 0 1 0-12h65.51l-21.75-21.76a6 6 0 0 1 8.48-8.48Z"></svg:path>`,
})
export class PhArrowCircleRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleRightThinIcon],svg[ph-arrow-circle-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m42.83-94.83a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66-5.66L158.34 132H88a4 4 0 0 1 0-8h70.34l-25.17-25.17a4 4 0 0 1 5.66-5.66Z"></svg:path>`,
})
export class PhArrowCircleRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpIcon],svg[ph-arrow-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m37.66-101.66a8 8 0 0 1-11.32 11.32L136 107.31V168a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0Z"></svg:path>`,
})
export class PhArrowCircleUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpBoldIcon],svg[ph-arrow-circle-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m40.49-100.49a12 12 0 0 1-17 17L140 117v51a12 12 0 0 1-24 0v-51l-11.51 11.52a12 12 0 0 1-17-17l32-32a12 12 0 0 1 17 0Z"></svg:path>`,
})
export class PhArrowCircleUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpDuotoneIcon],svg[ph-arrow-circle-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m37.66-101.66a8 8 0 0 1-11.32 11.32L136 107.31V168a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0Z"></svg:path></svg:g>`,
})
export class PhArrowCircleUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpFillIcon],svg[ph-arrow-circle-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m37.66 101.66a8 8 0 0 1-11.32 0L136 107.31V168a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowCircleUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpLeftIcon],svg[ph-arrow-circle-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m37.66-61.66a8 8 0 0 1-11.32 11.32L104 115.31V144a8 8 0 0 1-16 0V96a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-28.69Z"></svg:path>`,
})
export class PhArrowCircleUpLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpLeftBoldIcon],svg[ph-arrow-circle-up-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m40.49-60.49a12 12 0 0 1-17 17L108 125v19a12 12 0 0 1-24 0V96a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-19Z"></svg:path>`,
})
export class PhArrowCircleUpLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpLeftDuotoneIcon],svg[ph-arrow-circle-up-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m37.66-61.66a8 8 0 0 1-11.32 11.32L104 115.31V144a8 8 0 0 1-16 0V96a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-28.69Z"></svg:path></svg:g>`,
})
export class PhArrowCircleUpLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpLeftFillIcon],svg[ph-arrow-circle-up-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m37.66 141.66a8 8 0 0 1-11.32 0L104 115.31V144a8 8 0 0 1-16 0V96a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-28.69l50.35 50.34a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowCircleUpLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpLeftLightIcon],svg[ph-arrow-circle-up-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m36.24-62.24a6 6 0 1 1-8.48 8.48L102 110.49V144a6 6 0 0 1-12 0V96a6 6 0 0 1 6-6h48a6 6 0 0 1 0 12h-33.51Z"></svg:path>`,
})
export class PhArrowCircleUpLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpLeftThinIcon],svg[ph-arrow-circle-up-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m34.83-62.83a4 4 0 0 1-5.66 5.66L100 105.66V144a4 4 0 0 1-8 0V96a4 4 0 0 1 4-4h48a4 4 0 0 1 0 8h-38.34Z"></svg:path>`,
})
export class PhArrowCircleUpLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpLightIcon],svg[ph-arrow-circle-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m36.24-102.24a6 6 0 1 1-8.48 8.48L134 102.49V168a6 6 0 0 1-12 0v-65.51l-21.76 21.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0Z"></svg:path>`,
})
export class PhArrowCircleUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpRightIcon],svg[ph-arrow-circle-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 96v48a8 8 0 0 1-16 0v-28.69l-50.34 50.35a8 8 0 0 1-11.32-11.32L140.69 104H112a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m64 32A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></svg:path>`,
})
export class PhArrowCircleUpRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpRightBoldIcon],svg[ph-arrow-circle-up-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m44-116v48a12 12 0 0 1-24 0v-19l-43.51 43.52a12 12 0 0 1-17-17L131 108h-19a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhArrowCircleUpRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpRightDuotoneIcon],svg[ph-arrow-circle-up-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m40-120v48a8 8 0 0 1-16 0v-28.69l-50.34 50.35a8 8 0 0 1-11.32-11.32L140.69 104H112a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhArrowCircleUpRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpRightFillIcon],svg[ph-arrow-circle-up-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 120a8 8 0 0 1-16 0v-28.69l-50.34 50.35a8 8 0 0 1-11.32-11.32L140.69 104H112a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhArrowCircleUpRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpRightLightIcon],svg[ph-arrow-circle-up-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m38-122v48a6 6 0 0 1-12 0v-33.51l-53.76 53.75a6 6 0 0 1-8.48-8.48L145.51 102H112a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhArrowCircleUpRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpRightThinIcon],svg[ph-arrow-circle-up-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m36-124v48a4 4 0 0 1-8 0v-38.34l-57.17 57.17a4 4 0 0 1-5.66-5.66L150.34 100H112a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhArrowCircleUpRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpThinIcon],svg[ph-arrow-circle-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m34.83-102.83a4 4 0 0 1-5.66 5.66L132 97.66V168a4 4 0 0 1-8 0V97.66l-25.17 25.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0Z"></svg:path>`,
})
export class PhArrowCircleUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowClockwiseIcon],svg[ph-arrow-clockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 56v48a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h27.4l-26.59-24.36l-.25-.24a80 80 0 1 0-1.67 114.78a8 8 0 0 1 11 11.63A95.44 95.44 0 0 1 128 224h-1.32a96 96 0 1 1 69.07-164L224 85.8V56a8 8 0 1 1 16 0"></svg:path>`,
})
export class PhArrowClockwiseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowClockwiseBoldIcon],svg[ph-arrow-clockwise-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 56v48a12 12 0 0 1-12 12h-48a12 12 0 1 1 0-24h17.1l-19-17.38c-.13-.12-.26-.24-.38-.37A76 76 0 1 0 127 204h1a75.53 75.53 0 0 0 52.15-20.72a12 12 0 0 1 16.49 17.45A99.45 99.45 0 0 1 128 228h-1.37a100 100 0 1 1 71.88-170.94L220 76.72V56a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhArrowClockwiseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowClockwiseDuotoneIcon],svg[ph-arrow-clockwise-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88" opacity=".2"></svg:path><svg:path d="M240 56v48a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h27.4l-26.59-24.36l-.25-.24a80 80 0 1 0-1.67 114.78a8 8 0 0 1 11 11.63A95.44 95.44 0 0 1 128 224h-1.32a96 96 0 1 1 69.07-164L224 85.8V56a8 8 0 1 1 16 0"></svg:path></svg:g>`,
})
export class PhArrowClockwiseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowClockwiseFillIcon],svg[ph-arrow-clockwise-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 56v48a8 8 0 0 1-8 8h-48a8 8 0 0 1-5.66-13.66l17-17l-10.55-9.65l-.25-.24a80 80 0 1 0-1.67 114.78a8 8 0 1 1 11 11.63A95.44 95.44 0 0 1 128 224h-1.32a96 96 0 1 1 69.07-164l10.93 10l19.66-19.7A8 8 0 0 1 240 56"></svg:path>`,
})
export class PhArrowClockwiseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowClockwiseLightIcon],svg[ph-arrow-clockwise-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 56v48a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h32.55l-30.38-27.8c-.06-.06-.12-.13-.19-.19a82 82 0 1 0-1.7 117.65a6 6 0 0 1 8.24 8.73A93.46 93.46 0 0 1 128 222h-1.28a94 94 0 1 1 67.65-160.6L226 90.35V56a6 6 0 1 1 12 0"></svg:path>`,
})
export class PhArrowClockwiseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowClockwiseThinIcon],svg[ph-arrow-clockwise-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 56v48a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h37.7l-34.17-31.31l-.13-.12a84 84 0 1 0-1.75 120.51a4 4 0 0 1 5.5 5.82A91.43 91.43 0 0 1 128 220h-1.26A92 92 0 1 1 193 62.84l35 32.05V56a4 4 0 1 1 8 0"></svg:path>`,
})
export class PhArrowClockwiseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCounterClockwiseIcon],svg[ph-arrow-counter-clockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a96 96 0 0 1-94.71 96H128a95.38 95.38 0 0 1-65.9-26.2a8 8 0 0 1 11-11.63a80 80 0 1 0-1.67-114.78a3 3 0 0 1-.26.25L44.59 96H72a8 8 0 0 1 0 16H24a8 8 0 0 1-8-8V56a8 8 0 0 1 16 0v29.8L60.25 60A96 96 0 0 1 224 128"></svg:path>`,
})
export class PhArrowCounterClockwiseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCounterClockwiseBoldIcon],svg[ph-arrow-counter-clockwise-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a100 100 0 0 1-98.66 100H128a99.4 99.4 0 0 1-68.62-27.29a12 12 0 0 1 16.48-17.45a76 76 0 1 0-1.57-109c-.13.13-.25.25-.39.37L54.89 92H72a12 12 0 0 1 0 24H24a12 12 0 0 1-12-12V56a12 12 0 0 1 24 0v20.72l21.48-19.66A100 100 0 0 1 228 128"></svg:path>`,
})
export class PhArrowCounterClockwiseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCounterClockwiseDuotoneIcon],svg[ph-arrow-counter-clockwise-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88" opacity=".2"></svg:path><svg:path d="M224 128a96 96 0 0 1-94.71 96H128a95.38 95.38 0 0 1-65.9-26.2a8 8 0 0 1 11-11.63a80 80 0 1 0-1.67-114.78a3 3 0 0 1-.26.25L44.59 96H72a8 8 0 0 1 0 16H24a8 8 0 0 1-8-8V56a8 8 0 0 1 16 0v29.8L60.25 60A96 96 0 0 1 224 128"></svg:path></svg:g>`,
})
export class PhArrowCounterClockwiseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCounterClockwiseFillIcon],svg[ph-arrow-counter-clockwise-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a96 96 0 0 1-94.71 96H128a95.38 95.38 0 0 1-65.9-26.2a8 8 0 0 1 11-11.63a80 80 0 1 0-1.67-114.78a3 3 0 0 1-.26.25l-10.54 9.65l17 17A8 8 0 0 1 72 112H24a8 8 0 0 1-8-8V56a8 8 0 0 1 13.66-5.7L49.31 70l10.94-10A96 96 0 0 1 224 128"></svg:path>`,
})
export class PhArrowCounterClockwiseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCounterClockwiseLightIcon],svg[ph-arrow-counter-clockwise-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a94 94 0 0 1-92.74 94H128a93.43 93.43 0 0 1-64.5-25.65a6 6 0 1 1 8.24-8.72A82 82 0 1 0 70 70l-.19.19L39.44 98H72a6 6 0 0 1 0 12H24a6 6 0 0 1-6-6V56a6 6 0 0 1 12 0v34.34L61.63 61.4A94 94 0 0 1 222 128"></svg:path>`,
})
export class PhArrowCounterClockwiseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowCounterClockwiseThinIcon],svg[ph-arrow-counter-clockwise-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a92 92 0 0 1-90.77 92H128a91.47 91.47 0 0 1-63.13-25.1a4 4 0 1 1 5.5-5.82A84 84 0 1 0 68.6 68.57l-.13.12L34.3 100H72a4 4 0 0 1 0 8H24a4 4 0 0 1-4-4V56a4 4 0 0 1 8 0v38.89l35-32A92 92 0 0 1 220 128"></svg:path>`,
})
export class PhArrowCounterClockwiseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowDownIcon],svg[ph-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m205.66 149.66l-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhArrowDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowDownBoldIcon],svg[ph-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m208.49 152.49l-72 72a12 12 0 0 1-17 0l-72-72a12 12 0 0 1 17-17L116 187V40a12 12 0 0 1 24 0v147l51.51-51.52a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhArrowDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowDownDuotoneIcon],svg[ph-arrow-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m200 144l-72 72l-72-72Z" opacity=".2"></svg:path><svg:path d="M207.39 140.94A8 8 0 0 0 200 136h-64V40a8 8 0 0 0-16 0v96H56a8 8 0 0 0-5.66 13.66l72 72a8 8 0 0 0 11.32 0l72-72a8 8 0 0 0 1.73-8.72M128 204.69L75.31 152h105.38Z"></svg:path></svg:g>`,
})
export class PhArrowDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowDownFillIcon],svg[ph-arrow-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m205.66 149.66l-72 72a8 8 0 0 1-11.32 0l-72-72A8 8 0 0 1 56 136h64V40a8 8 0 0 1 16 0v96h64a8 8 0 0 1 5.66 13.66"></svg:path>`,
})
export class PhArrowDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowDownLeftIcon],svg[ph-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M197.66 69.66L83.31 184H168a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8V88a8 8 0 0 1 16 0v84.69L186.34 58.34a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhArrowDownLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowDownLeftBoldIcon],svg[ph-arrow-down-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.49 72.48L93 180h75a12 12 0 0 1 0 24H64a12 12 0 0 1-12-12V88a12 12 0 0 1 24 0v75L183.51 55.51a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhArrowDownLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowDownLeftDuotoneIcon],svg[ph-arrow-down-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 192H64V88Z" opacity=".2"></svg:path><svg:path d="M197.66 58.34a8 8 0 0 0-11.32 0L116 128.69L69.66 82.34A8 8 0 0 0 56 88v104a8 8 0 0 0 8 8h104a8 8 0 0 0 5.66-13.66L127.31 140l70.35-70.34a8 8 0 0 0 0-11.32M72 184v-76.69l38.34 38.34L148.69 184Z"></svg:path></svg:g>`,
})
export class PhArrowDownLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowDownLeftFillIcon],svg[ph-arrow-down-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M197.66 69.66L127.31 140l46.35 46.34A8 8 0 0 1 168 200H64a8 8 0 0 1-8-8V88a8 8 0 0 1 13.66-5.66L116 128.69l70.34-70.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhArrowDownLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowDownLeftLightIcon],svg[ph-arrow-down-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.24 68.24L78.48 186H168a6 6 0 0 1 0 12H64a6 6 0 0 1-6-6V88a6 6 0 0 1 12 0v89.52L187.76 59.76a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhArrowDownLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowDownLeftThinIcon],svg[ph-arrow-down-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M194.83 66.83L73.66 188H168a4 4 0 0 1 0 8H64a4 4 0 0 1-4-4V88a4 4 0 0 1 8 0v94.34L189.17 61.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhArrowDownLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowDownLightIcon],svg[ph-arrow-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m204.24 148.24l-72 72a6 6 0 0 1-8.48 0l-72-72a6 6 0 0 1 8.48-8.48L122 201.51V40a6 6 0 0 1 12 0v161.51l61.76-61.75a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhArrowDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowDownRightIcon],svg[ph-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 88v104a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h84.69L58.34 69.66a8 8 0 0 1 11.32-11.32L184 172.69V88a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhArrowDownRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowDownRightBoldIcon],svg[ph-arrow-down-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 88v104a12 12 0 0 1-12 12H88a12 12 0 0 1 0-24h75L55.51 72.48a12 12 0 0 1 17-17L180 163V88a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhArrowDownRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowDownRightDuotoneIcon],svg[ph-arrow-down-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 88v104H88Z" opacity=".2"></svg:path><svg:path d="M195.06 80.61a8 8 0 0 0-8.72 1.73L140 128.69L69.66 58.34a8 8 0 0 0-11.32 11.32L128.69 140l-46.35 46.34A8 8 0 0 0 88 200h104a8 8 0 0 0 8-8V88a8 8 0 0 0-4.94-7.39M184 184h-76.69l38.34-38.34L184 107.31Z"></svg:path></svg:g>`,
})
export class PhArrowDownRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowDownRightFillIcon],svg[ph-arrow-down-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 88v104a8 8 0 0 1-8 8H88a8 8 0 0 1-5.66-13.66L128.69 140L58.34 69.66a8 8 0 0 1 11.32-11.32L140 128.69l46.34-46.35A8 8 0 0 1 200 88"></svg:path>`,
})
export class PhArrowDownRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowDownRightLightIcon],svg[ph-arrow-down-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 88v104a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h89.52L59.76 68.24a6 6 0 0 1 8.48-8.48L186 177.52V88a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhArrowDownRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowDownRightThinIcon],svg[ph-arrow-down-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 88v104a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h94.34L61.17 66.83a4 4 0 0 1 5.66-5.66L188 182.34V88a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhArrowDownRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowDownThinIcon],svg[ph-arrow-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m202.83 146.83l-72 72a4 4 0 0 1-5.66 0l-72-72a4 4 0 0 1 5.66-5.66L124 206.34V40a4 4 0 0 1 8 0v166.34l65.17-65.17a4 4 0 0 1 5.66 5.66"></svg:path>`,
})
export class PhArrowDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowDownLeftIcon],svg[ph-arrow-elbow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhArrowElbowDownLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowDownLeftBoldIcon],svg[ph-arrow-elbow-down-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 32v144a12 12 0 0 1-12 12H77l27.52 27.51a12 12 0 0 1-17 17l-48-48a12 12 0 0 1 0-17l48-48a12 12 0 1 1 17 17L77 164h103V32a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhArrowElbowDownLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowDownLeftDuotoneIcon],svg[ph-arrow-elbow-down-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M96 128v96l-48-48Z" opacity=".2"></svg:path><svg:path d="M192 24a8 8 0 0 0-8 8v136h-80v-40a8 8 0 0 0-13.66-5.66l-48 48a8 8 0 0 0 0 11.32l48 48A8 8 0 0 0 104 224v-40h88a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8M88 204.69L59.31 176L88 147.31Z"></svg:path></svg:g>`,
})
export class PhArrowElbowDownLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowDownLeftFillIcon],svg[ph-arrow-elbow-down-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 32v144a8 8 0 0 1-8 8h-88v40a8 8 0 0 1-13.66 5.66l-48-48a8 8 0 0 1 0-11.32l48-48A8 8 0 0 1 104 128v40h80V32a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhArrowElbowDownLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowDownLeftLightIcon],svg[ph-arrow-elbow-down-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 32v144a6 6 0 0 1-6 6H62.49l37.75 37.76a6 6 0 1 1-8.48 8.48l-48-48a6 6 0 0 1 0-8.48l48-48a6 6 0 1 1 8.48 8.48L62.49 170H186V32a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhArrowElbowDownLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowDownLeftThinIcon],svg[ph-arrow-elbow-down-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 32v144a4 4 0 0 1-4 4H57.66l41.17 41.17a4 4 0 0 1-5.66 5.66l-48-48a4 4 0 0 1 0-5.66l48-48a4 4 0 1 1 5.66 5.66L57.66 172H188V32a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhArrowElbowDownLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowDownRightIcon],svg[ph-arrow-elbow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.66 181.66l-48 48a8 8 0 0 1-11.32-11.32L196.69 184H72a8 8 0 0 1-8-8V32a8 8 0 0 1 16 0v136h116.69l-34.35-34.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowElbowDownRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowDownRightBoldIcon],svg[ph-arrow-elbow-down-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.49 184.49l-48 48a12 12 0 0 1-17-17L187 188H72a12 12 0 0 1-12-12V32a12 12 0 0 1 24 0v132h103l-27.52-27.51a12 12 0 1 1 17-17l48 48a12 12 0 0 1 .01 17"></svg:path>`,
})
export class PhArrowElbowDownRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowDownRightDuotoneIcon],svg[ph-arrow-elbow-down-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m216 176l-48 48v-96Z" opacity=".2"></svg:path><svg:path d="m221.66 170.34l-48-48A8 8 0 0 0 160 128v40H80V32a8 8 0 0 0-16 0v144a8 8 0 0 0 8 8h88v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32M176 204.69v-57.38L204.69 176Z"></svg:path></svg:g>`,
})
export class PhArrowElbowDownRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowDownRightFillIcon],svg[ph-arrow-elbow-down-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.66 181.66l-48 48A8 8 0 0 1 160 224v-40H72a8 8 0 0 1-8-8V32a8 8 0 0 1 16 0v136h80v-40a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowElbowDownRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowDownRightLightIcon],svg[ph-arrow-elbow-down-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.24 180.24l-48 48a6 6 0 0 1-8.48-8.48L201.51 182H72a6 6 0 0 1-6-6V32a6 6 0 0 1 12 0v138h123.51l-37.75-37.76a6 6 0 1 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhArrowElbowDownRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowDownRightThinIcon],svg[ph-arrow-elbow-down-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m218.83 178.83l-48 48a4 4 0 0 1-5.66-5.66L206.34 180H72a4 4 0 0 1-4-4V32a4 4 0 0 1 8 0v140h130.34l-41.17-41.17a4 4 0 1 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhArrowElbowDownRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftIcon],svg[ph-arrow-elbow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.66 101.66l-96 96a8 8 0 0 1-11.32 0L32 99.31V152a8 8 0 0 1-16 0V80a8 8 0 0 1 8-8h72a8 8 0 0 1 0 16H43.31L136 180.69l90.34-90.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhArrowElbowLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftBoldIcon],svg[ph-arrow-elbow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.49 104.49l-96 96a12 12 0 0 1-17 0L36 109v43a12 12 0 0 1-24 0V80a12 12 0 0 1 12-12h72a12 12 0 0 1 0 24H53l83 83l87.51-87.52a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhArrowElbowLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftDownIcon],svg[ph-arrow-elbow-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 72a8 8 0 0 1-8 8H96v116.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L80 196.69V72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhArrowElbowLeftDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftDownBoldIcon],svg[ph-arrow-elbow-left-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 72a12 12 0 0 1-12 12H100v103l27.51-27.52a12 12 0 0 1 17 17l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 1 1 17-17L76 187V72a12 12 0 0 1 12-12h144a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhArrowElbowLeftDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftDownDuotoneIcon],svg[ph-arrow-elbow-left-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m136 168l-48 48l-48-48Z" opacity=".2"></svg:path><svg:path d="M232 64H88a8 8 0 0 0-8 8v88H40a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 136 160H96V80h136a8 8 0 0 0 0-16M88 204.69L59.31 176h57.38Z"></svg:path></svg:g>`,
})
export class PhArrowElbowLeftDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftDownFillIcon],svg[ph-arrow-elbow-left-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 72a8 8 0 0 1-8 8H96v80h40a8 8 0 0 1 5.66 13.66l-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 40 160h40V72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhArrowElbowLeftDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftDownLightIcon],svg[ph-arrow-elbow-left-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 72a6 6 0 0 1-6 6H94v123.51l37.76-37.75a6 6 0 0 1 8.48 8.48l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L82 201.51V72a6 6 0 0 1 6-6h144a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhArrowElbowLeftDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftDownThinIcon],svg[ph-arrow-elbow-left-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 72a4 4 0 0 1-4 4H92v130.34l41.17-41.17a4 4 0 0 1 5.66 5.66l-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 0 1 5.66-5.66L84 206.34V72a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhArrowElbowLeftDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftDuotoneIcon],svg[ph-arrow-elbow-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m96 80l-72 72V80Z" opacity=".2"></svg:path><svg:path d="M237.66 90.34a8 8 0 0 0-11.32 0L136 180.69L71.31 116l30.35-30.34A8 8 0 0 0 96 72H24a8 8 0 0 0-8 8v72a8 8 0 0 0 13.66 5.66L60 127.31l70.34 70.35a8 8 0 0 0 11.32 0l96-96a8 8 0 0 0 0-11.32M32 132.69V88h44.69Z"></svg:path></svg:g>`,
})
export class PhArrowElbowLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftFillIcon],svg[ph-arrow-elbow-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.66 101.66l-96 96a8 8 0 0 1-11.32 0L60 127.31l-30.34 30.35A8 8 0 0 1 16 152V80a8 8 0 0 1 8-8h72a8 8 0 0 1 5.66 13.66L71.31 116L136 180.69l90.34-90.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhArrowElbowLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftLightIcon],svg[ph-arrow-elbow-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.24 100.24l-96 96a6 6 0 0 1-8.48 0L30 94.48V152a6 6 0 0 1-12 0V80a6 6 0 0 1 6-6h72a6 6 0 0 1 0 12H38.48L136 183.51l91.76-91.75a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhArrowElbowLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftThinIcon],svg[ph-arrow-elbow-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.83 98.83l-96 96a4 4 0 0 1-5.66 0L28 89.66V152a4 4 0 0 1-8 0V80a4 4 0 0 1 4-4h72a4 4 0 0 1 0 8H33.66L136 186.34l93.17-93.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhArrowElbowLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftUpIcon],svg[ph-arrow-elbow-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 192a8 8 0 0 1-8 8H88a8 8 0 0 1-8-8V67.31l-34.34 34.35a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1-11.32 11.32L96 67.31V184h136a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhArrowElbowLeftUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftUpBoldIcon],svg[ph-arrow-elbow-left-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 192a12 12 0 0 1-12 12H88a12 12 0 0 1-12-12V77l-27.51 27.49a12 12 0 0 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1-17 17L100 77v103h132a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhArrowElbowLeftUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftUpDuotoneIcon],svg[ph-arrow-elbow-left-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M136 96H40l48-48Z" opacity=".2"></svg:path><svg:path d="M232 184H96v-80h40a8 8 0 0 0 5.66-13.66l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 40 104h40v88a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16M88 59.31L116.69 88H59.31Z"></svg:path></svg:g>`,
})
export class PhArrowElbowLeftUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftUpFillIcon],svg[ph-arrow-elbow-left-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 192a8 8 0 0 1-8 8H88a8 8 0 0 1-8-8v-88H40a8 8 0 0 1-5.66-13.66l48-48a8 8 0 0 1 11.32 0l48 48A8 8 0 0 1 136 104H96v80h136a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhArrowElbowLeftUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftUpLightIcon],svg[ph-arrow-elbow-left-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 192a6 6 0 0 1-6 6H88a6 6 0 0 1-6-6V62.49l-37.76 37.75a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 1 1-8.48 8.48L94 62.49V186h138a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhArrowElbowLeftUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftUpThinIcon],svg[ph-arrow-elbow-left-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 192a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4V57.66L42.83 98.83a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1-5.66 5.66L92 57.66V188h140a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhArrowElbowLeftUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightIcon],svg[ph-arrow-elbow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 80v72a8 8 0 0 1-16 0V99.31l-98.34 98.35a8 8 0 0 1-11.32 0l-96-96a8 8 0 0 1 11.32-11.32L120 180.69L212.69 88H160a8 8 0 0 1 0-16h72a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhArrowElbowRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightBoldIcon],svg[ph-arrow-elbow-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 80v72a12 12 0 0 1-24 0v-43l-91.51 91.52a12 12 0 0 1-17 0l-96-96a12 12 0 0 1 17-17L120 175l83-83h-43a12 12 0 0 1 0-24h72a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhArrowElbowRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightDownIcon],svg[ph-arrow-elbow-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 165.66l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L168 188.69V72H32a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8v124.69l34.34-34.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhArrowElbowRightDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightDownBoldIcon],svg[ph-arrow-elbow-right-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 168.49l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 1 1 17-17L164 179V76H32a12 12 0 0 1 0-24h144a12 12 0 0 1 12 12v115l27.51-27.52a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhArrowElbowRightDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightDownDuotoneIcon],svg[ph-arrow-elbow-right-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 160l-48 48l-48-48Z" opacity=".2"></svg:path><svg:path d="M231.39 156.94A8 8 0 0 0 224 152h-40V64a8 8 0 0 0-8-8H32a8 8 0 0 0 0 16h136v80h-40a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48a8 8 0 0 0 1.73-8.72M176 196.69L147.31 168h57.38Z"></svg:path></svg:g>`,
})
export class PhArrowElbowRightDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightDownFillIcon],svg[ph-arrow-elbow-right-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 165.66l-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 128 152h40V72H32a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8v88h40a8 8 0 0 1 5.66 13.66"></svg:path>`,
})
export class PhArrowElbowRightDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightDownLightIcon],svg[ph-arrow-elbow-right-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 164.24l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 1 1 8.48-8.48L170 193.51V70H32a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6v129.51l37.76-37.75a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhArrowElbowRightDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightDownThinIcon],svg[ph-arrow-elbow-right-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 162.83l-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 1 1 5.66-5.66L172 198.34V68H32a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4v134.34l41.17-41.17a4 4 0 0 1 5.66 5.66"></svg:path>`,
})
export class PhArrowElbowRightDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightDuotoneIcon],svg[ph-arrow-elbow-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 80v72l-72-72Z" opacity=".2"></svg:path><svg:path d="M232 72h-72a8 8 0 0 0-5.66 13.66L184.69 116L120 180.69L29.66 90.34a8 8 0 0 0-11.32 11.32l96 96a8 8 0 0 0 11.32 0L196 127.31l30.34 30.35A8 8 0 0 0 240 152V80a8 8 0 0 0-8-8m-8 60.69L179.31 88H224Z"></svg:path></svg:g>`,
})
export class PhArrowElbowRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightFillIcon],svg[ph-arrow-elbow-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 80v72a8 8 0 0 1-13.66 5.66L196 127.31l-70.34 70.35a8 8 0 0 1-11.32 0l-96-96a8 8 0 0 1 11.32-11.32L120 180.69L184.69 116l-30.35-30.34A8 8 0 0 1 160 72h72a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhArrowElbowRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightLightIcon],svg[ph-arrow-elbow-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 80v72a6 6 0 0 1-12 0V94.48L124.24 196.24a6 6 0 0 1-8.48 0l-96-96a6 6 0 0 1 8.48-8.48L120 183.51L217.52 86H160a6 6 0 0 1 0-12h72a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhArrowElbowRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightThinIcon],svg[ph-arrow-elbow-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 80v72a4 4 0 0 1-8 0V89.66L122.83 194.83a4 4 0 0 1-5.66 0l-96-96a4 4 0 0 1 5.66-5.66L120 186.34L222.34 84H160a4 4 0 0 1 0-8h72a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhArrowElbowRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightUpIcon],svg[ph-arrow-elbow-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.66 101.66a8 8 0 0 1-11.32 0L176 67.31V192a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h136V67.31l-34.34 34.35a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowElbowRightUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightUpBoldIcon],svg[ph-arrow-elbow-right-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.49 104.49a12 12 0 0 1-17 0L180 77v115a12 12 0 0 1-12 12H24a12 12 0 0 1 0-24h132V77l-27.51 27.52a12 12 0 1 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1 0 16.97"></svg:path>`,
})
export class PhArrowElbowRightUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightUpDuotoneIcon],svg[ph-arrow-elbow-right-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96h-96l48-48Z" opacity=".2"></svg:path><svg:path d="m221.66 90.34l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 120 104h40v80H24a8 8 0 0 0 0 16h144a8 8 0 0 0 8-8v-88h40a8 8 0 0 0 5.66-13.66M139.31 88L168 59.31L196.69 88Z"></svg:path></svg:g>`,
})
export class PhArrowElbowRightUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightUpFillIcon],svg[ph-arrow-elbow-right-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.39 99.06A8 8 0 0 1 216 104h-40v88a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h136v-80h-40a8 8 0 0 1-5.66-13.66l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1 1.73 8.72"></svg:path>`,
})
export class PhArrowElbowRightUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightUpLightIcon],svg[ph-arrow-elbow-right-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.24 100.24a6 6 0 0 1-8.48 0L174 62.49V192a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h138V62.49l-37.76 37.75a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhArrowElbowRightUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightUpThinIcon],svg[ph-arrow-elbow-right-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.83 98.83a4 4 0 0 1-5.66 0L172 57.66V192a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h140V57.66l-41.17 41.17a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhArrowElbowRightUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowUpLeftIcon],svg[ph-arrow-elbow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 80v144a8 8 0 0 1-16 0V88H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48l-.06-.07c-.16-.16-.32-.34-.47-.52l-.23-.31a4 4 0 0 1-.23-.32l-.23-.37a3 3 0 0 1-.17-.3c-.07-.12-.13-.25-.19-.38s-.1-.21-.15-.33s-.09-.25-.14-.37l-.13-.36l-.09-.39c0-.13-.07-.25-.1-.37s0-.31-.06-.46s0-.21-.05-.32a8.3 8.3 0 0 1 0-1.58c0-.11 0-.21.05-.32s0-.31.06-.46s.06-.24.1-.37l.09-.39l.13-.36c.05-.12.09-.25.14-.37s.1-.22.15-.33s.12-.26.19-.38a3 3 0 0 1 .17-.3l.23-.37a4 4 0 0 1 .23-.32l.23-.31c.15-.18.31-.36.47-.52l.06-.07l48-48a8 8 0 0 1 11.32 11.32L67.31 72H192a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhArrowElbowUpLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowUpLeftBoldIcon],svg[ph-arrow-elbow-up-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 80v144a12 12 0 0 1-24 0V92H77l27.52 27.51a12 12 0 0 1-17 17l-48-48a12 12 0 0 1 0-17l48-48a12 12 0 1 1 17 17L77 68h115a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhArrowElbowUpLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowUpLeftDuotoneIcon],svg[ph-arrow-elbow-up-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M96 32v96L48 80Z" opacity=".2"></svg:path><svg:path d="M192 72h-88V32a8 8 0 0 0-13.66-5.66l-48 48a8 8 0 0 0 0 11.32l48 48A8 8 0 0 0 104 128V88h80v136a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8M88 108.69L59.31 80L88 51.31Z"></svg:path></svg:g>`,
})
export class PhArrowElbowUpLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowUpLeftFillIcon],svg[ph-arrow-elbow-up-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 80v144a8 8 0 0 1-16 0V88h-80v40a8 8 0 0 1-13.66 5.66l-48-48a8 8 0 0 1 0-11.32l48-48A8 8 0 0 1 104 32v40h88a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhArrowElbowUpLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowUpLeftLightIcon],svg[ph-arrow-elbow-up-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 80v144a6 6 0 0 1-12 0V86H62.49l37.75 37.76a6 6 0 1 1-8.48 8.48l-48-48a6 6 0 0 1 0-8.48l48-48a6 6 0 1 1 8.48 8.48L62.49 74H192a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhArrowElbowUpLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowUpLeftThinIcon],svg[ph-arrow-elbow-up-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 80v144a4 4 0 0 1-8 0V84H57.66l41.17 41.17a4 4 0 0 1-5.66 5.66l-48-48a4 4 0 0 1 0-5.66l48-48a4 4 0 0 1 5.66 5.66L57.66 76H192a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhArrowElbowUpLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowUpRightIcon],svg[ph-arrow-elbow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.66 85.66l-48 48a8 8 0 0 1-11.32-11.32L196.69 88H80v136a8 8 0 0 1-16 0V80a8 8 0 0 1 8-8h124.69l-34.35-34.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowElbowUpRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowUpRightBoldIcon],svg[ph-arrow-elbow-up-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.49 88.49l-48 48a12 12 0 0 1-17-17L187 92H84v132a12 12 0 0 1-24 0V80a12 12 0 0 1 12-12h115l-27.49-27.51a12 12 0 1 1 17-17l48 48a12 12 0 0 1-.02 17"></svg:path>`,
})
export class PhArrowElbowUpRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowUpRightDuotoneIcon],svg[ph-arrow-elbow-up-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m216 80l-48 48V32Z" opacity=".2"></svg:path><svg:path d="m221.66 74.34l-48-48A8 8 0 0 0 160 32v40H72a8 8 0 0 0-8 8v144a8 8 0 0 0 16 0V88h80v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32M176 108.69V51.31L204.69 80Z"></svg:path></svg:g>`,
})
export class PhArrowElbowUpRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowUpRightFillIcon],svg[ph-arrow-elbow-up-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.66 85.66l-48 48A8 8 0 0 1 160 128V88H80v136a8 8 0 0 1-16 0V80a8 8 0 0 1 8-8h88V32a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowElbowUpRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowUpRightLightIcon],svg[ph-arrow-elbow-up-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.24 84.24l-48 48a6 6 0 0 1-8.48-8.48L201.51 86H78v138a6 6 0 0 1-12 0V80a6 6 0 0 1 6-6h129.51l-37.75-37.76a6 6 0 0 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhArrowElbowUpRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowUpRightThinIcon],svg[ph-arrow-elbow-up-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m218.83 82.83l-48 48a4 4 0 0 1-5.66-5.66L206.34 84H76v140a4 4 0 0 1-8 0V80a4 4 0 0 1 4-4h134.34l-41.17-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhArrowElbowUpRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatDownIcon],svg[ph-arrow-fat-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.39 132.94A8 8 0 0 0 224 128h-40V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v80H32a8 8 0 0 0-5.66 13.66l96 96a8 8 0 0 0 11.32 0l96-96a8 8 0 0 0 1.73-8.72M128 220.69L51.31 144H80a8 8 0 0 0 8-8V48h80v88a8 8 0 0 0 8 8h28.69Z"></svg:path>`,
})
export class PhArrowFatDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatDownBoldIcon],svg[ph-arrow-fat-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.09 131.41A12 12 0 0 0 224 124h-36V48a20 20 0 0 0-20-20H88a20 20 0 0 0-20 20v76H32a12 12 0 0 0-8.48 20.49l96 96a12 12 0 0 0 17 0l96-96a12 12 0 0 0 2.57-13.08M128 215l-67-67h19a12 12 0 0 0 12-12V52h72v84a12 12 0 0 0 12 12h19Z"></svg:path>`,
})
export class PhArrowFatDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatDownDuotoneIcon],svg[ph-arrow-fat-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 136l-96 96l-96-96h48V48a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v88Z" opacity=".2"></svg:path><svg:path d="M231.39 132.94A8 8 0 0 0 224 128h-40V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v80H32a8 8 0 0 0-5.66 13.66l96 96a8 8 0 0 0 11.32 0l96-96a8 8 0 0 0 1.73-8.72M128 220.69L51.31 144H80a8 8 0 0 0 8-8V48h80v88a8 8 0 0 0 8 8h28.69Z"></svg:path></svg:g>`,
})
export class PhArrowFatDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatDownFillIcon],svg[ph-arrow-fat-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 141.66l-96 96a8 8 0 0 1-11.32 0l-96-96A8 8 0 0 1 32 128h40V48a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16v80h40a8 8 0 0 1 5.66 13.66"></svg:path>`,
})
export class PhArrowFatDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatDownLightIcon],svg[ph-arrow-fat-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.54 133.7A6 6 0 0 0 224 130h-42V48a14 14 0 0 0-14-14H88a14 14 0 0 0-14 14v82H32a6 6 0 0 0-4.24 10.24l96 96a6 6 0 0 0 8.48 0l96-96a6 6 0 0 0 1.3-6.54M128 223.51L46.49 142H80a6 6 0 0 0 6-6V48a2 2 0 0 1 2-2h80a2 2 0 0 1 2 2v88a6 6 0 0 0 6 6h33.51Z"></svg:path>`,
})
export class PhArrowFatDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatDownThinIcon],svg[ph-arrow-fat-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.7 134.47A4 4 0 0 0 224 132h-44V48a12 12 0 0 0-12-12H88a12 12 0 0 0-12 12v84H32a4 4 0 0 0-2.83 6.83l96 96a4 4 0 0 0 5.66 0l96-96a4 4 0 0 0 .87-4.36M128 226.34L41.66 140H80a4 4 0 0 0 4-4V48a4 4 0 0 1 4-4h80a4 4 0 0 1 4 4v88a4 4 0 0 0 4 4h38.34Z"></svg:path>`,
})
export class PhArrowFatDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLeftIcon],svg[ph-arrow-fat-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 72h-80V32a8 8 0 0 0-13.66-5.66l-96 96a8 8 0 0 0 0 11.32l96 96A8 8 0 0 0 128 224v-40h80a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m0 96h-88a8 8 0 0 0-8 8v28.69L35.31 128L112 51.31V80a8 8 0 0 0 8 8h88Z"></svg:path>`,
})
export class PhArrowFatLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLeftBoldIcon],svg[ph-arrow-fat-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 68h-76V32a12 12 0 0 0-20.49-8.48l-96 96a12 12 0 0 0 0 17l96 96A12 12 0 0 0 132 224v-36h76a20 20 0 0 0 20-20V88a20 20 0 0 0-20-20m-4 96h-84a12 12 0 0 0-12 12v19l-67-67l67-67v19a12 12 0 0 0 12 12h84Z"></svg:path>`,
})
export class PhArrowFatLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLeftDuotoneIcon],svg[ph-arrow-fat-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 88v80a8 8 0 0 1-8 8h-88v48l-96-96l96-96v48h88a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 72h-80V32a8 8 0 0 0-13.66-5.66l-96 96a8 8 0 0 0 0 11.32l96 96A8 8 0 0 0 128 224v-40h80a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m0 96h-88a8 8 0 0 0-8 8v28.69L35.31 128L112 51.31V80a8 8 0 0 0 8 8h88Z"></svg:path></svg:g>`,
})
export class PhArrowFatLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLeftFillIcon],svg[ph-arrow-fat-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 88v80a16 16 0 0 1-16 16h-80v40a8 8 0 0 1-13.66 5.66l-96-96a8 8 0 0 1 0-11.32l96-96A8 8 0 0 1 128 32v40h80a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhArrowFatLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLeftLightIcon],svg[ph-arrow-fat-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 74h-82V32a6 6 0 0 0-10.24-4.24l-96 96a6 6 0 0 0 0 8.48l96 96A6 6 0 0 0 126 224v-42h82a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14m2 94a2 2 0 0 1-2 2h-88a6 6 0 0 0-6 6v33.51L32.49 128L114 46.49V80a6 6 0 0 0 6 6h88a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhArrowFatLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLeftThinIcon],svg[ph-arrow-fat-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 76h-84V32a4 4 0 0 0-6.83-2.83l-96 96a4 4 0 0 0 0 5.66l96 96A4 4 0 0 0 124 224v-44h84a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12m4 92a4 4 0 0 1-4 4h-88a4 4 0 0 0-4 4v38.34L29.66 128L116 41.66V80a4 4 0 0 0 4 4h88a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhArrowFatLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineDownIcon],svg[ph-arrow-fat-line-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.39 132.94A8 8 0 0 0 224 128h-40V72a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v56H32a8 8 0 0 0-5.66 13.66l96 96a8 8 0 0 0 11.32 0l96-96a8 8 0 0 0 1.73-8.72M128 220.69L51.31 144H80a8 8 0 0 0 8-8V80h80v56a8 8 0 0 0 8 8h28.69ZM72 40a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhArrowFatLineDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineDownBoldIcon],svg[ph-arrow-fat-line-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.09 131.41A12 12 0 0 0 224 124h-36V80a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v44H32a12 12 0 0 0-8.48 20.49l96 96a12 12 0 0 0 17 0l96-96a12 12 0 0 0 2.57-13.08M128 215l-67-67h19a12 12 0 0 0 12-12V92h72v44a12 12 0 0 0 12 12h19ZM68 40a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhArrowFatLineDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineDownDuotoneIcon],svg[ph-arrow-fat-line-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 136l-96 96l-96-96h48V72h96v64Z" opacity=".2"></svg:path><svg:path d="M231.39 132.94A8 8 0 0 0 224 128h-40V72a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v56H32a8 8 0 0 0-5.66 13.66l96 96a8 8 0 0 0 11.32 0l96-96a8 8 0 0 0 1.73-8.72M128 220.69L51.31 144H80a8 8 0 0 0 8-8V80h80v56a8 8 0 0 0 8 8h28.69ZM72 40a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhArrowFatLineDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineDownFillIcon],svg[ph-arrow-fat-line-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 40a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m159.39 92.94A8 8 0 0 0 224 128h-40V72a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v56H32a8 8 0 0 0-5.66 13.66l96 96a8 8 0 0 0 11.32 0l96-96a8 8 0 0 0 1.73-8.72"></svg:path>`,
})
export class PhArrowFatLineDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineDownLightIcon],svg[ph-arrow-fat-line-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.54 133.7A6 6 0 0 0 224 130h-42V72a6 6 0 0 0-6-6H80a6 6 0 0 0-6 6v58H32a6 6 0 0 0-4.24 10.24l96 96a6 6 0 0 0 8.48 0l96-96a6 6 0 0 0 1.3-6.54M128 223.51L46.49 142H80a6 6 0 0 0 6-6V78h84v58a6 6 0 0 0 6 6h33.51ZM74 40a6 6 0 0 1 6-6h96a6 6 0 0 1 0 12H80a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhArrowFatLineDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineDownThinIcon],svg[ph-arrow-fat-line-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.7 134.47A4 4 0 0 0 224 132h-44V72a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v60H32a4 4 0 0 0-2.83 6.83l96 96a4 4 0 0 0 5.66 0l96-96a4 4 0 0 0 .87-4.36M128 226.34L41.66 140H80a4 4 0 0 0 4-4V76h88v60a4 4 0 0 0 4 4h38.34ZM76 40a4 4 0 0 1 4-4h96a4 4 0 0 1 0 8H80a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhArrowFatLineDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineLeftIcon],svg[ph-arrow-fat-line-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 72h-56V32a8 8 0 0 0-13.66-5.66l-96 96a8 8 0 0 0 0 11.32l96 96A8 8 0 0 0 128 224v-40h56a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8m-8 96h-56a8 8 0 0 0-8 8v28.69L35.31 128L112 51.31V80a8 8 0 0 0 8 8h56Zm48-88v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhArrowFatLineLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineLeftBoldIcon],svg[ph-arrow-fat-line-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 68h-44V32a12 12 0 0 0-20.49-8.49l-96 96a12 12 0 0 0 0 17l96 96A12 12 0 0 0 132 224v-36h44a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12m-12 96h-44a12 12 0 0 0-12 12v19l-67-67l67-67v19a12 12 0 0 0 12 12h44Zm64-84v96a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhArrowFatLineLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineLeftDuotoneIcon],svg[ph-arrow-fat-line-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 80v96h-64v48l-96-96l96-96v48Z" opacity=".2"></svg:path><svg:path d="M184 72h-56V32a8 8 0 0 0-13.66-5.66l-96 96a8 8 0 0 0 0 11.32l96 96A8 8 0 0 0 128 224v-40h56a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8m-8 96h-56a8 8 0 0 0-8 8v28.69L35.31 128L112 51.31V80a8 8 0 0 0 8 8h56Zm48-88v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhArrowFatLineLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineLeftFillIcon],svg[ph-arrow-fat-line-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 80v96a8 8 0 0 1-8 8h-56v40a8 8 0 0 1-13.66 5.66l-96-96a8 8 0 0 1 0-11.32l96-96A8 8 0 0 1 128 32v40h56a8 8 0 0 1 8 8m24-8a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhArrowFatLineLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineLeftLightIcon],svg[ph-arrow-fat-line-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 74h-58V32a6 6 0 0 0-10.24-4.24l-96 96a6 6 0 0 0 0 8.48l96 96A6 6 0 0 0 126 224v-42h58a6 6 0 0 0 6-6V80a6 6 0 0 0-6-6m-6 96h-58a6 6 0 0 0-6 6v33.51L32.49 128L114 46.49V80a6 6 0 0 0 6 6h58Zm44-90v96a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhArrowFatLineLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineLeftThinIcon],svg[ph-arrow-fat-line-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 76h-60V32a4 4 0 0 0-6.83-2.83l-96 96a4 4 0 0 0 0 5.66l96 96A4 4 0 0 0 124 224v-44h60a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4m-4 96h-60a4 4 0 0 0-4 4v38.34L29.66 128L116 41.66V80a4 4 0 0 0 4 4h60Zm40-92v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhArrowFatLineLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineRightIcon],svg[ph-arrow-fat-line-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.66 122.34l-96-96A8 8 0 0 0 128 32v40H72a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h56v40a8 8 0 0 0 13.66 5.66l96-96a8 8 0 0 0 0-11.32M144 204.69V176a8 8 0 0 0-8-8H80V88h56a8 8 0 0 0 8-8V51.31L220.69 128ZM48 80v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhArrowFatLineRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineRightBoldIcon],svg[ph-arrow-fat-line-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.49 119.51l-96-96A12 12 0 0 0 124 32v36H80a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h44v36a12 12 0 0 0 20.49 8.49l96-96a12 12 0 0 0 0-16.98M148 195v-19a12 12 0 0 0-12-12H92V92h44a12 12 0 0 0 12-12V61l67 67ZM52 80v96a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhArrowFatLineRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineRightDuotoneIcon],svg[ph-arrow-fat-line-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M136 224v-48H72V80h64V32l96 96Z" opacity=".2"></svg:path><svg:path d="m237.66 122.34l-96-96A8 8 0 0 0 128 32v40H72a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h56v40a8 8 0 0 0 13.66 5.66l96-96a8 8 0 0 0 0-11.32M144 204.69V176a8 8 0 0 0-8-8H80V88h56a8 8 0 0 0 8-8V51.31L220.69 128ZM48 80v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhArrowFatLineRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineRightFillIcon],svg[ph-arrow-fat-line-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 80v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0m189.66 42.34l-96-96A8 8 0 0 0 128 32v40H72a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h56v40a8 8 0 0 0 13.66 5.66l96-96a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhArrowFatLineRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineRightLightIcon],svg[ph-arrow-fat-line-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.24 123.76l-96-96A6 6 0 0 0 130 32v42H72a6 6 0 0 0-6 6v96a6 6 0 0 0 6 6h58v42a6 6 0 0 0 10.24 4.24l96-96a6 6 0 0 0 0-8.48M142 209.51V176a6 6 0 0 0-6-6H78V86h58a6 6 0 0 0 6-6V46.49L223.51 128ZM46 80v96a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhArrowFatLineRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineRightThinIcon],svg[ph-arrow-fat-line-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.83 125.17l-96-96A4 4 0 0 0 132 32v44H72a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h60v44a4 4 0 0 0 2.47 3.7a4 4 0 0 0 4.36-.87l96-96a4 4 0 0 0 0-5.66M140 214.34V176a4 4 0 0 0-4-4H76V84h60a4 4 0 0 0 4-4V41.66L226.34 128ZM44 80v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhArrowFatLineRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineUpIcon],svg[ph-arrow-fat-line-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 114.34l-96-96a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 32 128h40v56a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8v-56h40a8 8 0 0 0 5.66-13.66M176 112a8 8 0 0 0-8 8v56H88v-56a8 8 0 0 0-8-8H51.31L128 35.31L204.69 112Zm8 104a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhArrowFatLineUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineUpBoldIcon],svg[ph-arrow-fat-line-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.48 111.51l-96-96a12 12 0 0 0-17 0l-96 96A12 12 0 0 0 32 132h36v44a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12v-44h36a12 12 0 0 0 8.48-20.49M176 108a12 12 0 0 0-12 12v44H92v-44a12 12 0 0 0-12-12H61l67-67l67 67Zm12 108a12 12 0 0 1-12 12H80a12 12 0 0 1 0-24h96a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhArrowFatLineUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineUpDuotoneIcon],svg[ph-arrow-fat-line-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 120h-48v64H80v-64H32l96-96Z" opacity=".2"></svg:path><svg:path d="m229.66 114.34l-96-96a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 32 128h40v56a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8v-56h40a8 8 0 0 0 5.66-13.66M176 112a8 8 0 0 0-8 8v56H88v-56a8 8 0 0 0-8-8H51.31L128 35.31L204.69 112Zm8 104a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhArrowFatLineUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineUpFillIcon],svg[ph-arrow-fat-line-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 216a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8m45.66-101.66l-96-96a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 32 128h40v56a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8v-56h40a8 8 0 0 0 5.66-13.66"></svg:path>`,
})
export class PhArrowFatLineUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineUpLightIcon],svg[ph-arrow-fat-line-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 115.76l-96-96a6 6 0 0 0-8.48 0l-96 96A6 6 0 0 0 32 126h42v58a6 6 0 0 0 6 6h96a6 6 0 0 0 6-6v-58h42a6 6 0 0 0 4.24-10.24M176 114a6 6 0 0 0-6 6v58H86v-58a6 6 0 0 0-6-6H46.49L128 32.49L209.51 114Zm6 102a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhArrowFatLineUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLineUpThinIcon],svg[ph-arrow-fat-line-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 117.17l-96-96a4 4 0 0 0-5.66 0l-96 96A4 4 0 0 0 32 124h44v60a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4v-60h44a4 4 0 0 0 2.83-6.83M176 116a4 4 0 0 0-4 4v60H84v-60a4 4 0 0 0-4-4H41.66L128 29.66L214.34 116Zm4 100a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhArrowFatLineUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesDownIcon],svg[ph-arrow-fat-lines-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.39 132.94A8 8 0 0 0 224 128h-40v-24a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v24H32a8 8 0 0 0-5.66 13.66l96 96a8 8 0 0 0 11.32 0l96-96a8 8 0 0 0 1.73-8.72M128 220.69L51.31 144H80a8 8 0 0 0 8-8v-24h80v24a8 8 0 0 0 8 8h28.69ZM72 40a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m0 32a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhArrowFatLinesDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesDownBoldIcon],svg[ph-arrow-fat-lines-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.09 131.41A12 12 0 0 0 224 124h-36v-4a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v4H32a12 12 0 0 0-8.49 20.49l96 96a12 12 0 0 0 17 0l96-96a12 12 0 0 0 2.58-13.08M128 215l-67-67h19a12 12 0 0 0 12-12v-4h72v4a12 12 0 0 0 12 12h19ZM68 40a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12m0 40a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhArrowFatLinesDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesDownDuotoneIcon],svg[ph-arrow-fat-lines-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 136l-96 96l-96-96h48v-32h96v32Z" opacity=".2"></svg:path><svg:path d="M231.39 132.94A8 8 0 0 0 224 128h-40v-24a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v24H32a8 8 0 0 0-5.66 13.66l96 96a8 8 0 0 0 11.32 0l96-96a8 8 0 0 0 1.73-8.72M128 220.69L51.31 144H80a8 8 0 0 0 8-8v-24h80v24a8 8 0 0 0 8 8h28.69ZM72 40a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m0 32a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhArrowFatLinesDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesDownFillIcon],svg[ph-arrow-fat-lines-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 40a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m159.39 92.94A8 8 0 0 0 224 128h-40v-24a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v24H32a8 8 0 0 0-5.66 13.66l96 96a8 8 0 0 0 11.32 0l96-96a8 8 0 0 0 1.73-8.72M80 80h96a8 8 0 0 0 0-16H80a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhArrowFatLinesDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesDownLightIcon],svg[ph-arrow-fat-lines-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.54 133.7A6 6 0 0 0 224 130h-42v-26a6 6 0 0 0-6-6H80a6 6 0 0 0-6 6v26H32a6 6 0 0 0-4.24 10.24l96 96a6 6 0 0 0 8.48 0l96-96a6 6 0 0 0 1.3-6.54M128 223.51L46.49 142H80a6 6 0 0 0 6-6v-26h84v26a6 6 0 0 0 6 6h33.51ZM74 40a6 6 0 0 1 6-6h96a6 6 0 0 1 0 12H80a6 6 0 0 1-6-6m0 32a6 6 0 0 1 6-6h96a6 6 0 0 1 0 12H80a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhArrowFatLinesDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesDownThinIcon],svg[ph-arrow-fat-lines-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.7 134.47A4 4 0 0 0 224 132h-44v-28a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v28H32a4 4 0 0 0-2.83 6.83l96 96a4 4 0 0 0 5.66 0l96-96a4 4 0 0 0 .87-4.36M128 226.34L41.66 140H80a4 4 0 0 0 4-4v-28h88v28a4 4 0 0 0 4 4h38.34ZM76 40a4 4 0 0 1 4-4h96a4 4 0 0 1 0 8H80a4 4 0 0 1-4-4m0 32a4 4 0 0 1 4-4h96a4 4 0 0 1 0 8H80a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhArrowFatLinesDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesLeftIcon],svg[ph-arrow-fat-lines-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 72h-24V32a8 8 0 0 0-13.66-5.66l-96 96a8 8 0 0 0 0 11.32l96 96A8 8 0 0 0 128 224v-40h24a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8m-8 96h-24a8 8 0 0 0-8 8v28.69L35.31 128L112 51.31V80a8 8 0 0 0 8 8h24Zm80-88v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0m-32 0v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhArrowFatLinesLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesLeftBoldIcon],svg[ph-arrow-fat-lines-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 68h-4V32a12 12 0 0 0-20.49-8.49l-96 96a12 12 0 0 0 0 17l96 96A12 12 0 0 0 132 224v-36h4a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12m-12 96h-4a12 12 0 0 0-12 12v19l-67-67l67-67v19a12 12 0 0 0 12 12h4Zm104-84v96a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0m-40 0v96a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhArrowFatLinesLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesLeftDuotoneIcon],svg[ph-arrow-fat-lines-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 80v96h-32v48l-96-96l96-96v48Z" opacity=".2"></svg:path><svg:path d="M152 72h-24V32a8 8 0 0 0-13.66-5.66l-96 96a8 8 0 0 0 0 11.32l96 96A8 8 0 0 0 128 224v-40h24a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8m-8 96h-24a8 8 0 0 0-8 8v28.69L35.31 128L112 51.31V80a8 8 0 0 0 8 8h24Zm80-88v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0m-32 0v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhArrowFatLinesLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
