import { Component, input } from '@angular/core'

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

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesRightDuotoneIcon],svg[ph-arrow-fat-lines-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M136 224v-48h-32V80h32V32l96 96Z" opacity=".2"></svg:path><svg:path d="m237.66 122.34l-96-96A8 8 0 0 0 128 32v40h-24a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h24v40a8 8 0 0 0 13.66 5.66l96-96a8 8 0 0 0 0-11.32M144 204.69V176a8 8 0 0 0-8-8h-24V88h24a8 8 0 0 0 8-8V51.31L220.69 128ZM48 80v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0m32 0v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhArrowFatLinesRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesUpDuotoneIcon],svg[ph-arrow-fat-lines-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 120h-48v32H80v-32H32l96-96Z" opacity=".2"></svg:path><svg:path d="m229.66 114.34l-96-96a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 32 128h40v24a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8v-24h40a8 8 0 0 0 5.66-13.66M176 112a8 8 0 0 0-8 8v24H88v-24a8 8 0 0 0-8-8H51.31L128 35.31L204.69 112Zm8 104a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8m0-32a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhArrowFatLinesUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatRightDuotoneIcon],svg[ph-arrow-fat-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M136 224v-48H48a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h88V32l96 96Z" opacity=".2"></svg:path><svg:path d="m237.66 122.34l-96-96A8 8 0 0 0 128 32v40H48a16 16 0 0 0-16 16v80a16 16 0 0 0 16 16h80v40a8 8 0 0 0 13.66 5.66l96-96a8 8 0 0 0 0-11.32M144 204.69V176a8 8 0 0 0-8-8H48V88h88a8 8 0 0 0 8-8V51.31L220.69 128Z"></svg:path></svg:g>`,
})
export class PhArrowFatRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatUpDuotoneIcon],svg[ph-arrow-fat-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 120h-48v88a8 8 0 0 1-8 8H88a8 8 0 0 1-8-8v-88H32l96-96Z" opacity=".2"></svg:path><svg:path d="m229.66 114.34l-96-96a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 32 128h40v80a16 16 0 0 0 16 16h80a16 16 0 0 0 16-16v-80h40a8 8 0 0 0 5.66-13.66M176 112a8 8 0 0 0-8 8v88H88v-88a8 8 0 0 0-8-8H51.31L128 35.31L204.69 112Z"></svg:path></svg:g>`,
})
export class PhArrowFatUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLeftDuotoneIcon],svg[ph-arrow-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M112 56v144l-72-72Z" opacity=".2"></svg:path><svg:path d="M216 120h-96V56a8 8 0 0 0-13.66-5.66l-72 72a8 8 0 0 0 0 11.32l72 72A8 8 0 0 0 120 200v-64h96a8 8 0 0 0 0-16m-112 60.69L51.31 128L104 75.31Z"></svg:path></svg:g>`,
})
export class PhArrowLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownDuotoneIcon],svg[ph-arrow-line-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m200 112l-72 72l-72-72Z" opacity=".2"></svg:path><svg:path d="M122.34 189.66a8 8 0 0 0 11.32 0l72-72A8 8 0 0 0 200 104h-64V32a8 8 0 0 0-16 0v72H56a8 8 0 0 0-5.66 13.66ZM180.69 120L128 172.69L75.31 120ZM224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhArrowLineDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownLeftDuotoneIcon],svg[ph-arrow-line-down-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 208H72v-96Z" opacity=".2"></svg:path><svg:path d="M232 48a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-42.34 42.34a8 8 0 0 1 0 11.32L131.31 160l42.35 42.34A8 8 0 0 1 168 216H72a8 8 0 0 1-8-8v-96a8 8 0 0 1 13.66-5.66L120 148.69l58.34-58.35a8 8 0 0 1 11.32 0M148.69 200l-34.34-34.34L80 131.31V200Z"></svg:path></svg:g>`,
})
export class PhArrowLineDownLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownRightDuotoneIcon],svg[ph-arrow-line-down-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 104v96H96Z" opacity=".2"></svg:path><svg:path d="M224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-24 64v96a8 8 0 0 1-8 8H96a8 8 0 0 1-5.66-13.66L132.69 152L74.34 93.66a8 8 0 0 1 11.32-11.32L144 140.69l42.34-42.35A8 8 0 0 1 200 104m-16 19.31l-34.34 34.35L115.31 192H184Z"></svg:path></svg:g>`,
})
export class PhArrowLineDownRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineLeftDuotoneIcon],svg[ph-arrow-line-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M144 56v144l-72-72Z" opacity=".2"></svg:path><svg:path d="M224 120h-72V56a8 8 0 0 0-13.66-5.66l-72 72a8 8 0 0 0 0 11.32l72 72A8 8 0 0 0 152 200v-64h72a8 8 0 0 0 0-16m-88 60.69L83.31 128L136 75.31ZM48 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhArrowLineLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineRightDuotoneIcon],svg[ph-arrow-line-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m184 128l-72 72V56Z" opacity=".2"></svg:path><svg:path d="M117.66 50.34A8 8 0 0 0 104 56v64H32a8 8 0 0 0 0 16h72v64a8 8 0 0 0 13.66 5.66l72-72a8 8 0 0 0 0-11.32ZM120 180.69V75.31L172.69 128ZM224 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhArrowLineRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpDuotoneIcon],svg[ph-arrow-line-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 144H56l72-72Z" opacity=".2"></svg:path><svg:path d="M133.66 66.34a8 8 0 0 0-11.32 0l-72 72A8 8 0 0 0 56 152h64v72a8 8 0 0 0 16 0v-72h64a8 8 0 0 0 5.66-13.66ZM75.31 136L128 83.31L180.69 136ZM224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhArrowLineUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpLeftDuotoneIcon],svg[ph-arrow-line-up-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m168 48l-96 96V48Z" opacity=".2"></svg:path><svg:path d="M232 208a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M64 144V48a8 8 0 0 1 8-8h96a8 8 0 0 1 5.66 13.66L131.31 96l58.35 58.34a8 8 0 0 1-11.32 11.32L120 107.31l-42.34 42.35A8 8 0 0 1 64 144m16-19.31l34.34-34.35L148.69 56H80Z"></svg:path></svg:g>`,
})
export class PhArrowLineUpLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpRightDuotoneIcon],svg[ph-arrow-line-up-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v96L96 56Z" opacity=".2"></svg:path><svg:path d="M224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M74.34 173.66a8 8 0 0 1 0-11.32L132.69 104L90.34 61.66A8 8 0 0 1 96 48h96a8 8 0 0 1 8 8v96a8 8 0 0 1-13.66 5.66L144 115.31l-58.34 58.35a8 8 0 0 1-11.32 0M115.31 64l34.35 34.34L184 132.69V64Z"></svg:path></svg:g>`,
})
export class PhArrowLineUpRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowRightDuotoneIcon],svg[ph-arrow-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m216 128l-72 72V56Z" opacity=".2"></svg:path><svg:path d="m221.66 122.34l-72-72A8 8 0 0 0 136 56v64H40a8 8 0 0 0 0 16h96v64a8 8 0 0 0 13.66 5.66l72-72a8 8 0 0 0 0-11.32M152 180.69V75.31L204.69 128Z"></svg:path></svg:g>`,
})
export class PhArrowRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownDuotoneIcon],svg[ph-arrow-square-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-42.34-77.66a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 148.69V88a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhArrowSquareDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownLeftDuotoneIcon],svg[ph-arrow-square-down-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160ZM88 160v-48a8 8 0 0 1 16 0v28.69l50.34-50.35a8 8 0 0 1 11.32 11.32L115.31 152H144a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhArrowSquareDownLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownRightDuotoneIcon],svg[ph-arrow-square-down-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160ZM90.34 101.66a8 8 0 0 1 11.32-11.32L152 140.69V112a8 8 0 0 1 16 0v48a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h28.69Z"></svg:path></svg:g>`,
})
export class PhArrowSquareDownRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareInDuotoneIcon],svg[ph-arrow-square-in-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v128a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M128 136v64a8 8 0 0 1-16 0v-44.68l-66.34 66.34a8 8 0 0 1-11.32-11.32L100.68 144H56a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m80-104H80a16 16 0 0 0-16 16v48a8 8 0 0 0 16 0V48h128v128h-48a8 8 0 0 0 0 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path></svg:g>`,
})
export class PhArrowSquareInDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareLeftDuotoneIcon],svg[ph-arrow-square-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160ZM82.34 133.66a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32L107.31 120H168a8 8 0 0 1 0 16h-60.69l18.35 18.34a8 8 0 0 1-11.32 11.32Z"></svg:path></svg:g>`,
})
export class PhArrowSquareLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareOutDuotoneIcon],svg[ph-arrow-square-out-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 80v128a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72H48V80h72a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhArrowSquareOutDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareRightDuotoneIcon],svg[ph-arrow-square-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160ZM80 128a8 8 0 0 1 8-8h60.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L148.69 136H88a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhArrowSquareRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareUpDuotoneIcon],svg[ph-arrow-square-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160ZM90.34 125.66a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L136 107.31V168a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32 0"></svg:path></svg:g>`,
})
export class PhArrowSquareUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareUpLeftDuotoneIcon],svg[ph-arrow-square-up-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160ZM88 144V96a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-28.69l50.35 50.34a8 8 0 0 1-11.32 11.32L104 115.31V144a8 8 0 0 1-16 0"></svg:path></svg:g>`,
})
export class PhArrowSquareUpLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareUpRightDuotoneIcon],svg[ph-arrow-square-up-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160ZM90.34 165.66a8 8 0 0 1 0-11.32L140.69 104H112a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8v48a8 8 0 0 1-16 0v-28.69l-50.34 50.35a8 8 0 0 1-11.32 0"></svg:path></svg:g>`,
})
export class PhArrowSquareUpRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUDownLeftDuotoneIcon],svg[ph-arrow-u-down-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 120v96l-48-48Z" opacity=".2"></svg:path><svg:path d="M168 48H80a8 8 0 0 0 0 16h88a48 48 0 0 1 0 96H88v-40a8 8 0 0 0-13.66-5.66l-48 48a8 8 0 0 0 0 11.32l48 48A8 8 0 0 0 88 216v-40h80a64 64 0 0 0 0-128M72 196.69L43.31 168L72 139.31Z"></svg:path></svg:g>`,
})
export class PhArrowUDownLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUDownRightDuotoneIcon],svg[ph-arrow-u-down-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 168l-48 48v-96Z" opacity=".2"></svg:path><svg:path d="m229.66 162.34l-48-48A8 8 0 0 0 168 120v40H88a48 48 0 0 1 0-96h88a8 8 0 0 0 0-16H88a64 64 0 0 0 0 128h80v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32M184 196.69v-57.38L212.69 168Z"></svg:path></svg:g>`,
})
export class PhArrowUDownRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowULeftDownDuotoneIcon],svg[ph-arrow-u-left-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m136 176l-48 48l-48-48Z" opacity=".2"></svg:path><svg:path d="M144 24a64.07 64.07 0 0 0-64 64v80H40a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 136 168H96V88a48 48 0 0 1 96 0v88a8 8 0 0 0 16 0V88a64.07 64.07 0 0 0-64-64M88 212.69L59.31 184h57.38Z"></svg:path></svg:g>`,
})
export class PhArrowULeftDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowULeftUpDuotoneIcon],svg[ph-arrow-u-left-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M136 80H40l48-48Z" opacity=".2"></svg:path><svg:path d="M200 72a8 8 0 0 0-8 8v88a48 48 0 0 1-96 0V88h40a8 8 0 0 0 5.66-13.66l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 40 88h40v80a64 64 0 0 0 128 0V80a8 8 0 0 0-8-8M88 43.31L116.69 72H59.31Z"></svg:path></svg:g>`,
})
export class PhArrowULeftUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowURightDownDuotoneIcon],svg[ph-arrow-u-right-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m216 176l-48 48l-48-48Z" opacity=".2"></svg:path><svg:path d="M223.39 172.94A8 8 0 0 0 216 168h-40V88a64 64 0 0 0-128 0v88a8 8 0 0 0 16 0V88a48 48 0 0 1 96 0v80h-40a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48a8 8 0 0 0 1.73-8.72M168 212.69L139.31 184h57.38Z"></svg:path></svg:g>`,
})
export class PhArrowURightDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowURightUpDuotoneIcon],svg[ph-arrow-u-right-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80h-96l48-48Z" opacity=".2"></svg:path><svg:path d="m221.66 74.34l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 120 88h40v80a48 48 0 0 1-96 0V80a8 8 0 0 0-16 0v88a64 64 0 0 0 128 0V88h40a8 8 0 0 0 5.66-13.66M139.31 72L168 43.31L196.69 72Z"></svg:path></svg:g>`,
})
export class PhArrowURightUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUUpLeftDuotoneIcon],svg[ph-arrow-u-up-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 40v96L32 88Z" opacity=".2"></svg:path><svg:path d="M168 80H88V40a8 8 0 0 0-13.66-5.66l-48 48a8 8 0 0 0 0 11.32l48 48A8 8 0 0 0 88 136V96h80a48 48 0 0 1 0 96H80a8 8 0 0 0 0 16h88a64 64 0 0 0 0-128m-96 36.69L43.31 88L72 59.31Z"></svg:path></svg:g>`,
})
export class PhArrowUUpLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUUpRightDuotoneIcon],svg[ph-arrow-u-up-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 88l-48 48V40Z" opacity=".2"></svg:path><svg:path d="M172.94 143.39a8 8 0 0 0 8.72-1.73l48-48a8 8 0 0 0 0-11.32l-48-48A8 8 0 0 0 168 40v40H88a64 64 0 0 0 0 128h88a8 8 0 0 0 0-16H88a48 48 0 0 1 0-96h80v40a8 8 0 0 0 4.94 7.39M184 59.31L212.69 88L184 116.69Z"></svg:path></svg:g>`,
})
export class PhArrowUUpRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUpDuotoneIcon],svg[ph-arrow-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 112H56l72-72Z" opacity=".2"></svg:path><svg:path d="m205.66 106.34l-72-72a8 8 0 0 0-11.32 0l-72 72A8 8 0 0 0 56 120h64v96a8 8 0 0 0 16 0v-96h64a8 8 0 0 0 5.66-13.66M75.31 104L128 51.31L180.69 104Z"></svg:path></svg:g>`,
})
export class PhArrowUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUpLeftDuotoneIcon],svg[ph-arrow-up-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 64L64 168V64Z" opacity=".2"></svg:path><svg:path d="M197.66 186.34L127.31 116l46.35-46.34A8 8 0 0 0 168 56H64a8 8 0 0 0-8 8v104a8 8 0 0 0 13.66 5.66L116 127.31l70.34 70.35a8 8 0 0 0 11.32-11.32M72 72h76.69l-38.34 38.34L72 148.69Z"></svg:path></svg:g>`,
})
export class PhArrowUpLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUpRightDuotoneIcon],svg[ph-arrow-up-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 64v104L88 64Z" opacity=".2"></svg:path><svg:path d="M192 56H88a8 8 0 0 0-5.66 13.66L128.69 116l-70.35 70.34a8 8 0 0 0 11.32 11.32L140 127.31l46.34 46.35A8 8 0 0 0 200 168V64a8 8 0 0 0-8-8m-8 92.69l-38.34-38.34L107.31 72H184Z"></svg:path></svg:g>`,
})
export class PhArrowUpRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsClockwiseDuotoneIcon],svg[ph-arrows-clockwise-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88" opacity=".2"></svg:path><svg:path d="M224 48v48a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h28.69l-14.63-14.63a79.56 79.56 0 0 0-56.13-23.43h-.45a79.52 79.52 0 0 0-55.89 22.77a8 8 0 0 1-11.18-11.44a96 96 0 0 1 135 .79L208 76.69V48a8 8 0 0 1 16 0m-37.59 135.29a80 80 0 0 1-112.47-.66L59.31 168H88a8 8 0 0 0 0-16H40a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-28.69l14.63 14.63A95.43 95.43 0 0 0 130 222.06h.53a95.36 95.36 0 0 0 67.07-27.33a8 8 0 0 0-11.18-11.44Z"></svg:path></svg:g>`,
})
export class PhArrowsClockwiseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsCounterClockwiseDuotoneIcon],svg[ph-arrows-counter-clockwise-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88" opacity=".2"></svg:path><svg:path d="M88 104H40a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v28.69l14.63-14.63A95.43 95.43 0 0 1 130 33.94h.53a95.36 95.36 0 0 1 67.07 27.33a8 8 0 0 1-11.18 11.44a79.52 79.52 0 0 0-55.89-22.77h-.45a79.56 79.56 0 0 0-56.14 23.43L59.31 88H88a8 8 0 0 1 0 16m128 48h-48a8 8 0 0 0 0 16h28.69l-14.63 14.63a79.56 79.56 0 0 1-56.13 23.43h-.45a79.52 79.52 0 0 1-55.89-22.77a8 8 0 1 0-11.18 11.44a95.36 95.36 0 0 0 67.07 27.33h.52a95.43 95.43 0 0 0 67.36-28.12L208 179.31V208a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhArrowsCounterClockwiseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsDownUpDuotoneIcon],svg[ph-arrows-down-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 48v160H80V48Z" opacity=".2"></svg:path><svg:path d="M117.66 170.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L72 188.69V48a8 8 0 0 1 16 0v140.69l18.34-18.35a8 8 0 0 1 11.32 0m96-96l-32-32a8 8 0 0 0-11.32 0l-32 32a8 8 0 0 0 11.32 11.32L168 67.31V208a8 8 0 0 0 16 0V67.31l18.34 18.35a8 8 0 0 0 11.32-11.32"></svg:path></svg:g>`,
})
export class PhArrowsDownUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsHorizontalDuotoneIcon],svg[ph-arrows-horizontal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m232 128l-32 32H56l-32-32l32-32h144Z" opacity=".2"></svg:path><svg:path d="m237.66 133.66l-32 32a8 8 0 0 1-11.32-11.32L212.69 136H43.31l18.35 18.34a8 8 0 0 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32L43.31 120h169.38l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32"></svg:path></svg:g>`,
})
export class PhArrowsHorizontalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInCardinalDuotoneIcon],svg[ph-arrows-in-cardinal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M90.34 69.66a8 8 0 0 1 11.32-11.32L120 76.69V24a8 8 0 0 1 16 0v52.69l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0Zm43.32 84.68a8 8 0 0 0-11.32 0l-32 32a8 8 0 0 0 11.32 11.32L120 179.31V232a8 8 0 0 0 16 0v-52.69l18.34 18.35a8 8 0 0 0 11.32-11.32ZM232 120h-52.69l18.35-18.34a8 8 0 0 0-11.32-11.32l-32 32a8 8 0 0 0 0 11.32l32 32a8 8 0 0 0 11.32-11.32L179.31 136H232a8 8 0 0 0 0-16m-130.34 2.34l-32-32a8 8 0 0 0-11.32 11.32L76.69 120H24a8 8 0 0 0 0 16h52.69l-18.35 18.34a8 8 0 0 0 11.32 11.32l32-32a8 8 0 0 0 0-11.32"></svg:path></svg:g>`,
})
export class PhArrowsInCardinalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInDuotoneIcon],svg[ph-arrows-in-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M144 104V64a8 8 0 0 1 16 0v20.69l42.34-42.35a8 8 0 0 1 11.32 11.32L171.31 96H192a8 8 0 0 1 0 16h-40a8 8 0 0 1-8-8m-40 40H64a8 8 0 0 0 0 16h20.69l-42.35 42.34a8 8 0 0 0 11.32 11.32L96 171.31V192a8 8 0 0 0 16 0v-40a8 8 0 0 0-8-8m67.31 16H192a8 8 0 0 0 0-16h-40a8 8 0 0 0-8 8v40a8 8 0 0 0 16 0v-20.69l42.34 42.35a8 8 0 0 0 11.32-11.32ZM104 56a8 8 0 0 0-8 8v20.69L53.66 42.34a8 8 0 0 0-11.32 11.32L84.69 96H64a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhArrowsInDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInLineHorizontalDuotoneIcon],svg[ph-arrows-in-line-horizontal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 56v144a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M136 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0M69.66 90.34a8 8 0 0 0-11.32 11.32L76.69 120H16a8 8 0 0 0 0 16h60.69l-18.35 18.34a8 8 0 0 0 11.32 11.32l32-32a8 8 0 0 0 0-11.32ZM240 120h-60.69l18.35-18.34a8 8 0 0 0-11.32-11.32l-32 32a8 8 0 0 0 0 11.32l32 32a8 8 0 0 0 11.32-11.32L179.31 136H240a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhArrowsInLineHorizontalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInLineVerticalDuotoneIcon],svg[ph-arrows-in-line-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 32v192a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-101.66-26.34a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32L136 76.69V16a8 8 0 0 0-16 0v60.69l-18.34-18.35a8 8 0 0 0-11.32 11.32Zm11.32 52.68a8 8 0 0 0-11.32 0l-32 32a8 8 0 0 0 11.32 11.32L120 179.31V240a8 8 0 0 0 16 0v-60.69l18.34 18.35a8 8 0 0 0 11.32-11.32Z"></svg:path></svg:g>`,
})
export class PhArrowsInLineVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInSimpleDuotoneIcon],svg[ph-arrows-in-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M213.66 53.66L163.31 104H192a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8V64a8 8 0 0 1 16 0v28.69l50.34-50.35a8 8 0 0 1 11.32 11.32M112 136H64a8 8 0 0 0 0 16h28.69l-50.35 50.34a8 8 0 0 0 11.32 11.32L104 163.31V192a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhArrowsInSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsLeftRightDuotoneIcon],svg[ph-arrows-left-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 80v96H48V80Z" opacity=".2"></svg:path><svg:path d="m213.66 181.66l-32 32a8 8 0 0 1-11.32-11.32L188.69 184H48a8 8 0 0 1 0-16h140.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32m-139.32-64a8 8 0 0 0 11.32-11.32L67.31 88H208a8 8 0 0 0 0-16H67.31l18.35-18.34a8 8 0 0 0-11.32-11.32l-32 32a8 8 0 0 0 0 11.32Z"></svg:path></svg:g>`,
})
export class PhArrowsLeftRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsMergeDuotoneIcon],svg[ph-arrows-merge-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 40v64l-56 56l-56-56V40Z" opacity=".2"></svg:path><svg:path d="M192 40v64a8 8 0 0 1-2.34 5.66L136 163.31v49.38l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 212.69v-49.38l-53.66-53.65A8 8 0 0 1 64 104V40a8 8 0 0 1 16 0v60.69l48 48l48-48V40a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhArrowsMergeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutCardinalDuotoneIcon],svg[ph-arrows-out-cardinal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 128L128 232L24 128L128 24Z" opacity=".2"></svg:path><svg:path d="M90.34 61.66a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L136 43.31V96a8 8 0 0 1-16 0V43.31l-18.34 18.35a8 8 0 0 1-11.32 0m64 132.68L136 212.69V160a8 8 0 0 0-16 0v52.69l-18.34-18.35a8 8 0 0 0-11.32 11.32l32 32a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32m83.32-72l-32-32a8 8 0 0 0-11.32 11.32L212.69 120H160a8 8 0 0 0 0 16h52.69l-18.35 18.34a8 8 0 0 0 11.32 11.32l32-32a8 8 0 0 0 0-11.32M43.31 136H96a8 8 0 0 0 0-16H43.31l18.35-18.34a8 8 0 0 0-11.32-11.32l-32 32a8 8 0 0 0 0 11.32l32 32a8 8 0 0 0 11.32-11.32Z"></svg:path></svg:g>`,
})
export class PhArrowsOutCardinalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutDuotoneIcon],svg[ph-arrows-out-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 48v160H48V48Z" opacity=".2"></svg:path><svg:path d="M216 48v48a8 8 0 0 1-16 0V67.31l-42.34 42.35a8 8 0 0 1-11.32-11.32L188.69 56H160a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8M98.34 146.34L56 188.69V160a8 8 0 0 0-16 0v48a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16H67.31l42.35-42.34a8 8 0 0 0-11.32-11.32M208 152a8 8 0 0 0-8 8v28.69l-42.34-42.35a8 8 0 0 0-11.32 11.32L188.69 200H160a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8M67.31 56H96a8 8 0 0 0 0-16H48a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0V67.31l42.34 42.35a8 8 0 0 0 11.32-11.32Z"></svg:path></svg:g>`,
})
export class PhArrowsOutDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutLineHorizontalDuotoneIcon],svg[ph-arrows-out-line-horizontal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 56v144a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M136 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0m-40 80H35.31l18.35-18.34a8 8 0 0 0-11.32-11.32l-32 32a8 8 0 0 0 0 11.32l32 32a8 8 0 0 0 11.32-11.32L35.31 136H96a8 8 0 0 0 0-16m149.66 2.34l-32-32a8 8 0 0 0-11.32 11.32L220.69 120H160a8 8 0 0 0 0 16h60.69l-18.35 18.34a8 8 0 0 0 11.32 11.32l32-32a8 8 0 0 0 0-11.32"></svg:path></svg:g>`,
})
export class PhArrowsOutLineHorizontalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutLineVerticalDuotoneIcon],svg[ph-arrows-out-line-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 32v192a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M101.66 53.66L120 35.31V96a8 8 0 0 0 16 0V35.31l18.34 18.35a8 8 0 0 0 11.32-11.32l-32-32a8 8 0 0 0-11.32 0l-32 32a8 8 0 0 0 11.32 11.32m52.68 148.68L136 220.69V160a8 8 0 0 0-16 0v60.69l-18.34-18.35a8 8 0 0 0-11.32 11.32l32 32a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32"></svg:path></svg:g>`,
})
export class PhArrowsOutLineVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutSimpleDuotoneIcon],svg[ph-arrows-out-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M216 48v48a8 8 0 0 1-16 0V67.31l-50.34 50.35a8 8 0 0 1-11.32-11.32L188.69 56H160a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m-109.66 90.34L56 188.69V160a8 8 0 0 0-16 0v48a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16H67.31l50.35-50.34a8 8 0 0 0-11.32-11.32"></svg:path></svg:g>`,
})
export class PhArrowsOutSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsSplitDuotoneIcon],svg[ph-arrows-split-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 136v80H64v-80l64-64Z" opacity=".2"></svg:path><svg:path d="m229.66 189.66l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L184 196.69v-57.38l-56-56l-56 56v57.38l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L56 196.69V136a8 8 0 0 1 2.34-5.66L120 68.69V24a8 8 0 0 1 16 0v44.69l61.66 61.65A8 8 0 0 1 200 136v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32"></svg:path></svg:g>`,
})
export class PhArrowsSplitDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsVerticalDuotoneIcon],svg[ph-arrows-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 56v144l-32 32l-32-32V56l32-32Z" opacity=".2"></svg:path><svg:path d="M165.66 194.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 212.69V43.31l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L136 43.31v169.38l18.34-18.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhArrowsVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArticleDuotoneIcon],svg[ph-article-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176zM184 96a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhArticleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArticleMediumDuotoneIcon],svg[ph-article-medium-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 104v96H80v-32h88v-64Z" opacity=".2"></svg:path><svg:path d="M56 136a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h8V64h-8a8 8 0 0 1 0-16h16a8 8 0 0 1 6.78 3.74L80 104.91l33.22-53.15A8 8 0 0 1 120 48h16a8 8 0 0 1 0 16h-8v64h8a8 8 0 0 1 0 16h-24a8 8 0 0 1 0-16V83.89l-25.22 40.35a8 8 0 0 1-13.56 0L48 83.89V128a8 8 0 0 1 8 8m112-24h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16m64 16h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 32H80a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16m0 32H80a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhArticleMediumDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArticleNyTimesDuotoneIcon],svg[ph-article-ny-times-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 104v96H80v-32h48v-64Z" opacity=".2"></svg:path><svg:path d="M128 96h104a8 8 0 0 1 0 16H128a8 8 0 0 1 0-16m104 32H128a8 8 0 0 0 0 16h104a8 8 0 0 0 0-16m0 32H80a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16m0 32H80a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16M96 144a8 8 0 0 0 0-16h-8V64h32v8a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-8h32v64h-8a8 8 0 0 0 0 16Z"></svg:path></svg:g>`,
})
export class PhArticleNyTimesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAsclepiusDuotoneIcon],svg[ph-asclepius-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 48v8a32 32 0 0 1-32 32H32v-8a32 32 0 0 1 32-32Z" opacity=".2"></svg:path><svg:path d="M216 79v1a40 40 0 0 1-40 40h-40v80h8a16 16 0 0 0 10.67-27.93a8 8 0 0 1 10.66-11.92A32 32 0 0 1 144 216h-8v16a8 8 0 0 1-16 0v-16H96a8 8 0 0 1 0-16h24v-80H96a16 16 0 0 0 0 32a8 8 0 0 1 0 16a32 32 0 0 1 0-64h24V24a8 8 0 0 1 16 0v80h40a24 24 0 0 0 24-24v-1a23 23 0 0 0-23-23h-17a8 8 0 0 1 0-16h17a39 39 0 0 1 39 39M56 96H32a8 8 0 0 1-8-8v-8a40 40 0 0 1 40-40h32a8 8 0 0 1 0 16a40 40 0 0 1-40 40m24-40H64a24 24 0 0 0-24 24h16a24 24 0 0 0 24-24"></svg:path></svg:g>`,
})
export class PhAsclepiusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAsteriskDuotoneIcon],svg[ph-asterisk-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 128a72 72 0 1 1-72-72a72 72 0 0 1 72 72" opacity=".2"></svg:path><svg:path d="M214.86 180.12a8 8 0 0 1-11 2.74L136 142.13V216a8 8 0 0 1-16 0v-73.87l-67.88 40.73a8 8 0 1 1-8.23-13.72L112.45 128L43.89 86.86a8 8 0 1 1 8.23-13.72L120 113.87V40a8 8 0 0 1 16 0v73.87l67.88-40.73a8 8 0 1 1 8.23 13.72L143.55 128l68.56 41.14a8 8 0 0 1 2.75 10.98"></svg:path></svg:g>`,
})
export class PhAsteriskDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAsteriskSimpleDuotoneIcon],svg[ph-asterisk-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 128a72 72 0 1 1-72-72a72 72 0 0 1 72 72" opacity=".2"></svg:path><svg:path d="m211 103.43l-70.13 28l49.47 63.61a8 8 0 1 1-12.63 9.82L128 141l-49.68 63.91a8 8 0 0 1-12.63-9.82l49.47-63.61L45 103.43a8 8 0 0 1 6-14.86l69 27.61V40a8 8 0 0 1 16 0v76.18l69-27.61a8 8 0 1 1 6 14.86"></svg:path></svg:g>`,
})
export class PhAsteriskSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAtDuotoneIcon],svg[ph-at-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 0 0 0 208c21.51 0 44.1-6.48 60.43-17.33a8 8 0 0 0-8.86-13.33C166 210.38 146.21 216 128 216a88 88 0 1 1 88-88c0 26.45-10.88 32-20 32s-20-5.55-20-32V88a8 8 0 0 0-16 0v4.26a48 48 0 1 0 5.93 65.1c6 12 16.35 18.64 30.07 18.64c22.54 0 36-17.94 36-48A104.11 104.11 0 0 0 128 24m0 136a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path></svg:g>`,
})
export class PhAtDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAtomDuotoneIcon],svg[ph-atom-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M210.26 210.26c-17.23 17.23-68-5.63-113.46-51.06S28.51 63 45.74 45.74s68 5.63 113.46 51.06s68.29 96.2 51.06 113.46" opacity=".2"></svg:path><svg:path d="M196.12 128c24.65-34.61 37.22-70.38 19.74-87.86S162.61 35.23 128 59.88C93.39 35.23 57.62 22.66 40.14 40.14S35.23 93.39 59.88 128c-24.65 34.61-37.22 70.38-19.74 87.86c5.63 5.63 13.15 8.14 21.91 8.14c18.48 0 42.48-11.17 66-27.88C151.47 212.83 175.47 224 194 224c8.76 0 16.29-2.52 21.91-8.14c17.43-17.48 4.86-53.25-19.79-87.86m8.43-76.55c7.64 7.64 2.48 32.4-18.52 63.28a300 300 0 0 0-21.19-23.57A300 300 0 0 0 141.27 70c30.88-21 55.64-26.2 63.28-18.55M176.29 128a289 289 0 0 1-22.76 25.53A289 289 0 0 1 128 176.29a289 289 0 0 1-25.53-22.76A289 289 0 0 1 79.71 128A298.6 298.6 0 0 1 128 79.71a289 289 0 0 1 25.53 22.76A289 289 0 0 1 176.29 128M51.45 51.45c2.2-2.21 5.83-3.35 10.62-3.35c11.82 0 30.69 6.9 52.65 21.9a304 304 0 0 0-23.56 21.16A300 300 0 0 0 70 114.73C49 83.85 43.81 59.09 51.45 51.45m0 153.1c-7.64-7.64-2.45-32.4 18.55-63.28a300 300 0 0 0 21.19 23.57A304 304 0 0 0 114.73 186c-30.88 21-55.64 26.2-63.28 18.55m153.1 0c-7.64 7.65-32.4 2.48-63.28-18.52a304 304 0 0 0 23.57-21.19A300 300 0 0 0 186 141.27c21 30.88 26.19 55.64 18.55 63.28M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhAtomDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAvocadoDuotoneIcon],svg[ph-avocado-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m203.45 133.33l-29.82-84.28a48 48 0 0 0-90.9-1l-29.54 83.54a80 80 0 1 0 150.26 1.74M128 200a40 40 0 1 1 40-40a40 40 0 0 1-40 40" opacity=".2"></svg:path><svg:path d="M128 112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m83-61.34l-29.8-84.19a56 56 0 0 0-106-1.14l-29.51 83.5A88 88 0 1 0 211 130.66M128 232a72.05 72.05 0 0 1-67.33-97.57a1.3 1.3 0 0 1 .07-.18l29.54-83.59a40 40 0 0 1 75.74.88l.06.18L195.9 136a72.05 72.05 0 0 1-67.9 96"></svg:path></svg:g>`,
})
export class PhAvocadoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAxeDuotoneIcon],svg[ph-axe-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m245.65 108.46l-81.19 81.19a8 8 0 0 1-13.59-4.65c-7.09-53.14-42.41-87.8-59.45-99.76A8 8 0 0 1 90.33 73L129 34.33a8 8 0 0 1 12.2 1.09c12 17 46.62 52.36 99.76 59.45a8 8 0 0 1 4.69 13.59" opacity=".2"></svg:path><svg:path d="M255.15 97.72A16 16 0 0 0 242 86.94a136.5 136.5 0 0 1-51.65-18l10.31-10.3a25 25 0 0 0-35.32-35.32l-13.2 13.21c-2.33-2.8-3.81-4.84-4.41-5.69a16 16 0 0 0-24.41-2.15L84.68 67.36a16 16 0 0 0 2.14 24.4c.86.6 2.9 2.08 5.7 4.41l-85.21 85.2a25 25 0 0 0 35.32 35.32l82.3-82.31a136.6 136.6 0 0 1 18 51.65a16 16 0 0 0 10.77 13.12a16.2 16.2 0 0 0 5.15.85a15.88 15.88 0 0 0 11.26-4.69l81.18-81.19a15.86 15.86 0 0 0 3.86-16.4m-78.46-63.09a9 9 0 1 1 12.68 12.68l-12.55 12.55a153 153 0 0 1-13.72-11.65ZM31.31 205.37a9 9 0 1 1-12.68-12.68l85.58-85.58a151 151 0 0 1 11.65 13.71Zm127.49-21.45C150 118.29 101.52 82.52 96 78.67L134.66 40c3.86 5.5 39.63 54 105.25 62.78Z"></svg:path></svg:g>`,
})
export class PhAxeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBabyCarriageDuotoneIcon],svg[ph-baby-carriage-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 112h-88V48a8 8 0 0 1 8-8h8a72 72 0 0 1 72 72" opacity=".2"></svg:path><svg:path d="M160 32h-8a16 16 0 0 0-16 16v56H55.2A40.07 40.07 0 0 0 16 72a8 8 0 0 0 0 16a24 24 0 0 1 24 24a80.09 80.09 0 0 0 80 80h40a80 80 0 0 0 0-160m63.48 72h-56.67l41.86-33.49A63.73 63.73 0 0 1 223.48 104M160 48a63.6 63.6 0 0 1 36.69 11.61L152 95.35V48Zm0 128h-40a64.09 64.09 0 0 1-63.5-56h167a64.09 64.09 0 0 1-63.5 56m-56 48a16 16 0 1 1-16-16a16 16 0 0 1 16 16m104 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhBabyCarriageDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBabyDuotoneIcon],svg[ph-baby-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M92 140a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72-24a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-12.27 45.23a45 45 0 0 1-47.46 0a8 8 0 0 0-8.54 13.54a61 61 0 0 0 64.54 0a8 8 0 0 0-8.54-13.54M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88.11 88.11 0 0 0-84.09-87.91C120.32 56.38 120 71.88 120 72a8 8 0 0 0 16 0a8 8 0 0 1 16 0a24 24 0 0 1-48 0c0-.73.13-14.3 8.46-30.63A88 88 0 1 0 216 128"></svg:path></svg:g>`,
})
export class PhBabyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBackpackDuotoneIcon],svg[ph-backpack-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 96v120a8 8 0 0 1-8 8h-24v-72a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v72H56a8 8 0 0 1-8-8V96a48 48 0 0 1 48-48h64a48 48 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M168 40.58V32a24 24 0 0 0-24-24h-32a24 24 0 0 0-24 24v8.58A56.09 56.09 0 0 0 40 96v120a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V96a56.09 56.09 0 0 0-48-55.42M112 24h32a8 8 0 0 1 8 8v8h-48v-8a8 8 0 0 1 8-8m56 136H88v-8a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8Zm-80 16h48v8a8 8 0 0 0 16 0v-8h16v40H88Zm112 40h-16v-64a24 24 0 0 0-24-24H96a24 24 0 0 0-24 24v64H56V96a40 40 0 0 1 40-40h64a40 40 0 0 1 40 40zM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhBackpackDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBackspaceDuotoneIcon],svg[ph-backspace-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v144a8 8 0 0 1-8 8H68.53a8 8 0 0 1-6.86-3.88L16 128l45.67-76.12A8 8 0 0 1 68.53 48H216a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H68.53a16.08 16.08 0 0 0-13.72 7.77L9.14 123.88a8 8 0 0 0 0 8.24l45.67 76.11A16.08 16.08 0 0 0 68.53 216H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M61.67 204.12l6.86-4.12ZM216 200H68.53l-43.2-72l43.2-72H216Zm-109.66-53.66L124.69 128l-18.35-18.34a8 8 0 0 1 11.32-11.32L136 116.69l18.34-18.35a8 8 0 0 1 11.32 11.32L147.31 128l18.35 18.34a8 8 0 0 1-11.32 11.32L136 139.31l-18.34 18.35a8 8 0 0 1-11.32-11.32"></svg:path></svg:g>`,
})
export class PhBackspaceDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBagDuotoneIcon],svg[ph-bag-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 80v120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 64h-40a48 48 0 0 0-96 0H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m-88-32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m88 168H40V80h40v16a8 8 0 0 0 16 0V80h64v16a8 8 0 0 0 16 0V80h40Z"></svg:path></svg:g>`,
})
export class PhBagDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBagSimpleDuotoneIcon],svg[ph-bag-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 80v120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 64h-40a48 48 0 0 0-96 0H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m-88-32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m88 168H40V80h176Z"></svg:path></svg:g>`,
})
export class PhBagSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBalloonDuotoneIcon],svg[ph-balloon-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M137.89 199.13L152 232h-48l14.09-32.87C78.59 192.18 48 144.83 48 104a80 80 0 0 1 160 0c0 40.83-30.59 88.18-70.11 95.13" opacity=".2"></svg:path><svg:path d="M128 16a88.1 88.1 0 0 0-88 88c0 23.43 9.4 49.42 25.13 69.5c12.08 15.41 26.5 26 41.91 31.09l-10.39 24.26A8 8 0 0 0 104 240h48a8 8 0 0 0 7.35-11.15L149 204.59c15.4-5.07 29.83-15.68 41.91-31.09C206.6 153.42 216 127.43 216 104a88.1 88.1 0 0 0-88-88m11.87 208h-23.74l6.94-16.19c1.64.12 3.28.19 4.93.19s3.29-.07 4.93-.19Zm38.4-60.37C163.94 181.93 146.09 192 128 192s-35.94-10.07-50.27-28.37C64.12 146.27 56 124 56 104a72 72 0 0 1 144 0c0 20-8.12 42.27-21.73 59.63m-1-59.74a8.5 8.5 0 0 1-1.27.11a8 8 0 0 1-7.88-6.68a41.29 41.29 0 0 0-33.43-33.43a8 8 0 1 1 2.64-15.78a57.5 57.5 0 0 1 46.57 46.57a8 8 0 0 1-6.58 9.21Z"></svg:path></svg:g>`,
})
export class PhBalloonDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBandaidsDuotoneIcon],svg[ph-bandaids-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M206.63 94.63L173.25 128L128 82.75l33.37-33.38a32 32 0 0 1 45.26 45.26M49.37 161.37a32 32 0 0 0 45.26 45.26L128 173.25L82.75 128ZM82.75 128L128 82.75L94.63 49.37a32 32 0 0 0-45.26 45.26Zm90.5 0L128 173.25l33.37 33.38a32 32 0 0 0 45.26-45.26Z" opacity=".2"></svg:path><svg:path d="m184.57 128l27.71-27.72a40 40 0 1 0-56.56-56.56L128 71.43l-27.72-27.71a40 40 0 1 0-56.56 56.56L71.43 128l-27.71 27.72a40 40 0 1 0 56.56 56.56L128 184.57l27.72 27.71a40 40 0 1 0 56.56-56.56ZM167 55a24 24 0 1 1 34 34l-27.72 27.72l-33.97-33.97Zm-5.09 73L128 161.94L94.06 128L128 94.06ZM55 89a24 24 0 1 1 34-34l27.72 27.72l-33.97 33.97Zm34 112a24 24 0 1 1-34-34l27.72-27.72l33.94 33.94Zm112 0a24 24 0 0 1-34 0l-27.72-27.72l33.94-33.94L201 167a24 24 0 0 1 0 34m-85-73a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path></svg:g>`,
})
export class PhBandaidsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBankDuotoneIcon],svg[ph-bank-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 96H24l104-64Z" opacity=".2"></svg:path><svg:path d="M24 104h24v64H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16h-16v-64h24a8 8 0 0 0 4.19-14.81l-104-64a8 8 0 0 0-8.38 0l-104 64A8 8 0 0 0 24 104m40 0h32v64H64Zm80 0v64h-32v-64Zm48 64h-32v-64h32ZM128 41.39L203.74 88H52.26ZM248 208a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h224a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhBankDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarbellDuotoneIcon],svg[ph-barbell-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M96 64v128a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8m96-8h-24a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M248 120h-8V88a16 16 0 0 0-16-16h-16v-8a16 16 0 0 0-16-16h-24a16 16 0 0 0-16 16v56h-48V64a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v8H32a16 16 0 0 0-16 16v32H8a8 8 0 0 0 0 16h8v32a16 16 0 0 0 16 16h16v8a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-56h48v56a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-8h16a16 16 0 0 0 16-16v-32h8a8 8 0 0 0 0-16M32 168V88h16v80Zm56 24H64V64h24zm104 0h-24V64h24zm32-24h-16V88h16Z"></svg:path></svg:g>`,
})
export class PhBarbellDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarcodeDuotoneIcon],svg[ph-barcode-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160H32V48Z" opacity=".2"></svg:path><svg:path d="M232 48v40a8 8 0 0 1-16 0V56h-32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M72 200H40v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16m152-40a8 8 0 0 0-8 8v32h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M32 96a8 8 0 0 0 8-8V56h32a8 8 0 0 0 0-16H32a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8m48-16a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m104 88V88a8 8 0 0 0-16 0v80a8 8 0 0 0 16 0m-40-88a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m-32 0a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhBarcodeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarnDuotoneIcon],svg[ph-barn-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 120v80H72v-80Z" opacity=".2"></svg:path><svg:path d="M240 192h-8v-61.43l1.49 2.08a8 8 0 1 0 13-9.3l-40-56a8 8 0 0 0-2-1.94L137 18.77l-.1-.07a16 16 0 0 0-17.76 0l-.1.07l-67.59 46.65a8 8 0 0 0-2 1.94l-40 56a8 8 0 1 0 13 9.3l1.55-2.09V192h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 108.17l21.7-30.38L128 32l66.3 45.78l21.7 30.39V192h-24v-72a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v72H40Zm88 42L97 128h62Zm48-14.62v48.91L141.76 160ZM114.24 160L80 184.46v-48.91Zm13.76 9.83L159 192H97ZM104 88a8 8 0 0 1 8-8h32a8 8 0 1 1 0 16h-32a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhBarnDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarricadeDuotoneIcon],svg[ph-barricade-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 80v68l-76-76h68a8 8 0 0 1 8 8M32 72a8 8 0 0 0-8 8v4l76 76h72L84 72Z" opacity=".2"></svg:path><svg:path d="M224 64H32a16 16 0 0 0-16 16v72a16 16 0 0 0 16 16h24v32a8 8 0 0 0 16 0v-32h112v32a8 8 0 0 0 16 0v-32h24a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 64.69L175.31 80H224ZM80.69 80l72 72h-49.38L32 80.69V80ZM32 103.31L80.69 152H32ZM224 152h-48.69l-72-72h49.38L224 151.32z"></svg:path></svg:g>`,
})
export class PhBarricadeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBaseballCapDuotoneIcon],svg[ph-baseball-cap-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 152v32a16 16 0 0 1-25.48 12.88C182.53 185.26 159 176 128 176s-54.53 9.26-70.52 20.88A16 16 0 0 1 32 184v-32a160 160 0 0 1 192 0" opacity=".2"></svg:path><svg:path d="M128 24A104.12 104.12 0 0 0 24 128v56a24 24 0 0 0 24 24a24.1 24.1 0 0 0 14.18-4.64C74.33 194.53 95.6 184 128 184s53.67 10.52 65.81 19.35A24 24 0 0 0 232 184v-56A104.12 104.12 0 0 0 128 24m88 104v8.87a166 166 0 0 0-40.94-18.22a167 167 0 0 0-28.87-76.75A88.15 88.15 0 0 1 216 128m-88-83.73a152.5 152.5 0 0 1 30.4 70.46a170.9 170.9 0 0 0-60.84 0A153.3 153.3 0 0 1 128 44.27m-18.19-2.37a167 167 0 0 0-28.87 76.76A166 166 0 0 0 40 136.88V128a88.15 88.15 0 0 1 69.81-86.1m101.85 149.21a8 8 0 0 1-8.44-.69C189.16 180.2 164.7 168 128 168s-61.16 12.2-75.22 22.42a8 8 0 0 1-8.44.69A7.77 7.77 0 0 1 40 184v-27.93a152 152 0 0 1 176 0V184a7.77 7.77 0 0 1-4.34 7.11"></svg:path></svg:g>`,
})
export class PhBaseballCapDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBaseballDuotoneIcon],svg[ph-baseball-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M60.66 59.58A95.74 95.74 0 0 1 89.33 128a95.74 95.74 0 0 1-28.67 68.42a96 96 0 0 1 0-136.84m134.68 0a96 96 0 0 0 0 136.84a96 96 0 0 0 0-136.84" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M72.09 195.91c.82-1 1.64-1.93 2.42-2.91A8 8 0 1 0 62 183l-1.34 1.62a87.82 87.82 0 0 1 0-113.24L62 73a8 8 0 1 0 12.51-10c-.78-1-1.6-2-2.42-2.91a87.84 87.84 0 0 1 111.82 0c-.82 1-1.64 1.92-2.42 2.91A8 8 0 1 0 194 73l1.34-1.62a87.82 87.82 0 0 1 0 113.24L194 183a8 8 0 1 0-12.48 10c.78 1 1.6 1.95 2.42 2.91a87.84 87.84 0 0 1-111.82 0Zm23.8-50.59a104.5 104.5 0 0 1-4.48 17.35a8 8 0 0 1-15.09-5.34a87 87 0 0 0 3.79-14.65a8 8 0 1 1 15.78 2.64m0-34.64a8 8 0 0 1-6.57 9.21A8.5 8.5 0 0 1 88 120a8 8 0 0 1-7.88-6.68a87 87 0 0 0-3.79-14.65a8 8 0 0 1 15.09-5.34a104.5 104.5 0 0 1 4.47 17.35m78.91 56.86a8 8 0 0 1-10.21-4.87a104.5 104.5 0 0 1-4.48-17.35a8 8 0 1 1 15.78-2.64a87 87 0 0 0 3.79 14.65a8 8 0 0 1-4.88 10.21m-14.69-56.86a104.5 104.5 0 0 1 4.48-17.35a8 8 0 0 1 15.09 5.34a87 87 0 0 0-3.79 14.65A8 8 0 0 1 168 120a8.5 8.5 0 0 1-1.33-.11a8 8 0 0 1-6.56-9.21"></svg:path></svg:g>`,
})
export class PhBaseballDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBaseballHelmetDuotoneIcon],svg[ph-baseball-helmet-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 176a20 20 0 1 1 20-20a20 20 0 0 1-20 20m64-48v24a64 64 0 0 1-64 64h40a64 64 0 0 0 64-64v-24Z" opacity=".2"></svg:path><svg:path d="M88 128a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m160-48h-24.3A104 104 0 0 0 16 128v24a72.08 72.08 0 0 0 72 72h40a72.08 72.08 0 0 0 72-72v-16h48a8 8 0 0 0 0-16m-64 32a56.06 56.06 0 0 1-50.46 55.72A71.87 71.87 0 0 0 160 152v-16h24Zm-32-32a8 8 0 0 0-8 8v24a56 56 0 0 1-112 0v-24a88 88 0 0 1 175.64-8Z"></svg:path></svg:g>`,
})
export class PhBaseballHelmetDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBasketDuotoneIcon],svg[ph-basket-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m232 88l-15.07 113.06A8 8 0 0 1 209 208H47a8 8 0 0 1-7.93-6.94L24 88Z" opacity=".2"></svg:path><svg:path d="M136 120v56a8 8 0 0 1-16 0v-56a8 8 0 0 1 16 0m36.84-.8l-5.6 56a8 8 0 0 0 7.16 8.8a7 7 0 0 0 .81 0a8 8 0 0 0 7.95-7.2l5.6-56a8 8 0 0 0-15.92-1.6m-89.68 0a8 8 0 0 0-15.92 1.6l5.6 56a8 8 0 0 0 8 7.2a7 7 0 0 0 .81 0a8 8 0 0 0 7.16-8.76Zm156.77-30.14l-15.07 113.06A16.06 16.06 0 0 1 209 216H47a16.06 16.06 0 0 1-15.86-13.88L16.07 89.06A8 8 0 0 1 24 80h44.37L122 18.73a8 8 0 0 1 12 0L187.63 80H232a8 8 0 0 1 7.93 9.06M89.63 80h76.74L128 36.15Zm133.23 16H33.14L47 200h162Z"></svg:path></svg:g>`,
})
export class PhBasketDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBasketballDuotoneIcon],svg[ph-basketball-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m60 195.88l.12.12ZM60 60a96.43 96.43 0 0 0 0 135.88a96.1 96.1 0 0 0 28-67.94A96.1 96.1 0 0 0 60 60m136 0a96.43 96.43 0 0 0 0 135.88A96.43 96.43 0 0 0 196 60m0 135.88l.12.12z" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40.37 136h39.26A87.2 87.2 0 0 1 60 183.83A87.54 87.54 0 0 1 40.37 136M136 120V40.37a87.6 87.6 0 0 1 48.68 20.37A103.06 103.06 0 0 0 160.3 120Zm-16 0H95.7a103.06 103.06 0 0 0-24.38-59.26A87.6 87.6 0 0 1 120 40.37Zm-40.37 0H40.37A87.54 87.54 0 0 1 60 72.17A87.2 87.2 0 0 1 79.63 120m16.07 16H120v79.63a87.6 87.6 0 0 1-48.68-20.37A103.1 103.1 0 0 0 95.7 136m40.3 0h24.3a103.1 103.1 0 0 0 24.38 59.26A87.6 87.6 0 0 1 136 215.63Zm40.37 0h39.26A87.54 87.54 0 0 1 196 183.83A87.2 87.2 0 0 1 176.37 136m0-16A87.2 87.2 0 0 1 196 72.17A87.54 87.54 0 0 1 215.63 120Z"></svg:path></svg:g>`,
})
export class PhBasketballDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBathtubDuotoneIcon],svg[ph-bathtub-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 104v40a48 48 0 0 1-48 48H64a48 48 0 0 1-48-48v-40h120v40h64v-40Z" opacity=".2"></svg:path><svg:path d="M240 96h-32a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8H64V52a12 12 0 0 1 12-12a12.44 12.44 0 0 1 12.16 9.59a8 8 0 0 0 15.68-3.18A28.32 28.32 0 0 0 76 24a28 28 0 0 0-28 28v44H16a8 8 0 0 0-8 8v40a56.06 56.06 0 0 0 56 56v16a8 8 0 0 0 16 0v-16h96v16a8 8 0 0 0 16 0v-16a56.06 56.06 0 0 0 56-56v-40a8 8 0 0 0-8-8m-48 8v32h-48v-32Zm40 40a40 40 0 0 1-40 40H64a40 40 0 0 1-40-40v-32h104v32a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-32h24Z"></svg:path></svg:g>`,
})
export class PhBathtubDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingDuotoneIcon],svg[ph-battery-charging-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8Zm48-80v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-117.19 27.79a8 8 0 0 1 .35 7.79l-16 32a8 8 0 0 1-14.32-7.16L119.06 136H100a8 8 0 0 1-7.16-11.58l16-32a8 8 0 1 1 14.32 7.16L112.94 120H132a8 8 0 0 1 6.81 3.79"></svg:path></svg:g>`,
})
export class PhBatteryChargingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingVerticalDuotoneIcon],svg[ph-battery-charging-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v168a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M150.81 131.79a8 8 0 0 1 .35 7.79l-16 32a8 8 0 0 1-14.32-7.16L131.06 144H112a8 8 0 0 1-7.16-11.58l16-32a8 8 0 1 1 14.32 7.16L124.94 128H144a8 8 0 0 1 6.81 3.79M96 16h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m104 40v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Z"></svg:path></svg:g>`,
})
export class PhBatteryChargingVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryEmptyDuotoneIcon],svg[ph-battery-empty-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8Zm48-80v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhBatteryEmptyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryFullDuotoneIcon],svg[ph-battery-full-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8Zm-24-80v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m192 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhBatteryFullDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryHighDuotoneIcon],svg[ph-battery-high-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8Zm-64-80v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m192 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhBatteryHighDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryLowDuotoneIcon],svg[ph-battery-low-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8ZM64 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m192 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhBatteryLowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryMediumDuotoneIcon],svg[ph-battery-medium-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8ZM104 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m192 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhBatteryMediumDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusDuotoneIcon],svg[ph-battery-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M152 128a8 8 0 0 1-8 8h-20v20a8 8 0 0 1-16 0v-20H88a8 8 0 0 1 0-16h20v-20a8 8 0 0 1 16 0v20h20a8 8 0 0 1 8 8m72-48v96a24 24 0 0 1-24 24H32a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h168a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h168a8 8 0 0 0 8-8Zm40 8a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhBatteryPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusVerticalDuotoneIcon],svg[ph-battery-plus-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v168a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-28 76h-20v-20a8 8 0 0 0-16 0v20h-20a8 8 0 0 0 0 16h20v20a8 8 0 0 0 16 0v-20h20a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhBatteryPlusVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalEmptyDuotoneIcon],svg[ph-battery-vertical-empty-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v168a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Z"></svg:path></svg:g>`,
})
export class PhBatteryVerticalEmptyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalFullDuotoneIcon],svg[ph-battery-vertical-full-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v168a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-24 16H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhBatteryVerticalFullDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalHighDuotoneIcon],svg[ph-battery-vertical-high-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v168a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-24 56H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhBatteryVerticalHighDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalLowDuotoneIcon],svg[ph-battery-vertical-low-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v168a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-24 136H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhBatteryVerticalLowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalMediumDuotoneIcon],svg[ph-battery-vertical-medium-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v168a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-24 96H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhBatteryVerticalMediumDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningDuotoneIcon],svg[ph-battery-warning-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8Zm48-80v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-148 28V96a8 8 0 0 1 16 0v28a8 8 0 0 1-16 0m20 32a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhBatteryWarningDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningVerticalDuotoneIcon],svg[ph-battery-warning-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v168a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-56 88a8 8 0 0 0 8-8V96a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8m0 16a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhBatteryWarningVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeachBallDuotoneIcon],svg[ph-beach-ball-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M161.23 93.36a191.1 191.1 0 0 0-82-48.09a96.4 96.4 0 0 1 68.68-11.2a191.9 191.9 0 0 1 13.32 59.29m60.7 14.7a192.2 192.2 0 0 0-59.29-13.29a191 191 0 0 1 48.09 82a96.37 96.37 0 0 0 11.2-68.67ZM32.27 135.19a96 96 0 0 0 88.54 88.54a191.56 191.56 0 0 0 40.5-129a191.6 191.6 0 0 0-129.04 40.46" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m81.7 71.3a199.8 199.8 0 0 0-40.94-8.06a199.8 199.8 0 0 0-8.06-40.94a88.57 88.57 0 0 1 49 49M216 128a87.8 87.8 0 0 1-4.28 27.12a200.3 200.3 0 0 0-29.16-49.93a183 183 0 0 1 32.31 8.75A88 88 0 0 1 216 128m-73.94-86.87a183 183 0 0 1 8.75 32.31a200.3 200.3 0 0 0-49.93-29.16a88.05 88.05 0 0 1 41.18-3.15M80.44 54a183.9 183.9 0 0 1 61.25 32.64A200.2 200.2 0 0 0 40.41 119.5A88.11 88.11 0 0 1 80.44 54m-39.77 84.86a184.08 184.08 0 0 1 112.88-36.41a184.08 184.08 0 0 1-36.41 112.88a88.18 88.18 0 0 1-76.47-76.47m95.83 76.73a200.2 200.2 0 0 0 32.87-101.28A183.9 183.9 0 0 1 202 175.56a88.11 88.11 0 0 1-65.5 40.03"></svg:path></svg:g>`,
})
export class PhBeachBallDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeanieDuotoneIcon],svg[ph-beanie-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 144v24H40v-24a88 88 0 0 1 176 0" opacity=".2"></svg:path><svg:path d="M224 162.16V144a96.18 96.18 0 0 0-72.34-93a28 28 0 1 0-47.32 0A96.18 96.18 0 0 0 32 144v18.16A16 16 0 0 0 24 176v32a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16v-32a16 16 0 0 0-8-13.84M116 36a12 12 0 1 1 12 12a12 12 0 0 1-12-12m12 28a80.09 80.09 0 0 1 80 80v16H48v-16a80.09 80.09 0 0 1 80-80m-8 112v32H80v-32Zm16 0h40v32h-40Zm-96 0h24v32H40Zm176 32h-24v-32h24z"></svg:path></svg:g>`,
})
export class PhBeanieDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBedDuotoneIcon],svg[ph-bed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M248 112v56H112V80h104a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M216 72H32V48a8 8 0 0 0-16 0v160a8 8 0 0 0 16 0v-32h208v32a8 8 0 0 0 16 0v-96a40 40 0 0 0-40-40M32 88h72v72H32Zm88 72V88h96a24 24 0 0 1 24 24v48Z"></svg:path></svg:g>`,
})
export class PhBedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerBottleDuotoneIcon],svg[ph-beer-bottle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m160 160l-56 56l-64-64l56-56Z" opacity=".2"></svg:path><svg:path d="m245.66 42.34l-32-32a8 8 0 0 0-11.32 11.32l1.48 1.47l-55.17 41.38l-38.22 7.65a8.05 8.05 0 0 0-4.09 2.18L23 157.66a24 24 0 0 0 0 33.94L64.4 233a24 24 0 0 0 33.94 0l83.32-83.31a8 8 0 0 0 2.18-4.09l7.65-38.22l41.38-55.17l1.47 1.48a8 8 0 0 0 11.32-11.32ZM104 204.69L51.31 152L96 107.31L148.69 160ZM81.37 224a7.94 7.94 0 0 1-5.65-2.34l-41.38-41.38a8 8 0 0 1 0-11.31l5.66-5.66L92.69 216L87 221.66a8 8 0 0 1-5.63 2.34M177.6 99.2a7.9 7.9 0 0 0-1.44 3.23l-7.53 37.63l-8.63 8.63L107.31 96l8.63-8.63l37.63-7.53a7.9 7.9 0 0 0 3.23-1.44l58.45-43.84l6.19 6.19Z"></svg:path></svg:g>`,
})
export class PhBeerBottleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerSteinDuotoneIcon],svg[ph-beer-stein-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 72v136a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V72Z" opacity=".2"></svg:path><svg:path d="M104 104v80a8 8 0 0 1-16 0v-80a8 8 0 0 1 16 0m40-8a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0v-80a8 8 0 0 0-8-8m96 16v64a24 24 0 0 1-24 24h-16v8a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V72c0-30.88 28.71-56 64-56c16.77 0 32.91 5.8 44.82 16H160a40 40 0 0 1 40 40v16h16a24 24 0 0 1 24 24M57 64h125.62A24 24 0 0 0 160 48h-14.26a8 8 0 0 1-5.53-2.22C131.06 37 117.87 32 104 32c-23.18 0-42.57 13.76-47 32m127 144V80H56v128zm40-96a8 8 0 0 0-8-8h-16v80h16a8 8 0 0 0 8-8Z"></svg:path></svg:g>`,
})
export class PhBeerSteinDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBehanceLogoDuotoneIcon],svg[ph-behance-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 152h-80a40 40 0 0 1 80 0M94 124h-4a30 30 0 0 0 0-60H32v128h62a34 34 0 0 0 0-68" opacity=".2"></svg:path><svg:path d="M160 80a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16h-64a8 8 0 0 1-8-8m-24 78a42 42 0 0 1-42 42H32a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h58a38 38 0 0 1 25.65 66A42 42 0 0 1 136 158m-96-42h50a22 22 0 0 0 0-44H40Zm80 42a26 26 0 0 0-26-26H40v52h54a26 26 0 0 0 26-26m128-6a8 8 0 0 1-8 8h-71a32 32 0 0 0 56.59 11.2a8 8 0 0 1 12.8 9.61A48 48 0 1 1 248 152m-17-8a32 32 0 0 0-62 0Z"></svg:path></svg:g>`,
})
export class PhBehanceLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellDuotoneIcon],svg[ph-bell-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12" opacity=".2"></svg:path><svg:path d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z"></svg:path></svg:g>`,
})
export class PhBellDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellRingingDuotoneIcon],svg[ph-bell-ringing-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 147.81 56 112a72 72 0 0 1 144 0c0 35.82 8.3 56.6 14.9 68a8 8 0 0 1-6.9 12" opacity=".2"></svg:path><svg:path d="M224 71.1a8 8 0 0 1-10.78-3.42a94.13 94.13 0 0 0-33.46-36.91a8 8 0 1 1 8.54-13.54a111.46 111.46 0 0 1 39.12 43.09A8 8 0 0 1 224 71.1M35.71 72a8 8 0 0 0 7.1-4.32a94.13 94.13 0 0 1 33.46-36.91a8 8 0 1 0-8.54-13.54a111.46 111.46 0 0 0-39.12 43.09A8 8 0 0 0 35.71 72m186.1 103.94A16 16 0 0 1 208 200h-40.8a40 40 0 0 1-78.4 0H48a16 16 0 0 1-13.79-24.06C43.22 160.39 48 138.28 48 112a80 80 0 0 1 160 0c0 26.27 4.78 48.38 13.81 63.94M150.62 200h-45.24a24 24 0 0 0 45.24 0M208 184c-10.64-18.27-16-42.49-16-72a64 64 0 0 0-128 0c0 29.52-5.38 53.74-16 72Z"></svg:path></svg:g>`,
})
export class PhBellRingingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleDuotoneIcon],svg[ph-bell-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12" opacity=".2"></svg:path><svg:path d="M168 224a8 8 0 0 1-8 8H96a8 8 0 1 1 0-16h64a8 8 0 0 1 8 8m53.85-32a15.8 15.8 0 0 1-13.85 8H48a16 16 0 0 1-13.8-24.06C39.75 166.38 48 139.34 48 104a80 80 0 1 1 160 0c0 35.33 8.26 62.38 13.81 71.94a15.89 15.89 0 0 1 .03 16.06ZM208 184c-7.73-13.27-16-43.95-16-80a64 64 0 1 0-128 0c0 36.06-8.28 66.74-16 80Z"></svg:path></svg:g>`,
})
export class PhBellSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleRingingDuotoneIcon],svg[ph-bell-simple-ringing-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 147.81 56 112a72 72 0 0 1 144 0c0 35.82 8.3 56.6 14.9 68a8 8 0 0 1-6.9 12" opacity=".2"></svg:path><svg:path d="M168 224a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m59.39-163.68a111.36 111.36 0 0 0-39.12-43.08a8 8 0 1 0-8.54 13.53a94.13 94.13 0 0 1 33.46 36.91a8 8 0 0 0 14.2-7.36M35.71 72a8 8 0 0 0 7.1-4.32a94.13 94.13 0 0 1 33.46-36.91a8 8 0 1 0-8.54-13.53a111.36 111.36 0 0 0-39.12 43.08A8 8 0 0 0 35.71 72m186.1 103.94A16 16 0 0 1 208 200H48a16 16 0 0 1-13.79-24.06C43.22 160.39 48 138.28 48 112a80 80 0 0 1 160 0c0 26.27 4.78 48.38 13.81 63.94M208 184c-10.64-18.27-16-42.49-16-72a64 64 0 0 0-128 0c0 29.52-5.38 53.74-16 72Z"></svg:path></svg:g>`,
})
export class PhBellSimpleRingingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleSlashDuotoneIcon],svg[ph-bell-simple-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76L58.82 63.8A79.6 79.6 0 0 0 48 104c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h134.64l19.44 21.38a8 8 0 1 0 11.84-10.76ZM48 184c7.7-13.24 16-43.92 16-80a63.65 63.65 0 0 1 6.26-27.62L168.09 184Zm120 40a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m46-44.75a8.1 8.1 0 0 1-2.93.55a8 8 0 0 1-7.44-5.08C196.35 156.19 192 129.75 192 104a64 64 0 0 0-95.57-55.69a8 8 0 0 1-7.9-13.91A80 80 0 0 1 208 104c0 35.35 8.05 58.59 10.52 64.88a8 8 0 0 1-4.52 10.37"></svg:path></svg:g>`,
})
export class PhBellSimpleSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleZDuotoneIcon],svg[ph-bell-simple-z-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12" opacity=".2"></svg:path><svg:path d="M168 224a8 8 0 0 1-8 8H96a8 8 0 1 1 0-16h64a8 8 0 0 1 8 8m-24-88h-17l23.7-35.56A8 8 0 0 0 144 88h-32a8 8 0 0 0 0 16h17.05l-23.7 35.56A8 8 0 0 0 112 152h32a8 8 0 0 0 0-16m77.84 56a15.8 15.8 0 0 1-13.84 8H48a16 16 0 0 1-13.8-24.06C39.75 166.38 48 139.34 48 104a80 80 0 1 1 160 0c0 35.33 8.26 62.38 13.81 71.94a15.89 15.89 0 0 1 .03 16.06M208 184c-7.73-13.27-16-43.95-16-80a64 64 0 1 0-128 0c0 36.06-8.28 66.74-16 80Z"></svg:path></svg:g>`,
})
export class PhBellSimpleZDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSlashDuotoneIcon],svg[ph-bell-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76L58.82 63.8A79.6 79.6 0 0 0 48 104c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.8a40 40 0 0 0 78.4 0h15.44l19.44 21.38a8 8 0 1 0 11.84-10.76ZM128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m-80-32c7.7-13.24 16-43.92 16-80a63.65 63.65 0 0 1 6.26-27.62L168.09 184Zm166-4.73a8.1 8.1 0 0 1-2.93.55a8 8 0 0 1-7.44-5.08C196.35 156.19 192 129.75 192 104a64 64 0 0 0-95.57-55.69a8 8 0 0 1-7.9-13.91A80 80 0 0 1 208 104c0 35.35 8.05 58.59 10.52 64.88a8 8 0 0 1-4.52 10.37Z"></svg:path></svg:g>`,
})
export class PhBellSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellZDuotoneIcon],svg[ph-bell-z-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12" opacity=".2"></svg:path><svg:path d="M152 144a8 8 0 0 1-8 8h-32a8 8 0 0 1-6.65-12.44l23.7-35.56H112a8 8 0 0 1 0-16h32a8 8 0 0 1 6.65 12.44L127 136h17a8 8 0 0 1 8 8m69.84 48a15.8 15.8 0 0 1-13.84 8h-40.81a40 40 0 0 1-78.38 0H48a16 16 0 0 1-13.8-24.06C39.75 166.38 48 139.34 48 104a80 80 0 1 1 160 0c0 35.33 8.26 62.38 13.81 71.94a15.89 15.89 0 0 1 .03 16.06m-71.22 8h-45.24a24 24 0 0 0 45.24 0M208 184c-7.73-13.27-16-43.95-16-80a64 64 0 1 0-128 0c0 36.06-8.28 66.74-16 80Z"></svg:path></svg:g>`,
})
export class PhBellZDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeltDuotoneIcon],svg[ph-belt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 88h96v80H8Zm176 0v80h64V88Z" opacity=".2"></svg:path><svg:path d="M248 160h-56V96h56a8 8 0 0 0 0-16h-58.16A16 16 0 0 0 176 72h-64a16 16 0 0 0-13.84 8H64a8 8 0 0 0-16 0H8a8 8 0 0 0 0 16h40v64H8a8 8 0 0 0 0 16h40a8 8 0 0 0 16 0h34.16a16 16 0 0 0 13.84 8h64a16 16 0 0 0 13.84-8H248a8 8 0 0 0 0-16M64 96h32v64H64Zm48 72V88h64v32h-32a8 8 0 0 0 0 16h32v32Z"></svg:path></svg:g>`,
})
export class PhBeltDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBezierCurveDuotoneIcon],svg[ph-bezier-curve-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 80a24 24 0 1 1-24-24a24 24 0 0 1 24 24M40 152a24 24 0 1 0 24 24a24 24 0 0 0-24-24m176 0a24 24 0 1 0 24 24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M221.07 144.41A96.68 96.68 0 0 0 181 88h59a8 8 0 0 0 0-16h-81a32 32 0 0 0-62 0H16a8 8 0 0 0 0 16h59a96.68 96.68 0 0 0-40.07 56.41A32 32 0 1 0 51.08 146A80.6 80.6 0 0 1 99 93.44a32 32 0 0 0 58.06 0A80.6 80.6 0 0 1 204.92 146a32 32 0 1 0 16.15-1.57ZM56 176a16 16 0 1 1-16-16a16 16 0 0 1 16 16m72-80a16 16 0 1 1 16-16a16 16 0 0 1-16 16m88 96a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhBezierCurveDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBicycleDuotoneIcon],svg[ph-bicycle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M248 160a40 40 0 1 1-40-40a40 40 0 0 1 40 40M48 120a40 40 0 1 0 40 40a40 40 0 0 0-40-40" opacity=".2"></svg:path><svg:path d="M208 112a47.8 47.8 0 0 0-16.93 3.09L165.93 72H192a8 8 0 0 1 8 8a8 8 0 0 0 16 0a24 24 0 0 0-24-24h-40a8 8 0 0 0-6.91 12l11.65 20H99.26L82.91 60A8 8 0 0 0 76 56H48a8 8 0 0 0 0 16h23.41l13.71 23.51l-15.71 21.55a48.13 48.13 0 1 0 12.92 9.44l11.59-15.9l31.17 53.4a8 8 0 1 0 13.82-8l-30.32-52h57.48l11.19 19.17A48 48 0 1 0 208 112M80 160a32 32 0 1 1-20.21-29.74l-18.25 25a8 8 0 1 0 12.92 9.42l18.25-25A31.88 31.88 0 0 1 80 160m128 32a32 32 0 0 1-22.51-54.72l15.6 26.72a8 8 0 1 0 13.82-8l-15.61-26.79A32 32 0 1 1 208 192"></svg:path></svg:g>`,
})
export class PhBicycleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinaryDuotoneIcon],svg[ph-binary-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M94 24c-22.37 0-38 19.74-38 48s15.63 48 38 48s38-19.74 38-48s-15.63-48-38-48m0 80c-17.37 0-22-20.11-22-32s4.63-32 22-32s22 20.11 22 32s-4.63 32-22 32m72 32c-22.37 0-38 19.74-38 48s15.63 48 38 48s38-19.74 38-48s-15.63-48-38-48m0 80c-17.37 0-22-20.11-22-32s4.63-32 22-32s22 20.11 22 32s-4.63 32-22 32M145 49.22a8 8 0 0 1 3.11-10.88l24-13.33A8 8 0 0 1 184 32v80a8 8 0 0 1-16 0V45.6l-12.12 6.73A8 8 0 0 1 145 49.22M104 144v80a8 8 0 0 1-16 0v-66.4l-12.12 6.73a8 8 0 0 1-7.76-14l24-13.33a8 8 0 0 1 11.88 7"></svg:path></svg:g>`,
})
export class PhBinaryDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinocularsDuotoneIcon],svg[ph-binoculars-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 168a40 40 0 1 1-40-40a40 40 0 0 1 40 40m88-40a40 40 0 1 0 40 40a40 40 0 0 0-40-40" opacity=".2"></svg:path><svg:path d="M237.2 151.87a47 47 0 0 0-2.35-5.45L193.26 51.8a7.8 7.8 0 0 0-1.66-2.44a32 32 0 0 0-45.26 0A8 8 0 0 0 144 55v25h-32V55a8 8 0 0 0-2.34-5.66a32 32 0 0 0-45.26 0a7.8 7.8 0 0 0-1.66 2.44L21.15 146.4a47 47 0 0 0-2.35 5.45A48 48 0 1 0 112 168V96h32v72a48 48 0 1 0 93.2-16.13M76.71 59.75a16 16 0 0 1 19.29-1v73.51a47.9 47.9 0 0 0-46.79-9.92ZM64 200a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96-141.26a16 16 0 0 1 19.29 1l27.5 62.58a47.9 47.9 0 0 0-46.79 9.93ZM192 200a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path></svg:g>`,
})
export class PhBinocularsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBiohazardDuotoneIcon],svg[ph-biohazard-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 132a56 56 0 1 1-56-56a56 56 0 0 1 56 56" opacity=".2"></svg:path><svg:path d="M185.68 104.28q-1.4-2.88-3.06-5.6a60 60 0 0 0-26.92-78a8 8 0 0 0-7.4 14.19a44 44 0 0 1 22.42 49.53a63.85 63.85 0 0 0-85.46 0a44 44 0 0 1 22.44-49.53a8 8 0 1 0-7.4-14.19a60 60 0 0 0-26.93 78a63 63 0 0 0-3.05 5.58A60.07 60.07 0 0 0 16 164a8 8 0 0 0 16 0a44.09 44.09 0 0 1 32.89-42.58A63.94 63.94 0 0 0 109 193.11a44 44 0 0 1-56.65 8a8 8 0 1 0-8.62 13.47A60 60 0 0 0 126.74 196h2.52a60 60 0 0 0 83.05 18.59a8 8 0 1 0-8.62-13.47a44 44 0 0 1-56.65-8a63.94 63.94 0 0 0 44.07-71.69A44.09 44.09 0 0 1 224 164a8 8 0 0 0 16 0a60.07 60.07 0 0 0-54.32-59.72M128 84a47.9 47.9 0 0 1 35.56 15.79a44 44 0 0 1-71.13 0A47.9 47.9 0 0 1 128 84m.12 49.92l-.12.2l-.12-.2zM80 132a47.6 47.6 0 0 1 1.44-11.65a44 44 0 0 1 36 58.46A48.07 48.07 0 0 1 80 132m58.57 46.81a44 44 0 0 1 36-58.46a48 48 0 0 1-36 58.46"></svg:path></svg:g>`,
})
export class PhBiohazardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBirdDuotoneIcon],svg[ph-bird-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m232 80l-24 16v24a96 96 0 0 1-96 96H24a8 8 0 0 1-6.25-13L104 99.52V76.89c0-28.77 23-52.75 51.74-52.89a52 52 0 0 1 50.59 38.89Z" opacity=".2"></svg:path><svg:path d="M176 68a12 12 0 1 1-12-12a12 12 0 0 1 12 12m64 12a8 8 0 0 1-3.56 6.66L216 100.28V120a104.11 104.11 0 0 1-104 104H24a16 16 0 0 1-12.49-26l.1-.12L96 96.63V76.89c0-33.42 26.79-60.73 59.71-60.89h.29a60 60 0 0 1 57.21 41.86l23.23 15.48A8 8 0 0 1 240 80m-22.42 0L201.9 69.54a8 8 0 0 1-3.31-4.64A44 44 0 0 0 156 32h-.22C131.64 32.12 112 52.25 112 76.89v22.63a8 8 0 0 1-1.85 5.13L24 208h26.9l70.94-85.12a8 8 0 1 1 12.29 10.24L71.75 208H112a88.1 88.1 0 0 0 88-88V96a8 8 0 0 1 3.56-6.66Z"></svg:path></svg:g>`,
})
export class PhBirdDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBlueprintDuotoneIcon],svg[ph-blueprint-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 64v136H48a24 24 0 0 1 0-48h16V64Z" opacity=".2"></svg:path><svg:path d="M232 56H72V40a8 8 0 0 0-8-8H48a32 32 0 0 0-32 32v112a32 32 0 0 0 32 32h184a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8M32 64a16 16 0 0 1 16-16h8v96h-8a31.8 31.8 0 0 0-16 4.29Zm192 128H48a16 16 0 0 1 0-32h16a8 8 0 0 0 8-8V72h152Zm-120-56a8 8 0 0 0 0 16h16v8a8 8 0 0 0 16 0v-8h24v8a8 8 0 0 0 16 0v-8h16a8 8 0 0 0 0-16h-16v-16h16a8 8 0 0 0 0-16h-16v-8a8 8 0 0 0-16 0v8h-24v-8a8 8 0 0 0-16 0v8h-16a8 8 0 0 0 0 16h16v16Zm32-16h24v16h-24Z"></svg:path></svg:g>`,
})
export class PhBlueprintDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothConnectedDuotoneIcon],svg[ph-bluetooth-connected-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m192 80l-64 48V32Zm-64 144l64-48l-64-48Z" opacity=".2"></svg:path><svg:path d="M196.8 169.6L141.33 128l55.47-41.6a8 8 0 0 0 0-12.8l-64-48A8 8 0 0 0 120 32v80L68.8 73.6a8 8 0 0 0-9.6 12.8l55.47 41.6l-55.47 41.6a8 8 0 1 0 9.6 12.8L120 144v80a8 8 0 0 0 12.8 6.4l64-48a8 8 0 0 0 0-12.8M136 48l42.67 32L136 112Zm0 160v-64l42.67 32Zm-76-68a12 12 0 1 1 12-12a12 12 0 0 1-12 12m156-12a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhBluetoothConnectedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothDuotoneIcon],svg[ph-bluetooth-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m192 80l-64 48V32Zm-64 144l64-48l-64-48Z" opacity=".2"></svg:path><svg:path d="M196.8 169.6L141.33 128l55.47-41.6a8 8 0 0 0 0-12.8l-64-48A8 8 0 0 0 120 32v80L68.8 73.6a8 8 0 0 0-9.6 12.8l55.47 41.6l-55.47 41.6a8 8 0 1 0 9.6 12.8L120 144v80a8 8 0 0 0 12.8 6.4l64-48a8 8 0 0 0 0-12.8M136 48l42.67 32L136 112Zm0 160v-64l42.67 32Z"></svg:path></svg:g>`,
})
export class PhBluetoothDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothSlashDuotoneIcon],svg[ph-bluetooth-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m128 128l64 48l-64 48Zm0-96v96l64-48Z" opacity=".2"></svg:path><svg:path d="m221.92 210.62l-160-176a8 8 0 0 0-11.84 10.76l70.84 77.93L59.2 169.6a8 8 0 1 0 9.6 12.8L120 144v80a8 8 0 0 0 12.8 6.4l50.83-38.12l26.45 29.1a8 8 0 1 0 11.84-10.76M136 208v-64l11.73 8.8l25.08 27.59ZM120 71.63V32a8 8 0 0 1 12.8-6.4l64 48a8 8 0 0 1 0 12.8l-33.53 25.15a8 8 0 0 1-9.6-12.8l25-18.75L136 48v23.63a8 8 0 0 1-16 0"></svg:path></svg:g>`,
})
export class PhBluetoothSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothXDuotoneIcon],svg[ph-bluetooth-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m176 176l-64 48v-96Zm-8.53-102.4L112 32v96l55.47-41.6a8 8 0 0 0 0-12.8" opacity=".2"></svg:path><svg:path d="M180.8 169.6L125.33 128l23.47-17.6a8 8 0 0 0-9.6-12.8L120 112V48l19.2 14.4a8 8 0 1 0 9.6-12.8l-32-24A8 8 0 0 0 104 32v80L52.8 73.6a8 8 0 0 0-9.6 12.8L98.67 128L43.2 169.6a8 8 0 1 0 9.6 12.8L104 144v80a8 8 0 0 0 12.8 6.4l64-48a8 8 0 0 0 0-12.8M120 208v-64l42.67 32ZM237.66 98.34a8 8 0 0 1-11.32 11.32L208 91.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L196.69 80l-18.35-18.34a8 8 0 0 1 11.32-11.32L208 68.69l18.34-18.35a8 8 0 0 1 11.32 11.32L219.31 80Z"></svg:path></svg:g>`,
})
export class PhBluetoothXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoatDuotoneIcon],svg[ph-boat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 125.77V152c0 56-96 80-96 80s-96-24-96-80v-26.23a8 8 0 0 1 5.47-7.59L128 88l90.53 30.18a8 8 0 0 1 5.47 7.59" opacity=".2"></svg:path><svg:path d="M221.06 110.59L208 106.23V56a16 16 0 0 0-16-16h-56V24a8 8 0 0 0-16 0v16H64a16 16 0 0 0-16 16v50.23l-13.06 4.36A16 16 0 0 0 24 125.77V152c0 61.54 97.89 86.72 102.06 87.76a8 8 0 0 0 3.88 0C134.11 238.72 232 213.54 232 152v-26.23a16 16 0 0 0-10.94-15.18M64 56h128v44.9l-61.47-20.49a8 8 0 0 0-5.06 0L64 100.9Zm152 96c0 24.91-23.68 43-43.55 53.83A228 228 0 0 1 128 223.72A227 227 0 0 1 83.81 206C47.6 186.35 40 165.79 40 152v-26.23l80-26.67V168a8 8 0 0 0 16 0V99.1l80 26.67Z"></svg:path></svg:g>`,
})
export class PhBoatDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBombDuotoneIcon],svg[ph-bomb-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 160A80 80 0 1 1 80 86.66V72a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v14.66A80 80 0 0 1 192 160" opacity=".2"></svg:path><svg:path d="M248 32a8 8 0 0 0-8 8a52.7 52.7 0 0 1-3.57 17.39C232.38 67.22 225.7 72 216 72c-11.06 0-18.85-9.76-29.49-24.65C176 32.66 164.12 16 144 16c-16.39 0-29 8.89-35.43 25a66 66 0 0 0-3.9 15H88a16 16 0 0 0-16 16v9.59A88 88 0 0 0 112 248h1.59A88 88 0 0 0 152 81.59V72a16 16 0 0 0-16-16h-15.12a46.8 46.8 0 0 1 2.69-9.37C127.62 36.78 134.3 32 144 32c11.06 0 18.85 9.76 29.49 24.65C184 71.34 195.88 88 216 88c16.39 0 29-8.89 35.43-25A68.7 68.7 0 0 0 256 40a8 8 0 0 0-8-8M140.8 94a72 72 0 1 1-57.6 0a8 8 0 0 0 4.8-7.34V72h48v14.66a8 8 0 0 0 4.8 7.34m-28.91 115.32A8 8 0 0 1 104 216a8.5 8.5 0 0 1-1.33-.11a57.5 57.5 0 0 1-46.57-46.57a8 8 0 1 1 15.78-2.64a41.29 41.29 0 0 0 33.43 33.43a8 8 0 0 1 6.58 9.21"></svg:path></svg:g>`,
})
export class PhBombDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoneDuotoneIcon],svg[ph-bone-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M225.09 102.44a28 28 0 0 1-35.92 5.3a8 8 0 0 0-10 1.07l-70.38 70.38a8 8 0 0 0-1.07 10A28 28 0 1 1 56.3 199.7a28 28 0 1 1 10.51-51.42a8 8 0 0 0 10-1.07l70.38-70.38a8 8 0 0 0 1.07-10a28 28 0 1 1 51.42-10.51a28 28 0 0 1 25.41 46.12" opacity=".2"></svg:path><svg:path d="M231.67 60.89a35.82 35.82 0 0 0-23.82-12.74a36 36 0 1 0-66.37 22.92a.3.3 0 0 1 0 .08l-70.31 70.36h-.1a36 36 0 1 0-22.92 66.37a36 36 0 1 0 66.37-22.92v-.08l70.35-70.36h.1a36 36 0 0 0 46.74-53.63ZM219.1 97.16a20 20 0 0 1-25.67 3.8a16 16 0 0 0-19.88 2.19l-70.4 70.4a16 16 0 0 0-2.15 19.88a20 20 0 1 1-36.75 7.5a8 8 0 0 0-7.91-9.24a8.5 8.5 0 0 0-1.23.1A20 20 0 1 1 62.57 155a16 16 0 0 0 19.88-2.19l70.4-70.4A16 16 0 0 0 155 62.57a20 20 0 1 1 36.75-7.5a8 8 0 0 0 9.14 9.14a20 20 0 0 1 18.17 33Z"></svg:path></svg:g>`,
})
export class PhBoneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookBookmarkDuotoneIcon],svg[ph-book-bookmark-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 32v160H72a24 24 0 0 0-24 24V56a24 24 0 0 1 24-24h40v96l32-24l32 24V32Z" opacity=".2"></svg:path><svg:path d="M208 24H72a32 32 0 0 0-32 32v168a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16H56a16 16 0 0 1 16-16h136a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8m-88 16h48v72l-19.21-14.4a8 8 0 0 0-9.6 0L120 112Zm80 144H72a31.8 31.8 0 0 0-16 4.29V56a16 16 0 0 1 16-16h32v88a8 8 0 0 0 12.8 6.4L144 114l27.21 20.4A8 8 0 0 0 176 136a8.1 8.1 0 0 0 3.58-.84A8 8 0 0 0 184 128V40h16Z"></svg:path></svg:g>`,
})
export class PhBookBookmarkDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookDuotoneIcon],svg[ph-book-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 32v160H72a24 24 0 0 0-24 24V56a24 24 0 0 1 24-24Z" opacity=".2"></svg:path><svg:path d="M208 24H72a32 32 0 0 0-32 32v168a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16H56a16 16 0 0 1 16-16h136a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8m-8 160H72a31.8 31.8 0 0 0-16 4.29V56a16 16 0 0 1 16-16h128Z"></svg:path></svg:g>`,
})
export class PhBookDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenDuotoneIcon],svg[ph-book-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 56v144h-72a32 32 0 0 0-32 32a32 32 0 0 0-32-32H24V56h72a32 32 0 0 1 32 32a32 32 0 0 1 32-32Z" opacity=".2"></svg:path><svg:path d="M232 48h-72a40 40 0 0 0-32 16a40 40 0 0 0-32-16H24a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h72a24 24 0 0 1 24 24a8 8 0 0 0 16 0a24 24 0 0 1 24-24h72a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8M96 192H32V64h64a24 24 0 0 1 24 24v112a39.8 39.8 0 0 0-24-8m128 0h-64a39.8 39.8 0 0 0-24 8V88a24 24 0 0 1 24-24h64Z"></svg:path></svg:g>`,
})
export class PhBookOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenTextDuotoneIcon],svg[ph-book-open-text-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 56v144h-72a32 32 0 0 0-32 32V88a32 32 0 0 1 32-32Z" opacity=".2"></svg:path><svg:path d="M232 48h-72a40 40 0 0 0-32 16a40 40 0 0 0-32-16H24a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h72a24 24 0 0 1 24 24a8 8 0 0 0 16 0a24 24 0 0 1 24-24h72a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8M96 192H32V64h64a24 24 0 0 1 24 24v112a39.8 39.8 0 0 0-24-8m128 0h-64a39.8 39.8 0 0 0-24 8V88a24 24 0 0 1 24-24h64ZM160 88h40a8 8 0 0 1 0 16h-40a8 8 0 0 1 0-16m48 40a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhBookOpenTextDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenUserDuotoneIcon],svg[ph-book-open-user-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 80v120h-72a32 32 0 0 0-32 32a32 32 0 0 0-32-32H24V80h72a32 32 0 0 1 32 32a32 32 0 0 1 32-32Z" opacity=".2"></svg:path><svg:path d="M232 72h-72a40 40 0 0 0-32 16a40 40 0 0 0-32-16H24a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h72a24 24 0 0 1 24 24a8 8 0 0 0 16 0a24 24 0 0 1 24-24h72a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8M96 192H32V88h64a24 24 0 0 1 24 24v88a39.8 39.8 0 0 0-24-8m128 0h-64a39.8 39.8 0 0 0-24 8v-88a24 24 0 0 1 24-24h64ZM89.6 43.19a48 48 0 0 1 76.8 0a8 8 0 0 1-12.79 9.62a32 32 0 0 0-51.22 0a8 8 0 1 1-12.79-9.62"></svg:path></svg:g>`,
})
export class PhBookOpenUserDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkDuotoneIcon],svg[ph-bookmark-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 176v48l-64-40l-64 40v-48l64-40Z" opacity=".2"></svg:path><svg:path d="M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16m0 16v113.57l-51.77-32.35a8 8 0 0 0-8.48 0L72 161.56V48Zm-51.77 129.22a8 8 0 0 0-8.48 0L72 209.57v-29.14l56-35l56 35v29.14Z"></svg:path></svg:g>`,
})
export class PhBookmarkDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkSimpleDuotoneIcon],svg[ph-bookmark-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 48v176l-64-40l-64 40V48a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16m0 177.57l-51.77-32.35a8 8 0 0 0-8.48 0L72 209.57V48h112Z"></svg:path></svg:g>`,
})
export class PhBookmarkSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksDuotoneIcon],svg[ph-bookmarks-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v152l-32-22.85V72a8 8 0 0 0-8-8H88V40a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M192 24H96a16 16 0 0 0-16 16v16H64a16 16 0 0 0-16 16v152a8 8 0 0 0 12.65 6.51L112 193.83l51.36 36.68A8 8 0 0 0 176 224v-39.31l19.35 13.82A8 8 0 0 0 208 192V40a16 16 0 0 0-16-16m-32 184.46l-43.36-31a8 8 0 0 0-9.3 0L64 208.45V72h96Zm32-32L176 165V72a16 16 0 0 0-16-16H96V40h96Z"></svg:path></svg:g>`,
})
export class PhBookmarksDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksSimpleDuotoneIcon],svg[ph-bookmarks-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 72v152l-56-40l-56 40V72a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M160 56H64a16 16 0 0 0-16 16v152a8 8 0 0 0 12.65 6.51L112 193.83l51.36 36.68A8 8 0 0 0 176 224V72a16 16 0 0 0-16-16m0 152.46l-43.36-31a8 8 0 0 0-9.3 0L64 208.45V72h96ZM208 40v152a8 8 0 0 1-16 0V40H88a8 8 0 0 1 0-16h104a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhBookmarksSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBooksDuotoneIcon],svg[ph-books-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M48 72h64v112H48Zm142.64-33.61a8 8 0 0 0-9.5-6.21l-46.81 10a8.07 8.07 0 0 0-6.15 9.57L139.79 107l62.46-13.42Z" opacity=".2"></svg:path><svg:path d="m231.65 194.55l-33.19-157.8a16 16 0 0 0-19-12.39l-46.81 10.06a16.08 16.08 0 0 0-12.3 19l33.19 157.8A16 16 0 0 0 169.16 224a16.3 16.3 0 0 0 3.38-.36l46.81-10.06a16.09 16.09 0 0 0 12.3-19.03M136 50.15v-.09l46.8-10l3.33 15.87L139.33 66Zm6.62 31.47l46.82-10.05l3.34 15.9L146 97.53Zm6.64 31.57l46.82-10.06l13.3 63.24l-46.82 10.06ZM216 197.94l-46.8 10l-3.33-15.87l46.8-10.07l3.33 15.85zM104 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 48h48v16H56Zm0 32h48v96H56Zm48 128H56v-16h48z"></svg:path></svg:g>`,
})
export class PhBooksDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBootDuotoneIcon],svg[ph-boot-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32 168c9.22-32.06 12-88.65 0-120h112a8 8 0 0 1 8 8v64h40a48 48 0 0 1 48 48Z" opacity=".2"></svg:path><svg:path d="M192 112h-32V56a16 16 0 0 0-16-16H32a8 8 0 0 0-7.47 10.86c11.06 28.84 8.76 83.71-.22 114.93A8.3 8.3 0 0 0 24 168v32a16 16 0 0 0 16 16h26.11a16 16 0 0 0 7.16-1.69L85.89 208h16.22l12.62 6.31a16 16 0 0 0 7.16 1.69h28.22a16 16 0 0 0 7.16-1.69l12.62-6.31h16.22l12.62 6.31a16 16 0 0 0 7.16 1.69H232a16 16 0 0 0 16-16v-32a56.06 56.06 0 0 0-56-56m-48-56v24h-32a8 8 0 0 0 0 16h32v16h-32a8 8 0 0 0 0 16h80a40.07 40.07 0 0 1 39.2 32H42.25c6.74-30.84 8.16-74.17.61-104Zm61.89 144l-12.62-6.31a16 16 0 0 0-7.16-1.69h-16.22a16 16 0 0 0-7.16 1.69L150.11 200h-28.22l-12.62-6.31a16 16 0 0 0-7.16-1.69H85.89a16 16 0 0 0-7.16 1.69L66.11 200H40v-24h192v24Z"></svg:path></svg:g>`,
})
export class PhBootDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoulesDuotoneIcon],svg[ph-boules-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m215.52 88.48l-127 127a96.47 96.47 0 0 1-48-48l127-127a96.47 96.47 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m56.28 36.41L60.4 184.28a88.3 88.3 0 0 1-10.19-15.18L169.1 50.21a87.8 87.8 0 0 1 15.18 10.2m11.31 11.31a87.8 87.8 0 0 1 10.2 15.18L86.9 205.79a87.8 87.8 0 0 1-15.18-10.2ZM128 40a87.8 87.8 0 0 1 25.05 3.64L43.64 153.05A88 88 0 0 1 128 40m0 176a87.8 87.8 0 0 1-25-3.64L212.36 103A88 88 0 0 1 128 216"></svg:path></svg:g>`,
})
export class PhBoulesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoundingBoxDuotoneIcon],svg[ph-bounding-box-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v32a8 8 0 0 1-8 8h-32a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8M80 40H48a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8m128 128h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8m-128 0H48a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M208 96a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H96v-8a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v64h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-8h64v8a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8V96Zm-32-48h32v32h-32ZM48 48h32v15.9a.5.5 0 0 0 0 .2V80H48Zm32 160H48v-32h32v15.9a.5.5 0 0 0 0 .2zm128 0h-32v-32h32Zm-24-48h-8a16 16 0 0 0-16 16v8H96v-8a16 16 0 0 0-16-16h-8V96h8a16 16 0 0 0 16-16v-8h64v8a16 16 0 0 0 16 16h8Z"></svg:path></svg:g>`,
})
export class PhBoundingBoxDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlFoodDuotoneIcon],svg[ph-bowl-food-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 112a96 96 0 0 1-56 87.3v8.7a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8v-8.7A96 96 0 0 1 32 112Z" opacity=".2"></svg:path><svg:path d="M224 104h-8.37a88 88 0 0 0-175.26 0H32a8 8 0 0 0-8 8a104.35 104.35 0 0 0 56 92.28V208a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-3.72A104.35 104.35 0 0 0 232 112a8 8 0 0 0-8-8m-50.52-47.77q2.75 2.25 5.27 4.75a87.92 87.92 0 0 0-49.15 43h-29.5A72.26 72.26 0 0 1 168 56c1.83 0 3.66.09 5.48.23m15.91 18.2A71.45 71.45 0 0 1 199.54 104h-51.42a71.84 71.84 0 0 1 41.27-29.57M128 40a72 72 0 0 1 19 2.57A88.36 88.36 0 0 0 83.33 104H56.46A72.08 72.08 0 0 1 128 40m36.66 152a8 8 0 0 0-4.66 7.3v8.7H96v-8.7a8 8 0 0 0-4.66-7.3a88.29 88.29 0 0 1-51-72h175.29a88.29 88.29 0 0 1-50.97 72"></svg:path></svg:g>`,
})
export class PhBowlFoodDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlSteamDuotoneIcon],svg[ph-bowl-steam-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 120a96 96 0 0 1-56 87.3v8.7a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8v-8.7A96 96 0 0 1 32 120Z" opacity=".2"></svg:path><svg:path d="M81.77 55c5.35-6.66 6.67-11.16 6.12-13.14c-.42-1.49-2.41-2.26-2.43-2.26A8 8 0 0 1 88 24a8.1 8.1 0 0 1 2.38.36c1 .31 9.91 3.33 12.79 12.76c2.46 8.07-.55 17.45-8.94 27.89c-5.35 6.66-6.67 11.16-6.12 13.14c.42 1.49 2.37 2.24 2.39 2.25A8 8 0 0 1 88 96a8.1 8.1 0 0 1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76c-2.46-8.07.55-17.45 8.94-27.88m31.06 27.89c2.88 9.43 11.79 12.45 12.79 12.76A8.1 8.1 0 0 0 128 96a8 8 0 0 0 2.5-15.6s-2-.76-2.39-2.25c-.55-2 .77-6.48 6.12-13.14c8.39-10.44 11.4-19.82 8.94-27.89c-2.88-9.43-11.78-12.45-12.79-12.76A8.1 8.1 0 0 0 128 24a8 8 0 0 0-2.54 15.59s2 .77 2.43 2.26c.55 2-.77 6.48-6.12 13.14c-8.39 10.44-11.4 19.82-8.94 27.89Zm40 0c2.88 9.43 11.79 12.45 12.79 12.76A8.1 8.1 0 0 0 168 96a8 8 0 0 0 2.5-15.6s-2-.76-2.39-2.25c-.55-2 .77-6.48 6.12-13.14c8.39-10.44 11.4-19.82 8.94-27.89c-2.88-9.43-11.78-12.45-12.79-12.76A8.1 8.1 0 0 0 168 24a8 8 0 0 0-2.54 15.59s2 .77 2.43 2.26c.55 2-.77 6.48-6.12 13.14c-8.39 10.44-11.4 19.82-8.94 27.89ZM232 120a104.35 104.35 0 0 1-56 92.28V216a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-3.72A104.35 104.35 0 0 1 24 120a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8m-16.37 8H40.37a88.29 88.29 0 0 0 51 72a8 8 0 0 1 4.63 7.29V216h64v-8.71a8 8 0 0 1 4.66-7.27A88.29 88.29 0 0 0 215.63 128"></svg:path></svg:g>`,
})
export class PhBowlSteamDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlingBallDuotoneIcon],svg[ph-bowling-ball-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m16-100a12 12 0 1 1-12-12a12 12 0 0 1 12 12m20-12a12 12 0 1 1 12-12a12 12 0 0 1-12 12m20 28a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhBowlingBallDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowDownDuotoneIcon],svg[ph-box-arrow-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 72v136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V72Z" opacity=".2"></svg:path><svg:path d="m223.16 68.42l-16-32A8 8 0 0 0 200 32H56a8 8 0 0 0-7.16 4.42l-16 32A8.1 8.1 0 0 0 32 72v136a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V72a8.1 8.1 0 0 0-.84-3.58M60.94 48h134.12l8 16H52.94ZM208 208H48V80h160zm-42.34-61.66a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 164.69V104a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhBoxArrowDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowUpDuotoneIcon],svg[ph-box-arrow-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 72v136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V72Z" opacity=".2"></svg:path><svg:path d="m223.16 68.42l-16-32A8 8 0 0 0 200 32H56a8 8 0 0 0-7.16 4.42l-16 32A8.1 8.1 0 0 0 32 72v136a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V72a8.1 8.1 0 0 0-.84-3.58M60.94 48h134.12l8 16H52.94ZM208 208H48V80h160zm-42.34-77.66a8 8 0 0 1-11.32 11.32L136 123.31V184a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0Z"></svg:path></svg:g>`,
})
export class PhBoxArrowUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxingGloveDuotoneIcon],svg[ph-boxing-glove-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 72v46.88a8 8 0 0 1-.31 2.2L200 176v40a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8v-40l-38.25-37.81a8 8 0 0 1-1.75-5V104a24 24 0 0 1 24-24h16v-8a48 48 0 0 1 48-48h48a48 48 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M168 16h-48a56.06 56.06 0 0 0-56 56h-8a32 32 0 0 0-32 32v29.19a16.14 16.14 0 0 0 3.5 10q.3.36.63.69L64 179.34V216a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-38.88l15.38-53.84a16 16 0 0 0 .62-4.4V72a56.06 56.06 0 0 0-56-56m40 102.88l-15.69 54.92a8 8 0 0 0-.31 2.2v40H80v-40a8 8 0 0 0-2.38-5.69L40 133.12V104a16 16 0 0 1 16-16h8v16a8 8 0 0 0 16 0V72a40 40 0 0 1 40-40h48a40 40 0 0 1 40 40Zm-36.42 48.28L153.89 176l17.69 8.84a8 8 0 0 1-7.16 14.32L136 184.94l-28.42 14.22a8 8 0 1 1-7.16-14.32l17.69-8.84l-17.69-8.84a8 8 0 1 1 7.16-14.32L136 167.06l28.42-14.22a8 8 0 1 1 7.16 14.32"></svg:path></svg:g>`,
})
export class PhBoxingGloveDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsAngleDuotoneIcon],svg[ph-brackets-angle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m232 128l-56 88H80l-56-88l56-88h96Z" opacity=".2"></svg:path><svg:path d="M86.75 44.3L33.48 128l53.27 83.7a8 8 0 0 1-2.46 11.05A7.9 7.9 0 0 1 80 224a8 8 0 0 1-6.76-3.71l-56-88a8 8 0 0 1 0-8.59l56-88a8 8 0 1 1 13.5 8.59Zm152 79.41l-56-88a8 8 0 1 0-13.5 8.59l53.27 83.7l-53.27 83.7a8 8 0 0 0 2.46 11.05A7.9 7.9 0 0 0 176 224a8 8 0 0 0 6.76-3.71l56-88a8 8 0 0 0-.01-8.58"></svg:path></svg:g>`,
})
export class PhBracketsAngleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsCurlyDuotoneIcon],svg[ph-brackets-curly-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 128c-64 0 0 88-64 88H80c-64 0 0-88-64-88c64 0 0-88 64-88h96c64 0 0 88 64 88" opacity=".2"></svg:path><svg:path d="M43.18 128a29.8 29.8 0 0 1 8 10.26c4.8 9.9 4.8 22 4.8 33.74c0 24.31 1 36 24 36a8 8 0 0 1 0 16c-17.48 0-29.32-6.14-35.2-18.26c-4.8-9.9-4.8-22-4.8-33.74c0-24.31-1-36-24-36a8 8 0 0 1 0-16c23 0 24-11.69 24-36c0-11.72 0-23.84 4.8-33.74C50.68 38.14 62.52 32 80 32a8 8 0 0 1 0 16c-23 0-24 11.69-24 36c0 11.72 0 23.84-4.8 33.74A29.8 29.8 0 0 1 43.18 128M240 120c-23 0-24-11.69-24-36c0-11.72 0-23.84-4.8-33.74C205.32 38.14 193.48 32 176 32a8 8 0 0 0 0 16c23 0 24 11.69 24 36c0 11.72 0 23.84 4.8 33.74a29.8 29.8 0 0 0 8 10.26a29.8 29.8 0 0 0-8 10.26c-4.8 9.9-4.8 22-4.8 33.74c0 24.31-1 36-24 36a8 8 0 0 0 0 16c17.48 0 29.32-6.14 35.2-18.26c4.8-9.9 4.8-22 4.8-33.74c0-24.31 1-36 24-36a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhBracketsCurlyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsRoundDuotoneIcon],svg[ph-brackets-round-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128c0 64-40 88-40 88H72s-40-24-40-88s40-88 40-88h112s40 24 40 88" opacity=".2"></svg:path><svg:path d="M40 128c0 58.29 34.67 80.25 36.15 81.16a8 8 0 0 1-8.27 13.7C66.09 221.78 24 195.75 24 128s42.09-93.78 43.88-94.86a8 8 0 0 1 8.26 13.7C74.54 47.83 40 69.82 40 128m148.12-94.86a8 8 0 0 0-8.27 13.7C181.33 47.75 216 69.71 216 128s-34.67 80.25-36.12 81.14a8 8 0 0 0 8.24 13.72C189.91 221.78 232 195.75 232 128s-42.09-93.78-43.88-94.86"></svg:path></svg:g>`,
})
export class PhBracketsRoundDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsSquareDuotoneIcon],svg[ph-brackets-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176H40V40Z" opacity=".2"></svg:path><svg:path d="M48 48v160h32a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h40a8 8 0 0 1 0 16Zm168-16h-40a8 8 0 0 0 0 16h32v160h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhBracketsSquareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrainDuotoneIcon],svg[ph-brain-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 124a48 48 0 0 1-32 45.27V176a40 40 0 0 1-80 0a40 40 0 0 1-80 0v-6.73a48 48 0 0 1 0-90.54V72a40 40 0 0 1 80 0a40 40 0 0 1 80 0v6.73A48 48 0 0 1 240 124" opacity=".2"></svg:path><svg:path d="M248 124a56.11 56.11 0 0 0-32-50.61V72a48 48 0 0 0-88-26.49A48 48 0 0 0 40 72v1.39a56 56 0 0 0 0 101.2V176a48 48 0 0 0 88 26.49A48 48 0 0 0 216 176v-1.41A56.09 56.09 0 0 0 248 124M88 208a32 32 0 0 1-31.81-28.56A56 56 0 0 0 64 180h8a8 8 0 0 0 0-16h-8a40 40 0 0 1-13.33-77.73A8 8 0 0 0 56 78.73V72a32 32 0 0 1 64 0v68.26A47.8 47.8 0 0 0 88 128a8 8 0 0 0 0 16a32 32 0 0 1 0 64m104-44h-8a8 8 0 0 0 0 16h8a56 56 0 0 0 7.81-.56A32 32 0 1 1 168 144a8 8 0 0 0 0-16a47.8 47.8 0 0 0-32 12.26V72a32 32 0 0 1 64 0v6.73a8 8 0 0 0 5.33 7.54A40 40 0 0 1 192 164m16-52a8 8 0 0 1-8 8h-4a36 36 0 0 1-36-36v-4a8 8 0 0 1 16 0v4a20 20 0 0 0 20 20h4a8 8 0 0 1 8 8m-148 8h-4a8 8 0 0 1 0-16h4a20 20 0 0 0 20-20v-4a8 8 0 0 1 16 0v4a36 36 0 0 1-36 36"></svg:path></svg:g>`,
})
export class PhBrainDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrandyDuotoneIcon],svg[ph-brandy-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 88a88 88 0 0 1-176 0Z" opacity=".2"></svg:path><svg:path d="M224 88a95.63 95.63 0 0 0-15.53-52.37a8 8 0 0 0-6.7-3.63H54.23a8 8 0 0 0-6.7 3.63A95.63 95.63 0 0 0 32 88a96.12 96.12 0 0 0 88 95.66V216H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16h-32v-32.34A96.12 96.12 0 0 0 224 88M58.7 48h138.6a79.5 79.5 0 0 1 10.3 32H48.4a79.5 79.5 0 0 1 10.3-32M128 168a80.11 80.11 0 0 1-79.6-72h159.2a80.11 80.11 0 0 1-79.6 72"></svg:path></svg:g>`,
})
export class PhBrandyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBreadDuotoneIcon],svg[ph-bread-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 111v89a8 8 0 0 1-8 8h-56a8 8 0 0 0 8-8v-89a32 32 0 0 0-8-63h56a32 32 0 0 1 8 63" opacity=".2"></svg:path><svg:path d="M240 80a40 40 0 0 0-40-40H48a40 40 0 0 0-16 76.65V200a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16v-83.35A40.06 40.06 0 0 0 240 80M48 120a8 8 0 0 0 0-16a24 24 0 0 1 0-48h96a24 24 0 0 1 0 48a8 8 0 0 0 0 16v80H48Zm152-16a8 8 0 0 0 0 16v80h-40v-83.35A40 40 0 0 0 176 56h24a24 24 0 0 1 0 48"></svg:path></svg:g>`,
})
export class PhBreadDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBridgeDuotoneIcon],svg[ph-bridge-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 168H24v-52.65A64 64 0 0 0 64 56a64 64 0 0 0 128 0a64 64 0 0 0 40 59.35Z" opacity=".2"></svg:path><svg:path d="M232 160h-32v-58.66a71.9 71.9 0 0 0 29 21.42a8 8 0 0 0 6-14.83A55.78 55.78 0 0 1 200 56a8 8 0 0 0-16 0a56 56 0 0 1-112 0a8 8 0 0 0-16 0a55.78 55.78 0 0 1-35 51.93a8 8 0 0 0 6 14.83a71.9 71.9 0 0 0 29-21.42V160H24a8 8 0 0 0 0 16h32v24a8 8 0 0 0 16 0v-24h112v24a8 8 0 0 0 16 0v-24h32a8 8 0 0 0 0-16m-88-33.8V160h-32v-33.8a72 72 0 0 0 32 0m-72-25a72.5 72.5 0 0 0 24 19.27V160H72Zm88 58.8v-39.52a72.5 72.5 0 0 0 24-19.27V160Z"></svg:path></svg:g>`,
})
export class PhBridgeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseDuotoneIcon],svg[ph-briefcase-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 118.31V200a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-81.69A191.14 191.14 0 0 0 128 144a191.1 191.1 0 0 0 96-25.69" opacity=".2"></svg:path><svg:path d="M104 112a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8m128-40v128a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h40v-8a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v8h40a16 16 0 0 1 16 16M96 56h64v-8a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8ZM40 72v41.62A184.1 184.1 0 0 0 128 136a184 184 0 0 0 88-22.39V72Zm176 128v-68.37A200.25 200.25 0 0 1 128 152a200.2 200.2 0 0 1-88-20.36V200z"></svg:path></svg:g>`,
})
export class PhBriefcaseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseMetalDuotoneIcon],svg[ph-briefcase-metal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 72v32H32V72a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8M32 200a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8v-32H32Z" opacity=".2"></svg:path><svg:path d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M40 112h176v48H40Zm56-64a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 24v24H40V72Zm0 128H40v-24h176z"></svg:path></svg:g>`,
})
export class PhBriefcaseMetalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseSimpleDuotoneIcon],svg[ph-briefcase-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect x="32.008" y="72" width="192" height="144" rx="8" opacity=".2" fill="currentColor"></svg:rect><svg:path d="M216.008 64H176v-8a24.027 24.027 0 0 0-24-24h-48a24.027 24.027 0 0 0-24 24v8H40.008a16.018 16.018 0 0 0-16 16v128a16.018 16.018 0 0 0 16 16h176a16.018 16.018 0 0 0 16-16V80a16.018 16.018 0 0 0-16-16zM96 56a8.01 8.01 0 0 1 8-8h48a8.01 8.01 0 0 1 8 8v8H96zm120.008 152h-176V80h176l.01 128z" fill="currentColor"></svg:path>`,
})
export class PhBriefcaseSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroadcastDuotoneIcon],svg[ph-broadcast-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 128a32 32 0 1 1-32-32a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m73.71 7.14a80 80 0 0 1-14.08 22.2a8 8 0 0 1-11.92-10.67a63.95 63.95 0 0 0 0-85.33a8 8 0 1 1 11.92-10.67a80.08 80.08 0 0 1 14.08 84.47M69 103.09a64 64 0 0 0 11.26 67.58a8 8 0 0 1-11.92 10.67a79.93 79.93 0 0 1 0-106.67a8 8 0 1 1 11.95 10.67A63.8 63.8 0 0 0 69 103.09M248 128a119.58 119.58 0 0 1-34.29 84a8 8 0 1 1-11.42-11.2a103.9 103.9 0 0 0 0-145.56A8 8 0 1 1 213.71 44A119.58 119.58 0 0 1 248 128M53.71 200.78A8 8 0 1 1 42.29 212a119.87 119.87 0 0 1 0-168a8 8 0 1 1 11.42 11.2a103.9 103.9 0 0 0 0 145.56Z"></svg:path></svg:g>`,
})
export class PhBroadcastDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroomDuotoneIcon],svg[ph-broom-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192.8 165.12L43.93 105.57a111 111 0 0 1 17.54-23.19a8 8 0 0 1 8.67-1.81l25.38 10.28a16 16 0 0 0 20.82-9l21-53.1c4.15-10 15.47-15.33 25.63-11.53a20 20 0 0 1 11.51 26.39l-21.35 53.1a16 16 0 0 0 8.93 20.75L187 127.3a8 8 0 0 1 5 7.43V152a105 105 0 0 0 .8 13.12" opacity=".2"></svg:path><svg:path d="M235.5 216.81c-22.56-11-35.5-34.58-35.5-64.8v-17.28a15.94 15.94 0 0 0-10.09-14.87L165 110a8 8 0 0 1-4.48-10.34l21.32-53a28 28 0 0 0-16.1-37a28.14 28.14 0 0 0-35.82 16a.6.6 0 0 0 0 .12L108.9 79a8 8 0 0 1-10.37 4.49L73.11 73.14a15.89 15.89 0 0 0-17.37 3.66C34.68 98.45 24 123.75 24 152a111.45 111.45 0 0 0 31.18 77.53A8 8 0 0 0 61 232h171a8 8 0 0 0 3.5-15.19M67.14 88l25.41 10.3a24 24 0 0 0 31.23-13.45l21-53c2.56-6.11 9.47-9.27 15.43-7a12 12 0 0 1 6.88 15.92l-21.4 52.99a24 24 0 0 0 13.43 31.14l24.88 9.83V153L55.77 101.71A109 109 0 0 1 67.14 88m48 128a87.53 87.53 0 0 1-24.34-42a8 8 0 0 0-15.49 4a105.2 105.2 0 0 0 18.36 38H64.44A95.54 95.54 0 0 1 40 152a85.9 85.9 0 0 1 7.73-36.29l137.8 55.12c3 18 10.56 33.48 21.89 45.16Z"></svg:path></svg:g>`,
})
export class PhBroomDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowserDuotoneIcon],svg[ph-browser-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v40H32V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v32H40V56Zm0 144H40v-96h176z"></svg:path></svg:g>`,
})
export class PhBrowserDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowsersDuotoneIcon],svg[ph-browsers-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v112a8 8 0 0 1-8 8h-24V88a8 8 0 0 0-8-8H64V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 88h144v16H40Zm144 112H40v-80h144zm32-32h-16V88a16 16 0 0 0-16-16H72V56h144Z"></svg:path></svg:g>`,
})
export class PhBrowsersDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugBeetleDuotoneIcon],svg[ph-bug-beetle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 112v48a72 72 0 0 1-72 72a72 72 0 0 1-72-72v-48Z" opacity=".2"></svg:path><svg:path d="M208 152h16a8 8 0 0 0 0-16h-16v-16h16a8 8 0 0 0 0-16h-16.4a79.76 79.76 0 0 0-21.44-46.85l19.5-19.49a8 8 0 0 0-11.32-11.32l-20.29 20.3a79.74 79.74 0 0 0-92.1 0l-20.29-20.3a8 8 0 0 0-11.32 11.32l19.5 19.49A79.76 79.76 0 0 0 48.4 104H32a8 8 0 0 0 0 16h16v16H32a8 8 0 0 0 0 16h16v8c0 2.7.14 5.37.4 8H32a8 8 0 0 0 0 16h19.68a80 80 0 0 0 152.64 0H224a8 8 0 0 0 0-16h-16.4c.26-2.63.4-5.3.4-8ZM128 48a64.07 64.07 0 0 1 63.48 56h-127A64.07 64.07 0 0 1 128 48m8 175.48V144a8 8 0 0 0-16 0v79.48A64.07 64.07 0 0 1 64 160v-40h128v40a64.07 64.07 0 0 1-56 63.48"></svg:path></svg:g>`,
})
export class PhBugBeetleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugDroidDuotoneIcon],svg[ph-bug-droid-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 128v24a80 80 0 0 1-160 0v-24Z" opacity=".2"></svg:path><svg:path d="m191.83 51.48l13.83-13.82a8 8 0 0 0-11.32-11.32L179.79 40.9a87.81 87.81 0 0 0-103.58 0L61.66 26.34a8 8 0 0 0-11.32 11.32l13.83 13.82A87.72 87.72 0 0 0 40 112v40a88 88 0 0 0 176 0v-40a87.72 87.72 0 0 0-24.17-60.52M128 40a72.08 72.08 0 0 1 72 72v8H56v-8a72.08 72.08 0 0 1 72-72m0 184a72.08 72.08 0 0 1-72-72v-16h144v16a72.08 72.08 0 0 1-72 72m16-132a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-56 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path></svg:g>`,
})
export class PhBugDroidDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugDuotoneIcon],svg[ph-bug-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 128v16a80 80 0 0 1-160 0v-16Z" opacity=".2"></svg:path><svg:path d="M144 92a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-44-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m116 64a87.8 87.8 0 0 1-3 23l22.24 9.72A8 8 0 0 1 232 192a7.9 7.9 0 0 1-3.2-.67L207.38 182a88 88 0 0 1-158.76 0l-21.42 9.33a7.9 7.9 0 0 1-3.2.67a8 8 0 0 1-3.2-15.33L43 167a87.8 87.8 0 0 1-3-23v-8H16a8 8 0 0 1 0-16h24v-8a87.8 87.8 0 0 1 3-23l-22.2-9.67a8 8 0 1 1 6.4-14.66L48.62 74a88 88 0 0 1 158.76 0l21.42-9.36a8 8 0 0 1 6.4 14.66L213 89.05a87.8 87.8 0 0 1 3 23v8h24a8 8 0 0 1 0 16h-24ZM56 120h144v-8a72 72 0 0 0-144 0Zm64 95.54V136H56v8a72.08 72.08 0 0 0 64 71.54M200 144v-8h-64v79.54A72.08 72.08 0 0 0 200 144"></svg:path></svg:g>`,
})
export class PhBugDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingApartmentDuotoneIcon],svg[ph-building-apartment-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 72v144h-80v-48h-32v48H32V104h48V40h96v32Z" opacity=".2"></svg:path><svg:path d="M240 208h-8V72a8 8 0 0 0-8-8h-40V40a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v56H32a8 8 0 0 0-8 8v104h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 112h40a8 8 0 0 0 8-8V48h80v24a8 8 0 0 0 8 8h40v128h-64v-40a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v40H40Zm96 96h-16v-32h16ZM112 72a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m0 32a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m56 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-80 32a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8m24-32a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m56 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m0 32a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhBuildingApartmentDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingDuotoneIcon],svg[ph-building-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 24v208h-48v-48h-48v48H56V24Z" opacity=".2"></svg:path><svg:path d="M232 224h-24V32h8a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16h8v192H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M64 32h128v192h-32v-40a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v40H64Zm80 192h-32v-32h32ZM88 64a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-48 40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-48 40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhBuildingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingOfficeDuotoneIcon],svg[ph-building-office-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 40v176h-40v-56H88v56H48V40Z" opacity=".2"></svg:path><svg:path d="M248 208h-16V96a8 8 0 0 0 0-16h-48V48a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16v160H24a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M216 96v112h-32V96ZM56 48h112v160h-24v-48a8 8 0 0 0-8-8H88a8 8 0 0 0-8 8v48H56Zm72 160H96v-40h32ZM72 80a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-48 40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhBuildingOfficeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingsDuotoneIcon],svg[ph-buildings-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M136 32v184H40V85.35a8 8 0 0 1 3.56-6.66l80-53.33A8 8 0 0 1 136 32" opacity=".2"></svg:path><svg:path d="M240 208h-16V96a16 16 0 0 0-16-16h-64V32a16 16 0 0 0-24.88-13.32L39.12 72A16 16 0 0 0 32 85.34V208H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M208 96v112h-64V96ZM48 85.34L128 32v176H48ZM112 112v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m-32 0v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m0 56v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m32 0v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhBuildingsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBulldozerDuotoneIcon],svg[ph-bulldozer-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 176a32 32 0 0 1-32 32H40a32 32 0 0 1-32-32a32 32 0 0 1 32-32h120a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M248 200h-8a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h8a8 8 0 0 0 0-16h-8a24 24 0 0 0-24 24v8h-16.8a40.09 40.09 0 0 0-33.71-31.61l-36.05-86.54A16 16 0 0 0 114.67 40H24A16 16 0 0 0 8 56v96a40 40 0 0 0 32 64h120a40.07 40.07 0 0 0 39.2-32H216v8a24 24 0 0 0 24 24h8a8 8 0 0 0 0-16m-100-64H64V56h50.67ZM48 56v80h-8a39.7 39.7 0 0 0-16 3.35V56Zm112 144H40a24 24 0 0 1 0-48h120a24 24 0 0 1 0 48m8-24a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h120a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhBulldozerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBusDuotoneIcon],svg[ph-bus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M48 184h40v24a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8Zm120 24a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8v-24h-40ZM48 72v40h160V72Z" opacity=".2"></svg:path><svg:path d="M184 32H72a32 32 0 0 0-32 32v144a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h64v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V64a32 32 0 0 0-32-32M56 176v-56h144v56Zm0-96h144v24H56Zm16-32h112a16 16 0 0 1 16 16H56a16 16 0 0 1 16-16m8 160H56v-16h24Zm96 0v-16h24v16Zm-72-60a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72-68v24a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0M24 80v24a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhBusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phButterflyDuotoneIcon],svg[ph-butterfly-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M225.12 119.71c-7.86 30.94-29.31 32.71-37.36 32.23h-1A36 36 0 1 1 128 180a36 36 0 1 1-58.72-28.06h-1c-8 .48-29.5-1.29-37.36-32.23C22.79 87.84 15.78 48 47.07 48S128 95.8 128 127.67C128 95.8 177.64 48 208.93 48s24.28 39.84 16.19 71.71" opacity=".2"></svg:path><svg:path d="M232.7 50.48C229 45.7 221.84 40 209 40c-16.85 0-38.46 11.28-57.81 30.16A140 140 0 0 0 136 87.53V56a8 8 0 0 0-16 0v31.53a140 140 0 0 0-15.15-17.37C85.49 51.28 63.88 40 47 40c-12.84 0-20 5.7-23.7 10.48c-6.82 8.77-12.18 24.08-.21 71.2c6.05 23.83 19.51 33 30.63 36.42A44 44 0 0 0 128 205.27a44 44 0 0 0 74.28-47.17c11.12-3.4 24.57-12.59 30.63-36.42c6.72-26.44 11.94-55.58-.21-71.2M92 208a28.12 28.12 0 0 1-3.14-56a8 8 0 1 0-1.76-15.9a43.64 43.64 0 0 0-20.74 7.9c-8.43.09-22-3.57-27.76-26.26c-2.88-11.35-11.6-45.88-2.66-57.44C37.37 58.46 40.09 56 47 56c27.27 0 73 44.88 73 71.67V180a28 28 0 0 1-28 28m125.4-90.26c-5.77 22.69-19.33 26.34-27.77 26.26a43.6 43.6 0 0 0-20.74-7.95a8 8 0 1 0-1.76 15.9A28.11 28.11 0 1 1 136 180v-52.33C136 100.88 181.69 56 209 56c6.95 0 9.66 2.46 11.1 4.3c8.95 11.56.18 46.09-2.7 57.44"></svg:path></svg:g>`,
})
export class PhButterflyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCableCarDuotoneIcon],svg[ph-cable-car-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 128v40H40v-40a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M247.87 30.59a8 8 0 0 0-9.28-6.46l-224 40A8 8 0 0 0 16 80a8.6 8.6 0 0 0 1.42-.12L120 61.56V96H64a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32h-56V58.7l105.4-18.82a8 8 0 0 0 6.47-9.29M104 160v-48h48v48Zm-40-48h24v48H48v-32a16 16 0 0 1 16-16m128 96H64a16 16 0 0 1-16-16v-16h160v16a16 16 0 0 1-16 16m16-80v32h-40v-48h24a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhCableCarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCactusDuotoneIcon],svg[ph-cactus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 116a60 60 0 0 1-60 60h-12v40H96v-80H84a60 60 0 0 1-60-60a20 20 0 0 1 20-20a20 20 0 0 1 20 20a20 20 0 0 0 20 20h12V56a32 32 0 0 1 32-32a32 32 0 0 1 32 32v80h12a20 20 0 0 0 20-20a20 20 0 0 1 20-20a20 20 0 0 1 20 20" opacity=".2"></svg:path><svg:path d="M216 208h-48v-24h4a68.07 68.07 0 0 0 68-68a28 28 0 0 0-56 0a12 12 0 0 1-12 12h-4V56a40 40 0 0 0-80 0v32h-4a12 12 0 0 1-12-12a28 28 0 0 0-56 0a68.07 68.07 0 0 0 68 68h4v64H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M96 128H84a52.06 52.06 0 0 1-52-52a12 12 0 0 1 24 0a28 28 0 0 0 28 28h12a8 8 0 0 0 8-8V56a24 24 0 0 1 48 0v80a8 8 0 0 0 8 8h12a28 28 0 0 0 28-28a12 12 0 0 1 24 0a52.06 52.06 0 0 1-52 52h-12a8 8 0 0 0-8 8v32h-48v-72a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhCactusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCakeDuotoneIcon],svg[ph-cake-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 48c0-24 24-40 24-40s24 16 24 40a24 24 0 0 1-48 0m104 48H48a16 16 0 0 0-16 16v23.33c0 17.44 13.67 32.18 31.1 32.66A32 32 0 0 0 96 136a32 32 0 0 0 64 0a32 32 0 0 0 32.9 32c17.43-.48 31.1-15.22 31.1-32.66V112a16 16 0 0 0-16-16" opacity=".2"></svg:path><svg:path d="M232 112a24 24 0 0 0-24-24h-72v-9a32.06 32.06 0 0 0 24-31c0-28-26.44-45.91-27.56-46.66a8 8 0 0 0-8.88 0C122.44 2.09 96 20 96 48a32.06 32.06 0 0 0 24 31v9H48a24 24 0 0 0-24 24v23.33a40.84 40.84 0 0 0 8 24.24V200a24 24 0 0 0 24 24h144a24 24 0 0 0 24-24v-40.43a40.84 40.84 0 0 0 8-24.24ZM112 48c0-13.57 10-24.46 16-29.79c6 5.33 16 16.22 16 29.79a16 16 0 0 1-32 0m-72 64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8v23.33c0 13.25-10.46 24.31-23.32 24.66A24 24 0 0 1 168 136a8 8 0 0 0-16 0a24 24 0 0 1-48 0a8 8 0 0 0-16 0a24 24 0 0 1-24.68 24C50.46 159.64 40 148.58 40 135.33Zm160 96H56a8 8 0 0 1-8-8v-27.44A38.8 38.8 0 0 0 62.88 176a39.7 39.7 0 0 0 29-11.31A40.4 40.4 0 0 0 96 160a40 40 0 0 0 64 0a40.4 40.4 0 0 0 4.13 4.67A39.67 39.67 0 0 0 192 176h1.14a38.8 38.8 0 0 0 14.86-3.44V200a8 8 0 0 1-8 8"></svg:path></svg:g>`,
})
export class PhCakeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalculatorDuotoneIcon],svg[ph-calculator-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 64v48H80V64Z" opacity=".2"></svg:path><svg:path d="M80 120h96a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8m8-48h80v32H88Zm112-48H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H56V40h144Zm-100-68a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-80 40a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhCalculatorDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarBlankDuotoneIcon],svg[ph-calendar-blank-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160z"></svg:path></svg:g>`,
})
export class PhCalendarBlankDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarCheckDuotoneIcon],svg[ph-calendar-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-38.34-85.66a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L116 164.69l42.34-42.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhCalendarCheckDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotDuotoneIcon],svg[ph-calendar-dot-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-64-56a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhCalendarDotDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotsDuotoneIcon],svg[ph-calendar-dots-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-68-76a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-88 40a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhCalendarDotsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDuotoneIcon],svg[ph-calendar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-96-88v64a8 8 0 0 1-16 0v-51.06l-4.42 2.22a8 8 0 0 1-7.16-14.32l16-8A8 8 0 0 1 112 120m59.16 30.45L152 176h16a8 8 0 0 1 0 16h-32a8 8 0 0 1-6.4-12.8l28.78-38.37a8 8 0 1 0-13.31-8.83a8 8 0 1 1-13.85-8A24 24 0 0 1 176 136a23.76 23.76 0 0 1-4.84 14.45"></svg:path></svg:g>`,
})
export class PhCalendarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarHeartDuotoneIcon],svg[ph-calendar-heart-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 120c0 32-48 56-48 56s-48-24-48-56a24 24 0 0 1 48 0a24 24 0 0 1 48 0" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24zM152 88a31.9 31.9 0 0 0-24 10.86A32 32 0 0 0 72 120c0 36.52 50.28 62.08 52.42 63.16a8 8 0 0 0 7.16 0C133.72 182.08 184 156.52 184 120a32 32 0 0 0-32-32m-24 78.93c-13.79-7.79-40-26.75-40-46.93a16 16 0 0 1 32 0a8 8 0 0 0 16 0a16 16 0 0 1 32 0c0 20.19-26.21 39.15-40 46.93"></svg:path></svg:g>`,
})
export class PhCalendarHeartDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarMinusDuotoneIcon],svg[ph-calendar-minus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-48-56a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCalendarMinusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarPlusDuotoneIcon],svg[ph-calendar-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-48-56a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCalendarPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarSlashDuotoneIcon],svg[ph-calendar-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M53.92 34.62A8 8 0 0 0 48 32a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a8 8 0 0 0 5.92-13.38ZM73.55 80H48V51.88ZM48 208V96h40.1l101.82 112ZM224 48v129.23a8 8 0 1 1-16 0V96h-73.12a8 8 0 0 1 0-16H208V48h-24v8a8 8 0 0 1-16 0v-8H91.25a8 8 0 0 1 0-16H168v-8a8 8 0 0 1 16 0v8h24a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhCalendarSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarStarDuotoneIcon],svg[ph-calendar-star-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m149.6 143.41l8.07 32.59L128 158.54L98.33 176l8.07-32.59l-26.4-21.8l34.65-2.67L128 88l13.35 30.94l34.65 2.67Z" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24zm-31.38-94.36l-29.84-2.31l-11.43-26.5a8 8 0 0 0-14.7 0l-11.43 26.5l-29.84 2.31a8 8 0 0 0-4.47 14.14l22.52 18.59l-6.86 27.71a8 8 0 0 0 11.82 8.81L128 167.82l25.61 15.07a8 8 0 0 0 11.82-8.81l-6.86-27.71l22.52-18.59a8 8 0 0 0-4.47-14.14m-32.11 23.6a8 8 0 0 0-2.68 8.09l3.5 14.12l-13.27-7.81a8 8 0 0 0-8.12 0l-13.27 7.81l3.5-14.12a8 8 0 0 0-2.68-8.09l-11.11-9.18l14.89-1.15a8 8 0 0 0 6.73-4.8l6-13.92l6 13.92a8 8 0 0 0 6.73 4.8l14.89 1.15Z"></svg:path></svg:g>`,
})
export class PhCalendarStarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarXDuotoneIcon],svg[ph-calendar-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-50.34-74.34L139.31 152l18.35 18.34a8 8 0 0 1-11.32 11.32L128 163.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L116.69 152l-18.35-18.34a8 8 0 0 1 11.32-11.32L128 140.69l18.34-18.35a8 8 0 0 1 11.32 11.32"></svg:path></svg:g>`,
})
export class PhCalendarXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCallBellDuotoneIcon],svg[ph-call-bell-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 152v24H40v-24a88 88 0 0 1 176 0" opacity=".2"></svg:path><svg:path d="M24 184h208a8 8 0 0 0 0-16h-8v-16a96.12 96.12 0 0 0-88-95.66V40h16a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16h16v16.34A96.12 96.12 0 0 0 32 152v16h-8a8 8 0 0 0 0 16m24-32a80 80 0 0 1 160 0v16H48Zm192 56a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h208a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCallBellDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraDuotoneIcon],svg[ph-camera-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 64h-32l-16-24H96L80 64H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m-80 104a36 36 0 1 1 36-36a36 36 0 0 1-36 36" opacity=".2"></svg:path><svg:path d="M208 56h-27.72l-13.63-20.44A8 8 0 0 0 160 32H96a8 8 0 0 0-6.65 3.56L75.71 56H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h32a8 8 0 0 0 6.66-3.56L100.28 48h55.43l13.63 20.44A8 8 0 0 0 176 72h32a8 8 0 0 1 8 8ZM128 88a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path></svg:g>`,
})
export class PhCameraDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraPlusDuotoneIcon],svg[ph-camera-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 80v112a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h32l13.62-20.44a8 8 0 0 1 6.66-3.56h55.44a8 8 0 0 1 6.66 3.56L176 64h32a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M168 136a8 8 0 0 1-8 8h-24v24a8 8 0 0 1-16 0v-24H96a8 8 0 0 1 0-16h24v-24a8 8 0 0 1 16 0v24h24a8 8 0 0 1 8 8m64-56v112a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h27.72L87 39.12A16 16 0 0 1 100.28 32h55.44A16 16 0 0 1 169 39.12L180.28 56H208a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8h-32a8 8 0 0 1-6.66-3.56L155.72 48h-55.44L86.66 68.44A8 8 0 0 1 80 72H48a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8Z"></svg:path></svg:g>`,
})
export class PhCameraPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraRotateDuotoneIcon],svg[ph-camera-rotate-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 80v112a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h32l16-24h64l16 24h32a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M208 56h-27.72l-13.63-20.44A8 8 0 0 0 160 32H96a8 8 0 0 0-6.65 3.56L75.71 56H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h32a8 8 0 0 0 6.66-3.56L100.28 48h55.43l13.63 20.44A8 8 0 0 0 176 72h32a8 8 0 0 1 8 8Zm-40-96v24a8 8 0 0 1-8 8h-24a8 8 0 0 1 0-16h5.15a32.12 32.12 0 0 0-40.34-1.61a8 8 0 0 1-9.62-12.79a48.21 48.21 0 0 1 60.81 2.63V96a8 8 0 0 1 16 0m-17.61 59.2a8 8 0 0 1-1.58 11.2A48.21 48.21 0 0 1 96 163.77V168a8 8 0 0 1-16 0v-24a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-5.15a32.12 32.12 0 0 0 40.34 1.61a8 8 0 0 1 11.2 1.59"></svg:path></svg:g>`,
})
export class PhCameraRotateDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraSlashDuotoneIcon],svg[ph-camera-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 64h-32l-16-24H96L80 64H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m-80 104a36 36 0 1 1 36-36a36 36 0 0 1-36 36" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76L51.73 56H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h149.19l4.89 5.38a8 8 0 1 0 11.84-10.76Zm51.66 80.61l37 40.69A27.7 27.7 0 0 1 128 160a28 28 0 0 1-22.42-44.77M48 200a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h18.28l28.41 31.26A44 44 0 0 0 128 176a44.2 44.2 0 0 0 25.44-8.12l29.2 32.12ZM232 80v106a8 8 0 0 1-16 0V80a8 8 0 0 0-8-8h-32a8 8 0 0 1-6.65-3.56L155.71 48h-55.47a8 8 0 0 1-12.91-9.42l2-3A8 8 0 0 1 96 32h64a8 8 0 0 1 6.66 3.56L180.28 56H208a24 24 0 0 1 24 24"></svg:path></svg:g>`,
})
export class PhCameraSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCampfireDuotoneIcon],svg[ph-campfire-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M180 108a52 52 0 0 1-52 52a24 24 0 0 0 24-24c0-24-24-40-24-40s-24 16-24 40a24 24 0 0 0 24 24a52 52 0 0 1-52-52c0-44 52-76 52-76s52 32 52 76" opacity=".2"></svg:path><svg:path d="M128 168a60.07 60.07 0 0 0 60-60c0-47.92-53.53-81.41-55.81-82.81a8 8 0 0 0-8.38 0A156 156 0 0 0 96.24 48C77.77 67.13 68 87.9 68 108a60.07 60.07 0 0 0 60 60m-16-32c0-13.57 10-24.46 16-29.79c6 5.33 16 16.22 16 29.79a16 16 0 0 1-32 0m16-94.34C139.74 50 172 76 172 108a43.83 43.83 0 0 1-12.09 30.24c.05-.74.09-1.49.09-2.24c0-28-26.44-45.91-27.56-46.66a8 8 0 0 0-8.88 0C122.44 90.09 96 108 96 136c0 .75 0 1.5.09 2.24A43.83 43.83 0 0 1 84 108c0-32 32.27-58 44-66.34m95.62 184.76a8 8 0 0 1-10.05 5.2L128 204.39l-85.57 27.23a8 8 0 1 1-4.85-15.25l64-20.37l-64-20.38a8 8 0 1 1 4.85-15.24L128 187.6l85.57-27.22a8 8 0 1 1 4.85 15.24l-64 20.38l64 20.37a8 8 0 0 1 5.2 10.05"></svg:path></svg:g>`,
})
export class PhCampfireDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarBatteryDuotoneIcon],svg[ph-car-battery-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 88v96a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M192 136a8 8 0 0 1-8 8h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8m-88-8H72a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m136-40v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V88a16 16 0 0 1 16-16h16V56a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v16h32V56a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v16h16a16 16 0 0 1 16 16m-80-16h32V56h-32Zm-96 0h32V56H64Zm160 112V88H32v96z"></svg:path></svg:g>`,
})
export class PhCarBatteryDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarDuotoneIcon],svg[ph-car-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 176h40v24a8 8 0 0 1-8 8h-24a8 8 0 0 1-8-8ZM32 200a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8v-24H32ZM194.11 44.75A8 8 0 0 0 186.8 40H69.2a8 8 0 0 0-7.31 4.75L32 112h192Z" opacity=".2"></svg:path><svg:path d="M240 104h-10.8l-27.78-62.5A16 16 0 0 0 186.8 32H69.2a16 16 0 0 0-14.62 9.5L26.8 104H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h96v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16M69.2 48h117.6l24.89 56H44.31ZM64 200H40v-16h24Zm128 0v-16h24v16Zm24-32H40v-48h176ZM56 144a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8m112 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhCarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarProfileDuotoneIcon],svg[ph-car-profile-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 176a24 24 0 1 1-24-24a24 24 0 0 1 24 24m104-24a24 24 0 1 0 24 24a24 24 0 0 0-24-24m-29.66-77.66a8 8 0 0 0-5.65-2.34H44.28a8 8 0 0 0-6.66 3.56L8 120h200Z" opacity=".2"></svg:path><svg:path d="M240 112h-28.69L168 68.69A15.86 15.86 0 0 0 156.69 64H44.28A16 16 0 0 0 31 71.12L1.34 115.56A8.07 8.07 0 0 0 0 120v48a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h66a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16M44.28 80h112.41l32 32H23ZM64 192a16 16 0 1 1 16-16a16 16 0 0 1-16 16m128 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48-24h-17a32 32 0 0 0-62 0H95a32 32 0 0 0-62 0H16v-40h224Z"></svg:path></svg:g>`,
})
export class PhCarProfileDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarSimpleDuotoneIcon],svg[ph-car-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 112H32l29.89-67.25A8 8 0 0 1 69.2 40h117.6a8 8 0 0 1 7.31 4.75Z" opacity=".2"></svg:path><svg:path d="M240 104h-10.8l-27.78-62.5A16 16 0 0 0 186.8 32H69.2a16 16 0 0 0-14.62 9.5L26.8 104H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h96v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16M69.2 48h117.6l24.89 56H44.31ZM216 200h-24v-24a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v24H40v-80h176Z"></svg:path></svg:g>`,
})
export class PhCarSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardholderDuotoneIcon],svg[ph-cardholder-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 72v48h-64a32 32 0 0 1-64 0H32V72a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M208 48H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V72a24 24 0 0 0-24-24M40 96h176v16h-56a8 8 0 0 0-8 8a24 24 0 0 1-48 0a8 8 0 0 0-8-8H40Zm8-32h160a8 8 0 0 1 8 8v8H40v-8a8 8 0 0 1 8-8m160 128H48a8 8 0 0 1-8-8v-56h48.8a40 40 0 0 0 78.4 0H216v56a8 8 0 0 1-8 8"></svg:path></svg:g>`,
})
export class PhCardholderDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsDuotoneIcon],svg[ph-cards-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 88v112a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M184 72H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m0 128H40V88h144zm48-144v120a8 8 0 0 1-16 0V56H64a8 8 0 0 1 0-16h152a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhCardsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsThreeDuotoneIcon],svg[ph-cards-three-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 104v96a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-96a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 88H48a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16m0 112H48v-96h160zM48 64a8 8 0 0 1 8-8h144a8 8 0 0 1 0 16H56a8 8 0 0 1-8-8m16-32a8 8 0 0 1 8-8h112a8 8 0 0 1 0 16H72a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhCardsThreeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleDownDuotoneIcon],svg[ph-caret-circle-double-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M195.88 195.88a96 96 0 1 1 0-135.76a96 96 0 0 1 0 135.76" opacity=".2"></svg:path><svg:path d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46m-11.31 135.77a88 88 0 1 1 0-124.46a88.11 88.11 0 0 1 0 124.46M165.66 82.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L128 108.69l26.34-26.35a8 8 0 0 1 11.32 0m0 56a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L128 164.69l26.34-26.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhCaretCircleDoubleDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleLeftDuotoneIcon],svg[ph-caret-circle-double-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M195.88 195.88a96 96 0 1 1 0-135.76a96 96 0 0 1 0 135.76" opacity=".2"></svg:path><svg:path d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46m-11.31 135.77a88 88 0 1 1 0-124.46a88.11 88.11 0 0 1 0 124.46m-16.57-88.57L147.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32m-56 0L91.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32"></svg:path></svg:g>`,
})
export class PhCaretCircleDoubleLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleRightDuotoneIcon],svg[ph-caret-circle-double-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M195.88 195.88a96 96 0 1 1 0-135.76a96 96 0 0 1 0 135.76" opacity=".2"></svg:path><svg:path d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46m-11.31 135.77a88 88 0 1 1 0-124.46a88.11 88.11 0 0 1 0 124.46m-64.57-67.89a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L108.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32Zm56 0a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L164.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32Z"></svg:path></svg:g>`,
})
export class PhCaretCircleDoubleRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleUpDuotoneIcon],svg[ph-caret-circle-double-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M195.88 195.88a96 96 0 1 1 0-135.76a96 96 0 0 1 0 135.76" opacity=".2"></svg:path><svg:path d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46m-11.31 135.77a88 88 0 1 1 0-124.46a88.11 88.11 0 0 1 0 124.46m-24.57-27.89a8 8 0 0 1-11.32 11.32L128 147.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0Zm0-56a8 8 0 0 1-11.32 11.32L128 91.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0Z"></svg:path></svg:g>`,
})
export class PhCaretCircleDoubleUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDownDuotoneIcon],svg[ph-caret-circle-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m45.66-109.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32 0l-40-40a8 8 0 0 1 11.32-11.32L128 140.69l34.34-34.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhCaretCircleDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleLeftDuotoneIcon],svg[ph-caret-circle-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m21.66-122.34L115.31 128l34.35 34.34a8 8 0 0 1-11.32 11.32l-40-40a8 8 0 0 1 0-11.32l40-40a8 8 0 0 1 11.32 11.32"></svg:path></svg:g>`,
})
export class PhCaretCircleLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleRightDuotoneIcon],svg[ph-caret-circle-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m29.66-93.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32L140.69 128l-34.35-34.34a8 8 0 0 1 11.32-11.32Z"></svg:path></svg:g>`,
})
export class PhCaretCircleRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpDownDuotoneIcon],svg[ph-caret-circle-up-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m37.66-117.66a8 8 0 0 1-11.32 11.32L128 83.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0Zm0 48a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L128 172.69l26.34-26.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhCaretCircleUpDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpDuotoneIcon],svg[ph-caret-circle-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m45.66-77.66a8 8 0 0 1-11.32 11.32L128 115.31l-34.34 34.35a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0Z"></svg:path></svg:g>`,
})
export class PhCaretCircleUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleDownDuotoneIcon],svg[ph-caret-double-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m208 56l-80 80l-80-80Z" opacity=".2"></svg:path><svg:path d="m213.66 141.66l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 204.69l74.34-74.35a8 8 0 0 1 11.32 11.32m-171.32-80A8 8 0 0 1 48 48h160a8 8 0 0 1 5.66 13.66l-80 80a8 8 0 0 1-11.32 0Zm25 2.34L128 124.69L188.69 64Z"></svg:path></svg:g>`,
})
export class PhCaretDoubleDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleLeftDuotoneIcon],svg[ph-caret-double-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 48v160l-80-80Z" opacity=".2"></svg:path><svg:path d="M203.06 40.61a8 8 0 0 0-8.72 1.73l-80 80a8 8 0 0 0 0 11.32l80 80A8 8 0 0 0 208 208V48a8 8 0 0 0-4.94-7.39M192 188.69L131.31 128L192 67.31Zm-66.34 13.65a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L51.31 128Z"></svg:path></svg:g>`,
})
export class PhCaretDoubleLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleRightDuotoneIcon],svg[ph-caret-double-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m136 128l-80 80V48Z" opacity=".2"></svg:path><svg:path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></svg:path></svg:g>`,
})
export class PhCaretDoubleRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleUpDuotoneIcon],svg[ph-caret-double-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 200H48l80-80Z" opacity=".2"></svg:path><svg:path d="M133.66 114.34a8 8 0 0 0-11.32 0l-80 80A8 8 0 0 0 48 208h160a8 8 0 0 0 5.66-13.66ZM67.31 192L128 131.31L188.69 192Zm-25-66.34a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1-11.32 11.32L128 51.31l-74.34 74.35a8 8 0 0 1-11.32 0Z"></svg:path></svg:g>`,
})
export class PhCaretDoubleUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDownDuotoneIcon],svg[ph-caret-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m208 96l-80 80l-80-80Z" opacity=".2"></svg:path><svg:path d="M215.39 92.94A8 8 0 0 0 208 88H48a8 8 0 0 0-5.66 13.66l80 80a8 8 0 0 0 11.32 0l80-80a8 8 0 0 0 1.73-8.72M128 164.69L67.31 104h121.38Z"></svg:path></svg:g>`,
})
export class PhCaretDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLeftDuotoneIcon],svg[ph-caret-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 48v160l-80-80Z" opacity=".2"></svg:path><svg:path d="M163.06 40.61a8 8 0 0 0-8.72 1.73l-80 80a8 8 0 0 0 0 11.32l80 80A8 8 0 0 0 168 208V48a8 8 0 0 0-4.94-7.39M152 188.69L91.31 128L152 67.31Z"></svg:path></svg:g>`,
})
export class PhCaretLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineDownDuotoneIcon],svg[ph-caret-line-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m208 72l-80 80l-80-80Z" opacity=".2"></svg:path><svg:path d="M122.34 157.66a8 8 0 0 0 11.32 0l80-80A8 8 0 0 0 208 64H48a8 8 0 0 0-5.66 13.66ZM188.69 80L128 140.69L67.31 80ZM216 192a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h160a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCaretLineDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineLeftDuotoneIcon],svg[ph-caret-line-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 48v160l-80-80Z" opacity=".2"></svg:path><svg:path d="M195.06 40.61a8 8 0 0 0-8.72 1.73l-80 80a8 8 0 0 0 0 11.32l80 80A8 8 0 0 0 200 208V48a8 8 0 0 0-4.94-7.39M184 188.69L123.31 128L184 67.31ZM80 48v160a8 8 0 0 1-16 0V48a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhCaretLineLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineRightDuotoneIcon],svg[ph-caret-line-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m144 128l-80 80V48Z" opacity=".2"></svg:path><svg:path d="M69.66 42.34A8 8 0 0 0 56 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32ZM72 188.69V67.31L132.69 128ZM192 48v160a8 8 0 0 1-16 0V48a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhCaretLineRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineUpDuotoneIcon],svg[ph-caret-line-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48l80-80Z" opacity=".2"></svg:path><svg:path d="M133.66 106.34a8 8 0 0 0-11.32 0l-80 80A8 8 0 0 0 48 200h160a8 8 0 0 0 5.66-13.66ZM67.31 184L128 123.31L188.69 184ZM40 72a8 8 0 0 1 8-8h160a8 8 0 0 1 0 16H48a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhCaretLineUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretRightDuotoneIcon],svg[ph-caret-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m176 128l-80 80V48Z" opacity=".2"></svg:path><svg:path d="m181.66 122.34l-80-80A8 8 0 0 0 88 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M104 188.69V67.31L164.69 128Z"></svg:path></svg:g>`,
})
export class PhCaretRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpDownDuotoneIcon],svg[ph-caret-up-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 176h96l-48 48Zm48-144L80 80h96Z" opacity=".2"></svg:path><svg:path d="M176 168H80a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 176 168m-48 44.69L99.31 184h57.38ZM80 88h96a8 8 0 0 0 5.66-13.66l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 80 88m48-44.69L156.69 72H99.31Z"></svg:path></svg:g>`,
})
export class PhCaretUpDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpDuotoneIcon],svg[ph-caret-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 160H48l80-80Z" opacity=".2"></svg:path><svg:path d="m213.66 154.34l-80-80a8 8 0 0 0-11.32 0l-80 80A8 8 0 0 0 48 168h160a8 8 0 0 0 5.66-13.66M67.31 152L128 91.31L188.69 152Z"></svg:path></svg:g>`,
})
export class PhCaretUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarrotDuotoneIcon],svg[ph-carrot-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M183.6 151.6C144 192 43.81 223 43.81 223A8 8 0 0 1 33 212.19S64 112 104.4 72.4a56 56 0 0 1 79.2 79.2" opacity=".2"></svg:path><svg:path d="M232 64h-28.69l26.35-26.34a8 8 0 0 0-11.32-11.32L192 52.69V24a8 8 0 0 0-16 0v32.57a64 64 0 0 0-77.2 10.12c-40.1 39.39-70.25 133.08-73.19 142.45a16 16 0 0 0 21.26 21.26c9.37-2.94 103.18-33.13 142.47-73.21A64 64 0 0 0 199.43 80H232a8 8 0 0 0 0-16m-54.12 82c-8.94 9.12-21.25 17.8-34.85 25.73l-25.38-25.39a8 8 0 0 0-11.32 11.32l22.09 22.09c-40.87 21.19-86.32 35.42-87 35.63A8 8 0 0 0 40 216a8 8 0 0 0 .59-1.41c.29-.93 28-89.58 64-130.67l33.77 33.77a8 8 0 0 0 11.32-11.32l-33.5-33.49a48 48 0 0 1 61.7 73.12"></svg:path></svg:g>`,
})
export class PhCarrotDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCashRegisterDuotoneIcon],svg[ph-cash-register-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 160H24l22.49-89.94A8 8 0 0 1 54.25 64h147.5a8 8 0 0 1 7.76 6.06Z" opacity=".2"></svg:path><svg:path d="m239.76 158.06l-22.48-89.94A16 16 0 0 0 201.75 56H136V40a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v16h-9.75a16 16 0 0 0-15.53 12.12l-22.48 89.94A8 8 0 0 0 16 160v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a8 8 0 0 0-.24-1.94M80 40h40v16H80ZM54.25 72h147.5l20 80H34.25ZM32 192v-24h192v24Zm32-96a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H72a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-96 32a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H72a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhCashRegisterDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCassetteTapeDuotoneIcon],svg[ph-cassette-tape-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m168 168l24 32H64l24-32Zm8-80a24 24 0 1 0 24 24a24 24 0 0 0-24-24m-72 24a24 24 0 1 0-24 24a24 24 0 0 0 24-24" opacity=".2"></svg:path><svg:path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M80 192l12-16h72l12 16Zm144 0h-28l-21.6-28.8a8 8 0 0 0-6.4-3.2H88a8 8 0 0 0-6.4 3.2L60 192H32V64h192zM176 80H80a32 32 0 0 0 0 64h96a32 32 0 0 0 0-64m-27.7 16a31.92 31.92 0 0 0 0 32h-40.6a31.92 31.92 0 0 0 0-32ZM64 112a16 16 0 1 1 16 16a16 16 0 0 1-16-16m112 16a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhCassetteTapeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCastleTurretDuotoneIcon],svg[ph-castle-turret-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 48v44.69a8 8 0 0 1-2.34 5.65L192 112v112h-40v-56a24 24 0 0 0-48 0v56H64V112L50.34 98.34A8 8 0 0 1 48 92.69V48a8 8 0 0 1 8-8h24v32h32V40h32v32h32V40h24a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 216h-16V115.31L211.31 104A15.86 15.86 0 0 0 216 92.69V48a16 16 0 0 0-16-16h-24a8 8 0 0 0-8 8v24h-16V40a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v24H88V40a8 8 0 0 0-8-8H56a16 16 0 0 0-16 16v44.69A15.86 15.86 0 0 0 44.69 104L56 115.31V216H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M69.66 106.34L56 92.69V48h16v24a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V48h16v24a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V48h16v44.69l-13.66 13.65A8 8 0 0 0 184 112v104h-24v-48a32 32 0 0 0-64 0v48H72V112a8 8 0 0 0-2.34-5.66M144 216h-32v-48a16 16 0 0 1 32 0Z"></svg:path></svg:g>`,
})
export class PhCastleTurretDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCatDuotoneIcon],svg[ph-cat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v88c0 48.6-43 88-96 88s-96-39.4-96-88V48a8 8 0 0 1 13.66-5.66L67.6 67.6a102.87 102.87 0 0 1 120.8 0l21.94-25.24A8 8 0 0 1 224 48" opacity=".2"></svg:path><svg:path d="M96 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m76-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m60-80v88c0 52.93-46.65 96-104 96S24 188.93 24 136V48a16 16 0 0 1 27.31-11.31c.14.14.26.27.38.41L69 57a111.22 111.22 0 0 1 118.1 0l17.21-19.9c.12-.14.24-.27.38-.41A16 16 0 0 1 232 48m-16 0l-21.56 24.8a8 8 0 0 1-10.81 1.2A89 89 0 0 0 168 64.75V88a8 8 0 1 1-16 0V59.05a97.4 97.4 0 0 0-16-2.72V88a8 8 0 1 1-16 0V56.33a97.4 97.4 0 0 0-16 2.72V88a8 8 0 1 1-16 0V64.75A89 89 0 0 0 72.37 74a8 8 0 0 1-10.81-1.17L40 48v88c0 41.66 35.21 76 80 79.67v-20.36l-13.66-13.66a8 8 0 0 1 11.32-11.31L128 180.68l10.34-10.34a8 8 0 0 1 11.32 11.31L136 195.31v20.36c44.79-3.69 80-38 80-79.67Z"></svg:path></svg:g>`,
})
export class PhCatDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalFullDuotoneIcon],svg[ph-cell-signal-full-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v160a8 8 0 0 1-8 8H32a8 8 0 0 1-5.66-13.66l160-160A8 8 0 0 1 200 40" opacity=".2"></svg:path><svg:path d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M192 200H32L192 40Z"></svg:path></svg:g>`,
})
export class PhCellSignalFullDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalHighDuotoneIcon],svg[ph-cell-signal-high-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 60.7V208H32a8 8 0 0 1-5.66-13.66Z" opacity=".2"></svg:path><svg:path d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M152 80v120H32Zm40 120h-24V64l24-24Z"></svg:path></svg:g>`,
})
export class PhCellSignalHighDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalLowDuotoneIcon],svg[ph-cell-signal-low-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 140.7V208H32a8 8 0 0 1-5.66-13.66Z" opacity=".2"></svg:path><svg:path d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M72 160v40H32Zm120 40H88v-56L192 40Z"></svg:path></svg:g>`,
})
export class PhCellSignalLowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalMediumDuotoneIcon],svg[ph-cell-signal-medium-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M120 100.7V208H32a8 8 0 0 1-5.66-13.66Z" opacity=".2"></svg:path><svg:path d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M112 120v80H32Zm80 80h-64v-96l64-64Z"></svg:path></svg:g>`,
})
export class PhCellSignalMediumDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalNoneDuotoneIcon],svg[ph-cell-signal-none-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.12 25.23a16 16 0 0 0-17.43 3.47l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a16 16 0 0 0-9.88-14.77M192 200H32L192 40Z"></svg:path>`,
})
export class PhCellSignalNoneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalSlashDuotoneIcon],svg[ph-cell-signal-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v160a8 8 0 0 1-8 8H32a8 8 0 0 1-5.66-13.66l160-160A8 8 0 0 1 200 40" opacity=".2"></svg:path><svg:path d="m213.92 210.62l-160-176a8 8 0 1 0-11.85 10.76l58.07 63.86l-79.45 79.44A16 16 0 0 0 32 216h160a16.1 16.1 0 0 0 4.56-.68l5.52 6.06a8 8 0 1 0 11.84-10.76M32 200l78.9-78.89L182.64 200Zm96.18-107.49a8 8 0 0 1 0-11.31l52.51-52.5A16 16 0 0 1 208 40v119.63a8 8 0 0 1-16 0V40l-52.5 52.51a8 8 0 0 1-11.32 0"></svg:path></svg:g>`,
})
export class PhCellSignalSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalXDuotoneIcon],svg[ph-cell-signal-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v120l-45.66 45.66a8 8 0 0 1-5.65 2.34H32a8 8 0 0 1-5.66-13.66l160-160A8 8 0 0 1 200 40" opacity=".2"></svg:path><svg:path d="M213.66 194.34a8 8 0 0 1-11.32 11.32L184 187.31l-18.35 18.35a8 8 0 0 1-11.31-11.32L172.68 176l-18.34-18.35a8 8 0 0 1 11.31-11.31L184 164.68l18.34-18.34a8 8 0 0 1 11.32 11.31L195.31 176ZM120 200H32L192 40v72a8 8 0 0 0 16 0V40a16 16 0 0 0-27.31-11.32l-160 160A16 16 0 0 0 32 216h88a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhCellSignalXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellTowerDuotoneIcon],svg[ph-cell-tower-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 88a72 72 0 0 1-39.8 64.4L128 88l-32.2 64.4A72 72 0 1 1 200 88" opacity=".2"></svg:path><svg:path d="M135.16 84.42a8 8 0 0 0-14.32 0l-72 144a8 8 0 0 0 14.31 7.16L77 208h102.1l13.79 27.58A8 8 0 0 0 200 240a8 8 0 0 0 7.15-11.58ZM128 105.89L155.06 160h-54.12ZM85 192l8-16h70.1l8 16Zm74.54-98.26a32 32 0 1 0-63 0a8 8 0 1 1-15.74 2.85a48 48 0 1 1 94.46 0a8 8 0 0 1-7.86 6.58a9 9 0 0 1-1.43-.13a8 8 0 0 1-6.48-9.3Zm-95.39 42.47a80 80 0 1 1 127.7 0a8 8 0 0 1-12.76-9.65a64 64 0 1 0-102.18 0a8 8 0 0 1-12.76 9.65"></svg:path></svg:g>`,
})
export class PhCellTowerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCertificateDuotoneIcon],svg[ph-certificate-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v34.06a44 44 0 1 0-56 67.88V192H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M128 136a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m-8-40H72a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m112 65.47V224a8 8 0 0 1-12 7l-24-13.74L172 231a8 8 0 0 1-12-7v-24H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16v30.53a51.88 51.88 0 0 1 0 74.94M160 184v-22.53A52 52 0 0 1 216 76V56H40v128Zm56-12a51.88 51.88 0 0 1-40 0v38.22l16-9.16a8 8 0 0 1 7.94 0l16 9.16Zm16-48a36 36 0 1 0-36 36a36 36 0 0 0 36-36"></svg:path></svg:g>`,
})
export class PhCertificateDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChairDuotoneIcon],svg[ph-chair-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M56 88V40a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8m152 56H48a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M208 136h-32v-32h16a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h16v32H48a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h8v40a8 8 0 0 0 16 0v-40h112v40a8 8 0 0 0 16 0v-40h8a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16M64 40h128v48H64Zm32 64h64v32H96Zm112 64H48v-16h160z"></svg:path></svg:g>`,
})
export class PhChairDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardDuotoneIcon],svg[ph-chalkboard-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 80v88h-72v32H64V80Z" opacity=".2"></svg:path><svg:path d="M240 192h-8V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v136h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 56h176v136h-16v-24a8 8 0 0 0-8-8h-72a8 8 0 0 0-8 8v24H72V88h112v48a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8v112H40Zm144 136h-56v-16h56Z"></svg:path></svg:g>`,
})
export class PhChalkboardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardSimpleDuotoneIcon],svg[ph-chalkboard-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v112h-64v32H32V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M240 192h-8v-24a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v24H40V56h176v80a8 8 0 0 0 16 0V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v136h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-72-16h48v16h-48Z"></svg:path></svg:g>`,
})
export class PhChalkboardSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardTeacherDuotoneIcon],svg[ph-chalkboard-teacher-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 80v96h-88a32 32 0 1 0-32-32h-8V80Z" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h13.39a8 8 0 0 0 7.23-4.57a48 48 0 0 1 86.76 0a8 8 0 0 0 7.23 4.57H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M80 144a24 24 0 1 1 24 24a24 24 0 0 1-24-24m136 56h-56.57a64.4 64.4 0 0 0-28.83-26.16a40 40 0 1 0-53.2 0A64.4 64.4 0 0 0 48.57 200H40V56h176ZM56 96V80a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h8V88H72v8a8 8 0 0 1-16 0"></svg:path></svg:g>`,
})
export class PhChalkboardTeacherDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChampagneDuotoneIcon],svg[ph-champagne-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M120 176c-44.7 0-43.7-57.87-35.8-104h71.6c7.9 46.13 8.9 104-35.8 104" opacity=".2"></svg:path><svg:path d="M149.91 13.53A8 8 0 0 0 142.3 8H97.71a8 8 0 0 0-7.61 5.53a451 451 0 0 0-14.21 59.7c-7.26 44.25-4.35 75.76 8.65 93.66A40 40 0 0 0 112 183.42V232H96a8 8 0 1 0 0 16h48a8 8 0 0 0 0-16h-16v-48.58a39.94 39.94 0 0 0 27.46-16.53c13-17.9 15.92-49.41 8.66-93.66a451 451 0 0 0-14.21-59.7M103.59 24h32.83c3.06 10.19 6.77 24.42 9.8 40H93.8c3.03-15.58 6.73-29.81 9.79-40m38.93 133.48C137.38 164.56 130 168 120 168s-17.37-3.44-22.51-10.51C85.9 141.54 86.55 110 91 80h58c4.47 30 5.12 61.52-6.48 77.48M232 52a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-48-32a12 12 0 1 1 12 12a12 12 0 0 1-12-12m24 80a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhChampagneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChargingStationDuotoneIcon],svg[ph-charging-station-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 56v160H56V56a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M134.62 123.51a8 8 0 0 1 .81 7.46l-16 40a8 8 0 0 1-14.86-5.97l11.61-29H96a8 8 0 0 1-7.43-11l16-40a8 8 0 1 1 14.86 6l-11.61 29H128a8 8 0 0 1 6.62 3.51M248 86.63V168a24 24 0 0 1-48 0v-40a8 8 0 0 0-8-8h-16v88h16a8 8 0 0 1 0 16H32a8 8 0 0 1 0-16h16V56a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v48h16a24 24 0 0 1 24 24v40a8 8 0 0 0 16 0V86.63a8 8 0 0 0-2.34-5.63l-19.32-19.34a8 8 0 0 1 11.32-11.32L241 69.66a23.85 23.85 0 0 1 7 16.97M160 208V56a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v152Z"></svg:path></svg:g>`,
})
export class PhChargingStationDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarDuotoneIcon],svg[ph-chart-bar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40v168h-56V40Z" opacity=".2"></svg:path><svg:path d="M224 200h-8V40a8 8 0 0 0-8-8h-56a8 8 0 0 0-8 8v40H96a8 8 0 0 0-8 8v40H48a8 8 0 0 0-8 8v64h-8a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16M160 48h40v152h-40Zm-56 48h40v104h-40Zm-48 48h32v56H56Z"></svg:path></svg:g>`,
})
export class PhChartBarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarHorizontalDuotoneIcon],svg[ph-chart-bar-horizontal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 104v48H48v-48Z" opacity=".2"></svg:path><svg:path d="M224 96h-40V56a8 8 0 0 0-8-8H56v-8a8 8 0 0 0-16 0v176a8 8 0 0 0 16 0v-8h88a8 8 0 0 0 8-8v-40h72a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8m-56-32v32H56V64Zm-32 128H56v-32h80Zm80-48H56v-32h160Z"></svg:path></svg:g>`,
})
export class PhChartBarHorizontalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartDonutDuotoneIcon],svg[ph-chart-donut-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 0 1-96 96v-56a40 40 0 0 0 0-80V32a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8a32 32 0 1 1-27.72 16a8 8 0 0 0-2.93-10.93l-48.5-28A8 8 0 0 0 37.92 76A104 104 0 1 0 128 24M48.09 91.1L83 111.26A48.1 48.1 0 0 0 80 128c0 1.53.08 3 .22 4.52L41.28 143a88.16 88.16 0 0 1 6.81-51.9m-2.67 67.31l39-10.44A48.1 48.1 0 0 0 120 175.32v40.31a88.2 88.2 0 0 1-74.58-57.22M136 215.63v-40.31a48 48 0 0 0 0-94.65V40.36a88 88 0 0 1 0 175.27"></svg:path></svg:g>`,
})
export class PhChartDonutDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineDownDuotoneIcon],svg[ph-chart-line-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v144H32V48h176a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v12.69l56 56l26.34-26.35a8 8 0 0 1 11.32 0L192 148.69V128a8 8 0 0 1 16 0v40a7 7 0 0 1 0 .8c0 .11 0 .21-.05.32s0 .3-.07.46a3 3 0 0 1-.09.37c0 .13-.06.26-.1.39s-.08.23-.12.35l-.14.39l-.15.31c-.06.13-.12.27-.19.4s-.11.18-.16.28l-.24.39l-.21.28l-.26.35c-.11.14-.24.27-.36.4l-.16.18l-.17.15a5 5 0 0 1-.42.37a4 4 0 0 1-.32.25l-.3.22l-.38.23a3 3 0 0 1-.3.17l-.37.19l-.34.15l-.36.13a3 3 0 0 1-.38.13l-.36.1c-.14 0-.26.07-.4.09l-.42.07l-.35.05a7 7 0 0 1-.79 0H160a8 8 0 0 1 0-16h20.69L128 107.31l-26.34 26.35a8 8 0 0 1-11.32 0L40 83.31V200h184a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhChartLineDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineDuotoneIcon],svg[ph-chart-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v144H32V48h176a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v94.37L90.73 98a8 8 0 0 1 10.07-.38l58.81 44.11L218.73 90a8 8 0 1 1 10.54 12l-64 56a8 8 0 0 1-10.07.38l-58.81-44.09L40 163.63V200h184a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhChartLineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineUpDuotoneIcon],svg[ph-chart-line-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v144H32V48h176a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v108.69l50.34-50.35a8 8 0 0 1 11.32 0L128 132.69L180.69 80H160a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8v40a8 8 0 0 1-16 0V91.31l-58.34 58.35a8 8 0 0 1-11.32 0L96 123.31l-56 56V200h184a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhChartLineUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieDuotoneIcon],svg[ph-chart-pie-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32v96l-83.14 48A96 96 0 0 1 128 32" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m71.87 53.27L136 114.14V40.37a88 88 0 0 1 63.87 36.9M120 40.37v83l-71.89 41.5A88 88 0 0 1 120 40.37M128 216a88 88 0 0 1-71.87-37.27l151.76-87.61A88 88 0 0 1 128 216"></svg:path></svg:g>`,
})
export class PhChartPieDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieSliceDuotoneIcon],svg[ph-chart-pie-slice-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M96 37.5v72l-62.4 36A96 96 0 0 1 96 37.5" opacity=".2"></svg:path><svg:path d="M100 116.43a8 8 0 0 0 4-6.93v-72A8 8 0 0 0 93.34 30a104.06 104.06 0 0 0-67.61 117a8 8 0 0 0 4.52 5.81a7.9 7.9 0 0 0 3.35.74a8 8 0 0 0 4-1.07ZM88 49.62v55.26l-47.88 27.63C40 131 40 129.48 40 128a88.12 88.12 0 0 1 48-78.38M128 24a8 8 0 0 0-8 8v91.82l-78.81 45.91a8 8 0 0 0-2.87 11A104 104 0 1 0 128 24m0 192a88.47 88.47 0 0 1-71.49-36.68l75.52-44a8 8 0 0 0 4-6.92V40.36A88 88 0 0 1 128 216"></svg:path></svg:g>`,
})
export class PhChartPieSliceDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPolarDuotoneIcon],svg[ph-chart-polar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 128a56 56 0 1 1-56-56a56 56 0 0 1 56 56" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m87.63 96h-24.15A64.1 64.1 0 0 0 136 64.52V40.37A88.13 88.13 0 0 1 215.63 120M120 120H80.68A48.09 48.09 0 0 1 120 80.68Zm0 16v39.32A48.09 48.09 0 0 1 80.68 136Zm16 0h39.32A48.09 48.09 0 0 1 136 175.32Zm0-16V80.68A48.09 48.09 0 0 1 175.32 120Zm-16-79.63v24.15A64.1 64.1 0 0 0 64.52 120H40.37A88.13 88.13 0 0 1 120 40.37M40.37 136h24.15A64.1 64.1 0 0 0 120 191.48v24.15A88.13 88.13 0 0 1 40.37 136M136 215.63v-24.15A64.1 64.1 0 0 0 191.48 136h24.15A88.13 88.13 0 0 1 136 215.63"></svg:path></svg:g>`,
})
export class PhChartPolarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartScatterDuotoneIcon],svg[ph-chart-scatter-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v144H32V48h176a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v152h184a8 8 0 0 1 8 8m-100-48a12 12 0 1 0-12-12a12 12 0 0 0 12 12m-24-56a12 12 0 1 0-12-12a12 12 0 0 0 12 12m-32 72a12 12 0 1 0-12-12a12 12 0 0 0 12 12m96-48a12 12 0 1 0-12-12a12 12 0 0 0 12 12m24-40a12 12 0 1 0-12-12a12 12 0 0 0 12 12m-20 76a12 12 0 1 0 12-12a12 12 0 0 0-12 12"></svg:path></svg:g>`,
})
export class PhChartScatterDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredDotsDuotoneIcon],svg[ph-chat-centered-dots-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v128a8 8 0 0 1-8 8h-65.07l-16 28a8 8 0 0 1-13.9 0l-16-28H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M116 120a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-32 12a12 12 0 1 0-12-12a12 12 0 0 0 12 12m88 0a12 12 0 1 0-12-12a12 12 0 0 0 12 12m60-76v128a16 16 0 0 1-16 16h-60.43l-13.68 23.94a16 16 0 0 1-27.78 0L100.43 200H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 0H40v128h65.07a8 8 0 0 1 7 4l16 28l16-28a8 8 0 0 1 7-4H216Z"></svg:path></svg:g>`,
})
export class PhChatCenteredDotsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredDuotoneIcon],svg[ph-chat-centered-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v128a8 8 0 0 1-8 8h-65.07l-16 28a8 8 0 0 1-13.9 0l-16-28H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.43l13.68 23.94a16 16 0 0 0 27.78 0L155.57 200H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 144h-65.07a8 8 0 0 0-7 4l-16 28l-16-28a8 8 0 0 0-7-4H40V56h176Z"></svg:path></svg:g>`,
})
export class PhChatCenteredDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredSlashDuotoneIcon],svg[ph-chat-centered-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v128a8 8 0 0 1-8 8h-65.07l-16 28a8 8 0 0 1-13.9 0l-16-28H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M53.92 34.62A8 8 0 0 0 40 40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.43l13.68 23.94a16 16 0 0 0 27.78 0L155.57 200h27.07l19.44 21.38a8 8 0 1 0 11.84-10.76Zm97 149.38a8 8 0 0 0-7 4l-16 28l-16-28a8 8 0 0 0-7-4H40V56h11.73L168.1 184ZM232 56v130a8 8 0 0 1-16 0V56H98.52a8 8 0 1 1 0-16H216a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhChatCenteredSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredTextDuotoneIcon],svg[ph-chat-centered-text-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v128a8 8 0 0 1-8 8h-65.07l-16 28a8 8 0 0 1-13.9 0l-16-28H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M88 104a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m8 40h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m136-88v128a16 16 0 0 1-16 16h-60.43l-13.68 23.94a16 16 0 0 1-27.78 0L100.43 200H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 0H40v128h65.07a8 8 0 0 1 7 4l16 28l16-28a8 8 0 0 1 7-4H216Z"></svg:path></svg:g>`,
})
export class PhChatCenteredTextDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleDotsDuotoneIcon],svg[ph-chat-circle-dots-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 0 1-144.07 83.11l-37.39 12.47a8 8 0 0 1-10.12-10.12l12.47-37.39A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-4-1.08a7.9 7.9 0 0 0-2.53.42L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216m12-88a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhChatCircleDotsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleDuotoneIcon],svg[ph-chat-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 0 1-144.07 83.11l-37.39 12.47a8 8 0 0 1-10.12-10.12l12.47-37.39A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216"></svg:path></svg:g>`,
})
export class PhChatCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleSlashDuotoneIcon],svg[ph-chat-circle-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 0 1-144.07 83.11l-37.39 12.47a8 8 0 0 1-10.12-10.12l12.47-37.39A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l10.25 11.28a104.06 104.06 0 0 0-16.15 120.22l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35a104 104 0 0 0 112.7-9.73l10.26 11.29a8 8 0 1 0 11.84-10.76ZM128 216a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.66L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 0 1 63.14 68.54L181 198.23A87.77 87.77 0 0 1 128 216m104-88a104.15 104.15 0 0 1-12.38 49.25a8 8 0 0 1-14.09-7.58A88 88 0 0 0 93.88 46.86a8 8 0 0 1-6.21-14.75A104.06 104.06 0 0 1 232 128"></svg:path></svg:g>`,
})
export class PhChatCircleSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleTextDuotoneIcon],svg[ph-chat-circle-text-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 0 1-144.07 83.11l-37.39 12.47a8 8 0 0 1-10.12-10.12l12.47-37.39A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-4-1.08a7.9 7.9 0 0 0-2.53.42L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216m40-104a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhChatCircleTextDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatDotsDuotoneIcon],svg[ph-chat-dots-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v128a8 8 0 0 1-8 8H80l-34.85 30.11A8 8 0 0 1 32 224V64a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M116 128a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-32 12a12 12 0 1 0-12-12a12 12 0 0 0 12 12m88 0a12 12 0 1 0-12-12a12 12 0 0 0 12 12m60-76v128a16 16 0 0 1-16 16H83l-32.6 28.16l-.09.07A15.9 15.9 0 0 1 40 240a16.1 16.1 0 0 1-6.8-1.52A15.85 15.85 0 0 1 24 224V64a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 0H40v160l34.77-30a8 8 0 0 1 5.23-2h136Z"></svg:path></svg:g>`,
})
export class PhChatDotsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatDuotoneIcon],svg[ph-chat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v128a8 8 0 0 1-8 8H80l-34.85 30.11A8 8 0 0 1 32 224V64a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.9 15.9 0 0 0 10.25-3.78l.09-.07L83 208h133a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H80a8 8 0 0 0-5.23 1.95L40 224V64h176Z"></svg:path></svg:g>`,
})
export class PhChatDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatSlashDuotoneIcon],svg[ph-chat-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v128a8 8 0 0 1-8 8H80l-34.85 30.11A8 8 0 0 1 32 224V64a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76L44.46 48H40a16 16 0 0 0-16 16v160a15.85 15.85 0 0 0 9.24 14.5A16.1 16.1 0 0 0 40 240a15.94 15.94 0 0 0 10.26-3.78l.08-.07L83 208h106.92l12.16 13.38a8 8 0 1 0 11.84-10.76ZM80 192a8 8 0 0 0-5.23 1.95L40 224V64h19l116.37 128ZM232 64v122a8 8 0 0 1-16 0V64H105.79a8 8 0 0 1 0-16H216a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhChatSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropDotsDuotoneIcon],svg[ph-chat-teardrop-dots-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 124a92 92 0 0 1-92 92H48a8 8 0 0 1-8-8v-84a92 92 0 0 1 92-92a92 92 0 0 1 92 92" opacity=".2"></svg:path><svg:path d="M132 24A100.11 100.11 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100 100 0 0 0 0-200m0 184H48v-84a84 84 0 1 1 84 84m12-80a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhChatTeardropDotsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropDuotoneIcon],svg[ph-chat-teardrop-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 124a92 92 0 0 1-92 92H48a8 8 0 0 1-8-8v-84a92 92 0 0 1 92-92a92 92 0 0 1 92 92" opacity=".2"></svg:path><svg:path d="M132 24A100.11 100.11 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100 100 0 0 0 0-200m0 184H48v-84a84 84 0 1 1 84 84"></svg:path></svg:g>`,
})
export class PhChatTeardropDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropSlashDuotoneIcon],svg[ph-chat-teardrop-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 124a92 92 0 0 1-92 92H48a8 8 0 0 1-8-8v-84a92 92 0 0 1 92-92a92 92 0 0 1 92 92" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l13.18 14.5A99.4 99.4 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100.33 100.33 0 0 0 56.53-17.53l13.55 14.91a8 8 0 1 0 11.84-10.76ZM132 208H48v-84a83.46 83.46 0 0 1 18.15-52.15l111.51 122.66A83 83 0 0 1 132 208m100-84a99.87 99.87 0 0 1-14.35 51.65a8 8 0 0 1-13.7-8.28A84 84 0 0 0 95.66 48.25a8 8 0 0 1-6.94-14.42A100 100 0 0 1 232 124"></svg:path></svg:g>`,
})
export class PhChatTeardropSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropTextDuotoneIcon],svg[ph-chat-teardrop-text-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 124a92 92 0 0 1-92 92H48a8 8 0 0 1-8-8v-84a92 92 0 0 1 92-92a92 92 0 0 1 92 92" opacity=".2"></svg:path><svg:path d="M172 112a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h68a8 8 0 0 1 8 8m-8 24H96a8 8 0 0 0 0 16h68a8 8 0 0 0 0-16m68-12a100.11 100.11 0 0 1-100 100H48a16 16 0 0 1-16-16v-84a100 100 0 0 1 200 0m-16 0a84 84 0 0 0-168 0v84h84a84.09 84.09 0 0 0 84-84"></svg:path></svg:g>`,
})
export class PhChatTeardropTextDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTextDuotoneIcon],svg[ph-chat-text-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v128a8 8 0 0 1-8 8H80l-34.85 30.11A8 8 0 0 1 32 224V64a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 48H40a16 16 0 0 0-16 16v160a15.85 15.85 0 0 0 9.24 14.5A16.1 16.1 0 0 0 40 240a15.9 15.9 0 0 0 10.25-3.78l.09-.07L83 208h133a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H80a8 8 0 0 0-5.23 1.95L40 224V64h176ZM88 112a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m0 32a8 8 0 0 1 8-8h64a8 8 0 1 1 0 16H96a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhChatTextDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsCircleDuotoneIcon],svg[ph-chats-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M231.66 213.73a8 8 0 0 1-9.93 9.93L194 215.5a72.05 72.05 0 0 1-101.94-39.61c1.31.07 2.62.11 3.94.11a72 72 0 0 0 67.93-95.88A72 72 0 0 1 223.5 186Z" opacity=".2"></svg:path><svg:path d="M232.07 186.76a80 80 0 0 0-62.5-114.17a80 80 0 1 0-145.64 66.17l-7.27 24.71a16 16 0 0 0 19.87 19.87l24.71-7.27a80.4 80.4 0 0 0 25.18 7.35a80 80 0 0 0 108.34 40.65l24.71 7.27a16 16 0 0 0 19.87-19.86ZM62 159.5a8.3 8.3 0 0 0-2.26.32L32 168l8.17-27.76a8 8 0 0 0-.63-6A64 64 0 1 1 65.8 160.5a8 8 0 0 0-3.8-1m153.79 28.73L224 216l-27.76-8.17a8 8 0 0 0-6 .63a64.05 64.05 0 0 1-85.87-24.88a79.93 79.93 0 0 0 70.33-93.87a64 64 0 0 1 41.75 92.48a8 8 0 0 0-.63 6.04Z"></svg:path></svg:g>`,
})
export class PhChatsCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsDuotoneIcon],svg[ph-chats-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 96v128l-39.58-32H88a8 8 0 0 1-8-8v-40h88a8 8 0 0 0 8-8V88h40a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 80h-32V48a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v128a8 8 0 0 0 13 6.22L72 154v30a16 16 0 0 0 16 16h93.59L219 230.22a8 8 0 0 0 5 1.78a8 8 0 0 0 8-8V96a16 16 0 0 0-16-16M66.55 137.78L40 159.25V48h128v88H71.58a8 8 0 0 0-5.03 1.78M216 207.25l-26.55-21.47a8 8 0 0 0-5-1.78H88v-32h80a16 16 0 0 0 16-16V96h32Z"></svg:path></svg:g>`,
})
export class PhChatsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsTeardropDuotoneIcon],svg[ph-chats-teardrop-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 152v64a8 8 0 0 1-8 8h-64a72 72 0 0 1-67.9-48H96a72 72 0 0 0 72-72a71.8 71.8 0 0 0-4.07-23.88A72 72 0 0 1 232 152" opacity=".2"></svg:path><svg:path d="M169.57 72.59A80 80 0 0 0 16 104v64a16 16 0 0 0 16 16h54.67A80.15 80.15 0 0 0 160 232h64a16 16 0 0 0 16-16v-64a80 80 0 0 0-70.43-79.41M32 104a64 64 0 1 1 64 64H32Zm192 112h-64a64.14 64.14 0 0 1-55.68-32.43a79.93 79.93 0 0 0 70.38-93.86A64 64 0 0 1 224 152Z"></svg:path></svg:g>`,
})
export class PhChatsTeardropDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckCircleDuotoneIcon],svg[ph-check-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></svg:path></svg:g>`,
})
export class PhCheckCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckDuotoneIcon],svg[ph-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m205.66 85.66l-96 96a8 8 0 0 1-11.32 0l-40-40a8 8 0 0 1 11.32-11.32L104 164.69l90.34-90.35a8 8 0 0 1 11.32 11.32"></svg:path></svg:g>`,
})
export class PhCheckDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckFatDuotoneIcon],svg[ph-check-fat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32" opacity=".2"></svg:path><svg:path d="m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z"></svg:path></svg:g>`,
})
export class PhCheckFatDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareDuotoneIcon],svg[ph-check-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 160V48H48v160z"></svg:path></svg:g>`,
})
export class PhCheckSquareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareOffsetDuotoneIcon],svg[ph-check-square-offset-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H64l-24-24V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M224 48v160a16 16 0 0 1-16 16h-72a8 8 0 0 1 0-16h72V48H48v96a8 8 0 0 1-16 0V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-98.34 106.34a8 8 0 0 0-11.32 0L64 204.69l-18.34-18.35a8 8 0 0 0-11.32 11.32l24 24a8 8 0 0 0 11.32 0l56-56a8 8 0 0 0 0-11.32"></svg:path></svg:g>`,
})
export class PhCheckSquareOffsetDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckerboardDuotoneIcon],svg[ph-checkerboard-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M40 128h88v88H48a8 8 0 0 1-8-8Zm168-88h-80v88h88V48a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 88h-72V48h72Zm-88-72v72H48V48Zm-72 88h72v72H48Zm160 72h-72v-72h72z"></svg:path></svg:g>`,
})
export class PhCheckerboardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChecksDuotoneIcon],svg[ph-checks-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 64v128a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m149.61 85.71l-89.6 88a8 8 0 0 1-11.22 0L10.39 136a8 8 0 1 1 11.22-11.41l32.79 32.2l84-82.5a8 8 0 1 1 11.22 11.42Zm96.1-11.32a8 8 0 0 0-11.32-.1l-84 82.5l-18.83-18.5a8 8 0 0 0-11.21 11.42l24.43 24a8 8 0 0 0 11.22 0l89.6-88a8 8 0 0 0 .11-11.32"></svg:path></svg:g>`,
})
export class PhChecksDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheersDuotoneIcon],svg[ph-cheers-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m75.23 62.81l51.69 12.92a332 332 0 0 1-8 52.54a32 32 0 1 1-61.82-16.56a307.7 307.7 0 0 1 18.13-48.9m123.67 72.9a311 311 0 0 0-19-50.69l-51.41 12.86c1.13 16.36 3.57 35.67 8.59 54.39a32 32 0 1 0 61.82-16.56" opacity=".2"></svg:path><svg:path d="m213.93 213.94l-17.65 4.73l-10.42-38.89a40.06 40.06 0 0 0 20.77-46.14c-12.6-47-38.78-88.22-39.89-89.95a8 8 0 0 0-8.68-3.45l-21.86 5.47c0-8.25-.18-13.43-.21-14.08a8 8 0 0 0-6.05-7.39l-32-8a8 8 0 0 0-8.68 3.45c-1.11 1.73-27.29 42.93-39.89 90a40.06 40.06 0 0 0 20.77 46.14l-10.42 38.84l-17.65-4.73a8 8 0 0 0-4.14 15.46l48 12.86a8.2 8.2 0 0 0 2.07.27a8 8 0 0 0 2.07-15.73l-14.9-4l10.42-38.89c.81.05 1.61.08 2.41.08a40.12 40.12 0 0 0 37-24.88c1.18 6.37 2.6 12.82 4.31 19.22A40.08 40.08 0 0 0 168 184c.8 0 1.6 0 2.41-.08l10.42 38.89l-14.9 4a8 8 0 0 0 2.07 15.72a8.2 8.2 0 0 0 2.07-.27l48-12.86a8 8 0 0 0-4.14-15.46M156.22 57.19c2.78 4.7 7.23 12.54 12.2 22.46L136 87.77c-.42-10-.38-18.25-.25-23.79c0-.56.05-1.12.08-1.68Zm-56.44-24l20.37 5.09c.06 4.28 0 10.67-.21 18.47c-.06 1.21-.16 3.19-.23 5.84c0 1-.1 2-.16 3l-32.86-8.16C92 46.67 96.84 38.16 99.78 33.19m11.39 93.09a24 24 0 0 1-46.34-12.5a291 291 0 0 1 15-41.59l38.58 9.64a314 314 0 0 1-7.24 44.45m33.64 23.92A274 274 0 0 1 137 104l38.41-9.6a293 293 0 0 1 15.75 43.39a24 24 0 1 1-46.36 12.42Zm40-106.62a8 8 0 0 1 3.58-10.74l16-8a8 8 0 1 1 7.16 14.32l-16 8a8 8 0 0 1-10.74-3.58M232 72a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8M32.84 20.42a8 8 0 0 1 10.74-3.58l16 8a8 8 0 0 1-7.16 14.32l-16-8a8 8 0 0 1-3.58-10.74M40 72H24a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16"></svg:path></svg:g>`,
})
export class PhCheersDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheeseDuotoneIcon],svg[ph-cheese-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 40L24 88v24h8a24 24 0 0 1 24 23.54C56.25 149 44.91 160 31.46 160H24v32h56v-8a32 32 0 0 1 64 0v8h80a8 8 0 0 0 8-8V88a48 48 0 0 0-48-48m-16 96a32 32 0 0 1-27.72-48h55.44A32 32 0 0 1 168 136" opacity=".2"></svg:path><svg:path d="M184 32a7.8 7.8 0 0 0-2.3.34l-160 48A8 8 0 0 0 16 88v24a8 8 0 0 0 8 8h8a16.08 16.08 0 0 1 16 15.69A15.6 15.6 0 0 1 43.42 147a16.87 16.87 0 0 1-12 5.05H24a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h200a16 16 0 0 0 16-16V88a56.06 56.06 0 0 0-56-56m1.12 16a40.06 40.06 0 0 1 38.07 32H78.51Zm6.88 56a24 24 0 1 1-46.62-8h45.24a23.9 23.9 0 0 1 1.38 8M88 184a24 24 0 0 1 48 0Zm136 0h-72a40 40 0 0 0-80 0H32v-16a33 33 0 0 0 22.84-9.85A31.4 31.4 0 0 0 64 135.38A32.15 32.15 0 0 0 32 104v-8h96.81a40 40 0 1 0 78.38 0H224Z"></svg:path></svg:g>`,
})
export class PhCheeseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChefHatDuotoneIcon],svg[ph-chef-hat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 112a48 48 0 0 1-48 48H72a48 48 0 1 1 10.35-94.88a48 48 0 0 1 91.28 0A48 48 0 0 1 232 112" opacity=".2"></svg:path><svg:path d="M240 112a56.06 56.06 0 0 0-56-56c-1.77 0-3.54.1-5.29.26a56 56 0 0 0-101.42 0C75.54 56.1 73.77 56 72 56a56 56 0 0 0-24 106.59V208a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-45.41A56.09 56.09 0 0 0 240 112m-48 96H64v-40.58a55.5 55.5 0 0 0 8 .58h112a55.5 55.5 0 0 0 8-.58Zm-8-56h-13.75l5.51-22.06a8 8 0 0 0-15.52-3.88L153.75 152H136v-24a8 8 0 0 0-16 0v24h-17.75l-6.49-25.94a8 8 0 1 0-15.52 3.88L85.75 152H72a40 40 0 0 1 0-80h.58a55 55 0 0 0-.58 8a8 8 0 0 0 16 0a40 40 0 0 1 80 0a8 8 0 0 0 16 0a55 55 0 0 0-.58-8h.58a40 40 0 0 1 0 80"></svg:path></svg:g>`,
})
export class PhChefHatDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCherriesDuotoneIcon],svg[ph-cherries-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 144a64 64 0 0 1-99.78 53.07V197a64 64 0 1 1-16.39-90A64 64 0 0 1 240 144" opacity=".2"></svg:path><svg:path d="M176 72a72 72 0 0 0-7.76.43a91.8 91.8 0 0 0-21.62-25.11c-37.84-30.53-89.57-23.55-91.75-23.24a8 8 0 0 0-3.31 14.58c17.5 11.66 25.51 31 28.85 49.74A72 72 0 1 0 142 207.5A72 72 0 1 0 176 72M76 39.37c16.67.72 41.24 4.78 60.64 20.48a75.3 75.3 0 0 1 15 16.4A72.2 72.2 0 0 0 121.9 96.5a71.5 71.5 0 0 0-25.23-8C93.54 68.59 86.56 52 76 39.37M88 216a56 56 0 0 1-5.76-111.7a176.5 176.5 0 0 1-1 31.08c-7.58-1.43-11.35-4.85-11.55-5a8 8 0 0 0-11.32 11.32C59.4 142.71 69.2 152 87.92 152h.25c18.66-.05 28.43-9.28 29.49-10.33a8 8 0 0 0-11.32-11.32a22.3 22.3 0 0 1-8.93 4.44a190.4 190.4 0 0 0 .93-29.79A56 56 0 0 1 88 216m57-99.89a72.3 72.3 0 0 0-9.82-10.42a56.15 56.15 0 0 1 24.22-15.16a110.8 110.8 0 0 1 7.6 28.35c-6.09-1.6-9.16-4.37-9.33-4.54a8 8 0 0 0-12.67 1.77M176 200a55.76 55.76 0 0 1-24.69-5.73a71.83 71.83 0 0 0 2.5-63.42a47.5 47.5 0 0 0 21.86 5.15h.33c18.77 0 28.6-9.28 29.66-10.34a8 8 0 0 0-11.32-11.32c-.19.19-3.84 3.49-11.15 5A131.7 131.7 0 0 0 175.7 88h.3a56 56 0 0 1 0 112"></svg:path></svg:g>`,
})
export class PhCherriesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChurchDuotoneIcon],svg[ph-church-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 152v64h-40v-88ZM32 216h40v-88l-40 24Z" opacity=".2"></svg:path><svg:path d="M228.12 145.14L192 123.47V104a8 8 0 0 0-4-7l-52-29.64V48h16a8 8 0 0 0 0-16h-16V16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v19.36L68 97.05a8 8 0 0 0-4 7v19.47l-36.12 21.62A8 8 0 0 0 24 152v64a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-48a8 8 0 0 1 16 0v48a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-64a8 8 0 0 0-3.88-6.86M40 156.53l24-14.4V208H40ZM128 144a24 24 0 0 0-24 24v40H80v-99.36l48-27.43l48 27.43V208h-24v-40a24 24 0 0 0-24-24m88 64h-24v-65.87l24 14.4Z"></svg:path></svg:g>`,
})
export class PhChurchDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteDuotoneIcon],svg[ph-cigarette-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 136v48H32a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8Z" opacity=".2"></svg:path><svg:path d="M224 128H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M32 144h48v32H32Zm192 32H96v-32h128zM201 60.08c8-14.23 7.42-21.71 6.36-24.91a7.8 7.8 0 0 0-2.64-3.86a8 8 0 1 1 6.5-14.62a22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79c-8 14.23-7.42 21.72-6.36 24.92a7.8 7.8 0 0 0 2.64 3.85a8 8 0 1 1-6.5 14.62a22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79m-40 0c8-14.23 7.42-21.71 6.36-24.91a7.8 7.8 0 0 0-2.64-3.86a8 8 0 1 1 6.5-14.62a22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79c-8 14.23-7.42 21.72-6.36 24.92a7.8 7.8 0 0 0 2.64 3.85a8 8 0 1 1-6.5 14.62a22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79"></svg:path></svg:g>`,
})
export class PhCigaretteDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteSlashDuotoneIcon],svg[ph-cigarette-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 136v48H32a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8Z" opacity=".2"></svg:path><svg:path d="M201 60.08c8-14.23 7.42-21.71 6.36-24.91a7.8 7.8 0 0 0-2.64-3.86a8 8 0 1 1 6.5-14.62a22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79c-8 14.23-7.42 21.72-6.36 24.92a7.8 7.8 0 0 0 2.64 3.85a8 8 0 1 1-6.5 14.62a22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79m-47.6 37.79a22.53 22.53 0 0 0 11.32 13.44a8 8 0 1 0 6.5-14.62a7.8 7.8 0 0 1-2.64-3.85c-1.06-3.2-1.64-10.69 6.36-24.92c8.41-14.94 11-27.65 7.6-37.79a22.57 22.57 0 0 0-11.32-13.44a8 8 0 1 0-6.5 14.62a7.8 7.8 0 0 1 2.64 3.86c1.06 3.2 1.64 10.68-6.36 24.91c-8.38 14.92-10.93 27.65-7.57 37.79Zm60.49 112.75a8 8 0 1 1-11.84 10.76L175.37 192H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h85.19L42.08 45.38a8 8 0 1 1 11.84-10.76ZM32 176h48v-32H32Zm128.82 0l-29.09-32H96v32ZM224 128h-45.48a8 8 0 1 0 0 16H224v32h-1.84a8 8 0 1 0 0 16H224a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path></svg:g>`,
})
export class PhCigaretteSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleDashedDuotoneIcon],svg[ph-circle-dashed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M96.26 37a8 8 0 0 1 5.74-9.71a104.1 104.1 0 0 1 52 0a8 8 0 0 1-2 15.75a8.2 8.2 0 0 1-2-.26a88.1 88.1 0 0 0-44 0A8 8 0 0 1 96.26 37M53.79 55.14a104 104 0 0 0-26 45a8 8 0 1 0 15.42 4.26a87.9 87.9 0 0 1 22-38.08a8 8 0 0 0-11.42-11.18m-10.58 96.41a8 8 0 1 0-15.42 4.28a104 104 0 0 0 26 45a8 8 0 1 0 11.41-11.21a88.14 88.14 0 0 1-21.99-38.07M150 213.22a88 88 0 0 1-44 0a8 8 0 1 0-4 15.49a104.1 104.1 0 0 0 52 0a8 8 0 0 0-4-15.49M222.65 146a8 8 0 0 0-9.85 5.57a87.9 87.9 0 0 1-22 38.09a8 8 0 1 0 11.42 11.21a104.05 104.05 0 0 0 26-45a8 8 0 0 0-5.57-9.87m-9.86-41.54a8 8 0 0 0 15.42-4.28a104 104 0 0 0-26-45a8 8 0 1 0-11.41 11.21a88.14 88.14 0 0 1 21.99 38.06Z"></svg:path></svg:g>`,
})
export class PhCircleDashedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleDuotoneIcon],svg[ph-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88"></svg:path></svg:g>`,
})
export class PhCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfDuotoneIcon],svg[ph-circle-half-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 0 1-96 96V32a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40 128a88.11 88.11 0 0 1 80-87.63v175.26A88.11 88.11 0 0 1 40 128m96 87.63V40.37a88 88 0 0 1 0 175.26"></svg:path></svg:g>`,
})
export class PhCircleHalfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfTiltDuotoneIcon],svg[ph-circle-half-tilt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M195.88 195.88a96 96 0 0 1-135.76 0L195.88 60.12a96 96 0 0 1 0 135.76" opacity=".2"></svg:path><svg:path d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46M65.78 65.77a88.08 88.08 0 0 1 118.52-5.38L60.38 184.31a88 88 0 0 1 5.4-118.54m124.44 124.46a88.1 88.1 0 0 1-118.52 5.38L195.62 71.69a88 88 0 0 1-5.4 118.54"></svg:path></svg:g>`,
})
export class PhCircleHalfTiltDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleNotchDuotoneIcon],svg[ph-circle-notch-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M232 128a104 104 0 0 1-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 0 1 6.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 0 0 176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 0 1 6.68-14.54C208.19 49.64 232 87 232 128"></svg:path></svg:g>`,
})
export class PhCircleNotchDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyCheckDuotoneIcon],svg[ph-circle-wavy-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128c0 12.5-17.8 22-22.7 33.7s1.4 30.6-7.8 39.8s-28.5 3.1-39.8 7.8S140.5 232 128 232s-22-17.8-33.7-22.7s-30.6 1.4-39.8-7.8s-3.1-28.5-7.8-39.8S24 140.5 24 128s17.8-22 22.7-33.7s-1.4-30.6 7.8-39.8s28.5-3.1 39.8-7.8S115.5 24 128 24s22 17.8 33.7 22.7s30.6-1.4 39.8 7.8s3.1 28.5 7.8 39.8S232 115.5 232 128Z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2Zm-11.6 39.3c-4.8 5-9.7 10.2-12.4 16.5s-2.6 13.1-2.7 19.8s-.2 14.4-3.3 17.5s-10.4 3.2-17.5 3.3s-13.7.2-19.8 2.7s-11.5 7.6-16.5 12.4S132 224 128 224s-9.1-4.9-14.1-9.7s-10.2-9.7-16.5-12.4s-13.1-2.6-19.8-2.7s-14.4-.2-17.5-3.3s-3.2-10.4-3.3-17.5s-.2-13.7-2.7-19.8s-7.6-11.5-12.4-16.5S32 132 32 128s4.9-9.1 9.7-14.1s9.7-10.2 12.4-16.5s2.6-13.1 2.7-19.8s.2-14.4 3.3-17.5s10.4-3.2 17.5-3.3s13.7-.2 19.8-2.7s11.5-7.6 16.5-12.4S124 32 128 32s9.1 4.9 14.1 9.7s10.2 9.7 16.5 12.4s13.1 2.6 19.8 2.7s14.4.2 17.5 3.3s3.2 10.4 3.3 17.5s.2 13.7 2.7 19.8s7.6 11.5 12.4 16.5S224 124 224 128s-4.9 9.1-9.7 14.1Zm-36.5-43.6a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3Z"></svg:path>`,
})
export class PhCircleWavyCheckDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyDuotoneIcon],svg[ph-circle-wavy-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128c0 12.5-17.8 22-22.7 33.7s1.4 30.6-7.8 39.8s-28.5 3.1-39.8 7.8S140.5 232 128 232s-22-17.8-33.7-22.7s-30.6 1.4-39.8-7.8s-3.1-28.5-7.8-39.8S24 140.5 24 128s17.8-22 22.7-33.7s-1.4-30.6 7.8-39.8s28.5-3.1 39.8-7.8S115.5 24 128 24s22 17.8 33.7 22.7s30.6-1.4 39.8 7.8s3.1 28.5 7.8 39.8S232 115.5 232 128Z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2Zm-11.6 39.3c-4.8 5-9.7 10.2-12.4 16.5s-2.6 13.1-2.7 19.8s-.2 14.4-3.3 17.5s-10.4 3.2-17.5 3.3s-13.7.2-19.8 2.7s-11.5 7.6-16.5 12.4S132 224 128 224s-9.1-4.9-14.1-9.7s-10.2-9.7-16.5-12.4s-13.1-2.6-19.8-2.7s-14.4-.2-17.5-3.3c-3.1-3.1-3.2-10.4-3.3-17.5s-.2-13.7-2.7-19.8s-7.6-11.5-12.4-16.5S32 132 32 128s4.9-9.1 9.7-14.1s9.7-10.2 12.4-16.5s2.6-13.1 2.7-19.8s.2-14.4 3.3-17.5s10.4-3.2 17.5-3.3s13.7-.2 19.8-2.7s11.5-7.6 16.5-12.4S124 32 128 32s9.1 4.9 14.1 9.7s10.2 9.7 16.5 12.4s13.1 2.6 19.8 2.7s14.4.2 17.5 3.3s3.2 10.4 3.3 17.5s.2 13.7 2.7 19.8s7.6 11.5 12.4 16.5S224 124 224 128s-4.9 9.1-9.7 14.1Z"></svg:path>`,
})
export class PhCircleWavyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyQuestionDuotoneIcon],svg[ph-circle-wavy-question-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128c0 12.5-17.8 22-22.7 33.7s1.4 30.6-7.8 39.8s-28.5 3.1-39.8 7.8S140.5 232 128 232s-22-17.8-33.7-22.7s-30.6 1.4-39.8-7.8s-3.1-28.5-7.8-39.8S24 140.5 24 128s17.8-22 22.7-33.7s-1.4-30.6 7.8-39.8s28.5-3.1 39.8-7.8S115.5 24 128 24s22 17.8 33.7 22.7s30.6-1.4 39.8 7.8s3.1 28.5 7.8 39.8S232 115.5 232 128Z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2Zm-11.6 39.3c-4.8 5-9.7 10.2-12.4 16.5s-2.6 13.1-2.7 19.8s-.2 14.4-3.3 17.5s-10.4 3.2-17.5 3.3s-13.7.2-19.8 2.7s-11.5 7.6-16.5 12.4S132 224 128 224s-9.1-4.9-14.1-9.7s-10.2-9.7-16.5-12.4s-13.1-2.6-19.8-2.7s-14.4-.2-17.5-3.3s-3.2-10.4-3.3-17.5s-.2-13.7-2.7-19.8s-7.6-11.5-12.4-16.5S32 132 32 128s4.9-9.1 9.7-14.1s9.7-10.2 12.4-16.5s2.6-13.1 2.7-19.8s.2-14.4 3.3-17.5s10.4-3.2 17.5-3.3s13.7-.2 19.8-2.7s11.5-7.6 16.5-12.4S124 32 128 32s9.1 4.9 14.1 9.7s10.2 9.7 16.5 12.4s13.1 2.6 19.8 2.7s14.4.2 17.5 3.3s3.2 10.4 3.3 17.5s.2 13.7 2.7 19.8s7.6 11.5 12.4 16.5S224 124 224 128s-4.9 9.1-9.7 14.1ZM140 180a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm24-72a36 36 0 0 1-28 35.1v.9a8 8 0 0 1-16 0v-8a8 8 0 0 1 8-8a20 20 0 1 0-20-20a8 8 0 0 1-16 0a36 36 0 0 1 72 0Z"></svg:path>`,
})
export class PhCircleWavyQuestionDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyWarningDuotoneIcon],svg[ph-circle-wavy-warning-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128c0 12.5-17.8 22-22.7 33.7s1.4 30.6-7.8 39.8s-28.5 3.1-39.8 7.8S140.5 232 128 232s-22-17.8-33.7-22.7s-30.6 1.4-39.8-7.8s-3.1-28.5-7.8-39.8S24 140.5 24 128s17.8-22 22.7-33.7s-1.4-30.6 7.8-39.8s28.5-3.1 39.8-7.8S115.5 24 128 24s22 17.8 33.7 22.7s30.6-1.4 39.8 7.8s3.1 28.5 7.8 39.8S232 115.5 232 128Z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2Zm-11.6 39.3c-4.8 5-9.7 10.2-12.4 16.5s-2.6 13.1-2.7 19.8s-.2 14.4-3.3 17.5s-10.4 3.2-17.5 3.3s-13.7.2-19.8 2.7s-11.5 7.6-16.5 12.4S132 224 128 224s-9.1-4.9-14.1-9.7s-10.2-9.7-16.5-12.4s-13.1-2.6-19.8-2.7s-14.4-.2-17.5-3.3s-3.2-10.4-3.3-17.5s-.2-13.7-2.7-19.8s-7.6-11.5-12.4-16.5S32 132 32 128s4.9-9.1 9.7-14.1s9.7-10.2 12.4-16.5s2.6-13.1 2.7-19.8s.2-14.4 3.3-17.5s10.4-3.2 17.5-3.3s13.7-.2 19.8-2.7s11.5-7.6 16.5-12.4S124 32 128 32s9.1 4.9 14.1 9.7s10.2 9.7 16.5 12.4s13.1 2.6 19.8 2.7s14.4.2 17.5 3.3s3.2 10.4 3.3 17.5s.2 13.7 2.7 19.8s7.6 11.5 12.4 16.5S224 124 224 128s-4.9 9.1-9.7 14.1ZM120 136V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"></svg:path>`,
})
export class PhCircleWavyWarningDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesFourDuotoneIcon],svg[ph-circles-four-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M112 80a32 32 0 1 1-32-32a32 32 0 0 1 32 32m64 32a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-96 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32m96 0a32 32 0 1 0 32 32a32 32 0 0 0-32-32" opacity=".2"></svg:path><svg:path d="M80 40a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96 16a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-64a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-96 80a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96-64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path></svg:g>`,
})
export class PhCirclesFourDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreeDuotoneIcon],svg[ph-circles-three-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 112a36 36 0 1 1 36-36a36 36 0 0 1-36 36m60 24a36 36 0 1 0 36 36a36 36 0 0 0-36-36m-120 0a36 36 0 1 0 36 36a36 36 0 0 0-36-36" opacity=".2"></svg:path><svg:path d="M172 76a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44m-44 28a28 28 0 1 1 28-28a28 28 0 0 1-28 28m60 24a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28M68 128a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path></svg:g>`,
})
export class PhCirclesThreeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreePlusDuotoneIcon],svg[ph-circles-three-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M112 80a32 32 0 1 1-32-32a32 32 0 0 1 32 32m64-32a32 32 0 1 0 32 32a32 32 0 0 0-32-32m-96 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32" opacity=".2"></svg:path><svg:path d="M80 40a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96 16a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-64a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-96 80a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m136-24a8 8 0 0 1-8 8h-24v24a8 8 0 0 1-16 0v-24h-24a8 8 0 0 1 0-16h24v-24a8 8 0 0 1 16 0v24h24a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCirclesThreePlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircuitryDuotoneIcon],svg[ph-circuitry-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40H48a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8M88 184a16 16 0 1 1 16-16a16 16 0 0 1-16 16m80-64a16 16 0 1 1 16-16a16 16 0 0 1-16 16" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M88 160a8 8 0 1 1-8 8a8 8 0 0 1 8-8M48 48h32v97.38a24 24 0 1 0 16 0v-30.07l48 48V208H48Zm160 160h-48v-48a8 8 0 0 0-2.34-5.66L96 92.69V48h32v24a8 8 0 0 0 2.34 5.66l16 16A23.74 23.74 0 0 0 144 104a24 24 0 1 0 24-24a23.74 23.74 0 0 0-10.34 2.35L144 68.69V48h64zM168 96a8 8 0 1 1-8 8a8 8 0 0 1 8-8"></svg:path></svg:g>`,
})
export class PhCircuitryDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCityDuotoneIcon],svg[ph-city-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32 40h64v176H32Zm128 48v128h64V88Z" opacity=".2"></svg:path><svg:path d="M240 208h-8V88a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v40h-48V40a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v168h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M168 96h48v112h-48Zm-16 48v64h-48v-64ZM40 48h48v160H40Zm32 24v16a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0m0 48v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m0 48v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m48 16v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0m64 0v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0m0-48v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0"></svg:path></svg:g>`,
})
export class PhCityDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardDuotoneIcon],svg[ph-clipboard-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 48v168a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h40a39.83 39.83 0 0 0-8 24v8h80v-8a39.83 39.83 0 0 0-8-24h40a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m72 184H56V48h26.75A47.9 47.9 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.9 47.9 0 0 0-2.75-16H200Z"></svg:path></svg:g>`,
})
export class PhClipboardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardTextDuotoneIcon],svg[ph-clipboard-text-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 48v168a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h40a39.83 39.83 0 0 0-8 24v8h80v-8a39.83 39.83 0 0 0-8-24h40a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M168 152a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8-40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m56-64v168a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h36.26a47.92 47.92 0 0 1 71.48 0H200a16 16 0 0 1 16 16M96 64h64a32 32 0 0 0-64 0m104-16h-26.75A47.9 47.9 0 0 1 176 64v8a8 8 0 0 1-8 8H88a8 8 0 0 1-8-8v-8a47.9 47.9 0 0 1 2.75-16H56v168h144Z"></svg:path></svg:g>`,
})
export class PhClipboardTextDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockAfternoonDuotoneIcon],svg[ph-clock-afternoon-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m64-88a8 8 0 0 1-8 8h-36.69l26.35 26.34a8 8 0 0 1-11.32 11.32l-40-40A8 8 0 0 1 128 120h56a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhClockAfternoonDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockClockwiseDuotoneIcon],svg[ph-clock-clockwise-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88" opacity=".2"></svg:path><svg:path d="M136 80v43.47l36.12 21.67a8 8 0 0 1-8.24 13.72l-40-24A8 8 0 0 1 120 128V80a8 8 0 0 1 16 0m88-24a8 8 0 0 0-8 8v18c-6.35-7.36-12.83-14.45-20.12-21.83a96 96 0 1 0-2 137.7a8 8 0 0 0-11-11.64a80 80 0 1 1 1.66-114.83c8.14 8.24 15.27 16.18 22.46 24.6h-23a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhClockClockwiseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCountdownDuotoneIcon],svg[ph-clock-countdown-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M232 136.66A104.12 104.12 0 1 1 119.34 24a8 8 0 0 1 1.32 16A88.12 88.12 0 1 0 216 135.34a8 8 0 0 1 16 1.32M120 72v56a8 8 0 0 0 8 8h56a8 8 0 0 0 0-16h-48V72a8 8 0 0 0-16 0m40-24a12 12 0 1 0-12-12a12 12 0 0 0 12 12m36 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12m24 36a12 12 0 1 0-12-12a12 12 0 0 0 12 12"></svg:path></svg:g>`,
})
export class PhClockCountdownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCounterClockwiseDuotoneIcon],svg[ph-clock-counter-clockwise-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88" opacity=".2"></svg:path><svg:path d="M136 80v43.47l36.12 21.67a8 8 0 0 1-8.24 13.72l-40-24A8 8 0 0 1 120 128V80a8 8 0 0 1 16 0m-8-48a95.44 95.44 0 0 0-67.92 28.15C52.81 67.51 46.35 74.59 40 82V64a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16H49c7.15-8.42 14.27-16.35 22.39-24.57a80 80 0 1 1 1.66 114.75a8 8 0 1 0-11 11.64A96 96 0 1 0 128 32"></svg:path></svg:g>`,
})
export class PhClockCounterClockwiseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockDuotoneIcon],svg[ph-clock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m64-88a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhClockDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockUserDuotoneIcon],svg[ph-clock-user-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a95.6 95.6 0 0 1-9.09 40.82A24 24 0 1 0 191.5 200a33.15 33.15 0 0 0-29 17.6A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M136 72v43.05l36.42-18.21a8 8 0 0 1 7.16 14.31l-48 24A8 8 0 0 1 120 128V72a8 8 0 0 1 16 0m-8 144a88 88 0 1 1 88-88a8 8 0 0 0 16 0a104 104 0 1 0-104 104a8 8 0 0 0 0-16m103.73 5.94a8 8 0 1 1-15.46 4.11C213.44 215.42 203.46 208 192 208s-21.44 7.42-24.27 18.05A8 8 0 0 1 160 232a8.2 8.2 0 0 1-2.06-.27a8 8 0 0 1-5.67-9.79a40 40 0 0 1 17.11-23.32a32 32 0 1 1 45.23 0a40 40 0 0 1 17.12 23.32M176 176a16 16 0 1 0 16-16a16 16 0 0 0-16 16"></svg:path></svg:g>`,
})
export class PhClockUserDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClosedCaptioningDuotoneIcon],svg[ph-closed-captioning-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 64v128a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H32V64h192zm-105.07-40.29a8 8 0 0 1-2.93 10.93a40 40 0 1 1 0-69.28a8 8 0 1 1-8 13.85a24 24 0 1 0 0 41.58a8 8 0 0 1 10.93 2.92m80 0a8 8 0 0 1-2.93 10.93a40 40 0 1 1 0-69.28a8 8 0 1 1-8 13.85a24 24 0 1 0 0 41.58a8 8 0 0 1 10.93 2.92"></svg:path></svg:g>`,
})
export class PhClosedCaptioningDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowDownDuotoneIcon],svg[ph-cloud-arrow-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 128a80 80 0 0 1-80 80H72A56 56 0 1 1 85.92 97.74v.1A80 80 0 0 1 240 128" opacity=".2"></svg:path><svg:path d="M248 128a87.34 87.34 0 0 1-17.6 52.81a8 8 0 1 1-12.8-9.62A71.34 71.34 0 0 0 232 128a72 72 0 0 0-144 0a8 8 0 0 1-16 0a88 88 0 0 1 3.29-23.88C74.2 104 73.1 104 72 104a48 48 0 0 0 0 96h24a8 8 0 0 1 0 16H72a64 64 0 1 1 9.29-127.32A88 88 0 0 1 248 128m-69.66 42.34L160 188.69V128a8 8 0 0 0-16 0v60.69l-18.34-18.35a8 8 0 0 0-11.32 11.32l32 32a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32"></svg:path></svg:g>`,
})
export class PhCloudArrowDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowUpDuotoneIcon],svg[ph-cloud-arrow-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 128a80 80 0 0 1-80 80H72A56 56 0 1 1 85.92 97.74v.1A80 80 0 0 1 240 128" opacity=".2"></svg:path><svg:path d="M178.34 165.66L160 147.31V208a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32M160 40a88.08 88.08 0 0 0-78.71 48.68A64 64 0 1 0 72 216h40a8 8 0 0 0 0-16H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.12A88 88 0 0 0 72 128a8 8 0 0 0 16 0a72 72 0 1 1 100.8 66a8 8 0 0 0 3.2 15.34a7.9 7.9 0 0 0 3.2-.68A88 88 0 0 0 160 40"></svg:path></svg:g>`,
})
export class PhCloudArrowUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudCheckDuotoneIcon],svg[ph-cloud-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 128a80 80 0 0 1-80 80H72A56 56 0 1 1 85.92 97.74v.1A80 80 0 0 1 240 128" opacity=".2"></svg:path><svg:path d="M160 40a88.09 88.09 0 0 0-78.71 48.67A64 64 0 1 0 72 216h88a88 88 0 0 0 0-176m0 160H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.11A88 88 0 0 0 72 128a8 8 0 0 0 16 0a72 72 0 1 1 72 72m37.66-93.66a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L144 148.69l42.34-42.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhCloudCheckDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudDuotoneIcon],svg[ph-cloud-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 128a80 80 0 0 1-80 80H72A56 56 0 1 1 85.92 97.74v.1A80 80 0 0 1 240 128" opacity=".2"></svg:path><svg:path d="M160 40a88.09 88.09 0 0 0-78.71 48.67A64 64 0 1 0 72 216h88a88 88 0 0 0 0-176m0 160H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.11A88 88 0 0 0 72 128a8 8 0 0 0 16 0a72 72 0 1 1 72 72"></svg:path></svg:g>`,
})
export class PhCloudDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudFogDuotoneIcon],svg[ph-cloud-fog-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 100a68 68 0 0 1-68 68H76a44 44 0 1 1 14.2-85.66v.11A68.06 68.06 0 0 1 224 100" opacity=".2"></svg:path><svg:path d="M120 208H72a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m64-16h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m-24 32h-56a8 8 0 0 0 0 16h56a8 8 0 0 0 0-16m72-124a76.08 76.08 0 0 1-76 76H76a52 52 0 0 1 0-104a53 53 0 0 1 8.92.76A76.08 76.08 0 0 1 232 100m-16 0a60.06 60.06 0 0 0-120-3.54a8 8 0 0 1-16-.92q.21-3.66.77-7.23A38 38 0 0 0 76 88a36 36 0 0 0 0 72h80a60.07 60.07 0 0 0 60-60"></svg:path></svg:g>`,
})
export class PhCloudFogDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudLightningDuotoneIcon],svg[ph-cloud-lightning-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 92a68 68 0 0 1-68 68H76a44 44 0 1 1 14.2-85.66v.11A68.06 68.06 0 0 1 224 92" opacity=".2"></svg:path><svg:path d="M156 16a76.2 76.2 0 0 0-71.08 48.76A53 53 0 0 0 76 64a52 52 0 0 0 0 104h37.87l-16.73 27.88A8 8 0 0 0 104 208h25.87l-16.73 27.88a8 8 0 0 0 13.72 8.24l24-40A8 8 0 0 0 144 192h-25.87l14.4-24H156a76 76 0 0 0 0-152m0 136H76a36 36 0 0 1 0-72a38 38 0 0 1 4.78.31q-.56 3.57-.77 7.23a8 8 0 0 0 16 .92A60.06 60.06 0 1 1 156 152"></svg:path></svg:g>`,
})
export class PhCloudLightningDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudMoonDuotoneIcon],svg[ph-cloud-moon-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M102.38 17.62a64.06 64.06 0 0 1-76.76 76.76A64.12 64.12 0 0 0 63 138.93a44.08 44.08 0 0 1 43.33-8.54a68.13 68.13 0 0 1 45.47-47.32h.15c0-1 .07-2 .07-3a64 64 0 0 0-49.64-62.45" opacity=".2"></svg:path><svg:path d="M172 72a76.5 76.5 0 0 0-12.36 1a71.93 71.93 0 0 0-55.47-63.17a8 8 0 0 0-9.59 9.58A56.05 56.05 0 0 1 40 88a56.5 56.5 0 0 1-12.59-1.42a8 8 0 0 0-9.59 9.59a72.22 72.22 0 0 0 32.29 45.06A52 52 0 0 0 92 224h80a76 76 0 0 0 0-152M37.37 104H40a72.08 72.08 0 0 0 72-72v-2.67a55.63 55.63 0 0 1 32 48a76.28 76.28 0 0 0-43 43.4a52 52 0 0 0-39 8.86A56.22 56.22 0 0 1 37.37 104M172 208H92a36 36 0 1 1 4.78-71.69c-.37 2.37-.63 4.79-.77 7.23a8 8 0 0 0 16 .92a59 59 0 0 1 1.88-11.81c0-.16.09-.32.12-.48A60.06 60.06 0 1 1 172 208"></svg:path></svg:g>`,
})
export class PhCloudMoonDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudRainDuotoneIcon],svg[ph-cloud-rain-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 92a68 68 0 0 1-68 68H76a44 44 0 1 1 14.2-85.66v.11A68.06 68.06 0 0 1 224 92" opacity=".2"></svg:path><svg:path d="m158.66 196.44l-32 48a8 8 0 1 1-13.32-8.88l32-48a8 8 0 0 1 13.32 8.88M232 92a76.08 76.08 0 0 1-76 76h-23.72l-29.62 44.44a8 8 0 1 1-13.32-8.88L113.05 168H76a52 52 0 0 1 0-104a53 53 0 0 1 8.92.76A76.08 76.08 0 0 1 232 92m-16 0a60.06 60.06 0 0 0-120-3.54a8 8 0 0 1-16-.92q.21-3.66.77-7.23A38 38 0 0 0 76 80a36 36 0 0 0 0 72h80a60.07 60.07 0 0 0 60-60"></svg:path></svg:g>`,
})
export class PhCloudRainDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSlashDuotoneIcon],svg[ph-cloud-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 128a80 80 0 0 1-80 80H72A56 56 0 1 1 85.92 97.74v.1A80 80 0 0 1 240 128" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l39.24 43.17l-.06.12A65 65 0 0 0 72 88a64 64 0 0 0 0 128h88a87.3 87.3 0 0 0 31.8-5.93l10.28 11.31a8 8 0 1 0 11.84-10.76ZM160 200H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.3.12A88.4 88.4 0 0 0 72 128a8 8 0 0 0 16 0a72.3 72.3 0 0 1 5.06-26.54l87 95.7A71.7 71.7 0 0 1 160 200m88-72a87.9 87.9 0 0 1-22.35 58.61A8 8 0 0 1 213.71 176a72 72 0 0 0-96.34-106a8 8 0 0 1-9.48-12.89A88 88 0 0 1 248 128"></svg:path></svg:g>`,
})
export class PhCloudSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSnowDuotoneIcon],svg[ph-cloud-snow-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 92a68 68 0 0 1-68 68H76a44 44 0 1 1 14.2-85.66v.11A68.06 68.06 0 0 1 224 92" opacity=".2"></svg:path><svg:path d="M88 196a12 12 0 1 1-12-12a12 12 0 0 1 12 12m28 4a12 12 0 1 0 12 12a12 12 0 0 0-12-12m48-16a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-96 40a12 12 0 1 0 12 12a12 12 0 0 0-12-12m88 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m76-132a76.08 76.08 0 0 1-76 76H76a52 52 0 0 1 0-104a53 53 0 0 1 8.92.76A76.08 76.08 0 0 1 232 92m-16 0a60.06 60.06 0 0 0-120-3.54a8 8 0 0 1-16-.92q.21-3.66.77-7.23A38 38 0 0 0 76 80a36 36 0 0 0 0 72h80a60.07 60.07 0 0 0 60-60"></svg:path></svg:g>`,
})
export class PhCloudSnowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSunDuotoneIcon],svg[ph-cloud-sun-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M139.84 84.41a68.22 68.22 0 0 0-41.65 46v-.11a44.08 44.08 0 0 0-38.54 5a48 48 0 1 1 80.19-50.94Z" opacity=".2"></svg:path><svg:path d="M164 72a76.2 76.2 0 0 0-20.26 2.73a55.6 55.6 0 0 0-9.41-11.54l9.51-13.57a8 8 0 1 0-13.11-9.18L121.22 54A55.9 55.9 0 0 0 96 48h-1.74l-2.89-16.29a8 8 0 1 0-15.75 2.77l2.88 16.34a56.1 56.1 0 0 0-23.27 14.85l-13.62-9.53a8 8 0 1 0-9.17 13.11L46 78.77A55.55 55.55 0 0 0 40 104v1.72l-16.29 2.88a8 8 0 0 0 1.38 15.88a8 8 0 0 0 1.39-.12l16.32-2.88a55.7 55.7 0 0 0 5.86 12.42A52 52 0 0 0 84 224h80a76 76 0 0 0 0-152M56 104a40 40 0 0 1 72.54-23.24a76.26 76.26 0 0 0-35.62 40a52.14 52.14 0 0 0-31 4.17A40 40 0 0 1 56 104m108 104H84a36 36 0 1 1 4.78-71.69c-.37 2.37-.63 4.79-.77 7.23a8 8 0 0 0 16 .92a59 59 0 0 1 1.88-11.81c0-.16.09-.32.12-.48A60.06 60.06 0 1 1 164 208"></svg:path></svg:g>`,
})
export class PhCloudSunDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudWarningDuotoneIcon],svg[ph-cloud-warning-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 127.62a80 80 0 0 1-80 80H72A56 56 0 1 1 85.92 97.36v.1A80 80 0 0 1 240 127.62" opacity=".2"></svg:path><svg:path d="M160 40a88.09 88.09 0 0 0-78.71 48.67A64 64 0 1 0 72 216h88a88 88 0 0 0 0-176m0 160H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.11A88 88 0 0 0 72 128a8 8 0 0 0 16 0a72 72 0 1 1 72 72m-8-72V88a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhCloudWarningDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudXDuotoneIcon],svg[ph-cloud-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 127.62a80 80 0 0 1-80 80H72A56 56 0 1 1 85.92 97.36v.1A80 80 0 0 1 240 127.62" opacity=".2"></svg:path><svg:path d="M160 40a88.09 88.09 0 0 0-78.71 48.67A64 64 0 1 0 72 216h88a88 88 0 0 0 0-176m0 160H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.11A88 88 0 0 0 72 128a8 8 0 0 0 16 0a72 72 0 1 1 72 72m29.66-82.34L171.31 136l18.35 18.34a8 8 0 0 1-11.32 11.32L160 147.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L148.69 136l-18.35-18.34a8 8 0 0 1 11.32-11.32L160 124.69l18.34-18.35a8 8 0 0 1 11.32 11.32"></svg:path></svg:g>`,
})
export class PhCloudXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloverDuotoneIcon],svg[ph-clover-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 120s-90-96 0-96s0 96 0 96m-96 0c0 90 96 0 96 0s-96-90-96 0m96 96c90 0 0-96 0-96s-90 96 0 96m0-96s96 90 96 0s-96 0-96 0" opacity=".2"></svg:path><svg:path d="M211.66 165.54C225.16 159.7 232 144.37 232 120s-6.84-39.7-20.34-45.55c-11.65-5-27.24-2.23-46.46 8.35c10.58-19.22 13.39-34.81 8.35-46.46C167.7 22.84 152.37 16 128 16s-39.7 6.84-45.55 20.34C77.41 48 80.22 63.58 90.8 82.8C71.58 72.22 56 69.4 44.34 74.45C30.84 80.3 24 95.63 24 120s6.84 39.7 20.34 45.54A31 31 0 0 0 56.8 168c9.6 0 21-3.62 34-10.79c-10.58 19.2-13.39 34.79-8.35 46.44C88.3 217.15 103.63 224 128 224s39.7-6.85 45.55-20.35a32.24 32.24 0 0 0 2.34-15c10.45 16.23 19.64 34.48 24.35 53.33A8 8 0 0 0 208 248a8 8 0 0 0 1.95-.24a8 8 0 0 0 5.82-9.7c-6.94-27.76-22.27-53.8-37.86-74.79Q189.68 168 199.2 168a31 31 0 0 0 12.46-2.46m-6.37-76.4C214.14 93 216 108 216 120s-1.86 27-10.7 30.86c-8.36 3.63-23.52-1.31-42.68-13.91a243 243 0 0 1-22.54-17c18.41-15.58 50.32-37.27 65.21-30.81M97.14 42.7C101 33.86 116 32 128 32s27 1.86 30.86 10.7c3.63 8.36-1.31 23.52-13.91 42.68a243 243 0 0 1-17 22.54C112.37 89.51 90.69 57.59 97.14 42.7M50.71 150.86C41.86 147 40 132 40 120s1.86-27 10.7-30.86A15.6 15.6 0 0 1 57 88c8.75 0 21.34 5.17 36.4 15.07a243 243 0 0 1 22.54 17c-18.43 15.55-50.35 37.25-65.23 30.79m108.15 46.43C155 206.14 140 208 128 208s-27-1.86-30.86-10.7c-3.63-8.36 1.31-23.52 13.91-42.68a243 243 0 0 1 17-22.54c15.58 18.41 37.26 50.33 30.81 65.21"></svg:path></svg:g>`,
})
export class PhCloverDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClubDuotoneIcon],svg[ph-club-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 144a48 48 0 0 1-88.07 26.44L160 224H96l16.07-53.56a48 48 0 1 1-23.9-71.65a48 48 0 1 1 79.66 0A48 48 0 0 1 232 144" opacity=".2"></svg:path><svg:path d="M184 88h-2.33a56 56 0 1 0-107.34 0H72a56 56 0 1 0 24.54 106.35l-8.2 27.35A8 8 0 0 0 96 232h64a8 8 0 0 0 7.66-10.3l-8.2-27.35A56 56 0 1 0 184 88m0 96a40 40 0 0 1-33.4-18a8 8 0 0 0-14.33 6.71l13 43.26h-42.5l13-43.26A8 8 0 0 0 105.4 166a40 40 0 1 1-19.93-59.71a8 8 0 0 0 9.33-12a40 40 0 1 1 66.4 0a8 8 0 0 0 9.33 12A40 40 0 1 1 184 184"></svg:path></svg:g>`,
})
export class PhClubDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoatHangerDuotoneIcon],svg[ph-coat-hanger-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 192H24a8 8 0 0 1-4.8-14.4L128 96l108.79 81.6A8 8 0 0 1 232 192" opacity=".2"></svg:path><svg:path d="M241.57 171.2L141.33 96l23.46-17.6A8 8 0 0 0 168 72a40 40 0 1 0-80 0a8 8 0 0 0 16 0a24 24 0 0 1 47.69-3.78l-28.35 21.27l-.28.22L14.43 171.2A16 16 0 0 0 24 200h208a16 16 0 0 0 9.6-28.8ZM232 184H24l104-78z"></svg:path></svg:g>`,
})
export class PhCoatHangerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodaLogoDuotoneIcon],svg[ph-coda-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 128a48 48 0 0 0 48 48c10.27.41 17.9-2.25 25.88-7.37A4 4 0 0 1 208 172v36a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v36a4 4 0 0 1-6.15 3.36A48.24 48.24 0 0 0 128 128" opacity=".2"></svg:path><svg:path d="M176 88a39.8 39.8 0 0 1 21.53 6.1A12 12 0 0 0 216 84V48a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-36a12 12 0 0 0-18.44-10.11c-7.25 4.65-13.41 6.41-21.24 6.11H176a40 40 0 0 1 0-80m-56 40a56.07 56.07 0 0 0 55.84 56a48.4 48.4 0 0 0 24.16-5.11V208H56V48h144v29.23A56.3 56.3 0 0 0 120 128"></svg:path></svg:g>`,
})
export class PhCodaLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeBlockDuotoneIcon],svg[ph-code-block-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 32v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h104a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m58.34 101.66l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32L43.31 64l26.35 26.34a8 8 0 0 1-11.32 11.32m40 0a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0 0-11.32l-32-32a8 8 0 0 0-11.32 11.32L124.69 64L98.34 90.34a8 8 0 0 0 0 11.32M200 40h-24a8 8 0 0 0 0 16h24v144H56v-64a8 8 0 0 0-16 0v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16"></svg:path></svg:g>`,
})
export class PhCodeBlockDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeDuotoneIcon],svg[ph-code-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m240 128l-48 40H64l-48-40l48-40h128Z" opacity=".2"></svg:path><svg:path d="M69.12 94.15L28.5 128l40.62 33.85a8 8 0 1 1-10.24 12.29l-48-40a8 8 0 0 1 0-12.29l48-40a8 8 0 0 1 10.24 12.3m176 27.7l-48-40a8 8 0 1 0-10.24 12.3L227.5 128l-40.62 33.85a8 8 0 1 0 10.24 12.29l48-40a8 8 0 0 0 0-12.29m-82.39-89.37a8 8 0 0 0-10.25 4.79l-64 176a8 8 0 0 0 4.79 10.26A8.1 8.1 0 0 0 96 224a8 8 0 0 0 7.52-5.27l64-176a8 8 0 0 0-4.79-10.25"></svg:path></svg:g>`,
})
export class PhCodeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeSimpleDuotoneIcon],svg[ph-code-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m240 128l-72 64H88l-72-64l72-64h80Z" opacity=".2"></svg:path><svg:path d="M93.31 70L28 128l65.27 58a8 8 0 1 1-10.62 12l-72-64a8 8 0 0 1 0-12l72-64a8 8 0 1 1 10.66 12m152 52l-72-64a8 8 0 0 0-10.62 12L228 128l-65.27 58a8 8 0 1 0 10.62 12l72-64a8 8 0 0 0 0-12Z"></svg:path></svg:g>`,
})
export class PhCodeSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodepenLogoDuotoneIcon],svg[ph-codepen-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m232 160l-104 56l-104-56l104-56Z" opacity=".2"></svg:path><svg:path d="m235.79 89l-104-56a8 8 0 0 0-7.58 0l-104 56A8 8 0 0 0 16 96v64a8 8 0 0 0 4.21 7.05l104 56a8 8 0 0 0 7.58 0l104-56A8 8 0 0 0 240 160V96a8 8 0 0 0-4.21-7M224 146.61L189.45 128L224 109.39Zm-51.43-27.7L136 99.22V53.39L215.13 96Zm-44.57 24L100.3 128l27.7-14.91L155.7 128Zm-8-89.52v45.83l-36.57 19.69L40.87 96Zm-88 56L66.55 128L32 146.61Zm51.43 27.7L120 156.78v45.83L40.87 160ZM136 202.61v-45.83l36.57-19.69L215.13 160Z"></svg:path></svg:g>`,
})
export class PhCodepenLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodesandboxLogoDuotoneIcon],svg[ph-codesandbox-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32 125.73L80 152v54.84l-43.84-24a8 8 0 0 1-4.16-7ZM176 152v54.84l43.84-24a8 8 0 0 0 4.16-7v-50.1ZM124.16 25l-41 22.46L128 72l44.86-24.56L131.84 25a8 8 0 0 0-7.68 0" opacity=".2"></svg:path><svg:path d="m223.68 66.15l-88-48.15a15.94 15.94 0 0 0-15.36 0l-88 48.18a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M168 152v50.09l-32 17.52v-86.87l80-43.8v32l-43.84 24A8 8 0 0 0 168 152m-84.16-7L40 121V89l80 43.8v86.87l-32-17.58V152a8 8 0 0 0-4.16-7m-.7-88.41l41 22.45a8 8 0 0 0 7.68 0l41-22.45l34.48 18.87l-79.3 43.42l-79.34-43.44ZM128 32l28.2 15.44L128 62.89L99.8 47.45ZM40 139.22l32 17.52v36.59l-32-17.51Zm144 54.11v-36.59l32-17.52v36.6Z"></svg:path></svg:g>`,
})
export class PhCodesandboxLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeBeanDuotoneIcon],svg[ph-coffee-bean-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M183.79 183.79c-43.14 43.14-103.09 53.14-133.9 22.32s-20.82-90.76 22.32-133.9s103.09-53.14 133.9-22.32s20.82 90.76-22.32 133.9" opacity=".2"></svg:path><svg:path d="M211.75 44.25C195 27.47 170.37 20.79 142.46 25.44c-26.91 4.49-53.87 19.09-75.9 41.12s-36.63 49-41.12 75.9c-4.65 27.91 2 52.51 18.81 69.29C57.54 225.05 75.75 232 96.62 232a103.7 103.7 0 0 0 16.92-1.44c26.91-4.49 53.87-19.09 75.9-41.12s36.63-49 41.12-75.9c4.65-27.91-2.03-52.54-18.81-69.29M77.87 77.87c24.69-24.68 55.13-37.94 81.28-37.94a62.26 62.26 0 0 1 29 6.67a108.5 108.5 0 0 0-31.05 16.94c-19.2 15.16-31.63 36.32-36.94 62.89c-9.72 48.58-44.7 65.18-67.48 70.84c-23.97-28.51-13.28-80.92 25.19-119.4m100.26 100.26c-34.69 34.68-80.71 46.78-110.32 31.27a108.7 108.7 0 0 0 31.09-16.94c19.2-15.16 31.63-36.32 36.94-62.89c9.72-48.58 44.7-65.18 67.48-70.84c23.97 28.51 13.28 80.92-25.19 119.4"></svg:path></svg:g>`,
})
export class PhCoffeeBeanDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeDuotoneIcon],svg[ph-coffee-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88v48a88 88 0 0 1-51.3 80H83.3A88 88 0 0 1 32 136V88Z" opacity=".2"></svg:path><svg:path d="M80 56V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m96 56v8a40 40 0 0 1-37.51 39.91a96.6 96.6 0 0 1-27 40.09H208a8 8 0 0 1 0 16H32a8 8 0 0 1 0-16h24.54A96.3 96.3 0 0 1 24 136V88a8 8 0 0 1 8-8h176a40 40 0 0 1 40 40m-48-24H40v40a80.27 80.27 0 0 0 45.12 72h69.76A80.27 80.27 0 0 0 200 136Zm32 24a24 24 0 0 0-16-22.62V136a96 96 0 0 1-1.2 15a24 24 0 0 0 17.2-23Z"></svg:path></svg:g>`,
})
export class PhCoffeeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinDuotoneIcon],svg[ph-coin-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 104c0 24-40 48-104 48S24 128 24 104s40-48 104-48s104 24 104 48" opacity=".2"></svg:path><svg:path d="M207.58 63.84C186.85 53.48 159.33 48 128 48s-58.85 5.48-79.58 15.84S16 88.78 16 104v48c0 15.22 11.82 29.85 32.42 40.16S96.67 208 128 208s58.85-5.48 79.58-15.84S240 167.22 240 152v-48c0-15.22-11.82-29.85-32.42-40.16M128 64c62.64 0 96 23.23 96 40s-33.36 40-96 40s-96-23.23-96-40s33.36-40 96-40m-8 95.86v32c-19-.62-35-3.42-48-7.49v-31.32a203.4 203.4 0 0 0 48 6.81m16 0a203.4 203.4 0 0 0 48-6.81v31.31c-13 4.07-29 6.87-48 7.49ZM32 152v-18.47a83 83 0 0 0 16.42 10.63c2.43 1.21 5 2.35 7.58 3.43V178c-15.83-7.84-24-17.71-24-26m168 26v-30.41c2.61-1.08 5.15-2.22 7.58-3.43A83 83 0 0 0 224 133.53V152c0 8.29-8.17 18.16-24 26"></svg:path></svg:g>`,
})
export class PhCoinDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinVerticalDuotoneIcon],svg[ph-coin-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 128c0 53-25.07 96-56 96s-56-43-56-96s25.07-96 56-96s56 43 56 96" opacity=".2"></svg:path><svg:path d="M198.51 56.09C186.44 35.4 169.92 24 152 24h-48c-17.92 0-34.44 11.4-46.51 32.09C46.21 75.42 40 101 40 128s6.21 52.58 17.49 71.91C69.56 220.6 86.08 232 104 232h48c17.92 0 34.44-11.4 46.51-32.09C209.79 180.58 216 155 216 128s-6.21-52.58-17.49-71.91m1.28 63.91h-32a152.8 152.8 0 0 0-9.68-48h30.59c6.12 13.38 10.16 30 11.09 48m-20.6-64h-28.73a83 83 0 0 0-12-16H152c10 0 19.4 6 27.19 16M56 128c0-47.7 22-88 48-88s48 40.3 48 88s-22 88-48 88s-48-40.3-48-88m96 88h-13.51a83 83 0 0 0 12-16h28.73C171.4 210 162 216 152 216m36.7-32h-30.58a152.8 152.8 0 0 0 9.68-48h32c-.94 18-4.98 34.62-11.1 48"></svg:path></svg:g>`,
})
export class PhCoinVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinsDuotoneIcon],svg[ph-coins-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 132c0 19.88-35.82 36-80 36c-19.6 0-37.56-3.17-51.47-8.44C146.76 156.85 176 142 176 124V96.72c36.52 3.34 64 17.86 64 35.28m-64-48c0-19.88-35.82-36-80-36S16 64.12 16 84s35.82 36 80 36s80-16.12 80-36" opacity=".2"></svg:path><svg:path d="M184 89.57V84c0-25.08-37.83-44-88-44S8 58.92 8 84v40c0 20.89 26.25 37.49 64 42.46V172c0 25.08 37.83 44 88 44s88-18.92 88-44v-40c0-20.7-25.42-37.32-64-42.43M232 132c0 13.22-30.79 28-72 28c-3.73 0-7.43-.13-11.08-.37C170.49 151.77 184 139 184 124v-18.26c29.87 4.45 48 16.53 48 26.26M72 150.25v-23.79A184 184 0 0 0 96 128a184 184 0 0 0 24-1.54v23.79A163 163 0 0 1 96 152a163 163 0 0 1-24-1.75m96-40.32V124c0 8.39-12.41 17.4-32 22.87V123.5c12.91-3.13 23.84-7.79 32-13.57M96 56c41.21 0 72 14.78 72 28s-30.79 28-72 28s-72-14.78-72-28s30.79-28 72-28m-72 68v-14.07c8.16 5.78 19.09 10.44 32 13.57v23.37C36.41 141.4 24 132.39 24 124m64 48v-4.17c2.63.1 5.29.17 8 .17c3.88 0 7.67-.13 11.39-.35a122 122 0 0 0 12.61 3.76v23.46c-19.59-5.47-32-14.48-32-22.87m48 26.25V174.4a179.5 179.5 0 0 0 24 1.6a184 184 0 0 0 24-1.54v23.79a165.5 165.5 0 0 1-48 0m64-3.38V171.5c12.91-3.13 23.84-7.79 32-13.57V172c0 8.39-12.41 17.4-32 22.87"></svg:path></svg:g>`,
})
export class PhCoinsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsDuotoneIcon],svg[ph-columns-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M112 48v160a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8m80-8h-40a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M104 32H64a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H64V48h40Zm88-176h-40a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-40V48h40Z"></svg:path></svg:g>`,
})
export class PhColumnsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusLeftDuotoneIcon],svg[ph-columns-plus-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M136 48v160a8 8 0 0 1-8 8h-24a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8m64-8h-24a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M128 32h-24a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-24V48h24Zm72-176h-24a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-24V48h24ZM72 128a8 8 0 0 1-8 8H48v16a8 8 0 0 1-16 0v-16H16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhColumnsPlusLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusRightDuotoneIcon],svg[ph-columns-plus-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 48v160a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8m64-8h-24a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M80 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H56V48h24Zm72-176h-24a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-24V48h24Zm96-80a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhColumnsPlusRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCommandDuotoneIcon],svg[ph-command-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 76a28 28 0 0 1-28 28h-28V76a28 28 0 0 1 28-28a28 28 0 0 1 28 28M76 48a28 28 0 0 0-28 28a28 28 0 0 0 28 28h28V76a28 28 0 0 0-28-28m104 104h-28v28a28 28 0 0 0 28 28a28 28 0 0 0 28-28a28 28 0 0 0-28-28M48 180a28 28 0 0 0 28 28a28 28 0 0 0 28-28v-28H76a28 28 0 0 0-28 28" opacity=".2"></svg:path><svg:path d="M180 144h-20v-32h20a36 36 0 1 0-36-36v20h-32V76a36 36 0 1 0-36 36h20v32H76a36 36 0 1 0 36 36v-20h32v20a36 36 0 1 0 36-36m-20-68a20 20 0 1 1 20 20h-20ZM56 76a20 20 0 0 1 40 0v20H76a20 20 0 0 1-20-20m40 104a20 20 0 1 1-20-20h20Zm16-68h32v32h-32Zm68 88a20 20 0 0 1-20-20v-20h20a20 20 0 0 1 0 40"></svg:path></svg:g>`,
})
export class PhCommandDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassDuotoneIcon],svg[ph-compass-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32a96 96 0 1 0 96 96a96 96 0 0 0-96-96m16 112l-64 32l32-64l64-32Z" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m44.42-143.16l-64 32a8.05 8.05 0 0 0-3.58 3.58l-32 64A8 8 0 0 0 80 184a8.1 8.1 0 0 0 3.58-.84l64-32a8.05 8.05 0 0 0 3.58-3.58l32-64a8 8 0 0 0-10.74-10.74M138 138l-40.11 20.11L118 118l40.15-20.07Z"></svg:path></svg:g>`,
})
export class PhCompassDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassRoseDuotoneIcon],svg[ph-compass-rose-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m248 128l-96 24l-24 96l-24-96l-96-24l96-24l24-96l24 96Z" opacity=".2"></svg:path><svg:path d="m249.94 120.24l-27.05-6.76a95.86 95.86 0 0 0-80.37-80.37l-6.76-27a8 8 0 0 0-15.52 0l-6.76 27.05a95.86 95.86 0 0 0-80.37 80.37l-27 6.76a8 8 0 0 0 0 15.52l27.05 6.76a95.86 95.86 0 0 0 80.37 80.37l6.76 27.05a8 8 0 0 0 15.52 0l6.76-27.05a95.86 95.86 0 0 0 80.37-80.37l27.05-6.76a8 8 0 0 0 0-15.52Zm-95.49 22.9L139.31 128l15.14-15.14L215 128Zm-52.9 0L41 128l60.57-15.14L116.69 128Zm104.22-33.94L158.6 97.4l-11.8-47.17a79.88 79.88 0 0 1 58.97 58.97m-62.63-7.65L128 116.69l-15.14-15.14L128 41ZM109.2 50.23L97.4 97.4l-47.17 11.8a79.88 79.88 0 0 1 58.97-58.97m-59 96.57l47.2 11.8l11.8 47.17a79.88 79.88 0 0 1-58.97-58.97Zm62.63 7.65L128 139.31l15.14 15.14L128 215Zm33.94 51.32l11.8-47.17l47.17-11.8a79.88 79.88 0 0 1-58.94 58.97Z"></svg:path></svg:g>`,
})
export class PhCompassRoseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassToolDuotoneIcon],svg[ph-compass-tool-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 80a32 32 0 1 1-32-32a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M215.12 123.64a8 8 0 1 0-14.24-7.28a79.6 79.6 0 0 1-33.08 33.5l-16.58-37.32A40 40 0 0 0 136 40.8V24a8 8 0 0 0-16 0v16.8a40 40 0 0 0-15.22 71.74L56.69 220.75a8 8 0 1 0 14.62 6.5l25.14-56.56A95.5 95.5 0 0 0 128 176a99.1 99.1 0 0 0 31.6-5.21l25.09 56.46a8 8 0 0 0 14.62-6.5l-25-56.25a95.8 95.8 0 0 0 40.81-40.86M128 56a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 104a79.5 79.5 0 0 1-25-4l16.42-36.94a39.8 39.8 0 0 0 17.2 0l16.48 37.06A83.2 83.2 0 0 1 128 160"></svg:path></svg:g>`,
})
export class PhCompassToolDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phComputerTowerDuotoneIcon],svg[ph-computer-tower-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v176a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M88 72a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m8 40h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m112-72v176a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16m-16 0H64v176h128Zm-64 128a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhComputerTowerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phConfettiDuotoneIcon],svg[ph-confetti-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m58.89 154.89l42.22 42.22l-50.63 18.4a7.79 7.79 0 0 1-10-10Zm138.82-4.72l-91.88-91.88A7.79 7.79 0 0 0 93 61.14l-14.9 41l75.82 75.82l41-14.9a7.79 7.79 0 0 0 2.79-12.89" opacity=".2"></svg:path><svg:path d="M111.49 52.63a15.8 15.8 0 0 0-26 5.77L33 202.78A15.83 15.83 0 0 0 47.76 224a16 16 0 0 0 5.46-1l144.37-52.5a15.8 15.8 0 0 0 5.78-26Zm-8.33 135.21l-35-35l13.16-36.21l58.05 58.05Zm-55 20l14-38.41l24.45 24.45ZM156 168.64L87.36 100l13-35.87l91.43 91.43ZM160 72a37.8 37.8 0 0 1 3.84-15.58C169.14 45.83 179.14 40 192 40c6.7 0 11-2.29 13.65-7.21a22 22 0 0 0 2.35-8.85a8 8 0 0 1 16 .06c0 12.86-8.52 32-32 32c-6.7 0-11 2.29-13.65 7.21a22 22 0 0 0-2.35 8.85a8 8 0 0 1-16-.06m-24-32V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m101.66 82.34a8 8 0 1 1-11.32 11.31l-16-16a8 8 0 0 1 11.32-11.32Zm4.87-42.75l-24 8a8 8 0 0 1-5.06-15.18l24-8a8 8 0 0 1 5.06 15.18"></svg:path></svg:g>`,
})
export class PhConfettiDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phContactlessPaymentDuotoneIcon],svg[ph-contactless-payment-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M97.07 100.26a59.33 59.33 0 0 1 0 55.48a8 8 0 1 1-14.14-7.48a42.79 42.79 0 0 0 0-40.52a8 8 0 0 1 14.14-7.48m56-32a126.67 126.67 0 0 1 0 119.54a8 8 0 0 1-14.07-7.57a110.62 110.62 0 0 0 0-104.46a8 8 0 0 1 14.12-7.54Zm-28 16a93 93 0 0 1 0 87.52a8 8 0 1 1-14.12-7.52a77 77 0 0 0 0-72.48a8 8 0 1 1 14.12-7.52"></svg:path></svg:g>`,
})
export class PhContactlessPaymentDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phControlDuotoneIcon],svg[ph-control-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 120H56l72-72Z" opacity=".2"></svg:path><svg:path d="m205.66 114.34l-72-72a8 8 0 0 0-11.32 0l-72 72A8 8 0 0 0 56 128h144a8 8 0 0 0 5.66-13.66M75.31 112L128 59.31L180.69 112Z"></svg:path></svg:g>`,
})
export class PhControlDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookieDuotoneIcon],svg[ph-cookie-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a48 48 0 0 0 48 48a48 48 0 0 0 48 48" opacity=".2"></svg:path><svg:path d="M164.49 163.51a12 12 0 1 1-17 0a12 12 0 0 1 17 0m-81-8a12 12 0 1 0 17 0a12 12 0 0 0-16.98 0Zm9-39a12 12 0 1 0-17 0a12 12 0 0 0 17-.02Zm48-1a12 12 0 1 0 0 17a12 12 0 0 0 0-17M232 128A104 104 0 1 1 128 24a8 8 0 0 1 8 8a40 40 0 0 0 40 40a8 8 0 0 1 8 8a40 40 0 0 0 40 40a8 8 0 0 1 8 8m-16.31 7.39A56.13 56.13 0 0 1 168.5 87.5a56.13 56.13 0 0 1-47.89-47.19a88 88 0 1 0 95.08 95.08"></svg:path></svg:g>`,
})
export class PhCookieDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookingPotDuotoneIcon],svg[ph-cooking-pot-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v104a24 24 0 0 1-24 24H64a24 24 0 0 1-24-24V80Z" opacity=".2"></svg:path><svg:path d="M88 48V16a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m92.8 46.4L224 124v60a32 32 0 0 1-32 32H64a32 32 0 0 1-32-32v-60L3.2 102.4a8 8 0 0 1 9.6-12.8L32 104V80a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8v24l19.2-14.4a8 8 0 0 1 9.6 12.8M208 88H48v96a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16Z"></svg:path></svg:g>`,
})
export class PhCookingPotDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyDuotoneIcon],svg[ph-copy-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v128h-48V88H88V40Z" opacity=".2"></svg:path><svg:path d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z"></svg:path></svg:g>`,
})
export class PhCopyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopySimpleDuotoneIcon],svg[ph-copy-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 72v144H40V72Z" opacity=".2"></svg:path><svg:path d="M184 64H40a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8m-8 144H48V80h128Zm48-168v144a8 8 0 0 1-16 0V48H72a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCopySimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyleftDuotoneIcon],svg[ph-copyleft-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a48 48 0 0 1-86.4 28.81a8 8 0 0 1 12.8-9.61a32 32 0 1 0 0-38.4a8 8 0 0 1-12.8-9.61A48 48 0 0 1 176 128"></svg:path></svg:g>`,
})
export class PhCopyleftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyrightDuotoneIcon],svg[ph-copyright-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-32-88a32 32 0 0 0 57.6 19.2a8 8 0 0 1 12.8 9.61a48 48 0 1 1 0-57.62a8 8 0 0 1-12.8 9.61A32 32 0 0 0 96 128"></svg:path></svg:g>`,
})
export class PhCopyrightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersInDuotoneIcon],svg[ph-corners-in-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 64v128a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M152 96V48a8 8 0 0 1 16 0v40h40a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8m-56 56H48a8 8 0 0 0 0 16h40v40a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8m112 0h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-40h40a8 8 0 0 0 0-16M96 40a8 8 0 0 0-8 8v40H48a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhCornersInDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersOutDuotoneIcon],svg[ph-corners-out-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 48v160H48V48Z" opacity=".2"></svg:path><svg:path d="M216 48v40a8 8 0 0 1-16 0V56h-32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M88 200H56v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16m120-40a8 8 0 0 0-8 8v32h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M88 40H48a8 8 0 0 0-8 8v40a8 8 0 0 0 16 0V56h32a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhCornersOutDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCouchDuotoneIcon],svg[ph-couch-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 120v48a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8V72a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8v40a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M240 106.17V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v34.17A16 16 0 0 0 8 120v48a16 16 0 0 0 16 16h8v16a8 8 0 0 0 16 0v-16h160v16a8 8 0 0 0 16 0v-16h8a16 16 0 0 0 16-16v-48a16 16 0 0 0-8-13.83M224 104h-8a16 16 0 0 0-16 16v16h-64V72h88ZM120 72v64H56v-16a16 16 0 0 0-16-16h-8V72Zm112 96H24v-48h16v24a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-24h16Z"></svg:path></svg:g>`,
})
export class PhCouchDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCourtBasketballDuotoneIcon],svg[ph-court-basketball-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 88v80h-16a40 40 0 0 1 0-80ZM40 88H24v80h16a40 40 0 0 0 0-80" opacity=".2"></svg:path><svg:path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 112h-8a32 32 0 0 1 0-64h8ZM32 96h8a32 32 0 0 1 0 64h-8Zm0 80h8a48 48 0 0 0 0-96h-8V64h88v128H32Zm192 16h-88V64h88v16h-8a48 48 0 0 0 0 96h8z"></svg:path></svg:g>`,
})
export class PhCourtBasketballDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowDuotoneIcon],svg[ph-cow-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192a32 32 0 0 1-32 32H80a32 32 0 0 1-32-32a32 32 0 0 1 32-32h96a32 32 0 0 1 32 32M64 104a32 32 0 0 1 32-32H63.22a48 48 0 0 0-47.07 38.53A8 8 0 0 0 24 120h40Zm175.85 6.53A48 48 0 0 0 192.78 72H160a32 32 0 0 1 32 32v16h40a8 8 0 0 0 7.85-9.47" opacity=".2"></svg:path><svg:path d="M104 192a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8m72-8h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m-76-72a12 12 0 1 0 12 12a12 12 0 0 0-12-12m56 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m88.39 10.12A16 16 0 0 1 232 128h-32v32a40 40 0 0 1-24 72H80a40 40 0 0 1-24-72v-32H24a16 16 0 0 1-15.69-19a56.13 56.13 0 0 1 54.91-45h1.64A55.83 55.83 0 0 1 48 24a8 8 0 0 1 16 0a40 40 0 0 0 40 40h48a40 40 0 0 0 40-40a8 8 0 0 1 16 0a55.83 55.83 0 0 1-16.86 40h1.64a56.13 56.13 0 0 1 54.91 45a15.82 15.82 0 0 1-3.3 13.12M56 112v-8a39.8 39.8 0 0 1 8-24h-.8A40.09 40.09 0 0 0 24 112Zm144 80a24 24 0 0 0-24-24H80a24 24 0 0 0 0 48h96a24 24 0 0 0 24-24m-16-39.2V104a24 24 0 0 0-24-24H96a24 24 0 0 0-24 24v48.8a40.6 40.6 0 0 1 8-.8h96a40.6 40.6 0 0 1 8 .8m48-40.8a40.08 40.08 0 0 0-39.2-32h-.8a39.8 39.8 0 0 1 8 24v8Z"></svg:path></svg:g>`,
})
export class PhCowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowboyHatDuotoneIcon],svg[ph-cowboy-hat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M190.53 160.18C158.13 192 128 192 128 192s-30.13 0-62.53-31.82L70.06 136h115.88Z" opacity=".2"></svg:path><svg:path d="M216 120a8 8 0 0 0-6.78 3.76A180 180 0 0 1 195.41 143l-17.09-89.93a16 16 0 0 0-25.72-9.55l-.13.1L128 64l-24.47-20.38l-.13-.1a16 16 0 0 0-25.72 9.53L60.59 143a179 179 0 0 1-13.81-19.25A8 8 0 0 0 40 120a40 40 0 0 0 0 80h176a40 40 0 0 0 0-80M93.41 56l24.47 20.4l.12.1a15.92 15.92 0 0 0 20 0l.12-.1L162.59 56l13.68 72H79.73ZM40 184a24 24 0 0 1-4.14-47.64C51.28 159.83 67.73 174.65 82.4 184Zm88 0c-.33 0-25.49-.4-53.86-26.6l2.54-13.4h102.63l2.54 13.35a113.3 113.3 0 0 1-27.35 19c-15.4 7.42-26.44 7.65-26.5 7.65m88 0h-42.4c14.67-9.35 31.12-24.17 46.54-47.64A24 24 0 0 1 216 184"></svg:path></svg:g>`,
})
export class PhCowboyHatDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCpuDuotoneIcon],svg[ph-cpu-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 48H56a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8m-48 104h-48v-48h48Z" opacity=".2"></svg:path><svg:path d="M152 96h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8m-8 48h-32v-32h32Zm88 0h-16v-32h16a8 8 0 0 0 0-16h-16V56a16 16 0 0 0-16-16h-40V24a8 8 0 0 0-16 0v16h-32V24a8 8 0 0 0-16 0v16H56a16 16 0 0 0-16 16v40H24a8 8 0 0 0 0 16h16v32H24a8 8 0 0 0 0 16h16v40a16 16 0 0 0 16 16h40v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h40a16 16 0 0 0 16-16v-40h16a8 8 0 0 0 0-16m-32 56H56V56h144z"></svg:path></svg:g>`,
})
export class PhCpuDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneDuotoneIcon],svg[ph-crane-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 168H56V88h48Z" opacity=".2"></svg:path><svg:path d="M228.12 17.14a8 8 0 0 0-7.88-.2L102 80H32a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h88a16 16 0 0 0 16-16v-32a7.8 7.8 0 0 0-.34-2.3L113.54 92L216 37.33V160h-16v-8a8 8 0 0 0-16 0v8a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V24a8 8 0 0 0-3.88-6.86M98.05 96l19.2 64H64V96ZM48 96v64H32V96ZM32 200v-24h88v24Z"></svg:path></svg:g>`,
})
export class PhCraneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneTowerDuotoneIcon],svg[ph-crane-tower-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 88v128H48V40h32Z" opacity=".2"></svg:path><svg:path d="M240 80H108.94L87.16 36.42A8 8 0 0 0 80 32H48a8 8 0 0 0-8 8v40H24a8 8 0 0 0 0 16h16v112H24a8 8 0 0 0 0 16h104a8 8 0 0 0 0-16h-16V96h96v88h-16v-8a8 8 0 0 0-16 0v8a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V96h16a8 8 0 0 0 0-16M56 48h19.06l16 32H56Zm0 160v-48h40v48Zm40-64H56V96h40Z"></svg:path></svg:g>`,
})
export class PhCraneTowerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCreditCardDuotoneIcon],svg[ph-credit-card-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 96v96a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V96Z" opacity=".2"></svg:path><svg:path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 16v24H32V64Zm0 128H32v-88h192zm-16-24a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-64 0a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCreditCardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCricketDuotoneIcon],svg[ph-cricket-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 104v64l-37.66 37.66a8 8 0 0 1-11.31 0L66.34 153a8 8 0 0 1 0-11.31L104 104ZM80 60a20 20 0 1 0-20 20a20 20 0 0 0 20-20" opacity=".2"></svg:path><svg:path d="m243.31 81.37l-52.68-52.68a16 16 0 0 0-22.63 0L60.69 136a16 16 0 0 0 0 22.63l20.68 20.68l-47 47a8 8 0 0 0 11.32 11.32l47-47l20.68 20.68a16 16 0 0 0 22.63 0L243.31 104a16 16 0 0 0 0-22.63M124.69 200L104 179.31l29.66-29.65a8 8 0 0 0-11.32-11.32L92.69 168L72 147.31L107.31 112H160v52.69ZM232 92.69l-56 56V104a8 8 0 0 0-8-8h-44.69l56-56L232 92.68ZM60 88a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12"></svg:path></svg:g>`,
})
export class PhCricketDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCropDuotoneIcon],svg[ph-crop-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 64v128H64V64Z" opacity=".2"></svg:path><svg:path d="M240 192a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H64a8 8 0 0 1-8-8V72H24a8 8 0 0 1 0-16h32V24a8 8 0 0 1 16 0v160h160a8 8 0 0 1 8 8M96 72h88v88a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8H96a8 8 0 0 0 0 16"></svg:path></svg:g>`,
})
export class PhCropDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrossDuotoneIcon],svg[ph-cross-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88v32a8 8 0 0 1-8 8h-48v96a8 8 0 0 1-8 8h-32a8 8 0 0 1-8-8v-96H56a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h48V32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v48h48a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M200 72h-40V32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v40H56a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h40v88a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-88h40a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m0 48h-48a8 8 0 0 0-8 8v96h-32v-96a8 8 0 0 0-8-8H56V88h48a8 8 0 0 0 8-8V32h32v48a8 8 0 0 0 8 8h48Z"></svg:path></svg:g>`,
})
export class PhCrossDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairDuotoneIcon],svg[ph-crosshair-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 128a32 32 0 1 1-32-32a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M232 120h-8.34A96.14 96.14 0 0 0 136 32.34V24a8 8 0 0 0-16 0v8.34A96.14 96.14 0 0 0 32.34 120H24a8 8 0 0 0 0 16h8.34A96.14 96.14 0 0 0 120 223.66V232a8 8 0 0 0 16 0v-8.34A96.14 96.14 0 0 0 223.66 136H232a8 8 0 0 0 0-16m-96 87.6V200a8 8 0 0 0-16 0v7.6A80.15 80.15 0 0 1 48.4 136H56a8 8 0 0 0 0-16h-7.6A80.15 80.15 0 0 1 120 48.4V56a8 8 0 0 0 16 0v-7.6a80.15 80.15 0 0 1 71.6 71.6H200a8 8 0 0 0 0 16h7.6a80.15 80.15 0 0 1-71.6 71.6M128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path></svg:g>`,
})
export class PhCrosshairDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairSimpleDuotoneIcon],svg[ph-crosshair-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 191.63V184a8 8 0 0 0-16 0v31.63A88.13 88.13 0 0 1 40.37 136H72a8 8 0 0 0 0-16H40.37A88.13 88.13 0 0 1 120 40.37V72a8 8 0 0 0 16 0V40.37A88.13 88.13 0 0 1 215.63 120H184a8 8 0 0 0 0 16h31.63A88.13 88.13 0 0 1 136 215.63"></svg:path></svg:g>`,
})
export class PhCrosshairSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownCrossDuotoneIcon],svg[ph-crown-cross-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 116c0 52-48 68-48 68v24a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8v-24s-48-16-48-68a52 52 0 0 1 52-52c28.72 0 52 19.28 52 48c0-28.72 23.28-48 52-48a52 52 0 0 1 52 52" opacity=".2"></svg:path><svg:path d="M180 56c-17.74 0-33.21 6.48-44 17.16V40h16a8 8 0 0 0 0-16h-16V8a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v33.16C109.21 62.48 93.74 56 76 56a60.07 60.07 0 0 0-60 60c0 29.86 14.54 48.85 26.73 59.52A90.5 90.5 0 0 0 64 189.34V208a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-18.66a90.5 90.5 0 0 0 21.27-13.82C225.46 164.85 240 145.86 240 116a60.07 60.07 0 0 0-60-60m1.47 120.41A8 8 0 0 0 176 184v24H80v-24a8 8 0 0 0-5.47-7.59C74.1 176.27 32 161.7 32 116a44.05 44.05 0 0 1 44-44c25.5 0 44 16.82 44 40v64a8 8 0 0 0 16 0v-64c0-23.18 18.5-40 44-40a44.05 44.05 0 0 1 44 44c0 45.4-40.82 59.83-42.53 60.41"></svg:path></svg:g>`,
})
export class PhCrownCrossDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownDuotoneIcon],svg[ph-crown-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m216.71 99.73l-15.6 93.59a8 8 0 0 1-7.89 6.68H62.78a8 8 0 0 1-7.89-6.68l-15.6-93.59h.08a19.8 19.8 0 0 0 9.22-4.16L88 144l32-73.65a20 20 0 0 0 15.92 0L168 144l39.39-48.48a19.8 19.8 0 0 0 9.22 4.16Z" opacity=".2"></svg:path><svg:path d="M248 80a28 28 0 1 0-51.12 15.77l-26.79 33L146 73.4a28 28 0 1 0-36.06 0l-24.03 55.34l-26.79-33a28 28 0 1 0-26.6 12L47 194.63A16 16 0 0 0 62.78 208h130.44A16 16 0 0 0 209 194.63l14.47-86.85A28 28 0 0 0 248 80M128 40a12 12 0 1 1-12 12a12 12 0 0 1 12-12M24 80a12 12 0 1 1 12 12a12 12 0 0 1-12-12m169.22 112H62.78l-13.92-83.48L81.79 149a8 8 0 0 0 6.21 3a8 8 0 0 0 1.08-.07a8 8 0 0 0 6.26-4.74l29.3-67.4a27 27 0 0 0 6.72 0l29.3 67.4a8 8 0 0 0 6.26 4.74a8 8 0 0 0 1.08.07a8 8 0 0 0 6.21-3l32.93-40.52ZM220 92a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path></svg:g>`,
})
export class PhCrownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownSimpleDuotoneIcon],svg[ph-crown-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m231.87 89.42l-22.7 104a8 8 0 0 1-7.88 6.61H54.71a8 8 0 0 1-7.88-6.61l-22.7-104A8 8 0 0 1 38 82.76L80 128l40.74-91.35a8 8 0 0 1 14.52 0L176 128l42-45.24a8 8 0 0 1 13.87 6.66" opacity=".2"></svg:path><svg:path d="M230.9 73.6a15.85 15.85 0 0 0-18.9 3.79l-33.67 36.29l-35.8-80.29a1 1 0 0 1 0-.1a16 16 0 0 0-29.06 0a1 1 0 0 1 0 .1l-35.8 80.29L44 77.39a16 16 0 0 0-27.75 13.42c0 .11 0 .21.07.32L39 195a16 16 0 0 0 15.72 13h146.57A16 16 0 0 0 217 195l22.68-103.87c0-.11 0-.21.07-.32a15.85 15.85 0 0 0-8.85-17.21m-29.55 118.08l-.06.32H54.71l-.06-.32L32 88l.14.16l42 45.24a8 8 0 0 0 13.18-2.18L128 40l40.69 91.25a8 8 0 0 0 13.18 2.18l42-45.24l.13-.19Z"></svg:path></svg:g>`,
})
export class PhCrownSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeDuotoneIcon],svg[ph-cube-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 129.09V232a8 8 0 0 1-3.84-1l-88-48.16a8 8 0 0 1-4.16-7V80.2a8 8 0 0 1 .7-3.27Z" opacity=".2"></svg:path><svg:path d="m223.68 66.15l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 32l80.34 44L128 120L47.66 76ZM40 90l80 43.78v85.79l-80-43.75Zm96 129.57v-85.75L216 90v85.78Z"></svg:path></svg:g>`,
})
export class PhCubeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeFocusDuotoneIcon],svg[ph-cube-focus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 96v64l-56 32l-56-32V96l56-32Z" opacity=".2"></svg:path><svg:path d="M232 48v40a8 8 0 0 1-16 0V56h-32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M72 200H40v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16m152-40a8 8 0 0 0-8 8v32h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M32 96a8 8 0 0 0 8-8V56h32a8 8 0 0 0 0-16H32a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8m156 71l-56 32a8 8 0 0 1-7.94 0L68 167a8 8 0 0 1-4-7V96a8 8 0 0 1 4-7l56-32a8 8 0 0 1 7.94 0l56 32a8 8 0 0 1 4 7v64a8 8 0 0 1-3.94 7M88.12 96L128 118.79L167.88 96L128 73.21ZM80 155.36l40 22.85v-45.57l-40-22.85Zm96 0v-45.57l-40 22.85v45.57Z"></svg:path></svg:g>`,
})
export class PhCubeFocusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeTransparentDuotoneIcon],svg[ph-cube-transparent-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v120H96l-56-56V40h120Z" opacity=".2"></svg:path><svg:path d="m221.66 90.34l-56-56A8 8 0 0 0 160 32H40a8 8 0 0 0-8 8v120a8 8 0 0 0 2.3 5.61l56 56A8 8 0 0 0 96 224h120a8 8 0 0 0 8-8V96a8 8 0 0 0-2.34-5.66M168 59.31L196.69 88H168ZM88 196.69L59.31 168H88ZM88 152H48V59.31l40 40ZM59.31 48H152v40H99.31ZM152 104v48h-48v-48Zm-48 104v-40h52.69l40 40Zm104-11.31l-40-40V104h40Z"></svg:path></svg:g>`,
})
export class PhCubeTransparentDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyBtcDuotoneIcon],svg[ph-currency-btc-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 160a40 40 0 0 1-40 40H88V48h60a36 36 0 0 1 0 72h12a40 40 0 0 1 40 40" opacity=".2"></svg:path><svg:path d="M178.48 115.7A44 44 0 0 0 152 40.19V24a8 8 0 0 0-16 0v16h-16V24a8 8 0 0 0-16 0v16H72a8 8 0 0 0 0 16h8v136h-8a8 8 0 0 0 0 16h32v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h8a48 48 0 0 0 18.48-92.3M96 56h52a28 28 0 0 1 0 56H96Zm64 136H96v-64h64a32 32 0 0 1 0 64"></svg:path></svg:g>`,
})
export class PhCurrencyBtcDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCircleDollarDuotoneIcon],svg[ph-currency-circle-dollar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m40-68a28 28 0 0 1-28 28h-4v8a8 8 0 0 1-16 0v-8h-16a8 8 0 0 1 0-16h36a12 12 0 0 0 0-24h-24a28 28 0 0 1 0-56h4v-8a8 8 0 0 1 16 0v8h16a8 8 0 0 1 0 16h-36a12 12 0 0 0 0 24h24a28 28 0 0 1 28 28"></svg:path></svg:g>`,
})
export class PhCurrencyCircleDollarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCnyDuotoneIcon],svg[ph-currency-cny-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v56H64V56Z" opacity=".2"></svg:path><svg:path d="M56 56a8 8 0 0 1 8-8h128a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8m160 104a8 8 0 0 0-8 8v16h-32a16 16 0 0 1-16-16v-48h48a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16h48v8a56.06 56.06 0 0 1-56 56a8 8 0 0 0 0 16a72.08 72.08 0 0 0 72-72v-8h32v48a32 32 0 0 0 32 32h40a8 8 0 0 0 8-8v-24a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhCurrencyCnyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarDuotoneIcon],svg[ph-currency-dollar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 168a40 40 0 0 1-40 40h-24v-80h24a40 40 0 0 1 40 40M112 48a40 40 0 0 0 0 80h16V48Z" opacity=".2"></svg:path><svg:path d="M152 120h-16V56h8a32 32 0 0 1 32 32a8 8 0 0 0 16 0a48.05 48.05 0 0 0-48-48h-8V24a8 8 0 0 0-16 0v16h-8a48 48 0 0 0 0 96h8v64h-16a32 32 0 0 1-32-32a8 8 0 0 0-16 0a48.05 48.05 0 0 0 48 48h16v16a8 8 0 0 0 16 0v-16h16a48 48 0 0 0 0-96m-40 0a32 32 0 0 1 0-64h8v64Zm40 80h-16v-64h16a32 32 0 0 1 0 64"></svg:path></svg:g>`,
})
export class PhCurrencyDollarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarSimpleDuotoneIcon],svg[ph-currency-dollar-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 168a40 40 0 0 1-40 40h-24v-80h24a40 40 0 0 1 40 40M112 48a40 40 0 0 0 0 80h16V48Z" opacity=".2"></svg:path><svg:path d="M200 168a48.05 48.05 0 0 1-48 48h-16v16a8 8 0 0 1-16 0v-16h-16a48.05 48.05 0 0 1-48-48a8 8 0 0 1 16 0a32 32 0 0 0 32 32h48a32 32 0 0 0 0-64h-40a48 48 0 0 1 0-96h8V24a8 8 0 0 1 16 0v16h8a48.05 48.05 0 0 1 48 48a8 8 0 0 1-16 0a32 32 0 0 0-32-32h-32a32 32 0 0 0 0 64h40a48.05 48.05 0 0 1 48 48"></svg:path></svg:g>`,
})
export class PhCurrencyDollarSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEthDuotoneIcon],svg[ph-currency-eth-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m216 128l-88 112l-88-112l88 40Z" opacity=".2"></svg:path><svg:path d="m222.29 123.06l-88-112a8 8 0 0 0-12.58 0l-88 112a8 8 0 0 0 0 9.88l88 112a8 8 0 0 0 12.58 0l88-112a8 8 0 0 0 0-9.88M136 39.13l67.42 85.8L136 155.58Zm-16 116.45l-67.42-30.65L120 39.13Zm0 17.57v43.72l-53.43-68Zm16 0l53.43-24.29l-53.43 68Z"></svg:path></svg:g>`,
})
export class PhCurrencyEthDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEurDuotoneIcon],svg[ph-currency-eur-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 58.33v139.34A72 72 0 0 1 64 144v-32a72 72 0 0 1 120-53.67" opacity=".2"></svg:path><svg:path d="M190 192.33a8 8 0 0 1-.63 11.3A80 80 0 0 1 56.4 152H40a8 8 0 0 1 0-16h16v-16H40a8 8 0 0 1 0-16h16.4a80 80 0 0 1 132.94-51.63a8 8 0 0 1-10.68 11.93A64 64 0 0 0 72.52 104H136a8 8 0 0 1 0 16H72v16h48a8 8 0 0 1 0 16H72.52a64 64 0 0 0 106.14 39.71a8 8 0 0 1 11.34.62"></svg:path></svg:g>`,
})
export class PhCurrencyEurDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyGbpDuotoneIcon],svg[ph-currency-gbp-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 208H60a36 36 0 0 0 36-36V84a44 44 0 0 1 72-33.95Z" opacity=".2"></svg:path><svg:path d="M192 208a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h4a28 28 0 0 0 28-28v-36H56a8 8 0 0 1 0-16h32V84a52 52 0 0 1 85.08-40.12a8 8 0 1 1-10.18 12.34A36 36 0 0 0 104 84v36h32a8 8 0 0 1 0 16h-32v36a43.82 43.82 0 0 1-10.08 28H184a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCurrencyGbpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyInrDuotoneIcon],svg[ph-currency-inr-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 92a52 52 0 0 1-52 52H72V40h36a52 52 0 0 1 52 52" opacity=".2"></svg:path><svg:path d="M208 80a8 8 0 0 1-8 8h-32.15c.09 1.32.15 2.65.15 4a60.07 60.07 0 0 1-60 60H92.69l72.69 66.08a8 8 0 1 1-10.76 11.84l-88-80A8 8 0 0 1 72 136h36a44.05 44.05 0 0 0 44-44c0-1.35-.07-2.68-.19-4H72a8 8 0 0 1 0-16h75.17A44 44 0 0 0 108 48H72a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16h-51.26a60.1 60.1 0 0 1 15.82 24H200a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCurrencyInrDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyJpyDuotoneIcon],svg[ph-currency-jpy-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m200 48l-72 88l-72-88Z" opacity=".2"></svg:path><svg:path d="M206.19 53.07L144.88 128H176a8 8 0 0 1 0 16h-40v16h40a8 8 0 0 1 0 16h-40v40a8 8 0 0 1-16 0v-40H80a8 8 0 0 1 0-16h40v-16H80a8 8 0 0 1 0-16h31.12L49.81 53.07a8 8 0 0 1 12.38-10.14L128 123.37l65.81-80.44a8 8 0 1 1 12.38 10.14"></svg:path></svg:g>`,
})
export class PhCurrencyJpyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKrwDuotoneIcon],svg[ph-currency-krw-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M50 136h52l-26 64Zm52 0h52l-26-64Zm52 0l26 64l26-64Z" opacity=".2"></svg:path><svg:path d="M240 128h-22.11l21.52-53a8 8 0 1 0-14.82-6l-24 59h-41.21l-24-59a8 8 0 0 0-14.82 0l-24 59H55.38l-24-59a8 8 0 0 0-14.82 6l21.52 53H16a8 8 0 0 0 0 16h28.61l24 59a8 8 0 0 0 14.82 0l24-59h41.24l24 59a8 8 0 0 0 14.82 0l24-59H240a8 8 0 0 0 0-16M76 178.75L61.88 144h28.24ZM113.88 128L128 93.26L142.12 128ZM180 178.75L165.88 144h28.24Z"></svg:path></svg:g>`,
})
export class PhCurrencyKrwDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKztDuotoneIcon],svg[ph-currency-kzt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 56v40H56V56Z" opacity=".2"></svg:path><svg:path d="M208 96a8 8 0 0 1-8 8h-64v112a8 8 0 0 1-16 0V104H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8M56 64h144a8 8 0 0 0 0-16H56a8 8 0 0 0 0 16"></svg:path></svg:g>`,
})
export class PhCurrencyKztDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyNgnDuotoneIcon],svg[ph-currency-ngn-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 112v98l-51.51-66H64V46l51.51 66Z" opacity=".2"></svg:path><svg:path d="M216 136h-16v-16h16a8 8 0 0 0 0-16h-16V46a8 8 0 0 0-16 0v58h-64.58L70.31 41.08A8 8 0 0 0 56 46v58H40a8 8 0 0 0 0 16h16v16H40a8 8 0 0 0 0 16h16v58a8 8 0 0 0 16 0v-58h64.58l49.11 62.92A8 8 0 0 0 192 218a7.8 7.8 0 0 0 2.6-.44A8 8 0 0 0 200 210v-58h16a8 8 0 0 0 0-16m-32-16v16h-39.61l-12.49-16ZM72 69.25L99.12 104H72ZM72 136v-16h39.61l12.49 16Zm112 50.75L156.88 152H184Z"></svg:path></svg:g>`,
})
export class PhCurrencyNgnDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyRubDuotoneIcon],svg[ph-currency-rub-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 92a52 52 0 0 1-52 52H88V40h60a52 52 0 0 1 52 52" opacity=".2"></svg:path><svg:path d="M148 152a60 60 0 0 0 0-120H88a8 8 0 0 0-8 8v96H56a8 8 0 0 0 0 16h24v16H56a8 8 0 0 0 0 16h24v32a8 8 0 0 0 16 0v-32h48a8 8 0 0 0 0-16H96v-16ZM96 48h52a44 44 0 0 1 0 88H96Z"></svg:path></svg:g>`,
})
export class PhCurrencyRubDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorClickDuotoneIcon],svg[ph-cursor-click-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M213.66 201L201 213.66a8 8 0 0 1-11.31 0l-51.31-51.31a8 8 0 0 0-13 2.46l-17.82 46.41a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85l-46.41 17.82a8 8 0 0 0-2.46 13l51.31 51.31a8 8 0 0 1 0 11.34" opacity=".2"></svg:path><svg:path d="M88 24v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0m-72 80h8a8 8 0 0 0 0-16h-8a8 8 0 0 0 0 16m108.42-64.84a8 8 0 0 0 10.74-3.58l8-16a8 8 0 0 0-14.31-7.16l-8 16a8 8 0 0 0 3.57 10.74m-96 81.69l-16 8a8 8 0 0 0 7.16 14.31l16-8a8 8 0 1 0-7.16-14.31M219.31 184a16 16 0 0 1 0 22.63l-12.68 12.68a16 16 0 0 1-22.63 0L132.7 168L115 214.09c0 .1-.08.21-.13.32a15.83 15.83 0 0 1-14.6 9.59h-.79a15.83 15.83 0 0 1-14.41-11L32.8 52.92A16 16 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-.32.13L168 132.69ZM208 195.31L156.69 144a16 16 0 0 1 4.93-26l.32-.14l45.95-17.64L48 48l52.2 159.86l17.65-46c0-.11.08-.22.13-.33a16 16 0 0 1 11.69-9.34a16.7 16.7 0 0 1 3-.28a16 16 0 0 1 11.3 4.69l51.34 51.4Z"></svg:path></svg:g>`,
})
export class PhCursorClickDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorDuotoneIcon],svg[ph-cursor-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M213.66 201L201 213.66a8 8 0 0 1-11.31 0l-51.31-51.31a8 8 0 0 0-13 2.46l-17.82 46.41a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85l-46.41 17.82a8 8 0 0 0-2.46 13l51.31 51.31a8 8 0 0 1 0 11.34" opacity=".2"></svg:path><svg:path d="M168 132.69L214.08 115l.33-.13a16 16 0 0 0-1.41-29.8L52.92 32.8A15.95 15.95 0 0 0 32.8 52.92L85.07 213a15.82 15.82 0 0 0 14.41 11h.78a15.84 15.84 0 0 0 14.61-9.59l.13-.33L132.69 168L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63ZM195.31 208L144 156.69a16 16 0 0 0-26 4.93c0 .11-.09.22-.13.32l-17.65 46L48 48l159.85 52.2l-45.95 17.64l-.32.13a16 16 0 0 0-4.93 26L208 195.31Z"></svg:path></svg:g>`,
})
export class PhCursorDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorTextDuotoneIcon],svg[ph-cursor-text-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 48v160h-16a32 32 0 0 1-32-32a32 32 0 0 1-32 32H80V48h16a32 32 0 0 1 32 32a32 32 0 0 1 32-32Z" opacity=".2"></svg:path><svg:path d="M184 208a8 8 0 0 1-8 8h-16a40 40 0 0 1-32-16a40 40 0 0 1-32 16H80a8 8 0 0 1 0-16h16a24 24 0 0 0 24-24v-40h-16a8 8 0 0 1 0-16h16V80a24 24 0 0 0-24-24H80a8 8 0 0 1 0-16h16a40 40 0 0 1 32 16a40 40 0 0 1 32-16h16a8 8 0 0 1 0 16h-16a24 24 0 0 0-24 24v40h16a8 8 0 0 1 0 16h-16v40a24 24 0 0 0 24 24h16a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCursorTextDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCylinderDuotoneIcon],svg[ph-cylinder-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 60c0 19.88-28.65 36-64 36S64 79.88 64 60s28.65-36 64-36s64 16.12 64 36" opacity=".2"></svg:path><svg:path d="M128 16c-40.37 0-72 19.33-72 44v136c0 24.67 31.63 44 72 44s72-19.33 72-44V60c0-24.67-31.63-44-72-44m0 16c26.49 0 56 11.5 56 28s-29.51 28-56 28s-56-11.5-56-28s29.51-28 56-28m0 192c-29.83 0-56-13.08-56-28V88c13.1 9.85 33.14 16 56 16s42.9-6.2 56-16v108c0 14.92-26.17 28-56 28"></svg:path></svg:g>`,
})
export class PhCylinderDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDatabaseDuotoneIcon],svg[ph-database-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80c0 26.51-39.4 48-88 48s-88-21.49-88-48s39.4-48 88-48s88 21.49 88 48" opacity=".2"></svg:path><svg:path d="M128 24c-53.83 0-96 24.6-96 56v96c0 31.4 42.17 56 96 56s96-24.6 96-56V80c0-31.4-42.17-56-96-56m80 104c0 9.62-7.88 19.43-21.61 26.92C170.93 163.35 150.19 168 128 168s-42.93-4.65-58.39-13.08C55.88 147.43 48 137.62 48 128v-16.64c17.06 15 46.23 24.64 80 24.64s62.94-9.68 80-24.64ZM69.61 53.08C85.07 44.65 105.81 40 128 40s42.93 4.65 58.39 13.08C200.12 60.57 208 70.38 208 80s-7.88 19.43-21.61 26.92C170.93 115.35 150.19 120 128 120s-42.93-4.65-58.39-13.08C55.88 99.43 48 89.62 48 80s7.88-19.43 21.61-26.92m116.78 149.84C170.93 211.35 150.19 216 128 216s-42.93-4.65-58.39-13.08C55.88 195.43 48 185.62 48 176v-16.64c17.06 15 46.23 24.64 80 24.64s62.94-9.68 80-24.64V176c0 9.62-7.88 19.43-21.61 26.92"></svg:path></svg:g>`,
})
export class PhDatabaseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeskDuotoneIcon],svg[ph-desk-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 72v64H24V72Z" opacity=".2"></svg:path><svg:path d="M248 64H8a8 8 0 0 0 0 16h8v112a8 8 0 0 0 16 0v-48h192v48a8 8 0 0 0 16 0V80h8a8 8 0 0 0 0-16M32 80h88v48H32Zm192 48h-88V80h88ZM96 104a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8m64 0a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhDeskDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopDuotoneIcon],svg[ph-desktop-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v88H32V64a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h72v16H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-16h72a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24M48 56h160a8 8 0 0 1 8 8v80H40V64a8 8 0 0 1 8-8m160 128H48a8 8 0 0 1-8-8v-16h176v16a8 8 0 0 1-8 8"></svg:path></svg:g>`,
})
export class PhDesktopDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopTowerDuotoneIcon],svg[ph-desktop-tower-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 48v160a8 8 0 0 1-8 8h-80a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 72a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-8 24h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m40-48v160a16 16 0 0 1-16 16h-80a16 16 0 0 1-16-16v-16H96v16h16a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16h16v-16H32a24 24 0 0 1-24-24V96a24 24 0 0 1 24-24h104V48a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16M136 176V88H32a8 8 0 0 0-8 8v72a8 8 0 0 0 8 8Zm96 32V48h-80v160zm-40-40a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhDesktopTowerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDetectiveDuotoneIcon],svg[ph-detective-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 180a28 28 0 1 1-28-28a28 28 0 0 1 28 28m76-28a28 28 0 1 0 28 28a28 28 0 0 0-28-28M166.11 51.29a8 8 0 0 0-12.7-.29l-12.94 15a16 16 0 0 1-24.94 0l-12.94-15a8 8 0 0 0-12.7.29L40 120h176Z" opacity=".2"></svg:path><svg:path d="M248 112h-27.92l-47.5-65.41a16 16 0 0 0-25.31-.72l-12.85 14.9l-.2.23a7.95 7.95 0 0 1-12.44 0l-.2-.23l-12.85-14.9a16 16 0 0 0-25.31.72L35.92 112H8a8 8 0 0 0 0 16h240a8 8 0 0 0 0-16M96.34 56l.19.24l12.85 14.89a24 24 0 0 0 37.24 0l12.85-14.89c.06-.08.1-.16.17-.24l40.66 56H55.69ZM180 144a36 36 0 0 0-35.77 32h-32.46a36 36 0 1 0-1.83 16h36.12A36 36 0 1 0 180 144M76 200a20 20 0 1 1 20-20a20 20 0 0 1-20 20m104 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path></svg:g>`,
})
export class PhDetectiveDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevToLogoDuotoneIcon],svg[ph-dev-to-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 72v112a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h208a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M232 56H24A16 16 0 0 0 8 72v112a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16m0 128H24V72h208zm-104-80v16h8a8 8 0 0 1 0 16h-8v16h16a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16Zm87.7-5.83l-18 64a8 8 0 0 1-15.4 0l-18-64a8 8 0 0 1 15.4-4.34l10.3 36.62l10.3-36.62a8 8 0 1 1 15.4 4.34M64 88h-8a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h8a32 32 0 0 0 32-32v-16a32 32 0 0 0-32-32m16 48a16 16 0 0 1-16 16v-48a16 16 0 0 1 16 16Z"></svg:path></svg:g>`,
})
export class PhDevToLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileCameraDuotoneIcon],svg[ph-device-mobile-camera-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 40v176a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24m8 200a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8ZM140 60a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDeviceMobileCameraDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileDuotoneIcon],svg[ph-device-mobile-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v144H64V56Z" opacity=".2"></svg:path><svg:path d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24M72 64h112v128H72Zm8-32h96a8 8 0 0 1 8 8v8H72v-8a8 8 0 0 1 8-8m96 192H80a8 8 0 0 1-8-8v-8h112v8a8 8 0 0 1-8 8"></svg:path></svg:g>`,
})
export class PhDeviceMobileDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSlashDuotoneIcon],svg[ph-device-mobile-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 40v176a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m213.92 210.62l-160-176a8 8 0 1 0-11.84 10.76L56 60.69V216a24 24 0 0 0 24 24h96a24 24 0 0 0 23.82-21.11l2.26 2.49a8 8 0 1 0 11.84-10.76M184 216a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V78.29l112 123.2ZM68.7 24a8 8 0 0 1 8-8H176a24 24 0 0 1 24 24v110.83a8 8 0 1 1-16 0V40a8 8 0 0 0-8-8H76.7a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhDeviceMobileSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSpeakerDuotoneIcon],svg[ph-device-mobile-speaker-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 40v176a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24m8 200a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8ZM168 56a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhDeviceMobileSpeakerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceRotateDuotoneIcon],svg[ph-device-rotate-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v144a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m205.66 221.66l-24 24a8 8 0 0 1-11.32-11.32L180.69 224H80a24 24 0 0 1-24-24v-96a8 8 0 0 1 16 0v96a8 8 0 0 0 8 8h100.69l-10.35-10.34a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32M80 72a8 8 0 0 0 5.66-13.66L75.31 48H176a8 8 0 0 1 8 8v96a8 8 0 0 0 16 0V56a24 24 0 0 0-24-24H75.31l10.35-10.34a8 8 0 1 0-11.32-11.32l-24 24a8 8 0 0 0 0 11.32l24 24A8 8 0 0 0 80 72"></svg:path></svg:g>`,
})
export class PhDeviceRotateDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletCameraDuotoneIcon],svg[ph-device-tablet-camera-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 48v160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24m8 184a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8ZM140 68a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDeviceTabletCameraDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletDuotoneIcon],svg[ph-device-tablet-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 64v128H48V64Z" opacity=".2"></svg:path><svg:path d="M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24M56 72h144v112H56Zm8-32h128a8 8 0 0 1 8 8v8H56v-8a8 8 0 0 1 8-8m128 176H64a8 8 0 0 1-8-8v-8h144v8a8 8 0 0 1-8 8"></svg:path></svg:g>`,
})
export class PhDeviceTabletDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletSpeakerDuotoneIcon],svg[ph-device-tablet-speaker-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 48v160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24m8 184a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8ZM168 64a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhDeviceTabletSpeakerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevicesDuotoneIcon],svg[ph-devices-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 64v16h-24a16 16 0 0 0-16 16v80H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M224 72h-16v-8a24 24 0 0 0-24-24H40a24 24 0 0 0-24 24v96a24 24 0 0 0 24 24h112v8a24 24 0 0 0 24 24h48a24 24 0 0 0 24-24V96a24 24 0 0 0-24-24M40 168a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v8h-16a24 24 0 0 0-24 24v72Zm192 24a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Zm-96 16a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m80-96a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhDevicesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondDuotoneIcon],svg[ph-diamond-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m229.67 133.62l-96 96a7.94 7.94 0 0 1-11.24 0l-96-96a7.94 7.94 0 0 1 0-11.24l96.05-96a7.94 7.94 0 0 1 11.24 0l96 96.05a7.94 7.94 0 0 1-.05 11.19" opacity=".2"></svg:path><svg:path d="m235.33 116.72l-96.05-96.06a16 16 0 0 0-22.56 0l-96 96.06a16 16 0 0 0 0 22.56l96.05 96.06a16 16 0 0 0 22.56 0l96.05-96.06a16 16 0 0 0 0-22.56ZM128 224l-96-96l96-96l96 96Z"></svg:path></svg:g>`,
})
export class PhDiamondDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondsFourDuotoneIcon],svg[ph-diamonds-four-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 104L88 64l40-40l40 40Zm-40 88l40 40l40-40l-40-40ZM192 88l-40 40l40 40l40-40ZM64 88l-40 40l40 40l40-40Z" opacity=".2"></svg:path><svg:path d="M122.34 109.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32ZM128 35.31L156.69 64L128 92.69L99.31 64Zm5.66 111a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32ZM128 220.69L99.31 192L128 163.31L156.69 192Zm109.66-98.35l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32M192 156.69L163.31 128L192 99.31L220.69 128Zm-82.34-34.35l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32M64 156.69L35.31 128L64 99.31L92.69 128Z"></svg:path></svg:g>`,
})
export class PhDiamondsFourDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFiveDuotoneIcon],svg[ph-dice-five-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128a24 24 0 0 1-24 24H64a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16ZM104 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-72 72a12 12 0 1 1-12-12a12 12 0 0 1 12 12m36-36a12 12 0 1 1-12-12a12 12 0 0 1 12 12m36 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDiceFiveDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFourDuotoneIcon],svg[ph-dice-four-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128a24 24 0 0 1-24 24H64a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16Zm-96-92a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-56 56a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDiceFourDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceOneDuotoneIcon],svg[ph-dice-one-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128a24 24 0 0 1-24 24H64a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16Zm-68-64a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDiceOneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceSixDuotoneIcon],svg[ph-dice-six-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128a24 24 0 0 1-24 24H64a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16ZM104 84a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-72 44a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-72 44a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDiceSixDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceThreeDuotoneIcon],svg[ph-dice-three-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128a24 24 0 0 1-24 24H64a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16ZM104 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12m36 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12m36 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDiceThreeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceTwoDuotoneIcon],svg[ph-dice-two-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128a24 24 0 0 1-24 24H64a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16Zm-88-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 40a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDiceTwoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscDuotoneIcon],svg[ph-disc-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-28.12-67.88l-45.25 45.25A32 32 0 1 0 160 128Z" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.2 96a39.8 39.8 0 0 0-5.84-14l34.23-34.24a87.54 87.54 0 0 1 20 48.28Zm-15.2 8a24 24 0 1 1-24-24a24 24 0 0 1 24 24m-24 88a88 88 0 1 1 56.28-155.6L150 94.64A40 40 0 1 0 167.2 136h48.43A88.11 88.11 0 0 1 128 216"></svg:path></svg:g>`,
})
export class PhDiscDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscoBallDuotoneIcon],svg[ph-disco-ball-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 152a80 80 0 0 1-80 80s32-24 32-80Zm-80-80s-32 24-32 80h64c0-56-32-80-32-80" opacity=".2"></svg:path><svg:path d="M120 64.37V16a8 8 0 0 0-16 0v48.37a88 88 0 1 0 16 0M183.54 144h-31.77c-1.51-28.36-10.79-48.36-19.44-61.06A72.16 72.16 0 0 1 183.54 144m-95.3 16h47.52c-2 33.52-16.13 52.95-23.76 61.08c-7.64-8.15-21.77-27.57-23.76-61.08m0-16c2-33.52 16.13-52.95 23.76-61.08c7.64 8.15 21.77 27.57 23.76 61.08Zm3.43-61.06C83 95.64 73.74 115.64 72.23 144H40.46a72.16 72.16 0 0 1 51.21-61.06M40.46 160h31.77c1.51 28.36 10.79 48.36 19.44 61.06A72.16 72.16 0 0 1 40.46 160m91.87 61.06c8.65-12.7 17.93-32.7 19.44-61.06h31.77a72.16 72.16 0 0 1-51.21 61.06M256 88a8 8 0 0 1-8 8h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8M152 40a8 8 0 0 1 8-8h16V16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V48h-16a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhDiscoBallDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscordLogoDuotoneIcon],svg[ph-discord-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m235.21 185.59l-67 29.7a8.15 8.15 0 0 1-11-4.56L147 183.06a191 191 0 0 1-19 .94a191 191 0 0 1-19-.94l-10.25 27.67a8.15 8.15 0 0 1-11 4.56l-67-29.7a8 8 0 0 1-4.55-9.24L45.77 60a8.08 8.08 0 0 1 6.54-6l36.06-5.92a8.1 8.1 0 0 1 9.21 6l5 19.63a192.3 192.3 0 0 1 50.88 0l5-19.63a8.1 8.1 0 0 1 9.21-6L203.69 54a8.08 8.08 0 0 1 6.54 6l29.53 116.37a8 8 0 0 1-4.55 9.22" opacity=".2"></svg:path><svg:path d="M104 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m60-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m74.45 64.9l-67 29.71a16.17 16.17 0 0 1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11 22a16.18 16.18 0 0 1-21.71 9.1l-67-29.71a15.94 15.94 0 0 1-9.06-18.51L38 58a16.08 16.08 0 0 1 13-11.87l36.06-5.92a16.21 16.21 0 0 1 18.26 11.88l3.26 12.83Q118.11 64 128 64t19.4.92l3.26-12.83a16.22 16.22 0 0 1 18.26-11.88L205 46.13A16.08 16.08 0 0 1 218 58l29.53 116.38a15.94 15.94 0 0 1-9.08 18.52M232 178.28L202.47 62h-.08l-36.06-6a.17.17 0 0 0-.17 0l-2.83 11.14c5 .94 10 2.06 14.83 3.42A8 8 0 0 1 176 86.31a8 8 0 0 1-2.16-.3A172.3 172.3 0 0 0 128 80a172.3 172.3 0 0 0-45.84 6a8 8 0 1 1-4.32-15.4c4.82-1.36 9.78-2.48 14.82-3.42L89.83 56a.2.2 0 0 0-.12 0l-36.1 5.92a.2.2 0 0 0-.09 0L24 178.33L91 208a.21.21 0 0 0 .22 0L98 189.72a173 173 0 0 1-20.14-4.32a8 8 0 0 1 4.3-15.4a172 172 0 0 0 45.84 6a172 172 0 0 0 45.84-6a8 8 0 0 1 4.32 15.41a173 173 0 0 1-20.16 4.31l6.75 18.28a.22.22 0 0 0 .21 0Z"></svg:path></svg:g>`,
})
export class PhDiscordLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDivideDuotoneIcon],svg[ph-divide-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-96-48a16 16 0 1 0-16-16a16 16 0 0 0 16 16m0 96a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path></svg:g>`,
})
export class PhDivideDuotoneIcon {
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
