import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionAccessibilityOutlineIcon],svg[ion-accessibility-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="56" r="40" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M204.23 274.44c2.9-18.06 4.2-35.52-.5-47.59c-4-10.38-12.7-16.19-23.2-20.15L88 176.76c-12-4-23.21-10.7-24-23.94c-1-17 14-28 29-24c0 0 88 31.14 163 31.14s162-31 162-31c18-5 30 9 30 23.79c0 14.21-11 19.21-24 23.94l-88 31.91c-8 3-21 9-26 18.18c-6 10.75-5 29.53-2.1 47.59l5.9 29.63l37.41 163.9c2.8 13.15-6.3 25.44-19.4 27.74S308 489 304.12 476.28l-37.56-115.93q-2.71-8.34-4.8-16.87L256 320l-5.3 21.65q-2.52 10.35-5.8 20.48L208 476.18c-4 12.85-14.5 21.75-27.6 19.46s-22.4-15.59-19.46-27.74l37.39-163.83Z"></svg:path>`,
})
export class IonAccessibilityOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAirplaneOutlineIcon],svg[ion-airplane-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M407.72 224c-3.4 0-14.79.1-18 .3l-64.9 1.7a1.83 1.83 0 0 1-1.69-.9L193.55 67.56a9 9 0 0 0-6.66-3.56H160l73 161a2.35 2.35 0 0 1-2.26 3.35l-121.69 1.8a8.06 8.06 0 0 1-6.6-3.1l-37-45c-3-3.9-8.62-6-13.51-6H33.08c-1.29 0-1.1 1.21-.75 2.43l19.84 71.42a16.3 16.3 0 0 1 0 11.9L32.31 333c-.59 1.95-.52 3 1.77 3H52c8.14 0 9.25-1.06 13.41-6.3l37.7-45.7a8.19 8.19 0 0 1 6.6-3.1l120.68 2.7a2.7 2.7 0 0 1 2.43 3.74L160 448h26.64a9 9 0 0 0 6.65-3.55L323.14 287c.39-.6 2-.9 2.69-.9l63.9 1.7c3.3.2 14.59.3 18 .3C452 288.1 480 275.93 480 256s-27.88-32-72.28-32"></svg:path>`,
})
export class IonAirplaneOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAddCircleOutlineIcon],svg[ion-add-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v160m80-80H176"></svg:path>`,
})
export class IonAddCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAlarmOutlineIcon],svg[ion-alarm-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M416.07 272a160 160 0 1 0-160 160a160 160 0 0 0 160-160ZM142.12 91.21A46.67 46.67 0 0 0 112 80l-2.79.08C83.66 81.62 64 104 64.07 131c0 13.21 4.66 19.37 10.88 27.23a4.55 4.55 0 0 0 3.24 1.77h.88a3.23 3.23 0 0 0 2.54-1.31L142.38 99a5.38 5.38 0 0 0 1.55-4a5.26 5.26 0 0 0-1.81-3.79Zm227.76 0A46.67 46.67 0 0 1 400 80l2.79.08C428.34 81.62 448 104 447.93 131c0 13.21-4.66 19.37-10.88 27.23a4.55 4.55 0 0 1-3.24 1.76h-.88a3.23 3.23 0 0 1-2.54-1.31L369.62 99a5.38 5.38 0 0 1-1.55-4a5.26 5.26 0 0 1 1.81-3.79Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256.07 160v112h-80m240 160l-40-40m-280 40l40-40"></svg:path>`,
})
export class IonAlarmOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAlbumsOutlineIcon],svg[ion-albums-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="384" height="256" x="64" y="176" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28.87" ry="28.87"></svg:rect><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M144 80h224m-256 48h288"></svg:path>`,
})
export class IonAlbumsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAddOutlineIcon],svg[ion-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288m144-144H112"></svg:path>`,
})
export class IonAddOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAlertCircleOutlineIcon],svg[ion-alert-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 6"></svg:path><svg:path fill="currentColor" d="M256 367.91a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class IonAlertCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAlertOutlineIcon],svg[ion-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 80c-8.66 0-16.58 7.36-16 16l8 216a8 8 0 0 0 8 8h0a8 8 0 0 0 8-8l8-216c.58-8.64-7.34-16-16-16"></svg:path><svg:circle cx="256" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class IonAlertOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAmericanFootballOutlineIcon],svg[ion-american-football-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="256" cy="256" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="267.57" ry="173.44" transform="rotate(-45 256 256.002)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M334.04 177.96L177.96 334.04M278.3 278.3l-44.6-44.6m89.19 0l-44.59-44.59m178.38 22.29L300.6 55.32m-89.2 401.36L55.32 300.6m178.38 22.29l-44.59-44.59"></svg:path>`,
})
export class IonAmericanFootballOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAnalyticsOutlineIcon],svg[ion-analytics-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m344 280l88-88m-200 24l64 64M80 320l104-104"></svg:path><svg:circle cx="456" cy="168" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="320" cy="304" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="208" cy="192" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="56" cy="344" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class IonAnalyticsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAndroidFavoriteOutlineIcon],svg[ion-android-favorite-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M349.6 64c-36.4 0-70.718 16.742-93.6 43.947C233.117 80.742 198.8 64 162.4 64 97.918 64 48 114.221 48 179.095c0 79.516 70.718 143.348 177.836 241.694L256 448l30.164-27.211C393.281 322.442 464 258.61 464 179.095 464 114.221 414.082 64 349.6 64zm-80.764 329.257l-4.219 3.873-8.617 7.773-8.616-7.772-4.214-3.869c-50.418-46.282-93.961-86.254-122.746-121.994C92.467 236.555 80 208.128 80 179.095c0-22.865 8.422-43.931 23.715-59.316C118.957 104.445 139.798 96 162.4 96c26.134 0 51.97 12.167 69.11 32.545L256 157.661l24.489-29.116C297.63 108.167 323.465 96 349.6 96c22.603 0 43.443 8.445 58.686 23.778C423.578 135.164 432 156.229 432 179.095c0 29.033-12.467 57.459-40.422 92.171-28.784 35.74-72.325 75.709-122.742 121.991z" fill="currentColor"></svg:path>`,
})
export class IonAndroidFavoriteOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionApertureOutlineIcon],svg[ion-aperture-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M360 94.59V296m83.13-83.13L296 360m121.41 0H216m83.13 83.13l-144-144M152 416V216m-83.13 83.13l144-144M94.59 152H288m-75.13-83.13L360 216"></svg:path>`,
})
export class IonApertureOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAppsOutlineIcon],svg[ion-apps-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="80" height="80" x="64" y="64" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" rx="40" ry="40"></svg:rect><svg:rect width="80" height="80" x="216" y="64" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" rx="40" ry="40"></svg:rect><svg:rect width="80" height="80" x="368" y="64" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" rx="40" ry="40"></svg:rect><svg:rect width="80" height="80" x="64" y="216" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" rx="40" ry="40"></svg:rect><svg:rect width="80" height="80" x="216" y="216" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" rx="40" ry="40"></svg:rect><svg:rect width="80" height="80" x="368" y="216" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" rx="40" ry="40"></svg:rect><svg:rect width="80" height="80" x="64" y="368" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" rx="40" ry="40"></svg:rect><svg:rect width="80" height="80" x="216" y="368" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" rx="40" ry="40"></svg:rect><svg:rect width="80" height="80" x="368" y="368" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" rx="40" ry="40"></svg:rect>`,
})
export class IonAppsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArchiveOutlineIcon],svg[ion-archive-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 152v256a40.12 40.12 0 0 0 40 40h272a40.12 40.12 0 0 0 40-40V152"></svg:path><svg:rect width="416" height="80" x="48" y="64" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m320 304l-64 64l-64-64m64 41.89V224"></svg:path>`,
})
export class IonArchiveOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowBackCircleOutlineIcon],svg[ion-arrow-back-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M249.38 336L170 256l79.38-80m-68.35 80H342"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class IonArrowBackCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowBackOutlineIcon],svg[ion-arrow-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"></svg:path>`,
})
export class IonArrowBackOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowDownCircleOutlineIcon],svg[ion-arrow-down-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 262.62L256 342l80-79.38m-80 68.35V170"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"></svg:path>`,
})
export class IonArrowDownCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowDownLeftBoxOutlineIcon],svg[ion-arrow-down-left-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M123.636 269.236V90.546A42.545 42.545 0 0 1 166.182 48h255.273A42.546 42.546 0 0 1 464 90.545v255.273a42.54 42.54 0 0 1-42.545 42.546H242.764M48 331.636V464h132.364M296 216L48 464"></svg:path>`,
})
export class IonArrowDownLeftBoxOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowDownOutlineIcon],svg[ion-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 268l144 144l144-144M256 392V100"></svg:path>`,
})
export class IonArrowDownOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowDownRightBoxOutlineIcon],svg[ion-arrow-down-right-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M269.236 388.364H90.546A42.546 42.546 0 0 1 48 345.818V90.545A42.545 42.545 0 0 1 90.545 48h255.273a42.543 42.543 0 0 1 42.546 42.546v178.69M331.636 464H464V331.636M216 216l248 248"></svg:path>`,
})
export class IonArrowDownRightBoxOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowForwardCircleOutlineIcon],svg[ion-arrow-forward-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M262.62 336L342 256l-79.38-80m68.35 80H170"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 448c106 0 192-86 192-192S362 64 256 64S64 150 64 256s86 192 192 192Z"></svg:path>`,
})
export class IonArrowForwardCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowForwardOutlineIcon],svg[ion-arrow-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m268 112l144 144l-144 144m124-144H100"></svg:path>`,
})
export class IonArrowForwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowRedoCircleOutlineIcon],svg[ion-arrow-redo-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M266.91 327.74v-37.32c-57.07 0-84.51 13.47-108.58 38.68c-5.4 5.65-15 1.32-14.29-6.43c5.45-61.45 34.14-117.09 122.87-117.09v-37.32a8.32 8.32 0 0 1 14-6L365.42 242a8.2 8.2 0 0 1 0 11.94L281 333.71a8.32 8.32 0 0 1-14.09-5.97"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64S64 150 64 256Z"></svg:path>`,
})
export class IonArrowRedoCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowRedoOutlineIcon],svg[ion-arrow-redo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96Z"></svg:path>`,
})
export class IonArrowRedoOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowUndoCircleOutlineIcon],svg[ion-arrow-undo-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.09 327.74v-37.32c57.07 0 84.51 13.47 108.58 38.68c5.4 5.65 15 1.32 14.29-6.43c-5.45-61.45-34.14-117.09-122.87-117.09v-37.32a8.32 8.32 0 0 0-14.05-6L146.58 242a8.2 8.2 0 0 0 0 11.94L231 333.71a8.32 8.32 0 0 0 14.09-5.97"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"></svg:path>`,
})
export class IonArrowUndoCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowUndoOutlineIcon],svg[ion-arrow-undo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M240 424v-96c116.4 0 159.39 33.76 208 96c0-119.23-39.57-240-208-240V88L64 256Z"></svg:path>`,
})
export class IonArrowUndoOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowUpCircleOutlineIcon],svg[ion-arrow-up-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 249.38L256 170l80 79.38m-80-68.35V342"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class IonArrowUpCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowUpLeftBoxOutlineIcon],svg[ion-arrow-up-left-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M242.764 123.636h178.691A42.547 42.547 0 0 1 464 166.182v255.273A42.546 42.546 0 0 1 421.455 464H166.182a42.54 42.54 0 0 1-42.546-42.545V242.764M180.364 48H48v132.364M296 296L48 48"></svg:path>`,
})
export class IonArrowUpLeftBoxOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowUpOutlineIcon],svg[ion-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 244l144-144l144 144M256 120v292"></svg:path>`,
})
export class IonArrowUpOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowUpRightBoxOutlineIcon],svg[ion-arrow-up-right-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M388.364 242.764v178.691A42.547 42.547 0 0 1 345.818 464H90.546A42.544 42.544 0 0 1 48 421.455V166.182a42.543 42.543 0 0 1 42.546-42.546h178.69M464 180.364V48H331.636M216 296L464 48"></svg:path>`,
})
export class IonArrowUpRightBoxOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAtCircleOutlineIcon],svg[ion-at-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448.08 256.08c0-106-86-192-192-192s-192 86-192 192s86 192 192 192s192-85.97 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="28" d="M300.81 358.29c-20.83 7.42-34.05 9.59-54.19 9.59c-61.17 0-106.39-50.07-101-111.84S205 144.21 266.14 144.21c68.92 0 106.79 45.55 101.47 106.55c-4 45.54-32.8 58.66-47.89 56c-14.2-2.55-25.92-15.52-23.75-40.35l5.62-44.66c-7.58-9.17-28.11-18-49.93-14.54C231.77 210.3 209 228 206.56 256s14.49 50.84 39.93 50.84s47.86-18.39 50.69-50.84"></svg:path>`,
})
export class IonAtCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAtOutlineIcon],svg[ion-at-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 254.27c-4.5 51-40.12 80-80.55 80s-67.34-35.82-63.45-80s37.12-80 77.55-80s70.33 36 66.45 80"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M319.77 415.77c-28.56 12-47.28 14.5-79.28 14.5c-97.2 0-169-78.8-160.49-176s94.31-176 191.51-176C381 78.27 441.19 150 432.73 246c-6.31 71.67-52.11 92.32-76.09 88.07c-22.56-4-41.18-24.42-37.74-63.5l8.48-96.25"></svg:path>`,
})
export class IonAtOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAttachOutlineIcon],svg[ion-attach-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M216.08 192v143.85a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 1 0 191 0V159.74"></svg:path>`,
})
export class IonAttachOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBackspaceOutlineIcon],svg[ion-backspace-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M135.19 390.14a28.8 28.8 0 0 0 21.68 9.86h246.26A29 29 0 0 0 432 371.13V140.87A29 29 0 0 0 403.13 112H156.87a28.84 28.84 0 0 0-21.67 9.84L46.33 256l88.86 134.11Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336.67 192.33L206.66 322.34m130.01 0L206.66 192.33m130.01 0L206.66 322.34m130.01 0L206.66 192.33"></svg:path>`,
})
export class IonBackspaceOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBagAddOutlineIcon],svg[ion-bag-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 256v128m64-64H192M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16Zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"></svg:path>`,
})
export class IonBagAddOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBagCheckOutlineIcon],svg[ion-bag-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m320 264l-89.6 112l-38.4-44.88"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16Zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"></svg:path>`,
})
export class IonBagCheckOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBagHandleOutlineIcon],svg[ion-bag-handle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16Zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 224v16a96 96 0 0 0 96 96h0a96 96 0 0 0 96-96v-16"></svg:path>`,
})
export class IonBagHandleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBagOutlineIcon],svg[ion-bag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16Zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"></svg:path>`,
})
export class IonBagOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBagRemoveOutlineIcon],svg[ion-bag-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320H192M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16Zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"></svg:path>`,
})
export class IonBagRemoveOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBalloonOutlineIcon],svg[ion-balloon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M414.11 153.82C429.66 264.4 345.85 357.09 282.54 366s-169.48-57.5-185-167.68a159.82 159.82 0 1 1 316.53-44.49Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M236.06 308.05c-32.83-13-67.08-43.1-82.27-85.46M367.7 495.78c-32.83-13-63.31-40.06-78.5-82.41"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m266.71 368.21l-9.17 49.61l63.31-8.9l-22.49-45.16z"></svg:path>`,
})
export class IonBalloonOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBanOutlineIcon],svg[ion-ban-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="m108.92 108.92l294.16 294.16"></svg:path>`,
})
export class IonBanOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBandageOutlineIcon],svg[ion-bandage-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="560.87" height="176.25" x="-24.43" y="167.88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="88.12" ry="88.12" transform="rotate(-45 256 256.002)"></svg:rect><svg:rect width="176" height="196" x="169.41" y="156.59" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="32" ry="32" transform="rotate(45 257.409 254.582)"></svg:rect><svg:circle cx="256" cy="208" r="16" fill="currentColor"></svg:circle><svg:circle cx="304" cy="256" r="16" fill="currentColor"></svg:circle><svg:circle cx="208" cy="256" r="16" fill="currentColor"></svg:circle><svg:circle cx="256" cy="304" r="16" fill="currentColor"></svg:circle>`,
})
export class IonBandageOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBarChartOutlineIcon],svg[ion-bar-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 32v432a16 16 0 0 0 16 16h432"></svg:path><svg:rect width="80" height="192" x="96" y="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="20" ry="20"></svg:rect><svg:rect width="80" height="240" x="240" y="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="20" ry="20"></svg:rect><svg:rect width="80" height="304" x="383.64" y="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="20" ry="20"></svg:rect>`,
})
export class IonBarChartOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBarbellOutlineIcon],svg[ion-barbell-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 256h416"></svg:path><svg:rect width="32" height="256" x="384" y="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect><svg:rect width="32" height="256" x="96" y="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect><svg:rect width="16" height="128" x="32" y="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="8" ry="8"></svg:rect><svg:rect width="16" height="128" x="464" y="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="8" ry="8"></svg:rect>`,
})
export class IonBarbellOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBarcodeOutlineIcon],svg[ion-barcode-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m384 400.33l35.13-.33A29 29 0 0 0 448 371.13V140.87A29 29 0 0 0 419.13 112l-35.13.33M128 112l-36.8.33c-15.88 0-27.2 13-27.2 28.87v230.27c0 15.87 11.32 28.86 27.2 28.86L128 400m256-208v128m-64-160v192m-64-176v160m-64-176v192m-64-160v128"></svg:path>`,
})
export class IonBarcodeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBaseballOutlineIcon],svg[ion-baseball-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m294.25 108.6l-60.57 17.59m83.45 29.92l-51.5 36.4m90.26 2.36l-36.4 51.5m83.91-28.62l-17.59 60.57"></svg:path><svg:circle cx="256" cy="256" r="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432.94 255.05a192 192 0 0 1-176.31-180.7M108.54 294.31l17.59-60.57m29.92 83.45l36.4-51.5m2.36 90.26l51.5-36.4m-28.62 83.91l60.57-17.59M255 433.61A192 192 0 0 0 74.29 256.69"></svg:path>`,
})
export class IonBaseballOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBasketOutlineIcon],svg[ion-basket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M68.4 192A20.38 20.38 0 0 0 48 212.2a17.9 17.9 0 0 0 .8 5.5L100.5 400a40.46 40.46 0 0 0 39.1 29.5h232.8a40.88 40.88 0 0 0 39.3-29.5l51.7-182.3l.6-5.5a20.38 20.38 0 0 0-20.4-20.2zm193.32 160.07A42.07 42.07 0 1 1 304 310a42.27 42.27 0 0 1-42.28 42.07Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="m160 192l96-128l96 128"></svg:path>`,
})
export class IonBasketOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBasketballOutlineIcon],svg[ion-basketball-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432.94 255.05a192 192 0 0 1-176.31-180.7M255 433.61A192 192 0 0 0 74.29 256.69m45.95-136.45l271.52 271.52m-271.52 0l271.52-271.52"></svg:path>`,
})
export class IonBasketballOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBatteryChargingOutlineIcon],svg[ion-battery-charging-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 322.3V189.7A29.74 29.74 0 0 1 77.7 160h137.44l24.4-32H77.7A61.77 61.77 0 0 0 16 189.7v132.6A61.77 61.77 0 0 0 77.7 384h96.85a22.6 22.6 0 0 1 .26-7.32l.15-.75l.21-.73l6.5-23.2H77.7A29.74 29.74 0 0 1 48 322.3M386.3 128h-98.64a22.7 22.7 0 0 1-.27 7.2l-.15.74l-.21.73l-6.54 23.33H386.3a29.74 29.74 0 0 1 29.7 29.7v132.6a29.74 29.74 0 0 1-29.7 29.7H247l-24.42 32H386.3a61.77 61.77 0 0 0 61.7-61.7V189.7a61.77 61.77 0 0 0-61.7-61.7"></svg:path><svg:path fill="currentColor" d="M162.65 294.16a24.37 24.37 0 0 1-21.56-13a25 25 0 0 1 1.42-25.83l.31-.46l.33-.44L197.62 183H89.69a20 20 0 0 0-20 20v106a20 20 0 0 0 20 20h98.42l9.78-34.86Z"></svg:path><svg:path fill="currentColor" d="m276.07 280.89l27.07-35.49a5.2 5.2 0 0 0 .77-1.91a5 5 0 0 0 .08-.66a5 5 0 0 0-.08-1.29a5.1 5.1 0 0 0-.68-1.75a4.8 4.8 0 0 0-.78-.95a3.5 3.5 0 0 0-.48-.38a4 4 0 0 0-1.11-.55a4.3 4.3 0 0 0-1.31-.2h-61.62l12.12-43.21l3.23-11.5l6.21-22.16l.51-1.84l7.79-27.76a3.5 3.5 0 0 0 .05-.55v-.16c0-.05 0-.26-.05-.38s0-.09 0-.14a2.2 2.2 0 0 0-.17-.45a4 4 0 0 0-.26-.39l-.09-.1a3 3 0 0 0-.25-.23l-.1-.08a3 3 0 0 0-.39-.24a2 2 0 0 0-.41-.14h-.59a2.3 2.3 0 0 0-.45 0a2 2 0 0 0-.42.15l-.13.07l-.3.21l-.11.1a2.4 2.4 0 0 0-.36.41l-18 23.63l-13.14 17.22l-9.85 12.83l-63.71 83.55a6 6 0 0 0-.44.8a4.8 4.8 0 0 0-.35 1.09a4.7 4.7 0 0 0-.08 1.29a4.86 4.86 0 0 0 2 3.71a5 5 0 0 0 .54.31a4.3 4.3 0 0 0 1.89.43h61.62L194.42 380.6a4 4 0 0 0 0 .56v.15a2.3 2.3 0 0 0 .06.38a.6.6 0 0 0 0 .14a2.2 2.2 0 0 0 .17.45a4 4 0 0 0 .26.38l.09.1l.25.24a.4.4 0 0 1 .1.08a2.2 2.2 0 0 0 .39.23a3 3 0 0 0 .41.14h.13a2 2 0 0 0 .33 0h.13a2.3 2.3 0 0 0 .45-.06a2 2 0 0 0 .41-.16l.13-.07l.3-.21l.11-.09a2.4 2.4 0 0 0 .36-.41L221.82 352l17.53-23Z"></svg:path><svg:path fill="currentColor" d="m319.5 256.93l-.46.6L264.51 329h109.8a20 20 0 0 0 20-20V203a20 20 0 0 0-20-20H274.05l-9.74 34.73h35.24A24.35 24.35 0 0 1 321 230.5a25.21 25.21 0 0 1-1 25.79ZM480 202.67a16 16 0 0 0-16 16v74.66a16 16 0 0 0 32 0v-74.66a16 16 0 0 0-16-16"></svg:path>`,
})
export class IonBatteryChargingOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBatteryDeadOutlineIcon],svg[ion-battery-dead-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="400" height="224" x="31" y="144" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" rx="45.7" ry="45.7"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M479 218.67v74.66"></svg:path>`,
})
export class IonBatteryDeadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBatteryFullOutlineIcon],svg[ion-battery-full-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="400" height="224" x="32" y="144" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" rx="45.7" ry="45.7"></svg:rect><svg:rect width="292.63" height="114.14" x="85.69" y="198.93" fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M480 218.67v74.66"></svg:path>`,
})
export class IonBatteryFullOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBatteryHalfOutlineIcon],svg[ion-battery-half-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="400" height="224" x="32" y="144" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" rx="45.7" ry="45.7"></svg:rect><svg:rect width="154.31" height="114.13" x="85.69" y="198.93" fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M480 218.67v74.66"></svg:path>`,
})
export class IonBatteryHalfOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBeakerOutlineIcon],svg[ion-beaker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M445.2 48.05L398 48H128c-54.3 0-64 35.7-64 48c30.3 4.2 48 8 48 40v264a64 64 0 0 0 64 64h192a64 64 0 0 0 64-64V96c0-19 11.5-38.35 12.6-40c1.2-1.9 3.4-4.4 3.4-5.5s-.3-2.45-2.8-2.45M112 176h320"></svg:path>`,
})
export class IonBeakerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBedOutlineIcon],svg[ion-bed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M384 240H96V136a40.12 40.12 0 0 1 40-40h240a40.12 40.12 0 0 1 40 40v104ZM48 416V304a64.19 64.19 0 0 1 64-64h288a64.19 64.19 0 0 1 64 64v112"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 416v-8a24.07 24.07 0 0 1 24-24h368a24.07 24.07 0 0 1 24 24v8M112 240v-16a32.09 32.09 0 0 1 32-32h80a32.09 32.09 0 0 1 32 32v16m0 0v-16a32.09 32.09 0 0 1 32-32h80a32.09 32.09 0 0 1 32 32v16"></svg:path>`,
})
export class IonBedOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBeerOutlineIcon],svg[ion-beer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 200v240a40.12 40.12 0 0 1-40 40H136a40.12 40.12 0 0 1-40-40V224"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M352 224h40a56.16 56.16 0 0 1 56 56v80a56.16 56.16 0 0 1-56 56h-40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 256v160m64-160v160M160 256v160m160-304a48 48 0 0 1 0 96c-13.25 0-29.31-7.31-38-16H160c-8 22-27 32-48 32a48 48 0 0 1 0-96a47.9 47.9 0 0 1 26 9"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M91.86 132.43a40 40 0 1 1 60.46-52S160 91 160 96m-14.17-31.29C163.22 44.89 187.57 32 216 32c52.38 0 94 42.84 94 95.21a95 95 0 0 1-1.67 17.79"></svg:path>`,
})
export class IonBeerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBicycleOutlineIcon],svg[ion-bicycle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M388 288a76 76 0 1 0 76 76a76.24 76.24 0 0 0-76-76Zm-264 0a76 76 0 1 0 76 76a76.24 76.24 0 0 0-76-76Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 360v-86l-64-42l80-88l40 72h56"></svg:path><svg:path fill="currentColor" d="M320 136a31.89 31.89 0 0 0 32-32.1A31.55 31.55 0 0 0 320.2 72a32 32 0 1 0-.2 64"></svg:path>`,
})
export class IonBicycleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBinocularsOutlineIcon],svg[ion-binoculars-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><svg:circle cx="392" cy="344" r="88"></svg:circle><svg:circle cx="120" cy="344" r="88"></svg:circle><svg:path d="M208 344V128c0-26.5-16-48-44-48c-35 0-46.5 21.5-57 48c0 0-48.5 127.833-71 189.5M208 184s16.5-8 48-8s48 8 48 8m-96 88s16.5-8 48-8s48 8 48 8m0 72V128c0-26.5 16-48 44-48c35 0 46.5 21.5 57 48c0 0 48.5 127.833 71 189.5"></svg:path></svg:g>`,
})
export class IonBinocularsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBluetoothOutlineIcon],svg[ion-bluetooth-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m144 352l224-192L256 48v416l112-112l-224-192"></svg:path>`,
})
export class IonBluetoothOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBoatOutlineIcon],svg[ion-boat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M461.93 261.05c-2-4.76-6.71-7.83-11.67-9.49l-187.18-74.48a23.8 23.8 0 0 0-14.17 0l-187 74.52c-5 1.56-9.83 4.77-11.81 9.53s-2.94 9.37-1 15.08l46.53 119.15a7.46 7.46 0 0 0 7.47 4.64c26.69-1.68 50.31-15.23 68.38-32.5a7.66 7.66 0 0 1 10.49 0C201.29 386 227 400 256 400s54.56-14 73.88-32.54a7.67 7.67 0 0 1 10.5 0c18.07 17.28 41.69 30.86 68.38 32.54a7.45 7.45 0 0 0 7.46-4.61l46.7-119.16c1.98-4.78.99-10.41-.99-15.18Z"></svg:path><svg:path fill="currentColor" d="M416 473.14a6.84 6.84 0 0 0-3.56-6c-27.08-14.55-51.77-36.82-62.63-48a10.05 10.05 0 0 0-12.72-1.51c-50.33 32.42-111.61 32.44-161.95.05a10.09 10.09 0 0 0-12.82 1.56c-10.77 11.28-35.19 33.3-62.43 47.75a7.15 7.15 0 0 0-3.89 5.73a6.73 6.73 0 0 0 7.92 7.15c20.85-4.18 41-13.68 60.2-23.83a8.71 8.71 0 0 1 8-.06A185.14 185.14 0 0 0 340 456a8.82 8.82 0 0 1 8.09.06c19.1 10 39.22 19.59 60 23.8a6.72 6.72 0 0 0 7.95-6.71Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 96V72a24.07 24.07 0 0 0-24-24h-80a24.07 24.07 0 0 0-24 24v24m224 137v-89a48.14 48.14 0 0 0-48-48H144a48.14 48.14 0 0 0-48 48v92m160-52.4v212.85"></svg:path>`,
})
export class IonBoatOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBodyOutlineIcon],svg[ion-body-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="56" r="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="m199.3 295.62l-30.4 172.2a24 24 0 0 0 19.5 27.8a23.76 23.76 0 0 0 27.6-19.5l21-119.9v.2s5.2-32.5 17.5-32.5h3.1c12.5 0 17.5 32.5 17.5 32.5v-.1l21 119.9a23.92 23.92 0 1 0 47.1-8.4l-30.4-172.2l-4.9-29.7c-2.9-18.1-4.2-47.6.5-59.7c4-10.4 14.13-14.2 23.2-14.2H424a24 24 0 0 0 0-48H88a24 24 0 0 0 0 48h92.5c9.23 0 19.2 3.8 23.2 14.2c4.7 12.1 3.4 41.6.5 59.7Z"></svg:path>`,
})
export class IonBodyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBonfireOutlineIcon],svg[ion-bonfire-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M273.38 368.33c-.81-9.23-8.86-16.44-18.55-16.44a18.63 18.63 0 0 0-18.2 14.11l-18.2 88.38a35.8 35.8 0 0 0-.93 7.88c0 19.93 16.68 33.78 37.33 33.78s37.34-13.85 37.34-33.78a36.2 36.2 0 0 0-1.29-9.45Zm137.67 39.53a42 42 0 0 0-5.95-4.35l-69.53-48.59c-6.77-4.25-14-4.13-19.25 1a13.53 13.53 0 0 0-2 17.2l52.5 69a36.6 36.6 0 0 0 4 4.69c9.1 10.17 29.28 10.73 40.37 0c10.94-10.91 10.81-30.35-.14-38.95m52.25-71.98h-70.42c-4.55 0-8.88 3.35-8.88 8.16s2.95 7.85 6.92 9.16l66.43 20.55C467 376 480 367.4 480 356.66c0-13.66-7.6-20.78-16.7-20.78M128.22 344c0-5-4.55-8.16-9.45-8.16H48.35c-8.87 0-16.35 9.58-16.35 20.32S44.62 376 54.3 373.75l67.43-20.55c4.39-1.31 6.49-4.2 6.49-9.2m48.33 11L107 403.38a32.3 32.3 0 0 0-6 4.35a26.33 26.33 0 0 0 0 38.56a29.39 29.39 0 0 0 40.36 0a31 31 0 0 0 4-4.68L197.9 373c3.5-5.58 2.92-12.49-2-17.06a15 15 0 0 0-19.35-.94"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M368 125.09c0-55.7-49.22-89.16-94.2-93.06a8 8 0 0 0-8.69 7.71c-3.12 76-109.38 110.69-119.87 178.68c-7 45.4 16.65 72.37 34.31 85.78a15.94 15.94 0 0 0 23.93-5.62c22.5-45.86 74.33-63.49 109.72-85.94c42.88-27.2 54.8-56.44 54.8-87.55Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M240 95.7c-12.82-23-30.51-31-59.16-31.63a3.86 3.86 0 0 0-4.06 3.51c-.95 34.22-32.78 44.85-32.78 73.15c0 19.37 5.39 29 17.16 39.28m191.29-1.25c8.6 14.31 15.55 30.08 15.55 48c0 52.52-42.47 93.1-94.86 93.1a94.42 94.42 0 0 1-65.14-26"></svg:path>`,
})
export class IonBonfireOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBookOutlineIcon],svg[ion-book-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96m0 0v288"></svg:path>`,
})
export class IonBookOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBookmarkOutlineIcon],svg[ion-bookmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 48H160a48 48 0 0 0-48 48v368l144-128l144 128V96a48 48 0 0 0-48-48"></svg:path>`,
})
export class IonBookmarkOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBookmarksOutlineIcon],svg[ion-bookmarks-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M128 80V64a48.14 48.14 0 0 1 48-48h224a48.14 48.14 0 0 1 48 48v368l-80-64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M320 96H112a48.14 48.14 0 0 0-48 48v352l152-128l152 128V144a48.14 48.14 0 0 0-48-48Z"></svg:path>`,
})
export class IonBookmarksOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBowlingBallOutlineIcon],svg[ion-bowling-ball-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="288" cy="200" r="24" fill="currentColor"></svg:circle><svg:circle cx="296" cy="128" r="24" fill="currentColor"></svg:circle><svg:circle cx="360" cy="168" r="24" fill="currentColor"></svg:circle>`,
})
export class IonBowlingBallOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBriefcaseOutlineIcon],svg[ion-briefcase-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="448" height="320" x="32" y="128" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 128V96a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32m112 112H32m288 0v24a8 8 0 0 1-8 8H200a8 8 0 0 1-8-8v-24"></svg:path>`,
})
export class IonBriefcaseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBrowsersOutlineIcon],svg[ion-browsers-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="384" x="48" y="64" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="currentColor" d="M397.82 64H114.18C77.69 64 48 94.15 48 131.2V176h16c0-16 16-32 32-32h320c16 0 32 16 32 32h16v-44.8c0-37.05-29.69-67.2-66.18-67.2"></svg:path>`,
})
export class IonBrowsersOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBrushOutlineIcon],svg[ion-brush-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M452.37 59.63a40.49 40.49 0 0 0-57.26 0L184 294.74c23.08 4.7 46.12 27.29 49.26 49.26l219.11-227.11a40.49 40.49 0 0 0 0-57.26M138 336c-29.88 0-54 24.5-54 54.86c0 23.95-20.88 36.57-36 36.57C64.56 449.74 92.82 464 120 464c39.78 0 72-32.73 72-73.14c0-30.36-24.12-54.86-54-54.86"></svg:path>`,
})
export class IonBrushOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBugOutlineIcon],svg[ion-bug-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M370 378c28.89 23.52 46 46.07 46 86m-274-86c-28.89 23.52-46 46.06-46 86m288-256c28.89-23.52 32-56.07 32-96m-288 94c-28.89-23.52-32-54.06-32-94m368 176.13h-80m-256 0H48M256 192v256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 448c-70.4 0-128-57.6-128-128v-96.07c0-65.07 57.6-96 128-96h0c70.4 0 128 25.6 128 96V320c0 70.4-57.6 128-128 128"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M179.43 143.52a49.1 49.1 0 0 1-3.43-15.73A80 80 0 0 1 255.79 48h.42A80 80 0 0 1 336 127.79a41.9 41.9 0 0 1-3.12 14.3"></svg:path>`,
})
export class IonBugOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBuildOutlineIcon],svg[ion-build-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M393.87 190a32.1 32.1 0 0 1-45.25 0l-26.57-26.57a32.09 32.09 0 0 1 0-45.26L382.19 58a1 1 0 0 0-.3-1.64c-38.82-16.64-89.15-8.16-121.11 23.57c-30.58 30.35-32.32 76-21.12 115.84a31.93 31.93 0 0 1-9.06 32.08L64 380a48.17 48.17 0 1 0 68 68l153.86-167a31.93 31.93 0 0 1 31.6-9.13c39.54 10.59 84.54 8.6 114.72-21.19c32.49-32 39.5-88.56 23.75-120.93a1 1 0 0 0-1.6-.26Z"></svg:path><svg:circle cx="96" cy="416" r="16" fill="currentColor"></svg:circle>`,
})
export class IonBuildOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBulbOutlineIcon],svg[ion-bulb-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 384v-24c0-29 31.54-56.43 52-76c28.84-27.57 44-64.61 44-108c0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108c20.35 19.21 52 46.7 52 76v24m16 96h64m-80-48h96m-48-48V256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M294 240s-21.51 16-38 16s-38-16-38-16"></svg:path>`,
})
export class IonBulbOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBusOutlineIcon],svg[ion-bus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="352" height="192" x="80" y="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="32" ry="32"></svg:rect><svg:rect width="352" height="128" x="80" y="304" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="32" ry="32"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 112H112a32.09 32.09 0 0 1-32-32h0a32.09 32.09 0 0 1 32-32h288a32.09 32.09 0 0 1 32 32h0a32.09 32.09 0 0 1-32 32M144 432v22a10 10 0 0 1-10 10h-28a10 10 0 0 1-10-10v-22Zm272 0v22a10 10 0 0 1-10 10h-28a10 10 0 0 1-10-10v-22Z"></svg:path><svg:circle cx="368" cy="368" r="16" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="144" cy="368" r="16" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v192M80 80v288M432 80v288"></svg:path>`,
})
export class IonBusOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBusinessOutlineIcon],svg[ion-business-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 416v64M80 32h192a32 32 0 0 1 32 32v412a4 4 0 0 1-4 4H48h0V64a32 32 0 0 1 32-32m240 160h112a32 32 0 0 1 32 32v256h0h-160h0V208a16 16 0 0 1 16-16"></svg:path><svg:path fill="currentColor" d="M98.08 431.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 240a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 320a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79"></svg:path><svg:ellipse cx="256" cy="176" fill="currentColor" rx="15.95" ry="16.03" transform="rotate(-45 255.99 175.996)"></svg:ellipse><svg:path fill="currentColor" d="M258.08 111.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79M400 400a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-64 160a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class IonBusinessOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCafeOutlineIcon],svg[ion-cafe-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 80h64a16 16 0 0 1 16 16v34a46 46 0 0 1-46 46h-34M96 80h272v192a80 80 0 0 1-80 80H176a80 80 0 0 1-80-80zM64 416h336"></svg:path>`,
})
export class IonCafeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCalculatorOutlineIcon],svg[ion-calculator-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="288" height="416" x="112" y="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="32" ry="32"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160.01 112H352v64H160.01z"></svg:path><svg:circle cx="168" cy="248" r="24" fill="currentColor"></svg:circle><svg:circle cx="256" cy="248" r="24" fill="currentColor"></svg:circle><svg:circle cx="344" cy="248" r="24" fill="currentColor"></svg:circle><svg:circle cx="168" cy="328" r="24" fill="currentColor"></svg:circle><svg:circle cx="256" cy="328" r="24" fill="currentColor"></svg:circle><svg:circle cx="168" cy="408" r="24" fill="currentColor"></svg:circle><svg:circle cx="256" cy="408" r="24" fill="currentColor"></svg:circle><svg:rect width="48" height="128" x="320" y="304" fill="currentColor" rx="24" ry="24"></svg:rect>`,
})
export class IonCalculatorOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCalendarClearOutlineIcon],svg[ion-calendar-clear-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="384" x="48" y="80" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 48v32m256-32v32m80 80H48"></svg:path>`,
})
export class IonCalendarClearOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCalendarNumberOutlineIcon],svg[ion-calendar-number-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="384" x="48" y="80" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 48v32m256-32v32m80 80H48m256 100l43.42-32H352v168m-160.13-89.37c9.11 0 25.79-4.28 36.72-15.47a37.9 37.9 0 0 0 11.13-27.26c0-26.12-22.59-39.9-47.89-39.9c-21.4 0-33.52 11.61-37.85 18.93M149 374.16c4.88 8.27 19.71 25.84 43.88 25.84c28.59 0 52.12-15.94 52.12-43.82c0-12.62-3.66-24-11.58-32.07c-12.36-12.64-31.25-17.48-41.55-17.48"></svg:path>`,
})
export class IonCalendarNumberOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCalendarOutlineIcon],svg[ion-calendar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="384" x="48" y="80" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48"></svg:rect><svg:circle cx="296" cy="232" r="24" fill="currentColor"></svg:circle><svg:circle cx="376" cy="232" r="24" fill="currentColor"></svg:circle><svg:circle cx="296" cy="312" r="24" fill="currentColor"></svg:circle><svg:circle cx="376" cy="312" r="24" fill="currentColor"></svg:circle><svg:circle cx="136" cy="312" r="24" fill="currentColor"></svg:circle><svg:circle cx="216" cy="312" r="24" fill="currentColor"></svg:circle><svg:circle cx="136" cy="392" r="24" fill="currentColor"></svg:circle><svg:circle cx="216" cy="392" r="24" fill="currentColor"></svg:circle><svg:circle cx="296" cy="392" r="24" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 48v32m256-32v32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M464 160H48"></svg:path>`,
})
export class IonCalendarOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCallOutlineIcon],svg[ion-call-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M451 374c-15.88-16-54.34-39.35-73-48.76c-24.3-12.24-26.3-13.24-45.4.95c-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39s-47.34-61.62-50.53-76.48s5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3c-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160 160 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64s54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159 159 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374Z"></svg:path>`,
})
export class IonCallOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCameraOutlineIcon],svg[ion-camera-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h352a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32"></svg:path><svg:circle cx="256" cy="272" r="80" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M124 158v-22h-24v22"></svg:path>`,
})
export class IonCameraOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCameraReverseOutlineIcon],svg[ion-camera-reverse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h352a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M124 158v-22h-24v22m235.76 127.22v-13.31a80 80 0 0 0-131-61.6M176 258.78v13.31a80 80 0 0 0 130.73 61.8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m196 272l-20-20l-20 20m200 0l-20 20l-20-20"></svg:path>`,
})
export class IonCameraReverseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCarOutlineIcon],svg[ion-car-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m80 224l37.78-88.15C123.93 121.5 139.6 112 157.11 112h197.78c17.51 0 33.18 9.5 39.33 23.85L432 224m-352 0h352v144H80zm32 144v32H80v-32m352 0v32h-32v-32"></svg:path><svg:circle cx="144" cy="288" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="368" cy="288" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class IonCarOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCarSportOutlineIcon],svg[ion-car-sport-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M469.71 234.6c-7.33-9.73-34.56-16.43-46.08-33.94s-20.95-55.43-50.27-70S288 112 256 112s-88 4-117.36 18.63s-38.75 52.52-50.27 70s-38.75 24.24-46.08 33.97S29.8 305.84 32.94 336s9 48 9 48h86c14.08 0 18.66-5.29 47.46-8c31.6-3 62.6-4 80.6-4s50 1 81.58 4c28.8 2.73 33.53 8 47.46 8h85s5.86-17.84 9-48s-2.04-91.67-9.33-101.4M400 384h56v16h-56zm-344 0h56v16H56z"></svg:path><svg:path fill="currentColor" d="M364.47 309.16c-5.91-6.83-25.17-12.53-50.67-16.35S279 288 256.2 288s-33.17 1.64-57.61 4.81s-42.79 8.81-50.66 16.35C136.12 320.6 153.42 333.44 167 335c13.16 1.5 39.47.95 89.31.95s76.15.55 89.31-.95c13.56-1.65 29.62-13.6 18.85-25.84m67.1-66.11a3.23 3.23 0 0 0-3.1-3c-11.81-.42-23.8.42-45.07 6.69a93.9 93.9 0 0 0-30.08 15.06c-2.28 1.78-1.47 6.59 1.39 7.1a455 455 0 0 0 52.82 3.1c10.59 0 21.52-3 23.55-12.44a52.4 52.4 0 0 0 .49-16.51m-351.14 0a3.23 3.23 0 0 1 3.1-3c11.81-.42 23.8.42 45.07 6.69a93.9 93.9 0 0 1 30.08 15.06c2.28 1.78 1.47 6.59-1.39 7.1a455 455 0 0 1-52.82 3.1c-10.59 0-21.52-3-23.55-12.44a52.4 52.4 0 0 1-.49-16.51"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432 192h16m-384 0h16m-2 19s46.35-12 178-12s178 12 178 12"></svg:path>`,
})
export class IonCarSportOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCardOutlineIcon],svg[ion-card-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="320" x="48" y="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="56" ry="56"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="60" d="M48 192h416M128 300h48v20h-48z"></svg:path>`,
})
export class IonCardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCaretBackCircleOutlineIcon],svg[ion-caret-back-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m273.77 169.57l-89.09 74.13a16 16 0 0 0 0 24.6l89.09 74.13A16 16 0 0 0 300 330.14V181.86a16 16 0 0 0-26.23-12.29"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class IonCaretBackCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCaretBackOutlineIcon],svg[ion-caret-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M321.94 98L158.82 237.78a24 24 0 0 0 0 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18"></svg:path>`,
})
export class IonCaretBackOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCaretDownCircleOutlineIcon],svg[ion-caret-down-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m342.43 238.23l-74.13 89.09a16 16 0 0 1-24.6 0l-74.13-89.09A16 16 0 0 1 181.86 212h148.28a16 16 0 0 1 12.29 26.23"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class IonCaretDownCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCaretDownOutlineIcon],svg[ion-caret-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62"></svg:path>`,
})
export class IonCaretDownOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCaretForwardCircleOutlineIcon],svg[ion-caret-forward-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m238.23 342.43l89.09-74.13a16 16 0 0 0 0-24.6l-89.09-74.13A16 16 0 0 0 212 181.86v148.28a16 16 0 0 0 26.23 12.29"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class IonCaretForwardCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCaretForwardOutlineIcon],svg[ion-caret-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m190.06 414l163.12-139.78a24 24 0 0 0 0-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18"></svg:path>`,
})
export class IonCaretForwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCaretUpCircleOutlineIcon],svg[ion-caret-up-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m342.43 273.77l-74.13-89.09a16 16 0 0 0-24.6 0l-74.13 89.09A16 16 0 0 0 181.86 300h148.28a16 16 0 0 0 12.29-26.23"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class IonCaretUpCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCaretUpOutlineIcon],svg[ion-caret-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414 321.94L274.22 158.82a24 24 0 0 0-36.44 0L98 321.94c-13.34 15.57-2.28 39.62 18.22 39.62h279.6c20.5 0 31.56-24.05 18.18-39.62"></svg:path>`,
})
export class IonCaretUpOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCartOutlineIcon],svg[ion-cart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="176" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="400" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 80h64l48 272h256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"></svg:path>`,
})
export class IonCartOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCashOutlineIcon],svg[ion-cash-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="448" height="256" x="32" y="80" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="16" ry="16" transform="rotate(180 256 208)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 384h384M96 432h320"></svg:path><svg:circle cx="256" cy="208" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M480 160a80 80 0 0 1-80-80M32 160a80 80 0 0 0 80-80m368 176a80 80 0 0 0-80 80M32 256a80 80 0 0 1 80 80"></svg:path>`,
})
export class IonCashOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCellularOutlineIcon],svg[ion-cellular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="64" height="320" x="416" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="8" ry="8"></svg:rect><svg:rect width="64" height="240" x="288" y="176" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="8" ry="8"></svg:rect><svg:rect width="64" height="176" x="160" y="240" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="8" ry="8"></svg:rect><svg:rect width="64" height="112" x="32" y="304" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="8" ry="8"></svg:rect>`,
})
export class IonCellularOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChatboxEllipsesOutlineIcon],svg[ion-chatbox-ellipses-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M408 64H104a56.16 56.16 0 0 0-56 56v192a56.16 56.16 0 0 0 56 56h40v80l93.72-78.14a8 8 0 0 1 5.13-1.86H408a56.16 56.16 0 0 0 56-56V120a56.16 56.16 0 0 0-56-56Z"></svg:path><svg:circle cx="160" cy="216" r="32" fill="currentColor"></svg:circle><svg:circle cx="256" cy="216" r="32" fill="currentColor"></svg:circle><svg:circle cx="352" cy="216" r="32" fill="currentColor"></svg:circle>`,
})
export class IonChatboxEllipsesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChatboxOutlineIcon],svg[ion-chatbox-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M408 64H104a56.16 56.16 0 0 0-56 56v192a56.16 56.16 0 0 0 56 56h40v80l93.72-78.14a8 8 0 0 1 5.13-1.86H408a56.16 56.16 0 0 0 56-56V120a56.16 56.16 0 0 0-56-56Z"></svg:path>`,
})
export class IonChatboxOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChatbubbleEllipsesOutlineIcon],svg[ion-chatbubble-ellipses-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M87.48 380c1.2-4.38-1.43-10.47-3.94-14.86a43 43 0 0 0-2.54-3.8a199.8 199.8 0 0 1-33-110C47.64 139.09 140.72 48 255.82 48C356.2 48 440 117.54 459.57 209.85a199 199 0 0 1 4.43 41.64c0 112.41-89.49 204.93-204.59 204.93c-18.31 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.1 31.1 0 0 0-11.13-2.07a30.7 30.7 0 0 0-12.08 2.43L81.5 462.78a16 16 0 0 1-4.66 1.22a9.61 9.61 0 0 1-9.58-9.74a16 16 0 0 1 .6-3.29Z"></svg:path><svg:circle cx="160" cy="256" r="32" fill="currentColor"></svg:circle><svg:circle cx="256" cy="256" r="32" fill="currentColor"></svg:circle><svg:circle cx="352" cy="256" r="32" fill="currentColor"></svg:circle>`,
})
export class IonChatbubbleEllipsesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChatbubbleOutlineIcon],svg[ion-chatbubble-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a45 45 0 0 0-2.54-3.8a199.8 199.8 0 0 1-33-110C47.65 139.09 140.73 48 255.83 48C356.21 48 440 117.54 459.58 209.85a199 199 0 0 1 4.42 41.64c0 112.41-89.49 204.93-204.59 204.93c-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.1 31.1 0 0 0-11.12-2.07a30.7 30.7 0 0 0-12.09 2.43l-67.83 24.48a16 16 0 0 1-4.67 1.22a9.6 9.6 0 0 1-9.57-9.74a16 16 0 0 1 .6-3.29Z"></svg:path>`,
})
export class IonChatbubbleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChatbubblesOutlineIcon],svg[ion-chatbubbles-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a34 34 0 0 1 2.1-3.1A162 162 0 0 0 464 215c.3-92.2-77.5-167-173.7-167c-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 0 0-3.7 34.2c0 92.3 74.8 169.1 171 169.1c15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.4 26.4 0 0 1 9.3-1.7a26 26 0 0 1 10.1 2l56.7 20.1a13.5 13.5 0 0 0 3.9 1a8 8 0 0 0 8-8a13 13 0 0 0-.5-2.7Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M66.46 232a146.23 146.23 0 0 0 6.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 0 0 2.71 7.68A8.17 8.17 0 0 0 72 464a7.3 7.3 0 0 0 2.91-.6l56.21-22a15.7 15.7 0 0 1 12 .2c18.94 7.38 39.88 12 60.83 12A159.2 159.2 0 0 0 284 432.11"></svg:path>`,
})
export class IonChatbubblesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCheckboxOutlineIcon],svg[ion-checkbox-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 176L217.6 336L160 272"></svg:path><svg:rect width="384" height="384" x="64" y="64" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect>`,
})
export class IonCheckboxOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCheckmarkCircleOutlineIcon],svg[ion-checkmark-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 176L217.6 336L160 272"></svg:path>`,
})
export class IonCheckmarkCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCheckmarkDoneCircleOutlineIcon],svg[ion-checkmark-done-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 192L256.13 320l-47.95-48m-16.23 48L144 272m161.71-80l-51.55 59"></svg:path>`,
})
export class IonCheckmarkDoneCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCheckmarkDoneOutlineIcon],svg[ion-checkmark-done-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M464 128L240 384l-96-96m0 96l-96-96m320-160L232 284"></svg:path>`,
})
export class IonCheckmarkDoneOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCheckmarkOutlineIcon],svg[ion-checkmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"></svg:path>`,
})
export class IonCheckmarkOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronBackCircleOutlineIcon],svg[ion-chevron-back-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m296 352l-96-96l96-96"></svg:path>`,
})
export class IonChevronBackCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronBackOutlineIcon],svg[ion-chevron-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"></svg:path>`,
})
export class IonChevronBackOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronCollapseOutlineIcon],svg[ion-chevron-collapse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m136 104l120 104l120-104M136 408l120-104l120 104"></svg:path>`,
})
export class IonChevronCollapseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronDownCircleOutlineIcon],svg[ion-chevron-down-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m352 216l-96 96l-96-96"></svg:path>`,
})
export class IonChevronDownCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronDownOutlineIcon],svg[ion-chevron-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 184l144 144l144-144"></svg:path>`,
})
export class IonChevronDownOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronExpandOutlineIcon],svg[ion-chevron-expand-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m136 208l120-104l120 104m-240 96l120 104l120-104"></svg:path>`,
})
export class IonChevronExpandOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronForwardCircleOutlineIcon],svg[ion-chevron-forward-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64S64 150 64 256Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m216 352l96-96l-96-96"></svg:path>`,
})
export class IonChevronForwardCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronForwardOutlineIcon],svg[ion-chevron-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m184 112l144 144l-144 144"></svg:path>`,
})
export class IonChevronForwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronUpCircleOutlineIcon],svg[ion-chevron-up-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m352 296l-96-96l-96 96"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"></svg:path>`,
})
export class IonChevronUpCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronUpOutlineIcon],svg[ion-chevron-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 328l144-144l144 144"></svg:path>`,
})
export class IonChevronUpOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionClipboardOutlineIcon],svg[ion-clipboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M336 64h32a48 48 0 0 1 48 48v320a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V112a48 48 0 0 1 48-48h32"></svg:path><svg:rect width="160" height="64" x="176" y="32" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="26.13" ry="26.13"></svg:rect>`,
})
export class IonClipboardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloseCircleOutlineIcon],svg[ion-close-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192m0 128l128-128"></svg:path>`,
})
export class IonCloseCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloseOutlineIcon],svg[ion-close-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144m224 0L144 368"></svg:path>`,
})
export class IonCloseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloudCircleOutlineIcon],svg[ion-cloud-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M333.88 240.59a8 8 0 0 1-6.66-6.66C320.68 192.78 290.82 168 256 168c-32.37 0-53.93 21.22-62.48 43.58a7.92 7.92 0 0 1-6.16 5c-27.67 4.35-50.82 22.56-51.35 54.3c-.52 31.53 25.51 57.11 57 57.11H326c27.5 0 50-13.72 50-44c0-27.22-22-40.41-42.12-43.4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class IonCloudCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloudDoneOutlineIcon],svg[ion-cloud-done-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M400 240c-8.89-89.54-71-144-144-144c-69 0-113.44 48.2-128 96c-60 6-112 43.59-112 112c0 66 54 112 120 112h260c55 0 100-27.44 100-88c0-59.82-53-85.76-96-88Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M317 208L209.2 336L163 284.8"></svg:path>`,
})
export class IonCloudDoneOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloudDownloadOutlineIcon],svg[ion-cloud-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2c-60 5.7-112 35.88-112 98.4S70 336 136 336h56m0 64.1l64 63.9l64-63.9M256 224v224.03"></svg:path>`,
})
export class IonCloudDownloadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloudOfflineOutlineIcon],svg[ion-cloud-offline-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M93.72 183.25C49.49 198.05 16 233.1 16 288c0 66 54 112 120 112h184.37m147.45-22.26C485.24 363.3 496 341.61 496 312c0-59.82-53-85.76-96-88c-8.89-89.54-71-144-144-144c-26.16 0-48.79 6.93-67.6 18.14"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M448 448L64 64"></svg:path>`,
})
export class IonCloudOfflineOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloudOutlineIcon],svg[ion-cloud-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M400 240c-8.89-89.54-71-144-144-144c-69 0-113.44 48.2-128 96c-60 6-112 43.59-112 112c0 66 54 112 120 112h260c55 0 100-27.44 100-88c0-59.82-53-85.76-96-88Z"></svg:path>`,
})
export class IonCloudOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloudUploadOutlineIcon],svg[ion-cloud-upload-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8c-69 0-113.44 45.79-128 91.2c-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m320 255.79l-64-64l-64 64m64 192.42V207.79"></svg:path>`,
})
export class IonCloudUploadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloudyNightOutlineIcon],svg[ion-cloudy-night-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M388.31 272c47.75 0 89.77-27.77 107.69-68.92c-14.21 6.18-30.9 8.61-47.38 8.61A116.31 116.31 0 0 1 332.31 95.38c0-16.48 2.43-33.17 8.61-47.38C299.77 65.92 272 107.94 272 155.69a116.3 116.3 0 0 0 3.44 28.18"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M90.61 306.85A16.07 16.07 0 0 0 104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0 0 12.2 9.87c50 8.15 91.6 41.54 91.6 99.59c0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2c0-48.47 38.67-72.22 74.61-77.95Z"></svg:path>`,
})
export class IonCloudyNightOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloudyOutlineIcon],svg[ion-cloudy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M100.18 241.19a15.93 15.93 0 0 0 13.37-13.25C126.6 145.59 186.34 96 256 96c64.69 0 107.79 42.36 124.92 87a16.11 16.11 0 0 0 12.53 10.18C449.36 202.06 496 239.21 496 304c0 66-54 112-120 112H116c-55 0-100-27.44-100-88c0-54.43 43.89-80.81 84.18-86.81Z"></svg:path>`,
})
export class IonCloudyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCodeDownloadOutlineIcon],svg[ion-code-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368L32 256l128-112m192 224l128-112l-128-112M192 288.1l64 63.9l64-63.9M256 160v176.03"></svg:path>`,
})
export class IonCodeDownloadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCodeOutlineIcon],svg[ion-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368L32 256l128-112m192 224l128-112l-128-112"></svg:path>`,
})
export class IonCodeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCodeSlashOutlineIcon],svg[ion-code-slash-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368L32 256l128-112m192 224l128-112l-128-112m-48-48l-96 320"></svg:path>`,
})
export class IonCodeSlashOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCodeWorkingOutlineIcon],svg[ion-code-working-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="26" fill="currentColor"></svg:circle><svg:circle cx="346" cy="256" r="26" fill="currentColor"></svg:circle><svg:circle cx="166" cy="256" r="26" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368L32 256l128-112m192 224l128-112l-128-112"></svg:path>`,
})
export class IonCodeWorkingOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCogOutlineIcon],svg[ion-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m456.7 242.27l-26.08-4.2a8 8 0 0 1-6.6-6.82c-.5-3.2-1-6.41-1.7-9.51a8.08 8.08 0 0 1 3.9-8.62l23.09-12.82a8.05 8.05 0 0 0 3.9-9.92l-4-11a7.94 7.94 0 0 0-9.4-5l-25.89 5a8 8 0 0 1-8.59-4.11q-2.25-4.2-4.8-8.41a8.16 8.16 0 0 1 .7-9.52l17.29-19.94a8 8 0 0 0 .3-10.62l-7.49-9a7.88 7.88 0 0 0-10.5-1.51l-22.69 13.63a8 8 0 0 1-9.39-.9c-2.4-2.11-4.9-4.21-7.4-6.22a8 8 0 0 1-2.5-9.11l9.4-24.75A8 8 0 0 0 365 78.77l-10.2-5.91a8 8 0 0 0-10.39 2.21l-16.64 20.84a7.15 7.15 0 0 1-8.5 2.5s-5.6-2.3-9.8-3.71A8 8 0 0 1 304 87l.4-26.45a8.07 8.07 0 0 0-6.6-8.42l-11.59-2a8.07 8.07 0 0 0-9.1 5.61l-8.6 25.05a8 8 0 0 1-7.79 5.41h-9.8a8.07 8.07 0 0 1-7.79-5.41l-8.6-25.05a8.07 8.07 0 0 0-9.1-5.61l-11.59 2a8.07 8.07 0 0 0-6.6 8.42l.4 26.45a8 8 0 0 1-5.49 7.71c-2.3.9-7.3 2.81-9.7 3.71c-2.8 1-6.1.2-8.8-2.91l-16.51-20.34A8 8 0 0 0 156.75 73l-10.2 5.91a7.94 7.94 0 0 0-3.3 10.09l9.4 24.75a8.06 8.06 0 0 1-2.5 9.11c-2.5 2-5 4.11-7.4 6.22a8 8 0 0 1-9.39.9L111 116.14a8 8 0 0 0-10.5 1.51l-7.49 9a8 8 0 0 0 .3 10.62l17.29 19.94a8 8 0 0 1 .7 9.52q-2.55 4-4.8 8.41a8.11 8.11 0 0 1-8.59 4.11l-25.89-5a8 8 0 0 0-9.4 5l-4 11a8.05 8.05 0 0 0 3.9 9.92L85.58 213a7.94 7.94 0 0 1 3.9 8.62c-.6 3.2-1.2 6.31-1.7 9.51a8.08 8.08 0 0 1-6.6 6.82l-26.08 4.2a8.09 8.09 0 0 0-7.1 7.92v11.72a7.86 7.86 0 0 0 7.1 7.92l26.08 4.2a8 8 0 0 1 6.6 6.82c.5 3.2 1 6.41 1.7 9.51a8.08 8.08 0 0 1-3.9 8.62L62.49 311.7a8.05 8.05 0 0 0-3.9 9.92l4 11a7.94 7.94 0 0 0 9.4 5l25.89-5a8 8 0 0 1 8.59 4.11q2.25 4.2 4.8 8.41a8.16 8.16 0 0 1-.7 9.52l-17.29 19.96a8 8 0 0 0-.3 10.62l7.49 9a7.88 7.88 0 0 0 10.5 1.51l22.69-13.63a8 8 0 0 1 9.39.9c2.4 2.11 4.9 4.21 7.4 6.22a8 8 0 0 1 2.5 9.11l-9.4 24.75a8 8 0 0 0 3.3 10.12l10.2 5.91a8 8 0 0 0 10.39-2.21l16.79-20.64c2.1-2.6 5.5-3.7 8.2-2.6c3.4 1.4 5.7 2.2 9.9 3.61a8 8 0 0 1 5.49 7.71l-.4 26.45a8.07 8.07 0 0 0 6.6 8.42l11.59 2a8.07 8.07 0 0 0 9.1-5.61l8.6-25a8 8 0 0 1 7.79-5.41h9.8a8.07 8.07 0 0 1 7.79 5.41l8.6 25a8.07 8.07 0 0 0 9.1 5.61l11.59-2a8.07 8.07 0 0 0 6.6-8.42l-.4-26.45a8 8 0 0 1 5.49-7.71c4.2-1.41 7-2.51 9.6-3.51s5.8-1 8.3 2.1l17 20.94A8 8 0 0 0 355 439l10.2-5.91a7.93 7.93 0 0 0 3.3-10.12l-9.4-24.75a8.08 8.08 0 0 1 2.5-9.12c2.5-2 5-4.1 7.4-6.21a8 8 0 0 1 9.39-.9L401 395.66a8 8 0 0 0 10.5-1.51l7.49-9a8 8 0 0 0-.3-10.62l-17.29-19.94a8 8 0 0 1-.7-9.52q2.55-4.05 4.8-8.41a8.11 8.11 0 0 1 8.59-4.11l25.89 5a8 8 0 0 0 9.4-5l4-11a8.05 8.05 0 0 0-3.9-9.92l-23.09-12.82a7.94 7.94 0 0 1-3.9-8.62c.6-3.2 1.2-6.31 1.7-9.51a8.08 8.08 0 0 1 6.6-6.82l26.08-4.2a8.09 8.09 0 0 0 7.1-7.92V250a8.25 8.25 0 0 0-7.27-7.73M256 112a143.82 143.82 0 0 1 139.38 108.12A16 16 0 0 1 379.85 240H274.61a16 16 0 0 1-13.91-8.09l-52.1-91.71a16 16 0 0 1 9.85-23.39A147 147 0 0 1 256 112M112 256a144 144 0 0 1 43.65-103.41a16 16 0 0 1 25.17 3.47L233.06 248a16 16 0 0 1 0 15.87l-52.67 91.7a16 16 0 0 1-25.18 3.36A143.94 143.94 0 0 1 112 256m144 144a147 147 0 0 1-38.19-4.95a16 16 0 0 1-9.76-23.44l52.58-91.55a16 16 0 0 1 13.88-8H379.9a16 16 0 0 1 15.52 19.88A143.84 143.84 0 0 1 256 400"></svg:path>`,
})
export class IonCogOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionColorFillOutlineIcon],svg[ion-color-fill-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M419.1 337.45a3.94 3.94 0 0 0-6.1 0c-10.5 12.4-45 46.55-45 77.66c0 27 21.5 48.89 48 48.89s48-22 48-48.89c0-31.11-34.3-65.26-44.9-77.66ZM387 287.9L155.61 58.36a36 36 0 0 0-51 0l-5.15 5.15a36 36 0 0 0 0 51l52.89 52.89l57-57L56.33 263.2a28 28 0 0 0 .3 40l131.2 126a28.05 28.05 0 0 0 38.9-.1c37.8-36.6 118.3-114.5 126.7-122.9c5.8-5.8 18.2-7.1 28.7-7.1h.3a6.53 6.53 0 0 0 4.57-11.2Z"></svg:path>`,
})
export class IonColorFillOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionColorFilterOutlineIcon],svg[ion-color-filter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="184" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="344" cy="328" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="168" cy="328" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class IonColorFilterOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionColorPaletteOutlineIcon],svg[ion-color-palette-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9c-11.5-1.9-15.9-4-22.6-10c-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2c-34.2-30.1-80.1-45-127.8-45c-55.7 0-113.9 20.3-158.8 60.1c-83.5 73.8-83.5 194.7 0 268.5c41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4c14.4-12.7 11.99-36.6.1-47.7Z"></svg:path><svg:circle cx="144" cy="208" r="32" fill="currentColor"></svg:circle><svg:circle cx="152" cy="311" r="32" fill="currentColor"></svg:circle><svg:circle cx="224" cy="144" r="32" fill="currentColor"></svg:circle><svg:circle cx="256" cy="367" r="48" fill="currentColor"></svg:circle><svg:circle cx="328" cy="144" r="32" fill="currentColor"></svg:circle>`,
})
export class IonColorPaletteOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionColorWandOutlineIcon],svg[ion-color-wand-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="63.03" height="378.2" x="280.48" y="122.9" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" rx="31.52" transform="rotate(-45 312.002 311.994)"></svg:rect><svg:path fill="currentColor" d="M178.38 178.38a31.64 31.64 0 0 0 0 44.75L223.25 268L268 223.25l-44.87-44.87a31.64 31.64 0 0 0-44.75 0"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M48 192h48M90.18 90.18l33.94 33.94M192 48v48m101.82-5.82l-33.94 33.94M124.12 259.88l-33.94 33.94"></svg:path>`,
})
export class IonColorWandOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCompassOutlineIcon],svg[ion-compass-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="m350.67 150.93l-117.2 46.88a64 64 0 0 0-35.66 35.66l-46.88 117.2a8 8 0 0 0 10.4 10.4l117.2-46.88a64 64 0 0 0 35.66-35.66l46.88-117.2a8 8 0 0 0-10.4-10.4M256 280a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class IonCompassOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionConstructOutlineIcon],svg[ion-construct-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M436.67 184.11a27.17 27.17 0 0 1-38.3 0l-22.48-22.49a27.15 27.15 0 0 1 0-38.29l50.89-50.89a.85.85 0 0 0-.26-1.38C393.68 57 351.09 64.15 324.05 91c-25.88 25.69-27.35 64.27-17.87 98a27 27 0 0 1-7.67 27.14l-173 160.76a40.76 40.76 0 1 0 57.57 57.54l162.15-173.3a27 27 0 0 1 26.77-7.7c33.46 8.94 71.49 7.26 97.07-17.94c27.49-27.08 33.42-74.94 20.1-102.33a.85.85 0 0 0-1.36-.22Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 284c-17.48-17-25.49-24.91-31-30.29a18.24 18.24 0 0 1-3.33-21.35a20.8 20.8 0 0 1 3.5-4.62l15.68-15.29a18.7 18.7 0 0 1 5.63-3.87a18.11 18.11 0 0 1 20 3.62c5.45 5.29 15.43 15 33.41 32.52m49.18 46.58c40.95 38.1 90.62 83.27 110 99.41a13.46 13.46 0 0 1 .94 19.92L394.63 444a14 14 0 0 1-20.29-.76c-16.53-19.18-61.09-67.11-99.27-107"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m17.34 193.5l29.41-28.74a4.7 4.7 0 0 1 3.41-1.35a4.85 4.85 0 0 1 3.41 1.35h0a9.86 9.86 0 0 0 8.19 2.77c3.83-.42 7.92-1.6 10.57-4.12c6-5.8-.94-17.23 4.34-24.54a207 207 0 0 1 19.78-22.6c6-5.88 29.84-28.32 69.9-44.45A107.3 107.3 0 0 1 206.67 64c22.59 0 40 10 46.26 15.67a89.5 89.5 0 0 1 10.28 11.64a79 79 0 0 0-9.21-2.77a68.8 68.8 0 0 0-20-1.26c-13.33 1.09-29.41 7.26-38 14c-13.9 11-19.87 25.72-20.81 44.71c-.68 14.12 2.72 22.1 36.1 55.49a6.6 6.6 0 0 1-.34 9.16l-18.22 18a6.88 6.88 0 0 1-9.54.09c-21.94-21.94-36.65-33.09-45-38.16s-15.07-6.5-18.3-6.85a30.85 30.85 0 0 0-18.27 3.87a11.4 11.4 0 0 0-2.64 2a14.14 14.14 0 0 0 .42 20.08l1.71 1.6a4.63 4.63 0 0 1 0 6.64L71.73 246.6a4.7 4.7 0 0 1-3.41 1.4a4.86 4.86 0 0 1-3.41-1.35l-47.57-46.43a4.88 4.88 0 0 1 0-6.72"></svg:path>`,
})
export class IonConstructOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionContractOutlineIcon],svg[ion-contract-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 416V304h112m-101.8 10.23L432 432M208 96v112H96m101.8-10.23L80 80m336 128H304V96m10.23 101.8L432 80M96 304h112v112m-10.23-101.8L80 432"></svg:path>`,
})
export class IonContractOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionContrastOutlineIcon],svg[ion-contrast-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="currentColor" d="M256 464c-114.88 0-208-93.12-208-208S141.12 48 256 48Z"></svg:path>`,
})
export class IonContrastOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCopyOutlineIcon],svg[ion-copy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="336" height="336" x="128" y="128" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="57" ry="57"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"></svg:path>`,
})
export class IonCopyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCreateOutlineIcon],svg[ion-create-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48"></svg:path><svg:path fill="currentColor" d="M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38M399.34 90L218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0"></svg:path>`,
})
export class IonCreateOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCropOutlineIcon],svg[ion-crop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 48v272a48 48 0 0 0 48 48h272"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 304V192a48 48 0 0 0-48-48H208m160 224v96M144 144H48"></svg:path>`,
})
export class IonCropOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCubeOutlineIcon],svg[ion-cube-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 341.37V170.61A32 32 0 0 0 432.11 143l-152-88.46a47.94 47.94 0 0 0-48.24 0L79.89 143A32 32 0 0 0 64 170.61v170.76A32 32 0 0 0 79.89 369l152 88.46a48 48 0 0 0 48.24 0l152-88.46A32 32 0 0 0 448 341.37"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m69 153.99l187 110l187-110m-187 310v-200"></svg:path>`,
})
export class IonCubeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCutOutlineIcon],svg[ion-cut-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="104" cy="152" r="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="104" cy="360" r="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m157 175l-11 15l37 15s3.46-6.42 7-10Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M154.17 334.43L460 162c-2.5-6.7-28-12-64-4c-29.12 6.47-121.16 29.05-159.16 56.05C205.85 236.06 227 272 192 298c-25.61 19-44.43 22.82-44.43 22.82Zm190.3-56.19L295 306.67c14.23 6.74 65.54 33.27 117 36.33c14.92.89 30 .39 39-6Z"></svg:path><svg:circle cx="256" cy="240" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class IonCutOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDesktopOutlineIcon],svg[ion-desktop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="448" height="320" x="32" y="64" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="32" ry="32"></svg:rect><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m304 448l-8-64h-80l-8 64z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 448H144"></svg:path><svg:path fill="currentColor" d="M32 304v48a32.09 32.09 0 0 0 32 32h384a32.09 32.09 0 0 0 32-32v-48Zm224 64a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class IonDesktopOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDiamondOutlineIcon],svg[ion-diamond-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m35.42 188.21l207.75 269.46a16.17 16.17 0 0 0 25.66 0l207.75-269.46a16.52 16.52 0 0 0 .95-18.75L407.06 55.71A16.22 16.22 0 0 0 393.27 48H118.73a16.22 16.22 0 0 0-13.79 7.71L34.47 169.46a16.52 16.52 0 0 0 .95 18.75M48 176h416"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 64l-48 112l-96-128M112 64l48 112l96-128m0 400l-96-272m96 272l96-272"></svg:path>`,
})
export class IonDiamondOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDiceOutlineIcon],svg[ion-dice-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 341.37V170.61A32 32 0 0 0 432.11 143l-152-88.46a47.94 47.94 0 0 0-48.24 0L79.89 143A32 32 0 0 0 64 170.61v170.76A32 32 0 0 0 79.89 369l152 88.46a48 48 0 0 0 48.24 0l152-88.46A32 32 0 0 0 448 341.37"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m69 153.99l187 110l187-110m-187 310v-200"></svg:path><svg:ellipse cx="256" cy="152" fill="currentColor" rx="24" ry="16"></svg:ellipse><svg:ellipse cx="208" cy="296" fill="currentColor" rx="16" ry="24"></svg:ellipse><svg:ellipse cx="112" cy="328" fill="currentColor" rx="16" ry="24"></svg:ellipse><svg:ellipse cx="304" cy="296" fill="currentColor" rx="16" ry="24"></svg:ellipse><svg:ellipse cx="400" cy="240" fill="currentColor" rx="16" ry="24"></svg:ellipse><svg:ellipse cx="304" cy="384" fill="currentColor" rx="16" ry="24"></svg:ellipse><svg:ellipse cx="400" cy="328" fill="currentColor" rx="16" ry="24"></svg:ellipse>`,
})
export class IonDiceOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDiscOutlineIcon],svg[ion-disc-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="256" cy="256" r="96" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="256" cy="256" r="32" fill="currentColor"></svg:circle>`,
})
export class IonDiscOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDocumentAttachOutlineIcon],svg[ion-document-attach-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M288 72v120a32 32 0 0 0 32 32h120"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144"></svg:path>`,
})
export class IonDocumentAttachOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDocumentLockOutlineIcon],svg[ion-document-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M288 304v-18c0-16.63-14.26-30-32-30s-32 13.37-32 30v18"></svg:path><svg:path fill="currentColor" d="M304 416h-96a32 32 0 0 1-32-32v-48a32 32 0 0 1 32-32h96a32 32 0 0 1 32 32v48a32 32 0 0 1-32 32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 50.88V176a32 32 0 0 0 32 32h125.12"></svg:path>`,
})
export class IonDocumentLockOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDocumentOutlineIcon],svg[ion-document-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 56v120a32 32 0 0 0 32 32h120"></svg:path>`,
})
export class IonDocumentOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDocumentTextOutlineIcon],svg[ion-document-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 56v120a32 32 0 0 0 32 32h120m-232 80h160m-160 80h160"></svg:path>`,
})
export class IonDocumentTextOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDocumentsOutlineIcon],svg[ion-documents-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M336 264.13V436c0 24.3-19.05 44-42.95 44H107c-23.95 0-43-19.7-43-44V172a44.26 44.26 0 0 1 44-44h94.12a24.55 24.55 0 0 1 17.49 7.36l109.15 111a25.4 25.4 0 0 1 7.24 17.77Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M200 128v108a28.34 28.34 0 0 0 28 28h108"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M176 128V76a44.26 44.26 0 0 1 44-44h94a24.83 24.83 0 0 1 17.61 7.36l109.15 111A25.1 25.1 0 0 1 448 168v172c0 24.3-19.05 44-42.95 44H344"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M312 32v108a28.34 28.34 0 0 0 28 28h108"></svg:path>`,
})
export class IonDocumentsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDownloadOutlineIcon],svg[ion-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 176h40a40 40 0 0 1 40 40v208a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V216a40 40 0 0 1 40-40h40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m176 272l80 80l80-80M256 48v288"></svg:path>`,
})
export class IonDownloadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDuplicateOutlineIcon],svg[ion-duplicate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="336" height="336" x="128" y="128" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="57" ry="57"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24m168-168v160m80-80H216"></svg:path>`,
})
export class IonDuplicateOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEarOutlineIcon],svg[ion-ear-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M335.72 330.76C381.73 299.5 416 251.34 416 192a160 160 0 0 0-320 0v206.57c0 44.26 35.74 81.43 80 81.43h0c44.26 0 66.83-25.94 77.29-40c14.77-19.81 41.71-81.56 82.43-109.24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 304V184c0-48.4 43.2-88 96-88h0c52.8 0 96 39.6 96 88"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 239c25-18 79.82-15 79.82-15c26 0 41.17 29.42 26 50.6c0 0-36.86 42.4-41.86 61.4"></svg:path>`,
})
export class IonEarOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEarthOutlineIcon],svg[ion-earth-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208Z"></svg:path><svg:path fill="currentColor" d="M445.57 172.14c-16.06.1-14.48 29.73-34.49 15.75c-7.43-5.18-12-12.71-21.33-15c-8.15-2-16.5.08-24.55 1.47c-9.15 1.58-20 2.29-26.94 9.22c-6.71 6.67-10.26 15.62-17.4 22.33c-13.81 13-19.64 27.19-10.7 45.57c8.6 17.67 26.59 27.26 46 26c19.07-1.27 38.88-12.33 38.33 15.38c-.2 9.8 1.85 16.6 4.86 25.71c2.79 8.4 2.6 16.54 3.24 25.21c1.18 16.2 4.16 34.36 12.2 48.67l15-21.16c1.85-2.62 5.72-6.29 6.64-9.38c1.63-5.47-1.58-14.87-1.95-21s-.19-12.34-1.13-18.47c-1.32-8.59-6.4-16.64-7.1-25.13c-1.29-15.81 1.6-28.43-10.58-41.65c-11.76-12.75-29-15.81-45.47-13.22c-8.3 1.3-41.71 6.64-28.3-12.33c2.65-3.73 7.28-6.79 10.26-10.34c2.59-3.09 4.84-8.77 7.88-11.18s17-5.18 21-3.95s8.17 7 11.64 9.56a49.9 49.9 0 0 0 21.81 9.36c13.66 2 42.22-5.94 42-23.46c-.04-8.4-7.84-20.1-10.92-27.96M287.45 316.3c-5.33-22.44-35.82-29.94-52.26-42.11c-9.45-7-17.86-17.81-30.27-18.69c-5.72-.41-10.51.83-16.18-.64c-5.2-1.34-9.28-4.14-14.82-3.41c-10.35 1.36-16.88 12.42-28 10.92c-10.55-1.42-21.42-13.76-23.82-23.81c-3.08-12.92 7.14-17.11 18.09-18.26c4.57-.48 9.7-1 14.09.67c5.78 2.15 8.51 7.81 13.7 10.67c9.73 5.33 11.7-3.19 10.21-11.83c-2.23-12.94-4.83-18.22 6.71-27.12c8-6.14 14.84-10.58 13.56-21.61c-.76-6.48-4.31-9.41-1-15.86c2.51-4.91 9.4-9.34 13.89-12.27c11.59-7.56 49.65-7 34.1-28.16c-4.57-6.21-13-17.31-21-18.83c-10-1.89-14.44 9.27-21.41 14.19c-7.2 5.09-21.22 10.87-28.43 3c-9.7-10.59 6.43-14.07 10-21.46s-8.27-21.36-14.61-24.9l-29.81 33.43a41.52 41.52 0 0 0 8.34 31.86c5.93 7.63 15.37 10.08 15.8 20.5c.42 10-1.14 15.12-7.68 22.15c-2.83 3-4.83 7.26-7.71 10.07c-3.53 3.43-2.22 2.38-7.73 3.32c-10.36 1.75-19.18 4.45-29.19 7.21C95.34 199.94 93.8 172.69 86.2 162l-25 20.19c-.27 3.31 4.1 9.4 5.29 13c6.83 20.57 20.61 36.48 29.51 56.16c9.37 20.84 34.53 15.06 45.64 33.32c9.86 16.2-.67 36.71 6.71 53.67c5.36 12.31 18 15 26.72 24c8.91 9.09 8.72 21.53 10.08 33.36a305 305 0 0 0 7.45 41.28c1.21 4.69 2.32 10.89 5.53 14.76c2.2 2.66 9.75 4.95 6.7 5.83c4.26.7 11.85 4.68 15.4 1.76c4.68-3.84 3.43-15.66 4.24-21c2.43-15.9 10.39-31.45 21.13-43.35c10.61-11.74 25.15-19.69 34.11-33c8.73-12.98 11.36-30.49 7.74-45.68m-33.39 26.32c-6 10.71-19.36 17.88-27.95 26.39c-2.33 2.31-7.29 10.31-10.21 8.58c-2.09-1.24-2.8-11.62-3.57-14a61.17 61.17 0 0 0-21.71-29.95c-3.13-2.37-10.89-5.45-12.68-8.7c-2-3.53-.2-11.86-.13-15.7c.11-5.6-2.44-14.91-1.06-20c1.6-5.87-1.48-2.33 3.77-3.49c2.77-.62 14.21 1.39 17.66 2.11c5.48 1.14 8.5 4.55 12.82 8c11.36 9.11 23.87 16.16 36.6 23.14c9.86 5.46 12.76 12.37 6.46 23.62m-69.6-275.53c4.74 4.63 9.2 10.11 16.27 10.57c6.69.45 13-3.17 18.84 1.38c6.48 5 11.15 11.33 19.75 12.89c8.32 1.51 17.13-3.35 19.19-11.86c2-8.11-2.31-16.93-2.57-25.07c0-1.13.61-6.15-.17-7c-.58-.64-5.42.08-6.16.1q-8.13.24-16.22 1.12a207.1 207.1 0 0 0-57.18 14.65c2.43 1.68 5.48 2.35 8.25 3.22m171.94 56.18c8.49 0 17.11-3.8 14.37-13.62c-2.3-8.23-6.22-17.16-15.76-12.72c-6.07 2.82-14.67 10-15.38 17.12c-.81 8.08 11.11 9.22 16.77 9.22m-6.78 42.97c8.67 5.19 21.53 2.75 28.07-4.66c5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0 1 10.82 4.41c3.8 3.93 3.05 7.62 3.86 12.54c1.81 11.05 13.66.63 16.75-3.65c2-2.79 4.71-6.93 3.8-10.56c-.84-3.39-4.8-7-6.56-10.11c-5.14-9-9.37-19.47-17.07-26.74c-7.41-7-16.52-6.19-23.55 1.08c-5.76 6-12.45 10.75-16.39 18.05c-2.78 5.13-5.91 7.58-11.54 8.91c-3.1.73-6.64 1-9.24 3.08c-7.24 5.7-3.12 19.39 3.74 23.51"></svg:path>`,
})
export class IonEarthOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEaselOutlineIcon],svg[ion-easel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="272" x="48" y="80" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="32" ry="32"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 416v-64m0-272V48m144 416l-32-112M112 464l32-112"></svg:path>`,
})
export class IonEaselOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEggOutlineIcon],svg[ion-egg-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48C192 48 96 171.69 96 286.55S160 464 256 464s160-62.59 160-177.45S320 48 256 48Z"></svg:path>`,
})
export class IonEggOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEllipseOutlineIcon],svg[ion-ellipse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class IonEllipseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEllipsisHorizontalCircleOutlineIcon],svg[ion-ellipsis-horizontal-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="26" fill="currentColor"></svg:circle><svg:circle cx="346" cy="256" r="26" fill="currentColor"></svg:circle><svg:circle cx="166" cy="256" r="26" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class IonEllipsisHorizontalCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEllipsisHorizontalOutlineIcon],svg[ion-ellipsis-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="416" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="96" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class IonEllipsisHorizontalOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEllipsisVerticalCircleOutlineIcon],svg[ion-ellipsis-vertical-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="26" fill="currentColor"></svg:circle><svg:circle cx="256" cy="346" r="26" fill="currentColor"></svg:circle><svg:circle cx="256" cy="166" r="26" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class IonEllipsisVerticalCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEllipsisVerticalOutlineIcon],svg[ion-ellipsis-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="256" cy="416" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="256" cy="96" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class IonEllipsisVerticalOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEnterOutlineIcon],svg[ion-enter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m272 336l80-80l-80-80M48 256h288"></svg:path>`,
})
export class IonEnterOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionExitOutlineIcon],svg[ion-exit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 176v-40a40 40 0 0 0-40-40H88a40 40 0 0 0-40 40v240a40 40 0 0 0 40 40h192a40 40 0 0 0 40-40v-40m64-160l80 80l-80 80m-193-80h273"></svg:path>`,
})
export class IonExitOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionExpandOutlineIcon],svg[ion-expand-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432 320v112H320m101.8-10.23L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320m10.23 101.8L208 304"></svg:path>`,
})
export class IonExpandOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionExtensionPuzzleOutlineIcon],svg[ion-extension-puzzle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M413.66 246.1H386a2 2 0 0 1-2-2v-77.24A38.86 38.86 0 0 0 345.14 128H267.9a2 2 0 0 1-2-2V98.34c0-27.14-21.5-49.86-48.64-50.33a49.53 49.53 0 0 0-50.4 49.51V126a2 2 0 0 1-2 2H87.62A39.74 39.74 0 0 0 48 167.62V238a2 2 0 0 0 2 2h26.91c29.37 0 53.68 25.48 54.09 54.85c.42 29.87-23.51 57.15-53.29 57.15H50a2 2 0 0 0-2 2v70.38A39.74 39.74 0 0 0 87.62 464H158a2 2 0 0 0 2-2v-20.93c0-30.28 24.75-56.35 55-57.06c30.1-.7 57 20.31 57 50.28V462a2 2 0 0 0 2 2h71.14A38.86 38.86 0 0 0 384 425.14v-78a2 2 0 0 1 2-2h28.48c27.63 0 49.52-22.67 49.52-50.4s-23.2-48.64-50.34-48.64"></svg:path>`,
})
export class IonExtensionPuzzleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEyeOffOutlineIcon],svg[ion-eye-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448m-176.34-64c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.1 239.1 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47m235.18-145.4c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.3 227.3 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.8 192.8 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.7 310.7 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.5 343.5 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78"></svg:path><svg:path fill="currentColor" d="M256 160a96 96 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160m-90.22 73.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38Z"></svg:path>`,
})
export class IonEyeOffOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEyeOutlineIcon],svg[ion-eye-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112"></svg:path><svg:circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class IonEyeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEyedropOutlineIcon],svg[ion-eyedrop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M262.51 204.22L70 396.69C57.56 409.15 48 464 48 464s54.38-9.09 67.31-22L307.8 249.51"></svg:path><svg:rect width="192.15" height="64.05" x="211.72" y="172.19" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="32.03" ry="32.03" transform="rotate(45 307.788 204.2)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M289.91 141s20.57 8.57 37.22-8.08l54.67-70.63c18.5-19.41 49.26-18.69 67.94 0h0c18.68 18.68 19.34 48.81 0 67.93l-70.68 54.67c-15.65 15.65-8.08 37.22-8.08 37.22M115.31 442s-26.48 17.34-44.56-.73s-.75-44.58-.75-44.58"></svg:path>`,
})
export class IonEyedropOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFastFoodOutlineIcon],svg[ion-fast-food-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64m258-80c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M344 336H179.31a8 8 0 0 0-5.65 2.34l-26.83 26.83a4 4 0 0 1-5.66 0l-26.83-26.83a8 8 0 0 0-5.65-2.34H56a24 24 0 0 1-24-24h0a24 24 0 0 1 24-24h288a24 24 0 0 1 24 24h0a24 24 0 0 1-24 24ZM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 480h139.31a32 32 0 0 0 31.91-29.61L463 112"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m368 112l16-64l47-16"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M224 112h256"></svg:path>`,
})
export class IonFastFoodOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFemaleOutlineIcon],svg[ion-female-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="184" r="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 336v144m58-64H198"></svg:path>`,
})
export class IonFemaleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFileTrayFullOutlineIcon],svg[ion-file-tray-full-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M384 80H128c-26 0-43 14-48 40L48 272v112a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48V272l-32-152c-5-27-23-40-48-40Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 272h144m128 0h144m-272 0a64 64 0 0 0 128 0M144 144h224m-240 64h256"></svg:path>`,
})
export class IonFileTrayFullOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFileTrayOutlineIcon],svg[ion-file-tray-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M384 80H128c-26 0-43 14-48 40L48 272v112a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48V272l-32-152c-5-27-23-40-48-40Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 272h144m128 0h144m-272 0a64 64 0 0 0 128 0"></svg:path>`,
})
export class IonFileTrayOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFileTrayStackedOutlineIcon],svg[ion-file-tray-stacked-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M48 336v96a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48v-96"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 336h144m128 0h144m-272 0a64 64 0 0 0 128 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M384 32H128c-26 0-43 14-48 40L48 192v96a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48v-96L432 72c-5-27-23-40-48-40Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 192h144m128 0h144m-272 0a64 64 0 0 0 128 0"></svg:path>`,
})
export class IonFileTrayStackedOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFilmOutlineIcon],svg[ion-film-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="320" x="48" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="384" y="336" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="384" y="256" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="384" y="176" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="384" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="48" y="336" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="48" y="256" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="48" y="176" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="48" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="256" height="160" x="128" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="256" height="160" x="128" y="256" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect>`,
})
export class IonFilmOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFilterCircleOutlineIcon],svg[ion-filter-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 208h224m-192 64h160m-112 64h64"></svg:path>`,
})
export class IonFilterCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFilterOutlineIcon],svg[ion-filter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96"></svg:path>`,
})
export class IonFilterOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFingerPrintOutlineIcon],svg[ion-finger-print-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M390.42 75.28a10.45 10.45 0 0 1-5.32-1.44C340.72 50.08 302.35 40 256.35 40c-45.77 0-89.23 11.28-128.76 33.84C122 77 115.11 74.8 111.87 69a12.4 12.4 0 0 1 4.63-16.32A281.8 281.8 0 0 1 256.35 16c49.23 0 92.23 11.28 139.39 36.48a12 12 0 0 1 4.85 16.08a11.3 11.3 0 0 1-10.17 6.72m-330.79 126a11.73 11.73 0 0 1-6.7-2.16a12.26 12.26 0 0 1-2.78-16.8c22.89-33.6 52-60 86.69-78.48c72.58-38.84 165.51-39.12 238.32-.24c34.68 18.48 63.8 44.64 86.69 78a12.29 12.29 0 0 1-2.78 16.8a11.26 11.26 0 0 1-16.18-2.88c-20.8-30.24-47.15-54-78.36-70.56c-66.34-35.28-151.18-35.28-217.29.24c-31.44 16.8-57.79 40.8-78.59 71a10 10 0 0 1-9.02 5.08M204.1 491a10.66 10.66 0 0 1-8.09-3.6C175.9 466.48 165 453 149.55 424c-16-29.52-24.27-65.52-24.27-104.16c0-71.28 58.71-129.36 130.84-129.36S387 248.56 387 319.84a11.56 11.56 0 1 1-23.11 0c0-58.08-48.32-105.36-107.72-105.36S148.4 261.76 148.4 319.84c0 34.56 7.39 66.48 21.49 92.4c14.8 27.6 25 39.36 42.77 58.08a12.67 12.67 0 0 1 0 17a12.44 12.44 0 0 1-8.56 3.68m165.75-44.4c-27.51 0-51.78-7.2-71.66-21.36a129.1 129.1 0 0 1-55-105.36a11.57 11.57 0 1 1 23.12 0a104.28 104.28 0 0 0 44.84 85.44c16.41 11.52 35.6 17 58.72 17a147.4 147.4 0 0 0 24-2.4c6.24-1.2 12.25 3.12 13.4 9.84a11.92 11.92 0 0 1-9.47 13.92a152.3 152.3 0 0 1-27.95 2.88ZM323.38 496a13 13 0 0 1-3-.48c-36.76-10.56-60.8-24.72-86-50.4c-32.37-33.36-50.16-77.76-50.16-125.28c0-38.88 31.9-70.56 71.19-70.56s71.2 31.68 71.2 70.56c0 25.68 21.5 46.56 48.08 46.56s48.08-20.88 48.08-46.56c0-90.48-75.13-163.92-167.59-163.92c-65.65 0-125.75 37.92-152.79 96.72c-9 19.44-13.64 42.24-13.64 67.2c0 18.72 1.61 48.24 15.48 86.64c2.32 6.24-.69 13.2-6.7 15.36a11.34 11.34 0 0 1-14.79-7a276.4 276.4 0 0 1-16.88-95c0-28.8 5.32-55 15.72-77.76c30.75-67 98.94-110.4 173.6-110.4c105.18 0 190.71 84.24 190.71 187.92c0 38.88-31.9 70.56-71.2 70.56s-71.2-31.68-71.2-70.56c.01-25.68-21.49-46.6-48.07-46.6s-48.08 20.88-48.08 46.56c0 41 15.26 79.44 43.23 108.24c22 22.56 43 35 75.59 44.4c6.24 1.68 9.71 8.4 8.09 14.64a11.39 11.39 0 0 1-10.87 9.16"></svg:path>`,
})
export class IonFingerPrintOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFishOutlineIcon],svg[ion-fish-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M240 152c-50.71 12.21-94.15 52.31-120.3 73.43a261 261 0 0 0-23.81-19.58C59.53 179.29 16 176 16 176s11.37 51.53 41.36 79.83C27.37 284.14 16 335.67 16 335.67s43.53-3.29 79.89-29.85a259 259 0 0 0 23.61-19.41c26.1 21.14 69.74 61.34 120.5 73.59l-16 56c39.43-6.67 78.86-35.51 94.72-48.25C448 362 496 279 496 256c0-22-48-106-176.89-111.73C303.52 131.78 263.76 102.72 224 96Z"></svg:path><svg:circle cx="416" cy="239.99" r="16" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="20" stroke-width="32" d="M378.37 356a199.22 199.22 0 0 1 0-200"></svg:path>`,
})
export class IonFishOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFitnessOutlineIcon],svg[ion-fitness-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81c-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42c-.54-52.67-42.32-96.81-95.08-96.81"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 256h112l48-96l48 160l48-96l32 64h128"></svg:path>`,
})
export class IonFitnessOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFlagOutlineIcon],svg[ion-flag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 464V68.14a8 8 0 0 1 4-6.9C91.81 56.66 112.92 48 160 48c64 0 145 48 192 48a199.5 199.5 0 0 0 77.23-15.77a2 2 0 0 1 2.77 1.85v219.36a4 4 0 0 1-2.39 3.65C421.37 308.7 392.33 320 352 320c-48 0-128-32-192-32s-80 16-80 16"></svg:path>`,
})
export class IonFlagOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFlameOutlineIcon],svg[ion-flame-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 320c0-93 124-165 96-272c66 0 192 96 192 272a144 144 0 0 1-288 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 368c0 57.71-32 80-64 80s-64-22.29-64-80s40-86 32-128c42 0 96 70.29 96 128"></svg:path>`,
})
export class IonFlameOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFlashOffOutlineIcon],svg[ion-flash-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448M294.34 84.28l-22.08 120.84a16 16 0 0 0 6.17 15.71a16.5 16.5 0 0 0 9.93 3.17h94.12l-38.37 47.42a4 4 0 0 0 .28 5.34l17.07 17.07a4 4 0 0 0 5.94-.31l60.8-75.16a16.37 16.37 0 0 0 3.3-14.36a16 16 0 0 0-15.5-12H307.19L335.4 37.63c.05-.3.1-.59.13-.89A18.45 18.45 0 0 0 302.73 23l-92.58 114.46a4 4 0 0 0 .28 5.35l17.07 17.06a4 4 0 0 0 5.94-.31Zm-76.56 343.29l22-120.71a16 16 0 0 0-6.19-15.7a16.54 16.54 0 0 0-9.92-3.16h-94.1l38.36-47.42a4 4 0 0 0-.28-5.34l-17.07-17.07a4 4 0 0 0-5.93.31L83.8 293.64A16.37 16.37 0 0 0 80.5 308A16 16 0 0 0 96 320h108.83l-28.09 154.36v.11a18.37 18.37 0 0 0 32.5 14.53l92.61-114.46a4 4 0 0 0-.28-5.35l-17.07-17.06a4 4 0 0 0-5.94.31Z"></svg:path>`,
})
export class IonFlashOffOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFlashOutlineIcon],svg[ion-flash-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 0 0 2.33 2.77h0a2.36 2.36 0 0 0 1.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 0 0-2.44-2.75h0a2.42 2.42 0 0 0-1.95 1"></svg:path>`,
})
export class IonFlashOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFlashlightOutlineIcon],svg[ion-flashlight-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M456.64 162.86L349.12 55.36c-13.15-13.14-28.68-7.17-41.82 6l-11.95 12c-26.13 26.13-27.62 58.38-29.42 83.31c-.89 12.24-9.78 27.55-18.51 36.28L58.58 381.67c-16.35 16.33-12.69 39.42 3.73 55.84l12.17 12.17c16.36 16.35 39.43 20.16 55.86 3.74l188.83-188.8c8.74-8.74 24-17.55 36.29-18.52c24.87-1.86 58.62-4.85 83.26-29.49l11.94-11.94c13.15-13.14 19.12-28.67 5.98-41.81Z"></svg:path><svg:circle cx="224.68" cy="287.28" r="20" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m289 81l142 142"></svg:path>`,
})
export class IonFlashlightOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFlaskOutlineIcon],svg[ion-flask-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M176 48h160M118 304h276M208 48v93.48a64.1 64.1 0 0 1-9.88 34.18L73.21 373.49C48.4 412.78 76.63 464 123.08 464h265.84c46.45 0 74.68-51.22 49.87-90.51L313.87 175.66a64.1 64.1 0 0 1-9.87-34.18V48"></svg:path>`,
})
export class IonFlaskOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFlowerOutlineIcon],svg[ion-flower-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M215.08 156.92c-4.89-24-10.77-56.27-10.77-73.23A51.36 51.36 0 0 1 256 32h0c28.55 0 51.69 23.69 51.69 51.69c0 16.5-5.85 48.95-10.77 73.23m-81.84 198.16c-4.91 24.06-10.77 56.16-10.77 73.23A51.36 51.36 0 0 0 256 480h0c28.55 0 51.69-23.69 51.69-51.69c0-16.54-5.85-48.93-10.77-73.23m58.16-140c24.06-4.91 56.16-10.77 73.23-10.77A51.36 51.36 0 0 1 480 256h0c0 28.55-23.69 51.69-51.69 51.69c-16.5 0-48.95-5.85-73.23-10.77m-198.16-81.85c-24-4.89-56.25-10.76-73.23-10.76A51.36 51.36 0 0 0 32 256h0c0 28.55 23.69 51.69 51.69 51.69c16.5 0 48.95-5.85 73.23-10.77"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M296.92 156.92c13.55-20.48 32.3-47.25 44.37-59.31a51.35 51.35 0 0 1 73.1 0h0c20.19 20.19 19.8 53.3 0 73.1c-11.66 11.67-38.67 30.67-59.31 44.37m-198.16 81.84c-20.48 13.55-47.25 32.3-59.31 44.37a51.35 51.35 0 0 0 0 73.1h0c20.19 20.19 53.3 19.8 73.1 0c11.67-11.66 30.67-38.67 44.37-59.31m140-58.16c20.48 13.55 47.25 32.3 59.31 44.37a51.35 51.35 0 0 1 0 73.1h0c-20.19 20.19-53.3 19.8-73.1 0c-11.69-11.69-30.66-38.65-44.37-59.31m-81.84-198.16c-13.53-20.43-32.38-47.32-44.37-59.31a51.35 51.35 0 0 0-73.1 0h0c-20.19 20.19-19.8 53.3 0 73.1c11.61 11.61 38.7 30.68 59.31 44.37"></svg:path><svg:circle cx="256" cy="256" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class IonFlowerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFolderOpenOutlineIcon],svg[ion-folder-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 192v-72a40 40 0 0 1 40-40h75.89a40 40 0 0 1 22.19 6.72l27.84 18.56a40 40 0 0 0 22.19 6.72H408a40 40 0 0 1 40 40v40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M479.9 226.55L463.68 392a40 40 0 0 1-39.93 40H88.25a40 40 0 0 1-39.93-40L32.1 226.55A32 32 0 0 1 64 192h384.1a32 32 0 0 1 31.8 34.55"></svg:path>`,
})
export class IonFolderOpenOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFolderOutlineIcon],svg[ion-folder-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M440 432H72a40 40 0 0 1-40-40V120a40 40 0 0 1 40-40h75.89a40 40 0 0 1 22.19 6.72l27.84 18.56a40 40 0 0 0 22.19 6.72H440a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40M32 192h448"></svg:path>`,
})
export class IonFolderOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFootballOutlineIcon],svg[ion-football-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m256 175.15l-76.09 63.83L200 320h112l20.09-81.02zm76.09 63.83l52.87-22.4l25.78-73.26M447 269.97l-62.04-53.39m-205.05 22.4l-52.87-22.4l-25.78-73.26M65 269.97l62.04-53.39M256 175.15v-57.57l64-42.64m-128-.01l64 42.65M312 320l28 48l-28 71m98.74-71H342m-142-48l-28 48l28.37 71.5M101.63 368H172"></svg:path>`,
})
export class IonFootballOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFootstepsOutlineIcon],svg[ion-footsteps-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M200 246.84c8.81 58.62-7.33 90.67-52.91 97.41c-50.65 7.49-71.52-26.44-80.33-85.06c-11.85-78.88 16-127.94 55.71-131.1c36.14-2.87 68.71 60.14 77.53 118.75Zm23.65 162.69c3.13 33.28-14.86 64.34-42 69.66c-27.4 5.36-58.71-16.37-65.09-49.19s17.75-34.56 47.32-40.21s55.99-20.4 59.77 19.74ZM312 150.83c-8.81 58.62 7.33 90.67 52.9 97.41c50.66 7.49 71.52-26.44 80.33-85.06c11.86-78.89-16-128.22-55.7-131.1c-36.4-2.64-68.71 60.13-77.53 118.75Zm-23.65 162.7c-3.13 33.27 14.86 64.34 42 69.66c27.4 5.36 58.71-16.37 65.09-49.19s-17.75-34.56-47.32-40.22s-55.99-20.4-59.77 19.75Z"></svg:path>`,
})
export class IonFootstepsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFunnelOutlineIcon],svg[ion-funnel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m35.4 87.12l168.65 196.44A16.07 16.07 0 0 1 208 294v119.32a7.93 7.93 0 0 0 5.39 7.59l80.15 26.67A7.94 7.94 0 0 0 304 440V294a16.07 16.07 0 0 1 4-10.44L476.6 87.12A14 14 0 0 0 466 64H46.05A14 14 0 0 0 35.4 87.12"></svg:path>`,
})
export class IonFunnelOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGameControllerOutlineIcon],svg[ion-game-controller-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M467.51 248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5 91.5 0 0 0 352 96c-26.89 0-48.11 16-96 16s-69.15-16-96-16a99 99 0 0 0-27.2 3.66C89 112.59 61.94 165.7 43.33 248.83c-19 84.91-15.56 152 21.58 164.88c26 9 49.25-9.61 71.27-37c25-31.2 55.79-40.8 119.82-40.8s93.62 9.6 118.66 40.8c22 27.41 46.11 45.79 71.42 37.16c41.02-14.01 40.44-79.13 21.43-165.04Z"></svg:path><svg:circle cx="292" cy="224" r="20" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M336 288a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288"></svg:path><svg:circle cx="336" cy="180" r="20" fill="currentColor"></svg:circle><svg:circle cx="380" cy="224" r="20" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 176v96m48-48h-96"></svg:path>`,
})
export class IonGameControllerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGiftOutlineIcon],svg[ion-gift-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 104v56h56a56 56 0 1 0-56-56Zm0 0v56h-56a56 56 0 1 1 56-56Z"></svg:path><svg:rect width="384" height="112" x="64" y="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="32" ry="32"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 272v144a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V272m160-112v304"></svg:path>`,
})
export class IonGiftOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGitBranchOutlineIcon],svg[ion-git-branch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="160" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="160" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368V144"></svg:path><svg:circle cx="352" cy="160" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 208c0 128-192 48-192 160"></svg:path>`,
})
export class IonGitBranchOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGitCommitOutlineIcon],svg[ion-git-commit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 256H48m416 0H352"></svg:path>`,
})
export class IonGitCommitOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGitCompareOutlineIcon],svg[ion-git-compare-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m304 160l-64-64l64-64m-97 320l64 64l-64 64"></svg:path><svg:circle cx="112" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="400" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 96h84a60 60 0 0 1 60 60v212m-145 48h-84a60 60 0 0 1-60-60V144"></svg:path>`,
})
export class IonGitCompareOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGitMergeOutlineIcon],svg[ion-git-merge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="129" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="129" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M129 144v224"></svg:path><svg:circle cx="385" cy="288" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M129 144c0 96 112 144 208 144"></svg:path>`,
})
export class IonGitMergeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGitNetworkOutlineIcon],svg[ion-git-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="128" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="256" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 256v112"></svg:path><svg:circle cx="384" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 144c0 74.67 68.92 112 128 112m128-112c0 74.67-68.92 112-128 112"></svg:path>`,
})
export class IonGitNetworkOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGitPullRequestOutlineIcon],svg[ion-git-pull-request-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="128" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 144v224m160-208l-64-64l64-64"></svg:path><svg:circle cx="128" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="384" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M240 96h84a60 60 0 0 1 60 60v212"></svg:path>`,
})
export class IonGitPullRequestOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGlassesOutlineIcon],svg[ion-glasses-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 232a32 32 0 0 1 64 0m160-32h16m-400 0H48m16 0c0 96 16 128 80 128s80-32 80-128c0 0-16-16-80-16s-80 16-80 16m384 0c0 96-16 128-80 128s-80-32-80-128c0 0 16-16 80-16s80 16 80 16"></svg:path>`,
})
export class IonGlassesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGlobeOutlineIcon],svg[ion-globe-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 277.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48v416m208-208H48"></svg:path>`,
})
export class IonGlobeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGolfOutlineIcon],svg[ion-golf-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 400V32l176 80l-176 80"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 336c-87 0-175.3 43.2-191.64 124.74C62.39 470.57 68.57 480 80 480h352c11.44 0 17.62-9.43 15.65-19.26C431.3 379.2 343 336 256 336Z"></svg:path>`,
})
export class IonGolfOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGridOutlineIcon],svg[ion-grid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="176" height="176" x="48" y="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="20" ry="20"></svg:rect><svg:rect width="176" height="176" x="288" y="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="20" ry="20"></svg:rect><svg:rect width="176" height="176" x="48" y="288" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="20" ry="20"></svg:rect><svg:rect width="176" height="176" x="288" y="288" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="20" ry="20"></svg:rect>`,
})
export class IonGridOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHammerOutlineIcon],svg[ion-hammer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M277.42 247a24.7 24.7 0 0 0-4.08-5.47L255 223.44a21.6 21.6 0 0 0-6.56-4.57a20.93 20.93 0 0 0-23.28 4.27c-6.36 6.26-18 17.68-39 38.43C146 301.3 71.43 367.89 37.71 396.29a16 16 0 0 0-1.09 23.54l39 39.43a16.13 16.13 0 0 0 23.67-.89c29.24-34.37 96.3-109 136-148.23c20.39-20.06 31.82-31.58 38.29-37.94a21.76 21.76 0 0 0 3.84-25.2m201.01-46l-34.31-34a5.44 5.44 0 0 0-4-1.59a5.6 5.6 0 0 0-4 1.59h0a11.41 11.41 0 0 1-9.55 3.27c-4.48-.49-9.25-1.88-12.33-4.86c-7-6.86 1.09-20.36-5.07-29a243 243 0 0 0-23.08-26.72c-7.06-7-34.81-33.47-81.55-52.53a123.8 123.8 0 0 0-47-9.24c-26.35 0-46.61 11.76-54 18.51c-5.88 5.32-12 13.77-12 13.77a91 91 0 0 1 10.81-3.2a79.5 79.5 0 0 1 23.28-1.49C241.19 76.8 259.94 84.1 270 92c16.21 13 23.18 30.39 24.27 52.83c.8 16.69-15.23 37.76-30.44 54.94a7.85 7.85 0 0 0 .4 10.83l21.24 21.23a8 8 0 0 0 11.14.1c13.93-13.51 31.09-28.47 40.82-34.46s17.58-7.68 21.35-8.09a35.7 35.7 0 0 1 21.3 4.62a13.7 13.7 0 0 1 3.08 2.38c6.46 6.56 6.07 17.28-.5 23.74l-2 1.89a5.5 5.5 0 0 0 0 7.84l34.31 34a5.5 5.5 0 0 0 4 1.58a5.65 5.65 0 0 0 4-1.58L478.43 209a5.82 5.82 0 0 0 0-8"></svg:path>`,
})
export class IonHammerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHandLeftOutlineIcon],svg[ion-hand-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 320V144a32 32 0 0 1 32-32h0a32 32 0 0 1 32 32v112m0 0V80a32 32 0 0 1 32-32h0a32 32 0 0 1 32 32v160m64 1V96a32 32 0 0 1 32-32h0a32 32 0 0 1 32 32v224m-128-80V48a32 32 0 0 1 32-32h0a32 32 0 0 1 32 32v192"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 320c0 117.4 64 176 152 176s123.71-39.6 144-88l52.71-144c6.66-18.05 3.64-34.79-11.87-43.6h0c-15.52-8.82-35.91-4.28-44.31 11.68L336 320"></svg:path>`,
})
export class IonHandLeftOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHandRightOutlineIcon],svg[ion-hand-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432 320V144a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v112m0 0V80a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v160m-64 1V96a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v224m128-80V48a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v192"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432 320c0 117.4-64 176-152 176s-123.71-39.6-144-88L83.33 264c-6.66-18.05-3.64-34.79 11.87-43.6h0c15.52-8.82 35.91-4.28 44.31 11.68L176 320"></svg:path>`,
})
export class IonHandRightOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHappyOutlineIcon],svg[ion-happy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="184" cy="232" r="24" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 0 1 7.82-10.17h175.69a8 8 0 0 1 7.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83"></svg:path><svg:circle cx="328" cy="232" r="24" fill="currentColor"></svg:circle><svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class IonHappyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHardwareChipOutlineIcon],svg[ion-hardware-chip-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="352" height="352" x="80" y="80" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:rect width="224" height="224" x="144" y="144" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 80V48m80 32V48M176 80V48m80 416v-32m80 32v-32m-160 32v-32m256-176h32m-32 80h32m-32-160h32M48 256h32m-32 80h32M48 176h32"></svg:path>`,
})
export class IonHardwareChipOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHeadsetOutlineIcon],svg[ion-headset-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M83 384c-13-33-35-93.37-35-128C48 141.12 149.33 48 256 48s208 93.12 208 208c0 34.63-23 97-35 128"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="m108.39 270.13l-13.69 8c-30.23 17.7-31.7 72.41-3.38 122.2s75.87 75.81 106.1 58.12l13.69-8a16.16 16.16 0 0 0 5.78-21.87L130 276a15.74 15.74 0 0 0-21.61-5.87Zm295.22 0l13.69 8c30.23 17.69 31.74 72.4 3.38 122.19s-75.87 75.81-106.1 58.12l-13.69-8a16.16 16.16 0 0 1-5.78-21.87L382 276a15.74 15.74 0 0 1 21.61-5.87Z"></svg:path>`,
})
export class IonHeadsetOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHeartCircleOutlineIcon],svg[ion-heart-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="M256 360a16 16 0 0 1-9-2.78c-39.3-26.68-56.32-45-65.7-56.41c-20-24.37-29.58-49.4-29.3-76.5c.31-31.06 25.22-56.33 55.53-56.33c20.4 0 35 10.63 44.1 20.41a6 6 0 0 0 8.72 0c9.11-9.78 23.7-20.41 44.1-20.41c30.31 0 55.22 25.27 55.53 56.33c.28 27.1-9.31 52.13-29.3 76.5c-9.38 11.44-26.4 29.73-65.7 56.41A16 16 0 0 1 256 360"></svg:path>`,
})
export class IonHeartCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHeartDislikeCircleOutlineIcon],svg[ion-heart-dislike-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="M333.2 297.69c18.28-23.39 27.06-47.43 26.79-73.37c-.31-31.06-25.22-56.33-55.53-56.33c-20.4 0-35 10.64-44.11 20.42a5.93 5.93 0 0 1-8.7 0c-9.11-9.78-23.71-20.42-44.11-20.42L206 168a4 4 0 0 0-2.75 6.84l124 123.21a3.92 3.92 0 0 0 5.95-.36M158.84 221a4 4 0 0 0-6.82 2.72v.64c-.28 27.1 9.31 52.13 29.3 76.5c9.38 11.44 26.4 29.73 65.7 56.41a15.93 15.93 0 0 0 18 0c5.15-3.49 9.9-6.84 14.31-10a4 4 0 0 0 .46-6.07ZM336 368a15.92 15.92 0 0 1-11.31-4.69l-176-176a16 16 0 0 1 22.62-22.62l176 176A16 16 0 0 1 336 368"></svg:path>`,
})
export class IonHeartDislikeCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHeartDislikeOutlineIcon],svg[ion-heart-dislike-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M417.84 448a15.94 15.94 0 0 1-11.35-4.72L40.65 75.26a16 16 0 0 1 22.7-22.56l365.83 368a16 16 0 0 1-11.34 27.3M364.92 80c-48.09 0-80 29.55-96.92 51c-16.88-21.48-48.83-51-96.92-51a107.4 107.4 0 0 0-31 4.55L168 112c22.26 0 45.81 9 63.94 26.67a123 123 0 0 1 21.75 28.47a16 16 0 0 0 28.6 0a123 123 0 0 1 21.77-28.51C322.19 121 342.66 112 364.92 112c43.15 0 78.62 36.33 79.07 81c.54 53.69-22.75 99.55-57.38 139.52l22.63 22.77c3-3.44 5.7-6.64 8.14-9.6c40-48.75 59.15-98.8 58.61-153C475.37 130.52 425.54 80 364.92 80M268 432C180.38 372.51 91 297.6 92 193a83.7 83.7 0 0 1 2.24-18.39L69 149.14a115.1 115.1 0 0 0-9 43.49c-.54 54.22 18.63 104.27 58.61 153c18.77 22.87 52.8 59.45 131.39 112.8a31.84 31.84 0 0 0 36 0c20.35-13.81 37.7-26.5 52.58-38.11l-22.66-22.81C300.25 409.6 284.09 421.05 268 432"></svg:path>`,
})
export class IonHeartDislikeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHeartHalfOutlineIcon],svg[ion-heart-half-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352.92 64c-48.09 0-80 29.54-96.92 51c-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153c18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0 0 36 0c78.59-53.35 112.62-89.93 131.39-112.81c40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64M256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1 1 0 0 1 .08-.16a123 123 0 0 1 21.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416"></svg:path>`,
})
export class IonHeartHalfOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHeartOutlineIcon],svg[ion-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81c-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42c-.54-52.67-42.32-96.81-95.08-96.81"></svg:path>`,
})
export class IonHeartOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHelpBuoyOutlineIcon],svg[ion-help-buoy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m208 54l8 132m80 0l8-132m-96 404l8-132m80 0l8 132m154-250l-132 8m0 80l132 8M54 208l132 8m0 80l-132 8"></svg:path>`,
})
export class IonHelpBuoyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHelpCircleOutlineIcon],svg[ion-help-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="28" d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45c10 4.76 29.47 16.38 29.47 41.09c0 26-17 37.81-36.37 50.8S251 281.43 251 296"></svg:path><svg:circle cx="250" cy="348" r="20" fill="currentColor"></svg:circle>`,
})
export class IonHelpCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHelpOutlineIcon],svg[ion-help-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="40" d="M160 164s1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 298.36 248 324"></svg:path><svg:circle cx="248" cy="399.99" r="32" fill="currentColor"></svg:circle>`,
})
export class IonHelpOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHomeOutlineIcon],svg[ion-home-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"></svg:path>`,
})
export class IonHomeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHourglassOutlineIcon],svg[ion-hourglass-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M145.61 464h220.78c19.8 0 35.55-16.29 33.42-35.06C386.06 308 304 310 304 256s83.11-51 95.8-172.94c2-18.78-13.61-35.06-33.41-35.06H145.61c-19.8 0-35.37 16.28-33.41 35.06C124.89 205 208 201 208 256s-82.06 52-95.8 172.94c-2.14 18.77 13.61 35.06 33.41 35.06"></svg:path><svg:path fill="currentColor" d="M343.3 432H169.13c-15.6 0-20-18-9.06-29.16C186.55 376 240 356.78 240 326V224c0-19.85-38-35-61.51-67.2c-3.88-5.31-3.49-12.8 6.37-12.8h142.73c8.41 0 10.23 7.43 6.4 12.75C310.82 189 272 204.05 272 224v102c0 30.53 55.71 47 80.4 76.87c9.95 12.04 6.47 29.13-9.1 29.13"></svg:path>`,
})
export class IonHourglassOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIceCreamOutlineIcon],svg[ion-ice-cream-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m352 256l-96 224l-62-145"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M299.42 223.48C291.74 239.75 275.18 252 256 252c-13.1 0-27-5-33.63-9.76C216.27 237.87 208 240 208 250v62a24.07 24.07 0 0 1-24 24h0a24.07 24.07 0 0 1-24-24v-56h-2c-35.35 0-62-28.65-62-64a64 64 0 0 1 64-64h8v-8a88 88 0 0 1 176 0v8h8a64 64 0 0 1 0 128c-21.78 0-42-13-52.59-32.51Z"></svg:path>`,
})
export class IonIceCreamOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIdCardOutlineIcon],svg[ion-id-card-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="320" height="448" x="96" y="32" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M208 80h96"></svg:path><svg:path fill="currentColor" d="M333.48 284.51A39.65 39.65 0 0 0 304 272c-11.6 0-22.09 4.41-29.54 12.43s-11.2 19.12-10.34 31C265.83 338.91 283.72 358 304 358s38.14-19.09 39.87-42.55c.88-11.78-2.82-22.77-10.39-30.94M371.69 448H236.31a12.05 12.05 0 0 1-9.31-4.17a13 13 0 0 1-2.76-10.92c3.25-17.56 13.38-32.31 29.3-42.66C267.68 381.06 285.6 376 304 376s36.32 5.06 50.46 14.25c15.92 10.35 26.05 25.1 29.3 42.66a13 13 0 0 1-2.76 10.92a12.05 12.05 0 0 1-9.31 4.17"></svg:path>`,
})
export class IonIdCardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionImageOutlineIcon],svg[ion-image-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="352" x="48" y="80" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:circle cx="336" cy="176" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m304 335.79l-90.66-90.49a32 32 0 0 0-43.87-1.3L48 352m176 80l123.34-123.34a32 32 0 0 1 43.11-2L464 368"></svg:path>`,
})
export class IonImageOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionImagesOutlineIcon],svg[ion-images-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M432 112V96a48.14 48.14 0 0 0-48-48H64a48.14 48.14 0 0 0-48 48v256a48.14 48.14 0 0 0 48 48h16"></svg:path><svg:rect width="400" height="336" x="96" y="128" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="45.99" ry="45.99"></svg:rect><svg:ellipse cx="372.92" cy="219.64" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" rx="30.77" ry="30.55"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M342.15 372.17L255 285.78a30.93 30.93 0 0 0-42.18-1.21L96 387.64M265.23 464l118.59-117.73a31 31 0 0 1 41.46-1.87L496 402.91"></svg:path>`,
})
export class IonImagesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionInfiniteOutlineIcon],svg[ion-infinite-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c37.51 0 71-22.41 94-48m32-48s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-37.51 0-71 22.41-94 48"></svg:path>`,
})
export class IonInfiniteOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionInformationCircleOutlineIcon],svg[ion-information-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184s184-82.39 184-184S349.61 64 248 64Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M220 220h32v116"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 340h88"></svg:path><svg:path fill="currentColor" d="M248 130a26 26 0 1 0 26 26a26 26 0 0 0-26-26"></svg:path>`,
})
export class IonInformationCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionInformationOutlineIcon],svg[ion-information-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="40" d="M196 220h64v172"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="40" d="M187 396h138"></svg:path><svg:path fill="currentColor" d="M256 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonInformationOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionInvertModeOutlineIcon],svg[ion-invert-mode-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="currentColor" d="M256 176v160a80 80 0 0 1 0-160m0-128v128a80 80 0 0 1 0 160v128c114.88 0 208-93.12 208-208S370.88 48 256 48"></svg:path>`,
})
export class IonInvertModeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAddCircleOutlineIcon],svg[ion-ios-add-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M346.5 240H272v-74.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-74.5c-8.8 0-16 6-16 16s7.5 16 16 16H240v74.5c0 9.5 7 16 16 16s16-7.2 16-16V272h74.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" fill="currentColor"></svg:path><svg:path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"></svg:path>`,
})
export class IonIosAddCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAlarmOutlineIcon],svg[ion-ios-alarm-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M438.4 192.4c12.2-14.2 19.6-32.3 19.6-52.2.1-43.8-35.5-79.6-80.4-82.1-1.6-.1-3.1-.1-4.8-.1-20.4-.1-39.1 6.8-53.8 18.1l53.8 52.4-10.5 10.4c-25.7-19.4-57-32-91-34.9v-.1c0-8.5-7-15.5-15.5-15.5s-15.5 7-15.5 15.5v.1c-33.9 2.9-65.1 15.5-90.7 34.9l-10.4-10.4L193 76.1c-14.7-11.4-33.4-18.2-53.7-18.1-1.6 0-3.2.1-4.8.1-45 2.5-80.6 38.3-80.4 82.1 0 19.8 7.4 38 19.6 52.2l54-52.6 9.5 9.5c-35.1 31.9-57.1 78-57.1 129.2 0 43.9 16.2 84 43 114.7l-36.4 44.6L99 448l35.2-42.9c31.6 30.2 74.4 48.9 121.6 48.9h.4c47.2 0 90.2-18.7 121.8-48.9l35.2 43 12.3-10.1-36.5-44.7c26.8-30.8 43-70.9 43-114.7 0-51.1-22-97.3-57.2-129.3l9.5-9.5 54.1 52.6zM76.2 167.8c-4.2-8.6-6.4-18.4-6.5-28-.1-35.1 28.4-64.6 65.5-66.8 12.7-.7 23.1 1.4 32.1 6.1l-91.1 88.7zm339.7 108.7c0 87.7-72 157.1-160.1 157.1-88 0-159.8-69.4-159.8-157.1 0-87.7 71.8-158.7 159.9-158.7 88.1 0 160 70.9 160 158.7zM344.7 79.2c8.8-4.8 19.3-6.8 32.1-6.1 37.2 2 65.6 31.5 65.5 66.8 0 9.6-2.3 19.4-6.5 28.1l-91.1-88.8z" fill="currentColor"></svg:path><svg:path d="M256 160v128h-96v16h112V160z" fill="currentColor"></svg:path>`,
})
export class IonIosAlarmOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAlbumsOutlineIcon],svg[ion-ios-albums-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M464 144v288H48V144h416m16-16H32v320h448V128z" fill="currentColor"></svg:path><svg:path d="M72 96h368v16H72z" fill="currentColor"></svg:path><svg:path d="M104 64h304v16H104z" fill="currentColor"></svg:path>`,
})
export class IonIosAlbumsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAmericanfootballOutlineIcon],svg[ion-ios-americanfootball-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M378.605 133.395C305.902 60.691 189.38 47.998 116.85 48c-38.926.001-65.191 3.658-65.191 3.658s-29.984 215.227 81.736 326.947C206.099 451.309 322.617 464 395.149 464c38.926 0 65.192-3.658 65.192-3.658s29.985-215.226-81.736-326.947zM65.142 65.208C76.137 64.194 94.374 63 116.856 63H117l-.068-.071c27.167 0 53.167 1.754 77.792 5.22L68.124 194.73a515.877 515.877 0 0 1-2.64-22.246c-4.586-47.435-2.086-88.228-.342-107.276zM143.9 368.102c-23.85-23.852-42.793-54.938-56.304-92.396-6.973-19.332-12.51-40.373-16.57-62.866L212.838 71.05c10.672 1.929 21.064 4.191 31.141 6.804 52.027 13.492 93.783 35.708 124.139 66.064 23.851 23.85 42.786 54.928 56.297 92.386 6.974 19.333 12.509 40.375 16.567 62.871L299.17 440.986c-10.66-1.93-21.041-4.191-31.104-6.801-52.03-13.489-93.806-35.726-124.166-66.083zm302.961 78.766c-10.994 1.012-29.23 2.275-51.71 2.275-27.192 0-53.225-1.77-77.876-5.25l126.607-126.607a516.862 516.862 0 0 1 2.638 22.233c4.588 47.437 2.086 88.298.341 107.349z" fill="currentColor"></svg:path><svg:path d="M307.304 317.847l22.625 22.632-28.654 28.652 11.315 11.314 67.881-67.881-11.314-11.314-28.721 28.721-22.625-22.631 28.716-28.717-11.313-11.313-28.715 28.714-22.633-22.638 28.702-28.702-11.313-11.314-28.7 28.7-22.626-22.631 28.697-28.697-11.314-11.313-28.694 28.695-22.631-22.637 28.687-28.687-11.313-11.313-28.685 28.685-22.624-22.63 28.682-28.682-11.313-11.313-67.883 67.882 11.314 11.314 28.693-28.694 22.624 22.63-28.691 28.691 11.313 11.313 28.689-28.689 22.63 22.637-28.678 28.679 11.313 11.313 28.677-28.677 22.626 22.631-28.674 28.674 11.314 11.313 28.671-28.671 22.633 22.638-28.66 28.66 11.314 11.314z" fill="currentColor"></svg:path>`,
})
export class IonIosAmericanfootballOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAnalyticsOutlineIcon],svg[ion-ios-analytics-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48c28.087 0 55.325 5.497 80.958 16.339 24.767 10.476 47.013 25.476 66.12 44.583s34.107 41.354 44.583 66.12C458.503 200.675 464 227.913 464 256s-5.497 55.325-16.339 80.958c-10.476 24.767-25.476 47.013-44.583 66.12s-41.354 34.107-66.12 44.583C311.325 458.503 284.087 464 256 464s-55.325-5.497-80.958-16.339c-24.767-10.476-47.013-25.476-66.12-44.583s-34.107-41.354-44.583-66.12C53.497 311.325 48 284.087 48 256s5.497-55.325 16.339-80.958c10.476-24.767 25.476-47.013 44.583-66.12s41.354-34.107 66.12-44.583C200.675 53.497 227.913 48 256 48m0-16C132.288 32 32 132.288 32 256s100.288 224 224 224 224-100.288 224-224S379.712 32 256 32z" fill="currentColor"></svg:path><svg:path d="M107.776 320c-25.252 0-41.168-18.448-41.902-19.317a7.906 7.906 0 0 1 .982-11.192c3.374-2.813 8.401-2.388 11.248.948.604.701 14.606 16.597 35.606 13.186 12.104-1.964 28.08-25.681 38.652-41.376 4.251-6.311 7.922-11.761 11.215-15.856 16.773-20.865 33.899-23.333 45.325-21.726 24.139 3.394 44.358 27.498 53.689 49.882 7.454 17.884 19.042 28.256 32.628 29.208 15.408 1.061 31.539-9.885 43.105-29.336 1.228-2.064 2.562-4.496 3.978-7.07 9.482-17.262 23.814-43.35 51.75-43.35 31.146 0 51.957 34.286 52.828 35.746 2.252 3.774.996 8.648-2.806 10.885-3.8 2.237-8.708.988-10.96-2.786-.037-.062-4.493-7.413-11.859-14.568-6.286-6.107-16.108-13.387-27.203-13.387-18.438 0-29.121 19.445-37.705 35.07-1.48 2.696-2.88 5.243-4.245 7.538-14.718 24.751-36.4 38.635-58.01 37.108-19.951-1.398-36.389-15.242-46.284-38.98-10.013-24.02-28.279-38.417-41.149-40.228-10.6-1.494-20.895 3.861-30.578 15.906-2.872 3.573-6.539 9.017-10.421 14.779-13.549 20.114-30.411 45.146-49.37 48.223a53.122 53.122 0 0 1-8.514.693z" fill="currentColor"></svg:path>`,
})
export class IonIosAnalyticsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAtOutlineIcon],svg[ion-ios-at-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M364.4 320.9c-5.3 7.5-11.6 14.7-18.8 21.4-7.1 6.6-15.1 12.5-23.7 17.4-8.6 4.9-17.9 8.8-27.5 11.5s-19.8 4.1-30.3 4.1c-15.9 0-31.2-2.6-45.5-7.6-14.2-5-26.8-12.5-37.5-22.4-10.7-9.8-21.7-25.9-28.2-41-5.8-13.4-8.1-27.8-8.1-49.5 0-15.6 3.6-33 9.8-47.6 6-14 14.3-26.4 24.9-36.9 10.4-10.3 23-18.6 37.6-24.8 13.1-5.5 28.5-8.2 47.1-8.2 14.9 0 29 2.4 41.9 7 12.8 4.6 23.9 11.2 33.1 19.6 8.7 7.9 14 17.4 19.7 30.2 5 11.2 6.8 20.9 6.8 35.9 0 12.4-2.2 24.1-6.5 34.9-4.3 10.6-7.5 17-14 25-6.6 7.9-10.6 12.7-18.1 17.1-8.6 5-15.3 7.4-21 7.4-3.6 0-6.3-.7-7.8-2s-2.4-3-2.7-5.4c-.4-2.8-.1-6.3 1-10.4 1.1-4.4 2.8-8.6 4.9-13.7L339.4 181h-17.8l-6.2 16.5c-3.8-6.1-9.1-11.5-15.9-15.5-10.5-6.1-19.5-8.8-31.2-8.8-13.5 0-26 3.5-37.2 10.4-11 6.8-20.5 15.6-28.2 26.3-7.5 10.3-9.3 15.7-12.9 26.4l-.6 1.7c-4.2 12.4-6.3 24.6-6.3 36.2 0 7.7 1.4 15 4.1 21.8 2.7 6.8 6.4 12.8 11.1 17.8 4.7 5.1 10.4 9.1 16.9 12.1s13.7 4.5 21.3 4.5c8.5 0 16.6-1.4 26.1-4.7 6.3-2.2 11.9-5.8 17.4-11.4 1 3.2 2.7 6 5.3 8.5 5 5 11.7 7.6 19.9 7.6 8.6 0 17.8-3 29-9.3 9.9-5.6 15.7-12 23.3-21.1 8.2-9.8 12.3-18 16.9-29.7 5-12.5 7.5-26 7.5-40.3 0-18-2.4-30.2-8.5-43.6-6.6-14.3-13.2-25.8-24-35.4-10.9-9.6-23.9-17.1-38.5-22.3-14.5-5.1-30.3-7.7-46.7-7.7-20.1 0-37.2 3-52.2 9.1-16.5 6.7-30.9 16-43 27.6-12.2 11.8-22 25.9-29 41.9-7.3 16.6-11.4 36.7-11.4 55.1 0 25.1 3.1 42.6 10.3 58.4 8 17.3 21 35.4 33.3 46 12.6 10.9 27.1 19.1 43.2 24.2 15.9 5.1 32.3 7.7 48.8 7.7 11.4 0 22.8-1.6 34-4.6 11.2-3.1 22-7.4 32.1-13.1 10.1-5.6 19.5-12.5 28.2-20.6 8.6-8.1 18.6-20.8 22-26.9 1.3-2.4 2.2-4.3 2.9-5.8h-18.5l-.5.9zm-88.6-26.5c-4.4 5.6-7.7 9.5-11.8 12.2-4.4 3-7.9 4.9-12.4 5.9-4.6 1.2-9.3 1.7-13.7 1.7-5.6 0-10.8-1-15.4-3-4.7-2-8.7-4.8-12.1-8.4-3.4-3.6-6.1-7.9-8.1-12.7-1.9-4.8-2.9-10.2-2.9-16 0-9.5 1.8-19.7 5.3-30.3.4-1.2.8-2.4 1.1-3.4 2.8-8.6 4.3-11.5 9.5-20 5.7-9.4 14.1-16.6 23-22.5 8.6-5.8 18.2-8.7 28.5-8.7 4.2 0 8.6.5 13.2 1.5 3.6.8 5.6 1.9 9 3.9.6.3 1.1.6 1.7 1 3.9 2.2 7.4 5.1 10.4 8.7 2.7 3.2 4.8 7.4 6.3 12.3l-20.6 57.8c-3.2 8.1-6.9 14.8-11 20z" fill="currentColor"></svg:path>`,
})
export class IonIosAtOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBarcodeOutlineIcon],svg[ion-ios-barcode-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M48 384h80v-16H64V144h64v-16H48z" fill="currentColor"></svg:path><svg:path d="M384 128v16h64v224h-64v16h80V128z" fill="currentColor"></svg:path><svg:path d="M112 192h16v128h-16z" fill="currentColor"></svg:path><svg:path d="M384 192h16v128h-16z" fill="currentColor"></svg:path><svg:path d="M320 160h16v192h-16z" fill="currentColor"></svg:path><svg:path d="M176 160h16v192h-16z" fill="currentColor"></svg:path><svg:path d="M247 176h16v160h-16z" fill="currentColor"></svg:path>`,
})
export class IonIosBarcodeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBaseballOutlineIcon],svg[ion-ios-baseball-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M462.686 279.369c.132-1.182.257-2.365.369-3.554l.011-.117c.609-6.485.934-13.053.934-19.698 0-114.863-93.13-208-208-208-7.951 0-15.792.462-23.512 1.331l-.27.028v.003C135.207 60.409 58.442 138.199 48.989 235.687h-.004c-.072.748-.131 1.497-.195 2.246a205.782 205.782 0 0 0-.353 4.743c-.026.418-.056.835-.08 1.254a220.466 220.466 0 0 0-.163 3.371l-.032.843A211.116 211.116 0 0 0 48 256c0 114.863 93.137 208 208 208 2.627 0 5.239-.065 7.843-.162.293-.011.586-.021.878-.033 1.11-.046 2.219-.098 3.324-.16.454-.025.906-.058 1.359-.086 1.604-.103 3.201-.222 4.795-.36.704-.061 1.41-.115 2.113-.184v-.004c97.494-9.452 175.279-86.216 186.326-183.229h.004c.016-.137.028-.275.044-.413zM446.665 256c0 2.568-.066 5.122-.167 7.666a207.715 207.715 0 0 1-30.614-3.664l6.11-19.056-15.232-4.884-6.488 20.235a207.82 207.82 0 0 1-22.442-7.638 207.424 207.424 0 0 1-14.625-6.604l11.518-17.003-13.247-8.974-12.359 18.246c-12.241-7.35-23.703-15.977-34.305-25.812l14.73-14.73-11.313-11.313-14.73 14.73c-9.555-10.297-17.964-21.408-25.175-33.254l18.487-12.522-8.972-13.246-17.324 11.735a207.819 207.819 0 0 1-7.174-15.74 208.075 208.075 0 0 1-7.327-21.352l20.812-6.673-4.885-15.234-19.711 6.32a207.819 207.819 0 0 1-3.896-31.729c2.544-.101 5.097-.167 7.665-.167C361.132 65.335 446.665 150.869 446.665 256zm-381.328 0c0-1.317.023-2.629.05-3.939a207.701 207.701 0 0 1 26.891 3.409l-7.115 22.191 15.235 4.885 7.5-23.391a208.056 208.056 0 0 1 22.738 7.721 207.513 207.513 0 0 1 15.197 6.896l-13.405 19.79 13.246 8.973 14.219-20.992c12.038 7.279 23.32 15.793 33.765 25.483l-16.853 16.853 11.313 11.314 16.854-16.854c9.968 10.744 18.7 22.369 26.114 34.796l-20.753 14.058 8.972 13.246 19.473-13.19a208.258 208.258 0 0 1 14.363 37.894l-22.832 7.32 4.884 15.233 21.531-6.903a207.698 207.698 0 0 1 3.215 25.822c-1.311.026-2.622.05-3.939.05C150.87 446.664 65.336 361.13 65.337 256zm210.556 189.629a225.091 225.091 0 0 0-3.859-29.746l24.1-7.727-4.884-15.232-22.896 7.341a222.73 222.73 0 0 0-16.234-42.054l20.172-13.664-8.973-13.246-18.988 12.862a223.836 223.836 0 0 0-28.04-37.145l17.081-17.081-11.313-11.313-17.082 17.081a223.959 223.959 0 0 0-36.108-27.414l12.696-18.743-13.246-8.972-13.446 19.85a222.682 222.682 0 0 0-42.094-16.494l7.158-22.325-15.235-4.885-7.52 23.452a224.982 224.982 0 0 0-30.81-4.067C75.54 148.07 144.864 77.653 232.395 66.796a225.012 225.012 0 0 0 4.543 35.339l-25.935 8.316 4.885 15.234 24.903-7.985a222.673 222.673 0 0 0 16.386 41.246l-22.322 15.121 8.973 13.246 21.236-14.385c7.688 12.528 16.735 24.455 27.116 35.59l-19.204 19.204 11.313 11.314 19.204-19.205a223.968 223.968 0 0 0 36.647 27.745l-14.555 21.486 13.248 8.974 15.328-22.628a222.64 222.64 0 0 0 41.229 16.118l-8.168 25.477 15.232 4.884 8.525-26.59a225.095 225.095 0 0 0 34.224 4.31c-10.856 87.53-81.273 156.853-169.31 166.022z" fill="currentColor"></svg:path>`,
})
export class IonIosBaseballOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBasketballOutlineIcon],svg[ion-ios-basketball-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.137 48 48 141.136 48 256s93.137 208 208 208c114.871 0 208-93.138 208-208S370.871 48 256 48zm190.664 208l-.002.145c-22.315-1.721-43.989-6.972-64.62-15.699a206.906 206.906 0 0 1-49.479-29.634 527.032 527.032 0 0 0 52.824-94.715c37.658 34.853 61.277 84.669 61.277 139.903zm-74.058-150.739c-.28.676-.55 1.354-.835 2.028-13.908 32.883-31.062 63.956-51.286 92.987a215.409 215.409 0 0 1-4.563-4.413c-19.107-19.107-34.107-41.354-44.583-66.12-8.697-20.563-13.933-42.163-15.671-64.401.111 0 .221-.004.332-.004 43.884-.001 84.347 14.911 116.606 39.923zM239.675 66.044c4.431 58.126 31.044 110.041 71.391 147.312a513.394 513.394 0 0 1-30.319 36.965c-47.554-50.032-104.815-90.746-168.767-119.132 31.636-36.456 76.853-60.814 127.695-65.145zm41.012 207.796c36.229 40.67 65.48 86.438 87.185 136.453-25.4 18.467-55.51 30.829-88.162 34.898-2.272-47.816-19.521-91.707-47.179-127.071a531.537 531.537 0 0 0 48.156-44.28zm-18.648-3.801a518.699 518.699 0 0 1-39.778 35.87c-38.737-42.885-93.831-70.706-155.45-73.635 4.07-32.646 16.432-62.75 34.896-88.146 59.195 25.688 112.445 61.947 158.332 107.833a523.63 523.63 0 0 1 9.812 10.089 524.704 524.704 0 0 1-7.812 7.989zM65.508 248.23c25.238 1.145 49.436 6.797 71.45 16.109 24.767 10.476 47.013 25.476 66.12 44.583a212.54 212.54 0 0 1 6.584 6.895c-31.414 23.915-65.427 44.049-101.708 60.182C81.322 343.205 65.336 301.437 65.336 256c0-2.604.068-5.191.172-7.77zm53.559 140.296a527.776 527.776 0 0 0 100.914-60.521 206.935 206.935 0 0 1 27.68 47.037c9.614 22.729 15.013 46.724 16.114 71.45-2.58.104-5.17.172-7.775.172-53.683 0-102.249-22.311-136.933-58.138zm261.743 11.495c-22.489-50.671-52.72-97.14-89.191-137.909a530.62 530.62 0 0 0 31.556-38.336c34.171 27.342 76.521 44.885 122.801 48.363-4.29 50.919-28.665 96.208-65.166 127.882z" fill="currentColor"></svg:path>`,
})
export class IonIosBasketballOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBellOutlineIcon],svg[ion-ios-bell-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M381.7 225.9c0-97.6-52.5-130.8-101.6-138.2 0-.5.1-1 .1-1.6 0-12.3-10.9-22.1-24.2-22.1-13.3 0-23.8 9.8-23.8 22.1 0 .6 0 1.1.1 1.6-49.2 7.5-102 40.8-102 138.4 0 113.8-28.3 126-66.3 158h384c-37.8-32.1-66.3-44.4-66.3-158.2zM107.2 368c8.6-9 16.4-18.4 22.7-31.8 12-25.3 17.4-59.2 17.4-110.2 0-46.4 12.5-80.4 37.1-101.2 22.9-19.3 51.7-23.3 71.8-23.3 20.1 0 48.9 4 71.6 23.3 24.5 20.7 37 54.5 37 100.9 0 83.8 14.9 117.3 40.3 142.3H107.2z" fill="currentColor"></svg:path><svg:path d="M256.2 448c26.8 0 48.8-19.9 51.7-43H204.5c2.8 23.1 24.9 43 51.7 43z" fill="currentColor"></svg:path>`,
})
export class IonIosBellOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBodyOutlineIcon],svg[ion-ios-body-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 47.959c17.645 0 32 14.351 32 31.991s-14.355 31.99-32 31.99-32-14.351-32-31.99c0-17.64 14.355-31.991 32-31.991m0-15.995c-26.51 0-48 21.483-48 47.986 0 26.502 21.49 47.985 48 47.985s48-21.483 48-47.985c0-26.503-21.49-47.986-48-47.986z" fill="currentColor"></svg:path><svg:path d="M424 144H88c-13.255 0-24 10.747-24 24s10.745 24 24 24h100.451c5.549 0 13.197 4.295 17.216 14.708 4.651 12.055 2.37 33.33-.539 51.444l-3.923 21.26c-.019.104-.205.1-.205.203l-32.229 172.238c-2.303 13.051 6.487 25.494 19.54 27.797a24.52 24.52 0 0 0 4.218.367c11.357 0 20.917-8.19 22.97-19.836L236 340.242v.166S243.25 309 255.452 309h1.096C269 309 274 340.408 274 340.408v-.082l21.483 119.895c2.052 11.642 12.331 19.815 23.763 19.815a25.13 25.13 0 0 0 4.268-.368c13.053-2.303 21.821-14.76 19.519-27.811l-32.349-172.251c-.002-.008.011-.02.009-.027-.019-.104-.032-.217-.052-.322l-3.771-21.411c-2.909-18.119-5.188-39.083-.538-51.137C310.351 196.295 318.5 192 323.549 192H424c13.255 0 24-10.747 24-24s-10.745-24-24-24zM88 176.113c-4.411 0-8-3.646-8-8.057 0-4.411 3.589-8.057 8-8.057h336c4.411 0 8 3.59 8 8s-3.589 8-8 8H322.5c-15.538 0-27.438 14.738-30.982 23.922-4.846 12.557-5.004 31.942-.388 60.688l-.009.104.006.11 3.367 19.138.562 3.241 32.252 171.628c.5 2.834-.62 4.961-1.332 5.977-.713 1.017-2.335 2.799-5.179 3.301a8.324 8.324 0 0 1-1.427.126c-3.893 0-7.207-2.639-7.883-6.472L290.255 338h-.015c-.271-2-1.828-10.05-5.022-18.771-2.278-6.217-4.844-11.034-7.844-15.005-7.091-9.388-15.239-11.224-20.826-11.224h-1.096c-5.47 0-13.503 1.731-20.71 10.938-3.05 3.896-5.729 8.671-8.19 14.802-3.628 9.037-5.505 17.654-5.708 18.613l-.11.369-20.728 119.9c-.693 3.886-3.75 6.596-7.441 6.596-.459 0-.932-.043-1.403-.127-2.84-.5-4.455-2.275-5.165-3.288a7.961 7.961 0 0 1-1.323-5.975l32.257-171.562.004-.019.174-.927 3.775-21.33.022-.125.021-.126c4.629-28.829 4.527-48.3-.332-60.891-3.543-9.181-13.576-23.737-31.76-23.737" fill="currentColor"></svg:path>`,
})
export class IonIosBodyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBoltOutlineIcon],svg[ion-ios-bolt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M273.9 132l-16.5 89.1L254 240h84l-99.8 140 16.5-89.1L258 272h-83.9l99.8-140m28.8-68L143 288h95.8l-29.5 160L369 224h-95.8l29.5-160z" fill="currentColor"></svg:path>`,
})
export class IonIosBoltOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBookOutlineIcon],svg[ion-ios-book-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M347.621 64c-40.941 0-79.121 14-91.578 44.495C242.5 78 205.408 64 164.466 64 109.265 64 64 89.98 64 143v283h22.14c12.86-26.334 44.238-42 78.325-42 40.224 0 73.877 27.528 81.617 64h19.714c7.739-36.472 41.495-64 81.722-64 34.085 0 61.149 11.666 78.429 42H448V143c0-53.02-45.177-79-100.379-79zM248 410.926C230 385.055 199.27 368 164.5 368c-34.769 0-64.5 10.055-83.5 35.926l-1 .537V141c3-41.825 40.089-61 84.293-61 45.162 0 82.145 18.708 83.363 61.808-.017.729.016 1.459.016 2.192l.328 13.103v253.823zM432 148v255.926C414 378.055 382.269 368 347.5 368c-34.77 0-65.5 17.055-83.5 42.926V144c0-44.112 37.659-64 83.587-64C391.79 80 429 91.175 432 133v15z" fill="currentColor"></svg:path>`,
})
export class IonIosBookOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBookmarksOutlineIcon],svg[ion-ios-bookmarks-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M432 64H281.6c-10.3 0-19.3 4.6-25.6 11.7-6.2-7.2-15.3-11.7-25.6-11.7H80c-18.8 0-33 13.3-33 32v286.1c0 18.8 14.2 33.9 33 33.9h143.3c13.8 0 24.7 4.2 24.7 19.4V448h16v-12.6c0-15.3 10.9-19.4 24.7-19.4H432c18.8 0 33-15.1 33-33.9V96c0-18.7-14.2-32-33-32zM248 411.1c-4.7-7.8-13.5-11.1-23.8-11.1H80c-9.4 0-16-8.5-16-17.9V96c0-9.4 6.6-16 16-16h143.3c12.8 0 24.7 12.8 24.7 22.2v308.9zM320 80h64v100.4l-22.9-14.5-9.1-6.4-9.1 6.4-22.9 14.5V80zm128 302.1c0 9.4-6.6 17.9-16 17.9H287.8c-10.3 0-19.1 2.3-23.8 11.1V102.2c0-9.4 11.9-22.2 24.7-22.2H304v131l48-32 48 32V80h32c9.4 0 16 6.7 16 16v286.1z" fill="currentColor"></svg:path>`,
})
export class IonIosBookmarksOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBoxOutlineIcon],svg[ion-ios-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M287.8 240c8.8 0 16.1 7.2 16.1 16s-7 16-15.9 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h63m1-16h-64c-17.6 0-32 14.4-32 32s14.4 32 32 32h64c17.6 0 32-14.4 32-32s-14.4-32-32-32z" fill="currentColor"></svg:path><svg:path d="M416 112H96v80h16v208h288V192h16v-80zm-32 272H128V192h256v192zm16-208H112v-48h288v48z" fill="currentColor"></svg:path>`,
})
export class IonIosBoxOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBriefcaseOutlineIcon],svg[ion-ios-briefcase-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 128v-16h-32v16h-48V96c-.5-18.2-13.6-32-32.2-32h-99.1C186.1 64 176 77.7 176 96v32h-48v-16H96v16H48v320h416V128h-48zm-224-.5V98.1c0-10.2 2.9-18.1 13.7-18.1h97.1c10.4 0 17.2 7.7 17.2 18.1V128H192v-.5zM448 432H64V208h384v224zm0-240H64v-48h32v16h32v-16h256v16h32v-16h32v48z" fill="currentColor"></svg:path>`,
})
export class IonIosBriefcaseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBrowsersOutlineIcon],svg[ion-ios-browsers-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 144v304h303.9V144H64zm287.9 288H80V160h271.9v272z" fill="currentColor"></svg:path><svg:path d="M448 64H144v64h16V80h272v272h-48v16h64z" fill="currentColor"></svg:path>`,
})
export class IonIosBrowsersOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCalculatorOutlineIcon],svg[ion-ios-calculator-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M144 160h224V96H144v64zm16-48h192v32H160v-32z" fill="currentColor"></svg:path><svg:path d="M368 64H144c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm16 352c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16v320z" fill="currentColor"></svg:path><svg:path d="M160 240v-48h-16v64h64v-16h-16z" fill="currentColor"></svg:path><svg:path d="M160 320v-48h-16v64h64v-16h-16z" fill="currentColor"></svg:path><svg:path d="M160 400v-48h-16v64h64v-16h-16z" fill="currentColor"></svg:path><svg:path d="M240 240v-48h-16v64h64v-16h-16z" fill="currentColor"></svg:path><svg:path d="M320 240v-48h-16v64h64v-16h-16z" fill="currentColor"></svg:path><svg:path d="M240 320v-48h-16v64h64v-16h-16z" fill="currentColor"></svg:path><svg:path d="M240 400v-48h-16v64h64v-16h-16z" fill="currentColor"></svg:path><svg:path d="M320 400V272h-16v144h64v-16h-16z" fill="currentColor"></svg:path>`,
})
export class IonIosCalculatorOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCalendarOutlineIcon],svg[ion-ios-calendar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M80 112v64h352v-64"></svg:path><svg:path d="M352 96V64h-16v32H176V64h-16v32H64v352h384V96h-96zm80 336H80V192h352v240zm0-256H80v-64h80v32h16v-32h160v32h16v-32h80v64z" fill="currentColor"></svg:path>`,
})
export class IonIosCalendarOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCameraOutlineIcon],svg[ion-ios-camera-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M417.5 160h-61.7c-32.1-36-42.2-48-54.5-48h-88.5c-12.3 0-22.2 12-54.5 48H145v-16h-34v16H97.5C79.9 160 64 173.2 64 190.7v176c0 17.5 15.9 33.3 33.5 33.3h320c17.6 0 30.5-15.8 30.5-33.3v-176c0-17.5-12.9-30.7-30.5-30.7zM432 366.7c0 9.3-6.2 17.3-14.5 17.3h-320c-8.7 0-17.5-8.7-17.5-17.3v-176c0-8.2 8.1-14.7 17.5-14.7h67.8l4.8-3.2c4-4.5 7.7-10 11.1-13.8 11.3-12.7 19.5-21.7 25.3-26.9 4.7-4.2 6.2-4.1 6.2-4.1h88.5s1.6-.1 6.7 4.5c6.1 5.5 14.7 16.5 26.6 29.8 2.9 3.3 6 6.8 9.3 10.5l4.8 3.2h68.9c8.8 0 14.5 6 14.5 14.7v176z" fill="currentColor"></svg:path><svg:path d="M256 189.5c-47.1 0-85.5 38.4-85.5 85.5s38.4 85.5 85.5 85.5 85.5-38.4 85.5-85.5-38.4-85.5-85.5-85.5zm0 155c-38.4 0-69.5-31.1-69.5-69.5s31.1-69.5 69.5-69.5 69.5 31.1 69.5 69.5-31.1 69.5-69.5 69.5z" fill="currentColor"></svg:path><svg:path d="M352 192h17v17h-17z" fill="currentColor"></svg:path><svg:circle cx="256" cy="275" r="32" fill="currentColor"></svg:circle>`,
})
export class IonIosCameraOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCartOutlineIcon],svg[ion-ios-cart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M160 400c-13.248 0-24 10.752-24 24s10.752 24 24 24 24-10.752 24-24-10.752-24-24-24zm0 32c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" fill="currentColor"></svg:path><svg:path d="M384.5 400c-13.248 0-24 10.752-24 24s10.752 24 24 24 24-10.752 24-24-10.752-24-24-24zm0 32c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" fill="currentColor"></svg:path><svg:path d="M448 128L123.177 95.646c-1.628-6.972-4.369-14.66-11.838-20.667C102.025 67.489 86.982 64 64 64v16.001c18.614 0 31.167 2.506 37.312 7.447 4.458 3.585 5.644 8.423 7.165 15.989l-.024.004 42.052 233.638c2.413 14.422 7.194 25.209 13.291 32.986C171.043 379.312 180.533 384 192 384h240v-16H192c-4.727 0-19.136.123-25.749-33.755l-5.429-30.16L432 256l16-128zm-29.41 114.348l-260.601 45.99-31.732-176.3 303.869 30.608-11.536 99.702z" fill="currentColor"></svg:path>`,
})
export class IonIosCartOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosChatboxesOutlineIcon],svg[ion-ios-chatboxes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 64h256v96h16V48H48v224h112v-16H64z" fill="currentColor"></svg:path><svg:path d="M176 176v224h162.6l64 64H416v-64h48V176H176zm272 208h-48v54.6L345 384H192V192h256v192z" fill="currentColor"></svg:path>`,
})
export class IonIosChatboxesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosChatbubbleOutlineIcon],svg[ion-ios-chatbubble-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 112c97 0 176 62 176 138.3 0 35.9-17.6 69.2-49.5 93.9-32.8 25.4-77.4 39.3-125.5 39.3-28.9 0-51-3-69.7-9.3-.6-.2-1.3-.5-2-.7-.3-.1-.6-.2-.8-.2-4.7-1.4-9.7-2.1-14.7-2.1-5.6 0-11.1.9-16.3 2.6l-.3.1c-.6.2-8.9 3.3-11 4.3l-39.6 17.2c13.8-43.9 13.8-44.8 13.8-47.6 0-7.1-2.2-14.1-6.3-20.2-.5-.7-1-1.4-1.6-2.1-.7-.9-1.3-1.7-1.8-2.3-17.4-21.9-26.6-47.1-26.6-73C80 174 159 112 256 112m0-16C149.9 96 64 165.1 64 250.3c0 30.7 11.2 59.3 30.4 83.3.9.9 2.9 3.8 3.6 4.9 0 0-1-1.6-1.1-1.9 2.3 3.3 3.6 7.1 3.6 11.2 0 1.4-17.9 58-17.9 58-1.3 4.4 2.1 8.9 7.6 10 .8.2 1.6.2 2.4.2 1.3 0 2.5-.2 3.7-.5l1.6-.6 50.6-22c.9-.4 9-3.5 10-3.9l.6-.2s-.1 0-.6.2c3.4-1.2 7.2-1.8 11.2-1.8 3.6 0 7.1.5 10.3 1.5.1 0 .2 0 .2.1.5.2 1 .3 1.5.5 23.1 7.9 48.4 10.3 75.1 10.3 106 0 191-64.1 191-149.3C448 165.1 362 96 256 96z" fill="currentColor"></svg:path>`,
})
export class IonIosChatbubbleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCheckboxOutlineIcon],svg[ion-ios-checkbox-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 64H96c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm4 348c0 4.4-3.6 8-8 8H100c-4.4 0-8-3.6-8-8V100c0-4.4 3.6-8 8-8h312c4.4 0 8 3.6 8 8v312z" fill="currentColor"></svg:path><svg:path d="M363.6 192.9L346 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z" fill="currentColor"></svg:path>`,
})
export class IonIosCheckboxOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCheckmarkCircleOutlineIcon],svg[ion-ios-checkmark-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z" fill="currentColor"></svg:path><svg:path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"></svg:path>`,
})
export class IonIosCheckmarkCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCheckmarkOutlineIcon],svg[ion-ios-checkmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M340.1 177.3L215.3 303l-47.2-47.2-17.8 17.8 56 56c2.5 2.5 5.9 4.5 8.9 4.5s6.3-2 8.8-4.4l133.7-134.4-17.6-18z" fill="currentColor"></svg:path><svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z" fill="currentColor"></svg:path>`,
})
export class IonIosCheckmarkOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCircleOutlineIcon],svg[ion-ios-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z" fill="currentColor"></svg:path>`,
})
export class IonIosCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosClockOutlineIcon],svg[ion-ios-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z" fill="currentColor"></svg:path><svg:path d="M256 256h-96v17.3h113.3V128H256z" fill="currentColor"></svg:path>`,
})
export class IonIosClockOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCloseCircleOutlineIcon],svg[ion-ios-close-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z" fill="currentColor"></svg:path><svg:path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"></svg:path>`,
})
export class IonIosCloseCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCloseOutlineIcon],svg[ion-ios-close-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M403.1 108.9c-81.2-81.2-212.9-81.2-294.2 0s-81.2 212.9 0 294.2c81.2 81.2 212.9 81.2 294.2 0s81.2-213 0-294.2zm-12.3 281.9c-74.3 74.3-195.3 74.3-269.6 0-74.3-74.3-74.3-195.3 0-269.6s195.3-74.3 269.6 0c74.4 74.3 74.4 195.3 0 269.6z" fill="currentColor"></svg:path><svg:path d="M340.2 160l-84.4 84.2-84-83.8-11.8 11.8 84 83.8-84 83.8 11.8 11.8 84-83.8 84.4 84.2 11.8-11.8-84.4-84.2 84.4-84.2z" fill="currentColor"></svg:path>`,
})
export class IonIosCloseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCloudDownloadOutlineIcon],svg[ion-ios-cloud-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M193.2 381.2l-11.6 11.4 74.5 73.4 74.5-73.4-11.6-11.4-54.7 53.8V192.9h-16.4V435z" fill="currentColor"></svg:path><svg:path d="M399.2 164.4c0-1.2.2-2.3.2-3.5C399.4 97.4 346.5 46 282.6 46c-46.1 0-85.8 26.8-104.4 65.4-8.1-4-17.1-6.3-26.8-6.3-29.6 0-54.1 23.3-58.9 51.3-35.2 12-60.6 43.4-60.6 82.4 0 49.1 40.1 89.2 89.6 89.2H213v-16h-90.7c-40.9 0-74.2-33.2-74.2-73.7 0-31.4 20.2-57.5 50.2-67.7l8.4-2.8 1.5-8.7c3.6-21.3 22.1-38.8 43.9-38.8 6.9 0 13.7 1.6 19.9 4.7l13.5 6.7 6.5-13.6c16.6-34.4 52.1-56.6 90.4-56.6 55.3 0 100.9 42.8 100.9 97.6 0 13.1-.2 20.1-.2 20.1l15.2.1c36.7.5 65.6 30 65.6 66.4 0 36.3-29.8 66.1-66.5 66.3l-3.2.1H297v16h101c45 0 81.9-37.2 81.9-82.1 0-45-35.4-81.5-80.7-81.6z" fill="currentColor"></svg:path>`,
})
export class IonIosCloudDownloadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCloudOutlineIcon],svg[ion-ios-cloud-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M288 124c30.3 0 59.3 11.2 81.8 31.5 22.3 20.1 36.3 47.6 39.5 77.3l1.2 11.1c.6 5.8 5 10.5 10.7 11.5l11 2c14 2.5 27 10.4 36.7 22.1 9.8 12 15.2 26.9 15.2 42.1 0 17-6.9 34.1-18.9 46.8C453 381 437.4 388 421.1 388H90.9c-16.3 0-31.9-7-43.9-19.7s-18.9-29.7-18.9-46.8c0-14.4 4.6-28.9 13.1-40.9 8.6-12.2 20.2-20.9 33.7-25.1l10.3-3.3c5.3-1.7 9-6.6 9.1-12.2l.2-10.8c.2-11.8 5.1-23.6 13.5-32.4 8.3-8.7 18.9-13.4 29.9-13.4 5.6 0 11.1 1.1 16.3 3.2l11.1 4.5c5.7 2.3 12.2.4 15.7-4.7l6.8-9.8C210.4 143.7 248 124 288 124m0-28c-51.2 0-96.3 25.6-123.4 64.7-8.3-3.4-17.4-5.3-26.9-5.3-39.1 0-70.8 34.4-71.4 73.4C26.4 241.5 0 280.5 0 321.5 0 371.7 40.7 416 90.9 416h330.3c50.2 0 90.9-44.3 90.9-94.5 0-44.7-32.3-84.1-74.9-91.7C429 154.6 365.4 96 288 96z" fill="currentColor"></svg:path>`,
})
export class IonIosCloudOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCloudUploadOutlineIcon],svg[ion-ios-cloud-upload-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M193.3 260.4l-11.6-11.6 74.5-74.3 74.5 74.3-11.7 11.6-54.6-54.6v241.8h-16.5V205.8z" fill="currentColor"></svg:path><svg:path d="M399.3 183.6c0-1.2.2-2.4.2-3.6 0-64.3-52.8-116.4-116.8-116.4-46.1 0-85.8 27.1-104.4 66.3-8.1-4.1-17.1-6.4-26.8-6.4-29.6 0-54.1 23.6-58.9 52C57.4 187.6 32 222.2 32 261.8c0 49.7 40.1 90.2 89.6 90.2H213v-16h-90.6c-40.9 0-74.2-33.5-74.2-74.6 0-31.8 20.2-61.2 50.2-71.6l8.4-2.9 1.5-8.8c3.6-21.6 22.1-39.3 43.9-39.3 6.9 0 13.7 1.6 19.9 4.8l13.5 6.8 6.5-13.7c16.6-34.9 52.1-57.4 90.4-57.4 55.3 0 100.9 43.3 100.9 98.9 0 13.3-.2 20.3-.2 20.3l15.2.1c36.6.5 65.6 33.4 65.6 70.3 0 36.8-29.8 66.9-66.5 67.1H297v16h101c45 0 82-37.3 82-82.8s-35.5-85.5-80.7-85.6z" fill="currentColor"></svg:path>`,
})
export class IonIosCloudUploadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCloudyNightOutlineIcon],svg[ion-ios-cloudy-night-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M189 223.8c14.5 0 28.1 4.8 39.3 13.9 10.9 8.9 18.6 21.3 21.7 34.9l3.1 14 14.2-1.8c2.1-.3 4.1-.4 6.1-.4 26.9 0 48.8 22.1 48.8 49.2s-21.9 49.2-48.8 49.2H115.7c-9.5 0-18.5-3.9-25.4-10.8-6.8-7-10.6-16.2-10.6-25.9 0-18.6 14.5-33.8 33.2-36.9 1.6-.3 8.8-1.2 14.2-1.7 0 0-.5-5.3-.6-9.6-.1-4.3-.1-9.4-.1-11.5.1-34.4 28.1-62.6 62.6-62.6m0-15.8c-43.3 0-78.3 35.2-78.3 78.5 0 2.6.1 5.2.4 7.8-26.4 2.4-47.1 25.5-47.1 52.6 0 28.6 23.2 53.1 51.7 53.1h157.7c35.7 0 64.6-29.9 64.6-65.7 0-35.8-28.9-65.3-64.6-65.3-2.7 0-5.4 0-8 .3-7.9-35-39.1-61.3-76.4-61.3z" fill="currentColor"></svg:path><svg:path d="M424.6 305.6c-2 .1-3.9.1-5.9.1-32.3 0-62.7-12.6-85.5-35.5-22.8-22.9-35.4-53.3-35.4-85.7 0-18.4 4.1-36.2 11.8-52.4 3.4-7.1 7.5-13.9 12.3-20.2-8.4.9-16.6 2.7-24.4 5.1-37.2 11.8-67.1 40.2-81 76.5 5.9 1.2 11.6 3 17 5.4 10.1-25.5 29.4-46.4 53.8-58.6-4.6 13.9-7.1 28.7-7.1 44.1 0 27.3 7.9 52.8 21.4 74.2 13.8 21.8 33.5 39.5 56.8 50.9 15.3 7.4 32.2 12.1 50 13.5-14 12.2-31.2 20.9-50 24.8-1.9 6.9-4.9 13.4-8.6 19.3 33.6-3.6 63.3-20.1 84-44.6 5.4-6.3 10.2-13.2 14.2-20.5-7.6 2.1-15.4 3.2-23.4 3.6z" fill="currentColor"></svg:path>`,
})
export class IonIosCloudyNightOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCloudyOutlineIcon],svg[ion-ios-cloudy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M244 175.8c14.5 0 28.1 4.8 39.3 13.9 10.9 8.9 18.6 21.3 21.7 34.9l3.1 14 14.2-1.8c2.1-.3 4.1-.4 6.1-.4 26.9 0 48.8 22.1 48.8 49.2s-21.9 49.2-48.8 49.2H170.7c-9.5 0-18.5-3.9-25.4-10.8-6.8-7-10.6-16.2-10.6-25.9 0-18.6 14.5-33.8 33.2-36.9 1.6-.3 8.7-1.2 14.2-1.7 0 0-.5-5.3-.6-9.6-.1-4.3-.1-9.4-.1-11.5.1-34.4 28.1-62.6 62.6-62.6m0-15.8c-43 0-78.3 35.2-78.3 78.5 0 2.6.1 5.2.4 7.8-26.4 2.3-47.1 25.5-47.1 52.6 0 28.6 23.2 53.1 51.7 53.1h157.7c35.7 0 64.6-29.9 64.6-65.7S364.1 221 328.4 221c-2.7 0-5.4 0-8 .3-7.9-35-39.4-61.3-76.4-61.3z" fill="currentColor"></svg:path>`,
})
export class IonIosCloudyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCogOutlineIcon],svg[ion-ios-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 272.754v-32.008l-33.291-8.703-2.601-13.204 27.594-20.905-12.197-29.608-34.392 4.802-7.498-10.603 17.696-29.708-22.594-22.605-30.192 17.404-10.697-7.302 5.298-35.009-29.492-12.303-21.594 28.308-12.297-2.601L273.045 64h-31.991l-9.197 34.909-12.098 2.4-21.494-29.008-29.592 12.304 4.799 35.709-11.697 7.202-31.292-18.705-22.594 22.606 18.795 31.508-6.698 10.502-35.49-5.001-12.197 29.608 28.893 21.706-2.399 12.203L64 240.846v32.008l34.69 8.903 2.4 12.503-28.394 21.306 12.297 29.508 34.991-5.002 7.099 11.303-17.896 30.608 22.595 22.605 30.192-18.204 11.196 7.302-4.498 34.31 29.592 12.202 20.595-27.807 13.396 2.5L241.054 448h31.991l8.298-33.109 13.597-2.601 20.694 27.107 29.593-12.204-4.998-33.708 10.196-7.401 28.992 16.904 22.595-22.606-16.795-28.907 7.896-11.403 33.791 4.802 12.298-29.508-27.193-20.506 2.7-13.503L448 272.754zm-28.293 48.013l-2.8 6.702-31.891-4.501-18.896 27.807 15.695 27.106-5.198 5.202-27.293-15.904-26.593 18.204 4.799 31.809-6.698 2.802-19.595-25.607-32.892 6.501-7.798 31.209h-7.198l-8.397-31.309-32.592-6.501-19.495 26.406-6.698-2.801 4.399-32.509-27.493-18.304-28.793 17.504-5.099-5.101 16.996-29.108-18.096-27.606-33.191 4.701-2.699-6.603 26.894-20.205-6.199-31.809-32.991-8.502v-7.202l32.991-8.402 6.299-31.608-27.293-20.505 2.699-6.602 33.691 4.801 17.796-26.807-17.996-30.008 4.999-5.001 20.595 12.303 9.197 5.501 27.893-18.205-4.499-33.809 6.699-2.8 20.294 27.407 31.492-6.102 8.798-33.208h7.198l8.298 33.008 31.691 6.301 20.095-26.807 6.598 2.801-4.999 33.108 27.193 18.105 28.292-16.205 5.1 5.102-16.695 28.007 18.396 27.007 32.491-4.601 2.799 6.702-26.193 19.705 6.498 32.508 31.292 8.102v7.202l-31.391 8.103-6.499 32.709 25.993 19.807z" fill="currentColor"></svg:path><svg:path d="M256 128c-70.692 0-128 57.308-128 128 0 70.693 57.308 128 128 128s128-57.307 128-128c0-70.692-57.308-128-128-128zM144 256c0-29.916 11.65-58.042 32.804-79.195C197.958 155.65 226.084 144 256 144c7.496 0 14.88.732 22.069 2.161L250.3 250.1l-104.155 27.888A113.183 113.183 0 0 1 144 256zm112 112c-29.917 0-58.042-11.65-79.196-32.804-11.927-11.926-20.831-26.069-26.331-41.499L253.9 266.2l74.935 74.889C308.558 358.501 283.009 368 256 368zm84.154-38.099L265.2 254.9l28.05-104.58c15.604 5.487 29.904 14.443 41.945 26.484C356.35 197.958 368 226.084 368 256c0 27.486-9.841 53.457-27.846 73.901z" fill="currentColor"></svg:path>`,
})
export class IonIosCogOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosColorFilterOutlineIcon],svg[ion-ios-color-filter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M366.195 212.122A112.581 112.581 0 0 0 368.001 192c0-61.856-50.145-112.001-112.001-112.001S143.999 130.144 143.999 192c0 6.87.621 13.594 1.806 20.122C98.616 225.302 63.999 268.606 63.999 320c0 61.856 50.145 112.001 112.001 112.001 31.342 0 59.671-12.879 80-33.627 20.329 20.748 48.658 33.627 80 33.627 61.856 0 112.001-50.145 112.001-112.001 0-51.394-34.617-94.697-81.806-107.878zM159.999 192c0-52.935 43.065-96.001 96.001-96.001s96.001 43.066 96.001 96.001c0 5.776-.513 11.435-1.495 16.933-4.749-.614-9.59-.934-14.506-.934-31.342 0-59.671 12.879-80 33.627-20.329-20.748-48.658-33.627-80-33.627-4.916 0-9.757.319-14.506.934A96.248 96.248 0 0 1 159.999 192zm112.002 128c0 19.58-5.896 37.806-16.001 53.006-10.104-15.2-16.001-33.426-16.001-53.006 0-5.776.513-11.435 1.495-16.933a113.082 113.082 0 0 0 29.012 0A96.248 96.248 0 0 1 272.001 320zM256 288.001a96.29 96.29 0 0 1-10.314-.556A95.787 95.787 0 0 1 256 266.994a95.74 95.74 0 0 1 10.314 20.451 96.29 96.29 0 0 1-10.314.556zm-26.209-3.637c-29.756-8.455-53.666-30.937-64.105-59.81 3.39-.364 6.83-.556 10.314-.556 27.353 0 52.069 11.5 69.572 29.917a111.686 111.686 0 0 0-15.781 30.449zm36.637-30.447c17.503-18.418 42.219-29.918 69.572-29.918 3.484 0 6.925.191 10.314.556-10.439 28.873-34.35 51.354-64.105 59.81a111.637 111.637 0 0 0-15.781-30.448zM176 416.001c-52.936 0-96.001-43.065-96.001-96.001 0-43.852 29.555-80.931 69.792-92.364 11.732 34.983 40.265 62.257 76.014 72.243A112.57 112.57 0 0 0 223.999 320c0 24.717 8.013 47.559 21.573 66.084-17.503 18.417-42.219 29.917-69.572 29.917zm160 0c-27.354 0-52.069-11.5-69.572-29.918 13.561-18.524 21.573-41.366 21.573-66.083 0-6.869-.621-13.594-1.806-20.121 35.749-9.986 64.281-37.26 76.014-72.243 40.237 11.434 69.792 48.513 69.792 92.364 0 52.936-43.065 96.001-96.001 96.001z" fill="currentColor"></svg:path>`,
})
export class IonIosColorFilterOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosColorWandOutlineIcon],svg[ion-ios-color-wand-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M192.011 149.661l-34.043 34.041 256.097 256.096L448 405.757 192.011 149.661zm20.585 66.041l11.415-11.414 201.468 201.469-11.414 11.414-201.469-201.469z" fill="currentColor"></svg:path><svg:path d="M184 64h16v40h-16z" fill="currentColor"></svg:path><svg:path d="M184 268h16v40h-16z" fill="currentColor"></svg:path><svg:path d="M280 176h40v16h-40z" fill="currentColor"></svg:path><svg:path d="M64 176h40v16H64z" fill="currentColor"></svg:path><svg:path d="M139.675 122.558l-11.313 11.314-28.284-28.284 11.313-11.314z" fill="currentColor"></svg:path><svg:path d="M111.389 278.128l-11.312-11.312 28.284-28.284 11.312 11.312z" fill="currentColor"></svg:path><svg:path d="M255.641 133.877l-11.313-11.313L272.61 94.28l11.313 11.313z" fill="currentColor"></svg:path>`,
})
export class IonIosColorWandOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosComposeOutlineIcon],svg[ion-ios-compose-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M368 416H80V144h224.117l16-16H64v304h320V191.883l-16 16z" fill="currentColor"></svg:path><svg:path d="M237.623 284.084l-9.706-9.707L399.24 103.054 387.927 91.74 208 271.651V304h32.216l180.045-179.984-11.314-11.286z" fill="currentColor"></svg:path><svg:path d="M444.213 80.312l-12.465-12.466C429.084 65.467 425.556 64 421.746 64a14.758 14.758 0 0 0-9.929 3.85L399.666 80l.08.08 11.293 11.293 21.02 21.02 12.15-12.15c2.383-2.625 3.791-6.117 3.791-9.929 0-3.81-1.408-7.339-3.787-10.002z" fill="currentColor"></svg:path>`,
})
export class IonIosComposeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosContactOutlineIcon],svg[ion-ios-contact-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 17.3c105.1 0 190.7 85.5 190.7 190.7 0 46.5-16.7 89.1-44.4 122.2-20-8.2-65.9-24.1-92.9-32.1-2.4-.7-2.7-.9-2.7-10.7 0-8.1 3.3-16.3 6.6-23.3 3.6-7.5 7.7-20.2 9.2-31.6 4.2-4.9 10-14.5 13.6-32.9 3.2-16.2 1.7-22.1-.4-27.6-.2-.6-.5-1.2-.6-1.7-.8-3.8.3-23.5 3.1-38.8 1.9-10.5-.5-32.8-14.9-51.3-9.1-11.7-26.6-26-58.5-28h-17.5c-31.4 2-48.8 16.3-58 28-14.5 18.5-16.9 40.8-15 51.3 2.8 15.3 3.9 35 3.1 38.8-.2.7-.4 1.2-.6 1.8-2.1 5.5-3.7 11.4-.4 27.6 3.7 18.4 9.4 28 13.6 32.9 1.5 11.4 5.7 24 9.2 31.6 2.6 5.5 3.8 13 3.8 23.6 0 9.9-.4 10-2.6 10.7-28.1 8.3-72.6 24.3-90.4 32-27.9-33.2-44.7-75.9-44.7-122.5 0-105.1 85.6-190.7 190.7-190.7z" fill="currentColor"></svg:path>`,
})
export class IonIosContactOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCopyOutlineIcon],svg[ion-ios-copy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M304 96h-16v80h80v-16h-64z" fill="currentColor"></svg:path><svg:path d="M325.3 64H160v48h-48v336h240v-48h48V139l-74.7-75zM336 432H128V128h32v272h176v32zm48-48H176V80h142.7l65.3 65.6V384z" fill="currentColor"></svg:path>`,
})
export class IonIosCopyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosDownloadOutlineIcon],svg[ion-ios-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M288 144v16h112v272H112V160h112v-16H96v304h320V144z" fill="currentColor"></svg:path><svg:path d="M193.1 252.3l-11.6 11.6 74.5 74.5 74.5-74.5-11.6-11.6-54.7 54.7V64h-16.4v243z" fill="currentColor"></svg:path>`,
})
export class IonIosDownloadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosEmailOutlineIcon],svg[ion-ios-email-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 128v256h384V128H64zm192 139.9L93.2 144h325.6L256 267.9zM80 368V154.1l115.1 87.6L127 319l2 2 78.9-69.6L256 288l48.1-36.6L383 321l2-2-68.1-77.4L432 154.1V368H80z" fill="currentColor"></svg:path>`,
})
export class IonIosEmailOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosEyeOutlineIcon],svg[ion-ios-eye-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M447.1 256.2C401.8 204 339.2 144 256 144c-33.6 0-64.4 9.5-96.9 29.8C131.7 191 103.6 215.2 65 255l-1 1 6.7 6.9C125.8 319.3 173.4 368 256 368c36.5 0 71.9-11.9 108.2-36.4 30.9-20.9 57.2-47.4 78.3-68.8l5.5-5.5-.9-1.1zM256 160c33.1 0 64.9 9.5 97.2 30.6 23.9 15.6 47.4 36.7 73.7 66.1C388.6 295.4 331.1 352 256 352c-34.2 0-64.2-8.4-94.2-28.2-27.5-18.1-52.3-43.3-76.2-67.8 59.1-59.7 108.4-96 170.4-96z" fill="currentColor"></svg:path><svg:path d="M256 336c44.1 0 80-35.9 80-80s-35.9-80-80-80-80 35.9-80 80 35.9 80 80 80zm0-143.7c35.2 0 64 28.6 64 63.7s-28.8 63.7-64 63.7-63.9-28.6-63.9-63.7 28.7-63.7 63.9-63.7z" fill="currentColor"></svg:path><svg:path d="M288 256c0 17.5-14.4 32-31.8 32S224 272.8 224 255.3s15.8-31.3 32-31.3v-16c-26.5 0-47.9 21.6-47.9 48.2s21.5 48.1 47.9 48.1 48-21.6 48-48.1v-.2h-16z" fill="currentColor"></svg:path>`,
})
export class IonIosEyeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFastforwardOutlineIcon],svg[ion-ios-fastforward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M48 155l183.5 101L48 356.9V155m224 .8L448 256 272 356.4V156m-16-28v123.2L32 128v256l224-123.2V384l224-128-224-128z" fill="currentColor"></svg:path>`,
})
export class IonIosFastforwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFilingOutlineIcon],svg[ion-ios-filing-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M368.5 128h-225L80 224v160h352V224l-63.5-96zm44.9 96H368v-68l45.4 68zM160 144h192v80h-48c0 26.5-21.5 48-48 48s-48-21.5-48-48h-48v-80zm-16 12v68H98.6l45.4-68zm272 212H96V240h98c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48h98v128z" fill="currentColor"></svg:path>`,
})
export class IonIosFilingOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFilmOutlineIcon],svg[ion-ios-film-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M56 88v336h400V88H56zm72 320H72v-48h56v48zm0-64H72v-48h56v48zm0-64H72v-48h56v48zm0-64H72v-48h56v48zm0-64H72v-48h56v48zm240 256H144V264h224v144zm0-160H144V104h224v144zm72 160h-56v-48h56v48zm0-64h-56v-48h56v48zm0-64h-56v-48h56v48zm0-64h-56v-48h56v48zm0-64h-56v-48h56v48z" fill="currentColor"></svg:path>`,
})
export class IonIosFilmOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFlagOutlineIcon],svg[ion-ios-flag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M368 112c-11 1.4-24.9 3.5-39.7 3.5-23.1 0-44-5.7-65.2-10.2-21.5-4.6-43.7-9.3-67.2-9.3-46.9 0-62.8 10.1-64.4 11.2l-3.4 2.4V416h16V272.7c6-2.5 21.8-6.9 51.9-6.9 21.8 0 42.2 8.3 63.9 13 22 4.7 44.8 9.6 69.5 9.6 14.7 0 27.7-2 38.7-3.3 6-.7 11.3-1.4 16-2.2V109.5c-4.7.9-10.1 1.7-16.1 2.5zm0 157c-11 1.4-23.9 3.5-38.7 3.5-23.1 0-45-4.7-66.2-9.2-21.5-4.6-43.6-13.3-67.1-13.3-25.7 0-41.9 3-51.9 6V118.7c6-2.5 21.9-6.8 51.9-6.8 21.8 0 42.2 4.3 63.9 9 22 4.7 43.8 10.6 68.5 10.6 14.7 0 28.7-2 39.7-3.3L368 269z" fill="currentColor"></svg:path>`,
})
export class IonIosFlagOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFlameOutlineIcon],svg[ion-ios-flame-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M223.899 32c25.691 145-96.732 142-95.895 288 .686 119.51 104.975 160 128.143 160 23.166 0 113.88-26 126.931-160 10.633-109.184-72.506-224-159.179-288zm32.248 440s-40.701-35.816-40.701-80c0-44.183 40.555-80 40.555-80s40.332 35.817 40.332 80c-.001 44.184-40.186 80-40.186 80zm111.006-153.551c-2.823 28.988-9.704 54.523-20.45 75.894-8.749 17.397-20.084 32.114-33.692 43.743a121.72 121.72 0 0 1-19.771 13.749c10.039-15.938 19.093-36.72 19.093-59.835 0-50.788-43.842-90.307-45.708-91.963l-10.594-9.41-10.621 9.381c-1.877 1.657-45.963 41.178-45.963 91.992 0 21.842 8.168 41.594 17.636 57.152a156.12 156.12 0 0 1-22.986-16.451c-14.688-12.67-26.365-27.608-34.708-44.402-10.063-20.255-15.239-43.265-15.383-68.391-.367-63.986 24.09-95.746 49.983-129.369 24.568-31.903 49.829-64.7 49.458-122.113 32.513 28.827 61.257 63.03 82.822 98.877 31.307 52.047 45.446 104.312 40.884 151.146z" fill="currentColor"></svg:path>`,
})
export class IonIosFlameOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFlaskOutlineIcon],svg[ion-ios-flask-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M436.912 370.441L320 175V48h16V32h-32v147.418l2.514 3.791 116.575 194.834c6.75 12.818 9.314 25.95 9.001 37.957-.243 9.339-1.958 17.938-6.545 25.569C417.076 455.666 402.33 464 384.981 464H129.093c-17.504 0-32.461-8.435-41.035-22.705-11.897-19.801-10.889-38.145 2.275-63.139L181.821 224H240v-16h-48.683l14.687-24.756L208 179.4V176h48v-16h-48v-32h32v-16h-32V80h48V64h-48V32h-32v16h16v127L76.126 370.441C67.714 386.268 63.615 401.814 64.027 416c1.061 36.511 28.702 64 65.065 64h255.889c36.291 0 62.131-27.598 62.992-64 .338-14.244-2.606-29.651-11.061-45.559z" fill="currentColor"></svg:path><svg:path d="M108.292 374.616c-6.907 10.542-10.936 24.095-10.936 33.55 0 27.584 15.82 39.834 45.682 39.834H368.97c29.804 0 44.975-15.711 45.681-39.959.277-9.488-3.143-22.729-10.086-33.324L332.729 256H179.5l-71.208 118.616zM323.705 272l67.168 110.87.151.124.159.182c5.382 8.212 7.647 18.275 7.476 24.18-.229 7.839-2.477 13.98-6.683 17.795-4.774 4.328-12.729 6.85-23.008 6.85H143.037c-11.064 0-19.27-2.236-23.73-5.996-1.472-1.24-5.954-5.143-5.954-18.088 0-5.943 2.857-16.383 8.319-24.717l.177-.302.166-.042L188.564 272h135.141z" fill="currentColor"></svg:path>`,
})
export class IonIosFlaskOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFlowerOutlineIcon],svg[ion-ios-flower-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M395.057 284.252c55.929 0 84.943-11.62 84.943-28.002s-29.016-28.003-84.943-28.003c-28.732 0-64.708 7.391-92.902 14.578a47.73 47.73 0 0 0-3.973-9.75c25.009-14.852 55.645-35.05 75.947-55.353 39.547-39.547 52.023-68.458 40.44-80.042-2.747-2.748-6.472-4.142-11.079-4.142-14.818 0-38.796 14.415-68.963 44.582-20.282 20.282-40.459 50.873-55.307 75.869a47.738 47.738 0 0 0-9.755-4.062C276.64 181.757 284 145.868 284 117.192 284.002 61.266 272.382 32 256 32s-28.002 29.266-28.002 85.194c0 28.676 7.362 64.565 14.536 92.735a47.682 47.682 0 0 0-9.755 4.062c-14.847-24.996-35.023-55.587-55.305-75.869-30.165-30.165-54.144-44.582-68.964-44.582-4.609 0-8.331 1.394-11.079 4.142-11.584 11.583.894 40.494 40.44 80.041 20.303 20.303 50.938 40.501 75.947 55.353a47.733 47.733 0 0 0-3.974 9.75c-28.194-7.188-64.169-14.578-92.901-14.578C61.016 228.247 32 239.618 32 256s29.016 28.252 84.944 28.252c28.777 0 64.82-7.413 93.034-14.611a47.598 47.598 0 0 0 4.055 9.656c-25.048 14.863-55.801 35.119-76.161 55.479-39.547 39.548-52.023 68.459-40.44 80.043 2.748 2.748 6.471 4.142 11.078 4.142 14.819 0 38.796-14.415 68.963-44.583 20.382-20.381 40.659-51.177 55.526-76.238a47.838 47.838 0 0 0 9.651 3.967c-7.211 28.238-14.654 64.367-14.654 93.201C227.998 451.234 239.618 480 256 480s28.002-28.766 28.002-84.693c0-28.834-7.441-64.963-14.652-93.201a47.806 47.806 0 0 0 9.65-3.967c14.867 25.062 35.145 55.857 55.527 76.239 30.164 30.165 54.144 44.582 68.963 44.582 4.608 0 8.33-1.394 11.078-4.142 11.584-11.584-.894-40.495-40.439-80.043-20.361-20.359-51.114-40.615-76.162-55.479a47.533 47.533 0 0 0 4.055-9.656c28.215 7.199 64.258 14.612 93.035 14.612zm-75.065-29.311c30.144-7.014 55.893-10.694 75.064-10.694 21.329 0 39.453 1.806 52.41 5.222 9.705 2.559 14.005 5.317 15.736 6.781-1.731 1.463-6.031 4.221-15.736 6.779-12.958 3.416-31.081 5.223-52.41 5.223-19.176 0-44.927-3.68-75.075-10.695l.011-2.616zm25.849-105.505c35.382-35.383 52.682-39.412 56.818-39.846-.211 2.305-1.343 7.326-6.404 15.991-6.786 11.62-18.35 25.738-33.439 40.828-13.533 13.534-34.3 29.111-60.513 45.438a64.194 64.194 0 0 0-1.895-1.904c16.324-26.214 31.901-46.975 45.433-60.507zm-136.143 62.41c-26.213-16.326-46.979-31.904-60.512-45.437-15.09-15.091-26.653-29.208-33.439-40.828-5.061-8.665-6.194-13.687-6.404-15.992 4.138.435 21.436 4.463 56.818 39.845 13.533 13.533 29.108 34.295 45.433 60.507a63.064 63.064 0 0 0-1.896 1.905zm-92.754 56.406c-21.339 0-39.483-1.845-52.471-5.335-9.689-2.604-13.961-5.394-15.675-6.87 1.75-1.451 6.077-4.177 15.796-6.689 12.927-3.343 31.029-5.11 52.351-5.11 19.172 0 44.922 3.68 75.064 10.694l.01 2.615c-30.149 7.015-55.899 10.695-75.075 10.695zm49.216 94.812c-35.383 35.382-52.68 39.41-56.818 39.846.21-2.305 1.343-7.326 6.404-15.992 6.786-11.619 18.349-25.736 33.439-40.828 13.587-13.586 34.457-29.229 60.815-45.625a65.246 65.246 0 0 0 1.789 1.779c-16.395 26.36-32.04 47.231-45.629 60.82zM302 300.465c26.356 16.395 47.227 32.037 60.814 45.625 15.091 15.092 26.653 29.209 33.439 40.828 5.062 8.666 6.193 13.688 6.403 15.992-4.138-.436-21.436-4.464-56.817-39.846-13.589-13.59-29.234-34.463-45.63-60.82a65.321 65.321 0 0 0 1.791-1.779zM249.222 64.678c2.548-9.703 5.297-14.055 6.778-15.834 1.48 1.78 4.23 6.131 6.777 15.834 3.418 13.015 5.225 31.174 5.225 52.516 0 19.117-3.66 44.781-10.637 74.821h-2.73c-6.977-30.04-10.638-55.704-10.638-74.821.001-21.341 1.807-39.501 5.225-52.516zm13.56 382.934c-2.569 9.707-5.339 13.954-6.782 15.636-1.444-1.682-4.212-5.929-6.782-15.636-3.415-12.901-5.22-30.988-5.22-52.308 0-19.228 3.701-45.066 10.752-75.316h2.5c7.052 30.25 10.752 56.089 10.752 75.316 0 21.32-1.805 39.407-5.22 52.308zM256 288c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z" fill="currentColor"></svg:path><svg:path d="M344.86 405.678c-24.529-17.674-48.394-51.732-48.394-51.732s7.031 41.059 1.854 75.946c11.678 21.779 26.139 35.253 36.643 35.253 1.749 0 3.432-.324 5.042-.976 11.874-4.797 14.385-24.984 4.855-58.491zm-11.122 42.888c-2.738-1.46-9.407-6.369-18.992-22.27.688-7.872 1.098-16.337 1.219-25.282 5.012 4.88 9.947 9.437 14.747 13.613 5.104 19.781 4.242 30.152 3.026 33.939z" fill="currentColor"></svg:path><svg:path d="M213.679 82.608c-13.292-23.51-26.139-35.255-36.644-35.255-1.749 0-3.431.325-5.042.976-11.868 4.795-14.497 23.211-4.87 58.441 21.252 15.98 48.374 51.55 48.374 51.55s-7.747-40.82-1.818-75.712zm-17.641 28.761a350.796 350.796 0 0 0-14.769-13.574c-5.084-19.731-4.223-30.082-3.008-33.863 2.737 1.459 9.407 6.369 18.994 22.27-.687 7.838-1.094 16.264-1.217 25.167z" fill="currentColor"></svg:path><svg:path d="M82.357 298.568c-27.422 15.505-38.836 30.402-34.277 41.687 2.806 6.944 10.913 10.675 23.842 10.675 9.182 0 22.434-1.559 34.672-5.826 17.405-23.934 51.712-48.387 51.712-48.387s-41.307 6.119-75.949 1.851zm15.28 32.388c-10.088 2.606-18.909 3.974-25.716 3.974-4.092 0-6.733-.502-8.223-.97 1.477-2.755 6.407-9.411 22.253-18.966 7.872.689 16.338 1.099 25.284 1.22-4.87 5.004-9.42 9.936-13.598 14.742z" fill="currentColor"></svg:path><svg:path d="M463.92 172.245c-2.806-6.945-10.914-10.675-23.844-10.675-9.178 0-21.4 1.715-34.654 5.822-18.088 23.774-51.699 48.387-51.699 48.387s40.778-7.28 75.918-1.849c27.423-15.504 38.838-30.402 34.279-41.685zm-37.873 25.259c-7.867-.689-16.327-1.097-25.267-1.218a357.64 357.64 0 0 0 13.6-14.749c10.081-2.602 18.895-3.968 25.697-3.968 4.093 0 6.733.502 8.225.97-1.478 2.755-6.409 9.412-22.255 18.965z" fill="currentColor"></svg:path><svg:path d="M163.135 408.98c-8.42 30.34-5.956 48.938 5.244 53.69a13.372 13.372 0 0 0 5.275 1.066c11.107 0 24.698-13.124 39.528-39.015-4.184-32.22 2.351-70.779 2.351-70.779s-21.534 31.394-52.398 55.038zm11.846 38.227c-.904-2.966-2.147-11.15 2.312-29.159 6.048-5.079 12.323-10.782 18.743-17.032.095 6.979.366 13.687.81 20.039-10.38 17.605-18.326 24.335-21.865 26.152z" fill="currentColor"></svg:path><svg:path d="M343.622 49.826a13.392 13.392 0 0 0-5.274-1.066c-11.105 0-26.207 14.287-39.527 39.013 4.514 22.894-2.393 71.053-2.393 71.053s23.239-34.326 52.342-54.956c8.397-31.87 6.095-49.271-5.148-54.044zm-8.995 44.955c-6.029 5.051-12.277 10.72-18.66 16.931a359.613 359.613 0 0 0-.812-20.269c10.379-17.607 18.327-24.336 21.864-26.153.911 2.984 2.167 11.251-2.392 29.491z" fill="currentColor"></svg:path><svg:path d="M103.209 163.367C93 159.5 80.717 158.366 72.457 158.366c-12.267 0-20.042 3.573-22.881 10.261-5.004 11.792 9.97 29.985 37.948 44.805 29.726-3.932 70.688 2.336 70.688 2.336S121 187.067 103.209 163.367zm-38.175 11.848c1.381-.414 3.775-.848 7.424-.848 5.815 0 13.242 1.088 21.687 3.165 5.077 6.049 10.781 12.33 17.034 18.754-6.959.096-13.648.367-19.984.81-17.632-10.396-24.355-18.351-26.161-21.881z" fill="currentColor"></svg:path><svg:path d="M424.477 299.066c-25.307 5.6-70.78-2.35-70.78-2.35s34.638 25.615 55.014 52.393c11.959 4.223 22.555 5.022 30.833 5.022 12.266 0 20.041-3.573 22.88-10.261 5.004-11.79-8.141-28.069-37.947-44.804zm15.065 39.066c-5.833 0-13.287-1.095-21.765-3.185-5.078-6.053-10.774-12.326-17.013-18.734 6.98-.095 13.688-.365 20.041-.811 17.631 10.396 24.354 18.352 26.158 21.882-1.378.413-3.773.848-7.421.848z" fill="currentColor"></svg:path>`,
})
export class IonIosFlowerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFolderOutlineIcon],svg[ion-ios-folder-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M457 96H215c-2.791 0-4.271-.585-6.094-2.408l-22.501-22.501-.168-.162C181.365 66.333 177.361 64 169 64H57c-13.785 0-25 10.317-25 23v336c0 13.317 11.683 25 25 25h400c12.683 0 23-11.215 23-25V119c0-13.327-9.673-23-23-23zM57 80h112c3.497 0 3.737.189 6.175 2.488l22.417 22.418c4.84 4.84 10.372 7.094 17.408 7.094h242c4.448 0 7 2.552 7 7v42.376a23.885 23.885 0 0 0-8-1.376H56c-2.805 0-5.496.488-8 1.376V87c0-4.323 4.672-7 9-7zm407 343c0 4.328-2.677 9-7 9H57c-4.458 0-9-4.542-9-9V184c0-4.411 3.589-8 8-8h400c4.411 0 8 3.589 8 8v239z" fill="currentColor"></svg:path>`,
})
export class IonIosFolderOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFootballOutlineIcon],svg[ion-ios-football-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.137 48 48 141.136 48 256s93.137 208 208 208c114.872 0 208-93.138 208-208S370.87 48 256 48zm41.151 394.179c-13.514 2.657-30.327 4.187-44 4.45a190.525 190.525 0 0 1-38.5-4.493 978.146 978.146 0 0 1-6.805-1.777l-24.417-65.435L203.074 336h105.854l.57 1.076 19.34 38.852-23.618 64.282a189.782 189.782 0 0 1-8.069 1.969zM89.317 163.522l18.188 52.284.175.504-42.304 36.61c.516-32.385 9.144-62.832 23.941-89.398zM189.578 77.28L247 116.576v58.147l-70.997 60.067-49.403-22.51-4.167-1.899-22.332-64.019c22.009-31.204 53.138-55.532 89.477-69.082zm135.447 169.926l.921.765L307.569 320H204.431l-18.485-72.453.445-.376 68.873-58.27 69.761 58.305zm121.601 5.715l-42.454-36.738.127-.364 18.298-52.451c14.85 26.604 23.512 57.105 24.029 89.553zm-35.062-106.854l-22.432 64.483-53.992 24.388L264 174.723v-58.147l57.596-39.415c36.362 13.483 67.905 37.752 89.968 68.906zM66.144 273.414l53.756-46.518 49.539 22.599.559.255 19.718 77.287-20.433 38.529-69.86-.915c-18.348-26.36-30.214-57.546-33.279-91.237zm276.575 92.151l-20.434-38.529 19.752-77.416 49.997-22.781 53.822 46.575c-3.065 33.691-14.932 64.877-33.277 91.236l-69.86.915zM255.257 102.67l-46.126-31.498A190.3 190.3 0 0 1 256 65.337c15.961 0 31.466 1.982 46.293 5.694l-47.036 31.639zm-88.834 278.859l.848 2.511 19.946 49.781c-29.239-11.351-55.011-29.704-75.232-53.006l54.438.714zm158.14 52.375l17.934-48.608 1.627-3.748 55.892-.732c-20.272 23.359-46.123 41.746-75.453 53.088z" fill="currentColor"></svg:path>`,
})
export class IonIosFootballOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGameControllerAOutlineIcon],svg[ion-ios-game-controller-a-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M194.822 240H160v-34.762c0-2.817-2.604-5.238-5.303-5.238h-22.145c-2.698 0-4.552 2.372-4.552 5.178V240H92.533c-2.615 0-4.533 2.143-4.533 4.771v21.427c0 2.698 2.031 5.803 4.861 5.803H128v35.467c0 2.615 2.143 4.533 4.771 4.533h21.427c2.698 0 5.803-2.031 5.803-4.861V272h34.762c2.817 0 5.238-2.604 5.238-5.303v-22.145c-.001-2.698-2.373-4.552-5.179-4.552z" fill="currentColor"></svg:path><svg:path d="M362.314 279.063c-10.736 0-19.451 8.515-19.451 19.153 0 10.555 8.715 19.084 19.451 19.084 10.783 0 19.498-8.529 19.498-19.084 0-10.638-8.714-19.153-19.498-19.153z" fill="currentColor"></svg:path><svg:path d="M319.766 237.165c-10.736 0-19.451 8.603-19.451 19.168 0 10.566 8.715 19.153 19.451 19.153 10.783 0 19.498-8.587 19.498-19.153 0-10.565-8.715-19.168-19.498-19.168z" fill="currentColor"></svg:path><svg:path d="M404.862 237.165c-10.729 0-19.442 8.603-19.442 19.168 0 10.566 8.714 19.153 19.442 19.153 10.737 0 19.452-8.587 19.452-19.153 0-10.565-8.714-19.168-19.452-19.168z" fill="currentColor"></svg:path><svg:path d="M362.314 195.301c-10.736 0-19.451 8.602-19.451 19.169 0 10.566 8.715 19.146 19.451 19.146 10.783 0 19.498-8.579 19.498-19.146 0-10.568-8.714-19.169-19.498-19.169z" fill="currentColor"></svg:path><svg:path d="M369.269 162c25.838 0 49.704 9.314 67.204 26.229C454.225 205.386 464 229.247 464 255.418c0 26.303-9.806 50.405-27.611 67.869-17.563 17.226-41.4 26.713-67.12 26.713h-226.53c-25.712 0-49.548-9.487-67.117-26.715C57.81 305.818 48 281.717 48 255.418c0-26.167 9.78-50.028 27.539-67.188 17.504-16.915 41.37-26.23 67.2-26.23h226.53m0-16h-226.53C81.541 146 32 191.458 32 255.418 32 319.419 81.541 366 142.739 366h226.529C430.49 366 480 319.419 480 255.418 480 191.458 430.49 146 369.269 146z" fill="currentColor"></svg:path>`,
})
export class IonIosGameControllerAOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGameControllerBOutlineIcon],svg[ion-ios-game-controller-b-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M308.076 203.929c-11.058 0-20.076 9.014-20.076 20.104 0 11.089 9.019 20.107 20.076 20.107 11.131 0 20.148-9.019 20.148-20.107.001-11.091-9.017-20.104-20.148-20.104z" fill="currentColor"></svg:path><svg:path d="M351.988 247.878c-11.058 0-20.053 8.949-20.053 20.106 0 11.064 8.995 20.016 20.053 20.016 11.146 0 20.148-8.951 20.148-20.016.001-11.157-9.002-20.106-20.148-20.106z" fill="currentColor"></svg:path><svg:path d="M135.234 184.367C113.594 184.367 96 202.17 96 224.01c0 21.865 17.594 39.623 39.234 39.623 21.655 0 39.249-17.758 39.249-39.623 0-21.84-17.593-39.643-39.249-39.643zm-.111 59.09c-10.688 0-19.343-8.721-19.343-19.447 0-10.725 8.655-19.441 19.343-19.441 10.641 0 19.297 8.717 19.297 19.441 0 10.726-8.656 19.447-19.297 19.447z" fill="currentColor"></svg:path><svg:path d="M351.988 160c-11.058 0-20.053 9.014-20.053 20.107 0 11.09 8.995 20.083 20.053 20.083 11.146 0 20.148-8.993 20.148-20.083.001-11.093-9.002-20.107-20.148-20.107z" fill="currentColor"></svg:path><svg:path d="M395.947 203.929c-11.105 0-20.101 9.014-20.101 20.104 0 11.089 8.995 20.107 20.101 20.107 11.059 0 20.053-9.019 20.053-20.107 0-11.091-8.994-20.104-20.053-20.104z" fill="currentColor"></svg:path><svg:path d="M466.279 248.866c-21.157-88.471-43.631-135.489-88.454-148.83C368.06 97.135 359.748 96 352.076 96c-27.598 0-46.938 14.683-96.08 14.683-49.174 0-68.502-14.681-96.062-14.683-7.665 0-15.963 1.135-25.721 4.036-44.869 13.341-67.342 60.359-88.461 148.83-21.181 88.473-17.334 152.363 7.679 164.289C57.502 415.1 61.662 416 65.885 416c21.694 0 45.139-23.838 67.659-52.047C159.198 331.848 165.658 331 243.822 331h24.343c78.147 0 84.628.846 110.282 32.953 22.526 28.207 45.97 52.004 67.665 52.004 4.226 0 8.384-.879 12.457-2.823 25.005-11.926 28.852-75.795 7.71-164.268zm-14.602 149.85c-1.835.876-3.604 1.284-5.564 1.284-6.022 0-14.077-4.049-23.295-11.708-9.181-7.63-19.307-18.509-31.87-34.239-12.959-16.22-23.667-28.229-43.528-33.949-16.647-4.793-38.624-5.104-79.254-5.104h-24.343c-40.633 0-62.611.311-79.259 5.105-19.853 5.719-30.56 17.685-43.523 33.908-12.556 15.727-22.68 26.627-31.862 34.258-9.216 7.658-17.27 11.718-23.293 11.718-1.932 0-3.751-.415-5.568-1.282-9.556-4.557-22.572-47.673.998-146.129 21.387-89.591 42.381-126.777 77.459-137.207 7.633-2.27 14.554-3.372 21.159-3.372 9.742 0 18.599 2.317 29.812 5.249 16.07 4.203 36.072 9.435 66.252 9.435 30.148 0 50.146-5.228 66.215-9.429 11.229-2.936 20.1-5.254 29.865-5.254 6.618 0 13.551 1.104 21.185 3.371 35.037 10.428 56.03 47.617 77.456 137.214 23.525 98.456 10.511 141.575.958 146.131z" fill="currentColor"></svg:path>`,
})
export class IonIosGameControllerBOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGearOutlineIcon],svg[ion-ios-gear-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256.9 159.9c-25.701 0-49.801 10-67.9 28.1s-28.1 42.199-28.1 67.9c0 25.699 10 49.699 28.1 67.9 18.1 18.1 42.301 28.1 67.9 28.1 25.699 0 49.799-10 67.9-28.1 18.1-18.102 28.1-42.201 28.1-67.9 0-25.701-10-49.701-28.1-67.9-18.101-18.1-42.2-28.1-67.9-28.1zm0 176c-44.301 0-80-35.9-80-80 0-44.101 35.699-80 80-80 44.299 0 80 35.899 80 80 0 44.1-35.701 80-80 80z" fill="currentColor"></svg:path><svg:path d="M201.787 82.828a65.378 65.378 0 0 0 16.775 17.069c11.012 7.715 23.957 11.793 37.438 11.793 13.481 0 26.428-4.078 37.439-11.793a65.398 65.398 0 0 0 16.773-17.068 179.969 179.969 0 0 1 29.927 12.411 65.403 65.403 0 0 0-.203 23.933c2.333 13.235 8.604 25.269 18.133 34.798 12.335 12.336 28.737 19.129 46.185 19.129 4.242 0 8.424-.399 12.52-1.195a179.858 179.858 0 0 1 12.405 29.947 65.388 65.388 0 0 0-17.054 16.776c-7.705 11.008-11.777 23.946-11.776 37.418 0 13.467 4.069 26.401 11.768 37.406a65.378 65.378 0 0 0 17.036 16.771 179.868 179.868 0 0 1-12.428 29.957 65.615 65.615 0 0 0-12.472-1.187c-17.448 0-33.85 6.795-46.183 19.131-9.515 9.514-15.781 21.527-18.123 34.74a65.397 65.397 0 0 0 .176 23.895 179.911 179.911 0 0 1-29.967 12.421 65.372 65.372 0 0 0-16.771-17.022c-11-7.689-23.928-11.754-37.386-11.754-13.457 0-26.385 4.064-37.385 11.755a65.399 65.399 0 0 0-16.771 17.021 179.932 179.932 0 0 1-29.966-12.42 65.397 65.397 0 0 0 .176-23.895c-2.342-13.214-8.608-25.228-18.123-34.741-12.335-12.336-28.737-19.13-46.185-19.13-4.226 0-8.39.396-12.471 1.187a180.012 180.012 0 0 1-12.428-29.958 65.378 65.378 0 0 0 17.036-16.771c7.699-11.004 11.769-23.939 11.769-37.408 0-13.471-4.072-26.41-11.777-37.418A65.403 65.403 0 0 0 82.82 201.85a179.882 179.882 0 0 1 12.405-29.946 65.54 65.54 0 0 0 12.521 1.196c17.446 0 33.849-6.794 46.185-19.13 9.529-9.53 15.799-21.563 18.133-34.799a65.376 65.376 0 0 0-.203-23.932 180.164 180.164 0 0 1 29.926-12.411M302.074 64C294.971 82.529 277.027 95.69 256 95.69c-21.025 0-38.969-13.161-46.073-31.69a196.255 196.255 0 0 0-57.128 23.688c8.068 18.122 4.682 40.104-10.182 54.97-9.631 9.631-22.25 14.443-34.87 14.443a49.429 49.429 0 0 1-20.083-4.255A196.3 196.3 0 0 0 64 209.984c18.51 7.112 31.652 25.049 31.652 46.062 0 21.008-13.133 38.936-31.631 46.054a196.32 196.32 0 0 0 23.693 57.128 49.42 49.42 0 0 1 20.031-4.232c12.621 0 25.238 4.812 34.871 14.443 14.841 14.841 18.238 36.781 10.215 54.889a196.251 196.251 0 0 0 57.131 23.673c7.127-18.479 25.046-31.596 46.037-31.596 20.992 0 38.91 13.115 46.037 31.596a196.234 196.234 0 0 0 57.132-23.675c-8.023-18.106-4.626-40.046 10.216-54.887 9.629-9.632 22.248-14.444 34.868-14.444 6.836 0 13.67 1.411 20.033 4.233a196.318 196.318 0 0 0 23.692-57.128c-18.498-7.118-31.63-25.048-31.63-46.054-.001-21.013 13.143-38.948 31.651-46.062a196.302 196.302 0 0 0-23.664-57.139 49.423 49.423 0 0 1-20.082 4.254c-12.621 0-25.238-4.811-34.871-14.442-14.863-14.863-18.248-36.846-10.18-54.97A196.24 196.24 0 0 0 302.074 64z" fill="currentColor"></svg:path>`,
})
export class IonIosGearOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGlassesOutlineIcon],svg[ion-ios-glasses-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M465.4 247c-2.2-22-12.4-43-28.9-58.4-17.1-15.9-39.3-24.7-62.7-24.7-41.5 0-77.3 27.4-88.5 67-7-7-18.5-11.7-29.3-11.7s-22.3 4.7-29.3 11.7c-11.2-39.6-47-67-88.5-67-23.3 0-45.6 8.7-62.7 24.6C59 204 48.8 225 46.6 247H32v18h14.6c2.2 22 12.4 43 28.9 58.4 17.1 15.9 39.3 24.7 62.7 24.7 50.8 0 92.1-41.2 92.1-92v-.1c0-9.9 11.5-21.6 25.7-21.6s25.7 11.7 25.7 21.6v.1c0 50.8 41.3 92 92.1 92 23.3 0 45.6-8.7 62.7-24.7 16.5-15.4 26.7-36.5 28.9-58.5H480v-18h-14.6zm-91.6 86c-42.5 0-77-34.6-77-77 0-42.5 34.6-77 77-77 42.5 0 77 34.6 77 77 0 42.5-34.5 77-77 77zm-235.6 0c-42.5 0-77-34.6-77-77 0-42.5 34.6-77 77-77 42.5 0 77 34.6 77 77 0 42.5-34.5 77-77 77z" fill="currentColor"></svg:path>`,
})
export class IonIosGlassesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGridViewOutlineIcon],svg[ion-ios-grid-view-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 192v-16H336V64h-16v112H192V64h-16v112H64v16h112v128H64v16h112v112h16V336h128v112h16V336h112v-16H336V192h112zM320 320H192V192h128v128z" fill="currentColor"></svg:path>`,
})
export class IonIosGridViewOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosHeartOutlineIcon],svg[ion-ios-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M359.385 80C319.966 80 277.171 97.599 256 132.8 234.83 97.599 192.034 80 152.615 80 83.647 80 32 123.238 32 195.779c0 31.288 12.562 71.924 40.923 105.657 28.359 33.735 45.229 51.7 100.153 88C228 425.738 256 432 256 432s28-6.262 82.924-42.564c54.923-36.3 71.794-54.265 100.153-88C467.438 267.703 480 227.067 480 195.779 480 123.238 428.353 80 359.385 80zm67.445 211.141c-26.852 31.94-42.18 48.895-96.729 84.947-40.237 26.596-65.252 36.301-74.102 39.233-8.85-2.933-33.864-12.639-74.102-39.233-54.548-36.052-69.876-53.006-96.729-84.948-12.065-14.351-21.857-31.274-28.316-48.943C51.062 226.355 48 210.304 48 195.779c0-30.284 10.131-55.643 29.297-73.335 9.14-8.437 20.158-14.992 32.752-19.484 12.945-4.619 27.266-6.96 42.566-6.96 38.018 0 73.217 17.682 89.674 45.046L256 163.844l13.711-22.798C286.169 113.682 321.368 96 359.385 96c15.3 0 29.621 2.341 42.566 6.959 12.594 4.493 23.612 11.048 32.752 19.484C453.869 140.136 464 165.495 464 195.779c0 14.525-3.062 30.576-8.854 46.418-6.458 17.668-16.25 34.592-28.316 48.944z" fill="currentColor"></svg:path>`,
})
export class IonIosHeartOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosHelpCircleOutlineIcon],svg[ion-ios-help-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"></svg:path><svg:path d="M256.7 160c37.5 0 63.3 20.8 63.3 50.7 0 19.8-9.6 33.5-28.1 44.4-17.4 10.1-23.3 17.5-23.3 30.3v7.9h-34.7l-.3-8.6c-1.7-20.6 5.5-33.4 23.6-44 16.9-10.1 24-16.5 24-28.9s-12-21.5-26.9-21.5c-15.1 0-26 9.8-26.8 24.6H192c.7-32.2 24.5-54.9 64.7-54.9zm-26.3 171.4c0-11.5 9.6-20.6 21.4-20.6 11.9 0 21.5 9 21.5 20.6s-9.6 20.6-21.5 20.6-21.4-9-21.4-20.6z" fill="currentColor"></svg:path>`,
})
export class IonIosHelpCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosHelpOutlineIcon],svg[ion-ios-help-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z" fill="currentColor"></svg:path><svg:path d="M259.6 146c-43.2 0-67.3 20.3-67.6 62.2h18.8c-.6-30.4 15.5-46.5 47.9-46.5 23.2 0 42.6 16.2 42.6 39.8 0 15.3-8.3 27.7-19.4 38.1-22.6 20.8-29 36-30.1 64.5h19c1.1-25.8.5-30.7 23.3-53.3 15.2-14.2 25.9-28.3 25.9-50.2 0-34.2-27.4-54.6-60.4-54.6z" fill="currentColor"></svg:path><svg:path d="M260.3 332.3c-9.4 0-17 7.5-17 16.8s7.6 16.9 17 16.9 17-7.5 17-16.9c0-9.3-7.6-16.8-17-16.8z" fill="currentColor"></svg:path>`,
})
export class IonIosHelpOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosHomeOutlineIcon],svg[ion-ios-home-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 112L96 240v208h112V320h96v128h112V240L256 112zm144 320h-80V304H192v128h-80V247.69l144-115.2 144 115.2V432z" fill="currentColor"></svg:path><svg:path d="M256 64l-96 76.8V96H96v95.999l-32 25.499 11.51 11.384L256 84.49l180.49 144.393L448 217.498 256 64zm-112 89.599l-32 25.6V112h32v41.599z" fill="currentColor"></svg:path>`,
})
export class IonIosHomeOutlineIcon {
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
  selector: 'svg[ionMdCheckboxOutlineIcon],svg[ion-md-checkbox-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M168.531 215.469l-29.864 29.864 96 96L448 128l-29.864-29.864-183.469 182.395-66.136-65.062zm236.802 189.864H106.667V106.667H320V64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V234.667h-42.667v170.666z" fill="currentColor"></svg:path>`,
})
export class IonMdCheckboxOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCheckmarkCircleOutlineIcon],svg[ion-md-checkmark-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M170.718 216.482L141.6 245.6l93.6 93.6 208-208-29.118-29.118L235.2 279.918l-64.482-63.436zM422.4 256c0 91.518-74.883 166.4-166.4 166.4S89.6 347.518 89.6 256 164.482 89.6 256 89.6c15.6 0 31.2 2.082 45.764 6.241L334 63.6C310.082 53.2 284.082 48 256 48 141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208h-41.6z" fill="currentColor"></svg:path>`,
})
export class IonMdCheckmarkCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCloseCircleOutlineIcon],svg[ion-md-close-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"></svg:path><svg:path d="M360 330.9L330.9 360 256 285.1 181.1 360 152 330.9l74.9-74.9-74.9-74.9 29.1-29.1 74.9 74.9 74.9-74.9 29.1 29.1-74.9 74.9z" fill="currentColor"></svg:path>`,
})
export class IonMdCloseCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCloudOutlineIcon],svg[ion-md-cloud-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M403.001 217.001C388.997 148.002 328.998 96 256 96c-57.998 0-107.999 32.998-132.997 81C63.002 183.002 16 233.998 16 296c0 65.996 54.004 120 120 120h260c55 0 100-45 100-100.001 0-52.997-40.997-95.999-92.999-98.998zM396 376H136c-44.004 0-80-35.996-80-80 0-44 35.996-80 80-80h14.004c12.998-46 55-80 105.996-80 60.996 0 110 49 110 110v10h30c32.998 0 60 27.003 60 60 0 32.998-27.002 60-60 60z" fill="currentColor"></svg:path>`,
})
export class IonMdCloudOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdHelpCircleOutlineIcon],svg[ion-md-help-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"></svg:path><svg:path d="M235 339h42v42h-42z" fill="currentColor"></svg:path><svg:path d="M276.8 318h-41.6c0-67 62.4-62.2 62.4-103.8 0-22.9-18.7-41.7-41.6-41.7S214.4 192 214.4 214h-41.6c0-46 37.2-83 83.2-83s83.2 37.1 83.2 83.1c0 52-62.4 57.9-62.4 103.9z" fill="currentColor"></svg:path>`,
})
export class IonMdHelpCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdInformationCircleOutlineIcon],svg[ion-md-information-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"></svg:path><svg:path d="M277 360h-42V235h42v125zm0-166h-42v-42h42v42z" fill="currentColor"></svg:path>`,
})
export class IonMdInformationCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdNotificationsOutlineIcon],svg[ion-md-notifications-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M257 120.471c7.083 0 23.911 4.479 23.911 4.479 45.589 10.447 77.678 52.439 77.678 99.85V352.412l9.321 9.364 7.788 7.823H136.302l7.788-7.823 9.321-9.364V224.8c0-47.41 32.089-89.403 77.678-99.85 0 0 18.043-4.479 23.911-4.479M256 48c-17.602 0-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2zm41.411 374.4h-82.823c0 22.881 18.633 41.6 41.412 41.6s41.411-18.719 41.411-41.6z" fill="currentColor"></svg:path>`,
})
export class IonMdNotificationsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRemoveCircleOutlineIcon],svg[ion-md-remove-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"></svg:path><svg:path d="M363 277H149v-42h214v42z" fill="currentColor"></svg:path>`,
})
export class IonMdRemoveCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSquareOutlineIcon],svg[ion-md-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M405.3 106.7v298.7H106.7V106.7h298.6m0-42.7H106.7C83.2 64 64 83.2 64 106.7v298.7c0 23.5 19.2 42.7 42.7 42.7h298.7c23.5 0 42.7-19.2 42.7-42.7V106.7C448 83.2 428.8 64 405.3 64z" fill="currentColor"></svg:path>`,
})
export class IonMdSquareOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdStarOutlineIcon],svg[ion-md-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M458 210.409l-145.267-12.476L256 64l-56.743 133.934L54 210.409l110.192 95.524L131.161 448 256 372.686 380.83 448l-33.021-142.066L458 210.409zM272.531 345.286L256 335.312l-16.53 9.973-59.988 36.191 15.879-68.296 4.369-18.79-14.577-12.637-52.994-45.939 69.836-5.998 19.206-1.65 7.521-17.75 27.276-64.381 27.27 64.379 7.52 17.751 19.208 1.65 69.846 5.998-52.993 45.939-14.576 12.636 4.367 18.788 15.875 68.299-59.984-36.189z" fill="currentColor"></svg:path>`,
})
export class IonMdStarOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMedalOutlineIcon],svg[ion-medal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="352" r="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="256" cy="352" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M147 323L41.84 159.32a32 32 0 0 1-1.7-31.61l31-62A32 32 0 0 1 99.78 48h312.44a32 32 0 0 1 28.62 17.69l31 62a32 32 0 0 1-1.7 31.61L365 323m6-179H37m391.74-91.4L305 250M140.55 144L207 250"></svg:path>`,
})
export class IonMedalOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMedicalOutlineIcon],svg[ion-medical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m429.93 174.27l-16.47-28.59a15.49 15.49 0 0 0-21.15-5.7l-98.39 57a4 4 0 0 1-6-3.5L288 80a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16l.07 113.57a4 4 0 0 1-6 3.5l-98.39-57a15.49 15.49 0 0 0-21.15 5.7l-16.46 28.6a15.42 15.42 0 0 0 5.69 21.1l98.49 57.08a4 4 0 0 1 0 6.9l-98.49 57.08a15.54 15.54 0 0 0-5.69 21.1l16.47 28.59a15.49 15.49 0 0 0 21.15 5.7l98.39-57a4 4 0 0 1 6 3.5L224 432a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16l-.07-113.67a4 4 0 0 1 6-3.5l98.39 57a15.49 15.49 0 0 0 21.15-5.7l16.47-28.59a15.42 15.42 0 0 0-5.69-21.1l-98.49-57.08a4 4 0 0 1 0-6.9l98.49-57.08a15.51 15.51 0 0 0 5.68-21.11"></svg:path>`,
})
export class IonMedicalOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMedkitOutlineIcon],svg[ion-medkit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="448" height="352" x="32" y="112" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 112V80a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32m-112 96v160m80-80H176"></svg:path>`,
})
export class IonMedkitOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMegaphoneOutlineIcon],svg[ion-megaphone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M407.94 52.22S321.3 160 240 160H80a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h160c81.3 0 167.94 108.23 167.94 108.23c6.06 8 24.06 2.52 24.06-9.83V62c0-12.31-17-18.82-24.06-9.78M64 256s-16-6-16-32s16-32 16-32m384 54s16-4.33 16-22s-16-22-16-22m-192-42v128M112 160v128"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 288v168a8 8 0 0 0 8 8h53a16 16 0 0 0 15.29-20.73C211.91 416.39 192 386.08 192 336h16a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-16"></svg:path>`,
})
export class IonMegaphoneOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMenuOutlineIcon],svg[ion-menu-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"></svg:path>`,
})
export class IonMenuOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicCircleOutlineIcon],svg[ion-mic-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 368h64m48-143.7v23.92c0 39.42-40.58 71.48-80 71.48h0c-39.42 0-80-32.06-80-71.48V224.3m80 95.7v48"></svg:path><svg:rect width="96" height="160" x="208" y="128" fill="currentColor" rx="48" ry="48"></svg:rect>`,
})
export class IonMicCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicOffCircleOutlineIcon],svg[ion-mic-off-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208s-93.31 208-208 208m0-384c-97 0-176 79-176 176s79 176 176 176s176-78.95 176-176S353.05 80 256 80"></svg:path><svg:path fill="currentColor" d="M352 369a15.93 15.93 0 0 1-11.84-5.24l-192-210a16 16 0 0 1 23.68-21.52l192 210A16 16 0 0 1 352 369m0-120.78v-23.8a16.3 16.3 0 0 0-13.64-16.24c-9.88-1.48-18.36 6.51-18.36 16.12v23.92a43.4 43.4 0 0 1-3.07 15.91a4 4 0 0 0 .76 4.16l19.19 21.1a2 2 0 0 0 3.19-.3A77.1 77.1 0 0 0 352 248.22M304 240v-64a48.14 48.14 0 0 0-48-48a48.08 48.08 0 0 0-41 23.1a4 4 0 0 0 .47 4.77l84.42 92.86a2 2 0 0 0 3.46-1A48 48 0 0 0 304 240m-57.43 45.2l-36.46-40.11a1 1 0 0 0-1.74.8a48.26 48.26 0 0 0 37.25 41a1 1 0 0 0 .95-1.69"></svg:path><svg:path fill="currentColor" d="M287.55 352H272v-17.74a100 100 0 0 0 12.53-3.06a2 2 0 0 0 .89-3.26l-21.07-23.19a3.94 3.94 0 0 0-3.29-1.29c-1.69.15-3.39.24-5.06.24c-36 0-64-29.82-64-55.48V224.4a16.26 16.26 0 0 0-15.61-16.4A15.91 15.91 0 0 0 160 224v24.22c0 23.36 10.94 45.61 30.79 62.66A103.7 103.7 0 0 0 240 334.26V352h-15.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 224 384h64a16 16 0 0 0 16-16.77c-.42-8.61-7.84-15.23-16.45-15.23"></svg:path>`,
})
export class IonMicOffCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicOffOutlineIcon],svg[ion-mic-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M432 400L96 64"></svg:path><svg:path fill="currentColor" d="M400 240v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 208v32a111.6 111.6 0 0 1-2.45 23.31a4.05 4.05 0 0 0 1.07 3.69l21.82 21.81a2 2 0 0 0 3.29-.72A143.3 143.3 0 0 0 400 240M256 352a112.36 112.36 0 0 1-112-112v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 208v32c0 74 56.1 135.12 128 143.11V432h-47.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 192 464h127.55c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 320 432h-48v-48.89a143.1 143.1 0 0 0 52-16.22a4 4 0 0 0 .91-6.35L307 342.63a4 4 0 0 0-4.51-.78A110.8 110.8 0 0 1 256 352m0-272a47.18 47.18 0 0 1 48 48v74.72a4 4 0 0 0 1.17 2.82L332.59 233a2 2 0 0 0 3.41-1.42V128.91C336 85 301 48.6 257.14 48a79.66 79.66 0 0 0-68.47 36.57a4 4 0 0 0 .54 5l19.54 19.54a2 2 0 0 0 3.25-.63A47.44 47.44 0 0 1 256 80"></svg:path><svg:path fill="currentColor" d="M207.27 242.9L179.41 215a2 2 0 0 0-3.41 1.42V239a80.9 80.9 0 0 0 23.45 56.9a78.55 78.55 0 0 0 77.8 21.19a2 2 0 0 0 .86-3.35l-24.91-24.91a4.08 4.08 0 0 0-2.42-1.15c-21.65-2.52-39.48-20.44-42.37-42.43a4 4 0 0 0-1.14-2.35"></svg:path>`,
})
export class IonMicOffOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicOutlineIcon],svg[ion-mic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 448h128m64-240v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32m128 160v80"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 64a63.68 63.68 0 0 0-64 64v111c0 35.2 29 65 64 65s64-29 64-65V128c0-36-28-64-64-64"></svg:path>`,
})
export class IonMicOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMoonOutlineIcon],svg[ion-moon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216c88.68 0 166.73-51.57 200-128c-26.39 11.49-57.38 16-88 16c-119.29 0-216-96.71-216-216"></svg:path>`,
})
export class IonMoonOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMoveOutlineIcon],svg[ion-move-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m176 112l80-80l80 80m-80.02-80l.02 448m-80-80l80 80l80-80m64-224l80 80l-80 80M112 176l-80 80l80 80m-80-80h448"></svg:path>`,
})
export class IonMoveOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMusicalNoteOutlineIcon],svg[ion-musical-note-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M240 343.31V424a32.28 32.28 0 0 1-21.88 30.65l-21.47 7.23c-25.9 8.71-52.65-10.75-52.65-38.32h0A34.29 34.29 0 0 1 167.25 391l50.87-17.12A32.29 32.29 0 0 0 240 343.24V92a16.13 16.13 0 0 1 12.06-15.66L360.49 48.2A6 6 0 0 1 368 54v57.76a16.13 16.13 0 0 1-12.12 15.67l-91.64 23.13A32.25 32.25 0 0 0 240 181.91v39.39"></svg:path>`,
})
export class IonMusicalNoteOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMusicalNotesOutlineIcon],svg[ion-musical-notes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 218v-6c0-14.84 10-27 24.24-30.59l174.59-46.68A20 20 0 0 1 416 154v22"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 295.94v80c0 13.91-8.93 25.59-22 30l-22 8c-25.9 8.72-52-10.42-52-38h0a33.37 33.37 0 0 1 23-32l51-18.15c13.07-4.4 22-15.94 22-29.85V58a10 10 0 0 0-12.6-9.61L204 102a16.48 16.48 0 0 0-12 16v226c0 13.91-8.93 25.6-22 30l-52 18c-13.88 4.68-22 17.22-22 32h0c0 27.58 26.52 46.55 52 38l22-8c13.07-4.4 22-16.08 22-30v-80"></svg:path>`,
})
export class IonMusicalNotesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNavigateCircleOutlineIcon],svg[ion-navigate-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m336.76 161l-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 0 1 4 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 0 0 336.76 161"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class IonNavigateCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNavigateOutlineIcon],svg[ion-navigate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 64L64 240.14h200a8 8 0 0 1 8 8V448Z"></svg:path>`,
})
export class IonNavigateOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNewspaperOutlineIcon],svg[ion-newspaper-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M368 415.86V72a24.07 24.07 0 0 0-24-24H72a24.07 24.07 0 0 0-24 24v352a40.12 40.12 0 0 0 40 40h328"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M416 464a48 48 0 0 1-48-48V128h72a24 24 0 0 1 24 24v264a48 48 0 0 1-48 48Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M240 128h64m-64 64h64m-192 64h192m-192 64h192m-192 64h192"></svg:path><svg:path fill="currentColor" d="M176 208h-64a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16"></svg:path>`,
})
export class IonNewspaperOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsCircleOutlineIcon],svg[ion-notifications-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="M365.2 313c-16.33-19.34-27.86-27.47-27.86-80.8c0-48.86-25.78-66.23-47-74.67a11.4 11.4 0 0 1-6.34-6.68C280.29 138.6 269.88 128 256 128s-24.31 10.6-28 22.86a11.35 11.35 0 0 1-6.33 6.68c-21.24 8.46-47 25.8-47 74.67c0 53.33-11.54 61.46-27.87 80.8c-6.77 8-.65 23 11.19 23H354C365.77 336 371.94 321 365.2 313m-144.96 39a4 4 0 0 0-4 4.42C218.49 375.14 235.11 384 256 384c20.67 0 37.14-9.15 39.66-27.52a4 4 0 0 0-4-4.48Z"></svg:path>`,
})
export class IonNotificationsCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsOffCircleOutlineIcon],svg[ion-notifications-off-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="M220.24 352a4 4 0 0 0-4 4.42C218.49 375.14 235.11 384 256 384s37.5-8.86 39.73-27.58a4 4 0 0 0-4-4.42ZM352 378a15.93 15.93 0 0 1-11.84-5.24l-192-212a16 16 0 0 1 23.68-21.52l192 212A16 16 0 0 1 352 378M174.68 232.21c0 53.33-11.54 61.46-27.87 80.8c-6.77 8-.65 23 11.19 23h118.83a4 4 0 0 0 2.95-6.7l-98-106.87a4 4 0 0 0-6.94 2.52c-.1 2.33-.16 4.75-.16 7.25M365.2 313c-16.33-19.34-27.86-27.47-27.86-80.8c0-48.86-25.78-66.23-47-74.67a11.4 11.4 0 0 1-6.34-6.68C280.29 138.6 269.88 128 256 128s-24.31 10.6-28 22.86a11.35 11.35 0 0 1-6.33 6.68c-1.28.51-2.57 1.05-3.88 1.63a4 4 0 0 0-1.3 6.36L361 323.21a4 4 0 0 0 6.94-2.95a12 12 0 0 0-2.74-7.26"></svg:path>`,
})
export class IonNotificationsOffCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsOffOutlineIcon],svg[ion-notifications-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128.51 204.59q-.37 6.15-.37 12.76C128.14 304 110 320 84.33 351.43C73.69 364.45 83 384 101.62 384H320m94.5-48.7c-18.48-23.45-30.62-47.05-30.62-118c0-79.3-40.52-107.57-73.88-121.3c-4.43-1.82-8.6-6-9.95-10.55C294.21 65.54 277.82 48 256 48s-38.2 17.55-44 37.47c-1.35 4.6-5.52 8.71-10 10.53a150 150 0 0 0-18 8.79M320 384v16a64 64 0 0 1-128 0v-16"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M448 448L64 64"></svg:path>`,
})
export class IonNotificationsOffOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsOutlineIcon],svg[ion-notifications-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M427.68 351.43C402 320 383.87 304 383.87 217.35C383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53c-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43C73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57M320 384v16a64 64 0 0 1-128 0v-16"></svg:path>`,
})
export class IonNotificationsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNuclearOutlineIcon],svg[ion-nuclear-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="256" cy="256" r="64" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M224 192L171 85m117 107l53-107m-13.45 170.81l119.41.13m-147.87 57.19l72.25 95.06M184.45 255.81l-119.41.13m147.87 57.19l-72.25 95.06"></svg:path>`,
})
export class IonNuclearOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNutritionOutlineIcon],svg[ion-nutrition-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M352 128c-32.26-2.89-64 16-96 16s-63.75-19-96-16c-64 6-96 64-96 160c0 80 64 192 111.2 192s51.94-24 80.8-24s33.59 24 80.8 24S448 368 448 288c0-96-29-154-96-160Z"></svg:path><svg:path fill="currentColor" d="M323.92 83.14c-21 21-45.66 27-58.82 28.79a8 8 0 0 1-9.1-8.73a97.6 97.6 0 0 1 28.61-59.33c22-22 46-26.9 58.72-27.85a8 8 0 0 1 8.67 8.92a98 98 0 0 1-28.08 58.2"></svg:path><svg:ellipse cx="216" cy="304" fill="currentColor" rx="24" ry="48"></svg:ellipse><svg:ellipse cx="296" cy="304" fill="currentColor" rx="24" ry="48"></svg:ellipse>`,
})
export class IonNutritionOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionOpenOutlineIcon],svg[ion-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48M336 64h112v112M224 288L440 72"></svg:path>`,
})
export class IonOpenOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionOptionsOutlineIcon],svg[ion-options-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 128h80m-384 0h240m64 256h80m-384 0h240m-96-128h240m-384 0h80"></svg:path><svg:circle cx="336" cy="128" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="176" cy="256" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="336" cy="384" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class IonOptionsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPaperPlaneOutlineIcon],svg[ion-paper-plane-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m53.12 199.94l400-151.39a8 8 0 0 1 10.33 10.33l-151.39 400a8 8 0 0 1-15-.34l-67.4-166.09a16 16 0 0 0-10.11-10.11L53.46 215a8 8 0 0 1-.34-15.06M460 52L227 285"></svg:path>`,
})
export class IonPaperPlaneOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPartlySunnyOutlineIcon],svg[ion-partly-sunny-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M90.61 306.85A16.07 16.07 0 0 0 104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0 0 12.2 9.87c50 8.15 91.6 41.54 91.6 99.59c0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2c0-48.47 38.67-72.22 74.61-77.95Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M384.8 271.4a80 80 0 1 0-123.55-92M464 208h32M336 48v32M222.86 94.86l22.63 22.63m203.65-22.63l-22.63 22.63"></svg:path>`,
})
export class IonPartlySunnyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPauseCircleOutlineIcon],svg[ion-pause-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 192v128m96-128v128"></svg:path>`,
})
export class IonPauseCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPauseOutlineIcon],svg[ion-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 96h16v320h-16zm144 0h16v320h-16z"></svg:path>`,
})
export class IonPauseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPawOutlineIcon],svg[ion-paw-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M457.74 170.1a30.3 30.3 0 0 0-11.16-2.1h-.4c-20.17.3-42.79 19.19-54.66 47.76c-14.23 34.18-7.68 69.15 14.74 78.14a30.2 30.2 0 0 0 11.15 2.1c20.27 0 43.2-19 55.17-47.76c14.13-34.18 7.48-69.15-14.84-78.14ZM327.6 303.48C299.8 257.35 287.8 240 256 240s-43.9 17.46-71.7 63.48c-23.8 39.36-71.9 42.64-83.9 76.07a50.9 50.9 0 0 0-3.6 19.25c0 27.19 20.8 49.2 46.4 49.2c31.8 0 75.1-25.39 112.9-25.39S337 448 368.8 448c25.6 0 46.3-22 46.3-49.2a51 51 0 0 0-3.7-19.25c-12-33.55-60-36.71-83.8-76.07ZM192.51 196a26.5 26.5 0 0 0 4-.3c23.21-3.37 37.7-35.53 32.44-71.85C224 89.61 203.22 64 181.49 64a26.5 26.5 0 0 0-4 .3c-23.21 3.37-37.7 35.53-32.44 71.85C150 170.29 170.78 196 192.51 196Zm174.41-59.85c5.26-36.32-9.23-68.48-32.44-71.85a26.5 26.5 0 0 0-4-.3c-21.73 0-42.47 25.61-47.43 59.85c-5.26 36.32 9.23 68.48 32.44 71.85a26.5 26.5 0 0 0 4 .3c21.73 0 42.51-25.71 47.43-59.85ZM105.77 293.9c22.39-9 28.93-44 14.72-78.14C108.53 187 85.62 168 65.38 168a30.2 30.2 0 0 0-11.15 2.1c-22.39 9-28.93 44-14.72 78.14C51.47 277 74.38 296 94.62 296a30.2 30.2 0 0 0 11.15-2.1Z"></svg:path>`,
})
export class IonPawOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPencilOutlineIcon],svg[ion-pencil-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M364.13 125.25L87 403l-23 45l44.99-23l277.76-277.13zm56.56-56.56l-22.62 22.62l22.62 22.63l22.62-22.63a16 16 0 0 0 0-22.62h0a16 16 0 0 0-22.62 0"></svg:path>`,
})
export class IonPencilOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPeopleCircleOutlineIcon],svg[ion-people-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208s-93.31 208-208 208m0-384c-97 0-176 79-176 176s79 176 176 176s176-78.95 176-176S353.05 80 256 80"></svg:path><svg:path fill="currentColor" d="M323.67 292c-17.4 0-34.21-7.72-47.34-21.73a83.76 83.76 0 0 1-22-51.32c-1.47-20.7 4.88-39.75 17.88-53.62S303.38 144 323.67 144c20.14 0 38.37 7.62 51.33 21.46s19.47 33 18 53.51a84 84 0 0 1-22 51.3C357.86 284.28 341.06 292 323.67 292m-159.85 3.36c-29.76 0-55.93-27.51-58.33-61.33c-1.23-17.32 4.15-33.33 15.17-45.08s26.22-18 43.15-18s32.12 6.44 43.07 18.14s16.5 27.82 15.25 45c-2.44 33.77-28.6 61.27-58.31 61.27m256.55 59.92c-1.59-4.7-5.46-9.71-13.22-14.46c-23.46-14.33-52.32-21.91-83.48-21.91c-30.57 0-60.23 7.9-83.53 22.25c-26.25 16.17-43.89 39.75-51 68.18c-1.68 6.69-4.13 19.14-1.51 26.11a192.18 192.18 0 0 0 232.75-80.17Zm-256.74 46.09c7.07-28.21 22.12-51.73 45.47-70.75a8 8 0 0 0-2.59-13.77c-12-3.83-25.7-5.88-42.69-5.88c-23.82 0-49.11 6.45-68.14 18.17c-5.4 3.33-10.7 4.61-14.78 5.75a192.84 192.84 0 0 0 77.78 86.64l1.79-.14a103 103 0 0 1 3.16-20.02"></svg:path>`,
})
export class IonPeopleCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPeopleOutlineIcon],svg[ion-people-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M336 304c-65.17 0-127.84 32.37-143.54 95.41c-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M206 306c-18.05-8.27-37.93-11.45-59-11.45c-52 0-102.1 25.85-114.65 76.2c-1.65 6.66 2.53 13.25 9.37 13.25H154"></svg:path>`,
})
export class IonPeopleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonAddOutlineIcon],svg[ion-person-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M288 304c-87 0-175.3 48-191.64 138.6c-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M88 176v112m56-56H32"></svg:path>`,
})
export class IonPersonAddOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonCircleOutlineIcon],svg[ion-person-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48m126.42 327.25a4 4 0 0 1-6.14-.32a124.3 124.3 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.2 124.2 0 0 0-32.35 29.58a4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25"></svg:path><svg:path fill="currentColor" d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144"></svg:path>`,
})
export class IonPersonCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonOutlineIcon],svg[ion-person-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304Z"></svg:path>`,
})
export class IonPersonOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonRemoveOutlineIcon],svg[ion-person-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M288 304c-87 0-175.3 48-191.64 138.6c-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 232H32"></svg:path>`,
})
export class IonPersonRemoveOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPhoneLandscapeOutlineIcon],svg[ion-phone-landscape-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="256" height="480" x="128" y="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="48" ry="48" transform="rotate(-90 256 256)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M16 336v-24a8 8 0 0 1 8-8h0a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16h0a8 8 0 0 1-8-8v-24"></svg:path>`,
})
export class IonPhoneLandscapeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPhonePortraitOutlineIcon],svg[ion-phone-portrait-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="256" height="480" x="128" y="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 16h24a8 8 0 0 1 8 8h0a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16h0a8 8 0 0 1 8-8h24"></svg:path>`,
})
export class IonPhonePortraitOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPieChartOutlineIcon],svg[ion-pie-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256.05 80.65Q263.94 80 272 80c106 0 192 86 192 192s-86 192-192 192A192.09 192.09 0 0 1 89.12 330.65"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48C141.12 48 48 141.12 48 256a207.3 207.3 0 0 0 18.09 85L256 256Z"></svg:path>`,
})
export class IonPieChartOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPinOutlineIcon],svg[ion-pin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="96" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="currentColor" d="M272 164a9 9 0 0 0-9-9h-14a9 9 0 0 0-9 9v293.56a32.1 32.1 0 0 0 2.49 12.38l10.07 24a3.92 3.92 0 0 0 6.88 0l10.07-24a32.1 32.1 0 0 0 2.49-12.38Z"></svg:path><svg:circle cx="280" cy="72" r="24" fill="currentColor"></svg:circle>`,
})
export class IonPinOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPintOutlineIcon],svg[ion-pint-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M132.43 162c-6.24-34-4.49-45.55-3.07-68.39L132.27 47a16 16 0 0 1 15.94-15h215.57a16 16 0 0 1 15.94 15l2.91 46.61c1.43 22.86 3.19 34.39-3.06 68.45c-5.93 32.29-43.71 133.27-43.71 238.32V472a8 8 0 0 1-8 8H184.12a8 8 0 0 1-8-8v-71.63c.01-92.47-37.46-204.3-43.69-238.37m2.78-66h241.58"></svg:path>`,
})
export class IonPintOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPizzaOutlineIcon],svg[ion-pizza-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M404.76 123.08C358.37 104.18 309.69 96 256 96s-106.1 9-148.9 26.68c-8.08 3.3-15.26 9-10.07 19.5C101.24 150.71 203 375 241.66 455a15.94 15.94 0 0 0 28.72 0l144.05-312.22c3.19-6.9.9-15.4-9.67-19.7Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M436.38 82.68C384.31 62.08 320.17 48 256 48S128.65 60.78 75.48 82.08C70.79 84 62 88.43 64.41 95.88L74.09 120c4 8.2 8.67 8.2 15.06 8.2c1.79 0 4.29-1 7.28-2.18A442.5 442.5 0 0 1 256 96c56.76 0 114.91 12 159.6 30c3.59 1.4 5.59 2.18 7.28 2.18c6.58 0 10.38 2.19 15-8.1L447.65 96c2.01-6-4.99-10.82-11.27-13.32Z"></svg:path><svg:circle cx="192" cy="192" r="32" fill="currentColor"></svg:circle><svg:circle cx="320" cy="208" r="32" fill="currentColor"></svg:circle><svg:circle cx="256" cy="320" r="32" fill="currentColor"></svg:circle>`,
})
export class IonPizzaOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlanetOutlineIcon],svg[ion-planet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M413.48 284.46c58.87 47.24 91.61 89 80.31 108.55c-17.85 30.85-138.78-5.48-270.1-81.15S.37 149.84 18.21 119c11.16-19.28 62.58-12.32 131.64 14.09"></svg:path><svg:circle cx="256" cy="256" r="160" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class IonPlanetOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayBackCircleOutlineIcon],svg[ion-play-back-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 448c106 0 192-86 192-192S362 64 256 64S64 150 64 256s86 192 192 192Z"></svg:path><svg:path fill="currentColor" d="m117.23 246.7l114.45-69.14a10.78 10.78 0 0 1 16.32 9.31v53.32l103.68-62.63a10.78 10.78 0 0 1 16.32 9.31v138.26a10.78 10.78 0 0 1-16.32 9.31L248 271.81v53.32a10.78 10.78 0 0 1-16.32 9.31L117.23 265.3a10.89 10.89 0 0 1 0-18.6"></svg:path>`,
})
export class IonPlayBackCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayBackOutlineIcon],svg[ion-play-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M480 145.52v221c0 13.28-13 21.72-23.63 15.35L267.5 268.8c-9.24-5.53-9.24-20.07 0-25.6l188.87-113C467 123.8 480 132.24 480 145.52Zm-228.57 0v221c0 13.28-13 21.72-23.63 15.35L38.93 268.8c-9.24-5.53-9.24-20.07 0-25.6l188.87-113c10.64-6.4 23.63 2.04 23.63 15.32Z"></svg:path>`,
})
export class IonPlayBackOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayCircleOutlineIcon],svg[ion-play-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="m216.32 334.44l114.45-69.14a10.89 10.89 0 0 0 0-18.6l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31"></svg:path>`,
})
export class IonPlayCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayForwardCircleOutlineIcon],svg[ion-play-forward-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="m394.77 246.7l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v53.32l-103.68-62.63a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31L264 271.81v53.32a10.78 10.78 0 0 0 16.32 9.31l114.45-69.14a10.89 10.89 0 0 0 0-18.6"></svg:path>`,
})
export class IonPlayForwardCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayForwardOutlineIcon],svg[ion-play-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M32 145.52v221c0 13.28 13 21.72 23.63 15.35l188.87-113c9.24-5.53 9.24-20.07 0-25.6l-188.87-113C45 123.8 32 132.24 32 145.52Zm228.57 0v221c0 13.28 13 21.72 23.63 15.35l188.87-113c9.24-5.53 9.24-20.07 0-25.6l-188.87-113c-10.64-6.47-23.63 1.97-23.63 15.25Z"></svg:path>`,
})
export class IonPlayForwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayOutlineIcon],svg[ion-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16Z"></svg:path>`,
})
export class IonPlayOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipBackCircleOutlineIcon],svg[ion-play-skip-back-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 448c106 0 192-86 192-192S362 64 256 64S64 150 64 256s86 192 192 192Z"></svg:path><svg:path fill="currentColor" d="M192 176a16 16 0 0 1 16 16v53l111.68-67.46a10.78 10.78 0 0 1 16.32 9.33v138.26a10.78 10.78 0 0 1-16.32 9.31L208 267v53a16 16 0 0 1-32 0V192a16 16 0 0 1 16-16"></svg:path>`,
})
export class IonPlaySkipBackCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipBackOutlineIcon],svg[ion-play-skip-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M400 111v290c0 17.44-17 28.52-31 20.16L121.09 272.79c-12.12-7.25-12.12-26.33 0-33.58L369 90.84c14-8.36 31 2.72 31 20.16Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M112 80v352"></svg:path>`,
})
export class IonPlaySkipBackOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipForwardCircleOutlineIcon],svg[ion-play-skip-forward-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="M320 176a16 16 0 0 0-16 16v53l-111.68-67.44a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31L304 267v53a16 16 0 0 0 32 0V192a16 16 0 0 0-16-16"></svg:path>`,
})
export class IonPlaySkipForwardCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipForwardOutlineIcon],svg[ion-play-skip-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M400 80v352"></svg:path>`,
})
export class IonPlaySkipForwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPodiumOutlineIcon],svg[ion-podium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 160v296a8 8 0 0 0 8 8h136V160a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16M320 48H192a16 16 0 0 0-16 16v400h160V64a16 16 0 0 0-16-16m144 160H352a16 16 0 0 0-16 16v240h136a8 8 0 0 0 8-8V224a16 16 0 0 0-16-16"></svg:path>`,
})
export class IonPodiumOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPowerOutlineIcon],svg[ion-power-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M378 108a191.41 191.41 0 0 1 70 148c0 106-86 192-192 192S64 362 64 256a192 192 0 0 1 69-148m123-44v192"></svg:path>`,
})
export class IonPowerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPricetagOutlineIcon],svg[ion-pricetag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M435.25 48h-122.9a14.46 14.46 0 0 0-10.2 4.2L56.45 297.9a28.85 28.85 0 0 0 0 40.7l117 117a28.85 28.85 0 0 0 40.7 0L459.75 210a14.46 14.46 0 0 0 4.2-10.2v-123a28.66 28.66 0 0 0-28.7-28.8"></svg:path><svg:path fill="currentColor" d="M384 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonPricetagOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPricetagsOutlineIcon],svg[ion-pricetags-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M403.29 32H280.36a14.46 14.46 0 0 0-10.2 4.2L24.4 281.9a28.85 28.85 0 0 0 0 40.7l117 117a28.86 28.86 0 0 0 40.71 0L427.8 194a14.46 14.46 0 0 0 4.2-10.2v-123A28.66 28.66 0 0 0 403.29 32"></svg:path><svg:path fill="currentColor" d="M352 144a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m230 480l262-262a13.8 13.8 0 0 0 4-10V80"></svg:path>`,
})
export class IonPricetagsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPrintOutlineIcon],svg[ion-print-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M384 368h24a40.12 40.12 0 0 0 40-40V168a40.12 40.12 0 0 0-40-40H104a40.12 40.12 0 0 0-40 40v160a40.12 40.12 0 0 0 40 40h24"></svg:path><svg:rect width="256" height="208" x="128" y="240" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="24.32" ry="24.32"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M384 128v-24a40.12 40.12 0 0 0-40-40H168a40.12 40.12 0 0 0-40 40v24"></svg:path><svg:circle cx="392" cy="184" r="24" fill="currentColor"></svg:circle>`,
})
export class IonPrintOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPrismOutlineIcon],svg[ion-prism-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M229.73 45.88L37.53 327.79a31.79 31.79 0 0 0 11.31 46L241 476.26a31.77 31.77 0 0 0 29.92 0l192.2-102.51a31.79 31.79 0 0 0 11.31-46L282.27 45.88a31.8 31.8 0 0 0-52.54 0M256 32v448"></svg:path>`,
})
export class IonPrismOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPulseOutlineIcon],svg[ion-pulse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 320h64l64-256l64 384l64-224l32 96h64"></svg:path><svg:circle cx="432" cy="320" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class IonPulseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPushOutlineIcon],svg[ion-push-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 336h40a40 40 0 0 0 40-40V88a40 40 0 0 0-40-40H136a40 40 0 0 0-40 40v208a40 40 0 0 0 40 40h40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m176 240l80-80l80 80m-80 224V176"></svg:path>`,
})
export class IonPushOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionQrCodeOutlineIcon],svg[ion-qr-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="80" height="80" x="336" y="336" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="64" height="64" x="272" y="272" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="64" height="64" x="416" y="416" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="48" height="48" x="432" y="272" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="48" height="48" x="272" y="432" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="80" height="80" x="336" y="96" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="176" height="176" x="288" y="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect><svg:rect width="80" height="80" x="96" y="96" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="176" height="176" x="48" y="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect><svg:rect width="80" height="80" x="96" y="336" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="176" height="176" x="48" y="288" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect>`,
})
export class IonQrCodeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRadioButtonOffOutlineIcon],svg[ion-radio-button-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class IonRadioButtonOffOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRadioButtonOnOutlineIcon],svg[ion-radio-button-on-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:circle cx="256" cy="256" r="144" fill="currentColor"></svg:circle>`,
})
export class IonRadioButtonOnOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRadioOutlineIcon],svg[ion-radio-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256.02" r="32" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M184.25 192.25a96 96 0 0 0 0 127.52m143.52 0a96 96 0 0 0 0-127.52m-194.49-50.97a168 168 0 0 0 0 229.44m245.44 0a168 168 0 0 0 0-229.44"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M435 416a240.34 240.34 0 0 0 0-320M77 96a240.34 240.34 0 0 0 0 320"></svg:path>`,
})
export class IonRadioOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRainyOutlineIcon],svg[ion-rainy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M114.61 162.85A16.07 16.07 0 0 0 128 149.6C140.09 76.17 193.63 32 256 32c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0 0 12.2 9.87c50 8.15 91.6 41.54 91.6 99.59c0 59.4-48.6 100.8-108 100.8H130c-49.5 0-90-24.7-90-79.2c0-48.47 38.67-72.22 74.61-77.95Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m144 384l-32 48m112-48l-64 96m144-96l-32 48m112-48l-64 96"></svg:path>`,
})
export class IonRainyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReaderOutlineIcon],svg[ion-reader-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="320" height="416" x="96" y="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 128h160m-160 80h160m-160 80h80"></svg:path>`,
})
export class IonReaderOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReceiptOutlineIcon],svg[ion-receipt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M160 336V48l32 16l32-16l31.94 16l32.37-16L320 64l31.79-16l31.93 16L416 48l32.01 16L480 48v224"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M480 272v112a80 80 0 0 1-80 80a80 80 0 0 1-80-80v-48H48a15.86 15.86 0 0 0-16 16c0 64 6.74 112 80 112h288"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 144h192m-128 80h128"></svg:path>`,
})
export class IonReceiptOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRecordingOutlineIcon],svg[ion-recording-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="128" cy="256" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="384" cy="256" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 352h256"></svg:path>`,
})
export class IonRecordingOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRefreshCircleOutlineIcon],svg[ion-refresh-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="28" d="M288 193s12.18-6-32-6a80 80 0 1 0 80 80"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="28" d="m256 149l40 40l-40 40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"></svg:path>`,
})
export class IonRefreshCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRefreshOutlineIcon],svg[ion-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m256 58l80 80l-80 80"></svg:path>`,
})
export class IonRefreshOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReloadCircleOutlineIcon],svg[ion-reload-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m341.54 197.85l-11.37-13.23a103.37 103.37 0 1 0 22.71 105.84"></svg:path><svg:path fill="currentColor" d="M367.32 162a8.44 8.44 0 0 0-6 2.54l-59.54 59.54a8.61 8.61 0 0 0 6.09 14.71h59.54a8.62 8.62 0 0 0 8.62-8.62v-59.56a8.61 8.61 0 0 0-8.68-8.63Z"></svg:path>`,
})
export class IonReloadCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReloadOutlineIcon],svg[ion-reload-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128"></svg:path><svg:path fill="currentColor" d="M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42"></svg:path>`,
})
export class IonReloadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRemoveCircleOutlineIcon],svg[ion-remove-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 256H176"></svg:path>`,
})
export class IonRemoveCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRemoveOutlineIcon],svg[ion-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"></svg:path>`,
})
export class IonRemoveOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReorderFourOutlineIcon],svg[ion-reorder-four-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 304h320M96 208h320M96 112h320M96 400h320"></svg:path>`,
})
export class IonReorderFourOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReorderThreeOutlineIcon],svg[ion-reorder-three-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 256h320M96 176h320M96 336h320"></svg:path>`,
})
export class IonReorderThreeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReorderTwoOutlineIcon],svg[ion-reorder-two-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 304h288m-288-96h288"></svg:path>`,
})
export class IonReorderTwoOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRepeatOutlineIcon],svg[ion-repeat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m320 120l48 48l-48 48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 168H144a80.24 80.24 0 0 0-80 80v16m128 128l-48-48l48-48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 344h208a80.24 80.24 0 0 0 80-80v-16"></svg:path>`,
})
export class IonRepeatOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionResizeOutlineIcon],svg[ion-resize-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 96h112v112m-10.23-101.8L111.98 400.02M208 416H96V304"></svg:path>`,
})
export class IonResizeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRestaurantOutlineIcon],svg[ion-restaurant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="m57.49 47.74l368.43 368.43a37.28 37.28 0 0 1 0 52.72a37.29 37.29 0 0 1-52.72 0l-90-91.55a32 32 0 0 1-9.2-22.43v-5.53a32 32 0 0 0-9.52-22.78l-11.62-10.73a32 32 0 0 0-29.8-7.44a48.53 48.53 0 0 1-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 32l-77.25 77.25A64 64 0 0 0 304 154.51v14.86a16 16 0 0 1-4.69 11.32L288 192m32 32l11.31-11.31a16 16 0 0 1 11.32-4.69h14.86a64 64 0 0 0 45.26-18.75L480 112m-40-40l-80 80M200 368l-99.72 100.28a40 40 0 0 1-56.56 0h0a40 40 0 0 1 0-56.56L128 328"></svg:path>`,
})
export class IonRestaurantOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnDownBackOutlineIcon],svg[ion-return-down-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 352l-64-64l64-64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 288h294c58.76 0 106-49.33 106-108v-20"></svg:path>`,
})
export class IonReturnDownBackOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnDownForwardOutlineIcon],svg[ion-return-down-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 352l64-64l-64-64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 288H154c-58.76 0-106-49.33-106-108v-20"></svg:path>`,
})
export class IonReturnDownForwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnUpBackOutlineIcon],svg[ion-return-up-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l-64 64l64 64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 224h294c58.76 0 106 49.33 106 108v20"></svg:path>`,
})
export class IonReturnUpBackOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnUpForwardOutlineIcon],svg[ion-return-up-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 160l64 64l-64 64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 224H154c-58.76 0-106 49.33-106 108v20"></svg:path>`,
})
export class IonReturnUpForwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRibbonOutlineIcon],svg[ion-ribbon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="160" r="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M143.65 227.82L48 400l86.86-.42a16 16 0 0 1 13.82 7.8L192 480l88.33-194.32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M366.54 224L464 400l-86.86-.42a16 16 0 0 0-13.82 7.8L320 480l-64-140.8"></svg:path><svg:circle cx="256" cy="160" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class IonRibbonOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRocketOutlineIcon],svg[ion-rocket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M461.81 53.81a4.4 4.4 0 0 0-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a295 295 0 0 0-33.09 39.08c-21-1.9-42-.3-59.88 7.5c-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 0 0 9.8 10.4l81.07-8.9a180 180 0 0 0 1.1 18.3a18.15 18.15 0 0 0 5.3 11.09l31.39 31.39a18.15 18.15 0 0 0 11.1 5.3a180 180 0 0 0 18.19 1.1l-8.89 81a9 9 0 0 0 10.39 9.79c24.9-4 83-18.69 105.07-69.17c7.8-17.9 9.4-38.79 7.6-59.69a294 294 0 0 0 39.19-33.09c68.38-68 115.47-190.86 102.37-247.95M298.66 213.67a42.7 42.7 0 1 1 60.38 0a42.65 42.65 0 0 1-60.38 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M109.64 352a45.06 45.06 0 0 0-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 0 0 160 402.32"></svg:path>`,
})
export class IonRocketOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRoseOutlineIcon],svg[ion-rose-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128c-18.9 4.25-36.8 8.94-53.7 13.95c-40.5 12-75.5 27.15-105.4 41.65c-19.3 9.37-26.2 13.51-51.5 28.23c-58.4 33.69-93.4 77.4-93.4 142.81C112 428.55 167.6 480 256 480s144-55.81 144-129.72S339 225.24 416 128"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M264 180.19c-19.69-27-38.2-38.69-52.7-46.59C162.6 107.1 96 96 96 96c41.5 43.7 37.2 90.1 32 128c0 0-3.87 32.88 1.91 58.41"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M372 139.15C356.55 102.6 336 64 336 64s-63.32 0-135.69 64m53.17-40.43C221.25 45.81 176 32 176 32c-15.3 20.8-28.79 51.58-34.87 74.17"></svg:path>`,
})
export class IonRoseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSadOutlineIcon],svg[ion-sad-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="184" cy="232" r="24" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M256 288c45.42 0 83.62 29.53 95.71 69.83a8 8 0 0 1-7.87 10.17H168.15a8 8 0 0 1-7.82-10.17C172.32 317.53 210.53 288 256 288"></svg:path><svg:circle cx="328" cy="232" r="24" fill="currentColor"></svg:circle><svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class IonSadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSaveOutlineIcon],svg[ion-save-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M380.93 57.37A32 32 0 0 0 358.3 48H94.22A46.21 46.21 0 0 0 48 94.22v323.56A46.21 46.21 0 0 0 94.22 464h323.56A46.36 46.36 0 0 0 464 417.78V153.7a32 32 0 0 0-9.37-22.63ZM256 416a64 64 0 1 1 64-64a63.92 63.92 0 0 1-64 64m48-224H112a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16"></svg:path>`,
})
export class IonSaveOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionScaleOutlineIcon],svg[ion-scale-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="416" x="48" y="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="96"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M388.94 151.56c-24.46-22.28-68.72-51.4-132.94-51.4s-108.48 29.12-132.94 51.4a34.66 34.66 0 0 0-3.06 48.08l33.32 39.21a26.07 26.07 0 0 0 33.6 5.21c15.92-9.83 40.91-21.64 69.1-21.64s53.18 11.81 69.1 21.64a26.07 26.07 0 0 0 33.6-5.21L392 199.64a34.66 34.66 0 0 0-3.06-48.08Z"></svg:path>`,
})
export class IonScaleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionScanCircleOutlineIcon],svg[ion-scan-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M296 352h28a28 28 0 0 0 28-28v-28m0-80v-28a28 28 0 0 0-28-28h-28m-80 192h-28a28 28 0 0 1-28-28v-28m0-80v-28a28 28 0 0 1 28-28h28"></svg:path>`,
})
export class IonScanCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionScanOutlineIcon],svg[ion-scan-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 448h56a56 56 0 0 0 56-56v-56m0-160v-56a56 56 0 0 0-56-56h-56M176 448h-56a56 56 0 0 1-56-56v-56m0-160v-56a56 56 0 0 1 56-56h56"></svg:path>`,
})
export class IonScanOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSchoolOutlineIcon],svg[ion-school-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 192L256 64l224 128l-224 128z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 240v128l144 80l144-80V240m80 128V192M256 320v128"></svg:path>`,
})
export class IonSchoolOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSearchCircleOutlineIcon],svg[ion-search-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M232 160a72 72 0 1 0 72 72a72 72 0 0 0-72-72Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M283.64 283.64L336 336"></svg:path>`,
})
export class IonSearchCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSearchOutlineIcon],svg[ion-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"></svg:path>`,
})
export class IonSearchOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSendOutlineIcon],svg[ion-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M470.3 271.15L43.16 447.31a7.83 7.83 0 0 1-11.16-7V327a8 8 0 0 1 6.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 0 1-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 0 1 0 29.39"></svg:path>`,
})
export class IonSendOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionServerOutlineIcon],svg[ion-server-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><svg:ellipse cx="256" cy="112" rx="176" ry="80"></svg:ellipse><svg:path d="M432 112v288c0 44.183-78.798 80-176 80S80 444.183 80 400V112"></svg:path><svg:path d="M432 256c0 44.183-78.798 80-176 80S80 300.183 80 256"></svg:path></svg:g>`,
})
export class IonServerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSettingsOutlineIcon],svg[ion-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4M416.39 256a154 154 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.5 164.5 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155 155 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.5 164.5 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155 155 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47"></svg:path>`,
})
export class IonSettingsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShapesOutlineIcon],svg[ion-shapes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M336 320H32L184 48z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M265.32 194.51A144 144 0 1 1 192 320"></svg:path>`,
})
export class IonShapesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShareOutlineIcon],svg[ion-share-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 192h40a40 40 0 0 1 40 40v192a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V232a40 40 0 0 1 40-40h40m160-64l-80-80l-80 80m80 193V48"></svg:path>`,
})
export class IonShareOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShareSocialOutlineIcon],svg[ion-share-social-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="128" cy="256" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="384" cy="112" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="384" cy="400" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m169.83 279.53l172.34 96.94m0-240.94l-172.34 96.94"></svg:path>`,
})
export class IonShareSocialOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShieldCheckmarkOutlineIcon],svg[ion-shield-checkmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 176L225.2 304L176 255.8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63"></svg:path>`,
})
export class IonShieldCheckmarkOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShieldHalfOutlineIcon],svg[ion-shield-half-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63"></svg:path><svg:path fill="currentColor" d="M256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464Z"></svg:path>`,
})
export class IonShieldHalfOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShieldOutlineIcon],svg[ion-shield-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63"></svg:path>`,
})
export class IonShieldOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShirtOutlineIcon],svg[ion-shirt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M314.56 48s-22.78 8-58.56 8s-58.56-8-58.56-8a32 32 0 0 0-10.57 1.8L32 104l16.63 88l48.88 5.52a24 24 0 0 1 21.29 24.58L112 464h288l-6.8-241.9a24 24 0 0 1 21.29-24.58l48.88-5.52L480 104L325.13 49.8a32 32 0 0 0-10.57-1.8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M333.31 52.66a80 80 0 0 1-154.62 0"></svg:path>`,
})
export class IonShirtOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShuffleOutlineIcon],svg[ion-shuffle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 304l48 48l-48 48m0-288l48 48l-48 48M64 352h85.19a80 80 0 0 0 66.56-35.62L256 256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 160h85.19a80 80 0 0 1 66.56 35.62l80.5 120.76A80 80 0 0 0 362.81 352H416m0-192h-53.19a80 80 0 0 0-66.56 35.62L288 208"></svg:path>`,
})
export class IonShuffleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSkullOutlineIcon],svg[ion-skull-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M448 225.64v99a64 64 0 0 1-40.23 59.42l-23.68 9.47A32 32 0 0 0 364.6 417l-10 50.14A16 16 0 0 1 338.88 480H173.12a16 16 0 0 1-15.69-12.86L147.4 417a32 32 0 0 0-19.49-23.44l-23.68-9.47A64 64 0 0 1 64 324.67V224c0-105.92 85.77-191.81 191.65-192S448 119.85 448 225.64Z"></svg:path><svg:circle cx="168" cy="280" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="344" cy="280" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m256 336l-16 48h32zm0 112v32m-48-32v32m96-32v32"></svg:path>`,
})
export class IonSkullOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSnowOutlineIcon],svg[ion-snow-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 32v448m57.72-400A111.47 111.47 0 0 1 256 96a111.47 111.47 0 0 1-57.72-16m0 352a112.11 112.11 0 0 1 115.44 0m136.27-288L62.01 368m375.26-150a112.09 112.09 0 0 1-57.71-100M74.73 294a112.09 112.09 0 0 1 57.71 100M62.01 144l387.98 224M74.73 218a112.09 112.09 0 0 0 57.71-100m304.83 176a112.09 112.09 0 0 0-57.71 100"></svg:path>`,
})
export class IonSnowOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
