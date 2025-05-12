import { Component, input } from '@angular/core'

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
  selector: 'svg[phArrowFatLinesLeftLightIcon],svg[ph-arrow-fat-lines-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 74h-26V32a6 6 0 0 0-10.24-4.24l-96 96a6 6 0 0 0 0 8.48l96 96A6 6 0 0 0 126 224v-42h26a6 6 0 0 0 6-6V80a6 6 0 0 0-6-6m-6 96h-26a6 6 0 0 0-6 6v33.51L32.49 128L114 46.49V80a6 6 0 0 0 6 6h26Zm76-90v96a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0m-32 0v96a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhArrowFatLinesLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesRightLightIcon],svg[ph-arrow-fat-lines-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.24 123.76l-96-96A6 6 0 0 0 130 32v42h-26a6 6 0 0 0-6 6v96a6 6 0 0 0 6 6h26v42a6 6 0 0 0 10.24 4.24l96-96a6 6 0 0 0 0-8.48M142 209.51V176a6 6 0 0 0-6-6h-26V86h26a6 6 0 0 0 6-6V46.49L223.51 128ZM46 80v96a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0m32 0v96a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhArrowFatLinesRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesUpLightIcon],svg[ph-arrow-fat-lines-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 115.76l-96-96a6 6 0 0 0-8.48 0l-96 96A6 6 0 0 0 32 126h42v26a6 6 0 0 0 6 6h96a6 6 0 0 0 6-6v-26h42a6 6 0 0 0 4.24-10.24M176 114a6 6 0 0 0-6 6v26H86v-26a6 6 0 0 0-6-6H46.49L128 32.49L209.51 114Zm6 102a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6m0-32a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhArrowFatLinesUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatRightLightIcon],svg[ph-arrow-fat-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.24 123.76l-96-96A6 6 0 0 0 130 32v42H48a14 14 0 0 0-14 14v80a14 14 0 0 0 14 14h82v42a6 6 0 0 0 10.24 4.24l96-96a6 6 0 0 0 0-8.48M142 209.51V176a6 6 0 0 0-6-6H48a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h88a6 6 0 0 0 6-6V46.49L223.51 128Z"></svg:path>`,
})
export class PhArrowFatRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatUpLightIcon],svg[ph-arrow-fat-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 115.76l-96-96a6 6 0 0 0-8.48 0l-96 96A6 6 0 0 0 32 126h42v82a14 14 0 0 0 14 14h80a14 14 0 0 0 14-14v-82h42a6 6 0 0 0 4.24-10.24M176 114a6 6 0 0 0-6 6v88a2 2 0 0 1-2 2H88a2 2 0 0 1-2-2v-88a6 6 0 0 0-6-6H46.49L128 32.49L209.51 114Z"></svg:path>`,
})
export class PhArrowFatUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLeftLightIcon],svg[ph-arrow-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H54.49l61.75 61.76a6 6 0 1 1-8.48 8.48l-72-72a6 6 0 0 1 0-8.48l72-72a6 6 0 0 1 8.48 8.48L54.49 122H216a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhArrowLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownLeftLightIcon],svg[ph-arrow-line-down-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 48a6 6 0 0 1-6 6H48a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6m-50.24 43.76L78 193.52V112a6 6 0 0 0-12 0v96a6 6 0 0 0 6 6h96a6 6 0 0 0 0-12H86.48l101.76-101.76a6 6 0 0 0-8.48-8.48"></svg:path>`,
})
export class PhArrowLineDownLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownLightIcon],svg[ph-arrow-line-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51.76 116.24a6 6 0 0 1 8.48-8.48L122 169.51V32a6 6 0 0 1 12 0v137.51l61.76-61.75a6 6 0 0 1 8.48 8.48l-72 72a6 6 0 0 1-8.48 0ZM216 210H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhArrowLineDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownRightLightIcon],svg[ph-arrow-line-down-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 40a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6m-30 58a6 6 0 0 0-6 6v81.52L84.24 83.76a6 6 0 0 0-8.48 8.48L177.52 194H96a6 6 0 0 0 0 12h96a6 6 0 0 0 6-6v-96a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhArrowLineDownRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineLeftLightIcon],svg[ph-arrow-line-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 128a6 6 0 0 1-6 6H86.49l61.75 61.76a6 6 0 1 1-8.48 8.48l-72-72a6 6 0 0 1 0-8.48l72-72a6 6 0 0 1 8.48 8.48L86.49 122H224a6 6 0 0 1 6 6M40 34a6 6 0 0 0-6 6v176a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhArrowLineLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineRightLightIcon],svg[ph-arrow-line-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.24 123.76a6 6 0 0 1 0 8.48l-72 72a6 6 0 0 1-8.48-8.48L169.51 134H32a6 6 0 0 1 0-12h137.51l-61.75-61.76a6 6 0 0 1 8.48-8.48ZM216 34a6 6 0 0 0-6 6v176a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhArrowLineRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpLeftLightIcon],svg[ph-arrow-line-up-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 208a6 6 0 0 1-6 6H48a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M72 150a6 6 0 0 0 6-6V62.49l101.76 101.75a6 6 0 0 0 8.48-8.48L86.49 54H168a6 6 0 0 0 0-12H72a6 6 0 0 0-6 6v96a6 6 0 0 0 6 6"></svg:path>`,
})
export class PhArrowLineUpLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpLightIcon],svg[ph-arrow-line-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.24 139.76a6 6 0 1 1-8.48 8.48L134 86.49V224a6 6 0 0 1-12 0V86.49l-61.76 61.75a6 6 0 0 1-8.48-8.48l72-72a6 6 0 0 1 8.48 0ZM216 34H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhArrowLineUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpRightLightIcon],svg[ph-arrow-line-up-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 216a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M80 174a6 6 0 0 0 4.24-1.76L186 70.49V152a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6H96a6 6 0 0 0 0 12h81.51L75.76 163.76A6 6 0 0 0 80 174"></svg:path>`,
})
export class PhArrowLineUpRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowRightLightIcon],svg[ph-arrow-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhArrowRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownLeftLightIcon],svg[ph-arrow-square-down-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM164.24 91.76a6 6 0 0 1 0 8.48L110.48 154H144a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6v-48a6 6 0 0 1 12 0v33.52l53.76-53.76a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhArrowSquareDownLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownLightIcon],svg[ph-arrow-square-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-45.76-76.24a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L122 153.51V88a6 6 0 0 1 12 0v65.51l21.76-21.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhArrowSquareDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownRightLightIcon],svg[ph-arrow-square-down-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-44-96v48a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h33.52l-53.76-53.76a6 6 0 0 1 8.48-8.48L154 145.52V112a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhArrowSquareDownRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareInLightIcon],svg[ph-arrow-square-in-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126 136v64a6 6 0 0 1-12 0v-49.51l-69.76 69.75a6 6 0 0 1-8.48-8.48L105.51 142H56a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m82-102H80a14 14 0 0 0-14 14v48a6 6 0 0 0 12 0V48a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v128a2 2 0 0 1-2 2h-48a6 6 0 0 0 0 12h48a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14"></svg:path>`,
})
export class PhArrowSquareInLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareLeftLightIcon],svg[ph-arrow-square-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-36-80a6 6 0 0 1-6 6h-65.51l21.75 21.76a6 6 0 1 1-8.48 8.48l-32-32a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 8.48L102.49 122H168a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhArrowSquareLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareOutLightIcon],svg[ph-arrow-square-out-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 104a6 6 0 0 1-12 0V54.49l-69.75 69.75a6 6 0 0 1-8.48-8.48L201.51 46H152a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6Zm-38 26a6 6 0 0 0-6 6v72a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h72a6 6 0 0 0 0-12H48a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14v-72a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhArrowSquareOutLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareRightLightIcon],svg[ph-arrow-square-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-37.76-84.24a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48L153.51 134H88a6 6 0 0 1 0-12h65.51l-21.75-21.76a6 6 0 0 1 8.48-8.48Z"></svg:path>`,
})
export class PhArrowSquareRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareUpLeftLightIcon],svg[ph-arrow-square-up-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-45.76-52.24a6 6 0 1 1-8.48 8.48L102 110.48V144a6 6 0 0 1-12 0V96a6 6 0 0 1 6-6h48a6 6 0 0 1 0 12h-33.52Z"></svg:path>`,
})
export class PhArrowSquareUpLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareUpLightIcon],svg[ph-arrow-square-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-45.76-92.24a6 6 0 1 1-8.48 8.48L134 102.49V168a6 6 0 0 1-12 0v-65.51l-21.76 21.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0Z"></svg:path>`,
})
export class PhArrowSquareUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareUpRightLightIcon],svg[ph-arrow-square-up-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM166 96v48a6 6 0 0 1-12 0v-33.52l-53.76 53.76a6 6 0 0 1-8.48-8.48L145.52 102H112a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhArrowSquareUpRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUDownLeftLightIcon],svg[ph-arrow-u-down-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 112a62.07 62.07 0 0 1-62 62H46.49l37.75 37.76a6 6 0 1 1-8.48 8.48l-48-48a6 6 0 0 1 0-8.48l48-48a6 6 0 0 1 8.48 8.48L46.49 162H168a50 50 0 0 0 0-100H80a6 6 0 0 1 0-12h88a62.07 62.07 0 0 1 62 62"></svg:path>`,
})
export class PhArrowUDownLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUDownRightLightIcon],svg[ph-arrow-u-down-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 172.24l-48 48a6 6 0 0 1-8.48-8.48L209.51 174H88a62 62 0 0 1 0-124h88a6 6 0 0 1 0 12H88a50 50 0 0 0 0 100h121.51l-37.75-37.76a6 6 0 0 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhArrowUDownRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowULeftDownLightIcon],svg[ph-arrow-u-left-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 88v88a6 6 0 0 1-12 0V88a50 50 0 0 0-100 0v121.51l37.76-37.75a6 6 0 0 1 8.48 8.48l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L82 209.51V88a62 62 0 0 1 124 0"></svg:path>`,
})
export class PhArrowULeftDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowULeftUpLightIcon],svg[ph-arrow-u-left-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 80v88a62 62 0 0 1-124 0V46.49L44.24 84.24a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 1 1-8.48 8.48L94 46.49V168a50 50 0 0 0 100 0V80a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhArrowULeftUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowURightDownLightIcon],svg[ph-arrow-u-right-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.24 180.24l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L162 209.51V88a50 50 0 0 0-100 0v88a6 6 0 0 1-12 0V88a62 62 0 0 1 124 0v121.51l37.76-37.75a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhArrowURightDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowURightUpLightIcon],svg[ph-arrow-u-right-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.24 84.24a6 6 0 0 1-8.48 0L174 46.49V168a62 62 0 0 1-124 0V80a6 6 0 0 1 12 0v88a50 50 0 0 0 100 0V46.49l-37.76 37.75a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhArrowURightUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUUpLeftLightIcon],svg[ph-arrow-u-up-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 144a62.07 62.07 0 0 1-62 62H80a6 6 0 0 1 0-12h88a50 50 0 0 0 0-100H46.49l37.75 37.76a6 6 0 1 1-8.48 8.48l-48-48a6 6 0 0 1 0-8.48l48-48a6 6 0 0 1 8.48 8.48L46.49 82H168a62.07 62.07 0 0 1 62 62"></svg:path>`,
})
export class PhArrowUUpLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUUpRightLightIcon],svg[ph-arrow-u-up-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171.76 131.76L209.51 94H88a50 50 0 0 0 0 100h88a6 6 0 0 1 0 12H88a62 62 0 0 1 0-124h121.51l-37.75-37.76a6 6 0 0 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48l-48 48a6 6 0 0 1-8.48-8.48"></svg:path>`,
})
export class PhArrowUUpRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUpLeftLightIcon],svg[ph-arrow-up-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.24 196.24a6 6 0 0 1-8.48 0L70 78.48V168a6 6 0 0 1-12 0V64a6 6 0 0 1 6-6h104a6 6 0 0 1 0 12H78.48l117.76 117.76a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhArrowUpLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUpLightIcon],svg[ph-arrow-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.24 116.24a6 6 0 0 1-8.48 0L134 54.49V216a6 6 0 0 1-12 0V54.49l-61.76 61.75a6 6 0 0 1-8.48-8.48l72-72a6 6 0 0 1 8.48 0l72 72a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhArrowUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUpRightLightIcon],svg[ph-arrow-up-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 64v104a6 6 0 0 1-12 0V78.48L68.24 196.24a6 6 0 0 1-8.48-8.48L177.52 70H88a6 6 0 0 1 0-12h104a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhArrowUpRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsClockwiseLightIcon],svg[ph-arrows-clockwise-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 48v48a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h33.52l-18.05-18a81.5 81.5 0 0 0-57.53-24h-.46a81.5 81.5 0 0 0-57.29 23.28a6 6 0 1 1-8.38-8.58a93.38 93.38 0 0 1 65.67-26.76h.52a93.45 93.45 0 0 1 66 27.53l18 18V48a6 6 0 0 1 12 0m-34.19 136.72a81.5 81.5 0 0 1-57.29 23.34h-.46a81.5 81.5 0 0 1-57.53-24L54.48 166H88a6 6 0 0 0 0-12H40a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-33.52l18 18.05a93.45 93.45 0 0 0 66 27.53h.52a93.38 93.38 0 0 0 65.67-26.76a6 6 0 1 0-8.38-8.58"></svg:path>`,
})
export class PhArrowsClockwiseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsCounterClockwiseLightIcon],svg[ph-arrows-counter-clockwise-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 102H40a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v33.52l18-18a93.45 93.45 0 0 1 66-27.53h.52a93.4 93.4 0 0 1 65.67 26.71a6 6 0 0 1-8.38 8.58A82 82 0 0 0 72.53 72L54.48 90H88a6 6 0 0 1 0 12m128 52h-48a6 6 0 0 0 0 12h33.52l-18.05 18a81.5 81.5 0 0 1-57.53 24h-.46a81.5 81.5 0 0 1-57.29-23.34a6 6 0 0 0-8.38 8.58A93.4 93.4 0 0 0 125.48 220h.52a93.45 93.45 0 0 0 66-27.53l18-18.05V208a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhArrowsCounterClockwiseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsDownUpLightIcon],svg[ph-arrows-down-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116.24 171.76a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L74 193.51V48a6 6 0 0 1 12 0v145.51l21.76-21.75a6 6 0 0 1 8.48 0m96-96l-32-32a6 6 0 0 0-8.48 0l-32 32a6 6 0 0 0 8.48 8.48L170 62.49V208a6 6 0 0 0 12 0V62.49l21.76 21.75a6 6 0 0 0 8.48-8.48"></svg:path>`,
})
export class PhArrowsDownUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsHorizontalLightIcon],svg[ph-arrows-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.24 132.24l-32 32a6 6 0 0 1-8.48-8.48L217.51 134h-179l21.75 21.76a6 6 0 1 1-8.48 8.48l-32-32a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 8.48L38.49 122h179l-21.75-21.76a6 6 0 0 1 8.48-8.48l32 32a6 6 0 0 1 .02 8.48"></svg:path>`,
})
export class PhArrowsHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInCardinalLightIcon],svg[ph-arrows-in-cardinal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M91.76 68.24a6 6 0 0 1 8.48-8.48L122 81.51V24a6 6 0 0 1 12 0v57.51l21.76-21.75a6 6 0 0 1 8.48 8.48l-32 32a6 6 0 0 1-8.48 0Zm40.48 87.52a6 6 0 0 0-8.48 0l-32 32a6 6 0 0 0 8.48 8.48L122 174.49V232a6 6 0 0 0 12 0v-57.51l21.76 21.75a6 6 0 0 0 8.48-8.48ZM232 122h-57.51l21.75-21.76a6 6 0 0 0-8.48-8.48l-32 32a6 6 0 0 0 0 8.48l32 32a6 6 0 0 0 8.48-8.48L174.49 134H232a6 6 0 0 0 0-12m-131.76 1.76l-32-32a6 6 0 0 0-8.48 8.48L81.51 122H24a6 6 0 0 0 0 12h57.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48"></svg:path>`,
})
export class PhArrowsInCardinalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInLightIcon],svg[ph-arrows-in-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M146 104V64a6 6 0 0 1 12 0v25.51l45.76-45.75a6 6 0 0 1 8.48 8.48L166.48 98H192a6 6 0 0 1 0 12h-40a6 6 0 0 1-6-6m-42 42H64a6 6 0 0 0 0 12h25.52l-45.76 45.76a6 6 0 1 0 8.48 8.48L98 166.48V192a6 6 0 0 0 12 0v-40a6 6 0 0 0-6-6m62.48 12H192a6 6 0 0 0 0-12h-40a6 6 0 0 0-6 6v40a6 6 0 0 0 12 0v-25.52l45.76 45.76a6 6 0 0 0 8.48-8.48ZM104 58a6 6 0 0 0-6 6v25.51L52.24 43.76a6 6 0 0 0-8.48 8.48L89.52 98H64a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6V64a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhArrowsInLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInLineHorizontalLightIcon],svg[ph-arrows-in-line-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 40v176a6 6 0 0 1-12 0V40a6 6 0 0 1 12 0M68.24 91.76a6 6 0 0 0-8.48 8.48L81.51 122H16a6 6 0 0 0 0 12h65.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48ZM240 122h-65.51l21.75-21.76a6 6 0 0 0-8.48-8.48l-32 32a6 6 0 0 0 0 8.48l32 32a6 6 0 0 0 8.48-8.48L174.49 134H240a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhArrowsInLineHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInLineVerticalLightIcon],svg[ph-arrows-in-line-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6m-98.24-27.76a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0-8.48-8.48L134 81.51V16a6 6 0 0 0-12 0v65.51l-21.76-21.75a6 6 0 0 0-8.48 8.48Zm8.48 55.52a6 6 0 0 0-8.48 0l-32 32a6 6 0 0 0 8.48 8.48L122 174.49V240a6 6 0 0 0 12 0v-65.51l21.76 21.75a6 6 0 0 0 8.48-8.48Z"></svg:path>`,
})
export class PhArrowsInLineVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInSimpleLightIcon],svg[ph-arrows-in-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.24 52.24L158.48 106H192a6 6 0 0 1 0 12h-48a6 6 0 0 1-6-6V64a6 6 0 0 1 12 0v33.52l53.76-53.76a6 6 0 0 1 8.48 8.48M112 138H64a6 6 0 0 0 0 12h33.52l-53.76 53.76a6 6 0 1 0 8.48 8.48L106 158.48V192a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhArrowsInSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsLeftRightLightIcon],svg[ph-arrows-left-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.24 171.76a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48L193.51 182H48a6 6 0 0 1 0-12h145.51l-21.75-21.76a6 6 0 0 1 8.48-8.48ZM75.76 116.24a6 6 0 0 0 8.48-8.48L62.49 86H208a6 6 0 0 0 0-12H62.49l21.75-21.76a6 6 0 0 0-8.48-8.48l-32 32a6 6 0 0 0 0 8.48Z"></svg:path>`,
})
export class PhArrowsLeftRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsMergeLightIcon],svg[ph-arrows-merge-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M190 40v64a6 6 0 0 1-1.76 4.24L134 162.49v55l21.76-21.75a6 6 0 0 1 8.48 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L122 217.51v-55l-54.24-54.27A6 6 0 0 1 66 104V40a6 6 0 0 1 12 0v61.51l50 50l50-50V40a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhArrowsMergeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutCardinalLightIcon],svg[ph-arrows-out-cardinal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M91.76 60.24a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48L134 38.49V96a6 6 0 0 1-12 0V38.49l-21.76 21.75a6 6 0 0 1-8.48 0m64 135.52L134 217.51V160a6 6 0 0 0-12 0v57.51l-21.76-21.75a6 6 0 0 0-8.48 8.48l32 32a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0-8.48-8.48m80.48-72l-32-32a6 6 0 0 0-8.48 8.48L217.51 122H160a6 6 0 0 0 0 12h57.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48M38.49 134H96a6 6 0 0 0 0-12H38.49l21.75-21.76a6 6 0 0 0-8.48-8.48l-32 32a6 6 0 0 0 0 8.48l32 32a6 6 0 0 0 8.48-8.48Z"></svg:path>`,
})
export class PhArrowsOutCardinalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutLightIcon],svg[ph-arrows-out-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 48v48a6 6 0 0 1-12 0V62.48l-45.76 45.76a6 6 0 0 1-8.48-8.48L193.52 54H160a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6M99.76 147.76L54 193.52V160a6 6 0 0 0-12 0v48a6 6 0 0 0 6 6h48a6 6 0 0 0 0-12H62.48l45.76-45.76a6 6 0 0 0-8.48-8.48M208 154a6 6 0 0 0-6 6v33.52l-45.76-45.76a6 6 0 0 0-8.48 8.48L193.52 202H160a6 6 0 0 0 0 12h48a6 6 0 0 0 6-6v-48a6 6 0 0 0-6-6M62.48 54H96a6 6 0 0 0 0-12H48a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0V62.48l45.76 45.76a6 6 0 0 0 8.48-8.48Z"></svg:path>`,
})
export class PhArrowsOutLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutLineHorizontalLightIcon],svg[ph-arrows-out-line-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 40v176a6 6 0 0 1-12 0V40a6 6 0 0 1 12 0m-38 82H30.49l21.75-21.76a6 6 0 0 0-8.48-8.48l-32 32a6 6 0 0 0 0 8.48l32 32a6 6 0 0 0 8.48-8.48L30.49 134H96a6 6 0 0 0 0-12m148.24 1.76l-32-32a6 6 0 0 0-8.48 8.48L225.51 122H160a6 6 0 0 0 0 12h65.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48"></svg:path>`,
})
export class PhArrowsOutLineHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutLineVerticalLightIcon],svg[ph-arrows-out-line-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M100.24 52.24L122 30.49V96a6 6 0 0 0 12 0V30.49l21.76 21.75a6 6 0 0 0 8.48-8.48l-32-32a6 6 0 0 0-8.48 0l-32 32a6 6 0 0 0 8.48 8.48m55.52 151.52L134 225.51V160a6 6 0 0 0-12 0v65.51l-21.76-21.75a6 6 0 0 0-8.48 8.48l32 32a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0-8.48-8.48"></svg:path>`,
})
export class PhArrowsOutLineVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutSimpleLightIcon],svg[ph-arrows-out-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 48v48a6 6 0 0 1-12 0V62.48l-53.76 53.76a6 6 0 0 1-8.48-8.48L193.52 54H160a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-106.24 91.76L54 193.52V160a6 6 0 0 0-12 0v48a6 6 0 0 0 6 6h48a6 6 0 0 0 0-12H62.48l53.76-53.76a6 6 0 0 0-8.48-8.48"></svg:path>`,
})
export class PhArrowsOutSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsSplitLightIcon],svg[ph-arrows-split-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 188.24l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L186 201.51v-63l-58-58l-58 58v63l21.76-21.75a6 6 0 0 1 8.48 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L58 201.51V136a6 6 0 0 1 1.76-4.24L122 69.51V24a6 6 0 0 1 12 0v45.51l62.24 62.25A6 6 0 0 1 198 136v65.51l21.76-21.75a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhArrowsSplitLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsVerticalLightIcon],svg[ph-arrows-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164.24 195.76a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L122 217.51v-179l-21.76 21.73a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48L134 38.49v179l21.76-21.75a6 6 0 0 1 8.48.02"></svg:path>`,
})
export class PhArrowsVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArticleLightIcon],svg[ph-article-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 158a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM182 96a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhArticleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArticleMediumLightIcon],svg[ph-article-medium-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54 136a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h10V62H24a6 6 0 0 1 0-12h16a6 6 0 0 1 5.09 2.8L80 108.68l34.91-55.86A6 6 0 0 1 120 50h16a6 6 0 0 1 0 12h-10v68h10a6 6 0 0 1 0 12h-24a6 6 0 0 1 0-12h2V76.92l-28.91 46.26a6 6 0 0 1-10.18 0L46 76.92V130h2a6 6 0 0 1 6 6m114-26h64a6 6 0 0 0 0-12h-64a6 6 0 0 0 0 12m64 20h-64a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m0 32H80a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12m0 32H80a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhArticleMediumLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArticleNyTimesLightIcon],svg[ph-article-ny-times-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 98h104a6 6 0 0 1 0 12H128a6 6 0 0 1 0-12m104 32H128a6 6 0 0 0 0 12h104a6 6 0 0 0 0-12m0 32H80a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12m0 32H80a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12M96 142a6 6 0 0 0 0-12H86V62h36v10a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6H32a6 6 0 0 0-6 6v16a6 6 0 0 0 12 0V62h36v68H64a6 6 0 0 0 0 12Z"></svg:path>`,
})
export class PhArticleNyTimesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAsclepiusLightIcon],svg[ph-asclepius-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 79v1a38 38 0 0 1-38 38h-42v84h10a18 18 0 0 0 12-31.42a6 6 0 1 1 8-8.94A30 30 0 0 1 144 214h-10v18a6 6 0 0 1-12 0v-18H96a6 6 0 0 1 0-12h26v-84H96a18 18 0 0 0 0 36a6 6 0 0 1 0 12a30 30 0 0 1 0-60h26V24a6 6 0 0 1 12 0v82h42a26 26 0 0 0 26-26v-1a25 25 0 0 0-25-25h-17a6 6 0 0 1 0-12h17a37 37 0 0 1 37 37M56 94H32a6 6 0 0 1-6-6v-8a38 38 0 0 1 38-38h32a6 6 0 0 1 0 12h-2v2a38 38 0 0 1-38 38m26-40H64a26 26 0 0 0-26 26v2h18a26 26 0 0 0 26-26Z"></svg:path>`,
})
export class PhAsclepiusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAsteriskLightIcon],svg[ph-asterisk-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.14 179.09a6 6 0 0 1-8.23 2.06L134 138.6V216a6 6 0 0 1-12 0v-77.4l-70.91 42.55A6.07 6.07 0 0 1 48 182a6 6 0 0 1-3.1-11.15L116.34 128L44.91 85.15a6 6 0 0 1 6.18-10.3L122 117.4V40a6 6 0 0 1 12 0v77.4l70.91-42.55a6 6 0 0 1 6.18 10.3L139.66 128l71.43 42.85a6 6 0 0 1 2.05 8.24"></svg:path>`,
})
export class PhAsteriskLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAsteriskSimpleLightIcon],svg[ph-asterisk-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.23 101.57l-72.6 29l51.11 65.71a6 6 0 0 1-9.48 7.36L128 137.77l-51.26 65.91a6 6 0 1 1-9.48-7.36l51.11-65.71l-72.6-29a6 6 0 1 1 4.46-11.14L122 119.14V40a6 6 0 0 1 12 0v79.14l71.77-28.71a6 6 0 1 1 4.46 11.14"></svg:path>`,
})
export class PhAsteriskSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAtLightIcon],svg[ph-at-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 0 0 0 204c21.13 0 43.31-6.35 59.32-17a6 6 0 0 0-6.65-10c-13.9 9.25-34.09 15-52.67 15a90 90 0 1 1 90-90c0 29.58-13.78 34-22 34s-22-4.42-22-34V88a6 6 0 0 0-12 0v9a46 46 0 1 0 4.34 56.32C171.76 166.6 182 174 196 174c21.29 0 34-17.2 34-46A102.12 102.12 0 0 0 128 26m0 136a34 34 0 1 1 34-34a34 34 0 0 1-34 34"></svg:path>`,
})
export class PhAtLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAtomLightIcon],svg[ph-atom-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M193.83 128a195.7 195.7 0 0 0 19.9-33.65c10.74-23.88 11-42.66.8-52.88s-29-9.94-52.88.8A195.7 195.7 0 0 0 128 62.17a195.7 195.7 0 0 0-33.65-19.9c-23.88-10.74-42.66-11-52.88-.8s-9.94 29 .8 52.88A195.7 195.7 0 0 0 62.17 128a195.7 195.7 0 0 0-19.9 33.65c-10.74 23.88-11 42.66-.8 52.88c5 5 12 7.47 20.63 7.47c9.1 0 20-2.76 32.25-8.27a195.7 195.7 0 0 0 33.65-19.9a195.7 195.7 0 0 0 33.65 19.9c12.25 5.51 23.15 8.27 32.25 8.27c8.64 0 15.65-2.49 20.63-7.47c10.23-10.22 9.94-29-.8-52.88a195.7 195.7 0 0 0-19.9-33.65M206 50c9.28 9.28 2.36 36.29-19.8 68a306 306 0 0 0-22.78-25.45A306 306 0 0 0 138 69.76c31.75-22.15 58.77-29.08 68-19.76m-27.19 78A289 289 0 0 1 155 155a289 289 0 0 1-27 23.88A289 289 0 0 1 101 155a291 291 0 0 1-23.88-27A297 297 0 0 1 128 77.14A291 291 0 0 1 155 101a289 289 0 0 1 23.85 27ZM50 50c2.68-2.69 6.84-4 12.17-4c13.11 0 33.3 8 55.87 23.81a303 303 0 0 0-25.5 22.73A306 306 0 0 0 69.76 118C47.6 86.25 40.68 59.24 50 50m0 156c-9.28-9.28-2.35-36.29 19.8-68a306 306 0 0 0 22.78 25.45A306 306 0 0 0 118 186.24C86.25 208.4 59.24 215.32 50 206m156 0c-9.28 9.28-36.29 2.35-68-19.81a304 304 0 0 0 25.45-22.77A306 306 0 0 0 186.24 138c22.16 31.75 29.08 58.76 19.76 68m-68-78a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhAtomLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAvocadoLightIcon],svg[ph-avocado-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 114a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34m81.1-62.68l-29.8-84.21A54 54 0 0 0 77.08 46l-29.52 83.52a86 86 0 1 0 161.54 1.8M128 234a74.05 74.05 0 0 1-69.2-100.28c0-.05 0-.09.05-.13L88.39 50a42 42 0 0 1 79.53.92s0 .08.05.13l29.82 84.28A74.06 74.06 0 0 1 128 234"></svg:path>`,
})
export class PhAvocadoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAxeLightIcon],svg[ph-axe-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M253.25 98.36a14 14 0 0 0-11.48-9.44a138.65 138.65 0 0 1-54.6-19.6l12.1-12.11a23 23 0 1 0-32.48-32.48L152 39.47c-3.21-3.73-5.19-6.46-5.92-7.5a14 14 0 0 0-21.35-1.88L86.09 68.77A14 14 0 0 0 88 90.12c1 .73 3.77 2.71 7.5 5.92L8.73 182.79A23 23 0 0 0 25 222a22.8 22.8 0 0 0 16.24-6.73l84.11-84.1a138.65 138.65 0 0 1 19.6 54.6a14 14 0 0 0 9.44 11.48a13.86 13.86 0 0 0 14.35-3.36l81.18-81.18a13.87 13.87 0 0 0 3.33-14.35m-78-65.15a11 11 0 0 1 15.52 15.52L177 62.49a154 154 0 0 1-16.76-14.26ZM32.73 206.79a11 11 0 0 1-15.52-15.52l87-87A154 154 0 0 1 118.49 121Zm208.68-102.57l-81.19 81.19a1.87 1.87 0 0 1-2 .48a2 2 0 0 1-1.38-1.71C148.17 119.4 100.3 84.11 94.87 80.3a2 2 0 0 1-.87-1.48a1.94 1.94 0 0 1 .57-1.57l38.67-38.67a2 2 0 0 1 1.39-.58h.18a2 2 0 0 1 1.48.86c3.81 5.43 39.1 53.3 103.88 62a2 2 0 0 1 1.71 1.38a1.85 1.85 0 0 1-.47 1.98"></svg:path>`,
})
export class PhAxeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBabyCarriageLightIcon],svg[ph-baby-carriage-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 34h-8a14 14 0 0 0-14 14v58H53.52A38.05 38.05 0 0 0 16 74a6 6 0 0 0 0 12a26 26 0 0 1 26 26a78.09 78.09 0 0 0 78 78h40a78 78 0 0 0 0-156m65.71 72H161.1l47.82-38.25A65.66 65.66 0 0 1 225.71 106M152 46h8a65.67 65.67 0 0 1 40 13.53l-50 40V48a2 2 0 0 1 2-2m8 132h-40a66.09 66.09 0 0 1-65.73-60h171.46A66.09 66.09 0 0 1 160 178m-58 46a14 14 0 1 1-14-14a14 14 0 0 1 14 14m104 0a14 14 0 1 1-14-14a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhBabyCarriageLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBabyLightIcon],svg[ph-baby-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 138a10 10 0 1 1 10-10a10 10 0 0 1-10 10m72-20a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-11.2 44.92a47 47 0 0 1-49.6 0a6 6 0 0 0-6.4 10.16a59 59 0 0 0 62.4 0a6 6 0 1 0-6.4-10.16M230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90.11 90.11 0 0 0-87.07-89.95C118.3 55.23 118 71.85 118 72a10 10 0 0 0 20 0a6 6 0 0 1 12 0a22 22 0 0 1-44 0c0-.75.15-15.82 10.14-33.22A90 90 0 1 0 218 128"></svg:path>`,
})
export class PhBabyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBackpackLightIcon],svg[ph-backpack-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 42.34V32a22 22 0 0 0-22-22h-32a22 22 0 0 0-22 22v10.34A54.07 54.07 0 0 0 42 96v120a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V96a54.07 54.07 0 0 0-48-53.66M112 22h32a10 10 0 0 1 10 10v10h-52V32a10 10 0 0 1 10-10m58 140H86v-10a10 10 0 0 1 10-10h64a10 10 0 0 1 10 10Zm-84 12h52v10a6 6 0 0 0 12 0v-10h20v44H86Zm116 42a2 2 0 0 1-2 2h-18v-66a22 22 0 0 0-22-22H96a22 22 0 0 0-22 22v66H56a2 2 0 0 1-2-2V96a42 42 0 0 1 42-42h64a42 42 0 0 1 42 42ZM150 88a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhBackpackLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBackspaceLightIcon],svg[ph-backspace-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H68.53a14 14 0 0 0-12 6.8l-45.67 76.11a6 6 0 0 0 0 6.18l45.67 76.11a14 14 0 0 0 12 6.8H216a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 158a2 2 0 0 1-2 2H68.53a2 2 0 0 1-1.71-1L23 128l43.82-73a2 2 0 0 1 1.71-1H216a2 2 0 0 1 2 2Zm-53.76-91.76L144.48 128l19.76 19.76a6 6 0 1 1-8.48 8.48L136 136.48l-19.76 19.76a6 6 0 0 1-8.48-8.48L127.52 128l-19.76-19.76a6 6 0 0 1 8.48-8.48L136 119.52l19.76-19.76a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhBackspaceLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBagLightIcon],svg[ph-bag-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 66h-42v-2a46 46 0 0 0-92 0v2H40a14 14 0 0 0-14 14v120a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14M94 64a34 34 0 0 1 68 0v2H94Zm124 136a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h42v18a6 6 0 0 0 12 0V78h68v18a6 6 0 0 0 12 0V78h42a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhBagLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBagSimpleLightIcon],svg[ph-bag-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 66h-42v-2a46 46 0 0 0-92 0v2H40a14 14 0 0 0-14 14v120a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14M94 64a34 34 0 0 1 68 0v2H94Zm124 136a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhBagSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBalloonLightIcon],svg[ph-balloon-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 18a86.1 86.1 0 0 0-86 86c0 23 9.24 48.52 24.71 68.27c12.37 15.79 27.23 26.42 43.05 31.07l-11.27 26.3A6 6 0 0 0 104 238h48a6 6 0 0 0 5.51-8.36l-11.27-26.3c15.82-4.65 30.68-15.28 43-31.07C204.76 152.52 214 127 214 104a86.1 86.1 0 0 0-86-86m-15.83 186l.58.14a2 2 0 0 1-.58-.14m30.73 22h-29.8l8.7-20.31a62 62 0 0 0 12.4 0ZM128 194c-33.52 0-74-40.15-74-90a74 74 0 0 1 148 0c0 49.85-40.48 90-74 90m49-92.08a7 7 0 0 1-1 .08a6 6 0 0 1-5.91-5A43.29 43.29 0 0 0 135 61.92a6 6 0 1 1 2-11.84A55.48 55.48 0 0 1 181.92 95a6 6 0 0 1-4.92 6.92"></svg:path>`,
})
export class PhBalloonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBandaidsLightIcon],svg[ph-bandaids-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m181.74 128l29.13-29.13a38 38 0 1 0-53.74-53.74L128 74.26L98.87 45.13a38 38 0 1 0-53.74 53.74L74.26 128l-29.13 29.13a38 38 0 1 0 53.74 53.74L128 181.74l29.13 29.13a38 38 0 1 0 53.74-53.74Zm-16.12-74.38a26 26 0 1 1 36.76 36.77l-29.13 29.13l-36.76-36.77Zm-.85 74.38L128 164.77L91.23 128L128 91.23ZM53.62 90.38a26 26 0 1 1 36.76-36.76l29.13 29.13l-36.76 36.77Zm36.76 112a26 26 0 1 1-36.76-36.76l29.13-29.13l36.76 36.76Zm112 0a26 26 0 0 1-36.76 0l-29.14-29.13l36.77-36.77l29.13 29.14a26 26 0 0 1 0 36.76M118 128a10 10 0 1 1 10 10a10 10 0 0 1-10-10"></svg:path>`,
})
export class PhBandaidsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBankLightIcon],svg[ph-bank-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 102h26v68H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12h-18v-68h26a6 6 0 0 0 3.14-11.11l-104-64a6 6 0 0 0-6.28 0l-104 64A6 6 0 0 0 24 102m38 0h36v68H62Zm84 0v68h-36v-68Zm48 68h-36v-68h36ZM128 39l82.8 51H45.2Zm118 169a6 6 0 0 1-6 6H16a6 6 0 0 1 0-12h224a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhBankLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarbellLightIcon],svg[ph-barbell-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 122h-10V88a14 14 0 0 0-14-14h-18V64a14 14 0 0 0-14-14h-24a14 14 0 0 0-14 14v58h-52V64a14 14 0 0 0-14-14H64a14 14 0 0 0-14 14v10H32a14 14 0 0 0-14 14v34H8a6 6 0 0 0 0 12h10v34a14 14 0 0 0 14 14h18v10a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-58h52v58a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-10h18a14 14 0 0 0 14-14v-34h10a6 6 0 0 0 0-12M32 170a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h18v84Zm58 22a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2Zm104 0a2 2 0 0 1-2 2h-24a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2Zm32-24a2 2 0 0 1-2 2h-18V86h18a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhBarbellLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarcodeLightIcon],svg[ph-barcode-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 48v40a6 6 0 0 1-12 0V54h-34a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6M72 202H38v-34a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6h40a6 6 0 0 0 0-12m152-40a6 6 0 0 0-6 6v34h-34a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6M32 94a6 6 0 0 0 6-6V54h34a6 6 0 0 0 0-12H32a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6m48-12a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6m102 86V88a6 6 0 0 0-12 0v80a6 6 0 0 0 12 0m-38-86a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6m-32 0a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhBarcodeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarnLightIcon],svg[ph-barn-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 194h-10v-69.68l5.12 7.17a6 6 0 1 0 9.76-7l-40-56a6.1 6.1 0 0 0-1.47-1.45l-67.64-46.69a14 14 0 0 0-15.62.06L52.59 67.06a6.1 6.1 0 0 0-1.47 1.45l-40 56a6 6 0 1 0 9.76 7l5.12-7.19V194H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M38 107.52l22.27-31.18l66.62-46a2 2 0 0 1 2.14-.06l66.7 46.06L218 107.52V194h-28v-74a6 6 0 0 0-6-6H72a6 6 0 0 0-6 6v74H38Zm90 45.11L90.72 126h74.56Zm50-21v56.68L138.32 160ZM117.68 160L78 188.34v-56.68Zm10.32 7.37L165.28 194H90.72ZM106 88a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12h-32a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhBarnLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarricadeLightIcon],svg[ph-barricade-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 66H32a14 14 0 0 0-14 14v72a14 14 0 0 0 14 14h26v34a6 6 0 0 0 12 0v-34h116v34a6 6 0 0 0 12 0v-34h26a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14m2 14v53.52L170.48 78H224a2 2 0 0 1 2 2M32 78h49.52l76 76h-55L30 81.52V80a2 2 0 0 1 2-2m-2 74V98.48L85.52 154H32a2 2 0 0 1-2-2m194 2h-49.52l-76-76h55L226 150.48V152a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhBarricadeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBaseballCapLightIcon],svg[ph-baseball-cap-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26A102.12 102.12 0 0 0 26 128v56a22 22 0 0 0 35 17.74c12.38-9 34.06-19.74 67-19.74s54.61 10.73 67 19.73A22 22 0 0 0 230 184v-56A102.12 102.12 0 0 0 128 26m90 102v12.5a164.3 164.3 0 0 0-44.8-20.3A165.07 165.07 0 0 0 141.69 39A90.15 90.15 0 0 1 218 128m-57.21-10.78a168.6 168.6 0 0 0-65.58 0c5-38.38 24.16-65.59 32.79-76.14c8.63 10.57 27.8 37.77 32.79 76.15ZM114.31 39a165.07 165.07 0 0 0-31.51 81.21a164.3 164.3 0 0 0-44.8 20.3V128a90.15 90.15 0 0 1 76.31-89m98.26 153.85A9.94 9.94 0 0 1 202 192c-13.82-10-37.88-22-74-22s-60.22 12-74 22a9.92 9.92 0 0 1-10.53.85A9.79 9.79 0 0 1 38 184v-29a154 154 0 0 1 180 0v29a9.79 9.79 0 0 1-5.43 8.89Z"></svg:path>`,
})
export class PhBaseballCapLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBaseballHelmetLightIcon],svg[ph-baseball-helmet-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 130a26 26 0 1 0 26 26a26 26 0 0 0-26-26m0 40a14 14 0 1 1 14-14a14 14 0 0 1-14 14m160-48h-26.17A102 102 0 0 0 18 128v24a70.08 70.08 0 0 0 70 70h40a70.08 70.08 0 0 0 70-70v-18h50a6 6 0 0 0 0-12m-62 30a58.07 58.07 0 0 1-58 58h-.85A70 70 0 0 0 158 152v-18h28Zm-34-30a6 6 0 0 0-6 6v24a58 58 0 0 1-116 0v-24a90 90 0 0 1 179.8-6Z"></svg:path>`,
})
export class PhBaseballHelmetLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBaseballLightIcon],svg[ph-baseball-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m67.31 161.67c-1-1.12-2-2.26-2.9-3.42a6 6 0 0 0-9.36 7.5c1.19 1.49 2.43 2.94 3.71 4.37a89.84 89.84 0 0 1-117.52 0c1.28-1.43 2.52-2.88 3.71-4.37a6 6 0 0 0-9.36-7.5c-.93 1.16-1.91 2.3-2.9 3.42a89.8 89.8 0 0 1 0-119.34c1 1.12 2 2.26 2.9 3.42A6 6 0 0 0 68.28 74A6 6 0 0 0 73 64.25a102 102 0 0 0-3.71-4.37a89.84 89.84 0 0 1 117.52 0a102 102 0 0 0-3.71 4.37a6 6 0 1 0 9.36 7.5c.93-1.16 1.91-2.3 2.9-3.42a89.8 89.8 0 0 1 0 119.34ZM93.92 145a101.4 101.4 0 0 1-4.4 17a6 6 0 1 1-11.31-4a90 90 0 0 0 3.87-15a6 6 0 1 1 11.84 2m0-34a6 6 0 0 1-4.92 6.92a7 7 0 0 1-1 .08a6 6 0 0 1-5.91-5a90 90 0 0 0-3.87-15a6 6 0 1 1 11.31-4a101.4 101.4 0 0 1 4.39 17m83.87 47a6 6 0 1 1-11.31 4a101.4 101.4 0 0 1-4.4-17a6 6 0 1 1 11.84-2a90 90 0 0 0 3.87 15m0-60a90 90 0 0 0-3.87 15a6 6 0 0 1-5.91 5a7 7 0 0 1-1-.08a6 6 0 0 1-4.93-6.91a101.4 101.4 0 0 1 4.4-17a6 6 0 1 1 11.31 4Z"></svg:path>`,
})
export class PhBaseballLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBasketLightIcon],svg[ph-basket-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 120v56a6 6 0 0 1-12 0v-56a6 6 0 0 1 12 0m40.83-.6l-5.6 56a6 6 0 0 0 5.37 6.6h.61a6 6 0 0 0 6-5.4l5.6-56a6 6 0 0 0-11.94-1.2Zm-93.66 0a6 6 0 0 0-11.94 1.2l5.6 56a6 6 0 0 0 6 5.4h.61a6 6 0 0 0 5.37-6.57ZM238 88.79l-15.13 113.06A14 14 0 0 1 209 214H47a14 14 0 0 1-13.87-12.15L18.05 88.79A6 6 0 0 1 24 82h45.28l54.2-61.95a6 6 0 0 1 9 0l54.2 62H232a6 6 0 0 1 6 6.74M85.22 82h85.56L128 33.11Zm139.93 12H30.85L45 200.26a2 2 0 0 0 2 1.74h162a2 2 0 0 0 2-1.74Z"></svg:path>`,
})
export class PhBasketLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBasketballLightIcon],svg[ph-basketball-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26M60 69.09A89.23 89.23 0 0 1 81.78 122H38.2A89.65 89.65 0 0 1 60 69.09M38.2 134h43.58A89.23 89.23 0 0 1 60 186.91A89.65 89.65 0 0 1 38.2 134m83.8 83.8a89.66 89.66 0 0 1-53.5-22.34A101.18 101.18 0 0 0 93.82 134H122Zm0-95.8H93.82A101.18 101.18 0 0 0 68.5 60.54A89.66 89.66 0 0 1 122 38.2Zm95.8 0h-43.58A89.23 89.23 0 0 1 196 69.09A89.65 89.65 0 0 1 217.8 122M134 38.2a89.66 89.66 0 0 1 53.5 22.34A101.18 101.18 0 0 0 162.18 122H134Zm0 179.6V134h28.18a101.18 101.18 0 0 0 25.32 61.46A89.66 89.66 0 0 1 134 217.8m62-30.89A89.23 89.23 0 0 1 174.22 134h43.58a89.65 89.65 0 0 1-21.8 52.91"></svg:path>`,
})
export class PhBasketballLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBathtubLightIcon],svg[ph-bathtub-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 98h-34v-2a6 6 0 0 0-6-6h-64a6 6 0 0 0-6 6v2H62V52a14 14 0 0 1 14-14a14.47 14.47 0 0 1 14.12 11.19a6 6 0 1 0 11.76-2.38A26.32 26.32 0 0 0 76 26a26 26 0 0 0-26 26v46H16a6 6 0 0 0-6 6v40a54.06 54.06 0 0 0 54 54h2v18a6 6 0 0 0 12 0v-18h100v18a6 6 0 0 0 12 0v-18h2a54.06 54.06 0 0 0 54-54v-40a6 6 0 0 0-6-6m-98 4h52v36h-52Zm92 42a42 42 0 0 1-42 42H64a42 42 0 0 1-42-42v-34h108v34a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6v-34h28Z"></svg:path>`,
})
export class PhBathtubLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingLightIcon],svg[ph-battery-charging-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 58H32a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h168a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 118a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h168a10 10 0 0 1 10 10Zm44-80v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-116.9 28.85a6 6 0 0 1 .27 5.83l-16 32a6 6 0 1 1-10.74-5.36L122.29 134H100a6 6 0 0 1-5.37-8.68l16-32a6 6 0 0 1 10.74 5.36L109.71 122H132a6 6 0 0 1 5.1 2.85"></svg:path>`,
})
export class PhBatteryChargingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingVerticalLightIcon],svg[ph-battery-charging-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.1 132.85a6 6 0 0 1 .27 5.83l-16 32a6 6 0 1 1-10.74-5.36L134.29 142H112a6 6 0 0 1-5.37-8.68l16-32a6 6 0 0 1 10.74 5.36L121.71 130H144a6 6 0 0 1 5.1 2.85M96 14h64a6 6 0 0 0 0-12H96a6 6 0 0 0 0 12m102 42v168a22 22 0 0 1-22 22H80a22 22 0 0 1-22-22V56a22 22 0 0 1 22-22h96a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H80a10 10 0 0 0-10 10v168a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10Z"></svg:path>`,
})
export class PhBatteryChargingVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryEmptyLightIcon],svg[ph-battery-empty-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 58H32a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h168a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 118a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h168a10 10 0 0 1 10 10Zm44-80v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhBatteryEmptyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryFullLightIcon],svg[ph-battery-full-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 58H32a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h168a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 118a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h168a10 10 0 0 1 10 10Zm-28-80v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-40 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-40 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-40 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m192 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhBatteryFullLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryHighLightIcon],svg[ph-battery-high-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 58H32a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h168a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 118a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h168a10 10 0 0 1 10 10Zm-68-80v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-40 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-40 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m192 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhBatteryHighLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryLowLightIcon],svg[ph-battery-low-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 58H32a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h168a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 118a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h168a10 10 0 0 1 10 10ZM62 96v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m192 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhBatteryLowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryMediumLightIcon],svg[ph-battery-medium-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 58H32a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h168a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 118a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h168a10 10 0 0 1 10 10ZM102 96v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-40 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m192 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhBatteryMediumLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusLightIcon],svg[ph-battery-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 128a6 6 0 0 1-6 6h-22v22a6 6 0 0 1-12 0v-22H88a6 6 0 0 1 0-12h22v-22a6 6 0 0 1 12 0v22h22a6 6 0 0 1 6 6m72-48v96a22 22 0 0 1-22 22H32a22 22 0 0 1-22-22V80a22 22 0 0 1 22-22h168a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H32a10 10 0 0 0-10 10v96a10 10 0 0 0 10 10h168a10 10 0 0 0 10-10Zm38 10a6 6 0 0 0-6 6v64a6 6 0 0 0 12 0V96a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhBatteryPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusVerticalLightIcon],svg[ph-battery-plus-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 8a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m108 48v168a22 22 0 0 1-22 22H80a22 22 0 0 1-22-22V56a22 22 0 0 1 22-22h96a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H80a10 10 0 0 0-10 10v168a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10Zm-30 78h-22v-22a6 6 0 0 0-12 0v22h-22a6 6 0 0 0 0 12h22v22a6 6 0 0 0 12 0v-22h22a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhBatteryPlusVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalEmptyLightIcon],svg[ph-battery-vertical-empty-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 8a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m108 48v168a22 22 0 0 1-22 22H80a22 22 0 0 1-22-22V56a22 22 0 0 1 22-22h96a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H80a10 10 0 0 0-10 10v168a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10Z"></svg:path>`,
})
export class PhBatteryVerticalEmptyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalFullLightIcon],svg[ph-battery-vertical-full-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 8a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m108 48v168a22 22 0 0 1-22 22H80a22 22 0 0 1-22-22V56a22 22 0 0 1 22-22h96a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H80a10 10 0 0 0-10 10v168a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10Zm-26 18H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m0 40H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m0 40H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m0 40H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhBatteryVerticalFullLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalHighLightIcon],svg[ph-battery-vertical-high-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 8a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m108 48v168a22 22 0 0 1-22 22H80a22 22 0 0 1-22-22V56a22 22 0 0 1 22-22h96a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H80a10 10 0 0 0-10 10v168a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10Zm-26 58H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m0 40H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m0 40H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhBatteryVerticalHighLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalLowLightIcon],svg[ph-battery-vertical-low-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 8a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m108 48v168a22 22 0 0 1-22 22H80a22 22 0 0 1-22-22V56a22 22 0 0 1 22-22h96a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H80a10 10 0 0 0-10 10v168a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10Zm-26 138H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhBatteryVerticalLowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalMediumLightIcon],svg[ph-battery-vertical-medium-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 8a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m108 48v168a22 22 0 0 1-22 22H80a22 22 0 0 1-22-22V56a22 22 0 0 1 22-22h96a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H80a10 10 0 0 0-10 10v168a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10Zm-26 98H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m0 40H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhBatteryVerticalMediumLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningLightIcon],svg[ph-battery-warning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 58H32a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h168a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 118a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h168a10 10 0 0 1 10 10Zm44-80v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-144 28V96a6 6 0 0 1 12 0v28a6 6 0 0 1-12 0m16 32a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhBatteryWarningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningVerticalLightIcon],svg[ph-battery-warning-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 136V96a6 6 0 0 1 12 0v40a6 6 0 0 1-12 0m6 26a10 10 0 1 0 10 10a10 10 0 0 0-10-10M96 14h64a6 6 0 0 0 0-12H96a6 6 0 0 0 0 12m102 42v168a22 22 0 0 1-22 22H80a22 22 0 0 1-22-22V56a22 22 0 0 1 22-22h96a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H80a10 10 0 0 0-10 10v168a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10Z"></svg:path>`,
})
export class PhBatteryWarningVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeachBallLightIcon],svg[ph-beach-ball-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m85 72.45a198 198 0 0 0-46.09-9.37A198 198 0 0 0 157.55 43A90.47 90.47 0 0 1 213 98.45m-69.48-59.11a186.6 186.6 0 0 1 10.11 39a198.5 198.5 0 0 0-58.48-34.13a90.17 90.17 0 0 1 48.37-4.87M80.15 51.81A186.1 186.1 0 0 1 147 88.47a198.3 198.3 0 0 0-108.92 35a90.05 90.05 0 0 1 42.07-71.66M38.55 138a186.16 186.16 0 0 1 117-37.46a186.16 186.16 0 0 1-37.46 117A90.18 90.18 0 0 1 38.55 138m94 79.94a198.33 198.33 0 0 0 35-108.93a186.2 186.2 0 0 1 36.66 66.89a90.05 90.05 0 0 1-71.66 41.99Zm79.24-57a198.5 198.5 0 0 0-34.11-58.48a186.6 186.6 0 0 1 39 10.11a90.17 90.17 0 0 1-4.87 48.37Z"></svg:path>`,
})
export class PhBeachBallLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeanieLightIcon],svg[ph-beanie-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 163.37V144a94.17 94.17 0 0 0-73.7-91.79a26 26 0 1 0-40.6 0A94.17 94.17 0 0 0 34 144v19.37A14 14 0 0 0 26 176v32a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14v-32a14 14 0 0 0-8-12.63M114 36a14 14 0 1 1 14 14a14 14 0 0 1-14-14m14 26a82.1 82.1 0 0 1 82 82v18H46v-18a82.1 82.1 0 0 1 82-82m-6 112v36H78v-36Zm12 0h44v36h-44Zm-96 34v-32a2 2 0 0 1 2-2h26v36H40a2 2 0 0 1-2-2m180 0a2 2 0 0 1-2 2h-26v-36h26a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhBeanieLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBedLightIcon],svg[ph-bed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74H30V48a6 6 0 0 0-12 0v160a6 6 0 0 0 12 0v-34h212v34a6 6 0 0 0 12 0v-96a38 38 0 0 0-38-38M30 86h76v76H30Zm88 76V86h98a26 26 0 0 1 26 26v50Z"></svg:path>`,
})
export class PhBedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerBottleLightIcon],svg[ph-beer-bottle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244.24 43.76l-32-32a6 6 0 0 0-8.48 8.48l3.11 3.11l-57.38 43l-38.67 7.74a5.9 5.9 0 0 0-3.06 1.64l-83.32 83.34a22 22 0 0 0 0 31.11l41.38 41.38a22 22 0 0 0 31.11 0l83.31-83.32a5.9 5.9 0 0 0 1.64-3.06l7.74-38.67l43-57.38l3.11 3.11a6 6 0 0 0 8.48-8.48ZM88.44 223.07a10 10 0 0 1-14.14 0L32.93 181.7a10 10 0 0 1 0-14.14l7.07-7.07L95.51 216ZM104 207.51L48.49 152L96 104.49L151.51 160Zm75.2-107.11a5.9 5.9 0 0 0-1.08 2.42L170.47 141L160 151.51L104.49 96L115 85.53l38.22-7.65a5.9 5.9 0 0 0 2.42-1.08l59.84-44.88l8.64 8.64Z"></svg:path>`,
})
export class PhBeerBottleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerSteinLightIcon],svg[ph-beer-stein-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 90h-18V72a38 38 0 0 0-38-38h-11.93c-11.6-10.2-27.51-16-44.07-16c-34.19 0-62 24.22-62 54v136a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14v-10h18a22 22 0 0 0 22-22v-64a22 22 0 0 0-22-22M104 30c14.38 0 28.08 5.22 37.59 14.33a6 6 0 0 0 4.15 1.67H160a26 26 0 0 1 25.29 20H54.52C58 45.67 78.86 30 104 30m82 178a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V78h132Zm40-32a10 10 0 0 1-10 10h-18v-84h18a10 10 0 0 1 10 10Zm-124-72v80a6 6 0 0 1-12 0v-80a6 6 0 0 1 12 0m48 0v80a6 6 0 0 1-12 0v-80a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhBeerSteinLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBehanceLogoLightIcon],svg[ph-behance-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112.15 122.36A36 36 0 0 0 90 58H32a6 6 0 0 0-6 6v128a6 6 0 0 0 6 6h62a40 40 0 0 0 18.15-75.64M38 70h52a24 24 0 0 1 0 48H38Zm56 116H38v-56h56a28 28 0 0 1 0 56m68-106a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12h-64a6 6 0 0 1-6-6m38 26a46 46 0 1 0 36.8 73.61a6 6 0 0 0-9.6-7.21a34 34 0 0 1-60.67-14.4H240a6 6 0 0 0 6-6a46.06 46.06 0 0 0-46-46m-33.47 40a34 34 0 0 1 66.94 0Z"></svg:path>`,
})
export class PhBehanceLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellLightIcon],svg[ph-bell-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.07 176.94C214.41 167.2 206 139.73 206 104a78 78 0 1 0-156 0c0 35.74-8.42 63.2-14.08 72.94A14 14 0 0 0 48 198h42.48a38 38 0 0 0 75 0H208a14 14 0 0 0 12.06-21.06ZM128 218a26 26 0 0 1-25.29-20h50.58A26 26 0 0 1 128 218m81.71-33a1.9 1.9 0 0 1-1.7 1H48a1.9 1.9 0 0 1-1.7-1a2 2 0 0 1 0-2c7.57-13 15.7-43.31 15.7-79a66 66 0 1 1 132 0c0 35.68 8.14 65.95 15.71 79a2 2 0 0 1 0 2"></svg:path>`,
})
export class PhBellLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellRingingLightIcon],svg[ph-bell-ringing-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.05 69.33a6 6 0 0 1-8.05-2.57a96 96 0 0 0-34.2-37.68a6 6 0 0 1 6.4-10.15a109.26 109.26 0 0 1 38.41 42.31a6 6 0 0 1-2.56 8.09M41 66.76a96 96 0 0 1 34.2-37.68a6 6 0 0 0-6.4-10.15a109.26 109.26 0 0 0-38.41 42.31A6 6 0 1 0 41 66.76m179 110.18A14 14 0 0 1 208 198h-42.5a38 38 0 0 1-75 0H48a14 14 0 0 1-12.06-21.06C45.13 161.09 50 138.63 50 112a78 78 0 0 1 156 0c0 27 4.74 48.86 14.08 64.94ZM153.29 198h-50.58a26 26 0 0 0 50.58 0m56.42-15C199.29 165 194 141.15 194 112a66 66 0 0 0-132 0c0 29.16-5.29 53-15.71 71a2 2 0 0 0 0 2a1.9 1.9 0 0 0 1.7 1H208a1.9 1.9 0 0 0 1.7-1a2 2 0 0 0 .01-2"></svg:path>`,
})
export class PhBellRingingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleLightIcon],svg[ph-bell-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 224a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m54.11-33a13.83 13.83 0 0 1-12.1 7H48a14 14 0 0 1-12.06-21.06C41.59 167.2 50 139.74 50 104a78 78 0 1 1 156 0c0 35.73 8.42 63.2 14.08 72.94a13.9 13.9 0 0 1 .03 14.06m-10.41-8c-7.57-13-15.7-43.32-15.7-79a66 66 0 1 0-132 0c0 35.69-8.14 66-15.71 79a2 2 0 0 0 0 2a1.9 1.9 0 0 0 1.7 1H208a1.9 1.9 0 0 0 1.7-1a2 2 0 0 0 0-2"></svg:path>`,
})
export class PhBellSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleRingingLightIcon],svg[ph-bell-simple-ringing-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M165.92 224a6 6 0 0 1-6 6h-64a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m59.69-162.77a109.23 109.23 0 0 0-38.41-42.3a6 6 0 0 0-6.4 10.14A96 96 0 0 1 215 66.76a6 6 0 1 0 10.65-5.53ZM41 66.76a96 96 0 0 1 34.2-37.69a6 6 0 0 0-6.4-10.14a109.23 109.23 0 0 0-38.41 42.3A6 6 0 1 0 41 66.76m179 110.17A14 14 0 0 1 208 198H48a14 14 0 0 1-12.06-21C45.13 161.08 50 138.62 50 112a78 78 0 0 1 156 0c0 27 4.74 48.84 14.08 64.93Zm-10.37 6C199.29 165 194 141.14 194 112a66 66 0 0 0-132 0c0 29.16-5.29 53-15.71 71a2 2 0 0 0 0 2a1.9 1.9 0 0 0 1.7 1H208a1.9 1.9 0 0 0 1.7-1a2 2 0 0 0 .01-2Z"></svg:path>`,
})
export class PhBellSimpleRingingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleSlashLightIcon],svg[ph-bell-simple-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l17.75 19.56A77.45 77.45 0 0 0 50 104c0 35.74-8.42 63.2-14.08 72.94A14 14 0 0 0 48 198h135.53l20 22a6 6 0 0 0 8.88-8.08ZM48 186a1.9 1.9 0 0 1-1.7-1a2 2 0 0 1 0-2c7.56-13 15.7-43.31 15.7-79a65.6 65.6 0 0 1 7.78-31.12L172.62 186Zm118 38a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m47.27-46.62a5.9 5.9 0 0 1-2.2.42a6 6 0 0 1-5.58-3.81c-7.2-18.31-11.49-44.48-11.49-70a66 66 0 0 0-98.55-57.42a6 6 0 1 1-5.93-10.43A78 78 0 0 1 206 104c0 35.7 8.16 59.24 10.66 65.61a6 6 0 0 1-3.39 7.77"></svg:path>`,
})
export class PhBellSimpleSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleZLightIcon],svg[ph-bell-simple-z-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 224a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-22-86h-20.79L149 99.33a6 6 0 0 0-5-9.33h-32a6 6 0 0 0 0 12h20.79L107 140.67a6 6 0 0 0 5 9.33h32a6 6 0 0 0 0-12m76.11 53a13.83 13.83 0 0 1-12.1 7H48a14 14 0 0 1-12.06-21.06C41.59 167.2 50 139.74 50 104a78 78 0 1 1 156 0c0 35.73 8.42 63.2 14.08 72.94a13.9 13.9 0 0 1 .03 14.06m-10.41-8c-7.57-13-15.7-43.32-15.7-79a66 66 0 1 0-132 0c0 35.69-8.14 66-15.71 79a2 2 0 0 0 0 2a1.9 1.9 0 0 0 1.7 1H208a1.9 1.9 0 0 0 1.7-1a2 2 0 0 0 0-2"></svg:path>`,
})
export class PhBellSimpleZLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSlashLightIcon],svg[ph-bell-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l17.75 19.56A77.45 77.45 0 0 0 50 104c0 35.74-8.42 63.2-14.08 72.94A14 14 0 0 0 48 198h42.5a38 38 0 0 0 75 0h18l20 22a6 6 0 0 0 8.88-8.08ZM128 218a26 26 0 0 1-25.29-20h50.58A26 26 0 0 1 128 218m-80-32a1.9 1.9 0 0 1-1.7-1a2 2 0 0 1 0-2c7.56-13 15.7-43.31 15.7-79a65.6 65.6 0 0 1 7.78-31.12L172.62 186Zm165.29-8.62a5.9 5.9 0 0 1-2.2.42a6 6 0 0 1-5.58-3.81c-7.2-18.31-11.49-44.48-11.49-70a66 66 0 0 0-98.57-57.42a6 6 0 1 1-5.93-10.43A78 78 0 0 1 206 104c0 35.7 8.16 59.24 10.66 65.61a6 6 0 0 1-3.39 7.77Z"></svg:path>`,
})
export class PhBellSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellZLightIcon],svg[ph-bell-z-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 144a6 6 0 0 1-6 6h-32a6 6 0 0 1-5-9.33L132.79 102H112a6 6 0 0 1 0-12h32a6 6 0 0 1 5 9.33L123.21 138H144a6 6 0 0 1 6 6m70.11 47a13.83 13.83 0 0 1-12.1 7h-42.49a38 38 0 0 1-75 0H48a14 14 0 0 1-12.06-21.06C41.59 167.2 50 139.74 50 104a78 78 0 1 1 156 0c0 35.73 8.42 63.2 14.08 72.94a13.9 13.9 0 0 1 .03 14.06m-66.82 7h-50.58a26 26 0 0 0 50.58 0m56.41-15c-7.57-13-15.7-43.32-15.7-79a66 66 0 1 0-132 0c0 35.69-8.14 66-15.71 79a2 2 0 0 0 0 2a1.9 1.9 0 0 0 1.7 1H208a1.9 1.9 0 0 0 1.7-1a2 2 0 0 0 0-2"></svg:path>`,
})
export class PhBellZLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeltLightIcon],svg[ph-belt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 162h-58V94h58a6 6 0 0 0 0-12h-59.37A14 14 0 0 0 176 74h-64a14 14 0 0 0-12.63 8H62v-2a6 6 0 0 0-12 0v2H8a6 6 0 0 0 0 12h42v68H8a6 6 0 0 0 0 12h42v2a6 6 0 0 0 12 0v-2h37.37a14 14 0 0 0 12.63 8h64a14 14 0 0 0 12.63-8H248a6 6 0 0 0 0-12M62 94h36v68H62Zm114 76h-64a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2v34h-34a6 6 0 0 0 0 12h34v34a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhBeltLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBezierCurveLightIcon],svg[ph-bezier-curve-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.44 146.2A94.66 94.66 0 0 0 173.92 86H240a6 6 0 0 0 0-12h-82.6a30 30 0 0 0-58.8 0H16a6 6 0 0 0 0 12h66.08a94.66 94.66 0 0 0-45.52 60.2a30 30 0 1 0 12.09 1.08a82.53 82.53 0 0 1 51.4-56.39a30 30 0 0 0 55.9 0a82.53 82.53 0 0 1 51.4 56.39a30 30 0 1 0 12.09-1.08M58 176a18 18 0 1 1-18-18a18 18 0 0 1 18 18m70-78a18 18 0 1 1 18-18a18 18 0 0 1-18 18m88 96a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhBezierCurveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBicycleLightIcon],svg[ph-bicycle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 114a45.9 45.9 0 0 0-17.8 3.58L162.45 70H192a10 10 0 0 1 10 10a6 6 0 0 0 12 0a22 22 0 0 0-22-22h-40a6 6 0 0 0-5.18 9l13.4 23H98.11L81.18 61A6 6 0 0 0 76 58H48a6 6 0 0 0 0 12h24.55l15 25.64L70 119.62a46.22 46.22 0 1 0 9.68 7.09L94.11 107l32.71 56a6 6 0 0 0 5.19 3a5.9 5.9 0 0 0 3-.82a6 6 0 0 0 2.16-8.2l-32.07-55h62.11l12.63 21.66A46 46 0 1 0 208 114M82 160a34 34 0 1 1-19.13-30.57l-19.72 27a6 6 0 0 0 9.7 7.08l19.7-27A33.88 33.88 0 0 1 82 160m126 34a34 34 0 0 1-22-59.86L202.82 163a6 6 0 0 0 5.19 3a5.9 5.9 0 0 0 3-.82a6 6 0 0 0 2.16-8.2l-16.86-28.91A34 34 0 1 1 208 194"></svg:path>`,
})
export class PhBicycleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinaryLightIcon],svg[ph-binary-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M121.75 41.21C115.22 31.26 105.62 26 94 26s-21.22 5.26-27.75 15.21C60.93 49.31 58 60.25 58 72s2.93 22.69 8.25 30.79C72.78 112.74 82.38 118 94 118s21.22-5.26 27.75-15.21c5.32-8.1 8.25-19 8.25-30.79s-2.93-22.69-8.25-30.79M94 106c-19 0-24-21.37-24-34s5-34 24-34s24 21.37 24 34s-5 34-24 34m99.75 47.21C187.22 143.26 177.62 138 166 138s-21.22 5.26-27.75 15.21c-5.32 8.1-8.25 19-8.25 30.79s2.93 22.69 8.25 30.79c6.53 10 16.13 15.21 27.75 15.21s21.22-5.26 27.75-15.21c5.32-8.1 8.25-19 8.25-30.79s-2.93-22.69-8.25-30.79M166 218c-18.95 0-24-21.37-24-34s5.05-34 24-34s24 21.37 24 34s-5 34-24 34M146.75 48.25a6 6 0 0 1 2.34-8.16l24-13.34A6 6 0 0 1 182 32v80a6 6 0 0 1-12 0V42.2l-15.09 8.38a6 6 0 0 1-8.16-2.33M102 144v80a6 6 0 0 1-12 0v-69.8l-15.09 8.38a6 6 0 1 1-5.82-10.49l24-13.34A6 6 0 0 1 102 144"></svg:path>`,
})
export class PhBinaryLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinocularsLightIcon],svg[ph-binoculars-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233 147.24L191.43 52.6a6 6 0 0 0-1.25-1.83a30 30 0 0 0-42.42 0A6 6 0 0 0 146 55v27h-36V55a6 6 0 0 0-1.76-4.25a30 30 0 0 0-42.42 0a6 6 0 0 0-1.25 1.83L23 147.24A46 46 0 1 0 110 168V94h36v74a46 46 0 1 0 87-20.76M64 202a34 34 0 1 1 34-34a34 34 0 0 1-34 34m0-80a45.8 45.8 0 0 0-18.55 3.92l29.61-67.38A18 18 0 0 1 98 57.71V137a45.9 45.9 0 0 0-34-15m94-64.28a18 18 0 0 1 22.94.83l29.61 67.37A45.9 45.9 0 0 0 158 137ZM192 202a34 34 0 1 1 34-34a34 34 0 0 1-34 34"></svg:path>`,
})
export class PhBinocularsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBiohazardLightIcon],svg[ph-biohazard-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184.35 106.18a62 62 0 0 0-4-7.33a58 58 0 0 0-25.58-76.38a6 6 0 1 0-5.54 10.64a46 46 0 0 1 22.51 55a61.89 61.89 0 0 0-87.5 0a46 46 0 0 1 22.53-55a6 6 0 0 0-5.54-10.64a58 58 0 0 0-25.59 76.4a61 61 0 0 0-4 7.31A58.06 58.06 0 0 0 18 164a6 6 0 0 0 12 0a46.08 46.08 0 0 1 37.43-45.19a61.95 61.95 0 0 0 45 73.21a46 46 0 0 1-61.2 10.75a6 6 0 0 0-6.48 10.11a58 58 0 0 0 80.9-18.94c.77 0 1.55.06 2.34.06s1.57 0 2.34-.06a58 58 0 0 0 80.9 18.94a6 6 0 0 0-6.48-10.11A46 46 0 0 1 143.56 192a61.95 61.95 0 0 0 45-73.21A46.08 46.08 0 0 1 226 164a6 6 0 0 0 12 0a58.06 58.06 0 0 0-53.65-57.82M128 82a49.87 49.87 0 0 1 38.09 17.67a46 46 0 0 1-76.19 0A49.86 49.86 0 0 1 128 82m3.8 49.79a57 57 0 0 0-3.8 6.56a58 58 0 0 0-3.79-6.56c1.25.08 2.51.13 3.78.13s2.55-.05 3.81-.13M78 132a49.7 49.7 0 0 1 2-13.82A46.06 46.06 0 0 1 122 164a45.6 45.6 0 0 1-3.32 17.12A50.07 50.07 0 0 1 78 132m59.32 49.12A45.6 45.6 0 0 1 134 164a46.06 46.06 0 0 1 42-45.82a50 50 0 0 1-38.72 62.94Z"></svg:path>`,
})
export class PhBiohazardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBirdLightIcon],svg[ph-bird-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 68a10 10 0 1 1-10-10a10 10 0 0 1 10 10m64 12a6 6 0 0 1-2.67 5L214 99.21V120a102.12 102.12 0 0 1-102 102H24a14 14 0 0 1-10.93-22.75l.07-.09L98 97.35V76.89c0-32.32 25.89-58.74 57.72-58.89h.28a58 58 0 0 1 55.51 41.13L235.33 75a6 6 0 0 1 2.67 5m-16.82 0L203 67.88a6 6 0 0 1-2.48-3.48A46 46 0 0 0 156 30h-.23C130.53 30.12 110 51.16 110 76.89v22.63a6 6 0 0 1-1.39 3.85L22.43 206.78A2 2 0 0 0 24 210h27.86l71.53-85.84a6 6 0 0 1 9.22 7.68L67.48 210H112a90.1 90.1 0 0 0 90-90V96a6 6 0 0 1 2.67-5Z"></svg:path>`,
})
export class PhBirdLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBlueprintLightIcon],svg[ph-blueprint-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 58H70V40a6 6 0 0 0-6-6H48a30 30 0 0 0-30 30v112a30 30 0 0 0 30 30h184a6 6 0 0 0 6-6V64a6 6 0 0 0-6-6M30 64a18 18 0 0 1 18-18h10v100H48a29.87 29.87 0 0 0-18 6Zm196 130H48a18 18 0 0 1 0-36h16a6 6 0 0 0 6-6V70h156Zm-122-56a6 6 0 0 0 0 12h18v10a6 6 0 0 0 12 0v-10h28v10a6 6 0 0 0 12 0v-10h18a6 6 0 0 0 0-12h-18v-20h18a6 6 0 0 0 0-12h-18V96a6 6 0 0 0-12 0v10h-28V96a6 6 0 0 0-12 0v10h-18a6 6 0 0 0 0 12h18v20Zm30-20h28v20h-28Z"></svg:path>`,
})
export class PhBlueprintLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothConnectedLightIcon],svg[ph-bluetooth-connected-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M195.6 171.2L138 128l57.6-43.2a6 6 0 0 0 0-9.6l-64-48A6 6 0 0 0 122 32v84L67.6 75.2a6 6 0 0 0-7.2 9.6L118 128l-57.6 43.2a6 6 0 0 0 7.2 9.6L122 140v84a6 6 0 0 0 9.6 4.8l64-48a6 6 0 0 0 0-9.6M134 44l48 36l-48 36Zm0 168v-72l48 36Zm-74-74a10 10 0 1 1 10-10a10 10 0 0 1-10 10m154-10a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhBluetoothConnectedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothLightIcon],svg[ph-bluetooth-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M195.6 171.2L138 128l57.6-43.2a6 6 0 0 0 0-9.6l-64-48A6 6 0 0 0 122 32v84L67.6 75.2a6 6 0 0 0-7.2 9.6L118 128l-57.6 43.2a6 6 0 1 0 7.2 9.6L122 140v84a6 6 0 0 0 9.6 4.8l64-48a6 6 0 0 0 0-9.6M134 44l48 36l-48 36Zm0 168v-72l48 36Z"></svg:path>`,
})
export class PhBluetoothLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothSlashLightIcon],svg[ph-bluetooth-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.44 212l-160-176a6 6 0 0 0-8.88 8l72.32 79.55L60.4 171.2a6 6 0 0 0 7.2 9.6L122 140v84a6 6 0 0 0 9.6 4.8l52.28-39.21L211.56 220a6 6 0 0 0 8.88-8.08ZM134 212v-72l15.09 11.31l26.68 29.36ZM122 71.63V32a6 6 0 0 1 9.6-4.8l64 48a6 6 0 0 1 0 9.6L162.07 110a6 6 0 0 1-7.2-9.6L182 80l-48-36v27.63a6 6 0 0 1-12 0"></svg:path>`,
})
export class PhBluetoothSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothXLightIcon],svg[ph-bluetooth-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M179.6 171.2L122 128l25.6-19.2a6 6 0 1 0-7.2-9.6L118 116V44l22.4 16.8a6 6 0 1 0 7.2-9.6l-32-24A6 6 0 0 0 106 32v84L51.6 75.2a6 6 0 0 0-7.2 9.6L102 128l-57.6 43.2a6 6 0 0 0 7.2 9.6L106 140v84a6 6 0 0 0 9.6 4.8l64-48a6 6 0 0 0 0-9.6M118 212v-72l48 36ZM236.24 99.76a6 6 0 1 1-8.48 8.48L208 88.49l-19.76 19.75a6 6 0 0 1-8.48-8.48L199.51 80l-19.75-19.76a6 6 0 0 1 8.48-8.48L208 71.51l19.76-19.75a6 6 0 0 1 8.48 8.48L216.49 80Z"></svg:path>`,
})
export class PhBluetoothXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoatLightIcon],svg[ph-boat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.43 112.48l-14.43-4.8V56a14 14 0 0 0-14-14h-58V24a6 6 0 0 0-12 0v18H64a14 14 0 0 0-14 14v51.68l-14.43 4.8A14 14 0 0 0 26 125.77V152c0 60 96.44 84.79 100.54 85.82a6 6 0 0 0 2.92 0a235.4 235.4 0 0 0 49.4-19.54C212.32 200.15 230 177.24 230 152v-26.23a14 14 0 0 0-9.57-13.29M62 56a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v47.68l-64.1-21.37a6 6 0 0 0-3.8 0L62 103.68Zm156 96c0 47.1-78.28 70.54-90 73.79c-11.73-3.25-90-26.69-90-73.79v-26.23a2 2 0 0 1 1.37-1.9L122 96.32V168a6 6 0 0 0 12 0V96.32l82.63 27.55a2 2 0 0 1 1.37 1.9Z"></svg:path>`,
})
export class PhBoatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBombLightIcon],svg[ph-bomb-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 34a6 6 0 0 0-6 6a54.1 54.1 0 0 1-3.57 17.77C234.06 68.69 226.72 74 216 74c-12.91 0-21.76-12.38-31.12-25.49C174.67 34.21 163.09 18 144 18c-15.74 0-27.35 8.22-33.57 23.77a65.4 65.4 0 0 0-4 16.23H88a14 14 0 0 0-14 14v10.83A86 86 0 0 0 112 246h1.55A86 86 0 0 0 150 82.83V72a14 14 0 0 0-14-14h-17.47a51.4 51.4 0 0 1 3.15-12c4.38-10.74 11.69-16 22.32-16c12.91 0 21.75 12.38 31.12 25.49C185.33 69.79 196.91 86 216 86c15.74 0 27.35-8.22 33.57-23.77A66.5 66.5 0 0 0 254 40a6 6 0 0 0-6-6M138 72v14.66a6 6 0 0 0 3.6 5.49a74 74 0 1 1-59.2 0a6 6 0 0 0 3.6-5.49V72a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2m-33 130.08a6 6 0 0 1-1 11.92a7 7 0 0 1-1-.08A55.48 55.48 0 0 1 58.08 169a6 6 0 1 1 11.84-2A43.29 43.29 0 0 0 105 202.08"></svg:path>`,
})
export class PhBombLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoneLightIcon],svg[ph-bone-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.14 62.17A33.88 33.88 0 0 0 206 50a34 34 0 1 0-62.81 20a2 2 0 0 1-.23 2.54L72.56 143a2.06 2.06 0 0 1-2.55.23A34 34 0 1 0 50 206a34 34 0 1 0 62.81-20a2 2 0 0 1 .23-2.54l70.4-70.4a2 2 0 0 1 2.54-.23a34 34 0 0 0 44.15-50.65Zm-9.54 36.31a22 22 0 0 1-28.24 4.17a14 14 0 0 0-17.4 1.92L104.57 175a14 14 0 0 0-1.92 17.4a22 22 0 1 1-40.41 8.26a6 6 0 0 0-5.93-6.93a7 7 0 0 0-.93.07a22 22 0 1 1 8.26-40.41A14 14 0 0 0 81 151.43L151.43 81a14 14 0 0 0 1.92-17.4a22 22 0 1 1 40.41-8.26a6 6 0 0 0 6.86 6.86a22 22 0 0 1 20 36.24Z"></svg:path>`,
})
export class PhBoneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookBookmarkLightIcon],svg[ph-book-bookmark-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 26H72a30 30 0 0 0-30 30v168a6 6 0 0 0 6 6h144a6 6 0 0 0 0-12H54v-2a18 18 0 0 1 18-18h136a6 6 0 0 0 6-6V32a6 6 0 0 0-6-6m-90 12h52v78l-22.41-16.8a6 6 0 0 0-7.2 0L118 116Zm84 148H72a29.87 29.87 0 0 0-18 6V56a18 18 0 0 1 18-18h34v90a6 6 0 0 0 9.6 4.8l28.4-21.3l28.41 21.3A6 6 0 0 0 182 128V38h20Z"></svg:path>`,
})
export class PhBookBookmarkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookLightIcon],svg[ph-book-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 26H72a30 30 0 0 0-30 30v168a6 6 0 0 0 6 6h144a6 6 0 0 0 0-12H54v-2a18 18 0 0 1 18-18h136a6 6 0 0 0 6-6V32a6 6 0 0 0-6-6m-6 160H72a29.87 29.87 0 0 0-18 6V56a18 18 0 0 1 18-18h130Z"></svg:path>`,
})
export class PhBookLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenLightIcon],svg[ph-book-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 50h-72a38 38 0 0 0-32 17.55A38 38 0 0 0 96 50H24a6 6 0 0 0-6 6v144a6 6 0 0 0 6 6h72a26 26 0 0 1 26 26a6 6 0 0 0 12 0a26 26 0 0 1 26-26h72a6 6 0 0 0 6-6V56a6 6 0 0 0-6-6M96 194H30V62h66a26 26 0 0 1 26 26v116.31A37.86 37.86 0 0 0 96 194m130 0h-66a37.87 37.87 0 0 0-26 10.32V88a26 26 0 0 1 26-26h66Z"></svg:path>`,
})
export class PhBookOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenTextLightIcon],svg[ph-book-open-text-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 50h-72a38 38 0 0 0-32 17.55A38 38 0 0 0 96 50H24a6 6 0 0 0-6 6v144a6 6 0 0 0 6 6h72a26 26 0 0 1 26 26a6 6 0 0 0 12 0a26 26 0 0 1 26-26h72a6 6 0 0 0 6-6V56a6 6 0 0 0-6-6M96 194H30V62h66a26 26 0 0 1 26 26v116.31A37.86 37.86 0 0 0 96 194m130 0h-66a37.87 37.87 0 0 0-26 10.32V88a26 26 0 0 1 26-26h66ZM160 90h40a6 6 0 0 1 0 12h-40a6 6 0 0 1 0-12m46 38a6 6 0 0 1-6 6h-40a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6h-40a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhBookOpenTextLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenUserLightIcon],svg[ph-book-open-user-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 74h-72a38 38 0 0 0-32 17.55A38 38 0 0 0 96 74H24a6 6 0 0 0-6 6v120a6 6 0 0 0 6 6h72a26 26 0 0 1 26 26a6 6 0 0 0 12 0a26 26 0 0 1 26-26h72a6 6 0 0 0 6-6V80a6 6 0 0 0-6-6M96 194H30V86h66a26 26 0 0 1 26 26v92.31A37.86 37.86 0 0 0 96 194m130 0h-66a37.83 37.83 0 0 0-26 10.33V112a26 26 0 0 1 26-26h66ZM91.2 44.4a46 46 0 0 1 73.6 0a6 6 0 1 1-9.6 7.2a34 34 0 0 0-54.4 0a6 6 0 1 1-9.6-7.2"></svg:path>`,
})
export class PhBookOpenUserLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkLightIcon],svg[ph-bookmark-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 34H72a14 14 0 0 0-14 14v176a6 6 0 0 0 9.18 5.09l60.81-38l60.83 38A6 6 0 0 0 198 224V48a14 14 0 0 0-14-14M72 46h112a2 2 0 0 1 2 2v117.18l-54.83-34.27a6 6 0 0 0-6.36 0L70 165.17V48a2 2 0 0 1 2-2m59.17 132.91a6 6 0 0 0-6.36 0L70 213.17v-33.84l58-36.25l58 36.25v33.84Z"></svg:path>`,
})
export class PhBookmarkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkSimpleLightIcon],svg[ph-bookmark-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 34H72a14 14 0 0 0-14 14v176a6 6 0 0 0 9.18 5.09l60.81-38l60.83 38A6 6 0 0 0 198 224V48a14 14 0 0 0-14-14m2 179.17l-54.83-34.26a6 6 0 0 0-6.36 0L70 213.17V48a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhBookmarkSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksLightIcon],svg[ph-bookmarks-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 26H96a14 14 0 0 0-14 14v18H64a14 14 0 0 0-14 14v152a6 6 0 0 0 9.49 4.88L112 191.37l52.52 37.51A6 6 0 0 0 174 224v-43.2l22.51 16.08A6 6 0 0 0 206 192V40a14 14 0 0 0-14-14m-30 186.34l-46.52-33.22a6 6 0 0 0-7 0L62 212.34V72a2 2 0 0 1 2-2h96a2 2 0 0 1 2 2Zm32-32l-20-14.28V72a14 14 0 0 0-14-14H94V40a2 2 0 0 1 2-2h96a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhBookmarksLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksSimpleLightIcon],svg[ph-bookmarks-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 58H64a14 14 0 0 0-14 14v152a6 6 0 0 0 9.49 4.88L112 191.37l52.52 37.51A6 6 0 0 0 174 224V72a14 14 0 0 0-14-14m2 154.34l-46.52-33.22a6 6 0 0 0-7 0L62 212.34V72a2 2 0 0 1 2-2h96a2 2 0 0 1 2 2ZM206 40v152a6 6 0 0 1-12 0V40a2 2 0 0 0-2-2H88a6 6 0 0 1 0-12h104a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhBookmarksSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBooksLightIcon],svg[ph-books-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 34H56a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M54 78h52v100H54Zm2-32h48a2 2 0 0 1 2 2v18H54V48a2 2 0 0 1 2-2m48 164H56a2 2 0 0 1-2-2v-18h52v18a2 2 0 0 1-2 2m125.7-15L196.51 37.16a14 14 0 0 0-16.63-10.85l-46.81 10.06A14.09 14.09 0 0 0 122.3 53l33.19 157.81a14 14 0 0 0 6.1 8.9a13.85 13.85 0 0 0 7.57 2.26a13.6 13.6 0 0 0 3-.32l46.81-10.05A14.09 14.09 0 0 0 229.7 195m-82.81-83.32l50.73-10.9l14.12 67.16L161 178.81Zm-6.63-31.56L191 69.19L195.15 89l-50.73 10.9Zm-4.66-32l46.8-10.05a2 2 0 0 1 .42 0a1.9 1.9 0 0 1 1.05.32a2 2 0 0 1 .89 1.31l3.75 17.82l-50.72 10.82l-3.74-17.78a2.07 2.07 0 0 1 1.55-2.46Zm80.81 151.8L169.6 210a1.92 1.92 0 0 1-1.47-.27a2 2 0 0 1-.89-1.31l-3.75-17.82l50.72-10.9l3.79 17.73a2.07 2.07 0 0 1-1.59 2.47Z"></svg:path>`,
})
export class PhBooksLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBootLightIcon],svg[ph-boot-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 114h-34V56a14 14 0 0 0-14-14H32a6 6 0 0 0-5.6 8.15c9 23.44 11.13 76.92-.17 116.19A6.2 6.2 0 0 0 26 168v32a14 14 0 0 0 14 14h26.11a14 14 0 0 0 6.26-1.48L85 206.21a2 2 0 0 1 .9-.21h16.22a2 2 0 0 1 .9.21l12.62 6.31a14 14 0 0 0 6.26 1.48h28.22a14 14 0 0 0 6.26-1.48l12.62-6.31a2 2 0 0 1 .9-.21h16.22a2 2 0 0 1 .9.21l12.62 6.31a14 14 0 0 0 6.26 1.48H232a14 14 0 0 0 14-14v-32a54.06 54.06 0 0 0-54-54M40.27 54H144a2 2 0 0 1 2 2v26h-34a6 6 0 0 0 0 12h34v20h-34a6 6 0 0 0 0 12h80a42.05 42.05 0 0 1 41.56 36H39.75c7.36-31.56 8.96-77.69.52-108M234 200a2 2 0 0 1-2 2h-26.11a2 2 0 0 1-.9-.21l-12.62-6.31a14 14 0 0 0-6.26-1.48h-16.22a14 14 0 0 0-6.26 1.48L151 201.79a2 2 0 0 1-.9.21h-28.21a2 2 0 0 1-.9-.21l-12.62-6.31a14 14 0 0 0-6.26-1.48H85.89a14 14 0 0 0-6.26 1.48L67 201.79a2 2 0 0 1-.9.21H40a2 2 0 0 1-2-2v-26h196Z"></svg:path>`,
})
export class PhBootLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoulesLightIcon],svg[ph-boules-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m59.22 34.29L60.29 187.22a90.2 90.2 0 0 1-12.53-18.49l121-121a90.2 90.2 0 0 1 18.46 12.56m8.49 8.49a90.2 90.2 0 0 1 12.53 18.49l-121 121a90.2 90.2 0 0 1-18.49-12.53ZM128 38a89.7 89.7 0 0 1 28.79 4.72L42.72 156.79A90 90 0 0 1 128 38m0 180a89.7 89.7 0 0 1-28.79-4.72L213.28 99.21A90 90 0 0 1 128 218"></svg:path>`,
})
export class PhBoulesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoundingBoxLightIcon],svg[ph-bounding-box-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 94a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v10H94V48a14 14 0 0 0-14-14H48a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h10v68H48a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-10h68v10a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-32a14 14 0 0 0-14-14h-10V94Zm-34-46a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2ZM46 80V48a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2m36 128a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-32a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2Zm128-32v32a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2v-32a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2m-24-14h-10a14 14 0 0 0-14 14v10H94v-10a14 14 0 0 0-14-14H70V94h10a14 14 0 0 0 14-14V70h68v10a14 14 0 0 0 14 14h10Z"></svg:path>`,
})
export class PhBoundingBoxLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlFoodLightIcon],svg[ph-bowl-food-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 106h-10.23a86 86 0 0 0-171.54 0H32a6 6 0 0 0-6 6a102.35 102.35 0 0 0 56 91.06V208a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14v-4.94A102.35 102.35 0 0 0 230 112a6 6 0 0 0-6-6m-49.76-51.71a74 74 0 0 1 8.15 7.6A85.9 85.9 0 0 0 130.84 106h-33.5A74.24 74.24 0 0 1 168 54c2.08 0 4.17.11 6.24.29m16.06 17.85A73.5 73.5 0 0 1 201.74 106h-57.26a73.9 73.9 0 0 1 45.82-33.86M128 38a73.7 73.7 0 0 1 26.8 5a86.32 86.32 0 0 0-69.94 63h-30.6A74.09 74.09 0 0 1 128 38m37.5 155.84a6 6 0 0 0-3.5 5.46v8.7a2 2 0 0 1-2 2H96a2 2 0 0 1-2-2v-8.7a6 6 0 0 0-3.5-5.46A90.35 90.35 0 0 1 38.2 118h179.6a90.35 90.35 0 0 1-52.3 75.84"></svg:path>`,
})
export class PhBowlFoodLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlSteamLightIcon],svg[ph-bowl-steam-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 114H32a6 6 0 0 0-6 6a102.35 102.35 0 0 0 56 91.06V216a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14v-4.94A102.35 102.35 0 0 0 230 120a6 6 0 0 0-6-6m-58.5 87.84a6 6 0 0 0-3.5 5.45V216a2 2 0 0 1-2 2H96a2 2 0 0 1-2-2v-8.71a6 6 0 0 0-3.5-5.45A90.35 90.35 0 0 1 38.2 126h179.6a90.35 90.35 0 0 1-52.3 75.84M83.32 56.24c5.05-6.28 7.41-11.73 6.48-15c-.72-2.53-3.64-3.57-3.67-3.58A6 6 0 0 1 88 26a5.8 5.8 0 0 1 1.78.27c.91.28 8.9 3 11.48 11.44c2.26 7.39-.63 16.15-8.58 26.05c-5.05 6.28-7.41 11.73-6.48 15c.72 2.53 3.64 3.57 3.67 3.58A6 6 0 0 1 88 94a5.8 5.8 0 0 1-1.78-.27c-.91-.28-8.9-3-11.48-11.44c-2.26-7.39.63-16.15 8.58-26.05m40 0c5.05-6.28 7.41-11.73 6.48-15c-.72-2.53-3.64-3.57-3.67-3.58A6 6 0 0 1 128 26a5.8 5.8 0 0 1 1.78.27c.91.28 8.9 3 11.48 11.44c2.26 7.39-.63 16.15-8.58 26.05c-5.05 6.28-7.41 11.73-6.48 15c.72 2.53 3.64 3.57 3.67 3.58A6 6 0 0 1 128 94a5.8 5.8 0 0 1-1.78-.27c-.91-.28-8.9-3-11.48-11.44c-2.26-7.39.63-16.15 8.58-26.05m40 0c5.05-6.28 7.41-11.73 6.48-15c-.72-2.53-3.64-3.57-3.67-3.58A6 6 0 0 1 168 26a5.8 5.8 0 0 1 1.78.27c.91.28 8.9 3 11.48 11.44c2.26 7.39-.63 16.15-8.58 26.05c-5.05 6.28-7.41 11.73-6.48 15c.72 2.53 3.64 3.57 3.67 3.58A6 6 0 0 1 168 94a5.8 5.8 0 0 1-1.78-.27c-.91-.28-8.9-3-11.48-11.44c-2.26-7.39.63-16.15 8.58-26.05"></svg:path>`,
})
export class PhBowlSteamLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlingBallLightIcon],svg[ph-bowling-ball-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m14-102a10 10 0 1 1-10-10a10 10 0 0 1 10 10m22-14a10 10 0 1 1 10-10a10 10 0 0 1-10 10m18 30a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhBowlingBallLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowDownLightIcon],svg[ph-box-arrow-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.37 69.32l-16-32A6 6 0 0 0 200 34H56a6 6 0 0 0-5.37 3.32l-16 32A6.1 6.1 0 0 0 34 72v136a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V72a6.1 6.1 0 0 0-.63-2.68M59.71 46h136.58l10 20H49.71ZM208 210H48a2 2 0 0 1-2-2V78h164v130a2 2 0 0 1-2 2m-43.76-62.24a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L122 169.51V104a6 6 0 0 1 12 0v65.51l21.76-21.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhBoxArrowDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowUpLightIcon],svg[ph-box-arrow-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.37 69.32l-16-32A6 6 0 0 0 200 34H56a6 6 0 0 0-5.37 3.32l-16 32A6.1 6.1 0 0 0 34 72v136a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V72a6.1 6.1 0 0 0-.63-2.68M59.71 46h136.58l10 20H49.71ZM208 210H48a2 2 0 0 1-2-2V78h164v130a2 2 0 0 1-2 2m-43.76-78.24a6 6 0 1 1-8.48 8.48L134 118.49V184a6 6 0 0 1-12 0v-65.51l-21.76 21.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0Z"></svg:path>`,
})
export class PhBoxArrowUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxingGloveLightIcon],svg[ph-boxing-glove-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 18h-48a54.06 54.06 0 0 0-54 54v2H56a30 30 0 0 0-30 30v29.19a14 14 0 0 0 3.07 8.75a6 6 0 0 0 .47.52l36.46 36V216a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-39.16l15.46-54.11a14 14 0 0 0 .54-3.85V72a54.06 54.06 0 0 0-54-54m42 100.88a2 2 0 0 1-.08.55l-15.69 54.92A6 6 0 0 0 194 176v40a2 2 0 0 1-2 2H80a2 2 0 0 1-2-2v-40a6 6 0 0 0-1.78-4.27L38.3 134.25a2 2 0 0 1-.3-1.06V104a18 18 0 0 1 18-18h10v18a6 6 0 0 0 12 0V72a42 42 0 0 1 42-42h48a42 42 0 0 1 42 42Zm-39.32 46.49L149.42 176l21.26 10.63a6 6 0 0 1-5.36 10.74L136 182.71l-29.32 14.66a6 6 0 0 1-5.36-10.74L122.58 176l-21.26-10.63a6 6 0 0 1 5.36-10.74L136 169.29l29.32-14.66a6 6 0 1 1 5.36 10.74"></svg:path>`,
})
export class PhBoxingGloveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsAngleLightIcon],svg[ph-brackets-angle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85.06 43.22L31.11 128l54 84.78a6 6 0 0 1-1.84 8.28a6 6 0 0 1-8.28-1.84l-56-88a6 6 0 0 1 0-6.44l56-88a6 6 0 0 1 10.12 6.44Zm152 81.56l-56-88a6 6 0 1 0-10.12 6.44L224.89 128l-53.95 84.78a6 6 0 0 0 1.84 8.28a6 6 0 0 0 8.28-1.84l56-88a6 6 0 0 0 0-6.44"></svg:path>`,
})
export class PhBracketsAngleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsCurlyLightIcon],svg[ph-brackets-curly-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.91 128a27.7 27.7 0 0 1 9.49 11.13C54 148.62 54 160.51 54 172c0 24.27 1.21 38 26 38a6 6 0 0 1 0 12c-16.88 0-27.81-5.6-33.4-17.13C42 195.38 42 183.49 42 172c0-24.27-1.21-38-26-38a6 6 0 0 1 0-12c24.79 0 26-13.73 26-38c0-11.49 0-23.38 4.6-32.87C52.19 39.6 63.12 34 80 34a6 6 0 0 1 0 12c-24.79 0-26 13.73-26 38c0 11.49 0 23.38-4.6 32.87A27.7 27.7 0 0 1 39.91 128M240 122c-24.79 0-26-13.73-26-38c0-11.49 0-23.38-4.6-32.87C203.81 39.6 192.88 34 176 34a6 6 0 0 0 0 12c24.79 0 26 13.73 26 38c0 11.49 0 23.38 4.6 32.87a27.7 27.7 0 0 0 9.49 11.13a27.7 27.7 0 0 0-9.49 11.13c-4.6 9.49-4.6 21.38-4.6 32.87c0 24.27-1.21 38-26 38a6 6 0 0 0 0 12c16.88 0 27.81-5.6 33.4-17.13c4.6-9.49 4.6-21.38 4.6-32.87c0-24.27 1.21-38 26-38a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhBracketsCurlyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsRoundLightIcon],svg[ph-brackets-round-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.52 64C44.23 81.46 38 103 38 128s6.23 46.54 18.52 64c9.17 13 18.49 18.81 18.59 18.87a6 6 0 0 1-6.2 10.27C67.16 220.09 26 194.63 26 128s41.16-92.09 42.91-93.14a6 6 0 0 1 6.2 10.27C75 45.19 65.69 51 56.52 64m130.57-29.14a6 6 0 0 0-6.2 10.27c.1.06 9.42 5.84 18.59 18.87C211.77 81.46 218 103 218 128s-6.23 46.54-18.52 64c-9.17 13-18.49 18.81-18.57 18.85a6 6 0 1 0 6.18 10.29c1.75-1 42.91-26.51 42.91-93.14s-41.16-92.09-42.91-93.14"></svg:path>`,
})
export class PhBracketsRoundLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsSquareLightIcon],svg[ph-brackets-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 46v164h34a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6V40a6 6 0 0 1 6-6h40a6 6 0 0 1 0 12Zm170-12h-40a6 6 0 0 0 0 12h34v164h-34a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6V40a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhBracketsSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrainLightIcon],svg[ph-brain-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 124a54.13 54.13 0 0 0-32-49.33V72a46 46 0 0 0-86-22.67A46 46 0 0 0 42 72v2.67a54 54 0 0 0 0 98.63v2.7a46 46 0 0 0 86 22.67A46 46 0 0 0 214 176v-2.7a54.07 54.07 0 0 0 32-49.3M88 210a34 34 0 0 1-34-32.94a53.7 53.7 0 0 0 10 .94h8a6 6 0 0 0 0-12h-8a42 42 0 0 1-14-81.61a6 6 0 0 0 4-5.66V72a34 34 0 0 1 68 0v73.05A45.9 45.9 0 0 0 88 130a6 6 0 0 0 0 12a34 34 0 0 1 0 68m104-44h-8a6 6 0 0 0 0 12h8a53.7 53.7 0 0 0 10-.94A34 34 0 1 1 168 142a6 6 0 0 0 0-12a45.9 45.9 0 0 0-34 15.05V72a34 34 0 0 1 68 0v6.73a6 6 0 0 0 4 5.66A42 42 0 0 1 192 166m14-54a6 6 0 0 1-6 6h-4a34 34 0 0 1-34-34v-4a6 6 0 0 1 12 0v4a22 22 0 0 0 22 22h4a6 6 0 0 1 6 6m-146 6h-4a6 6 0 0 1 0-12h4a22 22 0 0 0 22-22v-4a6 6 0 0 1 12 0v4a34 34 0 0 1-34 34"></svg:path>`,
})
export class PhBrainLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrandyLightIcon],svg[ph-brandy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 88a93.64 93.64 0 0 0-15.21-51.28a6 6 0 0 0-5-2.72H54.23a6 6 0 0 0-5 2.72A93.64 93.64 0 0 0 34 88a94.1 94.1 0 0 0 88 93.8V218H88a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12h-34v-36.2A94.1 94.1 0 0 0 222 88M57.56 46h140.88a81.6 81.6 0 0 1 11.34 36H46.22a81.6 81.6 0 0 1 11.34-36M128 170a82.09 82.09 0 0 1-81.76-76h163.52A82.09 82.09 0 0 1 128 170"></svg:path>`,
})
export class PhBrandyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBreadLightIcon],svg[ph-bread-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 80a38 38 0 0 0-38-38H48a38 38 0 0 0-14 73.32V200a14 14 0 0 0 14 14h152a14 14 0 0 0 14-14v-84.68A38.07 38.07 0 0 0 238 80M46 200v-82h2a6 6 0 0 0 0-12a26 26 0 0 1 0-52h96a26 26 0 0 1 0 52a6 6 0 0 0 0 12h2v82a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2m154-94a6 6 0 0 0 0 12h2v82a2 2 0 0 1-2 2h-42.16a15 15 0 0 0 .16-2v-84.68A38 38 0 0 0 171.68 54H200a26 26 0 0 1 0 52"></svg:path>`,
})
export class PhBreadLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBridgeLightIcon],svg[ph-bridge-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 162h-34V95.28a69.8 69.8 0 0 0 31.75 25.63a6 6 0 1 0 4.5-11.12A57.8 57.8 0 0 1 198 56a6 6 0 0 0-12 0a58 58 0 0 1-116 0a6 6 0 0 0-12 0a57.8 57.8 0 0 1-36.25 53.79a6 6 0 1 0 4.5 11.12A69.8 69.8 0 0 0 58 95.28V162H24a6 6 0 0 0 0 12h34v26a6 6 0 0 0 12 0v-26h116v26a6 6 0 0 0 12 0v-26h34a6 6 0 0 0 0-12m-86-38.35V162h-36v-38.35a70.1 70.1 0 0 0 36 0m-76-28.5a70.5 70.5 0 0 0 28 24.09V162H70ZM158 162v-42.76a70.5 70.5 0 0 0 28-24.09V162Z"></svg:path>`,
})
export class PhBridgeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseLightIcon],svg[ph-briefcase-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106 112a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12h-32a6 6 0 0 1-6-6m124-40v128a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14V72a14 14 0 0 1 14-14h42V48a22 22 0 0 1 22-22h48a22 22 0 0 1 22 22v10h42a14 14 0 0 1 14 14M94 58h68V48a10 10 0 0 0-10-10h-48a10 10 0 0 0-10 10ZM38 72v42.79A186 186 0 0 0 128 138a185.9 185.9 0 0 0 90-23.22V72a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2m180 128v-71.63A198.1 198.1 0 0 1 128 150a198.05 198.05 0 0 1-90-21.62V200a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2"></svg:path>`,
})
export class PhBriefcaseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseMetalLightIcon],svg[ph-briefcase-metal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 58h-42V48a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V72a14 14 0 0 0-14-14M38 110h180v52H38Zm56-62a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94ZM40 70h176a2 2 0 0 1 2 2v26H38V72a2 2 0 0 1 2-2m176 132H40a2 2 0 0 1-2-2v-26h180v26a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhBriefcaseMetalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseSimpleLightIcon],svg[ph-briefcase-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M216.008 66H174V56a22.025 22.025 0 0 0-22-22h-48a22.025 22.025 0 0 0-22 22v10H40.008a14.016 14.016 0 0 0-14 14v128a14.016 14.016 0 0 0 14 14h176a14.016 14.016 0 0 0 14-14V80a14.016 14.016 0 0 0-14-14zM94 56a10.011 10.011 0 0 1 10-10h48a10.011 10.011 0 0 1 10 10v10H94zm124.008 152a2.003 2.003 0 0 1-2 2h-176a2.003 2.003 0 0 1-2-2V80a2.003 2.003 0 0 1 2-2h176a2.003 2.003 0 0 1 2 2z" fill="currentColor"></svg:path>`,
})
export class PhBriefcaseSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroadcastLightIcon],svg[ph-broadcast-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 90a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m78-26a77.74 77.74 0 0 1-19.86 52a6 6 0 0 1-8.94-8a65.93 65.93 0 0 0 0-88a6 6 0 1 1 8.94-8A77.74 77.74 0 0 1 206 128M67.18 102.31A65.93 65.93 0 0 0 78.8 172a6 6 0 0 1-.47 8.47a6 6 0 0 1-8.47-.47a77.93 77.93 0 0 1 0-104a6 6 0 1 1 8.94 8a66.2 66.2 0 0 0-11.62 18.31M246 128a117.7 117.7 0 0 1-33.71 82.58a6 6 0 0 1-8.58-8.4a105.88 105.88 0 0 0 0-148.36a6 6 0 0 1 8.58-8.4A117.7 117.7 0 0 1 246 128M52.29 202.18a6 6 0 0 1-8.58 8.4a117.92 117.92 0 0 1 0-165.16a6 6 0 1 1 8.58 8.4a105.88 105.88 0 0 0 0 148.36"></svg:path>`,
})
export class PhBroadcastLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroomLightIcon],svg[ph-broom-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.62 218.6C211.35 207.29 198 183 198 152v-17.3a14 14 0 0 0-8.82-13l-24.89-9.83a10 10 0 0 1-5.59-13L180 45.9a26 26 0 0 0-15-34.33c-12.95-4.83-27.88 1.84-33.31 15l-21 53.11a10 10 0 0 1-13 5.61L72.37 75a13.9 13.9 0 0 0-15.2 3.19C36.49 99.42 26 124.26 26 152a109.53 109.53 0 0 0 30.62 76.16A6 6 0 0 0 61 230h171a6 6 0 0 0 2.62-11.4M65.77 86.52a2 2 0 0 1 2.12-.43l25.4 10.29a22 22 0 0 0 28.63-12.32l21-53c3-7.13 11-10.81 18-8.21a14 14 0 0 1 8 18.54l-21.36 53.1a22.05 22.05 0 0 0 12.3 28.51l24.88 9.83a2 2 0 0 1 1.26 1.87V152c0 1.34 0 2.65.08 4L52.74 102.61a110 110 0 0 1 13.03-16.09M114.33 218a89.6 89.6 0 0 1-25.5-43.5a6 6 0 1 0-11.62 3a102.9 102.9 0 0 0 20.6 40.5H63.56A97.56 97.56 0 0 1 38 152a87.4 87.4 0 0 1 8.71-38.86l140.64 56.26c3.15 19.92 11.77 36.66 25 48.6Z"></svg:path>`,
})
export class PhBroomLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowserLightIcon],svg[ph-browser-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M40 54h176a2 2 0 0 1 2 2v34H38V56a2 2 0 0 1 2-2m176 148H40a2 2 0 0 1-2-2v-98h180v98a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhBrowserLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowsersLightIcon],svg[ph-browsers-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H72a14 14 0 0 0-14 14v18H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-18h18a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M40 86h144a2 2 0 0 1 2 2v18H38V88a2 2 0 0 1 2-2m146 114a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-82h148Zm32-32a2 2 0 0 1-2 2h-18V88a14 14 0 0 0-14-14H70V56a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhBrowsersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugBeetleLightIcon],svg[ph-bug-beetle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 150h18a6 6 0 0 0 0-12h-18v-20h18a6 6 0 0 0 0-12h-18.25a77.8 77.8 0 0 0-22.38-48.88l20.87-20.88a6 6 0 1 0-8.48-8.48l-21.49 21.49a77.8 77.8 0 0 0-92.53 0l-21.5-21.49a6 6 0 0 0-8.48 8.48l20.88 20.88A77.76 77.76 0 0 0 50.25 106H32a6 6 0 0 0 0 12h18v20H32a6 6 0 0 0 0 12h18v10a79 79 0 0 0 .66 10H32a6 6 0 0 0 0 12h21.18a78 78 0 0 0 149.64 0H224a6 6 0 0 0 0-12h-18.66a79 79 0 0 0 .66-10ZM128 46a66.07 66.07 0 0 1 65.71 60H62.29A66.07 66.07 0 0 1 128 46m6 179.71V144a6 6 0 0 0-12 0v81.71A66.07 66.07 0 0 1 62 160v-42h132v42a66.07 66.07 0 0 1-60 65.71"></svg:path>`,
})
export class PhBugBeetleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugDroidLightIcon],svg[ph-bug-droid-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m189 51.47l15.22-15.23a6 6 0 1 0-8.48-8.48L180 43.54a85.76 85.76 0 0 0-104 0L60.24 27.76a6 6 0 0 0-8.48 8.48L67 51.47A85.7 85.7 0 0 0 42 112v40a86 86 0 0 0 172 0v-40a85.7 85.7 0 0 0-25-60.53M128 38a74.09 74.09 0 0 1 74 74v10H54v-10a74.09 74.09 0 0 1 74-74m0 188a74.09 74.09 0 0 1-74-74v-18h148v18a74.09 74.09 0 0 1-74 74m18-134a10 10 0 1 1 10 10a10 10 0 0 1-10-10m-56 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10"></svg:path>`,
})
export class PhBugDroidLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugLightIcon],svg[ph-bug-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M146 92a10 10 0 1 1 10 10a10 10 0 0 1-10-10m-46-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m146 46a6 6 0 0 1-6 6h-26v10a85.9 85.9 0 0 1-3.45 24.08l23.85 10.42a6 6 0 0 1-4.8 11l-23.23-10.15a86 86 0 0 1-156.74 0L26.4 189.5a6 6 0 1 1-4.8-11l23.85-10.42A85.9 85.9 0 0 1 42 144v-10H16a6 6 0 0 1 0-12h26v-10a85.9 85.9 0 0 1 3.45-24.08L21.6 77.5a6 6 0 0 1 4.8-11l23.23 10.15a86 86 0 0 1 156.74 0L229.6 66.5a6 6 0 1 1 4.8 11l-23.85 10.42A85.9 85.9 0 0 1 214 112v10h26a6 6 0 0 1 6 6m-192-6h148v-10a74 74 0 0 0-148 0Zm68 95.74V134H54v10a74.09 74.09 0 0 0 68 73.74M202 134h-68v83.74A74.09 74.09 0 0 0 202 144Z"></svg:path>`,
})
export class PhBugLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingApartmentLightIcon],svg[ph-building-apartment-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 210h-10V72a6 6 0 0 0-6-6h-42V40a6 6 0 0 0-6-6H80a6 6 0 0 0-6 6v58H32a6 6 0 0 0-6 6v106H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M38 110h42a6 6 0 0 0 6-6V46h84v26a6 6 0 0 0 6 6h42v132h-68v-42a6 6 0 0 0-6-6h-32a6 6 0 0 0-6 6v42H38Zm100 100h-20v-36h20ZM114 72a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m0 32a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m56 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m-84 32a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6m28-32a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m56 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m0 32a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhBuildingApartmentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingLightIcon],svg[ph-building-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 226h-26V30h10a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12h10v196H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12M62 30h132v196h-36v-42a6 6 0 0 0-6-6h-48a6 6 0 0 0-6 6v42H62Zm84 196h-36v-36h36ZM90 64a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m48 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m-48 40a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m48 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m-42 46a6 6 0 0 1 0-12h16a6 6 0 0 1 0 12Zm42-6a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhBuildingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingOfficeLightIcon],svg[ph-building-office-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 210h-18V94h2a6 6 0 0 0 0-12h-50V46h2a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12h2v164H24a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M218 94v116h-36V94ZM54 46h116v164h-28v-50a6 6 0 0 0-6-6H88a6 6 0 0 0-6 6v50H54Zm76 164H94v-44h36ZM74 80a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H80a6 6 0 0 1-6-6m48 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m-42 46a6 6 0 0 1 0-12h16a6 6 0 0 1 0 12Zm42-6a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhBuildingOfficeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingsLightIcon],svg[ph-buildings-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 210h-18V96a14 14 0 0 0-14-14h-66V32a14 14 0 0 0-21.77-11.64l-80 53.33A14 14 0 0 0 34 85.34V210H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M208 94a2 2 0 0 1 2 2v114h-68V94ZM46 85.34a2 2 0 0 1 .89-1.66l80-53.34A2 2 0 0 1 130 32v178H46ZM110 112v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m-32 0v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m0 56v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m32 0v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhBuildingsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBulldozerLightIcon],svg[ph-bulldozer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 202h-8a10 10 0 0 1-10-10v-32a10 10 0 0 1 10-10h8a6 6 0 0 0 0-12h-8a22 22 0 0 0-22 22v10h-20.48a38.08 38.08 0 0 0-33.43-31.78l-36.5-87.61A14 14 0 0 0 114.67 42H24a14 14 0 0 0-14 14v96.72A38 38 0 0 0 40 214h120a38.05 38.05 0 0 0 37.52-32H218v10a22 22 0 0 0 22 22h8a6 6 0 0 0 0-12M116.51 55.23L151 138H62V54h52.67a2 2 0 0 1 1.84 1.23M24 54h26v84H40a37.8 37.8 0 0 0-18 4.54V56a2 2 0 0 1 2-2m136 148H40a26 26 0 0 1 0-52h120a26 26 0 0 1 0 52m6-26a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h120a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhBulldozerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBusLightIcon],svg[ph-bus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 34H72a30 30 0 0 0-30 30v144a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-18h68v18a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14V64a30 30 0 0 0-30-30M54 178v-60h148v60Zm0-100h148v28H54Zm18-32h112a18 18 0 0 1 18 18v2H54v-2a18 18 0 0 1 18-18m10 162a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-18h28Zm118 2h-24a2 2 0 0 1-2-2v-18h28v18a2 2 0 0 1-2 2m-98-62a10 10 0 1 1-10-10a10 10 0 0 1 10 10m72 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m72-68v24a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0M22 80v24a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhBusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phButterflyLightIcon],svg[ph-butterfly-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.1 51.71C226.09 45.27 218.64 42 209 42c-16.33 0-37.41 11.06-56.4 29.59A132 132 0 0 0 134 93.94V56a6 6 0 0 0-12 0v37.94a132 132 0 0 0-18.54-22.35C84.49 53.06 63.4 42 47.07 42c-9.69 0-17.14 3.27-22.15 9.71c-5.53 7.11-7.71 17.69-6.66 32.34c.91 12.73 4.12 26.53 6.81 37.13c6.28 24.74 20.77 33 31.78 35.68A42 42 0 1 0 128 201.62a42 42 0 1 0 71.16-44.76c11-2.63 25.5-10.94 31.78-35.68c6.61-25.97 11.78-54.53.16-69.47M92 210a30.12 30.12 0 0 1-3.34-60a6 6 0 0 0-1.31-12a41.7 41.7 0 0 0-20.28 8c-9 .31-24.12-3.16-30.37-27.76c-3.25-12.81-11.89-46.83-2.31-59.15C37.05 55.66 41.2 54 47.07 54c12.88 0 31.72 10.28 48 26.18C111.69 96.39 122 114.59 122 127.67V180a30 30 0 0 1-30 30m127.31-91.77C213.07 142.83 198 146.29 189 146a41.6 41.6 0 0 0-20.28-8a6 6 0 1 0-1.36 12A30.11 30.11 0 1 1 134 180v-52.33c0-13.08 10.32-31.28 26.93-47.49C177.23 64.28 196.07 54 209 54c5.87 0 10 1.66 12.68 5.08c9.53 12.32.89 46.34-2.36 59.15Z"></svg:path>`,
})
export class PhButterflyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCableCarLightIcon],svg[ph-cable-car-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.91 31a6 6 0 0 0-7-4.85L15 66.1A6 6 0 0 0 16 78a6.5 6.5 0 0 0 1.07-.09L122 59.17V98H64a30 30 0 0 0-30 30v64a30 30 0 0 0 30 30h128a30 30 0 0 0 30-30v-64a30 30 0 0 0-30-30h-58V57l107.05-19.09a6 6 0 0 0 4.86-6.91M102 162v-52h52v52Zm-38-52h26v52H46v-34a18 18 0 0 1 18-18m128 100H64a18 18 0 0 1-18-18v-18h164v18a18 18 0 0 1-18 18m18-82v34h-44v-52h26a18 18 0 0 1 18 18"></svg:path>`,
})
export class PhCableCarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCactusLightIcon],svg[ph-cactus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 210h-50v-28h6a66.08 66.08 0 0 0 66-66a26 26 0 0 0-52 0a14 14 0 0 1-14 14h-6V56a38 38 0 0 0-76 0v34h-6a14 14 0 0 1-14-14a26 26 0 0 0-52 0a66.08 66.08 0 0 0 66 66h6v68H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12M96 130H84a54.06 54.06 0 0 1-54-54a14 14 0 0 1 28 0a26 26 0 0 0 26 26h12a6 6 0 0 0 6-6V56a26 26 0 0 1 52 0v80a6 6 0 0 0 6 6h12a26 26 0 0 0 26-26a14 14 0 0 1 28 0a54.06 54.06 0 0 1-54 54h-12a6 6 0 0 0-6 6v34h-52v-74a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCactusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCakeLightIcon],svg[ph-cake-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 112a22 22 0 0 0-22-22h-74V77.4A30.05 30.05 0 0 0 158 48c0-26.9-25.58-44.27-26.67-45a6 6 0 0 0-6.66 0C123.58 3.73 98 21.1 98 48a30.05 30.05 0 0 0 24 29.4V90H48a22 22 0 0 0-22 22v23.33a38.8 38.8 0 0 0 8 23.57V200a22 22 0 0 0 22 22h144a22 22 0 0 0 22-22v-41.1a38.8 38.8 0 0 0 8-23.57ZM110 48c0-15.4 12-27.41 18-32.44c6 5 18 17 18 32.44a18 18 0 0 1-36 0m-72 64a10 10 0 0 1 10-10h160a10 10 0 0 1 10 10v23.33c0 14.32-11.33 26.28-25.26 26.66A26 26 0 0 1 166 136a6 6 0 0 0-12 0a26 26 0 0 1-52 0a6 6 0 0 0-12 0a26 26 0 0 1-26.74 26C49.33 161.61 38 149.65 38 135.33Zm162 98H56a10 10 0 0 1-10-10v-30.69A36.8 36.8 0 0 0 62.94 174a37.82 37.82 0 0 0 27.56-10.76a38.8 38.8 0 0 0 5.5-6.74a38 38 0 0 0 64 0a38.8 38.8 0 0 0 5.52 6.74A37.73 37.73 0 0 0 192 174h1.07a36.8 36.8 0 0 0 16.93-4.69V200a10 10 0 0 1-10 10"></svg:path>`,
})
export class PhCakeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalculatorLightIcon],svg[ph-calculator-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 58H80a6 6 0 0 0-6 6v48a6 6 0 0 0 6 6h96a6 6 0 0 0 6-6V64a6 6 0 0 0-6-6m-6 48H86V70h84Zm30-80H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m2 190a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2ZM98 148a10 10 0 1 1-10-10a10 10 0 0 1 10 10m40 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m40 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-80 40a10 10 0 1 1-10-10a10 10 0 0 1 10 10m40 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m40 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhCalculatorLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarBlankLightIcon],svg[ph-calendar-blank-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhCalendarBlankLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarCheckLightIcon],svg[ph-calendar-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2m-39.76-86.24a6 6 0 0 1 0 8.48l-48 48a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L116 167.51l43.76-43.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhCalendarCheckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotLightIcon],svg[ph-calendar-dot-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2m-66-58a14 14 0 1 1-14-14a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhCalendarDotLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotsLightIcon],svg[ph-calendar-dots-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2m-70-78a10 10 0 1 1-10-10a10 10 0 0 1 10 10m44 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-88 40a10 10 0 1 1-10-10a10 10 0 0 1 10 10m44 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m44 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhCalendarDotsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarHeartLightIcon],svg[ph-calendar-heart-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2ZM152 90a30 30 0 0 0-24 12a30 30 0 0 0-54 18c0 35.3 49.22 60.32 51.32 61.37a6 6 0 0 0 5.36 0C132.78 180.32 182 155.3 182 120a30 30 0 0 0-30-30m-3.67 65.25A138 138 0 0 1 128 169.19a139 139 0 0 1-20.33-13.94C97.78 147 86 134.15 86 120a18 18 0 0 1 36 0a6 6 0 0 0 12 0a18 18 0 0 1 36 0c0 14.15-11.78 27-21.67 35.25"></svg:path>`,
})
export class PhCalendarHeartLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarLightIcon],svg[ph-calendar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2m-98-90v64a6 6 0 0 1-12 0v-54.29l-7.32 3.66a6 6 0 1 1-5.36-10.74l16-8A6 6 0 0 1 110 120m59.57 29.25L148 178h20a6 6 0 0 1 0 12h-32a6 6 0 0 1-4.8-9.6L160 142a10 10 0 1 0-16.65-11a6 6 0 1 1-10.35-6a22 22 0 1 1 36.62 24.26Z"></svg:path>`,
})
export class PhCalendarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarMinusLightIcon],svg[ph-calendar-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2m-50-58a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCalendarMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarPlusLightIcon],svg[ph-calendar-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2m-50-58a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCalendarPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarSlashLightIcon],svg[ph-calendar-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36A6 6 0 0 0 48 34a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a6 6 0 0 0 4.44-10Zm-6.18 11l31.81 35H46V48a2.06 2.06 0 0 1 .26-1M48 210a2 2 0 0 1-2-2V94h43l105.44 116ZM222 48v129.23a6 6 0 1 1-12 0V94h-75.12a6 6 0 0 1 0-12H210V48a2 2 0 0 0-2-2h-26v10a6 6 0 0 1-12 0V46H91.25a6 6 0 0 1 0-12H170V24a6 6 0 0 1 12 0v10h26a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhCalendarSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarStarLightIcon],svg[ph-calendar-star-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2Zm-33.54-92.37l-31-2.4l-11.95-27.61a6 6 0 0 0-11 0l-11.91 27.61l-31 2.4a6 6 0 0 0-3.36 10.61l23.49 19.39l-7.16 28.93a6 6 0 0 0 8.87 6.61L128 165.5l26.62 15.67a6 6 0 0 0 8.87-6.61l-7.16-28.93l23.49-19.39a6 6 0 0 0-3.36-10.61m-30.68 23.15a6 6 0 0 0-2 6.07l4.63 18.74L131 153.37a6 6 0 0 0-6.08 0l-17.37 10.22l4.63-18.74a6 6 0 0 0-2-6.07l-14.9-12.33l19.83-1.53a6 6 0 0 0 5-3.61l7.89-18.17l7.84 18.17a6 6 0 0 0 5 3.61l19.83 1.53Z"></svg:path>`,
})
export class PhCalendarStarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarXLightIcon],svg[ph-calendar-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2m-51.76-77.76L136.48 152l19.76 19.76a6 6 0 1 1-8.48 8.48L128 160.48l-19.76 19.76a6 6 0 0 1-8.48-8.48L119.52 152l-19.76-19.76a6 6 0 1 1 8.48-8.48L128 143.52l19.76-19.76a6 6 0 1 1 8.48 8.48"></svg:path>`,
})
export class PhCalendarXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCallBellLightIcon],svg[ph-call-bell-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 182h208a6 6 0 0 0 0-12h-10v-18a94.1 94.1 0 0 0-88-93.8V38h18a6 6 0 0 0 0-12h-48a6 6 0 0 0 0 12h18v20.2A94.1 94.1 0 0 0 34 152v18H24a6 6 0 0 0 0 12m22-30a82 82 0 0 1 164 0v18H46Zm192 56a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h208a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCallBellLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraLightIcon],svg[ph-camera-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 58h-28.79L165 36.67a6 6 0 0 0-5-2.67H96a6 6 0 0 0-5 2.67L76.78 58H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h160a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 134a10 10 0 0 1-10 10H48a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h32a6 6 0 0 0 5-2.67L99.21 46h57.57L171 67.33a6 6 0 0 0 5 2.67h32a10 10 0 0 1 10 10ZM128 90a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 72a30 30 0 1 1 30-30a30 30 0 0 1-30 30"></svg:path>`,
})
export class PhCameraLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraPlusLightIcon],svg[ph-camera-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 136a6 6 0 0 1-6 6h-26v26a6 6 0 0 1-12 0v-26H96a6 6 0 0 1 0-12h26v-26a6 6 0 0 1 12 0v26h26a6 6 0 0 1 6 6m64-56v112a22 22 0 0 1-22 22H48a22 22 0 0 1-22-22V80a22 22 0 0 1 22-22h28.79l11.84-17.77A14 14 0 0 1 100.28 34h55.44a14 14 0 0 1 11.65 6.23L179.21 58H208a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10h-32a6 6 0 0 1-5-2.67l-13.62-20.44a2 2 0 0 0-1.66-.89h-55.44a2 2 0 0 0-1.66.89L85 67.33A6 6 0 0 1 80 70H48a10 10 0 0 0-10 10v112a10 10 0 0 0 10 10h160a10 10 0 0 0 10-10Z"></svg:path>`,
})
export class PhCameraPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraRotateLightIcon],svg[ph-camera-rotate-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 58h-28.79L165 36.67a6 6 0 0 0-5-2.67H96a6 6 0 0 0-5 2.67L76.78 58H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h160a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 134a10 10 0 0 1-10 10H48a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h32a6 6 0 0 0 5-2.67L99.21 46h57.57L171 67.33a6 6 0 0 0 5 2.67h32a10 10 0 0 1 10 10Zm-44-96v24a6 6 0 0 1-6 6h-24a6 6 0 0 1 0-12h10l-2-2.09a34.12 34.12 0 0 0-44.38-3.12a6 6 0 1 1-7.22-9.59a46.2 46.2 0 0 1 60.14 4.27a.5.5 0 0 0 .1.1L162 105v-9a6 6 0 0 1 12 0m-17.2 60.4a6 6 0 0 1-1.19 8.4a46.18 46.18 0 0 1-60.14-4.27l-.1-.1L94 159v9a6 6 0 0 1-12 0v-24a6 6 0 0 1 6-6h24a6 6 0 0 1 0 12h-10l2 2.09a34.12 34.12 0 0 0 44.38 3.12a6 6 0 0 1 8.42 1.19"></svg:path>`,
})
export class PhCameraRotateLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraSlashLightIcon],svg[ph-camera-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l12.69 14H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h150.07l5.49 6a6 6 0 0 0 8.88-8.08Zm53.06 76.2l40.11 44.13A29.67 29.67 0 0 1 128 162a30 30 0 0 1-22.5-49.84ZM48 202a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h19.16l30.23 33.25a42 42 0 0 0 56.33 62L187.16 202ZM230 80v106a6 6 0 0 1-12 0V80a10 10 0 0 0-10-10h-32a6 6 0 0 1-5-2.67L156.78 46H99.21l-.23.34a6 6 0 0 1-10-6.65l2-3A6 6 0 0 1 96 34h64a6 6 0 0 1 5 2.67L179.21 58H208a22 22 0 0 1 22 22"></svg:path>`,
})
export class PhCameraSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCampfireLightIcon],svg[ph-campfire-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.72 225.82a6 6 0 0 1-7.54 3.9L128 202.3l-86.18 27.42a6 6 0 1 1-3.64-11.44l70-22.28l-70-22.28a6 6 0 1 1 3.64-11.44L128 189.7l86.18-27.42a6 6 0 1 1 3.64 11.44l-70 22.28l70 22.28a6 6 0 0 1 3.9 7.54M70 108c0-46.81 52.62-79.73 54.86-81.11a6 6 0 0 1 6.28 0C133.38 28.27 186 61.19 186 108a58 58 0 0 1-116 0m58 46a18 18 0 0 0 18-18c0-15.48-12-27.43-18-32.44c-6 5-18 17-18 32.44a18 18 0 0 0 18 18m-46-46a45.93 45.93 0 0 0 17 35.67a30 30 0 0 1-1-7.67c0-26.9 25.58-44.27 26.67-45a6 6 0 0 1 6.66 0c1.09.72 26.67 18.09 26.67 45a30 30 0 0 1-1 7.67A45.93 45.93 0 0 0 174 108c0-34.06-35.15-61.22-46-68.78c-10.85 7.56-46 34.71-46 68.78"></svg:path>`,
})
export class PhCampfireLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarBatteryLightIcon],svg[ph-car-battery-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M190 136a6 6 0 0 1-6 6h-10v10a6 6 0 0 1-12 0v-10h-10a6 6 0 0 1 0-12h10v-10a6 6 0 0 1 12 0v10h10a6 6 0 0 1 6 6m-86-6H72a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m134-42v96a14 14 0 0 1-14 14H32a14 14 0 0 1-14-14V88a14 14 0 0 1 14-14h18V56a14 14 0 0 1 14-14h32a14 14 0 0 1 14 14v18h36V56a14 14 0 0 1 14-14h32a14 14 0 0 1 14 14v18h18a14 14 0 0 1 14 14m-80-14h36V56a2 2 0 0 0-2-2h-32a2 2 0 0 0-2 2Zm-96 0h36V56a2 2 0 0 0-2-2H64a2 2 0 0 0-2 2Zm164 14a2 2 0 0 0-2-2H32a2 2 0 0 0-2 2v96a2 2 0 0 0 2 2h192a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhCarBatteryLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarLightIcon],svg[ph-car-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 106h-12.1l-28.31-63.69A14 14 0 0 0 186.8 34H69.2a14 14 0 0 0-12.79 8.31L28.1 106H16a6 6 0 0 0 0 12h10v82a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-18h100v18a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-82h10a6 6 0 0 0 0-12M67.37 47.19A2 2 0 0 1 69.2 46h117.6a2 2 0 0 1 1.83 1.19L214.77 106H41.23ZM66 200a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-18h28Zm150 2h-24a2 2 0 0 1-2-2v-18h28v18a2 2 0 0 1-2 2m2-32H38v-52h180ZM58 144a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H64a6 6 0 0 1-6-6m112 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhCarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarProfileLightIcon],svg[ph-car-profile-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 114h-29.51l-43.9-43.9a13.94 13.94 0 0 0-9.9-4.1H44.28a14 14 0 0 0-11.65 6.23L3 116.67A6 6 0 0 0 2 120v48a14 14 0 0 0 14 14h18.6a30 30 0 0 0 58.8 0h69.2a30 30 0 0 0 58.8 0H240a14 14 0 0 0 14-14v-40a14 14 0 0 0-14-14M42.62 78.89a2 2 0 0 1 1.66-.89h112.41a2 2 0 0 1 1.41.59L193.52 114H19.21ZM64 194a18 18 0 1 1 18-18a18 18 0 0 1-18 18m128 0a18 18 0 1 1 18-18a18 18 0 0 1-18 18m50-26a2 2 0 0 1-2 2h-18.6a30 30 0 0 0-58.8 0H93.4a30 30 0 0 0-58.8 0H16a2 2 0 0 1-2-2v-42h226a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhCarProfileLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarSimpleLightIcon],svg[ph-car-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 106h-12.1l-28.31-63.69A14 14 0 0 0 186.8 34H69.2a14 14 0 0 0-12.79 8.31L28.1 106H16a6 6 0 0 0 0 12h10v82a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-18h100v18a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-82h10a6 6 0 0 0 0-12M67.37 47.19A2 2 0 0 1 69.2 46h117.6a2 2 0 0 1 1.83 1.19L214.77 106H41.23ZM218 200a2 2 0 0 1-2 2h-24a2 2 0 0 1-2-2v-24a6 6 0 0 0-6-6H72a6 6 0 0 0-6 6v24a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-82h180Z"></svg:path>`,
})
export class PhCarSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardholderLightIcon],svg[ph-cardholder-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 50H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h160a22 22 0 0 0 22-22V72a22 22 0 0 0-22-22M38 94h180v20h-58a6 6 0 0 0-6 6a26 26 0 0 1-52 0a6 6 0 0 0-6-6H38Zm10-32h160a10 10 0 0 1 10 10v10H38V72a10 10 0 0 1 10-10m160 132H48a10 10 0 0 1-10-10v-58h52.47a38 38 0 0 0 75.06 0H218v58a10 10 0 0 1-10 10"></svg:path>`,
})
export class PhCardholderLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsLightIcon],svg[ph-cards-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 74H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2Zm44-144v120a6 6 0 0 1-12 0V56a2 2 0 0 0-2-2H64a6 6 0 0 1 0-12h152a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhCardsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsThreeLightIcon],svg[ph-cards-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 90H48a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-96a14 14 0 0 0-14-14m2 110a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM50 64a6 6 0 0 1 6-6h144a6 6 0 0 1 0 12H56a6 6 0 0 1-6-6m16-32a6 6 0 0 1 6-6h112a6 6 0 0 1 0 12H72a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhCardsThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleDownLightIcon],svg[ph-caret-circle-double-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.12 55.87A102 102 0 0 0 55.87 200.12A102 102 0 1 0 200.12 55.87m-8.48 135.77a90 90 0 1 1 0-127.28a90.1 90.1 0 0 1 0 127.28m-27.4-107.88a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L128 111.51l27.76-27.75a6 6 0 0 1 8.48 0m0 56a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L128 167.51l27.76-27.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhCaretCircleDoubleDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleLeftLightIcon],svg[ph-caret-circle-double-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.12 55.87A102 102 0 0 0 55.87 200.12A102 102 0 1 0 200.12 55.87m-8.48 135.77a90 90 0 1 1 0-127.28a90.1 90.1 0 0 1 0 127.28m-19.4-91.4L144.49 128l27.75 27.76a6 6 0 1 1-8.48 8.48l-32-32a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 8.48m-56 0L88.49 128l27.75 27.76a6 6 0 1 1-8.48 8.48l-32-32a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhCaretCircleDoubleLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleRightLightIcon],svg[ph-caret-circle-double-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.12 55.87A102 102 0 0 0 55.87 200.12A102 102 0 1 0 200.12 55.87m-8.48 135.77a90 90 0 1 1 0-127.28a90.1 90.1 0 0 1 0 127.28m-67.4-67.88a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48L111.51 128l-27.75-27.76a6 6 0 0 1 8.48-8.48Zm56 0a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48L167.51 128l-27.75-27.76a6 6 0 0 1 8.48-8.48Z"></svg:path>`,
})
export class PhCaretCircleDoubleRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleUpLightIcon],svg[ph-caret-circle-double-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.12 55.87A102 102 0 0 0 55.87 200.12A102 102 0 1 0 200.12 55.87m-8.48 135.77a90 90 0 1 1 0-127.28a90.1 90.1 0 0 1 0 127.28m-27.4-27.88a6 6 0 1 1-8.48 8.48L128 144.49l-27.76 27.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0Zm0-56a6 6 0 1 1-8.48 8.48L128 88.49l-27.76 27.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0Z"></svg:path>`,
})
export class PhCaretCircleDoubleUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDownLightIcon],svg[ph-caret-circle-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m44.24-110.24a6 6 0 0 1 0 8.48l-40 40a6 6 0 0 1-8.48 0l-40-40a6 6 0 0 1 8.48-8.48L128 143.51l35.76-35.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhCaretCircleDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleLeftLightIcon],svg[ph-caret-circle-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m20.24-125.76L112.49 128l35.75 35.76a6 6 0 1 1-8.48 8.48l-40-40a6 6 0 0 1 0-8.48l40-40a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhCaretCircleLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleRightLightIcon],svg[ph-caret-circle-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m28.24-94.24a6 6 0 0 1 0 8.48l-40 40a6 6 0 0 1-8.48-8.48L143.51 128l-35.75-35.76a6 6 0 0 1 8.48-8.48Z"></svg:path>`,
})
export class PhCaretCircleRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpDownLightIcon],svg[ph-caret-circle-up-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m36.24-118.24a6 6 0 1 1-8.48 8.48L128 80.49l-27.76 27.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0Zm0 48a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L128 175.51l27.76-27.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhCaretCircleUpDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpLightIcon],svg[ph-caret-circle-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m44.24-78.24a6 6 0 1 1-8.48 8.48L128 112.49l-35.76 35.75a6 6 0 0 1-8.48-8.48l40-40a6 6 0 0 1 8.48 0Z"></svg:path>`,
})
export class PhCaretCircleUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleDownLightIcon],svg[ph-caret-double-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.24 131.76a6 6 0 0 1 0 8.48l-80 80a6 6 0 0 1-8.48 0l-80-80a6 6 0 0 1 8.48-8.48L128 207.51l75.76-75.75a6 6 0 0 1 8.48 0m-88.48 8.48a6 6 0 0 0 8.48 0l80-80a6 6 0 0 0-8.48-8.48L128 127.51L52.24 51.76a6 6 0 0 0-8.48 8.48Z"></svg:path>`,
})
export class PhCaretDoubleDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleLeftLightIcon],svg[ph-caret-double-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.24 203.76a6 6 0 1 1-8.48 8.48l-80-80a6 6 0 0 1 0-8.48l80-80a6 6 0 0 1 8.48 8.48L128.49 128ZM48.49 128l75.75-75.76a6 6 0 0 0-8.48-8.48l-80 80a6 6 0 0 0 0 8.48l80 80a6 6 0 1 0 8.48-8.48Z"></svg:path>`,
})
export class PhCaretDoubleLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleRightLightIcon],svg[ph-caret-double-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m140.24 132.24l-80 80a6 6 0 0 1-8.48-8.48L127.51 128L51.76 52.24a6 6 0 0 1 8.48-8.48l80 80a6 6 0 0 1 0 8.48m80-8.48l-80-80a6 6 0 0 0-8.48 8.48L207.51 128l-75.75 75.76a6 6 0 1 0 8.48 8.48l80-80a6 6 0 0 0 0-8.48"></svg:path>`,
})
export class PhCaretDoubleRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleUpLightIcon],svg[ph-caret-double-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.24 195.76a6 6 0 1 1-8.48 8.48L128 128.49l-75.76 75.75a6 6 0 0 1-8.48-8.48l80-80a6 6 0 0 1 8.48 0Zm-160-71.52L128 48.49l75.76 75.75a6 6 0 0 0 8.48-8.48l-80-80a6 6 0 0 0-8.48 0l-80 80a6 6 0 0 0 8.48 8.48"></svg:path>`,
})
export class PhCaretDoubleUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDownLightIcon],svg[ph-caret-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 100.24l-80 80a6 6 0 0 1-8.48 0l-80-80a6 6 0 0 1 8.48-8.48L128 167.51l75.76-75.75a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhCaretDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLeftLightIcon],svg[ph-caret-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164.24 203.76a6 6 0 1 1-8.48 8.48l-80-80a6 6 0 0 1 0-8.48l80-80a6 6 0 0 1 8.48 8.48L88.49 128Z"></svg:path>`,
})
export class PhCaretLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineDownLightIcon],svg[ph-caret-line-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43.76 76.24a6 6 0 0 1 8.48-8.48L128 143.51l75.76-75.75a6 6 0 0 1 8.48 8.48l-80 80a6 6 0 0 1-8.48 0ZM208 186H48a6 6 0 0 0 0 12h160a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhCaretLineDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineLeftLightIcon],svg[ph-caret-line-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.24 203.76a6 6 0 1 1-8.48 8.48l-80-80a6 6 0 0 1 0-8.48l80-80a6 6 0 0 1 8.48 8.48L120.49 128ZM72 42a6 6 0 0 0-6 6v160a6 6 0 0 0 12 0V48a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCaretLineLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineRightLightIcon],svg[ph-caret-line-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148.24 123.76a6 6 0 0 1 0 8.48l-80 80a6 6 0 0 1-8.48-8.48L135.51 128L59.76 52.24a6 6 0 0 1 8.48-8.48ZM184 42a6 6 0 0 0-6 6v160a6 6 0 0 0 12 0V48a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCaretLineRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineUpLightIcon],svg[ph-caret-line-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.24 196.24a6 6 0 0 1-8.48 0L128 120.49l-75.76 75.75a6 6 0 0 1-8.48-8.48l80-80a6 6 0 0 1 8.48 0l80 80a6 6 0 0 1 0 8.48M48 78h160a6 6 0 0 0 0-12H48a6 6 0 0 0 0 12"></svg:path>`,
})
export class PhCaretLineUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretRightLightIcon],svg[ph-caret-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m180.24 132.24l-80 80a6 6 0 0 1-8.48-8.48L167.51 128L91.76 52.24a6 6 0 0 1 8.48-8.48l80 80a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhCaretRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpDownLightIcon],svg[ph-caret-up-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180.24 171.76a6 6 0 0 1 0 8.48l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L128 215.51l43.76-43.75a6 6 0 0 1 8.48 0m-96-87.52L128 40.49l43.76 43.75a6 6 0 0 0 8.48-8.48l-48-48a6 6 0 0 0-8.48 0l-48 48a6 6 0 0 0 8.48 8.48"></svg:path>`,
})
export class PhCaretUpDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpLightIcon],svg[ph-caret-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.24 164.24a6 6 0 0 1-8.48 0L128 88.49l-75.76 75.75a6 6 0 0 1-8.48-8.48l80-80a6 6 0 0 1 8.48 0l80 80a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhCaretUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarrotLightIcon],svg[ph-carrot-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 66h-33.52l29.76-29.76a6 6 0 1 0-8.48-8.48L190 57.52V24a6 6 0 0 0-12 0v36.15a62 62 0 0 0-77.8 8C60.17 107.4 30.05 201.45 27.38 210a14 14 0 0 0 18.67 18.67c8.5-2.67 102.62-32.81 141.79-72.77a62 62 0 0 0 8-77.84H232a6 6 0 0 0 0-12Zm-52.69 81.41C170 157 157 166 142.69 174.24l-26.46-26.47a6 6 0 1 0-8.49 8.49l24 24c-41.69 22-89 36.82-89.73 37a6.6 6.6 0 0 0-1.06.44a2 2 0 0 1-2.7-2.7a6.6 6.6 0 0 0 .45-1c.3-1 28.85-92.28 65.78-133l35.27 35.26a6 6 0 1 0 8.48-8.48l-35.1-35.1a50 50 0 0 1 66.18 74.74Z"></svg:path>`,
})
export class PhCarrotLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCashRegisterLightIcon],svg[ph-cash-register-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.82 158.54l-22.48-89.93A14 14 0 0 0 201.75 58H134V40a14 14 0 0 0-14-14H80a14 14 0 0 0-14 14v18H54.25a14 14 0 0 0-13.59 10.6l-22.48 89.94A6 6 0 0 0 18 160v32a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14v-32a6 6 0 0 0-.18-1.46M78 40a2 2 0 0 1 2-2h40a2 2 0 0 1 2 2v18H78ZM52.31 71.51A2 2 0 0 1 54.25 70h147.5a2 2 0 0 1 1.94 1.51L224.32 154H31.68ZM224 194H32a2 2 0 0 1-2-2v-26h196v26a2 2 0 0 1-2 2M66 96a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H72a6 6 0 0 1-6-6m48 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m48 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m-96 32a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H72a6 6 0 0 1-6-6m48 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m48 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhCashRegisterLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCassetteTapeLightIcon],svg[ph-cassette-tape-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14M76 194l15-20h74l15 20Zm150-2a2 2 0 0 1-2 2h-29l-22.2-29.6a6 6 0 0 0-4.8-2.4H88a6 6 0 0 0-4.8 2.4L61 194H32a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2ZM176 82H80a30 30 0 0 0 0 60h96a30 30 0 0 0 0-60m-24 12a29.92 29.92 0 0 0 0 36h-48a29.92 29.92 0 0 0 0-36Zm-90 18a18 18 0 1 1 18 18a18 18 0 0 1-18-18m114 18a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhCassetteTapeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCastleTurretLightIcon],svg[ph-castle-turret-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 218h-18V114.49l11.9-11.91a13.9 13.9 0 0 0 4.1-9.89V48a14 14 0 0 0-14-14h-24a6 6 0 0 0-6 6v26h-20V40a6 6 0 0 0-6-6h-32a6 6 0 0 0-6 6v26H86V40a6 6 0 0 0-6-6H56a14 14 0 0 0-14 14v44.69a13.9 13.9 0 0 0 4.1 9.89L58 114.49V218H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12M68.24 107.76L54.58 94.1a2 2 0 0 1-.58-1.41V48a2 2 0 0 1 2-2h18v26a6 6 0 0 0 6 6h32a6 6 0 0 0 6-6V46h20v26a6 6 0 0 0 6 6h32a6 6 0 0 0 6-6V46h18a2 2 0 0 1 2 2v44.69a2 2 0 0 1-.58 1.41l-13.66 13.66A6 6 0 0 0 186 112v106h-28v-50a30 30 0 0 0-60 0v50H70V112a6 6 0 0 0-1.76-4.24M146 218h-36v-50a18 18 0 0 1 36 0Z"></svg:path>`,
})
export class PhCastleTurretLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCatLightIcon],svg[ph-cat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.36 35.07a14 14 0 0 0-15.26 3l-.29.3l-18.39 21.21a109.16 109.16 0 0 0-118.84 0L50.19 38.41l-.29-.3A14 14 0 0 0 26 48v88c0 51.83 45.76 94 102 94s102-42.17 102-94V48a14 14 0 0 0-8.64-12.93M218 136c0 43.38-37.16 79-84 81.81v-23.33l14.24-14.24a6 6 0 0 0-8.48-8.49L128 183.51l-11.76-11.76a6 6 0 0 0-8.48 8.49L122 194.48v23.33C75.16 215 38 179.38 38 136V48a1.91 1.91 0 0 1 1.23-1.85a2.3 2.3 0 0 1 .82-.17a1.87 1.87 0 0 1 1.26.5l21.76 25a6 6 0 0 0 8.11.88A91.5 91.5 0 0 1 90 61.68V88a6 6 0 1 0 12 0V57.51a98 98 0 0 1 20-3.32V88a6 6 0 1 0 12 0V54.19a98 98 0 0 1 20 3.32V88a6 6 0 1 0 12 0V61.68a91.5 91.5 0 0 1 18.82 10.73a6 6 0 0 0 8.11-.88l21.76-25A2 2 0 0 1 218 48Zm-124 4a10 10 0 1 1-10-10a10 10 0 0 1 10 10m88 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhCatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalFullLightIcon],svg[ph-cell-signal-full-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 72v128a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0m34-46a6 6 0 0 0-6 6v168a6 6 0 0 0 12 0V32a6 6 0 0 0-6-6m-80 80a6 6 0 0 0-6 6v88a6 6 0 0 0 12 0v-88a6 6 0 0 0-6-6m-40 40a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6m-40 40a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCellSignalFullLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalHighLightIcon],svg[ph-cell-signal-high-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 72v128a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0m-46 34a6 6 0 0 0-6 6v88a6 6 0 0 0 12 0v-88a6 6 0 0 0-6-6m-40 40a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6m-40 40a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCellSignalHighLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalLowLightIcon],svg[ph-cell-signal-low-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M86 152v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0m-46 34a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCellSignalLowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalMediumLightIcon],svg[ph-cell-signal-medium-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126 112v88a6 6 0 0 1-12 0v-88a6 6 0 0 1 12 0m-46 34a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6m-40 40a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCellSignalMediumLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalNoneLightIcon],svg[ph-cell-signal-none-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 192v8a6 6 0 0 1-12 0v-8a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhCellSignalNoneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalSlashLightIcon],svg[ph-cell-signal-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M86 152v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0m-46 34a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6m172.44 26l-160-176a6 6 0 0 0-8.88 8L114 121.52V200a6 6 0 0 0 12 0v-65.28l28 30.8V200a6 6 0 0 0 12 0v-21.28L203.56 220a6 6 0 0 0 8.88-8.08ZM160 121.63a6 6 0 0 0 6-6V72a6 6 0 0 0-12 0v43.63a6 6 0 0 0 6 6m40 44a6 6 0 0 0 6-6V32a6 6 0 0 0-12 0v127.63a6 6 0 0 0 6 6"></svg:path>`,
})
export class PhCellSignalSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalXLightIcon],svg[ph-cell-signal-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.24 195.76a6 6 0 1 1-8.48 8.48L184 184.48l-19.76 19.76a6 6 0 0 1-8.48-8.48L175.52 176l-19.76-19.76a6 6 0 0 1 8.48-8.48L184 167.52l19.76-19.76a6 6 0 0 1 8.48 8.48L192.48 176ZM160 118a6 6 0 0 0 6-6V72a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6m40 0a6 6 0 0 0 6-6V32a6 6 0 0 0-12 0v80a6 6 0 0 0 6 6m-80-12a6 6 0 0 0-6 6v88a6 6 0 0 0 12 0v-88a6 6 0 0 0-6-6m-40 40a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6m-40 40a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCellSignalXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellTowerLightIcon],svg[ph-cell-tower-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M133.37 85.32a6 6 0 0 0-10.74 0l-72 144a6 6 0 0 0 10.74 5.37L75.71 206h104.58l14.34 28.68A6 6 0 0 0 200 238a5.9 5.9 0 0 0 2.68-.64a6 6 0 0 0 2.69-8.05Zm-5.37 16.1L158.29 162H97.71ZM81.71 194l10-20h72.58l10 20Zm79.74-99.9A33.6 33.6 0 0 0 162 88a34 34 0 0 0-68 0a33.6 33.6 0 0 0 .55 6.1a6 6 0 1 1-11.81 2.13a46 46 0 1 1 90.52 0a6 6 0 0 1-5.89 4.94a5.6 5.6 0 0 1-1.08-.1a6 6 0 0 1-4.84-6.97M65.75 135A78 78 0 1 1 206 88a77.33 77.33 0 0 1-15.75 47a6 6 0 1 1-9.57-7.24A65.42 65.42 0 0 0 194 88a66 66 0 0 0-132 0a65.42 65.42 0 0 0 13.32 39.76a6 6 0 1 1-9.57 7.24"></svg:path>`,
})
export class PhCellTowerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCertificateLightIcon],svg[ph-certificate-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126 136a6 6 0 0 1-6 6H72a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-6-38H72a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m110 62.62V224a6 6 0 0 1-9 5.21l-25-14.3l-25 14.3a6 6 0 0 1-9-5.21v-26H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14v31.38a49.91 49.91 0 0 1 0 73.24M196 86a38 38 0 1 0 38 38a38 38 0 0 0-38-38m-34 100v-25.38a50 50 0 0 1 56-81.51V56a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v128a2 2 0 0 0 2 2Zm56-17.11a49.91 49.91 0 0 1-44 0v44.77l19-10.87a6 6 0 0 1 6 0l19 10.87Z"></svg:path>`,
})
export class PhCertificateLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChairLightIcon],svg[ph-chair-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 138h-34v-36h18a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14H64a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h18v36H48a14 14 0 0 0-14 14v16a14 14 0 0 0 14 14h10v42a6 6 0 0 0 12 0v-42h116v42a6 6 0 0 0 12 0v-42h10a14 14 0 0 0 14-14v-16a14 14 0 0 0-14-14M62 88V40a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v48a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2m32 14h68v36H94Zm116 66a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-16a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhChairLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardLightIcon],svg[ph-chalkboard-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 194h-10V56a14 14 0 0 0-14-14H40a14 14 0 0 0-14 14v138H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M38 56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2v138h-20v-26a6 6 0 0 0-6-6h-72a6 6 0 0 0-6 6v26H70V86h116v50a6 6 0 0 0 12 0V80a6 6 0 0 0-6-6H64a6 6 0 0 0-6 6v114H38Zm148 138h-60v-20h60Z"></svg:path>`,
})
export class PhChalkboardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardSimpleLightIcon],svg[ph-chalkboard-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 194h-10v-26a6 6 0 0 0-6-6h-64a6 6 0 0 0-6 6v26H38V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2v80a6 6 0 0 0 12 0V56a14 14 0 0 0-14-14H40a14 14 0 0 0-14 14v138H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12m-74-20h52v20h-52Z"></svg:path>`,
})
export class PhChalkboardSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardTeacherLightIcon],svg[ph-chalkboard-teacher-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h13.39a6 6 0 0 0 5.42-3.43a50 50 0 0 1 90.38 0a6 6 0 0 0 5.42 3.43H216a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M78 144a26 26 0 1 1 26 26a26 26 0 0 1-26-26m140 56a2 2 0 0 1-2 2h-57.73a62.34 62.34 0 0 0-31.48-27.61a38 38 0 1 0-45.58 0A62.34 62.34 0 0 0 49.73 202H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM198 80v96a6 6 0 0 1-6 6h-16a6 6 0 0 1 0-12h10V86H70v10a6 6 0 0 1-12 0V80a6 6 0 0 1 6-6h128a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhChalkboardTeacherLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChampagneLightIcon],svg[ph-champagne-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142.26 10H97.65A6 6 0 0 0 92 14.14c-1.47 4.51-35.53 110.73-5.85 151.57c6.75 9.28 16.1 14.62 27.86 15.95V234H96a6 6 0 1 0 0 12h48a6 6 0 1 0 0-12h-18v-52.34c11.76-1.33 21.11-6.67 27.85-15.95c29.68-40.84-4.37-147.06-5.84-151.57a6 6 0 0 0-5.75-4.14m-40.18 12h35.75c2.24 7.48 7 24.29 10.75 44H91.34c3.75-19.71 8.51-36.52 10.74-44m42 136.66C138.55 166.29 130.66 170 120 170s-18.6-3.71-24.14-11.34c-10.4-14.24-12.65-42.11-6.61-80.66h61.42c6.04 38.55 3.78 66.42-6.57 80.66ZM230 52a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-24-32a10 10 0 1 1-10-10a10 10 0 0 1 10 10m0 80a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhChampagneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChargingStationLightIcon],svg[ph-charging-station-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M133 124.64a6 6 0 0 1 .6 5.59l-16 40a6 6 0 1 1-11.14-4.46L119.14 134H96a6 6 0 0 1-5.57-8.23l16-40a6 6 0 0 1 11.14 4.46L104.86 122H128a6 6 0 0 1 5 2.64m113-38V168a22 22 0 0 1-44 0v-40a10 10 0 0 0-10-10h-18v92h18a6 6 0 0 1 0 12H32a6 6 0 0 1 0-12h18V56a22 22 0 0 1 22-22h80a22 22 0 0 1 22 22v50h18a22 22 0 0 1 22 22v40a10 10 0 0 0 20 0V86.63a9.93 9.93 0 0 0-2.93-7.07l-19.31-19.32a6 6 0 0 1 8.48-8.48l19.32 19.31A21.88 21.88 0 0 1 246 86.63ZM162 210V56a10 10 0 0 0-10-10H72a10 10 0 0 0-10 10v154Z"></svg:path>`,
})
export class PhChargingStationLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarHorizontalLightIcon],svg[ph-chart-bar-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 98h-42V56a6 6 0 0 0-6-6H54V40a6 6 0 0 0-12 0v176a6 6 0 0 0 12 0v-10h90a6 6 0 0 0 6-6v-42h74a6 6 0 0 0 6-6v-48a6 6 0 0 0-6-6m-54-36v36H54V62Zm-32 132H54v-36h84Zm80-48H54v-36h164Z"></svg:path>`,
})
export class PhChartBarHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarLightIcon],svg[ph-chart-bar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 202h-10V40a6 6 0 0 0-6-6h-56a6 6 0 0 0-6 6v42H96a6 6 0 0 0-6 6v42H48a6 6 0 0 0-6 6v66H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12M158 46h44v156h-44Zm-56 48h44v108h-44Zm-48 48h36v60H54Z"></svg:path>`,
})
export class PhChartBarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartDonutLightIcon],svg[ph-chart-donut-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a6 6 0 0 0-6 6v56a6 6 0 0 0 6 6a34 34 0 1 1-29.45 17a6 6 0 0 0-2.2-8.2l-48.5-28a6 6 0 0 0-8.2 2.2A102 102 0 1 0 128 26M47.21 88.29l38.29 22.1A46 46 0 0 0 82 128a48 48 0 0 0 .4 6l-42.7 11.45a90.27 90.27 0 0 1 7.51-57.16M42.81 157l42.7-11.44a46.12 46.12 0 0 0 36.49 28v44.2A90.2 90.2 0 0 1 42.81 157M134 217.8v-44.2a46 46 0 0 0 0-91.21V38.2a90 90 0 0 1 0 179.6"></svg:path>`,
})
export class PhChartDonutLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineDownLightIcon],svg[ph-chart-line-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 208a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v13.52l58 58l27.76-27.75a6 6 0 0 1 8.48 0L194 153.52V128a6 6 0 0 1 12 0v40a5.6 5.6 0 0 1-.11 1.1v.06a7.5 7.5 0 0 1-.31 1.05v.07a6 6 0 0 1-.52 1v.06a6.3 6.3 0 0 1-1.68 1.68h-.06a6 6 0 0 1-1 .52h-.07a7.5 7.5 0 0 1-1.05.31h-.06a5.6 5.6 0 0 1-1.1.11H160a6 6 0 0 1 0-12h25.52L128 104.49l-27.76 27.75a6 6 0 0 1-8.48 0L38 78.48V202h186a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhChartLineDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineLightIcon],svg[ph-chart-line-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 208a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v98.78l54.05-47.3a6 6 0 0 1 7.55-.28l60.11 45.08l60.34-52.8a6 6 0 0 1 7.9 9l-64 56a6 6 0 0 1-7.55.28l-60.11-45.04l-58.29 51V202h186a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhChartLineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineUpLightIcon],svg[ph-chart-line-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 208a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v113.52l53.76-53.76a6 6 0 0 1 8.48 0L128 135.51L185.52 78H160a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6v40a6 6 0 0 1-12 0V86.48l-61.76 61.76a6 6 0 0 1-8.48 0L96 120.49l-58 58V202h186a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhChartLineUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieLightIcon],svg[ph-chart-pie-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m74.74 51.92L134 117.61V38.2a90 90 0 0 1 68.74 39.72M122 38.2v86.34L47.24 167.7A90 90 0 0 1 122 38.2m6 179.8a90 90 0 0 1-74.74-39.92l155.5-89.78A90 90 0 0 1 128 218"></svg:path>`,
})
export class PhChartPieLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieSliceLightIcon],svg[ph-chart-pie-slice-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102 109.5v-72a6 6 0 0 0-8-5.66a102 102 0 0 0-66.3 114.75a6 6 0 0 0 8.9 4.11l62.4-36a6 6 0 0 0 3-5.2M90 106l-51.66 29.8Q38 131.91 38 128a90.1 90.1 0 0 1 52-81.58Zm38-80a6 6 0 0 0-6 6v93l-79.8 46.46a6 6 0 0 0-2.15 8.22A102 102 0 1 0 128 26m0 192a90.48 90.48 0 0 1-74.38-39.31L131 133.61a6 6 0 0 0 3-5.19V38.2a90 90 0 0 1-6 179.8"></svg:path>`,
})
export class PhChartPieSliceLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPolarLightIcon],svg[ph-chart-polar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m89.8 96h-28.1A62.07 62.07 0 0 0 134 66.3V38.2a90.15 90.15 0 0 1 83.8 83.8m-95.8 0H78.37A50.09 50.09 0 0 1 122 78.37Zm0 12v43.63A50.09 50.09 0 0 1 78.37 134Zm12 0h43.63A50.09 50.09 0 0 1 134 177.63Zm0-12V78.37A50.09 50.09 0 0 1 177.63 122Zm-12-83.8v28.1A62.07 62.07 0 0 0 66.3 122H38.2A90.15 90.15 0 0 1 122 38.2M38.2 134h28.1a62.07 62.07 0 0 0 55.7 55.7v28.1A90.15 90.15 0 0 1 38.2 134m95.8 83.8v-28.1a62.07 62.07 0 0 0 55.7-55.7h28.1a90.15 90.15 0 0 1-83.8 83.8"></svg:path>`,
})
export class PhChartPolarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartScatterLightIcon],svg[ph-chart-scatter-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 208a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v154h186a6 6 0 0 1 6 6m-98-50a10 10 0 1 0-10-10a10 10 0 0 0 10 10m-24-56a10 10 0 1 0-10-10a10 10 0 0 0 10 10m-32 72a10 10 0 1 0-10-10a10 10 0 0 0 10 10m96-48a10 10 0 1 0-10-10a10 10 0 0 0 10 10m24-40a10 10 0 1 0-10-10a10 10 0 0 0 10 10m-8 68a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhChartScatterLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredDotsLightIcon],svg[ph-chat-centered-dots-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 120a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-54-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m88 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m58-54v128a14 14 0 0 1-14 14h-61.59l-14.25 25a14 14 0 0 1-24.32 0l-14.25-25H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v128a2 2 0 0 0 2 2h65.07a6 6 0 0 1 5.21 3l16 28a2 2 0 0 0 3.48 0l16-28a6 6 0 0 1 5.21-3H216a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhChatCenteredDotsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredLightIcon],svg[ph-chat-centered-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h61.59l14.25 25a14 14 0 0 0 24.32 0l14.25-25H216a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2h-65.07a6 6 0 0 0-5.21 3l-16 28a2 2 0 0 1-3.48 0l-16-28a6 6 0 0 0-5.21-3H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhChatCenteredLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredSlashLightIcon],svg[ph-chat-centered-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-10.1 6H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h61.59l14.25 25a14 14 0 0 0 24.32 0l14.25-25h29.12l20 22a6 6 0 0 0 8.88-8.08Zm98.49 150a6 6 0 0 0-5.21 3l-16 28a2 2 0 0 1-3.48 0l-16-28a6 6 0 0 0-5.21-3H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h12.62l120 132ZM230 56v130a6 6 0 0 1-12 0V56a2 2 0 0 0-2-2H98.52a6 6 0 1 1 0-12H216a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhChatCenteredSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredTextLightIcon],svg[ph-chat-centered-text-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 104a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6 26H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m70-74v128a14 14 0 0 1-14 14h-61.59l-14.25 25a14 14 0 0 1-24.32 0l-14.25-25H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v128a2 2 0 0 0 2 2h65.07a6 6 0 0 1 5.21 3l16 28a2 2 0 0 0 3.48 0l16-28a6 6 0 0 1 5.21-3H216a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhChatCenteredTextLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleDotsLightIcon],svg[ph-chat-circle-dots-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 128a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-54-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m88 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m58 10a102 102 0 0 1-150.69 89.65l-34.87 11.62a14 14 0 0 1-17.71-17.71l11.62-34.87A102 102 0 1 1 230 128m-12 0a90 90 0 1 0-167.92 45.06a6 6 0 0 1 .5 4.91l-12.46 37.38a2 2 0 0 0 2.53 2.53L78 205.42a6.2 6.2 0 0 1 1.9-.31a6.1 6.1 0 0 1 3 .81A90 90 0 0 0 218 128"></svg:path>`,
})
export class PhChatCircleDotsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleLightIcon],svg[ph-chat-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 0 0-89.65 150.69l-11.62 34.87a14 14 0 0 0 17.71 17.71l34.87-11.62A102 102 0 1 0 128 26m0 192a90 90 0 0 1-45.06-12.08a6.1 6.1 0 0 0-3-.81a6.2 6.2 0 0 0-1.9.31l-37.39 12.46a2 2 0 0 1-2.53-2.53L50.58 178a6 6 0 0 0-.5-4.91A90 90 0 1 1 128 218"></svg:path>`,
})
export class PhChatCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleSlashLightIcon],svg[ph-chat-circle-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l11.51 12.7a102 102 0 0 0-16.72 120l-11.62 34.86a14 14 0 0 0 17.71 17.71l34.87-11.62A102 102 0 0 0 192 207.37L203.56 220a6 6 0 0 0 8.88-8.08ZM128 218a90 90 0 0 1-45.06-12.08a6 6 0 0 0-4.91-.5l-37.38 12.46a2 2 0 0 1-2.53-2.53L50.58 178a6 6 0 0 0-.5-4.91A90 90 0 0 1 63.16 65.6L184 198.47A89.74 89.74 0 0 1 128 218m102-90a102.25 102.25 0 0 1-12.14 48.31a6 6 0 0 1-5.29 3.15a6 6 0 0 1-5.28-8.84A90.05 90.05 0 0 0 93.1 45a6 6 0 0 1-4.65-11A102.06 102.06 0 0 1 230 128"></svg:path>`,
})
export class PhChatCircleSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleTextLightIcon],svg[ph-chat-circle-text-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 112a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6 26H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m70-10a102 102 0 0 1-150.69 89.65l-34.87 11.62a14 14 0 0 1-17.71-17.71l11.62-34.87A102 102 0 1 1 230 128m-12 0a90 90 0 1 0-167.92 45.06a6 6 0 0 1 .5 4.91l-12.46 37.38a2 2 0 0 0 2.53 2.53L78 205.42a6.2 6.2 0 0 1 1.9-.31a6.1 6.1 0 0 1 3 .81A90 90 0 0 0 218 128"></svg:path>`,
})
export class PhChatCircleTextLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatDotsLightIcon],svg[ph-chat-dots-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 128a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-54-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m88 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m58-54v128a14 14 0 0 1-14 14H82.23l-33.16 28.64l-.06.05A13.87 13.87 0 0 1 40 238a14.1 14.1 0 0 1-5.95-1.33A13.88 13.88 0 0 1 26 224V64a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v160a2 2 0 0 0 3.26 1.55l34.82-30.08A6 6 0 0 1 80 194h136a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhChatDotsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatLightIcon],svg[ph-chat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 50H40a14 14 0 0 0-14 14v160a13.88 13.88 0 0 0 8.09 12.69A14.1 14.1 0 0 0 40 238a13.87 13.87 0 0 0 9-3.31l.06-.05L82.23 206H216a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2H80a6 6 0 0 0-3.92 1.46l-34.82 30.07A2 2 0 0 1 38 224V64a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhChatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatSlashLightIcon],svg[ph-chat-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8L49 50h-9a14 14 0 0 0-14 14v160a13.86 13.86 0 0 0 8.09 12.69a13.89 13.89 0 0 0 15-2L82.23 206H190.8l12.76 14a6 6 0 1 0 8.88-8.07ZM80 194a6 6 0 0 0-3.92 1.46l-34.79 30A2 2 0 0 1 38 224V64a2 2 0 0 1 2-2h19.89l120 132ZM230 64v122a6 6 0 0 1-12 0V64a2 2 0 0 0-2-2H105.79a6 6 0 0 1 0-12H216a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhChatSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropDotsLightIcon],svg[ph-chat-teardrop-dots-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142 128a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-54-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m88 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m54 6a98.11 98.11 0 0 1-98 98H48a14 14 0 0 1-14-14v-84a98 98 0 0 1 196 0m-12 0a86 86 0 0 0-172 0v84a2 2 0 0 0 2 2h84a86.1 86.1 0 0 0 86-86"></svg:path>`,
})
export class PhChatTeardropDotsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropLightIcon],svg[ph-chat-teardrop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 26a98.11 98.11 0 0 0-98 98v84a14 14 0 0 0 14 14h84a98 98 0 0 0 0-196m0 184H48a2 2 0 0 1-2-2v-84a86 86 0 1 1 86 86"></svg:path>`,
})
export class PhChatTeardropLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropSlashLightIcon],svg[ph-chat-teardrop-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l14.37 15.8A97.42 97.42 0 0 0 34 124v84a14 14 0 0 0 14 14h84a98.24 98.24 0 0 0 56.82-18.18L203.56 220a6 6 0 0 0 8.88-8.08ZM132 210H48a2 2 0 0 1-2-2v-84a85.46 85.46 0 0 1 20.08-55.2L180.7 194.88A84.9 84.9 0 0 1 132 210m98-86a97.86 97.86 0 0 1-14.06 50.61a6 6 0 0 1-5.15 2.9a6 6 0 0 1-5.12-9.1a86 86 0 0 0-110.88-122a6 6 0 1 1-5.2-10.81A97.1 97.1 0 0 1 132 26a98.11 98.11 0 0 1 98 98"></svg:path>`,
})
export class PhChatTeardropSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropTextLightIcon],svg[ph-chat-teardrop-text-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170 112a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h68a6 6 0 0 1 6 6m-6 26H96a6 6 0 0 0 0 12h68a6 6 0 0 0 0-12m66-14a98.11 98.11 0 0 1-98 98H48a14 14 0 0 1-14-14v-84a98 98 0 0 1 196 0m-12 0a86 86 0 0 0-172 0v84a2 2 0 0 0 2 2h84a86.1 86.1 0 0 0 86-86"></svg:path>`,
})
export class PhChatTeardropTextLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTextLightIcon],svg[ph-chat-text-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 50H40a14 14 0 0 0-14 14v160a13.88 13.88 0 0 0 8.09 12.69A14.1 14.1 0 0 0 40 238a13.87 13.87 0 0 0 9-3.31l.06-.05L82.23 206H216a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2H80a6 6 0 0 0-3.92 1.46l-34.82 30.07A2 2 0 0 1 38 224V64a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Zm-52-80a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhChatTextLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsCircleLightIcon],svg[ph-chats-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.93 186.58a78 78 0 0 0-61.77-112.16a78 78 0 1 0-142.09 64.16L18.58 164A14 14 0 0 0 36 181.42l25.46-7.49a78 78 0 0 0 26.39 7.63a78 78 0 0 0 106.77 40.37l25.38 7.49A14 14 0 0 0 237.42 212ZM62 161.5a6 6 0 0 0-1.69.24l-27.77 8.17a2 2 0 0 1-2.48-2.48l8.17-27.77a6.05 6.05 0 0 0-.47-4.53a66 66 0 1 1 27.08 27.08a6 6 0 0 0-2.84-.71m155.71 26.16l8.17 27.77a2 2 0 0 1-2.48 2.48l-27.77-8.17a6.06 6.06 0 0 0-4.53.47a66 66 0 0 1-90-28.4a77.92 77.92 0 0 0 71-94.68a66 66 0 0 1 46.07 96a6.05 6.05 0 0 0-.43 4.53Z"></svg:path>`,
})
export class PhChatsCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsLightIcon],svg[ph-chats-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 82h-34V48a14 14 0 0 0-14-14H40a14 14 0 0 0-14 14v128a6 6 0 0 0 3.42 5.41A5.86 5.86 0 0 0 32 182a6 6 0 0 0 3.77-1.33L73.71 150H74v34a14 14 0 0 0 14 14h94.29l37.94 30.67A6 6 0 0 0 224 230a5.86 5.86 0 0 0 2.58-.59A6 6 0 0 0 230 224V96a14 14 0 0 0-14-14M71.58 138a6 6 0 0 0-3.77 1.33L38 163.43V48a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v88a2 2 0 0 1-2 2ZM218 211.43l-29.81-24.1a6 6 0 0 0-3.77-1.33H88a2 2 0 0 1-2-2v-34h82a14 14 0 0 0 14-14V94h34a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhChatsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsTeardropLightIcon],svg[ph-chats-teardrop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168.16 74.42A78 78 0 0 0 18 104v64a14 14 0 0 0 14 14h56a78.15 78.15 0 0 0 72 48h64a14 14 0 0 0 14-14v-64a78 78 0 0 0-69.84-77.58M30 168v-64a66 66 0 1 1 66 66H32a2 2 0 0 1-2-2m196 48a2 2 0 0 1-2 2h-64a66.13 66.13 0 0 1-58.89-36.19a77.92 77.92 0 0 0 71-94.68A66 66 0 0 1 226 152Z"></svg:path>`,
})
export class PhChatsTeardropLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckCircleLightIcon],svg[ph-check-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.24 99.76a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L112 151.51l51.76-51.75a6 6 0 0 1 8.48 0M230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90"></svg:path>`,
})
export class PhCheckCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckFatLightIcon],svg[ph-check-fat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m241.87 69.66l-24-23.56a14 14 0 0 0-19.77 0L104 139l-38.1-36.9a14 14 0 0 0-19.8 0l-24 24a14 14 0 0 0 0 19.79l71.62 72a14 14 0 0 0 19.8 0L241.91 89.5a14 14 0 0 0-.04-19.84M233.42 81L105 209.41a2 2 0 0 1-2.81 0l-71.62-72a2 2 0 0 1 0-2.82l24-24A2 2 0 0 1 56 110a2.12 2.12 0 0 1 1.5.64l42.35 41.08a6 6 0 0 0 8.39 0l98.37-97.11a2 2 0 0 1 2.87 0l24 23.56a2 2 0 0 1-.06 2.83"></svg:path>`,
})
export class PhCheckFatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckLightIcon],svg[ph-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 76.24l-128 128a6 6 0 0 1-8.48 0l-56-56a6 6 0 0 1 8.48-8.48L96 191.51L219.76 67.76a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhCheckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareLightIcon],svg[ph-check-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.24 99.76a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L112 151.51l51.76-51.75a6 6 0 0 1 8.48 0M222 48v160a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2h160a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhCheckSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareOffsetLightIcon],svg[ph-check-square-offset-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 48v160a14 14 0 0 1-14 14h-72a6 6 0 0 1 0-12h72a2 2 0 0 0 2-2V48a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v96a6 6 0 0 1-12 0V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14M115.76 155.76L64 207.51l-19.76-19.75a6 6 0 0 0-8.48 8.48l24 24a6 6 0 0 0 8.48 0l56-56a6 6 0 0 0-8.48-8.48"></svg:path>`,
})
export class PhCheckSquareOffsetLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckerboardLightIcon],svg[ph-checkerboard-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m-13.52 88L134 61.52V46h15.52L210 106.48V122ZM134 78.48L177.52 122H134ZM210 48v41.52L166.48 46H208a2 2 0 0 1 2 2M48 46h74v76H46V48a2 2 0 0 1 2-2m58.48 164L46 149.52V134h15.52L122 194.48V210ZM122 177.52L78.48 134H122ZM46 208v-41.52L89.52 210H48a2 2 0 0 1-2-2m162 2h-74v-76h76v74a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhCheckerboardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChecksLightIcon],svg[ph-checks-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m148.2 84.28l-89.6 88a6 6 0 0 1-8.4 0l-38.4-37.71a6 6 0 1 1 8.4-8.57l34.2 33.58l85.4-83.87a6 6 0 1 1 8.4 8.56Zm96.08-8.48a6 6 0 0 0-8.48-.08l-85.4 83.87l-20.23-19.87a6 6 0 1 0-8.41 8.56l24.44 24a6 6 0 0 0 8.4 0l89.6-88a6 6 0 0 0 .08-8.48"></svg:path>`,
})
export class PhChecksLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheersLightIcon],svg[ph-cheers-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m214.45 215.87l-19.58 5.25l-11.37-42.44a38.06 38.06 0 0 0 21.2-44.52c-12.52-46.73-38.55-87.68-39.65-89.4a6 6 0 0 0-6.51-2.58l-24.36 6.09c.11-9.67-.15-15.84-.19-16.55a6 6 0 0 0-4.53-5.54l-32-8A6 6 0 0 0 91 20.76c-1.1 1.72-27.13 42.67-39.65 89.4a38.06 38.06 0 0 0 21.2 44.52l-11.42 42.44l-19.58-5.25a6 6 0 1 0-3.1 11.59l48 12.87a6.4 6.4 0 0 0 1.55.2a6 6 0 0 0 1.55-11.8l-16.83-4.51l11.38-42.45a36 36 0 0 0 3.9.23a38.08 38.08 0 0 0 36.71-28.17v-.13c.28-1.15.55-2.29.81-3.44a262 262 0 0 0 5.73 27.57A38.06 38.06 0 0 0 168 182a37 37 0 0 0 3.9-.23l11.38 42.45l-16.83 4.51a6 6 0 0 0 1.55 11.8a6.4 6.4 0 0 0 1.55-.2l48-12.87a6 6 0 1 0-3.1-11.59m-57.27-161C160.06 59.7 165.39 69 171.32 81l-37.25 9.3c-.55-11.07-.51-20.31-.37-26.33c.05-1.1.1-2.19.14-3.25Zm-58.36-24l23.31 5.83c.07 4.25.11 11.32-.19 20.2c-.07 1.18-.16 3.09-.23 5.62c-.09 1.82-.19 3.7-.3 5.63l-37.6-9.4c6.27-12.86 11.99-22.82 15.01-27.86Zm14.29 95.89a26 26 0 0 1-50.22-13.52a295.4 295.4 0 0 1 15.75-43.4l41.86 10.47a318 318 0 0 1-7.39 46.47Zm29.77 23.94a279 279 0 0 1-8-48.25l41.68-10.42a298 298 0 0 1 16.56 45.21a26 26 0 1 1-50.23 13.46Zm43.75-108a6 6 0 0 1 2.69-8l16-8a6 6 0 1 1 5.36 10.74l-16 8a6 6 0 0 1-8.05-2.69ZM230 72a6 6 0 0 1-6 6h-16a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6M34.63 21.32a6 6 0 0 1 8-2.69l16 8a6 6 0 0 1-5.36 10.74l-16-8a6 6 0 0 1-2.64-8.05M40 70H24a6 6 0 0 1 0-12h16a6 6 0 0 1 0 12"></svg:path>`,
})
export class PhCheersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheeseLightIcon],svg[ph-cheese-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 34a6 6 0 0 0-1.72.25l-160 48A6 6 0 0 0 18 88v24a6 6 0 0 0 6 6h8a18.09 18.09 0 0 1 18 17.65a17.6 17.6 0 0 1-5.15 12.7A18.9 18.9 0 0 1 31.46 154H24a6 6 0 0 0-6 6v32a6 6 0 0 0 6 6h200a14 14 0 0 0 14-14V88a54.06 54.06 0 0 0-54-54m.85 12a42.07 42.07 0 0 1 40.72 36H64.88Zm9.15 58a26 26 0 1 1-50-10h48a25.9 25.9 0 0 1 2 10m-56 82H86v-2a26 26 0 0 1 52 0Zm88-2a2 2 0 0 1-2 2h-74v-2a38 38 0 0 0-76 0v2H30v-20h1.46a31 31 0 0 0 22-9.25A29.45 29.45 0 0 0 62 135.42A30.14 30.14 0 0 0 32 106h-2V94h101.34a38 38 0 1 0 73.32 0H226Z"></svg:path>`,
})
export class PhCheeseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChefHatLightIcon],svg[ph-chef-hat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 112a54.06 54.06 0 0 0-54-54a55 55 0 0 0-6.52.4a54 54 0 0 0-99 0A55 55 0 0 0 72 58a54 54 0 0 0-22 103.3V208a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14v-46.7a54.07 54.07 0 0 0 32-49.3m-44 96a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2v-42.94a54 54 0 0 0 10 .94h112a54 54 0 0 0 10-.94Zm-10-54h-16.31l6.13-24.54a6 6 0 1 0-11.64-2.92L155.31 154H134v-26a6 6 0 0 0-12 0v26h-21.31l-6.87-27.46a6 6 0 0 0-11.64 2.92L88.31 154H72a42 42 0 0 1 0-84c1 0 2 0 2.92.11A54.6 54.6 0 0 0 74 80a6 6 0 0 0 12 0a42 42 0 0 1 84 0a6 6 0 0 0 12 0a54.6 54.6 0 0 0-.92-9.89c1-.06 1.94-.11 2.92-.11a42 42 0 0 1 0 84"></svg:path>`,
})
export class PhChefHatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCherriesLightIcon],svg[ph-cherries-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 74a68 68 0 0 0-8.83.57a89.8 89.8 0 0 0-21.8-25.69c-37.18-30-88.07-23.13-90.22-22.82A6 6 0 0 0 52.67 37c18.72 12.47 26.87 33.31 30.05 53.22A70 70 0 1 0 141.59 205A70 70 0 1 0 176 74m-38.1-15.73a77.6 77.6 0 0 1 16.86 19A70.3 70.3 0 0 0 122.35 99a69.5 69.5 0 0 0-27.42-8.69c-3.22-22.13-11.2-40.14-23.46-53.1c16.76.22 44.72 3.51 66.43 21.06m8.2 62.73a70.7 70.7 0 0 0-13.77-15.12a58.17 58.17 0 0 1 28.23-17.74a113.5 113.5 0 0 1 8.78 33.31c-8.61-1.5-12.92-5.51-13.1-5.68A6 6 0 0 0 146.1 121M88 218a58 58 0 0 1-3.92-115.85a177 177 0 0 1-1.15 35.52c-9.66-1.25-14.5-5.73-14.69-5.91a6 6 0 0 0-8.48 8.48c.4.4 10 9.76 28.24 9.76s27.84-9.36 28.24-9.76a6 6 0 1 0-8.43-8.53c-.22.2-4.41 4.08-12.72 5.64a186.4 186.4 0 0 0 1.11-34.76A58 58 0 0 1 88 218m88-16a57.75 57.75 0 0 1-27.47-6.91a69.73 69.73 0 0 0 0-70.12c2.65 2.26 11.88 9 27.44 9c18.28 0 27.84-9.36 28.24-9.76a6 6 0 0 0 0-8.51a6 6 0 0 0-8.46 0c-.23.22-5 4.59-14.36 5.91a129 129 0 0 0-8.66-35.52c1.06-.06 2.14-.1 3.21-.1a58 58 0 0 1 0 116Z"></svg:path>`,
})
export class PhCherriesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChurchLightIcon],svg[ph-church-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.09 146.86L190 124.6V104a6 6 0 0 0-3-5.21l-53-30.27V46h18a6 6 0 0 0 0-12h-18V16a6 6 0 0 0-12 0v18h-18a6 6 0 0 0 0 12h18v22.52L69 98.79a6 6 0 0 0-3 5.21v20.6l-37.09 22.26A6 6 0 0 0 26 152v64a6 6 0 0 0 6 6h80a6 6 0 0 0 6-6v-48a10 10 0 0 1 20 0v48a6 6 0 0 0 6 6h80a6 6 0 0 0 6-6v-64a6 6 0 0 0-2.91-5.14M38 155.4l28-16.8V210H38Zm90-9.4a22 22 0 0 0-22 22v42H78V107.48l50-28.57l50 28.57V210h-28v-42a22 22 0 0 0-22-22m90 64h-28v-71.4l28 16.8Z"></svg:path>`,
})
export class PhChurchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteLightIcon],svg[ph-cigarette-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 130H32a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14v-32a14 14 0 0 0-14-14M30 176v-32a2 2 0 0 1 2-2h50v36H32a2 2 0 0 1-2-2m196 0a2 2 0 0 1-2 2H94v-36h130a2 2 0 0 1 2 2ZM202.77 61.06c7.81-13.88 7.91-21.91 6.62-26.2a9 9 0 0 0-3.93-5.42A6 6 0 0 1 208 18a5.9 5.9 0 0 1 2.44.52a20.42 20.42 0 0 1 10.23 12.24c3.18 9.58.68 21.75-7.44 36.18c-7.81 13.88-7.91 21.91-6.62 26.2a8.94 8.94 0 0 0 3.88 5.4A6 6 0 0 1 208 110a5.9 5.9 0 0 1-2.44-.52a20.42 20.42 0 0 1-10.23-12.24c-3.18-9.58-.68-21.75 7.44-36.18m-40 0c7.81-13.88 7.91-21.91 6.62-26.2a9 9 0 0 0-3.93-5.42A6 6 0 0 1 168 18a5.9 5.9 0 0 1 2.44.52a20.42 20.42 0 0 1 10.23 12.24c3.18 9.58.68 21.75-7.44 36.18c-7.81 13.88-7.91 21.91-6.62 26.2a8.94 8.94 0 0 0 3.88 5.4A6 6 0 0 1 168 110a5.9 5.9 0 0 1-2.44-.52a20.42 20.42 0 0 1-10.23-12.24c-3.18-9.58-.68-21.75 7.44-36.18"></svg:path>`,
})
export class PhCigaretteLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteSlashLightIcon],svg[ph-cigarette-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l78.15 86H32a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h144.25l27.31 30a6 6 0 0 0 8.88-8.08ZM30 176v-32a2 2 0 0 1 2-2h50v36H32a2 2 0 0 1-2-2m64 2v-36h38.62l32.73 36Zm144-34v32a14 14 0 0 1-14 14h-1.84a6 6 0 1 1 0-12H224a2 2 0 0 0 2-2v-32a2 2 0 0 0-2-2h-45.48a6 6 0 1 1 0-12H224a14 14 0 0 1 14 14m-35.23-82.94c7.81-13.88 7.91-21.91 6.62-26.2a9 9 0 0 0-3.93-5.42A6 6 0 0 1 208 18a5.9 5.9 0 0 1 2.44.52a20.42 20.42 0 0 1 10.23 12.24c3.18 9.58.68 21.75-7.44 36.18c-7.81 13.88-7.91 21.91-6.62 26.2a8.94 8.94 0 0 0 3.88 5.4A6 6 0 0 1 208 110a5.9 5.9 0 0 1-2.44-.52a20.42 20.42 0 0 1-10.23-12.24c-3.18-9.58-.68-21.75 7.44-36.18m-40 0c7.81-13.88 7.91-21.91 6.62-26.2a9 9 0 0 0-3.93-5.42A6 6 0 0 1 168 18a5.9 5.9 0 0 1 2.44.52a20.42 20.42 0 0 1 10.23 12.24c3.18 9.58.68 21.75-7.44 36.18c-7.81 13.88-7.91 21.91-6.62 26.2a8.94 8.94 0 0 0 3.88 5.4A6 6 0 0 1 168 110a5.9 5.9 0 0 1-2.44-.52a20.42 20.42 0 0 1-10.23-12.24c-3.18-9.58-.68-21.75 7.44-36.18"></svg:path>`,
})
export class PhCigaretteSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleDashedLightIcon],svg[ph-circle-dashed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M98.19 36.54a6 6 0 0 1 4.3-7.31a102.1 102.1 0 0 1 51 0a6 6 0 0 1-3 11.62a90 90 0 0 0-45 0a6 6 0 0 1-7.3-4.31m-43 20A102.1 102.1 0 0 0 29.7 100.7a6 6 0 0 0 4.19 7.38a6 6 0 0 0 1.6.22a6 6 0 0 0 5.78-4.4A90 90 0 0 1 63.78 65a6 6 0 1 0-8.56-8.41Zm-13.91 95.55a6 6 0 1 0-11.56 3.2a102 102 0 0 0 25.49 44.18a6 6 0 0 0 8.55-8.41a90.1 90.1 0 0 1-22.48-38.97m109.21 63.06a90 90 0 0 1-45 0a6 6 0 1 0-3 11.62a102.16 102.16 0 0 0 51 0a6 6 0 0 0-3-11.62m71.62-67.23a6 6 0 0 0-7.38 4.18a90 90 0 0 1-22.51 39a6 6 0 1 0 8.56 8.41a102.1 102.1 0 0 0 25.52-44.21a6 6 0 0 0-4.19-7.38m-7.39-44a6 6 0 0 0 5.78 4.4a6 6 0 0 0 1.6-.22a6 6 0 0 0 4.18-7.38a102 102 0 0 0-25.49-44.18a6 6 0 0 0-8.55 8.41a90.05 90.05 0 0 1 22.48 38.96Z"></svg:path>`,
})
export class PhCircleDashedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfLightIcon],svg[ph-circle-half-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m6 12.2a90 90 0 0 1 20 3.63v172.34a90 90 0 0 1-20 3.63Zm32 8.23a90.5 90.5 0 0 1 20 12.81v137.52a90.5 90.5 0 0 1-20 12.81ZM38 128a90.12 90.12 0 0 1 84-89.8v179.6A90.12 90.12 0 0 1 38 128m160 56.5v-113a89.81 89.81 0 0 1 0 113"></svg:path>`,
})
export class PhCircleHalfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfTiltLightIcon],svg[ph-circle-half-tilt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.12 55.88A102 102 0 1 0 55.88 200.13A102 102 0 1 0 200.12 55.88M90 209.62a89.6 89.6 0 0 1-21.23-13.89L90 174.49Zm32 8.16a90 90 0 0 1-20-3.58v-51.71l20-20Zm32-3.58a89.8 89.8 0 0 1-20 3.58v-87.29l20-20Zm32-17.4a89.5 89.5 0 0 1-20 12.83V98.49l20-20Zm-125.73-9.56a90 90 0 0 1 127-127ZM198 184.57V71.43a90 90 0 0 1 0 113.14"></svg:path>`,
})
export class PhCircleHalfTiltLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleLightIcon],svg[ph-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90"></svg:path>`,
})
export class PhCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleNotchLightIcon],svg[ph-circle-notch-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 128a102 102 0 0 1-204 0c0-40.18 23.35-76.86 59.5-93.45a6 6 0 0 1 5 10.9C58.61 60.09 38 92.49 38 128a90 90 0 0 0 180 0c0-35.51-20.61-67.91-52.5-82.55a6 6 0 0 1 5-10.9C206.65 51.14 230 87.82 230 128"></svg:path>`,
})
export class PhCircleNotchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyCheckLightIcon],svg[ph-circle-wavy-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.4 104.2c-3.9-4.1-7.9-8.3-9.5-12.2s-1.6-9-1.7-14.7c-.1-9.3-.3-20-7.4-27.1s-17.8-7.3-27.1-7.4c-5.7-.1-11.1-.2-14.7-1.7s-8.1-5.6-12.2-9.5C145.2 25.2 137.6 18 128 18s-17.2 7.2-23.8 13.6c-4.1 3.9-8.3 7.9-12.2 9.5s-9 1.6-14.7 1.7c-9.3.1-20 .3-27.1 7.4S42.9 68 42.8 77.3c-.1 5.7-.2 11.1-1.7 14.7s-5.6 8.1-9.5 12.2C25.2 110.8 18 118.4 18 128s7.2 17.2 13.6 23.8c3.9 4.1 7.9 8.3 9.5 12.2s1.6 9 1.7 14.7c.1 9.3.3 20 7.4 27.1s17.8 7.3 27.1 7.4c5.7.1 11.1.2 14.7 1.7s8.1 5.6 12.2 9.5c6.6 6.4 14.2 13.6 23.8 13.6s17.2-7.2 23.8-13.6c4.1-3.9 8.3-7.9 12.2-9.5s9-1.6 14.7-1.7c9.3-.1 20-.3 27.1-7.4s7.3-17.8 7.4-27.1c.1-5.7.2-11.1 1.7-14.7s5.6-8.1 9.5-12.2c6.4-6.6 13.6-14.2 13.6-23.8s-7.2-17.2-13.6-23.8Zm-8.6 39.3c-4.7 4.9-9.5 9.9-12 15.9s-2.5 12.5-2.6 19.1s-.2 15.1-3.9 18.8s-11.4 3.8-18.8 3.9s-13.4.2-19.1 2.6s-11 7.3-15.9 12S132.8 226 128 226s-10.2-5.2-15.5-10.2s-9.9-9.5-15.9-12s-12.5-2.5-19.1-2.6s-15.1-.2-18.8-3.9s-3.8-11.4-3.9-18.8s-.2-13.4-2.6-19.1s-7.3-11-12-15.9S30 132.8 30 128s5.2-10.2 10.2-15.5s9.5-9.9 12-15.9s2.5-12.5 2.6-19.1s.2-15.1 3.9-18.8s11.4-3.8 18.8-3.9s13.4-.2 19.1-2.6s11-7.3 15.9-12S123.2 30 128 30s10.2 5.2 15.5 10.2s9.9 9.5 15.9 12s12.5 2.5 19.1 2.6s15.1.2 18.8 3.9s3.8 11.4 3.9 18.8s.2 13.4 2.6 19.1s7.3 11 12 15.9S226 123.2 226 128s-5.2 10.2-10.2 15.5Zm-39.5-43.6a5.9 5.9 0 0 1-.2 8.4l-58.6 56a6.3 6.3 0 0 1-4.2 1.7a5.8 5.8 0 0 1-4.1-1.7l-29.3-28a5.9 5.9 0 0 1 8.2-8.6l25.2 24l54.6-52a5.9 5.9 0 0 1 8.4.2Z"></svg:path>`,
})
export class PhCircleWavyCheckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyLightIcon],svg[ph-circle-wavy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.4 104.2c-3.9-4.1-7.9-8.3-9.5-12.2s-1.6-9-1.7-14.7c-.1-9.3-.3-20-7.4-27.1s-17.8-7.3-27.1-7.4c-5.7-.1-11.1-.2-14.7-1.7s-8.1-5.6-12.2-9.5C145.2 25.2 137.6 18 128 18s-17.2 7.2-23.8 13.6c-4.1 3.9-8.3 7.9-12.2 9.5s-9 1.6-14.7 1.7c-9.3.1-20 .3-27.1 7.4S42.9 68 42.8 77.3c-.1 5.7-.2 11.1-1.7 14.7s-5.6 8.1-9.5 12.2C25.2 110.8 18 118.4 18 128s7.2 17.2 13.6 23.8c3.9 4.1 7.9 8.3 9.5 12.2s1.6 9 1.7 14.7c.1 9.3.3 20 7.4 27.1s17.8 7.3 27.1 7.4c5.7.1 11.1.2 14.7 1.7s8.1 5.6 12.2 9.5c6.6 6.4 14.2 13.6 23.8 13.6s17.2-7.2 23.8-13.6c4.1-3.9 8.3-7.9 12.2-9.5s9-1.6 14.7-1.7c9.3-.1 20-.3 27.1-7.4s7.3-17.8 7.4-27.1c.1-5.7.2-11.1 1.7-14.7s5.6-8.1 9.5-12.2c6.4-6.6 13.6-14.2 13.6-23.8s-7.2-17.2-13.6-23.8Zm-8.6 39.3c-4.7 4.9-9.5 9.9-12 15.9s-2.5 12.5-2.6 19.1s-.2 15.1-3.9 18.8s-11.4 3.8-18.8 3.9s-13.4.2-19.1 2.6s-11 7.3-15.9 12S132.8 226 128 226s-10.2-5.2-15.5-10.2s-9.9-9.5-15.9-12s-12.5-2.5-19.1-2.6s-15.1-.2-18.8-3.9s-3.8-11.4-3.9-18.8s-.2-13.4-2.6-19.1s-7.3-11-12-15.9S30 132.8 30 128s5.2-10.2 10.2-15.5s9.5-9.9 12-15.9s2.5-12.5 2.6-19.1s.2-15.1 3.9-18.8s11.4-3.8 18.8-3.9s13.4-.2 19.1-2.6s11-7.3 15.9-12S123.2 30 128 30s10.2 5.2 15.5 10.2s9.9 9.5 15.9 12s12.5 2.5 19.1 2.6s15.1.2 18.8 3.9s3.8 11.4 3.9 18.8s.2 13.4 2.6 19.1s7.3 11 12 15.9S226 123.2 226 128s-5.2 10.2-10.2 15.5Z"></svg:path>`,
})
export class PhCircleWavyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyQuestionLightIcon],svg[ph-circle-wavy-question-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.4 104.2c-3.9-4.1-7.9-8.3-9.5-12.2s-1.6-9-1.7-14.7c-.1-9.3-.3-20-7.4-27.1s-17.8-7.3-27.1-7.4c-5.7-.1-11.1-.2-14.7-1.7s-8.1-5.6-12.2-9.5C145.2 25.2 137.6 18 128 18s-17.2 7.2-23.8 13.6c-4.1 3.9-8.3 7.9-12.2 9.5s-9 1.6-14.7 1.7c-9.3.1-20 .3-27.1 7.4S42.9 68 42.8 77.3c-.1 5.7-.2 11.1-1.7 14.7s-5.6 8.1-9.5 12.2C25.2 110.8 18 118.4 18 128s7.2 17.2 13.6 23.8c3.9 4.1 7.9 8.3 9.5 12.2s1.6 9 1.7 14.7c.1 9.3.3 20 7.4 27.1s17.8 7.3 27.1 7.4c5.7.1 11.1.2 14.7 1.7s8.1 5.6 12.2 9.5c6.6 6.4 14.2 13.6 23.8 13.6s17.2-7.2 23.8-13.6c4.1-3.9 8.3-7.9 12.2-9.5s9-1.6 14.7-1.7c9.3-.1 20-.3 27.1-7.4s7.3-17.8 7.4-27.1c.1-5.7.2-11.1 1.7-14.7s5.6-8.1 9.5-12.2c6.4-6.6 13.6-14.2 13.6-23.8s-7.2-17.2-13.6-23.8Zm-8.6 39.3c-4.7 4.9-9.5 9.9-12 15.9s-2.5 12.5-2.6 19.1s-.2 15.1-3.9 18.8s-11.4 3.8-18.8 3.9s-13.4.2-19.1 2.6s-11 7.3-15.9 12S132.8 226 128 226s-10.2-5.2-15.5-10.2s-9.9-9.5-15.9-12s-12.5-2.5-19.1-2.6s-15.1-.2-18.8-3.9s-3.8-11.4-3.9-18.8s-.2-13.4-2.6-19.1s-7.3-11-12-15.9S30 132.8 30 128s5.2-10.2 10.2-15.5s9.5-9.9 12-15.9s2.5-12.5 2.6-19.1s.2-15.1 3.9-18.8s11.4-3.8 18.8-3.9s13.4-.2 19.1-2.6s11-7.3 15.9-12S123.2 30 128 30s10.2 5.2 15.5 10.2s9.9 9.5 15.9 12s12.5 2.5 19.1 2.6s15.1.2 18.8 3.9s3.8 11.4 3.9 18.8s.2 13.4 2.6 19.1s7.3 11 12 15.9S226 123.2 226 128s-5.2 10.2-10.2 15.5ZM138 180a10 10 0 1 1-10-10a10 10 0 0 1 10 10Zm24-72a34.1 34.1 0 0 1-28 33.5v2.5a6 6 0 0 1-12 0v-8a6 6 0 0 1 6-6a22 22 0 1 0-22-22a6 6 0 0 1-12 0a34 34 0 0 1 68 0Z"></svg:path>`,
})
export class PhCircleWavyQuestionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyWarningLightIcon],svg[ph-circle-wavy-warning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.4 104.2c-3.9-4.1-7.9-8.3-9.5-12.2s-1.6-9-1.7-14.7c-.1-9.3-.3-20-7.4-27.1s-17.8-7.3-27.1-7.4c-5.7-.1-11.1-.2-14.7-1.7s-8.1-5.6-12.2-9.5C145.2 25.2 137.6 18 128 18s-17.2 7.2-23.8 13.6c-4.1 3.9-8.3 7.9-12.2 9.5s-9 1.6-14.7 1.7c-9.3.1-20 .3-27.1 7.4S42.9 68 42.8 77.3c-.1 5.7-.2 11.1-1.7 14.7s-5.6 8.1-9.5 12.2C25.2 110.8 18 118.4 18 128s7.2 17.2 13.6 23.8c3.9 4.1 7.9 8.3 9.5 12.2s1.6 9 1.7 14.7c.1 9.3.3 20 7.4 27.1s17.8 7.3 27.1 7.4c5.7.1 11.1.2 14.7 1.7s8.1 5.6 12.2 9.5c6.6 6.4 14.2 13.6 23.8 13.6s17.2-7.2 23.8-13.6c4.1-3.9 8.3-7.9 12.2-9.5s9-1.6 14.7-1.7c9.3-.1 20-.3 27.1-7.4s7.3-17.8 7.4-27.1c.1-5.7.2-11.1 1.7-14.7s5.6-8.1 9.5-12.2c6.4-6.6 13.6-14.2 13.6-23.8s-7.2-17.2-13.6-23.8Zm-8.6 39.3c-4.7 4.9-9.5 9.9-12 15.9s-2.5 12.5-2.6 19.1s-.2 15.1-3.9 18.8s-11.4 3.8-18.8 3.9s-13.4.2-19.1 2.6s-11 7.3-15.9 12S132.8 226 128 226s-10.2-5.2-15.5-10.2s-9.9-9.5-15.9-12s-12.5-2.5-19.1-2.6s-15.1-.2-18.8-3.9s-3.8-11.4-3.9-18.8s-.2-13.4-2.6-19.1s-7.3-11-12-15.9S30 132.8 30 128s5.2-10.2 10.2-15.5s9.5-9.9 12-15.9s2.5-12.5 2.6-19.1s.2-15.1 3.9-18.8s11.4-3.8 18.8-3.9s13.4-.2 19.1-2.6s11-7.3 15.9-12S123.2 30 128 30s10.2 5.2 15.5 10.2s9.9 9.5 15.9 12s12.5 2.5 19.1 2.6s15.1.2 18.8 3.9s3.8 11.4 3.9 18.8s.2 13.4 2.6 19.1s7.3 11 12 15.9S226 123.2 226 128s-5.2 10.2-10.2 15.5ZM122 136V80a6 6 0 0 1 12 0v56a6 6 0 0 1-12 0Zm16 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10Z"></svg:path>`,
})
export class PhCircleWavyWarningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesFourLightIcon],svg[ph-circles-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 42a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m96 12a38 38 0 1 0-38-38a38 38 0 0 0 38 38m0-64a26 26 0 1 1-26 26a26 26 0 0 1 26-26m-96 84a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m96-64a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhCirclesFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreeLightIcon],svg[ph-circles-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170 76a42 42 0 1 0-42 42a42 42 0 0 0 42-42m-42 30a30 30 0 1 1 30-30a30 30 0 0 1-30 30m60 24a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 72a30 30 0 1 1 30-30a30 30 0 0 1-30 30M68 130a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 72a30 30 0 1 1 30-30a30 30 0 0 1-30 30"></svg:path>`,
})
export class PhCirclesThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreePlusLightIcon],svg[ph-circles-three-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 42a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m96 12a38 38 0 1 0-38-38a38 38 0 0 0 38 38m0-64a26 26 0 1 1-26 26a26 26 0 0 1 26-26m-96 84a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m134-26a6 6 0 0 1-6 6h-26v26a6 6 0 0 1-12 0v-26h-26a6 6 0 0 1 0-12h26v-26a6 6 0 0 1 12 0v26h26a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCirclesThreePlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircuitryLightIcon],svg[ph-circuitry-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M88 158a10 10 0 1 1-10 10a10 10 0 0 1 10-10m-42 50V48a2 2 0 0 1 2-2h34v100.84a22 22 0 1 0 12 0v-36.35l52 52V210H48a2 2 0 0 1-2-2m164 0a2 2 0 0 1-2 2h-50v-50a6 6 0 0 0-1.76-4.24L94 93.51V46h36v26a6 6 0 0 0 1.76 4.24l17 17a22 22 0 1 0 8.48-8.48L142 69.51V46h66a2 2 0 0 1 2 2ZM168 94a10 10 0 1 1-10 10a10 10 0 0 1 10-10"></svg:path>`,
})
export class PhCircuitryLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCityLightIcon],svg[ph-city-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 210h-10V88a6 6 0 0 0-6-6h-64a6 6 0 0 0-6 6v42h-52V40a6 6 0 0 0-6-6H32a6 6 0 0 0-6 6v170H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M166 94h52v116h-52Zm-12 48v68h-52v-68ZM38 46h52v164H38Zm32 26v16a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0m0 48v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m0 48v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m52 16v-16a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0m64 0v-16a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0m0-48v-16a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0"></svg:path>`,
})
export class PhCityLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardLightIcon],svg[ph-clipboard-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 34h-37.17a45.91 45.91 0 0 0-69.66 0H56a14 14 0 0 0-14 14v168a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m-72-4a34 34 0 0 1 34 34v2H94v-2a34 34 0 0 1 34-34m74 186a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h29.67A45.8 45.8 0 0 0 82 64v8a6 6 0 0 0 6 6h80a6 6 0 0 0 6-6v-8a45.8 45.8 0 0 0-3.67-18H200a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhClipboardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardTextLightIcon],svg[ph-clipboard-text-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 152a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6-38H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m54-66v168a14 14 0 0 1-14 14H56a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h37.17a45.91 45.91 0 0 1 69.66 0H200a14 14 0 0 1 14 14M94 64v2h68v-2a34 34 0 0 0-68 0m108-16a2 2 0 0 0-2-2h-29.67A45.8 45.8 0 0 1 174 64v8a6 6 0 0 1-6 6H88a6 6 0 0 1-6-6v-8a45.8 45.8 0 0 1 3.67-18H56a2 2 0 0 0-2 2v168a2 2 0 0 0 2 2h144a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhClipboardTextLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockAfternoonLightIcon],svg[ph-clock-afternoon-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m62-90a6 6 0 0 1-6 6h-41.51l29.75 29.76a6 6 0 1 1-8.48 8.48l-40-40A6 6 0 0 1 128 122h56a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhClockAfternoonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockClockwiseLightIcon],svg[ph-clock-clockwise-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 80v44.6l37.09 22.25a6 6 0 0 1-6.18 10.3l-40-24A6 6 0 0 1 122 128V80a6 6 0 0 1 12 0m90-22a6 6 0 0 0-6 6v23.36c-7.48-8.83-14.94-17.13-23.53-25.83a94 94 0 1 0-1.95 134.83a6 6 0 0 0-8.24-8.72A82 82 0 1 1 186 70c9.24 9.36 17.18 18.3 25.31 28H184a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6V64a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhClockClockwiseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCountdownLightIcon],svg[ph-clock-countdown-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 136.49A102.12 102.12 0 1 1 119.51 26a6 6 0 0 1 1 12A90.13 90.13 0 1 0 218 135.51a6 6 0 1 1 12 1ZM122 72v56a6 6 0 0 0 6 6h56a6 6 0 0 0 0-12h-50V72a6 6 0 0 0-12 0m38-26a10 10 0 1 0-10-10a10 10 0 0 0 10 10m36 24a10 10 0 1 0-10-10a10 10 0 0 0 10 10m24 36a10 10 0 1 0-10-10a10 10 0 0 0 10 10"></svg:path>`,
})
export class PhClockCountdownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCounterClockwiseLightIcon],svg[ph-clock-counter-clockwise-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 80v44.6l37.09 22.25a6 6 0 0 1-6.18 10.3l-40-24A6 6 0 0 1 122 128V80a6 6 0 0 1 12 0m-6-46a93.4 93.4 0 0 0-66.49 27.56c-8.58 8.68-16 17-23.51 25.8V64a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6h40a6 6 0 0 0 0-12H44.73C52.86 88.29 60.79 79.35 70 70a82 82 0 1 1 1.7 117.62a6 6 0 1 0-8.24 8.72A94 94 0 1 0 128 34"></svg:path>`,
})
export class PhClockCounterClockwiseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockLightIcon],svg[ph-clock-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m62-90a6 6 0 0 1-6 6h-56a6 6 0 0 1-6-6V72a6 6 0 0 1 12 0v50h50a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhClockLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockUserLightIcon],svg[ph-clock-user-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 72v46.29l39.32-19.66a6 6 0 0 1 5.36 10.74l-48 24A6 6 0 0 1 122 128V72a6 6 0 0 1 12 0m-6 146a90 90 0 1 1 90-90a6 6 0 0 0 12 0a102 102 0 1 0-102 102a6 6 0 0 0 0-12m101.8 4.46a6 6 0 0 1-11.6 3.08C215.14 214 204.37 206 192 206s-23.14 8-26.2 19.54A6 6 0 0 1 160 230a6.3 6.3 0 0 1-1.54-.2a6 6 0 0 1-4.26-7.34A38.1 38.1 0 0 1 172.72 199a30 30 0 1 1 38.56 0a38.1 38.1 0 0 1 18.52 23.46M174 176a18 18 0 1 0 18-18a18 18 0 0 0-18 18"></svg:path>`,
})
export class PhClockUserLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClosedCaptioningLightIcon],svg[ph-closed-captioning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2Zm-108.81-39.29a6 6 0 0 1-2.19 8.2a38 38 0 1 1 0-65.82a6 6 0 1 1-6 10.38a26 26 0 1 0 0 45.05a6 6 0 0 1 8.19 2.19m80 0a6 6 0 0 1-2.19 8.2a38 38 0 1 1 0-65.82a6 6 0 1 1-6 10.38a26 26 0 1 0 0 45.05a6 6 0 0 1 8.19 2.19"></svg:path>`,
})
export class PhClosedCaptioningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowDownLightIcon],svg[ph-cloud-arrow-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 128a85.27 85.27 0 0 1-17.2 51.6a6 6 0 1 1-9.6-7.2A74 74 0 1 0 86 128a6 6 0 0 1-12 0a85.5 85.5 0 0 1 3.91-25.64A51 51 0 0 0 72 102a50 50 0 0 0 0 100h24a6 6 0 0 1 0 12H72A62 62 0 1 1 82.43 90.88A86 86 0 0 1 246 128m-66.24 43.76L158 193.51V128a6 6 0 0 0-12 0v65.51l-21.76-21.75a6 6 0 0 0-8.48 8.48l32 32a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0-8.48-8.48"></svg:path>`,
})
export class PhCloudArrowDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowUpLightIcon],svg[ph-cloud-arrow-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.24 164.24a6 6 0 0 1-8.48 0L158 142.49V208a6 6 0 0 1-12 0v-65.51l-21.76 21.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 0 1 0 8.48M160 42a86.1 86.1 0 0 0-77.57 48.88A62 62 0 1 0 72 214h40a6 6 0 0 0 0-12H72a50 50 0 0 1 0-100a51 51 0 0 1 5.91.36A85.5 85.5 0 0 0 74 128a6 6 0 0 0 12 0a74 74 0 1 1 103.6 67.85a6 6 0 0 0 4.8 11A86 86 0 0 0 160 42"></svg:path>`,
})
export class PhCloudArrowUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudCheckLightIcon],svg[ph-cloud-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 42a86.11 86.11 0 0 0-77.57 48.88A62 62 0 1 0 72 214h88a86 86 0 0 0 0-172m0 160H72a50 50 0 0 1 0-100a51 51 0 0 1 5.91.35A85.6 85.6 0 0 0 74 128a6 6 0 0 0 12 0a74 74 0 1 1 74 74m36.24-94.24a6 6 0 0 1 0 8.48l-48 48a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L144 151.51l43.76-43.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhCloudCheckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudFogLightIcon],svg[ph-cloud-fog-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 206H72a6 6 0 0 1 0-12h48a6 6 0 0 1 0 12m64-12h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m-24 32h-56a6 6 0 0 0 0 12h56a6 6 0 0 0 0-12m70-126a74.09 74.09 0 0 1-74 74H76a50 50 0 1 1 10.2-99A74.08 74.08 0 0 1 230 100m-12 0a62.06 62.06 0 0 0-124-3.65a6 6 0 0 1-12-.7a76 76 0 0 1 1.07-9A38 38 0 1 0 76 162h80a62.07 62.07 0 0 0 62-62"></svg:path>`,
})
export class PhCloudFogLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudLightIcon],svg[ph-cloud-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 42a86.11 86.11 0 0 0-77.57 48.88A62 62 0 1 0 72 214h88a86 86 0 0 0 0-172m0 160H72a50 50 0 0 1 0-100a51 51 0 0 1 5.91.35A85.6 85.6 0 0 0 74 128a6 6 0 0 0 12 0a74 74 0 1 1 74 74"></svg:path>`,
})
export class PhCloudLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudLightningLightIcon],svg[ph-cloud-lightning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 18a74.21 74.21 0 0 0-69.89 49.3a6.2 6.2 0 0 0-1.83-.62A51 51 0 0 0 76 66a50 50 0 0 0 0 100h41.4l-18.55 30.91A6 6 0 0 0 104 206h29.4l-18.55 30.91a6 6 0 0 0 10.3 6.18l24-40A6 6 0 0 0 144 194h-29.4l16.8-28H156a74 74 0 0 0 0-148m0 136H76a38 38 0 1 1 6.31-75.48a7 7 0 0 0 .79.08a73 73 0 0 0-1.1 9.05a6 6 0 0 0 12 .7A62.06 62.06 0 1 1 156 154"></svg:path>`,
})
export class PhCloudLightningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudMoonLightIcon],svg[ph-cloud-moon-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 74a74.4 74.4 0 0 0-14.17 1.36a70 70 0 0 0-54.11-63.59A6 6 0 0 0 96.53 19A58.06 58.06 0 0 1 27 88.53a6 6 0 0 0-7.19 7.19a70.22 70.22 0 0 0 33.3 44.95A50 50 0 0 0 92 222h80a74 74 0 0 0 0-148M34.22 101.76q2.88.24 5.78.24a70.08 70.08 0 0 0 70-70c0-1.94-.08-3.88-.24-5.8A57.64 57.64 0 0 1 146 78.71A74.32 74.32 0 0 0 102.2 123a50.4 50.4 0 0 0-10.2-1a49.74 49.74 0 0 0-29.86 9.92a58.24 58.24 0 0 1-27.92-30.16M172 210H92a38 38 0 1 1 7.08-75.34a76 76 0 0 0-1.07 9a6 6 0 0 0 12 .7a61.5 61.5 0 0 1 2-12.24c0-.15.08-.29.11-.43A62.06 62.06 0 1 1 172 210"></svg:path>`,
})
export class PhCloudMoonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudRainLightIcon],svg[ph-cloud-rain-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m157 195.33l-32 48a6 6 0 1 1-10-6.66l32-48a6 6 0 0 1 10 6.66M230 92a74.09 74.09 0 0 1-74 74h-24.79L101 211.33a6 6 0 1 1-10-6.66L116.79 166H76a50 50 0 1 1 10.2-99A74.08 74.08 0 0 1 230 92m-12 0a62.06 62.06 0 0 0-124-3.65a6 6 0 0 1-12-.7a76 76 0 0 1 1.07-9A38 38 0 1 0 76 154h80a62.07 62.07 0 0 0 62-62"></svg:path>`,
})
export class PhCloudRainLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSlashLightIcon],svg[ph-cloud-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l40.18 44.2c-.45.87-.9 1.75-1.32 2.64A62 62 0 1 0 72 214h88a85.2 85.2 0 0 0 32.35-6.3l11.21 12.3a6 6 0 0 0 8.88-8.08ZM160 202H72a50 50 0 1 1 5.9-99.64A86.3 86.3 0 0 0 74 128a6 6 0 0 0 12 0a73.9 73.9 0 0 1 6.44-30.2l91.22 100.34A73.7 73.7 0 0 1 160 202m86-74a85.85 85.85 0 0 1-21.85 57.27a6 6 0 0 1-4.47 2a6 6 0 0 1-4.47-10a74 74 0 0 0-99-108.92a6 6 0 1 1-7.11-9.67A86 86 0 0 1 246 128"></svg:path>`,
})
export class PhCloudSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSnowLightIcon],svg[ph-cloud-snow-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M86 196a10 10 0 1 1-10-10a10 10 0 0 1 10 10m30 6a10 10 0 1 0 10 10a10 10 0 0 0-10-10m48-16a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-96 40a10 10 0 1 0 10 10a10 10 0 0 0-10-10m88 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m74-134a74.09 74.09 0 0 1-74 74H76a50 50 0 1 1 10.2-99A74.08 74.08 0 0 1 230 92m-12 0a62.06 62.06 0 0 0-124-3.65a6 6 0 0 1-12-.7a76 76 0 0 1 1.07-9A38 38 0 1 0 76 154h80a62.07 62.07 0 0 0 62-62"></svg:path>`,
})
export class PhCloudSnowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSunLightIcon],svg[ph-cloud-sun-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 74a74.2 74.2 0 0 0-21.18 3.09a54.1 54.1 0 0 0-11.14-13.61l10.52-15a6 6 0 1 0-9.83-6.89l-10.52 15A53.9 53.9 0 0 0 96 50c-1.15 0-2.28 0-3.41.12L89.4 32.05a6 6 0 1 0-11.81 2.09l3.18 18.06a54 54 0 0 0-25.25 16.12L40.47 57.78a6 6 0 0 0-6.89 9.83l15 10.52A53.7 53.7 0 0 0 42 104c0 1.13 0 2.26.12 3.39l-18.07 3.18a6 6 0 0 0 1 11.91a6.4 6.4 0 0 0 1.05-.09l18.1-3.19a53.5 53.5 0 0 0 7.08 15A50 50 0 0 0 84 222h80a74 74 0 0 0 0-148M54 104a42 42 0 0 1 77.48-22.49A74.3 74.3 0 0 0 94.2 123a50.4 50.4 0 0 0-10.2-1a49.65 49.65 0 0 0-22.79 5.52A42 42 0 0 1 54 104m110 106H84a38 38 0 1 1 7.08-75.34a76 76 0 0 0-1.07 9a6 6 0 0 0 12 .7a61.5 61.5 0 0 1 2-12.24c0-.15.08-.29.11-.43A62.06 62.06 0 1 1 164 210"></svg:path>`,
})
export class PhCloudSunLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudWarningLightIcon],svg[ph-cloud-warning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 42a86.11 86.11 0 0 0-77.57 48.88A62 62 0 1 0 72 214h88a86 86 0 0 0 0-172m0 160H72a50 50 0 0 1 0-100a51 51 0 0 1 5.91.35A85.6 85.6 0 0 0 74 128a6 6 0 0 0 12 0a74 74 0 1 1 74 74m-6-74V88a6 6 0 0 1 12 0v40a6 6 0 0 1-12 0m16 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhCloudWarningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudXLightIcon],svg[ph-cloud-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 42a86.11 86.11 0 0 0-77.57 48.88A62 62 0 1 0 72 214h88a86 86 0 0 0 0-172m0 160H72a50 50 0 0 1 0-100a51 51 0 0 1 5.91.35A85.6 85.6 0 0 0 74 128a6 6 0 0 0 12 0a74 74 0 1 1 74 74m28.24-85.76L168.48 136l19.76 19.76a6 6 0 1 1-8.48 8.48L160 144.48l-19.76 19.76a6 6 0 0 1-8.48-8.48L151.52 136l-19.76-19.76a6 6 0 0 1 8.48-8.48L160 127.52l19.76-19.76a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhCloudXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloverLightIcon],svg[ph-clover-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.86 163.71C223.56 158.21 230 143.5 230 120s-6.44-38.21-19.14-43.71c-14.5-6.29-34 1.5-51 11.8c10.3-16.93 18.08-36.45 11.8-50.95C166.21 24.44 151.5 18 128 18s-38.21 6.44-43.71 19.14c-6.28 14.5 1.5 34 11.8 51C79.17 77.79 59.64 70 45.14 76.29C32.44 81.79 26 96.5 26 120s6.44 38.21 19.14 43.71A29.1 29.1 0 0 0 56.78 166c12.42 0 26.6-6.33 39.32-14.08c-10.31 16.93-18.1 36.46-11.81 51C89.79 215.56 104.5 222 128 222s38.21-6.44 43.71-19.14c3-6.82 2.79-14.76.72-23c12.62 18.21 24.22 39.49 29.75 61.6A6 6 0 0 0 208 246a6 6 0 0 0 1.46-.18a6 6 0 0 0 4.36-7.28c-7.56-30.24-25.2-58.44-42.18-80.2c9.32 4.51 18.88 7.63 27.58 7.63a29.1 29.1 0 0 0 11.64-2.26M95.3 41.91C98.73 34 109.73 30 128 30s29.27 4 32.7 11.91c3.9 9-1.11 24.85-14.11 44.61A247 247 0 0 1 128 111a247 247 0 0 1-18.59-24.45c-13-19.79-18.01-35.64-14.11-44.64M49.91 152.7C42 149.27 38 138.27 38 120s4-29.27 11.91-32.7a17.5 17.5 0 0 1 7-1.29c9.26 0 22.27 5.28 37.65 15.4A246 246 0 0 1 119 120a246 246 0 0 1-24.45 18.59c-19.79 13-35.64 18.01-44.64 14.11m110.79 45.39C157.27 206 146.27 210 128 210s-29.27-4-32.7-11.91c-3.9-9 1.11-24.85 14.11-44.61A246 246 0 0 1 128 129a246 246 0 0 1 18.59 24.45c13 19.79 18.01 35.63 14.11 44.64m.78-59.5A246 246 0 0 1 137 120a246 246 0 0 1 24.45-18.59c19.76-13 35.61-18 44.61-14.11C214 90.73 218 101.73 218 120s-4 29.27-11.91 32.7c-9 3.9-24.85-1.11-44.61-14.11"></svg:path>`,
})
export class PhCloverLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClubLightIcon],svg[ph-club-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 90q-2.59 0-5.16.24a54 54 0 1 0-101.69 0c-1.7-.16-3.42-.24-5.15-.24a54 54 0 1 0 27.85 100.28l-9.6 32A6 6 0 0 0 96 230h64a6 6 0 0 0 5.75-7.72l-9.6-32A54 54 0 1 0 184 90m0 96a41.92 41.92 0 0 1-35.06-18.87a6 6 0 0 0-10.76 5L151.94 218h-47.88l13.76-45.84a6 6 0 0 0-10.76-5a42 42 0 1 1-20.91-62.69a6 6 0 0 0 7-9a42 42 0 1 1 69.72 0a6 6 0 0 0 7 9A42 42 0 1 1 184 186"></svg:path>`,
})
export class PhClubLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoatHangerLightIcon],svg[ph-coat-hanger-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240.37 172.8L138 96l25.59-19.2A6 6 0 0 0 166 72a38 38 0 1 0-76 0a6 6 0 0 0 12 0a26 26 0 0 1 51.82-2.88l-29.32 22l-.21.16L15.63 172.8A14 14 0 0 0 24 198h208a14 14 0 0 0 8.39-25.2Zm-6.5 11.83A1.85 1.85 0 0 1 232 186H24a2 2 0 0 1-1.19-3.6L128 103.5l105.17 78.9a1.85 1.85 0 0 1 .7 2.23"></svg:path>`,
})
export class PhCoatHangerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodaLogoLightIcon],svg[ph-coda-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 86a41.8 41.8 0 0 1 22.61 6.41A10 10 0 0 0 214 84V48a14 14 0 0 0-14-14H56a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-36a10 10 0 0 0-15.36-8.43c-7.63 4.89-14.11 6.76-22.4 6.42H176a42 42 0 0 1 0-84Zm-54 42a54.06 54.06 0 0 0 53.88 54a46.36 46.36 0 0 0 26.12-6.43V208a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2v32.48A54.28 54.28 0 0 0 122 128"></svg:path>`,
})
export class PhCodaLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeBlockLightIcon],svg[ph-code-block-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m59.76 100.24l-32-32a6 6 0 0 1 0-8.48l32-32a6 6 0 1 1 8.48 8.48L40.49 64l27.75 27.76a6 6 0 1 1-8.48 8.48m40 0a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0 0-8.48l-32-32a6 6 0 1 0-8.48 8.48L127.51 64L99.76 91.76a6 6 0 0 0 0 8.48M200 42h-24a6 6 0 0 0 0 12h24a2 2 0 0 1 2 2v144a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-64a6 6 0 0 0-12 0v64a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14"></svg:path>`,
})
export class PhCodeBlockLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeLightIcon],svg[ph-code-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M67.84 92.61L25.37 128l42.47 35.39a6 6 0 1 1-7.68 9.22l-48-40a6 6 0 0 1 0-9.22l48-40a6 6 0 0 1 7.68 9.22m176 30.78l-48-40a6 6 0 1 0-7.68 9.22L230.63 128l-42.47 35.39a6 6 0 1 0 7.68 9.22l48-40a6 6 0 0 0 0-9.22m-81.79-89a6 6 0 0 0-7.69 3.61l-64 176a6 6 0 0 0 3.64 7.64a6.2 6.2 0 0 0 2 .36a6 6 0 0 0 5.64-3.95l64-176a6 6 0 0 0-3.59-7.69Z"></svg:path>`,
})
export class PhCodeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeSimpleLightIcon],svg[ph-code-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 68.49L25 128l67 59.52a6 6 0 1 1-8 9l-72-64a6 6 0 0 1 0-9l72-64a6 6 0 0 1 8 9Zm152 55l-72-64a6 6 0 0 0-8 9L231 128l-67 59.52a6 6 0 1 0 8 9l72-64a6 6 0 0 0 0-9Z"></svg:path>`,
})
export class PhCodeSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodepenLogoLightIcon],svg[ph-codepen-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.85 90.72l-104-56a6 6 0 0 0-5.68 0l-104 56A6 6 0 0 0 18 96v64a6 6 0 0 0 3.15 5.28l104 56a6 6 0 0 0 5.68 0l104-56A6 6 0 0 0 238 160V96a6 6 0 0 0-3.15-5.28M226 150l-40.77-22L226 106Zm-53.43-28.77L134 100.42V50l85.34 46Zm-44.57 24L96.08 128L128 110.81L159.92 128ZM122 50v50.38l-38.57 20.8L36.66 96Zm-92 56l40.77 22L30 150Zm53.43 28.76L122 155.58V206l-85.34-46ZM134 206v-50.42l38.57-20.77L219.34 160Z"></svg:path>`,
})
export class PhCodepenLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodesandboxLogoLightIcon],svg[ph-codesandbox-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.72 67.91l-88-48.18a13.9 13.9 0 0 0-13.44 0l-88 48.17A14 14 0 0 0 26 80.18v95.64a14 14 0 0 0 7.28 12.28l88 48.17a13.92 13.92 0 0 0 13.44 0l88-48.17a14 14 0 0 0 7.28-12.28V80.18a14 14 0 0 0-7.28-12.27M128 121.16L44.49 75.44l38.65-21.15l42 23a6 6 0 0 0 5.76 0l42-23l38.65 21.15Zm-1-90.91a2 2 0 0 1 1.92 0l31.4 17.2L128 65.16L95.63 47.45ZM38 175.82v-40l36 19.7v41.16l-35-19.11a2 2 0 0 1-1-1.75m48 27.46V152a6 6 0 0 0-3.12-5.26L38 122.17v-36.6l84 46V223ZM134 223v-91.44l84-46v36.6l-44.88 24.57A6 6 0 0 0 170 152v51.28Zm83-45.42l-35 19.14v-41.17l36-19.7v40a2 2 0 0 1-1 1.72Z"></svg:path>`,
})
export class PhCodesandboxLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeBeanLightIcon],svg[ph-coffee-bean-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.34 45.66C194 29.35 170 22.87 142.79 27.42C116.28 31.83 89.71 46.24 68 68s-36.14 48.3-40.56 74.81C22.87 170 29.35 194 45.66 210.34C58.57 223.25 76.29 230 96.64 230a101.6 101.6 0 0 0 16.57-1.41c26.51-4.42 53.08-18.83 74.82-40.56s36.14-48.31 40.56-74.82C233.13 86 226.65 62 210.34 45.66M76.46 76.46C101.52 51.4 132.46 38 159.18 38c12.58 0 24.22 3 33.87 9.12a108 108 0 0 0-34.71 18c-18.82 14.86-31 35.62-36.22 61.71C112 177.35 75.18 194 52 199.5c-25.7-29.08-15.17-83.41 24.46-123.04m103.08 103.08C142.68 216.4 93.1 228.1 63 208.91a108 108 0 0 0 34.71-18c18.82-14.86 31-35.62 36.22-61.71C144 78.65 180.82 62 204.05 56.5c25.65 29.09 15.12 83.41-24.51 123.04"></svg:path>`,
})
export class PhCoffeeBeanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeLightIcon],svg[ph-coffee-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M82 56V24a6 6 0 0 1 12 0v32a6 6 0 0 1-12 0m38 6a6 6 0 0 0 6-6V24a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 0a6 6 0 0 0 6-6V24a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m94 58v8a38 38 0 0 1-36.94 38a94.55 94.55 0 0 1-31.13 44H208a6 6 0 0 1 0 12H32a6 6 0 0 1 0-12h30.07A94.34 94.34 0 0 1 26 136V88a6 6 0 0 1 6-6h176a38 38 0 0 1 38 38m-44 16V94H38v42a82.27 82.27 0 0 0 46.67 74h70.66A82.27 82.27 0 0 0 202 136m32-16a26 26 0 0 0-20-25.29V136a93 93 0 0 1-1.69 17.64A26 26 0 0 0 234 128Z"></svg:path>`,
})
export class PhCoffeeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinLightIcon],svg[ph-coin-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206.68 65.63C186.23 55.41 159 50 128 50s-58.23 5.41-78.68 15.63C29.41 75.58 18 89.57 18 104v48c0 14.43 11.41 28.42 31.32 38.37C69.77 200.59 97 206 128 206s58.23-5.41 78.68-15.63C226.59 180.42 238 166.43 238 152v-48c0-14.43-11.41-28.42-31.32-38.37m-152 10.74C73.21 67.1 99.25 62 128 62s54.79 5.1 73.32 14.37C217 84.21 226 94.28 226 104s-9 19.79-24.68 27.63C182.79 140.9 156.75 146 128 146s-54.79-5.1-73.32-14.37C39 123.79 30 113.72 30 104s9-19.79 24.68-27.63M122 157.93v36c-19.24-.48-37.07-3.28-52-8.11v-35.4c15.27 4.51 32.85 7.07 52 7.51m12 0c19.15-.44 36.73-3 52-7.52v35.4c-14.93 4.83-32.76 7.63-52 8.11ZM30 152v-23a76 76 0 0 0 19.32 13.36q4.16 2.07 8.68 3.88v35c-1.13-.52-2.24-1-3.32-1.58C39 171.79 30 161.72 30 152m171.32 27.63c-1.08.54-2.19 1.06-3.32 1.58v-35q4.51-1.81 8.68-3.88A76 76 0 0 0 226 129v23c0 9.72-9 19.79-24.68 27.63"></svg:path>`,
})
export class PhCoinLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinVerticalLightIcon],svg[ph-coin-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.78 57.09C185.08 37 169.18 26 152 26h-48c-17.18 0-33.08 11-44.78 31.09C48.12 76.13 42 101.31 42 128s6.12 51.87 17.22 70.91C70.92 219 86.82 230 104 230h48c17.18 0 33.08-11 44.78-31.09c11.1-19 17.22-44.22 17.22-70.91s-6.12-51.87-17.22-70.91m5.1 64.91h-36c-.65-18.84-4.37-36.73-10.74-52H190c7.06 14.74 11.16 32.77 11.88 52M152 38c11.31 0 22.22 7.06 31.14 20h-33.86l-.5-.91A76.8 76.8 0 0 0 133.49 38ZM69.58 192.86C59.54 175.63 54 152.6 54 128s5.54-47.63 15.58-64.86C79 46.93 91.26 38 104 38s25 8.93 34.42 25.14C148.46 80.37 154 103.4 154 128s-5.54 47.63-15.58 64.86C129 209.07 116.74 218 104 218s-25-8.93-34.42-25.14M152 218h-18.51a76.8 76.8 0 0 0 15.29-19.09l.5-.91h33.86c-8.92 12.94-19.83 20-31.14 20m38-32h-34.86c6.37-15.27 10.09-33.16 10.74-52h36c-.72 19.23-4.82 37.26-11.88 52"></svg:path>`,
})
export class PhCoinVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinsLightIcon],svg[ph-coins-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.56 103.81c-11.13-6.06-26.09-10.42-42.56-12.47V84c0-12.12-9.58-23.1-27-30.93C139.16 45.93 118.2 42 96 42s-43.16 3.93-59 11.07C19.58 60.9 10 71.88 10 84v40c0 12.12 9.58 23.1 27 30.93c10.49 4.72 23.21 8 37 9.73V172c0 12.12 9.58 23.1 27 30.93c15.84 7.14 36.8 11.07 59 11.07s43.16-3.93 59-11.07c17.39-7.83 27-18.81 27-30.93v-40c0-10.65-7.61-20.66-21.44-28.19m-5.74 10.54C228.61 119.68 234 126 234 132c0 14.19-30.39 30-74 30a167 167 0 0 1-21.21-1.34a111 111 0 0 0 16.21-5.73c17.39-7.83 27-18.81 27-30.93v-20.57c14.4 1.93 27.3 5.73 36.82 10.92m-110.66 39.23c-3.92.27-8 .42-12.16.42c-5.3 0-10.4-.24-15.28-.67a2 2 0 0 0-.37 0c-3.58-.33-7-.77-10.35-1.3v-27.91A178 178 0 0 0 96 126a178 178 0 0 0 26-1.88V152c-4.34.69-8.91 1.22-13.69 1.56ZM170 105.89V124c0 9.54-13.75 19.8-36 25.51v-27.66a115 115 0 0 0 21-6.92a66.2 66.2 0 0 0 15-9.04M96 54c43.61 0 74 15.81 74 30s-30.39 30-74 30s-74-15.81-74-30s30.39-30 74-30m-74 70v-18.11a66.2 66.2 0 0 0 15 9a115 115 0 0 0 21 6.92v27.66C35.75 143.8 22 133.54 22 124m64 48v-6.28c3.3.18 6.63.28 10 .28q5.91 0 11.66-.37a123 123 0 0 0 14.34 4.21v27.67C99.75 191.8 86 181.54 86 172m48 28v-27.9a178 178 0 0 0 26 1.9a178 178 0 0 0 26-1.88V200a170 170 0 0 1-52 0m64-2.49v-27.66a115 115 0 0 0 21-6.92a66.2 66.2 0 0 0 15-9V172c0 9.54-13.75 19.8-36 25.51"></svg:path>`,
})
export class PhCoinsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsLightIcon],svg[ph-columns-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 34H64a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h40a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h40a2 2 0 0 1 2 2Zm86-174h-40a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h40a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2h-40a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h40a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhColumnsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusLeftLightIcon],svg[ph-columns-plus-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 34h-24a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2h-24a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2Zm70-174h-24a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2h-24a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2ZM70 128a6 6 0 0 1-6 6H46v18a6 6 0 0 1-12 0v-18H16a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhColumnsPlusLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusRightLightIcon],svg[ph-columns-plus-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 34H56a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2Zm70-174h-24a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2h-24a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2Zm92-80a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhColumnsPlusRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCommandLightIcon],svg[ph-command-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 146h-22v-36h22a34 34 0 1 0-34-34v22h-36V76a34 34 0 1 0-34 34h22v36H76a34 34 0 1 0 34 34v-22h36v22a34 34 0 1 0 34-34m-22-70a22 22 0 1 1 22 22h-22ZM54 76a22 22 0 0 1 44 0v22H76a22 22 0 0 1-22-22m44 104a22 22 0 1 1-22-22h22Zm12-70h36v36h-36Zm70 92a22 22 0 0 1-22-22v-22h22a22 22 0 0 1 0 44"></svg:path>`,
})
export class PhCommandLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassLightIcon],svg[ph-compass-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m45.32-143.37l-64 32a6 6 0 0 0-2.69 2.69l-32 64A6 6 0 0 0 80 182a6.06 6.06 0 0 0 2.68-.63l64-32a6 6 0 0 0 2.69-2.69l32-64a6 6 0 0 0-8.05-8.05m-33.79 64.9l-46.11 23.05l23-46.11l46.11-23Z"></svg:path>`,
})
export class PhCompassLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassRoseLightIcon],svg[ph-compass-rose-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.46 122.18l-28.34-7.09a93.87 93.87 0 0 0-80.22-80.21l-7.08-28.34a6 6 0 0 0-11.64 0l-7.08 28.34a93.87 93.87 0 0 0-80.22 80.21l-28.34 7.09a6 6 0 0 0 0 11.64l28.34 7.09a93.87 93.87 0 0 0 80.22 80.21l7.08 28.34a6 6 0 0 0 11.64 0l7.08-28.34a93.87 93.87 0 0 0 80.22-80.21l28.34-7.09a6 6 0 0 0 0-11.64m-41.05-10.26L157 99.05l-12.92-51.46a81.87 81.87 0 0 1 64.33 64.33m-63-9.76L128 119.51l-17.36-17.35L128 32.74Zm-33.49-54.57L99.05 99.05l-51.46 12.87a81.87 81.87 0 0 1 64.33-64.33m-9.76 63.06L119.52 128l-17.36 17.35L32.74 128Zm-54.57 33.43L99.05 157l12.87 51.46a81.87 81.87 0 0 1-64.33-64.38m63.05 9.76L128 136.49l17.36 17.35L128 223.26Zm33.44 54.57L157 157l51.46-12.87a81.87 81.87 0 0 1-64.38 64.28m9.76-63.06L136.48 128l17.36-17.35L223.26 128Z"></svg:path>`,
})
export class PhCompassRoseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassToolLightIcon],svg[ph-compass-tool-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.34 122.73a6 6 0 1 0-10.68-5.46a81.8 81.8 0 0 1-35.81 35.36l-18.14-40.8A38 38 0 0 0 134 42.48V24a6 6 0 0 0-12 0v18.48a38 38 0 0 0-14.71 69.35L58.52 221.56a6 6 0 1 0 11 4.88l25.9-58.26A93.4 93.4 0 0 0 128 174a97 97 0 0 0 32.68-5.69l25.84 58.13a6 6 0 1 0 11-4.88l-25.77-58a93.92 93.92 0 0 0 41.59-40.83M128 54a26 26 0 1 1-26 26a26 26 0 0 1 26-26m0 108a81.5 81.5 0 0 1-27.73-4.83l18-40.45a37.85 37.85 0 0 0 19.52 0l18 40.6A85.3 85.3 0 0 1 128 162"></svg:path>`,
})
export class PhCompassToolLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phComputerTowerLightIcon],svg[ph-computer-tower-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 72a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6 26H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m46-58v176a14 14 0 0 1-14 14H64a14 14 0 0 1-14-14V40a14 14 0 0 1 14-14h128a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H64a2 2 0 0 0-2 2v176a2 2 0 0 0 2 2h128a2 2 0 0 0 2-2Zm-66 130a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhComputerTowerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phConfettiLightIcon],svg[ph-confetti-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M110.08 54a13.8 13.8 0 0 0-22.73 5.05l-52.5 144.42A13.82 13.82 0 0 0 47.76 222a14 14 0 0 0 4.77-.85l144.38-52.5a13.8 13.8 0 0 0 5-22.73ZM48.43 209.87a1.79 1.79 0 0 1-2.3-2.3l15.18-41.77l28.89 28.88Zm54.21-19.71l-36.8-36.81L80.51 113L143 175.49ZM194 156.07a1.74 1.74 0 0 1-1.14 1.3L155.44 171L85 100.55l13.63-37.36a1.72 1.72 0 0 1 1.3-1.14a1.6 1.6 0 0 1 .41 0a1.72 1.72 0 0 1 1.25.53l91.88 91.88a1.73 1.73 0 0 1 .53 1.61M162 72a35.5 35.5 0 0 1 3.63-14.68C170.57 47.44 179.93 42 192 42c7.47 0 12.53-2.74 15.48-8.38A24.2 24.2 0 0 0 210 24a6 6 0 0 1 6-6a6 6 0 0 1 6 6c0 10.38-6.27 30-30 30c-7.47 0-12.53 2.74-15.48 8.38A24 24 0 0 0 174 72a6 6 0 0 1-6 6a6 6 0 0 1-6-6m-24-32V16a6 6 0 0 1 12 0v24a6 6 0 0 1-12 0m98.24 83.76a6 6 0 1 1-8.48 8.48l-16-16a6 6 0 0 1 8.48-8.48Zm5.66-46.07l-24 8a6 6 0 1 1-3.8-11.38l24-8a6 6 0 0 1 3.8 11.38"></svg:path>`,
})
export class PhConfettiLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phContactlessPaymentLightIcon],svg[ph-contactless-payment-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M95.31 101.2a57.37 57.37 0 0 1 0 53.6a6 6 0 0 1-10.62-5.6a44.75 44.75 0 0 0 0-42.4a6 6 0 1 1 10.62-5.6m47.86-34.49a6 6 0 0 0-2.46 8.12a112.67 112.67 0 0 1 0 106.34a6 6 0 1 0 10.58 5.66a124.65 124.65 0 0 0 0-117.66a6 6 0 0 0-8.12-2.46m-28 16a6 6 0 0 0-2.48 8.12a79 79 0 0 1 0 74.36a6 6 0 0 0 10.6 5.64a91 91 0 0 0 0-85.64a6 6 0 0 0-8.11-2.49ZM230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90"></svg:path>`,
})
export class PhContactlessPaymentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phControlLightIcon],svg[ph-control-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.24 124.24a6 6 0 0 1-8.48 0L128 56.49l-67.76 67.75a6 6 0 0 1-8.48-8.48l72-72a6 6 0 0 1 8.48 0l72 72a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhControlLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookieLightIcon],svg[ph-cookie-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M163.07 164.93a10 10 0 1 1-14.14 0a10 10 0 0 1 14.14 0m-78.14-8a10 10 0 1 0 14.14 0a10 10 0 0 0-14.14 0m6.14-41.86a10 10 0 1 0-14.14 0a10 10 0 0 0 14.14 0m33.86 1.86a10 10 0 1 0 14.14 0a10 10 0 0 0-14.14 0M230 128A102 102 0 1 1 128 26a6 6 0 0 1 6 6a42 42 0 0 0 42 42a6 6 0 0 1 6 6a42 42 0 0 0 42 42a6 6 0 0 1 6 6m-12.18 5.65A54.09 54.09 0 0 1 170.3 85.7a54.09 54.09 0 0 1-48-47.53a90 90 0 1 0 95.47 95.48Z"></svg:path>`,
})
export class PhCookieLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookingPotLightIcon],svg[ph-cooking-pot-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 48V16a6 6 0 0 1 12 0v32a6 6 0 0 1-12 0m38 6a6 6 0 0 0 6-6V16a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 0a6 6 0 0 0 6-6V16a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m91.6 46.8L222 123v61a30 30 0 0 1-30 30H64a30 30 0 0 1-30-30v-61L4.4 100.8a6 6 0 0 1 7.2-9.6L34 108V80a6 6 0 0 1 6-6h176a6 6 0 0 1 6 6v28l22.4-16.8a6 6 0 0 1 7.2 9.6M210 86H46v98a18 18 0 0 0 18 18h128a18 18 0 0 0 18-18Z"></svg:path>`,
})
export class PhCookingPotLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyLightIcon],svg[ph-copy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 34H88a6 6 0 0 0-6 6v42H40a6 6 0 0 0-6 6v128a6 6 0 0 0 6 6h128a6 6 0 0 0 6-6v-42h42a6 6 0 0 0 6-6V40a6 6 0 0 0-6-6m-54 176H46V94h116Zm48-48h-36V88a6 6 0 0 0-6-6H94V46h116Z"></svg:path>`,
})
export class PhCopyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopySimpleLightIcon],svg[ph-copy-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 66H40a6 6 0 0 0-6 6v144a6 6 0 0 0 6 6h144a6 6 0 0 0 6-6V72a6 6 0 0 0-6-6m-6 144H46V78h132Zm44-170v144a6 6 0 0 1-12 0V46H72a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCopySimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyleftLightIcon],svg[ph-copyleft-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m46-90a46 46 0 0 1-82.8 27.61a6 6 0 0 1 9.6-7.21a34 34 0 1 0 0-40.8a6 6 0 0 1-9.6-7.21A46 46 0 0 1 174 128"></svg:path>`,
})
export class PhCopyleftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyrightLightIcon],svg[ph-copyright-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m-34-90a34 34 0 0 0 61.2 20.4a6 6 0 0 1 9.6 7.21a46 46 0 1 1 0-55.22a6 6 0 0 1-9.6 7.21A34 34 0 0 0 94 128"></svg:path>`,
})
export class PhCopyrightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersInLightIcon],svg[ph-corners-in-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M154 96V48a6 6 0 0 1 12 0v42h42a6 6 0 0 1 0 12h-48a6 6 0 0 1-6-6m-58 58H48a6 6 0 0 0 0 12h42v42a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6m112 0h-48a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-42h42a6 6 0 0 0 0-12M96 42a6 6 0 0 0-6 6v42H48a6 6 0 0 0 0 12h48a6 6 0 0 0 6-6V48a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCornersInLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersOutLightIcon],svg[ph-corners-out-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 48v40a6 6 0 0 1-12 0V54h-34a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6M88 202H54v-34a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6h40a6 6 0 0 0 0-12m120-40a6 6 0 0 0-6 6v34h-34a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6M88 42H48a6 6 0 0 0-6 6v40a6 6 0 0 0 12 0V54h34a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhCornersOutLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCouchLightIcon],svg[ph-couch-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 107.37V72a14 14 0 0 0-14-14H32a14 14 0 0 0-14 14v35.37A14 14 0 0 0 10 120v48a14 14 0 0 0 14 14h10v18a6 6 0 0 0 12 0v-18h164v18a6 6 0 0 0 12 0v-18h10a14 14 0 0 0 14-14v-48a14 14 0 0 0-8-12.63M226 72v34h-10a14 14 0 0 0-14 14v18h-68V70h90a2 2 0 0 1 2 2M32 70h90v68H54v-18a14 14 0 0 0-14-14H30V72a2 2 0 0 1 2-2m202 98a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v24a6 6 0 0 0 6 6h160a6 6 0 0 0 6-6v-24a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhCouchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCourtBasketballLightIcon],svg[ph-court-basketball-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 112h-10a34 34 0 0 1 0-68h10ZM30 94h10a34 34 0 0 1 0 68H30Zm0 98v-18h10a46 46 0 0 0 0-92H30V64a2 2 0 0 1 2-2h90v132H32a2 2 0 0 1-2-2m194 2h-90V62h90a2 2 0 0 1 2 2v18h-10a46 46 0 0 0 0 92h10v18a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhCourtBasketballLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowLightIcon],svg[ph-cow-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102 192a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6m74-6h-16a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12m-76-72a10 10 0 1 0 10 10a10 10 0 0 0-10-10m56 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m86.85 6.85A14 14 0 0 1 232 126h-34v35.05A38 38 0 0 1 176 230H80a38 38 0 0 1-22-68.95V126H24a14 14 0 0 1-10.87-5.15a13.82 13.82 0 0 1-2.88-11.5A54.12 54.12 0 0 1 63.22 66h6.89A53.93 53.93 0 0 1 50 24a6 6 0 0 1 12 0a42 42 0 0 0 42 42h48a42 42 0 0 0 42-42a6 6 0 0 1 12 0a53.93 53.93 0 0 1-20.11 42h6.89a54.12 54.12 0 0 1 52.95 43.35a13.82 13.82 0 0 1-2.88 11.5M58 114v-10a37.87 37.87 0 0 1 10.32-26h-5.1A42.08 42.08 0 0 0 22 111.7a1.83 1.83 0 0 0 .4 1.55a2 2 0 0 0 1.6.75Zm144 78a26 26 0 0 0-26-26H80a26 26 0 0 0 0 52h96a26 26 0 0 0 26-26m-16-36.66V104a26 26 0 0 0-26-26H96a26 26 0 0 0-26 26v51.34A38 38 0 0 1 80 154h96a38 38 0 0 1 10 1.34m48-43.64A42.08 42.08 0 0 0 192.78 78h-5.1A37.87 37.87 0 0 1 198 104v10h34a2 2 0 0 0 1.58-.75a1.83 1.83 0 0 0 .42-1.55"></svg:path>`,
})
export class PhCowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowboyHatLightIcon],svg[ph-cowboy-hat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 122a6 6 0 0 0-5.09 2.82a177 177 0 0 1-16.69 22.65l-17.87-94a14 14 0 0 0-22.5-8.35l-.1.08l-24.53 20.39a2 2 0 0 1-2.44 0l-24.53-20.43l-.1-.08a14 14 0 0 0-22.5 8.34l-17.88 94.07a178 178 0 0 1-16.68-22.67A6 6 0 0 0 40 122a38 38 0 0 0 0 76h176a38 38 0 0 0 0-76M91.44 55.65a2 2 0 0 1 3.18-1.22l24.54 20.43l.09.08a13.93 13.93 0 0 0 17.5 0l.09-.08l24.54-20.43a2 2 0 0 1 3.18 1.23L178.69 130H77.31ZM40 186a26 26 0 0 1-3.17-51.81c17.67 27.25 36.7 42.86 52.79 51.81Zm88 0c-.34 0-26.71-.41-56-27.91L75 142h106l3 16.05a115.8 115.8 0 0 1-28.89 20.19C139.38 185.81 128.08 186 128 186m88 0h-49.62c16.09-8.95 35.12-24.56 52.79-51.81A26 26 0 0 1 216 186"></svg:path>`,
})
export class PhCowboyHatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCpuLightIcon],svg[ph-cpu-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 98h-48a6 6 0 0 0-6 6v48a6 6 0 0 0 6 6h48a6 6 0 0 0 6-6v-48a6 6 0 0 0-6-6m-6 48h-36v-36h36Zm86 0h-18v-36h18a6 6 0 0 0 0-12h-18V56a14 14 0 0 0-14-14h-42V24a6 6 0 0 0-12 0v18h-36V24a6 6 0 0 0-12 0v18H56a14 14 0 0 0-14 14v42H24a6 6 0 0 0 0 12h18v36H24a6 6 0 0 0 0 12h18v42a14 14 0 0 0 14 14h42v18a6 6 0 0 0 12 0v-18h36v18a6 6 0 0 0 12 0v-18h42a14 14 0 0 0 14-14v-42h18a6 6 0 0 0 0-12m-30 54a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhCpuLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneLightIcon],svg[ph-crane-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.09 18.86a6 6 0 0 0-5.91-.15L102.5 82H32a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h88a14 14 0 0 0 14-14v-32a6.3 6.3 0 0 0-.25-1.72L111.16 91L218 34v126a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2v-8a6 6 0 0 0-12 0v8a14 14 0 0 0 14 14h16a14 14 0 0 0 14-14V24a6 6 0 0 0-2.91-5.14M99.54 94l20.4 68H62V94ZM32 94h18v68H30V96a2 2 0 0 1 2-2m88 108H32a2 2 0 0 1-2-2v-26h92v26a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhCraneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneTowerLightIcon],svg[ph-crane-tower-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 82H107.71L85.37 37.32A6 6 0 0 0 80 34H48a6 6 0 0 0-6 6v42H24a6 6 0 0 0 0 12h18v116H24a6 6 0 0 0 0 12h104a6 6 0 0 0 0-12h-18V94h100v90a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2v-8a6 6 0 0 0-12 0v8a14 14 0 0 0 14 14h16a14 14 0 0 0 14-14V94h18a6 6 0 0 0 0-12M54 46h22.29l18 36H54Zm0 164v-52h44v52Zm44-64H54V94h44Z"></svg:path>`,
})
export class PhCraneTowerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCreditCardLightIcon],svg[ph-credit-card-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14M32 62h192a2 2 0 0 1 2 2v26H30V64a2 2 0 0 1 2-2m192 132H32a2 2 0 0 1-2-2v-90h196v90a2 2 0 0 1-2 2m-18-26a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m-64 0a6 6 0 0 1-6 6h-16a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCreditCardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCricketLightIcon],svg[ph-cricket-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.9 82.79L189.21 30.1a14 14 0 0 0-19.79 0L62.1 137.42a14 14 0 0 0 0 19.79l22.1 22.1l-48.44 48.45a6 6 0 1 0 8.48 8.48l48.45-48.44l22.1 22.1a14 14 0 0 0 19.79 0L241.9 102.58a14 14 0 0 0 0-19.79M126.1 201.42a2 2 0 0 1-2.83 0l-22.1-22.11l31.07-31.07a6 6 0 0 0-8.48-8.48l-31.07 31.07l-22.11-22.1a2 2 0 0 1 0-2.83l35.9-35.9H162v55.52ZM233.42 94.1L174 153.52V104a6 6 0 0 0-6-6h-49.52l59.42-59.42a2 2 0 0 1 2.83 0l52.69 52.69a2 2 0 0 1 0 2.83M60 86a26 26 0 1 0-26-26a26 26 0 0 0 26 26m0-40a14 14 0 1 1-14 14a14 14 0 0 1 14-14"></svg:path>`,
})
export class PhCricketLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCropLightIcon],svg[ph-crop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 192a6 6 0 0 1-6 6h-34v34a6 6 0 0 1-12 0v-34H64a6 6 0 0 1-6-6V70H24a6 6 0 0 1 0-12h34V24a6 6 0 0 1 12 0v162h162a6 6 0 0 1 6 6M96 70h90v90a6 6 0 0 0 12 0V64a6 6 0 0 0-6-6H96a6 6 0 0 0 0 12"></svg:path>`,
})
export class PhCropLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrossLightIcon],svg[ph-cross-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 74h-42V32a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v42H56a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h42v90a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-90h42a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14m2 46a2 2 0 0 1-2 2h-48a6 6 0 0 0-6 6v96a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2v-96a6 6 0 0 0-6-6H56a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h48a6 6 0 0 0 6-6V32a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v48a6 6 0 0 0 6 6h48a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhCrossLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairLightIcon],svg[ph-crosshair-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 122h-10.2A94.13 94.13 0 0 0 134 34.2V24a6 6 0 0 0-12 0v10.2A94.13 94.13 0 0 0 34.2 122H24a6 6 0 0 0 0 12h10.2a94.13 94.13 0 0 0 87.8 87.8V232a6 6 0 0 0 12 0v-10.2a94.13 94.13 0 0 0 87.8-87.8H232a6 6 0 0 0 0-12m-98 87.76V200a6 6 0 0 0-12 0v9.76A82.09 82.09 0 0 1 46.24 134H56a6 6 0 0 0 0-12h-9.76A82.09 82.09 0 0 1 122 46.24V56a6 6 0 0 0 12 0v-9.76A82.09 82.09 0 0 1 209.76 122H200a6 6 0 0 0 0 12h9.76A82.09 82.09 0 0 1 134 209.76M128 90a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhCrosshairLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairSimpleLightIcon],svg[ph-crosshair-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m6 191.8V184a6 6 0 0 0-12 0v33.8A90.15 90.15 0 0 1 38.2 134H72a6 6 0 0 0 0-12H38.2A90.15 90.15 0 0 1 122 38.2V72a6 6 0 0 0 12 0V38.2a90.15 90.15 0 0 1 83.8 83.8H184a6 6 0 0 0 0 12h33.8a90.15 90.15 0 0 1-83.8 83.8"></svg:path>`,
})
export class PhCrosshairSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownCrossLightIcon],svg[ph-crown-cross-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 58c-19.15 0-35.57 7.79-46 20.32V38h18a6 6 0 0 0 0-12h-18V8a6 6 0 0 0-12 0v18h-18a6 6 0 0 0 0 12h18v40.32C111.57 65.79 95.15 58 76 58a58.07 58.07 0 0 0-58 58c0 29.11 14.17 47.62 26.05 58a87.7 87.7 0 0 0 22 14v20a14 14 0 0 0 14 14h96a14 14 0 0 0 14-14v-19.95A87.7 87.7 0 0 0 212 174c11.88-10.39 26.05-28.9 26.05-58A58.07 58.07 0 0 0 180 58m2.1 120.31A6 6 0 0 0 178 184v24a2 2 0 0 1-2 2H80a2 2 0 0 1-2-2v-24a6 6 0 0 0-4.1-5.69C73.46 178.16 30 163.13 30 116a46.06 46.06 0 0 1 46-46c26.65 0 46 17.66 46 42v64a6 6 0 0 0 12 0v-64c0-24.34 19.35-42 46-42a46.06 46.06 0 0 1 46 46c0 46.9-42.12 61.71-43.9 62.31"></svg:path>`,
})
export class PhCrownCrossLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownLightIcon],svg[ph-crown-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 80a26 26 0 1 0-46.6 15.84l-29.83 36.72l-26-59.76a26 26 0 1 0-31.16 0l-26 59.76L56.6 95.84a26 26 0 1 0-22.36 10.09L49 194.3A14 14 0 0 0 62.78 206h130.44A14 14 0 0 0 207 194.3l14.73-88.37A26 26 0 0 0 246 80M128 38a14 14 0 1 1-14 14a14 14 0 0 1 14-14M22 80a14 14 0 1 1 14 14a14 14 0 0 1-14-14m173.2 112.33a2 2 0 0 1-2 1.67H62.78a2 2 0 0 1-2-1.67L46.08 104l1.22-.55l36 44.36A6 6 0 0 0 88 150a5.5 5.5 0 0 0 .81-.06a6 6 0 0 0 4.69-3.55l29.92-68.8a25.8 25.8 0 0 0 9.16 0l29.92 68.8a6 6 0 0 0 4.69 3.55a5.5 5.5 0 0 0 .81.06a6 6 0 0 0 4.66-2.22l36-44.36l1.22.55ZM220 94a14 14 0 1 1 14-14a14 14 0 0 1-14 14"></svg:path>`,
})
export class PhCrownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownSimpleLightIcon],svg[ph-crown-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 75.4a13.87 13.87 0 0 0-16.52 3.34l-35.74 38.52l-37.03-83.13a14 14 0 0 0-25.45.07l-37 83.06l-35.78-38.52a14 14 0 0 0-24.26 11.72c0 .08 0 .16.05.24L41 194.57A14 14 0 0 0 54.71 206h146.58a14 14 0 0 0 13.76-11.43L237.73 90.7c0-.08 0-.16.05-.24A13.89 13.89 0 0 0 230 75.4m-4 12.89l-22.69 103.82a2 2 0 0 0-.05.24a2 2 0 0 1-2 1.65H54.71a2 2 0 0 1-2-1.65a2 2 0 0 0-.05-.24L30 88.29a1.82 1.82 0 0 1 1.12-2.06a1.84 1.84 0 0 1 2.36.48l.12.13l42 45.24a6 6 0 0 0 9.88-1.64l40.7-91.28A1.92 1.92 0 0 1 128 38a1.87 1.87 0 0 1 1.78 1.09l40.74 91.35a6 6 0 0 0 9.88 1.64l42-45.24l.12-.13a1.84 1.84 0 0 1 2.36-.48a1.82 1.82 0 0 1 1.12 2.06"></svg:path>`,
})
export class PhCrownSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeFocusLightIcon],svg[ph-cube-focus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 48v40a6 6 0 0 1-12 0V54h-34a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6M72 202H38v-34a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6h40a6 6 0 0 0 0-12m152-40a6 6 0 0 0-6 6v34h-34a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6M32 94a6 6 0 0 0 6-6V54h34a6 6 0 0 0 0-12H32a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6m155 71.21l-56 32a6 6 0 0 1-6 0l-56-32a6 6 0 0 1-3-5.21V96a6 6 0 0 1 3-5.21l56-32a6 6 0 0 1 6 0l56 32a6 6 0 0 1 3 5.21v64a6 6 0 0 1-3 5.21M84.09 96L128 121.09L171.91 96L128 70.91ZM78 156.52l44 25.14v-50.18l-44-25.14Zm100 0v-50.18l-44 25.14v50.18Z"></svg:path>`,
})
export class PhCubeFocusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeLightIcon],svg[ph-cube-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.72 67.9l-88-48.17a13.9 13.9 0 0 0-13.44 0l-88 48.18A14 14 0 0 0 26 80.18v95.64a14 14 0 0 0 7.28 12.27l88 48.18a13.92 13.92 0 0 0 13.44 0l88-48.18a14 14 0 0 0 7.28-12.27V80.18a14 14 0 0 0-7.28-12.28M127 30.25a2 2 0 0 1 1.92 0L212.51 76L128 122.24L43.49 76ZM39 177.57a2 2 0 0 1-1-1.75V86.66l84 46V223Zm177.92 0L134 223v-90.36l84-46v89.16a2 2 0 0 1-1 1.77Z"></svg:path>`,
})
export class PhCubeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeTransparentLightIcon],svg[ph-cube-transparent-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.24 91.75L164 35.56a5.93 5.93 0 0 0-4-1.56H40a6 6 0 0 0-6 6v120a6 6 0 0 0 1.76 4.25l56 56A6 6 0 0 0 96 222h120a6 6 0 0 0 6-6V96a6 6 0 0 0-1.76-4.25M166 54.48L201.52 90H166Zm-76 147L54.48 166H90ZM90 154H46V54.48l44 44ZM54.48 46H154v44H98.48ZM154 102v52h-52v-52Zm-52 108v-44h55.52l44 44Zm108-8.48l-44-44V102h44Z"></svg:path>`,
})
export class PhCubeTransparentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyBtcLightIcon],svg[ph-currency-btc-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174.69 116.41A42 42 0 0 0 150 42.05V24a6 6 0 0 0-12 0v18h-20V24a6 6 0 0 0-12 0v18H72a6 6 0 0 0 0 12h10v140H72a6 6 0 0 0 0 12h34v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h10a46 46 0 0 0 14.69-89.59M178 84a30 30 0 0 1-30 30H94V54h54a30 30 0 0 1 30 30m-18 110H94v-68h66a34 34 0 0 1 0 68"></svg:path>`,
})
export class PhCurrencyBtcLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCircleDollarLightIcon],svg[ph-currency-circle-dollar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m38-70a26 26 0 0 1-26 26h-6v10a6 6 0 0 1-12 0v-10h-18a6 6 0 0 1 0-12h36a14 14 0 0 0 0-28h-24a26 26 0 0 1 0-52h6V72a6 6 0 0 1 12 0v10h18a6 6 0 0 1 0 12h-36a14 14 0 0 0 0 28h24a26 26 0 0 1 26 26"></svg:path>`,
})
export class PhCurrencyCircleDollarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCnyLightIcon],svg[ph-currency-cny-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M58 56a6 6 0 0 1 6-6h128a6 6 0 0 1 0 12H64a6 6 0 0 1-6-6m158 106a6 6 0 0 0-6 6v18h-34a18 18 0 0 1-18-18v-50h50a6 6 0 0 0 0-12H48a6 6 0 0 0 0 12h50v10a58.07 58.07 0 0 1-58 58a6 6 0 0 0 0 12a70.08 70.08 0 0 0 70-70v-10h36v50a30 30 0 0 0 30 30h40a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCurrencyCnyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarLightIcon],svg[ph-currency-dollar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 122h-18V54h10a34 34 0 0 1 34 34a6 6 0 0 0 12 0a46.06 46.06 0 0 0-46-46h-10V24a6 6 0 0 0-12 0v18h-10a46 46 0 0 0 0 92h10v68h-18a34 34 0 0 1-34-34a6 6 0 0 0-12 0a46.06 46.06 0 0 0 46 46h18v18a6 6 0 0 0 12 0v-18h18a46 46 0 0 0 0-92m-40 0a34 34 0 0 1 0-68h10v68Zm40 80h-18v-68h18a34 34 0 0 1 0 68"></svg:path>`,
})
export class PhCurrencyDollarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarSimpleLightIcon],svg[ph-currency-dollar-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 168a46.06 46.06 0 0 1-46 46h-18v18a6 6 0 0 1-12 0v-18h-18a46.06 46.06 0 0 1-46-46a6 6 0 0 1 12 0a34 34 0 0 0 34 34h48a34 34 0 0 0 0-68h-40a46 46 0 0 1 0-92h10V24a6 6 0 0 1 12 0v18h10a46.06 46.06 0 0 1 46 46a6 6 0 0 1-12 0a34 34 0 0 0-34-34h-32a34 34 0 0 0 0 68h40a46.06 46.06 0 0 1 46 46"></svg:path>`,
})
export class PhCurrencyDollarSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEthLightIcon],svg[ph-currency-eth-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.72 124.29l-88-112a6 6 0 0 0-9.44 0l-88 112a6 6 0 0 0 0 7.42l88 112a6 6 0 0 0 9.44 0l88-112a6 6 0 0 0 0-7.42M134 33.35l72.56 92.35l-72.56 33Zm-12 125.33l-72.56-33L122 33.35Zm0 13.18v50.79l-62.08-79Zm12 0l62.08-28.21l-62.08 79Z"></svg:path>`,
})
export class PhCurrencyEthLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEurLightIcon],svg[ph-currency-eur-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.47 193.66a6 6 0 0 1-.47 8.48A78 78 0 0 1 58.25 150H40a6 6 0 0 1 0-12h18v-20H40a6 6 0 0 1 0-12h18.25A78 78 0 0 1 188 53.86a6 6 0 0 1-8 9A66 66 0 0 0 70.29 106H136a6 6 0 0 1 0 12H70v20h50a6 6 0 0 1 0 12H70.29A66 66 0 0 0 180 193.2a6 6 0 0 1 8.47.46"></svg:path>`,
})
export class PhCurrencyEurLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyGbpLightIcon],svg[ph-currency-gbp-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M190 208a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h4a30 30 0 0 0 30-30v-38H56a6 6 0 0 1 0-12h34V84a50 50 0 0 1 81.81-38.58a6 6 0 1 1-7.64 9.26A38 38 0 0 0 102 84v38h34a6 6 0 0 1 0 12h-34v38a41.88 41.88 0 0 1-12.63 30H184a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCurrencyGbpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyInrLightIcon],svg[ph-currency-inr-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 80a6 6 0 0 1-6 6h-34.31a59 59 0 0 1 .31 6a58.07 58.07 0 0 1-58 58H87.52L164 219.56a6 6 0 0 1-8.08 8.88l-88-80A6 6 0 0 1 72 138h36a46.06 46.06 0 0 0 46-46a48 48 0 0 0-.4-6H72a6 6 0 0 1 0-12h78.33A46.08 46.08 0 0 0 108 46H72a6 6 0 0 1 0-12h128a6 6 0 0 1 0 12h-56.73a58.25 58.25 0 0 1 19.86 28H200a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCurrencyInrLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyJpyLightIcon],svg[ph-currency-jpy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m204.64 51.8l-64 78.2H176a6 6 0 0 1 0 12h-42v20h42a6 6 0 0 1 0 12h-42v42a6 6 0 0 1-12 0v-42H80a6 6 0 0 1 0-12h42v-20H80a6 6 0 0 1 0-12h35.34l-64-78.2a6 6 0 1 1 9.28-7.6L128 126.53l67.36-82.33a6 6 0 0 1 9.28 7.6"></svg:path>`,
})
export class PhCurrencyJpyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKrwLightIcon],svg[ph-currency-krw-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 130h-25.09l22.65-55.74a6 6 0 0 0-11.12-4.52L202 130h-44l-24.44-60.26a6 6 0 0 0-11.12 0L98 130H54L29.56 69.74a6 6 0 1 0-11.12 4.52L41.09 130H16a6 6 0 0 0 0 12h30l24.48 60.26a6 6 0 0 0 11.12 0L106 142h44l24.48 60.26a6 6 0 0 0 11.12 0L210 142h30a6 6 0 0 0 0-12M76 184.06L58.91 142h34.18ZM110.91 130L128 87.94L145.09 130ZM180 184.06L162.91 142h34.18Z"></svg:path>`,
})
export class PhCurrencyKrwLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKztLightIcon],svg[ph-currency-kzt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 96a6 6 0 0 1-6 6h-66v114a6 6 0 0 1-12 0V102H56a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6M56 62h144a6 6 0 0 0 0-12H56a6 6 0 0 0 0 12"></svg:path>`,
})
export class PhCurrencyKztLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyNgnLightIcon],svg[ph-currency-ngn-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 138h-18v-20h18a6 6 0 0 0 0-12h-18V46a6 6 0 0 0-12 0v60h-67.56L68.73 42.31A6 6 0 0 0 58 46v60H40a6 6 0 0 0 0 12h18v20H40a6 6 0 0 0 0 12h18v60a6 6 0 0 0 12 0v-60h67.56l49.71 63.69A6 6 0 0 0 198 210v-60h18a6 6 0 0 0 0-12m-30-20v20h-42.58l-15.61-20ZM70 63.44L103.22 106H70ZM70 138v-20h42.58l15.61 20Zm116 54.56L152.78 150H186Z"></svg:path>`,
})
export class PhCurrencyNgnLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyRubLightIcon],svg[ph-currency-rub-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 150a58 58 0 0 0 0-116H88a6 6 0 0 0-6 6v98H56a6 6 0 0 0 0 12h26v20H56a6 6 0 0 0 0 12h26v34a6 6 0 0 0 12 0v-34h50a6 6 0 0 0 0-12H94v-20ZM94 46h54a46 46 0 0 1 0 92H94Z"></svg:path>`,
})
export class PhCurrencyRubLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorClickLightIcon],svg[ph-cursor-click-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 24v-8a6 6 0 0 1 12 0v8a6 6 0 0 1-12 0m-74 78h8a6 6 0 0 0 0-12h-8a6 6 0 0 0 0 12m109.32-64.63a6 6 0 0 0 8.05-2.69l8-16a6 6 0 0 0-10.74-5.37l-8 16a6 6 0 0 0 2.69 8.06m-96 85.26l-16 8a6 6 0 0 0 5.36 10.74l16-8a6 6 0 1 0-5.36-10.74m188.58 62.78a14 14 0 0 1 0 19.8l-12.69 12.69a14 14 0 0 1-19.8 0l-51.31-51.31a2 2 0 0 0-3.21.54l-17.75 46.24a2 2 0 0 0-.1.24a13.85 13.85 0 0 1-12.78 8.39h-.68A13.85 13.85 0 0 1 87 212.38L34.7 52.3a14 14 0 0 1 17.6-17.6L212.38 87a14 14 0 0 1 1.23 26l-.24.09l-46.25 17.76a2 2 0 0 0-.53 3.21Zm-8.49 8.49l-51.31-51.31a14 14 0 0 1 4.32-22.74l.24-.1L208.91 102a2 2 0 0 0-.26-3.61L48.58 46.11a2.3 2.3 0 0 0-.65-.11a2 2 0 0 0-1.82 2.58l52.27 160.07a1.84 1.84 0 0 0 1.77 1.35a1.81 1.81 0 0 0 1.84-1.09l17.76-46.25l.1-.24a14 14 0 0 1 22.74-4.32l51.31 51.31a2 2 0 0 0 2.83 0l12.68-12.68a2 2 0 0 0 0-2.83"></svg:path>`,
})
export class PhCursorClickLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorLightIcon],svg[ph-cursor-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166.59 134.1a1.91 1.91 0 0 1-.55-1.79a2 2 0 0 1 1.08-1.42l46.25-17.76l.24-.1A14 14 0 0 0 212.38 87L52.29 34.7A13.95 13.95 0 0 0 34.7 52.29L87 212.38a13.82 13.82 0 0 0 12.6 9.6h.69a13.84 13.84 0 0 0 12.71-8.37a2 2 0 0 0 .1-.24l17.76-46.25a2 2 0 0 1 3.21-.53l51.31 51.31a14 14 0 0 0 19.8 0l12.69-12.69a14 14 0 0 0 0-19.8Zm42.82 62.63l-12.68 12.68a2 2 0 0 1-2.83 0l-51.31-51.31a14 14 0 0 0-22.74 4.32a2 2 0 0 0-.1.24L102 208.91a2 2 0 0 1-3.61-.26L46.11 48.57a1.87 1.87 0 0 1 .47-2a1.92 1.92 0 0 1 1.35-.57a2.2 2.2 0 0 1 .64.1l160.08 52.28a2 2 0 0 1 .26 3.61l-46.25 17.76l-.24.1a14 14 0 0 0-4.32 22.74l51.31 51.31a2 2 0 0 1 0 2.83"></svg:path>`,
})
export class PhCursorLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorTextLightIcon],svg[ph-cursor-text-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 208a6 6 0 0 1-6 6h-16a38 38 0 0 1-32-17.55A38 38 0 0 1 96 214H80a6 6 0 0 1 0-12h16a26 26 0 0 0 26-26v-42h-18a6 6 0 0 1 0-12h18V80a26 26 0 0 0-26-26H80a6 6 0 0 1 0-12h16a38 38 0 0 1 32 17.55A38 38 0 0 1 160 42h16a6 6 0 0 1 0 12h-16a26 26 0 0 0-26 26v42h18a6 6 0 0 1 0 12h-18v42a26 26 0 0 0 26 26h16a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCursorTextLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCylinderLightIcon],svg[ph-cylinder-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 18c-39.25 0-70 18.45-70 42v136c0 23.55 30.75 42 70 42s70-18.45 70-42V60c0-23.55-30.75-42-70-42m0 12c31.44 0 58 13.74 58 30s-26.56 30-58 30s-58-13.74-58-30s26.56-30 58-30m0 196c-31.44 0-58-13.74-58-30V83.81C82.48 94.87 103.59 102 128 102s45.52-7.13 58-18.19V196c0 16.26-26.56 30-58 30"></svg:path>`,
})
export class PhCylinderLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDatabaseLightIcon],svg[ph-database-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26c-52.71 0-94 23.72-94 54v96c0 30.28 41.29 54 94 54s94-23.72 94-54V80c0-30.28-41.29-54-94-54m0 12c44.45 0 82 19.23 82 42s-37.55 42-82 42s-82-19.23-82-42s37.55-42 82-42m82 138c0 22.77-37.55 42-82 42s-82-19.23-82-42v-21.21C62 171.16 92.37 182 128 182s66-10.84 82-27.21Zm0-48c0 22.77-37.55 42-82 42s-82-19.23-82-42v-21.21C62 123.16 92.37 134 128 134s66-10.84 82-27.21Z"></svg:path>`,
})
export class PhDatabaseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeskLightIcon],svg[ph-desk-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 66H8a6 6 0 0 0 0 12h10v114a6 6 0 0 0 12 0v-50h196v50a6 6 0 0 0 12 0V78h10a6 6 0 0 0 0-12M30 78h92v52H30Zm196 52h-92V78h92ZM94 104a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h24a6 6 0 0 1 6 6m68 0a6 6 0 0 1 6-6h24a6 6 0 0 1 0 12h-24a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhDeskLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopLightIcon],svg[ph-desktop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 42H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h74v20H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12h-26v-20h74a22 22 0 0 0 22-22V64a22 22 0 0 0-22-22M48 54h160a10 10 0 0 1 10 10v82H38V64a10 10 0 0 1 10-10m160 132H48a10 10 0 0 1-10-10v-18h180v18a10 10 0 0 1-10 10"></svg:path>`,
})
export class PhDesktopLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopTowerLightIcon],svg[ph-desktop-tower-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 72a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m-6 26h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m38-50v160a14 14 0 0 1-14 14h-80a14 14 0 0 1-14-14v-18H94v20h18a6 6 0 0 1 0 12H64a6 6 0 0 1 0-12h18v-20H32a22 22 0 0 1-22-22V96a22 22 0 0 1 22-22h106V48a14 14 0 0 1 14-14h80a14 14 0 0 1 14 14M138 178V86H32a10 10 0 0 0-10 10v72a10 10 0 0 0 10 10Zm96-130a2 2 0 0 0-2-2h-80a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2h80a2 2 0 0 0 2-2Zm-42 122a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhDesktopTowerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDetectiveLightIcon],svg[ph-detective-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 114h-28.94L171 47.77a14 14 0 0 0-22.16-.61l-12.91 14.92a1 1 0 0 0-.14.17a10 10 0 0 1-15.58 0a1 1 0 0 0-.14-.17L107.2 47.16a14 14 0 0 0-22.2.61L36.94 114H8a6 6 0 0 0 0 12h240a6 6 0 0 0 0-12M94.75 54.82a2 2 0 0 1 3.15-.07l.15.17l12.86 14.92A21.88 21.88 0 0 0 128 78a21.88 21.88 0 0 0 17.09-8.16L158 54.92l.15-.17a2 2 0 0 1 3.15.07l43 59.18H51.77ZM180 146a34 34 0 0 0-33.94 32h-36.12a34 34 0 1 0-1.44 12h39a34 34 0 1 0 32.5-44M76 202a22 22 0 1 1 22-22a22 22 0 0 1-22 22m104 0a22 22 0 1 1 22-22a22 22 0 0 1-22 22"></svg:path>`,
})
export class PhDetectiveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevToLogoLightIcon],svg[ph-dev-to-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 58H24a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h208a14 14 0 0 0 14-14V72a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h208a2 2 0 0 1 2 2Zm-108-82v20h10a6 6 0 0 1 0 12h-10v20h18a6 6 0 0 1 0 12h-24a6 6 0 0 1-6-6V96a6 6 0 0 1 6-6h24a6 6 0 0 1 0 12Zm87.78-4.38l-18 64a6 6 0 0 1-11.56 0l-18-64a6 6 0 0 1 11.56-3.24L190 137.84l12.22-43.46a6 6 0 1 1 11.56 3.24M64 90h-8a6 6 0 0 0-6 6v64a6 6 0 0 0 6 6h8a30 30 0 0 0 30-30v-16a30 30 0 0 0-30-30m18 46a18 18 0 0 1-18 18h-2v-52h2a18 18 0 0 1 18 18Z"></svg:path>`,
})
export class PhDevToLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileCameraLightIcon],svg[ph-device-mobile-camera-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 18H80a22 22 0 0 0-22 22v176a22 22 0 0 0 22 22h96a22 22 0 0 0 22-22V40a22 22 0 0 0-22-22m10 198a10 10 0 0 1-10 10H80a10 10 0 0 1-10-10V40a10 10 0 0 1 10-10h96a10 10 0 0 1 10 10ZM138 60a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDeviceMobileCameraLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileLightIcon],svg[ph-device-mobile-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 18H80a22 22 0 0 0-22 22v176a22 22 0 0 0 22 22h96a22 22 0 0 0 22-22V40a22 22 0 0 0-22-22M70 62h116v132H70Zm10-32h96a10 10 0 0 1 10 10v10H70V40a10 10 0 0 1 10-10m96 196H80a10 10 0 0 1-10-10v-10h116v10a10 10 0 0 1-10 10"></svg:path>`,
})
export class PhDeviceMobileLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSlashLightIcon],svg[ph-device-mobile-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.44 212l-160-176a6 6 0 0 0-8.88 8L58 59.92V216a22 22 0 0 0 22 22h96a22 22 0 0 0 22-22v-2.08l5.56 6.12a6 6 0 0 0 8.88-8.08ZM186 216a10 10 0 0 1-10 10H80a10 10 0 0 1-10-10V73.12l116 127.6ZM70.7 24a6 6 0 0 1 6-6H176a22 22 0 0 1 22 22v110.83a6 6 0 1 1-12 0V40a10 10 0 0 0-10-10H76.7a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhDeviceMobileSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSpeakerLightIcon],svg[ph-device-mobile-speaker-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 18H80a22 22 0 0 0-22 22v176a22 22 0 0 0 22 22h96a22 22 0 0 0 22-22V40a22 22 0 0 0-22-22m10 198a10 10 0 0 1-10 10H80a10 10 0 0 1-10-10V40a10 10 0 0 1 10-10h96a10 10 0 0 1 10 10ZM166 56a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhDeviceMobileSpeakerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceRotateLightIcon],svg[ph-device-rotate-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m204.24 220.24l-24 24a6 6 0 0 1-8.48-8.48L185.51 222H80a22 22 0 0 1-22-22v-96a6 6 0 0 1 12 0v96a10 10 0 0 0 10 10h105.51l-13.75-13.76a6 6 0 0 1 8.48-8.48l24 24a6 6 0 0 1 0 8.48M80 70a6 6 0 0 0 4.24-10.24L70.49 46H176a10 10 0 0 1 10 10v96a6 6 0 0 0 12 0V56a22 22 0 0 0-22-22H70.49l13.75-13.76a6 6 0 0 0-8.48-8.48l-24 24a6 6 0 0 0 0 8.48l24 24A6 6 0 0 0 80 70"></svg:path>`,
})
export class PhDeviceRotateLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletCameraLightIcon],svg[ph-device-tablet-camera-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 26H64a22 22 0 0 0-22 22v160a22 22 0 0 0 22 22h128a22 22 0 0 0 22-22V48a22 22 0 0 0-22-22m10 182a10 10 0 0 1-10 10H64a10 10 0 0 1-10-10V48a10 10 0 0 1 10-10h128a10 10 0 0 1 10 10ZM138 68a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDeviceTabletCameraLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletLightIcon],svg[ph-device-tablet-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 26H64a22 22 0 0 0-22 22v160a22 22 0 0 0 22 22h128a22 22 0 0 0 22-22V48a22 22 0 0 0-22-22M54 70h148v116H54Zm10-32h128a10 10 0 0 1 10 10v10H54V48a10 10 0 0 1 10-10m128 180H64a10 10 0 0 1-10-10v-10h148v10a10 10 0 0 1-10 10"></svg:path>`,
})
export class PhDeviceTabletLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletSpeakerLightIcon],svg[ph-device-tablet-speaker-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 26H64a22 22 0 0 0-22 22v160a22 22 0 0 0 22 22h128a22 22 0 0 0 22-22V48a22 22 0 0 0-22-22m10 182a10 10 0 0 1-10 10H64a10 10 0 0 1-10-10V48a10 10 0 0 1 10-10h128a10 10 0 0 1 10 10ZM166 64a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhDeviceTabletSpeakerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevicesLightIcon],svg[ph-devices-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 74h-18V64a22 22 0 0 0-22-22H40a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h114v10a22 22 0 0 0 22 22h48a22 22 0 0 0 22-22V96a22 22 0 0 0-22-22M40 170a10 10 0 0 1-10-10V64a10 10 0 0 1 10-10h144a10 10 0 0 1 10 10v10h-18a22 22 0 0 0-22 22v74Zm194 22a10 10 0 0 1-10 10h-48a10 10 0 0 1-10-10V96a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10Zm-100 16a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m80-96a6 6 0 0 1-6 6h-16a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhDevicesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondLightIcon],svg[ph-diamond-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m233.92 118.14l-96.06-96.06a14 14 0 0 0-19.72 0l-96.06 96.06a14 14 0 0 0 0 19.72l96.06 96.06a14 14 0 0 0 19.72 0l96-96.06a13.94 13.94 0 0 0 0-19.72Zm-8.49 11.24l-96.05 96.06a2 2 0 0 1-2.76 0l-96.05-96.06a2 2 0 0 1 0-2.76l96.05-96.06a2 2 0 0 1 2.76 0l96.05 96.06a2 2 0 0 1 0 2.76"></svg:path>`,
})
export class PhDiamondLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondsFourLightIcon],svg[ph-diamonds-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M123.76 108.24a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 0 8.48ZM128 32.49L159.51 64L128 95.51L96.49 64Zm4.24 115.27a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 0 8.48l40 40a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48ZM128 223.51L96.49 192L128 160.49L159.51 192Zm108.24-99.75l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 0 8.48l40 40a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48M192 159.51L160.49 128L192 96.49L223.51 128Zm-83.76-35.75l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 0 8.48l40 40a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48M64 159.51L32.49 128L64 96.49L95.51 128Z"></svg:path>`,
})
export class PhDiamondsFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFiveLightIcon],svg[ph-dice-five-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 34H64a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h128a30 30 0 0 0 30-30V64a30 30 0 0 0-30-30m18 158a18 18 0 0 1-18 18H64a18 18 0 0 1-18-18V64a18 18 0 0 1 18-18h128a18 18 0 0 1 18 18ZM102 92a10 10 0 1 1-10-10a10 10 0 0 1 10 10m36 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10m36-36a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-72 72a10 10 0 1 1-10-10a10 10 0 0 1 10 10m72 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDiceFiveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFourLightIcon],svg[ph-dice-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 34H64a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h128a30 30 0 0 0 30-30V64a30 30 0 0 0-30-30m18 158a18 18 0 0 1-18 18H64a18 18 0 0 1-18-18V64a18 18 0 0 1 18-18h128a18 18 0 0 1 18 18Zm-100-92a10 10 0 1 1-10-10a10 10 0 0 1 10 10m56 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-56 56a10 10 0 1 1-10-10a10 10 0 0 1 10 10m56 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDiceFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceOneLightIcon],svg[ph-dice-one-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 34H64a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h128a30 30 0 0 0 30-30V64a30 30 0 0 0-30-30m18 158a18 18 0 0 1-18 18H64a18 18 0 0 1-18-18V64a18 18 0 0 1 18-18h128a18 18 0 0 1 18 18Zm-72-64a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDiceOneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceSixLightIcon],svg[ph-dice-six-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 34H64a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h128a30 30 0 0 0 30-30V64a30 30 0 0 0-30-30m18 158a18 18 0 0 1-18 18H64a18 18 0 0 1-18-18V64a18 18 0 0 1 18-18h128a18 18 0 0 1 18 18ZM102 84a10 10 0 1 1-10-10a10 10 0 0 1 10 10m72 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-72 44a10 10 0 1 1-10-10a10 10 0 0 1 10 10m72 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-72 44a10 10 0 1 1-10-10a10 10 0 0 1 10 10m72 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDiceSixLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceThreeLightIcon],svg[ph-dice-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 34H64a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h128a30 30 0 0 0 30-30V64a30 30 0 0 0-30-30m18 158a18 18 0 0 1-18 18H64a18 18 0 0 1-18-18V64a18 18 0 0 1 18-18h128a18 18 0 0 1 18 18ZM102 92a10 10 0 1 1-10-10a10 10 0 0 1 10 10m36 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10m36 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDiceThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceTwoLightIcon],svg[ph-dice-two-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 34H64a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h128a30 30 0 0 0 30-30V64a30 30 0 0 0-30-30m18 158a18 18 0 0 1-18 18H64a18 18 0 0 1-18-18V64a18 18 0 0 1 18-18h128a18 18 0 0 1 18 18Zm-92-84a10 10 0 1 1-10-10a10 10 0 0 1 10 10m40 40a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDiceTwoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscLightIcon],svg[ph-disc-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m37.52 96a37.8 37.8 0 0 0-6.76-16.27l37-36.95A89.6 89.6 0 0 1 217.8 122ZM154 128a26 26 0 1 1-26-26a26 26 0 0 1 26 26m-26 90a90 90 0 1 1 59.22-157.71l-36.95 36.95A38 38 0 1 0 165.52 134h52.28a90.12 90.12 0 0 1-89.8 84"></svg:path>`,
})
export class PhDiscLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscoBallLightIcon],svg[ph-disco-ball-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M118 66.23V16a6 6 0 0 0-12 0v50.23a86 86 0 1 0 12 0M185.74 146h-35.87c-1.3-32.59-13-54.15-22.36-66.35A74.15 74.15 0 0 1 185.74 146m-99.6 12h51.72c-1.63 37.69-18.33 58.46-25.86 66c-7.54-7.55-24.23-28.33-25.86-66m0-12c1.63-37.69 18.33-58.46 25.86-66c7.54 7.51 24.23 28.29 25.86 66Zm10.35-66.35c-9.38 12.2-21.06 33.76-22.36 66.35H38.26a74.15 74.15 0 0 1 58.23-66.35M38.26 158h35.87c1.3 32.59 13 54.15 22.36 66.35A74.15 74.15 0 0 1 38.26 158m89.25 66.35c9.38-12.2 21.06-33.76 22.36-66.35h35.87a74.15 74.15 0 0 1-58.23 66.35M254 88a6 6 0 0 1-6 6h-10v10a6 6 0 0 1-12 0V94h-10a6 6 0 0 1 0-12h10V72a6 6 0 0 1 12 0v10h10a6 6 0 0 1 6 6m-46-42h-18v18a6 6 0 0 1-12 0V46h-18a6 6 0 0 1 0-12h18V16a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12"></svg:path>`,
})
export class PhDiscoBallLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscordLogoLightIcon],svg[ph-discord-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102 140a10 10 0 1 1-10-10a10 10 0 0 1 10 10m62-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m73.64 61.08l-67 29.71a14.4 14.4 0 0 1-5.77 1.21a14.13 14.13 0 0 1-13.25-9.18L143 189.43c-4.93.37-9.92.58-15 .58s-10.06-.21-15-.58l-8.63 23.39A14.13 14.13 0 0 1 91.13 222a14.4 14.4 0 0 1-5.77-1.21l-67-29.71a14 14 0 0 1-7.93-16.2L40 58.5a14.07 14.07 0 0 1 11.34-10.39l36.06-5.92a14.19 14.19 0 0 1 16 10.39l3.69 14.53a197.5 197.5 0 0 1 41.82 0l3.69-14.53a14.19 14.19 0 0 1 16-10.39l36.06 5.92A14.07 14.07 0 0 1 216 58.5l29.53 116.38a14 14 0 0 1-7.89 16.2m-3.7-13.25L204.41 61.45a2.08 2.08 0 0 0-1.7-1.5L166.65 54a2.13 2.13 0 0 0-2.42 1.5l-3.36 13.24a169 169 0 0 1 16.75 3.76A6 6 0 0 1 176 84.31a5.7 5.7 0 0 1-1.62-.23A174.3 174.3 0 0 0 128 78a174.3 174.3 0 0 0-46.38 6.08a6 6 0 1 1-3.24-11.55a169 169 0 0 1 16.75-3.76l-3.36-13.24A2.12 2.12 0 0 0 89.35 54l-36.06 6a2.08 2.08 0 0 0-1.7 1.5L22.06 177.83a2 2 0 0 0 1.16 2.28l67 29.7a2.2 2.2 0 0 0 1.76 0a2.07 2.07 0 0 0 1.14-1.17l7.58-20.55a171.5 171.5 0 0 1-22.33-4.64a6 6 0 1 1 3.24-11.55A174.3 174.3 0 0 0 128 178a174.3 174.3 0 0 0 46.38-6.08a6 6 0 1 1 3.24 11.55a171.5 171.5 0 0 1-22.33 4.64l7.58 20.55a2.07 2.07 0 0 0 1.14 1.17a2.2 2.2 0 0 0 1.76 0l67-29.7a2 2 0 0 0 1.17-2.3"></svg:path>`,
})
export class PhDiscordLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
