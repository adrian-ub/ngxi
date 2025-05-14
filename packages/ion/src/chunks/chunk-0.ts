import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionAccessibilityIcon],svg[ion-accessibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 112a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56"></svg:path><svg:path fill="currentColor" d="m432 112.8l-.45.12l-.42.13c-1 .28-2 .58-3 .89c-18.61 5.46-108.93 30.92-172.56 30.92c-59.13 0-141.28-22-167.56-29.47a74 74 0 0 0-8-2.58c-19-5-32 14.3-32 31.94c0 17.47 15.7 25.79 31.55 31.76v.28l95.22 29.74c9.73 3.73 12.33 7.54 13.6 10.84c4.13 10.59.83 31.56-.34 38.88l-5.8 45l-32.19 176.19q-.15.72-.27 1.47l-.23 1.27c-2.32 16.15 9.54 31.82 32 31.82c19.6 0 28.25-13.53 32-31.94s28-157.57 42-157.57s42.84 157.57 42.84 157.57c3.75 18.41 12.4 31.94 32 31.94c22.52 0 34.38-15.74 32-31.94a57 57 0 0 0-.76-4.06L329 301.27l-5.79-45c-4.19-26.21-.82-34.87.32-36.9a1 1 0 0 0 .08-.15c1.08-2 6-6.48 17.48-10.79l89.28-31.21a17 17 0 0 0 1.62-.52c16-6 32-14.3 32-31.93S451 107.81 432 112.8"></svg:path>`,
})
export class IonAccessibilityIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAddIcon],svg[ion-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288m144-144H112"></svg:path>`,
})
export class IonAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAddCircleIcon],svg[ion-add-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m80 224h-64v64a16 16 0 0 1-32 0v-64h-64a16 16 0 0 1 0-32h64v-64a16 16 0 0 1 32 0v64h64a16 16 0 0 1 0 32"></svg:path>`,
})
export class IonAddCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAirplaneIcon],svg[ion-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186.62 464H160a16 16 0 0 1-14.57-22.6l64.46-142.25L113.1 297l-35.3 42.77C71.07 348.23 65.7 352 52 352H34.08a17.66 17.66 0 0 1-14.7-7.06c-2.38-3.21-4.72-8.65-2.44-16.41l19.82-71c.15-.53.33-1.06.53-1.58a.4.4 0 0 0 0-.15a15 15 0 0 1-.53-1.59l-19.84-71.45c-2.15-7.61.2-12.93 2.56-16.06a16.83 16.83 0 0 1 13.6-6.7H52c10.23 0 20.16 4.59 26 12l34.57 42.05l97.32-1.44l-64.44-142A16 16 0 0 1 160 48h26.91a25 25 0 0 1 19.35 9.8l125.05 152l57.77-1.52c4.23-.23 15.95-.31 18.66-.31C463 208 496 225.94 496 256c0 9.46-3.78 27-29.07 38.16c-14.93 6.6-34.85 9.94-59.21 9.94c-2.68 0-14.37-.08-18.66-.31l-57.76-1.54l-125.36 152a25 25 0 0 1-19.32 9.75"></svg:path>`,
})
export class IonAirplaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAlarmIcon],svg[ion-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M153.59 110.46A21.41 21.41 0 0 0 152.48 79A62.67 62.67 0 0 0 112 64l-3.27.09h-.48C74.4 66.15 48 95.55 48.07 131c0 19 8 29.06 14.32 37.11a20.6 20.6 0 0 0 14.7 7.8c.26 0 .7.05 2 .05a19.06 19.06 0 0 0 13.75-5.89Zm250.2-46.35l-3.27-.1H400a62.67 62.67 0 0 0-40.52 15a21.41 21.41 0 0 0-1.11 31.44l60.77 59.65a19.06 19.06 0 0 0 13.79 5.9c1.28 0 1.72 0 2-.05a20.6 20.6 0 0 0 14.69-7.8c6.36-8.05 14.28-18.08 14.32-37.11c.06-35.49-26.34-64.89-60.15-66.93"></svg:path><svg:path fill="currentColor" d="M256.07 96c-97 0-176 78.95-176 176a175.23 175.23 0 0 0 40.81 112.56l-36.12 36.13a16 16 0 1 0 22.63 22.62l36.12-36.12a175.63 175.63 0 0 0 225.12 0l36.13 36.12a16 16 0 1 0 22.63-22.62l-36.13-36.13A175.17 175.17 0 0 0 432.07 272c0-97-78.95-176-176-176m16 176a16 16 0 0 1-16 16h-80a16 16 0 0 1 0-32h64v-96a16 16 0 0 1 32 0Z"></svg:path>`,
})
export class IonAlarmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAlbumsIcon],svg[ion-albums-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 96H144a16 16 0 0 1 0-32h224a16 16 0 0 1 0 32m32 48H112a16 16 0 0 1 0-32h288a16 16 0 0 1 0 32m19.13 304H92.87A44.92 44.92 0 0 1 48 403.13V204.87A44.92 44.92 0 0 1 92.87 160h326.26A44.92 44.92 0 0 1 464 204.87v198.26A44.92 44.92 0 0 1 419.13 448"></svg:path>`,
})
export class IonAlbumsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAlertIcon],svg[ion-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 80c-8.66 0-16.58 7.36-16 16l8 216a8 8 0 0 0 8 8h0a8 8 0 0 0 8-8l8-216c.58-8.64-7.34-16-16-16"></svg:path><svg:circle cx="256" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class IonAlertIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAlertCircleIcon],svg[ion-alert-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m0 319.91a20 20 0 1 1 20-20a20 20 0 0 1-20 20m21.72-201.15l-5.74 122a16 16 0 0 1-32 0l-5.74-121.94v-.05a21.74 21.74 0 1 1 43.44 0Z"></svg:path>`,
})
export class IonAlertCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAlertCircledIcon],svg[ion-alert-circled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M476.7 422.2L270.1 72.7c-2.9-5-8.3-8.7-14.1-8.7-5.9 0-11.3 3.7-14.1 8.7L35.3 422.2c-2.8 5-4.8 13-1.9 17.9 2.9 4.9 8.2 7.9 14 7.9h417.1c5.8 0 11.1-3 14-7.9 3-4.9 1-13-1.8-17.9zM288 400h-64v-48h64v48zm0-80h-64V176h64v144z" fill="currentColor"></svg:path>`,
})
export class IonAlertCircledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAmericanFootballIcon],svg[ion-american-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122.06 122.06c-44.37 44.37-66.71 100.61-78 145.28l200.6 200.56c44.67-11.25 100.91-33.59 145.28-78s66.71-100.61 78-145.28L267.34 44.1c-44.67 11.25-100.91 33.59-145.28 77.96M300.65 189L323 166.71A15.78 15.78 0 0 1 345.29 189L323 211.35l11.16 11.17a15.78 15.78 0 0 1-22.32 22.32l-11.16-11.16L278.32 256l11.16 11.16a15.78 15.78 0 1 1-22.32 22.32L256 278.32l-22.32 22.33l11.16 11.16a15.78 15.78 0 1 1-22.32 22.32L211.35 323L189 345.29A15.78 15.78 0 0 1 166.71 323L189 300.65l-11.16-11.17a15.78 15.78 0 0 1 22.32-22.32l11.16 11.16L233.68 256l-11.16-11.16a15.78 15.78 0 1 1 22.32-22.32L256 233.68l22.32-22.33l-11.16-11.16a15.78 15.78 0 0 1 22.32-22.32Zm175.92 10.63c7.31-54.53 4-120.26-20-144.21s-89.68-27.3-144.21-20c-2.51.34-5.16.72-7.91 1.15l171 171c.4-2.78.78-5.43 1.12-7.94M35.43 312.37c-7.31 54.53-4 120.26 20 144.21C72.17 473.33 109.34 480 148.84 480a387 387 0 0 0 50.79-3.43c2.51-.34 5.16-.72 7.91-1.15l-171-171c-.39 2.79-.77 5.44-1.11 7.95"></svg:path>`,
})
export class IonAmericanFootballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAnalyticsIcon],svg[ion-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M456 128a40 40 0 0 0-37.23 54.6l-84.17 84.17a39.86 39.86 0 0 0-29.2 0l-60.17-60.17a40 40 0 1 0-74.46 0L70.6 306.77a40 40 0 1 0 22.63 22.63L193.4 229.23a39.86 39.86 0 0 0 29.2 0l60.17 60.17a40 40 0 1 0 74.46 0l84.17-84.17A40 40 0 1 0 456 128"></svg:path>`,
})
export class IonAnalyticsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAndroidBulbIcon],svg[ion-android-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 170.136c25.499 0 49.567 10.025 67.771 28.229C341.975 216.568 352 240.637 352 266.136c0 17.621-4.422 34.031-13.144 48.773-8.339 14.098-20.437 26.036-34.985 34.526L288 358.697V448h-64V358.697l-15.871-9.262C178.442 332.111 160 300.192 160 266.136c0-25.499 10.025-49.567 28.229-67.771s42.272-28.229 67.771-28.229M277.333 32h-42.666v64h42.666V32zm129.063 53.864L368 124.271l29.864 29.865 38.406-38.396-29.874-29.876zm-300.792 0l-29.875 29.875 38.406 38.396L144 124.271l-38.396-38.407zM256 138.136c-70.396 0-128 57.604-128 128 0 46.938 25.604 88.531 64 110.938V480h128V377.073c38.396-22.406 64-62.938 64-110.938 0-70.396-57.604-127.999-128-127.999zm224 106.666h-64v42.667h64v-42.667zm-384 0H32v42.667h64v-42.667z" fill="currentColor"></svg:path>`,
})
export class IonAndroidBulbIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAndroidCheckboxOutlineBlankIcon],svg[ion-android-checkbox-outline-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M405.333 106.667v298.666H106.667V106.667h298.666m0-42.667H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V106.667C448 83.198 428.802 64 405.333 64z" fill="currentColor"></svg:path>`,
})
export class IonAndroidCheckboxOutlineBlankIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAndroidContactIcon],svg[ion-android-contact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M331.08 338.205c-22.156 12.594-47.777 19.783-75.084 19.783-27.302 0-52.919-7.182-75.073-19.771C122.153 356.152 77.262 396 64 448h384c-13.255-52-58.146-91.869-116.92-109.795z" fill="currentColor"></svg:path><svg:path d="M255.996 64c-72.871 0-131.945 59.127-131.945 132.013 0 72.887 59.074 131.972 131.945 131.972S387.941 268.9 387.941 196.013C387.941 123.127 328.867 64 255.996 64zm0 230.986c-41.958 0-77.813-25.986-92.209-62.986h184.418c-14.396 37-50.252 62.986-92.209 62.986z" fill="currentColor"></svg:path>`,
})
export class IonAndroidContactIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAndroidHangoutIcon],svg[ion-android-hangout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48c-97.321 0-176 77.114-176 172.487 0 95.38 78.679 172.487 176 172.487V464c100.425-47.689 176-152.195 176-243.513C432 125.114 353.321 48 256 48zm-10 182.633L224.943 271H193.88l20.712-40H184v-61h62v60.633zm82 0L307.768 271h-31.063l20.704-40H266v-61h62v60.633z" fill="currentColor"></svg:path>`,
})
export class IonAndroidHangoutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAndroidMoreHorizontalIcon],svg[ion-android-more-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M136 216c-22.002 0-40 17.998-40 40s17.998 40 40 40 40-17.998 40-40-17.998-40-40-40zm240 0c-22.002 0-40 17.998-40 40s17.998 40 40 40 40-17.998 40-40-17.998-40-40-40zm-120 0c-22.002 0-40 17.998-40 40s17.998 40 40 40 40-17.998 40-40-17.998-40-40-40z" fill="currentColor"></svg:path>`,
})
export class IonAndroidMoreHorizontalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAndroidPlaneIcon],svg[ion-android-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 336v-40L288 192V79.2c0-17.683-14.82-31.2-32-31.2-17.179 0-32 13.518-32 31.2V192L64 296v40l160-48v113.602l-48 31.199V464l80-16 80 16v-31.199l-48-31.199V288l160 48z" fill="currentColor"></svg:path>`,
})
export class IonAndroidPlaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAndroidSunnyIcon],svg[ion-android-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 160c25.499 0 49.567 10.025 67.771 28.229S352 230.501 352 256s-10.025 49.567-28.229 67.771S281.499 352 256 352s-49.567-10.025-67.771-28.229S160 281.499 160 256s10.025-49.567 28.229-67.771S230.501 160 256 160m21.333-128h-42.666v64h42.666V32zm129.063 43.729L368 114.135 397.864 144l38.406-38.396-29.874-29.875zm-300.792 0l-29.875 29.875L114.136 144 144 114.135l-38.396-38.406zM256 128c-70.396 0-128 57.604-128 128s57.604 128 128 128 128-57.604 128-128-57.604-128-128-128zm224 106.666h-64v42.668h64v-42.668zm-384 0H32v42.668h64v-42.668zM397.864 368L368 397.865l38.396 38.406 29.875-29.875L397.864 368zm-283.728 0L75.73 406.396l29.875 29.875L144 397.865 114.136 368zm163.197 48h-42.666v64h42.666v-64z" fill="currentColor"></svg:path>`,
})
export class IonAndroidSunnyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAndroidTimeIcon],svg[ion-android-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-opacity=".9" d="M256 43C137.789 43 43 138.851 43 256s94.789 213 213 213 213-95.851 213-213S373.149 43 256 43zm0 383.4c-93.718 0-170.4-76.683-170.4-170.4S162.282 85.6 256 85.6 426.4 162.282 426.4 256 349.718 426.4 256 426.4z" fill="currentColor"></svg:path><svg:path fill-opacity=".9" d="M266.65 149.5H234.7v127.8l111.825 67.093 15.975-26.625-95.85-56.444z" fill="currentColor"></svg:path>`,
})
export class IonAndroidTimeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAndroidTrainIcon],svg[ion-android-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M80 346.666c0 41.604 33.062 74.666 74.667 74.666L128 448v16h256v-16l-26.667-26.668c41.604 0 74.667-33.062 74.667-74.666V133.334C432 58.668 349.864 48 256 48S80 58.668 80 133.334v213.332zM256 376c-22.002 0-40-17.997-40-39.999S233.998 296 256 296s40 17.999 40 40.001S278.002 376 256 376zm128-152H128v-96h256v96z" fill="currentColor"></svg:path>`,
})
export class IonAndroidTrainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionApertureIcon],svg[ion-aperture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250.54 129.17l-67.8-67.8A209.65 209.65 0 0 0 86.32 136h161.4a4 4 0 0 0 2.82-6.83M167.72 168H67.63a207.34 207.34 0 0 0-16.15 125.9l119.06-119.07a4 4 0 0 0-2.82-6.83m176.28-.28V67.56a207.82 207.82 0 0 0-125.89-16.08l119.06 119.06a4 4 0 0 0 6.83-2.82m116.52 50.38L341.46 337.17a4 4 0 0 0 2.82 6.83h100.09a207.34 207.34 0 0 0 16.15-125.9m-77.69 32.44l67.83-67.82A209.1 209.1 0 0 0 376 86.2v161.52a4 4 0 0 0 6.83 2.82m-161.15 91.23a8 8 0 0 0 5.54 2.23h59.66a8 8 0 0 0 5.7-2.39l49.18-50a8 8 0 0 0 2.3-5.62l-.06-60.81a8 8 0 0 0-2.38-5.69l-50-49.25a8 8 0 0 0-5.63-2.3l-60.84.06a8 8 0 0 0-5.69 2.38l-49.25 50a8 8 0 0 0-2.3 5.63l.06 60.78a8 8 0 0 0 2.45 5.76Zm39.78 41.06l67.8 67.8A209.65 209.65 0 0 0 425.68 376h-161.4a4 4 0 0 0-2.82 6.83M168 344.28v100.16a207.82 207.82 0 0 0 125.89 16.08L174.83 341.46a4 4 0 0 0-6.83 2.82m-38.83-82.82l-67.83 67.83A209.1 209.1 0 0 0 136 425.8V264.28a4 4 0 0 0-6.83-2.82"></svg:path>`,
})
export class IonApertureIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAppsIcon],svg[ion-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 160a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56m152 0a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56m152 0a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56M104 312a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56m152 0a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56m152 0a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56M104 464a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56m152 0a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56m152 0a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56"></svg:path>`,
})
export class IonAppsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArchiveIcon],svg[ion-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 164v244a56 56 0 0 0 56 56h272a56 56 0 0 0 56-56V164a4 4 0 0 0-4-4H68a4 4 0 0 0-4 4m267 151.63l-63.69 63.68a16 16 0 0 1-22.62 0L181 315.63c-6.09-6.09-6.65-16-.85-22.38a16 16 0 0 1 23.16-.56L240 329.37V224.45c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 224v105.37l36.69-36.68a16 16 0 0 1 23.16.56c5.8 6.37 5.24 16.29-.85 22.38"></svg:path><svg:rect width="448" height="80" x="32" y="48" fill="currentColor" rx="32" ry="32"></svg:rect>`,
})
export class IonArchiveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowBackIcon],svg[ion-arrow-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"></svg:path>`,
})
export class IonArrowBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowBackCircleIcon],svg[ion-arrow-back-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48S48 141.13 48 256m212.65-91.36a16 16 0 0 1 .09 22.63L208.42 240H342a16 16 0 0 1 0 32H208.42l52.32 52.73A16 16 0 1 1 238 347.27l-79.39-80a16 16 0 0 1 0-22.54l79.39-80a16 16 0 0 1 22.65-.09"></svg:path>`,
})
export class IonArrowBackCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowDownIcon],svg[ion-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 268l144 144l144-144M256 392V100"></svg:path>`,
})
export class IonArrowDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowDownAIcon],svg[ion-arrow-down-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256.5 448.5l192-192h-112v-192h-160v192h-112z" fill="currentColor"></svg:path>`,
})
export class IonArrowDownAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowDownBIcon],svg[ion-arrow-down-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M98.9 184.7l1.8 2.1 136 156.5c4.6 5.3 11.5 8.6 19.2 8.6 7.7 0 14.6-3.4 19.2-8.6L411 187.1l2.3-2.6c1.7-2.5 2.7-5.5 2.7-8.7 0-8.7-7.4-15.8-16.6-15.8H112.6c-9.2 0-16.6 7.1-16.6 15.8 0 3.3 1.1 6.4 2.9 8.9z" fill="currentColor"></svg:path>`,
})
export class IonArrowDownBIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowDownCIcon],svg[ion-arrow-down-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M383.6 322.7L278.6 423c-5.8 6-13.7 9-22.4 9s-16.5-3-22.4-9L128.4 322.7c-12.5-11.9-12.5-31.3 0-43.2 12.5-11.9 32.7-11.9 45.2 0l50.4 48.2v-217c0-16.9 14.3-30.6 32-30.6s32 13.7 32 30.6v217l50.4-48.2c12.5-11.9 32.7-11.9 45.2 0s12.5 31.2 0 43.2z" fill="currentColor"></svg:path>`,
})
export class IonArrowDownCIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowDownCircleIcon],svg[ion-arrow-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48S48 141.13 48 256s93.13 208 208 208m-91.36-212.65a16 16 0 0 1 22.63-.09L240 303.58V170a16 16 0 0 1 32 0v133.58l52.73-52.32A16 16 0 1 1 347.27 274l-80 79.39a16 16 0 0 1-22.54 0l-80-79.39a16 16 0 0 1-.09-22.65"></svg:path>`,
})
export class IonArrowDownCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowDownLeftBoxIcon],svg[ion-arrow-down-left-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M180.364 480H48a16 16 0 0 1-16-16V331.636c0-8.836 7.163-16 16-16s16 7.164 16 16v93.737l51.128-51.128a58.5 58.5 0 0 0 22.591 22.663L86.627 448h93.737c8.836 0 16 7.163 16 16s-7.164 16-16 16m-42.645-83.092a58.54 58.54 0 0 0 28.59 7.456h255.146A58.545 58.545 0 0 0 480 345.818V90.545A58.543 58.543 0 0 0 421.455 32H166.182a58.545 58.545 0 0 0-58.546 58.545v255.273q.001 1.213.176 2.378a58.54 58.54 0 0 0 7.316 26.049l169.558-169.559c6.249-6.248 16.379-6.248 22.628 0s6.248 16.379 0 22.628z" clip-rule="evenodd"></svg:path>`,
})
export class IonArrowDownLeftBoxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowDownRightBoxIcon],svg[ion-arrow-down-right-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M480 331.636V464c0 4.243-1.686 8.313-4.686 11.314A16 16 0 0 1 464 480H331.636c-8.836 0-16-7.163-16-16s7.164-16 16-16h93.737l-51.128-51.128a58.5 58.5 0 0 0 22.663-22.591L448 425.373v-93.737c0-8.836 7.163-16 16-16s16 7.164 16 16m-83.092 42.645a58.54 58.54 0 0 0 7.456-28.59V90.546A58.547 58.547 0 0 0 345.818 32H90.545A58.546 58.546 0 0 0 32 90.546v255.272a58.545 58.545 0 0 0 58.545 58.546h255.273q1.213-.001 2.378-.176a58.54 58.54 0 0 0 26.049-7.316L204.686 227.314c-6.248-6.249-6.248-16.379 0-22.628s16.379-6.248 22.628 0z" clip-rule="evenodd"></svg:path>`,
})
export class IonArrowDownRightBoxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowExpandIcon],svg[ion-arrow-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M274 209.7l63.9-63.8L288 96h128v128l-49.9-49.9-63.8 63.9z" fill="currentColor"></svg:path><svg:path d="M274 302.3l63.9 63.8L288 416h128V288l-49.9 49.9-63.8-63.9z" fill="currentColor"></svg:path><svg:path d="M238 302.3l-63.9 63.8L224 416H96V288l49.9 49.9 63.8-63.9z" fill="currentColor"></svg:path><svg:path d="M238 209.7l-63.9-63.8L224 96H96v128l49.9-49.9 63.8 63.9z" fill="currentColor"></svg:path>`,
})
export class IonArrowExpandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowForwardIcon],svg[ion-arrow-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m268 112l144 144l-144 144m124-144H100"></svg:path>`,
})
export class IonArrowForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowForwardCircleIcon],svg[ion-arrow-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208m-212.65 91.36a16 16 0 0 1-.09-22.63L303.58 272H170a16 16 0 0 1 0-32h133.58l-52.32-52.73A16 16 0 1 1 274 164.73l79.39 80a16 16 0 0 1 0 22.54l-79.39 80a16 16 0 0 1-22.65.09"></svg:path>`,
})
export class IonArrowForwardCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowGraphDownLeftIcon],svg[ion-arrow-graph-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 384V224l60.8 60.8L223.7 144l107 112L480 128 330.7 330.7 223.7 224l-93.5 98.2L192 384z" fill="currentColor"></svg:path>`,
})
export class IonArrowGraphDownLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowGraphDownRightIcon],svg[ion-arrow-graph-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M320 384l61.8-61.8-93.5-98.2-107 106.7L32 128l149.3 128 107-112 130.9 140.8L480 224v160z" fill="currentColor"></svg:path>`,
})
export class IonArrowGraphDownRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowGraphUpLeftIcon],svg[ion-arrow-graph-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M192 128l-61.8 61.8 93.5 98.2 107-106.7L480 384 330.7 256l-107 112L92.8 227.2 32 288V128z" fill="currentColor"></svg:path>`,
})
export class IonArrowGraphUpLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowGraphUpRightIcon],svg[ion-arrow-graph-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M320 128l61.8 61.8-93.5 98.2-107-106.7L32 384l149.3-128 107 112 130.9-140.8L480 288V128z" fill="currentColor"></svg:path>`,
})
export class IonArrowGraphUpRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowLeftAIcon],svg[ion-arrow-left-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64.5 256.5l192 192v-112h192v-160h-192v-112z" fill="currentColor"></svg:path>`,
})
export class IonArrowLeftAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowLeftBIcon],svg[ion-arrow-left-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M327.3 98.9l-2.1 1.8-156.5 136c-5.3 4.6-8.6 11.5-8.6 19.2 0 7.7 3.4 14.6 8.6 19.2L324.9 411l2.6 2.3c2.5 1.7 5.5 2.7 8.7 2.7 8.7 0 15.8-7.4 15.8-16.6V112.6c0-9.2-7.1-16.6-15.8-16.6-3.3 0-6.4 1.1-8.9 2.9z" fill="currentColor"></svg:path>`,
})
export class IonArrowLeftBIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowLeftCIcon],svg[ion-arrow-left-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M189.3 128.4L89 233.4c-6 5.8-9 13.7-9 22.4s3 16.5 9 22.4l100.3 105.4c11.9 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2L184.4 288h217c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32h-217l48.2-50.4c11.9-12.5 11.9-32.7 0-45.2-12-12.5-31.3-12.5-43.3 0z" fill="currentColor"></svg:path>`,
})
export class IonArrowLeftCIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowMoveIcon],svg[ion-arrow-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 256l-96-96v76H276V128h76l-96-96-96 96h76v108H128v-76l-96 96 96 96v-76h108v108h-76l96 96 96-96h-76.2l-.4-108.5 108.6.3V352z" fill="currentColor"></svg:path>`,
})
export class IonArrowMoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowRedoIcon],svg[ion-arrow-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M58.79 439.13A16 16 0 0 1 48 424c0-73.1 14.68-131.56 43.65-173.77c35-51 90.21-78.46 164.35-81.87V88a16 16 0 0 1 27.05-11.57l176 168a16 16 0 0 1 0 23.14l-176 168A16 16 0 0 1 256 424v-79.77c-45 1.36-79 8.65-106.07 22.64c-29.25 15.12-50.46 37.71-73.32 67a16 16 0 0 1-17.82 5.28Z"></svg:path>`,
})
export class IonArrowRedoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowRedoCircleIcon],svg[ion-arrow-redo-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48S48 141.13 48 256m96 66.67c5.45-61.45 34.14-117.09 122.87-117.09v-37.32a8.32 8.32 0 0 1 14-6L365.42 242a8.2 8.2 0 0 1 0 11.94L281 333.71a8.32 8.32 0 0 1-14-6v-37.29c-57.07 0-84.51 13.47-108.58 38.68c-5.49 5.65-15.07 1.32-14.42-6.43"></svg:path>`,
})
export class IonArrowRedoCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowResizeIcon],svg[ion-arrow-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M288 96l49.9 49.9-63.9 63.8-128.1 128.2L96 288v128h128l-49.9-49.9 183.3-183.2 8.7-8.8L416 224V96z" fill="currentColor"></svg:path>`,
})
export class IonArrowResizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowReturnLeftIcon],svg[ion-arrow-return-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M192 96v64h248c4.4 0 8 3.6 8 8v240c0 4.4-3.6 8-8 8H136c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h248V224H192v64L64 192l128-96z" fill="currentColor"></svg:path>`,
})
export class IonArrowReturnLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowReturnRightIcon],svg[ion-arrow-return-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 192l-128 96v-64H128v128h248c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8V168c0-4.4 3.6-8 8-8h248V96l128 96z" fill="currentColor"></svg:path>`,
})
export class IonArrowReturnRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowRightAIcon],svg[ion-arrow-right-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448.5 256.5l-192-192v112h-192v160h192v112z" fill="currentColor"></svg:path>`,
})
export class IonArrowRightAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowRightBIcon],svg[ion-arrow-right-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M184.7 413.1l2.1-1.8 156.5-136c5.3-4.6 8.6-11.5 8.6-19.2 0-7.7-3.4-14.6-8.6-19.2L187.1 101l-2.6-2.3C182 97 179 96 175.8 96c-8.7 0-15.8 7.4-15.8 16.6v286.8c0 9.2 7.1 16.6 15.8 16.6 3.3 0 6.4-1.1 8.9-2.9z" fill="currentColor"></svg:path>`,
})
export class IonArrowRightBIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowRightCIcon],svg[ion-arrow-right-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M322.7 128.4l100.3 105c6 5.8 9 13.7 9 22.4s-3 16.5-9 22.4L322.7 383.6c-11.9 12.5-31.3 12.5-43.2 0-11.9-12.5-11.9-32.7 0-45.2l48.2-50.4h-217c-17 0-30.7-14.3-30.7-32s13.7-32 30.6-32h217l-48.2-50.4c-11.9-12.5-11.9-32.7 0-45.2 12-12.5 31.3-12.5 43.3 0z" fill="currentColor"></svg:path>`,
})
export class IonArrowRightCIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowShrinkIcon],svg[ion-arrow-shrink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 92.3l-81.9 81.8L416 224H288V96l49.9 49.9L419.7 64z" fill="currentColor"></svg:path><svg:path d="M448 419.7l-81.9-81.8L416 288H288v128l49.9-49.9 81.8 81.9z" fill="currentColor"></svg:path><svg:path d="M64 419.7l81.9-81.8L96 288h128v128l-49.9-49.9L92.3 448z" fill="currentColor"></svg:path><svg:path d="M64 92.3l81.9 81.8L96 224h128V96l-49.9 49.9L92.3 64z" fill="currentColor"></svg:path>`,
})
export class IonArrowShrinkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowSwapIcon],svg[ion-arrow-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 328v48c0 4.4 3.6 8 8 8h248v64l128-96-128-96v64H72c-4.4 0-8 3.6-8 8z" fill="currentColor"></svg:path><svg:path d="M448 184v-48c0-4.4-3.6-8-8-8H192V64L64 160l128 96v-64h248c4.4 0 8-3.6 8-8z" fill="currentColor"></svg:path>`,
})
export class IonArrowSwapIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowUndoIcon],svg[ion-arrow-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 440a16 16 0 0 1-12.61-6.15c-22.86-29.27-44.07-51.86-73.32-67C335 352.88 301 345.59 256 344.23V424a16 16 0 0 1-27 11.57l-176-168a16 16 0 0 1 0-23.14l176-168A16 16 0 0 1 256 88v80.36c74.14 3.41 129.38 30.91 164.35 81.87C449.32 292.44 464 350.9 464 424a16 16 0 0 1-16 16"></svg:path>`,
})
export class IonArrowUndoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowUndoCircleIcon],svg[ion-arrow-undo-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m97.67 281.1c-24.07-25.21-51.51-38.68-108.58-38.68v37.32a8.32 8.32 0 0 1-14.05 6L146.58 254a8.2 8.2 0 0 1 0-11.94L231 162.29a8.32 8.32 0 0 1 14.05 6v37.32c88.73 0 117.42 55.64 122.87 117.09c.73 7.72-8.85 12.05-14.25 6.4"></svg:path>`,
})
export class IonArrowUndoCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowUpIcon],svg[ion-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 244l144-144l144 144M256 120v292"></svg:path>`,
})
export class IonArrowUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowUpAIcon],svg[ion-arrow-up-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256.5 64.5l-192 192h112v192h160v-192h112z" fill="currentColor"></svg:path>`,
})
export class IonArrowUpAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowUpBIcon],svg[ion-arrow-up-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M413.1 327.3l-1.8-2.1-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6-7.7 0-14.6 3.4-19.2 8.6L101 324.9l-2.3 2.6C97 330 96 333 96 336.2c0 8.7 7.4 15.8 16.6 15.8h286.8c9.2 0 16.6-7.1 16.6-15.8 0-3.3-1.1-6.4-2.9-8.9z" fill="currentColor"></svg:path>`,
})
export class IonArrowUpBIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowUpCIcon],svg[ion-arrow-up-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128.4 189.3L233.4 89c5.8-6 13.7-9 22.4-9s16.5 3 22.4 9l105.4 100.3c12.5 11.9 12.5 31.3 0 43.2-12.5 11.9-32.7 11.9-45.2 0L288 184.4v217c0 16.9-14.3 30.6-32 30.6s-32-13.7-32-30.6v-217l-50.4 48.2c-12.5 11.9-32.7 11.9-45.2 0-12.5-12-12.5-31.3 0-43.3z" fill="currentColor"></svg:path>`,
})
export class IonArrowUpCIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowUpCircleIcon],svg[ion-arrow-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m91.36 212.65a16 16 0 0 1-22.63.09L272 208.42V342a16 16 0 0 1-32 0V208.42l-52.73 52.32A16 16 0 1 1 164.73 238l80-79.39a16 16 0 0 1 22.54 0l80 79.39a16 16 0 0 1 .09 22.65"></svg:path>`,
})
export class IonArrowUpCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowUpLeftBoxIcon],svg[ion-arrow-up-left-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M32 180.364V48a16 16 0 0 1 16-16h132.364c8.836 0 16 7.163 16 16s-7.164 16-16 16H86.627l51.128 51.128a58.5 58.5 0 0 0-22.663 22.591L64 86.627v93.737c0 8.836-7.163 16-16 16s-16-7.164-16-16m83.092-42.645a58.54 58.54 0 0 0-7.456 28.59v255.146A58.545 58.545 0 0 0 166.182 480h255.273a58.54 58.54 0 0 0 41.397-17.148A58.54 58.54 0 0 0 480 421.455V166.182a58.543 58.543 0 0 0-58.545-58.546H166.182q-1.213.001-2.378.176a58.54 58.54 0 0 0-26.049 7.316l169.559 169.558c6.248 6.249 6.248 16.379 0 22.628s-16.379 6.248-22.628 0z" clip-rule="evenodd"></svg:path>`,
})
export class IonArrowUpLeftBoxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowUpRightBoxIcon],svg[ion-arrow-up-right-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M331.636 32H464a16 16 0 0 1 16 16v132.364c0 8.836-7.163 16-16 16s-16-7.164-16-16V86.627l-51.128 51.128a58.5 58.5 0 0 0-22.591-22.663L425.373 64h-93.737c-8.836 0-16-7.163-16-16s7.164-16 16-16m42.645 83.092a58.54 58.54 0 0 0-28.59-7.456H90.546A58.547 58.547 0 0 0 32 166.182v255.273A58.543 58.543 0 0 0 90.546 480h255.272a58.543 58.543 0 0 0 58.546-58.545V166.182q-.001-1.213-.176-2.378a58.54 58.54 0 0 0-7.316-26.049L227.314 307.314c-6.249 6.248-16.379 6.248-22.628 0s-6.248-16.379 0-22.628z" clip-rule="evenodd"></svg:path>`,
})
export class IonArrowUpRightBoxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAsteriskIcon],svg[ion-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 224l-186.828 7.487L401.688 64l-59.247-32L256 208 169.824 32l-59.496 32 108.5 167.487L32 224v64l185.537-10.066L113.65 448l55.969 32L256 304l86.381 176 55.949-32-103.867-170.066L480 288z" fill="currentColor"></svg:path>`,
})
export class IonAsteriskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAtIcon],svg[ion-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 254.27c-4.5 51-40.12 80-80.55 80s-67.34-35.82-63.45-80s37.12-80 77.55-80s70.33 36 66.45 80"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M319.77 415.77c-28.56 12-47.28 14.5-79.28 14.5c-97.2 0-169-78.8-160.49-176s94.31-176 191.51-176C381 78.27 441.19 150 432.73 246c-6.31 71.67-52.11 92.32-76.09 88.07c-22.56-4-41.18-24.42-37.74-63.5l8.48-96.25"></svg:path>`,
})
export class IonAtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAtCircleIcon],svg[ion-at-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M255.46 48.74c-114.84 0-208 93.11-208 208s93.12 208 208 208s208-93.12 208-208s-93.15-208-208-208M380.28 252c-2.85 32.63-16.79 49.7-28 58.26S327.61 322.58 316 320.5a41.6 41.6 0 0 1-26.82-17.19a62.06 62.06 0 0 1-44 17.57a51.66 51.66 0 0 1-38.55-16.83c-11.38-12.42-17-30.36-15.32-49.23c3-35 30.91-57.39 56.87-61.48c27.2-4.29 52.23 6.54 62.9 19.46l3.85 4.66l-6.34 50.38c-1.19 14.34 3.28 23.48 12.29 25.1c2.39.42 8.1-.13 14.37-4.93c6.72-5.15 15.14-16 17.1-38.47c2.35-26.54-4.35-49.19-19.25-65.49c-15.49-16.9-39.09-25.84-68.23-25.84c-54 0-101.81 44.43-106.58 99c-2.28 26.2 5.67 50.68 22.4 68.93c16.36 17.86 39.31 27.74 64.66 27.74c19 0 30.61-2.05 49.48-8.78a14 14 0 0 1 9.4 26.38c-21.82 7.77-36.68 10.4-58.88 10.4c-33.28 0-63.57-13.06-85.3-36.77C138 321 127.42 288.94 130.4 254.82c2.91-33.33 18.45-64.63 43.77-88.12s57.57-36.49 90.7-36.49c37.2 0 67.93 12.08 88.87 34.93c20.09 21.91 29.51 52.75 26.54 86.86"></svg:path><svg:path fill="currentColor" d="M252.57 221c-14.83 2.33-31.56 15.84-33.34 36.26c-1 11.06 2 21.22 8.07 27.87a23.65 23.65 0 0 0 17.91 7.75c20.31 0 34.73-14.94 36.75-38.06a14 14 0 0 1 .34-2.07l3.2-25.45a49.6 49.6 0 0 0-32.93-6.3"></svg:path>`,
})
export class IonAtCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAttachIcon],svg[ion-attach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M216.08 192v143.85a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 1 0 191 0V159.74"></svg:path>`,
})
export class IonAttachIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBackspaceIcon],svg[ion-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M403.13 96H156.87a44.9 44.9 0 0 0-33.68 15.27a16 16 0 0 0-1.91 2.7L32 247.75a16 16 0 0 0 0 16.5l89.15 133.57a16.2 16.2 0 0 0 2 2.88a44.9 44.9 0 0 0 33.7 15.3h246.28A44.92 44.92 0 0 0 448 371.13V140.87A44.92 44.92 0 0 0 403.13 96M348 311a16 16 0 1 1-22.63 22.62L271.67 280L218 333.65A16 16 0 0 1 195.35 311L249 257.33l-53.69-53.69A16 16 0 0 1 218 181l53.69 53.7l53.67-53.7A16 16 0 0 1 348 203.64l-53.7 53.69Z"></svg:path>`,
})
export class IonBackspaceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBagIcon],svg[ion-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M454.65 169.4A31.82 31.82 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55a69.48 69.48 0 0 0 21.52-50.2V192a31.75 31.75 0 0 0-9.35-22.6M176 144a80 80 0 0 1 160 0v16H176Z"></svg:path>`,
})
export class IonBagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBagAddIcon],svg[ion-bag-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M454.66 169.4A31.86 31.86 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55a69.48 69.48 0 0 0 21.52-50.2V192a31.78 31.78 0 0 0-9.34-22.6M320 336h-48v48a16 16 0 0 1-32 0v-48h-48a16 16 0 0 1 0-32h48v-48a16 16 0 0 1 32 0v48h48a16 16 0 0 1 0 32m16-176H176v-16a80 80 0 0 1 160 0Z"></svg:path>`,
})
export class IonBagAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBagCheckIcon],svg[ion-bag-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M454.65 169.4A31.82 31.82 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55a69.48 69.48 0 0 0 21.52-50.2V192a31.75 31.75 0 0 0-9.35-22.6M332.49 274l-89.6 112a16 16 0 0 1-12.23 6h-.26a16 16 0 0 1-12.16-5.6l-38.4-44.88a16 16 0 1 1 24.32-20.8L230 350.91L307.51 254a16 16 0 0 1 25 20ZM336 160H176v-16a80 80 0 0 1 160 0Z"></svg:path>`,
})
export class IonBagCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBagHandleIcon],svg[ion-bag-handle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M454.65 169.4A31.82 31.82 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55a69.48 69.48 0 0 0 21.52-50.2V192a31.75 31.75 0 0 0-9.35-22.6M176 144a80 80 0 0 1 160 0v16H176Zm192 96a112 112 0 0 1-224 0v-16a16 16 0 0 1 32 0v16a80 80 0 0 0 160 0v-16a16 16 0 0 1 32 0Z"></svg:path>`,
})
export class IonBagHandleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBagRemoveIcon],svg[ion-bag-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M454.66 169.4A31.86 31.86 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55a69.48 69.48 0 0 0 21.52-50.2V192a31.78 31.78 0 0 0-9.34-22.6M320 336H192a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32m16-176H176v-16a80 80 0 0 1 160 0Z"></svg:path>`,
})
export class IonBagRemoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBalloonIcon],svg[ion-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M391 307.27c32.75-46.35 46.59-101.63 39-155.68A175.82 175.82 0 0 0 231.38 2c-96 13.49-163.14 102.58-149.65 198.58c7.57 53.89 36.12 103.16 80.37 138.74c24.58 19.68 52.31 33.5 78.62 39.68a8 8 0 0 1 6 9.22l-4.87 26.38a16.3 16.3 0 0 0 1.48 10.57a16 16 0 0 0 14.2 8.61a15 15 0 0 0 2.23-.16l17.81-2.5a2 2 0 0 1 2.09 1.14c16.72 36.31 45.46 63.85 82.15 78.36a16 16 0 0 0 21-9.65c2.83-8.18-1.64-17.07-9.68-20.28a118.57 118.57 0 0 1-59.3-51.88a2 2 0 0 1 1.45-3l7.4-1a16.54 16.54 0 0 0 10.08-5.23a16 16 0 0 0 2.39-17.8l-12.06-24.23a8 8 0 0 1 3.26-10.55c23.59-13.17 46.45-34 64.65-59.73m-154.9 16.78a16 16 0 0 1-5.88-1.12c-41.26-16.32-76.3-52.7-91.45-94.94a16 16 0 1 1 30.12-10.8c14.5 40.44 47.27 65.77 73.1 76a16 16 0 0 1-5.89 30.88Z"></svg:path>`,
})
export class IonBalloonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBanIcon],svg[ion-ban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="200" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="48"></svg:circle><svg:path fill="currentColor" stroke="currentColor" stroke-miterlimit="10" stroke-width="48" d="m114.58 114.58l282.84 282.84"></svg:path>`,
})
export class IonBanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBandageIcon],svg[ion-bandage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M275.8 157a16 16 0 0 0-22.63 0l-93.34 93.34a16 16 0 0 0 0 22.63l79.2 79.2a16 16 0 0 0 22.63 0L355 258.83a16 16 0 0 0 0-22.63ZM137.21 295.6a47.8 47.8 0 0 1-9.43-13.38L69 341a72.2 72.2 0 0 0 0 102a72.37 72.37 0 0 0 102 0l58.77-58.76a47.8 47.8 0 0 1-13.38-9.43ZM392 48a71.55 71.55 0 0 0-51 21l-55.92 55.91a48 48 0 0 1 13.36 9.45l79.19 79.19a48 48 0 0 1 9.45 13.36L443 171a72 72 0 0 0-51-123"></svg:path><svg:path fill="currentColor" d="M275.8 157a16 16 0 0 0-22.63 0l-93.34 93.34a16 16 0 0 0 0 22.63l79.2 79.2a16 16 0 0 0 22.63 0L355 258.83a16 16 0 0 0 0-22.63Zm-56.49 110.31a16 16 0 1 1 0-22.62a16 16 0 0 1 0 22.62m48 48a16 16 0 1 1 0-22.62a16 16 0 0 1 0 22.62m0-96a16 16 0 1 1 0-22.62a16 16 0 0 1 0 22.62m48 48a16 16 0 1 1 0-22.62a16 16 0 0 1 0 22.62m150.3-220.92a104.38 104.38 0 0 0-147.25 0l-69.76 69.89a4 4 0 0 0 4.2 6.58a35.7 35.7 0 0 1 11.69-2.54a47.7 47.7 0 0 1 33.94 14.06l79.19 79.19a47.7 47.7 0 0 1 14.06 33.94a35.7 35.7 0 0 1-2.54 11.69a4 4 0 0 0 6.58 4.2l69.89-69.76a104.38 104.38 0 0 0 0-147.25"></svg:path><svg:path fill="currentColor" d="M254.34 386.83a47.9 47.9 0 0 1-33.94-14l-79.19-79.23a47.8 47.8 0 0 1-9.43-13.38c-4.59-9.7-1.39-25 2.48-36.9a4 4 0 0 0-6.64-4l-77.23 77.04a104.12 104.12 0 0 0 147.25 147.25l72.75-72.88a4 4 0 0 0-4.21-6.58c-4.18 1.58-8.4 2.68-11.84 2.68"></svg:path>`,
})
export class IonBandageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBarChartIcon],svg[ion-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 496H48a32 32 0 0 1-32-32V32a16 16 0 0 1 32 0v432h432a16 16 0 0 1 0 32"></svg:path><svg:path fill="currentColor" d="M156 432h-40a36 36 0 0 1-36-36V244a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v152a36 36 0 0 1-36 36m144 0h-40a36 36 0 0 1-36-36V196a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v200a36 36 0 0 1-36 36m143.64 0h-40a36 36 0 0 1-36-36V132a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v264a36 36 0 0 1-36 36"></svg:path>`,
})
export class IonBarChartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBarbellIcon],svg[ion-barbell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M467 176a29.94 29.94 0 0 0-25.32 12.5a2 2 0 0 1-3.64-1.14v-36.65c0-20.75-16.34-38.21-37.08-38.7A38 38 0 0 0 362 150v82a2 2 0 0 1-2 2H152a2 2 0 0 1-2-2v-81.29c0-20.75-16.34-38.21-37.08-38.7A38 38 0 0 0 74 150v37.38a2 2 0 0 1-3.64 1.14A29.94 29.94 0 0 0 45 176c-16.3.51-29 14.31-29 30.62v98.72c0 16.31 12.74 30.11 29 30.62a29.94 29.94 0 0 0 25.32-12.5a2 2 0 0 1 3.68 1.16v36.67C74 382 90.34 399.5 111.08 400A38 38 0 0 0 150 362v-82a2 2 0 0 1 2-2h208a2 2 0 0 1 2 2v81.29c0 20.75 16.34 38.21 37.08 38.7A38 38 0 0 0 438 362v-37.38a2 2 0 0 1 3.64-1.14A29.94 29.94 0 0 0 467 336c16.3-.51 29-14.31 29-30.62v-98.74c0-16.31-12.74-30.11-29-30.64"></svg:path>`,
})
export class IonBarbellIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBarcodeIcon],svg[ion-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M419.13 96H419l-35.05.33L128 96h-.16l-36.74.33C66.93 96.38 48 116.07 48 141.2v230.27c0 25.15 19 44.86 43.2 44.86h.15l36.71-.33l255.92.33h.17l35.07-.33A44.91 44.91 0 0 0 464 371.13V140.87A44.92 44.92 0 0 0 419.13 96M144 320a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0Zm64 32a16 16 0 0 1-32 0V160a16 16 0 0 1 32 0Zm64-16a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0Zm64 16a16 16 0 0 1-32 0V160a16 16 0 0 1 32 0Zm64-32a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0Z"></svg:path>`,
})
export class IonBarcodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBaseballIcon],svg[ion-baseball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m444 295.67l-.47-26.07a205.4 205.4 0 0 1-39.27-4.73l-5 17.35a14 14 0 1 1-26.88-7.81l5-17.38a206.5 206.5 0 0 1-36.05-17.35l-10.44 14.77a14 14 0 0 1-22.87-16.16l10.41-14.73a204.8 204.8 0 0 1-30-30L273.71 204a14 14 0 0 1-16.16-22.87l14.74-10.42a205.3 205.3 0 0 1-17.38-36.06l-17.32 5a14 14 0 1 1-7.81-26.89l17.3-5a206 206 0 0 1-4.43-32.59q-.17-3-.24-6l-18.22-.33a14 14 0 0 1-13.74-14A208 208 0 0 0 55 202.42a16 16 0 0 1 15 15.66l.44 24.43c1.58.05 3.16.11 4.73.2a206 206 0 0 1 32.59 4.43l5-17.3a14 14 0 0 1 26.89 7.81l-5 17.32a205 205 0 0 1 36 17.38L181 257.61a14 14 0 0 1 22.87 16.16l-10.39 14.73a206 206 0 0 1 15.79 14.23a204 204 0 0 1 14.23 15.79l14.73-10.41A14 14 0 0 1 254.39 331l-14.76 10.43A207 207 0 0 1 257 377.47l17.38-5.05a14 14 0 0 1 7.81 26.89l-17.35 5a206 206 0 0 1 4.7 38.28l18.27.33a16 16 0 0 1 15.71 16.28a12 12 0 0 1-.08 1.19a208 208 0 0 0 153.39-151.03A14 14 0 0 1 444 295.67"></svg:path><svg:path fill="currentColor" d="M301.49 56.2A14 14 0 0 1 287.5 70h-.25l-16.81-.3c.05 1.31.1 2.62.17 3.93a179 179 0 0 0 3.44 26.31l16.29-4.74a14 14 0 0 1 7.81 26.8l-16.27 4.73a178 178 0 0 0 13.33 27.69l13.84-9.78a14 14 0 1 1 16.16 22.87l-13.86 9.79q5.25 6.33 11.12 12.19c3.9 3.91 8 7.6 12.2 11.1l9.78-13.84A14 14 0 1 1 367.32 203l-9.76 13.8a179 179 0 0 0 27.68 13.33l4.76-16.28a14 14 0 0 1 26.89 7.81l-4.73 16.26a177.7 177.7 0 0 0 30.95 3.65l-.16-9a14 14 0 0 1 13.75-14.24h.25a14.7 14.7 0 0 1 2.59.25a208 208 0 0 0-158-163.51c-.06.4-.04.76-.05 1.13m-93.05 401.35a16 16 0 0 1 16.28-15.71l16.76.29a178.5 178.5 0 0 0-3.62-29.95l-16.26 4.72a14 14 0 1 1-7.81-26.9l16.21-4.7a178 178 0 0 0-13.33-27.68l-13.8 9.76a14 14 0 1 1-16.16-22.87l13.84-9.78c-3.5-4.22-7.19-8.3-11.1-12.2s-8-7.62-12.19-11.12l-9.79 13.86a14 14 0 1 1-22.87-16.16l9.78-13.84a177 177 0 0 0-27.69-13.33L122 298.21a14 14 0 1 1-26.9-7.81l4.73-16.29a177 177 0 0 0-26.31-3.44c-.89-.05-1.79-.08-2.68-.12l.16 10.59a16 16 0 0 1-15.71 16.28H55a16 16 0 0 1-3.94-.51a208 208 0 0 0 157.65 163.87a15.7 15.7 0 0 1-.27-3.23"></svg:path>`,
})
export class IonBaseballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBasketIcon],svg[ion-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M424.11 192H360L268.8 70.4a16 16 0 0 0-25.6 0L152 192H87.89a32.57 32.57 0 0 0-32.62 32.44a30.3 30.3 0 0 0 1.31 9l46.27 163.14a50.72 50.72 0 0 0 48.84 36.91h208.62a51.21 51.21 0 0 0 49-36.86l46.33-163.36a15.6 15.6 0 0 0 .46-2.36l.53-4.93a13 13 0 0 0 .09-1.55A32.57 32.57 0 0 0 424.11 192M256 106.67L320 192H192Zm0 245a37.7 37.7 0 1 1 37.88-37.7A37.87 37.87 0 0 1 256 351.63Z"></svg:path>`,
})
export class IonBasketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBasketballIcon],svg[ion-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 233.37l34.45-34.45a207.08 207.08 0 0 1-50.12-135.25c0-5 .19-10.05.54-15A207.1 207.1 0 0 0 120.67 98Zm57.14-57.14L391.33 98A207.07 207.07 0 0 0 273 48.8c-.41 4.9-.64 9.86-.64 14.87a175.25 175.25 0 0 0 40.78 112.56m22.63 22.63a175.25 175.25 0 0 0 112.56 40.81c5 0 10-.23 14.87-.64A207.07 207.07 0 0 0 414 120.67ZM176.23 313.14a175.23 175.23 0 0 0-112.56-40.81q-7.52 0-14.87.64A207.07 207.07 0 0 0 98 391.33ZM256 278.63l-34.45 34.45a207.08 207.08 0 0 1 50.12 135.25c0 5-.19 10.05-.54 15A207.06 207.06 0 0 0 391.33 414Zm192.33-6.96a207.08 207.08 0 0 1-135.25-50.12L278.63 256L414 391.33a207.1 207.1 0 0 0 49.39-120.2c-5.01.35-10.02.54-15.06.54M233.37 256L98 120.67a207.06 207.06 0 0 0-49.39 120.2c5-.35 10-.54 15-.54a207.08 207.08 0 0 1 135.25 50.12Zm-112.7 158A207.07 207.07 0 0 0 239 463.2q.63-7.35.64-14.87a175.23 175.23 0 0 0-40.81-112.56Z"></svg:path>`,
})
export class IonBasketballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBatteryChargingIcon],svg[ion-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 322.3V189.7A29.74 29.74 0 0 1 77.7 160h137.44l24.4-32H77.7A61.77 61.77 0 0 0 16 189.7v132.6A61.77 61.77 0 0 0 77.7 384h96.85a22.6 22.6 0 0 1 .26-7.32l.15-.75l.21-.73l6.5-23.2H77.7A29.74 29.74 0 0 1 48 322.3M386.3 128h-98.64a22.7 22.7 0 0 1-.27 7.2l-.15.74l-.21.73l-6.54 23.33H386.3a29.74 29.74 0 0 1 29.7 29.7v132.6a29.74 29.74 0 0 1-29.7 29.7H247l-24.42 32H386.3a61.77 61.77 0 0 0 61.7-61.7V189.7a61.77 61.77 0 0 0-61.7-61.7"></svg:path><svg:path fill="currentColor" d="M162.65 294.16a24.37 24.37 0 0 1-21.56-13a25 25 0 0 1 1.42-25.83l.31-.46l.33-.44L197.62 183H89.69a20 20 0 0 0-20 20v106a20 20 0 0 0 20 20h98.42l9.78-34.86Z"></svg:path><svg:path fill="currentColor" d="m276.07 280.89l27.07-35.49a5.2 5.2 0 0 0 .77-1.91a5 5 0 0 0 .08-.66a5 5 0 0 0-.08-1.29a5.1 5.1 0 0 0-.68-1.75a4.8 4.8 0 0 0-.78-.95a3.5 3.5 0 0 0-.48-.38a4 4 0 0 0-1.11-.55a4.3 4.3 0 0 0-1.31-.2h-61.62l12.12-43.21l3.23-11.5l6.21-22.16l.51-1.84l7.79-27.76a3.5 3.5 0 0 0 .05-.55v-.16c0-.05 0-.26-.05-.38s0-.09 0-.14a2.2 2.2 0 0 0-.17-.45a4 4 0 0 0-.26-.39l-.09-.1a3 3 0 0 0-.25-.23l-.1-.08a3 3 0 0 0-.39-.24a2 2 0 0 0-.41-.14h-.59a2.3 2.3 0 0 0-.45 0a2 2 0 0 0-.42.15l-.13.07l-.3.21l-.11.1a2.4 2.4 0 0 0-.36.41l-18 23.63l-13.14 17.22l-9.85 12.83l-63.71 83.55a6 6 0 0 0-.44.8a4.8 4.8 0 0 0-.35 1.09a4.7 4.7 0 0 0-.08 1.29a4.86 4.86 0 0 0 2 3.71a5 5 0 0 0 .54.31a4.3 4.3 0 0 0 1.89.43h61.62L194.42 380.6a4 4 0 0 0 0 .56v.15a2.3 2.3 0 0 0 .06.38a.6.6 0 0 0 0 .14a2.2 2.2 0 0 0 .17.45a4 4 0 0 0 .26.38l.09.1l.25.24a.4.4 0 0 1 .1.08a2.2 2.2 0 0 0 .39.23a3 3 0 0 0 .41.14h.13a2 2 0 0 0 .33 0h.13a2.3 2.3 0 0 0 .45-.06a2 2 0 0 0 .41-.16l.13-.07l.3-.21l.11-.09a2.4 2.4 0 0 0 .36-.41L221.82 352l17.53-23Z"></svg:path><svg:path fill="currentColor" d="m319.5 256.93l-.46.6L264.51 329h109.8a20 20 0 0 0 20-20V203a20 20 0 0 0-20-20H274.05l-9.74 34.73h35.24A24.35 24.35 0 0 1 321 230.5a25.21 25.21 0 0 1-1 25.79ZM480 202.67a16 16 0 0 0-16 16v74.66a16 16 0 0 0 32 0v-74.66a16 16 0 0 0-16-16"></svg:path>`,
})
export class IonBatteryChargingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBatteryDeadIcon],svg[ion-battery-dead-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="400" height="224" x="31" y="144" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" rx="45.7" ry="45.7"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M479 218.67v74.66"></svg:path>`,
})
export class IonBatteryDeadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBatteryEmptyIcon],svg[ion-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M469.9 192H433v-54c0-5.5-4.3-10-9.9-10h-381c-5.6 0-10.1 4.5-10.1 10v236c0 5.5 4.5 10 10.1 10h381.1c5.5 0 9.9-4.5 9.9-10v-54H470c5.6 0 10.1-4.5 10.1-10V202c-.1-5.5-4.6-10-10.2-10zM448 288h-47v64H64V160h337v64h47v64z" fill="currentColor"></svg:path>`,
})
export class IonBatteryEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBatteryFullIcon],svg[ion-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="400" height="224" x="32" y="144" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" rx="45.7" ry="45.7"></svg:rect><svg:rect width="292.63" height="114.14" x="85.69" y="198.93" fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M480 218.67v74.66"></svg:path>`,
})
export class IonBatteryFullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBatteryHalfIcon],svg[ion-battery-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="400" height="224" x="32" y="144" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" rx="45.7" ry="45.7"></svg:rect><svg:rect width="154.31" height="114.13" x="85.69" y="198.93" fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M480 218.67v74.66"></svg:path>`,
})
export class IonBatteryHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBatteryLowIcon],svg[ion-battery-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M42.1 384h381.1c5.5 0 9.9-4.5 9.9-10v-54H470c5.6 0 10.1-4.5 10.1-10V202c0-5.5-4.5-10-10.1-10h-37v-54c0-5.5-4.3-10-9.9-10h-381c-5.6 0-10.1 4.5-10.1 10v236c0 5.5 4.5 10 10.1 10zM401 160v64h47v64h-47v64H224l-32-192h209z" fill="currentColor"></svg:path>`,
})
export class IonBatteryLowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBeakerIcon],svg[ion-beaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M444 32H128c-19.38 0-45.9 4.34-64.11 24.77C52.17 69.92 48 85.66 48 96a16 16 0 0 0 13.8 15.85C91.7 116 96 117.79 96 136v264a80.07 80.07 0 0 0 80 80h192a80.11 80.11 0 0 0 80-80V96c0-12.55 7.46-27.25 10-31.36l.1-.14c.22-.35.5-.72.78-1.1c2-2.79 5.09-7 5.09-12.95C464 39.79 454.89 32 444 32M84.11 83.08c5.24-8.87 17.17-19 44.29-19h294.43C419.3 72.87 416 84.27 416 96v64H128v-24c0-37.32-21.35-48.14-43.89-52.92"></svg:path>`,
})
export class IonBeakerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBedIcon],svg[ion-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 230.7a79.4 79.4 0 0 0-32-6.7H112a79.5 79.5 0 0 0-32 6.69A80.09 80.09 0 0 0 32 304v112a16 16 0 0 0 32 0v-8a8.1 8.1 0 0 1 8-8h368a8.1 8.1 0 0 1 8 8v8a16 16 0 0 0 32 0V304a80.09 80.09 0 0 0-48-73.3M376 80H136a56 56 0 0 0-56 56v72a4 4 0 0 0 5.11 3.84A95.5 95.5 0 0 1 112 208h4.23a4 4 0 0 0 4-3.55A32 32 0 0 1 152 176h56a32 32 0 0 1 31.8 28.45a4 4 0 0 0 4 3.55h24.46a4 4 0 0 0 4-3.55A32 32 0 0 1 304 176h56a32 32 0 0 1 31.8 28.45a4 4 0 0 0 4 3.55h4.2a95.5 95.5 0 0 1 26.89 3.85A4 4 0 0 0 432 208v-72a56 56 0 0 0-56-56"></svg:path>`,
})
export class IonBedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBeerIcon],svg[ion-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M392 208h-24v-5.74A63.93 63.93 0 0 0 321.65 96a111 111 0 0 0-27.59-47.29A108.62 108.62 0 0 0 216 16c-29.91 0-57.78 12.28-79 34.68a56 56 0 0 0-67.51 77.54A63.91 63.91 0 0 0 80 231.39V440a56.06 56.06 0 0 0 56 56h176a56.06 56.06 0 0 0 56-56v-8h24a72.08 72.08 0 0 0 72-72v-80a72.08 72.08 0 0 0-72-72M176 416a16 16 0 0 1-32 0V256a16 16 0 0 1 32 0Zm64 0a16 16 0 0 1-32 0V256a16 16 0 0 1 32 0Zm64 0a16 16 0 0 1-32 0V256a16 16 0 0 1 32 0Zm16-224c-8.33 0-20.55-5.18-26.69-11.31A16 16 0 0 0 282 176H160a16 16 0 0 0-15 10.53c-6.83 18.68-23.6 21.47-33 21.47a32 32 0 0 1 0-64c.09 0 9.12.34 16.4 5.8a16 16 0 1 0 19.2-25.6A63.7 63.7 0 0 0 112 112a63.6 63.6 0 0 0-14 1.57A24 24 0 0 1 120 80a23.78 23.78 0 0 1 19.38 9.84a51.4 51.4 0 0 1 4.71 7.9A16 16 0 0 0 176 96c0-6.77-3.61-15.17-10.76-25c-.46-.63-1-1.25-1.45-1.86C178.39 55.44 196.64 48 216 48a76.86 76.86 0 0 1 55.23 23.18A80.2 80.2 0 0 1 292.61 142a16 16 0 0 0 12.73 18.71a16.3 16.3 0 0 0 3 .28a16 16 0 0 0 15.7-13a112 112 0 0 0 1.96-19.42a32 32 0 0 1-6 63.43m112 168a40 40 0 0 1-40 40h-24V240h24a40 40 0 0 1 40 40Z"></svg:path>`,
})
export class IonBeerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBicycleIcon],svg[ion-bicycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M388 448a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m0-152a60 60 0 1 0 60 60a60.07 60.07 0 0 0-60-60M124 448a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m0-152a60 60 0 1 0 60 60a60.07 60.07 0 0 0-60-60m196-168a31.89 31.89 0 0 0 32-32.1A31.55 31.55 0 0 0 320.2 64a32 32 0 1 0-.2 64"></svg:path><svg:path fill="currentColor" d="M367.55 192h-43.76a4 4 0 0 1-3.51-2.08l-31.74-58.17a31 31 0 0 0-49.38-7.75l-69.86 70.4a32.56 32.56 0 0 0-9.3 22.4c0 17.4 12.6 23.6 18.5 27.1c28.5 16.42 48.57 28.43 59.58 35.1a4 4 0 0 1 1.92 3.41v69.12c0 8.61 6.62 16 15.23 16.43A16 16 0 0 0 272 352v-86a16 16 0 0 0-6.66-13l-37-26.61a4 4 0 0 1-.58-6l42-44.79a4 4 0 0 1 6.42.79L298 215.77a16 16 0 0 0 14 8.23h56a16 16 0 0 0 16-16.77c-.42-8.61-7.84-15.23-16.45-15.23"></svg:path>`,
})
export class IonBicycleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBinocularsIcon],svg[ion-binoculars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M114.917 82.831C126.817 70.758 142.711 64 164 64c18.436 0 33.934 7.239 44.611 19.607C219.057 95.707 224 111.638 224 128v34.809c8.45-1.583 19.147-2.809 32-2.809s23.55 1.226 32 2.809V128c0-16.362 4.943-32.293 15.389-44.393C314.066 71.239 329.564 64 348 64c21.289 0 37.183 6.758 49.083 18.831c11.072 11.233 17.546 26.036 22.792 39.275l.636 1.672l68.207 181.915s2.59 7.307 2.915 8.392A104 104 0 0 1 496 344c0 57.438-46.562 104-104 104s-104-46.562-104-104v-60.461l-.04-.01C281.089 281.825 270.382 280 256 280s-25.089 1.825-31.96 3.529l-.04.01V344c0 57.438-46.562 104-104 104S16 401.438 16 344c0-10.399 1.526-20.441 4.367-29.916q.227-1.04.602-2.068a155 155 0 0 1 2.314-6.324l68.842-183.586c5.246-13.239 11.721-28.042 22.792-39.275M320 343.905c.051-39.721 32.267-71.905 72-71.905c30.372 0 56.352 18.806 66.93 45.408l1.358 3.71A71.9 71.9 0 0 1 464 344c0 39.764-32.236 72-72 72c-39.751 0-71.978-32.214-72-71.96V344m-200-72c-30.371 0-56.35 18.805-66.93 45.406l-1.358 3.714A71.9 71.9 0 0 0 48 344c0 39.764 32.236 72 72 72s72-32.236 72-72s-32.236-72-72-72" clip-rule="evenodd"></svg:path>`,
})
export class IonBinocularsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBluetoothIcon],svg[ion-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M388 160.77a20 20 0 0 0-5.85-14.91l-112-112A20 20 0 0 0 236 48v164.52l-79-67.71a20 20 0 0 0-26 30.38L225.27 256L131 336.81a20 20 0 1 0 26 30.38l79-67.71V464a20 20 0 0 0 34.14 14.14l112-112a20 20 0 0 0-1.14-29.33L286.73 256L381 175.19a20 20 0 0 0 7-14.42m-49.42 192.36L276 415.72V299.49ZM276 212.52V96.28l62.59 62.59Z"></svg:path>`,
})
export class IonBluetoothIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBoatIcon],svg[ion-boat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 473.14a6.83 6.83 0 0 0-3.57-6c-27.07-14.55-51.76-36.82-62.62-48a10.05 10.05 0 0 0-12.72-1.51c-50.33 32.42-111.61 32.44-161.95.05a10.09 10.09 0 0 0-12.82 1.56c-10.77 11.28-35.19 33.3-62.43 47.75a7.11 7.11 0 0 0-3.89 5.73a6.73 6.73 0 0 0 7.92 7.15c20.85-4.18 41-13.68 60.2-23.83a8.71 8.71 0 0 1 8-.06a185.14 185.14 0 0 0 167.81 0a8.82 8.82 0 0 1 8.09.06c19.1 10 39.22 19.59 60 23.8a6.73 6.73 0 0 0 8-6.71Zm60.71-226.23c-3.49-8.39-10.9-14.89-20.9-18.35L432 219.08V136a64 64 0 0 0-64-64h-32v-8a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v8h-32a64 64 0 0 0-64 64v83.15l-23.58 9.39c-9.94 3.3-17.63 10-21.15 18.44c-2.45 5.89-5.25 15-1.3 26.46l.1.3l46.66 119.44A23.33 23.33 0 0 0 102.58 408c.5 0 1 0 1.53-.05c31.32-2 56-17.27 72.6-31.61C200.42 396.81 228.31 408 256 408s55.43-11.2 79.14-31.7c16.59 14.36 41.3 29.67 72.61 31.65a23.36 23.36 0 0 0 23.37-14.74l46.65-119c3.28-8.09 2.9-17.76-1.06-27.3M269 154.21l-1.14-.4a39.53 39.53 0 0 0-23.73 0l-.58.18l-126.07 50.23a4 4 0 0 1-5.48-3.72V136a32 32 0 0 1 32-32h224a32 32 0 0 1 32 32v64.44a4 4 0 0 1-5.48 3.72Z"></svg:path>`,
})
export class IonBoatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBodyIcon],svg[ion-body-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="56" r="56" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M437 128H75a27 27 0 0 0 0 54h101.88c6.91 0 15 3.09 19.58 15c5.35 13.83 2.73 40.54-.57 61.23l-4.32 24.45a.42.42 0 0 1-.12.35l-34.6 196.81A27.43 27.43 0 0 0 179 511.58a27.06 27.06 0 0 0 31.42-22.29l23.91-136.8S242 320 256 320c14.23 0 21.74 32.49 21.74 32.49l23.91 136.92a27.24 27.24 0 1 0 53.62-9.6L320.66 283a.45.45 0 0 0-.11-.35l-4.33-24.45c-3.3-20.69-5.92-47.4-.57-61.23c4.56-11.88 12.91-15 19.28-15H437a27 27 0 0 0 0-54Z"></svg:path>`,
})
export class IonBodyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBonfireIcon],svg[ion-bonfire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M273.38 368.37c-.81-9.23-8.86-16.44-18.55-16.44a18.63 18.63 0 0 0-18.2 14.07l-18.2 88.36a35.6 35.6 0 0 0-.93 7.87c0 19.93 16.68 33.77 37.33 33.77s37.34-13.84 37.34-33.77a36.2 36.2 0 0 0-1.29-9.45Zm137.67 39.52a42.7 42.7 0 0 0-5.95-4.36L335.57 355c-6.77-4.24-14-4.13-19.25 1a13.52 13.52 0 0 0-2 17.19l52.5 69a38 38 0 0 0 4 4.69c9.1 10.16 29.28 10.72 40.37 0c10.94-10.96 10.81-30.39-.14-38.99m52.25-71.96h-70.42c-4.55 0-8.88 3.35-8.88 8.15s2.95 7.85 6.92 9.16l66.43 20.55C467 376 480 367.44 480 356.71c0-13.63-7.6-20.78-16.7-20.78m-335.08 8.15c0-4.95-4.55-8.15-9.45-8.15H48.35c-8.87 0-16.35 9.58-16.35 20.31S44.62 376 54.3 373.79l67.43-20.55c4.39-1.31 6.49-4.24 6.49-9.16m48.33 10.97L107 403.41a32.3 32.3 0 0 0-6 4.34a26.33 26.33 0 0 0 0 38.56a29.41 29.41 0 0 0 40.36 0a31 31 0 0 0 4-4.68L197.9 373c3.5-5.57 2.92-12.48-2-17a15 15 0 0 0-19.35-.95m116.91-112.66c10-5.42 19.45-10.54 28.31-16.16c42.46-26.92 62.23-59 62.23-101c0-64.66-56.07-104.4-108.82-109c-6.49-.57-15-.42-19.91 3.88s-5.88 12.56-6.15 19.1c-1.38 33.61-28.38 59-57 85.86c-28 26.3-56.93 53.49-62.71 91c-8.41 54.68 21.74 86.71 40.46 100.93a31.88 31.88 0 0 0 19.3 6.51a32.3 32.3 0 0 0 7.41-.87a31.75 31.75 0 0 0 21.27-16.95c14.91-30.39 45.77-47.12 75.61-63.3"></svg:path><svg:path fill="currentColor" d="M139.82 156.57c12.22-15.76 27-29.68 41.37-43.15c19.92-18.72 37.81-35.58 46.5-53.86c-12.24-7.37-27.36-11.36-46.51-11.36c-17.79 0-20.39 5.18-20.39 19.06c0 12.56-6.53 20.54-14.34 30.65C137.8 109.1 128 121.77 128 140.84c0 10.23 1.29 18.77 4.2 26.37q3.5-5.32 7.62-10.64m190.52 83.17c-9.33 5.92-19 11.16-29.25 16.71c-28.91 15.68-56.21 30.48-68.88 56.28a63 63 0 0 1-1.88 3.61a8 8 0 0 0 3.89 11.3c12.31 5.1 25.13 8.27 38.91 8.27a111.42 111.42 0 0 0 78.24-31.37A107.45 107.45 0 0 0 384 226.85a86.6 86.6 0 0 0-1.33-15a8 8 0 0 0-13.8-4c-10.18 11.47-22.93 22-38.53 31.89"></svg:path>`,
})
export class IonBonfireIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBookIcon],svg[ion-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.9 15.9 0 0 0-5.46-12A143 143 0 0 0 202.24 74m279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.3 143.3 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61"></svg:path>`,
})
export class IonBookIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBookmarkIcon],svg[ion-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 480a16 16 0 0 1-10.63-4L256 357.41L122.63 476A16 16 0 0 1 96 464V96a64.07 64.07 0 0 1 64-64h192a64.07 64.07 0 0 1 64 64v368a16 16 0 0 1-16 16"></svg:path>`,
})
export class IonBookmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBookmarksIcon],svg[ion-bookmarks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 0H176a64.11 64.11 0 0 0-62 48h228a74 74 0 0 1 74 74v304.89l22 17.6a16 16 0 0 0 19.34.5a16.41 16.41 0 0 0 6.66-13.42V64a64 64 0 0 0-64-64"></svg:path><svg:path fill="currentColor" d="M320 80H112a64 64 0 0 0-64 64v351.62A16.36 16.36 0 0 0 54.6 509a16 16 0 0 0 19.71-.71L216 388.92l141.69 119.32a16 16 0 0 0 19.6.79a16.4 16.4 0 0 0 6.71-13.44V144a64 64 0 0 0-64-64"></svg:path>`,
})
export class IonBookmarksIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBowlingBallIcon],svg[ion-bowling-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M288 224a24 24 0 1 1 24-24a24 24 0 0 1-24 24m8-72a24 24 0 1 1 24-24a24 24 0 0 1-24 24m64 40a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class IonBowlingBallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBowtieIcon],svg[ion-bowtie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M223.955 212.011s8.054-4.679 19.985-7.011c21.318-4.166 39.472-5.5 47.466 8.5 9.777 17.124 18.402 53.417 16.488 85.5-1 16.75-4.622 22.125-4.622 22.125s-15.333 9.525-47.341 6.875c-34.725-2.875-39.971-15.004-39.971-15.004s4.497-11.305 7.995-42.499c3.497-31.194 0-58.486 0-58.486z" fill="currentColor"></svg:path><svg:path d="M183.984 285c12.546-3.323 23.03-7.189 27.659-8.985.693-4.707 1.28-9.718 1.694-15.015.271-3.461.465-6.754.602-9.896-6.854-2.333-13.534-4.851-28.769-10.104-38.66-13.333-57.146-17-57.146-17s14.24-2.5 42.219 3c19.986 3.929 34.392 9.5 43.947 14.333.771-15.999-2.477-32.583-2.477-32.583C189.729 168.5 119.53 112 84.368 112 57.888 112 32 180.5 32 256s23.03 144 51.51 144c33.356 0 116.463-80 116.463-80s5.738-12.578 9.879-33.572c-18.788 5.198-63.84 8.572-63.84 8.572s20.984-5.5 37.972-10z" fill="currentColor"></svg:path><svg:path d="M427.632 112c-36.37 0-102.363 56.5-124.348 96.75l-.761 1.375s1.389 2.527 1.873 3.375c3.424 5.996 6.704 14.348 9.442 24.041 8.115-2.805 23.599-8.164 37.523-13.041 19.985-7 34.975-9.5 34.975-9.5s-52.982 23.741-69.605 34.264c2.169 10.159 3.693 21.199 4.218 32.242 5.423 2.216 16.551 6.475 29.914 9.994 18.986 5 40.398 11.5 40.398 11.5s-54.202-5.27-70.114-12.522a154.92 154.92 0 0 1-.263 8.522c-.997 16.719-4.608 22.104-4.622 22.124 7.621 10.543 75 78.876 112.228 78.876 28.48 0 51.51-68.5 51.51-144s-25.888-144-52.368-144z" fill="currentColor"></svg:path>`,
})
export class IonBowtieIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBriefcaseIcon],svg[ion-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M336 80H176a16 16 0 0 0-16 16v16h192V96a16 16 0 0 0-16-16"></svg:path><svg:path fill="currentColor" d="M496 176a64.07 64.07 0 0 0-64-64h-48V96a48.05 48.05 0 0 0-48-48H176a48.05 48.05 0 0 0-48 48v16H80a64.07 64.07 0 0 0-64 64v48h480Zm-144-64H160V96a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Zm-16 152a24 24 0 0 1-24 24H200a24 24 0 0 1-24-24v-4a4 4 0 0 0-4-4H16v144a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64V256H340a4 4 0 0 0-4 4Z"></svg:path>`,
})
export class IonBriefcaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBrowsersIcon],svg[ion-browsers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 48H96a64 64 0 0 0-64 64v288a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V112a64 64 0 0 0-64-64m24 96H72a8 8 0 0 1-8-8v-24a32.09 32.09 0 0 1 32-32h320a32.09 32.09 0 0 1 32 32v24a8 8 0 0 1-8 8"></svg:path>`,
})
export class IonBrowsersIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBrushIcon],svg[ion-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233.15 360.11a15.7 15.7 0 0 1-4.92-.77a16 16 0 0 1-10.92-13c-2.15-15-19.95-32.46-36.62-35.85a16 16 0 0 1-8.69-26.33l211.09-235.1c.19-.22.39-.43.59-.63a56.57 56.57 0 0 1 79.89 0a56.51 56.51 0 0 1 .11 79.78l-219 227a16 16 0 0 1-11.53 4.9m-113.26 120c-32.14 0-65.45-16.89-84.85-43a16 16 0 0 1 12.85-25.54c5.34 0 20-4.87 20-20.57c0-39.07 31.4-70.86 70-70.86s70 31.79 70 70.86c0 49.12-39.48 89.11-88 89.11"></svg:path>`,
})
export class IonBrushIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBugIcon],svg[ion-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M463.55 272.13H400v-48.2q0-4.32-.27-8.47c29.57-27.88 32.25-64.63 32.27-103c0-8.61-6.64-16-15.25-16.41A16 16 0 0 0 400 112c0 28-1.86 48.15-9.9 63.84c-19.22-41.15-65.78-63.91-134.1-63.91c-39.8 0-74.19 9.13-99.43 26.39c-14.9 10.19-26.2 22.91-33.7 37.72C114 160.65 112 141 112 112.46c0-8.61-6.6-16-15.2-16.44A16 16 0 0 0 80 112c0 37.63 2.61 73.73 32.44 101.63q-.43 5.06-.44 10.3v48.2H48.45c-8.61 0-16 6.62-16.43 15.23a16 16 0 0 0 16 16.77h64V320a143.3 143.3 0 0 0 10.39 53.69C96.74 396.64 80.18 422 80 463.34c0 8.74 6.62 16.3 15.36 16.65A16 16 0 0 0 112 464c0-27.66 9.1-44.71 26.17-61.32A144.37 144.37 0 0 0 220 459.42a16 16 0 0 0 20-15.49V192.45c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 192v251.93a16 16 0 0 0 20 15.49a144.4 144.4 0 0 0 81.82-56.74c17 16.54 26.09 33.52 26.17 60.95a16.27 16.27 0 0 0 15.1 16.37A16 16 0 0 0 432 464c0-41.68-16.6-67.23-42.39-90.31A143.3 143.3 0 0 0 400 320v-15.87h64a16 16 0 0 0 16-16.77c-.42-8.61-7.84-15.23-16.45-15.23"></svg:path><svg:path fill="currentColor" d="m321.39 104l.32.09c13.57 3.8 25.07-10.55 18.2-22.85A95.86 95.86 0 0 0 256.21 32h-.42a95.87 95.87 0 0 0-84.19 50.13c-6.84 12.58 5.14 27 18.84 22.86c19.71-6 41.79-9.06 65.56-9.06c24.09 0 46.09 2.72 65.39 8.07"></svg:path>`,
})
export class IonBugIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBuildIcon],svg[ion-build-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.54 120.52a16 16 0 0 0-25.54-4L382.56 178a16.12 16.12 0 0 1-22.63 0l-26.56-26.6a16 16 0 0 1 0-22.63l61.18-61.19a16 16 0 0 0-4.78-25.92C343.56 21 285.88 31.78 249.51 67.88c-30.9 30.68-40.11 78.62-25.25 131.53a15.89 15.89 0 0 1-4.49 16L53.29 367.46a64.17 64.17 0 1 0 90.6 90.64l153.68-166.85a15.9 15.9 0 0 1 15.77-4.57a179.3 179.3 0 0 0 46.22 6.37c33.4 0 62.71-10.81 83.85-31.64c39.15-38.57 45.12-103.99 26.13-140.89M99.48 447.15a32 32 0 1 1 28.34-28.35a32 32 0 0 1-28.34 28.35"></svg:path>`,
})
export class IonBuildIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBulbIcon],svg[ion-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 464h-64a16 16 0 0 0 0 32h64a16 16 0 0 0 0-32m16-48h-96a16 16 0 0 0 0 32h96a16 16 0 0 0 0-32m65.42-353.31C339.35 32.58 299.07 16 256 16A159.62 159.62 0 0 0 96 176c0 46.62 17.87 90.23 49 119.64l4.36 4.09C167.37 316.57 192 339.64 192 360v24a16 16 0 0 0 16 16h24a8 8 0 0 0 8-8V274.82a8 8 0 0 0-5.13-7.47A130.7 130.7 0 0 1 208.71 253a16 16 0 1 1 18.58-26c7.4 5.24 21.65 13 28.71 13s21.31-7.78 28.73-13a16 16 0 0 1 18.56 26a130.7 130.7 0 0 1-26.16 14.32a8 8 0 0 0-5.13 7.47V392a8 8 0 0 0 8 8h24a16 16 0 0 0 16-16v-24c0-19.88 24.36-42.93 42.15-59.77l4.91-4.66C399.08 265 416 223.61 416 176a159.16 159.16 0 0 0-46.58-113.31"></svg:path>`,
})
export class IonBulbIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBusIcon],svg[ion-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 32H112a48 48 0 0 0-48 48v320a47.9 47.9 0 0 0 16 35.74V454a26 26 0 0 0 26 26h28a26 26 0 0 0 26-26v-6h192v6a26 26 0 0 0 26 26h28a26 26 0 0 0 26-26v-18.26A47.9 47.9 0 0 0 448 400V80a48 48 0 0 0-48-48M147.47 399.82a32 32 0 1 1 28.35-28.35a32 32 0 0 1-28.35 28.35M236 288H112a16 16 0 0 1-16-16V144a16 16 0 0 1 16-16h124a4 4 0 0 1 4 4v152a4 4 0 0 1-4 4m20-192H112.46c-8.6 0-16-6.6-16.44-15.19A16 16 0 0 1 112 64h287.54c8.6 0 16 6.6 16.44 15.19A16 16 0 0 1 400 96zm20 32h124a16 16 0 0 1 16 16v128a16 16 0 0 1-16 16H276a4 4 0 0 1-4-4V132a4 4 0 0 1 4-4m60.18 243.47a32 32 0 1 1 28.35 28.35a32 32 0 0 1-28.35-28.35"></svg:path>`,
})
export class IonBusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBusinessIcon],svg[ion-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 176H320V64a48 48 0 0 0-48-48H80a48 48 0 0 0-48 48v416a16 16 0 0 0 16 16h104a8 8 0 0 0 8-8v-71.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 192 416v72a8 8 0 0 0 8 8h264a16 16 0 0 0 16-16V224a48 48 0 0 0-48-48M98.08 431.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 240a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 320a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79M444 464H320V208h112a16 16 0 0 1 16 16v236a4 4 0 0 1-4 4"></svg:path><svg:path fill="currentColor" d="M400 400a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-64 160a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class IonBusinessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCafeIcon],svg[ion-cafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 64H96a16 16 0 0 0-16 16v192a96.11 96.11 0 0 0 96 96h112a96.11 96.11 0 0 0 96-96v-80h18a62.07 62.07 0 0 0 62-62V96a32 32 0 0 0-32-32m0 66a30 30 0 0 1-30 30h-18V96h48Zm-32 270H64a16 16 0 0 0 0 32h336a16 16 0 0 0 0-32"></svg:path>`,
})
export class IonCafeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCalculatorIcon],svg[ion-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 80a48.05 48.05 0 0 0-48-48H144a48.05 48.05 0 0 0-48 48v352a48.05 48.05 0 0 0 48 48h224a48.05 48.05 0 0 0 48-48ZM168 432a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-80a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-80a24 24 0 1 1 24-24a24 24 0 0 1-24 24m88 160a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-80a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-80a24 24 0 1 1 24-24a24 24 0 0 1-24 24m112 136a24 24 0 0 1-48 0v-80a24 24 0 0 1 48 0Zm-24-136a24 24 0 1 1 24-24a24 24 0 0 1-24 24m19.31-100.69A16 16 0 0 1 352 176H160a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16v64a16 16 0 0 1-4.69 11.31"></svg:path>`,
})
export class IonCalculatorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCalendarIcon],svg[ion-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 128a64 64 0 0 0-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4ZM32 416a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3H35a3 3 0 0 0-3 3Zm344-208a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24"></svg:path>`,
})
export class IonCalendarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCalendarClearIcon],svg[ion-calendar-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 128a64 64 0 0 0-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4ZM32 416a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V180a4 4 0 0 0-4-4H36a4 4 0 0 0-4 4Z"></svg:path>`,
})
export class IonCalendarClearIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCalendarNumberIcon],svg[ion-calendar-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4v-12a64 64 0 0 0-64-64m60 112H36a4 4 0 0 0-4 4v236a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V180a4 4 0 0 0-4-4M239.58 401.1c-12.17 9.61-28.75 14.9-46.7 14.9c-27.87 0-48.48-18.16-57.66-33.7a16 16 0 0 1 27.56-16.3c1.08 1.84 11.15 18 30.1 18c16.66 0 36.12-7.29 36.12-27.82c0-6.25-1.22-14.95-7-20.88c-8.54-8.74-22.75-12.67-30.11-12.67a16 16 0 0 1 0-32c4.85 0 17.41-2.6 25.28-10.65a22 22 0 0 0 6.57-16.08c0-23.23-28.63-23.9-31.89-23.9c-17.34 0-23.8 10.61-24.07 11.06a16 16 0 1 1-27.55-16.26c7.64-13 25.22-26.8 51.62-26.8c16.44 0 31.76 4.77 43.13 13.42c13.39 10.2 20.76 25.28 20.76 42.48A54 54 0 0 1 240 302.35c-1.15 1.18-2.36 2.28-3.59 3.35a66 66 0 0 1 8.42 7.23c10.56 10.8 16.14 25.75 16.14 43.25c.03 18.06-7.58 34.01-21.39 44.92M368 396a16 16 0 0 1-32 0V256.29l-22.51 16.59a16 16 0 1 1-19-25.76l43.42-32a16 16 0 0 1 9.49-3.12h4.6a16 16 0 0 1 16 16Z"></svg:path>`,
})
export class IonCalendarNumberIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCallIcon],svg[ion-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.5 176.5 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.4 67.4 0 0 1 391 480"></svg:path>`,
})
export class IonCallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCameraIcon],svg[ion-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="272" r="64" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M432 144h-59c-3 0-6.72-1.94-9.62-5l-25.94-40.94a15.5 15.5 0 0 0-1.37-1.85C327.11 85.76 315 80 302 80h-92c-13 0-25.11 5.76-34.07 16.21a15.5 15.5 0 0 0-1.37 1.85l-25.94 41c-2.22 2.42-5.34 5-8.62 5v-8a16 16 0 0 0-16-16h-24a16 16 0 0 0-16 16v8h-4a48.05 48.05 0 0 0-48 48V384a48.05 48.05 0 0 0 48 48h352a48.05 48.05 0 0 0 48-48V192a48.05 48.05 0 0 0-48-48M256 368a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96"></svg:path>`,
})
export class IonCameraIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCameraReverseIcon],svg[ion-camera-reverse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 144h-59c-3 0-6.72-1.94-9.62-5l-25.94-40.94a15.5 15.5 0 0 0-1.37-1.85C327.11 85.76 315 80 302 80h-92c-13 0-25.11 5.76-34.07 16.21a15.5 15.5 0 0 0-1.37 1.85l-25.94 41c-2.22 2.42-5.34 5-8.62 5v-8a16 16 0 0 0-16-16h-24a16 16 0 0 0-16 16v8h-4a48.05 48.05 0 0 0-48 48V384a48.05 48.05 0 0 0 48 48h352a48.05 48.05 0 0 0 48-48V192a48.05 48.05 0 0 0-48-48M316.84 346.3a96.06 96.06 0 0 1-155.66-59.18a16 16 0 0 1-16.49-26.43l20-20a16 16 0 0 1 22.62 0l20 20A16 16 0 0 1 196 288a17 17 0 0 1-2-.14a64.07 64.07 0 0 0 102.66 33.63a16 16 0 1 1 20.21 24.81Zm50.47-63l-20 20a16 16 0 0 1-22.62 0l-20-20a16 16 0 0 1 13.09-27.2A64 64 0 0 0 215 222.64A16 16 0 1 1 194.61 198a96 96 0 0 1 156 59a16 16 0 0 1 16.72 26.35Z"></svg:path>`,
})
export class IonCameraReverseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCarIcon],svg[ion-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M447.68 220.78a16 16 0 0 0-1-3.08l-37.78-88.16C400.19 109.17 379 96 354.89 96H157.11c-24.09 0-45.3 13.17-54 33.54L65.29 217.7A15.7 15.7 0 0 0 64 224v176a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-16h256v16a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V224a16 16 0 0 0-.32-3.22M144 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32m224 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32M104.26 208l28.23-65.85C136.11 133.69 146 128 157.11 128h197.78c11.1 0 21 5.69 24.62 14.15L407.74 208Z"></svg:path>`,
})
export class IonCarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCarSportIcon],svg[ion-car-sport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M494.26 276.22c-3.6-40.41-9.53-48.28-11.77-51.24c-5.15-6.84-13.39-11.31-22.11-16a3.6 3.6 0 0 1-.91-5.68a15.93 15.93 0 0 0 4.53-12.53A16.27 16.27 0 0 0 447.65 176h-15.6a17 17 0 0 0-2 .13a8.5 8.5 0 0 0-1.41-.47c-9.24-19.53-21.89-46.27-48.11-59.32C341.64 97 270 96 256 96s-85.64 1-124.48 20.31c-26.22 13.05-38.87 39.79-48.11 59.32l-.08.16a6.5 6.5 0 0 0-1.35.34a17 17 0 0 0-2-.13H64.35A16.27 16.27 0 0 0 48 190.77a15.93 15.93 0 0 0 4.59 12.47a3.6 3.6 0 0 1-.91 5.68c-8.72 4.72-17 9.19-22.11 16c-2.24 3-8.16 10.83-11.77 51.24c-2 22.74-2.3 46.28-.73 61.44c3.29 31.5 9.46 50.54 9.72 51.33a16 16 0 0 0 13.2 10.87v.2a16 16 0 0 0 16 16h56a16 16 0 0 0 16-16c8.61 0 14.6-1.54 20.95-3.18a159 159 0 0 1 28-4.91C207.45 389 237.79 388 256 388c17.84 0 49.52 1 80.08 3.91a159 159 0 0 1 28.11 4.93c6.08 1.56 11.85 3 19.84 3.15a16 16 0 0 0 16 16h56a16 16 0 0 0 16-16v-.12A16 16 0 0 0 485.27 389c.26-.79 6.43-19.83 9.72-51.33c1.57-15.17 1.29-38.67-.73-61.45m-381.93-86.91c8-17 17.15-36.24 33.44-44.35c23.54-11.72 72.33-17 110.23-17s86.69 5.24 110.23 17c16.29 8.11 25.4 27.36 33.44 44.35l1 2.17a8 8 0 0 1-7.44 11.42C360 202 290 199.12 256 199.12s-104 2.95-137.28 3.85a8 8 0 0 1-7.44-11.42c.35-.74.72-1.49 1.05-2.24m11.93 79.63A427 427 0 0 1 72.42 272c-10.6 0-21.53-3-23.56-12.44c-1.39-6.35-1.24-9.92-.49-13.51C49 243 50 240.78 55 240c13-2 20.27.51 41.55 6.78c14.11 4.15 24.29 9.68 30.09 14.06c2.91 2.16 1.36 7.8-2.38 8.1m221.38 82c-13.16 1.5-39.48.95-89.34.95s-76.17.55-89.33-.95c-13.58-1.51-30.89-14.35-19.07-25.79c7.87-7.54 26.23-13.18 50.68-16.35s34.8-4.8 57.62-4.8s32.12 1 57.62 4.81s44.77 9.52 50.68 16.35c10.78 12.24-5.29 24.19-18.86 25.84Zm117.5-91.39c-2 9.48-13 12.44-23.56 12.44a456 456 0 0 1-52.84-3.06c-3.06-.29-4.48-5.66-1.38-8.1c5.71-4.49 16-9.91 30.09-14.06c21.28-6.27 33.55-8.78 44.09-6.69c2.57.51 3.93 3.27 4.09 5a40.6 40.6 0 0 1-.49 14.48Z"></svg:path>`,
})
export class IonCarSportIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCardIcon],svg[ion-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 376a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V222H32Zm66-76a30 30 0 0 1 30-30h48a30 30 0 0 1 30 30v20a30 30 0 0 1-30 30h-48a30 30 0 0 1-30-30ZM424 80H88a56 56 0 0 0-56 56v26h448v-26a56 56 0 0 0-56-56"></svg:path>`,
})
export class IonCardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCaretBackIcon],svg[ion-caret-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M321.94 98L158.82 237.78a24 24 0 0 0 0 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18"></svg:path>`,
})
export class IonCaretBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCaretBackCircleIcon],svg[ion-caret-back-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48S48 141.13 48 256m252-74.14v148.28a16 16 0 0 1-26.23 12.29l-89.09-74.13a16 16 0 0 1 0-24.6l89.09-74.13A16 16 0 0 1 300 181.86"></svg:path>`,
})
export class IonCaretBackCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCaretDownIcon],svg[ion-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62"></svg:path>`,
})
export class IonCaretDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCaretDownCircleIcon],svg[ion-caret-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208m-121.57-17.77l-74.13 89.09a16 16 0 0 1-24.6 0l-74.13-89.09A16 16 0 0 1 181.86 212h148.28a16 16 0 0 1 12.29 26.23"></svg:path>`,
})
export class IonCaretDownCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCaretForwardIcon],svg[ion-caret-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m190.06 414l163.12-139.78a24 24 0 0 0 0-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18"></svg:path>`,
})
export class IonCaretForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCaretForwardCircleIcon],svg[ion-caret-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208m-252 74.14V181.86a16 16 0 0 1 26.23-12.29l89.09 74.13a16 16 0 0 1 0 24.6l-89.09 74.13A16 16 0 0 1 212 330.14"></svg:path>`,
})
export class IonCaretForwardCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCaretUpIcon],svg[ion-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414 321.94L274.22 158.82a24 24 0 0 0-36.44 0L98 321.94c-13.34 15.57-2.28 39.62 18.22 39.62h279.6c20.5 0 31.56-24.05 18.18-39.62"></svg:path>`,
})
export class IonCaretUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCaretUpCircleIcon],svg[ion-caret-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m74.14 252H181.86a16 16 0 0 1-12.29-26.23l74.13-89.09a16 16 0 0 1 24.6 0l74.13 89.09A16 16 0 0 1 330.14 300"></svg:path>`,
})
export class IonCaretUpCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCartIcon],svg[ion-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="176" cy="416" r="32" fill="currentColor"></svg:circle><svg:circle cx="400" cy="416" r="32" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M456.8 120.78a23.92 23.92 0 0 0-18.56-8.78H133.89l-6.13-34.78A16 16 0 0 0 112 64H48a16 16 0 0 0 0 32h50.58l45.66 258.78A16 16 0 0 0 160 368h256a16 16 0 0 0 0-32H173.42l-5.64-32h241.66A24.07 24.07 0 0 0 433 284.71l28.8-144a24 24 0 0 0-5-19.93"></svg:path>`,
})
export class IonCartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCashIcon],svg[ion-cash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 400H64a16 16 0 0 1 0-32h384a16 16 0 0 1 0 32m-32 48H96a16 16 0 0 1 0-32h320a16 16 0 0 1 0 32M32 272H16v48a32 32 0 0 0 32 32h48v-16a64.07 64.07 0 0 0-64-64"></svg:path><svg:path fill="currentColor" d="M480 240h16v-64h-16a96.11 96.11 0 0 1-96-96V64H128v16a96.11 96.11 0 0 1-96 96H16v64h16a96.11 96.11 0 0 1 96 96v16h256v-16a96.11 96.11 0 0 1 96-96m-224 64a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96"></svg:path><svg:circle cx="256" cy="208" r="64" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M416 336v16h48a32 32 0 0 0 32-32v-48h-16a64.07 64.07 0 0 0-64 64m64-192h16V96a32 32 0 0 0-32-32h-48v16a64.07 64.07 0 0 0 64 64M96 80V64H48a32 32 0 0 0-32 32v48h16a64.07 64.07 0 0 0 64-64"></svg:path>`,
})
export class IonCashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCellularIcon],svg[ion-cellular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 432h-48a24 24 0 0 1-24-24V104a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v304a24 24 0 0 1-24 24m-128 0h-48a24 24 0 0 1-24-24V184a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v224a24 24 0 0 1-24 24m-128 0h-48a24 24 0 0 1-24-24V248a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v160a24 24 0 0 1-24 24m-128 0H40a24 24 0 0 1-24-24v-96a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v96a24 24 0 0 1-24 24"></svg:path>`,
})
export class IonCellularIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChatboxIcon],svg[ion-chatbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 464a16 16 0 0 1-16-16v-64h-24a72.08 72.08 0 0 1-72-72V120a72.08 72.08 0 0 1 72-72h304a72.08 72.08 0 0 1 72 72v192a72.08 72.08 0 0 1-72 72H245.74l-91.49 76.29A16.05 16.05 0 0 1 144 464"></svg:path>`,
})
export class IonChatboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChatboxEllipsesIcon],svg[ion-chatbox-ellipses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408 48H104a72.08 72.08 0 0 0-72 72v192a72.08 72.08 0 0 0 72 72h24v64a16 16 0 0 0 26.25 12.29L245.74 384H408a72.08 72.08 0 0 0 72-72V120a72.08 72.08 0 0 0-72-72M160 248a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonChatboxEllipsesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChatboxWorkingIcon],svg[ion-chatbox-working-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M124.3 400H277c14.4 0 14.4.1 21.3 5.2S384 464 384 464v-64h3.7c42.2 0 76.3-31.8 76.3-71.4V119.7c0-39.6-34.2-71.7-76.3-71.7H124.3C82.2 48 48 80.1 48 119.7v208.9c0 39.6 34.2 71.4 76.3 71.4zm227.8-208c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32z" fill="currentColor"></svg:path>`,
})
export class IonChatboxWorkingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChatboxesIcon],svg[ion-chatboxes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M294.1 365.5c-2.6-1.8-7.2-4.5-17.5-4.5H160.5c-34.7 0-64.5-26.1-64.5-59.2V201h-1.8C67.9 201 48 221.5 48 246.5v128.9c0 25 21.4 40.6 47.7 40.6H112v48l53.1-45c1.9-1.4 5.3-3 13.2-3h89.8c23 0 47.4-11.4 51.9-32l-25.9-18.5z" fill="currentColor"></svg:path><svg:path d="M401 48H183.7C149 48 128 74.8 128 107.8V276c0 33.1 28 60 62.7 60h101.1c10.4 0 15 2.3 17.5 4.2L384 400v-64h17c34.8 0 63-26.9 63-59.9V107.8c0-33-28.2-59.8-63-59.8z" fill="currentColor"></svg:path>`,
})
export class IonChatboxesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChatbubbleIcon],svg[ion-chatbubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76.83 480a25.69 25.69 0 0 1-25.57-25.74a29 29 0 0 1 1.2-7.63L70.88 380c.77-2.46-.1-4.94-1.23-6.9l-.22-.4c-.08-.13-.46-.66-.73-1.05s-.58-.81-.86-1.22l-.19-.27A215.66 215.66 0 0 1 32 251.37c-.18-57.59 22.35-112 63.46-153.28C138 55.47 194.9 32 255.82 32A227.4 227.4 0 0 1 398 81.84c39.45 31.75 66.87 76 77.21 124.68a213.5 213.5 0 0 1 4.78 45c0 58.93-22.64 114.28-63.76 155.87c-41.48 42-97.18 65.06-156.83 65.06c-21 0-47.87-5.36-60.77-9c-15.52-4.34-30.23-10-31.85-10.6a15.1 15.1 0 0 0-5.37-1a14.75 14.75 0 0 0-5.8 1.15l-.85.33l-67.48 24.38A29.4 29.4 0 0 1 76.83 480m10.65-100"></svg:path>`,
})
export class IonChatbubbleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChatbubbleEllipsesIcon],svg[ion-chatbubble-ellipses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M398 81.84A227.4 227.4 0 0 0 255.82 32C194.9 32 138 55.47 95.46 98.09C54.35 139.33 31.82 193.78 32 251.37a215.66 215.66 0 0 0 35.65 118.76l.19.27c.28.41.57.82.86 1.22s.65.92.73 1.05l.22.4c1.13 2 2 4.44 1.23 6.9l-18.42 66.66a29 29 0 0 0-1.2 7.63A25.69 25.69 0 0 0 76.83 480a29.4 29.4 0 0 0 10.45-2.29l67.49-24.36l.85-.33a14.75 14.75 0 0 1 5.8-1.15a15.1 15.1 0 0 1 5.37 1c1.62.63 16.33 6.26 31.85 10.6c12.9 3.6 39.74 9 60.77 9c59.65 0 115.35-23.1 156.83-65.06C457.36 365.77 480 310.42 480 251.49a213.5 213.5 0 0 0-4.78-45c-10.34-48.62-37.76-92.9-77.22-124.65M160 288a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonChatbubbleEllipsesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChatbubbleWorkingIcon],svg[ion-chatbubble-working-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 449.4c28.9 0 56.4-5.7 81.3-15.9.6-.3 1.1-.5 1.7-.7.1 0 .2 0 .2-.1 3.5-1.3 7.3-2 11.2-2 4.3 0 8.4.8 12.1 2.4l84 30.9-22.1-88.4c0-5.3 1.5-10.3 3.9-14.6.8-1.3 1.6-2.6 2.5-3.7 20.9-31.3 33-68.5 33-108.4C464 137.9 370.9 48 256 48S48 137.9 48 248.7c0 110.9 93.1 200.7 208 200.7zM352 224c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32z" fill="currentColor"></svg:path>`,
})
export class IonChatbubbleWorkingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChatbubblesIcon],svg[ion-chatbubbles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.44 389.17c0 .07 0 .2-.08.38c.03-.12.05-.25.08-.38M439.9 405.6a26.8 26.8 0 0 1-9.59-2l-56.78-20.13l-.42-.17a9.9 9.9 0 0 0-3.91-.76a10.3 10.3 0 0 0-3.62.66c-1.38.52-13.81 5.19-26.85 8.77c-7.07 1.94-31.68 8.27-51.43 8.27c-50.48 0-97.68-19.4-132.89-54.63A183.38 183.38 0 0 1 100.3 215.1a176 176 0 0 1 4.06-37.58c8.79-40.62 32.07-77.57 65.55-104A194.76 194.76 0 0 1 290.3 32c52.21 0 100.86 20 137 56.18c34.16 34.27 52.88 79.33 52.73 126.87a177.86 177.86 0 0 1-30.3 99.15l-.19.28l-.74 1c-.17.23-.34.45-.5.68l-.15.27a22 22 0 0 0-1.08 2.09l15.74 55.94a26.4 26.4 0 0 1 1.12 7.11a24 24 0 0 1-24.03 24.03"></svg:path><svg:path fill="currentColor" d="M299.87 425.39a15.74 15.74 0 0 0-10.29-8.1c-5.78-1.53-12.52-1.27-17.67-1.65a201.78 201.78 0 0 1-128.82-58.75A199.2 199.2 0 0 1 86.4 244.16C85 234.42 85 232 85 232a16 16 0 0 0-28-10.58s-7.88 8.58-11.6 17.19a162.09 162.09 0 0 0 11 150.06C59 393 59 395 58.42 399.5c-2.73 14.11-7.51 39-10 51.91a24 24 0 0 0 8 22.92l.46.39A24.34 24.34 0 0 0 72 480a23.4 23.4 0 0 0 9-1.79l53.51-20.65a8.05 8.05 0 0 1 5.72 0c21.07 7.84 43 12 63.78 12a176 176 0 0 0 74.91-16.66c5.46-2.56 14-5.34 19-11.12a15 15 0 0 0 1.95-16.39"></svg:path>`,
})
export class IonChatbubblesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCheckboxIcon],svg[ion-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64m-35.75 138.29l-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32l122.59-145.91a16 16 0 0 1 24.5 20.58"></svg:path>`,
})
export class IonCheckboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCheckmarkIcon],svg[ion-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"></svg:path>`,
})
export class IonCheckmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCheckmarkCircleIcon],svg[ion-checkmark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m108.25 138.29l-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32l122.59-145.91a16 16 0 0 1 24.5 20.58"></svg:path>`,
})
export class IonCheckmarkCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCheckmarkCircledIcon],svg[ion-checkmark-circled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm114.9 149.1L231.8 359.6c-1.1 1.1-2.9 3.5-5.1 3.5-2.3 0-3.8-1.6-5.1-2.9-1.3-1.3-78.9-75.9-78.9-75.9l-1.5-1.5c-.6-.9-1.1-2-1.1-3.2 0-1.2.5-2.3 1.1-3.2.4-.4.7-.7 1.1-1.2 7.7-8.1 23.3-24.5 24.3-25.5 1.3-1.3 2.4-3 4.8-3 2.5 0 4.1 2.1 5.3 3.3 1.2 1.2 45 43.3 45 43.3l111.3-143c1-.8 2.2-1.4 3.5-1.4 1.3 0 2.5.5 3.5 1.3l30.6 24.1c.8 1 1.3 2.2 1.3 3.5.1 1.3-.4 2.4-1 3.3z" fill="currentColor"></svg:path>`,
})
export class IonCheckmarkCircledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCheckmarkDoneIcon],svg[ion-checkmark-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M464 128L240 384l-96-96m0 96l-96-96m320-160L232 284"></svg:path>`,
})
export class IonCheckmarkDoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCheckmarkDoneCircleIcon],svg[ion-checkmark-done-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48m-16.79 192.47l51.55-59a16 16 0 0 1 24.1 21.06l-51.55 59a16 16 0 1 1-24.1-21.06m-38.86 90.85a16 16 0 0 1-22.62 0l-47.95-48a16 16 0 1 1 22.64-22.62l48 48a16 16 0 0 1-.07 22.62m176.8-128.79l-111.88 128a16 16 0 0 1-11.51 5.47h-.54a16 16 0 0 1-11.32-4.69l-47.94-48a16 16 0 1 1 22.64-22.62l29.8 29.83a8 8 0 0 0 11.68-.39l95-108.66a16 16 0 0 1 24.1 21.06Z"></svg:path>`,
})
export class IonCheckmarkDoneCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCheckmarkRoundIcon],svg[ion-checkmark-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 71.9c-17.3-13.4-41.5-9.3-54.1 9.1L214 344.2l-99.1-107.3c-14.6-16.6-39.1-17.4-54.7-1.8-15.6 15.5-16.4 41.6-1.7 58.1 0 0 120.4 133.6 137.7 147 17.3 13.4 41.5 9.3 54.1-9.1l206.3-301.7c12.6-18.5 8.7-44.2-8.6-57.5z" fill="currentColor"></svg:path>`,
})
export class IonCheckmarkRoundIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronBackIcon],svg[ion-chevron-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"></svg:path>`,
})
export class IonChevronBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronBackCircleIcon],svg[ion-chevron-back-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m35.31 292.69a16 16 0 1 1-22.62 22.62l-96-96a16 16 0 0 1 0-22.62l96-96a16 16 0 0 1 22.62 22.62L206.63 256Z"></svg:path>`,
})
export class IonChevronBackCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronCollapseIcon],svg[ion-chevron-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M117.863 88.282c-8.681 10.017-7.598 25.174 2.419 33.855l120 104c9.02 7.818 22.416 7.818 31.436 0l120-104c10.017-8.681 11.1-23.838 2.419-33.855s-23.839-11.099-33.855-2.418L256 176.241L151.718 85.864c-10.016-8.681-25.174-7.598-33.855 2.418m0 335.436c-8.681-10.017-7.598-25.174 2.419-33.855l120-104c9.02-7.818 22.416-7.818 31.436 0l120 104c10.017 8.681 11.1 23.838 2.419 33.855s-23.839 11.099-33.855 2.418L256 335.759l-104.282 90.377c-10.016 8.681-25.174 7.598-33.855-2.418"></svg:path>`,
})
export class IonChevronCollapseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronDownIcon],svg[ion-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 184l144 144l144-144"></svg:path>`,
})
export class IonChevronDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronDownCircleIcon],svg[ion-chevron-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208m-100.69-28.69l-96 96a16 16 0 0 1-22.62 0l-96-96a16 16 0 0 1 22.62-22.62L256 289.37l84.69-84.68a16 16 0 0 1 22.62 22.62"></svg:path>`,
})
export class IonChevronDownCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronExpandIcon],svg[ion-chevron-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m136 208l120-104l120 104m-240 96l120 104l120-104"></svg:path>`,
})
export class IonChevronExpandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronForwardIcon],svg[ion-chevron-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m184 112l144 144l-144 144"></svg:path>`,
})
export class IonChevronForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronForwardCircleIcon],svg[ion-chevron-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48S48 141.13 48 256m257.37 0l-84.68-84.69a16 16 0 0 1 22.62-22.62l96 96a16 16 0 0 1 0 22.62l-96 96a16 16 0 0 1-22.62-22.62Z"></svg:path>`,
})
export class IonChevronForwardCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronLeftIcon],svg[ion-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M213.7 256L380.9 81.9c4.2-4.3 4.1-11.4-.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-.2L131.1 247.9c-2.2 2.2-3.2 5.2-3 8.1-.1 3 .9 5.9 3 8.1l204.2 212.7c4.2 4.3 11.2 4.2 15.5-.2l29.9-30.6c4.3-4.4 4.4-11.5.2-15.8L213.7 256z" fill="currentColor"></svg:path>`,
})
export class IonChevronLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronRightIcon],svg[ion-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M298.3 256L131.1 81.9c-4.2-4.3-4.1-11.4.2-15.8l29.9-30.6c4.3-4.4 11.3-4.5 15.5-.2L380.9 248c2.2 2.2 3.2 5.2 3 8.1.1 3-.9 5.9-3 8.1L176.7 476.8c-4.2 4.3-11.2 4.2-15.5-.2L131.3 446c-4.3-4.4-4.4-11.5-.2-15.8L298.3 256z" fill="currentColor"></svg:path>`,
})
export class IonChevronRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronUpIcon],svg[ion-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 328l144-144l144 144"></svg:path>`,
})
export class IonChevronUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionChevronUpCircleIcon],svg[ion-chevron-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m107.31 259.31a16 16 0 0 1-22.62 0L256 222.63l-84.69 84.68a16 16 0 0 1-22.62-22.62l96-96a16 16 0 0 1 22.62 0l96 96a16 16 0 0 1 0 22.62"></svg:path>`,
})
export class IonChevronUpCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionClipboardIcon],svg[ion-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 48h-11.41a8 8 0 0 1-7.44-5.08A42.18 42.18 0 0 0 309.87 16H202.13a42.18 42.18 0 0 0-39.28 26.92a8 8 0 0 1-7.44 5.08H144a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V112a64 64 0 0 0-64-64m-48.13 64H192.13a16 16 0 0 1 0-32h127.74a16 16 0 0 1 0 32"></svg:path>`,
})
export class IonClipboardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionClockIcon],svg[ion-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M255.988 32C132.285 32 32 132.298 32 256c0 123.715 100.285 224 223.988 224C379.703 480 480 379.715 480 256c0-123.702-100.297-224-224.012-224zm135.773 359.765a193.666 193.666 0 0 1-32.886 26.42l-15.946-27.62-13.856 8 15.955 27.636c-24.838 13.03-52.372 20.455-81.027 21.624V416h-16v31.825c-28.656-1.166-56.191-8.59-81.03-21.62l15.958-27.641-13.856-8-15.949 27.625a193.574 193.574 0 0 1-32.889-26.424 193.571 193.571 0 0 1-26.422-32.889l27.624-15.949-8-13.855-27.641 15.958c-13.03-24.839-20.454-52.374-21.621-81.03H96v-16H64.175c1.167-28.655 8.592-56.19 21.623-81.029l27.638 15.958 8-13.856-27.623-15.948a193.662 193.662 0 0 1 26.419-32.885 193.632 193.632 0 0 1 32.89-26.426l15.949 27.624 13.856-8-15.958-27.64C191.81 72.765 219.345 65.34 248 64.175V96h16V64.176c28.654 1.169 56.188 8.595 81.026 21.626l-15.954 27.634 13.856 8 15.945-27.618a193.672 193.672 0 0 1 32.886 26.421 193.609 193.609 0 0 1 26.424 32.887l-27.619 15.946 8 13.856 27.636-15.956c13.031 24.839 20.457 52.373 21.624 81.027H416v16h31.824c-1.167 28.655-8.592 56.189-21.622 81.028l-27.637-15.957-8 13.856 27.621 15.947a193.57 193.57 0 0 1-26.425 32.892z" fill="currentColor"></svg:path><svg:path d="M400 241H284.268A32.136 32.136 0 0 0 272 228.292V160h-32v68.292c-9.562 5.534-16 15.866-16 27.708 0 17.673 14.327 32 32 32 11.425 0 21.444-5.992 27.106-15H400v-32z" fill="currentColor"></svg:path>`,
})
export class IonClockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloseIcon],svg[ion-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"></svg:path>`,
})
export class IonCloseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloseCircleIcon],svg[ion-close-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256Z"></svg:path>`,
})
export class IonCloseCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloseCircledIcon],svg[ion-close-circled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 33C132.3 33 32 133.3 32 257s100.3 224 224 224 224-100.3 224-224S379.7 33 256 33zm108.3 299.5c1.5 1.5 2.3 3.5 2.3 5.6 0 2.1-.8 4.2-2.3 5.6l-21.6 21.7c-1.6 1.6-3.6 2.3-5.6 2.3-2 0-4.1-.8-5.6-2.3L256 289.8l-75.4 75.7c-1.5 1.6-3.6 2.3-5.6 2.3-2 0-4.1-.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6 0-2.1.8-4.2 2.3-5.6l75.7-76-75.9-75c-3.1-3.1-3.1-8.2 0-11.3l21.6-21.7c1.5-1.5 3.5-2.3 5.6-2.3 2.1 0 4.1.8 5.6 2.3l75.7 74.7 75.7-74.7c1.5-1.5 3.5-2.3 5.6-2.3 2.1 0 4.1.8 5.6 2.3l21.6 21.7c3.1 3.1 3.1 8.2 0 11.3l-75.9 75 75.6 75.9z" fill="currentColor"></svg:path>`,
})
export class IonCloseCircledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloseRoundIcon],svg[ion-close-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z" fill="currentColor"></svg:path>`,
})
export class IonCloseRoundIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionClosedCaptioningIcon],svg[ion-closed-captioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M0 64v384h512V64H0zm464 191.825c.045 26.724-1.547 47.143-3.797 80.223S441 392.5 401.097 396.168C361.201 399.835 305.369 400.12 256 400c-49 .12-105.198-.165-145.094-3.832-39.903-3.668-56.855-27.04-59.105-60.12s-3.841-53.499-3.796-80.223c-.045-26.725.095-44.124 3.798-80.224s23.01-56.267 59.106-59.934S201.842 112 248.704 112H263.302c46.862 0 101.698 0 137.795 3.667s55.403 23.833 59.106 59.934 3.842 53.499 3.797 80.224z" fill="currentColor"></svg:path><svg:path d="M372 283.846v.766c0 18.639-11.581 29.566-27.003 29.566-15.418 0-25.808-12.309-27.284-29.566 0 0-1.335-9.078-1.335-27.298s1.546-29.759 1.546-29.759c2.711-19.473 12.188-29.566 27.607-29.566 15.367 0 27.584 13.262 27.584 33.388.023.086.01.624.01.624h51.541c0-25-6.309-47.556-18.92-61.746-12.617-14.183-31.403-21.273-56.369-21.273-12.483 0-23.93 1.654-34.33 4.942-10.404 3.295-19.376 9.062-26.916 17.291-7.545 8.234-13.397 19.254-17.555 33.059-4.162 13.809-6.242 31.224-6.242 52.247 0 20.52 1.688 37.684 5.072 51.488 3.377 13.811 8.388 24.83 15.018 33.059 6.632 8.234 14.953 13.935 24.967 17.1 10.01 3.163 21.779 4.748 35.304 4.748 28.604 0 49.089-7.258 61.443-21.318C418.486 327.537 424.666 307 424.666 280H372v3.846z" fill="currentColor"></svg:path><svg:path d="M195 283.846v.766c0 18.639-11.581 29.566-27.003 29.566-15.418 0-25.808-12.309-27.284-29.566 0 0-1.335-9.078-1.335-27.298s1.546-29.759 1.546-29.759c2.711-19.473 12.188-29.566 27.607-29.566 15.367 0 27.584 13.262 27.584 33.388.023.086.01.624.01.624h51.541c0-25-6.309-47.556-18.92-61.746-12.617-14.183-31.403-21.273-56.369-21.273-12.483 0-23.93 1.654-34.33 4.942-10.404 3.295-19.376 9.062-26.916 17.291-7.545 8.234-13.397 19.254-17.555 33.059-4.162 13.809-6.242 31.224-6.242 52.247 0 20.52 1.688 37.684 5.072 51.488 3.377 13.811 8.388 24.83 15.018 33.059 6.632 8.234 14.953 13.935 24.967 17.1 10.01 3.163 21.779 4.748 35.304 4.748 28.604 0 49.089-7.258 61.443-21.318C241.486 327.537 247.666 307 247.666 280H195v3.846z" fill="currentColor"></svg:path>`,
})
export class IonClosedCaptioningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloudIcon],svg[ion-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M396 432H136c-36.44 0-70.36-12.57-95.51-35.41C14.38 372.88 0 340 0 304c0-36.58 13.39-68.12 38.72-91.22c18.11-16.53 42.22-28.25 69.18-33.87a16 16 0 0 0 11.37-9.15a156.24 156.24 0 0 1 42.05-56C187.76 91.69 220.5 80 256 80a153.57 153.57 0 0 1 107.14 42.9c24.73 23.81 41.5 55.28 49.18 92a16 16 0 0 0 12.12 12.39C470 237.42 512 270.43 512 328c0 33.39-12.24 60.78-35.41 79.23C456.23 423.43 428.37 432 396 432"></svg:path>`,
})
export class IonCloudIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloudCircleIcon],svg[ion-cloud-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m70 280H193.05c-31.53 0-57.56-25.58-57-57.11c.53-31.74 23.68-49.95 51.35-54.3a7.92 7.92 0 0 0 6.16-5C202.07 189.22 223.63 168 256 168c33.17 0 61.85 22.49 70.14 60.21a17.75 17.75 0 0 0 13.18 13.43C357.79 246.05 376 259.21 376 284c0 30.28-22.5 44-50 44"></svg:path>`,
})
export class IonCloudCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloudDoneIcon],svg[ion-cloud-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M424.44 227.25a16 16 0 0 1-12.12-12.39c-7.68-36.68-24.45-68.15-49.18-92A153.57 153.57 0 0 0 256 80c-35.5 0-68.24 11.69-94.68 33.8a156.24 156.24 0 0 0-42 56a16 16 0 0 1-11.37 9.15c-27 5.62-51.07 17.34-69.18 33.87C13.39 235.88 0 267.42 0 304c0 36 14.38 68.88 40.49 92.59C65.64 419.43 99.56 432 136 432h260c32.37 0 60.23-8.57 80.59-24.77C499.76 388.78 512 361.39 512 328c0-57.57-42-90.58-87.56-100.75m-95.2-8.94l-107.8 128a16 16 0 0 1-12 5.69h-.27a16 16 0 0 1-11.88-5.28l-45.9-50.87c-5.77-6.39-5.82-16.33.3-22.4a16 16 0 0 1 23.16.63l33.9 37.58l96-114a16 16 0 1 1 24.48 20.62Z"></svg:path>`,
})
export class IonCloudDoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloudDownloadIcon],svg[ion-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472.7 189.5c-13.26-8.43-29.83-14.56-48.08-17.93A16 16 0 0 1 412 159.28c-7.86-34.51-24.6-64.13-49.15-86.58C334.15 46.45 296.21 32 256 32c-35.35 0-68 11.08-94.37 32a150.1 150.1 0 0 0-41.95 52.83A16.05 16.05 0 0 1 108 125.8c-27.13 4.9-50.53 14.68-68.41 28.7C13.7 174.83 0 203.56 0 237.6C0 305 55.93 352 136 352h104V224.45c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 224v128h124c72.64 0 116-34.24 116-91.6c0-30.05-13.59-54.57-39.3-70.9M240 425.42l-36.7-36.64a16 16 0 0 0-22.6 22.65l64 63.89a16 16 0 0 0 22.6 0l64-63.89a16 16 0 0 0-22.6-22.65L272 425.42V352h-32Z"></svg:path>`,
})
export class IonCloudDownloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloudOfflineIcon],svg[ion-cloud-offline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 464a15.92 15.92 0 0 1-11.31-4.69l-384-384a16 16 0 0 1 22.62-22.62l384 384A16 16 0 0 1 448 464M38.72 196.78C13.39 219.88 0 251.42 0 288c0 36 14.38 68.88 40.49 92.59C65.64 403.43 99.56 416 136 416h192.8a8 8 0 0 0 5.66-13.66L100.88 168.76a8 8 0 0 0-8-2C72 173.15 53.4 183.38 38.72 196.78m437.87 194.45C499.76 372.78 512 345.39 512 312c0-57.57-42-90.58-87.56-100.75a16 16 0 0 1-12.12-12.39c-7.68-36.68-24.45-68.15-49.18-92A153.57 153.57 0 0 0 256 64c-31.12 0-60.12 9-84.62 26.1a8 8 0 0 0-1.14 12.26L461.68 393.8a8 8 0 0 0 10.2.93q2.43-1.68 4.71-3.5"></svg:path>`,
})
export class IonCloudOfflineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloudUploadIcon],svg[ion-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M473.66 210c-14-10.38-31.2-18-49.36-22.11a16.11 16.11 0 0 1-12.19-12.22c-7.8-34.75-24.59-64.55-49.27-87.13C334.15 62.25 296.21 47.79 256 47.79c-35.35 0-68 11.08-94.37 32.05a150.1 150.1 0 0 0-42.06 53a16 16 0 0 1-11.31 8.87c-26.75 5.4-50.9 16.87-69.34 33.12C13.46 197.33 0 227.24 0 261.39c0 34.52 14.49 66 40.79 88.76c25.12 21.69 58.94 33.64 95.21 33.64h104V230.42l-36.69 36.69a16 16 0 0 1-23.16-.56c-5.8-6.37-5.24-16.3.85-22.39l63.69-63.68a16 16 0 0 1 22.62 0L331 244.14c6.28 6.29 6.64 16.6.39 22.91a16 16 0 0 1-22.68.06L272 230.42v153.37h124c31.34 0 59.91-8.8 80.45-24.77c23.26-18.1 35.55-44 35.55-74.83c0-29.94-13.26-55.61-38.34-74.19M240 448.21a16 16 0 1 0 32 0v-64.42h-32Z"></svg:path>`,
})
export class IonCloudUploadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloudyIcon],svg[ion-cloudy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M376 432H116c-32.37 0-60.23-8.57-80.59-24.77C12.24 388.78 0 361.39 0 328c0-57.57 42-90.58 87.56-100.75a16 16 0 0 0 12.12-12.39c7.68-36.68 24.45-68.15 49.18-92A153.57 153.57 0 0 1 256 80c35.5 0 68.24 11.69 94.68 33.8a156.24 156.24 0 0 1 42.05 56a16 16 0 0 0 11.37 9.16c27 5.61 51.07 17.33 69.18 33.85C498.61 235.88 512 267.42 512 304c0 36-14.38 68.88-40.49 92.59C446.36 419.43 412.44 432 376 432"></svg:path>`,
})
export class IonCloudyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCloudyNightIcon],svg[ion-cloudy-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-29.44 12.09-54.25 35-71.74c12.1-9.26 27.2-16.17 43.33-20.05a16 16 0 0 0 11.81-12.21c7.15-32.54 22.25-60.49 44.33-81.75A139.82 139.82 0 0 1 232 160c32.33 0 62.15 10.65 86.24 30.79a142.2 142.2 0 0 1 37.65 49.54a16.06 16.06 0 0 0 11.12 9c24 5.22 45.42 15.78 61.62 30.56C451.77 301 464 329.82 464 363.2c0 32.85-13.13 62.87-37 84.52c-22.89 20.82-53.8 32.28-87 32.28m170.53-270.21a16.34 16.34 0 0 0-1.35-15.8a16 16 0 0 0-19.57-5.58c-10.7 4.65-24.48 7.17-39.92 7.28c-55.3.4-101.38-45-101.38-100.31c0-15.75 2.48-29.84 7.18-40.76a16.3 16.3 0 0 0-1.85-16.33a16 16 0 0 0-19.1-5c-38.63 16.82-66.18 51.51-75.27 92.54a4 4 0 0 0 3.19 4.79a162.54 162.54 0 0 1 76.31 35.59a172.6 172.6 0 0 1 39.64 47.84a16.35 16.35 0 0 0 9.54 7.64c23.89 7.17 45.1 18.9 62.25 34.54q4.44 4.07 8.48 8.42a4 4 0 0 0 5.16.57a129.1 129.1 0 0 0 46.69-55.43"></svg:path>`,
})
export class IonCloudyNightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCodeIcon],svg[ion-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 389a20.9 20.9 0 0 1-13.82-5.2l-128-112a21 21 0 0 1 0-31.6l128-112a21 21 0 0 1 27.66 31.61L63.89 256l109.94 96.19A21 21 0 0 1 160 389m192 0a21 21 0 0 1-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0 1 27.66-31.61l128 112a21 21 0 0 1 0 31.6l-128 112A20.9 20.9 0 0 1 352 389"></svg:path>`,
})
export class IonCodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCodeDownloadIcon],svg[ion-code-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="42" d="M160 368L32 256l128-112m192 224l128-112l-128-112M192 288.1l64 63.9l64-63.9M256 160v176.03"></svg:path>`,
})
export class IonCodeDownloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCodeSlashIcon],svg[ion-code-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 389a20.9 20.9 0 0 1-13.82-5.2l-128-112a21 21 0 0 1 0-31.6l128-112a21 21 0 0 1 27.66 31.61L63.89 256l109.94 96.19A21 21 0 0 1 160 389m192 0a21 21 0 0 1-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0 1 27.66-31.61l128 112a21 21 0 0 1 0 31.6l-128 112A20.9 20.9 0 0 1 352 389m-144 48a21 21 0 0 1-20.12-27l96-320a21 21 0 1 1 40.23 12l-96 320A21 21 0 0 1 208 437"></svg:path>`,
})
export class IonCodeSlashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCodeWorkingIcon],svg[ion-code-working-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="26" fill="currentColor" stroke="currentColor" stroke-miterlimit="10" stroke-width="10"></svg:circle><svg:circle cx="346" cy="256" r="26" fill="currentColor" stroke="currentColor" stroke-miterlimit="10" stroke-width="10"></svg:circle><svg:circle cx="166" cy="256" r="26" fill="currentColor" stroke="currentColor" stroke-miterlimit="10" stroke-width="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="42" d="M160 368L32 256l128-112m192 224l128-112l-128-112"></svg:path>`,
})
export class IonCodeWorkingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCoffeeIcon],svg[ion-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M383.1 257.4c.6-5.4.9-10 .9-13.8 0-19.6-3.3-19.7-16-19.7h-75.5c7.3-12 11.5-24.4 11.5-37 0-37.9-57.3-56.4-57.3-88 0-11.7 5.1-21.3 9.3-34.9-26.5 7-47.4 33.5-47.4 61.6 0 48.3 56.3 48.7 56.3 84.8 0 4.5-1.4 8.5-2.1 13.5h-55.9c.8-3 1.3-6.2 1.3-9.3 0-22.8-39.1-33.9-39.1-52.8 0-7 1-12.8 3.2-21-12.9 5.1-28.3 20-28.3 36.8 0 26.7 31.9 29.3 36.8 46.3H80c-12.7 0-16 .1-16 19.7 0 19.6 7.7 61.3 28.3 111s44.4 71.6 61.2 86.2l.1-.2c5.1 4.6 11.8 7.3 19.2 7.3h102.4c7.4 0 14.1-2.7 19.2-7.3l.1.2c9-7.8 20-17.8 31.4-32.9 4.7 2 9.8 3.7 15.4 5 8.4 2 16.8 3 24.8 3 24 0 45.6-9.2 60.8-25.8 13.4-14.6 21.1-34.4 21.1-54.2 0-38.9-28-71.4-64.9-78.5zm-17 126.8c-8.6 0-15.6-1.2-22.1-4.2 4-8 7.9-15.9 11.7-25.1 10.1-24.4 17.1-47 21.6-65.8 22 4.3 38.7 23.8 38.7 47.1 0 22.7-17.2 48-49.9 48z" fill="currentColor"></svg:path>`,
})
export class IonCoffeeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCogIcon],svg[ion-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 249.93a10.58 10.58 0 0 0-9.36-9.94L429 235.84a5.42 5.42 0 0 1-4.5-4.67c-.49-3.15-1-6.42-1.7-9.52a5.52 5.52 0 0 1 2.63-5.85l22.78-12.65a10.35 10.35 0 0 0 5-12.83l-3.95-10.9a10.32 10.32 0 0 0-12.13-6.51l-25.55 5a5.51 5.51 0 0 1-5.82-2.81c-1.49-2.79-3.11-5.63-4.8-8.42a5.6 5.6 0 0 1 .44-6.5l17-19.64a10.42 10.42 0 0 0 .39-13.76l-7.42-8.91a10.24 10.24 0 0 0-13.58-2l-22.37 13.43a5.39 5.39 0 0 1-6.39-.63c-2.47-2.17-5-4.26-7.37-6.19a5.45 5.45 0 0 1-1.72-6.21l9.26-24.4a10.35 10.35 0 0 0-4.31-13.07l-10.09-5.89a10.3 10.3 0 0 0-13.45 2.83L325 96.28a4.6 4.6 0 0 1-5.6 1.72c-.61-.25-5.77-2.36-9.78-3.7a5.42 5.42 0 0 1-3.74-5.23l.39-26.07a10.48 10.48 0 0 0-8.57-10.88l-11.45-2a10.45 10.45 0 0 0-11.75 7.17L266 82.1a5.46 5.46 0 0 1-5.36 3.65h-9.75a5.5 5.5 0 0 1-5.3-3.67l-8.46-24.67a10.46 10.46 0 0 0-11.77-7.25l-11.47 2a10.46 10.46 0 0 0-8.56 10.79l.4 26.16a5.45 5.45 0 0 1-3.86 5.25c-2.29.89-7.26 2.79-9.52 3.63c-2 .72-4.18-.07-5.94-2.1l-16.26-20A10.3 10.3 0 0 0 156.69 73l-10.06 5.83A10.36 10.36 0 0 0 142.31 92l9.25 24.34a5.54 5.54 0 0 1-1.7 6.23c-2.43 2-4.92 4-7.4 6.22a5.38 5.38 0 0 1-6.35.64L114 115.74a10.4 10.4 0 0 0-13.61 2L93 126.63a10.31 10.31 0 0 0 .37 13.75L110.45 160a5.42 5.42 0 0 1 .45 6.45c-1.71 2.72-3.34 5.58-4.82 8.44a5.53 5.53 0 0 1-5.86 2.82l-25.51-4.93a10.34 10.34 0 0 0-12.14 6.51l-4 10.88a10.38 10.38 0 0 0 5 12.85l22.78 12.65a5.39 5.39 0 0 1 2.65 5.92l-.24 1.27c-.52 2.79-1 5.43-1.46 8.24a5.48 5.48 0 0 1-4.46 4.64l-25.69 4.15A10.42 10.42 0 0 0 48 250.16v11.58A10.26 10.26 0 0 0 57.16 272l25.68 4.14a5.41 5.41 0 0 1 4.5 4.67c.49 3.16 1 6.42 1.7 9.52a5.52 5.52 0 0 1-2.63 5.85l-22.77 12.67a10.35 10.35 0 0 0-5 12.83l4 10.9a10.33 10.33 0 0 0 12.13 6.51l25.55-4.95a5.49 5.49 0 0 1 5.82 2.81c1.5 2.8 3.11 5.63 4.8 8.42a5.58 5.58 0 0 1-.44 6.5l-17 19.63a10.41 10.41 0 0 0-.5 13.77l7.41 8.91a10.23 10.23 0 0 0 13.58 2l22.37-13.43a5.39 5.39 0 0 1 6.39.63c2.48 2.17 5 4.26 7.37 6.19a5.47 5.47 0 0 1 1.73 6.21l-9.27 24.4a10.35 10.35 0 0 0 4.31 13.07l10.11 5.84a10.3 10.3 0 0 0 13.45-2.82L187 415.92c1.4-1.73 3.6-2.5 5.23-1.84c3.48 1.44 5.81 2.25 9.94 3.63a5.44 5.44 0 0 1 3.75 5.23l-.4 26.05a10.5 10.5 0 0 0 8.57 10.88l11.45 2a10.43 10.43 0 0 0 11.75-7.17l8.5-24.77a5.45 5.45 0 0 1 5.36-3.65h9.75a5.49 5.49 0 0 1 5.3 3.67l8.47 24.67a10.48 10.48 0 0 0 10 7.41a9.7 9.7 0 0 0 1.78-.16l11.47-2a10.46 10.46 0 0 0 8.56-10.79l-.4-26.16a5.43 5.43 0 0 1 3.75-5.2c3.84-1.29 6.54-2.33 8.91-3.25l.6-.23c3.1-1.07 4.6.23 5.47 1.31l16.75 20.63A10.3 10.3 0 0 0 355 439l10.07-5.83a10.35 10.35 0 0 0 4.31-13.1l-9.24-24.34a5.52 5.52 0 0 1 1.69-6.23c2.43-2 4.92-4 7.4-6.22a5.39 5.39 0 0 1 6.38-.62l22.39 13.4a10.39 10.39 0 0 0 13.61-2l7.4-8.9a10.31 10.31 0 0 0-.37-13.75l-17.06-19.67a5.42 5.42 0 0 1-.45-6.45c1.71-2.71 3.34-5.57 4.82-8.44a5.55 5.55 0 0 1 5.86-2.82l25.48 4.97a10.34 10.34 0 0 0 12.14-6.51l3.95-10.88a10.37 10.37 0 0 0-5-12.84l-22.8-12.67a5.4 5.4 0 0 1-2.61-5.89l.24-1.27c.52-2.79 1-5.43 1.46-8.24a5.48 5.48 0 0 1 4.46-4.64l25.69-4.14a10.43 10.43 0 0 0 9.18-10.28zm-282.45 94a15.8 15.8 0 0 1-25.47 2.66a135.06 135.06 0 0 1 .42-181.65a15.81 15.81 0 0 1 25.5 2.77l45.65 80.35a15.85 15.85 0 0 1 0 15.74ZM256 391.11a134.8 134.8 0 0 1-28.31-3a15.81 15.81 0 0 1-10.23-23.36l46-80a15.79 15.79 0 0 1 13.7-7.93h92.14a15.8 15.8 0 0 1 15.1 20.53c-17.49 54.32-68.4 93.76-128.4 93.76m7.51-163.9L218 147.07a15.81 15.81 0 0 1 10.31-23.3a134 134 0 0 1 27.69-2.88c60 0 110.91 39.44 128.37 93.79a15.8 15.8 0 0 1-15.1 20.53h-92a15.78 15.78 0 0 1-13.76-8"></svg:path>`,
})
export class IonCogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionColorFillIcon],svg[ion-color-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 480c-35.29 0-64-29.11-64-64.88c0-33.29 28.67-65.4 44.08-82.64c1.87-2.1 3.49-3.91 4.68-5.31a19.94 19.94 0 0 1 30.55 0c1.13 1.31 2.63 3 4.36 4.93c15.5 17.3 44.33 49.51 44.33 83.05c0 35.74-28.71 64.85-64 64.85m-17.77-203.36L166.89 47.22a52.1 52.1 0 0 0-73.6 0l-4.51 4.51a53.2 53.2 0 0 0-15.89 37.33A51.66 51.66 0 0 0 88.14 126l41.51 41.5L45 252a44.52 44.52 0 0 0-13 32a42.8 42.8 0 0 0 13.5 30.84l131.24 126a44 44 0 0 0 61.08-.18l124.11-120.28a15.6 15.6 0 0 1 8.23-4.29a69 69 0 0 1 11.93-.86h.3a22.53 22.53 0 0 0 15.84-38.59M152.29 144.85l-41.53-41.52a20 20 0 0 1 0-28.34l5.16-5.15a20.07 20.07 0 0 1 28.39 0L186 111.21Z"></svg:path>`,
})
export class IonColorFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionColorFilterIcon],svg[ion-color-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M253.72 202.53a4 4 0 0 0 4.56 0a151.88 151.88 0 0 1 128.44-20.41a4 4 0 0 0 5.15-4C388.8 105.86 329 48 256 48s-132.8 57.86-135.87 130.15a4 4 0 0 0 5.15 4a151.88 151.88 0 0 1 128.44 20.41Zm151.59 10.03a152.53 152.53 0 0 1-83.08 108.23a4 4 0 0 0-2.28 3.69c0 1.17.05 2.34.05 3.52a151.58 151.58 0 0 1-47.15 109.94a4 4 0 0 0 .64 6.31A135.24 135.24 0 0 0 344 464c72.07 0 134.1-60.28 136-132.34a136.07 136.07 0 0 0-68.76-121.87a4 4 0 0 0-5.93 2.77"></svg:path><svg:path fill="currentColor" d="M390.57 203.67a4 4 0 0 0-2.69-4.4a135.84 135.84 0 0 0-114.4 12.49a4 4 0 0 0-.64 6.29a151.92 151.92 0 0 1 44.47 81.4a4 4 0 0 0 5.94 2.72a136.29 136.29 0 0 0 67.32-98.5M192 328c0-1.18 0-2.35.05-3.52a4 4 0 0 0-2.28-3.69a152.53 152.53 0 0 1-83.08-108.23a4 4 0 0 0-5.88-2.77a136.07 136.07 0 0 0-68.76 121.87C34 403.72 96 464 168.05 464a135.24 135.24 0 0 0 70.46-19.75a4 4 0 0 0 .64-6.31A151.58 151.58 0 0 1 192 328"></svg:path><svg:path fill="currentColor" d="M168 192a135.3 135.3 0 0 0-43.88 7.27a4 4 0 0 0-2.69 4.4a136.29 136.29 0 0 0 67.32 98.5a4 4 0 0 0 5.94-2.72a151.92 151.92 0 0 1 44.47-81.4a4 4 0 0 0-.64-6.29A135.2 135.2 0 0 0 168 192m88 144a151.4 151.4 0 0 1-42.72-6.12a4 4 0 0 0-5.15 4a135.7 135.7 0 0 0 45.18 95.4a4 4 0 0 0 5.38 0a135.7 135.7 0 0 0 45.18-95.4a4 4 0 0 0-5.15-4A151.4 151.4 0 0 1 256 336m46.57-27.67a135.94 135.94 0 0 0-43.87-81.58a4.06 4.06 0 0 0-5.4 0a135.94 135.94 0 0 0-43.87 81.58a4 4 0 0 0 2.69 4.4a136.06 136.06 0 0 0 87.76 0a4 4 0 0 0 2.69-4.4"></svg:path>`,
})
export class IonColorFilterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionColorPaletteIcon],svg[ion-color-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m441 336.2l-.06-.05c-9.93-9.18-22.78-11.34-32.16-12.92l-.69-.12c-9.05-1.49-10.48-2.5-14.58-6.17c-2.44-2.17-5.35-5.65-5.35-9.94s2.91-7.77 5.34-9.94l30.28-26.87c25.92-22.91 40.2-53.66 40.2-86.59s-14.25-63.68-40.2-86.6c-35.89-31.59-85-49-138.37-49C223.72 48 162 71.37 116 112.11c-43.87 38.77-68 90.71-68 146.24s24.16 107.47 68 146.23c21.75 19.24 47.49 34.18 76.52 44.42a266.2 266.2 0 0 0 86.87 15h1.81c61 0 119.09-20.57 159.39-56.4c9.7-8.56 15.15-20.83 15.34-34.56c.21-14.17-5.37-27.95-14.93-36.84M112 208a32 32 0 1 1 32 32a32 32 0 0 1-32-32m40 135a32 32 0 1 1 32-32a32 32 0 0 1-32 32m40-199a32 32 0 1 1 32 32a32 32 0 0 1-32-32m64 271a48 48 0 1 1 48-48a48 48 0 0 1-48 48m72-239a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonColorPaletteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionColorWandIcon],svg[ion-color-wand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 208H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16m28.1-67.9c-4.2 0-8.3-1.7-11.3-4.7l-33.9-33.9c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l33.9 33.9c6.3 6.2 6.3 16.4 0 22.6c-3 3-7 4.7-11.3 4.7M192 112c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16s16 7.2 16 16v48c0 8.8-7.2 16-16 16m67.9 28.1c-8.8 0-16-7.2-16-16c0-4.2 1.7-8.3 4.7-11.3l33.9-33.9c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-33.9 33.9c-3 3-7.1 4.7-11.3 4.7M90.2 309.8c-8.8 0-16-7.2-16-16c0-4.2 1.7-8.3 4.7-11.3l33.9-33.9c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-33.9 33.9c-3 3-7.1 4.7-11.3 4.7m144-142.8c-18.4-18.7-48.5-19-67.2-.7s-19 48.5-.7 67.2l.7.7l39.5 39.5c3.1 3.1 8.2 3.1 11.3 0l55.9-55.9c3.1-3.1 3.1-8.2 0-11.3zM457 389.8L307.6 240.4c-3.1-3.1-8.2-3.1-11.3 0l-55.9 55.9c-3.1 3.1-3.1 8.2 0 11.3L389.8 457c18.4 18.7 48.5 19 67.2.7c18.7-18.4 19-48.5.7-67.2c-.2-.2-.4-.5-.7-.7"></svg:path>`,
})
export class IonColorWandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCompassIcon],svg[ion-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="24" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m105.07 113.33l-46.88 117.2a64 64 0 0 1-35.66 35.66l-117.2 46.88a8 8 0 0 1-10.4-10.4l46.88-117.2a64 64 0 0 1 35.66-35.66l117.2-46.88a8 8 0 0 1 10.4 10.4"></svg:path>`,
})
export class IonCompassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionComposeIcon],svg[ion-compose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M442.8 99.6l-30.4-30.4c-7-6.9-18.2-6.9-25.1 0L355.5 101l55.5 55.5 31.8-31.7c6.9-7.1 6.9-18.3 0-25.2z" fill="currentColor"></svg:path><svg:path d="M346.1 110.5L174.1 288 160 352l64-14.1 176.6-173z" fill="currentColor"></svg:path><svg:path d="M384 256v150c0 5.1-3.9 10.1-9.2 10.1s-269-.1-269-.1c-5.6 0-9.8-5.4-9.8-10V138c0-5 4.7-10 10.6-10H256l32-32H87.4c-13 0-23.4 10.3-23.4 23.3v305.3c0 12.9 10.5 23.4 23.4 23.4h305.3c12.9 0 23.3-10.5 23.3-23.4V224l-32 32z" fill="currentColor"></svg:path>`,
})
export class IonComposeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionConnectionBarsIcon],svg[ion-connection-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M80 352h64v64H80z" fill="currentColor"></svg:path><svg:path d="M176 288h64v128h-64z" fill="currentColor"></svg:path><svg:path d="M272 192h64v224h-64z" fill="currentColor"></svg:path><svg:path d="M368 96h64v320h-64z" fill="currentColor"></svg:path>`,
})
export class IonConnectionBarsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionConstructIcon],svg[ion-construct-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M503.58 126.2a16.85 16.85 0 0 0-27.07-4.55l-51.15 51.15a11.15 11.15 0 0 1-15.66 0l-22.48-22.48a11.17 11.17 0 0 1 0-15.67l50.88-50.89a16.85 16.85 0 0 0-5.27-27.4c-39.71-17-89.08-7.45-120 23.29c-26.81 26.61-34.83 68-22 113.7a11 11 0 0 1-3.16 11.1L114.77 365.1a56.76 56.76 0 1 0 80.14 80.18L357 272.08a11 11 0 0 1 10.9-3.17c45 12 86 4 112.43-22c15.2-15 25.81-36.17 29.89-59.71c3.83-22.2 1.41-44.44-6.64-61"></svg:path><svg:path fill="currentColor" d="M437.33 378.41c-13.94-11.59-43.72-38.4-74.07-66.22l-66.07 70.61c28.24 30 53.8 57.85 65 70.88l.07.08A30 30 0 0 0 383.72 464h1.1a30.1 30.1 0 0 0 21-8.62l.07-.07l33.43-33.37a29.46 29.46 0 0 0-2-43.53ZM118.54 214.55a20.5 20.5 0 0 0-3-10.76a2.76 2.76 0 0 1 2.62-4.22h.06c.84.09 5.33.74 11.7 4.61c4.73 2.87 18.23 12.08 41.73 35.54a34.23 34.23 0 0 0 7.22 22.12l66.23-61.55a33.73 33.73 0 0 0-21.6-9.2a3 3 0 0 1-.21-.26l-.65-.69l-24.54-33.84a28.45 28.45 0 0 1-4-26.11a35.23 35.23 0 0 1 11.78-16.35c5.69-4.41 18.53-9.72 29.44-10.62a53 53 0 0 1 15.19.94a66 66 0 0 1 7.06 2.13a15.5 15.5 0 0 0 2.15.63a16 16 0 0 0 16.38-25.06c-.26-.35-1.32-1.79-2.89-3.73a92 92 0 0 0-9.6-10.36c-8.15-7.36-29.27-19.77-57-19.77a123.1 123.1 0 0 0-46.3 9c-38.37 15.45-63.47 36.58-75.01 47.79l-.09.09A222 222 0 0 0 63.7 129.5a27 27 0 0 0-4.7 11.77a7.33 7.33 0 0 1-7.71 6.17H50.2a20.65 20.65 0 0 0-14.59 5.9L6.16 182.05l-.32.32a20.89 20.89 0 0 0-.24 28.72c.19.2.37.39.57.58L53.67 258a21 21 0 0 0 14.65 6a20.65 20.65 0 0 0 14.59-5.9l29.46-28.79a20.5 20.5 0 0 0 6.17-14.76"></svg:path>`,
})
export class IonConstructIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionContractIcon],svg[ion-contract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 416V304h112m-101.8 10.23L432 432M208 96v112H96m101.8-10.23L80 80m336 128H304V96m10.23 101.8L432 80M96 304h112v112m-10.23-101.8L80 432"></svg:path>`,
})
export class IonContractIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionContrastIcon],svg[ion-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32A224 224 0 0 0 97.61 414.39A224 224 0 1 0 414.39 97.61A222.53 222.53 0 0 0 256 32M64 256c0-105.87 86.13-192 192-192v384c-105.87 0-192-86.13-192-192"></svg:path>`,
})
export class IonContrastIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCopyIcon],svg[ion-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408 480H184a72 72 0 0 1-72-72V184a72 72 0 0 1 72-72h224a72 72 0 0 1 72 72v224a72 72 0 0 1-72 72"></svg:path><svg:path fill="currentColor" d="M160 80h235.88A72.12 72.12 0 0 0 328 32H104a72 72 0 0 0-72 72v224a72.12 72.12 0 0 0 48 67.88V160a80 80 0 0 1 80-80"></svg:path>`,
})
export class IonCopyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCreateIcon],svg[ion-create-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38M399.34 90L218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0"></svg:path><svg:path fill="currentColor" d="M386.34 193.66L264.45 315.79A41.1 41.1 0 0 1 247.58 326l-25.9 8.67a35.92 35.92 0 0 1-44.33-44.33l8.67-25.9a41.1 41.1 0 0 1 10.19-16.87l122.13-121.91a8 8 0 0 0-5.65-13.66H104a56 56 0 0 0-56 56v240a56 56 0 0 0 56 56h240a56 56 0 0 0 56-56V199.31a8 8 0 0 0-13.66-5.65"></svg:path>`,
})
export class IonCreateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCropIcon],svg[ion-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M458 346H192a26 26 0 0 1-26-26V54a22 22 0 0 0-44 0v68H54a22 22 0 0 0 0 44h68v154a70.08 70.08 0 0 0 70 70h154v68a22 22 0 0 0 44 0v-68h68a22 22 0 0 0 0-44"></svg:path><svg:path fill="currentColor" d="M214 166h106a26 26 0 0 1 26 26v106a22 22 0 0 0 44 0V192a70.08 70.08 0 0 0-70-70H214a22 22 0 0 0 0 44"></svg:path>`,
})
export class IonCropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCubeIcon],svg[ion-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M440.9 136.3a4 4 0 0 0 0-6.91L288.16 40.65a64.14 64.14 0 0 0-64.33 0L71.12 129.39a4 4 0 0 0 0 6.91L254 243.88a4 4 0 0 0 4.06 0ZM54 163.51a4 4 0 0 0-6 3.49v173.89a48 48 0 0 0 23.84 41.39L234 479.51a4 4 0 0 0 6-3.46V274.3a4 4 0 0 0-2-3.46ZM272 275v201a4 4 0 0 0 6 3.46l162.15-97.23A48 48 0 0 0 464 340.89V167a4 4 0 0 0-6-3.45l-184 108a4 4 0 0 0-2 3.45"></svg:path>`,
})
export class IonCubeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCutIcon],svg[ion-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M103.48 224a71.64 71.64 0 0 0 44.76-15.66l41.5 16.89l6.82-12.63a39 39 0 0 1 4.32-6.37l14.22-14.42l-41.17-24.94A72 72 0 1 0 103.48 224m0-112a40 40 0 1 1-40 40a40 40 0 0 1 40-40"></svg:path><svg:path fill="currentColor" d="m480 169l-5.52-12.58c-4.48-10.42-14.74-16-32.78-17.85c-10.12-1-26.95-1.24-49.69 3.81c-20 4.45-122.14 28.2-164.95 58.62c-20.25 14.39-24.06 33.67-27.06 49.16c-2.78 14.14-5 25.31-18 35c-15 11.14-27.27 16.38-33.58 18.6a71.74 71.74 0 1 0 24.79 38Zm-224.52 87a16 16 0 1 1 16-16a16 16 0 0 1-16 16m-152 144a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path><svg:path fill="currentColor" d="m343.79 259.87l-83.74 48.18l27.63 13.08l3.62 1.74C310 331.92 359.74 356 410.53 359c3.89.23 7.47.34 10.78.34C442 359.31 453 354 459.75 350L480 336Z"></svg:path>`,
})
export class IonCutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDesktopIcon],svg[ion-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 352a48.05 48.05 0 0 0 48 48h133.88l-4 32H144a16 16 0 0 0 0 32h224a16 16 0 0 0 0-32h-49.88l-4-32H448a48.05 48.05 0 0 0 48-48v-48H16Zm240-16a16 16 0 1 1-16 16a16 16 0 0 1 16-16M496 96a48.05 48.05 0 0 0-48-48H64a48.05 48.05 0 0 0-48 48v192h480Z"></svg:path>`,
})
export class IonDesktopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDiamondIcon],svg[ion-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M121.72 32a4 4 0 0 0-3.72 5.56l2.3 5.43l40.7 94.9a4 4 0 0 0 6.88.82L243 38.4a4 4 0 0 0-3.2-6.4Zm298.21 26.06l-41.28 96.37a4 4 0 0 0 3.68 5.57h101a4 4 0 0 0 3.4-6.11L427 57.53a4 4 0 0 0-7.07.53M85 57.57l-59.71 96.32a4 4 0 0 0 3.4 6.11h101a4 4 0 0 0 3.67-5.58L92 58.1a4 4 0 0 0-7-.53M393.27 32H267.82a1.94 1.94 0 0 0-1.56 3.11l79.92 106.46a1.94 1.94 0 0 0 3.34-.4L391.6 43l3.4-8.34a1.92 1.92 0 0 0-1.7-2.66ZM239 448l-89.43-253.49A3.78 3.78 0 0 0 146 192H25.7a3.72 3.72 0 0 0-2.95 6l216 279.81a5.06 5.06 0 0 0 6.39 1.37a5 5 0 0 0 2.39-6.08Zm247.3-256H366a3.75 3.75 0 0 0-3.54 2.51l-98.2 278.16a5.21 5.21 0 0 0 2.42 6.31a5.22 5.22 0 0 0 6.61-1.39L489.25 198a3.72 3.72 0 0 0-2.95-6M259.2 78.93l56 74.67a4 4 0 0 1-3.2 6.4H200a4 4 0 0 1-3.2-6.4l56-74.67a4 4 0 0 1 6.4 0m-7 310.31l-67.7-191.91a4 4 0 0 1 3.77-5.33h135.46a4 4 0 0 1 3.77 5.33l-67.73 191.91a4 4 0 0 1-7.54 0Z"></svg:path>`,
})
export class IonDiamondIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDiceIcon],svg[ion-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M440.88 129.37L288.16 40.62a64.14 64.14 0 0 0-64.33 0L71.12 129.37a4 4 0 0 0 0 6.9L254 243.85a4 4 0 0 0 4.06 0L440.9 136.27a4 4 0 0 0-.02-6.9M256 152c-13.25 0-24-7.16-24-16s10.75-16 24-16s24 7.16 24 16s-10.75 16-24 16m-18 118.81L54 163.48a4 4 0 0 0-6 3.46v173.92a48 48 0 0 0 23.84 41.39L234 479.48a4 4 0 0 0 6-3.46V274.27a4 4 0 0 0-2-3.46M96 368c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m96-32c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m266-172.49L274 271.56a4 4 0 0 0-2 3.45V476a4 4 0 0 0 6 3.46l162.15-97.23A48 48 0 0 0 464 340.86V167a4 4 0 0 0-6-3.49M320 424c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m96 32c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24"></svg:path>`,
})
export class IonDiceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDiscIcon],svg[ion-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 176a80 80 0 1 0 80 80a80.09 80.09 0 0 0-80-80m0 112a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path><svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M256 368a112 112 0 1 1 112-112a112.12 112.12 0 0 1-112 112"></svg:path>`,
})
export class IonDiscIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDocumentIcon],svg[ion-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4"></svg:path><svg:path fill="currentColor" d="M419.22 188.59L275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16h129.81a2 2 0 0 0 1.41-3.41"></svg:path>`,
})
export class IonDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDocumentAttachIcon],svg[ion-document-attach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M460 240H320a48 48 0 0 1-48-48V52a4 4 0 0 0-4-4h-53.25a65.4 65.4 0 0 0-6.5-9.81C196.72 23.88 179.59 16 160 16c-37.68 0-64 29.61-64 72v144c0 25 20.34 40 40 40a39.57 39.57 0 0 0 40-40V80a16 16 0 0 0-32 0v152a7.75 7.75 0 0 1-8 8c-2.23 0-8-1.44-8-8V88c0-19.34 8.41-40 32-40c29.69 0 32 30.15 32 39.38v138.75c0 17.45-5.47 33.23-15.41 44.46C166.5 282 152.47 288 136 288s-30.5-6-40.59-17.41C85.47 259.36 80 243.58 80 226.13V144a16 16 0 0 0-32 0v82.13c0 51.51 33.19 89.63 80 93.53V432a64 64 0 0 0 64 64h208a64 64 0 0 0 64-64V244a4 4 0 0 0-4-4"></svg:path><svg:path fill="currentColor" d="M320 208h129.81a2 2 0 0 0 1.41-3.41L307.41 60.78a2 2 0 0 0-3.41 1.41V192a16 16 0 0 0 16 16"></svg:path>`,
})
export class IonDocumentAttachIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDocumentLockIcon],svg[ion-document-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 192h129.81a2 2 0 0 0 1.41-3.41L275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16m-32 80c-8.82 0-16 6.28-16 14v18h32v-18c0-7.72-7.18-14-16-14"></svg:path><svg:path fill="currentColor" d="M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4m-92 160a32 32 0 0 1-32 32h-96a32 32 0 0 1-32-32v-48a32 32 0 0 1 32-32v-18c0-25.36 21.53-46 48-46s48 20.64 48 46v18a32 32 0 0 1 32 32Z"></svg:path>`,
})
export class IonDocumentLockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDocumentTextIcon],svg[ion-document-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4m-92 160H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32m0-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32"></svg:path><svg:path fill="currentColor" d="M419.22 188.59L275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16h129.81a2 2 0 0 0 1.41-3.41"></svg:path>`,
})
export class IonDocumentTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDocumentsIcon],svg[ion-documents-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M298.39 248a4 4 0 0 0 2.86-6.8l-78.4-79.72a4 4 0 0 0-6.85 2.81V236a12 12 0 0 0 12 12Z"></svg:path><svg:path fill="currentColor" d="M197 267a43.67 43.67 0 0 1-13-31v-92h-72a64.19 64.19 0 0 0-64 64v224a64 64 0 0 0 64 64h144a64 64 0 0 0 64-64V280h-92a43.6 43.6 0 0 1-31-13m175-147h70.39a4 4 0 0 0 2.86-6.8l-78.4-79.72a4 4 0 0 0-6.85 2.81V108a12 12 0 0 0 12 12"></svg:path><svg:path fill="currentColor" d="M372 152a44.34 44.34 0 0 1-44-44V16H220a60.07 60.07 0 0 0-60 60v36h42.12A40.8 40.8 0 0 1 231 124.14l109.16 111a41.1 41.1 0 0 1 11.83 29V400h53.05c32.51 0 58.95-26.92 58.95-60V152Z"></svg:path>`,
})
export class IonDocumentsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDownloadIcon],svg[ion-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M376 160H272v153.37l52.69-52.68a16 16 0 0 1 22.62 22.62l-80 80a16 16 0 0 1-22.62 0l-80-80a16 16 0 0 1 22.62-22.62L240 313.37V160H136a56.06 56.06 0 0 0-56 56v208a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V216a56.06 56.06 0 0 0-56-56M272 48a16 16 0 0 0-32 0v112h32Z"></svg:path>`,
})
export class IonDownloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDragIcon],svg[ion-drag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M0 144h512v32H0z" fill="currentColor"></svg:path><svg:path d="M0 240h512v32H0z" fill="currentColor"></svg:path><svg:path d="M0 336h512v32H0z" fill="currentColor"></svg:path>`,
})
export class IonDragIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionDuplicateIcon],svg[ion-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408 112H184a72 72 0 0 0-72 72v224a72 72 0 0 0 72 72h224a72 72 0 0 0 72-72V184a72 72 0 0 0-72-72m-32.45 200H312v63.55c0 8.61-6.62 16-15.23 16.43A16 16 0 0 1 280 376v-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 216 280h64v-63.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 312 216v64h64a16 16 0 0 1 16 16.77c-.42 8.61-7.84 15.23-16.45 15.23"></svg:path><svg:path fill="currentColor" d="M395.88 80A72.12 72.12 0 0 0 328 32H104a72 72 0 0 0-72 72v224a72.12 72.12 0 0 0 48 67.88V160a80 80 0 0 1 80-80Z"></svg:path>`,
})
export class IonDuplicateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEarIcon],svg[ion-ear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16C159 16 80 95 80 192v206.57a97.6 97.6 0 0 0 28 68.49A94.5 94.5 0 0 0 176 496c36.86 0 67.18-15.62 90.12-46.42c4.48-6 9.55-14.74 15.42-24.85c15.32-26.37 36.29-62.47 63.17-80.74c25.77-17.51 47.23-39.54 62-63.72C423.51 252.94 432 223.24 432 192c0-97-78.95-176-176-176m96 184a16 16 0 0 1-16-16c0-39.7-35.89-72-80-72s-80 32.3-80 72v30.42c27.19-7.84 58.4-6.72 64.28-6.42a48 48 0 0 1 38.6 75.9c-.3.41-.61.81-.95 1.2c-16.55 19-36 45.48-38.46 55a16 16 0 0 1-30.94-8.14c5.51-20.94 36.93-58.2 44.66-67.15A16 16 0 0 0 239.82 240h-.88c-16.6-.89-45.89.8-62.94 8.31V304a16 16 0 0 1-32 0V184c0-57.35 50.24-104 112-104s112 46.65 112 104a16 16 0 0 1-16 16"></svg:path>`,
})
export class IonEarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEarthIcon],svg[ion-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.74A224 224 0 1 0 97.61 414.52A224 224 0 1 0 414.39 97.74M64 256.13a191.6 191.6 0 0 1 6.7-50.31c7.34 15.8 18 29.45 25.25 45.66c9.37 20.84 34.53 15.06 45.64 33.32c9.86 16.21-.67 36.71 6.71 53.67c5.36 12.31 18 15 26.72 24c8.91 9.08 8.72 21.52 10.08 33.36a305 305 0 0 0 7.45 41.27c0 .1 0 .21.08.31C117.8 411.13 64 339.8 64 256.13m192 192a193 193 0 0 1-32-2.68c.11-2.71.16-5.24.43-7c2.43-15.9 10.39-31.45 21.13-43.35c10.61-11.74 25.15-19.68 34.11-33c8.78-13 11.41-30.5 7.79-45.69c-5.33-22.44-35.82-29.93-52.26-42.1c-9.45-7-17.86-17.82-30.27-18.7c-5.72-.4-10.51.83-16.18-.63c-5.2-1.35-9.28-4.15-14.82-3.42c-10.35 1.36-16.88 12.42-28 10.92c-10.55-1.41-21.42-13.76-23.82-23.81c-3.08-12.92 7.14-17.11 18.09-18.26c4.57-.48 9.7-1 14.09.68c5.78 2.14 8.51 7.8 13.7 10.66c9.73 5.34 11.7-3.19 10.21-11.83c-2.23-12.94-4.83-18.21 6.71-27.12c8-6.14 14.84-10.58 13.56-21.61c-.76-6.48-4.31-9.41-1-15.86c2.51-4.91 9.4-9.34 13.89-12.27c11.59-7.56 49.65-7 34.1-28.16c-4.57-6.21-13-17.31-21-18.83c-10-1.89-14.44 9.27-21.41 14.19c-7.2 5.09-21.22 10.87-28.43 3c-9.7-10.59 6.43-14.06 10-21.46c1.65-3.45 0-8.24-2.78-12.75q5.41-2.28 11-4.23a15.6 15.6 0 0 0 8 3c6.69.44 13-3.18 18.84 1.38c6.48 5 11.15 11.32 19.75 12.88c8.32 1.51 17.13-3.34 19.19-11.86c1.25-5.18 0-10.65-1.2-16a190.83 190.83 0 0 1 105 32.21c-2-.76-4.39-.67-7.34.7c-6.07 2.82-14.67 10-15.38 17.12c-.81 8.08 11.11 9.22 16.77 9.22c8.5 0 17.11-3.8 14.37-13.62c-1.19-4.26-2.81-8.69-5.42-11.37a193 193 0 0 1 18 14.14c-.09.09-.18.17-.27.27c-5.76 6-12.45 10.75-16.39 18.05c-2.78 5.14-5.91 7.58-11.54 8.91c-3.1.73-6.64 1-9.24 3.08c-7.24 5.7-3.12 19.4 3.74 23.51c8.67 5.19 21.53 2.75 28.07-4.66c5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0 1 10.82 4.41c3.8 3.94 3.05 7.62 3.86 12.54c1.43 8.74 9.14 4 13.83-.41a192 192 0 0 1 9.24 18.77c-5.16 7.43-9.26 15.53-21.67 6.87c-7.43-5.19-12-12.72-21.33-15.06c-8.15-2-16.5.08-24.55 1.47c-9.15 1.59-20 2.29-26.94 9.22c-6.71 6.68-10.26 15.62-17.4 22.33c-13.81 13-19.64 27.19-10.7 45.57c8.6 17.67 26.59 27.26 46 26c19.07-1.27 38.88-12.33 38.33 15.38c-.2 9.81 1.85 16.6 4.86 25.71c2.79 8.4 2.6 16.54 3.24 25.21a158 158 0 0 0 4.74 30.07A191.75 191.75 0 0 1 256 448.13"></svg:path>`,
})
export class IonEarthIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEaselIcon],svg[ion-easel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="352" height="208" x="80" y="112" fill="currentColor" rx="12" ry="12"></svg:rect><svg:path fill="currentColor" d="M432 64H272V48a16 16 0 0 0-32 0v16H80a48.05 48.05 0 0 0-48 48v208a48.05 48.05 0 0 0 48 48h42.79l-26.17 91.6a16 16 0 1 0 30.76 8.8L156.07 368H240v48a16 16 0 0 0 32 0v-48h83.93l28.69 100.4a16 16 0 1 0 30.76-8.8L389.21 368H432a48.05 48.05 0 0 0 48-48V112a48.05 48.05 0 0 0-48-48m16 256a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V112a16 16 0 0 1 16-16h352a16 16 0 0 1 16 16Z"></svg:path>`,
})
export class IonEaselIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEditIcon],svg[ion-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M163 439.573l-90.569-90.569L322.78 98.656l90.57 90.569z" fill="currentColor"></svg:path><svg:path d="M471.723 88.393l-48.115-48.114c-11.723-11.724-31.558-10.896-44.304 1.85l-45.202 45.203 90.569 90.568 45.202-45.202c12.743-12.746 13.572-32.582 1.85-44.305z" fill="currentColor"></svg:path><svg:path d="M64.021 363.252L32 480l116.737-32.021z" fill="currentColor"></svg:path>`,
})
export class IonEditIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEggIcon],svg[ion-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 480c-52.57 0-96.72-17.54-127.7-50.73C96.7 395.4 80 346.05 80 286.55C80 230.5 101.48 168 138.93 115C175.65 63 219.41 32 256 32s80.35 31 117.07 83C410.52 168 432 230.5 432 286.55c0 59.5-16.7 108.85-48.3 142.72C352.72 462.46 308.57 480 256 480"></svg:path>`,
})
export class IonEggIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEjectIcon],svg[ion-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M399 320c10 0 16.8-7.1 16.8-15.9 0-3.3-1.1-6.1-2.8-9L275.3 104.7c-4.6-5.3-11.5-8.7-19.3-8.7-7.7 0-14.6 3.4-19.2 8.7l-138 190.8c-1.7 2.6-2.6 5.5-2.6 8.7 0 8.7 6.8 15.8 16.8 15.8h286z" fill="currentColor"></svg:path><svg:path d="M403.7 352H108.4c-6.8 0-12.4 5.4-12.4 12.2v39.6c0 6.7 5.5 12.2 12.4 12.2h295.3c6.8 0 12.3-5.5 12.3-12.2v-39.6c0-6.8-5.5-12.2-12.3-12.2z" fill="currentColor"></svg:path>`,
})
export class IonEjectIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEllipseIcon],svg[ion-ellipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208s-93.31 208-208 208"></svg:path>`,
})
export class IonEllipseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEllipsisHorizontalIcon],svg[ion-ellipsis-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="48" fill="currentColor"></svg:circle><svg:circle cx="416" cy="256" r="48" fill="currentColor"></svg:circle><svg:circle cx="96" cy="256" r="48" fill="currentColor"></svg:circle>`,
})
export class IonEllipsisHorizontalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEllipsisHorizontalCircleIcon],svg[ion-ellipsis-horizontal-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m-90 234a26 26 0 1 1 26-26a26 26 0 0 1-26 26m90 0a26 26 0 1 1 26-26a26 26 0 0 1-26 26m90 0a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class IonEllipsisHorizontalCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEllipsisVerticalIcon],svg[ion-ellipsis-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="48" fill="currentColor"></svg:circle><svg:circle cx="256" cy="416" r="48" fill="currentColor"></svg:circle><svg:circle cx="256" cy="96" r="48" fill="currentColor"></svg:circle>`,
})
export class IonEllipsisVerticalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEllipsisVerticalCircleIcon],svg[ion-ellipsis-vertical-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208m-234-90a26 26 0 1 1 26 26a26 26 0 0 1-26-26m0 90a26 26 0 1 1 26 26a26 26 0 0 1-26-26m0 90a26 26 0 1 1 26 26a26 26 0 0 1-26-26"></svg:path>`,
})
export class IonEllipsisVerticalCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEmailIcon],svg[ion-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M67 148.7c11 5.8 163.8 89.1 169.5 92.1 5.7 3 11.5 4.4 20.5 4.4s14.8-1.4 20.5-4.4c5.7-3 158.5-86.3 169.5-92.1 4.1-2.1 11-5.9 12.5-10.2 2.6-7.6-.2-10.5-11.3-10.5H65.8c-11.1 0-13.9 3-11.3 10.5 1.5 4.4 8.4 8.1 12.5 10.2z" fill="currentColor"></svg:path><svg:path d="M455.7 153.2c-8.2 4.2-81.8 56.6-130.5 88.1l82.2 92.5c2 2 2.9 4.4 1.8 5.6-1.2 1.1-3.8.5-5.9-1.4l-98.6-83.2c-14.9 9.6-25.4 16.2-27.2 17.2-7.7 3.9-13.1 4.4-20.5 4.4s-12.8-.5-20.5-4.4c-1.9-1-12.3-7.6-27.2-17.2L110.7 338c-2 2-4.7 2.6-5.9 1.4-1.2-1.1-.3-3.6 1.7-5.6l82.1-92.5c-48.7-31.5-123.1-83.9-131.3-88.1-8.8-4.5-9.3.8-9.3 4.9v205c0 9.3 13.7 20.9 23.5 20.9h371c9.8 0 21.5-11.7 21.5-20.9v-205c0-4.2.6-9.4-8.3-4.9z" fill="currentColor"></svg:path>`,
})
export class IonEmailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEmailUnreadIcon],svg[ion-email-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="432" cy="160" r="64" fill="currentColor"></svg:circle><svg:path d="M225 160H33.799c-11.1 0-13.898 3-11.299 10.5 1.5 4.4 8.4 8.1 12.5 10.2 11 5.8 163.799 89.1 169.5 92.1 5.699 3 11.5 4.4 20.5 4.4s14.799-1.4 20.5-4.4c3.79-1.995 72.625-39.497 121.559-66.107C357.594 193.551 352 177.433 352 160H225z" fill="currentColor"></svg:path><svg:path d="M293.199 273.3l82.201 92.5c2 2 2.898 4.4 1.799 5.601-1.199 1.1-3.799.5-5.9-1.4l-98.6-83.2c-14.9 9.601-25.4 16.2-27.199 17.2-7.701 3.9-13.1 4.4-20.5 4.4s-12.801-.5-20.5-4.4c-1.9-1-12.301-7.6-27.201-17.2l-98.6 83.2c-2 2-4.699 2.6-5.9 1.4C71.6 370.3 72.5 367.8 74.5 365.8l82.1-92.5c-48.7-31.5-123.1-83.9-131.301-88.1C16.5 180.7 16 186 16 190.1v205c0 9.3 13.699 20.9 23.5 20.9h371c9.799 0 21.5-11.7 21.5-20.9V240c-21.726 0-41.416-8.673-55.832-22.729-26.001 17.902-57.808 39.754-82.969 56.029z" fill="currentColor"></svg:path>`,
})
export class IonEmailUnreadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEnterIcon],svg[ion-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 136v104h153.37l-52.68-52.69a16 16 0 0 1 22.62-22.62l80 80a16 16 0 0 1 0 22.62l-80 80a16 16 0 0 1-22.62-22.62L313.37 272H160v104a56.06 56.06 0 0 0 56 56h208a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56H216a56.06 56.06 0 0 0-56 56M48 240a16 16 0 0 0 0 32h112v-32Z"></svg:path>`,
})
export class IonEnterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionErlenmeyerFlaskIcon],svg[ion-erlenmeyer-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M438.815 395.7L338.509 246.2c-12.8-20.3-19.009-44.4-19.009-70.2V83c0-19.5 12.592-33.25 15.009-42.083 2.296-8.392.512-8.417-15.188-8.417H192.526c-15.999 0-18.548.009-16.311 8.416C178.633 50 191.5 64.3 191.5 83.5V176c0 25.8-7.285 49.8-20.085 70.2l-49.279 76.5-49.101 72.9c-5.8 9-9.051 20.7-9.051 32.2 0 28 16.347 52.7 63.246 52.7h257.589c46.998 0 63.197-24.7 63.197-52.7-.1-11.5-3.401-23.1-9.201-32.1zM409.218 441c-4.4 4.2-11.602 7.5-24.499 7.5h-257.59c-12.8 0-20.8-3.5-25.199-7.7-2.7-2.6-6-7.05-6-13.35 0-5 1.4-10.125 3.9-14.125l99.039-150.392c15.699-25.199 24.632-55.231 24.632-86.932V64.5h64v111.4c0 31.199 7.761 61.3 23.859 87l100.523 150c2.499 4 3.968 9.25 3.968 14.25-.001 6.4-3.933 11.25-6.633 13.85z" fill="currentColor"></svg:path><svg:path d="M389.217 411.301c.051.075.1.397 0 .249L307.345 288.5H203.698l-81.069 123.151c-1.5 2.1-2.3 5.175-2.3 7.974 0 7.5 6.288 13.875 13.687 13.875h244c7.5 0 13.599-6.725 13.599-14.125-.001-2.5-1.099-6.074-2.398-8.074zM302.021 341.7c-1.5-1.5-2.3-3.601-2.3-5.7s.899-4.2 2.3-5.7c1.5-1.5 3.6-2.3 5.6-2.3 2.102 0 4.2.8 5.602 2.3 1.5 1.5 2.299 3.601 2.299 5.7s-.899 4.2-2.299 5.7c-1.5 1.5-3.5 2.3-5.602 2.3-2 0-4.1-.9-5.6-2.3zm46.899 59c-1.4.898-2.9 1.3-4.302 1.3-2.499 0-5.099-1.3-6.598-3.6l-23.499-35.9c-2.4-3.7-1.4-8.7 2.299-11.1 1.4-.9 2.9-1.301 4.4-1.301 2.6 0 5.1 1.301 6.5 3.601l23.5 35.9c2.398 3.699 1.398 8.699-2.3 11.1z" fill="currentColor"></svg:path>`,
})
export class IonErlenmeyerFlaskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionErlenmeyerFlaskBubblesIcon],svg[ion-erlenmeyer-flask-bubbles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M445.9 427.1L328 227.9V78c0-7.7-6.5-14-14.5-14S299 70.2 299 78v153.6c0 1.8.6 3.6 1.3 5.3-7.6-11.1-20.6-18.4-35.4-18.4-23.5 0-42.5 18.3-42.5 41 0 16.8 10.5 31.5 25.4 37.5h-72l35-58.5c1.2-2.1 2.1-4.5 2.1-6.9v-30.4c4 3.2 10 5.1 16.1 5.1 15.3 0 27.5-11.9 27.5-26.6 0-14.7-12.2-26.6-27.5-26.6-6.1 0-12.1 1.9-16.1 5.1V78c0-7.7-6.5-14-14.5-14s-14.5 6.2-14.5 14v149.9L66.1 427.1c-2.5 4.3-2.6 9.6 0 13.9 2.6 4.3 7.2 7 12.4 7h355c5.1 0 9.8-2.6 12.4-7 2.6-4.2 2.5-9.6 0-13.9zM282.2 297c14.9-6 25.4-20.8 25.4-37.5 0-5.7-1.2-11.2-3.4-16.1l31 53.6h-53z" fill="currentColor"></svg:path><svg:path d="M265.1 128.6c12 0 21.7-9.4 21.7-20.9 0-11.6-9.7-20.9-21.7-20.9s-21.7 9.4-21.7 20.9c-.1 11.5 9.7 20.9 21.7 20.9z" fill="currentColor"></svg:path>`,
})
export class IonErlenmeyerFlaskBubblesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionExitIcon],svg[ion-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 376V272H191a16 16 0 0 1 0-32h145V136a56.06 56.06 0 0 0-56-56H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h192a56.06 56.06 0 0 0 56-56m89.37-104l-52.68 52.69a16 16 0 0 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62l-80-80a16 16 0 0 0-22.62 22.62L425.37 240H336v32Z"></svg:path>`,
})
export class IonExitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionExpandIcon],svg[ion-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432 320v112H320m101.8-10.23L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320m10.23 101.8L208 304"></svg:path>`,
})
export class IonExpandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionExtensionPuzzleIcon],svg[ion-extension-puzzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M345.14 480H274a18 18 0 0 1-18-18v-27.71a31.32 31.32 0 0 0-9.71-22.77c-7.78-7.59-19.08-11.8-30.89-11.51c-21.36.5-39.4 19.3-39.4 41.06V462a18 18 0 0 1-18 18H87.62A55.62 55.62 0 0 1 32 424.38V354a18 18 0 0 1 18-18h27.71c9.16 0 18.07-3.92 25.09-11a42.06 42.06 0 0 0 12.2-29.92C114.7 273.89 97.26 256 76.91 256H50a18 18 0 0 1-18-18v-70.38A55.62 55.62 0 0 1 87.62 112h55.24a8 8 0 0 0 8-8v-6.48A65.53 65.53 0 0 1 217.54 32c35.49.62 64.36 30.38 64.36 66.33V104a8 8 0 0 0 8 8h55.24A54.86 54.86 0 0 1 400 166.86v55.24a8 8 0 0 0 8 8h5.66c36.58 0 66.34 29 66.34 64.64c0 36.61-29.39 66.4-65.52 66.4H408a8 8 0 0 0-8 8v56A54.86 54.86 0 0 1 345.14 480"></svg:path>`,
})
export class IonExtensionPuzzleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEyeIcon],svg[ion-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="64" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11c-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72c38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76M256 352a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96"></svg:path>`,
})
export class IonEyeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEyeDisabledIcon],svg[ion-eye-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M376.4 158.3L448 86.6 425.4 64l-77.6 77.6C320 127.7 289.5 119 256 119c-81.9 0-145.7 52.2-224 137 34.8 37.4 66.8 72.7 103.3 98.1L64 425.4 86.6 448l76.9-76.9c27 13.7 57 21.9 92.5 21.9 99.9 0 173.4-81.8 224-135.5-28-34.1-62.4-71.8-103.6-99.2zm-210 97.7c0-50.4 40.2-91.3 89.6-91.3 19.3 0 37.2 6.2 51.8 16.9l-50.7 50.7c-.7-2.6-1.1-5.4-1.1-8.3 0-7.9 2.9-15.1 7.6-20.7-2.5-.4-5-.6-7.6-.6-28.8 0-52.3 23.9-52.3 53.3 0 8.6 2 16.8 5.6 24L182 307.4c-9.8-14.7-15.6-32.4-15.6-51.4zm89.6 91.3c-19.3 0-37.2-6.2-51.8-16.9l27.4-27.4c7.3 4 15.6 6.2 24.4 6.2 28.8 0 52.3-23.9 52.3-53.3 0-2.3-.2-4.6-.4-6.9-5.5 4.3-12.3 6.9-19.8 6.9-2.9 0-5.6-.4-8.3-1.1l50.3-50.3c9.8 14.6 15.6 32.3 15.6 51.4-.1 50.5-40.3 91.4-89.7 91.4z" fill="currentColor"></svg:path>`,
})
export class IonEyeDisabledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEyeOffIcon],svg[ion-eye-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448M248 315.85l-51.79-51.79a2 2 0 0 0-3.39 1.69a64.11 64.11 0 0 0 53.49 53.49a2 2 0 0 0 1.69-3.39m16-119.7L315.87 248a2 2 0 0 0 3.4-1.69a64.13 64.13 0 0 0-53.55-53.55a2 2 0 0 0-1.72 3.39"></svg:path><svg:path fill="currentColor" d="M491 273.36a32.2 32.2 0 0 0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.5 226.5 0 0 0-71.82 11.79a4 4 0 0 0-1.56 6.63l47.24 47.24a4 4 0 0 0 3.82 1.05a96 96 0 0 1 116 116a4 4 0 0 0 1.05 3.81l67.95 68a4 4 0 0 0 5.4.24a343.8 343.8 0 0 0 67.24-77.4M256 352a96 96 0 0 1-93.3-118.63a4 4 0 0 0-1.05-3.81l-66.84-66.87a4 4 0 0 0-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.2 238.2 0 0 0 72.64-11.55a4 4 0 0 0 1.61-6.64l-47.47-47.46a4 4 0 0 0-3.81-1.05A96 96 0 0 1 256 352"></svg:path>`,
})
export class IonEyeOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionEyedropIcon],svg[ion-eyedrop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M461.05 51a65 65 0 0 0-45.71-19h-.76a61.8 61.8 0 0 0-44.36 19.25a13 13 0 0 0-1.07 1.25l-54 69.76c-5.62 7.1-12.74 8.68-16.78 4.64l-1.9-1.9a48 48 0 0 0-67.92 67.92l9.91 9.91a2 2 0 0 1 0 2.83L58.7 385.38C54 390.05 46.9 399.85 38.85 431c-4.06 15.71-6.51 29.66-6.61 30.24A16 16 0 0 0 48 480a15.7 15.7 0 0 0 2.64-.22c.58-.1 14.44-2.43 30.13-6.44c31.07-7.94 41.05-15.24 45.85-20l179.77-179.79a2 2 0 0 1 2.82 0l9.92 9.92a48 48 0 0 0 67.92-67.93l-1.59-1.54c-5-5-2.52-12.11 4.32-17.14l69.75-53.94a18 18 0 0 0 1.47-1.32a63.2 63.2 0 0 0 19-45A63.88 63.88 0 0 0 461.05 51M250.78 283.9c-2.92 2.92-16.18 7.92-23.39.71s-2.24-20.42.69-23.35l33-33a2 2 0 0 1 2.83 0l19.84 19.83a2 2 0 0 1 0 2.83Z"></svg:path>`,
})
export class IonEyedropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFastFoodIcon],svg[ion-fast-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 128h.09m111.46-32h-91.06l8.92-35.66l38.32-13.05c8.15-2.77 13-11.43 10.65-19.71a16 16 0 0 0-20.54-10.73l-47 16a16 16 0 0 0-10.36 11.27L355.51 96H224.45c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 224 128h2.75l1 8.66A8.3 8.3 0 0 0 236 144c39 0 73.66 10.9 100.12 31.52A121.9 121.9 0 0 1 371 218.07a123.4 123.4 0 0 1 10.12 29.51a7.83 7.83 0 0 0 3.29 4.88a72 72 0 0 1 26.38 86.43a7.92 7.92 0 0 0-.15 5.53A96 96 0 0 1 416 376c0 22.34-7.6 43.63-21.4 59.95a80.1 80.1 0 0 1-28.78 21.67a8 8 0 0 0-4.21 4.37a108.2 108.2 0 0 1-17.37 29.86a2.5 2.5 0 0 0 1.9 4.11h49.21a48.22 48.22 0 0 0 47.85-44.14L477.4 128h2.6a16 16 0 0 0 16-16.77c-.42-8.61-7.84-15.23-16.45-15.23"></svg:path><svg:path fill="currentColor" d="M108.69 320a23.87 23.87 0 0 1 17 7l15.51 15.51a4 4 0 0 0 5.66 0L162.34 327a23.87 23.87 0 0 1 17-7h196.58a8 8 0 0 0 8.08-7.92V312a40.07 40.07 0 0 0-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67 184.56 267.85 176 236 176h-72c-68.22 0-114.43 38.77-116 96.8A40.07 40.07 0 0 0 16 312a8 8 0 0 0 8 8Zm77.25 32a8 8 0 0 0-5.66 2.34l-22.14 22.15a20 20 0 0 1-28.28 0l-22.14-22.15a8 8 0 0 0-5.66-2.34h-69.4a15.93 15.93 0 0 0-15.76 13.17A65 65 0 0 0 16 376c0 30.59 21.13 55.51 47.26 56c2.43 15.12 8.31 28.78 17.16 39.47C93.51 487.28 112.54 496 134 496h132c21.46 0 40.49-8.72 53.58-24.55c8.85-10.69 14.73-24.35 17.16-39.47c26.13-.47 47.26-25.39 47.26-56a65 65 0 0 0-.9-10.83A15.93 15.93 0 0 0 367.34 352Z"></svg:path>`,
})
export class IonFastFoodIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFemaleIcon],svg[ion-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M430 190c0-95.94-78.06-174-174-174S82 94.06 82 190c0 88.49 66.4 161.77 152 172.61V394h-36a22 22 0 0 0 0 44h36v36a22 22 0 0 0 44 0v-36h36a22 22 0 0 0 0-44h-36v-31.39c85.6-10.84 152-84.12 152-172.61m-304 0c0-71.68 58.32-130 130-130s130 58.32 130 130s-58.32 130-130 130s-130-58.32-130-130"></svg:path>`,
})
export class IonFemaleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFileTrayIcon],svg[ion-file-tray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m479.66 268.7l-32-151.81C441.48 83.77 417.68 64 384 64H128c-16.8 0-31 4.69-42.1 13.94s-18.37 22.31-21.58 38.89l-32 151.87A16.7 16.7 0 0 0 32 272v112a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V272a16.7 16.7 0 0 0-.34-3.3m-384-145.4v-.28c3.55-18.43 13.81-27 32.29-27H384c18.61 0 28.87 8.55 32.27 26.91c0 .13.05.26.07.39l26.93 127.88a4 4 0 0 1-3.92 4.82H320a15.92 15.92 0 0 0-16 15.82a48 48 0 1 1-96 0A15.92 15.92 0 0 0 192 256H72.65a4 4 0 0 1-3.92-4.82Z"></svg:path>`,
})
export class IonFileTrayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFileTrayFullIcon],svg[ion-file-tray-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m479.66 268.7l-32-151.81C441.48 83.77 417.68 64 384 64H128c-16.8 0-31 4.69-42.1 13.94s-18.37 22.31-21.58 38.89l-32 151.87A16.7 16.7 0 0 0 32 272v112a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V272a16.7 16.7 0 0 0-.34-3.3m-384-145.4v-.28c3.55-18.43 13.81-27 32.29-27H384c18.61 0 28.87 8.55 32.27 26.91c0 .13.05.26.07.39l26.93 127.88a4 4 0 0 1-3.92 4.82H320a15.92 15.92 0 0 0-16 15.82a48 48 0 1 1-96 0A15.92 15.92 0 0 0 192 256H72.65a4 4 0 0 1-3.92-4.82Z"></svg:path><svg:path fill="currentColor" d="M368 160H144a16 16 0 0 1 0-32h224a16 16 0 0 1 0 32m16 64H128a16 16 0 0 1 0-32h256a16 16 0 0 1 0 32"></svg:path>`,
})
export class IonFileTrayFullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFileTrayStackedIcon],svg[ion-file-tray-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 352H320a16 16 0 0 0-16 16a48 48 0 0 1-96 0a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v64a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64v-64a16 16 0 0 0-16-16m15.46-164.12L447.61 68.45C441.27 35.59 417.54 16 384 16H128c-16.8 0-31 4.69-42.1 13.94S67.66 52 64.4 68.4L32.54 187.88A16 16 0 0 0 32 192v48c0 35.29 28.71 80 64 80h320c35.29 0 64-44.71 64-80v-48a16 16 0 0 0-.54-4.12M440.57 176H320a15.92 15.92 0 0 0-16 15.82a48 48 0 1 1-96 0A15.92 15.92 0 0 0 192 176H71.43a2 2 0 0 1-1.93-2.52L95.71 75c3.55-18.41 13.81-27 32.29-27h256c18.59 0 28.84 8.53 32.25 26.85l26.25 98.63a2 2 0 0 1-1.93 2.52"></svg:path>`,
})
export class IonFileTrayStackedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFilingIcon],svg[ion-filing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M381 128.6H132.1c-12.1 0-19.5 0-19.5 20.4v28.1h288V149c0-20.4-7.4-20.4-19.6-20.4z" fill="currentColor"></svg:path><svg:path d="M333 96.5H180c-13.1 0-19.5.3-19.5 18.7h192c-.1-18.4-6.4-18.7-19.5-18.7z" fill="currentColor"></svg:path><svg:path d="M432.4 169.6l-15.9-9.4v32.3h-321v-32.3l-15.2 9.4c-14.3 8.9-17.8 15.3-15 40.9l17.5 184.8c3.7 20.7 15.9 21.2 24 21.2h299.9c8.1 0 20.2-.5 23.9-21.2l17.2-184.4c2.3-24.4-2-32.8-15.4-41.3z" fill="currentColor"></svg:path>`,
})
export class IonFilingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFilmIcon],svg[ion-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M436 80H76a44.05 44.05 0 0 0-44 44v264a44.05 44.05 0 0 0 44 44h360a44.05 44.05 0 0 0 44-44V124a44.05 44.05 0 0 0-44-44M112 388a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm0-80a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm0-80a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm0-80a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm241.68 124H158.32a16 16 0 0 1 0-32h195.36a16 16 0 1 1 0 32M448 388a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm0-80a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm0-80a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm0-80a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Z"></svg:path>`,
})
export class IonFilmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFilmMarkerIcon],svg[ion-film-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448.4 208h-344l341.2-68c8.5-1.6 14-9.7 12.4-18.1l-8.9-45.4c-1.6-8.4-9.8-13.8-18.3-12.2L60.7 137.9c-8.5 1.6-14 9.7-12.4 18l8.9 45.4c.6 2.8 2.1 5.2 3.9 7.2-7.4 1.2-13.1 7.2-13.1 14.9v209.2c0 8.5 7 15.4 15.6 15.4h384.8c8.6 0 15.6-6.9 15.6-15.4V223.4c0-8.5-7-15.4-15.6-15.4zM305 402.4l-50.7-36.3-50.7 36.3 19.5-58.4-50.8-36H235l19.2-58.4 19.3 58.4h62.7l-50.8 36 19.6 58.4z" fill="currentColor"></svg:path>`,
})
export class IonFilmMarkerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFilterIcon],svg[ion-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48m-80 112H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48m-96 112h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48"></svg:path>`,
})
export class IonFilterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFilterCircleIcon],svg[ion-filter-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m32 304h-64a16 16 0 0 1 0-32h64a16 16 0 0 1 0 32m48-64H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32m32-64H144a16 16 0 0 1 0-32h224a16 16 0 0 1 0 32"></svg:path>`,
})
export class IonFilterCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFingerPrintIcon],svg[ion-finger-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M63.28 202a15.3 15.3 0 0 1-7.7-2a14.84 14.84 0 0 1-5.52-20.46C69.34 147.36 128 72.25 256 72.25c55.47 0 104.12 14.57 144.53 43.29c33.26 23.57 51.9 50.25 60.78 63.1a14.79 14.79 0 0 1-4 20.79a15.52 15.52 0 0 1-21.24-4C420 172.32 371 102 256 102c-112.25 0-163 64.71-179.53 92.46A15 15 0 0 1 63.28 202"></svg:path><svg:path fill="currentColor" d="M320.49 496a15.3 15.3 0 0 1-3.79-.43c-92.85-23-127.52-115.82-128.93-119.68l-.22-.85c-.76-2.68-19.39-66.33 9.21-103.61c13.11-17 33.05-25.72 59.38-25.72c24.48 0 42.14 7.61 54.28 23.36c10 12.86 14 28.72 17.87 44c8.13 31.82 14 48.53 47.79 50.25c14.84.75 24.59-7.93 30.12-15.32c14.95-20.15 17.55-53 6.28-82C398 228.57 346.61 158 256 158c-38.68 0-74.22 12.43-102.72 35.79c-23.59 19.35-42.28 46.67-51.28 74.75c-16.69 52.28 5.2 134.46 5.41 135.21A14.83 14.83 0 0 1 96.54 422a15.39 15.39 0 0 1-18.74-10.6c-1-3.75-24.38-91.4-5.1-151.82c21-65.47 85.81-131.47 183.33-131.47c45.07 0 87.65 15.32 123.19 44.25c27.52 22.5 50 52.72 61.76 82.93c14.95 38.57 10.94 81.86-10.19 110.14c-14.08 18.86-34.13 28.72-56.34 27.65c-57.86-2.9-68.26-43.29-75.84-72.75c-7.8-30.22-12.79-44.79-42.58-44.79c-16.36 0-27.85 4.5-35 13.82c-9.75 12.75-10.51 32.68-9.43 47.14a152.4 152.4 0 0 0 5.1 29.79c2.38 6 33.37 82 107.59 100.39a14.88 14.88 0 0 1 11 18.11a15.36 15.36 0 0 1-14.8 11.21"></svg:path><svg:path fill="currentColor" d="M201.31 489.14a15.5 15.5 0 0 1-11.16-4.71c-37.16-39-58.18-82.61-66.09-137.14V347c-4.44-36.1 2.06-87.21 33.91-122.35c23.51-25.93 56.56-39.11 98.06-39.11c49.08 0 87.65 22.82 111.7 65.89c17.45 31.29 20.91 62.47 21 63.75a15.07 15.07 0 0 1-13.65 16.4a15.26 15.26 0 0 1-16.79-13.29A154 154 0 0 0 340.43 265c-18.64-32.89-47-49.61-84.51-49.61c-32.4 0-57.75 9.75-75.19 29c-25.14 27.75-30 70.5-26.55 98.78c6.93 48.22 25.46 86.58 58.18 120.86a14.7 14.7 0 0 1-.76 21.11a15.44 15.44 0 0 1-10.29 4"></svg:path><svg:path fill="currentColor" d="M372.5 446.18c-32.5 0-60.13-9-82.24-26.89c-44.42-35.79-49.4-94.08-49.62-96.54a15.27 15.27 0 0 1 30.45-2.36c.11.86 4.55 48.54 38.79 76c20.26 16.18 47.34 22.6 80.71 18.85a15.2 15.2 0 0 1 16.91 13.18a14.92 14.92 0 0 1-13.44 16.5a187 187 0 0 1-21.56 1.26m25.68-397.39C385.5 40.54 340.54 16 256 16c-88.74 0-133.81 27.11-143.78 34a11.6 11.6 0 0 0-1.84 1.4a.36.36 0 0 1-.22.1a14.87 14.87 0 0 0-5.09 11.15a15.06 15.06 0 0 0 15.31 14.85a15.56 15.56 0 0 0 8.88-2.79c.43-.32 39.22-28.82 126.77-28.82S382.58 74.29 383 74.5a15.25 15.25 0 0 0 9.21 3a15.06 15.06 0 0 0 15.29-14.89a14.9 14.9 0 0 0-9.32-13.82"></svg:path>`,
})
export class IonFingerPrintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFireballIcon],svg[ion-fireball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M393.267 238.088l-.231 10.404c-.814 11.65-3.797 31.912-14.102 54.736a225.395 225.395 0 0 0 4.978-47.164c0-12.096-.958-23.968-2.799-35.544-15.091-94.901-89.626-169.923-184.138-185.518C185.706 32.285 179.048 32 179.048 32c.238.281.465.562.7.844 39.458 47.181 44.1 96.656 37.744 131.85-2.281 12.629-5.978 23.421-9.991 31.605 0 0 3.359-13.911 3.035-29.72-.293-14.234-3.572-30.006-14.986-38.552 3.497 18.378-.752 33.501-9.121 47.729C161.69 217.808 101 249.386 96 327.408v3.836c0 53.692 25.624 98.979 68.719 125.012-6.85-12.344-14.964-35.207-8.733-60.151 3.998 23.669 9.951 36.045 20.879 51.756 8.153 11.721 19.104 19.269 33.095 24.934S238.995 480 255.889 480c55.809 0 105.228-28.567 133.845-71.952l.267.061v-.007c16-25.254 26.1-55.5 26.1-88.019-.001-29.971-8.505-58.012-22.834-81.995z" fill="currentColor"></svg:path>`,
})
export class IonFireballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFishIcon],svg[ion-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 256c0-16.54-14.27-46.76-45.61-74a207 207 0 0 0-60.28-36.12a3.15 3.15 0 0 0-3.93 1.56c-.15.29-.3.57-.47.86l-9.59 15.9a183.24 183.24 0 0 0 .07 183.78l.23.39l8.74 16a4 4 0 0 0 4.94 1.82C479.63 337.42 512 281.49 512 256m-93.92-.14a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79"></svg:path><svg:path fill="currentColor" d="M335.45 256a214.8 214.8 0 0 1 29.08-108l.12-.21l4.62-7.67a4 4 0 0 0-2.59-6a284 284 0 0 0-39.26-5.39a7.94 7.94 0 0 1-4.29-1.6c-19.28-14.66-57.5-40.3-96.46-46.89a16 16 0 0 0-18 20.18l10.62 37.17a4 4 0 0 1-2.42 4.84c-36.85 13.69-68.59 38.75-91.74 57.85a8 8 0 0 1-10.06.06q-4.72-3.75-9.69-7.39c-39.64-28.95-86.21-32.76-88.17-32.9a16 16 0 0 0-16.83 19.4c.42 1.93 9.19 40.69 31.7 71.61a8.09 8.09 0 0 1 0 9.55C9.57 291.52.8 330.29.38 332.22a16 16 0 0 0 16.83 19.4c2-.14 48.53-4 88.12-32.88q4.85-3.56 9.47-7.22a8 8 0 0 1 10.06.07c23.25 19.19 55.05 44.28 92 58a4 4 0 0 1 2.42 4.83l-10.66 37.18a16 16 0 0 0 18 20.18c17.16-2.9 51.88-12.86 96.05-46.83a8.15 8.15 0 0 1 4.36-1.65a287 287 0 0 0 39.22-5.3a4 4 0 0 0 2.69-5.83l-4.51-8.29A214.8 214.8 0 0 1 335.45 256"></svg:path>`,
})
export class IonFishIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFitnessIcon],svg[ion-fitness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M193.69 152.84a16 16 0 0 1 29.64 2.56l36.4 121.36l30-59.92a16 16 0 0 1 28.62 0L345.89 272h96.76A213.1 213.1 0 0 0 464 176.65C463.37 114.54 413.54 64 352.92 64c-48.09 0-80 29.54-96.92 51c-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65A211.1 211.1 0 0 0 56.93 240h93.18Z"></svg:path><svg:path fill="currentColor" d="M321.69 295.16L304 259.78l-33.69 67.38A16 16 0 0 1 256 336q-.67 0-1.38-.06a16 16 0 0 1-14-11.34l-36.4-121.36l-30 59.92A16 16 0 0 1 160 272H69.35q14 29.29 37.27 57.66c18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0 0 36 0c78.59-53.35 112.62-89.93 131.39-112.81a317 317 0 0 0 19-25.66H336a16 16 0 0 1-14.31-8.84M464 272h-21.35a260 260 0 0 1-18.25 32H464a16 16 0 0 0 0-32M48 240a16 16 0 0 0 0 32h21.35a225 225 0 0 1-12.42-32Z"></svg:path>`,
})
export class IonFitnessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFlagIcon],svg[ion-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 480a16 16 0 0 1-16-16V68.13a24 24 0 0 1 11.9-20.72C88 40.38 112.38 32 160 32c37.21 0 78.83 14.71 115.55 27.68C305.12 70.13 333.05 80 352 80a183.8 183.8 0 0 0 71-14.5a18 18 0 0 1 25 16.58v219.36a20 20 0 0 1-12 18.31c-8.71 3.81-40.51 16.25-84 16.25c-24.14 0-54.38-7.14-86.39-14.71C229.63 312.79 192.43 304 160 304c-36.87 0-55.74 5.58-64 9.11V464a16 16 0 0 1-16 16"></svg:path>`,
})
export class IonFlagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFlameIcon],svg[ion-flame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M394.23 197.56a300.4 300.4 0 0 0-53.37-90C301.2 61.65 249.05 32 208 32a16 16 0 0 0-15.48 20c13.87 53-14.88 97.07-45.31 143.72C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.77-122.44m-105.9 221.13C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78c4.95-10.74 10-21.67 13-33.37a8 8 0 0 1 12.49-4.51A126.5 126.5 0 0 1 275 292c18.17 24 29 52.42 29 76c0 22.24-5.42 39.77-15.67 50.69"></svg:path>`,
})
export class IonFlameIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFlashIcon],svg[ion-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M194.82 496a18.36 18.36 0 0 1-18.1-21.53v-.11L204.83 320H96a16 16 0 0 1-12.44-26.06L302.73 23a18.45 18.45 0 0 1 32.8 13.71c0 .3-.08.59-.13.89L307.19 192H416a16 16 0 0 1 12.44 26.06L209.24 489a18.45 18.45 0 0 1-14.42 7"></svg:path>`,
})
export class IonFlashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFlashOffIcon],svg[ion-flash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448m-.5-244a16 16 0 0 0-15.5-12H307.19L335.4 37.63c.05-.3.1-.59.13-.89A18.45 18.45 0 0 0 302.73 23l-92.58 114.46a4 4 0 0 0 .29 5.35l151 151a4 4 0 0 0 5.94-.31l60.8-75.16A16.37 16.37 0 0 0 431.5 204M301.57 369.19l-151-151a4 4 0 0 0-5.93.31L83.8 293.64A16.37 16.37 0 0 0 80.5 308A16 16 0 0 0 96 320h108.83l-28.09 154.36v.11a18.37 18.37 0 0 0 32.5 14.53l92.61-114.46a4 4 0 0 0-.28-5.35"></svg:path>`,
})
export class IonFlashOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFlashlightIcon],svg[ion-flashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M462 216c9.35-9.35 15.14-19.09 17.19-28.95c2.7-12.95-1.29-25.55-11.22-35.48L360.43 44.05C346.29 29.92 322 24.07 296 50l-2 2a8 8 0 0 0 0 11.32L448.64 218a8 8 0 0 0 11.36 0Zm-211.86-62.92l-.16 2.34c-.53 7.18-6.88 19.15-13.88 26.14L47.27 370.36c-11.12 11.11-16.46 25.57-15.05 40.7C33.49 424.58 40.16 438 51 448.83L63.17 461c12.61 12.6 27.78 19 42.49 19a50.4 50.4 0 0 0 36-15.24l188.84-188.8c7.07-7.07 18.84-13.3 26.17-13.87c17.48-1.32 43.57-3.28 67.79-15.65a4 4 0 0 0 1-6.37L271.69 86.31a4 4 0 0 0-6.39 1c-12.12 22.99-13.82 46.91-15.16 65.77m-9.95 146.83a20 20 0 1 1 0-25.25a20 20 0 0 1 0 25.25"></svg:path>`,
})
export class IonFlashlightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFlaskIcon],svg[ion-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M452.32 365L327.4 167.12a48.07 48.07 0 0 1-7.4-25.64V64h15.56c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 336 32H176.45c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 176 64h16v77.48a47.9 47.9 0 0 1-7.41 25.63L59.68 365a74 74 0 0 0-2.5 75.84C70.44 465.19 96.36 480 124.13 480h263.74c27.77 0 53.69-14.81 66.95-39.21a74 74 0 0 0-2.5-75.79M211.66 184.2A79.94 79.94 0 0 0 224 141.48V68a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4v73.48a79.94 79.94 0 0 0 12.35 42.72l57.8 91.53a8 8 0 0 1-6.78 12.27H160.63a8 8 0 0 1-6.77-12.27Z"></svg:path>`,
})
export class IonFlaskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFlowerIcon],svg[ion-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="48" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M475.93 303.91a67.49 67.49 0 0 0-44.34-115.53a5.2 5.2 0 0 1-4.58-3.21a5.21 5.21 0 0 1 1-5.51A67.83 67.83 0 0 0 378 66.33h-.25A67.13 67.13 0 0 0 332.35 84a5.21 5.21 0 0 1-5.52 1a5.23 5.23 0 0 1-3.22-4.58a67.68 67.68 0 0 0-135.23 0a5.2 5.2 0 0 1-3.21 4.58a5.21 5.21 0 0 1-5.52-1a67.1 67.1 0 0 0-45.44-17.69H134a67.91 67.91 0 0 0-50 113.34a5.21 5.21 0 0 1 1 5.51a5.2 5.2 0 0 1-4.58 3.21a67.71 67.71 0 0 0 0 135.23a5.23 5.23 0 0 1 4.58 3.23a5.22 5.22 0 0 1-1 5.52a67.54 67.54 0 0 0 50.08 113h.25A67.38 67.38 0 0 0 179.65 428a5.21 5.21 0 0 1 5.51-1a5.2 5.2 0 0 1 3.21 4.58a67.71 67.71 0 0 0 135.23 0a5.23 5.23 0 0 1 3.22-4.58a5.21 5.21 0 0 1 5.51 1a67.38 67.38 0 0 0 45.29 17.42h.25a67.48 67.48 0 0 0 50.08-113a5.22 5.22 0 0 1-1-5.52a5.23 5.23 0 0 1 4.58-3.22a67.3 67.3 0 0 0 44.4-19.77M256 336a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80"></svg:path>`,
})
export class IonFlowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFolderIcon],svg[ion-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 152a56 56 0 0 0-56-56H220.11a23.9 23.9 0 0 1-13.31-4L179 73.41A55.77 55.77 0 0 0 147.89 64H72a56 56 0 0 0-56 56v48a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8ZM16 392a56 56 0 0 0 56 56h368a56 56 0 0 0 56-56V216a8 8 0 0 0-8-8H24a8 8 0 0 0-8 8Z"></svg:path>`,
})
export class IonFolderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFolderOpenIcon],svg[ion-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408 96H252.11a23.9 23.9 0 0 1-13.31-4L211 73.41A55.77 55.77 0 0 0 179.89 64H104a56.06 56.06 0 0 0-56 56v24h416c0-30.88-25.12-48-56-48m15.75 352H88.25a56 56 0 0 1-55.93-55.15L16.18 228.11v-.28A48 48 0 0 1 64 176h384.1a48 48 0 0 1 47.8 51.83v.28l-16.22 164.74A56 56 0 0 1 423.75 448m56.15-221.45"></svg:path>`,
})
export class IonFolderOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFootballIcon],svg[ion-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m143 304h-45.22a8 8 0 0 1-6.91-4l-16.14-27.68a8 8 0 0 1-.86-6l14.86-59.92a8 8 0 0 1 4.65-5.45l28.1-11.9a8 8 0 0 1 8.34 1.3l41.63 35.82a8 8 0 0 1 2.69 7.26a174.75 174.75 0 0 1-24.28 66.68A8 8 0 0 1 399 352M134.52 237.13l28.1 11.9a8 8 0 0 1 4.65 5.45l14.86 59.92a8 8 0 0 1-.86 6L165.13 348a8 8 0 0 1-6.91 4H113a8 8 0 0 1-6.82-3.81a174.75 174.75 0 0 1-24.28-66.68a8 8 0 0 1 2.69-7.26l41.63-35.82a8 8 0 0 1 8.3-1.3m256.94-87.24l-18.07 51.38A8 8 0 0 1 369 206l-29.58 12.53a8 8 0 0 1-8.26-1.24L274.9 170.1a8 8 0 0 1-2.9-6.1v-33.58a8 8 0 0 1 3.56-6.65l42.83-28.54a8 8 0 0 1 7.66-.67A176.9 176.9 0 0 1 390 142a8 8 0 0 1 1.46 7.89M193.6 95.23l42.84 28.54a8 8 0 0 1 3.56 6.65V164a8 8 0 0 1-2.86 6.13l-56.26 47.19a8 8 0 0 1-8.26 1.24L143 206a8 8 0 0 1-4.43-4.72L120.5 149.9a8 8 0 0 1 1.5-7.9a176.9 176.9 0 0 1 64-47.48a8 8 0 0 1 7.6.71m17.31 327.46L191.18 373a8 8 0 0 1 .52-7l15.17-26a8 8 0 0 1 6.91-4h84.44a8 8 0 0 1 6.91 4l15.18 26a8 8 0 0 1 .53 7l-19.59 49.67a8 8 0 0 1-5.69 4.87a176.6 176.6 0 0 1-79 0a8 8 0 0 1-5.65-4.85"></svg:path>`,
})
export class IonFootballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFootstepsIcon],svg[ion-footsteps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M133.83 361.27c-22.61 0-41-8.17-54.79-24.39s-22.84-40.29-28.11-75.31c-7.76-51.61-.06-95.11 21.68-122.48c12.8-16.12 29.6-25.44 48.58-26.94c16.25-1.3 40.54 5.29 64 44c14.69 24.24 25.86 56.44 30.65 88.34c5.79 38.51 1.48 66.86-13.18 86.65c-11.64 15.72-29.54 25.46-53.21 29a106.5 106.5 0 0 1-15.62 1.13M173 496c-13.21 0-26.6-4.23-38.66-12.36a79.8 79.8 0 0 1-33.52-50.6c-2.85-14.66-1.14-26.31 5.22-35.64c10.33-15.15 28.87-18.56 48.49-22.18c2.07-.38 4.17-.76 6.3-1.17c4.52-.86 9.14-2 13.62-3.11c16.78-4.14 34.14-8.43 48.47 1.75c9.59 6.8 15 18.36 16.62 35.32c1.84 19.57-2.36 39.1-11.83 55c-10.19 17.11-25.47 28.42-43 31.86A61 61 0 0 1 173 496m205.17-230.73a107 107 0 0 1-15.6-1.2c-23.66-3.5-41.56-13.25-53.2-29c-14.66-19.79-19-48.13-13.18-86.65c4.79-31.93 15.93-64.1 30.55-88.25c23.34-38.57 47.66-45.26 64-44.08c18.92 1.38 35.69 10.57 48.51 26.6c21.89 27.37 29.65 71 21.86 122.84c-5.27 35-14.2 58.95-28.11 75.31s-32.22 24.43-54.83 24.43M339 400a61 61 0 0 1-11.68-1.13c-17.56-3.44-32.84-14.75-43-31.86c-9.47-15.9-13.67-35.43-11.83-55c1.6-17 7-28.52 16.62-35.33c14.33-10.17 31.69-5.89 48.47-1.74c4.48 1.1 9.1 2.24 13.62 3.11l6.29 1.17c19.63 3.61 38.17 7 48.5 22.17c6.36 9.33 8.07 21 5.22 35.64a79.78 79.78 0 0 1-33.52 50.61C365.56 395.78 352.17 400 339 400"></svg:path>`,
})
export class IonFootstepsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionForkIcon],svg[ion-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M270.2 148.9c0 .1-.1.1 0 0v.1-.1z" fill="currentColor"></svg:path><svg:path d="M320 166c0-43.2-15-93.2-24-133.7V32h-8l-.2 116.9c0 6.1-2.9 11.1-9 11.1-5.7 0-8-4.3-8.6-9.9-.1-.4 0-.8 0-1.2L259.9 32h-8l-9 117-.1 1.1c-.6 5.6-3.7 9.9-9.5 9.9-6.1 0-9.1-5-9.1-11.1L223.8 32h-8C207 73 192 122.9 192 166.1c0 25.7 14.6 48.1 36.7 58.2 11.2 5.1 11.3 10.3 11.3 10.3s-16 201.7-16 213.1c0 11.4 4 18.5 9.5 24s14.2 8.2 22.4 8.2h.4c8.2 0 16.8-2.7 22.4-8.2 5.5-5.5 9.3-10.9 9.3-24s-16-213.1-16-213.1-1-5 11.4-10.6c21.6-9.8 36.6-32.2 36.6-58z" fill="currentColor"></svg:path>`,
})
export class IonForkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionForkRepoIcon],svg[ion-fork-repo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 80h-48V32h-64v48h-48v64h48v48h64v-48h48z" fill="currentColor"></svg:path><svg:path d="M304 240c0 38.6-4.5 42.3-14.4 50.3-7.4 6-22.2 7.1-39.4 8.3-9.5.7-20.4 1.5-31.4 3.3-9.4 1.5-18.4 4.7-26.8 8.8V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-15.7-5.7-30.1-15-41.2 6.7-4.8 13.9-8.7 20.2-9.7 8.1-1.3 16.6-1.9 25.6-2.6 24.4-1.7 52.1-3.7 75.2-22.5 30.9-25.1 37.5-52.1 38-94.9V240h-64zM160 64c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm0 384c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z" fill="currentColor"></svg:path>`,
})
export class IonForkRepoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionForwardIcon],svg[ion-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M288 298.1v92.3L448 256 288 112v80C100.8 192 64 400 64 400c53-93 122.4-101.9 224-101.9z" fill="currentColor"></svg:path>`,
})
export class IonForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionFunnelIcon],svg[ion-funnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296 464a23.9 23.9 0 0 1-7.55-1.23L208.3 436.1a23.92 23.92 0 0 1-16.3-22.78V294.11a.4.4 0 0 0-.09-.13L23.26 97.54A30 30 0 0 1 46.05 48H466a30 30 0 0 1 22.79 49.54L320.09 294a1 1 0 0 0-.09.13V440a23.93 23.93 0 0 1-24 24"></svg:path>`,
})
export class IonFunnelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGameControllerIcon],svg[ion-game-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.1 107.1 0 0 0 352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.7 115.7 0 0 0-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.6 56.6 0 0 0 18.64 3.22c29.93 0 53.93-24.93 70.33-45.34c18.53-23.1 40.22-34.82 107.34-34.82c59.95 0 84.76 8.13 106.19 34.82c13.47 16.78 26.2 28.52 38.9 35.91c16.89 9.82 33.77 12 50.16 6.37c25.82-8.81 40.62-32.1 44-69.24c2.57-28.48-1.39-65.89-12.12-114.37M208 240h-32v32a16 16 0 0 1-32 0v-32h-32a16 16 0 0 1 0-32h32v-32a16 16 0 0 1 32 0v32h32a16 16 0 0 1 0 32m84 4a20 20 0 1 1 20-20a20 20 0 0 1-20 20m44 44a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288m0-88a20 20 0 1 1 20-20a20 20 0 0 1-20 20m44 44a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class IonGameControllerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGearAIcon],svg[ion-gear-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M411.1 256c0-23.9 14.8-42.8 36.9-55.8-4-13.3-9.3-26.2-15.8-38.2-24.9 6.5-45-3.2-62-20.2-16.9-16.9-22.1-37.1-15.6-62-12-6.5-24.8-11.8-38.2-15.8-13 22.2-36.4 36.9-60.4 36.9-23.9 0-47.4-14.7-60.4-36.9-13.4 4-26.2 9.3-38.2 15.8 6.5 24.9 1.3 45-15.6 62-16.9 16.9-37.1 26.7-61.9 20.2-6.6 12-11.9 24.8-15.9 38.2 22.2 13 37 31.9 37 55.8s-14.8 47.4-37 60.4c4 13.4 9.3 26.2 15.8 38.2 24.9-6.5 45-1.3 61.9 15.6 17 16.9 22.1 37.1 15.6 62 12.1 6.5 24.8 11.8 38.2 15.8 13-22.2 36.5-36.9 60.4-36.9s47.4 14.7 60.4 36.9c13.4-4 26.2-9.3 38.2-15.8-6.5-24.9-1.3-45 15.6-62 16.9-16.9 37.1-26.7 62-20.2 6.5-12.1 11.8-24.9 15.8-38.2-22.1-13-36.8-31.9-36.8-55.8zM256 354.3c-54.2 0-98.3-44-98.3-98.3s44-98.3 98.3-98.3 98.3 44 98.3 98.3-44 98.3-98.3 98.3z" fill="currentColor"></svg:path>`,
})
export class IonGearAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGearBIcon],svg[ion-gear-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 294.4v-76.8h-42.8c-3.4-14.4-8.9-28-16.1-40.5l29.8-29.7-54.3-54.3-29.1 29.1c-12.6-7.7-26.4-13.5-41.1-17.3V64h-76.8v40.9c-14.7 3.8-28.5 9.7-41.1 17.3l-29.1-29.1-54.3 54.3 29.8 29.7c-7.2 12.5-12.6 26.1-16.1 40.5H64v76.8h44.1c3.8 13.7 9.5 26.6 16.7 38.6l-31.7 31.7 54.3 54.3 32.3-32.3c11.7 6.8 24.5 11.9 37.9 15.4v46h76.8v-46c13.5-3.5 26.2-8.6 37.9-15.4l32.3 32.3 54.3-54.3-31.6-31.7c7.2-11.9 12.9-24.8 16.7-38.6h44zm-192 15.4c-29.7 0-53.7-24.1-53.7-53.8s24-53.8 53.7-53.8 53.8 24.1 53.8 53.8-24.1 53.8-53.8 53.8z" fill="currentColor"></svg:path>`,
})
export class IonGearBIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGiftIcon],svg[ion-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M200 144h40v-40a40 40 0 1 0-40 40m152-40a40 40 0 0 0-80 0v40h40a40 40 0 0 0 40-40"></svg:path><svg:path fill="currentColor" d="M80 416a64 64 0 0 0 64 64h92a4 4 0 0 0 4-4V292a4 4 0 0 0-4-4H88a8 8 0 0 0-8 8Zm160-164V144h32v108a4 4 0 0 0 4 4h140a47.9 47.9 0 0 0 16-2.75A48.09 48.09 0 0 0 464 208v-16a48 48 0 0 0-48-48h-40.54a2 2 0 0 1-1.7-3A72 72 0 0 0 256 58.82A72 72 0 0 0 138.24 141a2 2 0 0 1-1.7 3H96a48 48 0 0 0-48 48v16a48.09 48.09 0 0 0 32 45.25A47.9 47.9 0 0 0 96 256h140a4 4 0 0 0 4-4m32-148a40 40 0 1 1 40 40h-40Zm-74.86-39.9A40 40 0 0 1 240 104v40h-40a40 40 0 0 1-2.86-79.89ZM276 480h92a64 64 0 0 0 64-64V296a8 8 0 0 0-8-8H276a4 4 0 0 0-4 4v184a4 4 0 0 0 4 4"></svg:path>`,
})
export class IonGiftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGitBranchIcon],svg[ion-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 160a64 64 0 1 0-96.27 55.24c-2.29 29.08-20.08 37-75 48.42c-17.76 3.68-35.93 7.45-52.71 13.93v-126.2a64 64 0 1 0-64 0v209.22a64 64 0 1 0 64.42.24c2.39-18 16-24.33 65.26-34.52c27.43-5.67 55.78-11.54 79.78-26.95c29-18.58 44.53-46.78 46.36-83.89A64 64 0 0 0 416 160M160 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32m0 384a32 32 0 1 1 32-32a32 32 0 0 1-32 32m192-256a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonGitBranchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGitCommitIcon],svg[ion-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 224h-68a128 128 0 0 0-247.9 0H64a32 32 0 0 0 0 64h68.05A128 128 0 0 0 380 288h68a32 32 0 0 0 0-64m-192 96a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"></svg:path>`,
})
export class IonGitCommitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGitCompareIcon],svg[ion-git-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.31 340.69A16 16 0 0 0 191 352v32h-20a28 28 0 0 1-28-28V152a64 64 0 1 0-64-1.16V356a92.1 92.1 0 0 0 92 92h20v32a16 16 0 0 0 27.31 11.31l64-64a16 16 0 0 0 0-22.62ZM112 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32m320 296.61V156a92.1 92.1 0 0 0-92-92h-20V32a16 16 0 0 0-27.31-11.31l-64 64a16 16 0 0 0 0 22.62l64 64A16 16 0 0 0 320 160v-32h20a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0M400 448a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonGitCompareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGitMergeIcon],svg[ion-git-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M385 224a64 64 0 0 0-55.33 31.89c-42.23-1.21-85.19-12.72-116.21-31.33c-32.2-19.32-49.71-44-52.15-73.35a64 64 0 1 0-64.31.18v209.22a64 64 0 1 0 64 0v-94.46c44.76 34 107.28 52.38 168.56 53.76A64 64 0 1 0 385 224M129 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32m0 384a32 32 0 1 1 32-32a32 32 0 0 1-32 32m256-128a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonGitMergeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGitNetworkIcon],svg[ion-git-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 96a64 64 0 1 0-96.31 55.21c-1.79 20.87-11.47 38.1-28.87 51.29C305.07 216 280.09 224 256 224s-49.07-8-66.82-21.5c-17.4-13.19-27.08-30.42-28.87-51.29a64 64 0 1 0-64.11.29c2.08 40.87 21.17 76.87 54.31 102C171.3 269.26 197 280.19 224 285.09v75.52a64 64 0 1 0 64 0v-75.52c27-4.9 52.7-15.83 73.49-31.59c33.14-25.13 52.23-61.13 54.31-102A64 64 0 0 0 448 96M128 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32m128 384a32 32 0 1 1 32-32a32 32 0 0 1-32 32m128-320a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonGitNetworkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGitPullRequestIcon],svg[ion-git-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 96a64 64 0 1 0-96 55.39v209.22a64 64 0 1 0 64 0V151.39A64 64 0 0 0 192 96m-64-32a32 32 0 1 1-32 32a32 32 0 0 1 32-32m0 384a32 32 0 1 1 32-32a32 32 0 0 1-32 32m288-87.39V156a92.1 92.1 0 0 0-92-92h-20V32a16 16 0 0 0-27.31-11.31l-64 64a16 16 0 0 0 0 22.62l64 64A16 16 0 0 0 304 160v-32h20a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0M384 448a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonGitPullRequestIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGlassesIcon],svg[ion-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 184h-10.9a78.7 78.7 0 0 0-16-7.18C419.5 171 396.26 168 368 168s-51.5 3-69.06 8.82c-14.06 4.69-20.25 9.86-22.25 11.87a47.94 47.94 0 0 0-41.36 0c-2-2-8.19-7.18-22.25-11.87C195.5 171 172.26 168 144 168s-51.5 3-69.06 8.82a78.7 78.7 0 0 0-16 7.18H48a16 16 0 0 0 0 32h.17c1 45.46 6.44 72.78 18.11 92.23a66.78 66.78 0 0 0 31.92 28c12.23 5.24 27.22 7.79 45.8 7.79c24.15 0 58.48-3.71 77.72-35.77c9.68-16.14 15.09-37.69 17.21-70.52A16 16 0 0 0 240 232a16 16 0 0 1 32 0a16 16 0 0 0 1.07 5.71c2.12 32.83 7.53 54.38 17.21 70.52a66.78 66.78 0 0 0 31.92 28c12.23 5.24 27.22 7.79 45.8 7.79c24.15 0 58.48-3.71 77.72-35.77c11.67-19.45 17.13-46.77 18.11-92.23h.17a16 16 0 0 0 0-32Z"></svg:path>`,
})
export class IonGlassesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGlobeIcon],svg[ion-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M340.75 344.49c5.91-20.7 9.82-44.75 11.31-67.84a4.41 4.41 0 0 0-4.46-4.65h-71.06a4.43 4.43 0 0 0-4.47 4.39v55.3a4.44 4.44 0 0 0 4.14 4.38a273.5 273.5 0 0 1 59 11.39a4.45 4.45 0 0 0 5.54-2.97m-17.17 32.82a260 260 0 0 0-46.6-9.09a4.42 4.42 0 0 0-4.91 4.29v65.24a4.47 4.47 0 0 0 6.76 3.7c15.9-9.27 29-24.84 40.84-45.43c1.94-3.36 4.89-9.15 6.67-12.69a4.29 4.29 0 0 0-2.76-6.02m-88.29-8.91a257 257 0 0 0-46.56 8.82c-2.64.76-3.75 4.4-2.55 6.79c1.79 3.56 4 8.11 5.89 11.51c13 23 26.84 37.5 41.24 45.93a4.47 4.47 0 0 0 6.76-3.7v-65.27a4.16 4.16 0 0 0-4.78-4.08m.31-96.4h-71.06a4.41 4.41 0 0 0-4.46 4.64c1.48 23.06 5.37 47.16 11.26 67.84a4.46 4.46 0 0 0 5.59 3a272.2 272.2 0 0 1 59-11.36a4.44 4.44 0 0 0 4.15-4.38V276.4a4.43 4.43 0 0 0-4.48-4.4M277 143.78a235.8 235.8 0 0 0 46.5-9.14a4.3 4.3 0 0 0 2.76-6c-1.79-3.57-4.27-8.68-6.17-12.09c-12.29-22-26.14-37.35-41.24-46a4.48 4.48 0 0 0-6.76 3.7v65.23a4.43 4.43 0 0 0 4.91 4.3m-.46 96.22h71.06a4.39 4.39 0 0 0 4.46-4.58c-1.48-22.77-5.27-47.8-11.16-68.22a4.46 4.46 0 0 0-5.59-2.95c-19 5.74-38.79 10.43-59.09 12a4.4 4.4 0 0 0-4.15 4.32v55.11a4.4 4.4 0 0 0 4.47 4.32M233.31 70.56c-15.42 8.57-29.17 24.43-41.47 46.37c-1.91 3.41-4.19 8.11-6 11.67a4.31 4.31 0 0 0 2.76 6a225.4 225.4 0 0 0 46.54 9.17a4.43 4.43 0 0 0 4.91-4.29V74.26a4.49 4.49 0 0 0-6.74-3.7m2.61 105.7c-20.3-1.55-40.11-6.24-59.09-12a4.46 4.46 0 0 0-5.59 2.95c-5.89 20.42-9.68 45.45-11.16 68.22a4.39 4.39 0 0 0 4.46 4.58h71.06a4.4 4.4 0 0 0 4.47-4.34v-55.09a4.4 4.4 0 0 0-4.15-4.32"></svg:path><svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M176.6 430.85a219 219 0 0 1-12.48-19.66c-2-3.69-4.84-9.26-6.73-13.13a7.29 7.29 0 0 0-10.31-3.16c-4.3 2.41-10 5.72-14.13 8.43a147.3 147.3 0 0 1-23.57-22.43a249 249 0 0 1 30.41-18.36c1.86-1 2.77-2.14 2.18-4.18a374.8 374.8 0 0 1-14.09-82.17a4.36 4.36 0 0 0-4.3-4.17H66.84a2 2 0 0 1-2-1.7A98 98 0 0 1 64 256a96 96 0 0 1 .86-14.29a2 2 0 0 1 2-1.7h56.74c2.29 0 4.17-1.32 4.29-3.63a372.7 372.7 0 0 1 14-81.83a4.36 4.36 0 0 0-2.19-5.11a261 261 0 0 1-29.84-17.9a170 170 0 0 1 23.14-22.8c4.08 2.68 9.4 5.71 13.66 8.11a7.89 7.89 0 0 0 11-3.42c1.88-3.87 4-8.18 6.06-11.88a222 222 0 0 1 12.54-19.91A185 185 0 0 1 256 64c28.94 0 55.9 7 80.53 18.46a202 202 0 0 1 12 19c2.59 4.66 5.34 10.37 7.66 15.32a4.29 4.29 0 0 0 5.92 1.94c5.38-2.91 11.21-6.26 16.34-9.63a171.4 171.4 0 0 1 23.2 23a245 245 0 0 1-29.06 17.31a4.35 4.35 0 0 0-2.18 5.12a348.7 348.7 0 0 1 13.85 81.4a4.33 4.33 0 0 0 4.3 4.12l56.62-.07a2 2 0 0 1 2 1.7a117.5 117.5 0 0 1 0 28.62a2 2 0 0 1-2 1.72h-56.67a4.35 4.35 0 0 0-4.3 4.17a367.4 367.4 0 0 1-13.87 81.3a4.45 4.45 0 0 0 2.19 5.19c5 2.59 10.57 5.48 15.37 8.42s9.55 6.08 14.13 9.34a172.7 172.7 0 0 1-23 22.93c-2.44-1.61-5.34-3.44-7.84-4.94c-1.72-1-4.89-2.77-6.65-3.76c-3.82-2.14-7.88-.54-9.79 3.4s-4.83 9.59-6.87 13.25a212 212 0 0 1-12.35 19.53C310.91 442.37 284.94 448 256 448s-54.77-5.63-79.4-17.15"></svg:path>`,
})
export class IonGlobeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGolfIcon],svg[ion-golf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 320.46V202.3l166.62-75.73a16 16 0 0 0 0-29.14l-176-80A16 16 0 0 0 240 32v288.46q8-.45 16-.46t16 .46"></svg:path><svg:path fill="currentColor" d="M463.33 457.5c-8.56-42.85-35.11-78.74-76.78-103.8c-32.5-19.55-72.67-31.3-114.55-33.7v79.75a16 16 0 1 1-32 0V320c-41.88 2.4-82.05 14.15-114.55 33.7c-41.67 25.06-68.22 60.95-76.78 103.8a32.49 32.49 0 0 0 6.44 27.08C61.13 492 70 496 80 496h352c10 0 18.88-4.05 24.9-11.42a32.49 32.49 0 0 0 6.43-27.08"></svg:path>`,
})
export class IonGolfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionGridIcon],svg[ion-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 240H68a36 36 0 0 1-36-36V68a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36m240 0H308a36 36 0 0 1-36-36V68a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36M204 480H68a36 36 0 0 1-36-36V308a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36m240 0H308a36 36 0 0 1-36-36V308a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36"></svg:path>`,
})
export class IonGridIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHammerIcon],svg[ion-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m280.16 242.79l-26.11-26.12a32 32 0 0 0-45.14-.12L27.38 384.08c-6.61 6.23-10.95 14.17-11.35 23.06a32.1 32.1 0 0 0 9.21 23.94l39 39.43a.5.5 0 0 0 .07.07A32.3 32.3 0 0 0 87 480h1.18c8.89-.33 16.85-4.5 23.17-11.17l168.7-180.7a32 32 0 0 0 .11-45.34M490 190l-.31-.31l-34.27-33.92a21.46 21.46 0 0 0-15.28-6.26a21.9 21.9 0 0 0-12.79 4.14c0-.43.06-.85.09-1.22c.45-6.5 1.15-16.32-5.2-25.22a258 258 0 0 0-24.8-28.74a.6.6 0 0 0-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.6 139.6 0 0 0 257.56 32C226 32 202 46.24 192.81 54.68a120 120 0 0 0-14.18 16.22a16 16 0 0 0 18.65 24.34a75 75 0 0 1 8.58-2.63a63.5 63.5 0 0 1 18.45-1.15c13.19 1.09 28.79 7.64 35.69 13.09c11.7 9.41 17.33 22.09 18.26 41.09c.18 3.82-7.72 18.14-20 34.48a16 16 0 0 0 1.45 21l34.41 34.41a16 16 0 0 0 22 .62c9.73-8.69 24.55-21.79 29.73-25c7.69-4.73 13.19-5.64 14.7-5.8a19.2 19.2 0 0 1 11.29 2.38a1.24 1.24 0 0 1-.31.95l-1.82 1.73l-.3.28a21.52 21.52 0 0 0 .05 30.54l34.26 33.91a21.45 21.45 0 0 0 15.28 6.25a21.7 21.7 0 0 0 15.22-6.2l55.5-54.82c.19-.19.38-.39.56-.59A21.87 21.87 0 0 0 490 190"></svg:path>`,
})
export class IonHammerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHandLeftIcon],svg[ion-hand-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432.8 211.44c-15.52-8.82-34.91-2.28-43.31 13.68l-41.38 84.41a7 7 0 0 1-8.93 3.43a7 7 0 0 1-4.41-6.52V72c0-13.91-12.85-24-26.77-24s-26 10.09-26 24v156.64A11.24 11.24 0 0 1 271.21 240A11 11 0 0 1 260 229V24c0-13.91-10.94-24-24.86-24S210 10.09 210 24v204.64A11.24 11.24 0 0 1 199.21 240A11 11 0 0 1 188 229V56c0-13.91-12.08-24-26-24s-26 11.09-26 25v187.64A11.24 11.24 0 0 1 125.21 256A11 11 0 0 1 114 245V120c0-13.91-11.08-24-25-24s-25.12 10.22-25 24v216c0 117.41 72 176 160 176h16c88 0 115.71-39.6 136-88l68.71-169c6.62-18 3.6-34.75-11.91-43.56"></svg:path>`,
})
export class IonHandLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHandRightIcon],svg[ion-hand-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M79.2 211.44c15.52-8.82 34.91-2.28 43.31 13.68l41.38 84.41a7 7 0 0 0 8.93 3.43a7 7 0 0 0 4.41-6.52V72c0-13.91 12.85-24 26.77-24s26 10.09 26 24v156.64A11.24 11.24 0 0 0 240.79 240A11 11 0 0 0 252 229V24c0-13.91 10.94-24 24.86-24S302 10.09 302 24v204.64A11.24 11.24 0 0 0 312.79 240A11 11 0 0 0 324 229V56c0-13.91 12.08-24 26-24s26 11.09 26 25v187.64A11.24 11.24 0 0 0 386.79 256A11 11 0 0 0 398 245V120c0-13.91 11.08-24 25-24s25.12 10.22 25 24v216c0 117.41-72 176-160 176h-16c-88 0-115.71-39.6-136-88L67.33 255c-6.66-18-3.64-34.75 11.87-43.56"></svg:path>`,
})
export class IonHandRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHappyIcon],svg[ion-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M184 208a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24m167.67 106.17c-12 40.3-50.2 69.83-95.62 69.83s-83.62-29.53-95.72-69.83a8 8 0 0 1 7.83-10.17h175.69a8 8 0 0 1 7.82 10.17M328 256a24 24 0 1 1 24-24a23.94 23.94 0 0 1-24 24"></svg:path>`,
})
export class IonHappyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHardwareChipIcon],svg[ion-hardware-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M352 128H160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32m0 216a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Z"></svg:path><svg:rect width="192" height="192" x="160" y="160" fill="currentColor" rx="8" ry="8"></svg:rect><svg:path fill="currentColor" d="M464 192a16 16 0 0 0 0-32h-16v-32a64.07 64.07 0 0 0-64-64h-32V48a16 16 0 0 0-32 0v16h-48V48a16 16 0 0 0-32 0v16h-48V48a16 16 0 0 0-32 0v16h-32a64.07 64.07 0 0 0-64 64v32H48a16 16 0 0 0 0 32h16v48H48a16 16 0 0 0 0 32h16v48H48a16 16 0 0 0 0 32h16v32a64.07 64.07 0 0 0 64 64h32v16a16 16 0 0 0 32 0v-16h48v16a16 16 0 0 0 32 0v-16h48v16a16 16 0 0 0 32 0v-16h32a64.07 64.07 0 0 0 64-64v-32h16a16 16 0 0 0 0-32h-16v-48h16a16 16 0 0 0 0-32h-16v-48Zm-80 160a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32Z"></svg:path>`,
})
export class IonHardwareChipIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHeadphoneIcon],svg[ion-headphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M447.4 238.2c-3.2-59.8-21.9-108.6-56-145.2l-.2-.2c-7.7-8.4-16.1-15.9-24.8-22.6-9-6.9-18.6-13-28.5-18.1-25.3-13.1-53-20-82.1-20-29 0-56.6 6.9-81.9 20-9.9 5.1-19.4 11.2-28.4 18.1-8.7 6.7-17 14.2-24.7 22.6l-.2.2c-34 36.6-52.7 85.5-55.9 145.2C61.9 288.9 68 368 77.7 400c20.3 67 40.4 80 72.1 80s58.2-26.4 58.2-58.9v-106c0-32.5-23.3-59-53.3-59-18 0-34 9.7-43.8 24.4 0 0-11.1-8.1-13.1-23-2.1-14.9-3.1-32.4 5.6-63 8.7-30.5 20.8-20.2 35.6-39 2.5-3.3 5.2-6.4 8-9.5 3.2-3.4 6.4-6.7 9.8-9.7 1.6-1.5 3.2-2.8 4.8-4.2 11-9.3 21-17 33.7-22.8 18.9-8.6 39.4-13.3 60.5-13.3 21 0 41.7 4.7 60.7 13.3 12.7 5.8 22.9 13.5 33.9 22.8 1.6 1.4 3.2 2.7 4.8 4.2 3.4 3 6.6 6.3 9.8 9.7 2.8 3.1 5.5 6.2 8 9.5 14.8 18.8 26.9 8.5 35.6 39 8.7 30.5 7.6 48.1 5.6 63-2.1 14.9-13.1 23-13.1 23-9.8-14.7-25.7-24.4-43.8-24.4-30 0-53.3 26.4-53.3 59v106.1c0 32.4 26.5 58.9 58.2 58.9 31.7 0 51.8-13 72.1-80 9.7-32.1 15.8-111.2 13.1-161.9z" fill="currentColor"></svg:path>`,
})
export class IonHeadphoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHeadsetIcon],svg[ion-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M411.16 97.46C368.43 55.86 311.88 32 256 32S143.57 55.86 100.84 97.46C56.45 140.67 32 197 32 256c0 26.67 8.75 61.09 32.88 125.55S137 473 157.27 477.41c5.81 1.27 12.62 2.59 18.73 2.59a60.06 60.06 0 0 0 30-8l14-8c15.07-8.82 19.47-28.13 10.8-43.35l-86.92-152.57a31.73 31.73 0 0 0-43.57-11.76l-13.69 8a56.5 56.5 0 0 0-14 11.59a4 4 0 0 1-7-2A115 115 0 0 1 64 256c0-50.31 21-98.48 59.16-135.61C160 84.55 208.39 64 256 64s96 20.55 132.84 56.39C427 157.52 448 205.69 448 256a115 115 0 0 1-1.68 17.91a4 4 0 0 1-7 2a56.5 56.5 0 0 0-14-11.59l-13.69-8a31.73 31.73 0 0 0-43.57 11.76L281.2 420.65c-8.67 15.22-4.27 34.53 10.8 43.35l14 8a60.06 60.06 0 0 0 30 8c6.11 0 12.92-1.32 18.73-2.59C375 473 423 446 447.12 381.55S480 282.67 480 256c0-59-24.45-115.33-68.84-158.54"></svg:path>`,
})
export class IonHeadsetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHeartIcon],svg[ion-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 448a32 32 0 0 1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8c-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 0 0 9.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64c.54 54.21-18.63 104.26-58.61 153c-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 0 1-18 5.56"></svg:path>`,
})
export class IonHeartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHeartBrokenIcon],svg[ion-heart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M229 288c1-18 0-38 8-55 2-5 1-10 1-15-4-21-14-40-15-60 0-1.39 1.004-4.771 1.005-6.157-3.216 2.234-7.607 4.024-11.005 5.157-20 6-17.51 2.573-34.51 13.573l-11.933 7.228c16.343-17.939 38.528-24.781 56.525-38.714.194-15.438.858-30.677 3.137-45.84C185.61 53.496 121.785 54.268 82.123 95.57c-45.497 47.344-45.497 124.101 0 171.445l152.849 159.096c-.085-10.656-.443-21.176-1.972-31.111-6-36-4-71-4-107z" fill="currentColor"></svg:path><svg:path d="M322 301c-11-26-33-44-63-50-.85 0-1.879-.543-2.936-1.319-.023.107-.041.213-.064.319-11 48-23 94-21 142 0 12.227 3.983 25.117 3.833 38.131L256 448l104-108.25c-14.847-10.479-29.572-21.129-38-38.75z" fill="currentColor"></svg:path><svg:path d="M429.874 95.57c-40.426-42.094-105.989-42.094-146.408 0L264 115.403c.075 13.175.213 26.202-3 38.597-2 10-19 19-16 31 3.003 13.213 8.166 25.705 10.732 38.559C271.014 232.084 284.771 242.896 297 256c22.801 26.766 37.747 57.459 65.283 81.371l67.591-70.355c45.501-47.345 45.501-124.102 0-171.446z" fill="currentColor"></svg:path>`,
})
export class IonHeartBrokenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHeartCircleIcon],svg[ion-heart-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m74.69 252.82c-9.38 11.44-26.4 29.73-65.7 56.41a15.93 15.93 0 0 1-18 0c-39.3-26.68-56.32-45-65.7-56.41c-20-24.37-29.58-49.4-29.3-76.5c.31-31.06 25.22-56.33 55.53-56.33c20.4 0 35 10.63 44.1 20.41a6 6 0 0 0 8.72 0c9.11-9.78 23.7-20.41 44.1-20.41c30.31 0 55.22 25.27 55.53 56.33c.3 27.1-9.29 52.13-29.28 76.5"></svg:path>`,
})
export class IonHeartCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHeartDislikeIcon],svg[ion-heart-dislike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M417.84 448a16 16 0 0 1-11.35-4.72l-365.84-368a16 16 0 1 1 22.7-22.56l365.83 368A16 16 0 0 1 417.84 448M364.92 80c-44.09 0-74.61 24.82-92.39 45.5a6 6 0 0 1-9.06 0C245.69 104.82 215.16 80 171.08 80a107.7 107.7 0 0 0-31 4.54l269.13 270.7c3-3.44 5.7-6.64 8.14-9.6c40-48.75 59.15-98.79 58.61-153C475.37 130.53 425.54 80 364.92 80M69 149.15a115.1 115.1 0 0 0-9 43.49c-.54 54.21 18.63 104.25 58.61 153c18.77 22.87 52.8 59.45 131.39 112.8a31.88 31.88 0 0 0 36 0c20.35-13.82 37.7-26.5 52.58-38.12Z"></svg:path>`,
})
export class IonHeartDislikeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHeartDislikeCircleIcon],svg[ion-heart-dislike-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m23.3 299.19c-4.41 3.2-9.16 6.55-14.31 10a15.93 15.93 0 0 1-18 0c-39.3-26.68-56.32-45-65.7-56.41c-20-24.37-29.58-49.4-29.3-76.5v-.64a4 4 0 0 1 6.82-2.72l120.95 120.2a4 4 0 0 1-.46 6.07m68 16.12a16 16 0 0 1-22.62 0l-176-176a16 16 0 0 1 22.62-22.62l176 176a16 16 0 0 1 .01 22.62Zm-14.1-65.62a3.92 3.92 0 0 1-6 .37l-124-123.21A4 4 0 0 1 206 168h1.55c20.4 0 35 10.64 44.11 20.42a5.93 5.93 0 0 0 8.7 0c9.11-9.78 23.71-20.42 44.11-20.42c30.31 0 55.22 25.27 55.53 56.33c.26 25.93-8.52 49.97-26.8 73.36"></svg:path>`,
})
export class IonHeartDislikeCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHeartHalfIcon],svg[ion-heart-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352.92 64c-48.09 0-80 29.54-96.92 51c-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153c18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0 0 36 0c78.59-53.35 112.62-89.93 131.39-112.81c40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64M256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1 1 0 0 1 .08-.16a123 123 0 0 1 21.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416"></svg:path>`,
})
export class IonHeartHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHelpIcon],svg[ion-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="40" d="M160 164s1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 298.36 248 324"></svg:path><svg:circle cx="248" cy="399.99" r="32" fill="currentColor"></svg:circle>`,
})
export class IonHelpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHelpBuoyIcon],svg[ion-help-buoy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M192.13 260.18a64 64 0 1 1 59.69 59.69a64.07 64.07 0 0 1-59.69-59.69m240-66.64l-96.37 5.84a4.06 4.06 0 0 1-3.44-1.59a96 96 0 0 0-18.07-18.07a4.06 4.06 0 0 1-1.59-3.44l5.84-96.37a4 4 0 0 1 5.42-3.51A193 193 0 0 1 435.6 188.12a4 4 0 0 1-3.51 5.42ZM193.54 79.91l5.84 96.37a4.06 4.06 0 0 1-1.59 3.44a96 96 0 0 0-18.07 18.07a4.06 4.06 0 0 1-3.44 1.59l-96.37-5.84a4 4 0 0 1-3.51-5.42A193 193 0 0 1 188.12 76.4a4 4 0 0 1 5.42 3.51M79.91 318.46l96.37-5.84a4.06 4.06 0 0 1 3.44 1.59a96 96 0 0 0 18.07 18.07a4.06 4.06 0 0 1 1.59 3.44l-5.84 96.37a4 4 0 0 1-5.42 3.51A193 193 0 0 1 76.4 323.88a4 4 0 0 1 3.51-5.42m238.55 113.63l-5.84-96.37a4.06 4.06 0 0 1 1.59-3.44a96 96 0 0 0 18.07-18.07a4.06 4.06 0 0 1 3.44-1.59l96.37 5.84a4 4 0 0 1 3.51 5.42A193 193 0 0 1 323.88 435.6a4 4 0 0 1-5.42-3.51"></svg:path>`,
})
export class IonHelpBuoyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHelpCircleIcon],svg[ion-help-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64m-6 304a20 20 0 1 1 20-20a20 20 0 0 1-20 20m33.44-102C267.23 276.88 265 286.85 265 296a14 14 0 0 1-28 0c0-21.91 10.08-39.33 30.82-53.26C287.1 229.8 298 221.6 298 203.57c0-12.26-7-21.57-21.49-28.46c-3.41-1.62-11-3.2-20.34-3.09c-11.72.15-20.82 2.95-27.83 8.59C215.12 191.25 214 202.83 214 203a14 14 0 1 1-28-1.35c.11-2.43 1.8-24.32 24.77-42.8c11.91-9.58 27.06-14.56 45-14.78c12.7-.15 24.63 2 32.72 5.82C312.7 161.34 326 180.43 326 203.57c0 33.83-22.61 49.02-42.56 62.43"></svg:path>`,
})
export class IonHelpCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHelpCircledIcon],svg[ion-help-circled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm20.2 326.7c-.5 17.8-13.7 28.8-30.8 28.3-16.4-.5-29.3-12.2-28.8-30.1.5-17.8 14.1-29.1 30.5-28.6 17.2.5 29.7 12.6 29.1 30.4zm48.7-127.3c-4.2 5.9-13.6 13.5-25.4 22.7l-13.1 9c-6.4 4.9-10.4 10.7-12.5 17.3-1.1 3.5-1.9 12.6-2.1 18.7-.1 1.2-.8 3.9-4.5 3.9h-39.1c-4.1 0-4.6-2.4-4.5-3.6.6-16.6 3-30.3 9.9-41.3 9.3-14.8 35.5-30.4 35.5-30.4 4-3 7.1-6.2 9.5-9.7 4.4-6 8-12.7 8-19.9 0-8.3-2-16.2-7.3-22.8-6.2-7.7-12.9-11.4-25.8-11.4-12.7 0-20.1 6.4-25.4 14.8-5.3 8.4-4.4 18.3-4.4 27.3H175c0-34 8.9-55.7 27.7-68.5 12.7-8.7 28.9-12.5 47.8-12.5 24.8 0 44.5 4.6 61.9 17.8 16.1 12.2 24.6 29.4 24.6 52.6 0 14.3-5 26.3-12.1 36z" fill="currentColor"></svg:path>`,
})
export class IonHelpCircledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHomeIcon],svg[ion-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"></svg:path><svg:path fill="currentColor" d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97"></svg:path>`,
})
export class IonHomeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionHourglassIcon],svg[ion-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M415.7 427.13c-8.74-76.89-43.83-108.76-69.46-132C328.52 279 320 270.61 320 256c0-14.41 8.49-22.64 26.16-38.44c25.93-23.17 61.44-54.91 69.56-132.84a47 47 0 0 0-12-36.26A50.3 50.3 0 0 0 366.39 32H145.61a50.34 50.34 0 0 0-37.39 16.46a47.05 47.05 0 0 0-11.94 36.26c8.09 77.68 43.47 109.19 69.3 132.19C183.42 232.8 192 241.09 192 256c0 15.1-8.6 23.56-26.5 39.75c-25.5 23.1-60.5 54.73-69.2 131.38a46.6 46.6 0 0 0 11.7 36.2A50.44 50.44 0 0 0 145.61 480h220.78A50.44 50.44 0 0 0 404 463.33a46.6 46.6 0 0 0 11.7-36.2M343.3 432H169.13c-15.6 0-20-18-9.06-29.16C186.55 376 240 356.78 240 326V224c0-19.85-38-35-61.51-67.2c-3.88-5.31-3.49-12.8 6.37-12.8h142.73c8.41 0 10.22 7.43 6.4 12.75C310.82 189 272 204.05 272 224v102c0 30.53 55.71 47 80.4 76.87c9.95 12.04 6.47 29.13-9.1 29.13"></svg:path>`,
})
export class IonHourglassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIceCreamIcon],svg[ion-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183 352c-21.84-.52-39-18.9-39-40.74v-34.07a8 8 0 0 0-6-7.74c-33.75-8.85-58-39.71-58-77.45a80.14 80.14 0 0 1 66.27-78.82a8 8 0 0 0 6.62-6.83a104 104 0 0 1 206.22 0a8 8 0 0 0 6.62 6.83A80 80 0 0 1 352 272a74.33 74.33 0 0 1-47.45-17.41a7.93 7.93 0 0 0-9.92-.14A62.9 62.9 0 0 1 256 268a80.5 80.5 0 0 1-21.8-3.18a8 8 0 0 0-10.2 7.69V312a40 40 0 0 1-41 40"></svg:path><svg:path fill="currentColor" d="M263.39 299.7a8 8 0 0 0-7.39 7.91V312a72.11 72.11 0 0 1-50.69 68.76a8 8 0 0 0-4.91 10.78l40.91 94.8A16 16 0 0 0 256 496a16 16 0 0 0 14.69-9.7l73.78-172.15a8 8 0 0 0-6.2-11.07a106.3 106.3 0 0 1-35.9-11.59a8 8 0 0 0-7.13-.2a95 95 0 0 1-31.85 8.41"></svg:path>`,
})
export class IonIceCreamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIcecreamIcon],svg[ion-icecream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 256l128 224 128-224z" fill="currentColor"></svg:path><svg:path d="M402.5 172.6c-.8-.4-1.5-.8-2.3-1.3-4.4-2.8-8.4-8.5-8.7-12.7l.1-.7c3.2-9 5-19.2 5-29.8 0-53.1-43-96.1-96.1-96.1-31.4 0-59.2 15-76.8 38.3 0 0-9.1 14-10.8 29 0 0 1.1-19.4 4.2-31.5-7.4-2.5-15.4-3.8-23.6-3.8-41.7 0-75.6 33.8-75.6 75.6 0 6.4.8 12.6 2.3 18.5 0 .4-.1.7-.2 1-.9 5.1-4 9.5-8.4 12.3-.7.5-1.5.9-2.2 1.3-8.2 5-13.5 13.6-13.5 23.4 0 15.4 13.5 28 29.9 28H386c16.4 0 29.8-12.5 29.8-28 .2-9.8-5.2-18.5-13.3-23.5z" fill="currentColor"></svg:path>`,
})
export class IonIcecreamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIdCardIcon],svg[ion-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 16H144a64.07 64.07 0 0 0-64 64v352a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m-34.52 268.51c7.57 8.17 11.27 19.16 10.39 30.94C342.14 338.91 324.25 358 304 358s-38.17-19.09-39.88-42.55c-.86-11.9 2.81-22.91 10.34-31S292.4 272 304 272a39.65 39.65 0 0 1 29.48 12.51M192 80a16 16 0 0 1 16-16h96a16 16 0 0 1 0 32h-96a16 16 0 0 1-16-16m189 363.83a12.05 12.05 0 0 1-9.31 4.17H236.31a12.05 12.05 0 0 1-9.31-4.17a13 13 0 0 1-2.76-10.92c3.25-17.56 13.38-32.31 29.3-42.66C267.68 381.06 285.6 376 304 376s36.32 5.06 50.46 14.25c15.92 10.35 26.05 25.1 29.3 42.66a13 13 0 0 1-2.76 10.92"></svg:path>`,
})
export class IonIdCardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionImageIcon],svg[ion-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 64H96a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V128a64.07 64.07 0 0 0-64-64m-80 64a48 48 0 1 1-48 48a48.05 48.05 0 0 1 48-48M96 416a32 32 0 0 1-32-32v-67.63l94.84-84.3a48.06 48.06 0 0 1 65.8 1.9l64.95 64.81L172.37 416Zm352-32a32 32 0 0 1-32 32H217.63l121.42-121.42a47.72 47.72 0 0 1 61.64-.16L448 333.84Z"></svg:path>`,
})
export class IonImageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionImagesIcon],svg[ion-images-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M450.29 112H142c-34 0-62 27.51-62 61.33v245.34c0 33.82 28 61.33 62 61.33h308c34 0 62-26.18 62-60V173.33c0-33.82-27.68-61.33-61.71-61.33m-77.15 61.34a46 46 0 1 1-46.28 46a46.19 46.19 0 0 1 46.28-46.01Zm-231.55 276c-17 0-29.86-13.75-29.86-30.66v-64.83l90.46-80.79a46.54 46.54 0 0 1 63.44 1.83L328.27 337l-113 112.33ZM480 418.67a30.67 30.67 0 0 1-30.71 30.66H259L376.08 333a46.24 46.24 0 0 1 59.44-.16L480 370.59Z"></svg:path><svg:path fill="currentColor" d="M384 32H64A64 64 0 0 0 0 96v256a64.11 64.11 0 0 0 48 62V152a72 72 0 0 1 72-72h326a64.11 64.11 0 0 0-62-48"></svg:path>`,
})
export class IonImagesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionInfiniteIcon],svg[ion-infinite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c30 0 56.45-13.18 78-32m48-64s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-29.37 0-56.66 13.75-78 32"></svg:path>`,
})
export class IonInfiniteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionInformationIcon],svg[ion-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="40" d="M196 220h64v172"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="40" d="M187 396h138"></svg:path><svg:path fill="currentColor" d="M256 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonInformationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionInformationCircleIcon],svg[ion-information-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200s200-89.72 200-200S366.28 56 256 56m0 82a26 26 0 1 1-26 26a26 26 0 0 1 26-26m48 226h-88a16 16 0 0 1 0-32h28v-88h-16a16 16 0 0 1 0-32h32a16 16 0 0 1 16 16v104h28a16 16 0 0 1 0 32"></svg:path>`,
})
export class IonInformationCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionInformationCircledIcon],svg[ion-information-circled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 253C478.3 129.3 376.7 30.4 253 32S30.4 135.3 32 259c1.7 123.7 103.3 222.6 227 221 123.7-1.7 222.7-103.3 221-227zM256 111.9c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM300 395h-88v-11h22V224h-22v-12h66v172h22v11z" fill="currentColor"></svg:path>`,
})
export class IonInformationCircledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionInvertModeIcon],svg[ion-invert-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="currentColor" d="M256 176v160a80 80 0 0 0 0-160m0-128v128a80 80 0 0 0 0 160v128c-114.88 0-208-93.12-208-208S141.12 48 256 48"></svg:path>`,
})
export class IonInvertModeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIonicIcon],svg[ion-ionic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M423.592 132.804A31.855 31.855 0 0 0 429 115c0-17.675-14.33-32-32-32a31.853 31.853 0 0 0-17.805 5.409C344.709 63.015 302.11 48 256 48 141.125 48 48 141.125 48 256c0 114.877 93.125 208 208 208 114.873 0 208-93.123 208-208 0-46.111-15.016-88.71-40.408-123.196zM391.83 391.832c-17.646 17.646-38.191 31.499-61.064 41.174-23.672 10.012-48.826 15.089-74.766 15.089-25.94 0-51.095-5.077-74.767-15.089-22.873-9.675-43.417-23.527-61.064-41.174s-31.5-38.191-41.174-61.064C68.982 307.096 63.905 281.94 63.905 256c0-25.94 5.077-51.095 15.089-74.767 9.674-22.873 23.527-43.417 41.174-61.064s38.191-31.5 61.064-41.174c23.673-10.013 48.828-15.09 74.768-15.09 25.939 0 51.094 5.077 74.766 15.089a191.221 191.221 0 0 1 37.802 21.327A31.853 31.853 0 0 0 365 115c0 17.675 14.327 32 32 32 5.293 0 10.28-1.293 14.678-3.568a191.085 191.085 0 0 1 21.327 37.801c10.013 23.672 15.09 48.827 15.09 74.767 0 25.939-5.077 51.096-15.09 74.768-9.675 22.873-23.527 43.418-41.175 61.064z" fill="currentColor"></svg:path><svg:circle cx="256.003" cy="256" r="96" fill="currentColor"></svg:circle>`,
})
export class IonIonicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAddIcon],svg[ion-ios-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" fill="currentColor"></svg:path>`,
})
export class IonIosAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAddCircleIcon],svg[ion-ios-add-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm90.5 224H272v74.5c0 8.8-7.2 16-16 16-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3V272h-74.5c-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3 0-8.8 7.2-16 16-16H240v-74.5c0-8.8 7.2-16 16-16s16 7.2 16 16V240h74.5c8.8 0 16 7.2 16 16s-7.2 16-16 16z" fill="currentColor"></svg:path>`,
})
export class IonIosAddCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAirplaneIcon],svg[ion-ios-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M407.7 224c-3.4 0-14.8.1-18 .3l-64.9 1.7c-.7 0-1.4-.3-1.7-.9L225.8 79.4c-2.9-4.6-8.1-7.4-13.5-7.4h-23.7c-5.6 0-7.5 5.6-5.5 10.8l50.1 142.8c.5 1.3-.4 2.7-1.8 2.7L109 230.1c-2.6.1-5-1.1-6.6-3.1l-37-45c-3-3.9-7.7-6.1-12.6-6.1H36c-2.8 0-4.7 2.7-3.8 5.3l19.9 68.7c1.5 3.8 1.5 8.1 0 11.9l-19.9 68.7c-.9 2.6 1 5.3 3.8 5.3h16.7c4.9 0 9.6-2.3 12.6-6.1L103 284c1.6-2 4.1-3.2 6.6-3.1l121.7 2.7c1.4.1 2.3 1.4 1.8 2.7L183 429.2c-2 5.2-.1 10.8 5.5 10.8h23.7c5.5 0 10.6-2.8 13.5-7.4L323.1 287c.4-.6 1-.9 1.7-.9l64.9 1.7c3.3.2 14.6.3 18 .3 44.3 0 72.3-14.3 72.3-32S452.1 224 407.7 224z" fill="currentColor"></svg:path>`,
})
export class IonIosAirplaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAlarmIcon],svg[ion-ios-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M381.2 64.1c-1.3-.1-2.6-.1-3.9-.1h-.2c-16.2 0-32 5.4-44.6 15.1-1.6 1.3-2.6 3.2-2.7 5.2-.1 2 .8 4 2.3 5.4l89.8 80.5c1.3 1.1 2.9 1.8 4.6 1.8h.4c1.9-.1 3.6-1 4.8-2.4C440.9 159 448 150.8 448 133c.1-36.4-29.1-66.8-66.8-68.9z" fill="currentColor"></svg:path><svg:path d="M64 133c0 17.8 7.1 26 16.3 36.6 1.2 1.4 2.9 2.3 4.8 2.4h.4c1.7 0 3.3-.6 4.6-1.8L180 89.7c1.5-1.4 2.4-3.3 2.3-5.4-.1-2-1-3.9-2.7-5.2C167 69.4 151.2 64 135 64h-.2c-1.3 0-2.6 0-3.9.1-37.7 2.1-67 32.5-66.9 68.9z" fill="currentColor"></svg:path><svg:g><svg:path d="M390 386c26.2-30.7 42-70.5 42-114 0-97.2-78.8-176-176-176S80 174.8 80 272c0 43.5 15.8 83.3 42 114l-34.7 35.5c-6.2 6.3-6 15.5.3 21.6 3.1 3 7.4 4.8 11.4 4.8 4.2 0 8.1-1.9 11.2-5.1l34.6-34.5c30.3 24.7 69 39.6 111.2 39.6s80.9-14.8 111.2-39.6l33.6 34.5c3.1 3.2 7.3 5.1 11.5 5.1 4 0 8.1-1.8 11.2-4.8 6.3-6.2 7.5-15.3 1.3-21.6L390 386zM270 274c0 7.7-6.3 14-14 14h-82c-7.7 0-14-6.3-14-14s6.3-14 14-14h68V158c0-7.7 6.3-14 14-14s14 6.3 14 14v116z" fill="currentColor"></svg:path></svg:g>`,
})
export class IonIosAlarmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAlbumsIcon],svg[ion-ios-albums-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M460.9 161H51.1C31.8 161 16 176.8 16 196.1V428c0 19.3 15.8 35.1 35.1 35.1H461c19.3 0 35.1-15.8 35.1-35.1V196.1c-.1-19.3-15.9-35.1-35.2-35.1z" fill="currentColor"></svg:path><svg:path d="M434 133H78c-7.7 0-14-6.3-14-14s6.3-14 14-14h356c7.7 0 14 6.3 14 14s-6.3 14-14 14z" fill="currentColor"></svg:path><svg:path d="M403.2 77H108.8c-7 0-12.8-5.8-12.8-12.8v-2.4c0-7 5.8-12.8 12.8-12.8h294.4c7 0 12.8 5.8 12.8 12.8v2.4c0 7-5.8 12.8-12.8 12.8z" fill="currentColor"></svg:path>`,
})
export class IonIosAlbumsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAlertIcon],svg[ion-ios-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm17.2 109.6l-3.1 115.1c-.2 8.2-5.9 14.8-14.1 14.8s-13.9-6.6-14.1-14.8l-3.1-115.1c-.2-9.6 7.5-17.6 17.2-17.6 9.6 0 17.4 7.9 17.2 17.6zM256 354c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4c10.7 0 19.1 8.1 19.1 18.4S266.7 354 256 354z" fill="currentColor"></svg:path>`,
})
export class IonIosAlertIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAmericanFootballIcon],svg[ion-ios-american-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M378.6 133.4C338.1 92.9 283.9 71 231.4 59.6L59.6 231.4C71 284 92.9 338.1 133.4 378.6c40.5 40.5 94.7 62.4 147.2 73.8l171.8-171.8c-11.4-52.5-33.3-106.7-73.8-147.2zM344.1 288l-19.2 19.2 14.8 14.8c4.9 4.9 4.9 12.7 0 17.6-4.9 4.9-12.7 4.9-17.6 0l-14.8-14.8-19.3 19.4c-2 2-4.5 3.4-7.3 3.9-4.2.7-8.4-.7-11.3-3.6-1.5-1.5-2.6-3.3-3.2-5.3-1.4-4.9-.1-9.7 3.2-13.1l19.5-19.5-15.6-15.6-19.3 19.3c-2.1 2.1-4.7 3.5-7.6 3.9-5.5.7-10.7-1.9-13.4-7-.3-.6-.6-1.2-.8-1.9-1.5-4.9-.2-9.8 3.2-13.2l19.5-19.5-15.5-15.6-19.3 19.3c-2.1 2.1-4.7 3.5-7.6 3.9-5.5.7-10.7-1.9-13.4-7-.3-.6-.6-1.2-.8-1.9-1.5-4.9-.2-9.8 3.2-13.2l19.5-19.5-15.5-15.6-19.3 19.3c-2.1 2.1-4.7 3.5-7.6 3.9-5.5.7-10.7-1.9-13.4-7-.3-.6-.6-1.2-.8-1.9-1.5-4.9-.2-9.8 3.2-13.2l19.5-19.5-14.8-14.8c-4.9-4.9-4.9-12.7 0-17.6 4.9-4.9 12.7-4.9 17.6 0l14.8 14.8 19.3-19.3c2.1-2.1 4.7-3.5 7.6-3.9 5.5-.7 10.7 1.9 13.4 7 .3.6.6 1.2.8 1.9 1.5 4.9.2 9.8-3.2 13.2l-19.5 19.5 15.6 15.6 19.3-19.3c2-2 4.5-3.4 7.3-3.9 4.2-.7 8.4.7 11.3 3.6 1.5 1.4 2.6 3.2 3.2 5.2 1.5 4.9.2 9.8-3.2 13.2L257 239.4l15.6 15.6 19.3-19.3c2.1-2.1 4.7-3.5 7.6-3.9 5.5-.7 10.7 1.9 13.4 7 .3.6.6 1.2.8 1.9 1.5 4.9.2 9.8-3.2 13.2L291 273.4l15.6 15.6 19.3-19.3c2.2-2.2 5-3.6 8-4 4.4-.5 8.6 1.2 11.4 4.6 4.1 5 3.5 13.1-1.2 17.7z" fill="currentColor"></svg:path><svg:path d="M395.1 464c27.6 0 48.8-1.8 58.8-2.9 3.7-.4 6.7-3.4 7.1-7.1 2-18.9 6.8-77.6-3.2-143.7L310.3 457.9c31 4.7 60.4 6.1 84.8 6.1z" fill="currentColor"></svg:path><svg:path d="M116.8 48C89.3 48 68 49.8 58 50.9c-3.7.4-6.7 3.4-7.1 7.1-2 18.9-6.8 77.6 3.2 143.6L201.6 54.1c-31-4.7-60.4-6.1-84.8-6.1z" fill="currentColor"></svg:path>`,
})
export class IonIosAmericanFootballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAmericanfootballIcon],svg[ion-ios-americanfootball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M378.605 133.395C305.902 60.691 189.381 47.998 116.85 48c-38.926.001-65.191 3.658-65.191 3.658s-29.984 215.227 81.736 326.947C206.099 451.309 322.617 464 395.148 464c38.927 0 65.193-3.658 65.193-3.658s29.986-215.226-81.736-326.947zM68.124 194.728L194.707 68.146a471.283 471.283 0 0 1 18.112 2.899L71.025 212.838a476.047 476.047 0 0 1-2.901-18.11zm199.188 140.467L296 306.507l-22.627-22.628-28.688 28.688-11.313-11.312 28.688-28.688-22.627-22.627-28.688 28.688-11.313-11.312 28.688-28.688L205.492 216l-28.688 28.688-11.313-11.312 28.689-28.689-22.628-22.627-28.688 28.688-11.314-11.313 67.884-67.883 11.313 11.314-28.688 28.688 22.628 22.627 28.688-28.688 11.313 11.313L216 205.494l22.628 22.628 28.688-28.688 11.314 11.313-28.688 28.688 22.627 22.627 28.688-28.688 11.313 11.312-28.688 28.688 22.628 22.628 28.688-28.688 11.312 11.313-28.688 28.688 22.627 22.627 28.688-28.688 11.314 11.312-67.883 67.884-11.313-11.313 28.688-28.688-22.628-22.628-28.688 28.688-11.315-11.314zm49.947 108.696a470.498 470.498 0 0 1-18.104-2.906L440.979 299.16a474.432 474.432 0 0 1 2.901 18.111l-126.621 126.62z" fill="currentColor"></svg:path>`,
})
export class IonIosAmericanfootballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAnalyticsIcon],svg[ion-ios-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zM76 256c0-48.1 18.7-93.3 52.7-127.3S207.9 76 256 76c48.1 0 93.3 18.7 127.3 52.7 32.2 32.2 50.7 74.5 52.6 119.7-8.8-10.3-24.2-24-43.8-24-27.5 0-41.7 25.7-51 42.7-1.4 2.5-2.7 4.9-3.9 7-11.4 19.2-27.3 30-42.5 28.9-13.4-.9-24.8-11.2-32.2-28.8-9.2-22.1-29.1-45.8-52.9-49.2-11.3-1.6-28.1.8-44.7 21.4-3.2 4-6.9 9.4-11.1 15.6-10.4 15.5-26.2 38.8-38.1 40.8-17.3 2.8-30.9-7.5-36.4-12.3-2.2-11.2-3.3-22.8-3.3-34.5z" fill="currentColor"></svg:path>`,
})
export class IonIosAnalyticsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosApertureIcon],svg[ion-ios-aperture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M250.2 371.4c-1.8 0-2.7 2.2-1.4 3.4l54.9 54.9L326 452c42.4-15.2 78.5-43.7 103.1-80.6H250.2z" fill="currentColor"></svg:path><svg:path d="M167 334.6V444c27 12.8 57.1 20 89 20 14.1 0 27.9-1.4 41.2-4.1L170.4 333.2c-1.2-1.3-3.4-.4-3.4 1.4z" fill="currentColor"></svg:path><svg:path d="M256 48c-13.9 0-27.4 1.4-40.5 4l126.8 126.8c1.3 1.3 3.4.4 3.4-1.4V68.3C318.6 55.3 288.2 48 256 48z" fill="currentColor"></svg:path><svg:path d="M68.1 166.6C55.2 193.7 48 224 48 256c0 14.1 1.4 27.9 4.1 41.2L179.2 170c1.3-1.3.4-3.4-1.4-3.4H68.1z" fill="currentColor"></svg:path><svg:path d="M186.7 59.9C144 75 107.7 103.6 83 140.7h179.7c1.8 0 2.7-2.2 1.4-3.4l-77.4-77.4z" fill="currentColor"></svg:path><svg:path d="M167 220.6v70.7c0 1.1.4 2.1 1.2 2.8l50 50c.8.8 1.8 1.2 2.8 1.2h70.7c1.1 0 2.1-.4 2.8-1.2l50-50c.8-.8 1.2-1.8 1.2-2.8v-70.7c0-1.1-.4-2.1-1.2-2.8l-50-50c-.8-.8-1.8-1.2-2.8-1.2H221c-1.1 0-2.1.4-2.8 1.2l-50 50c-.7.8-1.2 1.8-1.2 2.8z" fill="currentColor"></svg:path><svg:path d="M460 215.5L333.6 342c-1.3 1.3-.4 3.4 1.4 3.4h108.8c13-27.1 20.2-57.4 20.2-89.4 0-13.9-1.4-27.4-4-40.5z" fill="currentColor"></svg:path><svg:path d="M371.8 83.2v179c0 1.8 2.2 2.7 3.4 1.4l76.9-76.9c-15-42.6-43.5-78.8-80.3-103.5z" fill="currentColor"></svg:path><svg:path d="M60.1 325.9c15.2 42.6 43.9 78.8 81 103.4V249.8c0-1.8-2.2-2.7-3.4-1.4l-77.6 77.5z" fill="currentColor"></svg:path>`,
})
export class IonIosApertureIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAppsIcon],svg[ion-ios-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M434.8 137.6L285.4 69.5c-16.2-7.4-42.7-7.4-58.9 0L77.2 137.6c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1z" fill="currentColor"></svg:path><svg:path d="M225.2 375.2l-99.8-45.5c-4.2-1.9-9.1-1.9-13.3 0l-34.9 15.9c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-34.9-15.9c-4.2-1.9-9.1-1.9-13.3 0l-99.8 45.5c-16.9 7.7-44.7 7.7-61.6 0z" fill="currentColor"></svg:path><svg:path d="M434.8 241.6l-31.7-14.4c-4.2-1.9-9-1.9-13.2 0l-108 48.9c-15.3 5.2-36.6 5.2-51.9 0l-108-48.9c-4.2-1.9-9-1.9-13.2 0l-31.7 14.4c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.7-8 17.7-21.1.1-29.1z" fill="currentColor"></svg:path>`,
})
export class IonIosAppsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAppstoreIcon],svg[ion-ios-appstore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-78.9 296.9c-2.7 4.6-7.5 7.1-12.5 7.1-2.5 0-5-.6-7.3-2-6.9-4-9.2-12.8-5.2-19.7l14.2-23.6c1.5-2.5 4.1-4 7-4h2.1c10.3 0 17.5 6.2 19.6 12.2l-17.9 30zm120.2-46.4l-93 .1h-61.8c-8.2 0-14.8-6.8-14.4-15 .3-7.8 7.1-13.7 14.9-13.7h44.8l53.1-90.4-17.2-29.3c-3.9-6.7-2.2-15.5 4.4-19.7 7-4.5 16.2-2.2 20.3 4.8l9.2 15.7h.1l9.2-15.7c4.1-7 13.4-9.3 20.3-4.8 6.6 4.2 8.3 13 4.4 19.7l-17.2 29.3-16.7 28.5-36.3 61.9v.1h53.5c6.7 0 15.1 3.6 18.5 9.4l.3.6c3 5.1 4.7 8.6 4.7 13.7-.1 2.8-1.1 4.8-1.1 4.8zm72.2.1h-25.2v.1l18.4 31.3c4 6.8 2.1 15.8-4.8 20-2.3 1.4-4.9 2.1-7.5 2.1-5 0-9.8-2.6-12.5-7.1l-27.2-46.3-16.9-28.8-21.8-37.3c-6.4-10.9-6.7-24.5-.6-35.3 4.3-7.6 7.6-9.6 7.6-9.6l48.5 82.1h41.7c7.8 0 14.5 6 14.9 13.7.3 8.3-6.3 15.1-14.6 15.1z" fill="currentColor"></svg:path>`,
})
export class IonIosAppstoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArchiveIcon],svg[ion-ios-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M460 120H52c-2.2 0-4-1.8-4-4V96c0-17.7 14.3-32 32-32h352c17.7 0 32 14.3 32 32v20c0 2.2-1.8 4-4 4z" fill="currentColor"></svg:path><svg:path d="M440 146H72c-4.4 0-8 3.6-8 8v262c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V154c0-4.4-3.6-8-8-8zM306 288h-99.6c-7.1 0-13.4-5.2-14.3-12.3-1-8.5 5.6-15.7 13.9-15.7h99.6c7.1 0 13.4 5.2 14.3 12.3 1 8.4-5.6 15.7-13.9 15.7z" fill="currentColor"></svg:path>`,
})
export class IonIosArchiveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowBackIcon],svg[ion-ios-arrow-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowDownIcon],svg[ion-ios-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowDropdownIcon],svg[ion-ios-arrow-dropdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M147.6 210.7c-7.5 7.5-7.5 19.8 0 27.3l95.7 95.4c7.3 7.3 19.1 7.5 26.6.6l94.3-94c3.8-3.8 5.7-8.7 5.7-13.7 0-4.9-1.9-9.9-5.6-13.6-7.5-7.5-19.7-7.6-27.3 0l-81 79.8-81.1-81.9c-7.5-7.5-19.7-7.5-27.3.1z" fill="currentColor"></svg:path><svg:path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm332.4-124.4C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256s18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowDropdownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowDropdownCircleIcon],svg[ion-ios-arrow-dropdown-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm289.1-43.4c7.5-7.5 19.8-7.5 27.3 0 3.8 3.8 5.6 8.7 5.6 13.6s-1.9 9.9-5.7 13.7l-94.3 94c-7.6 6.9-19.3 6.7-26.6-.6l-95.7-95.4c-7.5-7.5-7.6-19.7 0-27.3 7.5-7.5 19.7-7.6 27.3 0l81.1 81.9 81-79.9z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowDropdownCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowDropleftIcon],svg[ion-ios-arrow-dropleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M301.3 147.6c-7.5-7.5-19.8-7.5-27.3 0l-95.4 95.7c-7.3 7.3-7.5 19.1-.6 26.6l94 94.3c3.8 3.8 8.7 5.7 13.7 5.7 4.9 0 9.9-1.9 13.6-5.6 7.5-7.5 7.6-19.7 0-27.3l-79.8-81 81.9-81.1c7.5-7.5 7.5-19.7-.1-27.3z" fill="currentColor"></svg:path><svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm124.4 332.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256s18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowDropleftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowDropleftCircleIcon],svg[ion-ios-arrow-dropleft-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm43.4 289.1c7.5 7.5 7.5 19.8 0 27.3-3.8 3.8-8.7 5.6-13.6 5.6s-9.9-1.9-13.7-5.7l-94-94.3c-6.9-7.6-6.7-19.3.6-26.6l95.4-95.7c7.5-7.5 19.7-7.6 27.3 0 7.5 7.5 7.6 19.7 0 27.3l-81.9 81 79.9 81.1z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowDropleftCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowDroprightIcon],svg[ion-ios-arrow-dropright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M210.7 147.6c7.5-7.5 19.8-7.5 27.3 0l95.4 95.7c7.3 7.3 7.5 19.1.6 26.6l-94 94.3c-3.8 3.8-8.7 5.7-13.7 5.7-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.6-19.7 0-27.3l79.9-81.1-81.9-81.1c-7.6-7.4-7.6-19.6 0-27.2z" fill="currentColor"></svg:path><svg:path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm32 0c0-47 18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowDroprightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowDroprightCircleIcon],svg[ion-ios-arrow-dropright-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm244.5 0l-81.9-81.1c-7.5-7.5-7.5-19.8 0-27.3s19.8-7.5 27.3 0l95.4 95.7c7.3 7.3 7.5 19.1.6 26.6l-94 94.3c-3.8 3.8-8.7 5.7-13.7 5.7-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.6-19.7 0-27.3l79.9-81z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowDroprightCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowDropupIcon],svg[ion-ios-arrow-dropup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M147.6 301.3c-7.5-7.5-7.5-19.8 0-27.3l95.7-95.4c7.3-7.3 19.1-7.5 26.6-.6l94.3 94c3.8 3.8 5.7 8.7 5.7 13.7 0 4.9-1.9 9.9-5.6 13.6-7.5 7.5-19.7 7.6-27.3 0l-81-79.8-81.1 81.9c-7.5 7.5-19.7 7.5-27.3-.1z" fill="currentColor"></svg:path><svg:path d="M256 464c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208zm0-32c-47 0-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256s18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowDropupIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowDropupCircleIcon],svg[ion-ios-arrow-dropup-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 464c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208zm0-244.5l-81.1 81.9c-7.5 7.5-19.8 7.5-27.3 0s-7.5-19.8 0-27.3l95.7-95.4c7.3-7.3 19.1-7.5 26.6-.6l94.3 94c3.8 3.8 5.7 8.7 5.7 13.7 0 4.9-1.9 9.9-5.6 13.6-7.5 7.5-19.7 7.6-27.3 0l-81-79.9z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowDropupCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowForwardIcon],svg[ion-ios-arrow-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowLeftIcon],svg[ion-ios-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowRightIcon],svg[ion-ios-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowRoundBackIcon],svg[ion-ios-arrow-round-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowRoundBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowRoundDownIcon],svg[ion-ios-arrow-round-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M348.3 295.6c-5-5.1-13.3-5.1-18.4-.1L269 356.2V124.9c0-7.1-5.8-12.9-13-12.9s-13 5.8-13 12.9v231.3l-60.9-60.8c-5.1-5-13.3-4.9-18.4.1-5 5.1-5 13.2.1 18.3l83 82.4c1.2 1.1 2.5 2 4.1 2.7 1.6.7 3.3 1 5 1 3.4 0 6.6-1.3 9.1-3.7l83-82.4c5.2-4.9 5.3-13.1.3-18.2z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowRoundDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowRoundForwardIcon],svg[ion-ios-arrow-round-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowRoundForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowRoundUpIcon],svg[ion-ios-arrow-round-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M348.3 216.4c-5 5.1-13.3 5.1-18.4.1L269 155.8v231.3c0 7.1-5.8 12.9-13 12.9s-13-5.8-13-12.9V155.8l-60.9 60.8c-5.1 5-13.3 4.9-18.4-.1-5-5.1-5-13.2.1-18.3l83-82.4c1.2-1.1 2.5-2 4.1-2.7 1.6-.7 3.3-1 5-1 3.4 0 6.6 1.3 9.1 3.7l83 82.4c5.2 4.9 5.3 13.1.3 18.2z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowRoundUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowThinDownIcon],svg[ion-ios-arrow-thin-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M349.7 322.2c-3.1-3.1-8-3-11.3 0L264 388.6V104c0-4.4-3.6-8-8-8s-8 3.6-8 8v284.6l-74.4-66.3c-3.4-2.9-8.1-3.2-11.2-.1-3.1 3.1-3.3 8.5-.1 11.4 0 0 87 79.2 88 80s2.8 2.4 5.7 2.4 4.9-1.6 5.7-2.4 88-80 88-80c1.5-1.5 2.3-3.6 2.3-5.7s-.8-4.1-2.3-5.7z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowThinDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowThinLeftIcon],svg[ion-ios-arrow-thin-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M189.8 349.7c3.1-3.1 3-8 0-11.3L123.4 264H408c4.4 0 8-3.6 8-8s-3.6-8-8-8H123.4l66.3-74.4c2.9-3.4 3.2-8.1.1-11.2-3.1-3.1-8.5-3.3-11.4-.1 0 0-79.2 87-80 88S96 253.1 96 256s1.6 4.9 2.4 5.7 80 88 80 88c1.5 1.5 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowThinLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowThinRightIcon],svg[ion-ios-arrow-thin-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M322.2 349.7c-3.1-3.1-3-8 0-11.3l66.4-74.4H104c-4.4 0-8-3.6-8-8s3.6-8 8-8h284.6l-66.3-74.4c-2.9-3.4-3.2-8.1-.1-11.2 3.1-3.1 8.5-3.3 11.4-.1 0 0 79.2 87 80 88s2.4 2.8 2.4 5.7-1.6 4.9-2.4 5.7-80 88-80 88c-1.5 1.5-3.6 2.3-5.7 2.3s-4.1-.8-5.7-2.3z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowThinRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowThinUpIcon],svg[ion-ios-arrow-thin-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M349.7 189.8c-3.1 3.1-8 3-11.3 0L264 123.4V408c0 4.4-3.6 8-8 8s-8-3.6-8-8V123.4l-74.4 66.3c-3.4 2.9-8.1 3.2-11.2.1-3.1-3.1-3.3-8.5-.1-11.4 0 0 87-79.2 88-80s2.8-2.4 5.7-2.4 4.9 1.6 5.7 2.4 88 80 88 80c1.5 1.5 2.3 3.6 2.3 5.7s-.8 4.1-2.3 5.7z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowThinUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowUpIcon],svg[ion-ios-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAtIcon],svg[ion-ios-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 234.3c0 74.1-34.7 120.8-89.6 120.8-28.1 0-49.5-15-53.2-37.3h-4c-9.9 23.2-30.3 35.9-57.7 35.9-48.8 0-81.4-39.1-81.4-97.3 0-55.9 32.8-94.8 80.7-94.8 24.6 0 45.5 12.4 54.7 32.7h4v-27.8h39.9v129.3c0 16.1 8.9 25.8 24.9 25.8 27.7 0 45.3-33.6 45.3-85.8 0-83.3-62.4-139-154.6-139-91.2 0-156.2 66.5-156.2 160.6 0 96.2 64.3 157.6 164.4 157.6 19.6 0 39.3-1.7 54.4-4.6 9.8-1.8 18.8 5.6 18.8 15.5 0 7.3-5 13.7-12.1 15.4-18.2 4.3-40.1 6.8-62.7 6.8C141.9 448 64 372.8 64 256.1 64 142.2 143.5 64 259.4 64 370.8 64 448 133.5 448 234.3zm-242.8 23c0 37 17.4 59.4 45.7 59.4 29.8 0 48.6-23 48.6-59.4s-18.8-58.9-48.1-58.9c-29.1 0-46.2 21.8-46.2 58.9z" fill="currentColor"></svg:path>`,
})
export class IonIosAtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosAttachIcon],svg[ion-ios-attach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M355.9 161.1c-8.6 0-15.6 7-15.6 15.6v194.4c0 20.3-8 40.4-22 55.1-13.9 14.6-35.2 23.7-55.5 23.7h-13.6c-19.6 0-39.5-8.9-54.8-24.6-15.2-15.5-23.9-35.6-23.9-55.2V119.3c0-14.9 6.2-28.9 17.3-39.5 11.1-10.5 25.7-16.3 41-16.3 15.1 0 29.3 5.8 39.8 16.2 10.5 10.5 16.4 24.6 16.4 39.6v234.2c0 17.1-13.6 32.2-29 32.2-13.6 0-28.2-12.9-28.2-32.2V219.9c0-8.6-7-15.6-15.6-15.6s-15.6 7-15.6 15.6v133.6c0 35.5 25.5 62.3 59.4 62.3 16.5 0 31.7-6.1 42.7-17.3 11.3-11.4 17.5-27.4 17.5-45V119.3c0-23.4-9.1-45.4-25.7-61.8C274 41 252 32 228.5 32s-45.5 9-62.2 25.5c-16.7 16.5-25.9 38.4-25.9 61.9v250.8c0 28.7 12.2 57.9 32.6 78 20.9 20.6 47.9 31.9 76.1 31.9h13.6c27.6 0 55.3-11.7 75.9-32.1 10.2-10.1 18.2-21.7 23.9-34.6 5.9-13.5 8.9-27.7 8.9-42.1V176.7c.1-8.6-6.9-15.6-15.5-15.6z" fill="currentColor"></svg:path>`,
})
export class IonIosAttachIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBackspaceIcon],svg[ion-ios-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M395 96H230c-46.7 0-73.2 34.7-102 63.5s-72.1 74.7-72.1 74.7C51 239.8 48 247 48 255.1c0 8 3 15.3 7.9 21 0 0 34.3 37.6 72.1 75.5 37.8 37.8 56.7 64.5 102 64.5h165c38.5 0 69-32.5 69-71V165c0-38.5-30.5-69-69-69zm-17.7 212.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.2-16.4 6.2-22.6 0L302 278.6l-52.7 52.7c-6.2 6.2-16.3 6.4-22.6 0-6.4-6.4-6.7-15.9 0-22.6l52.7-52.7-52.7-52.7c-6-6-7.1-15.6 0-22.6 7.1-7.1 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L324.6 256l52.7 52.7z" fill="currentColor"></svg:path>`,
})
export class IonIosBackspaceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBarcodeIcon],svg[ion-ios-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M121.6 388H80.8c-2.2 0-4-1.8-4-4V128c0-2.2 1.8-4 4-4h40.5c7.9 0 14.5-6.4 14.7-14 .1-3.9-1.3-7.2-4.1-10-2.7-2.8-8-4-11.9-4H66c-10 0-18 6-18 16v288c0 10 7 16 17 16h56.3c7.9 0 14.5-5.2 14.7-12.8.1-3.9-1.3-7.5-4.1-10.3-2.7-2.8-6.4-4.9-10.3-4.9z" fill="currentColor"></svg:path><svg:path d="M447 96h-56.3c-9.5 0-17.1 8.3-14 18.3.2.7.5 1.3.8 1.9 2.7 5.2 7.6 7.8 12.9 7.8h40.8c2.2 0 4 1.8 4 4v255.9c0 2.2-1.8 4-4 4h-40.5c-7.9 0-14.5 6.2-14.7 13.9-.1 3.9 1.3 7.6 4.1 10.4 2.7 2.8 6.4 3.8 10.3 3.8H447c10 0 17-6 17-16.4V112c0-10-7-16-17-16z" fill="currentColor"></svg:path><svg:path d="M122.5 176c-7.7 0-14 6.3-14 13.9V322c0 7.7 6.3 13.9 14 13.9s14-6.3 14-13.9V189.9c0-7.6-6.3-13.9-14-13.9z" fill="currentColor"></svg:path><svg:path d="M389.5 336c7.7 0 14-6.3 14-13.9V189.9c0-7.7-6.3-13.9-14-13.9s-14 6.3-14 13.9V322c0 7.7 6.3 14 14 14z" fill="currentColor"></svg:path><svg:path d="M326.5 144c-7.7 0-14 6.5-14 14.4v195.1c0 8 6.3 14.4 14 14.4s14-6.5 14-14.4V158.4c0-7.9-6.3-14.4-14-14.4z" fill="currentColor"></svg:path><svg:path d="M185.5 144c-7.7 0-14 6.5-14 14.4v195.1c0 8 6.3 14.4 14 14.4s14-6.5 14-14.4V158.4c0-7.9-6.2-14.4-14-14.4z" fill="currentColor"></svg:path><svg:path d="M256 160c-7.7 0-14 6.4-14 14.2v163.5c0 7.8 6.3 14.2 14 14.2s14-6.4 14-14.2V174.2c0-7.8-6.3-14.2-14-14.2z" fill="currentColor"></svg:path>`,
})
export class IonIosBarcodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBaseballIcon],svg[ion-ios-baseball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256.3 74.2l9.7-3.1c4.7-1.5 9.7 1.1 11.2 5.7l.1.4c1.5 4.7-1.1 9.7-5.7 11.2L260.1 92c-2.1.7-3.2 2.9-2.6 4.9 2.1 6.9 4.5 13.7 7.2 20.5 1.9 4.6 3.9 9.2 6.1 13.7 1.1 2.2 3.8 3 5.9 1.6l8.5-5.8c4.1-2.7 9.6-1.7 12.3 2.4l.2.3c2.7 4.1 1.7 9.6-2.4 12.3l-10.4 7.1a4 4 0 00-1.2 5.4c7 11 14.9 21.5 23.7 31.3 1.5 1.7 4.2 1.8 5.8.2l7.5-7.5c3.5-3.5 9.1-3.5 12.5 0l.3.3c3.5 3.5 3.5 9.1 0 12.5l-7.5 7.5c-1.6 1.6-1.5 4.3.2 5.8 10.2 9.1 21 17.3 32.5 24.4a4 4 0 005.4-1.2l6.9-10.2c2.7-4.1 8.3-5.1 12.3-2.4l.3.2c4.1 2.7 5.1 8.3 2.4 12.3l-5.5 8.1c-1.4 2-.6 4.8 1.6 5.9 4.1 1.9 8.2 3.8 12.4 5.5 7.1 2.9 14.3 5.4 21.7 7.6 2.1.6 4.3-.5 5-2.6l3.5-10.8c1.5-4.7 6.5-7.2 11.2-5.7l.4.1c4.7 1.5 7.2 6.5 5.7 11.2l-2.8 8.8c-.7 2.3.7 4.7 3.1 5.2 7.1 1.3 14.3 2.3 21.5 2.9.1-2.6.2-5.3.2-7.9 0-114.9-93.1-208-208-208-2.7 0-5.3.1-8 .2.7 7.7 1.7 15.3 3.1 22.9.4 2.5 2.9 3.9 5.2 3.2z" fill="currentColor"></svg:path><svg:path d="M258 447.2c-.4-2.4-2.8-3.9-5.2-3.2l-11.6 3.7c-4.7 1.5-9.7-1.1-11.2-5.7l-.1-.4c-1.5-4.7 1.1-9.7 5.7-11.2l13.8-4.4c2-.7 3.2-2.8 2.6-4.9-2.3-7.9-5-15.6-8.1-23.3-1.6-4-3.3-7.9-5.2-11.8-1-2.2-3.8-3-5.9-1.6l-10.9 7.4c-4.1 2.7-9.6 1.7-12.3-2.4l-.2-.3c-2.7-4.1-1.7-9.6 2.4-12.3l13-8.8a4 4 0 001.2-5.4c-7.2-11.7-15.5-22.7-24.8-33.1-1.5-1.7-4.2-1.8-5.8-.2l-9.9 9.9c-3.5 3.5-9.1 3.5-12.5 0l-.3-.3c-3.5-3.5-3.5-9.1 0-12.5l9.9-9.9c1.6-1.6 1.5-4.3-.2-5.8-10-9-20.6-17-31.9-24a4 4 0 00-5.4 1.2l-9 13.3c-2.7 4.1-8.3 5.1-12.3 2.4l-.3-.2c-4.1-2.7-5.1-8.3-2.4-12.3l7.6-11.3c1.4-2 .6-4.8-1.6-5.9-4.3-2.1-8.6-4-13.1-5.8-7.3-2.9-14.6-5.5-22.1-7.7-2-.6-4.3.6-4.9 2.6l-4.6 14.4c-1.5 4.7-6.5 7.2-11.2 5.7l-.4-.1c-4.7-1.5-7.2-6.5-5.7-11.2l4-12.4c.7-2.3-.7-4.8-3.1-5.2-5.8-1-11.7-1.8-17.6-2.4-.1 0-.3 0-.4-.1v4.2c0 114.9 93.1 208 208 208h4.2c0-.1-.1-.3-.1-.4-.5-5.4-1.2-10.9-2.1-16.3z" fill="currentColor"></svg:path><svg:path d="M431.1 280.9l-5.9 18.4c-1.5 4.7-6.5 7.2-11.2 5.7l-.4-.1c-4.7-1.5-7.2-6.5-5.7-11.2l5.3-16.6c.7-2.1-.5-4.4-2.7-5.1-13.5-4-26.8-9.2-39.7-15.6-1.8-.9-4-.3-5.1 1.3l-10.5 15.4c-2.7 4.1-8.3 5.1-12.3 2.4l-.3-.2c-4.1-2.7-5.1-8.3-2.4-12.3l9.2-13.6c1.3-1.9.7-4.4-1.2-5.6-12.3-7.7-24.1-16.6-35.2-26.7-1.6-1.4-4-1.4-5.5.1L294.7 230c-3.5 3.5-9.1 3.5-12.5 0l-.3-.3c-3.5-3.5-3.5-9.1 0-12.5l12.8-12.8c1.5-1.5 1.6-3.9.1-5.5-9.7-10.8-18.4-22.2-26-34-1.2-1.9-3.8-2.5-5.6-1.2l-13.3 9c-4.1 2.7-9.6 1.7-12.3-2.4l-.2-.3c-2.7-4.1-1.7-9.6 2.4-12.3l15.1-10.2c1.7-1.1 2.2-3.3 1.3-5.1-6.4-12.9-11.7-26.2-15.8-39.7-.7-2.1-2.9-3.4-5.1-2.7l-15.9 5.1c-4.7 1.5-9.7-1.1-11.2-5.7l-.1-.4c-1.5-4.7 1.1-9.7 5.7-11.2l17.6-5.6c1.9-.6 3.1-2.6 2.7-4.6-1.8-9.2-3.1-18.6-3.9-27.9-95.4 11.8-170.8 88.2-181 184.1h1c7.5.7 15 1.8 22.4 3.2 2 .4 4-.8 4.6-2.7l4.7-14.8c1.5-4.7 6.5-7.2 11.2-5.7l.4.1c4.7 1.5 7.2 6.5 5.7 11.2l-4.2 13c-.7 2.2.5 4.4 2.7 5.1 13.9 4.1 27.5 9.4 40.7 16 1.8.9 4 .3 5.1-1.3l8.3-12.3c2.7-4.1 8.3-5.1 12.3-2.4l.3.2c4.1 2.7 5.1 8.3 2.4 12.3l-7.1 10.5c-1.3 1.9-.7 4.4 1.2 5.6 12.1 7.7 23.7 16.4 34.6 26.3 1.6 1.4 4 1.4 5.5-.1l10.4-10.4c3.5-3.5 9.1-3.5 12.5 0l.3.3c3.5 3.5 3.5 9.1 0 12.5L214 310.8c-1.5 1.5-1.6 3.9-.1 5.5 10.2 11.3 19.2 23.3 27 35.8 1.2 2 3.7 2.5 5.7 1.2l10.8-7.3c4.1-2.7 9.6-1.7 12.3 2.4l.2.3c2.7 4.1 1.7 9.6-2.4 12.3l-12.7 8.6c-1.7 1.1-2.2 3.3-1.3 5.1 6.4 13.2 11.7 26.7 15.7 40.6.6 2.2 2.9 3.4 5.1 2.7l13.6-4.4c4.7-1.5 9.7 1.1 11.2 5.7l.1.4c1.5 4.7-1.1 9.7-5.7 11.2l-15.6 5c-1.9.6-3.1 2.6-2.7 4.6 1.3 7 2.3 14.1 3 21.2v1c95.9-10.2 172.3-85.6 184.1-181-8.9-.7-17.9-1.9-26.7-3.6-1.9-.3-3.9.9-4.5 2.8z" fill="currentColor"></svg:path>`,
})
export class IonIosBaseballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBasketIcon],svg[ion-ios-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M387.9 373.7h49.2l17.5-75.4h-66.7z" fill="currentColor"></svg:path><svg:path d="M387.9 448h.5c18.7 0 33.4-12.5 38.3-29.5l6-25.9h-44.8V448z" fill="currentColor"></svg:path><svg:path d="M265.4 392.5h103.7V448H265.4z" fill="currentColor"></svg:path><svg:path d="M75 373.7h49v-75.4H57.5z" fill="currentColor"></svg:path><svg:path d="M142.9 192h103.7v87.5H142.9z" fill="currentColor"></svg:path><svg:path d="M265.4 192h103.7v87.5H265.4z" fill="currentColor"></svg:path><svg:path d="M85.5 418.3c4.7 17 19.4 29.7 38.1 29.7h.5v-55.5H79.4l6.1 25.8z" fill="currentColor"></svg:path><svg:path d="M142.9 392.5h103.7V448H142.9z" fill="currentColor"></svg:path><svg:path d="M265.4 298.3h103.7v75.4H265.4z" fill="currentColor"></svg:path><svg:path d="M142.9 298.3h103.7v75.4H142.9z" fill="currentColor"></svg:path><svg:path d="M464 192h-47.9V96c0-17.6-14.4-32-32-32H127.9c-17.6 0-32 14.4-32 32v96H48c-10.3 0-17.9 9.6-15.6 19.6l19.7 67.9H124V106c0-7.7 6.3-14 14-14h236c7.7 0 14 6.3 14 14v173.5h72l19.6-67.9c2.3-10-5.3-19.6-15.6-19.6z" fill="currentColor"></svg:path>`,
})
export class IonIosBasketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBasketballIcon],svg[ion-ios-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M218.6 306.4c14.3-11.8 28.3-24.4 41.4-37.6l6.1-6.1c-2.8-2.9-5.6-5.8-8.3-8.5-49.9-49.9-107.7-89.6-171.8-118.1-18.4 26.1-31 56.6-35.8 89.6 32.2 2.3 63.2 10.5 92.2 24.5 28.8 13.9 54.4 32.8 76.2 56.2z" fill="currentColor"></svg:path><svg:path d="M326.1 185.6c.5.5 1.1 1.1 1.7 1.6 20.9-30.5 38.8-63.2 53.5-97.4-33.8-25.5-75.6-41-121-41.9 2.4 22.3 8 44.1 16.7 64.7 11.5 27.4 28.1 52 49.1 73z" fill="currentColor"></svg:path><svg:path d="M399 234.8c20.7 8.8 42.6 14.4 65 16.7-1.2-56.3-24.8-107.1-62.2-143.9-15 33.8-33.3 66.3-54.4 96.8 15.8 12.4 33.2 22.6 51.6 30.4z" fill="currentColor"></svg:path><svg:path d="M193.9 318.1c-21.1-21.1-45.6-37.6-72.9-49.2-23.2-9.8-47.7-15.6-72.9-17.4 0 1.5-.1 3-.1 4.4 0 48.7 16.7 93.5 44.8 128.9 37.3-17 72.7-37.9 105.4-62.4-1.5-1.4-2.9-2.9-4.3-4.3z" fill="currentColor"></svg:path><svg:path d="M283.8 243.6c10.1-11.3 19.7-23.1 28.8-35.1-44.5-42.3-72.1-98.6-78.2-159.5-51.9 5.4-98.1 29.8-131.5 66.2 33.4 15.3 65.5 33.8 95.6 55.1 30.5 21.7 59.2 46.3 85.3 73.3z" fill="currentColor"></svg:path><svg:path d="M301.4 262.8c38.9 44 70.9 93.2 95.3 146.4 36.4-33.5 60.9-79.8 66.2-131.7-47.7-4.7-92.8-22.6-130.8-52-9.6 12.7-20 25.3-30.7 37.3z" fill="currentColor"></svg:path><svg:path d="M235.3 326.2c29.9 39.5 47.5 86.2 51 135.6 33-4.8 63.5-17.4 89.5-35.8-23.4-52.6-54.3-101-92.2-144.2-15.2 15.6-31.4 30.5-48.3 44.4z" fill="currentColor"></svg:path><svg:path d="M214.9 342.3c-32.4 24.4-67.4 45.5-104 62.8 37.5 36.5 88.6 59 145.1 59 1.5 0 3 0 4.5-.1-1.8-25.2-7.6-49.7-17.4-72.9-7.4-17.5-16.8-33.8-28.2-48.8z" fill="currentColor"></svg:path>`,
})
export class IonIosBasketballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBatteryChargingIcon],svg[ion-ios-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M396 144H64c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h332c26.4 0 48-21.6 48-48V192c0-26.4-21.6-48-48-48zm20 176c0 11-9 20-20 20H64c-11 0-20-9-20-20V192c0-11 9-20 20-20h332c11 0 20 9 20 20v128z" fill="currentColor"></svg:path><svg:path d="M464 204.6v102.8c16 0 32-27.7 32-51.4s-16-51.4-32-51.4z" fill="currentColor"></svg:path><svg:path d="M384 192H76c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h308c6.6 0 12-5.4 12-12V204c0-6.6-5.4-12-12-12zM218.8 308l8.4-43H200l45.2-61-8.4 43H264l-45.2 61z" fill="currentColor"></svg:path>`,
})
export class IonIosBatteryChargingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBatteryDeadIcon],svg[ion-ios-battery-dead-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M396 144H64c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h332c26.4 0 48-21.6 48-48V192c0-26.4-21.6-48-48-48zm20 176c0 11-9 20-20 20H64c-11 0-20-9-20-20V192c0-11 9-20 20-20h332c11 0 20 9 20 20v128z" fill="currentColor"></svg:path><svg:path d="M464 204.6v102.8c16 0 32-27.7 32-51.4s-16-51.4-32-51.4z" fill="currentColor"></svg:path>`,
})
export class IonIosBatteryDeadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBatteryFullIcon],svg[ion-ios-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M396 144H64c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h332c26.4 0 48-21.6 48-48V192c0-26.4-21.6-48-48-48zm20 176c0 11-9 20-20 20H64c-11 0-20-9-20-20V192c0-11 9-20 20-20h332c11 0 20 9 20 20v128z" fill="currentColor"></svg:path><svg:path d="M464 204.6v102.8c16 0 32-27.7 32-51.4s-16-51.4-32-51.4z" fill="currentColor"></svg:path><svg:path d="M384 192H76c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h308c6.6 0 12-5.4 12-12V204c0-6.6-5.4-12-12-12z" fill="currentColor"></svg:path>`,
})
export class IonIosBatteryFullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBeakerIcon],svg[ion-ios-beaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M445.2 48H128.5C74.1 48 64 75.9 64 88.2c30.3 4.2 32 4.2 32 36.2v275.5c0 35.3 28.9 64 64.2 64H368c35.4 0 63-29.2 63-64.5V89.2c2-17.5 12.5-31.6 13.6-33.3 1.2-1.9 3.4-4.4 3.4-5.5 0-1.2-.3-2.4-2.8-2.4zm-333 29.3c0-.1 0-.1 0 0 6-1 12-1.3 16.3-1.3H405c-.9 3.7-1.5 7.1-1.8 10-.1 1.1-.2 2.1-.2 3.2v70.9-.1H124v-35.5c0-17.6 0-34.2-11.8-47.2z" fill="currentColor"></svg:path>`,
})
export class IonIosBeakerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBedIcon],svg[ion-ios-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M458.2 208h-.4c-12 0-21.8 9.8-21.8 21.8 0 1.2-1 2.2-2.2 2.2H78.2c-1.2 0-2.2-1-2.2-2.2 0-12-9.8-21.8-21.8-21.8h-.4c-12 0-21.8 9.8-21.8 21.8v180.4c0 12 9.8 21.8 21.8 21.8h.4c12 0 21.8-9.8 21.8-21.8V404c0-2.2 1.8-4 4-4h352c2.2 0 4 1.8 4 4v6.2c0 12 9.8 21.8 21.8 21.8h.4c12 0 21.8-9.8 21.8-21.8V229.8c0-12-9.8-21.8-21.8-21.8z" fill="currentColor"></svg:path><svg:path d="M84 214h22.5c2.2 0 4-1.8 4-4v-13c0-8.8 7.2-16 16-16H224c8.8 0 16 7.2 16 16v13c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-13c0-8.8 7.2-16 16-16h97.5c8.8 0 16 7.2 16 16v13c0 2.2 1.8 4 4 4H428c4.4 0 8-3.6 8-8v-94c0-17.6-14.4-32-32-32H108c-17.6 0-32 14.4-32 32v94c0 4.4 3.6 8 8 8z" fill="currentColor"></svg:path>`,
})
export class IonIosBedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBeerIcon],svg[ion-ios-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M112 162c0-13.3 10.7-24 24-24h229.5c4.9 0 9.6 1.5 13.5 4.4 2 1.5 4.9 0 4.8-2.5-.1-5.7-.2-9.3-.2-21.6 0-20.8-17.2-38.3-38.1-38.3h-.2c-5.7-.4-10.8-4-12.9-9.3-9-22.6-32.3-38.6-56.4-38.6-21 0-34.2 7-44 18.3-4.4 5-11.8 5.9-17.4 2.4-7.3-4.6-16.1-7.1-25.5-7.1-14.4 0-27.2 7.1-35.8 17.4-4 4.9-10.4 7-16.6 5.9-5.2-1-12.6-1.8-22.7-1.8-25 0-50 16.6-50 42.4v4c0 28.8 16 22.9 16 41.8v50.8c0 13.4-11.2 19.3-11.2 35.2 0 8.8 8 16.8 16.8 16.8H112V162z" fill="currentColor"></svg:path><svg:path d="M386 452H110c-7.7 0-14 6.3-14 14s6.3 14 14 14h276c7.7 0 14-6.3 14-14s-6.3-14-14-14z" fill="currentColor"></svg:path><svg:path d="M400 194h-32v-24c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v213.8c0 12.1-1.1 18.2-3.2 30.1l-.1.5c-.8 4.7.2 9.5 2.8 13.5 3.4 5.1 9.1 8.2 15.3 8.2h213.9c4.1 0 8.1-1.4 11.1-4.1 4.7-4.1 6.5-10.3 5.2-16-2.7-11.8-4.5-17.8-4.8-29.9H400c26.4 0 48-21.6 48-48v-96c0-26.5-21.6-48.1-48-48.1zm20 144c0 11-9 20-20 20h-32V222h32c11 0 20 9 20 20v96z" fill="currentColor"></svg:path>`,
})
export class IonIosBeerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBellIcon],svg[ion-ios-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M381.7 225.9c0-97.6-52.5-130.8-101.6-138.2 0-.5.1-1 .1-1.6 0-12.3-10.9-22.1-24.2-22.1-13.3 0-23.8 9.8-23.8 22.1 0 .6 0 1.1.1 1.6-49.2 7.5-102 40.8-102 138.4 0 113.8-28.3 126-66.3 158h384c-37.8-32.1-66.3-44.4-66.3-158.2z" fill="currentColor"></svg:path><svg:path d="M256.2 448c26.8 0 48.8-19.9 51.7-43H204.5c2.8 23.1 24.9 43 51.7 43z" fill="currentColor"></svg:path>`,
})
export class IonIosBellIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBicycleIcon],svg[ion-ios-bicycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M125.3 289.3c17.3 0 33.7 6.8 46.1 19.2 12.4 12.4 19.2 28.8 19.2 46.1s-6.8 33.7-19.2 46.1c-12.4 12.4-28.8 19.2-46.1 19.2s-33.7-6.8-46.1-19.2C66.8 388.4 60 372 60 354.7s6.8-33.7 19.2-46.1c12.4-12.4 28.8-19.3 46.1-19.3m0-28c-51.3 0-93.3 42-93.3 93.3C32 406 74 448 125.3 448s93.3-42 93.3-93.3c.1-51.4-41.9-93.4-93.3-93.4z" fill="currentColor"></svg:path><svg:path d="M319.8 127.8c17.8 0 32-14.2 32-32S337.8 64 320 64s-32.2 14-32.2 31.8c0 17.7 14.3 32 32 32z" fill="currentColor"></svg:path><svg:path d="M386.7 289.3c17.3 0 33.7 6.8 46.1 19.2 12.4 12.4 19.2 28.8 19.2 46.1s-6.8 33.7-19.2 46.1C420.4 413.2 404 420 386.7 420s-33.7-6.8-46.1-19.2c-12.4-12.4-19.2-28.8-19.2-46.1s6.8-33.7 19.2-46.1c12.3-12.4 28.7-19.3 46.1-19.3m0-28c-51.3 0-93.3 42-93.3 93.3s42 93.3 93.3 93.3 93.3-42 93.3-93.3-42-93.3-93.3-93.3z" fill="currentColor"></svg:path><svg:path d="M368 192h-48l-29.5-60.1c-5.6-9.3-15.9-15.9-27.1-15.9-8.4 0-16.8 3.7-22.4 9.3l-71.7 69.1c-5.6 5.6-9.3 14-9.3 22.4 0 17.4 12.6 23.6 18.5 27.1C224 270.1 240 273 240 286.1V352c0 8.8 7.2 16 16 16s16-7.2 16-16v-90c0-13.2-30.4-24-48.3-38l48.9-51.5c18.7 28.5 27.3 51.5 38 51.5H368c8.8 0 16-7.2 16-16s-7.2-16-16-16z" fill="currentColor"></svg:path>`,
})
export class IonIosBicycleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBluetoothIcon],svg[ion-ios-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M378.5 333l-88.3-77 88.2-76.1c6.9-6 7.4-16.3 1.1-22.9L262.7 35.6c-2.2-2.3-5.4-3.6-8.6-3.6-6.1 0-11.1 4.9-11.1 10.8V212l-86.3-73.3c-7.1-6-17.8-5.3-24.1 1.5-6.5 7-5.8 17.9 1.6 24.1L243 256l-108.1 90.9c-7.3 6.1-8.1 16.8-1.7 23.9l.3.3c6.3 7 17.3 7.7 24.5 1.5l85-73.6v169.8c0 6.2 5.1 11.2 11.5 11.2 3.2 0 6.2-1.3 8.4-3.5L379.6 356c6.3-6.6 5.8-16.9-1.1-23zm-99.1-232.1l62.7 65.9c.8.8.7 2.1-.2 2.9l-62.7 53c-1.3 1.1-3.4.2-3.4-1.5V102.3c.1-1.9 2.4-2.7 3.6-1.4zm-3.5 309V291.6c0-1.7 2.1-2.6 3.4-1.5l62.7 53c.9.7.9 2 .2 2.9l-62.7 65.3c-1.3 1.3-3.6.4-3.6-1.4z" fill="currentColor"></svg:path>`,
})
export class IonIosBluetoothIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBoatIcon],svg[ion-ios-boat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M351.8 422c-26.2 9.2-66.5 14.9-96.1 14.9-29.6 0-69.9-5.7-96.1-14.9 0 0-26.1 23.9-62.3 36.2-2.3.8-1.5 4.2.9 3.9 22.6-2.6 40.2-6.5 61.4-12 23 9 66.7 13.9 96.1 13.9 29.4 0 74.1-3.8 96.1-13.9 21.5 5.6 38.8 9.6 62 12.1 2.4.3 3.2-3.1.9-3.9-35.7-12.4-62.9-36.3-62.9-36.3z" fill="currentColor"></svg:path><svg:path d="M445.5 263l-186.2-85.5c-2.1-1-4.6-1-6.7 0L66.5 263c-6.2 2.9-10.5 9.1-10.5 16.4 0 2.4.5 4.6 1.3 6.7L112 422c27.5 0 56.7-22 56.7-22 18 9 53.1 17.1 79.3 18.6 2.8.2 5.5.2 8 .2s5.2-.1 8-.2c26.2-1.5 61.3-9.5 79.3-18.6 0 0 29.2 22 56.7 22l54.7-135.9c.8-2.1 1.3-4.3 1.3-6.7 0-7.3-4.3-13.5-10.5-16.4zM212 288c-6.6 0-12-9.8-12-22s5.4-22 12-22 12 9.8 12 22-5.4 22-12 22zm88 0c-6.6 0-12-9.8-12-22s5.4-22 12-22 12 9.8 12 22-5.4 22-12 22z" fill="currentColor"></svg:path><svg:path d="M391.9 127v-.1C386.3 100.3 374.4 80 352 80h-34.6l-2-8c-3.6-14.1-16.4-24-31-24h-57c-14.6 0-27.4 9.9-31 24.1l-2 7.9H160c-22.9 0-35.1 20.7-39.8 47L102 223.8c-.6 3.2 2.6 5.7 5.6 4.4l25.3-11.6c1.2-.5 2-1.6 2.3-2.9l16.2-85.6c2.5-10.7 7.3-16 16.1-16h177.1c8.9 0 13.1 5 16.1 16l16.2 85.6c.2 1.3 1.1 2.4 2.3 2.9l25.4 11.7c3 1.4 6.2-1.2 5.6-4.4L391.9 127z" fill="currentColor"></svg:path>`,
})
export class IonIosBoatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBodyIcon],svg[ion-ios-body-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="80" r="48" fill="currentColor"></svg:circle><svg:path d="M424 144H88c-13.3 0-24 10.7-24 24s10.7 24 24 24h98.5c5.6 1 13.2 3.8 17.2 14.2 4.7 12.1 2.4 33.6-.5 51.7l-3.8 21.4c0 .1 0 .2-.1.3l-30.4 172.2c-2.3 13 6.4 25.5 19.5 27.8 13.1 2.3 25.3-6.4 27.6-19.5l21-119.9v.2s6.2-32.5 18.5-32.5h1.1c12.5 0 18.5 32.5 18.5 32.5v-.1l21 119.9c2.3 13 14.7 21.7 27.7 19.4 13.1-2.3 21.7-14.8 19.4-27.8l-30.4-172.2c0-.1 0-.2-.1-.3l-3.8-21.4c-2.9-18.1-5.2-39.6-.5-51.7 4-10.4 11.6-13.2 17.2-14.2H424c13.3 0 24-10.7 24-24s-10.7-24-24-24z" fill="currentColor"></svg:path>`,
})
export class IonIosBodyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBoltIcon],svg[ion-ios-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M302.7 64L143 288h95.8l-29.5 160L369 224h-95.8l29.5-160z" fill="currentColor"></svg:path>`,
})
export class IonIosBoltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBonfireIcon],svg[ion-ios-bonfire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M270.9 350.6c-.7-8.2-7.6-14.6-15.9-14.6-7.6 0-14 5.4-15.6 12.5L223.8 427c-.5 2.3-.8 4.6-.8 7 0 17.7 14.3 30 32 30s32-12.3 32-30c0-2.9-.4-5.7-1.1-8.4l-15-75z" fill="currentColor"></svg:path><svg:path d="M305.9 355z" fill="currentColor"></svg:path><svg:path d="M388.9 386.3c-1.7-1.4-3.3-2.9-5.1-3.9l-59.6-43.5c-5.8-3.8-12-3.7-16.5.9-4.1 4.1-4.7 10.4-1.7 15.4l45 61.8c.9 1.5 2.2 2.8 3.4 4.2 7.8 9.1 25.1 9.6 34.6 0 9.4-9.8 9.3-27.2-.1-34.9z" fill="currentColor"></svg:path><svg:path d="M372.5 335z" fill="currentColor"></svg:path><svg:path d="M435.4 320h-59.5c-3.9 0-7.4 2.2-8.1 6.2-.6 3.6 1.3 7.1 4.7 8.8h.1l57.7 17.8c8.3 1.9 17.7-5.5 17.7-14.8 0-11.8-4.8-18-12.6-18z" fill="currentColor"></svg:path><svg:path d="M139.2 335z" fill="currentColor"></svg:path><svg:path d="M139.2 335c3.3-1.6 5.3-5.2 4.7-8.8-.7-4-3.9-6.2-8.1-6.2H76.3c-7.6 0-12.3 8.3-12.3 17.6s9.1 17.1 17.4 15.2l57.7-17.8h.1z" fill="currentColor"></svg:path><svg:path d="M187.9 338.8l-59.6 43.4c-1.8 1.1-3.6 2.4-5.1 3.9-9.6 9.6-9.6 25.1 0 34.6 9.6 9.6 25.1 9.6 34.6 0 1.3-1.3 2.4-2.7 3.4-4.2l45-61.6c3-5 2.5-11.2-1.7-15.3-4.6-4.5-11.8-4.8-16.6-.8z" fill="currentColor"></svg:path><svg:path d="M358.7 138.7c0-57.6-72.4-90.7-96-90.7 12 80.8-101.7 113-112 181.3-10.3 68.3 48 90.7 48 90.7 16.3-56.6 72.4-75.6 109.7-99.8 40.7-26.4 50.3-51.3 50.3-81.5z" fill="currentColor"></svg:path><svg:path d="M358.7 259.6c5-14.7 1.9-49.3-3-63.4-9 17.5-26.3 32.4-47.2 46-8.6 5.6-20.9 10.8-29.8 15.9-18.7 10.5-34 20.6-46.3 34.4 11.3 16.4 31.3 27.7 46.3 27.7 36-.2 64-13.7 80-60.6z" fill="currentColor"></svg:path><svg:path d="M161.8 171.9c11.7-15.1 24.9-23.8 38.2-36.2 13.4-12.5 22.1-21.2 27.5-31.3-10.7-20.1-30.8-28.1-44.7-26.1 2.3 28.6-30 44-32 64.8-1.3 12.6 5.4 25 11 28.8z" fill="currentColor"></svg:path>`,
})
export class IonIosBonfireIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBookIcon],svg[ion-ios-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M146 64.1c54.1 0 100 27.9 100 82V446c0 2.2-3.1 2.7-3.8.7v-.1c-10.3-34.2-38.2-67.6-82.3-70.5-34.2-2.2-66.9 12.9-93.1 37.1-1.6 1.5-4.3 2.9-6.6 2.9h-4.5c-3.7 0-7.6-2.7-7.6-6.1V120.2C48 88.1 91.9 64.1 146 64.1z" fill="currentColor"></svg:path><svg:path d="M366 64c-54.1 0-100 27.9-100 82v299.9c0 2.2 3.1 2.7 3.8.7v-.1c10.3-34.2 39.4-67.9 82.3-70.5 32.9-2 63.9 11 93.1 37.1 1.6 1.4 4.3 2.9 6.6 2.9h4.5c3.7 0 7.6-2.7 7.6-6.1V120c.1-32-43.8-56-97.9-56z" fill="currentColor"></svg:path>`,
})
export class IonIosBookIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBookmarkIcon],svg[ion-ios-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 80v380c0 3.3 3.8 5.2 6.4 3.2l116.8-92c2.9-2.1 6.8-2.1 9.6 0l116.8 92c2.6 2 6.4.1 6.4-3.2V80c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32z" fill="currentColor"></svg:path>`,
})
export class IonIosBookmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBookmarksIcon],svg[ion-ios-bookmarks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 32v127.9l-22.9-14.5-9.1-6.4-9.1 6.4-22.9 14.5V32h-41.4c-22.5.2-40.6 18.8-40.6 41.4v313.2c0 7.5-5.8 14-13.3 14.4-8 .4-14.7-6-14.7-14V73.4c0-22.6-18.1-41.2-40.6-41.4H95.1C64.8 32 40 56.8 40 87.1v289.8c0 30.3 24.8 55.1 55.1 55.1l108-.1c4.2.1 8.3.6 12.2 1.4 15.3 3.1 26.8 16.6 26.6 32.2-.1 7.2 5.2 13.6 12.4 14.4 8.5.9 15.7-5.7 15.6-14.1-.2-15.8 11.4-29.4 26.9-32.5 3.8-.8 7.9-1.2 12-1.3l108 .1c30.3 0 55.1-24.8 55.1-55.1V87.1C472 56.8 446.3 32 416 32z" fill="currentColor"></svg:path>`,
})
export class IonIosBookmarksIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBowtieIcon],svg[ion-ios-bowtie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M290.8 213.5C286 205 277 202.2 266 202.2v-.2c-6 0-14.3 1.3-22.6 2.9-11.9 2.3-19.7 7.1-19.7 7.1s3.6 27.3.1 58.5-7.9 42.5-7.9 42.5 5.3 12.1 40 15c3.9.3 7.6.5 11 .5 24.5 0 36.4-7.3 36.4-7.3s3.3-5.4 4.3-22.1c1.9-32.2-7-68.5-16.8-85.6z" fill="currentColor"></svg:path><svg:path d="M205.7 208.8c-22-40.2-86.2-96.8-121.3-96.8C57.9 112 32 180.5 32 256s23 144 51.5 144c33.4 0 110.5-80 110.5-80s5.7-12.6 9.9-33.6l1.8-10.4c.7-4.7 1.3-9.7 1.7-15 .3-3.5.5-6.8.6-9.9l.3-9.8c.7-16-2.6-32.5-2.6-32.5z" fill="currentColor"></svg:path><svg:path d="M427.6 112c-36.4 0-96.4 56.5-118.3 96.8l-.8 1.4s1.4 2.5 1.9 3.4c3.4 6 6.7 14.3 9.4 24l2.9 11.7c2.2 10.2 3.7 21.2 4.2 32.2l.2 9c0 2.9-.1 5.7-.3 8.5-1 16.7-4.6 22.1-4.6 22.1 7.6 10.5 69 78.9 106.2 78.9 28.5 0 51.5-68.5 51.5-144s-25.8-144-52.3-144z" fill="currentColor"></svg:path>`,
})
export class IonIosBowtieIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBoxIcon],svg[ion-ios-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M112 400h288V208H112v192zm112-160h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16z" fill="currentColor"></svg:path><svg:path d="M96 112v80h320v-80z" fill="currentColor"></svg:path>`,
})
export class IonIosBoxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBriefcaseIcon],svg[ion-ios-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M80 448h352c17.7 0 32-14.3 32-32V224H48v192c0 17.7 14.3 32 32 32z" fill="currentColor"></svg:path><svg:path d="M432 128h-8v-8c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v8h-28V96c0-17.6-14.4-32-32-32H196c-17.6 0-32 14.4-32 32v32h-28v-8c0-4.4-3.6-8-8-8H96c-4.4 0-8 3.6-8 8v8h-8c-17.7 0-32 14.3-32 32v40h416v-40c0-17.7-14.3-32-32-32zm-112 0H192v-28c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v28z" fill="currentColor"></svg:path>`,
})
export class IonIosBriefcaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBrowsersIcon],svg[ion-ios-browsers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M48 181.4V424c0 22.1 17.9 40 40 40h242.6c22.1 0 40-17.9 40-40V181.4c0-22.1-17.9-40-40-40H88c-22.1 0-40 17.9-40 40z" fill="currentColor"></svg:path><svg:path d="M141.4 88v28.4c0 2.2 1.8 4 4 4h198.2c26.4 0 48 21.6 48 48v198.2c0 2.2 1.8 4 4 4H424c22.1 0 40-17.9 40-40V88c0-22.1-17.9-40-40-40H181.4c-22.1 0-40 17.9-40 40z" fill="currentColor"></svg:path>`,
})
export class IonIosBrowsersIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBrushIcon],svg[ion-ios-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M149.6 283.3c-51.9 0-83.9 45.7-83.9 95.1 0 21.3-10.9 37.1-31.4 46.4-2.2 1-3 3.8-1.7 5.8 16.7 24.6 63.3 33.3 95.3 33.3 8.4 0 15.9-.6 21.8-1.7 35.6-6.4 80.1-24.9 90.7-77 12.2-60.5-38.9-101.9-90.8-101.9z" fill="currentColor"></svg:path><svg:path d="M467.7 60.4C460 52.7 450.9 48 441.6 48c-6.3 0-12.7 2.2-18.8 7L257.7 200.3c-5.4 4.8-12.4 7.4-19.7 7.4h-.1-.1c-5.6 0-11.1 2.1-15.4 5.8l-53.6 43.8c-2.1 1.8-2.7 4.8-1.4 7.2.9 1.7 2.6 2.9 4.5 3.1 45.6 4.5 87 37 87.3 86.6 0 1.7.7 3.4 2 4.5 2.5 2.1 6 1.7 8-.6l45.1-52.2c3.5-4 5.8-9.1 6-14.5v-1.2c0-7.5 3-14.8 8-20.4l144.8-164.4c11.9-15.1 7.6-32.1-5.4-45z" fill="currentColor"></svg:path>`,
})
export class IonIosBrushIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBugIcon],svg[ion-ios-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M374.6 127.3C345.4 88.5 303.1 64 256 64c-47.1 0-89.4 24.5-118.6 63.3 6.4 15.6 15.8 30 28.1 42.3 24.2 24.2 56.3 37.5 90.5 37.5s66.3-13.3 90.5-37.5c12.3-12.3 21.8-26.6 28.1-42.3z" fill="currentColor"></svg:path><svg:path d="M122 150s-3.8-1.6-5.9-3.3c-2.1-1.7-5-4.9-6.5-8.4 5.4-11.3 1.2-25-9.9-31.3-11.8-6.6-26.9-2.2-33.1 10-4.5 8.9-2.9 19.8 3.8 27.1 1.8 1.9 3.7 3.4 5.7 4.6 2.8 1.6 4.9 4 6.4 6.8 2.7 5.2 6.4 10.7 11.1 14.6 4.2 3.5 8.8 7.1 15.2 10.7-7.2 20.3-11.6 42.3-12.5 65.4-11 .2-18.6 2.1-25.5 4.1-4.2 1.2-8.2 3.4-11.8 5.9-1-.1-1.9-.2-2.9-.2-13.8 0-24.8 11.6-24 25.6.7 11.8 10.3 21.5 22.2 22.4 11 .8 20.6-5.9 24.3-15.5 2-5.3 6.7-9.2 12.4-9.9 1.9-.2 3.9-.4 6.2-.4 3.2 33 13.3 63.5 28.6 89.2-14.2 11-22.9 23-26.6 36.3 0 0-.8.4-1.9 1.4-1 .8-1.9 1.6-2.8 2.6-8.9 9.9-8.1 25 1.8 33.9 9.9 8.9 25 8.1 33.9-1.8 6.2-6.9 7.6-16.3 4.6-24.5-2.2-6-.7-12.7 3.9-17 1.6-1.5 3.5-3.1 5.7-4.9 27.1 31.7 59.4 52 99.7 54.4V232.9C190.8 230 144.4 195.3 122 150z" fill="currentColor"></svg:path><svg:path d="M456 256.1c-1 0-2 .1-2.9.2-3.6-2.5-7.7-4.6-11.8-5.9-6.9-2-14.4-3.9-25.5-4.1-1-23.1-5.4-45.2-12.5-65.4 6.4-3.6 11-7.2 15.2-10.7 4.9-4.1 8.7-10 11.5-15.3 1.3-2.5 3.3-4.5 5.8-5.9 0 0 .1 0 .1-.1 11.6-6.5 15.7-21.1 9.2-32.7-6.5-11.6-21.1-15.7-32.7-9.2-11.1 6.2-15.3 19.9-9.9 31.3-1.6 3.4-3.4 5.7-6.5 8.4-2.3 2-5.9 4.3-5.9 4.3-22.4 45.3-68.8 79-122 81.9V448c40.3-2.4 72.6-22.8 99.7-54.4 2.1 1.7 3.9 3.2 5.4 4.6 4.8 4.4 6.4 11.3 4.2 17.5-3 8.1-1.5 17.5 4.7 24.3 8.9 9.9 24 10.7 33.9 1.8 9.9-8.9 10.7-24 1.8-33.9-.9-1-1.8-1.8-2.8-2.6-1.1-.9-1.9-1.4-1.9-1.4-3.7-13.3-12.4-25.3-26.6-36.3 15.3-25.7 25.4-56.2 28.6-89.2 2.1 0 4.1.2 5.9.4 5.9.7 10.7 4.7 12.9 10.2 3.7 9.4 13.2 15.9 24.1 15.1 11.8-.9 21.4-10.5 22.2-22.4.6-14-10.4-25.6-24.2-25.6z" fill="currentColor"></svg:path>`,
})
export class IonIosBugIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBuildIcon],svg[ion-ios-build-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M441.1 131.1l-44.9 45.1c-.9.9-2.3 1.3-3.5 1.1l-46.4-8.4c-1.6-.3-2.9-1.6-3.2-3.2l-8.3-46.4c-.2-1.3.2-2.6 1.1-3.5l44.8-45c3.5-3.5 3-9.3-1-12.1-10.1-7.2-22.1-10.7-31.8-10.7-.7 0-1.4 0-2 .1-12.5.7-39.3 7.7-60 29.7-20.1 21.2-41.1 60.6-22.5 104.5 2.2 5.3 4.7 12.3-2.7 19.7C253.1 209.4 61 390.3 61 390.3c-18 15.5-16.7 44.2-.1 60.9 8.5 8.4 20 12.8 31.3 12.8 11.1 0 21.9-4.2 29.6-13.1 0 0 179.4-191.1 188.2-199.8 4-3.9 7.7-5.1 11.1-5.1 3.3 0 6.3 1.2 8.6 2.4 9.9 5.1 21 7.4 32.4 7.4 26.8 0 55-12.4 72.2-29.6 24.4-24.4 28.9-48 29.6-60.1.6-9.9-2.2-22.6-10.7-34.2-2.9-3.8-8.6-4.2-12.1-.8zM102.5 429.3c-5.5 5.4-14.4 5.4-19.9 0-5.4-5.5-5.4-14.4 0-19.9 5.5-5.4 14.4-5.4 19.9 0 5.4 5.6 5.4 14.5 0 19.9z" fill="currentColor"></svg:path>`,
})
export class IonIosBuildIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBulbIcon],svg[ion-ios-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M404 188.9C404 111 333.9 48 256 48s-148 63.1-148 140.9c0 31 13.2 56.1 30.2 80.1h-.3c10.9 15 21.4 17.7 31.5 35 14.7 25.2 18.1 40.7 18.7 55.7.4 8.6 7.5 15.3 16 15.3h8.9c2.2 0 4-1.8 4-4v-94.5c0-5-1.2-9.8-3.4-14.3l-21-42c-3.5-7 1.6-15.2 9.4-15.2 4 0 7.7 2.3 9.4 5.9l25.3 51.4c2.2 4.4 3.3 9.2 3.3 14.1V371c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-94.6c0-4.9 1.1-9.7 3.3-14.1l25.4-51.6c1.7-3.4 5.2-5.6 9-5.6 7.5 0 12.4 7.9 9 14.6l-21.3 42.6c-2.2 4.5-3.4 9.4-3.4 14.3V371c0 2.2 1.8 4 4 4h10c8.5 0 15.5-6.6 16-15 .9-15.4 4.7-32.3 18.4-56 10.1-17.3 20.6-20 31.5-35h-.1c17-24 30.2-49.1 30.2-80.1z" fill="currentColor"></svg:path><svg:path d="M238 464h36c7.7 0 14-6.3 14-14s-6.3-14-14-14h-36c-7.7 0-14 6.3-14 14s6.3 14 14 14z" fill="currentColor"></svg:path><svg:path d="M218 420h76c7.7 0 14-6.3 14-14s-6.3-14-14-14h-76c-7.7 0-14 6.3-14 14s6.3 14 14 14z" fill="currentColor"></svg:path>`,
})
export class IonIosBulbIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBusIcon],svg[ion-ios-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M109.6 416.7c-1.9-1.9-5.7-.5-5.6 2.2 1 21.5 1.4 29 5.5 29h55.1c4.4 0 3.3-11.5 3.3-22-34.3.1-46.9 2.3-58.3-9.2z" fill="currentColor"></svg:path><svg:path d="M402.4 416.7c1.9-1.9 5.7-.5 5.6 2.2-1 21.5-1.4 29-5.5 29h-55.1c-4.4 0-3.3-11.5-3.3-22 34.3.1 46.9 2.3 58.3-9.2z" fill="currentColor"></svg:path><svg:path d="M384 64H128c-17.6 0-32 14.4-32 32v276c0 22 18 40 40 40h240c22 0 40-18 40-40V96c0-17.6-14.4-32-32-32zM162 375.9c-14.8 1.2-27-11.1-25.9-25.9.9-11.6 10.3-21.1 22-22 14.8-1.2 27 11.1 25.9 25.9-1 11.7-10.4 21.1-22 22zm76-77.9h-97.8c-8.9 0-16.2-7.3-16.2-16.2V166.2c0-8.9 7.3-16.2 16.2-16.2H238c2.2 0 4 1.8 4 4v140c0 2.2-1.8 4-4 4zm115.9 77.9c-14.8 1.2-27-11.1-25.9-25.9.9-11.6 10.3-21.1 22-22 14.8-1.2 27 11.1 25.9 25.9-.9 11.7-10.3 21.1-22 22zM388 282c0 8.8-7.2 16-16 16h-98c-2.2 0-4-1.8-4-4V154c0-2.2 1.8-4 4-4h98c8.8 0 16 7.2 16 16v116zm-15-162H139c-8.8 0-15-6.3-15-14s6.2-14 15-14h234c8.8 0 15 6.3 15 14s-6.2 14-15 14z" fill="currentColor"></svg:path>`,
})
export class IonIosBusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosBusinessIcon],svg[ion-ios-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M146 80h220c9.9 0 18-8.1 18-18s-8.1-18-18-18H146c-9.9 0-18 8.1-18 18s8.1 18 18 18z" fill="currentColor"></svg:path><svg:path d="M398 100H114c-9.9 0-18 8.1-18 18 0 9.3 6.9 17.1 16 18v300c0 13.2 10.8 24 24 24h88c4.4 0 8-3.6 8-8v-40c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v40c0 4.4 3.6 8 8 8h88c13.2 0 24-10.8 24-24V136c9.1-.9 16-8.7 16-18 0-9.9-8.1-18-18-18zM192 364c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm80 192c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm80 192c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16z" fill="currentColor"></svg:path>`,
})
export class IonIosBusinessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCafeIcon],svg[ion-ios-cafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M369.7 404H110.1c-7.6 0-14.1 5.8-14.4 13.4-.4 8 6 14.6 14 14.6h259.6c7.6 0 14.1-5.8 14.4-13.4.3-8-6.1-14.6-14-14.6z" fill="currentColor"></svg:path><svg:path d="M399.2 118.5c.1-10.8-4.2-20.9-12.2-28.4-7.2-6.6-16.7-10.1-26.5-10.1H86.8c-9.9 0-19.7 3.6-26.9 10.4-8.1 7.7-12.4 18.2-11.9 29.3C50.4 172 58.3 218 71.8 256.3c11 31.6 25.8 58.1 43.9 78.9 31.8 36.6 68.8 48.8 77.9 48.8h60.1c5.5 0 25-7.2 44.2-19.5 22.4-14.4 42.4-36.7 58.1-64.6 2 .1 4 .2 5.9.2 27.2 0 52.8-9.7 72.1-27.4 19.4-17.8 30.1-41.4 30.1-66.6-.1-38.9-25.9-73.5-64.9-87.6zm-29.7 153.1c14.2-34.5 23.6-76 27.8-123.4 0 0 0-.1.1 0 10.3 5 19.1 12.2 25.8 20.9 8.4 10.9 12.8 23.7 12.8 37 0 34-29.2 62.1-66.5 65.5z" fill="currentColor"></svg:path>`,
})
export class IonIosCafeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCalculatorIcon],svg[ion-ios-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M372 48H140c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h232c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zm-12 272v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-80c0-13.3 10.7-24 24-24s24 10.7 24 24zm0-80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm-80 160c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm0-80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm0-80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm-80 160c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm0-80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm0-80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm-48-80v-48c0-8.8 7.2-16 16-16h176c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H168c-8.8 0-16-7.2-16-16z" fill="currentColor"></svg:path>`,
})
export class IonIosCalculatorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCalendarIcon],svg[ion-ios-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M424 96h-40v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V96H160v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V96H88c-22 0-40 18-40 40v272c0 22 18 40 40 40h336c22 0 40-18 40-40V136c0-22-18-40-40-40zm8 300c0 11-9 20-20 20H100c-11 0-20-9-20-20V216c0-4.4 3.6-8 8-8h336c4.4 0 8 3.6 8 8v180z" fill="currentColor"></svg:path><svg:path d="M160 72c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V72z" fill="currentColor"></svg:path><svg:path d="M384 72c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V72z" fill="currentColor"></svg:path>`,
})
export class IonIosCalendarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCallIcon],svg[ion-ios-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M436.9 364.8c-14.7-14.7-50-36.8-67.4-45.1-20.2-9.7-27.6-9.5-41.9.8-11.9 8.6-19.6 16.6-33.3 13.6-13.7-2.9-40.7-23.4-66.9-49.5-26.2-26.2-46.6-53.2-49.5-66.9-2.9-13.8 5.1-21.4 13.6-33.3 10.3-14.3 10.6-21.7.8-41.9C184 125 162 89.8 147.2 75.1c-14.7-14.7-18-11.5-26.1-8.6 0 0-12 4.8-23.9 12.7-14.7 9.8-22.9 18-28.7 30.3-5.7 12.3-12.3 35.2 21.3 95 27.1 48.3 53.7 84.9 93.2 124.3l.1.1.1.1c39.5 39.5 76 66.1 124.3 93.2 59.8 33.6 82.7 27 95 21.3 12.3-5.7 20.5-13.9 30.3-28.7 7.9-11.9 12.7-23.9 12.7-23.9 2.9-8.1 6.2-11.4-8.6-26.1z" fill="currentColor"></svg:path>`,
})
export class IonIosCallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCameraIcon],svg[ion-ios-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="275" r="57.5" fill="currentColor"></svg:circle><svg:path d="M417.5 160H363c-4.6 0-8.9-2-12-5.4-28.4-31.8-39.1-42.6-50.7-42.6h-85.5c-11.7 0-23.2 10.8-51.7 42.7-3 3.4-7.4 5.3-11.9 5.3h-4.1v-8c0-4.4-3.6-8-8-8h-26c-4.4 0-8 3.6-8 8v8h-7.5C79.9 160 64 173.2 64 190.7v176c0 17.5 15.9 33.3 33.5 33.3h320c17.6 0 30.5-15.8 30.5-33.3v-176c0-17.5-12.9-30.7-30.5-30.7zM260 360.4c-50.3 2.3-91.7-39.1-89.4-89.4 2-43.9 37.5-79.4 81.4-81.4 50.3-2.3 91.7 39.1 89.4 89.4-2 43.9-37.5 79.4-81.4 81.4zM352 218c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13z" fill="currentColor"></svg:path>`,
})
export class IonIosCameraIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCarIcon],svg[ion-ios-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 196.2c-13.8-30.8-49-92.2-100-92.2H196c-51 0-84.8 59.4-100 92.2-24 23-48 45.7-48 84.8v76c0 3.7 2.6 7 6.2 7.8C69.1 368.2 116.4 375 256 375s186.9-6.8 201.8-10.2c3.6-.8 6.2-4.1 6.2-7.8v-76c0-39-22.3-63.1-48-84.8zM190 128h132c40.5 0 62 60 62 70H128c0-10 27-70 62-70zm-78 203.7c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32c0 17.6-14.3 32-32 32zM328 300c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16s7.2-16 16-16h112c8.8 0 16 7.2 16 16zm72 32c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" fill="currentColor"></svg:path><svg:path d="M160 384c-47.9 0-96-5-96-5 0 17-.3 29 6 29h85c6.3 0 5-13.2 5-24z" fill="currentColor"></svg:path><svg:path d="M352 384c48 0 96-5 96-5 0 16 2 29-5 29h-86c-6.7 0-5-13.5-5-24z" fill="currentColor"></svg:path>`,
})
export class IonIosCarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCardIcon],svg[ion-ios-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 128c0-17.6-14.4-32-32-32H64c-17.6 0-32 14.4-32 32v48h448v-48z" fill="currentColor"></svg:path><svg:path d="M32 384c0 17.6 14.4 32 32 32h384c17.6 0 32-14.4 32-32V224H32v160zm142-48h164c7.7 0 14 6.3 14 14s-6.3 14-14 14H174c-7.7 0-14-6.3-14-14s6.3-14 14-14zm-72 0h12c7.7 0 14 6.3 14 14s-6.3 14-14 14h-12c-7.7 0-14-6.3-14-14s6.3-14 14-14z" fill="currentColor"></svg:path>`,
})
export class IonIosCardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCartIcon],svg[ion-ios-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle transform="rotate(-1.057 159.995 423.97) scale(.99997)" cx="160" cy="424" r="24" fill="currentColor"></svg:circle><svg:circle transform="matrix(.02382 -.9997 .9997 .02382 -48.51 798.282)" cx="384.5" cy="424" r="24" fill="currentColor"></svg:circle><svg:path d="M463.8 132.2c-.7-2.4-2.8-4-5.2-4.2L132.9 96.5c-2.8-.3-6.2-2.1-7.5-4.7-3.8-7.1-6.2-11.1-12.2-18.6-7.7-9.4-22.2-9.1-48.8-9.3-9-.1-16.3 5.2-16.3 14.1 0 8.7 6.9 14.1 15.6 14.1s21.3.5 26 1.9c4.7 1.4 8.5 9.1 9.9 15.8 0 .1 0 .2.1.3.2 1.2 2 10.2 2 10.3l40 211.6c2.4 14.5 7.3 26.5 14.5 35.7 8.4 10.8 19.5 16.2 32.9 16.2h236.6c7.6 0 14.1-5.8 14.4-13.4.4-8-6-14.6-14-14.6H188.9c-2 0-4.9 0-8.3-2.8-3.5-3-8.3-9.9-11.5-26l-4.3-23.7c0-.3.1-.5.4-.6l277.7-47c2.6-.4 4.6-2.5 4.9-5.2l16-115.8c.2-.8.2-1.7 0-2.6z" fill="currentColor"></svg:path>`,
})
export class IonIosCartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCashIcon],svg[ion-ios-cash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M466 355.9H46c-7.7 0-14 6.3-14 14s6.3 14 14 14h420c7.7 0 14-6.3 14-14s-6.3-14-14-14z" fill="currentColor"></svg:path><svg:path d="M466 403.9H46c-7.7 0-14 6.3-14 14s6.3 14 14 14h420c7.7 0 14-6.3 14-14s-6.3-14-14-14z" fill="currentColor"></svg:path><svg:path d="M444.9 80.1H67.1C47.8 80.1 32 95.9 32 115.2V293c0 19.3 15.8 35.1 35.1 35.1h377.8c19.3 0 35.1-15.8 35.1-35.1V115.2c0-19.3-15.8-35.1-35.1-35.1zM114 296.1H78c-7.7 0-14-6.3-14-14s6.3-14 14-14h36c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-156H78c-7.7 0-14-6.3-14-14s6.3-14 14-14h36c7.7 0 14 6.3 14 14s-6.3 14-14 14zm142 144c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zm178 12h-36c-7.7 0-14-6.3-14-14s6.3-14 14-14h36c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-156h-36c-7.7 0-14-6.3-14-14s6.3-14 14-14h36c7.7 0 14 6.3 14 14s-6.3 14-14 14z" fill="currentColor"></svg:path><svg:circle cx="256" cy="206" r="53" fill="currentColor"></svg:circle>`,
})
export class IonIosCashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCellularIcon],svg[ion-ios-cellular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M408.4 51.8c-2.6-2.5-6.1-3.8-9.7-3.8-3.7 0-7.2 1.4-9.9 3.9-2.7 2.6-4.1 6-4.1 9.6 0 3.6 1.5 7 4.2 9.6 30.4 28.5 47.1 66.5 47.1 107.1 0 40.5-16.7 78.5-47.1 107.1-2.7 2.5-4.2 5.9-4.2 9.6 0 3.6 1.4 7 4.1 9.6 2.6 2.5 6.1 3.9 9.9 3.9 3.7 0 7.1-1.4 9.7-3.8C444.3 271 464 226.1 464 178.2v-.1c0-47.9-19.8-92.7-55.6-126.3z" fill="currentColor"></svg:path><svg:path d="M351 96.8c-2.4-2.3-5.6-3.5-9-3.5-3.3 0-6.5 1.2-8.9 3.4-2.5 2.3-3.9 5.4-3.9 8.7 0 3.3 1.3 6.4 3.8 8.7 18 17 27.8 39.8 27.8 64 0 24.2-9.9 47-27.8 64-2.5 2.3-3.8 5.4-3.8 8.7 0 3.3 1.4 6.4 3.9 8.7 2.4 2.2 5.5 3.4 8.9 3.4 3.4 0 6.6-1.3 9-3.5 22.8-21.7 35.4-50.5 35.4-81.3v-.1c0-30.7-12.6-59.5-35.4-81.2z" fill="currentColor"></svg:path><svg:path d="M123.1 71.1c2.7-2.5 4.2-5.9 4.2-9.6 0-3.6-1.4-7-4.1-9.6-2.6-2.5-6.1-3.9-9.9-3.9-3.7 0-7.1 1.4-9.7 3.8C67.7 85.4 48 130.3 48 178.2v.2c0 47.8 19.8 92.6 55.6 126.2 2.6 2.5 6.1 3.8 9.7 3.8 3.7 0 7.2-1.4 9.9-3.9 2.7-2.6 4.1-6 4.1-9.6 0-3.6-1.5-7-4.2-9.6C92.7 256.8 76 218.8 76 178.2c-.1-40.6 16.7-78.6 47.1-107.1z" fill="currentColor"></svg:path><svg:path d="M179 114.1c2.5-2.3 3.8-5.4 3.8-8.7 0-3.3-1.4-6.4-3.9-8.7-2.4-2.2-5.5-3.4-8.9-3.4-3.4 0-6.6 1.3-9 3.5-22.8 21.7-35.4 50.5-35.4 81.3v.1c0 30.8 12.6 59.6 35.4 81.2 2.4 2.3 5.6 3.5 9 3.5 3.3 0 6.5-1.2 8.9-3.4 2.5-2.3 3.9-5.4 3.9-8.7 0-3.3-1.3-6.4-3.8-8.7-18-17-27.8-39.8-27.8-64-.1-24.2 9.8-46.9 27.8-64z" fill="currentColor"></svg:path><svg:path d="M256 123.2c-26.5 0-48 21.5-48 48 0 21.6 14.3 39.9 34 45.9v233c0 7.7 6.3 13.9 14 13.9s14-6.2 14-13.9v-233c19.7-6 34-24.3 34-45.9 0-26.5-21.5-48-48-48z" fill="currentColor"></svg:path>`,
})
export class IonIosCellularIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosChatboxesIcon],svg[ion-ios-chatboxes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M425.9 170.4H204.3c-21 0-38.1 17.1-38.1 38.1v154.3c0 21 17.1 38 38.1 38h126.8c2.8 0 5.6 1.2 7.6 3.2l63 58.1c3.5 3.4 9.3 2 9.3-2.9v-50.6c0-6 3.8-7.9 9.8-7.9h1c21 0 42.1-16.9 42.1-38V208.5c.1-21.1-17-38.1-38-38.1z" fill="currentColor"></svg:path><svg:path d="M174.4 145.9h177.4V80.6c0-18-14.6-32.6-32.6-32.6H80.6C62.6 48 48 62.6 48 80.6v165.2c0 18 14.6 32.6 32.6 32.6h61.1v-99.9c.1-18 14.7-32.6 32.7-32.6z" fill="currentColor"></svg:path>`,
})
export class IonIosChatboxesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosChatbubbleIcon],svg[ion-ios-chatbubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 96C149.9 96 64 165.1 64 250.3c0 30.7 11.2 59.3 30.4 83.3.9.9 2.9 3.8 3.6 4.9 0 0-1-1.6-1.1-1.9 2.3 3.3 3.6 7.1 3.6 11.2 0 1.4-17.9 58-17.9 58-1.3 4.4 2.1 8.9 7.6 10 .8.2 1.6.2 2.4.2 1.3 0 2.5-.2 3.7-.5l1.6-.6 50.6-22c.9-.4 9-3.5 10-3.9l.6-.2s-.1 0-.6.2c3.4-1.2 7.2-1.8 11.2-1.8 3.6 0 7.1.5 10.3 1.5.1 0 .2 0 .2.1.5.2 1 .3 1.5.5 23.1 7.9 48.4 10.3 75.1 10.3 106 0 191-64.1 191-149.3C448 165.1 362 96 256 96z" fill="currentColor"></svg:path>`,
})
export class IonIosChatbubbleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosChatbubblesIcon],svg[ion-ios-chatbubbles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M431 320.6c0-4.4 1.2-8.6 3.3-12.2.6-1.1 1.4-2.1 2.1-3.1 17.4-26 27.6-57.1 27.6-90.3.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9-2.4 11.1-3.7 22.4-3.7 34.2 0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7 11.3-3.1 22.5-7.2 25.4-8.3 2.9-1.1 6.1-1.7 9.3-1.7 3.6 0 7 .7 10.1 2l56.7 20.1s2.4 1 3.9 1c4.4 0 8-3.5 8-8 0-1-.5-2.7-.5-2.7L431 320.6z" fill="currentColor"></svg:path><svg:path d="M318.5 392.5c-3.6 1-8.2 2.1-13.2 3.2-10.5 2.2-23.9 4.5-34 4.5-96.2 0-171-76.8-171-169.1 0-6.6.7-15 1.5-21.4.6-4.3 1.3-8.6 2.3-12.8 1-4.5 2.2-9 3.5-13.4l-8 7.1C66.8 219.2 48 260 48 302.5c0 29.3 8.5 57.5 24.8 82 2.3 3.5 3.6 6.2 3.2 8-.4 1.8-11.9 62-11.9 62-.6 2.9.5 5.8 2.7 7.7 1.5 1.2 3.3 1.8 5.1 1.8 1 0 2-.2 2.9-.6l56.1-22.1c1.8-.7 3.7-1.1 5.7-1.1 0 0 2.4-.2 6.3 1.3 18.9 7.4 39.8 12 60.7 12 46.6 0 90.4-20.1 120.1-55.1 0 0 3.2-4.4 6.9-9.6-3.7 1.3-7.9 2.6-12.1 3.7z" fill="currentColor"></svg:path>`,
})
export class IonIosChatbubblesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCheckboxIcon],svg[ion-ios-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 64H96c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-52.5 134.5L229.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z" fill="currentColor"></svg:path>`,
})
export class IonIosCheckboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCheckmarkIcon],svg[ion-ios-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z" fill="currentColor"></svg:path>`,
})
export class IonIosCheckmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCheckmarkCircleIcon],svg[ion-ios-checkmark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z" fill="currentColor"></svg:path>`,
})
export class IonIosCheckmarkCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCheckmarkEmptyIcon],svg[ion-ios-checkmark-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M223.9 329.7c-2.4 2.4-5.8 4.4-8.8 4.4s-6.4-2.1-8.9-4.5l-56-56 17.8-17.8 47.2 47.2L340 177.3l17.5 18.1-133.6 134.3z" fill="currentColor"></svg:path>`,
})
export class IonIosCheckmarkEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCircleFilledIcon],svg[ion-ios-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z" fill="currentColor"></svg:path><svg:path d="M256 96c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160S344.4 96 256 96z" fill="currentColor"></svg:path>`,
})
export class IonIosCircleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosClipboardIcon],svg[ion-ios-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M140.5 160v240c0 8.8 7.2 16 16 16h200c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16h-200c-8.8 0-16 7.2-16 16z" fill="currentColor"></svg:path><svg:path d="M321.5 81h-17c0-5.6-1-11-2.7-16-2.1-6-5.3-11.4-9.4-16-8.8-9.9-21.6-17-35.9-17s-27.1 7.1-35.9 17c-4.1 4.6-7.3 10-9.4 16-1.7 5-2.7 10.4-2.7 16H194c-9.6 0-17.5 7.9-17.5 17.5V114c0 1.1.9 2 2 2h156c1.1 0 2-.9 2-2V96c0-8.3-6.7-15-15-15zm-62.9 15.5c-10.5 1.3-19.3-7.5-17.9-17.9.9-7.1 6.7-12.9 13.8-13.8 10.5-1.3 19.3 7.5 17.9 17.9-.9 7.2-6.7 12.9-13.8 13.8z" fill="currentColor"></svg:path><svg:path d="M400 48h-75.2c-1.7 0-2.6 1.9-1.6 3.2 2.9 3.9 5.3 8.1 7 12.8.3.8 1 1.3 1.9 1.3h.5c18.7 0 26.9 14.9 27.5 33.5V114c0 1.1.9 2 2 2h20.3c8.8 0 16 7.2 16 16v297.4c0 8.8-7.2 16-16 16h-253c-8.8 0-16-7.2-16-16V132c0-8.8 7.2-16 16-16h21.3c1.1 0 2-.9 2-2v-8.8c0-19.1 5.6-36.7 27.6-36.7h.3c.9 0 1.8-.6 1.9-1.6 1.5-6.9 4.1-11.7 7.2-15.8 1-1.3.1-3.2-1.6-3.2l-76.3-.1C94.3 47.9 80 62.1 80 79.7V424c0 41.7 14.3 56 32 56h288.5c17.4 0 31.5-14.1 31.5-31.5V80c0-17.7-14.3-32-32-32z" fill="currentColor"></svg:path>`,
})
export class IonIosClipboardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosClockIcon],svg[ion-ios-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M403.1 108.9c-81.2-81.2-212.9-81.2-294.2 0-81.3 81.2-81.2 212.9 0 294.2 81.2 81.2 212.9 81.2 294.2 0 81.2-81.2 81.2-213 0-294.2zM89.6 263.8c-5.6 1.1-10.5-3.8-9.4-9.4.6-3.1 3.1-5.7 6.3-6.3 5.6-1.1 10.5 3.8 9.4 9.4-.6 3.2-3.2 5.7-6.3 6.3zm26.2 82.2c-4.3 3.7-11 1.9-12.8-3.5-1-3-.1-6.5 2.3-8.5 4.3-3.7 11-1.9 12.8 3.5 1 3 .1 6.4-2.3 8.5zm2.3-171.5c-1.9 5.4-8.5 7.2-12.8 3.5-2.4-2.1-3.3-5.5-2.3-8.5 1.9-5.4 8.5-7.2 12.8-3.5 2.4 2.1 3.3 5.5 2.3 8.5zM179.6 404c-1.9 5.4-8.5 7.2-12.8 3.5-2.4-2.1-3.3-5.5-2.3-8.5 1.9-5.4 8.5-7.2 12.8-3.5 2.4 2.1 3.3 5.5 2.3 8.5zm-2.3-287.5c-4.3 3.7-11 1.9-12.8-3.5-1-3-.1-6.5 2.3-8.5 4.3-3.7 11-1.9 12.8 3.5 1 3 .1 6.4-2.3 8.5zm35.4 76.3c-2.3-3.8-1-8.7 2.7-11 3.8-2.3 8.7-1 11 2.7l33.7 62.3c2.5 4.7 3.9 9.9 3.9 15.2v122c0 5-3 8-8 8s-8-3-8-8V262c0-2.7-.7-5.3-1.9-7.6l-33.4-61.6zm44.9 239c-5.6 1.1-10.5-3.8-9.4-9.4.6-3.1 3.1-5.7 6.3-6.3 5.6-1.1 10.5 3.8 9.4 9.4-.6 3.2-3.2 5.7-6.3 6.3zm0-336c-5.6 1.1-10.5-3.8-9.4-9.4.6-3.1 3.1-5.7 6.3-6.3 5.6-1.1 10.5 3.8 9.4 9.4-.6 3.2-3.2 5.7-6.3 6.3zm87.7 311.7c-4.3 3.7-11 1.9-12.8-3.5-1-3-.1-6.5 2.3-8.5 4.3-3.7 11-1.9 12.8 3.5 1 3 .1 6.4-2.3 8.5zm2.3-294.5c-1.9 5.4-8.5 7.2-12.8 3.5-2.4-2.1-3.3-5.5-2.3-8.5 1.9-5.4 8.5-7.2 12.8-3.5 2.4 2.1 3.3 5.5 2.3 8.5zm61.5 229.5c-1.9 5.4-8.5 7.2-12.8 3.5-2.4-2.1-3.3-5.5-2.3-8.5 1.9-5.4 8.5-7.2 12.8-3.5 2.4 2.1 3.3 5.5 2.3 8.5zM406.8 178c-4.3 3.7-11 1.9-12.8-3.5-1-3-.1-6.5 2.3-8.5 4.3-3.7 11-1.9 12.8 3.5 1 3 .1 6.4-2.3 8.5zm18.8 85.8c-5.6 1.1-10.5-3.8-9.4-9.4.6-3.1 3.1-5.7 6.3-6.3 5.6-1.1 10.5 3.8 9.4 9.4-.6 3.2-3.2 5.7-6.3 6.3z" fill="currentColor"></svg:path>`,
})
export class IonIosClockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCloseIcon],svg[ion-ios-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z" fill="currentColor"></svg:path>`,
})
export class IonIosCloseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCloseCircleIcon],svg[ion-ios-close-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z" fill="currentColor"></svg:path>`,
})
export class IonIosCloseCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCloseEmptyIcon],svg[ion-ios-close-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M340.2 160l-84.4 84.3-84-83.9-11.8 11.8 84 83.8-84 83.9 11.8 11.7 84-83.8 84.4 84.2 11.8-11.7-84.4-84.3 84.4-84.2z"></svg:path>`,
})
export class IonIosCloseEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCloudIcon],svg[ion-ios-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M437.1 229.8C429 154.6 365.4 96 288 96c-51.2 0-96.3 25.6-123.4 64.7-8.3-3.4-17.4-5.3-26.9-5.3-39.1 0-70.8 34.4-71.4 73.4C26.4 241.5 0 280.5 0 321.5 0 371.7 40.7 416 90.9 416h330.3c50.2 0 90.9-44.3 90.9-94.5-.1-44.7-32.4-84.1-75-91.7z" fill="currentColor"></svg:path>`,
})
export class IonIosCloudIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCloudCircleIcon],svg[ion-ios-cloud-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm82.6 272H173.4c-25.1 0-45.4-21.4-45.4-47.2 0-21 13.2-39.8 33.2-46.2.3-20 16.2-36.1 35.7-36.1 5.3 0 10.4 1.2 14.9 3.4 13.1-20.5 36.9-33.8 62.5-33.8 37.7 0 67.5 29.3 71.4 66.9 21.7 3.5 38.3 22.7 38.3 45.9 0 25.7-20.3 47.1-45.4 47.1z" fill="currentColor"></svg:path>`,
})
export class IonIosCloudCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCloudDoneIcon],svg[ion-ios-cloud-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M437.1 229.8C429 154.6 365.4 96 288 96c-51.2 0-96.3 25.6-123.4 64.7-8.3-3.4-17.4-5.3-26.9-5.3-39.1 0-70.8 34.4-71.4 73.4C26.4 241.5 0 280.5 0 321.5 0 371.7 40.7 416 90.9 416h330.3c50.2 0 90.9-44.3 90.9-94.5-.1-44.7-32.4-84.1-75-91.7zm-74.6-17.3L228.8 346.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z" fill="currentColor"></svg:path>`,
})
export class IonIosCloudDoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCloudDownloadIcon],svg[ion-ios-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M437.1 165.8C429 90.6 365.4 32 288 32c-51.2 0-96.3 25.6-123.4 64.7-8.3-3.4-17.4-5.3-26.9-5.3-39.1 0-70.8 34.4-71.4 73.4C26.4 177.5 0 216.5 0 257.5 0 307.7 40.7 352 90.9 352H243V211c0-7.2 5.8-13 13-13s13 5.8 13 13v141h152.1c50.2 0 90.9-44.3 90.9-94.5 0-44.7-32.3-84.1-74.9-91.7z" fill="currentColor"></svg:path><svg:path d="M243 435.9l-47.9-47.2c-5.1-5-13.3-5-18.4.1-5 5.1-5 13.3.1 18.4l70 69c2.5 2.4 5.8 3.7 9.1 3.7 1.7 0 3.4-.3 5-1 1.5-.6 2.9-1.6 4.1-2.7l70-69c5.1-5 5.2-13.3.1-18.4-5-5.1-13.3-5.2-18.4-.1L269 435.9V352h-26v83.9z" fill="currentColor"></svg:path>`,
})
export class IonIosCloudDownloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCloudUploadIcon],svg[ion-ios-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M437.1 165.8C429 90.6 365.4 32 288 32c-51.2 0-96.3 25.6-123.4 64.7-8.3-3.4-17.4-5.3-26.9-5.3-39.1 0-70.8 34.4-71.4 73.4C26.4 177.5 0 216.5 0 257.5 0 307.7 40.7 352 90.9 352H243V210.1l-47.9 47.2c-5.1 5-13.3 5-18.4-.1-5-5.1-5-13.3.1-18.4l70-69c1.2-1.1 2.5-2.1 4.1-2.7 1.6-.7 3.3-1 5-1 3.4 0 6.6 1.3 9.1 3.7l70 69c5.1 5 5.2 13.3.1 18.4-5 5.1-13.3 5.2-18.4.1L269 210.1V352h152.1c50.2 0 90.9-44.3 90.9-94.5 0-44.7-32.3-84.1-74.9-91.7z" fill="currentColor"></svg:path><svg:path d="M243 467c0 7.2 5.8 13 13 13s13-5.8 13-13V352h-26v115z" fill="currentColor"></svg:path>`,
})
export class IonIosCloudUploadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCloudyIcon],svg[ion-ios-cloudy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M236 96c-70 0-127.8 59.7-127.8 130.8 0 4.3.3 8.6.8 12.8-43.2 3.9-77 44-77 88.4 0 47 37.9 88 84.6 88h257.8c58.3 0 105.6-49.4 105.6-108s-47.3-108.8-105.6-108.8c-2.3 0-4.8-.2-7.2-.2-2.1 0-4.2 0-6.1.1C349.3 145.6 306 96 236 96z" fill="currentColor"></svg:path>`,
})
export class IonIosCloudyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCloudyNightIcon],svg[ion-ios-cloudy-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M277.8 294.8c-.5 0-1.1-.1-1.6-.1-2.6 0-5.2 0-7.8.3-9.3-40.8-45.9-71.5-89.7-71.5-50.8 0-91.9 40.9-91.9 91.4 0 3.1.2 6.1.5 9.1-31 2.7-55.3 30.1-55.3 61.6C32 419 58.8 448 92.3 448h185.5c41.9 0 75.8-34.7 75.8-76.3 0-41.6-33.9-76.9-75.8-76.9z" fill="currentColor"></svg:path><svg:path d="M452.1 305.4c-2.5.1-5 .2-7.6.2-41.7 0-80.8-15.7-110.3-44.3-29.5-28.5-45.7-66.5-45.7-106.8 0-23 5.3-45.2 15.2-65.3L315.4 70c1.7-2.9-.8-6.5-4.1-6-7.6 1.2-15.7 4-23.2 6.3-59.5 18.2-104.4 68.1-113.7 129.3 1.4-.1 2.9-.1 4.3-.1 26.5 0 52.4 9.2 73 25.9 15.1 12.2 26.9 28 34.2 45.7 23.7 2 45.7 12.4 62.7 29.8 18.7 19.1 29 44.2 29 70.7 0 2.3-.1 4.6-.2 6.8 34.2-8.1 64.3-26.6 86.4-51.8 4.8-5.5 11.3-12.8 15.3-18.5 2-2.8-.3-6.7-3.8-6.3-6.8 1-15.9 3.2-23.2 3.6z" fill="currentColor"></svg:path>`,
})
export class IonIosCloudyNightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCodeIcon],svg[ion-ios-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M332 142.7c-1.2-1.1-2.7-1.7-4.1-1.7s-3 .6-4.1 1.7L310 155.9c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l95.8 91.5-95.8 91.5c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l13.8 13.2c1.2 1.1 2.6 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l114.2-109c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3L332 142.7z" fill="currentColor"></svg:path><svg:path d="M204 160.2c0-1.6-.7-3.2-1.9-4.3l-13.8-13.2c-1.2-1.1-2.7-1.7-4.1-1.7s-3 .6-4.1 1.7l-114.2 109c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l114.2 109c1.2 1.1 2.7 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l13.8-13.2c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3L106.3 256l95.8-91.5c1.2-1.1 1.9-2.7 1.9-4.3z" fill="currentColor"></svg:path>`,
})
export class IonIosCodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCodeDownloadIcon],svg[ion-ios-code-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M332 142.7c-1.2-1.1-2.7-1.7-4.1-1.7s-3 .6-4.1 1.7L310 155.9c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l95.8 91.5-95.8 91.5c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l13.8 13.2c1.2 1.1 2.6 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l114.2-109c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3L332 142.7z" fill="currentColor"></svg:path><svg:path d="M106.3 256l95.8-91.5c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3l-13.8-13.2c-1.2-1.1-2.7-1.7-4.1-1.7s-3 .6-4.1 1.7l-114.2 109c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l114.2 109c1.2 1.1 2.7 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l13.8-13.2c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3L106.3 256z" fill="currentColor"></svg:path><svg:path d="M332.8 267.2c.1-3.9-1.4-7.6-4.2-10.4l-.1-.1c-2.7-2.7-6.2-4.2-10-4.2-3.5 0-6.8 1.3-9.4 3.6l-38.9 34.6V184.6c0-7.8-6.4-14.2-14.2-14.2-7.8 0-14.2 6.4-14.2 14.2v106.2l-38.9-34.6c-2.6-2.3-6-3.6-9.4-3.6-3.8 0-7.4 1.5-10.1 4.2l-.1.1c-2.8 2.8-4.2 6.4-4.2 10.4.1 3.9 1.7 7.5 4.6 10.2l62.8 57.7c2.6 2.4 6 3.7 9.5 3.7s6.9-1.3 9.5-3.7l62.8-57.7c2.8-2.8 4.5-6.4 4.5-10.3z" fill="currentColor"></svg:path>`,
})
export class IonIosCodeDownloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCodeWorkingIcon],svg[ion-ios-code-working-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M446.1 251.6L332 142.7c-1.2-1.1-2.7-1.7-4.1-1.7s-3 .6-4.1 1.7L310 155.9c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l95.8 91.5-95.8 91.5c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l13.8 13.2c1.2 1.1 2.6 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l114.2-109c1.2-1.1 1.9-2.7 1.9-4.3-.1-1.7-.8-3.2-2-4.4z" fill="currentColor"></svg:path><svg:path d="M106.3 256l95.8-91.5c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3l-13.8-13.2c-1.2-1.1-2.7-1.7-4.1-1.7s-3 .6-4.1 1.7l-114.2 109c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l114.2 109c1.2 1.1 2.7 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l13.8-13.2c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3L106.3 256z" fill="currentColor"></svg:path><svg:circle cx="256" cy="256" r="22" fill="currentColor"></svg:circle><svg:circle cx="192" cy="256" r="22" fill="currentColor"></svg:circle><svg:circle cx="320" cy="256" r="22" fill="currentColor"></svg:circle>`,
})
export class IonIosCodeWorkingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCogIcon],svg[ion-ios-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M456.9 242.2l-26.1-4.2c-3.5-.6-6.1-3.3-6.6-6.8-.5-3.2-1-6.4-1.7-9.5-.7-3.4.9-6.9 3.9-8.6l23.1-12.8c3.6-1.8 5.3-6.1 3.9-9.9l-4-11c-1.4-3.8-5.4-6-9.4-5l-25.9 5c-3.4.7-6.9-1-8.6-4.1-1.5-2.8-3.1-5.6-4.8-8.4-1.8-3-1.6-6.8.7-9.5l17.3-19.9c2.8-3 2.9-7.5.3-10.6l-7.5-9c-2.6-3.1-7.1-3.8-10.5-1.5L378.3 130c-3 1.8-6.8 1.4-9.4-.9-2.4-2.1-4.9-4.2-7.4-6.2-2.7-2.2-3.8-5.9-2.5-9.1l9.4-24.7c1.6-3.7.2-8.1-3.3-10.1l-10.2-5.9c-3.5-2-8-1.1-10.4 2.2l-16.6 20.8c-2 2.5-4.9 3.8-8.5 2.5 0 0-5.6-2.3-9.8-3.7-3.3-1.1-5.6-4.2-5.5-7.7l.4-26.4c.2-4.1-2.6-7.7-6.6-8.4l-11.6-2c-4-.7-7.9 1.7-9.1 5.6l-8.6 25c-1.1 3.3-4.3 5.5-7.8 5.4-1.6 0-3.3-.1-4.9-.1s-3.3 0-4.9.1c-3.5.1-6.6-2.1-7.8-5.4l-8.6-25c-1.2-3.9-5.1-6.3-9.1-5.6l-11.6 2c-4 .7-6.8 4.3-6.6 8.4l.4 26.4c.1 3.5-2.1 6.4-5.5 7.7-2.3.9-7.3 2.8-9.7 3.7-2.8 1-6.1.2-8.8-2.9l-16.5-20.3c-2.4-3.3-6.9-4.2-10.4-2.2l-10.2 5.9c-3.5 2-5 6.4-3.3 10.1l9.4 24.7c1.2 3.3.2 7-2.5 9.1-2.5 2-5 4.1-7.4 6.2-2.6 2.3-6.4 2.7-9.4.9L111 116.3c-3.4-2.2-7.9-1.6-10.5 1.5l-7.5 9c-2.6 3.1-2.5 7.7.3 10.6l17.3 19.9c2.3 2.6 2.6 6.5.7 9.5-1.7 2.7-3.3 5.5-4.8 8.4-1.7 3.1-5.1 4.7-8.6 4.1l-25.9-5c-4-.9-8 1.2-9.4 5l-4 11c-1.4 3.8.3 8.1 3.9 9.9L85.6 213c3.1 1.7 4.6 5.2 3.9 8.6-.6 3.2-1.2 6.3-1.7 9.5-.5 3.5-3.2 6.2-6.6 6.8l-26.1 4.2c-4 .5-7.1 3.9-7.1 7.9v11.7c0 4.1 3 7.5 7.1 7.9l26.1 4.2c3.5.6 6.1 3.3 6.6 6.8.5 3.2 1 6.4 1.7 9.5.7 3.4-.9 6.9-3.9 8.6l-23.1 12.8c-3.6 1.8-5.3 6.1-3.9 9.9l4 11c1.4 3.8 5.4 6 9.4 5l25.9-5c3.4-.7 6.9 1 8.6 4.1 1.5 2.8 3.1 5.6 4.8 8.4 1.8 3 1.6 6.8-.7 9.5l-17.3 19.9c-2.8 3-2.9 7.5-.3 10.6l7.5 9c2.6 3.1 7.1 3.8 10.5 1.5l22.7-13.6c3-1.8 6.8-1.4 9.4.9 2.4 2.1 4.9 4.2 7.4 6.2 2.7 2.2 3.8 5.9 2.5 9.1l-9.4 24.7c-1.6 3.7-.2 8.1 3.3 10.1l10.2 5.9c3.5 2 8 1.1 10.4-2.2l16.8-20.6c2.1-2.6 5.5-3.7 8.2-2.6 3.4 1.4 5.7 2.2 9.9 3.6 3.3 1.1 5.6 4.2 5.5 7.7l-.4 26.4c-.2 4.1 2.6 7.7 6.6 8.4l11.6 2c4 .7 7.9-1.7 9.1-5.6l8.6-25c1.1-3.3 4.3-5.5 7.8-5.4 1.6 0 3.3.1 4.9.1s3.3 0 4.9-.1c3.5-.1 6.6 2.1 7.8 5.4l8.6 25c1.2 3.9 5.1 6.3 9.1 5.6l11.6-2c4-.7 6.8-4.3 6.6-8.4l-.4-26.4c-.1-3.5 2.2-6.6 5.5-7.7 4.2-1.4 7-2.5 9.6-3.5 2.6-.9 5.8-1 8.3 2.1l17 20.9c2.4 3.3 6.9 4.2 10.4 2.2l10.2-5.9c3.5-2 5-6.4 3.3-10.1l-9.4-24.7c-1.2-3.3-.2-7 2.5-9.1 2.5-2 5-4.1 7.4-6.2 2.6-2.3 6.4-2.7 9.4-.9l22.7 13.6c3.4 2.2 7.9 1.6 10.5-1.5l7.5-9c2.6-3.1 2.5-7.7-.3-10.6l-17.3-19.9c-2.3-2.6-2.6-6.5-.7-9.5 1.7-2.7 3.3-5.5 4.8-8.4 1.7-3.1 5.1-4.7 8.6-4.1l25.9 5c4 .9 8-1.2 9.4-5l4-11c1.4-3.8-.3-8.1-3.9-9.9l-23.1-12.8c-3.1-1.7-4.6-5.2-3.9-8.6.6-3.2 1.2-6.3 1.7-9.5.5-3.5 3.2-6.2 6.6-6.8l26.1-4.2c4-.5 7.1-3.9 7.1-7.9v-11.7c-.2-3.8-3.2-7.3-7.3-7.7zM181.8 356.9c-5.2 9-17.4 10.7-25 3.6C129.2 334.2 112 297.1 112 256c0-40.9 17.1-77.9 44.5-104.1 7.5-7.2 19.8-5.5 25 3.5l56 96.6c1.4 2.5 1.4 5.5 0 8l-55.7 96.9zM396 289.7C380.9 353 323.9 400 256 400c-14.1 0-27.8-2-40.6-5.8-9.9-2.9-14.5-14.4-9.3-23.3l55.7-96.9c1.4-2.5 4.1-4 6.9-4h111.7c10.4 0 18 9.6 15.6 19.7zM380.5 242H268.7c-2.9 0-5.5-1.5-6.9-4l-56.1-96.7c-5.2-8.9-.7-20.4 9.2-23.4 13-3.9 26.8-5.9 41.1-5.9 67.9 0 124.9 47 140 110.3 2.4 10.1-5.2 19.7-15.5 19.7z" fill="currentColor"></svg:path>`,
})
export class IonIosCogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosColorFillIcon],svg[ion-ios-color-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M231.5 118.3c.1 0 .1-.1 0 0L175.3 62c-9.3-9.3-21.6-14-33.9-14-12.3 0-24.6 4.7-33.9 14-18.7 18.7-18.7 49.2 0 67.9l49.3 49.3-84.5 84c-11.1 11.1-11 29.2.3 40l131.2 126c10.9 10.4 28 10.4 38.9-.1 37.8-36.6 118.3-114.5 126.7-122.9 5.8-5.8 18.2-7.1 28.7-7.1h.3c5.9 0 8.8-7.1 4.6-11.2L231.5 118.3zm-103.9-7.9c-7.2-7.2-8.3-18.8-2-26.8 3.8-4.9 9.6-7.6 15.8-7.6 5.4 0 10.4 2.1 14.1 5.8l49.3 49.3-28.3 28.3-48.9-49z" fill="currentColor"></svg:path><svg:path d="M403 339.5c-1.6-1.9-4.5-1.9-6.1 0-10.5 12.2-45 53.9-45 76.4 0 26.6 21.5 48.1 48 48.1s48-21.6 48-48.1c.1-22.6-34.3-64.2-44.9-76.4z" fill="currentColor"></svg:path>`,
})
export class IonIosColorFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosColorFilterIcon],svg[ion-ios-color-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M442 248.9c-15.7-20.6-37.7-35.9-62.1-43.6 1-6.3 1.4-12.7 1.4-19.1 0-33.7-13-65.4-36.7-89.2C321 73.1 289.5 60 256 60s-65 13.1-88.6 37c-23.7 23.8-36.7 55.5-36.7 89.2 0 6.4.5 12.8 1.4 19.1-24.5 7.7-46.4 23.1-62.1 43.6-17 22.2-26 48.8-26 76.9 0 33.7 13 65.4 36.7 89.2 23.7 23.8 55.2 37 88.6 37 32.6 0 63.2-12.4 86.7-35 23.4 22.6 54.1 35 86.7 35 33.5 0 65-13.1 88.6-37 23.7-23.8 36.7-55.5 36.7-89.2 0-28.1-9-54.7-26-76.9zM256 85.5c55.1 0 100 45.2 100 100.7 0 4.7-.3 9.4-1 14.1-4.1-.4-8.2-.6-12.4-.6-32.6 0-63.2 12.4-86.7 35-23.4-22.6-54.1-35-86.7-35-4.1 0-8.3.2-12.4.6-.6-4.6-1-9.4-1-14.1.2-55.6 45.1-100.7 100.2-100.7zm0 201.4c-1.8 0-3.7-.1-5.5-.2 1.6-3.8 3.4-7.5 5.5-11.1 2.1 3.6 3.9 7.3 5.5 11.1-1.8.2-3.7.2-5.5.2zm-46.6 131.2c-12.7 5.6-26.1 8.4-40.1 8.4-55.1 0-100-45.2-100-100.7 0-22.3 7.1-43.5 20.6-61.2 12.3-16.1 29.4-28.3 48.5-34.6 6.6 17.9 17.3 34.3 31.2 47.6 13.9 13.4 30.9 23.4 49.2 29.1-1 6.3-1.4 12.7-1.4 19.1 0 25.8 7.7 50.6 22.2 71.7-8.8 8.7-19 15.6-30.2 20.6zM225.1 282c-27.6-9-50-29.8-61.3-56.7 1.8-.1 3.7-.2 5.5-.2 13.9 0 27.4 2.8 40.1 8.4 11.2 5 21.4 11.9 30.1 20.6-5.9 8.7-10.8 18-14.4 27.9zm30.9 94c-8.7-15.2-13.3-32.5-13.3-50.2 0-4.7.3-9.4 1-14.1a128.658 128.658 0 0024.8 0c.6 4.6 1 9.4 1 14.1-.2 17.7-4.8 35-13.5 50.2zm46.6-142.5c12.7-5.6 26.1-8.4 40.1-8.4 1.8 0 3.7.1 5.5.2-11.3 26.9-33.7 47.7-61.3 56.7-3.6-9.8-8.5-19.2-14.4-27.9 8.7-8.7 18.9-15.6 30.1-20.6zm40.1 193c-13.9 0-27.4-2.8-40.1-8.4-11.2-5-21.4-11.9-30.1-20.6 14.5-21.1 22.2-45.8 22.2-71.7 0-6.4-.5-12.8-1.4-19.1 18.3-5.7 35.2-15.7 49.2-29.1 13.8-13.3 24.5-29.6 31.2-47.6 19.1 6.3 36.2 18.4 48.5 34.6 13.5 17.7 20.6 38.9 20.6 61.2-.1 55.6-45 100.7-100.1 100.7z" fill="currentColor"></svg:path>`,
})
export class IonIosColorFilterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosColorPaletteIcon],svg[ion-ios-color-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M430.1 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 12-36.6.1-47.7zM120 216c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm40 126c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm64-161c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm72 219c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm24-208c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" fill="currentColor"></svg:path>`,
})
export class IonIosColorPaletteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosColorWandIcon],svg[ion-ios-color-wand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M445.7 405.6L201.3 160.4c-3.1-3.1-8.2-3.1-11.3 0l-28.7 28.8c-3.1 3.1-3.1 8.2 0 11.3l244.4 245.2c3.1 3.1 8.2 3.1 11.3 0l28.6-28.8c3.2-3.1 3.2-8.2.1-11.3zm-25.5 14.3l-.1.1c-3.1 3.1-8.2 3.1-11.3 0L218.9 229.5c-3.1-3.1-3.1-8.2 0-11.3l.1-.1c3.1-3.1 8.2-3.1 11.3 0l189.9 190.5c3.1 3.1 3.1 8.2 0 11.3z" fill="currentColor"></svg:path><svg:path d="M192.8 120.1c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12s-12 5.4-12 12v32.1c0 6.6 5.4 12 12 12z" fill="currentColor"></svg:path><svg:path d="M192.8 263.3c-6.6 0-12 5.4-12 12v32.1c0 6.6 5.4 12 12 12s12-5.4 12-12v-32.1c0-6.6-5.4-12-12-12z" fill="currentColor"></svg:path><svg:path d="M270.7 190.2c0 6.6 5.4 12 12 12h32c6.6 0 12-5.4 12-12s-5.4-12-12-12h-32c-6.6 0-12 5.4-12 12z" fill="currentColor"></svg:path><svg:path d="M119.9 190.2c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12s5.4 12 12 12h32c6.5 0 11.9-5.4 11.9-12z" fill="currentColor"></svg:path><svg:path d="M124.8 141c2.3 2.3 5.3 3.5 8.5 3.5s6.2-1.3 8.5-3.5c4.7-4.7 4.7-12.3 0-17l-20.9-21c-2.3-2.3-5.3-3.5-8.5-3.5s-6.2 1.3-8.5 3.5c-4.7 4.7-4.7 12.3 0 17l20.9 21z" fill="currentColor"></svg:path><svg:path d="M133.3 239.9c-3.2 0-6.2 1.3-8.5 3.5l-20.9 21c-2.3 2.3-3.5 5.3-3.5 8.5s1.2 6.2 3.5 8.5 5.3 3.5 8.5 3.5 6.2-1.3 8.5-3.5l20.9-21c4.7-4.7 4.7-12.3 0-17-2.3-2.2-5.3-3.5-8.5-3.5z" fill="currentColor"></svg:path><svg:path d="M252.4 144.5c3.2 0 6.2-1.3 8.5-3.5l20.9-21c4.7-4.7 4.7-12.3 0-17-2.3-2.3-5.3-3.5-8.5-3.5s-6.2 1.3-8.5 3.5l-20.9 21c-2.3 2.3-3.5 5.3-3.5 8.5s1.2 6.2 3.5 8.5c2.3 2.2 5.3 3.5 8.5 3.5z" fill="currentColor"></svg:path>`,
})
export class IonIosColorWandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCompassIcon],svg[ion-ios-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M280.5 280.5l-49-49c-.9-.9-2.5-.7-3.2.4l-49.5 98.5c-1.1 1.8 1 3.9 2.8 2.8l98.5-49.5c1.1-.7 1.3-2.3.4-3.2z" fill="currentColor"></svg:path><svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm40.6 249.3L137 377.8c-1.8 1.1-3.9-1-2.8-2.8l80.6-159.6c.2-.3.4-.5.7-.7L375 134.2c1.8-1.1 3.9 1 2.8 2.8l-80.6 159.6c-.1.3-.3.5-.6.7z" fill="currentColor"></svg:path>`,
})
export class IonIosCompassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosComposeIcon],svg[ion-ios-compose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 320h-64v-64l128-128H64v304h320V192z" fill="currentColor"></svg:path><svg:path d="M387.927 91.74L208 271.651V304h32.216l180.045-179.984z" fill="currentColor"></svg:path><svg:path d="M444.213 80.312l-12.465-12.466C429.084 65.467 425.556 64 421.746 64a14.758 14.758 0 0 0-9.929 3.85L399.666 80l.08.08 11.293 11.293 21.02 21.02 12.15-12.15c2.383-2.625 3.791-6.117 3.791-9.929 0-3.81-1.408-7.339-3.787-10.002z" fill="currentColor"></svg:path>`,
})
export class IonIosComposeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosConstructIcon],svg[ion-ios-construct-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M380 64.4z" fill="currentColor"></svg:path><svg:path d="M275.1 57.6c-9.4-5.9-23.3-9.6-37.9-9.6-14.3 0-30.3 2.5-46.7 9.2-46.5 19-74 45.4-81.1 52.4-7 7-16.8 18-22.9 26.6-6.1 8.7 1.9 21-6.1 29s-24.7 0-24.7 0c-1.4 0-2.9.5-3.9 1.6l-34.1 33.9c-2.2 2.1-2.2 5.7 0 7.8l63.5 63.1c1.1 1.1 2.5 1.6 3.9 1.6s2.9-.5 3.9-1.6l33.2-34.8c2.2-2.1 2.2-5.7 0-7.8 0 0-5.3-5.2-12.1-12s.8-19.3 5.3-23.4c4.5-4.1 11.6-6.8 21.1-6.8 4.3 0 7.4.7 11.4 1.8 12.2 3.4 25.8 15.9 50.9 40.8l-3.9 6.5c-2.3 3.8-.9 8.3 1.3 10.4 0 0-5-4.9 13.1 13.1l50-47.2c-19.1-18.9-14.5-14.1-14.5-14.1-1.4-1.4-3.8-2.3-6.3-2.3-1.4 0-2.9.3-4.2 1l-5.6 3c-28-27.8-35.3-40.2-34.3-61.7 1.1-22.4 12.3-37.1 30.5-52.7 24.7-21.1 60.6-15.2 60.6-15.2 8-.1-4.2-8.6-10.4-12.6z" fill="currentColor"></svg:path><svg:path d="M462.5 399.9s-68.9-57.2-130.2-115.7l-47.7 50.6c58.5 60.6 114.9 127.6 114.9 127.6 1.1 1.1 2.5 1.6 3.9 1.6s2.9-.5 3.9-1.6l55.1-54.7c2.2-2.1 2.2-5.7.1-7.8z" fill="currentColor"></svg:path><svg:path d="M479.2 125.3l-52.4 52.6-51.1-9.3-9.2-51.1 52.4-52.6c-11.1-11.1-26.8-16.6-39-16.6-.7 0-1.4 0-2 .1-12.5.6-39.2 7.7-59.9 29.7-20 21.1-41.1 60.6-22.4 104.3 2.2 5.3 4.7 12.2-2.7 19.7-1.5 1.4-9.9 9.4-22.5 21.3-3.6 3.4-7.4 7-11.6 11-8 7.6-17.1 16.2-26.8 25.2-3.8 3.6-7.7 7.2-11.6 11-57 53.8-126.9 119.5-126.9 119.5-18 15.5-16.7 44.1-.1 60.8 8.5 8.4 20 12.8 31.3 12.8 11 0 21.9-4.2 29.5-13.1 0 0 65.5-69.8 119.3-126.9 3.7-4 7.4-7.8 11-11.7 9.3-9.9 18-19.1 25.8-27.3 3.9-4.2 7.6-8.1 11-11.6 11.5-12.2 19.3-20.4 21-22 4-3.9 7.7-5.1 11.1-5.1 3.3 0 6.2 1.2 8.6 2.4 9.9 5.1 21 7.3 32.4 7.3 26.7 0 55-12.4 72.1-29.5 24.4-24.4 28.8-47.9 29.6-60 .6-11.8-3.6-27.6-16.9-40.9zM137.4 426.1c-5.5 5.4-14.4 5.4-19.8 0-5.4-5.5-5.4-14.4 0-19.8 5.5-5.4 14.4-5.4 19.8 0 5.4 5.5 5.4 14.4 0 19.8z" fill="currentColor"></svg:path>`,
})
export class IonIosConstructIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosContactIcon],svg[ion-ios-contact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C148.5 48 60.1 129.5 49.2 234.1c-.8 7.2-1.2 14.5-1.2 21.9 0 7.4.4 14.7 1.2 21.9C60.1 382.5 148.5 464 256 464c114.9 0 208-93.1 208-208S370.9 48 256 48zm135.8 326.1c-22.7-8.6-59.5-21.2-82.4-28-2.4-.7-2.7-.9-2.7-10.7 0-8.1 3.3-16.3 6.6-23.3 3.6-7.5 7.7-20.2 9.2-31.6 4.2-4.9 10-14.5 13.6-32.9 3.2-16.2 1.7-22.1-.4-27.6-.2-.6-.5-1.2-.6-1.7-.8-3.8.3-23.5 3.1-38.8 1.9-10.5-.5-32.8-14.9-51.3-9.1-11.7-26.6-26-58.5-28h-17.5c-31.4 2-48.8 16.3-58 28-14.5 18.5-16.9 40.8-15 51.3 2.8 15.3 3.9 35 3.1 38.8-.2.7-.4 1.2-.6 1.8-2.1 5.5-3.7 11.4-.4 27.6 3.7 18.4 9.4 28 13.6 32.9 1.5 11.4 5.7 24 9.2 31.6 2.6 5.5 3.8 13 3.8 23.6 0 9.9-.4 10-2.6 10.7-23.7 7-58.9 19.4-80 27.8C91.6 341.4 76 299.9 76 256c0-48.1 18.7-93.3 52.7-127.3S207.9 76 256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256c0 43.9-15.6 85.4-44.2 118.1z" fill="currentColor"></svg:path>`,
})
export class IonIosContactIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosContactsIcon],svg[ion-ios-contacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm143.3 263.9c-8.1-2.6-23.7-3.4-29.5-10.4-2.9-3.5-1-16.6-1-16.6 25.2-1.4 31-6.1 31-6.1 3.9-2.3 2.1-2.7.1-6.1-10.9-18.3-6-41.5-6.5-61.6-.4-16.7-4.8-35-20-44.4-7.6-4.7-19.7-6.9-31.4-6.9-9.5 0-18.7 1.4-25.3 4.1-42.4 17-17.4 73.2-31.9 105.4-2.5 5.4-6.1 7.3.2 10.5 0 0 7.5 4.4 28.9 6.3 0 0 .3 12.6 0 13.9-1.1 4.9-11.8 8.3-15.8 9.4-2.7.7-8.7 2.5-16.4 5.7-3.7 1.5-3.1 6.9.8 7.6 3.9.7 8.1 1.7 11.5 2.9 0 0 26.4 6 46 25 13.2 12.7 18.1 27.6 20 44.6.5 4.5-1.7 8.9-5.5 11.5l-5.7 3.6c-1.9 1.1-4.2-.2-4.3-2.4 0-29.5-17.8-55.5-45.8-65.2-13.5-4.7-28.1-5-41.6-9.7-4.1-1.4-12.2-3.1-13.9-7.8-1.6-4.6-1.6-10-1.9-14.8-.2-3.8-.3-7.6-.3-11.4 0-2.5 6.4-7.8 7.8-10.1 5.4-9 5.9-21.1 6.9-31.3 8.7 2.4 9.8-13.7 11.3-18.6 1.1-3.4 5-20.9-2.6-23.6 2.5-4.4 3.5-9.8 4.2-14.7 2-12.8 2.8-26.8-1.1-39.3-8.1-26-33-40.6-59.3-41.4-26.7-.9-53.5 11.9-63.5 37.8-4.8 12.6-4.4 26.3-2.8 39.5.7 6 1.7 12.7 4.7 18.1-6.4 2.8-4.5 17.7-3.4 21.3 1.6 5.1 3 23.4 12.1 20.9.8 8.1 1.7 16.4 3.9 24.3 1.5 5.3 4.6 9.8 8.2 13.9 1.8 2 2.7 2.2 2.6 4.8-.1 7.8.1 16.2-1.9 23.8s-18.7 10.8-25.4 12.2c-14.8 3-28.6 4.7-41.4 11.5C84.8 320.6 76 289 76 256c0-47.9 19.2-94 53.2-127.7C162.7 95 207.1 76.4 254.3 76c47.6-.4 93.7 18.1 127.8 51.5 34.8 34.1 54 79.9 54 128.5 0 24.9-5 48.9-14.5 71.1-5.6-7-13.4-12.3-22.3-15.2z" fill="currentColor"></svg:path>`,
})
export class IonIosContactsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosContractIcon],svg[ion-ios-contract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M184.3 204.8h-77.7c-7.7 0-13.9 6.2-13.9 13.9v.2c0 7.7 6.2 13.9 13.9 13.9h112.2c7.7 0 13.9-6.2 13.9-13.9V106.6c0-7.7-6.2-13.9-13.9-13.9h-.2c-7.7 0-13.9 6.2-13.9 13.9v77.7L87.7 68c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.4-9.8 4.1-5.4 5.4-5.4 14.2 0 19.6l116.2 117.1z" fill="currentColor"></svg:path><svg:path d="M293.1 232.8h112.2c7.7 0 13.9-6.2 13.9-13.9v-.2c0-7.7-6.2-13.9-13.9-13.9h-77.7L444 87.7c5.4-5.4 5.4-14.2 0-19.6-2.6-2.6-6.1-4.1-9.8-4.1-3.7 0-7.2 1.4-9.8 4L307.3 184.3v-77.7c0-7.7-6.2-13.9-13.9-13.9h-.2c-7.7 0-13.9 6.2-13.9 13.9v112.2c0 7.7 6.2 14 13.8 14z" fill="currentColor"></svg:path><svg:path d="M77.9 448c3.7 0 7.2-1.4 9.8-4l117.1-116.3v77.7c0 7.7 6.2 13.9 13.9 13.9h.2c7.7 0 13.9-6.2 13.9-13.9V293.1c0-7.7-6.2-13.9-13.9-13.9H106.6c-7.7 0-13.9 6.2-13.9 13.9v.2c0 7.7 6.2 13.9 13.9 13.9h77.7L68 424.3c-5.4 5.4-5.4 14.2 0 19.6 2.7 2.7 6.2 4.1 9.9 4.1z" fill="currentColor"></svg:path><svg:path d="M293.1 419.2h.2c7.7 0 13.9-6.2 13.9-13.9v-77.7L424.3 444c2.6 2.6 6.1 4 9.8 4 3.7 0 7.2-1.4 9.8-4.1 5.4-5.4 5.4-14.2 0-19.6L327.7 307.2h77.7c7.7 0 13.9-6.2 13.9-13.9v-.2c0-7.7-6.2-13.9-13.9-13.9H293.1c-7.7 0-13.9 6.2-13.9 13.9v112.2c.1 7.7 6.3 13.9 13.9 13.9z" fill="currentColor"></svg:path>`,
})
export class IonIosContractIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosContrastIcon],svg[ion-ios-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm127.3 335.3c-34 34-79.2 52.7-127.3 52.7V76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3z" fill="currentColor"></svg:path>`,
})
export class IonIosContrastIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCopyIcon],svg[ion-ios-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 115h90c3.3 0 6-2.7 6-6 0-8.2-3.7-16-10-21.3l-77.1-64.2c-4.9-4.1-14.2-7.4-20.6-7.4-4.1 0-7.4 3.3-7.4 7.4V96c.1 10.5 8.6 19 19.1 19z" fill="currentColor"></svg:path><svg:path d="M307 96V16H176c-17.6 0-32 14.4-32 32v336c0 17.6 14.4 32 32 32h240c17.6 0 32-14.4 32-32V141h-96c-24.8 0-45-20.2-45-45z" fill="currentColor"></svg:path><svg:path d="M116 412V80H96c-17.6 0-32 14.4-32 32v352c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32v-20H148c-17.6 0-32-14.4-32-32z" fill="currentColor"></svg:path>`,
})
export class IonIosCopyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCreateIcon],svg[ion-ios-create-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M404.3 86l-202 202c-1.5 1.5-2.3 3.5-2.3 5.6v26.5c0 4.4 3.6 7.9 7.9 7.9h26.3c2.1 0 4.2-.8 5.7-2.3l202.1-202c3.1-3.1 3.1-8.1 0-11.2L415.5 86c-3.1-3.1-8.1-3.1-11.2 0z" fill="currentColor"></svg:path><svg:path d="M475.6 67l-14.4-14.4-.2-.2c-3.1-2.7-7.2-4.4-11.5-4.4-4.4 0-8.5 1.7-11.6 4.5l-11.3 11.4c-1.5 1.6-1.5 4.1 0 5.6L437 79.9l21.7 21.7c1.6 1.6 4.1 1.6 5.7 0l11.3-11.3c2.8-3.1 4.4-7.1 4.4-11.6-.1-4.4-1.7-8.6-4.5-11.7z" fill="currentColor"></svg:path><svg:g><svg:path d="M250 342c-3 3-7.1 4.7-11.3 4.7H197.3c-8.8 0-16-7.2-16-16V289.2c0-4.2 1.7-8.3 4.7-11.3l.8-.8 147.6-147.6c2.5-2.5.7-6.8-2.8-6.8H90.7C58.3 122.7 32 149 32 181.4v224c0 32.4 26.3 58.7 58.7 58.7h256c32.4 0 58.7-26.3 58.7-58.7v-209c0-3.6-4.3-5.3-6.8-2.8L250.8 341.2l-.8.8z" fill="currentColor"></svg:path></svg:g>`,
})
export class IonIosCreateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCropIcon],svg[ion-ios-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M142 64c-7.7 0-14 6.3-14 14v20c0 7.7 6.3 14 14 14s14-6.3 14-14V78c0-7.7-6.3-14-14-14z" fill="currentColor"></svg:path><svg:path d="M156 342V190c0-7.7-6.3-14-14-14s-14 6.3-14 14v166c0 15.5 12.5 28 28 28h166c7.7 0 14-6.3 14-14s-6.3-14-14-14H170c-7.7 0-14-6.3-14-14z" fill="currentColor"></svg:path><svg:path d="M434 356h-20c-7.7 0-14 6.3-14 14s6.3 14 14 14h20c7.7 0 14-6.3 14-14s-6.3-14-14-14z" fill="currentColor"></svg:path><svg:path d="M64 142c0 7.7 6.3 14 14 14h264c7.7 0 14 6.3 14 14v264c0 7.7 6.3 14 14 14s14-6.3 14-14V156c0-15.5-12.5-28-28-28H78c-7.7 0-14 6.3-14 14z" fill="currentColor"></svg:path>`,
})
export class IonIosCropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCropStrongIcon],svg[ion-ios-crop-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 64h32v48h-32z" fill="currentColor"></svg:path><svg:path d="M160 352V176h-32v208h208v-32z" fill="currentColor"></svg:path><svg:path d="M400 352h48v32h-48z" fill="currentColor"></svg:path><svg:path d="M64 128v32h288v288h32V128z" fill="currentColor"></svg:path>`,
})
export class IonIosCropStrongIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCubeIcon],svg[ion-ios-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M440.8 129.5L261.7 49.2c-3.6-1.6-7.7-1.6-11.3 0L71.2 129.5c-6 2.7-6.2 11.8-.4 14.8l178.7 94.1c4.1 2.2 8.9 2.2 13 0l178.7-94.1c5.8-3 5.6-12.1-.4-14.8z" fill="currentColor"></svg:path><svg:path d="M280.2 462.9l180.1-95.3c2.2-1.4 3.6-4 3.6-6.8V175.9c0-5.9-5.8-9.7-10.7-7.1l-180.1 92.8c-2.6 1.3-4.2 4.1-4.2 7.1V456c.1 6.2 6.4 10 11.3 6.9z" fill="currentColor"></svg:path><svg:path d="M48 175.9v184.8c0 2.8 1.4 5.4 3.6 6.8l180.1 95.3c5 3.2 11.2-.6 11.2-6.8V268.7c0-3-1.6-5.8-4.2-7.1l-180-92.8c-4.9-2.6-10.7 1.3-10.7 7.1z" fill="currentColor"></svg:path>`,
})
export class IonIosCubeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosCutIcon],svg[ion-ios-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M308 277.2c25.5-33 80.5-111.5 90.2-135.4 7.2-17.6 10.6-32.8 10.4-46.2-.2-17.9-6-29.3-18.3-40.6-5.2-4.8-13.5-6.9-20-6.9L255.9 201.7l-10 13.4-2.9 3.9-.1.1-14.5 19.7c-.1.1-.2.3-.3.4-.5.8-7.5 10.9-15.2 22.7-3 4.6-6.1 9.5-9 14.1-3.5 5.6-6.6 11-8.8 15.2-3.6 7.1-7.3 14.4-10.7 21.5-3.7 7.5-7.2 14.6-10.4 20.7-10.2-7.3-22-11.1-34.3-11.1-17.5 0-33.7 7.7-45.8 21.6C82.4 357.1 76 374.6 76 393.1c0 18.5 6.4 36 17.9 49.3 12.1 13.9 28.4 21.6 45.8 21.6 14.4 0 28-5.2 39.2-15 10.5-9.1 18-21.3 21.8-35.4 1-3.1 11.6-34.7 26.1-57.3 9.2-14.4 22.2-23.4 29.6-27.8l13.5-9.7c0 .1 12.7-8.7 38.1-41.6zM139.9 421.1c-13.3 0-24-12.6-24-28s10.7-28 24-28 24 12.6 24 28c0 15.5-10.8 28-24 28zm116.2-132.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" fill="currentColor"></svg:path><svg:path d="M191.5 260.4c.7 1 1.6 1.9 2.5 2.7 1.7-2.8 3.6-5.7 5.4-8.6l46.5-65.8L140.9 48c-8.9 0-14.4.9-18.5 3.9-11.9 8.9-19.1 25.6-19.3 43.6-.2 13.5 3.3 28.6 10.4 46.2 8.6 21 42.6 70.2 78 118.7z" fill="currentColor"></svg:path><svg:path d="M372 322.3c-12.3 0-24.1 3.8-34.3 11.1-3.2-6.1-6.7-13.2-10.4-20.7-3.4-6.9-6.9-14-10.4-20.8L306 305.8l-36.4 33.1c5.2 4.6 10.7 10.4 15.3 17.5 14.5 22.6 25 54.2 26 57.3 3.8 14.1 11.3 26.3 21.8 35.4 11.3 9.8 24.9 15 39.2 15 35.3 0 64-31.8 64-70.9s-28.6-70.9-63.9-70.9zm.1 98.8c-13.3 0-24-12.6-24-28s10.7-28 24-28 24 12.6 24 28c0 15.5-10.7 28-24 28z" fill="currentColor"></svg:path>`,
})
export class IonIosCutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosDesktopIcon],svg[ion-ios-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 442.2c-.3-2.2-2-3.9-4.2-4.3l-22.3-1.9c-11.8-3.1-20.5-16.2-22.3-28.3L302 400h-92l-1.2 7.6c-1.9 12.1-10.5 25.2-22.3 28.3l-22.3 1.9c-2.1.5-3.9 2.2-4.2 4.3-.4 3.1 2 5.8 5.1 5.8h181.8c3 .1 5.5-2.6 5.1-5.7z" fill="currentColor"></svg:path><svg:path d="M472.9 71c-4.5-4.5-10.7-7-17-7H56.2c-6.4 0-12.5 2.5-17 7S32 81.7 32 88v272c0 6.4 2.7 12.5 7.2 17s10.5 7 16.8 7h400c6.4 0 12.3-2.5 16.8-7s7.2-10.7 7.2-17V88c.1-6.3-2.6-12.5-7.1-17zM256 360c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm203.9-40H52.2c-2.2 0-4-1.8-4-4V92c0-6.6 5.4-12 12-12h391.7c6.6 0 12 5.4 12 12v224c0 2.2-1.8 4-4 4z" fill="currentColor"></svg:path>`,
})
export class IonIosDesktopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosDiscIcon],svg[ion-ios-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 165.8c-49.9 0-90.3 40.4-90.3 90.3s40.4 90.2 90.3 90.2 90.3-40.4 90.3-90.2c0-49.9-40.4-90.3-90.3-90.3zm0 130.6c-22.3 0-40.4-18.1-40.4-40.4s18.1-40.4 40.4-40.4 40.4 18.1 40.4 40.4-18.1 40.4-40.4 40.4z" fill="currentColor"></svg:path><svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 322c-63 0-114-51.1-114-114 0-63 51.1-114 114-114s114 51 114 114-51 114-114 114z" fill="currentColor"></svg:path>`,
})
export class IonIosDiscIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosDocumentIcon],svg[ion-ios-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M312 155h91c2.8 0 5-2.2 5-5 0-8.9-3.9-17.3-10.7-22.9L321 63.5c-5.8-4.8-13-7.4-20.6-7.4-4.1 0-7.4 3.3-7.4 7.4V136c0 10.5 8.5 19 19 19z" fill="currentColor"></svg:path><svg:path d="M267 136V56H136c-17.6 0-32 14.4-32 32v336c0 17.6 14.4 32 32 32h240c17.6 0 32-14.4 32-32V181h-96c-24.8 0-45-20.2-45-45z" fill="currentColor"></svg:path>`,
})
export class IonIosDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosDoneAllIcon],svg[ion-ios-done-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M317.5 210.3c1.7-1.8 1.8-4.7 0-6.5l-19.8-21c-.8-.9-2-1.4-3.2-1.4-1.2 0-2.4.5-3.2 1.4l-66.5 69.1 26.4 27.1 66.3-68.7z" fill="currentColor"></svg:path><svg:path d="M123.8 253.1c-.9-.9-2-1.4-3.2-1.4-1.2 0-2.3.5-3.2 1.4l-20.1 20.7c-1.8 1.8-1.8 4.8 0 6.6l63.2 65c4 4.2 9 6.6 13.2 6.6 6 0 11.1-4.5 13.1-6.4l.1-.1 13.4-13.8-76.5-78.6z" fill="currentColor"></svg:path><svg:path d="M414.7 182.4l-19.8-21c-.8-.9-2-1.4-3.2-1.4-1.2 0-2.4.5-3.2 1.4L250.7 304.1l-50.1-51.6c-.9-.9-2-1.4-3.2-1.4-1.2 0-2.3.5-3.2 1.4l-20.1 20.7c-1.8 1.8-1.8 4.8 0 6.6l63.2 65c4 4.2 9 6.6 13.2 6.6 6 0 11.1-4.5 13.1-6.4l.1-.1 151-156.1c1.7-1.7 1.7-4.6 0-6.4z" fill="currentColor"></svg:path>`,
})
export class IonIosDoneAllIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosDownloadIcon],svg[ion-ios-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M376 144H269v179.9l47.9-47.2c5.1-5 13.3-5 18.4.1 5 5.1 5 13.3-.1 18.4l-70 69c-2.5 2.4-5.8 3.7-9.1 3.7-1.7 0-3.4-.3-5-1-1.5-.6-2.9-1.6-4.1-2.7l-70-69c-5.1-5-5.2-13.3-.1-18.4 5-5.1 13.3-5.2 18.4-.1l47.9 47.2V144H136c-22 0-40 18-40 40v240c0 22 18 40 40 40h240c22 0 40-18 40-40V184c0-22-18-40-40-40z" fill="currentColor"></svg:path><svg:path d="M269 61c0-7.2-5.8-13-13-13s-13 5.8-13 13v83h26V61z" fill="currentColor"></svg:path>`,
})
export class IonIosDownloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosEaselIcon],svg[ion-ios-easel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M434 461.5l-26.6-69.1c-2.1-5.1-7-8.4-12.4-8.4-4.5 0-8.6 2.2-11.1 5.9s-3 8.4-1.4 12.5l26 69.1c2.1 5.1 7 8.5 12.5 8.5h.5c4.5 0 8.7-2.2 11.2-5.9 2.5-3.8 3-8.5 1.3-12.6z" fill="currentColor"></svg:path><svg:path d="M117.6 384c-5.5 0-10.4 3.3-12.4 8.4l-26.6 69.1c-1.7 4.2-1.2 8.9 1.3 12.6 2.5 3.7 6.7 5.9 11.2 5.9h.5c5.5 0 10.4-3.3 12.5-8.5l26-69.1c1.7-4.1 1.2-8.8-1.4-12.5-2.4-3.7-6.6-5.9-11.1-5.9z" fill="currentColor"></svg:path><svg:path d="M256.6 384h-1.1c-7.4 0-13.4 6-13.4 13.4v36.1c0 7.4 6 14.4 13.4 14.4h1.1c7.4 0 13.4-7 13.4-14.4v-36.1c0-7.4-6-13.4-13.4-13.4z" fill="currentColor"></svg:path><svg:g><svg:path d="M424 128H88c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h336c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8z" fill="currentColor"></svg:path><svg:path d="M448 80H63.9C46.3 80 32 94.3 32 111.9v224.2c0 17.6 14.3 31.9 31.9 31.9H448c17.7 0 32-14.3 32-32V112c0-17.7-14.3-32-32-32zm4 244c0 8.8-7.2 16-16 16H76c-8.8 0-16-7.2-16-16V124c0-8.8 7.2-16 16-16h364.6c3 0 5.9 1.2 8 3.3 2.1 2.1 3.3 5 3.3 8V324z" fill="currentColor"></svg:path></svg:g><svg:path d="M256 32c-13.4-.2-24.4 12.2-24.4 25.6h48.7c.1-13.4-10.9-25.8-24.3-25.6z" fill="currentColor"></svg:path>`,
})
export class IonIosEaselIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosEggIcon],svg[ion-ios-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32C192 32 96 165.2 96 288.9 96 412.6 160 480 256 480s160-67.4 160-191.1C416 165.2 320 32 256 32z" fill="currentColor"></svg:path>`,
})
export class IonIosEggIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosEmailIcon],svg[ion-ios-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 384V141.8l-131.1 99.8L385 319l-2 2-78.9-69.6L256 288l-48.1-36.6L129 321l-2-2 68-77.4L64 142v242z" fill="currentColor"></svg:path><svg:path d="M439.7 128H72l184 139.9z" fill="currentColor"></svg:path>`,
})
export class IonIosEmailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosExitIcon],svg[ion-ios-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M144 136v107h179.9l-47.2-47.9c-5-5.1-5-13.3.1-18.4 5.1-5 13.3-5 18.4.1l69 70c2.4 2.5 3.7 5.8 3.7 9.1 0 1.7-.3 3.4-1 5-.6 1.5-1.6 2.9-2.7 4.1l-69 70c-5 5.1-13.3 5.2-18.4.1-5.1-5-5.2-13.3-.1-18.4l47.2-47.9H144v107c0 22 18 40 40 40h240c22 0 40-18 40-40V136c0-22-18-40-40-40H184c-22 0-40 18-40 40z" fill="currentColor"></svg:path><svg:path d="M61 243c-7.2 0-13 5.8-13 13s5.8 13 13 13h83v-26H61z" fill="currentColor"></svg:path>`,
})
export class IonIosExitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosExpandIcon],svg[ion-ios-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M112.4 92h77.7c7.7 0 13.9-6.2 13.9-13.9v-.2c0-7.7-6.2-13.9-13.9-13.9H77.9C70.2 64 64 70.2 64 77.9v112.2c0 7.7 6.2 13.9 13.9 13.9h.2c7.7 0 13.9-6.2 13.9-13.9v-77.7l117.1 116.3c2.6 2.6 6.1 4 9.8 4 3.7 0 7.2-1.4 9.8-4.1 5.4-5.4 5.4-14.2 0-19.6L112.4 92z" fill="currentColor"></svg:path><svg:path d="M434.1 64H321.9c-7.7 0-13.9 6.2-13.9 13.9v.2c0 7.7 6.2 13.9 13.9 13.9h77.7L283.3 209.1c-5.4 5.4-5.4 14.2 0 19.6 2.6 2.6 6.1 4.1 9.8 4.1 3.7 0 7.2-1.4 9.8-4L420 112.4v77.7c0 7.7 6.2 13.9 13.9 13.9h.2c7.7 0 13.9-6.2 13.9-13.9V77.9c0-7.7-6.2-13.9-13.9-13.9z" fill="currentColor"></svg:path><svg:path d="M218.9 279.2c-3.7 0-7.2 1.4-9.8 4L92 399.6v-77.7c0-7.7-6.2-13.9-13.9-13.9h-.2c-7.7 0-13.9 6.2-13.9 13.9v112.2c0 7.7 6.2 13.9 13.9 13.9h112.2c7.7 0 13.9-6.2 13.9-13.9v-.2c0-7.7-6.2-13.9-13.9-13.9h-77.7l116.3-117.1c5.4-5.4 5.4-14.2 0-19.6-2.6-2.6-6.1-4.1-9.8-4.1z" fill="currentColor"></svg:path><svg:path d="M434.1 308h-.2c-7.7 0-13.9 6.2-13.9 13.9v77.7L302.9 283.3c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.4-9.8 4.1-5.4 5.4-5.4 14.2 0 19.6l116.3 117h-77.7c-7.7 0-13.9 6.2-13.9 13.9v.2c0 7.7 6.2 13.9 13.9 13.9h112.2c7.7 0 13.9-6.2 13.9-13.9V321.9c0-7.7-6.2-13.9-13.9-13.9z" fill="currentColor"></svg:path>`,
})
export class IonIosExpandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosEyeIcon],svg[ion-ios-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M255.8 112c-80.4 0-143.8 50.6-219.6 133.3-5.5 6.1-5.6 15.2-.1 21.3C101 338.3 158.2 400 255.8 400c96.4 0 168.7-77.7 220.1-134 5.3-5.8 5.6-14.6.5-20.7C424 181.8 351.5 112 255.8 112zm4.4 233.9c-53 2.4-96.6-41.2-94.1-94.1 2.1-46.2 39.5-83.6 85.7-85.7 53-2.4 96.6 41.2 94.1 94.1-2.1 46.2-39.5 83.6-85.7 85.7z" fill="currentColor"></svg:path><svg:path d="M256 209c0-6 1.1-11.7 3.1-16.9-1 0-2-.1-3.1-.1-36.9 0-66.6 31.4-63.8 68.9 2.4 31.3 27.6 56.5 58.9 58.9 37.5 2.8 68.9-26.9 68.9-63.8 0-1.3-.1-2.6-.1-3.9-5.6 2.5-11.7 3.9-18.2 3.9-25.2 0-45.7-21.1-45.7-47z" fill="currentColor"></svg:path>`,
})
export class IonIosEyeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosEyeOffIcon],svg[ion-ios-eye-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M88.3 68.1c-5.6-5.5-14.6-5.5-20.1.1-5.5 5.5-5.5 14.5 0 20l355.5 355.7c3.7 3.7 9 4.9 13.7 3.6 2.4-.6 4.6-1.9 6.4-3.7 5.5-5.5 5.5-14.5 0-20L88.3 68.1z" fill="currentColor"></svg:path><svg:path d="M260.2 345.9c-53 2.4-96.6-41.2-94.1-94.1.6-12.2 3.6-23.8 8.6-34.3L121.3 164c-27.7 21.4-55.4 48.9-85.1 81.3-5.5 6.1-5.6 15.2-.1 21.3C101 338.3 158.2 400 255.8 400c29.7 0 57.1-7.4 82.3-19.2l-43.5-43.5c-10.6 5-22.2 8-34.4 8.6z" fill="currentColor"></svg:path><svg:path d="M475.8 266c5.3-5.8 5.6-14.6.5-20.7C424 181.8 351.5 112 255.8 112c-29.1 0-56 6.6-82 19l43.7 43.7c10.5-5 22.1-8.1 34.3-8.6 53-2.4 96.6 41.2 94.1 94.1-.6 12.2-3.6 23.8-8.6 34.3l53.5 53.5c33-25.3 61.3-55.9 85-82z" fill="currentColor"></svg:path><svg:path d="M192.2 260.9c2.4 31.3 27.6 56.5 58.9 58.9 8.2.6 16.1-.3 23.4-2.6l-79.8-79.8c-2.2 7.4-3.1 15.3-2.5 23.5z" fill="currentColor"></svg:path><svg:path d="M320 256c0-1.3-.1-2.6-.1-3.9-5.6 2.5-11.7 3.9-18.2 3.9-1.1 0-2.1 0-3.1-.1l18.6 18.7c1.8-5.9 2.8-12.2 2.8-18.6z" fill="currentColor"></svg:path><svg:path d="M256 209c0-6 1.1-11.7 3.1-16.9-1 0-2-.1-3.1-.1-6.4 0-12.6 1-18.5 2.8l18.7 18.7c-.1-1.5-.2-3-.2-4.5z" fill="currentColor"></svg:path>`,
})
export class IonIosEyeOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFastforwardIcon],svg[ion-ios-fastforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M476.1 249.3L268 129.1c-5.4-3.1-12.3.6-12.3 6.7V251L44.3 129.1c-5.4-3.1-12.3.6-12.3 6.7v240.3c0 6.1 6.9 9.8 12.3 6.7L255.6 261v115.2c0 6.1 6.9 9.8 12.3 6.7L476 262.7c5.3-3 5.3-10.4.1-13.4z" fill="currentColor"></svg:path>`,
})
export class IonIosFastforwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFemaleIcon],svg[ion-ios-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M61.6 464c3.6 0 7.1-1.4 9.6-4l44.8-44.8 37 37c2.6 2.6 6 4 9.6 4 3.6 0 7.1-1.4 9.6-4 5.3-5.3 5.3-13.9 0-19.2l-37-37 50-50c30.6 26 69.3 40.3 109.6 40.3 22.8 0 45-4.5 65.8-13.3 20.1-8.5 38.2-20.7 53.8-36.2 15.5-15.5 27.7-33.6 36.2-53.8 8.8-20.9 13.3-43 13.3-65.8s-4.5-45-13.3-65.8c-8.5-20.1-20.7-38.2-36.2-53.8-15.5-15.5-33.6-27.7-53.8-36.2-20.9-8.8-43-13.3-65.8-13.3-22.8 0-45 4.5-65.8 13.3-20.1 8.5-38.2 20.7-53.8 36.2-15.5 15.5-27.7 33.6-36.2 53.8-8.8 20.9-13.3 43-13.3 65.8 0 40.3 14.3 79 40.3 109.6l-50 50-37-37c-2.6-2.6-6-4-9.6-4-3.6 0-7.1 1.4-9.6 4-5.3 5.3-5.3 13.9 0 19.2l37 37L52 440.8c-5.3 5.3-5.3 13.9 0 19.2 2.6 2.6 6 4 9.6 4zm132.9-347.2C221.3 90 257 75.2 294.9 75.2c37.9 0 73.5 14.8 100.3 41.6 26.8 26.8 41.6 62.4 41.6 100.3s-14.8 73.5-41.6 100.3c-26.8 26.8-62.4 41.6-100.3 41.6s-73.5-14.8-100.3-41.6C167.7 290.7 153 255 153 217.1s14.7-73.5 41.5-100.3z" fill="currentColor"></svg:path>`,
})
export class IonIosFemaleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFilingIcon],svg[ion-ios-filing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M424 64H88c-22 0-40 18-40 40v304c0 22 18 40 40 40h336c22 0 40-18 40-40V104c0-22-18-40-40-40zm12 176c0 8.8-7.2 16-16 16h-86.8c-6.8 0-12.8 4.2-15.1 10.6C314 278.2 303.8 288 292 288h-72c-11.9 0-22.1-9.8-26.1-21.4-2.2-6.4-8.3-10.6-15.1-10.6H92c-8.8 0-16-7.2-16-16V108c0-8.8 7.2-16 16-16h328c8.8 0 16 7.2 16 16v132z" fill="currentColor"></svg:path><svg:path d="M386 156H126c-7.7 0-14-6.3-14-14s6.3-14 14-14h260c7.7 0 14 6.3 14 14s-6.3 14-14 14z" fill="currentColor"></svg:path><svg:path d="M386 220H126c-7.7 0-14-6.3-14-14s6.3-14 14-14h260c7.7 0 14 6.3 14 14s-6.3 14-14 14z" fill="currentColor"></svg:path>`,
})
export class IonIosFilingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFilmIcon],svg[ion-ios-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M447.9 80H64.1C46.5 80 32 94.5 32 112.1v287.7c0 17.7 14.5 32.1 32.1 32.1h383.7c17.7 0 32.1-14.5 32.1-32.1V112.1c.1-17.6-14.4-32.1-32-32.1zM120 400c0 4.4-3.6 8-8 8H64c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48zm0-80c0 4.4-3.6 8-8 8H64c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48zm0-80c0 4.4-3.6 8-8 8H64c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48zm0-80c0 4.4-3.6 8-8 8H64c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48zm232 108H160c-6.6 0-12-5.4-12-12s5.4-12 12-12h192c6.6 0 12 5.4 12 12s-5.4 12-12 12zm104 132c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48zm0-80c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48zm0-80c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48zm0-80c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48z" fill="currentColor"></svg:path>`,
})
export class IonIosFilmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFingerPrintIcon],svg[ion-ios-finger-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M450.8 182c-8.6-24.4-20.3-44.9-33-57.5-2.6-2.6-6-4-9.7-4-3.7 0-7.1 1.4-9.7 4-5.3 5.3-5.3 14 0 19.4 9.9 9.9 19.6 27.4 26.8 48.1 7.3 21.2 11.4 43.6 11.4 63.1 0 3-.1 7.6-.2 10.1-.2 3.7 1.1 7.1 3.6 9.8 2.5 2.7 5.8 4.3 9.5 4.4h.6c7.3 0 13.3-5.7 13.7-13.1.1-3.1.2-8.1.2-11.3 0-22.8-4.7-48.8-13.2-73z" fill="currentColor"></svg:path><svg:path d="M143 110.6c2.9 0 5.6-.9 8-2.6 29.9-21.4 66.2-32.7 105-32.7 40.8 0 80.1 14.8 113.7 42.8 2.5 2 5.6 3.2 8.8 3.2 4.1 0 7.9-1.8 10.5-4.9 4.8-5.8 4-14.4-1.7-19.3C348.6 65 303.3 48 256 48c-44.6 0-86.4 13.1-121 37.8-3 2.1-4.9 5.3-5.5 8.9-.6 3.6.2 7.2 2.4 10.2 2.5 3.6 6.7 5.7 11.1 5.7z" fill="currentColor"></svg:path><svg:path d="M75.4 255c0-43.7 15.8-85.8 44.5-118.7 2.4-2.8 3.6-6.3 3.3-9.9-.2-3.6-1.9-7-4.7-9.4-2.5-2.2-5.7-3.4-9-3.4-4 0-7.7 1.7-10.3 4.7C66.2 156.2 48 204.7 48 255c0 32.8 5.9 58.8 15.4 90.2 1.8 5.8 7 9.7 13.1 9.7 1.3 0 2.7-.2 4-.6 3.5-1.1 6.4-3.4 8.1-6.6 1.7-3.2 2.1-6.9 1-10.4-8.8-29-14.2-52.8-14.2-82.3z" fill="currentColor"></svg:path><svg:path d="M355.7 129.8C328.4 106.1 295 93.6 259 93.6c-48.3 0-91.4 17.8-121.5 50.1-28.7 30.8-42.8 71.7-39.7 115.1 2.3 32.7 6 50.7 9.3 66.6 4.3 21.1 7.7 37.8 5.1 84.1-.4 6.7 3.7 12.7 10 14.6 1.2.4 2.3.5 3.6.5 7.2 0 13.2-5.7 13.7-12.9 2.9-50.4-.8-68.7-5.5-91.9-3.1-15.1-6.6-32.2-8.8-63.1-2.6-35.7 9-69.3 32.4-94.5 24.8-26.7 60.9-41.4 101.4-41.4 29.3 0 56.5 10.2 78.7 29.5 22.3 19.3 39.2 47.4 49 81.1 11.4 39.3 14.5 89.3 9.1 144.5-.7 7.5 4.8 14.2 12.3 15 .4 0 .9.1 1.3.1 7.1 0 12.9-5.3 13.6-12.4 5.8-58.7 2.3-112.2-10.1-154.8-11.1-38.6-30.9-71.2-57.2-94z" fill="currentColor"></svg:path><svg:path d="M373.5 267.5c-5.9-37.5-19.9-68.8-40.6-90.6-20.8-22-47.4-33.7-76.9-33.7-19 0-37.7 4.1-54.1 12-3.7 1.8-6.4 5.1-7.4 9.1-1 4.1-.1 8.3 2.5 11.6 2.6 3.4 6.5 5.3 10.8 5.3 2.1 0 4-.5 5.9-1.3 12.6-6 27.2-9.2 42.2-9.2 22.4 0 42.5 9.2 58.3 26.6 16.1 17.8 27.3 43.6 32.1 74.6 4.7 29.6 7 53.5 7.1 73.1.2 39.7-4.8 72.7-4.8 73.1-.6 3.6.3 7.2 2.5 10.2 2.2 3 5.3 4.9 8.9 5.5.7.1 1.4.2 2.1.2 6.8 0 12.5-4.9 13.5-11.6.2-1.4 5.4-35.2 5.2-77.5 0-21.3-2.4-46.5-7.3-77.4z" fill="currentColor"></svg:path><svg:path d="M185.3 203.5c4-5.8 2.9-13.6-2.5-18.2-2.5-2.1-5.6-3.2-8.8-3.2-4.5 0-8.7 2.2-11.3 5.9-14.7 21.5-19.7 49.1-14.4 79.8 8.9 51.3 16.9 111.1 9.4 165-.5 3.8.5 7.7 2.9 10.7 2.3 3 5.7 4.8 9.4 5.1.4 0 .8.1 1.2.1 6.8 0 12.6-5.1 13.5-11.8 8.2-57.7-.2-120.2-9.5-173.8-4.1-23.8-.7-43.9 10.1-59.6z" fill="currentColor"></svg:path><svg:path d="M317.5 388h-.5c-7.6.3-13.5 6.6-13.2 14.2 0 .2.6 17.9-2.6 34.7-1.3 6.9 2.6 13.7 9.1 15.8 1.4.4 2.8.7 4.3.7 6.6 0 12.2-4.7 13.4-11.1 3.8-20.1 3.1-40.2 3.1-41.1-.2-7.5-6.2-13.2-13.6-13.2z" fill="currentColor"></svg:path><svg:path d="M294.6 205.9c-11.2-10.5-25.2-16.1-40.5-16.1-19.8 0-36.7 7.3-47.6 20.5-8.3 10.1-17 28.8-10.9 60 12.3 62.5 15 121.6 8.1 175.6-1 7.5 4.4 14.4 11.8 15.3.6.1 1.2.1 1.7.1 6.9 0 12.7-5.1 13.6-12 7.3-57 4.5-119-8.3-184.4-3.2-16.4-1.4-29.3 5.1-37.3 5.6-6.8 15-10.5 26.4-10.5 25 0 35.1 27.6 38.3 39.4 6.9 25.7 10.9 63 11.5 107.7.1 7.4 6.2 13.5 13.7 13.5h.2c3.6-.1 7-1.5 9.6-4.1 2.5-2.6 3.9-6.1 3.9-9.7-.7-47-5-86.5-12.5-114.4-4.9-18.5-13.1-33.2-24.1-43.6z" fill="currentColor"></svg:path><svg:path d="M265.2 245.9c-2.1-5.1-7.1-8.5-12.7-8.5-1.8 0-3.6.4-5.2 1-7 2.9-10.3 10.9-7.4 17.9 6.6 16 11.8 46.2 14.1 82.8 2.4 36.9 1.7 76.9-2 109.6-.4 3.6.6 7.2 2.9 10.1 2.3 2.9 5.5 4.6 9.2 5 .5.1 1 .1 1.5.1 7 0 12.8-5.2 13.6-12.2 3.9-35.5 4.6-76.6 2-115.8-2.5-39.3-8.2-71.3-16-90z" fill="currentColor"></svg:path>`,
})
export class IonIosFingerPrintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFitnessIcon],svg[ion-ios-fitness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 280H160c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h192c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8z" fill="currentColor"></svg:path><svg:path d="M378 362V150c0-12.1 9.9-22 22-22s22 9.9 22 22v212c0 12.1-9.9 22-22 22s-22-9.9-22-22z" fill="currentColor"></svg:path><svg:path d="M460 192h-12c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h12c11 0 20-9 20-20v-88c0-11-9-20-20-20z" fill="currentColor"></svg:path><svg:path d="M134 362V150c0-12.1-9.9-22-22-22s-22 9.9-22 22v212c0 12.1 9.9 22 22 22s22-9.9 22-22z" fill="currentColor"></svg:path><svg:path d="M64 192H52c-11 0-20 9-20 20v88c0 11 9 20 20 20h12c4.4 0 8-3.6 8-8V200c0-4.4-3.6-8-8-8z" fill="currentColor"></svg:path>`,
})
export class IonIosFitnessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFlagIcon],svg[ion-ios-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M406.7 80.8c-3.1.5-6.4 1-9.9 1.4-13.2 1.7-42.8 5.2-60.6 5.2-27.7 0-52.8-6.8-78.2-12.2-25.8-5.5-52.4-11.2-80.6-11.2-56.2 0-75.3 12.1-77.3 13.4L96 80.3v353.3c0 7.2 5.2 13.4 12.3 14.3 8.5 1 15.7-5.6 15.7-13.9V279.6c0-3.8 2.7-7.1 6.4-7.9 10.5-2.1 25.8-3.9 47-3.9 26.2 0 50.7 10 76.6 15.5 26.4 5.6 48.6 11.5 83.4 11.5s71.8-6.6 71.8-6.6c3.9-.6 6.9-3.9 6.9-7.9V88.7c-.1-4.9-4.5-8.7-9.4-7.9z" fill="currentColor"></svg:path>`,
})
export class IonIosFlagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFlameIcon],svg[ion-ios-flame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M220.1 48C249.1 182.6 111 179.9 112 315.4c.8 111 118.4 148.6 144.5 148.6 26.1 0 134.8-23.6 143.1-148.6 7.1-106.4-81.7-208-179.5-267.4zm74.3 354.7c-10.2 38.9-66 39-76.4.1-1.5-5.6-2.4-11.5-2.4-17.5 0-41 40.6-88.3 40.6-88.3s40.4 47.3 40.4 88.3c.1 6-.7 11.8-2.2 17.4z" fill="currentColor"></svg:path>`,
})
export class IonIosFlameIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFlashIcon],svg[ion-ios-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M376.2 224H268l52.4-186.9c.9-4.5-4.6-7.1-7.2-3.4L129.5 274.6c-3.8 5.6-.2 13.4 6.3 13.4H244l-52.4 186.9c-.9 4.5 4.6 7.1 7.2 3.4l183.7-240.8c3.7-5.7.2-13.5-6.3-13.5z" fill="currentColor"></svg:path>`,
})
export class IonIosFlashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFlashOffIcon],svg[ion-ios-flash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M382.1 442.7L154.5 55c-4-6.7-12.7-9-19.5-5.1-6.8 3.9-9.1 12.6-5.1 19.3L357.5 457c2.6 4.5 7.4 7 12.3 7 2.4 0 4.9-.6 7.2-1.9 6.7-4 9-12.6 5.1-19.4z" fill="currentColor"></svg:path><svg:path d="M324.6 313.3l57.9-75.8c3.8-5.6.2-13.4-6.3-13.4h-104l52.4 89.2z" fill="currentColor"></svg:path><svg:path d="M320.4 37.1c.9-4.5-4.6-7.1-7.2-3.4L227 146.9l42.4 72.3 51-182.1z" fill="currentColor"></svg:path><svg:path d="M187.4 198.7l-57.9 75.8c-3.8 5.6-.2 13.4 6.3 13.4h103.9l-52.3-89.2z" fill="currentColor"></svg:path><svg:path d="M191.6 474.9c-.9 4.5 4.6 7.1 7.2 3.4L285 365.1l-42.4-72.3-51 182.1z" fill="currentColor"></svg:path>`,
})
export class IonIosFlashOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFlashlightIcon],svg[ion-ios-flashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M317 32H195c-17.6 0-24 14.4-24 32h170c0-17.6-6.4-32-24-32z" fill="currentColor"></svg:path><svg:path d="M196.1 147.5c7.6 8.8 11.9 20 11.9 31.7v265.9c0 21.9 17.9 34.9 39.9 34.9h16.3c21.9 0 39.9-12.9 39.9-34.9V179.2c0-11.7 4.3-22.8 11.9-31.7 15.4-17.9 25-34.5 25-67.5H171c0 35 9.6 49.6 25.1 67.5zm31.9 90.8c0-15.6 12.6-28.3 28-28.3s28 12.7 28 28.3v35.4c0 15.6-12.6 28.3-28 28.3s-28-12.7-28-28.3v-35.4z" fill="currentColor"></svg:path><svg:circle cx="256" cy="273" r="20" fill="currentColor"></svg:circle>`,
})
export class IonIosFlashlightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFlaskIcon],svg[ion-ios-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M437.4 354.4L320.7 159.9c-.4-.6-.6-1.3-.6-2.1V80c0-2.2 1.8-4 4-4 6.6 0 12-5.4 12-12v-4c0-6.6-5.4-12-12-12H187.8c-6.6 0-12 5.4-12 12v4c0 6.6 5.4 12 12 12 2.2 0 4 1.8 4 4v77.9c0 .7-.2 1.4-.6 2L75.7 354.4c-8.4 15.8-12.5 31.4-12.1 45.6 1.1 36.5 28.8 64 65.2 64h256.6c36.4 0 62.3-27.6 63.2-64 .2-14.2-2.7-29.7-11.2-45.6zM161.8 288c-6.2 0-10.1-6.8-6.9-12.1l60.5-101.7c2.9-4.9 4.5-10.6 4.5-16.3V80c0-1.4-.1-2.7-.2-4h72.7c-.2 1.3-.2 2.6-.2 4v77.9c0 5.8 1.6 11.5 4.6 16.4l60.4 101.6c3.2 5.3-.7 12.1-6.9 12.1H161.8z" fill="currentColor"></svg:path>`,
})
export class IonIosFlaskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFlowerIcon],svg[ion-ios-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M385.1 230.2c-26.7 0-60.1 6.9-86.3 13.5-.9-3.2-2.1-6.2-3.7-9.1 23.2-13.8 51.7-32.5 70.5-51.4 36.7-36.7 48.3-63.6 37.6-74.3-2.6-2.6-6-3.8-10.3-3.8-13.8 0-36 13.4-64 41.4-18.8 18.8-37.6 47.2-51.4 70.4-2.8-1.6-5.9-2.8-9.1-3.8 6.7-26.2 13.5-59.5 13.5-86.1 0-51.9-10.8-79.1-26-79.1s-26 27.2-26 79.1c0 26.6 6.8 60 13.5 86.1-3.2.9-6.2 2.2-9.1 3.8-13.8-23.2-32.5-51.6-51.4-70.4-28-28-50.3-41.4-64-41.4-4.3 0-7.7 1.3-10.3 3.8-10.8 10.8.8 37.6 37.6 74.3 18.9 18.9 47.3 37.6 70.5 51.4-1.5 2.8-2.8 5.9-3.7 9.1-26.2-6.7-59.6-13.5-86.3-13.5-51.8 0-78.7 10.6-78.7 25.8s26.9 26.2 78.9 26.2c26.7 0 60.2-6.9 86.4-13.6.9 3.1 2.2 6.2 3.8 9-23.3 13.8-51.8 32.6-70.7 51.5-36.7 36.7-48.3 63.6-37.6 74.3 2.6 2.6 6 3.8 10.3 3.8 13.8 0 36-13.4 64-41.4 18.9-18.9 37.8-47.5 51.6-70.8 2.8 1.5 5.8 2.8 9 3.7-6.7 26.2-13.6 59.8-13.6 86.5 0 51.9 10.8 78.6 26 78.6s26-26.7 26-78.6c0-26.8-6.9-60.3-13.6-86.5 3.1-.9 6.1-2.1 9-3.7 13.8 23.3 32.6 51.9 51.6 70.8 28 28 50.3 41.4 64 41.4 4.3 0 7.7-1.3 10.3-3.8 10.8-10.8-.8-37.6-37.6-74.3-18.9-18.9-47.5-37.7-70.7-51.5 1.6-2.8 2.8-5.8 3.8-9 26.2 6.7 59.7 13.6 86.4 13.6 51.9 0 78.9-10.8 78.9-26-.2-15.2-27.1-26-79.1-26z" fill="currentColor"></svg:path><svg:path d="M318.4 376.4c-8.5-8.5-16.9-18.7-24.8-29.5 2 13.2 3.3 26.4 3.3 38.4 0 11.7-.5 22.5-1.6 32.1 12.3 21.8 24.3 32.7 34 32.7 1.6 0 3.2-.3 4.7-.9 11-4.5 13.3-23.3 4.5-54.3-6.4-5.3-13.1-11.5-20.1-18.5z" fill="currentColor"></svg:path><svg:path d="M193.8 136.1c8.4 8.4 16.7 18.5 24.6 29.2-2-13.2-3.2-26.3-3.2-38.2 0-11.7.5-22.5 1.6-32.1-12.3-21.8-24.3-32.7-34-32.7-1.6 0-3.2.3-4.7.9-11 4.5-13.3 23.3-4.5 54.3 6.4 5.4 13.2 11.6 20.2 18.6z" fill="currentColor"></svg:path><svg:path d="M135.8 318.6c8.5-8.5 18.7-16.9 29.5-24.8-13.2 2-26.4 3.3-38.4 3.3-11.7 0-22.5-.5-32.1-1.6-25.5 14.4-36.1 28.2-31.8 38.7 2.6 6.4 10.1 9.9 22.1 9.9 8.5 0 19.3-1.7 32.2-5.4 5.4-6.4 11.5-13.1 18.5-20.1z" fill="currentColor"></svg:path><svg:path d="M376.2 193.8c-8.5 8.5-18.7 16.9-29.5 24.8 13.2-2 26.4-3.3 38.4-3.3 11.7 0 22.5.5 32.1 1.6 25.5-14.4 36.1-28.2 31.8-38.7-2.6-6.4-10.1-9.9-22.1-9.9-8.5 0-19.3 1.7-32.2 5.4-5.4 6.5-11.5 13.2-18.5 20.1z" fill="currentColor"></svg:path><svg:path d="M193.6 376.4c-8.3 8.3-16.3 15.6-23.8 21.6-7.8 28.2-5.5 45.4 4.9 49.9 1.6.7 3.2 1 4.9 1 10.3 0 23.2-12 36.7-36.2-.7-8.4-1.1-17.5-1.1-27.3 0-12 1.3-25.2 3.3-38.4-8 10.7-16.4 20.9-24.9 29.4z" fill="currentColor"></svg:path><svg:path d="M318.4 136.2c8.3-8.3 16.2-15.5 23.7-21.5 7.9-28.4 5.7-45.8-4.8-50.2-1.6-.7-3.2-1-4.9-1-10.3 0-23.2 12-36.7 36.2.7 8.4 1.1 17.5 1.1 27.3 0 12.1-1.3 25.3-3.3 38.7 8-10.7 16.4-21 24.9-29.5z" fill="currentColor"></svg:path><svg:path d="M99.6 216.5c8.4-.7 17.5-1.1 27.3-1.1 12 0 25.1 1.3 38.3 3.3-10.7-7.9-20.9-16.3-29.4-24.8-8.3-8.3-15.6-16.3-21.7-23.9-11.3-3.1-20.9-4.6-28.6-4.6-11.4 0-18.6 3.3-21.2 9.5-4.6 10.9 7.1 25.9 35.3 41.6z" fill="currentColor"></svg:path><svg:path d="M412.4 296c-8.4.7-17.5 1.1-27.3 1.1-12 0-25.2-1.3-38.4-3.3 10.8 7.9 21 16.4 29.5 24.8 8.3 8.3 15.5 16.3 21.6 23.8 11.4 3.2 20.9 4.7 28.6 4.7 11.4 0 18.6-3.3 21.2-9.5 4.7-11-7-25.9-35.2-41.6z" fill="currentColor"></svg:path>`,
})
export class IonIosFlowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFolderIcon],svg[ion-ios-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 119c0-13.3-9.4-23-22.8-23H198.9c-2.8 0-4.3-.6-6.1-2.4l-22.5-22.5-.2-.2c-4.9-4.6-8.9-6.9-17.3-6.9H56.7C42.9 64 32 74.3 32 87v73.7c0 1.6 1.7 1.5 3 .7s5-1.4 7-1.4h428c2 0 5.7.6 7 1.4 1.3.8 3 .9 3-.7V119z" fill="currentColor"></svg:path><svg:path d="M32 416.4c0 17.5 14.2 31.6 31.6 31.6H448c17.6 0 32-14.4 32-32V204c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v212.4z" fill="currentColor"></svg:path>`,
})
export class IonIosFolderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFolderOpenIcon],svg[ion-ios-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 119c0-13.3-9.4-23-22.8-23H230.9c-2.8 0-4.3-.6-6.1-2.4l-22.5-22.5-.2-.2c-4.9-4.6-8.9-6.9-17.3-6.9H88.7C74.9 64 64 74.3 64 87v73h384v-41z" fill="currentColor"></svg:path><svg:path d="M64 188h-8.3c-12.8 0-25.3 5.1-23.5 24.3C34 231.5 55.7 423 55.7 423c2.7 17.8 11.7 25 25 25h352.5c12.7 0 21-7.8 23-25 0 0 22.2-184.9 23.6-205.5 1.4-20.5-8.9-29.5-23.6-29.5H64z" fill="currentColor"></svg:path>`,
})
export class IonIosFolderOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFootballIcon],svg[ion-ios-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256c0 114.7 93.3 208 208 208 114.9 0 208-93.1 208-208 0-114.7-93.3-208-208-208zm127.3 80.7c8.5 8.5 16.1 17.7 22.6 27.5.7 1 .9 2.4.4 3.5L391.9 201c-.4 1-1.1 1.9-2.1 2.3l-57.5 26.2c-1.4.6-3 .4-4.2-.6l-56.6-47.6a4.1 4.1 0 01-1.4-3.1v-63.1c0-1.3.7-2.6 1.8-3.3l38.4-26.1c1-.7 2.3-.9 3.5-.5 25.8 8.9 49.6 23.6 69.5 43.5zm-73.9 297.6c-.4 1.2-1.4 2.1-2.6 2.4-16.3 4.8-33.4 7.2-50.8 7.2-17.5 0-34.5-2.5-50.8-7.2-1.2-.4-2.2-1.3-2.6-2.4l-16.4-43c-.4-1.1-.3-2.3.2-3.3l22.3-42.3c.7-1.3 2.1-2.1 3.5-2.1h87.5c1.5 0 2.8.8 3.5 2.1l22.3 42.3c.5 1 .6 2.2.2 3.3l-16.3 43zm-67.4-311v63.1c0 1.2-.5 2.3-1.4 3.1L183.9 229c-1.2 1-2.8 1.2-4.2.6l-57.5-26.2c-1-.5-1.8-1.3-2.1-2.3l-14.4-41.2c-.4-1.2-.3-2.5.4-3.5 6.5-9.8 14.1-19 22.6-27.5 19.9-19.9 43.7-34.6 69.6-43.3 1.2-.4 2.5-.2 3.5.5l38.4 26.1c1.1.5 1.8 1.7 1.8 3.1zM77.7 264.1l36.1-31.2c1.2-1 2.9-1.3 4.3-.6l52.4 23.8c1.1.5 1.9 1.5 2.2 2.7l14.6 57.3c.2 1 .1 2-.3 2.9l-23.2 43.9c-.7 1.3-2.1 2.2-3.6 2.1l-46-.6c-1.2 0-2.4-.6-3.2-1.6-20.5-27.7-32.5-60.6-34.7-95.4 0-1.3.5-2.5 1.4-3.3zm270.4 98.7L325 319c-.5-.9-.6-1.9-.3-2.9l14.6-57.3c.3-1.2 1.1-2.2 2.2-2.7l52.4-23.8c1.4-.6 3.1-.4 4.3.6l36.1 31.2c.9.8 1.5 2 1.4 3.3-2.1 34.8-14.2 67.6-34.7 95.4-.7 1-1.9 1.6-3.2 1.6l-46.1.6c-1.5-.1-2.9-.9-3.6-2.2z" fill="currentColor"></svg:path>`,
})
export class IonIosFootballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosFunnelIcon],svg[ion-ios-funnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M48 87.2c0 5.8 2 11.4 5.6 15.7l152.2 179.8c3.6 4.3 5.6 9.9 5.6 15.7v107c0 10 5.9 18.8 14.6 22l55 19.8c9.6 3.5 19.6-4.3 19.6-15.3V298.3c0-5.8 2-11.4 5.6-15.7l152.2-179.8c3.6-4.3 5.6-9.9 5.6-15.7 0-12.8-9.6-23.2-21.4-23.2H69.4C57.6 64 48 74.4 48 87.2z" fill="currentColor"></svg:path>`,
})
export class IonIosFunnelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGameControllerAIcon],svg[ion-ios-game-controller-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M369.269 146h-226.53C81.541 146 32 191.458 32 255.418 32 319.419 81.541 366 142.739 366h226.529C430.49 366 480 319.419 480 255.418 480 191.458 430.49 146 369.269 146zM200 266.697c0 2.698-2.421 5.303-5.238 5.303H160v35.139c0 2.83-3.104 4.861-5.803 4.861H132.77c-2.628 0-4.771-1.918-4.771-4.533V272H92.861c-2.83 0-4.861-3.104-4.861-5.803V244.77c0-2.628 1.918-4.771 4.533-4.771H128v-34.822c0-2.806 1.854-5.178 4.553-5.178h22.145c2.698 0 5.303 2.421 5.303 5.238V240h34.822c2.806 0 5.178 1.854 5.178 4.553v22.144zm119.766 8.789c-10.736 0-19.451-8.587-19.451-19.153 0-10.565 8.715-19.168 19.451-19.168 10.783 0 19.498 8.603 19.498 19.168 0 10.566-8.715 19.153-19.498 19.153zm42.548 41.815c-10.736 0-19.451-8.529-19.451-19.084 0-10.639 8.715-19.153 19.451-19.153 10.783 0 19.498 8.515 19.498 19.153 0 10.554-8.714 19.084-19.498 19.084zm0-83.686c-10.736 0-19.451-8.579-19.451-19.146s8.715-19.169 19.451-19.169c10.783 0 19.498 8.602 19.498 19.169s-8.714 19.146-19.498 19.146zm42.548 41.871c-10.729 0-19.442-8.587-19.442-19.153 0-10.565 8.714-19.168 19.442-19.168 10.737 0 19.452 8.603 19.452 19.168 0 10.566-8.714 19.153-19.452 19.153z" fill="currentColor"></svg:path>`,
})
export class IonIosGameControllerAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGameControllerBIcon],svg[ion-ios-game-controller-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M135.123 204.568c-10.688 0-19.343 8.717-19.343 19.441 0 10.727 8.655 19.447 19.343 19.447 10.641 0 19.297-8.721 19.297-19.447 0-10.724-8.656-19.441-19.297-19.441z" fill="currentColor"></svg:path><svg:path d="M466.279 248.866c-21.157-88.471-43.631-135.489-88.454-148.83C368.06 97.135 359.748 96 352.076 96c-27.598 0-46.938 14.683-96.08 14.683-49.174 0-68.502-14.681-96.062-14.683-7.665 0-15.963 1.135-25.721 4.036-44.869 13.341-67.342 60.359-88.461 148.83-21.181 88.473-17.334 152.363 7.679 164.289C57.502 415.1 61.662 416 65.885 416c21.694 0 45.139-23.838 67.659-52.047C159.198 331.848 165.658 331 243.822 331h24.343c78.147 0 84.628.846 110.282 32.953 22.526 28.207 45.97 52.004 67.665 52.004 4.226 0 8.384-.879 12.457-2.823 25.005-11.926 28.852-75.795 7.71-164.268zm-331.045 14.767c-21.64 0-39.234-17.758-39.234-39.623 0-21.84 17.594-39.643 39.234-39.643 21.655 0 39.249 17.803 39.249 39.643 0 21.865-17.593 39.623-39.249 39.623zm172.842-19.493c-11.058 0-20.076-9.019-20.076-20.107 0-11.09 9.019-20.104 20.076-20.104 11.131 0 20.148 9.014 20.148 20.104.001 11.088-9.017 20.107-20.148 20.107zM351.988 288c-11.058 0-20.053-8.951-20.053-20.016 0-11.157 8.995-20.106 20.053-20.106 11.146 0 20.148 8.949 20.148 20.106.001 11.065-9.002 20.016-20.148 20.016zm0-87.81c-11.058 0-20.053-8.993-20.053-20.083 0-11.094 8.995-20.107 20.053-20.107 11.146 0 20.148 9.014 20.148 20.107.001 11.09-9.002 20.083-20.148 20.083zm43.959 43.95c-11.105 0-20.101-9.019-20.101-20.107 0-11.09 8.995-20.104 20.101-20.104 11.059 0 20.053 9.014 20.053 20.104 0 11.088-8.994 20.107-20.053 20.107z" fill="currentColor"></svg:path>`,
})
export class IonIosGameControllerBIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGearIcon],svg[ion-ios-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416.349 256.046c-.001-21.013 13.143-38.948 31.651-46.062a196.302 196.302 0 0 0-23.664-57.139 49.423 49.423 0 0 1-20.082 4.254c-12.621 0-25.238-4.811-34.871-14.442-14.863-14.863-18.248-36.846-10.18-54.97A196.274 196.274 0 0 0 302.074 64C294.971 82.529 277.027 95.69 256 95.69c-21.025 0-38.969-13.161-46.073-31.69a196.243 196.243 0 0 0-57.128 23.688c8.068 18.122 4.683 40.104-10.181 54.97-9.631 9.631-22.25 14.443-34.871 14.443a49.429 49.429 0 0 1-20.083-4.255A196.273 196.273 0 0 0 64 209.984c18.509 7.112 31.652 25.049 31.652 46.062 0 21.008-13.132 38.936-31.63 46.054a196.318 196.318 0 0 0 23.692 57.128 49.428 49.428 0 0 1 20.032-4.232c12.622 0 25.239 4.812 34.871 14.443 14.841 14.841 18.239 36.781 10.215 54.889a196.257 196.257 0 0 0 57.13 23.673c7.128-18.479 25.046-31.596 46.038-31.596 20.992 0 38.91 13.115 46.037 31.596a196.234 196.234 0 0 0 57.132-23.675c-8.023-18.106-4.626-40.046 10.216-54.887 9.629-9.632 22.248-14.444 34.868-14.444 6.836 0 13.67 1.411 20.033 4.233a196.318 196.318 0 0 0 23.692-57.128c-18.498-7.119-31.629-25.048-31.629-46.054zM256.9 335.9c-44.3 0-80-35.9-80-80 0-44.101 35.7-80 80-80 44.299 0 80 35.899 80 80 0 44.1-35.701 80-80 80z" fill="currentColor"></svg:path>`,
})
export class IonIosGearIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGiftIcon],svg[ion-ios-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M432 136h-84.3c12.4-11 20.3-26.6 20.3-44 0-33.1-28.3-60-63.1-60-20.6 0-37.9 9.7-48.9 27.4C245 41.7 227.7 32 207.1 32 172.3 32 144 58.9 144 92c0 17.4 7.8 33 20.3 44H80c-17.7 0-32 14.3-32 32v20c0 2.2 1.8 4 4 4h408c2.2 0 4-1.8 4-4v-20c0-17.7-14.3-32-32-32zM304.9 60c18.6 0 33.7 14.3 33.7 32s-15.1 32-33.7 32h-33.7c0-48 15.1-64 33.7-64zm-97.8 0c18.6 0 33.7 16 33.7 64h-33.7c-18.6 0-33.7-14.3-33.7-32s15.1-32 33.7-32z" fill="currentColor"></svg:path><svg:path d="M64 226v222c0 17.6 14.4 32 32 32h146V218H72c-4.4 0-8 3.6-8 8z" fill="currentColor"></svg:path><svg:path d="M440 218H270v262h146c17.6 0 32-14.4 32-32V226c0-4.4-3.6-8-8-8z" fill="currentColor"></svg:path>`,
})
export class IonIosGiftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGitBranchIcon],svg[ion-ios-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 96c-38.6 0-70 31.4-70 70 0 33.4 23.7 61.9 55.9 68.5-1.2 19.1-10.3 29.3-27 42.2-20.4 15.7-46.7 20-65.3 23.4-40.7 7.4-62.9 27-72.5 40V170.8c15-2.8 28.7-10.5 39-21.9 11.6-12.9 18-29.5 18-46.9 0-38.6-31.4-70-70-70s-70 31.4-70 70c0 17 6.2 33.3 17.3 46.1 9.9 11.3 23.1 19.1 37.7 22.3v171.3c-14.5 3.2-27.8 11-37.7 22.3C96.2 376.7 90 393 90 410c0 38.6 31.4 70 70 70s70-31.4 70-70c0-23.4-11.6-44.9-30.7-57.9 8.6-9.7 24.5-19.6 51.1-24.4 21.6-3.9 52.6-9.6 77.4-28.8 23.6-18.2 36.7-36.5 38-64.3 32.3-6.5 56.1-35.1 56.1-68.6.1-38.6-31.3-70-69.9-70zm-234 6c0-23.2 18.8-42 42-42s42 18.8 42 42-18.8 42-42 42-42-18.8-42-42zm84 308c0 23.2-18.8 42-42 42s-42-18.8-42-42 18.8-42 42-42 42 18.8 42 42zm150-202c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z" fill="currentColor"></svg:path>`,
})
export class IonIosGitBranchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGitCommitIcon],svg[ion-ios-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M466 242h-76.7c-3.3-31.9-17.8-61.3-41.3-83.5-25-23.5-57.7-36.5-92-36.5s-67 13-91.9 36.5c-23.5 22.2-38 51.6-41.3 83.5H46c-7.7 0-14 6.3-14 14s6.3 14 14 14h76.7c3.3 31.9 17.8 61.3 41.3 83.5 25 23.5 57.7 36.5 92 36.5s67-13 91.9-36.5c23.5-22.2 38-51.6 41.3-83.5H466c7.7 0 14-6.3 14-14s-6.3-14-14-14zm-135 89c-20 20-46.6 31-75 31-28.3 0-54.9-11-75-31-20-20-31-46.6-31-75s11-54.9 31-75c20-20 46.6-31 75-31 28.3 0 54.9 11 75 31 20 20 31 46.6 31 75s-11 54.9-31 75z" fill="currentColor"></svg:path>`,
})
export class IonIosGitCommitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGitCompareIcon],svg[ion-ios-git-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M233.9 328.1c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-2.6 2.6-4.1 6.1-4.1 9.9 0 3.7 1.4 7.3 4.1 9.9l.1.1 41.1 40.1H166c-20.4 0-33.6-7.5-41.6-23.5-8.4-17-9.4-41.5-9.4-58.5V170.8c15-2.8 28.7-10.5 39-21.9 11.6-12.9 18-29.5 18-46.9 0-38.6-31.4-70-70-70s-70 31.4-70 70c0 17 6.2 33.3 17.3 46.1 9.9 11.3 23.1 19.1 37.7 22.3V306c0 14.7 0 42.1 9.4 65.3 11.9 29.3 36 44.7 69.6 44.7h89.7L216 456.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l57.6-57.4c4.2-4.2 6.5-9.8 6.5-15.7 0-5.9-2.3-11.3-6.5-15.5l-59.5-59.2zM102 144c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z" fill="currentColor"></svg:path><svg:path d="M425 341.6V206c0-14.7 0-42.1-9.4-65.3-11.9-29.2-36-44.7-69.6-44.7h-89.7L296 55.8c5.4-5.4 5.4-14.3 0-19.8l-.1-.1c-2.7-2.5-6.2-3.9-9.8-3.9-3.8 0-7.3 1.4-9.9 4.1l-57.6 57.4c-4.2 4.2-6.5 9.8-6.5 15.7 0 5.9 2.3 11.3 6.5 15.5l59.6 59.4c2.6 2.6 6.1 4.1 9.9 4.1 3.7 0 7.3-1.4 9.9-4.1 2.6-2.6 4.1-6.1 4.1-9.9 0-3.7-1.4-7.3-4.1-9.9l-.1-.1-41.2-40.2H346c20.4 0 33.6 7.5 41.6 23.5 8.4 17 9.4 41.5 9.4 58.5v135.2c-15 2.8-28.7 10.5-39 21.9-11.6 12.9-18 29.5-18 46.9 0 38.6 31.4 70 70 70s70-31.4 70-70c0-17-6.2-33.3-17.3-46.1-9.9-11.3-23.2-19.1-37.7-22.3zM410 452c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z" fill="currentColor"></svg:path>`,
})
export class IonIosGitCompareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGitMergeIcon],svg[ion-ios-git-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M378 218c-33.5 0-62.1 23.8-68.6 56.1-10.3-.5-18.4-2.7-39.2-10.8-30.5-11.9-71.8-33.2-111.5-95.8 27.1-10.1 45.4-36 45.4-65.5 0-38.6-31.4-70-70-70s-70 31.4-70 70c0 17 6.2 33.3 17.3 46.1 9.9 11.3 23.1 19.1 37.7 22.3v171.3c-14.5 3.2-27.8 11-37.7 22.3C70.2 376.7 64 393 64 410c0 38.6 31.4 70 70 70s70-31.4 70-70c0-17.4-6.4-34-18-46.9-10.3-11.4-24-19.1-39-21.9V200.3c40.8 56.8 82 77 113 89.1 25.2 9.8 37.1 12.3 49.5 12.8 6.6 32.2 35.2 55.8 68.5 55.8 38.6 0 70-31.4 70-70s-31.4-70-70-70zM176 410c0 23.2-18.8 42-42 42s-42-18.8-42-42 18.8-42 42-42 42 18.8 42 42zm-42-266c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zm244 186c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z" fill="currentColor"></svg:path>`,
})
export class IonIosGitMergeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGitNetworkIcon],svg[ion-ios-git-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M377.4 32c-38.9 0-70.6 31.7-70.6 70.7 0 17.1 6.2 33.7 17.5 46.6 10 11.5 23.5 19.4 38.2 22.5v43.1L256 270.3l-106.4-55.4v-43.1c32.2-6.9 55.7-35.6 55.7-69.1 0-39-31.7-70.7-70.6-70.7S64 63.7 64 102.7c0 17.1 6.2 33.7 17.5 46.6 10 11.5 23.5 19.4 38.2 22.5v57.4c0 2.7 1.5 5.1 3.9 6.3l117.5 60.8v43.9c-32.2 6.9-55.7 35.6-55.7 69.1 0 39 31.7 70.7 70.6 70.7s70.6-31.7 70.6-70.7c0-17.1-6.2-33.7-17.5-46.6-10-11.5-23.5-19.4-38.2-22.5v-43.9l117.5-60.8c2.4-1.2 3.9-3.6 3.9-6.3v-57.4c32.2-6.9 55.7-35.6 55.7-69.1 0-39-31.7-70.7-70.6-70.7zM93.8 102.7c0-22.5 18.3-40.8 40.8-40.8s40.8 18.3 40.8 40.8c0 22.5-18.3 40.8-40.8 40.8s-40.8-18.3-40.8-40.8zm203 306.6c0 22.5-18.3 40.8-40.8 40.8s-40.8-18.3-40.8-40.8c0-22.5 18.3-40.8 40.8-40.8s40.8 18.3 40.8 40.8zm80.6-265.7c-22.5 0-40.8-18.3-40.8-40.8 0-22.5 18.3-40.8 40.8-40.8 22.5 0 40.8 18.3 40.8 40.8 0 22.4-18.3 40.8-40.8 40.8z" fill="currentColor"></svg:path>`,
})
export class IonIosGitNetworkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGitPullRequestIcon],svg[ion-ios-git-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M393 341.6V206c0-14.7 0-42.1-9.4-65.3-11.9-29.2-36-44.7-69.6-44.7h-77.7L276 55.8c5.4-5.4 5.4-14.3 0-19.8l-.1-.1c-2.7-2.5-6.2-3.9-9.8-3.9-3.8 0-7.3 1.4-9.9 4.1l-54.8 54.6C192.9 61.5 165.9 40 134 40c-38.6 0-70 31.4-70 70 0 17 6.2 33.3 17.3 46.1 9.9 11.3 23.1 19.1 37.7 22.3v163.3c-14.5 3.2-27.8 11-37.7 22.3C70.2 376.7 64 393 64 410c0 38.6 31.4 70 70 70s70-31.4 70-70c0-17.4-6.4-34-18-46.9-10.3-11.4-24-19.1-39-21.9V178.8c15-2.8 28.7-10.5 39-21.9 7.6-8.4 12.9-18.4 15.7-29.1l56.4 56.2c2.6 2.6 6.1 4.1 9.9 4.1 3.7 0 7.3-1.4 9.9-4.1 2.6-2.6 4.1-6.1 4.1-9.9 0-3.7-1.4-7.3-4.1-9.9l-.1-.1-41.1-40.1H314c20.4 0 33.6 7.5 41.6 23.5 8.4 17 9.4 41.5 9.4 58.5v135.2c-15 2.8-28.7 10.5-39 21.9-11.6 12.9-18 29.5-18 46.9 0 38.6 31.4 70 70 70s70-31.4 70-70c0-17-6.2-33.3-17.3-46.1-9.9-11.3-23.2-19.1-37.7-22.3zM176 410c0 23.2-18.8 42-42 42s-42-18.8-42-42 18.8-42 42-42 42 18.8 42 42zm-42-258c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zm244 300c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z" fill="currentColor"></svg:path>`,
})
export class IonIosGitPullRequestIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGlassesIcon],svg[ion-ios-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M464.5 240.9h-6.2c-3.3-21.1-13.3-40.5-28.5-55.2-17.3-16.6-39.8-25.8-63.4-25.8-20.5 0-40 6.7-56.2 19.4-13.8 10.8-24.2 25.1-30.5 41.7-7-4.6-15.4-7.3-23.7-7.3-8.3 0-16.7 2.6-23.7 7.3-6.2-16.6-16.6-30.9-30.5-41.7-16.2-12.7-35.7-19.4-56.2-19.4-23.6 0-46.1 9.1-63.4 25.6C67 200.4 57 219.9 53.7 241h-6.2c-8 0-14.5 6.7-14.5 15s6.5 15 14.5 15h6.2c3.3 21.2 13.3 40.6 28.5 55.3 17.3 16.6 39.8 25.8 63.4 25.8 51.3 0 93.1-43 93.1-95.9v-.2c0-5.9 6.9-14.9 17.3-14.9s17.3 9 17.3 14.9v.1c0 52.9 41.8 95.9 93.1 95.9 23.7 0 46.2-9.1 63.4-25.8 15.2-14.7 25.2-34.2 28.5-55.4h6.2c8 0 14.5-6.7 14.5-15 0-8.1-6.5-14.9-14.5-14.9z" fill="currentColor"></svg:path>`,
})
export class IonIosGlassesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGlobeIcon],svg[ion-ios-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48h-.7c-55.4.2-107.4 21.9-146.6 61.1C69.6 148.4 48 200.5 48 256s21.6 107.6 60.8 146.9c39.1 39.2 91.2 60.9 146.6 61.1h.7c114.7 0 208-93.3 208-208S370.7 48 256 48zm180.2 194h-77.6c-.9-26.7-4.2-52.2-9.8-76.2 17.1-5.5 33.7-12.5 49.7-21 22 28.2 35 61.6 37.7 97.2zM242 242h-61.8c.8-24.5 3.8-47.7 8.8-69.1 17.4 3.9 35.1 6.3 53 7.1v62zm0 28v61.9c-17.8.8-35.6 3.2-53 7.1-5-21.4-8-44.6-8.8-69H242zm28 0h61.3c-.8 24.4-3.8 47.6-8.8 68.9-17.2-3.9-34.8-6.2-52.5-7V270zm0-28v-62c17.8-.8 35.4-3.2 52.5-7 5 21.4 8 44.5 8.8 69H270zm109.4-117.9c-12.3 6.1-25 11.3-38 15.5-7.1-21.4-16.1-39.9-26.5-54.5 24 8.3 45.9 21.6 64.5 39zM315 146.8c-14.7 3.2-29.8 5.2-45 6V79.4c17 9.2 33.6 33.9 45 67.4zM242 79v73.7c-15.4-.8-30.6-2.8-45.5-6.1 11.6-33.8 28.4-58.5 45.5-67.6zm-45.6 6.4c-10.3 14.5-19.2 32.9-26.3 54.1-12.8-4.2-25.4-9.4-37.5-15.4 18.4-17.3 40.1-30.5 63.8-38.7zm-82.9 59.5c15.8 8.4 32.3 15.4 49.2 20.8-5.7 23.9-9 49.5-9.8 76.2h-77c2.6-35.4 15.6-68.8 37.6-97zM75.8 270h77c.9 26.7 4.2 52.3 9.8 76.2-16.9 5.5-33.4 12.5-49.2 20.8-21.9-28.1-34.9-61.5-37.6-97zm56.7 117.9c12.1-6 24.7-11.2 37.6-15.4 7.1 21.3 16 39.6 26.3 54.2-23.7-8.4-45.4-21.5-63.9-38.8zm64-22.6c14.9-3.3 30.2-5.3 45.5-6.1V433c-17.2-9.1-33.9-33.9-45.5-67.7zm73.5 67.3v-73.5c15.2.8 30.3 2.8 45 6-11.4 33.6-28 58.3-45 67.5zm45-5.7c10.4-14.6 19.4-33.1 26.5-54.5 13 4.2 25.8 9.5 38 15.6-18.6 17.3-40.6 30.6-64.5 38.9zm83.5-59.8c-16-8.5-32.6-15.5-49.7-21 5.6-23.9 8.9-49.4 9.8-76.1h77.6c-2.7 35.5-15.6 68.9-37.7 97.1z" fill="currentColor"></svg:path>`,
})
export class IonIosGlobeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGridIcon],svg[ion-ios-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M206 308h100c1.1 0 2-.9 2-2V206c0-1.1-.9-2-2-2H206c-1.1 0-2 .9-2 2v100c0 1.1.9 2 2 2z" fill="currentColor"></svg:path><svg:path d="M64 96v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zm330 108h-56c-1.1 0-2 .9-2 2v100c0 1.1.9 2 2 2h56c7.7 0 14 6.3 14 14s-6.3 14-14 14h-56c-1.1 0-2 .9-2 2v56c0 7.7-6.3 14-14 14s-14-6.3-14-14v-56c0-1.1-.9-2-2-2H206c-1.1 0-2 .9-2 2v56c0 7.7-6.3 14-14 14s-14-6.3-14-14v-56c0-1.1-.9-2-2-2h-56c-7.7 0-14-6.3-14-14s6.3-14 14-14h56c1.1 0 2-.9 2-2V206c0-1.1-.9-2-2-2h-56c-7.7 0-14-6.3-14-14s6.3-14 14-14h56c1.1 0 2-.9 2-2v-56c0-7.7 6.3-14 14-14s14 6.3 14 14v56c0 1.1.9 2 2 2h100c1.1 0 2-.9 2-2v-56c0-7.7 6.3-14 14-14s14 6.3 14 14v56c0 1.1.9 2 2 2h56c7.7 0 14 6.3 14 14s-6.3 14-14 14z" fill="currentColor"></svg:path>`,
})
export class IonIosGridIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosGridViewIcon],svg[ion-ios-grid-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M192 192h128v128H192z" fill="currentColor"></svg:path><svg:path d="M64 64v384h384V64H64zm352 128h-80v128h80v16h-80v80h-16v-80H192v80h-16v-80H96v-16h80V192H96v-16h80V96h16v80h128V96h16v80h80v16z" fill="currentColor"></svg:path>`,
})
export class IonIosGridViewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosHammerIcon],svg[ion-ios-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M277.6 246.9c-1.1-2-2.5-3.9-4.1-5.5l-18.4-18.2c-1.9-1.9-4.1-3.5-6.6-4.6-8.2-3.6-17.4-1.7-23.4 4.3-6.4 6.3-18.1 17.8-39.2 38.7-40.4 40-98.1 89.6-132 118.2-7.2 6.1-7.7 17-1.1 23.7L92 443.2c6.7 6.7 17.6 6.3 23.8-.9 29.4-34.6 79.5-92.3 119.4-131.8 20.5-20.2 32-31.8 38.5-38.2 6.5-6.6 8.3-16.7 3.9-25.4z" fill="currentColor"></svg:path><svg:path d="M462.4 218.1l-34.5-34.2c-1.1-1.1-2.5-1.6-4-1.6-1.4 0-2.9.5-4 1.6-2.5 2.5-6.1 3.8-9.6 3.3-4.5-.5-9.3-1.9-12.4-4.9-7-6.9 1.1-20.5-5.1-29.2-6.2-8.7-16.1-19.8-23.2-26.9-7.1-7-35-33.7-82-52.9-16.6-6.8-32.8-9.3-47.3-9.3-26.5 0-47.4 8.5-54.8 15.3-5.5 5.1-11.2 14.1-3.1 14.1.7 0 1.5-.1 2.4-.2 4.5-.7 13.3-1.5 23.4-1.5 15.7 0 34.5 2.1 44.6 10.1 16.3 13.1 29.8 30.6 30.9 53.2.8 16.8-3.4 28.2-18.7 45.5-2.8 3.2-2.6 8 .4 10.9l19.2 19.2c3.1 3.1 8.1 3.1 11.2.1 14-13.6 22.1-20.2 31.3-22.7 4-1.1 8.4-1.6 12.8-1.6 9.7 0 19.2 2.2 23.6 4.6 1.1.6 2.1 1.4 3.1 2.4 6.5 6.6 6.1 17.4-.5 23.9l-2 1.9c-2.2 2.2-2.2 5.7 0 7.9l34.5 34.2c1.1 1.1 2.5 1.6 4 1.6 1.4 0 2.9-.5 4-1.6l55.8-55.2c2.1-2.3 2.1-5.8 0-8z" fill="currentColor"></svg:path>`,
})
export class IonIosHammerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosHandIcon],svg[ion-ios-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M394.9 117.3c-11.6 0-21.1 9.3-21.1 20.6v109.4c0 4.8-4 8.7-8.9 8.7s-8.9-3.9-8.9-8.7V85.9c0-11.3-9.5-20.6-21.1-20.6-11.6 0-21.1 9.3-21.1 20.6v126.8c0 4.8-4 8.7-8.9 8.7s-8.9-3.9-8.9-8.7V68.6c0-11.3-9.5-20.6-21.1-20.6-11.6 0-21.1 9.3-21.1 20.6V230c0 4.8-4 8.7-8.9 8.7s-8.9-3.9-8.9-8.7V103.2c0-11.3-9.5-20.6-21.1-20.6-11.6 0-21.1 9.3-21.1 20.6v218.3L166 297.9c-26.1-22.7-48.2-32.4-66.2-15.7-12.1 11.8 6.9 30.9 26.8 53.2 19.2 21.5 70 91.9 113.3 117.3 0 0 16.7 11.4 40.6 11.4h57.2c46.1 0 78.4-37.9 78.4-93.2v-233c-.1-11.3-9.6-20.6-21.2-20.6z" fill="currentColor"></svg:path>`,
})
export class IonIosHandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosHappyIcon],svg[ion-ios-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm72 152c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm-144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm72 169c-44.7 0-82.3-29.9-94.2-70.7-1.5-5.1 2.3-10.3 7.7-10.3h172.9c5.3 0 9.2 5.1 7.7 10.3-11.8 40.8-49.4 70.7-94.1 70.7z" fill="currentColor"></svg:path>`,
})
export class IonIosHappyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosHeadsetIcon],svg[ion-ios-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 123.8c-24.3 0-46.9 10.1-63.9 28.4-17 18.3-26.1 33.2-26.1 59.6 0 7.7 5.9 14 13.2 14 7.3 0 13.2-6.3 13.2-14 0-17.3 6.6-32.4 19-43.5 11.8-10.6 27.7-16.5 44.7-16.5s32.9 5.8 44.7 16.5c12.4 11.2 19 26.2 19 43.5 0 7.7 5.9 14 13.2 14 7.3 0 13.2-6.3 13.2-14 0-26.4-9.2-41.3-26.1-59.6-17.2-18.4-39.8-28.4-64.1-28.4z" fill="currentColor"></svg:path><svg:path d="M457.1 278.9C442.3 264.1 422.8 256 402 256h-8c-2.2 0-4-1.8-4-4v-37.8c0-35.7-14-69.3-39.4-94.7C325.3 94 291.7 80 256 80c-35.7 0-69.3 14-94.6 39.4-25.4 25.4-39.4 59-39.4 94.7V252c0 2.2-1.8 4-4 4h-8c-20.8 0-40.3 8.1-55.1 22.9C40.1 293.7 32 313.2 32 334v11.8c0 20.8 8.1 40.4 22.9 55.2 14.8 14.8 34.4 23 55.1 23h5.6c4 0 8 1.4 10.9 4.1 2.5 2.3 5.9 3.8 9.5 3.8 7.7 0 14-6.3 14-14.1V214.1c0-28.2 11.1-54.8 31.2-74.9 20.1-20.1 46.7-31.2 74.8-31.2 28.2 0 54.8 11.1 74.8 31.2 20.1 20.1 31.2 46.7 31.2 74.9v203.8c0 7.8 6.3 14.1 14 14.1 3.6 0 7-1.5 9.5-3.8 2.9-2.7 6.9-4.1 10.9-4.1h5.6c20.7 0 40.3-8.2 55.1-23 14.8-14.8 22.9-34.4 22.9-55.2V334c0-20.8-8.1-40.3-22.9-55.1z" fill="currentColor"></svg:path>`,
})
export class IonIosHeadsetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosHeartIcon],svg[ion-ios-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113z" fill="currentColor"></svg:path>`,
})
export class IonIosHeartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosHeartDislikeIcon],svg[ion-ios-heart-dislike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M423.8 426.8L56.3 65.1c-5.6-5.5-14.6-5.5-20.1.1-5.5 5.5-5.5 14.5 0 20l367.5 361.7c3.7 3.7 9 4.9 13.7 3.6 2.4-.6 4.6-1.9 6.4-3.7 5.6-5.5 5.6-14.5 0-20z" fill="currentColor"></svg:path><svg:path d="M64 169c0 37 15.2 89.5 46.8 132.7C171 384 272 456 272 456s29.3-20.3 65.7-51.6L68 139c-2.6 9.6-4 19.6-4 30z" fill="currentColor"></svg:path><svg:path d="M434.2 301.7C465.8 258.5 480 206 480 169c0-62.1-50.1-112.4-112-113h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-29.2.3-55.8 11.6-75.7 30l281.9 277.4c19.3-19.1 36.2-40 52-61.7z" fill="currentColor"></svg:path>`,
})
export class IonIosHeartDislikeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosHeartEmptyIcon],svg[ion-ios-heart-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C351 343.5 286.1 397.3 256 420.8c-30.1-23.5-95-77.4-137.6-135.7C89.1 245.1 76 198 76 169c0-22.6 8.8-43.8 24.6-59.8 15.9-16 37-24.9 59.6-25.1H161.1c14.3 0 28.5 3.7 41.1 10.8 12.2 6.9 22.8 16.7 30.4 28.5 5.2 7.9 14 12.7 23.5 12.7s18.3-4.8 23.5-12.7c7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.2 29-13.3 76.1-42.6 116.2z" fill="currentColor"></svg:path>`,
})
export class IonIosHeartEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosHeartHalfIcon],svg[ion-ios-heart-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C356.4 336 302.2 383.6 269 410.5c-5.2 4.2-13 .5-13-6.2V198.6c0-26.8 8.5-52.7 23.3-75 .1-.1.1-.2.2-.2 7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.1 29-13.2 76.1-42.5 116.2z" fill="currentColor"></svg:path>`,
})
export class IonIosHeartHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosHelpIcon],svg[ion-ios-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256.7 160c37.5 0 63.3 20.8 63.3 50.7 0 19.8-9.6 33.5-28.1 44.4-17.4 10.1-23.3 17.5-23.3 30.3v7.9h-34.7l-.3-8.6c-1.7-20.6 5.5-33.4 23.6-44 16.9-10.1 24-16.5 24-28.9s-12-21.5-26.9-21.5c-15.1 0-26 9.8-26.8 24.6H192c.7-32.2 24.5-54.9 64.7-54.9zm-26.3 171.4c0-11.5 9.6-20.6 21.4-20.6 11.9 0 21.5 9 21.5 20.6s-9.6 20.6-21.5 20.6-21.4-9-21.4-20.6z" fill="currentColor"></svg:path>`,
})
export class IonIosHelpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosHelpBuoyIcon],svg[ion-ios-help-buoy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm54.6 36.4c27.1 8.6 52 23.6 72.7 44.3 20.7 20.7 35.7 45.6 44.3 72.7l-88.8 6c-8.2-14-19.9-25.7-33.9-34l5.7-89zm-181.9 44.3c20.7-20.7 45.5-35.7 72.7-44.3l5.7 89c-13.9 8.3-25.6 20-33.9 33.9l-88.9-5.9c8.7-27.1 23.7-52 44.4-72.7zm72.7 298.9c-27.1-8.6-52-23.6-72.7-44.3-20.7-20.7-35.7-45.6-44.3-72.7l89-5.7c8.2 13.9 19.9 25.5 33.8 33.8l-5.8 88.9zM256 324c-37.5 0-68-30.5-68-68s30.5-68 68-68 68 30.5 68 68-30.5 68-68 68zm127.3 59.3c-20.7 20.7-45.6 35.7-72.7 44.3l-5.9-88.9c14.1-8.3 25.8-20.1 34.1-34.2l88.8 6c-8.6 27.2-23.6 52.1-44.3 72.8z" fill="currentColor"></svg:path>`,
})
export class IonIosHelpBuoyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosHelpCircleIcon],svg[ion-ios-help-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-4.3 304c-11.8 0-21.4-9-21.4-20.6 0-11.5 9.6-20.6 21.4-20.6 11.9 0 21.5 9 21.5 20.6 0 11.6-9.5 20.6-21.5 20.6zm40.2-96.9c-17.4 10.1-23.3 17.5-23.3 30.3v7.9h-34.7l-.3-8.6c-1.7-20.6 5.5-33.4 23.6-44 16.9-10.1 24-16.5 24-28.9s-12-21.5-26.9-21.5c-15.1 0-26 9.8-26.8 24.6H192c.7-32.2 24.5-55 64.7-55 37.5 0 63.3 20.8 63.3 50.7 0 19.9-9.6 33.6-28.1 44.5z" fill="currentColor"></svg:path>`,
})
export class IonIosHelpCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosHelpEmptyIcon],svg[ion-ios-help-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M260.3 366c-9.4 0-17-7.5-17-16.9 0-9.3 7.6-16.8 17-16.8s17 7.5 17 16.8c0 9.4-7.6 16.9-17 16.9zm33.8-115.3c-22.8 22.5-22.2 27.4-23.3 53.3h-19c1.1-28.5 7.5-43.7 30.1-64.5 11-10.3 19.4-22.7 19.4-38.1 0-23.6-19.4-39.9-42.6-39.9-32.4 0-48.5 16.4-47.9 46.4H192c.3-42 24.4-62.1 67.6-62.1 33 0 60.4 20.4 60.4 54.6 0 21.9-10.7 36.2-25.9 50.3z" fill="currentColor"></svg:path>`,
})
export class IonIosHelpEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosHomeIcon],svg[ion-ios-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M258.5 104.1c-1.5-1.2-3.5-1.2-5 0l-156 124.8c-.9.8-1.5 1.9-1.5 3.1v230c0 1.1.9 2 2 2h108c1.1 0 2-.9 2-2V322c0-1.1.9-2 2-2h92c1.1 0 2 .9 2 2v140c0 1.1.9 2 2 2h108c1.1 0 2-.9 2-2V232c0-1.2-.6-2.4-1.5-3.1l-156-124.8z" fill="currentColor"></svg:path><svg:path d="M458.7 204.2l-189-151.4C265.9 49.7 261 48 256 48s-9.9 1.7-13.7 4.8L160 119.7V77.5c0-1.1-.9-2-2-2H98c-1.1 0-2 .9-2 2v92.2l-42.7 35.1c-3.1 2.5-5.1 6.2-5.3 10.2-.2 4 1.3 7.9 4.1 10.7 2.6 2.6 6.1 4.1 9.9 4.1 3.2 0 6.3-1.1 8.8-3.1l183.9-148c.5-.4.9-.4 1.3-.4s.8.1 1.3.4l183.9 147.4c2.5 2 5.6 3.1 8.8 3.1 3.7 0 7.2-1.4 9.9-4.1 2.9-2.8 4.4-6.7 4.2-10.7-.3-4-2.2-7.7-5.4-10.2z" fill="currentColor"></svg:path>`,
})
export class IonIosHomeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosHourglassIcon],svg[ion-ios-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M415.6 434h-5.1c-6.5 0-12-.9-12.7-7.4v-.1C383.2 290.6 297.6 288 297.6 256s85.7-34.6 100.2-170.5v-.1c.7-6.5 6.2-7.4 12.7-7.4h5.1c7.5 0 14-5.8 14.4-13.3.4-8-6-14.7-14-14.7H96.4c-7.5 0-14 5.8-14.4 13.3-.4 8 6 14.7 14 14.7h5.5c6.5 0 12 .9 12.7 7.4v.1C128.8 221.4 214.4 224 214.4 256s-85.7 34.6-100.2 170.5v.1c-.7 6.5-6.2 7.4-12.7 7.4h-5.1c-7.5 0-14 5.8-14.4 13.3-.4 8 6 14.7 14 14.7h320c8 0 14.4-6.6 14-14.7-.4-7.5-6.9-13.3-14.4-13.3zm-252.3-34.2c28.7-79.8 79.6-70.1 79.6-101.6v-55.6c0-19.4-36.8-32.9-59.8-64.4-3.8-5.2 0-12.4 6.5-12.4h132.9c6.5 0 10.4 7 6.7 12.2-22.6 31.6-60.1 45.2-60.1 64.6v55.6c0 31.2 48.9 22.7 79.8 101.6 2.8 7.1.7 16-6.9 16H170.2c-7.7 0-9.5-8.8-6.9-16z" fill="currentColor"></svg:path>`,
})
export class IonIosHourglassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionIosIceCreamIcon],svg[ion-ios-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M220.8 406.1l4.8 14.8c.4 1.2 1.9 1.8 3 1.1l6.8-4.2c2.5-1.6 2.5-5.2 0-6.8l-11.5-7.2c-1.7-1-3.6.5-3.1 2.3z" fill="currentColor"></svg:path><svg:path d="M286.6 421l4.9-15.2c.6-1.8-1.4-3.3-3-2.3l-11.9 7.4a4.02 4.02 0 000 6.8l7 4.4c1.2.7 2.6.1 3-1.1z" fill="currentColor"></svg:path><svg:path d="M188.6 242.2c-3.9 3.5-9.6 6.4-15.7 8.5-1 .4-1.6 1.5-1.2 2.5l9.3 28.9 3.8 11.8c.4 1.2 1.9 1.8 3 1.1l7-4.3 36.6-22.5c3-1.9 2.3-6.5-1.2-7.3-14.3-3.3-26.5-9.8-36.2-18.5-1.6-1.4-3.9-1.5-5.4-.2z" fill="currentColor"></svg:path><svg:path d="M192.6 310.8l-2 1.2 14.6 45.3c.4 1.2 1.9 1.8 3 1.1l27.2-16.9c2.5-1.6 2.5-5.2 0-6.8l-38.5-23.9c-1.4-.8-3-.8-4.3 0z" fill="currentColor"></svg:path><svg:path d="M258.1 348.9c-1.3-.8-2.9-.8-4.2 0L212 374.5l-.1.1c-1 .8-1 2.4 0 3.2l.7.5 41.3 25.3c1.3.8 2.9.8 4.2 0l41.7-25.5.4-.3c1-.8 1-2.2 0-3l-42.1-25.9z" fill="currentColor"></svg:path><svg:path d="M296.7 296.6l-38.5-23.9c-1.3-.8-2.9-.8-4.2 0l-38.5 23.9a4.02 4.02 0 000 6.8l38.5 23.9c1.3.8 2.9.8 4.2 0l38.5-23.9c2.5-1.5 2.5-5.2 0-6.8z" fill="currentColor"></svg:path><svg:path d="M318.1 242.3c-9.7 8.7-22 15.1-36.2 18.5-3.5.8-4.2 5.4-1.2 7.3l36.6 22.5 7.4 4.6c1.1.7 2.6.2 3-1.1l4-12.4 9.8-30.3c-6.9-2.1-13.6-5.3-18-9.2-1.6-1.3-3.9-1.2-5.4.1z" fill="currentColor"></svg:path><svg:path d="M232.4 442l1.6 5s7.5 19 22 19c15 0 22.2-19 22.2-19l1.6-4.8c.6-1.7-.1-3.7-1.7-4.6l-20-12.4c-1.3-.8-2.9-.8-4.2 0l-19.8 12.3c-1.6.8-2.3 2.7-1.7 4.5z" fill="currentColor"></svg:path><svg:path d="M276.7 341.5l27.5 17.1c1.1.7 2.6.2 3-1.1l14.2-43.8c.3-.9-.1-1.8-.8-2.3l-1-.6c-1.3-.8-2.9-.8-4.2 0l-38.5 23.9c-2.8 1.6-2.8 5.3-.2 6.8z" fill="currentColor"></svg:path><svg:path d="M376.1 168.2c-6.2 5.4-13.2 8.7-18 10.5-1.8.7-3.5-1.4-2.3-3l4-5.7c6.1-8.7 8.5-19.4 6.8-29.8C357.9 86.8 311.7 46 256 46c-55.7 0-101.9 41.2-110.6 94.7-1.7 10.5.8 21.2 6.9 29.8l4 5.6c1.2 1.6-.5 3.8-2.4 3-5.4-2.1-13.5-6.2-20.1-12.8-1.4-1.4-3.6-1.5-5.2-.4-10.2 7.3-16.8 19.1-16.8 32.5 0 22.1 17.9 40 40 40 11.3 0 28-4.7 36.6-12.3 1.5-1.3 3.8-1.3 5.3.1 15.2 13.4 36.6 20.2 62.1 20.2s47-6.8 62.1-20.2c1.5-1.3 3.8-1.4 5.3-.1 8.5 7.6 25.3 12.3 36.6 12.3 22.1 0 40-18 40-40.1 0-11.9-5.2-22.6-13.5-30-2.7-2.6-7.2-2.7-10.2-.1z" fill="currentColor"></svg:path>`,
})
export class IonIosIceCreamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

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
