import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdPaperIcon],svg[ion-md-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M464 64H192c-8.8 0-16 7.7-16 16.5V112H74c-23.1 0-42 18.9-42 42v207.5c0 47.6 39 86.5 86 86.5h279.7c45.1 0 82.3-36.9 82.3-82V80c0-8.8-7.2-16-16-16zm-288 80v192h-42V163.2c0-6.8-.8-13.3-3.3-19.2H176zm-17 255.4C148 410 133.2 416 118.5 416c-14.5 0-28.1-5.7-38.5-16-10.3-10.3-16-24-16-38.5V163.2c0-10.6 8.4-19.2 19-19.2s19 8.6 19 19.2V352c0 8.8 7.2 16 16 16h57.5c-1.5 11.6-7.2 22.6-16.5 31.4zM448 366c0 13.3-5.4 25.8-14.9 35.3-9.5 9.5-22.2 14.7-35.4 14.7H187.3c12.8-14.9 20.7-33.9 20.7-54.5V97h240v269z" fill="currentColor"></svg:path><svg:path d="M248 136h160v56H248z" fill="currentColor"></svg:path><svg:path d="M248 224h160v32H248z" fill="currentColor"></svg:path><svg:path d="M248 288h160v32H248z" fill="currentColor"></svg:path><svg:path d="M408 352H248s0 32-8 32h148.7c19.3 0 19.3-21 19.3-32z" fill="currentColor"></svg:path>`,
})
export class IonMdPaperIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPaperPlaneIcon],svg[ion-md-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M48 270.9l118.9 44.6L181.7 464 256 360l104 104L464 48 48 270.9zm294.9 126L260 313.4 374.9 152 193.6 289.8 124.9 265l291-156.2-73 288.1z" fill="currentColor"></svg:path>`,
})
export class IonMdPaperPlaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPartlySunnyIcon],svg[ion-md-partly-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M248.03 116.81l24.679-24.678 19.233 19.234-24.678 24.677z" fill="currentColor"></svg:path><svg:path d="M176 125.7c-45.3 0-82.3 37-82.3 82.3 0 17.5 5.5 33.7 14.9 47 15.3-13 33.9-22.6 54.7-27.6l13.2-16.6c13.6-17.1 30.7-30.2 50.8-38.9 6.1-2.6 12.4-4.8 19-6.6-14.5-23.7-40.6-39.6-70.3-39.6z" fill="currentColor"></svg:path><svg:path d="M162 64h28v41h-28z" fill="currentColor"></svg:path><svg:path d="M32 194h41v28H32z" fill="currentColor"></svg:path><svg:path d="M81.6 276.8l-.8-.8-24.7 24.7 19.2 19.2 24.7-24.7z" fill="currentColor"></svg:path><svg:path d="M79.289 92.13l24.678 24.678-19.233 19.233-24.678-24.678z" fill="currentColor"></svg:path><svg:path d="M405.6 288.6C394.7 233.4 346.2 192 288 192c-34 0-65.1 11.9-86.5 38.8 29.4 2.2 56.7 13 77.8 33.9 15.6 15.6 26.6 34.6 32.1 55.3h-28.7c-13.1-37.3-48-64-90.6-64-5.1 0-12.3.6-17.7 1.7C128.6 267.1 96 305 96 352c0 53 43 96 96 96h208c44.2 0 80-35.8 80-80 0-42.2-32.8-76.5-74.4-79.4z" fill="currentColor"></svg:path>`,
})
export class IonMdPartlySunnyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPauseIcon],svg[ion-md-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 448h106.7V64H96v384zM309.3 64v384H416V64H309.3z" fill="currentColor"></svg:path>`,
})
export class IonMdPauseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPawIcon],svg[ion-md-paw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M459.5 165.9c-4.7-10.5-12.7-18.1-23.1-22-4.8-1.7-9.7-2.6-14.8-2.6-21.7 0-43.7 16.7-54.9 41.6-13.8 30.9-5.8 61 18.6 70.3 4.9 1.8 10.1 2.8 15.6 2.8 22.1 0 44.6-15.3 55.9-38.1 8.5-17.5 9.5-36.8 2.7-52z" fill="currentColor"></svg:path><svg:path d="M145.3 182.8c-11.1-24.9-33.2-41.6-54.9-41.6-5.1 0-10.1.9-14.8 2.6-10.4 3.9-18.3 11.5-23.1 22-6.9 15.2-5.9 34.6 2.7 51.9 11.3 22.8 33.8 38.1 55.9 38.1 5.4 0 10.7-.9 15.6-2.8 24.4-9.1 32.4-39.3 18.6-70.2z" fill="currentColor"></svg:path><svg:path d="M193.5 179.4c2 .1 4 0 6-.2 11.7-.9 22.3-5.9 30.6-14.3 13.4-13.6 17.1-34.9 14.3-56.8-4.3-33.7-25.8-59-54.8-60.1 0 0-4.1 0-6.2.2-12.8 1.1-24.4 6.5-33.5 15.9-13.3 13.6-19.7 33.7-17.1 53.8 4.3 33.4 30.9 60.4 60.7 61.5z" fill="currentColor"></svg:path><svg:path d="M256 224c-69.3 0-138.7 97.1-138.7 176.3 0 23.6 11.8 42.6 23.5 50.4 14.4 9.6 24.5 13.4 45.5 13.4 13.4 0 21.6-2.5 28.1-6.1 12.3-6.7 25.9-10.4 39.9-10.4h3.5c14 0 27.6 3.8 39.9 10.4 6.5 3.5 14.7 6.1 28.1 6.1 21.1 0 31.2-3.8 45.5-13.4 11.6-7.8 23.5-26.8 23.5-50.4C394.7 321 325.3 224 256 224z" fill="currentColor"></svg:path><svg:path d="M312.6 179.1c2 .2 4 .2 6 .2 29.8-1.1 56.5-28 60.8-61.5 2.6-20.2-3.8-40.4-17.1-53.8-9.2-9.3-20.3-14.6-33.1-15.6-2.1-.2-6.7-.2-6.7-.2-28.9 1.1-50.4 26.1-54.8 59.9-2.8 21.9.9 43.3 14.3 56.8 8.4 8.3 19 13.2 30.6 14.2z" fill="currentColor"></svg:path>`,
})
export class IonMdPawIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPeopleIcon],svg[ion-md-people-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M337.454 232c33.599 0 61.092-27.002 61.092-60 0-32.997-27.493-60-61.092-60s-61.09 27.003-61.09 60c0 32.998 27.491 60 61.09 60zm-162.908 0c33.599 0 61.09-27.002 61.09-60 0-32.997-27.491-60-61.09-60s-61.092 27.003-61.092 60c0 32.998 27.493 60 61.092 60zm0 44C126.688 276 32 298.998 32 346v54h288v-54c0-47.002-97.599-70-145.454-70zm162.908 11.003c-6.105 0-10.325 0-17.454.997 23.426 17.002 32 28 32 58v54h128v-54c0-47.002-94.688-58.997-142.546-58.997z" fill="currentColor"></svg:path>`,
})
export class IonMdPeopleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPersonIcon],svg[ion-md-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z" fill="currentColor"></svg:path>`,
})
export class IonMdPersonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPersonAddIcon],svg[ion-md-person-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M304 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z" fill="currentColor"></svg:path><svg:path d="M112 224v-64H80v64H16v32h64v64h32v-64h64v-32h-64z" fill="currentColor"></svg:path>`,
})
export class IonMdPersonAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPhoneLandscapeIcon],svg[ion-md-phone-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 358.856V153.143C480 130.512 461.674 112 439.272 112H72.728C50.326 112 32 130.512 32 153.143v205.713C32 381.488 50.326 400 72.728 400h366.545C461.674 400 480 381.488 480 358.856zM112 364V148h288v216H112z" fill="currentColor"></svg:path>`,
})
export class IonMdPhoneLandscapeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPhonePortraitIcon],svg[ion-md-phone-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M358.856 32H153.143C130.512 32 112 50.326 112 72.728v366.545C112 461.674 130.512 480 153.143 480h205.713C381.488 480 400 461.674 400 439.272V72.728C400 50.326 381.488 32 358.856 32zM364 400H148V112h216v288z" fill="currentColor"></svg:path>`,
})
export class IonMdPhonePortraitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPhotosIcon],svg[ion-md-photos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M400 421.3V154.7c0-23.5-19.2-42.7-42.7-42.7H90.7C67.2 112 48 131.2 48 154.7v266.7c0 23.5 19.2 42.7 42.7 42.7h266.7c23.4-.1 42.6-19.3 42.6-42.8zM157.3 304l45.3 64 66.7-96 88 128H90.7l66.6-96z" fill="currentColor"></svg:path><svg:path d="M421.3 48H154.7C131.2 48 112 67.2 112 90.7V96h261.3c23.5 0 42.7 19.2 42.7 42.7V400h5.3c23.5 0 42.7-19.2 42.7-42.7V90.7c0-23.5-19.2-42.7-42.7-42.7z" fill="currentColor"></svg:path>`,
})
export class IonMdPhotosIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPieIcon],svg[ion-md-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32.6 256H256V32.6c-5-.4-10.6-.6-16-.6-114.9 0-208 93.1-208 208 0 5.4.2 11 .6 16z" fill="currentColor"></svg:path><svg:path d="M109.8 402.2C147.9 449.6 206.4 480 272 480c114.9 0 208-93.1 208-208 0-65.6-30.4-124.1-77.8-162.2C370.5 84.3 331 67.9 288 64.6V288H64.6c3.3 43 19.7 82.5 45.2 114.2z" fill="currentColor"></svg:path>`,
})
export class IonMdPieIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPinIcon],svg[ion-md-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" fill="currentColor"></svg:path>`,
})
export class IonMdPinIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPintIcon],svg[ion-md-pint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 48l42.9 379.2c2.6 20.8 20.5 36.8 42.5 36.8h213.3c22 0 39.9-16 42.5-36.8L448 48H64zm327 124.8H121l-9.4-83.2h288.6l-9.2 83.2z" fill="currentColor"></svg:path>`,
})
export class IonMdPintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPizzaIcon],svg[ion-md-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M407.2 130.4C360.7 111.5 309.8 102 256 102c-53.9 0-108.3 10.3-151.2 28-8.1 3.3-15.3 9-10.1 19.5S255.9 480 255.9 480l161-329.9c3.2-6.9.9-15.4-9.7-19.7zm-221 73.6c-18.7 0-32-14.3-32-32s13.3-32 32-32 32 14.3 32 32-13.3 32-32 32zM256 347c-18.7 0-32-14.3-32-32s13.3-32 32-32 32 14.3 32 32-13.3 32-32 32zm69.8-123c-18.7 0-32-14.3-32-32s13.3-32 32-32 32 14.3 32 32-13.3 32-32 32z" fill="currentColor"></svg:path><svg:path d="M436.9 66C384.7 45.4 320.3 32 256 32c-64.3 0-127.6 12.1-180.9 33.4C70.4 67.3 64 71 64 79.2l9.7 24.1c2.8 4.9 8.7 8.2 15.1 8.2 1.8 0 4.3-.3 7.3-1.5 49-18.9 103.1-29.6 160-29.6 56.9 0 115.2 11.6 160 29.6 3.6 1.4 5.6 1.5 7.3 1.5 6.6 0 12.2-3.3 15-8.1l9.8-24.1c-.2-7.3-5-10.8-11.3-13.3z" fill="currentColor"></svg:path>`,
})
export class IonMdPizzaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPlanetIcon],svg[ion-md-planet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M135.7 151c-2.5 3-4.9 6-7.2 9.2 32.2 36.3 76.1 76.5 124.2 113.7 37.8 29.2 76.3 55.2 111.4 75.1 5.9 3.3 11.7 6.5 17.3 9.4 2.5-3 4.9-6 7.2-9.2 11.7-16.1 18.1-33.2 23.3-53.6.8-3.2 1.5-6.4 2.1-9.5 15.8-83-35.6-164.9-118.5-185.9-37-9.4-74.1-5.1-106.3 9.7-21.4 9.9-38.2 22.9-53.5 41.1z" fill="currentColor"></svg:path><svg:path d="M418.2 326.8c-4.1 11-7.4 17.5-7.4 17.5 18.2 21.1 24.6 33.9 31.9 46.4 2.4 4.1 7.4 13.1.9 12.4-1.7-.3-3.5-.7-5.5-1.3-21.3-5.4-51.2-18.7-84.3-37.4-35.8-20.3-74.9-46.7-113.3-76.3-51.1-39.5-97.5-82.3-130.6-120.5-15.3-17.6-27.6-34.2-35.7-47.9-2.4-4.1-3.9-6.3-5.6-10.4-2.5-6.2 5-5.1 7-4.6 14.9 3.8 35 9.9 58.2 23.8 0 0 4.3-4.8 13.9-11.4-22.8-15.4-44.6-27.7-65.2-35.5-23.1-8.8-41.1-6.8-47.5 3.7-12.2 19.9 14 72.3 65.3 132-21.5 86 30.6 173.3 116.5 195 41.1 10.4 82.4 3.9 116.8-15 38.1 17.6 72.1 28.6 96.9 34.9 23.9 6.1 40.4 5.5 46.8-4.9 11.1-18.2-12.1-51.8-59.1-100.5z" fill="currentColor"></svg:path>`,
})
export class IonMdPlanetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPlayIcon],svg[ion-md-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 52v408l320-204L96 52z" fill="currentColor"></svg:path>`,
})
export class IonMdPlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPlayCircleIcon],svg[ion-md-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm-41.6 301.6V162.4L339.2 256l-124.8 93.6z" fill="currentColor"></svg:path>`,
})
export class IonMdPlayCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPodiumIcon],svg[ion-md-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 224h128v192H32z" fill="currentColor"></svg:path><svg:path d="M192 128h128v288H192z" fill="currentColor"></svg:path><svg:path d="M352 288h128v128H352z" fill="currentColor"></svg:path>`,
})
export class IonMdPodiumIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPowerIcon],svg[ion-md-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M279.1 48h-46.2v231.1h46.2V48zm111.6 50.2L357.9 131c36.5 29.4 59.9 74.4 59.9 125 0 89.4-72.3 161.8-161.8 161.8S94.2 345.4 94.2 256c0-50.6 23.3-95.7 59.6-125.3l-32.6-32.6C76.4 136.3 48 192.7 48 256c0 114.9 93.1 208 208 208s208-93.1 208-208c0-63.3-28.4-119.7-73.3-157.8z" fill="currentColor"></svg:path>`,
})
export class IonMdPowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPricetagIcon],svg[ion-md-pricetag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 64H257.6L76.5 251.6c-8 8-12.3 18.5-12.5 29-.3 11.3 3.9 22.6 12.5 31.2l123.7 123.6c8 8 20.8 12.5 28.8 12.5s22.8-3.9 31.4-12.5L448 256V96l-32-32zm-30.7 102.7c-21.7 6.1-41.3-10-41.3-30.7 0-17.7 14.3-32 32-32 20.7 0 36.8 19.6 30.7 41.3-2.9 10.3-11.1 18.5-21.4 21.4z" fill="currentColor"></svg:path>`,
})
export class IonMdPricetagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPricetagsIcon],svg[ion-md-pricetags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M442 107v141L229.2 451.7c8 8 20.8 12.3 28.8 12.3s22.8-3.7 31.4-12.3L480 272V144l-38-37z" fill="currentColor"></svg:path><svg:path d="M384 48H224L44.3 235.6c-8 8-12 17.8-12.3 28.4-.3 11.3 3.7 23.3 12.3 31.9l123.8 123.6c8 8 20.8 12.5 28.8 12.5s22.7-3.9 31.3-12.5L416 240V80l-32-32zm-30.7 102.7c-21.7 6.1-41.3-10-41.3-30.7 0-17.7 14.3-32 32-32 20.7 0 36.8 19.6 30.7 41.3-2.9 10.3-11.1 18.5-21.4 21.4z" fill="currentColor"></svg:path>`,
})
export class IonMdPricetagsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPrintIcon],svg[ion-md-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M399.95 160h-287.9C76.824 160 48 188.803 48 224v138.667h79.899V448H384.1v-85.333H464V224c0-35.197-28.825-64-64.05-64zM352 416H160V288h192v128zm32.101-352H127.899v80H384.1V64z" fill="currentColor"></svg:path>`,
})
export class IonMdPrintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPulseIcon],svg[ion-md-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M428 269c-21.5 0-40.6 13.1-48.4 33h-41.2L307 221.3c-2.7-8.2-10.3-13.7-19-13.7h-.4c-8.8.2-16.4 6-18.8 14.5l-33.6 135.4-55.5-291.8C178 55.6 169.6 48 160 48c-9.5 0-16.9 6.2-19.4 16.2L90.3 302H32v40h74c9.2 0 17.2-6.2 19.4-15.2l30.7-160.6 54.1 282.1c1.5 8.8 8.9 15.1 18.6 15.7h1.2c9.3 0 16.9-5.3 19.2-13.5l40.2-162.9 15.5 40.7c2.7 8.2 10.3 13.7 19 13.7h56.4c8.3 19 27.1 31 47.6 31 13.9 0 26.9-5.6 36.8-15.8 9.8-10.1 15.2-23.3 15.2-37.2.1-28.6-22.7-51-51.9-51z" fill="currentColor"></svg:path>`,
})
export class IonMdPulseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdQrScannerIcon],svg[ion-md-qr-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 124.2c0-6.9 5.2-12.2 12.2-12.2H176V64h-66.8C75.7 64 48 90.7 48 124.2V192h48v-67.8z" fill="currentColor"></svg:path><svg:path d="M403.6 64H336v48h67.2c6.9 0 12.8 5.2 12.8 12.2V192h48v-67.8c0-33.5-27-60.2-60.4-60.2z" fill="currentColor"></svg:path><svg:path d="M416 386.8c0 6.9-5.2 12.2-12.2 12.2H336v49h67.8c33.5 0 60.2-27.7 60.2-61.2V320h-48v66.8z" fill="currentColor"></svg:path><svg:path d="M108.2 399c-6.9 0-12.2-5.2-12.2-12.2V320H48v66.8c0 33.5 27.7 61.2 61.2 61.2H176v-49h-67.8z" fill="currentColor"></svg:path>`,
})
export class IonMdQrScannerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdQuoteIcon],svg[ion-md-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96.4 416h77.1l50.9-96.6V96h-160v223.4h77.1L96.4 416zm224 0h77.1l50-96.6V96H288.4v223.4h82l-50 96.6z" fill="currentColor"></svg:path>`,
})
export class IonMdQuoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRadioIcon],svg[ion-md-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M73.8 141.9c-15.2 6-25.8 21.8-25.8 39.5v256c0 23.5 18.5 42.7 41.6 42.7h332.8c23.1 0 41.6-19.2 41.6-42.7v-256c0-23.7-18.5-42.7-41.6-42.7H179l171.8-71.3L336.7 32 73.8 141.9zM160 438c-35.4 0-64-28.6-64-64s28.6-64 64-64 64 28.6 64 64-28.6 64-64 64zm256-171.3h-32v-46.2h-44.8v46.2H96v-85.3h320v85.3z" fill="currentColor"></svg:path>`,
})
export class IonMdRadioIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRadioButtonOffIcon],svg[ion-md-radio-button-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z" fill="currentColor"></svg:path>`,
})
export class IonMdRadioButtonOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRadioButtonOnIcon],svg[ion-md-radio-button-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z" fill="currentColor"></svg:path>`,
})
export class IonMdRadioButtonOnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRainyIcon],svg[ion-md-rainy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M139 400s-23 25.3-23 40.7c0 12.8 10.3 23.3 23 23.3s23-10.5 23-23.3c0-15.4-23-40.7-23-40.7z" fill="currentColor"></svg:path><svg:path d="M217 368s-23 25.3-23 40.7c0 12.8 10.4 23.3 23 23.3 12.7 0 23-10.5 23-23.3 0-15.4-23-40.7-23-40.7z" fill="currentColor"></svg:path><svg:path d="M295 400s-23 25.3-23 40.7c0 12.8 10.3 23.3 23 23.3 12.6 0 23-10.5 23-23.3 0-15.4-23-40.7-23-40.7z" fill="currentColor"></svg:path><svg:path d="M373 368s-23 25.3-23 40.7c0 12.8 10.4 23.3 23 23.3 12.7 0 23-10.5 23-23.3 0-15.4-23-40.7-23-40.7z" fill="currentColor"></svg:path><svg:path d="M393.2 161.2C380.5 96.6 323.9 48 256 48c-39.7 0-76 14-100.9 45.4 34.3 2.6 66.1 15.2 90.7 39.8 18.2 18.2 31 40.5 37.4 64.8h-33.5c-15.3-43.7-56-75-105.7-75-6 0-14.3.7-20.6 2C70 136 32 180.4 32 235.5 32 297.6 79.4 352 141.2 352h242.7c51.5 0 96.2-46 96.2-97.8-.1-49.4-38.4-89.6-86.9-93z" fill="currentColor"></svg:path>`,
})
export class IonMdRainyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRecordingIcon],svg[ion-md-recording-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M369.8 160c-53.4 0-96.2 42.8-96.2 96 0 23.6 7.9 44.5 21.9 61.1h-78.8c14-16.6 21.9-37.5 21.9-61.1 0-53.2-42.9-96-96.2-96S46 202.8 46 256s42.9 96 96.2 96h227.5c53.4 0 96.2-42.8 96.2-96s-42.8-96-96.1-96zM142.2 317.1C108.1 317.1 81 290 81 256s27.1-61.1 61.2-61.1 61.2 27.1 61.2 61.1-27 61.1-61.2 61.1zm227.6 0c-34.1 0-61.2-27.1-61.2-61.1s27.1-61.1 61.2-61.1S431 222 431 256s-27.1 61.1-61.2 61.1z" fill="currentColor"></svg:path>`,
})
export class IonMdRecordingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRedoIcon],svg[ion-md-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 337.2L83.8 352c22.9-69.7 88.7-117.8 166-117.8 42.8 0 81.5 15.7 111.8 41.1L282.5 352H480V160l-79.6 76.3c-40.4-35.2-92.8-56.8-150.7-56.8-101.5.1-187.3 66.2-217.7 157.7z" fill="currentColor"></svg:path>`,
})
export class IonMdRedoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRefreshIcon],svg[ion-md-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z" fill="currentColor"></svg:path>`,
})
export class IonMdRefreshIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRefreshCircleIcon],svg[ion-md-refresh-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm112 194h-98l44.8-44.8C300.1 181.8 279.1 172 256 172c-46.2 0-84 37.8-84 84s37.8 84 84 84c34.9 0 65.3-21.2 77.6-52h29.8c-13.9 46.3-56.3 80-107.4 80-62.3 0-112-50.4-112-112s50.4-112 112-112c30.8 0 58.8 12.6 79.1 32.9L368 144v98z" fill="currentColor"></svg:path>`,
})
export class IonMdRefreshCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRemoveIcon],svg[ion-md-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 235h320v42H96z" fill="currentColor"></svg:path>`,
})
export class IonMdRemoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRemoveCircleIcon],svg[ion-md-remove-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm107 229H149v-42h214v42z" fill="currentColor"></svg:path>`,
})
export class IonMdRemoveCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdReorderIcon],svg[ion-md-reorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 348h320v36H96z" fill="currentColor"></svg:path><svg:path d="M96 128h320v36H96z" fill="currentColor"></svg:path><svg:path d="M96 200.7h320v35.6H96z" fill="currentColor"></svg:path><svg:path d="M96 275.8h320v35.6H96z" fill="currentColor"></svg:path>`,
})
export class IonMdReorderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRepeatIcon],svg[ion-md-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M149.3 152h213.3v62.4l85.3-83.2L362.7 48v62.4h-256v124.8h42.7V152zm213.4 208H149.3v-62.4L64 380.8l85.3 83.2v-62.4h256V276.8h-42.7V360z" fill="currentColor"></svg:path>`,
})
export class IonMdRepeatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdResizeIcon],svg[ion-md-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M297.6 48l64.9 64.9-249.6 249.6L48 297.6V464h166.4l-64.9-64.9 249.6-249.6 64.9 64.9V48z" fill="currentColor"></svg:path>`,
})
export class IonMdResizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRestaurantIcon],svg[ion-md-restaurant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M164.852 279.939l61.834-60.251L73.72 71.706c-33.626 32.764-33.626 86.677 0 119.44l91.132 88.793z" fill="currentColor"></svg:path><svg:path d="M312.389 241.88c33.636 14.802 80.283 4.232 113.91-29.593 41.222-40.165 49.909-98.303 17.363-128.96-31.465-31.71-91.131-23.245-132.354 16.921-34.718 33.825-45.566 79.276-30.374 110.986-47.739 47.568-211.552 207.173-211.552 207.173L99.759 448l149.71-145.866L399.177 448l30.374-29.593-149.709-145.869 32.547-30.658z" fill="currentColor"></svg:path>`,
})
export class IonMdRestaurantIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdReturnLeftIcon],svg[ion-md-return-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M432.8 136v96H122.3l84.4-86.2-33.2-33.8L32 256l141.5 144 33.2-33.8-84.4-86.2H480V136h-47.2z" fill="currentColor"></svg:path>`,
})
export class IonMdReturnLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdReturnRightIcon],svg[ion-md-return-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 136v144h357.7l-84.4 86.2 33.2 33.8L480 256 338.5 112l-33.2 33.8 84.4 86.2H79.2v-96H32z" fill="currentColor"></svg:path>`,
})
export class IonMdReturnRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdReverseCameraIcon],svg[ion-md-reverse-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M440 96h-88l-32-32H192l-32 32H72c-22.1 0-40 17.9-40 40v272c0 22.1 17.9 40 40 40h368c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40zm-72 171h-97.7l44.8-45.1c-14.7-15.4-35.7-25.5-58.8-25.5-46.2 0-84 37.8-84 84s37.8 84 84 84c35.5 0 66.2-21.5 78.2-53.5h29.6c-13.4 47-56.2 81.5-107.8 81.5-62.3 0-112-50.4-112-112s50.4-112 112-112c30.8 0 58.7 12.6 79 32.9l32.8-32.9V267z" fill="currentColor"></svg:path>`,
})
export class IonMdReverseCameraIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRewindIcon],svg[ion-md-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M249.6 402V110L32 256l217.6 146zm12.8-146L480 402V110L262.4 256z" fill="currentColor"></svg:path>`,
})
export class IonMdRewindIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRibbonIcon],svg[ion-md-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128S326.7 32 256 32zm0 208c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z" fill="currentColor"></svg:path><svg:path d="M193.7 307.4c-19.1-8.1-36.2-19.6-50.8-34.3-1.4-1.4-2.8-2.8-4.1-4.3L64 400h96l48 80 48-105.8 25.5-56.2c-8.4 1.3-16.9 2-25.5 2-21.6 0-42.5-4.2-62.3-12.6z" fill="currentColor"></svg:path><svg:path d="M373.3 268.9c-1.3 1.4-2.7 2.9-4.1 4.3-14.6 14.6-31.7 26.2-50.7 34.2L294 361.2l-21.9 48.4L304 480l48-80h96l-74.7-131.1z" fill="currentColor"></svg:path>`,
})
export class IonMdRibbonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRocketIcon],svg[ion-md-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 421.6c-18.1 0-33.2-6.8-42.9-10.9-5.4-2.3-11.3 1.8-10.9 7.6l3.5 51c.2 3.1 3.8 4.7 6.3 2.8l14.5-11c1.8-1.4 4.5-.9 5.7 1l20.5 32.1c1.5 2.4 5.1 2.4 6.6 0l20.5-32.1c1.2-1.9 3.9-2.4 5.7-1l14.5 11c2.5 1.9 6.1.3 6.3-2.8l3.5-51c.4-5.8-5.5-10-10.9-7.6-9.8 4.1-24.8 10.9-42.9 10.9z" fill="currentColor"></svg:path><svg:path d="M397.7 293.1l-48-49.1c0-158-93.2-228-93.2-228s-94.1 70-94.1 228l-48 49.1c-1.8 1.8-2.6 4.5-2.2 7.1L130.6 412c.9 5.7 7.1 8.5 11.8 5.4l67.1-45.4s20.7 20 47.1 20c26.4 0 46.1-20 46.1-20l67.1 45.4c4.6 3.1 10.8.3 11.8-5.4l18.5-111.9c.2-2.6-.6-5.2-2.4-7zM256.5 192c-17 0-30.7-14.3-30.7-32s13.8-32 30.7-32c17 0 30.7 14.3 30.7 32s-13.7 32-30.7 32z" fill="currentColor"></svg:path>`,
})
export class IonMdRocketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRoseIcon],svg[ion-md-rose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M260.6 214.8c23.8-40.9 48-71.6 91.4-96.4 8.3-4.8 21.2-8 22.8-8.9C290.7 83.7 256 32 256 32s-34.7 51.7-120.5 76.5c5.8 3.4 16.5 6.5 30.7 13.7 34.5 17.4 62.5 51.3 94.4 92.6z" fill="currentColor"></svg:path><svg:path d="M246.3 253.4C186.7 161.2 131.4 126.8 48 126.8c54.2 78.6 52 174.6 52 215.4 0 76.1 69.8 137.8 156 137.8 57.6 0 107.9-27.6 135-68.7-35.5-27.6-85.1-65.7-144.7-157.9z" fill="currentColor"></svg:path><svg:path d="M464 126.8s-55.2-2.3-85.2 15.4c-43 25.5-74.4 61.3-95.4 103.2 38.8 52 73 87.9 95.4 109.4 10.7 10.2 19.8 18.2 27.5 24.5 3.7-11.8 5.8-24.3 5.8-37.2-.1-40.8-17.4-114.1 51.9-215.3z" fill="currentColor"></svg:path>`,
})
export class IonMdRoseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSadIcon],svg[ion-md-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 288c-45.443 0-83.675 26.076-102.205 64h204.41c-18.53-37.924-56.762-64-102.205-64z" fill="currentColor"></svg:path><svg:path d="M256 48C140.563 48 48 141.6 48 256s92.563 208 208 208 208-93.6 208-208S370.401 48 256 48zm0 374.4c-91.518 0-166.404-74.883-166.404-166.4 0-91.518 74.887-166.4 166.404-166.4S422.404 164.482 422.404 256 347.518 422.4 256 422.4z" fill="currentColor"></svg:path><svg:path d="M328.8 235.2c17.683 0 31.201-13.518 31.201-31.2s-13.519-31.2-31.201-31.2c-17.682 0-31.2 13.518-31.2 31.2s13.518 31.2 31.2 31.2z" fill="currentColor"></svg:path><svg:path d="M183.2 235.2c17.682 0 31.2-13.518 31.2-31.2s-13.519-31.2-31.2-31.2c-17.683 0-31.201 13.518-31.201 31.2s13.519 31.2 31.201 31.2z" fill="currentColor"></svg:path>`,
})
export class IonMdSadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSaveIcon],svg[ion-md-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M362.7 64h-256C83 64 64 83.2 64 106.7v298.7c0 23.5 19 42.7 42.7 42.7h298.7c23.5 0 42.7-19.2 42.7-42.7v-256L362.7 64zM256 405.3c-35.4 0-64-28.6-64-64s28.6-64 64-64 64 28.6 64 64-28.6 64-64 64zM320 192H106.7v-85.3H320V192z" fill="currentColor"></svg:path>`,
})
export class IonMdSaveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSchoolIcon],svg[ion-md-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M113.5 281.2v85.3L256 448l142.5-81.5v-85.3L256 362.7l-142.5-81.5zM256 64L32 192l224 128 183.3-104.7v147.4H480V192L256 64z" fill="currentColor"></svg:path>`,
})
export class IonMdSchoolIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSearchIcon],svg[ion-md-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z" fill="currentColor"></svg:path>`,
})
export class IonMdSearchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSendIcon],svg[ion-md-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M48 448l416-192L48 64v149.333L346 256 48 298.667z" fill="currentColor"></svg:path>`,
})
export class IonMdSendIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSettingsIcon],svg[ion-md-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M413.967 276.8c1.06-6.235 1.06-13.518 1.06-20.8s-1.06-13.518-1.06-20.8l44.667-34.318c4.26-3.118 5.319-8.317 2.13-13.518L418.215 115.6c-2.129-4.164-8.507-6.235-12.767-4.164l-53.186 20.801c-10.638-8.318-23.394-15.601-36.16-20.801l-7.448-55.117c-1.06-4.154-5.319-8.318-10.638-8.318h-85.098c-5.318 0-9.577 4.164-10.637 8.318l-8.508 55.117c-12.767 5.2-24.464 12.482-36.171 20.801l-53.186-20.801c-5.319-2.071-10.638 0-12.767 4.164L49.1 187.365c-2.119 4.153-1.061 10.399 2.129 13.518L96.97 235.2c0 7.282-1.06 13.518-1.06 20.8s1.06 13.518 1.06 20.8l-44.668 34.318c-4.26 3.118-5.318 8.317-2.13 13.518L92.721 396.4c2.13 4.164 8.508 6.235 12.767 4.164l53.187-20.801c10.637 8.318 23.394 15.601 36.16 20.801l8.508 55.117c1.069 5.2 5.318 8.318 10.637 8.318h85.098c5.319 0 9.578-4.164 10.638-8.318l8.518-55.117c12.757-5.2 24.464-12.482 36.16-20.801l53.187 20.801c5.318 2.071 10.637 0 12.767-4.164l42.549-71.765c2.129-4.153 1.06-10.399-2.13-13.518l-46.8-34.317zm-158.499 52c-41.489 0-74.46-32.235-74.46-72.8s32.971-72.8 74.46-72.8 74.461 32.235 74.461 72.8-32.972 72.8-74.461 72.8z" fill="currentColor"></svg:path>`,
})
export class IonMdSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdShareIcon],svg[ion-md-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M383.822 344.427c-16.045 0-31.024 5.326-41.721 15.979l-152.957-88.42c1.071-5.328 2.142-9.593 2.142-14.919 0-5.328-1.071-9.593-2.142-14.919l150.826-87.35c11.762 10.653 26.741 17.041 43.852 17.041 35.295 0 64.178-28.766 64.178-63.92C448 72.767 419.117 44 383.822 44c-35.297 0-64.179 28.767-64.179 63.92 0 5.327 1.065 9.593 2.142 14.919l-150.821 87.35c-11.767-10.654-26.741-17.041-43.856-17.041-35.296 0-63.108 28.766-63.108 63.92 0 35.153 28.877 63.92 64.178 63.92 17.115 0 32.089-6.389 43.856-17.042l151.891 88.421c-1.076 4.255-2.141 8.521-2.141 13.847 0 34.094 27.806 61.787 62.037 61.787 34.229 0 62.036-27.693 62.036-61.787.001-34.094-27.805-61.787-62.035-61.787z" fill="currentColor"></svg:path>`,
})
export class IonMdShareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdShareAltIcon],svg[ion-md-share-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 248L288 96v85.334C138.666 202.667 85.333 309.334 64 416c53.333-74.666 117.333-108.802 224-108.802v87.469L448 248z" fill="currentColor"></svg:path>`,
})
export class IonMdShareAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdShirtIcon],svg[ion-md-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M320 64c-11.1 19.1-40.3 32-64 32s-52.9-12.9-64-32L64 96v96l77-16-13 272h256l-13-272 77 16V96L320 64z" fill="currentColor"></svg:path>`,
})
export class IonMdShirtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdShuffleIcon],svg[ion-md-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M222.2 188.1L97.8 64 64 97.8l124.1 124.1 34.1-33.8zM316 64l49 49L64 414.2 97.8 448 399 147l49 49V64H316zm7.9 225.8l-33.8 33.8 75.1 75.1L316 448h132V316l-49 49-75.1-75.2z" fill="currentColor"></svg:path>`,
})
export class IonMdShuffleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSkipBackwardIcon],svg[ion-md-skip-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M170.7 256L448 448V64L170.7 256z" fill="currentColor"></svg:path><svg:path d="M64 64h64v384H64z" fill="currentColor"></svg:path>`,
})
export class IonMdSkipBackwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSkipForwardIcon],svg[ion-md-skip-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 64v384l277.3-192L64 64z" fill="currentColor"></svg:path><svg:path d="M384 64h64v384h-64z" fill="currentColor"></svg:path>`,
})
export class IonMdSkipForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSnowIcon],svg[ion-md-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M461.4 298.5l-8.3-30.9-88 23.6-60.4-34.9 60.4-34.9 88 23.6 8.3-30.9-57.1-15.3 57.7-33.3-24-41.5-56.6 32.7 15.3-57.1-30.9-8.3-23.6 88-62.2 35.9v-71.1l64.5-64.4-22.7-22.6L280 98.9V32h-48v65.6l-41.7-41.7-22.6 22.6 64.3 64.4v71.4l-60.7-35-23.6-88-30.9 8.3 15.3 57.1-57.7-33.4-24 41.6 56.7 32.7L50 212.9l8.3 30.9 87.9-23.6 62.6 36.1-62.6 36.2-87.9-23.6-8.3 30.9 57.1 15.3-56.7 32.7 24 41.5 57.7-33.3-15.3 57 30.9 8.3 23.6-87.9 60.7-35.1v70.9l-64.3 64.4 22.6 22.6 41.7-41.8V480h48v-66.8l41.9 41.7 22.5-22.6L280 368v-70.6l62.2 36 23.6 87.9 30.9-8.3-15.3-57 56.6 32.7 24-41.6-57.7-33.3z" fill="currentColor"></svg:path>`,
})
export class IonMdSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSpeedometerIcon],svg[ion-md-speedometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 416h256v48H128z" fill="currentColor"></svg:path><svg:path d="M256 288c17.7 0 32-14.3 32-32s-14.3-32-32-32c-3 0-6 .4-8.8 1.2l-66.7-48.7-4 3.5 48.9 66.7c-.9 2.9-1.4 6-1.4 9.3 0 17.7 14.3 32 32 32z" fill="currentColor"></svg:path><svg:path d="M256 48C141.1 48 48 141.1 48 256c0 48.3 16.5 92.7 44.1 128h58.8l4-4 22.1-22.1-22.9-22.9-22.1 22c-19.9-24.3-32.1-54-35.2-85H128v-32H96.8c3.1-31 15.3-60.7 35.2-85l22.1 22 22.9-22.9-22-22.1c24.3-19.9 54-32.1 85-35.2V128h32V96.8c31 3.1 60.7 15.3 85 35.2l-22 22.1 22.9 22.9 22.1-22c19.9 24.3 32.1 54 35.2 85H384v32h31.2c-3.1 31-15.3 60.7-35.2 85l-22.1-22-22.9 22.9 22.1 22.1 4 4h58.8c27.6-35.3 44.1-79.7 44.1-128 0-114.9-93.1-208-208-208z" fill="currentColor"></svg:path>`,
})
export class IonMdSpeedometerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSquareIcon],svg[ion-md-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M405.333 64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V106.667C448 83.198 428.802 64 405.333 64z" fill="currentColor"></svg:path>`,
})
export class IonMdSquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdStarIcon],svg[ion-md-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" fill="currentColor"></svg:path>`,
})
export class IonMdStarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdStarHalfIcon],svg[ion-md-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M458 210.409l-145.267-12.476L256 64l-56.743 133.934L54 210.409l110.192 95.524L131.161 448 256 372.686 380.83 448l-33.021-142.066L458 210.409zM272.531 345.287L256 335.313l-.002-189.277 27.27 64.379 7.52 17.751 19.208 1.65 69.846 5.998-52.993 45.939-14.576 12.636 4.367 18.788 15.875 68.299-59.984-36.189z" fill="currentColor"></svg:path>`,
})
export class IonMdStarHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdStatsIcon],svg[ion-md-stats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M176 64h64v384h-64z" fill="currentColor"></svg:path><svg:path d="M80 336h64v112H80z" fill="currentColor"></svg:path><svg:path d="M272 272h64v176h-64z" fill="currentColor"></svg:path><svg:path d="M368 176h64v272h-64z" fill="currentColor"></svg:path>`,
})
export class IonMdStatsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdStopwatchIcon],svg[ion-md-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M232 306.667h48V176h-48v130.667z" fill="currentColor"></svg:path><svg:path d="M407.67 170.271l30.786-30.786-33.942-33.941-30.785 30.786C341.217 111.057 300.369 96 256 96 149.961 96 64 181.961 64 288s85.961 192 192 192 192-85.961 192-192c0-44.369-15.057-85.217-40.33-117.729zm-45.604 223.795C333.734 422.398 296.066 438 256 438s-77.735-15.602-106.066-43.934C121.602 365.735 106 328.066 106 288s15.602-77.735 43.934-106.066C178.265 153.602 215.934 138 256 138s77.734 15.602 106.066 43.934C390.398 210.265 406 247.934 406 288s-15.602 77.735-43.934 106.066z" fill="currentColor"></svg:path><svg:path d="M192 32h128v48H192z" fill="currentColor"></svg:path>`,
})
export class IonMdStopwatchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSubwayIcon],svg[ion-md-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48c-93.864 0-176 10.668-176 85.334v213.332c0 41.604 33.062 74.666 74.667 74.666L128 448v16h256v-16l-26.667-26.668c41.604 0 74.667-33.062 74.667-74.666V133.334C432 58.668 349.864 48 256 48zm-96 336c-18.136 0-32-13.865-32-32 0-18.137 13.864-32 32-32s32 13.863 32 32c0 18.135-13.864 32-32 32zm80-144H128v-96h112v96zm112 144c-18.136 0-32-13.865-32-32 0-18.137 13.864-32 32-32s32 13.863 32 32c0 18.135-13.864 32-32 32zm32-144H272v-96h112v96z" fill="currentColor"></svg:path>`,
})
export class IonMdSubwayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSunnyIcon],svg[ion-md-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M277.3 32h-42.7v64h42.7V32zm129.1 43.7L368 114.1l29.9 29.9 38.4-38.4-29.9-29.9zm-300.8 0l-29.9 29.9 38.4 38.4 29.9-29.9-38.4-38.4zM256 128c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128zm224 106.7h-64v42.7h64v-42.7zm-384 0H32v42.7h64v-42.7zM397.9 368L368 397.9l38.4 38.4 29.9-29.9-38.4-38.4zm-283.8 0l-38.4 38.4 29.9 29.9 38.4-38.4-29.9-29.9zm163.2 48h-42.7v64h42.7v-64z" fill="currentColor"></svg:path>`,
})
export class IonMdSunnyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSwapIcon],svg[ion-md-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M131.3 231.1L32 330.6l99.3 99.4v-74.6h174.5v-49.7H131.3v-74.6zM480 181.4L380.7 82v74.6H206.2v49.7h174.5v74.6l99.3-99.5z" fill="currentColor"></svg:path>`,
})
export class IonMdSwapIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSwitchIcon],svg[ion-md-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M168 216h94.9c14.5 14.8 34.7 24 57.1 24 44.2 0 80-35.8 80-80s-35.8-80-80-80c-22.4 0-42.6 9.2-57.1 24H168c-30.8 0-56 25.2-56 56s25.2 56 56 56zm-16.9-72.9c4.6-4.6 10.6-7.1 16.9-7.1h75.7c-2.4 7.6-3.7 15.6-3.7 24s1.3 16.4 3.7 24H168c-6.3 0-12.4-2.5-16.9-7.1-4.6-4.6-7.1-10.6-7.1-16.9s2.5-12.4 7.1-16.9z" fill="currentColor"></svg:path><svg:path d="M344 296h-94.9c-14.5-14.8-34.7-24-57.1-24-44.2 0-80 35.8-80 80s35.8 80 80 80c22.4 0 42.6-9.2 57.1-24H344c30.8 0 56-25.2 56-56s-25.2-56-56-56zm16.9 72.9c-4.6 4.6-10.6 7.1-16.9 7.1h-75.7c2.4-7.6 3.7-15.6 3.7-24s-1.3-16.4-3.7-24H344c6.3 0 12.4 2.5 16.9 7.1 4.6 4.6 7.1 10.6 7.1 16.9s-2.5 12.4-7.1 16.9z" fill="currentColor"></svg:path>`,
})
export class IonMdSwitchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSyncIcon],svg[ion-md-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 93.09V32l-80 81.454 80 81.456v-61.093c65.996 0 120 54.982 120 122.183 0 20.363-5 39.714-14.004 57.016L391 342.547c15.996-25.457 25-54.988 25-86.547 0-89.599-72.002-162.91-160-162.91zm0 285.094c-66.001 0-120-54.988-120-122.184 0-20.363 5-39.709 13.999-57.02L121 169.454C104.999 193.89 96 224.436 96 256c0 89.599 72.002 162.91 160 162.91V480l80-81.453-80-81.457v61.094z" fill="currentColor"></svg:path>`,
})
export class IonMdSyncIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTabletLandscapeIcon],svg[ion-md-tablet-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 120v272c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H56c-13.3 0-24 10.7-24 24zm384 8v256H80V128h336zm46 128c0 7.7-6.5 14-14.1 14-7.5 0-14-6.2-14-14 0-7.7 6.4-14.1 14-14.1 7.6.1 14.1 6.4 14.1 14.1z" fill="currentColor"></svg:path>`,
})
export class IonMdTabletLandscapeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTabletPortraitIcon],svg[ion-md-tablet-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M392 32H120c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24zm-8 384H128V80h256v336zm-128 46c-7.7 0-14-6.5-14-14.1 0-7.5 6.2-14 14-14 7.7 0 14.1 6.4 14.1 14-.1 7.6-6.4 14.1-14.1 14.1z" fill="currentColor"></svg:path>`,
})
export class IonMdTabletPortraitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTennisballIcon],svg[ion-md-tennisball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M383.8 92.2C348.5 64.5 304.1 48 256 48c-48 0-92.3 16.5-127.6 44 41.6 44.8 64.3 103 64 164.3-.3 61-23.3 118.6-64.9 162.9 35.4 28 80.1 44.8 128.5 44.8 48.5 0 93.3-16.8 128.8-45-41.5-44.3-64.5-101.8-64.8-162.7-.3-61.2 22.3-119.3 63.8-164.1z" fill="currentColor"></svg:path><svg:path d="M353.1 255.1c0 26.9 5.1 53 15.1 77.8 9.6 23.6 23.3 44.9 40.8 63.6 34.1-37.1 55-86.5 55-140.5 0-54.5-21.2-104.2-55.8-141.4-17.1 18.5-30.6 39.6-40 62.7-10 24.8-15.1 51-15.1 77.8z" fill="currentColor"></svg:path><svg:path d="M159.3 255.1c0-26.9-5.1-53-15.1-77.8-9.4-23.2-22.9-44.4-40.2-62.9-34.7 37.2-56 87-56 141.6 0 54.2 21 103.6 55.2 140.7 17.6-18.7 31.4-40.1 41-63.8 10-24.7 15.1-50.9 15.1-77.8z" fill="currentColor"></svg:path>`,
})
export class IonMdTennisballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTextIcon],svg[ion-md-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M408 64H96c-22.002 0-32 17.998-32 40v344l64-64h280c22.002 0 40-17.998 40-40V104c0-22.002-17.998-40-40-40zM198.4 242H160v-40h38.4v40zm76.8 0h-38.4v-40h38.4v40zm76.8 0h-38.4v-40H352v40z" fill="currentColor"></svg:path>`,
})
export class IonMdTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdThermometerIcon],svg[ion-md-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M303 300.2V78.4c0-25.7-21-46.5-47-46.5s-47 20.8-47 46.5v221.9c-29 16.5-48.9 47.8-48.9 83.7 0 53 43 96 96 96s96-43 96-96c0-36-20.1-67.3-49.1-83.8zM240 78.4c0-8 7.7-14.5 16-14.5s16 6.5 16 14.5V128h-32V78.4z" fill="currentColor"></svg:path>`,
})
export class IonMdThermometerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdThumbsDownIcon],svg[ion-md-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M314 64H142c-15.7 0-28.6 9.6-34.2 23.4L50.6 222.8c-1.7 4.4-2.6 9-2.6 14v38.6c0 21.1 17 44.6 37.8 44.6h119.3l-18 81.5-.6 6c0 7.9 3.2 15.1 8.3 20.3l20 20.1L341 320.7c6.8-6.9 11-16.5 11-27.1v-192c0-21.1-17.2-37.6-38-37.6z" fill="currentColor"></svg:path><svg:path d="M400 64h64v224h-64z" fill="currentColor"></svg:path>`,
})
export class IonMdThumbsDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdThumbsUpIcon],svg[ion-md-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M198 448h172c15.7 0 28.6-9.6 34.2-23.4l57.1-135.4c1.7-4.4 2.6-9 2.6-14v-38.6c0-21.1-17-44.6-37.8-44.6H306.9l18-81.5.6-6c0-7.9-3.2-15.1-8.3-20.3L297 64 171 191.3c-6.8 6.9-11 16.5-11 27.1v192c0 21.1 17.2 37.6 38 37.6z" fill="currentColor"></svg:path><svg:path d="M48 224h64v224H48z" fill="currentColor"></svg:path>`,
})
export class IonMdThumbsUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdThunderstormIcon],svg[ion-md-thunderstorm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M393.2 161.2C380.5 96.6 323.9 48 256 48c-39.7 0-76 14-100.9 45.4 34.3 2.6 66.1 15.2 90.7 39.8 18.2 18.2 31 40.5 37.4 64.8h-33.5c-15.3-43.7-56-75-105.7-75-6 0-14.3.7-20.6 2C70 136 32 180.4 32 235.5 32 297.6 82.2 336 144 336h68V233h99.1l-33.2 67H311l-18 36h93.7c51.5 0 93.3-30 93.3-81.8 0-49.4-38.3-89.6-86.8-93z" fill="currentColor"></svg:path><svg:path d="M212 368h22v96l59-128h-81z" fill="currentColor"></svg:path>`,
})
export class IonMdThunderstormIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTimeIcon],svg[ion-md-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-opacity=".9"><svg:path d="M255.8 48C141 48 48 141.2 48 256s93 208 207.8 208c115 0 208.2-93.2 208.2-208S370.8 48 255.8 48zm.2 374.4c-91.9 0-166.4-74.5-166.4-166.4S164.1 89.6 256 89.6 422.4 164.1 422.4 256 347.9 422.4 256 422.4z" fill="currentColor"></svg:path><svg:path d="M266.4 152h-31.2v124.8l109.2 65.5 15.6-25.6-93.6-55.5V152z" fill="currentColor"></svg:path></svg:g>`,
})
export class IonMdTimeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTimerIcon],svg[ion-md-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M232.9 371.6c0 12.7 10.4 23.1 23.1 23.1s23.1-10.4 23.1-23.1c0-12.7-10.4-23.1-23.1-23.1s-23.1 10.3-23.1 23.1zm0-323.6v92.4h46.2V96.1c78.3 11.3 138.7 78.3 138.7 159.9 0 89.4-72.3 161.8-161.8 161.8S94.2 345.4 94.2 256c0-38.8 13.6-74.4 36.5-102.2L256 279.1l32.6-32.6L131.4 89.4v.5C80.8 127.7 48 187.8 48 256c0 114.9 92.9 208 208 208 114.9 0 208-93.1 208-208S370.9 48 256 48h-23.1zm161.8 208c0-12.7-10.4-23.1-23.1-23.1-12.7 0-23.1 10.4-23.1 23.1s10.4 23.1 23.1 23.1c12.7 0 23.1-10.4 23.1-23.1zm-277.4 0c0 12.7 10.4 23.1 23.1 23.1s23.1-10.4 23.1-23.1-10.4-23.1-23.1-23.1-23.1 10.4-23.1 23.1z" fill="currentColor"></svg:path>`,
})
export class IonMdTimerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTodayIcon],svg[ion-md-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M405.3 32H106.7C83.2 32 64 51.2 64 74.7v362.7c0 23.5 19.2 42.7 42.7 42.7h298.7c23.5 0 42.7-19.2 42.7-42.7V74.7C448 51.2 428.8 32 405.3 32zm-4 405.3H110.7c-2.2 0-4-1.8-4-4V78.7c0-2.2 1.8-4 4-4h290.7c2.2 0 4 1.8 4 4v354.7c-.1 2.1-1.9 3.9-4.1 3.9z" fill="currentColor"></svg:path><svg:path d="M145 194v204c0 1.1.9 2 2 2h218c1.1 0 2-.9 2-2V194c0-1.1-.9-2-2-2H147c-1.1 0-2 .9-2 2z" fill="currentColor"></svg:path><svg:path d="M145 114.7v34c0 1.1.9 2 2 2h171c1.1 0 2-.9 2-2v-34c0-1.1-.9-2-2-2H147c-1.1 0-2 .9-2 2z" fill="currentColor"></svg:path>`,
})
export class IonMdTodayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTrainIcon],svg[ion-md-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48c-88 0-176 10.9-176 87.6v208c0 42.3 34.5 76.6 77 76.6L124 453v11h49.1l44-43.8H300l44 43.8h44v-10.9l-33-32.8c42.5 0 77-34.4 77-76.6v-208C432 58.9 353.2 48 256 48zm-99 328.4c-18.3 0-33-14.7-33-32.8s14.7-32.8 33-32.8 33 14.7 33 32.8-14.7 32.8-33 32.8zm77-153.2H124v-87.6h110v87.6zm44 0v-87.6h110v87.6H278zm77 153.2c-18.3 0-33-14.7-33-32.8s14.7-32.8 33-32.8 33 14.7 33 32.8-14.7 32.8-33 32.8z" fill="currentColor"></svg:path>`,
})
export class IonMdTrainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTransgenderIcon],svg[ion-md-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 32v35h63.1l-81.4 80.5c-7.5-7.2-13.2-11-13.2-11C302.2 123.6 280 116 256 116c-30.2 0-57.6 12-77.8 31.4l-15.2-15 31.4-31.4-28.5-28.5-31.5 31.5-37.5-37H160V32H32v128h35V91.3l40.3 39.9-31.2 31.2 28.5 28.5 31.4-31.4 19.4 19.2c-7.3 14.9-11.5 31.7-11.5 49.5 0 54.8 39.5 100.4 91.1 110.2v45.3h-63V424h63v56h42v-56h63v-40.2h-63v-45.3c50.8-9.9 91.2-55.5 91.2-110.3 0-17.7-4.2-34.8-11.5-49.6L445 91.3V160h35V32H352zm-96 258c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" fill="currentColor"></svg:path>`,
})
export class IonMdTransgenderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTrashIcon],svg[ion-md-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 405.429C128 428.846 147.198 448 170.667 448h170.667C364.802 448 384 428.846 384 405.429V160H128v245.429zM416 96h-80l-26.785-32H202.786L176 96H96v32h320V96z" fill="currentColor"></svg:path>`,
})
export class IonMdTrashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTrendingDownIcon],svg[ion-md-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 397V262.5l-51.3 51.3-141.1-141-89.6 89.7L63.6 128 32 159.6l166 166.3 89.6-89.7 109.3 109.4-51.3 51.4H480z" fill="currentColor"></svg:path>`,
})
export class IonMdTrendingDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTrendingUpIcon],svg[ion-md-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M345.6 128l51.3 51.3-109.3 109.4-89.6-89.6L32 365.4 63.6 397 198 262.5l89.6 89.7 141.1-141 51.3 51.3V128H345.6z" fill="currentColor"></svg:path>`,
})
export class IonMdTrendingUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTrophyIcon],svg[ion-md-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M392 105c.9-27 .2-56 .1-57H119.3c0 1-.8 30 .1 57H48c0 68 9.9 102.3 21 126.7S95.4 277 127.7 302c30.1 23.3 95.5 53.6 104.3 57.6v28.3c-4.6 10-23.5 28.2-83.3 28.2H128v48h256v-48h-25.7c-60.7 0-75-19.1-78.3-28.2v-28.3c9.3-4.6 80.9-40.3 104.4-57.5 25.2-18.4 50.9-51.5 58.7-70.3S464 167 464 105h-72zM109.6 211.9c-8.8-18.2-14-37.9-15.7-61.9h28.7c.7 6 1.4 11.3 2.3 16.3 6.6 39.2 14.8 70.2 25.7 96.5-17.3-13.5-31.3-30.8-41-50.9zm292.8 0c-9.9 20.3-24 37.7-41.6 51.3 11-26.2 19-56.8 25.8-96.9.8-5 1.6-10.3 2.3-16.3h29.3c-1.8 24-6.9 43.7-15.8 61.9z" fill="currentColor"></svg:path>`,
})
export class IonMdTrophyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTvIcon],svg[ion-md-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M439.3 76H72.7C50.3 76 32 94 32 116v240c0 22 18.3 40 40.7 40h101.8v40h162.9v-40h101.8c22.4 0 40.5-18 40.5-40l.2-240c.1-22-18.2-40-40.6-40zm0 280H72.7V116h366.5v240z" fill="currentColor"></svg:path>`,
})
export class IonMdTvIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdUmbrellaIcon],svg[ion-md-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M410.1 244.1c12 0 26.6 10.9 33.8 25.9H464c-.3-50-21.2-101.5-59.4-140.9-36.3-37.4-83-60.5-132.6-65.7-3-9-11.5-15.4-21.6-15.4-10 0-18.5 6.5-21.5 15.3C125.3 73.8 48 159.7 48 266.2c0 1.1.1 1.8.4 3.8h21.8c6.8-15 22.2-25.9 35.3-25.9 17 0 31.5 10.9 36.5 25.9h19.8c4.1-15 16.9-25.7 33-25.7 17.8 0 33.1 14.5 34.1 32.6v118.3c0 9.3.1 24.1-13.4 24.1-6.9 0-16.6-1.8-16.6-16V382h-43v21.3c0 34.6 23.6 60.7 60 60.7 19.5 0 33.3-8.5 43.5-18.7 13.1-13.2 13.5-34.7 13.5-50.1V276.1c2-25.8 23.9-31.7 41.9-31.7 17.2 0 32.3 11.6 37.8 25.6h20.5c5.1-15 19.8-25.9 37-25.9z" fill="currentColor"></svg:path>`,
})
export class IonMdUmbrellaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdUndoIcon],svg[ion-md-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M262.3 179.6c-57.9 0-110.3 21.6-150.7 56.8L32 160v192h197.5l-79.1-76.8c30.4-25.3 69-41.1 111.8-41.1 77.3 0 143.1 48.2 166 117.8l51.8-14.8c-30.4-91.4-116.2-157.5-217.7-157.5z" fill="currentColor"></svg:path>`,
})
export class IonMdUndoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdUnlockIcon],svg[ion-md-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M376 186h-20v-40c0-55-45-100-100-100S156 91 156 146h37.998c0-34.004 28.003-62.002 62.002-62.002 34.004 0 62.002 27.998 62.002 62.002H318v40H136c-22.002 0-40 17.998-40 40v200c0 22.002 17.998 40 40 40h240c22.002 0 40-17.998 40-40V226c0-22.002-17.998-40-40-40zM256 368c-22.002 0-40-17.998-40-40s17.998-40 40-40 40 17.998 40 40-17.998 40-40 40z" fill="currentColor"></svg:path>`,
})
export class IonMdUnlockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdVideocamIcon],svg[ion-md-videocam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M384 219.5v-85.2c0-13.4-11.2-24.3-24.9-24.3H56.9C43.2 110 32 120.9 32 134.3v243.3C32 391 43.2 402 56.9 402h302.2c13.7 0 24.9-11 24.9-24.3v-85.2l96 97.3V122.2l-96 97.3z" fill="currentColor"></svg:path>`,
})
export class IonMdVideocamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdVolumeHighIcon],svg[ion-md-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256zM298.667 64v44.978C360.531 127.632 405.334 186.882 405.334 256c0 69.119-44.803 128.369-106.667 147.022V448C384 428.254 448 349.257 448 256c0-93.256-64-172.254-149.333-192z" fill="currentColor"></svg:path>`,
})
export class IonMdVolumeHighIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdVolumeLowIcon],svg[ion-md-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256z" fill="currentColor"></svg:path>`,
})
export class IonMdVolumeLowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdVolumeMuteIcon],svg[ion-md-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64z" fill="currentColor"></svg:path>`,
})
export class IonMdVolumeMuteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdVolumeOffIcon],svg[ion-md-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M405.5 256c0 22.717-4.883 44.362-13.603 63.855l31.88 31.88C439.283 323.33 448 290.653 448 256c0-93.256-64-172.254-149-192v44.978C361 127.632 405.5 186.882 405.5 256z" fill="currentColor"></svg:path><svg:path d="M256 80.458l-51.021 52.48L256 183.957z" fill="currentColor"></svg:path><svg:path d="M420.842 396.885L91.116 67.157l-24 24 90.499 90.413-8.28 10.43H64v128h85.334L256 431.543V280l94.915 94.686C335.795 387.443 318 397.213 299 403.022V448c31-7.172 58.996-22.163 82.315-42.809l39.61 39.693 24-24.043-24.002-24.039-.081.083z" fill="currentColor"></svg:path><svg:path d="M352.188 256c0-38.399-21.188-72.407-53.188-88.863v59.82l50.801 50.801A100.596 100.596 0 00352.188 256z" fill="currentColor"></svg:path>`,
})
export class IonMdVolumeOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdWalkIcon],svg[ion-md-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M288 112c22.223 0 39.997-17.776 39.997-40 0-22.225-17.774-40-39.997-40s-40.003 17.775-40.003 40c0 22.224 17.78 40 40.003 40z" fill="currentColor"></svg:path><svg:path d="M288 232h104v-40h-72l-44.802-69.333c-7.698-11.667-18.136-18.136-30.933-18.136-3.198 0-8.828.531-12.799 1.747L120 144v112h40v-80l40.531-16L120 480h40l56.698-164.271L267 384v96h38V352l-57.031-96 19.745-61.864L288 232z" fill="currentColor"></svg:path>`,
})
export class IonMdWalkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdWalletIcon],svg[ion-md-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M202.7 341.3V170.7c0-23.5 19-42.7 42.7-42.7h197v-21.3c0-23.5-18.9-42.7-42.3-42.7H92c-23.7 0-44 18.5-44 42v300c0 23.5 20.3 42 44 42h308c23.5 0 42.3-19.2 42.3-42.7V384h-197c-23.6 0-42.6-19.2-42.6-42.7z" fill="currentColor"></svg:path><svg:path d="M245 186v140c0 8.8 7.2 16 16 16h187c8.8 0 16-7.2 16-16V186c0-8.8-7.2-16-16-16H261c-8.8 0-16 7.2-16 16zm77.1 101.9c-19.3 1.2-35.2-14.7-34-34 1-15.9 13.9-28.8 29.9-29.9 19.3-1.2 35.2 14.7 34 34-1.1 16-14 28.9-29.9 29.9z" fill="currentColor"></svg:path>`,
})
export class IonMdWalletIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdWarningIcon],svg[ion-md-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 464h448L256 48 32 464zm248-64h-48v-48h48v48zm0-80h-48v-96h48v96z" fill="currentColor"></svg:path>`,
})
export class IonMdWarningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdWatchIcon],svg[ion-md-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 256c0-51.001-24.004-96.001-60.996-125L336 16H176l-19.004 115C120.004 159.999 96 204.999 96 256c0 50.996 24.004 95.996 60.996 125L176 496h160l19.004-115C391.996 351.996 416 306.996 416 256zm-280 0c0-66.001 54.004-120 120-120s120 53.999 120 120c0 65.996-54.004 120-120 120s-120-54.004-120-120z" fill="currentColor"></svg:path>`,
})
export class IonMdWatchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdWaterIcon],svg[ion-md-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M380.5 163.3L256 32 131.5 163.3c-68.6 72.4-68.6 190 0 262.4C165.8 461.9 210.9 480 256 480s90.2-18.1 124.5-54.3c68.7-72.4 68.7-190 0-262.4z" fill="currentColor"></svg:path>`,
})
export class IonMdWaterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdWifiIcon],svg[ion-md-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 228.719c-22.879 0-41.597 18.529-41.597 41.18 0 22.652 18.718 41.182 41.597 41.182 22.878 0 41.597-18.529 41.597-41.182 0-22.651-18.719-41.18-41.597-41.18zm124.8 41.179c0-67.946-56.163-123.539-124.8-123.539s-124.8 55.593-124.8 123.539c0 45.303 24.961 85.447 62.396 107.072l20.807-36.032c-24.972-14.417-41.604-40.153-41.604-71.04 0-45.295 37.433-82.358 83.201-82.358 45.771 0 83.201 37.063 83.201 82.358 0 30.887-16.633 56.623-41.604 71.04l20.807 36.032c37.433-21.624 62.396-61.769 62.396-107.072zM256 64C141.597 64 48 156.654 48 269.898 48 346.085 89.592 411.968 152 448l20.799-36.032c-49.919-28.824-83.207-81.324-83.207-142.069 0-90.593 74.891-164.718 166.408-164.718 91.517 0 166.406 74.125 166.406 164.718 0 60.745-33.284 114.271-83.205 142.069L360 448c62.406-36.032 104-101.915 104-178.102C464 156.654 370.403 64 256 64z" fill="currentColor"></svg:path>`,
})
export class IonMdWifiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdWineIcon],svg[ion-md-wine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M234.667 277.333V408H128v40h256v-40H277.333V277.333L448 106.667V64H64v42.667l170.667 170.666zm-74.667-128l-42.667-42.666h277.334L352 149.333H160z" fill="currentColor"></svg:path>`,
})
export class IonMdWineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdWomanIcon],svg[ion-md-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M190.4 148.6L161 252.9c-6.3 22.8 20.7 31.7 27.3 10.3l26.3-96.2h7.4l-45.2 169H219v127c0 23 32 23 32 0V336h10v127c0 23 31 23 31 0V336h43.4l-46.2-169h8.4l26.3 96.2c6.5 21.9 33.3 12.5 27.3-10.2l-29.4-104.4c-4-11.8-18.2-32.6-42-33.6h-47.3c-24.6 1-38.7 21.6-42.1 33.6z" fill="currentColor"></svg:path><svg:path d="M292.6 69.2c0-20.6-16.4-37.3-36.6-37.3-20.2 0-36.6 16.7-36.6 37.3 0 20.6 16.4 37.3 36.6 37.3 20.2 0 36.6-16.7 36.6-37.3z" fill="currentColor"></svg:path>`,
})
export class IonMdWomanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMedalIcon],svg[ion-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="352" r="32" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M99.78 32a48 48 0 0 0-42.94 26.53l-31 62A48.26 48.26 0 0 0 24.28 160h278.2a4 4 0 0 0 3.39-1.87l75.5-120A4 4 0 0 0 378 32Z"></svg:path><svg:path fill="currentColor" d="m486.17 120.56l-31-62a47.7 47.7 0 0 0-32.79-25.46L342.5 160L298 231.08a128 128 0 0 0-84 0l-23.32-37.2a4 4 0 0 0-3.39-1.88H51.14a4 4 0 0 0-3.36 6.16l82.7 128.73a128 128 0 1 0 251 0L483.62 168a48.22 48.22 0 0 0 2.55-47.44m-226 295.31a64 64 0 1 1 59.69-59.69a64.08 64.08 0 0 1-59.68 59.69Z"></svg:path>`,
})
export class IonMedalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMedicalIcon],svg[ion-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 464h-32a32 32 0 0 1-32-32l.05-85.82a4 4 0 0 0-6-3.47l-74.34 43.06a31.48 31.48 0 0 1-43-11.52l-16.5-28.64l-.06-.1a31.65 31.65 0 0 1 11.56-42.8l74.61-43.25a4 4 0 0 0 0-6.92l-74.54-43.21a31.41 31.41 0 0 1-11.55-43l16.44-28.55a31.48 31.48 0 0 1 19.27-14.74a31.14 31.14 0 0 1 23.8 3.2l74.31 43a4 4 0 0 0 6-3.47L208 80a32 32 0 0 1 32-32h32a32 32 0 0 1 32 32v85.72a4 4 0 0 0 6 3.47l74.34-43.06a31.51 31.51 0 0 1 43 11.52l16.49 28.64l.06.09a31.52 31.52 0 0 1-11.64 42.86l-74.53 43.2a4 4 0 0 0 0 6.92l74.53 43.2a31.42 31.42 0 0 1 11.56 43l-16.44 28.55a31.48 31.48 0 0 1-19.27 14.74a31.14 31.14 0 0 1-23.8-3.2l-74.31-43a4 4 0 0 0-6 3.46L304 432a32 32 0 0 1-32 32m61.54-218.56"></svg:path>`,
})
export class IonMedicalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMedkitIcon],svg[ion-medkit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M336 64H176a16 16 0 0 0-16 16v16h192V80a16 16 0 0 0-16-16"></svg:path><svg:path fill="currentColor" d="M432 96h-48V80a48.05 48.05 0 0 0-48-48H176a48.05 48.05 0 0 0-48 48v16H80a64.07 64.07 0 0 0-64 64v256a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64V160a64.07 64.07 0 0 0-64-64m-96 208h-64v64a16 16 0 0 1-32 0v-64h-64a16 16 0 0 1 0-32h64v-64a16 16 0 0 1 32 0v64h64a16 16 0 0 1 0 32m16-208H160V80a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Z"></svg:path>`,
})
export class IonMedkitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMegaphoneIcon],svg[ion-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 176v.66a17.38 17.38 0 0 1-4.2 11.23v.05C38.4 194.32 32 205.74 32 224c0 16.55 5.3 28.23 11.68 35.91A19 19 0 0 1 48 272a32 32 0 0 0 32 32h8a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-8a32 32 0 0 0-32 32m404.18 10.55l-.93-.17a4 4 0 0 1-3.25-3.93V62c0-12.64-8.39-24-20.89-28.32c-11.92-4.11-24.34-.76-31.68 8.53a431 431 0 0 1-51.31 51.69c-23.63 20-46.24 34.25-67 42.31a8 8 0 0 0-5.15 7.47V299a16 16 0 0 0 9.69 14.69c19.34 8.29 40.24 21.83 62 40.28a434 434 0 0 1 51.68 52.16a26.22 26.22 0 0 0 21.1 9.87a33 33 0 0 0 10.44-1.74C439.71 410 448 399.05 448 386.4V265.53a4 4 0 0 1 3.33-3.94l.85-.14C461.8 258.84 480 247.67 480 224s-18.2-34.84-27.82-37.45M240 320V152a8 8 0 0 0-8-8h-96a8 8 0 0 0-8 8v304a24 24 0 0 0 24 24h52.45a32.66 32.66 0 0 0 25.93-12.45a31.65 31.65 0 0 0 5.21-29.05c-1.62-5.18-3.63-11-5.77-17.19c-7.91-22.9-18.34-37.07-21.12-69.32A32 32 0 0 0 240 320"></svg:path>`,
})
export class IonMegaphoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMenuIcon],svg[ion-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336"></svg:path>`,
})
export class IonMenuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMergeIcon],svg[ion-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M384 224c-23.637 0-44.307 12.89-55.391 32H319c-42.464 0-79.99-17.904-111.535-53.214-20.356-22.787-33.493-48.869-37.856-58.218C183.301 132.822 192 115.413 192 96c0-35.29-28.71-64-64-64S64 60.71 64 96c0 23.637 12.89 44.307 32 55.391V360.61C76.89 371.693 64 392.363 64 416c0 35.29 28.71 64 64 64s64-28.71 64-64c0-23.637-12.89-44.307-32-55.391V245.692C203.553 294.307 258.468 320 319 320h9.609c11.084 19.11 31.754 32 55.391 32 35.29 0 64-28.71 64-64s-28.71-64-64-64zM128 64c17.673 0 32 14.327 32 32s-14.327 32-32 32-32-14.327-32-32 14.327-32 32-32zm0 384c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm256-128c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z" fill="currentColor"></svg:path>`,
})
export class IonMergeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicIcon],svg[ion-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 448h128m64-240v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32m128 160v80"></svg:path><svg:path fill="currentColor" d="M256 320a78.83 78.83 0 0 1-56.55-24.1A80.9 80.9 0 0 1 176 239V128a79.69 79.69 0 0 1 80-80c44.86 0 80 35.14 80 80v111c0 44.66-35.89 81-80 81"></svg:path>`,
})
export class IonMicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicAIcon],svg[ion-mic-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M112.1 238.1l-.1 13.6c.1 65.6 46 120.6 108.1 136.2 1.3.1 2.6.5 3.8.9 5.9 2 10.1 6.9 12.1 12.8v58.7c0 10.9 8.9 19.7 20 19.7h.1c11.1 0 19.9-8.8 19.9-19.7v-58.8c2-5.9 6.1-10.7 12-12.7 1.2-.4 2.5-.8 3.9-.9C354 372.3 400 317.3 400 251.7v-13.6c0-10.4-8.9-18.9-19.5-18.9s-19.5 8.4-19.5 18.9v13.6c0 28.5-11.5 54.1-30.6 72.8-19.2 18.6-45.3 30.2-74.5 30.2-29.2 0-55.1-11.5-74.2-30.2S151 280.1 151 251.7v-13.6c0-10.4-8.8-18.9-19.5-18.9-10.6 0-19.4 8.5-19.4 18.9z" fill="currentColor"></svg:path><svg:path d="M179 107.7v143.8c0 41.8 34.7 75.7 77.5 75.7s77.5-33.9 77.5-75.7V107.7c0-41.8-34.7-75.7-77.5-75.7S179 65.9 179 107.7z" fill="currentColor"></svg:path>`,
})
export class IonMicAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicBIcon],svg[ion-mic-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256.4 32c-35.1.1-65.8 23.2-76.8 59.3-5.6 18.5-3.5 44.8-1.2 54.5 2.3 9.7 7.3 19.9 13.2 28.3 2.8 4.2 6.7 7.4 11.2 9.2.6.3 1.3.5 2 .8 3.3 1.1 6.5 2.2 10.1 3.1 11.8 3 27.1 4.7 41.1 4.8h2v-.1c14-.1 27.3-1.7 39.1-4.8 3.6-.9 6.9-2 10.2-3.1.7-.2 1.3-.5 1.9-.8 4.5-1.8 8.4-5 11.2-9.2 5.9-8.4 10.8-18.6 13.2-28.3 2.3-9.7 4.4-36-1.2-54.5-11-36-40.8-59.1-76-59.2z" fill="currentColor"></svg:path><svg:path d="M295.3 201.1c-.4 0-.7 0-1.1.1-.6.1-1.3.3-1.9.4-2 .4-4.1.8-6.1 1.2-9.2 1.5-18.9 2.3-29 2.4-10.1-.1-22.3-.9-31-2.4-2.1-.4-4.2-.8-6.2-1.2-.6-.1-1.3-.3-1.9-.4-.4-.1-.8-.1-1.1-.1-6.1 0-11 5.3-11.2 11.9.1.8.2 1.6.2 2.4 4.8 67.2 16.8 240.7 18.2 252 0 0 2.8 12.7 32.1 12.6 29.2.1 32.1-12.6 32.1-12.6 1.4-11.3 13.4-184.8 18.2-252 0-.8.1-1.6.2-2.4-.5-6.6-5.4-11.9-11.5-11.9zM266 281.7c0 6-4.5 10.9-10 10.9s-10-4.9-10-10.9V249c0-6 4.5-10.9 10-10.9s10 4.9 10 10.9v32.7z" fill="currentColor"></svg:path>`,
})
export class IonMicBIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicCIcon],svg[ion-mic-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M329.2 32H182.9C152.5 32 128 55.4 128 84.4V112h152v37H128v43h152v37H128v43h152v37H128v41.8c0 29 24.5 52.2 54.9 52.2H213v77h86v-77h30.2c30.3 0 54.8-23.2 54.8-52.2V309h-59v-37h59v-43h-59v-37h59v-43h-59v-37h59V84.4c0-29-24.5-52.4-54.8-52.4z" fill="currentColor"></svg:path>`,
})
export class IonMicCIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicCircleIcon],svg[ion-mic-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-48 128a48.14 48.14 0 0 1 48-48a48.14 48.14 0 0 1 48 48v64a48.14 48.14 0 0 1-48 48a48.14 48.14 0 0 1-48-48Zm144 72.22c0 23.36-10.94 45.61-30.79 62.66A103.7 103.7 0 0 1 272 334.26V352h16a16 16 0 0 1 0 32h-64a16 16 0 0 1 0-32h16v-17.74a103.7 103.7 0 0 1-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V224.3a16 16 0 0 1 32 0v23.92c0 25.66 28 55.48 64 55.48c29.6 0 64-24.23 64-55.48V224.3a16 16 0 1 1 32 0Z"></svg:path>`,
})
export class IonMicCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicOffIcon],svg[ion-mic-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M432 400L96 64"></svg:path><svg:path fill="currentColor" d="M400 240v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 208v32a111.7 111.7 0 0 1-2.68 24.38a2 2 0 0 0 .53 1.84l22.59 22.59a2 2 0 0 0 3.29-.72A143.3 143.3 0 0 0 400 240M256 352a112.36 112.36 0 0 1-112-112v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 208v32c0 74 56.1 135.12 128 143.11V432h-47.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 192 464h127.55c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 320 432h-48v-48.89a143.1 143.1 0 0 0 52-16.22a4 4 0 0 0 .91-6.35l-18.4-18.39a3 3 0 0 0-3.41-.58A111 111 0 0 1 256 352m1.14-304a79.66 79.66 0 0 0-68.47 36.57a4 4 0 0 0 .54 5L332.59 233a2 2 0 0 0 3.41-1.42V128.91C336 85 301 48.6 257.14 48"></svg:path><svg:path fill="currentColor" d="M179.41 215a2 2 0 0 0-3.41 1.42V239a80.9 80.9 0 0 0 23.45 56.9a78.55 78.55 0 0 0 77.8 21.19a2 2 0 0 0 .86-3.35Z"></svg:path>`,
})
export class IonMicOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicOffCircleIcon],svg[ion-mic-off-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m0 80a48.14 48.14 0 0 1 48 48v64a48 48 0 0 1-.63 7.71a2 2 0 0 1-3.46 1l-84.42-92.86a4 4 0 0 1-.47-4.77A48.08 48.08 0 0 1 256 128m32 256h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 224 352h16v-17.74a103.7 103.7 0 0 1-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V224a15.91 15.91 0 0 1 16.39-16A16.26 16.26 0 0 1 192 224.4v23.82c0 25.66 28 55.48 64 55.48c1.67 0 3.37-.09 5.06-.24a3.94 3.94 0 0 1 3.29 1.29l21.07 23.19a2 2 0 0 1-.89 3.26a100 100 0 0 1-12.53 3.06V352h15.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 288 384m-77.89-138.91l36.46 40.11a1 1 0 0 1-.95 1.66a48.26 48.26 0 0 1-37.25-41a1 1 0 0 1 1.74-.77m152.65 119.75a16 16 0 0 1-22.6-1.08l-192-210a16 16 0 0 1 23.68-21.52l192 210a16 16 0 0 1-1.08 22.6M352 248.22a77.1 77.1 0 0 1-11.93 40.87a2 2 0 0 1-3.19.3l-19.19-21.1a4 4 0 0 1-.76-4.16a43.4 43.4 0 0 0 3.07-15.91v-23.8a16.3 16.3 0 0 1 13.64-16.24c9.88-1.48 18.36 6.51 18.36 16.12Z"></svg:path>`,
})
export class IonMicOffCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMinusIcon],svg[ion-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 224h384v64H64z" fill="currentColor"></svg:path>`,
})
export class IonMinusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMinusCircledIcon],svg[ion-minus-circled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm128 240H128v-32h256v32z" fill="currentColor"></svg:path>`,
})
export class IonMinusCircledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMinusRoundIcon],svg[ion-minus-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z" fill="currentColor"></svg:path>`,
})
export class IonMinusRoundIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionModelSIcon],svg[ion-model-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M508.8 390.9c-.6 4.1-1.6 8.1-3.1 11.2-2.7 5.5-5.3 6-15.5 5.5-13.2-.6-32.1 0-52.1.8 0 5.5.2 8.1.2 8.1 1.3 15.1 8.1 15.6 10.8 15.6h43c3.8 0 7.3 0 10-1.8 3.5-2.3 5-9 6.3-20.7.2-1.7.3-3.9.4-6.5v-.1c0-.8.1-1.8.1-2.9V399c0-2.7 0-5.7-.1-8.1z" fill="currentColor"></svg:path><svg:path d="M3 390.9c.6 4.1 1.6 8.1 3.1 11.2 2.7 5.5 5.3 6 15.5 5.5 13.2-.6 32.1 0 52.1.8 0 5.5-.2 8.1-.2 8.1-1.3 15.1-8.1 15.6-10.8 15.6h-43c-3.8 0-7 0-10-1.8-3.6-2.1-5-9-6.3-20.7-.2-1.7-.3-3.9-.4-6.5v-.1c0-.8-.1-1.8-.1-2.9V399c.1-2.7.1-5.7.1-8.1z" fill="currentColor"></svg:path><svg:path d="M512 296.6c0-30.7-4-60.7-5.6-64-1.2-2.4-8.9-8.7-26.4-20.6-17.7-12.1-17.3-10.3-20.5-18.2 2.9-.9 5.7-2.6 7.4-2.8 3.8-.4 4 3.2 11.9 3.2s25-2.1 28.5-5.6c3.5-3.5 4.6-4.7 4.6-7.8s-1.8-9.5-5.2-13.3-17.9-5.7-26.4-6.8-9.7 0-11.9 1.4c-3.5 2.2-3.7 22.3-3.7 22.3l-8.3.2c-5.4-13.3-12.9-40.1-24.6-61.2-12.8-23-26.2-30.2-31.8-32-5.5-1.7-10.5-2.9-48-6.7-38.3-4-68.8-4.5-96-4.5s-57.7.6-96 4.5c-37.5 3.9-42.5 5-48 6.7-5.5 1.7-19 9-31.8 32-11.7 21.1-19.2 47.9-24.6 61.2l-8.3-.2s-.1-20.1-3.7-22.3c-2.2-1.4-3.4-2.6-11.9-1.4s-23 3-26.4 6.8S.1 177.7.1 180.8s1.1 4.4 4.6 7.8c3.5 3.5 20.6 5.6 28.5 5.6s8.1-3.6 11.9-3.2c1.7.2 4.6 1.9 7.4 2.8-3.3 7.9-2.8 6.1-20.5 18.2-17.5 12-25.3 18.2-26.4 20.6-1.6 3.3-5.6 33.3-5.6 64s2.2 58.3 2.2 68.1c0 4.1 0 11.3.9 18.2.6 4.1 1.5 8.1 3.1 11.2 2.7 5.5 5.2 6 15.5 5.5 13.2-.6 32.3 0 52 .8 13.2.5 26.7 1 38.7 1.3 30 .6 21.2-4.4 34-4.2 12.8.2 63.3 2.3 109.5 2.3s96.8-2.1 109.5-2.3c12.8-.2 4 4.8 34 4.2 12-.2 25.5-.8 38.7-1.3 19.7-.7 38.9-1.4 52-.8 10.3.5 12.8 0 15.5-5.5 1.5-3.1 2.5-7.1 3.1-11.2 1-6.9.9-14.1.9-18.2.2-9.7 2.4-37.4 2.4-68.1zM86.2 145.2c4.8-11.2 19.2-33.7 26.2-37.7 1.7-1 16.6-5.7 53.9-8.2 34.3-2.3 72.2-3.2 89.8-3.2s55.5.9 89.8 3.2c37.2 2.5 52.3 7.1 53.9 8.2 9 6.2 21.4 26.5 26.2 37.7 4.8 11.2 11.2 33.2 10 36.2-1.2 3 1.2 4.5-15 3.2-16.1-1.2-117.2-2.5-164.8-2.5-47.5 0-148.6 1.3-164.8 2.5-16.2 1.2-13.8-.2-15-3.2-1.4-3 5-24.9 9.8-36.2zM123 270.4c-7.2 1.8-11.5 5.7-20.5 5.6-9 0-33.3-4.1-38.5-4.3-5.2-.2-9.8 3.5-12.5 4.2s-8-1.2-16-3.7-12.7-1.8-15.3-12.7c-2.7-10.8 0-26.3 0-26.3 17.3-.8 34 .8 65.3 9.6 31.3 8.8 48.7 25.7 48.7 25.7s-4 .1-11.2 1.9zm235.2 78.8c-14.3 1.9-74.2 2.4-102.2 2.4s-87.9-.6-102.2-2.4c-14.6-1.9-33.6-19.4-20.5-33.3 17.7-18.9 14.4-18.3 54.6-23.5 34.8-4.5 61.2-4.7 68.1-4.7 6.8 0 33.3.3 68.1 4.7 40.2 5.2 36.9 4.6 54.6 23.5 13.1 13.9-5.9 31.4-20.5 33.3zm133.6-89.6c-2.7 10.8-7.3 10.2-15.3 12.7s-13.3 4.3-16 3.7-7.3-4.3-12.5-4.2c-5.2.2-29.5 4.3-38.5 4.3s-13.3-3.8-20.5-5.6c-7.2-1.8-11.2-1.8-11.2-1.8s17.3-17 48.7-25.7c31.3-8.8 48-10.4 65.3-9.6 0-.2 2.7 15.3 0 26.2z" fill="currentColor"></svg:path>`,
})
export class IonModelSIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMonitorIcon],svg[ion-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M468.7 64H43.3c-6 0-11.3 5-11.3 11.1v265.7c0 6.2 5.2 11.1 11.3 11.1h425.4c6 0 11.3-5 11.3-11.1V75.1c0-6.1-5.2-11.1-11.3-11.1zM448 320H64V96h384v224z" fill="currentColor"></svg:path><svg:path d="M302.5 448c28-.5 41.5-3.9 29-12.5-12.5-8.7-28.5-15.3-29-22.5-.3-3.7-1.7-45-1.7-45h-89.6s-1.5 41.3-1.7 45c-.5 7.1-16.5 13.8-29 22.5s1 12 29 12.5h93z" fill="currentColor"></svg:path>`,
})
export class IonMonitorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMoonIcon],svg[ion-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200c31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480"></svg:path>`,
})
export class IonMoonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMoreIcon],svg[ion-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M113.7 304C86.2 304 64 282.6 64 256c0-26.5 22.2-48 49.7-48 27.6 0 49.8 21.5 49.8 48 0 26.6-22.2 48-49.8 48z" fill="currentColor"></svg:path><svg:path d="M256 304c-27.5 0-49.8-21.4-49.8-48 0-26.5 22.3-48 49.8-48 27.5 0 49.7 21.5 49.7 48 0 26.6-22.2 48-49.7 48z" fill="currentColor"></svg:path><svg:path d="M398.2 304c-27.5 0-49.8-21.4-49.8-48 0-26.5 22.2-48 49.8-48 27.5 0 49.8 21.5 49.8 48 0 26.6-22.2 48-49.8 48z" fill="currentColor"></svg:path>`,
})
export class IonMoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMouseIcon],svg[ion-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32c-.46 0-.917.011-1.376.015l5.747.057A147.44 147.44 0 0 0 256 32z" fill="currentColor"></svg:path><svg:path d="M378.553 193.211c-.195.064-.414.16-.619.269-34.234 13.289-76.337 22.52-121.886 22.475-45.52-.076-87.626-9.398-121.81-22.772a4.153 4.153 0 0 0-.647-.265c-1.531-.554-3.146-.897-4.841-.917-.254-.001-.5-.013-.75 0v176.012C128 429.892 185.308 480 256 480c21.992 0 42.687-4.803 60.766-13.355.095-.045.191-.087.286-.133l.08-.039a141.38 141.38 0 0 0 14.122-7.828C363.219 438.275 384 405.271 384 368.012V192c-.191-.008-.496 0-.689 0-1.727.014-3.219.651-4.758 1.211zm-61.421 273.213l-.08.039-.286.133.286-.133.08-.039a141.155 141.155 0 0 0 14.122-7.825 131.95 131.95 0 0 1-14.122 7.825z" fill="currentColor"></svg:path><svg:path d="M331.254 458.599a141.155 141.155 0 0 1-14.122 7.825 131.95 131.95 0 0 0 14.122-7.825z" fill="currentColor"></svg:path><svg:path d="M260.371 32.072l-5.747-.057C184.566 32.662 128 82.547 128 144v22.708a31.748 31.748 0 0 0 7.251 5.115c.673.337 1.386.659 2.059.996.032.027.077.01.109.036 22.757 10.35 51.429 15.801 83.415 19.006.694.078 1.397.107 2.148.12 11.258.016 17.014.019 17.018-10.57V96c0-8.836 7.164-16 16-16s16 7.164 16 16v86.328c-.088 9.672 5.926 9.72 17.2 9.749a31.112 31.112 0 0 0 2.081-.105c.062-.003.141.005.244-.02 31.682-3.119 60.143-8.405 82.808-18.59 1.162-.545 2.291-1.056 3.407-1.581a32.006 32.006 0 0 0 6.26-4.466V144c0-60.575-54.961-109.91-123.629-111.928z" fill="currentColor"></svg:path>`,
})
export class IonMouseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMoveIcon],svg[ion-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m176 112l80-80l80 80m-80.02-80l.02 448m-80-80l80 80l80-80m64-224l80 80l-80 80M112 176l-80 80l80 80m-80-80h448"></svg:path>`,
})
export class IonMoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMusicNoteIcon],svg[ion-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M426 32.1c-2.2 0-5.1.6-5.1.6L203.3 65.9C189.5 69.6 177 83 176 97.5V384h-61v-.1c-28 0-51.1 20-51.1 48s23.1 48 51.3 48h36.2c15.3 0 28.9-6.9 38.3-17.5.1-.1.3-.1.4-.2.6-.6 1-1.5 1.5-2.1 1.3-1.6 2.4-3.2 3.4-5 9.6-14.1 13-32.8 13-41.1V182l208-38v192h-60.5c-28.3 0-51.2 19.9-51.2 48s22.9 48 51.2 48h37.2c18.2 0 34.1-6 43.2-21h.2c9-12 12-30.2 12-54.9V53.3c-.1-11.7-10-21.2-22.1-21.2z" fill="currentColor"></svg:path>`,
})
export class IonMusicNoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMusicalNoteIcon],svg[ion-musical-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.83 480a55.2 55.2 0 0 1-32.36-10.55A56.64 56.64 0 0 1 128 423.58a50.26 50.26 0 0 1 34.14-47.73L213 358.73a16.25 16.25 0 0 0 11-15.49V92a32.1 32.1 0 0 1 24.09-31.15l108.39-28.14A22 22 0 0 1 384 54v57.75a32.09 32.09 0 0 1-24.2 31.19l-91.65 23.13A16.24 16.24 0 0 0 256 181.91V424a48.22 48.22 0 0 1-32.78 45.81l-21.47 7.23a56 56 0 0 1-17.92 2.96"></svg:path>`,
})
export class IonMusicalNoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMusicalNotesIcon],svg[ion-musical-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M421.84 37.37a25.86 25.86 0 0 0-22.6-4.46L199.92 86.49A32.3 32.3 0 0 0 176 118v226c0 6.74-4.36 12.56-11.11 14.83l-.12.05l-52 18C92.88 383.53 80 402 80 423.91a55.54 55.54 0 0 0 23.23 45.63A54.78 54.78 0 0 0 135.34 480a55.8 55.8 0 0 0 17.75-2.93l.38-.13l21.84-7.94A47.84 47.84 0 0 0 208 423.91v-212c0-7.29 4.77-13.21 12.16-15.07l.21-.06L395 150.14a4 4 0 0 1 5 3.86v141.93c0 6.75-4.25 12.38-11.11 14.68l-.25.09l-50.89 18.11A49.09 49.09 0 0 0 304 375.92a55.67 55.67 0 0 0 23.23 45.8a54.63 54.63 0 0 0 49.88 7.35l.36-.12l21.84-7.95A47.83 47.83 0 0 0 432 375.92V58a25.74 25.74 0 0 0-10.16-20.63"></svg:path>`,
})
export class IonMusicalNotesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNaviconIcon],svg[ion-navicon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 241h320v32H96z" fill="currentColor"></svg:path><svg:path d="M96 145h320v32H96z" fill="currentColor"></svg:path><svg:path d="M96 337h320v32H96z" fill="currentColor"></svg:path>`,
})
export class IonNaviconIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNaviconRoundIcon],svg[ion-navicon-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z" fill="currentColor"></svg:path><svg:path d="M417.4 96H94.6C77.7 96 64 110.3 64 128s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z" fill="currentColor"></svg:path><svg:path d="M417.4 352H94.6C77.7 352 64 366.3 64 384s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z" fill="currentColor"></svg:path>`,
})
export class IonNaviconRoundIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNavigateIcon],svg[ion-navigate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 464a16 16 0 0 1-16-16.42V264.13a8 8 0 0 0-8-8H64.41a16.31 16.31 0 0 1-15.49-10.65a16 16 0 0 1 8.41-19.87l384-176.15a16 16 0 0 1 21.22 21.19l-176 384A16 16 0 0 1 272 464"></svg:path>`,
})
export class IonNavigateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNavigateCircleIcon],svg[ion-navigate-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48M351 175.24l-82.24 186.52c-4.79 10.47-20.78 7-20.78-4.56V268a4 4 0 0 0-4-4H154.8c-11.52 0-15-15.87-4.57-20.67L336.76 161A10.73 10.73 0 0 1 351 175.24"></svg:path>`,
})
export class IonNavigateCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNetworkIcon],svg[ion-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 96c0-35.29-28.71-64-64-64s-64 28.71-64 64c0 23.637 12.89 44.307 32 55.391v52.832l-96 48-96-48v-52.832c19.11-11.084 32-31.754 32-55.391 0-35.29-28.71-64-64-64S64 60.71 64 96c0 23.637 12.89 44.307 32 55.391v92.387l128 64v52.832c-19.11 11.084-32 31.754-32 55.391 0 35.29 28.71 64 64 64s64-28.71 64-64c0-23.637-12.89-44.307-32-55.391v-52.832l128-64v-92.387c19.11-11.084 32-31.754 32-55.391zM128 64c17.673 0 32 14.327 32 32s-14.327 32-32 32-32-14.327-32-32 14.327-32 32-32zm128 384c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm128-320c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z" fill="currentColor"></svg:path>`,
})
export class IonNetworkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNewspaperIcon],svg[ion-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M439.91 112h-23.82a.09.09 0 0 0-.09.09V416a32 32 0 0 0 32 32a32 32 0 0 0 32-32V152.09A40.09 40.09 0 0 0 439.91 112"></svg:path><svg:path fill="currentColor" d="M384 416V72a40 40 0 0 0-40-40H72a40 40 0 0 0-40 40v352a56 56 0 0 0 56 56h342.85a1.14 1.14 0 0 0 1.15-1.15a1.14 1.14 0 0 0-.85-1.1A64.11 64.11 0 0 1 384 416M96 128a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16h-64a16 16 0 0 1-16-16Zm208 272H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 368h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 400m0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 304h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 336m0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 240h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 272m0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 240 176h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 208m0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 240 112h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 144"></svg:path>`,
})
export class IonNewspaperIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNoSmokingIcon],svg[ion-no-smoking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M360 256h16v48h-16z" fill="currentColor"></svg:path><svg:path d="M112 304h137.6l-48-48H112z" fill="currentColor"></svg:path><svg:path d="M364.5 60.1c-.4-.2-.7-.4-1-.6-10.9-6-22.5-10.7-34.4-14.8l-5.4-1.8C302.3 36.1 279.6 32 256 32 132.3 32 32 132.3 32 256c0 84.3 46.6 157.6 115.4 195.8.4.2.7.5 1.1.7 10.9 6 22.5 10.7 34.4 14.8l5.4 1.8c21.4 6.8 44 10.9 67.7 10.9 123.7 0 224-100.3 224-224 0-84.3-46.6-157.7-115.5-195.9zM256 426.4c-9.3 0-18.4-.9-27.2-2.4-9.8-1.6-19.3-4.1-28.5-7.3-1.9-.6-3.8-1.2-5.6-1.9-6.5-2.5-12.9-5.3-19-8.6-53.6-28.7-90.1-85.2-90.1-150.3 0-37.2 12.4-71.4 32.7-99.4l237.2 237.2c-28.1 20.3-62.3 32.7-99.5 32.7zm137.8-71L156.6 118.2c28-20.2 62.1-32.6 99.4-32.6 9.3 0 18.3.9 27.2 2.4 9.8 1.6 19.3 4.1 28.5 7.3 1.8.6 3.7 1.2 5.6 1.9 6.2 2.4 12.2 5 18 8.1 54.2 28.5 91.2 85.3 91.2 150.8-.1 37.2-12.5 71.3-32.7 99.3z" fill="currentColor"></svg:path><svg:path d="M352 298v-42h-42z" fill="currentColor"></svg:path><svg:path d="M384 256h16v48h-16z" fill="currentColor"></svg:path><svg:path d="M360.1 212.7c-8.8-4.1-22-5.7-45.6-5.7h-3.6c-12.7.1-15.9-.1-20-6.1-2.8-4.2-1-14.8 3.7-21.9 1.6-2.4 1.8-5.6.4-8.2-1.4-2.6-4.1-4.2-7-4.3-.1 0-9.4-.1-18.3-3.9-10.6-4.5-15.6-12.1-15.6-23.1 0-25.8 21.8-27.7 22.8-27.7v-16c-12 0-38.8 11-38.8 43.7 0 17.5 9 31 25.7 38 4.2 1.7 8.4 2.9 12 3.6-3.3 9.8-3.6 20.9 1.7 28.7 9 13.3 20.3 13.2 33.3 13.1h3.5c26.3 0 34.6 2.3 38.9 4.3 5.7 2.6 6.8 11.5 6.6 19.7v1h16v-1c0-7.1.3-26.8-15.7-34.2z" fill="currentColor"></svg:path><svg:path d="M400 248c0-25.7-3-43.2-9.1-53.6C382.3 180 368.5 172 352 172h-17.4c2.9-8.3 5.4-19.8 3.5-30.9-3.2-18.8-19.1-30-43.1-30v16c21 0 26.1 9.1 27.4 16.7 2.5 14.5-6.8 32.1-6.9 32.3-1.4 2.5-1.3 5.5.1 7.9 1.4 2.4 4.1 3.9 6.9 3.9H352c10.9 0 19.4 4.9 25.1 14.6 3.1 5.3 6.9 17.5 6.9 45.4h16z" fill="currentColor"></svg:path>`,
})
export class IonNoSmokingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsIcon],svg[ion-notifications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93c-22-26.61-35.31-42.67-35.31-118c0-39-9.33-71-27.72-95c-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.1 3.1 0 0 1-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14c0 75.36-13.29 91.42-35.31 118c-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 0 0-4.61-37.66M256 480a80.06 80.06 0 0 0 70.44-42.13a4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480"></svg:path>`,
})
export class IonNotificationsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsCircleIcon],svg[ion-notifications-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m0 336c-20.9 0-37.52-8.86-39.75-27.58a4 4 0 0 1 4-4.42h71.45a4 4 0 0 1 4 4.48C293.15 374.85 276.68 384 256 384m98-48H158c-11.84 0-18-15-11.19-23c16.33-19.34 27.87-27.47 27.87-80.8c0-48.87 25.74-66.21 47-74.67a11.35 11.35 0 0 0 6.33-6.68C231.7 138.6 242.14 128 256 128s24.28 10.6 28 22.86a11.4 11.4 0 0 0 6.34 6.68c21.21 8.44 47 25.81 47 74.67c0 53.33 11.53 61.46 27.86 80.8c6.74 7.99.57 22.99-11.2 22.99"></svg:path>`,
})
export class IonNotificationsCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsOffIcon],svg[ion-notifications-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 464a15.92 15.92 0 0 1-11.31-4.69l-384-384a16 16 0 0 1 22.62-22.62l384 384A16 16 0 0 1 448 464m-7.92-122.69c-1.66-2-3.29-4-4.89-5.93c-22-26.61-35.31-42.67-35.31-118c0-39-9.33-71-27.72-95c-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.1 3.1 0 0 1-.81.65a158 158 0 0 0-21.88 11a8 8 0 0 0-1.49 12.49l261.78 261.74a8 8 0 0 0 13.6-6.63a35.4 35.4 0 0 0-7.84-18.5M112.14 217.35c0 75.36-13.29 91.42-35.31 118c-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H312.8a8 8 0 0 0 5.66-13.66l-192-192a8 8 0 0 0-13.62 5q-.7 8.69-.7 18.04M256 480a80.06 80.06 0 0 0 70.44-42.13a4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480"></svg:path>`,
})
export class IonNotificationsOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsOffCircleIcon],svg[ion-notifications-off-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48M146.83 313c16.33-19.34 27.86-27.47 27.86-80.8q0-3.75.2-7.26a4 4 0 0 1 7-2.52l98 106.87a4 4 0 0 1-2.94 6.7H158C146.18 336 140.06 321 146.83 313m148.93 43.41C293.53 375.14 276.92 384 256 384s-37.51-8.86-39.75-27.58a4 4 0 0 1 4-4.42h71.53a4 4 0 0 1 3.98 4.42Zm67 17.42a16 16 0 0 1-22.6-1.08l-192-212a16 16 0 0 1 23.68-21.52l192 212a16 16 0 0 1-1.08 22.61ZM361 323.21L216.49 165.53a4 4 0 0 1 1.3-6.36c1.31-.58 2.61-1.12 3.89-1.63a11.33 11.33 0 0 0 6.32-6.68c3.72-12.26 14.15-22.86 28-22.86s24.29 10.6 28 22.86a11.34 11.34 0 0 0 6.34 6.68c21.21 8.44 47 25.81 47 74.67c0 53.33 11.54 61.46 27.87 80.8a12.1 12.1 0 0 1 2.76 7.25a4 4 0 0 1-6.97 2.95"></svg:path>`,
})
export class IonNotificationsOffCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNuclearIcon],svg[ion-nuclear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48M429 239.92l-93.08-.1a2 2 0 0 1-1.95-1.57a80.08 80.08 0 0 0-27.44-44.17a2 2 0 0 1-.54-2.43l41.32-83.43a2 2 0 0 1 2.87-.81A176.2 176.2 0 0 1 431 237.71a2 2 0 0 1-2 2.21m-220.8 20.46a48 48 0 1 1 43.42 43.42a48 48 0 0 1-43.42-43.42m-43.55-152.16L206 191.65a2 2 0 0 1-.54 2.43A80.08 80.08 0 0 0 178 238.25a2 2 0 0 1-2 1.57l-93.08.1a2 2 0 0 1-2-2.21a176.2 176.2 0 0 1 80.82-130.3a2 2 0 0 1 2.91.81m-.37 295.34l56.31-74.09a2 2 0 0 1 2.43-.6a79.84 79.84 0 0 0 66 0a2 2 0 0 1 2.43.6l56.31 74.09a2 2 0 0 1-.54 2.92a175.65 175.65 0 0 1-182.36 0a2 2 0 0 1-.58-2.92"></svg:path>`,
})
export class IonNuclearIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNutritionIcon],svg[ion-nutrition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M439 166.29c-18.67-32.57-47.46-50.81-85.57-54.23c-20.18-1.8-39 3.37-57.23 8.38c-14.15 3.89-27.52 7.56-40.2 7.56s-26-3.68-40.06-7.57c-18.28-5-37.18-10.26-57.43-8.36c-36.39 3.41-65.51 22.11-84.31 54.08C56.82 195.76 48 236.76 48 288c0 40.4 15 90.49 40 134c12.82 22.25 47 74 87.16 74c30.77 0 47.15-9.44 59.11-16.33c8.3-4.78 13.31-7.67 21.69-7.67s13.39 2.89 21.69 7.67c12 6.89 28.35 16.33 59.15 16.33c40.17 0 74.34-51.76 87.16-74c25.07-43.5 40-93.59 40-134c.04-52.57-8.14-92.38-24.96-121.71M216 352c-13.25 0-24-21.49-24-48s10.75-48 24-48s24 21.49 24 48s-10.75 48-24 48m80 0c-13.25 0-24-21.49-24-48s10.75-48 24-48s24 21.49 24 48s-10.75 48-24 48"></svg:path><svg:path fill="currentColor" d="M265.1 111.93c13.16-1.75 37.86-7.83 58.83-28.79a98 98 0 0 0 28-58.2a8 8 0 0 0-8.55-8.94c-12.71.95-36.76 5.87-58.73 27.85A97.6 97.6 0 0 0 256 103.2a8 8 0 0 0 9.1 8.73"></svg:path>`,
})
export class IonNutritionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionOpenIcon],svg[ion-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 304a16 16 0 0 1-11.31-27.31l157.94-157.94A55.7 55.7 0 0 0 344 112H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V168a55.7 55.7 0 0 0-6.75-26.63L235.31 299.31A15.92 15.92 0 0 1 224 304"></svg:path><svg:path fill="currentColor" d="M448 48H336a16 16 0 0 0 0 32h73.37l-38.74 38.75a56.35 56.35 0 0 1 22.62 22.62L432 102.63V176a16 16 0 0 0 32 0V64a16 16 0 0 0-16-16"></svg:path>`,
})
export class IonOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionOptionsIcon],svg[ion-options-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 144h226.75a48 48 0 0 0 90.5 0H448a16 16 0 0 0 0-32h-66.75a48 48 0 0 0-90.5 0H64a16 16 0 0 0 0 32m384 224h-66.75a48 48 0 0 0-90.5 0H64a16 16 0 0 0 0 32h226.75a48 48 0 0 0 90.5 0H448a16 16 0 0 0 0-32m0-128H221.25a48 48 0 0 0-90.5 0H64a16 16 0 0 0 0 32h66.75a48 48 0 0 0 90.5 0H448a16 16 0 0 0 0-32"></svg:path>`,
})
export class IonOptionsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionOutletIcon],svg[ion-outlet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M369.541 32H142.359C81.521 32 32 82.574 32 144.604v222.79C32 429.426 81.521 480 142.359 480h227.182C430.479 480 480 429.426 480 367.395v-222.79C480 82.574 430.479 32 369.541 32zM175 250.954v.67c0 10.882-9.09 20.376-19.875 20.376h-23.27C121.073 272 112 262.506 112 251.624V148.161c1-10.768 9.193-20.161 19.855-20.161h23.27c10.886 0 19.875 9.847 19.875 20.831v102.123zM297 395.74v2.68c0 11.439-8.872 17.58-20.1 17.58h-41.798c-11.23 0-20.102-8.141-20.102-19.58v-29.317c0-23.33 18.118-42.287 40.999-42.287 22.883 0 41.001 18.957 41.001 42.287v28.637zm103-144.786v.67c0 10.882-9.071 20.376-19.855 20.376h-24.27C345.093 272 336 262.506 336 251.624V148.161c1-10.768 9.215-20.161 19.875-20.161h24.27c10.784 0 19.855 9.847 19.855 20.831v102.123z" fill="currentColor"></svg:path>`,
})
export class IonOutletIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPaintbrushIcon],svg[ion-paintbrush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M149.515 283.349c-51.921 0-83.939 45.661-83.939 95.085 0 22.691-10.071 39.153-33.575 48.104 17.907 34.678 87.777 41.157 117.515 35.797 35.642-6.426 80.077-24.873 90.654-76.969 12.31-60.627-38.736-102.017-90.655-102.017z" fill="currentColor"></svg:path><svg:path d="M467.638 60.356c-12.955-12.948-29.964-17.292-44.92-5.35L247.598 209.1c-8.648-2.371-16.525-1.869-22.909 2.346L165.896 260.4c-1.611 1.611-1.545 4.304.066 5.914.499.501 1.064.79 1.697.98.642.034 1.264.059 1.899.103.019-.002.036-.01.054-.014 47.938 3.432 91.034 36.754 89.3 89.506-.016.505-.029 1.007-.054 1.516.123.848.5 1.664 1.149 2.315a4.124 4.124 0 0 0 5.781.044c.018-.018.037-.027.055-.044.063-.063.106-.137.164-.2l50.457-57.342c4.216-6.374 4.72-14.24 2.355-22.875l154.169-175.047c11.951-14.948 7.604-31.948-5.35-44.9z" fill="currentColor"></svg:path><svg:path d="M165.887 260.409l.009-.009-.008.007z" fill="currentColor"></svg:path>`,
})
export class IonPaintbrushIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPaintbucketIcon],svg[ion-paintbucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 64l39.667 72.102L16 288l197.604 192 163.328-160 58.33-12.307L160 32l-32 32zm197.131 224H104.857L215 177.863 325.131 288z" fill="currentColor"></svg:path><svg:path d="M435.262 307.693s-60.734 66.179-60.732 99.207c0 33.028 27.192 59.803 60.731 59.801 33.548.002 60.74-26.772 60.739-59.801.001-33.028-60.738-99.207-60.738-99.207z" fill="currentColor"></svg:path>`,
})
export class IonPaintbucketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPaperAirplaneIcon],svg[ion-paper-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 272l128 48 16 160 80-112 112 112L480 32 32 272zm318.7 145.4L256 320l128-176-192 153.8-82.6-31 322-172.5-80.7 323.1z" fill="currentColor"></svg:path>`,
})
export class IonPaperAirplaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPaperPlaneIcon],svg[ion-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M473 39.05a24 24 0 0 0-25.5-5.46L47.47 185h-.08a24 24 0 0 0 1 45.16l.41.13l137.3 58.63a16 16 0 0 0 15.54-3.59L422 80a7.07 7.07 0 0 1 10 10L226.66 310.26a16 16 0 0 0-3.59 15.54l58.65 137.38c.06.2.12.38.19.57c3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0 0 23-15.46L478.39 64.62A24 24 0 0 0 473 39.05"></svg:path>`,
})
export class IonPaperPlaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPaperclipIcon],svg[ion-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M324.6 154.9c-6.3-.1-11.4 5.1-11.4 11.6l-.2 194.8c-.1 43.8-29.7 63.4-57.2 63.2-27.5-.3-57.1-20.4-57-64.1 0-33.5.2-167.7.3-234.8 0-15.4 6-27.4 16.8-33.7 10.6-6.2 24.4-6.1 35 .3 10.8 6.5 16.7 18.6 16.7 34l-.3 224.5c0 7.3-1.7 13.3-4.7 17.1-1.9 2.4-4.4 3.8-6.9 3.8-5.6-.1-11.4-7.3-11.3-20.8 0 0 .2-166.3.3-172.7 0-6.5-5.1-11.8-11.4-11.8-6.3 0-11.4 5.2-11.4 11.7l-.3 172.7c0 29 17.2 44.3 34.2 44.5 9.4.1 18.3-4.4 24.6-12.4 6.3-8 9.7-19 9.7-31.8l.3-224.5c0-23.8-10.2-43.6-28.1-54.3-17.5-10.6-40.3-10.8-57.9-.5-17.9 10.5-28.2 30.1-28.3 53.9-.1 67-.2 201.2-.3 234.8-.1 57.2 40.1 87.4 79.8 87.8 20.5.2 41.1-7.7 56.3-23.1 14.2-14.5 23.7-35.7 23.7-63.4l.1-194.9c.3-6.6-4.8-11.9-11.1-11.9z" fill="currentColor"></svg:path>`,
})
export class IonPaperclipIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPartlySunnyIcon],svg[ion-partly-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-26.66 10.08-49.8 29.14-66.91c15.24-13.68 36.17-23.21 59-26.84c.06 0 .08 0 .09-.05c6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 0 1 232 160c30.23 0 58.48 9.39 81.71 27.17a142.24 142.24 0 0 1 42.19 53.21a16 16 0 0 0 11.19 9c26 5.61 48.4 17.29 65.17 34C453 304.11 464 331.71 464 363.2c0 32.85-13.13 62.87-37 84.52c-22.89 20.82-53.8 32.28-87 32.28m47.89-258.32a168.8 168.8 0 0 1 34.76 14.71a4 4 0 0 0 5.82-2.44a97 97 0 0 0 3.53-26.68c-.39-52.43-43.48-95.22-95.91-95.27A95.46 95.46 0 0 0 281 129.33h-.06a3.38 3.38 0 0 0 1 6a162.5 162.5 0 0 1 51.28 26.4a173.9 173.9 0 0 1 45.32 52.51a16 16 0 0 0 9.35 7.44M496 224h-32a16 16 0 0 1 0-32h32a16 16 0 0 1 0 32M336 96a16 16 0 0 1-16-16V48a16 16 0 0 1 32 0v32a16 16 0 0 1-16 16m-90.51 37.49a15.92 15.92 0 0 1-11.31-4.69l-22.63-22.62a16 16 0 0 1 22.63-22.63l22.62 22.63a16 16 0 0 1-11.31 27.31m181.02 0a16 16 0 0 1-11.31-27.31l22.62-22.63a16 16 0 0 1 22.63 22.63l-22.63 22.62a15.92 15.92 0 0 1-11.31 4.69"></svg:path>`,
})
export class IonPartlySunnyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPauseIcon],svg[ion-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 432h-48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v320a16 16 0 0 1-16 16m144 0h-48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v320a16 16 0 0 1-16 16"></svg:path>`,
})
export class IonPauseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPauseCircleIcon],svg[ion-pause-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-32 272a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0Zm96 0a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0Z"></svg:path>`,
})
export class IonPauseCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPawIcon],svg[ion-paw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M490.39 182.75c-5.55-13.19-14.77-22.7-26.67-27.49l-.16-.06a46.5 46.5 0 0 0-17-3.2h-.64c-27.24.41-55.05 23.56-69.19 57.61c-10.37 24.9-11.56 51.68-3.18 71.64c5.54 13.2 14.78 22.71 26.73 27.5l.13.05a46.5 46.5 0 0 0 17 3.2c27.5 0 55.6-23.15 70-57.65c10.24-24.87 11.37-51.63 2.98-71.6M381.55 329.61c-15.71-9.44-30.56-18.37-40.26-34.41C314.53 250.8 298.37 224 256 224s-58.57 26.8-85.39 71.2c-9.72 16.06-24.6 25-40.36 34.48c-18.07 10.86-36.74 22.08-44.8 44.16a66.9 66.9 0 0 0-4.65 25c0 35.95 28 65.2 62.4 65.2c17.75 0 36.64-6.15 56.63-12.66c19.22-6.26 39.09-12.73 56.27-12.73s37 6.47 56.15 12.73C332.2 457.85 351 464 368.8 464c34.35 0 62.3-29.25 62.3-65.2a67 67 0 0 0-4.75-25c-8.06-22.1-26.74-33.33-44.8-44.19M150 188.85c11.9 14.93 27 23.15 42.52 23.15a43 43 0 0 0 6.33-.47c32.37-4.76 52.54-44.26 45.92-90C242 102.3 234.6 84.39 224 71.11C212.12 56.21 197 48 181.49 48a43 43 0 0 0-6.33.47c-32.37 4.76-52.54 44.26-45.92 90c2.76 19.2 10.16 37.09 20.76 50.38m163.16 22.68a43 43 0 0 0 6.33.47c15.53 0 30.62-8.22 42.52-23.15c10.59-13.29 17.95-31.18 20.75-50.4c6.62-45.72-13.55-85.22-45.92-90a43 43 0 0 0-6.33-.47C315 48 299.88 56.21 288 71.11c-10.6 13.28-18 31.19-20.76 50.44c-6.62 45.72 13.55 85.22 45.92 89.98M111.59 308.8l.14-.05c11.93-4.79 21.16-14.29 26.69-27.48c8.38-20 7.2-46.75-3.15-71.65C120.94 175.16 92.85 152 65.38 152a46.4 46.4 0 0 0-17 3.2l-.14.05c-11.9 4.75-21.13 14.29-26.66 27.48c-8.38 20-7.2 46.75 3.15 71.65C39.06 288.84 67.15 312 94.62 312a46.4 46.4 0 0 0 16.97-3.2"></svg:path>`,
})
export class IonPawIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPencilIcon],svg[ion-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M358.62 129.28L86.49 402.08L70 442l39.92-16.49l272.8-272.13zm54.45-54.44l-11.79 11.78l24.1 24.1l11.79-11.79a16.51 16.51 0 0 0 0-23.34l-.75-.75a16.51 16.51 0 0 0-23.35 0"></svg:path>`,
})
export class IonPencilIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPeopleIcon],svg[ion-people-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 256c-20.56 0-40.44-9.18-56-25.84c-15.13-16.25-24.37-37.92-26-61c-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52c15.47 16.62 23 39.22 21.26 63.63c-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256m131.83 176H204.18a27.71 27.71 0 0 1-22-10.67a30.22 30.22 0 0 1-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05c31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 0 1-5.32 25.78A27.68 27.68 0 0 1 467.83 432M147 260c-35.19 0-66.13-32.72-69-72.93c-1.42-20.6 5-39.65 18-53.62c12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52c-2.87 40.2-33.8 72.91-68.93 72.91m65.66 31.45c-17.59-8.6-40.42-12.9-65.65-12.9c-29.46 0-58.07 7.68-80.57 21.62c-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 0 0 4.79 23.36A25.32 25.32 0 0 0 41.72 400h111a8 8 0 0 0 7.87-6.57c.11-.63.25-1.26.41-1.88c8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 0 0-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89"></svg:path>`,
})
export class IonPeopleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPeopleCircleIcon],svg[ion-people-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48m-3.68 152.11c.21-1.2.44-2.4.71-3.59a66.46 66.46 0 0 1 16.29-31.21c12.89-13.73 31.16-21.31 51.45-21.31a74 74 0 0 1 25.06 4.26a66.7 66.7 0 0 1 26.27 17.2a68.15 68.15 0 0 1 18 42.14a78.5 78.5 0 0 1 0 11.4a86.2 86.2 0 0 1-8.2 31q-.76 1.59-1.59 3.15c-1.11 2.07-2.3 4.1-3.58 6.06a79.5 79.5 0 0 1-8.63 11c-13.12 14-29.92 21.73-47.31 21.73a59.6 59.6 0 0 1-19.17-3.18a64 64 0 0 1-6.1-2.43a70.8 70.8 0 0 1-22.07-16.12a83.76 83.76 0 0 1-22-51.32q-.27-3.88-.18-7.68a75.6 75.6 0 0 1 1.05-11.08Zm-149.73 24.34a59.9 59.9 0 0 1 5.2-20.64a57 57 0 0 1 2.78-5.3a54.5 54.5 0 0 1 7.19-9.56a55.6 55.6 0 0 1 14-10.82a57 57 0 0 1 8.11-3.64a63.85 63.85 0 0 1 33.35-2.39a57 57 0 0 1 30.78 17a57.86 57.86 0 0 1 15.41 38.62c.05 2.11 0 4.23-.15 6.38a71.6 71.6 0 0 1-6 23.84a69.5 69.5 0 0 1-5.73 10.42a65.4 65.4 0 0 1-15.76 16.57c-1.5 1.07-3.06 2.07-4.67 3.07a54.2 54.2 0 0 1-10 4.65a49.3 49.3 0 0 1-16.2 2.76c-.93 0-1.86 0-2.78-.08a48 48 0 0 1-5.48-.62a51 51 0 0 1-5.35-1.23a53.5 53.5 0 0 1-7.72-2.89c-.84-.39-1.66-.8-2.48-1.23c-18-9.49-31.57-29.16-34.23-52.12c-.12-1.05-.22-2.1-.29-3.16a66.6 66.6 0 0 1 .02-9.63m53.92 178.6a177.27 177.27 0 0 1-61.94-70.65a4 4 0 0 1 1.62-5.26C117.67 316.69 141.4 311 163.82 311c17 0 30.7 2 42.69 5.88a8 8 0 0 1 2.59 13.77c-23.35 19-38.4 42.54-45.47 70.75a2.77 2.77 0 0 1-4.22 1.65M256 432a175.1 175.1 0 0 1-65.7-12.72a4 4 0 0 1-2.4-4.46c.4-2.05.84-3.92 1.23-5.48c7.12-28.43 24.76-52 51-68.18c23.29-14.35 53-22.25 83.52-22.25c31.16 0 60 7.58 83.48 21.91a2.72 2.72 0 0 1 .91 3.67A176.1 176.1 0 0 1 256 432"></svg:path><svg:path fill="currentColor" d="M161 295.28a48 48 0 0 1-5.48-.62a48 48 0 0 0 5.48.62m-26.36-117.15a55.6 55.6 0 0 0-14 10.82a54.5 54.5 0 0 0-7.19 9.56a54.5 54.5 0 0 1 7.19-9.56a55.6 55.6 0 0 1 14-10.82m81.53 79.76a71.6 71.6 0 0 0 6-23.84c.15-2.15.2-4.27.15-6.38q.08 3.15-.15 6.38a71.6 71.6 0 0 1-6 23.84m-81.53-79.76a57 57 0 0 1 8.11-3.64a57 57 0 0 0-8.11 3.64m15.57 115.3a53.5 53.5 0 0 1-7.72-2.89a53.5 53.5 0 0 0 7.72 2.89m-44.43-56.24c2.66 23 16.26 42.63 34.23 52.12c-18.01-9.49-31.57-29.16-34.23-52.12M254.34 219a83.76 83.76 0 0 0 22 51.32a70.8 70.8 0 0 0 22.07 16.12a70.8 70.8 0 0 1-22.07-16.12a83.76 83.76 0 0 1-22-51.32q-.27-3.88-.18-7.68q-.09 3.75.18 7.68m50.16 69.82a64 64 0 0 1-6.1-2.43a64 64 0 0 0 6.1 2.43m-48.57-92.28a66.46 66.46 0 0 1 16.29-31.21a66.46 66.46 0 0 0-16.29 31.21M375 165.46a68.15 68.15 0 0 1 18 42.14a68.15 68.15 0 0 0-18-42.14a66.7 66.7 0 0 0-26.27-17.2a66.7 66.7 0 0 1 26.27 17.2M393 219a86.2 86.2 0 0 1-8.2 31a86.2 86.2 0 0 0 8.2-31m-138.84-7.73a75.6 75.6 0 0 1 1.06-11.14a75.6 75.6 0 0 0-1.06 11.14m-47.28-22.22a57.86 57.86 0 0 1 15.41 38.62a57.86 57.86 0 0 0-15.41-38.62a57 57 0 0 0-30.78-17a57 57 0 0 1 30.78 17M190 288a54.2 54.2 0 0 1-10 4.65a54.2 54.2 0 0 0 10-4.65m-84.51-63.55a59.9 59.9 0 0 1 5.2-20.64a59.9 59.9 0 0 0-5.2 20.64m89.19 60.43C193.17 286 191.61 287 190 288c1.61-1 3.17-2 4.68-3.12m21.49-26.99a69.5 69.5 0 0 1-5.73 10.42a69.5 69.5 0 0 0 5.73-10.42m-105.48-54.08a57 57 0 0 1 2.78-5.3a57 57 0 0 0-2.78 5.3m83.99 81.07a65.4 65.4 0 0 0 15.76-16.57a65.4 65.4 0 0 1-15.76 16.57"></svg:path>`,
})
export class IonPeopleCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonIcon],svg[ion-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38c-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6M432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75c1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480"></svg:path>`,
})
export class IonPersonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonAddIcon],svg[ion-person-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 256c52.79 0 99.43-49.71 104-110.82c2.27-30.7-7.36-59.33-27.12-80.6C345.33 43.57 318 32 288 32c-30.24 0-57.59 11.5-77 32.38c-19.63 21.11-29.2 49.8-27 80.78C188.49 206.28 235.12 256 288 256m207.38 183.76c-8.44-46.82-34.79-86.15-76.19-113.75C382.42 301.5 335.83 288 288 288s-94.42 13.5-131.19 38c-41.4 27.6-67.75 66.93-76.19 113.75c-1.93 10.73.69 21.34 7.19 29.11A30.94 30.94 0 0 0 112 480h352a30.94 30.94 0 0 0 24.21-11.13c6.48-7.77 9.1-18.38 7.17-29.11M104 288v-40h40a16 16 0 0 0 0-32h-40v-40a16 16 0 0 0-32 0v40H32a16 16 0 0 0 0 32h40v40a16 16 0 0 0 32 0"></svg:path>`,
})
export class IonPersonAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonCircleIcon],svg[ion-person-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-50.22 116.82C218.45 151.39 236.28 144 256 144s37.39 7.44 50.11 20.94c12.89 13.68 19.16 32.06 17.68 51.82C320.83 256 290.43 288 256 288s-64.89-32-67.79-71.25c-1.47-19.92 4.79-38.36 17.57-51.93M256 432a175.5 175.5 0 0 1-126-53.22a122.9 122.9 0 0 1 35.14-33.44C190.63 329 222.89 320 256 320s65.37 9 90.83 25.34A122.9 122.9 0 0 1 382 378.78A175.45 175.45 0 0 1 256 432"></svg:path>`,
})
export class IonPersonCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonRemoveIcon],svg[ion-person-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 256c52.79 0 99.43-49.71 104-110.82c2.27-30.7-7.36-59.33-27.12-80.6C345.33 43.57 318 32 288 32c-30.24 0-57.59 11.5-77 32.38c-19.63 21.11-29.2 49.8-27 80.78C188.49 206.28 235.12 256 288 256m207.38 183.76c-8.44-46.82-34.79-86.15-76.19-113.75C382.42 301.5 335.83 288 288 288s-94.42 13.5-131.19 38c-41.4 27.6-67.75 66.93-76.19 113.75c-1.93 10.73.69 21.34 7.19 29.11A30.94 30.94 0 0 0 112 480h352a30.94 30.94 0 0 0 24.21-11.13c6.48-7.77 9.1-18.38 7.17-29.11M144 216H32a16 16 0 0 0 0 32h112a16 16 0 0 0 0-32"></svg:path>`,
})
export class IonPersonRemoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonStalkerIcon],svg[ion-person-stalker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M425.3 324.8c-41.4-15.7-38.9-9.4-38.9-38.5 0-18.8 9.3-11.9 15.2-47.7 2.3-14.1 4.2-4.7 9.1-27.3 2.6-11.8-1.8-12.7-1.2-18.3.5-5.6 1-10.7 2-22.2 1.2-14.4-11.6-52-57.4-52s-58.6 37.6-57.4 52c.9 11.6 1.5 16.6 2 22.2.5 5.6-3.8 6.5-1.2 18.3 4.9 22.6 6.8 13.1 9.1 27.3 5.9 35.8 15.1 29 15.1 47.7 0 13.4 3.1 19-14.9 27.5 5.4 1.9 11.7 4.2 19.3 7.1 54.4 20.7 53.1 40.8 54.5 50.3 1 6.5 1.5 58.3 1.7 76.8H480s0-80.5-1.5-89.9c-1.1-7.4-11-17.2-53.2-33.3z" fill="currentColor"></svg:path><svg:path d="M357 448s0-14.1-.2-30.4c-.2-18.6-.7-40-1.7-46.4-1.5-9.5-14.3-22.2-68.6-42.9-7.5-2.8-13.8-5.1-19.3-7.1-33.3-11.8-30.9-15.7-30.9-48 0-24.3 12-8.5 19.6-54.6 3-18.2 5.4-6.1 11.7-35.2 3.4-15.2-2.3-16.4-1.6-23.7.7-7.3 1.4-13.8 2.6-28.7 1.6-18.5-14.9-67.1-74.1-67.1-59.2 0-75.6 48.5-74.1 67.1 1.2 14.9 1.9 21.4 2.7 28.7.7 7.3-5 8.4-1.6 23.7 6.4 29.1 8.8 17 11.8 35.2 7.6 46.1 19.5 30.3 19.5 54.6 0 37.6 3.3 34.8-50.2 55.1C48.3 349 35.5 361.7 34 371.2c-2 12.1-2 76.8-2 76.8h325z" fill="currentColor"></svg:path>`,
})
export class IonPersonStalkerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPhoneLandscapeIcon],svg[ion-phone-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="ionPhoneLandscape0" fill="currentColor" d="M0 176v160a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V176a64 64 0 0 0-64-64H64a64 64 0 0 0-64 64m448-32a32 32 0 0 1 32 32v160a32 32 0 0 1-32 32H64a32 32 0 0 1-32-32v-11.35a7.94 7.94 0 0 1 4.75-7.3A32 32 0 0 0 56 288v-64a32 32 0 0 0-19.25-29.35a7.94 7.94 0 0 1-4.75-7.3V176a32 32 0 0 1 32-32Z"></svg:path></svg:defs><svg:use href="#ionPhoneLandscape0"></svg:use><svg:path fill="currentColor" d="M48 176a11.88 11.88 0 0 0 4.69 9.53A48 48 0 0 1 72 224v64a48 48 0 0 1-19.31 38.47A11.88 11.88 0 0 0 48 336a16 16 0 0 0 16 16h384a16 16 0 0 0 16-16V176a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16"></svg:path><svg:use href="#ionPhoneLandscape0"></svg:use>`,
})
export class IonPhoneLandscapeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPhonePortraitIcon],svg[ion-phone-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="ionPhonePortrait0" fill="currentColor" d="M336 0H176a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h160a64 64 0 0 0 64-64V64a64 64 0 0 0-64-64m32 448a32 32 0 0 1-32 32H176a32 32 0 0 1-32-32V64a32 32 0 0 1 32-32h11.35a7.94 7.94 0 0 1 7.3 4.75A32 32 0 0 0 224 56h64a32 32 0 0 0 29.35-19.25a7.94 7.94 0 0 1 7.3-4.75H336a32 32 0 0 1 32 32Z"></svg:path></svg:defs><svg:use href="#ionPhonePortrait0"></svg:use><svg:path fill="currentColor" d="M336 48a11.88 11.88 0 0 0-9.53 4.69A48 48 0 0 1 288 72h-64a48 48 0 0 1-38.47-19.31A11.88 11.88 0 0 0 176 48a16 16 0 0 0-16 16v384a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16"></svg:path><svg:use href="#ionPhonePortrait0"></svg:use>`,
})
export class IonPhonePortraitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPieChartIcon],svg[ion-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M66.1 357a16 16 0 0 1-14.61-9.46A224 224 0 0 1 256 32a16 16 0 0 1 16 16v208a16 16 0 0 1-9.47 14.61l-189.9 84.95A15.9 15.9 0 0 1 66.1 357"></svg:path><svg:path fill="currentColor" d="M313.59 68.18A8 8 0 0 0 304 76v180a48.07 48.07 0 0 1-28.4 43.82L103.13 377a8 8 0 0 0-3.35 11.81a208.4 208.4 0 0 0 48.46 50.41A206.32 206.32 0 0 0 272 480c114.69 0 208-93.31 208-208c0-100.45-71.58-184.5-166.41-203.82"></svg:path>`,
})
export class IonPieChartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPinIcon],svg[ion-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 96a80 80 0 1 0-96 78.39v283.17a32.1 32.1 0 0 0 2.49 12.38l10.07 24a3.92 3.92 0 0 0 6.88 0l10.07-24a32.1 32.1 0 0 0 2.49-12.38V174.39A80.13 80.13 0 0 0 336 96m-56 0a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class IonPinIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPinpointIcon],svg[ion-pinpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm135.8 359.8c-32.5 32.5-74.6 51.9-119.8 55.6l-8-63.4h-16l-7.9 63.3c-45.3-3.7-87.4-23.1-119.8-55.6-32.5-32.5-51.9-74.6-55.6-119.8L128 264v-16l-63.3-7.9c3.7-45.3 23.1-87.4 55.6-119.8 32.5-32.5 74.6-51.9 119.8-55.6L248 128h16l7.9-63.3c45.3 3.7 87.4 23.1 119.8 55.6 32.5 32.5 51.9 74.6 55.6 119.8L384 248v16l63.3 7.9c-3.7 45.3-23.1 87.4-55.5 119.9z" fill="currentColor"></svg:path>`,
})
export class IonPinpointIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPintIcon],svg[ion-pint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M399 99.29c-.15-2.13-.3-4.35-.44-6.68L395.69 46a32 32 0 0 0-31.91-30H148.21a32 32 0 0 0-31.91 30l-2.91 46.63c-.14 2.31-.29 4.51-.43 6.62c-1.29 19.24-2.23 33.14 3.73 65.66c1.67 9.11 5.22 22.66 9.73 39.82c12.61 48 33.71 128.36 33.71 195.63V472a24 24 0 0 0 24 24h143.74a24 24 0 0 0 24-24v-71.62c0-77.09 21.31-153.29 34-198.81c4.38-15.63 7.83-28 9.41-36.62c5.99-32.51 5.05-46.42 3.72-65.66m-35-47.54l1.5 24a4 4 0 0 1-4 4.25h-211a4 4 0 0 1-4-4.25l1.48-24A4 4 0 0 1 152 48h208a4 4 0 0 1 4 3.75"></svg:path>`,
})
export class IonPintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPizzaIcon],svg[ion-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M441.82 67.83C383.44 44.73 317.3 32 255.56 32C192 32 125.76 44.53 69 67.26C48.7 75.49 45.21 90 48.71 100.82L52.78 111a16 16 0 0 0 21.31 8.69c10.8-4.76 23.93-10.54 27-11.78C145.1 89.64 198.71 80 256 80c57.47 0 108.09 9.24 154.76 28.25c4.42 1.8 14.88 6.42 26.17 11.46a16 16 0 0 0 21.35-8.59L462 102l.34-.9c3.45-10.21.14-25.05-20.52-33.27"></svg:path><svg:path fill="currentColor" d="M409.18 140.86C363.67 122.53 307.68 112 255.56 112a425 425 0 0 0-153.74 28.89c-.53.21-2.06.88-4.29 1.88a16 16 0 0 0-8 21.27c4 8.71 9.42 20.58 15.5 33.89C137.94 270 199.21 404 227.26 462A31.74 31.74 0 0 0 256 480a31.73 31.73 0 0 0 28.76-18.06l.06-.13l137.3-297.57a15.94 15.94 0 0 0-8.31-21.45c-2.26-.95-3.85-1.61-4.5-1.87Zm-215.1 83.07a32 32 0 1 1 29.85-29.85a32 32 0 0 1-29.85 29.85m64 128a32 32 0 1 1 29.85-29.85a32 32 0 0 1-29.85 29.85m64-112a32 32 0 1 1 29.85-29.85a32 32 0 0 1-29.85 29.85"></svg:path>`,
})
export class IonPizzaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaneIcon],svg[ion-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M281.7 311.9c.4-6.9 8.3-4.5 8.3-4.5l62 12.6 128 48.7c0-24-3.8-26.5-9.4-30.7L288 207s-4.9-60-4.9-112.9c0-24.5-11.8-78.1-27.1-78.1s-27.1 54.4-27.1 78.1c0 50.2-4.9 112.9-4.9 112.9L41.4 338c-7.1 5-9.4 7.7-9.4 30.7L160 320l61.9-12.6s7.9-2.4 8.3 4.5c.4 6.9-1.2 69.1 5.9 102.1.9 4.4-2.5 4.7-4.8 7.4l-51.9 32.8c-1.7 1.9-2.5 7.3-2.5 7.3l-1 18.5 68-16 12 32 12-32 68 16-1-18.5c.1 0-.7-5.4-2.4-7.3l-51.9-32.8c-2.3-2.7-5.7-3-4.8-7.4 6.9-33 5.5-95.2 5.9-102.1z" fill="currentColor"></svg:path>`,
})
export class IonPlaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlanetIcon],svg[ion-planet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96.85 286.62a8 8 0 0 0-12.53 8.25C102.07 373.28 172.3 432 256 432a175.3 175.3 0 0 0 52.41-8a8 8 0 0 0 .79-15a1120 1120 0 0 1-109.48-55.61a1126 1126 0 0 1-102.87-66.77m395.87 52.89c-4.19-5.58-9.11-11.44-14.7-17.53a15.83 15.83 0 0 0-26.56 5.13c0 .16-.11.31-.17.47a15.75 15.75 0 0 0 3.15 16.06c22.74 25 26.42 38.51 25.48 41.36c-2 2.23-17.05 6.89-58.15-3.53q-8.83-2.24-19.32-5.46q-6.76-2.08-13.79-4.49a177 177 0 0 0 19.54-27.25c.17-.29.35-.58.52-.88A175.4 175.4 0 0 0 432 256a179 179 0 0 0-1-19c-9.57-88.17-84.4-157-175-157a175.37 175.37 0 0 0-106.4 35.89a177.4 177.4 0 0 0-45.83 51.84c-.16.29-.34.58-.51.87a175.5 175.5 0 0 0-13.83 30.52q-5.59-4.87-10.79-9.67c-5.39-5-10.17-9.63-14.42-14c-29.57-30.26-33.09-45.61-32.16-48.45c2-2.23 15.54-5.87 48.62 1.31A15.82 15.82 0 0 0 96.22 123l.36-.44a15.74 15.74 0 0 0-8.67-25.43A237 237 0 0 0 64.13 93c-30.72-3.53-50.83 2.52-59.78 18c-3.24 5.58-6.35 15.09-2.72 28.6C7 159.66 26.14 184 53.23 209.5c8.63 8.13 18.06 16.37 28.12 24.64c7.32 6 15 12.06 22.9 18.08q7.91 6 16.15 12T137.1 276c25.41 17.61 52.26 34.52 78.59 49.69q14.34 8.26 28.64 16t28.37 14.81c21.9 11 43.35 20.92 63.86 29.43q13.19 5.48 25.81 10.16c11.89 4.42 23.37 8.31 34.31 11.59l1.1.33c25.73 7.66 47.42 11.69 64.48 12H464c21.64 0 36.3-6.38 43.58-19c9.09-15.62 4.08-36.32-14.86-61.5"></svg:path>`,
})
export class IonPlanetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayIcon],svg[ion-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"></svg:path>`,
})
export class IonPlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayBackIcon],svg[ion-play-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30.71 229.47l188.87-113a30.54 30.54 0 0 1 31.09-.39a33.74 33.74 0 0 1 16.76 29.47v79.05l180.72-108.16a30.54 30.54 0 0 1 31.09-.39A33.74 33.74 0 0 1 496 145.52v221A33.73 33.73 0 0 1 479.24 396a30.54 30.54 0 0 1-31.09-.39L267.43 287.4v79.08A33.73 33.73 0 0 1 250.67 396a30.54 30.54 0 0 1-31.09-.39l-188.87-113a31.27 31.27 0 0 1 0-53Z"></svg:path>`,
})
export class IonPlayBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayBackCircleIcon],svg[ion-play-back-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48S48 141.31 48 256m69.23-9.3l114.45-69.14a10.78 10.78 0 0 1 16.32 9.31v53.32l103.68-62.63a10.78 10.78 0 0 1 16.32 9.31v138.26a10.78 10.78 0 0 1-16.32 9.31L248 271.81v53.32a10.78 10.78 0 0 1-16.32 9.31L117.23 265.3a10.89 10.89 0 0 1 0-18.6"></svg:path>`,
})
export class IonPlayBackCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayCircleIcon],svg[ion-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m74.77 217.3l-114.45 69.14a10.78 10.78 0 0 1-16.32-9.31V186.87a10.78 10.78 0 0 1 16.32-9.31l114.45 69.14a10.89 10.89 0 0 1 0 18.6"></svg:path>`,
})
export class IonPlayCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayForwardIcon],svg[ion-play-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m481.29 229.47l-188.87-113a30.54 30.54 0 0 0-31.09-.39a33.74 33.74 0 0 0-16.76 29.47v79.05L63.85 116.44a30.54 30.54 0 0 0-31.09-.39A33.74 33.74 0 0 0 16 145.52v221A33.74 33.74 0 0 0 32.76 396a30.54 30.54 0 0 0 31.09-.39L244.57 287.4v79.08A33.74 33.74 0 0 0 261.33 396a30.54 30.54 0 0 0 31.09-.39l188.87-113a31.27 31.27 0 0 0 0-53Z"></svg:path>`,
})
export class IonPlayForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayForwardCircleIcon],svg[ion-play-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m138.77 217.3l-114.45 69.14a10.78 10.78 0 0 1-16.32-9.31v-53.32l-103.68 62.63a10.78 10.78 0 0 1-16.32-9.31V186.87a10.78 10.78 0 0 1 16.32-9.31L264 240.19v-53.32a10.78 10.78 0 0 1 16.32-9.31l114.45 69.14a10.89 10.89 0 0 1 0 18.6"></svg:path>`,
})
export class IonPlayForwardCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipBackIcon],svg[ion-play-skip-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 64a16 16 0 0 1 16 16v136.43L360.77 77.11a35.13 35.13 0 0 1 35.77-.44c12 6.8 19.46 20 19.46 34.33v290c0 14.37-7.46 27.53-19.46 34.33a35.14 35.14 0 0 1-35.77-.45L128 295.57V432a16 16 0 0 1-32 0V80a16 16 0 0 1 16-16"></svg:path>`,
})
export class IonPlaySkipBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipBackCircleIcon],svg[ion-play-skip-back-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48S48 141.31 48 256m128-64a16 16 0 0 1 32 0v53l111.68-67.46a10.78 10.78 0 0 1 16.32 9.33v138.26a10.78 10.78 0 0 1-16.32 9.31L208 267v53a16 16 0 0 1-32 0Z"></svg:path>`,
})
export class IonPlaySkipBackCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipForwardIcon],svg[ion-play-skip-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 64a16 16 0 0 0-16 16v136.43L151.23 77.11a35.13 35.13 0 0 0-35.77-.44C103.46 83.47 96 96.63 96 111v290c0 14.37 7.46 27.53 19.46 34.33a35.14 35.14 0 0 0 35.77-.45L384 295.57V432a16 16 0 0 0 32 0V80a16 16 0 0 0-16-16"></svg:path>`,
})
export class IonPlaySkipForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipForwardCircleIcon],svg[ion-play-skip-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m80 272a16 16 0 0 1-32 0v-53l-111.68 67.44a10.78 10.78 0 0 1-16.32-9.31V186.87a10.78 10.78 0 0 1 16.32-9.31L304 245v-53a16 16 0 0 1 32 0Z"></svg:path>`,
})
export class IonPlaySkipForwardCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaystationIcon],svg[ion-playstation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M399.8 203c-.8-17.1-3.3-34.5-10.8-50.1-4.1-8.6-9.7-16.5-16.5-23.2-6.3-6.4-13.6-11.7-21.3-16.3-17.1-10.2-37.5-17-84.4-31S192 64 192 64v358.3l79.9 25.7s.1-198.8.1-299.5v-3.8c0-9.3 7.5-16.8 16.1-16.8h.5c8.5 0 15.5 7.5 15.5 16.8V278c11 5.3 29.2 9.3 41.8 9.1 8.3.2 16.7-1.7 24-5.7 7.6-4.1 13.9-10.4 18.4-17.8 5.1-8.3 8.2-17.8 9.9-27.3 1.9-10.8 2-22.1 1.6-33.3z" fill="currentColor"></svg:path><svg:path d="M86.7 357.8c27.4-9.8 89.3-29.5 89.3-29.5v-47.2s-76.5 24.8-111.3 37.1c-8.6 3.1-17.3 5.9-25.7 9.5-9.8 4.1-19.4 8.7-28.1 14.8-3.8 2.6-7.2 5.9-9.2 10.1-2 4.2-2.2 9.2-.5 13.6 2 5.1 5.8 9.3 10.1 12.6 7.8 5.9 17.1 9.5 26.4 12.2 28.4 9.4 58.4 14 88.4 13.3 14.5-.2 36-1.9 50-4.4v-42s-11 2.5-41.3 12.5c-4.6 1.5-9.2 3.3-14 4.3-7.1 1.6-14.4 2.1-21.6 2.2-6.5-.3-13.2-.7-19.3-3.1-2.2-1-4.6-2.2-5.5-4.6-.8-2 .3-4 1.7-5.4 2.8-2.9 6.8-4.5 10.6-6z" fill="currentColor"></svg:path><svg:path d="M512 345.9c-.1-6-3.7-11.2-7.9-15-7.1-6.3-15.9-10.3-24.7-13.5-5.5-1.9-9.3-3.3-14.7-5-25.2-8.2-51.9-11.2-78.3-11.3-8 .3-23.1.5-31 1.4-21.9 2.5-67.3 15.4-67.3 15.4v48.8s67.5-21.6 96.5-31.8c9.7-3.3 20.1-4.6 30.3-4.6 6.5.2 13.2.7 19.4 3.1 2.2.9 4.5 2.2 5.5 4.5.9 2.6-.9 5-2.9 6.5-4.7 3.8-10.7 5.3-16.2 7.4-41 14.5-132.7 44.7-132.7 44.7v47s117.2-39.6 170.8-58.8c8.9-3.3 17.9-6.1 26.4-10.4 7.9-4 15.8-8.6 21.8-15.3 3.1-3.6 5-8 5-13.1z" fill="currentColor"></svg:path>`,
})
export class IonPlaystationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlusIcon],svg[ion-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 224H288V64h-64v160H64v64h160v160h64V288h160z" fill="currentColor"></svg:path>`,
})
export class IonPlusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlusCircledIcon],svg[ion-plus-circled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm128 240H272v112h-32V272H128v-32h112V128h32v112h112v32z" fill="currentColor"></svg:path>`,
})
export class IonPlusCircledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlusRoundIcon],svg[ion-plus-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M417.4 224H288V94.6c0-16.9-14.3-30.6-32-30.6s-32 13.7-32 30.6V224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32H224v129.4c0 16.9 14.3 30.6 32 30.6s32-13.7 32-30.6V288h129.4c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z" fill="currentColor"></svg:path>`,
})
export class IonPlusRoundIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPodiumIcon],svg[ion-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 32H192a32 32 0 0 0-32 32v412a4 4 0 0 0 4 4h184a4 4 0 0 0 4-4V64a32 32 0 0 0-32-32m144 160h-72a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8h80a24 24 0 0 0 24-24V224a32 32 0 0 0-32-32M48 128a32 32 0 0 0-32 32v296a24 24 0 0 0 24 24h80a8 8 0 0 0 8-8V136a8 8 0 0 0-8-8Z"></svg:path>`,
})
export class IonPodiumIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPoundIcon],svg[ion-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M125.2 352.3H32v-54.6h101.2l13.1-83.3H47v-54.6h107.2L176 32h63.9l-21.8 127.7h105.6L345.5 32h63.1l-21.8 127.7H480v54.6H378.1l-12.3 83.3H465v54.6H358.5L336 480h-63.1l21.8-127.7H188.3L166.5 480h-63.1l21.8-127.7zm84.2-138L197 297.7h105.6l12.3-83.3H209.4z" fill="currentColor"></svg:path>`,
})
export class IonPoundIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPowerIcon],svg[ion-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 464c-114.69 0-208-93.47-208-208.35c0-62.45 27.25-121 74.76-160.55a22 22 0 1 1 28.17 33.8C113.48 160.1 92 206.3 92 255.65C92 346.27 165.57 420 256 420s164-73.73 164-164.35A164 164 0 0 0 360.17 129a22 22 0 1 1 28-33.92A207.88 207.88 0 0 1 464 255.65C464 370.53 370.69 464 256 464"></svg:path><svg:path fill="currentColor" d="M256 272a22 22 0 0 1-22-22V70a22 22 0 0 1 44 0v180a22 22 0 0 1-22 22"></svg:path>`,
})
export class IonPowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPricetagIcon],svg[ion-pricetag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M467 45.2A44.45 44.45 0 0 0 435.29 32H312.36a30.63 30.63 0 0 0-21.52 8.89L45.09 286.59a44.82 44.82 0 0 0 0 63.32l117 117a44.83 44.83 0 0 0 63.34 0l245.65-245.6A30.6 30.6 0 0 0 480 199.8v-123a44.24 44.24 0 0 0-13-31.6M384 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonPricetagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPricetagsIcon],svg[ion-pricetags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 183.8v-123A44.66 44.66 0 0 0 403.29 16H280.36a30.62 30.62 0 0 0-21.51 8.89L13.09 270.58a44.86 44.86 0 0 0 0 63.34l117 117a44.84 44.84 0 0 0 63.33 0l245.69-245.61A30.6 30.6 0 0 0 448 183.8M352 144a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path><svg:path fill="currentColor" d="M496 64a16 16 0 0 0-16 16v127.37L218.69 468.69a16 16 0 1 0 22.62 22.62l262-262A29.84 29.84 0 0 0 512 208V80a16 16 0 0 0-16-16"></svg:path>`,
})
export class IonPricetagsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPrintIcon],svg[ion-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408 112H106a58 58 0 0 0-58 58v158a56 56 0 0 0 56 56h8v39.68A40.32 40.32 0 0 0 152.32 464h207.36A40.32 40.32 0 0 0 400 423.68V384h8a56 56 0 0 0 56-56V168a56 56 0 0 0-56-56m-40 311.68a8.35 8.35 0 0 1-8.32 8.32H152.32a8.35 8.35 0 0 1-8.32-8.32V264.32a8.35 8.35 0 0 1 8.32-8.32h207.36a8.35 8.35 0 0 1 8.32 8.32Zm26-215.76a24 24 0 1 1 22-22a24 24 0 0 1-22 22M344 48H168a56.09 56.09 0 0 0-55.42 48h286.84A56.09 56.09 0 0 0 344 48"></svg:path>`,
})
export class IonPrintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPrinterIcon],svg[ion-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M423.8 128H384V64H128v64H88.2C60.3 128 32 144.9 32 182.6v123.8c0 38 28.3 61.6 56.2 61.6H128v112h256V368h39.8c27.9 0 56.2-22.6 56.2-53.6V182.6c0-35.7-28.2-54.6-56.2-54.6zM368 464H144V288h224v176zm0-336H144V80h224v48zm48 64h-17v-16h17v16z" fill="currentColor"></svg:path><svg:path d="M160 320h192v16H160z" fill="currentColor"></svg:path><svg:path d="M160 368h192v16H160z" fill="currentColor"></svg:path><svg:path d="M160 416h192v16H160z" fill="currentColor"></svg:path>`,
})
export class IonPrinterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPrismIcon],svg[ion-prism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M487.83 319.44L295.63 36.88a48 48 0 0 0-79.26 0L24.17 319.44a47.1 47.1 0 0 0 16.93 68.13l192.2 102.75a48.05 48.05 0 0 0 45.4 0l192.2-102.75a47.1 47.1 0 0 0 16.93-68.13m-431.26 41a16.12 16.12 0 0 1-8-10.38a16.8 16.8 0 0 1 2.37-13.62L232.66 69.26c2.18-3.21 7.34-1.72 7.34 2.13v374c0 5.9-6.54 9.63-11.87 6.78Z"></svg:path>`,
})
export class IonPrismIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPullRequestIcon],svg[ion-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 64c-35.29 0-64 28.71-64 64 0 23.637 12.89 44.307 32 55.391V360.61C76.89 371.693 64 392.363 64 416c0 35.29 28.71 64 64 64s64-28.71 64-64c0-23.637-12.89-44.307-32-55.391V183.391c19.11-11.084 32-31.754 32-55.391 0-35.29-28.71-64-64-64zm0 384c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm0-288c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z" fill="currentColor"></svg:path><svg:path d="M415 360.034V204.989c0-33.987-10.49-61.002-31.18-80.294-22.111-20.618-54.314-30.388-95.82-29.106V32l-96 96 96 96v-64c26.5 0 42.67 2.642 52.175 11.504 7.183 6.698 10.825 17.964 10.825 33.485v156.196c-18.562 11.217-31 31.589-31 54.814 0 35.29 28.71 64 64 64s64-28.71 64-64c0-24.048-13.338-45.03-33-55.965zM384 448c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z" fill="currentColor"></svg:path>`,
})
export class IonPullRequestIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPulseIcon],svg[ion-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 272a48.09 48.09 0 0 0-45.25 32h-39.22l-28.35-85.06a16 16 0 0 0-30.56.66l-44.51 155.76l-52.33-314a16 16 0 0 0-31.3-1.25L99.51 304H48a16 16 0 0 0 0 32h64a16 16 0 0 0 15.52-12.12l45.34-181.37l51.36 308.12A16 16 0 0 0 239.1 464h.91a16 16 0 0 0 15.37-11.6l49.8-174.28l15.64 46.94A16 16 0 0 0 336 336h50.75A48 48 0 1 0 432 272"></svg:path>`,
})
export class IonPulseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPushIcon],svg[ion-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M376 352H272V198.63l52.69 52.68a16 16 0 0 0 22.62-22.62l-80-80a16 16 0 0 0-22.62 0l-80 80a16 16 0 0 0 22.62 22.62L240 198.63V352H136a56.06 56.06 0 0 1-56-56V88a56.06 56.06 0 0 1 56-56h240a56.06 56.06 0 0 1 56 56v208a56.06 56.06 0 0 1-56 56M272 464a16 16 0 0 1-32 0V352h32Z"></svg:path>`,
})
export class IonPushIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionQrCodeIcon],svg[ion-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="80" height="80" x="336" y="336" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="64" height="64" x="272" y="272" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="64" height="64" x="416" y="416" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="48" height="48" x="432" y="272" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="48" height="48" x="272" y="432" fill="currentColor" rx="8" ry="8"></svg:rect><svg:path fill="currentColor" d="M448 32H304a32 32 0 0 0-32 32v144a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m-32 136a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8ZM208 32H64a32 32 0 0 0-32 32v144a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m-32 136a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8Zm32 104H64a32 32 0 0 0-32 32v144a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V304a32 32 0 0 0-32-32m-32 136a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class IonQrCodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionQrScannerIcon],svg[ion-qr-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 124.171c0-6.938 5.232-12.171 12.171-12.171H176V64h-66.829C75.717 64 48 90.717 48 124.171V192h48v-67.829z" fill="currentColor"></svg:path><svg:path d="M403.579 64H336v48h67.219c6.938 0 12.781 5.232 12.781 12.171V192h48v-67.829C464 90.717 437.033 64 403.579 64z" fill="currentColor"></svg:path><svg:path d="M416 386.829c0 6.938-5.232 12.171-12.171 12.171H336v49h67.829C437.283 448 464 420.283 464 386.829V320h-48v66.829z" fill="currentColor"></svg:path><svg:path d="M108.171 399C101.232 399 96 393.768 96 386.829V320H48v66.829C48 420.283 75.717 448 109.171 448H176v-49h-67.829z" fill="currentColor"></svg:path>`,
})
export class IonQrScannerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionQuoteIcon],svg[ion-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M192 64c-40.646 0-72.483 11.229-94.627 33.373C75.229 119.517 64 151.354 64 192v256h160V192h-96c0-23.056 4.922-39.666 14.627-49.373C152.334 132.922 168.944 128 192 128" fill="currentColor"></svg:path><svg:path d="M416 64c-40.646 0-72.483 11.229-94.627 33.373C299.229 119.517 288 151.354 288 192v256h160V192h-96c0-23.056 4.922-39.666 14.627-49.373C376.334 132.922 392.944 128 416 128" fill="currentColor"></svg:path>`,
})
export class IonQuoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRadioIcon],svg[ion-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="36" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M190.24 341.77a22 22 0 0 1-16.46-7.38a118 118 0 0 1 0-156.76a22 22 0 1 1 32.87 29.24a74 74 0 0 0 0 98.29a22 22 0 0 1-16.43 36.61Zm131.52 0a22 22 0 0 1-16.43-36.61a74 74 0 0 0 0-98.29a22 22 0 1 1 32.87-29.24a118 118 0 0 1 0 156.76a22 22 0 0 1-16.44 7.38"></svg:path><svg:path fill="currentColor" d="M139.29 392.72a21.92 21.92 0 0 1-16.08-7a190 190 0 0 1 0-259.49a22 22 0 1 1 32.13 30.06a146 146 0 0 0 0 199.38a22 22 0 0 1-16.06 37Zm233.42 0a22 22 0 0 1-16.06-37a146 146 0 0 0 0-199.38a22 22 0 1 1 32.13-30.06a190 190 0 0 1 0 259.49a21.92 21.92 0 0 1-16.07 6.95"></svg:path><svg:path fill="currentColor" d="M429 438a22 22 0 0 1-16.39-36.67a218.34 218.34 0 0 0 0-290.66a22 22 0 0 1 32.78-29.34a262.34 262.34 0 0 1 0 349.34A22 22 0 0 1 429 438m-346 0a21.94 21.94 0 0 1-16.41-7.33a262.34 262.34 0 0 1 0-349.34a22 22 0 0 1 32.78 29.34a218.34 218.34 0 0 0 0 290.66A22 22 0 0 1 83 438"></svg:path>`,
})
export class IonRadioIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRadioButtonOffIcon],svg[ion-radio-button-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class IonRadioButtonOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRadioButtonOnIcon],svg[ion-radio-button-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:circle cx="256" cy="256" r="144" fill="currentColor"></svg:circle>`,
})
export class IonRadioButtonOnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRadioWavesIcon],svg[ion-radio-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="64" fill="currentColor"></svg:circle><svg:path d="M144 256c0-36.9 18.553-69.208 46.314-87.034l-23.141-24.512a131.623 131.623 0 0 0-17.684 15.663C125.314 185.729 112 219.781 112 256c0 36.219 13.314 70.271 37.49 95.883a131.615 131.615 0 0 0 17.684 15.662l23.141-24.511C162.553 325.208 144 292.9 144 256z" fill="currentColor"></svg:path><svg:path d="M368 256c0 36.9-18.553 69.208-46.314 87.034l23.141 24.511a131.615 131.615 0 0 0 17.684-15.662C386.686 326.271 400 292.219 400 256c0-36.219-13.314-70.271-37.49-95.882a131.623 131.623 0 0 0-17.684-15.663l-23.141 24.512C349.447 186.792 368 219.1 368 256z" fill="currentColor"></svg:path><svg:path d="M64 256c0-55.578 25.251-104.907 64.263-135.817L105.433 96a197.799 197.799 0 0 0-17.197 16.178c-17.622 18.669-31.462 40.417-41.134 64.641C37.081 201.917 32 228.556 32 256c0 27.443 5.081 54.084 15.102 79.181 9.672 24.226 23.512 45.973 41.134 64.642a198.105 198.105 0 0 0 17.197 16.178l22.829-24.183C89.251 360.907 64 311.578 64 256z" fill="currentColor"></svg:path><svg:path d="M448 256c0 55.578-25.251 104.907-64.262 135.817l22.828 23.848c6-5.001 11.74-10.062 17.198-15.843 17.622-18.669 31.462-40.416 41.134-64.642C474.918 310.084 480 283.443 480 256c0-27.444-5.082-54.083-15.102-79.181-9.672-24.225-23.512-45.972-41.134-64.641A197.523 197.523 0 0 0 406.566 96l-22.829 24.183C422.749 151.093 448 200.422 448 256z" fill="currentColor"></svg:path>`,
})
export class IonRadioWavesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRainyIcon],svg[ion-rainy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M456.26 139.37c-16.77-16.73-39.17-28.41-65.17-34a16 16 0 0 1-11.19-9a142.24 142.24 0 0 0-42.19-53.21C314.48 25.39 286.23 16 256 16a140.24 140.24 0 0 0-93.5 35.32c-24.2 21.56-40.91 51.34-48.43 85.83a16.05 16.05 0 0 1-11.72 12.18c-25 6.3-35.71 12.54-49.21 24.56C34 190.93 24 214.14 24 240.8c0 30.55 11.23 55.64 32.47 72.56C75.08 328.17 100.5 336 130 336h234c33.2 0 64.11-11.46 87-32.28c23.84-21.65 37-51.67 37-84.52c0-31.49-11-59.09-31.74-79.83M112 448a16 16 0 0 1-13.3-24.88l32-48a16 16 0 0 1 26.62 17.76l-32 48A16 16 0 0 1 112 448m48 48a16 16 0 0 1-13.29-24.88l64-96a16 16 0 0 1 26.62 17.76l-64 96A16 16 0 0 1 160 496m112-48a16 16 0 0 1-13.3-24.88l32-48a16 16 0 0 1 26.62 17.76l-32 48A16 16 0 0 1 272 448m48 48a16 16 0 0 1-13.3-24.88l64-96a16 16 0 0 1 26.62 17.76l-64 96A16 16 0 0 1 320 496"></svg:path>`,
})
export class IonRainyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReaderIcon],svg[ion-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 32H144a64.07 64.07 0 0 0-64 64v320a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V96a64.07 64.07 0 0 0-64-64M256 304h-80a16 16 0 0 1 0-32h80a16 16 0 0 1 0 32m80-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32m0-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32"></svg:path>`,
})
export class IonReaderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReceiptIcon],svg[ion-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M483.82 32.45a16.28 16.28 0 0 0-11.23 1.37L448 46.1l-24.8-12.4a16 16 0 0 0-14.31 0l-25.11 12.41L359 33.7a16 16 0 0 0-14.36 0L320 46.07l-24.45-12.34a16 16 0 0 0-14.35-.06L256 46.12l-24.8-12.43a16.05 16.05 0 0 0-14.33 0L192 46.1l-24.84-12.41a16 16 0 0 0-19.36 3.94a16.25 16.25 0 0 0-3.8 10.65V288l.05.05H336a32 32 0 0 1 32 32V424c0 30.93 33.07 56 64 56h12a52 52 0 0 0 52-52V48a16 16 0 0 0-12.18-15.55M416 240H288.5c-8.64 0-16.1-6.64-16.48-15.28A16 16 0 0 1 288 208h127.5c8.64 0 16.1 6.64 16.48 15.28A16 16 0 0 1 416 240m0-80H224.5c-8.64 0-16.1-6.64-16.48-15.28A16 16 0 0 1 224 128h191.5c8.64 0 16.1 6.64 16.48 15.28A16 16 0 0 1 416 160"></svg:path><svg:path fill="currentColor" d="M336 424v-88a16 16 0 0 0-16-16H48a32.1 32.1 0 0 0-32 32.05c0 50.55 5.78 71.57 14.46 87.57C45.19 466.79 71.86 480 112 480h245.68a4 4 0 0 0 2.85-6.81C351.07 463.7 336 451 336 424"></svg:path>`,
})
export class IonReceiptIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRecordIcon],svg[ion-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 464c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208z" fill="currentColor"></svg:path>`,
})
export class IonRecordIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRecordingIcon],svg[ion-recording-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M380.79 144.05c-59.1 1.65-107.12 49.71-108.79 108.81a111.64 111.64 0 0 0 30.36 79.77A2 2 0 0 1 301 336h-90a2 2 0 0 1-1.44-3.37A111.64 111.64 0 0 0 240 252.86c-1.63-59.1-49.65-107.16-108.75-108.81A112.12 112.12 0 0 0 16 255.53C15.75 317.77 67 368 129.24 368h253.52C445 368 496.25 317.77 496 255.53a112.12 112.12 0 0 0-115.21-111.48"></svg:path>`,
})
export class IonRecordingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRefreshIcon],svg[ion-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m256 58l80 80l-80 80"></svg:path>`,
})
export class IonRefreshIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRefreshCircleIcon],svg[ion-refresh-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.32 48 256c0 114.86 93.14 208 208 208c114.69 0 208-93.31 208-208c0-114.87-93.13-208-208-208m0 313a94 94 0 0 1 0-188h4.21l-14.11-14.1a14 14 0 0 1 19.8-19.8l40 40a14 14 0 0 1 0 19.8l-40 40a14 14 0 0 1-19.8-19.8l18-18c-2.38-.1-5.1-.1-8.1-.1a66 66 0 1 0 66 66a14 14 0 0 1 28 0a94.11 94.11 0 0 1-94 94"></svg:path>`,
})
export class IonRefreshCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReloadIcon],svg[ion-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128"></svg:path><svg:path fill="currentColor" d="M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42"></svg:path>`,
})
export class IonReloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReloadCircleIcon],svg[ion-reload-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m120 182.15a8.62 8.62 0 0 1-8.62 8.62h-59.54a8.61 8.61 0 0 1-6.09-14.71l22.17-22.17l-5.6-6.51a87.38 87.38 0 1 0-62.94 148a87.55 87.55 0 0 0 82.42-58.25A16 16 0 1 1 368 295.8a119.4 119.4 0 1 1-112.62-159.18a118.34 118.34 0 0 1 86.36 36.95l.56.62l4.31 5l14.68-14.68a8.44 8.44 0 0 1 6-2.54a8.61 8.61 0 0 1 8.68 8.63Z"></svg:path>`,
})
export class IonReloadCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRemoveIcon],svg[ion-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"></svg:path>`,
})
export class IonRemoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRemoveCircleIcon],svg[ion-remove-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m80 224H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32"></svg:path>`,
})
export class IonRemoveCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReorderFourIcon],svg[ion-reorder-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M102 304h308m-308-96h308m-308-96h308M102 400h308"></svg:path>`,
})
export class IonReorderFourIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReorderThreeIcon],svg[ion-reorder-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M102 256h308m-308-80h308M102 336h308"></svg:path>`,
})
export class IonReorderThreeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReorderTwoIcon],svg[ion-reorder-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M118 304h276m-276-96h276"></svg:path>`,
})
export class IonReorderTwoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRepeatIcon],svg[ion-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m320 120l48 48l-48 48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 168H144a80.24 80.24 0 0 0-80 80v16m128 128l-48-48l48-48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 344h208a80.24 80.24 0 0 0 80-80v-16"></svg:path>`,
})
export class IonRepeatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReplyIcon],svg[ion-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 400s-36.8-208-224-208v-80L64 256l160 134.4v-92.3c101.6 0 171 8.9 224 101.9z" fill="currentColor"></svg:path>`,
})
export class IonReplyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReplyAllIcon],svg[ion-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M304.5 192v-80L152.7 255.8 304.5 390v-91.9c68 0 107.9 8.9 159.1 101.9 0 0-6.1-208-159.1-208z" fill="currentColor"></svg:path><svg:path d="M47.5 256l144 126.5V324l-82.2-68 82.2-78.6v-57z" fill="currentColor"></svg:path>`,
})
export class IonReplyAllIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionResizeIcon],svg[ion-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 96h112v112m-10.23-101.8L111.98 400.02M208 416H96V304"></svg:path>`,
})
export class IonResizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRestaurantIcon],svg[ion-restaurant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M357.57 223.94a79.48 79.48 0 0 0 56.58-23.44l77-76.95c6.09-6.09 6.65-16 .85-22.39a16 16 0 0 0-23.17-.56l-68.63 68.58a12.29 12.29 0 0 1-17.37 0c-4.79-4.78-4.53-12.86.25-17.64l68.33-68.33a16 16 0 0 0-.56-23.16A15.62 15.62 0 0 0 440.27 56a16.7 16.7 0 0 0-11.81 4.9l-68.27 68.26a12.29 12.29 0 0 1-17.37 0c-4.78-4.78-4.53-12.86.25-17.64l68.33-68.31a16 16 0 0 0-.56-23.16A15.62 15.62 0 0 0 400.26 16a16.73 16.73 0 0 0-11.81 4.9L311.5 97.85a79.5 79.5 0 0 0-23.44 56.59v8.23a16 16 0 0 1-4.69 11.33l-35.61 35.62a4 4 0 0 1-5.66 0L68.82 36.33a16 16 0 0 0-22.58-.06C31.09 51.28 23 72.47 23 97.54c-.1 41.4 21.66 89 56.79 124.08l85.45 85.45A64.8 64.8 0 0 0 211 326a64 64 0 0 0 16.21-2.08a16.2 16.2 0 0 1 4.07-.53a15.93 15.93 0 0 1 10.83 4.25l11.39 10.52a16.12 16.12 0 0 1 4.6 11.23v5.54a47.73 47.73 0 0 0 13.77 33.65l90.05 91.57l.09.1a53.29 53.29 0 0 0 75.36-75.37L302.39 269.9a4 4 0 0 1 0-5.66L338 228.63a16 16 0 0 1 11.32-4.69Z"></svg:path><svg:path fill="currentColor" d="M211 358a97.32 97.32 0 0 1-68.36-28.25l-13.86-13.86a8 8 0 0 0-11.3 0l-85 84.56c-15.15 15.15-20.56 37.45-13.06 59.29a31 31 0 0 0 1.49 3.6C31 484 50.58 496 72 496a55.68 55.68 0 0 0 39.64-16.44L225 365.66a4.69 4.69 0 0 0 1.32-3.72v-.26a4.63 4.63 0 0 0-5.15-4.27A97 97 0 0 1 211 358"></svg:path>`,
})
export class IonRestaurantIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnDownBackIcon],svg[ion-return-down-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 352l-64-64l64-64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 288h294c58.76 0 106-49.33 106-108v-20"></svg:path>`,
})
export class IonReturnDownBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnDownForwardIcon],svg[ion-return-down-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 352l64-64l-64-64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 288H154c-58.76 0-106-49.33-106-108v-20"></svg:path>`,
})
export class IonReturnDownForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnUpBackIcon],svg[ion-return-up-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l-64 64l64 64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 224h294c58.76 0 106 49.33 106 108v20"></svg:path>`,
})
export class IonReturnUpBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnUpForwardIcon],svg[ion-return-up-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 160l64 64l-64 64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 224H154c-58.76 0-106 49.33-106 108v20"></svg:path>`,
})
export class IonReturnUpForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRibbonIcon],svg[ion-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M269 335.61q-6.33.47-12.78.47c-5.23 0-10.4-.24-15.51-.69a176.11 176.11 0 0 1-127.67-72.94a4 4 0 0 0-6.77.35l-72 129.4c-2.74 5-3.17 11-.28 15.88A16.78 16.78 0 0 0 48.22 416h78a15.28 15.28 0 0 1 13.62 7.33L178.5 488a16.26 16.26 0 0 0 13.75 8c5.94-.33 12.09-4.19 14.56-9.6l66.11-145.15a4 4 0 0 0-3.92-5.64m208.64 56.27l-71.53-129.17a4 4 0 0 0-6.74-.36a176.5 176.5 0 0 1-78.31 61.42a16.1 16.1 0 0 0-8.72 8.25l-36.86 81.1a7.92 7.92 0 0 0 0 6.6l30.27 66.59c2.45 5.41 8.59 9.36 14.52 9.69a16.3 16.3 0 0 0 13.7-8.12l38.53-64.58c2.89-4.85 8.13-7.33 13.78-7.3h78.77c6.67 0 11.72-3.48 14-10a16.92 16.92 0 0 0-1.41-14.12"></svg:path><svg:ellipse cx="256.26" cy="160" fill="currentColor" rx="48.01" ry="48"></svg:ellipse><svg:path fill="currentColor" d="M256.26 16c-79.42 0-144 64.59-144 144s64.61 144 144 144s144-64.6 144-144s-64.59-144-144-144m0 224a80 80 0 1 1 80-80a80.1 80.1 0 0 1-80 80"></svg:path>`,
})
export class IonRibbonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRibbonAIcon],svg[ion-ribbon-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 32l-82.9 176.612c39.996 3.608 75.273 23.554 99.096 53.128L432 128l-80-96z" fill="currentColor"></svg:path><svg:path d="M160 32l82.9 176.612c-39.996 3.608-75.273 23.554-99.096 53.128L80 128l80-96z" fill="currentColor"></svg:path><svg:path d="M269.092 32H176l52.572 112h54.856L336 32z" fill="currentColor"></svg:path><svg:path d="M256 224c-70.692 0-128 57.308-128 128s57.308 128 128 128 128-57.308 128-128-57.308-128-128-128zm0 224c-53.02 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z" fill="currentColor"></svg:path><svg:path d="M256 264c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88z" fill="currentColor"></svg:path>`,
})
export class IonRibbonAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRibbonBIcon],svg[ion-ribbon-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 72c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88z" fill="currentColor"></svg:path><svg:path d="M256 32c-70.692 0-128 57.308-128 128s57.308 128 128 128 128-57.308 128-128S326.692 32 256 32zm0 224c-53.02 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z" fill="currentColor"></svg:path><svg:g><svg:path d="M147.092 254.21L64 400h96l48 80 48-105.807 33.641-74.154A144.328 144.328 0 0 1 256 304c-43.505 0-82.503-19.293-108.908-49.79z" fill="currentColor"></svg:path><svg:path d="M364.908 254.211c-15.077 17.412-34.26 31.172-56.043 39.774l-44.752 98.092L304 480l48-80h96l-83.092-145.789z" fill="currentColor"></svg:path></svg:g>`,
})
export class IonRibbonBIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRocketIcon],svg[ion-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M328.85 156.79a26.69 26.69 0 1 0 18.88 7.81a26.6 26.6 0 0 0-18.88-7.81"></svg:path><svg:path fill="currentColor" d="M477.44 50.06a.3.3 0 0 1 0-.09a20.4 20.4 0 0 0-15.13-15.3c-29.8-7.27-76.68.48-128.63 21.28c-52.36 21-101.42 52-134.58 85.22A321 321 0 0 0 169.55 175c-22.33-1-42 2.18-58.57 9.41c-57.74 25.41-74.23 90.44-78.62 117.14a25 25 0 0 0 27.19 29h.13l64.32-7.02c.08.82.17 1.57.24 2.26a34.36 34.36 0 0 0 9.9 20.72l31.39 31.41a34.27 34.27 0 0 0 20.71 9.91l2.15.23l-7 64.24v.13A25 25 0 0 0 206 480a25 25 0 0 0 4.15-.34C237 475.34 302 459.05 327.34 401c7.17-16.46 10.34-36.05 9.45-58.34a315 315 0 0 0 33.95-29.55c33.43-33.26 64.53-81.92 85.31-133.52c20.69-51.36 28.48-98.59 21.39-129.53M370.38 224.94a58.77 58.77 0 1 1 0-83.07a58.3 58.3 0 0 1 0 83.07"></svg:path><svg:path fill="currentColor" d="M161.93 386.44a16 16 0 0 0-11 2.67c-6.39 4.37-12.81 8.69-19.29 12.9c-13.11 8.52-28.79-6.44-21-20l12.15-21a16 16 0 0 0-15.16-24.91A61.25 61.25 0 0 0 72 353.56c-3.66 3.67-14.79 14.81-20.78 57.26A358 358 0 0 0 48 447.59A16 16 0 0 0 64 464h.4a360 360 0 0 0 36.8-3.2c42.47-6 53.61-17.14 57.27-20.8a60.5 60.5 0 0 0 17.39-35.74a16 16 0 0 0-13.93-17.82"></svg:path>`,
})
export class IonRocketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRoseIcon],svg[ion-rose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M429.55 119.49a16 16 0 0 0-17.06-7.1c-18.64 4.19-37.06 9-54.73 14.22c-35.06 10.39-69.33 23.92-107.85 42.59c-18.62 9.05-26 13.35-48 26.13l-4.5 2.67c-32.95 19-57.09 40-73.79 64.29C105.29 288.89 96 320 96 354.64c0 40.74 15.71 77.1 44.24 102.37C169 482.52 209.06 496 256 496c46.76 0 86.89-14.33 116-41.43c28.35-26.35 44-63.39 44-104.29c0-25-6.19-47-12.17-68.22c-12.59-44.69-23.46-83.29 24.71-144.13a16 16 0 0 0 1.01-18.44m-210.55.06C168.46 92.08 101.46 80.69 98.63 80.22A16 16 0 0 0 81 90.55a16.47 16.47 0 0 0 3.79 16.84c31.84 33.78 32.86 68.79 28.65 104.63a4.45 4.45 0 0 0 2.5 4.54a4.44 4.44 0 0 0 5.08-.9c16.39-16.51 36.37-31.52 60.4-45.39l4.48-2.6C208 154.8 216.23 150 236 140.41l2.69-1.3a4 4 0 0 0 .64-6.83A179 179 0 0 0 219 119.55m15.26-28.1c3.44 1.87 7.09 4 10.9 6.29a189.3 189.3 0 0 1 29.57 22.39a4 4 0 0 0 4.28.76a672 672 0 0 1 69.65-25q7-2.07 14.08-4a4 4 0 0 0 2.53-5.62c-8.27-16.83-14.67-28.9-15.15-29.79A16 16 0 0 0 336 48c-1.91 0-33.28.36-76.87 21.3a279 279 0 0 0-26.39 14.51a4 4 0 0 0 .22 6.94Zm-24.93-30.66c7.3-4.77 14.74-9.22 22.25-13.31a2 2 0 0 0 .24-3.36c-26-19.57-49.73-27-51.15-27.42a16 16 0 0 0-17.56 5.82a217.6 217.6 0 0 0-19.28 32.38a2 2 0 0 0 1.29 2.81c13.61 3.57 29.4 8.29 45.61 14.29a2 2 0 0 0 1.79-.2Z"></svg:path>`,
})
export class IonRoseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSadIcon],svg[ion-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M184 208a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24m-23.67 149.83c12-40.3 50.2-69.83 95.62-69.83s83.62 29.53 95.71 69.83a8 8 0 0 1-7.82 10.17H168.15a8 8 0 0 1-7.82-10.17M328 256a24 24 0 1 1 24-24a23.94 23.94 0 0 1-24 24"></svg:path>`,
})
export class IonSadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSaveIcon],svg[ion-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m465.94 119.76l-73.7-73.7A47.68 47.68 0 0 0 358.3 32H96a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V153.7a47.68 47.68 0 0 0-14.06-33.94M120 112h176a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H120a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8m139.75 319.91a80 80 0 1 1 76.16-76.16a80.06 80.06 0 0 1-76.16 76.16"></svg:path><svg:circle cx="256" cy="352" r="48" fill="currentColor"></svg:circle>`,
})
export class IonSaveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionScaleIcon],svg[ion-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 32H144A112.12 112.12 0 0 0 32 144v224a112.12 112.12 0 0 0 112 112h224a112.12 112.12 0 0 0 112-112V144A112.12 112.12 0 0 0 368 32m36.21 178l-33.32 39.21A41.76 41.76 0 0 1 339 264.05a42.3 42.3 0 0 1-22.29-6.38c-14.22-8.78-36.3-19.25-60.69-19.25s-46.47 10.47-60.69 19.25a41.86 41.86 0 0 1-54.2-8.46L107.79 210a50.48 50.48 0 0 1 4.49-70.27c27.84-25.35 75.37-55.57 143.72-55.57s115.88 30.22 143.72 55.57a50.48 50.48 0 0 1 4.49 70.27"></svg:path>`,
})
export class IonScaleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionScanIcon],svg[ion-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M342 444h46a56 56 0 0 0 56-56v-46m0-172v-46a56 56 0 0 0-56-56h-46M170 444h-46a56 56 0 0 1-56-56v-46m0-172v-46a56 56 0 0 1 56-56h46"></svg:path>`,
})
export class IonScanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionScanCircleIcon],svg[ion-scan-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-40 320h-28a44.05 44.05 0 0 1-44-44v-28a16 16 0 0 1 32 0v28a12 12 0 0 0 12 12h28a16 16 0 0 1 0 32m0-192h-28a12 12 0 0 0-12 12v28a16 16 0 0 1-32 0v-28a44.05 44.05 0 0 1 44-44h28a16 16 0 0 1 0 32m152 148a44.05 44.05 0 0 1-44 44h-28a16 16 0 0 1 0-32h28a12 12 0 0 0 12-12v-28a16 16 0 0 1 32 0Zm0-108a16 16 0 0 1-32 0v-28a12 12 0 0 0-12-12h-28a16 16 0 0 1 0-32h28a44.05 44.05 0 0 1 44 44Z"></svg:path>`,
})
export class IonScanCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSchoolIcon],svg[ion-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 368a16 16 0 0 1-7.94-2.11L108 285.84a8 8 0 0 0-12 6.94V368a16 16 0 0 0 8.23 14l144 80a16 16 0 0 0 15.54 0l144-80a16 16 0 0 0 8.23-14v-75.22a8 8 0 0 0-12-6.94l-140.06 80.05A16 16 0 0 1 256 368"></svg:path><svg:path fill="currentColor" d="M495.92 190.5v-.11a16 16 0 0 0-8-12.28l-224-128a16 16 0 0 0-15.88 0l-224 128a16 16 0 0 0 0 27.78l224 128a16 16 0 0 0 15.88 0L461 221.28a2 2 0 0 1 3 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 0 0 496 368V192a15 15 0 0 0-.08-1.5"></svg:path>`,
})
export class IonSchoolIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionScissorsIcon],svg[ion-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M405.178 115.667c13.314-32.667 17.309-64-5.326-83.667L255.726 224l-16.976 23s-27.627 40.011-37.28 58.667-19.306 39.333-27.294 54c-7.01 12.871-10.438 15.221-14.322 11.548a58.37 58.37 0 0 0-1.553-1.736l-.11-.138c-1.143-1.472-2.75-3.002-4.635-4.467C144.195 356.795 132.548 352 119.92 352 89.037 352 64 380.653 64 416s25.037 64 55.92 64c25.282 0 46.635-19.205 53.553-45.561l-.004.043S186.824 393 206.13 363s49.596-43 49.596-43l31.954-32s104.183-139.666 117.498-172.333zM119.92 448c-15.418 0-27.918-14.353-27.918-32s12.5-32 27.918-32c15.419 0 27.918 14.353 27.918 32s-12.499 32-27.918 32zM256 288c-8.836 0-16-7.163-16-16 0-8.836 7.164-16 16-16 8.837 0 16 7.164 16 16 0 8.837-7.163 16-16 16z" fill="currentColor"></svg:path><svg:path d="M207.28 265.255a1318.847 1318.847 0 0 1 18.304-27.346l.143-.208.15-.203 16.976-23 .038-.052.039-.052 2.941-3.918L111.896 32c-22.634 19.667-18.64 51-5.326 83.667 9.953 24.42 70.679 108.623 100.71 149.588z" fill="currentColor"></svg:path><svg:path d="M391.828 352c-12.628 0-24.275 4.795-33.637 12.874-1.885 1.465-3.492 2.995-4.635 4.467l-.109.138a61.157 61.157 0 0 0-1.553 1.736c-3.884 3.673-7.312 1.323-14.322-11.548-7.988-14.667-17.641-35.344-27.294-54-1.77-3.421-4.146-7.561-6.843-12.038a2279.051 2279.051 0 0 1-2.932 3.938l-.688.924-.813.815-28.688 28.729c10.433 6.855 24.565 18.276 35.306 34.965 19.305 30 32.66 71.482 32.66 71.482l-.004-.043c6.917 26.356 28.27 45.561 53.552 45.561C422.711 480 448 451.347 448 416s-25.289-64-56.172-64zm0 96c-15.42 0-27.918-14.353-27.918-32s12.498-32 27.918-32c15.418 0 27.918 14.353 27.918 32s-12.5 32-27.918 32z" fill="currentColor"></svg:path>`,
})
export class IonScissorsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSearchIcon],svg[ion-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M456.69 421.39L362.6 327.3a173.8 173.8 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.8 173.8 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3M97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8"></svg:path>`,
})
export class IonSearchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSearchCircleIcon],svg[ion-search-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192s192-86.13 192-192S361.87 64 256 64m91.31 283.31a16 16 0 0 1-22.62 0l-42.84-42.83a88.08 88.08 0 1 1 22.63-22.63l42.83 42.84a16 16 0 0 1 0 22.62"></svg:path><svg:circle cx="232" cy="232" r="56" fill="currentColor"></svg:circle>`,
})
export class IonSearchCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSendIcon],svg[ion-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52A24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4a24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8"></svg:path>`,
})
export class IonSendIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionServerIcon],svg[ion-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M125.295 40.728C159.804 25.158 206.27 16 256.5 16s96.466 9.159 130.748 24.748C420.143 55.706 448 80 448 112v.03c-.011 5.533-3.098 13.89-12.295 24.22c-8.995 10.102-22.617 20.658-40.273 30.264C360.162 185.702 310.794 200 256 200s-104.162-14.298-139.432-33.486c-17.656-9.606-31.278-20.162-40.273-30.264C67.081 125.901 64 117.532 64 112c0-32.428 28.246-56.36 61.295-71.272"></svg:path><svg:path fill="currentColor" d="M410.724 194.623c9.586-5.214 18.448-11.755 26.406-18.904c4.054-3.642 10.87-.89 10.87 4.56V258c0 5.532-3.081 11.901-12.295 22.25c-8.995 10.102-22.617 20.658-40.273 30.264C360.162 329.702 310.794 344 256 344s-104.162-14.298-139.432-33.486c-17.656-9.606-31.278-20.162-40.273-30.264C67.081 269.901 64 263.532 64 258v-77.721c0-5.45 6.816-8.202 10.87-4.56c7.958 7.148 16.82 13.69 26.406 18.904C141.286 216.39 195.918 232 256 232s114.714-15.61 154.724-37.377"></svg:path><svg:path fill="currentColor" d="M74.87 319.719c-4.054-3.642-10.87-.89-10.87 4.56V400c0 32.224 28.004 56.169 60.928 71.134C159.297 486.756 205.653 496 256 496s96.703-9.244 131.072-24.866C419.996 456.169 448 432.224 448 400v-75.721c0-5.45-6.816-8.202-10.87-4.56c-7.958 7.148-16.82 13.69-26.406 18.904C370.714 360.39 316.082 376 256 376s-114.714-15.61-154.724-37.377c-9.586-5.214-18.448-11.756-26.406-18.904"></svg:path>`,
})
export class IonServerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSettingsIcon],svg[ion-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="48" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m470.39 300l-.47-.38l-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.6 1.6 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13l-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59l-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56l-5.57 39.67a16 16 0 0 1-8.13 11.82a175 175 0 0 0-10 5.82a15.92 15.92 0 0 1-14.43 1.27l-37.13-15l-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22l-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38l31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.6 1.6 0 0 1 .13.22a26.86 26.86 0 0 0 32.45 11.3l.35-.13l37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59l.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56l5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95l.35.14a26.85 26.85 0 0 0 32.48-11.34a3 3 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11m-134.48-40.24a80 80 0 1 1-83.66-83.67a80.21 80.21 0 0 1 83.66 83.67"></svg:path>`,
})
export class IonSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShapesIcon],svg[ion-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 336H32a16 16 0 0 1-14-23.81l152-272a16 16 0 0 1 27.94 0l152 272A16 16 0 0 1 336 336"></svg:path><svg:path fill="currentColor" d="M336 160a161 161 0 0 0-32.57 3.32l74.47 133.27A48 48 0 0 1 336 368H183.33A160 160 0 1 0 336 160"></svg:path>`,
})
export class IonShapesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShareIcon],svg[ion-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M376 176H272v145a16 16 0 0 1-32 0V176H136a56.06 56.06 0 0 0-56 56v192a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V232a56.06 56.06 0 0 0-56-56M272 86.63l52.69 52.68a16 16 0 0 0 22.62-22.62l-80-80a16 16 0 0 0-22.62 0l-80 80a16 16 0 0 0 22.62 22.62L240 86.63V176h32Z"></svg:path>`,
})
export class IonShareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShareSocialIcon],svg[ion-share-social-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336"></svg:path>`,
})
export class IonShareSocialIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShieldIcon],svg[ion-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M479.07 111.35a16 16 0 0 0-13.15-14.75C379.89 81.18 343.69 69.12 266 34.16c-7.76-2.89-12.57-2.84-20 0c-77.69 35-113.89 47-199.92 62.44a16 16 0 0 0-13.15 14.75c-3.85 61.1 4.34 118 24.36 169.15a348.9 348.9 0 0 0 71.43 112.41c44.67 47.43 94.2 75.12 119.74 85.6a20 20 0 0 0 15.11 0c27-10.92 74.69-37.82 119.71-85.62a348.9 348.9 0 0 0 71.43-112.39c20.02-51.14 28.21-108.05 24.36-169.15"></svg:path>`,
})
export class IonShieldIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShieldCheckmarkIcon],svg[ion-shield-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M479.07 111.36a16 16 0 0 0-13.15-14.74c-86.5-15.52-122.61-26.74-203.33-63.2a16 16 0 0 0-13.18 0C168.69 69.88 132.58 81.1 46.08 96.62a16 16 0 0 0-13.15 14.74c-3.85 61.11 4.36 118.05 24.43 169.24A349.5 349.5 0 0 0 129 393.11c53.47 56.73 110.24 81.37 121.07 85.73a16 16 0 0 0 12 0c10.83-4.36 67.6-29 121.07-85.73a349.5 349.5 0 0 0 71.5-112.51c20.07-51.19 28.28-108.13 24.43-169.24m-131 75.11l-110.8 128a16 16 0 0 1-11.41 5.53h-.66a16 16 0 0 1-11.2-4.57l-49.2-48.2a16 16 0 1 1 22.4-22.86l37 36.29l99.7-115.13a16 16 0 0 1 24.2 20.94Z"></svg:path>`,
})
export class IonShieldCheckmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShieldHalfIcon],svg[ion-shield-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48.9 112.37C138.32 96.33 175.29 84.45 256 48c80.71 36.45 117.68 48.33 207.1 64.37C479.3 369.13 271.42 457.79 256 464c-15.42-6.21-223.3-94.87-207.1-351.63"></svg:path><svg:path fill="currentColor" d="M256 48c80.71 36.45 117.68 48.33 207.1 64.37C479.3 369.13 271.42 457.79 256 464Z"></svg:path>`,
})
export class IonShieldHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShirtIcon],svg[ion-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 96c33.08 0 60.71-25.78 64-58c.3-3-3-6-6-6a13 13 0 0 0-4.74.9c-.2.08-21.1 8.1-53.26 8.1s-53.1-8-53.26-8.1a16.2 16.2 0 0 0-5.3-.9h-.06a5.69 5.69 0 0 0-5.38 6c3.35 32.16 31 58 64 58"></svg:path><svg:path fill="currentColor" d="M485.29 89.9L356 44.64a4 4 0 0 0-5.27 3.16a96 96 0 0 1-189.38 0a4 4 0 0 0-5.35-3.16L26.71 89.9A16 16 0 0 0 16.28 108l16.63 88a16 16 0 0 0 13.92 12.9l48.88 5.52a8 8 0 0 1 7.1 8.19l-7.33 240.9a16 16 0 0 0 9.1 14.94A17.5 17.5 0 0 0 112 480h288a17.5 17.5 0 0 0 7.42-1.55a16 16 0 0 0 9.1-14.94l-7.33-240.9a8 8 0 0 1 7.1-8.19l48.88-5.52a16 16 0 0 0 13.92-12.9l16.63-88a16 16 0 0 0-10.43-18.1"></svg:path>`,
})
export class IonShirtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShuffleIcon],svg[ion-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 304l48 48l-48 48m0-288l48 48l-48 48M64 352h85.19a80 80 0 0 0 66.56-35.62L256 256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 160h85.19a80 80 0 0 1 66.56 35.62l80.5 120.76A80 80 0 0 0 362.81 352H416m0-192h-53.19a80 80 0 0 0-66.56 35.62L288 208"></svg:path>`,
})
export class IonShuffleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSkipBackwardIcon],svg[ion-skip-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M75.7 96h8.1c6.7 0 12.2 5 12.2 11.7v113.5L283.1 98.7c2.5-1.7 5.1-2.3 8.1-2.3 8.3 0 15.4 7 15.4 17v63.1l118.5-78.2c2.5-1.7 5-2.3 8.1-2.3 8.3 0 14.9 7.4 14.9 17.4v286c0 10-6.7 16.5-15 16.5-3.1 0-5.4-1.2-8.2-2.9l-118.3-77.6v64c0 10-7.2 16.5-15.5 16.5-3.1 0-5.5-1.2-8.2-2.9L96 290.8v113c0 6.7-5.4 12.2-12.2 12.2h-8.1C69 416 64 410.5 64 403.8V107.7C64 101 68.9 96 75.7 96z" fill="currentColor"></svg:path>`,
})
export class IonSkipBackwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSkipForwardIcon],svg[ion-skip-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M436.3 96h-8.1c-6.7 0-12.2 5-12.2 11.7v113.5L228.9 98.7c-2.5-1.7-5.1-2.3-8.1-2.3-8.3 0-15.4 7-15.4 17v63.1L86.9 98.3c-2.5-1.7-5.1-2.3-8.1-2.3-8.3 0-14.9 7.4-14.9 17.4v286c0 10 6.7 16.5 15 16.5 3.1 0 5.4-1.2 8.2-2.9l118.3-77.6v64c0 10 7.2 16.5 15.5 16.5 3.1 0 5.5-1.2 8.2-2.9L416 290.8v113c0 6.7 5.4 12.2 12.2 12.2h8.1c6.7 0 11.7-5.5 11.7-12.2V107.7c0-6.7-4.9-11.7-11.7-11.7z" fill="currentColor"></svg:path>`,
})
export class IonSkipForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSkullIcon],svg[ion-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M402 76.94C362.61 37.63 310.78 16 256 16h-.37A208 208 0 0 0 48 224v100.67A79.62 79.62 0 0 0 98.29 399l23.71 9.42a15.92 15.92 0 0 1 9.75 11.72l10 50.13A32.09 32.09 0 0 0 173.12 496H184a8 8 0 0 0 8-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 224 448v40a8 8 0 0 0 8 8a8 8 0 0 0 8-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 448v40a8 8 0 0 0 8 8a8 8 0 0 0 8-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 320 448v40a8 8 0 0 0 8 8h10.88a32.09 32.09 0 0 0 31.38-25.72l10-50.14a16 16 0 0 1 9.74-11.72l23.71-9.42A79.62 79.62 0 0 0 464 324.67v-99c0-56-22-108.81-62-148.73M171.66 335.88a56 56 0 1 1 52.22-52.22a56 56 0 0 1-52.22 52.22M281 397.25a16.37 16.37 0 0 1-9.3 2.75h-31.4a16.37 16.37 0 0 1-9.28-2.75a16 16 0 0 1-6.6-16.9l15.91-47.6C243 326 247.25 321 254 320.13c8.26-1 14 2.87 17.61 12.22l16 48a16 16 0 0 1-6.61 16.9m66.68-61.37a56 56 0 1 1 52.22-52.22a56 56 0 0 1-52.24 52.22Z"></svg:path>`,
})
export class IonSkullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSnowIcon],svg[ion-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m461 349l-34-19.64a89.5 89.5 0 0 1 20.94-16a22 22 0 0 0-21.28-38.51a133.6 133.6 0 0 0-38.55 32.1L300 256l88.09-50.86a133.5 133.5 0 0 0 38.55 32.1a22 22 0 1 0 21.28-38.51a89.7 89.7 0 0 1-20.94-16l34-19.64A22 22 0 1 0 439 125l-34 19.63a89.7 89.7 0 0 1-3.42-26.15A22 22 0 0 0 380 96h-.41a22 22 0 0 0-22 21.59a133.6 133.6 0 0 0 8.5 49.41L278 217.89V116.18a133.5 133.5 0 0 0 47.07-17.33a22 22 0 0 0-22.71-37.69A89.6 89.6 0 0 1 278 71.27V38a22 22 0 0 0-44 0v33.27a89.6 89.6 0 0 1-24.36-10.11a22 22 0 1 0-22.71 37.69A133.5 133.5 0 0 0 234 116.18v101.71L145.91 167a133.6 133.6 0 0 0 8.52-49.43a22 22 0 0 0-22-21.59H132a22 22 0 0 0-21.59 22.41a89.7 89.7 0 0 1-3.41 26.19L73 125a22 22 0 1 0-22 38.1l34 19.64a89.7 89.7 0 0 1-20.94 16a22 22 0 1 0 21.28 38.51a133.6 133.6 0 0 0 38.55-32.1L212 256l-88.09 50.86a133.6 133.6 0 0 0-38.55-32.1a22 22 0 1 0-21.28 38.51a89.7 89.7 0 0 1 20.94 16L51 349a22 22 0 1 0 22 38.1l34-19.63a89.7 89.7 0 0 1 3.42 26.15A22 22 0 0 0 132 416h.41a22 22 0 0 0 22-21.59a133.6 133.6 0 0 0-8.5-49.41L234 294.11v101.71a133.5 133.5 0 0 0-47.07 17.33a22 22 0 1 0 22.71 37.69A89.6 89.6 0 0 1 234 440.73V474a22 22 0 0 0 44 0v-33.27a89.6 89.6 0 0 1 24.36 10.11a22 22 0 0 0 22.71-37.69A133.5 133.5 0 0 0 278 395.82V294.11L366.09 345a133.6 133.6 0 0 0-8.52 49.43a22 22 0 0 0 22 21.59h.43a22 22 0 0 0 21.59-22.41a89.7 89.7 0 0 1 3.41-26.19l34 19.63A22 22 0 1 0 461 349"></svg:path>`,
})
export class IonSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialDribbbleIcon],svg[ion-social-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 64C150 64 64 150 64 256c0 106.1 86 192 192 192s192-85.9 192-192c0-106-86-192-192-192zm0 351.5c-88.1 0-159.5-71.4-159.5-159.5S167.9 96.5 256 96.5 415.5 167.9 415.5 256 344.1 415.5 256 415.5z" fill="currentColor"></svg:path><svg:path d="M306.3 246.7c23.4-2.2 50.9-2.9 77.2-2.4-2.3-25.4-12-48.7-27-67.6-16.5 14.9-38 28.1-63.3 39 4.6 10 8.9 20.4 13.1 31z" fill="currentColor"></svg:path><svg:path d="M335.4 155.6C313.6 138.3 286 128 256 128c-5.1 0-10.2.3-15.2.9 13.8 17.7 26.7 37.6 38.6 59.5 21.7-9.2 40.6-20.3 56-32.8z" fill="currentColor"></svg:path><svg:path d="M205.9 138.2c-34.1 14.5-60.7 43.4-72 79.1 41.1-.7 79.6-7 113.4-17.3-12.6-23-26.6-43.7-41.4-61.8z" fill="currentColor"></svg:path><svg:path d="M383 272.2c-22.3-.6-46-.2-66.9 1.5 4.1 12.3 8.1 24.9 11.5 37.9 3.8 14.6 7 29.1 9.6 43.4 24.6-20.3 41.6-49.6 45.8-82.8z" fill="currentColor"></svg:path><svg:path d="M258 256.1c3.9-1.6 8.8-3 14.3-4.3-3.4-8.3-7.1-16.4-10.8-24.3-39.1 12.6-84.6 20.3-133.3 21.3-.1 2.4-.2 4.8-.2 7.3 0 29.1 9.7 55.9 26 77.4 24.9-32.5 60.9-59.3 104-77.4z" fill="currentColor"></svg:path><svg:path d="M282.6 278.2c-6.9 1.5-12.9 3.2-17.4 5.3-37.1 16.8-68.3 41.6-90.4 71.5 22.1 18.2 50.4 29 81.2 29 18.5 0 36-3.9 51.8-10.9-2.7-15.1-6-30.3-10-45.7-4.4-16.9-9.6-33.4-15.2-49.2z" fill="currentColor"></svg:path>`,
})
export class IonSocialDribbbleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialFacebookIcon],svg[ion-social-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64z" fill="currentColor"></svg:path>`,
})
export class IonSocialFacebookIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialGoogleIcon],svg[ion-social-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M325.862 275.558l-18.187-13.653-.063-.051c-5.827-4.579-9.952-8.313-9.952-14.685 0-6.979 5.049-11.824 10.896-17.436l.466-.449c20.025-15.171 44.726-34.286 44.726-74.556 0-26.934-11.916-44.729-23.28-57.729h12.969l60.322-33H270.308c-25.324 0-62.68 3.225-94.561 28.576l-.128.25c-21.809 18.111-34.828 44.584-34.828 70.691 0 21.197 8.706 42.159 23.885 57.447 21.428 21.579 48.302 26.127 67.074 26.127 1.462 0 2.956-.028 4.47-.093-.759 2.969-1.25 6.321-1.25 10.321 0 10.926 3.628 19.301 8.083 26.195-23.963 1.932-58.148 6.477-84.897 22.278-39.335 22.562-42.396 55.875-42.396 65.551 0 38.207 35.707 76.762 115.479 76.762 91.611 0 139.543-49.792 139.543-98.979-.001-37.159-22.837-55.668-44.92-73.567zM200.485 139.894c0-13.359 3.02-23.457 9.255-30.9 6.514-7.852 18.18-13.129 29.028-13.129 19.881 0 32.938 15.008 40.388 27.598 9.199 15.539 14.913 36.095 14.913 53.643 0 4.942 0 19.983-10.188 29.796-6.951 6.686-18.707 11.353-28.59 11.353-20.503 0-33.453-14.705-40.707-27.041-10.395-17.684-14.099-38.105-14.099-51.32zM321.6 367.974c0 27.444-25.212 44.493-65.799 44.493-48.058 0-80.347-20.603-80.347-51.265 0-26.14 21.54-36.789 37.8-42.521 18.944-6.064 44.297-7.305 50.062-7.305 3.907 0 6.087 0 8.683.229 36.701 25.211 49.601 36.128 49.601 56.369z" fill="currentColor"></svg:path>`,
})
export class IonSocialGoogleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialGoogleplusIcon],svg[ion-social-googleplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M242.1 275.6l-18.2-13.7-.1-.1c-5.8-4.6-10-8.3-10-14.7 0-7 5-11.8 10.9-17.4l.5-.4c20-15.2 44.7-34.3 44.7-74.6 0-26.9-11.9-44.7-23.3-57.7h13L320 64H186.5c-25.3 0-62.7 3.2-94.6 28.6l-.1.3C70 110.9 57 137.4 57 163.5c0 21.2 8.7 42.2 23.9 57.4 21.4 21.6 48.3 26.1 67.1 26.1 1.5 0 3 0 4.5-.1-.8 3-1.2 6.3-1.2 10.3 0 10.9 3.6 19.3 8.1 26.2-24 1.9-58.1 6.5-84.9 22.3-39.4 22.7-42.5 56-42.5 65.6 0 38.2 35.7 76.8 115.5 76.8 91.6 0 139.5-49.8 139.5-99 0-37.1-22.8-55.6-44.9-73.5zM116.7 139.9c0-13.4 3-23.5 9.3-30.9 6.5-7.9 18.2-13.1 29-13.1 19.9 0 32.9 15 40.4 27.6 9.2 15.5 14.9 36.1 14.9 53.6 0 4.9 0 20-10.2 29.8-7 6.7-18.7 11.4-28.6 11.4-20.5 0-33.5-14.7-40.7-27-10.4-17.8-14.1-38.2-14.1-51.4zM237.8 368c0 27.4-25.2 44.5-65.8 44.5-48.1 0-80.3-20.6-80.3-51.3 0-26.1 21.5-36.8 37.8-42.5 18.9-6.1 44.3-7.3 50.1-7.3 3.9 0 6.1 0 8.7.2 36.6 25.2 49.5 36.1 49.5 56.4z" fill="currentColor"></svg:path><svg:path d="M402 142V64h-34v78h-80v34h80v81h34v-81h78v-34z" fill="currentColor"></svg:path>`,
})
export class IonSocialGoogleplusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialInstagramIcon],svg[ion-social-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="255.833" r="80" fill="currentColor"></svg:circle><svg:path d="M177.805 176.887c21.154-21.154 49.279-32.929 79.195-32.929s58.041 11.837 79.195 32.991c13.422 13.422 23.011 29.551 28.232 47.551H448.5v-113c0-26.51-20.49-47-47-47h-288c-26.51 0-49 20.49-49 47v113h85.072c5.222-18 14.811-34.191 28.233-47.613zM416.5 147.7c0 7.069-5.73 12.8-12.8 12.8h-38.4c-7.069 0-12.8-5.73-12.8-12.8v-38.4c0-7.069 5.73-12.8 12.8-12.8h38.4c7.069 0 12.8 5.73 12.8 12.8v38.4z" fill="currentColor"></svg:path><svg:path d="M336.195 335.279c-21.154 21.154-49.279 32.679-79.195 32.679s-58.041-11.462-79.195-32.616c-21.115-21.115-32.759-49.842-32.803-78.842H64.5v143c0 26.51 22.49 49 49 49h288c26.51 0 47-22.49 47-49v-143h-79.502c-.043 29-11.687 57.664-32.803 78.779z" fill="currentColor"></svg:path>`,
})
export class IonSocialInstagramIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialOctocatIcon],svg[ion-social-octocat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M178.354 287.478c-9.123 0-16.928 4.207-23.201 12.833-6.291 8.478-9.398 18.973-9.398 31.431 0 12.474 3.166 23.008 9.398 31.509 6.273 8.54 14.039 12.771 23.201 12.771 8.494 0 15.889-4.27 22.121-12.771 6.271-8.501 9.398-19.035 9.398-31.509 0-12.419-3.166-22.93-9.398-31.431-6.233-8.587-13.567-12.833-22.121-12.833z"></svg:path><svg:path d="M334.668 287.478c-9.045 0-16.891 4.207-23.182 12.833-6.271 8.478-9.359 18.973-9.359 31.431 0 12.474 3.186 23.008 9.359 31.509 6.291 8.54 14.098 12.771 23.182 12.771 8.533 0 15.906-4.27 22.178-12.771 6.293-8.501 9.418-19.035 9.418-31.509 0-12.419-3.164-22.93-9.418-31.431-6.272-8.587-13.547-12.833-22.178-12.833z"></svg:path><svg:path d="M445.777 172h-.059s2.793-14.264.314-39.18c-2.182-24.916-7.471-47.838-16.123-68.82 0 0-4.422.76-12.76 2.896s-22.08 6.299-40.938 14.768c-18.541 8.54-37.986 19.788-58.297 33.505-13.803-3.934-34.408-5.939-61.994-5.939-26.289 0-46.914 2.012-61.977 5.945C149.351 84.316 112.111 67.23 81.851 64c-8.594 20.982-13.883 43.991-16.045 68.97-2.398 24.939.432 39.329.432 39.329C41.979 198.551 32 236.541 32 267.793c0 24.244.658 46.078 6.125 65.48 5.564 19.31 12.662 35.13 21.098 47.221 8.611 12.121 19.012 22.788 31.576 31.938 12.467 9.314 23.988 15.962 34.389 20.216 10.461 4.372 22.375 7.602 35.982 9.861 13.33 2.386 23.438 3.645 30.477 3.996 0 0 28 1.494 64.354 1.494s64.295-1.494 64.295-1.494c7.02-.352 17.145-1.634 30.535-3.996 13.547-2.299 25.521-5.607 35.941-9.861 10.402-4.293 21.943-10.901 34.469-20.216 12.523-9.032 22.906-19.739 31.518-31.938 8.436-12.091 15.494-27.911 21.098-47.221 5.486-19.402 6.145-41.385 6.145-65.629C480 237.389 469.982 199 445.777 172zm-65.394 233.645C352.521 418.736 311.486 424 257.061 424l-2.143-.039c-54.443 0-95.361-5.248-122.848-18.41-27.508-13.092-41.271-40.057-41.271-80.738 0-24.33 8.572-43.99 25.482-59.107 7.354-6.515 16.438-11.019 27.645-13.717 11.129-2.558 21.354-2.762 30.969-2.465 9.398.415 22.551 2.196 39.344 3.464C231.029 254.285 243.535 256 256 256c11.698 0 27.213-1.957 52.104-3.959 24.99-1.971 43.494-2.971 55.467-1 12.289 2.002 22.986 6.202 32.129 14.742 17.734 15.751 26.602 35.505 26.602 59.084-.001 40.666-14.138 67.67-41.919 80.778z"></svg:path></svg:g>`,
})
export class IonSocialOctocatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialRedditIcon],svg[ion-social-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480.5 251c0-27.7-22.2-50.2-49.5-50.2-13 0-24.7 5-33.6 13.3-32.4-22.8-76.1-37.8-124.9-40.6l21.9-73.2 67.1 13.5c2.3 22.7 21.2 40.4 44.3 40.4h.4c24.6 0 44.5-20.2 44.5-45.1S430.7 64 406.1 64h-.2-.1c-17.2 0-32 9.8-39.5 24.3l-89.7-18-30.8 103-2.5.1c-50.3 2.2-95.5 17.4-128.7 40.7-8.8-8.3-20.6-13.3-33.6-13.3-27.3 0-49.5 22.5-49.5 50.2 0 19.6 11 36.5 27.1 44.8-.8 4.9-1.2 9.8-1.2 14.8.1 75.8 89 137.4 198.6 137.4s198.5-61.6 198.5-137.5c0-5-.4-9.9-1.1-14.8 16.1-8.3 27.1-25.2 27.1-44.7zM65.8 271.1c-6.6-4.5-10.9-12.1-10.9-20.8 0-13.8 11.1-25.1 24.7-25.1 5.6 0 10.8 1.9 15 5.1-13.5 11.9-23.5 25.7-28.8 40.8zm323.5-162c0-9.2 7.4-16.8 16.5-16.8s16.5 7.5 16.5 16.8c0 9.2-7.4 16.8-16.5 16.8s-16.5-7.5-16.5-16.8zM158.5 288.4c0-17.6 14.2-31.8 31.8-31.8s31.8 14.2 31.8 31.8-14.2 31.8-31.8 31.8-31.8-14.2-31.8-31.8zM256 400c-47.6-.2-76-28.5-77.2-29.7l12.6-12.4c.2.2 23.7 24.2 64.6 24.4 40.3-.2 64.2-24.2 64.5-24.4l12.6 12.4c-1.2 1.2-29.5 29.5-77.1 29.7zm66.3-79.8c-17.6 0-31.8-14.2-31.8-31.8s14.2-31.8 31.8-31.8 31.8 14.2 31.8 31.8-14.3 31.8-31.8 31.8zm124.1-48.7c-5.4-15.3-15.6-29.4-29.3-41.4 4.2-3.3 9.5-5.2 15.2-5.2 13.9 0 25.1 11.4 25.1 25.5.1 8.8-4.3 16.5-11 21.1z" fill="currentColor"></svg:path>`,
})
export class IonSocialRedditIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialTuxIcon],svg[ion-social-tux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M254.7 101.3c-.6 1-1.2 2-1.7 3.1 1.8-3.5 4.3-6.5 7.4-8.7-2.1 1.3-4.1 3.1-5.7 5.6-.6 1 1.6-2.5 0 0z"></svg:path><svg:path d="M426.3 396c-6.7-4-13.2-11-12-18.8 2.3-15.3 2.5-21.5-.2-25.8-1.899-3.2-5.5-5-8.6-5.801 2-2.5 3.1-5.399 3.8-10.899 1.842-14.168-3.239-30.67-6.61-44.243-4.445-17.9-10.319-34.014-20.432-49.522-16.489-25.288-37.253-46.804-51.857-73.435-9.7-29-4.301-47.1-4.801-66.2C324.7 64 298.7 32 261 32h-14c-37.5 0-58 26.9-58 60a17033.74 17033.74 0 0 1 2 50c.769 19.756 1.98 37.667-8 55.3-7.033 12.488-19.571 22.43-28.592 33.478-9.525 11.665-13.06 23.669-17.859 37.619-5.987 17.401-21.275 30.906-24.886 48.929-1.658 8.271 2.726 17.857-.83 24.693-3.698 7.109-.813 14.469-2.833 21.682-3.505 11.729-20.731 10.729-30.215 11.508-17.602 1.443-11.051 17.988-7.843 29.701 5.598 20.435-19.54 42.078 11.032 50.471 13.989 3.84 28.586 5.13 42.727 8.32 13.981 3.154 26.917 8.612 40.396 13.262 10.469 3.611 20.262 4.146 30.323-1.232 10.982-5.87 18.947-15.083 31.691-17 24.707-3.716 54.829-4.169 79.373.63 7.507 1.468 10.075 6.525 14.905 11.766 8.145 8.838 21.514 10.125 32.794 8.22 11.89-2.01 20.846-9.466 29.686-17.112 12.526-10.835 26.137-17.996 40.791-25.547 7.439-3.833 22.178-9.388 24.159-18.903 2.332-11.212-14.177-17.402-21.519-21.785zM202 451.3c-1.3 13-13.9 20.3-25.4 19.3-19.502-1.649-37.86-12.237-57.164-15.75-9.393-1.709-47.351-3.173-46.943-17.079.215-7.361 5.751-11.666 7.567-18.415 2.811-10.449-5.753-19.932-6.32-30.16-.447-8.081 10.73-7.607 16.288-8.053 8.761-.702 19.157-2.012 23.572-11.043 1.6-3.3-.5-15 1.9-21.8 3.527-10.155 15.489-8.949 23.3-4.899 17.762 9.067 28.943 35.546 38.533 51.821 9.725 16.506 26.712 35.621 24.667 56.078zm116.3-65.6c2.289 11.787 4.224 24.387 1.7 36.3-2.016 9.516-8.562 15.614-12.7 24-2.2-6.8 11.3-16.7 9.8-33.7-.042-.475-.947-10.882-1.036-10.834-1.979 1.082-3.825 5.075-5.304 6.73-4.809 5.383-10.771 9.658-16.729 13.677-13.797 9.306-29.221 15.058-45.83 16.627-21 2-38-10.5-38-10.5 2.517 8.305 8.992 21 1.1 28.3 1.743-15.648-4.876-28.06-11.6-41.7 46.374-24.639-41.363-64.397-53-79.8-10.476-13.896-5.553-31.83-2.7-43.5-3.443 13.775-3.959 41.956 14 46.8 7.922 2.169 5.605-37.071 5.984-41.463 1.58-18.312 7.721-35.997 18.343-51.015 3.399-4.806 1.863-9.533 2.673-15.322 1.693-10.668 7.295-20.547 13.488-29.225 5.169-7.243 1.735-12.618 3.014-21.055.727-4.795 5.118 3.193 5.798 4.279 4 6.5 16.7 22.7 24.7 22 13.277-1.161 24.692-15.938 36.015-22.046 3.591-1.937 14.41-5.242 15.866-9.632 1.768-5.33-12.666-.161-14.114.583-10.782 5.535-31.018 21.448-43.867 15.295-8.762-4.195-10.691-14.994-17.2-20.5 15.4 13.6 21.5 10.5 27.6 9.1 9.665-2.182 18.797-6.486 27.8-10.5 4.217-1.88 20.107-4.041 22.301-8.7 2.745-5.834-5.05-6.726-8.068-3.58-6.251 6.515-15.853 8.981-24.097 11.787-18.885 6.427-37.644 9.131-51.835-8.607-8.354-10.212 15.558-22.504 22.2-28.8 0 0 1-7.2-.6-12.7-1.9-6.5-7.8-9.3-11.9-8.1-4.1 1.1-8 5.5-6.8 14.8 1 8.3 7 11 7 11s-2.7 3.5-5.2 4.7c0 0-.8-.3-3.5-6.3s-6.6-19.5-.3-31.1c6.3-11.6 19.6-5.2 23.8 3.8 3.9 8.3 2.4 22.7 2.4 22.7 3.358-.843 6.835-1.3 10.3-1.3 4.242 0 6.814 4.563 10.6 4.8-.635 0-.564-18.124-.233-20.078 1.099-6.49 4.112-13.619 9.933-17.222 16.087-11.491 34.6 3.916 34.6 21.2.024 4.486-.137 9.215-1.199 13.6-.659 2.637-1.582 8.469-5.114 9.177-1.145.23-10.683-.431-7.985-3.277 12.807-12.812-1.822-38.207-17.4-24.5-5.601 4.199-5.483 13.833-4.801 20 1.098 9.141 20.51 11.541 26.852 13.78 8.224 2.903 7.943 9.626 6.679 17.116-1.9 11.26-2.815 18.792 4.381 28.214 7.344 9.616 12.929 20.086 15.915 31.878 1.483 5.859 1.665 10.843 5.621 15.57 5.983 7.151 10.619 14.805 13.291 23.817 5.225 17.621 6.513 35.422 6.162 53.625-.5 8.199-2.1 15 8.3 9.699 4-2 6.5-2.899 11-3.699 3.101-6.301 4.4-18.301 4.5-24.301.2-13.5-.3-41.5-27.699-71.5 0 0 28.5 21.7 33 62 2.5 22.301-2 34.4-2 34.4 5.3 1.3 10.8 5.3 13.6 9.8-.133-.22 1.038 1.748 1.179 1.864-9.811-8.171-31.708-12.859-39.679.236-2 3.3-3.1 7.6-3.2 11.699-7.1-1.199-12.399 0-16.8 4.9C313.5 358.1 316.3 375.3 318.3 385.7c2 10.3-2-10.4 0 0zm-97.7-260.8c-.2-4.9-2.1-9-4.7-10.8.3-.3.8-.7 1.7-.4 1.4.4 3.5 2.7 4.3 6.3.7 2.9.4 7.7-1.4 7.7-.002-.934.031-1.867.1-2.8-.2-4.9 0 .9 0 0zm54.7-12c.4-.3 1.101-.6 2.3-.3 1.801.4 4.4 2.8 5.301 6.2.699 2.8.1 7.4-2.2 7.3-.005-.903.062-1.803.2-2.7-.101-4.6-2.301-8.6-5.601-10.5.4-.3 3.3 1.9 0 0zm137.1 320c-17.504 7.553-31.304 19.968-47.117 30.19-13.824 8.937-38.156 8.313-40.022-12.879-1.565-17.776 4.184-35.288 1.84-53.357-1.587-12.239-8.534-28.906-2.301-40.854 2.7-5.1 8.101-5.5 12.5-4 3.193 13.267 13.932 23.6 28 23.6 17.031 0 23.542-14.008 34-24.5 3.4.2 7.4 1.101 8.8 4.801 2.301 5.8-1.899 17.5-1.8 22.3.3 15.7 9 19.2 26.4 29C448 416 436.9 422.3 412.4 432.9c-24.1 10.4 24.5-10.6 0 0z"></svg:path></svg:g>`,
})
export class IonSocialTuxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialTwitchIcon],svg[ion-social-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M80 32l-32 80v304h96v64h64l64-64h80l112-112V32H80zm176 240h-48V143h48v129zm112 0h-48V143h48v129z" fill="currentColor"></svg:path>`,
})
export class IonSocialTwitchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialVimeoIcon],svg[ion-social-vimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M476.9 114c-5-23.4-17.5-38.8-40.6-46.3s-64.9-4.5-94.1 16.8c-29.9 21.8-47.6 59.7-53.8 83.8 14.7-6.3 24-7.7 39-6.9 15 .8 24.5 12 24.9 25.3.3 9.8-.2 18.7-3.6 27.7-10.8 28.7-27.7 56.5-47.6 80.8-2.9 3.6-6.4 6.9-10 9.9-10.2 8.3-18.8 6.1-25.4-5.2-5.4-9.3-9-18.9-12.2-29.1-12.4-39.7-16.8-80.9-23.8-121.6-3.3-19.5-7-39.8-18-56.9-11.6-17.8-28.6-24.6-50-22-14.7 1.8-36.9 17.5-47.8 26.4 0 0-56 46.9-81.8 71.4l21.2 27s17.9-12.5 27.5-18.3c5.7-3.4 12.4-4.1 17.2.2 4.5 3.9 9.6 9 12.3 14.1 5.7 10.7 11.2 21.9 14.7 33.4 13.2 44.3 25.5 88.7 37.8 133.3 6.3 22.8 13.9 44.2 28 63.6 19.3 26.6 39.6 32.7 70.9 21.5 25.4-9.1 46.6-26.2 66-43.9 33.1-30.2 59.1-65.4 85.5-101.2 20.4-27.7 37.3-55.7 51.4-87 13.9-31 19.4-63.5 12.3-96.8z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></svg:path>`,
})
export class IonSocialVimeoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSoupCanIcon],svg[ion-soup-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="256" cy="80" rx="160" ry="64" fill="currentColor"></svg:ellipse><svg:path d="M256 440c88.365 0 152-28.654 152-64V248c0 28.581-41.612 52.783-104.26 61.002C301.238 333.16 280.82 352 256 352s-45.238-18.84-47.74-42.998C145.612 300.783 104 276.581 104 248v128c0 35.346 63.634 64 152 64z" fill="currentColor"></svg:path><svg:path d="M256 160c-88.366 0-160-28.654-160-64 0 0 0 32.834 8 40v96c0 28.732 42.049 53.042 105.25 61.134C214.176 271.861 233.229 256 256 256s41.824 15.861 46.75 37.134C365.951 285.042 408 260.732 408 232v-96c8-8.25 8-40 8-40 0 35.346-71.635 64-160 64z" fill="currentColor"></svg:path><svg:path d="M408 392c0 35.346-63.635 64-152 64-88.366 0-152-28.654-152-64v23.999L96 432c0 6.994 2.815 13.725 8 20.025C125.016 477.562 185.121 496 256 496s130.984-18.438 152-43.975c5.186-6.301 8-13.031 8-20.025l-8-16.001V392z" fill="currentColor"></svg:path>`,
})
export class IonSoupCanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSparklesIcon],svg[ion-sparkles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 512a24.84 24.84 0 0 1-23.34-16l-39.84-103.6a16.06 16.06 0 0 0-9.19-9.19L32 343.34a25 25 0 0 1 0-46.68l103.6-39.84a16.06 16.06 0 0 0 9.19-9.19L184.66 144a25 25 0 0 1 46.68 0l39.84 103.6a16.06 16.06 0 0 0 9.19 9.19l103 39.63a25.49 25.49 0 0 1 16.63 24.1a24.82 24.82 0 0 1-16 22.82l-103.6 39.84a16.06 16.06 0 0 0-9.19 9.19L231.34 496A24.84 24.84 0 0 1 208 512M88 176a14.67 14.67 0 0 1-13.69-9.4l-16.86-43.84a7.28 7.28 0 0 0-4.21-4.21L9.4 101.69a14.67 14.67 0 0 1 0-27.38l43.84-16.86a7.3 7.3 0 0 0 4.21-4.21L74.16 9.79A15 15 0 0 1 86.23.11a14.67 14.67 0 0 1 15.46 9.29l16.86 43.84a7.3 7.3 0 0 0 4.21 4.21l43.84 16.86a14.67 14.67 0 0 1 0 27.38l-43.84 16.86a7.28 7.28 0 0 0-4.21 4.21l-16.86 43.84A14.67 14.67 0 0 1 88 176m312 80a16 16 0 0 1-14.93-10.26l-22.84-59.37a8 8 0 0 0-4.6-4.6l-59.37-22.84a16 16 0 0 1 0-29.86l59.37-22.84a8 8 0 0 0 4.6-4.6l22.67-58.95a16.45 16.45 0 0 1 13.17-10.57a16 16 0 0 1 16.86 10.15l22.84 59.37a8 8 0 0 0 4.6 4.6l59.37 22.84a16 16 0 0 1 0 29.86l-59.37 22.84a8 8 0 0 0-4.6 4.6l-22.84 59.37A16 16 0 0 1 400 256"></svg:path>`,
})
export class IonSparklesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSpeakerphoneIcon],svg[ion-speakerphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M70.9 181.5c0-41 25-76.5 60.6-91.5h-7.7c-41.1 0-75.1 32.8-81.1 75.2-6 1-10.7 7.9-10.7 16.1 0 8.6 5.1 15.4 11.6 15.9 7.2 36.4 35.1 65.8 69.7 68.8h.1c1.4 0 2.8.6 4.2.9 1.1.2 2.2.4 3.3.7-29.9-17.1-50-49.2-50-86.1z" fill="currentColor"></svg:path><svg:path d="M465.1 91c-1.1-2.9-2.3-5.6-3.5-8.3-6.5-14.4-14.4-26-23.4-34.6C427 37.6 414.1 32 400.8 32c-8.3 0-16.4 2.2-24.1 6.4h-.1c-1.2.7-2.4 1.3-3.6 2-49 29-104.1 46.2-162.6 49.4-6.5.4-13 .2-19.5.2h-42.3c-34 15-59 50.5-59 91.5 0 36.8 19.2 69.1 47.8 86.1 13 10.9 41.7 11.7 40 23.9-1.9 13.2-5.5 21.9-7.8 30.7-1.3 4.8-23.6 72.9-25.3 144.7 0 2 0 3.7.2 6.6.2 2.9 2.2 6.4 8.5 6.4h76.8c6.6 0 9.7-3.3 9.3-9.3-.2-1.9-.6-4.3-.8-6.5-2.4-23.1-4.6-49.8-3.3-81.6 1.3-34 5.2-51.9 7-61.3 2.1-10.4 7.6-22.4 12.1-30.3 30.8.9 92.9 19.3 115.1 28.9 0 0 7.2 3.4 10.1 5.2 7 3.4 14.2 5.1 21.6 5.1.9 0 1.8 0 2.7-.1 12.3-.7 24.2-9.7 34.7-19.5 9.1-8.5 16.9-20.2 23.4-34.6 1.2-2.8 2.4-5.6 3.5-8.6 9.6-25 14.8-55.9 14.8-88.1 0-32.2-5.2-63.2-14.9-88.2zM442 267.5c-7.8 18.5-18.2 33.3-29.5 33.3s-21.6-14.7-29.4-33.3c-9.1-21.6-14.9-53.1-14.9-88.1 0-35.2 5.8-66.8 15-88.4 7.8-18.4 18.1-29.5 29.3-29.5 11.3 0 21.5 11.2 29.4 29.5 9.2 21.6 15 53.2 15 88.4 0 35-5.8 66.5-14.9 88.1z" fill="currentColor"></svg:path>`,
})
export class IonSpeakerphoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSpeedometerIcon],svg[ion-speedometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M425.7 118.25A240 240 0 0 0 76.32 447l.18.2c.33.35.64.71 1 1.05c.74.84 1.58 1.79 2.57 2.78a41.17 41.17 0 0 0 60.36-.42a157.13 157.13 0 0 1 231.26 0a41.18 41.18 0 0 0 60.65.06l3.21-3.5l.18-.2a239.93 239.93 0 0 0-10-328.76ZM240 128a16 16 0 0 1 32 0v32a16 16 0 0 1-32 0ZM128 304H96a16 16 0 0 1 0-32h32a16 16 0 0 1 0 32m48.8-95.2a16 16 0 0 1-22.62 0l-22.63-22.62a16 16 0 0 1 22.63-22.63l22.62 22.63a16 16 0 0 1 0 22.62m149.3 23.1l-47.5 75.5a31 31 0 0 1-7 7a30.11 30.11 0 0 1-35-49l75.5-47.5a10.23 10.23 0 0 1 11.7 0a10.06 10.06 0 0 1 2.3 14m31.72-23.1a16 16 0 0 1-22.62-22.62l22.62-22.63a16 16 0 0 1 22.63 22.63ZM416 304h-32a16 16 0 0 1 0-32h32a16 16 0 0 1 0 32"></svg:path>`,
})
export class IonSpeedometerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSpoonIcon],svg[ion-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M320 160c0-64-26.5-128-64-128s-64 64-64 128c.9 25 15.7 54.3 36.6 64.3.5.2.9.4 1.4.6h.1c3.4 1.9 9.8 5.5 9.8 9.7 0 0-16 198.7-16 210.1s5 20.5 10.5 26 13.1 9.2 21.3 9.2h.4c8.2 0 15.8-3.7 21.4-9.2 5.5-5.5 10.3-12.9 10.3-26s-16-210.1-16-210.1c0-4.2 6.4-7.9 9.8-9.8l1.7-.9C304.9 214 320 186 320 160" fill="currentColor"></svg:path>`,
})
export class IonSpoonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSquareIcon],svg[ion-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 464H96a48.05 48.05 0 0 1-48-48V96a48.05 48.05 0 0 1 48-48h320a48.05 48.05 0 0 1 48 48v320a48.05 48.05 0 0 1-48 48"></svg:path>`,
})
export class IonSquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStarIcon],svg[ion-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"></svg:path>`,
})
export class IonStarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStarHalfIcon],svg[ion-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M480 208H308L256 48l-52 160H32l140 96l-54 160l138-100l138 100l-54-160Z"></svg:path><svg:path fill="currentColor" d="M256 48v316L118 464l54-160l-140-96h172z"></svg:path>`,
})
export class IonStarHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStatsBarsIcon],svg[ion-stats-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M176 96h64v320h-64z" fill="currentColor"></svg:path><svg:path d="M80 320h64v96H80z" fill="currentColor"></svg:path><svg:path d="M272 256h64v160h-64z" fill="currentColor"></svg:path><svg:path d="M368 192h64v224h-64z" fill="currentColor"></svg:path>`,
})
export class IonStatsBarsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStatsChartIcon],svg[ion-stats-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 496H72a24 24 0 0 1-24-24V328a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v144a24 24 0 0 1-24 24m224 0h-32a24 24 0 0 1-24-24V232a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v240a24 24 0 0 1-24 24m112 0h-32a24 24 0 0 1-24-24V120a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v352a24 24 0 0 1-24 24m-224 0h-32a24 24 0 0 1-24-24V40a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v432a24 24 0 0 1-24 24"></svg:path>`,
})
export class IonStatsChartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSteamIcon],svg[ion-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 208.2c0 20.5-16.6 37.2-37.2 37.2-20.5 0-37.2-16.6-37.2-37.2 0-20.5 16.6-37.2 37.2-37.2 20.5 0 37.2 16.7 37.2 37.2zM442.6 139c-38.1 0-69 30.7-69.4 68.7l-43.2 62c-1.8-.2-3.6-.3-5.4-.3-9.7 0-18.7 2.7-26.4 7.3L102.4 198c-5.1-23.2-25.9-40.7-50.6-40.7C23.3 157.2 0 180.6 0 209.1c0 28.5 23.3 51.8 51.8 51.8 9.7 0 18.7-2.7 26.4-7.3L274 332.2c5.1 23.3 25.8 40.8 50.6 40.8 26.8 0 49-20.6 51.5-46.7l66.5-48.6c38.3 0 69.4-31 69.4-69.3S480.9 139 442.6 139zm0 22.9c25.7 0 46.5 20.9 46.5 46.5 0 25.7-20.9 46.4-46.5 46.4-25.7 0-46.5-20.8-46.5-46.4 0-25.7 20.8-46.5 46.5-46.5zm-390.8 9c14.6 0 27.3 8.2 33.7 20.2l-18.9-7.6v.1c-15.3-5.5-32.2 2-38.3 17.1-6.1 15.2.9 32.3 15.7 38.9v.1l16.1 6.4c-2.6.6-5.4.9-8.2.9-21.1 0-38.1-17-38.1-38.1-.1-20.9 16.9-38 38-38zm272.8 112.2c21.1 0 38.1 17 38.1 38.1s-17 38.1-38.1 38.1c-14.7 0-27.4-8.2-33.7-20.3 6.3 2.5 12.5 5 18.8 7.6 15.5 6.2 33.2-1.3 39.4-16.8 6.2-15.5-1.3-33.1-16.9-39.4l-15.9-6.4c2.8-.5 5.5-.9 8.3-.9z" fill="currentColor"></svg:path>`,
})
export class IonSteamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStopIcon],svg[ion-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M392 432H120a40 40 0 0 1-40-40V120a40 40 0 0 1 40-40h272a40 40 0 0 1 40 40v272a40 40 0 0 1-40 40"></svg:path>`,
})
export class IonStopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStopCircleIcon],svg[ion-stop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m80 262.4a25.62 25.62 0 0 1-25.6 25.6H201.6a25.62 25.62 0 0 1-25.6-25.6V201.6a25.62 25.62 0 0 1 25.6-25.6h108.8a25.62 25.62 0 0 1 25.6 25.6Z"></svg:path>`,
})
export class IonStopCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStopwatchIcon],svg[ion-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="272" r="16" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M280 81.5V72a24 24 0 0 0-48 0v9.5a191 191 0 0 0-84.43 32.13L137 103a24 24 0 0 0-34 34l8.6 8.6A191.17 191.17 0 0 0 64 272c0 105.87 86.13 192 192 192s192-86.13 192-192c0-97.74-73.42-178.66-168-190.5M256 320a48 48 0 0 1-16-93.25V152a16 16 0 0 1 32 0v74.75A48 48 0 0 1 256 320"></svg:path>`,
})
export class IonStopwatchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStorefrontIcon],svg[ion-storefront-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 448h-12a4 4 0 0 1-4-4V273.51a4 4 0 0 0-5.24-3.86a105 105 0 0 1-28.32 4.78c-1.18 0-2.3.05-3.4.05a108.2 108.2 0 0 1-52.85-13.64a8.23 8.23 0 0 0-8 0a108.2 108.2 0 0 1-52.84 13.64a106.1 106.1 0 0 1-52.46-13.79a8.21 8.21 0 0 0-8.09 0a108.14 108.14 0 0 1-53.16 13.8a106.2 106.2 0 0 1-52.77-14a8.25 8.25 0 0 0-8.16 0a106.2 106.2 0 0 1-52.77 14c-1.09 0-2.19 0-3.37-.05h-.06a105 105 0 0 1-29.28-5.09a4 4 0 0 0-5.23 3.8V444a4 4 0 0 1-4 4H32.5c-8.64 0-16.1 6.64-16.48 15.28A16 16 0 0 0 32 480h447.5c8.64 0 16.1-6.64 16.48-15.28A16 16 0 0 0 480 448m-256-68a4 4 0 0 1-4 4h-88a4 4 0 0 1-4-4v-64a12 12 0 0 1 12-12h72a12 12 0 0 1 12 12Zm156 68h-72a4 4 0 0 1-4-4V316a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v128a4 4 0 0 1-4 4m112.57-277.72l-42.92-98.49C438.41 47.62 412.74 32 384.25 32H127.7c-28.49 0-54.16 15.62-65.4 39.79l-42.92 98.49c-9 19.41 2.89 39.34 2.9 39.35l.28.45c.49.78 1.36 2 1.89 2.78c.05.06.09.13.14.2l5 6.05a8 8 0 0 0 .6.65l5 4.83l.42.36a69.7 69.7 0 0 0 9.39 6.78v.05a74 74 0 0 0 36 10.67h2.47a76.08 76.08 0 0 0 51.89-20.31l.33-.31a7.94 7.94 0 0 1 10.89 0l.33.31a77.3 77.3 0 0 0 104.46 0a8 8 0 0 1 10.87 0a77.31 77.31 0 0 0 104.21.23a7.88 7.88 0 0 1 10.71 0a76.8 76.8 0 0 0 52.31 20.08h2.49a71.35 71.35 0 0 0 35-10.7c.95-.57 1.86-1.17 2.78-1.77A71.3 71.3 0 0 0 488 212.17l1.74-2.63q.26-.4.48-.84c1.66-3.38 10.56-20.76 2.35-38.42"></svg:path>`,
})
export class IonStorefrontIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSubwayIcon],svg[ion-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 16H160a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h192a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64M208 64h96a16 16 0 0 1 0 32h-96a16 16 0 0 1 0-32m-32 288a32 32 0 1 1 32-32a32 32 0 0 1-32 32m160 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32m48-160a16 16 0 0 1-16 16H144a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h224a16 16 0 0 1 16 16Zm-36.69 228.69a16 16 0 0 0-22.62 22.62l4.68 4.69H182.63l4.68-4.69a16 16 0 0 0-22.62-22.62l-48 48a16 16 0 1 0 22.62 22.62L150.63 480h210.74l11.32 11.31a16 16 0 0 0 22.62-22.62Z"></svg:path>`,
})
export class IonSubwayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSunnyIcon],svg[ion-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 118a22 22 0 0 1-22-22V48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22m0 368a22 22 0 0 1-22-22v-48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22m113.14-321.14a22 22 0 0 1-15.56-37.55l33.94-33.94a22 22 0 0 1 31.11 31.11l-33.94 33.94a21.93 21.93 0 0 1-15.55 6.44M108.92 425.08a22 22 0 0 1-15.55-37.56l33.94-33.94a22 22 0 1 1 31.11 31.11l-33.94 33.94a21.94 21.94 0 0 1-15.56 6.45M464 278h-48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44m-368 0H48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44m307.08 147.08a21.94 21.94 0 0 1-15.56-6.45l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.55 37.56M142.86 164.86a21.9 21.9 0 0 1-15.55-6.44l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.56 37.55M256 358a102 102 0 1 1 102-102a102.12 102.12 0 0 1-102 102"></svg:path>`,
})
export class IonSunnyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSwapHorizontalIcon],svg[ion-swap-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m304 48l112 112l-112 112m94.87-112H96m112 304L96 352l112-112m-94 112h302"></svg:path>`,
})
export class IonSwapHorizontalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSwapVerticalIcon],svg[ion-swap-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M464 208L352 96L240 208m112-94.87V416M48 304l112 112l112-112m-112 94V96"></svg:path>`,
})
export class IonSwapVerticalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSyncIcon],svg[ion-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 0 0-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 0 0 140-66.92"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m32 256l44-44l46 44m358 0l-44 44l-46-44"></svg:path>`,
})
export class IonSyncIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSyncCircleIcon],svg[ion-sync-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m83.69 282.65a112.24 112.24 0 0 1-195-61.29a16 16 0 0 1-20.13-24.67l23.6-23.6a16 16 0 0 1 22.37-.25l24.67 23.6a16 16 0 0 1-18 26a80.25 80.25 0 0 0 138.72 38.83a16 16 0 0 1 23.77 21.41Zm47.76-63.34l-23.6 23.6a16 16 0 0 1-22.37.25l-24.67-23.6a16 16 0 0 1 17.68-26.11A80.17 80.17 0 0 0 196 202.64a16 16 0 1 1-23.82-21.37a112.17 112.17 0 0 1 194.88 61.57a16 16 0 0 1 20.39 24.47"></svg:path>`,
})
export class IonSyncCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTabletLandscapeIcon],svg[ion-tablet-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 128v256a64.07 64.07 0 0 1-64 64H64a64.07 64.07 0 0 1-64-64V128a64.07 64.07 0 0 1 64-64h384a64.07 64.07 0 0 1 64 64M32 384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V128a32 32 0 0 0-32-32H64a32 32 0 0 0-32 32Z"></svg:path><svg:path fill="currentColor" d="M0 128a64.07 64.07 0 0 1 64-64h384a64.07 64.07 0 0 1 64 64v256a64.07 64.07 0 0 1-64 64H64a64.07 64.07 0 0 1-64-64zm480 256V128a32 32 0 0 0-32-32H64a32 32 0 0 0-32 32v256a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32m-16 0a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V128a16 16 0 0 1 16-16h384a16 16 0 0 1 16 16z"></svg:path>`,
})
export class IonTabletLandscapeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTabletPortraitIcon],svg[ion-tablet-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 512H128a64.07 64.07 0 0 1-64-64V64a64.07 64.07 0 0 1 64-64h256a64.07 64.07 0 0 1 64 64v384a64.07 64.07 0 0 1-64 64M128 32a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32Z"></svg:path><svg:path fill="currentColor" d="M384 0a64.07 64.07 0 0 1 64 64v384a64.07 64.07 0 0 1-64 64H128a64.07 64.07 0 0 1-64-64V64a64.07 64.07 0 0 1 64-64zM128 480h256a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32H128a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32m0-16a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h256a16 16 0 0 1 16 16v384a16 16 0 0 1-16 16Z"></svg:path>`,
})
export class IonTabletPortraitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTelescopeIcon],svg[ion-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107.56 250a16 16 0 0 0-21.85-5.86L36 272.81a39.7 39.7 0 0 0-18.8 24.91a40.9 40.9 0 0 0 4.55 30.35l4.36 7.54a40 40 0 0 0 54.62 14.62l49.67-28.63a16 16 0 0 0 5.87-21.86Z"></svg:path><svg:path fill="currentColor" d="M382.84 440.8L288.72 254a2 2 0 0 1 .79-2.63l8.3-4.79a16 16 0 0 0 5.86-21.86l-47.53-82.33a16 16 0 0 0-21.86-5.87l-86.38 49.8a39.73 39.73 0 0 0-18.65 24.28a34.8 34.8 0 0 0-1.37 9.76c.06 7.6 9.2 22.7 18.12 38.28c9.59 16.75 19.24 33.88 26.34 38.15c4.52 2.72 12.5 4.9 19.21 4.9h.84l-79.32 171.6a16 16 0 1 0 29.05 13.42l93.68-202.65a7.94 7.94 0 0 1 3.26-3.57l19.21-11.08a2 2 0 0 1 2.78.84l93.21 185a16 16 0 0 0 28.58-14.4Zm107.37-325.06L444.09 36a40.08 40.08 0 0 0-54.63-14.62l-93.34 53.78a39.7 39.7 0 0 0-18.65 24.28a32.8 32.8 0 0 0-1.27 13.25c1.74 12.62 13 30.4 26.41 53.89c13.58 23.73 28.91 50.48 36.93 56.27a40.2 40.2 0 0 0 23.18 7.37a39.77 39.77 0 0 0 19.92-5.34L476 171.07a39.72 39.72 0 0 0 18.79-24.84a41 41 0 0 0-4.58-30.49"></svg:path>`,
})
export class IonTelescopeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTennisballIcon],svg[ion-tennisball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 256a192.6 192.6 0 0 0 32-2.68A224 224 0 0 0 258.68 32A192.6 192.6 0 0 0 256 64c0 105.87 86.13 192 192 192M253.35 480c.94-5.67 1.65-11.4 2.09-17.18c.37-4.88.56-9.86.56-14.79c0-105.87-86.13-192-192-192a192.6 192.6 0 0 0-32 2.68A224 224 0 0 0 253.35 480"></svg:path><svg:path fill="currentColor" d="M289.61 222.39A222.53 222.53 0 0 1 224 64a226 226 0 0 1 2-30A224.1 224.1 0 0 0 34 226a226 226 0 0 1 30-2a222.53 222.53 0 0 1 158.39 65.61A222.53 222.53 0 0 1 288 448c0 5.74-.22 11.53-.65 17.22q-.5 6.42-1.36 12.79A224.12 224.12 0 0 0 478 286a226 226 0 0 1-30 2a222.53 222.53 0 0 1-158.39-65.61"></svg:path>`,
})
export class IonTennisballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTerminalIcon],svg[ion-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 32H80a64.07 64.07 0 0 0-64 64v320a64.07 64.07 0 0 0 64 64h352a64.07 64.07 0 0 0 64-64V96a64.07 64.07 0 0 0-64-64M96 256a16 16 0 0 1-10-28.49L150.39 176L86 124.49a16 16 0 1 1 20-25l80 64a16 16 0 0 1 0 25l-80 64A16 16 0 0 1 96 256m160 0h-64a16 16 0 0 1 0-32h64a16 16 0 0 1 0 32"></svg:path>`,
})
export class IonTerminalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTextIcon],svg[ion-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m292.6 407.78l-120-320a22 22 0 0 0-41.2 0l-120 320a22 22 0 0 0 41.2 15.44l36.16-96.42a2 2 0 0 1 1.87-1.3h122.74a2 2 0 0 1 1.87 1.3l36.16 96.42a22 22 0 0 0 41.2-15.44m-185.84-129l43.37-115.65a2 2 0 0 1 3.74 0l43.37 115.67a2 2 0 0 1-1.87 2.7h-86.74a2 2 0 0 1-1.87-2.7ZM400.77 169.5c-41.72-.3-79.08 23.87-95 61.4a22 22 0 0 0 40.5 17.2c8.88-20.89 29.77-34.44 53.32-34.6c32.32-.22 58.41 26.5 58.41 58.85a1.5 1.5 0 0 1-1.45 1.5c-21.92.61-47.92 2.07-71.12 4.8c-54.75 6.44-87.43 36.29-87.43 79.85c0 23.19 8.76 44 24.67 58.68C337.6 430.93 358 438.5 380 438.5c31 0 57.69-8 77.94-23.22h.06a22 22 0 1 0 44 .19v-143c0-56.18-45-102.56-101.23-102.97M380 394.5c-17.53 0-38-9.43-38-36c0-10.67 3.83-18.14 12.43-24.23c8.37-5.93 21.2-10.16 36.14-11.92c21.12-2.49 44.82-3.86 65.14-4.47a2 2 0 0 1 2 2.1C455 370.1 429.46 394.5 380 394.5"></svg:path>`,
})
export class IonTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThermometerIcon],svg[ion-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 287.18V81c0-35.12-27.89-64.42-63-64.95a64.08 64.08 0 0 0-65 64v207.13a8 8 0 0 1-3.18 6.37A113.48 113.48 0 0 0 144 384a112 112 0 0 0 224 0a113.48 113.48 0 0 0-44.82-90.45a8 8 0 0 1-3.18-6.37M254.07 432a48 48 0 0 1-22-89.54a16 16 0 0 0 8-13.84V112.45c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 112v216.58a16.18 16.18 0 0 0 8.15 13.94A48 48 0 0 1 254.07 432"></svg:path>`,
})
export class IonThermometerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThumbsDownIcon],svg[ion-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m39.94 178l144.16 6.12c4.61.36 23.9 1.22 23.9 25.88c0 23.8-19.16 25.33-24.14 25.88L39.94 242C27.27 241.87 16 227.56 16 210s11.27-31.87 23.94-32m141.45 131.66L74.65 318C62 318 48 301.31 48 284.12v-.33c0-16.33 11.14-29.63 24.88-29.79l108.45 1.72C208 259 208 275.16 208 282.12c0 22.88-21.8 27.14-26.61 27.54M90.15 32l89.37 8.93C204 41.86 208 58.18 208 68.4c0 18.39-13.41 24.6-26.67 24.6l-91 3C75.78 95.78 64 81.51 64 64s11.68-31.66 26.15-32m-34.36 71.5l126.4 6.22c9.39.63 25.81 3 25.81 26.36c0 12-4.35 25.62-25 27.53L55.79 167.5C42.65 167.35 32 154 32 136.08s10.65-32.43 23.79-32.58"></svg:path><svg:path fill="none" d="M378.45 273.93A15.84 15.84 0 0 1 386 272a15.9 15.9 0 0 0-7.51 1.91Zm-40.59 69.29l-.13.22a3 3 0 0 1 .13-.22c20.5-35.51 30.36-55 33.82-62c-3.47 7.06-13.34 26.51-33.82 62"></svg:path><svg:path fill="currentColor" d="m372.66 279.16l-1 2a16.3 16.3 0 0 1 6.77-7.26a16.5 16.5 0 0 0-5.77 5.26"></svg:path><svg:path fill="currentColor" d="M195.94 459.38C205.37 472.67 221 480 240 480a16 16 0 0 0 14.31-8.85c3-6.06 15.25-24 28.19-42.9c18-26.33 40.35-59.08 55.23-84.81l.13-.22c20.48-35.49 30.35-54.94 33.82-62l1-2a16.5 16.5 0 0 1 5.79-5.23A15.9 15.9 0 0 1 386 272h25.32A84.7 84.7 0 0 0 496 187.3v-38.6A84.7 84.7 0 0 0 411.31 64h-48.79a17.46 17.46 0 0 1-9.58-2.89C330 46.13 286.66 32 240 32c-7.45 0-14.19.14-20.27.38a8 8 0 0 0-6.2 12.68l.1.14C222.2 57.59 224 71 224 80a61.2 61.2 0 0 1-5.19 24.77a17.38 17.38 0 0 0 0 14.06a63.8 63.8 0 0 1 0 50.39a17.32 17.32 0 0 0 0 14a62.13 62.13 0 0 1 0 49.58a18.13 18.13 0 0 0 0 14.68A60.4 60.4 0 0 1 224 273c0 8.2-2 21.3-8 31.18a15.66 15.66 0 0 0-1.14 13.65c.38 1 .76 2.06 1.13 3.17a24.8 24.8 0 0 1 .86 11.57c-3 19.35-9.67 36.3-16.74 54.16c-3.08 7.78-6.27 15.82-9.22 24.27c-6.14 17.56-4.3 35.2 5.05 48.38"></svg:path>`,
})
export class IonThumbsDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThumbsUpIcon],svg[ion-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m472.06 334l-144.16-6.13c-4.61-.36-23.9-1.21-23.9-25.87c0-23.81 19.16-25.33 24.14-25.88L472.06 270c12.67.13 23.94 14.43 23.94 32s-11.27 31.87-23.94 32M330.61 202.33L437.35 194C450 194 464 210.68 464 227.88v.33c0 16.32-11.14 29.62-24.88 29.79l-108.45-1.73C304 253 304 236.83 304 229.88c0-22.88 21.8-27.15 26.61-27.55M421.85 480l-89.37-8.93C308 470.14 304 453.82 304 443.59c0-18.38 13.41-24.6 26.67-24.6l91-3c14.54.23 26.32 14.5 26.32 32s-11.67 31.67-26.14 32.01m34.36-71.5l-126.4-6.21c-9.39-.63-25.81-3-25.81-26.37c0-12 4.35-25.61 25-27.53l127.19-3.88c13.16.14 23.81 13.49 23.81 31.4s-10.65 32.43-23.79 32.58Z"></svg:path><svg:path fill="none" d="M133.55 238.06A15.85 15.85 0 0 1 126 240a15.8 15.8 0 0 0 7.51-1.92Zm40.59-69.28l.13-.23zc-20.5 35.51-30.36 54.95-33.82 62c3.47-7.07 13.34-26.51 33.82-62"></svg:path><svg:path fill="currentColor" d="m139.34 232.84l1-2a16.27 16.27 0 0 1-6.77 7.25a16.35 16.35 0 0 0 5.77-5.25"></svg:path><svg:path fill="currentColor" d="M316.06 52.62C306.63 39.32 291 32 272 32a16 16 0 0 0-14.31 8.84c-3 6.07-15.25 24-28.19 42.91c-18 26.33-40.35 59.07-55.23 84.8l-.13.23c-20.48 35.49-30.35 54.93-33.82 62l-1 2a16.35 16.35 0 0 1-5.79 5.22a15.8 15.8 0 0 1-7.53 2h-25.31A84.69 84.69 0 0 0 16 324.69v38.61a84.69 84.69 0 0 0 84.69 84.7h48.79a17.55 17.55 0 0 1 9.58 2.89C182 465.87 225.34 480 272 480c7.45 0 14.19-.14 20.27-.38a8 8 0 0 0 6.2-12.68l-.1-.14C289.8 454.41 288 441 288 432a61.2 61.2 0 0 1 5.19-24.77a17.36 17.36 0 0 0 0-14.05a63.8 63.8 0 0 1 0-50.39a17.32 17.32 0 0 0 0-14a62.15 62.15 0 0 1 0-49.59a18.13 18.13 0 0 0 0-14.68A60.3 60.3 0 0 1 288 239c0-8.2 2-21.3 8-31.19a15.63 15.63 0 0 0 1.14-13.64c-.38-1-.76-2.07-1.13-3.17a24.84 24.84 0 0 1-.86-11.58c3-19.34 9.67-36.29 16.74-54.16c3.08-7.78 6.27-15.82 9.22-24.26c6.14-17.57 4.3-35.2-5.05-48.38"></svg:path>`,
})
export class IonThumbsUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThumbsdownIcon],svg[ion-thumbsdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M87.8 252.7C74 257.2 64 270.2 64 285.5c0 19 15.4 34.5 34.5 34.5h102.6c-2 25-10 53.6-1.1 87.3 7.5 28.4 39.4 49.7 52.4 36.8 5-4.9 3.5-15.2 3.5-33.8 0-42.8 17.8-86.1 39.8-108.7 9.4-9.7 25.2-13 40.2-13.6v16h112V64H336v32c-20.6.5-52.6-5.2-75.8-6.6-52-3.1-102 2.4-126.3 8.1-24.3 5.7-35 13-35 30.6 0 6.4 1.9 12.3 5.1 17.3-11.8 4.7-20.1 16.2-20.1 29.7 0 7.2 2.4 13.8 6.4 19.2-11.9 4.6-20.4 16.2-20.4 29.8.1 12.5 7.4 23.4 17.9 28.6zM400 96.3c8.8 0 16 7.1 16 16 0 8.8-7.2 16-16 16s-16-7.1-16-16c0-8.8 7.2-16 16-16z" fill="currentColor"></svg:path>`,
})
export class IonThumbsdownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThumbsupIcon],svg[ion-thumbsup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M424.2 259.3c13.8-4.5 23.8-17.5 23.8-32.8 0-19-15.4-34.5-34.5-34.5H310.9c2-25 10-53.6 1.1-87.3-7.5-28.4-39.4-49.7-52.4-36.8-5 4.9-3.5 15.2-3.5 33.8 0 42.8-17.8 86.1-39.8 108.7-9.4 9.7-25.2 13-40.2 13.6v-16H64v240h112v-32c20.6-.5 52.6 5.2 75.8 6.6 52 3.1 102-2.4 126.3-8.1 24.3-5.7 35-13 35-30.6 0-6.4-1.9-12.3-5.1-17.3 11.8-4.7 20.1-16.2 20.1-29.7 0-7.2-2.4-13.8-6.4-19.2 11.9-4.6 20.4-16.2 20.4-29.8-.1-12.5-7.4-23.4-17.9-28.6zM112 415.7c-8.8 0-16-7.1-16-16 0-8.8 7.2-16 16-16s16 7.1 16 16c0 8.8-7.2 16-16 16z" fill="currentColor"></svg:path>`,
})
export class IonThumbsupIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThunderstormIcon],svg[ion-thunderstorm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 416a16 16 0 0 1-14.3-23.16l24-48a16 16 0 0 1 28.62 14.32l-24 48A16 16 0 0 1 96 416m24 64a16 16 0 0 1-14.3-23.16l16-32a16 16 0 0 1 28.62 14.32l-16 32A16 16 0 0 1 120 480m256-64a16 16 0 0 1-14.3-23.16l24-48a16 16 0 0 1 28.62 14.32l-24 48A16 16 0 0 1 376 416m24 64a16 16 0 0 1-14.3-23.16l16-32a16 16 0 0 1 28.62 14.32l-16 32A16 16 0 0 1 400 480"></svg:path><svg:path fill="currentColor" d="M405.84 136.9a151.25 151.25 0 0 0-47.6-81.9a153 153 0 0 0-241.81 51.86C60.5 110.16 16 156.65 16 213.33C16 272.15 63.91 320 122.8 320h66.31l-12.89 77.37A16 16 0 0 0 192 416h32v64a16 16 0 0 0 29 9.3l80-112a16 16 0 0 0-13-25.3h-27.51l8-32h103.84a91.56 91.56 0 0 0 1.51-183.1"></svg:path>`,
})
export class IonThunderstormIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTicketIcon],svg[ion-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m490.18 181.4l-44.13-44.13a20 20 0 0 0-27-1a30.81 30.81 0 0 1-41.68-1.6a30.81 30.81 0 0 1-1.6-41.67a20 20 0 0 0-1-27L330.6 21.82a19.91 19.91 0 0 0-28.13 0l-70.35 70.34a39.9 39.9 0 0 0-9.57 15.5a7.71 7.71 0 0 1-4.83 4.83a39.8 39.8 0 0 0-15.5 9.58l-180.4 180.4a19.91 19.91 0 0 0 0 28.13L66 374.73a20 20 0 0 0 27 1a30.69 30.69 0 0 1 43.28 43.28a20 20 0 0 0 1 27l44.13 44.13a19.91 19.91 0 0 0 28.13 0l180.4-180.4a39.8 39.8 0 0 0 9.58-15.49a7.69 7.69 0 0 1 4.84-4.84a39.84 39.84 0 0 0 15.49-9.57l70.34-70.35a19.91 19.91 0 0 0-.01-28.09m-228.37-29.65a16 16 0 0 1-22.63 0l-11.51-11.51a16 16 0 0 1 22.63-22.62l11.51 11.5a16 16 0 0 1 0 22.63m44 44a16 16 0 0 1-22.62 0l-11-11a16 16 0 1 1 22.63-22.63l11 11a16 16 0 0 1 .01 22.66Zm44 44a16 16 0 0 1-22.63 0l-11-11a16 16 0 0 1 22.63-22.62l11 11a16 16 0 0 1 .05 22.67Zm44.43 44.54a16 16 0 0 1-22.63 0l-11.44-11.5a16 16 0 1 1 22.68-22.57l11.45 11.49a16 16 0 0 1-.01 22.63Z"></svg:path>`,
})
export class IonTicketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTimeIcon],svg[ion-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m96 240h-96a16 16 0 0 1-16-16V128a16 16 0 0 1 32 0v128h80a16 16 0 0 1 0 32"></svg:path>`,
})
export class IonTimeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTimerIcon],svg[ion-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.12 48 48 141.12 48 256s93.12 208 208 208s208-93.12 208-208S370.88 48 256 48m-82.33 114.34l105 71a32.5 32.5 0 0 1-37.25 53.26a33.2 33.2 0 0 1-8-8l-71-105a8.13 8.13 0 0 1 11.32-11.32ZM256 432c-97 0-176-78.95-176-176a174.55 174.55 0 0 1 53.87-126.72a14.15 14.15 0 1 1 19.64 20.37A146.53 146.53 0 0 0 108.3 256c0 81.44 66.26 147.7 147.7 147.7S403.7 337.44 403.7 256c0-76.67-58.72-139.88-133.55-147v55a14.15 14.15 0 1 1-28.3 0V94.15A14.15 14.15 0 0 1 256 80c97.05 0 176 79 176 176s-78.95 176-176 176"></svg:path>`,
})
export class IonTimerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTodayIcon],svg[ion-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4v-12a64 64 0 0 0-64-64m61 112H35a3 3 0 0 0-3 3v237a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3M224 307.43A28.57 28.57 0 0 1 195.43 336h-70.86A28.57 28.57 0 0 1 96 307.43v-70.86A28.57 28.57 0 0 1 124.57 208h70.86A28.57 28.57 0 0 1 224 236.57Z"></svg:path>`,
})
export class IonTodayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionToggleIcon],svg[ion-toggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 112H144C64.6 112 0 176.6 0 256s64.6 144 144 144h224c79.4 0 144-64.6 144-144s-64.6-144-144-144m0 256a112 112 0 1 1 112-112a112.12 112.12 0 0 1-112 112"></svg:path>`,
})
export class IonToggleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionToggleFilledIcon],svg[ion-toggle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 208c-26.467 0-48 21.533-48 48s21.533 48 48 48 48-21.533 48-48-21.533-48-48-48z" fill="currentColor"></svg:path><svg:path d="M352 128H160c-70.692 0-128 57.308-128 128s57.308 128 128 128h192c70.692 0 128-57.308 128-128s-57.308-128-128-128zm0 208c-44.183 0-80-35.817-80-80s35.817-80 80-80 80 35.817 80 80-35.817 80-80 80z" fill="currentColor"></svg:path>`,
})
export class IonToggleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrailSignIcon],svg[ion-trail-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M491.31 324.69L432 265.37a31.8 31.8 0 0 0-22.63-9.37H272v-32h144a32 32 0 0 0 32-32V96a32 32 0 0 0-32-32H272V48a16 16 0 0 0-32 0v16H102.63A31.8 31.8 0 0 0 80 73.37l-59.31 59.32a16 16 0 0 0 0 22.62L80 214.63a31.8 31.8 0 0 0 22.63 9.37H240v32H96a32 32 0 0 0-32 32v96a32 32 0 0 0 32 32h144v48a16 16 0 0 0 32 0v-48h137.37a31.8 31.8 0 0 0 22.63-9.37l59.31-59.32a16 16 0 0 0 0-22.62"></svg:path>`,
})
export class IonTrailSignIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrainIcon],svg[ion-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="256" cy="304" fill="currentColor" rx="32.05" ry="31.94" transform="rotate(-45 256.001 304)"></svg:ellipse><svg:path fill="currentColor" d="M352 32h-15a10 10 0 0 1-7.87-3.78A31.94 31.94 0 0 0 304 16h-96a32 32 0 0 0-26.11 13.52A6 6 0 0 1 177 32h-17c-36.81 0-64 28.84-64 64v255c0 23.27 25.6 42.06 83 60.94a753 753 0 0 0 73.77 19.73a16 16 0 0 0 6.46 0A753 753 0 0 0 333 411.94c57.4-18.88 83-37.67 83-60.94V96a64 64 0 0 0-64-64m-168 96h144a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H184a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8m76.18 239.87a64 64 0 1 1 59.69-59.69a64.07 64.07 0 0 1-59.69 59.69"></svg:path><svg:path fill="currentColor" d="M395.31 468.69L347.63 421c-6.09-6.1-16-6.66-22.38-.86a16 16 0 0 0-.56 23.16l4.68 4.69H182.63l4.36-4.37c6.1-6.09 6.66-16 .86-22.38a16 16 0 0 0-23.16-.56l-48 48a16 16 0 1 0 22.62 22.62l11.32-11.3h210.74l11.32 11.31a16 16 0 0 0 22.62-22.62"></svg:path>`,
})
export class IonTrainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTransgenderIcon],svg[ion-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M458 32h-68a22 22 0 0 0 0 44h14.89l-59.57 59.57a149.69 149.69 0 0 0-178.64 0l-7.57-7.57l26.45-26.44a22 22 0 0 0-31.12-31.12L128 96.89L107.11 76H122a22 22 0 0 0 0-44H54a22 22 0 0 0-22 22v68a22 22 0 0 0 44 0v-14.89L96.89 128l-26.42 26.42a22 22 0 1 0 31.11 31.11L128 159.11l7.57 7.57A149.2 149.2 0 0 0 106 256c0 82.71 67.29 150 150 150a149.2 149.2 0 0 0 89.46-29.67L369 399.9l-26.54 26.54a22 22 0 0 0 31.12 31.12l26.49-26.5l42.37 42.48a22 22 0 0 0 31.16-31.08L431.17 400l26.39-26.39a22 22 0 0 0-31.12-31.12l-26.35 26.35l-23.55-23.62a149.68 149.68 0 0 0-.11-178.49L436 107.11V122a22 22 0 0 0 44 0V54a22 22 0 0 0-22-22M150 256a106 106 0 1 1 106 106a106.12 106.12 0 0 1-106-106"></svg:path>`,
})
export class IonTransgenderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrashIcon],svg[ion-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8"></svg:path><svg:path fill="currentColor" d="M432 96h-96V72a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v24H80a16 16 0 0 0 0 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 0 0 0-32M192.57 416H192a16 16 0 0 1-16-15.43l-8-224a16 16 0 1 1 32-1.14l8 224A16 16 0 0 1 192.57 416M272 400a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0Zm32-304h-96V72a7.91 7.91 0 0 1 8-8h80a7.91 7.91 0 0 1 8 8Zm32 304.57A16 16 0 0 1 320 416h-.58A16 16 0 0 1 304 399.43l8-224a16 16 0 1 1 32 1.14Z"></svg:path>`,
})
export class IonTrashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrashAIcon],svg[ion-trash-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M341 128V99c0-19.1-14.5-35-34.5-35H205.4C185.5 64 171 79.9 171 99v29H80v32h9.2s5.4.6 8.2 3.4c2.8 2.8 3.9 9 3.9 9l19 241.7c1.5 29.4 1.5 33.9 36 33.9h199.4c34.5 0 34.5-4.4 36-33.8l19-241.6s1.1-6.3 3.9-9.1 8.2-3.4 8.2-3.4h9.2v-32h-91v-.1zM192 99c0-9.6 7.8-15 17.7-15h91.7c9.9 0 18.6 5.5 18.6 15v29H192V99zm-8.5 285l-10.3-192h20.3L204 384h-20.5zm83.6 0h-22V192h22v192zm61.6 0h-20.4l10.5-192h20.3l-10.4 192z" fill="currentColor"></svg:path>`,
})
export class IonTrashAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrashBIcon],svg[ion-trash-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M413.7 133.4c-2.4-9-4-14-4-14-2.6-9.3-9.2-9.3-19-10.9l-53.1-6.7c-6.6-1.1-6.6-1.1-9.2-6.8-8.7-19.6-11.4-31-20.9-31h-103c-9.5 0-12.1 11.4-20.8 31.1-2.6 5.6-2.6 5.6-9.2 6.8l-53.2 6.7c-9.7 1.6-16.7 2.5-19.3 11.8 0 0-1.2 4.1-3.7 13-3.2 11.9-4.5 10.6 6.5 10.6h302.4c11 .1 9.8 1.3 6.5-10.6z" fill="currentColor"></svg:path><svg:path d="M379.4 176H132.6c-16.6 0-17.4 2.2-16.4 14.7l18.7 242.6c1.6 12.3 2.8 14.8 17.5 14.8h207.2c14.7 0 15.9-2.5 17.5-14.8l18.7-242.6c1-12.6.2-14.7-16.4-14.7z" fill="currentColor"></svg:path>`,
})
export class IonTrashBIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrashBinIcon],svg[ion-trash-bin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="448" height="80" x="32" y="48" fill="currentColor" rx="32" ry="32"></svg:rect><svg:path fill="currentColor" d="M74.45 160a8 8 0 0 0-8 8.83l26.31 252.56a1.5 1.5 0 0 0 0 .22A48 48 0 0 0 140.45 464h231.09a48 48 0 0 0 47.67-42.39v-.21l26.27-252.57a8 8 0 0 0-8-8.83Zm248.86 180.69a16 16 0 1 1-22.63 22.62L256 318.63l-44.69 44.68a16 16 0 0 1-22.63-22.62L233.37 296l-44.69-44.69a16 16 0 0 1 22.63-22.62L256 273.37l44.68-44.68a16 16 0 0 1 22.63 22.62L278.62 296Z"></svg:path>`,
})
export class IonTrashBinIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrendingDownIcon],svg[ion-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 368h112V256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m48 144l121.37 121.37a32 32 0 0 0 45.26 0l50.74-50.74a32 32 0 0 1 45.26 0L448 352"></svg:path>`,
})
export class IonTrendingDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrendingUpIcon],svg[ion-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 144h112v112"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m48 368l121.37-121.37a32 32 0 0 1 45.26 0l50.74 50.74a32 32 0 0 0 45.26 0L448 160"></svg:path>`,
})
export class IonTrendingUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTriangleIcon],svg[ion-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 464H48a16 16 0 0 1-14.07-23.62l208-384a16 16 0 0 1 28.14 0l208 384A16 16 0 0 1 464 464"></svg:path>`,
})
export class IonTriangleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrophyIcon],svg[ion-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 80h-60.1a4 4 0 0 1-4-4V63.92a32 32 0 0 0-32-31.92l-223.79.26a32 32 0 0 0-31.94 31.93V76a4 4 0 0 1-4 4H48a16 16 0 0 0-16 16v16c0 54.53 30 112.45 76.52 125.35a7.82 7.82 0 0 1 5.55 5.9c5.77 26.89 23.52 52.5 51.41 73.61c20.91 15.83 45.85 27.5 68.27 32.48a8 8 0 0 1 6.25 7.8V444a4 4 0 0 1-4 4h-59.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 176 480h159.55c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 336 448h-60a4 4 0 0 1-4-4v-86.86a8 8 0 0 1 6.25-7.8c22.42-5 47.36-16.65 68.27-32.48c27.89-21.11 45.64-46.72 51.41-73.61a7.82 7.82 0 0 1 5.55-5.9C450 224.45 480 166.53 480 112V96a16 16 0 0 0-16-16M112 198.22a4 4 0 0 1-6 3.45c-10.26-6.11-17.75-15.37-22.14-21.89c-11.91-17.69-19-40.67-19.79-63.63a4 4 0 0 1 4-4.15h40a4 4 0 0 1 4 4c-.02 27.45-.07 58.87-.07 82.22m316.13-18.44c-4.39 6.52-11.87 15.78-22.13 21.89a4 4 0 0 1-6-3.46c0-26.51 0-56.63-.05-82.21a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4.15c-.79 22.96-7.9 45.94-19.81 63.63Z"></svg:path>`,
})
export class IonTrophyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTshirtIcon],svg[ion-tshirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 96L320 48c-13.988 27.227-30.771 40.223-63.769 40.223C223.723 87.676 205.722 75 192 48L32 96l32 88 64-8-16 288h288l-16-288 64 8 32-88z" fill="currentColor"></svg:path>`,
})
export class IonTshirtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTvIcon],svg[ion-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M447.86 384H64.14A48.2 48.2 0 0 1 16 335.86V128.14A48.2 48.2 0 0 1 64.14 80h383.72A48.2 48.2 0 0 1 496 128.14v207.72A48.2 48.2 0 0 1 447.86 384"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M128 416h256"></svg:path>`,
})
export class IonTvIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionUmbrellaIcon],svg[ion-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 113.61a222.26 222.26 0 0 0-136.33-64.54a8.09 8.09 0 0 1-6.88-5.62a15.79 15.79 0 0 0-30.36 0a8.09 8.09 0 0 1-6.88 5.62A224 224 0 0 0 32 271.52a16.41 16.41 0 0 0 7.24 13.87a16 16 0 0 0 20.07-2.08a51.89 51.89 0 0 1 73.31-.06a15.94 15.94 0 0 0 22.6.15a62.59 62.59 0 0 1 81.49-5.87a8.24 8.24 0 0 1 3.29 6.59v147.42c0 8.6-6.6 16-15.19 16.44A16 16 0 0 1 208 432a16 16 0 0 0-16.29-16c-9 .16-15.9 8.11-15.7 17.1a48.06 48.06 0 0 0 47.37 46.9c26.88.34 48.62-21.93 48.62-48.81V284.12a8.24 8.24 0 0 1 3.29-6.59a62.59 62.59 0 0 1 81.4 5.78a16 16 0 0 0 22.62 0a51.91 51.91 0 0 1 73.38 0a16 16 0 0 0 19.54 2.41a16.4 16.4 0 0 0 7.77-14.21a222.54 222.54 0 0 0-65.61-157.9"></svg:path>`,
})
export class IonUmbrellaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionUniversityIcon],svg[ion-university-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 64L32 176.295l32 21.072V400l32 16V217.849L255.852 320l132.144-85.451L480 174.727z" fill="currentColor"></svg:path><svg:path d="M390.13 256L256 343.768 120.531 256 112 337.529C128 349.984 224 416 256.002 448 288 416 384 350.031 400 337.561L390.13 256z" fill="currentColor"></svg:path>`,
})
export class IonUniversityIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionUnlinkIcon],svg[ion-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M200.66 352H144a96 96 0 0 1 0-192h55.41m113.18 0H368a96 96 0 0 1 0 192h-56.66"></svg:path>`,
})
export class IonUnlinkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionUnlockedIcon],svg[ion-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M86.4 480h339.2c12.3 0 22.4-9.9 22.4-22.1V246c0-12.2-10-22-22.4-22H161v-30.9c0-27.3 9.9-61.1 28.1-80.3v-.3C206.7 93.9 231 83 255.9 83h.2c24.9 0 49.2 10.9 66.8 29.5V112.8c11.3 11.9 19.4 29.3 24 47.3h53.4c-5.9-31.3-19.7-61.8-39.2-82.4-26.2-27.8-63.7-45.7-105-45.7h-.1-.1c-41.3 0-79 17.9-105.3 45.6C124.2 105.4 108 151.5 108 193v31H86.4C74 224 64 233.9 64 246v211.9c0 12.2 10 22.1 22.4 22.1z" fill="currentColor"></svg:path>`,
})
export class IonUnlockedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionUploadIcon],svg[ion-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M398.1 233.2c0-1.2.2-2.4.2-3.6 0-65-51.8-117.6-115.7-117.6-46.1 0-85.7 27.4-104.3 67-8.1-4.1-17.2-6.5-26.8-6.5-29.5 0-54.1 21.9-58.8 50.5C57.3 235.2 32 269.1 32 309c0 50.2 40.1 91 89.5 91H224v-80h-48.2l80.2-83.7 80.2 83.6H288v80h110.3c45.2 0 81.7-37.5 81.7-83.4 0-45.9-36.7-83.2-81.9-83.3z" fill="currentColor"></svg:path>`,
})
export class IonUploadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionUsbIcon],svg[ion-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M144 220s.1.1 0 0z" fill="currentColor"></svg:path><svg:path d="M384 128.3c0-17.8-14.4-32.2-32.1-32.2-17.7 0-32.1 14.4-32.1 32.1 0 12.1 6.7 22.7 16.6 28.2 1.3 1.5 2.2 4.5 2.2 6v.4c-.8 17.6-3.8 31.9-7.1 41.7-4.3 12.6-38.2 39.6-51.5 42.2-5.8 1.2-7.9-.6-7.9-10.2V96.1c0-1.5.2-3.5 1.9-5 8.6-5.8 14.3-15.6 14.3-26.8 0-17.8-14.4-32.2-32.1-32.2-17.7 0-32.1 14.4-32.1 32.2 0 11.3 5.8 21.3 14.6 27l.1.1c.1.1.2.1.4.2s.4.2.6.4c2.3 1.5 3.3 3 3.3 4.2v196.3c0 7-1.1 12.3-8.4 11.8s-41.7-23.5-51.4-44.1c-4.5-9.5-6.8-18.8-6.8-28v-.5c0-3.1 0-11.3 3.2-13.6 7.8-5.9 12.8-15.2 12.8-25.7 0-17.8-14.4-32.2-32.1-32.2s-32.4 14.2-32.4 32c0 11.9 6.5 22.3 16 27.8 2.4 1.5 3 2.9 3.8 10.6s3 24.6 9.1 39.9c7.3 18.6 20.9 32.6 39.7 45.2 13.6 9.3 25.3 16.6 32.1 26.4s10.2 13.5 10.2 27c0 0 0-.9 0 0 0 12.8-4 14-9.3 17.8-14.1 8.7-23.5 24.2-23.5 42v1.1c0 27.5 22.3 49.8 49.8 49.8 27.5 0 49.8-22.3 49.8-49.8 0-13.3-5.2-25.4-13.7-34.3-2.9-3.2-6-6-9.6-8.3-7.5-5.2-10.3-11.5-10.3-18.1v-24.1c0-25.1 4.1-41.1 11.1-53.3 7.3-12.7 18.3-22.6 35.4-34.2 18.8-12.6 32.2-26.6 39.6-45.2 5.7-14.4 7.6-31 8.6-50.9.1-1.8 1.4-5.8 3.3-6.8 8.3-5.8 13.9-15.5 13.9-26.5zm-223.9 80c-8.9 0-16.1-7.3-16.1-16.2s7.2-16.2 16.1-16.2 16.1 7.3 16.1 16.2-7.2 16.2-16.1 16.2zm95.9-128c-8.9 0-16.1-7.3-16.1-16.2S247.1 48 256 48s16.1 7.3 16.1 16.2-7.2 16.1-16.1 16.1zm95.9 64c-8.9 0-16.1-7.3-16.1-16.2S343 112 351.9 112s16.1 7.3 16.1 16.2-7.2 16.1-16.1 16.1z" fill="currentColor"></svg:path>`,
})
export class IonUsbIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVideocamIcon],svg[ion-videocam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 384.39a32 32 0 0 1-13-2.77a16 16 0 0 1-2.71-1.54l-82.71-58.22A32 32 0 0 1 352 295.7v-79.4a32 32 0 0 1 13.58-26.16l82.71-58.22a16 16 0 0 1 2.71-1.54a32 32 0 0 1 45 29.24v192.76a32 32 0 0 1-32 32ZM268 400H84a68.07 68.07 0 0 1-68-68V180a68.07 68.07 0 0 1 68-68h184.48A67.6 67.6 0 0 1 336 179.52V332a68.07 68.07 0 0 1-68 68"></svg:path>`,
})
export class IonVideocamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVideocamOffIcon],svg[ion-videocam-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 179.52A67.52 67.52 0 0 0 268.48 112h-79.2a4 4 0 0 0-2.82 6.83l142.71 142.71a4 4 0 0 0 6.83-2.82ZM16 180v152a68 68 0 0 0 68 68h184a67.66 67.66 0 0 0 42.84-15.24a4 4 0 0 0 .33-6L54.41 122a4 4 0 0 0-4.87-.62A68 68 0 0 0 16 180m448 204.39a32 32 0 0 1-13-2.77a16 16 0 0 1-2.71-1.54l-82.71-58.22A32 32 0 0 1 352 295.7v-79.4a32 32 0 0 1 13.58-26.16l82.71-58.22a16 16 0 0 1 2.71-1.54a32 32 0 0 1 45 29.24v192.76a32 32 0 0 1-32 32Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M416 416L80 80"></svg:path>`,
})
export class IonVideocamOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVideocameraIcon],svg[ion-videocamera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M367 185.3c0-5.1-4-9.3-9.2-9.3H306v-32.2c0-35.2-29.3-63.8-64.9-63.8H63v48h176.1c4.5 0 9.9 5.6 9.9 10.1V176H41.4c-5.2 0-9.4 4.2-9.4 9.3V422.7c0 5.1 4.2 9.3 9.4 9.3h316.4c5.2 0 9.2-4.2 9.2-9.3v-64.5l113 34.7V216.5l-113 34.7v-65.9zM258.2 341H140.1c-19.8 0-35.9-16-35.9-35.8s16.1-35.8 35.9-35.8c19.8 0 35.9 16.2 35.9 36 0 10-4.2 18.6-10.8 25.6h67.9c-6.6-7-10.8-15.6-10.8-25.6 0-19.8 16.1-35.9 35.9-35.9 19.8 0 35.9 15.9 35.9 35.7S278 341 258.2 341z" fill="currentColor"></svg:path>`,
})
export class IonVideocameraIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeHighIcon],svg[ion-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 416a23.88 23.88 0 0 1-14.2-4.68a8 8 0 0 1-.66-.51L125.76 336H56a24 24 0 0 1-24-24V200a24 24 0 0 1 24-24h69.75l91.37-74.81a8 8 0 0 1 .66-.51A24 24 0 0 1 256 120v272a24 24 0 0 1-24 24m88-80a16 16 0 0 1-14.29-23.19c9.49-18.87 14.3-38 14.3-56.81c0-19.38-4.66-37.94-14.25-56.73a16 16 0 0 1 28.5-14.54C346.19 208.12 352 231.44 352 256c0 23.86-6 47.81-17.7 71.19A16 16 0 0 1 320 336"></svg:path><svg:path fill="currentColor" d="M368 384a16 16 0 0 1-13.86-24C373.05 327.09 384 299.51 384 256c0-44.17-10.93-71.56-29.82-103.94a16 16 0 0 1 27.64-16.12C402.92 172.11 416 204.81 416 256c0 50.43-13.06 83.29-34.13 120a16 16 0 0 1-13.87 8"></svg:path><svg:path fill="currentColor" d="M416 432a16 16 0 0 1-13.39-24.74C429.85 365.47 448 323.76 448 256c0-66.5-18.18-108.62-45.49-151.39a16 16 0 1 1 27-17.22C459.81 134.89 480 181.74 480 256c0 64.75-14.66 113.63-50.6 168.74A16 16 0 0 1 416 432"></svg:path>`,
})
export class IonVolumeHighIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeLowIcon],svg[ion-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296 416.19a23.92 23.92 0 0 1-14.21-4.69l-.66-.51l-91.46-75H120a24 24 0 0 1-24-24V200a24 24 0 0 1 24-24h69.65l91.46-75l.66-.51A24 24 0 0 1 320 119.83v272.34a24 24 0 0 1-24 24ZM384 336a16 16 0 0 1-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82c0-19.36-4.66-37.92-14.25-56.73a16 16 0 0 1 28.5-14.54C410.2 208.16 416 231.47 416 256c0 23.83-6 47.78-17.7 71.18A16 16 0 0 1 384 336"></svg:path>`,
})
export class IonVolumeLowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeMediumIcon],svg[ion-volume-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M264 416.19a23.92 23.92 0 0 1-14.21-4.69l-.66-.51l-91.46-75H88a24 24 0 0 1-24-24V200a24 24 0 0 1 24-24h69.65l91.46-75l.66-.51A24 24 0 0 1 288 119.83v272.34a24 24 0 0 1-24 24ZM352 336a16 16 0 0 1-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82c0-19.36-4.66-37.92-14.25-56.73a16 16 0 0 1 28.5-14.54C378.2 208.16 384 231.47 384 256c0 23.83-6 47.78-17.7 71.18A16 16 0 0 1 352 336"></svg:path><svg:path fill="currentColor" d="M400 384a16 16 0 0 1-13.87-24C405 327.05 416 299.45 416 256c0-44.12-10.94-71.52-29.83-103.95A16 16 0 0 1 413.83 136C434.92 172.16 448 204.88 448 256c0 50.36-13.06 83.24-34.12 120a16 16 0 0 1-13.88 8"></svg:path>`,
})
export class IonVolumeMediumIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeMuteIcon],svg[ion-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M416 432L64 80"></svg:path><svg:path fill="currentColor" d="M243.33 98.86a23.89 23.89 0 0 0-25.55 1.82l-.66.51l-28.52 23.35a8 8 0 0 0-.59 11.85l54.33 54.33a8 8 0 0 0 13.66-5.66v-64.49a24.51 24.51 0 0 0-12.67-21.71m8 236.43L96.69 180.69A16 16 0 0 0 85.38 176H56a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h69.76l92 75.31a23.9 23.9 0 0 0 25.87 1.69A24.51 24.51 0 0 0 256 391.45v-44.86a16 16 0 0 0-4.67-11.3M352 256c0-24.56-5.81-47.87-17.75-71.27a16 16 0 1 0-28.5 14.55C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 0 0 2.32 6.25l14.36 14.36a8 8 0 0 0 13.55-4.31A146 146 0 0 0 352 256m64 0c0-51.18-13.08-83.89-34.18-120.06a16 16 0 0 0-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 0 0 1.9 8.26L389 337.4a8 8 0 0 0 13.13-2.79C411 311.76 416 287.26 416 256"></svg:path><svg:path fill="currentColor" d="M480 256c0-74.25-20.19-121.11-50.51-168.61a16 16 0 1 0-27 17.22C429.82 147.38 448 189.5 448 256c0 46.19-8.43 80.27-22.43 110.53a8 8 0 0 0 1.59 9l11.92 11.92a8 8 0 0 0 12.92-2.16C471.6 344.9 480 305 480 256"></svg:path>`,
})
export class IonVolumeMuteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeOffIcon],svg[ion-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M344 416a23.92 23.92 0 0 1-14.21-4.69c-.23-.16-.44-.33-.66-.51l-91.46-74.9H168a24 24 0 0 1-24-24V200.07a24 24 0 0 1 24-24h69.65l91.46-74.9c.22-.18.43-.35.66-.51A24 24 0 0 1 368 120v272a24 24 0 0 1-24 24"></svg:path>`,
})
export class IonVolumeOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWalkIcon],svg[ion-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m312.55 479.9l-56.42-114l-44.62-57a72.37 72.37 0 0 1-10.06-36.9V143.64H217a40 40 0 0 1 40 40v182.21"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M127.38 291.78v-74.07s37-74.07 74.07-74.07"></svg:path><svg:path fill="currentColor" d="M368.09 291.78a18.5 18.5 0 0 1-10.26-3.11L297.7 250a21.18 21.18 0 0 1-9.7-17.79v-23.7a5.65 5.65 0 0 1 8.69-4.77l81.65 54.11a18.52 18.52 0 0 1-10.29 33.93ZM171.91 493.47a18.5 18.5 0 0 1-14.83-7.41c-6.14-8.18-4-17.18 3.7-25.92l59.95-74.66a7.41 7.41 0 0 1 10.76 2.06c1.56 2.54 3.38 5.65 5.19 9.09c5.24 9.95 6 16.11-1.68 25.7c-8 10-52 67.44-52 67.44c-2.62 2.98-7.23 3.7-11.09 3.7"></svg:path><svg:circle cx="257" cy="69.56" r="37.04" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></svg:circle>`,
})
export class IonWalkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWalletIcon],svg[ion-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M95.5 104h320a88 88 0 0 1 11.18.71a66 66 0 0 0-77.51-55.56L86 94.08h-.3a66 66 0 0 0-41.07 26.13A87.57 87.57 0 0 1 95.5 104m320 24h-320a64.07 64.07 0 0 0-64 64v192a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V192a64.07 64.07 0 0 0-64-64M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path><svg:path fill="currentColor" d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16s-18.5 24.5 0 24.5s0 23.5 0 23.5L85.5 236Z"></svg:path>`,
})
export class IonWalletIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWandIcon],svg[ion-wand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M272 191.997l48 48-48 47.999-48-48z" fill="currentColor"></svg:path><svg:path d="M208.007 256l48.001 48L80.01 480l-48-48.001z" fill="currentColor"></svg:path><svg:path d="M256 32h32v64h-32z" fill="currentColor"></svg:path><svg:path d="M385.131 149.497l-22.627-22.627 45.254-45.254 22.627 22.628z" fill="currentColor"></svg:path><svg:path d="M113.606 104.234l22.627-22.627 45.255 45.254-22.628 22.627z" fill="currentColor"></svg:path><svg:path d="M362.505 353.126l22.627-22.627 45.255 45.254-22.628 22.627z" fill="currentColor"></svg:path><svg:path d="M416 224h64v32h-64z" fill="currentColor"></svg:path>`,
})
export class IonWandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWarningIcon],svg[ion-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0 0 80 446.25h340.89a32 32 0 0 0 28.18-47.17m-198.6-1.83a20 20 0 1 1 20-20a20 20 0 0 1-20 20m21.72-201.15l-5.74 122a16 16 0 0 1-32 0l-5.74-121.95a21.73 21.73 0 0 1 21.5-22.69h.21a21.74 21.74 0 0 1 21.73 22.7Z"></svg:path>`,
})
export class IonWarningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWatchIcon],svg[ion-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="240" height="240" x="136" y="136" fill="currentColor" rx="56" ry="56"></svg:rect><svg:path fill="currentColor" d="M336 96V32a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v64a80.09 80.09 0 0 0-80 80v160a80.09 80.09 0 0 0 80 80v64a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-64a80.09 80.09 0 0 0 80-80V176a80.09 80.09 0 0 0-80-80m56 224a72.08 72.08 0 0 1-72 72H192a72.08 72.08 0 0 1-72-72V192a72.08 72.08 0 0 1 72-72h128a72.08 72.08 0 0 1 72 72Z"></svg:path>`,
})
export class IonWatchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWaterIcon],svg[ion-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M265.12 60.12a12 12 0 0 0-18.23 0C215.23 97.15 112 225.17 112 320c0 88.37 55.64 144 144 144s144-55.63 144-144c0-94.83-103.23-222.85-134.88-259.88M272 412a12 12 0 0 1-11.34-16a11.89 11.89 0 0 1 11.41-8A60.06 60.06 0 0 0 332 328.07a11.89 11.89 0 0 1 8-11.41A12 12 0 0 1 356 328a84.09 84.09 0 0 1-84 84"></svg:path>`,
})
export class IonWaterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWaterdropIcon],svg[ion-waterdrop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M271 38.6c-.3-.4-.7-.7-.9-1l-.1-.1c-3.6-3.4-8.5-5.5-13.9-5.5-5.5 0-10.4 2.1-13.9 5.5l-.1.1c-.3.3-.6.6-.9 1-6.1 6.3-13.8 14.4-22.4 24.1-17.4 19.7-38.6 46-58.5 76.8-33.4 51.8-62.9 116.1-64.1 183.1 0 1.3-.1 2.7-.1 4 0 19.7 3.9 38.5 10.9 55.8 4.1 10 9.2 19.4 15.2 28.2C150.7 452.4 200 480 256 480c88.4 0 160-68.7 160-153.4 0-127.9-105.2-247.4-145-288zM256 424c-15.8 0-30.7-3.7-43.9-10.1 65.9-14.4 118.4-64.7 135.8-129.5 5.2 12.1 8.2 25.5 8.2 39.6-.1 55.2-44.9 100-100.1 100z" fill="currentColor"></svg:path>`,
})
export class IonWaterdropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWifiIcon],svg[ion-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M331.295 353.764c.131.181-.091-.13 0 0a46 46 0 0 0-1.039-1.365a64 64 0 0 0-3.618-4.17c-3.112-3.302-7.69-7.537-13.87-11.725C300.287 328.047 281.56 320 256 320s-44.287 8.047-56.768 16.504c-6.18 4.188-10.758 8.423-13.87 11.725a64 64 0 0 0-3.618 4.17c.264-.361-.43.544 0 0l-1.586 2.142a16 16 0 0 0 2.135 20.463l62.586 60.5c6.202 5.995 16.039 5.995 22.241 0l62.587-60.5a16 16 0 0 0 2.136-20.463z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M421.086 269.862c-.135-.218-.596-.966-.812-1.3a72 72 0 0 0-1.81-2.639c-1.552-2.163-3.813-5.096-6.861-8.536c-6.099-6.88-15.362-15.802-28.417-24.637C356.915 214.969 315.967 198 256 198s-100.915 16.969-127.186 34.75c-13.055 8.835-22.318 17.757-28.417 24.637c-3.049 3.44-5.31 6.373-6.861 8.536a71 71 0 0 0-1.81 2.639q-.324.502-.527.829l-.285.471a16 16 0 0 0 2.678 19.664l35.31 34a16 16 0 0 0 23.007-.84l.195-.209c.207-.219.565-.591 1.074-1.096a93 93 0 0 1 4.831-4.436c4.402-3.785 11.093-8.947 19.955-14.141C195.658 292.436 221.893 282 256 282s60.342 10.436 78.036 20.804c8.862 5.194 15.553 10.356 19.955 14.141a93 93 0 0 1 4.831 4.436a49 49 0 0 1 1.269 1.305l-.005-.006l-.013-.015m0 0l.026.029a16 16 0 0 0 22.999.832l35.31-34a16 16 0 0 0 2.678-19.664" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M507.974 181.264c.343.459 1.181 1.629 1.181 1.629a16 16 0 0 1-2.029 20.606l-36.69 35.5a16 16 0 0 1-23.345-1.17l-.003-.003l-.085-.099q-.138-.16-.482-.548a108 108 0 0 0-2.197-2.379c-2.009-2.116-5.095-5.229-9.229-9.01c-8.275-7.569-20.69-17.764-36.997-27.981C365.499 177.384 317.58 157 256 157s-109.499 20.384-142.098 40.809c-16.307 10.217-28.722 20.412-36.997 27.981c-4.133 3.781-7.22 6.894-9.229 9.01a109 109 0 0 0-2.197 2.379q-.345.388-.482.548l-.047.054l-.03.034l-.004.006l-.004.005l-.004.004a16 16 0 0 1-23.344 1.169l-36.69-35.5a16 16 0 0 1-2.03-20.606l.011-.016l.013-.017l.03-.043l.079-.113l.24-.337q.295-.413.809-1.103c.686-.92 1.667-2.199 2.949-3.786c2.563-3.174 6.335-7.585 11.367-12.818c10.057-10.46 25.185-24.241 45.783-37.973C105.437 99.146 168.48 72 256 72s150.563 27.146 191.875 54.687c20.598 13.732 35.726 27.513 45.783 37.973c5.032 5.233 8.804 9.644 11.367 12.818a125 125 0 0 1 2.949 3.786"></svg:path>`,
})
export class IonWifiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWineIcon],svg[ion-wine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.56 94.92V80a16 16 0 0 0-16-16H113.44a16 16 0 0 0-16 16v14.92c-1.46 11.37-9.65 90.74 36.93 144.69c24.87 28.8 60.36 44.85 105.63 47.86V416h-80a16 16 0 0 0 0 32h192a16 16 0 0 0 0-32h-80V287.47c45.27-3 80.76-19.06 105.63-47.86c46.58-53.95 38.37-133.32 36.93-144.69m-285.3 3.41a15 15 0 0 0 .18-2.33h253.12a15 15 0 0 0 .18 2.33a202 202 0 0 1 0 45.67H129.32a204.3 204.3 0 0 1-.06-45.67"></svg:path>`,
})
export class IonWineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWineglassIcon],svg[ion-wineglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M294.9 295.4c11-4.1 18-6.9 26.2-11.7 12-6.9 22.8-15.8 31.9-26.1 20.4-22.9 31-51.1 31-86.1 0-49.9-3.7-101.1-8.1-114.7C371.5 43 362.4 32 345.2 32H166.7c-17.1 0-26.2 11.1-30.6 24.6-4.4 13.5-8.1 64.9-8.1 114.8 0 35.1 10.6 63.2 30.9 86.1 9.1 10.3 19.9 19.1 31.8 26 8.2 4.8 15.1 7.8 26 11.7S239 302.7 239 327v94.2c0 10.7-2.9 19-11.1 24.8-2.8 2.1-6.3 4.3-14.3 6.5-31.5 8.6-46.9 15.6-49.2 17.2-2 1.4-4.5 3.6-4.5 7.1 0 0 13.8 3.1 96.2 3.1s96-3.1 96-3.1c0-3.5-2.5-5.7-4.6-7.1-2.3-1.6-17.8-8.6-49.4-17.2-8-2.2-12.2-4.4-15.1-6.5-8-5.7-12-14-12-24.7v-94.2c0-24 12.9-27.7 23.9-31.7zm-39-25.1c-25.4 0-48.5-10-65.5-26.3-2.7-2.4-5.2-5-7.6-7.7-15.6-17.5-22.4-36.7-23.1-64.8-.7-28.2-.1-72.5 7.3-107.5h177c6.3 24 9.1 76.8 7.7 107.2-1.4 30.5-7.2 47.3-22.8 64.9-2 2.2-3.9 4.3-6.1 6.4-17.1 17.2-40.8 27.8-66.9 27.8z" fill="currentColor"></svg:path><svg:path d="M336.2 170.6c0-7.5-.1-31.9-1.3-52.6-.5-8.4-1.2-16-2.1-22h-153c-.9 3-1.8 11.6-2.5 22-1.3 18.9-2.1 43.9-1.5 52.9.9 13.8 1.5 20.6 4.5 29.4 3.1 9.1 8 17.3 14.6 24.7 2 2.3 4.1 4.4 6.4 6.4 14.2 13.6 33.5 22 54.7 22 21.8 0 41.5-8.8 55.9-23.1 1.8-1.7 3.5-3.5 5.2-5.3 6.6-7.4 11.4-15.5 14.5-24.6 3.1-9 4.6-19.3 4.6-29.8zM320 179c0 5-3.9 8.1-8.3 8.1-1.6 0-3-.5-4.3-1.3-2.2-1.4-3.5-3.9-3.5-6.7v-26c0-4.4 3.6-8 8-8s8 3.6 8 8V179zm-1.1-47.2c-1.2 1.8-3 3-5.1 3.5-2.1.4-4.3 0-6-1.1-1.8-1.2-3-3-3.5-5.1-.4-2.1 0-4.3 1.1-6 1.2-1.8 3-3 5.1-3.5 2.1-.4 4.3 0 6 1.1 1.8 1.2 3 3 3.5 5.1.5 2 .1 4.2-1.1 6z" fill="currentColor"></svg:path>`,
})
export class IonWineglassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWomanIcon],svg[ion-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="255.75" cy="56" r="56" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m394.63 277.9l-10.33-34.41v-.11l-22.46-74.86h-.05l-2.51-8.45a44.87 44.87 0 0 0-43-32.08h-120a44.84 44.84 0 0 0-43 32.08l-2.51 8.45h-.06l-22.46 74.86v.11l-10.37 34.41c-3.12 10.39 2.3 21.66 12.57 25.14a20 20 0 0 0 25.6-13.18l25.58-85.25l2.17-7.23a8 8 0 0 1 15.53 2.62a7.8 7.8 0 0 1-.17 1.61L155.43 347.4a16 16 0 0 0 15.32 20.6h29v114.69c0 16.46 10.53 29.31 24 29.31s24-12.85 24-29.31V368h16v114.69c0 16.46 10.53 29.31 24 29.31s24-12.85 24-29.31V368h30a16 16 0 0 0 15.33-20.6l-43.74-145.81a7.5 7.5 0 0 1-.16-1.59a8 8 0 0 1 15.54-2.63l2.17 7.23l25.57 85.25A20 20 0 0 0 382.05 303c10.27-3.44 15.69-14.71 12.58-25.1"></svg:path>`,
})
export class IonWomanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWrenchIcon],svg[ion-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M461.9 114.9l-56.5 56.7-55.1-10-9.9-55.1 56.5-56.7c-12.7-12.7-30.8-18.5-44.2-17.8-13.5.7-42.3 8.3-64.6 32-21.6 22.8-44.3 65.3-24.2 112.5 2.4 5.7 5.1 13.2-2.9 21.2-8.1 8-215 202.8-215 202.8-19.4 16.7-18 47.6-.1 65.6 18.2 17.9 48.9 19 65.6-.3 0 0 193.2-205.8 202.7-215.1 8.5-8.3 16.1-5.5 21.2-2.9 35.6 18.4 86.3 2.4 112.6-23.9 26.3-26.3 31.1-51.7 31.9-64.7.8-12.9-3.7-30-18-44.3zM91.3 443.2c-6.3 6.2-16.5 6.2-22.7 0-6.2-6.3-6.2-16.5 0-22.7 6.3-6.2 16.5-6.2 22.7 0 6.2 6.3 6.2 16.5 0 22.7z" fill="currentColor"></svg:path>`,
})
export class IonWrenchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionXboxIcon],svg[ion-xbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M126.8 248.3c39.7-58.6 77.9-92.8 77.9-92.8s-42.1-48.9-92.8-67.4l-3.3-.8C61.7 128.4 32 188.7 32 256c0 50.7 16.9 97.5 45.2 135 0-4.4.6-70.3 49.6-142.7z" fill="currentColor"></svg:path><svg:path d="M480 256c0-67.3-29.7-127.6-76.6-168.7l-3.2.9c-50.7 18.5-92.9 67.4-92.9 67.4s38.2 34.2 77.9 92.8c49 72.4 49.6 138.3 49.5 142.7C463.2 353.5 480 306.7 480 256z" fill="currentColor"></svg:path><svg:path d="M201.2 80.9c29.3 13.1 54.6 34.6 54.6 34.6s25.5-21.4 54.8-34.6c36.8-16.5 64.9-11.3 72.3-9.5C346.8 46.6 303.1 32 256 32c-47.1 0-90.8 14.6-126.9 39.4 7.2-1.8 35.2-7.1 72.1 9.5z" fill="currentColor"></svg:path><svg:path d="M358.7 292.9C312.4 236 255.8 199 255.8 199s-56.3 37-102.7 93.9c-39.8 48.9-54.6 84.8-62.6 107.8l-1.3 4.8c41 45.7 100.5 74.5 166.8 74.5 66.3 0 125.8-28.8 166.8-74.5l-1.4-4.8c-8-23-22.9-58.9-62.7-107.8z" fill="currentColor"></svg:path>`,
})
export class IonXboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
