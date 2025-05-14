import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidPrescriptionBottleIcon],svg[fa6-solid-prescription-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 32C0 14.3 14.3 0 32 0h320c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64zm32 96h320v320c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64v-32h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H32v-64h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H32v-64h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H32z"></svg:path>`,
})
export class Fa6SolidPrescriptionBottleIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidPrescriptionBottleMedicalIcon],svg[fa6-solid-prescription-bottle-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 32C0 14.3 14.3 0 32 0h320c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64zm32 96h320v320c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm128 112v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"></svg:path>`,
})
export class Fa6SolidPrescriptionBottleMedicalIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidPrintIcon],svg[fa6-solid-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 0C92.7 0 64 28.7 64 64v96h64V64h226.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0zm256 352v96H128v-96zm64 32h32c17.7 0 32-14.3 32-32v-96c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32h32v64c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64zm-16-136a24 24 0 1 1 0 48a24 24 0 1 1 0-48"></svg:path>`,
})
export class Fa6SolidPrintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidPumpMedicalIcon],svg[fa6-solid-pump-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 32v96h128V96h60.1c4.2 0 8.3 1.7 11.3 4.7l33.9 33.9c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-33.9-33.9c-15-15-35.4-23.4-56.6-23.4H256c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32m-10.6 128c-33.3 0-61 25.5-63.8 58.7L35 442.7C31.9 480 61.3 512 98.8 512h186.4c37.4 0 66.9-32 63.8-69.3l-18.7-224c-2.8-33.2-30.5-58.7-63.8-58.7zM216 280v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v32c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24h32v-32c0-13.3 10.7-24 24-24s24 10.7 24 24"></svg:path>`,
})
export class Fa6SolidPumpMedicalIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidPumpSoapIcon],svg[fa6-solid-pump-soap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 32v96h128V96h60.1c4.2 0 8.3 1.7 11.3 4.7l33.9 33.9c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-33.9-33.9c-15-15-35.4-23.4-56.6-23.4H256c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32m-10.6 128c-33.3 0-61 25.5-63.8 58.7L35 442.7C31.9 480 61.3 512 98.8 512h186.4c37.4 0 66.9-32 63.8-69.3l-18.7-224c-2.8-33.2-30.5-58.7-63.8-58.7zM256 360c0 35.3-28.7 56-64 56s-64-20.7-64-56c0-32.5 37-80.9 50.9-97.9c3.2-3.9 8.1-6.1 13.1-6.1s9.9 2.2 13.1 6.1c13.9 17 50.9 65.4 50.9 97.9"></svg:path>`,
})
export class Fa6SolidPumpSoapIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidPuzzlePieceIcon],svg[fa6-solid-puzzle-piece-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8c-11.6-8.7-18.8-20.7-18.8-34c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48h-56.8c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2c8.7 11.6 20.7 18.8 34 18.8c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8c-5.5 7.4-13.6 13.2-22.8 13.2C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48h120.8c12.8 0 23.2-10.4 23.2-23.2"></svg:path>`,
})
export class Fa6SolidPuzzlePieceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidQIcon],svg[fa6-solid-q-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 256c0 88.4 71.6 160 160 160c28.9 0 56-7.7 79.4-21.1l-72-86.4c-11.3-13.6-9.5-33.8 4.1-45.1s33.8-9.5 45.1 4.1l70.9 85.1c20.4-26.8 32.5-60.3 32.5-96.6c0-88.4-71.6-160-160-160S64 167.6 64 256m280.9 188.6C310 467 268.5 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 56.1-20.6 107.4-54.7 146.7l47.3 56.8c11.3 13.6 9.5 33.8-4.1 45.1s-33.8 9.5-45.1-4.1l-46.6-55.9z"></svg:path>`,
})
export class Fa6SolidQIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidQrcodeIcon],svg[fa6-solid-qrcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm64 16v64h64V96zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm64 16v64h64v-64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48m80 64h-64v64h64zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm112 176a16 16 0 1 1 0-32a16 16 0 1 1 0 32m64 0a16 16 0 1 1 0-32a16 16 0 1 1 0 32"></svg:path>`,
})
export class Fa6SolidQrcodeIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidQuestionIcon],svg[fa6-solid-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1a87.98 87.98 0 0 0-40.4 74v1.4c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7v-3.6c0-70.7-57.3-128-128-128h-32C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32m80 320a40 40 0 1 0 0-80a40 40 0 1 0 0 80"></svg:path>`,
})
export class Fa6SolidQuestionIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidQuoteLeftIcon],svg[fa6-solid-quote-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64z"></svg:path>`,
})
export class Fa6SolidQuoteLeftIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidQuoteRightIcon],svg[fa6-solid-quote-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8h-64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64zm-256 0c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64z"></svg:path>`,
})
export class Fa6SolidQuoteRightIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRIcon],svg[fa6-solid-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v352c0 17.7 14.3 32 32 32s32-14.3 32-32V320h95.3l102.5 146.4c10.1 14.5 30.1 18 44.6 7.9s18-30.1 7.9-44.6l-84.2-120.2C282.8 288.1 320 236.4 320 176c0-79.5-64.5-144-144-144zm112 224H64V96h112c44.2 0 80 35.8 80 80s-35.8 80-80 80"></svg:path>`,
})
export class Fa6SolidRIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRadiationIcon],svg[fa6-solid-radiation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 186.7c-23.9 13.8-40 39.7-40 69.3H32c-17.7 0-32.2-14.4-30-31.9C10.7 154 47.8 92.7 101.3 52c14.1-10.7 33.8-5.3 42.7 10zM256 336c14.6 0 28.2-3.9 40-10.7l72 124.8c8.8 15.3 3.7 35.1-12.6 41.9c-30.6 12.9-64.2 20-99.4 20s-68.9-7.1-99.4-20c-16.3-6.9-21.4-26.6-12.6-41.9l72-124.8c11.8 6.8 25.4 10.7 40 10.7m224-80H336c0-29.6-16.1-55.5-40-69.3L368 62c8.8-15.3 28.6-20.7 42.7-10c53.6 40.7 90.6 102 99.4 172.1c2.2 17.5-12.4 31.9-30 31.9zm-224-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96"></svg:path>`,
})
export class Fa6SolidRadiationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRadioIcon],svg[fa6-solid-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M494.8 47c12.7-3.7 20-17.1 16.3-29.8S494-2.8 481.2 1L51.7 126.9c-9.4 2.7-17.9 7.3-25.1 13.2C10.5 151.7 0 170.6 0 192v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H218.5zM368 240a80 80 0 1 1 0 160a80 80 0 1 1 0-160M80 256c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16m-16 64c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16m16 64c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16"></svg:path>`,
})
export class Fa6SolidRadioIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRainbowIcon],svg[fa6-solid-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 96C178.6 96 64 210.6 64 352v96c0 17.7-14.3 32-32 32S0 465.7 0 448v-96C0 175.3 143.3 32 320 32s320 143.3 320 320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-141.4-114.6-256-256-256m0 192c-35.3 0-64 28.7-64 64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-70.7 57.3-128 128-128s128 57.3 128 128v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-35.3-28.7-64-64-64m-160 64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-123.7 100.3-224 224-224s224 100.3 224 224v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-88.4-71.6-160-160-160s-160 71.6-160 160"></svg:path>`,
})
export class Fa6SolidRainbowIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRankingStarIcon],svg[fa6-solid-ranking-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0l-23.6 47.8l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37l-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8l46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1l38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32zM32 320c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32zm416 96v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32"></svg:path>`,
})
export class Fa6SolidRankingStarIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidReceiptIcon],svg[fa6-solid-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2.2c8.5-3.9 18.5-2.5 25.6 3.6L80 40.4l40.4-34.6c9-7.7 22.3-7.7 31.2 0L192 40.4l40.4-34.6c9-7.7 22.3-7.7 31.2 0L304 40.4l40.4-34.6c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8v464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6l-40.4 34.6c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488V24C0 14.6 5.5 6.1 14 2.2M96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16zM80 352c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-8.8 0-16 7.2-16 16m16-112c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></svg:path>`,
})
export class Fa6SolidReceiptIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRecordVinylIcon],svg[fa6-solid-record-vinyl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0m256-96a96 96 0 1 1 0 192a96 96 0 1 1 0-192m0 224a128 128 0 1 0 0-256a128 128 0 1 0 0 256m0-96a32 32 0 1 0 0-64a32 32 0 1 0 0 64"></svg:path>`,
})
export class Fa6SolidRecordVinylIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRectangleAdIcon],svg[fa6-solid-rectangle-ad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm165.5 141.3l72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7l-5.4-10.8h-90.3l-5.4 10.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l72-144c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3zM208 237.7L186.8 280h42.3zM392 256a24 24 0 1 0 0 48a24 24 0 1 0 0-48m24-43.9V184c0-13.3 10.7-24 24-24s24 10.7 24 24v144c0 13.3-10.7 24-24 24c-6.6 0-12.6-2.7-17-7c-9.4 4.5-19.9 7-31 7c-39.8 0-72-32.2-72-72s32.2-72 72-72c8.4 0 16.5 1.4 24 4.1"></svg:path>`,
})
export class Fa6SolidRectangleAdIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRectangleListIcon],svg[fa6-solid-rectangle-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 192a32 32 0 1 0 0-64a32 32 0 1 0 0 64m32-128a32 32 0 1 0-64 0a32 32 0 1 0 64 0m-32 224a32 32 0 1 0 0-64a32 32 0 1 0 0 64m96-248c-13.3 0-24 10.7-24 24s10.7 24 24 24h224c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h224c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h224c13.3 0 24-10.7 24-24s-10.7-24-24-24z"></svg:path>`,
})
export class Fa6SolidRectangleListIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRectangleXmarkIcon],svg[fa6-solid-rectangle-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm111 143c9.4-9.4 24.6-9.4 33.9 0l47 47l47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47l47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47l-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47l-47-47c-9.4-9.4-9.4-24.6 0-33.9"></svg:path>`,
})
export class Fa6SolidRectangleXmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRecycleIcon],svg[fa6-solid-recycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174.7 45.1C192.2 17 223 0 256 0s63.8 17 81.3 45.1l38.6 61.7l27-15.6c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3l-23.4 87.4c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l28.4-16.4L283 79c-5.8-9.3-16-15-27-15s-21.2 5.7-27 15l-17.5 28c-9.2 14.8-28.6 19.5-43.6 10.5c-15.3-9.2-20.2-29.2-10.7-44.4zm254.8 206.8c15-9 34.4-4.3 43.6 10.5l24.4 39.1c9.4 15.1 14.4 32.4 14.6 50.2c.3 53.1-42.7 96.4-95.8 96.4L320 448v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2v32h96.2c17.6 0 31.9-14.4 31.8-32c0-5.9-1.7-11.7-4.8-16.7l-24.4-39.1c-9.5-15.2-4.7-35.2 10.7-44.4m-364.6-31L36 204.2c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.4c12.8-3.4 26 4.2 29.4 17l23.4 87.3c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-26.5-15.3l-51.5 82.4c-3.1 5-4.8 10.8-4.8 16.7c-.1 17.6 14.2 32 31.8 32H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H95.8C42.7 448-.3 404.8 0 351.6c.1-17.8 5.1-35.1 14.6-50.2z"></svg:path>`,
})
export class Fa6SolidRecycleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRegisteredIcon],svg[fa6-solid-registered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512m-96-360c0-13.3 10.7-24 24-24h88c44.2 0 80 35.8 80 80c0 28-14.4 52.7-36.3 67l34.1 75.1c5.5 12.1.1 26.3-11.9 31.8s-26.3.1-31.8-11.9l-37.2-82H208v72c0 13.3-10.7 24-24 24s-24-10.7-24-24zm48 88h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64z"></svg:path>`,
})
export class Fa6SolidRegisteredIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRepeatIcon],svg[fa6-solid-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96h160v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32v32H160C71.6 64 0 135.6 0 224m512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192v-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6v-32h160c88.4 0 160-71.6 160-160z"></svg:path>`,
})
export class Fa6SolidRepeatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidReplyIcon],svg[fa6-solid-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64h112c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96h-96v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4"></svg:path>`,
})
export class Fa6SolidReplyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidReplyAllIcon],svg[fa6-solid-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209.4 39.5c-9.1-9.6-24.3-10-33.9-.9L33.8 173.2c-19.9 18.9-19.9 50.7 0 69.6l141.7 134.6c9.6 9.1 24.8 8.7 33.9-.9s8.7-24.8-.9-33.9L66.8 208L208.5 73.4c9.6-9.1 10-24.3.9-33.9M352 64c0-12.6-7.4-24.1-19-29.2s-25-3-34.4 5.4l-160 144c-6.7 6.1-10.6 14.7-10.6 23.8s3.9 17.7 10.6 23.8l160 144c9.4 8.5 22.9 10.6 34.4 5.4s19-16.6 19-29.2v-64h32c53 0 96 43 96 96c0 30.4-12.8 47.9-22.2 56.7c-5.5 5.1-9.8 12-9.8 19.5c0 10.9 8.8 19.7 19.7 19.7c2.8 0 5.6-.6 8.1-1.9C494.5 467.9 576 417.3 576 304c0-97.2-78.8-176-176-176h-48z"></svg:path>`,
})
export class Fa6SolidReplyAllIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRepublicanIcon],svg[fa6-solid-republican-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 192C0 103.6 71.6 32 160 32h224c88.4 0 160 71.6 160 160v64H0zm415.9-64c-2.4 0-4.7 1.3-5.7 3.4L397.6 156l-28.2 4c-2.4.3-4.4 2-5.2 4.2s-.1 4.7 1.6 6.3l20.4 19.2l-4.8 27.1c-.4 2.3.6 4.7 2.5 6s4.6 1.6 6.7.5l25.2-12.8l25.2 12.8c2.2 1.1 4.8.9 6.7-.5s3-3.7 2.5-6l-4.8-27.1l20.6-19.2c1.7-1.6 2.4-4.1 1.6-6.3s-2.8-3.9-5.2-4.2l-28.2-4l-12.6-24.6c-1.1-2.1-3.3-3.4-5.7-3.4m-138.3 3.4c-1.1-2.1-3.3-3.4-5.7-3.4s-4.7 1.3-5.7 3.4L253.6 156l-28.2 4c-2.4.3-4.4 2-5.2 4.2s-.1 4.7 1.6 6.3l20.4 19.2l-4.8 27.1c-.4 2.3.6 4.7 2.5 6s4.6 1.6 6.7.5l25.2-12.8l25.2 12.8c2.2 1.1 4.8.9 6.7-.5s3-3.7 2.5-6l-4.8-27.1l20.6-19.2c1.7-1.6 2.4-4.1 1.6-6.3s-2.8-3.9-5.2-4.2l-28.2-4zM127.9 128c-2.4 0-4.7 1.3-5.7 3.4L109.6 156l-28.2 4c-2.4.3-4.4 2-5.2 4.2s-.1 4.7 1.6 6.3l20.4 19.2l-4.8 27.1c-.4 2.3.6 4.7 2.5 6s4.6 1.6 6.7.5l25.2-12.8l25.2 12.8c2.2 1.1 4.8.9 6.7-.5s3-3.7 2.5-6l-4.8-27.1l20.6-19.2c1.7-1.6 2.4-4.1 1.6-6.3s-2.8-3.9-5.2-4.2l-28.2-4l-12.6-24.6c-1.1-2.1-3.3-3.4-5.7-3.4m.1 160h416v112c0 8.8 7.2 16 16 16s16-7.2 16-16v-48c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 44.2-35.8 80-80 80s-80-35.8-80-80v-48h-32v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64H128v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V288z"></svg:path>`,
})
export class Fa6SolidRepublicanIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRestroomIcon],svg[fa6-solid-restroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 48a48 48 0 1 1 96 0a48 48 0 1 1-96 0m40 304v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V325.2c-8.1 9.2-21.1 13.2-33.5 9.4c-16.9-5.3-26.3-23.2-21-40.1l30.9-99.1C44.9 155.3 82 128 124 128h8c42 0 79.1 27.3 91.6 67.4l30.9 99.1c5.3 16.9-4.1 34.8-21 40.1c-12.4 3.9-25.4-.2-33.5-9.4V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352zM320 0c13.3 0 24 10.7 24 24v464c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.3 10.7-24 24-24m144 48a48 48 0 1 1 96 0a48 48 0 1 1-96 0m-24 432v-96h-17.8c-10.9 0-18.6-10.7-15.2-21.1l9-26.9c-3.2 0-6.4-.5-9.5-1.5c-16.9-5.3-26.3-23.2-21-40.1l29.7-95.2c13.2-42.3 52.4-71.2 96.8-71.2s83.6 28.9 96.8 71.2l29.7 95.2c5.3 16.9-4.1 34.8-21 40.1c-3.2 1-6.4 1.5-9.5 1.5l9 26.9c3.5 10.4-4.3 21.1-15.2 21.1H584v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-16v96c0 17.7-14.3 32-32 32s-32-14.3-32-32"></svg:path>`,
})
export class Fa6SolidRestroomIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRetweetIcon],svg[fa6-solid-retweet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32-14.3-32-32V192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 192 32.1 192h32v128c0 53 43 96 96 96h112zm32-320c-17.7 0-32 14.3-32 32s14.3 32 32 32h112c17.7 0 32 14.3 32 32v128h-32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9S556.9 320 543.9 320h-32V192c0-53-43-96-96-96z"></svg:path>`,
})
export class Fa6SolidRetweetIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRibbonIcon],svg[fa6-solid-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m333.2 322.8l-133.9-146l-53.3-58.2c7.8-5.1 37-22.6 78-22.6s70.2 17.4 78 22.6L245.7 180l85.6 93.4l27.4-29.8c16.3-17.7 25.3-40.9 25.3-65v-29.5c0-19-5.6-37.5-16.1-53.3l-40.1-60.2C312.9 13.4 287.9 0 261.2 0h-76c-25.8 0-50.1 12.5-65.1 33.5L81.9 87C70.3 103.2 64 122.8 64 142.8V164c0 23.2 8.4 45.6 23.6 63.1l56 64.2l83.3 95.6l91.8 105.3c10 11.5 26.8 14.3 40 6.8l54.5-31.1c17.8-10.2 21.6-34.3 7.7-49.4zm-128 87.8L121.9 315L27.1 418.5c-13.9 15.1-10.1 39.2 7.7 49.4l55.1 31.5c13 7.4 29.3 4.9 39.4-6.1l75.9-82.6z"></svg:path>`,
})
export class Fa6SolidRibbonIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRightFromBracketIcon],svg[fa6-solid-right-from-bracket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m377.9 105.9l122.8 122.8c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9V320H192c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h128v-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9M160 96H96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-53 0-96-43-96-96V128c0-53 43-96 96-96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32"></svg:path>`,
})
export class Fa6SolidRightFromBracketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRightLeftIcon],svg[fa6-solid-right-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 96h320V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9S352 236.8 352 223.8v-64L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32m448 256c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6v64h320z"></svg:path>`,
})
export class Fa6SolidRightLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRightLongIcon],svg[fa6-solid-right-long-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6S320 110.5 320 120v72H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h288v72c0 9.6 5.7 18.2 14.5 22"></svg:path>`,
})
export class Fa6SolidRightLongIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRightToBracketIcon],svg[fa6-solid-right-to-bracket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m217.9 105.9l122.8 122.8c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9V320H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h128v-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9M352 416h64c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c53 0 96 43 96 96v256c0 53-43 96-96 96h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidRightToBracketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRingIcon],svg[fa6-solid-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 208c0 7.8 4.4 18.7 17.1 30.3C126.5 214.1 188.9 200 256 200s129.5 14.1 174.9 38.3c12.7-11.6 17.1-22.5 17.1-30.3c0-12.3-10.8-32-47.9-50.6C364.9 139.8 314 128 256 128s-108.9 11.8-144.1 29.4C74.8 176 64 195.7 64 208m192 40c-47 0-89.3 7.6-122.9 19.7C166.3 280.2 208.8 288 256 288s89.7-7.8 122.9-20.3C345.3 255.6 303 248 256 248M0 208c0-49.6 39.4-85.8 83.3-107.8C129.1 77.3 190.3 64 256 64s126.9 13.3 172.7 36.2c43.9 22 83.3 58.2 83.3 107.8v96c0 49.6-39.4 85.8-83.3 107.8c-45.8 22.9-107 36.2-172.7 36.2s-126.9-13.3-172.7-36.2C39.4 389.8 0 353.6 0 304z"></svg:path>`,
})
export class Fa6SolidRingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRoadIcon],svg[fa6-solid-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32h-74.8c-27.1 0-51.3 17.1-60.3 42.6L3.1 407.2c-2 5.8-3.1 12-3.1 18.2C0 455.5 24.5 480 54.6 480H256v-64c0-17.7 14.3-32 32-32s32 14.3 32 32v64h201.4c30.2 0 54.6-24.5 54.6-54.6c0-6.2-1.1-12.4-3.1-18.2L455.1 74.6C446 49.1 421.9 32 394.8 32H320v64c0 17.7-14.3 32-32 32s-32-14.3-32-32zm64 192v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32"></svg:path>`,
})
export class Fa6SolidRoadIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRoadBarrierIcon],svg[fa6-solid-road-barrier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32s32-14.3 32-32V266.3L149.2 96H64V64c0-17.7-14.3-32-32-32m373.2 64h-74.3l-5.4 10.7L234.8 288h74.3l5.4-10.7zm-42.4 192h74.3l5.4-10.7L533.2 96h-74.3l-5.4 10.7zm-160-192l-5.4 10.7L106.8 288h74.3l5.4-10.7L277.2 96h-74.3zm288 192H576v160c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v53.7z"></svg:path>`,
})
export class Fa6SolidRoadBarrierIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRoadBridgeIcon],svg[fa6-solid-road-bridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 0h256c17.7 0 32 14.3 32 32v448c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V32c0-17.7 14.3-32 32-32m128 200c-13.3 0-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24v-64c0-13.3-10.7-24-24-24m24 184c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24zM480 40c-13.3 0-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24V64c0-13.3-10.7-24-24-24M32 96h256v64h-40v64h40v96c-53 0-96 43-96 96v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c0-53-43-96-96-96v-96h72v-64H32c-17.7 0-32-14.3-32-32s14.3-32 32-32m168 64h-80v64h80z"></svg:path>`,
})
export class Fa6SolidRoadBridgeIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRoadCircleCheckIcon],svg[fa6-solid-road-circle-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.2 32H288v64c0 17.7 14.3 32 32 32s32-14.3 32-32V32h74.8c27.1 0 51.3 17.1 60.3 42.6l42.7 120.6c-10.9-2.1-22.2-3.2-33.8-3.2c-59.5 0-112.1 29.6-144 74.8V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32c2.3 0 4.6-.3 6.8-.7c-4.5 15.5-6.8 31.8-6.8 48.7c0 5.4.2 10.7.7 16h-.7c-17.7 0-32 14.3-32 32v64H86.6C56.5 480 32 455.5 32 425.4c0-6.2 1.1-12.4 3.1-18.2L152.9 74.6C162 49.1 186.1 32 213.2 32M352 368a144 144 0 1 1 288 0a144 144 0 1 1-288 0m211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L480 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6"></svg:path>`,
})
export class Fa6SolidRoadCircleCheckIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRoadCircleExclamationIcon],svg[fa6-solid-road-circle-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.2 32H288v64c0 17.7 14.3 32 32 32s32-14.3 32-32V32h74.8c27.1 0 51.3 17.1 60.3 42.6l42.7 120.6c-10.9-2.1-22.2-3.2-33.8-3.2c-59.5 0-112.1 29.6-144 74.8V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32c2.3 0 4.6-.3 6.8-.7c-4.5 15.5-6.8 31.8-6.8 48.7c0 5.4.2 10.7.7 16h-.7c-17.7 0-32 14.3-32 32v64H86.6C56.5 480 32 455.5 32 425.4c0-6.2 1.1-12.4 3.1-18.2L152.9 74.6C162 49.1 186.1 32 213.2 32M496 224a144 144 0 1 1 0 288a144 144 0 1 1 0-288m0 240a24 24 0 1 0 0-48a24 24 0 1 0 0 48m0-192c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80c0-8.8-7.2-16-16-16"></svg:path>`,
})
export class Fa6SolidRoadCircleExclamationIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRoadCircleXmarkIcon],svg[fa6-solid-road-circle-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.2 32H288v64c0 17.7 14.3 32 32 32s32-14.3 32-32V32h74.8c27.1 0 51.3 17.1 60.3 42.6l42.7 120.6c-10.9-2.1-22.2-3.2-33.8-3.2c-59.5 0-112.1 29.6-144 74.8V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32c2.3 0 4.6-.3 6.8-.7c-4.5 15.5-6.8 31.8-6.8 48.7c0 5.4.2 10.7.7 16h-.7c-17.7 0-32 14.3-32 32v64H86.6C56.5 480 32 455.5 32 425.4c0-6.2 1.1-12.4 3.1-18.2L152.9 74.6C162 49.1 186.1 32 213.2 32M496 224a144 144 0 1 1 0 288a144 144 0 1 1 0-288m22.6 144l36.7-36.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L496 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l36.7 36.7l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.7l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6z"></svg:path>`,
})
export class Fa6SolidRoadCircleXmarkIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRoadLockIcon],svg[fa6-solid-road-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 32h-74.8c-27.1 0-51.3 17.1-60.3 42.6L35.1 407.2c-2.1 5.9-3.1 12-3.1 18.2c0 30.1 24.5 54.6 54.6 54.6H288v-64c0-17.7 14.3-32 32-32s32 14.3 32 32v64h32V352c0-23.7 12.9-44.4 32-55.4V272c0-58.3 44.6-106.2 101.5-111.5l-30.4-85.9C478 49.1 453.9 32 426.8 32H352v64c0 17.7-14.3 32-32 32s-32-14.3-32-32zm64 192v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32m176 16c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32m-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80"></svg:path>`,
})
export class Fa6SolidRoadLockIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRoadSpikesIcon],svg[fa6-solid-road-spikes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 116.8c0-15.8 20.5-22 29.3-8.9L192 256V116.8c0-15.8 20.5-22 29.3-8.9L320 256V116.8c0-15.8 20.5-22 29.3-8.9L448 256V116.8c0-15.8 20.5-22 29.3-8.9l129.5 194.3c14.2 21.3-1.1 49.7-26.6 49.7l-68.2.1H64zM32 384h576c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidRoadSpikesIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRobotIcon],svg[fa6-solid-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 0c17.7 0 32 14.3 32 32v64h120c39.8 0 72 32.2 72 72v272c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72h120V32c0-17.7 14.3-32 32-32M208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zM264 256a40 40 0 1 0-80 0a40 40 0 1 0 80 0m152 40a40 40 0 1 0 0-80a40 40 0 1 0 0 80M48 224h16v192H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48m544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-16V224z"></svg:path>`,
})
export class Fa6SolidRobotIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRocketIcon],svg[fa6-solid-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8H24c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7.2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3H200c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1.2S224 496.7 224 488V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4.5-31.8-7.8zM384 168a40 40 0 1 0 0-80a40 40 0 1 0 0 80"></svg:path>`,
})
export class Fa6SolidRocketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRotateIcon],svg[fa6-solid-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5S38.9 198 44.8 181.4c10.8-30.7 28.4-59.4 52.8-83.8c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2S496 62.3 496 72v128c0 13.3-10.7 24-24 24H344c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24h128c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440V312.1z"></svg:path>`,
})
export class Fa6SolidRotateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRotateLeftIcon],svg[fa6-solid-rotate-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2S50.1 48.1 57 55l41.6 41.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2S177.7 224 168 224z"></svg:path>`,
})
export class Fa6SolidRotateLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRotateRightIcon],svg[fa6-solid-rotate-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M463.5 224h8.5c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2S461.9 48.1 455 55l-41.6 41.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 224 344 224z"></svg:path>`,
})
export class Fa6SolidRotateRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRouteIcon],svg[fa6-solid-route-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 96c0 50.2-59.1 125.1-84.6 155c-3.8 4.4-9.4 6.1-14.5 5H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c53 0 96 43 96 96s-43 96-96 96H139.6c8.7-9.9 19.3-22.6 30-36.8c6.3-8.4 12.8-17.6 19-27.2H416c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96c-53 0-96-43-96-96s43-96 96-96h39.8c-21-31.5-39.8-67.7-39.8-96c0-53 43-96 96-96s96 43 96 96M117.1 489.1c-3.8 4.3-7.2 8.1-10.1 11.3l-1.8 2l-.2-.2c-6 4.6-14.6 4-20-1.8C59.8 473 0 402.5 0 352c0-53 43-96 96-96s96 43 96 96c0 30-21.1 67-43.5 97.9c-10.7 14.7-21.7 28-30.8 38.5zM128 352a32 32 0 1 0-64 0a32 32 0 1 0 64 0m288-224a32 32 0 1 0 0-64a32 32 0 1 0 0 64"></svg:path>`,
})
export class Fa6SolidRouteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRssIcon],svg[fa6-solid-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64c0-17.7 14.3-32 32-32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64m0 352a64 64 0 1 1 128 0a64 64 0 1 1-128 0m32-256c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidRssIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRubleSignIcon],svg[fa6-solid-ruble-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 32c-17.7 0-32 14.3-32 32v192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H128v-32h112c79.5 0 144-64.5 144-144S319.5 32 240 32zm144 224H128V96h112c44.2 0 80 35.8 80 80s-35.8 80-80 80"></svg:path>`,
})
export class Fa6SolidRubleSignIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRugIcon],svg[fa6-solid-rug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 64h56v384H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-40h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-32h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-32h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-40h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24m88 0h416v384H112zm528 24c0 13.3-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56V64h56c13.3 0 24 10.7 24 24"></svg:path>`,
})
export class Fa6SolidRugIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRulerIcon],svg[fa6-solid-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M177.9 494.1c-18.7 18.7-49.1 18.7-67.9 0l-92.1-92.2c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7l48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48l41.4-41.4l48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48l41.4-41.4l48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48l41.4-41.4l48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48L333.9 18C352.6-.7 383-.7 401.8 18l92.1 92.1c18.7 18.7 18.7 49.1 0 67.9z"></svg:path>`,
})
export class Fa6SolidRulerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRulerCombinedIcon],svg[fa6-solid-ruler-combined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.2 468.9C2.7 493.1 23.1 512 48 512h416c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-48v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-64h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-64h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 1.7.1 3.3.2 4.9"></svg:path>`,
})
export class Fa6SolidRulerCombinedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRulerHorizontalIcon],svg[fa6-solid-ruler-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 336c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80H48c-26.5 0-48 21.5-48 48z"></svg:path>`,
})
export class Fa6SolidRulerHorizontalIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRulerVerticalIcon],svg[fa6-solid-ruler-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 48C0 21.5 21.5 0 48 0h160c26.5 0 48 21.5 48 48v48h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z"></svg:path>`,
})
export class Fa6SolidRulerVerticalIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRupeeSignIcon],svg[fa6-solid-rupee-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64c0-17.7 14.3-32 32-32h80c79.5 0 144 64.5 144 144c0 58.8-35.2 109.3-85.7 131.7l51.4 128.4c6.6 16.4-1.4 35-17.8 41.6s-35-1.4-41.6-17.8l-56-139.9H64v128c0 17.7-14.3 32-32 32S0 465.7 0 448zm64 192h48c44.2 0 80-35.8 80-80s-35.8-80-80-80H64zm256.5 16.4c-.9 6 0 8.7.4 9.8s1.4 2.6 4.2 4.9c7.2 5.7 18.7 10 37.9 16.8l1.3.5c16 5.6 38.7 13.6 55.7 28.1c9.5 8.1 17.9 18.6 23.1 32.3c5.1 13.7 6.1 28.5 3.8 44c-4.2 28.1-20.5 49.3-43.8 60.9c-22.1 11-48.1 12.5-73.2 8h-.2c-9.3-1.8-20.5-5.7-29.3-9c-6-2.3-12.6-4.9-17.7-6.9c-2.5-1-4.6-1.8-6.3-2.5c-16.5-6.4-24.6-25-18.2-41.4s24.9-24.6 41.4-18.2c2.6 1 5.2 2 7.9 3.1c4.8 1.9 9.8 3.9 15.4 6c8.8 3.3 15.3 5.4 18.7 6c15.7 2.8 26.7.8 32.9-2.3c5-2.5 8-6 9.1-13c1-6.9.2-10.5-.5-12.3c-.6-1.7-1.8-3.6-4.5-5.9c-6.9-5.8-18.2-10.4-36.9-17l-3-1.1c-15.5-5.4-37-13-53.3-25.9c-9.5-7.5-18.3-17.6-23.7-31c-5.5-13.4-6.6-28-4.4-43.2c8.4-57.1 67-78 116.9-68.9c6.9 1.3 27.3 5.8 35.4 8.4c16.9 5.2 26.3 23.2 21.1 40.1s-23.2 26.3-40.1 21.1c-4.7-1.4-22.3-5.5-27.9-6.5c-14.6-2.7-25.8-.4-32.6 3.2c-6.3 3.3-8.9 7.6-9.5 12z"></svg:path>`,
})
export class Fa6SolidRupeeSignIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRupiahSignIcon],svg[fa6-solid-rupiah-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64c0-17.7 14.3-32 32-32h80c79.5 0 144 64.5 144 144c0 58.8-35.2 109.3-85.7 131.7l51.4 128.4c6.6 16.4-1.4 35-17.8 41.6s-35-1.4-41.6-17.8l-56-139.9H64v128c0 17.7-14.3 32-32 32S0 465.7 0 448zm64 192h48c44.2 0 80-35.8 80-80s-35.8-80-80-80H64zm256-96h80c61.9 0 112 50.1 112 112s-50.1 112-112 112h-48v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32m80 160c26.5 0 48-21.5 48-48s-21.5-48-48-48h-48v96z"></svg:path>`,
})
export class Fa6SolidRupiahSignIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSIcon],svg[fa6-solid-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M99.1 105.4C79 114 68.2 127.2 65.2 144.8c-2.4 14.1-.7 23.2 2 29.4c2.8 6.3 7.9 12.4 16.7 18.6c19.2 13.4 48.3 22.1 84.9 32.5c1 .3 1.9.6 2.9.8c32.7 9.3 72 20.6 100.9 40.7c15.7 10.9 29.9 25.5 38.6 45.1c8.8 19.8 10.8 42 6.6 66.3c-7.3 42.5-35.3 71.7-71.8 87.3c-35.4 15.2-79.1 17.9-123.7 10.9h-.2c-24-3.9-62.7-17.1-87.6-25.6c-4.8-1.7-9.2-3.1-12.8-4.3c-16.6-5.7-25.6-23.8-20.1-40.6s23.7-25.8 40.5-20.3Q49.45 388 58 391c25.4 8.6 56.4 19.2 74.4 22.1c36.8 5.7 67.5 2.5 88.5-6.5c20.1-8.6 30.8-21.8 33.9-39.4c2.4-14.1.7-23.2-2-29.4c-2.8-6.3-7.9-12.4-16.7-18.6c-19.2-13.4-48.3-22.1-84.9-32.5c-1-.3-1.9-.6-2.9-.8c-32.7-9.3-72-20.6-100.9-40.7c-15.7-10.9-29.9-25.5-38.6-45.1c-8.8-19.8-10.8-42-6.6-66.3l31.5 5.5l-31.6-5.4c7.3-42.5 35.3-71.7 71.8-87.3c35.4-15.2 79.1-17.9 123.7-10.9c13 2 52.4 9.6 66.6 13.4c17.1 4.5 27.2 22.1 22.7 39.2s-22.1 27.2-39.2 22.7c-11.2-3-48.1-10.2-60.1-12l4.9-31.5l-4.9 31.5c-36.9-5.8-67.5-2.5-88.6 6.5z"></svg:path>`,
})
export class Fa6SolidSIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSackDollarIcon],svg[fa6-solid-sack-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 96H192l-47.4-71.1c-7.1-10.7.5-24.9 13.3-24.9h196.2c12.8 0 20.4 14.2 13.3 24.9zm-128 32h128c3.8 2.5 8.1 5.3 13 8.4c56.7 36.3 179 114.5 179 279.6c0 53-43 96-96 96H96c-53 0-96-43-96-96c0-165.1 122.3-243.3 179-279.6c4.8-3.1 9.2-5.9 13-8.4m84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7.5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5q-3.45-1.2-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9.6 4 1.3 6.1 2.1c8.3 2.9 17.9 6.2 28.2 8.4v14.6c0 11 9 20 20 20s20-9 20-20V410c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6.1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7v-13.9z"></svg:path>`,
})
export class Fa6SolidSackDollarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSackXmarkIcon],svg[fa6-solid-sack-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 96h128l47.4-71.1c7.1-10.7-.5-24.9-13.3-24.9H157.9c-12.8 0-20.4 14.2-13.3 24.9zm128 32H192c-3.8 2.5-8.1 5.3-13 8.4C122.3 172.7 0 250.9 0 416c0 53 43 96 96 96h320c53 0 96-43 96-96c0-165.1-122.3-243.3-179-279.6c-4.8-3.1-9.2-5.9-13-8.4m-30.1 208l47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47l-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47l-47-47c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47l47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></svg:path>`,
})
export class Fa6SolidSackXmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSailboatIcon],svg[fa6-solid-sailboat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16c0-7 4.5-13.2 11.2-15.3s13.9.4 17.9 6.1l224 320c3.4 4.9 3.8 11.3 1.1 16.6S502 352 496 352H272c-8.8 0-16-7.2-16-16zm-43.9 80.5c7 1.9 11.9 8.2 11.9 15.5v224c0 8.8-7.2 16-16 16H80c-5.7 0-11-3-13.8-8s-2.9-11-.1-16l128-224c3.6-6.3 11-9.4 18-7.5M5.7 404.3C2.8 394.1 10.5 384 21.1 384h533.8c10.6 0 18.3 10.1 15.4 20.3l-4 14.3C550.7 473.9 500.4 512 443 512H133c-57.4 0-107.7-38.1-123.3-93.3l-4-14.3z"></svg:path>`,
})
export class Fa6SolidSailboatIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSatelliteIcon],svg[fa6-solid-satellite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233 7c-9.4-9.4-24.6-9.4-33.9 0l-96 96c-9.4 9.4-9.4 24.6 0 33.9l89.4 89.4l-15.5 15.5c-24.7-11.4-52.1-17.8-81-17.8c-31.7 0-61.5 7.7-87.8 21.2c-9 4.7-10.3 16.7-3.1 23.8l107.6 107.7l-16.4 16.4c-2.6-.7-5.4-1.1-8.3-1.1c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32c0-2.9-.4-5.6-1.1-8.3l16.4-16.4l107.6 107.6c7.2 7.2 19.2 5.9 23.8-3.1c13.6-26.3 21.3-56.1 21.3-87.8c0-28.9-6.4-56.3-17.8-80.9l15.5-15.5L375 409c9.4 9.4 24.6 9.4 33.9 0l96-96c9.4-9.4 9.4-24.6 0-33.9l-89.4-89.4l55-55c12.5-12.5 12.5-32.8 0-45.3l-48-48c-12.5-12.5-32.8-12.5-45.3 0l-55 55zm159 351l-72.4-72.4l62.1-62.1l72.4 72.5l-62.1 62.1zM226.3 192.4L153.9 120L216 57.9l72.4 72.4z"></svg:path>`,
})
export class Fa6SolidSatelliteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSatelliteDishIcon],svg[fa6-solid-satellite-dish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32c0-17.7 14.3-32 32-32c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32M60.6 220.6l104.1 104.1l28.4-28.4c-.7-2.6-1.1-5.4-1.1-8.3c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32c-2.9 0-5.6-.4-8.3-1.1l-28.4 28.4l104.1 104.1c14.5 14.5 11.8 38.8-7.3 46.3c-23.6 9.2-49.2 14.3-76.1 14.3C93.1 512 0 418.9 0 304c0-26.9 5.1-52.5 14.4-76.1c7.5-19 31.8-21.8 46.3-7.3zM224 96c106 0 192 86 192 192c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-70.7-57.3-128-128-128c-17.7 0-32-14.3-32-32s14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidSatelliteDishIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidScaleBalancedIcon],svg[fa6-solid-scale-balanced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448h160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h160V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h128c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32m55.6 288h144.9L512 195.8zm72.4 96c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8L631.3 305c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416M126.8 195.8L54.4 320h144.9zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8L246.2 305c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1"></svg:path>`,
})
export class Fa6SolidScaleBalancedIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidScaleUnbalancedIcon],svg[fa6-solid-scale-unbalanced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M522.1 62.4c16.8-5.6 25.8-23.7 20.2-40.5S518.6-3.9 501.9 1.6l-113 37.7C375 15.8 349.3 0 320 0c-44.2 0-80 35.8-80 80c0 3 .2 5.9.5 8.8l-122.6 40.8c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l135.5-45.2c4.5 3.2 9.3 5.9 14.4 8.2L288 480c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V153.3c21-9.2 37.2-27 44.2-49l125.9-42zM439.6 288L512 163.8L584.4 288H439.5zm72.4 96c62.9 0 115.2-34 126-78.9c2.6-11-1-22.3-6.7-32.1l-95.2-163.2c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8l-95.2 163.3c-5.7 9.8-9.3 21.1-6.7 32.1C396.8 350 449.1 384 512 384m-382.8-92.2L201.6 416H56.7l72.4-124.2zM3.2 433.1C14 478 66.3 512 129.2 512s115.2-34 126-78.9c2.6-11-1-22.3-6.7-32.1l-95.3-163.2c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8L9.9 401.1c-5.7 9.8-9.3 21.1-6.7 32.1z"></svg:path>`,
})
export class Fa6SolidScaleUnbalancedIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidScaleUnbalancedFlipIcon],svg[fa6-solid-scale-unbalanced-flip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M117.9 62.4c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l113 37.7C265 15.8 290.7 0 320 0c44.2 0 80 35.8 80 80c0 3-.2 5.9-.5 8.8l122.6 40.9c16.8 5.6 25.8 23.7 20.2 40.5s-23.7 25.8-40.5 20.2l-135.4-45.2c-4.5 3.2-9.3 5.9-14.4 8.2V480c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h160V153.3c-21-9.2-37.2-27-44.2-49l-125.9-42zM200.4 288L128 163.8L55.6 288h144.9zM128 384c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8L247.3 273c5.7 9.8 9.3 21.1 6.7 32.1C243.2 350 190.9 384 128 384m382.8-92.2L438.4 416h144.9zm126 141.3C626 478 573.7 512 510.8 512s-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8L630.1 401c5.7 9.8 9.3 21.1 6.7 32.1"></svg:path>`,
})
export class Fa6SolidScaleUnbalancedFlipIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSchoolIcon],svg[fa6-solid-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M337.8 5.4c-10.8-7.2-24.8-7.2-35.6 0L166.3 96H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h208v-96c0-35.3 28.7-64 64-64s64 28.7 64 64v96h208c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zM232 176a88 88 0 1 1 176 0a88 88 0 1 1-176 0m88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-16c0-8.8-7.2-16-16-16"></svg:path>`,
})
export class Fa6SolidSchoolIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSchoolCircleCheckIcon],svg[fa6-solid-school-circle-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M337.8 5.4c-10.8-7.2-24.8-7.2-35.6 0L166.3 96H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h272h-64v-96c0-35.3 28.7-64 64-64h.8c3.4-37.7 18.7-72.1 42.2-99.1c-12.8 7.1-27.4 11.1-43 11.1c-48.6 0-88-39.4-88-88s39.4-88 88-88s88 39.4 88 88c0 18.3-5.6 35.3-15.1 49.4c29-21 64.6-33.4 103.1-33.4c59.5 0 112.1 29.6 144 74.8V144c0-26.5-21.5-48-48-48H473.7zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m0 128h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m224-192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-16c0-8.8-7.2-16-16-16m320 240a144 144 0 1 0-288 0a144 144 0 1 0 288 0m-99.3-43.3c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l28.7 28.7z"></svg:path>`,
})
export class Fa6SolidSchoolCircleCheckIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSchoolCircleExclamationIcon],svg[fa6-solid-school-circle-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M337.8 5.4c-10.8-7.2-24.8-7.2-35.6 0L166.3 96H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h272h-64v-96c0-35.3 28.7-64 64-64h.8c3.4-37.7 18.7-72.1 42.2-99.1c-12.8 7.1-27.4 11.1-43 11.1c-48.6 0-88-39.4-88-88s39.4-88 88-88s88 39.4 88 88c0 18.3-5.6 35.3-15.1 49.4c29-21 64.6-33.4 103.1-33.4c59.5 0 112.1 29.6 144 74.8V144c0-26.5-21.5-48-48-48H473.7zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m0 128h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m224-192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-16c0-8.8-7.2-16-16-16m176 384a144 144 0 1 0 0-288a144 144 0 1 0 0 288m0-96a24 24 0 1 1 0 48a24 24 0 1 1 0-48m0-144c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-8.8 7.2-16 16-16"></svg:path>`,
})
export class Fa6SolidSchoolCircleExclamationIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSchoolCircleXmarkIcon],svg[fa6-solid-school-circle-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M337.8 5.4c-10.8-7.2-24.8-7.2-35.6 0L166.3 96H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h272h-64v-96c0-35.3 28.7-64 64-64h.8c3.4-37.7 18.7-72.1 42.2-99.1c-12.8 7.1-27.4 11.1-43 11.1c-48.6 0-88-39.4-88-88s39.4-88 88-88s88 39.4 88 88c0 18.3-5.6 35.3-15.1 49.4c29-21 64.6-33.4 103.1-33.4c59.5 0 112.1 29.6 144 74.8V144c0-26.5-21.5-48-48-48H473.7zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m0 128h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m224-192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-16c0-8.8-7.2-16-16-16m176 384a144 144 0 1 0 0-288a144 144 0 1 0 0 288m22.6-144l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L496 390.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l36.7-36.7l-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l36.7 36.7l36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></svg:path>`,
})
export class Fa6SolidSchoolCircleXmarkIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSchoolFlagIcon],svg[fa6-solid-school-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 0h112c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-79.3l89.6 64H512c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H336V400c0-26.5-21.5-48-48-48s-48 21.5-48 48v112H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h101.7L256 95.5V32c0-17.7 14.3-32 32-32m48 240a48 48 0 1 0-96 0a48 48 0 1 0 96 0M80 224c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm368 16v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16M80 352c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm384 0c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16z"></svg:path>`,
})
export class Fa6SolidSchoolFlagIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSchoolLockIcon],svg[fa6-solid-school-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M302.2 5.4c10.7-7.2 24.8-7.2 35.5 0l136 90.6H592c26.5 0 48 21.5 48 48v128c0-61.9-50.1-112-112-112s-112 50.1-112 112v24.6c-19.1 11.1-32 31.7-32 55.4h-64c-35.3 0-64 28.7-64 64v96h64H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h118.3zM80 208v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16m0 128v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16m240-72a88 88 0 1 0 0-176a88 88 0 1 0 0 176m16-120v16h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16s16 7.2 16 16m192 96c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32m-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32z"></svg:path>`,
})
export class Fa6SolidSchoolLockIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidScissorsIcon],svg[fa6-solid-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0zm22.6 150.6l118.2 118.2c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6zM64 112a48 48 0 1 1 96 0a48 48 0 1 1-96 0m48 240a48 48 0 1 1 0 96a48 48 0 1 1 0-96"></svg:path>`,
})
export class Fa6SolidScissorsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidScrewdriverIcon],svg[fa6-solid-screwdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M465 7c-8.5-8.5-22-9.4-31.6-2.1l-104 80c-5.9 4.5-9.4 11.6-9.4 19V158l-85.6 85.6c6.7 4.2 13 9.3 18.8 15.1s10.9 12.2 15.1 18.8l85.6-85.5H408c7.5 0 14.5-3.5 19-9.4l80-104c7.4-9.6 6.5-23.1-2.1-31.6zM121.4 281.4l-112 112c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l112-112c30.2-30.2 30.2-79.1 0-109.3s-79.1-30.2-109.3 0"></svg:path>`,
})
export class Fa6SolidScrewdriverIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidScrewdriverWrenchIcon],svg[fa6-solid-screwdriver-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78.6 5c-9.5-7.4-23-6.5-31.6 2L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4H158l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3L192 158v-54.1c0-7.5-3.5-14.5-9.4-19zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9l117.8-117.8c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16v-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0c-79.5 0-144 64.5-144 144v.8l85.3 85.3c36-9.1 75.8.5 104 28.7l15.7 15.7c49-23 83-72.8 83-130.5M56 432a24 24 0 1 1 48 0a24 24 0 1 1-48 0"></svg:path>`,
})
export class Fa6SolidScrewdriverWrenchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidScrollIcon],svg[fa6-solid-scroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 80v48c0 17.7 14.3 32 32 32h64V80c0-26.5-21.5-48-48-48S0 53.5 0 80m112-48c10 13.4 16 30 16 48v304c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96zm352 448c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7v5.3c0 53-43 96-96 96z"></svg:path>`,
})
export class Fa6SolidScrollIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidScrollTorahIcon],svg[fa6-solid-scroll-torah-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 480V32C96 14.3 74.5 0 48 0S0 14.3 0 32v448c0 17.7 21.5 32 48 32s48-14.3 48-32M512 32H128v448h384zm80-32c-26.5 0-48 14.3-48 32v448c0 17.7 21.5 32 48 32s48-14.3 48-32V32c0-17.7-21.5-32-48-32M196 313.7c0-3.2.9-6.4 2.5-9.2l28.2-48.5l-28.3-48.5c-1.6-2.8-2.5-6-2.5-9.2c0-10.1 8.2-18.3 18.3-18.3h56.7l31.4-53.9c3.6-6.3 10.3-10.1 17.6-10.1s13.9 3.8 17.6 10.1L369 180h56.7c10.1 0 18.3 8.2 18.3 18.3c0 3.2-.9 6.4-2.5 9.2L413.3 256l28.3 48.5c1.6 2.8 2.5 6 2.5 9.2c0 10.1-8.2 18.3-18.3 18.3H369l-31.4 53.9C334 392.2 327.3 396 320 396s-13.9-3.8-17.6-10.1L271 332h-56.7c-10.1 0-18.3-8.2-18.3-18.3m124 54.7l21.2-36.4h-42.4zM254.5 256l30.3 52h70.4l30.3-52l-30.3-52h-70.4zm144.9 23.8L383 308h32.8zm16.4-75.8H383l16.4 28.2zM320 143.6L298.8 180h42.4zM224.2 204l16.4 28.2L257 204zM257 308l-16.4-28.2l-16.4 28.2z"></svg:path>`,
})
export class Fa6SolidScrollTorahIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSdCardIcon],svg[fa6-solid-sd-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 0H141.3C124.3 0 108 6.7 96 18.7L18.7 96C6.7 108 0 124.3 0 141.3V448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64M160 88v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24s24 10.7 24 24m80 0v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24s24 10.7 24 24m80 0v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24s24 10.7 24 24"></svg:path>`,
})
export class Fa6SolidSdCardIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSectionIcon],svg[fa6-solid-section-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64.9 96c2.2-11.6 8.8-19.8 21.1-25.4c13.8-6.2 34.8-8.9 61.2-4.5c8.8 1.4 36.1 7.1 44.1 9.3c17 4.8 34.7-5.1 39.5-22.2s-5.1-34.7-22.2-39.5c-11.1-3.1-41-9.2-50.9-10.8c-34.7-5.6-69.4-3.5-98 9.4C29.9 25.8 7.5 50.9 1.6 86.5c-.1.5-.2 1.1-.2 1.6c-2.2 19.7.3 37.9 8.1 54.1c7.7 16.1 19.4 28 32 36.9c.6.5 1.3.9 2 1.4c-21.2 13.7-37 34.6-41.8 62.5c-.1.6-.2 1.1-.2 1.7c-2.3 19.3.4 37.1 8.4 53c7.9 15.6 19.8 27 32.3 35.5c22.4 15.2 51.9 24 75.4 31l3.7 1.1c27.2 8.2 46.9 14.6 59.4 23.8c5.5 4 8.2 7.6 9.5 10.9c1.3 3.2 2.6 8.6.9 18.1c-1.7 10.1-7.7 18-20.7 23.5c-14 6-35.4 8.5-62 4.4c-12.8-2.1-35.1-9.7-54.1-16.2c-4.3-1.5-8.5-2.9-12.3-4.2c-16.7-5.6-34.8 3.5-40.4 20.2s3.5 34.9 20.3 40.5c2.6.8 5.7 1.9 9.2 3.1c18.6 6.3 48.5 16.6 67.3 19.6h.2c34.5 5.4 68.8 3.4 97.2-8.7c29.4-12.6 52.5-36.5 58.5-71.5c3.3-19.3 1.9-37.4-5-53.9c-6.3-15-16.4-26.4-27.6-35.2c16.5-13.9 28.5-33.2 32.6-58.2c3.2-19.8 1.9-38.3-4.8-55.1s-17.8-29.4-30.2-39c-22.8-17.6-53.6-27.4-77.7-35l-1.4-.5c-27.4-8.7-47.8-15.3-61.5-25c-6.1-4.4-9.5-8.5-11.4-12.4c-1.8-3.7-3.2-9.3-2.3-18.5zm76.7 208.5l-.6-.2l-1.4-.4c-27.4-8.2-47.9-14.5-61.7-23.8c-6.2-4.2-9.3-7.9-11-11.3c-1.5-3-2.9-7.7-2.1-15.7c1.9-9.7 7.9-17.3 20.5-22.7c14-6 35.4-8.5 62.1-4.3l16.4 2.6c6.3 2.9 11.7 6 16.2 9.5c5.5 4.2 8.4 8.2 10 12.2s2.8 10.4 1.1 20.9c-2.4 14.7-12.8 26.4-37.1 31l-12.4 2.3z"></svg:path>`,
})
export class Fa6SolidSectionIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSeedlingIcon],svg[fa6-solid-seedling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32M0 96c0-17.7 14.3-32 32-32h32c123.7 0 224 100.3 224 224v192c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96"></svg:path>`,
})
export class Fa6SolidSeedlingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidServerIcon],svg[fa6-solid-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm280 72a24 24 0 1 1 0 48a24 24 0 1 1 0-48m48 24a24 24 0 1 1 48 0a24 24 0 1 1-48 0M64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64zm280 72a24 24 0 1 1 0 48a24 24 0 1 1 0-48m56 24a24 24 0 1 1 48 0a24 24 0 1 1-48 0"></svg:path>`,
})
export class Fa6SolidServerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShapesIcon],svg[fa6-solid-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M315.4 15.5C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2s16.3 16.2 27.8 16.2h192c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2zM288 312v144c0 22.1 17.9 40 40 40h144c22.1 0 40-17.9 40-40V312c0-22.1-17.9-40-40-40H328c-22.1 0-40 17.9-40 40M128 512a128 128 0 1 0 0-256a128 128 0 1 0 0 256"></svg:path>`,
})
export class Fa6SolidShapesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShareIcon],svg[fa6-solid-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304c0 113.3 81.5 163.9 100.2 174.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5c-9.4-8.9-22.2-26.4-22.2-56.8c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144a31.76 31.76 0 0 0-34.4-5.4"></svg:path>`,
})
export class Fa6SolidShareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShareFromSquareIcon],svg[fa6-solid-share-from-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 224h-46.5c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8h-2.5c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144h80V34.7C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9l138.2 124.4c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2H384c-17.7 0-32-14.3-32-32zM80 96c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-48c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V112c0-44.2 35.8-80 80-80h48c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></svg:path>`,
})
export class Fa6SolidShareFromSquareIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShareNodesIcon],svg[fa6-solid-share-nodes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9.7-7.8.7-11.9s-.2-8-.7-11.9l94.1-47c17.2 16.7 40.7 26.9 66.6 26.9"></svg:path>`,
})
export class Fa6SolidShareNodesIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSheetPlasticIcon],svg[fa6-solid-sheet-plastic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 448c0 35.3 28.7 64 64 64h160V384c0-17.7 14.3-32 32-32h128V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64zM171.3 75.3l-96 96c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l96-96c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6m96 32l-160 160c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l160-160c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6M384 384H256v128z"></svg:path>`,
})
export class Fa6SolidSheetPlasticIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShekelSignIcon],svg[fa6-solid-shekel-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32s32-14.3 32-32V96h128c35.3 0 64 28.7 64 64v160c0 17.7 14.3 32 32 32s32-14.3 32-32V160c0-70.7-57.3-128-128-128zm288 448c70.7 0 128-57.3 128-128V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v288c0 35.3-28.7 64-64 64H192V192c0-17.7-14.3-32-32-32s-32 14.3-32 32v256c0 17.7 14.3 32 32 32z"></svg:path>`,
})
export class Fa6SolidShekelSignIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShieldIcon],svg[fa6-solid-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9l188.3 79.9c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0"></svg:path>`,
})
export class Fa6SolidShieldIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShieldBlankIcon],svg[fa6-solid-shield-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 127.1C496 381.3 309.1 512 255.1 512C204.9 512 16 385.3 16 127.1c0-19.41 11.7-36.89 29.61-44.28l191.1-80.01c4.906-2.031 13.13-3.701 18.44-3.701c5.281 0 13.58 1.67 18.46 3.701l192 80.01C484.3 91.1 496 108.6 496 127.1z"></svg:path>`,
})
export class Fa6SolidShieldBlankIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShieldCatIcon],svg[fa6-solid-shield-cat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2zM160 154.4c0-5.8 4.7-10.4 10.4-10.4h.2c3.4 0 6.5 1.6 8.5 4.3l40 53.3c3 4 7.8 6.4 12.8 6.4h48c5 0 9.8-2.4 12.8-6.4l40-53.3c2-2.7 5.2-4.3 8.5-4.3h.2c5.8 0 10.4 4.7 10.4 10.4L352 272c0 53-43 96-96 96s-96-43-96-96zM216 288a16 16 0 1 0 0-32a16 16 0 1 0 0 32m96-16a16 16 0 1 0-32 0a16 16 0 1 0 32 0"></svg:path>`,
})
export class Fa6SolidShieldCatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShieldDogIcon],svg[fa6-solid-shield-dog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2zM160.9 286.2c4.8 1.2 9.9 1.8 15.1 1.8c35.3 0 64-28.7 64-64v-64h44.2c12.1 0 23.2 6.8 28.6 17.7L320 192h64c8.8 0 16 7.2 16 16v32c0 44.2-35.8 80-80 80h-48v50.7c0 7.3-5.9 13.3-13.3 13.3c-1.8 0-3.6-.4-5.2-1.1l-98.7-42.3c-6.6-2.8-10.8-9.3-10.8-16.4c0-2.8.6-5.5 1.9-8zM160 160h48v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-48c0-8.8 7.2-16 16-16m128 48a16 16 0 1 0-32 0a16 16 0 1 0 32 0"></svg:path>`,
})
export class Fa6SolidShieldDogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShieldHalvedIcon],svg[fa6-solid-shield-halved-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9l188.3 79.9c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0m0 66.8v378.1C394 378 431.1 230.1 432 141.4z"></svg:path>`,
})
export class Fa6SolidShieldHalvedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShieldHeartIcon],svg[fa6-solid-shield-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2zM144 221.3c0-33.8 27.4-61.3 61.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4l7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z"></svg:path>`,
})
export class Fa6SolidShieldHeartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShieldVirusIcon],svg[fa6-solid-shield-virus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2zM256 112c8.8 0 16 7.2 16 16c0 33 39.9 49.5 63.2 26.2c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6C334.5 200.1 351 240 384 240c8.8 0 16 7.2 16 16s-7.2 16-16 16c-33 0-49.5 39.9-26.2 63.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0C311.9 334.5 272 351 272 384c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-33-39.9-49.5-63.2-26.2c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6C177.5 311.9 161 272 128 272c-8.8 0-16-7.2-16-16s7.2-16 16-16c33 0 49.5-39.9 26.2-63.2c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0C200.1 177.5 240 161 240 128c0-8.8 7.2-16 16-16m-24 144a24 24 0 1 0 0-48a24 24 0 1 0 0 48m72 32a16 16 0 1 0-32 0a16 16 0 1 0 32 0"></svg:path>`,
})
export class Fa6SolidShieldVirusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShipIcon],svg[fa6-solid-ship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v32h48c26.5 0 48 21.5 48 48v128l44.4 14.8c23.1 7.7 29.5 37.5 11.5 53.9l-101 92.6c-16.2 9.4-34.7 15.1-50.9 15.1c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-16.2 0-34.7-5.7-50.9-15.1L40 308.7c-18-16.5-11.6-46.2 11.5-53.9L96 240V112c0-26.5 21.5-48 48-48h48zm-32 186.7l107.8-35.9c13.1-4.4 27.3-4.4 40.5 0L416 218.7V128H160zm146.5 203.2c22.5 15.5 50 26.1 77.5 26.1c26.9 0 55.4-10.8 77.4-26.1c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25c-29 15.6-61.5 25.9-94.5 25.9c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7c22.1 15.2 50.5 26 77.4 26c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0"></svg:path>`,
})
export class Fa6SolidShipIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShirtIcon],svg[fa6-solid-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3l126.2 105.1c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0z"></svg:path>`,
})
export class Fa6SolidShirtIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShoePrintsIcon],svg[fa6-solid-shoe-prints-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 0c-63.7 0-160 32-160 32v128c48 0 76 16 104 32s56 32 104 32c56.4 0 176-16 176-96S512 0 416 0M128 96c0 35.3 28.7 64 64 64h32V32h-32c-35.3 0-64 28.7-64 64m160 416c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32v128s96.3 32 160 32M0 416c0 35.3 28.7 64 64 64h32V352H64c-35.3 0-64 28.7-64 64"></svg:path>`,
})
export class Fa6SolidShoePrintsIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShopIcon],svg[fa6-solid-shop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36.8 192h566.3c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192M64 224v240c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V224h-64v160H128V224zm448 0v256c0 17.7 14.3 32 32 32s32-14.3 32-32V224z"></svg:path>`,
})
export class Fa6SolidShopIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShopLockIcon],svg[fa6-solid-shop-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36.8 192h412.8c20.2-19.8 47.9-32 78.4-32s58.1 12.2 78.3 31.9c18.9-1.6 33.7-17.4 33.7-36.7c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192M384 224h-64v160H128V224H64v240c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48zm144 16c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32m-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80"></svg:path>`,
})
export class Fa6SolidShopLockIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShopSlashIcon],svg[fa6-solid-shop-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-54.8-43V224h-64v152L384 275.7V224h-64v1.5L277.2 192h325.9c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4l-7.7 11.4zm-2 186.9h85L21 112.5L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192M320 384H128V224H64v240c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48v-65.5l-64-50.4z"></svg:path>`,
})
export class Fa6SolidShopSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShowerIcon],svg[fa6-solid-shower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 131.9C64 112.1 80.1 96 99.9 96c9.5 0 18.6 3.8 25.4 10.5l16.2 16.2c-21 38.9-17.4 87.5 10.9 123L151 247c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L345 121c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-1.3 1.3c-35.5-28.3-84.2-31.9-123-10.9l-16.3-16.2C151.8 42.5 126.4 32 99.9 32C44.7 32 0 76.7 0 131.9V448c0 17.7 14.3 32 32 32s32-14.3 32-32zM256 352a32 32 0 1 0 0-64a32 32 0 1 0 0 64m64 64a32 32 0 1 0-64 0a32 32 0 1 0 64 0m0-128a32 32 0 1 0 0-64a32 32 0 1 0 0 64m64 64a32 32 0 1 0-64 0a32 32 0 1 0 64 0m0-128a32 32 0 1 0 0-64a32 32 0 1 0 0 64m64 64a32 32 0 1 0-64 0a32 32 0 1 0 64 0m32-32a32 32 0 1 0 0-64a32 32 0 1 0 0 64"></svg:path>`,
})
export class Fa6SolidShowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShrimpIcon],svg[fa6-solid-shrimp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96s28.7 64 64 64h1c3.7 88.9 77 160 167 160h56V128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h400c8.8 0 16-7.2 16-16s-7.2-16-16-16zm160 424c0 13.3 10.7 24 24 24h72v-72.2l-64.1-22.4c-12.5-4.4-26.2 2.2-30.6 14.7s2.2 26.2 14.7 30.6l4.5 1.6C233 433.9 224 443.9 224 456m128 23.3c36.4-3.3 69.5-17.6 96.1-39.6l-86.5-34.6c-3 1.8-6.2 3.2-9.6 4.3zM472.6 415c24.6-30.3 39.4-68.9 39.4-111c0-12.3-1.3-24.3-3.7-35.9l-125.5 87c.8 3.4 1.2 7 1.2 10.6c0 4.6-.7 9-1.9 13.1zM336 128h-16v192h18.3c9.9 0 19.1 3.2 26.6 8.5l133.5-92.4C471.8 172.6 409.1 128 336 128m-168 64a24 24 0 1 1 48 0a24 24 0 1 1-48 0"></svg:path>`,
})
export class Fa6SolidShrimpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShuffleIcon],svg[fa6-solid-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9S384 204.8 384 191.8v-32h-32c-10.1 0-19.6 4.7-25.6 12.8L284 229.3L244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6M164 282.7l40 53.3l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c10.1 0 19.6-4.7 25.6-12.8zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9S383.9 461 383.9 448v-32h-32c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c30.2 0 58.7 14.2 76.8 38.4l153.6 204.8c6 8.1 15.5 12.8 25.6 12.8h32v-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"></svg:path>`,
})
export class Fa6SolidShuffleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShuttleSpaceIcon],svg[fa6-solid-shuttle-space-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M130 480c40.6 0 80.4-11 115.2-31.9L352 384H128v96zm222-352L245.2 63.9C210.4 43 170.6 32 130 32h-2v96zm-256 0V32H80c-26.5 0-48 21.5-48 48v48h8c-22.1 0-40 17.9-40 40v176c0 22.1 17.9 40 40 40h-8v48c0 26.5 21.5 48 48 48h16v-96h8c26.2 0 49.4-12.6 64-32h288c69.3 0 135-22.7 179.2-81.6c6.4-8.5 6.4-20.3 0-28.8C591 182.7 525.3 160 456 160H168c-14.6-19.4-37.8-32-64-32zm416 115.6v24.9c0 19.6-15.9 35.6-35.6 35.6c-2.5 0-4.4-2-4.4-4.4v-87.1c0-2.5 2-4.4 4.4-4.4c19.6 0 35.6 15.9 35.6 35.6z"></svg:path>`,
})
export class Fa6SolidShuttleSpaceIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSignHangingIcon],svg[fa6-solid-sign-hanging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 0c17.7 0 32 14.3 32 32v32h352c17.7 0 32 14.3 32 32s-14.3 32-32 32H128v352c0 17.7-14.3 32-32 32s-32-14.3-32-32V128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V32C64 14.3 78.3 0 96 0m96 160h256c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidSignHangingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSignalIcon],svg[fa6-solid-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 0c17.7 0 32 14.3 32 32v448c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32M448 96c17.7 0 32 14.3 32 32v352c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32m-96 128v256c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32m-160 64c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32M96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32"></svg:path>`,
})
export class Fa6SolidSignalIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSignatureIcon],svg[fa6-solid-signature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 128c0-17.7 14.3-32 32-32s32 14.3 32 32v7.8c0 27.7-2.4 55.3-7.1 82.5l-84.4 25.3c-40.6 12.2-68.4 49.6-68.4 92v71.9c0 40 32.5 72.5 72.5 72.5c26 0 50-13.9 62.9-36.5l13.9-24.3c26.8-47 46.5-97.7 58.4-150.5l94.4-28.3l-12.5 37.5c-3.3 9.8-1.6 20.5 4.4 28.8s15.7 13.3 26 13.3h128c17.7 0 32-14.3 32-32s-14.3-32-32-32h-83.6l18-53.9c3.8-11.3.9-23.8-7.4-32.4s-20.7-11.8-32.2-8.4l-122.5 36.8c2.4-20.7 3.6-41.4 3.6-62.3V128c0-53-43-96-96-96s-96 43-96 96v32c0 17.7 14.3 32 32 32s32-14.3 32-32zm-9.2 177l49-14.7c-10.4 33.8-24.5 66.4-42.1 97.2l-13.9 24.3c-1.5 2.6-4.3 4.3-7.4 4.3c-4.7 0-8.5-3.8-8.5-8.5v-71.9c0-14.1 9.3-26.6 22.8-30.7zM24 368c-13.3 0-24 10.7-24 24s10.7 24 24 24h40.3c-.2-2.8-.3-5.6-.3-8.5V368zm592 48c13.3 0 24-10.7 24-24s-10.7-24-24-24H305.9c-6.7 16.3-14.2 32.3-22.3 48z"></svg:path>`,
})
export class Fa6SolidSignatureIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSignsPostIcon],svg[fa6-solid-signs-post-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 32H64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h377.4c4.2 0 8.3-1.7 11.3-4.7l48-48c6.2-6.2 6.2-16.4 0-22.6l-48-48c-3-3-7.1-4.7-11.3-4.7H288c0-17.7-14.3-32-32-32s-32 14.3-32 32m256 224c0-17.7-14.3-32-32-32H288v-32h-64v32H70.6c-4.2 0-8.3 1.7-11.3 4.7l-48 48c-6.2 6.2-6.2 16.4 0 22.6l48 48c3 3 7.1 4.7 11.3 4.7H448c17.7 0 32-14.3 32-32zM288 480v-96h-64v96c0 17.7 14.3 32 32 32s32-14.3 32-32"></svg:path>`,
})
export class Fa6SolidSignsPostIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSimCardIcon],svg[fa6-solid-sim-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 0h178.7c17 0 33.3 6.7 45.3 18.7L365.3 96c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0m32 192c-17.7 0-32 14.3-32 32v32h64v-64zM64 352h256v-64H64zm256-128c0-17.7-14.3-32-32-32h-32v64h64zm-160-32v64h64v-64zm128 256c17.7 0 32-14.3 32-32v-32h-64v64zm-128-64v64h64v-64zm-96 32c0 17.7 14.3 32 32 32h32v-64H64z"></svg:path>`,
})
export class Fa6SolidSimCardIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSinkIcon],svg[fa6-solid-sink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 96c0-17.7 14.3-32 32-32s32 14.3 32 32s14.3 32 32 32s32-14.3 32-32c0-53-43-96-96-96s-96 43-96 96v192h-64v-24c0-30.9-25.1-56-56-56H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c4.4 0 8 3.6 8 8v24H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80v-24c0-4.4 3.6-8 8-8h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56c-30.9 0-56 25.1-56 56v24h-64zm192 320v-32H32v32c0 53 43 96 96 96h256c53 0 96-43 96-96"></svg:path>`,
})
export class Fa6SolidSinkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSitemapIcon],svg[fa6-solid-sitemap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40h152c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h8v-32c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h8v-40H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h8v-32c0-30.9 25.1-56 56-56h152v-40h-8c-26.5 0-48-21.5-48-48z"></svg:path>`,
})
export class Fa6SolidSitemapIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSkullIcon],svg[fa6-solid-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 398.9c58.5-41.1 96-104.1 96-174.9C512 100.3 397.4 0 256 0S0 100.3 0 224c0 70.7 37.5 133.8 96 174.9V464c0 26.5 21.5 48 48 48h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c26.5 0 48-21.5 48-48zM96 256a64 64 0 1 1 128 0a64 64 0 1 1-128 0m256-64a64 64 0 1 1 0 128a64 64 0 1 1 0-128"></svg:path>`,
})
export class Fa6SolidSkullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSkullCrossbonesIcon],svg[fa6-solid-skull-crossbones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 128c0 44.4-25.4 83.5-64 106.4V256c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-21.6c-38.6-23-64-62.1-64-106.4C80 57.3 144.5 0 224 0s144 57.3 144 128m-200 48a32 32 0 1 0 0-64a32 32 0 1 0 0 64m144-32a32 32 0 1 0-64 0a32 32 0 1 0 64 0M3.4 273.7c7.9-15.8 27.1-22.2 42.9-14.3L224 348.2l177.7-88.8c15.8-7.9 35-1.5 42.9 14.3s1.5 35-14.3 42.9L295.6 384l134.8 67.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L224 419.8L46.3 508.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9L152.4 384L17.7 316.6c-15.8-7.9-22.2-27.1-14.3-42.9"></svg:path>`,
})
export class Fa6SolidSkullCrossbonesIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSlashIcon],svg[fa6-solid-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"></svg:path>`,
})
export class Fa6SolidSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSleighIcon],svg[fa6-solid-sleigh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32v160c0 53 43 96 96 96v32h64v-32h192v32h64v-32c53 0 96-43 96-96v-96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v41.3c0 30.2-24.5 54.7-54.7 54.7c-75.5 0-145.6-38.9-185.6-102.9l-4.3-6.9C174.2 67.6 125 37.6 70.7 32.7c-2.2-.5-4.4-.7-6.7-.7zm608 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v8c0 13.3-10.7 24-24 24H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h488c48.6 0 88-39.4 88-88z"></svg:path>`,
})
export class Fa6SolidSleighIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSlidersIcon],svg[fa6-solid-sliders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 416c0 17.7 14.3 32 32 32h54.7c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H233.3c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48H32c-17.7 0-32 14.3-32 32m128 0a32 32 0 1 1 64 0a32 32 0 1 1-64 0m192-160a32 32 0 1 1 64 0a32 32 0 1 1-64 0m32-80c-32.8 0-61 19.7-73.3 48H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h246.7c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48H480c17.7 0 32-14.3 32-32s-14.3-32-32-32h-54.7c-12.3-28.3-40.5-48-73.3-48m-160-48a32 32 0 1 1 0-64a32 32 0 1 1 0 64m73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48H32C14.3 64 0 78.3 0 96s14.3 32 32 32h86.7c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48H480c17.7 0 32-14.3 32-32s-14.3-32-32-32z"></svg:path>`,
})
export class Fa6SolidSlidersIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSmogIcon],svg[fa6-solid-smog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 144c0 79.5 64.5 144 144 144h123.3c22.6 19.9 52.2 32 84.7 32s62.1-12.1 84.7-32H496c61.9 0 112-50.1 112-112S557.9 64 496 64c-10.7 0-21 1.5-30.8 4.3C443.8 27.7 401.1 0 352 0c-32.6 0-62.4 12.2-85.1 32.3C242.1 12.1 210.5 0 176 0C96.5 0 32 64.5 32 144m584 224H280c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24m-64 96H440c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24m-192 0H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24m-136-72c0-13.3-10.7-24-24-24H96c-13.3 0-24 10.7-24 24s10.7 24 24 24h104c13.3 0 24-10.7 24-24"></svg:path>`,
})
export class Fa6SolidSmogIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSmokingIcon],svg[fa6-solid-smoking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 32v11c0 38.2 15.2 74.8 42.2 101.8l21 21c21 21 32.8 49.5 32.8 79.2v11c0 17.7-14.3 32-32 32s-32-14.3-32-32v-11c0-12.7-5.1-24.9-14.1-33.9l-21-21c-39-39-60.9-92-60.9-147.1V32c0-17.7 14.3-32 32-32s32 14.3 32 32m128 224v-11c0-38.2-15.2-74.8-42.2-101.8l-21-21c-21-21-32.8-49.5-32.8-79.2V32c0-17.7 14.3-32 32-32s32 14.3 32 32v11c0 12.7 5.1 24.9 14.1 33.9l21 21c39 39 60.9 91.9 60.9 147.1v11c0 17.7-14.3 32-32 32s-32-14.3-32-32M0 416c0-35.3 28.7-64 64-64h352c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H64c-35.3 0-64-28.7-64-64zm224 0v32h160v-32zm288-64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-17.7 14.3-32 32-32m96 0c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-17.7 14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidSmokingIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSnowflakeIcon],svg[fa6-solid-snowflake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 0c17.7 0 32 14.3 32 32v30.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8L335 98.4c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3l23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 43.8l-25.3 14.8l21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1l-60.9 35.5l60.9 35.5l67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8l25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8l5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1l-61.3-35.8V382l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-30.1l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49v-70.3l-61.4 35.8l-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3l-23.8 13.7c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8l-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1l61-35.4l-60.9-35.5l-67.7 18.1c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8l-25.3-14.8C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8l-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1l61.3 35.7V130l-49-49c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15L192 32c0-17.7 14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidSnowflakeIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSnowmanIcon],svg[fa6-solid-snowman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341.1 140.6c-2 3.9-1.6 8.6 1.2 12c7 8.5 12.9 18.1 17.2 28.4l48.5-20.8V120c0-13.3 10.7-24 24-24s24 10.7 24 24v19.6l22.5-9.7c12.2-5.2 26.3.4 31.5 12.6s-.4 26.3-12.6 31.5l-56 24l-73.6 31.5q-.75 14.25-4.8 27.3c-1.2 3.8-.1 8 2.8 10.8C396.7 296.9 416 338.2 416 384c0 44.7-18.3 85-47.8 114.1c-9.9 9.7-23.7 13.9-37.5 13.9H181.4c-13.9 0-27.7-4.2-37.5-13.9C114.3 469 96 428.7 96 384c0-45.8 19.3-87.1 50.1-116.3c2.9-2.8 4-6.9 2.8-10.8c-2.7-8.7-4.3-17.9-4.8-27.3l-73.6-31.5l-56-24c-12.1-5.3-17.8-19.4-12.6-31.6s19.3-17.8 31.5-12.6l22.6 9.7V120c0-13.3 10.7-24 24-24s24 10.7 24 24v40.2l48.6 20.8c4.3-10.3 10.1-19.9 17.2-28.4c2.8-3.4 3.3-8.1 1.2-12c-7-13.4-11-28.5-11-44.6c0-53 43-96 96-96s96 43 96 96c0 16.1-4 31.2-10.9 44.6M224 96a16 16 0 1 0 0-32a16 16 0 1 0 0 32m48 128a16 16 0 1 0-32 0a16 16 0 1 0 32 0m-16 80a16 16 0 1 0 0-32a16 16 0 1 0 0 32m16 48a16 16 0 1 0-32 0a16 16 0 1 0 32 0m16-256a16 16 0 1 0 0-32a16 16 0 1 0 0 32m-48 24v3.2c0 3.2.8 6.3 2.3 9l9 16.9c.9 1.7 2.7 2.8 4.7 2.8s3.8-1.1 4.7-2.8l9-16.9c1.5-2.8 2.3-5.9 2.3-9V120c0-8.8-7.2-16-16-16s-16 7.2-16 16"></svg:path>`,
})
export class Fa6SolidSnowmanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSnowplowIcon],svg[fa6-solid-snowplow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m298.9 64l68.6 160H256l-64-64V64zm146.2 178.7l-87.4-204C347.6 15.3 324.5 0 298.9 0H176c-26.5 0-48 21.5-48 48v112H96c-17.7 0-32 14.3-32 32v106.8C26.2 316.8 0 355.3 0 400c0 61.9 50.1 112 112 112h256c61.9 0 112-50.1 112-112c0-17.2-3.9-33.5-10.8-48H512v50.7c0 17 6.7 33.3 18.7 45.3l54.6 54.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L576 402.7V235.2l57-71.2c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5l-57 71.2c-9.1 11.3-14 25.4-14 40V288h-64v-31.3c.1-2.4-.2-4.8-.6-7.1s-1.2-4.7-2.2-6.8zM368 352c26.5 0 48 21.5 48 48s-21.5 48-48 48H112c-26.5 0-48-21.5-48-48s21.5-48 48-48zm-224 48a24 24 0 1 0-48 0a24 24 0 1 0 48 0m216 24a24 24 0 1 0 0-48a24 24 0 1 0 0 48m-56-24a24 24 0 1 0-48 0a24 24 0 1 0 48 0m-104 24a24 24 0 1 0 0-48a24 24 0 1 0 0 48"></svg:path>`,
})
export class Fa6SolidSnowplowIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSoapIcon],svg[fa6-solid-soap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 96a48 48 0 1 0 0-96a48 48 0 1 0 0 96m112 160a64 64 0 1 0 0-128a64 64 0 1 0 0 128m96-224a32 32 0 1 0-64 0a32 32 0 1 0 64 0m0 160c0 27.6-11.7 52.5-30.4 70.1c36.5 13.6 62.4 48.7 62.4 89.9c0 53-43 96-96 96H160c-53 0-96-43-96-96s43-96 96-96h88.4c-15.2-17-24.4-39.4-24.4-64H96c-53 0-96 43-96 96v128c0 53 43 96 96 96h320c53 0 96-43 96-96V288c0-53-43-96-96-96m-256 96c-35.3 0-64 28.7-64 64s28.7 64 64 64h192c35.3 0 64-28.7 64-64s-28.7-64-64-64z"></svg:path>`,
})
export class Fa6SolidSoapIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSocksIcon],svg[fa6-solid-socks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M175.2 476.6c-9.7-18-15.2-38.7-15.2-60.6c0-40.3 19-78.2 51.2-102.4l64-48c8.1-6 12.8-15.5 12.8-25.6V96H128v144c0 20.1-9.5 39.1-25.6 51.2l-64 48C14.2 357.3 0 385.8 0 416c0 53 43 96 96 96c20.8 0 41-6.7 57.6-19.2zM128 64h160V48c0-14.5 3.9-28.2 10.7-39.9C291 3 281.9 0 272 0h-96c-26.5 0-48 21.5-48 48zm192 32v144c0 20.1-9.5 39.1-25.6 51.2l-64 48C206.2 357.3 192 385.8 192 416c0 53 43 96 96 96c20.8 0 41-6.7 57.6-19.2l115.2-86.4C493 382.2 512 344.3 512 304V96zm192-32V48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v16z"></svg:path>`,
})
export class Fa6SolidSocksIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSolarPanelIcon],svg[fa6-solid-solar-panel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122.2 0C91.7 0 65.5 21.5 59.5 51.4l-51.2 256C.4 347 30.6 384 71 384h217v64h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64v-64h217c40.4 0 70.7-36.9 62.8-76.6l-51.2-256C574.5 21.5 548.3 0 517.8 0zm138.7 64h118.2l10.4 104h-139zm-58.6 104H101.5l20.7-104h90.4zM91.8 216h105.6l-10.3 104H71zm153.9 0h148.6l10.4 104H235.3zm196.8 0h105.6L569 320H453zm96-48H437.7L427.3 64h90.4l31.4-6.3l-31.3 6.3l20.8 104z"></svg:path>`,
})
export class Fa6SolidSolarPanelIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSortIcon],svg[fa6-solid-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301 224.1 288 224.1L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9S19.1 288 32.1 288h256c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"></svg:path>`,
})
export class Fa6SolidSortIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSortDownIcon],svg[fa6-solid-sort-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9S19 287.9 32 287.9h256c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"></svg:path>`,
})
export class Fa6SolidSortDownIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSortUpIcon],svg[fa6-solid-sort-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9S19 224.1 32 224.1h256c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"></svg:path>`,
})
export class Fa6SolidSortUpIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSpaIcon],svg[fa6-solid-spa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.1 235.3c33.7 20.7 62.9 48.1 85.8 80.5c7 9.9 13.4 20.3 19.1 31c5.7-10.8 12.1-21.1 19.1-31c22.9-32.4 52.1-59.8 85.8-80.5C437.6 207.8 490.1 192 546 192h9.9c11.1 0 20.1 9 20.1 20.1c0 148-119.9 267.9-267.9 267.9h-40.2C119.9 480 0 360.1 0 212.1C0 201 9 192 20.1 192H30c55.9 0 108.4 15.8 153.1 43.3M301.5 37.6c15.7 16.9 61.1 71.8 84.4 164.6c-38 21.6-71.4 50.8-97.9 85.6c-26.5-34.8-59.9-63.9-97.9-85.6c23.2-92.8 68.6-147.7 84.4-164.6c3.5-3.7 8.4-5.6 13.5-5.6s10 1.9 13.5 5.6"></svg:path>`,
})
export class Fa6SolidSpaIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSpaghettiMonsterFlyingIcon],svg[fa6-solid-spaghetti-monster-flying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 64a16 16 0 1 0-32 0a16 16 0 1 0 32 0m48 0c0 16.2-6 31.1-16 42.3l15.6 31.2c18.7-6 39.9-9.5 64.4-9.5s45.8 3.5 64.4 9.5l15.6-31.2c-10-11.2-16-26.1-16-42.3c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-1.7 0-3.4-.1-5.1-.2L427.8 158c21.1 13.6 37.7 30.2 51.4 46.4c7.1 8.3 13.5 16.6 19.3 24l1.4 1.8c6.3 8.1 11.6 14.8 16.7 20.4c10.7 11.7 16.1 13.4 19.4 13.4c2.5 0 4.3-.6 7.1-3.3c3.7-3.5 7.1-8.8 12.5-17.4l.6-.9c4.6-7.4 11-17.6 19.4-25.7c9.7-9.3 22.9-16.7 40.4-16.7c13.3 0 24 10.7 24 24s-10.7 24-24 24c-2.5 0-4.3.6-7.1 3.3c-3.7 3.5-7.1 8.8-12.5 17.4l-.6.9c-4.6 7.4-11 17.6-19.4 25.7c-9.7 9.3-22.9 16.7-40.4 16.7c-18.5 0-32.9-8.5-44.3-18.6c-3.1 4-6.6 8.3-10.5 12.7c1.4 4.3 2.8 8.5 4 12.5c.9 3 1.8 5.8 2.6 8.6c3 9.8 5.5 18.2 8.6 25.9c3.9 9.8 7.4 15.4 10.8 18.5c2.6 2.4 5.9 4.3 12.8 4.3c8.7 0 16.9-4.2 33.7-13.2c15-8 35.7-18.8 62.3-18.8c13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.4 0-24.7 5.2-39.7 13.2c-1 .6-2.1 1.1-3.2 1.7C559.9 414 541.4 424 520 424c-18.4 0-33.6-6.1-45.5-17.2c-11.1-10.3-17.9-23.7-22.7-36c-3.6-9-6.7-19.1-9.5-28.5c-16.4 12.3-36.1 23.6-58.9 31.3c3.6 10.8 8.4 23.5 14.4 36.2c7.5 15.9 16.2 30.4 25.8 40.5C433 460.5 441.2 464 448 464c13.3 0 24 10.7 24 24s-10.7 24-24 24c-25.2 0-45-13.5-59.5-28.8c-14.5-15.4-25.7-34.9-34.2-53c-8-17-14.1-33.8-18.3-46.9c-5.2.4-10.6.6-16 .6s-10.8-.2-16-.6c-4.2 13-10.3 29.9-18.3 46.9c-8.5 18.1-19.8 37.6-34.2 53C237 498.5 217.2 512 192 512c-13.3 0-24-10.7-24-24s10.7-24 24-24c6.8 0 15-3.5 24.5-13.7c9.5-10.1 18.3-24.6 25.8-40.5c5.9-12.6 10.7-25.4 14.4-36.2c-22.8-7.7-42.5-19-58.9-31.3c-2.9 9.4-6 19.5-9.5 28.5c-4.8 12.2-11.6 25.6-22.7 36c-12 11.1-27.2 17.2-45.6 17.2c-21.4 0-39.9-10-53.1-17.1c-1.1-.6-2.2-1.2-3.2-1.7c-15-8-26.3-13.2-39.7-13.2c-13.3 0-24-10.7-24-24s10.7-24 24-24c26.6 0 47.3 10.8 62.3 18.8c16.8 9 25 13.2 33.7 13.2c6.8 0 10.2-1.9 12.8-4.3c3.4-3.2 7-8.8 10.8-18.5c3-7.7 5.6-16.1 8.6-25.9c.8-2.7 1.7-5.6 2.6-8.6c1.2-4 2.6-8.2 4-12.5c-3.9-4.5-7.4-8.8-10.5-12.7c-11.4 10-25.8 18.5-44.3 18.5c-17.5 0-30.7-7.4-40.4-16.7c-8.4-8.1-14.8-18.3-19.4-25.7l-.6-.9c-5.4-8.6-8.8-13.9-12.5-17.4c-2.8-2.7-4.6-3.3-7.1-3.3c-13.3 0-24-10.7-24-24s10.7-24 24-24c17.5 0 30.7 7.4 40.4 16.7c8.4 8.1 14.8 18.3 19.4 25.7l.6.9c5.4 8.6 8.8 13.9 12.5 17.4c2.8 2.7 4.6 3.3 7.1 3.3c3.3 0 8.7-1.7 19.4-13.4c5.1-5.6 10.4-12.3 16.7-20.4l1.4-1.8c5.8-7.4 12.2-15.7 19.3-24c13.8-16.2 30.3-32.8 51.4-46.4l-15.1-30.2c-1.7.1-3.4.2-5.1.2c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64m208 0a16 16 0 1 0-32 0a16 16 0 1 0 32 0"></svg:path>`,
})
export class Fa6SolidSpaghettiMonsterFlyingIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSpellCheckIcon],svg[fa6-solid-spell-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 0C99.1 0 87.4 7.8 82.5 19.7l-66.7 160l-13.3 32c-6.8 16.3.9 35 17.2 41.8s35-.9 41.8-17.2l5.2-12.3h90.7l5.1 12.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-13.3-32l-66.7-160C136.6 7.8 124.9 0 112 0m18.7 160H93.4l18.6-44.8zM256 32v192c0 17.7 14.3 32 32 32h80c44.2 0 80-35.8 80-80c0-23.1-9.8-43.8-25.4-58.4c6-11.2 9.4-24 9.4-37.6c0-44.2-35.8-80-80-80h-64c-17.7 0-32 14.3-32 32m96 64h-32V64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16m-32 64h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48zm246.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L352 434.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0z"></svg:path>`,
})
export class Fa6SolidSpellCheckIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSpiderIcon],svg[fa6-solid-spider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M158.4 32.6c4.8-12.4-1.4-26.3-13.8-31s-26.3 1.4-31 13.8L81.1 100c-7.9 20.7-3 44.1 12.7 59.7l57.4 57.4l-80.4-26.8c-2.4-.8-4.3-2.7-5.1-5.1l-18.9-56.8C42.6 115.8 29 109 16.4 113.2S-3 131 1.2 143.6l18.9 56.8c5.6 16.7 18.7 29.8 35.4 35.4l60.6 20.2l-60.5 20.2c-16.7 5.6-29.8 18.7-35.4 35.4l-19 56.8C-3 381 3.8 394.6 16.4 398.8s26.2-2.6 30.4-15.2l18.9-56.8c.8-2.4 2.7-4.3 5.1-5.1l80.4-26.8l-57.5 57.4C78.1 368 73.1 391.4 81.1 412l32.5 84.6c4.8 12.4 18.6 18.5 31 13.8s18.5-18.6 13.8-31l-32.5-84.6c-1.1-3-.4-6.3 1.8-8.5l32.3-32.4c1 52.1 43.6 94.1 96 94.1s95-41.9 96-94.1l32.3 32.3c2.2 2.2 2.9 5.6 1.8 8.5l-32.5 84.6c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8l32.5-84.5c7.9-20.7 3-44.1-12.7-59.7l-57.4-57.4l80.4 26.8c2.4.8 4.3 2.7 5.1 5.1l18.9 56.8c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-18.9-56.8c-5.6-16.7-18.7-29.8-35.4-35.4L395.9 256l60.5-20.2c16.7-5.6 29.8-18.7 35.4-35.4l18.9-56.8c4.2-12.6-2.6-26.2-15.2-30.4s-26.2 2.6-30.4 15.2l-18.9 56.8c-.8 2.4-2.7 4.3-5.1 5.1l-80.4 26.8l57.4-57.4c15.6-15.6 20.6-39 12.7-59.7l-32.4-84.6c-4.8-12.4-18.6-18.6-31-13.8s-18.5 18.6-13.8 31l32.5 84.6c1.1 3 .4 6.3-1.8 8.5L336 174.1V160c0-31.8-18.6-59.3-45.5-72.2c-9.1-4.4-18.5 3.3-18.5 13.4V112c0 8.8-7.2 16-16 16s-16-7.2-16-16v-10.8c0-10.1-9.4-17.7-18.5-13.4c-26.9 12.9-45.5 40.4-45.5 72.2v14.1l-48.3-48.3c-2.2-2.2-2.9-5.6-1.8-8.5l32.5-84.6z"></svg:path>`,
})
export class Fa6SolidSpiderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSpinnerIcon],svg[fa6-solid-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M304 48a48 48 0 1 0-96 0a48 48 0 1 0 96 0m0 416a48 48 0 1 0-96 0a48 48 0 1 0 96 0M48 304a48 48 0 1 0 0-96a48 48 0 1 0 0 96m464-48a48 48 0 1 0-96 0a48 48 0 1 0 96 0M142.9 437A48 48 0 1 0 75 369.1a48 48 0 1 0 67.9 67.9m0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437a48 48 0 1 0 67.9-67.9a48 48 0 1 0-67.9 67.9"></svg:path>`,
})
export class Fa6SolidSpinnerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSplotchIcon],svg[fa6-solid-splotch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m208.5 62.3l28.1-36.9C248.8 9.4 267.8 0 288 0c28.5 0 53.6 18.7 61.8 46l17.8 59.4c10.3 34.4 36.1 62 69.8 74.6l39.8 14.9c20.9 7.9 34.8 27.9 34.8 50.2c0 16.9-7.9 32.8-21.5 42.9l-67.3 50.5c-24.3 18.2-37.2 47.9-33.8 78.1l2.5 22.7c4.3 38.7-26 72.6-65 72.6c-14.8 0-29.3-5.1-40.8-14.3l-55.4-44.3c-4.5-3.6-9.3-6.7-14.5-9.2c-15.8-7.9-33.7-10.4-51-7.3l-82.8 15.1C47.8 458.2 16 431.6 16 396.5c0-13.2 4.7-26 13.1-36.2l11.2-13.4c14.6-17.4 22.6-39.4 22.6-62.1c0-18.8-5.5-37.2-15.8-53L8.8 173.5C3.1 164.7 0 154.4 0 143.9c0-33.4 30.1-58.8 63-53.2l51.3 8.7c35.9 6.1 72.2-8.2 94.2-37.1"></svg:path>`,
})
export class Fa6SolidSplotchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSpoonIcon],svg[fa6-solid-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.8 220.9c-14.5-17.6-21.8-39.2-21.8-60.8C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192c-21.6 0-43.2-7.3-60.8-21.8L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3z"></svg:path>`,
})
export class Fa6SolidSpoonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSprayCanIcon],svg[fa6-solid-spray-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 0h64c17.7 0 32 14.3 32 32v96H96V32c0-17.7 14.3-32 32-32M0 256c0-53 43-96 96-96h128c53 0 96 43 96 96v208c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm240 80a80 80 0 1 0-160 0a80 80 0 1 0 160 0m16-272a32 32 0 1 1 64 0a32 32 0 1 1-64 0m128-32a32 32 0 1 1 0 64a32 32 0 1 1 0-64m64 32a32 32 0 1 1 64 0a32 32 0 1 1-64 0m32 64a32 32 0 1 1 0 64a32 32 0 1 1 0-64m-32 128a32 32 0 1 1 64 0a32 32 0 1 1-64 0m-64-128a32 32 0 1 1 0 64a32 32 0 1 1 0-64"></svg:path>`,
})
export class Fa6SolidSprayCanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSprayCanSparklesIcon],svg[fa6-solid-spray-can-sparkles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 32v96h128V32c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32m0 128c-53 0-96 43-96 96v208c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V256c0-53-43-96-96-96zm64 96a80 80 0 1 1 0 160a80 80 0 1 1 0-160M384 48c0-1.4-1-3-2.2-3.6L352 32L339.6 2.2C339 1 337.4 0 336 0s-3 1-3.6 2.2L320 32l-29.8 12.4c-1.2.6-2.2 2.2-2.2 3.6s1 3 2.2 3.6L320 64l12.4 29.8c.6 1.2 2.2 2.2 3.6 2.2s3-1 3.6-2.2L352 64l29.8-12.4c1.2-.6 2.2-2.2 2.2-3.6m76.4 45.8c.6 1.2 2.2 2.2 3.6 2.2s3-1 3.6-2.2L480 64l29.8-12.4c1.2-.6 2.2-2.2 2.2-3.6s-1-3-2.2-3.6L480 32L467.6 2.2C467 1 465.4 0 464 0s-3 1-3.6 2.2L448 32l-29.8 12.4c-1.2.6-2.2 2.2-2.2 3.6s1 3 2.2 3.6L448 64zm7.2 100.4c-.6-1.2-2.2-2.2-3.6-2.2s-3 1-3.6 2.2L448 224l-29.8 12.4c-1.2.6-2.2 2.2-2.2 3.6s1 3 2.2 3.6L448 256l12.4 29.8c.6 1.2 2.2 2.2 3.6 2.2s3-1 3.6-2.2L480 256l29.8-12.4c1.2-.6 2.2-2.2 2.2-3.6s-1-3-2.2-3.6L480 224zM448 144c0-1.4-1-3-2.2-3.6L416 128l-12.4-29.8C403 97 401.4 96 400 96s-3 1-3.6 2.2L384 128l-29.8 12.4c-1.2.6-2.2 2.2-2.2 3.6s1 3 2.2 3.6L384 160l12.4 29.8c.6 1.2 2.2 2.2 3.6 2.2s3-1 3.6-2.2L416 160l29.8-12.4c1.2-.6 2.2-2.2 2.2-3.6"></svg:path>`,
})
export class Fa6SolidSprayCanSparklesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareIcon],svg[fa6-solid-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"></svg:path>`,
})
export class Fa6SolidSquareIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareArrowUpRightIcon],svg[fa6-solid-square-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135L288 328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24z"></svg:path>`,
})
export class Fa6SolidSquareArrowUpRightIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareBinaryIcon],svg[fa6-solid-square-binary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 4c-24.3 0-44 19.7-44 44v48c0 24.3 19.7 44 44 44h32c24.3 0 44-19.7 44-44v-48c0-24.3-19.7-44-44-44zm-4 44c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v48c0 2.2-1.8 4-4 4h-32c-2.2 0-4-1.8-4-4zm140-44c-11 0-20 9-20 20c0 9.7 6.9 17.7 16 19.6V216c0 11 9 20 20 20s20-9 20-20v-96c0-11-9-20-20-20zM132 296c0 9.7 6.9 17.7 16 19.6V392c0 11 9 20 20 20s20-9 20-20v-96c0-11-9-20-20-20h-16c-11 0-20 9-20 20m96 24v48c0 24.3 19.7 44 44 44h32c24.3 0 44-19.7 44-44v-48c0-24.3-19.7-44-44-44h-32c-24.3 0-44 19.7-44 44m44-4h32c2.2 0 4 1.8 4 4v48c0 2.2-1.8 4-4 4h-32c-2.2 0-4-1.8-4-4v-48c0-2.2 1.8-4 4-4"></svg:path>`,
})
export class Fa6SolidSquareBinaryIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareCaretDownIcon],svg[fa6-solid-square-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 480c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4h208c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7"></svg:path>`,
})
export class Fa6SolidSquareCaretDownIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareCaretLeftIcon],svg[fa6-solid-square-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm128-160c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22v208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6"></svg:path>`,
})
export class Fa6SolidSquareCaretLeftIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareCaretRightIcon],svg[fa6-solid-square-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zM320 256c0 6.7-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4S160 369.5 160 360V152c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6"></svg:path>`,
})
export class Fa6SolidSquareCaretRightIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareCaretUpIcon],svg[fa6-solid-square-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm160 128c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9S337.5 320 328 320H120c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7"></svg:path>`,
})
export class Fa6SolidSquareCaretUpIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareCheckIcon],svg[fa6-solid-square-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm273 177L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></svg:path>`,
})
export class Fa6SolidSquareCheckIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareEnvelopeIcon],svg[fa6-solid-square-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm154 239.7L64.2 172.4C66 156.4 79.5 144 96 144h256c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8m29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9"></svg:path>`,
})
export class Fa6SolidSquareEnvelopeIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareFullIcon],svg[fa6-solid-square-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h512v512H0z"></svg:path>`,
})
export class Fa6SolidSquareFullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareHIcon],svg[fa6-solid-square-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm272 120v208c0 13.3-10.7 24-24 24s-24-10.7-24-24v-80H160v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24s24 10.7 24 24v80h128v-80c0-13.3 10.7-24 24-24s24 10.7 24 24"></svg:path>`,
})
export class Fa6SolidSquareHIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareMinusIcon],svg[fa6-solid-square-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm88 200h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24"></svg:path>`,
})
export class Fa6SolidSquareMinusIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareNfiIcon],svg[fa6-solid-square-nfi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm75.7 64.6C68.8 162.5 64 168.8 64 176v160c0 8.8 7.2 16 16 16s16-7.2 16-16V233.8l66.3 110.5c3.7 6.2 11.1 9.1 18 7.2s11.7-8.2 11.7-15.4v-160c0-8.8-7.2-16-16-16s-16 7.2-16 16v102.2L93.7 167.8c-3.7-6.2-11.1-9.1-18-7.2M224 176v160c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-32h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m160 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16z"></svg:path>`,
})
export class Fa6SolidSquareNfiIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareParkingIcon],svg[fa6-solid-square-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm128 224h48c17.7 0 32-14.3 32-32s-14.3-32-32-32h-48zm48 64h-48v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V168c0-22.1 17.9-40 40-40h72c53 0 96 43 96 96s-43 96-96 96"></svg:path>`,
})
export class Fa6SolidSquareParkingIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquarePenIcon],svg[fa6-solid-square-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm261.8 107.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-21.4 21.4l-71-71l21.4-21.4c15.6-15.6 40.9-15.6 56.6 0M119.9 289l105.2-105.2l71 71l-105.2 105.1c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"></svg:path>`,
})
export class Fa6SolidSquarePenIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquarePersonConfinedIcon],svg[fa6-solid-square-person-confined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm96 112a48 48 0 1 1 96 0a48 48 0 1 1-96 0m80 104c0-30.9 25.1-56 56-56s56 25.1 56 56v102.1c0 36.4-29.5 65.9-65.9 65.9c-17.5 0-34.3-6.9-46.6-19.3L184.8 342l-28.1 56.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l48-96c4.6-9.2 13.3-15.6 23.5-17.3s20.5 1.7 27.8 9l41.2 41.3z"></svg:path>`,
})
export class Fa6SolidSquarePersonConfinedIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquarePhoneIcon],svg[fa6-solid-square-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3z"></svg:path>`,
})
export class Fa6SolidSquarePhoneIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquarePhoneFlipIcon],svg[fa6-solid-square-phone-flip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zm-90.7 96.7c-9.7-2.6-19.9 2.3-23.7 11.6l-20 48c-3.4 8.2-1 17.6 5.8 23.2l24.6 20.2c-16.6 35.2-45.1 63.7-80.3 80.3l-20.2-24.7c-5.6-6.8-15-9.2-23.2-5.8l-48 20c-9.3 3.9-14.2 14-11.6 23.7l12 44C111.1 378 119 384 128 384c123.7 0 224-100.3 224-224c0-9-6-16.9-14.7-19.3z"></svg:path>`,
})
export class Fa6SolidSquarePhoneFlipIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquarePlusIcon],svg[fa6-solid-square-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm136 312v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24"></svg:path>`,
})
export class Fa6SolidSquarePlusIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquarePollHorizontalIcon],svg[fa6-solid-square-poll-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zm-192 64c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32m64 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32zM192 352c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32"></svg:path>`,
})
export class Fa6SolidSquarePollHorizontalIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquarePollVerticalIcon],svg[fa6-solid-square-poll-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-17.7 14.3-32 32-32m64-64c0-17.7 14.3-32 32-32s32 14.3 32 32v192c0 17.7-14.3 32-32 32s-32-14.3-32-32zm128 128c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32c0-17.7 14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidSquarePollVerticalIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareRootVariableIcon],svg[fa6-solid-square-root-variable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M282.6 78.1c8-27.3 33-46.1 61.4-46.1h200c17.7 0 32 14.3 32 32s-14.3 32-32 32H344L238.7 457c-3.6 12.3-14.1 21.2-26.8 22.8s-25.1-4.6-31.5-15.6L77.6 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h45.6c22.8 0 43.8 12.1 55.3 31.8l65.2 111.8zm110.8 155.3c12.5-12.5 32.8-12.5 45.3 0l41.3 41.3l41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L525.3 320l41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L480 365.3l-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l41.4-41.4l-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3z"></svg:path>`,
})
export class Fa6SolidSquareRootVariableIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareRssIcon],svg[fa6-solid-square-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 104c0-13.3 10.7-24 24-24c137 0 248 111 248 248c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200c-13.3 0-24-10.7-24-24m0 96c0-13.3 10.7-24 24-24c83.9 0 152 68.1 152 152c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104c-13.3 0-24-10.7-24-24m0 120a32 32 0 1 1 64 0a32 32 0 1 1-64 0"></svg:path>`,
})
export class Fa6SolidSquareRssIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareShareNodesIcon],svg[fa6-solid-square-share-nodes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm320 128c0 35.3-28.7 64-64 64c-15.4 0-29.5-5.4-40.6-14.5L194.1 256l85.3 46.5c11-9.1 25.2-14.5 40.6-14.5c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64c0-2.5.1-4.9.4-7.3L174.5 300c-11.7 12.3-28.2 20-46.5 20c-35.3 0-64-28.7-64-64s28.7-64 64-64c18.3 0 34.8 7.7 46.5 20l81.9-44.7c-.3-2.4-.4-4.9-.4-7.3c0-35.3 28.7-64 64-64s64 28.7 64 64"></svg:path>`,
})
export class Fa6SolidSquareShareNodesIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareUpRightIcon],svg[fa6-solid-square-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM160 160c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l40 40l-71 71c-3.7 3.7-5.7 8.6-5.7 13.7s2 10 5.7 13.7l36.7 36.7c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7l71-71l40 40c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8v-144c0-8.8-7.2-16-16-16h-144z"></svg:path>`,
})
export class Fa6SolidSquareUpRightIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareVirusIcon],svg[fa6-solid-square-virus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm159.8 61.7c13.3 0 24 10.7 24 24c0 29.3 35.4 43.9 56.1 23.2c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-20.7 20.7-6 56.1 23.2 56.1c13.3 0 24 10.7 24 24s-10.7 24-24 24c-29.3 0-43.9 35.4-23.2 56.1c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-20.7-20.7-56.1-6-56.1 23.2c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-29.3-35.4-43.9-56.1-23.2c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9c20.7-20.7 6-56.1-23.2-56.1c-13.3 0-24-10.7-24-24s10.7-24 24-24c29.3 0 43.9-35.4 23.2-56.1c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0c20.7 20.7 56.1 6 56.1-23.2c0-13.3 10.7-24 24-24M192 256a32 32 0 1 0 0-64a32 32 0 1 0 0 64m88 32a24 24 0 1 0-48 0a24 24 0 1 0 48 0"></svg:path>`,
})
export class Fa6SolidSquareVirusIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSquareXmarkIcon],svg[fa6-solid-square-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47l47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47l47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47l-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47l-47-47c-9.4-9.4-9.4-24.6 0-33.9"></svg:path>`,
})
export class Fa6SolidSquareXmarkIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStaffAesculapiusIcon],svg[fa6-solid-staff-aesculapius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222.5 48H288c53 0 96 42.98 96 96c0 53-43 96-96 96h-40v-80h40c8.8 0 16-7.2 16-16s-7.2-16-16-16h-68l-4.5 144H256c53 0 96 42.1 96 96c0 53-43 96-96 96h-16v-80h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-43.9l-3.6 144c-.3 8.9-7.6 16-17.4 16c-8 0-15.3-7.1-15.6-16l-1-32h-39.4c-21.2 0-40-17.9-40-40s18.8-40 40-40h36l-1-32h-19c-52.12 0-96-43-96-96c0-47.6 35.5-87.1 80-94.7V256c0 8.8 8.1 16 16 16h17.4L164 128h-41.4c-9 18.9-28.26 32-50.6 32H56c-30.93 0-56-25.1-56-56c0-30.93 25.07-56 56-56h105.5l-1.4-16.02v-1.93C161.5 13.43 175.1 0 192 0s30.5 13.43 31 30.05v1.93L222.5 48zM79.1 96c0-8.84-6.26-16-16-16c-7.94 0-16 7.16-16 16c0 8.8 8.06 16 16 16c9.74 0 16-7.2 16-16z"></svg:path>`,
})
export class Fa6SolidStaffAesculapiusIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStaffSnakeIcon],svg[fa6-solid-staff-snake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.6 43.2l-.1 4.8H288c53 0 96 43 96 96s-43 96-96 96h-40v-80h40c8.8 0 16-7.2 16-16s-7.2-16-16-16h-68l-4.5 144H256c53 0 96 43 96 96s-43 96-96 96h-16v-80h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-43l-3.1 99.5l-1.4 43.5v1c-.3 8.9-7.6 16-16.5 16s-16.2-7.1-16.5-16v-1l-1-31H136c-22.1 0-40-17.9-40-40s17.9-40 40-40h36l-1-32h-19c-53 0-96-43-96-96c0-47.6 34.6-87.1 80-94.7V256c0 8.8 7.2 16 16 16h16.5L164 128h-41.4c-9 18.9-28.3 32-50.6 32H56c-30.9 0-56-25.1-56-56s25.1-56 56-56h105.5l-.1-4.8L161 32v-1.9c.5-16.6 14.1-30 31-30s30.5 13.4 31 30V32zM64 112a16 16 0 1 0 0-32a16 16 0 1 0 0 32"></svg:path>`,
})
export class Fa6SolidStaffSnakeIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStairsIcon],svg[fa6-solid-stairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96v96c0 17.7-14.3 32-32 32h-96v96c0 17.7-14.3 32-32 32h-96v96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h96v-96c0-17.7 14.3-32 32-32h96v-96c0-17.7 14.3-32 32-32h96z"></svg:path>`,
})
export class Fa6SolidStairsIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStampIcon],svg[fa6-solid-stamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M312 201.8c0-17.4 9.2-33.2 19.9-47C344.5 138.5 352 118.1 352 96c0-53-43-96-96-96s-96 43-96 96c0 22.1 7.5 42.5 20.1 58.8c10.7 13.8 19.9 29.6 19.9 47c0 29.9-24.3 54.2-54.2 54.2H112C50.1 256 0 306.1 0 368c0 20.9 13.4 38.7 32 45.3V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-50.7c18.6-6.6 32-24.4 32-45.3c0-61.9-50.1-112-112-112h-33.8c-29.9 0-54.2-24.3-54.2-54.2M416 416v32H96v-32z"></svg:path>`,
})
export class Fa6SolidStampIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStaplerIcon],svg[fa6-solid-stapler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 299.3V432c0 26.5-21.5 48-48 48H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h384v-48H96c-17.7 0-32-14.3-32-32V219.4L33.8 214C14.2 210.5 0 193.5 0 173.7c0-8.9 2.9-17.5 8.2-24.6l35.6-47.5C76.7 57.8 128.2 32 182.9 32c27 0 53.6 6.3 77.8 18.4l326.2 163.1c32.6 16.2 53.1 49.5 53.1 85.8M448 304v-16l-320-57.1V304z"></svg:path>`,
})
export class Fa6SolidStaplerIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStarIcon],svg[fa6-solid-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"></svg:path>`,
})
export class Fa6SolidStarIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStarAndCrescentIcon],svg[fa6-solid-star-and-crescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256C0 114.6 114.6 0 256 0c33 0 64.6 6.3 93.6 17.7c7.4 2.9 11.5 10.7 9.8 18.4s-8.8 13-16.7 12.4c-4.8-.3-9.7-.5-14.6-.5c-114.9 0-208 93.1-208 208s93.1 208 208 208c4.9 0 9.8-.2 14.6-.5c7.9-.5 15 4.7 16.7 12.4s-2.4 15.5-9.8 18.4C320.6 505.7 289 512 256 512C114.6 512 0 397.4 0 256m375.4-118.6c3.5-7.1 13.7-7.1 17.2 0l31.5 63.8c1.4 2.8 4.1 4.8 7.2 5.3l70.4 10.2c7.9 1.1 11 10.8 5.3 16.4l-50.9 49.6c-2.3 2.2-3.3 5.4-2.8 8.5l12 70.1c1.3 7.8-6.9 13.8-13.9 10.1l-63-33.1c-2.8-1.5-6.1-1.5-8.9 0l-63 33.1c-7 3.7-15.3-2.3-13.9-10.1l12-70.1c.5-3.1-.5-6.3-2.8-8.5L261 233.1c-5.7-5.6-2.6-15.2 5.3-16.4l70.4-10.2c3.1-.5 5.8-2.4 7.2-5.3z"></svg:path>`,
})
export class Fa6SolidStarAndCrescentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStarHalfIcon],svg[fa6-solid-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 0c-12.2.1-23.3 7-28.6 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3L288 439.8zm141.9 512c1.1.1 2.1.1 3.2 0z"></svg:path>`,
})
export class Fa6SolidStarHalfIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStarHalfStrokeIcon],svg[fa6-solid-star-half-stroke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m288 376.4l.1-.1l26.4 14.1l85.2 45.5l-16.5-97.6l-4.8-28.7l20.7-20.5l70.1-69.3l-96.1-14.2l-29.3-4.3l-12.9-26.6l-42.8-87.8l-.1.3zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3l-128.3-68.5l-128.3 68.5c-10.8 5.7-23.9 4.8-33.8-2.3s-14.9-19.3-12.9-31.3L137.8 329L33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3L259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3l143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329z"></svg:path>`,
})
export class Fa6SolidStarHalfStrokeIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStarOfDavidIcon],svg[fa6-solid-star-of-david-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M404.2 309.5L383.1 344h42.3l-21.1-34.5zM371.4 256l-54-88H194.6l-54 88l54 88h122.8zm65.7 0l53.4 87c3.6 5.9 5.5 12.7 5.5 19.6c0 20.7-16.8 37.4-37.4 37.4H348.8l-56.2 91.5c-7.8 12.8-21.7 20.5-36.6 20.5s-28.8-7.7-36.6-20.5L163.3 400H53.4C32.8 400 16 383.2 16 362.6c0-6.9 1.9-13.7 5.5-19.6l53.4-87l-53.4-87c-3.6-5.9-5.5-12.7-5.5-19.6c0-20.6 16.8-37.4 37.4-37.4h109.8l56.2-91.5C227.2 7.7 241.1 0 256 0s28.8 7.7 36.6 20.5l56.1 91.5h109.8c20.7 0 37.4 16.8 37.4 37.4c0 6.9-1.9 13.7-5.5 19.6L437 256zm-54-88l21.1 34.5l21.2-34.5zM283 112l-27-44l-27 44zm-154.1 56H86.6l21.1 34.5zm-21.1 141.5L86.6 344h42.3zM229 400l27 44l27-44z"></svg:path>`,
})
export class Fa6SolidStarOfDavidIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStarOfLifeIcon],svg[fa6-solid-star-of-life-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v140.9l122-70.4c15.3-8.8 34.9-3.6 43.7 11.7l16 27.7c8.8 15.3 3.6 34.9-11.7 43.7L352 256l122 70.4c15.3 8.8 20.6 28.4 11.7 43.7l-16 27.7c-8.8 15.3-28.4 20.6-43.7 11.7l-122-70.4V480c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V339.1L86 409.6c-15.3 8.8-34.9 3.6-43.7-11.7l-16-27.7c-8.8-15.3-3.6-34.9 11.7-43.7L160 256L38 185.6c-15.3-8.8-20.5-28.4-11.7-43.7l16-27.7c8.8-15.4 28.4-20.6 43.7-11.8l122 70.4z"></svg:path>`,
})
export class Fa6SolidStarOfLifeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSterlingSignIcon],svg[fa6-solid-sterling-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 160.4c0-35.5 28.8-64.4 64.4-64.4c6.9 0 13.8 1.1 20.4 3.3l81.2 27.1c16.8 5.6 34.9-3.5 40.5-20.2s-3.5-34.9-20.2-40.5L217 38.6c-13.1-4.4-26.8-6.6-40.6-6.6C105.5 32 48 89.5 48 160.4V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h16v44.5c0 17.4-4.7 34.5-13.7 49.4L4.6 431.5c-5.9 9.9-6.1 22.2-.4 32.2S20.5 480 32 480h256c17.7 0 32-14.3 32-32s-14.3-32-32-32H88.5l.7-1.1c14.9-24.9 22.8-53.4 22.8-82.4V288h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H112z"></svg:path>`,
})
export class Fa6SolidSterlingSignIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStethoscopeIcon],svg[fa6-solid-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7c26.1 8.7 43.7 33.1 43.7 60.7V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112v-70.7c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2M480 224a32 32 0 1 0 0-64a32 32 0 1 0 0 64"></svg:path>`,
})
export class Fa6SolidStethoscopeIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStopIcon],svg[fa6-solid-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"></svg:path>`,
})
export class Fa6SolidStopIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStopwatchIcon],svg[fa6-solid-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16v34.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32S289.7 0 272 0zm72 192v128c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24"></svg:path>`,
})
export class Fa6SolidStopwatchIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStopwatch20Icon],svg[fa6-solid-stopwatch-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16v34.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32S289.7 0 272 0zm112 204c28.7 0 52 23.3 52 52v96c0 28.7-23.3 52-52 52s-52-23.3-52-52v-96c0-28.7 23.3-52 52-52m-12 52v96c0 6.6 5.4 12 12 12s12-5.4 12-12v-96c0-6.6-5.4-12-12-12s-12 5.4-12 12m-116.5-12c-5.4 0-10.2 3.5-11.9 8.6l-.6 1.7c-3.5 10.5-14.8 16.1-25.3 12.6s-16.1-14.8-12.6-25.3l.6-1.7c7.2-21.5 27.2-35.9 49.8-35.9c29 0 52.5 23.5 52.5 52.5v2.2c0 13.4-4.9 26.4-13.8 36.4l-39 43.9c-6.2 7-10 15.7-10.9 24.9h43.8c11 0 20 9 20 20s-9 20-20 20h-64c-11 0-20-9-20-20v-15.7c0-20.6 7.5-40.4 21.2-55.8l39-43.9c2.4-2.7 3.7-6.2 3.7-9.8v-2.2c0-6.9-5.6-12.5-12.5-12.5"></svg:path>`,
})
export class Fa6SolidStopwatch20Icon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStoreIcon],svg[fa6-solid-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m547.6 103.8l-57.3-90.7C485.2 5 476.1 0 466.4 0H109.6c-9.7 0-18.8 5-23.9 13.1l-57.4 90.7c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1.8 12.1.8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29s49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zm-47.9 151.1h-.1c-5.3.7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1H76c-4.1-.6-8.1-1.3-12-2.3V448c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V252.6c-4 1-8 1.8-12.3 2.3"></svg:path>`,
})
export class Fa6SolidStoreIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStoreSlashIcon],svg[fa6-solid-store-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.8-68V252.6c-4 1-8 1.8-12.3 2.3h-.1c-5.3.7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V351L301.2 210.7c7-4.4 13.3-9.7 18.8-15.7c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4l-57.5-90.7C517.2 5 508.1 0 498.4 0H141.6c-9.7 0-18.8 5-23.9 13.1L95 49.1zm73.4 218.1c4 .5 8.1.8 12.1.8c11 0 21.4-2 31-5.6L48.9 134.5c-6.1 40.6 19.5 82.8 63.3 88.7M160 384V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1h-.1c-4.1-.6-8.1-1.3-12-2.3V448c0 35.3 28.7 64 64 64h320c12.9 0 24.8-3.8 34.9-10.3L365.5 384z"></svg:path>`,
})
export class Fa6SolidStoreSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStreetViewIcon],svg[fa6-solid-street-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 64a64 64 0 1 0-128 0a64 64 0 1 0 128 0m-96 96c-35.3 0-64 28.7-64 64v48c0 17.7 14.3 32 32 32h1.8l11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5h38.7c16.3 0 30-12.3 31.8-28.5l11-99.5h1.8c17.7 0 32-14.3 32-32v-48c0-35.3-28.7-64-64-64zm-91.7 234.2c13-2.4 21.7-14.9 19.3-27.9s-14.9-21.7-27.9-19.3c-32.4 5.9-60.9 14.2-82 24.8c-10.5 5.3-20.3 11.7-27.8 19.6C6.4 399.5 0 410.5 0 424c0 21.4 15.5 36.1 29.1 45c14.7 9.6 34.3 17.3 56.4 23.4C130.2 504.7 190.4 512 256 512s125.8-7.3 170.4-19.6c22.1-6.1 41.8-13.8 56.4-23.4c13.7-8.9 29.1-23.6 29.1-45c0-13.5-6.4-24.5-14-32.6c-7.5-7.9-17.3-14.3-27.8-19.6c-21-10.6-49.5-18.9-82-24.8c-13-2.4-25.5 6.3-27.9 19.3s6.3 25.5 19.3 27.9c30.2 5.5 53.7 12.8 69 20.5c3.2 1.6 5.8 3.1 7.9 4.5c3.6 2.4 3.6 7.2 0 9.6c-8.8 5.7-23.1 11.8-43 17.3C374.3 457 318.5 464 256 464s-118.3-7-157.7-17.9c-19.9-5.5-34.2-11.6-43-17.3c-3.6-2.4-3.6-7.2 0-9.6c2.1-1.4 4.8-2.9 7.9-4.5c15.3-7.7 38.8-14.9 69-20.5z"></svg:path>`,
})
export class Fa6SolidStreetViewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStrikethroughIcon],svg[fa6-solid-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161.3 144c3.2-17.2 14-30.1 33.7-38.6c21.1-9 51.8-12.3 88.6-6.5c11.9 1.9 48.8 9.1 60.1 12c17.1 4.5 34.6-5.6 39.2-22.7s-5.6-34.6-22.7-39.2c-14.3-3.8-53.6-11.4-66.6-13.4c-44.7-7-88.3-4.2-123.7 10.9c-36.5 15.6-64.4 44.8-71.8 87.3c-.1.6-.2 1.1-.2 1.7c-2.8 23.9.5 45.6 10.1 64.6c4.5 9 10.2 16.9 16.7 23.9H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32H270.1l-.4-.1l-1.1-.3c-36-10.8-65.2-19.6-85.2-33.1c-9.3-6.3-15-12.6-18.2-19.1c-3.1-6.1-5.2-14.6-3.8-27.4zm187.6 193.2c2.7 6.5 4.4 15.8 1.9 30.1c-3 17.6-13.8 30.8-33.9 39.4c-21.1 9-51.7 12.3-88.5 6.5c-18-2.9-49.1-13.5-74.4-22.1c-5.6-1.9-11-3.7-15.9-5.4c-16.8-5.6-34.9 3.5-40.5 20.3s3.5 34.9 20.3 40.5c3.6 1.2 7.9 2.7 12.7 4.3c24.9 8.5 63.6 21.7 87.6 25.6h.2c44.7 7 88.3 4.2 123.7-10.9c36.5-15.6 64.4-44.8 71.8-87.3c3.6-21 2.7-40.4-3.1-58.1h-75.7c7 5.6 11.4 11.2 13.9 17.2z"></svg:path>`,
})
export class Fa6SolidStrikethroughIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidStroopwafelIcon],svg[fa6-solid-stroopwafel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0M312.6 63.7c-6.2-6.2-16.4-6.2-22.6 0l-34 33.9l-33.9-33.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l33.9 33.9l-45.3 45.3l-56.6-56.6c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l56.6 56.6l-45.3 45.3l-33.9-34c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l33.9 34l-33.9 33.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l33.9-33.9l45.3 45.3l-56.6 56.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l56.6-56.6l45.3 45.3l-33.9 33.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l33.9-33.9l33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-33.9-33.9l45.3-45.3l56.6 56.6c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-56.6-56.6l45.3-45.3l33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L414.4 256l33.9-33.9c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-33.9 33.9l-45.3-45.3l56.6-56.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-56.6 56.6l-45.3-45.3l33.9-33.9c6.2-6.2 6.2-16.4 0-22.6zM142.9 256l45.3-45.3l45.2 45.3l-45.3 45.3zm67.9 67.9l45.2-45.3l45.3 45.3l-45.3 45.2l-45.3-45.3zm67.8-67.9l45.3-45.3l45.2 45.3l-45.3 45.3zm22.6-67.9L256 233.4l-45.3-45.3l45.3-45.2l45.3 45.3z"></svg:path>`,
})
export class Fa6SolidStroopwafelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSubscriptIcon],svg[fa6-solid-subscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32h15.3l89.6 128l-89.6 128H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c10.4 0 20.2-5.1 26.2-13.6L176 311.8l85.8 122.6c6 8.6 15.8 13.6 26.2 13.6h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-15.3l-89.6-128l89.6-128H320c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32c-10.4 0-20.2 5.1-26.2 13.6L176 200.2L90.2 77.6C84.2 69.1 74.4 64 64 64zm448 256c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16c-15.8 7.9-22.2 27.1-14.3 42.9C393 361.5 404.3 368 416 368v80c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32z"></svg:path>`,
})
export class Fa6SolidSubscriptIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSuitcaseIcon],svg[fa6-solid-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 56v40h160V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8m-48 40V56c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v424H128zm-64 0h32v384H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64m384 384h-32V96h32c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64"></svg:path>`,
})
export class Fa6SolidSuitcaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSuitcaseMedicalIcon],svg[fa6-solid-suitcase-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8m-56 8v424h256V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56M96 96H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h32zm320 384h32c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-32zM224 208c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"></svg:path>`,
})
export class Fa6SolidSuitcaseMedicalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSuitcaseRollingIcon],svg[fa6-solid-suitcase-rolling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 56c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v72h-96zm176 72h-32V56c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56v72H64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64c0 17.7 14.3 32 32 32s32-14.3 32-32h128c0 17.7 14.3 32 32 32s32-14.3 32-32c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64m-208 96h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 128h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16"></svg:path>`,
})
export class Fa6SolidSuitcaseRollingIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSunIcon],svg[fa6-solid-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391l-19.9 107.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391L13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256L2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121l19.9-107.9c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1l90.3-62.3c4.5-3.1 10.2-3.7 15.2-1.6M160 256a96 96 0 1 1 192 0a96 96 0 1 1-192 0m224 0a128 128 0 1 0-256 0a128 128 0 1 0 256 0"></svg:path>`,
})
export class Fa6SolidSunIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSunPlantWiltIcon],svg[fa6-solid-sun-plant-wilt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 0c-6.3 0-12 3.7-14.6 9.5l-24.8 55.4l-56.7-21.7c-5.9-2.3-12.6-.8-17 3.6s-5.9 11.1-3.6 17L65 120.5L9.5 145.4C3.7 148 0 153.7 0 160s3.7 12 9.5 14.6l55.4 24.8l-21.7 56.7c-2.3 5.9-.8 12.6 3.6 17s11.1 5.9 17 3.6l56.7-21.7l24.8 55.4c2.6 5.8 8.3 9.5 14.6 9.5s12-3.7 14.6-9.5l24.8-55.4l56.7 21.7c5.9 2.3 12.6.8 17-3.6s5.9-11.1 3.6-17l-21.7-56.7l55.4-24.8c5.8-2.6 9.5-8.3 9.5-14.6s-3.7-12-9.5-14.6l-55.4-24.8l21.7-56.7c2.3-5.9.8-12.6-3.6-17s-11.1-5.9-17-3.6l-56.6 21.6l-24.8-55.4C172 3.7 166.3 0 160 0m0 96a64 64 0 1 1 0 128a64 64 0 1 1 0-128m32 64a32 32 0 1 0-64 0a32 32 0 1 0 64 0m312 16c0-17.7 14.3-32 32-32s32 14.3 32 32v53.4c-14.8 7.7-24 23.1-24 44.6c0 16.8 16 44 37.4 67.2c5.8 6.2 15.5 6.2 21.2 0C624 318 640 290.7 640 274c0-21.5-9.2-37-24-44.6V176c0-44.2-35.8-80-80-80s-80 35.8-80 80v22.7c-9.8-4.3-20.6-6.7-32-6.7c-44.2 0-80 35.8-80 80v21.4c-14.8 7.7-24 23.1-24 44.6c0 16.8 16 44 37.4 67.2c5.8 6.2 15.5 6.2 21.2 0C400 382 416 354.7 416 338c0-21.5-9.2-37-24-44.6V272c0-17.7 14.3-32 32-32s32 14.3 32 32v176H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h576c17.7 0 32-14.3 32-32s-14.3-32-32-32H504z"></svg:path>`,
})
export class Fa6SolidSunPlantWiltIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSuperscriptIcon],svg[fa6-solid-superscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 32c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16c-15.8 7.9-22.2 27.1-14.3 42.9C393 73.5 404.3 80 416 80v80c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32zM32 64C14.3 64 0 78.3 0 96s14.3 32 32 32h15.3l89.6 128l-89.6 128H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c10.4 0 20.2-5.1 26.2-13.6L176 311.8l85.8 122.6c6 8.6 15.8 13.6 26.2 13.6h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-15.3l-89.6-128l89.6-128H320c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32c-10.4 0-20.2 5.1-26.2 13.6L176 200.2L90.2 77.6C84.2 69.1 74.4 64 64 64z"></svg:path>`,
})
export class Fa6SolidSuperscriptIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSwatchbookIcon],svg[fa6-solid-swatchbook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 32C0 14.3 14.3 0 32 0h128c17.7 0 32 14.3 32 32v384c0 53-43 96-96 96S0 469 0 416zm223.6 393.9c.3-3.3.4-6.6.4-9.9V154l75.4-75.4c12.5-12.5 32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3zM182.8 512l192-192H480c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32zM128 64H64v64h64zM64 192v64h64v-64zm32 248a24 24 0 1 0 0-48a24 24 0 1 0 0 48"></svg:path>`,
})
export class Fa6SolidSwatchbookIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSynagogueIcon],svg[fa6-solid-synagogue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M309.8 3.7c5.9-4.9 14.6-4.9 20.5 0l121 100.8c18.2 15.2 28.7 37.7 28.7 61.5v346H352v-96c0-17.7-14.3-32-32-32s-32 14.3-32 32v96H160V166c0-23.7 10.5-46.3 28.8-61.5zM512 512V244.5l28.1-31.2c3-3.4 7.4-5.3 11.9-5.3s8.9 1.9 11.9 5.3l63.8 70.9c7.9 8.8 12.3 20.3 12.3 32.1V448c0 35.3-28.7 64-64 64zM128 244.5V512H64c-35.3 0-64-28.7-64-64V316.3c0-11.9 4.4-23.3 12.3-32.1l63.8-70.9c3-3.4 7.4-5.3 11.9-5.3s8.9 1.9 11.9 5.3zm199-120.2c-3.1-5.4-10.9-5.4-13.9 0l-15.9 28.1l-32.3-.3c-6.2-.1-10.1 6.7-7 12.1l16.4 27.8l-16.4 27.8c-3.2 5.4.7 12.1 7 12.1l32.3-.3l15.8 28.1c3.1 5.4 10.9 5.4 13.9 0l15.9-28.1l32.3.3c6.2.1 10.1-6.7 7-12.1L365.7 192l16.4-27.8c3.2-5.4-.7-12.1-7-12.1l-32.3.3z"></svg:path>`,
})
export class Fa6SolidSynagogueIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSyringeIcon],svg[fa6-solid-syringe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m441 7l32 32l32 32c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15l-38.2 38.1l55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-72-72L295 73c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l55 55L422.1 56L407 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM210.3 155.7l61.1-61.1c.3.3.6.7 1 1l16 16l56 56l56 56l16 16l1 1l-191 191a55.92 55.92 0 0 1-39.6 16.4H98l-57 57c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57v-88.8c0-14.9 5.9-29.1 16.4-39.6l43.3-43.3l57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57l41.4-41.4l57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57z"></svg:path>`,
})
export class Fa6SolidSyringeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTIcon],svg[fa6-solid-t-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h128v352c0 17.7 14.3 32 32 32s32-14.3 32-32V96h128c17.7 0 32-14.3 32-32s-14.3-32-32-32z"></svg:path>`,
})
export class Fa6SolidTIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTableIcon],svg[fa6-solid-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 256v-96h160v96zm0 64h160v96H64zm224 96v-96h160v96zm160-160H288v-96h160zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z"></svg:path>`,
})
export class Fa6SolidTableIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTableCellsIcon],svg[fa6-solid-table-cells-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm88 64v64H64V96zm56 0h88v64h-88zm240 0v64h-88V96zM64 224h88v64H64zm232 0v64h-88v-64zm64 0h88v64h-88zM152 352v64H64v-64zm56 0h88v64h-88zm240 0v64h-88v-64z"></svg:path>`,
})
export class Fa6SolidTableCellsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTableCellsColumnLockIcon],svg[fa6-solid-table-cells-column-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v65.1c-37.8 5.4-69.4 29.6-85.2 62.9H360v64h56v8.6c-19.1 11.1-32 31.7-32 55.4h-24v64h24v64H64c-35.3 0-64-28.7-64-64zm208 0v64h88V96zm240 0h-88v64h88zM208 224v64h88v-64zm0 128v64h88v-64zm320-112c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32m-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32z"></svg:path>`,
})
export class Fa6SolidTableCellsColumnLockIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTableCellsLargeIcon],svg[fa6-solid-table-cells-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 96v128H288V96zm0 192v128H288V288zm-224-64H64V96h160zM64 288h160v128H64zm0-256C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z"></svg:path>`,
})
export class Fa6SolidTableCellsLargeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTableCellsRowLockIcon],svg[fa6-solid-table-cells-row-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v65.1c-37.8 5.4-69.4 29.6-85.2 62.9H360v64h56v8.6c-19.1 11.1-32 31.7-32 55.4h-24v64h24v64H64c-35.3 0-64-28.7-64-64zm64 128v64h88v-64zm232 0h-88v64h88zM152 352H64v64h88zm56 0v64h88v-64zm320-112c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32m-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32z"></svg:path>`,
})
export class Fa6SolidTableCellsRowLockIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTableCellsRowUnlockIcon],svg[fa6-solid-table-cells-row-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v65.1c-37.8 5.4-69.4 29.6-85.2 62.9H360v64h56v8.6c-19.1 11.1-32 31.7-32 55.4h-24v64h24v64H64c-35.3 0-64-28.7-64-64zm64 128v64h88v-64zm232 0h-88v64h88zM152 352H64v64h88zm56 0v64h88v-64zm288-80v48h112c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32v-48c0-44.2 35.8-80 80-80s80 35.8 80 80h-48c0-17.7-14.3-32-32-32s-32 14.3-32 32"></svg:path>`,
})
export class Fa6SolidTableCellsRowUnlockIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTableColumnsIcon],svg[fa6-solid-table-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 64v256h160V160zm384 0H288v256h160z"></svg:path>`,
})
export class Fa6SolidTableColumnsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTableListIcon],svg[fa6-solid-table-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 0v64h64V96zm384 0H192v64h256zM64 224v64h64v-64zm384 0H192v64h256zM64 352v64h64v-64zm384 0H192v64h256z"></svg:path>`,
})
export class Fa6SolidTableListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTableTennisPaddleBallIcon],svg[fa6-solid-table-tennis-paddle-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6l60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288M49.3 151.9l240.8 240.8c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1.3-9.2.3H293c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32c-6.3-6.3-9.7-14.9-9.4-23.7s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219v-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192a96 96 0 1 1 0-192"></svg:path>`,
})
export class Fa6SolidTableTennisPaddleBallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTabletIcon],svg[fa6-solid-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm112 432h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16"></svg:path>`,
})
export class Fa6SolidTabletIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTabletButtonIcon],svg[fa6-solid-tablet-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm160 400a32 32 0 1 1 0 64a32 32 0 1 1 0-64"></svg:path>`,
})
export class Fa6SolidTabletButtonIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTabletScreenButtonIcon],svg[fa6-solid-tablet-screen-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64C0 28.7 28.7 0 64 0h320c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm256 384a32 32 0 1 0-64 0a32 32 0 1 0 64 0M384 64H64v320h320z"></svg:path>`,
})
export class Fa6SolidTabletScreenButtonIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTabletsIcon],svg[fa6-solid-tablets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M614.3 247c-5.2 7.9-16.2 8.5-22.9 1.8L391.2 48.6c-6.7-6.7-6.2-17.8 1.8-22.9C418.1 9.4 447.9 0 480 0c88.4 0 160 71.6 160 160c0 32.1-9.4 61.9-25.7 87M567 294.3c-25 16.3-54.9 25.7-87 25.7c-88.4 0-160-71.6-160-160c0-32.1 9.4-61.9 25.7-87c5.2-7.9 16.2-8.5 22.9-1.8l200.2 200.2c6.7 6.7 6.2 17.8-1.8 22.9M301.5 368c9.5 0 16.9 8.2 15 17.5C301.1 457.8 236.9 512 160 512S18.9 457.8 3.5 385.5c-2-9.3 5.5-17.5 15-17.5h283.1zm0-32h-283c-9.5 0-16.9-8.2-15-17.5C18.9 246.2 83.1 192 160 192s141.1 54.2 156.5 126.5c2 9.3-5.5 17.5-15 17.5"></svg:path>`,
})
export class Fa6SolidTabletsIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTachographDigitalIcon],svg[fa6-solid-tachograph-digital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm32 64h224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32M64 368c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16m320 0c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H400c-8.8 0-16-7.2-16-16M80 288a16 16 0 1 1 0 32a16 16 0 1 1 0-32m48 16a16 16 0 1 1 32 0a16 16 0 1 1-32 0m80-16a16 16 0 1 1 0 32a16 16 0 1 1 0-32m48 16a16 16 0 1 1 32 0a16 16 0 1 1-32 0m80-16a16 16 0 1 1 0 32a16 16 0 1 1 0-32"></svg:path>`,
})
export class Fa6SolidTachographDigitalIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTagIcon],svg[fa6-solid-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 80v149.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0l133.5-133.5c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80m112 32a32 32 0 1 1 0 64a32 32 0 1 1 0-64"></svg:path>`,
})
export class Fa6SolidTagIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTagsIcon],svg[fa6-solid-tags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m345 39.1l127.8 129.3c52.4 53 52.4 138.2 0 191.2l-112 113.3c-9.3 9.4-24.5 9.5-33.9.2s-9.5-24.5-.2-33.9l111.9-113.3c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6.2-33.9s24.6-9.2 33.9.2zM0 229.5V80c0-26.5 21.5-48 48-48h149.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5M144 144a32 32 0 1 0-64 0a32 32 0 1 0 64 0"></svg:path>`,
})
export class Fa6SolidTagsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTapeIcon],svg[fa6-solid-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M380.8 416c41.5-40.7 67.2-97.3 67.2-160c0-123.7-100.3-224-224-224S0 132.3 0 256s100.3 224 224 224h320c17.7 0 32-14.3 32-32s-14.3-32-32-32zM224 160a96 96 0 1 1 0 192a96 96 0 1 1 0-192m64 96a64 64 0 1 0-128 0a64 64 0 1 0 128 0"></svg:path>`,
})
export class Fa6SolidTapeIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTarpIcon],svg[fa6-solid-tarp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h352V320c0-17.7 14.3-32 32-32h128zM448 448l128-128H448zM96 128a32 32 0 1 1 0 64a32 32 0 1 1 0-64"></svg:path>`,
})
export class Fa6SolidTarpIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTarpDropletIcon],svg[fa6-solid-tarp-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 160c-35.3 0-64-26.9-64-60c0-24 33.7-70.1 52.2-93.5c6.1-7.7 17.5-7.7 23.6 0C318.3 29.9 352 76 352 100c0 33.1-28.7 60-64 60M64 128h133.5c13.2 37.3 48.7 64 90.5 64s77.4-26.7 90.5-64H512c35.3 0 64 28.7 64 64v160H448c-17.7 0-32 14.3-32 32v128H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64m384 384V384h128zM96 256a32 32 0 1 0 0-64a32 32 0 1 0 0 64"></svg:path>`,
})
export class Fa6SolidTarpDropletIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTaxiIcon],svg[fa6-solid-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 0c-17.7 0-32 14.3-32 32v32.2c-38.6 2.2-72.3 27.3-85.2 64.1L39.6 228.8C16.4 238.4 0 261.3 0 288v192c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-48h320v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V288c0-26.7-16.4-49.6-39.6-59.2l-35.2-100.5c-12.9-36.8-46.6-62-85.2-64.1V32c0-17.7-14.3-32-32-32zm-26.6 128h181.2c13.6 0 25.7 8.6 30.2 21.4l26.1 74.6H109.1l26.1-74.6c4.5-12.8 16.6-21.4 30.2-21.4M96 288a32 32 0 1 1 0 64a32 32 0 1 1 0-64m288 32a32 32 0 1 1 64 0a32 32 0 1 1-64 0"></svg:path>`,
})
export class Fa6SolidTaxiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTeethIcon],svg[fa6-solid-teeth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128c0-53 43-96 96-96h384c53 0 96 43 96 96v256c0 53-43 96-96 96H96c-53 0-96-43-96-96zm176 48v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-56c0-26.5-21.5-48-48-48s-48 21.5-48 48m176-48c-26.5 0-48 21.5-48 48v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-56c0-26.5-21.5-48-48-48M48 208v24c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-24c0-26.5-21.5-48-48-48s-48 21.5-48 48m48 176c26.5 0 48-21.5 48-48v-24c0-13.3-10.7-24-24-24H72c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48m80-48c0 26.5 21.5 48 48 48s48-21.5 48-48v-24c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24zm176 48c26.5 0 48-21.5 48-48v-24c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48m80-176v24c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-24c0-26.5-21.5-48-48-48s-48 21.5-48 48m48 176c26.5 0 48-21.5 48-48v-24c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48"></svg:path>`,
})
export class Fa6SolidTeethIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTeethOpenIcon],svg[fa6-solid-teeth-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 32C43 32 0 75 0 128v64c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-64c0-53-43-96-96-96zm128 64c26.5 0 48 21.5 48 48v56c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-56c0-26.5 21.5-48 48-48m80 48c0-26.5 21.5-48 48-48s48 21.5 48 48v56c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24zM96 128c26.5 0 48 21.5 48 48v24c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24v-24c0-26.5 21.5-48 48-48m336 48c0-26.5 21.5-48 48-48s48 21.5 48 48v24c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24zM96 480h384c53 0 96-43 96-96v-32c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v32c0 53 43 96 96 96m0-64c-26.5 0-48-21.5-48-48v-24c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48m80-48v-24c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48s-48-21.5-48-48m176 48c-26.5 0-48-21.5-48-48v-24c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48m80-48v-24c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48s-48-21.5-48-48"></svg:path>`,
})
export class Fa6SolidTeethOpenIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTemperatureArrowDownIcon],svg[fa6-solid-temperature-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 112c0-26.5 21.5-48 48-48s48 21.5 48 48v164.5c0 17.3 7.1 31.9 15.3 42.5c10.5 13.6 16.7 30.5 16.7 49c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9c8.2-10.6 15.3-25.2 15.3-42.5zM176 0C114.1 0 64 50.1 64 112v164.4c0 .1-.1.3-.2.6c-.2.6-.8 1.6-1.7 2.8C43.2 304.2 32 334.8 32 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6V112C288 50.1 237.9 0 176 0m0 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V272c0-8.8-7.2-16-16-16s-16 7.2-16 16v50.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48m336-64h-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v288h-32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c6 6 14.1 9.4 22.6 9.4s16.6-3.4 22.6-9.4l64-64c9.2-9.2 11.9-22.9 6.9-34.9S524.8 352 511.8 352z"></svg:path>`,
})
export class Fa6SolidTemperatureArrowDownIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTemperatureArrowUpIcon],svg[fa6-solid-temperature-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 112c0-26.5 21.5-48 48-48s48 21.5 48 48v164.5c0 17.3 7.1 31.9 15.3 42.5c10.5 13.6 16.7 30.5 16.7 49c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9c8.2-10.6 15.3-25.2 15.3-42.5zM176 0C114.1 0 64 50.1 64 112v164.4c0 .1-.1.3-.2.6c-.2.6-.8 1.6-1.7 2.8C43.2 304.2 32 334.8 32 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6V112C288 50.1 237.9 0 176 0m0 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v210.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48m304-256h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32v288c0 17.7 14.3 32 32 32s32-14.3 32-32V160z"></svg:path>`,
})
export class Fa6SolidTemperatureArrowUpIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTemperatureEmptyIcon],svg[fa6-solid-temperature-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 112c0-26.5 21.5-48 48-48s48 21.5 48 48v164.5c0 17.3 7.1 31.9 15.3 42.5c10.5 13.6 16.7 30.5 16.7 49c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9c8.2-10.6 15.3-25.2 15.3-42.5zM160 0C98.1 0 48 50.2 48 112v164.4c0 .1-.1.3-.2.6c-.2.6-.8 1.6-1.7 2.8C27.2 304.2 16 334.8 16 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6V112C272 50.2 221.9 0 160 0m0 416a48 48 0 1 0 0-96a48 48 0 1 0 0 96"></svg:path>`,
})
export class Fa6SolidTemperatureEmptyIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTemperatureFullIcon],svg[fa6-solid-temperature-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 64c-26.5 0-48 21.5-48 48v164.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48M48 112C48 50.2 98.1 0 160 0s112 50.1 112 112v164.4c0 .1.1.3.2.6c.2.6.8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3.2-.5.2-.6zm160 256c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V112c0-8.8 7.2-16 16-16s16 7.2 16 16v210.7c18.6 6.6 32 24.4 32 45.3"></svg:path>`,
})
export class Fa6SolidTemperatureFullIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTemperatureHalfIcon],svg[fa6-solid-temperature-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 64c-26.5 0-48 21.5-48 48v164.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48M48 112C48 50.2 98.1 0 160 0s112 50.1 112 112v164.4c0 .1.1.3.2.6c.2.6.8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3.2-.5.2-.6zm160 256c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V208c0-8.8 7.2-16 16-16s16 7.2 16 16v114.7c18.6 6.6 32 24.4 32 45.3"></svg:path>`,
})
export class Fa6SolidTemperatureHalfIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTemperatureHighIcon],svg[fa6-solid-temperature-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 64a32 32 0 1 1 0 64a32 32 0 1 1 0-64m0 128a96 96 0 1 0 0-192a96 96 0 1 0 0 192M96 112c0-26.5 21.5-48 48-48s48 21.5 48 48v164.5c0 17.3 7.1 31.9 15.3 42.5c10.5 13.6 16.7 30.5 16.7 49c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9c8.2-10.7 15.3-25.3 15.3-42.6zM144 0C82.1 0 32 50.2 32 112v164.4c0 .1-.1.3-.2.6c-.2.6-.8 1.6-1.7 2.8C11.2 304.2 0 334.8 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6V112C256 50.2 205.9 0 144 0m0 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v210.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48"></svg:path>`,
})
export class Fa6SolidTemperatureHighIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTemperatureLowIcon],svg[fa6-solid-temperature-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 96a32 32 0 1 0-64 0a32 32 0 1 0 64 0m-128 0a96 96 0 1 1 192 0a96 96 0 1 1-192 0M144 64c-26.5 0-48 21.5-48 48v164.5c0 17.3-7.1 31.9-15.3 42.5C70.2 332.6 64 349.5 64 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48M32 112C32 50.2 82.1 0 144 0s112 50.1 112 112v164.4c0 .1.1.3.2.6c.2.6.8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S0 447.5 0 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3.2-.5.2-.6zm160 256c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V272c0-8.8 7.2-16 16-16s16 7.2 16 16v50.7c18.6 6.6 32 24.4 32 45.3"></svg:path>`,
})
export class Fa6SolidTemperatureLowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTemperatureQuarterIcon],svg[fa6-solid-temperature-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 64c-26.5 0-48 21.5-48 48v164.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48M48 112C48 50.2 98.1 0 160 0s112 50.1 112 112v164.4c0 .1.1.3.2.6c.2.6.8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3.2-.5.2-.6zm160 256c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V272c0-8.8 7.2-16 16-16s16 7.2 16 16v50.7c18.6 6.6 32 24.4 32 45.3"></svg:path>`,
})
export class Fa6SolidTemperatureQuarterIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTemperatureThreeQuartersIcon],svg[fa6-solid-temperature-three-quarters-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 64c-26.5 0-48 21.5-48 48v164.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48M48 112C48 50.2 98.1 0 160 0s112 50.1 112 112v164.4c0 .1.1.3.2.6c.2.6.8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3.2-.5.2-.6zm160 256c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V144c0-8.8 7.2-16 16-16s16 7.2 16 16v178.7c18.6 6.6 32 24.4 32 45.3"></svg:path>`,
})
export class Fa6SolidTemperatureThreeQuartersIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTengeSignIcon],svg[fa6-solid-tenge-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64m0 128c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H224v224c0 17.7-14.3 32-32 32s-32-14.3-32-32V224H32c-17.7 0-32-14.3-32-32"></svg:path>`,
})
export class Fa6SolidTengeSignIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTentIcon],svg[fa6-solid-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M269.4 6c11.1-8 26.1-8 37.2 0l224 160c7.4 5.3 12.2 13.5 13.2 22.5l32 288c1 9-1.9 18.1-8 24.9s-14.7 10.7-23.8 10.7H435.8c-12.1 0-23.2-6.8-28.6-17.7L306.7 293.5c-1.7-3.4-5.1-5.5-8.8-5.5c-5.5 0-9.9 4.4-9.9 9.9V480c0 17.7-14.3 32-32 32H32c-9.1 0-17.8-3.9-23.8-10.7s-9-15.8-8-24.9l32-288c1-9 5.8-17.2 13.2-22.5z"></svg:path>`,
})
export class Fa6SolidTentIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTentArrowDownToLineIcon],svg[fa6-solid-tent-arrow-down-to-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.8 111.9c8.9 9.9 8.1 25-1.8 33.9l-80 72c-9.1 8.2-23 8.2-32.1 0l-80-72c-9.9-8.9-10.7-24-1.8-33.9s24-10.7 33.9-1.8l39.9 36L120 24c0-13.3 10.7-24 24-24s24 10.7 24 24v122.1l39.9-36c9.9-8.9 25-8.1 33.9 1.8m122.8 22.6c11.5-8.7 27.3-8.7 38.8 0l168 128c6.6 5 11 12.5 12.3 20.7l24 160l.7 4.7c17.5.2 31.6 14.4 31.6 32c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32h127.6l.7-4.7l24-160c1.2-8.2 5.6-15.7 12.3-20.7l168-128zM384 448h80l-61.3-122.5c-1.7-3.4-5.1-5.5-8.8-5.5c-5.5 0-9.9 4.4-9.9 9.9z"></svg:path>`,
})
export class Fa6SolidTentArrowDownToLineIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTentArrowLeftRightIcon],svg[fa6-solid-tent-arrow-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M488.1 6.2c-9.9-8.9-25-8.1-33.9 1.8s-8.1 25 1.8 33.9L489.5 72h-403L120 41.8c9.9-8.9 10.7-24 1.8-33.9s-24-10.6-33.9-1.7l-80 72C2.9 82.7 0 89.2 0 96s2.9 13.3 7.9 17.8l80 72c9.9 8.9 25 8.1 33.9-1.8s8.1-25-1.8-33.9L86.5 120h402.9l-33.5 30.2c-9.9 8.9-10.7 24-1.8 33.9s24 10.7 33.9 1.8l80-72c5.1-4.6 7.9-11 7.9-17.8S573 82.8 568 78.3l-80-72zM307.4 166.5c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S86.7 512 96 512h160c17.7 0 32-14.3 32-32V361.9c0-5.5 4.4-9.9 9.9-9.9c3.7 0 7.2 2.1 8.8 5.5l68.4 136.8c5.4 10.8 16.5 17.7 28.6 17.7h76.2c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z"></svg:path>`,
})
export class Fa6SolidTentArrowLeftRightIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTentArrowTurnLeftIcon],svg[fa6-solid-tent-arrow-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120.1 41.8c9.9-8.9 10.7-24 1.8-33.9s-24.1-10.6-34-1.7l-80 72C2.9 82.7 0 89.2 0 96s2.9 13.3 7.9 17.8l80 72c9.9 8.9 25 8.1 33.9-1.8s8.1-25-1.8-33.9L86.5 120H456c39.8 0 72 32.2 72 72v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40c0-66.3-53.7-120-120-120H86.5L120 41.8zm187.3 124.7c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S86.7 512 96 512h160c17.7 0 32-14.3 32-32V361.9c0-5.5 4.4-9.9 9.9-9.9c3.7 0 7.2 2.1 8.8 5.5l68.4 136.8c5.4 10.8 16.5 17.7 28.6 17.7h76.2c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z"></svg:path>`,
})
export class Fa6SolidTentArrowTurnLeftIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTentArrowsDownIcon],svg[fa6-solid-tent-arrows-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209.8 111.9c-8.9-9.9-24-10.7-33.9-1.8l-39.9 36V24c0-13.3-10.7-24-24-24S88 10.7 88 24v122.1l-39.9-36c-9.9-8.9-25-8.1-33.9 1.8s-8.1 25 1.8 33.9l80 72c9.1 8.2 23 8.2 32.1 0l80-72c9.9-8.9 10.7-24 1.8-33.9zm352 0c-8.9-9.9-24-10.7-33.9-1.8l-39.9 36V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v122.1l-39.9-36c-9.9-8.9-25-8.1-33.9 1.8s-8.1 25 1.8 33.9l80 72c9.1 8.2 23 8.2 32.1 0l80-72c9.9-8.9 10.7-24 1.8-33.9zm-254.4 54.6c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S86.7 512 96 512h160c17.7 0 32-14.3 32-32V361.9c0-5.5 4.4-9.9 9.9-9.9c3.7 0 7.2 2.1 8.8 5.5l68.4 136.8c5.4 10.8 16.5 17.7 28.6 17.7h76.2c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z"></svg:path>`,
})
export class Fa6SolidTentArrowsDownIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTentsIcon],svg[fa6-solid-tents-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M396.6 6.5L235.8 129.1c9.6 1.8 18.9 5.8 27 12l168 128c13.2 10.1 22 24.9 24.5 41.4l6.2 41.5H608c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128c-11.5-8.7-27.3-8.7-38.8 0zm-153.2 160c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S22.7 512 32 512h160c17.7 0 32-14.3 32-32V361.9c0-5.5 4.4-9.9 9.9-9.9c3.7 0 7.2 2.1 8.8 5.5l68.4 136.8c5.4 10.8 16.5 17.7 28.6 17.7h76.2c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z"></svg:path>`,
})
export class Fa6SolidTentsIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTerminalIcon],svg[fa6-solid-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.4 86.6c-12.5-12.5-12.5-32.7 0-45.2s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256zM256 416h288c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidTerminalIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTextHeightIcon],svg[fa6-solid-text-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 128V96h64v320H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V96h64v32c0 17.7 14.3 32 32 32s32-14.3 32-32V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32m438.6-86.6c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32v192h-32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8h-32v-192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9z"></svg:path>`,
})
export class Fa6SolidTextHeightIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTextSlashIcon],svg[fa6-solid-text-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L355.7 253.5L400.2 96H503l-6 24.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l11-44.1c7.5-30.3-15.4-59.6-46.6-59.6h-319c-22 0-41.2 15-46.6 36.4l-6.3 25.2zm168 131.7c.1-.3.2-.7.3-1L217 96h116.7l-32.4 114.8l-94.5-74.1zM243.3 416H192c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32h-42.2l17.6-62.1l-54.5-42.9z"></svg:path>`,
})
export class Fa6SolidTextSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTextWidthIcon],svg[fa6-solid-text-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 128V96h128v128h-16c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16V96h128v32c0 17.7 14.3 32 32 32s32-14.3 32-32V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32M9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6v-32h192v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6v32h-192v-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9z"></svg:path>`,
})
export class Fa6SolidTextWidthIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidThermometerIcon],svg[fa6-solid-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 382.1v-88.8c0-14.9 5.9-29.1 16.4-39.6l27.3-27.3l57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57l41.4-41.4l57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57l41.4-41.4l57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57l45.5-45.5C355.2 10.9 381.4 0 408.8 0C465.8 0 512 46.2 512 103.2c0 27.4-10.9 53.6-30.2 73L258.3 399.6a55.92 55.92 0 0 1-39.6 16.4h-88.8L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l89-89z"></svg:path>`,
})
export class Fa6SolidThermometerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidThumbsDownIcon],svg[fa6-solid-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2h144c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48h-97.5c-19 0-37.5 5.6-53.3 16.1l-38.5 25.7C176 91.6 160 121.6 160 153.7v111.2c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7M32 384h64c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32"></svg:path>`,
})
export class Fa6SolidThumbsDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidThumbsUpIcon],svg[fa6-solid-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2h144c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48h-97.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7M32 192h64c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidThumbsUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidThumbtackIcon],svg[fa6-solid-thumbtack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 32C32 14.3 46.3 0 64 0h256c17.7 0 32 14.3 32 32s-14.3 32-32 32h-29.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8S362.3 352 352 352H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64c-17.7 0-32-14.3-32-32m128 352h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32z"></svg:path>`,
})
export class Fa6SolidThumbtackIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidThumbtackSlashIcon],svg[fa6-solid-thumbtack-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L481.4 352c9.8-.4 18.9-5.3 24.6-13.3c6-8.3 7.7-19.1 4.4-28.8l-1-3c-13.8-41.5-42.8-74.8-79.5-94.7L418.5 64H448c17.7 0 32-14.3 32-32S465.7 0 448 0H192c-17.7 0-32 14.3-32 32s14.3 32 32 32h29.5l-6.1 79.5zM324.9 352L177.1 235.6c-20.9 18.9-37.2 43.3-46.5 71.3l-1 3c-3.3 9.8-1.6 20.5 4.4 28.8s15.7 13.3 26 13.3zM288 384v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96z"></svg:path>`,
})
export class Fa6SolidThumbtackSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTicketIcon],svg[fa6-solid-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6v-64c0-35.3-28.7-64-64-64zm64 112v160c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16m-32-16c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32z"></svg:path>`,
})
export class Fa6SolidTicketIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTicketSimpleIcon],svg[fa6-solid-ticket-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v64c0 8.8-7.4 15.7-15.7 18.6C541.5 217.1 528 235 528 256s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-64c0-8.8 7.4-15.7 15.7-18.6C34.5 294.9 48 277 48 256s-13.5-38.9-32.3-45.4C7.4 207.7 0 200.8 0 192z"></svg:path>`,
})
export class Fa6SolidTicketSimpleIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTimelineIcon],svg[fa6-solid-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 72a24 24 0 1 1 0 48a24 24 0 1 1 0-48m32 97.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80S48 51.8 48 96c0 32.8 19.7 61 48 73.3V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h256v54.7c-28.3 12.3-48 40.5-48 73.3c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V288h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64v-54.7c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 32.8 19.7 61 48 73.3V224H160zM488 96a24 24 0 1 1 48 0a24 24 0 1 1-48 0M320 392a24 24 0 1 1 0 48a24 24 0 1 1 0-48"></svg:path>`,
})
export class Fa6SolidTimelineIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidToggleOffIcon],svg[fa6-solid-toggle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H192c-70.7 0-128-57.3-128-128s57.3-128 128-128zm192 128c0-106-86-192-192-192H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192m-384 96a96 96 0 1 0 0-192a96 96 0 1 0 0 192"></svg:path>`,
})
export class Fa6SolidToggleOffIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidToggleOnIcon],svg[fa6-solid-toggle-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 64C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm192 96a96 96 0 1 1 0 192a96 96 0 1 1 0-192"></svg:path>`,
})
export class Fa6SolidToggleOnIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidToiletIcon],svg[fa6-solid-toilet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h8v148.9c-1.9 1.4-3.8 2.9-5.6 4.4C10.9 214.5 0 232.9 0 256c0 46.9 14.3 84.1 37 112.5c14.2 17.7 31.1 31.3 48.5 41.8l-19.9 59.6c-3.3 9.8-1.6 20.5 4.4 28.8S85.7 512 96 512h256c10.3 0 19.9-4.9 26-13.3s7.7-19.1 4.4-28.8l-19.8-59.5c17.4-10.5 34.3-24.1 48.5-41.8c22.7-28.4 37-65.5 37-112.5c0-23.1-10.9-41.5-26.4-54.6c-1.8-1.5-3.7-3-5.6-4.4L416 48h8c13.3 0 24-10.7 24-24S437.3 0 424 0zm360 256.3c0 1-.3 2.6-3.8 5.6c-4.8 4.1-14 9-29.3 13.4C320.5 284 276.1 288 224 288s-96.5-4-126.9-12.8c-15.3-4.4-24.5-9.3-29.3-13.4c-3.5-3-3.8-4.6-3.8-5.6v-.4c0-1 0-2.5 3.8-5.8c4.8-4.1 14-9 29.3-13.4C127.5 228 171.9 224 224 224s96.5 4 126.9 12.8c15.3 4.4 24.5 9.3 29.3 13.4c3.8 3.2 3.8 4.8 3.8 5.8v.4zM328.2 384l-.2.5v-.5zM112 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16"></svg:path>`,
})
export class Fa6SolidToiletIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidToiletPaperIcon],svg[fa6-solid-toilet-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M444.2 0c-47 49.6-60.2 126.5-60.2 192c0 158.8-27.3 247-42.7 283.9c-10 24-33.2 36.1-55.4 36.1H48c-11.5 0-22.2-6.2-27.8-16.2s-5.6-22.3.4-32.2c9.8-17.7 15.4-38.2 20.5-57.7C52.3 362.8 64 293.5 64 192C64 86 107 0 160 0zM512 384c-53 0-96-86-96-192S459 0 512 0s96 86 96 192s-43 192-96 192m0-128c17.7 0 32-28.7 32-64s-14.3-64-32-64s-32 28.7-32 64s14.3 64 32 64m-368-48a16 16 0 1 0-32 0a16 16 0 1 0 32 0m64 0a16 16 0 1 0-32 0a16 16 0 1 0 32 0m48 16a16 16 0 1 0 0-32a16 16 0 1 0 0 32m80-16a16 16 0 1 0-32 0a16 16 0 1 0 32 0"></svg:path>`,
})
export class Fa6SolidToiletPaperIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidToiletPaperSlashIcon],svg[fa6-solid-toilet-paper-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-109.7-86C569.9 374 608 291.9 608 192C608 86 565 0 512 0s-96 86-96 192c0 49.1 9.2 93.9 24.4 127.9l-59-46.2c1.6-24.8 2.6-52 2.6-81.6c0-65.5 13.2-142.4 60.2-192L160 0c-24.8 0-47.4 18.8-64.4 49.6zm328.5 380.3l-300.8-237C64.9 162.4 64 177 64 192c0 101.5-11.7 170.8-23 213.9c-5.1 19.4-10.7 39.9-20.5 57.7c-5.9 9.9-6.1 22.1-.4 32.2S36.5 512 48 512h237.9c22.3 0 45.4-12.1 55.4-36.1c7.4-17.7 17.5-47.2 26-90.6zM544 192c0 35.3-14.3 64-32 64s-32-28.7-32-64s14.3-64 32-64s32 28.7 32 64"></svg:path>`,
})
export class Fa6SolidToiletPaperSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidToiletPortableIcon],svg[fa6-solid-toilet-portable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 32v32h320V32c0-17.7-14.3-32-32-32H32C14.3 0 0 14.3 0 32m24 64H0v392c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h224v8c0 13.3 10.7 24 24 24s24-10.7 24-24V96zm232 144v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16"></svg:path>`,
})
export class Fa6SolidToiletPortableIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidToiletsPortableIcon],svg[fa6-solid-toilets-portable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 0h192c17.7 0 32 14.3 32 32v32H0V32C0 14.3 14.3 0 32 0M0 96h256v392c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48v8c0 13.3-10.7 24-24 24S0 501.3 0 488zm192 128c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16M352 0h192c17.7 0 32 14.3 32 32v32H320V32c0-17.7 14.3-32 32-32m-32 96h256v392c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H368v8c0 13.3-10.7 24-24 24s-24-10.7-24-24zm192 128c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16"></svg:path>`,
})
export class Fa6SolidToiletsPortableIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidToolboxIcon],svg[fa6-solid-toolbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 88v40h160V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8m-48 40V88c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v40h28.1c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9V320H384v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H192v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H0v-92.1C0 215.2 5.1 203 14.1 194L66 142.1c9-9 21.2-14.1 33.9-14.1zM0 416v-64h128c0 17.7 14.3 32 32 32s32-14.3 32-32h128c0 17.7 14.3 32 32 32s32-14.3 32-32h128v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64"></svg:path>`,
})
export class Fa6SolidToolboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidToothIcon],svg[fa6-solid-tooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186.1 52.1c-16.8-13-37.4-20.1-58.6-20.1C74.7 32 32 74.7 32 127.5v6.2c0 15.8 3.7 31.3 10.7 45.5l23.5 47.1c4.5 8.9 7.6 18.4 9.4 28.2l36.7 205.8c2 11.2 11.6 19.4 22.9 19.8s21.4-7.4 24-18.4l28.9-121.3C192.2 323.7 207 312 224 312s31.8 11.7 35.8 28.3l28.9 121.3c2.6 11.1 12.7 18.8 24 18.4s20.9-8.6 22.9-19.8l36.7-205.8c1.8-9.8 4.9-19.3 9.4-28.2l23.5-47.1c7.1-14.1 10.7-29.7 10.7-45.5v-2.1c0-55-44.6-99.6-99.6-99.6c-24.1 0-47.4 8.8-65.6 24.6l-3.2 2.8L267 74.5c7 5.4 8.2 15.5 2.8 22.5s-15.5 8.2-22.5 2.8l-24.4-19l-37-28.8z"></svg:path>`,
})
export class Fa6SolidToothIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidToriiGateIcon],svg[fa6-solid-torii-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 80c0 26.5 21.5 48 48 48h16v64h64v-64h96v64h64v-64h96v64h64v-64h16c26.5 0 48-21.5 48-48V13.4C512 6 506 0 498.6 0c-1.7 0-3.4.3-5 1l-49 19.6C425.7 28.1 405.5 32 385.2 32H126.8c-20.4 0-40.5-3.9-59.4-11.4L18.4 1c-1.6-.6-3.3-1-5-1C6 0 0 6 0 13.4zm64 208v192c0 17.7 14.3 32 32 32s32-14.3 32-32V288h256v192c0 17.7 14.3 32 32 32s32-14.3 32-32V288h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32z"></svg:path>`,
})
export class Fa6SolidToriiGateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTornadoIcon],svg[fa6-solid-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 32v13.6c0 17.1 1.7 34 5 50.4h352.8c3.2-6.9 7.5-13.3 13-18.8l38.6-38.6c4.2-4.2 6.6-10 6.6-16C416 10.1 405.9 0 393.4 0H32C14.3 0 0 14.3 0 32m352.2 96H13.6c12.2 35.9 32.3 68.7 58.8 96H412l-47.2-62.9c-7.3-9.7-11.6-21.2-12.6-33.1m-226 138.2l116.4 68.5c8.2 4.8 15.8 10.7 22.5 17.3H445c2-9.8 3-19.9 3-30.1c0-23-5.3-45.5-15.3-65.9H110.2c5.2 3.6 10.5 7 16 10.2M288 384c10.3 21.4 13.8 45.5 9.9 69l-5.9 35.7c-2 12.2 7.4 23.4 19.8 23.4c5.3 0 10.4-2.1 14.2-5.9l78.2-78.2c12.8-12.8 23.1-27.7 30.4-43.9z"></svg:path>`,
})
export class Fa6SolidTornadoIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTowerBroadcastIcon],svg[fa6-solid-tower-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80.3 44C69.8 69.9 64 98.2 64 128s5.8 58.1 16.3 84c6.6 16.4-1.3 35-17.7 41.7s-35-1.3-41.7-17.7C7.4 202.6 0 166.1 0 128S7.4 53.4 20.9 20C27.6 3.6 46.2-4.3 62.6 2.3S86.9 27.6 80.3 44m474.8-24C568.6 53.4 576 89.9 576 128s-7.4 74.6-20.9 108c-6.6 16.4-25.3 24.3-41.7 17.7s-24.3-25.3-17.7-41.7c10.5-25.9 16.3-54.2 16.3-84s-5.8-58.1-16.3-84c-6.6-16.4 1.3-35 17.7-41.7s35 1.3 41.7 17.7M352 128c0 23.7-12.9 44.4-32 55.4V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V183.4c-19.1-11.1-32-31.7-32-55.4c0-35.3 28.7-64 64-64s64 28.7 64 64M170.6 76.8C163.8 92.4 160 109.7 160 128s3.8 35.6 10.6 51.2c7.1 16.2-.3 35.1-16.5 42.1S119 221 112 204.8c-10.3-23.6-16-49.6-16-76.8s5.7-53.2 16-76.8c7.1-16.2 25.9-23.6 42.1-16.5s23.6 25.9 16.5 42.1M464 51.2c10.3 23.6 16 49.6 16 76.8s-5.7 53.2-16 76.8c-7.1 16.2-25.9 23.6-42.1 16.5s-23.6-25.9-16.5-42.1c6.8-15.6 10.6-32.9 10.6-51.2s-3.8-35.6-10.6-51.2c-7.1-16.2.3-35.1 16.5-42.1S457 35 464 51.2"></svg:path>`,
})
export class Fa6SolidTowerBroadcastIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTowerCellIcon],svg[fa6-solid-tower-cell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62.6 2.3C46.2-4.3 27.6 3.6 20.9 20C7.4 53.4 0 89.9 0 128s7.4 74.6 20.9 108c6.6 16.4 25.3 24.3 41.7 17.7s24.3-25.3 17.7-41.7C69.8 186.1 64 157.8 64 128s5.8-58.1 16.3-84C86.9 27.6 79 9 62.6 2.3m450.8 0C497 9 489.1 27.6 495.7 44c10.5 25.9 16.3 54.2 16.3 84s-5.8 58.1-16.3 84c-6.6 16.4 1.3 35 17.7 41.7s35-1.3 41.7-17.7c13.5-33.4 20.9-69.9 20.9-108s-7.4-74.6-20.9-108c-6.7-16.4-25.3-24.3-41.7-17.7M340.1 165.2c7.5-10.5 11.9-23.3 11.9-37.2c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 13.9 4.4 26.7 11.9 37.2l-137 301.6c-7.3 16.1-.2 35.1 15.9 42.4s35.1.2 42.4-15.9l20.5-45.3h220.6l20.6 45.2c7.3 16.1 26.3 23.2 42.4 15.9s23.2-26.3 15.9-42.4zM369.2 384H206.8l14.5-32h133.3l14.5 32zM288 205.3l37.6 82.7h-75.2zM163.3 73.6c5.3-12.1-.2-26.3-12.4-31.6s-26.3.2-31.6 12.4C109.5 77 104 101.9 104 128s5.5 51 15.3 73.6c5.3 12.1 19.5 17.7 31.6 12.4s17.7-19.5 12.4-31.6c-7.3-16.6-11.3-35-11.3-54.4s4-37.8 11.3-54.4m293.4-19.2c-5.3-12.1-19.5-17.7-31.6-12.4s-17.7 19.5-12.4 31.6c7.3 16.6 11.3 35 11.3 54.4s-4 37.8-11.3 54.4c-5.3 12.1.2 26.3 12.4 31.6s26.3-.2 31.6-12.4C466.5 179 472 154.1 472 128s-5.5-51-15.3-73.6"></svg:path>`,
})
export class Fa6SolidTowerCellIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTowerObservationIcon],svg[fa6-solid-tower-observation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.7 3.4c9-4.5 19.6-4.5 28.6 0l160 80c15.8 7.9 22.2 27.1 14.3 42.9C439 137.5 427.7 144 416 144v80c0 17.7-14.3 32-32 32h-4.9l32 192H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l32-192H128c-17.7 0-32-14.3-32-32v-80c-11.7 0-23-6.5-28.6-17.7c-7.9-15.8-1.5-35 14.3-42.9zM314.5 448L256 399.2L197.5 448zM197.8 256l-4.7 28.3l62.9 52.5l62.9-52.5l-4.7-28.3H197.7zm-13.9 83.2l-11.2 67l45.8-38.2zM293.5 368l45.8 38.1l-11.2-67zM176 128c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></svg:path>`,
})
export class Fa6SolidTowerObservationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTractorIcon],svg[fa6-solid-tractor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 64c0-35.3 28.7-64 64-64h106.3c26.2 0 49.7 15.9 59.4 40.2l48 119.8H480v-33.8c0-24.8 5.8-49.3 16.9-71.6l2.5-5c7.9-15.8 27.1-22.2 42.9-14.3s22.2 27.1 14.3 42.9l-2.5 5c-6.7 13.3-10.1 28-10.1 42.9v33.8h56c22.1 0 40 17.9 40 40v45.4c0 16.5-8.5 31.9-22.6 40.7l-43.3 27.1c-14.2-5.9-29.8-9.2-46.1-9.2c-39.3 0-74.1 18.9-96 48h-80c0 17.7-14.3 32-32 32h-8.2c-1.7 4.8-3.7 9.5-5.8 14.1l5.8 5.8c12.5 12.5 12.5 32.8 0 45.3l-22.6 22.6c-12.5 12.5-32.8 12.5-45.3 0l-5.8-5.8c-4.6 2.2-9.3 4.1-14.1 5.8v8.2c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-8.2c-4.8-1.7-9.5-3.7-14.1-5.8l-5.8 5.8c-12.5 12.5-32.8 12.5-45.3 0l-22.6-22.6c-12.5-12.5-12.5-32.8 0-45.3L46 398c-2.2-4.6-4.1-9.3-5.8-14.1l-8.2.1c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h8.2c1.7-4.8 3.7-9.5 5.8-14.1l-5.8-5.8c-12.5-12.5-12.5-32.8 0-45.3l22.6-22.6c9-9 21.9-11.5 33.1-7.6V64zm170.3 0H160v96h144.7zM176 256a80 80 0 1 0 0 160a80 80 0 1 0 0-160m352 192a24 24 0 1 0 0-48a24 24 0 1 0 0 48m0 64c-48.6 0-88-39.4-88-88c0-29.8 14.8-56.1 37.4-72c14.3-10.1 31.8-16 50.6-16c2.7 0 5.3.1 7.9.3c44.9 4 80.1 41.7 80.1 87.7c0 48.6-39.4 88-88 88"></svg:path>`,
})
export class Fa6SolidTractorIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTrademarkIcon],svg[fa6-solid-trademark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M345.6 108.8c-8.3-11-22.7-15.5-35.7-11.2S288 114.2 288 128v256c0 17.7 14.3 32 32 32s32-14.3 32-32V224l86.4 115.2c6 8.1 15.5 12.8 25.6 12.8s19.6-4.7 25.6-12.8L576 224v160c0 17.7 14.3 32 32 32s32-14.3 32-32V128c0-13.8-8.8-26-21.9-30.4s-27.5.1-35.7 11.2L464 266.7zM0 128c0 17.7 14.3 32 32 32h64v224c0 17.7 14.3 32 32 32s32-14.3 32-32V160h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32"></svg:path>`,
})
export class Fa6SolidTrademarkIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTrafficLightIcon],svg[fa6-solid-traffic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64v288c0 88.4 71.6 160 160 160s160-71.6 160-160V64c0-35.3-28.7-64-64-64zm96 416a48 48 0 1 1 0-96a48 48 0 1 1 0 96m48-176a48 48 0 1 1-96 0a48 48 0 1 1 96 0m-48-80a48 48 0 1 1 0-96a48 48 0 1 1 0 96"></svg:path>`,
})
export class Fa6SolidTrafficLightIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTrailerIcon],svg[fa6-solid-trailer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80v256c0 26.5 21.5 48 48 48h17.1c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96H608c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64V80c0-26.5-21.5-48-48-48zm32 64c8.8 0 16 7.2 16 16v131.2c-11.4 5.9-22.2 12.9-32 21V112c0-8.8 7.2-16 16-16m96 128c-5.4 0-10.7.2-16 .7V112c0-8.8 7.2-16 16-16s16 7.2 16 16v112.7c-5.3-.5-10.6-.7-16-.7m80 19.2V112c0-8.8 7.2-16 16-16s16 7.2 16 16v152.2c-9.8-8.1-20.6-15.2-32-21M368 96c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-8.8 7.2-16 16-16m112 16v192c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-8.8 7.2-16 16-16s16 7.2 16 16M176 480a80 80 0 1 0 0-160a80 80 0 1 0 0 160m0-112a32 32 0 1 1 0 64a32 32 0 1 1 0-64"></svg:path>`,
})
export class Fa6SolidTrailerIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTrainIcon],svg[fa6-solid-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 0C43 0 0 43 0 96v256c0 48 35.2 87.7 81.1 94.9l-46 46c-7 7-2 19.1 7.9 19.1h39.7c8.5 0 16.6-3.4 22.6-9.4L160 448h128l54.6 54.6c6 6 14.1 9.4 22.6 9.4h39.7c10 0 15-12.1 7.9-19.1l-46-46c46-7.1 81.1-46.9 81.1-94.9V96c0-53-43-96-96-96zM64 96c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm160 192a48 48 0 1 1 0 96a48 48 0 1 1 0-96"></svg:path>`,
})
export class Fa6SolidTrainIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTrainSubwayIcon],svg[fa6-solid-train-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 0C43 0 0 43 0 96v256c0 48 35.2 87.7 81.1 94.9l-46 46c-7 7-2 19.1 7.9 19.1h39.7c8.5 0 16.6-3.4 22.6-9.4L160 448h128l54.6 54.6c6 6 14.1 9.4 22.6 9.4h39.7c10 0 15-12.1 7.9-19.1l-46-46c46-7.1 81.1-46.9 81.1-94.9V96c0-53-43-96-96-96zM64 128c0-17.7 14.3-32 32-32h80c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm208-32h80c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-80c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32M64 352a32 32 0 1 1 64 0a32 32 0 1 1-64 0m288-32a32 32 0 1 1 0 64a32 32 0 1 1 0-64"></svg:path>`,
})
export class Fa6SolidTrainSubwayIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTrainTramIcon],svg[fa6-solid-train-tram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M86.8 48c-12.2 0-23.6 5.5-31.2 15L42.7 79C34.5 89.3 19.4 91 9 82.7S-3 59.4 5.3 49L18 33C34.7 12.2 60 0 86.8 0h274.4c26.7 0 52 12.2 68.7 33l12.8 16c8.3 10.4 6.6 25.5-3.8 33.7s-25.5 6.6-33.7-3.7l-12.7-16c-7.6-9.5-19.1-15-31.2-15H248v48h40c53 0 96 43 96 96v160c0 30.6-14.3 57.8-36.6 75.4l65.5 65.5C420 500 415 512 405 512h-39.7c-8.5 0-16.6-3.4-22.6-9.4L288 448H160l-54.6 54.6c-6 6-14.1 9.4-22.6 9.4H43c-10 0-15-12.1-7.9-19.1l65.5-65.5C78.3 409.8 64 382.6 64 352V192c0-53 43-96 96-96h40V48zM160 160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zm32 192a32 32 0 1 0-64 0a32 32 0 1 0 64 0m96 32a32 32 0 1 0 0-64a32 32 0 1 0 0 64"></svg:path>`,
})
export class Fa6SolidTrainTramIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTransgenderIcon],svg[fa6-solid-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-31 31L112 78.1l7-7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-7 7l15.2 15.2C187.7 107.6 220.5 96 256 96s68.3 11.6 94.9 31.2l68.8-68.8l-31-31c-4.6-4.6-5.9-11.5-3.5-17.4S393.5.1 400 .1h96c8.8 0 16 7.2 16 16v96c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-31-31l-68.8 68.8c19.5 26.5 31.1 59.3 31.1 94.8c0 80.2-59 146.6-136 158.2V432h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16v-17.8c-77-11.6-136-78-136-158.2c0-35.5 11.6-68.3 31.2-94.9L112 145.9l-7 7c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l7-7l-19.8-19.7l-31 31c-4.6 4.6-11.5 5.9-17.4 3.5S0 118.5 0 112V16C0 7.2 7.2 0 16 0zm240 256a96 96 0 1 0-192 0a96 96 0 1 0 192 0"></svg:path>`,
})
export class Fa6SolidTransgenderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTrashIcon],svg[fa6-solid-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7M416 128H32l21.2 339c1.6 25.3 22.6 45 47.9 45h245.8c25.3 0 46.3-19.7 47.9-45z"></svg:path>`,
})
export class Fa6SolidTrashIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTrashArrowUpIcon],svg[fa6-solid-trash-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M163.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0M32 128h384l-21.2 339c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45zm192 64c-6.4 0-12.5 2.5-17 7l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L200 408c0 13.3 10.7 24 24 24s24-10.7 24-24V273.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-4.5-4.5-10.6-7-17-7z"></svg:path>`,
})
export class Fa6SolidTrashArrowUpIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTrashCanIcon],svg[fa6-solid-trash-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h96zM32 128h384v320c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm96 64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16m96 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16m96 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16"></svg:path>`,
})
export class Fa6SolidTrashCanIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTrashCanArrowUpIcon],svg[fa6-solid-trash-can-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M163.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0M32 128h384v320c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm192 64c-6.4 0-12.5 2.5-17 7l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L200 408c0 13.3 10.7 24 24 24s24-10.7 24-24V273.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-4.5-4.5-10.6-7-17-7z"></svg:path>`,
})
export class Fa6SolidTrashCanArrowUpIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTreeIcon],svg[fa6-solid-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5c0 12.8 10.3 23.1 23.1 23.1H104l-73.4 73.4c-4.2 4.2-6.6 10-6.6 16c0 12.5 10.1 22.6 22.6 22.6H80L5.4 409.5c-3.5 4.2-5.4 9.5-5.4 15c0 13 10.5 23.5 23.5 23.5H192v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h168.5c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9"></svg:path>`,
})
export class Fa6SolidTreeIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTreeCityIcon],svg[fa6-solid-tree-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 48c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v144h40v-72c0-13.3 10.7-24 24-24s24 10.7 24 24v72h24c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48zm64 32v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m16 80c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-16 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m176-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-16 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16M224 160c0 6-1 11-2 16c20 14 34 38 34 64c0 45-36 80-80 80h-16v160c0 18-15 32-32 32c-18 0-32-14-32-32V320H80c-45 0-80-35-80-80c0-26 13-50 33-64c-1-5-1-10-1-16c0-53 42-96 96-96c53 0 96 43 96 96"></svg:path>`,
})
export class Fa6SolidTreeCityIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTriangleExclamationIcon],svg[fa6-solid-triangle-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7.2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8.2-40.1l216-368C228.7 39.5 241.8 32 256 32m0 128c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24m32 224a32 32 0 1 0-64 0a32 32 0 1 0 64 0"></svg:path>`,
})
export class Fa6SolidTriangleExclamationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTrophyIcon],svg[fa6-solid-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3.4 10.6.7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32h-26.1c-20.9 0-37.9-17-37.9-37.9c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2.5-10.4.7-15.8C448.1 21.8 426.5 0 400 0M48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zm415.2 142.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"></svg:path>`,
})
export class Fa6SolidTrophyIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTrowelIcon],svg[fa6-solid-trowel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M343.9 213.4L245.3 312l65.4 65.4c7.9 7.9 11.1 19.4 8.4 30.3s-10.8 19.6-21.5 22.9l-256 80c-11.4 3.5-23.8.5-32.2-7.9s-11.5-20.9-7.9-32.2l80-256c3.3-10.7 12-18.9 22.9-21.5s22.4.5 30.3 8.4l65.3 65.3l98.6-98.6c-14.3-14.6-14.2-38 .3-52.5l95.4-95.4c26.9-26.9 70.5-26.9 97.5 0s26.9 70.5 0 97.5l-95.4 95.4c-14.5 14.5-37.9 14.6-52.5.3"></svg:path>`,
})
export class Fa6SolidTrowelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTrowelBricksIcon],svg[fa6-solid-trowel-bricks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240.8 4.8C250.3 10.6 256 20.9 256 32v72h89c3.6-13.8 16.1-24 31-24h88c26.5 0 48 21.5 48 48s-21.5 48-48 48h-88c-14.9 0-27.4-10.2-31-24h-89v72c0 11.1-5.7 21.4-15.2 27.2s-21.2 6.4-31.1 1.4l-192-96C6.8 151.2 0 140.1 0 128s6.8-23.2 17.7-28.6l192-96c9.9-5 21.7-4.4 31.1 1.4M288 256c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32zM32 384h96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m192 0h256c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidTrowelBricksIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTruckIcon],svg[fa6-solid-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48zm368 160h50.7l77.3 77.3V256H416zM112 416a48 48 0 1 1 96 0a48 48 0 1 1-96 0m368-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96"></svg:path>`,
})
export class Fa6SolidTruckIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTruckArrowRightIcon],svg[fa6-solid-truck-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 48C0 21.5 21.5 0 48 0h320c26.5 0 48 21.5 48 48v48h50.7c17 0 33.3 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48zm416 208h128v-18.7L466.7 160H416zM160 464a48 48 0 1 0 0-96a48 48 0 1 0 0 96m368-48a48 48 0 1 0-96 0a48 48 0 1 0 96 0M257 95c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39L96 168c-13.3 0-24 10.7-24 24s10.7 24 24 24h166.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9z"></svg:path>`,
})
export class Fa6SolidTruckArrowRightIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTruckDropletIcon],svg[fa6-solid-truck-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 48C0 21.5 21.5 0 48 0h320c26.5 0 48 21.5 48 48v48h50.7c17 0 33.3 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48zm416 208h128v-18.7L466.7 160H416zM160 464a48 48 0 1 0 0-96a48 48 0 1 0 0 96m368-48a48 48 0 1 0-96 0a48 48 0 1 0 96 0M208 272c39.8 0 72-29.6 72-66c0-27-39.4-82.9-59.9-110.3c-6.1-8.2-18.1-8.2-24.2 0C175.4 123 136 179 136 206c0 36.5 32.2 66 72 66"></svg:path>`,
})
export class Fa6SolidTruckDropletIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTruckFastIcon],svg[fa6-solid-truck-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 0C85.5 0 64 21.5 64 48v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48zm432 237.3V256H416v-96h50.7zM160 368a48 48 0 1 1 0 96a48 48 0 1 1 0-96m272 48a48 48 0 1 1 96 0a48 48 0 1 1-96 0"></svg:path>`,
})
export class Fa6SolidTruckFastIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTruckFieldIcon],svg[fa6-solid-truck-field-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 96c0-35.3 28.7-64 64-64h224c23.7 0 44.4 12.9 55.4 32h51.8c25.3 0 48.2 14.9 58.5 38l52.8 118.8c.5 1.1.9 2.1 1.3 3.2h4.2c35.3 0 64 28.7 64 64v32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H32c-17.7 0-32-14.3-32-32s14.3-32 32-32v-32c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32zm352 128h85.9l-42.7-96H384zM160 432a48 48 0 1 0 0-96a48 48 0 1 0 0 96m368-48a48 48 0 1 0-96 0a48 48 0 1 0 96 0"></svg:path>`,
})
export class Fa6SolidTruckFieldIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTruckFieldUnIcon],svg[fa6-solid-truck-field-un-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 32c-35.3 0-64 28.7-64 64v32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32v32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32v-32c0-35.3-28.7-64-64-64h-4.2c-.4-1.1-.9-2.1-1.3-3.2L485.7 102c-10.3-23.1-33.2-38-58.5-38h-51.8c-11-19.1-31.7-32-55.4-32zm288 96h43.2l42.7 96H384zM112 384a48 48 0 1 1 96 0a48 48 0 1 1-96 0m368-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96M253.3 135.1l34.7 52v-43.2c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 7.1-4.6 13.3-11.4 15.3s-14-.6-17.9-6.4l-34.7-52V240c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-7.1 4.6-13.3 11.4-15.3s14 .6 17.9 6.4M128 144v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64c0 26.5-21.5 48-48 48s-48-21.5-48-48v-64c0-8.8 7.2-16 16-16s16 7.2 16 16"></svg:path>`,
})
export class Fa6SolidTruckFieldUnIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTruckFrontIcon],svg[fa6-solid-truck-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 80C0 35.8 35.8 0 80 0h352c44.2 0 80 35.8 80 80v288c0 26.2-12.6 49.4-32 64v48c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H128v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-48c-19.4-14.6-32-37.8-32-64zm129.9 72.2L112 224h288l-17.9-71.8C378.5 138 365.7 128 351 128H161c-14.7 0-27.5 10-31 24.2zM128 320a32 32 0 1 0-64 0a32 32 0 1 0 64 0m288 32a32 32 0 1 0 0-64a32 32 0 1 0 0 64"></svg:path>`,
})
export class Fa6SolidTruckFrontIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTruckMedicalIcon],svg[fa6-solid-truck-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 48C0 21.5 21.5 0 48 0h320c26.5 0 48 21.5 48 48v48h50.7c17 0 33.3 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48zm416 208h128v-18.7L466.7 160H416zM160 464a48 48 0 1 0 0-96a48 48 0 1 0 0 96m368-48a48 48 0 1 0-96 0a48 48 0 1 0 96 0M176 80v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48V80c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"></svg:path>`,
})
export class Fa6SolidTruckMedicalIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTruckMonsterIcon],svg[fa6-solid-truck-monster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 64v64h128l-48-64zm131.2-38.4L496 128h80c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32c-29.2-38.9-75.7-64-128-64s-98.8 25.1-128 64h-64c-29.2-38.9-75.7-64-128-64s-98.8 25.1-128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32v-64c0-17.7 14.3-32 32-32h160V48c0-26.5 21.5-48 48-48h96c20.1 0 39.1 9.5 51.2 25.6M152 256h16c12.1 0 22.1 8.9 23.8 20.6c7.6 2.2 14.9 5.3 21.7 9c9.4-7 22.8-6.3 31.3 2.3l11.3 11.3c8.6 8.6 9.3 21.9 2.3 31.3c3.7 6.8 6.8 14.1 9 21.7C279 353.9 288 363.9 288 376v16c0 12.1-8.9 22.1-20.6 23.8c-2.2 7.6-5.3 14.9-9 21.7c7 9.4 6.3 22.8-2.3 31.3l-11.3 11.3c-8.6 8.6-21.9 9.3-31.3 2.2c-6.8 3.7-14.1 6.8-21.7 9c-1.7 11.8-11.7 20.7-23.8 20.7h-16c-12.1 0-22.1-8.9-23.8-20.6c-7.6-2.2-14.9-5.3-21.7-9c-9.4 7.1-22.8 6.3-31.3-2.2l-11.4-11.3c-8.6-8.6-9.3-21.9-2.3-31.3c-3.7-6.9-6.8-14.1-9-21.8C40.9 414.1 32 404.1 32 392v-16c0-12.1 8.9-22.1 20.6-23.8c2.2-7.6 5.3-14.9 9-21.8c-7-9.4-6.3-22.8 2.3-31.3l11.3-11.3c8.6-8.6 21.9-9.3 31.3-2.3c6.8-3.7 14.1-6.8 21.7-9c1.7-11.6 11.7-20.6 23.8-20.6zm8 176a48 48 0 1 0 0-96a48 48 0 1 0 0 96m288.2-155.4C449.9 265 459.9 256 472 256h16c12.1 0 22.1 8.9 23.8 20.6c7.6 2.2 14.9 5.3 21.8 9c9.4-7 22.8-6.3 31.3 2.3l11.3 11.3c8.6 8.6 9.3 21.9 2.2 31.3c3.7 6.8 6.8 14.1 9 21.7C599 353.9 608 363.9 608 376v16c0 12.1-8.9 22.1-20.6 23.8c-2.2 7.6-5.3 14.9-9 21.7c7 9.4 6.3 22.8-2.2 31.3l-11.3 11.3c-8.6 8.6-21.9 9.3-31.3 2.2c-6.9 3.7-14.1 6.8-21.8 9c-1.7 11.8-11.7 20.7-23.8 20.7h-16c-12.1 0-22.1-8.9-23.8-20.6c-7.6-2.2-14.9-5.3-21.7-9c-9.4 7.1-22.8 6.3-31.3-2.2l-11.3-11.3c-8.6-8.6-9.3-21.9-2.2-31.3c-3.7-6.9-6.8-14.1-9-21.8c-11.8-1.7-20.7-11.7-20.7-23.8v-16c0-12.1 8.9-22.1 20.6-23.8c2.2-7.6 5.3-14.9 9-21.8c-7-9.4-6.3-22.8 2.2-31.3l11.3-11.3c8.6-8.6 21.9-9.3 31.3-2.3c6.8-3.7 14.1-6.8 21.7-9zM528 384a48 48 0 1 0-96 0a48 48 0 1 0 96 0"></svg:path>`,
})
export class Fa6SolidTruckMonsterIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTruckMovingIcon],svg[fa6-solid-truck-moving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v304c0 44.2 35.8 80 80 80c26.2 0 49.4-12.6 64-32c14.6 19.4 37.8 32 64 32c44.2 0 80-35.8 80-80c0-5.5-.6-10.8-1.6-16h163.2c-1 5.2-1.6 10.5-1.6 16c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16h1.6c17.7 0 32-14.3 32-32v-90.3c0-9.2-3.2-18.2-9-25.3l-58.8-71.8c-10.6-13-26.5-20.5-43.3-20.5L480 144V96c0-35.3-28.7-64-64-64zm521 224H480v-64h48.8c2.4 0 4.7 1.1 6.2 2.9zm-57 112a32 32 0 1 1 0 64a32 32 0 1 1 0-64m-352 32a32 32 0 1 1 64 0a32 32 0 1 1-64 0m-96-32a32 32 0 1 1 0 64a32 32 0 1 1 0-64"></svg:path>`,
})
export class Fa6SolidTruckMovingIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTruckPickupIcon],svg[fa6-solid-truck-pickup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m368.6 96l76.8 96H288V96zM224 80v112H64c-17.7 0-32 14.3-32 32v64c-17.7 0-32 14.3-32 32s14.3 32 32 32h33.1c-.7 5.2-1.1 10.6-1.1 16c0 61.9 50.1 112 112 112s112-50.1 112-112c0-5.4-.4-10.8-1.1-16h66.3c-.7 5.2-1.1 10.6-1.1 16c0 61.9 50.1 112 112 112s112-50.1 112-112c0-5.4-.4-10.8-1.1-16h33.1c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c0-17.7-14.3-32-32-32h-48.6L418.6 56c-12.1-15.2-30.5-24-50-24H272c-26.5 0-48 21.5-48 48m0 288a48 48 0 1 1-96 0a48 48 0 1 1 96 0m288 0a48 48 0 1 1-96 0a48 48 0 1 1 96 0"></svg:path>`,
})
export class Fa6SolidTruckPickupIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTruckPlaneIcon],svg[fa6-solid-truck-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 0c-30.6 0-56 54.7-56 86.1v106.5L7.8 274.3C2.9 277.2 0 282.4 0 288v64c0 5.1 2.4 9.8 6.4 12.8s9.3 3.9 14.1 2.5l123.4-37v81.2l-50 40c-3.8 3-6 7.6-6 12.5v32c0 5.1 2.5 10 6.6 13s9.5 3.8 14.4 2.2l91.1-30.3l90.4 30.1c-1.6-4.7-2.4-9.8-2.4-15v-32.6c-18.2-10.5-30.7-29.7-31.9-51.8l-.1-.1V86c0-31.3-24.5-86-56-86m88 176v224c0 20.9 13.4 38.7 32 45.3V488c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-40h160v40c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-42.7c18.6-6.6 32-24.4 32-45.3V176c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48m79.8 78.7c3.3-8.7 11.2-14.7 20.5-14.7h151.4c9.2 0 17.2 6 20.5 14.7L576 304H352zM568 352a24 24 0 1 1 0 48a24 24 0 1 1 0-48m-232 24a24 24 0 1 1 48 0a24 24 0 1 1-48 0"></svg:path>`,
})
export class Fa6SolidTruckPlaneIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTruckRampBoxIcon],svg[fa6-solid-truck-ramp-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 0v400c0 61.9-50.1 112-112 112c-61 0-110.5-48.7-112-109.3L48.4 502.9c-17.1 4.6-34.6-5.4-39.3-22.5s5.4-34.6 22.5-39.3L352 353.8V64c0-35.3 28.7-64 64-64zm-64 400a48 48 0 1 0-96 0a48 48 0 1 0 96 0M23.1 207.7c-4.6-17.1 5.6-34.6 22.6-39.2l46.4-12.4l20.7 77.3c2.3 8.5 11.1 13.6 19.6 11.3l30.9-8.3c8.5-2.3 13.6-11.1 11.3-19.6l-20.7-77.3l46.4-12.4c17.1-4.6 34.6 5.6 39.2 22.6l41.4 154.5c4.6 17.1-5.6 34.6-22.6 39.2l-154.6 41.5c-17.1 4.6-34.6-5.6-39.2-22.6z"></svg:path>`,
})
export class Fa6SolidTruckRampBoxIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTtyIcon],svg[fa6-solid-tty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m38.3 241.3l-23.2-40.7c-9.2-16.2-8.4-36.5 4.5-50C61.4 106.8 144.7 48 256 48s194.6 58.8 236.4 102.6c12.9 13.5 13.7 33.8 4.5 50l-23.1 40.7c-7.5 13.2-23.3 19.3-37.8 14.6l-81.1-26.6c-13.1-4.3-22-16.6-22-30.4v-54.8c-49.6-18.1-104-18.1-153.6 0v54.8c0 13.8-8.9 26.1-22 30.4l-81.2 26.5c-14.5 4.7-30.3-1.4-37.8-14.6zM32 336c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16zm0 96c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16zm112-112h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m-304 16c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16z"></svg:path>`,
})
export class Fa6SolidTtyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTurkishLiraSignIcon],svg[fa6-solid-turkish-lira-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 32c17.7 0 32 14.3 32 32v35.3l119.2-34.1c17-4.9 34.7 5 39.6 22s-5 34.7-22 39.6L128 165.9v29.4l119.2-34.1c17-4.9 34.7 5 39.6 22s-5 34.7-22 39.6L128 261.9V416h63.8c68.2 0 124.4-53.5 127.8-121.6l.4-8c.9-17.7 15.9-31.2 33.6-30.4s31.2 15.9 30.4 33.6l-.4 8C378.5 399.8 294.1 480 191.8 480H96c-17.7 0-32-14.3-32-32V280.1l-23.2 6.6c-17 4.9-34.7-5-39.6-22s5-34.7 22-39.6L64 213.6v-29.4l-23.2 6.6c-17 4.9-34.7-5-39.6-22s5-34.7 22-39.6L64 117.6V64c0-17.7 14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidTurkishLiraSignIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTurnDownIcon],svg[fa6-solid-turn-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M350 334.5c3.8 8.8 2 19-4.6 26l-136 144c-4.5 4.8-10.8 7.5-17.4 7.5s-12.9-2.7-17.4-7.5l-136-144c-6.6-7-8.4-17.2-4.6-26S46.5 320 56 320h88V128c0-17.7-14.3-32-32-32H32C14.3 96 0 81.7 0 64V32C0 14.3 14.3 0 32 0h80c70.7 0 128 57.3 128 128v192h88c9.6 0 18.2 5.7 22 14.5"></svg:path>`,
})
export class Fa6SolidTurnDownIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTurnUpIcon],svg[fa6-solid-turn-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M350 177.5c3.8-8.8 2-19-4.6-26l-136-144C204.9 2.7 198.6 0 192 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S46.5 192 56 192h88v192c0 17.7-14.3 32-32 32H32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h80c70.7 0 128-57.3 128-128V192h88c9.6 0 18.2-5.7 22-14.5"></svg:path>`,
})
export class Fa6SolidTurnUpIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTvIcon],svg[fa6-solid-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 64v288h512V64zM0 64C0 28.7 28.7 0 64 0h512c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 384h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidTvIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUIcon],svg[fa6-solid-u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 32c17.7 0 32 14.3 32 32v224c0 70.7 57.3 128 128 128s128-57.3 128-128V64c0-17.7 14.3-32 32-32s32 14.3 32 32v224c0 106-86 192-192 192S0 394 0 288V64c0-17.7 14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidUIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUmbrellaIcon],svg[fa6-solid-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 0c17.7 0 32 14.3 32 32v17.7C451.8 63.4 557.7 161 573.9 285.9c2 15.6-17.3 24.4-27.8 12.7c-14-15.6-41.3-26.6-66.1-26.6c-38.7 0-71 27.5-78.4 64.1c-1.7 8.7-8.7 15.9-17.6 15.9s-15.8-7.2-17.6-15.9C359 299.5 326.7 272 288 272s-71 27.5-78.4 64.1c-1.7 8.7-8.7 15.9-17.6 15.9s-15.8-7.2-17.6-15.9C167 299.5 134.7 272 96 272c-24.8 0-52.1 11-66.1 26.7c-10.5 11.7-29.8 2.8-27.8-12.8C18.3 161 124.2 63.4 256 49.7V32c0-17.7 14.3-32 32-32m0 304c12.3 0 23.5 4.6 32 12.2v114.3c0 45-36.5 81.4-81.4 81.4c-30.8 0-59-17.4-72.8-45l-2.3-4.7c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l2.3 4.7c3 5.9 9 9.6 15.6 9.6c9.6 0 17.4-7.8 17.4-17.4V316.2c8.5-7.6 19.7-12.2 32-12.2"></svg:path>`,
})
export class Fa6SolidUmbrellaIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUmbrellaBeachIcon],svg[fa6-solid-umbrella-beach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m346.3 271.8l-60.1-21.9L214 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.1l64.1-176.2zm121.1-.2l-3.3 9.1l67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4M462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5zm-354.8 13.8c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8l3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z"></svg:path>`,
})
export class Fa6SolidUmbrellaBeachIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUnderlineIcon],svg[fa6-solid-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-16v128c0 53 43 96 96 96s96-43 96-96V96h-16c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-16v128c0 88.4-71.6 160-160 160S64 312.4 64 224V96H48c-17.7 0-32-14.3-32-32M0 448c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32"></svg:path>`,
})
export class Fa6SolidUnderlineIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUniversalAccessIcon],svg[fa6-solid-universal-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0m161.5-86.1c-12.2-5.2-26.3.4-31.5 12.6s.4 26.3 12.6 31.5l11.9 5.1c17.3 7.4 35.2 12.9 53.6 16.3v50.1c0 4.3-.7 8.6-2.1 12.6l-28.7 86.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l24.4-73.2c1.3-3.8 4.8-6.4 8.8-6.4s7.6 2.6 8.8 6.4l24.4 73.2c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-28.7-86.1q-2.1-6.15-2.1-12.6v-50.1c18.4-3.5 36.3-8.9 53.6-16.3l11.9-5.1c12.2-5.2 17.8-19.3 12.6-31.5s-19.3-17.8-31.5-12.6l-12 5.1c-26.1 11.2-54.2 17-82.7 17s-56.5-5.8-82.7-17l-11.9-5.1zM256 160a40 40 0 1 0 0-80a40 40 0 1 0 0 80"></svg:path>`,
})
export class Fa6SolidUniversalAccessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUnlockIcon],svg[fa6-solid-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144v48H64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H144z"></svg:path>`,
})
export class Fa6SolidUnlockIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUnlockKeyholeIcon],svg[fa6-solid-unlock-keyhole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 64c-44.2 0-80 35.8-80 80v48h240c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64h16v-48C80 64.5 144.5 0 224 0c57.5 0 107 33.7 130.1 82.3c7.6 16 .8 35.1-15.2 42.6s-35.1.8-42.6-15.2C283.4 82.6 255.9 64 224 64m32 320c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32z"></svg:path>`,
})
export class Fa6SolidUnlockKeyholeIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUpDownIcon],svg[fa6-solid-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M145.6 7.7C141 2.8 134.7 0 128 0s-13 2.8-17.6 7.7l-104 112c-6.5 7-8.2 17.2-4.4 25.9S14.5 160 24 160h56v192H24c-9.5 0-18.2 5.7-22 14.4s-2.1 18.9 4.4 25.9l104 112c4.5 4.9 10.9 7.7 17.6 7.7s13-2.8 17.6-7.7l104-112c6.5-7 8.2-17.2 4.4-25.9S241.5 352 232 352h-56V160h56c9.5 0 18.2-5.7 22-14.4s2.1-18.9-4.4-25.9z"></svg:path>`,
})
export class Fa6SolidUpDownIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUpDownLeftRightIcon],svg[fa6-solid-up-down-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32v96h-96v-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9S128 333 128 320v-32h96v96h-32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9S332.9 384 319.9 384h-32v-96h96v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6v32h-96v-96h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9z"></svg:path>`,
})
export class Fa6SolidUpDownLeftRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUpLongIcon],svg[fa6-solid-up-long-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M318 177.5c3.8-8.8 2-19-4.6-26l-136-144C172.9 2.7 166.6 0 160 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S14.4 192 24 192h72v288c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V192h72c9.6 0 18.2-5.7 22-14.5"></svg:path>`,
})
export class Fa6SolidUpLongIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUpRightAndDownLeftFromCenterIcon],svg[fa6-solid-up-right-and-down-left-from-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M344 0h144c13.3 0 24 10.7 24 24v144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39l-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0M168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39l87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87l39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z"></svg:path>`,
})
export class Fa6SolidUpRightAndDownLeftFromCenterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUpRightFromSquareIcon],svg[fa6-solid-up-right-from-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32zM80 32C35.8 32 0 67.8 0 112v320c0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h112c17.7 0 32-14.3 32-32s-14.3-32-32-32z"></svg:path>`,
})
export class Fa6SolidUpRightFromSquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUploadIcon],svg[fa6-solid-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0zM64 352h128c0 35.3 28.7 64 64 64s64-28.7 64-64h128c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-32c0-35.3 28.7-64 64-64m368 104a24 24 0 1 0 0-48a24 24 0 1 0 0 48"></svg:path>`,
})
export class Fa6SolidUploadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserIcon],svg[fa6-solid-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256m-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7c0-98.5-79.8-178.3-178.3-178.3z"></svg:path>`,
})
export class Fa6SolidUserIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserAstronautIcon],svg[fa6-solid-user-astronaut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M370.7 96.1C346.1 39.5 289.7 0 224 0S101.9 39.5 77.3 96.1C60.9 97.5 48 111.2 48 128v64c0 16.8 12.9 30.5 29.3 31.9c24.6 56.6 81 96.1 146.7 96.1s122.1-39.5 146.7-96.1c16.4-1.4 29.3-15.1 29.3-31.9v-64c0-16.8-12.9-30.5-29.3-31.9M336 144v16c0 53-43 96-96 96h-32c-53 0-96-43-96-96v-16c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48m-146.7 18.7l-6-21.2c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2l-21.2 6c-3.3.9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6l6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2l21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3zm-76.6 153.8C46.7 342.6 0 407 0 482.3C0 498.7 13.3 512 29.7 512H128v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h98.3c16.4 0 29.7-13.3 29.7-29.7c0-75.3-46.7-139.7-112.7-165.8C303.9 338.8 265.5 352 224 352s-79.9-13.2-111.3-35.5M176 448c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16m96 32a16 16 0 1 0 0-32a16 16 0 1 0 0 32"></svg:path>`,
})
export class Fa6SolidUserAstronautIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserCheckIcon],svg[fa6-solid-user-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 128a128 128 0 1 1 256 0a128 128 0 1 1-256 0M0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3M625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></svg:path>`,
})
export class Fa6SolidUserCheckIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserClockIcon],svg[fa6-solid-user-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 0a128 128 0 1 1 0 256a128 128 0 1 1 0-256m-45.7 304h91.4c20.6 0 40.4 3.5 58.8 9.9C323 331 320 349.1 320 368c0 59.5 29.5 112.1 74.8 144H29.7C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304M352 368a144 144 0 1 1 288 0a144 144 0 1 1-288 0m144-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-48c0-8.8-7.2-16-16-16"></svg:path>`,
})
export class Fa6SolidUserClockIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserDoctorIcon],svg[fa6-solid-user-doctor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256m-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16v-24c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-40c0-29.8 20.4-54.9 48-62v-57.1q-9-.9-18.3-.9h-91.4q-9.3 0-18.3.9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7zM144 448a24 24 0 1 0 0-48a24 24 0 1 0 0 48"></svg:path>`,
})
export class Fa6SolidUserDoctorIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserGearIcon],svg[fa6-solid-user-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 0a128 128 0 1 1 0 256a128 128 0 1 1 0-256m-45.7 304h91.4c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7v.9c0 9.2 2.7 18.5 7.9 26.3l-382.2.1C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304M436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8v30.6c7.9 3.4 15.4 7.7 22.3 12.8l24.9-14.3c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-25 14.4c.4 4 .7 8.1.7 12.3s-.2 8.2-.7 12.3l25 14.4c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4L546.3 442c-6.9 5.1-14.3 9.4-22.3 12.8v30.6c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8v-30.5c-8-3.4-15.6-7.7-22.5-12.9l-24.7 14.3c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l24.8-14.3c-.4-4.1-.7-8.2-.7-12.4s.2-8.3.7-12.4L343.8 325c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l24.8 14.3c6.9-5.1 14.5-9.4 22.5-12.9v-30.5zm92.1 133.5a48.1 48.1 0 1 0-96.1 0a48.1 48.1 0 1 0 96.1 0"></svg:path>`,
})
export class Fa6SolidUserGearIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserGraduateIcon],svg[fa6-solid-user-graduate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.3.5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128S96 230.7 96 160v-57.1l-48-9.6v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3S52.8 256 48 256H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64c0-11.4 8.1-21.3 19.3-23.5zM111.9 327.7c10.5-3.4 21.8.4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5c65 20.9 112 81.7 112 153.6c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6"></svg:path>`,
})
export class Fa6SolidUserGraduateIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserGroupIcon],svg[fa6-solid-user-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 128a128 128 0 1 1 256 0a128 128 0 1 1-256 0M0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3M609.3 512H471.5c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4c89 0 161.2 72.2 161.2 161.3c0 17-13.8 30.7-30.7 30.7M432 256c-31 0-59-12.6-79.3-32.9c19.7-26.6 31.3-59.5 31.3-95.1c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112"></svg:path>`,
})
export class Fa6SolidUserGroupIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserInjuredIcon],svg[fa6-solid-user-injured-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 80h102.7c-7.9-19.5-20.4-36.5-36.2-49.9zm37.7-68.2C261.3 4.2 243.2 0 224 0c-53.7 0-99.7 33.1-118.7 80h81.4zM224 256c70.7 0 128-57.3 128-128c0-5.4-.3-10.8-1-16H97c-.7 5.2-1 10.6-1 16c0 70.7 57.3 128 128 128m-100 56.4c-9.7 3.1-19.1 7-28 11.7V512h147.7l-62.2-103.8zm33-7.2l47.3 78.8H272c44.2 0 80 35.8 80 80c0 18-6 34.6-16 48h82.3c16.4 0 29.7-13.3 29.7-29.7c0-98.5-79.8-178.3-178.3-178.3h-91.4c-7.2 0-14.3.4-21.3 1.3zM0 482.3C0 498.7 13.3 512 29.7 512H64V345.4C24.9 378.1 0 427.3 0 482.3M320 464c0-26.5-21.5-48-48-48h-48.5l57.1 95.2c22.4-4 39.4-23.6 39.4-47.2"></svg:path>`,
})
export class Fa6SolidUserInjuredIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserLargeIcon],svg[fa6-solid-user-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 288a144 144 0 1 0 0-288a144 144 0 1 0 0 288m-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7h450.6c17 0 30.7-13.8 30.7-30.7c0-89.1-72.2-161.3-161.3-161.3z"></svg:path>`,
})
export class Fa6SolidUserLargeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserLargeSlashIcon],svg[fa6-solid-user-large-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L381.9 274c48.5-23.2 82.1-72.7 82.1-130C464 64.5 399.5 0 320 0c-69.6 0-127.6 49.3-141.1 114.9zM545.5 512H528L284.3 320h-59C136.2 320 64 392.2 64 481.3c0 17 13.8 30.7 30.7 30.7h450.9z"></svg:path>`,
})
export class Fa6SolidUserLargeSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserLockIcon],svg[fa6-solid-user-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256m-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512h362.8c-5.4-9.4-8.6-20.3-8.6-32V352q0-3.15.3-6.3c-31-26-71-41.7-114.6-41.7h-91.4zM528 240c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32m-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80"></svg:path>`,
})
export class Fa6SolidUserLockIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserMinusIcon],svg[fa6-solid-user-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 128a128 128 0 1 1 256 0a128 128 0 1 1-256 0M0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3M472 200h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H472c-13.3 0-24-10.7-24-24s10.7-24 24-24"></svg:path>`,
})
export class Fa6SolidUserMinusIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserNinjaIcon],svg[fa6-solid-user-ninja-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 256c-57.2 0-105.6-37.5-122-89.3c-1.1 1.3-2.2 2.6-3.5 3.8c-15.8 15.8-38.8 20.7-53.6 22.1c-8.1.8-14.6-5.7-13.8-13.8c1.4-14.7 6.3-37.8 22.1-53.6c5.8-5.8 12.6-10.1 19.6-13.4c-7-3.2-13.8-7.6-19.6-13.4c-15.8-15.7-20.6-38.7-22.1-53.5c-.8-8.1 5.7-14.6 13.8-13.8c14.7 1.4 37.8 6.3 53.6 22.1c4.8 4.8 8.7 10.4 11.7 16.1C131.4 28.2 174.4 0 224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128M0 482.3C0 399.5 56.4 330 132.8 309.9c6-1.6 12.2.9 15.9 5.8l62.5 83.3c6.4 8.5 19.2 8.5 25.6 0l62.5-83.3c3.7-4.9 9.9-7.4 15.9-5.8C391.6 330 448 399.5 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3M160 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></svg:path>`,
})
export class Fa6SolidUserNinjaIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserNurseIcon],svg[fa6-solid-user-nurse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 128V70.2c0-13.3 8.3-25.3 20.8-30l96-36c7.2-2.7 15.2-2.7 22.5 0l96 36c12.5 4.7 20.8 16.6 20.8 30V128h-.3c.2 2.6.3 5.3.3 8v40c0 70.7-57.3 128-128 128s-128-57.3-128-128v-40c0-2.7.1-5.4.3-8h-.3zm48 48c0 44.2 35.8 80 80 80s80-35.8 80-80v-16H144zm-32.1 151.7c10.5-3.4 21.8.4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5c65 20.9 112 81.7 112 153.6c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6M208 48v16h-16c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h16v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V96h16c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8h-16V48c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8"></svg:path>`,
})
export class Fa6SolidUserNurseIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserPenIcon],svg[fa6-solid-user-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256m-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512h293.1c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1h-91.4zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4l71 71l29.4-29.4c15.6-15.6 15.6-40.9 0-56.6zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4l129.2-129.3l-71-71z"></svg:path>`,
})
export class Fa6SolidUserPenIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserPlusIcon],svg[fa6-solid-user-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 128a128 128 0 1 1 256 0a128 128 0 1 1-256 0M0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3M504 312v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24"></svg:path>`,
})
export class Fa6SolidUserPlusIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserSecretIcon],svg[fa6-solid-user-secret-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4c-47.3 8.7-78 22.8-78 38.6c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7.3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143l38.7-96.9c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4h-59.9c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1m56 208h-12.4c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40v-14.4c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40m-88 96l16 32l-32 128l-48-192zm128-32l-48 192l-32-128l16-32z"></svg:path>`,
})
export class Fa6SolidUserSecretIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserShieldIcon],svg[fa6-solid-user-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256m-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512h388.6c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3h-91.4zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0M591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.9z"></svg:path>`,
})
export class Fa6SolidUserShieldIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserSlashIcon],svg[fa6-solid-user-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L353.3 251.6C407.9 237 448 187.2 448 128C448 57.3 390.7 0 320 0c-69.8 0-126.5 55.8-128 125.2zm225.5 299.2C170.5 309.4 96 387.2 96 482.3c0 16.4 13.3 29.7 29.7 29.7h388.6c3.9 0 7.6-.7 11-2.1z"></svg:path>`,
})
export class Fa6SolidUserSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserTagIcon],svg[fa6-solid-user-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256m-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512h388.6c10 0 18.8-4.9 24.2-12.5l-99.2-99.2c-14.9-14.9-23.3-35.1-23.3-56.1v-33c-15.9-4.7-32.8-7.2-50.3-7.2zM384 224c-17.7 0-32 14.3-32 32v82.7c0 17 6.7 33.3 18.7 45.3l107.4 107.3c18.7 18.7 49.1 18.7 67.9 0l73.4-73.4c18.7-18.7 18.7-49.1 0-67.9L512 242.7c-12-12-28.3-18.7-45.3-18.7zm24 80a24 24 0 1 1 48 0a24 24 0 1 1-48 0"></svg:path>`,
})
export class Fa6SolidUserTagIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserTieIcon],svg[fa6-solid-user-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 128a128 128 0 1 0 256 0a128 128 0 1 0-256 0m94.5 200.2l18.6 31l-33.3 123.9l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7h386.6c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9l-33.3-123.9l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2h-39.5c-12.4 0-20.1 13.6-13.7 24.2z"></svg:path>`,
})
export class Fa6SolidUserTieIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUserXmarkIcon],svg[fa6-solid-user-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 128a128 128 0 1 1 256 0a128 128 0 1 1-256 0M0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3M471 143c9.4-9.4 24.6-9.4 33.9 0l47 47l47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47l47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47l-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47l-47-47c-9.4-9.4-9.4-24.6 0-33.9"></svg:path>`,
})
export class Fa6SolidUserXmarkIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUsersIcon],svg[fa6-solid-users-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 0a80 80 0 1 1 0 160a80 80 0 1 1 0-160m368 0a80 80 0 1 1 0 160a80 80 0 1 1 0-160M0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7M405.3 320h-.7c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7c0 11.8-9.6 21.3-21.3 21.3H405.4zM224 224a96 96 0 1 1 192 0a96 96 0 1 1-192 0m-96 261.3c0-73.6 59.7-133.3 133.3-133.3h117.3c73.7 0 133.4 59.7 133.4 133.3c0 14.7-11.9 26.7-26.7 26.7H154.6c-14.7 0-26.7-11.9-26.7-26.7z"></svg:path>`,
})
export class Fa6SolidUsersIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUsersBetweenLinesIcon],svg[fa6-solid-users-between-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h592c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 48 0 37.3 0 24m0 464c0-13.3 10.7-24 24-24h592c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24m83.2-328a64 64 0 1 1 128 0a64 64 0 1 1-128 0M32 320c0-35.3 28.7-64 64-64h96c12.2 0 23.7 3.4 33.4 9.4c-37.2 15.1-65.6 47.2-75.8 86.6H64c-17.7 0-32-14.3-32-32m461.6 32c-10.3-40.1-39.6-72.6-77.7-87.4c9.4-5.5 20.4-8.6 32.1-8.6h96c35.3 0 64 28.7 64 64c0 17.7-14.3 32-32 32zm-102.4-61.6c32.1 7.4 58.1 30.9 68.9 61.6c3.5 10 5.5 20.8 5.5 32c0 17.7-14.3 32-32 32h-224c-17.7 0-32-14.3-32-32c0-11.2 1.9-22 5.5-32c10.5-29.7 35.3-52.8 66.1-60.9c7.8-2.1 16-3.1 24.5-3.1h96c7.4 0 14.7.8 21.6 2.4zm44-130.4a64 64 0 1 1 128 0a64 64 0 1 1-128 0M321.6 96a80 80 0 1 1 0 160a80 80 0 1 1 0-160"></svg:path>`,
})
export class Fa6SolidUsersBetweenLinesIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUsersGearIcon],svg[fa6-solid-users-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 160a80 80 0 1 0 0-160a80 80 0 1 0 0 160m368 0a80 80 0 1 0 0-160a80 80 0 1 0 0 160M0 298.7C0 310.4 9.6 320 21.3 320h214c-26.6-23.5-43.3-57.8-43.3-96c0-7.6.7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7h-42.7C47.8 192 0 239.8 0 298.7M320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96m65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.4C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7h300.6c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2l-.1-.2l-2.4-4.1l-.1-.2l-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5v-4.6l-2.7-1.5zM533.3 192h-42.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5.9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3.6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3.7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3l-2.9 1.7c-9.2 5.3-20.4 4-29.6-1.3s-16.1-14.5-16.1-25.1v-3.4c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4.5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v3.4c0 10.6-6.9 19.8-16.1 25.1s-20.4 6.6-29.6 1.3l-2.9-1.7c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8.5 14.3 6.8 17.9l2.9 1.7c9.2 5.3 13.7 15.8 13.7 26.4s-4.5 21.1-13.7 26.4l-3 1.7c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3l2.9-1.7c9.2-5.3 20.4-4 29.6 1.3s16.1 14.5 16.1 25.1v3.4c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9V492c0-10.6 6.9-19.8 16.1-25.1s20.4-6.6 29.6-1.3l2.9 1.7c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-3-1.7c-9.2-5.3-13.7-15.8-13.7-26.4s4.5-21.1 13.7-26.4l3-1.7zM472 384a40 40 0 1 1 80 0a40 40 0 1 1-80 0"></svg:path>`,
})
export class Fa6SolidUsersGearIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUsersLineIcon],svg[fa6-solid-users-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.2 96a64 64 0 1 0-128 0a64 64 0 1 0 128 0M32 256c0 17.7 14.3 32 32 32h85.6c10.1-39.4 38.6-71.5 75.8-86.6c-9.7-6-21.2-9.4-33.4-9.4H96c-35.3 0-64 28.7-64 64m461.6 32H576c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64h-96c-11.7 0-22.7 3.1-32.1 8.6c38.1 14.8 67.4 47.3 77.7 87.4m-102.4-61.6c-6.9-1.6-14.2-2.4-21.6-2.4h-96c-8.5 0-16.7 1.1-24.5 3.1c-30.8 8.1-55.6 31.1-66.1 60.9c-3.5 10-5.5 20.8-5.5 32c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32c0-11.2-1.9-22-5.5-32c-10.8-30.7-36.8-54.2-68.9-61.6zM563.2 96a64 64 0 1 0-128 0a64 64 0 1 0 128 0m-241.6 96a80 80 0 1 0 0-160a80 80 0 1 0 0 160M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32h576c17.7 0 32-14.3 32-32s-14.3-32-32-32z"></svg:path>`,
})
export class Fa6SolidUsersLineIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUsersRaysIcon],svg[fa6-solid-users-rays-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M41 7C31.6-2.3 16.4-2.3 7 7s-9.3 24.6 0 34l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zm558 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9S608.3-2.4 599 7M7 505c9.4 9.4 24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 471c-9.4 9.4-9.4 24.6 0 33.9zm592 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9zM320 256a64 64 0 1 0 0-128a64 64 0 1 0 0 128m-107.9 80c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24c-.5-1.4-1-2.7-1.6-4c-9.4-22.3-29.8-38.9-54.3-43c-3.9-.7-7.9-1-12-1h-80c-4.1 0-8.1.3-12 1c-.8.1-1.7.3-2.5.5c-24.9 5.1-45.1 23-53.4 46.5m-36.3-112a48 48 0 1 0 0-96a48 48 0 1 0 0 96m-26.5 32c-29.4 0-53.3 23.9-53.3 53.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4h-69.3zm368 80c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3h-69.3c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6h56.1zM464 224a48 48 0 1 0 0-96a48 48 0 1 0 0 96"></svg:path>`,
})
export class Fa6SolidUsersRaysIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUsersRectangleIcon],svg[fa6-solid-users-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h448c53 0 96-43 96-96V96c0-53-43-96-96-96zM64 96c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm159.8 80a48 48 0 1 0-96 0a48 48 0 1 0 96 0M96 309.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4h-69.3c-29.5 0-53.4 23.9-53.4 53.3M461.2 336h56.1c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3h-69.3c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6zM372 289c-3.9-.7-7.9-1-12-1h-80c-4.1 0-8.1.3-12 1c-26 4.4-47.3 22.7-55.9 47c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24c-8.6-24.3-29.9-42.6-55.9-47m140-113a48 48 0 1 0-96 0a48 48 0 1 0 96 0m-192 80a64 64 0 1 0 0-128a64 64 0 1 0 0 128"></svg:path>`,
})
export class Fa6SolidUsersRectangleIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUsersSlashIcon],svg[fa6-solid-users-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L440.6 320h178.1c11.8 0 21.3-9.6 21.3-21.3c0-58.9-47.8-106.7-106.7-106.7h-42.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 30.2-10.5 58-28 79.9l-25.2-19.7c13.4-16.5 21.3-37.4 21.3-60.2c0-53-43-96-96-96c-31.1 0-58.7 14.8-76.3 37.7l-40.6-31.8c13-14.2 20.9-33.1 20.9-53.9c0-44.2-35.8-80-80-80c-27.7 0-52.1 14.1-66.5 35.5zM106.7 192C47.8 192 0 239.8 0 298.7C0 310.4 9.6 320 21.3 320h214c-20.6-18.2-35.2-42.8-40.8-70.8L121.8 192h-15.2zm154.6 160C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7h330.7c10.5 0 19.5-6 23.9-14.8L324.9 352zM512 160a80 80 0 1 0 0-160a80 80 0 1 0 0 160"></svg:path>`,
})
export class Fa6SolidUsersSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUsersViewfinderIcon],svg[fa6-solid-users-viewfinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 48h88c13.3 0 24-10.7 24-24S149.3 0 136 0H32C14.3 0 0 14.3 0 32v104c0 13.3 10.7 24 24 24s24-10.7 24-24zm127.8 176a48 48 0 1 0 0-96a48 48 0 1 0 0 96m-26.5 32c-29.4 0-53.3 23.9-53.3 53.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4h-69.3zm368 80c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3h-69.3c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6h56.1zm-89.4 0c-8.6-24.3-29.9-42.6-55.9-47c-3.9-.7-7.9-1-12-1h-80c-4.1 0-8.1.3-12 1c-26 4.4-47.3 22.7-55.9 47c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24M464 224a48 48 0 1 0 0-96a48 48 0 1 0 0 96m-80-32a64 64 0 1 0-128 0a64 64 0 1 0 128 0M504 48h88v88c0 13.3 10.7 24 24 24s24-10.7 24-24V32c0-17.7-14.3-32-32-32H504c-13.3 0-24 10.7-24 24s10.7 24 24 24M48 464v-88c0-13.3-10.7-24-24-24S0 362.7 0 376v104c0 17.7 14.3 32 32 32h104c13.3 0 24-10.7 24-24s-10.7-24-24-24zm456 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h104c17.7 0 32-14.3 32-32V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v88z"></svg:path>`,
})
export class Fa6SolidUsersViewfinderIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidUtensilsIcon],svg[fa6-solid-utensils-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 0c-16 0-128 32-128 176v112c0 35.3 28.7 64 64 64h32v128c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32M64 16C64 7.8 57.9 1 49.7.1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16v134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0S96.8 6.3 96.1 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8zm48.3 152h-.6l.3-.7z"></svg:path>`,
})
export class Fa6SolidUtensilsIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVIcon],svg[fa6-solid-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.7 34.5c16.3-6.8 35 .9 41.8 17.2L192 364.8L322.5 51.7c6.8-16.3 25.5-24 41.8-17.2s24 25.5 17.2 41.8l-160 384c-5 11.9-16.6 19.7-29.5 19.7s-24.6-7.8-29.5-19.7l-160-384c-6.8-16.3.9-35 17.2-41.8"></svg:path>`,
})
export class Fa6SolidVIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVanShuttleIcon],svg[fa6-solid-van-shuttle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 104v88h96V96H72c-4.4 0-8 3.6-8 8m482 88l-80.9-96H384v96zm-226 0V96h-96v96zm272 192h-16c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48V104c0-39.8 32.2-72 72-72h393.1c18.9 0 36.8 8.3 49 22.8L625 186.5c9.7 11.5 15 26.1 15 41.2V336c0 26.5-21.5 48-48 48m-64 0a48 48 0 1 0-96 0a48 48 0 1 0 96 0m-368 48a48 48 0 1 0 0-96a48 48 0 1 0 0 96"></svg:path>`,
})
export class Fa6SolidVanShuttleIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVaultIcon],svg[fa6-solid-vault-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64v352c0 35.3 28.7 64 64 64h16l16 32h64l16-32h224l16 32h64l16-32h16c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm160 320a80 80 0 1 0 0-160a80 80 0 1 0 0 160m0-240a160 160 0 1 1 0 320a160 160 0 1 1 0-320m256 141.3V336c0 8.8-7.2 16-16 16s-16-7.2-16-16V221.3c-18.6-6.6-32-24.4-32-45.3c0-26.5 21.5-48 48-48s48 21.5 48 48c0 20.9-13.4 38.7-32 45.3"></svg:path>`,
})
export class Fa6SolidVaultIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVectorSquareIcon],svg[fa6-solid-vector-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 80h32v32h-32zm-16-48c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32v192c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32h192c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32V160c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM96 160c17.7 0 32-14.3 32-32h192c0 17.7 14.3 32 32 32v192c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32zM48 400h32v32H48zm320 32v-32h32v32zM48 112V80h32v32z"></svg:path>`,
})
export class Fa6SolidVectorSquareIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVenusIcon],svg[fa6-solid-venus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 176a112 112 0 1 1 224 0a112 112 0 1 1-224 0m144 173.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1V384h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32z"></svg:path>`,
})
export class Fa6SolidVenusIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVenusDoubleIcon],svg[fa6-solid-venus-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 288a112 112 0 1 0 0-224a112 112 0 1 0 0 224m176-112c0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32v-34.9C78.1 334.1 16 262.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176m-24 142c14.6-15.6 26.8-33.4 36-53c18.8 14.4 42.4 23 68 23c61.9 0 112-50.1 112-112S509.9 64 448 64c-25.6 0-49.1 8.6-68 23c-9.3-19.5-21.5-37.4-36-53c29.1-21.4 65.1-34 104-34c97.2 0 176 78.8 176 176c0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32v-34.9c-26.6-4.9-51.1-15.7-72-31.1"></svg:path>`,
})
export class Fa6SolidVenusDoubleIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVenusMarsIcon],svg[fa6-solid-venus-mars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 288a112 112 0 1 0 0-224a112 112 0 1 0 0 224m176-112c0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32v-34.9C62.1 334.1 0 262.3 0 176C0 78.8 78.8 0 176 0s176 78.8 176 176m-80.1 184.6c19.3-10.1 36.9-23.1 52.1-38.4c20 18.5 46.7 29.8 76.1 29.8c61.9 0 112-50.1 112-112s-50.1-112-112-112c-7.2 0-14.3.7-21.1 2c-4.9-21.5-13-41.7-24-60.2c14.3-3.8 29.4-5.8 45-5.8c37 0 71.4 11.4 99.8 31l20.6-20.6L487 41c-6.9-6.9-8.9-17.2-5.2-26.2S494.3 0 504 0h112c13.3 0 24 10.7 24 24v112c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4l-20.6 20.6c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176c-50.5 0-96-21.3-128.1-55.4"></svg:path>`,
})
export class Fa6SolidVenusMarsIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVestIcon],svg[fa6-solid-vest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207.1 237.4L151.2 69.7C168.6 79.7 192.6 88 224 88s55.4-8.3 72.8-18.3l-70.3 210.9c-1.6 4.9-2.5 10-2.5 15.2V464c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V270.5c0-9.5-2.8-18.7-8.1-26.6L392 172.1c-5.3-7.9-8.1-17.1-8.1-26.6V48c0-26.5-21.5-48-48-48h-6.3c-18.6 0-33.9 9.7-43.9 18.8C276.4 27.2 257.2 40 224 40s-52.4-12.8-61.7-21.2C152.3 9.7 137 0 118.3 0H112C85.5 0 64 21.5 64 48v97.5c0 9.5-2.8 18.7-8.1 26.6L8.1 243.9C2.8 251.8 0 261.1 0 270.5V464c0 26.5 21.5 48 48 48h128c9.9 0 19-3 26.7-8.1c-6.8-11.7-10.7-25.4-10.7-39.9V295.8c0-8.6 1.4-17.1 4.1-25.3zm140.2 119.3l48 48c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-48-48c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0m-294.6 48l48-48c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-48 48c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6"></svg:path>`,
})
export class Fa6SolidVestIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVestPatchesIcon],svg[fa6-solid-vest-patches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m151.2 69.7l55.9 167.7l-11 33.1c-2.7 8.2-4.1 16.7-4.1 25.3V464c0 14.5 3.9 28.2 10.7 39.9c-7.7 5.1-16.8 8.1-26.7 8.1H48c-26.5 0-48-21.5-48-48V270.5c0-9.5 2.8-18.7 8.1-26.6L56 172.1c5.3-7.9 8.1-17.1 8.1-26.6L64 128V48c0-26.5 21.5-48 48-48h6.3c18.8 0 34.1 9.7 44.1 18.8C171.6 27.2 190.8 40 224 40s52.4-12.8 61.7-21.2C295.7 9.7 311 0 329.7 0h6.3c26.5 0 48 21.5 48 48v97.5c0 9.5 2.8 18.7 8.1 26.6l47.9 71.8c5.3 7.9 8.1 17.1 8.1 26.6L448 464c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V295.8c0-5.2.8-10.3 2.5-15.2l70.3-210.9C279.4 79.7 255.4 88 224 88s-55.4-8.3-72.8-18.3M96 456a40 40 0 1 0 0-80a40 40 0 1 0 0 80M63.5 255.5c-4.7 4.7-4.7 12.3 0 17L79 288l-15.5 15.5c-4.7 4.7-4.7 12.3 0 17s12.3 4.7 17 0L96 305l15.5 15.5c4.7 4.7 12.3 4.7 17 0s4.7-12.3 0-17L113 288l15.5-15.5c4.7-4.7 4.7-12.3 0-17s-12.3-4.7-17 0L96 271l-15.5-15.5c-4.7-4.7-12.3-4.7-17 0M304 280v40c0 8.8 7.2 16 16 16h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24"></svg:path>`,
})
export class Fa6SolidVestPatchesIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVialIcon],svg[fa6-solid-vial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M342.6 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4L28.1 342.6C10.1 360.6 0 385 0 410.5v5.5c0 53 43 96 96 96h5.5c25.5 0 49.9-10.1 67.9-28.1L448 205.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-32-32l-96-96l-32-32zM205.3 256L352 109.3l50.7 50.7l-96 96H205.2z"></svg:path>`,
})
export class Fa6SolidVialIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVialCircleCheckIcon],svg[fa6-solid-vial-circle-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32v170.8c-20.2 28.6-32 63.5-32 101.2c0 25.2 5.3 49.1 14.8 70.8c-17.3 24.9-46.2 41.2-78.8 41.2c-53 0-96-43-96-96V96C14.3 96 0 81.7 0 64m96 32v96h64V96zm128 272a144 144 0 1 1 288 0a144 144 0 1 1-288 0m211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L352 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6"></svg:path>`,
})
export class Fa6SolidVialCircleCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVialVirusIcon],svg[fa6-solid-vial-virus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32v288c0 53 43 96 96 96c28.6 0 54.2-12.5 71.8-32.3c.1-14.2 5.6-28.3 16.4-39.1c.2-.2.1-.6-.2-.6c-30.9 0-56-25.1-56-56s25.1-56 56-56c.3 0 .4-.4.2-.6c-21.9-21.9-21.9-57.3 0-79.2c2.4-2.4 5-4.6 7.8-6.5V96c17.7 0 32-14.3 32-32s-14.3-32-32-32zm64 160V96h64v96zm120 184c28.8 0 43.2 34.8 22.9 55.2c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0c20.4-20.4 55.2-5.9 55.2 22.9c0 13.3 10.7 24 24 24s24-10.7 24-24c0-28.8 34.8-43.2 55.2-22.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-20.3-20.4-5.9-55.2 22.9-55.2c13.3 0 24-10.7 24-24s-10.7-24-24-24c-28.8 0-43.2-34.8-22.9-55.2c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-20.4 20.3-55.2 5.9-55.2-22.9c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 28.8-34.8 43.2-55.2 22.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9c20.4 20.4 5.9 55.2-22.9 55.2c-13.3 0-24 10.7-24 24s10.7 24 24 24m104-88a32 32 0 1 1 0 64a32 32 0 1 1 0-64m40 96a24 24 0 1 1 48 0a24 24 0 1 1-48 0"></svg:path>`,
})
export class Fa6SolidVialVirusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVialsIcon],svg[fa6-solid-vials-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32v304c0 44.2-35.8 80-80 80s-80-35.8-80-80V96C14.3 96 0 81.7 0 64m136 32H88v160h48zm152-32c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32v304c0 44.2-35.8 80-80 80s-80-35.8-80-80V96c-17.7 0-32-14.3-32-32m136 32h-48v160h48z"></svg:path>`,
})
export class Fa6SolidVialsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVideoIcon],svg[fa6-solid-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm559.1-28.2c10.4 5.6 16.9 16.4 16.9 28.2v256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64l-14.2-9.5V174.9l14.2-9.5l96-64c9.8-6.5 22.4-7.2 32.9-1.6"></svg:path>`,
})
export class Fa6SolidVideoIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVideoSlashIcon],svg[fa6-solid-video-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.4-67.7l13.8 9.2c9.8 6.5 22.4 7.2 32.9 1.6S608 395.8 608 384V128c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6l-96 64l-14.2 9.5v150.9l-32-25.1V128c0-35.3-28.7-64-64-64H113.9zM407 416.7L32.3 121.5c-.2 2.1-.3 4.3-.3 6.5v256c0 35.3 28.7 64 64 64h256c23.4 0 43.9-12.6 55-31.3"></svg:path>`,
})
export class Fa6SolidVideoSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidViharaIcon],svg[fa6-solid-vihara-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m281 22l24.8-17.3c1.3-.9 2.7-1.8 4.1-2.4C313.1.7 316.6 0 320 0s6.9.7 10.1 2.2c1.4.7 2.8 1.5 4.1 2.4L359 22c34 23.8 71.8 41.5 111.8 52.4l23 6.3c1.8.5 3.6 1.1 5.2 2c3.2 1.7 5.9 4 8.1 6.8c3.8 4.9 5.6 11.3 4.7 17.8c-.4 2.8-1.2 5.4-2.5 7.8c-1.7 3.2-4 5.9-6.8 8.1c-4.3 3.2-9.6 5.1-15.1 4.9h-7.5v56.1l6.4 5.1l5.2 4.1c21.1 16.7 45 29.6 70.5 38.1l28.9 9.6c1.6.5 3.2 1.2 4.6 2c3.1 1.7 5.8 4.1 7.8 6.9s3.5 6.1 4.1 9.6c.5 2.7.6 5.5.1 8.3s-1.4 5.4-2.7 7.8c-1.7 3.1-4.1 5.8-6.9 7.8s-6.1 3.5-9.6 4.1c-1.6.3-3.3.4-5 .4H544v65.9c20.5 22.8 47.4 39.2 77.4 46.7C632 403 640 412.6 640 424c0 13.3-10.7 24-24 24h-40v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32H352v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32H128v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32H24c-13.3 0-24-10.7-24-24c0-11.4 8-21 18.6-23.4c30-7.6 56.9-23.9 77.4-46.7V288H56.6c-1.7 0-3.4-.1-5-.4c-3.5-.7-6.8-2.1-9.6-4.1s-5.2-4.7-7-7.8c-1.3-2.4-2.3-5-2.7-7.8s-.4-5.6.1-8.3c.7-3.5 2.1-6.8 4.1-9.6s4.7-5.2 7.8-6.9c1.4-.8 3-1.5 4.6-2l28.9-9.6c25.5-8.5 49.4-21.4 70.5-38.1l5.2-4.1l6.4-5.1v-56.1h-7.5c-5.5.1-10.8-1.7-15.1-4.9c-2.8-2.1-5.1-4.8-6.8-8.1c-1.2-2.4-2.1-5-2.5-7.8c-.9-6.5.9-12.8 4.7-17.8c2.1-2.8 4.8-5.1 8.1-6.8c1.6-.8 3.4-1.5 5.2-2l23-6.3c40.2-10.9 78-28.6 112-52.4m135 106H224v64h192zM160 288v64h320v-64z"></svg:path>`,
})
export class Fa6SolidViharaIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVirusIcon],svg[fa6-solid-virus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v11.5c0 49.9-60.3 74.9-95.6 39.6l-8.2-8.1C107.7 62.5 87.5 62.5 75 75s-12.5 32.8 0 45.3l8.2 8.2c35.2 35.2 10.2 95.5-39.7 95.5H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h11.5c49.9 0 74.9 60.3 39.6 95.6l-8.1 8.2c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l8.2-8.2c35.3-35.3 95.6-10.3 95.6 39.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-11.5c0-49.9 60.3-74.9 95.6-39.6l8.2 8.2c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-8.2-8.2c-35.3-35.3-10.3-95.6 39.6-95.6h11.5c17.7 0 32-14.3 32-32s-14.3-32-32-32h-11.5c-49.9 0-74.9-60.3-39.6-95.6l8.2-8.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-8.2 8.2C348.3 118.4 288 93.4 288 43.5zM176 224a48 48 0 1 1 96 0a48 48 0 1 1-96 0m128 56a24 24 0 1 1 0 48a24 24 0 1 1 0-48"></svg:path>`,
})
export class Fa6SolidVirusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVirusCovidIcon],svg[fa6-solid-virus-covid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 24c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16v33.6c30.7 4.2 58.8 16.3 82.3 34.1L386.1 92l-11.3-11.4c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l56.6 56.6c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L420 125.9l-23.8 23.8c17.9 23.5 29.9 51.7 34.1 82.3h33.6v-16c0-13.3 10.7-24 24-24s24 10.7 24 24v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16h-33.6c-4.2 30.7-16.3 58.8-34.1 82.3l23.8 23.8l11.3-11.3c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-56.6 56.6c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l11.4-11.4l-23.8-23.8c-23.5 17.9-51.7 29.9-82.3 34.1v33.6h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24h16v-33.6c-30.7-4.2-58.8-16.3-82.3-34.1L125.9 420l11.3 11.3c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-56.6-56.5c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L92 386.1l23.8-23.8c-17.9-23.5-30-51.6-34.2-82.3H48v16c0 13.3-10.7 24-24 24S0 309.3 0 296v-80c0-13.3 10.7-24 24-24s24 10.7 24 24v16h33.6c4.2-30.7 16.3-58.8 34.1-82.3L92 125.9l-11.4 11.3c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l56.6-56.6c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L125.9 92l23.8 23.8c23.5-17.9 51.7-29.9 82.3-34.1V48h-16c-13.3 0-24-10.7-24-24m48 200a48 48 0 1 0-96 0a48 48 0 1 0 96 0m64 104a24 24 0 1 0 0-48a24 24 0 1 0 0 48"></svg:path>`,
})
export class Fa6SolidVirusCovidIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVirusCovidSlashIcon],svg[fa6-solid-virus-covid-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L472.1 344.7c11.4-19.5 19.1-41.4 22.3-64.7H528v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-80c0-13.3-10.7-24-24-24s-24 10.7-24 24v16h-33.6c-4.2-30.7-16.3-58.8-34.1-82.3l23.7-23.8l11.3 11.3c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-56.5-56.6c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L450.1 92l-23.8 23.8c-23.5-17.9-51.6-30-82.3-34.2V48h16c13.3 0 24-10.7 24-24S373.3 0 360 0h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v33.6c-30.7 4.2-58.8 16.3-82.3 34.1L189.9 92l11.3-11.3c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-33.2 33zm110.4 208.4c-1.5 6-2.7 12.2-3.5 18.5H112v-16c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 13.3 10.7 24 24 24s24-10.7 24-24v-16h33.6c4.2 30.7 16.3 58.8 34.1 82.3L156 386.1l-11.3-11.3c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l56.6 56.6c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L189.9 420l23.8-23.8c23.5 17.9 51.7 29.9 82.3 34.1v33.6h-16c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16v-33.6c20.4-2.8 39.7-9.1 57.3-18.2z"></svg:path>`,
})
export class Fa6SolidVirusCovidSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVirusSlashIcon],svg[fa6-solid-virus-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-154.3-121c-2-30.1 20.8-60.1 56-60.1H544c17.7 0 32-14.3 32-32s-14.3-32-32-32h-11.5c-49.9 0-74.9-60.3-39.6-95.6l8.2-8.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-8.2 8.2C412.3 118.4 352 93.4 352 43.5V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v11.5c0 49.9-60.3 74.9-95.6 39.6l-8.2-8.1c-12.5-12.5-32.8-12.5-45.3 0c-1.6 1.6-3.1 3.4-4.3 5.3zm225.8 177c6.9-3.9 14.9-6.1 23.4-6.1c26.5 0 48 21.5 48 48c0 4.4-.6 8.7-1.7 12.7zM402 412.7L144.7 210c-9.5 8.5-22.2 14-37.2 14H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h11.5c49.9 0 74.9 60.3 39.6 95.6l-8.2 8.2c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l8.2-8.2c35.3-35.3 95.6-10.3 95.6 39.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-11.5c0-31.2 23.6-52.7 50-55.7z"></svg:path>`,
})
export class Fa6SolidVirusSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVirusesIcon],svg[fa6-solid-viruses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 0c13.3 0 24 10.7 24 24v13.5c0 35.6 43.1 53.5 68.3 28.3l9.5-9.5c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-9.5 9.5c-25.2 25.2-7.3 68.3 28.3 68.3H360c13.3 0 24 10.7 24 24s-10.7 24-24 24h-13.5c-35.6 0-53.5 43.1-28.3 68.3l9.5 9.5c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-9.5-9.5c-25.2-25.2-68.3-7.3-68.3 28.3V360c0 13.3-10.7 24-24 24s-24-10.7-24-24v-13.5c0-35.6-43.1-53.5-68.3-28.3l-9.5 9.5c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l9.5-9.5C91 259.1 73.1 216 37.5 216H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h13.5c35.6 0 53.5-43.1 28.3-68.3l-9.5-9.5c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l9.5 9.5C124.9 91 168 73.1 168 37.5V24c0-13.3 10.7-24 24-24m48 224a16 16 0 1 0 0-32a16 16 0 1 0 0 32m-48-64a32 32 0 1 0-64 0a32 32 0 1 0 64 0m320 80c0 33 39.9 49.5 63.2 26.2c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6C574.5 312.1 591 352 624 352c8.8 0 16 7.2 16 16s-7.2 16-16 16c-33 0-49.5 39.9-26.2 63.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0C551.9 446.5 512 463 512 496c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-33-39.9-49.5-63.2-26.2c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6C417.5 423.9 401 384 368 384c-8.8 0-16-7.2-16-16s7.2-16 16-16c33 0 49.5-39.9 26.2-63.2c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0C440.1 289.5 480 273 480 240c0-8.8 7.2-16 16-16s16 7.2 16 16m0 112a32 32 0 1 0-64 0a32 32 0 1 0 64 0"></svg:path>`,
})
export class Fa6SolidVirusesIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVoicemailIcon],svg[fa6-solid-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 320a80 80 0 1 1 0-160a80 80 0 1 1 0 160m119.8 0c15.3-22.9 24.2-50.4 24.2-80c0-79.5-64.5-144-144-144S0 160.5 0 240s64.5 144 144 144h352c79.5 0 144-64.5 144-144S575.5 96 496 96s-144 64.5-144 144c0 29.6 8.9 57.1 24.2 80H263.7zM496 160a80 80 0 1 1 0 160a80 80 0 1 1 0-160"></svg:path>`,
})
export class Fa6SolidVoicemailIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVolcanoIcon],svg[fa6-solid-volcano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 144c-35.3 0-64-28.7-64-64s28.7-64 64-64c15.7 0 30 5.6 41.2 15C212.4 12.4 232.7 0 256 0s43.6 12.4 54.8 31c11.2-9.4 25.5-15 41.2-15c35.3 0 64 28.7 64 64s-28.7 64-64 64c-14.7 0-28.3-5-39.1-13.3l-32 48C275.3 187 266 192 256 192s-19.3-5-24.9-13.3l-32-48C188.3 139 174.7 144 160 144m-16 208l48.4-24.2c10.2-5.1 21.6-7.8 33-7.8c19.6 0 38.4 7.8 52.2 21.6l32.5 32.5c6.3 6.3 14.9 9.9 23.8 9.9c11.3 0 21.8-5.6 28-15l9.7-14.6l-58.9-66.3c-9.1-10.2-22.2-16.1-35.9-16.1H235c-13.7 0-26.8 5.9-35.9 16.1l-59.9 67.4zm19.4-95.8c18.2-20.5 44.3-32.2 71.8-32.2H277c27.4 0 53.5 11.7 71.8 32.2l150.2 169c8.5 9.5 13.2 21.9 13.2 34.7c0 28.8-23.4 52.2-52.2 52.2L52.2 512C23.4 512 0 488.6 0 459.8c0-12.8 4.7-25.1 13.2-34.7l150.2-169z"></svg:path>`,
})
export class Fa6SolidVolcanoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVolleyballIcon],svg[fa6-solid-volleyball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M511.8 267.4c-26.1 8.7-53.4 13.8-81 15.1C440 177.2 399.3 78.3 327.6 10.1C434.1 41.1 512 139.5 512 256c0 3.8-.1 7.6-.2 11.4m-3.9 34.7c-5.8 32-17.6 62-34.2 88.7c-97.5 48.5-217.7 42.6-311.9-24.5c23.7-36.2 55.4-67.7 94.5-91.8c79.9 43.2 170.1 50.8 251.6 27.6m-236-55.5C269.4 155.7 230.8 73.9 170 14.9C196.8 5.2 225.8 0 256 0c2.7 0 5.3 0 7.9.1c90.8 60.2 145.7 167.2 134.7 282.3c-43.1-2.4-86.4-14.1-126.8-35.9zM138 28.8c20.6 18.3 38.7 39.4 53.7 62.6C95.9 136.1 30.6 220.8 7.3 316.9C2.5 297.4 0 277 0 256C0 157.2 56 71.5 138 28.8m69.6 90.5c19.5 38.6 31 81.9 32.3 127.7c-77.4 47.6-129 121.9-149.7 204c-24.2-20.6-44.6-45.6-59.8-73.8c6.7-108.7 71.9-209.9 177.1-257.9zM256 512c-50.7 0-98-14.7-137.8-40.2c5.6-27 14.8-53.1 27.4-77.7c86.6 60.5 192.5 74.7 287.4 46.9c-46 44-108.3 71-177 71"></svg:path>`,
})
export class Fa6SolidVolleyballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVolumeHighIcon],svg[fa6-solid-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8c54.2-44 88.7-111 88.7-186.2s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5c21.5 17.6 35.4 44.4 35.4 74.5s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64v384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3"></svg:path>`,
})
export class Fa6SolidVolumeHighIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVolumeLowIcon],svg[fa6-solid-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M301.1 34.8C312.6 40 320 51.4 320 64v384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3m111.5 146.7c21.5 17.6 35.4 44.4 35.4 74.5s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"></svg:path>`,
})
export class Fa6SolidVolumeLowIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVolumeOffIcon],svg[fa6-solid-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8l134.9 119.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448z"></svg:path>`,
})
export class Fa6SolidVolumeOffIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVolumeXmarkIcon],svg[fa6-solid-volume-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M301.1 34.8C312.6 40 320 51.4 320 64v384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3M425 167l55 55l55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55l55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55l-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55l-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0"></svg:path>`,
})
export class Fa6SolidVolumeXmarkIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVrCardboardIcon],svg[fa6-solid-vr-cardboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h120.4c24.2 0 46.4-13.7 57.2-35.4l32-64c8.8-17.5 26.7-28.6 46.3-28.6s37.5 11.1 46.3 28.6l32 64c10.8 21.7 33 35.4 57.2 35.4H576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64M96 240a64 64 0 1 1 128 0a64 64 0 1 1-128 0m384-64a64 64 0 1 1 0 128a64 64 0 1 1 0-128"></svg:path>`,
})
export class Fa6SolidVrCardboardIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWIcon],svg[fa6-solid-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.8 34c16.5-6.2 35 2.2 41.2 18.7l110.2 294L257.3 55c4-13.7 16.5-23 30.7-23s26.7 9.4 30.7 23l85.1 291.7L514 52.8c6.2-16.5 24.6-24.9 41.2-18.7s24.9 24.7 18.7 41.2l-144 384c-4.8 12.9-17.4 21.3-31.2 20.7s-25.7-9.8-29.5-23L288 178.3L206.7 457c-3.9 13.2-15.8 22.5-29.5 23s-26.3-7.8-31.2-20.7L2 75.2c-6.2-16.5 2.2-35 18.8-41.2"></svg:path>`,
})
export class Fa6SolidWIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWalkieTalkieIcon],svg[fa6-solid-walkie-talkie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 24c0-13.3-10.7-24-24-24S64 10.7 64 24v72H48c-26.5 0-48 21.5-48 48v156.1C0 312.8 5.1 325 14.1 334l3.9 3.9c9 9 14.1 21.2 14.1 33.9L32 464c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48v-92.1c0-12.7 5.1-24.9 14.1-33.9l3.9-3.9c9-9 14.1-21.2 14.1-33.9L384 144c0-26.5-21.5-48-48-48h-16c0-17.7-14.3-32-32-32s-32 14.3-32 32h-32c0-17.7-14.3-32-32-32s-32 14.3-32 32h-48zm0 136h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 64h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 64h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16"></svg:path>`,
})
export class Fa6SolidWalkieTalkieIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWalletIcon],svg[fa6-solid-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h368c17.7 0 32-14.3 32-32s-14.3-32-32-32zm352 240a32 32 0 1 1 0 64a32 32 0 1 1 0-64"></svg:path>`,
})
export class Fa6SolidWalletIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWandMagicIcon],svg[fa6-solid-wand-magic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0zm333.5-275.7l105-105l-23.2-23.3l-105 105l23.3 23.3z"></svg:path>`,
})
export class Fa6SolidWandMagicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWandMagicSparklesIcon],svg[fa6-solid-wand-magic-sparkles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1l14.1 37.7c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2l-37.7-14.1L263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0l381.3-381.4c18.7-18.7 18.7-49.1 0-67.9l-34.6-34.5c-18.7-18.7-49.1-18.7-67.9 0zM484.6 82.6l-105 105l-23.3-23.3l105-105zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L64 96zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352z"></svg:path>`,
})
export class Fa6SolidWandMagicSparklesIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWandSparklesIcon],svg[fa6-solid-wand-sparkles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 6.1c9.5-8.5 24-8.1 33 .9l8 8c9 9 9.4 23.5.9 33l-85.8 95.9c-2.6 2.9-4.1 6.7-4.1 10.7V176c0 8.8-7.2 16-16 16h-15.8c-4.6 0-8.9 1.9-11.9 5.3L100.7 500.9C94.3 508 85.3 512 75.8 512c-8.8 0-17.3-3.5-23.5-9.8L9.7 459.7C3.5 453.4 0 445 0 436.2c0-9.5 4-18.5 11.1-24.8l111.6-99.8c3.4-3 5.3-7.4 5.3-11.9v-27.6c0-8.8 7.2-16 16-16h34.6c3.9 0 7.7-1.5 10.7-4.1zM432 288c3.6 0 6.7 2.4 7.7 5.8l14.8 51.7l51.7 14.8c3.4 1 5.8 4.1 5.8 7.7s-2.4 6.7-5.8 7.7l-51.7 14.8l-14.8 51.7c-1 3.4-4.1 5.8-7.7 5.8s-6.7-2.4-7.7-5.8l-14.8-51.7l-51.7-14.8c-3.4-1-5.8-4.1-5.8-7.7s2.4-6.7 5.8-7.7l51.7-14.8l14.8-51.7c1-3.4 4.1-5.8 7.7-5.8M87.7 69.8l14.8 51.7l51.7 14.8c3.4 1 5.8 4.1 5.8 7.7s-2.4 6.7-5.8 7.7l-51.7 14.8l-14.8 51.7c-1 3.4-4.1 5.8-7.7 5.8s-6.7-2.4-7.7-5.8l-14.8-51.7l-51.7-14.8c-3.4-1-5.8-4.1-5.8-7.7s2.4-6.7 5.8-7.7l51.7-14.8l14.8-51.7c1-3.4 4.1-5.8 7.7-5.8s6.7 2.4 7.7 5.8M208 0c3.7 0 6.9 2.5 7.8 6.1l6.8 27.3l27.3 6.8c3.6.9 6.1 4.1 6.1 7.8s-2.5 6.9-6.1 7.8l-27.3 6.8l-6.8 27.3c-.9 3.6-4.1 6.1-7.8 6.1s-6.9-2.5-7.8-6.1l-6.8-27.3l-27.3-6.8c-3.6-.9-6.1-4.1-6.1-7.8s2.5-6.9 6.1-7.8l27.3-6.8l6.8-27.3c.9-3.6 4.1-6.1 7.8-6.1"></svg:path>`,
})
export class Fa6SolidWandSparklesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWarehouseIcon],svg[fa6-solid-warehouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0l267.9 107.1c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32v264c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24m488 24H152c-13.3 0-24-10.7-24-24v-56h384v56c0 13.3-10.7 24-24 24M128 400v-64h384v64zm0-96v-80h384v80z"></svg:path>`,
})
export class Fa6SolidWarehouseIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWaterIcon],svg[fa6-solid-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25c-29 15.6-61.5 25.9-94.5 25.9c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18-4.3 36.2-13.4 50.5-25.3c11.1-9.5 27.3-10.1 39.2-1.7C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1m37 288c22.5 15.5 50 26.1 77.5 26.1c26.9 0 55.4-10.8 77.4-26.1c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25c-29 15.6-61.5 25.9-94.5 25.9c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7c22.1 15.2 50.5 26 77.4 26c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0m0-144c22.5 15.5 50 26.1 77.5 26.1c26.9 0 55.4-10.8 77.4-26.1c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25c-29 15.6-61.5 25.9-94.5 25.9c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7c22.1 15.2 50.5 26 77.4 26c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0"></svg:path>`,
})
export class Fa6SolidWaterIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWaterLadderIcon],svg[fa6-solid-water-ladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 127.7c0-52.8 42.9-95.7 95.7-95.7c48.3 0 89 36 95 83.9l1 8.2c2.2 17.5-10.2 33.5-27.8 35.7s-33.5-10.2-35.7-27.8l-1-8.2c-2-15.9-15.5-27.8-31.5-27.8c-17.5 0-31.7 14.2-31.7 31.7V224h192v-96.3c0-52.8 42.9-95.7 95.7-95.7c48.3 0 89 36 95 83.9l1 8.2c2.2 17.5-10.2 33.5-27.8 35.7s-33.5-10.2-35.7-27.8l-1-8.2c-2-15.9-15.5-27.8-31.5-27.8c-17.5 0-31.7 14.2-31.7 31.7V361c-1.6 1-3.3 2-4.8 3.1c-18 12.4-40.1 20.3-59.2 20.3v-96.5H192v96.5c-19 0-41.2-7.9-59.1-20.3c-1.6-1.1-3.2-2.2-4.9-3.1zm178.5 262.2c22.5 15.5 50 26.1 77.5 26.1c26.9 0 55.4-10.8 77.4-26.1c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25c-29 15.6-61.5 25.9-94.5 25.9c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7c22.1 15.2 50.5 26 77.4 26c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0"></svg:path>`,
})
export class Fa6SolidWaterLadderIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWaveSquareIcon],svg[fa6-solid-wave-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 64c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32v352h96V256c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96v160c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V96h-96v160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h96z"></svg:path>`,
})
export class Fa6SolidWaveSquareIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWebAwesomeIcon],svg[fa6-solid-web-awesome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M372.2 52c0 20.9-12.4 39-30.2 47.2L448 192l104.4-20.9c-5.3-7.7-8.4-17.1-8.4-27.1c0-26.5 21.5-48 48-48s48 21.5 48 48c0 26-20.6 47.1-46.4 48L481 442.3c-10.3 23-33.2 37.7-58.4 37.7H217.4c-25.2 0-48-14.8-58.4-37.7L46.4 192C20.6 191.1 0 170 0 144c0-26.5 21.5-48 48-48s48 21.5 48 48c0 10.1-3.1 19.4-8.4 27.1L192 192l106.1-92.9c-17.7-8.3-30-26.3-30-47.1c0-28.7 23.3-52 52-52s52 23.3 52 52z"></svg:path>`,
})
export class Fa6SolidWebAwesomeIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWeightHangingIcon],svg[fa6-solid-weight-hanging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 96a32 32 0 1 1 64 0a32 32 0 1 1-64 0m122.5 32c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96s-96 43-96 96c0 11.2 1.9 22 5.5 32H120c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512h416c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128z"></svg:path>`,
})
export class Fa6SolidWeightHangingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWeightScaleIcon],svg[fa6-solid-weight-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 176a128 128 0 1 1 256 0a128 128 0 1 1-256 0M391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5.3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40c0 22.1 17.9 40 40 40s40-17.9 40-40"></svg:path>`,
})
export class Fa6SolidWeightScaleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWheatAwnIcon],svg[fa6-solid-wheat-awn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M505 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L383 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l88-88zM305.5 27.3c-6.2-6.2-16.4-6.2-22.6 0l-11.4 11.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4l-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4l-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8L101.8 231c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4l-68.9 68.9c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l68.9-68.9l12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9l12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6L373.4 299c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9l12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.4c6.2-6.2 6.2-16.4 0-22.6L475.2 197c-5.2-5.2-10.6-9.8-16.4-13.9L505 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-59.4 59.4c-20.6-4.4-42-3.7-62.3 2.1c6.1-21.3 6.6-43.8 1.4-65.3L409 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-46 45.8c-3.7-5-7.8-9.8-12.4-14.3z"></svg:path>`,
})
export class Fa6SolidWheatAwnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWheatAwnCircleExclamationIcon],svg[fa6-solid-wheat-awn-circle-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M505 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L383 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l88-88zM305.5 27.3c-6.2-6.2-16.4-6.2-22.6 0l-11.4 11.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4l-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4l-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8L101.8 231c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4l-68.9 68.9c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l68.9-68.9l12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9l12.2 12.2c22.5 22.5 53.3 31.5 82.4 27v-3.1c0-33.1 9.1-64.1 25-90.6c-15.5-8.7-32.5-13.8-49.8-15.5l31.9-31.9l12.2 12.2c6 6 12.6 11.1 19.7 15.2c27.5-34 67.3-57.5 112.6-63.8q-6.15-5.7-12.9-10.5L505 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-59.4 59.4c-20.6-4.4-42-3.7-62.3 2.1c6.1-21.3 6.6-43.8 1.4-65.3L409 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-46 45.8c-3.7-5-7.8-9.8-12.4-14.3zM496 512a144 144 0 1 0 0-288a144 144 0 1 0 0 288m0-96a24 24 0 1 1 0 48a24 24 0 1 1 0-48m0-144c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-8.8 7.2-16 16-16"></svg:path>`,
})
export class Fa6SolidWheatAwnCircleExclamationIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWheelchairIcon],svg[fa6-solid-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 96a48 48 0 1 0 0-96a48 48 0 1 0 0 96m-71.5 151.2c12.4-4.7 18.7-18.5 14-30.9s-18.5-18.7-30.9-14C43.1 225.1 0 283.5 0 352c0 88.4 71.6 160 160 160c61.2 0 114.3-34.3 141.2-84.7c6.2-11.7 1.8-26.2-9.9-32.5s-26.2-1.8-32.5 9.9C240 440 202.8 464 160 464c-61.9 0-112-50.1-112-112c0-47.9 30.1-88.8 72.5-104.8M259.8 176l-1.9-9.7c-4.5-22.3-24-38.3-46.8-38.3c-30.1 0-52.7 27.5-46.8 57l23.1 115.5c6 29.9 32.2 51.4 62.8 51.4h100.5c6.7 0 12.6 4.1 15 10.4l36.3 96.9c6 16.1 23.8 24.6 40.1 19.1l48-16c16.8-5.6 25.8-23.7 20.2-40.5s-23.7-25.8-40.5-20.2l-18.7 6.2l-25.5-68c-11.7-31.2-41.6-51.9-74.9-51.9h-68.5l-9.6-48H336c17.7 0 32-14.3 32-32s-14.3-32-32-32h-76.2z"></svg:path>`,
})
export class Fa6SolidWheelchairIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWheelchairMoveIcon],svg[fa6-solid-wheelchair-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 48a48 48 0 1 1 96 0a48 48 0 1 1-96 0m-115.5 73.3c-5.4-2.5-11.7-1.9-16.4 1.7l-40.9 30.7c-14.1 10.6-34.2 7.7-44.8-6.4s-7.7-34.2 6.4-44.8l40.9-30.7c23.7-17.8 55.3-21 82.1-8.4l90.4 42.5c29.1 13.7 36.8 51.6 15.2 75.5L299.1 224h97.4c30.3 0 53 27.7 47.1 57.4l-28.2 140.9c-3.5 17.3-20.3 28.6-37.7 25.1s-28.6-20.3-25.1-37.7L377 288h-70.3c8.6 19.6 13.3 41.2 13.3 64c0 88.4-71.6 160-160 160S0 440.4 0 352s71.6-160 160-160c11.1 0 22 1.1 32.4 3.3l54.2-54.2zM160 448a96 96 0 1 0 0-192a96 96 0 1 0 0 192"></svg:path>`,
})
export class Fa6SolidWheelchairMoveIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWhiskeyGlassIcon],svg[fa6-solid-whiskey-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 32c-9.3 0-18.1 4-24.2 11.1S-1 59.4.3 68.6l50 342.9C56 450.8 89.7 480 129.5 480h253c39.7 0 73.4-29.1 79.2-68.5l50-342.9c1.3-9.2-1.4-18.5-7.5-25.5S489.3 32 480 32zm55.7 192L69 96h374l-18.7 128z"></svg:path>`,
})
export class Fa6SolidWhiskeyGlassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWifiIcon],svg[fa6-solid-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2.9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0-128 0a64 64 0 1 0 128 0"></svg:path>`,
})
export class Fa6SolidWifiIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWindIcon],svg[fa6-solid-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c53 0 96-43 96-96S405 0 352 0h-32c-17.7 0-32 14.3-32 32m64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32 14.3-32 32M128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32"></svg:path>`,
})
export class Fa6SolidWindIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWindowMaximizeIcon],svg[fa6-solid-window-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 64h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidWindowMaximizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWindowMinimizeIcon],svg[fa6-solid-window-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32z"></svg:path>`,
})
export class Fa6SolidWindowMinimizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWindowRestoreIcon],svg[fa6-solid-window-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 64H208c-8.8 0-16 7.2-16 16v16h-64V80c0-44.2 35.8-80 80-80h224c44.2 0 80 35.8 80 80v224c0 44.2-35.8 80-80 80h-16v-64h16c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16M0 192c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32"></svg:path>`,
})
export class Fa6SolidWindowRestoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWineBottleIcon],svg[fa6-solid-wine-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M393.4 9.4c12.5-12.5 32.8-12.5 45.3 0l64 64c12.5 12.5 12.5 32.8 0 45.3c-11.8 11.8-30.7 12.5-43.2 1.9l-9.5 9.5l-48.8 48.8c-9.2 9.2-11.5 22.9-8.6 35.6c9.4 40.9-1.9 85.6-33.8 117.5L197.3 493.3c-25 25-65.5 25-90.5 0l-88-88c-25-25-25-65.5 0-90.5l161.4-161.5c31.9-31.9 76.6-43.1 117.5-33.8c12.6 2.9 26.4.5 35.5-8.6L382 62.1l9.5-9.5c-10.6-12.6-10-31.4 1.9-43.2M99.3 347.3l65.4 65.4c6.2 6.2 16.4 6.2 22.6 0l97.4-97.4c6.2-6.2 6.2-16.4 0-22.6l-65.4-65.4c-6.2-6.2-16.4-6.2-22.6 0l-97.4 97.4c-6.2 6.2-6.2 16.4 0 22.6"></svg:path>`,
})
export class Fa6SolidWineBottleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWineGlassIcon],svg[fa6-solid-wine-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.1 29.3C33.5 12.8 47.4 0 64 0h192c16.6 0 30.5 12.8 31.9 29.3l14 168.4c6 72-42.5 135.2-109.9 150.6v99.6h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-17.7 0-32-14.3-32-32s14.3-32 32-32h48v-99.6C60.6 333 12.1 269.8 18.1 197.8l14-168.4zm56 98.7h143.8l-5.3-64H93.4z"></svg:path>`,
})
export class Fa6SolidWineGlassIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWineGlassEmptyIcon],svg[fa6-solid-wine-glass-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 0C47.4 0 33.5 12.8 32.1 29.3l-14 168.4c-6 72 42.5 135.2 109.9 150.6v99.6H80c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32h-48v-99.6c67.4-15.4 115.9-78.6 109.9-150.6l-14-168.4C286.5 12.8 272.6 0 256 0zm17.9 203.1L93.4 64h133.1l11.6 139.1C242 248.8 205.9 288 160 288s-82-39.2-78.1-84.9"></svg:path>`,
})
export class Fa6SolidWineGlassEmptyIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWonSignIcon],svg[fa6-solid-won-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62.4 53.9c-5.6-16.8-23.8-25.8-40.5-20.3S-3.9 57.4 1.6 74.1l50 149.9H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h40.9l56.7 170.1c4.5 13.5 17.4 22.4 31.6 21.9s26.4-10.4 29.8-24.2L233 288h46l42 167.8c3.4 13.8 15.6 23.7 29.8 24.2s27.1-8.4 31.6-21.9L439.1 288H480c17.7 0 32-14.3 32-32s-14.3-32-32-32h-19.6l50-149.9c5.6-16.8-3.5-34.9-20.2-40.5s-34.9 3.5-40.5 20.2L392.9 224h-64L287 56.2C283.5 42 270.7 32 256 32s-27.5 10-31 24.2L183 224h-64zm78 234.1H167l-11.4 45.6zM249 224l7-28.1l7 28.1zm96 64h26.6l-15.2 45.6z"></svg:path>`,
})
export class Fa6SolidWonSignIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWormIcon],svg[fa6-solid-worm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 96c0-53 43-96 96-96h38.4C439.9 0 480 40.1 480 89.6V376c0 75.1-60.9 136-136 136s-136-60.9-136-136v-80c0-22.1-17.9-40-40-40s-40 17.9-40 40v168c0 26.5-21.5 48-48 48s-48-21.5-48-48V296c0-75.1 60.9-136 136-136s136 60.9 136 136v80c0 22.1 17.9 40 40 40s40-17.9 40-40V192h-32c-53 0-96-43-96-96m144-8a24 24 0 1 0-48 0a24 24 0 1 0 48 0"></svg:path>`,
})
export class Fa6SolidWormIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWrenchIcon],svg[fa6-solid-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16v-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0c-88.4 0-160 71.6-160 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9l181.6-181.6c17 6.2 35.4 9.5 54.5 9.5M80 408a24 24 0 1 1 0 48a24 24 0 1 1 0-48"></svg:path>`,
})
export class Fa6SolidWrenchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidXIcon],svg[fa6-solid-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206L56.6 43.5c-11.3-13.6-31.5-15.4-45.1-4.1S-3.9 70.9 7.4 84.5L150.3 256L7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306l135.4 162.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256z"></svg:path>`,
})
export class Fa6SolidXIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidXRayIcon],svg[fa6-solid-x-ray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32v320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V96C14.3 96 0 81.7 0 64m256 32c-8.8 0-16 7.2-16 16v32h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v48H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h112v70.6L189.1 307q-7.8-3-16.2-3h-2.1c-23.6 0-42.8 19.2-42.8 42.8c0 9.6 3.2 18.9 9.1 26.4l18.2 23.2c9.7 12.4 24.6 19.6 40.3 19.6h120.8c15.7 0 30.6-7.2 40.3-19.6l18.2-23.2c5.9-7.5 9.1-16.8 9.1-26.4c0-23.6-19.2-42.8-42.8-42.8H339c-5.5 0-11 1-16.2 3L272 326.6V256h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H272v-48h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80v-32c0-8.8-7.2-16-16-16m-48 256a16 16 0 1 1 0 32a16 16 0 1 1 0-32m80 16a16 16 0 1 1 32 0a16 16 0 1 1-32 0"></svg:path>`,
})
export class Fa6SolidXRayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidXmarkIcon],svg[fa6-solid-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7L86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256z"></svg:path>`,
})
export class Fa6SolidXmarkIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidXmarksLinesIcon],svg[fa6-solid-xmarks-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h576c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 384c-17.7 0-32 14.3-32 32s14.3 32 32 32h576c17.7 0 32-14.3 32-32s-14.3-32-32-32zM7 167c-9.4 9.4-9.4 24.6 0 33.9l55 55L7 311c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55l55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55l55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55L41 167c-9.4-9.4-24.6-9.4-33.9 0zm258 0c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l55 55l-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55l55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55l55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55zm190 0c-9.4 9.4-9.4 24.6 0 33.9l55 55l-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55l55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55l55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55l-55-55c-9.4-9.4-24.6-9.4-33.9 0"></svg:path>`,
})
export class Fa6SolidXmarksLinesIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidYIcon],svg[fa6-solid-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M58 45.4C47.8 31 27.8 27.7 13.4 38S-4.3 68.2 6 82.6l154 215.7V448c0 17.7 14.3 32 32 32s32-14.3 32-32V298.3L378 82.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-7-44.6 7.4L192 232.9z"></svg:path>`,
})
export class Fa6SolidYIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidYenSignIcon],svg[fa6-solid-yen-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M58.6 46.3C48.8 31.5 29 27.6 14.2 37.4S-4.4 67 5.4 81.8L100.2 224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h80v32H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h80v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h80c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80v-32h80c17.7 0 32-14.3 32-32s-14.3-32-32-32h-52.2l94.8-142.2c9.8-14.7 5.8-34.6-8.9-44.4s-34.6-5.8-44.4 8.9L160 198.3z"></svg:path>`,
})
export class Fa6SolidYenSignIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidYinYangIcon],svg[fa6-solid-yin-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 64c53 0 96 43 96 96s-43 96-96 96s-96 43-96 96s43 96 96 96c-106 0-192-86-192-192S150 64 256 64m0 448a256 256 0 1 0 0-512a256 256 0 1 0 0 512m32-352a32 32 0 1 0-64 0a32 32 0 1 0 64 0m-64 192a32 32 0 1 1 64 0a32 32 0 1 1-64 0"></svg:path>`,
})
export class Fa6SolidYinYangIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[fa6SolidZIcon],svg[fa6-solid-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64c0-17.7 14.3-32 32-32h320c12.4 0 23.7 7.2 29 18.4s3.6 24.5-4.4 34.1L100.3 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.4 0-23.7-7.2-29-18.4s-3.6-24.5 4.4-34.1L283.7 96H32C14.3 96 0 81.7 0 64"></svg:path>`,
})
export class Fa6SolidZIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
