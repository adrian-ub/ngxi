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
  selector: 'svg[ionAccessibilitySharpIcon],svg[ion-accessibility-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 112c-66.82 17.92-119.55 32-192 32s-125.18-14.08-192-32l-16 51c48 20.53 96.71 35.16 147.2 53.2L144 496l56.4 16L246 336h20l45.6 176l56.4-16l-51.2-279.8C367.26 199.93 416 183.53 464 164Zm-192 0a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56"></svg:path>`,
})
export class IonAccessibilitySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAddCircleSharpIcon],svg[ion-add-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m96 224h-80v80h-32v-80h-80v-32h80v-80h32v80h80Z"></svg:path>`,
})
export class IonAddCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

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
  selector: 'svg[ionAddSharpIcon],svg[ion-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="M256 112v288m144-144H112"></svg:path>`,
})
export class IonAddSharpIcon {
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
  selector: 'svg[ionAirplaneSharpIcon],svg[ion-airplane-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M407.72 208c-2.72 0-14.44.08-18.67.31l-57.77 1.52L198.06 48h-62.81l74.59 164.61l-97.31 1.44L68.25 160H16.14l20.61 94.18c.15.54.33 1.07.53 1.59a.26.26 0 0 1 0 .15a15 15 0 0 0-.53 1.58L15.86 352h51.78l45.45-55l96.77 2.17L135.24 464h63l133-161.75l57.77 1.54c4.29.23 16 .31 18.66.31c24.35 0 44.27-3.34 59.21-9.94C492.22 283 496 265.46 496 256c0-30.06-33-48-88.28-48m-71.29 87.9"></svg:path>`,
})
export class IonAirplaneSharpIcon {
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
  selector: 'svg[ionAlarmSharpIcon],svg[ion-alarm-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m403.79 64.11l-3.27-.1H400c-14.73 0-28.55 5.91-40.52 15S344 96 344 96l88 86s11.25-5.71 17.61-13.85s14.28-18.08 14.32-37.11c.07-35.49-26.33-64.89-60.14-66.93m-295.58 0l3.27-.1h.52c14.73 0 28.55 5.91 40.52 15S168 96 168 96l-88 86s-11.25-5.71-17.61-13.85S48.11 150.07 48.07 131C48 95.55 74.4 66.15 108.21 64.11"></svg:path><svg:path fill="currentColor" d="M391.3 384.6a.06.06 0 0 1 0-.08C425 344 441 288.24 427 229.23c-13.64-57.52-72.67-115.69-130.34-128.66C182 74.79 80.07 161.71 80.07 272a175.15 175.15 0 0 0 40.78 112.52a.06.06 0 0 1 0 .08L73 432a.06.06 0 0 0 0 .08l23 22.51a.06.06 0 0 0 .08 0l47.43-47.37a.06.06 0 0 1 .08 0a175.64 175.64 0 0 0 225.05 0h.07L416 454.59a.06.06 0 0 0 .08 0L440 432ZM272.07 288H160v-31.9l.05-.05h80V144h32Z"></svg:path>`,
})
export class IonAlarmSharpIcon {
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
  selector: 'svg[ionAlbumsSharpIcon],svg[ion-albums-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 64h256v32H128zm-32 48h320v32H96zm368 336H48V160h416Z"></svg:path>`,
})
export class IonAlbumsSharpIcon {
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
  selector: 'svg[ionAlertCircleSharpIcon],svg[ion-alert-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M240 304h32l6-160h-44z"></svg:path><svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m20 319.91h-40v-40h40ZM272 304h-32l-6-160h44Z"></svg:path>`,
})
export class IonAlertCircleSharpIcon {
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
  selector: 'svg[ionAlertSharpIcon],svg[ion-alert-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m240 80l8 240h16l8-240zm0 320h32v32h-32z"></svg:path>`,
})
export class IonAlertSharpIcon {
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
  selector: 'svg[ionAmericanFootballSharpIcon],svg[ion-american-football-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120.9 120.51c-44.75 44.56-67.29 101.05-78.64 145.9l202.31 201.44c45.05-11.3 101.78-33.74 146.53-78.3s67.29-101.05 78.64-145.91L267.43 42.21C222.38 53.51 165.65 76 120.9 120.51m214 33.63l22.52 22.42l-33.78 33.63l22.52 22.42L323.55 255L301 232.61L278.52 255L301 277.45l-22.51 22.42L256 277.45l-22.52 22.42L256 322.29l-22.52 22.42L211 322.29l-33.78 33.63l-22.55-22.42l33.78-33.63l-22.52-22.42L188.45 255L211 277.45L233.48 255L211 232.61l22.51-22.42L256 232.61l22.52-22.42L256 187.77l22.52-22.42L301 187.77Zm143.58 44.27C485.85 143.65 464 48.05 464 48.05s-96.14-21.88-151.14-14.54c-2.54.33-5.21.72-8 1.14l172.47 171.71c.43-2.76.81-5.42 1.15-7.95M33.52 311.65C26.15 366.41 48.05 464 48.05 464s60 16 99.86 16a392 392 0 0 0 51.23-3.45c2.54-.33 5.21-.72 8-1.15L34.67 303.7c-.43 2.76-.81 5.42-1.15 7.95"></svg:path>`,
})
export class IonAmericanFootballSharpIcon {
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
  selector: 'svg[ionAnalyticsSharpIcon],svg[ion-analytics-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M450 128a46 46 0 0 0-44.11 59l-71.37 71.36a45.88 45.88 0 0 0-29 0l-52.91-52.91a46 46 0 1 0-89.12 0L75 293.88A46.08 46.08 0 1 0 106.11 325l87.37-87.36a45.85 45.85 0 0 0 29 0l52.92 52.92a46 46 0 1 0 89.12 0L437 218.12A46 46 0 1 0 450 128"></svg:path>`,
})
export class IonAnalyticsSharpIcon {
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
  selector: 'svg[ionApertureSharpIcon],svg[ion-aperture-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216 48l129.49 128.18V48zm-34.53 10.38L80 134h176zM336 344h128V216zm118-162L378 80v176zM48 166v128l128-128zm282 288l102-76H256zM58 330l76 102V256zm287.49-107.88l-55.55-55.46h-67.88l-55.55 55.46v67.76l55.62 55.52c.44 0 .88-.06 1.33-.06h66.48l55.55-55.46ZM165.98 336.09L166 464h128z"></svg:path>`,
})
export class IonApertureSharpIcon {
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
  selector: 'svg[ionAppsSharpIcon],svg[ion-apps-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="112" height="112" x="48" y="48" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="112" height="112" x="200" y="48" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="112" height="112" x="352" y="48" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="112" height="112" x="48" y="200" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="112" height="112" x="200" y="200" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="112" height="112" x="352" y="200" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="112" height="112" x="48" y="352" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="112" height="112" x="200" y="352" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="112" height="112" x="352" y="352" fill="currentColor" rx="8" ry="8"></svg:rect>`,
})
export class IonAppsSharpIcon {
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
  selector: 'svg[ionArchiveSharpIcon],svg[ion-archive-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="448" height="80" x="32" y="48" fill="currentColor" rx="12" ry="12"></svg:rect><svg:path fill="currentColor" d="M64 160v280a24 24 0 0 0 24 24h336a24 24 0 0 0 24-24V160Zm192 230.63L169.32 304L192 281.32l48 48.05V208h32v121.37l48.07-48.07l22.61 22.64Z"></svg:path>`,
})
export class IonArchiveSharpIcon {
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
  selector: 'svg[ionArrowBackCircleSharpIcon],svg[ion-arrow-back-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48S48 141.13 48 256m224-80.09L208.42 240H358v32H208.42L272 336.09l-22.7 22.54L147.46 256L249.3 153.37Z"></svg:path>`,
})
export class IonArrowBackCircleSharpIcon {
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
  selector: 'svg[ionArrowBackSharpIcon],svg[ion-arrow-back-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"></svg:path>`,
})
export class IonArrowBackSharpIcon {
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
  selector: 'svg[ionArrowDownCircleSharpIcon],svg[ion-arrow-down-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48S48 141.13 48 256s93.13 208 208 208m-80.09-224L240 303.58V154h32v149.58L336.09 240l22.54 22.71L256 364.54L153.37 262.7Z"></svg:path>`,
})
export class IonArrowDownCircleSharpIcon {
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
  selector: 'svg[ionArrowDownLeftBoxSharpIcon],svg[ion-arrow-down-left-box-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M32 480V315.636h32v109.737l43.636-43.637v22.628h22.628L86.627 448h109.737v32zm286.628-264L130.264 404.364H480V32H107.636v349.736L296 193.373z" clip-rule="evenodd"></svg:path>`,
})
export class IonArrowDownLeftBoxSharpIcon {
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
  selector: 'svg[ionArrowDownRightBoxSharpIcon],svg[ion-arrow-down-right-box-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M480 480H315.636v-32h109.737l-43.637-43.636h22.628v-22.628L448 425.372V315.636h32zM216 193.372l188.364 188.364V32H32v372.364h349.736L193.373 216z" clip-rule="evenodd"></svg:path>`,
})
export class IonArrowDownRightBoxSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowDownSharpIcon],svg[ion-arrow-down-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="m112 268l144 144l144-144M256 392V100"></svg:path>`,
})
export class IonArrowDownSharpIcon {
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
  selector: 'svg[ionArrowForwardCircleSharpIcon],svg[ion-arrow-forward-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208m-224 80.09L303.58 272H154v-32h149.58L240 175.91l22.71-22.54L364.54 256L262.7 358.63Z"></svg:path>`,
})
export class IonArrowForwardCircleSharpIcon {
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
  selector: 'svg[ionArrowForwardSharpIcon],svg[ion-arrow-forward-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="m268 112l144 144l-144 144m124-144H100"></svg:path>`,
})
export class IonArrowForwardSharpIcon {
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
  selector: 'svg[ionArrowRedoCircleSharpIcon],svg[ion-arrow-redo-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48S48 141.13 48 256m98 88c0-68.13 22.67-137.14 119.17-137.14V152L366 248l-100.83 96v-54.86c-66.69 0-91.32 19.29-119.17 54.86"></svg:path>`,
})
export class IonArrowRedoCircleSharpIcon {
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
  selector: 'svg[ionArrowRedoSharpIcon],svg[ion-arrow-redo-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 399.26C48 335.19 62.44 284 90.91 247c34.38-44.67 88.68-68.77 161.56-71.75V72L464 252L252.47 432V329.35c-44.25 1.19-77.66 7.58-104.27 19.84c-28.75 13.25-49.6 33.05-72.08 58.7L48 440Z"></svg:path>`,
})
export class IonArrowRedoSharpIcon {
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
  selector: 'svg[ionArrowUndoCircleSharpIcon],svg[ion-arrow-undo-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m-9.17 241.14V344L146 248l100.83-96v54.86c96.5 0 119.17 69 119.17 137.14c-27.85-35.57-52.48-54.86-119.17-54.86"></svg:path>`,
})
export class IonArrowUndoCircleSharpIcon {
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
  selector: 'svg[ionArrowUndoSharpIcon],svg[ion-arrow-undo-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m464 440l-28.12-32.11c-22.48-25.65-43.33-45.45-72.08-58.7c-26.61-12.26-60-18.65-104.27-19.84V432L48 252L259.53 72v103.21c72.88 3 127.18 27.08 161.56 71.75C449.56 284 464 335.19 464 399.26Z"></svg:path>`,
})
export class IonArrowUndoSharpIcon {
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
  selector: 'svg[ionArrowUpCircleSharpIcon],svg[ion-arrow-up-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m80.09 224L272 208.42V358h-32V208.42L175.91 272l-22.54-22.7L256 147.46L358.63 249.3Z"></svg:path>`,
})
export class IonArrowUpCircleSharpIcon {
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
  selector: 'svg[ionArrowUpLeftBoxSharpIcon],svg[ion-arrow-up-left-box-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M32 32h164.364v32H86.627l43.637 43.636h-22.628v22.628L64 86.627v109.737H32zm264 286.627L107.636 130.264V480H480V107.636H130.264L318.628 296z" clip-rule="evenodd"></svg:path>`,
})
export class IonArrowUpLeftBoxSharpIcon {
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
  selector: 'svg[ionArrowUpRightBoxSharpIcon],svg[ion-arrow-up-right-box-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M480 32v164.364h-32V86.627l-43.636 43.637v-22.628h-22.628L425.373 64H315.636V32zM193.373 296l188.363-188.364H32V480h372.364V130.264L216 318.627z" clip-rule="evenodd"></svg:path>`,
})
export class IonArrowUpRightBoxSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionArrowUpSharpIcon],svg[ion-arrow-up-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="m112 244l144-144l144 144M256 120v292"></svg:path>`,
})
export class IonArrowUpSharpIcon {
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
  selector: 'svg[ionAtCircleSharpIcon],svg[ion-at-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256.41 48.74c-114.85 0-208 93.11-208 208s93.12 208 208 208s208-93.12 208-208s-93.16-208-208-208M381.22 252c-2.85 32.63-16.78 49.7-28 58.26s-24.69 12.34-36.33 10.26a41.63 41.63 0 0 1-27-17.52a60.84 60.84 0 0 1-43.72 17.9a51.65 51.65 0 0 1-38.55-16.83c-11.39-12.42-17-30.36-15.33-49.23c3.05-35 30.92-57.39 56.87-61.48c27.21-4.29 52.24 6.54 62.91 19.46l3.84 4.66l-6.34 50.38c-1.19 14.34 3.29 23.48 12.29 25.1c2.39.42 8.11-.13 14.38-4.93c6.72-5.15 15.14-16 17.1-38.47c2.32-26.55-4.35-49.19-19.28-65.49c-15.5-16.9-39.1-25.84-68.24-25.84c-54 0-101.81 44.43-106.57 99c-2.29 26.2 5.66 50.68 22.39 68.93C198 344 221 353.88 246.29 353.88c19 0 30.61-2.05 49.49-8.78l13.22-4.69l9.39 26.37l-13.19 4.7c-21.82 7.77-36.68 10.4-58.88 10.4c-33.28 0-63.57-13.06-85.3-36.77c-22.09-24.11-32.62-56.17-29.65-90.29c2.91-33.33 18.46-64.63 43.77-88.12s57.57-36.49 90.7-36.49c37.2 0 67.94 12.08 88.88 34.93c20.05 21.91 29.48 52.75 26.5 86.86"></svg:path><svg:path fill="currentColor" d="M253.51 221c-14.83 2.33-31.55 15.84-33.34 36.26c-1 11.06 2 21.22 8.08 27.87a23.63 23.63 0 0 0 17.91 7.75c19.7 0 33.8-14.79 36.8-38.59l1.75-13.89h.09l1.65-13.11a49.63 49.63 0 0 0-32.94-6.3Z"></svg:path>`,
})
export class IonAtCircleSharpIcon {
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
  selector: 'svg[ionAtSharpIcon],svg[ion-at-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M407.6 115.78c-32.07-35-79.47-53.51-137.09-53.51c-51 0-100.69 19.8-139.82 55.76s-63.13 83.84-67.63 134.83c-4.55 51.67 11.41 100.29 44.94 136.9c33.37 36.44 80.07 56.51 131.49 56.51c32.52 0 53.61-2.36 85.48-15.75l14.75-6.2l-12.4-29.5l-14.75 6.18c-27.15 11.4-43.78 13.25-73.08 13.25c-42.34 0-80.65-16.38-107.89-46.12c-27.4-29.92-40.42-69.86-36.66-112.48c7.84-89 86.6-161.4 175.57-161.4c48.4 0 87.65 14.91 113.49 43.13c24.61 26.87 35.6 63.92 31.79 107.15c-3.29 37.35-17.76 55.74-29.32 64.6c-11 8.44-22 10.18-28 9.11c-17.68-3.13-26.87-20.46-24.59-46.29l9.93-109.12L311.9 160l-2 22.29a79.7 79.7 0 0 0-57.32-24c-23.8 0-46.54 10.07-64 28.37c-16.77 17.53-27.23 41.05-29.45 66.22c-2.45 27.87 5.75 54.34 22.51 72.64a76.14 76.14 0 0 0 56.88 24.77A93 93 0 0 0 310 318a60 60 0 0 0 42.88 31.81c16.89 3 36.73-2.69 53.08-15.21c30.19-23.13 39.36-60.19 41.74-87.2c4.52-51.7-9.7-98.4-40.1-131.62m-126.34 186a62.2 62.2 0 0 1-42.81 16.53a43.94 43.94 0 0 1-33.28-14.38c-10.71-11.7-15.9-29.27-14.23-48.22c3.23-36.68 30.29-65.4 61.61-65.4a48.16 48.16 0 0 1 35.88 15.82c10.87 11.87 16.2 28.87 14.63 46.73c-1.78 20.28-9.33 37.14-21.8 48.88Z"></svg:path>`,
})
export class IonAtSharpIcon {
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
  selector: 'svg[ionAttachSharpIcon],svg[ion-attach-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M216.08 192v143.55a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 0 0 191 0V159.44"></svg:path>`,
})
export class IonAttachSharpIcon {
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
  selector: 'svg[ionBackspaceSharpIcon],svg[ion-backspace-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 96L32 256l112 160h304V96Zm215.3 226.34L336.67 345l-65-65l-65 65L184 322.34l65-65l-65-65l22.63-22.63l65 65l65-65l22.63 22.63l-65 65Z"></svg:path>`,
})
export class IonBackspaceSharpIcon {
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
  selector: 'svg[ionBagAddSharpIcon],svg[ion-bag-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M460 160h-88v-12A116.13 116.13 0 0 0 258.89 32h-5.78A116.13 116.13 0 0 0 140 148v12H52a4 4 0 0 0-4 4v300a16 16 0 0 0 16 16h384a16 16 0 0 0 16-16V164a4 4 0 0 0-4-4m-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 0 1 332 148v12H180Zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64Z"></svg:path>`,
})
export class IonBagAddSharpIcon {
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
  selector: 'svg[ionBagCheckSharpIcon],svg[ion-bag-check-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M460 160h-88v-12A116.13 116.13 0 0 0 258.89 32h-5.78A116.13 116.13 0 0 0 140 148v12H52a4 4 0 0 0-4 4v300a16 16 0 0 0 16 16h384a16 16 0 0 0 16-16V164a4 4 0 0 0-4-4m-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 0 1 332 148v12H180Zm50.81 252.12l-61.37-71.72l24.31-20.81L230 350.91l87.51-109.4l25 20Z"></svg:path>`,
})
export class IonBagCheckSharpIcon {
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
  selector: 'svg[ionBagHandleSharpIcon],svg[ion-bag-handle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M460 160h-88v-12A116.13 116.13 0 0 0 258.89 32h-5.78A116.13 116.13 0 0 0 140 148v12H52a4 4 0 0 0-4 4v300a16 16 0 0 0 16 16h384a16 16 0 0 0 16-16V164a4 4 0 0 0-4-4m-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 0 1 332 148v12H180Zm188 91a112 112 0 0 1-224 0v-32h32v32a80 80 0 0 0 160 0v-32h32Z"></svg:path>`,
})
export class IonBagHandleSharpIcon {
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
  selector: 'svg[ionBagRemoveSharpIcon],svg[ion-bag-remove-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M460 160h-88v-12A116.13 116.13 0 0 0 258.89 32h-5.78A116.13 116.13 0 0 0 140 148v12H52a4 4 0 0 0-4 4v300a16 16 0 0 0 16 16h384a16 16 0 0 0 16-16V164a4 4 0 0 0-4-4m-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 0 1 332 148v12H180Zm156 187H176v-32h160Z"></svg:path>`,
})
export class IonBagRemoveSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionBagSharpIcon],svg[ion-bag-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M372 160v-12A116.13 116.13 0 0 0 258.89 32h-5.78A116.13 116.13 0 0 0 140 148v12H52a4 4 0 0 0-4 4v300a16 16 0 0 0 16 16h384a16 16 0 0 0 16-16V164a4 4 0 0 0-4-4Zm-40 0H180v-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 0 1 332 148Z"></svg:path>`,
})
export class IonBagSharpIcon {
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
  selector: 'svg[ionBalloonSharpIcon],svg[ion-balloon-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M391 307.27c32.75-46.35 46.59-101.63 39-155.68C416.47 55.59 327.38-11.54 231.38 2S68.24 104.53 81.73 200.53c7.57 53.89 36.12 103.16 80.37 138.74c26.91 21.64 57.59 36.1 86.05 41.33l-8.36 45.23a8 8 0 0 0 9 9.38L279 431c15.9 35.87 41.65 60.48 78.41 75l14.88 5.88l11.77-29.75l-14.88-5.89c-26.35-10.42-44.48-26.16-57-49.92l21.84-3.07a8 8 0 0 0 6.05-11.49l-20.49-41.16c25.98-12.87 51.49-35.18 71.42-63.33m-160.82 15.66c-41.26-16.32-76.3-52.7-91.45-94.94l-5.4-15.06l30.12-10.8l5.4 15.06c14.5 40.44 47.27 65.77 73.1 76l14.88 5.88l-11.77 29.76Z"></svg:path>`,
})
export class IonBalloonSharpIcon {
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
  selector: 'svg[ionBanSharpIcon],svg[ion-ban-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M432 256a175.1 175.1 0 0 1-35.8 106.26L149.74 115.8A175.1 175.1 0 0 1 256 80c97.05 0 176 79 176 176m-352 0a175.1 175.1 0 0 1 35.8-106.26L362.26 396.2A175.1 175.1 0 0 1 256 432c-97 0-176-78.95-176-176"></svg:path>`,
})
export class IonBanSharpIcon {
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
  selector: 'svg[ionBandageSharpIcon],svg[ion-bandage-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.71 337.1a40 40 0 0 0 0 56.54l90.65 90.65a40 40 0 0 0 56.54 0l75.1-75.1L102.81 262ZM496 147.1a39.87 39.87 0 0 0-11.75-28.38l-91-91a40.14 40.14 0 0 0-56.75 0L264 100.28L411.72 248l72.53-72.53A39.85 39.85 0 0 0 496 147.1M273.06 386.19l116-116L241.77 123l-116 116Zm19.63-141.5a16 16 0 1 1 0 22.62a16 16 0 0 1 0-22.62m-48-48a16 16 0 1 1 0 22.62a16 16 0 0 1 0-22.62m0 96a16 16 0 1 1 0 22.62a16 16 0 0 1 0-22.62m-25.38-48a16 16 0 1 1-22.62 0a16 16 0 0 1 22.62 0"></svg:path>`,
})
export class IonBandageSharpIcon {
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
  selector: 'svg[ionBarChartSharpIcon],svg[ion-bar-chart-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 496H16V16h32v448h448z"></svg:path><svg:path fill="currentColor" d="M192 432H80V208h112Zm144 0H224V160h112Zm143.64 0h-112V96h112Z"></svg:path>`,
})
export class IonBarChartSharpIcon {
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
  selector: 'svg[ionBarbellSharpIcon],svg[ion-barbell-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 176h-58v-64h-76v122H150V112H74v64H16v160h58v64h76V278h212v122h76v-64h58z"></svg:path>`,
})
export class IonBarbellSharpIcon {
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
  selector: 'svg[ionBarcodeSharpIcon],svg[ion-barcode-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="m400 400.33l48-.33V112l-48 .33M112 112l-48 .33v288l48-.33m272-208v128m-64-160v192m-64-176v160m-64-176v192m-64-160v128"></svg:path>`,
})
export class IonBarcodeSharpIcon {
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
  selector: 'svg[ionBaseballSharpIcon],svg[ion-baseball-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M302.16 56.2a13.88 13.88 0 0 1-3.42 8.91l-.11 5.13l-27.71-.57c0 1.3.09 2.61.16 3.91a177 177 0 0 0 3.45 26.31l24.72-7.18l7.81 26.88l-24.71 7.18a177 177 0 0 0 13.34 27.69l21.27-15l16.16 22.86l-21.29 15.05q5.25 6.33 11.11 12.19c3.91 3.91 8 7.6 12.2 11.1l15.71-22.22l22.86 16.16L358 216.75a179 179 0 0 0 27.68 13.32l7.49-25.8l26.89 7.81l-7.5 25.83a178 178 0 0 0 31 3.67l-.41-24.67l17.41-.29A208 208 0 0 0 301.82 52.93a13.7 13.7 0 0 1 .34 3.27M214 441.64l27.91.49a177.5 177.5 0 0 0-3.62-29.95l-24.14 7l-7.81-26.88l24.11-7a178 178 0 0 0-13.33-27.68L196.79 372l-16.16-22.86L201 334.73c-3.49-4.22-7.19-8.3-11.09-12.2s-8-7.62-12.19-11.12l-13.91 19.68L141 314.93l13.9-19.66a177 177 0 0 0-27.7-13.33l-6.37 21.94l-26.89-7.81l6.38-22a177 177 0 0 0-26.32-3.4c-1.59-.09-3.18-.16-4.78-.2l.4 22.34l-17.71.32a207.88 207.88 0 0 0 161.81 166.48Z"></svg:path><svg:path fill="currentColor" d="m444.65 302.67l-.55-33.06a206 206 0 0 1-39.33-4.74L397 291.8l-26.94-7.8l7.83-27a207 207 0 0 1-36.06-17.35l-16.36 23.15l-22.86-16.16l16.33-23.11a204.2 204.2 0 0 1-30-30l-22.19 15.67l-16.16-22.87l22.17-15.67a206 206 0 0 1-17.38-36.06l-25.75 7.48l-7.81-26.89l25.73-7.47q-2-9.21-3.18-18.64h-.47l-.78-14l-.33-6l-17.94-.32a13 13 0 0 1-1.79-.16l-6.35-.13l.06-2.47a14 14 0 0 1-5.66-11.49a13 13 0 0 1 .13-1.67A208 208 0 0 0 52.16 217.43l16.1-.28l.45 25.18l6.83.38l14 .77v.48q9.42 1.17 18.64 3.18l6.68-23L141.7 232l-6.7 23a205.3 205.3 0 0 1 36.06 17.38l14.53-20.56L208.47 268L194 288.5a203.5 203.5 0 0 1 30 30l21.3-15l16.16 22.86l-21.36 15.05a207 207 0 0 1 17.34 36.06l25.27-7.33l7.81 26.86l-25.24 7.33a206 206 0 0 1 4.72 38.3l29.42.53l-.29 16.48a207.94 207.94 0 0 0 160-157.21Z"></svg:path>`,
})
export class IonBaseballSharpIcon {
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
  selector: 'svg[ionBasketSharpIcon],svg[ion-basket-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M339.2 217.6L256 106.67L172.8 217.6l-25.6-19.2l96-128a16 16 0 0 1 25.6 0l96 128Z"></svg:path><svg:path fill="currentColor" d="M441.59 192H70.41a12 12 0 0 0-11.68 14.77L112.59 434h286.82l53.86-227.23A12 12 0 0 0 441.59 192M256 351.66A37.71 37.71 0 1 1 293.89 314A37.88 37.88 0 0 1 256 351.66"></svg:path>`,
})
export class IonBasketSharpIcon {
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
  selector: 'svg[ionBasketballSharpIcon],svg[ion-basketball-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 233.37l34.45-34.45a207.08 207.08 0 0 1-50.12-135.25c0-5 .19-10.05.54-15A207.1 207.1 0 0 0 120.67 98Zm57.14-57.14L391.33 98A207.07 207.07 0 0 0 273 48.8c-.41 4.9-.64 9.86-.64 14.87a175.25 175.25 0 0 0 40.78 112.56m22.63 22.63a175.25 175.25 0 0 0 112.56 40.81c5 0 10-.23 14.87-.64A207.07 207.07 0 0 0 414 120.67ZM176.23 313.14a175.23 175.23 0 0 0-112.56-40.81q-7.52 0-14.87.64A207.07 207.07 0 0 0 98 391.33ZM256 278.63l-34.45 34.45a207.08 207.08 0 0 1 50.12 135.25c0 5-.19 10.05-.54 15A207.06 207.06 0 0 0 391.33 414Zm192.33-6.96a207.08 207.08 0 0 1-135.25-50.12L278.63 256L414 391.33a207.1 207.1 0 0 0 49.39-120.2c-5.01.35-10.02.54-15.06.54M233.37 256L98 120.67a207.06 207.06 0 0 0-49.39 120.2c5-.35 10-.54 15-.54a207.08 207.08 0 0 1 135.25 50.12Zm-112.7 158A207.07 207.07 0 0 0 239 463.2q.63-7.35.64-14.87a175.23 175.23 0 0 0-40.81-112.56Z"></svg:path>`,
})
export class IonBasketballSharpIcon {
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
  selector: 'svg[ionBatteryChargingSharpIcon],svg[ion-battery-charging-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M306.68 237.62h-66.5l15.33-54.7l6.43-22.92l3.94-14l4.29-15.33a4 4 0 0 0 .06-.44v-.19a2 2 0 0 0 0-.23a2 2 0 0 0 0-.24v-.14c0-.1-.07-.19-.11-.29v-.05a2.33 2.33 0 0 0-2-1.35h-.1a2.25 2.25 0 0 0-1.8 1l-12.5 17.15l-18.82 25.55l-8.36 11.48l-35.41 48.6L160 274.26h66.44l-30 107a4 4 0 0 0-.06.48s0 .06 0 .1a2 2 0 0 0 0 .34a.3.3 0 0 0 0 .09a3 3 0 0 0 .07.32v.06a2 2 0 0 0 .14.32a2.38 2.38 0 0 0 1.52 1.16h.57a2.1 2.1 0 0 0 1.31-.5l.06-.05a2.6 2.6 0 0 0 .42-.45L223.3 352l13-17.82Z"></svg:path><svg:path fill="currentColor" d="m289.78 134.55l-.14.74l-.21.73l-6.72 24H417V352H248.05l-23.33 32H449V128H290.13a22.6 22.6 0 0 1-.35 6.55M49 160h169.49l23.31-32H17v256h159.49a22.7 22.7 0 0 1 .34-6.67l.15-.75l.2-.73l6.69-23.85H49Z"></svg:path><svg:path fill="currentColor" d="M264.76 329.08h130.55V182.92H276.28l-9.73 34.7H346l-23.16 31.78zM160 294.26h-39.31l23.15-31.78l57.95-79.56H70.69v146.16h119.6l9.77-34.82zm305-91.59h32v106.67h-32z"></svg:path>`,
})
export class IonBatteryChargingSharpIcon {
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
  selector: 'svg[ionBatteryDeadSharpIcon],svg[ion-battery-dead-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M32 144h400v224H32zm448 74.67v74.66"></svg:path>`,
})
export class IonBatteryDeadSharpIcon {
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
  selector: 'svg[ionBatteryFullSharpIcon],svg[ion-battery-full-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 384h432V128H17Zm32-224h368v192H49Z"></svg:path><svg:path fill="currentColor" d="M70.69 182.94h324.63v146.13H70.69zM465 202.67h32v106.67h-32z"></svg:path>`,
})
export class IonBatteryFullSharpIcon {
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
  selector: 'svg[ionBatteryHalfSharpIcon],svg[ion-battery-half-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 384h432V128H17Zm32-224h368v192H49Z"></svg:path><svg:path fill="currentColor" d="M70.69 182.92H256v146.16H70.69zM465 202.67h32v106.67h-32z"></svg:path>`,
})
export class IonBatteryHalfSharpIcon {
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
  selector: 'svg[ionBeakerSharpIcon],svg[ion-beaker-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M453.55 54.7L464 32H128.4c-27.74 0-49 6.57-63.31 19.51C54.39 61.27 48 74.89 48 88v24h16c31 0 32 16.79 32 35v313a20 20 0 0 0 20 20h312a20 20 0 0 0 20-20V96c0-17.16 2.28-34.14 5.55-41.3M416 96v64H128v-22c0-36.15-21-51-41.77-53.46C89 70 105.7 64.05 128.4 64.05h289.92A222 222 0 0 0 416 96"></svg:path>`,
})
export class IonBeakerSharpIcon {
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
  selector: 'svg[ionBedSharpIcon],svg[ion-bed-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 224V96a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v128a48 48 0 0 0-48 48v160h36v-32h376v32h36V272a48 48 0 0 0-48-48m-192 0H120v-32a16 16 0 0 1 16-16h88a16 16 0 0 1 16 16Zm32-32a16 16 0 0 1 16-16h88a16 16 0 0 1 16 16v32H272Z"></svg:path>`,
})
export class IonBedSharpIcon {
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
  selector: 'svg[ionBeerSharpIcon],svg[ion-beer-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 208h-80v-5.74A63.93 63.93 0 0 0 321.65 96a111 111 0 0 0-27.59-47.29A108.62 108.62 0 0 0 216 16c-29.91 0-57.78 12.28-79 34.67a56 56 0 0 0-67.51 77.51c-1 .86-1.91 1.74-2.83 2.66A63.56 63.56 0 0 0 48 176.26a62.65 62.65 0 0 0 20.77 46.54A65 65 0 0 0 80 231v249a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-48h80a16 16 0 0 0 16-16V224a16 16 0 0 0-16-16M176 432h-32V240h32Zm64 0h-32V240h32Zm64 0h-32V240h32Zm16-240c-8.33 0-20.55-5.18-26.69-11.31l-4.68-4.69H148.79L145 186.53c-5.81 16-18.83 20.41-28.73 21.29a34.08 34.08 0 0 1-25.91-8.67a31 31 0 0 1-10.32-23a31.8 31.8 0 0 1 9.33-22.71c.16-.17.33-.32.5-.49A31.78 31.78 0 0 1 112 144c.09 0 9.12.34 16.4 5.8l12.8 9.6l19.2-25.6l-12.8-9.6A63.7 63.7 0 0 0 112 112a64.8 64.8 0 0 0-14 1.55a24 24 0 0 1 41.4-23.68l.23.35l.4.46a35.8 35.8 0 0 1 5 8.94l5.62 15l30-11.24l-5.62-15a68.2 68.2 0 0 0-10-17.74c-.38-.52-.79-1-1.19-1.51C178.38 55.45 196.64 48 216 48a76.86 76.86 0 0 1 55.23 23.18A80.2 80.2 0 0 1 292.61 142l-3 15.72l31.43 6l3-15.72a112 112 0 0 0 1.96-19.43a32 32 0 0 1-6 63.43m112 208h-64V240h64Z"></svg:path>`,
})
export class IonBeerSharpIcon {
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
  selector: 'svg[ionBicycleSharpIcon],svg[ion-bicycle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m320 192l-29.5-60.1C284.32 118 284.32 118 264 118c-13.26 0-14.76 0-23 7.3l-71.7 69.1c-8.3 8.45-9.3 9.45-9.3 26.6c0 12.67 3.78 14.61 18.51 22.9L240 278v90h32V254s-29-17-48.3-30l48.9-51.5c18.7 28.5 27.3 51.5 38 51.5H384v-32Z"></svg:path><svg:path fill="currentColor" d="M388 448a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m0-152a60 60 0 1 0 60 60a60.07 60.07 0 0 0-60-60M124 448a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m0-152a60 60 0 1 0 60 60a60.07 60.07 0 0 0-60-60m196-168a31.89 31.89 0 0 0 32-32.1A31.55 31.55 0 0 0 320.2 64a32 32 0 1 0-.2 64"></svg:path>`,
})
export class IonBicycleSharpIcon {
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
  selector: 'svg[ionBinocularsSharpIcon],svg[ion-binoculars-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M164 64c-21.289 0-37.183 6.758-49.083 18.831c-11.071 11.233-17.546 26.036-22.792 39.275L23.283 305.692a155 155 0 0 0-2.314 6.324q-.374 1.029-.602 2.068A104 104 0 0 0 16 344c0 57.438 46.562 104 104 104s104-46.562 104-104v-60.461l.04-.01l63.96.01V344c0 57.438 46.562 104 104 104s104-46.562 104-104c0-10.399-1.526-20.441-4.367-29.915c-.325-1.085-2.915-8.392-2.915-8.392l-68.207-181.915l-.636-1.672c-5.246-13.239-11.72-28.042-22.792-39.275C385.183 70.758 369.289 64 348 64c-18.436 0-33.934 7.239-44.611 19.607C292.943 95.707 288 111.638 288 128v34.809h-64V128c0-16.362-4.943-32.293-15.389-44.393C197.934 71.239 182.436 64 164 64M56 344c0-35.346 28.654-64 64-64s64 28.654 64 64s-28.654 64-64 64s-64-28.654-64-64m272 0c0-35.346 28.654-64 64-64s64 28.654 64 64s-28.654 64-64 64s-64-28.654-64-64" clip-rule="evenodd"></svg:path>`,
})
export class IonBinocularsSharpIcon {
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
  selector: 'svg[ionBluetoothSharpIcon],svg[ion-bluetooth-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M397.41 161.13L236-.28v212.8l-94.17-80.72l-26 30.37L225.27 256L115.8 349.83l26 30.37l94.2-80.72v212.8l161.41-161.41L286.73 256ZM276 96.28l62.59 62.59L276 212.52Zm62.58 256.85L276 415.72V299.48Z"></svg:path>`,
})
export class IonBluetoothSharpIcon {
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
  selector: 'svg[ionBoatSharpIcon],svg[ion-boat-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M477.77 246.42c-2.13-6-7.23-9.55-12.56-11.95L432 221.38V92a20 20 0 0 0-20-20h-76V40a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v32h-76a20 20 0 0 0-20 20v129.46l-33.08 13.06c-5.33 2.4-10.58 6-12.72 12s-3.16 11.81-1 19L84.25 415.7h1.06c34.12 0 64-17.41 85.31-43.82c21.32 26.41 51.18 42.12 85.3 42.12s64-15.76 85.31-42.17c21.32 26.41 51.18 43.87 85.3 43.87h1.06l51.25-150.17c2.16-6 1.07-13.1-1.07-19.11M256 152l-144 56.83V108a4 4 0 0 1 4-4h280a4 4 0 0 1 4 4v100.76Z"></svg:path><svg:path fill="currentColor" d="M345.22 407c-52.25 36.26-126.35 36.25-178.6 0c0 0-45.64 63-94.64 63l13.33 1c29.86 0 58.65-11.73 85.31-25.59a185.33 185.33 0 0 0 170.6 0c26.66 13.87 55.45 25.6 85.31 25.6l13.33-1C392.21 470 345.22 407 345.22 407"></svg:path>`,
})
export class IonBoatSharpIcon {
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
  selector: 'svg[ionBodySharpIcon],svg[ion-body-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="56" r="56" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M464 128H48v52h144l-32 325.13l51 6.87l21.65-192h47.02L301 512l51-6.98L320 180h144z"></svg:path>`,
})
export class IonBodySharpIcon {
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
  selector: 'svg[ionBonfireSharpIcon],svg[ion-bonfire-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m199.89 336l-15.25-5.62a100.4 100.4 0 0 1-32-23.08c-13.93-14.9-29.29-40.71-23.38-79.11c5.2-33.73 44.2-74.21 69.34-97.87c27.24-25.62 66-65.85 64.15-99.15L262 16h15.18C328.53 16 384 53.62 384 114.41c0 45.57-22 77.61-68.91 106.9c-8 5-16.44 9.66-25.42 14.53c-30.63 16.62-75.29 49.83-85.73 85.32Zm-18.7-222.41C201 95 218.91 78.15 227.62 59.79q-2.76-1.68-5.7-3.09c-11.87-5.69-26.1-8.34-44.76-8.34h-16.94l.56 16.49c.47 14.06-6.06 22.51-14.33 33.21C137.8 109.26 128 121.94 128 141c0 10.23 1.29 18.76 4.2 26.36q3.5-5.31 7.61-10.63c12.19-15.73 27.05-29.68 41.38-43.14"></svg:path><svg:path fill="currentColor" d="M330.34 239.85c-9.31 5.9-19 11.14-29.25 16.71c-32.65 17.69-63.48 34.44-73.23 67.44l-.6 2a110.5 110.5 0 0 0 45.87 10c29.66 0 57.45-11.13 78.24-31.36A107.38 107.38 0 0 0 384 227a92.4 92.4 0 0 0-5.59-31c-11.35 16.18-27.14 30.58-48.07 43.85M268.72 360h-25.44a4 4 0 0 0-3.92 3.22l-25.36 128a4 4 0 0 0 3.92 4.78h76.26a4 4 0 0 0 3.92-4.78l-25.41-128a4 4 0 0 0-3.97-3.22m56.96-5.68l-11.36 11.36a4 4 0 0 0-.5 5.05l59.47 89.21a4 4 0 0 0 6.16.61l41.1-41.1a4 4 0 0 0-.61-6.16l-89.21-59.47a4 4 0 0 0-5.05.5M388 336a4 4 0 0 0-4 4v8.61a4 4 0 0 0 3.34 3.95l88 14.66a4 4 0 0 0 4.66-3.94V340a4 4 0 0 0-4-4Zm-201.68 18.32l11.36 11.36a4 4 0 0 1 .5 5.05l-59.47 89.21a4 4 0 0 1-6.16.61l-41.1-41.1a4 4 0 0 1 .61-6.16l89.21-59.47a4 4 0 0 1 5.05.5M124 336H36a4 4 0 0 0-4 4v23.28a4 4 0 0 0 4.66 3.94l88-14.66a4 4 0 0 0 3.34-3.95V340a4 4 0 0 0-4-4"></svg:path>`,
})
export class IonBonfireSharpIcon {
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
  selector: 'svg[ionBookSharpIcon],svg[ion-book-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 48c-67.61.29-117.87 9.6-154.24 25.69c-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48ZM48 48c67.61.29 117.87 9.6 154.24 25.69c27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48Z"></svg:path>`,
})
export class IonBookSharpIcon {
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
  selector: 'svg[ionBookmarkSharpIcon],svg[ion-bookmark-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 480L256 357.41L96 480V32h320Z"></svg:path>`,
})
export class IonBookmarkSharpIcon {
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
  selector: 'svg[ionBookmarksSharpIcon],svg[ion-bookmarks-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 0v48h304v368l48 32V0z"></svg:path><svg:path fill="currentColor" d="M48 80v432l168-124l168 124V80z"></svg:path>`,
})
export class IonBookmarksSharpIcon {
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
  selector: 'svg[ionBowlingBallSharpIcon],svg[ion-bowling-ball-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M286 230a28 28 0 1 1 28-28a28 28 0 0 1-28 28m8-76a28 28 0 1 1 28-28a28 28 0 0 1-28 28m68 44a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class IonBowlingBallSharpIcon {
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
  selector: 'svg[ionBriefcaseSharpIcon],svg[ion-briefcase-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 288H176v-32H16v196a12 12 0 0 0 12 12h456a12 12 0 0 0 12-12V256H336Zm160-164a12 12 0 0 0-12-12H384V56a8 8 0 0 0-8-8H136a8 8 0 0 0-8 8v56H28a12 12 0 0 0-12 12v100h480Zm-152-12H168V88h176Z"></svg:path>`,
})
export class IonBriefcaseSharpIcon {
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
  selector: 'svg[ionBrowsersSharpIcon],svg[ion-browsers-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 64v384a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16m408 364H72a4 4 0 0 1-4-4V152a4 4 0 0 1 4-4h368a4 4 0 0 1 4 4v272a4 4 0 0 1-4 4"></svg:path>`,
})
export class IonBrowsersSharpIcon {
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
  selector: 'svg[ionBrushSharpIcon],svg[ion-brush-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m480 96l-64-64l-244 260l64 64ZM142 320c-36.52 0-66 30.63-66 68.57c0 25.43-31 45.72-44 45.72C52.24 462.17 86.78 480 120 480c48.62 0 88-40.91 88-91.43c0-37.94-29.48-68.57-66-68.57"></svg:path>`,
})
export class IonBrushSharpIcon {
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
  selector: 'svg[ionBugSharpIcon],svg[ion-bug-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 304.13v-32h-80V215.2c29.42-27.95 32-64.76 32-103.2V96h-32v16c0 28-1.86 48.15-9.9 63.84C368 128 324.32 112 256 112c-39.8 0-75.19 7.06-100.43 24.32c-14.9 10.19-25.2 24.91-32.7 39.72C114 160.57 112 140.82 112 112V96H80v16c0 37.44 2.59 73.36 32 101.2v58.93H32v32l80-.13c0 19 3.7 53.09 10.39 69.69C96.6 396.76 80 422.31 80 464v16h32v-16c0-27.66 9.1-44.71 26.17-61.32C160 448 177 464 240 464V176h32v288c65 0 80-16 101.83-61.32C390.9 419.29 400 436.35 400 464v16h32v-16c0-41.68-16.6-67.23-42.39-90.31C396.3 357.09 400 323 400 304Z"></svg:path><svg:path fill="currentColor" d="M256 32c-48.06 0-96 0-96 84c26.12-14 59.35-20 96-20c24.09 0 46.09 2.65 65.39 8c10.75 3 24.66 8.71 30.61 12c0-84-47.94-84-96-84"></svg:path>`,
})
export class IonBugSharpIcon {
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
  selector: 'svg[ionBuildSharpIcon],svg[ion-build-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 209.2L32 405.58L106.65 480l197.59-198.17c46.47 17.46 105.52 12.54 143-24.78c40.44-40.32 40.35-108 16.81-156.79l-87.33 87.06l-52.32-52.13l87.33-87.06C363 24.46 294.67 24.34 254.23 64.66c-38.03 37.91-42.78 97.6-24.23 144.54"></svg:path>`,
})
export class IonBuildSharpIcon {
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
  selector: 'svg[ionBulbSharpIcon],svg[ion-bulb-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 464h96v32h-96zm-16-48h128v32H192zM369.42 62.69C339.35 32.58 299.07 16 256 16A159.62 159.62 0 0 0 96 176c0 46.62 17.87 90.23 49 119.64l4.36 4.09C167.37 316.57 192 339.64 192 360v40h48V269.11L195.72 244L214 217.72L256 240l41.29-22.39l19.1 25.68l-44.39 26V400h48v-40c0-19.88 24.36-42.93 42.15-59.77l4.91-4.66C399.08 265 416 223.61 416 176a159.16 159.16 0 0 0-46.58-113.31"></svg:path>`,
})
export class IonBulbSharpIcon {
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
  selector: 'svg[ionBusSharpIcon],svg[ion-bus-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M400 64H112a16 16 0 0 0 0 32h288a16 16 0 0 0 0-32"></svg:path><svg:path fill="currentColor" d="M424 32H88a24 24 0 0 0-24 24v360a32 32 0 0 0 16 27.71V480h72v-32h208v32h72v-36.29A32 32 0 0 0 448 416V56a24 24 0 0 0-24-24M175.82 371.47a32 32 0 1 1-35.3-35.29a32.09 32.09 0 0 1 35.3 35.29M240 288H96V128h144Zm16-192H96.46L96 64h320l-.46 32zm16 32h144v160H272Zm64.18 236.53a32 32 0 1 1 35.3 35.29a32.09 32.09 0 0 1-35.3-35.29"></svg:path>`,
})
export class IonBusSharpIcon {
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
  selector: 'svg[ionBusinessSharpIcon],svg[ion-business-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 176V16H32v480h128v-96h32v96h288V176ZM112 432H80v-32h32Zm0-80H80v-32h32Zm0-80H80v-32h32Zm0-80H80v-32h32Zm0-80H80V80h32Zm128-32h32v32h-32Zm-48 272h-32v-32h32Zm0-80h-32v-32h32Zm0-80h-32v-32h32Zm0-80h-32V80h32Zm80 320h-32v-32h32Zm0-80h-32v-32h32Zm0-80h-32v-32h32Zm0-80h-32v-32h32zm176 272H320v-32h32v-32h-32v-48h32v-32h-32v-48h32v-32h-32v-32h128Z"></svg:path><svg:path fill="currentColor" d="M384 400h32v32h-32zm0-80h32v32h-32zm0-80h32v32h-32z"></svg:path>`,
})
export class IonBusinessSharpIcon {
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
  selector: 'svg[ionCafeSharpIcon],svg[ion-cafe-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 64H80v254.34a19.83 19.83 0 0 0 5.86 14.14l29.65 29.66a19.87 19.87 0 0 0 14.15 5.86h204.68a19.87 19.87 0 0 0 14.15-5.86l29.65-29.66a19.83 19.83 0 0 0 5.86-14.14V192h32a16 16 0 0 0 11.31-4.69l32-32A16 16 0 0 0 464 144V80a16 16 0 0 0-16-16m-16 73.37L409.37 160H384V96h48ZM48 400h368v32H48z"></svg:path>`,
})
export class IonCafeSharpIcon {
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
  selector: 'svg[ionCalculatorSharpIcon],svg[ion-calculator-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 48a16 16 0 0 0-16-16H112a16 16 0 0 0-16 16v416a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16ZM192 432h-48v-48h48Zm0-80h-48v-48h48Zm0-80h-48v-48h48Zm88 160h-48v-48h48Zm0-80h-48v-48h48Zm0-80h-48v-48h48Zm88 160h-48V304h48Zm0-160h-48v-48h48Zm0-96H144V80h224Z"></svg:path>`,
})
export class IonCalculatorSharpIcon {
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
  selector: 'svg[ionCalendarClearSharpIcon],svg[ion-calendar-clear-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 456a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V192H32ZM480 87.77A23.8 23.8 0 0 0 456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 0 0-24 23.77V144h448Z"></svg:path>`,
})
export class IonCalendarClearSharpIcon {
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
  selector: 'svg[ionCalendarNumberSharpIcon],svg[ion-calendar-number-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 456a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V176H32Zm310.17-244H368v200h-32V256.29l-35.39 26.08l-19-25.76ZM222 335.3c-8.54-8.74-22.75-12.67-30.11-12.67h-16v-32h16c4.85 0 17.41-2.6 25.28-10.65a22 22 0 0 0 6.57-16.08c0-23.23-28.63-23.9-31.89-23.9c-17.34 0-23.8 10.61-24.07 11.06l-8.13 13.78l-27.56-16.27l8.14-13.77c7.64-13 25.22-26.8 51.62-26.8c16.44 0 31.76 4.77 43.13 13.42c13.39 10.2 20.76 25.28 20.76 42.48A54 54 0 0 1 240 302.35c-1.15 1.18-2.36 2.28-3.59 3.35a66 66 0 0 1 8.42 7.23c10.56 10.8 16.14 25.75 16.14 43.25c0 18.06-7.61 34-21.42 44.92c-12.17 9.61-28.75 14.9-46.7 14.9c-27.87 0-48.48-18.16-57.66-33.7l-8.13-13.78l27.56-16.27l8.16 13.75c1.08 1.84 11.15 18 30.1 18c16.66 0 36.12-7.29 36.12-27.82c0-6.25-1.22-14.95-7-20.88M456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 0 0-24 23.77V144h448V87.77A23.8 23.8 0 0 0 456 64"></svg:path>`,
})
export class IonCalendarNumberSharpIcon {
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
  selector: 'svg[ionCalendarSharpIcon],svg[ion-calendar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 456a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V176H32Zm320-244a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4Zm0 80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4Zm-80-80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4Zm0 80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4Zm0 80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4Zm-80-80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4Zm0 80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4Zm-80-80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4Zm0 80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4ZM456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 0 0-24 23.77V144h448V87.77A23.8 23.8 0 0 0 456 64"></svg:path>`,
})
export class IonCalendarSharpIcon {
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
  selector: 'svg[ionCallSharpIcon],svg[ion-call-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M478.94 370.14c-5.22-5.56-23.65-22-57.53-43.75c-34.13-21.94-59.3-35.62-66.52-38.81a3.83 3.83 0 0 0-3.92.49c-11.63 9.07-31.21 25.73-32.26 26.63c-6.78 5.81-6.78 5.81-12.33 4c-9.76-3.2-40.08-19.3-66.5-45.78s-43.35-57.55-46.55-67.3c-1.83-5.56-1.83-5.56 4-12.34c.9-1.05 17.57-20.63 26.64-32.25a3.83 3.83 0 0 0 .49-3.92c-3.19-7.23-16.87-32.39-38.81-66.52c-21.78-33.87-38.2-52.3-43.76-57.52a3.9 3.9 0 0 0-3.89-.87a322.4 322.4 0 0 0-56 25.45A338 338 0 0 0 33.35 92a3.83 3.83 0 0 0-1.26 3.74c2.09 9.74 12.08 50.4 43.08 106.72c31.63 57.48 53.55 86.93 100 133.22S252 405.21 309.54 436.84c56.32 31 97 41 106.72 43.07a3.86 3.86 0 0 0 3.75-1.26A337.7 337.7 0 0 0 454.35 430a322.7 322.7 0 0 0 25.45-56a3.9 3.9 0 0 0-.86-3.86"></svg:path>`,
})
export class IonCallSharpIcon {
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
  selector: 'svg[ionCameraReverseSharpIcon],svg[ion-camera-reverse-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M456 144h-83c-3 0-6.72-1.94-9.62-5l-27.31-42.79C326 80 320 80 302 80h-92c-18 0-23 0-34.07 16.21L148.62 139c-2.22 2.42-5.34 5-8.62 5v-16a8 8 0 0 0-8-8H92a8 8 0 0 0-8 8v16H56a24 24 0 0 0-24 24v240a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V168a24 24 0 0 0-24-24M256 368c-47.82 0-87.76-34.23-95-80h-43.63L176 229.37L234.63 288H194a64.07 64.07 0 0 0 102.63 33.49L320 343l-3.68 3.72A96.64 96.64 0 0 1 256 368m80-53.84L277.11 256H318a64.26 64.26 0 0 0-103-33.36L192 200l3.14-2.45A96.2 96.2 0 0 1 255.76 176c47.85 0 87 34.19 94.24 80h44.92Z"></svg:path>`,
})
export class IonCameraReverseSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionCameraSharpIcon],svg[ion-camera-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="272" r="64" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M456 144h-83c-3 0-6.72-1.94-9.62-5L336.1 96.2C325 80 320 80 302 80h-92c-18 0-24 0-34.07 16.21L148.62 139c-2.22 2.42-5.34 5-8.62 5v-16a8 8 0 0 0-8-8H92a8 8 0 0 0-8 8v16H56a24 24 0 0 0-24 24v240a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V168a24 24 0 0 0-24-24M260.51 367.9a96 96 0 1 1 91.39-91.39a96.11 96.11 0 0 1-91.39 91.39"></svg:path>`,
})
export class IonCameraSharpIcon {
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
  selector: 'svg[ionCarSharpIcon],svg[ion-car-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M447.68 220.78a16.4 16.4 0 0 0-1-3.1l-48-112A16 16 0 0 0 384 96H128a16 16 0 0 0-14.71 9.7l-48 112a16.4 16.4 0 0 0-1 3.1A16 16 0 0 0 64 224v184a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-24h288v24a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V224a16 16 0 0 0-.32-3.22M144 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32m224 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32M104.26 208l34.29-80h234.9l34.29 80Z"></svg:path>`,
})
export class IonCarSharpIcon {
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
  selector: 'svg[ionCarSportSharpIcon],svg[ion-car-sport-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M488 224c-3-5-32.61-17.79-32.61-17.79c5.15-2.66 8.67-3.21 8.67-14.21c0-12-.06-16-8.06-16h-27.14c-.11-.24-.23-.49-.34-.74c-17.52-38.26-19.87-47.93-46-60.95C347.47 96.88 281.76 96 256 96s-91.47.88-126.49 18.31c-26.16 13-25.51 19.69-46 60.95c0 .11-.21.4-.4.74H55.94c-7.94 0-8 4-8 16c0 11 3.52 11.55 8.67 14.21C56.61 206.21 28 220 24 224s-8 32-8 80s4 96 4 96h11.94c0 14 2.06 16 8.06 16h80c6 0 8-2 8-16h256c0 14 2 16 8 16h82c4 0 6-3 6-16h12s4-49 4-96s-5-75-8-80m-362.74 44.94A517 517 0 0 1 70.42 272c-20.42 0-21.12 1.31-22.56-11.44a72.2 72.2 0 0 1 .51-17.51L49 240h3c12 0 23.27.51 44.55 6.78a98 98 0 0 1 30.09 15.06C131 265 132 268 132 268Zm247.16 72L368 352H144s.39-.61-5-11.18c-4-7.82 1-12.82 8.91-15.66C163.23 319.64 208 304 256 304s93.66 13.48 108.5 21.16C370 328 376.83 330 372.42 341Zm-257-136.53a96 96 0 0 1-9.7.07c2.61-4.64 4.06-9.81 6.61-15.21c8-17 17.15-36.24 33.44-44.35c23.54-11.72 72.33-17 110.23-17s86.69 5.24 110.23 17c16.29 8.11 25.4 27.36 33.44 44.35c2.57 5.45 4 10.66 6.68 15.33c-2 .11-4.3 0-9.79-.19Zm347.72 56.11C461 273 463 272 441.58 272a517 517 0 0 1-54.84-3.06c-2.85-.51-3.66-5.32-1.38-7.1a93.8 93.8 0 0 1 30.09-15.06c21.28-6.27 33.26-7.11 45.09-6.69a3.22 3.22 0 0 1 3.09 3a70.2 70.2 0 0 1-.49 17.47Z"></svg:path>`,
})
export class IonCarSportSharpIcon {
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
  selector: 'svg[ionCardSharpIcon],svg[ion-card-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 416a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V222H32Zm66-138a8 8 0 0 1 8-8h92a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8h-92a8 8 0 0 1-8-8ZM464 80H48a16 16 0 0 0-16 16v66h448V96a16 16 0 0 0-16-16"></svg:path>`,
})
export class IonCardSharpIcon {
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
  selector: 'svg[ionCaretBackCircleSharpIcon],svg[ion-caret-back-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48S48 141.13 48 256m252 108.27L169.91 256L300 147.73Z"></svg:path>`,
})
export class IonCaretBackCircleSharpIcon {
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
  selector: 'svg[ionCaretBackSharpIcon],svg[ion-caret-back-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 64L144 256l224 192z"></svg:path>`,
})
export class IonCaretBackSharpIcon {
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
  selector: 'svg[ionCaretDownCircleSharpIcon],svg[ion-caret-down-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208m-99.73-44L256 342.09L147.73 212Z"></svg:path>`,
})
export class IonCaretDownCircleSharpIcon {
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
  selector: 'svg[ionCaretDownSharpIcon],svg[ion-caret-down-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m64 144l192 224l192-224z"></svg:path>`,
})
export class IonCaretDownSharpIcon {
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
  selector: 'svg[ionCaretForwardCircleSharpIcon],svg[ion-caret-forward-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208M212 147.73L342.09 256L212 364.27Z"></svg:path>`,
})
export class IonCaretForwardCircleSharpIcon {
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
  selector: 'svg[ionCaretForwardSharpIcon],svg[ion-caret-forward-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m144 448l224-192L144 64z"></svg:path>`,
})
export class IonCaretForwardSharpIcon {
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
  selector: 'svg[ionCaretUpCircleSharpIcon],svg[ion-caret-up-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48M147.73 300L256 169.91L364.27 300Z"></svg:path>`,
})
export class IonCaretUpCircleSharpIcon {
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
  selector: 'svg[ionCaretUpSharpIcon],svg[ion-caret-up-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 368L256 144L64 368z"></svg:path>`,
})
export class IonCaretUpSharpIcon {
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
  selector: 'svg[ionCartSharpIcon],svg[ion-cart-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="176" cy="416" r="32" fill="currentColor"></svg:circle><svg:circle cx="400" cy="416" r="32" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M167.78 304h261.34l38.4-192H133.89l-8.47-48H32v32h66.58l48 272H432v-32H173.42z"></svg:path>`,
})
export class IonCartSharpIcon {
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
  selector: 'svg[ionCashSharpIcon],svg[ion-cash-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 368h416v32H48zm32 48h352v32H80zm400-240a96.11 96.11 0 0 1-96-96V64H128v16a96.11 96.11 0 0 1-96 96H16v64h16a96.11 96.11 0 0 1 96 96v16h256v-16a96.11 96.11 0 0 1 96-96h16v-64ZM256 304a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96"></svg:path><svg:path fill="currentColor" d="M96 80V64H16v80h16a64.07 64.07 0 0 0 64-64M32 272H16v80h80v-16a64.07 64.07 0 0 0-64-64m448-128h16V64h-80v16a64.07 64.07 0 0 0 64 64m-64 192v16h80v-80h-16a64.07 64.07 0 0 0-64 64"></svg:path><svg:circle cx="256" cy="208" r="64" fill="currentColor"></svg:circle>`,
})
export class IonCashSharpIcon {
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
  selector: 'svg[ionCellularSharpIcon],svg[ion-cellular-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 432h-96V80h96Zm-128 0h-96V160h96Zm-128 0h-96V224h96Zm-128 0H16V288h96Z"></svg:path>`,
})
export class IonCellularSharpIcon {
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
  selector: 'svg[ionChatboxEllipsesSharpIcon],svg[ion-chatbox-ellipses-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M456 48H56a24 24 0 0 0-24 24v288a24 24 0 0 0 24 24h72v80l117.74-80H456a24 24 0 0 0 24-24V72a24 24 0 0 0-24-24M160 248a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32M456 80"></svg:path>`,
})
export class IonChatboxEllipsesSharpIcon {
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
  selector: 'svg[ionChatboxSharpIcon],svg[ion-chatbox-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 464v-80H56a24 24 0 0 1-24-24V72a24 24 0 0 1 24-24h400a24 24 0 0 1 24 24v288a24 24 0 0 1-24 24H245.74ZM456 80"></svg:path>`,
})
export class IonChatboxSharpIcon {
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
  selector: 'svg[ionChatbubbleEllipsesSharpIcon],svg[ion-chatbubble-ellipses-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M475.22 206.52c-10.34-48.65-37.76-92.93-77.22-124.68A227.4 227.4 0 0 0 255.82 32C194.9 32 138 55.47 95.46 98.09C54.35 139.33 31.82 193.78 32 251.37a215.66 215.66 0 0 0 35.65 118.76l4.35 6.05L48 480l114.8-28.56s2.3.77 4 1.42s16.33 6.26 31.85 10.6c12.9 3.6 39.74 9 60.77 9c59.65 0 115.35-23.1 156.83-65.06C457.36 365.77 480 310.42 480 251.49a213.5 213.5 0 0 0-4.78-44.97M160 288a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonChatbubbleEllipsesSharpIcon {
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
  selector: 'svg[ionChatbubbleSharpIcon],svg[ion-chatbubble-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M475.22 206.52c-10.34-48.65-37.76-92.93-77.22-124.68A227.4 227.4 0 0 0 255.82 32C194.9 32 138 55.47 95.46 98.09C54.35 139.33 31.82 193.78 32 251.37a215.66 215.66 0 0 0 35.65 118.76l4.35 6.05L48 480l114.8-28.56s2.3.77 4 1.42s16.33 6.26 31.85 10.6c12.9 3.6 39.74 9 60.77 9c59.65 0 115.35-23.1 156.83-65.06C457.36 365.77 480 310.42 480 251.49a213.5 213.5 0 0 0-4.78-44.97"></svg:path>`,
})
export class IonChatbubbleSharpIcon {
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
  selector: 'svg[ionChatbubblesSharpIcon],svg[ion-chatbubbles-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 312.43c.77-1.11 1.51-2.26 2.27-3.34A174.55 174.55 0 0 0 480 211.85C480.32 112.55 396.54 32 292.94 32c-90.36 0-165.74 61.49-183.4 143.12a172.8 172.8 0 0 0-4 36.83c0 99.4 80.56 182.11 184.16 182.11c16.47 0 38.66-4.95 50.83-8.29s24.23-7.75 27.35-8.94s8-2.41 11.89-1.29l77.42 22.38a4 4 0 0 0 5-4.86l-17.72-67.49c-1.23-5-1.39-5.94 3.53-13.14"></svg:path><svg:path fill="currentColor" d="M312.54 415.38a165 165 0 0 1-23.26 2.05c-42.43 0-82.5-11.2-115-32.2a184.1 184.1 0 0 1-53.09-49.32c-26.08-34.57-40.3-78.51-40.3-124.49c0-3.13.11-6.14.22-9.16a4.34 4.34 0 0 0-7.54-3.12a158.76 158.76 0 0 0-14.86 195.24c2.47 3.77 3.87 6.68 3.44 8.62l-14.09 72.26a4 4 0 0 0 5.22 4.53l68-24.24a16.85 16.85 0 0 1 12.92.22c20.35 8 42.86 12.92 65.37 12.92a169.45 169.45 0 0 0 116.63-46a4.29 4.29 0 0 0-3.66-7.31"></svg:path>`,
})
export class IonChatbubblesSharpIcon {
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
  selector: 'svg[ionCheckboxSharpIcon],svg[ion-checkbox-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 48v416h416V48Zm170 312.38l-80.6-89.57l23.79-21.41l56 62.22L350 153.46L374.54 174Z"></svg:path>`,
})
export class IonCheckboxSharpIcon {
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
  selector: 'svg[ionCheckmarkCircleSharpIcon],svg[ion-checkmark-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-38 312.38l-80.6-89.57l23.79-21.41l56 62.22L350 153.46L374.54 174Z"></svg:path>`,
})
export class IonCheckmarkCircleSharpIcon {
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
  selector: 'svg[ionCheckmarkDoneCircleSharpIcon],svg[ion-checkmark-done-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m48.19 121.42l24.1 21.06l-73.61 84.1l-24.1-23.06ZM191.93 342.63L121.37 272L144 249.37L214.57 320Zm65 .79L185.55 272l22.64-22.62l47.16 47.21l111.13-127.17l24.1 21.06Z"></svg:path>`,
})
export class IonCheckmarkDoneCircleSharpIcon {
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
  selector: 'svg[ionCheckmarkDoneSharpIcon],svg[ion-checkmark-done-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="44" d="M465 127L241 384l-92-92m-9 93l-93-93m316-165L236 273"></svg:path>`,
})
export class IonCheckmarkDoneSharpIcon {
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
  selector: 'svg[ionCheckmarkSharpIcon],svg[ion-checkmark-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="44" d="M416 128L192 384l-96-96"></svg:path>`,
})
export class IonCheckmarkSharpIcon {
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
  selector: 'svg[ionChevronBackCircleSharpIcon],svg[ion-chevron-back-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m62.63 304L296 374.63L177.37 256L296 137.37L318.63 160l-96 96Z"></svg:path>`,
})
export class IonChevronBackCircleSharpIcon {
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
  selector: 'svg[ionChevronBackSharpIcon],svg[ion-chevron-back-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M328 112L184 256l144 144"></svg:path>`,
})
export class IonChevronBackSharpIcon {
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
  selector: 'svg[ionChevronCollapseSharpIcon],svg[ion-chevron-collapse-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102.145 108.514L256 241.855l153.855-133.341l-31.437-36.273L256 178.337L133.582 72.241zm0 294.972L256 270.145l153.855 133.341l-31.437 36.273L256 333.663L133.582 439.759z"></svg:path>`,
})
export class IonChevronCollapseSharpIcon {
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
  selector: 'svg[ionChevronDownCircleSharpIcon],svg[ion-chevron-down-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48S48 141.13 48 256s93.13 208 208 208m-96-270.63l96 96l96-96L374.63 216L256 334.63L137.37 216Z"></svg:path>`,
})
export class IonChevronDownCircleSharpIcon {
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
  selector: 'svg[ionChevronDownSharpIcon],svg[ion-chevron-down-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="m112 184l144 144l144-144"></svg:path>`,
})
export class IonChevronDownSharpIcon {
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
  selector: 'svg[ionChevronExpandSharpIcon],svg[ion-chevron-expand-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="48" d="m136 208l120-104l120 104m-240 96l120 104l120-104"></svg:path>`,
})
export class IonChevronExpandSharpIcon {
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
  selector: 'svg[ionChevronForwardCircleSharpIcon],svg[ion-chevron-forward-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m-40 326.63L193.37 352l96-96l-96-96L216 137.37L334.63 256Z"></svg:path>`,
})
export class IonChevronForwardCircleSharpIcon {
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
  selector: 'svg[ionChevronForwardSharpIcon],svg[ion-chevron-forward-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="m184 112l144 144l-144 144"></svg:path>`,
})
export class IonChevronForwardSharpIcon {
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
  selector: 'svg[ionChevronUpCircleSharpIcon],svg[ion-chevron-up-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m96 270.63l-96-96l-96 96L137.37 296L256 177.37L374.63 296Z"></svg:path>`,
})
export class IonChevronUpCircleSharpIcon {
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
  selector: 'svg[ionChevronUpSharpIcon],svg[ion-chevron-up-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="m112 328l144-144l144 144"></svg:path>`,
})
export class IonChevronUpSharpIcon {
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
  selector: 'svg[ionClipboardSharpIcon],svg[ion-clipboard-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M420 48h-68V28a12 12 0 0 0-12-12H172a12 12 0 0 0-12 12v20H92a12 12 0 0 0-12 12v424a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V60a12 12 0 0 0-12-12m-84.13 64H176.13V80h159.74Z"></svg:path>`,
})
export class IonClipboardSharpIcon {
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
  selector: 'svg[ionCloseCircleSharpIcon],svg[ion-close-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m86.63 272L320 342.63l-64-64l-64 64L169.37 320l64-64l-64-64L192 169.37l64 64l64-64L342.63 192l-64 64Z"></svg:path>`,
})
export class IonCloseCircleSharpIcon {
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
  selector: 'svg[ionCloseSharpIcon],svg[ion-close-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 145.49L366.51 112L256 222.51L145.49 112L112 145.49L222.51 256L112 366.51L145.49 400L256 289.49L366.51 400L400 366.51L289.49 256z"></svg:path>`,
})
export class IonCloseSharpIcon {
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
  selector: 'svg[ionCloudCircleSharpIcon],svg[ion-cloud-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m70 280H196c-33 0-60-23-60-56c0-34.21 26-53 56-56c7.28-23.9 29.5-48 64-48c36.5 0 67.55 27.23 72 72c21.49 1.12 48 14.09 48 44c0 30.28-22.5 44-50 44"></svg:path>`,
})
export class IonCloudCircleSharpIcon {
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
  selector: 'svg[ionCloudDoneSharpIcon],svg[ion-cloud-done-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.25 225.36c-6.52-41.18-24.05-76.4-51.11-102.46A153.57 153.57 0 0 0 256 80c-35.5 0-68.24 11.69-94.68 33.8a156.4 156.4 0 0 0-45.22 63.61c-30.26 4.81-57.45 17.18-77.38 35.37C13.39 235.88 0 267.42 0 304c0 36 14.38 68.88 40.49 92.59C65.64 419.43 99.56 432 136 432h260c32.37 0 60.23-8.57 80.59-24.77C499.76 388.78 512 361.39 512 328c0-61.85-48.44-95.34-97.75-102.64m-204.63 135l-69.22-76.7l23.76-21.44l44.62 49.46l106.29-126.2l24.47 20.61Z"></svg:path>`,
})
export class IonCloudDoneSharpIcon {
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
  selector: 'svg[ionCloudDownloadSharpIcon],svg[ion-cloud-download-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472.7 189.5c-15.76-10-36.21-16.79-58.59-19.54c-6.65-39.1-24.22-72.52-51.27-97.26C334.15 46.45 296.21 32 256 32c-35.35 0-68 11.08-94.37 32a149.7 149.7 0 0 0-45.29 60.42c-30.67 4.32-57 14.61-76.71 30C13.7 174.83 0 203.56 0 237.6C0 305 55.92 352 136 352h104V208h32v144h124c72.64 0 116-34.24 116-91.6c0-30.05-13.59-54.57-39.3-70.9M240 419.42L191.98 371l-22.61 23L256 480l86.63-86l-22.61-23L272 419.42V352h-32z"></svg:path>`,
})
export class IonCloudDownloadSharpIcon {
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
  selector: 'svg[ionCloudOfflineSharpIcon],svg[ion-cloud-offline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m41.37 64l22.628-22.628l406.629 406.63l-22.628 22.627zm-2.65 148.78C13.39 235.88 0 267.42 0 304c0 36 14.38 68.88 40.49 92.59C65.64 419.43 99.56 432 136 432h228.12L110.51 178.39c-28.01 5.39-53.09 17.33-71.79 34.39m437.87 194.45C499.76 388.78 512 361.39 512 328c0-61.85-48.44-95.34-97.75-102.64c-6.52-41.18-24.05-76.4-51.11-102.46A153.57 153.57 0 0 0 256 80c-30.47 0-58.9 8.62-83.07 25l302.82 302.86c.25-.21.57-.41.84-.63"></svg:path>`,
})
export class IonCloudOfflineSharpIcon {
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
  selector: 'svg[ionCloudSharpIcon],svg[ion-cloud-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M396 432H136c-36.44 0-70.36-12.57-95.51-35.41C14.38 372.88 0 340 0 304c0-36.58 13.39-68.12 38.72-91.22c19.93-18.19 47.12-30.56 77.38-35.37a156.4 156.4 0 0 1 45.22-63.61C187.76 91.69 220.5 80 256 80a153.57 153.57 0 0 1 107.14 42.9c27.06 26.06 44.59 61.28 51.11 102.46C463.56 232.66 512 266.15 512 328c0 33.39-12.24 60.78-35.41 79.23C456.23 423.43 428.37 432 396 432"></svg:path>`,
})
export class IonCloudSharpIcon {
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
  selector: 'svg[ionCloudUploadSharpIcon],svg[ion-cloud-upload-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M473.66 210c-16.56-12.3-37.7-20.75-59.52-24c-6.62-39.18-24.21-72.67-51.3-97.45c-28.69-26.3-66.63-40.76-106.84-40.76c-35.35 0-68 11.08-94.37 32.05a149.6 149.6 0 0 0-45.32 60.49c-29.94 4.6-57.12 16.68-77.39 34.55C13.46 197.33 0 227.24 0 261.39c0 34.52 14.49 66 40.79 88.76c25.12 21.69 58.94 33.64 95.21 33.64h104V230.42l-48 48l-22.63-22.63L256 169.17l86.63 86.62L320 278.42l-48-48v153.37h124c31.34 0 59.91-8.8 80.45-24.77c23.26-18.1 35.55-44 35.55-74.83c0-29.94-13.26-55.61-38.34-74.19M240 383.79h32v80.41h-32z"></svg:path>`,
})
export class IonCloudUploadSharpIcon {
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
  selector: 'svg[ionCloudyNightSharpIcon],svg[ion-cloudy-night-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-29.44 12.09-54.25 35-71.74c14.55-11.13 33.41-18.87 53.2-22c6.06-36.92 21.92-68.53 46.29-92A139.82 139.82 0 0 1 232 160c32.33 0 62.15 10.65 86.24 30.79a142.4 142.4 0 0 1 40.83 57.05c27.18 4.48 51.59 15.68 69.56 32.08C451.77 301 464 329.82 464 363.2c0 32.85-13.13 62.87-37 84.52c-22.89 20.82-53.8 32.28-87 32.28m41.55-260.07c26.5 6.93 50 19.32 68.65 36.34q3.89 3.56 7.47 7.34c25.41-18.4 45.47-44.92 54.33-71.38c-16.24 7.07-35.31 9.85-54.15 9.85c-73.42 0-115.93-42.51-115.93-115.93c0-18.84 2.78-37.91 9.85-54.15c-40.41 13.53-81 53.19-92.52 98.13a162.6 162.6 0 0 1 79.52 36.12a173 173 0 0 1 42.78 53.68"></svg:path>`,
})
export class IonCloudyNightSharpIcon {
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
  selector: 'svg[ionCloudySharpIcon],svg[ion-cloudy-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M376 432H116c-32.37 0-60.23-8.57-80.59-24.77C12.24 388.78 0 361.39 0 328c0-61.85 48.44-95.34 97.75-102.64c6.52-41.18 24-76.4 51.11-102.46A153.57 153.57 0 0 1 256 80c35.5 0 68.24 11.69 94.68 33.8a156.4 156.4 0 0 1 45.22 63.61c30.26 4.81 57.45 17.18 77.38 35.36C498.61 235.88 512 267.42 512 304c0 36-14.38 68.88-40.49 92.59C446.36 419.43 412.44 432 376 432"></svg:path>`,
})
export class IonCloudySharpIcon {
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
  selector: 'svg[ionCodeDownloadSharpIcon],svg[ion-code-download-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="42" d="M160 368L32 256l128-112m192 224l128-112l-128-112M192 288.1l64 63.9l64-63.9M256 160v176.03"></svg:path>`,
})
export class IonCodeDownloadSharpIcon {
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
  selector: 'svg[ionCodeSharpIcon],svg[ion-code-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161.98 397.63L0 256l161.98-141.63l27.65 31.61L64 256l125.63 110.02zm188.04 0l-27.65-31.61L448 256L322.37 145.98l27.65-31.61L512 256z"></svg:path>`,
})
export class IonCodeSharpIcon {
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
  selector: 'svg[ionCodeSlashSharpIcon],svg[ion-code-slash-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161.98 397.63L0 256l161.98-141.63l27.65 31.61L64 256l125.63 110.02zm188.04 0l-27.65-31.61L448 256L322.37 145.98l27.65-31.61L512 256zM222.15 442L182 430.08L289.85 70L330 81.92z"></svg:path>`,
})
export class IonCodeSlashSharpIcon {
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
  selector: 'svg[ionCodeWorkingSharpIcon],svg[ion-code-working-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="26" fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="10"></svg:circle><svg:circle cx="346" cy="256" r="26" fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="10"></svg:circle><svg:circle cx="166" cy="256" r="26" fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="42" d="M160 368L32 256l128-112m192 224l128-112l-128-112"></svg:path>`,
})
export class IonCodeWorkingSharpIcon {
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
  selector: 'svg[ionCogSharpIcon],svg[ion-cog-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 249.93a10.58 10.58 0 0 0-9.36-9.94L429 235.84a5.42 5.42 0 0 1-4.5-4.67c-.49-3.15-1-6.42-1.7-9.52a5.52 5.52 0 0 1 2.63-5.85l22.78-12.65a10.35 10.35 0 0 0 5-12.83l-3.95-10.9a10.32 10.32 0 0 0-12.13-6.51l-25.55 5a5.5 5.5 0 0 1-5.82-2.81c-1.49-2.79-3.11-5.63-4.8-8.42a5.6 5.6 0 0 1 .44-6.5l17-19.63a10.44 10.44 0 0 0 .39-13.77l-7.42-8.91a10.24 10.24 0 0 0-13.58-2l-22.37 13.43a5.39 5.39 0 0 1-6.39-.63c-2.47-2.17-4.95-4.26-7.37-6.19a5.45 5.45 0 0 1-1.72-6.21l9.26-24.4a10.35 10.35 0 0 0-4.31-13.07l-10.08-5.85a10.31 10.31 0 0 0-13.46 2.83L325 96.28a4.58 4.58 0 0 1-5.6 1.72c-.62-.25-5.77-2.36-9.78-3.7a5.42 5.42 0 0 1-3.74-5.23l.39-26.07a10.48 10.48 0 0 0-8.57-10.88l-11.45-2a10.45 10.45 0 0 0-11.75 7.17L266 82.1a5.42 5.42 0 0 1-5.36 3.65h-9.75a5.53 5.53 0 0 1-5.3-3.67l-8.46-24.67a10.46 10.46 0 0 0-11.77-7.25l-11.46 2a10.46 10.46 0 0 0-8.57 10.79l.4 26.16a5.45 5.45 0 0 1-3.86 5.25c-2.28.89-7.26 2.78-9.51 3.63c-2 .72-4.19-.07-6-2.1l-16.26-20A10.3 10.3 0 0 0 156.69 73l-10.06 5.83A10.36 10.36 0 0 0 142.31 92l9.25 24.34a5.54 5.54 0 0 1-1.7 6.23c-2.43 2-4.92 4-7.4 6.22a5.38 5.38 0 0 1-6.35.64L114 115.74a10.39 10.39 0 0 0-13.61 2l-7.4 8.9a10.32 10.32 0 0 0 .37 13.76l17.09 19.6a5.42 5.42 0 0 1 .45 6.45c-1.71 2.72-3.34 5.58-4.82 8.44a5.53 5.53 0 0 1-5.86 2.82l-25.51-4.93a10.34 10.34 0 0 0-12.14 6.51l-4 10.88a10.37 10.37 0 0 0 5 12.85l22.78 12.65a5.39 5.39 0 0 1 2.65 5.92l-.23 1.24c-.53 2.8-1 5.45-1.47 8.27a5.48 5.48 0 0 1-4.46 4.64l-25.7 4.15A10.42 10.42 0 0 0 48 250.16v11.58A10.26 10.26 0 0 0 57.16 272l25.68 4.14a5.41 5.41 0 0 1 4.5 4.67c.49 3.16 1 6.42 1.7 9.52a5.52 5.52 0 0 1-2.63 5.85l-22.77 12.67a10.35 10.35 0 0 0-5 12.83l4 10.9a10.33 10.33 0 0 0 12.13 6.51l25.55-4.95a5.5 5.5 0 0 1 5.82 2.81c1.5 2.8 3.12 5.64 4.8 8.42a5.58 5.58 0 0 1-.44 6.5l-17 19.64a10.41 10.41 0 0 0-.5 13.76l7.41 8.91a10.24 10.24 0 0 0 13.58 2l22.37-13.43a5.39 5.39 0 0 1 6.39.63c2.48 2.17 5 4.26 7.37 6.19a5.45 5.45 0 0 1 1.72 6.21l-9.26 24.4a10.35 10.35 0 0 0 4.31 13.07l10.11 5.84a10.3 10.3 0 0 0 13.45-2.82L187 415.92c1.39-1.73 3.6-2.5 5.24-1.84c3.47 1.44 5.8 2.25 9.93 3.63a5.44 5.44 0 0 1 3.75 5.23l-.4 26.05a10.5 10.5 0 0 0 8.57 10.88l11.45 2a10.44 10.44 0 0 0 11.75-7.17l8.5-24.77a5.48 5.48 0 0 1 5.36-3.65h9.75a5.52 5.52 0 0 1 5.3 3.67l8.47 24.67a10.48 10.48 0 0 0 10 7.41a9.7 9.7 0 0 0 1.78-.16l11.47-2a10.46 10.46 0 0 0 8.56-10.79l-.4-26.16a5.43 5.43 0 0 1 3.75-5.2c3.84-1.29 6.53-2.33 8.91-3.24l.6-.24c3.06-1.06 4.53.14 5.47 1.31l16.75 20.63A10.3 10.3 0 0 0 355 439l10.07-5.83a10.35 10.35 0 0 0 4.31-13.1l-9.24-24.34a5.52 5.52 0 0 1 1.69-6.23c2.43-2 4.92-4 7.4-6.22a5.39 5.39 0 0 1 6.38-.62l22.39 13.4a10.39 10.39 0 0 0 13.61-2l7.4-8.9a10.31 10.31 0 0 0-.37-13.75l-17.06-19.67a5.42 5.42 0 0 1-.45-6.45c1.71-2.71 3.34-5.57 4.82-8.44a5.56 5.56 0 0 1 5.86-2.82l25.48 4.97a10.34 10.34 0 0 0 12.14-6.51l3.95-10.88a10.36 10.36 0 0 0-5-12.84l-22.8-12.67a5.4 5.4 0 0 1-2.61-5.89l.23-1.25c.53-2.8 1-5.44 1.47-8.26a5.48 5.48 0 0 1 4.46-4.64l25.7-4.14a10.43 10.43 0 0 0 9.17-10.28zM171.59 361.27a135.12 135.12 0 0 1 .5-210.94l60 105.61ZM256 391.11a133.8 133.8 0 0 1-48.49-9.05L268 276.79h121.22C379.21 341.45 323.29 391.11 256 391.11m12.06-155.9l-59.95-105.5a133.9 133.9 0 0 1 47.89-8.82c67.29 0 123.21 49.66 133.22 114.32Z"></svg:path>`,
})
export class IonCogSharpIcon {
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
  selector: 'svg[ionColorFillSharpIcon],svg[ion-color-fill-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 320s-64 48-64 99.84c0 33.28 28.67 60.16 64 60.16s64-27 64-60.16C480 368 416 320 416 320M144 32l-76 76l70 70L32 280l176 184l152.8-148.3L416 304Zm24 116l-39.6-41l15.88-15.89L184 132Z"></svg:path>`,
})
export class IonColorFillSharpIcon {
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
  selector: 'svg[ionColorFilterSharpIcon],svg[ion-color-filter-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 185a167.85 167.85 0 0 1 134.9-18.28C382.36 99.83 325.12 48 256 48S129.64 99.83 121.1 166.67A167.85 167.85 0 0 1 256 185m80 146.73a167.5 167.5 0 0 1-52.37 118.08A135 135 0 0 0 344 464c75 0 136-61 136-136a136 136 0 0 0-59.06-112.08A168.53 168.53 0 0 1 336 331.73m-52.42-125.54a167.87 167.87 0 0 1 49.36 89.89a136.14 136.14 0 0 0 58.06-95.7a135.87 135.87 0 0 0-107.43 5.81ZM176.05 331.73a168.53 168.53 0 0 1-85-115.81A136 136 0 0 0 32 328c0 75 61 136 136 136a135 135 0 0 0 60.42-14.19a167.5 167.5 0 0 1-52.37-118.08m3.01-35.65a167.87 167.87 0 0 1 49.36-89.89A135.87 135.87 0 0 0 121 200.38a136.14 136.14 0 0 0 58.06 95.7m123.84 49.25a168.2 168.2 0 0 1-93.8 0A135.9 135.9 0 0 0 256 431.6a135.9 135.9 0 0 0 46.9-86.27M209 311.62a136 136 0 0 0 94 0a135.93 135.93 0 0 0-47-87.22a135.93 135.93 0 0 0-47 87.22"></svg:path>`,
})
export class IonColorFilterSharpIcon {
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
  selector: 'svg[ionColorPaletteSharpIcon],svg[ion-color-palette-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 352c-12.6-.84-21-4-28-12c-14-16-14-36 5.49-52.48l32.82-29.14c50.27-44.41 50.27-117.21 0-161.63C389.26 64.14 339.54 48 287.86 48c-60.34 0-123.39 22-172 65.11c-90.46 80-90.46 210.92 0 290.87c45 39.76 105.63 59.59 165.64 60h1.84c60 0 119.07-19.5 161.2-56.77C464 390 464 385 444.62 355.56C440 348 431 353 416 352M112 208a32 32 0 1 1 32 32a32 32 0 0 1-32-32m40 135a32 32 0 1 1 32-32a32 32 0 0 1-32 32m40-199a32 32 0 1 1 32 32a32 32 0 0 1-32-32m64 271a48 48 0 1 1 48-48a48 48 0 0 1-48 48m72-239a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonColorPaletteSharpIcon {
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
  selector: 'svg[ionColorWandSharpIcon],svg[ion-color-wand-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m133.441 200.647l67.197-67.196l78.142 78.142l-67.196 67.197zM301.41 234.21l-67.19 67.2L412 480l68-68zM32 176h80v32H32zm35.624-85.75L90.25 67.622l56.569 56.569l-22.628 22.627zM176 32h32v80h-32zm61.32 92.195l56.569-56.569l22.627 22.627l-56.568 56.569zM67.62 293.886l56.569-56.568l22.627 22.627l-56.568 56.569z"></svg:path>`,
})
export class IonColorWandSharpIcon {
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
  selector: 'svg[ionCompassSharpIcon],svg[ion-compass-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="24" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m48 256l-160 64l64-160l160-64Z"></svg:path>`,
})
export class IonCompassSharpIcon {
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
  selector: 'svg[ionConstructSharpIcon],svg[ion-construct-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m497.14 111.38l-81.09 80.84l-48.58-48.41L448.56 63c-45.22-22-108.65-22.09-146.2 15.35c-35.32 35.2-39.73 90.61-22.54 134.2L99.57 391.37a12 12 0 0 0 0 17l52.27 52.11a12 12 0 0 0 17 0l180-180.5c43.16 16.21 98 11.64 132.74-23c37.5-37.45 37.42-100.34 15.56-145.6"></svg:path><svg:path fill="currentColor" d="m365.45 308.62l-71.83 72l75.53 79.92a10.88 10.88 0 0 0 15.65.21l60-60.46a11 11 0 0 0-.24-15.69ZM119 212c0-4.87-4-9.33-7.45-12.78l-.25-.24l-1.54-1.47a1.06 1.06 0 0 1-.26-.8a16.16 16.16 0 0 1 9.52-2c1.27.13 5.91.9 12.4 4.91c3.38 2.09 32.63 30.23 43.93 40.7a11 11 0 0 0 .14 15.35l7.43 7.86l65.66-65.17l-8.25-7.84a10.87 10.87 0 0 0-15.31-.06c-23-24.68-29-35.45-31-42.45c-4.42-15.47 4.14-28 14-36c5.84-4.62 17.88-8.08 29-9a52.7 52.7 0 0 1 11.61.6c3.47.5 6.3 1.14 7.39 1.4a68.5 68.5 0 0 1 11 4l12-19a88.4 88.4 0 0 0-13.4-17.7a115 115 0 0 0-5.19-5.1c-7.78-7.15-28-19.2-54.59-19.2a117.4 117.4 0 0 0-44.77 8.82c-37.44 15.34-61.88 36.25-73.11 47.35l-.07.07A219.6 219.6 0 0 0 67 128.56c-5.35 7.53-4.77 15.84-4.38 21.34c0 .32 0 .67.07 1a18.4 18.4 0 0 0-10.78-3.5A18 18 0 0 0 39 152.73L2 189.62a6.79 6.79 0 0 0 0 9.6L65 262a6.72 6.72 0 0 0 9.5 0l37.06-37c3.44-3.44 7.44-8.14 7.44-13"></svg:path>`,
})
export class IonConstructSharpIcon {
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
  selector: 'svg[ionContractSharpIcon],svg[ion-contract-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M304 416V304h112m-101.8 10.23L432 432M208 96v112H96m101.8-10.23L80 80m336 128H304V96m10.23 101.8L432 80M96 304h112v112m-10.23-101.8L80 432"></svg:path>`,
})
export class IonContractSharpIcon {
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
  selector: 'svg[ionContrastSharpIcon],svg[ion-contrast-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224s224-100.29 224-224S379.71 32 256 32M128.72 383.28A180 180 0 0 1 256 76v360a178.82 178.82 0 0 1-127.28-52.72"></svg:path>`,
})
export class IonContrastSharpIcon {
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
  selector: 'svg[ionCopySharpIcon],svg[ion-copy-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M456 480H136a24 24 0 0 1-24-24V128a16 16 0 0 1 16-16h328a24 24 0 0 1 24 24v320a24 24 0 0 1-24 24"></svg:path><svg:path fill="currentColor" d="M112 80h288V56a24 24 0 0 0-24-24H60a28 28 0 0 0-28 28v316a24 24 0 0 0 24 24h24V112a32 32 0 0 1 32-32"></svg:path>`,
})
export class IonCopySharpIcon {
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
  selector: 'svg[ionCreateSharpIcon],svg[ion-create-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464.37 49.2a22.07 22.07 0 0 0-31.88-.76l-18.31 18.25l31.18 31.1l18-17.91a22.16 22.16 0 0 0 1.01-30.68M252.76 336H176v-76.76l9.4-9.38L323.54 112H48v352h352V188.46L262.14 326.6zM400 143.16l32.79-32.86l-31.09-31.09L368.85 112H400z"></svg:path><svg:path fill="currentColor" d="M208 304h31.49L400 143.16V112h-31.15L208 272.51z"></svg:path>`,
})
export class IonCreateSharpIcon {
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
  selector: 'svg[ionCropSharpIcon],svg[ion-crop-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 346V32h-44v90H32v44h90v224h224v90h44v-90h90v-44z"></svg:path><svg:path fill="currentColor" d="M346 320h44V122H192v44h154z"></svg:path>`,
})
export class IonCropSharpIcon {
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
  selector: 'svg[ionCubeSharpIcon],svg[ion-cube-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 170v196.92L240 480V284zm224 310l192-113.08V170L272 284Zm176-336L256 32L64 144l192 112z"></svg:path>`,
})
export class IonCubeSharpIcon {
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
  selector: 'svg[ionCutSharpIcon],svg[ion-cut-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 128h-48l-198.94 70.46l-59.13-31.59a72.16 72.16 0 1 0-25.69 41.47l52.2 31.72L192 277l-43.64 26.76a71.74 71.74 0 1 0 24.79 38L480 160Zm-376.52 64a40 40 0 1 1 40-40a40 40 0 0 1-40 40m0 208a40 40 0 1 1 40-40a40 40 0 0 1-40 40m152-144a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path><svg:path fill="currentColor" d="m343.79 259.87l-83.74 48.18L432 368h47.99l.01-32z"></svg:path>`,
})
export class IonCutSharpIcon {
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
  selector: 'svg[ionDesktopSharpIcon],svg[ion-desktop-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 48H32a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h168v32h-72v32h256v-32h-72v-32h168a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-20 36v216H52V84ZM240.13 354.08a16 16 0 1 1 13.79 13.79a16 16 0 0 1-13.79-13.79"></svg:path>`,
})
export class IonDesktopSharpIcon {
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
  selector: 'svg[ionDiamondSharpIcon],svg[ion-diamond-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M396.31 32H264l84.19 112.26zm-280.62 0l48.12 112.26L248 32zM256 74.67L192 160h128zm166.95-23.61L376.26 160H488zm-333.9 0L23 160h112.74zM146.68 192H24l222.8 288h.53zm218.64 0L264.67 480h.53L488 192zm-35.93 0H182.61L256 400z"></svg:path>`,
})
export class IonDiamondSharpIcon {
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
  selector: 'svg[ionDiceSharpIcon],svg[ion-dice-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 366.92L240 480V284L48 170ZM192 288c8.84 0 16 10.75 16 24s-7.16 24-16 24s-16-10.75-16-24s7.16-24 16-24m-96 32c8.84 0 16 10.75 16 24s-7.16 24-16 24s-16-10.75-16-24s7.16-24 16-24m176-36v196l192-113.08V170Zm48 140c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m96 32c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24M256 32L64 144l192 112l192-112Zm0 120c-13.25 0-24-7.16-24-16s10.75-16 24-16s24 7.16 24 16s-10.75 16-24 16"></svg:path>`,
})
export class IonDiceSharpIcon {
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
  selector: 'svg[ionDiscSharpIcon],svg[ion-disc-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="32" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M256 336a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80"></svg:path>`,
})
export class IonDiscSharpIcon {
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
  selector: 'svg[ionDocumentAttachSharpIcon],svg[ion-document-attach-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M280 240a8 8 0 0 1-8-8V48h-57.25a65.4 65.4 0 0 0-6.5-9.81C196.72 23.88 179.59 16 160 16c-37.68 0-64 29.61-64 72v144c0 25 20.34 40 40 40a39.57 39.57 0 0 0 40-40V80h-32v152a7.75 7.75 0 0 1-8 8c-2.23 0-8-1.44-8-8V88c0-19.34 8.41-40 32-40c29.69 0 32 30.15 32 39.38v138.75c0 17.45-5.47 33.23-15.41 44.46C166.5 282 152.47 288 136 288s-30.5-6-40.59-17.41C85.47 259.36 80 243.58 80 226.13V144H48v82.13c0 51.51 33.19 89.63 80 93.53V468a12 12 0 0 0 12 12h312a12 12 0 0 0 12-12V240Z"></svg:path><svg:path fill="currentColor" d="M308 208h146.31a2 2 0 0 0 1.42-3.41L307.41 56.27a2 2 0 0 0-3.41 1.42V204a4 4 0 0 0 4 4"></svg:path>`,
})
export class IonDocumentAttachSharpIcon {
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
  selector: 'svg[ionDocumentLockSharpIcon],svg[ion-document-lock-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M276 192h146.31a2 2 0 0 0 1.42-3.41L275.41 40.27a2 2 0 0 0-3.41 1.42V188a4 4 0 0 0 4 4m-20 80c-8.82 0-16 6.28-16 14v18h32v-18c0-7.72-7.18-14-16-14"></svg:path><svg:path fill="currentColor" d="M248 224a8 8 0 0 1-8-8V32H92a12 12 0 0 0-12 12v424a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V224Zm88 175.91A16.1 16.1 0 0 1 319.91 416H192.09A16.1 16.1 0 0 1 176 399.91V320c0-10 7-16 16-16h16v-18c0-25.36 21.53-46 48-46s48 20.64 48 46v18h16a15.8 15.8 0 0 1 16 16Z"></svg:path>`,
})
export class IonDocumentLockSharpIcon {
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
