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
  selector: 'svg[phArrowFatLinesRightBoldIcon],svg[ph-arrow-fat-lines-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.49 119.51l-96-96A12 12 0 0 0 124 32v36h-4a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h4v36a12 12 0 0 0 20.49 8.49l96-96a12 12 0 0 0 0-16.98M148 195v-19a12 12 0 0 0-12-12h-4V92h4a12 12 0 0 0 12-12V61l67 67ZM52 80v96a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0m40 0v96a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhArrowFatLinesRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesUpBoldIcon],svg[ph-arrow-fat-lines-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 111.51l-96-96a12 12 0 0 0-17 0l-96 96A12 12 0 0 0 32 132h36v4a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12v-4h36a12 12 0 0 0 8.49-20.49M176 108a12 12 0 0 0-12 12v4H92v-4a12 12 0 0 0-12-12H61l67-67l67 67Zm12 108a12 12 0 0 1-12 12H80a12 12 0 0 1 0-24h96a12 12 0 0 1 12 12m0-40a12 12 0 0 1-12 12H80a12 12 0 0 1 0-24h96a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhArrowFatLinesUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatRightBoldIcon],svg[ph-arrow-fat-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.49 119.51l-96-96A12 12 0 0 0 124 32v36H48a20 20 0 0 0-20 20v80a20 20 0 0 0 20 20h76v36a12 12 0 0 0 20.49 8.49l96-96a12 12 0 0 0 0-16.98M148 195v-19a12 12 0 0 0-12-12H52V92h84a12 12 0 0 0 12-12V61l67 67Z"></svg:path>`,
})
export class PhArrowFatRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowFatUpBoldIcon],svg[ph-arrow-fat-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.48 111.51l-96-96a12 12 0 0 0-17 0l-96 96A12 12 0 0 0 32 132h36v76a20 20 0 0 0 20 20h80a20 20 0 0 0 20-20v-76h36a12 12 0 0 0 8.48-20.49M176 108a12 12 0 0 0-12 12v84H92v-84a12 12 0 0 0-12-12H61l67-67l67 67Z"></svg:path>`,
})
export class PhArrowFatUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLeftBoldIcon],svg[ph-arrow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a12 12 0 0 1-12 12H69l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L69 116h147a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhArrowLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownBoldIcon],svg[ph-arrow-line-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M47.51 112.49a12 12 0 0 1 17-17L116 147V32a12 12 0 0 1 24 0v115l51.51-51.52a12 12 0 0 1 17 17l-72 72a12 12 0 0 1-17 0ZM216 204H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhArrowLineDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownLeftBoldIcon],svg[ph-arrow-line-down-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 48a12 12 0 0 1-12 12H48a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12m-60.49 39.51L84 179v-67a12 12 0 0 0-24 0v96a12 12 0 0 0 12 12h96a12 12 0 0 0 0-24h-67l91.52-91.51a12 12 0 0 0-17-17Z"></svg:path>`,
})
export class PhArrowLineDownLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownRightBoldIcon],svg[ph-arrow-line-down-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 40a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12m-36 52a12 12 0 0 0-12 12v67L88.49 79.51a12 12 0 0 0-17 17L163 188H96a12 12 0 0 0 0 24h96a12 12 0 0 0 12-12v-96a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhArrowLineDownRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineLeftBoldIcon],svg[ph-arrow-line-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 128a12 12 0 0 1-12 12H109l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L109 116h115a12 12 0 0 1 12 12M40 28a12 12 0 0 0-12 12v176a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhArrowLineLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineRightBoldIcon],svg[ph-arrow-line-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184.49 119.51a12 12 0 0 1 0 17l-72 72a12 12 0 0 1-17-17L147 140H32a12 12 0 0 1 0-24h115L95.51 64.49a12 12 0 0 1 17-17ZM216 28a12 12 0 0 0-12 12v176a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhArrowLineRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpBoldIcon],svg[ph-arrow-line-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.49 143.51a12 12 0 0 1-17 17L140 109v115a12 12 0 0 1-24 0V109l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0ZM216 28H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhArrowLineUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpLeftBoldIcon],svg[ph-arrow-line-up-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 208a12 12 0 0 1-12 12H48a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M72 156a12 12 0 0 0 12-12V77l91.51 91.52a12 12 0 0 0 17-17L101 60h67a12 12 0 0 0 0-24H72a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12"></svg:path>`,
})
export class PhArrowLineUpLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpRightBoldIcon],svg[ph-arrow-line-up-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 216a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M80 180a12 12 0 0 0 8.49-3.51L180 85v67a12 12 0 0 0 24 0V56a12 12 0 0 0-12-12H96a12 12 0 0 0 0 24h67l-91.49 91.51A12 12 0 0 0 80 180"></svg:path>`,
})
export class PhArrowLineUpRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowRightBoldIcon],svg[ph-arrow-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01"></svg:path>`,
})
export class PhArrowRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownBoldIcon],svg[ph-arrow-square-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM87.51 144.49a12 12 0 1 1 17-17L116 139V88a12 12 0 0 1 24 0v51l11.51-11.52a12 12 0 1 1 17 17l-32 32a12 12 0 0 1-17 0Z"></svg:path>`,
})
export class PhArrowSquareDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownLeftBoldIcon],svg[ph-arrow-square-down-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM84 160v-48a12 12 0 0 1 24 0v19l43.51-43.52a12 12 0 0 1 17 17L125 148h19a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhArrowSquareDownLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownRightBoldIcon],svg[ph-arrow-square-down-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM87.51 104.49a12 12 0 0 1 17-17L148 131v-19a12 12 0 0 1 24 0v48a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h19Z"></svg:path>`,
})
export class PhArrowSquareDownRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareInBoldIcon],svg[ph-arrow-square-in-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 136v64a12 12 0 0 1-24 0v-35l-59.51 59.49a12 12 0 0 1-17-17L91 148H56a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m76-108H80a20 20 0 0 0-20 20v44a12 12 0 0 0 24 0V52h120v120h-40a12 12 0 0 0 0 24h44a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20"></svg:path>`,
})
export class PhArrowSquareInBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareLeftBoldIcon],svg[ph-arrow-square-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM79.51 136.49a12 12 0 0 1 0-17l32-32a12 12 0 0 1 17 17L117 116h51a12 12 0 0 1 0 24h-51l11.52 11.51a12 12 0 0 1-17 17Z"></svg:path>`,
})
export class PhArrowSquareLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareOutBoldIcon],svg[ph-arrow-square-out-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 104a12 12 0 0 1-24 0V69l-59.51 59.51a12 12 0 0 1-17-17L187 52h-35a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12Zm-44 24a12 12 0 0 0-12 12v64H52V84h64a12 12 0 0 0 0-24H48a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20v-68a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhArrowSquareOutBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareRightBoldIcon],svg[ph-arrow-square-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM76 128a12 12 0 0 1 12-12h51l-11.52-11.51a12 12 0 1 1 17-17l32 32a12 12 0 0 1 0 17l-32 32a12 12 0 1 1-17-17L139 140H88a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhArrowSquareRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareUpBoldIcon],svg[ph-arrow-square-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM87.51 128.49a12 12 0 0 1 0-17l32-32a12 12 0 0 1 17 0l32 32a12 12 0 0 1-17 17L140 117v51a12 12 0 0 1-24 0v-51l-11.51 11.52a12 12 0 0 1-16.98-.03"></svg:path>`,
})
export class PhArrowSquareUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareUpLeftBoldIcon],svg[ph-arrow-square-up-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM84 144V96a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-19l43.52 43.51a12 12 0 0 1-17 17L108 125v19a12 12 0 0 1-24 0"></svg:path>`,
})
export class PhArrowSquareUpLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareUpRightBoldIcon],svg[ph-arrow-square-up-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM87.51 168.49a12 12 0 0 1 0-17L131 108h-19a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12v48a12 12 0 0 1-24 0v-19l-43.51 43.52a12 12 0 0 1-17 0Z"></svg:path>`,
})
export class PhArrowSquareUpRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUDownLeftBoldIcon],svg[ph-arrow-u-down-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 112a68.07 68.07 0 0 1-68 68H61l27.52 27.51a12 12 0 0 1-17 17l-48-48a12 12 0 0 1 0-17l48-48a12 12 0 1 1 17 17L61 156h107a44 44 0 0 0 0-88H80a12 12 0 0 1 0-24h88a68.07 68.07 0 0 1 68 68"></svg:path>`,
})
export class PhArrowUDownLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUDownRightBoldIcon],svg[ph-arrow-u-down-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 176.49l-48 48a12 12 0 0 1-17-17L195 180H88a68 68 0 0 1 0-136h88a12 12 0 0 1 0 24H88a44 44 0 0 0 0 88h107l-27.52-27.51a12 12 0 1 1 17-17l48 48a12 12 0 0 1 .01 17"></svg:path>`,
})
export class PhArrowUDownRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowULeftDownBoldIcon],svg[ph-arrow-u-left-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 88v88a12 12 0 0 1-24 0V88a44 44 0 0 0-88 0v107l27.51-27.52a12 12 0 0 1 17 17l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 1 1 17-17L76 195V88a68 68 0 0 1 136 0"></svg:path>`,
})
export class PhArrowULeftDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowULeftUpBoldIcon],svg[ph-arrow-u-left-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 80v88a68 68 0 0 1-136 0V61L48.49 88.49a12 12 0 0 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1-17 17L100 61v107a44 44 0 0 0 88 0V80a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhArrowULeftUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowURightDownBoldIcon],svg[ph-arrow-u-right-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.49 184.49l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 1 1 17-17L156 195V88a44 44 0 0 0-88 0v88a12 12 0 0 1-24 0V88a68 68 0 0 1 136 0v107l27.51-27.52a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhArrowURightDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowURightUpBoldIcon],svg[ph-arrow-u-right-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.49 88.49a12 12 0 0 1-17 0L180 61v107a68 68 0 0 1-136 0V80a12 12 0 0 1 24 0v88a44 44 0 0 0 88 0V61l-27.51 27.49a12 12 0 1 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1 0 17"></svg:path>`,
})
export class PhArrowURightUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUUpLeftBoldIcon],svg[ph-arrow-u-up-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 144a68.07 68.07 0 0 1-68 68H80a12 12 0 0 1 0-24h88a44 44 0 0 0 0-88H61l27.52 27.51a12 12 0 0 1-17 17l-48-48a12 12 0 0 1 0-17l48-48a12 12 0 1 1 17 17L61 76h107a68.08 68.08 0 0 1 68 68"></svg:path>`,
})
export class PhArrowUUpLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUUpRightBoldIcon],svg[ph-arrow-u-up-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M167.51 127.51L195 100H88a44 44 0 0 0 0 88h88a12 12 0 0 1 0 24H88a68 68 0 0 1 0-136h107l-27.49-27.51a12 12 0 1 1 17-17l48 48a12 12 0 0 1 0 17l-48 48a12 12 0 0 1-17-17Z"></svg:path>`,
})
export class PhArrowUUpRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUpBoldIcon],svg[ph-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.49 120.49a12 12 0 0 1-17 0L140 69v147a12 12 0 0 1-24 0V69l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17"></svg:path>`,
})
export class PhArrowUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUpLeftBoldIcon],svg[ph-arrow-up-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.49 200.49a12 12 0 0 1-17 0L76 93v75a12 12 0 0 1-24 0V64a12 12 0 0 1 12-12h104a12 12 0 0 1 0 24H93l107.49 107.51a12 12 0 0 1 0 16.98"></svg:path>`,
})
export class PhArrowUpLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowUpRightBoldIcon],svg[ph-arrow-up-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 64v104a12 12 0 0 1-24 0V93L72.49 200.49a12 12 0 0 1-17-17L163 76H88a12 12 0 0 1 0-24h104a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhArrowUpRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsClockwiseBoldIcon],svg[ph-arrows-clockwise-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 48v48a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h19l-7.8-7.8a75.55 75.55 0 0 0-53.32-22.26h-.43a75.5 75.5 0 0 0-53.06 21.63a12 12 0 1 1-16.78-17.16a99.38 99.38 0 0 1 69.87-28.47h.52a99.42 99.42 0 0 1 70.2 29.29L204 67V48a12 12 0 0 1 24 0m-44.39 132.43a75.5 75.5 0 0 1-53.09 21.63h-.43a75.55 75.55 0 0 1-53.32-22.26L69 172h19a12 12 0 0 0 0-24H40a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-19l7.8 7.8a99.42 99.42 0 0 0 70.2 29.26h.56a99.38 99.38 0 0 0 69.87-28.47a12 12 0 0 0-16.78-17.16Z"></svg:path>`,
})
export class PhArrowsClockwiseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsCounterClockwiseBoldIcon],svg[ph-arrows-counter-clockwise-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 108H40a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v19l7.8-7.8A99.42 99.42 0 0 1 130 29.94h.56a99.38 99.38 0 0 1 69.87 28.47a12 12 0 0 1-16.78 17.16a76 76 0 0 0-106.84.63L69 84h19a12 12 0 0 1 0 24m128 40h-48a12 12 0 0 0 0 24h19l-7.8 7.8a75.55 75.55 0 0 1-53.32 22.26h-.43a75.5 75.5 0 0 1-53.09-21.63a12 12 0 0 0-16.78 17.16a99.38 99.38 0 0 0 69.87 28.47h.55a99.42 99.42 0 0 0 70.16-29.29L204 189v19a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhArrowsCounterClockwiseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsDownUpBoldIcon],svg[ph-arrows-down-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120.49 167.51a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L68 179V48a12 12 0 0 1 24 0v131l11.51-11.52a12 12 0 0 1 16.98.03m96-96l-32-32a12 12 0 0 0-17 0l-32 32a12 12 0 0 0 17 17L164 77v131a12 12 0 0 0 24 0V77l11.51 11.52a12 12 0 0 0 17-17Z"></svg:path>`,
})
export class PhArrowsDownUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsHorizontalBoldIcon],svg[ph-arrows-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.49 136.49l-32 32a12 12 0 0 1-17-17L203 140H53l11.52 11.51a12 12 0 0 1-17 17l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 1 1 17 17L53 116h150l-11.52-11.51a12 12 0 0 1 17-17l32 32a12 12 0 0 1 .01 17"></svg:path>`,
})
export class PhArrowsHorizontalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInBoldIcon],svg[ph-arrows-in-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 104V64a12 12 0 0 1 24 0v11l35.51-35.52a12 12 0 0 1 17 17L181 92h11a12 12 0 0 1 0 24h-40a12 12 0 0 1-12-12m-36 36H64a12 12 0 0 0 0 24h11l-35.49 35.51a12 12 0 0 0 17 17L92 181v11a12 12 0 0 0 24 0v-40a12 12 0 0 0-12-12m77 24h11a12 12 0 0 0 0-24h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 24 0v-11l35.51 35.52a12 12 0 0 0 17-17ZM104 52a12 12 0 0 0-12 12v11L56.49 39.51a12 12 0 0 0-17 17L75 92H64a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhArrowsInBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInCardinalBoldIcon],svg[ph-arrows-in-cardinal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M87.51 72.49a12 12 0 0 1 17-17L116 67V24a12 12 0 0 1 24 0v43l11.51-11.52a12 12 0 0 1 17 17l-32 32a12 12 0 0 1-17 0Zm49 79a12 12 0 0 0-17 0l-32 32a12 12 0 0 0 17 17L116 189v43a12 12 0 0 0 24 0v-43l11.51 11.52a12 12 0 0 0 17-17ZM232 116h-43l11.52-11.51a12 12 0 0 0-17-17l-32 32a12 12 0 0 0 0 17l32 32a12 12 0 0 0 17-17L189 140h43a12 12 0 0 0 0-24m-127.51 3.51l-32-32a12 12 0 0 0-17 17L67 116H24a12 12 0 0 0 0 24h43l-11.49 11.51a12 12 0 0 0 17 17l32-32a12 12 0 0 0-.02-17"></svg:path>`,
})
export class PhArrowsInCardinalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInLineHorizontalBoldIcon],svg[ph-arrows-in-line-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 40v176a12 12 0 0 1-24 0V40a12 12 0 0 1 24 0M64.49 87.51a12 12 0 0 0-17 17L59 116H16a12 12 0 0 0 0 24h43l-11.49 11.51a12 12 0 0 0 17 17l32-32a12 12 0 0 0 0-17ZM240 116h-43l11.52-11.51a12 12 0 0 0-17-17l-32 32a12 12 0 0 0 0 17l32 32a12 12 0 0 0 17-17L197 140h43a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhArrowsInLineHorizontalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInLineVerticalBoldIcon],svg[ph-arrows-in-line-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M119.51 96.49a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17L140 59V16a12 12 0 0 0-24 0v43l-11.51-11.49a12 12 0 0 0-17 17Zm17 63a12 12 0 0 0-17 0l-32 32a12 12 0 0 0 17 17L116 197v43a12 12 0 0 0 24 0v-43l11.51 11.52a12 12 0 0 0 17-17Z"></svg:path>`,
})
export class PhArrowsInLineVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsInSimpleBoldIcon],svg[ph-arrows-in-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.49 56.48L177 96h19a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12V60a12 12 0 0 1 24 0v19l39.51-39.52a12 12 0 0 1 17 17ZM108 136H60a12 12 0 0 0 0 24h19l-39.49 39.51a12 12 0 0 0 17 17L96 177v19a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhArrowsInSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsLeftRightBoldIcon],svg[ph-arrows-left-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 184.49l-32 32a12 12 0 0 1-17-17L179 188H48a12 12 0 0 1 0-24h131l-11.52-11.51a12 12 0 0 1 17-17l32 32a12 12 0 0 1 .01 17m-145-64a12 12 0 0 0 17-17L77 92h131a12 12 0 0 0 0-24H77l11.49-11.51a12 12 0 0 0-17-17l-32 32a12 12 0 0 0 0 17Z"></svg:path>`,
})
export class PhArrowsLeftRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsMergeBoldIcon],svg[ph-arrows-merge-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 40v64a12 12 0 0 1-3.51 8.49L140 165v38l11.51-11.52a12 12 0 0 1 17 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 0 1 17-17L116 203v-38l-52.49-52.51A12 12 0 0 1 60 104V40a12 12 0 0 1 24 0v59l44 44l44-44V40a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhArrowsMergeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutBoldIcon],svg[ph-arrows-out-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 48v48a12 12 0 0 1-24 0V77l-35.51 35.52a12 12 0 0 1-17-17L179 60h-19a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12M95.51 143.51L60 179v-19a12 12 0 0 0-24 0v48a12 12 0 0 0 12 12h48a12 12 0 0 0 0-24H77l35.52-35.51a12 12 0 0 0-17-17ZM208 148a12 12 0 0 0-12 12v19l-35.51-35.52a12 12 0 0 0-17 17L179 196h-19a12 12 0 0 0 0 24h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12M77 60h19a12 12 0 0 0 0-24H48a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0V77l35.51 35.52a12 12 0 0 0 17-17Z"></svg:path>`,
})
export class PhArrowsOutBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutCardinalBoldIcon],svg[ph-arrows-out-cardinal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M87.51 64.49a12 12 0 0 1 0-17l32-32a12 12 0 0 1 17 0l32 32a12 12 0 0 1-17 17L140 53v43a12 12 0 0 1-24 0V53l-11.51 11.49a12 12 0 0 1-16.98 0m64 127L140 203v-43a12 12 0 0 0-24 0v43l-11.51-11.52a12 12 0 0 0-17 17l32 32a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17Zm89-72l-32-32a12 12 0 0 0-17 17L203 116h-43a12 12 0 0 0 0 24h43l-11.52 11.51a12 12 0 0 0 17 17l32-32a12 12 0 0 0 .01-17ZM53 140h43a12 12 0 0 0 0-24H53l11.52-11.51a12 12 0 1 0-17-17l-32 32a12 12 0 0 0 0 17l32 32a12 12 0 1 0 17-17Z"></svg:path>`,
})
export class PhArrowsOutCardinalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutLineHorizontalBoldIcon],svg[ph-arrows-out-line-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 40v176a12 12 0 0 1-24 0V40a12 12 0 0 1 24 0m-52 76H45l11.52-11.51a12 12 0 0 0-17-17l-32 32a12 12 0 0 0 0 17l32 32a12 12 0 0 0 17-17L45 140h43a12 12 0 0 0 0-24m160.49 3.51l-32-32a12 12 0 0 0-17 17L211 116h-43a12 12 0 0 0 0 24h43l-11.52 11.51a12 12 0 0 0 17 17l32-32a12 12 0 0 0 .01-17"></svg:path>`,
})
export class PhArrowsOutLineHorizontalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutLineVerticalBoldIcon],svg[ph-arrows-out-line-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M104.49 56.48L116 45v43a12 12 0 0 0 24 0V45l11.51 11.51a12 12 0 0 0 17-17l-32-32a12 12 0 0 0-17 0l-32 32a12 12 0 0 0 17 17Zm47 143L140 211v-43a12 12 0 0 0-24 0v43l-11.51-11.52a12 12 0 0 0-17 17l32 32a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17"></svg:path>`,
})
export class PhArrowsOutLineVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutSimpleBoldIcon],svg[ph-arrows-out-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 48v48a12 12 0 0 1-24 0V77l-39.51 39.52a12 12 0 0 1-17-17L179 60h-19a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12M99.51 139.51L60 179v-19a12 12 0 0 0-24 0v48a12 12 0 0 0 12 12h48a12 12 0 0 0 0-24H77l39.52-39.51a12 12 0 0 0-17-17Z"></svg:path>`,
})
export class PhArrowsOutSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsSplitBoldIcon],svg[ph-arrows-split-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 192.49l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 0 1 17-17L180 187v-46l-52-52l-52 52v46l11.51-11.52a12 12 0 0 1 17 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L52 187v-51a12 12 0 0 1 3.51-8.49L116 67V24a12 12 0 0 1 24 0v43l60.49 60.48A12 12 0 0 1 204 136v51l11.51-11.52a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhArrowsSplitBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArrowsVerticalBoldIcon],svg[ph-arrows-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168.49 191.51a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 0 1 17-17L116 203V53l-11.51 11.49a12 12 0 1 1-17-17l32-32a12 12 0 0 1 17 0l32 32a12 12 0 0 1-17 17L140 53v150l11.51-11.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhArrowsVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArticleBoldIcon],svg[ph-article-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 160H44V60h168ZM68 92a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12m0 36a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12m0 36a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhArticleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArticleMediumBoldIcon],svg[ph-article-medium-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 132a12 12 0 0 1-12 12H24a12 12 0 0 1 0-24h4V68h-4a12 12 0 0 1 0-24h16a12 12 0 0 1 10 5.33l30 45l30-45A12 12 0 0 1 120 44h16a12 12 0 0 1 0 24h-4v52h4a12 12 0 0 1 0 24h-20a12 12 0 0 1-8-20.93V95.63l-18 27a12 12 0 0 1-20 0l-18-27v27.44a12 12 0 0 1 4 8.93m120-28h56a12 12 0 0 0 0-24h-56a12 12 0 0 0 0 24m56 16h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m0 40H80a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24m0 40H80a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhArticleMediumBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phArticleNyTimesBoldIcon],svg[ph-article-ny-times-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 92a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24h-64a12 12 0 0 1-12-12m76 28h-64a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m0 40H80a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24m0 40H80a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24M96 144a12 12 0 0 0 0-24h-4V68h24v4a12 12 0 0 0 24 0V56a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-4h24v52h-4a12 12 0 0 0 0 24Z"></svg:path>`,
})
export class PhArticleNyTimesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAsclepiusBoldIcon],svg[ph-asclepius-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M91.82 60H92a12 12 0 0 0 0-24H60a44.05 44.05 0 0 0-44 44v8a12 12 0 0 0 12 12h20a44.06 44.06 0 0 0 43.82-40M48 76h-7.6A20 20 0 0 1 60 60h7.6A20 20 0 0 1 48 76m176 3v1a44.05 44.05 0 0 1-44 44h-40v72h8a12 12 0 0 0 12-12a11.87 11.87 0 0 0-4-8.95a12 12 0 1 1 16-17.88A36 36 0 0 1 148 220h-8v12a12 12 0 0 1-24 0v-12H92a12 12 0 0 1 0-24h24v-72h-16a12 12 0 0 0-4 23.32A12 12 0 1 1 88 170a36 36 0 0 1 12-70h16V24a12 12 0 0 1 24 0v76h40a20 20 0 0 0 20-20v-1a19.05 19.05 0 0 0-19-19h-17a12 12 0 0 1 0-24h17a43.05 43.05 0 0 1 43 43"></svg:path>`,
})
export class PhAsclepiusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAsteriskBoldIcon],svg[ph-asterisk-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.29 182.17a12 12 0 0 1-16.47 4.12L140 149.19V216a12 12 0 0 1-24 0v-66.81l-61.82 37.1a12 12 0 1 1-12.35-20.58L104.68 128L41.83 90.29a12 12 0 1 1 12.35-20.58l61.82 37.1V40a12 12 0 0 1 24 0v66.81l61.82-37.1a12 12 0 1 1 12.35 20.58L151.32 128l62.85 37.71a12 12 0 0 1 4.12 16.46"></svg:path>`,
})
export class PhAsteriskBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAsteriskSimpleBoldIcon],svg[ph-asterisk-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.45 107.14l-65.19 26.08l46.21 59.41a12 12 0 1 1-18.94 14.74L128 147.55l-46.53 59.82a12 12 0 0 1-18.94-14.74l46.21-59.41l-65.19-26.08a12 12 0 1 1 8.91-22.28L116 110.28V40a12 12 0 0 1 24 0v70.28l63.54-25.42a12 12 0 1 1 8.91 22.28"></svg:path>`,
})
export class PhAsteriskSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAtBoldIcon],svg[ph-at-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 0 0 0 216c22.27 0 45.69-6.73 62.64-18a12 12 0 1 0-13.29-20c-13 8.63-31.89 14-49.35 14a84 84 0 1 1 84-84c0 9.29-1.67 17.08-4.69 21.95c-2.64 4.24-6 6.05-11.31 6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12 12 0 0 0-23.49-3.46a52 52 0 1 0 8.86 79.57C172.3 174.3 182.81 180 196 180c24.67 0 40-19.92 40-52A108.12 108.12 0 0 0 128 20m0 136a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhAtBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAtomBoldIcon],svg[ph-atom-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.23 159.2a196.7 196.7 0 0 0-18-31.2a196.7 196.7 0 0 0 18-31.2c11.84-26.31 11.69-47.48-.43-59.6s-33.29-12.27-59.6-.43a196.7 196.7 0 0 0-31.2 18a196.7 196.7 0 0 0-31.2-18c-26.31-11.84-47.48-11.69-59.6.43s-12.27 33.29-.43 59.6a196.7 196.7 0 0 0 18 31.2a196.7 196.7 0 0 0-18 31.2c-11.84 26.31-11.69 47.48.43 59.6c6.13 6.13 14.58 9.2 24.8 9.2c10 0 21.77-2.92 34.76-8.77a196.7 196.7 0 0 0 31.2-18a196.7 196.7 0 0 0 31.2 18c13 5.85 24.74 8.77 34.76 8.77c10.26 0 18.71-3.07 24.84-9.2c12.16-12.12 12.31-33.29.47-59.6m-17.41-105c5.25 5.26 1.79 26-16 53.78c-5.61-6.66-11.65-13.25-18.07-19.67S154.7 75.83 148 70.22c27.82-17.83 48.56-21.29 53.82-16.04ZM171.24 128a289 289 0 0 1-20.51 22.73A289 289 0 0 1 128 171.24a289 289 0 0 1-22.73-20.51A289 289 0 0 1 84.76 128A298.6 298.6 0 0 1 128 84.76a287 287 0 0 1 22.73 20.51A287 287 0 0 1 171.24 128M54.18 54.18c1.46-1.45 4.1-2.24 7.75-2.24c9.53 0 25.94 5.39 46 18.28c-6.66 5.61-13.25 11.65-19.67 18.07S75.83 101.3 70.22 108C52.39 80.18 48.93 59.44 54.18 54.18m0 147.64c-5.25-5.26-1.79-26 16-53.78c5.61 6.66 11.65 13.25 18.07 19.67s13 12.46 19.67 18.07c-27.74 17.83-48.48 21.29-53.74 16.04m147.64 0c-5.26 5.25-26 1.79-53.78-16c6.66-5.61 13.25-11.65 19.67-18.07s12.46-13 18.07-19.67c17.83 27.74 21.29 48.48 16.04 53.74M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhAtomBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAvocadoBoldIcon],svg[ph-avocado-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 108a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52m0 80a28 28 0 1 1 28-28a28 28 0 0 1-28 28m86.76-58.68L185 45.17A60 60 0 0 0 71.42 44l-29.5 83.46a92 92 0 1 0 172.84 1.86M128 228a68.05 68.05 0 0 1-63.59-92.15c0-.09.07-.18.1-.26L94.05 52a36 36 0 0 1 68.17.78l.09.27l29.82 84.28A68 68 0 0 1 128 228"></svg:path>`,
})
export class PhAvocadoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phAxeBoldIcon],svg[ph-axe-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M254.93 96.43A20 20 0 0 0 238.56 83a122 122 0 0 1-39.86-12.46l3.92-3.92a32 32 0 0 0-45.26-45.26l-6.69 6.69a20 20 0 0 0-30.15-2.21L81.84 64.52a20 20 0 0 0 2.21 30.16l-74.69 74.7a32 32 0 0 0 45.25 45.26l71.92-71.93A122 122 0 0 1 139 182.57a20 20 0 0 0 34 11.58L250.13 117a19.86 19.86 0 0 0 4.8-20.57m-80.6-58.1a8 8 0 1 1 11.32 11.32l-7.58 7.57a136 136 0 0 1-11.94-10.68ZM37.64 197.67a8 8 0 0 1-11.31-11.32l76.21-76.21a136 136 0 0 1 10.68 11.94Zm123.88-26c-9-48.5-39.27-78.44-59.38-93.47l32-32c15 20.11 45 50.34 93.45 59.38Z"></svg:path>`,
})
export class PhAxeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBabyBoldIcon],svg[ph-baby-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 144a16 16 0 1 1 16-16a16 16 0 0 1-16 16m72-32a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-14.4 49.85a41 41 0 0 1-43.2 0a12 12 0 1 0-12.8 20.3a65 65 0 0 0 68.8 0a12 12 0 1 0-12.8-20.3M236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84.08 84.08 0 0 0-82-83.95c-9.46 14.2-10 27.28-10 28a8 8 0 0 0 16-.05a12 12 0 0 1 24 0a32 32 0 0 1-64 0c0-.63.1-10.48 5-23.52A84 84 0 1 0 212 128"></svg:path>`,
})
export class PhBabyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBabyCarriageBoldIcon],svg[ph-baby-carriage-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 28h-8a20 20 0 0 0-20 20v52H58.16A40.07 40.07 0 0 0 20 72a12 12 0 0 0 0 24a16 16 0 0 1 16 16a84.09 84.09 0 0 0 84 84h40a84 84 0 0 0 0-168m48.06 48.12A59.6 59.6 0 0 1 218.79 100h-40.58ZM160 52a59.66 59.66 0 0 1 29.83 8L156 87V52Zm0 120h-40a60.1 60.1 0 0 1-58.79-48h157.58A60.1 60.1 0 0 1 160 172m-52 52a20 20 0 1 1-20-20a20 20 0 0 1 20 20m104 0a20 20 0 1 1-20-20a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhBabyCarriageBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBackpackBoldIcon],svg[ph-backpack-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 48.55V36a28 28 0 0 0-28-28h-32a28 28 0 0 0-28 28v12.55A60.08 60.08 0 0 0 32 108v112a20 20 0 0 0 20 20h152a20 20 0 0 0 20-20V108a60.08 60.08 0 0 0-52-59.45M112 32h32a4 4 0 0 1 4 4v12h-40V36a4 4 0 0 1 4-4m48 128H96v-8a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4Zm-64 24h64v32H96Zm104 32h-16v-64a28 28 0 0 0-28-28h-56a28 28 0 0 0-28 28v64H56V108a36 36 0 0 1 36-36h72a36 36 0 0 1 36 36Zm-40-116a12 12 0 0 1-12 12h-40a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhBackpackBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBackspaceBoldIcon],svg[ph-backspace-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H68.53a20.09 20.09 0 0 0-17.15 9.71L5.71 121.83a12 12 0 0 0 0 12.34l45.67 76.12A20.09 20.09 0 0 0 68.53 220H216a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 160H70.8L30 128l40.8-68H212Zm-108.49-52.49L119 128l-15.52-15.51a12 12 0 0 1 17-17L136 111l15.51-15.52a12 12 0 0 1 17 17L153 128l15.52 15.51a12 12 0 0 1-17 17L136 145l-15.51 15.52a12 12 0 0 1-17-17Z"></svg:path>`,
})
export class PhBackspaceBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBagBoldIcon],svg[ph-bag-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 60h-36.17a52 52 0 0 0-103.66 0H40a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m-88-24a28 28 0 0 1 27.71 24h-55.42A28 28 0 0 1 128 36m84 160H44V84h32v12a12 12 0 0 0 24 0V84h56v12a12 12 0 0 0 24 0V84h32Z"></svg:path>`,
})
export class PhBagBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBagSimpleBoldIcon],svg[ph-bag-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 60h-36.17a52 52 0 0 0-103.66 0H40a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m-88-24a28 28 0 0 1 27.71 24h-55.42A28 28 0 0 1 128 36m84 160H44V84h168Z"></svg:path>`,
})
export class PhBagSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBalloonBoldIcon],svg[ph-balloon-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 12a92.1 92.1 0 0 0-92 92c0 24.53 9.55 50.13 26.19 70.22c10 12 21.56 21.07 34.05 26.76L85 227.27A12 12 0 0 0 96 244h64a12 12 0 0 0 11-16.73L159.76 201c12.49-5.69 24.08-14.73 34.05-26.76C210.45 154.13 220 128.53 220 104a92.1 92.1 0 0 0-92-92m13.8 208h-27.6l5.35-12.49a73 73 0 0 0 16.9 0Zm33.53-61.09C161.93 175.09 145.12 184 128 184s-33.93-8.91-47.33-25.09C67.73 143.29 60 122.76 60 104a68 68 0 0 1 136 0c0 18.76-7.73 39.29-20.67 54.91m-6.34-47q-.6.06-1.2.06a12 12 0 0 1-11.93-10.81a28 28 0 0 0-19.47-23.91a12 12 0 1 1 7.22-22.89a51.94 51.94 0 0 1 36.13 44.42A12 12 0 0 1 169 111.94Z"></svg:path>`,
})
export class PhBalloonBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBandaidsBoldIcon],svg[ph-bandaids-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m190.23 128l24.88-24.89a44 44 0 1 0-62.22-62.22L128 65.77l-24.89-24.88a44 44 0 1 0-62.22 62.22L65.77 128l-24.88 24.89a44 44 0 1 0 62.22 62.22L128 190.23l24.89 24.88a44 44 0 1 0 62.22-62.22Zm-20.37-70.14a20 20 0 1 1 28.28 28.28L173.25 111L145 82.75ZM156.28 128L128 156.28L99.72 128L128 99.72ZM57.86 86.14a20 20 0 1 1 28.28-28.28L111 82.75L82.75 111Zm28.28 112a20 20 0 1 1-28.28-28.28L82.75 145L111 173.25Zm112 0a20 20 0 0 1-28.28 0L145 173.25L173.25 145l24.89 24.89a20 20 0 0 1 0 28.28Z"></svg:path>`,
})
export class PhBandaidsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBankBoldIcon],svg[ph-bank-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 108h20v48H32a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24h-12v-48h20a12 12 0 0 0 6.29-22.22l-104-64a12 12 0 0 0-12.58 0l-104 64A12 12 0 0 0 24 108m44 0h24v48H68Zm72 0v48h-24v-48Zm48 48h-24v-48h24ZM128 46.09L189.6 84H66.4ZM252 208a12 12 0 0 1-12 12H16a12 12 0 0 1 0-24h224a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhBankBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarbellBoldIcon],svg[ph-barbell-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 116V88a20 20 0 0 0-20-20h-16v-4a20 20 0 0 0-20-20h-24a20 20 0 0 0-20 20v52h-32V64a20 20 0 0 0-20-20H68a20 20 0 0 0-20 20v4H32a20 20 0 0 0-20 20v28a12 12 0 0 0 0 24v28a20 20 0 0 0 20 20h16v4a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20v-52h32v52a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20v-4h16a20 20 0 0 0 20-20v-28a12 12 0 0 0 0-24M36 164V92h12v72Zm52 24H72V68h16Zm96 0h-16V68h16Zm36-24h-12V92h12Z"></svg:path>`,
})
export class PhBarbellBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarcodeBoldIcon],svg[ph-barcode-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 52v40a12 12 0 0 1-24 0V64h-28a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12M76 192H48v-28a12 12 0 0 0-24 0v40a12 12 0 0 0 12 12h40a12 12 0 0 0 0-24m144-40a12 12 0 0 0-12 12v28h-28a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12M36 104a12 12 0 0 0 12-12V64h28a12 12 0 0 0 0-24H36a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12m52-24a12 12 0 0 0-12 12v72a12 12 0 0 0 24 0V92a12 12 0 0 0-12-12m92 84V92a12 12 0 0 0-24 0v72a12 12 0 0 0 24 0m-52-84a12 12 0 0 0-12 12v72a12 12 0 0 0 24 0V92a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhBarcodeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarnBoldIcon],svg[ph-barn-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 84a12 12 0 0 1 12-12h32a12 12 0 0 1 0 24h-32a12 12 0 0 1-12-12m152 116a12 12 0 0 1-12 12H16a12 12 0 0 1 0-24h4v-48.69A12 12 0 0 1 6.24 121l40-56a11.9 11.9 0 0 1 2.94-2.9l67.56-46.65l.17-.11a19.94 19.94 0 0 1 22.18 0l.17.11l67.56 46.65a11.9 11.9 0 0 1 2.94 2.9l40 56A12 12 0 0 1 236 139.31V188h4a12 12 0 0 1 12 12M44 188h20v-64a12 12 0 0 1 12-12h104a12 12 0 0 1 12 12v64h20v-78.55l-20.55-28.76L128 36.87L64.55 80.69L44 109.45Zm124-52h-54.1l54.1 38.07Zm-80 52h58.1L88 147.12Z"></svg:path>`,
})
export class PhBarnBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBarricadeBoldIcon],svg[ph-barricade-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 60H32a20 20 0 0 0-20 20v72a20 20 0 0 0 20 20h20v28a12 12 0 0 0 24 0v-28h104v28a12 12 0 0 0 24 0v-28h20a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m-4 59l-35-35h35Zm-43 29l-64-64h38l64 64Zm-72 0L41 84h38l64 64Zm-69-35l35 35H36Z"></svg:path>`,
})
export class PhBarricadeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBaseballBoldIcon],svg[ph-baseball-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20M77 194.66A109 109 0 0 0 85.54 182a12 12 0 1 0-20.77-12a83 83 0 0 1-4.77 7.27a83.73 83.73 0 0 1 0-98.54A83 83 0 0 1 64.77 86a12 12 0 1 0 20.77-12A109 109 0 0 0 77 61.34a83.76 83.76 0 0 1 102.06 0a109 109 0 0 0-8.6 12.66a12 12 0 1 0 20.77 12a83 83 0 0 1 4.77-7.27a83.73 83.73 0 0 1 0 98.54a83 83 0 0 1-4.74-7.28a12 12 0 1 0-20.77 12a109 109 0 0 0 8.51 12.67a83.76 83.76 0 0 1-102.06 0Zm22.2-80.14A110 110 0 0 1 100 128a110 110 0 0 1-.83 13.48A12 12 0 0 1 87.27 152a13 13 0 0 1-1.5-.09a12 12 0 0 1-10.42-13.39A86 86 0 0 0 76 128a86 86 0 0 0-.65-10.52a12 12 0 1 1 23.82-3Zm71.06 37.39a13 13 0 0 1-1.5.09a12 12 0 0 1-11.9-10.52a110 110 0 0 1 0-27a12 12 0 1 1 23.82 3a85.5 85.5 0 0 0 0 21a12 12 0 0 1-10.45 13.43Z"></svg:path>`,
})
export class PhBaseballBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBaseballCapBoldIcon],svg[ph-baseball-cap-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20A108.12 108.12 0 0 0 20 128v56a27.86 27.86 0 0 0 15.26 24.93a28 28 0 0 0 29.28-2.34C76.2 198.11 96.68 188 128 188s51.8 10.1 63.46 18.58A28 28 0 0 0 236 184v-56A108.12 108.12 0 0 0 128 20m84 108v1.87a170 170 0 0 0-33.29-14.3a170.8 170.8 0 0 0-23.45-67A84.14 84.14 0 0 1 212 128m-58.46-18.12a174.4 174.4 0 0 0-51.08 0A150 150 0 0 1 128 50.94a150.1 150.1 0 0 1 25.54 58.94m-52.8-61.31a170.8 170.8 0 0 0-23.45 67A170 170 0 0 0 44 129.87V128a84.14 84.14 0 0 1 56.74-79.43m109.11 139a4 4 0 0 1-4.28-.36C191 176.61 165.77 164 128 164s-63 12.61-77.57 23.18a4 4 0 0 1-4.28.36A3.76 3.76 0 0 1 44 184v-25.86a148 148 0 0 1 168 0V184a3.76 3.76 0 0 1-2.15 3.54Z"></svg:path>`,
})
export class PhBaseballCapBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBaseballHelmetBoldIcon],svg[ph-baseball-helmet-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 156a32 32 0 1 0-32 32a32 32 0 0 0 32-32m-40 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m164-40h-16.66A108 108 0 0 0 12 128v24a76.08 76.08 0 0 0 76 76h40a76.08 76.08 0 0 0 76-76v-12h40a12 12 0 0 0 0-24M36 152v-24a84 84 0 0 1 167.15-12H152a12 12 0 0 0-12 12v24a52 52 0 0 1-104 0m144 0a52.07 52.07 0 0 1-33.67 48.65A75.63 75.63 0 0 0 164 152v-12h16Z"></svg:path>`,
})
export class PhBaseballHelmetBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBasketBoldIcon],svg[ph-basket-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 128v40a12 12 0 0 1-24 0v-40a12 12 0 0 1 24 0m28.06-1.19l-4 40a12 12 0 0 0 10.75 13.13c.4 0 .81.06 1.2.06a12 12 0 0 0 11.93-10.81l4-40a12 12 0 0 0-23.88-2.38m-80.12 0a12 12 0 0 0-23.88 2.38l4 40A12 12 0 0 0 80 180c.39 0 .8 0 1.2-.06a12 12 0 0 0 10.75-13.13Zm156-37.22l-15.07 113A20.06 20.06 0 0 1 209 220H47a20.06 20.06 0 0 1-19.82-17.36l-15.07-113A12 12 0 0 1 24 76h42.55L119 16.1a12 12 0 0 1 18.06 0L189.45 76H232a12 12 0 0 1 11.89 13.59ZM98.45 76h59.1L128 42.22Zm119.84 24H37.71l12.8 96h155Z"></svg:path>`,
})
export class PhBasketBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBasketballBoldIcon],svg[ph-basketball-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20M60 177.28A83.6 83.6 0 0 1 44.87 140h30.27A83.1 83.1 0 0 1 60 177.28M44.87 116A83.6 83.6 0 0 1 60 78.72A83.1 83.1 0 0 1 75.14 116ZM116 211.13a83.63 83.63 0 0 1-39-16.46A106.94 106.94 0 0 0 99.34 140H116Zm0-95.13H99.34A106.94 106.94 0 0 0 77 61.33a83.63 83.63 0 0 1 39-16.46Zm80-37.28A83.6 83.6 0 0 1 211.13 116h-30.27A83.1 83.1 0 0 1 196 78.72m-56 132.41V140h16.66A106.94 106.94 0 0 0 179 194.67a83.63 83.63 0 0 1-39 16.46M156.66 116H140V44.87a83.63 83.63 0 0 1 39 16.46A106.94 106.94 0 0 0 156.66 116M196 177.28A83.1 83.1 0 0 1 180.86 140h30.27A83.6 83.6 0 0 1 196 177.28"></svg:path>`,
})
export class PhBasketballBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBathtubBoldIcon],svg[ph-bathtub-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 92h-28.7a12 12 0 0 0-11.3-8h-64a12 12 0 0 0-11.3 8H68V52a8 8 0 0 1 8-8a8.5 8.5 0 0 1 8.24 6.39a12 12 0 0 0 23.52-4.78A32.22 32.22 0 0 0 44 52v40H16a12 12 0 0 0-12 12v40a60.07 60.07 0 0 0 56 59.85V216a12 12 0 0 0 24 0v-12h88v12a12 12 0 0 0 24 0v-12.15A60.07 60.07 0 0 0 252 144v-40a12 12 0 0 0-12-12m-92 16h40v24h-40Zm80 36a36 36 0 0 1-36 36H64a36 36 0 0 1-36-36v-28h96v28a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-28h16Z"></svg:path>`,
})
export class PhBathtubBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingBoldIcon],svg[ph-battery-charging-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 52H28A28 28 0 0 0 0 80v96a28 28 0 0 0 28 28h168a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 124a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h168a4 4 0 0 1 4 4Zm56-72v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-113.62 18a12 12 0 0 1 0 12l-16 28a12 12 0 1 1-20.84-11.9l5.78-10.1H100a12 12 0 0 1-10.42-18l16-28a12 12 0 0 1 20.84 12l-5.74 10H132a12 12 0 0 1 10.38 6"></svg:path>`,
})
export class PhBatteryChargingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingVerticalBoldIcon],svg[ph-battery-charging-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M154.21 133.69a12 12 0 0 1 .52 11.68l-16 32a12 12 0 1 1-21.46-10.74l7.31-14.63H112a12 12 0 0 1-10.73-17.37l16-32a12 12 0 1 1 21.46 10.74L131.42 128H144a12 12 0 0 1 10.21 5.69M104 24h48a12 12 0 0 0 0-24h-48a12 12 0 0 0 0 24m100 36v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhBatteryChargingVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryEmptyBoldIcon],svg[ph-battery-empty-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 52H28A28 28 0 0 0 0 80v96a28 28 0 0 0 28 28h168a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 124a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h168a4 4 0 0 1 4 4Zm56-72v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhBatteryEmptyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryFullBoldIcon],svg[ph-battery-full-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 52H28A28 28 0 0 0 0 80v96a28 28 0 0 0 28 28h168a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 124a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h168a4 4 0 0 1 4 4Zm-16-72v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-40 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-40 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-40 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m192 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhBatteryFullBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryHighBoldIcon],svg[ph-battery-high-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 52H28A28 28 0 0 0 0 80v96a28 28 0 0 0 28 28h168a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 124a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h168a4 4 0 0 1 4 4Zm-56-72v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-40 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-40 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m192 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhBatteryHighBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryLowBoldIcon],svg[ph-battery-low-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 52H28A28 28 0 0 0 0 80v96a28 28 0 0 0 28 28h168a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 124a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h168a4 4 0 0 1 4 4ZM64 104v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m192 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhBatteryLowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryMediumBoldIcon],svg[ph-battery-medium-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 52H28A28 28 0 0 0 0 80v96a28 28 0 0 0 28 28h168a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 124a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h168a4 4 0 0 1 4 4Zm-96-72v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-40 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m192 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhBatteryMediumBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusBoldIcon],svg[ph-battery-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 128a12 12 0 0 1-12 12h-12v12a12 12 0 0 1-24 0v-12H92a12 12 0 0 1 0-24h12v-12a12 12 0 0 1 24 0v12h12a12 12 0 0 1 12 12m72-48v96a28 28 0 0 1-28 28H28a28 28 0 0 1-28-28V80a28 28 0 0 1 28-28h168a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H28a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4Zm44 12a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhBatteryPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusVerticalBoldIcon],svg[ph-battery-plus-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 12a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m112 48v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Zm-28 68h-12v-12a12 12 0 0 0-24 0v12h-12a12 12 0 0 0 0 24h12v12a12 12 0 0 0 24 0v-12h12a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhBatteryPlusVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalEmptyBoldIcon],svg[ph-battery-vertical-empty-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 12a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m112 48v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhBatteryVerticalEmptyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalFullBoldIcon],svg[ph-battery-vertical-full-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 12a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m112 48v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Zm-24 12h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m0 40h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m0 40h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m0 40h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhBatteryVerticalFullBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalHighBoldIcon],svg[ph-battery-vertical-high-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 12a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m112 48v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Zm-24 52h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m0 40h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m0 40h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhBatteryVerticalHighBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalLowBoldIcon],svg[ph-battery-vertical-low-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 12a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m112 48v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Zm-24 132h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhBatteryVerticalLowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalMediumBoldIcon],svg[ph-battery-vertical-medium-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 12a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m112 48v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Zm-24 92h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m0 40h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhBatteryVerticalMediumBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningBoldIcon],svg[ph-battery-warning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 52H28A28 28 0 0 0 0 80v96a28 28 0 0 0 28 28h168a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 124a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h168a4 4 0 0 1 4 4Zm56-72v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-156 12v-16a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0m28 36a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhBatteryWarningBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningVerticalBoldIcon],svg[ph-battery-warning-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 136v-36a12 12 0 0 1 24 0v36a12 12 0 0 1-24 0m12 24a16 16 0 1 0 16 16a16 16 0 0 0-16-16M104 24h48a12 12 0 0 0 0-24h-48a12 12 0 0 0 0 24m100 36v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhBatteryWarningVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeachBallBoldIcon],svg[ph-beach-ball-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m84 108a84.3 84.3 0 0 1-1.32 14.74a205 205 0 0 0-18.52-31.49a177 177 0 0 1 19.08 5.62A85 85 0 0 1 212 128m-9.61-38.94a204 204 0 0 0-30-5.47a204 204 0 0 0-5.47-30a84.53 84.53 0 0 1 35.47 35.47m-63.26-44.3a177 177 0 0 1 5.62 19.08a205 205 0 0 0-31.49-18.52a82.5 82.5 0 0 1 25.87-.56m-58.06 13.6a179.8 179.8 0 0 1 49.8 25.06a204.2 204.2 0 0 0-85.23 28.05a84.23 84.23 0 0 1 35.43-53.11M45 140.65a180.2 180.2 0 0 1 104.62-34.22a180.2 180.2 0 0 1-34.22 104.62a84.22 84.22 0 0 1-70.4-70.4m99.58 69.71a204.2 204.2 0 0 0 28.05-85.23a179.8 179.8 0 0 1 25.06 49.8a84.23 84.23 0 0 1-53.16 35.43Z"></svg:path>`,
})
export class PhBeachBallBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeanieBoldIcon],svg[ph-beanie-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 160v-16a100.17 100.17 0 0 0-70.52-95.56a32 32 0 1 0-59 0A100.17 100.17 0 0 0 28 144v16a20 20 0 0 0-8 16v32a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20v-32a20 20 0 0 0-8-16M120 36a8 8 0 1 1 8 8a8 8 0 0 1-8-8m8 32a76.08 76.08 0 0 1 76 76v12H52v-12a76.08 76.08 0 0 1 76-76m-12 112v24H84v-24Zm24 0h32v24h-32Zm-96 0h16v24H44Zm168 24h-16v-24h16Z"></svg:path>`,
})
export class PhBeanieBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBedBoldIcon],svg[ph-bed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 68H36V48a12 12 0 0 0-24 0v160a12 12 0 0 0 24 0v-28h196v28a12 12 0 0 0 24 0v-96a44.05 44.05 0 0 0-44-44m-112 88H36V92h64Zm132 0H124V92h88a20 20 0 0 1 20 20Z"></svg:path>`,
})
export class PhBedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerBottleBoldIcon],svg[ph-beer-bottle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m248.49 39.51l-32-32a12 12 0 0 0-18.55 15L147 60.77l-37.33 7.46a12.1 12.1 0 0 0-6.14 3.28L20.2 154.83a28 28 0 0 0 0 39.6l41.37 41.37a28 28 0 0 0 39.6 0l83.32-83.31a12.1 12.1 0 0 0 3.28-6.14l7.46-37.35l38.23-51a12 12 0 0 0 15-18.55ZM112 191l-47-47l31-31l47 47Zm-30.63 29a4 4 0 0 1-2.83-1.17l-41.37-41.37a4 4 0 0 1 0-5.66L48 161l47 47l-10.8 10.83a4 4 0 0 1-2.83 1.17m93-123.2a12 12 0 0 0-2.17 4.85l-7.2 36.43l-5 4.92l-47-47l5-5l36.43-7.28a12 12 0 0 0 4.85-2.17l55.67-41.76l1.29 1.29Z"></svg:path>`,
})
export class PhBeerBottleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerSteinBoldIcon],svg[ph-beer-stein-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 84h-12V72a44.05 44.05 0 0 0-44-44h-9.73c-12.5-10.22-29.09-16-46.27-16c-37.5 0-68 26.92-68 60v136a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20v-4h12a28 28 0 0 0 28-28v-64a28 28 0 0 0-28-28M104 36c12.85 0 25 4.62 33.44 12.67a12 12 0 0 0 8.3 3.33H160a20 20 0 0 1 19.6 16H60.28C62.72 50 81.39 36 104 36m76 168H60V92h120Zm40-28a4 4 0 0 1-4 4h-12v-72h12a4 4 0 0 1 4 4Zm-112-56v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0m48 0v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhBeerSteinBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBehanceLogoBoldIcon],svg[ph-behance-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M117.82 121.39A42 42 0 0 0 86 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h58a46 46 0 0 0 27.82-82.61M44 76h42a18 18 0 0 1 0 36H44Zm46 104H44v-44h46a22 22 0 0 1 0 44m66-104a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24h-64a12 12 0 0 1-12-12m44 24a52 52 0 0 0 0 104a51.45 51.45 0 0 0 22.7-5.21a12 12 0 1 0-10.49-21.58A27.7 27.7 0 0 1 200 180a28.05 28.05 0 0 1-25.3-16H240a12 12 0 0 0 12-12a52.06 52.06 0 0 0-52-52m-25.3 40a28 28 0 0 1 50.6 0Z"></svg:path>`,
})
export class PhBehanceLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellBoldIcon],svg[ph-bell-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.29 165.93C216.61 151 212 129.57 212 104a84 84 0 0 0-168 0c0 25.58-4.59 47-13.27 61.93a20.08 20.08 0 0 0-.07 20.07A19.77 19.77 0 0 0 48 196h36.18a44 44 0 0 0 87.64 0H208a19.77 19.77 0 0 0 17.31-10a20.08 20.08 0 0 0-.02-20.07M128 212a20 20 0 0 1-19.6-16h39.2a20 20 0 0 1-19.6 16m-73.34-40C63.51 154 68 131.14 68 104a60 60 0 0 1 120 0c0 27.13 4.48 50 13.33 68Z"></svg:path>`,
})
export class PhBellBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellRingingBoldIcon],svg[ph-bell-ringing-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.81 74.65A11.86 11.86 0 0 1 220.3 76a12 12 0 0 1-10.67-6.47a90.1 90.1 0 0 0-32-35.38a12 12 0 1 1 12.8-20.29a115.25 115.25 0 0 1 40.54 44.62a12 12 0 0 1-5.16 16.17M46.37 69.53a90.1 90.1 0 0 1 32-35.38A12 12 0 1 0 65.6 13.86a115.25 115.25 0 0 0-40.54 44.62a12 12 0 0 0 5.13 16.17A11.86 11.86 0 0 0 35.7 76a12 12 0 0 0 10.67-6.47m173.51 98.35A20 20 0 0 1 204 200h-32.19a44 44 0 0 1-87.62 0H52a20 20 0 0 1-15.91-32.12c7.17-9.33 15.73-26.62 15.88-55.94A76 76 0 0 1 204 112c.15 29.26 8.71 46.55 15.88 55.88M147.6 200h-39.2a20 20 0 0 0 39.2 0m48.74-24c-8.16-13-16.19-33.57-16.34-63.94A52 52 0 1 0 76 112c-.15 30.42-8.18 51-16.34 64Z"></svg:path>`,
})
export class PhBellRingingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleBoldIcon],svg[ph-bell-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.29 165.93C216.61 151 212 129.57 212 104a84 84 0 0 0-168 0c0 25.58-4.59 47-13.27 61.93a20.08 20.08 0 0 0-.07 20.07A19.77 19.77 0 0 0 48 196h160a19.77 19.77 0 0 0 17.31-10a20.08 20.08 0 0 0-.02-20.07M54.66 172C63.51 154 68 131.14 68 104a60 60 0 0 1 120 0c0 27.13 4.48 50 13.33 68ZM172 224a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhBellSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleRingingBoldIcon],svg[ph-bell-simple-ringing-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 228a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m58.94-169.52a115.25 115.25 0 0 0-40.54-44.62a12 12 0 1 0-12.8 20.29a90.1 90.1 0 0 1 32 35.38A12 12 0 0 0 220.3 76a11.86 11.86 0 0 0 5.51-1.35a12 12 0 0 0 5.13-16.17M46.37 69.53a90.1 90.1 0 0 1 32-35.38A12 12 0 1 0 65.6 13.86a115.25 115.25 0 0 0-40.54 44.62a12 12 0 0 0 5.13 16.17A11.86 11.86 0 0 0 35.7 76a12 12 0 0 0 10.67-6.47m173.51 98.35A20 20 0 0 1 204 200H52a20 20 0 0 1-15.91-32.12c7.17-9.33 15.73-26.62 15.88-55.94A76 76 0 0 1 204 112c.15 29.26 8.71 46.55 15.88 55.88M196.34 176c-8.16-13-16.19-33.57-16.34-63.94A52 52 0 1 0 76 112c-.15 30.42-8.18 51-16.34 64Z"></svg:path>`,
})
export class PhBellSimpleRingingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleSlashBoldIcon],svg[ph-bell-simple-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.88 207.93l-160-176a12 12 0 1 0-17.76 16.14l14.8 16.29A83.6 83.6 0 0 0 44 104c0 25.58-4.59 47-13.27 61.93a20.08 20.08 0 0 0-.05 20.07A19.75 19.75 0 0 0 48 196h125.6l25.52 28.07a12 12 0 0 0 17.76-16.14M54.68 172C63.52 154 68 131.14 68 104a59.8 59.8 0 0 1 3.52-20.29L151.78 172ZM172 224a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12M88.89 42.35a12 12 0 0 1 6.37-15.73A84 84 0 0 1 212 104c0 18.68 2.38 34.93 7.07 48.28a12 12 0 1 1-22.64 8C190.83 144.32 188 125.4 188 104a60 60 0 0 0-83.38-55.28a12 12 0 0 1-15.73-6.37"></svg:path>`,
})
export class PhBellSimpleSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleZBoldIcon],svg[ph-bell-simple-z-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 140a12 12 0 0 1-12 12h-32a12 12 0 0 1-10-18.66L121.58 104H112a12 12 0 1 1 0-24h32a12 12 0 0 1 10 18.66L134.42 128H144a12 12 0 0 1 12 12m69.33 46A19.77 19.77 0 0 1 208 196H48a19.77 19.77 0 0 1-17.31-10a20.08 20.08 0 0 1 .05-20.06C39.39 151 44 129.58 44 104a84 84 0 0 1 168 0c0 25.57 4.59 47 13.27 61.93a20.08 20.08 0 0 1 .07 20.07Zm-24-14c-8.84-18-13.33-40.87-13.33-68a60 60 0 0 0-120 0c0 27.14-4.48 50-13.33 68ZM160 212H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhBellSimpleZBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSlashBoldIcon],svg[ph-bell-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.88 207.93l-160-176a12 12 0 1 0-17.76 16.14l14.8 16.29A83.6 83.6 0 0 0 44 104c0 25.58-4.59 47-13.27 61.93a20.08 20.08 0 0 0-.05 20.07A19.75 19.75 0 0 0 48 196h36.19a44 44 0 0 0 87.62 0h1.79l25.52 28.07a12 12 0 0 0 17.76-16.14M68 104a59.8 59.8 0 0 1 3.52-20.29L151.78 172h-97.1C63.52 154 68 131.14 68 104m60 108a20 20 0 0 1-19.6-16h39.2a20 20 0 0 1-19.6 16M88.89 42.35a12 12 0 0 1 6.37-15.73A84 84 0 0 1 212 104c0 18.68 2.38 34.93 7.07 48.28a12 12 0 1 1-22.64 8C190.83 144.32 188 125.4 188 104a60 60 0 0 0-83.38-55.28a12 12 0 0 1-15.73-6.37"></svg:path>`,
})
export class PhBellSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellZBoldIcon],svg[ph-bell-z-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 140a12 12 0 0 1-12 12h-32a12 12 0 0 1-10-18.66L121.58 104H112a12 12 0 1 1 0-24h32a12 12 0 0 1 10 18.66L134.42 128H144a12 12 0 0 1 12 12m69.33 46A19.77 19.77 0 0 1 208 196h-36.18a44 44 0 0 1-87.64 0H48a19.77 19.77 0 0 1-17.31-10a20.08 20.08 0 0 1 .05-20.06C39.39 151 44 129.58 44 104a84 84 0 0 1 168 0c0 25.57 4.59 47 13.27 61.93a20.08 20.08 0 0 1 .07 20.07Zm-77.73 10h-39.2a20 20 0 0 0 39.2 0m53.74-24c-8.85-18-13.34-40.87-13.34-68a60 60 0 0 0-120 0c0 27.14-4.48 50-13.33 68Z"></svg:path>`,
})
export class PhBellZBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeltBoldIcon],svg[ph-belt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 156h-48v-56h48a12 12 0 0 0 0-24h-52a20 20 0 0 0-16-8h-64a20 20 0 0 0-16 8H67.3a12 12 0 0 0-22.6 0H12a12 12 0 0 0 0 24h32v56H12a12 12 0 0 0 0 24h32.7a12 12 0 0 0 22.6 0H96a20 20 0 0 0 16 8h64a20 20 0 0 0 16-8h52a12 12 0 0 0 0-24M68 100h24v56H68Zm48-8h56v24h-28a12 12 0 0 0 0 24h28v24h-56Z"></svg:path>`,
})
export class PhBeltBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBezierCurveBoldIcon],svg[ph-bezier-curve-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.28 141a100.6 100.6 0 0 0-31.4-49H240a12 12 0 0 0 0-24h-78.06a36 36 0 0 0-67.88 0H16a12 12 0 0 0 0 24h47.12a100.6 100.6 0 0 0-31.4 49A36 36 0 1 0 56 143.74a76.66 76.66 0 0 1 41.15-45.21a36 36 0 0 0 61.7 0A76.66 76.66 0 0 1 200 143.74a36 36 0 1 0 24.28-2.74M40 188a12 12 0 1 1 12-12a12 12 0 0 1-12 12m88-96a12 12 0 1 1 12-12a12 12 0 0 1-12 12m88 96a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhBezierCurveBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBicycleBoldIcon],svg[ph-bicycle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 108a51.8 51.8 0 0 0-15.13 2.25L168.89 76H192a4 4 0 0 1 4 4a12 12 0 0 0 24 0a28 28 0 0 0-28-28h-44a12 12 0 0 0-10.37 18l8.14 14h-36.21L94.37 58A12 12 0 0 0 84 52H52a12 12 0 0 0 0 24h25.11l11.07 19L74 112.89a52.17 52.17 0 1 0 18.8 14.92l8.37-10.57L118 146.05A12 12 0 1 0 138.7 134l-15.14-26h36.21l8.39 14.38A52 52 0 1 0 204 108M80 160a28 28 0 1 1-21.71-27.28l-15.7 19.83a12 12 0 0 0 18.82 14.9l15.7-19.83A27.84 27.84 0 0 1 80 160m124 28a28 28 0 0 1-23.11-43.79l12.74 21.84A12 12 0 0 0 214.37 154l-12.75-21.84c.79-.07 1.58-.11 2.38-.11a28 28 0 0 1 0 56Z"></svg:path>`,
})
export class PhBicycleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinaryBoldIcon],svg[ph-binary-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 24c-23.55 0-40 19.74-40 48s16.45 48 40 48s40-19.74 40-48s-16.45-48-40-48m0 72c-15.55 0-16-21.54-16-24s.45-24 16-24s16 21.54 16 24s-.45 24-16 24m53.27-42.63a12 12 0 0 1 5.36-16.1l24-12A12 12 0 0 1 192 36v72a12 12 0 0 1-24 0V55.42l-6.63 3.31a12 12 0 0 1-16.1-5.36M164 136c-23.55 0-40 19.74-40 48s16.45 48 40 48s40-19.74 40-48s-16.45-48-40-48m0 72c-15.55 0-16-21.54-16-24s.45-24 16-24s16 21.54 16 24s-.45 24-16 24m-60-60v72a12 12 0 0 1-24 0v-52.58l-6.63 3.31a12 12 0 1 1-10.74-21.46l24-12A12 12 0 0 1 104 148"></svg:path>`,
})
export class PhBinaryBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinocularsBoldIcon],svg[ph-binoculars-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241 150.65v-.05a51 51 0 0 0-2.53-5.9l-41.54-94.52a12 12 0 0 0-2.5-3.65a36 36 0 0 0-50.92 0A12 12 0 0 0 140 55v21h-24V55a12 12 0 0 0-3.51-8.48a36 36 0 0 0-50.92 0a12 12 0 0 0-2.5 3.65L17.53 144.7a51 51 0 0 0-2.53 5.9s0 0 0 .05A52 52 0 1 0 116 168v-68h24v68a52 52 0 1 0 101-17.35M80 62.28a12 12 0 0 1 12-1.22v63.15a51.9 51.9 0 0 0-35.9-7.62ZM64 196a28 28 0 1 1 28-28a28 28 0 0 1-28 28M164 61.06a12.06 12.06 0 0 1 12 1.22l23.87 54.31a51.9 51.9 0 0 0-35.9 7.62ZM192 196a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhBinocularsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBiohazardBoldIcon],svg[ph-biohazard-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.26 100.55c-.37-.71-.76-1.42-1.16-2.11a64 64 0 0 0-29.55-81.29a12 12 0 1 0-11.1 21.28A39.91 39.91 0 0 1 168 73.92c0 1-.05 2-.13 3a67.79 67.79 0 0 0-79.74 0c-.08-1-.13-2-.13-3a39.92 39.92 0 0 1 21.55-35.5a12 12 0 1 0-11.09-21.28a64 64 0 0 0-29.57 81.31c-.4.7-.78 1.39-1.15 2.1A64.08 64.08 0 0 0 12 164a12 12 0 0 0 24 0a40 40 0 0 1 24.18-36.73c-.11 1.56-.18 3.14-.18 4.73a68.12 68.12 0 0 0 41.63 62.68a40 40 0 0 1-47.16 3a12 12 0 1 0-12.94 20.21A63.95 63.95 0 0 0 128 201.24a63.95 63.95 0 0 0 86.47 16.69a12 12 0 1 0-12.94-20.21a40 40 0 0 1-47.16-3A68.12 68.12 0 0 0 196 132c0-1.59-.07-3.17-.18-4.73A40 40 0 0 1 220 164a12 12 0 0 0 24 0a64.08 64.08 0 0 0-55.74-63.45M128 88a43.85 43.85 0 0 1 30.23 12.07a39.93 39.93 0 0 1-60.46 0A43.8 43.8 0 0 1 128 88m-44 44a44.4 44.4 0 0 1 .57-7.06a40 40 0 0 1 30.18 49A44.08 44.08 0 0 1 84 132m57.25 42a40 40 0 0 1 30.18-49a44 44 0 0 1-30.18 49"></svg:path>`,
})
export class PhBiohazardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBirdBoldIcon],svg[ph-bird-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 72a16 16 0 1 1-16-16a16 16 0 0 1 16 16m68 8a12 12 0 0 1-5.34 10L220 102.42V120a108.12 108.12 0 0 1-108 108H24a20 20 0 0 1-15.59-32.5l.15-.18L92 95.18V76.89c0-35.61 28.57-64.72 63.69-64.89h.31a63.94 63.94 0 0 1 60.58 43.29L238.66 70A12 12 0 0 1 244 80m-33.63 0l-10.69-7.13a12 12 0 0 1-5-7A40 40 0 0 0 156 36h-.19c-21.95.11-39.8 18.45-39.8 40.89v22.63a12 12 0 0 1-2.79 7.69L32.57 204h20.48l69.74-83.68a12 12 0 1 1 18.43 15.36L84.29 204H112a84.09 84.09 0 0 0 84-84V96a12 12 0 0 1 5.35-10Z"></svg:path>`,
})
export class PhBirdBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBlueprintBoldIcon],svg[ph-blueprint-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48H76v-8a12 12 0 0 0-12-12H48a36 36 0 0 0-36 36v112a36 36 0 0 0 36 36h184a12 12 0 0 0 12-12V60a12 12 0 0 0-12-12M36 64a12 12 0 0 1 12-12h4v88h-4a35.6 35.6 0 0 0-12 2.06Zm184 124H48a12 12 0 0 1 0-24h16a12 12 0 0 0 12-12V72h144Zm-116-52a12 12 0 0 0 0 24h12v4a12 12 0 0 0 24 0v-4h16v4a12 12 0 0 0 24 0v-4h12a12 12 0 0 0 0-24h-12v-12h12a12 12 0 0 0 0-24h-12v-4a12 12 0 0 0-24 0v4h-16v-4a12 12 0 0 0-24 0v4h-12a12 12 0 0 0 0 24h12v12Zm36-12h16v12h-16Z"></svg:path>`,
})
export class PhBlueprintBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothBoldIcon],svg[ph-bluetooth-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M199.2 166.4L148 128l51.2-38.4a12 12 0 0 0 0-19.2l-64-48A12 12 0 0 0 116 32v72L71.2 70.4a12 12 0 0 0-14.4 19.2L108 128l-51.2 38.4a12 12 0 1 0 14.4 19.2L116 152v72a12 12 0 0 0 19.2 9.6l64-48a12 12 0 0 0 0-19.2M140 56l32 24l-32 24Zm0 144v-48l32 24Z"></svg:path>`,
})
export class PhBluetoothBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothConnectedBoldIcon],svg[ph-bluetooth-connected-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M199.2 166.4L148 128l51.2-38.4a12 12 0 0 0 0-19.2l-64-48A12 12 0 0 0 116 32v72L71.2 70.4a12 12 0 0 0-14.4 19.2L108 128l-51.2 38.4a12 12 0 1 0 14.4 19.2L116 152v72a12 12 0 0 0 19.2 9.6l64-48a12 12 0 0 0 0-19.2M140 56l32 24l-32 24Zm0 144v-48l32 24Zm-84-56a16 16 0 1 1 16-16a16 16 0 0 1-16 16m168-16a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhBluetoothConnectedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothSlashBoldIcon],svg[ph-bluetooth-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.88 207.93l-160-176a12 12 0 0 0-17.76 16.14L115 122.75L56.8 166.4a12 12 0 1 0 14.4 19.2L116 152v72a12 12 0 0 0 19.2 9.6l47.91-35.94l24 26.41a12 12 0 0 0 17.76-16.14ZM140 200v-48l5 3.77l21.87 24.06ZM116 59.74V32a12 12 0 0 1 19.2-9.6l64 48a12 12 0 0 1 0 19.2l-27.1 20.33a12 12 0 0 1-14.4-19.2L172 80l-32-24v3.74a12 12 0 0 1-24 0"></svg:path>`,
})
export class PhBluetoothSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothXBoldIcon],svg[ph-bluetooth-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.2 166.4L132 128l11.61-8.71a12 12 0 1 0-14.4-19.2L124 104V56l5.21 3.91a12 12 0 1 0 14.4-19.2L119.2 22.4A12 12 0 0 0 100 32v72L55.2 70.4a12 12 0 0 0-14.4 19.2L92 128l-51.2 38.4a12 12 0 1 0 14.4 19.2L100 152v72a12 12 0 0 0 19.2 9.6l64-48a12 12 0 0 0 0-19.2M124 200v-48l32 24ZM240.49 95.51a12 12 0 0 1-17 17L208 97l-15.51 15.52a12 12 0 1 1-17-17L191 80l-15.48-15.51a12 12 0 1 1 17-17L208 63l15.51-15.52a12 12 0 0 1 17 17L225 80Z"></svg:path>`,
})
export class PhBluetoothXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoatBoldIcon],svg[ph-boat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222.33 106.79L212 103.35V56a20 20 0 0 0-20-20h-52V24a12 12 0 0 0-24 0v12H64a20 20 0 0 0-20 20v47.35l-10.33 3.44a20 20 0 0 0-13.67 19V152c0 64.63 100.8 90.57 105.09 91.64a11.94 11.94 0 0 0 5.82 0C135.2 242.57 236 216.63 236 152v-26.23a20 20 0 0 0-13.67-18.98M68 60h120v35.35l-56.21-18.73a11.85 11.85 0 0 0-7.58 0L68 95.35Zm144 92c0 36.69-58.08 60.43-84 67.59c-25.94-7.17-84-30.9-84-67.59v-23.35l72-24V168a12 12 0 0 0 24 0v-63.35l72 24Z"></svg:path>`,
})
export class PhBoatBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBombBoldIcon],svg[ph-bomb-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 28a12 12 0 0 0-12 12a48.7 48.7 0 0 1-3.33 16c-4.44 10.64-11.24 12-16.67 12c-8.81 0-14.91-8.5-23.91-22.49C178.5 30.58 166.55 12 144 12c-18.14 0-32 9.78-39.14 27.54A68.3 68.3 0 0 0 101.27 52H88a20 20 0 0 0-20 20v7.18A92 92 0 0 0 112 252h1.66A92 92 0 0 0 156 79.18V72a20 20 0 0 0-20-20h-10.07a41 41 0 0 1 1.4-4c4.44-10.62 11.24-12 16.67-12c8.81 0 14.91 8.5 23.91 22.49C177.5 73.42 189.45 92 212 92c18.14 0 32-9.78 39.14-27.54A71.9 71.9 0 0 0 256 40a12 12 0 0 0-12-12M139.2 97.65a68 68 0 1 1-54.4 0a12 12 0 0 0 7.2-11V76h40v10.66a12 12 0 0 0 7.2 10.99m-27.75 104.11a12 12 0 0 1-11.45 8.41a12.2 12.2 0 0 1-3.6-.55A51.79 51.79 0 0 1 60 160a12 12 0 0 1 24 0a27.89 27.89 0 0 0 19.6 26.72a12 12 0 0 1 7.85 15.04"></svg:path>`,
})
export class PhBombBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoneBoldIcon],svg[ph-bone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.74 58.31a39.9 39.9 0 0 0-23.35-13.7a40 40 0 1 0-74.86 25.87l-66 66.05a40 40 0 1 0-25.87 74.86a40 40 0 1 0 74.86-25.86l66.05-66.06a40 40 0 0 0 49.22-61.16Zm-18.64 36.2a16 16 0 0 1-20.54 3a20 20 0 0 0-24.84 2.76l-70.4 70.4a20 20 0 0 0-2.75 24.84a16 16 0 1 1-29.41 6A12 12 0 0 0 56.3 187.7a11.6 11.6 0 0 0-1.85.14a16 16 0 1 1 6-29.4a20 20 0 0 0 24.83-2.76l70.4-70.4a20 20 0 0 0 2.76-24.84a16 16 0 1 1 29.4-6a12 12 0 0 0 13.71 13.71a16 16 0 0 1 14.55 26.36"></svg:path>`,
})
export class PhBoneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookBoldIcon],svg[ph-book-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 20H72a36 36 0 0 0-36 36v168a12 12 0 0 0 12 12h144a12 12 0 0 0 0-24H60v-4a12 12 0 0 1 12-12h136a12 12 0 0 0 12-12V32a12 12 0 0 0-12-12m-12 152H72a35.6 35.6 0 0 0-12 2.06V56a12 12 0 0 1 12-12h124Z"></svg:path>`,
})
export class PhBookBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookBookmarkBoldIcon],svg[ph-book-bookmark-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 20H72a36 36 0 0 0-36 36v168a12 12 0 0 0 12 12h144a12 12 0 0 0 0-24H60v-4a12 12 0 0 1 12-12h136a12 12 0 0 0 12-12V32a12 12 0 0 0-12-12m-88 24h36v59l-10.51-8.41a12 12 0 0 0-15 0L120 103Zm76 128H72a35.6 35.6 0 0 0-12 2.06V56a12 12 0 0 1 12-12h24v84a12 12 0 0 0 19.5 9.37l22.49-18l22.51 18A12 12 0 0 0 180 128V44h16Z"></svg:path>`,
})
export class PhBookBookmarkBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenBoldIcon],svg[ph-book-open-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 44h-72a43.86 43.86 0 0 0-32 13.85A43.86 43.86 0 0 0 96 44H24a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h72a20 20 0 0 1 20 20a12 12 0 0 0 24 0a20 20 0 0 1 20-20h72a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M96 188H36V68h60a20 20 0 0 1 20 20v104.81A43.8 43.8 0 0 0 96 188m124 0h-60a43.7 43.7 0 0 0-20 4.83V88a20 20 0 0 1 20-20h60Z"></svg:path>`,
})
export class PhBookOpenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenTextBoldIcon],svg[ph-book-open-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 44h-72a43.86 43.86 0 0 0-32 13.85A43.86 43.86 0 0 0 96 44H24a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h72a20 20 0 0 1 20 20a12 12 0 0 0 24 0a20 20 0 0 1 20-20h72a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M96 188H36V68h60a20 20 0 0 1 20 20v104.81A43.8 43.8 0 0 0 96 188m124 0h-60a43.7 43.7 0 0 0-20 4.83V88a20 20 0 0 1 20-20h60Zm-56-92h32a12 12 0 0 1 0 24h-32a12 12 0 0 1 0-24m44 52a12 12 0 0 1-12 12h-32a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhBookOpenTextBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenUserBoldIcon],svg[ph-book-open-user-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 72h-72a43.86 43.86 0 0 0-32 13.85A43.86 43.86 0 0 0 96 72H24a12 12 0 0 0-12 12v116a12 12 0 0 0 12 12h72a20 20 0 0 1 20 20a12 12 0 0 0 24 0a20 20 0 0 1 20-20h72a12 12 0 0 0 12-12V84a12 12 0 0 0-12-12M96 188H36V96h60a20 20 0 0 1 20 20v76.81A43.8 43.8 0 0 0 96 188m124 0h-60a43.7 43.7 0 0 0-20 4.83V116a20 20 0 0 1 20-20h60ZM86.4 40.79a52 52 0 0 1 83.2 0a12 12 0 0 1-19.19 14.42a28 28 0 0 0-44.82 0A12 12 0 0 1 86.4 40.79"></svg:path>`,
})
export class PhBookOpenUserBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkBoldIcon],svg[ph-bookmark-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 28H72a20 20 0 0 0-20 20v176a12 12 0 0 0 18.36 10.18l57.63-36l57.65 36A12 12 0 0 0 204 224V48a20 20 0 0 0-20-20m-4 24v102.35l-45.65-28.53a12 12 0 0 0-12.72 0L76 154.35V52Zm-45.65 121.82a12 12 0 0 0-12.72 0L76 202.35v-19.7l52-32.5l52 32.5v19.7Z"></svg:path>`,
})
export class PhBookmarkBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkSimpleBoldIcon],svg[ph-bookmark-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 28H72a20 20 0 0 0-20 20v176a12 12 0 0 0 18.36 10.18l57.63-36l57.65 36A12 12 0 0 0 204 224V48a20 20 0 0 0-20-20m-4 174.35l-45.65-28.53a12 12 0 0 0-12.72 0L76 202.35V52h104Z"></svg:path>`,
})
export class PhBookmarkSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksBoldIcon],svg[ph-bookmarks-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 20H96a20 20 0 0 0-20 20v20H64a20 20 0 0 0-20 20v144a12 12 0 0 0 19.32 9.51L108 199.14l44.69 34.37A12 12 0 0 0 172 224v-46.4l20.68 15.91A12 12 0 0 0 212 184V40a20 20 0 0 0-20-20m-44 179.63l-32.69-25.14a12 12 0 0 0-14.63 0L68 199.63V84h80Zm40-40l-16-12.3V80a20 20 0 0 0-20-20h-52V44h88Z"></svg:path>`,
})
export class PhBookmarksBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksSimpleBoldIcon],svg[ph-bookmarks-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 56H60a20 20 0 0 0-20 20v152a12 12 0 0 0 19 9.76l49-35l49 35a12 12 0 0 0 19-9.76V76a20 20 0 0 0-20-20m-4 148.68l-37-26.45a12 12 0 0 0-14 0l-37 26.45V80h88ZM216 36v152a12 12 0 0 1-24 0V40H92a12 12 0 0 1 0-24h104a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhBookmarksSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBooksBoldIcon],svg[ph-books-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.57 193.73l-33.19-157.8a20 20 0 0 0-23.76-15.48l-46.81 10.06a19.82 19.82 0 0 0-11 6.65A20 20 0 0 0 104 28H56a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20V90.25l25.62 121.82A20 20 0 0 0 169.15 228a20.3 20.3 0 0 0 4.23-.45l46.81-10.06a20.1 20.1 0 0 0 15.38-23.76M148.19 88.65l39-8.38l2.53 12l-39 8.38Zm7.46 35.5l39-8.38l9.16 43.58l-39 8.38Zm24.06-79.39l2.53 12l-39 8.38l-2.53-12ZM60 88h40v80H60Zm40-36v12H60V52ZM60 204v-12h40v12Zm112.29-.76l-2.53-12l39-8.38l2.53 12Z"></svg:path>`,
})
export class PhBooksBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBootBoldIcon],svg[ph-boot-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 104h-28V56a20 20 0 0 0-20-20H32a12 12 0 0 0-11.2 16.3c10.88 28.39 8.3 78.36-.33 108.38A12 12 0 0 0 20 164v36a20 20 0 0 0 20 20h26.11a20.16 20.16 0 0 0 9-2.11L86.83 212h14.34l11.77 5.89a20.16 20.16 0 0 0 9 2.11h28.22a20.16 20.16 0 0 0 8.95-2.11l11.72-5.89h14.34l11.77 5.89a20.16 20.16 0 0 0 8.95 2.11H232a20 20 0 0 0 20-20v-36a60.07 60.07 0 0 0-60-60M48 60h92v44h-24a12 12 0 0 0 0 24h76a36.07 36.07 0 0 1 33.94 24H47.21c5.54-27.92 7.02-63.59.79-92m180 136h-21.17l-11.77-5.89a20.16 20.16 0 0 0-8.95-2.11h-16.22a20.16 20.16 0 0 0-8.95 2.11L149.17 196h-26.34l-11.77-5.89a20.16 20.16 0 0 0-9-2.11H85.89a20.16 20.16 0 0 0-9 2.11L65.17 196H44v-20h184Z"></svg:path>`,
})
export class PhBootBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoulesBoldIcon],svg[ph-boules-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m50.28 40.75L60.75 178.28a85 85 0 0 1-8.36-13.7L164.58 52.39a85 85 0 0 1 13.7 8.36m17 17a85 85 0 0 1 8.36 13.7L91.42 203.61a85 85 0 0 1-13.7-8.36ZM128 44a85 85 0 0 1 10.37.66l-93.71 93.71A83.87 83.87 0 0 1 128 44m0 168a85 85 0 0 1-10.37-.66l93.71-93.71A83.87 83.87 0 0 1 128 212"></svg:path>`,
})
export class PhBoulesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoundingBoxBoldIcon],svg[ph-bounding-box-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 100a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v4h-56v-4a20 20 0 0 0-20-20H48a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h4v56h-4a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-4h56v4a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20h-4v-56Zm-28-48h24v24h-24ZM52 52h24v24H52Zm24 152H52v-24h24Zm128 0h-24v-24h24Zm-24-48h-4a20 20 0 0 0-20 20v4h-56v-4a20 20 0 0 0-20-20h-4v-56h4a20 20 0 0 0 20-20v-4h56v4a20 20 0 0 0 20 20h4Z"></svg:path>`,
})
export class PhBoundingBoxBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlFoodBoldIcon],svg[ph-bowl-food-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 100h-4.78a92 92 0 0 0-182.44 0H32a12 12 0 0 0-12 12a108.38 108.38 0 0 0 56 94.68V208a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20v-1.32A108.38 108.38 0 0 0 236 112a12 12 0 0 0-12-12m-53.71-39.94a92 92 0 0 0-43.1 39.94H106a68.27 68.27 0 0 1 62-40c.76 0 1.52 0 2.29.06m17.22 19.08a67.7 67.7 0 0 1 7.41 20.86h-38.79a67.9 67.9 0 0 1 31.38-20.86M128 44c.83 0 1.65 0 2.48.06A92.3 92.3 0 0 0 80.37 100H61.08A68.1 68.1 0 0 1 128 44m35 144.39a12 12 0 0 0-7 10.91v4.7h-56v-4.7a12 12 0 0 0-7-10.91A84.32 84.32 0 0 1 44.87 124h166.26A84.32 84.32 0 0 1 163 188.39"></svg:path>`,
})
export class PhBowlFoodBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlSteamBoldIcon],svg[ph-bowl-steam-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 108H32a12 12 0 0 0-12 12a108.38 108.38 0 0 0 56 94.68V216a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20v-1.32A108.38 108.38 0 0 0 236 120a12 12 0 0 0-12-12m-61 88.39a12 12 0 0 0-7 10.9V212h-56v-4.71a12 12 0 0 0-7-10.9A84.32 84.32 0 0 1 44.87 132h166.26A84.32 84.32 0 0 1 163 196.39M74.93 50.15a26.3 26.3 0 0 0 4.71-7a12 12 0 0 1 7.7-22.7c5.67 1.64 13.2 6.63 15.77 15.3c2.71 9.14-.67 19.26-10 30.08a26.3 26.3 0 0 0-4.71 7A12 12 0 0 1 84 96a11.8 11.8 0 0 1-3.33-.47C75 93.89 67.46 88.9 64.89 80.23c-2.71-9.14.67-19.23 10.04-30.08m44 0a26.3 26.3 0 0 0 4.71-7a12 12 0 0 1 7.7-22.7c5.67 1.64 13.2 6.63 15.77 15.3c2.71 9.14-.67 19.26-10 30.08a26.3 26.3 0 0 0-4.71 7A12 12 0 0 1 128 96a11.8 11.8 0 0 1-3.33-.47c-5.67-1.64-13.21-6.63-15.78-15.3c-2.71-9.14.67-19.23 10.04-30.08m44 0a26.3 26.3 0 0 0 4.71-7a12 12 0 0 1 7.7-22.7c5.67 1.64 13.2 6.63 15.77 15.3c2.71 9.14-.67 19.26-10 30.08a26.3 26.3 0 0 0-4.71 7A12 12 0 0 1 172 96a11.8 11.8 0 0 1-3.33-.47c-5.67-1.64-13.21-6.63-15.78-15.3c-2.71-9.14.67-19.23 10.04-30.08"></svg:path>`,
})
export class PhBowlSteamBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlingBallBoldIcon],svg[ph-bowling-ball-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m16-84a16 16 0 1 1-16-16a16 16 0 0 1 16 16m16-16a16 16 0 1 1 16-16a16 16 0 0 1-16 16m32 24a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhBowlingBallBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowDownBoldIcon],svg[ph-box-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.73 66.63l-16-32A12 12 0 0 0 200 28H56a12 12 0 0 0-10.73 6.63l-16 32A12 12 0 0 0 28 72v136a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V72a12 12 0 0 0-1.27-5.37M192.58 52l6 12H57.42l6-12ZM52 204V88h152v116Zm116.49-64.49a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 0 1 17-17L116 151v-39a12 12 0 0 1 24 0v39l11.51-11.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhBoxArrowDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowUpBoldIcon],svg[ph-box-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.73 66.63l-16-32A12 12 0 0 0 200 28H56a12 12 0 0 0-10.73 6.63l-16 32A12 12 0 0 0 28 72v136a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V72a12 12 0 0 0-1.27-5.37M192.58 52l6 12H57.42l6-12ZM52 204V88h152v116Zm116.49-68.49a12 12 0 0 1-17 17L140 141v39a12 12 0 0 1-24 0v-39l-11.51 11.52a12 12 0 0 1-17-17l32-32a12 12 0 0 1 17 0Z"></svg:path>`,
})
export class PhBoxArrowUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxingGloveBoldIcon],svg[ph-boxing-glove-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 12h-48a60.08 60.08 0 0 0-59.87 56H56a36 36 0 0 0-36 36v29.19a20.13 20.13 0 0 0 4.38 12.5a12 12 0 0 0 .94 1L60 181v35a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20v-38.32l15.23-53.3a20 20 0 0 0 .77-5.5V72a60.07 60.07 0 0 0-60-60m36 106.32l-15.54 54.38a12.3 12.3 0 0 0-.46 3.3v36H84v-36a12 12 0 0 0-3.56-8.53L44 131.45V104a12 12 0 0 1 12-12h4v12a12 12 0 0 0 24 0V72a36 36 0 0 1 36-36h48a36 36 0 0 1 36 36ZM166.66 162l-9 6l9 6a12 12 0 1 1-13.32 20L136 182.42L118.66 194a12 12 0 0 1-13.32-20l9-6l-9-6a12 12 0 0 1 13.32-20L136 153.58L153.34 142a12 12 0 1 1 13.32 20"></svg:path>`,
})
export class PhBoxingGloveBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsAngleBoldIcon],svg[ph-brackets-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90.12 46.44L38.22 128l51.9 81.56a12 12 0 1 1-20.24 12.88l-56-88a12 12 0 0 1 0-12.88l56-88a12 12 0 0 1 20.24 12.88m152 75.12l-56-88a12 12 0 1 0-20.24 12.88l51.9 81.56l-51.9 81.56a12 12 0 1 0 20.24 12.88l56-88a12 12 0 0 0 0-12.88"></svg:path>`,
})
export class PhBracketsAngleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsCurlyBoldIcon],svg[ph-brackets-curly-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54.8 119.49a35 35 0 0 1-5.75 8.51a35 35 0 0 1 5.75 8.51C60 147.24 60 159.83 60 172c0 25.94 1.84 32 20 32a12 12 0 0 1 0 24c-19.14 0-32.2-6.9-38.8-20.51C36 196.76 36 184.17 36 172c0-25.94-1.84-32-20-32a12 12 0 0 1 0-24c18.16 0 20-6.06 20-32c0-12.17 0-24.76 5.2-35.49C47.8 34.9 60.86 28 80 28a12 12 0 0 1 0 24c-18.16 0-20 6.06-20 32c0 12.17 0 24.76-5.2 35.49M240 116c-18.16 0-20-6.06-20-32c0-12.17 0-24.76-5.2-35.49C208.2 34.9 195.14 28 176 28a12 12 0 0 0 0 24c18.16 0 20 6.06 20 32c0 12.17 0 24.76 5.2 35.49A35 35 0 0 0 207 128a35 35 0 0 0-5.75 8.51C196 147.24 196 159.83 196 172c0 25.94-1.84 32-20 32a12 12 0 0 0 0 24c19.14 0 32.2-6.9 38.8-20.51c5.2-10.73 5.2-23.32 5.2-35.49c0-25.94 1.84-32 20-32a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhBracketsCurlyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsRoundBoldIcon],svg[ph-brackets-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M82.33 222.19a12 12 0 0 1-16.5 4.09C64 225.16 20 198 20 128s44-97.16 45.83-98.28a12 12 0 0 1 12.41 20.53C76.71 51.21 44 72.31 44 128s32.85 76.88 34.25 77.75a12 12 0 0 1 4.08 16.44M190.17 29.72a12 12 0 1 0-12.42 20.53c1.4.87 34.25 21.94 34.25 77.75s-32.85 76.88-34.17 77.7a12 12 0 1 0 12.34 20.58C192 225.16 236 198 236 128s-44-97.16-45.83-98.28"></svg:path>`,
})
export class PhBracketsRoundBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsSquareBoldIcon],svg[ph-brackets-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 52v152h28a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h40a12 12 0 0 1 0 24Zm164-24h-40a12 12 0 0 0 0 24h28v152h-28a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhBracketsSquareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrainBoldIcon],svg[ph-brain-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 124a60.14 60.14 0 0 0-32-53.08a52 52 0 0 0-92-32.11a52 52 0 0 0-92 32.11a60 60 0 0 0 0 106.14a52 52 0 0 0 92 32.13a52 52 0 0 0 92-32.13A60.05 60.05 0 0 0 252 124M88 204a28 28 0 0 1-26.85-20.07c1 0 1.89.07 2.85.07h8a12 12 0 0 0 0-24h-8a36 36 0 0 1-12-69.95a12 12 0 0 0 8-11.32V72a28 28 0 0 1 56 0v60.18a51.6 51.6 0 0 0-7.2-3.85a12 12 0 1 0-9.6 22A28 28 0 0 1 88 204m104-44h-8a12 12 0 0 0 0 24h8c1 0 1.9 0 2.85-.07a28 28 0 1 1-38-33.61a12 12 0 1 0-9.6-22a51.6 51.6 0 0 0-7.2 3.85V72a28 28 0 0 1 56 0v6.73a12 12 0 0 0 8 11.32a36 36 0 0 1-12 70Zm16-44a12 12 0 0 1-12 12a40 40 0 0 1-40-40v-4a12 12 0 0 1 24 0v4a16 16 0 0 0 16 16a12 12 0 0 1 12 12M100 88a40 40 0 0 1-40 40a12 12 0 0 1 0-24a16 16 0 0 0 16-16v-4a12 12 0 0 1 24 0Z"></svg:path>`,
})
export class PhBrainBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrandyBoldIcon],svg[ph-brandy-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 88a99.63 99.63 0 0 0-16.18-54.55a12 12 0 0 0-10-5.45H54.23a12 12 0 0 0-10 5.45A99.63 99.63 0 0 0 28 88a100.15 100.15 0 0 0 88 99.28V212H88a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24h-28v-24.72A100.15 100.15 0 0 0 228 88M61.05 52H195a75.4 75.4 0 0 1 8.1 24H53a75.4 75.4 0 0 1 8.05-24m67 112a76.12 76.12 0 0 1-75-64H203a76.12 76.12 0 0 1-75 64Z"></svg:path>`,
})
export class PhBrandyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBreadBoldIcon],svg[ph-bread-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 80a44.05 44.05 0 0 0-44-44H48a44 44 0 0 0-20 83.17V200a20 20 0 0 0 20 20h152a20 20 0 0 0 20-20v-80.83A44 44 0 0 0 244 80M52 123.3a12 12 0 0 0-4-23.3a20 20 0 0 1 0-40h92a20 20 0 0 1 0 40a12 12 0 0 0-4 23.3V196H52ZM200 100a12 12 0 0 0-4 23.3V196h-36v-76.83A43.92 43.92 0 0 0 179.17 60H200a20 20 0 0 1 0 40"></svg:path>`,
})
export class PhBreadBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBridgeBoldIcon],svg[ph-bridge-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 156h-28v-44.51a76.4 76.4 0 0 0 23.49 15a12 12 0 0 0 9-22.25A51.81 51.81 0 0 1 204 56a12 12 0 0 0-24 0a52 52 0 0 1-104 0a12 12 0 0 0-24 0a51.81 51.81 0 0 1-32.5 48.22a12 12 0 1 0 9 22.25a76.4 76.4 0 0 0 23.49-15V156H24a12 12 0 0 0 0 24h28v20a12 12 0 0 0 24 0v-20h104v20a12 12 0 0 0 24 0v-20h28a12 12 0 0 0 0-24m-92-24.95V156h-24v-24.95a76.3 76.3 0 0 0 24 0m-64-19.67a76.4 76.4 0 0 0 16 11.53V156H76ZM164 156v-33.09a76.4 76.4 0 0 0 16-11.53V156Z"></svg:path>`,
})
export class PhBridgeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseBoldIcon],svg[ph-briefcase-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 100a12 12 0 0 1 12-12h32a12 12 0 0 1 0 24h-32a12 12 0 0 1-12-12m136-32v128a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V68a20 20 0 0 1 20-20h36v-8a28 28 0 0 1 28-28h48a28 28 0 0 1 28 28v8h36a20 20 0 0 1 20 20M100 48h56v-8a4 4 0 0 0-4-4h-48a4 4 0 0 0-4 4ZM44 72v35.23A180.06 180.06 0 0 0 128 128a180 180 0 0 0 84-20.78V72Zm168 120v-58.06A204.3 204.3 0 0 1 128 152a204.2 204.2 0 0 1-84-18.06V192Z"></svg:path>`,
})
export class PhBriefcaseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseMetalBoldIcon],svg[ph-briefcase-metal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 52h-36V40a28 28 0 0 0-28-28h-48a28 28 0 0 0-28 28v12H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V72a20 20 0 0 0-20-20M44 120h168v32H44Zm56-80a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v12h-56Zm112 36v20H44V76ZM44 196v-20h168v20Z"></svg:path>`,
})
export class PhBriefcaseMetalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseSimpleBoldIcon],svg[ph-briefcase-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M216.008 56H180v-8a28.031 28.031 0 0 0-28-28h-48a28.031 28.031 0 0 0-28 28v8H40.008a20.022 20.022 0 0 0-20 20v128a20.022 20.022 0 0 0 20 20h176a20.022 20.022 0 0 0 20-20V76a20.022 20.022 0 0 0-20-20zM100 48a4.004 4.004 0 0 1 4-4h48a4.004 4.004 0 0 1 4 4v8h-56zm112.008 152h-168V80h168z" fill="currentColor"></svg:path>`,
})
export class PhBriefcaseSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroadcastBoldIcon],svg[ph-broadcast-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20m77.39 12.7a84 84 0 0 1-14.78 23.3a12 12 0 0 1-17.89-16a59.92 59.92 0 0 0 0-80a12 12 0 0 1 17.89-16a84.07 84.07 0 0 1 14.78 88.7M83.28 168a12 12 0 0 1-17.89 16a83.94 83.94 0 0 1 0-112a12 12 0 0 1 17.89 16a59.92 59.92 0 0 0 0 80M252 128a123.63 123.63 0 0 1-35.43 86.78A12 12 0 1 1 199.43 198a99.88 99.88 0 0 0 0-140a12 12 0 0 1 17.14-16.8A123.63 123.63 0 0 1 252 128M56.57 198a12 12 0 0 1-17.14 16.8a123.89 123.89 0 0 1 0-173.56A12 12 0 0 1 56.57 58a99.88 99.88 0 0 0 0 140"></svg:path>`,
})
export class PhBroadcastBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroomBoldIcon],svg[ph-broom-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.24 213.21C216.12 203 204 180.64 204 152v-17.27a19.94 19.94 0 0 0-12.62-18.59l-24.86-9.81a4 4 0 0 1-2.26-5.14l21.33-53A32 32 0 0 0 167.17 6a32.13 32.13 0 0 0-40.92 18.2l-.07.18l-21 53.09a3.94 3.94 0 0 1-2.14 2.2a3.9 3.9 0 0 1-3 .06L74.6 69.43A19.89 19.89 0 0 0 52.87 74C31.06 96.43 20 122.68 20 152a115.46 115.46 0 0 0 32.29 80.3A12 12 0 0 0 61 236h171a12 12 0 0 0 5.24-22.79M68.19 92.73L91.06 102a28 28 0 0 0 36.44-15.69l20.95-53a8.32 8.32 0 0 1 10.33-4.81a8 8 0 0 1 4.61 10.57a1 1 0 0 0 0 .11L142 92.29a28.05 28.05 0 0 0 15.68 36.33l22.32 8.83V152c0 1 0 2.07.05 3.1l-122.44-49a102 102 0 0 1 10.58-13.37M116.74 212a83.73 83.73 0 0 1-22.09-39a12 12 0 0 0-23.25 6a110.3 110.3 0 0 0 14.49 33H66.25A91.53 91.53 0 0 1 44 152a84 84 0 0 1 3.41-24.11l136.67 54.66A86.6 86.6 0 0 0 198.66 212Z"></svg:path>`,
})
export class PhBroomBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowserBoldIcon],svg[ph-browser-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 24v24H44V60ZM44 196v-88h168v88Z"></svg:path>`,
})
export class PhBrowserBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowsersBoldIcon],svg[ph-browsers-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 32H76a20 20 0 0 0-20 20v20H36a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-20h20a20 20 0 0 0 20-20V52a20 20 0 0 0-20-20m-44 64v16H40V96Zm0 104H40v-64h136Zm40-40h-16V92a20 20 0 0 0-20-20H80V56h136Z"></svg:path>`,
})
export class PhBrowsersBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugBeetleBoldIcon],svg[ph-bug-beetle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 160a12 12 0 0 0 0-24h-12v-16h12a12 12 0 0 0 0-24h-13.55a83.7 83.7 0 0 0-18.78-38.7l16.82-16.81a12 12 0 1 0-17-17l-18 18a83.7 83.7 0 0 0-91.1 0l-18-18a12 12 0 0 0-17 17L64.33 57.3A83.7 83.7 0 0 0 45.55 96H32a12 12 0 0 0 0 24h12v16H32a12 12 0 0 0 0 24h12a83.6 83.6 0 0 0 1.55 16H32a12 12 0 0 0 0 24h22.15a84 84 0 0 0 147.7 0H224a12 12 0 0 0 0-24h-13.55a83.6 83.6 0 0 0 1.55-16ZM128 52a60.1 60.1 0 0 1 57.82 44H70.18A60.1 60.1 0 0 1 128 52m12 166.79V148a12 12 0 0 0-24 0v70.79A60.09 60.09 0 0 1 68 160v-40h120v40a60.09 60.09 0 0 1-48 58.79"></svg:path>`,
})
export class PhBugBeetleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugBoldIcon],svg[ph-bug-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 88a16 16 0 1 1 16 16a16 16 0 0 1-16-16m-40-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m120 72a91.8 91.8 0 0 1-2.34 20.64l19.15 8.36a12 12 0 0 1-9.62 22l-18-7.85a92 92 0 0 1-162.46 0l-18 7.85a12 12 0 1 1-9.62-22l19.15-8.36A91.8 91.8 0 0 1 36 144v-4H16a12 12 0 0 1 0-24h20v-4a91.8 91.8 0 0 1 2.34-20.64L19.19 83a12 12 0 0 1 9.62-22l18 7.85a92 92 0 0 1 162.46 0l18-7.85a12 12 0 1 1 9.62 22l-19.15 8.36A91.8 91.8 0 0 1 220 112v4h20a12 12 0 0 1 0 24h-20ZM60 116h136v-4a68 68 0 0 0-136 0Zm56 94.92V140H60v4a68.1 68.1 0 0 0 56 66.92M196 144v-4h-56v70.92A68.1 68.1 0 0 0 196 144"></svg:path>`,
})
export class PhBugBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugDroidBoldIcon],svg[ph-bug-droid-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m197.35 51.62l11.14-11.13a12 12 0 1 0-17-17l-12.15 12.2a91.84 91.84 0 0 0-102.68 0L64.49 23.51a12 12 0 0 0-17 17l11.16 11.11A91.58 91.58 0 0 0 36 112v40a92 92 0 0 0 184 0v-40a91.58 91.58 0 0 0-22.65-60.38M196 112v4H60v-4a68 68 0 0 1 136 0m-68 108a68.07 68.07 0 0 1-68-68v-12h136v12a68.07 68.07 0 0 1-68 68m12-132a16 16 0 1 1 16 16a16 16 0 0 1-16-16m-56 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhBugDroidBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingApartmentBoldIcon],svg[ph-building-apartment-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 204h-4V76a12 12 0 0 0-12-12h-36V40a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v60H32a12 12 0 0 0-12 12v92h-4a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24M44 124h36a12 12 0 0 0 12-12V52h72v24a12 12 0 0 0 12 12h36v116h-64v-28a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4v28H44Zm64-48a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24h-16a12 12 0 0 1-12-12m0 36a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24h-16a12 12 0 0 1-12-12m52 0a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24h-16a12 12 0 0 1-12-12m-64 36a12 12 0 0 1-12 12H68a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12m12 0a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24h-16a12 12 0 0 1-12-12m52 0a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24h-16a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhBuildingApartmentBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingBoldIcon],svg[ph-building-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 220h-20V36h4a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24h4v184H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24M68 36h120v184h-24v-36a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v36H68Zm72 184h-24v-24h24ZM84 64a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m52 0a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24h-12a12 12 0 0 1-12-12m-52 40a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m52 0a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24h-12a12 12 0 0 1-12-12m-52 40a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m52 0a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24h-12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhBuildingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingOfficeBoldIcon],svg[ph-building-office-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 204h-12V99.3a12 12 0 0 0-4-23.3h-40V51.3a12 12 0 0 0-4-23.3H40a12 12 0 0 0-4 23.3V204H24a12 12 0 0 0 0 24h220a12 12 0 0 0 0-24m-36-104v104h-20V100ZM60 52h104v152h-16v-44a12 12 0 0 0-12-12H88a12 12 0 0 0-12 12v44H60Zm64 152h-24v-32h24ZM72 80a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12m48 0a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12m-48 40a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12m48 0a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhBuildingOfficeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingsBoldIcon],svg[ph-buildings-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 204h-12V96a20 20 0 0 0-20-20h-36V32a20 20 0 0 0-28.45-18.12l-104 48.54A20.06 20.06 0 0 0 28 80.55V204H16a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24m-36-104v104h-32V100ZM52 83.09l96-44.79V204H52ZM132 112v12a12 12 0 0 1-24 0v-12a12 12 0 0 1 24 0m-40 0v12a12 12 0 0 1-24 0v-12a12 12 0 0 1 24 0m0 52v12a12 12 0 0 1-24 0v-12a12 12 0 0 1 24 0m40 0v12a12 12 0 0 1-24 0v-12a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhBuildingsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBulldozerBoldIcon],svg[ph-bulldozer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 196h-8a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h8a12 12 0 0 0 0-24h-8a28 28 0 0 0-28 28v4h-9.68a44.13 44.13 0 0 0-34-31.2l-35.2-84.49A20 20 0 0 0 110.67 36H24A20 20 0 0 0 4 56v101.7A44 44 0 0 0 44 220h112a44.06 44.06 0 0 0 42.32-32H208v4a28 28 0 0 0 28 28h8a12 12 0 0 0 0-24m-106-64H68V60h40ZM44 60v72a43.9 43.9 0 0 0-16 3V60Zm112 136H44a20 20 0 0 1 0-40h112a20 20 0 0 1 0 40"></svg:path>`,
})
export class PhBulldozerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBusBoldIcon],svg[ph-bus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 28H72a36 36 0 0 0-36 36v144a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-16h48v16a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20V64a36 36 0 0 0-36-36M60 168v-56h136v56ZM72 52h112a12 12 0 0 1 12 12v24H60V64a12 12 0 0 1 12-12m8 152H60v-12h20Zm96 0v-12h20v12Zm-68-64a16 16 0 1 1-16-16a16 16 0 0 1 16 16m72 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m76-60v24a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0M24 80v24a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhBusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phButterflyBoldIcon],svg[ph-butterfly-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.79 48c-4.27-5.48-12.4-12-26.88-12c-17.86 0-40.5 11.7-60.57 31.3c-3 2.89-5.74 5.85-8.34 8.84V56a12 12 0 0 0-24 0v20.14c-2.6-3-5.38-6-8.34-8.84C87.59 47.7 65 36 47.09 36c-14.48 0-22.61 6.54-26.88 12C7 65 12 93.91 19.28 122.66c5.75 22.64 17.8 33 28.88 37.69A48.12 48.12 0 0 0 92 228a47.87 47.87 0 0 0 36-16.28A48 48 0 0 0 212 180a48.5 48.5 0 0 0-4.14-19.65c11.08-4.67 23.13-15 28.88-37.69C244 93.91 249 65 235.79 48M92 204a24 24 0 0 1-24-24a24.36 24.36 0 0 1 21.31-24.07a12 12 0 0 0-2.64-23.86a47.6 47.6 0 0 0-21.5 7.93c-8.19-.29-18-4.92-22.63-23.24c-7.41-29.18-8.55-47.35-3.39-54C39.74 62 41.3 60 47.09 60c11.21 0 28.82 9.83 43.81 24.47c15.25 14.9 25.1 31.86 25.1 43.2V180a24 24 0 0 1-24 24m121.45-87.25C208.81 135.07 199 139.7 190.82 140a47.54 47.54 0 0 0-21.51-7.92a12 12 0 1 0-2.64 23.86A24.36 24.36 0 0 1 188 180a24 24 0 1 1-48 0v-52.33c0-11.34 9.85-28.3 25.1-43.2C180.09 69.83 197.7 60 208.91 60c5.79 0 7.35 2 7.94 2.76c5.15 6.64 4.02 24.81-3.39 53.99Z"></svg:path>`,
})
export class PhButterflyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCableCarBoldIcon],svg[ph-cable-car-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M251.81 29.89a12 12 0 0 0-13.92-9.7l-224 40A12 12 0 0 0 16 84a12 12 0 0 0 2.12-.19L116 66.33V92H64a36 36 0 0 0-36 36v64a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36v-64a36 36 0 0 0-36-36h-52V62.05l102.11-18.24a12 12 0 0 0 9.7-13.92M108 156v-40h40v40Zm-44-40h20v40H52v-28a12 12 0 0 1 12-12m128 88H64a12 12 0 0 1-12-12v-12h152v12a12 12 0 0 1-12 12m12-76v28h-32v-40h20a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCableCarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCactusBoldIcon],svg[ph-cactus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 204h-44v-16a72.08 72.08 0 0 0 72-72a32 32 0 0 0-64 0a8 8 0 0 1-8 8V56a44 44 0 0 0-88 0v28a8 8 0 0 1-8-8a32 32 0 0 0-64 0a72.08 72.08 0 0 0 72 72v56H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24M96 124H84a48.05 48.05 0 0 1-48-48a8 8 0 0 1 16 0a32 32 0 0 0 32 32h12a12 12 0 0 0 12-12V56a20 20 0 0 1 40 0v80a12 12 0 0 0 12 12h12a32 32 0 0 0 32-32a8 8 0 0 1 16 0a48.05 48.05 0 0 1-48 48h-12a12 12 0 0 0-12 12v28h-40v-68a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCactusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCakeBoldIcon],svg[ph-cake-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 112a28 28 0 0 0-28-28h-68v-2.06A36.07 36.07 0 0 0 164 48c0-31.06-29.38-46.11-30.63-46.73a12 12 0 0 0-10.74 0C121.38 1.89 92 16.94 92 48a36.07 36.07 0 0 0 24 33.94V84H48a28 28 0 0 0-28 28v23.33a44.7 44.7 0 0 0 8 25.49V200a28 28 0 0 0 28 28h144a28 28 0 0 0 28-28v-39.18a44.7 44.7 0 0 0 8-25.49ZM124 29.93a43 43 0 0 1 4-3.57a41 41 0 0 1 4 3.57c5.33 5.52 8 11.6 8 18.07a12 12 0 0 1-24 0c0-6.47 2.71-12.55 8-18.07M44 112a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4v23.33c0 11.1-8.72 20.37-19.43 20.66A20 20 0 0 1 172 136a12 12 0 0 0-24 0a20 20 0 0 1-40 0a12 12 0 0 0-24 0a20 20 0 0 1-20.57 20C52.72 155.7 44 146.43 44 135.33Zm156 92H56a4 4 0 0 1-4-4v-21.71A42.7 42.7 0 0 0 62.77 180a43.68 43.68 0 0 0 31.91-12.44c.46-.44.9-.9 1.33-1.35a44 44 0 0 0 64 0c.43.45.87.91 1.33 1.35A43.66 43.66 0 0 0 192 180h1.25a42.7 42.7 0 0 0 10.75-1.71V200a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhCakeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalculatorBoldIcon],svg[ph-calculator-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H60V44h136ZM80 76a12 12 0 0 1 12-12h72a12 12 0 0 1 0 24H92a12 12 0 0 1-12-12m40 52a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-48 48a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhCalculatorBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarBlankBoldIcon],svg[ph-calendar-blank-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M68 52a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16v24H52V52ZM52 204V100h152v104Z"></svg:path>`,
})
export class PhCalendarBlankBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarBoldIcon],svg[ph-calendar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M68 52a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16v24H52V52ZM52 204V100h152v104Zm60-80v56a12 12 0 0 1-24 0v-36.68a12 12 0 0 1-9.37-22l16-8A12 12 0 0 1 112 124m61.49 33.88L163.9 168h4.1a12 12 0 0 1 0 24h-32a12 12 0 0 1-8.71-20.25L155.45 142a4 4 0 0 0 .55-2a4 4 0 0 0-7.47-2a12 12 0 0 1-20.78-12A28 28 0 0 1 180 140a27.77 27.77 0 0 1-5.64 16.86a11 11 0 0 1-.87 1.02"></svg:path>`,
})
export class PhCalendarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarCheckBoldIcon],svg[ph-calendar-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M68 52a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16v24H52V52ZM52 204V100h152v104Zm120.49-84.49a12 12 0 0 1 0 17l-48 48a12 12 0 0 1-17 0l-24-24a12 12 0 0 1 17-17L116 159l39.51-39.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhCalendarCheckBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotBoldIcon],svg[ph-calendar-dot-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 152a20 20 0 1 1-20-20a20 20 0 0 1 20 20m80-104v160a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h20v-4a12 12 0 0 1 24 0v4h72v-4a12 12 0 0 1 24 0v4h20a20 20 0 0 1 20 20M52 52v24h152V52h-16a12 12 0 0 1-24 0H92a12 12 0 0 1-24 0Zm152 152V100H52v104Z"></svg:path>`,
})
export class PhCalendarDotBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotsBoldIcon],svg[ph-calendar-dots-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M68 52a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16v24H52V52ZM52 204V100h152v104Zm92-76a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-96 48a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhCalendarDotsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarHeartBoldIcon],svg[ph-calendar-heart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h16a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16ZM152 84a35.86 35.86 0 0 0-24 9.19A36 36 0 0 0 68 120c0 17 9.53 33.56 28.32 49.22a151.5 151.5 0 0 0 26.31 17.51a12 12 0 0 0 10.74 0a151.5 151.5 0 0 0 26.31-17.51C178.47 153.56 188 137 188 120a36 36 0 0 0-36-36m-24 78.29c-13.15-7.86-36-25.06-36-42.29a12 12 0 0 1 24 0a12 12 0 0 0 24 0a12 12 0 0 1 24 0c0 17.23-22.86 34.44-36 42.29"></svg:path>`,
})
export class PhCalendarHeartBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarMinusBoldIcon],svg[ph-calendar-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M68 52a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16v24H52V52ZM52 204V100h152v104Zm112-52a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCalendarMinusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarPlusBoldIcon],svg[ph-calendar-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M68 52a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16v24H52V52ZM52 204V100h152v104Zm112-52a12 12 0 0 1-12 12h-12v12a12 12 0 0 1-24 0v-12h-12a12 12 0 0 1 0-24h12v-12a12 12 0 0 1 24 0v12h12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCalendarPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarSlashBoldIcon],svg[ph-calendar-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93A12 12 0 0 0 48 28a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a12 12 0 0 0 8.88-20.07ZM52 204V62.24L180.87 204ZM228 48v117.34a12 12 0 1 1-24 0V100h-58.31a12 12 0 0 1 0-24H204V52h-16a12 12 0 0 1-24 0h-61.94a12 12 0 0 1 0-24H164v-4a12 12 0 0 1 24 0v4h20a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhCalendarSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarStarBoldIcon],svg[ph-calendar-star-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h16a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16Zm-27.08-94.35l-27.42-2.12L139 83.25a12 12 0 0 0-22 0l-10.5 24.28l-27.42 2.12a12 12 0 0 0-6.72 21.22l20.58 17l-6.25 25.26a12 12 0 0 0 17.73 13.22L128 172.46l23.58 13.88a12 12 0 0 0 17.73-13.22l-6.25-25.26l20.58-17a12 12 0 0 0-6.72-21.22Zm-35 24.51a12 12 0 0 0-4 12.13l1.21 4.89l-5.07-3a12.06 12.06 0 0 0-12.18 0l-5.07 3l1.21-4.89a12 12 0 0 0-4-12.13l-3.47-2.87l5-.39a12 12 0 0 0 10.09-7.21l2.33-5.4l2.33 5.4a12 12 0 0 0 10.09 7.21l5 .39Z"></svg:path>`,
})
export class PhCalendarStarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarXBoldIcon],svg[ph-calendar-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160.49 136.49L145 152l15.52 15.51a12 12 0 0 1-17 17L128 169l-15.51 15.52a12 12 0 0 1-17-17L111 152l-15.49-15.51a12 12 0 1 1 17-17L128 135l15.51-15.52a12 12 0 1 1 17 17ZM228 48v160a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h20v-4a12 12 0 0 1 24 0v4h72v-4a12 12 0 0 1 24 0v4h20a20 20 0 0 1 20 20M52 52v24h152V52h-16a12 12 0 0 1-24 0H92a12 12 0 0 1-24 0Zm152 152V100H52v104Z"></svg:path>`,
})
export class PhCalendarXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCallBellBoldIcon],svg[ph-call-bell-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 180h208a12 12 0 0 0 0-24h-4.09A100.16 100.16 0 0 0 140 60.72V44h12a12 12 0 0 0 0-24h-48a12 12 0 0 0 0 24h12v16.72A100.16 100.16 0 0 0 28.09 156H24a12 12 0 0 0 0 24m104-96a76.09 76.09 0 0 1 75.89 72H52.11A76.09 76.09 0 0 1 128 84m116 124a12 12 0 0 1-12 12H24a12 12 0 0 1 0-24h208a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCallBellBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraBoldIcon],svg[ph-camera-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 52h-25.58L170 33.34A12 12 0 0 0 160 28H96a12 12 0 0 0-10 5.34L73.57 52H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 140a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h32a12 12 0 0 0 10-5.34L102.42 52h51.15L166 70.66A12 12 0 0 0 176 76h32a4 4 0 0 1 4 4ZM128 84a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhCameraBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraPlusBoldIcon],svg[ph-camera-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 136a12 12 0 0 1-12 12h-20v20a12 12 0 0 1-24 0v-20H96a12 12 0 0 1 0-24h20v-20a12 12 0 0 1 24 0v20h20a12 12 0 0 1 12 12m64-56v112a28 28 0 0 1-28 28H48a28 28 0 0 1-28-28V80a28 28 0 0 1 28-28h25.58l10.06-15.09A20 20 0 0 1 100.28 28h55.44a20 20 0 0 1 16.64 8.91L182.42 52H208a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4h-32a12 12 0 0 1-10-5.34L153.58 52h-51.16L90 70.66A12 12 0 0 1 80 76H48a4 4 0 0 0-4 4v112a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhCameraPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraRotateBoldIcon],svg[ph-camera-rotate-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 52h-25.58L170 33.34A12 12 0 0 0 160 28H96a12 12 0 0 0-10 5.34L73.57 52H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 140a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h32a12 12 0 0 0 10-5.34L102.42 52h51.15L166 70.66A12 12 0 0 0 176 76h32a4 4 0 0 1 4 4Zm-32-92v20a12 12 0 0 1-12 12h-20a12 12 0 0 1-7.76-21.14a28.07 28.07 0 0 0-29 2.73A12 12 0 0 1 96.79 94.4a52.28 52.28 0 0 1 61.14-.91A12 12 0 0 1 180 100m-18.41 52.8a12 12 0 0 1-2.38 16.8a51.7 51.7 0 0 1-31.13 10.34a52.3 52.3 0 0 1-30-9.44A12 12 0 0 1 76 164v-20a12 12 0 0 1 12-12h20a12 12 0 0 1 7.76 21.14a28.07 28.07 0 0 0 29-2.73a12 12 0 0 1 16.83 2.39"></svg:path>`,
})
export class PhCameraRotateBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraSlashBoldIcon],svg[ph-camera-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93a12 12 0 1 0-17.76 16.14l4 4.37A28 28 0 0 0 20 80v112a28 28 0 0 0 28 28h147.42l3.7 4.07a12 12 0 0 0 17.76-16.14Zm49.35 90L136 154.64a24 24 0 0 1-29.77-32.75ZM48 196a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h16.51l24.92 27.41a48 48 0 0 0 63.34 69.67L173.6 196ZM236 80v94.14a12 12 0 0 1-24 0V80a4 4 0 0 0-4-4h-32a12 12 0 0 1-10-5.34L153.57 52h-51.51a12 12 0 0 1 0-24H160a12 12 0 0 1 10 5.34L182.42 52H208a28 28 0 0 1 28 28"></svg:path>`,
})
export class PhCameraSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCampfireBoldIcon],svg[ph-campfire-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.51 227.4A12 12 0 0 1 216 236a12.2 12.2 0 0 1-3.4-.49l-84.6-25l-84.6 25a12.2 12.2 0 0 1-3.4.49a12 12 0 0 1-3.4-23.51L85.65 198L36.6 183.51a12 12 0 0 1 6.8-23l84.6 25l84.6-25a12 12 0 1 1 6.8 23L170.35 198l49.05 14.49a12 12 0 0 1 8.11 14.91M64 104c0-50.59 55.93-81.28 58.31-82.57a12 12 0 0 1 11.38 0C136.07 22.72 192 53.41 192 104a64 64 0 0 1-128 0m64 40a12 12 0 0 0 12-12c0-6.47-2.71-12.55-8-18.07a41 41 0 0 0-4-3.57a43 43 0 0 0-4 3.57c-5.33 5.52-8 11.6-8 18.07a12 12 0 0 0 12 12m-40-40a39.8 39.8 0 0 0 4.85 19.08c4.81-25 28.66-37.25 29.78-37.81a12 12 0 0 1 10.74 0c1.12.56 25 12.78 29.78 37.81A39.8 39.8 0 0 0 168 104c0-28.34-27.74-49.81-40-57.92c-12.25 8.1-40 29.58-40 57.92"></svg:path>`,
})
export class PhCampfireBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarBatteryBoldIcon],svg[ph-car-battery-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 140a12 12 0 0 1-12 12h-4v4a12 12 0 0 1-24 0v-4h-4a12 12 0 0 1 0-24h4v-4a12 12 0 0 1 24 0v4h4a12 12 0 0 1 12 12m-100-12H68a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24m144-36v92a20 20 0 0 1-20 20H32a20 20 0 0 1-20-20V92a20 20 0 0 1 20-20h12V56a20 20 0 0 1 20-20h32a20 20 0 0 1 20 20v16h24V56a20 20 0 0 1 20-20h32a20 20 0 0 1 20 20v16h12a20 20 0 0 1 20 20m-80-20h24V60h-24Zm-96 0h24V60H68Zm152 24H36v84h184Z"></svg:path>`,
})
export class PhCarBatteryBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarBoldIcon],svg[ph-car-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 100h-8.2l-26.72-60.12A20 20 0 0 0 186.8 28H69.2a20 20 0 0 0-18.28 11.88L24.2 100H16a12 12 0 0 0 0 24h4v76a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-20h80v20a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-76h4a12 12 0 0 0 0-24M71.8 52h112.4l21.33 48H50.47ZM64 196H44v-16h20Zm128 0v-16h20v16Zm20-40H44v-32h168Z"></svg:path>`,
})
export class PhCarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarProfileBoldIcon],svg[ph-car-profile-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 108h-23l-42.17-42.14A19.86 19.86 0 0 0 156.69 60H48.28a20 20 0 0 0-16.64 8.91L2 113.34A12 12 0 0 0 0 120v48a20 20 0 0 0 20 20h13.5a34 34 0 0 0 65 0h59a34 34 0 0 0 65 0H236a20 20 0 0 0 20-20v-40a20 20 0 0 0-20-20M50.42 84H155l24 24H34.42ZM66 188a10 10 0 1 1 10-10a10 10 0 0 1-10 10m124 0a10 10 0 1 1 10-10a10 10 0 0 1-10 10m42-24h-11a34 34 0 0 0-62 0H97a34 34 0 0 0-62 0H24v-32h208Z"></svg:path>`,
})
export class PhCarProfileBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarSimpleBoldIcon],svg[ph-car-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 100h-8.2l-26.72-60.12A20 20 0 0 0 186.8 28H69.2a20 20 0 0 0-18.28 11.88L24.2 100H16a12 12 0 0 0 0 24h4v76a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-12h80v12a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-76h4a12 12 0 0 0 0-24M71.8 52h112.4l21.33 48H50.47ZM212 196h-20v-20a12 12 0 0 0-12-12H76a12 12 0 0 0-12 12v20H44v-72h168Z"></svg:path>`,
})
export class PhCarSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardholderBoldIcon],svg[ph-cardholder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V72a28 28 0 0 0-28-28M48 68h160a4 4 0 0 1 4 4v16h-52a12 12 0 0 0-12 12a20 20 0 0 1-40 0a12 12 0 0 0-12-12H44V72a4 4 0 0 1 4-4m160 120H48a4 4 0 0 1-4-4v-72h41.66a44 44 0 0 0 84.68 0H212v72a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhCardholderBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsBoldIcon],svg[ph-cards-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 72H36a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V92a20 20 0 0 0-20-20m-4 128H40V96h136Zm64-148v124a12 12 0 0 1-24 0V56H64a12 12 0 0 1 0-24h156a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhCardsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsThreeBoldIcon],svg[ph-cards-three-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 96H48a20 20 0 0 0-20 20v84a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-84a20 20 0 0 0-20-20m-4 100H52v-76h152ZM44 68a12 12 0 0 1 12-12h144a12 12 0 0 1 0 24H56a12 12 0 0 1-12-12m16-40a12 12 0 0 1 12-12h112a12 12 0 0 1 0 24H72a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhCardsThreeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleDownBoldIcon],svg[ph-caret-circle-double-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.4 51.6a108 108 0 1 0 0 152.8a108.16 108.16 0 0 0 0-152.8m-17 135.82a84 84 0 1 1 0-118.84a84.12 84.12 0 0 1 .02 118.84ZM168.5 79.49a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L128 103l23.53-23.53a12 12 0 0 1 16.97.02m0 56a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L128 159l23.53-23.52a12 12 0 0 1 16.97.04Z"></svg:path>`,
})
export class PhCaretCircleDoubleDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleLeftBoldIcon],svg[ph-caret-circle-double-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.4 51.6a108 108 0 1 0 0 152.8a108.16 108.16 0 0 0 0-152.8m-17 135.82a84 84 0 1 1 0-118.84a84.12 84.12 0 0 1 .02 118.84Zm-10.91-82.95L153 128l23.53 23.53a12 12 0 1 1-17 17l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 0 1 17 17Zm-56 0L97 128l23.52 23.53a12 12 0 1 1-17 17l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 1 1 17 17Z"></svg:path>`,
})
export class PhCaretCircleDoubleLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleRightBoldIcon],svg[ph-caret-circle-double-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.4 51.6a108 108 0 1 0 0 152.8a108.16 108.16 0 0 0 0-152.8m-17 135.82a84 84 0 1 1 0-118.84a84.12 84.12 0 0 1 .02 118.84Zm-58.93-67.91a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17-17L103 128l-23.51-23.53a12 12 0 1 1 17-17Zm56 17l-32 32a12 12 0 0 1-17-17L159 128l-23.52-23.53a12 12 0 1 1 17-17l32 32a12 12 0 0 1 .03 17.02Z"></svg:path>`,
})
export class PhCaretCircleDoubleRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleUpBoldIcon],svg[ph-caret-circle-double-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.4 51.6a108 108 0 1 0 0 152.8a108.16 108.16 0 0 0 0-152.8m-17 135.82a84 84 0 1 1 0-118.84a84.12 84.12 0 0 1 .02 118.84Zm-18.9-27.89a12 12 0 0 1-17 17L128 153l-23.53 23.53a12 12 0 0 1-17-17l32-32a12 12 0 0 1 17 0Zm0-56a12 12 0 1 1-17 17L128 97l-23.53 23.52a12 12 0 1 1-17-17l32-32a12 12 0 0 1 17 0Z"></svg:path>`,
})
export class PhCaretCircleDoubleUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDownBoldIcon],svg[ph-caret-circle-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m48.49-108.49a12 12 0 0 1 0 17l-40 40a12 12 0 0 1-17 0l-40-40a12 12 0 0 1 17-17L128 135l31.51-31.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhCaretCircleDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleLeftBoldIcon],svg[ph-caret-circle-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m24.49-115.51L121 128l31.52 31.51a12 12 0 0 1-17 17l-40-40a12 12 0 0 1 0-17l40-40a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhCaretCircleLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleRightBoldIcon],svg[ph-caret-circle-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m32.49-92.49a12 12 0 0 1 0 17l-40 40a12 12 0 0 1-17-17L135 128l-31.49-31.51a12 12 0 0 1 17-17Z"></svg:path>`,
})
export class PhCaretCircleRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpBoldIcon],svg[ph-caret-circle-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m48.49-76.49a12 12 0 0 1-17 17L128 121l-31.51 31.49a12 12 0 0 1-17-17l40-40a12 12 0 0 1 17 0Z"></svg:path>`,
})
export class PhCaretCircleUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpDownBoldIcon],svg[ph-caret-circle-up-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m40.49-116.49a12 12 0 0 1-17 17L128 89l-23.51 23.52a12 12 0 0 1-17-17l32-32a12 12 0 0 1 17 0Zm0 48a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 0 1 17-17L128 167l23.51-23.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhCaretCircleUpDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleDownBoldIcon],svg[ph-caret-double-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.49 127.51a12 12 0 0 1 0 17l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 1 1 17-17L128 199l71.51-71.52a12 12 0 0 1 16.98.03m-97 17a12 12 0 0 0 17 0l80-80a12 12 0 0 0-17-17L128 119L56.49 47.51a12 12 0 0 0-17 17Z"></svg:path>`,
})
export class PhCaretDoubleDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleLeftBoldIcon],svg[ph-caret-double-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L137 128ZM57 128l71.52-71.51a12 12 0 0 0-17-17l-80 80a12 12 0 0 0 0 17l80 80a12 12 0 0 0 17-17Z"></svg:path>`,
})
export class PhCaretDoubleLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleRightBoldIcon],svg[ph-caret-double-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m144.49 136.49l-80 80a12 12 0 0 1-17-17L119 128L47.51 56.49a12 12 0 0 1 17-17l80 80a12 12 0 0 1-.02 17m80-17l-80-80a12 12 0 1 0-17 17L199 128l-71.52 71.51a12 12 0 0 0 17 17l80-80a12 12 0 0 0 .01-17Z"></svg:path>`,
})
export class PhCaretDoubleRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleUpBoldIcon],svg[ph-caret-double-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.49 191.51a12 12 0 0 1-17 17L128 137l-71.51 71.49a12 12 0 0 1-17-17l80-80a12 12 0 0 1 17 0Zm-160-63L128 57l71.51 71.52a12 12 0 0 0 17-17l-80-80a12 12 0 0 0-17 0l-80 80a12 12 0 0 0 17 17Z"></svg:path>`,
})
export class PhCaretDoubleUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDownBoldIcon],svg[ph-caret-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 104.49l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhCaretDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLeftBoldIcon],svg[ph-caret-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"></svg:path>`,
})
export class PhCaretLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineDownBoldIcon],svg[ph-caret-line-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.51 80.49a12 12 0 0 1 17-17L128 135l71.51-71.52a12 12 0 0 1 17 17l-80 80a12 12 0 0 1-17 0ZM208 180H48a12 12 0 0 0 0 24h160a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhCaretLineDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineLeftBoldIcon],svg[ph-caret-line-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L129 128ZM72 36a12 12 0 0 0-12 12v160a12 12 0 0 0 24 0V48a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCaretLineLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineRightBoldIcon],svg[ph-caret-line-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152.49 119.51a12 12 0 0 1 0 17l-80 80a12 12 0 0 1-17-17L127 128L55.51 56.49a12 12 0 0 1 17-17ZM184 36a12 12 0 0 0-12 12v160a12 12 0 0 0 24 0V48a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCaretLineRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineUpBoldIcon],svg[ph-caret-line-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.49 183.51a12 12 0 0 1-17 17L128 129l-71.51 71.49a12 12 0 0 1-17-17l80-80a12 12 0 0 1 17 0ZM48 84h160a12 12 0 0 0 0-24H48a12 12 0 0 0 0 24"></svg:path>`,
})
export class PhCaretLineUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretRightBoldIcon],svg[ph-caret-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17"></svg:path>`,
})
export class PhCaretRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpBoldIcon],svg[ph-caret-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.49 168.49a12 12 0 0 1-17 0L128 97l-71.51 71.49a12 12 0 0 1-17-17l80-80a12 12 0 0 1 17 0l80 80a12 12 0 0 1 0 17"></svg:path>`,
})
export class PhCaretUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpDownBoldIcon],svg[ph-caret-up-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184.49 167.51a12 12 0 0 1 0 17l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 0 1 17-17L128 207l39.51-39.52a12 12 0 0 1 16.98.03m-96-79L128 49l39.51 39.52a12 12 0 0 0 17-17l-48-48a12 12 0 0 0-17 0l-48 48a12 12 0 0 0 17 17Z"></svg:path>`,
})
export class PhCaretUpDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarrotBoldIcon],svg[ph-carrot-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 60h-19l19.51-19.51a12 12 0 1 0-17-17L196 43V24a12 12 0 0 0-24 0v26a68 68 0 0 0-76 13.87C55.45 103.68 25.18 197 21.78 207.77A20 20 0 0 0 40 236a20.1 20.1 0 0 0 8.24-1.78c7.64-2.42 56.79-18.34 98.91-41.82l.54-.3c17.1-9.57 33-20.39 44.44-32A68 68 0 0 0 206 84h26a12 12 0 0 0 0-24m-56.89 83.12l-.09.09c-8.11 8.28-19.11 16.2-31.33 23.52l-23.21-23.21a12 12 0 1 0-17 17l18.22 18.22c-30.29 15.17-62.13 26.42-75.26 30.82c6.77-20.22 29.79-84.8 58.34-119.74l30.7 30.7a12 12 0 1 0 17-17l-29.94-29.94a44 44 0 0 1 52.57 69.54"></svg:path>`,
})
export class PhCarrotBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCashRegisterBoldIcon],svg[ph-cash-register-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.61 157l-22.44-86a20 20 0 0 0-19.35-15H140V40a20 20 0 0 0-20-20H80a20 20 0 0 0-20 20v16h-5.82a20 20 0 0 0-19.35 15l-22.44 86a12 12 0 0 0-.39 3v32a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-32a12 12 0 0 0-.39-3M84 44h32v12H84ZM57.27 80h141.46l17.74 68H39.53ZM36 188v-16h184v16Zm28-72a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12m48 0a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12m48 0a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhCashRegisterBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCassetteTapeBoldIcon],svg[ph-cassette-tape-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144h-37l-12.6-16.8a8 8 0 0 0-6.4-3.2H92a8 8 0 0 0-6.4 3.2L73 188H36V68h184ZM82 152h92a34 34 0 0 0 0-68H82a34 34 0 0 0 0 68m0-44a10 10 0 1 1-10 10a10 10 0 0 1 10-10m102 10a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-42.5 10h-27a34.1 34.1 0 0 0 0-20h27a34.1 34.1 0 0 0 0 20"></svg:path>`,
})
export class PhCassetteTapeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCastleTurretBoldIcon],svg[ph-castle-turret-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 212h-12v-95l10.14-10.14A19.86 19.86 0 0 0 220 92.69V48a20 20 0 0 0-20-20H56a20 20 0 0 0-20 20v44.69a19.86 19.86 0 0 0 5.86 14.14L52 117v95H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24M72.49 103.51L60 91V52h28v24a12 12 0 0 0 24 0V52h32v24a12 12 0 0 0 24 0V52h28v39l-12.49 12.48A12 12 0 0 0 180 112v100h-16v-44a36 36 0 0 0-72 0v44H76V112a12 12 0 0 0-3.51-8.49M140 212h-24v-44a12 12 0 0 1 24 0Z"></svg:path>`,
})
export class PhCastleTurretBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCatBoldIcon],svg[ph-cat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.65 29.53a20 20 0 0 0-21.79 4.34c-.2.2-.39.4-.57.61l-15 17.3a115.34 115.34 0 0 0-116.5 0l-15-17.3c-.18-.21-.37-.41-.57-.61A20 20 0 0 0 20 48v88c0 55.14 48.45 100 108 100s108-44.86 108-100V48a20 20 0 0 0-12.35-18.47M212 136c0 38.22-31.35 69.93-72 75.21V197l12.49-12.49a12 12 0 0 0-17-17L128 175l-7.51-7.52a12 12 0 0 0-17 17L116 197v14.24c-40.65-5.28-72-37-72-75.21V58.74l14.54 16.73a12 12 0 0 0 16.21 1.76A86 86 0 0 1 96 65.74V88a12 12 0 0 0 24 0V60.35q4-.35 8-.35t8 .35V88a12 12 0 0 0 24 0V65.74a86.2 86.2 0 0 1 21.25 11.49a12 12 0 0 0 16.21-1.76L212 58.74Zm-112 4a16 16 0 1 1-16-16a16 16 0 0 1 16 16m88 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhCatBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalFullBoldIcon],svg[ph-cell-signal-full-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 72v128a12 12 0 0 1-24 0V72a12 12 0 0 1 24 0m28-52a12 12 0 0 0-12 12v168a12 12 0 0 0 24 0V32a12 12 0 0 0-12-12m-80 80a12 12 0 0 0-12 12v88a12 12 0 0 0 24 0v-88a12 12 0 0 0-12-12m-40 40a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12m-40 40a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCellSignalFullBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalHighBoldIcon],svg[ph-cell-signal-high-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 72v128a12 12 0 0 1-24 0V72a12 12 0 0 1 24 0m-52 28a12 12 0 0 0-12 12v88a12 12 0 0 0 24 0v-88a12 12 0 0 0-12-12m-40 40a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12m-40 40a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCellSignalHighBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalLowBoldIcon],svg[ph-cell-signal-low-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 152v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-52 28a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCellSignalLowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalMediumBoldIcon],svg[ph-cell-signal-medium-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 112v88a12 12 0 0 1-24 0v-88a12 12 0 0 1 24 0m-52 28a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12m-40 40a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCellSignalMediumBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalNoneBoldIcon],svg[ph-cell-signal-none-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 192v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhCellSignalNoneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalSlashBoldIcon],svg[ph-cell-signal-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 152v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-52 28a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12m176.88 27.93l-160-176a12 12 0 1 0-17.76 16.14L108 123.84V200a12 12 0 0 0 24 0v-49.76l16 17.6V200a12 12 0 0 0 24 0v-5.76l27.12 29.83a12 12 0 0 0 17.76-16.14M160 115.74a12 12 0 0 0 12-12V72a12 12 0 0 0-24 0v31.74a12 12 0 0 0 12 12m40 44a12 12 0 0 0 12-12V32a12 12 0 0 0-24 0v115.74a12 12 0 0 0 12 12"></svg:path>`,
})
export class PhCellSignalSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalXBoldIcon],svg[ph-cell-signal-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.49 191.51a12 12 0 0 1-17 17L184 193l-15.51 15.52a12 12 0 0 1-17-17L167 176l-15.52-15.51a12 12 0 0 1 17-17L184 159l15.51-15.52a12 12 0 0 1 17 17L201 176ZM160 120a12 12 0 0 0 12-12V72a12 12 0 0 0-24 0v36a12 12 0 0 0 12 12m40 0a12 12 0 0 0 12-12V32a12 12 0 0 0-24 0v76a12 12 0 0 0 12 12m-80-20a12 12 0 0 0-12 12v88a12 12 0 0 0 24 0v-88a12 12 0 0 0-12-12m-40 40a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12m-40 40a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCellSignalXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellTowerBoldIcon],svg[ph-cell-tower-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138.67 86.51a12 12 0 0 0-21.34 0l-72 140a12 12 0 1 0 21.34 11l11-21.49h100.61l11.05 21.49a12 12 0 1 0 21.34-11ZM128 118.24L145.36 152h-34.72ZM90.07 192l8.22-16h59.42l8.22 16Zm84.44-123.27a12 12 0 1 1-21.45 10.75a28 28 0 0 0-50.37.52A12 12 0 1 1 81 69.7A52.28 52.28 0 0 1 128 40a51.74 51.74 0 0 1 46.51 28.73m-124.58 76a92 92 0 1 1 156.14 0A12 12 0 0 1 185.71 132a68 68 0 1 0-115.42 0a12 12 0 0 1-20.36 12.7Z"></svg:path>`,
})
export class PhCellTowerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCertificateBoldIcon],svg[ph-certificate-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 140a12 12 0 0 1-12 12H72a12 12 0 0 1 0-24h44a12 12 0 0 1 12 12m-12-52H72a12 12 0 0 0 0 24h44a12 12 0 0 0 0-24m120 79.14V228a12 12 0 0 1-17.95 10.42L196 225.82l-22 12.6A12 12 0 0 1 156 228v-24H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20v32.86a55.87 55.87 0 0 1 0 78.28M196 160a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-40 20v-12.86a56 56 0 0 1 56-92.8V60H44v120Zm56 27.32v-25.66a55.87 55.87 0 0 1-32 0v25.66l10.05-5.74a12 12 0 0 1 11.9 0Z"></svg:path>`,
})
export class PhCertificateBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChairBoldIcon],svg[ph-chair-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 128h-28v-20h12a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20H64a20 20 0 0 0-20 20v48a20 20 0 0 0 20 20h12v20H48a20 20 0 0 0-20 20v24a20 20 0 0 0 20 20h8v32a12 12 0 0 0 24 0v-32h96v32a12 12 0 0 0 24 0v-32h8a20 20 0 0 0 20-20v-24a20 20 0 0 0-20-20M68 44h120v40H68Zm32 64h56v20h-56Zm104 60H52v-16h152Z"></svg:path>`,
})
export class PhChairBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardBoldIcon],svg[ph-chalkboard-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 188h-4V56a20 20 0 0 0-20-20H40a20 20 0 0 0-20 20v132h-4a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24M44 60h168v128h-16v-28a12 12 0 0 0-12-12h-64a12 12 0 0 0-12 12v28H84v-88h88v20a12 12 0 0 0 24 0V88a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v100H44Zm128 128h-40v-16h40Z"></svg:path>`,
})
export class PhChalkboardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardSimpleBoldIcon],svg[ph-chalkboard-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 188h-4v-28a12 12 0 0 0-12-12h-64a12 12 0 0 0-12 12v28H44V60h168v60a12 12 0 0 0 24 0V56a20 20 0 0 0-20-20H40a20 20 0 0 0-20 20v132h-4a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24m-68-16h40v16h-40Z"></svg:path>`,
})
export class PhChalkboardSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardTeacherBoldIcon],svg[ph-chalkboard-teacher-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 84a12 12 0 0 1 12-12h120a12 12 0 0 1 12 12v88a12 12 0 0 1-24 0V96H68a12 12 0 0 1-12-12m180-28v144a20 20 0 0 1-20 20h-66.74a12 12 0 0 1-11.4-8.26a36 36 0 0 0-67.74 0A12 12 0 0 1 58.74 220H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20M104 164a16 16 0 1 0-16-16a16 16 0 0 0 16 16M212 60H44v136h6.92a60.2 60.2 0 0 1 21.76-23.16a40 40 0 1 1 62.64 0A60.2 60.2 0 0 1 157.08 196H212Z"></svg:path>`,
})
export class PhChalkboardTeacherBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChampagneBoldIcon],svg[ph-champagne-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M153.7 12.29A12 12 0 0 0 142.29 4h-44.6a12 12 0 0 0-11.41 8.29a454 454 0 0 0-14.36 60.29c-7.44 45.34-4.28 77.86 9.37 96.66A44.1 44.1 0 0 0 108 186.72V228H96a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24h-12v-41.28a44.1 44.1 0 0 0 26.7-17.48c13.66-18.8 16.81-51.32 9.37-96.66a454 454 0 0 0-14.37-60.29M133.36 28c2.08 7.25 5.14 18.7 7.92 32H98.7c2.78-13.3 5.84-24.75 7.92-32Zm5.91 127.14c-4.4 6-10.52 8.86-19.28 8.86s-14.88-2.82-19.28-8.86c-8.83-12.14-11-37.26-6.25-71.14h51.06c4.75 33.88 2.58 59-6.25 71.14M240 56a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-60-36a16 16 0 1 1 16 16a16 16 0 0 1-16-16m36 84a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhChampagneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChargingStationBoldIcon],svg[ph-charging-station-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M137.94 121.27a12 12 0 0 1 1.2 11.19l-16 40A12 12 0 0 1 112 180a11.9 11.9 0 0 1-4.46-.86a12 12 0 0 1-6.68-15.6l9.42-23.54H96a12 12 0 0 1-11.14-16.46l16-40a12 12 0 0 1 22.28 8.92L113.72 116H128a12 12 0 0 1 9.94 5.27M256 86.63V166a30 30 0 0 1-60 0v-38a4 4 0 0 0-4-4h-12v80h12a12 12 0 0 1 0 24H32a12 12 0 0 1 0-24h12V56a28 28 0 0 1 28-28h80a28 28 0 0 1 28 28v44h12a28 28 0 0 1 28 28v38a6 6 0 0 0 12 0V86.63a4 4 0 0 0-1.17-2.83l-19.32-19.31a12 12 0 0 1 17-17l19.29 19.34a27.8 27.8 0 0 1 8.2 19.8M156 204V56a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4v148Z"></svg:path>`,
})
export class PhChargingStationBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarBoldIcon],svg[ph-chart-bar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 196h-4V40a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v36H96a12 12 0 0 0-12 12v36H48a12 12 0 0 0-12 12v60h-4a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24M164 52h32v144h-32Zm-56 48h32v96h-32Zm-48 48h24v48H60Z"></svg:path>`,
})
export class PhChartBarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarHorizontalBoldIcon],svg[ph-chart-bar-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 92h-36V56a12 12 0 0 0-12-12H60v-4a12 12 0 0 0-24 0v176a12 12 0 0 0 24 0v-4h84a12 12 0 0 0 12-12v-36h68a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m-60-24v24H60V68Zm-32 120H60v-24h72Zm80-48H60v-24h152Z"></svg:path>`,
})
export class PhChartBarHorizontalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartDonutBoldIcon],svg[ph-chart-donut-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a12 12 0 0 0-12 12v56a12 12 0 0 0 12 12a28 28 0 1 1-24.26 14a12 12 0 0 0-4.39-16.4l-48.5-28A12 12 0 0 0 34.46 74A108 108 0 1 0 128 20M50 96.81l28.2 16.28A52 52 0 0 0 76 128v1.5l-31.43 8.42A83 83 0 0 1 44 128a84.4 84.4 0 0 1 6-31.19m.83 64.3l31.43-8.43A52.2 52.2 0 0 0 116 178.59v32.54a84.26 84.26 0 0 1-65.19-50.02Zm89.19 50v-32.52A52 52 0 0 0 140 77.4V44.85a84 84 0 0 1 0 166.28Z"></svg:path>`,
})
export class PhChartDonutBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineBoldIcon],svg[ph-chart-line-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v85.55L88.1 95a12 12 0 0 1 15.1-.57l56.22 42.16L216.1 87a12 12 0 1 1 15.8 18l-64 56a12 12 0 0 1-15.1.57l-56.22-42.13L44 165.45V196h180a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhChartLineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineDownBoldIcon],svg[ph-chart-line-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v11l52 52l23.51-23.52a12 12 0 0 1 17 0L188 139v-11a12 12 0 0 1 24 0v40q0 .6-.06 1.2c0 .16-.05.33-.07.49s-.06.45-.1.67s-.09.38-.14.56s-.09.39-.15.58l-.19.54c-.07.19-.13.38-.21.56s-.15.34-.23.5s-.17.38-.27.57s-.18.3-.27.45s-.21.38-.33.56s-.24.32-.36.47s-.22.32-.34.47s-.46.53-.71.78l-.08.1l-.1.08c-.25.25-.51.48-.78.71l-.46.34c-.16.12-.32.25-.48.36s-.37.22-.55.33s-.3.19-.46.27s-.37.18-.56.27s-.33.16-.51.23l-.54.21l-.57.19a5 5 0 0 1-.55.14l-.58.15l-.64.09l-.53.08a12 12 0 0 1-1.18.05h-40a12 12 0 0 1 0-24h11l-43-43l-23.51 23.52a12 12 0 0 1-17 0L44 93v103h180a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhChartLineDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineUpBoldIcon],svg[ph-chart-line-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v99l43.51-43.52a12 12 0 0 1 17 0L128 127l43-43h-11a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12v40a12 12 0 0 1-24 0v-11l-51.51 51.52a12 12 0 0 1-17 0L96 129l-52 52v15h180a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhChartLineUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieBoldIcon],svg[ph-chart-pie-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 24.87a84 84 0 0 1 54 31.2l-54 31.15Zm-90 114.3a83.94 83.94 0 0 1 66-114.3v76.2ZM128 212a83.88 83.88 0 0 1-65.95-32.07L206 96.83A84 84 0 0 1 128 212"></svg:path>`,
})
export class PhChartPieBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieSliceBoldIcon],svg[ph-chart-pie-slice-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M93.82 116.64a12 12 0 0 0 6.18-10.49V40.74a12 12 0 0 0-17-10.91A108.26 108.26 0 0 0 20 128c0 3.37.16 6.76.47 10.1a12 12 0 0 0 17.76 9.38ZM76 62.06v37l-31.19 17.3A84.4 84.4 0 0 1 76 62.06M128 20a12 12 0 0 0-12 12v89.53l-76.82 44.74a12 12 0 0 0-4.3 16.46A108 108 0 1 0 128 20m0 192a84.47 84.47 0 0 1-65.57-31.5L134 138.79a12 12 0 0 0 6-10.37V44.85A84 84 0 0 1 128 212"></svg:path>`,
})
export class PhChartPieSliceBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPolarBoldIcon],svg[ph-chart-polar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m83.13 96h-16.21A68.16 68.16 0 0 0 140 61.08V44.87A84.18 84.18 0 0 1 211.13 116M116 116H85.68A44.13 44.13 0 0 1 116 85.68Zm0 24v30.32A44.13 44.13 0 0 1 85.68 140Zm24 0h30.32A44.13 44.13 0 0 1 140 170.32Zm0-24V85.68A44.13 44.13 0 0 1 170.32 116Zm-24-71.13v16.21A68.16 68.16 0 0 0 61.08 116H44.87A84.18 84.18 0 0 1 116 44.87M44.87 140h16.21A68.16 68.16 0 0 0 116 194.92v16.21A84.18 84.18 0 0 1 44.87 140M140 211.13v-16.21A68.16 68.16 0 0 0 194.92 140h16.21A84.18 84.18 0 0 1 140 211.13"></svg:path>`,
})
export class PhChartPolarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartScatterBoldIcon],svg[ph-chart-scatter-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v148h180a12 12 0 0 1 12 12m-120-60a16 16 0 1 0 16-16a16 16 0 0 0-16 16m-8-40a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-32 72a16 16 0 1 0-16-16a16 16 0 0 0 16 16m96-48a16 16 0 1 0-16-16a16 16 0 0 0 16 16m24-40a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-24 72a16 16 0 1 0 16-16a16 16 0 0 0-16 16"></svg:path>`,
})
export class PhChartScatterBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatBoldIcon],svg[ph-chat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a20 20 0 0 0-20 20v160a19.82 19.82 0 0 0 11.56 18.1a20.1 20.1 0 0 0 8.49 1.9a19.9 19.9 0 0 0 12.82-4.72l.12-.11L84.47 212H216a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144H80a11.93 11.93 0 0 0-7.84 2.92L44 215.23V68h168Z"></svg:path>`,
})
export class PhChatBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredBoldIcon],svg[ph-chat-centered-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h58.11l12.52 21.92a20 20 0 0 0 34.74 0L157.89 204H216a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 144h-61.07a12 12 0 0 0-10.42 6.05L128 207.94l-12.51-21.89a12 12 0 0 0-10.42-6.05H44V60h168Z"></svg:path>`,
})
export class PhChatCenteredBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredDotsBoldIcon],svg[ph-chat-centered-dots-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 120a16 16 0 1 1 16 16a16 16 0 0 1-16-16m64 16a16 16 0 1 0-16-16a16 16 0 0 0 16 16m84-80v128a20 20 0 0 1-20 20h-58.11l-12.52 21.92a20 20 0 0 1-34.74 0L98.11 204H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20m-24 4H44v120h61.07a12 12 0 0 1 10.42 6.05L128 207.94l12.51-21.89a12 12 0 0 1 10.42-6.05H212Z"></svg:path>`,
})
export class PhChatCenteredDotsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredSlashBoldIcon],svg[ph-chat-centered-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93a12 12 0 0 0-20.29 4.38A20 20 0 0 0 20 56v128a20 20 0 0 0 20 20h58.11l12.52 21.92a20 20 0 0 0 34.73 0L157.89 204h23l18.25 20.07a12 12 0 0 0 17.76-16.14ZM150.93 180a12 12 0 0 0-10.42 6.05L128 207.94l-12.51-21.89a12 12 0 0 0-10.42-6.05H44V60h6l109.1 120ZM236 56v118.14a12 12 0 0 1-24 0V60H109.33a12 12 0 1 1 0-24H216a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhChatCenteredSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredTextBoldIcon],svg[ph-chat-centered-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 100a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m12 52h64a12 12 0 0 0 0-24H96a12 12 0 0 0 0 24m140-96v128a20 20 0 0 1-20 20h-58.11l-12.52 21.92a20 20 0 0 1-34.74 0L98.11 204H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20m-24 4H44v120h61.07a12 12 0 0 1 10.42 6.05L128 207.94l12.51-21.89a12 12 0 0 1 10.42-6.05H212Z"></svg:path>`,
})
export class PhChatCenteredTextBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleBoldIcon],svg[ph-chat-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 0 0-96.15 157.23L21 209.66A20 20 0 0 0 46.34 235l32.43-10.81A108 108 0 1 0 128 20m0 192a84 84 0 0 1-42.06-11.27a12 12 0 0 0-6-1.62a12.1 12.1 0 0 0-3.8.62l-29.79 9.93l9.93-29.79a12 12 0 0 0-1-9.81A84 84 0 1 1 128 212"></svg:path>`,
})
export class PhChatCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleDotsBoldIcon],svg[ph-chat-circle-dots-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m32-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m84 16a108 108 0 0 1-157.23 96.15L46.34 235A20 20 0 0 1 21 209.66l10.81-32.43A108 108 0 1 1 236 128m-24 0a84 84 0 1 0-156.73 42.06a12 12 0 0 1 1 9.81l-9.93 29.79l29.79-9.93a12.1 12.1 0 0 1 3.8-.62a12 12 0 0 1 6 1.62A84 84 0 0 0 212 128"></svg:path>`,
})
export class PhChatCircleDotsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleSlashBoldIcon],svg[ph-chat-circle-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93a12 12 0 1 0-17.76 16.14l7.81 8.59a108 108 0 0 0-15.08 120.57L21 209.66A20 20 0 0 0 46.34 235l32.43-10.81a108.08 108.08 0 0 0 112.55-8.66l7.8 8.58a12 12 0 0 0 17.76-16.14ZM128 212a83.9 83.9 0 0 1-42-11.27a12 12 0 0 0-9.82-1l-29.79 9.93l9.93-29.79a12 12 0 0 0-1-9.82a84 84 0 0 1 7.94-95.49l111.84 123A83.83 83.83 0 0 1 128 212m108-84a107.2 107.2 0 0 1-8.65 42.4a12 12 0 0 1-22.07-9.4A84.07 84.07 0 0 0 102.51 48a12 12 0 0 1-7.27-22.87A108.08 108.08 0 0 1 236 128"></svg:path>`,
})
export class PhChatCircleSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleTextBoldIcon],svg[ph-chat-circle-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 108a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m-12 28H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m76-8a108 108 0 0 1-157.23 96.15L46.34 235A20 20 0 0 1 21 209.66l10.81-32.43A108 108 0 1 1 236 128m-24 0a84 84 0 1 0-156.73 42.06a12 12 0 0 1 1 9.81l-9.93 29.79l29.79-9.93a12.1 12.1 0 0 1 3.8-.62a12 12 0 0 1 6 1.62A84 84 0 0 0 212 128"></svg:path>`,
})
export class PhChatCircleTextBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatDotsBoldIcon],svg[ph-chat-dots-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 128a16 16 0 1 1 16 16a16 16 0 0 1-16-16m64 16a16 16 0 1 0-16-16a16 16 0 0 0 16 16m84-80v128a20 20 0 0 1-20 20H84.47L53 239.17l-.12.11A19.9 19.9 0 0 1 40.05 244a20.1 20.1 0 0 1-8.49-1.9A19.82 19.82 0 0 1 20 224V64a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20m-24 4H44v147.23l28.16-24.32A11.93 11.93 0 0 1 80 188h132Z"></svg:path>`,
})
export class PhChatDotsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatSlashBoldIcon],svg[ph-chat-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93A12 12 0 0 0 36.8 44.28A20 20 0 0 0 20 64v160a19.82 19.82 0 0 0 11.56 18.1a20.1 20.1 0 0 0 8.49 1.9a19.9 19.9 0 0 0 12.82-4.72l.12-.11L84.47 212h103.68l11 12.07a12 12 0 0 0 17.76-16.15ZM80 188a11.93 11.93 0 0 0-7.84 2.92L44 215.23V68h13.24l109.09 120ZM236 64v110.12a12 12 0 0 1-24 0V68h-95.4a12 12 0 0 1 0-24H216a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhChatSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropBoldIcon],svg[ph-chat-teardrop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 20A104.11 104.11 0 0 0 28 124v84a20 20 0 0 0 20 20h84a104 104 0 0 0 0-208m0 184H52v-80a80 80 0 1 1 80 80"></svg:path>`,
})
export class PhChatTeardropBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropDotsBoldIcon],svg[ph-chat-teardrop-dots-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 20A104.11 104.11 0 0 0 28 124v84a20 20 0 0 0 20 20h84a104 104 0 0 0 0-208m0 184H52v-80a80 80 0 1 1 80 80m-8-76a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhChatTeardropDotsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropSlashBoldIcon],svg[ph-chat-teardrop-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93a12 12 0 1 0-17.76 16.14L50 60a103.37 103.37 0 0 0-22 64v84a20 20 0 0 0 20 20h84a104.3 104.3 0 0 0 55.87-16.31l11.25 12.38a12 12 0 0 0 17.76-16.14ZM132 204H52v-80a79.5 79.5 0 0 1 14.46-45.86l105 115.49A79.1 79.1 0 0 1 132 204m104-80a102.9 102.9 0 0 1-10.36 45.29A12 12 0 0 1 204 158.83a79.25 79.25 0 0 0 8-34.83a80.07 80.07 0 0 0-107.84-75a12 12 0 0 1-8.35-22.5A104.07 104.07 0 0 1 236 124"></svg:path>`,
})
export class PhChatTeardropSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropTextBoldIcon],svg[ph-chat-teardrop-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 108a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h68a12 12 0 0 1 12 12m-12 28H96a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m72-12a104.11 104.11 0 0 1-104 104H48a20 20 0 0 1-20-20v-84a104 104 0 0 1 208 0m-24 0a80 80 0 0 0-160 0v80h80a80.09 80.09 0 0 0 80-80"></svg:path>`,
})
export class PhChatTeardropTextBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTextBoldIcon],svg[ph-chat-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a20 20 0 0 0-20 20v160a19.82 19.82 0 0 0 11.56 18.1a20.1 20.1 0 0 0 8.49 1.9a19.9 19.9 0 0 0 12.82-4.72l.12-.11L84.47 212H216a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144H80a11.93 11.93 0 0 0-7.84 2.92L44 215.23V68h168ZM84 108a12 12 0 0 1 12-12h64a12 12 0 1 1 0 24H96a12 12 0 0 1-12-12m0 40a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhChatTextBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsBoldIcon],svg[ph-chats-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-28V48a20 20 0 0 0-20-20H40a20 20 0 0 0-20 20v128a12 12 0 0 0 19.54 9.33l28.46-23V184a20 20 0 0 0 20 20h92.17l36.29 29.33A12 12 0 0 0 236 224V96a20 20 0 0 0-20-20M44 150.87V52h120v80H71.58a12 12 0 0 0-7.58 2.67Zm168 48l-20-16.2a12 12 0 0 0-7.54-2.67H92v-24h76a20 20 0 0 0 20-20v-36h24Z"></svg:path>`,
})
export class PhChatsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsCircleBoldIcon],svg[ph-chats-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.34 187.09A84 84 0 0 0 172.29 68.9a84 84 0 0 0-152.63 70.19l-6.84 23.26a20 20 0 0 0 24.83 24.83l23.26-6.84a84 84 0 0 0 22.76 6.74a84.06 84.06 0 0 0 111.42 41.26l23.26 6.84a20 20 0 0 0 24.83-24.83ZM62 155.5a11.9 11.9 0 0 0-3.39.49l-20.72 6.09L44 141.35a12 12 0 0 0-.93-9a60 60 0 1 1 24.63 24.57a12 12 0 0 0-5.7-1.42m150.89 24.8a12 12 0 0 0-.93 9l6.09 20.73l-20.69-6.03a12 12 0 0 0-9.06.93a60 60 0 0 1-77.3-18.3a83.93 83.93 0 0 0 68.55-91.37a60 60 0 0 1 33.38 85Z"></svg:path>`,
})
export class PhChatsCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsTeardropBoldIcon],svg[ph-chats-teardrop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.29 68.9A84 84 0 0 0 12 104v64a20 20 0 0 0 20 20h52.1a84.18 84.18 0 0 0 75.9 48h64a20 20 0 0 0 20-20v-64a84 84 0 0 0-71.71-83.1M36 104a60 60 0 1 1 60 60H36Zm184 108h-60a60.14 60.14 0 0 1-49-25.37a83.93 83.93 0 0 0 68.55-91.37A60 60 0 0 1 220 152Z"></svg:path>`,
})
export class PhChatsTeardropBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckBoldIcon],svg[ph-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 80.49l-128 128a12 12 0 0 1-17 0l-56-56a12 12 0 1 1 17-17L96 183L215.51 63.51a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhCheckBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckCircleBoldIcon],svg[ph-check-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176.49 95.51a12 12 0 0 1 0 17l-56 56a12 12 0 0 1-17 0l-24-24a12 12 0 1 1 17-17L112 143l47.51-47.52a12 12 0 0 1 16.98.03M236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84"></svg:path>`,
})
export class PhCheckCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckFatBoldIcon],svg[ph-check-fat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.15 65.46l-.07-.08l-23.93-23.53a20 20 0 0 0-28.23-.05l-90 88.83l-33.86-32.85a20 20 0 0 0-28.21.08l-24 24a20 20 0 0 0 0 28.26l71.62 72a20 20 0 0 0 28.29 0L246.15 93.74a20 20 0 0 0 0-28.28M103.61 202.33L37.64 136L56 117.61L95.65 156a12 12 0 0 0 16.78-.08L208 61.61l18.32 18Z"></svg:path>`,
})
export class PhCheckFatBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareBoldIcon],svg[ph-check-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M79.51 144.49a12 12 0 1 1 17-17L112 143l47.51-47.52a12 12 0 0 1 17 17l-56 56a12 12 0 0 1-17 0ZM228 48v160a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20m-24 4H52v152h152Z"></svg:path>`,
})
export class PhCheckSquareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareOffsetBoldIcon],svg[ph-check-square-offset-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 48v160a20 20 0 0 1-20 20h-68a12 12 0 0 1 0-24h64V52H52v88a12 12 0 0 1-24 0V48a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20m-99.51 103.51a12 12 0 0 0-17 0L64 199l-15.51-15.49a12 12 0 1 0-17 17l24 24a12 12 0 0 0 17 0l56-56a12 12 0 0 0 0-17"></svg:path>`,
})
export class PhCheckSquareOffsetBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckerboardBoldIcon],svg[ph-checkerboard-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 48a20 20 0 0 0-20-20H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20Zm-35 68l-53-53V52h11l53 53v11Zm-53-19l19 19h-19Zm64-26l-19-19h19Zm-88-19v64H52V52Zm-11 152l-53-53v-11h11l53 53v11Zm11-45l-19-19h19Zm-64 26l19 19H52Zm88 19v-64h64v64Z"></svg:path>`,
})
export class PhCheckerboardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChecksBoldIcon],svg[ph-checks-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m152.41 88.56l-89.6 88a12 12 0 0 1-16.82 0l-38.4-37.71a12 12 0 0 1 16.82-17.13l30 29.46l81.19-79.74a12 12 0 0 1 16.82 17.12Zm96.15-17a12 12 0 0 0-17-.15l-81.16 79.77l-7.88-7.74a12 12 0 0 0-16.82 17.12l16.29 16a12 12 0 0 0 16.82 0l89.6-88a12 12 0 0 0 .15-16.97Z"></svg:path>`,
})
export class PhChecksBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheersBoldIcon],svg[ph-cheers-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.89 210.08l-13.78 3.69l-8.57-32a44.07 44.07 0 0 0 20-49.17c-12.81-47.6-39.31-89.32-40.43-91.07a12 12 0 0 0-13-5.17l-16.9 4.22c0-5.34-.18-8.63-.2-9.13a12 12 0 0 0-9.08-11.09l-32-8a12 12 0 0 0-13 5.17C84.77 19.28 58.27 61 45.51 108.6a44.07 44.07 0 0 0 19.95 49.17l-8.57 32l-13.78-3.69a12 12 0 0 0-6.22 23.18l48 12.86a12 12 0 0 0 6.22-23.18l-11-3l8.57-32a44.21 44.21 0 0 0 34.62-17.65q1 4.53 2.23 9A44.06 44.06 0 0 0 167.36 188l8.57 32l-11 3a12 12 0 0 0 6.22 23.18l48-12.86a12 12 0 1 0-6.22-23.18ZM162.59 77l-22.82 5.71c-.21-6.92-.19-12.83-.1-17.24l14.62-3.65c2.21 3.79 5.09 8.97 8.3 15.18m-60.87-39.2l14.46 3.61c0 4 0 9.25-.24 15.34c0 .92-.11 2.2-.17 3.82l-23.26-5.81a388 388 0 0 1 9.21-16.96M82.83 139.31a20 20 0 0 1-14.14-24.49a281 281 0 0 1 13.4-37.93l31.94 8a304 304 0 0 1-6.73 40.4a20 20 0 0 1-24.47 14.02m65.84 9.86a265 265 0 0 1-7.36-42.17l31.82-8a283 283 0 0 1 14.18 39.73a20 20 0 0 1-38.64 10.35Zm36-109.38a12 12 0 0 1 7.59-15.17l12-4a12 12 0 0 1 7.58 22.76l-12 4a12 12 0 0 1-15.17-7.59M236 72a12 12 0 0 1-12 12h-12a12 12 0 0 1 0-24h12a12 12 0 0 1 12 12M28.62 20.21a12 12 0 0 1 15.17-7.59l12 4a12 12 0 1 1-7.58 22.76l-12-4a12 12 0 0 1-7.59-15.17M36 76H24a12 12 0 0 1 0-24h12a12 12 0 0 1 0 24"></svg:path>`,
})
export class PhCheersBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheeseBoldIcon],svg[ph-cheese-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 28a11.9 11.9 0 0 0-3.45.51l-160 48A12 12 0 0 0 12 88v24a12 12 0 0 0 12 12h8a12.07 12.07 0 0 1 12 11.76a11.6 11.6 0 0 1-3.43 8.38a12.88 12.88 0 0 1-9.11 3.86H24a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h200a20 20 0 0 0 20-20V88a60.07 60.07 0 0 0-60-60m1.64 24a36.06 36.06 0 0 1 32.3 24H105.76ZM152 100h32v4a16 16 0 0 1-32 0Zm-56 80a16 16 0 0 1 32 0Zm124 0h-68a40 40 0 0 0-80 0H36v-8.29A37.1 37.1 0 0 0 57.7 161A35.4 35.4 0 0 0 68 135.31a36.21 36.21 0 0 0-32-35.09V100h92v4a40 40 0 0 0 80 0v-4h12Z"></svg:path>`,
})
export class PhCheeseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChefHatBoldIcon],svg[ph-chef-hat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 112a60.07 60.07 0 0 0-60-60c-1 0-1.95 0-2.92.08a60 60 0 0 0-106.16 0C74 52 73 52 72 52a60 60 0 0 0-28 113v43a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20v-43a60 60 0 0 0 32-53m-56 92H68v-32.15c1.32.09 2.65.15 4 .15h112c1.35 0 2.68-.06 4-.15Zm-4-56h-8.63l4.27-17.09a12 12 0 0 0-23.28-5.82L150.63 148H140v-20a12 12 0 0 0-24 0v20h-10.63l-5.73-22.91a12 12 0 1 0-23.28 5.82L80.63 148H72a36 36 0 0 1-3.87-71.79C68.05 77.47 68 78.73 68 80a12 12 0 0 0 24 0a36 36 0 0 1 72 0a12 12 0 0 0 24 0c0-1.27-.05-2.53-.13-3.79A36 36 0 0 1 184 148"></svg:path>`,
})
export class PhChefHatBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCherriesBoldIcon],svg[ph-cherries-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 68c-1.88 0-3.76.08-5.62.22a95.7 95.7 0 0 0-21.24-24C110 12.6 56.56 19.8 54.3 20.12a12 12 0 0 0-5 21.86C64.52 52.1 72.13 68.45 75.71 85a76 76 0 1 0 67.22 127.43A76 76 0 1 0 176 68m-22.76 53.06A76.8 76.8 0 0 0 141 105.59a52.1 52.1 0 0 1 16.14-10a107 107 0 0 1 5.12 18.9a12 12 0 0 0-9.02 6.57M134.19 63a70.8 70.8 0 0 1 11.23 11.46A76.3 76.3 0 0 0 121 91.55A75.4 75.4 0 0 0 100.19 85C97.72 71.05 93 56.65 84.58 44c15.2 1.68 34.17 6.48 49.61 19M88 212a52 52 0 0 1-9.53-103.11a173 173 0 0 1-.75 21.59a12 12 0 0 0-5.09 23.38a56.27 56.27 0 0 0 30.74 0a12 12 0 0 0-1.5-23.36a194 194 0 0 0 .69-20.41A52 52 0 0 1 88 212m88-16a51.9 51.9 0 0 1-19.24-3.68a75.83 75.83 0 0 0 4-54.43a56.36 56.36 0 0 0 30.66 0a12 12 0 0 0-4.79-23.42a136.4 136.4 0 0 0-5.12-22.15A52 52 0 0 1 176 196"></svg:path>`,
})
export class PhCherriesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChurchBoldIcon],svg[ph-church-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.17 141.71L196 121.21V104a12 12 0 0 0-6-10.42L140 65V52h12a12 12 0 0 0 0-24h-12V16a12 12 0 0 0-24 0v12h-12a12 12 0 0 0 0 24h12v13L66.05 93.58A12 12 0 0 0 60 104v17.21l-34.17 20.5A12 12 0 0 0 20 152v64a12 12 0 0 0 12 12h76a12 12 0 0 0 12-12v-44a8 8 0 0 1 16 0v44a12 12 0 0 0 12 12h76a12 12 0 0 0 12-12v-64a12 12 0 0 0-5.83-10.29M44 158.79l16-9.6V204H44ZM128 140a32 32 0 0 0-32 32v32H84v-93l44-25.14L172 111v93h-12v-32a32 32 0 0 0-32-32m84 64h-16v-54.81l16 9.6Z"></svg:path>`,
})
export class PhChurchBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteBoldIcon],svg[ph-cigarette-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 124H32a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20M36 148h40v24H36Zm184 24H100v-24h120ZM201.67 55.89c7.53-12.71 7.12-19.63 5.07-21.1A12 12 0 0 1 216.67 13a25.9 25.9 0 0 1 13.8 15.79c3.6 10.92.86 24.17-8.14 39.38c-7.53 12.7-7.12 19.63-5.07 21.1a12 12 0 0 1-9.93 21.84a26 26 0 0 1-13.8-15.79c-3.6-10.98-.86-24.23 8.14-39.43m-48 0c7.53-12.71 7.12-19.63 5.07-21.1A12 12 0 0 1 168.67 13a25.9 25.9 0 0 1 13.8 15.79c3.6 10.92.86 24.17-8.14 39.38c-7.53 12.7-7.12 19.63-5.07 21.1a12 12 0 0 1-9.93 21.84a26 26 0 0 1-13.8-15.79c-3.6-10.98-.86-24.23 8.14-39.43"></svg:path>`,
})
export class PhCigaretteBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteSlashBoldIcon],svg[ph-cigarette-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.67 55.89c7.53-12.71 7.12-19.63 5.07-21.1A12 12 0 0 1 216.67 13a25.9 25.9 0 0 1 13.8 15.79c3.6 10.92.86 24.17-8.14 39.38c-7.53 12.7-7.12 19.63-5.07 21.1a12 12 0 0 1-9.93 21.84a26 26 0 0 1-13.8-15.79c-3.6-10.98-.86-24.23 8.14-39.43m-56.14 39.38a26 26 0 0 0 13.8 15.79a12 12 0 0 0 9.93-21.84c-2-1.47-2.46-8.4 5.07-21.1c9-15.21 11.74-28.46 8.14-39.38A25.9 25.9 0 0 0 168.67 13a12 12 0 0 0-9.93 21.84c2 1.47 2.46 8.39-5.07 21.1c-9 15.15-11.74 28.4-8.14 39.33m71.35 112.66a12 12 0 1 1-17.76 16.14L173.6 196H32a20 20 0 0 1-20-20v-32a20 20 0 0 1 20-20h76.15l-69-75.93a12 12 0 1 1 17.73-16.14ZM36 172h40v-24H36Zm115.78 0L130 148h-30v24ZM224 124h-34.67a12 12 0 0 0 0 24H220v34.94a12 12 0 0 0 24 0V144a20 20 0 0 0-20-20"></svg:path>`,
})
export class PhCigaretteSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleBoldIcon],svg[ph-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84"></svg:path>`,
})
export class PhCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleDashedBoldIcon],svg[ph-circle-dashed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92.38 38.05A12 12 0 0 1 101 23.42a108 108 0 0 1 54 0a12 12 0 1 1-6 23.23a84.1 84.1 0 0 0-42 0a12 12 0 0 1-14.62-8.6M50.94 52.34a108.1 108.1 0 0 0-27 46.76a12 12 0 0 0 8.37 14.77a12.2 12.2 0 0 0 3.2.43a12 12 0 0 0 11.56-8.8a84 84 0 0 1 21-36.35a12 12 0 1 0-17.13-16.81m-3.88 98.14a12 12 0 0 0-23.12 6.42a108 108 0 0 0 27 46.78A12 12 0 0 0 68 186.85a84 84 0 0 1-20.94-36.37M149 209.35a84 84 0 0 1-42 0a12 12 0 1 0-6 23.23a108 108 0 0 0 54 0a12 12 0 1 0-6-23.23m74.72-67.22A12 12 0 0 0 209 150.5a84 84 0 0 1-21 36.35a12 12 0 0 0 17.12 16.82a108.2 108.2 0 0 0 27-46.77a12 12 0 0 0-8.41-14.77Zm-14.77-36.61a12 12 0 0 0 23.12-6.42a108 108 0 0 0-27-46.78A12 12 0 1 0 188 69.15a84 84 0 0 1 20.94 36.37Z"></svg:path>`,
})
export class PhCircleDashedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfBoldIcon],svg[ph-circle-half-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 24.87a83.5 83.5 0 0 1 24 7.25v151.76a83.5 83.5 0 0 1-24 7.25ZM44 128a84.12 84.12 0 0 1 72-83.13v166.26A84.12 84.12 0 0 1 44 128m144 58.71V69.29a83.81 83.81 0 0 1 0 117.42"></svg:path>`,
})
export class PhCircleHalfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfTiltBoldIcon],svg[ph-circle-half-tilt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.37 51.6A108.08 108.08 0 1 0 236 128a108.1 108.1 0 0 0-31.63-76.4M176 197a83.4 83.4 0 0 1-16 8.75V113l16-16ZM68.6 68.58a84.08 84.08 0 0 1 109.7-7.88L60.72 178.33A84.08 84.08 0 0 1 68.6 68.58M96 177v28.69a83.6 83.6 0 0 1-18.3-10.39Zm24 34.62V153l16-16v74.64a84.7 84.7 0 0 1-16-.02m80-40.27v-86.7a84.24 84.24 0 0 1 0 86.7"></svg:path>`,
})
export class PhCircleHalfTiltBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleNotchBoldIcon],svg[ph-circle-notch-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 128a108 108 0 0 1-216 0c0-42.52 24.73-81.34 63-98.9a12 12 0 1 1 10 21.81C63.24 64.57 44 94.83 44 128a84 84 0 0 0 168 0c0-33.17-19.24-63.43-49-77.09a12 12 0 1 1 10-21.81c38.27 17.56 63 56.38 63 98.9"></svg:path>`,
})
export class PhCircleNotchBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyBoldIcon],svg[ph-circle-wavy-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.7 100c-3.5-3.6-7.1-7.4-8.3-10.3s-1.1-7.8-1.2-12.4c-.2-10-.3-22.5-9.2-31.3s-21.3-9-31.3-9.2c-4.6-.1-9.9-.1-12.4-1.2s-6.7-4.8-10.3-8.3c-7.1-6.8-15.9-15.3-28-15.3s-20.9 8.5-28 15.3c-3.6 3.5-7.4 7.1-10.3 8.3s-7.8 1.1-12.4 1.2c-10 .2-22.5.3-31.3 9.2s-9 21.3-9.2 31.3c-.1 4.6-.1 9.9-1.2 12.4s-4.8 6.7-8.3 10.3c-6.8 7.1-15.3 15.9-15.3 28s8.5 20.9 15.3 28c3.5 3.6 7.1 7.4 8.3 10.3s1.1 7.8 1.2 12.4c.2 10 .3 22.5 9.2 31.3s21.3 9 31.3 9.2c4.6.1 9.9.1 12.4 1.2s6.7 4.8 10.3 8.3c7.1 6.8 15.9 15.3 28 15.3s20.9-8.5 28-15.3c3.6-3.5 7.4-7.1 10.3-8.3s7.8-1.1 12.4-1.2c10-.2 22.5-.3 31.3-9.2s9-21.3 9.2-31.3c.1-4.6.1-9.9 1.2-12.4s4.8-6.7 8.3-10.3c6.8-7.1 15.3-15.9 15.3-28s-8.5-20.9-15.3-28Zm-17.3 39.3c-4.8 5.1-10.3 10.8-13.2 17.8s-2.9 14.2-3 21.3c-.1 5.4-.2 12.7-2.1 14.7s-9.3 2-14.7 2.1c-7.1.1-14.5.2-21.3 3s-12.7 8.4-17.8 13.2c-3.5 3.4-8.9 8.6-11.3 8.6s-7.8-5.2-11.3-8.6c-5.1-4.8-10.8-10.3-17.8-13.2s-14.2-2.9-21.3-3c-5.4-.1-12.7-.2-14.7-2.1s-2-9.3-2.1-14.7c-.1-7.1-.2-14.5-3-21.3s-8.4-12.7-13.2-17.8c-3.4-3.5-8.6-8.9-8.6-11.3s5.2-7.8 8.6-11.3c4.8-5.1 10.3-10.8 13.2-17.8s2.9-14.2 3-21.3c.1-5.4.2-12.7 2.1-14.7s9.3-2 14.7-2.1c7.1-.1 14.5-.2 21.3-3s12.7-8.4 17.8-13.2c3.5-3.4 8.9-8.6 11.3-8.6s7.8 5.2 11.3 8.6c5.1 4.8 10.8 10.3 17.8 13.2s14.2 2.9 21.3 3c5.4.1 12.7.2 14.7 2.1s2 9.3 2.1 14.7c.1 7.1.2 14.5 3 21.3s8.4 12.7 13.2 17.8c3.4 3.5 8.6 8.9 8.6 11.3s-5.2 7.8-8.6 11.3Z"></svg:path>`,
})
export class PhCircleWavyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyCheckBoldIcon],svg[ph-circle-wavy-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.7 100c-3.5-3.6-7.1-7.4-8.3-10.3s-1.1-7.8-1.2-12.4c-.2-10-.3-22.5-9.2-31.3s-21.3-9-31.3-9.2c-4.6-.1-9.9-.1-12.4-1.2s-6.7-4.8-10.3-8.3c-7.1-6.8-15.9-15.3-28-15.3s-20.9 8.5-28 15.3c-3.6 3.5-7.4 7.1-10.3 8.3s-7.8 1.1-12.4 1.2c-10 .2-22.5.3-31.3 9.2s-9 21.3-9.2 31.3c-.1 4.6-.1 9.9-1.2 12.4s-4.8 6.7-8.3 10.3c-6.8 7.1-15.3 15.9-15.3 28s8.5 20.9 15.3 28c3.5 3.6 7.1 7.4 8.3 10.3s1.1 7.8 1.2 12.4c.2 10 .3 22.5 9.2 31.3s21.3 9 31.3 9.2c4.6.1 9.9.1 12.4 1.2s6.7 4.8 10.3 8.3c7.1 6.8 15.9 15.3 28 15.3s20.9-8.5 28-15.3c3.6-3.5 7.4-7.1 10.3-8.3s7.8-1.1 12.4-1.2c10-.2 22.5-.3 31.3-9.2s9-21.3 9.2-31.3c.1-4.6.1-9.9 1.2-12.4s4.8-6.7 8.3-10.3c6.8-7.1 15.3-15.9 15.3-28s-8.5-20.9-15.3-28Zm-17.3 39.3c-4.8 5.1-10.3 10.8-13.2 17.8s-2.9 14.2-3 21.3c-.1 5.3-.2 12.7-2.1 14.7s-9.3 2-14.7 2.1c-7.1.1-14.5.2-21.3 3s-12.7 8.4-17.8 13.2c-3.5 3.4-8.9 8.6-11.3 8.6s-7.8-5.2-11.3-8.6c-5.1-4.8-10.8-10.3-17.8-13.2s-14.2-2.9-21.3-3c-5.3-.1-12.7-.2-14.7-2.1s-2-9.4-2.1-14.7c-.1-7.1-.2-14.5-3-21.3s-8.4-12.7-13.2-17.8c-3.4-3.5-8.6-8.9-8.6-11.3s5.2-7.8 8.6-11.3c4.8-5.1 10.3-10.8 13.2-17.8s2.9-14.2 3-21.3c.1-5.4.2-12.7 2.1-14.7s9.4-2 14.7-2.1c7.1-.1 14.5-.2 21.3-3s12.7-8.4 17.8-13.2c3.5-3.4 8.9-8.6 11.3-8.6s7.8 5.2 11.3 8.6c5.1 4.8 10.8 10.3 17.8 13.2s14.2 2.9 21.3 3c5.4.1 12.7.2 14.7 2.1s2 9.3 2.1 14.7c.1 7.1.2 14.5 3 21.3s8.4 12.7 13.2 17.8c3.4 3.5 8.6 8.9 8.6 11.3s-5.2 7.8-8.6 11.3Zm-30.7-43.6a12 12 0 0 1-.4 17l-58.7 56a12 12 0 0 1-8.3 3.3a12.2 12.2 0 0 1-8.3-3.3l-29.3-28a12 12 0 1 1 16.6-17.4l21 20.1l50.4-48.1a12 12 0 0 1 17 .4Z"></svg:path>`,
})
export class PhCircleWavyCheckBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyQuestionBoldIcon],svg[ph-circle-wavy-question-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.7 100c-3.5-3.6-7.1-7.4-8.3-10.3s-1.1-7.8-1.2-12.4c-.2-10-.3-22.5-9.2-31.3s-21.3-9-31.3-9.2c-4.6-.1-9.9-.1-12.4-1.2s-6.7-4.8-10.3-8.3c-7.1-6.8-15.9-15.3-28-15.3s-20.9 8.5-28 15.3c-3.6 3.5-7.4 7.1-10.3 8.3s-7.8 1.1-12.4 1.2c-10 .2-22.5.3-31.3 9.2s-9 21.3-9.2 31.3c-.1 4.6-.1 9.9-1.2 12.4s-4.8 6.7-8.3 10.3c-6.8 7.1-15.3 15.9-15.3 28s8.5 20.9 15.3 28c3.5 3.6 7.1 7.4 8.3 10.3s1.1 7.8 1.2 12.4c.2 10 .3 22.5 9.2 31.3s21.3 9 31.3 9.2c4.6.1 9.9.1 12.4 1.2s6.7 4.8 10.3 8.3c7.1 6.8 15.9 15.3 28 15.3s20.9-8.5 28-15.3c3.6-3.5 7.4-7.1 10.3-8.3s7.8-1.1 12.4-1.2c10-.2 22.5-.3 31.3-9.2s9-21.3 9.2-31.3c.1-4.6.1-9.9 1.2-12.4s4.8-6.7 8.3-10.3c6.8-7.1 15.3-15.9 15.3-28s-8.5-20.9-15.3-28Zm-17.3 39.3c-4.8 5.1-10.3 10.8-13.2 17.8s-2.9 14.2-3 21.3c-.1 5.3-.2 12.7-2.1 14.7s-9.3 2-14.7 2.1c-7.1.1-14.5.2-21.3 3s-12.7 8.4-17.8 13.2c-3.5 3.4-8.9 8.6-11.3 8.6s-7.8-5.2-11.3-8.6c-5.1-4.8-10.8-10.3-17.8-13.2s-14.2-2.9-21.3-3c-5.3-.1-12.7-.2-14.7-2.1s-2-9.4-2.1-14.7c-.1-7.1-.2-14.5-3-21.3s-8.4-12.7-13.2-17.8c-3.4-3.5-8.6-8.9-8.6-11.3s5.2-7.8 8.6-11.3c4.8-5.1 10.3-10.8 13.2-17.8s2.9-14.2 3-21.3c.1-5.4.2-12.7 2.1-14.7s9.4-2 14.7-2.1c7.1-.1 14.5-.2 21.3-3s12.7-8.4 17.8-13.2c3.5-3.4 8.9-8.6 11.3-8.6s7.8 5.2 11.3 8.6c5.1 4.8 10.8 10.3 17.8 13.2s14.2 2.9 21.3 3c5.4.1 12.7.2 14.7 2.1s2 9.3 2.1 14.7c.1 7.1.2 14.5 3 21.3s8.4 12.7 13.2 17.8c3.4 3.5 8.6 8.9 8.6 11.3s-5.2 7.8-8.6 11.3ZM144 176a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm24-68a40 40 0 0 1-40 40a12 12 0 0 1 0-24a16 16 0 1 0-16-16a12 12 0 0 1-24 0a40 40 0 0 1 80 0Z"></svg:path>`,
})
export class PhCircleWavyQuestionBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyWarningBoldIcon],svg[ph-circle-wavy-warning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.7 100c-3.5-3.6-7.1-7.4-8.3-10.3s-1.1-7.8-1.2-12.4c-.2-10-.3-22.5-9.2-31.3s-21.3-9-31.3-9.2c-4.6-.1-9.9-.1-12.4-1.2s-6.7-4.8-10.3-8.3c-7.1-6.8-15.9-15.3-28-15.3s-20.9 8.5-28 15.3c-3.6 3.5-7.4 7.1-10.3 8.3s-7.8 1.1-12.4 1.2c-10 .2-22.5.3-31.3 9.2s-9 21.3-9.2 31.3c-.1 4.6-.1 9.9-1.2 12.4s-4.8 6.7-8.3 10.3c-6.8 7.1-15.3 15.9-15.3 28s8.5 20.9 15.3 28c3.5 3.6 7.1 7.4 8.3 10.3s1.1 7.8 1.2 12.4c.2 10 .3 22.5 9.2 31.3s21.3 9 31.3 9.2c4.6.1 9.9.1 12.4 1.2s6.7 4.8 10.3 8.3c7.1 6.8 15.9 15.3 28 15.3s20.9-8.5 28-15.3c3.6-3.5 7.4-7.1 10.3-8.3s7.8-1.1 12.4-1.2c10-.2 22.5-.3 31.3-9.2s9-21.3 9.2-31.3c.1-4.6.1-9.9 1.2-12.4s4.8-6.7 8.3-10.3c6.8-7.1 15.3-15.9 15.3-28s-8.5-20.9-15.3-28Zm-17.3 39.3c-4.8 5.1-10.3 10.8-13.2 17.8s-2.9 14.2-3 21.3c-.1 5.3-.2 12.7-2.1 14.7s-9.3 2-14.7 2.1c-7.1.1-14.5.2-21.3 3s-12.7 8.4-17.8 13.2c-3.5 3.4-8.9 8.6-11.3 8.6s-7.8-5.2-11.3-8.6c-5.1-4.8-10.8-10.3-17.8-13.2s-14.2-2.9-21.3-3c-5.3-.1-12.7-.2-14.7-2.1s-2-9.4-2.1-14.7c-.1-7.1-.2-14.5-3-21.3s-8.4-12.7-13.2-17.8c-3.4-3.5-8.6-8.9-8.6-11.3s5.2-7.8 8.6-11.3c4.8-5.1 10.3-10.8 13.2-17.8s2.9-14.2 3-21.3c.1-5.4.2-12.7 2.1-14.7s9.4-2 14.7-2.1c7.1-.1 14.5-.2 21.3-3s12.7-8.4 17.8-13.2c3.5-3.4 8.9-8.6 11.3-8.6s7.8 5.2 11.3 8.6c5.1 4.8 10.8 10.3 17.8 13.2s14.2 2.9 21.3 3c5.4.1 12.7.2 14.7 2.1s2 9.3 2.1 14.7c.1 7.1.2 14.5 3 21.3s8.4 12.7 13.2 17.8c3.4 3.5 8.6 8.9 8.6 11.3s-5.2 7.8-8.6 11.3ZM116 132V80a12 12 0 0 1 24 0v52a12 12 0 0 1-24 0Zm28 40a16 16 0 1 1-16-16a16 16 0 0 1 16 16Z"></svg:path>`,
})
export class PhCircleWavyWarningBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesFourBoldIcon],svg[ph-circles-four-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78 36a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18m100 24a42 42 0 1 0-42-42a42 42 0 0 0 42 42m0-60a18 18 0 1 1-18 18a18 18 0 0 1 18-18M78 136a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18m100-60a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhCirclesFourBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreeBoldIcon],svg[ph-circles-three-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 76a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48m-48 24a24 24 0 1 1 24-24a24 24 0 0 1-24 24m60 24a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24M68 124a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhCirclesThreeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreePlusBoldIcon],svg[ph-circles-three-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78 36a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18m100 24a42 42 0 1 0-42-42a42 42 0 0 0 42 42m0-60a18 18 0 1 1-18 18a18 18 0 0 1 18-18M78 136a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18m142-18a12 12 0 0 1-12 12h-18v18a12 12 0 0 1-24 0v-18h-18a12 12 0 0 1 0-24h18v-18a12 12 0 0 1 24 0v18h18a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCirclesThreePlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircuitryBoldIcon],svg[ph-circuitry-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M52 52h24v95.22a24 24 0 1 0 24 0V125l40 40v39H52Zm152 152h-40v-44a12 12 0 0 0-3.51-8.49L100 91V52h24v20a12 12 0 0 0 3.51 8.49l17.31 17.3a24 24 0 1 0 17-17L148 67V52h56Z"></svg:path>`,
})
export class PhCircuitryBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCityBoldIcon],svg[ph-city-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 204h-4V88a12 12 0 0 0-12-12h-72a12 12 0 0 0-12 12v36h-24V40a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v164h-4a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24m-76-104h48v104h-48Zm-24 48v56h-24v-56ZM44 52h48v152H44Zm36 24v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0m0 48v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0m0 48v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0m96 8v-8a12 12 0 0 1 24 0v8a12 12 0 0 1-24 0m0-48v-8a12 12 0 0 1 24 0v8a12 12 0 0 1-24 0"></svg:path>`,
})
export class PhCityBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardBoldIcon],svg[ph-clipboard-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 28h-34.53a51.88 51.88 0 0 0-74.94 0H56a20 20 0 0 0-20 20v168a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-44.29 32h-55.42a28 28 0 0 1 55.42 0M196 212H60V52h17.41A52 52 0 0 0 76 64v8a12 12 0 0 0 12 12h80a12 12 0 0 0 12-12v-8a52 52 0 0 0-1.41-12H196Z"></svg:path>`,
})
export class PhClipboardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardTextBoldIcon],svg[ph-clipboard-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 164a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m-12-52H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m60-64v168a20 20 0 0 1-20 20H56a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h34.53a51.88 51.88 0 0 1 74.94 0H200a20 20 0 0 1 20 20M100.29 60h55.42a28 28 0 0 0-55.42 0M196 52h-17.41A52 52 0 0 1 180 64v8a12 12 0 0 1-12 12H88a12 12 0 0 1-12-12v-8a52 52 0 0 1 1.41-12H60v160h136Z"></svg:path>`,
})
export class PhClipboardTextBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockAfternoonBoldIcon],svg[ph-clock-afternoon-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m68-84a12 12 0 0 1-12 12h-27l19.52 19.51a12 12 0 0 1-17 17l-40-40A12 12 0 0 1 128 116h56a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhClockAfternoonBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockBoldIcon],svg[ph-clock-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m68-84a12 12 0 0 1-12 12h-56a12 12 0 0 1-12-12V72a12 12 0 0 1 24 0v44h44a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhClockBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockClockwiseBoldIcon],svg[ph-clock-clockwise-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 80v41.21l34.17 20.5a12 12 0 1 1-12.34 20.58l-40-24A12 12 0 0 1 116 128V80a12 12 0 0 1 24 0m84-28a12 12 0 0 0-12 12v7.37c-4.21-4.67-8.58-9.31-13.29-14.08a100 100 0 1 0-2.07 143.44a12 12 0 0 0-16.48-17.46a76 76 0 1 1 1.53-109.06C187.61 80.2 193 86 198.23 92H184a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhClockClockwiseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCountdownBoldIcon],svg[ph-clock-countdown-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 137A108.13 108.13 0 1 1 119 20a12 12 0 0 1 2 24a84.12 84.12 0 1 0 91 91a12 12 0 1 1 24 2M116 76v52a12 12 0 0 0 12 12h52a12 12 0 0 0 0-24h-40V76a12 12 0 0 0-24 0m92 20a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-32-32a16 16 0 1 0-16-16a16 16 0 0 0 16 16"></svg:path>`,
})
export class PhClockCountdownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCounterClockwiseBoldIcon],svg[ph-clock-counter-clockwise-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 80v41.21l34.17 20.5a12 12 0 1 1-12.34 20.58l-40-24A12 12 0 0 1 116 128V80a12 12 0 0 1 24 0m-12-52a99.38 99.38 0 0 0-70.76 29.34c-4.69 4.74-9 9.37-13.24 14V64a12 12 0 0 0-24 0v40a12 12 0 0 0 12 12h40a12 12 0 0 0 0-24H57.77c5.23-6 10.6-11.78 16.49-17.74a76 76 0 1 1 1.58 109a12 12 0 0 0-16.48 17.46A100 100 0 1 0 128 28"></svg:path>`,
})
export class PhClockCounterClockwiseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockUserBoldIcon],svg[ph-clock-user-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m181.36 114.73l-48 24A12 12 0 0 1 116 128V72a12 12 0 0 1 24 0v36.58l30.63-15.31a12 12 0 1 1 10.73 21.46m45.72 120.86a12 12 0 0 1-14.68-8.51C210 218.2 201.65 212 192 212s-18 6.2-20.4 15.08A12 12 0 0 1 160 236a11.8 11.8 0 0 1-3.09-.41a12 12 0 0 1-8.52-14.68a43.76 43.76 0 0 1 15.08-23a36 36 0 1 1 57 0a43.7 43.7 0 0 1 15.08 23a12 12 0 0 1-8.47 14.68M180 176a12 12 0 1 0 12-12a12 12 0 0 0-12 12m-62.52 35.35a84 84 0 1 1 93.87-93.87a12 12 0 1 0 23.81-3a108 108 0 1 0-120.65 120.68a11 11 0 0 0 1.5.1a12 12 0 0 0 1.47-23.91"></svg:path>`,
})
export class PhClockUserBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClosedCaptioningBoldIcon],svg[ph-closed-captioning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144H36V68h184ZM52 128a44 44 0 0 1 66-38.11a12 12 0 0 1-12 20.78a20 20 0 1 0 0 34.66a12 12 0 1 1 12 20.77A44 44 0 0 1 52 128m80 0a44 44 0 0 1 66-38.11a12 12 0 0 1-12 20.78a20 20 0 1 0 0 34.66a12 12 0 1 1 12 20.77a44 44 0 0 1-66-38.1"></svg:path>`,
})
export class PhClosedCaptioningBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowDownBoldIcon],svg[ph-cloud-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192.49 167.51a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L140 179v-51a12 12 0 0 1 24 0v51l11.51-11.52a12 12 0 0 1 16.98.03M160 36a92.08 92.08 0 0 0-81 48.37A68 68 0 1 0 72 220h12a12 12 0 0 0 0-24H72a44 44 0 0 1-1.81-87.95A91.7 91.7 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 0 1 136 0a67.3 67.3 0 0 1-7.25 30.59a12 12 0 1 0 21.42 10.82A91.1 91.1 0 0 0 252 128a92.1 92.1 0 0 0-92-92"></svg:path>`,
})
export class PhCloudArrowDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowUpBoldIcon],svg[ph-cloud-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.49 151.51a12 12 0 0 1-17 17L168 157v51a12 12 0 0 1-24 0v-51l-11.51 11.52a12 12 0 1 1-17-17l32-32a12 12 0 0 1 17 0ZM160 36a92.08 92.08 0 0 0-81 48.37A68 68 0 1 0 72 220h28a12 12 0 0 0 0-24H72a44 44 0 0 1-1.81-87.95A91.7 91.7 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 1 1 132.6 21.29a12 12 0 1 0 22.8 7.51A92.06 92.06 0 0 0 160 36"></svg:path>`,
})
export class PhCloudArrowUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudBoldIcon],svg[ph-cloud-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 36a92.09 92.09 0 0 0-81 48.36A68 68 0 1 0 72 220h88a92 92 0 0 0 0-184m0 160H72a44 44 0 0 1-1.82-88A92 92 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 1 1 68 68"></svg:path>`,
})
export class PhCloudBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudCheckBoldIcon],svg[ph-cloud-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 36a92.09 92.09 0 0 0-81 48.36A68 68 0 1 0 72 220h88a92 92 0 0 0 0-184m0 160H72a44 44 0 0 1-1.82-88A92 92 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 1 1 68 68m40.49-92.49a12 12 0 0 1 0 17l-48 48a12 12 0 0 1-17 0l-24-24a12 12 0 1 1 17-17L144 143l39.51-39.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhCloudCheckBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudFogBoldIcon],svg[ph-cloud-fog-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 208H72a12 12 0 0 1 0-24h48a12 12 0 0 1 0 24m64-24h-24a12 12 0 0 0 0 24h24a12 12 0 0 0 0-24m-24 36h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m72-124a76.08 76.08 0 0 1-76 76H76a52 52 0 1 1 9-103.22A76 76 0 0 1 232 96m-24 0a52 52 0 0 0-104 0a12 12 0 0 1-24 0c0-1.24 0-2.48.09-3.71A29 29 0 0 0 76 92a28 28 0 0 0 0 56h80a52.06 52.06 0 0 0 52-52"></svg:path>`,
})
export class PhCloudFogBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudLightningBoldIcon],svg[ph-cloud-lightning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 12a80.22 80.22 0 0 0-73.61 48.36A57 57 0 0 0 76 60a56 56 0 0 0 0 112h30.81l-13.1 21.82A12 12 0 0 0 104 212h18.81l-13.1 21.82a12 12 0 1 0 20.58 12.35l24-40A12 12 0 0 0 144 188h-18.81l9.6-16H156a80 80 0 0 0 0-160m0 136H76a32 32 0 0 1 0-64h.28c-.11 1.1-.2 2.2-.26 3.3a12 12 0 1 0 24 1.39A56.06 56.06 0 1 1 156 148"></svg:path>`,
})
export class PhCloudLightningBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudMoonBoldIcon],svg[ph-cloud-moon-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 68c-1.66 0-3.31.06-4.95.16a75.93 75.93 0 0 0-58-62.23a12 12 0 0 0-14.37 14.38A52.05 52.05 0 0 1 32.3 82.68a12 12 0 0 0-14.37 14.39a76.6 76.6 0 0 0 27.91 43.27A56 56 0 0 0 92 228h80a80 80 0 0 0 0-160m-52.11-32a51.64 51.64 0 0 1 23.68 37.17a80.4 80.4 0 0 0-45.18 43.15A57 57 0 0 0 92 116a55.7 55.7 0 0 0-28.23 7.66a52.7 52.7 0 0 1-15.63-15.77A76.11 76.11 0 0 0 119.89 36M172 204H92a32 32 0 0 1 0-64h.28c-.11 1.1-.2 2.2-.26 3.3a12 12 0 0 0 24 1.4a56 56 0 0 1 1.74-11l.15-.55A56.06 56.06 0 1 1 172 204"></svg:path>`,
})
export class PhCloudMoonBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudRainBoldIcon],svg[ph-cloud-rain-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 12a80.22 80.22 0 0 0-73.61 48.36A57 57 0 0 0 76 60a56 56 0 0 0 0 112h29.58L86 201.34a12 12 0 1 0 20 13.32L134.42 172H156a80 80 0 0 0 0-160m0 136H76a32 32 0 0 1 0-64h.28c-.11 1.1-.2 2.2-.26 3.3a12 12 0 1 0 24 1.39A56.06 56.06 0 1 1 156 148m.65 58.66l-26.67 40a12 12 0 1 1-20-13.32l26.66-40a12 12 0 1 1 20 13.32Z"></svg:path>`,
})
export class PhCloudRainBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSlashBoldIcon],svg[ph-cloud-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93a12 12 0 1 0-17.76 16.14L71.79 84A68 68 0 0 0 72 220h88a91.3 91.3 0 0 0 30.66-5.24l8.46 9.31a12 12 0 0 0 17.76-16.14ZM160 196H72a44 44 0 0 1-1.8-87.95A92 92 0 0 0 68 128a12 12 0 0 0 24 0a68.2 68.2 0 0 1 2.66-18.84l77.88 85.67A68.7 68.7 0 0 1 160 196m92-68a91.32 91.32 0 0 1-17.53 54a12 12 0 1 1-19.41-14.11a68 68 0 0 0-89.57-98.53a12 12 0 0 1-12.2-20.66A92 92 0 0 1 252 128"></svg:path>`,
})
export class PhCloudSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSnowBoldIcon],svg[ph-cloud-snow-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 208a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-64-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-48 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16M236 92a80.09 80.09 0 0 1-80 80H76a56 56 0 0 1 0-112a57 57 0 0 1 6.39.36A80.08 80.08 0 0 1 236 92m-24 0a56.06 56.06 0 0 0-112-3.31a12 12 0 1 1-24-1.38c.06-1.11.15-2.21.26-3.31H76a32 32 0 0 0 0 64h80a56.06 56.06 0 0 0 56-56"></svg:path>`,
})
export class PhCloudSnowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSunBoldIcon],svg[ph-cloud-sun-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 68a80.4 80.4 0 0 0-18.46 2.15a60 60 0 0 0-6-7.42l7.57-10.82a12 12 0 0 0-19.66-13.77L119.87 49a59.9 59.9 0 0 0-22.26-5l-2.3-13a12 12 0 0 0-23.63 4.17l2.3 13a60 60 0 0 0-19.21 12.3l-10.86-7.61a12 12 0 0 0-13.77 19.66L41 80.11a59.5 59.5 0 0 0-5 22.25l-13 2.3a12 12 0 0 0 2.07 23.82a12.6 12.6 0 0 0 2.1-.18l13-2.3a59 59 0 0 0 3.44 7.25A56 56 0 0 0 84 228h80a80 80 0 0 0 0-160m-68 0a36 36 0 0 1 26.45 11.61a80.37 80.37 0 0 0-32.06 36.75A57 57 0 0 0 84 116a55.8 55.8 0 0 0-20.33 3.83A36 36 0 0 1 96 68m68 136H84a32 32 0 0 1 0-64h.28c-.11 1.1-.2 2.2-.26 3.3a12 12 0 0 0 24 1.4a56 56 0 0 1 1.74-11l.15-.55A56.06 56.06 0 1 1 164 204"></svg:path>`,
})
export class PhCloudSunBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudWarningBoldIcon],svg[ph-cloud-warning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 36a92.09 92.09 0 0 0-81 48.36A68 68 0 1 0 72 220h88a92 92 0 0 0 0-184m0 160H72a44 44 0 0 1-1.82-88A92 92 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 1 1 68 68m-12-76V88a12 12 0 0 1 24 0v32a12 12 0 0 1-24 0m28 40a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhCloudWarningBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudXBoldIcon],svg[ph-cloud-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 36a92.09 92.09 0 0 0-81 48.36A68 68 0 1 0 72 220h88a92 92 0 0 0 0-184m0 160H72a44 44 0 0 1-1.82-88A92 92 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 1 1 68 68m32.49-79.51L177 132l15.52 15.51a12 12 0 0 1-17 17L160 149l-15.51 15.52a12 12 0 1 1-17-17L143 132l-15.52-15.51a12 12 0 1 1 17-17L160 115l15.51-15.52a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhCloudXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloverBoldIcon],svg[ph-clover-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.25 169.21C228.34 162.67 236 146.11 236 120s-7.66-42.68-22.75-49.22c-10.66-4.61-23.59-3.6-39.17 3.14c6.73-15.58 7.75-28.51 3.14-39.17C170.67 19.66 154.12 12 128 12s-42.67 7.66-49.22 22.75c-4.61 10.66-3.59 23.59 3.14 39.17c-15.58-6.74-28.51-7.75-39.17-3.14C27.66 77.32 20 93.88 20 120s7.66 42.67 22.75 49.21A35.35 35.35 0 0 0 57 172.05q11.15 0 24.94-6c-6.73 15.59-7.75 28.52-3.14 39.17C85.33 220.34 101.88 228 128 228s42.67-7.66 49.22-22.76a34 34 0 0 0 1.53-4.33c7.57 13.18 14 27.41 17.61 42A12 12 0 0 0 208 252a12.3 12.3 0 0 0 2.92-.36a12 12 0 0 0 8.73-14.55c-6-24.11-18.23-46.91-31.51-66.33a50.2 50.2 0 0 0 10.86 1.29a35.35 35.35 0 0 0 14.25-2.84M100.81 44.29C103.09 39 113 36 128 36s24.91 3 27.19 8.29c1.12 2.57 3.44 13-13.53 38.81c-4.63 7-9.59 13.51-13.66 18.52c-4.07-5-9-11.48-13.66-18.52c-16.97-25.84-14.65-36.24-13.53-38.81m-48.52 102.9C47 144.91 44 135 44 120s3-24.91 8.29-27.19a11.5 11.5 0 0 1 4.62-.81c5.56 0 16.09 2.45 34.19 14.34A228 228 0 0 1 109.62 120c-5 4.07-11.48 9-18.52 13.66c-25.84 16.97-36.24 14.65-38.81 13.53m102.9 48.52C152.91 201 143 204 128 204s-24.91-3-27.19-8.29c-1.12-2.58-3.44-13 13.53-38.81c4.63-7 9.59-13.51 13.66-18.52c4.07 5 9 11.48 13.66 18.52c16.97 25.84 14.65 36.23 13.53 38.81m9.71-62.05c-7-4.63-13.51-9.59-18.52-13.66a228 228 0 0 1 18.52-13.66c25.84-17 36.24-14.65 38.81-13.53C209 95.09 212 105 212 120s-3 24.91-8.29 27.19c-2.57 1.12-12.97 3.44-38.81-13.53"></svg:path>`,
})
export class PhCloverBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClubBoldIcon],svg[ph-club-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186.79 84.06a60 60 0 1 0-117.58 0a60 60 0 1 0 19 117.73l-4 19.86A12 12 0 0 0 96 236h64a12 12 0 0 0 11.77-14.35l-4-19.86a60 60 0 1 0 19-117.73ZM184 180a35.88 35.88 0 0 1-24.78-9.88a12 12 0 0 0-20 11.06l6.14 30.82h-34.72l6.16-30.82a12 12 0 0 0-20-11.06a36 36 0 1 1-12.65-60a12 12 0 0 0 14-18A35.7 35.7 0 0 1 92 72a36 36 0 1 1 65.88 20.08a12 12 0 0 0 14 18A36 36 0 1 1 184 180"></svg:path>`,
})
export class PhClubBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoatHangerBoldIcon],svg[ph-coat-hanger-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244 168l-96-72l19.2-14.4A12 12 0 0 0 172 72a44 44 0 0 0-87.66-5.48a12 12 0 1 0 23.82 3a20 20 0 0 1 39.09-2.92L121 86.24c-.15.1-.29.21-.43.32L12 168a20 20 0 0 0 12 36h208a20 20 0 0 0 12-36M36 180l92-69l92 69Z"></svg:path>`,
})
export class PhCoatHangerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodaLogoBoldIcon],svg[ph-coda-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 92a35.8 35.8 0 0 1 19.38 5.47A16 16 0 0 0 220 84V48a20 20 0 0 0-20-20H56a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-36a16 16 0 0 0-24.6-13.48c-6.58 4.22-11.89 5.76-18.92 5.48H176a36 36 0 0 1 0-72m-.24 96a52.4 52.4 0 0 0 20.24-3v19H60V52h136v19.3a61.6 61.6 0 0 0-20-3.3a60 60 0 0 0-.24 120"></svg:path>`,
})
export class PhCodaLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeBlockBoldIcon],svg[ph-code-block-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m51.51 104.49l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 1 1 17 17L45 64l23.49 23.51a12 12 0 0 1-17 17Zm48 0a12 12 0 0 0 17 0l32-32a12 12 0 0 0 0-17l-32-32a12 12 0 1 0-17 17L123 64L99.51 87.51a12 12 0 0 0 0 16.98M200 36h-20a12 12 0 0 0 0 24h16v136H60v-56a12 12 0 0 0-24 0v60a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20"></svg:path>`,
})
export class PhCodeBlockBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeBoldIcon],svg[ph-code-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M71.68 97.22L34.74 128l36.94 30.78a12 12 0 1 1-15.36 18.44l-48-40a12 12 0 0 1 0-18.44l48-40a12 12 0 0 1 15.36 18.44m176 21.56l-48-40a12 12 0 1 0-15.36 18.44L221.26 128l-36.94 30.78a12 12 0 1 0 15.36 18.44l48-40a12 12 0 0 0 0-18.44M164.1 28.72a12 12 0 0 0-15.38 7.18l-64 176a12 12 0 0 0 7.18 15.37a11.8 11.8 0 0 0 4.1.73a12 12 0 0 0 11.28-7.9l64-176a12 12 0 0 0-7.18-15.38"></svg:path>`,
})
export class PhCodeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeSimpleBoldIcon],svg[ph-code-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m96 73l-61.94 55L96 183a12 12 0 1 1-16 18L8 137a12 12 0 0 1 0-18l72-64a12 12 0 0 1 16 18m152 46l-72-64a12 12 0 1 0-16 18l61.91 55L160 183a12 12 0 1 0 16 18l72-64a12 12 0 0 0 0-18"></svg:path>`,
})
export class PhCodeSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodepenLogoBoldIcon],svg[ph-codepen-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.68 85.43l-104-56a12 12 0 0 0-11.38 0l-104 56A12 12 0 0 0 12 96v64a12 12 0 0 0 6.32 10.57l104 56a12 12 0 0 0 11.38 0l104-56A12 12 0 0 0 244 160V96a12 12 0 0 0-6.32-10.57M220 139.91L197.88 128L220 116.09Zm-47.43-25.54L140 96.83V60.09L206.69 96Zm-44.57 24L108.74 128L128 117.63L147.26 128Zm-12-78.28v36.74l-32.57 17.54L49.31 96Zm-80 56L58.12 128L36 139.91Zm47.43 25.54L116 159.17v36.74L49.31 160ZM140 195.91v-36.74l32.57-17.54L206.69 160Z"></svg:path>`,
})
export class PhCodepenLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodesandboxLogoBoldIcon],svg[ph-codesandbox-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m225.6 62.65l-88-48.18a19.91 19.91 0 0 0-19.2 0l-88 48.17A20 20 0 0 0 20 80.19v95.62a20 20 0 0 0 10.4 17.55l88 48.17a19.89 19.89 0 0 0 19.2 0l88-48.18a20 20 0 0 0 10.4-17.54V80.19a20 20 0 0 0-10.4-17.54M164 152v47.72l-24 13.14v-77.75l72-39.42v22.92l-41.76 22.86A12 12 0 0 0 164 152m-78.24-10.53L44 118.61V95.69l72 39.42v77.75l-24-13.14V152a12 12 0 0 0-6.24-10.53m-2.62-80.34l39.1 21.4a11.95 11.95 0 0 0 11.52 0l39.1-21.4L199 75.45l-71 38.87l-71-38.87ZM128 36.57l19.87 10.88L128 58.33l-19.87-10.88ZM44 146l24 13.14v27.47l-24-13.17Zm144 40.61v-27.5L212 146v27.47Z"></svg:path>`,
})
export class PhCodesandboxLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeBeanBoldIcon],svg[ph-coffee-bean-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214.58 41.42C196.86 23.71 171 16.63 141.81 21.5c-27.74 4.62-55.46 19.62-78.08 42.23s-37.61 50.34-42.23 78.08c-4.87 29.21 2.21 55.05 19.92 72.77C55.48 228.64 74.67 236 96.6 236a107.4 107.4 0 0 0 17.59-1.5c27.74-4.62 55.46-19.62 78.08-42.23s37.61-50.34 42.23-78.08c4.87-29.19-2.21-55.05-19.92-72.77M45.17 145.75c3.8-22.84 16.42-45.94 35.53-65S122.91 49 145.75 45.17A82 82 0 0 1 159.27 44a62.8 62.8 0 0 1 18.24 2.57a110 110 0 0 0-22.89 13.83c-20 15.77-32.88 37.72-38.38 65.25c-8.95 44.73-40.3 61.1-62.07 67.09c-8.92-11.91-12.11-28.33-9-46.99m165.66-35.5c-3.8 22.84-16.42 45.94-35.53 65.05s-42.21 31.7-65.05 35.53c-11.65 1.94-22.4 1.41-31.75-1.42a109.4 109.4 0 0 0 22.87-13.81c20-15.77 32.89-37.72 38.39-65.25c9-44.73 40.3-61.1 62.07-67.09c8.92 11.91 12.11 28.33 9 46.99"></svg:path>`,
})
export class PhCoffeeBeanBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeBoldIcon],svg[ph-coffee-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 76H32a12 12 0 0 0-12 12v48a100.24 100.24 0 0 0 26.73 68H32a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24h-14.73a100.8 100.8 0 0 0 20-32A44 44 0 0 0 256 128v-8a44.05 44.05 0 0 0-44-44m-16 60a76.27 76.27 0 0 1-42 68H86a76.27 76.27 0 0 1-42-68v-36h152Zm36-8a20 20 0 0 1-12.57 18.55A97 97 0 0 0 220 136v-34.32A20 20 0 0 1 232 120ZM68 48V24a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0m40 0V24a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0m40 0V24a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0"></svg:path>`,
})
export class PhCoffeeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinBoldIcon],svg[ph-coin-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209.37 60.27C188.08 49.62 160 44 128 44s-60.08 5.62-81.37 16.27C24.62 71.27 12 87.21 12 104v48c0 16.79 12.62 32.73 34.63 43.73C67.92 206.38 96.05 212 128 212s60.08-5.62 81.37-16.27c22-11 34.63-26.94 34.63-43.73v-48c0-16.79-12.62-32.73-34.63-43.73m-152 21.46C75.08 72.88 100.16 68 128 68s52.92 4.88 70.63 13.73C211.81 88.32 220 96.86 220 104s-8.19 15.68-21.37 22.27C180.92 135.12 155.84 140 128 140s-52.92-4.88-70.63-13.73C44.19 119.68 36 111.14 36 104s8.19-15.68 21.37-22.27M180 181.38a180.4 180.4 0 0 1-40 6.3v-24a210.4 210.4 0 0 0 40-5.51ZM76 158.22a210.4 210.4 0 0 0 40 5.51v24a180.4 180.4 0 0 1-40-6.3ZM36 152v-10.46a95 95 0 0 0 10.63 6.19c1.74.87 3.54 1.7 5.37 2.5v21.07c-10-6.06-16-13.19-16-19.3m168 19.3v-21.07c1.83-.8 3.63-1.63 5.37-2.5a95 95 0 0 0 10.63-6.19V152c0 6.11-6 13.24-16 19.3"></svg:path>`,
})
export class PhCoinBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinVerticalBoldIcon],svg[ph-coin-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 20h-48c-38.13 0-68 47.44-68 108s29.87 108 68 108h48c38.13 0 68-47.44 68-108S190.13 20 152 20m37.21 152h-22.9a162.6 162.6 0 0 0 5.29-32h23.93a133.2 133.2 0 0 1-6.32 32m-17.61-56a162.6 162.6 0 0 0-5.29-32h22.9a133.2 133.2 0 0 1 6.32 32Zm5.63-56h-20a98.3 98.3 0 0 0-10-16H152c5.37 0 15.25 2.25 25.23 16M74.77 189.84C65.24 173.51 60 151.55 60 128s5.24-45.51 14.77-61.84C86 46.88 97.91 44 104 44s18 2.88 29.23 22.16C142.76 82.49 148 104.45 148 128s-5.24 45.51-14.77 61.84C122 209.12 110.09 212 104 212s-18-2.88-29.23-22.16M152 212h-4.79a98.3 98.3 0 0 0 10-16h20c-9.96 13.75-19.84 16-25.21 16"></svg:path>`,
})
export class PhCoinVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinsBoldIcon],svg[ph-coins-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 86.11V84c0-14.62-10.83-27.55-30.51-36.4C140.87 40.12 119 36 96 36s-44.87 4.12-61.49 11.6C14.83 56.45 4 69.38 4 84v40c0 14.62 10.83 27.55 30.51 36.4A131.7 131.7 0 0 0 68 169.88V172c0 14.62 10.83 27.55 30.51 36.4C115.13 215.88 137 220 160 220s44.87-4.12 61.49-11.6C241.17 199.55 252 186.62 252 172v-40c0-22.14-25.29-39.92-64-45.89M228 132c0 7.75-21.77 22.48-61.81 23.88C180.33 147.4 188 136.3 188 124v-13.56c25.88 4.71 40 15.04 40 21.56m-120.63 15.63c-3.63.24-7.42.37-11.37.37c-5.08 0-9.89-.22-14.43-.61a11 11 0 0 0-1.14-.09c-1.51-.14-3-.3-4.43-.48v-15.89A187 187 0 0 0 96 132a187 187 0 0 0 20-1.07v15.89c-2.49.3-5.07.56-7.75.75c-.25.01-.59.03-.88.06M164 117.14V124c0 4.78-8.28 12.21-24 17.54v-15a115 115 0 0 0 17.49-6.13q3.44-1.55 6.51-3.27M96 60c44 0 68 15.85 68 24s-24 24-68 24s-68-15.85-68-24s24-24 68-24m-68 64v-6.86q3.08 1.71 6.51 3.26A115 115 0 0 0 52 126.53v15c-15.72-5.32-24-12.75-24-17.53m64 48h4q5.44 0 10.77-.32q4.45 1.57 9.23 2.86v15c-15.72-5.33-24-12.76-24-17.54m48 22.82v-15.88a187 187 0 0 0 20 1.06a187 187 0 0 0 20-1.07v15.89a170 170 0 0 1-40 0m64-5.28v-15a115 115 0 0 0 17.49-6.13q3.44-1.54 6.51-3.26V172c0 4.78-8.28 12.21-24 17.54"></svg:path>`,
})
export class PhCoinsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsBoldIcon],svg[ph-columns-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 28H64a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h36a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H68V52h28Zm96-176h-36a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h36a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176h-28V52h28Z"></svg:path>`,
})
export class PhColumnsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusLeftBoldIcon],svg[ph-columns-plus-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 28h-24a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176h-16V52h16Zm80-176h-24a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176h-16V52h16ZM68 128a12 12 0 0 1-12 12h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1 0-24h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhColumnsPlusLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusRightBoldIcon],svg[ph-columns-plus-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 28H56a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H60V52h16Zm80-176h-24a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176h-16V52h16Zm100-76a12 12 0 0 1-12 12h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1 0-24h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhColumnsPlusRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCommandBoldIcon],svg[ph-command-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 140h-16v-24h16a40 40 0 1 0-40-40v16h-24V76a40 40 0 1 0-40 40h16v24H76a40 40 0 1 0 40 40v-16h24v16a40 40 0 1 0 40-40m-16-64a16 16 0 1 1 16 16h-16ZM60 76a16 16 0 0 1 32 0v16H76a16 16 0 0 1-16-16m32 104a16 16 0 1 1-16-16h16Zm24-64h24v24h-24Zm64 80a16 16 0 0 1-16-16v-16h16a16 16 0 0 1 0 32"></svg:path>`,
})
export class PhCommandBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassBoldIcon],svg[ph-compass-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m35.27-135l-56 24a12 12 0 0 0-6.3 6.3l-24 56A12 12 0 0 0 92.73 179l56-24a12 12 0 0 0 6.3-6.3l24-56A12 12 0 0 0 163.27 77m-28.41 57.89l-24 10.29l10.29-24l24-10.29Z"></svg:path>`,
})
export class PhCompassBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassRoseBoldIcon],svg[ph-compass-rose-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m247 116.39l-20.47-5.34A100.27 100.27 0 0 0 145 29.44L139.61 9a12 12 0 0 0-23.22 0l-5.34 20.47a100.27 100.27 0 0 0-81.61 81.61L9 116.39a12 12 0 0 0 0 23.22L29.44 145a100.27 100.27 0 0 0 81.61 81.61l5.34 20.39a12 12 0 0 0 23.22 0l5.39-20.44A100.27 100.27 0 0 0 226.56 145l20.44-5.39a12 12 0 0 0 0-23.22m-46.88-12.23l-38.31-10l-10-38.31a76.32 76.32 0 0 1 48.34 48.31Zm-82.8-3.78L128 59.54l10.65 40.84L128 111ZM128 145l10.65 10.65L128 196.46l-10.65-40.84Zm-27.62-27.62L111 128l-10.65 10.65L59.54 128Zm55.24 21.3L145 128l10.65-10.65L196.46 128Zm-51.46-82.8l-10 38.31l-38.31 10a76.32 76.32 0 0 1 48.31-48.34Zm-48.31 96l38.31 10l10 38.31a76.32 76.32 0 0 1-48.31-48.35Zm96 48.31l10-38.31l38.31-10a76.32 76.32 0 0 1-48.32 48.27Z"></svg:path>`,
})
export class PhCompassRoseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassToolBoldIcon],svg[ph-compass-tool-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.68 125.46a12 12 0 1 0-21.37-10.92a75.15 75.15 0 0 1-27.66 29.64l-13.5-30.39A44 44 0 0 0 140 37.68V24a12 12 0 0 0-24 0v13.68a44 44 0 0 0-16.15 76.11L53 219.12A12 12 0 0 0 59.13 235a11.9 11.9 0 0 0 4.87 1a12 12 0 0 0 11-7.13l23.67-53.26A99.5 99.5 0 0 0 128 180a102.8 102.8 0 0 0 29.39-4.32L181 228.87a12 12 0 0 0 11 7.13a11.85 11.85 0 0 0 4.86-1a12 12 0 0 0 6.14-15.88l-23.51-52.9a99.4 99.4 0 0 0 39.19-40.76M128 60a20 20 0 1 1-20 20a20 20 0 0 1 20-20m0 96a75.8 75.8 0 0 1-19.52-2.53l13.3-29.92a43.2 43.2 0 0 0 12.44 0l13.33 30A79 79 0 0 1 128 156"></svg:path>`,
})
export class PhCompassToolBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phComputerTowerBoldIcon],svg[ph-computer-tower-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 76a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m12 52h64a12 12 0 0 0 0-24H96a12 12 0 0 0 0 24m116-88v176a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V40a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20m-24 4H68v168h120Zm-60 124a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhComputerTowerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phConfettiBoldIcon],svg[ph-confetti-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M114.32 49.8a19.79 19.79 0 0 0-32.6 7.2l-52.5 144.41A19.82 19.82 0 0 0 47.75 228a20 20 0 0 0 6.84-1.22L199 174.28a19.79 19.79 0 0 0 7.24-32.6Zm-10.13 133.41l-31.4-31.4l10.15-27.91l49.16 49.16Zm-40.42-6.51l15.53 15.56l-24.45 8.89ZM157 164L92 99l10-27.58L184.57 154ZM128 40V16a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0m116.48 83.51a12 12 0 0 1-17 17l-16-16a12 12 0 0 1 17-17Zm-.69-40.13l-24 8a12 12 0 0 1-7.59-22.77l24-8a12 12 0 1 1 7.59 22.77M156.6 65.93C159.83 47.47 173.39 36 192 36c6.45 0 8.69-2.49 10-4.92a18 18 0 0 0 2-7.22V24a12 12 0 0 1 24 0c0 14.47-9.59 36-36 36c-4.94 0-10.21 1.19-11.76 10.06A12 12 0 0 1 168.43 80a12.4 12.4 0 0 1-2.08-.18a12 12 0 0 1-9.75-13.89"></svg:path>`,
})
export class PhConfettiBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phContactlessPaymentBoldIcon],svg[ph-contactless-payment-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152.58 66.35a130.61 130.61 0 0 1 0 123.3a12 12 0 1 1-21.17-11.3a106.7 106.7 0 0 0 0-100.7a12 12 0 1 1 21.16-11.3Zm-52.22 11.06a12 12 0 0 0-5 16.23a73 73 0 0 1 0 68.72a12 12 0 1 0 21.18 11.28a97 97 0 0 0 0-91.28a12 12 0 0 0-16.18-4.95M236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84"></svg:path>`,
})
export class PhContactlessPaymentBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phControlBoldIcon],svg[ph-control-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.49 128.49a12 12 0 0 1-17 0L128 65l-63.51 63.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17"></svg:path>`,
})
export class PhControlBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookieBoldIcon],svg[ph-cookie-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M167.31 160.69a16 16 0 1 1-22.62 0a16 16 0 0 1 22.62 0m-86.62-8a16 16 0 1 0 22.62 0a16 16 0 0 0-22.62 0m14.62-33.38a16 16 0 1 0-22.62 0a16 16 0 0 0 22.62 0m48-6.62a16 16 0 1 0 0 22.62a16 16 0 0 0 0-22.62M236 128A108 108 0 1 1 128 20a12 12 0 0 1 12 12a36 36 0 0 0 36 36a12 12 0 0 1 12 12a36 36 0 0 0 36 36a12 12 0 0 1 12 12m-24.67 10.65A60.17 60.17 0 0 1 165 91a60.17 60.17 0 0 1-47.66-46.32a84 84 0 1 0 94 94Z"></svg:path>`,
})
export class PhCookieBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookingPotBoldIcon],svg[ph-cooking-pot-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M253.76 93A12 12 0 0 0 237 90.24l-9 6.44V80a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v16.68l-9-6.44a12 12 0 1 0-14 19.52l23 16.42V184a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36v-57.82l23-16.42A12 12 0 0 0 253.76 93M204 184a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V92h152ZM76 40V16a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0m40 0V16a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0m40 0V16a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0"></svg:path>`,
})
export class PhCookingPotBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyBoldIcon],svg[ph-copy-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 28H88a12 12 0 0 0-12 12v36H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-36h36a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m-60 176H52V100h104Zm48-48h-24V88a12 12 0 0 0-12-12h-68V52h104Z"></svg:path>`,
})
export class PhCopyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopySimpleBoldIcon],svg[ph-copy-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 64H40a12 12 0 0 0-12 12v140a12 12 0 0 0 12 12h140a12 12 0 0 0 12-12V76a12 12 0 0 0-12-12m-12 140H52V88h116Zm60-164v140a12 12 0 0 1-24 0V52H76a12 12 0 0 1 0-24h140a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCopySimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyleftBoldIcon],svg[ph-copyleft-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m52-84a52 52 0 0 1-93.59 31.21a12 12 0 1 1 19.18-14.41a28 28 0 1 0 0-33.6a12 12 0 1 1-19.18-14.41A52 52 0 0 1 180 128"></svg:path>`,
})
export class PhCopyleftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyrightBoldIcon],svg[ph-copyright-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m41.59-52.79a52 52 0 1 1 0-62.43a12 12 0 1 1-19.18 14.42a28 28 0 1 0 0 33.6a12 12 0 1 1 19.18 14.41"></svg:path>`,
})
export class PhCopyrightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersInBoldIcon],svg[ph-corners-in-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 96V48a12 12 0 0 1 24 0v36h36a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m-52 52H48a12 12 0 0 0 0 24h36v36a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12m112 0h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-36h36a12 12 0 0 0 0-24M96 36a12 12 0 0 0-12 12v36H48a12 12 0 0 0 0 24h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCornersInBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersOutBoldIcon],svg[ph-corners-out-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 48v40a12 12 0 0 1-24 0V60h-28a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12M88 196H60v-28a12 12 0 0 0-24 0v40a12 12 0 0 0 12 12h40a12 12 0 0 0 0-24m120-40a12 12 0 0 0-12 12v28h-28a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12M88 36H48a12 12 0 0 0-12 12v40a12 12 0 0 0 24 0V60h28a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhCornersOutBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCouchBoldIcon],svg[ph-couch-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 104V72a20 20 0 0 0-20-20H32a20 20 0 0 0-20 20v32a20 20 0 0 0-8 16v48a20 20 0 0 0 20 20h4v12a12 12 0 0 0 24 0v-12h152v12a12 12 0 0 0 24 0v-12h4a20 20 0 0 0 20-20v-48a20 20 0 0 0-8-16m-24-4h-12a20 20 0 0 0-20 20v4h-48V76h80ZM116 76v48H68v-4a20 20 0 0 0-20-20H36V76Zm112 88H28v-40h16v12a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-12h16Z"></svg:path>`,
})
export class PhCouchBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCourtBasketballBoldIcon],svg[ph-court-basketball-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 112h-4a28 28 0 0 1 0-56h4ZM36 100h4a28 28 0 0 1 0 56h-4Zm0 80h4a52 52 0 0 0 0-104h-4v-8h80v120H36Zm104 8V68h80v8h-4a52 52 0 0 0 0 104h4v8Z"></svg:path>`,
})
export class PhCourtBasketballBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowBoldIcon],svg[ph-cow-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m32-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m95.48 12.66A20 20 0 0 1 232 132h-28v35.05A38 38 0 0 1 182 236H74a38 38 0 0 1-22-68.95V132H24a20 20 0 0 1-19.61-23.83a60.15 60.15 0 0 1 52-47.76A59.7 59.7 0 0 1 44 24a12 12 0 0 1 24 0a36 36 0 0 0 36 36h48a36 36 0 0 0 36-36a12 12 0 0 1 24 0a59.7 59.7 0 0 1-12.35 36.41a60.15 60.15 0 0 1 52 47.76a19.78 19.78 0 0 1-4.17 16.49M76 160h104v-56a20 20 0 0 0-20-20H96a20 20 0 0 0-20 20ZM56.5 84.64A36.15 36.15 0 0 0 29.26 108H52v-4a43.7 43.7 0 0 1 4.5-19.36M196 198a14 14 0 0 0-14-14H74a14 14 0 0 0 0 28h108a14 14 0 0 0 14-14m30.74-90a36.15 36.15 0 0 0-27.24-23.36A43.7 43.7 0 0 1 204 104v4Z"></svg:path>`,
})
export class PhCowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowboyHatBoldIcon],svg[ph-cowboy-hat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 116a12 12 0 0 0-10.18 5.64q-2.48 4-5 7.57l-14.57-76.88A20 20 0 0 0 150.1 40.4l-.18.15L128 58.8l-21.92-18.25l-.18-.15a20 20 0 0 0-32.15 11.9l-14.61 76.92q-2.49-3.61-5-7.57A12 12 0 0 0 44 116a44 44 0 1 0 0 88h168a44 44 0 1 0 0-88M96.07 63.44l19.25 16l.19.15a19.89 19.89 0 0 0 25 0l.19-.15l19.25-16L171.44 124H84.56ZM44 180a20 20 0 0 1-5.94-39.1c11.7 17.38 23.7 30 35 39.1Zm35-26.75l1-5.25h96l1 5.25c-25.33 25-46.71 26.65-49 26.75c-2.29-.1-23.67-1.71-49-26.75M212 180h-29c11.28-9.12 23.28-21.72 35-39.1a20 20 0 0 1-6 39.1"></svg:path>`,
})
export class PhCowboyHatBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCpuBoldIcon],svg[ph-cpu-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 88h-56a12 12 0 0 0-12 12v56a12 12 0 0 0 12 12h56a12 12 0 0 0 12-12v-56a12 12 0 0 0-12-12m-12 56h-32v-32h32Zm88-4h-12v-24h12a12 12 0 0 0 0-24h-12V56a20 20 0 0 0-20-20h-36V24a12 12 0 0 0-24 0v12h-24V24a12 12 0 0 0-24 0v12H56a20 20 0 0 0-20 20v36H24a12 12 0 0 0 0 24h12v24H24a12 12 0 0 0 0 24h12v36a20 20 0 0 0 20 20h36v12a12 12 0 0 0 24 0v-12h24v12a12 12 0 0 0 24 0v-12h36a20 20 0 0 0 20-20v-36h12a12 12 0 0 0 0-24m-36 56H60V60h136Z"></svg:path>`,
})
export class PhCpuBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneBoldIcon],svg[ph-crane-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.17 13.71a12 12 0 0 0-11.82-.3L101 76H32a20 20 0 0 0-20 20v104a20 20 0 0 0 20 20h88a20 20 0 0 0 20-20v-32a11.9 11.9 0 0 0-.51-3.45L118.32 94L212 44v112h-12v-4a12 12 0 0 0-24 0v8a20 20 0 0 0 20 20h20a20 20 0 0 0 20-20V24a12 12 0 0 0-5.83-10.29M95.07 100l16.8 56H76v-56ZM52 100v56H36v-56Zm-16 96v-16h80v16Z"></svg:path>`,
})
export class PhCraneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneTowerBoldIcon],svg[ph-crane-tower-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 76H111.42L90.73 34.63A12 12 0 0 0 80 28H48a12 12 0 0 0-12 12v36H24a12 12 0 0 0 0 24h12v104H24a12 12 0 0 0 0 24h104a12 12 0 0 0 0-24h-12V100h88v80h-12v-4a12 12 0 0 0-24 0v8a20 20 0 0 0 20 20h20a20 20 0 0 0 20-20v-84h12a12 12 0 0 0 0-24M60 52h12.58l12 24H60Zm0 152v-40h32v40Zm32-64H60v-40h32Z"></svg:path>`,
})
export class PhCraneTowerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCreditCardBoldIcon],svg[ph-credit-card-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 24v20H36V68ZM36 188v-76h184v76Zm172-24a12 12 0 0 1-12 12h-32a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12m-68 0a12 12 0 0 1-12 12h-12a12 12 0 0 1 0-24h12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCreditCardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCricketBoldIcon],svg[ph-cricket-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.15 78.54l-52.69-52.69a20 20 0 0 0-28.28 0L57.86 133.17a20 20 0 0 0 0 28.28l17.86 17.86l-44.2 44.2a12 12 0 0 0 17 17l44.2-44.21l17.86 17.86a20 20 0 0 0 28.28 0l107.29-107.34a20 20 0 0 0 0-28.28m-121.46 115.8l-15-15l26.83-26.83a12 12 0 0 0-17-17l-26.83 26.83l-15-15L109 116h47v47ZM180 139v-35a12 12 0 0 0-12-12h-35l46.34-46.34l47 47ZM60 92a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-40a8 8 0 1 1-8 8a8 8 0 0 1 8-8"></svg:path>`,
})
export class PhCricketBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCropBoldIcon],svg[ph-crop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 192a12 12 0 0 1-12 12h-28v28a12 12 0 0 1-24 0v-28H64a12 12 0 0 1-12-12V76H24a12 12 0 0 1 0-24h28V24a12 12 0 0 1 24 0v156h156a12 12 0 0 1 12 12M104 76h76v76a12 12 0 0 0 24 0V64a12 12 0 0 0-12-12h-88a12 12 0 0 0 0 24"></svg:path>`,
})
export class PhCropBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrossBoldIcon],svg[ph-cross-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 68h-36V32a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v36H56a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h36v84a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-84h36a20 20 0 0 0 20-20V88a20 20 0 0 0-20-20m-4 48h-44a12 12 0 0 0-12 12v92h-24v-92a12 12 0 0 0-12-12H60V92h44a12 12 0 0 0 12-12V36h24v44a12 12 0 0 0 12 12h44Z"></svg:path>`,
})
export class PhCrossBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairBoldIcon],svg[ph-crosshair-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 116h-4.72A100.21 100.21 0 0 0 140 28.72V24a12 12 0 0 0-24 0v4.72A100.21 100.21 0 0 0 28.72 116H24a12 12 0 0 0 0 24h4.72A100.21 100.21 0 0 0 116 227.28V232a12 12 0 0 0 24 0v-4.72A100.21 100.21 0 0 0 227.28 140H232a12 12 0 0 0 0-24m-92 87v-3a12 12 0 0 0-24 0v3a76.15 76.15 0 0 1-63-63h3a12 12 0 0 0 0-24h-3a76.15 76.15 0 0 1 63-63v3a12 12 0 0 0 24 0v-3a76.15 76.15 0 0 1 63 63h-3a12 12 0 0 0 0 24h3a76.15 76.15 0 0 1-63 63M128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhCrosshairBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairSimpleBoldIcon],svg[ph-crosshair-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 191.13V184a12 12 0 0 0-24 0v27.13A84.18 84.18 0 0 1 44.87 140H72a12 12 0 0 0 0-24H44.87A84.18 84.18 0 0 1 116 44.87V72a12 12 0 0 0 24 0V44.87A84.18 84.18 0 0 1 211.13 116H184a12 12 0 0 0 0 24h27.13A84.18 84.18 0 0 1 140 211.13"></svg:path>`,
})
export class PhCrosshairSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownBoldIcon],svg[ph-crown-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 80a32 32 0 1 0-60 15.45l-20.86 25.66l-20.32-46.71a32 32 0 1 0-45.64 0l-20.31 46.71L64 95.45a32 32 0 1 0-35 15.78l14 84.06A19.94 19.94 0 0 0 62.78 212h130.44A19.94 19.94 0 0 0 213 195.29l14-84.06A32.05 32.05 0 0 0 252 80m-32-8a8 8 0 1 1-8 8a8 8 0 0 1 8-8m-92-28a8 8 0 1 1-8 8a8 8 0 0 1 8-8M36 72a8 8 0 1 1-8 8a8 8 0 0 1 8-8m153.83 116H66.17l-10.88-65.22l23.4 28.79A12 12 0 0 0 88 156a13 13 0 0 0 1.63-.11a12 12 0 0 0 9.37-7.1L127.18 84h1.64L157 148.79a12 12 0 0 0 9.37 7.1a13 13 0 0 0 1.63.11a12 12 0 0 0 9.31-4.43l23.4-28.79Z"></svg:path>`,
})
export class PhCrownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownCrossBoldIcon],svg[ph-crown-cross-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 56c-15.4 0-29.19 4.61-40 12.5V44h12a12 12 0 0 0 0-24h-12v-8a12 12 0 0 0-24 0v8h-12a12 12 0 0 0 0 24h12v24.5C105.19 60.61 91.4 56 76 56a64.07 64.07 0 0 0-64 64c0 31.66 15.53 50.6 28.55 60.91A85.8 85.8 0 0 0 60 192.45V208a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20v-15.55a85.8 85.8 0 0 0 19.45-11.54C228.47 170.6 244 151.66 244 120a64.07 64.07 0 0 0-64-64m1.09 116.36A12 12 0 0 0 172 184v20H84v-20a12 12 0 0 0-9.09-11.64a59.4 59.4 0 0 1-19.46-10.27C42.54 151.87 36 137.71 36 120a40 40 0 0 1 40-40c23.18 0 40 15.14 40 36v60a12 12 0 0 0 24 0v-60c0-20.86 16.82-36 40-36a40 40 0 0 1 40 40c0 41.68-37.38 52-38.91 52.36"></svg:path>`,
})
export class PhCrownCrossBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownSimpleBoldIcon],svg[ph-crown-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.63 70a19.82 19.82 0 0 0-23.55 4.71l-29.52 31.82l-33.34-74.77l-.06-.14a20 20 0 0 0-36.32 0l-.06.14l-33.34 74.76L46.92 74.7a20 20 0 0 0-34.6 16.81c0 .16.06.31.09.47l22.66 103.78A20 20 0 0 0 54.71 212h146.58a20 20 0 0 0 19.64-16.24L243.59 92c0-.16.07-.31.09-.47A19.82 19.82 0 0 0 232.63 70m-34.57 118H57.94l-18.88-86.49l32.14 34.65a12 12 0 0 0 19.8-3.27l37-83.07l37 83.07a12 12 0 0 0 19.76 3.27l32.14-34.65Z"></svg:path>`,
})
export class PhCrownSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeBoldIcon],svg[ph-cube-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m225.6 62.64l-88-48.17a19.91 19.91 0 0 0-19.2 0l-88 48.17A20 20 0 0 0 20 80.19v95.62a20 20 0 0 0 10.4 17.55l88 48.17a19.89 19.89 0 0 0 19.2 0l88-48.17a20 20 0 0 0 10.4-17.55V80.19a20 20 0 0 0-10.4-17.55M128 36.57L200 76l-72 39.4L56 76ZM44 96.79l72 39.4v76.67l-72-39.42Zm96 116.07v-76.67l72-39.4v76.65Z"></svg:path>`,
})
export class PhCubeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeFocusBoldIcon],svg[ph-cube-focus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 48v40a12 12 0 0 1-24 0V60h-28a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12M72 196H44v-28a12 12 0 0 0-24 0v40a12 12 0 0 0 12 12h40a12 12 0 0 0 0-24m152-40a12 12 0 0 0-12 12v28h-28a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12M32 100a12 12 0 0 0 12-12V60h28a12 12 0 0 0 0-24H32a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12m158 70.42l-56 32a12 12 0 0 1-11.9 0l-56-32A12 12 0 0 1 60 160V96a12 12 0 0 1 6-10.42l56-32a12 12 0 0 1 11.9 0l56 32A12 12 0 0 1 196 96v64a12 12 0 0 1-6 10.42M96.19 96L128 114.18L159.81 96L128 77.82ZM84 153l32 18.28V135l-32-18.32Zm88 0v-36.32L140 135v36.36Z"></svg:path>`,
})
export class PhCubeFocusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeTransparentBoldIcon],svg[ph-cube-transparent-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.5 95.53l-64-64A12 12 0 0 0 152 28H40a12 12 0 0 0-12 12v112a11.94 11.94 0 0 0 3 7.93c.15.18.31.36.5.56l64 64A12 12 0 0 0 104 228h112a12 12 0 0 0 12-12V104a12 12 0 0 0-3.5-8.47M164 69l23 23h-23ZM92 187l-23-23h23Zm0-47H52V69l40 40ZM69 52h71v40h-31Zm71 64v24h-24v-24Zm-24 88v-40h31l40 40Zm88-17l-40-40v-31h40Z"></svg:path>`,
})
export class PhCubeTransparentBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyBtcBoldIcon],svg[ph-currency-btc-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185.08 114.46A48 48 0 0 0 160 37.52V24a12 12 0 0 0-24 0v12h-16V24a12 12 0 0 0-24 0v12H72a12 12 0 0 0 0 24h4v128h-4a12 12 0 0 0 0 24h24v12a12 12 0 0 0 24 0v-12h16v12a12 12 0 0 0 24 0v-12a52 52 0 0 0 25.08-97.54M172 84a24 24 0 0 1-24 24h-48V60h48a24 24 0 0 1 24 24m-12 104h-60v-56h60a28 28 0 0 1 0 56"></svg:path>`,
})
export class PhCurrencyBtcBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCircleDollarBoldIcon],svg[ph-currency-circle-dollar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m44-64a32 32 0 0 1-32 32v4a12 12 0 0 1-24 0v-4h-12a12 12 0 0 1 0-24h36a8 8 0 0 0 0-16h-24a32 32 0 0 1 0-64v-4a12 12 0 0 1 24 0v4h12a12 12 0 0 1 0 24h-36a8 8 0 0 0 0 16h24a32 32 0 0 1 32 32"></svg:path>`,
})
export class PhCurrencyCircleDollarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCnyBoldIcon],svg[ph-currency-cny-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 56a12 12 0 0 1 12-12h128a12 12 0 0 1 0 24H64a12 12 0 0 1-12-12m164 100a12 12 0 0 0-12 12v12h-28a12 12 0 0 1-12-12v-44h44a12 12 0 0 0 0-24H48a12 12 0 0 0 0 24h44v4a52.06 52.06 0 0 1-52 52a12 12 0 0 0 0 24a76.08 76.08 0 0 0 76-76v-4h24v44a36 36 0 0 0 36 36h40a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCurrencyCnyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarBoldIcon],svg[ph-currency-dollar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 116h-12V60h4a28 28 0 0 1 28 28a12 12 0 0 0 24 0a52.06 52.06 0 0 0-52-52h-4V24a12 12 0 0 0-24 0v12h-4a52 52 0 0 0 0 104h4v56h-12a28 28 0 0 1-28-28a12 12 0 0 0-24 0a52.06 52.06 0 0 0 52 52h12v12a12 12 0 0 0 24 0v-12h12a52 52 0 0 0 0-104m-40 0a28 28 0 0 1 0-56h4v56Zm40 80h-12v-56h12a28 28 0 0 1 0 56"></svg:path>`,
})
export class PhCurrencyDollarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarSimpleBoldIcon],svg[ph-currency-dollar-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 168a52.06 52.06 0 0 1-52 52h-12v12a12 12 0 0 1-24 0v-12h-12a52.06 52.06 0 0 1-52-52a12 12 0 0 1 24 0a28 28 0 0 0 28 28h48a28 28 0 0 0 0-56h-40a52 52 0 0 1 0-104h4V24a12 12 0 0 1 24 0v12h4a52.06 52.06 0 0 1 52 52a12 12 0 0 1-24 0a28 28 0 0 0-28-28h-32a28 28 0 0 0 0 56h40a52.06 52.06 0 0 1 52 52"></svg:path>`,
})
export class PhCurrencyDollarSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEthBoldIcon],svg[ph-currency-eth-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m225.44 120.59l-88-112a12 12 0 0 0-18.88 0l-88 112a12 12 0 0 0 0 14.82l.6.76a3.7 3.7 0 0 0 .44.56l87 110.68a12 12 0 0 0 18.88 0l88-112a12 12 0 0 0-.04-14.82M140 50.7l57.12 72.7l-57.12 26Zm-24 98.66l-57.12-26L116 50.7Zm0 26.37v29.57l-36.15-46Zm24 0l36.15-16.43l-36.15 46Z"></svg:path>`,
})
export class PhCurrencyEthBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEurBoldIcon],svg[ph-currency-eur-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192.94 189.66a12 12 0 0 1-.94 17A84 84 0 0 1 53.55 160H40a12 12 0 0 1 0-24h12v-16H40a12 12 0 0 1 0-24h13.55A84 84 0 0 1 192 49.39a12 12 0 0 1-16 17.89A60 60 0 0 0 78.18 96H136a12 12 0 0 1 0 24H76v16h44a12 12 0 0 1 0 24H78.18A60 60 0 0 0 176 188.72a12 12 0 0 1 16.94.94"></svg:path>`,
})
export class PhCurrencyEurBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyGbpBoldIcon],svg[ph-currency-gbp-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 208a12 12 0 0 1-12 12H56a12 12 0 0 1 0-24h4a24 24 0 0 0 24-24v-32H56a12 12 0 0 1 0-24h28V84a56 56 0 0 1 91.63-43.21a12 12 0 0 1-15.28 18.51A31.66 31.66 0 0 0 140 52a32 32 0 0 0-32 32v32h28a12 12 0 0 1 0 24h-28v32a47.74 47.74 0 0 1-6.44 24H184a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCurrencyGbpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyInrBoldIcon],svg[ph-currency-inr-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 80a12 12 0 0 1-12 12h-28a64.07 64.07 0 0 1-64 64h-5l65 59.12a12 12 0 1 1-16.14 17.76l-88-80A12 12 0 0 1 72 132h36a40 40 0 0 0 40-40H72a12 12 0 0 1 0-24h68a40 40 0 0 0-32-16H72a12 12 0 0 1 0-24h128a12 12 0 0 1 0 24h-42.09a64 64 0 0 1 9.4 16H200a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCurrencyInrBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyJpyBoldIcon],svg[ph-currency-jpy-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m209.29 55.6l-56 68.4H176a12 12 0 0 1 0 24h-36v16h36a12 12 0 0 1 0 24h-36v28a12 12 0 0 1-24 0v-28H80a12 12 0 0 1 0-24h36v-16H80a12 12 0 0 1 0-24h22.68l-56-68.4a12 12 0 1 1 18.61-15.2L128 117.05l62.71-76.65a12 12 0 1 1 18.58 15.2"></svg:path>`,
})
export class PhCurrencyJpyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKrwBoldIcon],svg[ph-currency-krw-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 124h-16.17l19.29-47.48a12 12 0 0 0-22.24-9l-23 56.51h-35.8l-23-56.51a12 12 0 0 0-22.24 0L93.92 124H58.08l-23-56.51a12 12 0 0 0-22.24 9L32.17 124H16a12 12 0 0 0 0 24h25.92l23 56.52a12 12 0 0 0 22.24 0l23-56.52H146l23 56.52a12 12 0 0 0 22.24 0l23-56.52H240a12 12 0 0 0 0-24M76 168.12L67.83 148h16.34ZM119.83 124l8.17-20.11l8.17 20.11ZM180 168.12L171.83 148h16.34Z"></svg:path>`,
})
export class PhCurrencyKrwBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKztBoldIcon],svg[ph-currency-kzt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 100a12 12 0 0 1-12 12h-60v100a12 12 0 0 1-24 0V112H56a12 12 0 0 1 0-24h144a12 12 0 0 1 12 12M56 64h144a12 12 0 0 0 0-24H56a12 12 0 0 0 0 24"></svg:path>`,
})
export class PhCurrencyKztBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyNgnBoldIcon],svg[ph-currency-ngn-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 116h-12V46a12 12 0 0 0-24 0v70h-46.14l-60.4-77.38A12 12 0 0 0 52 46v70H40a12 12 0 0 0 0 24h12v70a12 12 0 0 0 24 0v-70h46.14l60.4 77.38A12 12 0 0 0 204 210v-70h12a12 12 0 0 0 0-24m-140 0V80.88L103.41 116Zm104 59.12L152.59 140H180Z"></svg:path>`,
})
export class PhCurrencyNgnBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyRubBoldIcon],svg[ph-currency-rub-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 156a64 64 0 0 0 0-128H88a12 12 0 0 0-12 12v92H56a12 12 0 0 0 0 24h20v16H56a12 12 0 0 0 0 24h20v20a12 12 0 0 0 24 0v-20h44a12 12 0 0 0 0-24h-44v-16ZM100 52h48a40 40 0 0 1 0 80h-48Z"></svg:path>`,
})
export class PhCurrencyRubBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorBoldIcon],svg[ph-cursor-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.15 179.17l-46.83-46.82l37.93-13.51l.76-.3a20 20 0 0 0-1.76-37.27L54.16 29A20 20 0 0 0 29 54.16l52.27 160.08a20 20 0 0 0 37.27 1.76c.11-.25.21-.5.3-.76l13.51-37.92l46.83 46.82a20 20 0 0 0 28.28 0l16.69-16.68a20 20 0 0 0 0-28.29m-30.83 25.17l-48.48-48.48A20 20 0 0 0 130.7 150a20.7 20.7 0 0 0-3.74.35A20 20 0 0 0 112.35 162c-.11.25-.21.5-.3.76L100.4 195.5L54.29 54.29l141.21 46.1l-32.71 11.66c-.26.09-.51.19-.76.3a20 20 0 0 0-6.17 32.48l48.49 48.48Z"></svg:path>`,
})
export class PhCursorBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorClickBoldIcon],svg[ph-cursor-click-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.15 179.17l-46.82-46.82l37.92-13.51c.26-.09.51-.19.76-.3a20 20 0 0 0-1.76-37.27L54.16 29A20 20 0 0 0 29 54.16l52.27 160.08a20 20 0 0 0 37.27 1.76c.11-.25.21-.5.3-.76l13.51-37.92l46.83 46.82a20 20 0 0 0 28.28 0l16.69-16.68a20 20 0 0 0 0-28.29m-30.83 25.17l-48.48-48.48A20 20 0 0 0 130.7 150a20.5 20.5 0 0 0-3.73.35A20 20 0 0 0 112.35 162c-.11.25-.2.5-.3.76L100.4 195.5L54.29 54.29L195.5 100.4l-32.71 11.65c-.25.09-.51.19-.76.3a20 20 0 0 0-6.16 32.48l48.48 48.48ZM84 16v-4a12 12 0 0 1 24 0v4a12 12 0 0 1-24 0m-72 92a12 12 0 0 1 0-24h4a12 12 0 0 1 0 24Zm108.62-83.79l4-12a12 12 0 0 1 22.77 7.58l-4 12a12 12 0 0 1-22.77-7.58m-81.23 104a12 12 0 0 1-7.59 15.17l-12 4a12 12 0 1 1-7.59-22.76l12-4a12 12 0 0 1 15.18 7.59"></svg:path>`,
})
export class PhCursorClickBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorTextBoldIcon],svg[ph-cursor-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 208a12 12 0 0 1-12 12h-16a43.86 43.86 0 0 1-32-13.85A43.86 43.86 0 0 1 96 220H80a12 12 0 0 1 0-24h16a20 20 0 0 0 20-20v-36h-12a12 12 0 0 1 0-24h12V80a20 20 0 0 0-20-20H80a12 12 0 0 1 0-24h16a43.86 43.86 0 0 1 32 13.85A43.86 43.86 0 0 1 160 36h16a12 12 0 0 1 0 24h-16a20 20 0 0 0-20 20v36h12a12 12 0 0 1 0 24h-12v36a20 20 0 0 0 20 20h16a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCursorTextBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCylinderBoldIcon],svg[ph-cylinder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M179.14 24.08C165.28 16.29 147.12 12 128 12s-37.28 4.29-51.14 12.08C60.83 33.1 52 45.86 52 60v136c0 14.14 8.83 26.9 24.86 35.92C90.72 239.71 108.88 244 128 244s37.28-4.29 51.14-12.08c16-9 24.86-21.78 24.86-35.92V60c0-14.14-8.83-26.9-24.86-35.92M88.63 45c10.17-5.72 24.52-9 39.37-9s29.2 3.28 39.37 9c8 4.52 12.63 10 12.63 15s-4.6 10.48-12.63 15c-10.17 5.72-24.52 9-39.37 9s-29.2-3.28-39.37-9C80.6 70.48 76 65 76 60s4.6-10.48 12.63-15m78.74 166c-10.17 5.72-24.52 9-39.37 9s-29.2-3.28-39.37-9C80.6 206.48 76 201 76 196V95.4l.86.52C90.72 103.71 108.88 108 128 108s37.28-4.29 51.14-12.08l.86-.52V196c0 5-4.6 10.48-12.63 15"></svg:path>`,
})
export class PhCylinderBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDatabaseBoldIcon],svg[ph-database-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 35.52C177.62 25.51 153.48 20 128 20s-49.62 5.51-68 15.52C39.37 46.79 28 62.58 28 80v96c0 17.42 11.37 33.21 32 44.48c18.35 10 42.49 15.52 68 15.52s49.62-5.51 68-15.52c20.66-11.27 32-27.06 32-44.48V80c0-17.42-11.37-33.21-32-44.48m8 92.48c0 17-31.21 36-76 36s-76-19-76-36v-8.46a89 89 0 0 0 8 4.94c18.35 10 42.49 15.52 68 15.52s49.62-5.51 68-15.52a89 89 0 0 0 8-4.94Zm-76-84c44.79 0 76 19 76 36s-31.21 36-76 36s-76-19-76-36s31.21-36 76-36m0 168c-44.79 0-76-19-76-36v-8.46a89 89 0 0 0 8 4.94c18.35 10 42.49 15.52 68 15.52s49.62-5.51 68-15.52a89 89 0 0 0 8-4.94V176c0 17-31.21 36-76 36"></svg:path>`,
})
export class PhDatabaseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeskBoldIcon],svg[ph-desk-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 60H12a12 12 0 0 0 0 24h4v108a12 12 0 0 0 24 0v-36h176v36a12 12 0 0 0 24 0V84h4a12 12 0 0 0 0-24M40 84h76v48H40Zm176 48h-76V84h76Zm-116-24a12 12 0 0 1-12 12H68a12 12 0 0 1 0-24h20a12 12 0 0 1 12 12m56 0a12 12 0 0 1 12-12h20a12 12 0 0 1 0 24h-20a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhDeskBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopBoldIcon],svg[ph-desktop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a28 28 0 0 0-28 28v108a28 28 0 0 0 28 28h68v12H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24h-20v-12h68a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28M48 60h160a4 4 0 0 1 4 4v72H44V64a4 4 0 0 1 4-4m160 116H48a4 4 0 0 1-4-4v-12h168v12a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhDesktopBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopTowerBoldIcon],svg[ph-desktop-tower-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 76a12 12 0 0 1 12-12h24a12 12 0 0 1 0 24h-24a12 12 0 0 1-12-12m12 48h24a12 12 0 0 0 0-24h-24a12 12 0 0 0 0 24m72-76v160a20 20 0 0 1-20 20h-80a20 20 0 0 1-20-20v-16h-32v12h8a12 12 0 0 1 0 24H68a12 12 0 0 1 0-24h8v-12H32a28 28 0 0 1-28-28V96a28 28 0 0 1 28-28h100V48a20 20 0 0 1 20-20h80a20 20 0 0 1 20 20M132 168V92H32a4 4 0 0 0-4 4v68a4 4 0 0 0 4 4Zm96-116h-72v152h72Zm-36 108a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhDesktopTowerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDetectiveBoldIcon],svg[ph-detective-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 104h-24.79l-43.39-59.76a20 20 0 0 0-31.61-.94l-12.82 14.86c-.1.11-.2.23-.29.35a4 4 0 0 1-6.2 0c-.09-.12-.19-.24-.29-.35L111.79 43.3a20 20 0 0 0-31.61.94L36.79 104H12a12 12 0 0 0 0 24h232a12 12 0 0 0 0-24M96.62 62.45l9.69 11.24a28 28 0 0 0 43.38 0l9.69-11.24L189.55 104H66.45ZM180 140a40.07 40.07 0 0 0-38.16 28h-27.68a40 40 0 1 0 0 24h27.68A40 40 0 1 0 180 140M76 196a16 16 0 1 1 16-16a16 16 0 0 1-16 16m104 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhDetectiveBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevToLogoBoldIcon],svg[ph-dev-to-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 52H24A20 20 0 0 0 4 72v112a20 20 0 0 0 20 20h208a20 20 0 0 0 20-20V72a20 20 0 0 0-20-20m-4 128H28V76h200Zm-120-24v-56a12 12 0 0 1 12-12h20a12 12 0 0 1 0 24h-8v4a12 12 0 0 1 0 24v4h8a12 12 0 0 1 0 24h-20a12 12 0 0 1-12-12m52.46-52.7a12 12 0 1 1 23.08-6.6l4.46 15.62l4.46-15.62a12 12 0 0 1 23.08 6.6l-16 56a12 12 0 0 1-23.08 0ZM52 168h12a36 36 0 0 0 36-36v-8a36 36 0 0 0-36-36H52a12 12 0 0 0-12 12v56a12 12 0 0 0 12 12m12-56a12 12 0 0 1 12 12v8a12 12 0 0 1-12 12Z"></svg:path>`,
})
export class PhDevToLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileBoldIcon],svg[ph-device-mobile-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 12H80a28 28 0 0 0-28 28v176a28 28 0 0 0 28 28h96a28 28 0 0 0 28-28V40a28 28 0 0 0-28-28M76 76h104v104H76Zm4-40h96a4 4 0 0 1 4 4v12H76V40a4 4 0 0 1 4-4m96 184H80a4 4 0 0 1-4-4v-12h104v12a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhDeviceMobileBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileCameraBoldIcon],svg[ph-device-mobile-camera-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 12H80a28 28 0 0 0-28 28v176a28 28 0 0 0 28 28h96a28 28 0 0 0 28-28V40a28 28 0 0 0-28-28m4 204a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4ZM144 68a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDeviceMobileCameraBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSlashBoldIcon],svg[ph-device-mobile-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.88 207.93l-160-176a12 12 0 1 0-17.76 16.14L52 62.24V216a28 28 0 0 0 28 28h96a28 28 0 0 0 26-17.61a12 12 0 0 0 14.88-18.46M176 220H80a4 4 0 0 1-4-4V88.64L180 203v13a4 4 0 0 1-4 4M75.51 24a12 12 0 0 1 12-12H176a28 28 0 0 1 28 28v98.94a12 12 0 0 1-24 0V40a4 4 0 0 0-4-4H87.51a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhDeviceMobileSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSpeakerBoldIcon],svg[ph-device-mobile-speaker-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 12H80a28 28 0 0 0-28 28v176a28 28 0 0 0 28 28h96a28 28 0 0 0 28-28V40a28 28 0 0 0-28-28m4 204a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4ZM164 64a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDeviceMobileSpeakerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceRotateBoldIcon],svg[ph-device-rotate-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m208.49 224.49l-24 24a12 12 0 0 1-17-17L171 228H80a28 28 0 0 1-28-28v-92a12 12 0 0 1 24 0v92a4 4 0 0 0 4 4h91l-3.52-3.51a12 12 0 0 1 17-17l24 24a12 12 0 0 1 .01 17M80 76a12 12 0 0 0 8.49-20.49L85 52h91a4 4 0 0 1 4 4v92a12 12 0 0 0 24 0V56a28 28 0 0 0-28-28H85l3.52-3.52a12 12 0 0 0-17-17l-24 24a12 12 0 0 0 0 17l24 24A12 12 0 0 0 80 76"></svg:path>`,
})
export class PhDeviceRotateBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletBoldIcon],svg[ph-device-tablet-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 20H64a28 28 0 0 0-28 28v160a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V48a28 28 0 0 0-28-28M60 84h136v88H60Zm4-40h128a4 4 0 0 1 4 4v12H60V48a4 4 0 0 1 4-4m128 168H64a4 4 0 0 1-4-4v-12h136v12a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhDeviceTabletBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletCameraBoldIcon],svg[ph-device-tablet-camera-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 20H64a28 28 0 0 0-28 28v160a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V48a28 28 0 0 0-28-28m4 188a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4ZM144 76a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDeviceTabletCameraBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletSpeakerBoldIcon],svg[ph-device-tablet-speaker-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 20H64a28 28 0 0 0-28 28v160a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V48a28 28 0 0 0-28-28m4 188a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4ZM172 72a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDeviceTabletSpeakerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevicesBoldIcon],svg[ph-devices-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 72h-12v-8a28 28 0 0 0-28-28H40a28 28 0 0 0-28 28v88a28 28 0 0 0 28 28h96v12a28 28 0 0 0 28 28h60a28 28 0 0 0 28-28v-92a28 28 0 0 0-28-28M40 156a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4v8h-24a28 28 0 0 0-28 28v56Zm188 36a4 4 0 0 1-4 4h-60a4 4 0 0 1-4-4v-92a4 4 0 0 1 4-4h60a4 4 0 0 1 4 4Zm-104 16a12 12 0 0 1-12 12H88a12 12 0 0 1 0-24h24a12 12 0 0 1 12 12m88-84a12 12 0 0 1-12 12h-12a12 12 0 0 1 0-24h12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDevicesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondBoldIcon],svg[ph-diamond-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238.16 113.89L142.1 17.83a20 20 0 0 0-28.21 0l-96 96.06a20 20 0 0 0 0 28.22l96.05 96.06a20 20 0 0 0 28.21 0l96-96.06a20 20 0 0 0 0-28.22ZM128 218.33L37.68 128L128 37.67L218.32 128Z"></svg:path>`,
})
export class PhDiamondBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondsFourBoldIcon],svg[ph-diamonds-four-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M119.51 108.49a12 12 0 0 0 17 0l38-38a12 12 0 0 0 0-17l-38-38a12 12 0 0 0-17 0l-38 38a12 12 0 0 0 0 17ZM128 41l21 21l-21 21l-21-21Zm8.49 106.54a12 12 0 0 0-17 0l-38 38a12 12 0 0 0 0 17l38 38a12 12 0 0 0 17 0l38-38a12 12 0 0 0 0-17ZM128 215l-21-21l21-21l21 21Zm-19.51-95.52l-38-38a12 12 0 0 0-17 0l-38 38a12 12 0 0 0 0 17l38 38a12 12 0 0 0 17 0l38-38a12 12 0 0 0 0-16.97ZM62 149l-21-21l21-21l21 21Zm178.49-29.52l-38-38a12 12 0 0 0-17 0l-38 38a12 12 0 0 0 0 17l38 38a12 12 0 0 0 17 0l38-38a12 12 0 0 0 0-16.97ZM194 149l-21-21l21-21l21 21Z"></svg:path>`,
})
export class PhDiamondsFourBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFiveBoldIcon],svg[ph-dice-five-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36m12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12ZM104 88a16 16 0 1 1-16-16a16 16 0 0 1 16 16m40 40a16 16 0 1 1-16-16a16 16 0 0 1 16 16m40-40a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-80 80a16 16 0 1 1-16-16a16 16 0 0 1 16 16m80 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDiceFiveBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFourBoldIcon],svg[ph-dice-four-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36m12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12Zm-92-96a16 16 0 1 1-16-16a16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-64 64a16 16 0 1 1-16-16a16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDiceFourBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceOneBoldIcon],svg[ph-dice-one-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36m12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12Zm-60-64a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDiceOneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceSixBoldIcon],svg[ph-dice-six-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36m12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12ZM112 84a16 16 0 1 1-16-16a16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-64 44a16 16 0 1 1-16-16a16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-64 44a16 16 0 1 1-16-16a16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDiceSixBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceThreeBoldIcon],svg[ph-dice-three-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36m12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12ZM104 88a16 16 0 1 1-16-16a16 16 0 0 1 16 16m40 40a16 16 0 1 1-16-16a16 16 0 0 1 16 16m40 40a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDiceThreeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceTwoBoldIcon],svg[ph-dice-two-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36m12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12Zm-84-88a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 48a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDiceTwoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscBoldIcon],svg[ph-disc-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m42.32 96a44 44 0 0 0-3.91-9.44l28.84-28.84A83.55 83.55 0 0 1 211.13 116ZM148 128a20 20 0 1 1-20-20a20 20 0 0 1 20 20m-20 84a84 84 0 1 1 50.28-151.25l-28.85 28.84A44 44 0 1 0 170.32 140h40.81A84.12 84.12 0 0 1 128 212"></svg:path>`,
})
export class PhDiscBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscoBallBoldIcon],svg[ph-disco-ball-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 60.78V16a12 12 0 0 0-24 0v44.78a92 92 0 1 0 24 0M178.92 140h-23.4c-1.64-20.74-7.36-37-13.81-49.15A68.23 68.23 0 0 1 178.92 140M112 215c-7-8.62-17-25.09-19.45-51h38.9C129 189.9 119 206.37 112 215m-19.45-75C95 114.1 105 97.63 112 89c7 8.62 17 25.09 19.45 51ZM82.29 90.85C75.84 103 70.12 119.26 68.48 140h-23.4a68.23 68.23 0 0 1 37.21-49.15M45.08 164h23.4c1.64 20.74 7.36 37 13.81 49.15A68.23 68.23 0 0 1 45.08 164m96.63 49.15c6.45-12.15 12.17-28.41 13.81-49.15h23.4a68.23 68.23 0 0 1-37.21 49.15M256 88a12 12 0 0 1-12 12h-4v4a12 12 0 0 1-24 0v-4h-4a12 12 0 0 1 0-24h4v-4a12 12 0 0 1 24 0v4h4a12 12 0 0 1 12 12M148 36a12 12 0 0 1 12-12h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 0 24h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhDiscoBallBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
