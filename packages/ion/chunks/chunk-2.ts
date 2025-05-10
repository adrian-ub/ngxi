import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosImageIcon],svg[ion-ios-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M112.6 312.3h190.7c4.5 0 7.1-5.1 4.5-8.8l-95.4-153.4c-2.2-3.2-6.9-3.2-9.1 0L108 303.5c-2.6 3.7.1 8.8 4.6 8.8z" fill="currentColor"></svg:path><svg:path d="M306.7 254.3l35 55.7c1 1.5 2.7 2.4 4.5 2.4h53.2c4.5 0 7.1-5.1 4.5-8.8l-61.6-87.7c-2.2-3.2-6.9-3.2-9.1 0L306.6 248c-1.2 1.8-1.2 4.3.1 6.3z" fill="currentColor"></svg:path><svg:path d="M351.1 167.9c13.1-1.3 23.7-11.9 25-25 1.8-17.7-13-32.5-30.7-30.7-13.1 1.3-23.7 11.9-25 25-1.7 17.7 13 32.5 30.7 30.7z" fill="currentColor"></svg:path><svg:path d="M432 48H80c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zm-2.7 280c0 4.4-3.6 8-8 8H90.7c-4.4 0-8-3.6-8-8V90.7c0-4.4 3.6-8 8-8h330.7c4.4 0 8 3.6 8 8V328z" fill="currentColor"></svg:path>`,
})
export class IonIosImageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosImagesIcon],svg[ion-ios-images-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M262.3 199.2c-1.6-2.8-5.6-3.2-7.7-.7l-91.9 122.2c-2.5 2.9-.6 7.4 3.2 7.7l161.1 14c3.8.3 6.4-3.8 4.5-7.1l-69.2-136.1z" fill="currentColor"></svg:path><svg:path d="M367.2 264.1c-1.6-2.8-5.6-3.2-7.7-.7l-24.8 25.1a4.68 4.68 0 00-.5 5.4l25.4 49.5c.8 1.3 2.1 2.2 3.7 2.3l44.9 3.9c3.8.3 6.4-3.8 4.5-7.1l-45.5-78.4z" fill="currentColor"></svg:path><svg:path d="M378.1 224.4c11.2-.1 20.9-8.3 23-19.2 2.8-14.8-8.6-28.3-23.7-28.1-11.2.1-20.9 8.3-23 19.2-2.8 14.8 8.6 28.3 23.7 28.1z" fill="currentColor"></svg:path><svg:path d="M455.2 129.3l-65.8-5.7-6.1-67c-1.3-14.9-14.5-25.9-29.5-24.5L56.7 58.9c-14.9 1.3-25.9 14.5-24.6 29.4l26.8 296.5c1.3 14.9 14.5 25.9 29.5 24.5l15.7-1.4-1.5 16.7c-1.3 14.9 9.7 28 24.7 29.3l297.3 25.9c14.9 1.3 28.1-9.7 29.4-24.6l26-296.6c1.2-14.8-9.8-28-24.8-29.3zM87.6 300.7c-3.7.3-7-2.4-7.4-6.1l-18-200c-.3-3.7 2.4-7 6.1-7.3l279.2-25.1c3.7-.3 7 2.4 7.4 6.1l4.8 52.8L158 103.4c-14.9-1.3-28.1 9.7-29.4 24.6l-14.9 170.3-26.1 2.4zm362.2-135.6l-17.5 200c-.3 3.7-3.6 6.5-7.3 6.2l-18.6-1.6L145.7 347c-3.7-.3-6.5-3.6-6.2-7.3l3.8-43.9L157 139.7c.3-3.7 3.6-6.5 7.3-6.2l198 17.3 29.7 2.6 51.6 4.5c3.8.2 6.6 3.5 6.2 7.2z" fill="currentColor"></svg:path>`,
})
export class IonIosImagesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosInfiniteIcon],svg[ion-ios-infinite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M456.8 182.4c-20-19.6-46.8-30.4-75.2-30.4-28.5 0-55.2 10.8-75.2 30.4l-31.2 30c-1.6 1.6-1.6 4.2 0 5.7l19.4 19.1c1.5 1.5 4 1.5 5.6 0l31-30.1c13.5-13.1 31.3-20.3 50.3-20.3 19 0 36.8 7.2 50.3 20.3 13.4 13.1 20.7 30.5 20.7 49 0 18.4-7.4 35.8-20.7 48.7-13.5 13.1-31.3 20.3-50.3 20.3-19 0-36.8-7.2-50.3-20.3L205.6 182.4c-20.2-19.6-46.9-30.4-75.2-30.4-28.5 0-55.2 10.8-75.2 30.4C35.1 202 24 228.1 24 256c0 27.8 11.1 54 31.2 73.6 20 19.6 46.8 30.4 75.2 30.4 28.5 0 55.2-10.8 75.2-30.4l31-30c1.6-1.6 1.6-4.2 0-5.7L217.2 275c-1.5-1.5-4-1.5-5.6 0l-31 29.9c-13.5 13.1-31.3 20.3-50.3 20.3-19 0-36.8-7.2-50.3-20.3-13.4-13.1-20.7-30.5-20.7-49 0-18.4 7.4-35.7 20.7-48.7 13.5-13.1 31.3-20.3 50.3-20.3 19 0 36.8 7.2 50.3 20.3l125.5 122.5c20.2 19.6 46.9 30.4 75.2 30.4 28.5 0 55.2-10.8 75.2-30.4 20.2-19.6 31.3-45.7 31.3-73.6.2-27.9-10.9-54.1-31-73.7z" fill="currentColor"></svg:path>`,
})
export class IonIosInfiniteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosInfiniteOutlineIcon],svg[ion-ios-infinite-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M451.229 188.098C432.682 169.967 407.95 160 381.585 160c-26.363 0-51.095 9.967-69.642 28.098l-42.229 41.187 13.649 13.447 42.229-41.306c14.933-14.529 34.764-22.573 55.878-22.573 21.113 0 40.946 8.044 55.878 22.573 30.797 30.139 30.797 79.13 0 109.148-14.932 14.529-34.765 22.573-55.878 22.573-21.114 0-40.945-8.044-55.878-22.573L200.071 188.098C181.406 169.967 156.675 160 130.427 160c-26.363 0-51.095 9.967-69.643 28.098C41.615 206.809 32.021 231.441 32 256c-.021 24.611 9.573 49.149 28.784 67.902C79.332 342.032 104.063 352 130.427 352c26.365 0 51.095-9.968 69.645-28.098l42.111-41.186-13.647-13.329-42.229 41.187c-14.932 14.529-34.764 22.573-55.879 22.573-21.113 0-40.944-8.044-55.876-22.573-30.799-30.14-30.799-79.13 0-109.148 14.932-14.529 34.763-22.573 55.876-22.573 21.115 0 40.947 8.044 55.879 22.573l125.52 122.477C330.49 342.032 355.222 352 381.47 352c26.363 0 51.095-9.968 69.643-28.098C470.361 305.23 479.985 280.6 480 256c.015-24.601-9.58-49.17-28.771-67.902z" fill="currentColor"></svg:path>`,
})
export class IonIosInfiniteOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosInformationIcon],svg[ion-ios-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M235.4 176c0-11.4 9.3-19.9 20.5-19.9 11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20c-11.2.1-20.5-8.6-20.5-20zm1.4 35.8H275v144.1h-38.2V211.8z" fill="currentColor"></svg:path>`,
})
export class IonIosInformationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosInformationCircleIcon],svg[ion-ios-information-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm19 304h-38.2V207.9H275V352zm-19.1-159.8c-11.3 0-20.5-8.6-20.5-20s9.3-19.9 20.5-19.9c11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20z" fill="currentColor"></svg:path>`,
})
export class IonIosInformationCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosInformationCircleOutlineIcon],svg[ion-ios-information-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M235.4 172.2c0-11.4 9.3-19.9 20.5-19.9 11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20c-11.2 0-20.5-8.6-20.5-20zm1.4 35.7H275V352h-38.2V207.9z" fill="currentColor"></svg:path><svg:path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"></svg:path>`,
})
export class IonIosInformationCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosInformationEmptyIcon],svg[ion-ios-information-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="251.5" cy="172" r="20" fill="currentColor"></svg:circle><svg:path d="M272 344V216h-48v8h16v120h-16v8h64v-8z" fill="currentColor"></svg:path>`,
})
export class IonIosInformationEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosInformationOutlineIcon],svg[ion-ios-information-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="251.5" cy="172" r="20" fill="currentColor"></svg:circle><svg:path d="M272 344V216h-48v8h16v120h-16v8h64v-8z" fill="currentColor"></svg:path><svg:g><svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z" fill="currentColor"></svg:path></svg:g>`,
})
export class IonIosInformationOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosIonicOutlineIcon],svg[ion-ios-ionic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M425.5 134.8c4.7-5.9 7.5-13.5 7.5-21.6 0-19.2-15.6-34.9-34.8-34.9-8.2 0-15.7 2.8-21.6 7.5-34-24.2-75-37.8-119.9-37.8C141.8 48 48 140.5 48 255.6S141.7 464 256.6 464C371.5 464 464 370.7 464 255.6c0-45-14.3-86.7-38.5-120.8zM398 91.3c12.2 0 22 9.9 22 22 0 12.2-9.9 22-22 22-12.2 0-22-9.9-22-22s9.8-22 22-22zm-6.2 300.4c-17.6 17.6-38.2 31.6-61.1 41.3-23.7 10-48.2 15.2-74.2 15.2-25.9 0-51.7-5.1-75.4-15.2-22.9-9.7-43.4-23.5-61.1-41.3-17.6-17.6-31.5-38.3-41.2-61.2-10-23.7-15.1-48.9-15.1-74.9 0-25.9 5.1-51.2 15.1-74.9 9.7-22.9 23.5-43.5 41.2-61.2s38.2-31.6 61.1-41.3c23.7-10 49.4-14.1 75.4-14.1 25.9 0 50.5 4 74.2 14.1 12.7 5.4 24.7 12.1 35.9 20-2.1 4.5-3.3 9.5-3.3 14.9 0 19.2 15.6 34.9 34.8 34.9 5.3 0 10.3-1.2 14.9-3.3 7.9 11.2 14.6 23.2 20 36 10 23.7 15.1 48.9 15.1 74.9 0 25.9-5.1 51.2-15.1 74.9-9.7 22.9-23.5 43.5-41.2 61.2z" fill="currentColor"></svg:path><svg:path d="M256.5 160.1c-53 0-96 42.8-96 95.9s42.9 96.1 96 96.1c53 0 96-43 96-96.1s-43-95.9-96-95.9zm0 175.7c-44.1 0-79.7-35.8-79.7-79.8 0-44.1 35.6-79.6 79.7-79.6s79.7 35.6 79.7 79.6c0 44.1-35.7 79.8-79.7 79.8z" fill="currentColor"></svg:path>`,
})
export class IonIosIonicOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosJetIcon],svg[ion-ios-jet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M464 48s-19.8 1.4-53.1 27.2c-15.5 12-162.2 120.6-162.2 120.6L89 187.9l-41 36.5 102 51.2-8 10.1-81.6 4.1-6.7 33.6 60.6 47.2-26.7 53.6 53.7-26.5 47.3 60.6 33.6-6.7 4.1-81.6 10.1-7.9L287.6 464l36.5-40.9-7.9-159.7s108.6-146.7 120.6-162C462.7 67.8 464 48 464 48z" fill="currentColor"></svg:path>`,
})
export class IonIosJetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosJournalIcon],svg[ion-ios-journal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M92.1 32C76.6 32 64 44.6 64 60.1V452c0 15.5 12.6 28.1 28.1 28.1H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H112.5c-8.2 0-15.4-6-16.4-14.1-1.1-9.7 6.5-18 15.9-18h208V32H92.1z" fill="currentColor"></svg:path><svg:path d="M432 416c8.8 0 16-7.2 16-16V60.1c0-15.5-12.6-28.1-28.1-28.1H368v384h64z" fill="currentColor"></svg:path>`,
})
export class IonIosJournalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosKeyIcon],svg[ion-ios-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M344.8 218.1c-13 0-25.6 0-37.4 4.1-50.6-43.1-184.3-156.9-194.5-167.5-4.7-4.9-9.9-6.7-15-6.7-8.5 0-16.7 5.2-21.3 9.6-6.9 6.6-33 34.8-28 40 15 15.4 19 18.5 25.2 24.8 9.3 9.5 28.3-1 36 2.3 7.6 3.3 9.2 6.8 10.4 12.5s-2.9 15.8-3 23.7c-.1 8.3 3.4 12.8 9.2 19 4.6 5 8.9 8.6 15.6 8.7 9 .2 20.9-12.8 30.4-3.1s-6.2 23.7-5 34 15.5 22.8 21.6 24.1c6.1 1.3 21.8-11.7 30.7-9.7 3 .7 10 6.8 11 11.4s-6.9 25-5.9 29.6c1.2 5.6 7.1 12.1 10.4 17.4-6.7 15.5-9.4 29.6-9.4 47.7 0 68.5 53.4 124 119.2 124s119-55.5 119-124-53.4-121.9-119.2-121.9zM368 400c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" fill="currentColor"></svg:path>`,
})
export class IonIosKeyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosKeypadIcon],svg[ion-ios-keypad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M394.6 341.2c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4z" fill="currentColor"></svg:path><svg:path d="M256 341.2c-29.5 0-53.4 23.9-53.4 53.4S226.5 448 256 448s53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4z" fill="currentColor"></svg:path><svg:path d="M117.4 341.2c-29.5 0-53.4 23.9-53.4 53.4S87.9 448 117.4 448s53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4z" fill="currentColor"></svg:path><svg:path d="M394.6 202.6c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4S448 285.5 448 256s-23.9-53.4-53.4-53.4z" fill="currentColor"></svg:path><svg:path d="M256 202.6c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4z" fill="currentColor"></svg:path><svg:path d="M117.4 202.6C87.9 202.6 64 226.5 64 256s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4z" fill="currentColor"></svg:path><svg:path d="M394.6 64c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4S424.1 64 394.6 64z" fill="currentColor"></svg:path><svg:path d="M256 64c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4S285.5 64 256 64z" fill="currentColor"></svg:path><svg:path d="M117.4 64C87.9 64 64 87.9 64 117.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4S146.9 64 117.4 64z" fill="currentColor"></svg:path>`,
})
export class IonIosKeypadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosKeypadOutlineIcon],svg[ion-ios-keypad-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M394.6 341.2c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zm0 90.8c-20.6 0-37.4-16.8-37.4-37.4 0-20.6 16.8-37.4 37.4-37.4S432 374 432 394.6c0 20.6-16.8 37.4-37.4 37.4z" fill="currentColor"></svg:path><svg:path d="M256 341.2c-29.5 0-53.4 23.9-53.4 53.4S226.5 448 256 448s53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zm0 90.8c-20.6 0-37.4-16.8-37.4-37.4 0-20.6 16.8-37.4 37.4-37.4s37.4 16.8 37.4 37.4c0 20.6-16.8 37.4-37.4 37.4z" fill="currentColor"></svg:path><svg:path d="M117.4 341.2c-29.5 0-53.4 23.9-53.4 53.4S87.9 448 117.4 448s53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zm0 90.8C96.8 432 80 415.2 80 394.6c0-20.6 16.8-37.4 37.4-37.4s37.4 16.8 37.4 37.4c0 20.6-16.7 37.4-37.4 37.4z" fill="currentColor"></svg:path><svg:path d="M394.6 202.6c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4S448 285.5 448 256s-23.9-53.4-53.4-53.4zm0 90.8c-20.6 0-37.4-16.8-37.4-37.4 0-20.6 16.8-37.4 37.4-37.4S432 235.4 432 256c0 20.6-16.8 37.4-37.4 37.4z" fill="currentColor"></svg:path><svg:path d="M256 202.6c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zm0 90.8c-20.6 0-37.4-16.8-37.4-37.4 0-20.6 16.8-37.4 37.4-37.4s37.4 16.8 37.4 37.4c0 20.6-16.8 37.4-37.4 37.4z" fill="currentColor"></svg:path><svg:path d="M117.4 202.6C87.9 202.6 64 226.5 64 256s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zm0 90.8C96.8 293.4 80 276.6 80 256c0-20.6 16.8-37.4 37.4-37.4s37.4 16.8 37.4 37.4c0 20.6-16.7 37.4-37.4 37.4z" fill="currentColor"></svg:path><svg:path d="M394.6 170.8c29.5 0 53.4-23.9 53.4-53.4S424.1 64 394.6 64s-53.4 23.9-53.4 53.4 23.9 53.4 53.4 53.4zm0-90.8c20.6 0 37.4 16.8 37.4 37.4 0 20.6-16.8 37.4-37.4 37.4s-37.4-16.8-37.4-37.4c0-20.6 16.7-37.4 37.4-37.4z" fill="currentColor"></svg:path><svg:path d="M256 64c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4S285.5 64 256 64zm0 90.8c-20.6 0-37.4-16.8-37.4-37.4 0-20.6 16.8-37.4 37.4-37.4s37.4 16.8 37.4 37.4c0 20.6-16.8 37.4-37.4 37.4z" fill="currentColor"></svg:path><svg:path d="M117.4 64C87.9 64 64 87.9 64 117.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4S146.9 64 117.4 64zm0 90.8C96.8 154.8 80 138 80 117.4 80 96.8 96.8 80 117.4 80s37.4 16.8 37.4 37.4c0 20.6-16.7 37.4-37.4 37.4z" fill="currentColor"></svg:path>`,
})
export class IonIosKeypadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosLaptopIcon],svg[ion-ios-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 367.5V129.1c0-9.4-7.9-17.1-17.2-17.1H81.2c-9.3 0-17.2 7.6-17.2 17.1v238.4H15.9c0 9.9 9.9 18.8 18.9 22.7C45.7 394.8 64 400 84 400h344c20 0 38.2-4.5 48.3-8.8 9.5-4 19.8-13.4 19.8-23.7H448zM256 120c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zM82 136.2h348c1.1 0 2 .9 2 2v211.3c0 1.1-.9 2-2 2H82c-1.1 0-2-.9-2-2V138.2c0-1.2.9-2 2-2zm216.3 239.3h-84.6c-5.2 0-9.7-6-9.7-7.5h104c0 1.5-3 7.5-9.7 7.5z" fill="currentColor"></svg:path>`,
})
export class IonIosLaptopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosLeafIcon],svg[ion-ios-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M453.9 378.7c-51.8-8-55.7-11.7-55.7-11.7 15.6-74-22.4-151.1-76.3-195.6C250.1 112.2 141 155.2 56 65.2c-19.8-21-8.3 235.5 98.1 332.7 77.8 71 169.4 49.2 194.5 37.6 22.8-10.6 38.7-33.9 38.7-33.9 41.5 13 62 14.2 62 14.2 14.6 1.8 22-34.4 4.6-37.1zm-91.8 7.4c-77.7-23.3-145.3-81-189.1-126.2-3.6-3.7 1.6-9.2 5.5-6 43.1 35.5 108.9 80 193.3 107.9.2 8.1-4.5 19.7-9.7 24.3z" fill="currentColor"></svg:path>`,
})
export class IonIosLeafIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosLightbulbIcon],svg[ion-ios-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M400 172.9C400 95.1 333.9 32 256 32S112 95.1 112 173c0 31 13.2 59 30.2 83h-.3c10.9 15 21.4 27.7 31.5 45 22 37.8 18.6 74.3 18.7 81.6v1.4h32V256l-32-64h16.6l31.4 64v128h32V256l31.4-64H320l-32 64v128h32v-1.4c0-8.9-3.6-43.8 18.4-81.6 10.1-17.3 20.6-30 31.5-45h-.1c17-24 30.2-52 30.2-83.1z" fill="currentColor"></svg:path><svg:path d="M224 464h64v16h-64z" fill="currentColor"></svg:path><svg:path d="M208 432h96v16h-96z" fill="currentColor"></svg:path><svg:path d="M208 400h96v16h-96z" fill="currentColor"></svg:path>`,
})
export class IonIosLightbulbIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosLightbulbOutlineIcon],svg[ion-ios-lightbulb-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M400 172.9C400 95.1 333.9 32 256 32S112 95.1 112 173c0 31 13.2 59 30.2 83h-.3c10.9 15 21.4 27.7 31.5 45 22 37.8 18.6 74.3 18.7 81.6v1.4h128v-1.4c0-8.9-3.6-43.8 18.4-81.6 10.1-17.3 20.6-30 31.5-45h-.1c16.9-24 30.1-52 30.1-83.1zm-49 81.5c-.6.8-1.1 1.5-1.7 2.3-8.1 10.9-16.5 22.2-24.7 36.1-17.3 29.7-20.4 57.9-20.8 75.1H288V256l32-64h-16.6L272 256v112h-32V256l-31.4-64H192l32 64v112h-15.9c-.5-17.2-3.9-45.7-20.9-75-4.5-7.7-9.1-15-13.7-21h.2l-18.6-25.6c-15.8-21.6-27.1-47.1-27.1-73.6 0-33.4 16-64.8 39.6-88.4s55-36.7 88.4-36.7c33.4 0 64.8 13.1 88.4 36.7 23.6 23.6 39.6 55 39.6 88.4 0 26.5-11.3 51.9-27.1 73.5l-5.9 8.1z" fill="currentColor"></svg:path><svg:path d="M224 464h64v16h-64z" fill="currentColor"></svg:path><svg:path d="M208 432h96v16h-96z" fill="currentColor"></svg:path><svg:path d="M208 400h96v16h-96z" fill="currentColor"></svg:path>`,
})
export class IonIosLightbulbOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosLinkIcon],svg[ion-ios-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z" fill="currentColor"></svg:path><svg:path d="M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z" fill="currentColor"></svg:path>`,
})
export class IonIosLinkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosListIcon],svg[ion-ios-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="92" cy="256" r="28" fill="currentColor"></svg:circle><svg:circle cx="92" cy="132" r="28" fill="currentColor"></svg:circle><svg:circle cx="92" cy="380" r="28" fill="currentColor"></svg:circle><svg:path d="M432 240H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16z" fill="currentColor"></svg:path><svg:path d="M432 364H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16z" fill="currentColor"></svg:path><svg:path d="M191.5 148H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16z" fill="currentColor"></svg:path>`,
})
export class IonIosListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosListBoxIcon],svg[ion-ios-list-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M48 82.7v346.7c0 19.1 15.5 34.7 34.7 34.7h346.7c19.1 0 34.7-15.5 34.7-34.7V82.7c0-19.1-15.5-34.7-34.7-34.7H82.7C63.5 48 48 63.5 48 82.7zm89.3 297.1c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zm0-104c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zm0-104c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zM384.7 374h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-104h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-104h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14z" fill="currentColor"></svg:path>`,
})
export class IonIosListBoxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosListOutlineIcon],svg[ion-ios-list-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M432 80v352H80V80h352m16-16H64v384h384V64z" fill="currentColor"></svg:path><svg:path d="M192 152h192v16H192z" fill="currentColor"></svg:path><svg:path d="M192 248h192v16H192z" fill="currentColor"></svg:path><svg:path d="M192 344h192v16H192z" fill="currentColor"></svg:path><svg:circle cx="144" cy="160" r="16" fill="currentColor"></svg:circle><svg:circle cx="144" cy="256" r="16" fill="currentColor"></svg:circle><svg:circle cx="144" cy="352" r="16" fill="currentColor"></svg:circle>`,
})
export class IonIosListOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosLocateIcon],svg[ion-ios-locate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M395.3 259c-.3-1.2-.4-2.4-.3-3.6 0-.8.2-1.6.3-2.4-.4.9-.6 2-.6 3 .1 1.1.3 2.1.6 3z" fill="currentColor"></svg:path><svg:path d="M459.4 270H409c-6.7 0-12.3-4.7-13.7-11-.3-.9-.5-1.9-.5-3s.2-2.1.6-3c1.4-6.4 7.3-11 14.1-11h49.9c2.4 0 4.2-2 4-4.4-8.8-100.3-88.7-180.2-189-189-2.3-.2-4.4 1.6-4.4 4V103c0 7.9-6.6 14.3-14.6 14-7.6-.3-13.4-6.9-13.4-14.4v-50c0-2.4-2-4.2-4.4-4-100.3 8.8-180.2 88.7-189 189-.2 2.3 1.6 4.4 4 4.4H103c7.9 0 14.3 6.6 14 14.6-.3 7.6-6.9 13.4-14.4 13.4h-50c-2.4 0-4.2 2-4 4.4 8.8 100.3 88.7 180.2 189 189 2.3.2 4.4-1.6 4.4-4V409c0-7.9 6.6-14.3 14.6-14 7.6.3 13.4 6.9 13.4 14.4v49.9c0 2.4 2 4.2 4.4 4 100.3-8.8 180.2-88.7 189-189 .2-2.3-1.7-4.3-4-4.3zM256 326c-38.7 0-70-31.3-70-70s31.3-70 70-70 70 31.3 70 70-31.3 70-70 70z" fill="currentColor"></svg:path>`,
})
export class IonIosLocateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosLocationIcon],svg[ion-ios-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32c-79.529 0-144 64.471-144 144 0 112 144 304 144 304s144-192 144-304c0-79.529-64.471-144-144-144zm0 190.9c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9 46.9 21 46.9 46.9-21 46.9-46.9 46.9z" fill="currentColor"></svg:path>`,
})
export class IonIosLocationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosLocationOutlineIcon],svg[ion-ios-location-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48c34.19 0 66.334 13.314 90.51 37.49S384 141.81 384 176c0 42.92-24.092 107.127-69.67 185.68-22.279 38.396-44.771 71.634-58.332 90.931-13.518-19.232-35.912-52.327-58.161-90.645C152.149 283.281 128 218.976 128 176c0-34.19 13.314-66.334 37.49-90.51S221.81 48 256 48m0-16c-79.529 0-144 64.471-144 144 0 112 144 304 144 304s144-192 144-304c0-79.529-64.471-144-144-144z" fill="currentColor"></svg:path><svg:path d="M256 112c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 110.9c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9 46.9 21 46.9 46.9-21 46.9-46.9 46.9z" fill="currentColor"></svg:path>`,
})
export class IonIosLocationOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosLockIcon],svg[ion-ios-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M376 192h-24v-46.7c0-52.7-42-96.5-94.7-97.3-53.4-.7-97.3 42.8-97.3 96v48h-24c-22 0-40 18-40 40v192c0 22 18 40 40 40h240c22 0 40-18 40-40V232c0-22-18-40-40-40zM270 316.8v68.8c0 7.5-5.8 14-13.3 14.4-8 .4-14.7-6-14.7-14v-69.2c-11.5-5.6-19.1-17.8-17.9-31.7 1.4-15.5 14.1-27.9 29.6-29 18.7-1.3 34.3 13.5 34.3 31.9 0 12.7-7.3 23.6-18 28.8zM324 192H188v-48c0-18.1 7.1-35.1 20-48s29.9-20 48-20 35.1 7.1 48 20 20 29.9 20 48v48z" fill="currentColor"></svg:path>`,
})
export class IonIosLockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosLockedIcon],svg[ion-ios-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M360 224v-72c0-57.43-46.562-104-103.984-104C198.562 48 152 94.57 152 152v72H96v240h320V224h-56zm-96 126.992V384h-16v-33.008c-13.802-3.553-24-16.082-24-30.992 0-17.673 14.327-32 32-32s32 14.327 32 32c0 14.91-10.198 27.439-24 30.992zM344 224H168v-72c0-48.523 39.484-88 88.016-88C304.531 64 344 103.477 344 152v72z" fill="currentColor"></svg:path><svg:path d="M256 304c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" fill="currentColor"></svg:path>`,
})
export class IonIosLockedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosLockedOutlineIcon],svg[ion-ios-locked-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M360 224v-72c0-57.43-46.562-104-103.984-104C198.562 48 152 94.57 152 152v72H96v240h320V224h-56zm-192-72c0-48.523 39.484-88 88.016-88C304.531 64 344 103.477 344 152v72H168v-72zm232 296H112V240h288v208z" fill="currentColor"></svg:path><svg:path d="M256 288c-17.673 0-32 14.327-32 32 0 14.91 10.198 27.439 24 30.992V384h16v-33.008c13.802-3.553 24-16.082 24-30.992 0-17.673-14.327-32-32-32zm0 48c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.178 16-16 16z" fill="currentColor"></svg:path>`,
})
export class IonIosLockedOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosLogInIcon],svg[ion-ios-log-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M417 80H137c-25.4 0-46 20.6-46 46 0 7.7 6.3 14 14 14s14-6.3 14-14c0-9.9 8.1-18 18-18h280c9.9 0 18 8.1 18 18v260c0 9.9-8.1 18-18 18H137c-9.9 0-18-8.1-18-18 0-7.7-6.3-14-14-14s-14 6.3-14 14c0 25.4 20.6 46 46 46h280c25.4 0 46-20.6 46-46V126c0-25.4-20.6-46-46-46z" fill="currentColor"></svg:path><svg:path d="M224 334.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l82.6-82.4c4.3-4.3 6.5-9.3 6.5-14.7 0-5.3-2.3-10.3-6.5-14.5l-84.6-84.4c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-5.5 5.5-5.5 14.3 0 19.8l65.2 64.2H63c-7.7 0-14 6.3-14 14s6.3 14 14 14h224.6L224 334.2z" fill="currentColor"></svg:path>`,
})
export class IonIosLogInIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosLogOutIcon],svg[ion-ios-log-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M312 372c-7.7 0-14 6.3-14 14 0 9.9-8.1 18-18 18H94c-9.9 0-18-8.1-18-18V126c0-9.9 8.1-18 18-18h186c9.9 0 18 8.1 18 18 0 7.7 6.3 14 14 14s14-6.3 14-14c0-25.4-20.6-46-46-46H94c-25.4 0-46 20.6-46 46v260c0 25.4 20.6 46 46 46h186c25.4 0 46-20.6 46-46 0-7.7-6.3-14-14-14z" fill="currentColor"></svg:path><svg:path d="M372.9 158.1c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-5.5 5.5-5.5 14.3 0 19.8l65.2 64.2H162c-7.7 0-14 6.3-14 14s6.3 14 14 14h256.6L355 334.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l82.6-82.4c4.3-4.3 6.5-9.3 6.5-14.7 0-5.3-2.3-10.3-6.5-14.5l-84.5-84.2z" fill="currentColor"></svg:path>`,
})
export class IonIosLogOutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosLoopIcon],svg[ion-ios-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M489.373 256L448 297.373 405.627 256l-10.814 10.813L448 320l52.687-52.687z" fill="currentColor"></svg:path><svg:path d="M459.994 255.509c-.002-.577.013-1.157.007-1.733l-.029-.003C458.771 142.311 367.742 52 256 52c-73.59 0-141.753 39.878-177.888 104.071l13.943 7.848C125.359 104.754 188.18 68 256 68c103.273 0 187.355 83.708 187.985 186.836.038 6.882-.281 13.83-1.017 20.831l15.912 1.674A205.256 205.256 0 0 0 459.991 256H460c0-.164-.006-.327-.006-.491z" fill="currentColor"></svg:path><svg:path d="M419.944 348.081C386.641 407.246 323.82 444 256 444c-103.475 0-187.688-84.032-187.993-187.437-.015-6.686.31-13.434 1.024-20.23l-15.912-1.674A204.972 204.972 0 0 0 52.011 256H52c0 .472.015.939.018 1.41.006.975-.006 1.952.015 2.924l.022-.003C54.369 370.825 144.962 460 256 460c73.59 0 141.753-39.878 177.888-104.071l-13.944-7.848z" fill="currentColor"></svg:path><svg:path d="M64 192l-52.687 52.687L22.627 256 64 214.627 105.373 256l11.314-11.313z" fill="currentColor"></svg:path>`,
})
export class IonIosLoopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosLoopStrongIcon],svg[ion-ios-loop-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48c-75.033 0-144.531 40.658-181.373 106.107l-1.963 3.485 20.915 11.771 1.962-3.485C128.138 107.973 189.621 72 256 72c101.458 0 184 82.542 184 184a185.48 185.48 0 0 1-3.749 37.147l-.803 3.918 23.511 4.819.804-3.919A209.53 209.53 0 0 0 464 256c0-114.691-93.309-208-208-208z" fill="currentColor"></svg:path><svg:path d="M416.459 346.119C383.862 404.027 322.379 440 256 440c-101.458 0-184-82.542-184-184 0-12.512 1.262-25.011 3.75-37.15l.803-3.918-23.511-4.819-.804 3.918A209.445 209.445 0 0 0 48 256c0 114.691 93.309 208 208 208 75.033 0 144.531-40.658 181.373-106.109l1.963-3.485-20.915-11.771-1.962 3.484z" fill="currentColor"></svg:path><svg:path d="M384 256l64 64 64-64z" fill="currentColor"></svg:path><svg:path d="M0 256l64-64 64 64z" fill="currentColor"></svg:path>`,
})
export class IonIosLoopStrongIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMagnetIcon],svg[ion-ios-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M462.2 261.9L289.6 89.3C263 62.7 227.4 48 189.5 48c-38 0-73.5 14.7-100.2 41.3C62.7 116 48 151.5 48 189.5S62.7 263 89.3 289.6l172.6 172.6c1.1 1.1 2.7 1.8 4.3 1.8 1.6 0 3.1-.6 4.3-1.8l57.5-57.5c2.4-2.4 2.4-6.2 0-8.5L165.2 233.3c-13-13-21.2-27.8-22.9-41.7-1.8-13.6 2.7-25.8 13.1-36.3 9.9-9.9 22.4-14.3 36-12.6 14.3 1.7 29.2 9.7 42 22.5L396.2 328c2.4 2.4 6.2 2.4 8.5 0l57.5-57.5c2.4-2.4 2.4-6.2 0-8.6zM275.8 380.2l20.2 20.2-29.8 29.8-20.3-20.2 29.9-29.8zM400.4 296l-20.2-20.2L410 246l20.2 20.2-29.8 29.8z" fill="currentColor"></svg:path>`,
})
export class IonIosMagnetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMailIcon],svg[ion-ios-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z" fill="currentColor"></svg:path><svg:path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z" fill="currentColor"></svg:path>`,
})
export class IonIosMailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMailOpenIcon],svg[ion-ios-mail-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M453.5 209.8c-4-4-158.3-161.4-158.3-161.4C284.8 37.8 270.9 32 256 32c-14.9 0-28.8 5.8-39.2 16.5 0 0-153.6 156.5-158.3 161.4C53.9 214.7 48 224.7 48 236v212c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V235c0-11.7-6.6-21.1-10.5-25.2zm-19.4 42.3L353 336.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-151-161.2c-1.6-1.7-4.3-1.7-5.8 0L102.2 438.2c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L77.7 252c-9.7-9.9-2.4-35.8 16.1-35.8h324.4c16.5-.1 25.6 26.1 15.9 35.9z" fill="currentColor"></svg:path>`,
})
export class IonIosMailOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMailUnreadIcon],svg[ion-ios-mail-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="416" cy="152" r="48" fill="currentColor"></svg:circle><svg:path d="M416 218.5c-5.4 0-10.6-.7-15.6-1.9L353 264.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 305c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 155.3c-1.3-1.3-3.4-.4-3.4 1.4V376c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V198c-12.1 12.6-29.1 20.5-48 20.5z" fill="currentColor"></svg:path><svg:path d="M349.5 152c0-11.6 3-22.5 8.2-32H79.9c-7.5 0-14.4 2.6-19.8 7L217 286.7c10.4 10.6 24.3 16.4 39.1 16.4s28.7-5.8 39.1-16.4l80.5-81.9c-16-12.2-26.2-31.3-26.2-52.8z" fill="currentColor"></svg:path>`,
})
export class IonIosMailUnreadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMaleIcon],svg[ion-ios-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M450.4 48H341.5c-7.5 0-13.6 6.1-13.6 13.6s6.1 13.6 13.6 13.6h75.4L326.7 166c-30.6-26-69.3-40.3-109.6-40.3-22.8 0-45 4.5-65.8 13.3-20.1 8.5-38.2 20.7-53.8 36.2C82 190.8 69.8 208.9 61.3 229 52.5 249.9 48 272 48 294.9s4.5 45 13.3 65.8c8.5 20.1 20.7 38.2 36.2 53.8 15.5 15.5 33.6 27.7 53.8 36.2 20.9 8.8 43 13.3 65.8 13.3 22.8 0 45-4.5 65.8-13.3 20.1-8.5 38.2-20.7 53.8-36.2 15.5-15.5 27.7-33.6 36.2-53.8 8.8-20.9 13.3-43 13.3-65.8 0-40.3-14.3-79-40.3-109.6L436.7 95v75.4c0 7.5 6.1 13.6 13.6 13.6s13.6-6.1 13.6-13.6V61.6c.1-7.5-6-13.6-13.5-13.6zM359 294.9c0 37.9-14.8 73.5-41.6 100.3-26.8 26.8-62.4 41.6-100.3 41.6s-73.5-14.8-100.3-41.6C90 368.4 75.2 332.8 75.2 294.9s14.8-73.5 41.6-100.3c26.8-26.8 62.4-41.6 100.3-41.6s73.5 14.8 100.3 41.6C344.3 221.3 359 257 359 294.9z" fill="currentColor"></svg:path>`,
})
export class IonIosMaleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosManIcon],svg[ion-ios-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M255.7 106.6h-.2c-25 0-45.5-20.3-45.5-45.3 0-25 20.4-45.3 45.5-45.3S301 36.3 301 61.3c0 12.1-4.7 23.5-13.3 32-8.5 8.6-19.9 13.3-32 13.3z" fill="currentColor"></svg:path><svg:path d="M221.2 496c-14.4 0-27-10.5-27-30.4l1-277.6h-10v105c0 9.3-3 15.1-6.4 18.3-4.3 4.1-9.1 6.4-15.2 6.4-6.2 0-10.9-2.3-15.2-6.4-3.4-3.2-6.4-8.9-6.4-18.3V171.4c0-13.8 4.4-27.8 13.8-38.4 10.4-11.6 23.6-18 39-18h122.3c15.4 0 28.6 6.4 39 18.1 9.4 10.6 13.8 24.5 13.8 38.3V293c0 7.3-1.7 13.8-6.6 18.3-4.4 4-9.3 6.2-15.5 6.2s-11.1-2.2-15.5-6.2c-4.9-4.5-6.6-11-6.6-18.3V188h-9v277.6c0 19.7-13.4 30.4-27.8 30.4-13.4 0-26.3-9.3-27.4-29.8V325h-12v140.9c-.7 19.7-13.8 30.1-28.3 30.1z" fill="currentColor"></svg:path>`,
})
export class IonIosManIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMapIcon],svg[ion-ios-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 72.5v316.3c0 2.8 1.3 5.5 3.5 7l69.8 50.2c5.2 3.7 12.1-.3 12.1-7V122.7c0-2.8-1.3-5.5-3.5-7L76.1 65.4c-5.2-3.7-12.1.3-12.1 7.1z" fill="currentColor"></svg:path><svg:path d="M168.7 123.3v316.3c0 6.7 6.9 10.8 12.1 7l62-36.7c2.2-1.6 3.5-4.2 3.5-7V86.6c0-6.7-6.9-10.8-12.1-7l-62 36.7c-2.2 1.5-3.5 4.1-3.5 7z" fill="currentColor"></svg:path><svg:path d="M435.9 65.5l-69.8 50.7c-2.2 1.6-3.5 4.2-3.5 7v316.2c0 6.8 6.9 10.8 12.1 7l69.8-50.7c2.2-1.6 3.5-4.2 3.5-7V72.5c0-6.7-6.9-10.7-12.1-7z" fill="currentColor"></svg:path><svg:path d="M265.7 85.6v316.2c0 2.8 1.3 5.5 3.5 7l62 37c5.2 3.8 12.1-.3 12.1-7V122.6c0-2.8-1.3-5.5-3.5-7l-62-37c-5.2-3.7-12.1.3-12.1 7z" fill="currentColor"></svg:path>`,
})
export class IonIosMapIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMedalIcon],svg[ion-ios-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M50 124c-1.1 0-2 .9-2 2v59.9c0 14.4 9.6 27 23.4 30.8l104 29.4c1.3.4 2.5-.6 2.5-1.9V126c0-1.1-.9-2-2-2H50z" fill="currentColor"></svg:path><svg:path d="M204 126v126.2c0 .9.6 1.7 1.5 1.9l50 13.9c.4.1.7.1 1.1 0l56-15.6c.9-.2 1.5-1 1.5-1.9V126c0-1.1-.9-2-2-2H206c-1.1 0-2 .9-2 2z" fill="currentColor"></svg:path><svg:path d="M334 126v119.2c0 1.3 1.3 2.3 2.6 1.9l104-30.4c13.8-3.9 23.4-16.5 23.4-30.8V126c0-1.1-.9-2-2-2H336c-1.1 0-2 .9-2 2z" fill="currentColor"></svg:path><svg:path d="M48 64v38c0 1.1.9 2 2 2h412c1.1 0 2-.9 2-2V64c0-17.7-14.3-32-32-32H80c-17.7 0-32 14.3-32 32z" fill="currentColor"></svg:path><svg:g><svg:circle cx="256" cy="352" r="56" fill="currentColor"></svg:circle><svg:path d="M351.3 266.6l-51.5 13.8c24 14.8 40.1 41.3 40.1 71.6 0 46.3-37.7 84-84 84s-84-37.7-84-84c0-30.4 16.2-57 40.4-71.8L161 266.1c-20.5 22.7-33 52.8-33 85.9 0 70.7 57.3 128 128 128s128-57.3 128-128c0-32.8-12.4-62.7-32.7-85.4z" fill="currentColor"></svg:path><svg:path d="M256 296c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56z" fill="currentColor"></svg:path></svg:g>`,
})
export class IonIosMedalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMedicalIcon],svg[ion-ios-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M430.3 174.3l-16.5-28.6c-4.3-7.4-13.8-10-21.2-5.7L294 197c-2.7 1.5-6-.4-6-3.5v-114c0-8.6-6.9-15.5-15.5-15.5h-33c-8.6 0-15.5 6.9-15.5 15.5v114.1c0 3.1-3.3 5-6 3.5l-98.6-57c-7.4-4.3-16.9-1.7-21.2 5.7l-16.5 28.6c-4.3 7.4-1.7 16.9 5.7 21.1l98.7 57.1c2.7 1.5 2.7 5.4 0 6.9l-98.7 57.1c-7.4 4.3-9.9 13.7-5.7 21.1l16.5 28.6c4.3 7.4 13.8 10 21.2 5.7l98.6-57c2.7-1.5 6 .4 6 3.5v114.1c0 8.6 6.9 15.5 15.5 15.5h33c8.6 0 15.5-6.9 15.5-15.5V318.4c0-3.1 3.4-5 6-3.5l98.6 57c7.4 4.3 16.9 1.7 21.2-5.7l16.5-28.6c4.3-7.4 1.7-16.9-5.7-21.1l-98.7-57.1c-2.7-1.5-2.7-5.4 0-6.9l98.7-57.1c7.4-4.2 9.9-13.7 5.7-21.1z" fill="currentColor"></svg:path>`,
})
export class IonIosMedicalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMedicalOutlineIcon],svg[ion-ios-medical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M438 187.713l-31.927-55.426L288 200.574V64h-64v136.574l-118.073-68.287-31.938 55.426L192.092 256 73.998 324.287l31.928 55.426L224 311.426V448h64V311.426l118.072 68.287 31.939-55.426L319.908 256 438 187.713zm-21.824 142.412l-15.963 27.866L272 284v148h-32V284l-128.213 74-15.969-27.785 128.228-74.197-128.224-74.157 15.964-27.859L240 228V80h32v148l128.213-74 15.969 27.785-128.228 74.179 128.222 74.161z" fill="currentColor"></svg:path>`,
})
export class IonIosMedicalOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMedkitIcon],svg[ion-ios-medkit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M432 128h-84V96c0-17.6-14.4-32-32-32H196c-17.6 0-32 14.4-32 32v32H80c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32zm-240-28c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v28H192v-28zm128 204h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16z" fill="currentColor"></svg:path>`,
})
export class IonIosMedkitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMedkitOutlineIcon],svg[ion-ios-medkit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M272 208v64h64v32h-64v64h-32v-64h-64v-32h64v-64h32m16-16h-64v64h-64v64h64v64h64v-64h64v-64h-64v-64z" fill="currentColor"></svg:path><svg:path d="M336 128V96c-.5-18.2-13.6-32-32.2-32h-99.1C186.1 64 176 77.7 176 96v32H48v320h416V128H336zM192 98.1c0-10.2 2.9-18.1 13.7-18.1h97.1c10.4 0 17.2 7.7 17.2 18.1V128H192V98.1zM448 432H64V144h384v288z" fill="currentColor"></svg:path>`,
})
export class IonIosMedkitOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMegaphoneIcon],svg[ion-ios-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M90.1 187c0-33.4 17.1-62.8 43.5-78.9 2.8-1.7 1.6-6-1.7-6-38.2 0-68.5 30.4-74.1 69.8-5.6.9-9.9 7.3-9.9 14.9 0 8 4.7 14.3 10.8 14.8 6.7 33.8 33.8 55.4 61.2 64.5 4.3.9 7.1-4.5 3.8-7.5-19.6-17.7-33.6-44.3-33.6-71.6z" fill="currentColor"></svg:path><svg:path d="M450.2 102.8c-1-2.7-2.1-5.2-3.2-7.7-6-13.4-13.4-24.2-21.7-32.2-10.5-9.7-21.4-14.9-34.8-14.9-13.5 0-21.5 5.2-25.8 7.8-43.1 25.9-112.3 46-154 46s-39.4.2-39.4.2c-31.6 14-54.8 46.9-54.8 85 0 34.2 17.8 64.2 44.4 80 12.1 10.1 23.6 8.8 21.1 22.2-2.5 13.4-22.5 97.5-25 115s-2.9 27.5 4 36c7 8.5 49.5 23.8 68 23.8s13.8-8.7 13.8-43.8-9.3-131.7 16.5-131.7c48.3 0 73.5 17.3 111.3 31.7 9 3.4 14.1 4.7 20.1 4.7 6 0 18.7-1.9 34.7-18.2 9.2-9.4 15.7-18.8 21.7-32.2 1.1-2.6 2.2-5.2 3.3-8 8.9-23.2 13.7-51.9 13.7-81.9-.1-29.8-4.9-58.6-13.9-81.8zm-26.6 157c-6.4 15.7-17.6 28.2-26.9 28.2-9.3 0-17.8-12.5-24.2-28.2-7.5-18.3-12.3-45-12.3-74.7 0-29.8 4.8-56.6 12.3-74.9 6.4-15.6 14.9-25 24.1-25 9.3 0 20.3 9.5 26.8 25 7.6 18.3 14.5 45.1 14.5 74.9.1 29.7-6.8 56.4-14.3 74.7z" fill="currentColor"></svg:path>`,
})
export class IonIosMegaphoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMenuIcon],svg[ion-ios-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z" fill="currentColor"></svg:path><svg:path d="M432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z" fill="currentColor"></svg:path><svg:path d="M432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z" fill="currentColor"></svg:path>`,
})
export class IonIosMenuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMicIcon],svg[ion-ios-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 336c35.2 0 64-28.8 64-64V112c0-35.2-28.8-64-64-64s-64 28.8-64 64v160c0 35.2 28.8 64 64 64z" fill="currentColor"></svg:path><svg:path d="M352 192c-7.7 0-14 6.3-14 14v69c0 45.2-36.8 82-82 82s-82-36.8-82-82v-69c0-7.7-6.3-14-14-14s-14 6.3-14 14v69c0 55.9 41.9 102.2 96 109.1V436h-36c-7.7 0-14 6.3-14 14s6.3 14 14 14h100c7.7 0 14-6.3 14-14s-6.3-14-14-14h-36v-51.9c54.1-6.9 96-53.2 96-109.1v-69c0-7.7-6.3-14-14-14z" fill="currentColor"></svg:path>`,
})
export class IonIosMicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMicOffIcon],svg[ion-ios-mic-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M369.8 464c-4.9 0-9.7-2.5-12.3-7L129.9 69.3c-4-6.7-1.7-15.4 5.1-19.3 6.8-3.9 15.5-1.7 19.5 5.1l227.6 387.7c4 6.7 1.7 15.4-5.1 19.3-2.3 1.3-4.8 1.9-7.2 1.9z" fill="currentColor"></svg:path><svg:path d="M320 272V112c0-35.2-28.8-64-64-64-28.4 0-52.6 18.8-60.9 44.5L315 296.8c3.2-7.6 5-16 5-24.8z" fill="currentColor"></svg:path><svg:path d="M192 272c0 35.2 28.8 64 64 64 3.9 0 7.6-.4 11.3-1L192 206.6V272z" fill="currentColor"></svg:path><svg:path d="M366 275v-69c0-7.7-6.3-14-14-14s-14 6.3-14 14v69c0 15.2-4.2 29.4-11.4 41.6l15.6 26.6c14.9-18.7 23.8-42.4 23.8-68.2z" fill="currentColor"></svg:path><svg:path d="M256 357c-45.2 0-82-36.8-82-82v-69c0-7.7-6.3-14-14-14s-14 6.3-14 14v69c0 55.9 41.9 102.2 96 109.1V436h-36c-7.7 0-14 6.3-14 14s6.3 14 14 14h100c7.7 0 14-6.3 14-14s-6.3-14-14-14h-36v-51.9c7.9-1 15.6-2.9 22.9-5.5l-14.5-24.8c-7.1 2.1-14.6 3.2-22.4 3.2z" fill="currentColor"></svg:path>`,
})
export class IonIosMicOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMicOutlineIcon],svg[ion-ios-mic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32c-43.7 0-79 37.5-79 83.5V270c0 46 35.3 83.5 79 83.5s79-37.5 79-83.5V115.5c0-46-35.3-83.5-79-83.5zm63 238c0 37.2-28.3 67.5-63 67.5s-63-30.3-63-67.5V115.5c0-37.2 28.3-67.5 63-67.5s63 30.3 63 67.5V270z" fill="currentColor"></svg:path><svg:path d="M367 192v79.7c0 60.2-49.8 109.2-110 109.2s-110-49-110-109.2V192h-19v79.7c0 67.2 53 122.6 120 127.5V462h-73v18h161v-18h-69v-62.8c66-4.9 117-60.3 117-127.5V192h-17z" fill="currentColor"></svg:path>`,
})
export class IonIosMicOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMicrophoneIcon],svg[ion-ios-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M315 204h72.6c6.6 0 12.3-5.2 12.4-11.8.1-6.7-5.3-12.2-12-12.2h-73c-6.7 0-12.1-5.5-12-12.2.1-6.6 5.8-11.8 12.4-11.8h76.5c4.5 0 8.2-3.7 8-8.2-1.7-47.5-31.2-88.1-72.7-106-5.3-2.3-11.2 1.6-11.2 7.3v35.5c0 6.6-5.2 12.3-11.8 12.4-6.7.1-12.2-5.3-12.2-12V44c0-6.6-5.4-12-12-12s-12 5.4-12 12v56.6c0 6.6-5.2 12.3-11.8 12.4-6.7.1-12.2-5.3-12.2-12V44c0-6.6-5.4-12-12-12s-12 5.4-12 12v40.6c0 6.6-5.2 12.3-11.8 12.4-6.7.1-12.2-5.3-12.2-12V49.1c0-5.8-5.9-9.6-11.2-7.3-41.5 17.9-71.1 58.6-72.7 106-.2 4.5 3.5 8.2 8 8.2h76.5c6.6 0 12.3 5.2 12.4 11.8.1 6.7-5.3 12.2-12 12.2h-72.6c-6.6 0-12.3 5.2-12.4 11.8-.1 6.7 5.3 12.2 12 12.2h72.6c6.6 0 12.3 5.2 12.4 11.8.1 6.7-5.3 12.2-12 12.2h-72.6c-6.6 0-12.3 5.2-12.4 11.8-.1 6.7 5.3 12.2 12 12.2h72.6c6.6 0 12.3 5.2 12.4 11.8.1 6.7-5.3 12.2-12 12.2h-76.9c-4.5 0-8.2 3.7-8 8.2.5 13.6 3.3 26.7 7.9 38.8 1.2 3.1 4.2 5 7.4 5h257.1c3.3 0 6.3-2 7.4-5 4.7-12.1 7.5-25.2 7.9-38.8.2-4.5-3.5-8.2-8-8.2h-76.5c-6.6 0-12.3-5.2-12.4-11.8-.1-6.7 5.3-12.2 12-12.2h72.6c6.6 0 12.3-5.2 12.4-11.8.1-6.7-5.3-12.2-12-12.2h-72.6c-6.6 0-12.3-5.2-12.4-11.8 0-6.7 5.4-12.2 12.1-12.2z" fill="currentColor"></svg:path><svg:path d="M141.5 358.6c19 22 45.2 37.2 75.4 40.8 4 .5 7.1 3.9 7.1 7.9V448c0 17.7 14.3 32 32 32s32-14.3 32-32v-40.7c0-4.1 3.1-7.5 7.1-7.9 30.3-3.5 56.4-18.7 75.4-40.8 2.2-2.6.3-6.6-3.1-6.6H144.5c-3.4 0-5.2 4-3 6.6z" fill="currentColor"></svg:path>`,
})
export class IonIosMicrophoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMinusIcon],svg[ion-ios-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm128 217H128v-17h256v17z" fill="currentColor"></svg:path>`,
})
export class IonIosMinusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMinusEmptyIcon],svg[ion-ios-minus-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M384 265H128v-17h256v17z" fill="currentColor"></svg:path>`,
})
export class IonIosMinusEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMinusOutlineIcon],svg[ion-ios-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z" fill="currentColor"></svg:path><svg:path d="M128 248h256v17H128z" fill="currentColor"></svg:path>`,
})
export class IonIosMinusOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMonitorIcon],svg[ion-ios-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M496 384V96H16v288h175v16h-64v16h257v-16h-64v-16h176zM32 112h448v256H32V112z" fill="currentColor"></svg:path><svg:path d="M48 128h416v224H48z" fill="currentColor"></svg:path>`,
})
export class IonIosMonitorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMonitorOutlineIcon],svg[ion-ios-monitor-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M496 384V96H16v288h175v16h-64v16h257v-16h-64v-16h176zM32 112h448v256H32V112z" fill="currentColor"></svg:path>`,
})
export class IonIosMonitorOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMoonIcon],svg[ion-ios-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M401.4 354.2c-2.9.1-5.8.2-8.7.2-47.9 0-93-18.9-126.8-53.4-33.9-34.4-52.5-80.1-52.5-128.8 0-27.7 6.1-54.5 17.5-78.7 3.1-6.6 9.3-16.6 13.6-23.4 1.9-2.9-.5-6.7-3.9-6.1-6 .9-15.2 2.9-27.7 6.8C135.1 95.5 80 168.7 80 255c0 106.6 85.1 193 190.1 193 58 0 110-26.4 144.9-68.1 6-7.2 11.5-13.8 16.4-21.8 1.8-3-.7-6.7-4.1-6.1-8.5 1.7-17.1 1.8-25.9 2.2z" fill="currentColor"></svg:path>`,
})
export class IonIosMoonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMoonOutlineIcon],svg[ion-ios-moon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M343.1 315c-1.8.1-3.5.1-5.3.1-29.1 0-56.5-11.3-77.1-31.9-20.6-20.6-31.9-48-31.9-77.1 0-16.6 3.7-32.6 10.6-47.1 3.1-6.4 6.8-12.5 11.1-18.2-7.6.8-14.9 2.4-22 4.6-46.8 14.8-80.7 58.5-80.7 110.2 0 63.8 51.7 115.5 115.5 115.5 35.3 0 66.8-15.8 88-40.7 4.8-5.7 9.2-11.9 12.8-18.5-6.8 1.7-13.8 2.8-21 3.1zm-79.8 40.1c-54.9 0-99.5-44.6-99.5-99.5 0-39.1 22.6-72.9 55.4-89.2-4.2 12.5-6.4 25.8-6.4 39.7 0 65.9 51 119.9 115.6 124.7-17.4 15.2-40.2 24.3-65.1 24.3z" fill="currentColor"></svg:path>`,
})
export class IonIosMoonOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMoreIcon],svg[ion-ios-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M255.8 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z" fill="currentColor"></svg:path><svg:path d="M102 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z" fill="currentColor"></svg:path><svg:path d="M410 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z" fill="currentColor"></svg:path>`,
})
export class IonIosMoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMoreOutlineIcon],svg[ion-ios-more-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 238c9.9 0 18 8.1 18 18s-8.1 18-18 18-18-8.1-18-18 8.1-18 18-18m0-14c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" fill="currentColor"></svg:path><svg:path d="M128.4 238c9.9 0 18 8.1 18 18s-8.1 18-18 18-18-8.1-18-18 8.1-18 18-18m0-14c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.4-32-32-32z" fill="currentColor"></svg:path><svg:path d="M384 238c9.9 0 18 8.1 18 18s-8.1 18-18 18-18-8.1-18-18 8.1-18 18-18m0-14c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" fill="currentColor"></svg:path>`,
})
export class IonIosMoreOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMoveIcon],svg[ion-ios-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M475.9 246.2l-79.4-79.4c-5.4-5.4-14.2-5.4-19.6 0l-.2.2c-5.4 5.4-5.4 14.2 0 19.6l54.9 54.9-161.8.5.5-161.8 54.9 54.9c5.4 5.4 14.2 5.4 19.6 0l.2-.2c5.4-5.4 5.4-14.2 0-19.6l-79.4-79.4c-5.4-5.4-14.2-5.4-19.6 0l-79.4 79.4c-5.4 5.4-5.4 14.2 0 19.6l.2.2c5.4 5.4 14.2 5.4 19.6 0l54.9-54.9.5 161.8-161.8-.5 54.9-54.9c5.4-5.4 5.4-14.2 0-19.6l-.2-.2c-5.4-5.4-14.2-5.4-19.6 0l-79.4 79.4c-5.4 5.4-5.4 14.2 0 19.6l79.4 79.4c5.4 5.4 14.2 5.4 19.6 0l.2-.2c5.4-5.4 5.4-14.2 0-19.6L80 270.5l161.8-.5-.5 161.8-54.9-54.9c-5.4-5.4-14.2-5.4-19.6 0l-.2.2c-5.4 5.4-5.4 14.2 0 19.6l79.4 79.4c5.4 5.4 14.2 5.4 19.6 0l79.4-79.4c5.4-5.4 5.4-14.2 0-19.6l-.2-.2c-5.4-5.4-14.2-5.4-19.6 0l-54.9 54.9-.5-161.8 161.8.5-54.9 54.9c-5.4 5.4-5.4 14.2 0 19.6l.2.2c5.4 5.4 14.2 5.4 19.6 0l79.4-79.4c5.5-5.4 5.5-14.2 0-19.6z" fill="currentColor"></svg:path>`,
})
export class IonIosMoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMusicalNoteIcon],svg[ion-ios-musical-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M364.3 48.2c-4.7.9-118 24.1-122.2 24.9-4.2.8-8.1 3.6-8.1 8v255.1c0 1.6-.1 7.2-2.4 11.7-3.1 5.9-8.5 10.2-16.1 12.7-3.3 1.1-7.8 2.1-13.1 3.3-24.1 5.4-64.4 14.6-64.4 51.8 0 30.1 21.7 44.5 35 47.1 5 1 11 1 13.8 1 8.2 0 36-3.3 51.2-13.2 11-7.2 24.1-21.4 24.1-47.8V173.1c0-3.8 2.7-7.1 6.4-7.8l92.8-19c7.4-1.5 12.8-8.1 12.8-15.7V55.8c-.1-4.3-3.8-8.8-9.8-7.6z" fill="currentColor"></svg:path>`,
})
export class IonIosMusicalNoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosMusicalNotesIcon],svg[ion-ios-musical-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M406.3 48.2c-4.7.9-202 39.2-206.2 40-4.2.8-8.1 3.6-8.1 8v240.1c0 1.6-.1 7.2-2.4 11.7-3.1 5.9-8.5 10.2-16.1 12.7-3.3 1.1-7.8 2.1-13.1 3.3-24.1 5.4-64.4 14.6-64.4 51.8 0 31.1 22.4 45.1 41.7 47.5 2.1.3 4.5.7 7.1.7 6.7 0 36-3.3 51.2-13.2 11-7.2 24.1-21.4 24.1-47.8V190.5c0-3.8 2.7-7.1 6.4-7.8l152-30.7c5-1 9.6 2.8 9.6 7.8v130.9c0 4.1-.2 8.9-2.5 13.4-3.1 5.9-8.5 10.2-16.2 12.7-3.3 1.1-8.8 2.1-14.1 3.3-24.1 5.4-64.4 14.5-64.4 51.7 0 33.7 25.4 47.2 41.8 48.3 6.5.4 11.2.3 19.4-.9s23.5-5.5 36.5-13c17.9-10.3 27.5-26.8 27.5-48.2V55.9c-.1-4.4-3.8-8.9-9.8-7.7z" fill="currentColor"></svg:path>`,
})
export class IonIosMusicalNotesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosNavigateIcon],svg[ion-ios-navigate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 336V256H128.3L352 160l-96 224z" fill="currentColor"></svg:path>`,
})
export class IonIosNavigateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosNavigateOutlineIcon],svg[ion-ios-navigate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 64.5c51.1 0 99.2 19.9 135.4 56.1s56.1 84.2 56.1 135.4-19.9 99.2-56.1 135.4-84.2 56.1-135.4 56.1-99.2-19.9-135.4-56.1C84.5 355.2 64.5 307.1 64.5 256s19.9-99.2 56.1-135.4c36.2-36.1 84.3-56.1 135.4-56.1m0-16.5C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"></svg:path><svg:path d="M352 160l-223.7 96H256v128z" fill="currentColor"></svg:path>`,
})
export class IonIosNavigateOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosNotificationsIcon],svg[ion-ios-notifications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M255.9 456c31.1 0 48.1-22 48.1-53h-96.3c0 31 17 53 48.2 53z" fill="currentColor"></svg:path><svg:path d="M412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-130.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.4-11-24.7-24.4-24.6-13.4-.2-24.4 11.2-24.4 24.6v2.9c0 3.7-2.6 5-6.2 5.9-38.5 9.1-79.6 46.5-79.6 139.8 0 90.9-30.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h280.1c16.3 0 25.7-18.8 15.8-31.8z" fill="currentColor"></svg:path>`,
})
export class IonIosNotificationsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosNotificationsOffIcon],svg[ion-ios-notifications-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M255.9 456c31.1 0 48.1-22 48.1-53h-96.3c0 31 17 53 48.2 53z" fill="currentColor"></svg:path><svg:path d="M154.5 55c-2.5-4.3-7-6.8-11.6-7h.3-1.2c-2.3 0-4.7.7-6.9 1.9-6.8 3.9-9.1 12.6-5.1 19.3L357.5 457c2.6 4.5 7.4 7 12.3 7 2.4 0 4.9-.6 7.2-1.9 6.8-3.9 9.1-12.6 5.1-19.3L154.5 55z" fill="currentColor"></svg:path><svg:path d="M296.1 384L159 150.5c-8.2 20.2-13.3 46-13.3 78.6 0 90.9-30.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h180.2z" fill="currentColor"></svg:path><svg:path d="M412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-130.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.4-11-24.7-24.4-24.6-13.4-.2-24.4 11.2-24.4 24.6v2.9c0 3.7-2.6 5-6.2 5.9-8.7 2-17.5 5.5-25.9 10.8L366.1 384H396c16.5 0 25.9-18.8 16-31.8z" fill="currentColor"></svg:path>`,
})
export class IonIosNotificationsOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosNotificationsOutlineIcon],svg[ion-ios-notifications-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M289.7 403c-6.1 0-11.4 4.2-12.7 10.2-1 4.5-2.7 8.2-5 10.9-1.3 1.5-5.1 5.9-16.1 5.9-11 0-14.8-4.5-16.1-5.9-2.3-2.7-4-6.4-5-10.9-1.3-6-6.6-10.2-12.7-10.2-8.4 0-14.5 7.8-12.7 15.9 5 22.3 21 37.1 46.5 37.1s41.5-14.7 46.5-37.1c1.8-8.1-4.4-15.9-12.7-15.9z" fill="currentColor"></svg:path><svg:path d="M412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-130.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.3-10.8-24.6-24-24.6h-.6c-13.2 0-24 11.3-24 24.6v2.9c0 3.7-2.6 5-6.2 5.9-38.5 9.1-79.6 46.5-79.6 139.8 0 90.9-30.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h280.1c16.1 0 25.4-18.8 15.6-31.8zm-39 5.8H139.8c-3.8 0-5.8-4.4-3.3-7.3 7-8 14.7-18.5 21-33.4 9.6-22.6 14.3-51.5 14.3-88.2 0-37.3 7-66.5 20.9-86.8 12.4-18.2 27.9-25.1 38.7-27.6 8.4-2 14.4-5.8 18.6-10.5 3.2-3.6 8.7-3.8 11.9-.2 5.1 5.7 12 9.1 18.8 10.7 10.8 2.5 26.3 9.4 38.7 27.6 13.9 20.3 20.9 49.5 20.9 86.8 0 36.7 4.7 65.6 14.3 88.2 6.5 15.2 14.4 25.9 21.5 33.9 2.2 2.7.4 6.8-3.1 6.8z" fill="currentColor"></svg:path>`,
})
export class IonIosNotificationsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosNuclearIcon],svg[ion-ios-nuclear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-88.5 364.8l49.2-85.8c1.1-1.9.5-4.2-1.3-5.4-20.2-12.9-34-35-35.2-60.3-.1-2.1-1.8-3.8-4-3.8H76V256c0-48.1 18.7-93.3 52.7-127.3 10.8-10.8 22.7-20 35.4-27.6l50.5 87.9c1.1 1.9 3.5 2.5 5.4 1.5 10.7-5.8 22.9-9 35.9-9 12.5 0 24.4 3.1 34.8 8.5 1.9 1 4.2.3 5.3-1.5l51.1-87.7c13 7.7 25.1 17 36.1 28 34 34 52.7 79.2 52.7 127.3v1.5h-100c-2.1 0-3.9 1.7-4 3.8-1.3 25.4-15 47.5-35.2 60.3-1.8 1.2-2.4 3.5-1.3 5.4l49.2 85.8c-26.7 15.1-57 23.2-88.5 23.2-31.6-.1-61.9-8.2-88.6-23.3z" fill="currentColor"></svg:path><svg:circle cx="256" cy="256" r="56" fill="currentColor"></svg:circle>`,
})
export class IonIosNuclearIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosNutritionIcon],svg[ion-ios-nutrition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M359.1 231.9h-.1c-.1-.1-.3-.4-.4-.6l-78.9-79.6c-5.8-6-14.2-10.2-23.6-10.2-11.8 0-22.2 6.2-27.7 16.3 0 0-3.4 5.1-12.6 19.8-1.6 2.6-1.6 6 .1 8.6l26.8 41.2c2.9 3.8 3.3 8 1.4 9.9l-.1.1c-2.3 2.3-5.9 1.5-9.8-1.4l-32.3-20.5c-3.8-2.4-8.7-1.2-11.1 2.5-21.9 35.1-46.8 74.7-71.2 114-1.6 2.5-1.6 5.7-.1 8.3l14.1 24.1c2.9 3.8 3.3 8 1.4 9.9l-.1.1c-2.3 2.3-5.9 1.5-9.8-1.4l-16.6-8.4c-3.7-1.9-8.2-.6-10.4 2.9-17.7 28.3-28 44.7-29.1 46.5-3 5.1-5 11.2-5 17.8 0 17.8 14.2 32.2 31.9 32.2 7.8 0 14.4-3.4 20.6-7.6L221 378.8c3.4-2.5 4.2-7.2 2-10.7L202.5 336c-2.9-3.8-3.3-8-1.4-9.9l.1-.1c2.3-2.3 5.9-1.5 9.8 1.4l37.4 25.6c2.8 1.9 6.5 1.9 9.3-.2 53-39.1 97.5-72.2 97.5-72.2 7.9-6 13-15.4 13-26 0-8.7-3.1-16.8-9.1-22.7z" fill="currentColor"></svg:path><svg:path d="M446.9 131.2l-11.2-17.9c-2.2-3.8-7.1-5.1-10.9-2.9L365.4 147l47.3-78.9c2.2-3.8.9-8.8-2.9-11l-17.7-8c-3.9-2.3-8.8-.9-11 3l-57.6 108.3 28.6 28.8 91.8-46.8c3.9-2.2 5.3-7.2 3-11.2z" fill="currentColor"></svg:path>`,
})
export class IonIosNutritionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosNutritionOutlineIcon],svg[ion-ios-nutrition-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M358 233.855l.413-.039c-.137-.137-.046-.101-.185-.237L279.798 155h-.004c-5.833-6-14.193-10.154-23.485-10.154-11.811 0-22.115 6.154-27.635 16.154h-.007s-7.09 10.994-18.27 28.874l32.531 39.637c2.939 3.769 3.296 7.801 1.411 9.689l-.114.071c-.909.909-2.021 1.33-3.274 1.33-1.908 0-4.142-.99-6.485-2.768l-35.872-29.418c-23.546 37.655-56.677 90.634-83.45 133.451l19.072 23.337c2.939 3.77 3.296 7.884 1.41 9.772l-.114.114c-.911.913-2.028 1.342-3.287 1.342-1.905 0-4.136-.981-6.472-2.755l-21.067-16.533C84.734 389.051 70 412.464 68 414.366v.003c-3 5.062-4.085 11.132-4.085 17.664C63.915 449.688 78.572 464 96.2 464c7.821 0 14.57-3.395 20.799-7.5l114.651-84.109-28.838-35.358c-2.94-3.769-3.268-7.887-1.382-9.775l.128-.114c.912-.912 2.034-1.341 3.294-1.341 1.905 0 4.14.981 6.476 2.755l37.864 31.59A20509.475 20509.475 0 0 1 355.082 283h.005c7.839-6 12.473-15.711 12.473-26.238 0-8.704-3.56-17.14-9.56-22.904v-.003zm-12.469 35.979a31571.957 31571.957 0 0 0-95.764 69.899l-28.272-23.483-.26-.223-.274-.211c-5.245-3.981-10.663-5.998-16.108-5.998-5.465 0-10.592 2.097-14.458 5.909l-.064.062-.083.082-.083.083c-7.808 7.821-7.761 20.823.111 30.917l.11.143.113.138 18.223 22.312-100.656 73.896c-5.066 3.304-8.427 4.657-11.542 4.657-8.822 0-16-7.171-16-15.983 0-3.086.694-6.045 2.017-8.623 2.391-3.161 6.6-9.876 18.655-29.351 2.543-4.108 5.252-8.487 8.134-13.129l6.39 5.176.195.156.2.152c5.245 3.981 10.665 6 16.111 6 5.517 0 10.692-2.139 14.571-6.023l.114-.113c7.806-7.817 7.756-20.82-.118-30.916l-.113-.144-.115-.142-11.814-14.455 43.693-69.872 24.059-38.474 21.855 17.922.231.19.24.181c5.254 3.988 10.678 6.01 16.123 6.01 4.954 0 9.631-1.725 13.339-4.89l.461-.337.871-.874c7.79-7.803 7.74-20.778-.118-30.854l-.12-.153-.124-.15-25.239-30.539c2.957-4.703 5.457-8.491 7.405-11.488l5.209-8.494c2.777-5.025 7.761-8.157 13.673-8.157 4.367 0 8.76 2.042 12.057 5.43l4.701 4.928h.122L342 240.286v.376l5.186 4.716c2.793 2.69 4.539 6.782 4.539 11.227 0 5.196-2.258 10.123-6.194 13.229z" fill="currentColor"></svg:path><svg:path d="M439.994 115.175l-4.778 2.763-91.638 52.992 63.735-110.572 2.517-4.366L396.011 48l-2.488 4.313-70.775 122.785 16.67 16.696 103.962-60.12 4.594-2.656z" fill="currentColor"></svg:path>`,
})
export class IonIosNutritionOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosOpenIcon],svg[ion-ios-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M227.8 300.2c-5.1-5.1-5.1-13.3 0-18.4l133.7-133.7c-5.3-2.6-11.2-4.1-17.5-4.1H88c-22 0-40 18-40 40v224c0 22 18 40 40 40h256c22 0 40-18 40-40V184c0-6.3-1.5-12.2-4.1-17.5L246.2 300.2c-5.1 5.1-13.3 5.1-18.4 0z" fill="currentColor"></svg:path><svg:path d="M459.5 68.5C457 66 453 64 449 64h-97c-7.2-.1-13.1 5.7-13.1 12.9-.1 7.2 5.7 13.1 12.9 13.1l67.3.5-57.6 57.6c8 3.9 14.5 10.4 18.4 18.4l57.6-57.6.5 67.3c.1 7.2 5.9 13 13.1 12.9 7.2-.1 13-5.9 12.9-13.1V78c0-3.5-2-7-4.5-9.5z" fill="currentColor"></svg:path>`,
})
export class IonIosOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosOptionsIcon],svg[ion-ios-options-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M299.3 376c6.2-14.1 20.3-24 36.7-24s30.5 9.9 36.7 24H448c8.8 0 16 7.2 16 16s-7.2 16-16 16h-75.3c-6.2 14.1-20.3 24-36.7 24s-30.5-9.9-36.7-24H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h235.3z" fill="currentColor"></svg:path><svg:path d="M139.3 240c6.2-14.1 20.3-24 36.7-24s30.5 9.9 36.7 24H448c8.8 0 16 7.2 16 16s-7.2 16-16 16H212.7c-6.2 14.1-20.3 24-36.7 24s-30.5-9.9-36.7-24H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h75.3z" fill="currentColor"></svg:path><svg:path d="M299.3 104c6.2-14.1 20.3-24 36.7-24s30.5 9.9 36.7 24H448c8.8 0 16 7.2 16 16s-7.2 16-16 16h-75.3c-6.2 14.1-20.3 24-36.7 24s-30.5-9.9-36.7-24H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h235.3z" fill="currentColor"></svg:path>`,
})
export class IonIosOptionsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosOutletIcon],svg[ion-ios-outlet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M359 78H153c-2.8 0-5.6.8-8 2.3C86.7 116.9 48 182 48 256c0 73.9 38.7 138.1 97 175.6 2.4 1.6 5.2 2.4 8.1 2.4h205.8c2.9 0 5.7-.8 8.1-2.4 58.3-37.5 97-101.7 97-175.6 0-74-38.7-139.1-97-175.7-2.4-1.5-5.2-2.3-8-2.3zM192.9 270.8h-22.3c-2.1 0-3.7-1.7-3.7-3.7V155.9c0-2 1.7-3.7 3.7-3.7h22.3c2.1 0 3.7 1.7 3.7 3.7v111.2c0 2.1-1.7 3.7-3.7 3.7zM282 389.5h-52c-2.1 0-3.7-1.7-3.7-3.7v-40.2c0-16.5 13.6-30.5 30.1-30.3 16.2.2 29.3 13.5 29.3 29.7v40.8c0 2-1.6 3.7-3.7 3.7zM341.4 256h-22.3c-2.1 0-3.7-1.7-3.7-3.7v-81.6c0-2 1.7-3.7 3.7-3.7h22.3c2.1 0 3.7 1.7 3.7 3.7v81.6c0 2-1.6 3.7-3.7 3.7z" fill="currentColor"></svg:path>`,
})
export class IonIosOutletIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPaperIcon],svg[ion-ios-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M124 80v322c0 7.7-6.3 14-14 14s-14-6.3-14-14V112H80c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h353.1c17 0 30.9-13.8 30.9-30.9V80c0-17.7-14.3-32-32-32l-278 2c-17.7 0-30 12.3-30 30zm66 32h84c7.7 0 14 6.3 14 14s-6.3 14-14 14h-84c-7.7 0-14-6.3-14-14s6.3-14 14-14zm0 160h148c7.7 0 14 6.3 14 14s-6.3 14-14 14H190c-7.7 0-14-6.3-14-14s6.3-14 14-14zm196 108H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-160H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14z" fill="currentColor"></svg:path>`,
})
export class IonIosPaperIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPaperOutlineIcon],svg[ion-ios-paper-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M112 64v336h16V80h304v337.143c0 8.205-6.652 14.857-14.857 14.857H94.857C86.652 432 80 425.348 80 417.143V128h16v-16H64v305.143C64 434.157 77.843 448 94.857 448h322.285C434.157 448 448 434.157 448 417.143V64H112z" fill="currentColor"></svg:path><svg:path d="M160 112h128v16H160z" fill="currentColor"></svg:path><svg:path d="M160 192h240v16H160z" fill="currentColor"></svg:path><svg:path d="M160 272h192v16H160z" fill="currentColor"></svg:path><svg:path d="M160 352h240v16H160z" fill="currentColor"></svg:path>`,
})
export class IonIosPaperOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPaperPlaneIcon],svg[ion-ios-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M452.1 49L52.3 265.3c-6 3.3-5.6 12.1.6 14.9l68.2 25.7c4 1.5 7.2 4.5 9 8.4l53 109.1c1 4.8 9.9 6.1 10 1.2l-8.1-90.2c.5-6.7 3-13 7.3-18.2l207.3-203.1c1.2-1.2 2.9-1.6 4.5-1.3 3.4.8 4.8 4.9 2.6 7.6L228 338c-4 6-6 11-7 18l-10.7 77.9c.9 6.8 6.2 9.4 10.5 3.3l38.5-45.2c2.6-3.7 7.7-4.5 11.3-1.9l99.2 72.3c4.7 3.5 11.4.9 12.6-4.9L463.8 58c1.5-6.8-5.6-12.3-11.7-9z" fill="currentColor"></svg:path>`,
})
export class IonIosPaperPlaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPaperplaneIcon],svg[ion-ios-paperplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 249.6l106 46.7L416 96z" fill="currentColor"></svg:path><svg:path d="M416 96L217.9 311.7 269.8 416z" fill="currentColor"></svg:path>`,
})
export class IonIosPaperplaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPaperplaneOutlineIcon],svg[ion-ios-paperplane-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 249.6l116.6 51.3L269.8 416 416 96 96 249.6zm132.1 46.9l155.7-166.2-114.6 248.9-41.1-82.7zm153.7-168.2l-165 157.1L134 249l247.8-120.7z" fill="currentColor"></svg:path>`,
})
export class IonIosPaperplaneOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPartlySunnyIcon],svg[ion-ios-partly-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M168.2 64h-.3c-8.7 0-15.8 7.1-15.8 15.8v30.3c0 8.7 7.1 15.8 15.8 15.8h.3c8.7 0 15.8-7.1 15.8-15.8V79.8c0-8.7-7.1-15.8-15.8-15.8z" fill="currentColor"></svg:path><svg:path d="M79 216.2v-.3c0-8.7-7.1-15.8-15.8-15.8H31.8c-8.7 0-15.8 7.1-15.8 15.8v.3c0 8.7 7.1 15.8 15.8 15.8h31.3c8.8 0 15.9-7.1 15.9-15.8z" fill="currentColor"></svg:path><svg:path d="M79.7 149c3 3 7 4.7 11.2 4.7 4.2 0 8.2-1.7 11.2-4.7 6.1-6.2 6.1-16.2 0-22.3l-20.3-20.5c-3-3-7-4.7-11.2-4.7-4.2 0-8.2 1.7-11.2 4.7-6.1 6.2-6.1 16.2 0 22.3L79.7 149z" fill="currentColor"></svg:path><svg:path d="M271 105.2c-3-3-7-4.7-11.2-4.7-4.2 0-8.2 1.7-11.2 4.7l-20.3 20.4c-6.1 6.2-6.1 16.2 0 22.3l.3.3h.1c2.9 2.8 6.8 4.3 10.8 4.3 4.2 0 8.2-1.7 11.2-4.7l20.3-20.4c6.1-6 6.1-16 0-22.2z" fill="currentColor"></svg:path><svg:path d="M92.9 273.3c-4.2 0-8.2 1.7-11.2 4.7l-20.3 20.5c-6.1 6.2-6.1 16.2 0 22.3 3 3 7 4.7 11.2 4.7 4.2 0 8.2-1.7 11.2-4.7l20.3-20.5c6.1-6.2 6.1-16.2 0-22.3-3-3-7-4.7-11.2-4.7z" fill="currentColor"></svg:path><svg:path d="M403.3 259.2h-2.4c-3.1 0-6.1 0-9 .4-11.3-50.3-56.1-88.2-109.7-88.2-14.6 0-28.6 2.8-41.4 7.9-5.1 2-10 4.4-14.7 7.1-32 18.5-54.1 52.4-56.2 91.6-.1 2.1-.2 4.1-.2 6.2 0 3.4.2 6.8.5 10.1 0 .4.1.8.1 1.1-37.9 3.4-67.6 37.1-67.6 76 0 41.1 33.3 76.7 74.3 76.7h226.4c51.2 0 92.7-43.4 92.7-94.8-.1-51.4-41.6-94.1-92.8-94.1z" fill="currentColor"></svg:path><svg:path d="M150.7 283.6v-.3c-.3-3.4-.5-6.8-.5-10.2 0-2.1.1-4.2.2-6.3 2.2-39.9 24.6-74.3 57.2-93.1 4.8-2.8 9.8-5.2 14.9-7.2h.1c-13.4-17-34.2-28-57.6-28-40.5 0-73.3 32.8-73.3 73.3 0 35.5 25.3 65.1 59 71.8z" fill="currentColor"></svg:path>`,
})
export class IonIosPartlySunnyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPartlysunnyIcon],svg[ion-ios-partlysunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M208 96h16v54h-16z" fill="currentColor"></svg:path><svg:path d="M64 240h55v16H64z" fill="currentColor"></svg:path><svg:path d="M107.5 149.1l11-11.1 31.4 31.6-11 11.1z" fill="currentColor"></svg:path><svg:path d="M287.4 179.7l-11-11.1 31.3-31.6 11.1 11.1z" fill="currentColor"></svg:path><svg:path d="M120.5 352.5l-11-11.1 31.4-31.6 11 11.1z" fill="currentColor"></svg:path><svg:path d="M299 224c-43.3 0-78.3 35.2-78.3 78.5 0 2.6.1 5.2.4 7.8-26.4 2.3-47.1 25.5-47.1 52.6 0 28.6 23.2 53.1 51.7 53.1h157.7c35.7 0 64.6-29.9 64.6-65.7 0-35.8-28.9-65.3-64.6-65.3-2.7 0-5.4 0-8 .3-7.9-35-39.1-61.3-76.4-61.3z" fill="currentColor"></svg:path><svg:path d="M264.7 196.3c-12.9-14.3-31.4-23.3-52-23.3-38.7 0-70.3 31.7-70.3 70.7 0 27.4 15.6 51.2 38.3 62.9v-.1l.1.1c4.5-12.1 11.4-19.8 22.6-25.6.2-.1.4-.2.7-.4.2-.1.5-.2.7-.3-.2-2.3-.3-4.7-.3-7-.3-31.9 30.2-70.5 61-75.4.1-.1.3-.1.4-.2-.4-.4-.8-.9-1.2-1.4z" fill="currentColor"></svg:path>`,
})
export class IonIosPartlysunnyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPartlysunnyOutlineIcon],svg[ion-ios-partlysunny-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M208 96h16v54h-16z" fill="currentColor"></svg:path><svg:path d="M64 240h55v16H64z" fill="currentColor"></svg:path><svg:path d="M107.5 149.1l11-11.1 31.4 31.6-11 11.1z" fill="currentColor"></svg:path><svg:path d="M287.4 179.7l-11-11.1 31.3-31.6 11.1 11.1z" fill="currentColor"></svg:path><svg:path d="M120.5 352.5l-11-11.1 31.4-31.6 11 11.1z" fill="currentColor"></svg:path><svg:g><svg:path d="M192.6 294.9c-20.2-8.1-34.6-27.9-34.6-51.1 0-30.3 24.5-55 54.7-55 15.6 0 29.7 6.6 39.6 17.2 4.8-3.5 9.5-6.2 13.6-8.2-12.9-15.1-32-24.7-53.3-24.7-38.7 0-70.3 31.7-70.3 70.7 0 27.4 15.6 51.2 38.3 62.9 3.7-5.2 7.9-9 12-11.8z" fill="currentColor"></svg:path></svg:g><svg:path d="M299 239.8c14.5 0 28.1 4.8 39.3 13.9 10.9 8.9 18.6 21.3 21.7 34.9l3.1 14 14.2-1.8c2.1-.3 4.1-.4 6.1-.4 26.9 0 48.8 22.1 48.8 49.2s-21.9 49.2-48.8 49.2H225.7c-9.5 0-18.5-3.9-25.4-10.8-6.8-7-10.6-16.2-10.6-25.9 0-18.6 14.5-33.8 33.2-36.9 1.6-.3 8.8-1.2 14.2-1.7 0 0-.5-5.3-.6-9.6-.1-4.3-.1-9.4-.1-11.5.1-34.4 28.1-62.6 62.6-62.6m0-15.8c-43.3 0-78.3 35.2-78.3 78.5 0 2.6.1 5.2.4 7.8-26.4 2.3-47.1 25.5-47.1 52.6 0 28.6 23.2 53.1 51.7 53.1h157.7c35.7 0 64.6-29.9 64.6-65.7 0-35.8-28.9-65.3-64.6-65.3-2.7 0-5.4 0-8 .3-7.9-35-39.1-61.3-76.4-61.3z" fill="currentColor"></svg:path>`,
})
export class IonIosPartlysunnyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPauseIcon],svg[ion-ios-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M199.9 416h-63.8c-4.5 0-8.1-3.6-8.1-8V104c0-4.4 3.6-8 8.1-8h63.8c4.5 0 8.1 3.6 8.1 8v304c0 4.4-3.6 8-8.1 8z" fill="currentColor"></svg:path><svg:path d="M375.9 416h-63.8c-4.5 0-8.1-3.6-8.1-8V104c0-4.4 3.6-8 8.1-8h63.8c4.5 0 8.1 3.6 8.1 8v304c0 4.4-3.6 8-8.1 8z" fill="currentColor"></svg:path>`,
})
export class IonIosPauseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPauseOutlineIcon],svg[ion-ios-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M191 112v288h-47V112h47m16-16h-79v320h79V96z" fill="currentColor"></svg:path><svg:path d="M368 112v288h-47V112h47m16-16h-79v320h79V96z" fill="currentColor"></svg:path>`,
})
export class IonIosPauseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPawIcon],svg[ion-ios-paw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M324.3 80.3c-1.2-.2-2.4-.3-3.6-.3v.4-.3h-.4c-22 0-42.9 25.9-47.8 60.3-5.3 36.6 9.4 69 32.7 72.4 1.3.2 2.7.3 4 .3 22 0 42.9-25.9 47.8-60.3 5.3-36.7-9.4-69.1-32.7-72.5z" fill="currentColor"></svg:path><svg:path d="M320.6 80z" fill="currentColor"></svg:path><svg:path d="M442.3 169.4c-3.5-1.4-7.1-2.1-10.9-2.1h-.4c-19.7.3-41.8 19.2-53.4 47.8-13.9 34.2-7.5 69.2 14.4 78.2 3.5 1.4 7.1 2.1 10.9 2.1 19.8 0 42.2-19 53.9-47.8 13.8-34.2 7.3-69.2-14.5-78.2z" fill="currentColor"></svg:path><svg:path d="M327.6 295.4c-27.8-43.6-39.8-60-71.6-60s-43.9 16.5-71.7 60c-23.8 37.2-71.9 40.3-83.9 71.9-2.4 5.6-3.6 11.7-3.6 18.2 0 25.7 20.8 46.5 46.4 46.5 31.8 0 75.1-24 112.9-24s80.9 24 112.7 24c25.6 0 46.3-20.8 46.3-46.5 0-6.5-1.3-12.6-3.7-18.2-12-31.7-60-34.7-83.8-71.9z" fill="currentColor"></svg:path><svg:path d="M202.8 213c1.3 0 2.7-.1 4-.3 23.4-3.4 38-35.8 32.7-72.4-5-34.5-25.9-60.3-47.8-60.3-1.3 0-2.7.1-4 .3-23.4 3.4-38 35.8-32.7 72.4 5 34.4 25.9 60.3 47.8 60.3z" fill="currentColor"></svg:path><svg:path d="M120.1 293.3c21.9-9 28.3-44 14.4-78.2-11.7-28.8-34.1-47.8-53.9-47.8-3.8 0-7.4.7-10.9 2.1-21.9 9-28.3 44-14.4 78.2 11.7 28.8 34.1 47.8 53.9 47.8 3.8 0 7.4-.7 10.9-2.1z" fill="currentColor"></svg:path>`,
})
export class IonIosPawIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPawOutlineIcon],svg[ion-ios-paw-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M443.827 195.5c-4.383-11.73-11.753-20.212-21.317-24.524-4.389-1.975-8.995-2.976-13.688-2.976-20.025 0-40.372 18.667-50.632 46.454-12.698 34.42-5.315 68.135 17.173 78.423 4.522 2.071 9.365 3.123 14.394 3.123 20.396 0 41.126-17.119 51.581-42.596 7.9-19.283 8.83-40.927 2.489-57.904zm-17.613 50.795c-7.836 18.898-22.994 32.098-36.862 32.098-2.809 0-5.488-.569-7.968-1.694-14.121-6.394-17.862-31.059-8.518-56.152 7.775-20.817 22.448-35.355 35.683-35.355 2.51 0 4.979.533 7.34 1.588 6.88 3.067 10.622 9.712 12.551 14.745 4.91 12.807 4.078 29.543-2.226 44.77z" fill="currentColor"></svg:path><svg:path d="M153.811 214.454C143.551 186.667 123.204 168 103.179 168c-4.693 0-9.3 1.001-13.689 2.976-9.565 4.312-16.934 12.794-21.317 24.524-6.341 16.977-5.411 38.621 2.49 57.904C81.118 278.881 101.848 296 122.244 296c5.028 0 9.871-1.052 14.394-3.123 22.488-10.288 29.871-44.003 17.173-78.423zm-23.195 62.244c-2.479 1.125-5.16 1.694-7.968 1.694-13.868 0-29.026-13.199-36.862-32.098-6.304-15.227-7.136-31.963-2.226-44.771 1.929-5.033 5.671-11.678 12.551-14.745 2.361-1.055 4.83-1.588 7.34-1.588 13.234 0 27.907 14.538 35.683 35.355 9.345 25.095 5.603 49.76-8.518 56.153z" fill="currentColor"></svg:path><svg:path d="M198.347 210.601c1.855.081 3.727.03 5.563-.151 10.787-1.059 20.54-6.594 28.207-16.008 12.371-15.191 15.806-38.974 13.201-63.439C241.336 93.3 221.469 65.161 194.776 64c0 0-3.811.008-5.75.193-11.776 1.164-22.481 7.283-30.957 17.695-12.291 15.101-18.198 37.57-15.803 60.104 3.936 37.277 28.57 67.412 56.081 68.609zm-27.3-118.77c3.923-4.739 10.51-10.577 19.62-11.476a24.165 24.165 0 0 1 3.404-.098c18.207.792 31.859 23.271 34.936 52.428 2.146 20.15-.148 40.055-9.845 51.779-4.874 5.898-10.556 9.204-16.881 9.825a23.302 23.302 0 0 1-3.229.087c-19.257-.838-37.414-25.091-40.473-54.067-1.968-18.53 2.694-36.653 12.468-48.478z" fill="currentColor"></svg:path><svg:path d="M256 240c-64 0-128 76.074-128 149.128 0 21.798 10.932 39.331 21.667 46.517C162.925 444.516 172.269 448 191.704 448c23.093 0 29.325-8.078 40.136-15.205 7.819-5.152 14.572-9.605 24.161-9.605s16.342 4.453 24.16 9.605C290.972 439.922 297.203 448 320.297 448c19.434 0 28.778-3.484 42.036-12.355C373.068 428.459 384 410.926 384 389.128 384 316.074 320 240 256 240zm97.963 180.776c-10.964 7.337-17.366 9.778-33.666 9.778-14.225 0-18.624-3.201-25.911-8.51-1.848-1.344-3.759-2.736-5.946-4.177-8.619-5.682-18.39-12.123-32.439-12.123s-23.82 6.441-32.438 12.121c-2.189 1.442-4.1 2.835-5.947 4.179-7.287 5.309-11.686 8.51-25.911 8.51-16.3 0-22.703-2.441-33.667-9.778C152.395 417 144 405.456 144 389.128c0-30.277 13.377-64.231 35.783-90.823 10.886-12.921 23.517-23.6 36.526-30.885C229.713 259.917 243.067 256 256 256c12.934 0 26.287 3.917 39.691 11.42 13.01 7.285 25.64 17.964 36.525 30.885C354.623 324.896 368 358.851 368 389.128c0 16.328-8.395 27.872-14.037 31.648z" fill="currentColor"></svg:path><svg:path d="M308.281 210.265c1.836.182 3.709.232 5.563.151 27.511-1.196 52.146-31.332 56.081-68.607 2.395-22.534-3.514-45.004-15.804-60.104-8.476-10.412-18.783-16.228-30.56-17.392-1.939-.186-6.146-.312-6.146-.312-26.693 1.161-46.561 29.115-50.542 66.817-2.604 24.466.83 48.248 13.2 63.439 7.668 9.414 17.421 14.949 28.208 16.008zm-25.095-77.764c3.076-29.156 16.729-51.636 34.936-52.428a24.02 24.02 0 0 1 3.404.098c9.109.898 15.696 6.736 19.619 11.476 9.774 11.825 14.436 29.948 12.468 48.479-3.06 28.977-21.216 53.229-40.474 54.067a23.314 23.314 0 0 1-3.229-.087c-6.324-.621-12.007-3.927-16.881-9.825-9.695-11.725-11.99-31.63-9.843-51.78z" fill="currentColor"></svg:path>`,
})
export class IonIosPawOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPeopleIcon],svg[ion-ios-people-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M349.1 334.7c-11.2-4-29.5-4.2-37.6-7.3-5.6-2.2-14.5-4.6-17.4-8.1-2.9-3.5-2.9-28.5-2.9-28.5s7-6.6 9.9-14c2.9-7.3 4.8-27.5 4.8-27.5s6.6 2.8 9.2-10.4c2.2-11.4 6.4-17.4 5.3-25.8-1.2-8.4-5.8-6.4-5.8-6.4s5.8-8.5 5.8-37.4c0-29.8-22.5-59.1-64.6-59.1-42 0-64.7 29.4-64.7 59.1 0 28.9 5.7 37.4 5.7 37.4s-4.7-2-5.8 6.4c-1.2 8.4 3 14.4 5.3 25.8 2.6 13.3 9.2 10.4 9.2 10.4s1.9 20.1 4.8 27.5c2.9 7.4 9.9 14 9.9 14s0 25-2.9 28.5-11.8 5.9-17.4 8c-8 3.1-26.3 3.5-37.6 7.5-11.2 4-45.8 22.2-45.8 67.2h278.3c.1-45.1-34.5-63.3-45.7-67.3z" fill="currentColor"></svg:path><svg:path d="M140 286s23.9-.8 33.4-9.3c-15.5-23.5-7.1-50.9-10.3-76.5-3.2-25.5-17.7-40.8-46.7-40.8h-.4c-28 0-43.1 15.2-46.3 40.8-3.2 25.5 5.7 56-10.2 76.5C69 285.3 93 285 93 285s1 14.4-1 16.8c-2 2.4-7.9 4.7-12 5.5-8.8 1.9-18.1 4.5-25.9 7.2-7.8 2.7-22.6 17.2-22.6 37.2h80.3c2.2-8 17.3-22.3 32-29.8 9-4.6 17.9-4.3 24.7-5.2 0 0 3.8-6-8.7-8.3 0 0-17.2-4.3-19.2-6.7-1.9-2.2-.6-15.7-.6-15.7z" fill="currentColor"></svg:path><svg:path d="M372 286s-23.9-.8-33.4-9.3c15.5-23.5 7.1-50.9 10.3-76.5 3.2-25.5 17.7-40.8 46.7-40.8h.4c28 0 43.1 15.2 46.3 40.8 3.2 25.5-5.7 56 10.2 76.5-9.5 8.6-33.5 8.3-33.5 8.3s-1 14.4 1 16.8c2 2.4 7.9 4.7 12 5.5 8.8 1.9 18.1 4.5 25.9 7.2 7.8 2.7 22.6 17.2 22.6 37.2h-80.3c-2.2-8-17.3-22.3-32-29.8-9-4.6-17.9-4.3-24.7-5.2 0 0-3.8-6 8.7-8.3 0 0 17.2-4.3 19.2-6.7 1.9-2.2.6-15.7.6-15.7z" fill="currentColor"></svg:path>`,
})
export class IonIosPeopleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPeopleOutlineIcon],svg[ion-ios-people-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 112z" fill="currentColor"></svg:path><svg:path d="M349.2 334.8c-13.5-4.7-28.1-5-41.6-9.7-4.1-1.4-12.2-3.1-13.9-7.8-1.6-4.6-1.6-10-1.9-14.8-.2-3.8-.3-7.6-.3-11.4 0-2.5 6.4-7.8 7.8-10.1 5.4-9 5.9-21.1 6.9-31.3 8.7 2.4 9.8-13.7 11.3-18.6 1.1-3.4 7.8-26.8-2.6-23.6 2.5-4.4 3.5-9.8 4.2-14.7 2-12.8 2.8-26.8-1.1-39.3-8.1-26-33-40.6-59.3-41.4-26.7-.9-53.5 11.9-63.5 37.8-4.8 12.6-4.4 26.3-2.8 39.5.7 6 1.7 12.7 4.7 18.1-9.7-2.9-4.5 17.7-3.4 21.3 1.6 5.1 3 23.4 12.1 20.9.8 8.1 1.7 16.4 3.9 24.3 1.5 5.3 4.6 9.8 8.2 13.9 1.8 2 2.7 2.2 2.6 4.8-.1 7.8.1 16.2-1.9 23.8-2 7.6-18.7 10.8-25.4 12.2-18 3.7-34.6 5.4-49.6 16.6-17.5 12.9-26.6 33-26.6 54.7h278c0-29.5-17.8-55.5-45.8-65.2-11.2-3.9 11.3 3.9 0 0zm-202.1 28.8c5.6-5.9 12.7-11.1 20.4-14 10.5-4 22.4-3.8 33.3-6.6 9-2.3 20.2-5.9 27.2-12.4 6.4-6 7.1-15.2 7.7-23.5.5-7 .4-13.9.4-20.9 0-4.9-5.7-7.7-8.5-11.6-4.5-6.1-4.7-15.2-5.6-22.5-.4-3.2-.5-7.3-3.2-9.5-3-2.4-5.2-3.7-6.7-7.5-2-5.2-2.7-10.8-4.3-16.2-1-3.5 2.5-6.8 3.9-9.7 2.6-5.3-1.9-13.5-2.8-19-2.8-16.4-2.7-34.3 9.1-47.3 23.7-26.2 78-17.9 85.8 18.9 2.4 11.5.9 24.9-2.3 36.1-1.4 4.8-3 8.3-.2 13 4.2 6.8 2.4 11.2.4 18.8-1.6 6.3-3.6 9.1-8.4 13-4 3.2-3.4 11.2-4.1 15.8-.8 5.6-1.3 11.5-4.7 16.2-1.3 1.8-8.4 7.4-8.4 9.3 0 11-.5 22.2 1.4 33.1 2.6 15.5 15.6 19.2 28.6 24.5 13.2 5.1 28.5 3.2 41.3 9.5 13.2 6.5 25.9 18.4 29.7 33.1H135c1.9-8.3 6.5-14.6 12.1-20.6 9.2-9.7-5.9 6.3 0 0z" fill="currentColor"></svg:path><svg:path d="M144.1 322c7-3.5 14.6-4.3 22.3-5.1 2.8-.3 4.1-2.2 2-4.9-4-5.1-17.8-6.1-23.6-8.4-3.6-1.4-4.6-2.7-4.9-6.7-.1-1.8-1.1-9.8.3-11.1 1-1 7.3-.6 8.7-.8 5.7-.7 11.5-1.9 16.9-4 2.3-.9 4.5-2 6.5-3.4 2.4-1.8-1.8-6.2-2.9-8.6-3.4-7.5-4.9-15.7-5.4-23.9-1-16.1 1.5-32.3-1.5-48.3C158 172.3 139.1 160 115 160c-14.9 0-29.6 5.1-37.9 18.1-9.2 14.3-8.7 32.1-8.2 48.4.3 9.3.7 18.7-.6 28-.6 4-1.5 7.9-2.9 11.7-1.1 2.9-6.7 10.1-4.5 11.6 8.3 5.9 22.3 7.9 32.3 7.1.3 4.9 1.2 11.2-.6 15.8-2.8 7.2-23.7 9.1-30 11.2C45 317.8 32 332.5 32 352h79.5c1.3 0 6.3-9.3 7.7-10.8 7-7.8 15.6-14.5 24.9-19.2 9-4.5-14.6 7.4 0 0zm-41.3 14H53.9c7.1-11.8 24.9-11 36.6-15.2 10.8-3.9 17.7-10.5 18.8-22 .1-1.3.2-29.2-.9-29.2-8.7-.3-17.8-.1-26.5-1.4 6.9-22.3.3-45.3 4-67.8 2.7-16.3 13.1-25.3 29.7-25.3 15.9 0 27.7 7.4 31.1 23.4 4.8 23.2-2 46.9 5.4 69.9-5.5 1.4-11.3 1.6-17 1.8-2.8.1-5.7.2-8.5.3-1.8.1-1.2 3.2-1.3 4.7-1 10.9-5 28.1 3.7 36.9-9.6 6-20 14.3-26.2 23.9z" fill="currentColor"></svg:path><svg:path d="M399.8 352H480c0-19.5-13.1-34.3-30.7-40.1-8.1-2.6-23.7-3.4-29.5-10.4-2.9-3.5-1.3-12.4-1-16.6 4.4.4 9.2-.3 13.7-.9 4.1-.6 8.1-1.4 12-2.8 1.8-.7 3.6-1.4 5.3-2.4 3.9-2.3 2.1-2.7.1-6.1-10.9-18.3-6-41.5-6.5-61.6-.4-16.7-4.8-35-20-44.4-13.7-8.5-34-8.8-48.7-2.8-42.4 17-17.4 73.2-31.9 105.4-2.5 5.4-6.1 7.3.2 10.5 3.5 1.8 7.3 3 11.1 3.9 5.8 1.4 11.8 2.2 17.8 2.4 1 0 .3 12.6 0 13.9-1.1 4.9-11.8 6.3-15.8 7.4-4.1 1.1-10.9 1.4-12.9 5.7-3 6.4 9.9 4.8 13.1 5.4 10.3 1.9 19.4 7.6 27.4 14.1 5.9 4.8 13.9 11.6 16.1 19.4zm-.4-27.1c-5.1-4.7-10.4-9.3-16.3-13 8.8-8.8 4.7-25.9 3.7-36.9-.6-6.3-2-4.7-8.3-4.9-6-.2-12.8.1-18.5-1.8 7.2-22.3 1.3-45.2 5-67.9 2.8-17.1 14.5-25.5 31.5-25.5 15.4 0 26 7.7 29.2 23 4.9 23.1-2.6 47 4.5 70-8.5 1.3-17.3 1-25.9 1.3-2.1.1-1.9 25.1-1.7 27.3.7 11.7 6.1 18.8 17.2 23.3 12.1 4.9 31 3.6 38.4 15.9h-44.7c-7.1.1-8.9-6.1-14.1-10.8-5-4.6 4 3.6 0 0z" fill="currentColor"></svg:path>`,
})
export class IonIosPeopleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPersonIcon],svg[ion-ios-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M447.8 438.3c-7.2-31.8-48.3-47.3-62.5-52.3-15.6-5.5-37.8-6.8-52.1-10-8.2-1.8-20.1-6.3-24.1-11.1s-1.6-49.3-1.6-49.3 7.4-11.5 11.4-21.7c4-10.1 8.4-37.9 8.4-37.9s8.2 0 11.1-14.4c3.1-15.7 8-21.8 7.4-33.5-.6-11.5-6.9-11.2-6.9-11.2s6.1-16.7 6.8-51.3c.9-41.1-31.3-81.6-89.6-81.6-59.1 0-90.6 40.5-89.7 81.6.8 34.6 6.7 51.3 6.7 51.3s-6.3-.3-6.9 11.2c-.6 11.7 4.3 17.8 7.4 33.5 2.8 14.4 11.1 14.4 11.1 14.4s4.4 27.8 8.4 37.9c4 10.2 11.4 21.7 11.4 21.7s2.4 44.5-1.6 49.3c-4 4.8-15.9 9.3-24.1 11.1-14.3 3.2-36.5 4.5-52.1 10-14.2 5-55.3 20.5-62.5 52.3-1.1 5 2.7 9.7 7.9 9.7H440c5.1 0 8.9-4.7 7.8-9.7z" fill="currentColor"></svg:path>`,
})
export class IonIosPersonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPersonAddIcon],svg[ion-ios-person-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M385.3 386c-15.6-5.5-37.8-6.8-52.1-10-8.2-1.8-20.1-6.3-24.1-11.1-3.5-4.2-2.1-38.4-1.7-47.2.1-1.3.5-2.6 1.1-3.8 2.2-3.6 7.2-12.2 10.3-20 3-7.6 6.2-25 7.6-33.3.4-2.4 1.9-4.5 4-5.6 2.6-1.5 6.1-4.9 7.8-13.4 3.1-15.7 8-21.8 7.4-33.5-.3-5.2-1.7-8-3.2-9.5-2-1.9-2.7-4.8-2-7.4 1.9-7.6 4.7-22.6 5.2-45.6.9-41.1-31.3-81.6-89.5-81.6-59.1 0-90.5 40.5-89.6 81.6.5 23 3.3 38 5.1 45.6.6 2.7-.1 5.5-2 7.4-1.5 1.5-3 4.3-3.2 9.5-.6 11.7 4.3 17.8 7.4 33.5 1.7 8.4 5.2 11.9 7.8 13.4 2.1 1.2 3.6 3.2 4 5.6 1.4 8.3 4.6 25.7 7.6 33.3 3.1 7.8 8.2 16.5 10.3 20 .7 1.1 1.1 2.4 1.1 3.8.4 8.8 1.8 43.1-1.7 47.2-4 4.8-15.9 9.3-24.1 11.1-14.3 3.2-36.5 4.5-52.1 10-14.2 5-55.3 20.5-62.5 52.3-1.1 5 2.7 9.7 7.9 9.7H440c5.1 0 8.9-4.7 7.8-9.7-7.2-31.8-48.3-47.3-62.5-52.3z" fill="currentColor"></svg:path><svg:path d="M437.5 293.5h-27v-27c0-5.8-4.7-10.5-10.5-10.5s-10.5 4.7-10.5 10.5v27h-27c-5.8 0-10.5 4.7-10.5 10.5s4.7 10.5 10.5 10.5h27v27c0 5.8 4.7 10.5 10.5 10.5s10.5-4.7 10.5-10.5v-27h27c5.8 0 10.5-4.7 10.5-10.5s-4.7-10.5-10.5-10.5z" fill="currentColor"></svg:path>`,
})
export class IonIosPersonAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPersonOutlineIcon],svg[ion-ios-person-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M202.4 201.7z" fill="currentColor"></svg:path><svg:path d="M363.3 363.9c-12.9-4.6-31.4-6.2-43.2-8.8-6.8-1.5-16.7-5.3-20-9.2-3.3-4-1.3-40.9-1.3-40.9s6.1-9.6 9.4-18 6.9-31.4 6.9-31.4 6.8 0 9.2-11.9c2.6-13 6.6-18.4 6.1-28.1-.5-9-5.2-9.5-5.7-9.5 0 0 4.9-13.6 5.6-42.4C331.1 129.6 305 96 256 96s-75 33.5-74.3 67.6c.6 28.7 5.6 42.4 5.6 42.4-.5 0-5.2.5-5.7 9.5-.5 9.7 3.6 14.9 6.1 27.9 2.4 11.9 9.2 12 9.2 12s3.6 23.1 6.9 31.5c3.3 8.5 9.4 18 9.4 18s2 36.9-1.3 40.9-13.2 7.7-20 9.2c-11.9 2.6-30.3 4.3-43.2 8.9C135.8 368.5 96 384 96 416h320c0-32-39.8-47.5-52.7-52.1zM256 400H118.7c2-3 4.7-5.1 8.2-7.6 7-5.1 16.1-9.8 27.1-13.6 6.8-2.4 16.7-4 25.4-5.3 5.7-.9 11.1-1.7 15.9-2.8 3.4-.8 20.8-5 28.8-14.6 4.5-5.4 5.8-12.7 5.6-32.3-.1-10-.6-19.3-.6-19.7l-.2-4.2-2.3-3.5c-1.5-2.3-5.8-9.5-8-15.3-1.8-4.7-4.6-19.2-6-28.1 0 0 .4 1-.5-3.7s-8.4-4.3-9.4-8c-.9-3.6-1.8-6.9-4.3-18.2-2.5-11.3 2.8-11.2 3.9-16.2.6-3.1 0-5.7 0-5.8-.3-1-4.1-13.4-4.7-37.7-.3-13.2 4.6-25.6 13.8-34.9 10.6-10.8 26-16.5 44.5-16.5 19 0 34 5.7 44.6 16.5 9.2 9.3 14.1 21.7 13.8 34.9-.5 24.2-4.3 36.6-4.7 37.7 0 .1-.6 1.7-.4 5.2.2 5.4 6.8 5.5 4.3 16.8s-3.4 14.6-4.3 18.2c-.9 3.6-8.5 3.3-9.4 8-.9 4.7-.5 3.7-.5 3.7-1.4 8.9-4.2 23.4-6 28.1-2.3 5.8-6.6 13-8 15.3l-2.3 3.5-.2 4.2c0 .4-.5 9.7-.6 19.7-.2 19.6 1.1 26.9 5.6 32.3 8 9.5 25.4 13.8 28.8 14.6 4.8 1.1 10.2 1.9 15.9 2.8 8.7 1.3 18.6 2.9 25.4 5.3 11 3.9 20.2 8.6 27.1 13.7 3.5 2.5 6.2 4.6 8.2 7.6L256 400z" fill="currentColor"></svg:path>`,
})
export class IonIosPersonOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPersonaddIcon],svg[ion-ios-personadd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 153h-25v-25h-14v25h-25v14h25v25h14v-25h25z" fill="currentColor"></svg:path><svg:path d="M363.3 363.9c-12.9-4.6-31.4-6.2-43.2-8.8-6.8-1.5-16.7-5.3-20-9.2-3.3-4-1.3-40.9-1.3-40.9s6.1-9.6 9.4-18c3.3-8.4 6.9-31.4 6.9-31.4s6.8 0 9.2-11.9c2.6-13 6.6-18.4 6.1-28.1-.5-9-5.2-9.5-5.7-9.5s4.9-13.6 5.6-42.4C331.1 129.6 305 96 256 96s-75 33.5-74.3 67.6c.6 28.7 5.6 42.4 5.6 42.4-.5 0-5.2.5-5.7 9.5-.5 9.7 3.6 14.9 6.1 27.9 2.4 11.9 9.2 12 9.2 12s3.6 23.1 6.9 31.5c3.3 8.5 9.4 18 9.4 18s2 36.9-1.3 40.9-13.2 7.7-20 9.2c-11.9 2.6-30.3 4.3-43.2 8.9C135.8 368.5 96 384 96 416h320c0-32-39.8-47.5-52.7-52.1z" fill="currentColor"></svg:path>`,
})
export class IonIosPersonaddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPersonaddOutlineIcon],svg[ion-ios-personadd-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 153h-25v-25h-14v25h-25v14h25v25h14v-25h25z" fill="currentColor"></svg:path><svg:path d="M202.4 201.7z" fill="currentColor"></svg:path><svg:path d="M363.3 363.9c-12.9-4.6-31.4-6.2-43.2-8.8-6.8-1.5-16.7-5.3-20-9.2-3.3-4-1.3-40.9-1.3-40.9s6.1-9.6 9.4-18c3.3-8.4 6.9-31.4 6.9-31.4s6.8 0 9.2-11.9c2.6-13 6.6-18.4 6.1-28.1-.5-9-5.2-9.5-5.7-9.5s4.9-13.6 5.6-42.4C331.1 129.6 305 96 256 96s-75 33.5-74.3 67.6c.6 28.7 5.6 42.4 5.6 42.4-.5 0-5.2.5-5.7 9.5-.5 9.7 3.6 14.9 6.1 27.9 2.4 11.9 9.2 12 9.2 12s3.6 23.1 6.9 31.5c3.3 8.5 9.4 18 9.4 18s2 36.9-1.3 40.9-13.2 7.7-20 9.2c-11.9 2.6-30.3 4.3-43.2 8.9C135.8 368.5 96 384 96 416h320c0-32-39.8-47.5-52.7-52.1zM256 400H118.7c2-3 4.7-5.1 8.2-7.6 7-5.1 16.1-9.8 27.1-13.6 6.8-2.4 16.7-4 25.4-5.3 5.7-.9 11.1-1.7 15.9-2.8 3.4-.8 20.8-5 28.8-14.6 4.5-5.4 5.8-12.7 5.6-32.3-.1-10-.6-19.3-.6-19.7l-.2-4.2-2.3-3.5c-1.5-2.3-5.8-9.5-8-15.3-1.8-4.7-4.6-19.2-6-28.1 0 0 .4 1-.5-3.7s-8.4-4.3-9.4-8c-.9-3.6-1.8-6.9-4.3-18.2-2.5-11.3 2.8-11.2 3.9-16.2.6-3.1 0-5.7 0-5.8-.3-1-4.1-13.4-4.7-37.7-.3-13.2 4.6-25.6 13.8-34.9 10.6-10.8 26-16.5 44.5-16.5 19 0 34 5.7 44.6 16.5 9.2 9.3 14.1 21.7 13.8 34.9-.5 24.2-4.3 36.6-4.7 37.7 0 .1-.6 1.7-.4 5.2.2 5.4 6.8 5.5 4.3 16.8s-3.4 14.6-4.3 18.2c-.9 3.6-8.5 3.3-9.4 8s-.5 3.7-.5 3.7c-1.4 8.9-4.2 23.4-6 28.1-2.3 5.8-6.6 13-8 15.3l-2.3 3.5-.2 4.2c0 .4-.5 9.7-.6 19.7-.2 19.6 1.1 26.9 5.6 32.3 8 9.5 25.4 13.8 28.8 14.6 4.8 1.1 10.2 1.9 15.9 2.8 8.7 1.3 18.6 2.9 25.4 5.3 11 3.9 20.2 8.6 27.1 13.7 3.5 2.5 6.2 4.6 8.2 7.6H256z" fill="currentColor"></svg:path>`,
})
export class IonIosPersonaddOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPhoneLandscapeIcon],svg[ion-ios-phone-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 176.3v158.5c0 18.3 14.6 33.1 32.9 33.1h381c18.4 0 34.1-14.8 34.1-33.1V176.3c0-18.3-15.7-32.3-34.1-32.3h-381C46.6 144 32 158 32 176.3zM55 271v-30c0-2.2 1.8-4 4-4s4 1.8 4 4v30c0 2.2-1.8 4-4 4s-4-1.8-4-4zm414-15.5c0 9.6-7.8 17.4-17.4 17.4-9.6 0-17.4-7.8-17.4-17.4 0-9.6 7.8-17.4 17.4-17.4 9.6 0 17.4 7.8 17.4 17.4zM424 160v192H83V160h341z" fill="currentColor"></svg:path><svg:path d="M441.6 255.5c0 5.5 4.5 10 9.9 10 5.5 0 10-4.5 10-10s-4.5-10-10-10c-5.4.1-9.9 4.5-9.9 10z" fill="currentColor"></svg:path>`,
})
export class IonIosPhoneLandscapeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPhonePortraitIcon],svg[ion-ios-phone-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M335.7 32H177.1C158.8 32 144 46.6 144 64.9v381c0 18.4 14.8 34.1 33.1 34.1h158.5c18.3 0 32.3-15.7 32.3-34.1v-381C368 46.6 354 32 335.7 32zM241 55h30c2.2 0 4 1.8 4 4s-1.8 4-4 4h-30c-2.2 0-4-1.8-4-4s1.8-4 4-4zm15.5 410c-9.6 0-17.4-7.8-17.4-17.4 0-9.6 7.8-17.4 17.4-17.4 9.6 0 17.4 7.8 17.4 17.4 0 9.6-7.8 17.4-17.4 17.4zm93.5-49H162c-1.1 0-2-.9-2-2V85c0-1.1.9-2 2-2h188c1.1 0 2 .9 2 2v329c0 1.1-.9 2-2 2z" fill="currentColor"></svg:path>`,
})
export class IonIosPhonePortraitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPhotosIcon],svg[ion-ios-photos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M464 144H128c-17.6 0-32 14.4-32 32v240c0 17.6 14.4 32 32 32h336c17.6 0 32-14.4 32-32V176c0-17.6-14.4-32-32-32z" fill="currentColor"></svg:path><svg:path d="M100 116h332V96c0-17.6-14.4-32-32-32H48c-17.6 0-32 14.4-32 32v256c0 17.6 14.4 32 32 32h20V148c0-17.6 14.4-32 32-32z" fill="currentColor"></svg:path>`,
})
export class IonIosPhotosIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPhotosOutlineIcon],svg[ion-ios-photos-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 128v320h384V128H96zm368 304H112V144h352v288z" fill="currentColor"></svg:path><svg:path d="M32 64v320h48v-16H48V80h352v32h16V64z" fill="currentColor"></svg:path>`,
})
export class IonIosPhotosOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPieIcon],svg[ion-ios-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M276 68.1v219c0 3.7-2.5 6.8-6 7.7L81.1 343.4c-2.3.6-3.6 3.1-2.7 5.4C109.1 426 184.9 480.6 273.2 480c114.6-.7 206.8-93.5 206.8-208 0-112.1-88.6-203.5-199.8-207.8-2.3-.1-4.2 1.7-4.2 3.9z" fill="currentColor"></svg:path><svg:path d="M32 239.3s.2 48.8 15.2 81.1c.8 1.8 2.8 2.7 4.6 2.2l193.8-49.7c3.5-.9 6.4-4.6 6.4-8.2V36c0-2.2-1.8-4-4-4C91 33.9 32 149 32 239.3z" fill="currentColor"></svg:path>`,
})
export class IonIosPieIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPieOutlineIcon],svg[ion-ios-pie-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M288 80.826c45.293 3.705 87.354 23.024 119.809 55.494C444.044 172.57 464 220.744 464 272.043c0 25.924-5.08 51.042-15.099 74.703-9.68 22.859-23.54 43.384-41.194 61.024-17.654 17.639-38.204 31.481-61.08 41.151-23.673 10.01-48.823 15.081-74.752 15.081-41.193 0-80.47-12.847-113.584-37.146a193.027 193.027 0 0 1-41.633-41.692 191.38 191.38 0 0 1-21.041-36.634l180.259-45.008L288 300.496V81m-16-17v224L74.245 337.376C101.653 420.221 179.841 480 271.875 480 386.75 480 480 386.875 480 272S387 64 272 64z" fill="currentColor"></svg:path><svg:path d="M240 48.181v214.943l-180.342 45.73c-9.117-23.568-11.197-56.973-11.158-69.496V239.287c0-47.311 16.465-93.746 45.173-127.398 16.735-19.618 37.502-34.981 61.721-45.663C180.099 55.331 208.519 49.274 240 48.181M256 32h-5.5C90.5 32 32 148.25 32 239.287c0 0 .25 56.666 18.91 88.291L256 275.573V32z" fill="currentColor"></svg:path>`,
})
export class IonIosPieOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPinIcon],svg[ion-ios-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48c-79.5 0-144 59.9-144 133.7 0 104 144 282.3 144 282.3s144-178.3 144-282.3C400 107.9 335.5 48 256 48zm0 190.9c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9 46.9 21 46.9 46.9-21 46.9-46.9 46.9z" fill="currentColor"></svg:path>`,
})
export class IonIosPinIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPintIcon],svg[ion-ios-pint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M372 175.2c0-19.5-1-81.7-19.3-115.6-4.5-8.2-9.5-11.6-28.7-11.6H188c-19.3 0-24.2 3.4-28.7 11.6-18.3 33.9-19.3 96.5-19.3 116 0 91 36 93.1 36 167.8 0 36.7-16 66.7-16 92.7 0 25.1 6 27.8 29 27.8h134c23 0 29-2.9 29-27.9 0-26-16-55.7-16-92.4 0-74.7 36-77.4 36-168.4zM188 76h136c2.4 0 4.3.1 5.7.2 5.4 11.6 9.4 29.3 11.8 50.8h-171c2.4-21.6 6.5-39.3 11.8-50.8 1.4-.1 3.3-.2 5.7-.2z" fill="currentColor"></svg:path>`,
})
export class IonIosPintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPintOutlineIcon],svg[ion-ios-pint-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M368 170.085c0-21.022-.973-88.554-19.308-125.013C344.244 36.228 336.25 32 316.999 32H195.001c-19.25 0-27.246 4.197-31.693 13.041C144.973 81.5 144 149.25 144 170.272c0 98 32 100.353 32 180.853 0 39.5-16 71.402-16 99.402 0 27 9 29.473 32 29.473h128c23 0 32-2.535 32-29.535 0-28-16-59.715-16-99.215 0-80.5 32-83.165 32-181.165zM177.602 51.983c.778-1.546 1.339-1.763 2.53-2.295 1.977-.884 6.161-1.688 14.869-1.688h121.998c8.708 0 12.893.803 14.869 1.687 1.19.532 1.752.872 2.53 2.418 8.029 15.967 13.601 42.611 16.105 75.896H161.496c2.505-33.348 8.076-60.05 16.106-76.018zm157.029 410.653C332.76 463.377 327.844 464 320 464H192c-7.844 0-12.761-.623-14.639-1.359-.394-.93-1.361-4.166-1.361-12.27 0-10.856 3.016-23.16 6.508-37.334 4.449-18.059 9.492-38.557 9.492-61.943 0-40.997-7.993-63.802-15.724-85.842C168.274 242.438 160 218.838 160 170.155c0-9.025.191-17.756.558-26.155h190.886c.365 8.376.557 17.083.557 26.085 0 48.688-8.276 72.302-16.28 95.169-7.728 22.079-15.72 44.895-15.72 85.887 0 23.39 5.043 43.822 9.493 61.856 3.491 14.15 6.507 26.368 6.507 37.222-.001 8.136-.977 11.494-1.37 12.417z" fill="currentColor"></svg:path>`,
})
export class IonIosPintOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPizzaIcon],svg[ion-ios-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M446.6 109.8c-2.7-7.3-14.2-14-25-18.7-27-11.6-73.5-27.1-164.9-27.1-94 0-137.5 14.5-165 27.1-12.3 5.7-24.2 12.5-26.7 19.5-2.9 8 .8 15.3 4.1 21.8l1.5 3c3.1 6.4 12.9 12.8 22.8 13.8L251.3 445c1 1.9 3.1 3.1 5.3 3.1 2.2 0 4.3-1.2 5.3-3.1l157.6-295.1c5.6-.6 17.2-2.6 23.1-14.3 3.9-7.7 7.4-16.7 4-25.8zm-266 112.8c-1.2 3.5-2.9 6.6-5.1 9.5-1.8 2.3-5.3 2-6.7-.6-8.8-16.6-17.3-32.4-24.8-46.5-1.4-2.6.5-5.8 3.4-5.9h1c3.7 0 7.3.6 10.9 1.7 8.6 2.8 15.5 8.7 19.6 16.6 3.9 7.9 4.6 16.8 1.7 25.2zm116.6 97.5c-.8 1.4-2.3 2.3-3.9 2.1-17-1.8-30.2-15.8-30.2-32.8 0-18.2 15.2-33 33.9-33 9.9 0 19 4 25.3 11 1.1 1.2 1.3 3.1.5 4.5l-25.6 48.2zm35.2-176.8c-5.7 4.1-12.4 6.3-19.5 6.3-1.6 0-3.3-.1-4.9-.3-8.7-1.2-16.3-5.7-21.5-12.5-2-2.6-3.6-5.5-4.6-8.4-1-2.7 1.2-5.5 4-5.3 18.3 1 35.3 2.9 51.4 5.9 3.1.6 4.5 4.1 2.7 6.7-2 2.8-4.6 5.4-7.6 7.6z" fill="currentColor"></svg:path>`,
})
export class IonIosPizzaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPlanetIcon],svg[ion-ios-planet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M462.5 352.3c-1.9-5.5-5.6-11.5-11.4-18.3-10.2-12-30.8-29.3-54.8-47.2-2.6-2-6.4-.8-7.5 2.3l-4.7 13.4c-.7 2 0 4.3 1.7 5.5 15.9 11.6 35.9 27.9 41.8 35.9 2 2.8-.5 6.6-3.9 5.8-10-2.3-29-7.3-44.2-12.8-8.6-3.1-17.7-6.7-27.2-10.6 16-20.8 24.7-46.3 24.7-72.6 0-32.8-13.2-63.6-37.1-86.4-22.9-21.9-53.8-34.1-85.7-33.7-25.7.3-50.1 8.4-70.7 23.5-18.3 13.4-32.2 31.3-40.6 52-8.3-6-16.1-11.9-23.2-17.6-13.7-10.9-28.4-22-38.7-34.7-2.2-2.8.9-6.7 4.4-5.9 11.3 2.6 35.4 10.9 56.4 18.9 1.5.6 3.2.3 4.5-.8l11.1-10.1c2.4-2.1 1.7-6-1.3-7.2C121 137.4 89.2 128 73.2 128c-11.5 0-19.3 3.5-23.3 10.4-7.6 13.3 7.1 35.2 45.1 66.8 34.1 28.5 82.6 61.8 136.5 92 87.5 49.1 171.1 81 208 81 11.2 0 18.7-3.1 22.1-9.1 2.8-4.7 3.1-10.4.9-16.8z" fill="currentColor"></svg:path><svg:path d="M312 354c-29.1-12.8-59.3-26-92.6-44.8-30.1-16.9-59.4-36.5-84.4-53.6-1-.7-2.2-1.1-3.4-1.1-.9 0-1.9.2-2.8.7-2 1-3.3 3-3.3 5.2 0 1.2-.1 2.4-.1 3.5 0 32.1 12.6 62.3 35.5 84.9 22.9 22.7 53.4 35.2 85.8 35.2 23.6 0 46.5-6.7 66.2-19.5 1.9-1.2 2.9-3.3 2.7-5.5-.1-2.2-1.5-4.1-3.6-5z" fill="currentColor"></svg:path>`,
})
export class IonIosPlanetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPlayIcon],svg[ion-ios-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 104.3v303.4c0 6.4 6.5 10.4 11.7 7.2l240.5-151.7c5.1-3.2 5.1-11.1 0-14.3L139.7 97.2c-5.2-3.3-11.7.7-11.7 7.1z" fill="currentColor"></svg:path>`,
})
export class IonIosPlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPlayCircleIcon],svg[ion-ios-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm83.8 211.9l-137.2 83c-2.9 1.8-6.7-.4-6.7-3.9V173c0-3.5 3.7-5.7 6.7-3.9l137.2 83c2.9 1.7 2.9 6.1 0 7.8z" fill="currentColor"></svg:path>`,
})
export class IonIosPlayCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPlayOutlineIcon],svg[ion-ios-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M144 124.9L353.8 256 144 387.1V124.9M128 96v320l256-160L128 96z" fill="currentColor"></svg:path>`,
})
export class IonIosPlayOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPlusIcon],svg[ion-ios-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm128 217H264v119h-17V265H128v-17h119V128h17v120h120v17z" fill="currentColor"></svg:path>`,
})
export class IonIosPlusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPlusEmptyIcon],svg[ion-ios-plus-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M384 265H264v119h-17V265H128v-17h119V128h17v120h120v17z" fill="currentColor"></svg:path>`,
})
export class IonIosPlusEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPlusOutlineIcon],svg[ion-ios-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7S150.9 65.3 256 65.3 446.7 150.9 446.7 256 361.1 446.7 256 446.7z" fill="currentColor"></svg:path><svg:path d="M264.1 128h-16.8v119.9H128v16.8h119.3V384h16.8V264.7H384v-16.8H264.1z" fill="currentColor"></svg:path>`,
})
export class IonIosPlusOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPodiumIcon],svg[ion-ios-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 199.9v208.2c0 4.4 3.5 7.9 7.9 7.9h96.2c4.4 0 7.9-3.5 7.9-7.9V199.9c0-4.4-3.5-7.9-7.9-7.9H71.9c-4.4 0-7.9 3.5-7.9 7.9z" fill="currentColor"></svg:path><svg:path d="M199.9 96c-4.4 0-7.9 3.5-7.9 7.9V416h120.1c4.4 0 7.9-3.5 7.9-7.9V103.9c0-4.4-3.5-7.9-7.9-7.9H199.9z" fill="currentColor"></svg:path><svg:path d="M440.1 256h-96.2c-4.4 0-7.9 3.5-7.9 7.9v144.2c0 4.4 3.5 7.9 7.9 7.9h96.2c4.4 0 7.9-3.5 7.9-7.9V263.9c0-4.4-3.5-7.9-7.9-7.9z" fill="currentColor"></svg:path>`,
})
export class IonIosPodiumIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPowerIcon],svg[ion-ios-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M380.4 111.7c-3.3-2.8-7.5-4.3-11.8-4.3-5.3 0-10.4 2.3-13.8 6.4-3.2 3.7-4.7 8.4-4.3 13.3.4 4.8 2.7 9.3 6.4 12.4 34.8 29.5 54.8 72.3 54.8 117.4 0 85.4-69.8 154.8-155.6 154.8s-155.6-69.5-155.6-154.8c0-45.2 20-88 54.8-117.4 3.7-3.1 6-7.5 6.4-12.4.4-4.8-1.1-9.6-4.3-13.3-3.5-4-8.5-6.4-13.8-6.4-4.3 0-8.5 1.5-11.8 4.3C88.7 148.1 64 201 64 256.8 64 362.2 150.1 448 256 448s192-85.8 192-191.2c0-55.8-24.7-108.7-67.6-145.1z" fill="currentColor"></svg:path><svg:path d="M256.9 274.5c10.2 0 18.5-8.3 18.5-18.5V82.5c0-10.2-8.3-18.5-18.5-18.5s-18.5 8.3-18.5 18.5V256c0 10.2 8.3 18.5 18.5 18.5z" fill="currentColor"></svg:path>`,
})
export class IonIosPowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPricetagIcon],svg[ion-ios-pricetag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M435.2 48H312.3c-3.8 0-7.5 1.5-10.2 4.2L56.4 297.9c-11.2 11.2-11.2 29.5 0 40.7l117 117c11.2 11.2 29.5 11.2 40.7 0L459.7 210c2.7-2.7 4.2-6.4 4.2-10.2v-123C464 60.9 451.1 48 435.2 48zm-47.7 111.8c-20.4 2.2-37.4-14.9-35.3-35.3 1.6-14.8 13.5-26.8 28.3-28.3 20.4-2.2 37.4 14.9 35.3 35.3-1.6 14.8-13.5 26.7-28.3 28.3z" fill="currentColor"></svg:path>`,
})
export class IonIosPricetagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPricetagOutlineIcon],svg[ion-ios-pricetag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M464 32H304L48 320l160 160 256-288V32zm-16 152L208.125 456 72.062 320 311.587 48H448v136z" fill="currentColor"></svg:path><svg:path d="M368 160c17.645 0 32-14.355 32-32s-14.355-32-32-32-32 14.355-32 32 14.355 32 32 32zm0-48c8.836 0 16 7.163 16 16s-7.164 16-16 16-16-7.163-16-16 7.164-16 16-16z" fill="currentColor"></svg:path>`,
})
export class IonIosPricetagOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPricetagsIcon],svg[ion-ios-pricetags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M403.3 32H285.1c-3.7 0-7.2 1.5-9.8 4.1L40.1 272.2c-10.8 10.8-10.8 28.4 0 39.2l111.5 112.5C162.4 434.7 179 440 195 426l231.9-232.3c2.6-2.6 4.1-6.1 4.1-9.8V59.7c0-15.3-12.4-27.7-27.7-27.7zm-45.9 107.5c-19.6 2.1-36-14.4-33.9-33.9 1.5-14.3 13-25.7 27.3-27.3 19.6-2.1 36 14.4 33.9 33.9-1.5 14.3-13 25.8-27.3 27.3z" fill="currentColor"></svg:path><svg:path d="M456 80.3V194c0 3.7-1.5 7.2-4.1 9.8L192.7 463l8.8 8.8c10.8 10.8 28.4 10.8 39.2 0l235.2-236.2c2.6-2.6 4.1-6.1 4.1-9.8V107.7c0-14-10.5-25.6-24-27.4z" fill="currentColor"></svg:path>`,
})
export class IonIosPricetagsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPricetagsOutlineIcon],svg[ion-ios-pricetags-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 64V32H288L32 320l160 160 23.471-23.904L240 480l240-272V64h-32zM192 457.371L54.39 320 294.621 48H432v137.377l-216.555 247.99-11.34 11.363L192 457.371zm272-255.994L240 457.371l-13.182-12.65L448 192V80h16v121.377z" fill="currentColor"></svg:path><svg:path d="M352 160c17.645 0 32-14.355 32-32s-14.355-32-32-32-32 14.355-32 32 14.355 32 32 32zm0-48c8.836 0 16 7.163 16 16s-7.164 16-16 16-16-7.163-16-16 7.164-16 16-16z" fill="currentColor"></svg:path>`,
})
export class IonIosPricetagsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPrintIcon],svg[ion-ios-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 248v200c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V248c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16z" fill="currentColor"></svg:path><svg:path d="M384 48H128c-8.8 0-16 7.2-16 16v20c0 2.2 1.8 4 4 4h280c2.2 0 4-1.8 4-4V64c0-8.8-7.2-16-16-16z" fill="currentColor"></svg:path><svg:path d="M432.5 112h-352C62.9 112 48 125.8 48 143.3v174.4c0 17.5 14.9 32.3 32.5 32.3H96c4.4 0 8-3.6 8-8V236c0-15.5 12.5-28 28-28h248c15.5 0 28 12.5 28 28v106c0 4.4 3.6 8 8 8h16.5c17.6 0 31.5-14.8 31.5-32.3V143.3c0-17.5-13.9-31.3-31.5-31.3z" fill="currentColor"></svg:path>`,
})
export class IonIosPrintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPrinterIcon],svg[ion-ios-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 224h256v224H128z" fill="currentColor"></svg:path><svg:path d="M127.5 224.5h256v224h-256z" fill="currentColor"></svg:path><svg:path d="M111.5 64.5h288v32h-288z" fill="currentColor"></svg:path><svg:path d="M432.5 112.5h-352c-17.645 0-33 12.842-33 30.309v158.393c0 17.468 15.355 33.299 33 33.299h31v-126h288v126h33c17.645 0 31-15.831 31-33.299V142.809c0-17.467-13.355-30.309-31-30.309z" fill="currentColor"></svg:path>`,
})
export class IonIosPrinterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPrinterOutlineIcon],svg[ion-ios-printer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M432.5 112H400V64H112v48H80.5C62.9 112 48 125.8 48 143.3v158.4c0 17.5 14.9 32.3 32.5 32.3H128v114h256V334h48.5c17.6 0 31.5-14.8 31.5-32.3V143.3c0-17.5-13.9-31.3-31.5-31.3zM128 80h256v32H128V80zm240 352H144V240h224v192zm80-130.3c0 8.7-6.7 16.3-15.5 16.3H384v-94H128v94H80.5c-8.8 0-16.5-7.6-16.5-16.3V143.3c0-8.7 7.7-15.3 16.5-15.3h352c8.8 0 15.5 6.6 15.5 15.3v158.4z" fill="currentColor"></svg:path>`,
})
export class IonIosPrinterOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPulseIcon],svg[ion-ios-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M434.6 272.1c-22.4-1.2-41.6 13.2-48.2 32.9h-38.9l-28.4-85.4c-2.2-6.6-8.3-11-15.2-11h-.3c-7 .1-13.1 4.8-15 11.6l-44.5 155.3-52.3-314.1c-1.2-7.5-7.6-13.1-15.2-13.4-7.6-.3-14.3 4.8-16.2 12.1l-53 244.9H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h72c7.3 0 13.8-5 15.5-12.1l37.4-182.2 51.3 307.9c1.2 7.4 7.4 12.9 14.9 13.3h.9c7.1 0 13.4-4.7 15.4-11.6l49.7-173.6 15.7 47.3c2.2 6.5 8.3 11 15.2 11h51.1c6.9 18 24.4 31 44.9 31 27 0 48.8-22.3 48-49.5-.8-24.8-20.7-45.1-45.4-46.4z" fill="currentColor"></svg:path>`,
})
export class IonIosPulseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosPulseStrongIcon],svg[ion-ios-pulse-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 273.001c-21.27 0-39.296 13.999-45.596 32.999h-38.857l-28.361-85.417a15.999 15.999 0 0 0-15.183-10.956c-.112 0-.224 0-.335.004a15.997 15.997 0 0 0-15.049 11.588l-44.484 155.262-52.353-314.108C206.535 54.893 200.333 48 192 48s-13.693 5.776-15.525 13.135L115.496 306H16v31.999h112c7.348 0 13.75-5.003 15.525-12.134l45.368-182.177 51.324 307.94c1.229 7.377 7.397 11.92 14.864 12.344.308.018.614.028.919.028 7.097 0 13.406-3.701 15.381-10.594l49.744-173.617 15.689 47.252A16.001 16.001 0 0 0 352 337.999h51.108C409.973 355.999 427.477 369 448 369c26.511 0 48-22.492 48-49 0-26.509-21.489-46.999-48-46.999z" fill="currentColor"></svg:path>`,
})
export class IonIosPulseStrongIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosQrScannerIcon],svg[ion-ios-qr-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M174 64h-58.8C78.1 64 48 94.1 48 131.2V190c0 7.7 6.3 14 14 14s14-6.3 14-14v-59.8c0-9.1 4.3-18.7 11.7-26.2 7.5-7.6 17.2-12 26.5-12H174c7.7 0 14-6.3 14-14s-6.3-14-14-14z" fill="currentColor"></svg:path><svg:path d="M397.8 64H338c-7.7 0-14 6.3-14 14s6.3 14 14 14h59.8c9.3 0 19 4.4 26.5 12 7.4 7.5 11.7 17.1 11.7 26.2V190c0 7.7 6.3 14 14 14s14-6.3 14-14v-59.8c0-36.5-29.7-66.2-66.2-66.2z" fill="currentColor"></svg:path><svg:path d="M174 420h-59.8c-9.3 0-19-4.4-26.5-12-7.4-7.5-11.7-17.1-11.7-26.2V322c0-7.7-6.3-14-14-14s-14 6.3-14 14v59.8c0 36.5 29.7 66.2 66.2 66.2H174c7.7 0 14-6.3 14-14s-6.3-14-14-14z" fill="currentColor"></svg:path><svg:path d="M450 308c-7.7 0-14 6.3-14 14v59.8c0 9.1-4.3 18.7-11.7 26.2-7.5 7.6-17.2 12-26.5 12H338c-7.7 0-14 6.3-14 14s6.3 14 14 14h58.8c37 0 67.2-30.1 67.2-67.2V322c0-7.7-6.3-14-14-14z" fill="currentColor"></svg:path>`,
})
export class IonIosQrScannerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosQuoteIcon],svg[ion-ios-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M209 96h-65c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h38.7c4.6 0 8.3 3.9 8 8.6-2.3 35.5-18.8 60.2-31.3 74.1-4.7 5.2-1 13.4 5.9 13.4h39.9c2.5 0 4.8-1.1 6.3-3.1 7.4-9.6 28.5-41.6 28.5-93.9v-192c0-17.8-13.3-31.1-31-31.1z" fill="currentColor"></svg:path><svg:path d="M385 96h-65c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h38.7c4.6 0 8.3 3.9 8 8.6-2.3 35.5-18.8 60.2-31.3 74.1-4.7 5.2-1 13.4 5.9 13.4h39.9c2.5 0 4.8-1.1 6.3-3.1 7.4-9.6 28.5-41.6 28.5-93.9v-192c0-17.8-13.3-31.1-31-31.1z" fill="currentColor"></svg:path>`,
})
export class IonIosQuoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRadioIcon],svg[ion-ios-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M60 256c0-51 18.6-97.9 54-135.6 5.3-5.7 5.2-14.8-.4-20.3-2.6-2.6-6.1-4.1-9.7-4.1-3.8 0-7.4 1.6-10.1 4.4C53.3 143.7 32 197.4 32 256c0 58.5 21.3 112.3 61.7 155.5 2.7 2.9 6.3 4.5 10.2 4.5 3.6 0 7.1-1.4 9.7-3.9 2.7-2.6 4.3-6.2 4.4-10 .1-3.9-1.3-7.6-4-10.3C78.6 353.9 60 307 60 256z" fill="currentColor"></svg:path><svg:path d="M418.2 100.4c-2.6-2.8-6.2-4.4-10-4.4-3.6 0-7.1 1.4-9.7 3.9-2.7 2.6-4.3 6.2-4.4 10-.1 3.9 1.3 7.6 4 10.3 35.3 37.8 54 84.7 54 135.7s-18.6 97.9-54 135.7c-5.3 5.6-5.2 14.7.3 20.2 2.5 2.6 6 4 9.7 4 3.9 0 7.6-1.6 10.2-4.6 40.4-43 61.7-96.7 61.7-155.2 0-58.5-21.3-112.4-61.8-155.6z" fill="currentColor"></svg:path><svg:path d="M159.2 347.7c-24.1-24.3-37.3-56.6-37.3-90.9 0-35 13.8-67.9 38.8-92.4 5.5-5.3 5.6-14.2.2-19.8-2.6-2.7-6.2-4.2-10-4.2-3.7 0-7.2 1.4-9.8 4C110.7 174.2 94 214.1 94 256.8c0 41.6 16.1 80.9 45.3 110.6 2.7 2.7 6.2 4.2 9.9 4.2s7.2-1.5 9.8-4.2c2.6-2.6 4.1-6.1 4.1-9.8.2-3.7-1.2-7.2-3.9-9.9z" fill="currentColor"></svg:path><svg:path d="M371 144.5c-2.6-2.6-6-4-9.8-4-3.8 0-7.3 1.5-10 4.1-5.4 5.4-5.4 14.3.1 19.8 25 24.5 38.7 56.5 38.7 91.5 0 34.2-13.1 67.4-37.1 91.8-5.4 5.4-5.3 14.3.1 19.7 2.6 2.6 6.2 4.1 9.8 4.1 3.8 0 7.4-1.5 9.9-4.1C402 337.7 418 297.6 418 256c0-42.5-16.7-81.5-47-111.5z" fill="currentColor"></svg:path><svg:path d="M207.1 183.4c-2.6-2.7-6.2-4.2-10-4.2-3.7 0-7.2 1.4-9.8 4.1-19.8 19.5-30.8 45.6-30.8 73.3 0 27.1 10.5 52.7 29.5 72.1 2.7 2.7 6.2 4.2 10 4.2 3.7 0 7.2-1.4 9.8-4 2.7-2.6 4.2-6.1 4.2-9.9 0-3.8-1.4-7.3-4.1-10-13.8-14-21.4-32.6-21.4-52.5 0-20.3 8-39.2 22.4-53.4 5.4-5.2 5.5-14.1.2-19.7z" fill="currentColor"></svg:path><svg:path d="M325.7 183.2c-2.6-2.6-6-4-9.8-4-3.8 0-7.3 1.5-10 4.1-5.4 5.4-5.4 14.3.1 19.8 14.5 14.3 22.4 33.3 22.4 53.5 0 19.8-7.6 38.5-21.5 52.5-2.6 2.6-4.1 6.2-4 9.9 0 3.7 1.5 7.2 4.1 9.8 2.6 2.6 6.2 4.1 9.8 4.1 3.7 0 7.3-1.5 9.9-4.2 19.1-19.4 29.6-45 29.6-72.1.1-27.8-10.8-53.8-30.6-73.4z" fill="currentColor"></svg:path><svg:path d="M256 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17.1-38-38-38z" fill="currentColor"></svg:path>`,
})
export class IonIosRadioIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRadioButtonOffIcon],svg[ion-ios-radio-button-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"></svg:path>`,
})
export class IonIosRadioButtonOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRadioButtonOnIcon],svg[ion-ios-radio-button-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"></svg:path><svg:path d="M363.5 148.5C334.8 119.8 296.6 104 256 104c-40.6 0-78.8 15.8-107.5 44.5C119.8 177.2 104 215.4 104 256s15.8 78.8 44.5 107.5C177.2 392.2 215.4 408 256 408c40.6 0 78.8-15.8 107.5-44.5C392.2 334.8 408 296.6 408 256s-15.8-78.8-44.5-107.5z" fill="currentColor"></svg:path>`,
})
export class IonIosRadioButtonOnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRainyIcon],svg[ion-ios-rainy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M433.9 175.6c-19-17.6-44.6-27.3-72.1-27.3h-5.6c-6.5-23.5-19.4-43.5-37.6-58.2C297.3 73 269.5 64 238.1 64c-32.7 0-63.2 11.7-86 32.9-22.8 21.2-35.5 50-36.1 81.4-17.5 4-33.6 13.7-46 27.9-14.2 16.2-22 36.6-22 57.4 0 44.6 34.9 82.6 77.4 86L101.2 382c-2.4 3.2-3.3 7.2-2.7 11.1.6 3.9 2.8 7.3 6 9.6 2.5 1.8 5.5 2.7 8.6 2.7 5.2 0 9.8-2.1 12.5-5.8l37.1-50h35.1l-55.3 75.1c-2.3 3.2-3.4 6.9-2.9 10.6.5 3.9 2.6 7.4 5.9 9.8 3.5 2.5 7.5 2.8 9 2.8 7.2 0 11.2-3.5 13.4-6.4l67.4-91.8H270L246 382c-2.4 3.3-3.4 7.2-2.7 11.1.6 3.9 2.8 7.3 6 9.6 2.5 1.8 5.5 2.7 8.6 2.7 5.2 0 9.8-2.1 12.5-5.8l37-50h35.1l-55.3 75.1c-2.3 3.2-3.4 7-2.9 10.6.5 3.8 2.6 7.2 5.9 9.6 2.6 1.9 5.9 3 8.9 3 5.1 0 9.7-2.2 12.5-6l69.7-95.1c22.4-4.5 43-16.6 58.1-34.5 15.9-18.8 24.7-42.6 24.7-67.1-.1-26.8-10.8-51.6-30.2-69.6z" fill="currentColor"></svg:path>`,
})
export class IonIosRainyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRainyOutlineIcon],svg[ion-ios-rainy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M332.1 179.4c-2.8 0-5.7-.1-8.4.3-8.3-36.8-35.2-67.6-80.3-67.6-50.9 0-82.3 38-82.3 83.6 0 2.8.1 5.5.4 8.2-27.7 2.5-49.5 31.3-49.5 59.8 0 29.2 22.9 54.6 51.6 56.2l-24.5 34.4c-1.1 1.6-2 3.4-2 5.5 0 4.6 3.7 8.3 8.3 8.3 3 0 5.6-1.6 7.1-4l31-43.8h36.1l-46.1 65.8c-1.2 1.6-2.1 3.6-2.1 5.6 0 4.6 3.7 8.3 8.3 8.3 3 0 5.6-1.8 7.2-4.3l52.6-75.5h37.9l-24.9 34.4c-1.2 1.6-2.2 3.8-2.2 5.6 0 4.6 3.7 8.3 8.3 8.3 3.1 0 5.4-1.7 7.2-4.1l31.6-44.3h34.7c.1 0 .3-.1.4-.1l-46.1 65.9c-1.3 1.7-2.3 3.6-2.3 5.8 0 4.6 3.7 8.3 8.3 8.3 3.2 0 5.5-2 7.4-4.5l55.5-79.8c26-9.9 44.6-35.8 44.6-65.2.1-37.7-30.3-71.1-67.8-71.1zm0 122.7H290l-.1-.1-.1.1H166.4c-10 0-19.5-4.6-26.7-11.9-7.2-7.3-11.1-17.2-11.1-27.4 0-19.6 15.2-39.8 34.9-43 1.7-.3 9.2-1.4 15-1.9 0 0-.5-5.6-.7-10.2-.1-4.6-.1-9.9-.1-12.1 0-36.4 29.5-66.9 65.8-66.9 15.2 0 29.5 5.1 41.3 14.7 11.5 9.3 19.6 25.4 22.8 39.7l3.3 14.7 14.9-1.9c2.2-.3 4.3-.4 6.4-.4 28.3 0 51.3 25.9 51.3 54.4-.1 28.4-23.1 52.2-51.4 52.2z" fill="currentColor"></svg:path>`,
})
export class IonIosRainyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRecordingIcon],svg[ion-ios-recording-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M386.2 146h-.1c-60.6 0-109.8 49.2-109.8 110.1 0 30.5 12.3 58 32.3 77.9H203.5c19.9-19.9 32.3-47.5 32.3-77.9 0-60.8-49.2-110.1-109.8-110.1h-.1-.1C65.2 146 16 195.2 16 256s49.2 110 109.8 110h260.4c60.6 0 109.8-49.2 109.8-110s-49.2-110-109.8-110zM464 256c0 43.1-34.9 78.2-77.9 78.2s-77.9-35.1-77.9-78.2 34.9-78.2 77.9-78.2S464 212.9 464 256zm-338.1 78.2C83 334.2 48 299.1 48 256s34.9-78.2 77.9-78.2 77.9 35.1 77.9 78.2-34.9 78.2-77.9 78.2z" fill="currentColor"></svg:path>`,
})
export class IonIosRecordingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRecordingOutlineIcon],svg[ion-ios-recording-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M386.2 144c-60.6 0-109.8 50.1-109.8 112 0 40.4 21 75.7 52.5 95.4H183.1c31.5-19.7 52.5-55 52.5-95.4 0-61.9-49.2-112-109.8-112C65.2 144 16 194.1 16 256s49.2 112 109.8 112h260.4c60.6 0 109.8-50.1 109.8-112s-49.2-112-109.8-112zM32.3 256c0-52.6 42-95.4 93.5-95.4 51.6 0 93.5 42.8 93.5 95.4s-42 95.4-93.5 95.4c-51.6 0-93.5-42.8-93.5-95.4zm353.9 95.4c-51.6 0-93.5-42.8-93.5-95.4s42-95.4 93.5-95.4 93.5 42.8 93.5 95.4-41.9 95.4-93.5 95.4z" fill="currentColor"></svg:path><svg:path d="M384 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48m0-16c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z" fill="currentColor"></svg:path><svg:path d="M128 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48m0-16c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z" fill="currentColor"></svg:path>`,
})
export class IonIosRecordingOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRedoIcon],svg[ion-ios-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 432h2.9c1.8 0 3.5-1.1 4.1-2.8 2.2-5.7 8.3-19.8 21.4-39.7 21.5-32.7 58.4-67.4 94.5-83.5 27.6-12.4 53-21.5 97.1-23.2 2.3-.1 4.2 1.7 4.2 4v81.6c0 3.2 3.6 5.1 6.2 3.4l215.9-142.2c2.4-1.6 2.4-5.1 0-6.7l-216-142.2c-2.7-1.8-6.2.1-6.2 3.4v82.6c0 2.2-1.7 3.9-3.8 4-71.6 3.8-123.1 24.8-163.4 65.5-61 61.6-56.8 139.1-56.8 158.7 0 10.3-.1 25.3-.1 37.1z" fill="currentColor"></svg:path>`,
})
export class IonIosRedoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRedoOutlineIcon],svg[ion-ios-redo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 400h10.3l19.2-31.2c20.5-32.7 44.9-62.8 75.8-76.6 24.4-10.9 46.7-18.9 86.7-20V352l192-128L256 96v80.3c-63 2.8-108.1 20.7-143.3 56.2C60.4 285.2 64 351.5 64 368.2c.1 8.9 0 21.7 0 31.8zm208-208v-64.7l148.1 96.8L272 320.8V256c-91 0-144.6 24.6-192.2 105.4 0 0-8.8-169.4 192.2-169.4z" fill="currentColor"></svg:path>`,
})
export class IonIosRedoOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRefreshIcon],svg[ion-ios-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M433 288.8c-7.7 0-14.3 5.9-14.9 13.6-6.9 83.1-76.8 147.9-161.8 147.9-89.5 0-162.4-72.4-162.4-161.4 0-87.6 70.6-159.2 158.2-161.4 2.3-.1 4.1 1.7 4.1 4v50.3c0 12.6 13.9 20.2 24.6 13.5L377 128c10-6.3 10-20.8 0-27.1l-96.1-66.4c-10.7-6.7-24.6.9-24.6 13.5v45.7c0 2.2-1.7 4-3.9 4C148 99.8 64 184.6 64 288.9 64 394.5 150.1 480 256.3 480c100.8 0 183.4-76.7 191.6-175.1.8-8.7-6.2-16.1-14.9-16.1z" fill="currentColor"></svg:path>`,
})
export class IonIosRefreshIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRefreshCircleIcon],svg[ion-ios-refresh-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 336.1c-70.7 0-128-57.3-128-128.1s57.3-128.1 128-128.1v-37c0-6.4 7.1-10.2 12.4-6.7l72.9 52.6c4.9 3.3 4.7 10.6-.4 13.6L268 196.7c-5.3 3.1-12-.8-12-6.9v-41.9c-60.3 0-109.2 49.7-108.1 110.2 1.1 59.1 50.3 106.7 109.5 106 55.9-.7 101.8-43.7 106.3-99 .4-5.2 4.7-9.1 9.9-9.1 5.8 0 10.4 4.9 9.9 10.7-5.4 66-60.4 117.4-127.5 117.4z" fill="currentColor"></svg:path>`,
})
export class IonIosRefreshCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRefreshEmptyIcon],svg[ion-ios-refresh-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 384.1c-70.7 0-128-57.3-128-128.1s57.3-128.1 128-128.1V84l96 64-96 55.7v-55.8c-59.6 0-108.1 48.5-108.1 108.1 0 59.6 48.5 108.1 108.1 108.1S364.1 316 364.1 256H384c0 71-57.3 128.1-128 128.1z" fill="currentColor"></svg:path>`,
})
export class IonIosRefreshEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRefreshOutlineIcon],svg[ion-ios-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M364.1 256c0 60-48.5 108.2-108.1 108.2S147.9 315.7 147.9 256c0-59.6 48.5-108.1 108.1-108.1v55.8l96-55.7-96-64v44c-70.7 0-128 57.4-128 128.1 0 70.8 57.3 128.1 128 128.1s128-57.1 128-128.1h-19.9z" fill="currentColor"></svg:path><svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z" fill="currentColor"></svg:path>`,
})
export class IonIosRefreshOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosReloadIcon],svg[ion-ios-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 64c105.9 0 191.7 85.7 191.9 191.5l55-52.5 9 9.1-70.3 67.9-66.6-67.9 9-9.1 51.1 52.4c-.3-98.5-80.5-178.6-179.1-178.6-98.8 0-179.2 80.4-179.2 179.2 0 98.8 80.4 179.2 179.2 179.2 78.6 0 145.5-51 169.5-121.6l12.4 3.5C412.3 393.2 340.6 448 256 448c-106 0-192-86-192-192S150 64 256 64z" fill="currentColor"></svg:path>`,
})
export class IonIosReloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRemoveIcon],svg[ion-ios-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M368.5 240h-225c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7h225c8.8 0 16-7.2 16-16s-7.2-16-16-16z" fill="currentColor"></svg:path>`,
})
export class IonIosRemoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRemoveCircleIcon],svg[ion-ios-remove-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm90.5 224h-181c-8.5 0-16-6-16-16s7.2-16 16-16h181c8.8 0 16 7.2 16 16s-7.2 16-16 16z" fill="currentColor"></svg:path>`,
})
export class IonIosRemoveCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRemoveCircleOutlineIcon],svg[ion-ios-remove-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M346.5 240h-181c-8.8 0-16 6-16 16s7.5 16 16 16h181c8.8 0 16-7.2 16-16s-7.2-16-16-16z" fill="currentColor"></svg:path><svg:path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"></svg:path>`,
})
export class IonIosRemoveCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosReorderIcon],svg[ion-ios-reorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M80 304h352v16H80z" fill="currentColor"></svg:path><svg:path d="M80 248h352v16H80z" fill="currentColor"></svg:path><svg:path d="M80 192h352v16H80z" fill="currentColor"></svg:path>`,
})
export class IonIosReorderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRepeatIcon],svg[ion-ios-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M336.6 157.5L303 124.1c-3.5-3.5-8.5-4.9-13.6-3.6-1.2.3-2.4.8-3.5 1.5-4.7 2.9-7.2 7.8-6.8 13.1.2 3.4 1.9 6.6 4.3 9.1l16 15.9H142c-20.8 0-40.3 8.1-55.1 22.9C72.1 197.7 64 217.2 64 238v16c0 7.7 6.3 14 14 14s14-6.3 14-14v-16c0-13.3 5.2-25.8 14.7-35.3 9.5-9.5 22-14.7 35.3-14.7h155.4l-16 15.9c-2.4 2.4-4 5.4-4.3 8.7-.4 4.2 1.1 8.3 4.1 11.3 2.6 2.6 6.2 4.1 9.9 4.1s7.2-1.4 9.9-4.1l35.6-35.4c4.2-4.1 6.5-9.7 6.5-15.5-.1-5.9-2.4-11.4-6.5-15.5z" fill="currentColor"></svg:path><svg:path d="M434 244c-7.7 0-14 6.3-14 14v16c0 13.3-5.2 25.8-14.7 35.3-9.5 9.5-22 14.7-35.3 14.7H214.6l16-15.9c2.4-2.4 4-5.4 4.3-8.8.4-4.2-1.1-8.3-4.1-11.3-2.6-2.6-6.2-4.1-9.9-4.1s-7.2 1.4-9.9 4.1l-35.6 35.4c-4.2 4.1-6.5 9.7-6.5 15.5 0 5.9 2.3 11.4 6.5 15.5l33.6 33.4c3.5 3.5 8.5 4.9 13.6 3.6 1.2-.3 2.4-.8 3.5-1.5 4.7-2.9 7.2-7.8 6.8-13.1-.2-3.4-1.9-6.6-4.3-9.1l-16-15.9H370c43 0 78-35 78-78v-16c0-7.5-6.3-13.8-14-13.8z" fill="currentColor"></svg:path>`,
})
export class IonIosRepeatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosResizeIcon],svg[ion-ios-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M418.3 80H307.8c-7.5 0-13.7 6.1-13.7 13.7v.2c0 7.5 6.1 13.7 13.7 13.7h76.5L107.6 384.3v-76.5c0-7.5-6.1-13.7-13.7-13.7h-.2c-7.5 0-13.7 6.1-13.7 13.7v110.5c0 7.5 6.1 13.7 13.7 13.7h110.5c7.5 0 13.7-6.1 13.7-13.7v-.2c0-7.5-6.1-13.7-13.7-13.7h-76.5l276.7-276.7v76.5c0 7.5 6.1 13.7 13.7 13.7h.2c7.5 0 13.7-6.1 13.7-13.7V93.7c0-7.6-6.1-13.7-13.7-13.7z" fill="currentColor"></svg:path>`,
})
export class IonIosResizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRestaurantIcon],svg[ion-ios-restaurant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M384 64c-24.8 0-48 77.3-48 160 0 57 32 80 32 80v128c0 8.8 7.2 16 16 16s16-7.2 16-16V75c0-11-11-11-16-11z" fill="currentColor"></svg:path><svg:path d="M288 64l10 104c0 4.4-3.6 8-8 8s-8-3.6-8-8l-6-104h-8l-6 104c0 4.4-3.6 8-8 8s-8-3.6-8-8l10-104h-8s-24 107.2-24 128 13.4 38.6 32 45.2V432c0 8.8 7.2 16 16 16s16-7.2 16-16V237.2c18.6-6.6 32-24.2 32-45.2S296 64 296 64h-8z" fill="currentColor"></svg:path><svg:path d="M160 64c-26.5 0-48 64-48 128 0 20.8 13.4 38.6 32 45.2V432c0 8.8 7.2 16 16 16s16-7.2 16-16V237.2c18.6-6.6 32-24.2 32-45.2 0-64-21.5-128-48-128z" fill="currentColor"></svg:path>`,
})
export class IonIosRestaurantIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosReturnLeftIcon],svg[ion-ios-return-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M70.5 265.4l59.6-59.4c2.6-2.6 6.1-4.1 9.9-4.1 3.7 0 7.3 1.4 9.9 4.1 2.6 2.6 4.1 6.1 4.1 9.9s-1.5 7.3-4.1 9.9l-.1.1-41.1 40.1H370c13.2 0 25.8-5.2 35.3-14.7 9.5-9.4 14.7-21.9 14.7-35.3v-48c0-7.7 6.3-14 14-14s14 6.3 14 14v48c0 20.8-8.1 40.3-22.9 55.1-14.8 14.8-34.3 22.9-55.1 22.9H108.3l39.6 40.2c2.6 2.6 4.1 6.1 4.1 9.9 0 3.7-1.4 7.3-4.1 9.9l-.1.1c-2.7 2.5-6.2 3.9-9.8 3.9-3.9 0-7.3-1.4-9.9-4.1l-57.6-57.4c-4.2-4.2-6.5-9.8-6.5-15.7 0-5.8 2.3-11.3 6.5-15.4z" fill="currentColor"></svg:path>`,
})
export class IonIosReturnLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosReturnRightIcon],svg[ion-ios-return-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M441.5 265.4L381.9 206c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-2.6 2.6-4.1 6.1-4.1 9.9s1.5 7.3 4.1 9.9l.1.1 41.1 40.1H142c-13.2 0-25.8-5.2-35.3-14.7-9.5-9.5-14.7-22-14.7-35.3v-48c0-7.7-6.3-14-14-14s-14 6.3-14 14v48c0 20.8 8.1 40.3 22.9 55.1 14.8 14.8 34.3 22.9 55.1 22.9h261.7L364 334.2c-2.6 2.6-4.1 6.1-4.1 9.9 0 3.7 1.4 7.3 4.1 9.9l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.9 0 7.3-1.4 9.9-4.1l57.6-57.4c4.2-4.2 6.5-9.8 6.5-15.7.1-5.8-2.2-11.3-6.4-15.4z" fill="currentColor"></svg:path>`,
})
export class IonIosReturnRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosReverseCameraIcon],svg[ion-ios-reverse-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M417.5 160H363c-4.6 0-8.9-2-12-5.4-28.4-31.8-39.1-42.6-50.7-42.6h-85.5c-11.7 0-23.2 10.8-51.7 42.7-3 3.4-7.4 5.3-11.9 5.3h-4.1v-8c0-4.4-3.6-8-8-8h-26c-4.4 0-8 3.6-8 8v8h-7.5C79.9 160 64 173.2 64 190.7v176c0 17.5 15.9 33.3 33.5 33.3h320c17.6 0 30.5-15.8 30.5-33.3v-176c0-17.5-12.9-30.7-30.5-30.7zM308.3 340.5c-.8 2.5-2.6 4.6-4.8 6.1-14.1 9.7-30.5 14.8-47.5 14.8-21 0-41.2-8.1-57.1-22.7-14.6-13.5-24.1-31.2-27-50.2h-20.4c-3.2 0-6-2.8-5.6-6.6.1-.7.3-1.3.7-1.8l31.5-42.3c1.1-1.4 2.7-2.2 4.4-2.2 1.7 0 3.3.8 4.4 2.2l32.2 41.8c2 2.6 1.5 6.4-1.8 8.5-.6.4-1.2.5-1.9.5h-20.8c2.7 12.8 9.7 24.8 19.9 34 11.6 10.6 26.3 16.4 41.4 16.4 12.3 0 24.4-4 35.1-11.5 1.9-1.3 4.2-2.1 6.5-2.1 3.2 0 6.2 1.3 8.3 3.7 2.9 3 3.9 7.3 2.5 11.4zm56.6-67.5l-31.2 42.9c-1.8 2.5-5.5 3.2-8.3.8-.2-.2-.4-.4-.5-.6L292.5 273c-2-2.6-1.4-6.5 1.9-8.5.6-.3 1.2-.5 1.9-.5h21c-2.7-13.6-9.7-26.1-19.9-35.6-11.5-10.7-26.2-16.6-41.3-16.6-12.5 0-24.6 3.9-35.2 11.3-1.9 1.3-4.1 2-6.4 2-3.1 0-6.1-1.3-8.2-3.6-2.8-3-3.8-7.4-2.5-11.5.8-2.5 2.6-4.6 4.7-6 14.1-9.7 30.6-14.8 47.6-14.8 21.7 0 42.2 7.9 57.8 22.3 13.3 12.3 23.2 32.1 26.2 52.4h21.1c.6 0 1.3.2 1.8.5 3.2 2.1 3.8 6 1.9 8.6z" fill="currentColor"></svg:path>`,
})
export class IonIosReverseCameraIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosReverseCameraOutlineIcon],svg[ion-ios-reverse-camera-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M301.815 318.608c-13.114 11.029-28.956 17.356-45.815 17.356-36.36 0-66.286-28.965-70.89-61.965h30.61l-38.87-50-37.534 50h29.479c4.696 42 41.717 78 87.205 78 20.9 0 41.17-7.566 57.076-21.218l2.37-2.159-11.599-11.662-2.032 1.648z" fill="currentColor"></svg:path><svg:path d="M315.736 198.885c-16.188-14.775-37.402-22.839-59.736-22.839-20.9 0-41.169 7.556-57.075 21.206l-2.371 2.052 11.599 11.61 2.033-1.706c12.927-10.872 29.197-17.005 45.814-17.005 36.343 0 66.274 28.797 70.891 63.797h-30.644l38.846 51.225L372.719 256h-29.512c-2.241-20-11.932-42.936-27.471-57.115z" fill="currentColor"></svg:path><svg:path d="M417.5 160h-61.725c-32.105-36-42.219-48-54.525-48h-88.5c-12.314 0-22.167 12-54.521 48H145v-16h-34v16H97.5C79.855 160 64 173.217 64 190.684v176.018C64 384.169 79.855 400 97.5 400h320c17.645 0 30.5-15.831 30.5-33.299V190.684C448 173.217 435.145 160 417.5 160zM432 366.701c0 9.263-6.229 17.299-14.5 17.299h-320c-8.738 0-17.5-8.664-17.5-17.299V190.684C80 182.518 88.126 176 97.5 176h66.862c2.009 0 3.225-.199 5.768-3.2s7.702-10.008 11.08-13.795c11.296-12.666 19.457-21.915 25.316-27.132 4.746-4.225 6.211-3.873 6.225-3.873h88.5c.016 0 1.611-.363 6.709 4.219 6.141 5.521 14.705 16.84 26.558 30.198 2.888 3.255 7.214 8.11 9.317 10.44s4.252 3.143 5.771 3.143H417.5c8.832 0 14.5 5.965 14.5 14.684v176.017z" fill="currentColor"></svg:path>`,
})
export class IonIosReverseCameraOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRewindIcon],svg[ion-ios-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M35.9 249.3L244 129.1c5.4-3.1 12.3.6 12.3 6.7V251l211.3-121.9c5.4-3.1 12.3.6 12.3 6.7v240.3c0 6.1-6.9 9.8-12.3 6.7L256.4 261v115.2c0 6.1-6.9 9.8-12.3 6.7L35.9 262.7c-5.2-3-5.2-10.4 0-13.4z" fill="currentColor"></svg:path>`,
})
export class IonIosRewindIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRewindOutlineIcon],svg[ion-ios-rewind-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M464 155v201.9L280.5 256 464 155m-224 1v200.4L64 256l176-100.2m16-27.8L32 256l224 128V260.8L480 384V128L256 251.2V128z" fill="currentColor"></svg:path>`,
})
export class IonIosRewindOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRibbonIcon],svg[ion-ios-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M254.9 293.4c73 .6 132.3-58.7 131.7-131.8-.6-69.9-59.7-129-129.5-129.6-73-.6-132.3 58.7-131.7 131.8.6 69.9 59.7 129 129.5 129.6zm-3.7-204.1c44.3-2.8 80.9 33.8 78.1 78.2-2.3 36.6-31.9 66.2-68.5 68.6-44.3 2.8-80.9-33.8-78.1-78.2 2.3-36.6 31.9-66.2 68.5-68.6z" fill="currentColor"></svg:path><svg:path d="M256 308.4c-42.8 0-81.4-18.1-108.5-47-1.9-2-5.2-1.7-6.6.7L65.1 394.8c-3.1 5.5.8 12.3 7.2 12.3h80.1c2.9 0 5.6 1.5 7.1 4l39 64.9c3.4 5.7 11.8 5.2 14.6-.8l43-94.6 31.3-68.9c1.4-3-1.2-6.3-4.5-5.7-8.8 1.5-17.7 2.4-26.9 2.4z" fill="currentColor"></svg:path><svg:path d="M364.5 261.3c-14.6 15.5-32.4 28-52.5 36.1-1 .4-1.8 1.1-2.2 2.1l-44.7 97.7c-.5 1.1-.5 2.3 0 3.4l33.9 74.5c2.7 6 11.2 6.5 14.6.8l39-64.9c1.5-2.5 4.2-4 7.1-4h80.1c6.3 0 10.3-6.8 7.2-12.3l-75.8-132.8c-1.5-2.2-4.8-2.6-6.7-.6z" fill="currentColor"></svg:path>`,
})
export class IonIosRibbonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRocketIcon],svg[ion-ios-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M461.8 53.6c-.4-1.7-1.6-3-3.3-3.4-54.4-13.3-180.1 34.1-248.2 102.2-13.3 13.3-24.2 26.4-33.1 39.1-21-1.9-42-.3-59.9 7.5-50.5 22.2-65.2 80.2-69.3 105.1-1 5.9 3.9 11 9.8 10.4l81.1-8.9c.1 7.8.6 14 1.1 18.3.4 4.2 2.3 8.1 5.3 11.1l31.4 31.4c3 3 6.9 4.9 11.1 5.3 4.3.5 10.5 1 18.2 1.1l-8.9 81c-.6 5.9 4.5 10.8 10.4 9.8 24.9-4 83-18.7 105.1-69.2 7.8-17.9 9.4-38.8 7.6-59.7 12.7-8.9 25.9-19.8 39.2-33.1 68.4-68 115.5-190.9 102.4-248zM298.6 213.5c-16.7-16.7-16.7-43.7 0-60.4 16.7-16.7 43.7-16.7 60.4 0 16.7 16.7 16.7 43.7 0 60.4-16.7 16.7-43.7 16.7-60.4 0z" fill="currentColor"></svg:path><svg:path d="M174.5 380.5c-4.2 4.2-11.7 6.6-19.8 8-18.2 3.1-34.1-12.8-31-31 1.4-8.1 3.7-15.6 7.9-19.7l.1-.1c2.3-2.3.4-6.1-2.8-5.7-9.8 1.2-19.4 5.6-26.9 13.1-18 18-19.7 84.8-19.7 84.8s66.9-1.7 84.9-19.7c7.6-7.6 11.9-17.1 13.1-26.9.3-3.2-3.6-5.1-5.8-2.8z" fill="currentColor"></svg:path>`,
})
export class IonIosRocketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRoseIcon],svg[ion-ios-rose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 141.1c-18.9 3.9-36.8 8.2-53.7 12.8-40.5 11-75.5 24.9-105.4 38.2-19.3 8.6-26.2 12.4-51.5 25.9C147 248.9 112 289 112 349c0 67.8 55.6 115 144 115s144-51.2 144-119c0-67.7-61-114.7 16-203.9z" fill="currentColor"></svg:path><svg:path d="M135.4 241.8c12.8-10.5 31.2-23.9 56.1-38.4 6.4-3.8 13.3-7.6 20.6-11.4 11.6-6.1 23.5-11.9 35.8-17.4-9.1-10.1-22.1-19.1-36.6-27C162.6 121.1 96 107.4 96 107.4c41.5 43.7 44.6 96.5 39.4 134.4z" fill="currentColor"></svg:path><svg:path d="M352 77.7s-73.8-.9-125.8 55c0 0 27.7 17.3 42.7 32.3 37.2-15.6 82.3-28.6 115.2-36-6.5-21.7-32.1-51.3-32.1-51.3z" fill="currentColor"></svg:path><svg:path d="M239.7 97C210.3 59.5 176 48 176 48c-15.3 20.8-24.3 38-29 51.7 21.1 5.9 36.5 12.3 62.4 24.7 9.5-10.6 18.1-19.1 30.3-27.4z" fill="currentColor"></svg:path>`,
})
export class IonIosRoseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosRoseOutlineIcon],svg[ion-ios-rose-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M379.769 153.431c-29.777 55.586-17.604 99.504-6.645 139.039C378.717 312.648 384 331.708 384 351.889c0 15.897-2.956 30.873-8.785 44.51-5.727 13.396-14.104 25.212-24.898 35.12C327.169 452.768 294.555 464 256 464s-71.169-11.232-94.316-32.481c-10.795-9.908-19.172-21.725-24.898-35.12-5.829-13.637-8.785-28.612-8.785-44.51 0-31.65 6.92-55.999 21.775-76.626 13.061-18.134 32.646-34.094 63.505-51.749l6.506-3.725c20.197-11.57 27.001-15.467 43.976-23.588 31.845-15.234 66.513-28.387 103.041-39.094a760.861 760.861 0 0 1 12.965-3.676M416 128a816.389 816.389 0 0 0-53.697 13.753c-40.457 11.858-75.509 25.693-105.445 40.015-19.271 9.219-26.236 13.393-51.522 27.859C147.001 243 112 278.926 112 351.889S167.635 480 256 480s144-55.148 144-128.111S338.999 224 416 128z" fill="currentColor"></svg:path><svg:path d="M133.516 123.147c21.432 6.955 47.724 16.977 69.799 29.846 6.385 3.723 12.092 7.493 17.092 11.291a595.825 595.825 0 0 0-16.138 8.833 570.11 570.11 0 0 0-21.243 12.679c-10.484 6.574-20.435 13.308-29.789 20.156-.6-25.918-5.682-54.802-19.721-82.805M96 96c41.475 47.079 44.624 103.891 39.382 144.741 12.772-11.274 31.177-25.734 56.144-41.389a548.613 548.613 0 0 1 20.645-12.322c11.578-6.575 23.538-12.822 35.834-18.765-9.113-10.898-22.07-20.606-36.631-29.095C162.631 110.756 96 96 96 96z" fill="currentColor"></svg:path><svg:path d="M344.629 80.697c5.309 7.227 12.393 17.661 17.66 27.726-29.863 8.433-65.994 21.145-94.967 33.476-5.963-6.235-12.982-12.294-21.006-18.135 17.437-15.757 38.773-27.668 63.652-35.506 14.55-4.583 27.048-6.646 34.661-7.561M352 64s-78.623 2.321-130.681 62.469c16.629 9.903 29.735 20.503 38.959 31.533l2.724 3.257c37.152-16.794 88.131-34.085 120.998-42.009C377.617 95.827 352 64 352 64z" fill="currentColor"></svg:path><svg:path d="M181.229 53.532c9.241 6.122 22.68 16.481 35.999 31.924a199.224 199.224 0 0 0-13.888 13.247c-14.024-7.088-24.951-12.192-36.826-16.602 3.66-8.471 8.581-18.313 14.715-28.569M176 32c-15.256 22.406-25.684 45.299-30.336 59.997 21.111 6.355 35.475 13.215 61.389 26.574 9.505-11.4 20.415-21.626 32.605-30.543C210.342 47.655 176 32 176 32z" fill="currentColor"></svg:path>`,
})
export class IonIosRoseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSadIcon],svg[ion-ios-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256c0 114.7 93.3 208 208 208 114.9 0 208-93.1 208-208 0-114.7-93.3-208-208-208zm-73.9 152.1c14.8-1.2 27 11.1 25.9 25.9-.9 11.6-10.3 21.1-22 22-14.8 1.2-27-11.1-25.9-25.9.9-11.7 10.3-21.1 22-22zm-.7 151.9c-11.5 0-19.3-11.8-14.7-22.4 15-34.5 49.2-58.6 89.3-58.6s74.2 24.1 89.3 58.6c4.6 10.6-3.1 22.4-14.7 22.4 0 0-34.7-4-73.1-4-38.5 0-76.1 4-76.1 4zm148.5-104.1c-14.8 1.2-27-11.1-25.9-25.9.9-11.6 10.3-21.1 22-22 14.8-1.2 27 11.1 25.9 25.9-.9 11.7-10.3 21.1-22 22z" fill="currentColor"></svg:path>`,
})
export class IonIosSadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSaveIcon],svg[ion-ios-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M272 64h-16c-4.4 0-8 3.6-8 8v72c0 4.4 7.6 8 12 8h12c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8z" fill="currentColor"></svg:path><svg:path d="M433.9 130.1L382 78.2c-9-9-21.3-14.2-34.1-14.2h-28c-8.8 0-16 7.3-16 16.2v80c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16v-80c0-8.8-7.2-16.2-16-16.2H96c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V164c0-12.7-5.1-24.9-14.1-33.9zM322 400.1c0 8.8-8 16-17.8 16H143.8c-9.8 0-17.8-7.2-17.8-16v-96c0-8.8 8-16 17.8-16h160.4c9.8 0 17.8 7.2 17.8 16v96z" fill="currentColor"></svg:path>`,
})
export class IonIosSaveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSchoolIcon],svg[ion-ios-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96.9 270.3V363c0 2.9 1.5 5.5 4 7l132 75.9c5.3 3.1 12-.8 12-7v-93.8c0-2.9-1.5-5.5-4-7l-132-74.9c-5.4-2.9-12 1-12 7.1z" fill="currentColor"></svg:path><svg:path d="M280.9 445.9L413 370c2.5-1.4 4-4.1 4-7v-93.7c0-6.2-6.6-10-12-7l-132 75.9c-2.5 1.4-4 4.1-4 7V439c-.1 6.1 6.6 10 11.9 6.9z" fill="currentColor"></svg:path><svg:path d="M249 65.1L37 188.9c-5.4 3.1-5.4 10.8 0 13.9l212 117.8c4.9 2.8 11 2.8 15.9 0L453 212.9c5.3-3.1 7 .8 7 7v153.4c0 6.8 3.9 10 11 10 4.4 0 10-3.2 10-10V201.5c0-2.9-1.5-5.5-4-7L264.9 65.1c-4.9-2.8-11-2.8-15.9 0z" fill="currentColor"></svg:path>`,
})
export class IonIosSchoolIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSearchIcon],svg[ion-ios-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z" fill="currentColor"></svg:path>`,
})
export class IonIosSearchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSearchStrongIcon],svg[ion-ios-search-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M344.5 298c15-23.6 23.8-51.6 23.8-81.7 0-84.1-68.1-152.3-152.1-152.3C132.1 64 64 132.2 64 216.3c0 84.1 68.1 152.3 152.1 152.3 30.5 0 58.9-9 82.7-24.4l6.9-4.8L414.3 448l33.7-34.3-108.5-108.6 5-7.1zm-43.1-166.8c22.7 22.7 35.2 52.9 35.2 85s-12.5 62.3-35.2 85c-22.7 22.7-52.9 35.2-85 35.2s-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-85s12.5-62.3 35.2-85c22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2z" fill="currentColor"></svg:path>`,
})
export class IonIosSearchStrongIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSendIcon],svg[ion-ios-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z" fill="currentColor"></svg:path>`,
})
export class IonIosSendIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSettingsIcon],svg[ion-ios-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416.3 256c0-21 13.1-38.9 31.7-46.1-4.9-20.5-13-39.7-23.7-57.1-6.4 2.8-13.2 4.3-20.1 4.3-12.6 0-25.2-4.8-34.9-14.4-14.9-14.9-18.2-36.8-10.2-55-17.3-10.7-36.6-18.8-57-23.7C295 82.5 277 95.7 256 95.7S217 82.5 209.9 64c-20.5 4.9-39.7 13-57.1 23.7 8.1 18.1 4.7 40.1-10.2 55-9.6 9.6-22.3 14.4-34.9 14.4-6.9 0-13.7-1.4-20.1-4.3C77 170.3 68.9 189.5 64 210c18.5 7.1 31.7 25 31.7 46.1 0 21-13.1 38.9-31.6 46.1 4.9 20.5 13 39.7 23.7 57.1 6.4-2.8 13.2-4.2 20-4.2 12.6 0 25.2 4.8 34.9 14.4 14.8 14.8 18.2 36.8 10.2 54.9 17.4 10.7 36.7 18.8 57.1 23.7 7.1-18.5 25-31.6 46-31.6s38.9 13.1 46 31.6c20.5-4.9 39.7-13 57.1-23.7-8-18.1-4.6-40 10.2-54.9 9.6-9.6 22.2-14.4 34.9-14.4 6.8 0 13.7 1.4 20 4.2 10.7-17.4 18.8-36.7 23.7-57.1-18.4-7.2-31.6-25.1-31.6-46.2zm-159.4 79.9c-44.3 0-80-35.9-80-80s35.7-80 80-80 80 35.9 80 80-35.7 80-80 80z" fill="currentColor"></svg:path>`,
})
export class IonIosSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSettingsStrongIcon],svg[ion-ios-settings-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 376h283.35c6.186-14.112 20.281-24 36.65-24s30.465 9.888 36.65 24H480v32h-91.35c-6.186 14.112-20.281 24-36.65 24s-30.465-9.888-36.65-24H32" fill="currentColor"></svg:path><svg:path d="M32 240h91.35c6.186-14.112 20.281-24 36.65-24s30.465 9.888 36.65 24H480v32H196.65c-6.186 14.112-20.281 24-36.65 24s-30.465-9.888-36.65-24H32" fill="currentColor"></svg:path><svg:path d="M32 104h283.35c6.186-14.112 20.281-24 36.65-24s30.465 9.888 36.65 24H480v32h-91.35c-6.186 14.112-20.281 24-36.65 24s-30.465-9.888-36.65-24H32" fill="currentColor"></svg:path>`,
})
export class IonIosSettingsStrongIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosShareIcon],svg[ion-ios-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M376 176H269v146.6c0 7-5.4 13-12.4 13.4-7.5.4-13.6-5.6-13.6-13V176H136c-22 0-40 18-40 40v208c0 22 18 40 40 40h240c22 0 40-18 40-40V216c0-22-18-40-40-40z" fill="currentColor"></svg:path><svg:path d="M269 92.1l47.9 47.2c5.1 5 13.3 5 18.4-.1 5-5.1 5-13.3-.1-18.4l-70-69c-2.5-2.4-5.8-3.7-9.1-3.7-1.7 0-3.4.3-5 1-1.5.6-2.9 1.6-4.1 2.7l-70 69c-5.1 5-5.2 13.3-.1 18.4 5 5.1 13.3 5.2 18.4.1L243 92.1V176h26V92.1z" fill="currentColor"></svg:path>`,
})
export class IonIosShareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosShareAltIcon],svg[ion-ios-share-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M444.7 230.4l-141.1-132c-1.7-1.6-3.3-2.5-5.6-2.4-4.4.2-10 3.3-10 8v66.2c0 2-1.6 3.8-3.6 4.1C144.1 195.8 85 300.8 64.1 409.8c-.8 4.3 5 8.3 7.7 4.9 51.2-64.5 113.5-106.6 212-107.4 2.2 0 4.2 2.6 4.2 4.8v65c0 7 9.3 10.1 14.5 5.3l142.1-134.3c2.6-2.4 3.4-5.2 3.5-8.4-.1-3.2-.9-6.9-3.4-9.3z" fill="currentColor"></svg:path>`,
})
export class IonIosShareAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosShirtIcon],svg[ion-ios-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M461.8 181.7c1.3-1.6 1.2-3.8-.2-5.3-11.5-12.1-61.3-63.7-89.1-83.7C352 78 332 64 310 64s-22 8-54 8-32-8-54-8-42 14-62.5 28.7c-27.8 20-77.6 71.6-89.1 83.7-1.4 1.5-1.5 3.7-.2 5.3l61.7 64c2.4 2.9 7.1 1.2 7.1-2.5v-44.9c0-4.5 3.2-8.5 7.6-9.2 5.6-.9 10.4 3.5 10.4 8.9v242c0 4.4 3.6 8 8 8h222c4.4 0 8-3.6 8-8V198.3c0-4.5 3.2-8.5 7.6-9.2 5.6-.9 10.4 3.5 10.4 8.9v45.2c0 3.8 4.7 5.4 7.1 2.5l61.7-64zM256 143c-30 0-54-12.7-54-36 0-30 24-10.7 54-10.7 29.8 0 54-19.3 54 10.7 0 23.3-24.2 36-54 36z" fill="currentColor"></svg:path>`,
})
export class IonIosShirtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosShuffleIcon],svg[ion-ios-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M405.9 288.1c-2.6-2.6-6.2-4.1-9.9-4.1s-7.2 1.4-9.9 4.1c-2.7 2.6-4.1 6.2-4.1 9.9s1.5 7.2 4.1 9.9l16.3 16.2h-75.5l-124-155-.1-.1c-2.6-3.1-6.7-5-10.8-5H78c-7.7 0-14 6.3-14 14s6.3 14 14 14h107.4l52.5 66-52.5 66H78c-7.7 0-14 6.3-14 14s6.3 14 14 14h114c4.1 0 8-1.8 10.7-5l.1-.1 53.2-66.8 53.2 66.8.1.1c2.7 3.2 6.6 5 10.7 5h84.4l-16.3 16.2c-2.7 2.6-4.1 6.1-4.1 9.9 0 3.7 1.5 7.2 4.1 9.9 2.6 2.6 6.2 4.1 9.9 4.1s7.2-1.4 9.9-4.1l33.6-33.4c4.2-4.1 6.5-9.6 6.5-15.5s-2.3-11.4-6.5-15.5l-35.6-35.5z" fill="currentColor"></svg:path><svg:path d="M279.4 235.4c1.1 1.4 2.8 2.1 4.6 2.1h.1c1.8 0 3.5-.8 4.6-2.2l37.9-47.3h75.8l-16.3 16.2c-2.7 2.6-4.1 6.1-4.1 9.9 0 3.7 1.5 7.2 4.1 9.9 2.6 2.6 6.2 4.1 9.9 4.1s7.2-1.4 9.9-4.1l35.6-35.4c4.2-4.1 6.5-9.7 6.5-15.5 0-5.9-2.3-11.4-6.5-15.5l-33.6-33.4c-2.6-2.6-6.2-4.1-9.9-4.1s-7.2 1.4-9.9 4.1c-2.7 2.6-4.1 6.2-4.1 9.9s1.5 7.2 4.1 9.9l16.3 16.2H320c-4.1 0-8 1.8-10.7 5l-.1.1-40.3 50.2c-1.8 2.2-1.8 5.4.1 7.6l10.4 12.3z" fill="currentColor"></svg:path>`,
})
export class IonIosShuffleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosShuffleStrongIcon],svg[ion-ios-shuffle-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M365.419 152h13.81l-50.738 41.584 20.308 24.572L448 136l-99.136-84-20.368 24.978L379.679 120h-14.26c-103.727 0-146.494 79.62-180.857 143.727-1.362 2.542-2.715 4.99-4.06 7.488l-.059.095c-1.591 2.953-3.176 6.114-4.76 9.038-35.562 65.63-66.893 83.214-111.684 83.641V396c37.625 0 57.563-9.451 72.236-18.178 24.935-14.831 47.042-44.559 67.583-82.467 1.541-2.844 3.083-5.752 4.632-8.626l.225-.438c1.459-2.711 2.922-5.273 4.39-8.014C246.369 216.113 280.808 152 365.419 152z" fill="currentColor"></svg:path><svg:path d="M348.798 293.844l-20.308 24.572L379.229 360h-13.81c-70.728 0-106.396-44.801-135.649-95.812l-17.648 32.618C243.556 346.626 287.116 392 365.419 392h14.26l-51.183 43.022L348.864 460 448 376l-99.202-82.156z" fill="currentColor"></svg:path><svg:path d="M175.684 231.652c1.584 2.924 3.169 6.085 4.76 9.038l.059.095c1.218 2.262 2.442 4.49 3.675 6.777 5.82-10.73 11.98-21.748 18.695-32.649-20.273-37.079-42.083-66.132-66.636-80.735C121.563 125.451 101.625 116 64 116v32.011c44.791.427 76.122 18.011 111.684 83.641z" fill="currentColor"></svg:path>`,
})
export class IonIosShuffleStrongIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSkipBackwardIcon],svg[ion-ios-skip-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M175 100v137.8L403.9 98.1c5.3-3.1 12.1.7 12.1 6.9v302c0 6.2-6.7 10-12.1 6.9L175 274.2V412c0 2.2-1.8 4-4 4h-71c-2.2 0-4-1.8-4-4V100c0-2.2 1.8-4 4-4h71c2.2 0 4 1.8 4 4z" fill="currentColor"></svg:path>`,
})
export class IonIosSkipBackwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSkipForwardIcon],svg[ion-ios-skip-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M337 100v137.8L108.1 98.1C102.7 95 96 98.8 96 105v302c0 6.2 6.7 10 12.1 6.9L337 274.2V412c0 2.2 1.8 4 4 4h71c2.2 0 4-1.8 4-4V100c0-2.2-1.8-4-4-4h-71c-2.2 0-4 1.8-4 4z" fill="currentColor"></svg:path>`,
})
export class IonIosSkipForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSkipbackwardIcon],svg[ion-ios-skipbackward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 96v320h79V274.2L416 416V96L175 237.8V96H96z" fill="currentColor"></svg:path>`,
})
export class IonIosSkipbackwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSkipbackwardOutlineIcon],svg[ion-ios-skipbackward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 96v320h79V274.2L416 416V96L175 237.8V96H96zm79.6 160l7.6-4.4L400 124v264L183.1 260.4l-7.5-4.4zM112 112h47v288h-47V112z" fill="currentColor"></svg:path>`,
})
export class IonIosSkipbackwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSkipforwardIcon],svg[ion-ios-skipforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M337 96v141.8L96 96v320l241-141.8V416h79V96h-79z" fill="currentColor"></svg:path>`,
})
export class IonIosSkipforwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSkipforwardOutlineIcon],svg[ion-ios-skipforward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M337 96v141.8L96 96v320l241-141.8V416h79V96h-79zm-8.1 164.4L112 388V124l216.9 127.6 7.6 4.4-7.6 4.4zM400 400h-47V112h47v288z" fill="currentColor"></svg:path>`,
})
export class IonIosSkipforwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSnowIcon],svg[ion-ios-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M440.5 345.8L408.1 327c11.8-12.3 26-18.2 26.2-18.3 7.5-3 11.4-11.4 8.9-19.1-1.9-5.9-7.4-9.8-13.5-9.8-1.9 0-3.7.4-5.5 1.1-1 .4-24.4 10-41.9 31.2l-96.3-56 96.3-56c17.5 21.2 40.8 30.8 41.9 31.2 1.8.7 3.6 1.1 5.5 1.1 6.1 0 11.6-4 13.5-9.8 2.5-7.7-1.4-16.1-8.9-19.1-.1-.1-14.3-6-26.2-18.3l32.4-18.8c7.2-4.2 9.6-13.4 5.5-20.6-2.7-4.7-7.7-7.6-13.1-7.6-2.6 0-5.3.7-7.6 2L393.1 159c-4.5-16.2-2.7-31.4-2.6-32 1.1-8.1-4.1-15.6-12-17.3-1-.2-2-.3-3-.3-7.1 0-13 5.2-14.1 12.4-.2 1.1-3.6 26 6.1 52.2l-96 56v-99.2c26.9-4.7 46.8-20.2 47.7-20.9 3.1-2.5 5.1-6 5.4-10 .3-4-.9-7.8-3.6-10.8-2.9-3.2-7-5.1-11.4-5.1-3.4 0-6.8 1.2-9.5 3.3-.1.1-12.2 9.4-28.6 13.6V63.1c0-8.2-7.1-15.1-15.5-15.1s-15.5 6.9-15.5 15.1v37.5c-16.3-4.2-28.4-13.5-28.6-13.6-2.7-2.1-6-3.3-9.5-3.3-4.4 0-8.5 1.9-11.4 5.1-2.7 3-4 7-3.6 10.9.3 3.9 2.3 7.4 5.4 9.9.9.7 20.8 16.2 47.7 20.9v99.2l-96-56c9.6-26 6.2-51.1 6-52.2-1-7.2-6.9-12.4-14-12.4-1 0-2 .1-3 .3-7.9 1.6-13.2 9.3-12 17.3 0 .2 2 15.5-2.6 31.9L86.6 140c-2.3-1.3-4.9-2-7.6-2-5.4 0-10.4 2.9-13.1 7.6-4.1 7.2-1.7 16.5 5.5 20.6l32.4 18.8c-11.7 12.1-25.7 18.1-26.2 18.3-7.5 3-11.4 11.4-8.9 19.1 1.9 5.9 7.4 9.8 13.5 9.8 1.9 0 3.7-.4 5.5-1.1 1-.4 24.4-10 41.9-31.2l96.3 56-96.3 56c-17.5-21.2-40.8-30.8-41.9-31.2-1.8-.7-3.6-1.1-5.5-1.1-6.1 0-11.6 4-13.5 9.8-2.5 7.7 1.4 16 8.9 19.1.5.2 14.5 6.2 26.2 18.3l-32.4 18.8c-7.2 4.2-9.6 13.4-5.5 20.6 2.7 4.7 7.7 7.6 13.1 7.6 2.6 0 5.3-.7 7.6-2l32.3-18.8c4.6 16.5 2.6 31.8 2.6 32-1.2 8 4.1 15.7 12 17.3 1 .2 2 .3 3 .3 7.1 0 13-5.2 14.1-12.4.2-1.1 3.6-26-6.1-52.2l96-56v99.2c-26.9 4.7-46.8 20.2-47.7 20.9-3.1 2.5-5.1 6-5.4 10-.3 4 .9 7.8 3.6 10.8 2.9 3.2 7 5.1 11.4 5.1 3.4 0 6.8-1.2 9.5-3.3.1-.1 12.3-9.4 28.6-13.6v37.5c0 8.2 7.1 15.1 15.5 15.1s15.5-6.9 15.5-15.1v-37.5c16.3 4.2 28.4 13.5 28.6 13.6 2.7 2.1 6.1 3.3 9.5 3.3 4.4 0 8.5-1.9 11.4-5.1 2.7-3 4-7 3.6-10.9-.3-3.9-2.3-7.4-5.4-9.9-.9-.7-20.8-16.2-47.7-20.9V282l96 56c-9.6 26-6.2 51.1-6 52.2 1 7.2 6.9 12.4 14 12.4 1 0 2-.1 3-.3 7.9-1.6 13.1-9.2 12-17.3-.1-.5-1.9-15.7 2.6-32l32.2 18.8c2.3 1.3 4.9 2 7.6 2 5.4 0 10.4-2.9 13.1-7.6 4.1-6.9 1.7-16.2-5.5-20.4z" fill="currentColor"></svg:path>`,
})
export class IonIosSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSnowyIcon],svg[ion-ios-snowy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M379.9 317l-28.7-16.3c6.1-5.8 13-9.7 20.7-12.3 4.3-1.4 6.5-5.9 5.1-10.1-1.4-4.2-6-6.5-10.3-5.1-11.6 3.8-22.2 11-30.1 19.2L272.3 256l64.2-36.4c8.4 9.1 18.6 15.4 30.2 19.2 4.3 1.4 8.9-.8 10.3-5 1.4-4.2-.8-8.7-5.1-10.1-7.8-2.6-14.8-6.5-20.9-12.3l28.8-16.3c3.9-2.2 5.2-7.1 3-10.9s-7.2-5.1-11.1-2.9l-28.7 16c-2-8.1-2.1-15.9-.5-23.8.9-4.3-2-8.5-6.4-9.4-4.4-.9-8.7 1.9-9.6 6.2-2.4 11.8-1.4 24.4 1.8 35.2L264 242.2v-73c11-2.7 22.4-8.1 31.5-16.1 3.3-2.9 3.6-8 .7-11.3-2.9-3.3-7.9-3.6-11.3-.7-6 5.3-12.9 9.2-20.9 11.5V120c0-4.4-3.6-8-8-8s-8 3.6-8 8v32.7c-8-2.3-14.8-6.2-20.9-11.6-3.3-2.9-8.4-2.6-11.3.7-2.9 3.3-2.6 8.4.7 11.3 9.1 8 19.5 13.5 31.5 16.1v73l-64.5-36.6c3.2-10.9 4.2-23.5 1.9-35.2-.9-4.3-5.2-7.1-9.6-6.2-4.4.9-7.2 5-6.4 9.4 1.6 7.9 1.6 15.7-.5 23.8L140.3 181c-3.9-2.2-8.9-.9-11.1 2.9-2.2 3.8-.9 8.7 3 10.9l28.8 16.3c-6.1 5.8-13 9.7-20.8 12.3-4.3 1.4-6.5 6-5.1 10.1 1.4 4.2 6.1 6.4 10.3 5 11.6-3.9 21.8-10.1 30.2-19.2l64.3 36.5-64.4 36.5c-7.9-8.2-18.6-15.3-30.1-19.2-4.3-1.4-8.8.9-10.3 5.1-1.4 4.2.8 8.7 5.1 10.1 7.7 2.6 14.6 6.5 20.7 12.3l-28.7 16.3c-3.9 2.2-5.2 7.1-3 10.9s7.2 5.1 11.1 2.9l28.8-16.3c2.1 8.1 2.1 15.9.4 23.9-.9 4.3 2 8.5 6.4 9.4 4.4.9 8.7-1.9 9.6-6.3 2.4-11.8 1.9-23.6-1.9-35.3l64.5-36.6v73.1c-12 2.6-22.4 8.1-31.5 16.1-3.3 2.9-3.6 8-.7 11.3 2.9 3.3 7.9 3.6 11.3.7 6.1-5.4 12.9-9.3 20.9-11.6V392c0 4.4 3.6 8 8 8s8-3.6 8-8v-32.6c8 2.3 14.8 6.2 20.9 11.5 3.3 2.9 8.3 2.6 11.3-.7 2.9-3.3 2.6-8.4-.7-11.3-9-7.9-20.4-13.4-31.4-16.1v-73.1l64.4 36.5c-3.8 11.7-4.2 23.5-1.8 35.3.9 4.3 5.2 7.1 9.6 6.3 4.4-.9 7.3-5.1 6.4-9.4-1.6-8-1.6-15.8.4-23.9l28.8 16.3c3.9 2.2 8.9.9 11.1-2.9 2.1-3.8.7-8.7-3.2-10.9z" fill="currentColor"></svg:path>`,
})
export class IonIosSnowyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSpeedometerIcon],svg[ion-ios-speedometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 64C132.3 64 32 164.2 32 287.9c0 57 21.3 109 56.3 148.5 1.1 1.2 2.1 2.4 3.2 3.5C96.3 445 103 448 110 448c7.1 0 13.8-3 18.6-8.2 31.6-34.4 77-55.9 127.4-55.9s95.8 21.6 127.4 55.9c4.8 5.2 11.5 8.2 18.6 8.2 7 0 13.7-2.9 18.5-8.1 1.1-1.2 2.1-2.3 3.2-3.5 35-39.5 56.3-91.5 56.3-148.5C480 164.2 379.7 64 256 64zm-14 45.9c0-7.7 6.3-14 14-14s14 6.3 14 14v36c0 7.7-6.3 14-14 14s-14-6.3-14-14v-36zm-128 192H78c-7.7 0-14-6.3-14-14s6.3-14 14-14h36c7.7 0 14 6.3 14 14s-6.3 14-14 14zm51.5-104.5c-5.4 5.4-14.4 5.4-19.8 0L120.2 172c-5.4-5.4-5.4-14.4 0-19.8s14.4-5.4 19.8 0l25.5 25.5c5.4 5.4 5.4 14.3 0 19.7zm160.6 34.5l-47.5 75.5c-1.9 2.6-4.3 5.1-7 7-13.5 9.7-32.3 6.5-42-7s-6.5-32.3 7-42l75.5-47.5c3.4-2.4 8.1-2.5 11.7 0 4.5 3.2 5.5 9.5 2.3 14zm40.2-34.5c-5.4 5.4-14.4 5.4-19.8 0s-5.4-14.4 0-19.8l25.5-25.5c5.4-5.4 14.4-5.4 19.8 0s5.4 14.4 0 19.8l-25.5 25.5zM434 301.9h-36c-7.7 0-14-6.3-14-14s6.3-14 14-14h36c7.7 0 14 6.3 14 14s-6.3 14-14 14z" fill="currentColor"></svg:path>`,
})
export class IonIosSpeedometerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSpeedometerOutlineIcon],svg[ion-ios-speedometer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 64C132.288 64 32 164.226 32 287.938c0 56.975 21.283 108.97 56.316 148.5 3.551 4.006 7.241 7.82 11.066 11.562 3.059-3.49 6.232-6.834 9.539-10.141.48-.48.972-.947 1.456-1.422 18.78-18.426 40.521-32.949 64.664-43.161 25.633-10.842 52.871-16.339 80.958-16.339s55.325 5.497 80.958 16.339c24.144 10.212 45.884 24.735 64.664 43.161.484.475.976.941 1.456 1.422 3.307 3.307 6.48 6.65 9.539 10.141 3.825-3.742 7.516-7.557 11.066-11.562 35.033-39.53 56.316-91.525 56.316-148.5C480 164.226 379.712 64 256 64zm191.661 305.177c-8.663 20.481-20.429 39.092-35.044 55.776-40.39-39.51-95.653-63.945-156.617-63.945s-116.228 24.33-156.617 63.84c-14.615-16.685-26.381-35.172-35.044-55.653a206.047 206.047 0 0 1-16.173-72.694H79.5v-16H48.166c.945-25 6.363-50.048 16.173-73.239 9.372-22.157 22.376-42.431 38.692-60.11l26.932 26.893 5.496-5.538 5.277-5.264-.02-.027.547-.552-26.951-26.984c17.862-16.647 38.004-29.894 60.479-39.4a206.128 206.128 0 0 1 72.708-16.174V117.5h16V80.104c26 .945 50.017 6.363 73.208 16.173 22.437 9.49 42.921 22.706 60.762 39.312l-26.975 27.069.577.547-.004.019 5.285 5.246 5.5 5.503 27.026-27.057c16.356 17.703 29.392 38.148 38.78 60.345 9.81 23.191 15.229 48.239 16.174 73.239H431.5v16h32.334a205.96 205.96 0 0 1-16.173 72.677z" fill="currentColor"></svg:path><svg:path d="M368.479 174.545l-85.484 73.727a47.72 47.72 0 0 0-26.994-8.334c-26.467 0-48 21.533-48 48 0 10.479 3.385 20.178 9.106 28.08l-11.948 11.948 11.312 11.313 12.033-12.033c7.795 5.469 17.273 8.691 27.496 8.691 26.467 0 48-21.533 48-48 0-10.387-3.327-20.005-8.956-27.868l74.849-84.11-1.414-1.414zM256 319.938c-17.673 0-32-14.326-32-32 0-17.673 14.327-32 32-32s32 14.327 32 32c0 17.673-14.327 32-32 32z" fill="currentColor"></svg:path>`,
})
export class IonIosSpeedometerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSquareIcon],svg[ion-ios-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M388 416H124c-15.4 0-28-12.6-28-28V124c0-15.4 12.6-28 28-28h264c15.4 0 28 12.6 28 28v264c0 15.4-12.6 28-28 28z" fill="currentColor"></svg:path>`,
})
export class IonIosSquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSquareOutlineIcon],svg[ion-ios-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M388 96H124c-15.4 0-28 12.6-28 28v264c0 15.4 12.6 28 28 28h264c15.4 0 28-12.6 28-28V124c0-15.4-12.6-28-28-28zm0 284c0 4.4-3.6 8-8 8H132c-4.4 0-8-3.6-8-8V132c0-4.4 3.6-8 8-8h248c4.4 0 8 3.6 8 8v248z" fill="currentColor"></svg:path>`,
})
export class IonIosSquareOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosStarIcon],svg[ion-ios-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z" fill="currentColor"></svg:path>`,
})
export class IonIosStarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosStarHalfIcon],svg[ion-ios-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-47.4 35.2l-79.8 57.3c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2-.1-.1c-10-7-16.1-18.3-16.1-30.5V113.3c0-2.2 3.1-2.7 3.8-.6l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.4 7.2z" fill="currentColor"></svg:path>`,
})
export class IonIosStarHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosStarOutlineIcon],svg[ion-ios-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-127.2 92.5c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2-5.7 0-11.4 1.7-16.2 5.2l-77.4 55.1c-3.2 2.3-7.4-.9-6.1-4.6l30.1-87.7c4-11.8-.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3 2.3-7.3H196c12 0 22.7-7.7 26.5-19.1l29.6-88.2c1.2-3.6 6.4-3.6 7.6 0l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.3 7.2l-79.6 57.5z" fill="currentColor"></svg:path>`,
})
export class IonIosStarOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosStatsIcon],svg[ion-ios-stats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M184 448h48c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v368c0 4.4 3.6 8 8 8z" fill="currentColor"></svg:path><svg:path d="M88 448h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8H88c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8z" fill="currentColor"></svg:path><svg:path d="M280.1 448h47.8c4.5 0 8.1-3.6 8.1-8.1V232.1c0-4.5-3.6-8.1-8.1-8.1h-47.8c-4.5 0-8.1 3.6-8.1 8.1v207.8c0 4.5 3.6 8.1 8.1 8.1z" fill="currentColor"></svg:path><svg:path d="M368 136.1v303.8c0 4.5 3.6 8.1 8.1 8.1h47.8c4.5 0 8.1-3.6 8.1-8.1V136.1c0-4.5-3.6-8.1-8.1-8.1h-47.8c-4.5 0-8.1 3.6-8.1 8.1z" fill="currentColor"></svg:path>`,
})
export class IonIosStatsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosStopwatchIcon],svg[ion-ios-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M415.9 143.7c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3L413 95.6c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l25.5 25.5z" fill="currentColor"></svg:path><svg:path d="M84.8 143.7c3.1 3.1 8.2 3.1 11.3 0l25.5-25.5c3.1-3.1 3.1-8.2 0-11.3l-11.3-11.3c-3.1-3.1-8.2-3.1-11.3 0L73.5 121c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.4z" fill="currentColor"></svg:path><svg:path d="M280 81.5V64c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v17.5C137.3 93.3 64 174.1 64 272c0 106 86 192 192 192s192-86 192-192c0-97.9-73.3-178.7-168-190.5zm-10 219.3V320c0 7.7-6.3 14-14 14s-14-6.3-14-14v-19.2c-10.7-5.2-18-16.1-18-28.8s7.3-23.6 18-28.8V144c0-7.7 6.3-14 14-14s14 6.3 14 14v99.2c10.7 5.2 18 16.1 18 28.8s-7.3 23.6-18 28.8z" fill="currentColor"></svg:path>`,
})
export class IonIosStopwatchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosStopwatchOutlineIcon],svg[ion-ios-stopwatch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M397.6 146.7l-1.8-1.7h18.4l8.5 7.8 22.5-22.8-40.8-40.3-23.2 22.3 8.8 9.2v18.6l-5-4.7c-31.3-28.3-70-45.2-113-48.9V48h-32v38h-2c-43.7 3-85 22.5-116 53v-17.8l8.9-9.2L108 89.8 67.2 130l22.5 22.8 8.5-7.8H116c-.3 0-.7.7-1 1.1-32.8 35.1-51 80.9-51 128.5C64 379 150.1 464 256.1 464 361.9 464 448 379.1 448 274.7c0-47.6-18-93.1-50.4-128zm-141.3 299c-95.5 0-173.1-76.7-173.1-170.9 0-94.3 77.7-170.9 173.1-170.9 95.5 0 173.1 76.7 173.1 170.9.1 94.2-77.6 170.9-173.1 170.9z" fill="currentColor"></svg:path><svg:path d="M264 257.3V128h-16v129.4c-12.5 4.3-24 16.5-24 30.3 0 14.7 10 27 24 30.5l8 17.8 8-17.8c14-3.5 24-15.8 24-30.5 0-14.5-10.5-26.7-24-30.4z" fill="currentColor"></svg:path>`,
})
export class IonIosStopwatchOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSubwayIcon],svg[ion-ios-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 32H160c-35.2 0-64 28.8-64 64v232c0 35.2 28.8 64 64 64h192c35.2 0 64-28.8 64-64V96c0-35.2-28.8-64-64-64zM200 56h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H200c-4.4 0-8-3.6-8-8s3.6-8 8-8zm-32 304c-15.5 0-28-12.5-28-28s12.5-28 28-28 28 12.5 28 28-12.5 28-28 28zm176 0c-15.5 0-28-12.5-28-28s12.5-28 28-28 28 12.5 28 28-12.5 28-28 28zm40-152c0 8.8-7.2 16-16 16H144.2c-8.8 0-16.2-7.2-16.2-16v-95.8c0-8.8 7.4-16.2 16.2-16.2H368c8.8 0 16 7.4 16 16.2V208z" fill="currentColor"></svg:path><svg:path d="M393.7 455.9l-50-48c-5.6-5.4-14.4-5.2-19.8.4-5.4 5.6-5.2 14.4.4 19.8l6.1 5.9H181.5l6.1-5.9c5.6-5.4 5.8-14.2.4-19.8-5.4-5.6-14.2-5.8-19.8-.4l-50 48c-5.6 5.4-5.8 14.2-.4 19.8 2.7 2.9 6.4 4.3 10.1 4.3 3.5 0 7-1.3 9.7-3.9l14.7-14.1h207.2l14.7 14.1c2.7 2.6 6.2 3.9 9.7 3.9 3.7 0 7.4-1.4 10.1-4.3 5.5-5.6 5.3-14.4-.3-19.8z" fill="currentColor"></svg:path>`,
})
export class IonIosSubwayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSunnyIcon],svg[ion-ios-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 387c-8.5 0-15.4 6.9-15.4 15.4v46.2c0 8.5 6.9 15.4 15.4 15.4s15.4-6.9 15.4-15.4v-46.2c0-8.5-6.9-15.4-15.4-15.4z" fill="currentColor"></svg:path><svg:path d="M256 48c-8.5 0-15.4 6.9-15.4 15.4v46.2c0 8.5 6.9 15.4 15.4 15.4s15.4-6.9 15.4-15.4V63.4c0-8.5-6.9-15.4-15.4-15.4z" fill="currentColor"></svg:path><svg:path d="M125 256c0-8.5-6.9-15.4-15.4-15.4H63.4c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h46.2c8.5 0 15.4-6.9 15.4-15.4z" fill="currentColor"></svg:path><svg:path d="M448.6 240.6h-46.2c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h46.2c8.5 0 15.4-6.9 15.4-15.4s-6.9-15.4-15.4-15.4z" fill="currentColor"></svg:path><svg:path d="M152.5 344.1c-4.1 0-8 1.6-10.9 4.5l-32.7 32.7c-2.9 2.9-4.5 6.8-4.5 10.9s1.6 8 4.5 10.9c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5l32.7-32.7c6-6 6-15.8 0-21.8-2.9-2.9-6.8-4.5-10.9-4.5z" fill="currentColor"></svg:path><svg:path d="M359.5 167.9c4.1 0 8-1.6 10.9-4.5l32.7-32.7c2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5l-32.7 32.7c-2.9 2.9-4.5 6.8-4.5 10.9s1.6 8 4.5 10.9c2.9 2.9 6.8 4.5 10.9 4.5z" fill="currentColor"></svg:path><svg:path d="M130.7 108.9c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5-2.9 2.9-4.5 6.8-4.5 10.9 0 4.1 1.6 8 4.5 10.9l32.7 32.7c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5 2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9l-32.7-32.7z" fill="currentColor"></svg:path><svg:path d="M370.4 348.6c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5-6 6-6 15.8 0 21.8l32.7 32.7c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5 2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9l-32.7-32.7z" fill="currentColor"></svg:path><svg:path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96z" fill="currentColor"></svg:path>`,
})
export class IonIosSunnyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSunnyOutlineIcon],svg[ion-ios-sunny-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M247 96h18v56h-18z" fill="currentColor"></svg:path><svg:path d="M247 356h18v60h-18z" fill="currentColor"></svg:path><svg:path d="M360 247h56v18h-56z" fill="currentColor"></svg:path><svg:path d="M96 247h60v18H96z" fill="currentColor"></svg:path><svg:path transform="rotate(134.999 347.405 341.317)" d="M339 317.4h16.8v47.8H339z" fill="currentColor"></svg:path><svg:path transform="rotate(134.999 170.67 164.582)" d="M162.2 140.7H179v47.9h-16.8z" fill="currentColor"></svg:path><svg:path transform="rotate(45.001 347.406 164.562)" d="M339 140.7h16.8v47.8H339z" fill="currentColor"></svg:path><svg:path transform="rotate(45.009 170.67 341.27)" d="M162.2 317.4H179v47.9h-16.8z" fill="currentColor"></svg:path><svg:path d="M256 331.8c-41.8 0-75.8-34-75.8-75.8s34-75.8 75.8-75.8 75.8 34 75.8 75.8-34 75.8-75.8 75.8zm0-134.7c-32.5 0-58.9 26.4-58.9 58.9s26.4 58.9 58.9 58.9 58.9-26.4 58.9-58.9-26.4-58.9-58.9-58.9z" fill="currentColor"></svg:path>`,
})
export class IonIosSunnyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSwapIcon],svg[ion-ios-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M388.9 266.3c-5.1-5-5.2-13.3-.1-18.4L436 200H211c-7.2 0-13-5.8-13-13s5.8-13 13-13h224.9l-47.2-47.9c-5-5.1-5-13.3.1-18.4 5.1-5 13.3-5 18.4.1l69 70c1.1 1.2 2.1 2.5 2.7 4.1.7 1.6 1 3.3 1 5 0 3.4-1.3 6.6-3.7 9.1l-69 70c-5 5.2-13.2 5.3-18.3.3z" fill="currentColor"></svg:path><svg:path d="M123.1 404.3c5.1-5 5.2-13.3.1-18.4L76.1 338H301c7.2 0 13-5.8 13-13s-5.8-13-13-13H76.1l47.2-47.9c5-5.1 5-13.3-.1-18.4-5.1-5-13.3-5-18.4.1l-69 70c-1.1 1.2-2.1 2.5-2.7 4.1-.7 1.6-1 3.3-1 5 0 3.4 1.3 6.6 3.7 9.1l69 70c5 5.2 13.2 5.3 18.3.3z" fill="currentColor"></svg:path>`,
})
export class IonIosSwapIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSwitchIcon],svg[ion-ios-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="144" cy="368" r="42" fill="currentColor"></svg:circle><svg:path d="M367.5 272h-223C91.2 272 48 315.2 48 368.5S91.2 464 144.5 464h223c53.3 0 96.5-42.2 96.5-95.5S420.8 272 367.5 272zM144 432c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" fill="currentColor"></svg:path><svg:circle cx="368" cy="144" r="42" fill="currentColor"></svg:circle><svg:path d="M144.5 240h223c53.3 0 96.5-42.2 96.5-95.5S420.8 48 367.5 48h-223C91.2 48 48 91.2 48 144.5S91.2 240 144.5 240zM368 80c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64z" fill="currentColor"></svg:path>`,
})
export class IonIosSwitchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosSyncIcon],svg[ion-ios-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M492 257.1c-2.6-2.6-6-4-9.6-4-3.6 0-7 1.4-9.6 4l-13 13c4.3-61.8-19.5-122.5-65.3-165C356.9 70.2 307.7 51 256.1 51c-26.7 0-52.8 5.1-77.4 15.1-25.5 10.4-48.3 25.6-67.7 45.3-13.2 13.4-24.6 28.5-33.6 44.8-1.9 3.4-2.3 7.4-1.2 11.1 1.1 3.7 3.8 6.8 7.2 8.5 2 1 4.2 1.5 6.4 1.5 5.2 0 9.9-2.8 12.4-7.3 7.9-14.3 17.8-27.5 29.4-39.1 16.8-16.8 36.3-29.8 58.1-38.7 21.1-8.6 43.4-12.9 66.2-12.9 22.9 0 45.2 4.3 66.3 12.9 21.8 8.9 41.4 21.9 58.2 38.8 20.3 20.4 35.4 45.6 43.8 73 7 22.9 9.2 47.3 6.6 71.2l-18.9-18.5c-2.5-2.4-5.8-3.8-9.3-3.8-3.5 0-6.9 1.4-9.4 3.9-5.2 5.2-5.2 13.6 0 18.8l42.8 42.9c1.9 1.9 4.4 2.9 7 2.9 2.6 0 5.1-1 7-2.9l42.1-42.2c5.2-5.3 5.2-13.9-.1-19.2z" fill="currentColor"></svg:path><svg:path d="M428.6 335.9c-2-1-4.2-1.5-6.4-1.5-5.2 0-9.9 2.8-12.4 7.3-7.9 14.3-17.8 27.5-29.4 39.1-16.8 16.8-36.3 29.9-58.2 38.7-21.1 8.6-43.4 12.9-66.3 12.9s-45.2-4.3-66.2-12.9c-21.8-8.9-41.4-21.9-58.2-38.7-37.6-37.8-56-90.9-50.3-143.9l18.4 18.5c2.4 2.4 5.6 3.7 9 3.7 3.4 0 6.6-1.3 9-3.7l1.3-1.3c4.9-4.9 4.9-13 0-17.9l-42.9-43c-1.9-1.9-4.4-2.9-7-2.9-2.6 0-5.1 1-7 2.9l-42 42.3c-5.3 5.3-5.3 13.9 0 19.2 2.6 2.6 6 4 9.6 4 3.6 0 7-1.4 9.6-4l13-13.1c-1.8 25.8 1.3 52 9 76.5 9.9 31.4 26.8 59.3 50.3 82.8 19.5 19.6 42.2 34.7 67.6 45.1 24.5 10 50.4 15 76.9 15 26.5 0 52.4-5.1 76.9-15 25.4-10.3 48.1-25.5 67.6-45.1 13.5-13.5 25-28.8 34.2-45.4 1.9-3.4 2.3-7.4 1.2-11.1-1.2-3.7-3.8-6.8-7.3-8.5z" fill="currentColor"></svg:path>`,
})
export class IonIosSyncIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTabletLandscapeIcon],svg[ion-ios-tablet-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M39 103c-4.5 4.5-7 10.6-7 16.9V392c0 6.4 2.5 12.4 7 16.9 4.5 4.5 10.6 7 16.9 7H456c6.4 0 12.4-2.5 16.9-7 4.5-4.5 7-10.6 7-16.9V119.9c0-6.4-2.5-12.4-7-16.9-4.5-4.5-10.6-7-16.9-7H55.9c-6.3 0-12.4 2.5-16.9 7zm9.7 153.4c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7c-3.8 0-7-3.2-7-7zM470 256c0 7.7-6.5 14-14.1 14-7.5 0-14-6.2-14-14 0-7.7 6.4-14.1 14-14.1 7.6.1 14.1 6.4 14.1 14.1zm-38-144v288H80V112h352z" fill="currentColor"></svg:path>`,
})
export class IonIosTabletLandscapeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTabletPortraitIcon],svg[ion-ios-tablet-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M409 39c-4.5-4.5-10.6-7-16.9-7H119.9c-6.4 0-12.4 2.5-16.9 7-4.5 4.5-7 10.6-7 16.9V456c0 6.4 2.5 12.4 7 16.9 4.5 4.5 10.6 7 16.9 7H392c6.4 0 12.4-2.5 16.9-7 4.5-4.5 7-10.6 7-16.9V55.9c.1-6.3-2.4-12.4-6.9-16.9zm-153.4 9.7c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7c0-3.8 3.2-7 7-7zM256 470c-7.7 0-14-6.5-14-14.1 0-7.5 6.2-14 14-14 7.7 0 14.1 6.4 14.1 14-.1 7.6-6.4 14.1-14.1 14.1zm144-38H112V80h288v352z" fill="currentColor"></svg:path>`,
})
export class IonIosTabletPortraitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTelephoneIcon],svg[ion-ios-telephone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M415.9 335.5c-14.6-15-56.1-43.1-83.3-43.1-6.3 0-11.8 1.4-16.3 4.3-13.3 8.5-23.9 15.1-29 15.1-2.8 0-5.8-2.5-12.4-8.2l-1.1-1c-18.3-15.9-22.2-20-29.3-27.4l-1.8-1.9c-1.3-1.3-2.4-2.5-3.5-3.6-6.2-6.4-10.7-11-26.6-29l-.7-.8c-7.6-8.6-12.6-14.2-12.9-18.3-.3-4 3.2-10.5 12.1-22.6 10.8-14.6 11.2-32.6 1.3-53.5-7.9-16.5-20.8-32.3-32.2-46.2l-1-1.2c-9.8-12-21.2-18-33.9-18-14.1 0-25.8 7.6-32 11.6-.5.3-1 .7-1.5 1-13.9 8.8-24 20.9-27.8 33.2-5.7 18.5-9.5 42.5 17.8 92.4 23.6 43.2 45 72.2 79 107.1 32 32.8 46.2 43.4 78 66.4 35.4 25.6 69.4 40.3 93.2 40.3 22.1 0 39.5 0 64.3-29.9 26-31.4 15.2-50.6-.4-66.7z" fill="currentColor"></svg:path>`,
})
export class IonIosTelephoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTelephoneOutlineIcon],svg[ion-ios-telephone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M415.9 335.5c-14.6-15-56.1-43.1-83.3-43.1-6.3 0-11.8 1.4-16.3 4.3-13.3 8.5-23.9 15.1-29 15.1-2.8 0-5.8-2.5-12.4-8.2l-1.1-1c-18.3-15.9-22.2-20-29.3-27.4l-1.8-1.9c-1.3-1.3-2.4-2.5-3.5-3.6-6.2-6.4-10.7-11-26.6-29l-.7-.8c-7.6-8.6-12.6-14.2-12.9-18.3-.3-4 3.2-10.5 12.1-22.6 10.8-14.6 11.2-32.6 1.3-53.5-7.9-16.5-20.8-32.3-32.2-46.2l-1-1.2c-9.8-12-21.2-18-33.9-18-14.1 0-25.8 7.6-32 11.6-.5.3-1 .7-1.5 1-13.9 8.8-24 20.9-27.8 33.2-5.7 18.5-9.5 42.5 17.8 92.4 23.6 43.2 45 72.2 79 107.1 32 32.8 46.2 43.4 78 66.4 35.4 25.6 69.4 40.3 93.2 40.3 22.1 0 39.5 0 64.3-29.9 26-31.4 15.2-50.6-.4-66.7zm-11.5 55.9c-20 24.2-31.5 24.2-52.3 24.2-20.3 0-51.8-14-84.2-37.3-31-22.4-44.8-32.7-75.9-64.6-32.9-33.7-53.6-61.8-76.4-103.5-24.1-44.1-21.4-63.4-16.5-79.3 2.6-8.5 10.4-17.6 21-24.2.5-.3 1-.7 1.6-1 5.3-3.4 14.1-9.1 23.7-9.1 8 0 15.1 4 21.9 12.3l1 1.2c25.5 31.2 45.4 58.8 30.4 79.2-10.6 14.3-16.2 24-15.3 34 .8 9.7 7.3 17 17.1 28l.7.8c16.1 18.2 20.7 23 27.1 29.5 1.1 1.1 2.2 2.3 3.5 3.6l1.8 1.9c7.4 7.7 11.5 11.9 30.3 28.4l1.1 1c8 7 13.9 12.1 22.5 12.1 8.9 0 18.7-5.6 37.3-17.5 1.9-1.2 4.6-1.9 8-1.9 21.7 0 59.1 24.8 72.2 38.3 12 12.2 18 21.4-.6 43.9z" fill="currentColor"></svg:path>`,
})
export class IonIosTelephoneOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTennisballIcon],svg[ion-ios-tennisball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M250.4 464c1-7.9 1.6-15.9 1.6-23.9 0-48.1-18.7-94.3-52.7-128.3S119 260 70.9 260c-7.7 0-15.4.5-22.9 1.4 2.8 110.3 92.3 199.3 202.4 202.6z" fill="currentColor"></svg:path><svg:path d="M230 74c0-8.3.5-16.4 1.4-24.5-95.3 11.7-171.7 89-182.2 184.7 7.2-.7 14.4-1.1 21.8-1.1 114.9 0 207.1 92.2 207.1 207 0 7.7-.4 15.3-1.3 22.8 96.6-10.1 174.6-86.2 185.8-182.4-8.4 1-16.9.6-25.5.6C322.1 281 230 188.9 230 74z" fill="currentColor"></svg:path><svg:path d="M308.7 202.3c34 34 80.2 52.7 128.3 52.7 9.1 0 18.1-.7 27-2-2.2-112-93.9-203.5-206.1-205-1.2 8.5-1.9 17.2-1.9 26 0 48.1 18.7 94.3 52.7 128.3z" fill="currentColor"></svg:path><svg:path d="M232 49.3z" fill="currentColor"></svg:path>`,
})
export class IonIosTennisballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTennisballOutlineIcon],svg[ion-ios-tennisball-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M464 256c0-114.863-93.13-208-208-208-114.863 0-208 93.136-208 208 0 114.863 93.137 208 208 208a212.3 212.3 0 0 0 7.587-.152 202.801 202.801 0 0 0 4.258-.191c.85-.047 1.698-.104 2.547-.161.639-.044 1.279-.08 1.917-.13 1.354-.104 2.705-.221 4.055-.352v-.009c97.47-9.474 175.229-86.229 186.274-183.223l.057-.001a208.679 208.679 0 0 0 1.196-16.05l-.049.001c.095-2.566.158-5.141.158-7.732zm-17.335 0c0 2.568-.066 5.121-.167 7.664-23.639-1.076-46.677-6.106-68.616-15.005-25.791-10.458-48.938-25.831-68.797-45.691-19.86-19.86-35.233-43.007-45.692-68.797-8.903-21.956-13.935-45.014-15.006-68.67 2.527-.1 5.063-.165 7.614-.165C361.13 65.335 446.665 150.869 446.665 256zm-381.328 0c0-1.318.023-2.631.05-3.942 22.476 1.379 44.388 6.337 65.3 14.817 25.791 10.458 48.938 25.831 68.798 45.691 19.86 19.859 35.232 43.007 45.691 68.798 8.474 20.896 13.43 42.792 14.814 65.249a196.04 196.04 0 0 1-3.99.051C150.87 446.664 65.336 361.13 65.337 256zm210.606 189.623c-3.273-52.566-24.974-104.198-65.145-144.369-40.186-40.186-91.84-61.889-144.427-65.15 9.172-88.053 78.52-158.478 166.074-169.313 2.595 53.64 24.36 106.525 65.326 147.49 40.949 40.952 93.811 62.713 147.433 65.322-10.853 87.515-81.247 156.829-169.261 166.02z" fill="currentColor"></svg:path>`,
})
export class IonIosTennisballOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTextIcon],svg[ion-ios-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 64C141.1 64 48 139.2 48 232c0 64.9 45.6 121.2 112.3 149.2-5.2 25.8-21 47-33.5 60.5-2.3 2.5.2 6.5 3.6 6.3 11.5-.8 32.9-4.4 51-12.7 21.5-9.9 40.3-30.1 46.3-36.9 9.3 1 18.8 1.6 28.5 1.6 114.9 0 208-75.2 208-168C464 139.2 370.9 64 256 64z" fill="currentColor"></svg:path>`,
})
export class IonIosTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosThermometerIcon],svg[ion-ios-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M309.8 304.6c-4.3-3-6.9-7.9-6.9-13.1v-213c0-25.7-21-46.5-47-46.5s-47 20.8-47 46.5v213c0 5.2-2.6 10.2-6.9 13.1-25.2 17.3-42 46.4-42 79.3 0 53 43 96 96 96s96-43 96-96c0-32.9-17-62.1-42.2-79.3zM256.1 445c-32 0-58.1-26.3-58.1-58.8 0-25.4 15.4-47.1 37.9-55.3 3.2-1.2 5.4-4.1 5.4-7.5V180.2c0-8 6.5-14.5 14.5-14.5s14.5 6.5 14.5 14.5v143.2c0 3.4 2.1 6.3 5.3 7.5 21.9 8.2 38.4 29.9 38.4 55.2 0 32.5-25.8 58.9-57.9 58.9z" fill="currentColor"></svg:path>`,
})
export class IonIosThermometerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosThumbsDownIcon],svg[ion-ios-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M80.7 123.2c-7.5 6.3-16.7 16.1-16.7 31.4 0 13.7 5.7 22.8 10.9 29.1.6 1.2 1.1 2.3 1.6 3.4l.2 1.1c.7 3.5 0 7.1-2 10-3.4 5-5.8 12.3-5.8 25.7 0 11.6 4.8 18.4 9.7 23.2 4.4 4.3 6.1 12.5 4.1 18.3-4.8 13.9-.2 28.4 8.2 37.8 10.5 11.8 20.3 13.2 46.4 11.7 18-1.1 55.5-6.9 80.2-10.8 10.1-1.6 18.9-3 21.6-3.2 12.7-1.3 15.2 0 16.4 4.9.5 2.1-1.9 6.9-4.9 13-4 8.1-9.5 19.2-14.5 35.8-10.1 33.2-9 69.2 2.7 90.2 5.5 9.9 14.8 19.1 26.3 19.1s23.3-2.4 27.9-7.9c3.4-4 2.3-11.6 6.2-26.8 3.1-12.4 7-30.9 12-42 7.5-16.6 39.7-45.1 57-60.4 4.1-3.6 7.6-6.7 10.1-9.1 8.7-8.1 17.6-21.1 25.5-32.7 5.4-7.8 10.4-15.2 13.7-18.5 7.1-7.1 16.6-10.9 22.3-10.9 4.4 0 8-3.6 8-8V88.1c0-4.6-3.7-8.3-8.3-8.3C404 79.8 389 74 373.1 68c-12.2-4.7-24.9-9.5-46.4-12.1-32.4-4-74.2-8.1-112.6-8.1-20.4 0-39.9 2-56.6 3.9-31 3.6-64.2 10.8-75.2 37-4.1 9.7-2.2 17.6.5 23.7.4.8.7 1.7.8 2.6.6 3.3-.6 6.3-2.9 8.2z" fill="currentColor"></svg:path>`,
})
export class IonIosThumbsDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosThumbsUpIcon],svg[ion-ios-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M431.3 388.8c7.5-6.3 16.7-16.1 16.7-31.4 0-13.7-5.7-22.8-10.9-29.1-.6-1.2-1.1-2.3-1.6-3.4l-.2-1.1c-.7-3.5 0-7.1 2-10 3.4-5 5.8-12.3 5.8-25.7 0-11.6-4.8-18.4-9.7-23.2-4.4-4.3-6.1-12.5-4.1-18.3 4.8-13.9.2-28.4-8.2-37.8-10.5-11.8-20.3-13.2-46.4-11.7-18 1.1-55.5 6.9-80.2 10.8-10.1 1.6-18.9 3-21.6 3.2-12.7 1.3-15.2 0-16.4-4.9-.5-2.1 1.9-6.9 4.9-13 4-8.1 9.5-19.2 14.5-35.8 10.1-33.2 9-69.2-2.7-90.2-5.5-9.9-14.8-19.1-26.3-19.1S223.6 50.5 219 56c-3.4 4-2.3 11.6-6.2 26.8-3.1 12.4-7 30.9-12 42-7.5 16.6-39.7 45.1-57 60.4-4.1 3.6-7.6 6.7-10.1 9.1-8.7 8.1-17.6 21.1-25.5 32.7-5.4 7.8-10.4 15.2-13.7 18.5-7.1 7.1-16.6 10.9-22.3 10.9-4.4 0-8 3.6-8 8v159.5c0 4.6 3.7 8.3 8.3 8.3 35.5 0 50.5 5.8 66.4 11.8 12.2 4.7 24.9 9.5 46.4 12.1 32.4 4 74.2 8.1 112.6 8.1 20.4 0 39.9-2 56.6-3.9 31-3.6 64.2-10.8 75.2-37 4.1-9.7 2.2-17.6-.5-23.7-.4-.8-.7-1.7-.8-2.6-.6-3.3.6-6.3 2.9-8.2z" fill="currentColor"></svg:path>`,
})
export class IonIosThumbsUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosThunderstormIcon],svg[ion-ios-thunderstorm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M374.4 141.9l-13.3-.1C349.4 88.2 306 48 236 48S108.2 98.4 108.2 169.5l.3 4.8C66.3 179.9 32 219.6 32 264c0 47 37.9 88 84.7 88H236l13.8-50.6H183c-2.6 0-4.5-2.4-3.9-4.9l23.2-113c.4-1.8 2-3.1 3.9-3.1h86.1c2.7 0 4.6 2.6 3.8 5.2l-22.5 74.9h60.1c3.1 0 5.1 3.5 3.4 6.1L283.4 352H367c72 0 113-52 113-110 0-58.6-47.3-100.1-105.6-100.1z" fill="currentColor"></svg:path><svg:path d="M206.8 458.9c-1.2 4.4 4.8 7 7.2 3.2L283.4 352H236l-29.2 106.9z" fill="currentColor"></svg:path>`,
})
export class IonIosThunderstormIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosThunderstormOutlineIcon],svg[ion-ios-thunderstorm-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M312 272h-40l16-48h-72l-15 80h52.3L224 400z" fill="currentColor"></svg:path><svg:path d="M328.4 172.7c-2.7 0-5.4 0-8 .3-7.9-35-39.1-61.4-76.4-61.4-43.3 0-78.3 35.2-78.3 78.5 0 2.6.1 5.2.4 7.8-26.4 2.3-47.1 25.7-47.1 52.8 0 28.6 23.2 53.3 51.7 53.3H182v-17h-11.3c-9.5 0-18.5-4.1-25.4-11-6.8-7-10.6-16.3-10.6-26 0-18.6 14.5-33.8 33.2-36.9 1.6-.3 8.8-1.3 14.2-1.8 0 0-.5-5.3-.6-9.6-.1-4.3-.1-9.4-.1-11.5 0-34.6 28.1-62.7 62.6-62.7 14.5 0 28.1 4.8 39.3 13.9 10.9 8.9 18.6 21.3 21.7 34.9l3.1 14 14.2-1.8c2.1-.3 4.1-.4 6.1-.4 26.9 0 48.8 22.3 48.8 49.4 0 27.1-21.9 49.4-48.8 49.4H320v17h8.4c35.7 0 64.6-30.1 64.6-65.9 0-35.6-28.9-65.3-64.6-65.3z" fill="currentColor"></svg:path>`,
})
export class IonIosThunderstormOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTimeIcon],svg[ion-ios-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm14 226c0 7.7-6.3 14-14 14h-96c-7.7 0-14-6.3-14-14s6.3-14 14-14h82V128c0-7.7 6.3-14 14-14s14 6.3 14 14v146z" fill="currentColor"></svg:path>`,
})
export class IonIosTimeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTimeOutlineIcon],svg[ion-ios-time-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm147.1 371.1c-19.1 19.1-41.4 34.1-66.1 44.6-25.6 10.8-52.9 16.3-81 16.3s-55.3-5.5-81-16.3c-24.8-10.5-47-25.5-66.1-44.6C89.8 384 74.8 361.7 64.3 337 53.5 311.3 48 284.1 48 256s5.5-55.3 16.3-81c10.5-24.8 25.5-47 44.6-66.1C128 89.8 150.3 74.8 175 64.3 200.7 53.5 227.9 48 256 48s55.3 5.5 81 16.3c24.8 10.5 47 25.5 66.1 44.6 19.1 19.1 34.1 41.4 44.6 66.1 10.8 25.6 16.3 52.9 16.3 81s-5.5 55.3-16.3 81c-10.5 24.7-25.5 47-44.6 66.1z" fill="currentColor"></svg:path><svg:circle cx="256" cy="80" r="8" fill="currentColor"></svg:circle><svg:circle cx="256" cy="432" r="8" fill="currentColor"></svg:circle><svg:circle cx="432" cy="256" r="8" fill="currentColor"></svg:circle><svg:circle cx="80" cy="256" r="8" fill="currentColor"></svg:circle><svg:circle cx="168" cy="103.6" r="8" fill="currentColor"></svg:circle><svg:circle cx="344" cy="408.4" r="8" fill="currentColor"></svg:circle><svg:circle cx="408.4" cy="168" r="8" fill="currentColor"></svg:circle><svg:circle cx="103.6" cy="344" r="8" fill="currentColor"></svg:circle><svg:circle cx="103.6" cy="168" r="8" fill="currentColor"></svg:circle><svg:circle cx="408.4" cy="344" r="8" fill="currentColor"></svg:circle><svg:circle cx="344" cy="103.6" r="8" fill="currentColor"></svg:circle><svg:circle cx="168" cy="408.4" r="8" fill="currentColor"></svg:circle><svg:path d="M269.9 248c-2.9-5-8.1-7.8-13.4-8l-38-63.4c-2.3-3.8-7.2-5-11-2.7s-5 7.2-2.7 11l37.6 62.9c-2.9 4.8-3.2 11.1-.2 16.3 1.5 2.5 3.5 4.5 5.9 5.8V392c0 4.4 3.6 8 8 8s8-3.6 8-8V269.9c7.6-4.5 10.2-14.2 5.8-21.9z" fill="currentColor"></svg:path>`,
})
export class IonIosTimeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTimerIcon],svg[ion-ios-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 456c-110.3 0-200-89.7-200-200 0-54.8 21.7-105.9 61.2-144 6.4-6.2 16.6-6 22.7.4 6.2 6.4 6 16.6-.4 22.7-33.1 32-51.3 74.9-51.3 120.9 0 92.5 75.3 167.8 167.8 167.8S423.8 348.5 423.8 256c0-87.1-66.7-159-151.8-167.1v62.6c0 8.9-7.2 16.1-16.1 16.1s-16.1-7.2-16.1-16.1V72.1c0-8.9 7.2-16.1 16.1-16.1 110.3 0 200 89.7 200 200S366.3 456 256 456z" fill="currentColor"></svg:path><svg:path d="M175.9 161.9l99.5 71.5c13.5 9.7 16.7 28.5 7 42s-28.5 16.7-42 7c-2.8-2-5.2-4.4-7-7l-71.5-99.5c-3.2-4.5-2.2-10.8 2.3-14 3.6-2.6 8.3-2.4 11.7 0z" fill="currentColor"></svg:path>`,
})
export class IonIosTimerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTimerOutlineIcon],svg[ion-ios-timer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M236.6 271.6c4.6 5.7 11.5 9.4 19.4 9.4 13.8 0 25-11.2 25-25 0-7.3-3.2-13.8-8.2-18.4-.6-.7-1.3-1.5-2.2-2.2 0 0-117.7-87.5-120.3-85.2-2.6 2.3 85.3 120.2 85.3 120.2.2.4.7.8 1 1.2z" fill="currentColor"></svg:path><svg:path d="M256.2 48h-.2v112h16V65.3c97.8 8.3 175.3 90.5 175.3 190.5 0 105.5-85.7 191.4-191.2 191.4-105.5 0-191.3-85.8-191.3-191.3 0-52.8 21.5-100.6 56.1-135.2L109 108.9C71.3 146.6 48 198.6 48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S371 48 256.2 48z" fill="currentColor"></svg:path>`,
})
export class IonIosTimerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTodayIcon],svg[ion-ios-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M388 32H124c-33.1 0-60 26.9-60 60v328c0 33.1 26.9 60 60 60h264c33.1 0 60-26.9 60-60V92c0-33.1-26.9-60-60-60zm32 388c0 17.6-14.4 32-32 32H124c-17.6 0-32-14.4-32-32V92c0-17.6 14.4-32 32-32h264c17.6 0 32 14.4 32 32v328z" fill="currentColor"></svg:path><svg:path d="M360 176H152c-13.2 0-24 10.8-24 24v192c0 13.2 10.8 24 24 24h208c13.2 0 24-10.8 24-24V200c0-13.2-10.8-24-24-24z" fill="currentColor"></svg:path><svg:path d="M142 124h100c7.7 0 14-6.3 14-14s-6.3-14-14-14H142c-7.7 0-14 6.3-14 14s6.3 14 14 14z" fill="currentColor"></svg:path>`,
})
export class IonIosTodayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosToggleIcon],svg[ion-ios-toggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 320c-26.467 0-48 21.533-48 48s21.533 48 48 48 48-21.533 48-48-21.533-48-48-48z" fill="currentColor"></svg:path><svg:path d="M383.5 272h-255C75.205 272 32 315.205 32 368.5S75.205 464 128.5 464h255c53.295 0 96.5-42.205 96.5-95.5S436.795 272 383.5 272zM128 432c-35.346 0-64-28.653-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.347-28.654 64-64 64z" fill="currentColor"></svg:path><svg:path d="M384 192c26.467 0 48-21.533 48-48s-21.533-48-48-48-48 21.533-48 48 21.533 48 48 48z" fill="currentColor"></svg:path><svg:path d="M128.5 240h255c53.295 0 96.5-42.205 96.5-95.5S436.795 48 383.5 48h-255C75.205 48 32 91.205 32 144.5S75.205 240 128.5 240zM384 80c35.346 0 64 28.654 64 64 0 35.347-28.654 64-64 64s-64-28.653-64-64c0-35.346 28.654-64 64-64z" fill="currentColor"></svg:path>`,
})
export class IonIosToggleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosToggleOutlineIcon],svg[ion-ios-toggle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 320c26.467 0 48 21.533 48 48s-21.533 48-48 48-48-21.533-48-48 21.533-48 48-48m0-16c-35.346 0-64 28.654-64 64 0 35.347 28.654 64 64 64s64-28.653 64-64c0-35.346-28.654-64-64-64z" fill="currentColor"></svg:path><svg:path d="M383.25 288c44.388 0 80.625 36.112 80.625 80.5S427.888 448 383.5 448h-255C84.112 448 48 412.888 48 368.5S84.112 288 128.5 288H383m.5-16h-255C75.205 272 32 315.205 32 368.5S75.205 464 128.5 464h255c53.295 0 96.5-42.205 96.5-95.5S436.795 272 383.5 272z" fill="currentColor"></svg:path><svg:g><svg:path d="M384 96c26.467 0 48 21.533 48 48s-21.533 48-48 48-48-21.533-48-48 21.533-48 48-48m0-16c-35.346 0-64 28.654-64 64 0 35.347 28.654 64 64 64s64-28.653 64-64c0-35.346-28.654-64-64-64z" fill="currentColor"></svg:path><svg:path d="M129 64h254.5c44.388 0 80.5 36.112 80.5 80.5S427.888 224 383.5 224h-255c-44.388 0-80.375-35.112-80.375-79.5S84.362 64 128.75 64m-.25-16C75.205 48 32 91.205 32 144.5S75.205 240 128.5 240h255c53.295 0 96.5-42.205 96.5-95.5S436.795 48 383.5 48h-255z" fill="currentColor"></svg:path></svg:g>`,
})
export class IonIosToggleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTrainIcon],svg[ion-ios-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M393.7 455.9l-50-48c-5.6-5.4-14.4-5.2-19.8.4-5.4 5.6-5.2 14.4.4 19.8l6.1 5.9H181.5l6.1-5.9c5.6-5.4 5.8-14.2.4-19.8-5.4-5.6-14.2-5.8-19.8-.4l-50 48c-5.6 5.4-5.8 14.2-.4 19.8 2.7 2.9 6.4 4.3 10.1 4.3 3.5 0 7-1.3 9.7-3.9l14.7-14.1h207.2l14.7 14.1c2.7 2.6 6.2 3.9 9.7 3.9 3.7 0 7.4-1.4 10.1-4.3 5.5-5.6 5.3-14.4-.3-19.8z" fill="currentColor"></svg:path><svg:path d="M337 48h-17c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16h-15c-35.3 0-65 27.7-65 63v236c0 35.3 144 65 144 65s144-29.7 144-65V111c0-35.3-27.7-63-63-63zm-81 304c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm96-160c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v64z" fill="currentColor"></svg:path><svg:circle cx="256" cy="304" r="30.5" fill="currentColor"></svg:circle>`,
})
export class IonIosTrainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTransgenderIcon],svg[ion-ios-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M450.4 168.5c7.5 0 13.6-6.1 13.6-13.6V61.6c0-7.5-6.1-13.6-13.6-13.6h-93.3c-7.5 0-13.6 6.1-13.6 13.6s6.1 13.6 13.6 13.6H417l-75 75.4c-25.7-16.3-55.4-24.8-86-24.8-30.7 0-60.3 8.6-86 24.8l-19-19.1 28.2-28.2c5.3-5.3 5.3-13.9 0-19.2-2.6-2.6-6-4-9.6-4-3.6 0-7.1 1.4-9.6 4l-28.1 28.1-36.8-37H155c7.5 0 13.6-6.1 13.6-13.6S162.5 48 155 48H61.6C54.1 48 48 54.1 48 61.6v93.3c0 7.5 6.1 13.6 13.6 13.6s13.6-6.1 13.6-13.6V95.1l36.9 36.7-30 30c-5.3 5.3-5.3 13.9 0 19.2 2.6 2.6 6 4 9.6 4 3.6 0 7.1-1.4 9.6-4l30.1-30.1 16.5 16.4c-33.9 30.6-53.3 73.9-53.3 119.8 0 43.1 16.8 83.6 47.3 114.1 30.5 30.5 71 47.3 114.1 47.3 45.9 0 89.2-19.4 119.9-53.3l16.4 16.4-29.3 29.2c-5.3 5.3-5.3 13.9 0 19.2 2.6 2.6 6 4 9.6 4 3.6 0 7.1-1.4 9.6-4l29.3-29.3 29.3 29.3c2.6 2.6 6 4 9.6 4 3.6 0 7.1-1.4 9.6-4 5.3-5.3 5.3-13.9 0-19.2l-29.3-29.3 29.3-29.3c5.3-5.3 5.3-13.9 0-19.2-2.6-2.6-6-4-9.6-4-3.6 0-7.1 1.4-9.6 4l-29.3 29.3-19-19c16.3-25.8 24.9-55.4 24.9-86.1 0-45.9-19.3-89.2-53.3-119.8l72.7-72.2v59.9c0 7.3 6.1 13.4 13.6 13.4zm-60.3 118.6c0 35.8-14 69.5-39.3 94.8-25.3 25.3-59 39.3-94.8 39.3s-69.5-14-94.8-39.3c-25.3-25.3-39.3-59-39.3-94.8s14-69.5 39.3-94.8c25.3-25.3 59-39.3 94.8-39.3s69.5 14 94.8 39.3c25.4 25.3 39.3 59 39.3 94.8z" fill="currentColor"></svg:path>`,
})
export class IonIosTransgenderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTrashIcon],svg[ion-ios-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M133.1 128l23.6 290.7c0 16.2 13.1 29.3 29.3 29.3h141c16.2 0 29.3-13.1 29.3-29.3L379.6 128H133.1zm61.6 265L188 160h18.5l6.9 233h-18.7zm70.3 0h-18V160h18v233zm52.3 0h-18.6l6.8-233H324l-6.7 233z" fill="currentColor"></svg:path><svg:path d="M364 92h-36l-26.3-23c-3.7-3.2-8.4-5-13.2-5h-64.8c-4.9 0-9.7 1.8-13.4 5L184 92h-36c-17.6 0-30 8.4-30 26h276c0-17.6-12.4-26-30-26z" fill="currentColor"></svg:path>`,
})
export class IonIosTrashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTrashOutlineIcon],svg[ion-ios-trash-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M400 113.3h-80v-20c0-16.2-13.1-29.3-29.3-29.3h-69.5C205.1 64 192 77.1 192 93.3v20h-80V128h21.1l23.6 290.7c0 16.2 13.1 29.3 29.3 29.3h141c16.2 0 29.3-13.1 29.3-29.3L379.6 128H400v-14.7zm-193.4-20c0-8.1 6.6-14.7 14.6-14.7h69.5c8.1 0 14.6 6.6 14.6 14.7v20h-98.7v-20zm135 324.6v.8c0 8.1-6.6 14.7-14.6 14.7H186c-8.1 0-14.6-6.6-14.6-14.7v-.8L147.7 128h217.2l-23.3 289.9z" fill="currentColor"></svg:path><svg:path d="M249 160h14v241h-14z" fill="currentColor"></svg:path><svg:path d="M320 160h-14.6l-10.7 241h14.6z" fill="currentColor"></svg:path><svg:path d="M206.5 160H192l10.7 241h14.6z" fill="currentColor"></svg:path>`,
})
export class IonIosTrashOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTrendingDownIcon],svg[ion-ios-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 369.2V251.1c0-8.1-6.8-14.8-15.1-14.8s-15.1 6.6-15.1 14.8v81.7L300.5 181c-2.8-2.8-6.6-4.3-10.7-4.3-4 0-7.8 1.5-10.7 4.3l-85.9 84.1L57.5 132.3c-2.9-2.8-6.6-4.3-10.7-4.3-4 0-7.8 1.5-10.7 4.3-2.8 2.7-4.2 6.2-4.2 10.2 0 5.4 2.3 8.8 4.2 10.7l146.3 143.2c2.9 2.8 6.6 4.3 10.7 4.3 4 0 7.8-1.5 10.7-4.3l85.9-84.1 138 142.2H344c-8.3 0-15.1 6.6-15.1 14.8 0 8.1 6.8 14.8 15.1 14.8h120.8c8.4-.1 15.2-6.7 15.2-14.9z" fill="currentColor"></svg:path>`,
})
export class IonIosTrendingDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTrendingUpIcon],svg[ion-ios-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M464.9 128H344.1c-8.3 0-15.1 6.6-15.1 14.8s6.8 14.8 15.1 14.8h83.7l-138 142.2-85.9-84.1c-2.9-2.8-6.6-4.3-10.7-4.3-4 0-7.8 1.5-10.7 4.3L36.2 358.8c-1.9 1.9-4.2 5.2-4.2 10.7 0 4.1 1.4 7.5 4.2 10.2 2.9 2.8 6.6 4.3 10.7 4.3 4 0 7.8-1.5 10.7-4.3L193.2 247l85.9 84.1c2.9 2.8 6.6 4.3 10.7 4.3 4 0 7.8-1.5 10.7-4.3l149.4-151.9v81.7c0 8.1 6.8 14.8 15.1 14.8s15.1-6.6 15.1-14.8V142.8c-.1-8.2-6.9-14.8-15.2-14.8z" fill="currentColor"></svg:path>`,
})
export class IonIosTrendingUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTrophyIcon],svg[ion-ios-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M450 100h-66V80c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v20H62c-7.7 0-14 6.3-14 14 0 41.3 7.8 66 22.6 90.4 13.6 22.4 32.9 36.2 56.3 40.3 2.8.5 5.1 2.3 6.2 4.9 6.2 15.4 20.2 34.8 51.1 52.2 20.2 11.4 36.9 18.3 51.7 21.6 3.6.8 6.2 4.1 6.2 7.8V412c0 4.4-3.6 8-8 8h-65.6c-7.5 0-14 5.8-14.4 13.3-.4 8 6 14.7 14 14.7h175.6c7.5 0 14-5.8 14.4-13.3.4-8-6-14.7-14-14.7h-66c-4.4 0-8-3.6-8-8v-80.7c0-3.7 2.6-7 6.2-7.8 14.7-3.3 31.5-10.3 51.7-21.6 30.9-17.4 44.9-36.8 51.1-52.2 1.1-2.6 3.4-4.5 6.2-4.9 23.4-4.1 42.7-17.9 56.3-40.3C456.2 180 464 155.3 464 114c0-7.7-6.3-14-14-14zM128 210.6c0 2.8-2.8 4.8-5.4 3.8-12.8-4.9-23.2-14.7-30.6-28.9-5.8-11-12.6-21.4-15.1-48.8-.4-4.7 3.3-8.7 8-8.7H120c4.4 0 8 3.6 8 8v74.6zm292-25.1c-7.4 14.2-17.8 24-30.6 28.9-2.6 1-5.4-1-5.4-3.8V136c0-4.4 3.6-8 8-8h35.1c4.7 0 8.4 4 8 8.7-2.5 27.4-9.4 37.8-15.1 48.8z" fill="currentColor"></svg:path>`,
})
export class IonIosTrophyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosTvIcon],svg[ion-ios-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M451.7 78H60.3C34.8 78 14 98.8 14 124.3v215.5c0 25.5 20.8 46.3 46.3 46.3h391.5c25.5 0 46.3-20.8 46.3-46.3V124.3C498 98.8 477.2 78 451.7 78zM470 339.7c0 10.1-8.2 18.3-18.3 18.3H60.3c-10.1 0-18.3-8.2-18.3-18.3V124.3c0-10.1 8.2-18.3 18.3-18.3h391.5c10.1 0 18.3 8.2 18.3 18.3v215.4z" fill="currentColor"></svg:path><svg:path d="M436 128H76c-6.6 0-12 5.4-12 12v184c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12V140c0-6.6-5.4-12-12-12z" fill="currentColor"></svg:path><svg:path d="M370 406H142c-7.7 0-14 6.3-14 14s6.3 14 14 14h228c7.7 0 14-6.3 14-14s-6.3-14-14-14z" fill="currentColor"></svg:path>`,
})
export class IonIosTvIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosUmbrellaIcon],svg[ion-ios-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M407.1 137.9c-34.9-41.6-81.3-67.3-131.2-72.6-2-9.9-10.2-17.3-19.9-17.3s-17.9 7.3-19.9 17.2c-50.6 5.2-97.4 30.3-132.1 71.2-35.8 42.2-55.6 85.5-55.8 143.7-.1.5-.2 1.2-.2 2.1.1 3.2 2.7 5.8 5.8 5.8h3.1c2.6 0 4.9-1.8 5.6-4.4 2.7-10.1 8.4-19.1 16-25.5 7.7-6.5 16.9-9.9 26.6-9.9 9.6 0 18.8 3.4 26.5 10 7.6 6.4 13.2 15.4 16 25.5.7 2.6 3 4.4 5.6 4.4h4.8c2.6 0 4.9-1.8 5.6-4.4 5.7-20.9 23.3-35.4 42.8-35.4 14.8 0 28.8 8.4 36.9 21.9V418c0 9.9-8 18-17.7 18s-17.6-8.1-17.6-18c0-7.7-6.1-14-13.7-14-7.5 0-13.6 6.3-13.6 14 0 25.4 20.2 46 44.9 46 24.8 0 44.9-20.6 44.9-46V270.8c8.2-14.2 21.9-22.6 36.9-22.6 9.6 0 18.7 3.4 26.4 9.9 7.5 6.4 13.1 15.4 15.9 25.5.7 2.6 3 4.4 5.6 4.4h4.8c2.6 0 4.9-1.8 5.6-4.4 2.7-10.1 8.4-19.2 16-25.6 7.7-6.5 16.9-10 26.6-10 9.7 0 19 3.4 26.7 10 7.6 6.4 13.2 15.5 15.9 25.6.7 2.6 3 4.4 5.6 4.4h1.5c1.6 0 3.1-.6 4.2-1.8s1.7-2.7 1.7-4.3c-.8-57.9-21-101.3-56.8-144z" fill="currentColor"></svg:path>`,
})
export class IonIosUmbrellaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosUndoIcon],svg[ion-ios-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M479.9 394.9c0-19.6 4.2-97.1-56.8-158.7-40.4-40.7-91.9-61.7-163.4-65.5-2.1-.1-3.8-1.9-3.8-4V84c0-3.2-3.5-5.1-6.2-3.4L33.8 222.8c-2.4 1.6-2.4 5.1 0 6.7l215.9 142.2c2.7 1.8 6.2-.1 6.2-3.4v-81.6c0-2.3 1.9-4.1 4.2-4 44.1 1.7 69.5 10.9 97.1 23.2 36.1 16.2 72.9 50.9 94.5 83.5 13.1 19.9 19.2 33.9 21.4 39.7.7 1.7 2.3 2.8 4.1 2.8h2.9c-.1-11.7-.2-26.7-.2-37z" fill="currentColor"></svg:path>`,
})
export class IonIosUndoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosUndoOutlineIcon],svg[ion-ios-undo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M447.9 368.2c0-16.8 3.6-83.1-48.7-135.7-35.2-35.4-80.3-53.4-143.3-56.2V96L64 224l192 128v-79.8c40 1.1 62.4 9.1 86.7 20 30.9 13.8 55.3 44 75.8 76.6l19.2 31.2H448c0-10.1-.1-22.9-.1-31.8zm-15.7-6.8C384.6 280.6 331 256 240 256v64.8L91.9 224.1 240 127.3V192c201 0 192.2 169.4 192.2 169.4z" fill="currentColor"></svg:path>`,
})
export class IonIosUndoOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosUnlockIcon],svg[ion-ios-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M376 192H188v-48c0-18.1 7.1-35.1 20-48s29.9-20 48-20 35.1 7.1 48 20 20 29.9 20 48c0 7.7 6.3 14 14 14s14-6.3 14-14c0-53.2-43.9-96.7-97.3-96-52.7.7-94.7 44.5-94.7 97.3V192h-24c-22 0-40 18-40 40v192c0 22 18 40 40 40h240c22 0 40-18 40-40V232c0-22-18-40-40-40zM270 316.8v68.8c0 7.5-5.8 14-13.3 14.4-8 .4-14.7-6-14.7-14v-69.2c-11.5-5.6-19.1-17.8-17.9-31.7 1.4-15.5 14.1-27.9 29.6-29 18.7-1.3 34.3 13.5 34.3 31.9 0 12.7-7.3 23.6-18 28.8z" fill="currentColor"></svg:path>`,
})
export class IonIosUnlockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosUnlockedIcon],svg[ion-ios-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 304c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" fill="currentColor"></svg:path><svg:path d="M168 224v-72c0-48.523 39.484-88 88.016-88C304.531 64 344 103.477 344 152v8h16v-8c0-57.43-46.562-104-103.984-104C198.562 48 152 94.57 152 152v72H96v240h320V224H168zm96 126.992V384h-16v-33.008c-13.802-3.553-24-16.082-24-30.992 0-17.673 14.327-32 32-32s32 14.327 32 32c0 14.91-10.198 27.439-24 30.992z" fill="currentColor"></svg:path>`,
})
export class IonIosUnlockedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosUnlockedOutlineIcon],svg[ion-ios-unlocked-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 288c-17.673 0-32 14.327-32 32 0 14.91 10.198 27.439 24 30.992V384h16v-33.008c13.802-3.553 24-16.082 24-30.992 0-17.673-14.327-32-32-32zm0 48c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.178 16-16 16z" fill="currentColor"></svg:path><svg:path d="M168 224v-72c0-48.523 39.484-88 88.016-88C304.531 64 344 103.477 344 152v8h16v-8c0-57.43-46.562-104-103.984-104C198.562 48 152 94.57 152 152v72H96v240h320V224H168zm232 224H112V240h288v208z" fill="currentColor"></svg:path>`,
})
export class IonIosUnlockedOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosUploadIcon],svg[ion-ios-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M264 144v162h-16V144H96v304h320V144z" fill="currentColor"></svg:path><svg:path d="M264 63.4l54.8 54.7 11.6-11.6L256 32l-74.5 74.5 11.7 11.6L248 63.4V144h16z" fill="currentColor"></svg:path>`,
})
export class IonIosUploadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosUploadOutlineIcon],svg[ion-ios-upload-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M288 144v16h112v272H112V160h112v-16H96v304h320V144z" fill="currentColor"></svg:path><svg:path d="M193.1 118.1l-11.6-11.6L256 32l74.5 74.5-11.6 11.6-54.7-54.7v243h-16.4v-243z" fill="currentColor"></svg:path>`,
})
export class IonIosUploadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosVideocamIcon],svg[ion-ios-videocam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M450.6 153.6c-3.3 0-6.5.9-9.3 2.7l-86.5 54.6c-2.5 1.6-4 4.3-4 7.2v76c0 2.9 1.5 5.6 4 7.2l86.5 54.6c2.8 1.7 6 2.7 9.3 2.7h20.8c4.8 0 8.6-3.8 8.6-8.5v-188c0-4.7-3.9-8.5-8.6-8.5h-20.8z" fill="currentColor"></svg:path><svg:path d="M273.5 384h-190C55.2 384 32 360.8 32 332.6V179.4c0-28.3 23.2-51.4 51.4-51.4h190c28.3 0 51.4 23.2 51.4 51.4v153.1c.1 28.3-23 51.5-51.3 51.5z" fill="currentColor"></svg:path>`,
})
export class IonIosVideocamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosVideocamOutlineIcon],svg[ion-ios-videocam-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M303.7 128h-221C63.9 128 47 142.1 47 160.7v187.9c0 18.6 16.9 35.4 35.7 35.4h221c18.8 0 33.3-16.8 33.3-35.4V160.7c0-18.6-14.5-32.7-33.3-32.7zM320 348.6c0 9.3-6.9 18.4-16.3 18.4h-221c-9.4 0-18.7-9.1-18.7-18.4V160.7c0-9.3 9-15.5 18.4-15.5l221 .1c9.4 0 16.6 6.1 16.6 15.4v187.9z" fill="currentColor"></svg:path><svg:path d="M367 213v85.6l98 53.4V160l-98 53zm81-23v132.3l-64-33.5v-65.6l64.1-33.6-.1.4z" fill="currentColor"></svg:path>`,
})
export class IonIosVideocamOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosVolumeHighIcon],svg[ion-ios-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M215.4 145.5c-2.2-1.1-4.6-1.6-6.9-1.6-3.6 0-7.1 1.2-10 3.5L133.3 200H80.5c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h52.8l65.2 52.5c2.9 2.3 6.5 3.5 10 3.5 2.3 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V160c0-6.2-3.5-11.8-9.1-14.5z" fill="currentColor"></svg:path><svg:path d="M447.5 256c0-59.3-23.2-114.8-65.4-156.5-4.7-4.7-12.3-4.6-17 .1-4.7 4.7-4.6 12.3.1 17 37.6 37.1 58.2 86.6 58.2 139.4 0 52.8-20.7 102.3-58.2 139.4-4.7 4.7-4.8 12.3-.1 17 2.3 2.4 5.4 3.6 8.5 3.6 3 0 6.1-1.2 8.4-3.5 42.3-41.6 65.5-97.2 65.5-156.5z" fill="currentColor"></svg:path><svg:path d="M384.9 256c0-43.5-16.6-84.3-46.8-114.9-4.7-4.7-12.3-4.8-17-.1-4.7 4.7-4.8 12.3-.1 17 25.7 26.1 39.9 60.9 39.9 98.1 0 37.2-14.2 72-39.9 98.1-4.7 4.7-4.6 12.3.1 17 2.3 2.3 5.4 3.5 8.4 3.5 3.1 0 6.2-1.2 8.5-3.6 30.2-30.8 46.9-71.6 46.9-115.1z" fill="currentColor"></svg:path><svg:path d="M287.5 182.5c-4.7-4.7-12.3-4.8-17-.1-4.7 4.7-4.8 12.3-.1 17 14.8 15 23 35.1 23 56.6 0 21.4-8.2 41.5-23 56.6-4.7 4.7-4.6 12.3.1 17 2.3 2.3 5.4 3.5 8.4 3.5 3.1 0 6.2-1.2 8.5-3.6 19.3-19.6 29.9-45.6 29.9-73.4.1-27.9-10.5-54-29.8-73.6z" fill="currentColor"></svg:path>`,
})
export class IonIosVolumeHighIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosVolumeLowIcon],svg[ion-ios-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M278.9 145.6c-2.2-1.1-4.6-1.6-6.9-1.6-3.6 0-7.1 1.2-10 3.5L196.8 200H144c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h52.8l65.2 52.5c2.9 2.3 6.5 3.5 10 3.5 2.3 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V160c0-6.2-3.5-11.8-9.1-14.4z" fill="currentColor"></svg:path><svg:path d="M354.4 182.6c-4.6-4.7-12.1-4.8-16.8-.1-4.7 4.7-4.7 12.3-.1 17 14.7 15 22.8 35.1 22.8 56.6 0 21.4-8.1 41.5-22.8 56.6-4.6 4.7-4.6 12.3.1 17 2.3 2.3 5.3 3.5 8.3 3.5 3.1 0 6.1-1.2 8.5-3.6C373.5 310 384 284 384 256.2h-.2c0-28-10.3-54.1-29.4-73.6z" fill="currentColor"></svg:path>`,
})
export class IonIosVolumeLowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosVolumeMuteIcon],svg[ion-ios-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M326.9 145.6c-2.2-1.1-4.6-1.6-6.9-1.6-3.6 0-7.1 1.2-10 3.5L244.8 200H192c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h52.8l65.2 52.5c2.9 2.3 6.5 3.5 10 3.5 2.3 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V160c0-6.2-3.5-11.8-9.1-14.4z" fill="currentColor"></svg:path>`,
})
export class IonIosVolumeMuteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosVolumeOffIcon],svg[ion-ios-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M390.1 464c-4.9 0-9.7-2.5-12.3-7L149.7 69.3c-4-6.7-1.7-15.4 5.1-19.3 6.8-3.9 15.5-1.7 19.5 5.1l228.1 387.7c4 6.7 1.7 15.4-5.1 19.3-2.2 1.3-4.7 1.9-7.2 1.9z" fill="currentColor"></svg:path><svg:path d="M133 200H80c-8.9 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h53l65.4 52.5c2.9 2.3 6.5 3.5 10.1 3.5 2.4 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V227.9L184 159.1 133 200z" fill="currentColor"></svg:path><svg:path d="M448 256c0-59.3-23.3-114.9-65.5-156.5-4.7-4.7-12.3-4.6-17 .1-4.7 4.7-4.6 12.3.1 17C403.3 153.7 424 203.2 424 256c0 44.4-14.7 86.4-41.7 120.8l13 22C429.4 359.1 448 309 448 256z" fill="currentColor"></svg:path><svg:path d="M385.2 256c0-43.5-16.7-84.3-46.9-114.9-4.7-4.7-12.3-4.8-17-.1-4.7 4.7-4.8 12.3-.1 17 25.8 26.1 40 60.9 40 98.1 0 21.6-4.8 42.5-13.9 61.2l14.2 24.1c15.4-25.4 23.7-54.7 23.7-85.4z" fill="currentColor"></svg:path><svg:path d="M317.6 256c0-27.8-10.7-53.9-30-73.4-4.7-4.7-12.3-4.8-17-.1-.6.6-1.1 1.2-1.6 1.9l48.1 81.8c.3-3.4.5-6.8.5-10.2z" fill="currentColor"></svg:path>`,
})
export class IonIosVolumeOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosWalkIcon],svg[ion-ios-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M201.1 361.2l-67.8 48.9c-3.7 3.6-5.2 9.1-5.3 13.9-.1 4.8 1.2 8.8 4.7 12.5 3.6 3.9 8.8 6.2 13.6 6.2 4.5 0 12.5-4.9 16-8.4l69.7-51.6c3.6-3.5 5.7-8.4 5.7-13.5l9.1-52.5-45.7-46.7v91.2z" fill="currentColor"></svg:path><svg:circle transform="rotate(-80.781 274.673 69.329)" cx="274.7" cy="69.3" r="37.3" fill="currentColor"></svg:circle><svg:path d="M350.7 459.2l-15.2-117.4c-.5-3.5-1.9-6.8-4.2-9.5l-57-68.8V143.9c0-11.3-6.3-15.9-18.3-15.9h-37c-2.8 0-5.2 1-7.7 2.3l-68 31.7c-10 5.3-15.3 15.4-15.3 28.7V256c0 10.3 8.2 18.7 18.3 18.7 10.1 0 18.3-8.4 18.3-18.7v-58.2c0-3 1.7-5.8 4.4-7.1l32.2-16.4v75.3c0 4.2 1.6 8.2 4.6 11.2l92.4 94.4c1.2 1.2 2 2.8 2.2 4.5l14.2 104.7c1.3 9.3 9.1 15.7 18.1 15.7h2c9.9-1.5 17.4-10.7 16-20.9z" fill="currentColor"></svg:path><svg:path d="M378.4 232.4l-95-96.2v52.6l69.2 70.1c7.2 7.3 18.7 7.2 25.9-.1 3.5-3.6 5.5-7.5 5.5-12.2 0-4.8-2-10.5-5.6-14.2z" fill="currentColor"></svg:path>`,
})
export class IonIosWalkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosWalletIcon],svg[ion-ios-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M404 160H108c-33.1 0-60 26.9-60 60v168c0 33.1 26.9 60 60 60h296c33.1 0 60-26.9 60-60V220c0-33.1-26.9-60-60-60z" fill="currentColor"></svg:path><svg:path d="M342.9 65L108 110.9c-18 4-44 22.1-44 44.1 0 0 15-19 49-19h287v-20.5c0-12.6-5-28.7-13.9-37.6-11.3-11.3-27.5-16.2-43.2-12.9z" fill="currentColor"></svg:path>`,
})
export class IonIosWalletIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosWarningIcon],svg[ion-ios-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M228.9 79.9L51.8 403.1C40.6 423.3 55.5 448 78.9 448h354.3c23.3 0 38.2-24.7 27.1-44.9L283.1 79.9c-11.7-21.2-42.5-21.2-54.2 0zM273.6 214L270 336h-28l-3.6-122h35.2zM256 402.4c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4 19.1 8.1 19.1 18.4-8.4 18.4-19.1 18.4z" fill="currentColor"></svg:path>`,
})
export class IonIosWarningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosWatchIcon],svg[ion-ios-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M440.3 161.3c-15-23.9-36.3-43.3-61.4-56.1-1.9-.9-3.9-1.4-6-1.4-5 0-9.5 2.8-11.8 7.2-1.6 3.1-1.9 6.7-.8 10 1.1 3.3 3.4 6.1 6.6 7.7 20.9 10.7 38.6 26.8 51.1 46.7 12.8 20.4 19.6 44 19.6 68v40.5c0 17.2-3.3 33.4-9.9 48-6.3 14-15.4 26.3-27 36.6-23.2 20.5-55.1 31.9-89.9 31.9-34.4 0-43.6-5.2-52.4-10.2-8.1-4.6-17.3-9.8-37.7-11-31.7-2-56.9-12.4-77.2-31.8-2.5-2.4-5.7-3.7-9.1-3.7-3.6 0-7 1.5-9.5 4.1-2.4 2.5-3.7 5.7-3.7 9.1 0 3.6 1.5 7 4.1 9.5 25 23.9 55.7 36.7 93.8 39.1 14.4.9 19.4 3.7 26.4 7.7 11.3 6.4 24.1 13.6 65.4 13.6 41.6 0 80-13.9 108.1-39.2 14.2-12.8 25.3-28 33-45.2 8-18 12.1-37.6 12.1-58.5v-40.5c-.1-29.1-8.3-57.5-23.8-82.1z" fill="currentColor"></svg:path><svg:path d="M284 383c8.7 1.4 17.2 2.1 25.4 2.1 16 0 31.2-2.7 45-8 13.9-5.4 26.5-13.4 37.5-23.9 5.3-5 5.4-13.4.4-18.6-2.5-2.6-5.9-4.1-9.5-4.1-3.4 0-6.7 1.3-9.1 3.7-17.1 16.3-38.8 24.6-64.5 24.6-6.8 0-13.8-.6-21-1.8-.7-.1-1.4-.2-2.1-.2-6.5 0-12 4.6-13 11-.1.7-.2 1.4-.2 2.1 0 6.6 4.7 12 11.1 13.1zm2.1-21.1h.1-.3.2z" fill="currentColor"></svg:path><svg:path d="M222.9 421.7c-39.9 0-72.8-13.4-102.7-40.3-29.1-26.2-45.8-60.7-45.8-94.5v-43.6c0-24.1 6.8-47.6 19.6-68 12.5-19.9 30.2-36 51.1-46.7 3.1-1.6 5.5-4.3 6.6-7.7 1.1-3.3.8-6.9-.8-10.1-2.3-4.4-6.8-7.2-11.8-7.2-2.1 0-4.1.5-6 1.4-25.1 12.8-46.4 32.2-61.4 56.1-15.5 24.6-23.7 53-23.7 82v43.6c0 41.2 19.9 82.8 54.5 114 34.6 31.2 74 47.1 120.4 47.1 7.3 0 13.2-5.9 13.2-13.2-.1-7-6-12.9-13.2-12.9z" fill="currentColor"></svg:path><svg:g><svg:path d="M348.4 115.1c.8-11.9 10.3-21.6 22.2-22.6 4.3-.4 8.4.4 12 2 2.6 1.1 5.1-1.6 3.9-4.1-2.7-5.7-6.6-10.9-11.5-15.1C366.6 68 355.9 64 344.8 64H167.2c-17.9 0-33.9 10.3-41.5 25.8-1.2 2.5 1.2 5.2 3.9 4.2 3.3-1.3 7-1.8 10.8-1.5 11.9 1 21.4 10.8 22.2 22.7.8 13.6-9.5 25-22.8 25.8-.9.1-1.8.7-2.1 1.5-.4 1.1-.1 2.3.8 3 8.1 6.2 18.1 9.7 28.7 9.7h177.6c10.9 0 21.2-3.6 29.4-10.2 1.7-1.3.7-4-1.4-4h-.1c-14 0-25.2-11.7-24.3-25.9zm-21.6-10.3c3.5 15.8-10.7 30-26.5 26.5-8.4-1.9-15.2-8.6-17-17-3.5-15.8 10.7-30 26.5-26.5 8.4 1.9 15.2 8.6 17 17z" fill="currentColor"></svg:path></svg:g>`,
})
export class IonIosWatchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosWaterIcon],svg[ion-ios-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 146.4c-34.4-48.6-67.5-78.5-90.8-96.6-3.1-2.4-7.3-2.4-10.4-.1-23 17.1-56.1 48.4-90.5 96.5-37.3 52-63 108.4-64.2 170.9 0 1.2-.1 2.5-.1 3.7 0 18.4 3.9 35.9 10.9 52.1 4.1 9.3 9.2 18.1 15.2 26.3 28.5 39 77.8 64.8 133.8 64.8 88.4 0 160.1-64.1 160.1-143.2 0-63.7-27-122.2-64-174.4zm-86 264.3h-.5c-9.9 0-12-14.1-2.6-17.1 45.1-14.2 69.6-38.5 86.4-80.8 3.5-8.9 16.7-6.5 16.8 3.1v1.4c-.1 51.6-44.9 93.4-100.1 93.4z" fill="currentColor"></svg:path>`,
})
export class IonIosWaterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosWifiIcon],svg[ion-ios-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 96c-81.5 0-163 33.6-221.5 88.3-3.3 3-3.4 8.1-.3 11.4l26.7 27.9c3.1 3.3 8.3 3.4 11.6.3 23.3-21.6 49.9-38.8 79.3-51 33-13.8 68.1-20.7 104.3-20.7s71.3 7 104.3 20.7c29.4 12.3 56 29.4 79.3 51 3.3 3.1 8.5 3 11.6-.3l26.7-27.9c3.1-3.2 3-8.3-.3-11.4C419 129.6 337.5 96 256 96z" fill="currentColor"></svg:path><svg:path d="M113.2 277.5l28.6 28.3c3.1 3 8 3.2 11.2.3 28.3-25.1 64.6-38.9 102.9-38.9s74.6 13.7 102.9 38.9c3.2 2.9 8.1 2.7 11.2-.3l28.6-28.3c3.3-3.3 3.2-8.6-.3-11.7-37.5-33.9-87.6-54.6-142.5-54.6s-105 20.7-142.5 54.6c-3.3 3.1-3.4 8.4-.1 11.7z" fill="currentColor"></svg:path><svg:path d="M256 324.2c-23.4 0-44.6 9.8-59.4 25.5-3 3.2-2.9 8.1.2 11.2l53.4 52.7c3.2 3.2 8.4 3.2 11.6 0l53.4-52.7c3.1-3.1 3.2-8 .2-11.2-14.8-15.6-36-25.5-59.4-25.5z" fill="currentColor"></svg:path>`,
})
export class IonIosWifiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosWineIcon],svg[ion-ios-wine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M328.9 51.2c-2-5.5-7-9.2-12.9-9.2H196c-6 0-10.9 3.7-13 9.2-9.3 25-31 87.1-31 124.8v4.8c0 19.2 0 45.4 28.4 74.5 6.5 6.7 14.3 12.9 22.5 19.5 19.1 15.3 38.8 31.1 38.8 50.2v115c0 1.1-.9 2-2 2h-57.1c-7.9 0-14.3 6.3-14.3 14s6.4 14 14.3 14h146.8c7.9 0 14.3-6.3 14.3-14s-6.4-14-14.3-14h-57.1c-1.1 0-2-.9-2-2V325c0-19.1 19.7-34.9 38.8-50.2 8.2-6.6 15.9-12.8 22.5-19.5C360 226.2 360 200 360 180.8V176c0-37.5-21.7-99.8-31.1-124.8zm-1.4 102.1c-.2.3-.7.7-1.6.7H186.1c-.8 0-1.3-.5-1.6-.7-.2-.3-.6-.8-.4-1.7 5.1-26.1 14.8-59.6 21.6-80.2.3-.8 1.1-1.4 1.9-1.4h96.8c.9 0 1.7.6 1.9 1.4 6.7 20.7 16.4 54.1 21.6 80.2.2.8-.2 1.4-.4 1.7z" fill="currentColor"></svg:path>`,
})
export class IonIosWineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosWineglassIcon],svg[ion-ios-wineglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M264 308.988c0-21.975 20.458-38.674 40.247-54.824 7.907-6.453 15.37-12.547 21.519-18.962C352.313 207.505 352 183.458 352 164.144V160c0-44.25-30.816-124.558-32.02-128H192c-1.203 3.442-32 83.5-32 128v4.144c0 19.273-.323 43.361 26.225 71.059 6.148 6.415 13.617 12.509 21.523 18.962 19.789 16.15 40.252 32.85 40.252 54.824V464h-72v16h160v-16h-72V308.988zM202.729 48H309.251c5.359 15.99 19.509 62.712 24.836 96H177.894c5.327-33.288 19.476-80.01 24.835-96z" fill="currentColor"></svg:path>`,
})
export class IonIosWineglassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosWineglassOutlineIcon],svg[ion-ios-wineglass-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M264 308.988c0-21.975 20.458-38.674 40.247-54.824 7.907-6.453 15.37-12.547 21.519-18.962C352.313 207.505 352 183.458 352 164.144V160c0-44.25-30.816-124.558-32.02-128H192c-1.203 3.442-32 83.5-32 128v4.144c0 19.273-.323 43.361 26.225 71.059 6.148 6.415 13.617 12.509 21.523 18.962 19.789 16.15 40.252 32.85 40.252 54.824V464h-72v16h160v-16h-72V308.988zM202.729 48H309.251c5.359 15.99 19.509 62.712 24.836 96H177.894c5.327-33.288 19.476-80.01 24.835-96zM256 273.416c-2.968 0-5.248-.92-7.17-2.754a.2.2 0 0 0 .005.026c-8.804-10.807-20.234-20.158-30.971-28.92-7.517-6.135-14.617-11.929-20.089-17.637-22.054-23.008-21.928-40.916-21.795-59.875.01-1.428-.068-2.849.02-4.255h159.98c.088 1.406.01 2.828.021 4.255.133 18.959.259 36.867-21.795 59.875-5.472 5.708-12.57 11.502-20.087 17.637-10.737 8.762-22.165 18.114-30.969 28.92.002-.009.009-.018.01-.026-1.922 1.834-4.16 2.754-7.16 2.754z" fill="currentColor"></svg:path>`,
})
export class IonIosWineglassOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosWomanIcon],svg[ion-ios-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M286 496c-6.1 0-11.8-2.3-16-6.6-3.2-3.3-7.1-9.1-7.1-18.6V351.4H249v119.4c0 9.5-4 15.4-7.4 18.7-4.3 4.2-10.1 6.5-16.3 6.5-6.2 0-11.9-2.3-16.3-6.5-3.4-3.3-7.4-9.1-7.4-18.7V351.4h-43.9l44.5-170.6h-6.8L171 271.2c-4 13.1-13.7 17.8-21.4 17.8-6.6 0-12.9-3.2-17-8.7-4.8-6.4-6.1-14.9-3.6-23.9l29-104.1c4.2-15.2 20.7-38.2 48.7-39.3H305.1c28.4 1.2 44.1 26 48.5 38.9l.1.4 29 104.3c2.4 9 1 17.6-3.9 24-4.1 5.4-10.4 8.6-16.9 8.6-7.7 0-17.3-4.8-21.3-18.1v-.2l-24.3-90.1h-7.7l45.5 170.6H309v119.4c0 9.5-3.9 15.3-7.1 18.6-4.2 4.3-9.8 6.6-15.9 6.6z" fill="currentColor"></svg:path><svg:path d="M255.9 106.4c-24.2 0-43.9-20.3-43.9-45.2S231.7 16 255.9 16s43.9 20.3 43.9 45.2-19.7 45.2-43.9 45.2z" fill="currentColor"></svg:path>`,
})
export class IonIosWomanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosWorldIcon],svg[ion-ios-world-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48h-.2H255.5C140.8 48.3 48 141.3 48 256s92.8 207.7 207.5 208h.5c114.9 0 208-93.1 208-208S370.9 48 256 48zm0 399.4h-.2H255.5C150.1 447.1 64.6 361.5 64.6 256S150 64.9 255.5 64.7h.5c105.7 0 191.4 85.7 191.4 191.4 0 105.6-85.7 191.3-191.4 191.3z" fill="currentColor"></svg:path><svg:path d="M322.3 171.8c-18.7 4.5-38 7.2-57.9 7.8v68.1H332c-.6-28.1-4.1-53.6-9.7-75.9z" fill="currentColor"></svg:path><svg:path d="M264.3 82.5v81.9c18.5-.6 36.5-3 53.8-7.2-13.1-41.4-33.5-68.6-53.8-74.7z" fill="currentColor"></svg:path><svg:path d="M193.4 157.1c17.5 4.2 35.6 6.7 54.2 7.3V82.3c-20.3 5.9-41 33.1-54.2 74.8z" fill="currentColor"></svg:path><svg:path d="M380.6 133.4c-22.6-23-51.5-39.8-83.9-47.5 14.8 15.3 27.2 38.7 36.1 67.3 16.7-5.1 32.7-11.7 47.8-19.8z" fill="currentColor"></svg:path><svg:path d="M347.3 247.7h83.3c-1.8-38.8-16.3-74.4-39.5-102.6-17.1 9.4-35.2 17.1-54.1 22.8 6.1 24 9.7 51.1 10.3 79.8z" fill="currentColor"></svg:path><svg:path d="M179.5 247.7h68.2v-68.1c-20.1-.6-39.6-3.3-58.4-7.9-5.7 22.3-9.2 47.9-9.8 76z" fill="currentColor"></svg:path><svg:path d="M332 264.3h-67.7v68c19.9.6 39.3 3.2 58 7.8 5.6-22.2 9.1-47.8 9.7-75.8z" fill="currentColor"></svg:path><svg:path d="M189.3 340.2c18.8-4.6 38.3-7.3 58.4-7.9v-68h-68.2c.6 28.1 4.1 53.7 9.8 75.9z" fill="currentColor"></svg:path><svg:path d="M247.7 429.6v-82.1c-18.6.6-36.8 3.1-54.3 7.3 13.2 41.7 33.9 69 54.3 74.8z" fill="currentColor"></svg:path><svg:path d="M296.7 426.1c32.4-7.8 61.3-24.5 84-47.6-15.1-8.1-31.1-14.7-47.8-19.8-8.9 28.7-21.4 52-36.2 67.4z" fill="currentColor"></svg:path><svg:path d="M214.7 86.1c-32.1 7.8-60.8 24.5-83.3 47.4 15 8 30.8 14.6 47.3 19.6 8.9-28.5 21.3-51.7 36-67z" fill="currentColor"></svg:path><svg:path d="M337 344.1c19 5.7 37.1 13.4 54.2 22.8 23.2-28.2 37.7-63.8 39.5-102.6h-83.3c-.7 28.7-4.3 55.7-10.4 79.8z" fill="currentColor"></svg:path><svg:path d="M264.3 347.5v82c20.3-6.1 40.7-33.3 53.8-74.8-17.3-4.2-35.3-6.6-53.8-7.2z" fill="currentColor"></svg:path><svg:path d="M174.6 167.8c-18.8-5.7-36.8-13.3-53.7-22.7-23.2 28.2-37.7 63.8-39.5 102.6h82.9c.5-28.8 4.2-55.9 10.3-79.9z" fill="currentColor"></svg:path><svg:path d="M164.2 264.3H81.3c1.8 38.8 16.3 74.4 39.5 102.6 16.9-9.3 34.9-17 53.7-22.7-6-24-9.7-51.1-10.3-79.9z" fill="currentColor"></svg:path><svg:path d="M131.3 378.5c22.5 22.9 51.2 39.6 83.4 47.4-14.7-15.3-27.1-38.6-36-67.1-16.5 5.1-32.4 11.7-47.4 19.7z" fill="currentColor"></svg:path>`,
})
export class IonIosWorldIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosWorldOutlineIcon],svg[ion-ios-world-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48h-.2H255.5C140.8 48.3 48 141.3 48 256s92.8 207.7 207.5 208h.5c114.9 0 208-93.1 208-208S370.9 48 256 48zm8.3 124.5c22.1-.6 43.5-3.5 64.2-8.5 6.2 24.5 10.1 52.8 10.7 83.8h-74.9v-75.3zm0-16.7V66c22.4 6.2 45.2 36.1 59.6 82-19.2 4.6-39.1 7.2-59.6 7.8zm-16.6-90v90.1c-20.7-.6-40.8-3.3-60.1-8 14.6-46.2 37.5-76.3 60.1-82.1zm0 106.7v75.2h-75.4c.6-31 4.5-59.3 10.7-83.8 20.8 5 42.5 8 64.7 8.6zm-92.2 75.2H64.9c1.8-42.8 17.8-82 43.3-113 18.5 10.2 38.2 18.6 58.8 24.8-6.8 26.5-10.8 56.4-11.5 88.2zm0 16.6c.6 31.7 4.6 61.7 11.4 88.2-20.6 6.3-40.2 14.6-58.8 24.8-25.5-31-41.4-70.2-43.3-113h90.7zm16.8 0h75.4v75.1c-22.2.6-43.9 3.6-64.7 8.7-6.2-24.5-10.1-52.8-10.7-83.8zm75.4 91.8v90.2c-22.6-5.9-45.5-35.9-60.1-82.1 19.3-4.8 39.4-7.5 60.1-8.1zm16.6 89.9v-90c20.5.6 40.4 3.3 59.7 7.9-14.5 46-37.2 75.9-59.7 82.1zm0-106.6v-75.1h74.9c-.6 30.9-4.5 59.2-10.7 83.7-20.7-5-42.1-8-64.2-8.6zm91.6-75.1h91.2c-1.8 42.8-17.8 81.9-43.3 113-18.7-10.3-38.5-18.7-59.3-25 6.8-26.5 10.8-56.3 11.4-88zm0-16.6c-.6-31.7-4.6-61.6-11.3-88.1 20.8-6.3 40.6-14.7 59.2-24.9 25.5 31 41.5 70.2 43.3 113.1h-91.2zm36.5-125.8c-16.6 8.8-34 16.1-52.3 21.6-9.7-31.3-23.4-56.8-39.5-73.6 35.4 8.5 67 26.9 91.8 52zM210.8 70.1c-16.1 16.7-29.7 42.2-39.3 73.3-18.1-5.5-35.4-12.7-51.8-21.5 24.5-25 55.9-43.3 91.1-51.8zM119.6 390c16.4-8.8 33.8-16 51.8-21.5 9.7 31.2 23.3 56.6 39.4 73.4-35.2-8.5-66.6-26.8-91.2-51.9zm181 52.1c16.2-16.8 29.8-42.3 39.6-73.7 18.3 5.5 35.7 12.8 52.3 21.6-24.8 25.2-56.5 43.6-91.9 52.1z" fill="currentColor"></svg:path>`,
})
export class IonIosWorldOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIpadIcon],svg[ion-ipad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M112 72.8v366.4c0 4.9 3.9 8.8 8.8 8.8h270.4c4.9 0 8.8-3.9 8.8-8.8V72.8c0-4.9-3.9-8.8-8.8-8.8H120.8c-4.9 0-8.8 3.9-8.8 8.8zm144 364.8c-7.5 0-13.6-6-13.6-13.5s6.1-13.6 13.6-13.6c7.4 0 13.5 6.1 13.5 13.6.1 7.5-6 13.5-13.5 13.5zm-112-319c0-3.5 2.7-6.6 6-6.6h211.2c3.4 0 6.8 3.1 6.8 6.6v275.2c0 3.5-3.4 6.3-6.8 6.3H150c-3.4 0-6-2.8-6-6.3V118.6z" fill="currentColor"></svg:path>`,
})
export class IonIpadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIphoneIcon],svg[ion-iphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M328.2 64H183.8C170.7 64 160 74.7 160 87.9v336.3c0 13.1 10.7 23.8 23.8 23.8h144.3c13.1 0 23.8-10.7 23.8-23.8V87.9C352 74.7 341.3 64 328.2 64zM240 99.9c0-2.1 1.7-3.9 3.9-3.9h24.3c2.1 0 3.9 1.7 3.9 3.9v.3c0 2.1-1.7 3.9-3.9 3.9h-24.3c-2.1 0-3.9-1.7-3.9-3.9v-.3zM228 96c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm28 336.1c-8.9 0-16.1-7.2-16.1-16.1 0-8.9 7.2-16.1 16.1-16.1 8.9 0 16.1 7.2 16.1 16.1 0 8.9-7.3 16.1-16.1 16.1zm80-48.1H176V128h160v256z" fill="currentColor"></svg:path>`,
})
export class IonIphoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIpodIcon],svg[ion-ipod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 311c-17.7 0-32 14.3-32 32 0 17.6 14.3 32 32 32 17.6 0 32-14.3 32-32s-14.3-32-32-32z" fill="currentColor"></svg:path><svg:path d="M340.4 64H171.6C156.4 64 144 76.2 144 91.7v328.7c0 15.5 12.4 27.7 27.6 27.7h168.8c15.2 0 27.6-12.2 27.6-27.7V91.7c0-15.5-12.4-27.7-27.6-27.7zm-84.3 352.1c-39.8 0-72.1-32.2-72.1-72 0-39.7 32.3-72 72.1-72 39.7 0 71.9 32.3 71.9 72 0 39.8-32.2 72-71.9 72zm79.8-189.3c-.8 7.6-7 13.2-14.7 13.2h-131c-8.2 0-14.2-6.2-14.2-14.6V110.9c0-7.5 5-13.7 12-14.9h135.8c6.5 1.2 11.5 6.6 12.2 13.3l-.1 117.5z" fill="currentColor"></svg:path>`,
})
export class IonIpodIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionJetIcon],svg[ion-jet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M314.8 368.5L419 403l-3-52.7L302 247S276.1 73.3 273.8 54.7C268.5 14.4 255.9 0 255.9 0s-12.5 14.4-17.6 54.6C235.9 73.3 210 247 210 247L96 350.3 93 403l104.2-34.5 1.4 12.3-52.7 58.3 18.3 27.4 73.3-9.1 18.3 54.6 18.5-54.6 73.4 9.1 18.3-27.4-52.7-58.3 1.5-12.3z" fill="currentColor"></svg:path>`,
})
export class IonJetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionJournalIcon],svg[ion-journal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M290 32H144a64.07 64.07 0 0 0-64 64v320a64.07 64.07 0 0 0 64 64h146Zm78 0h-18v448h18a64.07 64.07 0 0 0 64-64V96a64.07 64.07 0 0 0-64-64"></svg:path>`,
})
export class IonJournalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionJournalOutlineIcon],svg[ion-journal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="320" height="416" x="96" y="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="60" d="M320 48v416"></svg:path>`,
})
export class IonJournalOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionJournalSharpIcon],svg[ion-journal-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M290 32H104a24 24 0 0 0-24 24v400a24 24 0 0 0 24 24h186Zm118 0h-58v448h58a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24"></svg:path>`,
})
export class IonJournalSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionKeyIcon],svg[ion-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.1 167.17c0 13 0 25.6 4.1 37.4c-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 0 0-6.7 15c0 8.5 5.2 16.7 9.6 21.3c6.6 6.9 34.8 33 40 28c15.4-15 18.5-19 24.8-25.2c9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4s15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2c5-4.6 8.6-8.9 8.7-15.6c.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5s22.8-15.5 24.1-21.6s-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4c15.5 6.7 29.6 9.4 47.7 9.4c68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17M400 144a32 32 0 1 1-32-32a32 32 0 0 1 32 32"></svg:path>`,
})
export class IonKeyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionKeyOutlineIcon],svg[ion-key-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M218.1 167.17c0 13 0 25.6 4.1 37.4c-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 0 0-6.7 15c0 8.5 5.2 16.7 9.6 21.3c6.6 6.9 34.8 33 40 28c15.4-15 18.5-19 24.8-25.2c9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4s15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2c5-4.6 8.6-8.9 8.7-15.6c.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5s22.8-15.5 24.1-21.6s-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4c15.5 6.7 29.6 9.4 47.7 9.4c68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17ZM400 144a32 32 0 1 1-32-32a32 32 0 0 1 32 32Z"></svg:path>`,
})
export class IonKeyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionKeySharpIcon],svg[ion-key-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.1 167.2c0 13 0 25.6 4.1 37.4c-43.1 50.6-167.5 194.5-167.5 194.5l2.9 36.3s34.8 33 40 28c15.4-15 24.8-25.2 24.8-25.2l7.24-43.35l47.11-3.47l3.78-46.8l49.63-.95l.49-50.09l52.69 2.1l9-18.84c15.5 6.7 29.6 9.4 47.7 9.4c68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.4-121.9 119.2M406.85 144A38.85 38.85 0 1 1 368 105.15A38.81 38.81 0 0 1 406.85 144"></svg:path>`,
})
export class IonKeySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionKeypadIcon],svg[ion-keypad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 400a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48m128 256a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48M128 272a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48"></svg:path>`,
})
export class IonKeypadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionKeypadOutlineIcon],svg[ion-keypad-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="448" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="256" cy="320" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M288 192a32 32 0 1 1-32-32a32 32 0 0 1 32 32Z"></svg:path><svg:circle cx="256" cy="64" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="384" cy="320" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="384" cy="192" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="384" cy="64" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="128" cy="320" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="128" cy="192" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="128" cy="64" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class IonKeypadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionKeypadSharpIcon],svg[ion-keypad-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="96" height="96" x="80" y="16" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="208" y="16" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="336" y="16" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="80" y="144" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="208" y="144" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="336" y="144" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="80" y="272" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="208" y="272" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="208" y="400" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="336" y="272" fill="currentColor" rx="8" ry="8"></svg:rect>`,
})
export class IonKeypadSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionKnifeIcon],svg[ion-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M285.7 32c-3.3 0-6 1.4-8 3.8C259 58.7 224 116.1 224 250.1c0 39.2 33 39.2 32 69.4v.4c-2 47.1-14.9 111.1-16 130.3-.4 15.2 9.7 29.8 24.1 29.8h.4c14.4 0 23.5-14.4 23.5-29.6V38.3c0-5-.5-6.3-2.3-6.3z" fill="currentColor"></svg:path>`,
})
export class IonKnifeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLanguageIcon],svg[ion-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4ZM334.83 362L368 281.65L401.17 362Zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9Z"></svg:path>`,
})
export class IonLanguageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLanguageOutlineIcon],svg[ion-language-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 112h288M192 64v48m80 336l96-224l96 224m-162.5-64h133M281.3 112S257 206 199 277S80 384 80 384"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 336s-35-27-72-75s-56-85-56-85"></svg:path>`,
})
export class IonLanguageOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLanguageSharpIcon],svg[ion-language-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 176L246 464h47.24l24.49-58h90.54l24.49 58H480Zm-26.69 186L363 279.85L389.69 362ZM272 320c-.25-.19-20.59-15.77-45.42-42.67c39.58-53.64 62-114.61 71.15-143.33H352V90H214V48h-44v42H32v44h219.25c-9.52 26.95-27.05 69.5-53.79 108.36c-32.68-43.44-47.14-75.88-47.33-76.22L143 152l-38 22l6.87 13.86c.89 1.56 17.19 37.9 54.71 86.57c.92 1.21 1.85 2.39 2.78 3.57c-49.72 56.86-89.15 79.09-89.66 79.47L64 368l23 36l19.3-11.47c2.2-1.67 41.33-24 92-80.78c24.52 26.28 43.22 40.83 44.3 41.67L255 362Z"></svg:path>`,
})
export class IonLanguageSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLaptopIcon],svg[ion-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 400h-28.34A47.92 47.92 0 0 0 480 367.86V128.14A48.2 48.2 0 0 0 431.86 80H80.14A48.2 48.2 0 0 0 32 128.14v239.72A47.92 47.92 0 0 0 44.34 400H16a16 16 0 0 0 0 32h480a16 16 0 0 0 0-32"></svg:path>`,
})
export class IonLaptopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLaptopOutlineIcon],svg[ion-laptop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="304" x="48" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="32.14" ry="32.14"></svg:rect><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M16 416h480"></svg:path>`,
})
export class IonLaptopOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLaptopSharpIcon],svg[ion-laptop-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M477.29 400a27.75 27.75 0 0 0 2.71-12V108a28 28 0 0 0-28-28H60a28 28 0 0 0-28 28v280a27.75 27.75 0 0 0 2.71 12H0v32h512v-32Z"></svg:path>`,
})
export class IonLaptopSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLayersIcon],svg[ion-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 256c-13.47 0-26.94-2.39-37.44-7.17l-148-67.49C63.79 178.26 48 169.25 48 152.24s15.79-26 22.58-29.12l149.28-68.07c20.57-9.4 51.61-9.4 72.19 0l149.37 68.07c6.79 3.09 22.58 12.1 22.58 29.12s-15.79 26-22.58 29.11l-148 67.48C282.94 253.61 269.47 256 256 256m176.76-100.86"></svg:path><svg:path fill="currentColor" d="M441.36 226.81L426.27 220l-38.77 17.74l-94 43c-10.5 4.8-24 7.19-37.44 7.19s-26.93-2.39-37.42-7.19l-94.07-43L85.79 220l-15.22 6.84C63.79 229.93 48 239 48 256s15.79 26.08 22.56 29.17l148 67.63C229 357.6 242.49 360 256 360s26.94-2.4 37.44-7.19l147.87-67.61c6.81-3.09 22.69-12.11 22.69-29.2s-15.77-26.07-22.64-29.19"></svg:path><svg:path fill="currentColor" d="m441.36 330.8l-15.09-6.8l-38.77 17.73l-94 42.95c-10.5 4.78-24 7.18-37.44 7.18s-26.93-2.39-37.42-7.18l-94.07-43L85.79 324l-15.22 6.84C63.79 333.93 48 343 48 360s15.79 26.07 22.56 29.15l148 67.59C229 461.52 242.54 464 256 464s26.88-2.48 37.38-7.27l147.92-67.57c6.82-3.08 22.7-12.1 22.7-29.16s-15.77-26.07-22.64-29.2"></svg:path>`,
})
export class IonLayersIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLayersOutlineIcon],svg[ion-layers-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m434.8 137.65l-149.36-68.1c-16.19-7.4-42.69-7.4-58.88 0L77.3 137.65c-17.6 8-17.6 21.09 0 29.09l148 67.5c16.89 7.7 44.69 7.7 61.58 0l148-67.5c17.52-8 17.52-21.1-.08-29.09M160 308.52l-82.7 37.11c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.89 7.69 44.69 7.69 61.58 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-79.94-38.47"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m160 204.48l-82.8 37.16c-17.6 8-17.6 21.1 0 29.1l148 67.49c16.89 7.7 44.69 7.7 61.58 0l148-67.49c17.7-8 17.7-21.1.1-29.1L352 204.48"></svg:path>`,
})
export class IonLayersOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLayersSharpIcon],svg[ion-layers-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 150L256 48L32 150l224 104zM255.71 392.95l-144.81-66.2L32 362l224 102l224-102l-78.69-35.3z"></svg:path><svg:path fill="currentColor" d="m480 256l-75.53-33.53L256.1 290.6l-148.77-68.17L32 256l224 102z"></svg:path>`,
})
export class IonLayersSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLeafIcon],svg[ion-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161.35 242a16 16 0 0 1 22.62-.68c73.63 69.36 147.51 111.56 234.45 133.07c11.73-32 12.77-67.22 2.64-101.58c-13.44-45.59-44.74-85.31-90.49-114.86c-40.84-26.38-81.66-33.25-121.15-39.89c-49.82-8.38-96.88-16.3-141.79-63.85c-5-5.26-11.81-7.37-18.32-5.66c-7.44 2-12.43 7.88-14.82 17.6c-5.6 22.75-2 86.51 13.75 153.82c25.29 108.14 65.65 162.86 95.06 189.73c38 34.69 87.62 53.9 136.93 53.9a186 186 0 0 0 27.77-2.04c41.71-6.32 76.43-27.27 96-57.75c-89.49-23.28-165.94-67.55-242-139.16a16 16 0 0 1-.65-22.65m306.08 142.19c-16.83-2.59-33.13-5.84-49-9.77a157.7 157.7 0 0 1-12.13 25.68c-.73 1.25-1.5 2.49-2.29 3.71a584 584 0 0 0 58.56 12a16 16 0 1 0 4.87-31.62Z"></svg:path>`,
})
export class IonLeafIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLeafOutlineIcon],svg[ion-leaf-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7c77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M173 253c86 81 175 129 292 147"></svg:path>`,
})
export class IonLeafOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLeafSharpIcon],svg[ion-leaf-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m150.38 253.68l21.94-23.3l11.65 11c73.63 69.36 147.51 111.56 234.45 133.07c11.73-32 12.77-67.22 2.64-101.58c-13.44-45.59-44.74-85.31-90.49-114.86c-40.25-26-76.6-32.09-115.09-38.54c-21.12-3.54-43-7.2-66.85-14.43c-43.78-13.28-89.69-52.74-90.15-53.13L33.4 30.15L32 63.33c-.1 2.56-2.42 63.57 14.22 147.77c17.58 89 50.24 155.85 97.07 198.63c38 34.69 87.62 53.9 136.93 53.9a186 186 0 0 0 27.78-2.07c41.72-6.32 76.43-27.27 96-57.75c-89.5-23.28-165.95-67.55-242-139.16Z"></svg:path><svg:path fill="currentColor" d="M467.43 384.19c-16.83-2.59-33.13-5.84-49-9.77a158.5 158.5 0 0 1-12.13 25.68c-.74 1.25-1.51 2.49-2.29 3.71a583 583 0 0 0 58.55 12l15.82 2.44l4.86-31.63Z"></svg:path>`,
})
export class IonLeafSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLevelsIcon],svg[ion-levels-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M127 99.2V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v21.5c-8.5 5.8-14 15.5-14 26.5s5.5 20.7 14 26.5V432c0 8.8 7.2 16 16 16s16-7.2 16-16V156.8c10.7-5.2 18-16.1 18-28.8s-7.3-23.6-18-28.8z" fill="currentColor"></svg:path><svg:path d="M223 292.9V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v211.7c-10.1 5.4-17 16-17 28.3s6.9 22.9 17 28.3V432c0 8.8 7.2 16 16 16s16-7.2 16-16v-84.9c9-5.7 15-15.7 15-27.1s-6-21.4-15-27.1z" fill="currentColor"></svg:path><svg:path d="M319 163.3V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v83.3c-9.6 5.5-16 15.9-16 27.7s6.4 22.2 16 27.7V432c0 8.8 7.2 16 16 16s16-7.2 16-16V218.7c9.6-5.5 16-15.9 16-27.7s-6.4-22.2-16-27.7z" fill="currentColor"></svg:path><svg:path d="M431 383c0-11.8-6.4-22.2-16-27.7V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v275.3c-9.6 5.5-16 15.9-16 27.7s6.4 22.2 16 27.7V432c0 8.8 7.2 16 16 16s16-7.2 16-16v-21.3c9.6-5.5 16-15.9 16-27.7z" fill="currentColor"></svg:path>`,
})
export class IonLevelsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLibraryIcon],svg[ion-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 480H48a32 32 0 0 1-32-32V112a32 32 0 0 1 32-32h16a32 32 0 0 1 32 32v336a32 32 0 0 1-32 32m176-304a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v28a4 4 0 0 0 4 4h120a4 4 0 0 0 4-4ZM112 448a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32v-30a2 2 0 0 0-2-2H114a2 2 0 0 0-2 2Z"></svg:path><svg:rect width="128" height="144" x="112" y="240" fill="currentColor" rx="2" ry="2"></svg:rect><svg:path fill="currentColor" d="M320 480h-32a32 32 0 0 1-32-32V64a32 32 0 0 1 32-32h32a32 32 0 0 1 32 32v384a32 32 0 0 1-32 32m175.89-34.55l-32.23-340c-1.48-15.65-16.94-27-34.53-25.31l-31.85 3c-17.59 1.67-30.65 15.71-29.17 31.36l32.23 340c1.48 15.65 16.94 27 34.53 25.31l31.85-3c17.59-1.67 30.65-15.71 29.17-31.36"></svg:path>`,
})
export class IonLibraryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLibraryOutlineIcon],svg[ion-library-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="64" height="368" x="32" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 224h128M112 400h128"></svg:path><svg:rect width="128" height="304" x="112" y="160" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect><svg:rect width="96" height="416" x="256" y="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="m422.46 96.11l-40.4 4.25c-11.12 1.17-19.18 11.57-17.93 23.1l34.92 321.59c1.26 11.53 11.37 20 22.49 18.84l40.4-4.25c11.12-1.17 19.18-11.57 17.93-23.1L445 115c-1.31-11.58-11.42-20.06-22.54-18.89Z"></svg:path>`,
})
export class IonLibraryOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLibrarySharpIcon],svg[ion-library-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 480H28a12 12 0 0 1-12-12V92a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v376a12 12 0 0 1-12 12m156-272v-52a12 12 0 0 0-12-12H124a12 12 0 0 0-12 12v52ZM112 416v52a12 12 0 0 0 12 12h104a12 12 0 0 0 12-12v-52Zm0-176h128v144H112zm228 240h-72a12 12 0 0 1-12-12V44a12 12 0 0 1 12-12h72a12 12 0 0 1 12 12v424a12 12 0 0 1-12 12m29-379.3l30 367.83a12 12 0 0 0 13.45 10.92l72.16-9a12 12 0 0 0 10.47-12.9L465 91.21a12 12 0 0 0-13.2-10.94l-72.13 7.51A12 12 0 0 0 369 100.7"></svg:path>`,
})
export class IonLibrarySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLightbulbIcon],svg[ion-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32c-70.7 0-128 55.4-128 123.8 0 4.9.3 9.7.9 14.5.6 5.4 1.6 10.6 3 15.7.1.5.3 1.1.4 1.6 16.6 62.8 45.3 71.5 58.9 167.6 0 .2.1.4.1.5 1.5 9.2 9.8 12.3 19.8 12.3H301c10 0 18.2-3.1 19.7-12.3 0-.2.1-.4.1-.5 13.6-96.1 42.3-104.7 58.9-167.6.2-.5.3-1 .4-1.6 1.3-5.1 2.3-10.4 3-15.7.6-4.7.9-9.6.9-14.5C384 87.4 326.7 32 256 32z" fill="currentColor"></svg:path><svg:path d="M317.8 396.5c.1-.2.3-.4.4-.6 1.1-1.7 1.7-3.6 1.7-5.7 0-3.5 1.6-6.2-6.5-6.2H198.6c-8.1 0-6.5 2.1-6.5 6.2 0 2.1.6 4 1.7 5.7.1.2.3.4.5.6 0 .1.1.1.1.2 1.7 2.6 2.7 4.4 2.7 7.6 0 3.1-.9 4.9-2.6 7.5-.3.4-.5.7-.7 1-1 1.7-1.6 3.6-1.6 5.6 0 2.1.6 4 1.7 5.8.1.2.3.4.4.6 1.8 2.7 2.8 4.5 2.8 7.8 0 3.1-.9 4.9-2.6 7.4-.2.4-.5.7-.8 1.1-1 1.7-1.6 3.6-1.6 5.6 0 5.4 4.3 10.1 10.2 11.6.3.1.6.1.9.2 6 1.4 12.2 1.6 18.5 2.5.7.1 1.4.2 2.2.3 5.6 1 10.3 3.9 13.4 7.7 3.8 5.3 10.8 11 18.8 11 7.6 0 14.3-5.4 18.2-10.4 3-4.2 8-7.3 13.9-8.4.7-.1 1.4-.3 2.2-.3 6.3-.9 12.5-1.1 18.5-2.5.3-.1.6-.1.9-.2 5.9-1.6 10.2-6.2 10.2-11.6 0-2-.6-3.9-1.6-5.6-.3-.4-.5-.7-.8-1.1-1.6-2.6-2.6-4.3-2.6-7.4 0-3.2 1-5.1 2.8-7.8.1-.2.3-.4.4-.6 1.1-1.7 1.7-3.7 1.7-5.8 0-2-.6-3.9-1.6-5.6-.3-.3-.5-.7-.7-1-1.6-2.6-2.6-4.3-2.6-7.5s1-5 2.7-7.6c0 .1 0 0 .1-.1z" fill="currentColor"></svg:path>`,
})
export class IonLightbulbIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLinkIcon],svg[ion-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M200.66 352H144a96 96 0 0 1 0-192h55.41m113.18 0H368a96 96 0 0 1 0 192h-56.66m-142.27-96h175.86"></svg:path>`,
})
export class IonLinkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLinkOutlineIcon],svg[ion-link-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="36" d="M208 352h-64a96 96 0 0 1 0-192h64m96 0h64a96 96 0 0 1 0 192h-64m-140.71-96h187.42"></svg:path>`,
})
export class IonLinkOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLinkSharpIcon],svg[ion-link-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="48" d="M200.66 352H144a96 96 0 0 1 0-192h55.41m113.18 0H368a96 96 0 0 1 0 192h-56.66m-142.27-96h175.86"></svg:path>`,
})
export class IonLinkSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionListIcon],svg[ion-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M160 144h288M160 256h288M160 368h288"></svg:path><svg:circle cx="80" cy="144" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="80" cy="256" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="80" cy="368" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class IonListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionListCircleIcon],svg[ion-list-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-88 302a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-71a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-73a24 24 0 1 1 24-24a24 24 0 0 1-24 24m184 135H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32m0-71H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32m0-72H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32"></svg:path>`,
})
export class IonListCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionListCircleOutlineIcon],svg[ion-list-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 184h128m-128 72h128m-128 71h128"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 258c0-106-86-192-192-192S64 152 64 258s86 192 192 192s192-86 192-192Z"></svg:path><svg:circle cx="168" cy="184" r="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="168" cy="257" r="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="168" cy="328" r="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class IonListCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionListCircleSharpIcon],svg[ion-list-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-64 287.5a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16Zm0-71a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16Zm0-72a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16Zm176 151H212.67v-32H368Zm0-71H212.67v-32H368Zm0-72H212.67v-32H368Z"></svg:path>`,
})
export class IonListCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionListOutlineIcon],svg[ion-list-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 144h288M160 256h288M160 368h288"></svg:path><svg:circle cx="80" cy="144" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="80" cy="256" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="80" cy="368" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class IonListOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionListSharpIcon],svg[ion-list-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="48" d="M144 144h320M144 256h320M144 368h320"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="M64 128h32v32H64zm0 112h32v32H64zm0 112h32v32H64z"></svg:path>`,
})
export class IonListSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLoadAIcon],svg[ion-load-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="96" r="64" fill="currentColor"></svg:circle><svg:circle cx="96" cy="256" r="48" fill="currentColor"></svg:circle><svg:circle cx="368" cy="144" r="8" fill="currentColor"></svg:circle><svg:path d="M180.1 107.6c-19.9-20.1-52.2-20.1-72.1 0-19.9 20.1-19.9 52.7 0 72.8 19.9 20.1 52.2 20.1 72.1 0 19.9-20.1 19.9-52.7 0-72.8z" fill="currentColor"></svg:path><svg:circle cx="416" cy="256" r="16" fill="currentColor"></svg:circle><svg:circle cx="369" cy="369" r="24" fill="currentColor"></svg:circle><svg:circle cx="256" cy="416" r="32" fill="currentColor"></svg:circle><svg:circle cx="144" cy="368" r="40" fill="currentColor"></svg:circle>`,
})
export class IonLoadAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLoadBIcon],svg[ion-load-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M288 160c0 17.7-14.3 32-32 32s-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v96z" fill="currentColor"></svg:path><svg:path d="M256 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c0-17.7-14.3-32-32-32z" fill="currentColor"></svg:path><svg:path d="M448 224h-96c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32z" fill="currentColor"></svg:path><svg:path d="M160 224H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32z" fill="currentColor"></svg:path><svg:path d="M346.5 210.7c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l67.9-67.9c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-67.9 67.9z" fill="currentColor"></svg:path><svg:path d="M210.7 301.3c-12.5-12.5-32.8-12.5-45.3 0l-67.9 67.9C85 381.7 85 402 97.5 414.5s32.8 12.5 45.3 0l67.9-67.9c12.5-12.6 12.5-32.8 0-45.3z" fill="currentColor"></svg:path><svg:path d="M414.4 369.1l-67.9-67.9c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l67.9 67.9c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" fill="currentColor"></svg:path><svg:path d="M210.7 165.5l-67.9-67.9c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l67.9 67.9c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" fill="currentColor"></svg:path>`,
})
export class IonLoadBIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLoadCIcon],svg[ion-load-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M479.8 226.1c-1.4-8.7-3.1-17.3-5.3-25.8-2.8-10.8-6.4-21.5-10.8-31.8-8.9-21.2-21.1-41-35.9-58.6-16-18.9-35.3-35.2-56.7-47.7C350 49.8 327 41 303 36.1c-12.4-2.5-24.9-4-37.6-4.1-9.9-.1-19.8.3-29.6 1.2-25.5 2.5-50.7 9.6-73.9 20.5-19.9 9.4-38.4 21.6-54.8 36.2-16.4 14.6-30.7 31.6-42.2 50.3-12.7 20.8-22.2 43.5-27.4 67.3-4.2 19-6.2 38.6-5.2 58.1.9 18.9 3.8 37.8 9.5 55.9 3.6 11.5 7.9 22.7 13.3 33.6 5.3 10.7 11.5 21 18.4 30.7 13.8 19.3 30.6 36.4 49.8 50.5 19.6 14.5 41.7 25.7 64.9 33.1 24.2 7.7 49.9 11.3 75.3 10.4 24.8-.8 49.4-5.6 72.6-14.5 22.3-8.6 43.2-20.9 61.5-36.3 9.2-7.8 17.4-16.6 25.1-25.9 7.8-9.4 14.8-19.3 20.6-30 5-9.2 9.2-18.8 12.8-28.5 1.8-4.8 3.5-9.6 4.9-14.6 1.5-5.3 2.6-10.8 3.6-16.2 1.5-8.5 2.1-17.3 1.3-25.9-.7 3.8-1.3 7.5-2.2 11.2-1.1 4.3-2.5 8.5-4.1 12.6-3.2 8.7-7.2 17.1-11 25.5-4.9 10.7-10.6 20.9-16.8 30.8-3.2 5.1-6.5 10.1-10.1 14.9-3.6 4.8-7.7 9.4-11.8 13.9-8.2 9.1-17.1 17.2-27 24.4-10.1 7.4-20.8 13.9-32.1 19.3-22.6 11-47.3 17.6-72.3 19.8-25.6 2.2-51.7-.3-76.3-7.6-23.4-6.9-45.6-18.1-65.1-32.8-18.9-14.3-35.3-31.9-48.2-51.8C75.4 347.8 66.1 324.9 61 301c-1.3-6.2-2.3-12.6-3-18.9-.6-5.4-1.1-10.9-1.3-16.4-.3-11.3.4-23 2.1-34.2 3.7-24.6 11.7-48.3 24.1-69.9 11-19.3 25.3-36.7 42.1-51.4 16.8-14.8 36-26.7 56.8-35.1 12-4.9 24.6-8.5 37.4-10.9 6.5-1.2 13-2.2 19.5-2.7 3.2-.3 6.3-.3 9.5-.6 1.3 0 2.6.1 3.9.1 21.7-.4 43.5 2.4 64.2 8.9 22.3 7 43.3 18.3 61.5 33 19.1 15.4 35 34.4 47 55.8 10.2 18.2 17.5 37.8 21.9 58.2 1 4.7 1.8 9.4 2.6 14.1.7 4.3 3.1 8.3 6.8 10.7 7.8 5.2 18.7 1.7 22.5-6.7 1.3-2.9 1.7-6 1.2-8.9z" fill="currentColor"></svg:path>`,
})
export class IonLoadCIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLoadDIcon],svg[ion-load-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M432 240h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80c8.8 0 16-7.2 16-16s-7.2-16-16-16z" fill="currentColor"></svg:path><svg:path d="M176 256c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80c8.8 0 16-7.2 16-16z" fill="currentColor"></svg:path><svg:path d="M256 336c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80c0-8.8-7.2-16-16-16z" fill="currentColor"></svg:path><svg:path d="M256 64c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16z" fill="currentColor"></svg:path><svg:path d="M325.3 216c4.4 7.7 14.2 10.3 21.9 5.9l69.3-40c7.7-4.4 10.3-14.2 5.9-21.9s-14.2-10.3-21.9-5.9l-69.3 40c-7.7 4.5-10.3 14.2-5.9 21.9z" fill="currentColor"></svg:path><svg:path d="M186.7 296c-4.4-7.7-14.2-10.3-21.9-5.9l-69.3 40c-7.7 4.4-10.3 14.2-5.9 21.9s14.2 10.3 21.9 5.9l69.3-40c7.7-4.5 10.3-14.2 5.9-21.9z" fill="currentColor"></svg:path><svg:path d="M317.9 331.1c-4.4-7.7-14.2-10.3-21.9-5.9s-10.3 14.2-5.9 21.9l40 69.3c4.4 7.7 14.2 10.3 21.9 5.9 7.7-4.4 10.3-14.2 5.9-21.9l-40-69.3z" fill="currentColor"></svg:path><svg:path d="M181.9 95.6c-4.4-7.7-14.2-10.3-21.9-5.9-7.7 4.4-10.3 14.2-5.9 21.9l40 69.3c4.4 7.7 14.2 10.3 21.9 5.9s10.3-14.2 5.9-21.9l-40-69.3z" fill="currentColor"></svg:path><svg:path d="M296 186.7c7.7 4.4 17.4 1.8 21.9-5.9l40-69.3c4.4-7.7 1.8-17.4-5.9-21.9-7.7-4.4-17.4-1.8-21.9 5.9l-40 69.3c-4.4 7.7-1.8 17.5 5.9 21.9z" fill="currentColor"></svg:path><svg:path d="M216 325.3c-7.7-4.4-17.4-1.8-21.9 5.9l-40 69.3c-4.4 7.7-1.8 17.4 5.9 21.9 7.7 4.4 17.4 1.8 21.9-5.9l40-69.3c4.4-7.7 1.8-17.5-5.9-21.9z" fill="currentColor"></svg:path><svg:path d="M416.4 330.1l-69.3-40c-7.7-4.4-17.4-1.8-21.9 5.9-4.4 7.7-1.8 17.4 5.9 21.9l69.3 40c7.7 4.4 17.4 1.8 21.9-5.9 4.4-7.7 1.8-17.4-5.9-21.9z" fill="currentColor"></svg:path><svg:path d="M95.6 181.9l69.3 40c7.7 4.4 17.4 1.8 21.9-5.9s1.8-17.4-5.9-21.9l-69.3-40c-7.7-4.4-17.4-1.8-21.9 5.9-4.4 7.7-1.8 17.4 5.9 21.9z" fill="currentColor"></svg:path>`,
})
export class IonLoadDIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLocateIcon],svg[ion-locate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M256 96V56m0 400v-40m0-304a144 144 0 1 0 144 144a144 144 0 0 0-144-144m160 144h40m-400 0h40"></svg:path>`,
})
export class IonLocateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLocateOutlineIcon],svg[ion-locate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M256 96V56m0 400v-40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 112a144 144 0 1 0 144 144a144 144 0 0 0-144-144Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M416 256h40m-400 0h40"></svg:path>`,
})
export class IonLocateOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLocateSharpIcon],svg[ion-locate-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="48" d="M256 96V56m0 400v-40m0-304a144 144 0 1 0 144 144a144 144 0 0 0-144-144Zm160 144h40m-400 0h40"></svg:path>`,
})
export class IonLocateSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLocationIcon],svg[ion-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="192" r="32" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M256 32c-88.22 0-160 68.65-160 153c0 40.17 18.31 93.59 54.42 158.78c29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0 0 51.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"></svg:path>`,
})
export class IonLocationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLocationOutlineIcon],svg[ion-location-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"></svg:path><svg:circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class IonLocationOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLocationSharpIcon],svg[ion-location-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"></svg:path>`,
})
export class IonLocationSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLockClosedIcon],svg[ion-lock-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 192h-16v-80a96 96 0 1 0-192 0v80h-16a64.07 64.07 0 0 0-64 64v176a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V256a64.07 64.07 0 0 0-64-64m-48 0H192v-80a64 64 0 1 1 128 0Z"></svg:path>`,
})
export class IonLockClosedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLockClosedOutlineIcon],svg[ion-lock-closed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 208v-95a80 80 0 0 0-160 0v95"></svg:path><svg:rect width="320" height="272" x="96" y="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect>`,
})
export class IonLockClosedOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLockClosedSharpIcon],svg[ion-lock-closed-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M420 192h-68v-80a96 96 0 1 0-192 0v80H92a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V204a12 12 0 0 0-12-12m-106 0H198v-80.75a58 58 0 1 1 116 0Z"></svg:path>`,
})
export class IonLockClosedSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLockCombinationIcon],svg[ion-lock-combination-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M384 176.905V128C384 57.308 326.692 0 256 0S128 57.308 128 128v48.906C88.725 212.062 64 263.141 64 320c0 106.039 85.962 192 192 192 106.039 0 192-85.961 192-192 0-56.859-24.725-107.938-64-143.095zM160 128c0-52.935 43.065-96 96-96s96 43.065 96 96v25.692C323.759 137.355 290.973 128 256 128s-67.759 9.355-96 25.693V128zm96 352c-88.366 0-160-71.634-160-160s71.634-160 160-160 160 71.634 160 160-71.634 160-160 160z" fill="currentColor"></svg:path><svg:path d="M256 176c-79.529 0-144 64.472-144 144s64.471 144 144 144 144-64.472 144-144-64.471-144-144-144zm122.533 177.487l-24.12-7.896-3.926 12.19 24.161 7.912a127.543 127.543 0 0 1-14.252 27.409l-10.56-7.737-3.74 5.184 10.555 7.734a126.978 126.978 0 0 1-21.028 21.682l-14.982-20.787-10.284 7.532 14.976 20.776a125.91 125.91 0 0 1-27.398 13.532l-3.96-12.294-6.049 1.982 4.924 12.262C283.335 445.77 273 447.497 264 448v-19h-16v19c-11-.506-19.705-2.244-29.243-5.065l3.948-11.206-6.25-2.106-3.539 11.224a125.5 125.5 0 0 1-26.864-13.359l14.997-20.774-10.27-7.534-14.977 20.787a126.947 126.947 0 0 1-20.953-21.583l9.556-6.998-3.971-5.507-9.562 7a127.464 127.464 0 0 1-14.093-27.186l24.162-7.914-3.926-12.188-24.121 7.897c-2.49-9.431-3.954-18.488-4.258-29.487H134v-6.805l-5.993-.002c.223-10.606.672-20.88 3.266-30.682l24.921 7.9 4.347-12.188-23.966-7.914c3.585-9.57 8.36-18.583 13.985-26.879l10.339 7.533 3.759-5.184-10.292-7.545a126.835 126.835 0 0 1 21.434-22.197l14.984 20.787 10.284-7.536-14.975-20.774a125.584 125.584 0 0 1 27.16-13.449l3.955 12.247 6.044-1.98-4.62-12.231C228.21 194.258 237 192.508 248 192v19h16v-19c9 .498 19.159 2.198 28.585 4.951l-4.761 13.28 6.182 2.106 4.174-13.312c9.696 3.408 18.778 7.957 27.208 13.491l-15.002 20.775 10.267 7.535 14.975-20.787a127.02 127.02 0 0 1 21.255 21.977l-11.299 8.268 3.975 5.512 11.276-8.26a127.654 127.654 0 0 1 13.816 26.775l-24.165 7.914 3.928 12.188 24.12-7.9c2.586 9.802 5.251 20.075 5.47 30.683l-8.004-.004V324h6.789c-.303 10.999-1.769 20.057-4.256 29.487z" fill="currentColor"></svg:path><svg:circle cx="256" cy="320" r="81" fill="currentColor"></svg:circle>`,
})
export class IonLockCombinationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLockOpenIcon],svg[ion-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 192H192v-80a64 64 0 1 1 128 0a16 16 0 0 0 32 0a96 96 0 1 0-192 0v80h-16a64.07 64.07 0 0 0-64 64v176a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V256a64.07 64.07 0 0 0-64-64"></svg:path>`,
})
export class IonLockOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLockOpenOutlineIcon],svg[ion-lock-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 112a80 80 0 0 0-160 0v96"></svg:path><svg:rect width="320" height="272" x="96" y="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect>`,
})
export class IonLockOpenOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLockOpenSharpIcon],svg[ion-lock-open-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M420 192H198v-80.75a58.08 58.08 0 0 1 99.07-41.07A59.4 59.4 0 0 1 314 112h38a96 96 0 1 0-192 0v80H92a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V204a12 12 0 0 0-12-12"></svg:path>`,
})
export class IonLockOpenSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLockedIcon],svg[ion-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M86.4 480h339.2c12.3 0 22.4-9.9 22.4-22.1V246c0-12.2-10-22-22.4-22H404v-30.9c0-41.5-16.2-87.6-42.6-115.4-26.3-27.8-64-45.7-105.3-45.7h-.1-.1c-41.3 0-79 17.9-105.3 45.6C124.2 105.4 108 151.5 108 193v31H86.4C74 224 64 233.9 64 246v211.9c0 12.2 10 22.1 22.4 22.1zM161 193.1c0-27.3 9.9-61.1 28.1-80.3v-.3C206.7 93.9 231 83 255.9 83h.2c24.9 0 49.2 10.9 66.8 29.5v.2l-.1.1c18.3 19.2 28.1 53 28.1 80.3V224H161v-30.9z" fill="currentColor"></svg:path>`,
})
export class IonLockedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogInIcon],svg[ion-log-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M392 80H232a56.06 56.06 0 0 0-56 56v104h153.37l-52.68-52.69a16 16 0 0 1 22.62-22.62l80 80a16 16 0 0 1 0 22.62l-80 80a16 16 0 0 1-22.62-22.62L329.37 272H176v104c0 32.05 33.79 56 64 56h152a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56M80 240a16 16 0 0 0 0 32h96v-32Z"></svg:path>`,
})
export class IonLogInIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogInOutlineIcon],svg[ion-log-in-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 176v-40a40 40 0 0 1 40-40h160a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H240c-22.09 0-48-17.91-48-40v-40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m288 336l80-80l-80-80M80 256h272"></svg:path>`,
})
export class IonLogInOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogInSharpIcon],svg[ion-log-in-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 80H192a16 16 0 0 0-16 16v144h153.37l-64-64L288 153.37l91.31 91.32a16 16 0 0 1 0 22.62L288 358.63L265.37 336l64-64H176v144a16 16 0 0 0 16 16h240a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M64 240h112v32H64z"></svg:path>`,
})
export class IonLogInSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogOutIcon],svg[ion-log-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 256a16 16 0 0 1 16-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h160a56.06 56.06 0 0 0 56-56V272H176a16 16 0 0 1-16-16m299.31-11.31l-80-80a16 16 0 0 0-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62"></svg:path>`,
})
export class IonLogOutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogOutOutlineIcon],svg[ion-log-out-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80l-80-80m-192 80h256"></svg:path>`,
})
export class IonLogOutOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogOutSharpIcon],svg[ion-log-out-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 240h160V96a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h240a16 16 0 0 0 16-16V272H160Zm299.31 4.69L368 153.37L345.37 176l64 64H320v32h89.37l-64 64L368 358.63l91.31-91.32a16 16 0 0 0 0-22.62"></svg:path>`,
})
export class IonLogOutSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoAlipayIcon],svg[ion-logo-alipay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102.41 32C62.38 32 32 64.12 32 103.78v304.45C32 447.86 64.38 480 104.41 480h303.2c40 0 72.39-32.14 72.39-71.77v-3.11c-1.35-.56-115.47-48.57-174.5-76.7c-39.82 48.57-91.18 78-144.5 78c-90.18 0-120.8-78.22-78.1-129.72c9.31-11.22 25.15-21.94 49.73-28c38.45-9.36 99.64 5.85 157 24.61a309.4 309.4 0 0 0 25.46-61.67H138.34V194h91.13v-31.83H119.09v-17.75h110.38V99s0-7.65 7.82-7.65h44.55v53H391v17.75H281.84V194h89.08a359.4 359.4 0 0 1-37.72 94.43c27 9.69 49.31 18.88 67.39 24.89c60.32 20 77.23 22.45 79.41 22.7V103.78C480 64.12 447.6 32 407.61 32zM152 274.73q-5.81.06-11.67.63c-11.3 1.13-32.5 6.07-44.09 16.23c-34.74 30-13.94 84.93 56.37 84.93c40.87 0 81.71-25.9 113.79-67.37c-41.36-20-77-34.85-114.4-34.42"></svg:path>`,
})
export class IonLogoAlipayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoAmazonIcon],svg[ion-logo-amazon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.48 378.73a300.5 300.5 0 0 0 152.89 95.92a262.57 262.57 0 0 0 159.3-17.25a225.5 225.5 0 0 0 66.79-47a6.36 6.36 0 0 0-2-8.53a11.76 11.76 0 0 0-8-.05a402 402 0 0 1-116.55 39.34a358.1 358.1 0 0 1-127.29-8.83a446.7 446.7 0 0 1-119.1-60.49a5 5 0 0 0-6.06 6.9Z"></svg:path><svg:path fill="currentColor" d="M387.15 388.44a168.1 168.1 0 0 1 48.94-2.23l.67.13a10 10 0 0 1 7.37 12.05A204.7 204.7 0 0 1 429 444.47a2.55 2.55 0 0 0 1.66 3.18a2.51 2.51 0 0 0 2.23-.37A83.31 83.31 0 0 0 464 382.86a12.44 12.44 0 0 0-10.22-13.22A95.75 95.75 0 0 0 384.91 384a2.55 2.55 0 0 0-.57 3.55a2.52 2.52 0 0 0 2.81.89m-82.91-63.52a164 164 0 0 1-28.92 25.3A135.16 135.16 0 0 1 208.63 369a99.5 99.5 0 0 1-57.49-19.85a97.25 97.25 0 0 1-27.36-100.28a112.35 112.35 0 0 1 65.3-69.06a367.7 367.7 0 0 1 104.7-15.55V127A37.82 37.82 0 0 0 261 94.72a59.9 59.9 0 0 0-31.17 4.08a48.89 48.89 0 0 0-27.13 34.67a12 12 0 0 1-12.58 6.72l-50.9-4.5a11.38 11.38 0 0 1-8.38-10.16a103.66 103.66 0 0 1 36.61-63.45A143.86 143.86 0 0 1 257.85 32a146.24 146.24 0 0 1 84.27 27.67a86.82 86.82 0 0 1 30.7 70.22V258.8a84.5 84.5 0 0 0 8 31.28l15.87 23.23a13 13 0 0 1 0 11.23l-46.99 39.71a12.5 12.5 0 0 1-12.68-.44a245 245 0 0 1-32.78-38.89m-10.6-116.83a257.7 257.7 0 0 0-44 2.89A63 63 0 0 0 208 242.54a63 63 0 0 0 3.07 54a40.6 40.6 0 0 0 47.11 12.19a78.61 78.61 0 0 0 35.46-55.58z"></svg:path>`,
})
export class IonLogoAmazonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoAmplifyIcon],svg[ion-logo-amplify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m112.31 268l40.36-68.69l34.65 59l-67.54 115h135L289.31 432H16Zm58.57-99.76l33.27-56.67L392.44 432h-66.68ZM222.67 80h66.59L496 432h-66.68Z"></svg:path>`,
})
export class IonLogoAmplifyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoAndroidIcon],svg[ion-logo-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m380.91 199l42.47-73.57a8.63 8.63 0 0 0-3.12-11.76a8.52 8.52 0 0 0-11.71 3.12l-43 74.52c-32.83-15-69.78-23.35-109.52-23.35s-76.69 8.36-109.52 23.35l-43-74.52a8.6 8.6 0 1 0-14.88 8.64L131 199C57.8 238.64 8.19 312.77 0 399.55h512c-8.19-86.78-57.8-160.91-131.09-200.55M138.45 327.65a21.46 21.46 0 1 1 21.46-21.46a21.47 21.47 0 0 1-21.46 21.46m235 0A21.46 21.46 0 1 1 395 306.19a21.47 21.47 0 0 1-21.51 21.46Z"></svg:path>`,
})
export class IonLogoAndroidIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoAngularIcon],svg[ion-logo-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.57 256h84.85l-42.43-89.36z"></svg:path><svg:path fill="currentColor" d="M256 32L32 112l46.12 272L256 480l177.75-96L480 112Zm88 320l-26.59-56H194.58L168 352h-40L256 72l128 280Z"></svg:path>`,
})
export class IonLogoAngularIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoAppflowIcon],svg[ion-logo-appflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.626 28.424L8 484.424h114.376L256 164.779l133.624 319.645H504l-190.626-456z"></svg:path><svg:path fill="currentColor" d="M312 346.039c0 30.928-25.072 56-56 56s-56-25.072-56-56s25.072-56 56-56s56 25.072 56 56"></svg:path>`,
})
export class IonLogoAppflowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoAppleIcon],svg[ion-logo-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M349.13 136.86c-40.32 0-57.36 19.24-85.44 19.24c-28.79 0-50.75-19.1-85.69-19.1c-34.2 0-70.67 20.88-93.83 56.45c-32.52 50.16-27 144.63 25.67 225.11c18.84 28.81 44 61.12 77 61.47h.6c28.68 0 37.2-18.78 76.67-19h.6c38.88 0 46.68 18.89 75.24 18.89h.6c33-.35 59.51-36.15 78.35-64.85c13.56-20.64 18.6-31 29-54.35c-76.19-28.92-88.43-136.93-13.08-178.34c-23-28.8-55.32-45.48-85.79-45.48Z"></svg:path><svg:path fill="currentColor" d="M340.25 32c-24 1.63-52 16.91-68.4 36.86c-14.88 18.08-27.12 44.9-22.32 70.91h1.92c25.56 0 51.72-15.39 67-35.11c14.72-18.77 25.88-45.37 21.8-72.66"></svg:path>`,
})
export class IonLogoAppleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoAppleAppstoreIcon],svg[ion-logo-apple-appstore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C132.26 32 32 132.26 32 256s100.26 224 224 224s224-100.26 224-224S379.74 32 256 32m-85 321.89a15.48 15.48 0 0 1-13.46 7.65a14.9 14.9 0 0 1-7.86-2.16a15.48 15.48 0 0 1-5.6-21.21l15.29-25.42a8.73 8.73 0 0 1 7.54-4.3h2.26c11.09 0 18.85 6.67 21.11 13.13Zm129.45-50l-100.13.11h-66.55a15.46 15.46 0 0 1-15.51-16.15c.32-8.4 7.65-14.76 16-14.76h48.24l57.19-97.35l-18.52-31.55C217 137 218.85 127.52 226 123a15.57 15.57 0 0 1 21.87 5.17l9.9 16.91h.11l9.91-16.91A15.58 15.58 0 0 1 289.6 123c7.11 4.52 8.94 14 4.74 21.22l-18.52 31.55l-18 30.69l-39.09 66.66v.11h57.61c7.22 0 16.27 3.88 19.93 10.12l.32.65c3.23 5.49 5.06 9.26 5.06 14.75a13.8 13.8 0 0 1-1.17 5.17Zm77.75.11h-27.11v.11l19.82 33.71a15.8 15.8 0 0 1-5.17 21.53a15.53 15.53 0 0 1-8.08 2.27A15.71 15.71 0 0 1 344.2 354l-29.29-49.86l-18.2-31L273.23 233a38.35 38.35 0 0 1-.65-38c4.64-8.19 8.19-10.34 8.19-10.34L333 273h44.91c8.4 0 15.61 6.46 16 14.75A15.65 15.65 0 0 1 378.23 304Z"></svg:path>`,
})
export class IonLogoAppleAppstoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoAppleArIcon],svg[ion-logo-apple-ar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M201.14 64L256 32l54.86 32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 32v80"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M310.86 448L256 480l-54.86-32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 480v-80"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 207.51V144l53.15-31.51"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m64 144l67.29 40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 304.49V368l-53.15 31.51"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m448 368l-67.29-40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M117.15 400L64 368v-63.51"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m64 368l66.64-40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M394.85 112.49L448 144v63.51"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m448 144l-67.29 40M256 320v-64l54.86-32M256 256l-54.86-32"></svg:path>`,
})
export class IonLogoAppleArIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoBehanceIcon],svg[ion-logo-behance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M344.1 233.6c-28.9 0-32.9 28.8-32.9 28.8h61.4s.4-28.8-28.5-28.8m-139.3 28.8h-54.4v50h51.7c7.8-.2 22.4-2.4 22.4-24.3c0-26-19.7-25.7-19.7-25.7"></svg:path><svg:path fill="currentColor" d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224s224-100.3 224-224S379.7 32 256 32m47.2 137.6h77.1v23h-77.1zm-39 120.8c0 57-59.4 55.2-59.4 55.2h-97.2v-187h97.2c29.6 0 52.9 16.3 52.9 49.8S229.2 244 229.2 244c37.6 0 35 46.4 35 46.4m144.2-3.1h-96.9c0 34.7 32.9 32.5 32.9 32.5c31.1 0 30-20.1 30-20.1h32.9c0 53.4-64 49.7-64 49.7c-76.7 0-71.8-71.5-71.8-71.5s-.1-71.8 71.8-71.8c75.7.1 65.1 81.2 65.1 81.2"></svg:path><svg:path fill="currentColor" d="M218 211.3c0-19.4-13.2-19.4-13.2-19.4h-54.4v41.7h51c8.8 0 16.6-2.9 16.6-22.3"></svg:path>`,
})
export class IonLogoBehanceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoBitbucketIcon],svg[ion-logo-bitbucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M483.13 32.23a20 20 0 0 0-2.54-.23h-449C23 31.88 16.12 38.88 16 47.75a11.4 11.4 0 0 0 .23 2.8l65.3 411.25a22.52 22.52 0 0 0 7 12.95A20 20 0 0 0 102 480h313.18a15.45 15.45 0 0 0 15.34-13.42l38.88-247.91H325.19l-18.46 112H205.21l-25.73-148h295.58l20.76-132c1.27-8.75-4.38-17.04-12.69-18.44"></svg:path>`,
})
export class IonLogoBitbucketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoBitcoinIcon],svg[ion-logo-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M410.47 279.2c-5-11.5-12.7-21.6-28.1-30.1a98.2 98.2 0 0 0-25.4-10a62.2 62.2 0 0 0 16.3-11a56.4 56.4 0 0 0 15.6-23.3a77.1 77.1 0 0 0 3.5-28.2c-1.1-16.8-4.4-33.1-13.2-44.8s-21.2-20.7-37.6-27c-12.6-4.8-25.5-7.8-45.5-8.9V32h-40v64h-32V32h-41v64H96v48h27.87c8.7 0 14.6.8 17.6 2.3a13.22 13.22 0 0 1 6.5 6c1.3 2.5 1.9 8.4 1.9 17.5V343c0 9-.6 14.8-1.9 17.4s-2 4.9-5.1 6.3s-3.2 1.3-11.8 1.3h-26.4L96 416h87v64h41v-64h32v64h40v-64.4c26-1.3 44.5-4.7 59.4-10.3c19.3-7.2 34.1-17.7 44.7-31.5s14-34.9 14.93-51.2c.67-14.5-.03-33.2-4.56-43.4M224 150h32v74h-32Zm0 212v-90h32v90Zm72-208.1c6 2.5 9.9 7.5 13.8 12.7c4.3 5.7 6.5 13.3 6.5 21.4c0 7.8-2.9 14.5-7.5 20.5c-3.8 4.9-6.8 8.3-12.8 11.1Zm28.8 186.7c-7.8 6.9-12.3 10.1-22.1 13.8a56 56 0 0 1-6.7 1.9v-82.8a40.7 40.7 0 0 1 11.3 3.4c7.8 3.3 15.2 6.9 19.8 13.2a43.8 43.8 0 0 1 8 24.7c-.03 10.9-2.83 19.2-10.33 25.8Z"></svg:path>`,
})
export class IonLogoBitcoinIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoBufferIcon],svg[ion-logo-buffer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m39.93 149.25l197.4 95.32c5.14 2.45 12 3.73 18.79 3.73s13.65-1.28 18.78-3.73l197.4-95.32c10.38-5 10.38-13.18 0-18.2L274.9 35.73c-5.13-2.45-12-3.73-18.78-3.73s-13.65 1.28-18.79 3.73l-197.4 95.32c-10.38 5.02-10.38 13.18 0 18.2"></svg:path><svg:path fill="currentColor" d="M472.3 246.9s-36.05-17.38-40.83-19.72s-6.07-2.21-11.09.12s-145.6 70.23-145.6 70.23a45.7 45.7 0 0 1-18.78 3.74c-6.77 0-13.65-1.29-18.78-3.74c0 0-136.85-66-143.27-69.18C87 225 85 225 78.67 228l-39 18.78c-10.38 5-10.38 13.19 0 18.2L237.1 360.3c5.13 2.45 12 3.73 18.78 3.73s13.65-1.28 18.79-3.73l197.4-95.3c10.61-4.92 10.61-13.08.23-18.1"></svg:path><svg:path fill="currentColor" d="M472.3 362.75s-36.05-17.38-40.83-19.75s-6.07-2.21-11.09.12S274.9 413.5 274.9 413.5a45.7 45.7 0 0 1-18.78 3.73c-6.77 0-13.65-1.28-18.79-3.73c0 0-136.85-66-143.26-69.18c-7-3.39-9-3.39-15.29-.35l-39 18.78c-10.39 5-10.39 13.18 0 18.2l197.4 95.32c5.13 2.56 12 3.73 18.78 3.73s13.65-1.28 18.78-3.73L472.18 381c10.5-5.07 10.5-13.23.12-18.25"></svg:path>`,
})
export class IonLogoBufferIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoCapacitorIcon],svg[ion-logo-capacitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 101.09L372.37 208.72l106.86 107.06l-69.3 69.3l-283.22-283.23L196 32.54l107.07 106.88L410.67 32ZM32.55 196l69.3-69.31l283.22 283.24l-69.3 69.3l-107-106.87L101.08 480L32 410.67l107.42-107.61Z"></svg:path>`,
})
export class IonLogoCapacitorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoChromeIcon],svg[ion-logo-chrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.8 255.93a67.2 67.2 0 1 0 67.2-67.18a67.38 67.38 0 0 0-67.2 67.18"></svg:path><svg:path fill="currentColor" d="M476.75 217.79v.05a207 207 0 0 0-7-28.84h-.11a202 202 0 0 1 7.07 29a203.5 203.5 0 0 0-7.07-29h-155.4c19.05 17 31.36 40.17 31.36 67.05a86.55 86.55 0 0 1-12.31 44.73L231 478.45a2 2 0 0 1 0 .27v.28v-.26a224 224 0 0 0 25 1.26c6.84 0 13.61-.39 20.3-1a223 223 0 0 0 29.78-4.74C405.68 451.52 480 362.4 480 255.94a225 225 0 0 0-3.25-38.15"></svg:path><svg:path fill="currentColor" d="M256 345.5c-33.6 0-61.6-17.91-77.29-44.79L76 123.05l-.14-.24A224 224 0 0 0 207.4 474.55v-.05l77.69-134.6a84.1 84.1 0 0 1-29.09 5.6"></svg:path><svg:path fill="currentColor" d="m91.29 104.57l77.35 133.25A89.19 89.19 0 0 1 256 166h205.17a246.5 246.5 0 0 0-25.78-43.94l.12.08A245.3 245.3 0 0 1 461.17 166h.17a246 246 0 0 0-25.66-44a2.6 2.6 0 0 1-.35-.26a223.93 223.93 0 0 0-344.19-17.4l.14.24Z"></svg:path>`,
})
export class IonLogoChromeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoClosedCaptioningIcon],svg[ion-logo-closed-captioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 80v352h512V80Zm464 175.78c0 25.74-1.6 45.32-3.77 77.22s-19.2 54.34-59.09 57.86s-95.77 3.85-145.14 3.74c-49 .11-105.14-.11-145.14-3.74s-56.8-26-59.09-57.86S48 281.52 48 255.78s.11-42.46 3.77-77.22s23-54.12 59.09-57.64s98.28-3.52 145.14-3.52s109 0 145.14 3.52s55.43 23 59.09 57.64s3.77 51.59 3.77 77.22"></svg:path><svg:path fill="currentColor" d="M367.57 282.84v.77c0 17.93-11.11 28.49-25.95 28.49s-24.84-11.88-26.27-28.49c0 0-1.31-8.69-1.31-26.29a230 230 0 0 1 1.53-28.6c2.64-18.7 11.77-28.49 26.6-28.49s26.49 12.76 26.49 32.12v.55h49.58c0-24.09-6.05-45.76-18.25-59.4S369.76 153 345.8 153a108 108 0 0 0-33 4.73a58.8 58.8 0 0 0-25.94 16.61c-7.23 7.96-12.86 18.52-16.86 31.83s-6 30-6 50.27c0 19.8 1.65 36.3 4.84 49.61s8 23.87 14.4 31.79a49.76 49.76 0 0 0 24 16.5q14.5 4.62 34 4.62c27.47 0 47.26-7 59.13-20.57S418 305.06 418 279.1h-50.65c.22 0 .22 2.75.22 3.74m-170.27 0v.77c0 17.93-11.1 28.49-25.94 28.49s-24.84-11.88-26.27-28.49c0 0-1.31-8.69-1.31-26.29a230 230 0 0 1 1.53-28.6c2.64-18.7 11.77-28.49 26.6-28.49S198.4 213 198.4 232.35v.55H248c0-24.09-6-45.76-18.25-59.4S199.5 153 175.54 153a108 108 0 0 0-33 4.73a58.8 58.8 0 0 0-25.94 16.61c-7.26 7.92-12.86 18.48-16.93 31.79s-6 30-6 50.27c0 19.8 1.65 36.3 4.84 49.61s8 23.87 14.4 31.79a49.76 49.76 0 0 0 24 16.5q14.51 4.62 34 4.62c27.48 0 47.27-7 59.14-20.57s17.81-33.33 17.81-59.29h-50.78c.22.04.22 2.79.22 3.78"></svg:path>`,
})
export class IonLogoClosedCaptioningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoCodepenIcon],svg[ion-logo-codepen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.24 303.94c-15.32-10.36-30.74-20.57-46.06-30.93c-2-1.38-3.43-1.48-5.5 0l-38.88 26.12C182 319.9 244 361.32 244 361.32v-53.79c0-1.22-1.55-2.78-2.76-3.59m-46.15-63.27q23.19-15.24 46.11-30.86a7.54 7.54 0 0 0 2.8-5.34v-51.7s-62 41.12-93.26 61.94c13.7 9.16 26.67 17.91 39.78 26.44c1.02.66 3.4.28 4.57-.48m74.75-31.32q23.71 16.07 47.63 31.82a4.3 4.3 0 0 0 3.83 0l39.76-26.47L268 152.48v53.35a4.8 4.8 0 0 0 1.84 3.52m-11.73 21.02a5.27 5.27 0 0 0-4.74.17c-4.82 3-9.47 6.2-14.17 9.35c-8.25 5.53-25.35 17-25.35 17l38.84 25.86a6.18 6.18 0 0 0 6.26.11l39-26s-34.07-22.66-39.84-26.49M141 237.12v39.61l29.62-19.84z"></svg:path><svg:path fill="currentColor" d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224s224-100.29 224-224S379.71 32 256 32m139 265c0 5.78-2.65 9.86-7.51 13.09q-61.71 41-123.29 82.19c-5.85 3.92-11.17 3.75-17-.14q-61.17-41-122.63-81.67c-5.11-3.39-7.59-7.56-7.59-13.73V217c0-6.14 2.52-10.34 7.62-13.72c40.91-27.13 81.94-54.36 122.73-81.68c5.82-3.89 11.09-4 16.94-.09q61.54 41.21 123.26 82.19c4.68 3.11 7.45 6.95 7.45 12.66Z"></svg:path><svg:path fill="currentColor" d="M316.25 273.23q-22.59 15.34-45.39 30.34c-2.41 1.58-2.89 3.31-2.86 6.19v51.34l93-62l-38.53-25.88c-2.3-1.61-3.89-1.57-6.22.01m53.75 3.45v-39.62l-29.59 19.87z"></svg:path>`,
})
export class IonLogoCodepenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoCss3Icon],svg[ion-logo-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m64 32l35 403.22L255.77 480L413 435.15L448 32Zm290.68 334.9L256.07 395l-98.46-28.24l-6.75-77.76h48.26l3.43 39.56l53.59 15.16l.13.28l53.47-14.85l5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58Z"></svg:path>`,
})
export class IonLogoCss3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoDesignernewsIcon],svg[ion-logo-designernews-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M295.31 122.8L222.86 64l72.68 122.64z"></svg:path><svg:path fill="currentColor" d="M339.43 64v195.6h-41.6L225.6 141.28l1.94 118.32h-45.83V131.2L139.09 96c1.14 1.44 2.28 2.88 3.31 4.44c11.43 16.68 17.14 36.6 17.14 60.6c0 59-35 98.52-87.88 98.52H0v.48L228.11 448H512V205.72Z"></svg:path><svg:path fill="currentColor" d="M111.89 162.52c0-34.8-16.23-54.12-45.38-54.12H44.57v106.8h21.72c29.71 0 45.6-18.48 45.6-52.68"></svg:path>`,
})
export class IonLogoDesignernewsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoDeviantartIcon],svg[ion-logo-deviantart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408 103.28V16h-89.31l-8.9 8.78l-42.15 78.48l-13.25 8.74H104v119.85h82.68l7.36 8.71L104 408.72V496h89.3l8.91-8.79l42.14-78.48l13.26-8.73H408V280.13h-82.68l-7.36-8.75z"></svg:path>`,
})
export class IonLogoDeviantartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoDiscordIcon],svg[ion-logo-discord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 66.52A50 50 0 0 0 414.12 17L97.64 16A49.65 49.65 0 0 0 48 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44l109 100ZM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 0 1-27.85 14.25a173.3 173.3 0 0 1-35.11 10.39a170 170 0 0 1-62.72-.24a184.5 184.5 0 0 1-35.59-10.4a141.5 141.5 0 0 1-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21c-.49-.24-.73-.48-1-.48c-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81c-53.51-1.69-73.85-36.47-73.85-36.47c0-77.06 34.87-139.62 34.87-139.62c34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 0 1 4.12-.49a205.6 205.6 0 0 1 48.91-.48a201.6 201.6 0 0 1 72.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62c0-.28-20.35 34.5-73.86 36.19"></svg:path><svg:path fill="currentColor" d="M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57c.25-14.76-10.9-26.57-24.7-26.57m88.38 0c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218"></svg:path>`,
})
export class IonLogoDiscordIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoDockerIcon],svg[ion-logo-docker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M507 211.16c-1.42-1.19-14.25-10.94-41.79-10.94a132.6 132.6 0 0 0-21.61 1.9c-5.22-36.4-35.38-54-36.57-55l-7.36-4.28l-4.75 6.9a101.7 101.7 0 0 0-13.06 30.45c-5 20.7-1.9 40.2 8.55 56.85c-12.59 7.14-33 8.8-37.28 9H15.94A15.93 15.93 0 0 0 0 262.07a241.3 241.3 0 0 0 14.75 86.83C26.39 379.35 43.72 402 66 415.74C91.22 431.2 132.3 440 178.6 440a344 344 0 0 0 62.45-5.71a257.4 257.4 0 0 0 81.69-29.73a223.6 223.6 0 0 0 55.57-45.67c26.83-30.21 42.74-64 54.38-94h4.75c29.21 0 47.26-11.66 57.23-21.65a63.3 63.3 0 0 0 15.2-22.36l2.14-6.18Z"></svg:path><svg:path fill="currentColor" d="M47.29 236.37H92.4a4 4 0 0 0 4-4v-40.48a4 4 0 0 0-4-4H47.29a4 4 0 0 0-4 4v40.44a4.16 4.16 0 0 0 4 4m62.21.04h45.12a4 4 0 0 0 4-4v-40.48a4 4 0 0 0-4-4H109.5a4 4 0 0 0-4 4v40.44a4.16 4.16 0 0 0 4 4m63.4.04H218a4 4 0 0 0 4-4v-40.48a4 4 0 0 0-4-4h-45.1a4 4 0 0 0-4 4v40.44a3.87 3.87 0 0 0 4 4m62.46.04h45.12a4 4 0 0 0 4-4v-40.48a4 4 0 0 0-4-4h-45.12a4 4 0 0 0-4 4v40.44a4 4 0 0 0 4 4M109.5 178.57h45.12a4.16 4.16 0 0 0 4-4v-40.48a4 4 0 0 0-4-4H109.5a4 4 0 0 0-4 4v40.44a4.34 4.34 0 0 0 4 4m63.4.04H218a4.16 4.16 0 0 0 4-4v-40.48a4 4 0 0 0-4-4h-45.1a4 4 0 0 0-4 4v40.44a4 4 0 0 0 4 4m62.46.04h45.12a4.16 4.16 0 0 0 4-4v-40.48a4.16 4.16 0 0 0-4-4h-45.12a4 4 0 0 0-4 4v40.44a4.16 4.16 0 0 0 4 4m0-58h45.12a4 4 0 0 0 4-4V76a4.16 4.16 0 0 0-4-4h-45.12a4 4 0 0 0-4 4v40.44a4.17 4.17 0 0 0 4 4m62.92 115.93h45.12a4 4 0 0 0 4-4v-40.48a4 4 0 0 0-4-4h-45.12a4 4 0 0 0-4 4v40.44a4.16 4.16 0 0 0 4 4"></svg:path>`,
})
export class IonLogoDockerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoDribbbleIcon],svg[ion-logo-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C132.33 32 32 132.33 32 256s100.33 224 224 224s224-100.22 224-224S379.67 32 256 32m142.22 103.25a186.36 186.36 0 0 1 44 108.38c-40.37-2.1-88.67-2.1-127.4 1.52c-4.9-12.37-9.92-24.5-15.4-36.17c44.66-19.36 79.08-44.8 98.8-73.73M256 69.33a185.8 185.8 0 0 1 119.12 42.94c-20.3 25.66-52.15 48-91.82 64.86C261.6 137 236.63 102.47 210 75.28a187.5 187.5 0 0 1 46-5.95m-84.47 20.42c26.95 26.83 52.27 61 74.44 101C203.85 203.62 155.55 211 104 211c-9.8 0-19.36-.35-28.81-.94a186.78 186.78 0 0 1 96.34-120.31M69.68 247.13c10.62.47 21.35.7 32.2.59c58.8-.7 113.52-9.92 160.54-25q6.65 13.83 12.6 28.35a115.4 115.4 0 0 0-16.69 5c-64.28 27-114.91 70.51-142.33 123.13A186 186 0 0 1 69.33 256c0-3 .12-5.95.35-8.87M256 442.67a185.57 185.57 0 0 1-114.45-39.32c24.85-49.23 69.18-90 125.07-115.27c5.25-2.45 12.25-4.43 20.3-6.18q10 27.64 17.85 57.4A678 678 0 0 1 322 430.42a185.1 185.1 0 0 1-66 12.25m100.92-29.75a673 673 0 0 0-17.39-92.05c-4-15.17-8.51-29.87-13.41-44.22c36.63-3 80.5-2.57 115.38 0a186.5 186.5 0 0 1-84.58 136.27"></svg:path>`,
})
export class IonLogoDribbbleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoDropboxIcon],svg[ion-logo-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256.32 126.24l-120.16 78.25l120.16 78.24L136.16 361L16 282.08l120.16-78.24L16 126.24L136.16 48Zm-120.8 259.52l120.16-78.25l120.16 78.25L255.68 464Zm120.8-103.68l120.16-78.24l-120.16-77.6L375.84 48L496 126.24l-120.16 78.25L496 282.73L375.84 361Z"></svg:path>`,
})
export class IonLogoDropboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoEdgeIcon],svg[ion-logo-edge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M255.5 15c-132 0-240 108-240 240s108 240 240 240c85.4 0 160.8-45.2 203.3-112.9a6.87 6.87 0 0 0-9.1-9.7a108.6 108.6 0 0 1-18.4 8.6c-36.8 12.6-57.1 13.1-82.1 12c-27.9-1.2-61.9-10.8-85.8-25s-43.5-34.6-54.1-52.3s-17-39.9-14.1-68.3c2.9-29 29.4-52.6 60.4-52.6c33.5 0 60.8 26.6 60.8 60.1c0 17-8.1 31.7-18.5 43.5c-2.3 2.1-7.6 9.7 5.8 20c15.9 12.2 51.6 18 79.9 16.6s59.1-12.6 80.2-34.8c16.8-17.7 31.8-46.1 31.8-77.4C495.5 97.7 379.5 15 255.5 15"></svg:path>`,
})
export class IonLogoEdgeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoElectronIcon],svg[ion-logo-electron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M86.76 255a9.9 9.9 0 0 0 4.87-1.29a9.82 9.82 0 0 0 3.65-13.43c-16.46-28.56-17.81-52.12-7.45-70c14.26-24.57 53.61-33.65 105.27-24.29a9.86 9.86 0 0 0 11.45-7.9a9.84 9.84 0 0 0-7.93-11.44c-29.19-5.28-56-5.18-77.39.3c-22.3 5.71-39 17.28-48.45 33.48c-14 24.19-12.7 54.73 7.42 89.62a9.85 9.85 0 0 0 8.56 4.95m274.85-111.27c32.24.42 52.61 9.31 62.79 26.86c14.21 24.48 2.52 62.81-31.27 102.52a9.82 9.82 0 0 0 7.51 16.18a9.88 9.88 0 0 0 7.52-3.46c19.12-22.47 32.35-45.54 38.25-66.71c6.14-22 4.43-42.21-5-58.38c-13.8-23.78-40.13-36.15-79.59-36.67h-.14a9.83 9.83 0 0 0-.12 19.66Zm-35.14 271.16a9.88 9.88 0 0 0-13.5 3.35c-16.41 27.15-36.57 42.1-56.77 42.1c-28.49 0-56-29.31-73.73-78.42a9.87 9.87 0 0 0-12.59-5.92a9.83 9.83 0 0 0-6 12.58c10 27.77 23.47 50.75 39 66.46c16.11 16.34 34.55 25 53.32 25c27.38 0 53.54-18.33 73.65-51.61a9.81 9.81 0 0 0-3.38-13.5Zm105.23-76.35a32.14 32.14 0 0 0-29.9 44.33c-41.8 19.5-119.8 4.79-191.87-36.62c-32.91-18.9-62.16-41.86-84.6-66.39a9.9 9.9 0 0 0-13.91-.65a9.8 9.8 0 0 0-.65 13.9c23.79 26 54.68 50.28 89.33 70.18c40.28 23.13 82.27 38.63 121.43 44.81a225.5 225.5 0 0 0 35 2.91c23.12 0 43-4.3 58.51-12.79a32.2 32.2 0 1 0 16.7-59.68Zm0 44.66a12.6 12.6 0 0 1-7.82-2.72a10 10 0 0 0-2.2-2.21a12.61 12.61 0 1 1 10 4.93Z"></svg:path><svg:path fill="currentColor" d="M82.09 338.59c.57-21.26 12.41-47 33.68-73.16c23.19-28.45 56.69-56 94.34-77.65c33.25-19.1 65.2-31.9 98.07-38.91a9.83 9.83 0 1 0-4.12-19.22c-34.85 7.43-68.78 21-103.79 41.09C116.09 219.09 59.9 289.88 62.46 343.9a32.32 32.32 0 1 0 19.63-5.31M80.3 383.2a12.5 12.5 0 1 1 12.59-12.5a12.56 12.56 0 0 1-12.59 12.5"></svg:path><svg:path fill="currentColor" d="M256.2 96.32a32.23 32.23 0 0 0 26.53-13.81c17.89 11.69 34 35 45.81 66.12c13 34.39 19.84 75.38 19.84 118.54c0 37.18-5.19 72.35-15 103.6a9.72 9.72 0 0 0 .66 7.49a9.82 9.82 0 0 0 5.8 4.84a9.89 9.89 0 0 0 12.34-6.44c10.42-33.14 15.93-70.34 15.93-109.49c0-47.17-7.77-91.77-22.47-129c-14.41-36.48-34.13-62.4-57.14-75.16a32.3 32.3 0 1 0-32.3 33.31m0-44.66a12.5 12.5 0 1 1-12.59 12.5a12.56 12.56 0 0 1 12.59-12.5m-5.2 191.7a24.35 24.35 0 0 0 5.16 48.16a24.7 24.7 0 0 0 5.16-.55A24.36 24.36 0 1 0 251 243.36"></svg:path>`,
})
export class IonLogoElectronIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoEuroIcon],svg[ion-logo-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.8 272v-48H376l8-48H231.8v-8.12c0-38.69 16.47-62.56 87.18-62.56c28.89 0 61.45 2.69 102.5 9.42l10.52-70A508.5 508.5 0 0 0 315.46 32C189.26 32 135 76.4 135 158.46V176H80v48h55v48H80v48h55v33.54C135 435.6 189.23 480 315.43 480a507.8 507.8 0 0 0 116.44-12.78l-10.58-70c-41.05 6.73-73.46 9.42-102.35 9.42c-70.7 0-87.14-20.18-87.14-67.94V320h128.47l7.87-48Z"></svg:path>`,
})
export class IonLogoEuroIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoFacebookIcon],svg[ion-logo-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16c24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31"></svg:path>`,
})
export class IonLogoFacebookIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoFigmaIcon],svg[ion-logo-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 176a80 80 0 0 0 0-160H176a80 80 0 0 0 0 160a80 80 0 0 0 0 160a80 80 0 1 0 80 80V176Z"></svg:path><svg:circle cx="336" cy="256" r="80" fill="currentColor"></svg:circle>`,
})
export class IonLogoFigmaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoFirebaseIcon],svg[ion-logo-firebase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m93.19 329.38l47.45-304.07c1.64-10.37 15.55-12.82 20.46-3.55l51 95.45ZM432 400l-46.74-276.79a11 11 0 0 0-18.54-6L80 400l159.36 91.91a33.18 33.18 0 0 0 31.91 0ZM302.36 158.93l-36.54-69.54a10.86 10.86 0 0 0-19.36 0L85.83 375.74Z"></svg:path>`,
})
export class IonLogoFirebaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoFirefoxIcon],svg[ion-logo-firefox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M471.46 194.62v-.07c-.22-.76-.45-1.52-.68-2.28c-.05-.19-.11-.38-.17-.56c-.43-1.44-.87-2.88-1.33-4.31l-.06-.2a223 223 0 0 0-10-25.56a192 192 0 0 0-12.9-23.8a225.15 225.15 0 0 0-74.74-73.74A222.9 222.9 0 0 0 256 32c-7 0-14 .34-20.82 1c-24.12 2.54-64.78 11.21-97.77 40.18C257.5 11.86 417.94 85.7 404.29 223c-4.86 49-46.46 82.67-85.19 88.35a73.7 73.7 0 0 1-20.8.21c-94.59-13.15-88.8-90.68-60.06-123.83c-38-.24-67.47 46.79-53.15 93c-32.95-61.18.35-157 70.93-186c-82.95-12-160.71 28.2-185.7 98.07A330.2 330.2 0 0 1 88.07 118s-45.22 35.74-54.44 110.9c-.14 1.16-.27 2.32-.39 3.49c-.05.4-.09.8-.13 1.21q-.53 5.25-.8 10.57v.81c-.07 1.48-.13 3-.17 4.46v1.25c0 1.76-.07 3.52-.07 5.29c0 123.71 100.29 224 224 224S480 379.71 480 256a224 224 0 0 0-8.54-61.38"></svg:path>`,
})
export class IonLogoFirefoxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoFlickrIcon],svg[ion-logo-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C132.8 32 32 132.8 32 256s100.8 224 224 224s224-100.8 224-224S379.2 32 256 32m-82.16 280A56 56 0 1 1 228 257.84A56 56 0 0 1 173.84 312m168 0A56 56 0 1 1 396 257.84A56 56 0 0 1 341.84 312"></svg:path>`,
})
export class IonLogoFlickrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoFoursquareIcon],svg[ion-logo-foursquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M376.76 32H138.54C105.67 32 96 56.8 96 72.41v379.64c0 17.59 9.42 24.12 14.72 26.27s19.91 4 28.67-6.17c0 0 112.47-130.89 114.4-132.83c2.92-2.93 2.92-2.93 5.84-2.93h72.77c30.58 0 35.49-21.87 38.69-34.75c2.65-10.79 32.48-164 42.45-212.56C421.14 52 411.74 32 376.76 32m-5.67 269.64c2.65-10.79 32.48-164 42.45-212.56m-50.85 7.59l-10 51.73c-1.19 5.65-8.28 11.6-14.86 11.6h-95.92c-10.44 0-17.91 6.14-17.91 16.6v13.45c0 10.47 7.52 17.89 18 17.89h81.85c7.38 0 14.61 8.11 13 16s-9.09 46.57-10 50.89s-5.84 11.72-14.61 11.72H248c-11.7 0-15.24 1.54-23.07 11.3s-78.26 94.59-78.26 94.59c-.71.82-1.41.58-1.41-.31V95.9c0-6.69 5.8-14.53 14.48-14.53h191.14a12.42 12.42 0 0 1 11.81 15.3"></svg:path>`,
})
export class IonLogoFoursquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoFreebsdDevilIcon],svg[ion-logo-freebsd-devil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M502.6 115c-22.5-43.7-58-51-58-51s15.5 32 16 51c.4 16.1-5.5 28-27.2 33.5s-30.8-2-47.8-17.5-41.6-26.5-72.6-28c-40-2-77 9-77 9-20-25 20-80 20-80-74.5 29.5-93.7 83.3-96 113.7-1.9 24.1 8.5 40.8 8.5 40.8s-.5 27.8-5 42c-3.1 9.8-16.9 25-26 34.5-12.2 12.7-12.5 38.5 0 57s44 27.5 67 39.5 31.5 21 31.5 21 1 8.3.5 15.3-3.2 14-9 18.2c-5.5 3.9-15.5.5-20.5-2s-5-6.2-10.5-8-7.3-4-6.5-11 2-9-3.5-18.5-18.5-9.5-29.5-8-17.3 6.8-17.3 6.8l-16.3-10s8.5-15.6 5.2-35.6c-7.3-43.8-50-62.8-50-62.8L89 309.3s1.1-2.6 6.4-6.4 8.1-3.6 8.1-3.6 6.6 7.6 9.1 25.3c2.5 18-6.7 27.2-6.7 27.2l-28.3-18 1-14.5L39.8 309 56 345.7l15-4 24 22.7s-15.7 11.7-33 11.7c-11 0-22-6-22-6s-1.4-1-.8-5.5c.7-5 6.8-12.5 6.8-12.5H0s27.3 38.7 65 38.7c31 0 44.2-12.5 44.2-12.5L128 397s3 5.5 0 7-7 3.5-9 15 18 29 18 29c21.8 17.8 7 32 7 32h272c-9-13-22.5-18-32-32 0 0-44.8-58.4-1.8-90.4 57.4-42.7 42.8-69.4 41.2-101.4 0 0 31.8-6.6 59.3-33.6s38.9-70.8 19.9-107.6zM195 203c-16.9 4.5-22.5 35.5-22.5 35.5 1.5-63 57.5-93 65-89s-6.5 39-21 64c0 0-8-14.1-21.5-10.5zm37 15s18-56 37.5-59.5 41.5 21 41.5 62-26 65.4-42.8 69.2c-16.5 3.8-23 2-23 2s27.5-21.6 23.5-56.8c-2.8-24.7-31.4-24.2-36.7-16.9z" fill="currentColor"></svg:path>`,
})
export class IonLogoFreebsdDevilIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoGameControllerAIcon],svg[ion-logo-game-controller-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M369.3 146H142.7C81.5 146 32 191.5 32 255.4c0 64 49.5 110.6 110.7 110.6h226.5c61.2 0 110.7-46.6 110.7-110.6.1-63.9-49.4-109.4-110.6-109.4zM200 266.7c0 2.7-2.4 5.3-5.2 5.3H160v35.1c0 2.8-3.1 4.9-5.8 4.9h-21.4c-2.6 0-4.8-1.9-4.8-4.5V272H92.9c-2.8 0-4.9-3.1-4.9-5.8v-21.4c0-2.6 1.9-4.8 4.5-4.8H128v-34.8c0-2.8 1.9-5.2 4.6-5.2h22.1c2.7 0 5.3 2.4 5.3 5.2V240h34.8c2.8 0 5.2 1.9 5.2 4.6v22.1zm119.8 8.8c-10.7 0-19.5-8.6-19.5-19.2s8.7-19.2 19.5-19.2 19.5 8.6 19.5 19.2-8.8 19.2-19.5 19.2zm42.5 41.8c-10.7 0-19.5-8.5-19.5-19.1 0-10.6 8.7-19.2 19.5-19.2s19.5 8.5 19.5 19.2c0 10.6-8.7 19.1-19.5 19.1zm0-83.7c-10.7 0-19.5-8.6-19.5-19.1 0-10.6 8.7-19.2 19.5-19.2s19.5 8.6 19.5 19.2c0 10.5-8.7 19.1-19.5 19.1zm42.6 41.9c-10.7 0-19.4-8.6-19.4-19.2s8.7-19.2 19.4-19.2 19.5 8.6 19.5 19.2c-.1 10.6-8.8 19.2-19.5 19.2z" fill="currentColor"></svg:path>`,
})
export class IonLogoGameControllerAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoGameControllerBIcon],svg[ion-logo-game-controller-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M135.1 204.6c-10.7 0-19.3 8.7-19.3 19.4s8.7 19.4 19.3 19.4c10.6 0 19.3-8.7 19.3-19.4s-8.6-19.4-19.3-19.4z" fill="currentColor"></svg:path><svg:path d="M466.3 248.9c-21.2-88.5-43.6-135.5-88.5-148.8-9.8-2.9-18.1-4-25.7-4-27.6 0-46.9 14.7-96.1 14.7-49.2 0-68.5-14.7-96.1-14.7-7.7 0-16 1.1-25.7 4-44.9 13.3-67.3 60.4-88.5 148.8-21.2 88.5-17.3 152.4 7.7 164.3 4.1 1.9 8.2 2.8 12.5 2.8 21.7 0 45.1-23.8 67.7-52 25.7-32.1 32.1-33 110.3-33h24.3c78.1 0 84.6.8 110.3 33 22.5 28.2 46 52 67.7 52 4.2 0 8.4-.9 12.5-2.8 24.9-12 28.7-75.9 7.6-164.3zm-331.1 14.7c-21.6 0-39.2-17.8-39.2-39.6s17.6-39.6 39.2-39.6c21.7 0 39.2 17.8 39.2 39.6.1 21.9-17.5 39.6-39.2 39.6zm172.9-19.5c-11.1 0-20.1-9-20.1-20.1 0-11.1 9-20.1 20.1-20.1 11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1zM352 288c-11.1 0-20.1-9-20.1-20 0-11.2 9-20.1 20.1-20.1 11.1 0 20.1 8.9 20.1 20.1 0 11-9 20-20.1 20zm0-87.8c-11.1 0-20.1-9-20.1-20.1 0-11.1 9-20.1 20.1-20.1 11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1zm43.9 43.9c-11.1 0-20.1-9-20.1-20.1 0-11.1 9-20.1 20.1-20.1 11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1z" fill="currentColor"></svg:path>`,
})
export class IonLogoGameControllerBIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoGithubIcon],svg[ion-logo-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.6 17.6 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4c0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6c-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8c11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8a18.6 18.6 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.2 208.2 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.6 18.6 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 3.1 11.5 11.4 11.5a19.4 19.4 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32"></svg:path>`,
})
export class IonLogoGithubIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoGitlabIcon],svg[ion-logo-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m488.028 207.68l-.674-1.731l-65.335-171.154a17.07 17.07 0 0 0-6.723-8.129a17.445 17.445 0 0 0-19.995 1.08a17.57 17.57 0 0 0-5.799 8.83l-44.114 135.478H166.756L122.641 36.576a17.2 17.2 0 0 0-5.798-8.856a17.44 17.44 0 0 0-19.996-1.079a17.22 17.22 0 0 0-6.723 8.129l-65.46 171.078l-.649 1.731a122.2 122.2 0 0 0-3.308 77.122c7.259 25.388 22.543 47.718 43.548 63.625l.225.175l.6.427l99.526 74.814l49.238 37.407l29.993 22.73A20.1 20.1 0 0 0 256.034 488c4.405 0 8.689-1.447 12.197-4.121l29.993-22.73l49.238-37.407l100.126-75.266l.25-.2c20.958-15.91 36.207-38.217 43.454-63.57a122.26 122.26 0 0 0-3.264-77.026"></svg:path>`,
})
export class IonLogoGitlabIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoGoogleIcon],svg[ion-logo-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72c-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 0 1-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4c57.73 0 112.45-22.62 151.45-63.66c38.34-40.4 58.17-96.3 58.17-154.9c0-24.67-2.48-39.32-2.59-39.96"></svg:path>`,
})
export class IonLogoGoogleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoGooglePlaystoreIcon],svg[ion-logo-google-playstore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256L55.37 56.42A4.33 4.33 0 0 0 48 59.49M345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32ZM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95ZM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50"></svg:path>`,
})
export class IonLogoGooglePlaystoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoGoogleplusIcon],svg[ion-logo-googleplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M318.2 230.9l-1.6-7H160V288h90.7c-9.4 45-48.4 63.6-84.1 63.6-26 0-50.2-7.8-68.3-25.3-18.6-18.1-28.9-43.1-28.9-70.4 0-27.1 9.8-51.8 27.6-69.6 17.7-17.7 42-25.4 68.7-25.4 30.5 0 49.9 13.8 58.1 21.1l48-47.7C258.3 122.6 221.5 93 164.1 93c-44.3 0-86.7 16.8-117.7 47.8C15.9 171.3 0 215.2 0 256s15 82.6 44.6 113.3C76.3 402 121.2 419 167.5 419c42.1 0 81.9-16.5 110.3-46.3 28-29.4 42.4-70.1 42.4-112.7-.1-18-1.9-28.7-2-29.1z" fill="currentColor"></svg:path><svg:path d="M512 224h-57v-57h-41v57h-57v41h57v57h41v-57h57z" fill="currentColor"></svg:path>`,
})
export class IonLogoGoogleplusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoHackernewsIcon],svg[ion-logo-hackernews-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 32v448h448V32Zm249.67 250.83v84H235v-84l-77-140h55l46.32 97.54l44.33-97.54h52.73Z"></svg:path>`,
})
export class IonLogoHackernewsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoHtml5Icon],svg[ion-logo-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m64 32l34.94 403.21L255.77 480L413 435.15L448 32Zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28l-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2Z"></svg:path>`,
})
export class IonLogoHtml5Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoInstagramIcon],svg[ion-logo-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34zm0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32"></svg:path><svg:path fill="currentColor" d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28M256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112"></svg:path>`,
})
export class IonLogoInstagramIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoIonicIcon],svg[ion-logo-ionic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M73.6 256c0-100.737 81.663-182.4 182.4-182.4c40.552 0 77.992 13.212 108.286 35.603c7.946-18.702 23.958-33.15 43.67-38.976C366.589 36.357 313.656 16 256 16C123.451 16 16 123.452 16 256s107.451 240 240 240c132.548 0 239.999-107.452 239.999-240c0-27.741-4.718-54.427-13.407-79.269c-11.824 15.985-30.428 26.649-51.564 27.742c4.795 16.319 7.371 33.605 7.371 51.527c0 100.737-81.663 182.4-182.399 182.4S73.6 356.737 73.6 256"></svg:path><svg:path fill="currentColor" d="M491.065 207.374a238 238 0 0 0-8.473-30.643c-11.823 15.984-30.428 26.649-51.564 27.742a181.6 181.6 0 0 1 6.719 35.964c22.259-2.737 41.5-15.226 53.318-33.063M256 361.001c57.853 0 105-47.057 105-105c0-57.854-47.057-105-105-105s-105 47.146-105 105s47.147 105 105 105M413.5 166c28.995 0 52.5-23.505 52.5-52.5S442.495 61 413.5 61S361 84.505 361 113.5s23.505 52.5 52.5 52.5"></svg:path>`,
})
export class IonLogoIonicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoIonitronIcon],svg[ion-logo-ionitron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M468.41 269.19c-2.64-33.39-11.76-58-31.44-57.39a1 1 0 0 0-.92 1.37c5.11 12.59 9.68 36.9 9.17 58.07a1 1 0 0 1-2 .08c-2.19-21.21-7.1-41.19-16.22-59.43a186.69 186.69 0 0 0-348.91 41a4 4 0 0 1-3.33 3.11l-8.65 1.22c-17.2 2.4-26.9 34.9-21.7 72.5s23.5 66.2 40.7 63.8l13.24-1.85a4 4 0 0 1 3.93 1.84a186.71 186.71 0 0 0 339-56.07a4 4 0 0 1 3.68-3.08l4.4-.24c15.15-2.53 21.75-31.23 19.05-64.93M94.5 270.42a1 1 0 0 1 1.59-1.19c9.63 10 20.25 27.65 23.32 49.86c3.24 23.05-2.24 45.2-9.13 57.87a1 1 0 0 1-1.84-.73c4.07-14.44 5.16-33.83 2.27-54.74c-2.8-20.32-8.71-38.27-16.21-51.07m178.77 109.79a15.53 15.53 0 0 1-15.41-13.83a15.48 15.48 0 1 1 15.41 13.83m81.84-4.72a15.37 15.37 0 1 1 14.6-16.2a15.43 15.43 0 0 1-14.6 16.2"></svg:path><svg:path fill="currentColor" d="M165.51 70a.3.3 0 0 1 .1.2c.1.2.2.3.3.5v.1a5.78 5.78 0 0 0 2.3 2.7c2 1.5 5 2.4 8.6 3a63.7 63.7 0 0 0 11.9.5a28 28 0 0 0 2.9-.2c-.4-.4-.8-.9-1.2-1.3h-1.3a52 52 0 0 1-11.6-.9a19.7 19.7 0 0 1-8.4-3.4a9.2 9.2 0 0 1-1.4-1.4a4.5 4.5 0 0 1 0-2.3c.5-2.3 2.4-4.8 5.5-7.4a57.3 57.3 0 0 1 10.9-7c.9-.4 1.7-.9 2.6-1.3c.1-.1.3-.1.5-.2a24.7 24.7 0 0 0-.2 10.5c2.3 11.9 11.6 20.3 23.2 20.6l4 24.3l12.7-3l-4-23.3c10.8-4.6 16.3-16.1 14-28a25.8 25.8 0 0 0-3.9-9.5c-5.3-.8-15.6-.8-29.2 2.1c1.1-.3 2.1-.7 3.2-1a135 135 0 0 1 21.5-4.2c.6-.1 1.2-.1 1.8-.2l3.5-.3h.6a62 62 0 0 1 10.8.3a29 29 0 0 1 6.1 1.4a5.7 5.7 0 0 0-.9 3.2a6.12 6.12 0 0 0 4.3 5.8a25.5 25.5 0 0 1-2.1 2.8a26 26 0 0 1-2.9 2.8c-1.1.9-2.3 1.8-3.5 2.7l-6.5 3.8l-.3 1.5a.35.35 0 0 0 .2-.1l8.4-4.7c1.2-.8 2.4-1.6 3.4-2.4a29 29 0 0 0 3.2-2.8a30 30 0 0 0 2.4-2.8l.3-.6a6.14 6.14 0 0 0 5.4-6a6.06 6.06 0 0 0-6.1-6.1a6.8 6.8 0 0 0-2.8.7a24.6 24.6 0 0 0-8.2-2.7a63.5 63.5 0 0 0-15.5-.6a15 15 0 0 0-2.1.2a13.6 13.6 0 0 1-2 .2a25.15 25.15 0 0 0-18.7-3.7a25.86 25.86 0 0 0-17.8 13c-1.3.5-2.6 1.1-3.8 1.7c-.7.3-1.3.6-2 .9a60.8 60.8 0 0 0-13.9 9.1c-3.1 2.9-4.9 5.7-5.3 8.3a6.14 6.14 0 0 0 .7 4a2.2 2.2 0 0 1 .3.5"></svg:path>`,
})
export class IonLogoIonitronIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoJavascriptIcon],svg[ion-logo-javascript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 32v448h448V32Zm240 348c0 43.61-25.76 64.87-63.05 64.87c-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65c12 0 21.86-5.41 21.86-26.46V240h44Zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56c17.44 0 27.57-7.72 27.57-19.75c0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45c0-31.57 24.05-54.63 61.64-54.63c26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18c-12.33 0-20.15 7.82-20.15 18c0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16c.01 37.9-29.76 57.64-69.76 57.64"></svg:path>`,
})
export class IonLogoJavascriptIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoLaravelIcon],svg[ion-logo-laravel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M505.57 234.62c-3.28-3.53-26.82-32.29-39.51-47.79c-6.75-8.24-12.08-14.75-14.32-17.45l-.18-.22l-.2-.21c-5.22-5.83-12.64-12.51-23.78-12.51a40 40 0 0 0-5.41.44c-.37.05-.75.11-1.15.15c-2.45.27-10.06 1.5-28.14 4.48c-14 2.29-35.11 5.77-38.31 6.07l-.71.06l-.69.13c-10 1.78-16.62 6.22-19.56 13.19c-1.55 3.68-3.22 11.15 2.94 19.86c1.53 2.22 6.83 9.56 15.94 22.17c6.06 8.4 12.87 17.82 18.75 26L259.9 275L150.66 96.05l-.2-.34l-.23-.33l-.44-.65C145.32 88.17 139.76 80 123.7 80c-1.13 0-2.31 0-3.63.11c-4.6.25-21.42 1.57-40.89 3.11c-21.49 1.69-50.9 4-54.72 4.1h-.73l-.79.08c-9.14.89-15.77 4.6-19.7 11c-6.55 10.69-1.42 22.69.26 26.63C6.87 133 37.56 197.7 64.63 254.81c18 37.94 36.58 77.17 38.1 80.65a34.85 34.85 0 0 0 32.94 21.59a46.6 46.6 0 0 0 9.86-1.1h.21l.2-.05c13.86-3.38 57.83-14.54 89.2-22.59c1.9 3.32 3.9 6.83 6 10.44c21.93 38.5 37.9 66.35 43.16 73.46C287 421 295 432 310.06 432c5.46 0 10.46-1.4 15.74-2.89l1.53-.43h.12c10.53-3 150.69-52.16 157.87-55.35l.22-.1c5.44-2.41 13.66-6.05 16.18-15.4c1.65-6.12.18-12.33-4.38-18.46l-.07-.09l-.07-.09c-.85-1.1-4-5.21-8.27-10.9c-9.13-12.07-23.88-31.57-36.84-48.54c17.37-4.5 38.8-10.11 43.38-11.55c11.47-3.43 14.94-10.69 16-14.73c.79-3.15 1.82-11.2-5.9-18.85m-320 58.19c-17.81 4.17-30.22 7.08-37.89 8.9c-6.67-13.34-19.74-39.65-32.5-65.33c-29.74-59.92-45.1-90.77-53.18-106.9l8.15-.7c13.34-1.15 31.61-2.72 41.78-3.57c16.76 28.26 74.32 125.3 96.3 162.3Zm178.16 66.64c-24.21 8-37.33 12.37-44.42 14.74c-6.3-10.34-20.16-33.52-32.47-54.19l115.7-29.48c5 6.81 14.57 19.72 33.46 44.93c-18.07 6.04-48.2 16.02-72.27 24m55.87-121.63l-23.76-31.53c13.67-2.39 21.54-3.77 26.15-4.6l12 14.88l11.94 14.82c-8.2 1.99-17.74 4.32-26.33 6.43"></svg:path>`,
})
export class IonLogoLaravelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoLinkedinIcon],svg[ion-logo-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32m-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43c0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43m264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44c-17.74 0-28.24 12-32.91 23.69c-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44c42.13 0 74 27.77 74 87.64Z"></svg:path>`,
})
export class IonLogoLinkedinIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoMarkdownIcon],svg[ion-logo-markdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M475 64H37C16.58 64 0 81.38 0 102.77v306.42C0 430.59 16.58 448 37 448h438c20.38 0 37-17.41 37-38.81V102.77C512 81.38 495.42 64 475 64M288 368h-64V256l-48 64l-48-64v112H64V144h64l48 80l48-80h64Zm96 0l-80-112h48.05L352 144h64v112h48Z"></svg:path>`,
})
export class IonLogoMarkdownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoMastodonIcon],svg[ion-logo-mastodon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 173.59c0-104.13-68.26-134.65-68.26-134.65C377.3 23.15 318.2 16.5 256.8 16h-1.51c-61.4.5-120.46 7.15-154.88 22.94c0 0-68.27 30.52-68.27 134.65c0 23.85-.46 52.35.29 82.59C34.91 358 51.11 458.37 145.32 483.29c43.43 11.49 80.73 13.89 110.76 12.24c54.47-3 85-19.42 85-19.42l-1.79-39.5s-38.93 12.27-82.64 10.77c-43.31-1.48-89-4.67-96-57.81a108 108 0 0 1-1-14.9a559 559 0 0 0 96.39 12.85c32.95 1.51 63.84-1.93 95.22-5.67c60.18-7.18 112.58-44.24 119.16-78.09c10.42-53.34 9.58-130.17 9.58-130.17m-80.54 134.16h-50V185.38c0-25.8-10.86-38.89-32.58-38.89c-24 0-36.06 15.53-36.06 46.24v67h-49.66v-67c0-30.71-12-46.24-36.06-46.24c-21.72 0-32.58 13.09-32.58 38.89v122.37h-50V181.67q0-38.65 19.75-61.39c13.6-15.15 31.4-22.92 53.51-22.92c25.58 0 44.95 9.82 57.75 29.48L256 147.69l12.45-20.85c12.81-19.66 32.17-29.48 57.75-29.48c22.11 0 39.91 7.77 53.51 22.92q19.79 22.72 19.75 61.39Z"></svg:path>`,
})
export class IonLogoMastodonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoMediumIcon],svg[ion-logo-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 28v456h456V28zm378.83 108.04l-24.46 23.45a7.16 7.16 0 0 0-2.72 6.86v172.28c-.44 2.61.61 5.26 2.72 6.86l23.88 23.45v5.15H286.13v-5.15l24.74-24.02c2.43-2.43 2.43-3.15 2.43-6.86V198.81l-68.79 174.71h-9.3l-80.09-174.71v117.1c-.67 4.92.97 9.88 4.43 13.44l32.18 39.03v5.15h-91.24v-5.15l32.18-39.03c3.44-3.57 4.98-8.56 4.15-13.44V180.5c.38-3.76-1.05-7.48-3.86-10.01l-28.6-34.46v-5.15h88.81l68.65 150.55l60.35-150.55h84.66z"></svg:path>`,
})
export class IonLogoMediumIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoMicrosoftIcon],svg[ion-logo-microsoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.87 30.58H244.7v212.81H31.87Zm235.02 0H479.7v212.81H266.89ZM31.87 265.61H244.7v212.8H31.87Zm235.02 0H479.7v212.8H266.89Z"></svg:path>`,
})
export class IonLogoMicrosoftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoModelSIcon],svg[ion-logo-model-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M443.6 208.4c-3.1-1.9-2.2-6.6 1.3-7.3l5.3-1.1c7.1 0 22.4-2.3 25.6-5.4 3.1-3.2 4.2-5.4 4.2-8.2s-1.7-7.7-4.8-11.1c-3-3.4-16-5.2-23.7-6.2s-8.7 0-10.7 1.2c-2 1.3-2.8 9.5-3.1 15-.1 1.2-.9 2.2-2.1 2.5l-.4.1c-3.3.7-6.6-1.1-7.8-4.3-4.6-13-10.7-32.5-19.4-48.4-11.5-20.8-23.5-27.4-28.5-29-4.9-1.5-9.4-2.6-43-6.1-33.8-3.6-63.1-4.1-80.5-4.1s-46.7.5-80.6 4.1c-33.6 3.4-38.1 4.5-43 6.1-5 1.6-17 8.2-28.5 29-9.4 17.1-15.7 38.3-20.4 51.3-.6 1.5-2.2 2.4-3.8 2.1-3.1-.7-5.4-3.3-5.6-6.5-.4-5-1.2-10.7-2.9-11.7-2-1.3-3-2.2-10.7-1.2s-20.6 2.8-23.7 6.2c-3 3.4-4.7 8.3-4.7 11.1s1.1 5.1 4.2 8.3c3.1 3.2 18.5 5.4 25.6 5.4l5.3 1.1c3.5.7 4.4 5.4 1.3 7.3-9.1 5.7-23.2 15.3-32.3 25.6 0 0-4.1 28.7-4.1 62.1 0 48 5.8 92.4 5.8 92.4 1.8.3 3.6.6 5.3.9 0 1.2.7 13.1 2 21.2.3 2 1.3 5.5 6.2 5.5h64.7c1.9 0 5.1-1.6 5.1-3.7l1-17c7.2.1 3.2.1 10.9 0 24.8-.3 15.6-7.5 27.1-7.3 11.3.2 55 3 96 3s84.7-2.8 96-3c11.5-.2 2.3 7.1 27.1 7.3 7.7.1 4.7.1 11.9 0l1 17c0 2.1 3.2 3.7 5.1 3.7h63.5c4.9 0 5.9-3.5 6.2-5.5 1.3-8.1 1.9-19.9 2-21.2l5.4-.9s5.8-44.3 5.8-92.4c0-33.5-4.1-62.1-4.1-62.1-9.3-10.5-23.4-20.1-32.5-25.8zm-320.2-53.6c2.2-5.1 5.9-11.6 10-17.2 5-6.7 12.4-11.2 20.6-12.5 16.7-2.7 52.6-7.3 101.9-7.3 49.3 0 85.2 4.6 101.9 7.3 8.2 1.3 15.6 5.8 20.6 12.5 4.2 5.6 7.9 12.1 10.1 17.2 3.9 9.2 10.4 30.7 9.4 33.2-1 2.5 1 3.7-12.2 2.6-13.1-1-90.6-2.1-129.7-2.1-39.2 0-116.7 1.1-129.7 2.1-13.2 1.1-11.3-.2-12.2-2.6s5.4-24 9.3-33.2zm8.4 116c-9.9 0-29.8-1-34.5-1.2-4.7-.1-8.8 3.8-11.2 3.8s-25.5-3.6-28-14.9c-1.7-7.5-1.1-15.2-.6-19.5.3-1.9 1.9-3.4 3.8-3.5 14.4-.5 29.2.5 55.3 7.9 17.3 4.9 29.8 12.6 36.9 17.8 2.8 2.1 1.8 6.5-1.7 7.2-6.1 1.1-14.4 2.4-20 2.4zm210.4 73c-12.7 1.7-58.5 2.2-86.2 2.2s-73.5-.5-86.2-2.2c-13.1-1.7-29.8-17.3-18.4-30.2 7.6-8.5 20.8-13.6 48.9-17.3 29.8-3.8 48.6-4.3 55.6-4.3s25.8.5 55.6 4.3c28.1 3.7 43.2 9.6 48.9 17.3 10.4 13.8-5.1 28.4-18.2 30.2zm111.7-85.2c-2.5 11.2-25.6 14.9-28 14.9s-6.5-3.9-11.2-3.8c-4.7.2-24.6 1.2-34.5 1.2-5.5 0-13.8-1.3-20-2.4-3.5-.6-4.5-5.1-1.7-7.2 7.1-5.2 19.6-12.9 36.9-17.8 26.1-7.4 40.8-8.4 55.3-7.9 2 .1 3.6 1.5 3.8 3.5.5 4.3 1.1 12-.6 19.5z" fill="currentColor"></svg:path>`,
})
export class IonLogoModelSIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoNoSmokingIcon],svg[ion-logo-no-smoking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M360 256h16v48h-16zm-248 48h129.6l-48-48H112z"></svg:path><svg:path fill="currentColor" d="M364.5 60.1a9 9 0 0 1-1-.6a219 219 0 0 0-34.4-14.8l-5.4-1.8A223.2 223.2 0 0 0 256 32C132.3 32 32 132.3 32 256a223.71 223.71 0 0 0 115.4 195.8c.4.2.7.5 1.1.7a219 219 0 0 0 34.4 14.8l5.4 1.8A222.7 222.7 0 0 0 256 480c123.7 0 224-100.3 224-224A223.76 223.76 0 0 0 364.5 60.1M256 426.4a162 162 0 0 1-27.2-2.4a170 170 0 0 1-28.5-7.3c-1.9-.6-3.8-1.2-5.6-1.9a162 162 0 0 1-19-8.6a170.33 170.33 0 0 1-90.1-150.3c0-37.2 12.4-71.4 32.7-99.4l237.2 237.2c-28.1 20.3-62.3 32.7-99.5 32.7m137.8-71L156.6 118.2c28-20.2 62.1-32.6 99.4-32.6a163 163 0 0 1 27.2 2.4a170 170 0 0 1 28.5 7.3c1.8.6 3.7 1.2 5.6 1.9a162 162 0 0 1 18 8.1a170.25 170.25 0 0 1 91.2 150.8c-.1 37.2-12.5 71.3-32.7 99.3"></svg:path><svg:path fill="currentColor" d="M352 256h-34l34 34zm32 0h16v48h-16zm-23.9-43.3c-8.8-4.1-22-5.7-45.6-5.7h-3.6c-12.7.1-15.9-.1-20-6.1c-2.8-4.2-1-14.8 3.7-21.9a8 8 0 0 0 .4-8.2a8.26 8.26 0 0 0-7-4.3a53.7 53.7 0 0 1-18.3-3.9c-10.6-4.5-15.6-12.1-15.6-23.1c0-25.8 21.8-27.7 22.8-27.7v-16c-12 0-38.8 11-38.8 43.7c0 17.5 9 31 25.7 38a66.6 66.6 0 0 0 12 3.6c-3.3 9.8-3.6 20.9 1.7 28.7c9 13.3 20.3 13.2 33.3 13.1h3.5c26.3 0 34.6 2.3 38.9 4.3c5.7 2.6 6.8 7.5 6.6 15.7v1h16v-1c0-7.1.3-22.8-15.7-30.2"></svg:path><svg:path fill="currentColor" d="M400 244c0-25.7-3-39.2-9.1-49.6C382.3 180 368.5 172 352 172h-17.4c2.9-8.3 5.4-19.8 3.5-30.9c-3.2-18.8-19.1-30-43.1-30v16c21 0 26.1 9.1 27.4 16.7c2.5 14.5-6.8 32.1-6.9 32.3a8 8 0 0 0 .1 7.9a8.06 8.06 0 0 0 6.9 3.9H352c10.9 0 19.4 4.9 25.1 14.6c3.1 5.3 6.9 13.5 6.9 41.4h16Z"></svg:path>`,
})
export class IonLogoNoSmokingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoNodejsIcon],svg[ion-logo-nodejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M429.76 130.07L274.33 36.85a37 37 0 0 0-36.65 0L82.24 130.06A38.2 38.2 0 0 0 64 162.83V349a38.26 38.26 0 0 0 18.24 32.8L123 406.14l.23.13c20.58 10.53 28.46 10.53 37.59 10.53c32.14 0 52.11-20.8 52.11-54.29V182a8.51 8.51 0 0 0-8.42-8.58h-22.38a8.51 8.51 0 0 0-8.42 8.58v180.51a15 15 0 0 1-6.85 13.07c-5.9 3.6-14.47 2.84-24.14-2.15l-39.06-23.51a1.1 1.1 0 0 1-.48-.92V165.46a1.32 1.32 0 0 1 .59-1.06l151.84-93a.82.82 0 0 1 .73 0l151.93 93a1.34 1.34 0 0 1 .55 1.1V349a1.28 1.28 0 0 1-.45 1l-152.06 90.65a1.22 1.22 0 0 1-.8 0l-38.83-23.06a7.8 7.8 0 0 0-7.83-.41l-.34.2c-10.72 6.35-13.6 8-23.54 11.62c-1.62.59-5.43 2-5.76 5.77s3.29 6.45 6.51 8.32l51.9 31.87a35.67 35.67 0 0 0 18.3 5.07h.58a35.87 35.87 0 0 0 17.83-5.07l155.43-93.13A38.37 38.37 0 0 0 448 349V162.83a38.21 38.21 0 0 0-18.24-32.76"></svg:path><svg:path fill="currentColor" d="M307.88 318.05c-37.29 0-45.24-10.42-47.6-27.24a8.43 8.43 0 0 0-8.22-7.32h-19.8a8.44 8.44 0 0 0-8.26 8.58c0 14.58 5.12 62.17 83.92 62.17c24.38 0 44.66-5.7 58.63-16.49S388 311.26 388 292.55c0-37.55-24.5-47.83-72.75-54.55c-49.05-6.82-49.05-10.29-49.05-17.89c0-5.47 0-18.28 35.46-18.28c25.23 0 38.74 3.19 43.06 20a8.35 8.35 0 0 0 8.06 6.67h19.87a8.24 8.24 0 0 0 6.16-2.86a8.9 8.9 0 0 0 2.12-6.44c-2.57-35.55-28.56-53.58-79.24-53.58c-46.06 0-73.55 20.75-73.55 55.5c0 38.1 28.49 48.87 71.29 53.33c50 5.17 50 12.71 50 19.37c.03 10.38-4.28 24.23-41.55 24.23"></svg:path>`,
})
export class IonLogoNodejsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoNpmIcon],svg[ion-logo-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.6 213.1H256v57.1h-28.4z"></svg:path><svg:path fill="currentColor" d="M0 156v171.4h142.2V356H256v-28.6h256V156Zm142.2 142.9h-28.4v-85.7H85.3v85.7H28.4V184.6h113.8Zm142.2 0h-56.9v28.6h-56.9V184.6h113.8Zm199.2 0h-28.4v-85.7h-28.4v85.7h-28.4v-85.7H370v85.7h-56.9V184.6h170.7v114.3Z"></svg:path>`,
})
export class IonLogoNpmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoOctocatIcon],svg[ion-logo-octocat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.86 290.12c-9.75 0-18.11 4.56-24.86 13.87s-10.07 20.58-10.07 34s3.43 24.91 10.07 34.12S163 386 172.86 386c9.1 0 17-4.66 23.68-13.87s10.07-20.58 10.07-34.12s-3.43-24.81-10.07-34s-14.54-13.89-23.68-13.89m167.46 0c-9.64 0-18.11 4.56-24.86 13.87s-10.07 20.58-10.07 34s3.43 24.91 10.07 34.12S330.57 386 340.32 386c9.11 0 17-4.66 23.79-13.87s10.07-20.58 10.07-34.12s-3.43-24.81-10.07-34s-14.57-13.89-23.79-13.89"></svg:path><svg:path fill="currentColor" d="M459.36 165c-.11 0 2.89-15.49.32-42.47c-2.36-27-8-51.78-17.25-74.53c0 0-4.72.87-13.72 3.14S405 58 384.89 67.18c-19.82 9.2-40.71 21.44-62.46 36.29c-14.79-4.23-36.86-6.39-66.43-6.39c-28.18 0-50.25 2.16-66.43 6.39Q117.9 53.25 69.46 48q-13.81 34.13-17.14 74.75c-2.57 27 .43 42.58.43 42.58C26.71 193.82 16 234.88 16 268.78c0 26.22.75 49.94 6.54 71c6 20.91 13.6 38 22.6 51.14A147.5 147.5 0 0 0 79 425.43c13.39 10.08 25.71 17.34 36.86 21.89c11.25 4.76 24 8.23 38.57 10.72a279 279 0 0 0 32.68 4.34s30 1.62 69 1.62s68.89-1.62 68.89-1.62a285 285 0 0 0 32.68-4.38a179 179 0 0 0 38.46-10.72c11.15-4.66 23.47-11.81 37-21.89a145 145 0 0 0 33.75-34.55c9-13.11 16.6-30.23 22.6-51.14s6.51-44.81 6.51-71.03c0-32.82-10.71-74.42-36.64-103.67m-70.07 253.07C359.39 432.26 315.46 438 257.18 438h-2.25c-58.29 0-102.22-5.63-131.57-19.93s-44.25-43.45-44.25-87.43c0-26.32 9.21-47.66 27.32-64c7.93-7 17.57-11.92 29.57-14.84s22.93-3 33.21-2.71c10.08.43 24.22 2.38 42.11 3.79s31.39 3.25 44.79 3.25c12.53 0 29.14-2.17 55.82-4.33s46.61-3.25 59.46-1.09c13.18 2.17 24.65 6.72 34.4 15.93q28.44 25.67 28.5 64c-.11 43.98-15.22 73.24-45 87.43"></svg:path>`,
})
export class IonLogoOctocatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoPaypalIcon],svg[ion-logo-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M424.81 148.79c-.43 2.76-.93 5.58-1.49 8.48c-19.17 98-84.76 131.8-168.54 131.8h-42.65a20.67 20.67 0 0 0-20.47 17.46l-21.84 137.84l-6.18 39.07a10.86 10.86 0 0 0 9.07 12.42a11 11 0 0 0 1.7.13h75.65a18.18 18.18 0 0 0 18-15.27l.74-3.83l14.24-90l.91-4.94a18.16 18.16 0 0 1 18-15.3h11.31c73.3 0 130.67-29.62 147.44-115.32c7-35.8 3.38-65.69-15.16-86.72a72.3 72.3 0 0 0-20.73-15.82"></svg:path><svg:path fill="currentColor" d="M385.52 51.09C363.84 26.52 324.71 16 274.63 16H129.25a20.75 20.75 0 0 0-20.54 17.48l-60.55 382a12.43 12.43 0 0 0 10.39 14.22a12.6 12.6 0 0 0 1.94.15h89.76l22.54-142.29l-.7 4.46a20.67 20.67 0 0 1 20.47-17.46h42.65c83.77 0 149.36-33.86 168.54-131.8c.57-2.9 1.05-5.72 1.49-8.48c5.7-36.22-.05-60.87-19.72-83.19"></svg:path>`,
})
export class IonLogoPaypalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoPinterestIcon],svg[ion-logo-pinterest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256.05 32c-123.7 0-224 100.3-224 224c0 91.7 55.2 170.5 134.1 205.2c-.6-15.6-.1-34.4 3.9-51.4c4.3-18.2 28.8-122.1 28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2 19.2-58 43.2-58c20.4 0 30.2 15.3 30.2 33.6c0 20.5-13.1 51.1-19.8 79.5c-5.6 23.8 11.9 43.1 35.4 43.1c42.4 0 71-54.5 71-119.1c0-49.1-33.1-85.8-93.2-85.8c-67.9 0-110.3 50.7-110.3 107.3c0 19.5 5.8 33.3 14.8 43.9c4.1 4.9 4.7 6.9 3.2 12.5c-1.1 4.1-3.5 14-4.6 18c-1.5 5.7-6.1 7.7-11.2 5.6c-31.3-12.8-45.9-47-45.9-85.6c0-63.6 53.7-139.9 160.1-139.9c85.5 0 141.8 61.9 141.8 128.3c0 87.9-48.9 153.5-120.9 153.5c-24.2 0-46.9-13.1-54.7-27.9c0 0-13 51.6-15.8 61.6c-4.7 17.3-14 34.5-22.5 48a225.1 225.1 0 0 0 63.5 9.2c123.7 0 224-100.3 224-224S379.75 32 256.05 32"></svg:path>`,
})
export class IonLogoPinterestIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoPlaystationIcon],svg[ion-logo-playstation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M399.77 203c-.8-17.1-3.3-34.5-10.8-50.1a82.5 82.5 0 0 0-16.5-23.2a105.6 105.6 0 0 0-21.3-16.3c-17.1-10.2-37.5-17-84.4-31S192 64 192 64v358.3l79.9 25.7s.1-198.8.1-299.5v-3.8c0-9.3 7.5-16.8 16.1-16.8h.5c8.5 0 15.5 7.5 15.5 16.8V278c11 5.3 29.2 9.3 41.8 9.1a47.8 47.8 0 0 0 24-5.7a49.1 49.1 0 0 0 18.4-17.8a78.6 78.6 0 0 0 9.9-27.3c1.87-10.8 1.97-22.1 1.57-33.3M86.67 357.8c27.4-9.8 89.3-29.5 89.3-29.5v-47.2s-76.5 24.8-111.3 37.1c-8.6 3.1-17.3 5.9-25.7 9.5c-9.8 4.1-19.4 8.7-28.1 14.8a26.3 26.3 0 0 0-9.2 10.1a17.36 17.36 0 0 0-.5 13.6c2 5.1 5.8 9.3 10.1 12.6c7.8 5.9 17.1 9.5 26.4 12.2a262.4 262.4 0 0 0 88.4 13.3c14.5-.2 36-1.9 50-4.4v-42s-11 2.5-41.3 12.5c-4.6 1.5-9.2 3.3-14 4.3a105 105 0 0 1-21.6 2.2c-6.5-.3-13.2-.7-19.3-3.1c-2.2-1-4.6-2.2-5.5-4.6c-.8-2 .3-4 1.7-5.4c2.8-2.9 6.8-4.5 10.6-6"></svg:path><svg:path fill="currentColor" d="M512 345.9c-.1-6-3.7-11.2-7.9-15c-7.1-6.3-15.9-10.3-24.7-13.5c-5.5-1.9-9.3-3.3-14.7-5c-25.2-8.2-51.9-11.2-78.3-11.3c-8 .3-23.1.5-31 1.4c-21.9 2.5-67.3 15.4-67.3 15.4v48.8s67.5-21.6 96.5-31.8a94.4 94.4 0 0 1 30.3-4.6c6.5.2 13.2.7 19.4 3.1c2.2.9 4.5 2.2 5.5 4.5c.9 2.6-.9 5-2.9 6.5c-4.7 3.8-10.7 5.3-16.2 7.4c-41 14.5-132.7 44.7-132.7 44.7v47s117.2-39.6 170.8-58.8c8.9-3.3 17.9-6.1 26.4-10.4c7.9-4 15.8-8.6 21.8-15.3a19.74 19.74 0 0 0 5-13.1"></svg:path>`,
})
export class IonLogoPlaystationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoPolymerIcon],svg[ion-logo-polymer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M392.3 96h-77.9L160.8 348.6 109.9 256l87.7-160h-77.9L32 256l87.7 160h77.9l153.7-252.6 50.8 92.6-87.7 160h77.9L480 256 392.3 96z" fill="currentColor"></svg:path>`,
})
export class IonLogoPolymerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoPwaIcon],svg[ion-logo-pwa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m330.7 352l77.72-192H356.9l-53.16 124.07L265.93 160h-39.61l-40.58 124.07l-28.63-56.53l-25.9 79.46l26.3 45h50.7l36.68-111.27l35 111.27ZM48.79 286.09h31.65a93.4 93.4 0 0 0 25.62-3.21l8.18-25.19l22.88-70.39a56 56 0 0 0-6-7.82Q113.54 160 79.59 160H0v192h48.79Zm41.9-81.92q6.89 6.92 6.88 18.52t-6 18.53q-6.64 7.62-24.44 7.61H48.79v-51.58h18.42q16.59 0 23.48 6.92m286.16 113.44l14.79-37.25h42.69l-20.26-56.51L439.41 160L512 352h-53.53l-12.4-34.39Z"></svg:path>`,
})
export class IonLogoPwaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoPythonIcon],svg[ion-logo-python-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M314 36.38c-18.59-3.06-45.8-4.47-64.27-4.38a311 311 0 0 0-51.66 4.38c-45.74 8-54.07 24.7-54.07 55.54V128h112v16H107.62C66.06 144 32.33 193.67 32 255.12v.88a163 163 0 0 0 3.13 32c9.29 46.28 38.23 80 72.49 80H128v-54c0-31.3 20.84-59.95 55-66.1l9.87-1.23H314a56 56 0 0 0 15.06-2A52.48 52.48 0 0 0 368 193.68V91.92c0-28.92-24.68-50.73-54-55.54M194.93 105.5a20.37 20.37 0 1 1 20.3-20.3a20.29 20.29 0 0 1-20.3 20.3"></svg:path><svg:path fill="currentColor" d="M475.28 217c-10.7-42.61-38.41-73-70.9-73h-17.71v47.45c0 39.57-26 68.22-57.74 73.13a63.5 63.5 0 0 1-9.69.75H198.08a60 60 0 0 0-15.23 1.95C160.54 273.14 144 291.7 144 315.77v101.77c0 29 29.14 46 57.73 54.31c34.21 9.95 71.48 11.75 112.42 0c27.19-7.77 53.85-23.48 53.85-54.31V384H256v-16h148.38c29.44 0 54.95-24.93 67.45-61.31A156.8 156.8 0 0 0 480 256a160.6 160.6 0 0 0-4.72-39M316.51 404a20.37 20.37 0 1 1-20.3 20.3a20.29 20.29 0 0 1 20.3-20.3"></svg:path>`,
})
export class IonLogoPythonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoReactIcon],svg[ion-logo-react-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M410.66 180.72q-7.67-2.62-15.45-4.88q1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83c-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11q-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69c-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a321 321 0 0 0-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07q-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49c25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25q6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93c25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86q4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78c-.02-29-33.52-57.01-85.36-74.9m-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39c16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a488 488 0 0 0-64.18-10.16a481 481 0 0 0-40.57-50.75q5.38-5.22 11.02-10.15ZM157.73 280.25q6.51 12.6 13.61 24.89q7.23 12.54 15.07 24.71a435 435 0 0 1-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47m0-48.33c-6-14.19-11.08-28.15-15.25-41.63c13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88Zm10.9 24.17q9.48-19.77 20.42-38.78q10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76ZM340.75 305q7.25-12.58 13.92-25.49a440 440 0 0 1 16.12 42.32a434 434 0 0 1-44.79 7.65q7.62-12.09 14.75-24.48m13.72-73.07q-6.64-12.65-13.81-25q-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a440 440 0 0 1-15.37 41.39m-98.24-107.45a440 440 0 0 1 28.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18M145.66 65.86c16.06-9.32 51.57 4 89 37.27c2.39 2.13 4.8 4.36 7.2 6.67A491 491 0 0 0 201 160.51a499 499 0 0 0-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83m-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81c-11.88-10.19-17.9-20.36-17.9-28.6c0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.5 493.5 0 0 0 23.4 60.75a502.5 502.5 0 0 0-23.69 61.58m111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72c-14.78 5.23-26.55 5.38-33.66 1.27c-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a481 481 0 0 0 64.69 9.39a501 501 0 0 0 41.2 51c-2.98 2.93-6.03 5.75-9.14 8.48m23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439 439 0 0 1-28.2 34.74m124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86c-15.13 8.78-47.48-2.63-82.36-32.72c-4-3.44-8-7.13-12.07-11a484.5 484.5 0 0 0 40.23-51.2a478 478 0 0 0 65-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47m17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483 483 0 0 0-24.31-60.94a481.5 481.5 0 0 0 23.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52c44.42 15.32 71.52 38 71.52 55.43c0 18.6-29.27 42.74-76.78 58.52"></svg:path><svg:path fill="currentColor" d="M256 298.55a43 43 0 1 0-42.86-43a42.91 42.91 0 0 0 42.86 43"></svg:path>`,
})
export class IonLogoReactIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoRedditIcon],svg[ion-logo-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M324 256a36 36 0 1 0 36 36a36 36 0 0 0-36-36"></svg:path><svg:circle cx="188" cy="292" r="36" fill="currentColor" transform="rotate(-22.5 187.997 291.992)"></svg:circle><svg:path fill="currentColor" d="M496 253.77c0-31.19-25.14-56.56-56-56.56a55.72 55.72 0 0 0-35.61 12.86c-35-23.77-80.78-38.32-129.65-41.27l22-79l66.41 13.2c1.9 26.48 24 47.49 50.65 47.49c28 0 50.78-23 50.78-51.21S441 48 413 48c-19.53 0-36.31 11.19-44.85 28.77l-90-17.89l-31.1 109.52l-4.63.13c-50.63 2.21-98.34 16.93-134.77 41.53A55.38 55.38 0 0 0 72 197.21c-30.89 0-56 25.37-56 56.56a56.43 56.43 0 0 0 28.11 49.06a99 99 0 0 0-.89 13.34c.11 39.74 22.49 77 63 105C146.36 448.77 199.51 464 256 464s109.76-15.23 149.83-42.89c40.53-28 62.85-65.27 62.85-105.06a109 109 0 0 0-.84-13.3A56.32 56.32 0 0 0 496 253.77M414 75a24 24 0 1 1-24 24a24 24 0 0 1 24-24M42.72 253.77a29.6 29.6 0 0 1 29.42-29.71a29 29 0 0 1 13.62 3.43c-15.5 14.41-26.93 30.41-34.07 47.68a30.23 30.23 0 0 1-8.97-21.4M390.82 399c-35.74 24.59-83.6 38.14-134.77 38.14S157 423.61 121.29 399c-33-22.79-51.24-52.26-51.24-83A78.5 78.5 0 0 1 75 288.72c5.68-15.74 16.16-30.48 31.15-43.79a155 155 0 0 1 14.76-11.53l.3-.21l.24-.17c35.72-24.52 83.52-38 134.61-38s98.9 13.51 134.62 38l.23.17l.34.25A157 157 0 0 1 406 244.92c15 13.32 25.48 28.05 31.16 43.81a85.4 85.4 0 0 1 4.31 17.67a77 77 0 0 1 .6 9.65c-.01 30.72-18.21 60.19-51.25 82.95m69.6-123.92c-7.13-17.28-18.56-33.29-34.07-47.72A29.1 29.1 0 0 1 440 224a29.59 29.59 0 0 1 29.41 29.71a30.07 30.07 0 0 1-8.99 21.39Z"></svg:path><svg:path fill="currentColor" d="M323.23 362.22c-.25.25-25.56 26.07-67.15 26.27c-42-.2-66.28-25.23-67.31-26.27a4.14 4.14 0 0 0-5.83 0l-13.7 13.47a4.15 4.15 0 0 0 0 5.89c3.4 3.4 34.7 34.23 86.78 34.45c51.94-.22 83.38-31.05 86.78-34.45a4.16 4.16 0 0 0 0-5.9l-13.71-13.47a4.13 4.13 0 0 0-5.81 0Z"></svg:path>`,
})
export class IonLogoRedditIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoRssIcon],svg[ion-logo-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108.56 342.78a60.34 60.34 0 1 0 60.56 60.44a60.63 60.63 0 0 0-60.56-60.44"></svg:path><svg:path fill="currentColor" d="M48 186.67v86.55c52 0 101.94 15.39 138.67 52.11s52 86.56 52 138.67h86.66c0-151.56-125.66-277.33-277.33-277.33"></svg:path><svg:path fill="currentColor" d="M48 48v86.56c185.25 0 329.22 144.08 329.22 329.44H464C464 234.66 277.67 48 48 48"></svg:path>`,
})
export class IonLogoRssIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoSassIcon],svg[ion-logo-sass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M511.78 328.07c-1.47-11.92-7.51-22.26-18-30.77a3.6 3.6 0 0 0-.43-.44l-.53-.38l-.17-.12l-5.57-4l-.19-.14l-.71-.5a3.5 3.5 0 0 0-.83-.35c-17.62-10.49-46.79-17.84-91.42-2.09c-10.65-17.92-11.86-32.28-4.73-54.28c1.27-3.83.09-6.36-3.71-8c-7.64-3.25-18.1-1.59-25.52.37c-3.46.9-5.54 2.86-6.2 5.83c-4.7 22-18.36 42.1-31.57 61.5l-.78 1.14c-8.14-17.26-6.45-30.63-.78-47.38c1.13-3.34.24-5.56-2.89-7.22c-8.74-4.51-21.85-1.41-27.07.13c-6.62 1.93-13.72 19.82-21.65 41.24c-2 5.39-3.72 10-4.75 12.15c-2.45 5-4.79 10.7-7.27 16.75c-5.6 13.69-11.91 29.1-20.93 38.78c-3.28-7.25 1.88-18.68 6.89-29.77c5.93-13.11 11.53-25.5 5.08-33.41a11.82 11.82 0 0 0-8.33-4.32a13.26 13.26 0 0 0-6.15 1c.67-5.65.7-10.11-.95-15.5c-2.36-7.69-8.49-12-16.93-11.77c-19.22.56-35.48 14.88-45.75 26.8c-6.84 8-22 14.1-35.31 19.45c-5.26 2.23-10.26 4.23-14.43 6.23c-6.65-5.62-15.1-11.29-24-17.28c-25-16.78-53.33-35.81-54.31-61.61c-1.4-38.11 42-65.14 79.88-84.43c28.71-14.6 53.67-24.28 76.31-29.57c31.8-7.43 58.66-5.93 79.82 4.44c11.58 5.67 17 18 13.56 30.68c-9 32.95-46.29 55.53-78.18 65.69c-19.21 6.12-35.56 8.68-50 7.84c-18.1-1.05-32.88-10.13-39.2-14a21 21 0 0 0-3.2-1.8l-.29-.07a3.21 3.21 0 0 0-3.19 1c-1.3 1.55-.84 4-.37 5.24c6.15 16.07 18.85 26.22 37.74 30.17a92 92 0 0 0 18.78 1.79c44.21 0 100.62-25.49 121.34-46.48c14.13-14.3 24.42-29 28.68-54.35c4.45-26.55-13.55-45-31.89-53.5c-44.57-20.57-95.19-12.44-129.81-2c-40.5 12.21-82.4 34.41-114.94 60.93c-40.12 32.67-54.62 63-43.12 90.25c11.81 27.93 40.61 45.4 68.46 62.3c9 5.45 17.56 10.64 25.27 16c-2.32 1.13-4.69 2.28-7.1 3.43c-23.38 11.33-49.9 24.08-64.61 45.15c-10.68 15.35-12.68 30.63-5.94 45.42c3.6 7.87 10 13.21 18.89 15.87A50 50 0 0 0 53 432c17.31 0 36.36-7 46.73-13.47c18.32-11.5 30.19-26.94 35.29-45.89c4.54-16.86 3.45-33.61-3.15-48.56l22.45-11.32c-10.83 36-2.53 57.5 6.59 69.36c3.36 4.37 9.42 7 16.19 7.12s13-2.43 16.52-6.77c6.66-8.25 11.58-17.9 16.11-27.55c-.24 6.3.06 12.68 2.21 18.09c1.93 4.87 5.11 8.1 9.21 9.34c4.36 1.33 9.47.21 14.39-3.15c22.17-15.17 37.33-51.58 49.51-80.85c1.73-4.16 3.39-8.16 5-11.9a152.5 152.5 0 0 0 12.5 31.07c1.18 2.14 1.08 3.08-.52 4.84c-2.41 2.64-5.77 5.83-9.33 9.21c-10.78 10.23-24.2 23-26 34.23c-.7 4.5 2.4 8.6 7.21 9.53c14.47 2.88 31.9-1.33 46.64-11.25c13.4-9 18.44-21.55 15-37.19c-3.33-15.06 4.27-33.76 22.59-55.62c3 12.53 7 22.66 12.52 31.53l-.15.12c-13.34 11.65-31.62 27.6-28.78 46.95a13.35 13.35 0 0 0 5.58 9.22a14.22 14.22 0 0 0 11.2 2.06c17.47-3.67 30.62-11.06 40.18-22.57s6.07-24.27 2.85-34.17c25-6.78 47.26-6.61 68.1.5c11.7 4 20.09 10.57 24.93 19.64c6.09 11.41 2.8 21.94-9.29 29.65c-3.71 2.37-5.5 3.82-5.61 5.65a2.65 2.65 0 0 0 1 2.23c1.4 1.15 5.72 3.15 15.49-3c9-5.65 14.28-13.34 15.63-23a39 39 0 0 0-.01-8.01m-399.73 25.06l-.1 1.28c-1.56 14.64-9 27.4-22.15 38c-8.26 6.66-17.23 10.75-25.25 11.53c-5.6.54-9.67-.22-12.09-2.27c-1.81-1.53-2.78-3.82-3-7c-1.64-25.48 38.32-50.8 60.81-59.13a51.4 51.4 0 0 1 1.78 17.59m102.35-71.86c-3.7 21.09-14.49 60.9-31.45 76.35c-.81.74-1.49 1-1.8.93s-.55-.44-.8-1c-5.66-13.12-3.57-35.28 5-52.69c6.59-13.42 16-22.31 26.52-25a5.3 5.3 0 0 1 1.34-.19a1.58 1.58 0 0 1 1 .27a1.64 1.64 0 0 1 .19 1.33m83.49 76.88c-3.19 3.33-7.56 2.88-6.53 1.66l16.24-17.24c-1.31 5.93-5.18 10.84-9.71 15.58m67.37-14.91a14.1 14.1 0 0 1-4.93 1.39c-.46-9.07 8.33-19.28 17-26.09c2.33 9.46-2.44 19.46-12.07 24.7"></svg:path>`,
})
export class IonLogoSassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoSkypeIcon],svg[ion-logo-skype-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M467.16 303.6a205.7 205.7 0 0 0 4.9-45.15c0-116.32-95.69-210.7-213.79-210.7a222 222 0 0 0-36.52 3A123.6 123.6 0 0 0 155.93 32C87.55 32 32 86.72 32 154.15A119.56 119.56 0 0 0 49 216a211 211 0 0 0-4.32 42.35c0 116.44 95.69 210.7 213.67 210.7a214 214 0 0 0 39.09-3.5A125.45 125.45 0 0 0 356.07 480C424.57 480 480 425.28 480 357.85a118 118 0 0 0-12.84-54.25M368 359c-9.92 13.76-24.51 24.73-43.41 32.43S283.36 403 257.69 403c-30.69 0-56.36-5.37-76.55-15.87a101 101 0 0 1-35.24-30.8c-9.11-12.83-13.66-25.66-13.66-38c0-7.7 3-14.35 8.87-19.95c5.84-5.37 13.42-8.17 22.29-8.17c7.35 0 13.65 2.1 18.79 6.42c4.9 4.08 9.1 10.15 12.48 18.08A108 108 0 0 0 207 336.15q6.32 8.22 17.86 13.65c7.82 3.62 18.2 5.48 31 5.48c17.62 0 32.09-3.73 42.94-11.08c10.74-7.12 15.88-15.75 15.88-26.25c0-8.28-2.69-14.82-8.29-19.95c-5.83-5.37-13.42-9.57-22.87-12.37c-9.69-3-22.87-6.18-39.21-9.56c-22.17-4.67-41-10.27-56-16.57c-15.28-6.42-27.65-15.4-36.76-26.48c-9.22-11.32-13.77-25.55-13.77-42.24a67.86 67.86 0 0 1 14.47-42.58c9.57-12.25 23.46-21.82 41.55-28.35c17.74-6.53 38.86-9.8 62.66-9.8c19.14 0 35.83 2.22 49.83 6.42s25.91 10.15 35.36 17.38s16.34 14.93 20.77 23s6.66 16.22 6.66 24c0 7.46-2.92 14.35-8.76 20.3a29.65 29.65 0 0 1-21.94 9.1c-7.93 0-14.12-1.87-18.43-5.6c-4-3.5-8.17-8.87-12.72-16.69c-5.37-9.91-11.79-17.85-19.14-23.45c-7.24-5.36-19.14-8.16-35.71-8.16c-15.29 0-27.77 3-37 9c-8.87 5.72-13.19 12.37-13.19 20.18a18.26 18.26 0 0 0 4.32 12.25a38.1 38.1 0 0 0 12.72 9.57a90 90 0 0 0 17.15 6.53c6 1.64 15.87 4.09 29.53 7.12c17.38 3.62 33.25 7.82 47.26 12.13c14.24 4.55 26.49 10 36.52 16.45a72.9 72.9 0 0 1 24.16 25.09c5.72 10 8.64 22.63 8.64 37.1A75.1 75.1 0 0 1 368 359"></svg:path>`,
})
export class IonLogoSkypeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoSlackIcon],svg[ion-logo-slack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126.12 315.1A47.06 47.06 0 1 1 79.06 268h47.06Zm23.72 0a47.06 47.06 0 0 1 94.12 0v117.84a47.06 47.06 0 1 1-94.12 0Zm47.06-188.98A47.06 47.06 0 1 1 244 79.06v47.06Zm0 23.72a47.06 47.06 0 0 1 0 94.12H79.06a47.06 47.06 0 0 1 0-94.12Zm188.98 47.06a47.06 47.06 0 1 1 47.06 47.1h-47.06Zm-23.72 0a47.06 47.06 0 0 1-94.12 0V79.06a47.06 47.06 0 1 1 94.12 0ZM315.1 385.88a47.06 47.06 0 1 1-47.1 47.06v-47.06Zm0-23.72a47.06 47.06 0 0 1 0-94.12h117.84a47.06 47.06 0 1 1 0 94.12Z"></svg:path>`,
})
export class IonLogoSlackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoSnapchatIcon],svg[ion-logo-snapchat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 347.21a190.3 190.3 0 0 1-32.79-5.31c-27.28-6.63-54.84-24.26-68.12-52.43c-6.9-14.63-2.64-18.59 11.86-24c14.18-5.27 29.8-7.72 36.86-23c5.89-12.76 1.13-27.76-10.41-35.49c-15.71-10.53-30.35-.21-46.62 2.07c3.73-46.66 8.66-88.57-22.67-127.73C338.14 48.86 297.34 32 256.29 32s-81.86 16.86-107.81 49.33c-31.38 39.26-26.4 81.18-22.67 127.92c-16.32-2.25-30.81-12.79-46.63-2.18c-14.72 9.85-17 29.76-5.44 43s31.64 9.5 43.45 20.6c6.49 6.09 3.49 12.61-.35 20.14c-14.48 28.4-39.26 45.74-69.84 51.56c-4 .76-22.31 2.87-31 3.65c0 9.28.52 16.78 1.63 21.73c2.94 13.06 12.32 23.58 23.69 30.1c11.18 6.4 35.48 6.43 41.68 15.51c3 4.48 1.76 12.28 5.33 17.38a23.8 23.8 0 0 0 15.37 9.75c18.61 3.61 37.32-7.2 56.42-2.1c14.85 3.95 26.52 15.87 39.26 24c15.51 9.85 32.34 16.42 50.83 17.49c38.1 2.21 59.93-18.91 90.58-36.42c19.5-11.14 38.15-3.86 58.88-2.68c20.1 1.15 23.53-9.25 29.62-24.88a27.4 27.4 0 0 0 1.54-4.85a10.5 10.5 0 0 0 2.28-1.47c2-1.57 10.55-2.34 12.76-2.86c10.28-2.44 20.34-5.15 29.17-11.2c11.31-7.76 17.65-18.5 19.58-32.64a94 94 0 0 0 1.38-15.67M208 128c8.84 0 16 10.74 16 24s-7.16 24-16 24s-16-10.74-16-24s7.16-24 16-24m103.62 77.7c-15.25 15-35 23.3-55.62 23.3a78.37 78.37 0 0 1-55.66-23.34a8 8 0 0 1 11.32-11.32A62.46 62.46 0 0 0 256 213c16.39 0 32.15-6.64 44.39-18.7a8 8 0 0 1 11.23 11.4M304 176c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24"></svg:path>`,
})
export class IonLogoSnapchatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoSoundcloudIcon],svg[ion-logo-soundcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.8 278a2.11 2.11 0 0 0-2 2L0 308.64l3.74 28.16a2.12 2.12 0 0 0 2.05 2a2.14 2.14 0 0 0 2-2l4.44-28.17L7.83 280a2.14 2.14 0 0 0-2-2Zm21.05-15.68a2.13 2.13 0 0 0-4.26 0l-5 46.32l5 45.3a2.13 2.13 0 0 0 4.26 0l5.73-45.31l-5.73-46.32Zm79.32-42.73a4 4 0 0 0-3.87 3.87l-4 85.22l4 55.08a3.88 3.88 0 0 0 7.75 0l4.53-55.08l-4.53-85.22a4 4 0 0 0-3.88-3.87m-41.05 29.62a3.09 3.09 0 0 0-3 3l-4.52 56.45l4.51 54.63a3 3 0 0 0 6 0l5.13-54.63l-5.13-56.48a3.1 3.1 0 0 0-2.99-2.97m82.76 118.39a4.83 4.83 0 0 0 4.75-4.74l3.93-54.15l-3.93-113.46a4.75 4.75 0 0 0-9.5 0l-3.49 113.45l3.49 54.17a4.81 4.81 0 0 0 4.75 4.73m85.4.25a6.6 6.6 0 0 0 6.5-6.52l2.74-52.6l-2.74-131a6.5 6.5 0 1 0-13 0l-2.45 131c0 .08 2.45 52.67 2.45 52.67a6.59 6.59 0 0 0 6.5 6.45m-43.02-.2a5.67 5.67 0 0 0 5.62-5.64l3.34-53.33l-3.34-114.28a5.63 5.63 0 1 0-11.25 0l-3 114.29l3 53.32a5.66 5.66 0 0 0 5.63 5.6Zm-104.7-.5a3.53 3.53 0 0 0 3.44-3.41l4.83-55.09l-4.83-52.4a3.44 3.44 0 0 0-6.88 0l-4.26 52.38l4.26 55.08a3.5 3.5 0 0 0 3.44 3.44m-40.72-3.02a2.67 2.67 0 0 0 2.57-2.52l5.43-53l-5.42-55a2.57 2.57 0 0 0-5.14 0l-4.78 55l4.78 53a2.62 2.62 0 0 0 2.56 2.53Zm166.85-171.6a6.1 6.1 0 0 0-6.07 6.09l-2.71 110.11l2.71 53a6.07 6.07 0 0 0 12.13 0l3-53l-3-110.13a6.1 6.1 0 0 0-6.06-6.07M127 367.71a4.41 4.41 0 0 0 4.31-4.3l4.23-54.71l-4.28-104.7a4.32 4.32 0 0 0-8.63 0l-3.74 104.7l3.75 54.73a4.38 4.38 0 0 0 4.36 4.28m47.17-5.17l3.63-53.8l-3.63-117.28a5.19 5.19 0 1 0-10.37 0l-3.23 117.28l3.23 53.83a5.18 5.18 0 0 0 10.36 0ZM449 241.1a62.4 62.4 0 0 0-24.33 4.9c-5-57.18-52.61-102-110.66-102a111.9 111.9 0 0 0-40.28 7.58c-4.75 1.85-6 3.76-6.06 7.46V360.4a7.66 7.66 0 0 0 6.8 7.5l174.56.11c34.78 0 63-28.41 63-63.45s-28.2-63.46-63-63.46Zm-194.21-82.23a7 7 0 0 0-6.94 7L245 308.75l2.85 51.87a6.94 6.94 0 1 0 13.87-.06v.06l3.09-51.87l-3.09-142.93a7 7 0 0 0-6.93-6.95"></svg:path>`,
})
export class IonLogoSoundcloudIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoStackoverflowIcon],svg[ion-logo-stackoverflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M392 440V320h40v160H64V320h40v120Z"></svg:path><svg:path fill="currentColor" d="m149.1 308.77l198.57 40.87l8.4-39.32l-198.57-40.87Zm26.27-93.12L359.22 300L376 263.76l-183.82-84.84Zm50.95-89l156 127.78l25.74-30.52l-156-127.78ZM328 32l-33.39 23.8l120.82 160.37L448 192ZM144 400h204v-40H144Z"></svg:path>`,
})
export class IonLogoStackoverflowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoSteamIcon],svg[ion-logo-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M478.8 208.2a36 36 0 1 1-36-36a36 36 0 0 1 36 36M442.6 139a69.42 69.42 0 0 0-69.4 68.7l-43.2 62a49 49 0 0 0-5.4-.3a51.27 51.27 0 0 0-26.4 7.3L102.4 198a51.8 51.8 0 1 0-50.6 62.9a51.27 51.27 0 0 0 26.4-7.3L274 332.2a51.76 51.76 0 0 0 102.1-5.9l66.5-48.6a69.35 69.35 0 1 0 0-138.7m0 22.9a46.45 46.45 0 1 1-46.5 46.5a46.54 46.54 0 0 1 46.5-46.5m-390.8 9a38.18 38.18 0 0 1 33.7 20.2l-18.9-7.6v.1a30.21 30.21 0 0 0-22.6 56v.1l16.1 6.4a36.8 36.8 0 0 1-8.2.9a38.05 38.05 0 0 1-.1-76.1m272.8 112.2a38.1 38.1 0 1 1-33.7 55.9c6.3 2.5 12.5 5 18.8 7.6a30.27 30.27 0 1 0 22.5-56.2l-15.9-6.4a47 47 0 0 1 8.3-.9"></svg:path>`,
})
export class IonLogoSteamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoStencilIcon],svg[ion-logo-stencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.8 334.07h197.33L279.47 448H83.2ZM512 199H106.61L0 313h405.39ZM232.2 64h196.6L322.62 177.93H125.87Z"></svg:path>`,
})
export class IonLogoStencilIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoTableauIcon],svg[ion-logo-tableau-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M242.69 340.3h26.62v-72.6h67v-25.82h-67v-72.6h-26.62v72.6h-66.15v25.82h66.15ZM119.26 445.18h22.59v-64.54h59.7v-20.17h-59.7v-65.34h-22.59v65.34h-59.7v20.17h59.7ZM370.15 212h22.59v-64.5h60.5v-19.37h-60.5V62.79h-22.59v65.34h-59.7v19.37h59.7ZM246.72 496h19.36v-46h41.15v-16.92h-41.15v-46h-19.36v46h-40.33V450h40.33ZM120.07 212h21v-65.31h60.51v-18.56H141V62.79h-21v65.34H59.56v18.56h60.51Zm315.65 96.84h19.36v-45.18H496v-17.74h-40.92v-45.18h-19.36v45.18h-40.33v17.74h40.33Z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M370.15 445.18h22.59v-64.54h60.5v-20.17h-60.5v-65.34h-22.59v65.34h-59.7v20.17h59.7Z"></svg:path><svg:path fill="currentColor" d="M307 74.08V60.37h-40.34V16h-14.52v44.37h-40.33v13.71h40.33v44.37h14.52V74.08ZM56.11 305.61h14.52v-44.37H111v-13.71H70.63V204H56.11v43.56H16v14.52l40.11-.08Z"></svg:path>`,
})
export class IonLogoTableauIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoThreadsIcon],svg[ion-logo-threads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363.2 239.6c-1.9-.9-3.9-1.8-5.9-2.7c-3.5-63.7-38.3-100.2-96.7-100.6h-.8c-35 0-64 14.9-81.9 42.1l32.2 22.1c13.4-20.3 34.4-24.6 49.8-24.6h.5c19.2.1 33.8 5.7 43.2 16.6c6.8 7.9 11.4 18.9 13.7 32.8c-17.1-2.9-35.5-3.8-55.3-2.7c-55.6 3.2-91.3 35.6-88.9 80.7c1.2 22.8 12.6 42.5 32 55.3c16.4 10.9 37.6 16.2 59.6 15c29.1-1.6 51.9-12.7 67.8-33c12.1-15.4 19.7-35.4 23.1-60.5c13.9 8.4 24.1 19.4 29.8 32.6c9.6 22.5 10.2 59.4-19.9 89.5c-26.4 26.4-58.2 37.8-106.1 38.2c-53.2-.4-93.5-17.5-119.6-50.7c-24.5-31.2-37.2-76.1-37.6-133.7c.5-57.6 13.1-102.6 37.6-133.7C166 89 206.2 72 259.4 71.6c53.6.4 94.6 17.5 121.7 51c13.3 16.4 23.4 37 30 61l37.7-10.1c-8-29.6-20.7-55.1-37.8-76.2c-34.8-42.9-85.8-64.8-151.4-65.3h-.3c-65.5.5-115.9 22.5-149.7 65.5c-30.1 38.3-45.6 91.6-46.2 158.3v.4c.5 66.8 16.1 120 46.2 158.3c33.8 43 84.2 65.1 149.7 65.5h.3c58.2-.4 99.3-15.7 133.1-49.4C436.9 386.4 435.6 331 421 297c-10.5-24.4-30.4-44.2-57.7-57.3Zm-100.6 94.6c-24.4 1.4-49.7-9.6-50.9-33c-.9-17.4 12.4-36.7 52.4-39c4.6-.3 9.1-.4 13.5-.4c14.5 0 28.2 1.4 40.5 4.1c-4.6 57.6-31.7 67-55.5 68.3"></svg:path>`,
})
export class IonLogoThreadsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoTiktokIcon],svg[ion-logo-tiktok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M412.19 118.66a109 109 0 0 1-9.45-5.5a133 133 0 0 1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69c0 .52-.05 1-.08 1.56c0 .23 0 .47-.05.71v.18a70 70 0 0 1-35.22 55.56a68.8 68.8 0 0 1-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0 1 21.41 3.39l.1-83.94a153.14 153.14 0 0 0-118 34.52a161.8 161.8 0 0 0-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24c-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.5 167.5 0 0 0 115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34c7.66-.31 33.32 0 62.46-13.81c32.32-15.31 50.72-38.12 50.72-38.12a158.5 158.5 0 0 0 27.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61"></svg:path>`,
})
export class IonLogoTiktokIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoTrapezeIcon],svg[ion-logo-trapeze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m311.05 189.26l.055-.093l64.98-110.618L257.923 8l-64.98 110.617l-.096.164L8 433.451L126.162 504l85.948-146.312c14.612 17.618 32.393 33.074 53.108 45.442l168.804 100.785L504 384.789L335.197 284.004c-32.599-19.463-43.396-61.862-24.147-94.744"></svg:path>`,
})
export class IonLogoTrapezeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoTumblrIcon],svg[ion-logo-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M390 32H120c-49.19 0-88 38.81-88 88v270c0 49.19 38.81 90 88 90h270c49.19 0 90-40.81 90-90V120c0-49.19-40.81-88-90-88m-54 364h-52c-42.51 0-72-23.68-72-76v-80h-36v-48c42.51-11 57.95-48.32 60-80h44v72h52v56h-52l-.39 70.51c0 21.87 11 29.43 28.62 29.43L336 340Z"></svg:path>`,
})
export class IonLogoTumblrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoTuxIcon],svg[ion-logo-tux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M443.66 405.05c-1.46-.79-2.85-1.54-4-2.2c-6.47-3.83-13-10.52-11.85-17.83c2.42-15.94 2.89-23.47-.49-28.79a15.6 15.6 0 0 0-7.67-6.2v-.06c1.41-2.56 2.26-5.66 2.83-10.12c1.44-11-5-44-13.7-70.7c-8.08-24.68-29.24-50-44.7-68.56l-3.61-4.34c-23.88-28.93-24.34-38.19-26.55-82.67c-.32-6.47-.69-13.8-1.17-22C329.87 41.43 304 16 256 16c-25.2 0-44.62 7.15-57.72 21.26C187.79 48.55 182 64 182 80.78c0 29.52 2 53 2.15 54.29c1.4 35.7 1 41.22-8.31 57.55c-2.23 3.93-8.38 10.87-14.89 18.21c-8.48 9.57-18.09 20.41-23.36 29.22c-3.77 6.31-5.88 12.63-8.11 19.33c-3.4 10.21-7.26 21.78-18.15 36.57c-12.57 17.07-15.52 29.61-11 47.45c-4.94 6.45-4.83 14.37-4.75 20.23a25.8 25.8 0 0 1-.3 6.09c-2.29 7.59-12.42 9.4-22 10.18c-1.58.12-3.1.21-4.55.29c-7.26.39-13.53.74-17.13 6.3c-3.47 5.36-1.12 13.8 2.14 25.48c.72 2.58 1.46 5.25 2.19 8.06c1.83 7-.16 10.48-2.68 14.84c-2.44 4.21-5.21 9-5.21 17.55c0 14.67 20 18 43.05 21.94c7.36 1.24 15 2.53 22.63 4.24a225.6 225.6 0 0 1 34.08 10.68c9.72 3.73 17.4 6.68 26.43 6.68c16.18 0 28.25-9.77 39.92-19.21l2.15-1.75c5.53-4.49 21.5-4 34.34-3.64c3.46.1 6.73.2 9.65.2h6.22c13.48-.08 31.94-.18 42.23 2.5c3.75 1 6.2 3.72 9.29 7.19c5.87 6.56 13.17 14.75 33.39 14.75c19.39 0 29.55-8.71 41.32-18.8c7.16-6.13 14.56-12.48 25.07-17.86c3.92-2 7.62-3.87 11.08-5.61c22.64-11.38 35.11-17.65 35.11-27.82c0-9.91-12.24-16.5-20.34-20.86M211.11 88.38a13.91 13.91 0 0 1 12.47 9c1.95 5.55 1.81 10.42.21 12.94c0 0-.22-1-.36-1.44a14.85 14.85 0 0 0-6.44-8.59a11.35 11.35 0 0 0-8.94-1.47c-4.26 1.13-8.41 5-8.91 18.79c-5.16-10.47-2.31-18 .92-23c2.31-3.73 7.47-6.33 11.05-6.23m-17.5 375C192 479.24 175.2 479 170.09 478.59c-9.81-.82-21.66-4.69-33.13-8.43c-4.52-1.47-9.19-3-13.73-4.34c-13.2-3.89-30.12-6.74-43.72-9c-3.22-.55-6.27-1.06-9.05-1.55s-4.61-1.27-5.2-2.3c-1-1.65.38-5.25 1.93-9.41C69.27 438 72.11 430.34 72 421c0-3.91-1.47-8.3-2.84-12.56c-1.62-5-3.28-10.17-1.93-12.62c1.23-2.23 6.75-2.49 11.6-2.49h2.26c3.55 0 6.62.06 8.75-.53c6.51-1.81 14.86-6.92 17.81-13.88c.9-2.17 1.37-6.94 2-14c.37-4.12.74-8.37 1.22-10.58a3.55 3.55 0 0 1 2.11-2.55c1.65-.77 6.78-1.91 18.63 4.08c11.18 5.65 22.88 25.84 34.2 45.37c3.56 6.14 6.92 11.94 10.3 17.36c14.04 22.54 18.83 31.6 17.5 44.8Zm128.84-31.56a69 69 0 0 1-4.55 10.9a.58.58 0 0 1-1.08-.42a56.6 56.6 0 0 0 2.11-18.43c-.25-4.73-.4-7.59-2.66-8.51s-4.26.83-9.45 5.54c-1.1 1-2.36 2.14-3.78 3.4c-10.8 9.47-26.88 20.68-55.61 23.37c-16.84 1.59-27.59-4.63-30.92-8.14a2.16 2.16 0 0 0-3.07-.08a2.23 2.23 0 0 0-.51 2.29c2.12 6.84 1.2 12.26-.49 16.19c-.95 2.2-1.85 2.05-2-.34c-.25-4.64-1-9.88-3-14.19c-3.11-6.94-7-14.34-8.89-17.88v-.05c3.24-1.49 8.86-4.83 11.37-10.88s4.48-18-9.82-31.74c-6.28-6.05-22.1-17.16-36.06-27c-10.9-7.65-22.17-15.56-23.65-17.51c-4.49-5.89-6.37-9.3-6.94-19.65c.07-2.3.13-4.59.19-6.89l.27-2.49a.58.58 0 0 1 1.15 0a63 63 0 0 0 2 9.72c1.08 3.73 2.4 7.58 3.62 9.18c3.19 4.22 7.56 7.39 11.67 8.49a5.48 5.48 0 0 0 5-.72c2.93-2.33 2.65-7.6 2.19-16.34c-.47-9-1.11-21.34 1.85-34.55c5.62-25 10.91-32.51 17.61-42c.86-1.22 1.75-2.47 2.65-3.79c1.44-2.08 3-4.1 4.67-6.23c7.47-9.61 15.93-20.49 13.92-40.95c-.51-5.19-.76-8.83-.86-11.39a1 1 0 0 1 1.88-.59l.49.77l1.21 2c4.86 8 13.64 22.57 25.1 22.57a13.6 13.6 0 0 0 2.36-.21c23.39-3.93 51.9-30.25 52.17-30.51c3.12-3 2.84-6.14 1.64-7.91a5.18 5.18 0 0 0-6.45-1.72c-3.29 1.4-7.14 3.15-11.22 5c-13.82 6.27-37 16.75-42.25 14.34a23.1 23.1 0 0 1-6.32-5.13a1 1 0 0 1 1.14-1.65c5.59 2.29 9.55 1.45 14.2-.08l1-.34c9.37-3.09 14.2-4.77 30.76-12.08a97.6 97.6 0 0 1 16.26-5.93c4-1 6.42-1.63 7.71-4.34a6.65 6.65 0 0 0-.5-7.13c-1.53-1.87-4.07-2.57-7-1.9c-3.22.75-4.7 3-6.41 4.49c-2.4 2.05-5 4.16-17.19 8.65c-27 10-34.58 10.61-45.21 3.43c-9.84-6.69-15.15-13.23-15.15-16c0-2.13 5.45-5.7 8.71-7.84c1.33-.87 2.59-1.69 3.62-2.46c4.34-3.22 13-11.39 13.38-11.73c5.4-5.41 17.91-2.18 25 2.58a2.23 2.23 0 0 0 1.72.41a2.14 2.14 0 0 0 1.68-2.58c-4.2-17.46-.13-27.34 4-32.55a22.58 22.58 0 0 1 17.48-8.48c12.81 0 21.76 10 21.76 24.42c0 11-2.82 16.79-5.48 20.3a1.73 1.73 0 0 1-2.58.18a1.78 1.78 0 0 1-.24-2.2A24.6 24.6 0 0 0 290 114a16.58 16.58 0 0 0-16.84-16.67c-3.94 0-13.48 1.5-16.77 15.44a29.8 29.8 0 0 0-.34 11.07l.08.71c.9 7.38 15.3 12.51 27.23 15.51c11.36 2.85 13 6.22 8.84 19.63s3.11 26.23 5.7 29.57a78.3 78.3 0 0 1 8.31 12.47a94 94 0 0 1 6.62 16.48c2.17 6.79 4.05 12.65 10.63 21.22c11.07 14.4 17.66 48.64 15 78c-.21 2.41-.53 4.29-.77 5.67c-.43 2.53-.72 4.2.66 5.38s3.16.7 7.26-.63l3.43-1.09a109 109 0 0 1 12.58-2.8a2.15 2.15 0 0 0 1.59-1.16c3.43-6.91 3.85-15.22 4-22.47q0-1.31.06-2.79c.19-7.77.45-18.93-2.95-32a1 1 0 0 1 1.93-.64a93 93 0 0 1 6.66 25.55c2.55 22.58-1.9 32.09-1.94 32.17a1.61 1.61 0 0 0 .95 2.25a17.1 17.1 0 0 1 6.95 4.67c1.46 1.66.93 2.4-1.14 1.62a36.3 36.3 0 0 0-12.77-2.29c-10.4 0-18.09 4.95-21.51 9.19c-3.19 3.94-3.7 7.67-3.83 11.27l-.06.05c-7.48-.75-12.94 1.21-17.47 6.21l-.08.09c-6.26 7.75-4 24.63-1.29 38.48c1.28 6.45 5.59 25.52 1.73 37.68Zm96.1 10.07c-15.71 6.71-25.43 14.51-34 21.39c-5.65 4.53-11 8.81-17.28 12.14c-10.12 5.34-24.91 6.53-33.27-7.7c-2.37-4-.71-9.86 1.58-17.95c3.05-10.75 7.23-25.46 3.71-44.65c-.94-5.12-1.77-9.51-2.49-13.31C334 377 332.9 371.43 334 367c.63-2.45 3.43-3 5.87-3a21 21 0 0 1 2.63.19a29.5 29.5 0 0 0 7 12.1c5.7 5.86 13.63 8.83 23.56 8.85c2.1.17 25.94 1.55 36.54-22.4c1.46.18 3.65.7 4.3 2.3c1.28 3.19-.27 8.91-1.52 13.5c-.9 3.31-1.68 6.16-1.63 8.37c.31 16 11 22.78 25.83 32.16c1.79 1.13 3.66 2.31 5.55 3.54S445 425 445 426c-.52 4.79-20 13.16-26.45 15.91Z"></svg:path>`,
})
export class IonLogoTuxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoTwitchIcon],svg[ion-logo-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m80 32l-32 80v304h96v64h64l64-64h80l112-112V32Zm336 256l-64 64h-96l-64 64v-64h-80V80h304Z"></svg:path><svg:path fill="currentColor" d="M320 143h48v129h-48zm-112 0h48v129h-48z"></svg:path>`,
})
export class IonLogoTwitchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoTwitterIcon],svg[ion-logo-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3a97.5 97.5 0 0 0 43.33-53.6a197.7 197.7 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.2 93.2 0 0 0 2.54 22.1a280.7 280.7 0 0 1-203-101.3A95.7 95.7 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.8 100.8 0 0 1-25.94 3.4a94.4 94.4 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.6 199.6 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.7 278.7 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8c0-4.2-.11-8.4-.31-12.5A198.5 198.5 0 0 0 496 109.5"></svg:path>`,
})
export class IonLogoTwitterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoUsdIcon],svg[ion-logo-usd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 480v-36.42C160.53 439 112.25 398.06 112 336h72c1.77 26.34 23.86 46.45 56 50v-98l-26.77-7c-61-14.18-93.64-49.39-93.64-102.08C119.59 116.81 164.08 76.08 240 70V32h32v38c77.39 6.3 119 47.74 120 106h-72c-.76-24.06-15.83-43.39-48-46v92l30.82 7.28C367.61 243.46 400 277 400 332c0 64.34-43.74 105.88-128 111.32V480Zm0-264v-86c-27.59 1.52-47.27 18.47-47.27 42.53c0 22.3 16.39 36.88 47.27 43.47m32 78v92c38.15-1.54 56.38-18.92 56.38-45.77c0-24.58-18.23-41.13-56.38-46.23"></svg:path>`,
})
export class IonLogoUsdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoVenmoIcon],svg[ion-logo-venmo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89V441.6c0 20.31 17.85 38.4 38.28 38.4h373.78c20.54 0 35.94-18.2 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32M278 387H174.32l-41.57-248.56l90.75-8.62l22 176.87c20.53-33.45 45.88-86 45.88-121.87c0-19.62-3.36-33-8.61-44l82.63-16.72c9.56 15.78 13.86 32 13.86 52.57c-.01 65.5-55.92 150.59-101.26 210.33"></svg:path>`,
})
export class IonLogoVenmoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoVercelIcon],svg[ion-logo-vercel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 48l240 416H16Z"></svg:path>`,
})
export class IonLogoVercelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoVimeoIcon],svg[ion-logo-vimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M476.9 114c-5-23.39-17.51-38.78-40.61-46.27s-64.92-4.5-94.12 16.79c-26.79 19.51-46.26 54.42-54 78.28a4 4 0 0 0 5.13 5c10.77-3.8 21.72-7.1 34-6.45c15 .8 24.51 12 24.91 25.29c.3 9.79-.2 18.69-3.6 27.68c-10.74 28.68-27.61 56.46-47.55 80.75a72.5 72.5 0 0 1-10 9.89c-10.21 8.29-18.81 6.1-25.41-5.2c-5.4-9.29-9-18.88-12.2-29.08c-12.4-39.67-16.81-80.84-23.81-121.52c-3.3-19.48-7-39.77-18-56.86c-11.6-17.79-28.61-24.58-50-22c-14.7 1.8-36.91 17.49-47.81 26.39c0 0-56 46.87-81.82 71.35l21.2 27s17.91-12.49 27.51-18.29c5.7-3.39 12.4-4.09 17.2.2c4.51 3.9 9.61 9 12.31 14.1c5.7 10.69 11.2 21.88 14.7 33.37c13.2 44.27 25.51 88.64 37.81 133.22c6.3 22.78 13.9 44.17 28 63.55c19.31 26.59 39.61 32.68 70.92 21.49c25.41-9.09 46.61-26.18 66-43.87c33.11-30.18 59.12-65.36 85.52-101.14c20.41-27.67 37.31-55.67 51.41-86.95C478.5 179.74 484 147.26 476.9 114"></svg:path>`,
})
export class IonLogoVimeoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoVkIcon],svg[ion-logo-vk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M484.7 132c3.56-11.28 0-19.48-15.75-19.48h-52.37c-13.21 0-19.31 7.18-22.87 14.86c0 0-26.94 65.6-64.56 108.13c-12.2 12.3-17.79 16.4-24.4 16.4c-3.56 0-8.14-4.1-8.14-15.37V131.47c0-13.32-4.06-19.47-15.25-19.47H199c-8.14 0-13.22 6.15-13.22 12.3c0 12.81 18.81 15.89 20.84 51.76V254c0 16.91-3 20-9.66 20c-17.79 0-61-66.11-86.92-141.44C105 117.64 99.88 112 86.66 112H33.79C18.54 112 16 119.17 16 126.86c0 13.84 17.79 83.53 82.86 175.77c43.21 63 104.72 96.86 160.13 96.86c33.56 0 37.62-7.69 37.62-20.5v-47.66c0-15.37 3.05-17.93 13.73-17.93c7.62 0 21.35 4.09 52.36 34.33C398.28 383.6 404.38 400 424.21 400h52.36c15.25 0 22.37-7.69 18.3-22.55c-4.57-14.86-21.86-36.38-44.23-62c-12.2-14.34-30.5-30.23-36.09-37.92c-7.62-10.25-5.59-14.35 0-23.57c-.51 0 63.55-91.22 70.15-122"></svg:path>`,
})
export class IonLogoVkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoVueIcon],svg[ion-logo-vue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 144.03l-55.49-96.11h-79.43L256 281.61L390.92 47.92h-79.43z"></svg:path><svg:path fill="currentColor" d="M409.4 47.92L256 313.61L102.6 47.92H15.74L256 464.08L496.26 47.92z"></svg:path>`,
})
export class IonLogoVueIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoWebComponentIcon],svg[ion-logo-web-component-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m179.9 388l-76.16-132zm0 0h152.21l76.15-132l-76.15-132H179.9l-76.16 132zm-76.16-132l76.16-132z"></svg:path><svg:path fill="currentColor" d="M496 256L376 48H239.74l-43.84 76h136.21l76.15 132l-76.15 132H195.9l43.84 76H376z"></svg:path><svg:path fill="currentColor" d="m179.9 388l-76.16-132l76.16-132l43.84-76H136L16 256l120 208h87.74z"></svg:path>`,
})
export class IonLogoWebComponentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoWechatIcon],svg[ion-logo-wechat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408.67 298.53a21 21 0 1 1 20.9-21a20.85 20.85 0 0 1-20.9 21m-102.17 0a21 21 0 1 1 20.9-21a20.84 20.84 0 0 1-20.9 21m152.09 118.86C491.1 394.08 512 359.13 512 319.51c0-71.08-68.5-129.35-154.41-129.35s-154.42 58.27-154.42 129.35s68.5 129.34 154.42 129.34c17.41 0 34.83-2.33 49.92-7c2.49-.86 3.48-1.17 4.64-1.17a16.67 16.67 0 0 1 8.13 2.34L454 462.83a11.6 11.6 0 0 0 3.48 1.17a5 5 0 0 0 4.65-4.66a14.3 14.3 0 0 0-.77-3.86c-.41-1.46-5-16-7.36-25.27a19 19 0 0 1-.33-3.47a11.4 11.4 0 0 1 5-9.35"></svg:path><svg:path fill="currentColor" d="M246.13 178.51a24.47 24.47 0 0 1 0-48.94c12.77 0 24.38 11.65 24.38 24.47c1.16 12.82-10.45 24.47-24.38 24.47m-123.06 0A24.47 24.47 0 1 1 147.45 154a24.57 24.57 0 0 1-24.38 24.47M184.6 48C82.43 48 0 116.75 0 203c0 46.61 24.38 88.56 63.85 116.53C67.34 321.84 68 327 68 329a11.4 11.4 0 0 1-.66 4.49C63.85 345.14 59.4 364 59.21 365s-1.16 3.5-1.16 4.66a5.49 5.49 0 0 0 5.8 5.83a7.15 7.15 0 0 0 3.49-1.17L108 351c3.49-2.33 5.81-2.33 9.29-2.33a16.3 16.3 0 0 1 5.81 1.16c18.57 5.83 39.47 8.16 60.37 8.16h10.45a133.2 133.2 0 0 1-5.81-38.45c0-78.08 75.47-141 168.35-141h10.45C354.1 105.1 277.48 48 184.6 48"></svg:path>`,
})
export class IonLogoWechatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoWhatsappIcon],svg[ion-logo-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.6 220.6 0 0 0 29.78 111L32 480l118.25-30.87a223.6 223.6 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1M256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4l-70.17 18.32l18.73-68.09l-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52m101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78s-14.4 18-17.65 21.75s-6.5 4.16-12.07 1.38s-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26s.93-6.94-.46-9.71s-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52c-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38s39.3 59.73 95.21 83.76a323 323 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2c10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37s-5.11-3.71-10.69-6.48"></svg:path>`,
})
export class IonLogoWhatsappIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoWindowsIcon],svg[ion-logo-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 265H232v179l248 36zm-264 0H32v150l184 26.7zM480 32L232 67.4V249h248zM216 69.7L32 96v153h184z"></svg:path>`,
})
export class IonLogoWindowsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoWordpressIcon],svg[ion-logo-wordpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M259 271.3L226.2 367h-.1l-25.4 73.1c1.8.5 3.5.9 5.3 1.4h.3a192.5 192.5 0 0 0 49.5 6.5a157 157 0 0 0 24.9-1.8a184.3 184.3 0 0 0 32.5-7.1c2.6-.8 5.2-1.7 7.8-2.6c-2.8-6-8.8-19.3-9.1-19.9ZM80.8 180.5C70.8 203.1 64 230.9 64 256c0 6.3.3 12.6.9 18.8c6.9 71.2 52.9 131 116.1 157.9c2.6 1.1 5.3 2.2 8 3.2L96 180.6c-8-.3-9.5.2-15.2-.1"></svg:path><svg:path fill="currentColor" d="M430.2 175.4a188 188 0 0 0-15.1-26.6c-1.6-2.4-3.4-4.8-5.1-7.2A193 193 0 0 0 325.1 77a189.2 189.2 0 0 0-69.2-13a191.51 191.51 0 0 0-149.4 71.7A196 196 0 0 0 89 161.3c14.2.1 31.8.1 33.8.1c18.1 0 46-2.2 46-2.2c9.4-.6 10.4 13.1 1.1 14.2c0 0-9.4 1.1-19.8 1.6L213 362l37.8-113.3l-26.8-73.6c-9.4-.5-18.1-1.6-18.1-1.6c-9.4-.5-8.2-14.8 1-14.2c0 0 28.5 2.2 45.5 2.2c18.1 0 46-2.2 46-2.2c9.3-.6 10.5 13.1 1.1 14.2c0 0-9.3 1.1-19.7 1.6l62.3 185.6l17.3-57.6c8.7-22.4 13.1-40.9 13.1-55.7c0-21.3-7.7-36.1-14.3-47.6c-8.7-14.3-16.9-26.3-16.9-40.4c0-15.9 12-30.7 29-30.7h2.2c26.2-.7 34.8 25.3 35.9 43v.6c.4 7.2.1 12.5.1 18.8c0 17.4-3.3 37.1-13.1 61.8l-39 112.8l-22.3 65.7c1.8-.8 3.5-1.6 5.3-2.5c56.7-27.4 98-82 106.7-146.7a172 172 0 0 0 1.9-26a191.1 191.1 0 0 0-17.8-80.8"></svg:path><svg:path fill="currentColor" d="M256 48a208.06 208.06 0 0 1 81 399.66A208.06 208.06 0 0 1 175 64.34A206.7 206.7 0 0 1 256 48m0-16C132.29 32 32 132.29 32 256s100.29 224 224 224s224-100.29 224-224S379.71 32 256 32"></svg:path>`,
})
export class IonLogoWordpressIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoXIcon],svg[ion-logo-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.333 6.929L14.546 1H13.31L8.783 6.147L5.169 1H1l5.466 7.783L1 15h1.235l4.779-5.436L10.83 15H15zM7.641 8.852l-.554-.776L2.68 1.911h1.898l3.557 4.977l.552.776l4.623 6.47h-1.897z"></svg:path>`,
})
export class IonLogoXIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoXboxIcon],svg[ion-logo-xbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126.8 248.3c39.7-58.6 77.9-92.8 77.9-92.8s-42.1-48.9-92.8-67.4l-3.3-.8A224.13 224.13 0 0 0 77.2 391c0-4.4.6-70.3 49.6-142.7M480 256a223.7 223.7 0 0 0-76.6-168.7l-3.2.9c-50.7 18.5-92.9 67.4-92.9 67.4s38.2 34.2 77.9 92.8c49 72.4 49.6 138.3 49.5 142.7A222.8 222.8 0 0 0 480 256M201.2 80.9c29.3 13.1 54.6 34.6 54.6 34.6s25.5-21.4 54.8-34.6c36.8-16.5 64.9-11.3 72.3-9.5a224.06 224.06 0 0 0-253.8 0c7.2-1.8 35.2-7.1 72.1 9.5m157.5 212C312.4 236 255.8 199 255.8 199s-56.3 37-102.7 93.9c-39.8 48.9-54.6 84.8-62.6 107.8l-1.3 4.8a224 224 0 0 0 333.6 0l-1.4-4.8c-8-23-22.9-58.9-62.7-107.8"></svg:path>`,
})
export class IonLogoXboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoXingIcon],svg[ion-logo-xing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M313.8 303.9L469 32H365L209.4 303.8a1.35 1.35 0 0 0 0 1.7l98.9 173.8c.4.7.8.7 1.6.7H413l-99.3-174.7a1.74 1.74 0 0 1 .1-1.4m-91.9-87.7L163 113a2 2 0 0 0-2-1H65l58.9 104.4a1.13 1.13 0 0 1 .1.8L43 352h96.8a1.54 1.54 0 0 0 1.6-.9l80.5-133.7a2.44 2.44 0 0 0 0-1.2"></svg:path>`,
})
export class IonLogoXingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoYahooIcon],svg[ion-logo-yahoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 139.009h97.648l56.86 145.729l57.6-145.729h95.066L164.022 484H68.337l39.189-91.417L.003 139.009zM417.5 256H311l94.907-228L512 28.005zm-78.208 21.221c32.672 0 59.156 26.533 59.156 59.258c0 32.727-26.484 59.26-59.156 59.26c-32.667 0-59.146-26.533-59.146-59.26c0-32.725 26.483-59.258 59.146-59.258"></svg:path>`,
})
export class IonLogoYahooIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoYenIcon],svg[ion-logo-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 32h-80L256 253.13L144 32H64l112.37 208H128v48h73.56L216 319v17h-88v48h88v96h80v-96h88v-48h-88v-17l14.89-31H384v-48h-48.29Z"></svg:path>`,
})
export class IonLogoYenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLogoYoutubeIcon],svg[ion-logo-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5c58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5c2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9M207 353.89v-196.5l145 98.2Z"></svg:path>`,
})
export class IonLogoYoutubeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionLoopIcon],svg[ion-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M273.4 300.5l-.3 58c48.9-8.2 86.3-51 86.3-102.5 0-15.9-3.6-31-10-44.5-2.8-5.8-6-11.3-9.8-16.5l47.1-43.5c1.1 1.3 2.1 2.7 3.1 4 20.9 28 33.2 62.8 33.2 100.5v3.7c-1.5 71.5-47.6 132-111.4 154.6-12.3 4.3-25.2 7.3-38.5 8.7l-.1 57-76.2-67-26.2-23 44.4-38.7 58.4-50.8z" fill="currentColor"></svg:path><svg:path d="M89 252.3c1.6-72.1 48.3-133 112.9-155.2 11.7-4 24-6.8 36.8-8.1l.1-57 76.1 66.9 26.2 23.1-44.3 38.6-58.4 50.9.2-57.9c-48.8 8.3-86 51.1-86 102.4 0 16 3.6 31.1 10.1 44.7 2.7 5.8 6 11.2 9.7 16.3l-47 43.6c-1.3-1.6-2.6-3.3-3.8-5C101.1 327.7 89 293.3 89 256v-3.7z" fill="currentColor"></svg:path>`,
})
export class IonLoopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMagnetIcon],svg[ion-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M191.98 463.79v-48m-101.82 5.82l33.94-33.94m-76.12-67.88h48"></svg:path><svg:path fill="currentColor" d="m267.56 312.32l-31.11 31.11a16 16 0 0 0 0 22.63l45.26 45.25a16 16 0 0 0 22.62 0l31.12-31.11a4 4 0 0 0 0-5.66l-62.23-62.22a4 4 0 0 0-5.66 0M131.8 176.55l-31.11 31.12a16 16 0 0 0 0 22.62l45.25 45.26a16 16 0 0 0 22.63 0l31.11-31.11a4 4 0 0 0 0-5.66l-62.22-62.23a4 4 0 0 0-5.66 0m297.05-93.27a144 144 0 0 0-203.71-.06l-65.06 65.05a4 4 0 0 0 0 5.66l62.23 62.22a4 4 0 0 0 5.66 0l65-65.05a48 48 0 0 1 68.46.59c18.3 18.92 17.47 49.24-1.14 67.85L295.85 284a4 4 0 0 0 0 5.66l62.22 62.23a4 4 0 0 0 5.66 0l64.08-64.08c56.37-56.34 57.37-148.13 1.04-204.53"></svg:path>`,
})
export class IonMagnetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMagnetOutlineIcon],svg[ion-magnet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M421.83 293.82A144 144 0 0 0 218.18 90.17"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M353.94 225.94a48 48 0 0 0-67.88-67.88"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M192 464v-48m-101.82 5.82l33.94-33.94M48 320h48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M286.06 158.06L172.92 271.19a32 32 0 0 1-45.25 0L105 248.57a32 32 0 0 1 0-45.26L218.18 90.17m203.65 203.65L308.69 407a32 32 0 0 1-45.26 0l-22.62-22.63a32 32 0 0 1 0-45.26l113.13-113.17M139.6 169.98l67.88 67.89m67.88 67.88l67.89 67.88"></svg:path>`,
})
export class IonMagnetOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMagnetSharpIcon],svg[ion-magnet-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M191.98 463.58v-48M90.16 421.4l33.94-33.94m-76.12-67.88h48"></svg:path><svg:path fill="currentColor" d="M422.2 89.82a144 144 0 0 0-203.71-.07l-67.88 67.88l67.88 67.89l67.88-67.89a48 48 0 0 1 68.46.59c18.3 18.92 17.48 49.24-1.14 67.86l-67.32 67.32l67.88 67.88l66.91-66.91c56.37-56.37 57.37-148.15 1.04-204.55M82.719 225.517l45.254-45.254l67.883 67.882L150.6 293.4zM218.49 361.27l45.254-45.254l67.882 67.882l-45.255 45.255z"></svg:path>`,
})
export class IonMagnetSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMailIcon],svg[ion-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56m-14.18 92.63l-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26"></svg:path>`,
})
export class IonMailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMailOpenIcon],svg[ion-mail-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448.67 154.45L274.1 68.2a41.1 41.1 0 0 0-36.2 0L63.33 154.45A55.6 55.6 0 0 0 32 204.53v184.61c0 30.88 25.42 56 56.67 56h334.66c31.25 0 56.67-25.12 56.67-56V204.53a55.6 55.6 0 0 0-31.33-50.08M252.38 96.82a8.22 8.22 0 0 1 7.24 0L429 180.48l-172 85a8.22 8.22 0 0 1-7.24 0L80.35 181.81Z"></svg:path>`,
})
export class IonMailOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMailOpenOutlineIcon],svg[ion-mail-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M441.6 171.61L266.87 85.37a24.57 24.57 0 0 0-21.74 0L70.4 171.61A40 40 0 0 0 48 207.39V392c0 22.09 18.14 40 40.52 40h335c22.38 0 40.52-17.91 40.52-40V207.39a40 40 0 0 0-22.44-35.78"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M397.33 368L268.07 267.46a24 24 0 0 0-29.47 0L109.33 368m200-73l136-103m-384 0l139 105"></svg:path>`,
})
export class IonMailOpenOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMailOpenSharpIcon],svg[ion-mail-open-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M471.05 168.36L263.24 65.69a16.37 16.37 0 0 0-14.48 0L41 168.36a16 16 0 0 0-9 14.31V432a16.09 16.09 0 0 0 16.19 16h415.62A16.09 16.09 0 0 0 480 432V182.67a16 16 0 0 0-8.95-14.31M256 97.89l173 85.44l-175.7 86.78l-173-85.44Z"></svg:path>`,
})
export class IonMailOpenSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMailOutlineIcon],svg[ion-mail-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="320" x="48" y="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="40" ry="40"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l144 112l144-112"></svg:path>`,
})
export class IonMailOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMailSharpIcon],svg[ion-mail-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 80H48a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M265.82 284.63a16 16 0 0 1-19.64 0L89.55 162.81l19.64-25.26L256 251.73l146.81-114.18l19.64 25.26Z"></svg:path>`,
})
export class IonMailSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMailUnreadIcon],svg[ion-mail-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 128.05A64 64 0 0 0 389.62 80a64.5 64.5 0 0 0-12.71 15.3v.06c-.54.9-1.05 1.82-1.55 2.74l-.24.49c-.42.79-.81 1.59-1.19 2.4c-.12.25-.23.5-.34.75c-.33.73-.65 1.47-.95 2.22c-.13.31-.25.62-.37.93c-.27.7-.53 1.4-.78 2.11l-.36 1.06c-.22.68-.43 1.37-.63 2.06c-.12.39-.23.77-.33 1.16c-.19.67-.35 1.35-.51 2c-.1.41-.2.82-.29 1.23c-.14.68-.27 1.37-.39 2c-.08.42-.16.84-.23 1.26c-.11.7-.2 1.41-.29 2.12c-.05.41-.11.82-.16 1.24c-.08.77-.13 1.54-.19 2.32c0 .36-.06.72-.08 1.08c-.06 1.14-.1 2.28-.1 3.44c0 1 0 2 .08 2.94v.64q.08 1.41.21 2.82l.06.48c.09.85.19 1.69.32 2.52c0 .17 0 .35.07.52c.14.91.31 1.81.49 2.71c0 .22.09.43.13.65c.18.86.38 1.72.6 2.57v.19c.23.89.48 1.76.75 2.63l.21.68c.27.85.55 1.68.85 2.51c.06.18.13.36.2.54c.27.71.55 1.42.84 2.12c.08.21.16.41.25.61c.34.79.69 1.58 1.06 2.36l.33.67c.35.7.7 1.4 1.07 2.09a64.34 64.34 0 0 0 22.14 23.81a62 62 0 0 0 7.62 4.15l.39.18q2.66 1.2 5.43 2.16l.95.32l1.5.47c.45.14.9.26 1.36.39l1.92.5l1.73.4l1.15.23l1.83.33l.94.15c.9.13 1.81.25 2.72.35l.77.07c.73.06 1.47.12 2.21.16l.86.05c1 0 1.94.08 2.92.08c1.16 0 2.3 0 3.44-.1l1.08-.08c.78-.06 1.55-.11 2.32-.19l1.25-.16c.7-.09 1.41-.18 2.11-.29l1.26-.23c.68-.12 1.37-.25 2-.39l1.23-.29c.68-.16 1.36-.32 2-.51c.39-.1.77-.21 1.16-.33c.69-.2 1.38-.41 2.06-.63l1.06-.36c.71-.25 1.41-.51 2.11-.78l.93-.37c.75-.3 1.49-.62 2.22-.95l.75-.34c.81-.38 1.61-.77 2.4-1.19l.49-.24c.92-.5 1.84-1 2.74-1.55h.06A64.5 64.5 0 0 0 480 170.38a63.8 63.8 0 0 0 16-42.33"></svg:path><svg:path fill="currentColor" d="m371.38 202.53l-105.56 82.1a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l94.22-73.28A95.86 95.86 0 0 1 348.81 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V211.19a95.85 95.85 0 0 1-108.62-8.66"></svg:path>`,
})
export class IonMailUnreadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMailUnreadOutlineIcon],svg[ion-mail-unread-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 96H88a40 40 0 0 0-40 40v240a40 40 0 0 0 40 40h334.73a40 40 0 0 0 40-40V239"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l144 112l87-65.67"></svg:path><svg:circle cx="431.95" cy="128.05" r="47.95" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M432 192a63.95 63.95 0 1 1 63.95-63.95A64 64 0 0 1 432 192m0-95.9a32 32 0 1 0 31.95 32a32 32 0 0 0-31.95-32"></svg:path>`,
})
export class IonMailUnreadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMailUnreadSharpIcon],svg[ion-mail-unread-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M374.09 101c-.11.23-.21.46-.31.7c-.34.75-.67 1.5-1 2.26l-.36.9c-.27.71-.54 1.42-.79 2.14c-.12.35-.24.7-.35 1c-.23.68-.44 1.37-.64 2.07l-.33 1.15q-.27 1-.51 2c-.1.41-.2.82-.28 1.23c-.15.67-.28 1.36-.4 2c-.08.42-.16.84-.23 1.27c-.11.69-.2 1.4-.29 2.1c-.05.42-.11.83-.16 1.25c-.08.77-.13 1.54-.19 2.31c0 .36-.06.72-.08 1.09c-.06 1.13-.09 2.27-.09 3.41c0 1 0 2 .07 2.94v.62c.05.95.12 1.89.21 2.83l.06.46c.09.87.2 1.72.32 2.57c0 .15 0 .31.07.46c.14.92.31 1.84.49 2.75l.12.59c.2.92.4 1.84.64 2.75c.23.92.5 1.82.77 2.71c.06.19.12.38.17.57c.28.88.57 1.74.88 2.59c.05.15.11.29.16.43c.29.78.6 1.55.92 2.32c.05.14.11.28.17.42c.35.83.73 1.65 1.11 2.47l.27.53c.4.82.81 1.64 1.24 2.44a64.2 64.2 0 0 0 29.56 27.63l.37.17c1.78.8 3.59 1.53 5.45 2.17l.95.32l1.5.47c.45.14.9.26 1.36.39l1.92.5c.57.14 1.14.27 1.72.39l1.15.24l1.83.32l.93.16c.9.13 1.81.24 2.72.34l.77.07c.73.07 1.47.13 2.22.17l.85.05c1 0 1.94.07 2.93.07c1.15 0 2.29 0 3.43-.09l1.09-.09c.77 0 1.54-.11 2.3-.19c.42 0 .83-.1 1.25-.16c.7-.08 1.41-.17 2.1-.28l1.27-.23c.68-.12 1.36-.25 2-.39l1.24-.29c.67-.16 1.35-.32 2-.51c.39-.1.78-.21 1.16-.33c.69-.2 1.37-.41 2.05-.63l1.07-.36c.7-.24 1.4-.5 2.1-.77l.94-.37c.74-.3 1.47-.62 2.19-.95l.77-.34c.8-.37 1.58-.77 2.36-1.17c.17-.09.35-.17.52-.27c.91-.48 1.8-1 2.68-1.5l.12-.07a63.95 63.95 0 1 0-89.21-84.88l-.21.39c-.3 1.03-.72 1.86-1.11 2.69"></svg:path><svg:path fill="currentColor" d="m371.51 202.43l-105.69 82.2a16 16 0 0 1-19.64 0L89.55 162.81l19.64-25.26L256 251.73l94.36-73.39A95.81 95.81 0 0 1 349 80H48a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V211.13a95.75 95.75 0 0 1-108.49-8.7"></svg:path>`,
})
export class IonMailUnreadSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMaleIcon],svg[ion-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M442 48h-90a22 22 0 0 0 0 44h36.89l-60.39 60.39c-68.19-52.86-167-48-229.54 14.57C31.12 234.81 31.12 345.19 99 413a174.21 174.21 0 0 0 246 0c62.57-62.58 67.43-161.35 14.57-229.54L420 123.11V160a22 22 0 0 0 44 0V70a22 22 0 0 0-22-22M313.92 381.92a130.13 130.13 0 0 1-183.84 0c-50.69-50.68-50.69-133.16 0-183.84s133.16-50.69 183.84 0s50.69 133.16 0 183.84"></svg:path>`,
})
export class IonMaleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMaleFemaleIcon],svg[ion-male-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M426 16h-74a22 22 0 0 0 0 44h20.89l-37.1 37.09A157.68 157.68 0 0 0 216 42c-87.12 0-158 70.88-158 158c0 79.66 59.26 145.72 136 156.46V394h-28a22 22 0 0 0 0 44h28v36a22 22 0 0 0 44 0v-36h28a22 22 0 0 0 0-44h-28v-37.54c76.74-10.74 136-76.8 136-156.46a157.15 157.15 0 0 0-14-64.92l44-44V112a22 22 0 0 0 44 0V38a22 22 0 0 0-22-22M216 314a114 114 0 1 1 114-114a114.13 114.13 0 0 1-114 114"></svg:path>`,
})
export class IonMaleFemaleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMaleFemaleOutlineIcon],svg[ion-male-female-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="216" cy="200" r="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M216 352v128m56-64H160m272-304V32h-80m-16.72 96.72L432 32"></svg:path>`,
})
export class IonMaleFemaleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMaleFemaleSharpIcon],svg[ion-male-female-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M330 16v44h42.89l-37.1 37.09A157.67 157.67 0 0 0 216 42c-87.12 0-158 70.88-158 158c0 79.66 59.26 145.72 136 156.46V394h-50v44h50v58h44v-58h50v-44h-50v-37.54c76.74-10.74 136-76.8 136-156.46a157.2 157.2 0 0 0-14-64.93l44-44V134h44V16ZM216 314a114 114 0 1 1 114-114a114.13 114.13 0 0 1-114 114"></svg:path>`,
})
export class IonMaleFemaleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMaleOutlineIcon],svg[ion-male-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="216" cy="296" r="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 160V64h-96m-28 124L448 64"></svg:path>`,
})
export class IonMaleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMaleSharpIcon],svg[ion-male-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M330 48v44h58.89l-60.39 60.39c-68.2-52.86-167-48-229.54 14.57C31.12 234.81 31.12 345.19 99 413a174.21 174.21 0 0 0 246 0c62.57-62.58 67.43-161.34 14.57-229.54L420 123.11V182h44V48Zm-16.08 333.92a130.13 130.13 0 0 1-183.84 0c-50.69-50.68-50.69-133.16 0-183.84s133.16-50.69 183.84 0s50.69 133.16 0 183.84"></svg:path>`,
})
export class IonMaleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionManIcon],svg[ion-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="56" r="56" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M304 128h-96a64.19 64.19 0 0 0-64 64v107.52c0 10.85 8.43 20.08 19.27 20.47A20 20 0 0 0 184 300v-99.73a8.18 8.18 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8V489a23 23 0 0 0 23 23a23 23 0 0 0 23-23V346.34a10.24 10.24 0 0 1 9.33-10.34A10 10 0 0 1 266 346v143a23 23 0 0 0 23 23a23 23 0 0 0 23-23V200.27a8.18 8.18 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v99.52c0 10.85 8.43 20.08 19.27 20.47A20 20 0 0 0 368 300V192a64.19 64.19 0 0 0-64-64"></svg:path>`,
})
export class IonManIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionManOutlineIcon],svg[ion-man-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 208v264a23.73 23.73 0 0 0 24 24h0a23.73 23.73 0 0 0 24-24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 336v136a23.73 23.73 0 0 0 24 24h0a23.73 23.73 0 0 0 24-24V208"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 192v88a23.72 23.72 0 0 1-24 24h0a23.72 23.72 0 0 1-24-24v-88a48 48 0 0 1 48-48h96a48 48 0 0 1 48 48v88a23.72 23.72 0 0 1-24 24h0a23.72 23.72 0 0 1-24-24v-88"></svg:path><svg:circle cx="256" cy="56" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class IonManOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionManSharpIcon],svg[ion-man-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="56" r="56" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M336 128H176a32 32 0 0 0-32 32v160h48V192h8v320h52V328h8v184h52V192h8v128h48V160a32 32 0 0 0-32-32"></svg:path>`,
})
export class IonManSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMapIcon],svg[ion-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.17 113.34A32 32 0 0 0 32 141.24V438a32 32 0 0 0 47 28.37c.43-.23.85-.47 1.26-.74l84.14-55.05a8 8 0 0 0 3.63-6.72V46.45a8 8 0 0 0-12.51-6.63Zm164.19-74.03A8 8 0 0 0 200 46v357.56a8 8 0 0 0 3.63 6.72l96 62.42A8 8 0 0 0 312 466V108.67a8 8 0 0 0-3.64-6.73Zm252.17 7.16a31.64 31.64 0 0 0-31.5-.88a12 12 0 0 0-1.25.74l-84.15 55a8 8 0 0 0-3.63 6.72v357.46a8 8 0 0 0 12.52 6.63l107.07-73.46a32 32 0 0 0 16.41-28v-296a32.76 32.76 0 0 0-15.47-28.21"></svg:path>`,
})
export class IonMapIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMapOutlineIcon],svg[ion-map-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M313.27 124.64L198.73 51.36a32 32 0 0 0-29.28.35L56.51 127.49A16 16 0 0 0 48 141.63v295.8a16 16 0 0 0 23.49 14.14l97.82-63.79a32 32 0 0 1 29.5-.24l111.86 73a32 32 0 0 0 29.27-.11l115.43-75.94a16 16 0 0 0 8.63-14.2V74.57a16 16 0 0 0-23.49-14.14l-98 63.86a32 32 0 0 1-29.24.35M328 128v336M184 48v336"></svg:path>`,
})
export class IonMapOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMapSharpIcon],svg[ion-map-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M327.71 130.93L184 39L32 144v336l152.29-98.93L328 473l152-105V32ZM312 421l-112-72V91l112 72Z"></svg:path>`,
})
export class IonMapSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdAddIcon],svg[ion-md-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z" fill="currentColor"></svg:path>`,
})
export class IonMdAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdAddCircleIcon],svg[ion-md-add-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm107 229h-86v86h-42v-86h-86v-42h86v-86h42v86h86v42z" fill="currentColor"></svg:path>`,
})
export class IonMdAddCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdAddCircleOutlineIcon],svg[ion-md-add-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M363 277h-86v86h-42v-86h-86v-42h86v-86h42v86h86v42z" fill="currentColor"></svg:path><svg:path d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422c-44.3 0-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256c0-44.3 17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"></svg:path>`,
})
export class IonMdAddCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdAirplaneIcon],svg[ion-md-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 336v-40L288 192V79.2c0-17.7-14.8-31.2-32-31.2s-32 13.5-32 31.2V192L64 296v40l160-48v113.6l-48 31.2V464l80-16 80 16v-31.2l-48-31.2V288l160 48z" fill="currentColor"></svg:path>`,
})
export class IonMdAirplaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdAlarmIcon],svg[ion-md-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M470 124.837l-98.443-81.78-27.814 32.931 98.442 81.769L470 124.837zM167.192 74.919L139.366 42 42 124.837l27.814 32.919 97.378-82.837zm99.509 97.709H234.6v127.446l101.649 60.539L352.3 334.06l-85.6-49.917V172.628zM256 87.665c-107 0-192.601 86.021-192.601 191.166C63.399 383.98 149 470 256 470c105.936 0 192.601-86.02 192.601-191.169 0-105.144-86.665-191.166-192.601-191.166zm0 339.855c-82.393 0-149.8-66.906-149.8-148.688 0-81.777 67.407-148.684 149.8-148.684 82.394 0 149.8 66.906 149.8 148.684 0 82.839-67.406 148.688-149.8 148.688z" fill="currentColor"></svg:path>`,
})
export class IonMdAlarmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdAlbumsIcon],svg[ion-md-albums-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M154.7 464h266.7c23.5 0 42.7-19.2 42.7-42.7V154.7c0-23.5-19.2-42.7-42.7-42.7H154.7c-23.5 0-42.7 19.2-42.7 42.7v266.7c0 23.4 19.2 42.6 42.7 42.6z" fill="currentColor"></svg:path><svg:path d="M90.7 48h266.7c23.5 0 42.7 19.2 42.7 42.7V96H138.7C115.2 96 96 115.2 96 138.7V400h-5.3C67.2 400 48 380.8 48 357.3V90.7C48 67.2 67.2 48 90.7 48z" fill="currentColor"></svg:path>`,
})
export class IonMdAlbumsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdAlertIcon],svg[ion-md-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.6 48 48 141.601 48 256s93.6 208 208 208 208-93.601 208-208S370.4 48 256 48zm24 312h-48v-40h48v40zm0-88h-48V144h48v128z" fill="currentColor"></svg:path>`,
})
export class IonMdAlertIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdAmericanFootballIcon],svg[ion-md-american-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 256c14.1 35 36.2 66 64 90.6V165.4C68.2 190 46.1 221 32 256z" fill="currentColor"></svg:path><svg:path d="M480 256c-14.1-35-36.2-66-64-90.6v181.2c27.8-24.6 49.9-55.6 64-90.6z" fill="currentColor"></svg:path><svg:g><svg:path d="M256 105c-47.1 0-91 13.4-128 36.5v228.9c37 23.1 80.9 36.5 128 36.5s91-13.4 128-36.5V141.5c-37-23.1-80.9-36.5-128-36.5zm96 135v64h-32v-32h-48v32h-32v-32h-48v32h-32v-96h32v32h48v-32h32v32h48v-32h32v32z" fill="currentColor"></svg:path></svg:g>`,
})
export class IonMdAmericanFootballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdAnalyticsIcon],svg[ion-md-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M379.4 178.3l-87.2 133.4C299 320 303 330.5 303 342c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-3 .3-6 .8-8.9l-57.6-33.5c-8.6 8.3-20.3 13.4-33.3 13.4-8.6 0-16.6-2.3-23.6-6.2L32 364.2v57.2c0 23.5 19.2 42.7 42.7 42.7h362.7c23.5 0 42.7-19.2 42.7-42.7V208.8l-58.6-38.9c-8.1 6.3-18.3 10.1-29.4 10.1-4.4 0-8.7-.6-12.7-1.7z" fill="currentColor"></svg:path><svg:path d="M117 217c26.5 0 48 21.5 48 48 0 2.1-.2 4.2-.4 6.2l60.1 33.6c8.3-6.8 18.8-10.8 30.4-10.8 3.6 0 7.1.4 10.4 1.1l87.4-135.4c-5.6-7.8-8.9-17.4-8.9-27.8 0-26.5 21.5-48 48-48s48 21.5 48 48c0 3.9-.5 7.7-1.3 11.3l41.3 27.6V90.7c0-23.5-19.2-42.7-42.7-42.7H74.7C51.2 48 32 67.2 32 90.7V320l40-38.3c-1.9-5.2-3-10.8-3-16.7 0-26.5 21.5-48 48-48z" fill="currentColor"></svg:path>`,
})
export class IonMdAnalyticsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdApertureIcon],svg[ion-md-aperture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32C132.288 32 32 132.288 32 256s100.288 224 224 224 224-100.288 224-224S379.712 32 256 32zm135.765 359.765C355.5 428.028 307.285 448 256 448s-99.5-19.972-135.765-56.235C83.972 355.5 64 307.285 64 256s19.972-99.5 56.235-135.765C156.5 83.972 204.715 64 256 64s99.5 19.972 135.765 56.235C428.028 156.5 448 204.715 448 256s-19.972 99.5-56.235 135.765z" fill="currentColor"></svg:path><svg:path d="M200.043 106.067c-40.631 15.171-73.434 46.382-90.717 85.933H256l-55.957-85.933z" fill="currentColor"></svg:path><svg:path d="M412.797 288A160.723 160.723 0 00416 256c0-36.624-12.314-70.367-33.016-97.334L311 288h101.797z" fill="currentColor"></svg:path><svg:path d="M359.973 134.395C332.007 110.461 295.694 96 256 96c-7.966 0-15.794.591-23.448 1.715L310.852 224l49.121-89.605z" fill="currentColor"></svg:path><svg:path d="M99.204 224A160.65 160.65 0 0096 256c0 36.639 12.324 70.394 33.041 97.366L201 224H99.204z" fill="currentColor"></svg:path><svg:path d="M311.959 405.932c40.631-15.171 73.433-46.382 90.715-85.932H256l55.959 85.932z" fill="currentColor"></svg:path><svg:path d="M152.046 377.621C180.009 401.545 216.314 416 256 416c7.969 0 15.799-.592 23.456-1.716L201.164 288l-49.118 89.621z" fill="currentColor"></svg:path>`,
})
export class IonMdApertureIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdAppsIcon],svg[ion-md-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 176h80V96H96v80zm120 240h80v-80h-80v80zm-120 0h80v-80H96v80zm0-120h80v-80H96v80zm120 0h80v-80h-80v80zM336 96v80h80V96h-80zm-120 80h80V96h-80v80zm120 120h80v-80h-80v80zm0 120h80v-80h-80v80z" fill="currentColor"></svg:path>`,
})
export class IonMdAppsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdAppstoreIcon],svg[ion-md-appstore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M464 152H360c0-57-46.562-103.859-104-103.859S152 95 152 152H48c18.688 216 13 312 13 312h389.999c-.001 0-5.688-98 13.001-312zM256 74.105c43.008 0 77.999 34.895 77.999 77.895H178c0-43 34.991-77.895 78-77.895zM204 397.64V228.867l142.999 84.387L204 397.64z" fill="currentColor"></svg:path>`,
})
export class IonMdAppstoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdArchiveIcon],svg[ion-md-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M453.594 100.001l-32.353-39.299C415.469 52.627 405.083 48 394.664 48H117.335c-10.416 0-20.801 4.627-26.576 12.702l-32.351 39.299C51.468 106.923 48 117.335 48 128.886v288.89C48 443.2 68.8 464 94.225 464h323.553C443.202 464 464 443.2 464 417.775v-288.89c0-11.55-3.463-21.962-10.406-28.884zM256 383.109L128.89 256h80.89v-46.224h92.443V256h80.89L256 383.109zM96.534 94.221L115.02 71.11h277.331l21.965 23.111H96.534z" fill="currentColor"></svg:path>`,
})
export class IonMdArchiveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowBackIcon],svg[ion-md-arrow-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowDownIcon],svg[ion-md-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M277.375 85v259.704l119.702-119.702L427 256 256 427 85 256l29.924-29.922 119.701 118.626V85h42.75z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowDropdownIcon],svg[ion-md-arrow-dropdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 192l128 128 128-128z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowDropdownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowDropdownCircleIcon],svg[ion-md-arrow-dropdown-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm0 272l-96-96h192l-96 96z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowDropdownCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowDropleftIcon],svg[ion-md-arrow-dropleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M320 128L192 256l128 128z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowDropleftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowDropleftCircleIcon],svg[ion-md-arrow-dropleft-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M464 256c0-114.875-93.125-208-208-208S48 141.125 48 256s93.125 208 208 208 208-93.125 208-208zm-272 0l96-96v192l-96-96z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowDropleftCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowDroprightIcon],svg[ion-md-arrow-dropright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M192 128l128 128-128 128z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowDroprightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowDroprightCircleIcon],svg[ion-md-arrow-dropright-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 464c114.875 0 208-93.125 208-208S370.875 48 256 48 48 141.125 48 256s93.125 208 208 208zm-32-112V160l96 96-96 96z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowDroprightCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowDropupIcon],svg[ion-md-arrow-dropup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 320l128-128 128 128z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowDropupIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowDropupCircleIcon],svg[ion-md-arrow-dropup-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M464 256c0-114.875-93.125-208-208-208S48 141.125 48 256s93.125 208 208 208 208-93.125 208-208zm-112 32H160l96-96 96 96z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowDropupCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowForwardIcon],svg[ion-md-arrow-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowRoundBackIcon],svg[ion-md-arrow-round-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowRoundBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowRoundDownIcon],svg[ion-md-arrow-round-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M99.4 284.9l134 138.1c5.8 6 13.7 9 22.4 9h.4c8.7 0 16.6-3 22.4-9l134-138.1c12.5-12 12.5-31.3 0-43.2-12.5-11.9-32.7-11.9-45.2 0l-79.4 83v-214c0-16.9-14.3-30.6-32-30.6-18 0-32 13.7-32 30.6v214l-79.4-83c-12.5-11.9-32.7-11.9-45.2 0s-12.5 31.2 0 43.2z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowRoundDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowRoundForwardIcon],svg[ion-md-arrow-round-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowRoundForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowRoundUpIcon],svg[ion-md-arrow-round-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M412.6 227.1L278.6 89c-5.8-6-13.7-9-22.4-9h-.4c-8.7 0-16.6 3-22.4 9l-134 138.1c-12.5 12-12.5 31.3 0 43.2 12.5 11.9 32.7 11.9 45.2 0l79.4-83v214c0 16.9 14.3 30.6 32 30.6 18 0 32-13.7 32-30.6v-214l79.4 83c12.5 11.9 32.7 11.9 45.2 0s12.5-31.2 0-43.2z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowRoundUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowUpIcon],svg[ion-md-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M277.375 427V167.296l119.702 119.702L427 256 256 85 85 256l29.924 29.922 119.701-118.626V427h42.75z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdAtIcon],svg[ion-md-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M265.6 212.3c-10.5 0-18.5 4.4-24 13.2-5.5 8.8-9.1 22-10.8 39.6-.9 11.7 0 20.5 2.7 26.5s7.1 9 13.1 9c5.5 0 10.3-1.5 14.6-4.4 4.3-2.9 8.1-8.3 11.3-16.2l6.1-66c-2.2-.5-4.4-.9-6.5-1.2-2.3-.4-4.4-.5-6.5-.5z" fill="currentColor"></svg:path><svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm127.8 201.9c-.9 21.4-7.6 39.9-20 55.6-12.4 15.6-31 23.4-55.6 23.4-8.2 0-15.3-2.2-21.2-6.6-6-4.4-10.2-10.7-12.6-18.8-4.1 8.3-9.4 14.5-15.7 18.6-6.3 4.1-13.7 6.2-22.2 6.2-15.1 0-26.6-5.8-34.6-17.3s-10.9-26.8-8.8-45.9c2.6-24.4 10-44 22.2-58.7 12.2-14.7 27-22 44.4-22 12.2 0 22.1 1.3 29.5 3.8 7.4 2.5 15.6 5.7 24.5 11l-.5-.1h.8l-7.7 83.4c-.5 8.5.1 14.6 1.7 17.8 1.7 3.2 3.9 4.9 6.7 4.9 11.3 0 20.4-5.1 27.2-15.6 6.8-10.5 10.6-23.6 11.4-39.6 1.6-33-5.1-58.7-20.2-77.1-15.1-18.4-38.3-27.7-69.7-27.7-30.5 0-54.8 9.9-72.8 29.8s-27.7 46.9-29.3 81.2c-1.7 33.4 5.6 59.8 21.9 79.1 16.3 19.4 39.7 29.1 70.3 29.1 8.5 0 17.3-.9 26.5-2.7 9.1-1.8 17.1-4.1 23.7-6.8l5.8 24.2c-6.8 4.1-15.4 7.3-25.9 9.6-10.5 2.3-20.7 3.4-30.7 3.4-40.8 0-72.3-12.1-94.3-36.4-22-24.2-32.2-57.4-30.5-99.6 1.8-41.8 14.9-74.9 39.1-99.4 24.3-24.5 56.5-36.7 96.7-36.7 39.5 0 69.8 11.6 90.7 34.7 21.2 23.2 30.8 54.9 29.2 95.2z" fill="currentColor"></svg:path>`,
})
export class IonMdAtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdAttachIcon],svg[ion-md-attach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M341.334 128v234.666C341.334 409.604 302.938 448 256 448c-46.937 0-85.333-38.396-85.333-85.334V117.334C170.667 87.469 194.135 64 224 64c29.864 0 53.333 23.469 53.333 53.334v245.333c0 11.729-9.605 21.333-21.334 21.333s-21.333-9.604-21.333-21.333V160h-32v202.667C202.667 392.531 226.135 416 256 416c29.865 0 53.334-23.469 53.334-53.333V117.334C309.334 70.401 270.938 32 224 32s-85.334 38.401-85.334 85.334v245.332C138.667 427.729 190.938 480 256 480c65.062 0 117.334-52.271 117.334-117.334V128h-32z" fill="currentColor"></svg:path>`,
})
export class IonMdAttachIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBackspaceIcon],svg[ion-md-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M433.5 96H167.2c-12.2 0-21.8 6.2-28.2 15.6L43 256l96 144.2c6.4 9.4 16 15.8 28.2 15.8h266.2c19.5 0 35.5-16 35.5-35.6V131.6C469 112 453 96 433.5 96zm-53.3 223.8l-25 25.1-63.7-63.8-63.7 63.8-25-25.1 63.7-63.8-63.7-63.8 25-25.1 63.7 63.8 63.7-63.8 25 25.1-63.7 63.8 63.7 63.8z" fill="currentColor"></svg:path>`,
})
export class IonMdBackspaceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBarcodeIcon],svg[ion-md-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M88 128h48v256H88z" fill="currentColor"></svg:path><svg:path d="M232 128h48v256h-48z" fill="currentColor"></svg:path><svg:path d="M160 144h48v224h-48z" fill="currentColor"></svg:path><svg:path d="M304 144h48v224h-48z" fill="currentColor"></svg:path><svg:path d="M376 128h48v256h-48z" fill="currentColor"></svg:path><svg:path d="M104 104V56H16v400h88v-48H64V104z" fill="currentColor"></svg:path><svg:path d="M408 56v48h40v304h-40v48h88V56z" fill="currentColor"></svg:path>`,
})
export class IonMdBarcodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBaseballIcon],svg[ion-md-baseball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M365.9 402.6L343 416.1l-16-28 20.2-11.9c-5.2-8.5-9.8-17.4-13.9-26.7-1.4-3.1-2.7-6.3-3.9-9.5l-25.1 5.8-7.1-31.6 22.6-5.2c-2.8-12.1-4.7-24-5.5-37H290v-32h24.3c.8-12 2.7-24.8 5.5-36.8l-22.6-5.2 7.1-31.6 25.1 5.8c1.3-3.2 2.6-6.4 4-9.6 4.1-9.2 8.7-18.1 13.8-26.6L327 124.1l16-28 22.8 13.5c5.2-6.4 10.8-12.5 16.7-18.3C347.4 64.1 303.5 48 256 48s-91.4 16.1-126.5 43.2c5.9 5.8 11.5 12 16.7 18.3L169 96.1l16 28-20.2 11.9c5.1 8.5 9.8 17.4 13.8 26.6 1.4 3.2 2.7 6.4 4 9.6l25.1-5.8 7.1 31.6-22.6 5.2c2.8 12.1 4.6 24.8 5.5 36.8H222v32h-24.3c-.8 13-2.7 24.9-5.5 37l22.6 5.2-7.1 31.6-25.1-5.8c-1.2 3.2-2.5 6.3-3.9 9.5-4.1 9.2-8.7 18.1-13.9 26.7l20.2 11.9-16 28-22.9-13.5c-5.2 6.3-10.7 12.4-16.6 18.2 35.1 27.1 79 43.2 126.5 43.2s91.4-16.1 126.5-43.2c-5.9-5.8-11.4-11.9-16.6-18.2z" fill="currentColor"></svg:path><svg:path d="M393.8 126l18.1 10.7-16 28-21.2-12.5c-5 8.3-9.5 16.9-13.3 25.9-.2.4-.4.9-.5 1.3l21 4.9-7.1 31.6-23.9-5.5c-2.3 9.7-3.8 19.6-4.6 29.6H370v32h-23.6c.8 10 2.3 20 4.6 29.8l23.9-5.5 7.1 31.6-21 4.9c.2.4.3.8.5 1.2 3.8 9 8.3 17.7 13.3 26l21.1-12.4 16 28-18 10.6c3.3 3.9 6.8 7.7 10.5 11.3l2 2C442 362 464 311.4 464 256s-22-106-57.7-143.4c-.7.7-1.4 1.3-2 2-3.7 3.7-7.2 7.5-10.5 11.4z" fill="currentColor"></svg:path><svg:path d="M118.2 386.1l-18-10.6 16-28 21.1 12.4c5.1-8.3 9.5-17 13.3-26 .2-.4.3-.8.5-1.2l-21-4.9 7.1-31.6 23.9 5.5c2.3-9.8 3.8-19.8 4.6-29.8H142v-32h23.6c-.8-10-2.3-19.9-4.6-29.6l-23.9 5.5-7.1-31.6 21-4.9c-.2-.4-.3-.9-.5-1.3-3.8-9-8.2-17.7-13.3-25.9L116 164.6l-16-28 18.1-10.7c-3.4-3.9-6.9-7.7-10.6-11.4l-2-2C70 150 48 200.6 48 256s22 106 57.7 143.4c.7-.7 1.4-1.3 2-2 3.6-3.6 7.1-7.4 10.5-11.3z" fill="currentColor"></svg:path>`,
})
export class IonMdBaseballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBasketIcon],svg[ion-md-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M362.1 205.2L272.9 72.5C269 66.8 262.5 64 256 64c-6.5 0-13 2.8-16.9 8.7l-89.2 132.5H52.4c-11.2 0-20.4 9.1-20.4 20.2 0 1.8.2 3.6.8 5.5l51.7 187.5c4.7 17 20.4 29.5 39.1 29.5h264.7c18.7 0 34.4-12.5 39.3-29.5l51.7-187.5.6-5.5c0-11.1-9.2-20.2-20.4-20.2h-97.4zm-167.2 0l61.1-89 61.1 89H194.9zM256 367.1c-22.4 0-40.7-18.2-40.7-40.5s18.3-40.5 40.7-40.5 40.7 18.2 40.7 40.5-18.3 40.5-40.7 40.5z" fill="currentColor"></svg:path>`,
})
export class IonMdBasketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBasketballIcon],svg[ion-md-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M191.6 272c-3.8 55-26.4 107.1-64.5 147.7 31.6 25 70.9 41 112.9 44.3V272h-48.4z" fill="currentColor"></svg:path><svg:path d="M272 464c42-3.3 81.5-19.4 113.1-44.5-38-40.6-60.5-92.5-64.3-147.5H272v192z" fill="currentColor"></svg:path><svg:path d="M240 48c-42 3.2-80.5 19-111.9 43.6 38 40.9 60.3 93.4 63.7 148.4H240V48z" fill="currentColor"></svg:path><svg:path d="M320.7 240c3.4-55 25.6-107.4 63.5-148.3C352.7 67.1 314 51.2 272 48v192h48.7z" fill="currentColor"></svg:path><svg:path d="M408.6 114.2c-17.2 18.5-30.7 39.7-40.1 62.9-8.2 20.2-13.1 40.9-14.6 62.9H464c-3.7-48-24.1-92.2-55.4-125.8z" fill="currentColor"></svg:path><svg:path d="M368.5 333.1c9.6 23.7 23.3 45.1 40.9 63.8C440.3 363.4 460.3 320 464 272H354.1c1.6 21 6.5 41.5 14.4 61.1z" fill="currentColor"></svg:path><svg:path d="M143.9 177.1c-9.5-23.3-23-44.5-40.3-63.1-31.4 33.6-51.9 78-55.6 126h110.5c-1.6-22-6.5-42.8-14.6-62.9z" fill="currentColor"></svg:path><svg:path d="M102.7 397.1c17.7-18.8 31.5-40.3 41.1-64 8-19.6 12.8-40.1 14.5-61.1H48c3.7 48 23.8 91.6 54.7 125.1z" fill="currentColor"></svg:path>`,
})
export class IonMdBasketballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBatteryChargingIcon],svg[ion-md-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M338.2 76.8h-37.4V32h-89.6v44.8h-37.4c-16.4 0-29.8 13.4-29.8 29.8V450c0 16.6 13.4 30 29.8 30H338c16.6 0 30-13.4 30-29.8V106.6c0-16.4-13.4-29.8-29.8-29.8zM233.6 435.2V312h-44.8l89.6-168v123.2h44.8l-89.6 168z" fill="currentColor"></svg:path>`,
})
export class IonMdBatteryChargingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBatteryDeadIcon],svg[ion-md-battery-dead-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M338.2 76.8h-37.4V32h-89.6v44.8h-37.4c-16.4 0-29.8 13.4-29.8 29.8V450c0 16.6 13.4 30 29.8 30H338c16.6 0 30-13.4 30-29.8V106.6c0-16.4-13.4-29.8-29.8-29.8zM320 432H192V124.8h128V432z" fill="currentColor"></svg:path>`,
})
export class IonMdBatteryDeadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBatteryFullIcon],svg[ion-md-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M338.2 76.8h-37.4V32h-89.6v44.8h-37.4c-16.4 0-29.8 13.4-29.8 29.8V450c0 16.6 13.4 30 29.8 30H338c16.6 0 30-13.4 30-29.8V106.6c0-16.4-13.4-29.8-29.8-29.8z" fill="currentColor"></svg:path>`,
})
export class IonMdBatteryFullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBeakerIcon],svg[ion-md-beaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448.1 34.9c0-1.2-.4-2.9-2.9-2.9H128.5c-54.3 0-64.4 27.4-64.4 39.8C94.4 76 96 76.5 96 108.5v307c0 35.3 28.9 64.5 64.3 64.5H368c35.3 0 64-29.2 64-64.5V73.3c2.2-17.5 12-31.8 13.1-33.5 1.2-1.9 3-3.8 3-4.9zM354.2 432H176.3c-15.9 0-29.7-11.9-32.3-27.1V80h240v319.7c0 18-12.4 32.3-29.8 32.3z" fill="currentColor"></svg:path><svg:path d="M182 160v226c0 4.4 3.6 8 8 8h148c4.4 0 8-3.6 8-8V160H182z" fill="currentColor"></svg:path>`,
})
export class IonMdBeakerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBedIcon],svg[ion-md-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M168.7 264.5c29 0 52.4-22.9 52.4-51.2s-23.4-51.2-52.4-51.2-52.4 22.9-52.4 51.2 23.5 51.2 52.4 51.2zm209.5-102.4H238.5v119.5H98.9V128H64v256h34.9v-51.2h314.2V384H448V230.4c0-37.7-31.2-68.3-69.8-68.3z" fill="currentColor"></svg:path>`,
})
export class IonMdBedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBeerIcon],svg[ion-md-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 140h-16v-6c8.9-9 16-22.9 16-38 0-35.3-28.7-64-64-64-16.3 0-31.1 6.1-42.4 16.1C297.2 38 281.4 32 264.2 32c-15.8 0-30.4 5.1-42.3 13.7C212 37.2 199 32 184.9 32c-17.1 0-32.4 7.6-42.8 19.5-11.7-12-28-19.5-46.1-19.5-35.3 0-64 28.7-64 64 0 16.2 6.1 31 16 42.3V193c0 26.5 21.5 48 48 48v174.5c0 35.3 28.8 64.5 64.2 64.5H336c35.3 0 64.1-29.2 64.1-64.5V372h16c50 0 64-32.7 64-68v-96c-.1-35.3-17.1-68-64.1-68zm-64 52H144v-53.7c.3-.4.7-.8 1-1.2 1.2-1.5 2.4-3 3.5-4.6 1.5 1.2 3 2.4 4.6 3.4 9.1 6.1 20 9.7 31.7 9.7 6.4 0 12.6-1.1 18.3-3 12.8 20.2 35.3 33.7 61 33.7 22 0 41.7-9.9 54.9-25.4 5.7-6.7 10.2-14.4 13.1-22.9H352v64zM96 128.1v75c-9 0-16-7.2-16-16v-63.3c-8-4.5-13.4-12.1-15.3-21-.5-2.1-.7-4.4-.7-6.7 0-17.6 14.4-32 32-32 11.8 0 23.3 7.7 30.1 15.4s26.7 7.7 33.9 0c6.8-7.3 14.3-15.4 24.8-15.4 6 0 11.6 2.2 15.9 5.8 1.9 1.6 3.6 3.5 4.9 5.6 1.1 1.8 2 4.2 3.1 5.8 2.7 3.4 6.5 5.5 11.2 5.5 4.4 0 8.3-1.9 11-5 .6-.7 1.2-1.5 1.7-2.3 2-2.5 4.2-4.8 6.7-6.8 6.8-5.4 15.5-8.6 24.8-8.6 10.6 0 20.2 4.1 27.4 10.9 1.7 1.6 6.7 4.5 13.2 5.1 4.5.4 6.1.3 8.2 0 10.3-1.3 14.4-4.7 16.4-6.6 5.8-5.8 13.8-9.4 22.6-9.4 17.6 0 32 14.4 32 32 .2 3.1-.3 6.2-1.2 9.1-2.5-5.5-8.1-9.2-14.6-9.2h-55s-8.7-.7-8.7 8.2c0 8.9-2.9 17.1-7.8 23.7-7.3 9.9-19.1 16.4-32.4 16.4-14.9 0-27.9-8.1-34.8-20.2-1.6-2.7-2.8-5.6-3.7-8.6-.1-.6-.3-1.1-.4-1.6-2-5.9-7.5-10.2-14.1-10.2-3.9 0-7.5 1.5-10.2 4l-.1.1c-2.4 2.1-5.3 3.7-8.4 4.7-2.4.8-5 1.2-7.7 1.2-7.5 0-14.7-4-18.8-8.6-10-11.4-23.7-6.8-29.7-5.5-6 1.3-12.2 11.7-12.2 11.7-1.1 2.1-2.4 4-3.9 5.8-6 6.7-15.2 11-24.2 11zM432 304c0 17.7-6.3 24-24 24h-8V184h8c17.7 0 24 6.3 24 24v96z" fill="currentColor"></svg:path>`,
})
export class IonMdBeerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBicycleIcon],svg[ion-md-bicycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M330.666 131.202c18.668 0 33.598-14.935 33.598-33.601S349.334 64 330.666 64C312 64 297.07 78.935 297.07 97.601s14.93 33.601 33.596 33.601zm56 130.132c-51.332 0-93.332 42-93.332 93.333s42 93.333 93.332 93.333C438 448 480 406 480 354.667s-42-93.333-93.334-93.333zm0 158.666c-36.402 0-65.332-28.93-65.332-65.333s28.93-65.333 65.332-65.333c36.404 0 65.334 28.93 65.334 65.333S423.07 420 386.666 420zm-81.069-196H384v-32h-58.845l-34.62-60.134c-5.605-9.333-15.869-15.864-27.07-15.864-8.399 0-16.798 3.732-22.399 9.333L169.334 194.4c-5.601 5.601-9.333 14-9.333 22.399 0 12.131 9.202 21.465 18.535 27.065L240 282.134V368h32V256l-39.333-32 42.929-44.533L305.597 224zm-180.264 37.334C74 261.334 32 303.334 32 354.667S74 448 125.333 448s93.333-42 93.333-93.333-41.999-93.333-93.333-93.333zm0 158.666C88.934 420 60 391.07 60 354.667s28.934-65.333 65.333-65.333 65.333 28.93 65.333 65.333S161.732 420 125.333 420z" fill="currentColor"></svg:path>`,
})
export class IonMdBicycleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBluetoothIcon],svg[ion-md-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M399 159.9L270.5 32H248v170L144.7 99.2 113 130.8 238.8 256 113 381.2l31.7 31.6L248 310v170h22.5L399 352.1 302.2 256l96.8-96.1zm-106-42.1l42.3 42.1L293 202v-84.2zm42.3 234.3L293 394.2V310l42.3 42.1z" fill="currentColor"></svg:path>`,
})
export class IonMdBluetoothIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBoatIcon],svg[ion-md-boat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M84.255 413h1.063c34.123 0 63.977-19.021 85.305-42.494 21.325 23.473 51.18 42.762 85.304 42.762s63.979-19.334 85.305-42.806C362.559 393.934 392.412 413 426.535 413h1.062l51.253-138.78c2.126-5.329 1.063-11.641-1.07-16.976-2.136-5.333-7.237-8.487-12.567-10.623L427 234.133v-98.15C427 112.51 407.344 93 383.884 93h-63.979l-15.993-53h-95.969l-15.995 53h-63.979C104.511 93 85 112.51 85 135.982v98.15l-38.074 12.533c-5.33 2.136-10.582 5.334-12.718 10.667-2.135 5.335-3.158 10.49-1.031 16.887L84.255 413zM128 136h256v84.261l-128-41.605-128 41.605V136z" fill="currentColor"></svg:path><svg:path d="M341.231 408.007c-52.253 36.267-118.356 36.258-170.608-.009 0 0-57.638 64.002-106.632 64.002h21.327c29.854 0 58.646-11.726 85.305-25.594 53.315 27.734 117.293 27.728 170.608-.007C367.89 460.268 396.681 472 426.535 472h21.328c-47.651 0-106.632-63.993-106.632-63.993z" fill="currentColor"></svg:path>`,
})
export class IonMdBoatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBodyIcon],svg[ion-md-body-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48c22 0 40 18 40 40s-18 40-40 40-40-18-40-40 18-40 40-40zm192 144.1H320V464h-42.7V320h-42.7v144H192V192.1H64v-42.7h384v42.7z" fill="currentColor"></svg:path>`,
})
export class IonMdBodyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBonfireIcon],svg[ion-md-bonfire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M272.2 350.6c-.8-8.2-8.2-14.6-17.3-14.6-8.3 0-15.2 5.4-16.9 12.5L221.1 441c-.5 2.3-.8 4.6-.8 7 0 17.7 15.5 32 34.7 32s34.7-14.3 34.7-32c0-2.9-.4-5.7-1.2-8.4l-16.3-89z" fill="currentColor"></svg:path><svg:path d="M310.1 355z" fill="currentColor"></svg:path><svg:path d="M404.3 390.3c-1.9-1.4-3.6-2.9-5.6-3.9l-68.9-47.5c-6.3-3.8-13-3.7-17.9.9-4.5 4.1-5.1 10.4-1.8 15.4l53 65.8c1 1.5 2.3 2.8 3.6 4.2 8.5 9.1 27.2 9.6 37.5 0 10.4-9.8 10.3-27.2.1-34.9z" fill="currentColor"></svg:path><svg:path d="M382.2 335z" fill="currentColor"></svg:path><svg:path d="M450.4 322.5l-64.5-2.3c-4.2-.6-8 2.1-8.7 6-.7 3.6 1.5 7.1 5.1 8.8h.1l62.5 17.8c9 1.9 19.1-2.3 19.1-11.6 0-11.9-3.3-17.5-13.6-18.7z" fill="currentColor"></svg:path><svg:path d="M129.5 335z" fill="currentColor"></svg:path><svg:path d="M129.5 335c3.6-1.6 5.7-5.2 5.1-8.8-.7-4-4.5-6.6-8.7-6l-64.5 2.3C51 323.7 48 329.3 48 341.1c0 9.3 9.9 13.6 18.8 11.6l62.5-17.8c.1.1.1.1.2.1z" fill="currentColor"></svg:path><svg:path d="M182.2 338.8l-68.9 47.4c-2 1.1-3.9 2.4-5.6 3.9-10.4 9.6-10.4 25.1 0 34.6 10.4 9.6 27.1 9.6 37.5 0 1.4-1.3 2.6-2.7 3.6-4.2l53-65.6c3.3-5 2.7-11.2-1.8-15.3-4.8-4.5-12.6-4.8-17.8-.8z" fill="currentColor"></svg:path><svg:path d="M256 32s30.2 35.4 30.2 64.4c0 27.8-18.2 50.3-45.9 50.3-27.9 0-48.9-22.5-48.9-50.3l.4-6.9c-27.2 32.3-43.5 76.2-43.5 121.8 0 59.6 48.2 107.8 107.8 107.8s107.8-48.2 107.8-107.8C363.8 138.7 328 53.7 256 32zm-3.9 246.7c-24 0-43.4-18.9-43.4-42.3 0-21.8 14.1-37.2 37.9-42 23.8-4.9 48.5-16.3 62.3-34.8 5.3 17.4 7.9 35.7 7.9 54.4 0 35.7-29 64.7-64.7 64.7z" fill="currentColor"></svg:path>`,
})
export class IonMdBonfireIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBookIcon],svg[ion-md-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M426.2 80.4l-170.2 32-170.2-32C64 77 48 97.3 48 118v244.5c0 20.7 16 32.6 37.8 37.6L256 432l170.2-32c21.8-5 37.8-16.9 37.8-37.6V118c0-20.7-16-41-37.8-37.6zm0 282l-151.2 32V149.9l151.2-32v244.5zm-189.2 32l-151.2-32V118L237 150v244.4z" fill="currentColor"></svg:path>`,
})
export class IonMdBookIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBookmarkIcon],svg[ion-md-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M360 64H152c-22.002 0-40 17.998-40 40v344l144-64 144 64V104c0-22.002-17.998-40-40-40z" fill="currentColor"></svg:path>`,
})
export class IonMdBookmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBookmarksIcon],svg[ion-md-bookmarks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M405.2 64h-21c15 5.7 22.8 20.6 22.8 42.7v298.7c0 22.1-7 37.3-22.8 42.7h21c23.7 0 42.8-19.2 42.8-42.7V106.7c0-23.5-19.1-42.7-42.8-42.7z" fill="currentColor"></svg:path><svg:path d="M345.5 64.2c-1.4-.1-2.8-.2-4.2-.2H106.7C83.2 64 64 83.2 64 106.7v298.7c0 23.5 19.2 42.7 42.7 42.7h234.7c1.4 0 2.8-.1 4.2-.2 21.5-2.1 38.5-20.4 38.5-42.5V106.7c-.1-22.1-17.1-40.4-38.6-42.5zM208 256l-56-32-56 32V96h112v160z" fill="currentColor"></svg:path>`,
})
export class IonMdBookmarksIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBowtieIcon],svg[ion-md-bowtie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M276 304h-40c-15.4 0-28-12.6-28-28v-40c0-15.4 12.6-28 28-28h40c15.4 0 28 12.6 28 28v40c0 15.4-12.6 28-28 28z" fill="currentColor"></svg:path><svg:path d="M176 280v-48c0-18.2 8.7-34.4 22.2-44.6C192 160 96 96 64 96c-17.6 0-32 14.4-32 32v256c0 17.6 14.3 32 32 32 32 0 128-64 134.2-91.4-13.5-10.2-22.2-26.4-22.2-44.6z" fill="currentColor"></svg:path><svg:path d="M448 96c-32 0-128 64-134.2 91.4 13.5 10.2 22.2 26.4 22.2 44.6v48c0 18.2-8.7 34.4-22.2 44.6C320 352 416 416 448 416c17.7 0 32-14.4 32-32V128c0-17.6-14.4-32-32-32z" fill="currentColor"></svg:path>`,
})
export class IonMdBowtieIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBriefcaseIcon],svg[ion-md-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 144v-39.6C352 82 334 64 311.6 64H200.4C178 64 160 82 160 104.4V144H48v263.6C48 430 66 448 88.4 448h335.2c22.4 0 40.4-18 40.4-40.4V144H352zm-40 0H200v-40h112v40z" fill="currentColor"></svg:path>`,
})
export class IonMdBriefcaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBrowsersIcon],svg[ion-md-browsers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M424 64H88c-26.6 0-48 21.6-48 48v288c0 26.4 21.4 48 48 48h336c26.4 0 48-21.6 48-48V112c0-26.4-21.4-48-48-48zm0 336H88V176h336v224z" fill="currentColor"></svg:path>`,
})
export class IonMdBrowsersIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBrushIcon],svg[ion-md-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M149.9 302.2c-39.1 0-70.7 31-70.7 69.3 0 30.3-27.3 46.2-47.2 46.2C53.7 446 90.7 464 126.3 464c52.1 0 94.3-41.4 94.3-92.4 0-38.4-31.6-69.4-70.7-69.4zM473.1 85.7l-31.6-31c-9.2-9-24-9-33.2 0L197 261.8l64.8 63.5 211.2-207c9.3-9 9.3-23.6.1-32.6z" fill="currentColor"></svg:path>`,
})
export class IonMdBrushIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBugIcon],svg[ion-md-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 160h-67.4c-10.8-18.7-25.7-34.8-43.7-47L376 73.8 342.2 40l-52.1 52.1C279 89.4 267.8 88 256 88s-23 1.4-33.8 4.1L169.8 40 136 73.8l38.9 39.1c-17.8 12.2-32.6 28.3-43.4 47H64v48h50.2c-1.2 7.9-2.2 15.8-2.2 24v24H64v48h48v24c0 8.2 1 16.1 2.2 24H64v48h67.4c25 43 71.3 72 124.6 72s99.6-29 124.6-72H448v-48h-50.2c1.2-7.9 2.2-15.8 2.2-24v-24h48v-48h-48v-24c0-8.2-1-16.1-2.2-24H448V160z" fill="currentColor"></svg:path>`,
})
export class IonMdBugIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBuildIcon],svg[ion-md-build-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M474.1 398.2L289.1 212c18.3-47 8.1-102.3-30.5-141.1C217.9 30 156.9 21.8 108.1 44.3l87.4 88-61 61.4-89.5-88c-24.3 49-14.1 110.4 26.5 151.3 38.6 38.9 93.5 49.1 140.3 30.7l185 186.2c8.1 8.2 20.3 8.2 28.5 0l46.8-47c10.2-8.3 10.2-22.6 2-28.7z" fill="currentColor"></svg:path>`,
})
export class IonMdBuildIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBulbIcon],svg[ion-md-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M192 428c0 10.6 8.6 20 20 20h88c11.4 0 20-9.4 20-20v-18H192v18zm64-364c-79.7 0-144 59.9-144 134 0 45.7 24.1 86.2 61.4 110.6V352c0 10.6 9.3 19.2 20.6 19.2h123.9c11.4 0 20.6-8.6 20.6-19.2v-43.4C375.9 284.2 400 243.7 400 198c0-74.1-64.3-134-144-134z" fill="currentColor"></svg:path>`,
})
export class IonMdBulbIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBusIcon],svg[ion-md-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M80 352c0 19.198 13.864 24.531 26.667 36.271v38.396c0 11.729 9.599 21.334 21.333 21.334h21.333c11.734 0 21.334-9.604 21.334-21.334v-21.333h170.666v21.333c0 11.729 9.604 21.334 21.334 21.334H384c11.729 0 21.333-9.604 21.333-21.334v-38.396C418.136 376.531 432 370.136 432 352V148.334C432 73.667 349.864 64 256 64S80 73.667 80 148.334V352zm80 15.989c-18.136 0-32-13.864-32-32 0-18.135 13.864-32 32-32s32 13.865 32 32c0 18.136-13.864 32-32 32zm192 0c-18.136 0-32-13.864-32-32 0-18.135 13.864-32 32-32s32 13.865 32 32c0 18.136-13.864 32-32 32zm32-122.656H128V138.667h256v106.666z" fill="currentColor"></svg:path>`,
})
export class IonMdBusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdBusinessIcon],svg[ion-md-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M261 149.3V64H48v384h416V149.3H261zm-127.8 256H90.6v-42.7h42.6v42.7zm0-85.3H90.6v-42.7h42.6V320zm0-85.3H90.6V192h42.6v42.7zm0-85.4H90.6v-42.7h42.6v42.7zm85.2 256h-42.6v-42.7h42.6v42.7zm0-85.3h-42.6v-42.7h42.6V320zm0-85.3h-42.6V192h42.6v42.7zm0-85.4h-42.6v-42.7h42.6v42.7zm203 256H261v-42.7h42.6V320H261v-42.7h42.6v-42.7H261V192h160.4v213.3zm-37.6-170.6h-42.6v42.7h42.6v-42.7zm0 85.3h-42.6v42.7h42.6V320z" fill="currentColor"></svg:path>`,
})
export class IonMdBusinessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCafeIcon],svg[ion-md-cafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M48 400h368v48H48z" fill="currentColor"></svg:path><svg:path d="M424 64H80v224c0 44 36 80 80 80h144c44 0 80-36 80-80v-64h40c22 0 40-18 40-40v-80c0-22-18-40-40-40zm0 112h-40v-64h40v64z" fill="currentColor"></svg:path>`,
})
export class IonMdCafeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCalculatorIcon],svg[ion-md-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M368 48H144c-26.6 0-48 21.6-48 48v320c0 26.4 21.4 48 48 48h224c26.4 0 48-21.6 48-48V96c0-26.4-21.4-48-48-48zM200 416h-48v-48h48v48zm0-88h-48v-48h48v48zm0-88h-48v-48h48v48zm80 176h-48v-48h48v48zm0-88h-48v-48h48v48zm0-88h-48v-48h48v48zm80 176h-48V280h48v136zm0-176h-48v-48h48v48zm0-96H152V96h208v48z" fill="currentColor"></svg:path>`,
})
export class IonMdCalculatorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCalendarIcon],svg[ion-md-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M368.005 272h-96v96h96v-96zm-32-208v32h-160V64h-48v32h-24.01c-22.002 0-40 17.998-40 40v272c0 22.002 17.998 40 40 40h304.01c22.002 0 40-17.998 40-40V136c0-22.002-17.998-40-40-40h-24V64h-48zm72 344h-304.01V196h304.01v212z" fill="currentColor"></svg:path>`,
})
export class IonMdCalendarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCallIcon],svg[ion-md-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M426.666 330.667a250.385 250.385 0 01-75.729-11.729c-7.469-2.136-16-1.073-21.332 5.333l-46.939 46.928c-60.802-30.928-109.864-80-140.802-140.803l46.939-46.927c5.332-5.333 7.462-13.864 5.332-21.333-8.537-24.531-12.802-50.136-12.802-76.803C181.333 73.604 171.734 64 160 64H85.333C73.599 64 64 73.604 64 85.333 64 285.864 226.136 448 426.666 448c11.73 0 21.334-9.604 21.334-21.333V352c0-11.729-9.604-21.333-21.334-21.333z" fill="currentColor"></svg:path>`,
})
export class IonMdCallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCameraIcon],svg[ion-md-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="280" r="63" fill="currentColor"></svg:circle><svg:path d="M440 96h-88l-32-32H192l-32 32H72c-22.092 0-40 17.908-40 40v272c0 22.092 17.908 40 40 40h368c22.092 0 40-17.908 40-40V136c0-22.092-17.908-40-40-40zM256 392c-61.855 0-112-50.145-112-112s50.145-112 112-112 112 50.145 112 112-50.145 112-112 112z" fill="currentColor"></svg:path>`,
})
export class IonMdCameraIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCarIcon],svg[ion-md-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M403.208 117.333c-4.271-12.802-16-21.333-29.875-21.333H138.667c-13.875 0-25.604 8.531-29.875 21.333L64 234.667v160C64 406.396 73.604 416 85.333 416h21.334c11.729 0 21.333-9.604 21.333-21.333V384h256v10.667c0 11.729 9.604 21.333 21.333 21.333h21.334c11.729 0 21.333-9.604 21.333-21.333v-160l-44.792-117.334zM138.667 320c-18.125 0-32-13.865-32-32s13.875-32 32-32 32 13.866 32 32-13.875 32-32 32zm234.666 0c-18.125 0-32-13.865-32-32s13.875-32 32-32 32 13.866 32 32-13.875 32-32 32zM106.667 213.333l32-85.333h234.666l32 85.333H106.667z" fill="currentColor"></svg:path>`,
})
export class IonMdCarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCardIcon],svg[ion-md-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M435.2 80H76.8c-24.9 0-44.6 19.6-44.6 44L32 388c0 24.4 19.9 44 44.8 44h358.4c24.9 0 44.8-19.6 44.8-44V124c0-24.4-19.9-44-44.8-44zm0 308H76.8V256h358.4v132zm0-220H76.8v-44h358.4v44z" fill="currentColor"></svg:path>`,
})
export class IonMdCardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCartIcon],svg[ion-md-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M169.6 377.6c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6s41.601-18.718 41.601-41.6c-.001-22.884-18.72-41.601-41.601-41.601zM48 51.2v41.6h41.6l74.883 151.682-31.308 50.954c-3.118 5.2-5.2 12.482-5.2 19.765 0 27.85 19.025 41.6 44.825 41.6H416v-40H177.893c-3.118 0-5.2-2.082-5.2-5.2 0-1.036 2.207-5.2 2.207-5.2l20.782-32.8h154.954c15.601 0 29.128-8.317 36.4-21.836l74.882-128.8c1.237-2.461 2.082-6.246 2.082-10.399 0-11.446-9.364-19.765-20.8-19.765H135.364L115.6 51.2H48zm326.399 326.4c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6S416 442.082 416 419.2c0-22.883-18.719-41.6-41.601-41.6z" fill="currentColor"></svg:path>`,
})
export class IonMdCartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
