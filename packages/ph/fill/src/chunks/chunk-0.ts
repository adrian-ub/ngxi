import { Component, input } from '@angular/core'

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
  selector: 'svg[phArrowFatLinesLeftFillIcon],svg[ph-arrow-fat-lines-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 80v96a8 8 0 0 1-8 8h-24v40a8 8 0 0 1-13.66 5.66l-96-96a8 8 0 0 1 0-11.32l96-96A8 8 0 0 1 128 32v40h24a8 8 0 0 1 8 8m24-8a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8m32 0a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhArrowFatLinesLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesRightFillIcon],svg[ph-arrow-fat-lines-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 80v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0m24-8a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8m165.66 50.34l-96-96A8 8 0 0 0 128 32v40h-24a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h24v40a8 8 0 0 0 13.66 5.66l96-96a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhArrowFatLinesRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesUpFillIcon],svg[ph-arrow-fat-lines-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 216a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8m45.66-101.66l-96-96a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 32 128h40v24a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8v-24h40a8 8 0 0 0 5.66-13.66M176 176H80a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhArrowFatLinesUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatRightFillIcon],svg[ph-arrow-fat-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.66 133.66l-96 96A8 8 0 0 1 128 224v-40H48a16 16 0 0 1-16-16V88a16 16 0 0 1 16-16h80V32a8 8 0 0 1 13.66-5.66l96 96a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowFatRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatUpFillIcon],svg[ph-arrow-fat-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.39 123.06A8 8 0 0 1 224 128h-40v80a16 16 0 0 1-16 16H88a16 16 0 0 1-16-16v-80H32a8 8 0 0 1-5.66-13.66l96-96a8 8 0 0 1 11.32 0l96 96a8 8 0 0 1 1.73 8.72"></svg:path>`,
})
export class PhArrowFatUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLeftFillIcon],svg[ph-arrow-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a8 8 0 0 1-8 8h-96v64a8 8 0 0 1-13.66 5.66l-72-72a8 8 0 0 1 0-11.32l72-72A8 8 0 0 1 120 56v64h96a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhArrowLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownFillIcon],svg[ph-arrow-line-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50.34 117.66A8 8 0 0 1 56 104h64V32a8 8 0 0 1 16 0v72h64a8 8 0 0 1 5.66 13.66l-72 72a8 8 0 0 1-11.32 0ZM216 208H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhArrowLineDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownLeftFillIcon],svg[ph-arrow-line-down-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M189.66 90.34a8 8 0 0 1 0 11.32L131.31 160l42.35 42.34A8 8 0 0 1 168 216H72a8 8 0 0 1-8-8v-96a8 8 0 0 1 13.66-5.66L120 148.69l58.34-58.35a8 8 0 0 1 11.32 0M224 40H48a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhArrowLineDownLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownRightFillIcon],svg[ph-arrow-line-down-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-28.94 56.61a8 8 0 0 0-8.72 1.73L144 140.69L85.66 82.34a8 8 0 0 0-11.32 11.32L132.69 152l-42.35 42.34A8 8 0 0 0 96 208h96a8 8 0 0 0 8-8v-96a8 8 0 0 0-4.94-7.39"></svg:path>`,
})
export class PhArrowLineDownRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineLeftFillIcon],svg[ph-arrow-line-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0m176 80h-72V56a8 8 0 0 0-13.66-5.66l-72 72a8 8 0 0 0 0 11.32l72 72A8 8 0 0 0 152 200v-64h72a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhArrowLineLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineRightFillIcon],svg[ph-arrow-line-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0M117.66 50.34A8 8 0 0 0 104 56v64H32a8 8 0 0 0 0 16h72v64a8 8 0 0 0 13.66 5.66l72-72a8 8 0 0 0 0-11.32Z"></svg:path>`,
})
export class PhArrowLineRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpFillIcon],svg[ph-arrow-line-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.66 138.34A8 8 0 0 1 200 152h-64v72a8 8 0 0 1-16 0v-72H56a8 8 0 0 1-5.66-13.66l72-72a8 8 0 0 1 11.32 0ZM216 32H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhArrowLineUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpLeftFillIcon],svg[ph-arrow-line-up-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 144V48a8 8 0 0 1 8-8h96a8 8 0 0 1 5.66 13.66L131.31 96l58.35 58.34a8 8 0 0 1-11.32 11.32L120 107.31l-42.34 42.35A8 8 0 0 1 64 144m160 56H48a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhArrowLineUpLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpRightFillIcon],svg[ph-arrow-line-up-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M74.34 173.66a8 8 0 0 1 0-11.32L132.69 104L90.34 61.66A8 8 0 0 1 96 48h96a8 8 0 0 1 8 8v96a8 8 0 0 1-13.66 5.66L144 115.31l-58.34 58.35a8 8 0 0 1-11.32 0M216 208H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhArrowLineUpRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowRightFillIcon],svg[ph-arrow-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.66 133.66l-72 72A8 8 0 0 1 136 200v-64H40a8 8 0 0 1 0-16h96V56a8 8 0 0 1 13.66-5.66l72 72a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownFillIcon],svg[ph-arrow-square-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-42.34 109.66l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 148.69V88a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhArrowSquareDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownLeftFillIcon],svg[ph-arrow-square-down-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-42.34 69.66L115.31 152H144a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v28.69l50.34-50.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhArrowSquareDownLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownRightFillIcon],svg[ph-arrow-square-down-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-40 128a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h28.69l-50.35-50.34a8 8 0 0 1 11.32-11.32L152 140.69V112a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhArrowSquareDownRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareInFillIcon],svg[ph-arrow-square-in-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 136v64a8 8 0 0 1-13.66 5.66L88 179.31l-42.34 42.35a8 8 0 0 1-11.32-11.32L76.69 168l-26.35-26.34A8 8 0 0 1 56 128h64a8 8 0 0 1 8 8m80-104H80a16 16 0 0 0-16 16v48a8 8 0 0 0 16 0V48h128v128h-48a8 8 0 0 0 0 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhArrowSquareInFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareLeftFillIcon],svg[ph-arrow-square-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-40 104h-60.69l18.35 18.34a8 8 0 0 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32L107.31 120H168a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhArrowSquareLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareOutFillIcon],svg[ph-arrow-square-out-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 136v72a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h72a8 8 0 0 1 0 16H48v128h128v-72a8 8 0 0 1 16 0m32-96a8 8 0 0 0-8-8h-64a8 8 0 0 0-5.66 13.66L172.69 72l-42.35 42.34a8 8 0 0 0 11.32 11.32L184 83.31l26.34 26.35A8 8 0 0 0 224 104Z"></svg:path>`,
})
export class PhArrowSquareOutFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareRightFillIcon],svg[ph-arrow-square-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-34.34 101.66l-32 32a8 8 0 0 1-11.32-11.32L148.69 136H88a8 8 0 0 1 0-16h60.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowSquareRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareUpFillIcon],svg[ph-arrow-square-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-42.34 93.66a8 8 0 0 1-11.32 0L136 107.31V168a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowSquareUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareUpLeftFillIcon],svg[ph-arrow-square-up-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-42.34 133.66a8 8 0 0 1-11.32 0L104 115.31V144a8 8 0 0 1-16 0V96a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-28.69l50.35 50.34a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowSquareUpLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareUpRightFillIcon],svg[ph-arrow-square-up-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-40 112a8 8 0 0 1-16 0v-28.69l-50.34 50.35a8 8 0 0 1-11.32-11.32L140.69 104H112a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhArrowSquareUpRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUDownLeftFillIcon],svg[ph-arrow-u-down-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 112a64.07 64.07 0 0 1-64 64H88v40a8 8 0 0 1-13.66 5.66l-48-48a8 8 0 0 1 0-11.32l48-48A8 8 0 0 1 88 120v40h80a48 48 0 0 0 0-96H80a8 8 0 0 1 0-16h88a64.07 64.07 0 0 1 64 64"></svg:path>`,
})
export class PhArrowUDownLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUDownRightFillIcon],svg[ph-arrow-u-down-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 173.66l-48 48A8 8 0 0 1 168 216v-40H88a64 64 0 0 1 0-128h88a8 8 0 0 1 0 16H88a48 48 0 0 0 0 96h80v-40a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowUDownRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowULeftDownFillIcon],svg[ph-arrow-u-left-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 88v88a8 8 0 0 1-16 0V88a48 48 0 0 0-96 0v80h40a8 8 0 0 1 5.66 13.66l-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 40 168h40V88a64 64 0 0 1 128 0"></svg:path>`,
})
export class PhArrowULeftDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowULeftUpFillIcon],svg[ph-arrow-u-left-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80v88a64 64 0 0 1-128 0V88H40a8 8 0 0 1-5.66-13.66l48-48a8 8 0 0 1 11.32 0l48 48A8 8 0 0 1 136 88H96v80a48 48 0 0 0 96 0V80a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhArrowULeftUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowURightDownFillIcon],svg[ph-arrow-u-right-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.66 181.66l-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 120 168h40V88a48 48 0 0 0-96 0v88a8 8 0 0 1-16 0V88a64 64 0 0 1 128 0v80h40a8 8 0 0 1 5.66 13.66"></svg:path>`,
})
export class PhArrowURightDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowURightUpFillIcon],svg[ph-arrow-u-right-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.39 83.06A8 8 0 0 1 216 88h-40v80a64 64 0 0 1-128 0V80a8 8 0 0 1 16 0v88a48 48 0 0 0 96 0V88h-40a8 8 0 0 1-5.66-13.66l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1 1.73 8.72"></svg:path>`,
})
export class PhArrowURightUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUUpLeftFillIcon],svg[ph-arrow-u-up-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 144a64.07 64.07 0 0 1-64 64H80a8 8 0 0 1 0-16h88a48 48 0 0 0 0-96H88v40a8 8 0 0 1-13.66 5.66l-48-48a8 8 0 0 1 0-11.32l48-48A8 8 0 0 1 88 40v40h80a64.07 64.07 0 0 1 64 64"></svg:path>`,
})
export class PhArrowUUpLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUUpRightFillIcon],svg[ph-arrow-u-up-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 136V96H88a48 48 0 0 0 0 96h88a8 8 0 0 1 0 16H88a64 64 0 0 1 0-128h80V40a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32l-48 48A8 8 0 0 1 168 136"></svg:path>`,
})
export class PhArrowUUpRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUpFillIcon],svg[ph-arrow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207.39 115.06A8 8 0 0 1 200 120h-64v96a8 8 0 0 1-16 0v-96H56a8 8 0 0 1-5.66-13.66l72-72a8 8 0 0 1 11.32 0l72 72a8 8 0 0 1 1.73 8.72"></svg:path>`,
})
export class PhArrowUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUpLeftFillIcon],svg[ph-arrow-up-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M197.66 197.66a8 8 0 0 1-11.32 0L116 127.31l-46.34 46.35A8 8 0 0 1 56 168V64a8 8 0 0 1 8-8h104a8 8 0 0 1 5.66 13.66L127.31 116l70.35 70.34a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowUpLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUpRightFillIcon],svg[ph-arrow-up-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 64v104a8 8 0 0 1-13.66 5.66L140 127.31l-70.34 70.35a8 8 0 0 1-11.32-11.32L128.69 116L82.34 69.66A8 8 0 0 1 88 56h104a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhArrowUpRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsClockwiseFillIcon],svg[ph-arrows-clockwise-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48v48a8 8 0 0 1-8 8h-48a8 8 0 0 1-5.66-13.66L180.65 72a79.48 79.48 0 0 0-54.72-22.09h-.45a79.52 79.52 0 0 0-55.89 22.8a8 8 0 0 1-11.18-11.44A96 96 0 0 1 192 60.7l18.36-18.36A8 8 0 0 1 224 48m-37.59 135.29a80 80 0 0 1-111.06.71l18.31-18.31A8 8 0 0 0 88 152H40a8 8 0 0 0-8 8v48a8 8 0 0 0 13.66 5.66L64 195.3a95.42 95.42 0 0 0 66 26.76h.53a95.36 95.36 0 0 0 67.07-27.33a8 8 0 0 0-11.18-11.44Z"></svg:path>`,
})
export class PhArrowsClockwiseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsCounterClockwiseFillIcon],svg[ph-arrows-counter-clockwise-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 104H40a8 8 0 0 1-8-8V48a8 8 0 0 1 13.66-5.66L64 60.7a95.42 95.42 0 0 1 66-26.76h.53a95.36 95.36 0 0 1 67.07 27.33a8 8 0 0 1-11.18 11.44a79.52 79.52 0 0 0-55.89-22.77h-.45A79.48 79.48 0 0 0 75.35 72l18.31 18.34A8 8 0 0 1 88 104m128 48h-48a8 8 0 0 0-5.66 13.66L180.65 184a79.48 79.48 0 0 1-54.72 22.09h-.45a79.52 79.52 0 0 1-55.89-22.77a8 8 0 1 0-11.18 11.44a95.36 95.36 0 0 0 67.07 27.33h.52a95.42 95.42 0 0 0 66-26.76l18.36 18.36A8 8 0 0 0 224 208v-48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhArrowsCounterClockwiseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsDownUpFillIcon],svg[ph-arrows-down-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M119.39 172.94a8 8 0 0 1-1.73 8.72l-32 32a8 8 0 0 1-11.32 0l-32-32A8 8 0 0 1 48 168h24V48a8 8 0 0 1 16 0v120h24a8 8 0 0 1 7.39 4.94m94.27-98.6l-32-32a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 144 88h24v120a8 8 0 0 0 16 0V88h24a8 8 0 0 0 5.66-13.66"></svg:path>`,
})
export class PhArrowsDownUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsHorizontalFillIcon],svg[ph-arrows-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.66 133.66l-32 32A8 8 0 0 1 192 160v-24H64v24a8 8 0 0 1-13.66 5.66l-32-32a8 8 0 0 1 0-11.32l32-32A8 8 0 0 1 64 96v24h128V96a8 8 0 0 1 13.66-5.66l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowsHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInCardinalFillIcon],svg[ph-arrows-in-cardinal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m101.66 133.66l-32 32A8 8 0 0 1 56 160v-24H24a8 8 0 0 1 0-16h32V96a8 8 0 0 1 13.66-5.66l32 32a8 8 0 0 1 0 11.32m20.68-32a8 8 0 0 0 11.32 0l32-32A8 8 0 0 0 160 56h-24V24a8 8 0 0 0-16 0v32H96a8 8 0 0 0-5.66 13.66Zm11.32 52.68a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 96 200h24v32a8 8 0 0 0 16 0v-32h24a8 8 0 0 0 5.66-13.66ZM232 120h-32V96a8 8 0 0 0-13.66-5.66l-32 32a8 8 0 0 0 0 11.32l32 32A8 8 0 0 0 200 160v-24h32a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhArrowsInCardinalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInFillIcon],svg[ph-arrows-in-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 104V64a8 8 0 0 1 13.66-5.66L172 72.69l30.34-30.35a8 8 0 0 1 11.32 11.32L183.31 84l14.35 14.34A8 8 0 0 1 192 112h-40a8 8 0 0 1-8-8m-40 40H64a8 8 0 0 0-5.66 13.66L72.69 172l-30.35 30.34a8 8 0 0 0 11.32 11.32L84 183.31l14.34 14.35A8 8 0 0 0 112 192v-40a8 8 0 0 0-8-8m3.06-87.39a8 8 0 0 0-8.72 1.73L84 72.69L53.66 42.34a8 8 0 0 0-11.32 11.32L72.69 84L58.34 98.34A8 8 0 0 0 64 112h40a8 8 0 0 0 8-8V64a8 8 0 0 0-4.94-7.39M183.31 172l14.35-14.34A8 8 0 0 0 192 144h-40a8 8 0 0 0-8 8v40a8 8 0 0 0 13.66 5.66L172 183.31l30.34 30.35a8 8 0 0 0 11.32-11.32Z"></svg:path>`,
})
export class PhArrowsInFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInLineHorizontalFillIcon],svg[ph-arrows-in-line-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M101.66 122.34a8 8 0 0 1 0 11.32l-32 32A8 8 0 0 1 56 160v-24H16a8 8 0 0 1 0-16h40V96a8 8 0 0 1 13.66-5.66ZM240 120h-40V96a8 8 0 0 0-13.66-5.66l-32 32a8 8 0 0 0 0 11.32l32 32A8 8 0 0 0 200 160v-24h40a8 8 0 0 0 0-16M128 32a8 8 0 0 0-8 8v176a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhArrowsInLineHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInLineVerticalFillIcon],svg[ph-arrows-in-line-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90.34 69.66A8 8 0 0 1 96 56h24V16a8 8 0 0 1 16 0v40h24a8 8 0 0 1 5.66 13.66l-32 32a8 8 0 0 1-11.32 0Zm43.32 84.68a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 96 200h24v40a8 8 0 0 0 16 0v-40h24a8 8 0 0 0 5.66-13.66ZM216 120H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhArrowsInLineVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInSimpleFillIcon],svg[ph-arrows-in-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 144v48a8 8 0 0 1-13.66 5.66L88 179.31l-34.34 34.35a8 8 0 0 1-11.32-11.32L76.69 168l-18.35-18.34A8 8 0 0 1 64 136h48a8 8 0 0 1 8 8m93.66-101.66a8 8 0 0 0-11.32 0L168 76.69l-18.34-18.35A8 8 0 0 0 136 64v48a8 8 0 0 0 8 8h48a8 8 0 0 0 5.66-13.66L179.31 88l34.35-34.34a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhArrowsInSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsLeftRightFillIcon],svg[ph-arrows-left-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.34 85.66a8 8 0 0 1 0-11.32l32-32A8 8 0 0 1 88 48v24h120a8 8 0 0 1 0 16H88v24a8 8 0 0 1-13.66 5.66Zm171.32 84.68l-32-32A8 8 0 0 0 168 144v24H48a8 8 0 0 0 0 16h120v24a8 8 0 0 0 13.66 5.66l32-32a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhArrowsLeftRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsMergeFillIcon],svg[ph-arrows-merge-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 40v64a8 8 0 0 1-2.34 5.66L136 163.31V192h24a8 8 0 0 1 5.66 13.66l-32 32a8 8 0 0 1-11.32 0l-32-32A8 8 0 0 1 96 192h24v-28.69l-53.66-53.65A8 8 0 0 1 64 104V40a8 8 0 0 1 16 0v60.69l48 48l48-48V40a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhArrowsMergeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutCardinalFillIcon],svg[ph-arrows-out-cardinal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 136H64v24a8 8 0 0 1-13.66 5.66l-32-32a8 8 0 0 1 0-11.32l32-32A8 8 0 0 1 64 96v24h32a8 8 0 0 1 0 16m0-72h24v32a8 8 0 0 0 16 0V64h24a8 8 0 0 0 5.66-13.66l-32-32a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 96 64m141.66 58.34l-32-32A8 8 0 0 0 192 96v24h-32a8 8 0 0 0 0 16h32v24a8 8 0 0 0 13.66 5.66l32-32a8 8 0 0 0 0-11.32M160 192h-24v-32a8 8 0 0 0-16 0v32H96a8 8 0 0 0-5.66 13.66l32 32a8 8 0 0 0 11.32 0l32-32A8 8 0 0 0 160 192"></svg:path>`,
})
export class PhArrowsOutCardinalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutFillIcon],svg[ph-arrows-out-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M109.66 146.34a8 8 0 0 1 0 11.32L83.31 184l18.35 18.34A8 8 0 0 1 96 216H48a8 8 0 0 1-8-8v-48a8 8 0 0 1 13.66-5.66L72 172.69l26.34-26.35a8 8 0 0 1 11.32 0M83.31 72l18.35-18.34A8 8 0 0 0 96 40H48a8 8 0 0 0-8 8v48a8 8 0 0 0 13.66 5.66L72 83.31l26.34 26.35a8 8 0 0 0 11.32-11.32ZM208 40h-48a8 8 0 0 0-5.66 13.66L172.69 72l-26.35 26.34a8 8 0 0 0 11.32 11.32L184 83.31l18.34 18.35A8 8 0 0 0 216 96V48a8 8 0 0 0-8-8m3.06 112.61a8 8 0 0 0-8.72 1.73L184 172.69l-26.34-26.35a8 8 0 0 0-11.32 11.32L172.69 184l-18.35 18.34A8 8 0 0 0 160 216h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-4.94-7.39"></svg:path>`,
})
export class PhArrowsOutFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutLineHorizontalFillIcon],svg[ph-arrows-out-line-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 128a8 8 0 0 1-8 8H56v24a8 8 0 0 1-13.66 5.66l-32-32a8 8 0 0 1 0-11.32l32-32A8 8 0 0 1 56 96v24h40a8 8 0 0 1 8 8m141.66-5.66l-32-32A8 8 0 0 0 200 96v24h-40a8 8 0 0 0 0 16h40v24a8 8 0 0 0 13.66 5.66l32-32a8 8 0 0 0 0-11.32M128 32a8 8 0 0 0-8 8v176a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhArrowsOutLineHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutLineVerticalFillIcon],svg[ph-arrows-out-line-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88.61 51.06a8 8 0 0 1 1.73-8.72l32-32a8 8 0 0 1 11.32 0l32 32A8 8 0 0 1 160 56h-24v40a8 8 0 0 1-16 0V56H96a8 8 0 0 1-7.39-4.94M216 120H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m-56 80h-24v-40a8 8 0 0 0-16 0v40H96a8 8 0 0 0-5.66 13.66l32 32a8 8 0 0 0 11.32 0l32-32A8 8 0 0 0 160 200"></svg:path>`,
})
export class PhArrowsOutLineVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutSimpleFillIcon],svg[ph-arrows-out-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M117.66 138.34a8 8 0 0 1 0 11.32L83.31 184l18.35 18.34A8 8 0 0 1 96 216H48a8 8 0 0 1-8-8v-48a8 8 0 0 1 13.66-5.66L72 172.69l34.34-34.35a8 8 0 0 1 11.32 0M208 40h-48a8 8 0 0 0-5.66 13.66L172.69 72l-34.35 34.34a8 8 0 0 0 11.32 11.32L184 83.31l18.34 18.35A8 8 0 0 0 216 96V48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhArrowsOutSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsSplitFillIcon],svg[ph-arrows-split-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 189.66l-32 32a8 8 0 0 1-11.32 0l-32-32A8 8 0 0 1 160 176h24v-36.69l-56-56l-56 56V176h24a8 8 0 0 1 5.66 13.66l-32 32a8 8 0 0 1-11.32 0l-32-32A8 8 0 0 1 32 176h24v-40a8 8 0 0 1 2.34-5.66L120 68.69V24a8 8 0 0 1 16 0v44.69l61.66 61.65A8 8 0 0 1 200 136v40h24a8 8 0 0 1 5.66 13.66"></svg:path>`,
})
export class PhArrowsSplitFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsVerticalFillIcon],svg[ph-arrows-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M167.39 196.94a8 8 0 0 1-1.73 8.72l-32 32a8 8 0 0 1-11.32 0l-32-32A8 8 0 0 1 96 192h24V64H96a8 8 0 0 1-5.66-13.66l32-32a8 8 0 0 1 11.32 0l32 32A8 8 0 0 1 160 64h-24v128h24a8 8 0 0 1 7.39 4.94"></svg:path>`,
})
export class PhArrowsVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArticleFillIcon],svg[ph-article-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-40 128H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m0-32H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m0-32H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhArticleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArticleMediumFillIcon],svg[ph-article-medium-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M72 144a8 8 0 0 1-4.89 7.37A7.9 7.9 0 0 1 64 152H52a8 8 0 0 1 0-16h4V88h-4a8 8 0 0 1 0-16h12a8 8 0 0 1 6.91 4L92 112.12L113.09 76a8 8 0 0 1 6.91-4h12a8 8 0 0 1 0 16h-4v48h4a8 8 0 0 1 0 16h-12a7.9 7.9 0 0 1-3.11-.63A8 8 0 0 1 112 144v-34.41L98.91 132a8 8 0 0 1-13.82 0L72 109.59Zm128 40H88a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16m0-32h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m0-32h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhArticleMediumFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArticleNyTimesFillIcon],svg[ph-article-ny-times-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M64 92a8 8 0 0 1-16 0V80a8 8 0 0 1 8-8h72a8 8 0 0 1 8 8v12a8 8 0 0 1-16 0v-4h-20v48h4a8 8 0 0 1 0 16H80a8 8 0 0 1 0-16h4V88H64Zm136 92H80a8 8 0 0 1 0-16h120a8 8 0 0 1 0 16m0-32h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhArticleNyTimesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAsclepiusFillIcon],svg[ph-asclepius-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 128v72h11.62A12.25 12.25 0 0 0 160 188.53a12 12 0 0 0-5.93-10.87a4.08 4.08 0 0 1-2.06-3.49v-8.79a4 4 0 0 1 5.25-3.81A28.06 28.06 0 0 1 176 187.71c.16 15.56-13 28.29-28.59 28.29H136v16a8 8 0 0 1-16 0v-16H96a8 8 0 0 1-8-8.53a8.17 8.17 0 0 1 8.27-7.47H120v-72h-15.54c-8.6 0-16 6.6-16.44 15.19a16 16 0 0 0 12.87 16.51a3.94 3.94 0 0 1 3.11 3.89V172a4 4 0 0 1-4 4a36 36 0 0 1-36-36.87c.47-19.65 17-35.13 36.68-35.13H120V24a8 8 0 0 1 16 0v80h32a16 16 0 0 0 16-16.81C183.56 78.6 176.14 72 167.54 72H156a4 4 0 0 1-4-4V44a4 4 0 0 1 4-4h15.22c24.62 0 45.2 20.15 44.77 44.76A44 44 0 0 1 172 128ZM92.66 72H100a4 4 0 0 0 4-4V44a4 4 0 0 0-4-4H64a40 40 0 0 0-40 40v8a8 8 0 0 0 8 8h24a40 40 0 0 0 36.66-24"></svg:path>`,
})
export class PhAsclepiusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAsteriskFillIcon],svg[ph-asterisk-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m59.43 129.07a8 8 0 0 1-4 14.93a7.9 7.9 0 0 1-4-1.07L136 141.86V192a8 8 0 0 1-16 0v-50.14l-43.43 25.07A8 8 0 0 1 65.65 164a8 8 0 0 1 2.92-10.93L112 128l-43.43-25.07a8 8 0 0 1 8-13.86L120 114.14V64a8 8 0 0 1 16 0v50.14l43.43-25.07a8 8 0 0 1 8 13.86L144 128Z"></svg:path>`,
})
export class PhAsteriskFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAsteriskSimpleFillIcon],svg[ph-asterisk-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m63.34 91.83l-50.4 16.38l31.15 42.87a8 8 0 1 1-12.94 9.4L128 141.61l-31.15 42.87a8 8 0 0 1-12.94-9.4l31.15-42.87l-50.4-16.38a8 8 0 0 1 4.94-15.22L120 117V64a8 8 0 0 1 16 0v53l50.4-16.38a8 8 0 0 1 4.94 15.22Z"></svg:path>`,
})
export class PhAsteriskSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAtFillIcon],svg[ph-at-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128v1.52c-.34 14.26-5.63 30.48-28 30.48c-23.14 0-28-17.4-28-32V88a8 8 0 0 0-8.53-8a8.17 8.17 0 0 0-7.47 8.27v4a48 48 0 1 0 6.73 64.05a40 40 0 0 0 3.38 5C175.48 168 185.71 176 204 176a55 55 0 0 0 9.22-.75a4 4 0 0 1 4.09 6a104.05 104.05 0 0 1-91.4 50.75c-54.78-1.1-99.71-45.14-101.83-99.89A104 104 0 1 1 232 128m-136 0a32 32 0 1 0 32-32a32 32 0 0 0-32 32"></svg:path>`,
})
export class PhAtFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAtomFillIcon],svg[ph-atom-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.12 128c24.65-34.61 37.22-70.38 19.74-87.86S162.61 35.23 128 59.88C93.39 35.23 57.62 22.66 40.14 40.14S35.23 93.39 59.88 128c-24.65 34.61-37.22 70.38-19.74 87.86c5.63 5.63 13.15 8.14 21.91 8.14c18.47 0 42.48-11.17 66-27.88C151.47 212.83 175.47 224 194 224c8.76 0 16.29-2.52 21.91-8.14c17.43-17.48 4.86-53.25-19.79-87.86m8.43-76.55c7.64 7.64 2.48 32.4-18.52 63.28a300 300 0 0 0-21.19-23.57A303 303 0 0 0 141.27 70c30.88-21 55.64-26.19 63.28-18.55m-153.1 0c2.2-2.21 5.83-3.35 10.62-3.35c11.82 0 30.69 6.9 52.65 21.9a304 304 0 0 0-23.56 21.16A300 300 0 0 0 70 114.73C49 83.85 43.81 59.09 51.45 51.45m0 153.1c-7.64-7.64-2.45-32.4 18.55-63.28a300 300 0 0 0 21.19 23.57A304 304 0 0 0 114.73 186c-30.88 21-55.64 26.19-63.28 18.55M128 140a12 12 0 1 1 12-12a12 12 0 0 1-12 12m76.55 64.56c-7.64 7.65-32.4 2.48-63.28-18.52a304 304 0 0 0 23.57-21.19A300 300 0 0 0 186 141.27c21 30.88 26.19 55.64 18.55 63.28Z"></svg:path>`,
})
export class PhAtomFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAvocadoFillIcon],svg[ph-avocado-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m211 130.66l-29.8-84.19a56 56 0 0 0-106-1.14l-29.51 83.5A88 88 0 1 0 211 130.66M128 200a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhAvocadoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAxeFillIcon],svg[ph-axe-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M255.15 97.72A16 16 0 0 0 242 86.94a136.5 136.5 0 0 1-51.65-18l10.31-10.3a25 25 0 0 0-35.32-35.32l-13.2 13.21c-2.33-2.8-3.81-4.84-4.41-5.69a16 16 0 0 0-24.41-2.15L84.68 67.36a16 16 0 0 0 2.14 24.4c.86.6 2.9 2.08 5.7 4.41l-85.21 85.2a25 25 0 0 0 35.32 35.32l82.3-82.31a136.6 136.6 0 0 1 18 51.65a16 16 0 0 0 10.77 13.12a16.2 16.2 0 0 0 5.15.85a15.88 15.88 0 0 0 11.26-4.69l81.18-81.19a15.86 15.86 0 0 0 3.86-16.4m-78.46-63.09a9 9 0 1 1 12.68 12.68l-12.55 12.55a153 153 0 0 1-13.72-11.65ZM31.31 205.37a9 9 0 1 1-12.68-12.68l85.58-85.58a150 150 0 0 1 11.65 13.72Z"></svg:path>`,
})
export class PhAxeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBabyCarriageFillIcon],svg[ph-baby-carriage-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.58 54.55a7.5 7.5 0 0 0-1.32-1.27A79.68 79.68 0 0 0 160 32h-8a16 16 0 0 0-16 16v56H55.2A40.07 40.07 0 0 0 16 72a8 8 0 0 0 0 16a24 24 0 0 1 24 24a80.09 80.09 0 0 0 80 80h40a79.94 79.94 0 0 0 55.58-137.45m-6.91 16A63.73 63.73 0 0 1 223.48 104h-56.67ZM160 48a63.6 63.6 0 0 1 36.69 11.61L152 95.35V48Zm-56 176a16 16 0 1 1-16-16a16 16 0 0 1 16 16m104 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhBabyCarriageFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBabyFillIcon],svg[ph-baby-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134.16 24.1a4 4 0 0 0-3.56 1.81C120.3 41.48 120 55.79 120 56a8 8 0 0 0 9.68 7.79a8.24 8.24 0 0 0 6.32-8.11a8 8 0 0 1 8.8-7.68a8.14 8.14 0 0 1 7.2 8.23a24 24 0 0 1-48-.27c0-.63.09-10.78 5.44-24a4 4 0 0 0-4.59-5.39a104.16 104.16 0 0 0-80.78 105.09C26 186.72 71.23 231 126.32 231.9a104 104 0 0 0 7.84-207.8M80 127.91a12 12 0 1 1 12 12a12 12 0 0 1-12-12m80.27 54.77a61 61 0 0 1-64.54 0a8 8 0 0 1 8.54-13.54a45 45 0 0 0 47.46 0a8 8 0 0 1 8.54 13.54m3.73-42.77a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhBabyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBackpackFillIcon],svg[ph-backpack-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 40.58V32a24 24 0 0 0-24-24h-32a24 24 0 0 0-24 24v8.58A56.09 56.09 0 0 0 40 96v120a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V96a56.09 56.09 0 0 0-48-55.42M104 32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v8h-48Zm8 40h32a8 8 0 0 1 0 16h-32a8 8 0 0 1 0-16m64 144H80v-40h56v8a8 8 0 0 0 16 0v-8h24Zm0-56H80v-8a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16Z"></svg:path>`,
})
export class PhBackpackFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBackspaceFillIcon],svg[ph-backspace-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H68.53a16.12 16.12 0 0 0-13.72 7.77L9.14 123.88a8 8 0 0 0 0 8.24l45.67 76.11A16.11 16.11 0 0 0 68.53 216H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-50.34 106.34a8 8 0 0 1-11.32 11.32L136 139.31l-18.35 18.35a8 8 0 0 1-11.31-11.32L124.69 128l-18.35-18.34a8 8 0 1 1 11.31-11.32L136 116.69l18.34-18.35a8 8 0 0 1 11.32 11.32L147.31 128Z"></svg:path>`,
})
export class PhBackspaceFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBagFillIcon],svg[ph-bag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 64h-40a48 48 0 0 0-96 0H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16M96 104a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm32-72a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m48 72a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhBagFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBagSimpleFillIcon],svg[ph-bag-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 64h-40a48 48 0 0 0-96 0H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m-88-32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32"></svg:path>`,
})
export class PhBagSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBalloonFillIcon],svg[ph-balloon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 16a88.1 88.1 0 0 0-88 88c0 23.43 9.4 49.42 25.13 69.5c12.08 15.41 26.5 26 41.91 31.09l-10.39 24.26A8 8 0 0 0 104 240h48a8 8 0 0 0 7.35-11.15L149 204.59c15.4-5.07 29.83-15.68 41.91-31.09C206.6 153.42 216 127.43 216 104a88.1 88.1 0 0 0-88-88m49.32 87.89a8.5 8.5 0 0 1-1.32.11a8 8 0 0 1-7.88-6.68a41.29 41.29 0 0 0-33.43-33.43a8 8 0 1 1 2.64-15.78a57.5 57.5 0 0 1 46.57 46.57a8 8 0 0 1-6.58 9.21"></svg:path>`,
})
export class PhBalloonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBandaidsFillIcon],svg[ph-bandaids-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 116a12 12 0 1 1-12 12a12 12 0 0 1 12-12m84.28 39.72a40 40 0 1 1-56.56 56.56L128 184.57l-27.72 27.71a40 40 0 1 1-56.56-56.56L71.43 128l-27.71-27.72a40 40 0 1 1 56.56-56.56L128 71.43l27.72-27.71a40 40 0 1 1 56.56 56.56L184.57 128Zm-95.59 17.53l-33.94-33.94L55 167a24 24 0 1 0 34 34ZM161.94 128L128 94.06L94.06 128L128 161.94Zm39-39A24 24 0 1 0 167 55l-27.69 27.75l33.94 33.94Z"></svg:path>`,
})
export class PhBandaidsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBankFillIcon],svg[ph-bank-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 208a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h224a8 8 0 0 1 8 8M16.3 98.18a8 8 0 0 1 3.51-9l104-64a8 8 0 0 1 8.38 0l104 64A8 8 0 0 1 232 104h-24v64h16a8 8 0 0 1 0 16H32a8 8 0 0 1 0-16h16v-64H24a8 8 0 0 1-7.7-5.82M144 160a8 8 0 0 0 16 0v-48a8 8 0 0 0-16 0Zm-48 0a8 8 0 0 0 16 0v-48a8 8 0 0 0-16 0Z"></svg:path>`,
})
export class PhBankFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarbellFillIcon],svg[ph-barbell-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 64v128a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-56h-48v56a16 16 0 0 1-16 16H72a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v56h48V64a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16M36 72h-4a16 16 0 0 0-16 16v32H8.27A8.18 8.18 0 0 0 0 127.47A8 8 0 0 0 8 136h8v32a16 16 0 0 0 16 16h4a4 4 0 0 0 4-4V76a4 4 0 0 0-4-4m220 55.47a8.18 8.18 0 0 0-8.25-7.47H240V88a16 16 0 0 0-16-16h-4a4 4 0 0 0-4 4v104a4 4 0 0 0 4 4h4a16 16 0 0 0 16-16v-32h8a8 8 0 0 0 8-8.53"></svg:path>`,
})
export class PhBarbellFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarcodeFillIcon],svg[ph-barcode-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40H32a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h192a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8M40 64a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16H56v24a8 8 0 0 1-16 0Zm40 136H48a8 8 0 0 1-8-8v-32a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16m24-48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm32 0a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm24 8a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v48a8 8 0 0 1-8 8m56 32a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h24v-24a8 8 0 0 1 16 0Zm0-96a8 8 0 0 1-16 0V72h-24a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhBarcodeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarnFillIcon],svg[ph-barn-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 192h-8v-61.43l1.49 2.08a8 8 0 1 0 13-9.3l-40-56a8 8 0 0 0-2-1.94L137 18.77l-.1-.07a16 16 0 0 0-17.76 0l-.1.07l-67.59 46.65a8 8 0 0 0-2 1.94l-40 56a8 8 0 1 0 13 9.3l1.55-2.09V192h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M112 80h32a8 8 0 1 1 0 16h-32a8 8 0 1 1 0-16m52.64 40L128 146.17L91.36 120ZM72 125.83L114.24 156L72 186.17ZM91.36 192L128 165.83L164.64 192Zm92.64-5.83L141.76 156L184 125.83Z"></svg:path>`,
})
export class PhBarnFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarricadeFillIcon],svg[ph-barricade-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 64H32a16 16 0 0 0-16 16v72a16 16 0 0 0 16 16h24v32a8 8 0 0 0 16 0v-32h112v32a8 8 0 0 0 16 0v-32h24a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16M32 152V92l60 60Zm192 0h-56.69l-72-72H164l60 60z"></svg:path>`,
})
export class PhBarricadeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBaseballCapFillIcon],svg[ph-baseball-cap-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24A104.12 104.12 0 0 0 24 128v56a24 24 0 0 0 24 24a24.1 24.1 0 0 0 14.18-4.64C74.33 194.53 95.6 184 128 184s53.67 10.52 65.81 19.35A24 24 0 0 0 232 184v-56A104.12 104.12 0 0 0 128 24M40 128a88.15 88.15 0 0 1 69.81-86.1a167 167 0 0 0-28.87 76.76A166 166 0 0 0 40 136.88Zm176 56a7.77 7.77 0 0 1-4.34 7.1a8 8 0 0 1-8.44-.69C189.16 180.2 164.7 168 128 168s-61.16 12.2-75.22 22.42a8 8 0 0 1-8.44.69A7.77 7.77 0 0 1 40 184v-27.93a150.6 150.6 0 0 1 49.93-23.28a7 7 0 0 0 1-.26a154.06 154.06 0 0 1 74.17 0a9 9 0 0 0 1 .27a150.5 150.5 0 0 1 49.9 23.27Zm0-47.13a166 166 0 0 0-40.94-18.22a167 167 0 0 0-28.87-76.75A88.15 88.15 0 0 1 216 128Z"></svg:path>`,
})
export class PhBaseballCapFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBaseballFillIcon],svg[ph-baseball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209.35 63.28a4 4 0 0 0-5.8-.47a89 89 0 0 0-9.4 10a8.2 8.2 0 0 1-11 1.81A8 8 0 0 1 181.49 63a104 104 0 0 1 10.33-11.14a4 4 0 0 0-.22-6.09a103.79 103.79 0 0 0-127.2 0a4 4 0 0 0-.22 6.09a105 105 0 0 1 10.17 10.93A8.18 8.18 0 0 1 74 73.58A8 8 0 0 1 62 73a88.4 88.4 0 0 0-9.59-10.2a4 4 0 0 0-5.79.48a103.79 103.79 0 0 0 0 129.44a4 4 0 0 0 5.8.47a89 89 0 0 0 9.4-10a8.2 8.2 0 0 1 11-1.81A8 8 0 0 1 74.51 193a104 104 0 0 1-10.33 11.14a4 4 0 0 0 .22 6.09a103.79 103.79 0 0 0 127.2 0a4 4 0 0 0 .22-6.09A104 104 0 0 1 181.49 193a8 8 0 0 1 1.7-11.59a8.2 8.2 0 0 1 11 1.81a89 89 0 0 0 9.4 10a4 4 0 0 0 5.8-.47a103.79 103.79 0 0 0 0-129.44ZM81.71 88.3a8.18 8.18 0 0 1 9.79 5.29a105 105 0 0 1 4.34 16.77A8 8 0 0 1 88 120a8 8 0 0 1-8-7.35c-.38-4.44-1.11-8.91-3.2-12.84a8 8 0 0 1 4.91-11.51m14.13 57.29a103.5 103.5 0 0 1-4.43 17.08a8 8 0 0 1-11.17 4.46a8.19 8.19 0 0 1-3.82-10.08a88 88 0 0 0 3.69-14.37a8 8 0 0 1 10.18-6.35a8.17 8.17 0 0 1 5.55 9.26m79.92 21.54a8 8 0 0 1-11.17-4.46a103.5 103.5 0 0 1-4.43-17.08a8.18 8.18 0 0 1 5.55-9.26a8 8 0 0 1 10.18 6.35a88 88 0 0 0 3.69 14.37a8.19 8.19 0 0 1-3.82 10.08m3.41-67.32c-2.09 3.93-2.82 8.4-3.2 12.84a8 8 0 0 1-10.17 7a8.16 8.16 0 0 1-5.65-9.25a103.6 103.6 0 0 1 4.35-16.8a8.17 8.17 0 0 1 9.79-5.3a8 8 0 0 1 4.88 11.51"></svg:path>`,
})
export class PhBaseballFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBaseballHelmetFillIcon],svg[ph-baseball-helmet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 120h-24.3A104 104 0 0 0 16 128v24a72.08 72.08 0 0 0 72 72h40a72.08 72.08 0 0 0 72-72v-16h48a8 8 0 0 0 0-16M88 180a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96-28a56.06 56.06 0 0 1-50.46 55.72A71.87 71.87 0 0 0 160 152v-16h24Z"></svg:path>`,
})
export class PhBaseballHelmetFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBasketFillIcon],svg[ph-basket-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 82.73a8 8 0 0 0-6-2.73h-44.37L134 18.73a8 8 0 0 0-12 0L68.37 80H24a8 8 0 0 0-7.93 9.06l15.07 113.06A16.06 16.06 0 0 0 47 216h162a16.06 16.06 0 0 0 15.86-13.88l15.07-113.06a8 8 0 0 0-1.93-6.33M81.6 184a7 7 0 0 1-.81 0a8 8 0 0 1-8-7.2l-5.6-56a8 8 0 0 1 15.92-1.6l5.6 56a8 8 0 0 1-7.11 8.8m54.4-8a8 8 0 0 1-16 0v-56a8 8 0 0 1 16 0ZM89.63 80L128 36.15L166.37 80Zm99.13 40.8l-5.6 56a8 8 0 0 1-7.95 7.2a7 7 0 0 1-.81 0a8 8 0 0 1-7.16-8.76l5.6-56a8 8 0 0 1 15.92 1.6Z"></svg:path>`,
})
export class PhBasketFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBasketballFillIcon],svg[ph-basketball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M63.6 46.39a103.5 103.5 0 0 1 52-21.65a4 4 0 0 1 4.45 4V120H95.7a103.77 103.77 0 0 0-32.32-67.56a4 4 0 0 1 .22-6.05M46 64.07a103.5 103.5 0 0 0-21.29 51.46a4 4 0 0 0 4 4.47h50.92a87.86 87.86 0 0 0-27.74-56.41a4 4 0 0 0-5.89.48m146.4-17.68a103.5 103.5 0 0 0-52-21.65a4 4 0 0 0-4.45 4V120h24.3a103.77 103.77 0 0 1 32.32-67.56a4 4 0 0 0-.17-6.05m38.86 69.14A103.5 103.5 0 0 0 210 64.07a4 4 0 0 0-5.86-.48A87.86 87.86 0 0 0 176.37 120h50.91a4 4 0 0 0 3.98-4.47M24.74 140.47A103.5 103.5 0 0 0 46 191.93a4 4 0 0 0 5.86.48A87.86 87.86 0 0 0 79.63 136H28.72a4 4 0 0 0-3.98 4.47M210 191.93a103.5 103.5 0 0 0 21.29-51.46a4 4 0 0 0-4-4.47h-50.92a87.86 87.86 0 0 0 27.74 56.41a4 4 0 0 0 5.89-.48M63.6 209.61a103.5 103.5 0 0 0 52 21.65a4 4 0 0 0 4.45-4V136H95.7a103.77 103.77 0 0 1-32.32 67.56a4 4 0 0 0 .22 6.05M160.3 136H136v91.28a4 4 0 0 0 4.45 4a103.5 103.5 0 0 0 52-21.65a4 4 0 0 0 .22-6.05A103.77 103.77 0 0 1 160.3 136"></svg:path>`,
})
export class PhBasketballFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBathtubFillIcon],svg[ph-bathtub-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 96h-24a8 8 0 0 0-8-8h-72a8 8 0 0 0-8 8H64V52a12 12 0 0 1 12-12a12.44 12.44 0 0 1 12.16 9.59a8 8 0 0 0 15.68-3.18A28.32 28.32 0 0 0 76 24a28 28 0 0 0-28 28v44H16a8 8 0 0 0-8 8v40a56.06 56.06 0 0 0 56 56v16a8 8 0 0 0 16 0v-16h96v16a8 8 0 0 0 16 0v-16a56.06 56.06 0 0 0 56-56v-40a8 8 0 0 0-8-8m-40 8v40h-56v-40Z"></svg:path>`,
})
export class PhBathtubFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingFillIcon],svg[ph-battery-charging-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-32-16v96a24 24 0 0 1-24 24H32a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h168a24 24 0 0 1 24 24m-85.19 43.79A8 8 0 0 0 132 120h-19.06l10.22-20.42a8 8 0 1 0-14.32-7.16l-16 32A8 8 0 0 0 100 136h19.06l-10.22 20.42a8 8 0 0 0 14.32 7.16l16-32a8 8 0 0 0-.35-7.79"></svg:path>`,
})
export class PhBatteryChargingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingVerticalFillIcon],svg[ph-battery-charging-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 32H80a24 24 0 0 0-24 24v168a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24m-24.84 107.58l-16 32a8 8 0 0 1-14.32-7.16L131.06 144H112a8 8 0 0 1-7.16-11.58l16-32a8 8 0 1 1 14.32 7.16L124.94 128H144a8 8 0 0 1 7.16 11.58M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhBatteryChargingVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryEmptyFillIcon],svg[ph-battery-empty-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8Zm48-80v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhBatteryEmptyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryFullFillIcon],svg[ph-battery-full-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8Zm-16-80v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h136a8 8 0 0 1 8 8m64 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhBatteryFullFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryHighFillIcon],svg[ph-battery-high-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 96v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8m72-16v96a24 24 0 0 1-24 24H32a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h168a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h168a8 8 0 0 0 8-8Zm40 8a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhBatteryHighFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryLowFillIcon],svg[ph-battery-low-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 96v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8m152-16v96a24 24 0 0 1-24 24H32a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h168a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h168a8 8 0 0 0 8-8Zm40 8a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhBatteryLowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryMediumFillIcon],svg[ph-battery-medium-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 96v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8m112-16v96a24 24 0 0 1-24 24H32a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h168a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h168a8 8 0 0 0 8-8Zm40 8a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhBatteryMediumFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusFillIcon],svg[ph-battery-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m-56 80h-20v20a8 8 0 0 1-16 0v-20H88a8 8 0 0 1 0-16h20v-20a8 8 0 0 1 16 0v20h20a8 8 0 0 1 0 16m112-40v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhBatteryPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusVerticalFillIcon],svg[ph-battery-plus-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-36 84a8 8 0 0 0-8-8h-20v-20a8 8 0 0 0-16 0v20h-20a8 8 0 0 0 0 16h20v20a8 8 0 0 0 16 0v-20h20a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhBatteryPlusVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalEmptyFillIcon],svg[ph-battery-vertical-empty-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Z"></svg:path>`,
})
export class PhBatteryVerticalEmptyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalFullFillIcon],svg[ph-battery-vertical-full-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-24 8H96a8 8 0 0 0-8 8v136a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhBatteryVerticalFullFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalHighFillIcon],svg[ph-battery-vertical-high-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m72 96H96a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-96a8 8 0 0 0-8-8m40-48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Z"></svg:path>`,
})
export class PhBatteryVerticalHighFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalLowFillIcon],svg[ph-battery-vertical-low-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m72 176H96a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8m40-128v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Z"></svg:path>`,
})
export class PhBatteryVerticalLowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalMediumFillIcon],svg[ph-battery-vertical-medium-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-24 88H96a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhBatteryVerticalMediumFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningFillIcon],svg[ph-battery-warning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m-92 32a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm8 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12m140-80v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhBatteryWarningFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningVerticalFillIcon],svg[ph-battery-warning-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-80 80a8 8 0 0 0 16 0V96a8 8 0 0 0-16 0Zm20 36a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhBatteryWarningVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeachBallFillIcon],svg[ph-beach-ball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m83.44 76A196 196 0 0 0 165 91a196 196 0 0 0-9-46.44A88.43 88.43 0 0 1 211.44 100M85 51.24a188.3 188.3 0 0 1 67.3 39.21a196.3 196.3 0 0 0-112.22 34.06A88.07 88.07 0 0 1 85 51.24m46.48 164.68a196.3 196.3 0 0 0 34.06-112.23A188.3 188.3 0 0 1 204.76 171a88.07 88.07 0 0 1-73.27 44.92Z"></svg:path>`,
})
export class PhBeachBallFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeanieFillIcon],svg[ph-beanie-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 162.16V144a96.18 96.18 0 0 0-72.34-93a28 28 0 1 0-47.32 0A96.18 96.18 0 0 0 32 144v18.16A16 16 0 0 0 24 176v32a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16v-32a16 16 0 0 0-8-13.84M120 176v32H80v-32Zm16 0h40v32h-40ZM116 36a12 12 0 1 1 12 12a12 12 0 0 1-12-12M40 176h24v32H40Zm176 32h-24v-32h24z"></svg:path>`,
})
export class PhBeanieFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBedFillIcon],svg[ph-bed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72H32V48a8 8 0 0 0-16 0v160a8 8 0 0 0 16 0v-32h208v32a8 8 0 0 0 16 0v-96a40 40 0 0 0-40-40M32 88h72v72H32Z"></svg:path>`,
})
export class PhBedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerBottleFillIcon],svg[ph-beer-bottle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.66 42.34l-32-32a8 8 0 0 0-11.32 11.32l1.48 1.47l-55.17 41.38l-38.22 7.65a8.05 8.05 0 0 0-4.09 2.18L23 157.66a24 24 0 0 0 0 33.94L64.4 233a24 24 0 0 0 33.94 0l83.32-83.31a8 8 0 0 0 2.18-4.09l7.65-38.22l41.38-55.17l1.47 1.48a8 8 0 0 0 11.32-11.32ZM81.37 224a7.94 7.94 0 0 1-5.65-2.34l-41.38-41.38a8 8 0 0 1 0-11.31l5.66-5.66L92.69 216L87 221.66a8 8 0 0 1-5.63 2.34M177.6 99.2a7.9 7.9 0 0 0-1.44 3.23l-7.53 37.63l-8.63 8.63L107.31 96l8.63-8.63l37.63-7.53a7.9 7.9 0 0 0 3.23-1.44l58.45-43.84l6.19 6.19Z"></svg:path>`,
})
export class PhBeerBottleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerSteinFillIcon],svg[ph-beer-stein-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 88h-16V72a40 40 0 0 0-40-40h-11.18c-11.91-10.2-28-16-44.82-16c-35.29 0-64 25.12-64 56v136a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-8h16a24 24 0 0 0 24-24v-64a24 24 0 0 0-24-24m-112 96a8 8 0 0 1-16 0v-80a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0v-80a8 8 0 0 1 16 0ZM57 64c4.46-18.24 23.85-32 47-32c13.87 0 27.06 5 36.21 13.78a8 8 0 0 0 5.53 2.22H160a24 24 0 0 1 22.62 16Zm167 112a8 8 0 0 1-8 8h-16v-80h16a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhBeerSteinFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBehanceLogoFillIcon],svg[ph-behance-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 120H64V96h28a12 12 0 0 1 0 24m4 16H64v32h32a16 16 0 0 0 0-32m80-16a24 24 0 0 0-22.62 16h45.24A24 24 0 0 0 176 120m64-64v144a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16m-96 32a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8m-16 64a32 32 0 0 0-14.13-26.53A28 28 0 0 0 92 80H56a8 8 0 0 0-8 8v88a8 8 0 0 0 8 8h40a32 32 0 0 0 32-32m88-8a40 40 0 1 0-13.54 30a8 8 0 0 0-10.59-12a24 24 0 0 1-38.49-10H208a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhBehanceLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellFillIcon],svg[ph-bell-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216"></svg:path>`,
})
export class PhBellFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellRingingFillIcon],svg[ph-bell-ringing-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 71.1a8 8 0 0 1-10.78-3.42a94.13 94.13 0 0 0-33.46-36.91a8 8 0 1 1 8.54-13.54a111.46 111.46 0 0 1 39.12 43.09A8 8 0 0 1 224 71.1M35.71 72a8 8 0 0 0 7.1-4.32a94.13 94.13 0 0 1 33.46-36.91a8 8 0 1 0-8.54-13.54a111.46 111.46 0 0 0-39.12 43.09A8 8 0 0 0 35.71 72m186.1 103.94A16 16 0 0 1 208 200h-40.8a40 40 0 0 1-78.4 0H48a16 16 0 0 1-13.79-24.06C43.22 160.39 48 138.28 48 112a80 80 0 0 1 160 0c0 26.27 4.78 48.38 13.81 63.94M150.62 200h-45.24a24 24 0 0 0 45.24 0"></svg:path>`,
})
export class PhBellRingingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleFillIcon],svg[ph-bell-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 224a8 8 0 0 1-8 8H96a8 8 0 1 1 0-16h64a8 8 0 0 1 8 8m53.81-48.06C216.25 166.38 208 139.33 208 104a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h160a16 16 0 0 0 13.8-24.06Z"></svg:path>`,
})
export class PhBellSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleRingingFillIcon],svg[ph-bell-simple-ringing-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 224a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m59.39-163.68a111.36 111.36 0 0 0-39.12-43.08a8 8 0 1 0-8.54 13.53a94.13 94.13 0 0 1 33.46 36.91a8 8 0 0 0 14.2-7.36M35.71 72a8 8 0 0 0 7.1-4.32a94.13 94.13 0 0 1 33.46-36.91a8 8 0 1 0-8.54-13.53a111.36 111.36 0 0 0-39.12 43.08A8 8 0 0 0 35.71 72M208 112a80 80 0 0 0-160 0c0 26.28-4.78 48.39-13.81 63.94A16 16 0 0 0 48 200h160a16 16 0 0 0 13.79-24.06C212.78 160.38 208 138.27 208 112"></svg:path>`,
})
export class PhBellSimpleRingingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleSlashFillIcon],svg[ph-bell-simple-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.84 192a1.85 1.85 0 0 1-3 .28L83.27 43.19a4 4 0 0 1 .8-6A79.55 79.55 0 0 1 129.17 24c43.83.66 78.63 37.1 78.83 80.92c.14 34.88 8.31 61.54 13.82 71a15.89 15.89 0 0 1 .02 16.08M160 216H96.22a8.19 8.19 0 0 0-8.22 7.47a8 8 0 0 0 8 8.53h63.74a8.19 8.19 0 0 0 8.26-7.47a8 8 0 0 0-8-8.53M53.84 34.62A8 8 0 1 0 42 45.38l16.79 18.47A79.4 79.4 0 0 0 47.93 104c0 35.09-8.15 62-13.7 71.73a16.42 16.42 0 0 0 .09 16.68A15.78 15.78 0 0 0 47.91 200h134.71l19.45 21.38a8 8 0 0 0 11.85-10.76Z"></svg:path>`,
})
export class PhBellSimpleSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleZFillIcon],svg[ph-bell-simple-z-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 224a8 8 0 0 1-8 8H96a8 8 0 1 1 0-16h64a8 8 0 0 1 8 8m53.85-32a15.8 15.8 0 0 1-13.85 8H48a16 16 0 0 1-13.8-24.06C39.75 166.38 48 139.34 48 104a80 80 0 1 1 160 0c0 35.33 8.26 62.38 13.81 71.94a15.89 15.89 0 0 1 .03 16.06ZM152 144a8 8 0 0 0-8-8h-17l23.7-35.56A8 8 0 0 0 144 88h-32a8 8 0 0 0 0 16h17.05l-23.7 35.56A8 8 0 0 0 112 152h32a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhBellSimpleZFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSlashFillIcon],svg[ph-bell-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.84 192a1.85 1.85 0 0 1-3 .28L83.27 43.19a4 4 0 0 1 .8-6A79.55 79.55 0 0 1 129.17 24c43.83.66 78.63 37.1 78.83 80.92c.14 34.88 8.31 61.54 13.82 71a15.89 15.89 0 0 1 .02 16.08m-7.92 18.62a8 8 0 0 1-11.85 10.76L182.62 200h-15.46a40 40 0 0 1-78.41 0H47.91a15.78 15.78 0 0 1-13.59-7.59a16.42 16.42 0 0 1-.09-16.68c5.55-9.73 13.7-36.64 13.7-71.73a79.4 79.4 0 0 1 10.86-40.15L42 45.38a8 8 0 1 1 11.84-10.76ZM150.59 200h-45.27a24 24 0 0 0 45.27 0"></svg:path>`,
})
export class PhBellSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellZFillIcon],svg[ph-bell-z-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m16-64h-32a8 8 0 0 1-6.65-12.44l23.7-35.56H112a8 8 0 0 1 0-16h32a8 8 0 0 1 6.65 12.44L127 136h17a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhBellZFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeltFillIcon],svg[ph-belt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 80v96a8 8 0 0 1-16 0H8a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h40a8 8 0 0 1 16 0m192 8v80a8 8 0 0 1-8 8h-58.17a16 16 0 0 1-13.83 8h-64a16 16 0 0 1-13.83-8H84a4 4 0 0 1-4-4V84a4 4 0 0 1 4-4h14.17A16 16 0 0 1 112 72h64a16 16 0 0 1 13.83 8H248a8 8 0 0 1 8 8m-80 79.8V136h-32a8 8 0 0 1 0-16h32V88h-64v80h64z"></svg:path>`,
})
export class PhBeltFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBezierCurveFillIcon],svg[ph-bezier-curve-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221 144.4A96.26 96.26 0 0 0 181 88h59a8 8 0 0 0 0-16h-81a32 32 0 0 0-62 0H16a8 8 0 0 0 0 16h59a96.26 96.26 0 0 0-40 56.4A32 32 0 1 0 71 184h114a32 32 0 1 0 36-39.6M40 192a16 16 0 1 1 16-16a16 16 0 0 1-16 16m88-128a16 16 0 1 1-16 16a16 16 0 0 1 16-16m88 128a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhBezierCurveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBicycleFillIcon],svg[ph-bicycle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m54.46 164.71l27.87-38.21a48 48 0 1 1-12.92-9.44l-27.87 38.23a8 8 0 1 0 12.92 9.42M208 112a47.8 47.8 0 0 0-16.93 3.09L214.91 156a8 8 0 1 1-13.82 8l-23.83-40.86A48 48 0 1 0 208 112m-42.07-40H192a8 8 0 0 1 8 8a8 8 0 0 0 16 0a24 24 0 0 0-24-24h-40a8 8 0 0 0-6.91 12l11.65 20H99.26L82.91 60A8 8 0 0 0 76 56H48a8 8 0 0 0 0 16h23.41l13.71 23.51l-15.71 21.55a47.9 47.9 0 0 1 12.92 9.44l11.59-15.9l31.17 53.4a8 8 0 1 0 13.82-8l-30.32-52h57.48l11.19 19.17a48.1 48.1 0 0 1 13.81-8.08Z"></svg:path>`,
})
export class PhBicycleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinaryFillIcon],svg[ph-binary-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 168c0 4.75-1.11 9.16-3.05 12.11A7.77 7.77 0 0 1 158 184c-9.72 0-10-14.36-10-16c0-4.74 1.11-9.16 3.05-12.11A7.77 7.77 0 0 1 158 152c9.72 0 10 14.36 10 16m56-120v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-83.16 27.58a8 8 0 0 0 10.74 3.58l4.42-2.22V112a8 8 0 0 0 16 0V64a8 8 0 0 0-11.58-7.16l-16 8a8 8 0 0 0-3.58 10.74M112 144a8 8 0 0 0-11.58-7.16l-16 8a8 8 0 0 0 7.16 14.32l4.42-2.22V192a8 8 0 0 0 16 0Zm16-56c0-18.84-10.69-32-26-32S76 69.16 76 88s10.69 32 26 32s26-13.16 26-32m56 80c0-18.84-10.69-32-26-32s-26 13.16-26 32s10.69 32 26 32s26-13.16 26-32m-82-96a7.77 7.77 0 0 0-7 3.89c-1.94 3-3 7.37-3 12.11c0 1.64.28 16 10 16a7.77 7.77 0 0 0 7-3.89c1.94-3 3-7.36 3-12.11c0-1.64-.28-16-10-16"></svg:path>`,
})
export class PhBinaryFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinocularsFillIcon],svg[ph-binoculars-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.22 151.9v-.1a1.4 1.4 0 0 0-.07-.22a49 49 0 0 0-2.31-5.3L193.27 51.8a8 8 0 0 0-1.67-2.44a32 32 0 0 0-45.26 0A8 8 0 0 0 144 55v25h-32V55a8 8 0 0 0-2.34-5.66a32 32 0 0 0-45.26 0a8 8 0 0 0-1.67 2.44l-41.53 94.5a49 49 0 0 0-2.31 5.3a2 2 0 0 0-.07.21s0 .08 0 .11a48 48 0 0 0 90.32 32.51a47.5 47.5 0 0 0 2.9-16.59V96h32v71.83a47.5 47.5 0 0 0 2.9 16.59a48 48 0 0 0 90.32-32.51Zm-143.15 27a32 32 0 0 1-60.2-21.71l1.81-4.13A32 32 0 0 1 96 167.88v.12a32 32 0 0 1-1.93 10.94ZM203 198.07A32 32 0 0 1 160 168v-.11a32 32 0 0 1 60.32-14.78l1.81 4.13A32 32 0 0 1 203 198.07"></svg:path>`,
})
export class PhBinocularsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBiohazardFillIcon],svg[ph-biohazard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.83 159.58a60.09 60.09 0 0 0-54.17-55.31a62 62 0 0 0-3-5.59a59.94 59.94 0 0 0-26.82-77.93l-.14-.08a8 8 0 0 0-1.14-.48a8 8 0 0 0-6.21 14.69h.07C149.6 35.57 168 45.73 168 68a40 40 0 0 1-2 12.53a63.83 63.83 0 0 0-76 0A40 40 0 0 1 88 68c0-22.35 18.53-32.51 19.65-33.1a8 8 0 0 0-7.33-14.22l-.15.08a60 60 0 0 0-26.85 78c-1.1 1.8-2.12 3.66-3 5.57a60.11 60.11 0 0 0-54.15 55.32a36 36 0 0 0-.14 4.87A8 8 0 0 0 32 164c0-1.36.07-2.71.19-4c.73-6.25 4.06-19.08 18.64-27.49a39.8 39.8 0 0 1 13.32-4.81c-.1 1.43-.16 2.88-.16 4.34a64.09 64.09 0 0 0 39 58.91a39.8 39.8 0 0 1-12.15 10.84c-19.07 11-36.88.36-38.39-.58l-.12-.08a8 8 0 0 0-8.71 13.42l.24.15a59.95 59.95 0 0 0 82.88-18.7h2.52a60 60 0 0 0 82.89 18.69l.23-.15a8 8 0 0 0-8.71-13.42l-.12.08c-1.51.94-19.32 11.59-38.39.58A39.8 39.8 0 0 1 153 190.9a64.09 64.09 0 0 0 39-58.9c0-1.46-.07-2.9-.16-4.33a39.8 39.8 0 0 1 13.33 4.8c14.47 8.35 17.86 21.06 18.63 27.32c.13 1.39.2 2.79.2 4.21a8 8 0 0 0 16 .46a36 36 0 0 0-.17-4.88m-130.1 16.8A48.08 48.08 0 0 1 80 132c0-1.27.07-2.53.17-3.78l1 .25a40 40 0 0 1 28.54 47.91ZM128 134.11l-.11-.19h.22Zm0-26.11a39.9 39.9 0 0 1-29.93-13.49a47.84 47.84 0 0 1 59.84 0A39.88 39.88 0 0 1 128 108m18.29 68.37a39.9 39.9 0 0 1 29.55-48.13c.1 1.24.16 2.49.16 3.76a48.07 48.07 0 0 1-29.72 44.37Z"></svg:path>`,
})
export class PhBiohazardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBirdFillIcon],svg[ph-bird-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.44 73.34l-23.23-15.48A60 60 0 0 0 156 16h-.29C122.79 16.16 96 43.47 96 76.89v19.74L11.63 197.88l-.1.12A16 16 0 0 0 24 224h88a104.11 104.11 0 0 0 104-104v-19.72l20.44-13.62a8 8 0 0 0 0-13.32m-110.29 59.78l-60 72a8 8 0 1 1-12.29-10.24l60-72a8 8 0 1 1 12.29 10.24M164 80a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhBirdFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBlueprintFillIcon],svg[ph-blueprint-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 120h24v16h-24Zm104-56v136a8 8 0 0 1-8 8H48a32 32 0 0 1-32-32V64a32 32 0 0 1 32-32h16a8 8 0 0 1 8 8v16h160a8 8 0 0 1 8 8M56 48h-8a16 16 0 0 0-16 16v84.29A31.8 31.8 0 0 1 48 144h8Zm120 88v-16h16a8 8 0 0 0 0-16h-16v-8a8 8 0 0 0-16 0v8h-24v-8a8 8 0 0 0-16 0v8h-16a8 8 0 0 0 0 16h16v16h-16a8 8 0 0 0 0 16h16v8a8 8 0 0 0 16 0v-8h24v8a8 8 0 0 0 16 0v-8h16a8 8 0 0 0 0-16Z"></svg:path>`,
})
export class PhBlueprintFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothConnectedFillIcon],svg[ph-bluetooth-connected-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 176a8 8 0 0 1-3.2 6.4l-64 48a8 8 0 0 1-4.8 1.6a8 8 0 0 1-8-8v-80l-51.2 38.4a8 8 0 0 1-9.6-12.8l55.47-41.6L59.2 86.4a8 8 0 0 1 9.6-12.8L120 112V32a8 8 0 0 1 12.8-6.4l64 48a8 8 0 0 1 0 12.8L141.33 128l55.47 41.6a8 8 0 0 1 3.2 6.4M72 128a12 12 0 1 0-12 12a12 12 0 0 0 12-12m132-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhBluetoothConnectedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothFillIcon],svg[ph-bluetooth-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 176a8 8 0 0 1-3.2 6.4l-64 48a8 8 0 0 1-4.8 1.6a8 8 0 0 1-8-8v-80l-51.2 38.4a8 8 0 0 1-9.6-12.8l55.47-41.6L59.2 86.4a8 8 0 0 1 9.6-12.8L120 112V32a8 8 0 0 1 12.8-6.4l64 48a8 8 0 0 1 0 12.8L141.33 128l55.47 41.6a8 8 0 0 1 3.2 6.4"></svg:path>`,
})
export class PhBluetoothFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothSlashFillIcon],svg[ph-bluetooth-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.38 221.92a8 8 0 0 1-11.3-.54l-26.45-29.1l-50.83 38.12a8 8 0 0 1-8.89.47a8.29 8.29 0 0 1-3.91-7.18V144l-51.2 38.4a8 8 0 0 1-11.16-1.55a8.26 8.26 0 0 1 1.81-11.43l61.47-46.11l-70.84-77.93a8 8 0 0 1 11.84-10.76l160 176a8 8 0 0 1-.54 11.3M155 113.22a4 4 0 0 0 5.36.51L196.8 86.4a8 8 0 0 0 0-12.8l-64-48a8 8 0 0 0-10 .29a8.25 8.25 0 0 0-2.8 6.35v40.94a4 4 0 0 0 1 2.69Z"></svg:path>`,
})
export class PhBluetoothSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothXFillIcon],svg[ph-bluetooth-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 176a8 8 0 0 1-3.2 6.4l-64 48a8 8 0 0 1-4.8 1.6a7.9 7.9 0 0 1-4.11-1.14a8.3 8.3 0 0 1-3.9-7.18V144l-51.23 38.4a8 8 0 0 1-11.16-1.55a8.26 8.26 0 0 1 1.8-11.43L98.66 128L43.38 86.57a8.19 8.19 0 0 1-2.13-10.93a8 8 0 0 1 11.51-2L104 112V32.24a8.21 8.21 0 0 1 2.83-6.34a8 8 0 0 1 10-.3l33.62 25.2A4 4 0 0 1 152 54v52a4 4 0 0 1-1.6 3.2L125.34 128l55.5 41.6A8 8 0 0 1 184 176m53.47-77.87L219.37 80l18.11-18.11a8.21 8.21 0 0 0 .41-11.37a8 8 0 0 0-11.49-.18l-18.35 18.35l-18.12-18.11a8.23 8.23 0 0 0-10.83-.88a8 8 0 0 0-.73 12L196.73 80l-18.15 18.13a8.2 8.2 0 0 0-.6 11.1a8 8 0 0 0 11.71.43l18.36-18.35l18.35 18.35a8 8 0 0 0 11.72-.43a8.21 8.21 0 0 0-.61-11.1Z"></svg:path>`,
})
export class PhBluetoothXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoatFillIcon],svg[ph-boat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.06 110.59L208 106.23V56a16 16 0 0 0-16-16h-56V24a8 8 0 0 0-16 0v16H64a16 16 0 0 0-16 16v50.23l-13.06 4.36A16 16 0 0 0 24 125.77V152c0 61.54 97.89 86.72 102.06 87.76a8 8 0 0 0 3.88 0C134.11 238.72 232 213.54 232 152v-26.23a16 16 0 0 0-10.94-15.18M136 168a8 8 0 0 1-16 0v-63.13a8 8 0 0 1 16 0Zm56-67.1l-61.47-20.49a8 8 0 0 0-5.06 0L64 100.9V56h128Z"></svg:path>`,
})
export class PhBoatFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBombFillIcon],svg[ph-bomb-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 32a8 8 0 0 0-8 8a52.7 52.7 0 0 1-3.57 17.39C232.38 67.22 225.7 72 216 72c-11.06 0-18.85-9.76-29.49-24.65C176 32.66 164.12 16 144 16c-16.39 0-29 8.89-35.43 25a66 66 0 0 0-3.9 15H88a16 16 0 0 0-16 16v9.59A88 88 0 0 0 112 248h1.59A88 88 0 0 0 152 81.59V72a16 16 0 0 0-16-16h-15.12a46.8 46.8 0 0 1 2.69-9.37C127.62 36.78 134.3 32 144 32c11.06 0 18.85 9.76 29.49 24.65C184 71.34 195.88 88 216 88c16.39 0 29-8.89 35.43-25A68.7 68.7 0 0 0 256 40a8 8 0 0 0-8-8M111.89 209.32A8 8 0 0 1 104 216a8.5 8.5 0 0 1-1.33-.11a57.5 57.5 0 0 1-46.57-46.57a8 8 0 1 1 15.78-2.64a41.29 41.29 0 0 0 33.43 33.43a8 8 0 0 1 6.58 9.21"></svg:path>`,
})
export class PhBombFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoneFillIcon],svg[ph-bone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.12 107.72a35.91 35.91 0 0 1-46.19 6.8a.14.14 0 0 0-.1 0l-70.35 70.36v.08a36 36 0 1 1-66.37 22.92a36 36 0 1 1 22.92-66.37a.14.14 0 0 0 .1 0l70.35-70.36v-.08a36 36 0 1 1 66.37-22.92a36 36 0 0 1 23.27 59.57"></svg:path>`,
})
export class PhBoneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookBookmarkFillIcon],svg[ph-book-bookmark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 24H72a32 32 0 0 0-32 32v168a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16H56a16 16 0 0 1 16-16h136a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8m-24 96l-25.61-19.2a4 4 0 0 0-4.8 0L128 120V40h56Z"></svg:path>`,
})
export class PhBookBookmarkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookFillIcon],svg[ph-book-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 32v160a8 8 0 0 1-8 8H72a16 16 0 0 0-16 16h136a8 8 0 0 1 0 16H48a8 8 0 0 1-8-8V56a32 32 0 0 1 32-32h136a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhBookFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenFillIcon],svg[ph-book-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 56v144a8 8 0 0 1-8 8h-72a24 24 0 0 0-24 23.94a7.9 7.9 0 0 1-5.12 7.55A8 8 0 0 1 120 232a24 24 0 0 0-24-24H24a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h64a32 32 0 0 1 32 32v87.73a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8V80a32 32 0 0 1 32-32h64a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhBookOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenTextFillIcon],svg[ph-book-open-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48h-64a32 32 0 0 0-32 32v87.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V80a32 32 0 0 0-32-32H24a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h72a24 24 0 0 1 24 23.94a7.9 7.9 0 0 0 5.12 7.55A8 8 0 0 0 136 232a24 24 0 0 1 24-24h72a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8m-24 120h-39.73a8.17 8.17 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h39.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53m0-32h-39.73a8.17 8.17 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h39.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53m0-32h-39.73a8.17 8.17 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h39.73a8.17 8.17 0 0 1 8.27 7.47a8 8 0 0 1-8 8.53"></svg:path>`,
})
export class PhBookOpenTextFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenUserFillIcon],svg[ph-book-open-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 80v120a8 8 0 0 1-8 8h-72a24 24 0 0 0-24 23.94a7.9 7.9 0 0 1-5.12 7.55A8 8 0 0 1 120 232a24 24 0 0 0-24-24H24a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h64a32 32 0 0 1 32 32v63.73a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8V104a32 32 0 0 1 32-32h64a8 8 0 0 1 8 8M88.81 56H89a47.92 47.92 0 0 1 36 17.4a4 4 0 0 0 6.08 0A47.92 47.92 0 0 1 167 56h.19a4 4 0 0 0 3.54-5.84a48 48 0 0 0-85.46 0A4 4 0 0 0 88.81 56"></svg:path>`,
})
export class PhBookOpenUserFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkFillIcon],svg[ph-bookmark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16m-51.77 145.22a8 8 0 0 0-8.48 0L72 209.57v-29.14l56-35l56 35v29.14Z"></svg:path>`,
})
export class PhBookmarkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkSimpleFillIcon],svg[ph-bookmark-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhBookmarkSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksFillIcon],svg[ph-bookmarks-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 24H96a16 16 0 0 0-16 16v16H64a16 16 0 0 0-16 16v152a8 8 0 0 0 12.65 6.51L112 193.83l51.36 36.68A8 8 0 0 0 176 224v-39.31l19.35 13.82A8 8 0 0 0 208 192V40a16 16 0 0 0-16-16m0 152.46L176 165V72a16 16 0 0 0-16-16H96V40h96Z"></svg:path>`,
})
export class PhBookmarksFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksSimpleFillIcon],svg[ph-bookmarks-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 56H64a16 16 0 0 0-16 16v152a8 8 0 0 0 12.65 6.51L112 193.83l51.36 36.68A8 8 0 0 0 176 224V72a16 16 0 0 0-16-16"></svg:path><svg:path d="M192 24H88a8 8 0 0 0 0 16h104v152a8 8 0 0 0 16 0V40a16 16 0 0 0-16-16"></svg:path></svg:g>`,
})
export class PhBookmarksSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBooksFillIcon],svg[ph-books-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m231.65 194.55l-33.19-157.8a16 16 0 0 0-19-12.39l-46.81 10.06a16.08 16.08 0 0 0-12.3 19l33.19 157.8A16 16 0 0 0 169.16 224a16.3 16.3 0 0 0 3.38-.36l46.81-10.06a16.09 16.09 0 0 0 12.3-19.03M136 50.15v-.09l46.8-10l3.33 15.87L139.33 66Zm10 47.38l-3.35-15.9l46.82-10.06l3.34 15.9Zm70 100.41l-46.8 10l-3.33-15.87l46.8-10.07l3.33 15.85zM104 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 48h48v16H56Zm48 160H56v-16h48z"></svg:path>`,
})
export class PhBooksFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBootFillIcon],svg[ph-boot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 112h-79.73a8.17 8.17 0 0 1-8.25-7.47A8 8 0 0 1 112 96h44a4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4h-43.73a8.17 8.17 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h44a4 4 0 0 0 4-4v-4a16 16 0 0 0-16-16H32.22a8.23 8.23 0 0 0-5.08 1.64a8 8 0 0 0-2.61 9.22c11.06 28.84 8.76 83.71-.22 114.93A8 8 0 0 0 24 168v32a16 16 0 0 0 16 16h26.11a16 16 0 0 0 7.16-1.69L85.89 208h16.22l12.62 6.31a16 16 0 0 0 7.16 1.69h28.22a16 16 0 0 0 7.16-1.69l12.62-6.31h16.22l12.62 6.31a16 16 0 0 0 7.16 1.69H232a16 16 0 0 0 16-16v-32a56 56 0 0 0-56-56m40 88h-26.11l-12.62-6.31a16 16 0 0 0-7.16-1.69h-16.22a16 16 0 0 0-7.16 1.69L150.11 200h-28.22l-12.62-6.31a16 16 0 0 0-7.16-1.69H85.89a16 16 0 0 0-7.16 1.69L66.11 200H40v-24h192Z"></svg:path>`,
})
export class PhBootFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoulesFillIcon],svg[ph-boules-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128c0 56.63-47.38 104-104 104a103.7 103.7 0 0 1-31.52-4.89a4 4 0 0 1-1.62-6.65l125.6-125.61a4 4 0 0 1 6.65 1.62A103.7 103.7 0 0 1 232 128m-16.16-55.61a103 103 0 0 0-6.06-8.56a4 4 0 0 0-6-.33L63.5 203.82a4 4 0 0 0 .33 6a103 103 0 0 0 8.56 6.06a4 4 0 0 0 5-.54L215.3 77.39a4 4 0 0 0 .54-5m-23.67-26.17a103 103 0 0 0-8.56-6.06a4 4 0 0 0-5 .54L40.7 178.62a4 4 0 0 0-.54 5a103 103 0 0 0 6.06 8.56a4 4 0 0 0 6 .33L192.5 52.18a4 4 0 0 0-.33-5.96m-32.64-17.33A103.7 103.7 0 0 0 128 24C71.38 24 24 71.37 24 128a103.7 103.7 0 0 0 4.89 31.53a4 4 0 0 0 6.65 1.62L161.15 35.54a4 4 0 0 0-1.62-6.65"></svg:path>`,
})
export class PhBoulesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoundingBoxFillIcon],svg[ph-bounding-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 96a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H96v-8a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v64h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-8h64v8a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8V96Zm-24 64h-8a16 16 0 0 0-16 16v8H96v-8a16 16 0 0 0-16-16h-8V96h8a16 16 0 0 0 16-16v-8h64v8a16 16 0 0 0 16 16h8Z"></svg:path>`,
})
export class PhBoundingBoxFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlFoodFillIcon],svg[ph-bowl-food-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 104h-8.37a88 88 0 0 0-175.26 0H32a8 8 0 0 0-8 8a104.35 104.35 0 0 0 56 92.28V208a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-3.72A104.35 104.35 0 0 0 232 112a8 8 0 0 0-8-8m-50.52-47.77q2.75 2.25 5.27 4.75a87.92 87.92 0 0 0-49.15 43h-29.5A72.26 72.26 0 0 1 168 56c1.83 0 3.66.09 5.48.23M148.12 104a71.84 71.84 0 0 1 41.27-29.57A71.45 71.45 0 0 1 199.54 104ZM128 40a72 72 0 0 1 19 2.57A88.36 88.36 0 0 0 83.33 104H56.46A72.08 72.08 0 0 1 128 40"></svg:path>`,
})
export class PhBowlFoodFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlSteamFillIcon],svg[ph-bowl-steam-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M81.77 55c5.35-6.66 6.67-11.16 6.12-13.14c-.42-1.49-2.41-2.26-2.43-2.26A8 8 0 0 1 88 24a8.1 8.1 0 0 1 2.38.36c1 .31 9.91 3.33 12.79 12.76c2.46 8.07-.55 17.45-8.94 27.89c-5.35 6.66-6.67 11.16-6.12 13.14c.42 1.49 2.37 2.24 2.39 2.25A8 8 0 0 1 88 96a8.1 8.1 0 0 1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76c-2.46-8.07.55-17.45 8.94-27.88m31.06 27.89c2.88 9.43 11.79 12.45 12.79 12.76A8.1 8.1 0 0 0 128 96a8 8 0 0 0 2.5-15.6s-2-.76-2.39-2.25c-.55-2 .77-6.48 6.12-13.14c8.39-10.44 11.4-19.82 8.94-27.89c-2.88-9.43-11.78-12.45-12.79-12.76A8.1 8.1 0 0 0 128 24a8 8 0 0 0-2.54 15.59s2 .77 2.43 2.26c.55 2-.77 6.48-6.12 13.14c-8.39 10.44-11.4 19.82-8.94 27.89Zm40 0c2.88 9.43 11.79 12.45 12.79 12.76A8.1 8.1 0 0 0 168 96a8 8 0 0 0 2.5-15.6s-2-.76-2.39-2.25c-.55-2 .77-6.48 6.12-13.14c8.39-10.44 11.4-19.82 8.94-27.89c-2.88-9.43-11.78-12.45-12.79-12.76A8.1 8.1 0 0 0 168 24a8 8 0 0 0-2.54 15.59s2 .77 2.43 2.26c.55 2-.77 6.48-6.12 13.14c-8.39 10.44-11.4 19.82-8.94 27.89ZM224 112H32a8 8 0 0 0-8 8a104.35 104.35 0 0 0 56 92.28V216a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-3.72A104.35 104.35 0 0 0 232 120a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhBowlSteamFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlingBallFillIcon],svg[ph-bowling-ball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m4 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m20-36a12 12 0 1 1 12 12a12 12 0 0 1-12-12m20 52a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhBowlingBallFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowDownFillIcon],svg[ph-box-arrow-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.16 68.42l-16-32A8 8 0 0 0 200 32H56a8 8 0 0 0-7.16 4.42l-16 32A8.1 8.1 0 0 0 32 72v136a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V72a8.1 8.1 0 0 0-.84-3.58m-57.5 89.24l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 164.69V104a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32M52.94 64l8-16h134.12l8 16Z"></svg:path>`,
})
export class PhBoxArrowDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowUpFillIcon],svg[ph-box-arrow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.16 68.42l-16-32A8 8 0 0 0 200 32H56a8 8 0 0 0-7.16 4.42l-16 32A8.1 8.1 0 0 0 32 72v136a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V72a8.1 8.1 0 0 0-.84-3.58m-57.5 73.24a8 8 0 0 1-11.32 0L136 123.31V184a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 0 11.32M52.94 64l8-16h134.12l8 16Z"></svg:path>`,
})
export class PhBoxArrowUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxingGloveFillIcon],svg[ph-boxing-glove-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 16h-48a56 56 0 0 0-56 56v31.73a8.17 8.17 0 0 1-7.47 8.27a8 8 0 0 1-8.53-8V78.7a4 4 0 0 0-5.63-3.65A32 32 0 0 0 24 104v29.19a16.14 16.14 0 0 0 3.5 10q.3.36.63.69L64 179.34V216a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-38.88l15.38-53.84a16 16 0 0 0 .62-4.4V72a56 56 0 0 0-56-56m3.58 168.84a8 8 0 0 1-7.16 14.32L136 184.94l-28.42 14.22a8 8 0 1 1-7.16-14.32l17.69-8.84l-17.69-8.84a8 8 0 1 1 7.16-14.32L136 167.06l28.42-14.22a8 8 0 1 1 7.16 14.32L153.89 176Z"></svg:path>`,
})
export class PhBoxingGloveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsAngleFillIcon],svg[ph-brackets-angle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M103 180a8 8 0 0 1-13.95 8l-32-56a8 8 0 0 1 0-7.94l32-56A8 8 0 0 1 103 76l-29.79 52Zm96-48l-32 56a8 8 0 0 1-13.9-7.94l29.74-52L153.05 76A8 8 0 1 1 167 68l32 56a8 8 0 0 1 0 8"></svg:path>`,
})
export class PhBracketsAngleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsCurlyFillIcon],svg[ph-brackets-curly-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M88 155.84c.29 14.26.41 20.16 16 20.16a8 8 0 0 1 0 16c-31.27 0-31.72-22.43-32-35.84c-.29-14.26-.41-20.16-16-20.16a8 8 0 0 1 0-16c15.59 0 15.71-5.9 16-20.16c.28-13.41.73-35.84 32-35.84a8 8 0 0 1 0 16c-15.59 0-15.71 5.9-16 20.16c-.17 8.31-.41 20.09-8 27.84c7.59 7.75 7.83 19.53 8 27.84M200 136c-15.59 0-15.71 5.9-16 20.16c-.28 13.41-.73 35.84-32 35.84a8 8 0 0 1 0-16c15.59 0 15.71-5.9 16-20.16c.17-8.31.41-20.09 8-27.84c-7.6-7.75-7.84-19.53-8-27.84c-.29-14.26-.41-20.16-16-20.16a8 8 0 0 1 0-16c31.27 0 31.72 22.43 32 35.84c.29 14.26.41 20.16 16 20.16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhBracketsCurlyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsRoundFillIcon],svg[ph-brackets-round-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M99.61 176.86a8 8 0 0 1-7.19 14.3A71.23 71.23 0 0 1 56 128a71.23 71.23 0 0 1 36.42-63.16a8 8 0 0 1 7.18 14.3C98.37 79.78 72 93.76 72 128s26.48 48.28 27.61 48.86m64 14.3a8 8 0 1 1-7.16-14.32c1.1-.56 27.58-14.52 27.58-48.84s-26.48-48.28-27.61-48.86a8 8 0 0 1 7.19-14.3A71.23 71.23 0 0 1 200 128a71.23 71.23 0 0 1-36.42 63.16Z"></svg:path>`,
})
export class PhBracketsRoundFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsSquareFillIcon],svg[ph-brackets-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M104 176a8 8 0 0 1 0 16H72a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16H80v96Zm88 8a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h24V80h-24a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhBracketsSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrainFillIcon],svg[ph-brain-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 76v-4a44 44 0 0 0-74.86-31.31a3.93 3.93 0 0 0-1.14 2.8v88.72a4 4 0 0 0 6.2 3.33a47.67 47.67 0 0 1 25.48-7.54a8.18 8.18 0 0 1 8.31 7.58a8 8 0 0 1-8 8.42a32 32 0 0 0-32 32v33.88a4 4 0 0 0 1.49 3.12a47.92 47.92 0 0 0 74.21-17.16a4 4 0 0 0-4.49-5.56A68 68 0 0 1 192 192h-7.73a8.18 8.18 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h8a51.6 51.6 0 0 0 24-5.88A52 52 0 0 0 212 76m-12 36h-4a36 36 0 0 1-36-36v-4a8 8 0 0 1 16 0v4a20 20 0 0 0 20 20h4a8 8 0 0 1 0 16M88 28a44.05 44.05 0 0 0-44 44v4a52 52 0 0 0-4 94.12A51.6 51.6 0 0 0 64 176h7.73a8.18 8.18 0 0 1 8.27 7.47a8 8 0 0 1-8 8.53h-8a67.5 67.5 0 0 1-15.21-1.73a4 4 0 0 0-4.5 5.55A47.93 47.93 0 0 0 118.51 213a4 4 0 0 0 1.49-3.12V176a32 32 0 0 0-32-32a8 8 0 0 1-8-8.42a8.18 8.18 0 0 1 8.32-7.58a47.67 47.67 0 0 1 25.48 7.54a4 4 0 0 0 6.2-3.33V43.49a4 4 0 0 0-1.14-2.81A43.85 43.85 0 0 0 88 28m8 48a36 36 0 0 1-36 36h-4a8 8 0 0 1 0-16h4a20 20 0 0 0 20-20v-4a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhBrainFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrandyFillIcon],svg[ph-brandy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 88a95.63 95.63 0 0 0-15.53-52.37a8 8 0 0 0-6.7-3.63H54.23a8 8 0 0 0-6.7 3.63A95.63 95.63 0 0 0 32 88a96.12 96.12 0 0 0 88 95.66V216H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16h-32v-32.34A96.12 96.12 0 0 0 224 88M58.7 48h138.6a79.5 79.5 0 0 1 10.3 32H48.4a79.5 79.5 0 0 1 10.3-32"></svg:path>`,
})
export class PhBrandyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBreadFillIcon],svg[ph-bread-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40H48a40 40 0 0 0-16 76.65V200a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16v-83.35A40 40 0 0 0 200 40m-56 64a8 8 0 0 0 0 16v80H48v-80a8 8 0 0 0 0-16a24 24 0 0 1 0-48h96a24 24 0 0 1 0 48"></svg:path>`,
})
export class PhBreadFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBridgeFillIcon],svg[ph-bridge-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 160h-8v-39.5c1.63.81 3.29 1.57 5 2.26a8 8 0 0 0 6-14.83A55.78 55.78 0 0 1 200 56a8 8 0 0 0-16 0a56 56 0 0 1-112 0a8 8 0 0 0-16 0a55.78 55.78 0 0 1-35 51.93a8 8 0 0 0 6 14.83c1.71-.69 3.37-1.45 5-2.26V160h-7.4c-6.31 0-8.6 4.78-8.6 8a8 8 0 0 0 8 8h32v24a8 8 0 0 0 16 0v-24h112v24a8 8 0 0 0 16 0v-24h32a8 8 0 0 0 0-16m-160-8a8 8 0 0 1-16 0v-47.88a8 8 0 0 1 16 0Zm40 0a8 8 0 0 1-16 0v-19.68a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0v-19.68a8 8 0 0 1 16 0Zm40 0a8 8 0 0 1-16 0v-47.88a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhBridgeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseFillIcon],svg[ph-briefcase-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 112a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m80-40v128a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h40v-8a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v8h40a16 16 0 0 1 16 16M96 56h64v-8a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8Zm120 57.61V72H40v41.61A184 184 0 0 0 128 136a184 184 0 0 0 88-22.39"></svg:path>`,
})
export class PhBriefcaseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseMetalFillIcon],svg[ph-briefcase-metal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 112h200a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4m-4 88a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16v-20a4 4 0 0 0-4-4H28a4 4 0 0 0-4 4ZM232 72v20a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V72a16 16 0 0 1 16-16h40v-8a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v8h40a16 16 0 0 1 16 16m-72-24a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v8h64Z"></svg:path>`,
})
export class PhBriefcaseMetalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseSimpleFillIcon],svg[ph-briefcase-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M216.008 64H176v-8a24.027 24.027 0 0 0-24-24h-48a24.027 24.027 0 0 0-24 24v8H40.008a16.018 16.018 0 0 0-16 16v128a16.018 16.018 0 0 0 16 16h176a16.018 16.018 0 0 0 16-16V80a16.018 16.018 0 0 0-16-16zM96 56a8.01 8.01 0 0 1 8-8h48a8.01 8.01 0 0 1 8 8v8H96z" fill="currentColor"></svg:path>`,
})
export class PhBriefcaseSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroadcastFillIcon],svg[ph-broadcast-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 128a40 40 0 1 1-40-40a40 40 0 0 1 40 40m40 0a79.74 79.74 0 0 0-20.37-53.33a8 8 0 1 0-11.92 10.67a64 64 0 0 1 0 85.33a8 8 0 0 0 11.92 10.67A79.8 79.8 0 0 0 208 128M80.29 85.34a8 8 0 1 0-11.92-10.67a79.94 79.94 0 0 0 0 106.67a8 8 0 0 0 11.92-10.67a63.95 63.95 0 0 1 0-85.33m158.28-4A119.5 119.5 0 0 0 213.71 44a8 8 0 1 0-11.42 11.2a103.9 103.9 0 0 1 0 145.56A8 8 0 1 0 213.71 212a120.12 120.12 0 0 0 24.86-130.71Zm-206.4 87.14A103.9 103.9 0 0 1 53.71 55.22A8 8 0 1 0 42.29 44a119.87 119.87 0 0 0 0 168a8 8 0 1 0 11.42-11.2a103.6 103.6 0 0 1-21.54-32.32"></svg:path>`,
})
export class PhBroadcastFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroomFillIcon],svg[ph-broom-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.29 216.7C212.86 205.69 200 182.12 200 152v-17.31a15.94 15.94 0 0 0-10.09-14.87l-28.65-11.46A8 8 0 0 1 156.79 98l22.32-56.67C184 28.79 178 14.21 165.34 9.51a24 24 0 0 0-30.7 13.71l-22.39 56.86a8 8 0 0 1-10.41 4.5l-28.73-11.5a15.91 15.91 0 0 0-17.38 3.66C34.68 98.4 24 123.71 24 152a111.53 111.53 0 0 0 31.15 77.53A8.06 8.06 0 0 0 61 232h171a8 8 0 0 0 8-7.51a8.21 8.21 0 0 0-4.71-7.79m-120.18-.7a87.5 87.5 0 0 1-24.26-41.71a8.21 8.21 0 0 0-9.25-6.18a8 8 0 0 0-6.32 9.89a105.3 105.3 0 0 0 18.36 38h-29.2A95.62 95.62 0 0 1 40 152a85.9 85.9 0 0 1 7.73-36.3l137.8 55.13c3 18.06 10.55 33.5 21.89 45.19Z"></svg:path>`,
})
export class PhBroomFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowserFillIcon],svg[ph-browser-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v32H40V56Z"></svg:path>`,
})
export class PhBrowserFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowsersFillIcon],svg[ph-browsers-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 48v16H40V88Zm32 80h-16V88a16 16 0 0 0-16-16H72V56h144Z"></svg:path>`,
})
export class PhBrowsersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugBeetleFillIcon],svg[ph-bug-beetle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 120h-16v-16h16a8 8 0 0 1 0 16M32 104a8 8 0 0 0 0 16h16v-16Zm176 56c0 2.7-.14 5.37-.4 8H224a8 8 0 0 1 0 16h-19.68a80 80 0 0 1-152.64 0H32a8 8 0 0 1 0-16h16.4c-.26-2.63-.4-5.3-.4-8v-8H32a8 8 0 0 1 0-16h16v-16h160v16h16a8 8 0 0 1 0 16h-16Zm-72-16a8 8 0 0 0-16 0v64a8 8 0 0 0 16 0ZM69.84 57.15A79.76 79.76 0 0 0 48.4 104h159.2a79.76 79.76 0 0 0-21.44-46.85l19.5-19.49a8 8 0 0 0-11.32-11.32l-20.29 20.3a79.74 79.74 0 0 0-92.1 0l-20.29-20.3a8 8 0 0 0-11.32 11.32Z"></svg:path>`,
})
export class PhBugBeetleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugDroidFillIcon],svg[ph-bug-droid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m191.83 51.48l13.83-13.82a8 8 0 0 0-11.32-11.32L179.79 40.9a87.81 87.81 0 0 0-103.58 0L61.66 26.34a8 8 0 0 0-11.32 11.32l13.83 13.82A87.72 87.72 0 0 0 40 112v40a88 88 0 0 0 176 0v-40a87.72 87.72 0 0 0-24.17-60.52M128 40a72.08 72.08 0 0 1 72 72v8H56v-8a72.08 72.08 0 0 1 72-72m16 52a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-56 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhBugDroidFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugFillIcon],svg[ph-bug-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-68-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m116 64a87.8 87.8 0 0 1-3 23l22.24 9.72A8 8 0 0 1 232 192a7.9 7.9 0 0 1-3.2-.67L207.38 182a88 88 0 0 1-158.76 0l-21.42 9.33a7.9 7.9 0 0 1-3.2.67a8 8 0 0 1-3.2-15.33L43 167a87.8 87.8 0 0 1-3-23v-8H16a8 8 0 0 1 0-16h24v-8a87.8 87.8 0 0 1 3-23l-22.2-9.67a8 8 0 1 1 6.4-14.66L48.62 74a88 88 0 0 1 158.76 0l21.42-9.36a8 8 0 0 1 6.4 14.66L213 89.05a87.8 87.8 0 0 1 3 23v8h24a8 8 0 0 1 0 16h-24Zm-80 0a8 8 0 0 0-16 0v64a8 8 0 0 0 16 0Zm64-32a72 72 0 0 0-144 0v8h144Z"></svg:path>`,
})
export class PhBugFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingApartmentFillIcon],svg[ph-building-apartment-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 208h-8V72a8 8 0 0 0-8-8h-40V40a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v56H32a8 8 0 0 0-8 8v104h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M80 176H64a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32H64a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m64 64h-32v-40h32Zm-8-64h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m56 96h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhBuildingApartmentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingFillIcon],svg[ph-building-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 224h-24V32h8a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16h8v192H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M88 56h24a8 8 0 0 1 0 16H88a8 8 0 0 1 0-16m0 40h24a8 8 0 0 1 0 16H88a8 8 0 0 1 0-16m-8 48a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16H88a8 8 0 0 1-8-8m72 80h-48v-40h48Zm16-72h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m0-40h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m0-40h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhBuildingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingOfficeFillIcon],svg[ph-building-office-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 208h-16V96a8 8 0 0 0 0-16h-48V48a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16v160H24a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M80 72h16a8 8 0 0 1 0 16H80a8 8 0 0 1 0-16m-8 48a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m64 88H88v-48h48Zm8-80h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-40h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m72 120h-32V96h32Z"></svg:path>`,
})
export class PhBuildingOfficeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingsFillIcon],svg[ph-buildings-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.73 208H224V96a16 16 0 0 0-16-16h-44a4 4 0 0 0-4 4v124h-16V32.41a16.43 16.43 0 0 0-6.16-13a16 16 0 0 0-18.72-.69L39.12 72A16 16 0 0 0 32 85.34V208H16.27A8.18 8.18 0 0 0 8 215.47a8 8 0 0 0 8 8.53h224a8 8 0 0 0 8-8.53a8.18 8.18 0 0 0-8.27-7.47M76 184a8 8 0 0 1-8.53 8a8.18 8.18 0 0 1-7.47-8.28v-15.45a8.19 8.19 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8Zm0-56a8 8 0 0 1-8.53 8a8.19 8.19 0 0 1-7.47-8.28v-15.45a8.19 8.19 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8Zm40 56a8 8 0 0 1-8.53 8a8.18 8.18 0 0 1-7.47-8.26v-15.47a8.19 8.19 0 0 1 7.47-8.26a8 8 0 0 1 8.53 8Zm0-56a8 8 0 0 1-8.53 8a8.19 8.19 0 0 1-7.47-8.26v-15.47a8.19 8.19 0 0 1 7.47-8.26a8 8 0 0 1 8.53 8Z"></svg:path>`,
})
export class PhBuildingsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBulldozerFillIcon],svg[ph-bulldozer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 200h-8a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h8a8 8 0 0 0 0-16h-8a24 24 0 0 0-24 24v8h-16.8a40.1 40.1 0 0 0-33.71-31.61l-36.05-86.54A16 16 0 0 0 114.67 40H24A16 16 0 0 0 8 56v96a40 40 0 0 0 32 64h120a40.07 40.07 0 0 0 39.2-32H216v8a24 24 0 0 0 24 24h8a8 8 0 0 0 0-16M64 56h50.67L148 136H64Zm-40 0h24v80h-8a39.7 39.7 0 0 0-16 3.35Zm136 128H40a8 8 0 0 1 0-16h120a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhBulldozerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBusFillIcon],svg[ph-bus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 80v24a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0M16 72a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8m200-8v144a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-8H88v8a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V64a32 32 0 0 1 32-32h112a32 32 0 0 1 32 32m-112 84a12 12 0 1 0-12 12a12 12 0 0 0 12-12m72 0a12 12 0 1 0-12 12a12 12 0 0 0 12-12m24-76H56v40h144Z"></svg:path>`,
})
export class PhBusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phButterflyFillIcon],svg[ph-butterfly-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 100.17a108 108 0 0 0-8-12.64V56a8 8 0 0 1 16 0v31.53a108 108 0 0 0-8 12.64m104.7-49.69C229 45.7 221.84 40 209 40c-16.85 0-38.46 11.28-57.81 30.16A140 140 0 0 0 136 87.53V180a8 8 0 0 1-16 0V87.53a140 140 0 0 0-15.15-17.37C85.49 51.28 63.88 40 47 40c-12.84 0-20 5.7-23.7 10.48c-6.82 8.77-12.18 24.08-.21 71.2c6.05 23.83 19.51 33 30.63 36.42A44 44 0 0 0 128 205.27a44 44 0 0 0 74.28-47.17c11.12-3.4 24.57-12.59 30.63-36.42c6.72-26.44 11.94-55.58-.21-71.2"></svg:path>`,
})
export class PhButterflyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCableCarFillIcon],svg[ph-cable-car-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.87 30.59a8 8 0 0 0-9.28-6.46l-224 40A8 8 0 0 0 16 80a8.6 8.6 0 0 0 1.42-.12L120 61.56V96H64a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32h-56V58.7l105.4-18.82a8 8 0 0 0 6.47-9.29M104 160v-48h48v48Zm-40-48h24v48H48v-32a16 16 0 0 1 16-16m144 16v32h-40v-48h24a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhCableCarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCactusFillIcon],svg[ph-cactus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h48v-72h-8a64.07 64.07 0 0 1-64-64a24.07 24.07 0 0 1 24.08-24h.4A23.55 23.55 0 0 1 64 71.52V72a16 16 0 0 0 16 16h8V56a40 40 0 0 1 80 0v72h8a16 16 0 0 0 16-16v-.48A23.55 23.55 0 0 1 215.52 88h.4A24.07 24.07 0 0 1 240 112a64.07 64.07 0 0 1-64 64h-8v32h48a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCactusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCakeFillIcon],svg[ph-cake-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 88h-72v-9a32.06 32.06 0 0 0 24-31c0-28-26.44-45.91-27.56-46.66a8 8 0 0 0-8.88 0C122.44 2.09 96 20 96 48a32.06 32.06 0 0 0 24 31v9H48a24 24 0 0 0-24 24v23.33a40.84 40.84 0 0 0 8 24.24V200a24 24 0 0 0 24 24h144a24 24 0 0 0 24-24v-40.43a40.84 40.84 0 0 0 8-24.24V112a24 24 0 0 0-24-24m-96-40c0-13.57 10-24.46 16-29.79c6 5.33 16 16.22 16 29.79a16 16 0 0 1-32 0m104 87.33c0 13.25-10.46 24.31-23.32 24.66A24 24 0 0 1 168 136a8 8 0 0 0-16 0a24 24 0 0 1-48 0a8 8 0 0 0-16 0a24 24 0 0 1-24.68 24C50.46 159.64 40 148.58 40 135.33V112a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhCakeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalculatorFillIcon],svg[ph-calculator-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M88 200a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m40 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m40 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m16-56a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhCalculatorFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarBlankFillIcon],svg[ph-calendar-blank-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 48H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24Z"></svg:path>`,
})
export class PhCalendarBlankFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarCheckFillIcon],svg[ph-calendar-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-38.34 101.66l-48 48a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L116 164.69l42.34-42.35a8 8 0 0 1 11.32 11.32M48 80V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32Z"></svg:path>`,
})
export class PhCalendarCheckFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotFillIcon],svg[ph-calendar-dot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 136a16 16 0 1 1 16-16a16 16 0 0 1-16 16m80-88H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24Z"></svg:path>`,
})
export class PhCalendarDotFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotsFillIcon],svg[ph-calendar-dots-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M84 184a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m36-64H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24Z"></svg:path>`,
})
export class PhCalendarDotsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarFillIcon],svg[ph-calendar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-96 152a8 8 0 0 1-16 0v-51.06l-4.42 2.22a8 8 0 0 1-7.16-14.32l16-8A8 8 0 0 1 112 120Zm56-8a8 8 0 0 1 0 16h-32a8 8 0 0 1-6.4-12.8l28.78-38.37a8 8 0 1 0-13.31-8.83a8 8 0 1 1-13.85-8A24 24 0 0 1 176 136a23.76 23.76 0 0 1-4.84 14.45L152 176ZM48 80V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32Z"></svg:path>`,
})
export class PhCalendarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarHeartFillIcon],svg[ph-calendar-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 64v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0m82.56 103.07a143.5 143.5 0 0 1-24.77 16.51a4 4 0 0 1-3.58 0a143.5 143.5 0 0 1-24.77-16.51C84.56 153 76 138.51 76 124a28 28 0 0 1 52-14.41A28 28 0 0 1 180 124c0 14.51-8.56 29-25.44 43.07M184 64a8 8 0 0 1-16 0v-8a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhCalendarHeartFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarMinusFillIcon],svg[ph-calendar-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-56 128h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m56-80H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24Z"></svg:path>`,
})
export class PhCalendarMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarPlusFillIcon],svg[ph-calendar-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-56 128h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16M48 80V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32Z"></svg:path>`,
})
export class PhCalendarPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarSlashFillIcon],svg[ph-calendar-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48v139.57a4 4 0 0 1-7 2.7L116.8 80H208V48h-24v8a8 8 0 0 1-8.52 8a8.18 8.18 0 0 1-7.48-8.27V48H87.71l-8.46-9.31a4 4 0 0 1 3-6.69H168v-8a8 8 0 0 1 8.52-8a8.18 8.18 0 0 1 7.48 8.27V32h24a16 16 0 0 1 16 16m-10.08 162.62A8 8 0 0 1 208 224H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16a8 8 0 0 1 5.93 2.62ZM73.55 80L48 51.89V80Z"></svg:path>`,
})
export class PhCalendarSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarStarFillIcon],svg[ph-calendar-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 64v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0m106.55 60.7l-24.46 20.19l7.46 30.11a4 4 0 0 1-1.49 4.17a4.05 4.05 0 0 1-2.39.79a4 4 0 0 1-2-.55L128 163.18l-27.64 16.27a4 4 0 0 1-5.91-4.45l7.46-30.15l-24.46-20.15a4 4 0 0 1 2.24-7.08l32.24-2.49l12.4-28.71a4 4 0 0 1 7.34 0l12.4 28.71l32.24 2.49a4 4 0 0 1 2.24 7.08M184 64a8 8 0 0 1-16 0v-8a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhCalendarStarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarXFillIcon],svg[ph-calendar-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-50.34 138.34a8 8 0 0 1-11.32 11.32L128 163.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L116.69 152l-18.35-18.34a8 8 0 0 1 11.32-11.32L128 140.69l18.34-18.35a8 8 0 0 1 11.32 11.32L139.31 152ZM208 80H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24Z"></svg:path>`,
})
export class PhCalendarXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCallBellFillIcon],svg[ph-call-bell-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 176a8 8 0 0 1 8-8h8v-16a96.12 96.12 0 0 1 88-95.66V40h-16a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16h-16v16.34A96.12 96.12 0 0 1 224 152v16h8a8 8 0 0 1 0 16H24a8 8 0 0 1-8-8m216 24H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhCallBellFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraFillIcon],svg[ph-camera-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 56h-27.72l-13.63-20.44A8 8 0 0 0 160 32H96a8 8 0 0 0-6.65 3.56L75.71 56H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m-44 76a36 36 0 1 1-36-36a36 36 0 0 1 36 36"></svg:path>`,
})
export class PhCameraFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraPlusFillIcon],svg[ph-camera-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 56h-27.72L169 39.12A16 16 0 0 0 155.72 32h-55.44A16 16 0 0 0 87 39.12L75.72 56H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m-48 88h-24v24a8 8 0 0 1-16 0v-24H96a8 8 0 0 1 0-16h24v-24a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhCameraPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraRotateFillIcon],svg[ph-camera-rotate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 56h-27.72l-13.63-20.44A8 8 0 0 0 160 32H96a8 8 0 0 0-6.65 3.56L75.71 56H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m-51.19 110.4A48.21 48.21 0 0 1 96 163.77V168a8 8 0 0 1-16 0v-24a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-5.15a32.12 32.12 0 0 0 40.34 1.61a8 8 0 0 1 9.62 12.79M176 120a8 8 0 0 1-8 8h-24a8 8 0 0 1 0-16h5.15a32.12 32.12 0 0 0-40.34-1.61a8 8 0 0 1-9.62-12.79a48.21 48.21 0 0 1 60.81 2.63V96a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhCameraRotateFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraSlashFillIcon],svg[ph-camera-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 80v112a24.5 24.5 0 0 1-.45 4.65a4 4 0 0 1-6.9 2L86 46.08a4 4 0 0 1-.37-4.91l3.74-5.61A8 8 0 0 1 96 32h64a8 8 0 0 1 6.66 3.56L180.28 56H208a24 24 0 0 1 24 24m-18.08 130.62a8 8 0 1 1-11.84 10.76l-4.89-5.38H48a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h3.73l-9.65-10.62a8 8 0 1 1 11.84-10.76ZM148 161.92l-47.88-52.68A36 36 0 0 0 148 161.92"></svg:path>`,
})
export class PhCameraSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCampfireFillIcon],svg[ph-campfire-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132.19 25.19a8 8 0 0 0-8.38 0A156 156 0 0 0 96.24 48C77.77 67.13 68 87.9 68 108a60 60 0 0 0 120 0c0-47.92-53.53-81.41-55.81-82.81M128 152a24 24 0 0 1-24-24c0-24 24-40 24-40s24 16 24 40a24 24 0 0 1-24 24m95.62 74.42a8 8 0 0 1-10.05 5.2L128 204.39l-85.57 27.23a8 8 0 1 1-4.85-15.25l64-20.37l-64-20.38a8 8 0 1 1 4.85-15.24L128 187.6l85.57-27.22a8 8 0 1 1 4.85 15.24l-64 20.38l64 20.37a8 8 0 0 1 5.2 10.05"></svg:path>`,
})
export class PhCampfireFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarBatteryFillIcon],svg[ph-car-battery-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 72h-16V56a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v16h-32V56a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v16H32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M64 56h32v16H64Zm40 88H72a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16m80 0h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 0 16m8-72h-32V56h32Z"></svg:path>`,
})
export class PhCarBatteryFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarFillIcon],svg[ph-car-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 104h-10.8l-27.78-62.5A16 16 0 0 0 186.8 32H69.2a16 16 0 0 0-14.62 9.5L26.8 104H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-8h96v8a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16M80 152H56a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m120 0h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16M44.31 104L69.2 48h117.6l24.89 56Z"></svg:path>`,
})
export class PhCarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarProfileFillIcon],svg[ph-car-profile-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 112h-28.69L168 68.69A15.86 15.86 0 0 0 156.69 64H44.28A16 16 0 0 0 31 71.12L1.34 115.56A8.07 8.07 0 0 0 0 120v48a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h66a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16M44.28 80h112.41l32 32H23ZM64 192a16 16 0 1 1 16-16a16 16 0 0 1-16 16m128 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhCarProfileFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarSimpleFillIcon],svg[ph-car-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 104h-10.8l-27.78-62.5A16 16 0 0 0 186.8 32H69.2a16 16 0 0 0-14.62 9.5L26.8 104H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-8h96v8a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16m-195.69 0L69.2 48h117.6l24.89 56Z"></svg:path>`,
})
export class PhCarSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardholderFillIcon],svg[ph-cardholder-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 48H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V72a24 24 0 0 0-24-24m-56 72a24 24 0 0 1-48 0a8 8 0 0 0-8-8H40V96h176v16h-56a8 8 0 0 0-8 8M48 64h160a8 8 0 0 1 8 8v8H40v-8a8 8 0 0 1 8-8"></svg:path>`,
})
export class PhCardholderFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsFillIcon],svg[ph-cards-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 88v112a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V88a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m16-48H64a8 8 0 0 0 0 16h152v120a8 8 0 0 0 16 0V56a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhCardsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsThreeFillIcon],svg[ph-cards-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 104v96a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-96a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M56 72h144a8 8 0 0 0 0-16H56a8 8 0 0 0 0 16m16-32h112a8 8 0 0 0 0-16H72a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhCardsThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleDownFillIcon],svg[ph-caret-circle-double-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.57 54.43A104.15 104.15 0 1 0 232 128a104.17 104.17 0 0 0-30.43-73.57m-35.9 95.24l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 1 1 11.32-11.32L128 164.71l26.35-26.36a8 8 0 1 1 11.32 11.32m0-56l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 1 1 11.32-11.32L128 108.68l26.35-26.36a8 8 0 1 1 11.32 11.32Z"></svg:path>`,
})
export class PhCaretCircleDoubleDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleLeftFillIcon],svg[ph-caret-circle-double-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.57 54.42a104 104 0 1 0 0 147.15a104.17 104.17 0 0 0 0-147.15m-83.92 99.93a8 8 0 1 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 1 1 11.32 11.32L91.29 128Zm56 0a8 8 0 1 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 1 1 11.32 11.32L147.32 128Z"></svg:path>`,
})
export class PhCaretCircleDoubleLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleRightFillIcon],svg[ph-caret-circle-double-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.57 54.42a104 104 0 1 0 0 147.15a104.17 104.17 0 0 0 0-147.15m-75.91 79.24l-32 32a8 8 0 1 1-11.32-11.32L108.68 128l-26.36-26.36a8 8 0 1 1 11.32-11.32l32 32a8 8 0 0 1 .02 11.34m56 0l-32 32a8 8 0 0 1-11.32-11.32L164.71 128l-26.36-26.36a8 8 0 1 1 11.32-11.32l32 32a8 8 0 0 1 .01 11.34Z"></svg:path>`,
})
export class PhCaretCircleDoubleRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleUpFillIcon],svg[ph-caret-circle-double-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.58 54.43a104 104 0 1 0 0 147.14a104.17 104.17 0 0 0 0-147.14m-35.9 119.25a8 8 0 0 1-11.32 0L128 147.32l-26.35 26.36a8 8 0 1 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 .03 11.32m0-56a8 8 0 0 1-11.32 0L128 91.29l-26.35 26.36a8 8 0 1 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 .03 11.32Z"></svg:path>`,
})
export class PhCaretCircleDoubleUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDownFillIcon],svg[ph-caret-circle-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m45.66 93.66l-40 40a8 8 0 0 1-11.32 0l-40-40a8 8 0 0 1 11.32-11.32L128 140.69l34.34-34.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCaretCircleDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleLeftFillIcon],svg[ph-caret-circle-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m21.66 138.34a8 8 0 0 1-11.32 11.32l-40-40a8 8 0 0 1 0-11.32l40-40a8 8 0 0 1 11.32 11.32L115.31 128Z"></svg:path>`,
})
export class PhCaretCircleLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleRightFillIcon],svg[ph-caret-circle-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m29.66 109.66l-40 40a8 8 0 0 1-11.32-11.32L140.69 128l-34.35-34.34a8 8 0 0 1 11.32-11.32l40 40a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhCaretCircleRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpDownFillIcon],svg[ph-caret-circle-up-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m37.66 133.66l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L128 172.69l26.34-26.35a8 8 0 0 1 11.32 11.32m0-48a8 8 0 0 1-11.32 0L128 83.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhCaretCircleUpDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpFillIcon],svg[ph-caret-circle-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m45.66 125.66a8 8 0 0 1-11.32 0L128 115.31l-34.34 34.35a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0l40 40a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhCaretCircleUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleDownFillIcon],svg[ph-caret-double-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.39 132.94a8 8 0 0 1-1.73 8.72l-80 80a8 8 0 0 1-11.32 0l-80-80A8 8 0 0 1 48 128h60.69L42.34 61.66A8 8 0 0 1 48 48h160a8 8 0 0 1 5.66 13.66L147.31 128H208a8 8 0 0 1 7.39 4.94"></svg:path>`,
})
export class PhCaretDoubleDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleLeftFillIcon],svg[ph-caret-double-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 48v160a8 8 0 0 1-13.66 5.66L128 147.31V208a8 8 0 0 1-13.66 5.66l-80-80a8 8 0 0 1 0-11.32l80-80A8 8 0 0 1 128 48v60.69l66.34-66.35A8 8 0 0 1 208 48"></svg:path>`,
})
export class PhCaretDoubleLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleRightFillIcon],svg[ph-caret-double-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.66 133.66l-80 80A8 8 0 0 1 128 208v-60.69l-66.34 66.35A8 8 0 0 1 48 208V48a8 8 0 0 1 13.66-5.66L128 108.69V48a8 8 0 0 1 13.66-5.66l80 80a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhCaretDoubleRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleUpFillIcon],svg[ph-caret-double-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.66 194.34A8 8 0 0 1 208 208H48a8 8 0 0 1-5.66-13.66L108.69 128H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0l80 80A8 8 0 0 1 208 128h-60.69Z"></svg:path>`,
})
export class PhCaretDoubleUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDownFillIcon],svg[ph-caret-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80A8 8 0 0 1 48 88h160a8 8 0 0 1 5.66 13.66"></svg:path>`,
})
export class PhCaretDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLeftFillIcon],svg[ph-caret-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 48v160a8 8 0 0 1-13.66 5.66l-80-80a8 8 0 0 1 0-11.32l80-80A8 8 0 0 1 168 48"></svg:path>`,
})
export class PhCaretLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineDownFillIcon],svg[ph-caret-line-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.34 77.66A8 8 0 0 1 48 64h160a8 8 0 0 1 5.66 13.66l-80 80a8 8 0 0 1-11.32 0ZM208 184H48a8 8 0 0 0 0 16h160a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhCaretLineDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineLeftFillIcon],svg[ph-caret-line-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 48v160a8 8 0 0 1-13.66 5.66l-80-80a8 8 0 0 1 0-11.32l80-80A8 8 0 0 1 200 48M72 40a8 8 0 0 0-8 8v160a8 8 0 0 0 16 0V48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCaretLineLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineRightFillIcon],svg[ph-caret-line-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.66 122.34a8 8 0 0 1 0 11.32l-80 80A8 8 0 0 1 56 208V48a8 8 0 0 1 13.66-5.66ZM184 40a8 8 0 0 0-8 8v160a8 8 0 0 0 16 0V48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCaretLineRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineUpFillIcon],svg[ph-caret-line-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.66 186.34A8 8 0 0 1 208 200H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0ZM48 80h160a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhCaretLineUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretRightFillIcon],svg[ph-caret-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m181.66 133.66l-80 80A8 8 0 0 1 88 208V48a8 8 0 0 1 13.66-5.66l80 80a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhCaretRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpDownFillIcon],svg[ph-caret-up-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72.61 83.06a8 8 0 0 1 1.73-8.72l48-48a8 8 0 0 1 11.32 0l48 48A8 8 0 0 1 176 88H80a8 8 0 0 1-7.39-4.94M176 168H80a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 176 168"></svg:path>`,
})
export class PhCaretUpDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpFillIcon],svg[ph-caret-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.39 163.06A8 8 0 0 1 208 168H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 1.73 8.72"></svg:path>`,
})
export class PhCaretUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarrotFillIcon],svg[ph-carrot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 80h-32.56a64 64 0 0 1-10.19 77.26c-8.52 8.69-19.61 16.92-31.85 24.51a4 4 0 0 1-4.91-.59l-34.84-34.84a8 8 0 0 0-11.49.18a8.23 8.23 0 0 0 .41 11.38l29.88 29.88a4 4 0 0 1-1 6.39C95.74 214.79 53 228.54 46.78 230.48a16 16 0 0 1-21.26-21.26c2.73-8.71 29-90.27 64.86-133.35a4 4 0 0 1 5.9-.26l42.05 42.06a8 8 0 0 0 11.71-.43a8.19 8.19 0 0 0-.6-11.1l-41.36-41.36a4 4 0 0 1 .63-6.18a64 64 0 0 1 67.28-2V24a8 8 0 0 1 8.54-8a8.18 8.18 0 0 1 7.47 8.28v28.41l26.34-26.35a8 8 0 0 1 11.32 11.32L203.31 64h28.41a8.18 8.18 0 0 1 8.28 7.47a8 8 0 0 1-8 8.53"></svg:path>`,
})
export class PhCarrotFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCashRegisterFillIcon],svg[ph-cash-register-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.76 158.06l-22.48-89.94A16 16 0 0 0 201.75 56H136V40a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v16h-9.75a16 16 0 0 0-15.53 12.12l-22.48 89.94A8 8 0 0 0 16 160v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a8 8 0 0 0-.24-1.94M168 88h16a8 8 0 0 1 0 16h-16a8 8 0 0 1 0-16m0 32h16a8 8 0 0 1 0 16h-16a8 8 0 0 1 0-16m-32-32a8 8 0 0 1 0 16h-16a8 8 0 0 1 0-16Zm8 40a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8M80 40h40v16H80Zm-8 48h16a8 8 0 0 1 0 16H72a8 8 0 0 1 0-16m0 32h16a8 8 0 0 1 0 16H72a8 8 0 0 1 0-16m152 72H32v-24h192Z"></svg:path>`,
})
export class PhCashRegisterFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCassetteTapeFillIcon],svg[ph-cassette-tape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156.3 96a31.92 31.92 0 0 0 0 32H99.7a31.92 31.92 0 0 0 0-32ZM72 96a16 16 0 1 0 16 16a16 16 0 0 0-16-16m168-32v128a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16m-54 128l-15.6-20.8a8 8 0 0 0-6.4-3.2H92a8 8 0 0 0-6.4 3.2L70 192Zm30-80a32 32 0 0 0-32-32H72a32 32 0 0 0 0 64h112a32 32 0 0 0 32-32m-32-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhCassetteTapeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCastleTurretFillIcon],svg[ph-castle-turret-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 216h-16V115.31L211.31 104A15.86 15.86 0 0 0 216 92.69V48a16 16 0 0 0-16-16h-20a8 8 0 0 0-8 8v24h-24V40a8 8 0 0 0-8-8h-24a8 8 0 0 0-8 8v24H84V40a8 8 0 0 0-8-8H56a16 16 0 0 0-16 16v44.69A15.86 15.86 0 0 0 44.69 104L56 115.31V216H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m-104-48a16 16 0 0 1 32 0v48h-32Z"></svg:path>`,
})
export class PhCastleTurretFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCatFillIcon],svg[ph-cat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222.83 33.54a16 16 0 0 0-18.14 3.15c-.14.14-.26.27-.38.41L187.05 57A111.28 111.28 0 0 0 69 57L51.69 37.1c-.12-.14-.24-.27-.38-.41a16 16 0 0 0-18.14-3.15A16.4 16.4 0 0 0 24 48.46V136c0 49 40.06 89.63 91.56 95.32a4 4 0 0 0 4.44-4v-32l-13.42-13.43a8.22 8.22 0 0 1-.41-11.37a8 8 0 0 1 11.49-.18L128 180.68l10.34-10.35a8 8 0 0 1 11.49.18a8.22 8.22 0 0 1-.41 11.37L136 195.31v32a4 4 0 0 0 4.44 4C191.94 225.62 232 185 232 136V48.46a16.4 16.4 0 0 0-9.17-14.92M84 152a12 12 0 1 1 12-12a12 12 0 0 1-12 12m20-64a8 8 0 1 1-16 0V69a8 8 0 0 1 16 0Zm32 0a8 8 0 1 1-16 0V64a8 8 0 0 1 16 0Zm16 0V69a8 8 0 0 1 16 0v19a8 8 0 1 1-16 0m20 64a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhCatFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalFullFillIcon],svg[ph-cell-signal-full-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40v160a16 16 0 0 1-16 16H32a16 16 0 0 1-11.3-27.32l160-160A16 16 0 0 1 208 40"></svg:path>`,
})
export class PhCellSignalFullFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalHighFillIcon],svg[ph-cell-signal-high-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M192 200h-24V64l24-24Z"></svg:path>`,
})
export class PhCellSignalHighFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalLowFillIcon],svg[ph-cell-signal-low-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M192 200H88v-56L192 40Z"></svg:path>`,
})
export class PhCellSignalLowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalMediumFillIcon],svg[ph-cell-signal-medium-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M192 200h-64v-96l64-64Z"></svg:path>`,
})
export class PhCellSignalMediumFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalNoneFillIcon],svg[ph-cell-signal-none-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M192 200H32L192 40Z"></svg:path>`,
})
export class PhCellSignalNoneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalSlashFillIcon],svg[ph-cell-signal-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.38 221.92a8 8 0 0 1-11.3-.54l-5.51-6.06a16.1 16.1 0 0 1-4.57.68H32a16 16 0 0 1-15.06-10.59a16.4 16.4 0 0 1 4.07-17l79.13-79.12l-57.88-63.67a8.22 8.22 0 0 1 .14-11.38a8 8 0 0 1 11.48.37l160 176a8 8 0 0 1-.5 11.31M201 172.66a4 4 0 0 0 7-2.69V40a16 16 0 0 0-27.32-11.32l-55.21 55.2a4 4 0 0 0-.13 5.52Z"></svg:path>`,
})
export class PhCellSignalSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalXFillIcon],svg[ph-cell-signal-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.66 194.34a8 8 0 0 1-11.32 11.32L184 187.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L172.69 176l-18.35-18.34a8 8 0 0 1 11.32-11.32L184 164.69l18.34-18.35a8 8 0 0 1 11.32 11.32L195.31 176Zm-56.25-74.24a32 32 0 0 1 23.92 8.05a4 4 0 0 0 5.34 0a31.88 31.88 0 0 1 17.77-8a4 4 0 0 0 3.56-4V40.46a16.41 16.41 0 0 0-9.18-14.93a16 16 0 0 0-18.14 3.16l-160 160a16 16 0 0 0-3.17 18.13A16.4 16.4 0 0 0 32.46 216h93.6a4 4 0 0 0 3.78-5.3a32 32 0 0 1 6.31-32a4 4 0 0 0 0-5.34a32 32 0 0 1 21.26-53.23Z"></svg:path>`,
})
export class PhCellSignalXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellTowerFillIcon],svg[ph-cell-tower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M135.16 84.42a8 8 0 0 0-14.32 0l-72 144a8 8 0 0 0 14.31 7.16L77 208h102.1l13.79 27.58A8 8 0 0 0 200 240a8 8 0 0 0 7.15-11.58ZM128 105.89L155.06 160h-54.12Zm31.49-12.15a32 32 0 1 0-63 0a8 8 0 1 1-15.74 2.85a48 48 0 1 1 94.46 0a8 8 0 0 1-7.86 6.58a9 9 0 0 1-1.43-.13a8 8 0 0 1-6.43-9.3m-95.34 42.47a80 80 0 1 1 127.7 0a8 8 0 0 1-12.76-9.65a64 64 0 1 0-102.18 0a8 8 0 0 1-12.76 9.65"></svg:path>`,
})
export class PhCellTowerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCertificateFillIcon],svg[ph-certificate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 86.53V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h120v24a8 8 0 0 0 12 7l24-13.74L220 231a8 8 0 0 0 12-7v-62.53a51.88 51.88 0 0 0 0-74.94M128 144H72a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32H72a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m88 98.21l-16-9.16a8 8 0 0 0-7.94 0l-16 9.16V172a51.88 51.88 0 0 0 40 0ZM196 160a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhCertificateFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChairFillIcon],svg[ph-chair-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 136h-32v-32h16a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h16v32H48a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h8v40a8 8 0 0 0 16 0v-40h112v40a8 8 0 0 0 16 0v-40h8a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16m-48 0H96v-32h64Z"></svg:path>`,
})
export class PhChairFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardFillIcon],svg[ph-chalkboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 192h-8V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v136h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-24 0h-72v-16a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8Zm0-48a8 8 0 0 1-16 0V72H56v112a8 8 0 0 1-16 0V64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhChalkboardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardSimpleFillIcon],svg[ph-chalkboard-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 192h-8V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v136h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-24 0h-72v-16a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhChalkboardSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardTeacherFillIcon],svg[ph-chalkboard-teacher-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h13.39a8 8 0 0 0 7.23-4.57a48 48 0 0 1 86.76 0a8 8 0 0 0 7.23 4.57H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M104 168a32 32 0 1 1 32-32a32 32 0 0 1-32 32m112 32h-56.57a64 64 0 0 0-13.16-16H192a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8v96a8 8 0 0 0 6 7.75A63.7 63.7 0 0 0 48.57 200H40V56h176Z"></svg:path>`,
})
export class PhChalkboardTeacherFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChampagneFillIcon],svg[ph-champagne-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.91 13.53A8 8 0 0 0 142.3 8H97.71a8 8 0 0 0-7.61 5.53a451 451 0 0 0-14.21 59.7c-7.26 44.25-4.35 75.76 8.65 93.66A40 40 0 0 0 112 183.42V232H96a8 8 0 1 0 0 16h48a8 8 0 0 0 0-16h-16v-48.58a39.94 39.94 0 0 0 27.46-16.53c13-17.9 15.92-49.41 8.66-93.66a451 451 0 0 0-14.21-59.7M93.8 64c3-15.58 6.73-29.81 9.79-40h32.83c3.06 10.19 6.77 24.42 9.8 40ZM232 52a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-48-32a12 12 0 1 1 12 12a12 12 0 0 1-12-12m24 80a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhChampagneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChargingStationFillIcon],svg[ph-charging-station-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m241 69.66l-19.34-19.32a8 8 0 0 0-11.32 11.32L229.66 81a8 8 0 0 1 2.34 5.63V168a8 8 0 0 1-16 0v-40a24 24 0 0 0-24-24h-16V56a24 24 0 0 0-24-24H72a24 24 0 0 0-24 24v152H32a8 8 0 0 0 0 16h160a8 8 0 0 0 0-16h-16v-88h16a8 8 0 0 1 8 8v40a24 24 0 0 0 48 0V86.63a23.85 23.85 0 0 0-7-16.97M135.43 131l-16 40a8 8 0 0 1-14.86-6l11.61-29H96a8 8 0 0 1-7.43-11l16-40a8 8 0 1 1 14.86 6l-11.61 29H128a8 8 0 0 1 7.43 11"></svg:path>`,
})
export class PhChargingStationFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarFillIcon],svg[ph-chart-bar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h8v-64a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v64h16V88a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v112h16V40a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8v160h8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhChartBarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarHorizontalFillIcon],svg[ph-chart-bar-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 112v32a8 8 0 0 1-8 8H56v16h88a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H56v8a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0v8h120a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H56v16h168a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhChartBarHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartDonutFillIcon],svg[ph-chart-donut-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 161.94v65.34a4 4 0 0 1-4.46 4a104.28 104.28 0 0 1-84-64.5a4 4 0 0 1 2.69-5.34l63.09-16.94a4 4 0 0 1 4.35 1.66a32.25 32.25 0 0 0 15.59 12a4 4 0 0 1 2.74 3.78M128.06 24a8 8 0 0 0-8.06 8v56a7.94 7.94 0 0 0 7.87 8a32 32 0 0 1 10.86 62.15a4 4 0 0 0-2.73 3.79v65.34a4 4 0 0 0 4.45 4A104 104 0 0 0 128.06 24m-32 101.49a32 32 0 0 1 4.15-13.42V112a8 8 0 0 0-.57-8.87a8.4 8.4 0 0 0-2.46-2.13L48.85 73.06A8 8 0 0 0 37.92 76A104.12 104.12 0 0 0 25 142.68a4 4 0 0 0 5 3.32l63.22-17a3.94 3.94 0 0 0 2.88-3.51Z"></svg:path>`,
})
export class PhChartDonutFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineDownFillIcon],svg[ph-chart-line-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-16 152H56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v20.69l32 32l34.34-34.35a8 8 0 0 1 11.32 0L176 124.69V104a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h20.69L136 107.31l-34.34 34.35a8 8 0 0 1-11.32 0L64 115.31V176h136a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhChartLineDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineFillIcon],svg[ph-chart-line-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-16 136a8 8 0 0 1 0 16H56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v62.92l34.88-29.07a8 8 0 0 1 9.56-.51l43 28.69l43.41-36.18a8 8 0 0 1 10.24 12.3l-48 40a8 8 0 0 1-9.56.51l-43-28.69L64 155.75V176Z"></svg:path>`,
})
export class PhChartLineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineUpFillIcon],svg[ph-chart-line-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-16 152H56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v76.69l34.34-34.35a8 8 0 0 1 11.32 0L128 132.69L172.69 88H144a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8v48a8 8 0 0 1-16 0V99.31l-50.34 50.35a8 8 0 0 1-11.32 0L104 131.31l-40 40V176h136a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhChartLineUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieFillIcon],svg[ph-chart-pie-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 16a88 88 0 0 1 71.87 37.27L128 118.76Zm0 176a88 88 0 0 1-71.87-37.27l151.76-87.61A88 88 0 0 1 128 216"></svg:path>`,
})
export class PhChartPieFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieSliceFillIcon],svg[ph-chart-pie-slice-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 116.43a8 8 0 0 0 4-6.93v-72A8 8 0 0 0 93.34 30a104.06 104.06 0 0 0-67.61 117a8 8 0 0 0 4.52 5.81a7.9 7.9 0 0 0 3.35.74a8 8 0 0 0 4-1.07ZM88 49.62v55.26l-47.88 27.63C40 131 40 129.48 40 128a88.12 88.12 0 0 1 48-78.38M232 128a104 104 0 0 1-193.68 52.7a8 8 0 0 1 2.87-11L120 123.83V32a8 8 0 0 1 8-8a104.05 104.05 0 0 1 89.74 51.48c.11.16.21.32.31.49s.2.37.29.55A103.34 103.34 0 0 1 232 128"></svg:path>`,
})
export class PhChartPieSliceFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPolarFillIcon],svg[ph-chart-polar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 199.54v27.74a4 4 0 0 1-4.46 4a104.22 104.22 0 0 1-90.8-90.8a4 4 0 0 1 4-4.46h27.72A72.11 72.11 0 0 0 120 199.54M183.42 136H136v47.42A56.11 56.11 0 0 0 183.42 136M136 72.58V120h47.42A56.11 56.11 0 0 0 136 72.58M227.28 136h-27.74A72.11 72.11 0 0 1 136 199.54v27.74a4 4 0 0 0 4.46 4a104.22 104.22 0 0 0 90.8-90.8a4 4 0 0 0-3.98-4.48m-27.74-16h27.74a4 4 0 0 0 4-4.46a104.22 104.22 0 0 0-90.8-90.8a4 4 0 0 0-4.46 4v27.72A72.11 72.11 0 0 1 199.54 120m-84-95.26a104.22 104.22 0 0 0-90.8 90.8a4 4 0 0 0 4 4.46h27.72A72.11 72.11 0 0 1 120 56.46V28.72a4 4 0 0 0-4.46-3.98M72.58 120H120V72.58A56.11 56.11 0 0 0 72.58 120M120 183.42V136H72.58A56.11 56.11 0 0 0 120 183.42"></svg:path>`,
})
export class PhChartPolarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartScatterFillIcon],svg[ph-chart-scatter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-28 32a12 12 0 1 1-12 12a12 12 0 0 1 12-12m0 56a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-40-16a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-24-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-24 56a12 12 0 1 1-12 12a12 12 0 0 1 12-12m100 64H56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v104h136a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhChartScatterFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredDotsFillIcon],svg[ph-chat-centered-dots-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.43l13.68 23.94a16 16 0 0 0 27.78 0L155.57 200H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M84 132a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhChatCenteredDotsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredFillIcon],svg[ph-chat-centered-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56v128a16 16 0 0 1-16 16h-60.43l-13.68 23.94a16 16 0 0 1-27.78 0L100.43 200H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhChatCenteredFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredSlashFillIcon],svg[ph-chat-centered-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56v128a15.93 15.93 0 0 1-4.82 11.42a4 4 0 0 1-5.68-.25L86.52 46.69a4 4 0 0 1 3-6.69H216a16 16 0 0 1 16 16M53.92 34.62A8 8 0 0 0 40 40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.43l13.68 23.94a16 16 0 0 0 27.78 0L155.57 200h27.07l19.44 21.38a8 8 0 1 0 11.84-10.76Z"></svg:path>`,
})
export class PhChatCenteredSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredTextFillIcon],svg[ph-chat-centered-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.43l13.68 23.94a16 16 0 0 0 27.78 0L155.57 200H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-56 104H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhChatCenteredTextFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleDotsFillIcon],svg[ph-chat-circle-dots-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24M84 140a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhChatCircleDotsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleFillIcon],svg[ph-chat-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128a104 104 0 0 1-152.88 91.82l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104 104 0 1 1 232 128"></svg:path>`,
})
export class PhChatCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleSlashFillIcon],svg[ph-chat-circle-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-10.26-11.29a104 104 0 0 1-112.7 9.73l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104.06 104.06 0 0 1 52.33 56.66L42.08 45.38a8 8 0 1 1 11.84-10.76ZM128 24a103.4 103.4 0 0 0-40.33 8.11a8 8 0 0 0-2.81 12.75l121.8 134a8 8 0 0 0 13-1.59A104 104 0 0 0 128 24"></svg:path>`,
})
export class PhChatCircleSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleTextFillIcon],svg[ph-chat-circle-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m32 128H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhChatCircleTextFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatDotsFillIcon],svg[ph-chat-dots-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.9 15.9 0 0 0 10.25-3.78l.09-.07L83 208h133a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M84 140a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhChatDotsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatFillIcon],svg[ph-chat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 64v128a16 16 0 0 1-16 16H83l-32.6 28.16l-.09.07A15.9 15.9 0 0 1 40 240a16.05 16.05 0 0 1-6.79-1.52A15.84 15.84 0 0 1 24 224V64a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhChatFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatSlashFillIcon],svg[ph-chat-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.92 210.61a8 8 0 1 1-11.84 10.76L189.92 208H83l-32.6 28.16l-.08.07A15.94 15.94 0 0 1 40 240a16.1 16.1 0 0 1-6.8-1.52A15.85 15.85 0 0 1 24 224V64a16 16 0 0 1 16-16h4.46l-2.38-2.62a8 8 0 1 1 11.84-10.76ZM216 48H96.75a4 4 0 0 0-3 6.69L225 199.06a4 4 0 0 0 7-2.69V64a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhChatSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropDotsFillIcon],svg[ph-chat-teardrop-dots-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 24A100.11 100.11 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100 100 0 0 0 0-200M88 140a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhChatTeardropDotsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropFillIcon],svg[ph-chat-teardrop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 124a100.11 100.11 0 0 1-100 100H48a16 16 0 0 1-16-16v-84a100 100 0 0 1 200 0"></svg:path>`,
})
export class PhChatTeardropFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropSlashFillIcon],svg[ph-chat-teardrop-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-13.57-14.92A99.4 99.4 0 0 1 132 224H48a16 16 0 0 1-16-16v-84a99.54 99.54 0 0 1 23.29-64.08L42.08 45.38a8 8 0 0 1 .72-11.46a8.22 8.22 0 0 1 11.34.95Zm-5.57-29.91a4 4 0 0 0 6.24-.4A100 100 0 0 0 83.78 36.42a4 4 0 0 0-1 6.18Z"></svg:path>`,
})
export class PhChatTeardropSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropTextFillIcon],svg[ph-chat-teardrop-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 24A100.11 100.11 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100 100 0 0 0 0-200m32 128H96a8 8 0 0 1 0-16h68a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h68a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhChatTeardropTextFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTextFillIcon],svg[ph-chat-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.9 15.9 0 0 0 10.25-3.78l.09-.07L83 208h133a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-56 104H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhChatTextFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsCircleFillIcon],svg[ph-chats-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.07 186.76a80 80 0 0 0-62.5-114.17a80 80 0 1 0-145.64 66.17l-7.27 24.71a16 16 0 0 0 19.87 19.87l24.71-7.27a80.4 80.4 0 0 0 25.18 7.35a80 80 0 0 0 108.34 40.65l24.71 7.27a16 16 0 0 0 19.87-19.86Zm-16.25 1.47L224 216l-27.76-8.17a8 8 0 0 0-6 .63a64.05 64.05 0 0 1-85.87-24.88a79.93 79.93 0 0 0 70.33-93.87a64 64 0 0 1 41.75 92.48a8 8 0 0 0-.63 6.04"></svg:path>`,
})
export class PhChatsCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsFillIcon],svg[ph-chats-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 96a16 16 0 0 0-16-16h-32V48a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v128a8 8 0 0 0 13 6.22L72 154v30a16 16 0 0 0 16 16h93.59L219 230.22a8 8 0 0 0 5 1.78a8 8 0 0 0 8-8Zm-42.55 89.78a8 8 0 0 0-5-1.78H88v-32h80a16 16 0 0 0 16-16V96h32v111.25Z"></svg:path>`,
})
export class PhChatsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsTeardropFillIcon],svg[ph-chats-teardrop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M169.57 72.59A80 80 0 0 0 16 104v64a16 16 0 0 0 16 16h54.67A80.15 80.15 0 0 0 160 232h64a16 16 0 0 0 16-16v-64a80 80 0 0 0-70.43-79.41M224 216h-64a64.14 64.14 0 0 1-55.68-32.43a79.93 79.93 0 0 0 70.38-93.86A64 64 0 0 1 224 152Z"></svg:path>`,
})
export class PhChatsTeardropFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckCircleFillIcon],svg[ph-check-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m45.66 85.66l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCheckCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckFatFillIcon],svg[ph-check-fat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.31 90.91l-128.4 128.4a16 16 0 0 1-22.62 0l-71.62-72a16 16 0 0 1 0-22.61l20-20a16 16 0 0 1 22.58 0L104 144.22l96.76-95.57a16 16 0 0 1 22.59 0l19.95 19.54a16 16 0 0 1 .01 22.72"></svg:path>`,
})
export class PhCheckFatFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckFillIcon],svg[ph-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-10.34 45.66l-96 96a8 8 0 0 1-11.32 0l-40-40a8 8 0 0 1 11.32-11.32L104 164.69l90.34-90.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCheckFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareFillIcon],svg[ph-check-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-34.34 77.66l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCheckSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareOffsetFillIcon],svg[ph-check-square-offset-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 200a8 8 0 0 1-5.66-2.34l-16-16a8 8 0 0 1 11.32-11.32L80 180.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-40 40A8 8 0 0 1 80 200m120-8a8 8 0 0 1-8 8h-56a8 8 0 0 1 0-16h48V72H72v64a8 8 0 0 1-16 0V64a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhCheckSquareOffsetFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckerboardFillIcon],svg[ph-checkerboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-80v-80H48V48h80v80h80z"></svg:path>`,
})
export class PhCheckerboardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChecksFillIcon],svg[ph-checks-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M72 168a8 8 0 0 1-5.66-2.34l-24-24a8 8 0 0 1 11.32-11.32L72 148.69l58.34-58.35a8 8 0 0 1 11.32 11.32l-64 64A8 8 0 0 1 72 168m141.66-66.34l-64 64a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L144 148.69l58.34-58.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhChecksFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheersFillIcon],svg[ph-cheers-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.93 213.94l-17.65 4.73l-10.42-38.89a40.06 40.06 0 0 0 20.77-46.14c-12.6-47-38.78-88.22-39.89-89.95a8 8 0 0 0-8.68-3.45l-21.86 5.47c0-8.25-.18-13.43-.21-14.08a8 8 0 0 0-6.05-7.39l-32-8a8 8 0 0 0-8.68 3.45c-1.11 1.73-27.29 42.93-39.89 90a40.06 40.06 0 0 0 20.77 46.14l-10.42 38.84l-17.65-4.73a8 8 0 0 0-4.14 15.46l48 12.86a8.2 8.2 0 0 0 2.07.27a8 8 0 0 0 2.07-15.73l-14.9-4l10.42-38.89c.81.05 1.61.08 2.41.08a40.12 40.12 0 0 0 37-24.88c1.18 6.37 2.6 12.82 4.31 19.22A40.08 40.08 0 0 0 168 184c.8 0 1.6 0 2.41-.08l10.42 38.89l-14.9 4a8 8 0 0 0 2.07 15.72a8.2 8.2 0 0 0 2.07-.27l48-12.86a8 8 0 0 0-4.14-15.46M156.22 57.19c2.78 4.7 7.23 12.54 12.2 22.46L136 87.77c-.42-10-.38-18.25-.25-23.79c0-.56.05-1.12.08-1.68Zm-56.44-24l20.37 5.09c.06 4.28 0 10.67-.21 18.47c-.06 1.21-.16 3.19-.23 5.84c0 1-.1 2-.16 3l-32.86-8.16C92 46.67 96.84 38.16 99.78 33.19m85.06 10.39a8 8 0 0 1 3.58-10.74l16-8a8 8 0 1 1 7.16 14.32l-16 8a8 8 0 0 1-10.74-3.58M232 72a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8M32.84 20.42a8 8 0 0 1 10.74-3.58l16 8a8 8 0 0 1-7.16 14.32l-16-8a8 8 0 0 1-3.58-10.74M40 72H24a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhCheersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheeseFillIcon],svg[ph-cheese-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 32a7.8 7.8 0 0 0-2.3.34l-160 48A8 8 0 0 0 16 88v16a8 8 0 0 0 8 8h7.46c13.45 0 24.79 11 24.54 24.46A24 24 0 0 1 32 160h-8a8 8 0 0 0-8 8v24a8 8 0 0 0 8 8h200a16 16 0 0 0 16-16V88a56.06 56.06 0 0 0-56-56M80 184a32 32 0 0 1 64 0Zm88-48a32 32 0 0 1-31-40h62a32 32 0 0 1-31 40M78.51 80l106.61-32a40.06 40.06 0 0 1 38.07 32Z"></svg:path>`,
})
export class PhCheeseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChefHatFillIcon],svg[ph-chef-hat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 112a56.06 56.06 0 0 0-56-56c-1.77 0-3.54.1-5.29.26a56 56 0 0 0-101.42 0C75.54 56.1 73.77 56 72 56a56 56 0 0 0-24 106.59V208a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-45.41A56.09 56.09 0 0 0 240 112m-87.76 30.06l8-32a8 8 0 0 1 15.52 3.88l-8 32A8 8 0 0 1 160 152a8 8 0 0 1-1.95-.24a8 8 0 0 1-5.81-9.7M120 112a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0Zm-33.94-7.76a8 8 0 0 1 9.7 5.82l8 32a8 8 0 0 1-5.82 9.7a8 8 0 0 1-2 .24a8 8 0 0 1-7.75-6.06l-8-32a8 8 0 0 1 5.87-9.7M192 208H64v-40.58a55.5 55.5 0 0 0 8 .58h112a55.5 55.5 0 0 0 8-.58Z"></svg:path>`,
})
export class PhChefHatFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCherriesFillIcon],svg[ph-cherries-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178.42 72a75 75 0 0 0-10.21.37a91.9 91.9 0 0 0-21.59-25.09c-37.84-30.49-89.57-23.51-91.75-23.2A8 8 0 0 0 48 31.43a8.19 8.19 0 0 0 3.69 7.32c17.4 11.68 25.37 30.91 28.7 49.65a72.08 72.08 0 1 0 16.26.14C93.54 68.59 86.56 52 76 39.37c16.67.72 41.24 4.78 60.64 20.48a74.8 74.8 0 0 1 15 16.39c-1.9.69-3.79 1.44-5.65 2.29a8.42 8.42 0 0 0-4.49 4.63a8 8 0 0 0 2.41 9a89 89 0 0 1 13.59 14a3.6 3.6 0 0 0 .65.65C160 108.15 165.83 112 176 112c12.15 0 18.18-5.51 18.43-5.75l-.09.09a8 8 0 1 1 11.32 11.32C204.6 118.72 194.77 128 176 128h-1.61a3 3 0 0 0-3 4a87.9 87.9 0 0 1-7 71.6a8.4 8.4 0 0 0-1 6.24a8 8 0 0 0 7.16 6c1.78.13 3.59.2 5.37.2a72 72 0 0 0 2.42-144Zm-72 50.21l-.09.09a8 8 0 0 1 11.32 11.32C116.6 134.72 106.77 144 88 144s-28.6-9.28-29.66-10.34a8 8 0 0 1 11.32-11.32l-.09-.09c.25.24 6.28 5.75 18.43 5.75s18.18-5.51 18.43-5.75Z"></svg:path>`,
})
export class PhCherriesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChurchFillIcon],svg[ph-church-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.12 145.14L192 123.47V104a8 8 0 0 0-4-7l-52-29.64V48h16a8 8 0 0 0 0-16h-16V16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v19.36L68 97.05a8 8 0 0 0-4 7v19.47l-36.12 21.62A8 8 0 0 0 24 152v64a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-48a16 16 0 0 1 32 0v48a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-64a8 8 0 0 0-3.88-6.86M64 208H40v-51.47l24-14.4Zm152 0h-24v-65.87l24 14.4Z"></svg:path>`,
})
export class PhChurchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteFillIcon],svg[ph-cigarette-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0 48H96v-32h128zM201 60.08c8-14.23 7.42-21.71 6.36-24.91a7.8 7.8 0 0 0-2.64-3.86a8 8 0 1 1 6.5-14.62a22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79c-8 14.23-7.42 21.72-6.36 24.92a7.8 7.8 0 0 0 2.64 3.85a8 8 0 1 1-6.5 14.62a22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79m-40 0c8-14.23 7.42-21.71 6.36-24.91a7.8 7.8 0 0 0-2.64-3.86a8 8 0 1 1 6.5-14.62a22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79c-8 14.23-7.42 21.72-6.36 24.92a7.8 7.8 0 0 0 2.64 3.85a8 8 0 1 1-6.5 14.62a22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79"></svg:path>`,
})
export class PhCigaretteFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteSlashFillIcon],svg[ph-cigarette-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201 60.08c8-14.23 7.42-21.71 6.36-24.91a7.8 7.8 0 0 0-2.64-3.86a8 8 0 1 1 6.5-14.62a22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79c-8 14.23-7.42 21.72-6.36 24.92a7.8 7.8 0 0 0 2.64 3.85a8 8 0 1 1-6.5 14.62a22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79m-47.6 37.79a22.53 22.53 0 0 0 11.32 13.44a8 8 0 1 0 6.5-14.62a7.8 7.8 0 0 1-2.64-3.85c-1.06-3.2-1.64-10.69 6.36-24.92c8.41-14.94 11-27.65 7.6-37.79a22.57 22.57 0 0 0-11.32-13.44a8 8 0 1 0-6.5 14.62a7.8 7.8 0 0 1 2.64 3.86c1.06 3.2 1.64 10.68-6.36 24.91c-8.38 14.92-10.93 27.65-7.57 37.79Zm60.49 112.75a8 8 0 1 1-11.84 10.76L175.37 192H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h85.19L42.08 45.38a8 8 0 1 1 11.84-10.76ZM160.82 176l-29.09-32H96v32ZM224 128h-45.48a8 8 0 1 0 0 16H224v32h-1.84a8 8 0 1 0 0 16H224a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhCigaretteSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleDashedFillIcon],svg[ph-circle-dashed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m54.59 45a8 8 0 0 1 11.29.7a88 88 0 0 1 17.6 30.47a8 8 0 0 1-15.18 5.08a71.9 71.9 0 0 0-14.4-25a8 8 0 0 1 .69-11.25M73.41 187.05a8 8 0 0 1-11.29-.7a88 88 0 0 1-17.6-30.47a8 8 0 1 1 15.18-5.08a71.9 71.9 0 0 0 14.4 24.95a8 8 0 0 1-.69 11.3m.69-106.8a71.9 71.9 0 0 0-14.4 25a8 8 0 1 1-15.18-5.08a88 88 0 0 1 17.6-30.47a8 8 0 1 1 12 10.6Zm71.49 134a87.8 87.8 0 0 1-35.18 0a8 8 0 0 1 3.18-15.68a72.1 72.1 0 0 0 28.82 0a8 8 0 0 1 3.18 15.68m6.25-163a8 8 0 0 1-7.84 6.36a8 8 0 0 1-1.6-.16a72.1 72.1 0 0 0-28.82 0a8 8 0 1 1-3.18-15.68a87.9 87.9 0 0 1 35.18 0a8 8 0 0 1 6.26 9.43Zm59.64 104.68a88 88 0 0 1-17.6 30.47a8 8 0 1 1-12-10.6a71.9 71.9 0 0 0 14.4-24.95a8 8 0 0 1 15.18 5.08Z"></svg:path>`,
})
export class PhCircleDashedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleFillIcon],svg[ph-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104"></svg:path>`,
})
export class PhCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfFillIcon],svg[ph-circle-half-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40 128a88.1 88.1 0 0 1 88-88v176a88.1 88.1 0 0 1-88-88"></svg:path>`,
})
export class PhCircleHalfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfTiltFillIcon],svg[ph-circle-half-tilt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40 128a88 88 0 0 1 150.2-62.2L65.8 190.2A87.76 87.76 0 0 1 40 128"></svg:path>`,
})
export class PhCircleHalfTiltFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleNotchFillIcon],svg[ph-circle-notch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 176A72 72 0 0 1 92 65.64a8 8 0 0 1 8 13.85a56 56 0 1 0 56 0a8 8 0 0 1 8-13.85A72 72 0 0 1 128 200"></svg:path>`,
})
export class PhCircleNotchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyCheckFillIcon],svg[ph-circle-wavy-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2Zm-48.4 7l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11 11.6Z"></svg:path>`,
})
export class PhCircleWavyCheckFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyFillIcon],svg[ph-circle-wavy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 128c0 10.4-7.5 18.3-14.1 25.2c-3.8 3.9-7.7 8-9.2 11.5s-1.4 8.7-1.5 14c-.1 9.7-.3 20.8-8 28.5s-18.8 7.9-28.5 8c-5.3.1-10.7.2-14 1.5s-7.6 5.4-11.5 9.2c-6.9 6.6-14.8 14.1-25.2 14.1s-18.3-7.5-25.2-14.1c-3.9-3.8-8-7.7-11.5-9.2s-8.7-1.4-14-1.5c-9.7-.1-20.8-.3-28.5-8s-7.9-18.8-8-28.5c-.1-5.3-.2-10.7-1.5-14s-5.4-7.6-9.2-11.5C23.5 146.3 16 138.4 16 128s7.5-18.3 14.1-25.2c3.8-3.9 7.7-8 9.2-11.5s1.4-8.7 1.5-14c.1-9.7.3-20.8 8-28.5s18.8-7.9 28.5-8c5.3-.1 10.7-.2 14-1.5s7.6-5.4 11.5-9.2C109.7 23.5 117.6 16 128 16s18.3 7.5 25.2 14.1c3.9 3.8 8 7.7 11.5 9.2s8.7 1.4 14 1.5c9.7.1 20.8.3 28.5 8s7.9 18.8 8 28.5c.1 5.3.2 10.7 1.5 14s5.4 7.6 9.2 11.5c6.6 6.9 14.1 14.8 14.1 25.2Z"></svg:path>`,
})
export class PhCircleWavyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyQuestionFillIcon],svg[ph-circle-wavy-question-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2ZM128 192a12 12 0 1 1 12-12a12 12 0 0 1-12 12Zm8-48.9v.9a8 8 0 0 1-16 0v-8a8 8 0 0 1 8-8a20 20 0 1 0-20-20a8 8 0 0 1-16 0a36 36 0 1 1 44 35.1Z"></svg:path>`,
})
export class PhCircleWavyQuestionFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyWarningFillIcon],svg[ph-circle-wavy-warning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2ZM120 80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm8 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"></svg:path>`,
})
export class PhCircleWavyWarningFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesFourFillIcon],svg[ph-circles-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 80a40 40 0 1 1-40-40a40 40 0 0 1 40 40m56 40a40 40 0 1 0-40-40a40 40 0 0 0 40 40m-96 16a40 40 0 1 0 40 40a40 40 0 0 0-40-40m96 0a40 40 0 1 0 40 40a40 40 0 0 0-40-40"></svg:path>`,
})
export class PhCirclesFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreeFillIcon],svg[ph-circles-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 120a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44m60 8a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m-120 0a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44"></svg:path>`,
})
export class PhCirclesThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreePlusFillIcon],svg[ph-circles-three-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 80a40 40 0 1 1-40-40a40 40 0 0 1 40 40m56 40a40 40 0 1 0-40-40a40 40 0 0 0 40 40m-96 16a40 40 0 1 0 40 40a40 40 0 0 0-40-40m128 32h-24v-24a8 8 0 0 0-16 0v24h-24a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0v-24h24a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhCirclesThreePlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircuitryFillIcon],svg[ph-circuitry-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m88 111.31l48 48V220a4 4 0 0 1-4 4H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h20a4 4 0 0 1 4 4v117.38a24 24 0 1 0 16 0ZM80 184a8 8 0 1 0-8-8a8 8 0 0 0 8 8m104-80a8 8 0 1 0-8 8a8 8 0 0 0 8-8m24-72h-52a4 4 0 0 0-4 4v32.69l13.66 13.66a24 24 0 1 1-11.31 11.31l-16-16A8 8 0 0 1 136 72V36a4 4 0 0 0-4-4H92a4 4 0 0 0-4 4v52.69l61.66 61.65A8 8 0 0 1 152 156v64a4 4 0 0 0 4 4h52a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhCircuitryFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCityFillIcon],svg[ph-city-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 208h-8V88a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v40h-48V40a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v168h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M72 184a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm0-48a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm0-48a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0Zm64 96a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm64 0a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm0-48a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhCityFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardFillIcon],svg[ph-clipboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32"></svg:path>`,
})
export class PhClipboardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardTextFillIcon],svg[ph-clipboard-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m32 128H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhClipboardTextFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockAfternoonFillIcon],svg[ph-clock-afternoon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m56 112h-36.69l26.35 26.34a8 8 0 0 1-11.32 11.32l-40-40A8 8 0 0 1 128 120h56a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhClockAfternoonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockClockwiseFillIcon],svg[ph-clock-clockwise-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 80v43.47l36.12 21.67a8 8 0 0 1-8.24 13.72l-40-24A8 8 0 0 1 120 128V80a8 8 0 0 1 16 0m91.06-23.39a8 8 0 0 0-8.72 1.73L206 70.71c-3.23-3.51-6.56-7-10.1-10.59a96 96 0 1 0-2 137.7a8 8 0 0 0-11-11.64a80 80 0 1 1 1.64-114.78c3.54 3.58 6.87 7.1 10.11 10.63l-16.31 16.31A8 8 0 0 0 184 112h40a8 8 0 0 0 8-8V64a8 8 0 0 0-4.94-7.39"></svg:path>`,
})
export class PhClockClockwiseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCountdownFillIcon],svg[ph-clock-countdown-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 96a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-12-24a12 12 0 1 0-12-12a12 12 0 0 0 12 12m28.66 56a8 8 0 0 0-8.63 7.31A88.12 88.12 0 1 1 120.66 40a8 8 0 0 0-1.32-16A104.12 104.12 0 1 0 232 136.66a8 8 0 0 0-7.34-8.66M128 56a72 72 0 1 1-72 72a72.08 72.08 0 0 1 72-72m-8 72a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16h-40V80a8 8 0 0 0-16 0Zm40-80a12 12 0 1 0-12-12a12 12 0 0 0 12 12"></svg:path>`,
})
export class PhClockCountdownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCounterClockwiseFillIcon],svg[ph-clock-counter-clockwise-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a96 96 0 0 1-161.89 69.82a8 8 0 1 1 11-11.64a80 80 0 1 0-1.68-114.75A439 439 0 0 0 61.35 82l16.31 16.34A8 8 0 0 1 72 112H32a8 8 0 0 1-8-8V64a8 8 0 0 1 13.66-5.66L50 70.7c3.22-3.49 6.54-7 10.06-10.55A96 96 0 0 1 224 128m-96-56a8 8 0 0 0-8 8v48a8 8 0 0 0 3.88 6.86l40 24a8 8 0 1 0 8.24-13.72L136 123.47V80a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhClockCounterClockwiseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockFillIcon],svg[ph-clock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m56 112h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhClockFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockUserFillIcon],svg[ph-clock-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 72v43.06l36.42-18.22a8 8 0 1 1 7.16 14.32l-48 24A8 8 0 0 1 120 128V72a8 8 0 0 1 16 0m-8 144a88 88 0 1 1 88-88a8 8 0 0 0 16 0a104 104 0 1 0-104 104a8 8 0 0 0 0-16m86.62-17.38a32 32 0 1 0-45.24 0A40 40 0 0 0 152.27 222a8 8 0 0 0 7.73 10h64a8 8 0 0 0 7.73-10.06a40 40 0 0 0-17.11-23.32"></svg:path>`,
})
export class PhClockUserFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClosedCaptioningFillIcon],svg[ph-closed-captioning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M116 162.64a40 40 0 1 1 0-69.28a8 8 0 1 1-8 13.85a24 24 0 1 0 0 41.58a8 8 0 0 1 8 13.85m80 0a40 40 0 1 1 0-69.28a8 8 0 1 1-8 13.85a24 24 0 1 0 0 41.58a8 8 0 0 1 8 13.85"></svg:path>`,
})
export class PhClosedCaptioningFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowDownFillIcon],svg[ph-cloud-arrow-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.93 124.52C246.11 77.54 207.07 40 160.06 40a88.1 88.1 0 0 0-78.77 48.67A87.5 87.5 0 0 0 72 127.73a8.18 8.18 0 0 1-7.43 8.27a8 8 0 0 1-8.57-8a103.7 103.7 0 0 1 5.34-32.92a4 4 0 0 0-4.75-5.18A64.09 64.09 0 0 0 8 152c0 35.19 29.75 64 65 64h87a88.09 88.09 0 0 0 87.93-91.48m-50.27 25.14l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L152 156.69V96a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCloudArrowDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowUpFillIcon],svg[ph-cloud-arrow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.93 124.52C246.11 77.54 207.07 40 160.06 40a88.1 88.1 0 0 0-78.77 48.67A87.5 87.5 0 0 0 72 127.73a8.18 8.18 0 0 1-7.43 8.27a8 8 0 0 1-8.57-8a103.7 103.7 0 0 1 5.34-32.92a4 4 0 0 0-4.75-5.18A64.09 64.09 0 0 0 8 152c0 35.19 29.75 64 65 64h87a88.09 88.09 0 0 0 87.93-91.48m-50.27 9.14a8 8 0 0 1-11.32 0L168 115.31V176a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhCloudArrowUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudCheckFillIcon],svg[ph-cloud-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.93 124.52C246.11 77.54 207.07 40 160.06 40a88.1 88.1 0 0 0-78.77 48.67A87.5 87.5 0 0 0 72 127.73a8.18 8.18 0 0 1-7.43 8.27a8 8 0 0 1-8.57-8a103.7 103.7 0 0 1 5.34-32.92a4 4 0 0 0-4.75-5.18A64.09 64.09 0 0 0 8 152c0 35.19 29.75 64 65 64h87a88.09 88.09 0 0 0 87.93-91.48m-50.27-6.86l-48 48a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L144 148.69l42.34-42.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCloudCheckFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudFillIcon],svg[ph-cloud-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160.06 40a88.1 88.1 0 0 0-78.77 48.67A87.5 87.5 0 0 0 72 127.73a8.18 8.18 0 0 1-7.43 8.27a8 8 0 0 1-8.57-8a103.7 103.7 0 0 1 5.34-32.92a4 4 0 0 0-4.75-5.18A64.09 64.09 0 0 0 8 152c0 35.19 29.75 64 65 64h87a88.09 88.09 0 0 0 87.93-91.48C246.11 77.54 207.07 40 160.06 40"></svg:path>`,
})
export class PhCloudFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudFogFillIcon],svg[ph-cloud-fog-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 232a8 8 0 0 1-8 8h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 8 8m-40-32a8 8 0 0 0-8-8H72a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8m56-8h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m47.87-96.45a76 76 0 0 0-151.78.73A8.18 8.18 0 0 1 72 104h-.6a8.14 8.14 0 0 1-7.4-8.61a92.5 92.5 0 0 1 2.33-16.51a4 4 0 0 0-5-4.78A52.09 52.09 0 0 0 24 124.36C24.2 153.07 48.12 176 76.84 176H156a76.08 76.08 0 0 0 75.87-80.45"></svg:path>`,
})
export class PhCloudFogFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudLightningFillIcon],svg[ph-cloud-lightning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 168h-23.47l-14.4 24H144a8 8 0 0 1 6.86 12.12l-24 40a8 8 0 0 1-13.72-8.24L129.87 208H104a8 8 0 0 1-6.86-12.12L113.87 168h-37C48.12 168 24.2 145.07 24 116.36A52.09 52.09 0 0 1 61.35 66.1a4 4 0 0 1 5 4.78A92.5 92.5 0 0 0 64 87.39A8.14 8.14 0 0 0 71.41 96h.6a8.18 8.18 0 0 0 8.08-7.72A76 76 0 1 1 156 168"></svg:path>`,
})
export class PhCloudLightningFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudMoonFillIcon],svg[ph-cloud-moon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 72a76.4 76.4 0 0 0-12.36 1a71.93 71.93 0 0 0-55.47-63.17a8 8 0 0 0-9.59 9.58A56.05 56.05 0 0 1 40 88a56.5 56.5 0 0 1-12.59-1.42a8 8 0 0 0-9.59 9.59a72.22 72.22 0 0 0 32.29 45.06A52 52 0 0 0 92 224h80a76 76 0 0 0 0-152M37.37 104H40a72.08 72.08 0 0 0 72-72v-2.67a55.64 55.64 0 0 1 32 48.05a76.4 76.4 0 0 0-43 43.4a52.4 52.4 0 0 0-9-.78a51.7 51.7 0 0 0-30 9.59A56.22 56.22 0 0 1 37.37 104"></svg:path>`,
})
export class PhCloudMoonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudRainFillIcon],svg[ph-cloud-rain-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m158.66 196.44l-32 48a8 8 0 1 1-13.32-8.88l32-48a8 8 0 0 1 13.32 8.88m73.21-108.89a76 76 0 0 0-151.78.73A8.18 8.18 0 0 1 72 96h-.6a8.14 8.14 0 0 1-7.4-8.61a92.5 92.5 0 0 1 2.33-16.51a4 4 0 0 0-5-4.78A52.09 52.09 0 0 0 24 116.36C24.2 145.07 48.12 168 76.84 168h36.21l-23.71 35.56a8 8 0 0 0 13.32 8.88L132.28 168H156a76.08 76.08 0 0 0 75.87-80.45"></svg:path>`,
})
export class PhCloudRainFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSlashFillIcon],svg[ph-cloud-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 128.72A87.74 87.74 0 0 1 222.41 190a4 4 0 0 1-5.77-.16L103.78 65.67a4 4 0 0 1 .39-5.76A87.82 87.82 0 0 1 160.87 40c48.28.47 87.51 40.43 87.13 88.72M53.92 34.62a8 8 0 1 0-11.84 10.76l39.25 43.18l-.06.11A64 64 0 0 0 8 153c.53 35.12 29.84 63 65 63h87a87.7 87.7 0 0 0 31.78-5.95l10.3 11.33a8 8 0 0 0 11.33.52a8.32 8.32 0 0 0 .29-11.52Z"></svg:path>`,
})
export class PhCloudSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSnowFillIcon],svg[ph-cloud-snow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 196a12 12 0 1 1-12-12a12 12 0 0 1 12 12m28 4a12 12 0 1 0 12 12a12 12 0 0 0-12-12m48-16a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-96 40a12 12 0 1 0 12 12a12 12 0 0 0-12-12m88 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m75.87-136.45a76 76 0 0 0-151.78.73A8.18 8.18 0 0 1 72 96h-.6a8.14 8.14 0 0 1-7.4-8.61a92.5 92.5 0 0 1 2.33-16.51a4 4 0 0 0-5-4.78A52.09 52.09 0 0 0 24 116.36C24.2 145.07 48.12 168 76.84 168H156a76.08 76.08 0 0 0 75.87-80.45"></svg:path>`,
})
export class PhCloudSnowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSunFillIcon],svg[ph-cloud-sun-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 72a76.2 76.2 0 0 0-20.26 2.73a55.6 55.6 0 0 0-9.41-11.54l9.51-13.57a8 8 0 1 0-13.11-9.18L121.22 54A55.9 55.9 0 0 0 96 48h-1.74l-2.89-16.29a8 8 0 1 0-15.75 2.77l2.88 16.34a56.1 56.1 0 0 0-23.27 14.85l-13.62-9.53a8 8 0 1 0-9.17 13.11L46 78.77A55.55 55.55 0 0 0 40 104v1.72l-16.29 2.88a8 8 0 0 0 1.38 15.88a8 8 0 0 0 1.39-.12l16.32-2.88a55.7 55.7 0 0 0 5.86 12.42A52 52 0 0 0 84 224h80a76 76 0 0 0 0-152m-71.08 48.76a52.14 52.14 0 0 0-31 4.17a40 40 0 0 1 66.62-44.17a76.26 76.26 0 0 0-35.62 40"></svg:path>`,
})
export class PhCloudSunFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudWarningFillIcon],svg[ph-cloud-warning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.93 124.52C246.11 77.54 207.07 40 160.06 40a88.1 88.1 0 0 0-78.77 48.67A87.5 87.5 0 0 0 72 127.73a8.18 8.18 0 0 1-7.43 8.27a8 8 0 0 1-8.57-8a103.7 103.7 0 0 1 5.34-32.92a4 4 0 0 0-4.75-5.18A64.09 64.09 0 0 0 8 152c0 35.19 29.75 64 65 64h87a88.09 88.09 0 0 0 87.93-91.48M152 88a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm8 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhCloudWarningFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudXFillIcon],svg[ph-cloud-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.93 124.52C246.11 77.54 207.07 40 160.06 40a88.1 88.1 0 0 0-78.77 48.67A87.5 87.5 0 0 0 72 127.73a8.18 8.18 0 0 1-7.43 8.27a8 8 0 0 1-8.57-8a103.7 103.7 0 0 1 5.34-32.92a4 4 0 0 0-4.75-5.18A64.09 64.09 0 0 0 8 152c0 35.19 29.75 64 65 64h87a88.09 88.09 0 0 0 87.93-91.48m-58.27 29.82a8 8 0 0 1-11.32 11.32L160 147.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L148.69 136l-18.35-18.34a8 8 0 0 1 11.32-11.32L160 124.69l18.34-18.35a8 8 0 0 1 11.32 11.32L171.31 136Z"></svg:path>`,
})
export class PhCloudXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloverFillIcon],svg[ph-clover-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 120c0 22.63-6 36.72-17.93 41.87a27.3 27.3 0 0 1-11 2.13a41.8 41.8 0 0 1-8.4-.93a4.05 4.05 0 0 1-2.52-1.64a368.5 368.5 0 0 0-47.75-55.26a8 8 0 0 0-11 11.62c14.84 13.91 64.13 63.49 78.32 120.27a8 8 0 0 1-5.82 9.7a8 8 0 0 1-1.9.24a8 8 0 0 1-7.75-6.06c-4.12-16.47-11.65-32.48-20.46-47.09a25.9 25.9 0 0 1-1.9 7.21C164.72 214 150.63 220 128 220s-36.72-6-41.88-17.94c-5.45-12.58-.39-30.82 15-54.21c.68-1 1.36-2 2-3l-3 2C82.84 158.27 68.35 164 56.89 164a27.3 27.3 0 0 1-11-2.13C34 156.72 28 142.63 28 120s6-36.72 17.93-41.88c12.59-5.45 30.83-.39 54.22 15l3 2l-2-3c-15.41-23.39-20.47-41.63-15-54.22C91.28 26 105.37 20 128 20s36.72 6 41.88 17.93c5.45 12.59.39 30.83-15 54.22q-1 1.53-2 3l3-2c23.39-15.41 41.63-20.47 54.22-15C222 83.28 228 97.37 228 120"></svg:path>`,
})
export class PhCloverFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClubFillIcon],svg[ph-club-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 144a56 56 0 0 1-84.81 48h-4.44l8.91 29.7A8 8 0 0 1 152 232h-48a8 8 0 0 1-7.66-10.3l8.91-29.7h-4.44A56 56 0 1 1 72 88h2.33a56 56 0 1 1 107.34 0H184a56.06 56.06 0 0 1 56 56"></svg:path>`,
})
export class PhClubFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoatHangerFillIcon],svg[ph-coat-hanger-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.57 171.2L141.33 96l23.46-17.6A8 8 0 0 0 168 72a40 40 0 1 0-80 0a8 8 0 0 0 16 0a24 24 0 0 1 47.69-3.78L14.43 171.2A16 16 0 0 0 24 200h208a16 16 0 0 0 9.6-28.8ZM32.73 184c20.87-13.41 56.76-32 95.27-32s74.4 18.59 95.27 32Z"></svg:path>`,
})
export class PhCoatHangerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodaLogoFillIcon],svg[ph-coda-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 128a40 40 0 0 0 40 40h.32c7.83.3 14-1.46 21.24-6.11A12 12 0 0 1 216 172v36a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16v36a12 12 0 0 1-18.47 10.1A40.23 40.23 0 0 0 136 128"></svg:path>`,
})
export class PhCodaLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeBlockFillIcon],svg[ph-code-block-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40h-32a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v80a16 16 0 0 0 16 16h8v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-93.66 21.66a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L124.69 80Zm-64 24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L59.31 80l18.35 18.34a8 8 0 0 1-11.32 11.32ZM200 200H56v-64h96a16 16 0 0 0 16-16V56h32Z"></svg:path>`,
})
export class PhCodeBlockFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeFillIcon],svg[ph-code-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M92.8 145.6a8 8 0 1 1-9.6 12.8l-32-24a8 8 0 0 1 0-12.8l32-24a8 8 0 0 1 9.6 12.8L69.33 128Zm58.89-71.4l-32 112a8 8 0 1 1-15.38-4.4l32-112a8 8 0 0 1 15.38 4.4m53.11 60.2l-32 24a8 8 0 0 1-9.6-12.8l23.47-17.6l-23.47-17.6a8 8 0 1 1 9.6-12.8l32 24a8 8 0 0 1 0 12.8"></svg:path>`,
})
export class PhCodeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeSimpleFillIcon],svg[ph-code-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M101.66 162.34a8 8 0 0 1-11.32 11.32l-40-40a8 8 0 0 1 0-11.32l40-40a8 8 0 0 1 11.32 11.32L67.31 128Zm104-28.68l-40 40a8 8 0 0 1-11.32-11.32L188.69 128l-34.35-34.34a8 8 0 0 1 11.32-11.32l40 40a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhCodeSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodepenLogoFillIcon],svg[ph-codepen-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.79 89l-104-56a8 8 0 0 0-7.58 0l-104 56A8 8 0 0 0 16 96v64a8 8 0 0 0 4.21 7l93.89 50.6a4 4 0 0 0 5.9-3.52v-57.3L66.55 128L32 146.61v-37.22L66.55 128l16.88-9.09L40.87 96L120 53.39v45.83l-36.57 19.69l44.57 24l44.57-24l16.88 9.09L224 109.39v37.22L189.45 128L136 156.78v57.3a4 4 0 0 0 5.9 3.52l93.89-50.6a8 8 0 0 0 4.21-7V96a8 8 0 0 0-4.21-7m-63.22 30L136 99.22V53.39L215.13 96Z"></svg:path>`,
})
export class PhCodepenLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodesandboxLogoFillIcon],svg[ph-codesandbox-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.89 72.25a15.93 15.93 0 0 0-6.18-6.06L135.68 18a15.94 15.94 0 0 0-15.36 0l-88 48.18a15.93 15.93 0 0 0-6.18 6.06A16 16 0 0 0 24 80.18v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-2.11-7.93M120 219.61l-32-17.52V152a8 8 0 0 0-4.16-7L40 121V89l80 43.8Zm8-100.73L48.66 75.44l34.48-18.87l41 22.45a8 8 0 0 0 7.68 0l41-22.45l34.48 18.87Zm88 2.1l-43.84 24a8 8 0 0 0-4.16 7v50.09l-32 17.52v-86.85l80-43.8Z"></svg:path>`,
})
export class PhCodesandboxLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeBeanFillIcon],svg[ph-coffee-bean-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M71.22 190.47a108.9 108.9 0 0 1-33.84 9.16a4 4 0 0 1-3.89-2c-8.67-15.28-11.52-34.29-8-55.15c4.49-26.92 19.09-53.87 41.12-75.9s49-36.63 75.9-41.12c22.79-3.79 43.37 0 59.29 10.6a4 4 0 0 1-1.25 7.23a121 121 0 0 0-21.82 7.46c-21.77 9.9-49.6 31.06-58.52 75.7c-6.11 30.28-22.58 51.82-48.99 64.02M222.51 58.38a4 4 0 0 0-3.88-2a108.5 108.5 0 0 0-33.85 9.16c-26.41 12.2-42.88 33.74-48.94 64c-8.93 44.64-36.75 65.8-58.52 75.7a121 121 0 0 1-21.82 7.46a4 4 0 0 0-1.23 7.3c11.87 7.92 26.32 12 42.35 12a103.7 103.7 0 0 0 16.92-1.44c26.91-4.49 53.87-19.09 75.9-41.12s36.63-49 41.12-75.9c3.44-20.86.62-39.88-8.05-55.16"></svg:path>`,
})
export class PhCoffeeBeanFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeFillIcon],svg[ph-coffee-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80H32a8 8 0 0 0-8 8v48a96.3 96.3 0 0 0 32.54 72H32a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16h-24.54a96.6 96.6 0 0 0 27-40.09A40 40 0 0 0 248 128v-8a40 40 0 0 0-40-40m24 48a24 24 0 0 1-17.2 23a96 96 0 0 0 1.2-15V97.38A24 24 0 0 1 232 120ZM112 56V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m32 0V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m-64 0V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0"></svg:path>`,
})
export class PhCoffeeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinFillIcon],svg[ph-coin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207.58 63.84C186.85 53.48 159.33 48 128 48s-58.85 5.48-79.58 15.84S16 88.78 16 104v48c0 15.22 11.82 29.85 32.42 40.16S96.67 208 128 208s58.85-5.48 79.58-15.84S240 167.22 240 152v-48c0-15.22-11.82-29.85-32.42-40.16m-87.58 96v32c-19-.62-35-3.42-48-7.49v-31.3a203.4 203.4 0 0 0 48 6.81Zm16 0a203.4 203.4 0 0 0 48-6.81v31.31c-13 4.07-29 6.87-48 7.49ZM32 152v-18.47a83 83 0 0 0 16.42 10.63c2.43 1.21 5 2.35 7.58 3.43V178c-15.83-7.84-24-17.71-24-26m168 26v-30.41c2.61-1.08 5.15-2.22 7.58-3.43A83 83 0 0 0 224 133.53V152c0 8.29-8.17 18.16-24 26"></svg:path>`,
})
export class PhCoinFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinVerticalFillIcon],svg[ph-coin-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.51 56.09C186.44 35.4 169.92 24 152 24h-48c-17.92 0-34.44 11.4-46.51 32.09C46.21 75.42 40 101 40 128s6.21 52.58 17.49 71.91C69.56 220.6 86.08 232 104 232h48c17.92 0 34.44-11.4 46.51-32.09C209.79 180.58 216 155 216 128s-6.21-52.58-17.49-71.91m1.28 63.91h-32a152.8 152.8 0 0 0-9.68-48h30.59c6.12 13.38 10.16 30 11.09 48m-20.6-64h-28.73a83 83 0 0 0-12-16H152c10 0 19.4 6 27.19 16M152 216h-13.51a83 83 0 0 0 12-16h28.73C171.4 210 162 216 152 216m36.7-32h-30.58a152.8 152.8 0 0 0 9.68-48h32c-.94 18-4.98 34.62-11.1 48"></svg:path>`,
})
export class PhCoinVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinsFillIcon],svg[ph-coins-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 89.57V84c0-25.08-37.83-44-88-44S8 58.92 8 84v40c0 20.89 26.25 37.49 64 42.46V172c0 25.08 37.83 44 88 44s88-18.92 88-44v-40c0-20.7-25.42-37.32-64-42.43m-128 57.3C36.41 141.4 24 132.39 24 124v-14.07c8.16 5.78 19.09 10.44 32 13.57Zm80-23.37c12.91-3.13 23.84-7.79 32-13.57V124c0 8.39-12.41 17.4-32 22.87Zm-16 71.37c-19.59-5.47-32-14.48-32-22.87v-4.17c2.63.1 5.29.17 8 .17c3.88 0 7.67-.13 11.39-.35a122 122 0 0 0 12.61 3.76Zm0-44.62A163 163 0 0 1 96 152a163 163 0 0 1-24-1.75v-23.79A184 184 0 0 0 96 128a184 184 0 0 0 24-1.54Zm64 48a165.5 165.5 0 0 1-48 0V174.4a179.5 179.5 0 0 0 24 1.6a184 184 0 0 0 24-1.54ZM232 172c0 8.39-12.41 17.4-32 22.87V171.5c12.91-3.13 23.84-7.79 32-13.57Z"></svg:path>`,
})
export class PhCoinsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsFillIcon],svg[ph-columns-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 48v160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16m72-16h-40a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhColumnsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusLeftFillIcon],svg[ph-columns-plus-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 48v160a16 16 0 0 1-16 16h-24a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h24a16 16 0 0 1 16 16m56-16h-24a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M64 120H48v-16a8 8 0 0 0-16 0v16H16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhColumnsPlusLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusRightFillIcon],svg[ph-columns-plus-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 48v160a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h24a16 16 0 0 1 16 16m56-16h-24a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m88 88h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhColumnsPlusRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCommandFillIcon],svg[ph-command-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 116h24v24h-24ZM86 72a14 14 0 0 0 0 28h14V86a14 14 0 0 0-14-14m98 14a14 14 0 0 0-28 0v14h14a14 14 0 0 0 14-14M72 170a14 14 0 0 0 28 0v-14H86a14 14 0 0 0-14 14M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-68 92v-24h14a30 30 0 1 0-30-30v14h-24V86a30 30 0 1 0-30 30h14v24H86a30 30 0 1 0 30 30v-14h24v14a30 30 0 1 0 30-30Zm0 30a14 14 0 1 0 14-14h-14Z"></svg:path>`,
})
export class PhCommandFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassFillIcon],svg[ph-compass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m51.58 57.79l-32 64a4.08 4.08 0 0 1-1.79 1.79l-64 32a4 4 0 0 1-5.37-5.37l32-64a4.08 4.08 0 0 1 1.79-1.79l64-32a4 4 0 0 1 5.37 5.37"></svg:path>`,
})
export class PhCompassFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassRoseFillIcon],svg[ph-compass-rose-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.94 120.24l-27.05-6.76a95.86 95.86 0 0 0-80.37-80.37l-6.76-27a8 8 0 0 0-15.52 0l-6.76 27.05a95.86 95.86 0 0 0-80.37 80.37l-27 6.76a8 8 0 0 0 0 15.52l27.05 6.76a95.86 95.86 0 0 0 80.37 80.37l6.76 27.05a8 8 0 0 0 15.52 0l6.76-27.05a95.86 95.86 0 0 0 80.37-80.37l27.05-6.76a8 8 0 0 0 0-15.52Zm-44.17-11L158.6 97.4l-11.8-47.17a79.88 79.88 0 0 1 58.97 58.97Zm-96.57-59L97.4 97.4l-47.17 11.8a79.88 79.88 0 0 1 58.97-58.97Zm-59 96.57l47.2 11.79l11.8 47.17a79.88 79.88 0 0 1-58.97-58.97Zm96.57 59l11.8-47.17l47.17-11.8a79.88 79.88 0 0 1-58.94 58.93Z"></svg:path>`,
})
export class PhCompassRoseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassToolFillIcon],svg[ph-compass-tool-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.12 123.64a8 8 0 1 0-14.24-7.28a79.6 79.6 0 0 1-33.08 33.5l-18.24-41.05A36 36 0 0 0 136 44.91V24a8 8 0 0 0-16 0v20.91a36 36 0 0 0-13.56 63.9L56.69 220.75a8 8 0 1 0 14.62 6.5l25.14-56.56A95.5 95.5 0 0 0 128 176a99.1 99.1 0 0 0 31.6-5.21l25.09 56.46a8 8 0 0 0 14.62-6.5l-25-56.25a95.8 95.8 0 0 0 40.81-40.86M128 160a79.5 79.5 0 0 1-25-4l18.08-40.68a35.8 35.8 0 0 0 13.88 0l18.14 40.8A83.2 83.2 0 0 1 128 160"></svg:path>`,
})
export class PhCompassToolFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phComputerTowerFillIcon],svg[ph-computer-tower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 24H64a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-64 168a12 12 0 1 1 12-12a12 12 0 0 1-12 12m32-80H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhComputerTowerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phConfettiFillIcon],svg[ph-confetti-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M111.49 52.63a15.8 15.8 0 0 0-26 5.77L33 202.78A15.83 15.83 0 0 0 47.76 224a16 16 0 0 0 5.46-1l144.37-52.5a15.8 15.8 0 0 0 5.78-26Zm-46.35 108.5l19.2-52.79l63.32 63.32l-52.8 19.2ZM160 72a37.8 37.8 0 0 1 3.84-15.58C169.14 45.83 179.14 40 192 40c6.7 0 11-2.29 13.65-7.21a22 22 0 0 0 2.35-8.85a8 8 0 0 1 16 .06c0 12.86-8.52 32-32 32c-6.7 0-11 2.29-13.65 7.21a22 22 0 0 0-2.35 8.85a8 8 0 0 1-16-.06m-24-32V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m101.66 82.34a8 8 0 1 1-11.32 11.31l-16-16a8 8 0 0 1 11.32-11.32Zm4.87-42.75l-24 8a8 8 0 0 1-5.06-15.18l24-8a8 8 0 0 1 5.06 15.18"></svg:path>`,
})
export class PhConfettiFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phContactlessPaymentFillIcon],svg[ph-contactless-payment-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M97.07 155.74a8 8 0 1 1-14.14-7.48a42.79 42.79 0 0 0 0-40.52a8 8 0 0 1 14.14-7.48a59.33 59.33 0 0 1 0 55.48m28 16a8 8 0 1 1-14.12-7.52a77.07 77.07 0 0 0 0-72.48a8 8 0 1 1 14.12-7.52a93 93 0 0 1-.01 87.54Zm28 16a8 8 0 0 1-14.07-7.51a110.62 110.62 0 0 0 0-104.46a8 8 0 0 1 14.12-7.54a126.67 126.67 0 0 1-.05 119.54Z"></svg:path>`,
})
export class PhContactlessPaymentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phControlFillIcon],svg[ph-control-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207.39 123.06A8 8 0 0 1 200 128H56a8 8 0 0 1-5.66-13.66l72-72a8 8 0 0 1 11.32 0l72 72a8 8 0 0 1 1.73 8.72"></svg:path>`,
})
export class PhControlFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookieFillIcon],svg[ph-cookie-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 120a40 40 0 0 1-40-40a8 8 0 0 0-8-8a40 40 0 0 1-40-40a8 8 0 0 0-8-8a104 104 0 1 0 104 104a8 8 0 0 0-8-8M75.51 99.51a12 12 0 1 1 0 17a12 12 0 0 1 0-17m25 73a12 12 0 1 1 0-17a12 12 0 0 1-.02 16.98Zm23-40a12 12 0 1 1 17 0a12 12 0 0 1-17-.02Zm41 48a12 12 0 1 1 0-17a12 12 0 0 1-.02 16.98Z"></svg:path>`,
})
export class PhCookieFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookingPotFillIcon],svg[ph-cooking-pot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 48V16a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m94.4 35.2a8 8 0 0 0-11.2-1.6L224 104V80a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v24L12.8 89.6a8 8 0 0 0-9.6 12.8L32 124v60a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-60l28.8-21.6a8 8 0 0 0 1.6-11.2"></svg:path>`,
})
export class PhCookingPotFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyFillIcon],svg[ph-copy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-8 128h-32V88a8 8 0 0 0-8-8H96V48h112Z"></svg:path>`,
})
export class PhCopyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopySimpleFillIcon],svg[ph-copy-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 72v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8m24-40H72a8 8 0 0 0 0 16h136v136a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCopySimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyleftFillIcon],svg[ph-copyleft-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 56a72 72 0 1 0 72 72a72.08 72.08 0 0 0-72-72m0 120a47.66 47.66 0 0 1-38.4-19.19a8 8 0 0 1 12.8-9.61a32 32 0 1 0 0-38.4a8 8 0 0 1-12.8-9.61A48 48 0 1 1 128 176m0-152a104 104 0 1 0 104 104A104 104 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88"></svg:path>`,
})
export class PhCopyleftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyrightFillIcon],svg[ph-copyright-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 56a72 72 0 1 0 72 72a72.08 72.08 0 0 0-72-72m0 104a31.8 31.8 0 0 0 25.61-12.8a8 8 0 1 1 12.79 9.61a48 48 0 1 1 0-57.63a8 8 0 1 1-12.79 9.61A32 32 0 1 0 128 160m0-136a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88"></svg:path>`,
})
export class PhCopyrightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersInFillIcon],svg[ph-corners-in-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 96V48a8 8 0 0 1 13.66-5.66l48 48A8 8 0 0 1 208 104h-48a8 8 0 0 1-8-8m-56 56H48a8 8 0 0 0-5.66 13.66l48 48A8 8 0 0 0 104 208v-48a8 8 0 0 0-8-8m3.06-111.39a8 8 0 0 0-8.72 1.73l-48 48A8 8 0 0 0 48 104h48a8 8 0 0 0 8-8V48a8 8 0 0 0-4.94-7.39M208 152h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 13.66 5.66l48-48A8 8 0 0 0 208 152"></svg:path>`,
})
export class PhCornersInFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersOutFillIcon],svg[ph-corners-out-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M93.66 202.34A8 8 0 0 1 88 216H48a8 8 0 0 1-8-8v-40a8 8 0 0 1 13.66-5.66ZM88 40H48a8 8 0 0 0-8 8v40a8 8 0 0 0 13.66 5.66l40-40A8 8 0 0 0 88 40m123.06 120.61a8 8 0 0 0-8.72 1.73l-40 40A8 8 0 0 0 168 216h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-4.94-7.39M208 40h-40a8 8 0 0 0-5.66 13.66l40 40A8 8 0 0 0 216 88V48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCornersOutFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCouchFillIcon],svg[ph-couch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 100V72a16 16 0 0 1 16-16h84a4 4 0 0 1 4 4v76H64a32 32 0 0 0-32-32H20a4 4 0 0 1-4-4m208 4h12a4 4 0 0 0 4-4V72a16 16 0 0 0-16-16h-84a4 4 0 0 0-4 4v76h56a32 32 0 0 1 32-32m8 16h-8a16 16 0 0 0-16 16v8a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8v-8a16 16 0 0 0-16-16h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v15.73a8.18 8.18 0 0 0 7.47 8.27a8 8 0 0 0 8.53-8v-16h160v15.73a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8V184h8a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhCouchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCourtBasketballFillIcon],svg[ph-court-basketball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 92.23v71.54a4 4 0 0 1-4.41 4a40 40 0 0 1 0-79.52a4 4 0 0 1 4.41 3.98M20.41 167.76a40 40 0 0 0 0-79.52a4 4 0 0 0-4.41 4v71.54a4 4 0 0 0 4.41 3.98M116 48H32a16 16 0 0 0-16 16v4.13a4 4 0 0 0 3.8 4a56 56 0 0 1 0 111.74a4 4 0 0 0-3.8 4V192a16 16 0 0 0 16 16h84a4 4 0 0 0 4-4V52a4 4 0 0 0-4-4m108 0h-84a4 4 0 0 0-4 4v152a4 4 0 0 0 4 4h84a16 16 0 0 0 16-16v-4.13a4 4 0 0 0-3.8-4a56 56 0 0 1 0-111.74a4 4 0 0 0 3.8-4V64a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhCourtBasketballFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowFillIcon],svg[ph-cow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 192a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8m72-8h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m68.39-61.88A16 16 0 0 1 232 128h-32v32a40 40 0 0 1-24 72H80a40 40 0 0 1-24-72v-32H24a16 16 0 0 1-15.69-19a56.13 56.13 0 0 1 54.91-45h1.64A55.83 55.83 0 0 1 48 24a8 8 0 0 1 16 0a40 40 0 0 0 40 40h48a40 40 0 0 0 40-40a8 8 0 0 1 16 0a55.83 55.83 0 0 1-16.86 40h1.64a56.13 56.13 0 0 1 54.91 45a15.82 15.82 0 0 1-3.3 13.12M144 124a12 12 0 1 0 12-12a12 12 0 0 0-12 12m-56 0a12 12 0 1 0 12-12a12 12 0 0 0-12 12m-32-12v-8a39.8 39.8 0 0 1 8-24h-.8A40.09 40.09 0 0 0 24 112Zm144 80a24 24 0 0 0-24-24H80a24 24 0 0 0 0 48h96a24 24 0 0 0 24-24m32-80a40.08 40.08 0 0 0-39.2-32h-.8a39.8 39.8 0 0 1 8 24v8Z"></svg:path>`,
})
export class PhCowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowboyHatFillIcon],svg[ph-cowboy-hat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 120a8 8 0 0 0-6.78 3.76A180 180 0 0 1 195.41 143l-1.63-8.57l-15.46-81.36a16 16 0 0 0-25.72-9.55l-.13.1L128 64l-24.47-20.38l-.13-.1a16 16 0 0 0-25.72 9.53l-15.45 81.33l-1.64 8.62a179 179 0 0 1-13.81-19.25A8 8 0 0 0 40 120a40 40 0 0 0 0 80h176a40 40 0 0 0 0-80M76.68 144h102.63l2.54 13.35a113.3 113.3 0 0 1-27.35 19c-15.4 7.42-26.44 7.65-26.5 7.65c-.33 0-25.49-.4-53.86-26.6Z"></svg:path>`,
})
export class PhCowboyHatFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCpuFillIcon],svg[ph-cpu-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 104h48v48h-48Zm136 48a8 8 0 0 1-8 8h-16v40a16 16 0 0 1-16 16h-40v16a8 8 0 0 1-16 0v-16h-32v16a8 8 0 0 1-16 0v-16H56a16 16 0 0 1-16-16v-40H24a8 8 0 0 1 0-16h16v-32H24a8 8 0 0 1 0-16h16V56a16 16 0 0 1 16-16h40V24a8 8 0 0 1 16 0v16h32V24a8 8 0 0 1 16 0v16h40a16 16 0 0 1 16 16v40h16a8 8 0 0 1 0 16h-16v32h16a8 8 0 0 1 8 8m-72-56a8 8 0 0 0-8-8H96a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8Z"></svg:path>`,
})
export class PhCpuFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneFillIcon],svg[ph-crane-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.12 17.14a8 8 0 0 0-7.88-.2L102 80H32a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h88a16 16 0 0 0 16-16v-32a7 7 0 0 0-.08-1.05v-.24a10 10 0 0 0-.22-1a.1.1 0 0 0 0-.05v-.07L113.54 92L216 37.33V160h-16v-8a8 8 0 0 0-16 0v8a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V24a8 8 0 0 0-3.88-6.86M48 96v64H32V96ZM32 200v-24h88v24Z"></svg:path>`,
})
export class PhCraneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneTowerFillIcon],svg[ph-crane-tower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M127.73 208H112v-44a4 4 0 0 0-4-4H44a4 4 0 0 0-4 4v44H24.27a8.17 8.17 0 0 0-8.27 7.47a8 8 0 0 0 8 8.53h104a8 8 0 0 0 8-8.53a8.17 8.17 0 0 0-8.27-7.47"></svg:path><svg:path d="M239.73 80H108.94L87.16 36.42A8 8 0 0 0 80 32H48a8 8 0 0 0-8 8v40H24.27A8.17 8.17 0 0 0 16 87.47A8 8 0 0 0 24 96h16v44a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4V96h96v88h-16v-7.73a8.18 8.18 0 0 0-7.47-8.25a8 8 0 0 0-8.53 8v8a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V96h16a8 8 0 0 0 8-8.53a8.17 8.17 0 0 0-8.27-7.47M56 80V48h19.06l16 32Z"></svg:path></svg:g>`,
})
export class PhCraneTowerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCreditCardFillIcon],svg[ph-credit-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-88 128h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m64 0h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16M32 88V64h192v24Z"></svg:path>`,
})
export class PhCreditCardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCricketFillIcon],svg[ph-cricket-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.31 81.37l-52.68-52.68a16 16 0 0 0-22.63 0L60.69 136a16 16 0 0 0 0 22.63l20.68 20.68l-47 47a8 8 0 0 0 11.32 11.32l47-47l20.68 20.68a16 16 0 0 0 22.63 0L243.31 104a16 16 0 0 0 0-22.63M124.69 200L104 179.31l29.66-29.65a8 8 0 0 0-11.32-11.32L92.69 168L72 147.31L107.31 112H160v52.69ZM32 60a28 28 0 1 1 28 28a28 28 0 0 1-28-28"></svg:path>`,
})
export class PhCricketFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCropFillIcon],svg[ph-crop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-88 48h48a8 8 0 0 1 8 8v48a8 8 0 0 1-16 0V96h-40a8 8 0 0 1 0-16m72 96h-16v16a8 8 0 0 1-16 0v-16H88a8 8 0 0 1-8-8V96H64a8 8 0 0 1 0-16h16V64a8 8 0 0 1 16 0v96h96a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhCropFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrossFillIcon],svg[ph-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 92v24a16 16 0 0 1-16 16h-44v92a16 16 0 0 1-16 16h-24a16 16 0 0 1-16-16v-92H56a16 16 0 0 1-16-16V92a16 16 0 0 1 16-16h44V32a16 16 0 0 1 16-16h24a16 16 0 0 1 16 16v44h44a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhCrossFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairFillIcon],svg[ph-crosshair-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 120h-8.34A96.14 96.14 0 0 0 136 32.34V24a8 8 0 0 0-16 0v8.34A96.14 96.14 0 0 0 32.34 120H24a8 8 0 0 0 0 16h8.34A96.14 96.14 0 0 0 120 223.66V232a8 8 0 0 0 16 0v-8.34A96.14 96.14 0 0 0 223.66 136H232a8 8 0 0 0 0-16m-32 16h7.6a80.15 80.15 0 0 1-71.6 71.6V200a8 8 0 0 0-16 0v7.6A80.15 80.15 0 0 1 48.4 136H56a8 8 0 0 0 0-16h-7.6A80.15 80.15 0 0 1 120 48.4V56a8 8 0 0 0 16 0v-7.6a80.15 80.15 0 0 1 71.6 71.6H200a8 8 0 0 0 0 16m-32-8a40 40 0 1 1-40-40a40 40 0 0 1 40 40"></svg:path>`,
})
export class PhCrosshairFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairSimpleFillIcon],svg[ph-crosshair-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 136h23.54A72.11 72.11 0 0 1 136 199.54V176a8 8 0 0 0-16 0v23.54A72.11 72.11 0 0 1 56.46 136H80a8 8 0 0 0 0-16H56.46A72.11 72.11 0 0 1 120 56.46V80a8 8 0 0 0 16 0V56.46A72.11 72.11 0 0 1 199.54 120H176a8 8 0 0 0 0 16m56-8A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></svg:path>`,
})
export class PhCrosshairSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownCrossFillIcon],svg[ph-crown-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 83.22a54 54 0 0 0-8-10.06V40h-16a8 8 0 0 1 0-16h16V8a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v33.16a54 54 0 0 0-8 10.06M180 56c-17.74 0-33.21 6.48-44 17.16V176a8 8 0 0 1-16 0V73.16C109.21 62.48 93.74 56 76 56a60.07 60.07 0 0 0-60 60c0 29.86 14.54 48.85 26.73 59.52A90.5 90.5 0 0 0 64 189.34V208a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-18.66a90.5 90.5 0 0 0 21.27-13.82C225.46 164.85 240 145.86 240 116a60.07 60.07 0 0 0-60-60"></svg:path>`,
})
export class PhCrownCrossFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownFillIcon],svg[ph-crown-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 80a28 28 0 1 0-51.12 15.77l-26.79 33L146 73.4a28 28 0 1 0-36.06 0l-24.03 55.34l-26.79-33a28 28 0 1 0-26.6 12L47 194.63A16 16 0 0 0 62.78 208h130.44A16 16 0 0 0 209 194.63l14.47-86.85A28 28 0 0 0 248 80M128 40a12 12 0 1 1-12 12a12 12 0 0 1 12-12M24 80a12 12 0 1 1 12 12a12 12 0 0 1-12-12m196 12a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhCrownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownSimpleFillIcon],svg[ph-crown-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.75 90.81c0 .11 0 .21-.07.32L217 195a16 16 0 0 1-15.72 13H54.71A16 16 0 0 1 39 195L16.32 91.13c0-.11-.05-.21-.07-.32A16 16 0 0 1 44 77.39l33.67 36.29l35.8-80.29a1 1 0 0 0 0-.1a16 16 0 0 1 29.06 0a1 1 0 0 0 0 .1l35.8 80.29L212 77.39a16 16 0 0 1 27.71 13.42Z"></svg:path>`,
})
export class PhCrownSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeFillIcon],svg[ph-cube-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.68 66.15l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 120L47.65 76L128 32l80.35 44Zm8 99.64v-85.81l80-43.78v85.76Z"></svg:path>`,
})
export class PhCubeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeFocusFillIcon],svg[ph-cube-focus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48v40a8 8 0 0 1-16 0V56h-32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M72 200H40v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16m152-40a8 8 0 0 0-8 8v32h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M32 96a8 8 0 0 0 8-8V56h32a8 8 0 0 0 0-16H32a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8m145.92-12.69L132 57.05a8 8 0 0 0-7.94 0L78.08 83.31a4 4 0 0 0 0 7L128 118.79l49.92-28.53a4 4 0 0 0 0-6.95M64 107.53V160a8 8 0 0 0 4 7l46 26.27a4 4 0 0 0 6-3.47v-57.16l-50-28.58a4 4 0 0 0-6 3.47M192 160v-52.47a4 4 0 0 0-6-3.47l-50 28.58v57.11a4 4 0 0 0 6 3.47L188 167a8 8 0 0 0 4-7"></svg:path>`,
})
export class PhCubeFocusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeTransparentFillIcon],svg[ph-cube-transparent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 152v-48h48v48ZM32 53v95a4 4 0 0 0 4 4h52V99.31L38.83 50.14A4 4 0 0 0 32 53m188 51h-52v52.69l49.17 49.17A4 4 0 0 0 224 203v-95a4 4 0 0 0-4-4m-68-68a4 4 0 0 0-4-4H53a4 4 0 0 0-2.83 6.83L99.31 88H152Zm60.49 45.17l-37.66-37.66a4 4 0 0 0-6.83 2.83V88h41.66a4 4 0 0 0 2.83-6.83M156.69 168H104v52a4 4 0 0 0 4 4h95a4 4 0 0 0 2.83-6.83Zm-113.18 6.83l37.66 37.66a4 4 0 0 0 6.83-2.83V168H46.34a4 4 0 0 0-2.83 6.83"></svg:path>`,
})
export class PhCubeTransparentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyBtcFillIcon],svg[ph-currency-btc-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 152a16 16 0 0 1-16 16h-48v-32h48a16 16 0 0 1 16 16m64-24A104 104 0 1 1 136 24a104.11 104.11 0 0 1 104 104m-48 24a32 32 0 0 0-15.51-27.42A32 32 0 0 0 160 73v-9a8 8 0 0 0-16 0v8h-16v-8a8 8 0 0 0-16 0v8H96a8 8 0 0 0 0 16v80a8 8 0 0 0 0 16h16v8a8 8 0 0 0 16 0v-8h16v8a8 8 0 0 0 16 0v-8a32 32 0 0 0 32-32m-24-48a16 16 0 0 0-16-16h-40v32h40a16 16 0 0 0 16-16"></svg:path>`,
})
export class PhCurrencyBtcFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCircleDollarFillIcon],svg[ph-currency-circle-dollar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m12 152h-4v8a8 8 0 0 1-16 0v-8h-16a8 8 0 0 1 0-16h36a12 12 0 0 0 0-24h-24a28 28 0 0 1 0-56h4v-8a8 8 0 0 1 16 0v8h16a8 8 0 0 1 0 16h-36a12 12 0 0 0 0 24h24a28 28 0 0 1 0 56"></svg:path>`,
})
export class PhCurrencyCircleDollarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCnyFillIcon],svg[ph-currency-cny-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 16a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 16M88 72h80a8 8 0 0 1 0 16H88a8 8 0 0 1 0-16m104 88a8 8 0 0 1-8 8h-24a24 24 0 0 1-24-24v-24h-16a48.05 48.05 0 0 1-48 48a8 8 0 0 1 0-16a32 32 0 0 0 32-32H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16h-24v24a8 8 0 0 0 8 8h16v-8a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhCurrencyCnyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarFillIcon],svg[ph-currency-dollar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 152a16 16 0 0 1-16 16h-8v-32h8a16 16 0 0 1 16 16m72-24A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-56 24a32 32 0 0 0-32-32h-8V88h4a16 16 0 0 1 16 16a8 8 0 0 0 16 0a32 32 0 0 0-32-32h-4v-8a8 8 0 0 0-16 0v8h-4a32 32 0 0 0 0 64h4v32h-8a16 16 0 0 1-16-16a8 8 0 0 0-16 0a32 32 0 0 0 32 32h8v8a8 8 0 0 0 16 0v-8h8a32 32 0 0 0 32-32m-76-48a16 16 0 0 0 16 16h4V88h-4a16 16 0 0 0-16 16"></svg:path>`,
})
export class PhCurrencyDollarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarSimpleFillIcon],svg[ph-currency-dollar-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m16 160h-8v8a8 8 0 0 1-16 0v-8h-8a32 32 0 0 1-32-32a8 8 0 0 1 16 0a16 16 0 0 0 16 16h32a16 16 0 0 0 0-32h-28a32 32 0 0 1 0-64h4v-8a8 8 0 0 1 16 0v8h4a32 32 0 0 1 32 32a8 8 0 0 1-16 0a16 16 0 0 0-16-16h-24a16 16 0 0 0 0 32h28a32 32 0 0 1 0 64"></svg:path>`,
})
export class PhCurrencyDollarSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEthFillIcon],svg[ph-currency-eth-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.29 123.06l-88-112a8 8 0 0 0-12.58 0l-88 112a8 8 0 0 0 0 9.88l88 112a8 8 0 0 0 12.58 0l88-112a8 8 0 0 0 0-9.88M136 155.58V39.13l67.42 85.8Zm-16 0l-67.42-30.65L120 39.13Zm0 17.57v43.72l-53.43-68Z"></svg:path>`,
})
export class PhCurrencyEthFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEurFillIcon],svg[ph-currency-eur-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 80a8 8 0 0 1 0 16H88v16h24a8 8 0 0 1 0 16H88.81a40 40 0 0 0 65.86 21.82a8 8 0 1 1 10.66 11.92A56 56 0 0 1 72.58 152H64a8 8 0 0 1 0-16h8v-16h-8a8 8 0 0 1 0-16h8.58a56 56 0 0 1 92.75-33.74a8 8 0 1 1-10.66 11.92A40 40 0 0 0 88.81 104Z"></svg:path>`,
})
export class PhCurrencyEurFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyGbpFillIcon],svg[ph-currency-gbp-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 160H88a8 8 0 0 1 0-16a16 16 0 0 0 16-16v-16H88a8 8 0 0 1 0-16h16V96a40 40 0 0 1 60-34.64a8 8 0 0 1-8 13.85A24 24 0 0 0 120 96v24h16a8 8 0 0 1 0 16h-16v16a31.7 31.7 0 0 1-4.31 16H168a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhCurrencyGbpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyInrFillIcon],svg[ph-currency-inr-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m38.32 72H176a8 8 0 0 1 0 16h-8.19A44.06 44.06 0 0 1 124 152h-12.68l53.59 41.69a8 8 0 1 1-9.82 12.62l-72-56A8 8 0 0 1 88 136h36a28 28 0 0 0 27.71-24H88a8 8 0 0 1 0-16h61.29A28 28 0 0 0 124 80H88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16h-18.08a43.9 43.9 0 0 1 8.4 16"></svg:path>`,
})
export class PhCurrencyInrFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyJpyFillIcon],svg[ph-currency-jpy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m54.4 52.8L144 128h16a8 8 0 0 1 0 16h-24v16h24a8 8 0 0 1 0 16h-24v16a8 8 0 0 1-16 0v-16H96a8 8 0 0 1 0-16h24v-16H96a8 8 0 0 1 0-16h16L73.6 76.8a8 8 0 1 1 12.8-9.6l41.6 55.47l41.6-55.47a8 8 0 0 1 12.8 9.6"></svg:path>`,
})
export class PhCurrencyJpyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKrwFillIcon],svg[ph-currency-krw-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m72 120h-18.58l-14 35a8 8 0 0 1-14.86 0L128 117.54L103.43 179a8 8 0 0 1-14.86 0l-14-35H56a8 8 0 0 1 0-16h12.18L56.57 99a8 8 0 1 1 14.86-6L96 154.46L120.57 93a8 8 0 0 1 14.86 0L160 154.46L184.57 93a8 8 0 1 1 14.86 6l-11.61 29H200a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhCurrencyKrwFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKztFillIcon],svg[ph-currency-kzt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m48 96h-40v72a8 8 0 0 1-16 0v-72H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m0-32H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhCurrencyKztFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyNgnFillIcon],svg[ph-currency-ngn-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M143.55 136H160v23ZM96 120h16.45L96 97Zm136 8A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-32 0a8 8 0 0 0-8-8h-16V72a8 8 0 0 0-16 0v48h-27.88L94.51 67.35A8 8 0 0 0 80 72v48H64a8 8 0 0 0 0 16h16v48a8 8 0 0 0 16 0v-48h27.88l37.61 52.65A8 8 0 0 0 168 192a7.9 7.9 0 0 0 2.44-.38A8 8 0 0 0 176 184v-48h16a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhCurrencyNgnFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyRubFillIcon],svg[ph-currency-rub-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 104a24 24 0 0 1-24 24h-32V80h32a24 24 0 0 1 24 24m64 24A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-48-24a40 40 0 0 0-40-40h-40a8 8 0 0 0-8 8v56h-8a8 8 0 0 0 0 16h8v16h-8a8 8 0 0 0 0 16h8v16a8 8 0 0 0 16 0v-16h40a8 8 0 0 0 0-16h-40v-16h32a40 40 0 0 0 40-40"></svg:path>`,
})
export class PhCurrencyRubFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorClickFillIcon],svg[ph-cursor-click-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.49 190.83a12 12 0 0 1 0 17l-12.69 12.66a12 12 0 0 1-17 0l-56.56-56.57L115 214.09c0 .1-.08.21-.13.32a15.83 15.83 0 0 1-14.6 9.59h-.79a15.83 15.83 0 0 1-14.41-11L32.8 52.92A16 16 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-.32.13l-50.17 19.27ZM96 32a8 8 0 0 0 8-8v-8a8 8 0 0 0-16 0v8a8 8 0 0 0 8 8m-80 72h8a8 8 0 0 0 0-16h-8a8 8 0 0 0 0 16m108.42-64.84a8 8 0 0 0 10.74-3.58l8-16a8 8 0 0 0-14.31-7.16l-8 16a8 8 0 0 0 3.57 10.74m-96 81.69l-16 8a8 8 0 0 0 7.16 14.31l16-8a8 8 0 1 0-7.16-14.31"></svg:path>`,
})
export class PhCursorClickFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorFillIcon],svg[ph-cursor-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.49 207.8l-12.69 12.69a12 12 0 0 1-17 0l-56.57-56.57L115 214.08l-.13.33a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-.33.13l-50.16 19.27l56.57 56.56a12 12 0 0 1 0 16.97"></svg:path>`,
})
export class PhCursorFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorTextFillIcon],svg[ph-cursor-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-64 88a8 8 0 0 1 0 16h-8v24a16 16 0 0 0 16 16h8a8 8 0 0 1 0 16h-8a31.92 31.92 0 0 1-24-10.87A31.92 31.92 0 0 1 104 192h-8a8 8 0 0 1 0-16h8a16 16 0 0 0 16-16v-24h-8a8 8 0 0 1 0-16h8V96a16 16 0 0 0-16-16h-8a8 8 0 0 1 0-16h8a31.92 31.92 0 0 1 24 10.87A31.92 31.92 0 0 1 152 64h8a8 8 0 0 1 0 16h-8a16 16 0 0 0-16 16v24Z"></svg:path>`,
})
export class PhCursorTextFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCylinderFillIcon],svg[ph-cylinder-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 16c-40.37 0-72 19.33-72 44v136c0 24.67 31.63 44 72 44s72-19.33 72-44V60c0-24.67-31.63-44-72-44m0 208c-29.83 0-56-13.08-56-28V77.43C82.92 88.5 103.9 96 128 96s45.08-7.5 56-18.57V196c0 14.92-26.17 28-56 28"></svg:path>`,
})
export class PhCylinderFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDatabaseFillIcon],svg[ph-database-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24c-53.83 0-96 24.6-96 56v96c0 31.4 42.17 56 96 56s96-24.6 96-56V80c0-31.4-42.17-56-96-56m80 104c0 9.62-7.88 19.43-21.61 26.92C170.93 163.35 150.19 168 128 168s-42.93-4.65-58.39-13.08C55.88 147.43 48 137.62 48 128v-16.64c17.06 15 46.23 24.64 80 24.64s62.94-9.68 80-24.64Zm-21.61 74.92C170.93 211.35 150.19 216 128 216s-42.93-4.65-58.39-13.08C55.88 195.43 48 185.62 48 176v-16.64c17.06 15 46.23 24.64 80 24.64s62.94-9.68 80-24.64V176c0 9.62-7.88 19.43-21.61 26.92"></svg:path>`,
})
export class PhDatabaseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeskFillIcon],svg[ph-desk-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 64H8a8 8 0 0 0 0 16h8v112a8 8 0 0 0 16 0v-48h192v48a8 8 0 0 0 16 0V80h8a8 8 0 0 0 0-16M80 112H56a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m56 8a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm64-8h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhDeskFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopFillIcon],svg[ph-desktop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h72v16H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-16h72a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24m0 144H48a8 8 0 0 1-8-8v-16h176v16a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhDesktopFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopTowerFillIcon],svg[ph-desktop-tower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 76v112a4 4 0 0 1-4 4H96v16h15.73a8.18 8.18 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53H64.27a8.18 8.18 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h16v-16H32a24 24 0 0 1-24-24V96a24 24 0 0 1 24-24h84a4 4 0 0 1 4 4m128-28v160a16 16 0 0 1-16 16h-80a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16m-44.1 133.57a12 12 0 1 0-10.34 10.33a12 12 0 0 0 10.34-10.33m20.1-78.1a8.18 8.18 0 0 0-8.27-7.47h-47.46a8.18 8.18 0 0 0-8.25 7.47a8 8 0 0 0 8 8.53h48a8 8 0 0 0 7.98-8.53m0-32a8.18 8.18 0 0 0-8.27-7.47h-47.46a8.18 8.18 0 0 0-8.27 7.47a8 8 0 0 0 8 8.53h48a8 8 0 0 0 8-8.53"></svg:path>`,
})
export class PhDesktopTowerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDetectiveFillIcon],svg[ph-detective-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 120a8 8 0 0 1-8 8H8a8 8 0 0 1 0-16h27.92l47.5-65.41a16 16 0 0 1 25.31-.72l12.85 14.9l.2.23a7.95 7.95 0 0 0 12.44 0l.2-.23l12.85-14.9a16 16 0 0 1 25.31.72l47.5 65.41H248a8 8 0 0 1 8 8m-76 24a36 36 0 0 0-35.77 32h-32.46a36 36 0 1 0-1.83 16h36.12A36 36 0 1 0 180 144"></svg:path>`,
})
export class PhDetectiveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevToLogoFillIcon],svg[ph-dev-to-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 120v16a16 16 0 0 1-16 16v-48a16 16 0 0 1 16 16m168-48v112a16 16 0 0 1-16 16H24a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h208a16 16 0 0 1 16 16M96 120a32 32 0 0 0-32-32h-8a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h8a32 32 0 0 0 32-32Zm32 0v-16h16a8 8 0 0 0 0-16h-24a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h24a8 8 0 0 0 0-16h-16v-16h8a8 8 0 0 0 0-16Zm82.17-31.7a8 8 0 0 0-9.87 5.53L190 130.45l-10.3-36.62a8 8 0 0 0-15.4 4.34l18 64a8 8 0 0 0 15.4 0l18-64a8 8 0 0 0-5.53-9.87"></svg:path>`,
})
export class PhDevToLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileCameraFillIcon],svg[ph-device-mobile-camera-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24m-48 56a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDeviceMobileCameraFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileFillIcon],svg[ph-device-mobile-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24M80 32h96a8 8 0 0 1 8 8v8H72v-8a8 8 0 0 1 8-8m96 192H80a8 8 0 0 1-8-8v-8h112v8a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhDeviceMobileFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSlashFillIcon],svg[ph-device-mobile-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.38 221.92a8 8 0 0 1-11.3-.54l-2.26-2.48A24 24 0 0 1 176 240H80a24 24 0 0 1-24-24V60.69L42.08 45.38a8 8 0 1 1 11.84-10.76l160 176a8 8 0 0 1-.54 11.3m-27.3-65.71a8 8 0 0 0 13.92-5.38V40a24 24 0 0 0-24-24H76.7a8 8 0 0 0-5.92 13.38Z"></svg:path>`,
})
export class PhDeviceMobileSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSpeakerFillIcon],svg[ph-device-mobile-speaker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24m-16 48H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhDeviceMobileSpeakerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceRotateFillIcon],svg[ph-device-rotate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m205.66 221.66l-24 24A8 8 0 0 1 168 240v-16H80a24 24 0 0 1-24-24v-96a8 8 0 0 1 16 0v96a8 8 0 0 0 8 8h88v-16a8 8 0 0 1 13.66-5.66l24 24a8 8 0 0 1 0 11.32M80 72a8 8 0 0 0 8-8V48h88a8 8 0 0 1 8 8v96a8 8 0 0 0 16 0V56a24 24 0 0 0-24-24H88V16a8 8 0 0 0-13.66-5.66l-24 24a8 8 0 0 0 0 11.32l24 24A8 8 0 0 0 80 72"></svg:path>`,
})
export class PhDeviceRotateFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletCameraFillIcon],svg[ph-device-tablet-camera-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24m-64 56a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDeviceTabletCameraFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletFillIcon],svg[ph-device-tablet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24M64 40h128a8 8 0 0 1 8 8v8H56v-8a8 8 0 0 1 8-8m128 176H64a8 8 0 0 1-8-8v-8h144v8a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhDeviceTabletFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletSpeakerFillIcon],svg[ph-device-tablet-speaker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24m-32 48H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhDeviceTabletSpeakerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevicesFillIcon],svg[ph-devices-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 72h-16v-8a24 24 0 0 0-24-24H40a24 24 0 0 0-24 24v96a24 24 0 0 0 24 24h112v8a24 24 0 0 0 24 24h48a24 24 0 0 0 24-24V96a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Zm-96 16a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m80-96a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDevicesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondFillIcon],svg[ph-diamond-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 128a15.85 15.85 0 0 1-4.67 11.28l-96.05 96.06a16 16 0 0 1-22.56 0l-96-96.06a16 16 0 0 1 0-22.56l96.05-96.06a16 16 0 0 1 22.56 0l96.05 96.06A15.85 15.85 0 0 1 240 128"></svg:path>`,
})
export class PhDiamondFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondsFourFillIcon],svg[ph-diamonds-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M82.34 69.66a8 8 0 0 1 0-11.32l40-40a8 8 0 0 1 11.32 0l40 40a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32 0Zm51.32 76.68a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32Zm104-24l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32m-128 0l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhDiamondsFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFiveFillIcon],svg[ph-dice-five-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32M92 176a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-72a12 12 0 1 1 12-12a12 12 0 0 1-12 12m36 36a12 12 0 1 1 12-12a12 12 0 0 1-12 12m36 36a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-72a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDiceFiveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFourFillIcon],svg[ph-dice-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m-92 136a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-56a12 12 0 1 1 12-12a12 12 0 0 1-12 12m56 56a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-56a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDiceFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceOneFillIcon],svg[ph-dice-one-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m-64 108a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDiceOneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceSixFillIcon],svg[ph-dice-six-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32M92 184a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-44a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-44a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-44a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-44a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDiceSixFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceThreeFillIcon],svg[ph-dice-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32M92 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m36 36a12 12 0 1 1 12-12a12 12 0 0 1-12 12m36 36a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDiceThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceTwoFillIcon],svg[ph-dice-two-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m-84 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12m40 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDiceTwoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscFillIcon],svg[ph-disc-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.3 43.31a8 8 0 0 0-.65-.5c-.23-.16-.47-.31-.71-.45a103.85 103.85 0 1 0 1.36 1ZM128 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24m88-24c0 2.47-.11 4.92-.31 7.34L168 126.92a39.83 39.83 0 0 0-11-26.41l27.78-39.67A87.8 87.8 0 0 1 216 128"></svg:path>`,
})
export class PhDiscFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscoBallFillIcon],svg[ph-disco-ball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 64.37V16a8 8 0 0 0-16 0v48.37a88 88 0 1 0 16 0M183.54 144h-31.77c-1.51-28.36-10.79-48.36-19.44-61.06A72.16 72.16 0 0 1 183.54 144m-47.78 16c-2 33.52-16.13 52.95-23.76 61.08c-7.64-8.15-21.77-27.57-23.76-61.08ZM91.67 82.94C83 95.64 73.74 115.64 72.23 144H40.46a72.16 72.16 0 0 1 51.21-61.06M40.46 160h31.77c1.51 28.36 10.79 48.36 19.44 61.06A72.16 72.16 0 0 1 40.46 160M256 88a8 8 0 0 1-8 8h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8M152 40a8 8 0 0 1 8-8h16V16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V48h-16a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhDiscoBallFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscordLogoFillIcon],svg[ph-discord-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.51 174.39L218 58a16.08 16.08 0 0 0-13-11.88l-36.06-5.92a16.22 16.22 0 0 0-18.26 11.88l-.21.85a4 4 0 0 0 3.27 4.93a155.6 155.6 0 0 1 24.41 5.62a8.2 8.2 0 0 1 5.62 9.7a8 8 0 0 1-10.19 5.64a155.4 155.4 0 0 0-90.8-.1a8.22 8.22 0 0 1-10.28-4.81a8 8 0 0 1 5.08-10.33a157 157 0 0 1 24.72-5.72a4 4 0 0 0 3.27-4.93l-.21-.85a16.21 16.21 0 0 0-18.28-11.87L51 46.13A16.08 16.08 0 0 0 38 58L8.49 174.39a15.94 15.94 0 0 0 9.06 18.51l67 29.71a16.17 16.17 0 0 0 21.71-9.1l3.49-9.45a4 4 0 0 0-3.27-5.35a158 158 0 0 1-28.63-6.2a8.2 8.2 0 0 1-5.61-9.67a8 8 0 0 1 10.2-5.66a155.6 155.6 0 0 0 91.12 0a8 8 0 0 1 10.19 5.65a8.19 8.19 0 0 1-5.61 9.68a158 158 0 0 1-28.62 6.2a4 4 0 0 0-3.27 5.35l3.49 9.45a16.18 16.18 0 0 0 21.71 9.1l67-29.71a15.94 15.94 0 0 0 9.06-18.51M92 152a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDiscordLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDivideFillIcon],svg[ph-divide-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 32a16 16 0 1 1-16 16a16 16 0 0 1 16-16m0 128a16 16 0 1 1 16-16a16 16 0 0 1-16 16m56-56H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhDivideFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
