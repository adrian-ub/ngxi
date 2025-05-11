import { Component, input } from '@angular/core'

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
  selector: 'svg[phArrowFatLinesLeftThinIcon],svg[ph-arrow-fat-lines-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 76h-28V32a4 4 0 0 0-6.83-2.83l-96 96a4 4 0 0 0 0 5.66l96 96A4 4 0 0 0 124 224v-44h28a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4m-4 96h-28a4 4 0 0 0-4 4v38.34L29.66 128L116 41.66V80a4 4 0 0 0 4 4h28Zm72-92v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0m-32 0v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhArrowFatLinesLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesRightThinIcon],svg[ph-arrow-fat-lines-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.83 125.17l-96-96A4 4 0 0 0 132 32v44h-28a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h28v44a4 4 0 0 0 2.47 3.7a4 4 0 0 0 4.36-.87l96-96a4 4 0 0 0 0-5.66M140 214.34V176a4 4 0 0 0-4-4h-28V84h28a4 4 0 0 0 4-4V41.66L226.34 128ZM44 80v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0m32 0v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhArrowFatLinesRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesUpThinIcon],svg[ph-arrow-fat-lines-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 117.17l-96-96a4 4 0 0 0-5.66 0l-96 96A4 4 0 0 0 32 124h44v28a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4v-28h44a4 4 0 0 0 2.83-6.83M176 116a4 4 0 0 0-4 4v28H84v-28a4 4 0 0 0-4-4H41.66L128 29.66L214.34 116Zm4 100a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4m0-32a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhArrowFatLinesUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatRightThinIcon],svg[ph-arrow-fat-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.83 125.17l-96-96A4 4 0 0 0 132 32v44H48a12 12 0 0 0-12 12v80a12 12 0 0 0 12 12h84v44a4 4 0 0 0 2.47 3.7a4 4 0 0 0 4.36-.87l96-96a4 4 0 0 0 0-5.66M140 214.34V176a4 4 0 0 0-4-4H48a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h88a4 4 0 0 0 4-4V41.66L226.34 128Z"></svg:path>`,
})
export class PhArrowFatRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatUpThinIcon],svg[ph-arrow-fat-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 117.17l-96-96a4 4 0 0 0-5.66 0l-96 96A4 4 0 0 0 32 124h44v84a12 12 0 0 0 12 12h80a12 12 0 0 0 12-12v-84h44a4 4 0 0 0 2.83-6.83M176 116a4 4 0 0 0-4 4v88a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4v-88a4 4 0 0 0-4-4H41.66L128 29.66L214.34 116Z"></svg:path>`,
})
export class PhArrowFatUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLeftThinIcon],svg[ph-arrow-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4H49.66l65.17 65.17a4 4 0 0 1-5.66 5.66l-72-72a4 4 0 0 1 0-5.66l72-72a4 4 0 0 1 5.66 5.66L49.66 124H216a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhArrowLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownLeftThinIcon],svg[ph-arrow-line-down-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 48a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m-46.83 45.17L76 198.34V112a4 4 0 0 0-8 0v96a4 4 0 0 0 4 4h96a4 4 0 0 0 0-8H81.66L186.83 98.83a4 4 0 1 0-5.66-5.66"></svg:path>`,
})
export class PhArrowLineDownLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownRightThinIcon],svg[ph-arrow-line-down-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 40a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m-28 60a4 4 0 0 0-4 4v86.34L82.83 85.17a4 4 0 0 0-5.66 5.66L182.34 196H96a4 4 0 0 0 0 8h96a4 4 0 0 0 4-4v-96a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhArrowLineDownRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownThinIcon],svg[ph-arrow-line-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.17 114.83a4 4 0 0 1 5.66-5.66L124 174.34V32a4 4 0 0 1 8 0v142.34l65.17-65.17a4 4 0 1 1 5.66 5.66l-72 72a4 4 0 0 1-5.66 0ZM216 212H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhArrowLineDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineLeftThinIcon],svg[ph-arrow-line-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a4 4 0 0 1-4 4H81.66l65.17 65.17a4 4 0 0 1-5.66 5.66l-72-72a4 4 0 0 1 0-5.66l72-72a4 4 0 1 1 5.66 5.66L81.66 124H224a4 4 0 0 1 4 4M40 36a4 4 0 0 0-4 4v176a4 4 0 0 0 8 0V40a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhArrowLineLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineRightThinIcon],svg[ph-arrow-line-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186.83 125.17a4 4 0 0 1 0 5.66l-72 72a4 4 0 0 1-5.66-5.66L174.34 132H32a4 4 0 0 1 0-8h142.34l-65.17-65.17a4 4 0 0 1 5.66-5.66ZM216 36a4 4 0 0 0-4 4v176a4 4 0 0 0 8 0V40a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhArrowLineRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpLeftThinIcon],svg[ph-arrow-line-up-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 208a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4M72 148a4 4 0 0 0 4-4V57.66l105.17 105.17a4 4 0 0 0 5.66-5.66L81.66 52H168a4 4 0 0 0 0-8H72a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4"></svg:path>`,
})
export class PhArrowLineUpLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpRightThinIcon],svg[ph-arrow-line-up-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 216a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4M80 172a4 4 0 0 0 2.83-1.17L188 65.66V152a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4H96a4 4 0 0 0 0 8h86.34L77.17 165.17A4 4 0 0 0 80 172"></svg:path>`,
})
export class PhArrowLineUpRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpThinIcon],svg[ph-arrow-line-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.83 141.17a4 4 0 0 1-5.66 5.66L132 81.66V224a4 4 0 0 1-8 0V81.66l-65.17 65.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0ZM216 36H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhArrowLineUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowRightThinIcon],svg[ph-arrow-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m218.83 130.83l-72 72a4 4 0 0 1-5.66-5.66L206.34 132H40a4 4 0 0 1 0-8h166.34l-65.17-65.17a4 4 0 0 1 5.66-5.66l72 72a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhArrowRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownLeftThinIcon],svg[ph-arrow-square-down-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM162.83 93.17a4 4 0 0 1 0 5.66L105.66 156H144a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4v-48a4 4 0 0 1 8 0v38.34l57.17-57.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhArrowSquareDownLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownRightThinIcon],svg[ph-arrow-square-down-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-48-96v48a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h38.34L93.17 98.83a4 4 0 0 1 5.66-5.66L156 150.34V112a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhArrowSquareDownRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownThinIcon],svg[ph-arrow-square-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-49.17-74.83a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L124 158.34V88a4 4 0 0 1 8 0v70.34l25.17-25.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhArrowSquareDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareInThinIcon],svg[ph-arrow-square-in-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 136v64a4 4 0 0 1-8 0v-54.34l-73.17 73.17a4 4 0 0 1-5.66-5.66L110.34 140H56a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m84-100H80a12 12 0 0 0-12 12v48a4 4 0 0 0 8 0V48a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v128a4 4 0 0 1-4 4h-48a4 4 0 0 0 0 8h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhArrowSquareInThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareLeftThinIcon],svg[ph-arrow-square-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-40-80a4 4 0 0 1-4 4H97.66l25.17 25.17a4 4 0 0 1-5.66 5.66l-32-32a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 5.66L97.66 124H168a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhArrowSquareLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareOutThinIcon],svg[ph-arrow-square-out-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 104a4 4 0 0 1-8 0V49.66l-73.16 73.17a4 4 0 0 1-5.66-5.66L206.34 44H152a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4Zm-36 28a4 4 0 0 0-4 4v72a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h72a4 4 0 0 0 0-8H48a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-72a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhArrowSquareOutThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareRightThinIcon],svg[ph-arrow-square-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-41.17-82.83a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66-5.66L158.34 132H88a4 4 0 0 1 0-8h70.34l-25.17-25.17a4 4 0 0 1 5.66-5.66Z"></svg:path>`,
})
export class PhArrowSquareRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareUpLeftThinIcon],svg[ph-arrow-square-up-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-49.17-50.83a4 4 0 0 1-5.66 5.66L100 105.66V144a4 4 0 0 1-8 0V96a4 4 0 0 1 4-4h48a4 4 0 0 1 0 8h-38.34Z"></svg:path>`,
})
export class PhArrowSquareUpLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareUpRightThinIcon],svg[ph-arrow-square-up-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM164 96v48a4 4 0 0 1-8 0v-38.34l-57.17 57.17a4 4 0 0 1-5.66-5.66L150.34 100H112a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhArrowSquareUpRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareUpThinIcon],svg[ph-arrow-square-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-49.17-90.83a4 4 0 0 1-5.66 5.66L132 97.66V168a4 4 0 0 1-8 0V97.66l-25.17 25.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0Z"></svg:path>`,
})
export class PhArrowSquareUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUDownLeftThinIcon],svg[ph-arrow-u-down-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 112a60.07 60.07 0 0 1-60 60H41.66l41.17 41.17a4 4 0 0 1-5.66 5.66l-48-48a4 4 0 0 1 0-5.66l48-48a4 4 0 0 1 5.66 5.66L41.66 164H168a52 52 0 0 0 0-104H80a4 4 0 0 1 0-8h88a60.07 60.07 0 0 1 60 60"></svg:path>`,
})
export class PhArrowUDownLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUDownRightThinIcon],svg[ph-arrow-u-down-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 170.83l-48 48a4 4 0 0 1-5.66-5.66L214.34 172H88a60 60 0 0 1 0-120h88a4 4 0 0 1 0 8H88a52 52 0 0 0 0 104h126.34l-41.17-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhArrowUDownRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowULeftDownThinIcon],svg[ph-arrow-u-left-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 88v88a4 4 0 0 1-8 0V88a52 52 0 0 0-104 0v126.34l41.17-41.17a4 4 0 0 1 5.66 5.66l-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 0 1 5.66-5.66L84 214.34V88a60 60 0 0 1 120 0"></svg:path>`,
})
export class PhArrowULeftDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowULeftUpThinIcon],svg[ph-arrow-u-left-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 80v88a60 60 0 0 1-120 0V41.66L42.83 82.83a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1-5.66 5.66L92 41.66V168a52 52 0 0 0 104 0V80a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhArrowULeftUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowURightDownThinIcon],svg[ph-arrow-u-right-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m218.83 178.83l-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 0 1 5.66-5.66L164 214.34V88a52 52 0 0 0-104 0v88a4 4 0 0 1-8 0V88a60 60 0 0 1 120 0v126.34l41.17-41.17a4 4 0 0 1 5.66 5.66"></svg:path>`,
})
export class PhArrowURightDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowURightUpThinIcon],svg[ph-arrow-u-right-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.83 82.83a4 4 0 0 1-5.66 0L172 41.66V168a60 60 0 0 1-120 0V80a4 4 0 0 1 8 0v88a52 52 0 0 0 104 0V41.66l-41.17 41.17a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhArrowURightUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUUpLeftThinIcon],svg[ph-arrow-u-up-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 144a60.07 60.07 0 0 1-60 60H80a4 4 0 0 1 0-8h88a52 52 0 0 0 0-104H41.66l41.17 41.17a4 4 0 0 1-5.66 5.66l-48-48a4 4 0 0 1 0-5.66l48-48a4 4 0 0 1 5.66 5.66L41.66 84H168a60.07 60.07 0 0 1 60 60"></svg:path>`,
})
export class PhArrowUUpLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUUpRightThinIcon],svg[ph-arrow-u-up-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M173.17 133.17L214.34 92H88a52 52 0 0 0 0 104h88a4 4 0 0 1 0 8H88a60 60 0 0 1 0-120h126.34l-41.17-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66l-48 48a4 4 0 0 1-5.66-5.66"></svg:path>`,
})
export class PhArrowUUpRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUpLeftThinIcon],svg[ph-arrow-up-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M194.83 194.83a4 4 0 0 1-5.66 0L68 73.66V168a4 4 0 0 1-8 0V64a4 4 0 0 1 4-4h104a4 4 0 0 1 0 8H73.66l121.17 121.17a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhArrowUpLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUpRightThinIcon],svg[ph-arrow-up-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 64v104a4 4 0 0 1-8 0V73.66L66.83 194.83a4 4 0 0 1-5.66-5.66L182.34 68H88a4 4 0 0 1 0-8h104a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhArrowUpRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUpThinIcon],svg[ph-arrow-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.83 114.83a4 4 0 0 1-5.66 0L132 49.66V216a4 4 0 0 1-8 0V49.66l-65.17 65.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0l72 72a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhArrowUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsClockwiseThinIcon],svg[ph-arrows-clockwise-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 48v48a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h38.34l-21.45-21.46a84 84 0 0 0-118.09-.69a4 4 0 1 1-5.6-5.72a92 92 0 0 1 129.34.76L212 86.34V48a4 4 0 0 1 8 0m-30.8 138.15a83.44 83.44 0 0 1-58.68 23.91h-.47a83.52 83.52 0 0 1-58.94-24.6L49.66 164H88a4 4 0 0 0 0-8H40a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-38.34l21.46 21.45A91.43 91.43 0 0 0 130 218.06h.51a91.45 91.45 0 0 0 64.28-26.19a4 4 0 1 0-5.6-5.72Z"></svg:path>`,
})
export class PhArrowsClockwiseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsCounterClockwiseThinIcon],svg[ph-arrows-counter-clockwise-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 100H40a4 4 0 0 1-4-4V48a4 4 0 0 1 8 0v38.34l21.46-21.45A91.4 91.4 0 0 1 130 37.94h.51a91.43 91.43 0 0 1 64.29 26.19a4 4 0 0 1-5.6 5.72a83.44 83.44 0 0 0-58.68-23.91h-.47a83.52 83.52 0 0 0-58.94 24.6L49.66 92H88a4 4 0 0 1 0 8m128 56h-48a4 4 0 0 0 0 8h38.34l-21.45 21.46a83.52 83.52 0 0 1-58.89 24.6h-.47a83.44 83.44 0 0 1-58.73-23.91a4 4 0 0 0-5.6 5.72a91.43 91.43 0 0 0 64.28 26.19h.52a91.4 91.4 0 0 0 64.55-26.95L212 169.66V208a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhArrowsCounterClockwiseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsDownUpThinIcon],svg[ph-arrows-down-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M114.83 173.17a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L76 198.34V48a4 4 0 0 1 8 0v150.34l25.17-25.17a4 4 0 0 1 5.66 0m96-96l-32-32a4 4 0 0 0-5.66 0l-32 32a4 4 0 0 0 5.66 5.66L172 57.66V208a4 4 0 0 0 8 0V57.66l25.17 25.17a4 4 0 1 0 5.66-5.66"></svg:path>`,
})
export class PhArrowsDownUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsHorizontalThinIcon],svg[ph-arrows-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.83 130.83l-32 32a4 4 0 0 1-5.66-5.66L222.34 132H33.66l25.17 25.17a4 4 0 0 1-5.66 5.66l-32-32a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 5.66L33.66 124h188.68l-25.17-25.17a4 4 0 0 1 5.66-5.66l32 32a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhArrowsHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInCardinalThinIcon],svg[ph-arrows-in-cardinal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M93.17 66.83a4 4 0 0 1 5.66-5.66L124 86.34V24a4 4 0 0 1 8 0v62.34l25.17-25.17a4 4 0 1 1 5.66 5.66l-32 32a4 4 0 0 1-5.66 0Zm37.66 90.34a4 4 0 0 0-5.66 0l-32 32a4 4 0 0 0 5.66 5.66L124 169.66V232a4 4 0 0 0 8 0v-62.34l25.17 25.17a4 4 0 0 0 5.66-5.66ZM232 124h-62.34l25.17-25.17a4 4 0 1 0-5.66-5.66l-32 32a4 4 0 0 0 0 5.66l32 32a4 4 0 0 0 5.66-5.66L169.66 132H232a4 4 0 0 0 0-8m-133.17 1.17l-32-32a4 4 0 0 0-5.66 5.66L86.34 124H24a4 4 0 0 0 0 8h62.34l-25.17 25.17a4 4 0 0 0 5.66 5.66l32-32a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhArrowsInCardinalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInLineHorizontalThinIcon],svg[ph-arrows-in-line-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 40v176a4 4 0 0 1-8 0V40a4 4 0 0 1 8 0M66.83 93.17a4 4 0 0 0-5.66 5.66L86.34 124H16a4 4 0 0 0 0 8h70.34l-25.17 25.17a4 4 0 0 0 5.66 5.66l32-32a4 4 0 0 0 0-5.66ZM240 124h-70.34l25.17-25.17a4 4 0 1 0-5.66-5.66l-32 32a4 4 0 0 0 0 5.66l32 32a4 4 0 0 0 5.66-5.66L169.66 132H240a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhArrowsInLineHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInLineVerticalThinIcon],svg[ph-arrows-in-line-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m-94.83-29.17a4 4 0 0 0 5.66 0l32-32a4 4 0 1 0-5.66-5.66L132 86.34V16a4 4 0 0 0-8 0v70.34L98.83 61.17a4 4 0 0 0-5.66 5.66Zm5.66 58.34a4 4 0 0 0-5.66 0l-32 32a4 4 0 0 0 5.66 5.66L124 169.66V240a4 4 0 0 0 8 0v-70.34l25.17 25.17a4 4 0 0 0 5.66-5.66Z"></svg:path>`,
})
export class PhArrowsInLineVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInSimpleThinIcon],svg[ph-arrows-in-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.83 50.83L153.66 108H192a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4V64a4 4 0 0 1 8 0v38.34l57.17-57.17a4 4 0 1 1 5.66 5.66M112 140H64a4 4 0 0 0 0 8h38.34l-57.17 57.17a4 4 0 0 0 5.66 5.66L108 153.66V192a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhArrowsInSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInThinIcon],svg[ph-arrows-in-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 104V64a4 4 0 0 1 8 0v30.34l49.17-49.17a4 4 0 1 1 5.66 5.66L161.66 100H192a4 4 0 0 1 0 8h-40a4 4 0 0 1-4-4m-44 44H64a4 4 0 0 0 0 8h30.34l-49.17 49.17a4 4 0 0 0 5.66 5.66L100 161.66V192a4 4 0 0 0 8 0v-40a4 4 0 0 0-4-4m57.66 8H192a4 4 0 0 0 0-8h-40a4 4 0 0 0-4 4v40a4 4 0 0 0 8 0v-30.34l49.17 49.17a4 4 0 0 0 5.66-5.66ZM104 60a4 4 0 0 0-4 4v30.34L50.83 45.17a4 4 0 0 0-5.66 5.66L94.34 100H64a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4V64a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhArrowsInThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsLeftRightThinIcon],svg[ph-arrows-left-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.83 173.17a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66-5.66L198.34 180H48a4 4 0 0 1 0-8h150.34l-25.17-25.17a4 4 0 0 1 5.66-5.66ZM77.17 114.83a4 4 0 0 0 5.66-5.66L57.66 84H208a4 4 0 0 0 0-8H57.66l25.17-25.17a4 4 0 0 0-5.66-5.66l-32 32a4 4 0 0 0 0 5.66Z"></svg:path>`,
})
export class PhArrowsLeftRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsMergeThinIcon],svg[ph-arrows-merge-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 40v64a4 4 0 0 1-1.17 2.83L132 161.66v60.68l25.17-25.17a4 4 0 0 1 5.66 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L124 222.34v-60.68l-54.83-54.83A4 4 0 0 1 68 104V40a4 4 0 0 1 8 0v62.34l52 52l52-52V40a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhArrowsMergeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutCardinalThinIcon],svg[ph-arrows-out-cardinal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M93.17 58.83a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66L132 33.66V96a4 4 0 0 1-8 0V33.66L98.83 58.83a4 4 0 0 1-5.66 0m64 138.34L132 222.34V160a4 4 0 0 0-8 0v62.34l-25.17-25.17a4 4 0 0 0-5.66 5.66l32 32a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0-5.66-5.66m77.66-72l-32-32a4 4 0 0 0-5.66 5.66L222.34 124H160a4 4 0 0 0 0 8h62.34l-25.17 25.17a4 4 0 0 0 5.66 5.66l32-32a4 4 0 0 0 0-5.66M33.66 132H96a4 4 0 0 0 0-8H33.66l25.17-25.17a4 4 0 0 0-5.66-5.66l-32 32a4 4 0 0 0 0 5.66l32 32a4 4 0 1 0 5.66-5.66Z"></svg:path>`,
})
export class PhArrowsOutCardinalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutLineHorizontalThinIcon],svg[ph-arrows-out-line-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 40v176a4 4 0 0 1-8 0V40a4 4 0 0 1 8 0m-36 84H25.66l25.17-25.17a4 4 0 0 0-5.66-5.66l-32 32a4 4 0 0 0 0 5.66l32 32a4 4 0 1 0 5.66-5.66L25.66 132H96a4 4 0 0 0 0-8m146.83 1.17l-32-32a4 4 0 0 0-5.66 5.66L230.34 124H160a4 4 0 0 0 0 8h70.34l-25.17 25.17a4 4 0 0 0 5.66 5.66l32-32a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhArrowsOutLineHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutLineVerticalThinIcon],svg[ph-arrows-out-line-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4M98.83 50.83L124 25.66V96a4 4 0 0 0 8 0V25.66l25.17 25.17a4 4 0 1 0 5.66-5.66l-32-32a4 4 0 0 0-5.66 0l-32 32a4 4 0 0 0 5.66 5.66m58.34 154.34L132 230.34V160a4 4 0 0 0-8 0v70.34l-25.17-25.17a4 4 0 0 0-5.66 5.66l32 32a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0-5.66-5.66"></svg:path>`,
})
export class PhArrowsOutLineVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutSimpleThinIcon],svg[ph-arrows-out-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 48v48a4 4 0 0 1-8 0V57.66l-57.17 57.17a4 4 0 0 1-5.66-5.66L198.34 52H160a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m-102.83 93.17L52 198.34V160a4 4 0 0 0-8 0v48a4 4 0 0 0 4 4h48a4 4 0 0 0 0-8H57.66l57.17-57.17a4 4 0 0 0-5.66-5.66"></svg:path>`,
})
export class PhArrowsOutSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutThinIcon],svg[ph-arrows-out-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 48v48a4 4 0 0 1-8 0V57.66l-49.17 49.17a4 4 0 0 1-5.66-5.66L198.34 52H160a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4M101.17 149.17L52 198.34V160a4 4 0 0 0-8 0v48a4 4 0 0 0 4 4h48a4 4 0 0 0 0-8H57.66l49.17-49.17a4 4 0 0 0-5.66-5.66M208 156a4 4 0 0 0-4 4v38.34l-49.17-49.17a4 4 0 0 0-5.66 5.66L198.34 204H160a4 4 0 0 0 0 8h48a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4M57.66 52H96a4 4 0 0 0 0-8H48a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0V57.66l49.17 49.17a4 4 0 0 0 5.66-5.66Z"></svg:path>`,
})
export class PhArrowsOutThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsSplitThinIcon],svg[ph-arrows-split-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 186.83l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L188 206.34v-68.68l-60-60l-60 60v68.68l25.17-25.17a4 4 0 0 1 5.66 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L60 206.34V136a4 4 0 0 1 1.17-2.83L124 70.34V24a4 4 0 0 1 8 0v46.34l62.83 62.83A4 4 0 0 1 196 136v70.34l25.17-25.17a4 4 0 0 1 5.66 5.66"></svg:path>`,
})
export class PhArrowsSplitThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsVerticalThinIcon],svg[ph-arrows-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162.83 197.17a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L124 222.34V33.66L98.83 58.83a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66L132 33.66v188.68l25.17-25.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhArrowsVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArticleMediumThinIcon],svg[ph-article-medium-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 136a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h12V60H24a4 4 0 0 1 0-8h16a4 4 0 0 1 3.39 1.87L80 112.45l36.61-58.57A4 4 0 0 1 120 52h16a4 4 0 0 1 0 8h-12v72h12a4 4 0 0 1 0 8h-24a4 4 0 0 1 0-8h4V70l-32.61 52.12a4 4 0 0 1-6.78 0L44 70v62h4a4 4 0 0 1 4 4m116-28h64a4 4 0 0 0 0-8h-64a4 4 0 0 0 0 8m64 24h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m0 32H80a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8m0 32H80a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhArticleMediumThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArticleNyTimesThinIcon],svg[ph-article-ny-times-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 100h104a4 4 0 0 1 0 8H128a4 4 0 0 1 0-8m104 32H128a4 4 0 0 0 0 8h104a4 4 0 0 0 0-8m0 32H80a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8m0 32H80a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8M96 140a4 4 0 0 0 0-8H84V60h40v12a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4H32a4 4 0 0 0-4 4v16a4 4 0 0 0 8 0V60h40v72H64a4 4 0 0 0 0 8Z"></svg:path>`,
})
export class PhArticleNyTimesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArticleThinIcon],svg[ph-article-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM180 96a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhArticleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAsclepiusThinIcon],svg[ph-asclepius-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 79v1a36 36 0 0 1-36 36h-44v88h12a20 20 0 0 0 13.33-34.91a4 4 0 1 1 5.34-6A28 28 0 0 1 144 212h-12v20a4 4 0 0 1-8 0v-20H96a4 4 0 0 1 0-8h28v-88H96a20 20 0 0 0 0 40a4 4 0 0 1 0 8a28 28 0 0 1 0-56h28V24a4 4 0 0 1 8 0v84h44a28 28 0 0 0 28-28v-1a27 27 0 0 0-27-27h-17a4 4 0 0 1 0-8h17a35 35 0 0 1 35 35M56 92H32a4 4 0 0 1-4-4v-8a36 36 0 0 1 36-36h32a4 4 0 0 1 0 8h-4v4a36 36 0 0 1-36 36m28-36v-4H64a28 28 0 0 0-28 28v4h20a28 28 0 0 0 28-28"></svg:path>`,
})
export class PhAsclepiusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAsteriskSimpleThinIcon],svg[ph-asterisk-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m209.48 99.71l-75.06 30l52.74 67.8a4 4 0 0 1-.71 5.62a3.93 3.93 0 0 1-2.45.87a4 4 0 0 1-3.16-1.54L128 134.52l-52.84 67.94A4 4 0 0 1 72 204a4 4 0 0 1-2.45-.84a4 4 0 0 1-.71-5.62l52.74-67.8l-75.06-30a4 4 0 1 1 3-7.42L124 122.09V40a4 4 0 0 1 8 0v82.09l74.51-29.8a4 4 0 1 1 3 7.42Z"></svg:path>`,
})
export class PhAsteriskSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAsteriskThinIcon],svg[ph-asterisk-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.43 178.06a4 4 0 0 1-5.49 1.37L132 135.06V216a4 4 0 0 1-8 0v-80.94l-73.94 44.37a4 4 0 0 1-4.12-6.86L120.22 128L45.94 83.43a4 4 0 0 1 4.12-6.86L124 120.94V40a4 4 0 0 1 8 0v80.94l73.94-44.37a4 4 0 1 1 4.12 6.86L135.78 128l74.28 44.57a4 4 0 0 1 1.37 5.49"></svg:path>`,
})
export class PhAsteriskThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAtThinIcon],svg[ph-at-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 0 0 0 200c20.76 0 42.52-6.23 58.21-16.66a4 4 0 1 0-4.43-6.67C167.35 214.27 147.24 220 128 220a92 92 0 1 1 92-92c0 31.32-15 36-24 36s-24-4.68-24-36V88a4 4 0 0 0-8 0v14.75a44 44 0 1 0 2.82 45.94C171.46 163.58 181.66 172 196 172c20 0 32-16.45 32-44A100.11 100.11 0 0 0 128 28m0 136a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhAtThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAtomThinIcon],svg[ph-atom-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.89 162.47A195.6 195.6 0 0 0 191.36 128a195.6 195.6 0 0 0 20.53-34.47c10.38-23.06 10.81-41 1.21-50.63s-27.57-9.17-50.63 1.21A195.6 195.6 0 0 0 128 64.64a195.6 195.6 0 0 0-34.47-20.53C70.47 33.73 52.49 33.3 42.9 42.9s-9.17 27.57 1.21 50.63A195.6 195.6 0 0 0 64.64 128a195.6 195.6 0 0 0-20.53 34.47c-10.38 23.06-10.81 41-1.21 50.63c4.6 4.6 11.1 6.9 19.22 6.9c8.78 0 19.41-2.71 31.41-8.11A195.6 195.6 0 0 0 128 191.36a195.6 195.6 0 0 0 34.47 20.53c12 5.4 22.63 8.11 31.41 8.11c8.09 0 14.62-2.3 19.22-6.9c9.6-9.59 9.17-27.57-1.21-50.63m-4.44-113.92c10.27 10.28 3.14 39.05-21.1 72.84A301 301 0 0 0 162 94a301 301 0 0 0-27.43-24.31c33.83-24.29 62.6-31.42 72.88-21.14m-26 79.45a293 293 0 0 1-25 28.38a292 292 0 0 1-28.38 25a292 292 0 0 1-28.38-25a293 293 0 0 1-25-28.38A302.4 302.4 0 0 1 128 74.58a296 296 0 0 1 28.37 25A293 293 0 0 1 181.41 128ZM48.55 48.55c3.05-3 7.71-4.55 13.64-4.55c14.11 0 35.41 8.59 59.19 25.65a305 305 0 0 0-51.73 51.74C45.41 87.6 38.28 58.83 48.55 48.55m0 158.9c-10.27-10.28-3.14-39 21.1-72.84A301 301 0 0 0 94 162a301 301 0 0 0 27.43 24.31c-33.83 24.28-62.6 31.41-72.88 21.14m158.9 0c-10.28 10.27-39 3.14-72.84-21.1A301 301 0 0 0 162 162a301 301 0 0 0 24.31-27.43c24.28 33.83 31.41 62.6 21.14 72.88M136 128a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhAtomThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAvocadoThinIcon],svg[ph-avocado-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 116a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36m79.22-64l-29.79-84.2A52 52 0 0 0 79 46.66l-29.55 83.51A84 84 0 1 0 207.22 132M128 236a76.06 76.06 0 0 1-71-103.08l29.5-83.59a44 44 0 0 1 83.35 1.05l29.82 84.28A76 76 0 0 1 128 236"></svg:path>`,
})
export class PhAvocadoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAxeThinIcon],svg[ph-axe-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M251.36 99a12 12 0 0 0-9.86-8.09A141.1 141.1 0 0 1 184 69.67l13.86-13.87a21 21 0 0 0-29.66-29.66L152 42.39a107 107 0 0 1-7.47-9.27a12 12 0 0 0-18.29-1.61L87.51 70.18a12 12 0 0 0 1.61 18.3A107 107 0 0 1 98.39 96l-88.25 88.2a21 21 0 0 0 29.66 29.66L125.67 128a141 141 0 0 1 21.24 57.52a12 12 0 0 0 20.38 7l81.19-81.19A11.89 11.89 0 0 0 251.36 99m-77.5-67.2a13 13 0 1 1 18.34 18.34l-15 15a157 157 0 0 1-19.81-16.88ZM34.14 208.2a13 13 0 1 1-18.34-18.34l88.43-88.43a157 157 0 0 1 16.88 19.81Zm208.68-102.56l-81.18 81.18a3.86 3.86 0 0 1-4.08 1a4 4 0 0 1-2.72-3.34c-8.54-63.97-55.77-98.79-61.12-102.55A4 4 0 0 1 92 79a3.9 3.9 0 0 1 1.14-3.15l38.68-38.68a3.92 3.92 0 0 1 2.8-1.16h.35a4 4 0 0 1 2.94 1.7c3.76 5.35 38.58 52.58 102.52 61.11a4 4 0 0 1 3.33 2.73a3.86 3.86 0 0 1-.94 4.09"></svg:path>`,
})
export class PhAxeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBabyCarriageThinIcon],svg[ph-baby-carriage-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 36h-8a12 12 0 0 0-12 12v60H51.77A36 36 0 0 0 16 76a4 4 0 0 0 0 8a28 28 0 0 1 28 28a76.08 76.08 0 0 0 76 76h40a76 76 0 0 0 0-152m67.87 72H155.4l53.71-43a67.76 67.76 0 0 1 18.76 43M152 44h8a67.72 67.72 0 0 1 43.2 15.52L148 103.68V48a4 4 0 0 1 4-4m8 136h-40a68.08 68.08 0 0 1-67.88-64h175.76A68.08 68.08 0 0 1 160 180m-60 44a12 12 0 1 1-12-12a12 12 0 0 1 12 12m104 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhBabyCarriageThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBabyThinIcon],svg[ph-baby-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 136a8 8 0 1 1 8-8a8 8 0 0 1-8 8m72-16a8 8 0 1 0 8 8a8 8 0 0 0-8-8m-10.13 44.62a49 49 0 0 1-51.74 0a4 4 0 0 0-4.26 6.76a57 57 0 0 0 60.26 0a4 4 0 1 0-4.26-6.76M228 128A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92.11 92.11 0 0 0-90.06-92C116.26 54.07 116 71.83 116 72a12 12 0 0 0 24 0a4 4 0 0 1 8 0a20 20 0 0 1-40 0c0-.78.16-17.31 12-35.64A92 92 0 1 0 220 128"></svg:path>`,
})
export class PhBabyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBackpackThinIcon],svg[ph-backpack-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 44.17V32a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v12.17A52.05 52.05 0 0 0 44 96v120a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V96a52.05 52.05 0 0 0-48-51.83M112 20h32a12 12 0 0 1 12 12v12h-56V32a12 12 0 0 1 12-12m60 144H84v-12a12 12 0 0 1 12-12h64a12 12 0 0 1 12 12Zm-88 8h56v12a4 4 0 0 0 8 0v-12h24v48H84Zm120 44a4 4 0 0 1-4 4h-20v-68a20 20 0 0 0-20-20H96a20 20 0 0 0-20 20v68H56a4 4 0 0 1-4-4V96a44.05 44.05 0 0 1 44-44h64a44.05 44.05 0 0 1 44 44ZM148 88a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhBackpackThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBackspaceThinIcon],svg[ph-backspace-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H68.53a12.06 12.06 0 0 0-10.29 5.83l-45.67 76.11a4 4 0 0 0 0 4.12l45.67 76.11A12.06 12.06 0 0 0 68.53 212H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4H68.53a4 4 0 0 1-3.43-1.94L20.67 128L65.1 53.94A4 4 0 0 1 68.53 52H216a4 4 0 0 1 4 4Zm-57.17-93.17L141.66 128l21.17 21.17a4 4 0 0 1-5.66 5.66L136 133.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L130.34 128l-21.17-21.17a4 4 0 0 1 5.66-5.66L136 122.34l21.17-21.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhBackspaceThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBagSimpleThinIcon],svg[ph-bag-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-44v-4a44 44 0 0 0-88 0v4H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12M92 64a36 36 0 0 1 72 0v4H92Zm128 136a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhBagSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBagThinIcon],svg[ph-bag-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-44v-4a44 44 0 0 0-88 0v4H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12M92 64a36 36 0 0 1 72 0v4H92Zm128 136a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h44v20a4 4 0 0 0 8 0V76h72v20a4 4 0 0 0 8 0V76h44a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhBagThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBalloonThinIcon],svg[ph-balloon-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a84.09 84.09 0 0 0-84 84c0 22.57 9.08 47.63 24.28 67c12.68 16.17 28 26.81 44.22 31l-12.18 28.4A4 4 0 0 0 104 236h48a4 4 0 0 0 3.68-5.58L143.5 202c16.23-4.17 31.54-14.81 44.22-31c15.2-19.41 24.28-44.47 24.28-67a84.09 84.09 0 0 0-84-84m17.93 208h-35.86l10.48-24.46a60.6 60.6 0 0 0 14.9 0ZM128 196c-42.1 0-76-50.33-76-92a76 76 0 0 1 152 0c0 41.67-33.9 92-76 92m52-100.66a4 4 0 0 1-3.29 4.61a5 5 0 0 1-.66 0a4 4 0 0 1-3.95-3.34A45.31 45.31 0 0 0 135.34 60a4 4 0 0 1 1.32-7.9A53.46 53.46 0 0 1 180 95.34"></svg:path>`,
})
export class PhBalloonThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBandaidsThinIcon],svg[ph-bandaids-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m178.91 128l30.55-30.54a36 36 0 0 0-50.92-50.92L128 77.09L97.46 46.54a36 36 0 0 0-50.92 50.92L77.09 128l-30.55 30.54a36 36 0 0 0 50.92 50.92L128 178.91l30.54 30.55a36 36 0 0 0 50.92-50.92ZM164.2 52.2a28 28 0 0 1 39.6 39.6l-30.55 30.54l-39.59-39.59Zm3.4 75.8L128 167.6L88.4 128L128 88.4ZM52.2 91.8a28 28 0 0 1 39.6-39.6l30.54 30.55l-39.59 39.59Zm39.6 112a28 28 0 0 1-39.6-39.6l30.55-30.54l39.59 39.59Zm112 0a28 28 0 0 1-39.6 0l-30.54-30.55l39.59-39.59l30.55 30.54a28 28 0 0 1 0 39.6M120 128a8 8 0 1 1 8 8a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhBandaidsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBankThinIcon],svg[ph-bank-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 100h28v72H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8h-20v-72h28a4 4 0 0 0 2.1-7.41l-104-64a4 4 0 0 0-4.2 0l-104 64A4 4 0 0 0 24 100m36 0h40v72H60Zm88 0v72h-40v-72Zm48 72h-40v-72h40ZM128 36.7L217.87 92H38.13ZM244 208a4 4 0 0 1-4 4H16a4 4 0 0 1 0-8h224a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhBankThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarbellThinIcon],svg[ph-barbell-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 124h-12V88a12 12 0 0 0-12-12h-20V64a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v60h-56V64a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v12H32a12 12 0 0 0-12 12v36H8a4 4 0 0 0 0 8h12v36a12 12 0 0 0 12 12h20v12a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-60h56v60a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-12h20a12 12 0 0 0 12-12v-36h12a4 4 0 0 0 0-8M32 172a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h20v88Zm60 20a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4Zm104 0a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4Zm32-24a4 4 0 0 1-4 4h-20V84h20a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhBarbellThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarcodeThinIcon],svg[ph-barcode-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 48v40a4 4 0 0 1-8 0V52h-36a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4M72 204H36v-36a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4h40a4 4 0 0 0 0-8m152-40a4 4 0 0 0-4 4v36h-36a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4M32 92a4 4 0 0 0 4-4V52h36a4 4 0 0 0 0-8H32a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4m48-8a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4m100 4a4 4 0 0 0-8 0v80a4 4 0 0 0 8 0Zm-36-4a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4m-32 0a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhBarcodeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarnThinIcon],svg[ph-barn-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 196h-12v-77.92l8.74 12.25A4 4 0 0 0 240 132a4 4 0 0 0 3.25-6.32l-40-56a3.8 3.8 0 0 0-1-1L134.66 22a12 12 0 0 0-13.37 0L53.73 68.71a3.8 3.8 0 0 0-1 1l-40 56a4 4 0 1 0 6.51 4.65L28 118.08V196H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M36 106.88l22.85-32l66.93-46.23a4 4 0 0 1 4.38 0l67 46.26l22.85 32V196H188v-76a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4v76H36Zm92 48.2L84.48 124h87Zm52-27.31v64.46L134.88 160ZM121.12 160L76 192.23v-64.46Zm6.88 4.92L171.52 196h-87ZM108 88a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-32a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhBarnThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarricadeThinIcon],svg[ph-barricade-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 68H32a12 12 0 0 0-12 12v72a12 12 0 0 0 12 12h28v36a4 4 0 0 0 8 0v-36h120v36a4 4 0 0 0 8 0v-36h28a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12m4 12v58.34L165.66 76H224a4 4 0 0 1 4 4M32 76h50.34l80 80h-60.68L28 82.34V80a4 4 0 0 1 4-4m-4 76V93.66L90.34 156H32a4 4 0 0 1-4-4m196 4h-50.34l-80-80h60.68L228 149.66V152a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhBarricadeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBaseballCapThinIcon],svg[ph-baseball-cap-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28A100.12 100.12 0 0 0 28 128v56a20 20 0 0 0 31.84 16.12C72.46 191 94.53 180 128 180s55.54 10.94 68.16 20.12a20 20 0 0 0 21 1.67A19.87 19.87 0 0 0 228 184v-56A100.12 100.12 0 0 0 128 28m92 100v16.23a162.3 162.3 0 0 0-48.67-22.47a162.56 162.56 0 0 0-34.15-85.31A92.12 92.12 0 0 1 220 128m-56.9-8.26a166.6 166.6 0 0 0-70.2 0C97.64 76.93 120 47.31 128 38c8 9.32 30.36 38.93 35.1 81.75Zm-44.28-83.28a162.56 162.56 0 0 0-34.15 85.31A162.3 162.3 0 0 0 36 144.24V128a92.12 92.12 0 0 1 82.82-91.54m94.66 158.21a11.88 11.88 0 0 1-12.61-1C187.29 183.78 163.62 172 128 172s-59.29 11.77-72.87 21.65a11.88 11.88 0 0 1-12.61 1A11.75 11.75 0 0 1 36 184v-30a156 156 0 0 1 184 0v30a11.75 11.75 0 0 1-6.52 10.67"></svg:path>`,
})
export class PhBaseballCapThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBaseballHelmetThinIcon],svg[ph-baseball-helmet-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 132a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 40a16 16 0 1 1 16-16a16 16 0 0 1-16 16m160-48h-28.08A100 100 0 0 0 20 128v24a68.07 68.07 0 0 0 68 68h40a68.07 68.07 0 0 0 68-68v-20h52a4 4 0 0 0 0-8m-60 28a60.07 60.07 0 0 1-60 60h-8a68.07 68.07 0 0 0 36-60v-20h32Zm-36-28a4 4 0 0 0-4 4v24a60 60 0 0 1-120 0v-24a92 92 0 0 1 183.91-4Z"></svg:path>`,
})
export class PhBaseballHelmetThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBaseballThinIcon],svg[ph-baseball-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m67.31 162.64a90 90 0 0 1-4.46-5.14a4 4 0 0 0-6.24 5c1.58 2 3.26 3.9 5 5.76a91.82 91.82 0 0 1-123.22 0c1.74-1.86 3.42-3.78 5-5.76a4 4 0 0 0-6.24-5a90 90 0 0 1-4.46 5.14a91.81 91.81 0 0 1 0-125.28a90 90 0 0 1 4.46 5.14a4 4 0 0 0 6.24-5c-1.58-2-3.26-3.9-5-5.76a91.82 91.82 0 0 1 123.22 0a97 97 0 0 0-5 5.76a4 4 0 1 0 6.24 5a90 90 0 0 1 4.46-5.14a91.81 91.81 0 0 1 0 125.28m-103.37-46a98.6 98.6 0 0 1-4.3 16.67a4 4 0 0 1-3.78 2.69a3.9 3.9 0 0 1-1.33-.23a4 4 0 0 1-2.44-5.1a92 92 0 0 0 4-15.33a4 4 0 0 1 7.88 1.32Zm0-33.32a4 4 0 0 1-3.28 4.6a4 4 0 0 1-.66.08a4 4 0 0 1-3.94-3.34a92 92 0 0 0-4-15.33a4 4 0 0 1 7.55-2.66a98.6 98.6 0 0 1 4.33 16.67Zm84 47.33a4 4 0 0 1-2.44 5.1a3.9 3.9 0 0 1-1.33.23a4 4 0 0 1-3.78-2.67a98.6 98.6 0 0 1-4.3-16.67a4 4 0 0 1 7.88-1.32a92 92 0 0 0 3.94 15.35Zm0-61.34a92 92 0 0 0-4 15.33A4 4 0 0 1 168 116a3.7 3.7 0 0 1-.66-.06a4 4 0 0 1-3.28-4.6a98.6 98.6 0 0 1 4.3-16.67a4 4 0 0 1 7.55 2.66Z"></svg:path>`,
})
export class PhBaseballThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBasketThinIcon],svg[ph-basket-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 120v56a4 4 0 0 1-8 0v-56a4 4 0 0 1 8 0m49.2-4a4 4 0 0 0-4.38 3.58l-5.6 56a4 4 0 0 0 3.58 4.42h.41a4 4 0 0 0 4-3.6l5.6-56a4 4 0 0 0-3.61-4.4m-106.4 0a4 4 0 0 0-3.58 4.38l5.6 56a4 4 0 0 0 4 3.6h.41a4 4 0 0 0 3.58-4.38l-5.6-56a4 4 0 0 0-4.41-3.6M236 88.53l-15.11 113.06A12 12 0 0 1 209 212H47a12 12 0 0 1-11.89-10.41L20 88.53a4 4 0 0 1 1-3.16A4 4 0 0 1 24 84h46.18L125 21.37a4 4 0 0 1 6 0L185.82 84H232a4 4 0 0 1 3 1.37a4 4 0 0 1 1 3.16M80.82 84h94.36L128 30.07Zm146.61 8H28.57L43 200.53a4 4 0 0 0 4 3.47h162a4 4 0 0 0 4-3.47Z"></svg:path>`,
})
export class PhBasketThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBasketballThinIcon],svg[ph-basketball-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28M60 66.07A91.22 91.22 0 0 1 83.9 124H36.09A91.7 91.7 0 0 1 60 66.07M132 124V36.09a91.63 91.63 0 0 1 58.32 24.3A99.24 99.24 0 0 0 164.09 124Zm-8 0H91.91a99.24 99.24 0 0 0-26.23-63.61A91.63 91.63 0 0 1 124 36.09Zm-40.1 8A91.22 91.22 0 0 1 60 189.93A91.7 91.7 0 0 1 36.09 132Zm8 0H124v87.91a91.63 91.63 0 0 1-58.32-24.3A99.24 99.24 0 0 0 91.91 132Zm40.1 0h32.09a99.24 99.24 0 0 0 26.23 63.61a91.63 91.63 0 0 1-58.32 24.3Zm40.1 0h47.81A91.7 91.7 0 0 1 196 189.93A91.22 91.22 0 0 1 172.1 132m0-8A91.22 91.22 0 0 1 196 66.07A91.7 91.7 0 0 1 219.91 124Z"></svg:path>`,
})
export class PhBasketballThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBathtubThinIcon],svg[ph-bathtub-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 100h-36v-4a4 4 0 0 0-4-4h-64a4 4 0 0 0-4 4v4H60V52a16 16 0 0 1 16-16a16.49 16.49 0 0 1 16.08 12.8a4 4 0 1 0 7.84-1.6A24.32 24.32 0 0 0 76 28a24 24 0 0 0-24 24v48H16a4 4 0 0 0-4 4v40a52.06 52.06 0 0 0 52 52h4v20a4 4 0 0 0 8 0v-20h104v20a4 4 0 0 0 8 0v-20h4a52.06 52.06 0 0 0 52-52v-40a4 4 0 0 0-4-4m-100 0h56v40h-56Zm96 44a44.05 44.05 0 0 1-44 44H64a44.05 44.05 0 0 1-44-44v-36h112v36a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4v-36h32Z"></svg:path>`,
})
export class PhBathtubThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingThinIcon],svg[ph-battery-charging-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h168a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 116a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h168a12 12 0 0 1 12 12Zm40-80v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-116.6 29.9a4 4 0 0 1 .18 3.89l-16 32A4 4 0 0 1 116 164a4.1 4.1 0 0 1-1.79-.42a4 4 0 0 1-1.79-5.37L125.53 132H100a4 4 0 0 1-3.58-5.79l16-32a4 4 0 1 1 7.16 3.58L106.47 124H132a4 4 0 0 1 3.4 1.9"></svg:path>`,
})
export class PhBatteryChargingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingVerticalThinIcon],svg[ph-battery-charging-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M147.4 133.9a4 4 0 0 1 .18 3.89l-16 32A4 4 0 0 1 128 172a4.1 4.1 0 0 1-1.79-.42a4 4 0 0 1-1.79-5.37L137.53 140H112a4 4 0 0 1-3.58-5.79l16-32a4 4 0 1 1 7.16 3.58L118.47 132H144a4 4 0 0 1 3.4 1.9M96 12h64a4 4 0 0 0 0-8H96a4 4 0 0 0 0 8m100 44v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Z"></svg:path>`,
})
export class PhBatteryChargingVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryEmptyThinIcon],svg[ph-battery-empty-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h168a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 116a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h168a12 12 0 0 1 12 12Zm40-80v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhBatteryEmptyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryFullThinIcon],svg[ph-battery-full-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h168a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 116a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h168a12 12 0 0 1 12 12Zm-32-80v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-40 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-40 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-40 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m192 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhBatteryFullThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryHighThinIcon],svg[ph-battery-high-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h168a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 116a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h168a12 12 0 0 1 12 12Zm-72-80v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-40 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-40 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m192 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhBatteryHighThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryLowThinIcon],svg[ph-battery-low-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h168a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 116a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h168a12 12 0 0 1 12 12ZM60 96v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m192 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhBatteryLowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryMediumThinIcon],svg[ph-battery-medium-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h168a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 116a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h168a12 12 0 0 1 12 12ZM100 96v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-40 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m192 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhBatteryMediumThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusThinIcon],svg[ph-battery-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 128a4 4 0 0 1-4 4h-24v24a4 4 0 0 1-8 0v-24H88a4 4 0 0 1 0-8h24v-24a4 4 0 0 1 8 0v24h24a4 4 0 0 1 4 4m72-48v96a20 20 0 0 1-20 20H32a20 20 0 0 1-20-20V80a20 20 0 0 1 20-20h168a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h168a12 12 0 0 0 12-12Zm36 12a4 4 0 0 0-4 4v64a4 4 0 0 0 8 0V96a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhBatteryPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusVerticalThinIcon],svg[ph-battery-plus-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 8a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m104 48v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Zm-32 80h-24v-24a4 4 0 0 0-8 0v24h-24a4 4 0 0 0 0 8h24v24a4 4 0 0 0 8 0v-24h24a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhBatteryPlusVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalEmptyThinIcon],svg[ph-battery-vertical-empty-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 8a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m104 48v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Z"></svg:path>`,
})
export class PhBatteryVerticalEmptyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalFullThinIcon],svg[ph-battery-vertical-full-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 8a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m104 48v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Zm-28 20H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m0 40H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m0 40H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m0 40H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhBatteryVerticalFullThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalHighThinIcon],svg[ph-battery-vertical-high-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 8a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m104 48v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Zm-28 60H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m0 40H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m0 40H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhBatteryVerticalHighThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalLowThinIcon],svg[ph-battery-vertical-low-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 8a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m104 48v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Zm-28 140H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhBatteryVerticalLowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalMediumThinIcon],svg[ph-battery-vertical-medium-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 8a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m104 48v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Zm-28 100H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m0 40H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhBatteryVerticalMediumThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningThinIcon],svg[ph-battery-warning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h168a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 116a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h168a12 12 0 0 1 12 12Zm40-80v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-140 28V96a4 4 0 0 1 8 0v28a4 4 0 0 1-8 0m12 32a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhBatteryWarningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningVerticalThinIcon],svg[ph-battery-warning-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 136V96a4 4 0 0 1 8 0v40a4 4 0 0 1-8 0m4 28a8 8 0 1 0 8 8a8 8 0 0 0-8-8M96 12h64a4 4 0 0 0 0-8H96a4 4 0 0 0 0 8m100 44v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Z"></svg:path>`,
})
export class PhBatteryWarningVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeachBallThinIcon],svg[ph-beach-ball-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m88.14 73.64A195 195 0 0 0 165 91a195 195 0 0 0-10.68-51.1a92.33 92.33 0 0 1 61.82 61.74M145 37.58a187.5 187.5 0 0 1 11.3 45.68a196.4 196.4 0 0 0-66.63-38.88A91.3 91.3 0 0 1 128 36a92.4 92.4 0 0 1 17 1.58M79.86 49.63a188.1 188.1 0 0 1 72.45 40.82A196.2 196.2 0 0 0 36 127.39a92 92 0 0 1 43.86-77.76M36.44 137a188.17 188.17 0 0 1 121-38.48a188.17 188.17 0 0 1-38.48 121A92.17 92.17 0 0 1 36.44 137m92.17 83a196.2 196.2 0 0 0 36.94-116.3a188.1 188.1 0 0 1 40.82 72.45A92 92 0 0 1 128.61 220m83-53.66a196.4 196.4 0 0 0-38.87-66.64a187.5 187.5 0 0 1 45.68 11.3a92.4 92.4 0 0 1 1.58 17a91.3 91.3 0 0 1-8.38 38.33Z"></svg:path>`,
})
export class PhBeachBallThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeanieThinIcon],svg[ph-beanie-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 164.7V144a92.15 92.15 0 0 0-75.57-90.53a24 24 0 1 0-32.86 0A92.15 92.15 0 0 0 36 144v20.7a12 12 0 0 0-8 11.3v32a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12v-32a12 12 0 0 0-8-11.3M112 36a16 16 0 1 1 16 16a16 16 0 0 1-16-16m16 24a84.09 84.09 0 0 1 84 84v20H44v-20a84.09 84.09 0 0 1 84-84m-4 112v40H76v-40Zm8 0h48v40h-48Zm-96 36v-32a4 4 0 0 1 4-4h28v40H40a4 4 0 0 1-4-4m184 0a4 4 0 0 1-4 4h-28v-40h28a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhBeanieThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBedThinIcon],svg[ph-bed-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76H28V48a4 4 0 0 0-8 0v160a4 4 0 0 0 8 0v-36h216v36a4 4 0 0 0 8 0v-96a36 36 0 0 0-36-36M28 84h80v80H28Zm88 80V84h100a28 28 0 0 1 28 28v52Z"></svg:path>`,
})
export class PhBedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerBottleThinIcon],svg[ph-beer-bottle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242.83 45.17l-32-32a4 4 0 0 0-5.66 5.66l4.74 4.74l-59.58 44.69l-39.11 7.82a4 4 0 0 0-2 1.09l-83.36 83.32a20 20 0 0 0 0 28.28l41.37 41.37a20 20 0 0 0 28.28 0l83.32-83.31a4 4 0 0 0 1.09-2.05l7.82-39.11l44.69-59.58l4.74 4.74a4 4 0 1 0 5.66-5.66m-153 179.31a12 12 0 0 1-17 0l-41.32-41.37a12 12 0 0 1 0-17l8.49-8.45L98.34 216ZM104 210.34L45.66 152L96 101.66L154.34 160Zm76.8-108.74a3.9 3.9 0 0 0-.72 1.62L172.32 142L160 154.34L101.66 96L114 83.68l38.81-7.76a3.9 3.9 0 0 0 1.62-.72l61.22-45.92l11.1 11.1Z"></svg:path>`,
})
export class PhBeerBottleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerSteinThinIcon],svg[ph-beer-stein-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 92h-20V72a36 36 0 0 0-36-36h-12.69C136 25.81 120.34 20 104 20c-33.08 0-60 23.33-60 52v136a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-12h20a20 20 0 0 0 20-20v-64a20 20 0 0 0-20-20M104 28c14.89 0 29.09 5.43 39 14.89a4 4 0 0 0 2.74 1.11H160a28 28 0 0 1 27.71 24H52.22c2.4-22.39 24.7-40 51.78-40m84 180a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V76h136Zm40-32a12 12 0 0 1-12 12h-20v-88h20a12 12 0 0 1 12 12Zm-128-72v80a4 4 0 0 1-8 0v-80a4 4 0 0 1 8 0m48 0v80a4 4 0 0 1-8 0v-80a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhBeerSteinThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBehanceLogoThinIcon],svg[ph-behance-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108.16 122.74A34 34 0 0 0 90 60H32a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4h62a38 38 0 0 0 14.16-73.26M36 68h54a26 26 0 0 1 0 52H36Zm58 120H36v-60h58a30 30 0 0 1 0 60m70-108a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8h-64a4 4 0 0 1-4-4m36 28a44 44 0 1 0 35.2 70.41a4 4 0 0 0-6.4-4.81a36 36 0 0 1-64.58-17.6H240a4 4 0 0 0 4-4a44.05 44.05 0 0 0-44-44m-35.78 40a36 36 0 0 1 71.56 0Z"></svg:path>`,
})
export class PhBehanceLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellRingingThinIcon],svg[ph-bell-ringing-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222.13 67.55a3.94 3.94 0 0 1-1.84.45a4 4 0 0 1-3.55-2.16a99.4 99.4 0 0 0-34.87-38.46a4 4 0 1 1 4.26-6.76a107.34 107.34 0 0 1 37.71 41.54a4 4 0 0 1-1.71 5.39M39.26 65.84a99.4 99.4 0 0 1 34.87-38.46a4 4 0 0 0-4.26-6.76a107.34 107.34 0 0 0-37.71 41.54a4 4 0 0 0 1.71 5.39a3.94 3.94 0 0 0 1.84.45a4 4 0 0 0 3.55-2.16M218.36 178A12 12 0 0 1 208 196h-44.23a36 36 0 0 1-71.54 0H48a12 12 0 0 1-10.36-18C47.17 161.56 52 139.37 52 112a76 76 0 0 1 152 0c0 27.36 4.83 49.55 14.36 66m-62.65 18h-55.42a28 28 0 0 0 55.42 0m55.73-14C201.19 164.34 196 140.79 196 112a68 68 0 0 0-136 0c0 28.8-5.19 52.34-15.44 70a4 4 0 0 0 0 4a3.89 3.89 0 0 0 3.44 2h160a3.89 3.89 0 0 0 3.43-2a4 4 0 0 0 .01-4"></svg:path>`,
})
export class PhBellRingingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleRingingThinIcon],svg[ph-bell-simple-ringing-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 224a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m59.84-161.84a107.34 107.34 0 0 0-37.71-41.54a4 4 0 1 0-4.26 6.76a99.4 99.4 0 0 1 34.87 38.46a4 4 0 0 0 3.55 2.16a3.94 3.94 0 0 0 1.84-.45a4 4 0 0 0 1.71-5.39M39.26 65.84a99.4 99.4 0 0 1 34.87-38.46a4 4 0 0 0-4.26-6.76a107.34 107.34 0 0 0-37.71 41.54a4 4 0 0 0 1.71 5.39a3.94 3.94 0 0 0 1.84.45a4 4 0 0 0 3.55-2.16M218.36 178A12 12 0 0 1 208 196H48a12 12 0 0 1-10.36-18C47.17 161.56 52 139.37 52 112a76 76 0 0 1 152 0c0 27.36 4.83 49.55 14.36 66m-6.92 4C201.19 164.34 196 140.79 196 112a68 68 0 0 0-136 0c0 28.8-5.19 52.34-15.44 70a4 4 0 0 0 0 4a3.89 3.89 0 0 0 3.44 2h160a3.89 3.89 0 0 0 3.43-2a4 4 0 0 0 .01-4"></svg:path>`,
})
export class PhBellSimpleRingingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleSlashThinIcon],svg[ph-bell-simple-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M71.75 60.18L51 37.31a4 4 0 0 0-6 5.38l18.8 20.63A75.5 75.5 0 0 0 52 104c0 36.13-8.58 64-14.36 73.95A12 12 0 0 0 48 196h136.41L205 218.69a4 4 0 1 0 5.92-5.38ZM48 188a3.89 3.89 0 0 1-3.43-2a4 4 0 0 1 0-4C52 169.17 60 139.32 60 104a67.6 67.6 0 0 1 9.4-34.51L177.14 188Zm116 36a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m48.53-48.48a3.9 3.9 0 0 1-1.46.28a4 4 0 0 1-3.72-2.54C200.24 155.17 196 129.28 196 104A68 68 0 0 0 94.46 44.83a4 4 0 1 1-4-6.95A76 76 0 0 1 204 104c0 36.05 8.26 59.89 10.79 66.34a4 4 0 0 1-2.26 5.18"></svg:path>`,
})
export class PhBellSimpleSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleThinIcon],svg[ph-bell-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 224a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m54.38-34a11.84 11.84 0 0 1-10.38 6H48a12 12 0 0 1-10.35-18C43.42 168 52 140.13 52 104a76 76 0 1 1 152 0c0 36.13 8.59 64 14.36 73.95a11.92 11.92 0 0 1 .02 12.05m-6.95-8C204 169.17 196 139.31 196 104a68 68 0 1 0-136 0c0 35.32-8 65.17-15.44 78a4 4 0 0 0 0 4a3.91 3.91 0 0 0 3.44 2h160a3.91 3.91 0 0 0 3.44-2a4 4 0 0 0-.01-4"></svg:path>`,
})
export class PhBellSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleZThinIcon],svg[ph-bell-simple-z-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 224a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-20-84h-24.53l27.86-41.78A4 4 0 0 0 144 92h-32a4 4 0 0 0 0 8h24.53l-27.86 41.78A4 4 0 0 0 112 148h32a4 4 0 0 0 0-8m74.38 50a11.84 11.84 0 0 1-10.38 6H48a12 12 0 0 1-10.35-18C43.42 168 52 140.13 52 104a76 76 0 1 1 152 0c0 36.13 8.59 64 14.36 73.95a11.92 11.92 0 0 1 .02 12.05m-6.95-8C204 169.17 196 139.31 196 104a68 68 0 1 0-136 0c0 35.32-8 65.17-15.44 78a4 4 0 0 0 0 4a3.91 3.91 0 0 0 3.44 2h160a3.91 3.91 0 0 0 3.44-2a4 4 0 0 0-.01-4"></svg:path>`,
})
export class PhBellSimpleZThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSlashThinIcon],svg[ph-bell-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38l18.8 20.63A75.5 75.5 0 0 0 52 104c0 36.13-8.58 64-14.36 73.95A12 12 0 0 0 48 196h44.23a36 36 0 0 0 71.54 0h20.64L205 218.69a4 4 0 1 0 5.92-5.38ZM128 220a28 28 0 0 1-27.71-24h55.42A28 28 0 0 1 128 220m-80-32a3.89 3.89 0 0 1-3.43-2a4 4 0 0 1 0-4C52 169.17 60 139.32 60 104a67.6 67.6 0 0 1 9.4-34.51L177.14 188Zm164.55-12.48a3.9 3.9 0 0 1-1.46.28a4 4 0 0 1-3.72-2.54C200.24 155.17 196 129.28 196 104A68 68 0 0 0 94.46 44.83a4 4 0 1 1-4-6.95A76 76 0 0 1 204 104c0 36.05 8.26 59.89 10.79 66.34a4 4 0 0 1-2.26 5.18Z"></svg:path>`,
})
export class PhBellSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellThinIcon],svg[ph-bell-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.35 178c-5.77-10-14.35-37.87-14.35-74a76 76 0 1 0-152 0c0 36.13-8.59 64-14.36 73.95A12 12 0 0 0 48 196h44.23a36 36 0 0 0 71.54 0H208a12 12 0 0 0 10.35-18M128 220a28 28 0 0 1-27.71-24h55.42A28 28 0 0 1 128 220m83.45-34a3.91 3.91 0 0 1-3.44 2H48a3.91 3.91 0 0 1-3.44-2a4 4 0 0 1 0-4C52 169.17 60 139.32 60 104a68 68 0 1 1 136 0c0 35.31 8 65.17 15.44 78a4 4 0 0 1 .01 4"></svg:path>`,
})
export class PhBellThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellZThinIcon],svg[ph-bell-z-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 144a4 4 0 0 1-4 4h-32a4 4 0 0 1-3.33-6.22L136.53 100H112a4 4 0 0 1 0-8h32a4 4 0 0 1 3.33 6.22L119.47 140H144a4 4 0 0 1 4 4m70.38 46a11.84 11.84 0 0 1-10.38 6h-44.23a36 36 0 0 1-71.54 0H48a12 12 0 0 1-10.35-18C43.42 168 52 140.13 52 104a76 76 0 1 1 152 0c0 36.13 8.59 64 14.36 73.95a11.92 11.92 0 0 1 .02 12.05m-62.67 6h-55.42a28 28 0 0 0 55.42 0m55.72-14C204 169.17 196 139.31 196 104a68 68 0 1 0-136 0c0 35.32-8 65.17-15.44 78a4 4 0 0 0 0 4a3.91 3.91 0 0 0 3.44 2h160a3.91 3.91 0 0 0 3.44-2a4 4 0 0 0-.01-4"></svg:path>`,
})
export class PhBellZThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeltThinIcon],svg[ph-belt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 164h-60V92h60a4 4 0 0 0 0-8h-60.7a12 12 0 0 0-11.3-8h-64a12 12 0 0 0-11.3 8H60v-4a4 4 0 0 0-8 0v4H8a4 4 0 0 0 0 8h44v72H8a4 4 0 0 0 0 8h44v4a4 4 0 0 0 8 0v-4h40.7a12 12 0 0 0 11.3 8h64a12 12 0 0 0 11.3-8H248a4 4 0 0 0 0-8M60 92h40v72H60Zm116 80h-64a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4v36h-36a4 4 0 0 0 0 8h36v36a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhBeltThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBezierCurveThinIcon],svg[ph-bezier-curve-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M217.83 148.07A92.6 92.6 0 0 0 165.53 84H240a4 4 0 0 0 0-8h-84.29a28 28 0 0 0-55.42 0H16a4 4 0 0 0 0 8h74.47a92.6 92.6 0 0 0-52.3 64.07a28 28 0 1 0 8.07.64a84.51 84.51 0 0 1 55-60.36a28 28 0 0 0 53.46 0a84.53 84.53 0 0 1 55 60.36a28 28 0 1 0 8.07-.64ZM60 176a20 20 0 1 1-20-20a20 20 0 0 1 20 20m68-76a20 20 0 1 1 20-20a20 20 0 0 1-20 20m88 96a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhBezierCurveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBicycleThinIcon],svg[ph-bicycle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 116a43.7 43.7 0 0 0-18.62 4.15L159 68h33a12 12 0 0 1 12 12a4 4 0 0 0 8 0a20 20 0 0 0-20-20h-40a4 4 0 0 0-3.46 6l15.16 26H97L79.46 62A4 4 0 0 0 76 60H48a4 4 0 0 0 0 8h25.7l16.19 27.76l-19.32 26.49A44.21 44.21 0 1 0 77 127l17.29-23.7l34.25 58.7a4 4 0 0 0 3.46 2a4.1 4.1 0 0 0 2-.54a4 4 0 0 0 1.44-5.48l-33.83-58h66.74l14.11 24.19A44 44 0 1 0 208 116M84 160a36 36 0 1 1-18.16-31.25l-21.07 28.89a4 4 0 0 0 6.46 4.72l21.07-28.9A35.92 35.92 0 0 1 84 160m124 36a36 36 0 0 1-21.47-64.88l18 30.9a4 4 0 0 0 3.46 2a4.1 4.1 0 0 0 2-.54a4 4 0 0 0 1.44-5.48l-18-30.89A36 36 0 1 1 208 196"></svg:path>`,
})
export class PhBicycleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinaryThinIcon],svg[ph-binary-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M94 28c-10.92 0-19.93 5-26.08 14.31C62.81 50.09 60 60.64 60 72s2.81 21.91 7.92 29.7C74.07 111.05 83.08 116 94 116s19.93-5 26.08-14.3C125.19 93.91 128 83.37 128 72s-2.81-21.91-7.92-29.69C113.93 33 104.92 28 94 28m0 80c-18 0-26-18.08-26-36s8-36 26-36s26 18.08 26 36s-8 36-26 36m98.08 46.31C185.93 145 176.92 140 166 140s-19.93 4.95-26.08 14.31c-5.11 7.78-7.92 18.33-7.92 29.69s2.81 21.91 7.92 29.7c6.15 9.35 15.16 14.3 26.08 14.3s19.93-4.95 26.08-14.3c5.11-7.79 7.92-18.33 7.92-29.7s-2.81-21.91-7.92-29.69M166 220c-18 0-26-18.08-26-36s8-36 26-36s26 18.08 26 36s-8 36-26 36M148.5 47.28a4 4 0 0 1 1.56-5.44l24-13.34A4 4 0 0 1 180 32v80a4 4 0 0 1-8 0V38.8l-18.06 10a4 4 0 0 1-5.44-1.52M100 144v80a4 4 0 0 1-8 0v-73.2l-18.06 10a4 4 0 1 1-3.88-7l24-13.34A4 4 0 0 1 100 144"></svg:path>`,
})
export class PhBinaryThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinocularsThinIcon],svg[ph-binoculars-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.22 148.09L189.6 53.41a3.9 3.9 0 0 0-.83-1.22a28 28 0 0 0-39.6 0A4 4 0 0 0 148 55v29h-40V55a4 4 0 0 0-1.17-2.83a28 28 0 0 0-39.6 0a3.9 3.9 0 0 0-.83 1.22l-41.62 94.7A44 44 0 1 0 108 168V92h40v76a44 44 0 1 0 83.22-19.91M64 204a36 36 0 1 1 36-36a36 36 0 0 1-36 36m0-80a43.8 43.8 0 0 0-22.66 6.3L73.4 57.35a20 20 0 0 1 26.6-.59v86A44 44 0 0 0 64 124m92-67.23a20 20 0 0 1 26.6.59l32.06 72.94A43.92 43.92 0 0 0 156 142.74ZM192 204a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhBinocularsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBiohazardThinIcon],svg[ph-biohazard-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183 108.08a60 60 0 0 0-4.94-9.08a56 56 0 0 0-24.21-74.73a4 4 0 1 0-3.7 7.09a48 48 0 0 1 22.37 60.49a59.91 59.91 0 0 0-89.05 0a48 48 0 0 1 22.38-60.5a4 4 0 0 0-3.7-7.1A56 56 0 0 0 77.93 99a61 61 0 0 0-4.93 9.08A56.07 56.07 0 0 0 20 164a4 4 0 0 0 8 0a48.06 48.06 0 0 1 42.08-47.62a60 60 0 0 0 45.75 74.38a48 48 0 0 1-65.67 13.7a4 4 0 1 0-4.32 6.73a56 56 0 0 0 78.69-19.3c1.15.07 2.3.11 3.47.11s2.32 0 3.47-.11a56 56 0 0 0 78.69 19.3a4 4 0 1 0-4.32-6.73a48 48 0 0 1-65.67-13.7a60 60 0 0 0 45.75-74.38A48.06 48.06 0 0 1 228 164a4 4 0 0 0 8 0a56.07 56.07 0 0 0-53-55.92m-8.75.21c-.79.08-1.56.19-2.34.3c.5-.63 1-1.28 1.46-1.93c.32.54.63 1.08.89 1.63ZM128 80a51.93 51.93 0 0 1 40.57 19.52a48 48 0 0 1-81.15 0A51.94 51.94 0 0 1 128 80m8.07 49.33a56.1 56.1 0 0 0-8.07 13.92a55.9 55.9 0 0 0-8.07-13.91a56.4 56.4 0 0 0 8.06.58a55 55 0 0 0 8.08-.59m-52-20.74c-.77-.11-1.54-.22-2.32-.3q.42-.81.87-1.62c.46.65.94 1.33 1.44 1.92ZM76 132a51.8 51.8 0 0 1 2.51-15.93a48 48 0 0 1 41.39 67.3A52.08 52.08 0 0 1 76 132m60.1 51.37a48 48 0 0 1 41.39-67.3a52 52 0 0 1-41.39 67.3"></svg:path>`,
})
export class PhBiohazardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBirdThinIcon],svg[ph-bird-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 68a8 8 0 1 1-8-8a8 8 0 0 1 8 8m64 12a4 4 0 0 1-1.78 3.33L212 98.14V120a100.11 100.11 0 0 1-100 100H24a12 12 0 0 1-9.37-19.5L100 98.08V76.89c0-31.22 25-56.74 55.72-56.89h.28a55.94 55.94 0 0 1 53.79 40.39l24.43 16.28A4 4 0 0 1 236 80m-11.21 0l-20.68-13.78a4.08 4.08 0 0 1-1.65-2.33A48 48 0 0 0 156 28h-.24C129.43 28.13 108 50.06 108 76.89v22.63a4 4 0 0 1-.93 2.56L20.84 205.56A4 4 0 0 0 24 212h28.79l72.14-86.56a4 4 0 0 1 6.14 5.12L63.21 212H112a92.1 92.1 0 0 0 92-92V96a4 4 0 0 1 1.78-3.33Z"></svg:path>`,
})
export class PhBirdThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBlueprintThinIcon],svg[ph-blueprint-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 60H68V40a4 4 0 0 0-4-4H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h184a4 4 0 0 0 4-4V64a4 4 0 0 0-4-4M28 64a20 20 0 0 1 20-20h12v104H48a27.94 27.94 0 0 0-20 8.42Zm200 132H48a20 20 0 0 1 0-40h16a4 4 0 0 0 4-4V68h160Zm-124-56a4 4 0 0 0 0 8h20v12a4 4 0 0 0 8 0v-12h32v12a4 4 0 0 0 8 0v-12h20a4 4 0 0 0 0-8h-20v-24h20a4 4 0 0 0 0-8h-20V96a4 4 0 0 0-8 0v12h-32V96a4 4 0 0 0-8 0v12h-20a4 4 0 0 0 0 8h20v24Zm28-24h32v24h-32Z"></svg:path>`,
})
export class PhBlueprintThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothConnectedThinIcon],svg[ph-bluetooth-connected-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M194.4 172.8L134.67 128l59.73-44.8a4 4 0 0 0 0-6.4l-64-48A4 4 0 0 0 124 32v88L66.4 76.8a4 4 0 0 0-4.8 6.4l59.73 44.8l-59.73 44.8a4 4 0 0 0 4.8 6.4L124 136v88a4 4 0 0 0 6.4 3.2l64-48a4 4 0 0 0 0-6.4M132 40l53.33 40L132 120Zm0 176v-80l53.33 40Zm-72-80a8 8 0 1 1 8-8a8 8 0 0 1-8 8m152-8a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhBluetoothConnectedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothSlashThinIcon],svg[ph-bluetooth-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m219 213.31l-160-176a4 4 0 0 0-6 5.38l74 81.42h-.14a5 5 0 0 0-.51.18l-.15.06h-.05a4 4 0 0 0-.56.35h-.05l-64 48a4 4 0 0 0 4.8 6.4L124 136v88a4 4 0 0 0 2.21 3.58a4.05 4.05 0 0 0 1.79.42a4 4 0 0 0 2.4-.8l53.74-40.3L213 218.69a4 4 0 1 0 5.92-5.38ZM132 216v-80l18.44 13.83L178.73 181Zm-8-144.37V32a4 4 0 0 1 6.4-3.2l64 48a4 4 0 0 1 0 6.4l-33.53 25.15a4 4 0 0 1-2.4.8a4 4 0 0 1-2.4-7.2l29.26-22L132 40v31.63a4 4 0 0 1-8 0"></svg:path>`,
})
export class PhBluetoothSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothThinIcon],svg[ph-bluetooth-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M194.4 172.8L134.67 128l59.73-44.8a4 4 0 0 0 0-6.4l-64-48A4 4 0 0 0 124 32v88L66.4 76.8a4 4 0 0 0-4.8 6.4l59.73 44.8l-59.73 44.8a4 4 0 0 0 4.8 6.4L124 136v88a4 4 0 0 0 6.4 3.2l64-48a4 4 0 0 0 0-6.4M132 40l53.33 40L132 120Zm0 176v-80l53.33 40Z"></svg:path>`,
})
export class PhBluetoothThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothXThinIcon],svg[ph-bluetooth-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178.4 172.8L118.67 128l27.73-20.8a4 4 0 1 0-4.8-6.4L116 120V40l25.6 19.2a4 4 0 0 0 4.8-6.4l-32-24A4 4 0 0 0 108 32v88L50.4 76.8a4 4 0 0 0-4.8 6.4l59.73 44.8l-59.73 44.8a4 4 0 0 0 4.8 6.4L108 136v88a4 4 0 0 0 2.21 3.58a4.05 4.05 0 0 0 1.79.42a4 4 0 0 0 2.4-.8l64-48a4 4 0 0 0 0-6.4M116 216v-80l53.33 40Zm118.83-114.83a4 4 0 0 1-5.66 5.66L208 85.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L202.34 80l-21.17-21.17a4 4 0 0 1 5.66-5.66L208 74.34l21.17-21.17a4 4 0 1 1 5.66 5.66L213.66 80Z"></svg:path>`,
})
export class PhBluetoothXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoatThinIcon],svg[ph-boat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.79 114.38L204 109.12V56a12 12 0 0 0-12-12h-60V24a4 4 0 0 0-8 0v20H64a12 12 0 0 0-12 12v53.12l-15.8 5.26a12 12 0 0 0-8.2 11.39V152c0 24.46 17.32 46.77 50.09 64.52A233.2 233.2 0 0 0 127 235.88a4 4 0 0 0 1.94 0a233.2 233.2 0 0 0 48.94-19.36C210.68 198.77 228 176.46 228 152v-26.23a12 12 0 0 0-8.21-11.39M60 56a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v50.45l-66.74-22.24a3.9 3.9 0 0 0-2.52 0L60 106.45Zm160 96c0 49.32-82.08 73.16-92 75.86c-9.92-2.7-92-26.54-92-75.86v-26.23a4 4 0 0 1 2.73-3.8L124 93.55V168a4 4 0 0 0 8 0V93.55L217.26 122a4 4 0 0 1 2.74 3.8Z"></svg:path>`,
})
export class PhBoatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBombThinIcon],svg[ph-bomb-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 36a4 4 0 0 0-4 4c0 1.47-.42 36-28 36c-13.94 0-23.08-12.79-32.75-26.33C172.83 35.09 162.06 20 144 20c-14.86 0-25.82 7.79-31.71 22.51A63.7 63.7 0 0 0 108.22 60H88a12 12 0 0 0-12 12v12.08A84 84 0 0 0 112 244h1.51A84 84 0 0 0 148 84.08V72a12 12 0 0 0-12-12h-19.76c.92-9.42 5.45-32 27.76-32c13.94 0 23.08 12.79 32.75 26.33C187.17 68.91 197.94 84 216 84c14.86 0 25.82-7.79 31.71-22.51A64.3 64.3 0 0 0 252 40a4 4 0 0 0-4-4M140 72v14.66a4 4 0 0 0 2.4 3.66a76 76 0 1 1-60.8 0a4 4 0 0 0 2.4-3.66V72a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4m-35.34 132.05A4 4 0 0 1 104 212a5 5 0 0 1-.66-.05a53.46 53.46 0 0 1-43.29-43.29a4 4 0 0 1 7.9-1.32a45.31 45.31 0 0 0 36.71 36.71"></svg:path>`,
})
export class PhBombThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoneThinIcon],svg[ph-bone-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.6 63.46A31.83 31.83 0 0 0 204.1 52h-.1a32 32 0 1 0-59.17 17a4 4 0 0 1-.51 5L74 144.36a4 4 0 0 1-5 .51A32 32 0 1 0 51.9 204h.1a32 32 0 1 0 59.16-17a4 4 0 0 1 .51-5L182 111.64a4 4 0 0 1 5-.51a32 32 0 0 0 41.6-47.67m-6.5 36.34a24 24 0 0 1-30.8 4.55a12 12 0 0 0-14.93 1.65L106 176.37a12 12 0 0 0-1.63 14.93a24 24 0 1 1-44.09 9a4 4 0 0 0-1.12-3.45a4 4 0 0 0-2.83-1.17a4 4 0 0 0-.62.05a24 24 0 1 1 9-44.09A12 12 0 0 0 79.63 150L150 79.63a12 12 0 0 0 1.63-14.93a24 24 0 1 1 44.09-9a4 4 0 0 0 4.57 4.57A24 24 0 0 1 222.1 99.8"></svg:path>`,
})
export class PhBoneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookBookmarkThinIcon],svg[ph-book-bookmark-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H72a28 28 0 0 0-28 28v168a4 4 0 0 0 4 4h144a4 4 0 0 0 0-8H52v-4a20 20 0 0 1 20-20h136a4 4 0 0 0 4-4V32a4 4 0 0 0-4-4m-92 8h56v84l-25.61-19.2a4 4 0 0 0-4.8 0L116 120Zm88 152H72a27.94 27.94 0 0 0-20 8.42V56a20 20 0 0 1 20-20h36v92a4 4 0 0 0 6.4 3.2L144 109l29.61 22.2a4 4 0 0 0 2.4.8a4 4 0 0 0 4-4V36h24Z"></svg:path>`,
})
export class PhBookBookmarkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenTextThinIcon],svg[ph-book-open-text-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 52h-72a36 36 0 0 0-32 19.54A36 36 0 0 0 96 52H24a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h72a28 28 0 0 1 28 28a4 4 0 0 0 8 0a28 28 0 0 1 28-28h72a4 4 0 0 0 4-4V56a4 4 0 0 0-4-4M96 196H28V60h68a28 28 0 0 1 28 28v121.4A35.94 35.94 0 0 0 96 196m132 0h-68a35.94 35.94 0 0 0-28 13.41V88a28 28 0 0 1 28-28h68ZM160 92h40a4 4 0 0 1 0 8h-40a4 4 0 0 1 0-8m44 36a4 4 0 0 1-4 4h-40a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4h-40a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhBookOpenTextThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenThinIcon],svg[ph-book-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 52h-72a36 36 0 0 0-32 19.54A36 36 0 0 0 96 52H24a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h72a28 28 0 0 1 28 28a4 4 0 0 0 8 0a28 28 0 0 1 28-28h72a4 4 0 0 0 4-4V56a4 4 0 0 0-4-4M96 196H28V60h68a28 28 0 0 1 28 28v121.4A35.93 35.93 0 0 0 96 196m132 0h-68a35.94 35.94 0 0 0-28 13.41V88a28 28 0 0 1 28-28h68Z"></svg:path>`,
})
export class PhBookOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenUserThinIcon],svg[ph-book-open-user-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 76h-72a36 36 0 0 0-32 19.54A36 36 0 0 0 96 76H24a4 4 0 0 0-4 4v120a4 4 0 0 0 4 4h72a28 28 0 0 1 28 28a4 4 0 0 0 8 0a28 28 0 0 1 28-28h72a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4M96 196H28V84h68a28 28 0 0 1 28 28v97.4A35.93 35.93 0 0 0 96 196m132 0h-68a35.94 35.94 0 0 0-28 13.41V112a28 28 0 0 1 28-28h68ZM92.8 45.6a44 44 0 0 1 70.4 0a4 4 0 0 1-6.4 4.8a36 36 0 0 0-57.6 0a4 4 0 1 1-6.4-4.8"></svg:path>`,
})
export class PhBookOpenUserThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookThinIcon],svg[ph-book-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H72a28 28 0 0 0-28 28v168a4 4 0 0 0 4 4h144a4 4 0 0 0 0-8H52v-4a20 20 0 0 1 20-20h136a4 4 0 0 0 4-4V32a4 4 0 0 0-4-4m-4 160H72a27.94 27.94 0 0 0-20 8.42V56a20 20 0 0 1 20-20h132Z"></svg:path>`,
})
export class PhBookThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkSimpleThinIcon],svg[ph-bookmark-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 36H72a12 12 0 0 0-12 12v176a4 4 0 0 0 6.12 3.39L128 188.72l61.89 38.67a4 4 0 0 0 2.11.61a4.06 4.06 0 0 0 1.94-.5A4 4 0 0 0 196 224V48a12 12 0 0 0-12-12m4 180.78l-57.89-36.17a4 4 0 0 0-4.24 0L68 216.78V48a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhBookmarkSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkThinIcon],svg[ph-bookmark-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 36H72a12 12 0 0 0-12 12v176a4 4 0 0 0 6.12 3.39L128 188.72l61.89 38.67a4 4 0 0 0 2.11.61a4.06 4.06 0 0 0 1.94-.5A4 4 0 0 0 196 224V48a12 12 0 0 0-12-12M72 44h112a4 4 0 0 1 4 4v120.78l-57.89-36.17a4 4 0 0 0-4.24 0L68 168.78V48a4 4 0 0 1 4-4m58.11 136.61a4 4 0 0 0-4.24 0L68 216.78v-38.56l60-37.5l60 37.5v38.56Z"></svg:path>`,
})
export class PhBookmarkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksSimpleThinIcon],svg[ph-bookmarks-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 60H64a12 12 0 0 0-12 12v152a4 4 0 0 0 6.33 3.25L112 188.92l53.69 38.33a3.94 3.94 0 0 0 2.31.75a4.1 4.1 0 0 0 1.83-.44A4 4 0 0 0 172 224V72a12 12 0 0 0-12-12m4 156.23l-49.68-35.49a4 4 0 0 0-4.65 0L60 216.23V72a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4ZM204 40v152a4 4 0 0 1-8 0V40a4 4 0 0 0-4-4H88a4 4 0 0 1 0-8h104a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhBookmarksSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksThinIcon],svg[ph-bookmarks-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H96a12 12 0 0 0-12 12v20H64a12 12 0 0 0-12 12v152a4 4 0 0 0 6.33 3.25L112 188.92l53.69 38.33a3.94 3.94 0 0 0 2.31.75a4.1 4.1 0 0 0 1.83-.44A4 4 0 0 0 172 224v-47.08l25.68 18.33a3.94 3.94 0 0 0 2.32.75a4.1 4.1 0 0 0 1.83-.44A4 4 0 0 0 204 192V40a12 12 0 0 0-12-12m-28 188.23l-49.68-35.48a4 4 0 0 0-4.65 0L60 216.23V72a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4Zm32-32l-24-17.14V72a12 12 0 0 0-12-12H92V40a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhBookmarksThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBooksThinIcon],svg[ph-books-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 36H56a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M52 76h56v104H52Zm4-32h48a4 4 0 0 1 4 4v20H52V48a4 4 0 0 1 4-4m48 168H56a4 4 0 0 1-4-4v-20h56v20a4 4 0 0 1-4 4m123.74-16.62L194.55 37.57a12 12 0 0 0-14.25-9.3l-46.81 10.05a12.1 12.1 0 0 0-9.23 14.3l33.19 157.81a12 12 0 0 0 14.25 9.3l46.81-10.06a12.08 12.08 0 0 0 9.23-14.29m-83.21-85.27l54.63-11.73l15 71.07l-54.63 11.74Zm-6.64-31.56l54.64-11.74l5 23.74l-54.64 11.73Zm-2.71-32.4L182 36.09a4 4 0 0 1 .84-.09a3.94 3.94 0 0 1 2.14.64a4 4 0 0 1 1.76 2.58L190.88 59l-54.64 11.72L132.09 51a4.07 4.07 0 0 1 3.09-4.85m81.65 155.7L170 211.91a4 4 0 0 1-3-.55a4 4 0 0 1-1.76-2.58L161.12 189l54.64-11.73l4.15 19.73a4.07 4.07 0 0 1-3.08 4.85"></svg:path>`,
})
export class PhBooksThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBootThinIcon],svg[ph-boot-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 116h-36V56a12 12 0 0 0-12-12H32a4 4 0 0 0-3.73 5.43c9.29 24.23 11.46 77.22-.11 117.46A3.8 3.8 0 0 0 28 168v32a12 12 0 0 0 12 12h26.11a12.1 12.1 0 0 0 5.37-1.27l12.62-6.31a4.1 4.1 0 0 1 1.79-.42h16.22a4.1 4.1 0 0 1 1.79.42l12.62 6.31a12.1 12.1 0 0 0 5.37 1.27h28.22a12.1 12.1 0 0 0 5.37-1.27l12.62-6.31a4.1 4.1 0 0 1 1.79-.42h16.22a4.1 4.1 0 0 1 1.79.42l12.62 6.31a12.1 12.1 0 0 0 5.37 1.27H232a12 12 0 0 0 12-12v-32a52.06 52.06 0 0 0-52-52M37.6 52H144a4 4 0 0 1 4 4v28h-36a4 4 0 0 0 0 8h36v24h-36a4 4 0 0 0 0 8h80a44.06 44.06 0 0 1 43.81 40H37.2c8.04-32.19 9.8-81.35.4-112M236 200a4 4 0 0 1-4 4h-26.11a4.1 4.1 0 0 1-1.79-.42l-12.62-6.31a12.1 12.1 0 0 0-5.37-1.27h-16.22a12.1 12.1 0 0 0-5.37 1.27l-12.62 6.31a4.1 4.1 0 0 1-1.79.42h-28.22a4.1 4.1 0 0 1-1.79-.42l-12.62-6.31a12.1 12.1 0 0 0-5.37-1.27H85.89a12.1 12.1 0 0 0-5.37 1.27l-12.62 6.31a4.1 4.1 0 0 1-1.79.42H40a4 4 0 0 1-4-4v-28h200Z"></svg:path>`,
})
export class PhBootThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoulesThinIcon],svg[ph-boules-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m62.13 32.21L60.21 190.13a92 92 0 0 1-14.88-21.8l123-123a92 92 0 0 1 21.8 14.88m5.66 5.66a92.2 92.2 0 0 1 14.88 21.8l-123 123a92.2 92.2 0 0 1-21.8-14.88ZM128 36a91.4 91.4 0 0 1 32.43 5.91L41.91 160.43A92 92 0 0 1 128 36m0 184a91.4 91.4 0 0 1-32.43-5.91L214.09 95.57A92 92 0 0 1 128 220"></svg:path>`,
})
export class PhBoulesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoundingBoxThinIcon],svg[ph-bounding-box-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 92a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v12H92V48a12 12 0 0 0-12-12H48a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h12v72H48a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-12h72v12a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12h-12V92Zm-36-44a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4ZM44 80V48a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4m40 128a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4Zm128-32v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4m-24-12h-12a12 12 0 0 0-12 12v12H92v-12a12 12 0 0 0-12-12H68V92h12a12 12 0 0 0 12-12V68h72v12a12 12 0 0 0 12 12h12Z"></svg:path>`,
})
export class PhBoundingBoxThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlFoodThinIcon],svg[ph-bowl-food-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 108h-12.1a84 84 0 0 0-167.8 0H32a4 4 0 0 0-4 4a100.32 100.32 0 0 0 56 89.82V208a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-6.18A100.32 100.32 0 0 0 228 112a4 4 0 0 0-4-4m-20.11 0h-62.84a75.92 75.92 0 0 1 50.16-38.14A75.45 75.45 0 0 1 203.89 108M186 62.93A83.92 83.92 0 0 0 132.08 108h-37.4A76.22 76.22 0 0 1 168 52c2.33 0 4.68.13 7 .34a77 77 0 0 1 11 10.59M128 36a75.5 75.5 0 0 1 34.3 8.21A84.26 84.26 0 0 0 86.41 108h-34.3A76.09 76.09 0 0 1 128 36m38.33 159.66a4 4 0 0 0-2.33 3.64v8.7a4 4 0 0 1-4 4H96a4 4 0 0 1-4-4v-8.7a4 4 0 0 0-2.33-3.64A92.33 92.33 0 0 1 36.09 116h183.82a92.33 92.33 0 0 1-53.58 79.66"></svg:path>`,
})
export class PhBowlFoodThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlSteamThinIcon],svg[ph-bowl-steam-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 116H32a4 4 0 0 0-4 4a100.32 100.32 0 0 0 56 89.82V216a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-6.18A100.32 100.32 0 0 0 228 120a4 4 0 0 0-4-4m-57.67 87.66a4 4 0 0 0-2.33 3.64v8.7a4 4 0 0 1-4 4H96a4 4 0 0 1-4-4v-8.7a4 4 0 0 0-2.33-3.64A92.31 92.31 0 0 1 36.09 124h183.82a92.31 92.31 0 0 1-53.58 79.66M164.88 57.5c5.56-6.92 8-12.89 6.83-16.81c-1-3.54-4.9-4.87-4.94-4.88a4 4 0 0 1 2.42-7.63c.32.1 7.84 2.52 10.16 10.11c2.05 6.72-.72 14.87-8.23 24.22c-5.56 6.91-8 12.88-6.83 16.8c1 3.54 4.9 4.87 4.94 4.88A4 4 0 0 1 168 92a4.1 4.1 0 0 1-1.19-.18c-.32-.1-7.84-2.52-10.16-10.11c-2.05-6.71.72-14.87 8.23-24.21m-40 0c5.56-6.92 8-12.89 6.83-16.81c-1-3.54-4.9-4.87-4.94-4.88a4 4 0 0 1 2.42-7.63c.32.1 7.84 2.52 10.16 10.11c2.05 6.72-.72 14.87-8.23 24.22c-5.56 6.91-8 12.88-6.83 16.8c1 3.54 4.9 4.87 4.94 4.88A4 4 0 0 1 128 92a4.1 4.1 0 0 1-1.19-.18c-.32-.1-7.84-2.52-10.16-10.11c-2.05-6.71.72-14.87 8.23-24.21m-40 0c5.56-6.92 8-12.89 6.83-16.81c-1-3.54-4.9-4.87-4.94-4.88a4 4 0 0 1 2.42-7.63c.32.1 7.84 2.52 10.16 10.11c2.05 6.72-.72 14.87-8.23 24.22c-5.56 6.91-8 12.88-6.83 16.8c1 3.54 4.9 4.87 4.94 4.88A4 4 0 0 1 88 92a4.1 4.1 0 0 1-1.19-.18c-.32-.1-7.84-2.52-10.16-10.11c-2.05-6.71.72-14.87 8.23-24.21"></svg:path>`,
})
export class PhBowlSteamThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlingBallThinIcon],svg[ph-bowling-ball-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m12-104a8 8 0 1 1-8-8a8 8 0 0 1 8 8m24-16a8 8 0 1 1 8-8a8 8 0 0 1-8 8m16 32a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhBowlingBallThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowDownThinIcon],svg[ph-box-arrow-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m219.58 70.21l-16-32A4 4 0 0 0 200 36H56a4 4 0 0 0-3.58 2.21l-16 32A4 4 0 0 0 36 72v136a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V72a4 4 0 0 0-.42-1.79M58.47 44h139.06l12 24H46.47ZM208 212H48a4 4 0 0 1-4-4V76h168v132a4 4 0 0 1-4 4m-45.17-62.83a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L124 174.34V104a4 4 0 0 1 8 0v70.34l25.17-25.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhBoxArrowDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowUpThinIcon],svg[ph-box-arrow-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m219.58 70.21l-16-32A4 4 0 0 0 200 36H56a4 4 0 0 0-3.58 2.21l-16 32A4 4 0 0 0 36 72v136a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V72a4 4 0 0 0-.42-1.79M58.47 44h139.06l12 24H46.47ZM208 212H48a4 4 0 0 1-4-4V76h168v132a4 4 0 0 1-4 4m-45.17-78.83a4 4 0 0 1-5.66 5.66L132 113.66V184a4 4 0 0 1-8 0v-70.34l-25.17 25.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0Z"></svg:path>`,
})
export class PhBoxArrowUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxingGloveThinIcon],svg[ph-boxing-glove-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 20h-48a52.06 52.06 0 0 0-52 52v4H56a28 28 0 0 0-28 28v29.19a12 12 0 0 0 2.63 7.5c.1.12.2.24.31.35L68 177.67V216a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-39.44l15.54-54.38a12.3 12.3 0 0 0 .46-3.3V72a52.06 52.06 0 0 0-52-52m44 98.88a4 4 0 0 1-.15 1.1l-15.7 54.92a4 4 0 0 0-.15 1.1v40a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4v-40a4 4 0 0 0-1.19-2.84l-38.05-37.62a4 4 0 0 1-.76-2.35V104a20 20 0 0 1 20-20h12v20a4 4 0 0 0 8 0V72a44.05 44.05 0 0 1 44-44h48a44.05 44.05 0 0 1 44 44Zm-42.21 44.7L145 176l24.84 12.42a4 4 0 0 1-3.58 7.16L136 180.47l-30.21 15.11a4 4 0 1 1-3.58-7.16L127.05 176l-24.84-12.42a4 4 0 1 1 3.58-7.16L136 171.53l30.21-15.11a4 4 0 0 1 3.58 7.16"></svg:path>`,
})
export class PhBoxingGloveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsAngleThinIcon],svg[ph-brackets-angle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M83.37 42.15L28.74 128l54.63 85.85a4 4 0 0 1-1.22 5.52A4 4 0 0 1 80 220a4 4 0 0 1-3.37-1.85l-56-88a4 4 0 0 1 0-4.3l56-88a4 4 0 1 1 6.74 4.3m152 83.7l-56-88a4 4 0 1 0-6.74 4.3L227.26 128l-54.63 85.85a4 4 0 0 0 1.22 5.52a4 4 0 0 0 2.15.63a4 4 0 0 0 3.37-1.85l56-88a4 4 0 0 0 0-4.3"></svg:path>`,
})
export class PhBracketsAngleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsCurlyThinIcon],svg[ph-brackets-curly-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.89 128C52 136.23 52 155.64 52 172c0 24.8 1.35 40 28 40a4 4 0 0 1 0 8c-36 0-36-26.61-36-48c0-24.8-1.35-40-28-40a4 4 0 0 1 0-8c26.65 0 28-15.2 28-40c0-21.39 0-48 36-48a4 4 0 0 1 0 8c-26.65 0-28 15.2-28 40c0 16.36 0 35.77-16.11 44M240 124c-26.65 0-28-15.2-28-40c0-21.39 0-48-36-48a4 4 0 0 0 0 8c26.65 0 28 15.2 28 40c0 16.36 0 35.77 16.11 44C204 136.23 204 155.64 204 172c0 24.8-1.35 40-28 40a4 4 0 0 0 0 8c36 0 36-26.61 36-48c0-24.8 1.35-40 28-40a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhBracketsCurlyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsRoundThinIcon],svg[ph-brackets-round-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M55 62.67C46.34 74.93 36 96.22 36 128s10.34 53.07 19 65.33c9.41 13.3 19 19.19 19.06 19.24A4 4 0 0 1 72 220a4 4 0 0 1-2-.57c-1.77-1.03-42-25.92-42-91.43s40.23-90.4 41.94-91.43a4 4 0 0 1 4.13 6.86c-.07.05-9.65 5.94-19.07 19.24m131.05-26.1a4 4 0 0 0-4.13 6.86c.1 0 9.65 5.94 19.06 19.24c8.67 12.26 19 33.55 19 65.33s-10.34 53.07-19 65.33c-9.41 13.3-19 19.19-19.05 19.24a4 4 0 0 0 4.12 6.86c1.71-1 41.94-25.92 41.94-91.43s-40.22-90.4-41.93-91.43Z"></svg:path>`,
})
export class PhBracketsRoundThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsSquareThinIcon],svg[ph-brackets-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 44v168h36a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h40a4 4 0 0 1 0 8Zm172-8h-40a4 4 0 0 0 0 8h36v168h-36a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhBracketsSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrainThinIcon],svg[ph-brain-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 124a52.1 52.1 0 0 0-32-48v-4a44 44 0 0 0-84-18.3A44 44 0 0 0 44 72v4a52 52 0 0 0 0 96v4a44 44 0 0 0 84 18.3a44 44 0 0 0 84-18.3v-4a52.07 52.07 0 0 0 32-48M88 212a36 36 0 0 1-36-36v-1.41A52 52 0 0 0 64 176h8a4 4 0 0 0 0-8h-8a44 44 0 0 1-14.67-85.5A4 4 0 0 0 52 78.73V72a36 36 0 0 1 72 0v78.75A44 44 0 0 0 88 132a4 4 0 0 0 0 8a36 36 0 0 1 0 72m104-44h-8a4 4 0 0 0 0 8h8a52 52 0 0 0 12-1.41V176a36 36 0 1 1-36-36a4 4 0 0 0 0-8a44 44 0 0 0-36 18.75V72a36 36 0 0 1 72 0v6.73a4 4 0 0 0 2.67 3.77A44 44 0 0 1 192 168m12-56a4 4 0 0 1-4 4h-4a32 32 0 0 1-32-32v-4a4 4 0 0 1 8 0v4a24 24 0 0 0 24 24h4a4 4 0 0 1 4 4M92 84a32 32 0 0 1-32 32h-4a4 4 0 0 1 0-8h4a24 24 0 0 0 24-24v-4a4 4 0 0 1 8 0Z"></svg:path>`,
})
export class PhBrainThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrandyThinIcon],svg[ph-brandy-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 88a91.67 91.67 0 0 0-14.88-50.18a4 4 0 0 0-3.35-1.82H54.23a4 4 0 0 0-3.35 1.82A91.67 91.67 0 0 0 36 88a92.11 92.11 0 0 0 88 91.91V220H88a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8h-36v-40.09A92.11 92.11 0 0 0 220 88M56.43 44h143.14a83.5 83.5 0 0 1 12.32 40H44.11a83.5 83.5 0 0 1 12.32-40M128 172a84.1 84.1 0 0 1-83.9-80h167.8a84.1 84.1 0 0 1-83.9 80"></svg:path>`,
})
export class PhBrandyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBreadThinIcon],svg[ph-bread-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 80a36 36 0 0 0-36-36H48a36 36 0 0 0-12 69.94V200a12 12 0 0 0 12 12h152a12 12 0 0 0 12-12v-86.06A36.07 36.07 0 0 0 236 80M44 200v-84.23a35 35 0 0 0 4 .23a4 4 0 0 0 0-8a28 28 0 0 1 0-56h96a28 28 0 0 1 0 56a4 4 0 0 0 0 8a35 35 0 0 0 4-.23V200a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4m156-92a4 4 0 0 0 0 8a35 35 0 0 0 4-.23V200a4 4 0 0 1-4 4h-44.7a11.8 11.8 0 0 0 .7-4v-86.06A36 36 0 0 0 166.59 52H200a28 28 0 0 1 0 56"></svg:path>`,
})
export class PhBreadThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBridgeThinIcon],svg[ph-bridge-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 164h-36V88.09a67.8 67.8 0 0 0 34.5 31a4 4 0 1 0 3-7.42A59.77 59.77 0 0 1 196 56a4 4 0 0 0-8 0a60 60 0 0 1-120 0a4 4 0 0 0-8 0a59.77 59.77 0 0 1-37.5 55.64a4 4 0 0 0 3 7.42a67.8 67.8 0 0 0 34.5-31V164H24a4 4 0 0 0 0 8h36v28a4 4 0 0 0 8 0v-28h120v28a4 4 0 0 0 8 0v-28h36a4 4 0 0 0 0-8m-84-43v43h-40v-43a68 68 0 0 0 40 0M68 88a68.43 68.43 0 0 0 32 30v46H68Zm88 76v-46a68.43 68.43 0 0 0 32-30v76Z"></svg:path>`,
})
export class PhBridgeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseMetalThinIcon],svg[ph-briefcase-metal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 60h-44V48a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12M36 108h184v56H36Zm56-60a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92ZM40 68h176a4 4 0 0 1 4 4v28H36V72a4 4 0 0 1 4-4m176 136H40a4 4 0 0 1-4-4v-28h184v28a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhBriefcaseMetalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseSimpleThinIcon],svg[ph-briefcase-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M216.008 68H172V56a20.022 20.022 0 0 0-20-20h-48a20.022 20.022 0 0 0-20 20v12H40.008a12.013 12.013 0 0 0-12 12v128a12.013 12.013 0 0 0 12 12h176a12.013 12.013 0 0 0 12-12V80a12.013 12.013 0 0 0-12-12zM92 56a12.013 12.013 0 0 1 12-12h48a12.013 12.013 0 0 1 12 12v12H92zm128.008 152a4.004 4.004 0 0 1-4 4h-176a4.004 4.004 0 0 1-4-4V80a4.004 4.004 0 0 1 4-4h176a4.004 4.004 0 0 1 4 4z" fill="currentColor"></svg:path>`,
})
export class PhBriefcaseSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseThinIcon],svg[ph-briefcase-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 112a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-32a4 4 0 0 1-4-4m120-40v128a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V72a12 12 0 0 1 12-12h44V48a20 20 0 0 1 20-20h48a20 20 0 0 1 20 20v12h44a12 12 0 0 1 12 12M92 60h72V48a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12ZM36 72v44a188 188 0 0 0 92 24a188 188 0 0 0 92-24V72a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4m184 128v-74.9a196.06 196.06 0 0 1-92 22.9a196 196 0 0 1-92-22.9V200a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4"></svg:path>`,
})
export class PhBriefcaseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroadcastThinIcon],svg[ph-broadcast-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 92a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m76-28a75.74 75.74 0 0 1-19.35 50.67a4 4 0 0 1-6-5.34a67.92 67.92 0 0 0 0-90.66a4 4 0 0 1 6-5.34A75.74 75.74 0 0 1 204 128M65.34 101.53a67.92 67.92 0 0 0 12 71.8a4 4 0 0 1-6 5.34a75.93 75.93 0 0 1 0-101.34a4 4 0 1 1 6 5.34a68 68 0 0 0-12 18.86M244 128a115.68 115.68 0 0 1-33.14 81.18a4 4 0 0 1-5.72-5.6a107.89 107.89 0 0 0 0-151.16a4 4 0 0 1 5.72-5.6A115.68 115.68 0 0 1 244 128M50.86 203.58a4 4 0 0 1-5.72 5.6a115.91 115.91 0 0 1 0-162.36a4 4 0 1 1 5.72 5.6a107.89 107.89 0 0 0 0 151.16"></svg:path>`,
})
export class PhBroadcastThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroomThinIcon],svg[ph-broom-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233.75 220.4C209.76 208.75 196 183.82 196 152v-17.28a12 12 0 0 0-7.56-11.15l-24.89-9.83a12 12 0 0 1-6.71-15.55l21.33-53a23.88 23.88 0 0 0-31.93-31a24.72 24.72 0 0 0-12.62 13.11l-21 53.1A12 12 0 0 1 97 87.13L71.63 76.84a12 12 0 0 0-13 2.73C38.3 100.45 28 124.82 28 152a107.5 107.5 0 0 0 30.07 74.77A4 4 0 0 0 61 228h171a4 4 0 0 0 1.75-7.6M64.34 85.15a3.94 3.94 0 0 1 4.3-.89L94 94.55a20 20 0 0 0 26-11.2l21-53c3.39-8.16 12.61-12.35 20.58-9.35a16 16 0 0 1 9.19 21.16l-21.36 53.06a20 20 0 0 0 11.18 26l24.9 9.83a4 4 0 0 1 2.51 3.72V152c0 2.36.08 4.69.22 7l-138.5-55.4a111 111 0 0 1 14.62-18.45M113.56 220a91.35 91.35 0 0 1-26.66-45a4 4 0 0 0-7.75 2a100.2 100.2 0 0 0 23.09 43H62.68A99.5 99.5 0 0 1 36 152a89.4 89.4 0 0 1 9.73-41.4l143.4 57.4c3.22 22 13.23 40.09 28.8 52Z"></svg:path>`,
})
export class PhBroomThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowserThinIcon],svg[ph-browser-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M40 52h176a4 4 0 0 1 4 4v36H36V56a4 4 0 0 1 4-4m176 152H40a4 4 0 0 1-4-4V100h184v100a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhBrowserThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowsersThinIcon],svg[ph-browsers-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H72a12 12 0 0 0-12 12v20H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-20h20a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M40 84h144a4 4 0 0 1 4 4v20H36V88a4 4 0 0 1 4-4m148 116a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-84h152Zm32-32a4 4 0 0 1-4 4h-20V88a12 12 0 0 0-12-12H68V56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhBrowsersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugBeetleThinIcon],svg[ph-bug-beetle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 148h20a4 4 0 0 0 0-8h-20v-24h20a4 4 0 0 0 0-8h-20.11a75.8 75.8 0 0 0-23.37-50.86l22.31-22.31a4 4 0 1 0-5.66-5.66L174.44 51.9a75.77 75.77 0 0 0-92.88 0L58.83 29.17a4 4 0 0 0-5.66 5.66l22.31 22.31A75.8 75.8 0 0 0 52.11 108H32a4 4 0 0 0 0 8h20v24H32a4 4 0 0 0 0 8h20v12a75.4 75.4 0 0 0 1 12H32a4 4 0 0 0 0 8h22.69a76 76 0 0 0 146.62 0H224a4 4 0 0 0 0-8h-21a75.4 75.4 0 0 0 1-12ZM128 44a68.08 68.08 0 0 1 67.87 64H60.13A68.08 68.08 0 0 1 128 44m4 183.87V144a4 4 0 0 0-8 0v83.87A68.08 68.08 0 0 1 60 160v-44h136v44a68.08 68.08 0 0 1-64 67.87"></svg:path>`,
})
export class PhBugBeetleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugDroidThinIcon],svg[ph-bug-droid-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m186.17 51.49l16.66-16.66a4 4 0 1 0-5.66-5.66l-17 17a83.72 83.72 0 0 0-104.26 0l-17-17a4 4 0 0 0-5.66 5.66l16.58 16.66A83.75 83.75 0 0 0 44 112v40a84 84 0 0 0 168 0v-40a83.75 83.75 0 0 0-25.83-60.51M128 36a76.08 76.08 0 0 1 76 76v12H52v-12a76.08 76.08 0 0 1 76-76m0 192a76.08 76.08 0 0 1-76-76v-20h152v20a76.08 76.08 0 0 1-76 76m20-136a8 8 0 1 1 8 8a8 8 0 0 1-8-8m-56 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhBugDroidThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugThinIcon],svg[ph-bug-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 92a8 8 0 1 1 8 8a8 8 0 0 1-8-8m-48-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m144 44a4 4 0 0 1-4 4h-28v12a83.6 83.6 0 0 1-3.87 25.2l25.47 11.13A4 4 0 0 1 232 188a4.1 4.1 0 0 1-1.6-.33l-25-10.95a84 84 0 0 1-154.72 0l-25 10.95A4.1 4.1 0 0 1 24 188a4 4 0 0 1-1.6-7.67l25.47-11.13A83.6 83.6 0 0 1 44 144v-12H16a4 4 0 0 1 0-8h28v-12a83.6 83.6 0 0 1 3.87-25.2L22.4 75.67a4 4 0 0 1 3.2-7.34l25 11a84 84 0 0 1 154.72 0l25-11a4 4 0 1 1 3.2 7.34L208.13 86.8A83.6 83.6 0 0 1 212 112v12h28a4 4 0 0 1 4 4m-192-4h152v-12a76 76 0 0 0-152 0Zm72 95.89V132H52v12a76.09 76.09 0 0 0 72 75.89M204 132h-72v87.89A76.09 76.09 0 0 0 204 144Z"></svg:path>`,
})
export class PhBugThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingApartmentThinIcon],svg[ph-building-apartment-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 212h-12V72a4 4 0 0 0-4-4h-44V40a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v60H32a4 4 0 0 0-4 4v108H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M36 108h44a4 4 0 0 0 4-4V44h88v28a4 4 0 0 0 4 4h44v136h-72v-44a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4v44H36Zm104 104h-24v-40h24ZM116 72a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m0 32a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m56 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m-88 32a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4m32-32a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m56 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m0 32a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhBuildingApartmentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingOfficeThinIcon],svg[ph-building-office-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 212h-20V92h4a4 4 0 0 0 0-8h-52V44h4a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8h4v168H24a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M220 92v120h-40V92ZM52 44h120v168h-32v-52a4 4 0 0 0-4-4H88a4 4 0 0 0-4 4v52H52Zm80 168H92v-48h40ZM76 80a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H80a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m-44 44a4 4 0 0 1 0-8h16a4 4 0 0 1 0 8Zm44-4a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhBuildingOfficeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingThinIcon],svg[ph-building-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 228h-28V28h12a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8h12v200H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8M60 28h136v200h-40v-44a4 4 0 0 0-4-4h-48a4 4 0 0 0-4 4v44H60Zm88 200h-40v-40h40ZM92 64a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m-48 40a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m-44 44a4 4 0 0 1 0-8h16a4 4 0 0 1 0 8Zm44-4a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhBuildingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingsThinIcon],svg[ph-buildings-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 212h-20V96a12 12 0 0 0-12-12h-68V32a12 12 0 0 0-18.66-10l-80 53.33a12 12 0 0 0-5.34 10V212H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M208 92a4 4 0 0 1 4 4v116h-72V92ZM44 85.34A4 4 0 0 1 45.78 82l80-53.33A4 4 0 0 1 132 32v180H44ZM108 112v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0m-32 0v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0m0 56v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0m32 0v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhBuildingsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBulldozerThinIcon],svg[ph-bulldozer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 204h-8a12 12 0 0 1-12-12v-32a12 12 0 0 1 12-12h8a4 4 0 0 0 0-8h-8a20 20 0 0 0-20 20v12h-24.23a36.06 36.06 0 0 0-33.06-31.89l-37-88.73A12 12 0 0 0 114.67 44H24a12 12 0 0 0-12 12v97.41A36 36 0 0 0 40 212h120a36 36 0 0 0 35.77-32H220v12a20 20 0 0 0 20 20h8a4 4 0 0 0 0-8M118.36 54.46L154 140H60V52h54.67a4 4 0 0 1 3.69 2.46M24 52h28v88H40a35.76 35.76 0 0 0-20 6.08V56a4 4 0 0 1 4-4m136 152H40a28 28 0 0 1 0-56h120a28 28 0 0 1 0 56m4-28a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h120a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhBulldozerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBusThinIcon],svg[ph-bus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 36H72a28 28 0 0 0-28 28v144a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-20h72v20a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12V64a28 28 0 0 0-28-28M52 180v-64h152v64Zm152-72H52V76h152ZM84 208a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-20h32Zm116 4h-24a4 4 0 0 1-4-4v-20h32v20a4 4 0 0 1-4 4m4-144H52v-4a20 20 0 0 1 20-20h112a20 20 0 0 1 20 20Zm-104 80a8 8 0 1 1-8-8a8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m72-68v24a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0M20 80v24a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhBusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phButterflyThinIcon],svg[ph-butterfly-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.5 52.94C224.89 47 218 44 208.93 44c-25.86 0-61.28 28.73-76.93 57.28V56a4 4 0 0 0-8 0v45.28C108.35 72.73 72.93 44 47.07 44c-9 0-16 3-20.57 8.94c-11.1 14.26-6 42.25.5 67.75c3.67 14.42 10.55 24.64 20.48 30.38a36.8 36.8 0 0 0 12.75 4.45A40 40 0 1 0 128 197.43a40 40 0 1 0 67.77-41.9a36.8 36.8 0 0 0 12.75-4.46c9.93-5.74 16.81-16 20.48-30.38c6.47-25.5 11.6-53.49.5-67.75M92 212a32.12 32.12 0 0 1-3.56-64a4 4 0 0 0-.88-8a39.64 39.64 0 0 0-19.78 8c-22.8 1.24-30.68-20-33-29.24c-5.65-22.24-11-49.26-1.95-60.87C35.87 53.91 40.54 52 47.07 52C76.55 52 124 98.68 124 127.67V180a32 32 0 0 1-32 32m129.24-93.28c-2.34 9.22-10.22 30.47-33 29.24a39.7 39.7 0 0 0-19.8-7.96a4 4 0 0 0-.88 8A32.1 32.1 0 1 1 132 180v-52.33c0-29 47.45-75.67 76.93-75.67c6.53 0 11.2 1.91 14.26 5.85c9.03 11.61 3.7 38.63-1.95 60.87"></svg:path>`,
})
export class PhButterflyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCableCarThinIcon],svg[ph-cable-car-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.94 31.3a4 4 0 0 0-4.64-3.24l-224 40A4 4 0 0 0 16 76a4 4 0 0 0 .7-.06L124 56.78V100H64a28 28 0 0 0-28 28v64a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28v-64a28 28 0 0 0-28-28h-60V55.35l108.7-19.41a4 4 0 0 0 3.24-4.64M100 164v-56h56v56Zm-36-56h28v56H44v-36a20 20 0 0 1 20-20m128 104H64a20 20 0 0 1-20-20v-20h168v20a20 20 0 0 1-20 20m20-84v36h-48v-56h28a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhCableCarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCactusThinIcon],svg[ph-cactus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 212h-52v-32h8a64.07 64.07 0 0 0 64-64a24 24 0 0 0-48 0a16 16 0 0 1-16 16h-8V56a36 36 0 0 0-72 0v36h-8a16 16 0 0 1-16-16a24 24 0 0 0-48 0a64.07 64.07 0 0 0 64 64h8v72H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8M96 132H84a56.06 56.06 0 0 1-56-56a16 16 0 0 1 32 0a24 24 0 0 0 24 24h12a4 4 0 0 0 4-4V56a28 28 0 0 1 56 0v80a4 4 0 0 0 4 4h12a24 24 0 0 0 24-24a16 16 0 0 1 32 0a56.06 56.06 0 0 1-56 56h-12a4 4 0 0 0-4 4v36h-56v-76a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCactusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCakeThinIcon],svg[ph-cake-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 112a20 20 0 0 0-20-20h-76V75.71A28 28 0 0 0 156 48c0-25.84-24.73-42.63-25.78-43.33a4 4 0 0 0-4.44 0C124.73 5.37 100 22.16 100 48a28 28 0 0 0 24 27.71V92H48a20 20 0 0 0-20 20v23.33a36.85 36.85 0 0 0 8 22.91V200a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-41.76a36.85 36.85 0 0 0 8-22.91ZM108 48c0-17.39 14.37-30.53 20-35c5.63 4.48 20 17.62 20 35a20 20 0 0 1-40 0m92 164H56a12 12 0 0 1-12-12v-34.27A35.16 35.16 0 0 0 63 172a36.13 36.13 0 0 0 33-19.48a36 36 0 0 0 64 0A36.13 36.13 0 0 0 192 172h1a35.16 35.16 0 0 0 19-6.26V200a12 12 0 0 1-12 12m20-76.67c0 15.39-12.21 28.25-27.21 28.66A28 28 0 0 1 164 136a4 4 0 0 0-8 0a28 28 0 0 1-56 0a4 4 0 0 0-8 0a28 28 0 0 1-28.79 28c-15-.41-27.21-13.27-27.21-28.66V112a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12Z"></svg:path>`,
})
export class PhCakeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalculatorThinIcon],svg[ph-calculator-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 60H80a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4V64a4 4 0 0 0-4-4m-4 48H84V68h88Zm28-80H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m4 188a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4ZM96 148a8 8 0 1 1-8-8a8 8 0 0 1 8 8m40 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m40 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-80 40a8 8 0 1 1-8-8a8 8 0 0 1 8 8m40 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m40 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCalculatorThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarBlankThinIcon],svg[ph-calendar-blank-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhCalendarBlankThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarCheckThinIcon],svg[ph-calendar-check-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4m-41.17-86.83a4 4 0 0 1 0 5.66l-48 48a4 4 0 0 1-5.66 0l-24-24a4 4 0 0 1 5.66-5.66L116 170.34l45.17-45.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhCalendarCheckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotThinIcon],svg[ph-calendar-dot-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4m-68-60a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCalendarDotThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotsThinIcon],svg[ph-calendar-dots-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4m-72-80a8 8 0 1 1-8-8a8 8 0 0 1 8 8m44 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-88 40a8 8 0 1 1-8-8a8 8 0 0 1 8 8m44 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m44 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCalendarDotsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarHeartThinIcon],svg[ph-calendar-heart-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4ZM152 92a28 28 0 0 0-24 13.59A28 28 0 0 0 76 120c0 14.51 8.56 29 25.44 43.07a143.5 143.5 0 0 0 24.77 16.51a4 4 0 0 0 3.58 0a143.5 143.5 0 0 0 24.77-16.51C171.44 149 180 134.51 180 120a28 28 0 0 0-28-28m-24 79.47c-8.46-4.64-44-25.67-44-51.47a20 20 0 0 1 40 0a4 4 0 0 0 8 0a20 20 0 0 1 40 0c0 25.8-35.54 46.83-44 51.47"></svg:path>`,
})
export class PhCalendarHeartThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarMinusThinIcon],svg[ph-calendar-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4m-52-60a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCalendarMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarPlusThinIcon],svg[ph-calendar-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4m-52-60a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCalendarPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarSlashThinIcon],svg[ph-calendar-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31A4 4 0 0 0 48 36a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a4 4 0 0 0 3-6.69Zm-4.46 7L82.59 84H44V48a4 4 0 0 1 2.5-3.71ZM48 212a4 4 0 0 1-4-4V92h45.87L199 212ZM220 48v129.23a4 4 0 1 1-8 0V92h-77.12a4 4 0 0 1 0-8H212V48a4 4 0 0 0-4-4h-28v12a4 4 0 0 1-8 0V44H91.25a4 4 0 0 1 0-8H172V24a4 4 0 0 1 8 0v12h28a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCalendarSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarStarThinIcon],svg[ph-calendar-star-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4Zm-35.69-90.38l-32.24-2.49l-12.4-28.71a4 4 0 0 0-7.34 0l-12.4 28.71l-32.24 2.49a4 4 0 0 0-2.24 7.08l24.46 20.19L94.45 175a4 4 0 0 0 5.91 4.41L128 163.18l27.64 16.27a4 4 0 0 0 2 .55a4.05 4.05 0 0 0 2.39-.79a4 4 0 0 0 1.49-4.17l-7.46-30.15l24.46-20.19a4 4 0 0 0-2.24-7.08Zm-29.26 22.71a4 4 0 0 0-1.33 4l5.78 23.36l-21.5-12.6a4 4 0 0 0-4.06 0l-21.44 12.64l5.78-23.36a4 4 0 0 0-1.33-4l-18.76-15.53l24.81-1.92a4 4 0 0 0 3.36-2.4L128 98.1l9.68 22.42a4 4 0 0 0 3.36 2.4l24.77 1.92Z"></svg:path>`,
})
export class PhCalendarStarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarThinIcon],svg[ph-calendar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4m-100-92v64a4 4 0 0 1-8 0v-57.53l-10.21 5.11a4 4 0 0 1-3.58-7.16l16-8A4 4 0 0 1 108 120m60 28l-24 32h24a4 4 0 0 1 0 8h-32a4 4 0 0 1-3.2-6.4l28.78-38.37A11.88 11.88 0 0 0 164 136a12 12 0 0 0-22.4-6a4 4 0 0 1-6.92-4A20 20 0 0 1 172 136a19.8 19.8 0 0 1-4 12"></svg:path>`,
})
export class PhCalendarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarXThinIcon],svg[ph-calendar-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4m-53.17-81.17L133.66 152l21.17 21.17a4 4 0 0 1-5.66 5.66L128 157.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L122.34 152l-21.17-21.17a4 4 0 1 1 5.66-5.66L128 146.34l21.17-21.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhCalendarXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCallBellThinIcon],svg[ph-call-bell-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 180h208a4 4 0 0 0 0-8h-12v-20a92.11 92.11 0 0 0-88-91.91V36h20a4 4 0 0 0 0-8h-48a4 4 0 0 0 0 8h20v24.09A92.11 92.11 0 0 0 36 152v20H24a4 4 0 0 0 0 8m20-28a84 84 0 0 1 168 0v20H44Zm192 56a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h208a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCallBellThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraPlusThinIcon],svg[ph-camera-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 136a4 4 0 0 1-4 4h-28v28a4 4 0 0 1-8 0v-28H96a4 4 0 0 1 0-8h28v-28a4 4 0 0 1 8 0v28h28a4 4 0 0 1 4 4m64-56v112a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V80a20 20 0 0 1 20-20h29.86L90.3 41.34a12 12 0 0 1 10-5.34h55.44a12 12 0 0 1 10 5.34L178.14 60H208a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12h-32a4 4 0 0 1-3.33-1.78l-13.62-20.44a4 4 0 0 0-3.33-1.78h-55.44A4 4 0 0 0 97 45.78L83.33 66.22A4 4 0 0 1 80 68H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12Z"></svg:path>`,
})
export class PhCameraPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraRotateThinIcon],svg[ph-camera-rotate-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 60h-29.87l-14.81-22.22A4 4 0 0 0 160 36H96a4 4 0 0 0-3.32 1.78L77.85 60H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 132a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h32a4 4 0 0 0 3.33-1.78L98.13 44h59.72l14.82 22.22A4 4 0 0 0 176 68h32a12 12 0 0 1 12 12Zm-48-96v24a4 4 0 0 1-4 4h-24a4 4 0 0 1 0-8h14.66l-5.27-5.52a36.12 36.12 0 0 0-47-3.29a4 4 0 1 1-4.8-6.39a44.17 44.17 0 0 1 57.51 4.09L164 110V96a4 4 0 0 1 8 0m-16.8 61.6a4 4 0 0 1-.8 5.6a44.15 44.15 0 0 1-57.51-4.09L92 154v14a4 4 0 0 1-8 0v-24a4 4 0 0 1 4-4h24a4 4 0 0 1 0 8H97.34l5.27 5.52a36.12 36.12 0 0 0 47 3.29a4 4 0 0 1 5.59.79"></svg:path>`,
})
export class PhCameraRotateThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraSlashThinIcon],svg[ph-camera-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38L60.78 60H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h151l6.08 6.69a4 4 0 1 0 5.92-5.38Zm97.58 119.23A31.7 31.7 0 0 1 128 164a32 32 0 0 1-22.48-54.78ZM48 204a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h20l32.09 35.3a40 40 0 0 0 53.79 59.16L191.69 204ZM228 80v106a4 4 0 0 1-8 0V80a12 12 0 0 0-12-12h-32a4 4 0 0 1-3.32-1.78L157.85 44H98.13l-.82 1.23a4 4 0 1 1-6.65-4.44l2-3A4 4 0 0 1 96 36h64a4 4 0 0 1 3.33 1.78L178.13 60H208a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhCameraSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraThinIcon],svg[ph-camera-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 60h-29.87l-14.81-22.22A4 4 0 0 0 160 36H96a4 4 0 0 0-3.32 1.78L77.85 60H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 132a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h32a4 4 0 0 0 3.33-1.78L98.13 44h59.72l14.82 22.22A4 4 0 0 0 176 68h32a12 12 0 0 1 12 12ZM128 92a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 72a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class PhCameraThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCampfireThinIcon],svg[ph-campfire-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.81 225.21A4 4 0 0 1 216 228a4 4 0 0 1-1.21-.19L128 200.2l-86.79 27.61A4 4 0 0 1 40 228a4 4 0 0 1-1.21-7.81l76-24.19l-76-24.19a4 4 0 1 1 2.42-7.62L128 191.8l86.79-27.61a4 4 0 1 1 2.42 7.62l-76 24.19l76 24.19a4 4 0 0 1 2.6 5.02M72 108c0-19 9.38-38.85 27.12-57.27a152 152 0 0 1 26.78-22.14a4 4 0 0 1 4.2 0a152 152 0 0 1 26.78 22.14C174.62 69.15 184 89 184 108a56 56 0 0 1-54.56 56h-2.88A56 56 0 0 1 72 108m56 48a20 20 0 0 0 20-20c0-17.39-14.37-30.53-20-35c-5.63 4.48-20 17.62-20 35a20 20 0 0 0 20 20m-48-48a48 48 0 0 0 23.28 41.13A27.8 27.8 0 0 1 100 136c0-25.84 24.73-42.63 25.78-43.33a4 4 0 0 1 4.44 0c1.05.7 25.78 17.49 25.78 43.33a27.8 27.8 0 0 1-3.28 13.13A48 48 0 0 0 176 108c0-36.37-38.49-64.76-48-71.21c-9.5 6.46-48 34.89-48 71.21"></svg:path>`,
})
export class PhCampfireThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarBatteryThinIcon],svg[ph-car-battery-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 136a4 4 0 0 1-4 4h-12v12a4 4 0 0 1-8 0v-12h-12a4 4 0 0 1 0-8h12v-12a4 4 0 0 1 8 0v12h12a4 4 0 0 1 4 4m-84-4H72a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m132-44v96a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V88a12 12 0 0 1 12-12h20V56a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v20h40V56a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v20h20a12 12 0 0 1 12 12m-80-12h40V56a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4Zm-96 0h40V56a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4Zm168 12a4 4 0 0 0-4-4H32a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h192a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhCarBatteryThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarProfileThinIcon],svg[ph-car-profile-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 116h-30.34l-44.49-44.48a11.9 11.9 0 0 0-8.48-3.52H44.28a12 12 0 0 0-10 5.34L4.67 117.78A4 4 0 0 0 4 120v48a12 12 0 0 0 12 12h20.29a28 28 0 0 0 55.42 0h72.58a28 28 0 0 0 55.42 0H240a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12M41 77.78A4 4 0 0 1 44.28 76h112.41a4 4 0 0 1 2.82 1.17L198.34 116H15.47ZM64 196a20 20 0 1 1 20-20a20 20 0 0 1-20 20m128 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20m52-28a4 4 0 0 1-4 4h-20.29a28 28 0 0 0-55.42 0H91.71a28 28 0 0 0-55.42 0H16a4 4 0 0 1-4-4v-44h228a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhCarProfileThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarSimpleThinIcon],svg[ph-car-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 108h-13.4l-28.83-64.87a12 12 0 0 0-11-7.13H69.2a12 12 0 0 0-11 7.13L29.4 108H16a4 4 0 0 0 0 8h12v84a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-20h104v20a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-84h12a4 4 0 0 0 0-8M65.54 46.38A4 4 0 0 1 69.2 44h117.6a4 4 0 0 1 3.66 2.38L217.84 108H38.16ZM220 200a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4v-24a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4v24a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-84h184Z"></svg:path>`,
})
export class PhCarSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarThinIcon],svg[ph-car-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 108h-13.4l-28.83-64.87a12 12 0 0 0-11-7.13H69.2a12 12 0 0 0-11 7.13L29.4 108H16a4 4 0 0 0 0 8h12v84a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-20h104v20a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-84h12a4 4 0 0 0 0-8M65.54 46.38A4 4 0 0 1 69.2 44h117.6a4 4 0 0 1 3.66 2.38L217.84 108H38.16ZM68 200a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-20h32Zm148 4h-24a4 4 0 0 1-4-4v-20h32v20a4 4 0 0 1-4 4m4-32H36v-56h184ZM60 144a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H64a4 4 0 0 1-4-4m112 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhCarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardholderThinIcon],svg[ph-cardholder-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 52H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V72a20 20 0 0 0-20-20M36 92h184v24h-60a4 4 0 0 0-4 4a28 28 0 0 1-56 0a4 4 0 0 0-4-4H36Zm12-32h160a12 12 0 0 1 12 12v12H36V72a12 12 0 0 1 12-12m160 136H48a12 12 0 0 1-12-12v-60h56.22a36 36 0 0 0 71.56 0H220v60a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhCardholderThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsThinIcon],svg[ph-cards-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 76H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Zm40-144v120a4 4 0 0 1-8 0V56a4 4 0 0 0-4-4H64a4 4 0 0 1 0-8h152a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCardsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsThreeThinIcon],svg[ph-cards-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 92H48a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-96a12 12 0 0 0-12-12m4 108a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM52 64a4 4 0 0 1 4-4h144a4 4 0 0 1 0 8H56a4 4 0 0 1-4-4m16-32a4 4 0 0 1 4-4h112a4 4 0 0 1 0 8H72a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhCardsThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleDownThinIcon],svg[ph-caret-circle-double-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.71 57.29A100 100 0 1 0 57.29 198.71A100 100 0 1 0 198.71 57.29m-5.66 135.76A92 92 0 1 1 220 128a91.37 91.37 0 0 1-26.95 65.05M162.83 85.17a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L128 114.34l29.17-29.17a4 4 0 0 1 5.66 0m0 56a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L128 170.34l29.17-29.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhCaretCircleDoubleDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleLeftThinIcon],svg[ph-caret-circle-double-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.71 57.29A100 100 0 1 0 57.29 198.71A100 100 0 1 0 198.71 57.29m-5.66 135.76A92 92 0 1 1 220 128a91.37 91.37 0 0 1-26.95 65.05m-22.22-94.22L141.66 128l29.17 29.17a4 4 0 0 1-5.66 5.66l-32-32a4 4 0 0 1 0-5.66l32-32a4 4 0 1 1 5.66 5.66m-56 0L85.66 128l29.17 29.17a4 4 0 0 1-5.66 5.66l-32-32a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 5.66"></svg:path>`,
})
export class PhCaretCircleDoubleLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleRightThinIcon],svg[ph-caret-circle-double-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.71 57.29A100 100 0 1 0 57.29 198.71A100 100 0 1 0 198.71 57.29m-5.66 135.76A92 92 0 1 1 220 128a91.37 91.37 0 0 1-26.95 65.05m-70.22-67.88a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66-5.66L114.34 128L85.17 98.83a4 4 0 0 1 5.66-5.66Zm56 0a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66-5.66L170.34 128l-29.17-29.17a4 4 0 0 1 5.66-5.66Z"></svg:path>`,
})
export class PhCaretCircleDoubleRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleUpThinIcon],svg[ph-caret-circle-double-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.71 57.29A100 100 0 1 0 57.29 198.71A100 100 0 1 0 198.71 57.29m-5.66 135.76A92 92 0 1 1 220 128a91.37 91.37 0 0 1-26.95 65.05m-30.22-27.88a4 4 0 0 1-5.66 5.66L128 141.66l-29.17 29.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0Zm0-56a4 4 0 0 1-5.66 5.66L128 85.66l-29.17 29.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0Z"></svg:path>`,
})
export class PhCaretCircleDoubleUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDownThinIcon],svg[ph-caret-circle-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m42.83-110.83a4 4 0 0 1 0 5.66l-40 40a4 4 0 0 1-5.66 0l-40-40a4 4 0 0 1 5.66-5.66L128 146.34l37.17-37.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhCaretCircleDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleLeftThinIcon],svg[ph-caret-circle-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m18.83-129.17L109.66 128l37.17 37.17a4 4 0 0 1-5.66 5.66l-40-40a4 4 0 0 1 0-5.66l40-40a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhCaretCircleLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleRightThinIcon],svg[ph-caret-circle-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m26.83-94.83a4 4 0 0 1 0 5.66l-40 40a4 4 0 0 1-5.66-5.66L146.34 128l-37.17-37.17a4 4 0 0 1 5.66-5.66Z"></svg:path>`,
})
export class PhCaretCircleRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpDownThinIcon],svg[ph-caret-circle-up-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m34.83-118.83a4 4 0 0 1-5.66 5.66L128 77.66l-29.17 29.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0Zm0 48a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L128 178.34l29.17-29.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhCaretCircleUpDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpThinIcon],svg[ph-caret-circle-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m42.83-78.83a4 4 0 0 1-5.66 5.66L128 109.66l-37.17 37.17a4 4 0 0 1-5.66-5.66l40-40a4 4 0 0 1 5.66 0Z"></svg:path>`,
})
export class PhCaretCircleUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleDownThinIcon],svg[ph-caret-double-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.83 133.17a4 4 0 0 1 0 5.66l-80 80a4 4 0 0 1-5.66 0l-80-80a4 4 0 0 1 5.66-5.66L128 210.34l77.17-77.17a4 4 0 0 1 5.66 0m-85.66 5.66a4 4 0 0 0 5.66 0l80-80a4 4 0 1 0-5.66-5.66L128 130.34L50.83 53.17a4 4 0 0 0-5.66 5.66Z"></svg:path>`,
})
export class PhCaretDoubleDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleLeftThinIcon],svg[ph-caret-double-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.83 205.17a4 4 0 0 1-5.66 5.66l-80-80a4 4 0 0 1 0-5.66l80-80a4 4 0 1 1 5.66 5.66L125.66 128ZM45.66 128l77.17-77.17a4 4 0 0 0-5.66-5.66l-80 80a4 4 0 0 0 0 5.66l80 80a4 4 0 1 0 5.66-5.66Z"></svg:path>`,
})
export class PhCaretDoubleLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleRightThinIcon],svg[ph-caret-double-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m138.83 130.83l-80 80a4 4 0 0 1-5.66-5.66L130.34 128L53.17 50.83a4 4 0 0 1 5.66-5.66l80 80a4 4 0 0 1 0 5.66m80-5.66l-80-80a4 4 0 0 0-5.66 5.66L210.34 128l-77.17 77.17a4 4 0 0 0 5.66 5.66l80-80a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhCaretDoubleRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleUpThinIcon],svg[ph-caret-double-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.83 197.17a4 4 0 0 1-5.66 5.66L128 125.66l-77.17 77.17a4 4 0 0 1-5.66-5.66l80-80a4 4 0 0 1 5.66 0Zm-160-74.34L128 45.66l77.17 77.17a4 4 0 1 0 5.66-5.66l-80-80a4 4 0 0 0-5.66 0l-80 80a4 4 0 0 0 5.66 5.66"></svg:path>`,
})
export class PhCaretDoubleUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDownThinIcon],svg[ph-caret-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 98.83l-80 80a4 4 0 0 1-5.66 0l-80-80a4 4 0 0 1 5.66-5.66L128 170.34l77.17-77.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhCaretDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLeftThinIcon],svg[ph-caret-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162.83 205.17a4 4 0 0 1-5.66 5.66l-80-80a4 4 0 0 1 0-5.66l80-80a4 4 0 1 1 5.66 5.66L85.66 128Z"></svg:path>`,
})
export class PhCaretLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineDownThinIcon],svg[ph-caret-line-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M45.17 74.83a4 4 0 0 1 5.66-5.66L128 146.34l77.17-77.17a4 4 0 1 1 5.66 5.66l-80 80a4 4 0 0 1-5.66 0ZM208 188H48a4 4 0 0 0 0 8h160a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhCaretLineDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineLeftThinIcon],svg[ph-caret-line-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M194.83 205.17a4 4 0 0 1-5.66 5.66l-80-80a4 4 0 0 1 0-5.66l80-80a4 4 0 1 1 5.66 5.66L117.66 128ZM72 44a4 4 0 0 0-4 4v160a4 4 0 0 0 8 0V48a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCaretLineLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineRightThinIcon],svg[ph-caret-line-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M146.83 125.17a4 4 0 0 1 0 5.66l-80 80a4 4 0 0 1-5.66-5.66L138.34 128L61.17 50.83a4 4 0 0 1 5.66-5.66ZM184 44a4 4 0 0 0-4 4v160a4 4 0 0 0 8 0V48a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCaretLineRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineUpThinIcon],svg[ph-caret-line-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.83 194.83a4 4 0 0 1-5.66 0L128 117.66l-77.17 77.17a4 4 0 0 1-5.66-5.66l80-80a4 4 0 0 1 5.66 0l80 80a4 4 0 0 1 0 5.66M48 76h160a4 4 0 0 0 0-8H48a4 4 0 0 0 0 8"></svg:path>`,
})
export class PhCaretLineUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretRightThinIcon],svg[ph-caret-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m178.83 130.83l-80 80a4 4 0 0 1-5.66-5.66L170.34 128L93.17 50.83a4 4 0 0 1 5.66-5.66l80 80a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhCaretRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpDownThinIcon],svg[ph-caret-up-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178.83 173.17a4 4 0 0 1 0 5.66l-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 0 1 5.66-5.66L128 218.34l45.17-45.17a4 4 0 0 1 5.66 0m-96-90.34L128 37.66l45.17 45.17a4 4 0 1 0 5.66-5.66l-48-48a4 4 0 0 0-5.66 0l-48 48a4 4 0 0 0 5.66 5.66"></svg:path>`,
})
export class PhCaretUpDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpThinIcon],svg[ph-caret-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.83 162.83a4 4 0 0 1-5.66 0L128 85.66l-77.17 77.17a4 4 0 0 1-5.66-5.66l80-80a4 4 0 0 1 5.66 0l80 80a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhCaretUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarrotThinIcon],svg[ph-carrot-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 68h-38.34l33.17-33.17a4 4 0 1 0-5.66-5.66L188 62.34V24a4 4 0 0 0-8 0v40a60 60 0 0 0-78.39 5.54c-17.12 16.79-34.51 45.72-51.7 86c-11.93 28-19.61 52-20.59 55.09A12.05 12.05 0 0 0 40 228a12 12 0 0 0 5.36-1.28c3.12-1 27.13-8.65 55.09-20.59c40.29-17.2 69.24-34.61 86-51.71A60 60 0 0 0 192 76h40a4 4 0 0 0 0-8m-51.26 80.79c-9.76 10-23.42 19.39-38.37 27.91l-27.54-27.53a4 4 0 0 0-5.65 5.65l25.9 25.91C92.61 203.55 43.34 219 42.64 219.18a4.5 4.5 0 0 0-.71.3a4 4 0 0 1-5.41-5.41a4.5 4.5 0 0 0 .3-.71c.29-1 29.72-95 67.62-135.27l36.74 36.73a4 4 0 0 0 5.65 0a4 4 0 0 0 0-5.65l-36.65-36.65a52 52 0 0 1 70.56 76.27"></svg:path>`,
})
export class PhCarrotThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCashRegisterThinIcon],svg[ph-cash-register-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.88 159L213.4 69.09A12 12 0 0 0 201.75 60H132V40a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v20H54.25a12 12 0 0 0-11.65 9.09L20.12 159a4 4 0 0 0-.12 1v32a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-32a4 4 0 0 0-.12-1M76 40a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v20H76ZM50.37 71a4 4 0 0 1 3.88-3h147.5a4 4 0 0 1 3.88 3l21.25 85H29.12ZM224 196H32a4 4 0 0 1-4-4v-28h200v28a4 4 0 0 1-4 4M68 96a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H72a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m-96 32a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H72a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhCashRegisterThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCassetteTapeThinIcon],svg[ph-cassette-tape-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12M72 196l18-24h76l18 24Zm156-4a4 4 0 0 1-4 4h-30l-22.8-30.4a4 4 0 0 0-3.2-1.6H88a4 4 0 0 0-3.2 1.6L62 196H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4ZM176 84H80a28 28 0 0 0 0 56h96a28 28 0 0 0 0-56M60 112a20 20 0 1 1 20 20a20 20 0 0 1-20-20m39.57 20a27.94 27.94 0 0 0 0-40h56.86a27.94 27.94 0 0 0 0 40Zm76.43 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhCassetteTapeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCastleTurretThinIcon],svg[ph-castle-turret-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 220h-20V113.66l12.49-12.49a11.93 11.93 0 0 0 3.51-8.48V48a12 12 0 0 0-12-12h-24a4 4 0 0 0-4 4v28h-24V40a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4v28H84V40a4 4 0 0 0-4-4H56a12 12 0 0 0-12 12v44.69a11.93 11.93 0 0 0 3.51 8.48L60 113.66V220H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8M66.83 109.17L53.17 95.51A4 4 0 0 1 52 92.69V48a4 4 0 0 1 4-4h20v28a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V44h24v28a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V44h20a4 4 0 0 1 4 4v44.69a4 4 0 0 1-1.17 2.82l-13.66 13.66A4 4 0 0 0 188 112v108h-32v-52a28 28 0 0 0-56 0v52H68V112a4 4 0 0 0-1.17-2.83M148 220h-40v-52a20 20 0 0 1 40 0Z"></svg:path>`,
})
export class PhCastleTurretThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCatThinIcon],svg[ph-cat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.59 36.94a11.83 11.83 0 0 0-13.08 2.61l-.19.2l-19.55 22.49a107.1 107.1 0 0 0-119.54 0L48.68 39.75l-.19-.2A12 12 0 0 0 28 48v88c0 50.72 44.86 92 100 92s100-41.27 100-92V48a11.82 11.82 0 0 0-7.41-11.06M220 136c0 45.09-39.12 82-88 83.91v-26.25l14.83-14.83a4 4 0 1 0-5.66-5.65L128 186.35l-13.17-13.17a4 4 0 1 0-5.66 5.65L124 193.66v26.26C75.12 218 36 181.1 36 136V48a3.93 3.93 0 0 1 2.47-3.7a4.4 4.4 0 0 1 1.6-.31a3.77 3.77 0 0 1 2.67 1.1l21.84 25.14a4 4 0 0 0 5.4.59A94 94 0 0 1 92 58.74V88a4 4 0 0 0 8 0V56a100 100 0 0 1 24-3.93V88a4 4 0 0 0 8 0V52.09A100 100 0 0 1 156 56v32a4 4 0 0 0 8 0V58.74a94 94 0 0 1 22 12.08a4 4 0 0 0 5.4-.59l21.84-25.11A4 4 0 0 1 220 48Zm-128 4a8 8 0 1 1-8-8a8 8 0 0 1 8 8m88 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalFullThinIcon],svg[ph-cell-signal-full-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 72v128a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0m36-44a4 4 0 0 0-4 4v168a4 4 0 0 0 8 0V32a4 4 0 0 0-4-4m-80 80a4 4 0 0 0-4 4v88a4 4 0 0 0 8 0v-88a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCellSignalFullThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalHighThinIcon],svg[ph-cell-signal-high-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 72v128a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0m-44 36a4 4 0 0 0-4 4v88a4 4 0 0 0 8 0v-88a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCellSignalHighThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalLowThinIcon],svg[ph-cell-signal-low-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 152v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0m-44 36a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCellSignalLowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalMediumThinIcon],svg[ph-cell-signal-medium-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 112v88a4 4 0 0 1-8 0v-88a4 4 0 0 1 8 0m-44 36a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCellSignalMediumThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalNoneThinIcon],svg[ph-cell-signal-none-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 192v8a4 4 0 0 1-8 0v-8a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhCellSignalNoneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalSlashThinIcon],svg[ph-cell-signal-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 152v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0m-44 36a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4m171 25.31l-160-176a4 4 0 0 0-6 5.38l71 78.06V200a4 4 0 0 0 8 0v-70.45l32 35.2V200a4 4 0 0 0 8 0v-26.45l41 45.14a4 4 0 1 0 5.92-5.38Zm-51-93.68a4 4 0 0 0 4-4V72a4 4 0 0 0-8 0v43.63a4 4 0 0 0 4 4m40 44a4 4 0 0 0 4-4V32a4 4 0 0 0-8 0v127.63a4 4 0 0 0 4 4"></svg:path>`,
})
export class PhCellSignalSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalXThinIcon],svg[ph-cell-signal-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.83 197.17a4 4 0 0 1-5.66 5.66L184 181.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L178.34 176l-21.17-21.17a4 4 0 0 1 5.66-5.66L184 170.34l21.17-21.17a4 4 0 0 1 5.66 5.66L189.66 176ZM160 116a4 4 0 0 0 4-4V72a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4m40 0a4 4 0 0 0 4-4V32a4 4 0 0 0-8 0v80a4 4 0 0 0 4 4m-80-8a4 4 0 0 0-4 4v88a4 4 0 0 0 8 0v-88a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCellSignalXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellTowerThinIcon],svg[ph-cell-tower-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M131.58 86.21a4 4 0 0 0-7.16 0l-72 144a4 4 0 0 0 7.16 3.58L74.47 204h107.06l14.89 29.79A4 4 0 0 0 200 236a4.1 4.1 0 0 0 1.79-.42a4 4 0 0 0 1.79-5.37ZM128 96.94L161.53 164H94.47ZM78.47 196l12-24h75.06l12 24Zm84.95-101.55A35.6 35.6 0 0 0 164 88a36 36 0 0 0-72 0a35.6 35.6 0 0 0 .58 6.45a4 4 0 0 1-7.88 1.43A45 45 0 0 1 84 88a44 44 0 0 1 88 0a45 45 0 0 1-.7 7.88a4 4 0 0 1-3.94 3.29a4.4 4.4 0 0 1-.71-.07a4 4 0 0 1-3.23-4.65m-96.08 39.34a76 76 0 1 1 121.32 0a4 4 0 1 1-6.38-4.82a68 68 0 1 0-108.56 0a4 4 0 1 1-6.38 4.82"></svg:path>`,
})
export class PhCellTowerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCertificateThinIcon],svg[ph-certificate-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 136a4 4 0 0 1-4 4H72a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m-4-36H72a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m108 59.74V224a4 4 0 0 1-6 3.47l-26-14.86l-26 14.86a4 4 0 0 1-6-3.47v-28H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12v32.26a47.92 47.92 0 0 1 0 71.48M196 84a40 40 0 1 0 40 40a40 40 0 0 0-40-40m-32 104v-28.26a48 48 0 0 1 56-77.28V56a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4Zm56-22.46a47.81 47.81 0 0 1-48 0v51.57l22-12.58a4 4 0 0 1 4 0l22 12.58Z"></svg:path>`,
})
export class PhCertificateThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChairThinIcon],svg[ph-chair-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 140h-36v-40h20a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h20v40H48a12 12 0 0 0-12 12v16a12 12 0 0 0 12 12h12v44a4 4 0 0 0 8 0v-44h120v44a4 4 0 0 0 8 0v-44h12a12 12 0 0 0 12-12v-16a12 12 0 0 0-12-12M60 88V40a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v48a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4m32 12h72v40H92Zm120 68a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-16a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhChairThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardSimpleThinIcon],svg[ph-chalkboard-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 196h-12v-28a4 4 0 0 0-4-4h-64a4 4 0 0 0-4 4v28H36V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v80a4 4 0 0 0 8 0V56a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v140H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8m-76-24h56v24h-56Z"></svg:path>`,
})
export class PhChalkboardSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardTeacherThinIcon],svg[ph-chalkboard-teacher-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h13.39a4 4 0 0 0 3.61-2.29a52 52 0 0 1 94 0a4 4 0 0 0 3.61 2.29H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4h-58.92a60.38 60.38 0 0 0-34.68-29.07a36 36 0 1 0-36.8 0A60.38 60.38 0 0 0 50.92 204H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-116-28a28 28 0 1 1 28-28a28 28 0 0 1-28 28m92-92v96a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h12V84H68v12a4 4 0 0 1-8 0V80a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhChalkboardTeacherThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardThinIcon],svg[ph-chalkboard-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 196h-12V56a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v140H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M36 56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v140h-24v-28a4 4 0 0 0-4-4h-72a4 4 0 0 0-4 4v28H68V84h120v52a4 4 0 0 0 8 0V80a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4v116H36Zm152 140h-64v-24h64Z"></svg:path>`,
})
export class PhChalkboardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChampagneThinIcon],svg[ph-champagne-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142.3 12H97.7a4 4 0 0 0-3.8 2.76c-1.45 4.47-35.2 109.75-6.13 149.78c6.73 9.25 16.23 14.38 28.23 15.29V236H96a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8h-20v-56.17c12-.91 21.5-6 28.22-15.29c29.08-40-4.67-145.31-6.12-149.78a4 4 0 0 0-3.8-2.76m-41.65 8h38.7A455 455 0 0 1 151 68H89a462 462 0 0 1 11.65-48m45.1 139.83C139.8 168 131.38 172 120 172s-19.8-4-25.75-12.16C81 141.63 82.6 106.72 87.6 76h64.81c6.45 40 4.16 68.94-6.66 83.83M228 52a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-24-32a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0 80a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhChampagneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChargingStationThinIcon],svg[ph-charging-station-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M131.31 125.76a4 4 0 0 1 .4 3.73l-16 40A4 4 0 0 1 112 172a3.9 3.9 0 0 1-1.49-.29a4 4 0 0 1-2.22-5.2l13.8-34.51H96a4 4 0 0 1-3.71-5.49l16-40a4 4 0 1 1 7.42 3L101.91 124H128a4 4 0 0 1 3.31 1.76M244 86.63V168a20 20 0 0 1-40 0v-40a12 12 0 0 0-12-12h-20v96h20a4 4 0 0 1 0 8H32a4 4 0 0 1 0-8h20V56a20 20 0 0 1 20-20h80a20 20 0 0 1 20 20v52h20a20 20 0 0 1 20 20v40a12 12 0 0 0 24 0V86.63a12 12 0 0 0-3.51-8.49l-19.32-19.31a4 4 0 0 1 5.66-5.66l19.31 19.32A19.85 19.85 0 0 1 244 86.63M164 212V56a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v156Z"></svg:path>`,
})
export class PhChargingStationThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarHorizontalThinIcon],svg[ph-chart-bar-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 100h-44V56a4 4 0 0 0-4-4H52V40a4 4 0 0 0-8 0v176a4 4 0 0 0 8 0v-12h92a4 4 0 0 0 4-4v-44h76a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4m-52-40v40H52V60Zm-32 136H52v-40h88Zm80-48H52v-40h168Z"></svg:path>`,
})
export class PhChartBarHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarThinIcon],svg[ph-chart-bar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 204h-12V40a4 4 0 0 0-4-4h-56a4 4 0 0 0-4 4v44H96a4 4 0 0 0-4 4v44H48a4 4 0 0 0-4 4v68H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8M156 44h48v160h-48Zm-56 48h48v112h-48Zm-48 48h40v64H52Z"></svg:path>`,
})
export class PhChartBarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartDonutThinIcon],svg[ph-chart-donut-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4a36 36 0 1 1-31.18 18a4 4 0 0 0-1.47-5.47l-48.5-28A4 4 0 0 0 41.39 78A100 100 0 1 0 128 28M46.38 85.5l41.67 24a43.86 43.86 0 0 0-3.4 25.93l-46.47 12.5a92.2 92.2 0 0 1 8.2-62.43m-6.13 70.15l46.46-12.45A44.11 44.11 0 0 0 124 171.81v48.1a92.17 92.17 0 0 1-83.75-64.26M132 219.91v-48.1a44 44 0 0 0 0-87.63V36.09a92 92 0 0 1 0 183.82"></svg:path>`,
})
export class PhChartDonutThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineDownThinIcon],svg[ph-chart-line-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 208a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V48a4 4 0 0 1 8 0v14.34l60 60l29.17-29.17a4 4 0 0 1 5.66 0L196 158.34V128a4 4 0 0 1 8 0v40a4 4 0 0 1-.08.78a3 3 0 0 1-.1.34a3 3 0 0 1-.13.41a3 3 0 0 1-.2.39c-.05.1-.1.2-.16.3a4.2 4.2 0 0 1-1.11 1.11l-.31.16a4 4 0 0 1-.38.2a3 3 0 0 1-.41.13a3 3 0 0 1-.34.1a4 4 0 0 1-.78.08h-40a4 4 0 0 1 0-8h30.34L128 101.66l-29.17 29.17a4 4 0 0 1-5.66 0L36 73.66V204h188a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhChartLineDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineThinIcon],svg[ph-chart-line-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 208a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V48a4 4 0 0 1 8 0v103.19L93.37 101a4 4 0 0 1 5-.19l61.41 46.05L221.37 93a4 4 0 0 1 5.26 6l-64 56a4 4 0 0 1-5 .19l-61.41-46L36 161.81V204h188a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhChartLineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineUpThinIcon],svg[ph-chart-line-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 208a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V48a4 4 0 0 1 8 0v118.34l57.17-57.17a4 4 0 0 1 5.66 0L128 138.34L190.34 76H160a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4v40a4 4 0 0 1-8 0V81.66l-65.17 65.17a4 4 0 0 1-5.66 0L96 117.66l-60 60V204h188a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhChartLineUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieSliceThinIcon],svg[ph-chart-pie-slice-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 109.5v-72a4 4 0 0 0-5.33-3.77a100 100 0 0 0-65 112.5A4 4 0 0 0 35.6 149L98 113a4 4 0 0 0 2-3.5m-8-2.31l-55.33 31.92A92 92 0 0 1 92 43.34ZM128 28a4 4 0 0 0-4 4v94.12l-80.8 47.06a4 4 0 0 0-1.43 5.49A100 100 0 1 0 128 28m0 192a92.47 92.47 0 0 1-77.22-42L130 131.88a4 4 0 0 0 2-3.46V36.09A92 92 0 0 1 128 220"></svg:path>`,
})
export class PhChartPieSliceThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieThinIcon],svg[ph-chart-pie-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m77.58 50.59L132 121.07v-85a92.07 92.07 0 0 1 73.58 42.52M124 36.09v89.6l-77.58 44.79A92 92 0 0 1 124 36.09M128 220a92 92 0 0 1-77.58-42.59l159.16-91.89A92 92 0 0 1 128 220"></svg:path>`,
})
export class PhChartPieThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPolarThinIcon],svg[ph-chart-polar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m91.91 96h-32.06A60.07 60.07 0 0 0 132 68.15V36.09A92.13 92.13 0 0 1 219.91 124M124 124H76.17A52.05 52.05 0 0 1 124 76.17Zm0 8v47.83A52.05 52.05 0 0 1 76.17 132Zm8 0h47.83A52.05 52.05 0 0 1 132 179.83Zm0-8V76.17A52.05 52.05 0 0 1 179.83 124Zm-8-87.91v32.06A60.07 60.07 0 0 0 68.15 124H36.09A92.13 92.13 0 0 1 124 36.09M36.09 132h32.06A60.07 60.07 0 0 0 124 187.85v32.06A92.13 92.13 0 0 1 36.09 132M132 219.91v-32.06A60.07 60.07 0 0 0 187.85 132h32.06A92.13 92.13 0 0 1 132 219.91"></svg:path>`,
})
export class PhChartPolarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartScatterThinIcon],svg[ph-chart-scatter-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 208a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V48a4 4 0 0 1 8 0v156h188a4 4 0 0 1 4 4m-96-52a8 8 0 1 0-8-8a8 8 0 0 0 8 8m-24-56a8 8 0 1 0-8-8a8 8 0 0 0 8 8m-32 72a8 8 0 1 0-8-8a8 8 0 0 0 8 8m96-48a8 8 0 1 0-8-8a8 8 0 0 0 8 8m24-40a8 8 0 1 0-8-8a8 8 0 0 0 8 8m-8 88a8 8 0 1 0-8-8a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhChartScatterThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredDotsThinIcon],svg[ph-chat-centered-dots-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 120a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-52-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m88 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m56-56v128a12 12 0 0 1-12 12h-62.75l-14.83 26a12 12 0 0 1-20.84 0l-14.83-26H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4h65.07a4 4 0 0 1 3.47 2l16 28a4 4 0 0 0 6.94 0l16-28a4 4 0 0 1 3.47-2H216a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhChatCenteredDotsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredSlashThinIcon],svg[ph-chat-centered-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38L46.23 44H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h62.75l14.83 26a12 12 0 0 0 20.84 0l14.83-26h31.16L205 218.69a4 4 0 1 0 5.92-5.38ZM150.93 188a4 4 0 0 0-3.47 2l-16 28a4 4 0 0 1-6.94 0l-16-28a4 4 0 0 0-3.47-2H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h13.5l123.64 136ZM228 56v130a4 4 0 0 1-8 0V56a4 4 0 0 0-4-4H98.52a4 4 0 1 1 0-8H216a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhChatCenteredSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredTextThinIcon],svg[ph-chat-centered-text-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 104a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m68-76v128a12 12 0 0 1-12 12h-62.75l-14.83 26a12 12 0 0 1-20.84 0l-14.83-26H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4h65.07a4 4 0 0 1 3.47 2l16 28a4 4 0 0 0 6.94 0l16-28a4 4 0 0 1 3.47-2H216a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhChatCenteredTextThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredThinIcon],svg[ph-chat-centered-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h62.75l14.83 26a12 12 0 0 0 20.84 0l14.83-26H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4h-65.07a4 4 0 0 0-3.47 2l-16 28a4 4 0 0 1-6.94 0l-16-28a4 4 0 0 0-3.47-2H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhChatCenteredThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleDotsThinIcon],svg[ph-chat-circle-dots-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 128a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-52-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m88 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m56 8a100 100 0 0 1-148.5 87.47l-35.69 11.9a12 12 0 0 1-15.18-15.18l11.9-35.69A100 100 0 1 1 228 128m-8 0a92 92 0 1 0-171.65 46.07a4 4 0 0 1 .33 3.27l-12.46 37.38a4 4 0 0 0 5.06 5.06l37.38-12.46a4 4 0 0 1 1.27-.21a4.05 4.05 0 0 1 2 .54A92 92 0 0 0 220 128"></svg:path>`,
})
export class PhChatCircleDotsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleSlashThinIcon],svg[ph-chat-circle-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38l12.83 14.07a100 100 0 0 0-17.3 119.74l-11.9 35.69a12 12 0 0 0 15.18 15.18l35.69-11.9a100 100 0 0 0 112.75-10.85L205 218.69a4 4 0 1 0 5.92-5.38ZM128 220a92 92 0 0 1-46.07-12.35a4 4 0 0 0-3.27-.33l-37.38 12.46a4 4 0 0 1-5.06-5.06l12.46-37.38a4 4 0 0 0-.33-3.27A92 92 0 0 1 63.22 62.69l123.64 136A91.75 91.75 0 0 1 128 220m100-92a100.3 100.3 0 0 1-11.9 47.36a4 4 0 0 1-3.53 2.1a3.9 3.9 0 0 1-1.89-.48a4 4 0 0 1-1.63-5.42A92 92 0 0 0 92.33 43.17a4 4 0 0 1-3.11-7.37A100.05 100.05 0 0 1 228 128"></svg:path>`,
})
export class PhChatCircleSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleTextThinIcon],svg[ph-chat-circle-text-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 112a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m68-12a100 100 0 0 1-148.5 87.47l-35.69 11.9a12 12 0 0 1-15.18-15.18l11.9-35.69A100 100 0 1 1 228 128m-8 0a92 92 0 1 0-171.65 46.07a4 4 0 0 1 .33 3.27l-12.46 37.38a4 4 0 0 0 5.06 5.06l37.38-12.46a4 4 0 0 1 1.27-.21a4.05 4.05 0 0 1 2 .54A92 92 0 0 0 220 128"></svg:path>`,
})
export class PhChatCircleTextThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleThinIcon],svg[ph-chat-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 0 0-87.47 148.5l-11.9 35.69a12 12 0 0 0 15.18 15.18l35.69-11.9A100 100 0 1 0 128 28m0 192a92 92 0 0 1-46.07-12.35a4.05 4.05 0 0 0-2-.54a4 4 0 0 0-1.27.21l-37.38 12.46a4 4 0 0 1-5.06-5.06l12.46-37.38a4 4 0 0 0-.33-3.27A92 92 0 1 1 128 220"></svg:path>`,
})
export class PhChatCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatDotsThinIcon],svg[ph-chat-dots-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 128a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-52-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m88 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m56-56v128a12 12 0 0 1-12 12H81.49l-33.73 29.13A11.9 11.9 0 0 1 40 236a12.2 12.2 0 0 1-5.1-1.14A11.89 11.89 0 0 1 28 224V64a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v160a4 4 0 0 0 6.56 3.08L77.38 197a4 4 0 0 1 2.62-1h136a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhChatDotsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatSlashThinIcon],svg[ph-chat-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38L53.5 52H40a12 12 0 0 0-12 12v160a11.89 11.89 0 0 0 6.93 10.88A12.1 12.1 0 0 0 40 236a12 12 0 0 0 7.74-2.87L81.49 204h110.19L205 218.69a4 4 0 0 0 3 1.31a4 4 0 0 0 3-6.69ZM80 196a4 4 0 0 0-2.61 1l-34.82 30a4 4 0 0 1-6.57-3V64a4 4 0 0 1 4-4h20.78l123.63 136ZM228 64v122a4 4 0 0 1-8 0V64a4 4 0 0 0-4-4H105.79a4 4 0 0 1 0-8H216a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhChatSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropDotsThinIcon],svg[ph-chat-teardrop-dots-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 128a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-52-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m88 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m52 4a96.11 96.11 0 0 1-96 96H48a12 12 0 0 1-12-12v-84a96 96 0 0 1 192 0m-8 0a88 88 0 0 0-176 0v84a4 4 0 0 0 4 4h84a88.1 88.1 0 0 0 88-88"></svg:path>`,
})
export class PhChatTeardropDotsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropSlashThinIcon],svg[ph-chat-teardrop-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38l15.62 17.14A95.4 95.4 0 0 0 36 124v84a12 12 0 0 0 12 12h84a96.34 96.34 0 0 0 57.11-18.83L205 218.69a4 4 0 1 0 5.92-5.38ZM132 212H48a4 4 0 0 1-4-4v-84a87.5 87.5 0 0 1 22-58.23l117.7 129.44A86.92 86.92 0 0 1 132 212m96-88a95.8 95.8 0 0 1-13.78 49.58a4 4 0 1 1-6.84-4.14A88 88 0 0 0 93.92 44.64a4 4 0 1 1-3.46-7.21A95 95 0 0 1 132 28a96.11 96.11 0 0 1 96 96"></svg:path>`,
})
export class PhChatTeardropSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropTextThinIcon],svg[ph-chat-teardrop-text-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 112a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h68a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h68a4 4 0 0 0 0-8m64-16a96.11 96.11 0 0 1-96 96H48a12 12 0 0 1-12-12v-84a96 96 0 0 1 192 0m-8 0a88 88 0 0 0-176 0v84a4 4 0 0 0 4 4h84a88.1 88.1 0 0 0 88-88"></svg:path>`,
})
export class PhChatTeardropTextThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropThinIcon],svg[ph-chat-teardrop-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 28a96.11 96.11 0 0 0-96 96v84a12 12 0 0 0 12 12h84a96 96 0 0 0 0-192m0 184H48a4 4 0 0 1-4-4v-84a88 88 0 1 1 88 88"></svg:path>`,
})
export class PhChatTeardropThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTextThinIcon],svg[ph-chat-text-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 52H40a12 12 0 0 0-12 12v160a11.89 11.89 0 0 0 6.93 10.88A12.2 12.2 0 0 0 40 236a11.9 11.9 0 0 0 7.69-2.83L81.49 204H216a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H80a4 4 0 0 0-2.62 1l-34.82 30.06A4 4 0 0 1 36 224V64a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-56-80a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhChatTextThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatThinIcon],svg[ph-chat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 52H40a12 12 0 0 0-12 12v160a11.89 11.89 0 0 0 6.93 10.88A12.2 12.2 0 0 0 40 236a11.9 11.9 0 0 0 7.69-2.83L81.49 204H216a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H80a4 4 0 0 0-2.62 1l-34.82 30.06A4 4 0 0 1 36 224V64a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhChatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsCircleThinIcon],svg[ph-chats-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.79 186.39a76 76 0 0 0-61-110.07a76 76 0 1 0-138.58 62.07L20.5 164.6a12 12 0 0 0 14.9 14.9l26.21-7.71a75.9 75.9 0 0 0 27.6 7.9a76 76 0 0 0 105.18 40.1l26.21 7.71a12 12 0 0 0 14.9-14.9ZM60.9 163.66l-27.76 8.17a4 4 0 0 1-5-5l8.17-27.76a4.07 4.07 0 0 0-.31-3A68 68 0 1 1 63.92 164a4.06 4.06 0 0 0-3.02-.34m165.92 55.16a4 4 0 0 1-4 1l-27.76-8.17a4.07 4.07 0 0 0-3 .31A68 68 0 0 1 98 180a76 76 0 0 0 71.5-95.28a68 68 0 0 1 50.5 99.36a4.07 4.07 0 0 0-.31 3l8.17 27.76a4 4 0 0 1-1.04 3.98"></svg:path>`,
})
export class PhChatsCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsTeardropThinIcon],svg[ph-chats-teardrop-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166.76 76.32A76 76 0 0 0 20 104v64a12 12 0 0 0 12 12h57.33A76.13 76.13 0 0 0 160 228h64a12 12 0 0 0 12-12v-64a76 76 0 0 0-69.24-75.68M28 168v-64a68 68 0 1 1 68 68H32a4 4 0 0 1-4-4m200 48a4 4 0 0 1-4 4h-64a68.16 68.16 0 0 1-62-40a76 76 0 0 0 71.5-95.33A68 68 0 0 1 228 152Z"></svg:path>`,
})
export class PhChatsTeardropThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsThinIcon],svg[ph-chats-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 84h-36V48a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v128a4 4 0 0 0 4 4a4 4 0 0 0 2.51-.89L73 148h3v36a12 12 0 0 0 12 12h95l38.49 31.11a4 4 0 0 0 2.51.89a4 4 0 0 0 4-4V96a12 12 0 0 0-12-12M71.58 140a4 4 0 0 0-2.51.89L36 167.62V48a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v88a4 4 0 0 1-4 4ZM220 215.62l-33.07-26.73a4 4 0 0 0-2.51-.89H88a4 4 0 0 1-4-4v-36h84a12 12 0 0 0 12-12V92h36a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhChatsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckCircleThinIcon],svg[ph-check-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.83 101.17a4 4 0 0 1 0 5.66l-56 56a4 4 0 0 1-5.66 0l-24-24a4 4 0 0 1 5.66-5.66L112 154.34l53.17-53.17a4 4 0 0 1 5.66 0M228 128A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92a92.1 92.1 0 0 0 92-92"></svg:path>`,
})
export class PhCheckCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckFatThinIcon],svg[ph-check-fat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.47 71.09l-24-23.58a12 12 0 0 0-17 0L104 141.83l-39.5-38.32a12 12 0 0 0-17 0l-24 24a12 12 0 0 0 0 17l71.61 72a12 12 0 0 0 17 0L240.49 88.08a12 12 0 0 0-.02-16.99m-5.63 11.34l-128.41 128.4a4 4 0 0 1-5.65 0l-71.61-72a4 4 0 0 1 0-5.66l24-24A3.94 3.94 0 0 1 56 108a4.1 4.1 0 0 1 2.89 1.21l42.35 41.08a4 4 0 0 0 5.59 0l98.37-97.1a4 4 0 0 1 5.68 0l24 23.58a4 4 0 0 1-.04 5.66"></svg:path>`,
})
export class PhCheckFatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareOffsetThinIcon],svg[ph-check-square-offset-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 48v160a12 12 0 0 1-12 12h-72a4 4 0 0 1 0-8h72a4 4 0 0 0 4-4V48a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v96a4 4 0 0 1-8 0V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12M117.17 157.17L64 210.34l-21.17-21.17a4 4 0 0 0-5.66 5.66l24 24a4 4 0 0 0 5.66 0l56-56a4 4 0 0 0-5.66-5.66"></svg:path>`,
})
export class PhCheckSquareOffsetThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareThinIcon],svg[ph-check-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.83 101.17a4 4 0 0 1 0 5.66l-56 56a4 4 0 0 1-5.66 0l-24-24a4 4 0 0 1 5.66-5.66L112 154.34l53.17-53.17a4 4 0 0 1 5.66 0M220 48v160a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v160a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhCheckSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckThinIcon],svg[ph-check-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 74.83l-128 128a4 4 0 0 1-5.66 0l-56-56a4 4 0 0 1 5.66-5.66L96 194.34L221.17 69.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhCheckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckerboardThinIcon],svg[ph-checkerboard-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m-14.34 88L132 62.34V44h18.34L212 105.66V124ZM132 73.66L182.34 124H132ZM212 48v46.34L161.66 44H208a4 4 0 0 1 4 4M48 44h76v80H44V48a4 4 0 0 1 4-4m57.66 168L44 150.34V132h18.34L124 193.66V212ZM124 182.34L73.66 132H124ZM44 208v-46.34L94.34 212H48a4 4 0 0 1-4-4m164 4h-76v-80h80v76a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhCheckerboardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChecksThinIcon],svg[ph-checks-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m146.8 82.85l-89.6 88a4 4 0 0 1-5.6 0l-38.4-37.71a4 4 0 0 1 5.6-5.71l35.6 35l86.8-85.24a4 4 0 0 1 5.6 5.7Zm96-5.65a4 4 0 0 0-5.65 0l-86.8 85.24l-21.63-21.24a4 4 0 1 0-5.61 5.7l24.44 24a4 4 0 0 0 5.6 0l89.6-88a4 4 0 0 0 .1-5.7Z"></svg:path>`,
})
export class PhChecksThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheersThinIcon],svg[ph-cheers-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m215 217.8l-21.5 5.77l-12.35-46.06a36.06 36.06 0 0 0 21.66-42.84c-12.45-46.43-38.31-87.12-39.4-88.83a4 4 0 0 0-4.41-1.72l-26.94 6.73c.23-11.53-.09-18.84-.09-19a4 4 0 0 0-3-3.7l-32-8a4 4 0 0 0-4.34 1.72c-1.09 1.71-26.95 42.4-39.4 88.83a36.06 36.06 0 0 0 21.66 42.84l-12.35 46.03L41 193.8a4 4 0 0 0-2 7.73l48 12.86a3.8 3.8 0 0 0 1 .14a4 4 0 0 0 1-7.86l-18.77-5l12.35-46.07a35.8 35.8 0 0 0 40.18-26.34c1.2-4.92 2.25-9.87 3.17-14.81a275 275 0 0 0 7.25 38.89A36.06 36.06 0 0 0 168 180a35 35 0 0 0 5.38-.43l12.35 46.07l-18.77 5a4 4 0 0 0 1 7.86a3.8 3.8 0 0 0 1-.14l48-12.86a4 4 0 0 0-1.96-7.7M158.13 52.59c2.79 4.6 9.11 15.4 16.07 29.74l-42 10.5c-.81-14.58-.61-26.31-.4-32.28v-1.39Zm-60.26-24l26.23 6.56c.09 4 .17 11.77-.17 21.87c-.06 1.18-.15 3.09-.22 5.63s-.27 5.26-.45 8L80.94 60.11C88.24 44.88 95 33.38 97.87 28.59M80.76 147A28 28 0 0 1 61 112.75A300 300 0 0 1 77.5 67.5l45.14 11.28a320 320 0 0 1-7.59 48.46A28 28 0 0 1 80.76 147m60.19 4.2a283 283 0 0 1-8.2-50.3l44.93-11.2A302.4 302.4 0 0 1 195 136.75a28 28 0 0 1-54 14.49Zm47.47-109.41a4 4 0 0 1 1.79-5.37l16-8a4 4 0 1 1 3.58 7.16l-16 8a4 4 0 0 1-5.37-1.79M228 72a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4M36.42 22.21a4 4 0 0 1 5.37-1.79l16 8a4 4 0 0 1-3.58 7.16l-16-8a4 4 0 0 1-1.79-5.37M40 68H24a4 4 0 0 1 0-8h16a4 4 0 0 1 0 8"></svg:path>`,
})
export class PhCheersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheeseThinIcon],svg[ph-cheese-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 36a4 4 0 0 0-1.15.17l-160 48A4 4 0 0 0 20 88v24a4 4 0 0 0 4 4h8a20.11 20.11 0 0 1 20 19.61a19.6 19.6 0 0 1-5.72 14.14A20.92 20.92 0 0 1 31.46 156H24a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h200a12 12 0 0 0 12-12V88a52.06 52.06 0 0 0-52-52m.57 8a44.06 44.06 0 0 1 43.24 40H51.25ZM196 104a28 28 0 1 1-53.29-12h50.58a28 28 0 0 1 2.71 12m-56 84H84v-4a28 28 0 0 1 56 0Zm88-4a4 4 0 0 1-4 4h-76v-4a36 36 0 0 0-72 0v4H28v-24h3.46A29 29 0 0 0 52 155.35a27.52 27.52 0 0 0 8-19.89A28.14 28.14 0 0 0 32 108h-4V92h106.07a36 36 0 1 0 67.86 0H228Z"></svg:path>`,
})
export class PhCheeseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChefHatThinIcon],svg[ph-chef-hat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 112a52.06 52.06 0 0 0-52-52a53 53 0 0 0-7.77.59a52 52 0 0 0-96.46 0A53 53 0 0 0 72 60a52 52 0 0 0-20 100v48a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-48a52.07 52.07 0 0 0 32-48m-40 96a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4v-45.41A52 52 0 0 0 72 164h112a52 52 0 0 0 12-1.41Zm-12-52h-18.88l6.76-27a4 4 0 0 0-7.76-1.94l-7.24 29H132V128a4 4 0 0 0-8 0v28H99.12l-7.24-29a4 4 0 1 0-7.76 2l6.76 27H72a44 44 0 0 1 0-88a45 45 0 0 1 5.34.33A51.7 51.7 0 0 0 76 80a4 4 0 0 0 8 0a44 44 0 0 1 88 0a4 4 0 0 0 8 0a51.7 51.7 0 0 0-1.34-11.67A45 45 0 0 1 184 68a44 44 0 0 1 0 88"></svg:path>`,
})
export class PhChefHatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCherriesThinIcon],svg[ph-cherries-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 76a67 67 0 0 0-9.94.74a88.1 88.1 0 0 0-21.95-26.3C107.61 21 57.55 27.74 55.43 28a4 4 0 0 0-1.65 7.29C73.74 48.64 82 71.09 85 92.08a68 68 0 1 0 56.12 110.29A68 68 0 1 0 176 76M66.62 35.27c16-.4 48 1.66 72.47 21.39a79.9 79.9 0 0 1 18.75 21.82a68.3 68.3 0 0 0-35 23.14a67.44 67.44 0 0 0-29.66-9.4c-3.3-24.44-12.35-43.85-26.56-56.95M88 220a60 60 0 0 1-2.09-119.95a177.8 177.8 0 0 1-1.28 39.8c-11.7-.93-17.56-6.44-17.8-6.68a4 4 0 0 0-5.66 5.66c.38.37 9.37 9.17 26.83 9.17s26.45-8.8 26.83-9.17a4 4 0 0 0-5.64-5.68c-.25.25-5.65 5.35-16.43 6.58A183.7 183.7 0 0 0 94 100.3A60 60 0 0 1 88 220m88-16a59.75 59.75 0 0 1-30.24-8.17a67.86 67.86 0 0 0-16.31-89.68a60.25 60.25 0 0 1 32.22-20.4c5.17 11 8.49 23.68 9.93 38c-11-1.16-16.53-6.36-16.77-6.59a4 4 0 0 0-5.66 5.66c.38.37 9.37 9.17 26.83 9.17s26.45-8.8 26.83-9.17a4 4 0 0 0-5.64-5.68c-.26.25-6 5.68-17.55 6.68q-2.1-22.14-9.81-39.49A60 60 0 1 1 176 204"></svg:path>`,
})
export class PhCherriesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChurchThinIcon],svg[ph-church-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.06 148.57L188 125.74V104a4 4 0 0 0-2-3.47l-54-30.85V44h20a4 4 0 0 0 0-8h-20V16a4 4 0 0 0-8 0v20h-20a4 4 0 0 0 0 8h20v25.68l-54 30.85a4 4 0 0 0-2 3.47v21.74l-38.06 22.83A4 4 0 0 0 28 152v64a4 4 0 0 0 4 4h80a4 4 0 0 0 4-4v-48a12 12 0 0 1 24 0v48a4 4 0 0 0 4 4h80a4 4 0 0 0 4-4v-64a4 4 0 0 0-1.94-3.43M36 154.26l32-19.2V212H36Zm92-6.26a20 20 0 0 0-20 20v44H76V106.32l52-29.71l52 29.71V212h-32v-44a20 20 0 0 0-20-20m92 64h-32v-76.94l32 19.2Z"></svg:path>`,
})
export class PhChurchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteSlashThinIcon],svg[ph-cigarette-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.51 62c8.22-14.61 8.21-23.23 6.75-27.9a10.82 10.82 0 0 0-4.94-6.51a4 4 0 0 1-2-5.27a4 4 0 0 1 5.3-2c.66.29 6.52 3.09 9.16 11c3 9 .53 20.66-7.29 34.57c-8.22 14.61-8.21 23.24-6.75 27.91a10.74 10.74 0 0 0 4.94 6.5A4 4 0 0 1 208 108a4.1 4.1 0 0 1-1.63-.35c-.66-.3-6.52-3.09-9.16-11c-2.98-9.06-.52-20.65 7.3-34.65m-47.29 34.61c2.64 8 8.5 10.75 9.16 11a4.1 4.1 0 0 0 1.62.39a4 4 0 0 0 1.67-7.64a10.74 10.74 0 0 1-4.94-6.5c-1.46-4.67-1.47-13.3 6.75-27.91c7.82-13.91 10.28-25.54 7.29-34.57c-2.64-7.95-8.5-10.75-9.16-11a4 4 0 0 0-5.3 2a4 4 0 0 0 2 5.27a10.82 10.82 0 0 1 4.94 6.51c1.46 4.67 1.47 13.29-6.75 27.9c-7.81 13.94-10.27 25.53-7.28 34.55M211 213.31a4 4 0 1 1-5.92 5.38L177.14 188H32a12 12 0 0 1-12-12v-32a12 12 0 0 1 12-12h94.23L45 42.69a4 4 0 0 1 6-5.38ZM32 180h52v-40H32a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4m137.87 0l-36.37-40H92v40ZM224 132h-45.48a4 4 0 1 0 0 8H224a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-1.84a4 4 0 1 0 0 8H224a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCigaretteSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteThinIcon],svg[ph-cigarette-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 132H32a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12M28 176v-32a4 4 0 0 1 4-4h52v40H32a4 4 0 0 1-4-4m200 0a4 4 0 0 1-4 4H92v-40h132a4 4 0 0 1 4 4ZM204.51 62c8.22-14.61 8.21-23.23 6.75-27.9a10.82 10.82 0 0 0-4.94-6.51a4 4 0 0 1-2-5.26a4 4 0 0 1 5.3-2c.66.29 6.52 3.09 9.16 11c3 9 .53 20.66-7.29 34.57c-8.22 14.61-8.21 23.24-6.75 27.91a10.74 10.74 0 0 0 4.94 6.5A4 4 0 0 1 208 108a4.1 4.1 0 0 1-1.63-.35c-.66-.3-6.52-3.09-9.16-11c-2.98-9.06-.52-20.65 7.3-34.65m-40 0c8.22-14.61 8.21-23.23 6.75-27.9a10.82 10.82 0 0 0-4.94-6.51a4 4 0 0 1-2-5.26a4 4 0 0 1 5.3-2c.66.29 6.52 3.09 9.16 11c3 9 .53 20.66-7.29 34.57c-8.22 14.61-8.21 23.24-6.75 27.91a10.74 10.74 0 0 0 4.94 6.5A4 4 0 0 1 168 108a4.1 4.1 0 0 1-1.63-.35c-.66-.3-6.52-3.09-9.16-11c-2.98-9.06-.52-20.65 7.3-34.65"></svg:path>`,
})
export class PhCigaretteThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleDashedThinIcon],svg[ph-circle-dashed-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M155.87 36.06a4 4 0 0 1-3.87 3a4.3 4.3 0 0 1-1-.13a92 92 0 0 0-46 0a4 4 0 0 1-2-7.74a100.1 100.1 0 0 1 50 0a4 4 0 0 1 2.87 4.87M56.65 57.94a100.2 100.2 0 0 0-25 43.29a4 4 0 0 0 7.71 2.14a92.06 92.06 0 0 1 23-39.82a4 4 0 1 0-5.7-5.61Zm-17.29 94.68a4 4 0 0 0-7.71 2.14a100.1 100.1 0 0 0 25 43.31a4 4 0 1 0 5.71-5.61a91.9 91.9 0 0 1-23-39.84M151 217.09a92 92 0 0 1-46 0a4 4 0 0 0-2 7.75a100 100 0 0 0 50 0a4 4 0 1 0-2-7.74Zm70.58-67.25a4 4 0 0 0-4.92 2.79a92.1 92.1 0 0 1-23 39.82a4 4 0 1 0 5.7 5.61a100.2 100.2 0 0 0 25-43.29a4 4 0 0 0-2.78-4.93m-4.94-46.46a4 4 0 0 0 7.71-2.14a100.1 100.1 0 0 0-25-43.31a4 4 0 1 0-5.71 5.61a91.9 91.9 0 0 1 23 39.84"></svg:path>`,
})
export class PhCircleDashedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfThinIcon],svg[ph-circle-half-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m4 8.09a91.6 91.6 0 0 1 24 4.27v175.28a91.6 91.6 0 0 1-24 4.27Zm32 7.25a92.2 92.2 0 0 1 24 15v139.35a92.2 92.2 0 0 1-24 15ZM36 128a92.11 92.11 0 0 1 88-91.91v183.82A92.11 92.11 0 0 1 36 128m160 61.9V66.1a91.83 91.83 0 0 1 0 123.8"></svg:path>`,
})
export class PhCircleHalfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfTiltThinIcon],svg[ph-circle-half-tilt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.71 57.29A100 100 0 1 0 57.29 198.71A100 100 0 1 0 198.71 57.29M188 197.72a91.4 91.4 0 0 1-24 15v-115l24-24Zm-88-36.06l24-24v82.24a92 92 0 0 1-24-4.24Zm-8 51a91.7 91.7 0 0 1-26.15-16.89L92 169.66Zm40-83l24-24v110a91.8 91.8 0 0 1-24 4.24ZM36 128a92 92 0 0 1 154.16-67.81l-130 130A91.34 91.34 0 0 1 36 128m160 62V66a92 92 0 0 1 0 124"></svg:path>`,
})
export class PhCircleHalfTiltThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleNotchThinIcon],svg[ph-circle-notch-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a100 100 0 0 1-200 0c0-39.4 22.9-75.37 58.33-91.63a4 4 0 1 1 3.34 7.27C57.07 58.6 36 91.71 36 128a92 92 0 0 0 184 0c0-36.29-21.07-69.4-53.67-84.36a4 4 0 1 1 3.34-7.27C205.1 52.63 228 88.6 228 128"></svg:path>`,
})
export class PhCircleNotchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleThinIcon],svg[ph-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92"></svg:path>`,
})
export class PhCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyCheckThinIcon],svg[ph-circle-wavy-check-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 105.6c-4.1-4.2-8.2-8.6-10-12.8s-1.7-9.5-1.8-15.4c-.1-9-.3-19.2-6.8-25.8s-16.8-6.7-25.8-6.8c-5.9-.1-11.4-.2-15.4-1.8s-8.6-5.9-12.8-10c-6.7-6.4-13.6-13-22.4-13s-15.7 6.6-22.4 13c-4.2 4.1-8.6 8.2-12.8 10s-9.5 1.7-15.4 1.8c-9 .1-19.2.3-25.8 6.8s-6.7 16.8-6.8 25.8c-.1 5.9-.2 11.4-1.8 15.4s-5.9 8.6-10 12.8c-6.4 6.7-13 13.6-13 22.4s6.6 15.7 13 22.4c4.1 4.2 8.2 8.6 10 12.8s1.7 9.5 1.8 15.4c.1 9 .3 19.2 6.8 25.8s16.8 6.7 25.8 6.8c5.9.1 11.4.2 15.4 1.8s8.6 5.9 12.8 10c6.7 6.4 13.6 13 22.4 13s15.7-6.6 22.4-13c4.2-4.1 8.6-8.2 12.8-10s9.5-1.7 15.4-1.8c9-.1 19.2-.3 25.8-6.8s6.7-16.8 6.8-25.8c.1-5.9.2-11.4 1.8-15.4s5.9-8.6 10-12.8c6.4-6.7 13-13.6 13-22.4s-6.6-15.7-13-22.4Zm-5.8 39.3c-4.5 4.7-9.2 9.6-11.6 15.3s-2.3 11.9-2.4 18.3c-.1 8.2-.2 16-4.5 20.2s-12 4.4-20.2 4.5c-6.4.1-13 .2-18.3 2.4s-10.6 7.1-15.3 11.6S133.6 228 128 228s-11.1-5.2-16.9-10.8s-9.6-9.2-15.3-11.6s-11.9-2.3-18.3-2.4c-8.2-.1-16-.2-20.2-4.5s-4.4-12-4.5-20.2c-.1-6.4-.2-13-2.4-18.3s-7.1-10.6-11.6-15.3S28 133.6 28 128s5.2-11.1 10.8-16.9s9.2-9.6 11.6-15.3s2.3-11.9 2.4-18.3c.1-8.2.2-16 4.5-20.2s12-4.4 20.2-4.5c6.4-.1 13-.2 18.3-2.4s10.6-7.1 15.3-11.6S122.4 28 128 28s11.1 5.2 16.9 10.8s9.6 9.2 15.3 11.6s11.9 2.3 18.3 2.4c8.2.1 16 .2 20.2 4.5s4.4 12 4.5 20.2c.1 6.4.2 13 2.4 18.3s7.1 10.6 11.6 15.3S228 122.4 228 128s-5.2 11.1-10.8 16.9Zm-42.3-43.7a4.1 4.1 0 0 1-.1 5.7l-58.7 56a4.3 4.3 0 0 1-2.8 1.1a3.9 3.9 0 0 1-2.7-1.1l-29.4-28a4 4 0 1 1 5.6-5.8l26.5 25.4l55.9-53.4a4.1 4.1 0 0 1 5.7.1Z"></svg:path>`,
})
export class PhCircleWavyCheckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyQuestionThinIcon],svg[ph-circle-wavy-question-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 105.6c-4.1-4.2-8.2-8.6-10-12.8s-1.7-9.5-1.8-15.4c-.1-9-.3-19.2-6.8-25.8s-16.8-6.7-25.8-6.8c-5.9-.1-11.4-.2-15.4-1.8s-8.6-5.9-12.8-10c-6.7-6.4-13.6-13-22.4-13s-15.7 6.6-22.4 13c-4.2 4.1-8.6 8.2-12.8 10s-9.5 1.7-15.4 1.8c-9 .1-19.2.3-25.8 6.8s-6.7 16.8-6.8 25.8c-.1 5.9-.2 11.4-1.8 15.4s-5.9 8.6-10 12.8c-6.4 6.7-13 13.6-13 22.4s6.6 15.7 13 22.4c4.1 4.2 8.2 8.6 10 12.8s1.7 9.5 1.8 15.4c.1 9 .3 19.2 6.8 25.8s16.8 6.7 25.8 6.8c5.9.1 11.4.2 15.4 1.8s8.6 5.9 12.8 10c6.7 6.4 13.6 13 22.4 13s15.7-6.6 22.4-13c4.2-4.1 8.6-8.2 12.8-10s9.5-1.7 15.4-1.8c9-.1 19.2-.3 25.8-6.8s6.7-16.8 6.8-25.8c.1-5.9.2-11.4 1.8-15.4s5.9-8.6 10-12.8c6.4-6.7 13-13.6 13-22.4s-6.6-15.7-13-22.4Zm-5.8 39.3c-4.5 4.7-9.2 9.6-11.6 15.3s-2.3 11.9-2.4 18.3c-.1 8.2-.2 16-4.5 20.2s-12 4.4-20.2 4.5c-6.4.1-13 .2-18.3 2.4s-10.6 7.1-15.3 11.6S133.6 228 128 228s-11.1-5.2-16.9-10.8s-9.6-9.2-15.3-11.6s-11.9-2.3-18.3-2.4c-8.2-.1-16-.2-20.2-4.5s-4.4-12-4.5-20.2c-.1-6.4-.2-13-2.4-18.3s-7.1-10.6-11.6-15.3S28 133.6 28 128s5.2-11.1 10.8-16.9s9.2-9.6 11.6-15.3s2.3-11.9 2.4-18.3c.1-8.2.2-16 4.5-20.2s12-4.4 20.2-4.5c6.4-.1 13-.2 18.3-2.4s10.6-7.1 15.3-11.6S122.4 28 128 28s11.1 5.2 16.9 10.8s9.6 9.2 15.3 11.6s11.9 2.3 18.3 2.4c8.2.1 16 .2 20.2 4.5s4.4 12 4.5 20.2c.1 6.4.2 13 2.4 18.3s7.1 10.6 11.6 15.3S228 122.4 228 128s-5.2 11.1-10.8 16.9ZM136 180a8 8 0 1 1-8-8a8 8 0 0 1 8 8Zm24-72a32.1 32.1 0 0 1-28 31.8v4.2a4 4 0 0 1-8 0v-8a4 4 0 0 1 4-4a24 24 0 1 0-24-24a4 4 0 0 1-8 0a32 32 0 0 1 64 0Z"></svg:path>`,
})
export class PhCircleWavyQuestionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyThinIcon],svg[ph-circle-wavy-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 105.6c-4.1-4.2-8.2-8.6-10-12.8s-1.7-9.5-1.8-15.4c-.1-9-.3-19.2-6.8-25.8s-16.8-6.7-25.8-6.8c-5.9-.1-11.4-.2-15.4-1.8s-8.6-5.9-12.8-10c-6.7-6.4-13.6-13-22.4-13s-15.7 6.6-22.4 13c-4.2 4.1-8.6 8.2-12.8 10s-9.5 1.7-15.4 1.8c-9 .1-19.2.3-25.8 6.8s-6.7 16.8-6.8 25.8c-.1 5.9-.2 11.4-1.8 15.4s-5.9 8.6-10 12.8c-6.4 6.7-13 13.6-13 22.4s6.6 15.7 13 22.4c4.1 4.2 8.2 8.6 10 12.8s1.7 9.5 1.8 15.4c.1 9 .3 19.2 6.8 25.8s16.8 6.7 25.8 6.8c5.9.1 11.4.2 15.4 1.8s8.6 5.9 12.8 10c6.7 6.4 13.6 13 22.4 13s15.7-6.6 22.4-13c4.2-4.1 8.6-8.2 12.8-10s9.5-1.7 15.4-1.8c9-.1 19.2-.3 25.8-6.8s6.7-16.8 6.8-25.8c.1-5.9.2-11.4 1.8-15.4s5.9-8.6 10-12.8c6.4-6.7 13-13.6 13-22.4s-6.6-15.7-13-22.4Zm-5.8 39.3c-4.5 4.7-9.2 9.6-11.6 15.3s-2.3 11.9-2.4 18.3c-.1 8.2-.2 16-4.5 20.2s-12 4.4-20.2 4.5c-6.4.1-13 .2-18.3 2.4s-10.6 7.1-15.3 11.6S133.6 228 128 228s-11.1-5.2-16.9-10.8s-9.6-9.2-15.3-11.6s-11.9-2.3-18.3-2.4c-8.2-.1-16-.2-20.2-4.5c-4.3-4.2-4.4-12-4.5-20.2c-.1-6.4-.2-13-2.4-18.3s-7.1-10.6-11.6-15.3S28 133.6 28 128s5.2-11.1 10.8-16.9s9.2-9.6 11.6-15.3s2.3-11.9 2.4-18.3c.1-8.2.2-16 4.5-20.2s12-4.4 20.2-4.5c6.4-.1 13-.2 18.3-2.4s10.6-7.1 15.3-11.6S122.4 28 128 28s11.1 5.2 16.9 10.8s9.6 9.2 15.3 11.6s11.9 2.3 18.3 2.4c8.2.1 16 .2 20.2 4.5s4.4 12 4.5 20.2c.1 6.4.2 13 2.4 18.3s7.1 10.6 11.6 15.3S228 122.4 228 128s-5.2 11.1-10.8 16.9Z"></svg:path>`,
})
export class PhCircleWavyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyWarningThinIcon],svg[ph-circle-wavy-warning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 105.6c-4.1-4.2-8.2-8.6-10-12.8s-1.7-9.5-1.8-15.4c-.1-9-.3-19.2-6.8-25.8s-16.8-6.7-25.8-6.8c-5.9-.1-11.4-.2-15.4-1.8s-8.6-5.9-12.8-10c-6.7-6.4-13.6-13-22.4-13s-15.7 6.6-22.4 13c-4.2 4.1-8.6 8.2-12.8 10s-9.5 1.7-15.4 1.8c-9 .1-19.2.3-25.8 6.8s-6.7 16.8-6.8 25.8c-.1 5.9-.2 11.4-1.8 15.4s-5.9 8.6-10 12.8c-6.4 6.7-13 13.6-13 22.4s6.6 15.7 13 22.4c4.1 4.2 8.2 8.6 10 12.8s1.7 9.5 1.8 15.4c.1 9 .3 19.2 6.8 25.8s16.8 6.7 25.8 6.8c5.9.1 11.4.2 15.4 1.8s8.6 5.9 12.8 10c6.7 6.4 13.6 13 22.4 13s15.7-6.6 22.4-13c4.2-4.1 8.6-8.2 12.8-10s9.5-1.7 15.4-1.8c9-.1 19.2-.3 25.8-6.8s6.7-16.8 6.8-25.8c.1-5.9.2-11.4 1.8-15.4s5.9-8.6 10-12.8c6.4-6.7 13-13.6 13-22.4s-6.6-15.7-13-22.4Zm-5.8 39.3c-4.5 4.7-9.2 9.6-11.6 15.3s-2.3 11.9-2.4 18.3c-.1 8.2-.2 16-4.5 20.2s-12 4.4-20.2 4.5c-6.4.1-13 .2-18.3 2.4s-10.6 7.1-15.3 11.6S133.6 228 128 228s-11.1-5.2-16.9-10.8s-9.6-9.2-15.3-11.6s-11.9-2.3-18.3-2.4c-8.2-.1-16-.2-20.2-4.5s-4.4-12-4.5-20.2c-.1-6.4-.2-13-2.4-18.3s-7.1-10.6-11.6-15.3S28 133.6 28 128s5.2-11.1 10.8-16.9s9.2-9.6 11.6-15.3s2.3-11.9 2.4-18.3c.1-8.2.2-16 4.5-20.2s12-4.4 20.2-4.5c6.4-.1 13-.2 18.3-2.4s10.6-7.1 15.3-11.6S122.4 28 128 28s11.1 5.2 16.9 10.8s9.6 9.2 15.3 11.6s11.9 2.3 18.3 2.4c8.2.1 16 .2 20.2 4.5s4.4 12 4.5 20.2c.1 6.4.2 13 2.4 18.3s7.1 10.6 11.6 15.3S228 122.4 228 128s-5.2 11.1-10.8 16.9ZM124 136V80a4 4 0 0 1 8 0v56a4 4 0 0 1-8 0Zm12 36a8 8 0 1 1-8-8a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhCircleWavyWarningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesFourThinIcon],svg[ph-circles-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 44a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m96 8a36 36 0 1 0-36-36a36 36 0 0 0 36 36m0-64a28 28 0 1 1-28 28a28 28 0 0 1 28-28m-96 88a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m96-64a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhCirclesFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreePlusThinIcon],svg[ph-circles-three-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 44a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m96 8a36 36 0 1 0-36-36a36 36 0 0 0 36 36m0-64a28 28 0 1 1-28 28a28 28 0 0 1 28-28m-96 88a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m132-28a4 4 0 0 1-4 4h-28v28a4 4 0 0 1-8 0v-28h-28a4 4 0 0 1 0-8h28v-28a4 4 0 0 1 8 0v28h28a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCirclesThreePlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreeThinIcon],svg[ph-circles-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 76a40 40 0 1 0-40 40a40 40 0 0 0 40-40m-40 32a32 32 0 1 1 32-32a32 32 0 0 1-32 32m60 24a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 72a32 32 0 1 1 32-32a32 32 0 0 1-32 32M68 132a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 72a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class PhCirclesThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircuitryThinIcon],svg[ph-circuitry-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M88 156a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-44 52V48a4 4 0 0 1 4-4h36v104.4a20 20 0 1 0 8 0v-42.74l56 56V212H48a4 4 0 0 1-4-4m168 0a4 4 0 0 1-4 4h-52v-52a4 4 0 0 0-1.17-2.83L92 94.34V44h40v28a4 4 0 0 0 1.17 2.83L151.33 93a20 20 0 1 0 5.67-5.67l-17-17V44h68a4 4 0 0 1 4 4ZM168 92a12 12 0 1 1-12 12a12 12 0 0 1 12-12"></svg:path>`,
})
export class PhCircuitryThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCityThinIcon],svg[ph-city-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 212h-12V88a4 4 0 0 0-4-4h-64a4 4 0 0 0-4 4v44h-56V40a4 4 0 0 0-4-4H32a4 4 0 0 0-4 4v172H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M164 92h56v120h-56Zm-8 48v72h-56v-72ZM36 44h56v168H36Zm32 28v16a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0m0 48v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0m0 48v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0m56 16v-16a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0m64 0v-16a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0m0-48v-16a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0"></svg:path>`,
})
export class PhCityThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardTextThinIcon],svg[ph-clipboard-text-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 152a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4-36H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m52-68v168a12 12 0 0 1-12 12H56a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h38.08a44 44 0 0 1 67.84 0H200a12 12 0 0 1 12 12M92 64v4h72v-4a36 36 0 0 0-72 0m112-16a4 4 0 0 0-4-4h-32.83A43.7 43.7 0 0 1 172 64v8a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4v-8a43.7 43.7 0 0 1 4.83-20H56a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h144a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhClipboardTextThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardThinIcon],svg[ph-clipboard-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 36h-38.08a44 44 0 0 0-67.84 0H56a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m-72-8a36 36 0 0 1 36 36v4H92v-4a36 36 0 0 1 36-36m76 188a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h32.83A43.7 43.7 0 0 0 84 64v8a4 4 0 0 0 4 4h80a4 4 0 0 0 4-4v-8a43.7 43.7 0 0 0-4.83-20H200a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhClipboardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockAfternoonThinIcon],svg[ph-clock-afternoon-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m60-92a4 4 0 0 1-4 4h-46.34l33.17 33.17a4 4 0 0 1-5.66 5.66l-40-40A4 4 0 0 1 128 124h56a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhClockAfternoonThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockClockwiseThinIcon],svg[ph-clock-clockwise-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 80v45.74l38.06 22.83a4 4 0 0 1-4.12 6.86l-40-24A4 4 0 0 1 124 128V80a4 4 0 0 1 8 0m92-20a4 4 0 0 0-4 4v28.85C211.33 82.46 203 73 193.05 63a92 92 0 1 0-1.9 132a4 4 0 0 0-5.5-5.82a84 84 0 1 1 1.73-120.5C197.7 79 206.39 89 215.53 100H184a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4V64a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhClockClockwiseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCountdownThinIcon],svg[ph-clock-countdown-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 136.33A100.13 100.13 0 1 1 119.67 28a4 4 0 1 1 .66 8A92.13 92.13 0 1 0 220 135.67a4 4 0 1 1 8 .66M128 132h56a4 4 0 0 0 0-8h-52V72a4 4 0 0 0-8 0v56a4 4 0 0 0 4 4m32-88a8 8 0 1 0-8-8a8 8 0 0 0 8 8m36 24a8 8 0 1 0-8-8a8 8 0 0 0 8 8m24 36a8 8 0 1 0-8-8a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhClockCountdownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCounterClockwiseThinIcon],svg[ph-clock-counter-clockwise-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 80v45.74l38.06 22.83a4 4 0 0 1-4.12 6.86l-40-24A4 4 0 0 1 124 128V80a4 4 0 0 1 8 0m-4-44a91.42 91.42 0 0 0-65.07 27C53.05 73 44.66 82.47 36 92.86V64a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4h40a4 4 0 0 0 0-8H40.47C49.61 89 58.3 79 68.6 68.6a84 84 0 1 1 1.75 120.49a4 4 0 1 0-5.5 5.82A92 92 0 1 0 128 36"></svg:path>`,
})
export class PhClockCounterClockwiseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockThinIcon],svg[ph-clock-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m60-92a4 4 0 0 1-4 4h-56a4 4 0 0 1-4-4V72a4 4 0 0 1 8 0v52h52a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhClockThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockUserThinIcon],svg[ph-clock-user-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 72v49.53l42.21-21.11a4 4 0 1 1 3.58 7.16l-48 24a4.05 4.05 0 0 1-1.79.42a4 4 0 0 1-4-4V72a4 4 0 0 1 8 0m-4 148a92 92 0 1 1 92-92a4 4 0 0 0 8 0a100 100 0 1 0-100 100a4 4 0 0 0 0-8m99.86 3a4 4 0 1 1-7.73 2.05c-3.29-12.37-14.86-21-28.13-21s-24.84 8.65-28.14 21a4 4 0 0 1-3.86 3a3.7 3.7 0 0 1-1-.14a4 4 0 0 1-2.84-4.89a36.24 36.24 0 0 1 20.34-23.72a28 28 0 1 1 31 0a36.2 36.2 0 0 1 20.36 23.7M192 196a20 20 0 1 0-20-20a20 20 0 0 0 20 20"></svg:path>`,
})
export class PhClockUserThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClosedCaptioningThinIcon],svg[ph-closed-captioning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4Zm-112.54-38.29a4 4 0 0 1-1.46 5.47a36 36 0 1 1 0-62.36a4 4 0 0 1-4 6.92a28 28 0 1 0 0 48.52a4 4 0 0 1 5.46 1.45m80 0a4 4 0 0 1-1.46 5.47a36 36 0 1 1 0-62.36a4 4 0 0 1-4 6.92a28 28 0 1 0 0 48.52a4 4 0 0 1 5.46 1.45"></svg:path>`,
})
export class PhClosedCaptioningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowDownThinIcon],svg[ph-cloud-arrow-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 128a83.28 83.28 0 0 1-16.8 50.4a4 4 0 1 1-6.4-4.8A76 76 0 1 0 84 128a4 4 0 0 1-8 0a83.5 83.5 0 0 1 4.57-27.27A52 52 0 1 0 72 204h24a4 4 0 0 1 0 8H72A60 60 0 1 1 83.61 93.13A84 84 0 0 1 244 128m-62.83 45.17L156 198.34V128a4 4 0 0 0-8 0v70.34l-25.17-25.17a4 4 0 0 0-5.66 5.66l32 32a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0-5.66-5.66"></svg:path>`,
})
export class PhCloudArrowDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowUpThinIcon],svg[ph-cloud-arrow-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186.83 162.83a4 4 0 0 1-5.66 0L156 137.66V208a4 4 0 0 1-8 0v-70.34l-25.17 25.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1 0 5.66M160 44a84.09 84.09 0 0 0-76.39 49.13A60 60 0 1 0 72 212h40a4 4 0 0 0 0-8H72a52 52 0 1 1 8.57-103.27A83.5 83.5 0 0 0 76 128a4 4 0 0 0 8 0a76 76 0 1 1 106.4 69.68a4 4 0 0 0 1.6 7.66a3.9 3.9 0 0 0 1.6-.33A84 84 0 0 0 160 44"></svg:path>`,
})
export class PhCloudArrowUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudCheckThinIcon],svg[ph-cloud-check-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 44a84.11 84.11 0 0 0-76.41 49.12A60.7 60.7 0 0 0 72 92a60 60 0 0 0 0 120h88a84 84 0 0 0 0-168m0 160H72a52 52 0 1 1 8.55-103.3A83.7 83.7 0 0 0 76 128a4 4 0 0 0 8 0a76 76 0 1 1 76 76m34.83-94.83a4 4 0 0 1 0 5.66l-48 48a4 4 0 0 1-5.66 0l-24-24a4 4 0 0 1 5.66-5.66L144 154.34l45.17-45.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhCloudCheckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudFogThinIcon],svg[ph-cloud-fog-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 204H72a4 4 0 0 1 0-8h48a4 4 0 0 1 0 8m64-8h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m-24 32h-56a4 4 0 0 0 0 8h56a4 4 0 0 0 0-8m68-128a72.08 72.08 0 0 1-72 72H76a48 48 0 1 1 11.51-94.61A72.08 72.08 0 0 1 228 100m-8 0a64.06 64.06 0 0 0-128-3.77a4 4 0 0 1-8-.46a71.6 71.6 0 0 1 1.42-10.65A40 40 0 1 0 76 164h80a64.07 64.07 0 0 0 64-64"></svg:path>`,
})
export class PhCloudFogThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudLightningThinIcon],svg[ph-cloud-lightning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 20a72.19 72.19 0 0 0-68.49 49.39A48 48 0 1 0 76 164h44.94l-20.37 33.94A4 4 0 0 0 104 204h32.94l-20.37 33.94a4 4 0 0 0 6.86 4.12l24-40A4 4 0 0 0 144 196h-32.94l19.2-32H156a72 72 0 0 0 0-144m0 136H76a40 40 0 1 1 9.43-78.88A71.6 71.6 0 0 0 84 87.77a4 4 0 0 0 8 .46A64.06 64.06 0 1 1 156 156"></svg:path>`,
})
export class PhCloudLightningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudMoonThinIcon],svg[ph-cloud-moon-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 76a72 72 0 0 0-16 1.81a68 68 0 0 0-52.68-64.09a4 4 0 0 0-4.79 4.8a60.05 60.05 0 0 1-72 72a4 4 0 0 0-4.8 4.8a68.2 68.2 0 0 0 34.44 44.78A48 48 0 0 0 92 220h80a72 72 0 0 0 0-144M31.22 99.44A70 70 0 0 0 40 100a68.07 68.07 0 0 0 68-68a70 70 0 0 0-.56-8.79A59.66 59.66 0 0 1 148 80v.11a72.27 72.27 0 0 0-44.49 45.28A48.3 48.3 0 0 0 92 124a47.75 47.75 0 0 0-29.61 10.26a60.2 60.2 0 0 1-31.17-34.82M172 212H92a40 40 0 1 1 9.43-78.88a71.6 71.6 0 0 0-1.43 10.65a4 4 0 0 0 8 .46a64.3 64.3 0 0 1 2-12.67c0-.12.07-.24.09-.36A64.06 64.06 0 1 1 172 212"></svg:path>`,
})
export class PhCloudMoonThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudRainThinIcon],svg[ph-cloud-rain-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m155.33 194.22l-32 48a4 4 0 1 1-6.66-4.44l32-48a4 4 0 0 1 6.66 4.44M228 92a72.08 72.08 0 0 1-72 72h-25.86l-30.81 46.22a4 4 0 1 1-6.66-4.44L120.53 164H76a48 48 0 1 1 11.51-94.61A72.08 72.08 0 0 1 228 92m-8 0a64.06 64.06 0 0 0-128-3.77a4 4 0 0 1-8-.46a71.6 71.6 0 0 1 1.42-10.65A40 40 0 1 0 76 156h80a64.07 64.07 0 0 0 64-64"></svg:path>`,
})
export class PhCloudRainThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSlashThinIcon],svg[ph-cloud-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38l41.16 45.24q-1.38 2.55-2.59 5.19A60 60 0 1 0 72 212h88a83.2 83.2 0 0 0 32.88-6.69L205 218.69a4 4 0 1 0 5.92-5.38ZM160 204H72a52 52 0 0 1 0-104a53 53 0 0 1 8.54.72A84.2 84.2 0 0 0 76 128a4 4 0 0 0 8 0a76 76 0 0 1 7.9-33.76L187.13 199a75.4 75.4 0 0 1-27.13 5m84-76a83.86 83.86 0 0 1-21.34 55.94a4 4 0 1 1-6-5.33A76 76 0 0 0 115 66.75a4 4 0 0 1-4.74-6.45A84 84 0 0 1 244 128"></svg:path>`,
})
export class PhCloudSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSnowThinIcon],svg[ph-cloud-snow-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 196a8 8 0 1 1-8-8a8 8 0 0 1 8 8m32 8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m48-16a8 8 0 1 0 8 8a8 8 0 0 0-8-8m-96 40a8 8 0 1 0 8 8a8 8 0 0 0-8-8m88 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m72-136a72.08 72.08 0 0 1-72 72H76a48 48 0 1 1 11.51-94.61A72.08 72.08 0 0 1 228 92m-8 0a64.06 64.06 0 0 0-128-3.77a4 4 0 0 1-8-.46a71.6 71.6 0 0 1 1.42-10.65A40 40 0 1 0 76 156h80a64.07 64.07 0 0 0 64-64"></svg:path>`,
})
export class PhCloudSnowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSunThinIcon],svg[ph-cloud-sun-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 76a71.9 71.9 0 0 0-22.14 3.48A51.8 51.8 0 0 0 129 63.83l11.56-16.51a4 4 0 0 0-6.56-4.59l-11.55 16.51A52 52 0 0 0 96 52c-1.71 0-3.4.09-5.06.25l-3.5-19.85a4 4 0 0 0-7.88 1.39l3.5 19.84A52.2 52.2 0 0 0 55.85 71L39.32 59.42A4 4 0 0 0 34.73 66l16.53 11.54A51.63 51.63 0 0 0 44 104c0 1.69.09 3.37.25 5l-19.85 3.5a4 4 0 0 0 .69 7.94a4 4 0 0 0 .7-.06l19.85-3.5A52.1 52.1 0 0 0 54 134.6A48 48 0 0 0 84 220h80a72 72 0 0 0 0-144M52 104a44 44 0 0 1 82.33-21.61a72.23 72.23 0 0 0-38.82 43A48.3 48.3 0 0 0 84 124a47.76 47.76 0 0 0-23.4 6.11A44 44 0 0 1 52 104m112 108H84a40 40 0 1 1 9.43-78.88A71.6 71.6 0 0 0 92 143.77a4 4 0 0 0 8 .46a64.3 64.3 0 0 1 2-12.67c0-.12.07-.24.09-.36A64.06 64.06 0 1 1 164 212"></svg:path>`,
})
export class PhCloudSunThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudThinIcon],svg[ph-cloud-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 44a84.11 84.11 0 0 0-76.41 49.12A60.7 60.7 0 0 0 72 92a60 60 0 0 0 0 120h88a84 84 0 0 0 0-168m0 160H72a52 52 0 1 1 8.55-103.3A83.7 83.7 0 0 0 76 128a4 4 0 0 0 8 0a76 76 0 1 1 76 76"></svg:path>`,
})
export class PhCloudThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudWarningThinIcon],svg[ph-cloud-warning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 44a84.11 84.11 0 0 0-76.41 49.12A60.7 60.7 0 0 0 72 92a60 60 0 0 0 0 120h88a84 84 0 0 0 0-168m0 160H72a52 52 0 1 1 8.55-103.3A83.7 83.7 0 0 0 76 128a4 4 0 0 0 8 0a76 76 0 1 1 76 76m-4-76V88a4 4 0 0 1 8 0v40a4 4 0 0 1-8 0m12 36a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCloudWarningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudXThinIcon],svg[ph-cloud-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 44a84.11 84.11 0 0 0-76.41 49.12A60.7 60.7 0 0 0 72 92a60 60 0 0 0 0 120h88a84 84 0 0 0 0-168m0 160H72a52 52 0 1 1 8.55-103.3A83.7 83.7 0 0 0 76 128a4 4 0 0 0 8 0a76 76 0 1 1 76 76m26.83-89.17L165.66 136l21.17 21.17a4 4 0 0 1-5.66 5.66L160 141.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L154.34 136l-21.17-21.17a4 4 0 0 1 5.66-5.66L160 130.34l21.17-21.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhCloudXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloverThinIcon],svg[ph-clover-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.07 161.88C222 156.72 228 142.63 228 120s-6-36.72-17.93-41.88c-12.59-5.45-30.83-.39-54.22 15l-3 2l2-3c15.41-23.39 20.47-41.63 15-54.22C164.72 26 150.63 20 128 20s-36.72 6-41.88 17.93c-5.45 12.59-.39 30.83 15 54.22q1 1.53 2 3l-3-2c-23.39-15.41-41.63-20.47-54.22-15C34 83.28 28 97.37 28 120s6 36.72 17.93 41.88a27.5 27.5 0 0 0 11 2.12c11.46 0 26-5.73 43.26-17.14l3-2l-2 3c-15.41 23.39-20.47 41.63-15 54.21C91.28 214 105.37 220 128 220s36.72-6 41.88-17.94c3.81-8.8 2.47-20.39-3.95-34.56c15.65 20.5 31.41 46.36 38.19 73.5a4 4 0 0 0 3.88 3a4 4 0 0 0 1-.12a4 4 0 0 0 2.91-4.85c-8.41-33.65-29.45-64.78-48-87.2c13.82 8.09 25.62 12.17 35.26 12.17a27.5 27.5 0 0 0 10.9-2.12M93.47 41.11C97.24 32.41 108.86 28 128 28s30.76 4.41 34.53 13.11c8.21 18.94-19.86 56.41-34.53 73c-14.67-16.59-42.74-54.06-34.53-73M49.11 154.53C40.41 150.76 36 139.14 36 120s4.41-30.76 13.11-34.53a19.4 19.4 0 0 1 7.8-1.47c20.08 0 50.66 23.15 65.15 36c-16.54 14.67-54.01 42.74-72.95 34.53m113.42 44.36C158.76 207.59 147.14 212 128 212s-30.76-4.41-34.53-13.11C85.26 180 113.33 142.48 128 125.94c14.67 16.54 42.74 54.06 34.53 72.95m-28.42-78.74L134 120c16.54-14.68 54-42.75 72.94-34.53C215.59 89.24 220 100.86 220 120s-4.41 30.76-13.11 34.53c-18.89 8.18-56.16-19.67-72.78-34.38"></svg:path>`,
})
export class PhCloverThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClubThinIcon],svg[ph-club-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 92a53 53 0 0 0-8.26.65a52 52 0 1 0-95.48 0A53 53 0 0 0 72 92a52 52 0 1 0 31.38 93.48l-11.21 37.37A4 4 0 0 0 96 228h64a4 4 0 0 0 3.83-5.15l-11.21-37.37A52 52 0 1 0 184 92m0 96a43.92 43.92 0 0 1-36.73-19.77a4 4 0 0 0-7.17 3.36L154.62 220h-53.24l14.52-48.41a4 4 0 0 0-7.17-3.36a44 44 0 1 1-21.91-65.67a4 4 0 0 0 4.66-6a44 44 0 1 1 73 0a4 4 0 0 0 4.66 6A44 44 0 1 1 184 188"></svg:path>`,
})
export class PhClubThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoatHangerThinIcon],svg[ph-coat-hanger-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.18 174.4L134.67 96l27.72-20.8A4 4 0 0 0 164 72a36 36 0 1 0-72 0a4 4 0 0 0 8 0a28 28 0 0 1 55.92-2l-30.26 22.7l-.14.1l-108.7 81.6A12 12 0 0 0 24 196h208a12 12 0 0 0 7.2-21.6Zm-3.41 10.87A3.88 3.88 0 0 1 232 188H24a4 4 0 0 1-2.4-7.2L128 101l106.38 79.8a3.88 3.88 0 0 1 1.39 4.47"></svg:path>`,
})
export class PhCoatHangerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodaLogoThinIcon],svg[ph-coda-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 84a43.8 43.8 0 0 1 23.69 6.73A8 8 0 0 0 212 84V48a12 12 0 0 0-12-12H56a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-36a8 8 0 0 0-12.28-6.75c-8 5.14-14.82 7.09-23.56 6.74H176a44 44 0 0 1 0-88Zm-52 44a52.05 52.05 0 0 0 51.92 52c10.35.4 18.76-2 28.08-8v36a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4v36a52.24 52.24 0 0 0-80 44"></svg:path>`,
})
export class PhCodaLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeBlockThinIcon],svg[ph-code-block-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m61.17 98.83l-32-32a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 5.66L37.66 64l29.17 29.17a4 4 0 0 1-5.66 5.66m40 0a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0 0-5.66l-32-32a4 4 0 0 0-5.66 5.66L130.34 64l-29.17 29.17a4 4 0 0 0 0 5.66M200 44h-24a4 4 0 0 0 0 8h24a4 4 0 0 1 4 4v144a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-64a4 4 0 0 0-8 0v64a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCodeBlockThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeSimpleThinIcon],svg[ph-code-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90.66 67L22 128l68.64 61a4 4 0 0 1-5.32 6l-72-64a4 4 0 0 1 0-6l72-64a4 4 0 1 1 5.32 6Zm152 58l-72-64a4 4 0 1 0-5.32 6L234 128l-68.64 61a4 4 0 0 0 5.32 6l72-64a4 4 0 0 0 0-6Z"></svg:path>`,
})
export class PhCodeSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeThinIcon],svg[ph-code-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M66.56 91.07L22.25 128l44.31 36.93A4 4 0 0 1 64 172a3.94 3.94 0 0 1-2.56-.93l-48-40a4 4 0 0 1 0-6.14l48-40a4 4 0 0 1 5.12 6.14m176 33.86l-48-40a4 4 0 1 0-5.12 6.14L233.75 128l-44.31 36.93a4 4 0 1 0 5.12 6.14l48-40a4 4 0 0 0 0-6.14m-81.19-88.69a4 4 0 0 0-5.13 2.39l-64 176a4 4 0 0 0 2.39 5.13A4.1 4.1 0 0 0 96 220a4 4 0 0 0 3.76-2.63l64-176a4 4 0 0 0-2.39-5.13"></svg:path>`,
})
export class PhCodeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodepenLogoThinIcon],svg[ph-codepen-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234 92.55s-.05 0-.09-.07l-104-56a4 4 0 0 0-3.8 0l-104 56l-.11.08A4 4 0 0 0 20 96v64a4 4 0 0 0 2 3.45a1 1 0 0 0 .09.07l104 56a4 4 0 0 0 3.8 0l104-56a.3.3 0 0 0 .08-.07a4 4 0 0 0 2-3.45V96a4 4 0 0 0-1.97-3.45m-6 60.75L181 128l47-25.3Zm-55.43-29.84L132 101.61V46.7L223.56 96Zm-44.57 24L91.87 128L128 108.54L164.13 128ZM124 46.7v54.91l-40.57 21.85L32.44 96Zm-96 56L75 128l-47 25.3Zm55.43 29.84L124 154.39v54.91L32.44 160ZM132 209.3v-54.91l40.57-21.85l51 27.46Z"></svg:path>`,
})
export class PhCodepenLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodesandboxLogoThinIcon],svg[ph-codesandbox-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.76 69.66l-88-48.18a12 12 0 0 0-11.52 0l-88 48.18A12 12 0 0 0 28 80.18v95.64a12 12 0 0 0 6.24 10.52l88 48.18a11.95 11.95 0 0 0 11.52 0l88-48.18a12 12 0 0 0 6.24-10.52V80.18a12 12 0 0 0-6.24-10.52M128 123.44l-87.67-48L83.14 52l42.94 23.5a4 4 0 0 0 3.84 0L172.86 52l42.81 23.43Zm-1.92-94.94a3.94 3.94 0 0 1 3.84 0l34.61 19L128 67.44l-36.53-20ZM36 175.82v-43.35l40 21.9v45.72l-37.92-20.76a4 4 0 0 1-2.08-3.51m48 28.65V152a4 4 0 0 0-2.08-3.51L36 123.35V82.19l88 48.18v96Zm48 21.89v-96l88-48.18v41.16l-45.92 25.14A4 4 0 0 0 172 152v52.47Zm85.92-47L180 200.09v-45.72l40-21.9v43.35a4 4 0 0 1-2.08 3.51Z"></svg:path>`,
})
export class PhCodesandboxLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeBeanThinIcon],svg[ph-coffee-bean-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209 47c-32.36-32.35-95-22.33-139.7 22.34S14.63 176.66 47 209c12.82 12.81 30.38 19 49.71 19c29.46 0 63-14.34 90-41.32C231.35 142 241.37 79.34 209 47M75 75c25.47-25.46 57-39.09 84.26-39.09c14.51 0 27.83 3.87 38.43 11.84c-25.76 7.05-63 26.4-73.6 79.49c-10.5 52.52-49.25 69.26-72.91 74.58C23.77 172.12 34.16 115.81 75 75m106 106c-39 39-92.17 50.23-122.71 27.25c25.75-7 63-26.39 73.62-79.48c10.5-52.53 49.25-69.26 72.91-74.59C232.23 83.88 221.84 140.19 181 181"></svg:path>`,
})
export class PhCoffeeBeanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeThinIcon],svg[ph-coffee-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 56V24a4 4 0 0 1 8 0v32a4 4 0 0 1-8 0m36 4a4 4 0 0 0 4-4V24a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m32 0a4 4 0 0 0 4-4V24a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m92 60v8a36 36 0 0 1-36 36h-.41a92.53 92.53 0 0 1-35.76 48H208a4 4 0 0 1 0 8H32a4 4 0 0 1 0-8h36.17A92.34 92.34 0 0 1 28 136V88a4 4 0 0 1 4-4h176a36 36 0 0 1 36 36m-40 16V92H36v44a84.28 84.28 0 0 0 48.21 76h71.58A84.28 84.28 0 0 0 204 136m32-16a28 28 0 0 0-24-27.71V136a91.8 91.8 0 0 1-2.2 19.94A28 28 0 0 0 236 128Z"></svg:path>`,
})
export class PhCoffeeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinThinIcon],svg[ph-coin-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.79 67.42C185.9 57.48 158.27 52 128 52s-57.9 5.48-77.79 15.42C31 77 20 90.35 20 104v48c0 13.65 11 27 30.21 36.58C70.1 198.52 97.73 204 128 204s57.9-5.48 77.79-15.42C225 179 236 165.65 236 152v-48c0-13.65-11-27-30.21-36.58M128 60c61.77 0 100 22.84 100 44s-38.23 44-100 44s-100-22.84-100-44s38.23-44 100-44m-4 96v40c-22-.35-40.94-3.65-56-8.71v-39.64c16.23 5.1 35.44 7.97 56 8.35m8 0c20.56-.33 39.77-3.2 56-8.3v39.59c-15.06 5.06-33.95 8.36-56 8.71Zm-104-4v-28.08c5.15 6.19 12.67 11.89 22.21 16.66c3.08 1.54 6.36 2.95 9.79 4.28v39.38c-20.51-8.57-32-20.65-32-32.24m200 0c0 11.59-11.49 23.67-32 32.24v-39.38c3.43-1.33 6.71-2.74 9.79-4.28c9.54-4.77 17.06-10.47 22.21-16.66Z"></svg:path>`,
})
export class PhCoinThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinVerticalThinIcon],svg[ph-coin-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M195.05 58.1C183.73 38.69 168.44 28 152 28h-48c-16.44 0-31.73 10.69-43 30.1c-11 18.74-17 43.56-17 69.9s6 51.16 17 69.9c11.27 19.41 26.56 30.1 43 30.1h48c16.44 0 31.73-10.69 43.05-30.1C206 179.16 212 154.34 212 128s-6-51.16-16.95-69.9M191.27 188H152.1c7.24-16.14 11.37-35.53 11.84-56h40c-.5 20.77-4.94 40.28-12.67 56m-27.33-64c-.47-20.47-4.6-39.86-11.84-56h39.17c7.74 15.72 12.17 35.23 12.67 56ZM152 36c12.89 0 25.19 8.51 34.84 24h-38.73c-.35-.63-.7-1.28-1.06-1.9c-5.58-9.56-12.12-17-19.29-22.1ZM67.86 193.87C57.63 176.34 52 153 52 128s5.63-48.34 15.86-65.87C77.69 45.28 90.52 36 104 36s26.31 9.28 36.14 26.13C150.37 79.66 156 103.05 156 128s-5.63 48.34-15.86 65.87C130.31 210.72 117.48 220 104 220s-26.31-9.28-36.14-26.13M152 220h-24.24c7.17-5.09 13.71-12.54 19.29-22.1c.36-.62.71-1.27 1.06-1.9h38.73c-9.65 15.49-21.95 24-34.84 24"></svg:path>`,
})
export class PhCoinVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinsThinIcon],svg[ph-coins-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 93.11V84c0-22.43-36.9-40-84-40S12 61.57 12 84v40c0 19.14 26.86 34.72 64 38.89V172c0 22.43 36.9 40 84 40s84-17.57 84-40v-40c0-18.88-26.13-34.63-64-38.89M236 132c0 15.45-30.54 32-76 32a165.7 165.7 0 0 1-28-2.34v-1.39c28.61-6.31 48-20 48-36.27v-22.83c32.22 3.83 56 16.76 56 30.83m-127.81 23.59Q102.3 156 96 156c-5.47 0-10.72-.25-15.73-.69H80q-6.24-.57-12-1.56V121.8a175 175 0 0 0 28 2.2a175 175 0 0 0 28-2.2v31.92a155 155 0 0 1-15.52 1.85ZM172 101.32V124c0 10.88-15.16 22.3-40 28.11v-31.84c17.63-3.89 31.75-10.58 40-18.95M96 52c45.46 0 76 16.55 76 32s-30.54 32-76 32s-76-16.55-76-32s30.54-32 76-32m-76 72v-22.68c8.25 8.37 22.37 15.06 40 19v31.84C35.16 146.3 20 134.88 20 124m64 48v-8.4c3.91.26 7.92.4 12 .4s8.06-.14 12-.39a124 124 0 0 0 16 4.63v31.87C99.16 194.3 84 182.88 84 172m48 29.72v-31.95a174.5 174.5 0 0 0 28 2.23a175 175 0 0 0 28-2.2v31.92a173 173 0 0 1-56 0M236 172c0 10.88-15.16 22.3-40 28.11v-31.84c17.63-3.89 31.75-10.58 40-19Z"></svg:path>`,
})
export class PhCoinsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusLeftThinIcon],svg[ph-columns-plus-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 36h-24a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4Zm68-172h-24a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4ZM68 128a4 4 0 0 1-4 4H44v20a4 4 0 0 1-8 0v-20H16a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhColumnsPlusLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusRightThinIcon],svg[ph-columns-plus-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 36H56a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4Zm68-172h-24a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4Zm88-80a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhColumnsPlusRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsThinIcon],svg[ph-columns-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 36H64a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4Zm84-172h-40a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhColumnsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCommandThinIcon],svg[ph-command-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 148h-24v-40h24a32 32 0 1 0-32-32v24h-40V76a32 32 0 1 0-32 32h24v40H76a32 32 0 1 0 32 32v-24h40v24a32 32 0 1 0 32-32m-24-72a24 24 0 1 1 24 24h-24ZM52 76a24 24 0 0 1 48 0v24H76a24 24 0 0 1-24-24m48 104a24 24 0 1 1-24-24h24Zm8-72h40v40h-40Zm72 96a24 24 0 0 1-24-24v-24h24a24 24 0 0 1 0 48"></svg:path>`,
})
export class PhCommandThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassRoseThinIcon],svg[ph-compass-rose-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249 124.12l-29.68-7.42a91.84 91.84 0 0 0-80-80L131.88 7a4 4 0 0 0-7.76 0l-7.42 29.71a91.84 91.84 0 0 0-80 80L7 124.12a4 4 0 0 0 0 7.76l29.68 7.42a91.84 91.84 0 0 0 80 80l7.44 29.7a4 4 0 0 0 7.76 0l7.42-29.68a91.84 91.84 0 0 0 80-80l29.7-7.44a4 4 0 0 0 0-7.76m-38.05-9.51L155.3 100.7l-13.91-55.62a83.85 83.85 0 0 1 69.53 69.53ZM128 24.49l19.57 78.28L128 122.34l-19.57-19.57Zm-13.39 20.59L100.7 100.7l-55.62 13.91a83.85 83.85 0 0 1 69.53-69.53m-11.84 63.35L122.34 128l-19.57 19.57L24.49 128Zm-57.69 33l55.62 13.87l13.91 55.62a83.85 83.85 0 0 1-69.53-69.53ZM128 231.51l-19.57-78.28L128 133.66l19.57 19.57Zm13.39-20.59l13.91-55.62l55.62-13.91a83.85 83.85 0 0 1-69.53 69.53m11.84-63.35L133.66 128l19.57-19.57L231.51 128Z"></svg:path>`,
})
export class PhCompassRoseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassThinIcon],svg[ph-compass-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m46.21-143.58l-64 32a4.08 4.08 0 0 0-1.79 1.79l-32 64A4 4 0 0 0 80 180a4.05 4.05 0 0 0 1.79-.42l64-32a4.08 4.08 0 0 0 1.79-1.79l32-64a4 4 0 0 0-5.37-5.37M141 141l-52.08 26L115 115l52.08-26Z"></svg:path>`,
})
export class PhCompassThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassToolThinIcon],svg[ph-compass-tool-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.56 121.82a4 4 0 1 0-7.12-3.64a84.05 84.05 0 0 1-38.58 37.16l-19.68-44.29A36 36 0 0 0 132 44.23V24a4 4 0 0 0-8 0v20.23a36 36 0 0 0-14.18 66.82L60.35 222.37a4 4 0 0 0 2 5.28A3.9 3.9 0 0 0 64 228a4 4 0 0 0 3.66-2.38l26.66-60A91.4 91.4 0 0 0 128 172a95.2 95.2 0 0 0 33.75-6.22l26.59 59.84A4 4 0 0 0 192 228a3.9 3.9 0 0 0 1.62-.35a4 4 0 0 0 2-5.28l-26.54-59.73a92 92 0 0 0 42.48-40.82M100 80a28 28 0 1 1 28 28a28 28 0 0 1-28-28m28 84a83.4 83.4 0 0 1-30.43-5.68l19.56-44a36 36 0 0 0 21.74 0l19.63 44.15A87.4 87.4 0 0 1 128 164"></svg:path>`,
})
export class PhCompassToolThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phComputerTowerThinIcon],svg[ph-computer-tower-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 72a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m44-60v176a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4v176a4 4 0 0 0 4 4h128a4 4 0 0 0 4-4Zm-68 132a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhComputerTowerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phConfettiThinIcon],svg[ph-confetti-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108.66 55.46a11.79 11.79 0 0 0-19.43 4.31l-52.5 144.38a11.81 11.81 0 0 0 11 15.85a11.9 11.9 0 0 0 4.08-.73l144.38-52.5a11.79 11.79 0 0 0 4.31-19.43Zm-6.53 137l-38.61-38.59l16.19-44.51l66.92 66.93Zm-53 19.28a3.81 3.81 0 0 1-4.87-4.87l16.27-44.72l33.32 33.32Zm146.8-55.25a3.77 3.77 0 0 1-2.42 2.74l-38.56 14l-72.23-72.16l14-38.56a3.77 3.77 0 0 1 2.74-2.42a4.3 4.3 0 0 1 .85-.09a3.65 3.65 0 0 1 2.69 1.12L194.88 153a3.78 3.78 0 0 1 1.03 3.51ZM220 24c0 9.68-5.85 28-28 28c-8.31 0-14.18 3.29-17.42 9.79A26.1 26.1 0 0 0 172 72a4 4 0 0 1-8 0a34.1 34.1 0 0 1 3.42-13.79C170.66 51.73 177.56 44 192 44c19.29 0 20-18 20-20a4 4 0 0 1 4-4a4 4 0 0 1 4 4m-80 16V16a4 4 0 0 1 8 0v24a4 4 0 0 1-8 0m94.83 85.17a4 4 0 0 1-5.66 5.66l-16-16a4 4 0 0 1 5.66-5.66Zm6.43-49.37l-24 8a4 4 0 0 1-1.26.2a4 4 0 0 1-1.27-7.79l24-8a4 4 0 0 1 2.53 7.59"></svg:path>`,
})
export class PhConfettiThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phContactlessPaymentThinIcon],svg[ph-contactless-payment-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M93.54 102.13a55.39 55.39 0 0 1 0 51.74A4 4 0 0 1 90 156a4.1 4.1 0 0 1-1.87-.46a4 4 0 0 1-1.67-5.41a46.73 46.73 0 0 0 0-44.26a4 4 0 1 1 7.08-3.74m50.58-33.66a4 4 0 0 0-1.65 5.41a114.67 114.67 0 0 1 0 108.24a4 4 0 1 0 7.06 3.76a122.65 122.65 0 0 0 0-115.76a4 4 0 0 0-5.41-1.65m-28 16a4 4 0 0 0-1.65 5.41a81 81 0 0 1 0 76.24a4 4 0 1 0 7.06 3.76a89 89 0 0 0 0-83.76a4 4 0 0 0-5.41-1.65M228 128A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92a92.1 92.1 0 0 0 92-92"></svg:path>`,
})
export class PhContactlessPaymentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phControlThinIcon],svg[ph-control-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.83 122.83a4 4 0 0 1-5.66 0L128 53.66l-69.17 69.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0l72 72a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhControlThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookieThinIcon],svg[ph-cookie-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161.66 166.34a8 8 0 1 1-11.32 0a8 8 0 0 1 11.32 0m-75.32-8a8 8 0 1 0 11.32 0a8 8 0 0 0-11.32 0m3.32-56a8 8 0 1 0 0 11.32a8 8 0 0 0 0-11.32m36.68 16a8 8 0 1 0 11.32 0a8 8 0 0 0-11.32 0M228 128A100 100 0 1 1 128 28a4 4 0 0 1 4 4a44.05 44.05 0 0 0 44 44a4 4 0 0 1 4 4a44.05 44.05 0 0 0 44 44a4 4 0 0 1 4 4m-8.08 3.84a52.08 52.08 0 0 1-47.78-48a52.08 52.08 0 0 1-48-47.78a92 92 0 1 0 95.76 95.76Z"></svg:path>`,
})
export class PhCookieThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookingPotThinIcon],svg[ph-cooking-pot-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 48V16a4 4 0 0 1 8 0v32a4 4 0 0 1-8 0m36 4a4 4 0 0 0 4-4V16a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m32 0a4 4 0 0 0 4-4V16a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m90.4 47.2L220 122v62a28 28 0 0 1-28 28H64a28 28 0 0 1-28-28v-62L5.6 99.2a4 4 0 0 1 4.8-6.4L36 112V80a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v32l25.6-19.2a4 4 0 1 1 4.8 6.4M212 84H44v100a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20Z"></svg:path>`,
})
export class PhCookingPotThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopySimpleThinIcon],svg[ph-copy-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 68H40a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h144a4 4 0 0 0 4-4V72a4 4 0 0 0-4-4m-4 144H44V76h136Zm40-172v144a4 4 0 0 1-8 0V44H72a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCopySimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyThinIcon],svg[ph-copy-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H88a4 4 0 0 0-4 4v44H40a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4h128a4 4 0 0 0 4-4v-44h44a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4m-52 176H44V92h120Zm48-48h-40V88a4 4 0 0 0-4-4H92V44h120Z"></svg:path>`,
})
export class PhCopyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyleftThinIcon],svg[ph-copyleft-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m44-92a44 44 0 0 1-79.2 26.41a4 4 0 0 1 6.4-4.81a36 36 0 1 0 0-43.2a4 4 0 0 1-6.4-4.81A44 44 0 0 1 172 128"></svg:path>`,
})
export class PhCopyleftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyrightThinIcon],svg[ph-copyright-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m35.2-65.59a44 44 0 1 1 0-52.82a4 4 0 0 1-6.4 4.81a36 36 0 1 0 0 43.2a4 4 0 0 1 6.4 4.81"></svg:path>`,
})
export class PhCopyrightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersInThinIcon],svg[ph-corners-in-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 96V48a4 4 0 0 1 8 0v44h44a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4m-60 60H48a4 4 0 0 0 0 8h44v44a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4m112 0h-48a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-44h44a4 4 0 0 0 0-8M96 44a4 4 0 0 0-4 4v44H48a4 4 0 0 0 0 8h48a4 4 0 0 0 4-4V48a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCornersInThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersOutThinIcon],svg[ph-corners-out-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 48v40a4 4 0 0 1-8 0V52h-36a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4M88 204H52v-36a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4h40a4 4 0 0 0 0-8m120-40a4 4 0 0 0-4 4v36h-36a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4M88 44H48a4 4 0 0 0-4 4v40a4 4 0 0 0 8 0V52h36a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhCornersOutThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCouchThinIcon],svg[ph-couch-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 108.7V72a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v36.7a12 12 0 0 0-8 11.3v48a12 12 0 0 0 12 12h12v20a4 4 0 0 0 8 0v-20h168v20a4 4 0 0 0 8 0v-20h12a12 12 0 0 0 12-12v-48a12 12 0 0 0-8-11.3M228 72v36h-12a12 12 0 0 0-12 12v20h-72V68h92a4 4 0 0 1 4 4M32 68h92v72H52v-20a12 12 0 0 0-12-12H28V72a4 4 0 0 1 4-4m204 100a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v24a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4v-24a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhCouchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCourtBasketballThinIcon],svg[ph-court-basketball-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 112h-12a36 36 0 0 1 0-72h12ZM28 92h12a36 36 0 0 1 0 72H28Zm0 100v-20h12a44 44 0 0 0 0-88H28V64a4 4 0 0 1 4-4h92v136H32a4 4 0 0 1-4-4m196 4h-92V60h92a4 4 0 0 1 4 4v20h-12a44 44 0 0 0 0 88h12v20a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhCourtBasketballThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowThinIcon],svg[ph-cow-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 192a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4m76-4h-16a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m-76-72a8 8 0 1 0 8 8a8 8 0 0 0-8-8m56 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m85.3 3.59A12 12 0 0 1 232 124h-36v38.08A36 36 0 0 1 176 228H80a36 36 0 0 1-20-65.92V124H24a12 12 0 0 1-9.32-4.41a11.82 11.82 0 0 1-2.47-9.85A52.11 52.11 0 0 1 63.22 68h13.12A52 52 0 0 1 52 24a4 4 0 0 1 8 0a44.05 44.05 0 0 0 44 44h48a44.05 44.05 0 0 0 44-44a4 4 0 0 1 8 0a52 52 0 0 1-24.34 44h13.12a52.11 52.11 0 0 1 51 41.74a11.82 11.82 0 0 1-2.48 9.85M60 116v-12a35.94 35.94 0 0 1 13.41-28H63.22a44.09 44.09 0 0 0-43.14 35.31a3.82 3.82 0 0 0 .81 3.21A4 4 0 0 0 24 116Zm116 48H80a28 28 0 0 0 0 56h96a28 28 0 0 0 0-56m12-5.94V104a28 28 0 0 0-28-28H96a28 28 0 0 0-28 28v54.06A35.9 35.9 0 0 1 80 156h96a35.9 35.9 0 0 1 12 2.06m47.92-46.75A44.09 44.09 0 0 0 192.78 76h-10.19A35.94 35.94 0 0 1 196 104v12h36a4 4 0 0 0 3.13-1.48a3.82 3.82 0 0 0 .79-3.21"></svg:path>`,
})
export class PhCowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowboyHatThinIcon],svg[ph-cowboy-hat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 124a4 4 0 0 0-3.39 1.88A175 175 0 0 1 193 151.81l-18.62-98A12 12 0 0 0 155 46.69l-24.5 20.44a4 4 0 0 1-4.94.05L100.9 46.64a12 12 0 0 0-19.29 7.15L63 151.81a175 175 0 0 1-19.6-25.93A4 4 0 0 0 40 124a36 36 0 0 0 0 72h176a36 36 0 0 0 0-72M89.48 55.28a4 4 0 0 1 6.37-2.44l24.65 20.54a12 12 0 0 0 15.06-.06l24.53-20.43a3.92 3.92 0 0 1 3.89-.63a4 4 0 0 1 2.55 3L181.11 132H74.89ZM40 188a28 28 0 0 1-2.15-55.92C58.3 164 80.59 180 97.9 188Zm88 0c-.27 0-11.78-.21-27.77-7.84a118.2 118.2 0 0 1-30.43-21.4L73.37 140h109.26l3.56 18.76a118.2 118.2 0 0 1-30.43 21.4c-15.99 7.63-27.5 7.84-27.76 7.84m88 0h-57.9c17.31-8 39.6-24 60.05-55.92A28 28 0 0 1 216 188"></svg:path>`,
})
export class PhCowboyHatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCpuThinIcon],svg[ph-cpu-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 100h-48a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4m-4 48h-40v-40h40Zm84 0h-20v-40h20a4 4 0 0 0 0-8h-20V56a12 12 0 0 0-12-12h-44V24a4 4 0 0 0-8 0v20h-40V24a4 4 0 0 0-8 0v20H56a12 12 0 0 0-12 12v44H24a4 4 0 0 0 0 8h20v40H24a4 4 0 0 0 0 8h20v44a12 12 0 0 0 12 12h44v20a4 4 0 0 0 8 0v-20h40v20a4 4 0 0 0 8 0v-20h44a12 12 0 0 0 12-12v-44h20a4 4 0 0 0 0-8m-28 52a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhCpuThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneThinIcon],svg[ph-crane-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.06 20.57a4 4 0 0 0-3.94-.1L103 84H32a12 12 0 0 0-12 12v104a12 12 0 0 0 12 12h88a12 12 0 0 0 12-12v-32a4 4 0 0 0-.17-1.15L108.77 90L220 30.67V160a4 4 0 0 1-4 4h-16a4 4 0 0 1-4-4v-8a4 4 0 0 0-8 0v8a12 12 0 0 0 12 12h16a12 12 0 0 0 12-12V24a4 4 0 0 0-1.94-3.43M101 92l21.6 72H60V92Zm-69 0h20v72H28V96a4 4 0 0 1 4-4m88 112H32a4 4 0 0 1-4-4v-28h96v28a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhCraneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneTowerThinIcon],svg[ph-crane-tower-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 84H106.47L83.58 38.21A4 4 0 0 0 80 36H48a4 4 0 0 0-4 4v44H24a4 4 0 0 0 0 8h20v120H24a4 4 0 0 0 0 8h104a4 4 0 0 0 0-8h-20V92h104v92a4 4 0 0 1-4 4h-16a4 4 0 0 1-4-4v-8a4 4 0 0 0-8 0v8a12 12 0 0 0 12 12h16a12 12 0 0 0 12-12V92h20a4 4 0 0 0 0-8M52 44h25.53l20 40H52Zm0 168v-56h48v56Zm48-64H52V92h48Z"></svg:path>`,
})
export class PhCraneTowerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCreditCardThinIcon],svg[ph-credit-card-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12M32 60h192a4 4 0 0 1 4 4v28H28V64a4 4 0 0 1 4-4m192 136H32a4 4 0 0 1-4-4v-92h200v92a4 4 0 0 1-4 4m-20-28a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m-64 0a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCreditCardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCricketThinIcon],svg[ph-cricket-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240.49 84.2L187.8 31.51a12 12 0 0 0-17 0L63.52 138.83a12 12 0 0 0 0 17L87 179.31l-49.83 49.86a4 4 0 0 0 5.66 5.66L92.69 185l23.51 23.51a12 12 0 0 0 17 0l107.29-107.34a12 12 0 0 0 0-16.97m-113 118.63a4 4 0 0 1-5.66 0l-23.49-23.52l32.49-32.48a4 4 0 0 0-5.66-5.66l-32.48 32.49l-23.52-23.52a4 4 0 0 1 0-5.66L105.66 108H164v58.34ZM234.83 95.51L172 158.34V104a4 4 0 0 0-4-4h-54.34l62.83-62.83a4 4 0 0 1 5.66 0l52.68 52.68a4 4 0 0 1 0 5.66M60 84a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-40a16 16 0 1 1-16 16a16 16 0 0 1 16-16"></svg:path>`,
})
export class PhCricketThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCropThinIcon],svg[ph-crop-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 192a4 4 0 0 1-4 4h-36v36a4 4 0 0 1-8 0v-36H64a4 4 0 0 1-4-4V68H24a4 4 0 0 1 0-8h36V24a4 4 0 0 1 8 0v164h164a4 4 0 0 1 4 4M96 68h92v92a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4H96a4 4 0 0 0 0 8"></svg:path>`,
})
export class PhCropThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrossThinIcon],svg[ph-cross-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 76h-44V32a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v44H56a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h44v92a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-92h44a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12m4 44a4 4 0 0 1-4 4h-48a4 4 0 0 0-4 4v96a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4v-96a4 4 0 0 0-4-4H56a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h48a4 4 0 0 0 4-4V32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v48a4 4 0 0 0 4 4h48a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhCrossThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairSimpleThinIcon],svg[ph-crosshair-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m4 191.91V184a4 4 0 0 0-8 0v35.91A92.13 92.13 0 0 1 36.09 132H72a4 4 0 0 0 0-8H36.09A92.13 92.13 0 0 1 124 36.09V72a4 4 0 0 0 8 0V36.09A92.13 92.13 0 0 1 219.91 124H184a4 4 0 0 0 0 8h35.91A92.13 92.13 0 0 1 132 219.91"></svg:path>`,
})
export class PhCrosshairSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairThinIcon],svg[ph-crosshair-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 124h-12.09A92.13 92.13 0 0 0 132 36.09V24a4 4 0 0 0-8 0v12.09A92.13 92.13 0 0 0 36.09 124H24a4 4 0 0 0 0 8h12.09A92.13 92.13 0 0 0 124 219.91V232a4 4 0 0 0 8 0v-12.09A92.13 92.13 0 0 0 219.91 132H232a4 4 0 0 0 0-8m-100 87.9V200a4 4 0 0 0-8 0v11.9A84.11 84.11 0 0 1 44.1 132H56a4 4 0 0 0 0-8H44.1A84.11 84.11 0 0 1 124 44.1V56a4 4 0 0 0 8 0V44.1a84.11 84.11 0 0 1 79.9 79.9H200a4 4 0 0 0 0 8h11.9a84.11 84.11 0 0 1-79.9 79.9M128 92a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhCrosshairThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownCrossThinIcon],svg[ph-crown-cross-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 60c-15.15 0-29.15 5.06-39.43 14.25a49.3 49.3 0 0 0-8.57 10V36h20a4 4 0 0 0 0-8h-20V8a4 4 0 0 0-8 0v20h-20a4 4 0 0 0 0 8h20v48.26a49.3 49.3 0 0 0-8.57-10C105.15 65.06 91.15 60 76 60a56.06 56.06 0 0 0-56 56c0 28.36 13.79 46.38 25.37 56.51A85.6 85.6 0 0 0 68 186.74V208a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12v-21.26a85.6 85.6 0 0 0 22.63-14.23C222.21 162.38 236 144.36 236 116a56.06 56.06 0 0 0-56-56m25.59 106.29a75.5 75.5 0 0 1-22.85 13.92A4 4 0 0 0 180 184v24a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4v-24a4 4 0 0 0-2.73-3.79a75.4 75.4 0 0 1-22.86-13.92C35.54 153.17 28 136.25 28 116a48.05 48.05 0 0 1 48-48c27.81 0 48 18.5 48 44v64a4 4 0 0 0 8 0v-64c0-25.5 20.19-44 48-44a48.05 48.05 0 0 1 48 48c0 20.25-7.54 37.17-22.41 50.29"></svg:path>`,
})
export class PhCrownCrossThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownSimpleThinIcon],svg[ph-crown-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.18 77.21A11.89 11.89 0 0 0 215 80.08l-37.81 40.76L138.9 35a12 12 0 0 0-21.82.05l-38.27 85.79L41 80.08a12 12 0 0 0-20.81 10v.15l22.69 103.9A12 12 0 0 0 54.71 204h146.58a12 12 0 0 0 11.8-9.83l22.69-103.9v-.15a11.89 11.89 0 0 0-6.6-12.91m-1.24 11.45l-22.68 103.88v.16a4 4 0 0 1-3.94 3.3H54.71a4 4 0 0 1-3.94-3.3v-.16L28.06 88.66a4 4 0 0 1 7-3.26a.3.3 0 0 0 .08.08l42 45.24a4 4 0 0 0 6.59-1.09l40.72-91.31a4 4 0 0 1 7.24 0l40.74 91.35a4 4 0 0 0 6.59 1.09l42-45.24a.3.3 0 0 0 .08-.08a4 4 0 0 1 7 3.26Z"></svg:path>`,
})
export class PhCrownSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownThinIcon],svg[ph-crown-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 80a24 24 0 1 0-42 15.83l-33 40.54l-27.9-64.28a24 24 0 1 0-26.2 0L87 136.37L54 95.83A24 24 0 1 0 35.94 104l15 90a12 12 0 0 0 11.84 10h130.44a12 12 0 0 0 11.84-10l15-90A24 24 0 0 0 244 80M128 36a16 16 0 1 1-16 16a16 16 0 0 1 16-16M20 80a16 16 0 1 1 16 16a16 16 0 0 1-16-16m177.17 112.66a4 4 0 0 1-3.95 3.34H62.78a4 4 0 0 1-4-3.34l-15-90a23.4 23.4 0 0 0 4-1.8l37.12 45.66A4 4 0 0 0 88 148a3.3 3.3 0 0 0 .54 0a4 4 0 0 0 3.13-2.37l30.56-70.3a23.8 23.8 0 0 0 11.54 0l30.56 70.3a4 4 0 0 0 3.13 2.37a3.3 3.3 0 0 0 .54 0a4 4 0 0 0 3.1-1.48l37.09-45.64a23.4 23.4 0 0 0 4 1.8ZM220 96a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhCrownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeFocusThinIcon],svg[ph-cube-focus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 48v40a4 4 0 0 1-8 0V52h-36a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4M72 204H36v-36a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4h40a4 4 0 0 0 0-8m152-40a4 4 0 0 0-4 4v36h-36a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4M32 92a4 4 0 0 0 4-4V52h36a4 4 0 0 0 0-8H32a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4m154 71.47l-56 32a4 4 0 0 1-4 0l-56-32a4 4 0 0 1-2-3.47V96a4 4 0 0 1 2-3.47l56-32a4 4 0 0 1 4 0l56 32a4 4 0 0 1 2 3.47v64a4 4 0 0 1-2 3.47M80.06 96L128 123.39L175.94 96L128 68.61ZM76 157.68l48 27.43v-54.79l-48-27.43Zm104 0v-54.79l-48 27.43v54.79Z"></svg:path>`,
})
export class PhCubeFocusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeThinIcon],svg[ph-cube-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.76 69.66l-88-48.18a12 12 0 0 0-11.52 0l-88 48.18A12 12 0 0 0 28 80.18v95.64a12 12 0 0 0 6.24 10.52l88 48.18a11.95 11.95 0 0 0 11.52 0l88-48.18a12 12 0 0 0 6.24-10.52V80.18a12 12 0 0 0-6.24-10.52M126.08 28.5a3.94 3.94 0 0 1 3.84 0L216.67 76L128 124.52L39.33 76Zm-88 150.83a4 4 0 0 1-2.08-3.51V83.29l88 48.16v94.91Zm179.84 0l-85.92 47v-94.88l88-48.16v92.53a4 4 0 0 1-2.08 3.5Z"></svg:path>`,
})
export class PhCubeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeTransparentThinIcon],svg[ph-cube-transparent-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.92 95.22a2 2 0 0 0-.1-.33a3 3 0 0 0-.13-.42a2.6 2.6 0 0 0-.19-.37c-.06-.11-.11-.22-.17-.32a3.6 3.6 0 0 0-.5-.6l-56-56a2.3 2.3 0 0 0-.33-.27A4 4 0 0 0 160 36H40a4 4 0 0 0-4 4v120a4 4 0 0 0 .9 2.5a2.3 2.3 0 0 0 .27.33l56 56A4 4 0 0 0 96 220h120a4 4 0 0 0 4-4V96a4 4 0 0 0-.08-.78M164 49.66L206.34 92H164ZM92 206.34L49.66 164H92ZM92 156H44V49.66l48 48ZM49.66 44H156v48H97.66ZM156 100v56h-56v-56Zm-56 112v-48h58.34l48 48Zm112-5.66l-48-48V100h48Z"></svg:path>`,
})
export class PhCubeTransparentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyBtcThinIcon],svg[ph-currency-btc-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.27 117.21A40 40 0 0 0 148 44V24a4 4 0 0 0-8 0v20h-24V24a4 4 0 0 0-8 0v20H72a4 4 0 0 0 0 8h12v144H72a4 4 0 0 0 0 8h36v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h12a44 44 0 0 0 10.27-86.79M92 52h56a32 32 0 0 1 0 64H92Zm68 144H92v-72h68a36 36 0 0 1 0 72"></svg:path>`,
})
export class PhCurrencyBtcThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCircleDollarThinIcon],svg[ph-currency-circle-dollar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m36-72a24 24 0 0 1-24 24h-8v12a4 4 0 0 1-8 0v-12h-20a4 4 0 0 1 0-8h36a16 16 0 0 0 0-32h-24a24 24 0 0 1 0-48h8V72a4 4 0 0 1 8 0v12h20a4 4 0 0 1 0 8h-36a16 16 0 0 0 0 32h24a24 24 0 0 1 24 24"></svg:path>`,
})
export class PhCurrencyCircleDollarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCnyThinIcon],svg[ph-currency-cny-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 56a4 4 0 0 1 4-4h128a4 4 0 0 1 0 8H64a4 4 0 0 1-4-4m156 108a4 4 0 0 0-4 4v20h-36a20 20 0 0 1-20-20v-52h52a4 4 0 0 0 0-8H48a4 4 0 0 0 0 8h52v12a60.07 60.07 0 0 1-60 60a4 4 0 0 0 0 8a68.07 68.07 0 0 0 68-68v-12h40v52a28 28 0 0 0 28 28h40a4 4 0 0 0 4-4v-24a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCurrencyCnyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarSimpleThinIcon],svg[ph-currency-dollar-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 168a44.05 44.05 0 0 1-44 44h-20v20a4 4 0 0 1-8 0v-20h-20a44.05 44.05 0 0 1-44-44a4 4 0 0 1 8 0a36 36 0 0 0 36 36h48a36 36 0 0 0 0-72h-40a44 44 0 0 1 0-88h12V24a4 4 0 0 1 8 0v20h12a44.05 44.05 0 0 1 44 44a4 4 0 0 1-8 0a36 36 0 0 0-36-36h-32a36 36 0 0 0 0 72h40a44.05 44.05 0 0 1 44 44"></svg:path>`,
})
export class PhCurrencyDollarSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarThinIcon],svg[ph-currency-dollar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 124h-20V52h12a36 36 0 0 1 36 36a4 4 0 0 0 8 0a44.05 44.05 0 0 0-44-44h-12V24a4 4 0 0 0-8 0v20h-12a44 44 0 0 0 0 88h12v72h-20a36 36 0 0 1-36-36a4 4 0 0 0-8 0a44.05 44.05 0 0 0 44 44h20v20a4 4 0 0 0 8 0v-20h20a44 44 0 0 0 0-88m-40 0a36 36 0 0 1 0-72h12v72Zm40 80h-20v-72h20a36 36 0 0 1 0 72"></svg:path>`,
})
export class PhCurrencyDollarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEthThinIcon],svg[ph-currency-eth-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m219.15 125.53l-88-112a4 4 0 0 0-6.3 0l-88 112a4 4 0 0 0 0 4.94l88 112a4 4 0 0 0 6.3 0l88-112a4 4 0 0 0 0-4.94M132 27.57l77.71 98.9L132 161.79Zm-8 134.22l-77.71-35.32L124 27.57Zm0 8.79v57.85l-70.72-90Zm8 0l70.72-32.15l-70.72 90Z"></svg:path>`,
})
export class PhCurrencyEthThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEurThinIcon],svg[ph-currency-eur-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M187 195a4 4 0 0 1-.31 5.65A76 76 0 0 1 60.11 148H40a4 4 0 0 1 0-8h20v-24H40a4 4 0 0 1 0-8h20.11a76 76 0 0 1 126.56-52.65a4 4 0 1 1-5.34 6A68 68 0 0 0 68.13 108H136a4 4 0 0 1 0 8H68v24h52a4 4 0 0 1 0 8H68.13a68 68 0 0 0 113.2 46.69a4 4 0 0 1 5.67.31"></svg:path>`,
})
export class PhCurrencyEurThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyGbpThinIcon],svg[ph-currency-gbp-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 208a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h4a32 32 0 0 0 32-32v-40H56a4 4 0 0 1 0-8h36V84a48 48 0 0 1 78.53-37a4 4 0 1 1-5.09 6.17A40 40 0 0 0 100 84v40h36a4 4 0 0 1 0 8h-36v40a40 40 0 0 1-16 32h100a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCurrencyGbpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyInrThinIcon],svg[ph-currency-inr-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 80a4 4 0 0 1-4 4h-36.58a57 57 0 0 1 .58 8a56.06 56.06 0 0 1-56 56H82.35l80.34 73a4 4 0 1 1-5.38 5.92l-88-80A4 4 0 0 1 72 140h36a48 48 0 0 0 47.32-56H72a4 4 0 0 1 0-8h81.25A48.09 48.09 0 0 0 108 44H72a4 4 0 0 1 0-8h128a4 4 0 0 1 0 8h-63.19a56.24 56.24 0 0 1 24.85 32H200a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCurrencyInrThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyJpyThinIcon],svg[ph-currency-jpy-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M203.1 50.53L136.44 132H176a4 4 0 0 1 0 8h-44v24h44a4 4 0 0 1 0 8h-44v44a4 4 0 0 1-8 0v-44H80a4 4 0 0 1 0-8h44v-24H80a4 4 0 0 1 0-8h39.56L52.9 50.53a4 4 0 0 1 6.2-5.06l68.9 84.21l68.9-84.21a4 4 0 1 1 6.2 5.06"></svg:path>`,
})
export class PhCurrencyJpyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKrwThinIcon],svg[ph-currency-krw-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 132h-28.06l23.77-58.49a4 4 0 1 0-7.42-3l-25 61.51h-46.6l-25-61.51a4 4 0 0 0-7.42 0L99.31 132H52.69l-25-61.51a4 4 0 0 0-7.42 3L44.06 132H16a4 4 0 0 0 0 8h31.31l25 61.51a4 4 0 0 0 7.42 0l25-61.51h46.62l25 61.51a4 4 0 0 0 7.42 0l25-61.51H240a4 4 0 0 0 0-8M76 189.37L55.94 140h40.12ZM107.94 132L128 82.63L148.06 132ZM180 189.37L159.94 140h40.12Z"></svg:path>`,
})
export class PhCurrencyKrwThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKztThinIcon],svg[ph-currency-kzt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 96a4 4 0 0 1-4 4h-68v116a4 4 0 0 1-8 0V100H56a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4M56 60h144a4 4 0 0 0 0-8H56a4 4 0 0 0 0 8"></svg:path>`,
})
export class PhCurrencyKztThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyNgnThinIcon],svg[ph-currency-ngn-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 140h-20v-24h20a4 4 0 0 0 0-8h-20V46a4 4 0 0 0-8 0v62h-70.54L67.15 43.54A4 4 0 0 0 60 46v62H40a4 4 0 0 0 0 8h20v24H40a4 4 0 0 0 0 8h20v62a4 4 0 0 0 8 0v-62h70.54l50.31 64.46A4 4 0 0 0 192 214a3.9 3.9 0 0 0 1.3-.22A4 4 0 0 0 196 210v-62h20a4 4 0 0 0 0-8m-28-24v24h-45.56l-18.73-24ZM68 57.63L107.32 108H68ZM68 140v-24h45.56l18.73 24Zm120 58.37L148.68 148H188Z"></svg:path>`,
})
export class PhCurrencyNgnThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyRubThinIcon],svg[ph-currency-rub-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 36H88a4 4 0 0 0-4 4v100H56a4 4 0 0 0 0 8h28v24H56a4 4 0 0 0 0 8h28v36a4 4 0 0 0 8 0v-36h52a4 4 0 0 0 0-8H92v-24h56a56 56 0 0 0 0-112m0 104H92V44h56a48 48 0 0 1 0 96"></svg:path>`,
})
export class PhCurrencyRubThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorClickThinIcon],svg[ph-cursor-click-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 24v-8a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0m-76 76h8a4 4 0 0 0 0-8h-8a4 4 0 0 0 0 8m110.21-64.42a4 4 0 0 0 5.37-1.79l8-16a4 4 0 0 0-7.16-3.58l-8 16a4 4 0 0 0 1.79 5.37m-96 88.84l-16 8a4 4 0 0 0 3.58 7.16l16-8a4 4 0 1 0-3.58-7.16m186.28 62.41a12 12 0 0 1 0 17l-12.69 12.66a12 12 0 0 1-17 0l-51.31-51.31a3.93 3.93 0 0 0-3.58-1.11a4 4 0 0 0-2.89 2.27l-17.78 46.31a1 1 0 0 1-.07.16a11.85 11.85 0 0 1-10.91 7.19h-.59a11.88 11.88 0 0 1-10.8-8.23L36.6 51.68A12 12 0 0 1 51.68 36.6l160.08 52.27a12 12 0 0 1 1.05 22.33l-.16.07l-46.31 17.78a4 4 0 0 0-1.17 6.47Zm-5.66 5.66l-51.31-51.32a12 12 0 0 1 3.7-19.49l.16-.06l46.31-17.79a3.95 3.95 0 0 0-.42-7.35L49.2 44.21a4 4 0 0 0-5 5l52.28 160.06a4 4 0 0 0 7.36.42l17.78-46.31a1 1 0 0 1 .07-.16a12 12 0 0 1 8.76-7a12 12 0 0 1 2.24-.21a12 12 0 0 1 8.49 3.52l51.31 51.31a4 4 0 0 0 5.65 0l12.69-12.69a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhCursorClickThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorTextThinIcon],svg[ph-cursor-text-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 208a4 4 0 0 1-4 4h-16a36 36 0 0 1-32-19.54A36 36 0 0 1 96 212H80a4 4 0 0 1 0-8h16a28 28 0 0 0 28-28v-44h-20a4 4 0 0 1 0-8h20V80a28 28 0 0 0-28-28H80a4 4 0 0 1 0-8h16a36 36 0 0 1 32 19.54A36 36 0 0 1 160 44h16a4 4 0 0 1 0 8h-16a28 28 0 0 0-28 28v44h20a4 4 0 0 1 0 8h-20v44a28 28 0 0 0 28 28h16a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCursorTextThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorThinIcon],svg[ph-cursor-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M165.17 135.51a4 4 0 0 1 1.17-6.46l46.31-17.79l.16-.06a12 12 0 0 0-1.05-22.33L51.67 36.6A12 12 0 0 0 36.6 51.67l52.27 160.09a11.86 11.86 0 0 0 10.8 8.24h.58a11.86 11.86 0 0 0 11-7.19l.06-.16l17.79-46.31a4 4 0 0 1 6.47-1.17l51.31 51.32a12 12 0 0 0 17 0l12.69-12.69a12 12 0 0 0 0-17Zm45.66 62.63l-12.69 12.69a4 4 0 0 1-5.66 0l-51.31-51.31a12 12 0 0 0-8.48-3.52a12 12 0 0 0-2.24.21a12 12 0 0 0-8.77 7l-.06.16l-17.79 46.31a4 4 0 0 1-7.36-.42L44.2 49.19a4 4 0 0 1 5-5l160.07 52.28a4 4 0 0 1 .42 7.36l-46.31 17.78l-.16.07a12 12 0 0 0-3.71 19.49l51.32 51.31a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhCursorThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCylinderThinIcon],svg[ph-cylinder-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20c-38.13 0-68 17.57-68 40v136c0 22.43 29.87 40 68 40s68-17.57 68-40V60c0-22.43-29.87-40-68-40m0 8c32.52 0 60 14.65 60 32s-27.48 32-60 32s-60-14.65-60-32s27.48-32 60-32m60 168c0 17.35-27.48 32-60 32s-60-14.65-60-32V79.11C79.35 91.65 101.71 100 128 100s48.65-8.35 60-20.89Z"></svg:path>`,
})
export class PhCylinderThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDatabaseThinIcon],svg[ph-database-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192.14 42.55C174.94 33.17 152.16 28 128 28s-46.94 5.17-64.14 14.55C45.89 52.35 36 65.65 36 80v96c0 14.35 9.89 27.65 27.86 37.45c17.2 9.38 40 14.55 64.14 14.55s46.94-5.17 64.14-14.55c18-9.8 27.86-23.1 27.86-37.45V80c0-14.35-9.89-27.65-27.86-37.45M212 176c0 11.29-8.41 22.1-23.69 30.43C172.27 215.18 150.85 220 128 220s-44.27-4.82-60.31-13.57C52.41 198.1 44 187.29 44 176v-26.52c4.69 5.93 11.37 11.34 19.86 16c17.2 9.38 40 14.55 64.14 14.55s46.94-5.17 64.14-14.55c8.49-4.63 15.17-10 19.86-16Zm0-48c0 11.29-8.41 22.1-23.69 30.43C172.27 167.18 150.85 172 128 172s-44.27-4.82-60.31-13.57C52.41 150.1 44 139.29 44 128v-26.52c4.69 5.93 11.37 11.34 19.86 16c17.2 9.38 40 14.55 64.14 14.55s46.94-5.17 64.14-14.55c8.49-4.63 15.17-10 19.86-16Zm-23.69-17.57C172.27 119.18 150.85 124 128 124s-44.27-4.82-60.31-13.57C52.41 102.1 44 91.29 44 80s8.41-22.1 23.69-30.43C83.73 40.82 105.15 36 128 36s44.27 4.82 60.31 13.57C203.59 57.9 212 68.71 212 80s-8.41 22.1-23.69 30.43"></svg:path>`,
})
export class PhDatabaseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeskThinIcon],svg[ph-desk-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 68H8a4 4 0 0 0 0 8h12v116a4 4 0 0 0 8 0v-52h200v52a4 4 0 0 0 8 0V76h12a4 4 0 0 0 0-8M28 76h96v56H28Zm200 56h-96V76h96ZM92 104a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4m72 0a4 4 0 0 1 4-4h24a4 4 0 0 1 0 8h-24a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhDeskThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopThinIcon],svg[ph-desktop-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h76v24H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8h-28v-24h76a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20M48 52h160a12 12 0 0 1 12 12v84H36V64a12 12 0 0 1 12-12m160 136H48a12 12 0 0 1-12-12v-20h184v20a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDesktopThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopTowerThinIcon],svg[ph-desktop-tower-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 72a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m-4 28h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m36-52v160a12 12 0 0 1-12 12h-80a12 12 0 0 1-12-12v-20H92v24h20a4 4 0 0 1 0 8H64a4 4 0 0 1 0-8h20v-24H32a20 20 0 0 1-20-20V96a20 20 0 0 1 20-20h108V48a12 12 0 0 1 12-12h80a12 12 0 0 1 12 12M140 180V84H32a12 12 0 0 0-12 12v72a12 12 0 0 0 12 12Zm96-132a4 4 0 0 0-4-4h-80a4 4 0 0 0-4 4v160a4 4 0 0 0 4 4h80a4 4 0 0 0 4-4Zm-44 124a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhDesktopTowerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDetectiveThinIcon],svg[ph-detective-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 116h-30l-48.65-67a12 12 0 0 0-19-.51l-12.9 14.89l-.1.12a12 12 0 0 1-18.7 0l-.1-.12l-12.89-14.94a12 12 0 0 0-19 .51L38 116H8a4 4 0 0 0 0 8h240a4 4 0 0 0 0-8M93.13 53.65A4 4 0 0 1 96.26 52a4 4 0 0 1 3.2 1.5l.1.12l12.89 14.94A19.86 19.86 0 0 0 128 76a19.86 19.86 0 0 0 15.55-7.44l12.89-14.94l.1-.12a4.06 4.06 0 0 1 3.2-1.5a4 4 0 0 1 3.13 1.65L208.15 116H47.85ZM180 148a32 32 0 0 0-32 32h-40a32 32 0 1 0-1 8h42a32 32 0 1 0 31-40M76 204a24 24 0 1 1 24-24a24 24 0 0 1-24 24m104 0a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhDetectiveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevToLogoThinIcon],svg[ph-dev-to-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 60H24a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h208a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h208a4 4 0 0 1 4 4Zm-112-84v24h12a4 4 0 0 1 0 8h-12v24h20a4 4 0 0 1 0 8h-24a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h24a4 4 0 0 1 0 8Zm87.85-2.92l-18 64a4 4 0 0 1-7.7 0l-18-64a4 4 0 1 1 7.7-2.16L190 145.23l14.15-50.31a4 4 0 0 1 7.7 2.16M64 92h-8a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h8a28 28 0 0 0 28-28v-16a28 28 0 0 0-28-28m20 44a20 20 0 0 1-20 20h-4v-56h4a20 20 0 0 1 20 20Z"></svg:path>`,
})
export class PhDevToLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileCameraThinIcon],svg[ph-device-mobile-camera-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 20H80a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m12 196a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h96a12 12 0 0 1 12 12ZM136 60a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDeviceMobileCameraThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSlashThinIcon],svg[ph-device-mobile-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m211 213.31l-160-176a4 4 0 0 0-6 5.38l15 16.46V216a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20v-7.25l9 9.94a4 4 0 1 0 5.92-5.38ZM188 216a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12V68l120 132ZM72.7 24a4 4 0 0 1 4-4H176a20 20 0 0 1 20 20v110.83a4 4 0 1 1-8 0V40a12 12 0 0 0-12-12H76.7a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhDeviceMobileSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSpeakerThinIcon],svg[ph-device-mobile-speaker-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 20H80a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m12 196a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h96a12 12 0 0 1 12 12ZM164 56a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhDeviceMobileSpeakerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileThinIcon],svg[ph-device-mobile-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 20H80a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20M68 60h120v136H68Zm12-32h96a12 12 0 0 1 12 12v12H68V40a12 12 0 0 1 12-12m96 200H80a12 12 0 0 1-12-12v-12h120v12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDeviceMobileThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceRotateThinIcon],svg[ph-device-rotate-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m202.83 218.83l-24 24a4 4 0 0 1-5.66-5.66L190.34 220H80a20 20 0 0 1-20-20v-96a4 4 0 0 1 8 0v96a12 12 0 0 0 12 12h110.34l-17.17-17.17a4 4 0 0 1 5.66-5.66l24 24a4 4 0 0 1 0 5.66M80 68a4 4 0 0 0 2.83-6.83L65.66 44H176a12 12 0 0 1 12 12v96a4 4 0 0 0 8 0V56a20 20 0 0 0-20-20H65.66l17.17-17.17a4 4 0 0 0-5.66-5.66l-24 24a4 4 0 0 0 0 5.66l24 24A4 4 0 0 0 80 68"></svg:path>`,
})
export class PhDeviceRotateThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletCameraThinIcon],svg[ph-device-tablet-camera-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m12 180a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12ZM136 68a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDeviceTabletCameraThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletSpeakerThinIcon],svg[ph-device-tablet-speaker-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m12 180a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12ZM164 64a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhDeviceTabletSpeakerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletThinIcon],svg[ph-device-tablet-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M52 68h152v120H52Zm12-32h128a12 12 0 0 1 12 12v12H52V48a12 12 0 0 1 12-12m128 184H64a12 12 0 0 1-12-12v-12h152v12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDeviceTabletThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevicesThinIcon],svg[ph-devices-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 76h-20V64a20 20 0 0 0-20-20H40a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h116v12a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20V96a20 20 0 0 0-20-20M40 172a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h144a12 12 0 0 1 12 12v12h-20a20 20 0 0 0-20 20v76Zm196 20a12 12 0 0 1-12 12h-48a12 12 0 0 1-12-12V96a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12Zm-104 16a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m80-96a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhDevicesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondThinIcon],svg[ph-diamond-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.5 119.55l-96.05-96.06a12 12 0 0 0-16.9 0l-96 96.06a12 12 0 0 0 0 16.9l96.05 96.06a12 12 0 0 0 16.9 0l96.05-96.06a12 12 0 0 0 0-16.9Zm-5.66 11.24l-96.05 96.06a4 4 0 0 1-5.58 0l-96-96.06a3.94 3.94 0 0 1 0-5.58l96.05-96.06a4 4 0 0 1 5.58 0l96.05 96.06a3.94 3.94 0 0 1 0 5.58Z"></svg:path>`,
})
export class PhDiamondThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondsFourThinIcon],svg[ph-diamonds-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M125.17 106.83a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 0 5.66ZM128 29.66L162.34 64L128 98.34L93.66 64Zm2.83 119.51a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 0 5.66l40 40a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66ZM128 226.34L93.66 192L128 157.66L162.34 192Zm106.83-101.17l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 0 5.66l40 40a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66M192 162.34L157.66 128L192 93.66L226.34 128Zm-85.17-37.17l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 0 5.66l40 40a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66M64 162.34L29.66 128L64 93.66L98.34 128Z"></svg:path>`,
})
export class PhDiamondsFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFiveThinIcon],svg[ph-dice-five-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 36H64a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m20 156a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20ZM100 92a8 8 0 1 1-8-8a8 8 0 0 1 8 8m36 36a8 8 0 1 1-8-8a8 8 0 0 1 8 8m36-36a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-72 72a8 8 0 1 1-8-8a8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDiceFiveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFourThinIcon],svg[ph-dice-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 36H64a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m20 156a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20Zm-104-92a8 8 0 1 1-8-8a8 8 0 0 1 8 8m56 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-56 56a8 8 0 1 1-8-8a8 8 0 0 1 8 8m56 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDiceFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceOneThinIcon],svg[ph-dice-one-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 36H64a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m20 156a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20Zm-76-64a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDiceOneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceSixThinIcon],svg[ph-dice-six-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 36H64a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m20 156a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20ZM100 84a8 8 0 1 1-8-8a8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-72 44a8 8 0 1 1-8-8a8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-72 44a8 8 0 1 1-8-8a8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDiceSixThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceThreeThinIcon],svg[ph-dice-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 36H64a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m20 156a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20ZM100 92a8 8 0 1 1-8-8a8 8 0 0 1 8 8m36 36a8 8 0 1 1-8-8a8 8 0 0 1 8 8m36 36a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDiceThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceTwoThinIcon],svg[ph-dice-two-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 36H64a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m20 156a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20Zm-96-84a8 8 0 1 1-8-8a8 8 0 0 1 8 8m40 40a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDiceTwoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscThinIcon],svg[ph-disc-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m35.77 96a35.8 35.8 0 0 0-7.66-18.45l39.68-39.68A91.64 91.64 0 0 1 219.91 124Zm-7.77 4a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-28 92a92 92 0 1 1 62.13-159.79l-39.68 39.68A36 36 0 1 0 163.77 132h56.14A92.11 92.11 0 0 1 128 220"></svg:path>`,
})
export class PhDiscThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscoBallThinIcon],svg[ph-disco-ball-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 68.1V16a4 4 0 0 0-8 0v52.1a84 84 0 1 0 8 0m71.89 79.9h-40c-1-37.34-15.73-60.22-25.35-71.25A76.12 76.12 0 0 1 187.89 148M112 226.68C105 220 85.26 197.61 84.06 156h55.88c-1.2 41.61-20.94 64-27.94 70.68M84.06 148c1.2-41.61 21-64 27.94-70.68c7 6.64 26.74 29.07 27.94 70.68Zm17.36-71.25c-9.62 11-24.35 33.91-25.35 71.25h-40a76.12 76.12 0 0 1 65.35-71.25M36.11 156h40c1 37.34 15.73 60.22 25.35 71.25A76.12 76.12 0 0 1 36.11 156m86.47 71.25c9.62-11 24.35-33.91 25.35-71.25h40a76.12 76.12 0 0 1-65.35 71.25M252 88a4 4 0 0 1-4 4h-12v12a4 4 0 0 1-8 0V92h-12a4 4 0 0 1 0-8h12V72a4 4 0 0 1 8 0v12h12a4 4 0 0 1 4 4m-40-48a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0V44h-20a4 4 0 0 1 0-8h20V16a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhDiscoBallThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscordLogoThinIcon],svg[ph-discord-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 140a8 8 0 1 1-8-8a8 8 0 0 1 8 8m64-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m72.83 57.25l-67 29.71a12.4 12.4 0 0 1-5 1a12.13 12.13 0 0 1-11.38-7.88l-9.15-24.81c-5.36.45-10.81.69-16.34.69s-11-.24-16.34-.69l-9.15 24.81A12.13 12.13 0 0 1 91.13 220a12.4 12.4 0 0 1-5-1l-67-29.71a12 12 0 0 1-6.8-13.88L41.9 59a12.06 12.06 0 0 1 9.77-8.91l36.06-5.92a12.18 12.18 0 0 1 13.73 8.91l4.12 16.22a195.5 195.5 0 0 1 44.84 0l4.12-16.22a12.18 12.18 0 0 1 13.73-8.91l36.06 5.92A12.06 12.06 0 0 1 214.1 59l29.53 116.38a12 12 0 0 1-6.8 13.87m-1-11.91L206.35 61a4.07 4.07 0 0 0-3.35-3l-36-5.95a4.15 4.15 0 0 0-4.69 3l-3.91 15.33a167 167 0 0 1 18.68 4.08a4 4 0 1 1-2.16 7.7A176.2 176.2 0 0 0 128 76a176.2 176.2 0 0 0-46.92 6.16a4 4 0 1 1-2.16-7.7a167 167 0 0 1 18.68-4.08L93.71 55a4.15 4.15 0 0 0-4.69-3L53 58a4.07 4.07 0 0 0-3.31 3L20.12 177.34a4 4 0 0 0 2.29 4.59l67 29.71a4.16 4.16 0 0 0 3.35 0a4 4 0 0 0 2.24-2.29l8.45-22.88a171.5 171.5 0 0 1-24.53-4.92a4 4 0 0 1 2.16-7.71A176.2 176.2 0 0 0 128 180a176.2 176.2 0 0 0 46.92-6.16a4 4 0 0 1 2.16 7.71a171.5 171.5 0 0 1-24.53 4.92l8.45 22.88a4 4 0 0 0 2.23 2.32a4.16 4.16 0 0 0 3.35 0l67-29.71a4 4 0 0 0 2.3-4.62Z"></svg:path>`,
})
export class PhDiscordLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
