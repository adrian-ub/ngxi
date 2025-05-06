import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsFemaleSharpIcon],svg[famicons-female-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M430 190c0-95.94-78.06-174-174-174S82 94.06 82 190c0 88.49 66.4 161.77 152 172.61V394h-58v44h58v58h44v-58h58v-44h-58v-31.39c85.6-10.84 152-84.12 152-172.61m-304 0c0-71.68 58.32-130 130-130s130 58.32 130 130s-58.32 130-130 130s-130-58.32-130-130"></svg:path>`,
})
export class FamiconsFemaleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFileTrayIcon],svg[famicons-file-tray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m479.66 268.7l-32-151.81C441.48 83.77 417.68 64 384 64H128c-16.8 0-31 4.69-42.1 13.94s-18.37 22.31-21.58 38.89l-32 151.87A16.7 16.7 0 0 0 32 272v112a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V272a16.7 16.7 0 0 0-.34-3.3m-384-145.4v-.28c3.55-18.43 13.81-27 32.29-27H384c18.61 0 28.87 8.55 32.27 26.91c0 .13.05.26.07.39l26.93 127.88a4 4 0 0 1-3.92 4.82H320a15.92 15.92 0 0 0-16 15.82a48 48 0 1 1-96 0A15.92 15.92 0 0 0 192 256H72.65a4 4 0 0 1-3.92-4.82Z"></svg:path>`,
})
export class FamiconsFileTrayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFileTrayFullIcon],svg[famicons-file-tray-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m479.66 268.7l-32-151.81C441.48 83.77 417.68 64 384 64H128c-16.8 0-31 4.69-42.1 13.94s-18.37 22.31-21.58 38.89l-32 151.87A16.7 16.7 0 0 0 32 272v112a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V272a16.7 16.7 0 0 0-.34-3.3m-384-145.4v-.28c3.55-18.43 13.81-27 32.29-27H384c18.61 0 28.87 8.55 32.27 26.91c0 .13.05.26.07.39l26.93 127.88a4 4 0 0 1-3.92 4.82H320a15.92 15.92 0 0 0-16 15.82a48 48 0 1 1-96 0A15.92 15.92 0 0 0 192 256H72.65a4 4 0 0 1-3.92-4.82Z"></svg:path><svg:path fill="currentColor" d="M368 160H144a16 16 0 0 1 0-32h224a16 16 0 0 1 0 32m16 64H128a16 16 0 0 1 0-32h256a16 16 0 0 1 0 32"></svg:path>`,
})
export class FamiconsFileTrayFullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFileTrayFullOutlineIcon],svg[famicons-file-tray-full-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M384 80H128c-26 0-43 14-48 40L48 272v112a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48V272l-32-152c-5-27-23-40-48-40Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 272h144m128 0h144m-272 0a64 64 0 0 0 128 0M144 144h224m-240 64h256"></svg:path>`,
})
export class FamiconsFileTrayFullOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFileTrayFullSharpIcon],svg[famicons-file-tray-full-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 128h256v38H128zm-16 64h288v38H112z"></svg:path><svg:path fill="currentColor" d="M448 64H64L32 256v192h448V256Zm-12 192H320a64 64 0 0 1-128 0H76l22-150h316Z"></svg:path>`,
})
export class FamiconsFileTrayFullSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFileTrayOutlineIcon],svg[famicons-file-tray-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M384 80H128c-26 0-43 14-48 40L48 272v112a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48V272l-32-152c-5-27-23-40-48-40Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 272h144m128 0h144m-272 0a64 64 0 0 0 128 0"></svg:path>`,
})
export class FamiconsFileTrayOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFileTraySharpIcon],svg[famicons-file-tray-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 64H64L32 256v192h448V256Zm-12 192H320a64 64 0 0 1-128 0H76l22-150h316Z"></svg:path>`,
})
export class FamiconsFileTraySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFileTrayStackedIcon],svg[famicons-file-tray-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 352H320a16 16 0 0 0-16 16a48 48 0 0 1-96 0a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v64a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64v-64a16 16 0 0 0-16-16m15.46-164.12L447.61 68.45C441.27 35.59 417.54 16 384 16H128c-16.8 0-31 4.69-42.1 13.94S67.66 52 64.4 68.4L32.54 187.88A16 16 0 0 0 32 192v48c0 35.29 28.71 80 64 80h320c35.29 0 64-44.71 64-80v-48a16 16 0 0 0-.54-4.12M440.57 176H320a15.92 15.92 0 0 0-16 15.82a48 48 0 1 1-96 0A15.92 15.92 0 0 0 192 176H71.43a2 2 0 0 1-1.93-2.52L95.71 75c3.55-18.41 13.81-27 32.29-27h256c18.59 0 28.84 8.53 32.25 26.85l26.25 98.63a2 2 0 0 1-1.93 2.52"></svg:path>`,
})
export class FamiconsFileTrayStackedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFileTrayStackedOutlineIcon],svg[famicons-file-tray-stacked-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M48 336v96a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48v-96"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 336h144m128 0h144m-272 0a64 64 0 0 0 128 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M384 32H128c-26 0-43 14-48 40L48 192v96a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48v-96L432 72c-5-27-23-40-48-40Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 192h144m128 0h144m-272 0a64 64 0 0 0 128 0"></svg:path>`,
})
export class FamiconsFileTrayStackedOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFileTrayStackedSharpIcon],svg[famicons-file-tray-stacked-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 16H64L32 176v144h448V176Zm-12 160H320a64 64 0 0 1-128 0H76L98 58h316ZM320 352a64 64 0 0 1-128 0H32v144h448V352Z"></svg:path>`,
})
export class FamiconsFileTrayStackedSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFilmIcon],svg[famicons-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M436 80H76a44.05 44.05 0 0 0-44 44v264a44.05 44.05 0 0 0 44 44h360a44.05 44.05 0 0 0 44-44V124a44.05 44.05 0 0 0-44-44M112 388a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm0-80a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm0-80a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm0-80a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm241.68 124H158.32a16 16 0 0 1 0-32h195.36a16 16 0 1 1 0 32M448 388a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm0-80a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm0-80a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm0-80a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Z"></svg:path>`,
})
export class FamiconsFilmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFilmOutlineIcon],svg[famicons-film-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="320" x="48" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="384" y="336" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="384" y="256" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="384" y="176" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="384" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="48" y="336" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="48" y="256" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="48" y="176" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="48" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="256" height="160" x="128" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="256" height="160" x="128" y="256" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect>`,
})
export class FamiconsFilmOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFilmSharpIcon],svg[famicons-film-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 80H32v352h448ZM112 352v48H64v-48Zm0-80v48H64v-48Zm0-80v48H64v-48Zm0-80v48H64v-48Zm256 160H144v-32h224Zm80 80v48h-48v-48Zm0-80v48h-48v-48Zm0-80v48h-48v-48Zm0-80v48h-48v-48Z"></svg:path>`,
})
export class FamiconsFilmSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFilterIcon],svg[famicons-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48m-80 112H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48m-96 112h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48"></svg:path>`,
})
export class FamiconsFilterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFilterCircleIcon],svg[famicons-filter-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m32 304h-64a16 16 0 0 1 0-32h64a16 16 0 0 1 0 32m48-64H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32m32-64H144a16 16 0 0 1 0-32h224a16 16 0 0 1 0 32"></svg:path>`,
})
export class FamiconsFilterCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFilterCircleOutlineIcon],svg[famicons-filter-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 208h224m-192 64h160m-112 64h64"></svg:path>`,
})
export class FamiconsFilterCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFilterCircleSharpIcon],svg[famicons-filter-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m48 304h-96v-32h96Zm48-64H160v-32h192Zm32-64H128v-32h256Z"></svg:path>`,
})
export class FamiconsFilterCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFilterOutlineIcon],svg[famicons-filter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96"></svg:path>`,
})
export class FamiconsFilterOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFilterSharpIcon],svg[famicons-filter-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 120h480v48H16zm80 112h320v48H96zm96 112h128v48H192z"></svg:path>`,
})
export class FamiconsFilterSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFingerPrintIcon],svg[famicons-finger-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M63.28 202a15.3 15.3 0 0 1-7.7-2a14.84 14.84 0 0 1-5.52-20.46C69.34 147.36 128 72.25 256 72.25c55.47 0 104.12 14.57 144.53 43.29c33.26 23.57 51.9 50.25 60.78 63.1a14.79 14.79 0 0 1-4 20.79a15.52 15.52 0 0 1-21.24-4C420 172.32 371 102 256 102c-112.25 0-163 64.71-179.53 92.46A15 15 0 0 1 63.28 202"></svg:path><svg:path fill="currentColor" d="M320.49 496a15.3 15.3 0 0 1-3.79-.43c-92.85-23-127.52-115.82-128.93-119.68l-.22-.85c-.76-2.68-19.39-66.33 9.21-103.61c13.11-17 33.05-25.72 59.38-25.72c24.48 0 42.14 7.61 54.28 23.36c10 12.86 14 28.72 17.87 44c8.13 31.82 14 48.53 47.79 50.25c14.84.75 24.59-7.93 30.12-15.32c14.95-20.15 17.55-53 6.28-82C398 228.57 346.61 158 256 158c-38.68 0-74.22 12.43-102.72 35.79c-23.59 19.35-42.28 46.67-51.28 74.75c-16.69 52.28 5.2 134.46 5.41 135.21A14.83 14.83 0 0 1 96.54 422a15.39 15.39 0 0 1-18.74-10.6c-1-3.75-24.38-91.4-5.1-151.82c21-65.47 85.81-131.47 183.33-131.47c45.07 0 87.65 15.32 123.19 44.25c27.52 22.5 50 52.72 61.76 82.93c14.95 38.57 10.94 81.86-10.19 110.14c-14.08 18.86-34.13 28.72-56.34 27.65c-57.86-2.9-68.26-43.29-75.84-72.75c-7.8-30.22-12.79-44.79-42.58-44.79c-16.36 0-27.85 4.5-35 13.82c-9.75 12.75-10.51 32.68-9.43 47.14a152.4 152.4 0 0 0 5.1 29.79c2.38 6 33.37 82 107.59 100.39a14.88 14.88 0 0 1 11 18.11a15.36 15.36 0 0 1-14.8 11.21"></svg:path><svg:path fill="currentColor" d="M201.31 489.14a15.5 15.5 0 0 1-11.16-4.71c-37.16-39-58.18-82.61-66.09-137.14V347c-4.44-36.1 2.06-87.21 33.91-122.35c23.51-25.93 56.56-39.11 98.06-39.11c49.08 0 87.65 22.82 111.7 65.89c17.45 31.29 20.91 62.47 21 63.75a15.07 15.07 0 0 1-13.65 16.4a15.26 15.26 0 0 1-16.79-13.29A154 154 0 0 0 340.43 265c-18.64-32.89-47-49.61-84.51-49.61c-32.4 0-57.75 9.75-75.19 29c-25.14 27.75-30 70.5-26.55 98.78c6.93 48.22 25.46 86.58 58.18 120.86a14.7 14.7 0 0 1-.76 21.11a15.44 15.44 0 0 1-10.29 4"></svg:path><svg:path fill="currentColor" d="M372.5 446.18c-32.5 0-60.13-9-82.24-26.89c-44.42-35.79-49.4-94.08-49.62-96.54a15.27 15.27 0 0 1 30.45-2.36c.11.86 4.55 48.54 38.79 76c20.26 16.18 47.34 22.6 80.71 18.85a15.2 15.2 0 0 1 16.91 13.18a14.92 14.92 0 0 1-13.44 16.5a187 187 0 0 1-21.56 1.26m25.68-397.39C385.5 40.54 340.54 16 256 16c-88.74 0-133.81 27.11-143.78 34a11.6 11.6 0 0 0-1.84 1.4a.36.36 0 0 1-.22.1a14.87 14.87 0 0 0-5.09 11.15a15.06 15.06 0 0 0 15.31 14.85a15.56 15.56 0 0 0 8.88-2.79c.43-.32 39.22-28.82 126.77-28.82S382.58 74.29 383 74.5a15.25 15.25 0 0 0 9.21 3a15.06 15.06 0 0 0 15.29-14.89a14.9 14.9 0 0 0-9.32-13.82"></svg:path>`,
})
export class FamiconsFingerPrintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFingerPrintOutlineIcon],svg[famicons-finger-print-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M390.42 75.28a10.45 10.45 0 0 1-5.32-1.44C340.72 50.08 302.35 40 256.35 40c-45.77 0-89.23 11.28-128.76 33.84C122 77 115.11 74.8 111.87 69a12.4 12.4 0 0 1 4.63-16.32A281.8 281.8 0 0 1 256.35 16c49.23 0 92.23 11.28 139.39 36.48a12 12 0 0 1 4.85 16.08a11.3 11.3 0 0 1-10.17 6.72m-330.79 126a11.73 11.73 0 0 1-6.7-2.16a12.26 12.26 0 0 1-2.78-16.8c22.89-33.6 52-60 86.69-78.48c72.58-38.84 165.51-39.12 238.32-.24c34.68 18.48 63.8 44.64 86.69 78a12.29 12.29 0 0 1-2.78 16.8a11.26 11.26 0 0 1-16.18-2.88c-20.8-30.24-47.15-54-78.36-70.56c-66.34-35.28-151.18-35.28-217.29.24c-31.44 16.8-57.79 40.8-78.59 71a10 10 0 0 1-9.02 5.08M204.1 491a10.66 10.66 0 0 1-8.09-3.6C175.9 466.48 165 453 149.55 424c-16-29.52-24.27-65.52-24.27-104.16c0-71.28 58.71-129.36 130.84-129.36S387 248.56 387 319.84a11.56 11.56 0 1 1-23.11 0c0-58.08-48.32-105.36-107.72-105.36S148.4 261.76 148.4 319.84c0 34.56 7.39 66.48 21.49 92.4c14.8 27.6 25 39.36 42.77 58.08a12.67 12.67 0 0 1 0 17a12.44 12.44 0 0 1-8.56 3.68m165.75-44.4c-27.51 0-51.78-7.2-71.66-21.36a129.1 129.1 0 0 1-55-105.36a11.57 11.57 0 1 1 23.12 0a104.28 104.28 0 0 0 44.84 85.44c16.41 11.52 35.6 17 58.72 17a147.4 147.4 0 0 0 24-2.4c6.24-1.2 12.25 3.12 13.4 9.84a11.92 11.92 0 0 1-9.47 13.92a152.3 152.3 0 0 1-27.95 2.88ZM323.38 496a13 13 0 0 1-3-.48c-36.76-10.56-60.8-24.72-86-50.4c-32.37-33.36-50.16-77.76-50.16-125.28c0-38.88 31.9-70.56 71.19-70.56s71.2 31.68 71.2 70.56c0 25.68 21.5 46.56 48.08 46.56s48.08-20.88 48.08-46.56c0-90.48-75.13-163.92-167.59-163.92c-65.65 0-125.75 37.92-152.79 96.72c-9 19.44-13.64 42.24-13.64 67.2c0 18.72 1.61 48.24 15.48 86.64c2.32 6.24-.69 13.2-6.7 15.36a11.34 11.34 0 0 1-14.79-7a276.4 276.4 0 0 1-16.88-95c0-28.8 5.32-55 15.72-77.76c30.75-67 98.94-110.4 173.6-110.4c105.18 0 190.71 84.24 190.71 187.92c0 38.88-31.9 70.56-71.2 70.56s-71.2-31.68-71.2-70.56c.01-25.68-21.49-46.6-48.07-46.6s-48.08 20.88-48.08 46.56c0 41 15.26 79.44 43.23 108.24c22 22.56 43 35 75.59 44.4c6.24 1.68 9.71 8.4 8.09 14.64a11.39 11.39 0 0 1-10.87 9.16"></svg:path>`,
})
export class FamiconsFingerPrintOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFingerPrintSharpIcon],svg[famicons-finger-print-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m56.79 200.58l12.36 7.5l7.35-13.58C93.07 166.75 143.78 102 256 102c115 0 164 70.32 180.1 93.46l8.16 12.7L469.88 192l-8.54-13.36c-8.88-12.85-27.52-39.53-60.78-63.1C360.15 86.82 311.5 72.25 256 72.25c-128.07 0-186.69 75.11-206 107.25L42.63 192L54 198.86a14 14 0 0 0 1.63 1.1a13 13 0 0 0 1.16.62"></svg:path><svg:path fill="currentColor" d="M379.22 172.32c-35.54-28.93-78.12-44.25-123.22-44.25c-97.52 0-162.31 66-183.33 131.47C53.42 320 76.82 407.61 77.8 411.36l4.38 13.81l29.93-6.43l-4.74-15c-.21-.75-22.1-82.93-5.41-135.21c9-28.08 27.73-55.4 51.35-74.79C181.81 170.39 217.35 158 256 158c90.58 0 141.93 70.61 156.45 108.11c11.27 28.93 8.67 61.82-6.28 82c-5.53 7.39-15.28 16.07-30.12 15.32c-33.81-1.72-39.66-18.43-47.79-50.25c-3.9-15.32-7.9-31.18-17.87-44c-12.14-15.75-29.8-23.36-54.28-23.36c-26.33 0-46.27 8.68-59.38 25.72c-28.6 37.28-10 100.93-9.21 103.61l.22.85c1.41 3.86 36.08 96.65 128.93 119.68l14.77 3.21l8.09-28.71l-15.27-3.43c-74.22-18.43-105.21-94.39-107.59-100.39a152.4 152.4 0 0 1-5.1-29.79c-1.08-14.46-.32-34.39 9.43-47.14c7.15-9.32 18.64-13.82 35-13.82c29.79 0 34.78 14.57 42.58 44.79c7.58 29.46 18 69.85 75.84 72.75c22.21 1.07 42.26-8.79 56.34-27.65c21.13-28.28 25.14-71.57 10.19-110.14c-11.68-30.36-34.21-60.54-61.73-83.04"></svg:path><svg:path fill="currentColor" d="M154.18 343.21c-3.47-28.28 1.41-71 26.55-98.78c17.44-19.29 42.79-29 75.19-29c37.49 0 65.87 16.72 84.51 49.61a154 154 0 0 1 17.88 53.25l1.43 14.69l30-2.2a113 113 0 0 0-1-15.6c-.11-1.28-3.57-32.46-21-63.75c-24.06-43.11-62.63-65.93-111.74-65.93c-41.5 0-74.55 13.18-98.06 39.11c-31.85 35.14-38.35 86.25-33.91 122.35v.33c7.97 54.53 28.97 98.14 66.12 137.14l11.6 11.22l20.95-21.79l-10.34-9.79c-32.72-34.28-51.25-72.64-58.18-120.86M132.47 72.66c11.08-6.72 50.27-26.77 123.53-26.77c87.54 0 126.44 28.72 126.87 28.93l13.9 8.86L413 58.47l-13.22-8.56c-.52-.38-1.06-.76-1.6-1.12C385.5 40.54 340.54 16 256 16c-87.71 0-132.75 26.48-143.41 33.71L99 58.52l16.2 25.21Z"></svg:path><svg:path fill="currentColor" d="M390.59 415.21c-33.37 3.75-60.45-2.67-80.71-18.85c-34.24-27.43-38.68-75.11-38.79-76l-1.23-14.88l-30.53 2.23l1.31 15c.22 2.46 5.2 60.75 49.62 96.54c22.11 17.89 49.74 26.89 82.24 26.89a187 187 0 0 0 21.56-1.29l16.59-2.09l-6.1-29.71Z"></svg:path>`,
})
export class FamiconsFingerPrintSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFishIcon],svg[famicons-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 256c0-16.54-14.27-46.76-45.61-74a207 207 0 0 0-60.28-36.12a3.15 3.15 0 0 0-3.93 1.56c-.15.29-.3.57-.47.86l-9.59 15.9a183.24 183.24 0 0 0 .07 183.78l.23.39l8.74 16a4 4 0 0 0 4.94 1.82C479.63 337.42 512 281.49 512 256m-93.92-.14a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79"></svg:path><svg:path fill="currentColor" d="M335.45 256a214.8 214.8 0 0 1 29.08-108l.12-.21l4.62-7.67a4 4 0 0 0-2.59-6a284 284 0 0 0-39.26-5.39a7.94 7.94 0 0 1-4.29-1.6c-19.28-14.66-57.5-40.3-96.46-46.89a16 16 0 0 0-18 20.18l10.62 37.17a4 4 0 0 1-2.42 4.84c-36.85 13.69-68.59 38.75-91.74 57.85a8 8 0 0 1-10.06.06q-4.72-3.75-9.69-7.39c-39.64-28.95-86.21-32.76-88.17-32.9a16 16 0 0 0-16.83 19.4c.42 1.93 9.19 40.69 31.7 71.61a8.09 8.09 0 0 1 0 9.55C9.57 291.52.8 330.29.38 332.22a16 16 0 0 0 16.83 19.4c2-.14 48.53-4 88.12-32.88q4.85-3.56 9.47-7.22a8 8 0 0 1 10.06.07c23.25 19.19 55.05 44.28 92 58a4 4 0 0 1 2.42 4.83l-10.66 37.18a16 16 0 0 0 18 20.18c17.16-2.9 51.88-12.86 96.05-46.83a8.15 8.15 0 0 1 4.36-1.65a287 287 0 0 0 39.22-5.3a4 4 0 0 0 2.69-5.83l-4.51-8.29A214.8 214.8 0 0 1 335.45 256"></svg:path>`,
})
export class FamiconsFishIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFishOutlineIcon],svg[famicons-fish-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M240 152c-50.71 12.21-94.15 52.31-120.3 73.43a261 261 0 0 0-23.81-19.58C59.53 179.29 16 176 16 176s11.37 51.53 41.36 79.83C27.37 284.14 16 335.67 16 335.67s43.53-3.29 79.89-29.85a259 259 0 0 0 23.61-19.41c26.1 21.14 69.74 61.34 120.5 73.59l-16 56c39.43-6.67 78.86-35.51 94.72-48.25C448 362 496 279 496 256c0-22-48-106-176.89-111.73C303.52 131.78 263.76 102.72 224 96Z"></svg:path><svg:circle cx="416" cy="239.99" r="16" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="20" stroke-width="32" d="M378.37 356a199.22 199.22 0 0 1 0-200"></svg:path>`,
})
export class FamiconsFishOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFishSharpIcon],svg[famicons-fish-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M335.45 256a214.83 214.83 0 0 1 29.08-108l7.62-13.26a280.7 280.7 0 0 0-48.64-7.15c-21.94-16.9-54.64-36.95-92.34-43.33L208 80l13.37 61.86c-41.67 14.14-78.43 42.86-102.76 62.62q-7.06-5.91-14.78-11.55c-39.71-29-82.6-31.8-84.4-31.9L0 160l2.67 19.31c.29 2 6.79 44.73 31.65 76.52C9.46 287.63 3 330.33 2.67 332.36L0 352l19.43-1.36c1.8-.1 44.69-2.89 84.4-31.9q7.58-5.53 14.56-11.37c24.37 19.83 61.14 48.6 102.86 62.74L208 432l23.17-4.22c37.49-6.34 70.08-26.4 92-43.32a284.3 284.3 0 0 0 49.32-7.23l-7.91-13.18A214.9 214.9 0 0 1 335.45 256"></svg:path><svg:path fill="currentColor" d="M499.59 221.75c-5.85-9.88-16.54-24.9-34.19-40.28a209.8 209.8 0 0 0-62-37L392.23 164a183.22 183.22 0 0 0-.09 183.87l11.75 19.57a209.3 209.3 0 0 0 61.42-36.49C497.05 303.47 512 269 512 256c0-12.31-8-26.74-12.41-34.25M416 256a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class FamiconsFishSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFitnessIcon],svg[famicons-fitness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M193.69 152.84a16 16 0 0 1 29.64 2.56l36.4 121.36l30-59.92a16 16 0 0 1 28.62 0L345.89 272h96.76A213.1 213.1 0 0 0 464 176.65C463.37 114.54 413.54 64 352.92 64c-48.09 0-80 29.54-96.92 51c-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65A211.1 211.1 0 0 0 56.93 240h93.18Z"></svg:path><svg:path fill="currentColor" d="M321.69 295.16L304 259.78l-33.69 67.38A16 16 0 0 1 256 336q-.67 0-1.38-.06a16 16 0 0 1-14-11.34l-36.4-121.36l-30 59.92A16 16 0 0 1 160 272H69.35q14 29.29 37.27 57.66c18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0 0 36 0c78.59-53.35 112.62-89.93 131.39-112.81a317 317 0 0 0 19-25.66H336a16 16 0 0 1-14.31-8.84M464 272h-21.35a260 260 0 0 1-18.25 32H464a16 16 0 0 0 0-32M48 240a16 16 0 0 0 0 32h21.35a225 225 0 0 1-12.42-32Z"></svg:path>`,
})
export class FamiconsFitnessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFitnessOutlineIcon],svg[famicons-fitness-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81c-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42c-.54-52.67-42.32-96.81-95.08-96.81"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 256h112l48-96l48 160l48-96l32 64h128"></svg:path>`,
})
export class FamiconsFitnessOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFitnessSharpIcon],svg[famicons-fitness-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 272h-37.34a261 261 0 0 1-18.25 32H480ZM32 240v32h37.34a225 225 0 0 1-12.4-32Z"></svg:path><svg:path fill="currentColor" d="m304 259.78l-51.73 103.46l-48-160L169.89 272H69.34c10 20.92 23.5 41.41 40.63 61.68c40.12 47.46 94.25 79.75 137 108.32l9 6l9-6c42.78-28.57 96.91-60.86 137-108.32A323 323 0 0 0 424.41 304h-98.3Z"></svg:path><svg:path fill="currentColor" d="m211.73 116.76l48 160L304 188.22L345.89 272h96.77A213.1 213.1 0 0 0 464 176.65C463.37 114.54 413.54 64 352.92 64c-48.11 0-80.1 28-96.92 48.21C239.18 92 207.19 64 159.08 64C98.46 64 48.63 114.54 48 176.65A211.2 211.2 0 0 0 56.94 240h93.17Z"></svg:path>`,
})
export class FamiconsFitnessSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlagIcon],svg[famicons-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 480a16 16 0 0 1-16-16V68.13a24 24 0 0 1 11.9-20.72C88 40.38 112.38 32 160 32c37.21 0 78.83 14.71 115.55 27.68C305.12 70.13 333.05 80 352 80a183.8 183.8 0 0 0 71-14.5a18 18 0 0 1 25 16.58v219.36a20 20 0 0 1-12 18.31c-8.71 3.81-40.51 16.25-84 16.25c-24.14 0-54.38-7.14-86.39-14.71C229.63 312.79 192.43 304 160 304c-36.87 0-55.74 5.58-64 9.11V464a16 16 0 0 1-16 16"></svg:path>`,
})
export class FamiconsFlagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlagOutlineIcon],svg[famicons-flag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 464V68.14a8 8 0 0 1 4-6.9C91.81 56.66 112.92 48 160 48c64 0 145 48 192 48a199.5 199.5 0 0 0 77.23-15.77a2 2 0 0 1 2.77 1.85v219.36a4 4 0 0 1-2.39 3.65C421.37 308.7 392.33 320 352 320c-48 0-128-32-192-32s-80 16-80 16"></svg:path>`,
})
export class FamiconsFlagOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlagSharpIcon],svg[famicons-flag-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102 480H64V57.37l4.69-4.68C72.14 49.23 92.78 32 160 32c37.21 0 78.83 14.71 115.55 27.68C305.12 70.13 333.05 80 352 80c42.83 0 72.72-14.25 73-14.4l23-11.14v259.43l-8.84 4.42C437.71 319 403.19 336 352 336c-24.14 0-54.38-7.14-86.39-14.71C229.63 312.79 192.43 304 160 304c-36.87 0-49.74 5.58-58 9.11Z"></svg:path>`,
})
export class FamiconsFlagSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlameIcon],svg[famicons-flame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M394.23 197.56a300.4 300.4 0 0 0-53.37-90C301.2 61.65 249.05 32 208 32a16 16 0 0 0-15.48 20c13.87 53-14.88 97.07-45.31 143.72C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.77-122.44m-105.9 221.13C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78c4.95-10.74 10-21.67 13-33.37a8 8 0 0 1 12.49-4.51A126.5 126.5 0 0 1 275 292c18.17 24 29 52.42 29 76c0 22.24-5.42 39.77-15.67 50.69"></svg:path>`,
})
export class FamiconsFlameIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlameOutlineIcon],svg[famicons-flame-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 320c0-93 124-165 96-272c66 0 192 96 192 272a144 144 0 0 1-288 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 368c0 57.71-32 80-64 80s-64-22.29-64-80s40-86 32-128c42 0 96 70.29 96 128"></svg:path>`,
})
export class FamiconsFlameOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlameSharpIcon],svg[famicons-flame-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M394.24 197.56a300.7 300.7 0 0 0-53.38-90C301.2 61.65 240 32 192 32c19 70-14.36 117.12-44.79 163.77C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.76-122.44M288.33 418.69C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78c6.48-14.07 14.66-27.22 15.11-44.49c11.3 5.88 23.67 16.91 34.54 31.28c18.17 24 29 52.42 29 76c.01 22.23-5.41 39.76-15.66 50.68"></svg:path>`,
})
export class FamiconsFlameSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlashIcon],svg[famicons-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M194.82 496a18.36 18.36 0 0 1-18.1-21.53v-.11L204.83 320H96a16 16 0 0 1-12.44-26.06L302.73 23a18.45 18.45 0 0 1 32.8 13.71c0 .3-.08.59-.13.89L307.19 192H416a16 16 0 0 1 12.44 26.06L209.24 489a18.45 18.45 0 0 1-14.42 7"></svg:path>`,
})
export class FamiconsFlashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlashOffIcon],svg[famicons-flash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448m-.5-244a16 16 0 0 0-15.5-12H307.19L335.4 37.63c.05-.3.1-.59.13-.89A18.45 18.45 0 0 0 302.73 23l-92.58 114.46a4 4 0 0 0 .29 5.35l151 151a4 4 0 0 0 5.94-.31l60.8-75.16A16.37 16.37 0 0 0 431.5 204M301.57 369.19l-151-151a4 4 0 0 0-5.93.31L83.8 293.64A16.37 16.37 0 0 0 80.5 308A16 16 0 0 0 96 320h108.83l-28.09 154.36v.11a18.37 18.37 0 0 0 32.5 14.53l92.61-114.46a4 4 0 0 0-.28-5.35"></svg:path>`,
})
export class FamiconsFlashOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlashOffOutlineIcon],svg[famicons-flash-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448M294.34 84.28l-22.08 120.84a16 16 0 0 0 6.17 15.71a16.5 16.5 0 0 0 9.93 3.17h94.12l-38.37 47.42a4 4 0 0 0 .28 5.34l17.07 17.07a4 4 0 0 0 5.94-.31l60.8-75.16a16.37 16.37 0 0 0 3.3-14.36a16 16 0 0 0-15.5-12H307.19L335.4 37.63c.05-.3.1-.59.13-.89A18.45 18.45 0 0 0 302.73 23l-92.58 114.46a4 4 0 0 0 .28 5.35l17.07 17.06a4 4 0 0 0 5.94-.31Zm-76.56 343.29l22-120.71a16 16 0 0 0-6.19-15.7a16.54 16.54 0 0 0-9.92-3.16h-94.1l38.36-47.42a4 4 0 0 0-.28-5.34l-17.07-17.07a4 4 0 0 0-5.93.31L83.8 293.64A16.37 16.37 0 0 0 80.5 308A16 16 0 0 0 96 320h108.83l-28.09 154.36v.11a18.37 18.37 0 0 0 32.5 14.53l92.61-114.46a4 4 0 0 0-.28-5.35l-17.07-17.06a4 4 0 0 0-5.94.31Z"></svg:path>`,
})
export class FamiconsFlashOffOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlashOffSharpIcon],svg[famicons-flash-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m63.998 86.005l21.998-21.998L447.999 426.01l-21.998 21.998zM80 304h144l-32 192l108.18-129.82l-148.36-148.36zm352-96H288l32-192l-108.18 129.82l148.36 148.36z"></svg:path>`,
})
export class FamiconsFlashOffSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlashOutlineIcon],svg[famicons-flash-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 0 0 2.33 2.77h0a2.36 2.36 0 0 0 1.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 0 0-2.44-2.75h0a2.42 2.42 0 0 0-1.95 1"></svg:path>`,
})
export class FamiconsFlashOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlashSharpIcon],svg[famicons-flash-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 208H288l32-192L80 304h144l-32 192Z"></svg:path>`,
})
export class FamiconsFlashSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlashlightIcon],svg[famicons-flashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M462 216c9.35-9.35 15.14-19.09 17.19-28.95c2.7-12.95-1.29-25.55-11.22-35.48L360.43 44.05C346.29 29.92 322 24.07 296 50l-2 2a8 8 0 0 0 0 11.32L448.64 218a8 8 0 0 0 11.36 0Zm-211.86-62.92l-.16 2.34c-.53 7.18-6.88 19.15-13.88 26.14L47.27 370.36c-11.12 11.11-16.46 25.57-15.05 40.7C33.49 424.58 40.16 438 51 448.83L63.17 461c12.61 12.6 27.78 19 42.49 19a50.4 50.4 0 0 0 36-15.24l188.84-188.8c7.07-7.07 18.84-13.3 26.17-13.87c17.48-1.32 43.57-3.28 67.79-15.65a4 4 0 0 0 1-6.37L271.69 86.31a4 4 0 0 0-6.39 1c-12.12 22.99-13.82 46.91-15.16 65.77m-9.95 146.83a20 20 0 1 1 0-25.25a20 20 0 0 1 0 25.25"></svg:path>`,
})
export class FamiconsFlashlightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlashlightOutlineIcon],svg[famicons-flashlight-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M456.64 162.86L349.12 55.36c-13.15-13.14-28.68-7.17-41.82 6l-11.95 12c-26.13 26.13-27.62 58.38-29.42 83.31c-.89 12.24-9.78 27.55-18.51 36.28L58.58 381.67c-16.35 16.33-12.69 39.42 3.73 55.84l12.17 12.17c16.36 16.35 39.43 20.16 55.86 3.74l188.83-188.8c8.74-8.74 24-17.55 36.29-18.52c24.87-1.86 58.62-4.85 83.26-29.49l11.94-11.94c13.15-13.14 19.12-28.67 5.98-41.81Z"></svg:path><svg:circle cx="224.68" cy="287.28" r="20" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m289 81l142 142"></svg:path>`,
})
export class FamiconsFlashlightOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlashlightSharpIcon],svg[famicons-flashlight-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m330 16l-42.68 42.7L453.3 224.68L496 182z"></svg:path><svg:ellipse cx="224.68" cy="287.3" fill="none" rx="20.03" ry="19.96"></svg:ellipse><svg:path fill="currentColor" d="M429.21 243.85L268 82.59L249.65 168L16 402l94 94l234.23-233.8Zm-189 56.07a20 20 0 1 1 0-25.25a20 20 0 0 1-.02 25.25Z"></svg:path>`,
})
export class FamiconsFlashlightSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlaskIcon],svg[famicons-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M452.32 365L327.4 167.12a48.07 48.07 0 0 1-7.4-25.64V64h15.56c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 336 32H176.45c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 176 64h16v77.48a47.9 47.9 0 0 1-7.41 25.63L59.68 365a74 74 0 0 0-2.5 75.84C70.44 465.19 96.36 480 124.13 480h263.74c27.77 0 53.69-14.81 66.95-39.21a74 74 0 0 0-2.5-75.79M211.66 184.2A79.94 79.94 0 0 0 224 141.48V68a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4v73.48a79.94 79.94 0 0 0 12.35 42.72l57.8 91.53a8 8 0 0 1-6.78 12.27H160.63a8 8 0 0 1-6.77-12.27Z"></svg:path>`,
})
export class FamiconsFlaskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlaskOutlineIcon],svg[famicons-flask-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M176 48h160M118 304h276M208 48v93.48a64.1 64.1 0 0 1-9.88 34.18L73.21 373.49C48.4 412.78 76.63 464 123.08 464h265.84c46.45 0 74.68-51.22 49.87-90.51L313.87 175.66a64.1 64.1 0 0 1-9.87-34.18V48"></svg:path>`,
})
export class FamiconsFlaskOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlaskSharpIcon],svg[famicons-flask-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.11 382.76L325 153.92V74h32V32H155v42h32v79.92L42.89 382.76c-13 20.64-14.78 43.73-3 65.1S71.59 480 96 480h320c24.41 0 44.32-10.76 56.1-32.14s10.04-44.46-2.99-65.1M224.39 173.39a29.76 29.76 0 0 0 4.62-16V74h54v84.59a25.85 25.85 0 0 0 4 13.82L356.82 283H155.18Z"></svg:path>`,
})
export class FamiconsFlaskSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlowerIcon],svg[famicons-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="48" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M475.93 303.91a67.49 67.49 0 0 0-44.34-115.53a5.2 5.2 0 0 1-4.58-3.21a5.21 5.21 0 0 1 1-5.51A67.83 67.83 0 0 0 378 66.33h-.25A67.13 67.13 0 0 0 332.35 84a5.21 5.21 0 0 1-5.52 1a5.23 5.23 0 0 1-3.22-4.58a67.68 67.68 0 0 0-135.23 0a5.2 5.2 0 0 1-3.21 4.58a5.21 5.21 0 0 1-5.52-1a67.1 67.1 0 0 0-45.44-17.69H134a67.91 67.91 0 0 0-50 113.34a5.21 5.21 0 0 1 1 5.51a5.2 5.2 0 0 1-4.58 3.21a67.71 67.71 0 0 0 0 135.23a5.23 5.23 0 0 1 4.58 3.23a5.22 5.22 0 0 1-1 5.52a67.54 67.54 0 0 0 50.08 113h.25A67.38 67.38 0 0 0 179.65 428a5.21 5.21 0 0 1 5.51-1a5.2 5.2 0 0 1 3.21 4.58a67.71 67.71 0 0 0 135.23 0a5.23 5.23 0 0 1 3.22-4.58a5.21 5.21 0 0 1 5.51 1a67.38 67.38 0 0 0 45.29 17.42h.25a67.48 67.48 0 0 0 50.08-113a5.22 5.22 0 0 1-1-5.52a5.23 5.23 0 0 1 4.58-3.22a67.3 67.3 0 0 0 44.4-19.77M256 336a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80"></svg:path>`,
})
export class FamiconsFlowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlowerOutlineIcon],svg[famicons-flower-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M215.08 156.92c-4.89-24-10.77-56.27-10.77-73.23A51.36 51.36 0 0 1 256 32h0c28.55 0 51.69 23.69 51.69 51.69c0 16.5-5.85 48.95-10.77 73.23m-81.84 198.16c-4.91 24.06-10.77 56.16-10.77 73.23A51.36 51.36 0 0 0 256 480h0c28.55 0 51.69-23.69 51.69-51.69c0-16.54-5.85-48.93-10.77-73.23m58.16-140c24.06-4.91 56.16-10.77 73.23-10.77A51.36 51.36 0 0 1 480 256h0c0 28.55-23.69 51.69-51.69 51.69c-16.5 0-48.95-5.85-73.23-10.77m-198.16-81.85c-24-4.89-56.25-10.76-73.23-10.76A51.36 51.36 0 0 0 32 256h0c0 28.55 23.69 51.69 51.69 51.69c16.5 0 48.95-5.85 73.23-10.77"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M296.92 156.92c13.55-20.48 32.3-47.25 44.37-59.31a51.35 51.35 0 0 1 73.1 0h0c20.19 20.19 19.8 53.3 0 73.1c-11.66 11.67-38.67 30.67-59.31 44.37m-198.16 81.84c-20.48 13.55-47.25 32.3-59.31 44.37a51.35 51.35 0 0 0 0 73.1h0c20.19 20.19 53.3 19.8 73.1 0c11.67-11.66 30.67-38.67 44.37-59.31m140-58.16c20.48 13.55 47.25 32.3 59.31 44.37a51.35 51.35 0 0 1 0 73.1h0c-20.19 20.19-53.3 19.8-73.1 0c-11.69-11.69-30.66-38.65-44.37-59.31m-81.84-198.16c-13.53-20.43-32.38-47.32-44.37-59.31a51.35 51.35 0 0 0-73.1 0h0c-20.19 20.19-19.8 53.3 0 73.1c11.61 11.61 38.7 30.68 59.31 44.37"></svg:path><svg:circle cx="256" cy="256" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class FamiconsFlowerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFlowerSharpIcon],svg[famicons-flower-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="43" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M475.93 303.91a67.49 67.49 0 0 0-47.62-115.6c-2.88 0-6.2.14-9.93.43c2.75-2.36 5.23-4.62 7.33-6.71A67.83 67.83 0 0 0 378 66.33h-.25a67.27 67.27 0 0 0-47.82 20c-2.11 2.11-4.37 4.59-6.72 7.33c.29-3.75.44-7.07.44-9.93a67.69 67.69 0 1 0-135.38 0c0 2.87.15 6.19.44 9.93c-2.36-2.74-4.62-5.22-6.72-7.33a67.27 67.27 0 0 0-47.82-20H134A67.9 67.9 0 0 0 86.29 182c2.1 2.09 4.58 4.35 7.34 6.72c-3.74-.29-7.06-.44-9.94-.44a67.69 67.69 0 0 0 0 135.38c2.86 0 6.18-.15 9.93-.44c-2.74 2.35-5.22 4.61-7.33 6.72a67.55 67.55 0 0 0 47.82 115.42h.25A67.32 67.32 0 0 0 182 425.71c2.09-2.1 4.35-4.58 6.71-7.33c-.28 3.73-.43 7.05-.43 9.93a67.69 67.69 0 0 0 135.38 0c0-2.87-.15-6.19-.44-9.94c2.36 2.75 4.62 5.24 6.72 7.34a67.32 67.32 0 0 0 47.67 19.68h.25A67.5 67.5 0 0 0 425.71 330c-2.11-2.11-4.59-4.37-7.33-6.72c3.75.29 7.07.44 9.93.44a67.27 67.27 0 0 0 47.62-19.81M256 341a85 85 0 1 1 85-85a85.1 85.1 0 0 1-85 85"></svg:path>`,
})
export class FamiconsFlowerSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFolderIcon],svg[famicons-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 152a56 56 0 0 0-56-56H220.11a23.9 23.9 0 0 1-13.31-4L179 73.41A55.77 55.77 0 0 0 147.89 64H72a56 56 0 0 0-56 56v48a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8ZM16 392a56 56 0 0 0 56 56h368a56 56 0 0 0 56-56V216a8 8 0 0 0-8-8H24a8 8 0 0 0-8 8Z"></svg:path>`,
})
export class FamiconsFolderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFolderOpenIcon],svg[famicons-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408 96H252.11a23.9 23.9 0 0 1-13.31-4L211 73.41A55.77 55.77 0 0 0 179.89 64H104a56.06 56.06 0 0 0-56 56v24h416c0-30.88-25.12-48-56-48m15.75 352H88.25a56 56 0 0 1-55.93-55.15L16.18 228.11v-.28A48 48 0 0 1 64 176h384.1a48 48 0 0 1 47.8 51.83v.28l-16.22 164.74A56 56 0 0 1 423.75 448m56.15-221.45"></svg:path>`,
})
export class FamiconsFolderOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFolderOpenOutlineIcon],svg[famicons-folder-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 192v-72a40 40 0 0 1 40-40h75.89a40 40 0 0 1 22.19 6.72l27.84 18.56a40 40 0 0 0 22.19 6.72H408a40 40 0 0 1 40 40v40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M479.9 226.55L463.68 392a40 40 0 0 1-39.93 40H88.25a40 40 0 0 1-39.93-40L32.1 226.55A32 32 0 0 1 64 192h384.1a32 32 0 0 1 31.8 34.55"></svg:path>`,
})
export class FamiconsFolderOpenOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFolderOpenSharpIcon],svg[famicons-folder-open-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.08 189.4l28.58 233.87A28 28 0 0 0 72.52 448h367a28 28 0 0 0 27.86-24.73l28.54-233.87A12 12 0 0 0 484 176H28a12 12 0 0 0-11.92 13.4M464 124a28 28 0 0 0-28-28H244.84l-48-32H76a28 28 0 0 0-28 28v52h416Z"></svg:path>`,
})
export class FamiconsFolderOpenSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFolderOutlineIcon],svg[famicons-folder-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M440 432H72a40 40 0 0 1-40-40V120a40 40 0 0 1 40-40h75.89a40 40 0 0 1 22.19 6.72l27.84 18.56a40 40 0 0 0 22.19 6.72H440a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40M32 192h448"></svg:path>`,
})
export class FamiconsFolderOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFolderSharpIcon],svg[famicons-folder-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 420a28 28 0 0 0 28 28h424a28 28 0 0 0 28-28V208H16Zm480-296a28 28 0 0 0-28-28H212.84l-48-32H44a28 28 0 0 0-28 28v84h480Z"></svg:path>`,
})
export class FamiconsFolderSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFootballIcon],svg[famicons-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m143 304h-45.22a8 8 0 0 1-6.91-4l-16.14-27.68a8 8 0 0 1-.86-6l14.86-59.92a8 8 0 0 1 4.65-5.45l28.1-11.9a8 8 0 0 1 8.34 1.3l41.63 35.82a8 8 0 0 1 2.69 7.26a174.75 174.75 0 0 1-24.28 66.68A8 8 0 0 1 399 352M134.52 237.13l28.1 11.9a8 8 0 0 1 4.65 5.45l14.86 59.92a8 8 0 0 1-.86 6L165.13 348a8 8 0 0 1-6.91 4H113a8 8 0 0 1-6.82-3.81a174.75 174.75 0 0 1-24.28-66.68a8 8 0 0 1 2.69-7.26l41.63-35.82a8 8 0 0 1 8.3-1.3m256.94-87.24l-18.07 51.38A8 8 0 0 1 369 206l-29.58 12.53a8 8 0 0 1-8.26-1.24L274.9 170.1a8 8 0 0 1-2.9-6.1v-33.58a8 8 0 0 1 3.56-6.65l42.83-28.54a8 8 0 0 1 7.66-.67A176.9 176.9 0 0 1 390 142a8 8 0 0 1 1.46 7.89M193.6 95.23l42.84 28.54a8 8 0 0 1 3.56 6.65V164a8 8 0 0 1-2.86 6.13l-56.26 47.19a8 8 0 0 1-8.26 1.24L143 206a8 8 0 0 1-4.43-4.72L120.5 149.9a8 8 0 0 1 1.5-7.9a176.9 176.9 0 0 1 64-47.48a8 8 0 0 1 7.6.71m17.31 327.46L191.18 373a8 8 0 0 1 .52-7l15.17-26a8 8 0 0 1 6.91-4h84.44a8 8 0 0 1 6.91 4l15.18 26a8 8 0 0 1 .53 7l-19.59 49.67a8 8 0 0 1-5.69 4.87a176.6 176.6 0 0 1-79 0a8 8 0 0 1-5.65-4.85"></svg:path>`,
})
export class FamiconsFootballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFootballOutlineIcon],svg[famicons-football-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m256 175.15l-76.09 63.83L200 320h112l20.09-81.02zm76.09 63.83l52.87-22.4l25.78-73.26M447 269.97l-62.04-53.39m-205.05 22.4l-52.87-22.4l-25.78-73.26M65 269.97l62.04-53.39M256 175.15v-57.57l64-42.64m-128-.01l64 42.65M312 320l28 48l-28 71m98.74-71H342m-142-48l-28 48l28.37 71.5M101.63 368H172"></svg:path>`,
})
export class FamiconsFootballOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFootballSharpIcon],svg[famicons-football-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m140.64 296.08h-46.77l-16.89-29l15-60.44L377.79 242l42.65 36.71a164.9 164.9 0 0 1-23.8 65.37M134.21 242L164 254.67l15 60.44l-16.89 29h-46.75a164.9 164.9 0 0 1-23.8-65.34Zm249.07-92.47l-18.41 52.33l-31.12 13.18L277 167.46v-35l43.86-29.22a166.9 166.9 0 0 1 62.42 46.32ZM191.14 103.2L235 132.42v35l-56.75 47.61l-31.12-13.18l-18.41-52.33a166.9 166.9 0 0 1 62.42-46.32m26.44 314.3l-20.1-50.66l16-27.51h85l16.06 27.53l-20 50.6a166.2 166.2 0 0 1-77 0Z"></svg:path>`,
})
export class FamiconsFootballSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFootstepsIcon],svg[famicons-footsteps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M133.83 361.27c-22.61 0-41-8.17-54.79-24.39s-22.84-40.29-28.11-75.31c-7.76-51.61-.06-95.11 21.68-122.48c12.8-16.12 29.6-25.44 48.58-26.94c16.25-1.3 40.54 5.29 64 44c14.69 24.24 25.86 56.44 30.65 88.34c5.79 38.51 1.48 66.86-13.18 86.65c-11.64 15.72-29.54 25.46-53.21 29a106.5 106.5 0 0 1-15.62 1.13M173 496c-13.21 0-26.6-4.23-38.66-12.36a79.8 79.8 0 0 1-33.52-50.6c-2.85-14.66-1.14-26.31 5.22-35.64c10.33-15.15 28.87-18.56 48.49-22.18c2.07-.38 4.17-.76 6.3-1.17c4.52-.86 9.14-2 13.62-3.11c16.78-4.14 34.14-8.43 48.47 1.75c9.59 6.8 15 18.36 16.62 35.32c1.84 19.57-2.36 39.1-11.83 55c-10.19 17.11-25.47 28.42-43 31.86A61 61 0 0 1 173 496m205.17-230.73a107 107 0 0 1-15.6-1.2c-23.66-3.5-41.56-13.25-53.2-29c-14.66-19.79-19-48.13-13.18-86.65c4.79-31.93 15.93-64.1 30.55-88.25c23.34-38.57 47.66-45.26 64-44.08c18.92 1.38 35.69 10.57 48.51 26.6c21.89 27.37 29.65 71 21.86 122.84c-5.27 35-14.2 58.95-28.11 75.31s-32.22 24.43-54.83 24.43M339 400a61 61 0 0 1-11.68-1.13c-17.56-3.44-32.84-14.75-43-31.86c-9.47-15.9-13.67-35.43-11.83-55c1.6-17 7-28.52 16.62-35.33c14.33-10.17 31.69-5.89 48.47-1.74c4.48 1.1 9.1 2.24 13.62 3.11l6.29 1.17c19.63 3.61 38.17 7 48.5 22.17c6.36 9.33 8.07 21 5.22 35.64a79.78 79.78 0 0 1-33.52 50.61C365.56 395.78 352.17 400 339 400"></svg:path>`,
})
export class FamiconsFootstepsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFootstepsOutlineIcon],svg[famicons-footsteps-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M200 246.84c8.81 58.62-7.33 90.67-52.91 97.41c-50.65 7.49-71.52-26.44-80.33-85.06c-11.85-78.88 16-127.94 55.71-131.1c36.14-2.87 68.71 60.14 77.53 118.75Zm23.65 162.69c3.13 33.28-14.86 64.34-42 69.66c-27.4 5.36-58.71-16.37-65.09-49.19s17.75-34.56 47.32-40.21s55.99-20.4 59.77 19.74ZM312 150.83c-8.81 58.62 7.33 90.67 52.9 97.41c50.66 7.49 71.52-26.44 80.33-85.06c11.86-78.89-16-128.22-55.7-131.1c-36.4-2.64-68.71 60.13-77.53 118.75Zm-23.65 162.7c-3.13 33.27 14.86 64.34 42 69.66c27.4 5.36 58.71-16.37 65.09-49.19s-17.75-34.56-47.32-40.22s-55.99-20.4-59.77 19.75Z"></svg:path>`,
})
export class FamiconsFootstepsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFootstepsSharpIcon],svg[famicons-footsteps-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M130.54 358.31c-12.83 1.88-33.95 5.38-48-10.56S56.34 293.32 51 258.92c-7.88-50.7-.06-93.43 22-120.31c13-15.83 30.06-25 49.34-26.46c16.51-1.27 41.18 5.19 65 43.19c14.92 23.81 26.27 55.44 31.14 86.77c5.88 37.82 11.61 78.18-8.44 92.65c-11.31 8.17-19.43 11-38.62 15.57c-15.78 3.75-28.04 6.09-40.88 7.98m-22.82 32.53l108.89-22.46c9.2-1.9 16.58 3.16 20 18.32c11.22 49.76-4.86 109.3-55.22 109.3c-47.69 0-79.47-54.36-84.66-83.58c-2.37-13.25 1.01-19.53 10.99-21.58m232.87-136.5c-19.19-4.55-27.31-7.4-38.62-15.57c-20.05-14.47-14.32-54.83-8.44-92.65c4.87-31.33 16.22-63 31.14-86.77c23.8-38 48.47-44.46 65-43.19C408.93 17.63 426 26.78 439 42.61c22.08 26.88 29.9 69.61 22 120.31c-5.35 34.4-17.46 72.76-31.59 88.83s-35.13 12.44-48 10.56s-25.05-4.23-40.82-7.97m63.69 40.5l-108.89-22.46c-9.2-1.9-16.58 3.16-20 18.32c-11.21 49.76 4.87 109.3 55.23 109.3c47.69 0 79.47-54.36 84.66-83.58c2.36-13.25-1.02-19.53-11-21.58"></svg:path>`,
})
export class FamiconsFootstepsSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFunnelIcon],svg[famicons-funnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296 464a23.9 23.9 0 0 1-7.55-1.23L208.3 436.1a23.92 23.92 0 0 1-16.3-22.78V294.11a.4.4 0 0 0-.09-.13L23.26 97.54A30 30 0 0 1 46.05 48H466a30 30 0 0 1 22.79 49.54L320.09 294a1 1 0 0 0-.09.13V440a23.93 23.93 0 0 1-24 24"></svg:path>`,
})
export class FamiconsFunnelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFunnelOutlineIcon],svg[famicons-funnel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m35.4 87.12l168.65 196.44A16.07 16.07 0 0 1 208 294v119.32a7.93 7.93 0 0 0 5.39 7.59l80.15 26.67A7.94 7.94 0 0 0 304 440V294a16.07 16.07 0 0 1 4-10.44L476.6 87.12A14 14 0 0 0 466 64H46.05A14 14 0 0 0 35.4 87.12"></svg:path>`,
})
export class FamiconsFunnelOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsFunnelSharpIcon],svg[famicons-funnel-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 48l192 240v128l128 48V288L512 48z"></svg:path>`,
})
export class FamiconsFunnelSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGameControllerIcon],svg[famicons-game-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.1 107.1 0 0 0 352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.7 115.7 0 0 0-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.6 56.6 0 0 0 18.64 3.22c29.93 0 53.93-24.93 70.33-45.34c18.53-23.1 40.22-34.82 107.34-34.82c59.95 0 84.76 8.13 106.19 34.82c13.47 16.78 26.2 28.52 38.9 35.91c16.89 9.82 33.77 12 50.16 6.37c25.82-8.81 40.62-32.1 44-69.24c2.57-28.48-1.39-65.89-12.12-114.37M208 240h-32v32a16 16 0 0 1-32 0v-32h-32a16 16 0 0 1 0-32h32v-32a16 16 0 0 1 32 0v32h32a16 16 0 0 1 0 32m84 4a20 20 0 1 1 20-20a20 20 0 0 1-20 20m44 44a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288m0-88a20 20 0 1 1 20-20a20 20 0 0 1-20 20m44 44a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class FamiconsGameControllerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGameControllerOutlineIcon],svg[famicons-game-controller-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M467.51 248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5 91.5 0 0 0 352 96c-26.89 0-48.11 16-96 16s-69.15-16-96-16a99 99 0 0 0-27.2 3.66C89 112.59 61.94 165.7 43.33 248.83c-19 84.91-15.56 152 21.58 164.88c26 9 49.25-9.61 71.27-37c25-31.2 55.79-40.8 119.82-40.8s93.62 9.6 118.66 40.8c22 27.41 46.11 45.79 71.42 37.16c41.02-14.01 40.44-79.13 21.43-165.04Z"></svg:path><svg:circle cx="292" cy="224" r="20" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M336 288a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288"></svg:path><svg:circle cx="336" cy="180" r="20" fill="currentColor"></svg:circle><svg:circle cx="380" cy="224" r="20" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 176v96m48-48h-96"></svg:path>`,
})
export class FamiconsGameControllerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGameControllerSharpIcon],svg[famicons-game-controller-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M478.07 356.88L439 151c-8.86-40.35-23-71-88-71H145c-66 0-79.14 30.65-88 71L18 356.88c-7 34.12 4.43 61.25 33.37 71.81S103 423 119.18 391.3l15.42-30.52a16 16 0 0 1 14.28-8.78h198.28a16 16 0 0 1 14.28 8.78l15.42 30.52c16.14 31.7 38.88 48 67.81 37.39S485 391 478.07 356.88M224 240h-48v48h-32v-48H96v-32h48v-48h32v48h48Zm68 4a20 20 0 1 1 20-20a20 20 0 0 1-20 20m44 44a20 20 0 1 1 20-20a20 20 0 0 1-20 20m0-88a20 20 0 1 1 20-20a20 20 0 0 1-20 20m44 44a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class FamiconsGameControllerSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGiftIcon],svg[famicons-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M200 144h40v-40a40 40 0 1 0-40 40m152-40a40 40 0 0 0-80 0v40h40a40 40 0 0 0 40-40"></svg:path><svg:path fill="currentColor" d="M80 416a64 64 0 0 0 64 64h92a4 4 0 0 0 4-4V292a4 4 0 0 0-4-4H88a8 8 0 0 0-8 8Zm160-164V144h32v108a4 4 0 0 0 4 4h140a47.9 47.9 0 0 0 16-2.75A48.09 48.09 0 0 0 464 208v-16a48 48 0 0 0-48-48h-40.54a2 2 0 0 1-1.7-3A72 72 0 0 0 256 58.82A72 72 0 0 0 138.24 141a2 2 0 0 1-1.7 3H96a48 48 0 0 0-48 48v16a48.09 48.09 0 0 0 32 45.25A47.9 47.9 0 0 0 96 256h140a4 4 0 0 0 4-4m32-148a40 40 0 1 1 40 40h-40Zm-74.86-39.9A40 40 0 0 1 240 104v40h-40a40 40 0 0 1-2.86-79.89ZM276 480h92a64 64 0 0 0 64-64V296a8 8 0 0 0-8-8H276a4 4 0 0 0-4 4v184a4 4 0 0 0 4 4"></svg:path>`,
})
export class FamiconsGiftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGiftOutlineIcon],svg[famicons-gift-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 104v56h56a56 56 0 1 0-56-56Zm0 0v56h-56a56 56 0 1 1 56-56Z"></svg:path><svg:rect width="384" height="112" x="64" y="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="32" ry="32"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 272v144a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V272m160-112v304"></svg:path>`,
})
export class FamiconsGiftOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGiftSharpIcon],svg[famicons-gift-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M346 110a34 34 0 0 0-68 0v34h34a34 34 0 0 0 34-34m-112 0a34 34 0 1 0-34 34h34Z"></svg:path><svg:path fill="currentColor" d="M234 144h44v112h164a22 22 0 0 0 22-22v-68a22 22 0 0 0-22-22h-59.82A77.95 77.95 0 0 0 256 55.79A78 78 0 0 0 129.81 144H70a22 22 0 0 0-22 22v68a22 22 0 0 0 22 22h164Zm44-34a34 34 0 1 1 34 34h-34Zm-112 0a34 34 0 1 1 68 0v34h-34a34 34 0 0 1-34-34m112 370h132a22 22 0 0 0 22-22V288H278ZM80 458a22 22 0 0 0 22 22h132V288H80Z"></svg:path>`,
})
export class FamiconsGiftSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGitBranchIcon],svg[famicons-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 160a64 64 0 1 0-96.27 55.24c-2.29 29.08-20.08 37-75 48.42c-17.76 3.68-35.93 7.45-52.71 13.93v-126.2a64 64 0 1 0-64 0v209.22a64 64 0 1 0 64.42.24c2.39-18 16-24.33 65.26-34.52c27.43-5.67 55.78-11.54 79.78-26.95c29-18.58 44.53-46.78 46.36-83.89A64 64 0 0 0 416 160M160 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32m0 384a32 32 0 1 1 32-32a32 32 0 0 1-32 32m192-256a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsGitBranchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGitBranchOutlineIcon],svg[famicons-git-branch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="160" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="160" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368V144"></svg:path><svg:circle cx="352" cy="160" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 208c0 128-192 48-192 160"></svg:path>`,
})
export class FamiconsGitBranchOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGitBranchSharpIcon],svg[famicons-git-branch-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 96a64 64 0 0 0-58.86 89.11l-101.14 88V151.39a64 64 0 1 0-64 0v209.22a64 64 0 1 0 64 0V358l154.25-134.27c1.9.17 3.81.27 5.75.27a64 64 0 0 0 0-128M160 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32m0 384a32 32 0 1 1 32-32a32 32 0 0 1-32 32m192-256a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsGitBranchSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGitCommitIcon],svg[famicons-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 224h-68a128 128 0 0 0-247.9 0H64a32 32 0 0 0 0 64h68.05A128 128 0 0 0 380 288h68a32 32 0 0 0 0-64m-192 96a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"></svg:path>`,
})
export class FamiconsGitCommitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGitCommitOutlineIcon],svg[famicons-git-commit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 256H48m416 0H352"></svg:path>`,
})
export class FamiconsGitCommitOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGitCommitSharpIcon],svg[famicons-git-commit-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 224H380a128 128 0 0 0-247.9 0H32v64h100.05A128 128 0 0 0 380 288h100Zm-224 96a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"></svg:path>`,
})
export class FamiconsGitCommitSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGitCompareIcon],svg[famicons-git-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.31 340.69A16 16 0 0 0 191 352v32h-20a28 28 0 0 1-28-28V152a64 64 0 1 0-64-1.16V356a92.1 92.1 0 0 0 92 92h20v32a16 16 0 0 0 27.31 11.31l64-64a16 16 0 0 0 0-22.62ZM112 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32m320 296.61V156a92.1 92.1 0 0 0-92-92h-20V32a16 16 0 0 0-27.31-11.31l-64 64a16 16 0 0 0 0 22.62l64 64A16 16 0 0 0 320 160v-32h20a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0M400 448a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsGitCompareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGitCompareOutlineIcon],svg[famicons-git-compare-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m304 160l-64-64l64-64m-97 320l64 64l-64 64"></svg:path><svg:circle cx="112" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="400" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 96h84a60 60 0 0 1 60 60v212m-145 48h-84a60 60 0 0 1-60-60V144"></svg:path>`,
})
export class FamiconsGitCompareOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGitCompareSharpIcon],svg[famicons-git-compare-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209 384h-37a28 28 0 0 1-28-28V152a64 64 0 1 0-64-1.16V356a92.1 92.1 0 0 0 92 92h37v55.21L294.39 416L209 328.79ZM113 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32m319 296.61V156a92.1 92.1 0 0 0-92-92h-35V9.93L217.14 96L305 182.07V128h35a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0M400 448a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsGitCompareSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGitMergeIcon],svg[famicons-git-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M385 224a64 64 0 0 0-55.33 31.89c-42.23-1.21-85.19-12.72-116.21-31.33c-32.2-19.32-49.71-44-52.15-73.35a64 64 0 1 0-64.31.18v209.22a64 64 0 1 0 64 0v-94.46c44.76 34 107.28 52.38 168.56 53.76A64 64 0 1 0 385 224M129 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32m0 384a32 32 0 1 1 32-32a32 32 0 0 1-32 32m256-128a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsGitMergeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGitMergeOutlineIcon],svg[famicons-git-merge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="129" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="129" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M129 144v224"></svg:path><svg:circle cx="385" cy="288" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M129 144c0 96 112 144 208 144"></svg:path>`,
})
export class FamiconsGitMergeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGitMergeSharpIcon],svg[famicons-git-merge-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 224a63.66 63.66 0 0 0-37.95 12.5L160 153.36v-2a64 64 0 1 0-64 0v209.25a64 64 0 1 0 64 0V223.46l160.41 71.69A64 64 0 1 0 384 224M128 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32m0 384a32 32 0 1 1 32-32a32 32 0 0 1-32 32m256-128a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsGitMergeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGitNetworkIcon],svg[famicons-git-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 96a64 64 0 1 0-96.31 55.21c-1.79 20.87-11.47 38.1-28.87 51.29C305.07 216 280.09 224 256 224s-49.07-8-66.82-21.5c-17.4-13.19-27.08-30.42-28.87-51.29a64 64 0 1 0-64.11.29c2.08 40.87 21.17 76.87 54.31 102C171.3 269.26 197 280.19 224 285.09v75.52a64 64 0 1 0 64 0v-75.52c27-4.9 52.7-15.83 73.49-31.59c33.14-25.13 52.23-61.13 54.31-102A64 64 0 0 0 448 96M128 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32m128 384a32 32 0 1 1 32-32a32 32 0 0 1-32 32m128-320a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsGitNetworkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGitNetworkOutlineIcon],svg[famicons-git-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="128" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="256" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 256v112"></svg:path><svg:circle cx="384" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 144c0 74.67 68.92 112 128 112m128-112c0 74.67-68.92 112-128 112"></svg:path>`,
})
export class FamiconsGitNetworkOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGitNetworkSharpIcon],svg[famicons-git-network-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 32a64 64 0 0 0-57.67 91.73l-70.83 80.82l-70.19-80.1A64 64 0 1 0 128 160c1.1 0 2.2 0 3.29-.08L224 265.7v94.91a64 64 0 1 0 64 0v-96.05l91.78-104.71c1.39.09 2.8.15 4.22.15a64 64 0 0 0 0-128M96 96a32 32 0 1 1 32 32a32 32 0 0 1-32-32m160 352a32 32 0 1 1 32-32a32 32 0 0 1-32 32m128-320a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsGitNetworkSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGitPullRequestIcon],svg[famicons-git-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 96a64 64 0 1 0-96 55.39v209.22a64 64 0 1 0 64 0V151.39A64 64 0 0 0 192 96m-64-32a32 32 0 1 1-32 32a32 32 0 0 1 32-32m0 384a32 32 0 1 1 32-32a32 32 0 0 1-32 32m288-87.39V156a92.1 92.1 0 0 0-92-92h-20V32a16 16 0 0 0-27.31-11.31l-64 64a16 16 0 0 0 0 22.62l64 64A16 16 0 0 0 304 160v-32h20a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0M384 448a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsGitPullRequestIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGitPullRequestOutlineIcon],svg[famicons-git-pull-request-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="128" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 144v224m160-208l-64-64l64-64"></svg:path><svg:circle cx="128" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="384" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M240 96h84a60 60 0 0 1 60 60v212"></svg:path>`,
})
export class FamiconsGitPullRequestOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGitPullRequestSharpIcon],svg[famicons-git-pull-request-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 96a64 64 0 1 0-97 54.81v209.8a64 64 0 1 0 64 0V152a64.06 64.06 0 0 0 33-56m-64-32a32 32 0 1 1-32 32a32 32 0 0 1 32-32m-1 384a32 32 0 1 1 32-32a32 32 0 0 1-32 32m289-87.39V156a92.1 92.1 0 0 0-92-92h-35V9.93L201.14 96L289 182.07V128h35a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0M384 448a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsGitPullRequestSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGlassesIcon],svg[famicons-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 184h-10.9a78.7 78.7 0 0 0-16-7.18C419.5 171 396.26 168 368 168s-51.5 3-69.06 8.82c-14.06 4.69-20.25 9.86-22.25 11.87a47.94 47.94 0 0 0-41.36 0c-2-2-8.19-7.18-22.25-11.87C195.5 171 172.26 168 144 168s-51.5 3-69.06 8.82a78.7 78.7 0 0 0-16 7.18H48a16 16 0 0 0 0 32h.17c1 45.46 6.44 72.78 18.11 92.23a66.78 66.78 0 0 0 31.92 28c12.23 5.24 27.22 7.79 45.8 7.79c24.15 0 58.48-3.71 77.72-35.77c9.68-16.14 15.09-37.69 17.21-70.52A16 16 0 0 0 240 232a16 16 0 0 1 32 0a16 16 0 0 0 1.07 5.71c2.12 32.83 7.53 54.38 17.21 70.52a66.78 66.78 0 0 0 31.92 28c12.23 5.24 27.22 7.79 45.8 7.79c24.15 0 58.48-3.71 77.72-35.77c11.67-19.45 17.13-46.77 18.11-92.23h.17a16 16 0 0 0 0-32Z"></svg:path>`,
})
export class FamiconsGlassesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGlassesOutlineIcon],svg[famicons-glasses-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 232a32 32 0 0 1 64 0m160-32h16m-400 0H48m16 0c0 96 16 128 80 128s80-32 80-128c0 0-16-16-80-16s-80 16-80 16m384 0c0 96-16 128-80 128s-80-32-80-128c0 0 16-16 80-16s80 16 80 16"></svg:path>`,
})
export class FamiconsGlassesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGlassesSharpIcon],svg[famicons-glasses-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 176H16v64h21.24l12.44 112h171.87L240 241.32V240a16 16 0 0 1 32 0v1.32L290.45 352h171.87l12.44-112H496Z"></svg:path>`,
})
export class FamiconsGlassesSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGlobeIcon],svg[famicons-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M340.75 344.49c5.91-20.7 9.82-44.75 11.31-67.84a4.41 4.41 0 0 0-4.46-4.65h-71.06a4.43 4.43 0 0 0-4.47 4.39v55.3a4.44 4.44 0 0 0 4.14 4.38a273.5 273.5 0 0 1 59 11.39a4.45 4.45 0 0 0 5.54-2.97m-17.17 32.82a260 260 0 0 0-46.6-9.09a4.42 4.42 0 0 0-4.91 4.29v65.24a4.47 4.47 0 0 0 6.76 3.7c15.9-9.27 29-24.84 40.84-45.43c1.94-3.36 4.89-9.15 6.67-12.69a4.29 4.29 0 0 0-2.76-6.02m-88.29-8.91a257 257 0 0 0-46.56 8.82c-2.64.76-3.75 4.4-2.55 6.79c1.79 3.56 4 8.11 5.89 11.51c13 23 26.84 37.5 41.24 45.93a4.47 4.47 0 0 0 6.76-3.7v-65.27a4.16 4.16 0 0 0-4.78-4.08m.31-96.4h-71.06a4.41 4.41 0 0 0-4.46 4.64c1.48 23.06 5.37 47.16 11.26 67.84a4.46 4.46 0 0 0 5.59 3a272.2 272.2 0 0 1 59-11.36a4.44 4.44 0 0 0 4.15-4.38V276.4a4.43 4.43 0 0 0-4.48-4.4M277 143.78a235.8 235.8 0 0 0 46.5-9.14a4.3 4.3 0 0 0 2.76-6c-1.79-3.57-4.27-8.68-6.17-12.09c-12.29-22-26.14-37.35-41.24-46a4.48 4.48 0 0 0-6.76 3.7v65.23a4.43 4.43 0 0 0 4.91 4.3m-.46 96.22h71.06a4.39 4.39 0 0 0 4.46-4.58c-1.48-22.77-5.27-47.8-11.16-68.22a4.46 4.46 0 0 0-5.59-2.95c-19 5.74-38.79 10.43-59.09 12a4.4 4.4 0 0 0-4.15 4.32v55.11a4.4 4.4 0 0 0 4.47 4.32M233.31 70.56c-15.42 8.57-29.17 24.43-41.47 46.37c-1.91 3.41-4.19 8.11-6 11.67a4.31 4.31 0 0 0 2.76 6a225.4 225.4 0 0 0 46.54 9.17a4.43 4.43 0 0 0 4.91-4.29V74.26a4.49 4.49 0 0 0-6.74-3.7m2.61 105.7c-20.3-1.55-40.11-6.24-59.09-12a4.46 4.46 0 0 0-5.59 2.95c-5.89 20.42-9.68 45.45-11.16 68.22a4.39 4.39 0 0 0 4.46 4.58h71.06a4.4 4.4 0 0 0 4.47-4.34v-55.09a4.4 4.4 0 0 0-4.15-4.32"></svg:path><svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M176.6 430.85a219 219 0 0 1-12.48-19.66c-2-3.69-4.84-9.26-6.73-13.13a7.29 7.29 0 0 0-10.31-3.16c-4.3 2.41-10 5.72-14.13 8.43a147.3 147.3 0 0 1-23.57-22.43a249 249 0 0 1 30.41-18.36c1.86-1 2.77-2.14 2.18-4.18a374.8 374.8 0 0 1-14.09-82.17a4.36 4.36 0 0 0-4.3-4.17H66.84a2 2 0 0 1-2-1.7A98 98 0 0 1 64 256a96 96 0 0 1 .86-14.29a2 2 0 0 1 2-1.7h56.74c2.29 0 4.17-1.32 4.29-3.63a372.7 372.7 0 0 1 14-81.83a4.36 4.36 0 0 0-2.19-5.11a261 261 0 0 1-29.84-17.9a170 170 0 0 1 23.14-22.8c4.08 2.68 9.4 5.71 13.66 8.11a7.89 7.89 0 0 0 11-3.42c1.88-3.87 4-8.18 6.06-11.88a222 222 0 0 1 12.54-19.91A185 185 0 0 1 256 64c28.94 0 55.9 7 80.53 18.46a202 202 0 0 1 12 19c2.59 4.66 5.34 10.37 7.66 15.32a4.29 4.29 0 0 0 5.92 1.94c5.38-2.91 11.21-6.26 16.34-9.63a171.4 171.4 0 0 1 23.2 23a245 245 0 0 1-29.06 17.31a4.35 4.35 0 0 0-2.18 5.12a348.7 348.7 0 0 1 13.85 81.4a4.33 4.33 0 0 0 4.3 4.12l56.62-.07a2 2 0 0 1 2 1.7a117.5 117.5 0 0 1 0 28.62a2 2 0 0 1-2 1.72h-56.67a4.35 4.35 0 0 0-4.3 4.17a367.4 367.4 0 0 1-13.87 81.3a4.45 4.45 0 0 0 2.19 5.19c5 2.59 10.57 5.48 15.37 8.42s9.55 6.08 14.13 9.34a172.7 172.7 0 0 1-23 22.93c-2.44-1.61-5.34-3.44-7.84-4.94c-1.72-1-4.89-2.77-6.65-3.76c-3.82-2.14-7.88-.54-9.79 3.4s-4.83 9.59-6.87 13.25a212 212 0 0 1-12.35 19.53C310.91 442.37 284.94 448 256 448s-54.77-5.63-79.4-17.15"></svg:path>`,
})
export class FamiconsGlobeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGlobeOutlineIcon],svg[famicons-globe-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 277.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48v416m208-208H48"></svg:path>`,
})
export class FamiconsGlobeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGlobeSharpIcon],svg[famicons-globe-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="44" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="44" d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M117.33 121.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 269.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="44" d="M256 48v416m208-208H48"></svg:path>`,
})
export class FamiconsGlobeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGolfIcon],svg[famicons-golf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 320.46V202.3l166.62-75.73a16 16 0 0 0 0-29.14l-176-80A16 16 0 0 0 240 32v288.46q8-.45 16-.46t16 .46"></svg:path><svg:path fill="currentColor" d="M463.33 457.5c-8.56-42.85-35.11-78.74-76.78-103.8c-32.5-19.55-72.67-31.3-114.55-33.7v79.75a16 16 0 1 1-32 0V320c-41.88 2.4-82.05 14.15-114.55 33.7c-41.67 25.06-68.22 60.95-76.78 103.8a32.49 32.49 0 0 0 6.44 27.08C61.13 492 70 496 80 496h352c10 0 18.88-4.05 24.9-11.42a32.49 32.49 0 0 0 6.43-27.08"></svg:path>`,
})
export class FamiconsGolfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGolfOutlineIcon],svg[famicons-golf-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 400V32l176 80l-176 80"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 336c-87 0-175.3 43.2-191.64 124.74C62.39 470.57 68.57 480 80 480h352c11.44 0 17.62-9.43 15.65-19.26C431.3 379.2 343 336 256 336Z"></svg:path>`,
})
export class FamiconsGolfOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGolfSharpIcon],svg[famicons-golf-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 16v304.47q8-.47 16-.47t16 .47V202.3L448 112Z"></svg:path><svg:path fill="currentColor" d="M462.91 457.5c-8.54-42.85-35-78.74-76.62-103.8c-32.43-19.55-72.53-31.3-114.29-33.7v95.79h-32V320c-41.79 2.4-81.89 14.15-114.32 33.7c-41.59 25.06-68.08 60.95-76.62 103.8c-2 9.81-.68 38.5-.68 38.5h415.21s1.28-28.69-.68-38.5"></svg:path>`,
})
export class FamiconsGolfSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGridIcon],svg[famicons-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 240H68a36 36 0 0 1-36-36V68a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36m240 0H308a36 36 0 0 1-36-36V68a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36M204 480H68a36 36 0 0 1-36-36V308a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36m240 0H308a36 36 0 0 1-36-36V308a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36"></svg:path>`,
})
export class FamiconsGridIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGridOutlineIcon],svg[famicons-grid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="176" height="176" x="48" y="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="20" ry="20"></svg:rect><svg:rect width="176" height="176" x="288" y="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="20" ry="20"></svg:rect><svg:rect width="176" height="176" x="48" y="288" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="20" ry="20"></svg:rect><svg:rect width="176" height="176" x="288" y="288" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="20" ry="20"></svg:rect>`,
})
export class FamiconsGridOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsGridSharpIcon],svg[famicons-grid-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 240H32V32h208Zm240 0H272V32h208ZM240 480H32V272h208Zm240 0H272V272h208Z"></svg:path>`,
})
export class FamiconsGridSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHammerIcon],svg[famicons-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m280.16 242.79l-26.11-26.12a32 32 0 0 0-45.14-.12L27.38 384.08c-6.61 6.23-10.95 14.17-11.35 23.06a32.1 32.1 0 0 0 9.21 23.94l39 39.43a.5.5 0 0 0 .07.07A32.3 32.3 0 0 0 87 480h1.18c8.89-.33 16.85-4.5 23.17-11.17l168.7-180.7a32 32 0 0 0 .11-45.34M490 190l-.31-.31l-34.27-33.92a21.46 21.46 0 0 0-15.28-6.26a21.9 21.9 0 0 0-12.79 4.14c0-.43.06-.85.09-1.22c.45-6.5 1.15-16.32-5.2-25.22a258 258 0 0 0-24.8-28.74a.6.6 0 0 0-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.6 139.6 0 0 0 257.56 32C226 32 202 46.24 192.81 54.68a120 120 0 0 0-14.18 16.22a16 16 0 0 0 18.65 24.34a75 75 0 0 1 8.58-2.63a63.5 63.5 0 0 1 18.45-1.15c13.19 1.09 28.79 7.64 35.69 13.09c11.7 9.41 17.33 22.09 18.26 41.09c.18 3.82-7.72 18.14-20 34.48a16 16 0 0 0 1.45 21l34.41 34.41a16 16 0 0 0 22 .62c9.73-8.69 24.55-21.79 29.73-25c7.69-4.73 13.19-5.64 14.7-5.8a19.2 19.2 0 0 1 11.29 2.38a1.24 1.24 0 0 1-.31.95l-1.82 1.73l-.3.28a21.52 21.52 0 0 0 .05 30.54l34.26 33.91a21.45 21.45 0 0 0 15.28 6.25a21.7 21.7 0 0 0 15.22-6.2l55.5-54.82c.19-.19.38-.39.56-.59A21.87 21.87 0 0 0 490 190"></svg:path>`,
})
export class FamiconsHammerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHammerOutlineIcon],svg[famicons-hammer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M277.42 247a24.7 24.7 0 0 0-4.08-5.47L255 223.44a21.6 21.6 0 0 0-6.56-4.57a20.93 20.93 0 0 0-23.28 4.27c-6.36 6.26-18 17.68-39 38.43C146 301.3 71.43 367.89 37.71 396.29a16 16 0 0 0-1.09 23.54l39 39.43a16.13 16.13 0 0 0 23.67-.89c29.24-34.37 96.3-109 136-148.23c20.39-20.06 31.82-31.58 38.29-37.94a21.76 21.76 0 0 0 3.84-25.2m201.01-46l-34.31-34a5.44 5.44 0 0 0-4-1.59a5.6 5.6 0 0 0-4 1.59h0a11.41 11.41 0 0 1-9.55 3.27c-4.48-.49-9.25-1.88-12.33-4.86c-7-6.86 1.09-20.36-5.07-29a243 243 0 0 0-23.08-26.72c-7.06-7-34.81-33.47-81.55-52.53a123.8 123.8 0 0 0-47-9.24c-26.35 0-46.61 11.76-54 18.51c-5.88 5.32-12 13.77-12 13.77a91 91 0 0 1 10.81-3.2a79.5 79.5 0 0 1 23.28-1.49C241.19 76.8 259.94 84.1 270 92c16.21 13 23.18 30.39 24.27 52.83c.8 16.69-15.23 37.76-30.44 54.94a7.85 7.85 0 0 0 .4 10.83l21.24 21.23a8 8 0 0 0 11.14.1c13.93-13.51 31.09-28.47 40.82-34.46s17.58-7.68 21.35-8.09a35.7 35.7 0 0 1 21.3 4.62a13.7 13.7 0 0 1 3.08 2.38c6.46 6.56 6.07 17.28-.5 23.74l-2 1.89a5.5 5.5 0 0 0 0 7.84l34.31 34a5.5 5.5 0 0 0 4 1.58a5.65 5.65 0 0 0 4-1.58L478.43 209a5.82 5.82 0 0 0 0-8"></svg:path>`,
})
export class FamiconsHammerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHammerSharpIcon],svg[famicons-hammer-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m294.28 256.9l-54.42-54.41a12 12 0 0 0-17 0L12.45 401a12 12 0 0 0-.27 17.2l66.05 66.28a12 12 0 0 0 17.22-.23l198.81-210.36a12 12 0 0 0 .02-16.99m205.05-57.57l-43.89-43.58a21.46 21.46 0 0 0-15.28-6.26a21.9 21.9 0 0 0-12.79 4.14c0-.43.06-.85.09-1.22c.45-6.5 1.15-16.32-5.2-25.22a258 258 0 0 0-24.8-28.74a.6.6 0 0 0-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.6 139.6 0 0 0 257.56 32C226 32 202 46.24 192.81 54.68A53.4 53.4 0 0 0 176 86.17L192 96s8.06-2 13.86-3.39a62.7 62.7 0 0 1 18.45-1.15c13.19 1.09 28.79 7.64 35.69 13.09c11.7 9.41 17.33 22.09 18.26 41.09c.2 4.23-9.52 21.35-24.16 39.84a8 8 0 0 0 .61 10.62l45.37 45.37a8 8 0 0 0 11 .25c12.07-11 30.49-28 34.67-30.59c7.69-4.73 13.19-5.64 14.7-5.8a19.2 19.2 0 0 1 11.29 2.38a1.24 1.24 0 0 1-.31.95l-1.82 1.73l-.3.28a21.52 21.52 0 0 0 .05 30.54l43.95 43.68a8 8 0 0 0 11.28 0l74.68-74.2a8 8 0 0 0 .06-11.36"></svg:path>`,
})
export class FamiconsHammerSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHandLeftIcon],svg[famicons-hand-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432.8 211.44c-15.52-8.82-34.91-2.28-43.31 13.68l-41.38 84.41a7 7 0 0 1-8.93 3.43a7 7 0 0 1-4.41-6.52V72c0-13.91-12.85-24-26.77-24s-26 10.09-26 24v156.64A11.24 11.24 0 0 1 271.21 240A11 11 0 0 1 260 229V24c0-13.91-10.94-24-24.86-24S210 10.09 210 24v204.64A11.24 11.24 0 0 1 199.21 240A11 11 0 0 1 188 229V56c0-13.91-12.08-24-26-24s-26 11.09-26 25v187.64A11.24 11.24 0 0 1 125.21 256A11 11 0 0 1 114 245V120c0-13.91-11.08-24-25-24s-25.12 10.22-25 24v216c0 117.41 72 176 160 176h16c88 0 115.71-39.6 136-88l68.71-169c6.62-18 3.6-34.75-11.91-43.56"></svg:path>`,
})
export class FamiconsHandLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHandLeftOutlineIcon],svg[famicons-hand-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 320V144a32 32 0 0 1 32-32h0a32 32 0 0 1 32 32v112m0 0V80a32 32 0 0 1 32-32h0a32 32 0 0 1 32 32v160m64 1V96a32 32 0 0 1 32-32h0a32 32 0 0 1 32 32v224m-128-80V48a32 32 0 0 1 32-32h0a32 32 0 0 1 32 32v192"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 320c0 117.4 64 176 152 176s123.71-39.6 144-88l52.71-144c6.66-18.05 3.64-34.79-11.87-43.6h0c-15.52-8.82-35.91-4.28-44.31 11.68L336 320"></svg:path>`,
})
export class FamiconsHandLeftOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHandLeftSharpIcon],svg[famicons-hand-left-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M429.58 209.08c-15.06-6.62-32.38 1.31-38.5 17.62L356 312h-11.27V80c0-17.6-13.3-32-29.55-32c-16.26 0-29.55 14.4-29.55 32v151.75l-14.78.25V32c0-17.6-13.3-32-29.55-32s-29.55 14.4-29.55 32v199.75L197 232V64c0-17.6-13.3-32-29.55-32c-16.26 0-29.55 14.4-29.55 32v183.75l-14.8.25V128c0-17.6-13.3-32-29.55-32S64 110.4 64 128v216c0 75.8 37.13 168 169 168c40.8 0 79.42-7 100.66-21a121.4 121.4 0 0 0 33.72-33.31a138 138 0 0 0 16-31.78l62.45-175.14c6.17-16.31-1.19-35.06-16.25-41.69"></svg:path>`,
})
export class FamiconsHandLeftSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHandRightIcon],svg[famicons-hand-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M79.2 211.44c15.52-8.82 34.91-2.28 43.31 13.68l41.38 84.41a7 7 0 0 0 8.93 3.43a7 7 0 0 0 4.41-6.52V72c0-13.91 12.85-24 26.77-24s26 10.09 26 24v156.64A11.24 11.24 0 0 0 240.79 240A11 11 0 0 0 252 229V24c0-13.91 10.94-24 24.86-24S302 10.09 302 24v204.64A11.24 11.24 0 0 0 312.79 240A11 11 0 0 0 324 229V56c0-13.91 12.08-24 26-24s26 11.09 26 25v187.64A11.24 11.24 0 0 0 386.79 256A11 11 0 0 0 398 245V120c0-13.91 11.08-24 25-24s25.12 10.22 25 24v216c0 117.41-72 176-160 176h-16c-88 0-115.71-39.6-136-88L67.33 255c-6.66-18-3.64-34.75 11.87-43.56"></svg:path>`,
})
export class FamiconsHandRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHandRightOutlineIcon],svg[famicons-hand-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432 320V144a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v112m0 0V80a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v160m-64 1V96a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v224m128-80V48a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v192"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432 320c0 117.4-64 176-152 176s-123.71-39.6-144-88L83.33 264c-6.66-18.05-3.64-34.79 11.87-43.6h0c15.52-8.82 35.91-4.28 44.31 11.68L176 320"></svg:path>`,
})
export class FamiconsHandRightOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHandRightSharpIcon],svg[famicons-hand-right-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M82.42 209.08c15.06-6.62 32.38 1.31 38.5 17.62L156 312h11.27V80c0-17.6 13.3-32 29.55-32c16.26 0 29.55 14.4 29.55 32v151.75l14.78.25V32c0-17.6 13.3-32 29.55-32c16.3 0 29.55 14.4 29.55 32v199.75L315 232V64c0-17.6 13.3-32 29.55-32c16.26 0 29.55 14.4 29.55 32v183.75l14.78.25V128c0-17.6 13.3-32 29.55-32C434.7 96 448 110.4 448 128v216c0 75.8-37.13 168-169 168c-40.8 0-79.42-7-100.66-21a121.4 121.4 0 0 1-33.72-33.31a138 138 0 0 1-16-31.78L66.16 250.77c-6.11-16.31 1.2-35.06 16.26-41.69"></svg:path>`,
})
export class FamiconsHandRightSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHappyIcon],svg[famicons-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M184 208a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24m167.67 106.17c-12 40.3-50.2 69.83-95.62 69.83s-83.62-29.53-95.72-69.83a8 8 0 0 1 7.83-10.17h175.69a8 8 0 0 1 7.82 10.17M328 256a24 24 0 1 1 24-24a23.94 23.94 0 0 1-24 24"></svg:path>`,
})
export class FamiconsHappyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHappyOutlineIcon],svg[famicons-happy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="184" cy="232" r="24" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 0 1 7.82-10.17h175.69a8 8 0 0 1 7.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83"></svg:path><svg:circle cx="328" cy="232" r="24" fill="currentColor"></svg:circle><svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class FamiconsHappyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHappySharpIcon],svg[famicons-happy-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M328 208a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24m-144 0a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24m72.05 176c-45.42 0-83.75-29.49-95.72-69.83C159.29 310.65 158 304 158 304h196s-1.31 6.69-2.33 10.17c-11.78 40.36-50.2 69.83-95.62 69.83"></svg:path>`,
})
export class FamiconsHappySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHardwareChipIcon],svg[famicons-hardware-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M352 128H160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32m0 216a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Z"></svg:path><svg:rect width="192" height="192" x="160" y="160" fill="currentColor" rx="8" ry="8"></svg:rect><svg:path fill="currentColor" d="M464 192a16 16 0 0 0 0-32h-16v-32a64.07 64.07 0 0 0-64-64h-32V48a16 16 0 0 0-32 0v16h-48V48a16 16 0 0 0-32 0v16h-48V48a16 16 0 0 0-32 0v16h-32a64.07 64.07 0 0 0-64 64v32H48a16 16 0 0 0 0 32h16v48H48a16 16 0 0 0 0 32h16v48H48a16 16 0 0 0 0 32h16v32a64.07 64.07 0 0 0 64 64h32v16a16 16 0 0 0 32 0v-16h48v16a16 16 0 0 0 32 0v-16h48v16a16 16 0 0 0 32 0v-16h32a64.07 64.07 0 0 0 64-64v-32h16a16 16 0 0 0 0-32h-16v-48h16a16 16 0 0 0 0-32h-16v-48Zm-80 160a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32Z"></svg:path>`,
})
export class FamiconsHardwareChipIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHardwareChipOutlineIcon],svg[famicons-hardware-chip-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="352" height="352" x="80" y="80" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:rect width="224" height="224" x="144" y="144" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 80V48m80 32V48M176 80V48m80 416v-32m80 32v-32m-160 32v-32m256-176h32m-32 80h32m-32-160h32M48 256h32m-32 80h32M48 176h32"></svg:path>`,
})
export class FamiconsHardwareChipOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHardwareChipSharpIcon],svg[famicons-hardware-chip-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 160h192v192H160z"></svg:path><svg:path fill="currentColor" d="M480 198v-44h-32V88a24 24 0 0 0-24-24h-66V32h-44v32h-36V32h-44v32h-36V32h-44v32H88a24 24 0 0 0-24 24v66H32v44h32v36H32v44h32v36H32v44h32v66a24 24 0 0 0 24 24h66v32h44v-32h36v32h44v-32h36v32h44v-32h66a24 24 0 0 0 24-24v-66h32v-44h-32v-36h32v-44h-32v-36Zm-352-70h256v256H128Z"></svg:path>`,
})
export class FamiconsHardwareChipSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHeadsetIcon],svg[famicons-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M411.16 97.46C368.43 55.86 311.88 32 256 32S143.57 55.86 100.84 97.46C56.45 140.67 32 197 32 256c0 26.67 8.75 61.09 32.88 125.55S137 473 157.27 477.41c5.81 1.27 12.62 2.59 18.73 2.59a60.06 60.06 0 0 0 30-8l14-8c15.07-8.82 19.47-28.13 10.8-43.35l-86.92-152.57a31.73 31.73 0 0 0-43.57-11.76l-13.69 8a56.5 56.5 0 0 0-14 11.59a4 4 0 0 1-7-2A115 115 0 0 1 64 256c0-50.31 21-98.48 59.16-135.61C160 84.55 208.39 64 256 64s96 20.55 132.84 56.39C427 157.52 448 205.69 448 256a115 115 0 0 1-1.68 17.91a4 4 0 0 1-7 2a56.5 56.5 0 0 0-14-11.59l-13.69-8a31.73 31.73 0 0 0-43.57 11.76L281.2 420.65c-8.67 15.22-4.27 34.53 10.8 43.35l14 8a60.06 60.06 0 0 0 30 8c6.11 0 12.92-1.32 18.73-2.59C375 473 423 446 447.12 381.55S480 282.67 480 256c0-59-24.45-115.33-68.84-158.54"></svg:path>`,
})
export class FamiconsHeadsetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHeadsetOutlineIcon],svg[famicons-headset-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M83 384c-13-33-35-93.37-35-128C48 141.12 149.33 48 256 48s208 93.12 208 208c0 34.63-23 97-35 128"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="m108.39 270.13l-13.69 8c-30.23 17.7-31.7 72.41-3.38 122.2s75.87 75.81 106.1 58.12l13.69-8a16.16 16.16 0 0 0 5.78-21.87L130 276a15.74 15.74 0 0 0-21.61-5.87Zm295.22 0l13.69 8c30.23 17.69 31.74 72.4 3.38 122.19s-75.87 75.81-106.1 58.12l-13.69-8a16.16 16.16 0 0 1-5.78-21.87L382 276a15.74 15.74 0 0 1 21.61-5.87Z"></svg:path>`,
})
export class FamiconsHeadsetOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHeadsetSharpIcon],svg[famicons-headset-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M411.16 97.45C368.43 55.85 311.88 32 256 32S143.57 55.85 100.84 97.45C56.45 140.67 32 196 32 256s26.84 118.49 45.42 152.25S121 480 144 480c32 0 96-32 96-32L128 240l-54.42 31.73a176 176 0 0 1-1-18.84c0-48.57 19.32-94.1 56.15-130C164.24 88.34 210 70 256 70s91.73 18.34 127.27 52.93c36.83 35.86 56.14 81.39 56.14 130a176 176 0 0 1-1 18.82L384 240L272 448s64 32 96 32c23 0 48-38 66.58-71.75S480 316 480 256s-24.45-115.33-68.84-158.55"></svg:path>`,
})
export class FamiconsHeadsetSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHeartIcon],svg[famicons-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 448a32 32 0 0 1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8c-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 0 0 9.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64c.54 54.21-18.63 104.26-58.61 153c-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 0 1-18 5.56"></svg:path>`,
})
export class FamiconsHeartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHeartCircleIcon],svg[famicons-heart-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m74.69 252.82c-9.38 11.44-26.4 29.73-65.7 56.41a15.93 15.93 0 0 1-18 0c-39.3-26.68-56.32-45-65.7-56.41c-20-24.37-29.58-49.4-29.3-76.5c.31-31.06 25.22-56.33 55.53-56.33c20.4 0 35 10.63 44.1 20.41a6 6 0 0 0 8.72 0c9.11-9.78 23.7-20.41 44.1-20.41c30.31 0 55.22 25.27 55.53 56.33c.3 27.1-9.29 52.13-29.28 76.5"></svg:path>`,
})
export class FamiconsHeartCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHeartCircleOutlineIcon],svg[famicons-heart-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="M256 360a16 16 0 0 1-9-2.78c-39.3-26.68-56.32-45-65.7-56.41c-20-24.37-29.58-49.4-29.3-76.5c.31-31.06 25.22-56.33 55.53-56.33c20.4 0 35 10.63 44.1 20.41a6 6 0 0 0 8.72 0c9.11-9.78 23.7-20.41 44.1-20.41c30.31 0 55.22 25.27 55.53 56.33c.28 27.1-9.31 52.13-29.3 76.5c-9.38 11.44-26.4 29.73-65.7 56.41A16 16 0 0 1 256 360"></svg:path>`,
})
export class FamiconsHeartCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHeartCircleSharpIcon],svg[famicons-heart-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m74.69 252.82c-8.5 10.36-39.69 38.48-74.69 63.51c-35-25-66.19-53.15-74.69-63.51c-20-24.37-29.58-49.4-29.3-76.5c.31-31.06 25.22-56.33 55.53-56.33c22 0 37.3 12.41 46.19 22.76l2.27 2.75l2.27-2.75C267 180.29 282.42 168 304.46 168c30.31 0 55.22 25.27 55.53 56.33c.28 27.09-9.31 52.12-29.3 76.49"></svg:path>`,
})
export class FamiconsHeartCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHeartDislikeIcon],svg[famicons-heart-dislike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M417.84 448a16 16 0 0 1-11.35-4.72l-365.84-368a16 16 0 1 1 22.7-22.56l365.83 368A16 16 0 0 1 417.84 448M364.92 80c-44.09 0-74.61 24.82-92.39 45.5a6 6 0 0 1-9.06 0C245.69 104.82 215.16 80 171.08 80a107.7 107.7 0 0 0-31 4.54l269.13 270.7c3-3.44 5.7-6.64 8.14-9.6c40-48.75 59.15-98.79 58.61-153C475.37 130.53 425.54 80 364.92 80M69 149.15a115.1 115.1 0 0 0-9 43.49c-.54 54.21 18.63 104.25 58.61 153c18.77 22.87 52.8 59.45 131.39 112.8a31.88 31.88 0 0 0 36 0c20.35-13.82 37.7-26.5 52.58-38.12Z"></svg:path>`,
})
export class FamiconsHeartDislikeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHeartDislikeCircleIcon],svg[famicons-heart-dislike-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m23.3 299.19c-4.41 3.2-9.16 6.55-14.31 10a15.93 15.93 0 0 1-18 0c-39.3-26.68-56.32-45-65.7-56.41c-20-24.37-29.58-49.4-29.3-76.5v-.64a4 4 0 0 1 6.82-2.72l120.95 120.2a4 4 0 0 1-.46 6.07m68 16.12a16 16 0 0 1-22.62 0l-176-176a16 16 0 0 1 22.62-22.62l176 176a16 16 0 0 1 .01 22.62Zm-14.1-65.62a3.92 3.92 0 0 1-6 .37l-124-123.21A4 4 0 0 1 206 168h1.55c20.4 0 35 10.64 44.11 20.42a5.93 5.93 0 0 0 8.7 0c9.11-9.78 23.71-20.42 44.11-20.42c30.31 0 55.22 25.27 55.53 56.33c.26 25.93-8.52 49.97-26.8 73.36"></svg:path>`,
})
export class FamiconsHeartDislikeCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHeartDislikeCircleOutlineIcon],svg[famicons-heart-dislike-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="M333.2 297.69c18.28-23.39 27.06-47.43 26.79-73.37c-.31-31.06-25.22-56.33-55.53-56.33c-20.4 0-35 10.64-44.11 20.42a5.93 5.93 0 0 1-8.7 0c-9.11-9.78-23.71-20.42-44.11-20.42L206 168a4 4 0 0 0-2.75 6.84l124 123.21a3.92 3.92 0 0 0 5.95-.36M158.84 221a4 4 0 0 0-6.82 2.72v.64c-.28 27.1 9.31 52.13 29.3 76.5c9.38 11.44 26.4 29.73 65.7 56.41a15.93 15.93 0 0 0 18 0c5.15-3.49 9.9-6.84 14.31-10a4 4 0 0 0 .46-6.07ZM336 368a15.92 15.92 0 0 1-11.31-4.69l-176-176a16 16 0 0 1 22.62-22.62l176 176A16 16 0 0 1 336 368"></svg:path>`,
})
export class FamiconsHeartDislikeCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHeartDislikeCircleSharpIcon],svg[famicons-heart-dislike-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m63.73 310.36l-183.14-182.3l22.74-22.51l183.19 182.36Zm-63.51 4.86c-35.36-25-66.31-51.92-74.91-62.4c-20-24.37-29.58-49.4-29.3-76.5a58 58 0 0 1 .85-9.31l130.21 129.4c-3.43 2.59-16.21 11.45-26.85 18.81m74.47-62.4l-.31.38L197.33 169a54 54 0 0 1 10.21-1a59.34 59.34 0 0 1 44.1 19.41L256 192l4.36-4.6a59.34 59.34 0 0 1 44.1-19.4c30.31 0 55.22 25.27 55.53 56.33c.28 27.09-9.31 52.12-29.3 76.49"></svg:path>`,
})
export class FamiconsHeartDislikeCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHeartDislikeOutlineIcon],svg[famicons-heart-dislike-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M417.84 448a15.94 15.94 0 0 1-11.35-4.72L40.65 75.26a16 16 0 0 1 22.7-22.56l365.83 368a16 16 0 0 1-11.34 27.3M364.92 80c-48.09 0-80 29.55-96.92 51c-16.88-21.48-48.83-51-96.92-51a107.4 107.4 0 0 0-31 4.55L168 112c22.26 0 45.81 9 63.94 26.67a123 123 0 0 1 21.75 28.47a16 16 0 0 0 28.6 0a123 123 0 0 1 21.77-28.51C322.19 121 342.66 112 364.92 112c43.15 0 78.62 36.33 79.07 81c.54 53.69-22.75 99.55-57.38 139.52l22.63 22.77c3-3.44 5.7-6.64 8.14-9.6c40-48.75 59.15-98.8 58.61-153C475.37 130.52 425.54 80 364.92 80M268 432C180.38 372.51 91 297.6 92 193a83.7 83.7 0 0 1 2.24-18.39L69 149.14a115.1 115.1 0 0 0-9 43.49c-.54 54.22 18.63 104.27 58.61 153c18.77 22.87 52.8 59.45 131.39 112.8a31.84 31.84 0 0 0 36 0c20.35-13.81 37.7-26.5 52.58-38.11l-22.66-22.81C300.25 409.6 284.09 421.05 268 432"></svg:path>`,
})
export class FamiconsHeartDislikeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHeartDislikeSharpIcon],svg[famicons-heart-dislike-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m32 64.45l389.47 389.94l22.84-22.47L54.85 42zm30.67 128.46c-.56 55.63 19.77 106.94 62.16 156.88c40.25 47.42 94.56 79.67 137.47 108.21l9 6l9-6c18.49-12.3 39.1-25.3 59.79-39.89L71.74 149.28a114.6 114.6 0 0 0-9.07 43.63m355.16 156.88c42.39-49.94 62.72-101.25 62.16-156.88c-.63-62-50.61-112.54-111.43-112.54c-48.26 0-80.35 28-97.23 48.17c-16.88-20.2-49-48.17-97.23-48.17A108.2 108.2 0 0 0 142.84 85l270 270.48c1.71-1.89 3.37-3.78 4.99-5.69"></svg:path>`,
})
export class FamiconsHeartDislikeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHeartHalfIcon],svg[famicons-heart-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352.92 64c-48.09 0-80 29.54-96.92 51c-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153c18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0 0 36 0c78.59-53.35 112.62-89.93 131.39-112.81c40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64M256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1 1 0 0 1 .08-.16a123 123 0 0 1 21.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416"></svg:path>`,
})
export class FamiconsHeartHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHeartHalfOutlineIcon],svg[famicons-heart-half-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352.92 64c-48.09 0-80 29.54-96.92 51c-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153c18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0 0 36 0c78.59-53.35 112.62-89.93 131.39-112.81c40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64M256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1 1 0 0 1 .08-.16a123 123 0 0 1 21.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416"></svg:path>`,
})
export class FamiconsHeartHalfOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHeartHalfSharpIcon],svg[famicons-heart-half-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352.92 64c-48.11 0-80.1 28-96.92 48.21C239.18 92 207.19 64 159.08 64C98.46 64 48.63 114.54 48 176.65c-.56 55.68 19.71 107 62 157c40.12 47.46 94.25 79.75 137 108.32l9 6l9-6c42.78-28.57 96.91-60.86 137-108.32c42.25-50 62.52-101.35 62-157C463.37 114.54 413.54 64 352.92 64m24.67 249c-31.78 37.6-74.68 65.75-112.52 90.59l-9.07 6V162.23l24.59-29.54C294.53 116 318.38 96 352.92 96c43.15 0 78.62 36.32 79.07 81a178.6 178.6 0 0 1-12.69 68.59c-9.03 22.84-22.67 44.91-41.71 67.41"></svg:path>`,
})
export class FamiconsHeartHalfSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHeartOutlineIcon],svg[famicons-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81c-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42c-.54-52.67-42.32-96.81-95.08-96.81"></svg:path>`,
})
export class FamiconsHeartOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHeartSharpIcon],svg[famicons-heart-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 448l-9-6c-42.78-28.57-96.91-60.86-137-108.32c-42.25-50-62.52-101.35-62-157C48.63 114.54 98.46 64 159.08 64c48.11 0 80.1 28 96.92 48.21C272.82 92 304.81 64 352.92 64c60.62 0 110.45 50.54 111.08 112.65c.56 55.68-19.71 107-62 157c-40.09 47.49-94.22 79.78-137 108.35Z"></svg:path>`,
})
export class FamiconsHeartSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHelpIcon],svg[famicons-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="40" d="M160 164s1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 298.36 248 324"></svg:path><svg:circle cx="248" cy="399.99" r="32" fill="currentColor"></svg:circle>`,
})
export class FamiconsHelpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHelpBuoyIcon],svg[famicons-help-buoy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M192.13 260.18a64 64 0 1 1 59.69 59.69a64.07 64.07 0 0 1-59.69-59.69m240-66.64l-96.37 5.84a4.06 4.06 0 0 1-3.44-1.59a96 96 0 0 0-18.07-18.07a4.06 4.06 0 0 1-1.59-3.44l5.84-96.37a4 4 0 0 1 5.42-3.51A193 193 0 0 1 435.6 188.12a4 4 0 0 1-3.51 5.42ZM193.54 79.91l5.84 96.37a4.06 4.06 0 0 1-1.59 3.44a96 96 0 0 0-18.07 18.07a4.06 4.06 0 0 1-3.44 1.59l-96.37-5.84a4 4 0 0 1-3.51-5.42A193 193 0 0 1 188.12 76.4a4 4 0 0 1 5.42 3.51M79.91 318.46l96.37-5.84a4.06 4.06 0 0 1 3.44 1.59a96 96 0 0 0 18.07 18.07a4.06 4.06 0 0 1 1.59 3.44l-5.84 96.37a4 4 0 0 1-5.42 3.51A193 193 0 0 1 76.4 323.88a4 4 0 0 1 3.51-5.42m238.55 113.63l-5.84-96.37a4.06 4.06 0 0 1 1.59-3.44a96 96 0 0 0 18.07-18.07a4.06 4.06 0 0 1 3.44-1.59l96.37 5.84a4 4 0 0 1 3.51 5.42A193 193 0 0 1 323.88 435.6a4 4 0 0 1-5.42-3.51"></svg:path>`,
})
export class FamiconsHelpBuoyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHelpBuoyOutlineIcon],svg[famicons-help-buoy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m208 54l8 132m80 0l8-132m-96 404l8-132m80 0l8 132m154-250l-132 8m0 80l132 8M54 208l132 8m0 80l-132 8"></svg:path>`,
})
export class FamiconsHelpBuoyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHelpBuoySharpIcon],svg[famicons-help-buoy-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224s224-100.29 224-224S379.71 32 256 32m-64 224a64 64 0 1 1 64 64a64 64 0 0 1-64-64m237.24-62.29L342.91 199a104.9 104.9 0 0 0-29.86-29.86l5.24-86.33a185 185 0 0 1 111 111Zm-303.35-67.82a183.4 183.4 0 0 1 67.82-43.13l5.29 86.33A104.9 104.9 0 0 0 169.09 199l-86.33-5.24a183.4 183.4 0 0 1 43.13-67.87m-43.13 192.4l86.33-5.24A104.9 104.9 0 0 0 199 342.91l-5.24 86.33a185 185 0 0 1-111-110.95m303.35 67.82a183.4 183.4 0 0 1-67.82 43.13l-5.24-86.33a104.9 104.9 0 0 0 29.86-29.86l86.33 5.24a183.4 183.4 0 0 1-43.13 67.82"></svg:path>`,
})
export class FamiconsHelpBuoySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHelpCircleIcon],svg[famicons-help-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64m-6 304a20 20 0 1 1 20-20a20 20 0 0 1-20 20m33.44-102C267.23 276.88 265 286.85 265 296a14 14 0 0 1-28 0c0-21.91 10.08-39.33 30.82-53.26C287.1 229.8 298 221.6 298 203.57c0-12.26-7-21.57-21.49-28.46c-3.41-1.62-11-3.2-20.34-3.09c-11.72.15-20.82 2.95-27.83 8.59C215.12 191.25 214 202.83 214 203a14 14 0 1 1-28-1.35c.11-2.43 1.8-24.32 24.77-42.8c11.91-9.58 27.06-14.56 45-14.78c12.7-.15 24.63 2 32.72 5.82C312.7 161.34 326 180.43 326 203.57c0 33.83-22.61 49.02-42.56 62.43"></svg:path>`,
})
export class FamiconsHelpCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHelpCircleOutlineIcon],svg[famicons-help-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="28" d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45c10 4.76 29.47 16.38 29.47 41.09c0 26-17 37.81-36.37 50.8S251 281.43 251 296"></svg:path><svg:circle cx="250" cy="348" r="20" fill="currentColor"></svg:circle>`,
})
export class FamiconsHelpCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHelpCircleSharpIcon],svg[famicons-help-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M288.55 150.84c-8.09-3.86-20-6-32.72-5.82c-18 .22-33.13 5.2-45 14.78c-23 18.48-24.55 40.37-24.77 42.8a61.7 61.7 0 0 0-.09 12a3 3 0 0 0 3 2.69h21.23a3 3 0 0 0 3-3A66 66 0 0 1 214 204c0-.11 1.14-11.7 14.36-22.34c7-5.64 16.11-8.44 27.83-8.59c9.32-.11 16.93 1.47 20.34 3.09C291 183 298 192.31 298 204.57c0 18-10.9 26.23-30.18 39.18C247.08 257.68 237 275.1 237 297v11a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-11c0-9.16 2.23-19.13 18.44-30c19.95-13.41 42.56-28.6 42.56-62.43c0-23.14-13.3-42.23-37.45-53.73"></svg:path><svg:path fill="currentColor" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64m10.44 302h-30.21a2.57 2.57 0 0 1-2.56-2.57v-30.2a2.57 2.57 0 0 1 2.56-2.57h30.21a2.57 2.57 0 0 1 2.56 2.57v30.2a2.57 2.57 0 0 1-2.56 2.57m17-99C267.23 277.88 265 287.85 265 297v11a3 3 0 0 1-3 3h-22a3 3 0 0 1-3-3v-11c0-21.91 10.08-39.33 30.82-53.26C287.1 230.8 298 222.6 298 204.57c0-12.26-7-21.57-21.49-28.46c-3.41-1.62-11-3.2-20.34-3.09c-11.72.15-20.82 2.95-27.83 8.59C215.12 192.25 214 203.84 214 204a66 66 0 0 0-.84 10.28a3 3 0 0 1-3 3h-21.25a3 3 0 0 1-3-2.69a61.7 61.7 0 0 1 .09-12c.22-2.43 1.8-24.32 24.77-42.8c11.91-9.58 27.06-14.56 45-14.78c12.7-.15 24.63 2 32.72 5.82c24.21 11.51 37.51 30.6 37.51 53.74c0 33.83-22.61 49.02-42.56 62.43"></svg:path>`,
})
export class FamiconsHelpCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHelpOutlineIcon],svg[famicons-help-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="40" d="M160 164s1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 298.36 248 324"></svg:path><svg:circle cx="248" cy="399.99" r="32" fill="currentColor"></svg:circle>`,
})
export class FamiconsHelpOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHelpSharpIcon],svg[famicons-help-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="40" d="M160 164c0-10 1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 290.36 248 316"></svg:path><svg:rect width="56" height="56" x="220" y="368" fill="currentColor" rx="3.5" ry="3.5"></svg:rect>`,
})
export class FamiconsHelpSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHomeIcon],svg[famicons-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"></svg:path><svg:path fill="currentColor" d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97"></svg:path>`,
})
export class FamiconsHomeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHomeOutlineIcon],svg[famicons-home-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"></svg:path>`,
})
export class FamiconsHomeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHomeSharpIcon],svg[famicons-home-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 174.74V48h-80v58.45L256 32L0 272h64v208h144V320h96v160h144V272h64z"></svg:path>`,
})
export class FamiconsHomeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHourglassIcon],svg[famicons-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M415.7 427.13c-8.74-76.89-43.83-108.76-69.46-132C328.52 279 320 270.61 320 256c0-14.41 8.49-22.64 26.16-38.44c25.93-23.17 61.44-54.91 69.56-132.84a47 47 0 0 0-12-36.26A50.3 50.3 0 0 0 366.39 32H145.61a50.34 50.34 0 0 0-37.39 16.46a47.05 47.05 0 0 0-11.94 36.26c8.09 77.68 43.47 109.19 69.3 132.19C183.42 232.8 192 241.09 192 256c0 15.1-8.6 23.56-26.5 39.75c-25.5 23.1-60.5 54.73-69.2 131.38a46.6 46.6 0 0 0 11.7 36.2A50.44 50.44 0 0 0 145.61 480h220.78A50.44 50.44 0 0 0 404 463.33a46.6 46.6 0 0 0 11.7-36.2M343.3 432H169.13c-15.6 0-20-18-9.06-29.16C186.55 376 240 356.78 240 326V224c0-19.85-38-35-61.51-67.2c-3.88-5.31-3.49-12.8 6.37-12.8h142.73c8.41 0 10.22 7.43 6.4 12.75C310.82 189 272 204.05 272 224v102c0 30.53 55.71 47 80.4 76.87c9.95 12.04 6.47 29.13-9.1 29.13"></svg:path>`,
})
export class FamiconsHourglassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHourglassOutlineIcon],svg[famicons-hourglass-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M145.61 464h220.78c19.8 0 35.55-16.29 33.42-35.06C386.06 308 304 310 304 256s83.11-51 95.8-172.94c2-18.78-13.61-35.06-33.41-35.06H145.61c-19.8 0-35.37 16.28-33.41 35.06C124.89 205 208 201 208 256s-82.06 52-95.8 172.94c-2.14 18.77 13.61 35.06 33.41 35.06"></svg:path><svg:path fill="currentColor" d="M343.3 432H169.13c-15.6 0-20-18-9.06-29.16C186.55 376 240 356.78 240 326V224c0-19.85-38-35-61.51-67.2c-3.88-5.31-3.49-12.8 6.37-12.8h142.73c8.41 0 10.23 7.43 6.4 12.75C310.82 189 272 204.05 272 224v102c0 30.53 55.71 47 80.4 76.87c9.95 12.04 6.47 29.13-9.1 29.13"></svg:path>`,
})
export class FamiconsHourglassOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsHourglassSharpIcon],svg[famicons-hourglass-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 32H96v112l108 112L96 368v112h320V368L308 256l108-112ZM272 224v112l91 96H148l92-96V224l-80-80h192Z"></svg:path>`,
})
export class FamiconsHourglassSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsIceCreamIcon],svg[famicons-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183 352c-21.84-.52-39-18.9-39-40.74v-34.07a8 8 0 0 0-6-7.74c-33.75-8.85-58-39.71-58-77.45a80.14 80.14 0 0 1 66.27-78.82a8 8 0 0 0 6.62-6.83a104 104 0 0 1 206.22 0a8 8 0 0 0 6.62 6.83A80 80 0 0 1 352 272a74.33 74.33 0 0 1-47.45-17.41a7.93 7.93 0 0 0-9.92-.14A62.9 62.9 0 0 1 256 268a80.5 80.5 0 0 1-21.8-3.18a8 8 0 0 0-10.2 7.69V312a40 40 0 0 1-41 40"></svg:path><svg:path fill="currentColor" d="M263.39 299.7a8 8 0 0 0-7.39 7.91V312a72.11 72.11 0 0 1-50.69 68.76a8 8 0 0 0-4.91 10.78l40.91 94.8A16 16 0 0 0 256 496a16 16 0 0 0 14.69-9.7l73.78-172.15a8 8 0 0 0-6.2-11.07a106.3 106.3 0 0 1-35.9-11.59a8 8 0 0 0-7.13-.2a95 95 0 0 1-31.85 8.41"></svg:path>`,
})
export class FamiconsIceCreamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsIceCreamOutlineIcon],svg[famicons-ice-cream-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m352 256l-96 224l-62-145"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M299.42 223.48C291.74 239.75 275.18 252 256 252c-13.1 0-27-5-33.63-9.76C216.27 237.87 208 240 208 250v62a24.07 24.07 0 0 1-24 24h0a24.07 24.07 0 0 1-24-24v-56h-2c-35.35 0-62-28.65-62-64a64 64 0 0 1 64-64h8v-8a88 88 0 0 1 176 0v8h8a64 64 0 0 1 0 128c-21.78 0-42-13-52.59-32.51Z"></svg:path>`,
})
export class FamiconsIceCreamOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsIceCreamSharpIcon],svg[famicons-ice-cream-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M359.72 112.37a104 104 0 0 0-207.44 0A80.12 80.12 0 0 0 80 192c0 39.36 26.37 71.23 62.38 78.46a2 2 0 0 1 1.62 2v38.83c0 21.84 17.2 40.22 39 40.74a40 40 0 0 0 41-40v-47.84a2 2 0 0 1 2.72-1.86A83.5 83.5 0 0 0 256 268a63.18 63.18 0 0 0 42.24-16.59a2 2 0 0 1 2.74 0A74.63 74.63 0 0 0 352 272a80 80 0 0 0 7.72-159.63"></svg:path><svg:path fill="currentColor" d="M256 300v12a72.1 72.1 0 0 1-58.21 70.64L256 496l92.06-192.08a105.3 105.3 0 0 1-49.18-14.36A93.75 93.75 0 0 1 256 300"></svg:path>`,
})
export class FamiconsIceCreamSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsIdCardIcon],svg[famicons-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 16H144a64.07 64.07 0 0 0-64 64v352a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m-34.52 268.51c7.57 8.17 11.27 19.16 10.39 30.94C342.14 338.91 324.25 358 304 358s-38.17-19.09-39.88-42.55c-.86-11.9 2.81-22.91 10.34-31S292.4 272 304 272a39.65 39.65 0 0 1 29.48 12.51M192 80a16 16 0 0 1 16-16h96a16 16 0 0 1 0 32h-96a16 16 0 0 1-16-16m189 363.83a12.05 12.05 0 0 1-9.31 4.17H236.31a12.05 12.05 0 0 1-9.31-4.17a13 13 0 0 1-2.76-10.92c3.25-17.56 13.38-32.31 29.3-42.66C267.68 381.06 285.6 376 304 376s36.32 5.06 50.46 14.25c15.92 10.35 26.05 25.1 29.3 42.66a13 13 0 0 1-2.76 10.92"></svg:path>`,
})
export class FamiconsIdCardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsIdCardOutlineIcon],svg[famicons-id-card-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="320" height="448" x="96" y="32" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M208 80h96"></svg:path><svg:path fill="currentColor" d="M333.48 284.51A39.65 39.65 0 0 0 304 272c-11.6 0-22.09 4.41-29.54 12.43s-11.2 19.12-10.34 31C265.83 338.91 283.72 358 304 358s38.14-19.09 39.87-42.55c.88-11.78-2.82-22.77-10.39-30.94M371.69 448H236.31a12.05 12.05 0 0 1-9.31-4.17a13 13 0 0 1-2.76-10.92c3.25-17.56 13.38-32.31 29.3-42.66C267.68 381.06 285.6 376 304 376s36.32 5.06 50.46 14.25c15.92 10.35 26.05 25.1 29.3 42.66a13 13 0 0 1-2.76 10.92a12.05 12.05 0 0 1-9.31 4.17"></svg:path>`,
})
export class FamiconsIdCardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsIdCardSharpIcon],svg[famicons-id-card-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408 16H104a24 24 0 0 0-24 24v432a24 24 0 0 0 24 24h304a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24m-61.1 296.77a43 43 0 1 1-40.71-40.71a43 43 0 0 1 40.71 40.71M192 64h128v32H192Zm192 384H224v-24.6c0-32.72 53.27-49.21 80-49.21s80 16.49 80 49.21Z"></svg:path>`,
})
export class FamiconsIdCardSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsImageIcon],svg[famicons-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 64H96a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V128a64.07 64.07 0 0 0-64-64m-80 64a48 48 0 1 1-48 48a48.05 48.05 0 0 1 48-48M96 416a32 32 0 0 1-32-32v-67.63l94.84-84.3a48.06 48.06 0 0 1 65.8 1.9l64.95 64.81L172.37 416Zm352-32a32 32 0 0 1-32 32H217.63l121.42-121.42a47.72 47.72 0 0 1 61.64-.16L448 333.84Z"></svg:path>`,
})
export class FamiconsImageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsImageOutlineIcon],svg[famicons-image-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="352" x="48" y="80" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:circle cx="336" cy="176" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m304 335.79l-90.66-90.49a32 32 0 0 0-43.87-1.3L48 352m176 80l123.34-123.34a32 32 0 0 1 43.11-2L464 368"></svg:path>`,
})
export class FamiconsImageOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsImageSharpIcon],svg[famicons-image-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M456 64H56a24 24 0 0 0-24 24v336a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V88a24 24 0 0 0-24-24m-124.38 64.2a48 48 0 1 1-43.42 43.42a48 48 0 0 1 43.42-43.42M76 416a12 12 0 0 1-12-12v-87.63L192.64 202l96.95 96.75L172.37 416Zm372-12a12 12 0 0 1-12 12H217.63l149.53-149.53L448 333.84Z"></svg:path>`,
})
export class FamiconsImageSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsImagesIcon],svg[famicons-images-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M450.29 112H142c-34 0-62 27.51-62 61.33v245.34c0 33.82 28 61.33 62 61.33h308c34 0 62-26.18 62-60V173.33c0-33.82-27.68-61.33-61.71-61.33m-77.15 61.34a46 46 0 1 1-46.28 46a46.19 46.19 0 0 1 46.28-46.01Zm-231.55 276c-17 0-29.86-13.75-29.86-30.66v-64.83l90.46-80.79a46.54 46.54 0 0 1 63.44 1.83L328.27 337l-113 112.33ZM480 418.67a30.67 30.67 0 0 1-30.71 30.66H259L376.08 333a46.24 46.24 0 0 1 59.44-.16L480 370.59Z"></svg:path><svg:path fill="currentColor" d="M384 32H64A64 64 0 0 0 0 96v256a64.11 64.11 0 0 0 48 62V152a72 72 0 0 1 72-72h326a64.11 64.11 0 0 0-62-48"></svg:path>`,
})
export class FamiconsImagesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsImagesOutlineIcon],svg[famicons-images-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M432 112V96a48.14 48.14 0 0 0-48-48H64a48.14 48.14 0 0 0-48 48v256a48.14 48.14 0 0 0 48 48h16"></svg:path><svg:rect width="400" height="336" x="96" y="128" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="45.99" ry="45.99"></svg:rect><svg:ellipse cx="372.92" cy="219.64" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" rx="30.77" ry="30.55"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M342.15 372.17L255 285.78a30.93 30.93 0 0 0-42.18-1.21L96 387.64M265.23 464l118.59-117.73a31 31 0 0 1 41.46-1.87L496 402.91"></svg:path>`,
})
export class FamiconsImagesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsImagesSharpIcon],svg[famicons-images-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="373.14" cy="219.33" fill="none" rx="46.29" ry="46"></svg:ellipse><svg:path fill="currentColor" d="M80 132v328a20 20 0 0 0 20 20h392a20 20 0 0 0 20-20V132a20 20 0 0 0-20-20H100a20 20 0 0 0-20 20m293.14 41.33a46 46 0 1 1-46.28 46a46.19 46.19 0 0 1 46.28-46m-261.41 276v-95.48l122.76-110.2L328.27 337l-113 112.33Zm368.27 0H259l144.58-144L480 370.59Z"></svg:path><svg:path fill="currentColor" d="M20 32A20 20 0 0 0 0 52v344a20 20 0 0 0 20 20h28V100a20 20 0 0 1 20-20h380V52a20 20 0 0 0-20-20Z"></svg:path>`,
})
export class FamiconsImagesSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsInfiniteIcon],svg[famicons-infinite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c30 0 56.45-13.18 78-32m48-64s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-29.37 0-56.66 13.75-78 32"></svg:path>`,
})
export class FamiconsInfiniteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsInfiniteOutlineIcon],svg[famicons-infinite-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c37.51 0 71-22.41 94-48m32-48s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-37.51 0-71 22.41-94 48"></svg:path>`,
})
export class FamiconsInfiniteOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsInfiniteSharpIcon],svg[famicons-infinite-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M382 136c-40.87 0-73.46 20.53-93.6 37.76l-.71.61l-11.47 12.47l25.32 41.61l18.74-18.79C339.89 193.1 361.78 184 382 184c40.8 0 74 32.3 74 72s-33.2 72-74 72c-62 0-104.14-81.95-104.56-82.78C275 240.29 221.56 136 130 136C62.73 136 8 189.83 8 256s54.73 120 122 120c32.95 0 65.38-13.11 93.79-37.92l.61-.54l11.38-12.38l-25.33-41.61l-18.83 18.88C172 319.4 151.26 328 130 328c-40.8 0-74-32.3-74-72s33.2-72 74-72c62 0 104.14 81.95 104.56 82.78C237 271.71 290.44 376 382 376c67.27 0 122-53.83 122-120s-54.73-120-122-120"></svg:path>`,
})
export class FamiconsInfiniteSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsInformationIcon],svg[famicons-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="40" d="M196 220h64v172"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="40" d="M187 396h138"></svg:path><svg:path fill="currentColor" d="M256 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsInformationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsInformationCircleIcon],svg[famicons-information-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200s200-89.72 200-200S366.28 56 256 56m0 82a26 26 0 1 1-26 26a26 26 0 0 1 26-26m48 226h-88a16 16 0 0 1 0-32h28v-88h-16a16 16 0 0 1 0-32h32a16 16 0 0 1 16 16v104h28a16 16 0 0 1 0 32"></svg:path>`,
})
export class FamiconsInformationCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsInformationCircleOutlineIcon],svg[famicons-information-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184s184-82.39 184-184S349.61 64 248 64Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M220 220h32v116"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 340h88"></svg:path><svg:path fill="currentColor" d="M248 130a26 26 0 1 0 26 26a26 26 0 0 0-26-26"></svg:path>`,
})
export class FamiconsInformationCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsInformationCircleSharpIcon],svg[famicons-information-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200s200-89.72 200-200S366.28 56 256 56m0 82a26 26 0 1 1-26 26a26 26 0 0 1 26-26m64 226H200v-32h44v-88h-32v-32h64v120h44Z"></svg:path>`,
})
export class FamiconsInformationCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsInformationOutlineIcon],svg[famicons-information-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="40" d="M196 220h64v172"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="40" d="M187 396h138"></svg:path><svg:path fill="currentColor" d="M256 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsInformationOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsInformationSharpIcon],svg[famicons-information-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="40" d="M196 220h64v172m-73 4h138"></svg:path><svg:path fill="currentColor" d="M256 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsInformationSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsInvertModeIcon],svg[famicons-invert-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="currentColor" d="M256 176v160a80 80 0 0 0 0-160m0-128v128a80 80 0 0 0 0 160v128c-114.88 0-208-93.12-208-208S141.12 48 256 48"></svg:path>`,
})
export class FamiconsInvertModeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsInvertModeOutlineIcon],svg[famicons-invert-mode-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="currentColor" d="M256 176v160a80 80 0 0 1 0-160m0-128v128a80 80 0 0 1 0 160v128c114.88 0 208-93.12 208-208S370.88 48 256 48"></svg:path>`,
})
export class FamiconsInvertModeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsInvertModeSharpIcon],svg[famicons-invert-mode-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M256 432v-96a80 80 0 0 1 0-160V80c97.05 0 176 79 176 176s-78.95 176-176 176"></svg:path><svg:path fill="currentColor" d="M336 256a80 80 0 0 0-80-80v160a80 80 0 0 0 80-80"></svg:path>`,
})
export class FamiconsInvertModeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsJournalIcon],svg[famicons-journal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M290 32H144a64.07 64.07 0 0 0-64 64v320a64.07 64.07 0 0 0 64 64h146Zm78 0h-18v448h18a64.07 64.07 0 0 0 64-64V96a64.07 64.07 0 0 0-64-64"></svg:path>`,
})
export class FamiconsJournalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsJournalOutlineIcon],svg[famicons-journal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="320" height="416" x="96" y="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="60" d="M320 48v416"></svg:path>`,
})
export class FamiconsJournalOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsJournalSharpIcon],svg[famicons-journal-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M290 32H104a24 24 0 0 0-24 24v400a24 24 0 0 0 24 24h186Zm118 0h-58v448h58a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24"></svg:path>`,
})
export class FamiconsJournalSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsKeyIcon],svg[famicons-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.1 167.17c0 13 0 25.6 4.1 37.4c-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 0 0-6.7 15c0 8.5 5.2 16.7 9.6 21.3c6.6 6.9 34.8 33 40 28c15.4-15 18.5-19 24.8-25.2c9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4s15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2c5-4.6 8.6-8.9 8.7-15.6c.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5s22.8-15.5 24.1-21.6s-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4c15.5 6.7 29.6 9.4 47.7 9.4c68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17M400 144a32 32 0 1 1-32-32a32 32 0 0 1 32 32"></svg:path>`,
})
export class FamiconsKeyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsKeyOutlineIcon],svg[famicons-key-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M218.1 167.17c0 13 0 25.6 4.1 37.4c-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 0 0-6.7 15c0 8.5 5.2 16.7 9.6 21.3c6.6 6.9 34.8 33 40 28c15.4-15 18.5-19 24.8-25.2c9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4s15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2c5-4.6 8.6-8.9 8.7-15.6c.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5s22.8-15.5 24.1-21.6s-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4c15.5 6.7 29.6 9.4 47.7 9.4c68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17ZM400 144a32 32 0 1 1-32-32a32 32 0 0 1 32 32Z"></svg:path>`,
})
export class FamiconsKeyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsKeySharpIcon],svg[famicons-key-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.1 167.2c0 13 0 25.6 4.1 37.4c-43.1 50.6-167.5 194.5-167.5 194.5l2.9 36.3s34.8 33 40 28c15.4-15 24.8-25.2 24.8-25.2l7.24-43.35l47.11-3.47l3.78-46.8l49.63-.95l.49-50.09l52.69 2.1l9-18.84c15.5 6.7 29.6 9.4 47.7 9.4c68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.4-121.9 119.2M406.85 144A38.85 38.85 0 1 1 368 105.15A38.81 38.81 0 0 1 406.85 144"></svg:path>`,
})
export class FamiconsKeySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsKeypadIcon],svg[famicons-keypad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 400a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48m128 256a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48M128 272a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48"></svg:path>`,
})
export class FamiconsKeypadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsKeypadOutlineIcon],svg[famicons-keypad-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="448" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="256" cy="320" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M288 192a32 32 0 1 1-32-32a32 32 0 0 1 32 32Z"></svg:path><svg:circle cx="256" cy="64" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="384" cy="320" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="384" cy="192" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="384" cy="64" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="128" cy="320" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="128" cy="192" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="128" cy="64" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class FamiconsKeypadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsKeypadSharpIcon],svg[famicons-keypad-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="96" height="96" x="80" y="16" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="208" y="16" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="336" y="16" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="80" y="144" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="208" y="144" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="336" y="144" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="80" y="272" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="208" y="272" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="208" y="400" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="336" y="272" fill="currentColor" rx="8" ry="8"></svg:rect>`,
})
export class FamiconsKeypadSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLanguageIcon],svg[famicons-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4ZM334.83 362L368 281.65L401.17 362Zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9Z"></svg:path>`,
})
export class FamiconsLanguageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLanguageOutlineIcon],svg[famicons-language-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 112h288M192 64v48m80 336l96-224l96 224m-162.5-64h133M281.3 112S257 206 199 277S80 384 80 384"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 336s-35-27-72-75s-56-85-56-85"></svg:path>`,
})
export class FamiconsLanguageOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLanguageSharpIcon],svg[famicons-language-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 176L246 464h47.24l24.49-58h90.54l24.49 58H480Zm-26.69 186L363 279.85L389.69 362ZM272 320c-.25-.19-20.59-15.77-45.42-42.67c39.58-53.64 62-114.61 71.15-143.33H352V90H214V48h-44v42H32v44h219.25c-9.52 26.95-27.05 69.5-53.79 108.36c-32.68-43.44-47.14-75.88-47.33-76.22L143 152l-38 22l6.87 13.86c.89 1.56 17.19 37.9 54.71 86.57c.92 1.21 1.85 2.39 2.78 3.57c-49.72 56.86-89.15 79.09-89.66 79.47L64 368l23 36l19.3-11.47c2.2-1.67 41.33-24 92-80.78c24.52 26.28 43.22 40.83 44.3 41.67L255 362Z"></svg:path>`,
})
export class FamiconsLanguageSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLaptopIcon],svg[famicons-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 400h-28.34A47.92 47.92 0 0 0 480 367.86V128.14A48.2 48.2 0 0 0 431.86 80H80.14A48.2 48.2 0 0 0 32 128.14v239.72A47.92 47.92 0 0 0 44.34 400H16a16 16 0 0 0 0 32h480a16 16 0 0 0 0-32"></svg:path>`,
})
export class FamiconsLaptopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLaptopOutlineIcon],svg[famicons-laptop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="304" x="48" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="32.14" ry="32.14"></svg:rect><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M16 416h480"></svg:path>`,
})
export class FamiconsLaptopOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLaptopSharpIcon],svg[famicons-laptop-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M477.29 400a27.75 27.75 0 0 0 2.71-12V108a28 28 0 0 0-28-28H60a28 28 0 0 0-28 28v280a27.75 27.75 0 0 0 2.71 12H0v32h512v-32Z"></svg:path>`,
})
export class FamiconsLaptopSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLayersIcon],svg[famicons-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 256c-13.47 0-26.94-2.39-37.44-7.17l-148-67.49C63.79 178.26 48 169.25 48 152.24s15.79-26 22.58-29.12l149.28-68.07c20.57-9.4 51.61-9.4 72.19 0l149.37 68.07c6.79 3.09 22.58 12.1 22.58 29.12s-15.79 26-22.58 29.11l-148 67.48C282.94 253.61 269.47 256 256 256m176.76-100.86"></svg:path><svg:path fill="currentColor" d="M441.36 226.81L426.27 220l-38.77 17.74l-94 43c-10.5 4.8-24 7.19-37.44 7.19s-26.93-2.39-37.42-7.19l-94.07-43L85.79 220l-15.22 6.84C63.79 229.93 48 239 48 256s15.79 26.08 22.56 29.17l148 67.63C229 357.6 242.49 360 256 360s26.94-2.4 37.44-7.19l147.87-67.61c6.81-3.09 22.69-12.11 22.69-29.2s-15.77-26.07-22.64-29.19"></svg:path><svg:path fill="currentColor" d="m441.36 330.8l-15.09-6.8l-38.77 17.73l-94 42.95c-10.5 4.78-24 7.18-37.44 7.18s-26.93-2.39-37.42-7.18l-94.07-43L85.79 324l-15.22 6.84C63.79 333.93 48 343 48 360s15.79 26.07 22.56 29.15l148 67.59C229 461.52 242.54 464 256 464s26.88-2.48 37.38-7.27l147.92-67.57c6.82-3.08 22.7-12.1 22.7-29.16s-15.77-26.07-22.64-29.2"></svg:path>`,
})
export class FamiconsLayersIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLayersOutlineIcon],svg[famicons-layers-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m434.8 137.65l-149.36-68.1c-16.19-7.4-42.69-7.4-58.88 0L77.3 137.65c-17.6 8-17.6 21.09 0 29.09l148 67.5c16.89 7.7 44.69 7.7 61.58 0l148-67.5c17.52-8 17.52-21.1-.08-29.09M160 308.52l-82.7 37.11c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.89 7.69 44.69 7.69 61.58 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-79.94-38.47"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m160 204.48l-82.8 37.16c-17.6 8-17.6 21.1 0 29.1l148 67.49c16.89 7.7 44.69 7.7 61.58 0l148-67.49c17.7-8 17.7-21.1.1-29.1L352 204.48"></svg:path>`,
})
export class FamiconsLayersOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLayersSharpIcon],svg[famicons-layers-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 150L256 48L32 150l224 104zM255.71 392.95l-144.81-66.2L32 362l224 102l224-102l-78.69-35.3z"></svg:path><svg:path fill="currentColor" d="m480 256l-75.53-33.53L256.1 290.6l-148.77-68.17L32 256l224 102z"></svg:path>`,
})
export class FamiconsLayersSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLeafIcon],svg[famicons-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161.35 242a16 16 0 0 1 22.62-.68c73.63 69.36 147.51 111.56 234.45 133.07c11.73-32 12.77-67.22 2.64-101.58c-13.44-45.59-44.74-85.31-90.49-114.86c-40.84-26.38-81.66-33.25-121.15-39.89c-49.82-8.38-96.88-16.3-141.79-63.85c-5-5.26-11.81-7.37-18.32-5.66c-7.44 2-12.43 7.88-14.82 17.6c-5.6 22.75-2 86.51 13.75 153.82c25.29 108.14 65.65 162.86 95.06 189.73c38 34.69 87.62 53.9 136.93 53.9a186 186 0 0 0 27.77-2.04c41.71-6.32 76.43-27.27 96-57.75c-89.49-23.28-165.94-67.55-242-139.16a16 16 0 0 1-.65-22.65m306.08 142.19c-16.83-2.59-33.13-5.84-49-9.77a157.7 157.7 0 0 1-12.13 25.68c-.73 1.25-1.5 2.49-2.29 3.71a584 584 0 0 0 58.56 12a16 16 0 1 0 4.87-31.62Z"></svg:path>`,
})
export class FamiconsLeafIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLeafOutlineIcon],svg[famicons-leaf-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7c77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M173 253c86 81 175 129 292 147"></svg:path>`,
})
export class FamiconsLeafOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLeafSharpIcon],svg[famicons-leaf-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m150.38 253.68l21.94-23.3l11.65 11c73.63 69.36 147.51 111.56 234.45 133.07c11.73-32 12.77-67.22 2.64-101.58c-13.44-45.59-44.74-85.31-90.49-114.86c-40.25-26-76.6-32.09-115.09-38.54c-21.12-3.54-43-7.2-66.85-14.43c-43.78-13.28-89.69-52.74-90.15-53.13L33.4 30.15L32 63.33c-.1 2.56-2.42 63.57 14.22 147.77c17.58 89 50.24 155.85 97.07 198.63c38 34.69 87.62 53.9 136.93 53.9a186 186 0 0 0 27.78-2.07c41.72-6.32 76.43-27.27 96-57.75c-89.5-23.28-165.95-67.55-242-139.16Z"></svg:path><svg:path fill="currentColor" d="M467.43 384.19c-16.83-2.59-33.13-5.84-49-9.77a158.5 158.5 0 0 1-12.13 25.68c-.74 1.25-1.51 2.49-2.29 3.71a583 583 0 0 0 58.55 12l15.82 2.44l4.86-31.63Z"></svg:path>`,
})
export class FamiconsLeafSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLibraryIcon],svg[famicons-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 480H48a32 32 0 0 1-32-32V112a32 32 0 0 1 32-32h16a32 32 0 0 1 32 32v336a32 32 0 0 1-32 32m176-304a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v28a4 4 0 0 0 4 4h120a4 4 0 0 0 4-4ZM112 448a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32v-30a2 2 0 0 0-2-2H114a2 2 0 0 0-2 2Z"></svg:path><svg:rect width="128" height="144" x="112" y="240" fill="currentColor" rx="2" ry="2"></svg:rect><svg:path fill="currentColor" d="M320 480h-32a32 32 0 0 1-32-32V64a32 32 0 0 1 32-32h32a32 32 0 0 1 32 32v384a32 32 0 0 1-32 32m175.89-34.55l-32.23-340c-1.48-15.65-16.94-27-34.53-25.31l-31.85 3c-17.59 1.67-30.65 15.71-29.17 31.36l32.23 340c1.48 15.65 16.94 27 34.53 25.31l31.85-3c17.59-1.67 30.65-15.71 29.17-31.36"></svg:path>`,
})
export class FamiconsLibraryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLibraryOutlineIcon],svg[famicons-library-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="64" height="368" x="32" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 224h128M112 400h128"></svg:path><svg:rect width="128" height="304" x="112" y="160" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect><svg:rect width="96" height="416" x="256" y="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="m422.46 96.11l-40.4 4.25c-11.12 1.17-19.18 11.57-17.93 23.1l34.92 321.59c1.26 11.53 11.37 20 22.49 18.84l40.4-4.25c11.12-1.17 19.18-11.57 17.93-23.1L445 115c-1.31-11.58-11.42-20.06-22.54-18.89Z"></svg:path>`,
})
export class FamiconsLibraryOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLibrarySharpIcon],svg[famicons-library-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 480H28a12 12 0 0 1-12-12V92a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v376a12 12 0 0 1-12 12m156-272v-52a12 12 0 0 0-12-12H124a12 12 0 0 0-12 12v52ZM112 416v52a12 12 0 0 0 12 12h104a12 12 0 0 0 12-12v-52Zm0-176h128v144H112zm228 240h-72a12 12 0 0 1-12-12V44a12 12 0 0 1 12-12h72a12 12 0 0 1 12 12v424a12 12 0 0 1-12 12m29-379.3l30 367.83a12 12 0 0 0 13.45 10.92l72.16-9a12 12 0 0 0 10.47-12.9L465 91.21a12 12 0 0 0-13.2-10.94l-72.13 7.51A12 12 0 0 0 369 100.7"></svg:path>`,
})
export class FamiconsLibrarySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLinkIcon],svg[famicons-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M200.66 352H144a96 96 0 0 1 0-192h55.41m113.18 0H368a96 96 0 0 1 0 192h-56.66m-142.27-96h175.86"></svg:path>`,
})
export class FamiconsLinkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLinkOutlineIcon],svg[famicons-link-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="36" d="M208 352h-64a96 96 0 0 1 0-192h64m96 0h64a96 96 0 0 1 0 192h-64m-140.71-96h187.42"></svg:path>`,
})
export class FamiconsLinkOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLinkSharpIcon],svg[famicons-link-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="48" d="M200.66 352H144a96 96 0 0 1 0-192h55.41m113.18 0H368a96 96 0 0 1 0 192h-56.66m-142.27-96h175.86"></svg:path>`,
})
export class FamiconsLinkSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsListIcon],svg[famicons-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M160 144h288M160 256h288M160 368h288"></svg:path><svg:circle cx="80" cy="144" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="80" cy="256" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="80" cy="368" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class FamiconsListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsListCircleIcon],svg[famicons-list-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-88 302a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-71a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-73a24 24 0 1 1 24-24a24 24 0 0 1-24 24m184 135H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32m0-71H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32m0-72H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32"></svg:path>`,
})
export class FamiconsListCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsListCircleOutlineIcon],svg[famicons-list-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 184h128m-128 72h128m-128 71h128"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 258c0-106-86-192-192-192S64 152 64 258s86 192 192 192s192-86 192-192Z"></svg:path><svg:circle cx="168" cy="184" r="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="168" cy="257" r="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="168" cy="328" r="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class FamiconsListCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsListCircleSharpIcon],svg[famicons-list-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-64 287.5a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16Zm0-71a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16Zm0-72a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16Zm176 151H212.67v-32H368Zm0-71H212.67v-32H368Zm0-72H212.67v-32H368Z"></svg:path>`,
})
export class FamiconsListCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsListOutlineIcon],svg[famicons-list-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 144h288M160 256h288M160 368h288"></svg:path><svg:circle cx="80" cy="144" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="80" cy="256" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="80" cy="368" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class FamiconsListOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsListSharpIcon],svg[famicons-list-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="48" d="M144 144h320M144 256h320M144 368h320"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="M64 128h32v32H64zm0 112h32v32H64zm0 112h32v32H64z"></svg:path>`,
})
export class FamiconsListSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLocateIcon],svg[famicons-locate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M256 96V56m0 400v-40m0-304a144 144 0 1 0 144 144a144 144 0 0 0-144-144m160 144h40m-400 0h40"></svg:path>`,
})
export class FamiconsLocateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLocateOutlineIcon],svg[famicons-locate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M256 96V56m0 400v-40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 112a144 144 0 1 0 144 144a144 144 0 0 0-144-144Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M416 256h40m-400 0h40"></svg:path>`,
})
export class FamiconsLocateOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLocateSharpIcon],svg[famicons-locate-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="48" d="M256 96V56m0 400v-40m0-304a144 144 0 1 0 144 144a144 144 0 0 0-144-144Zm160 144h40m-400 0h40"></svg:path>`,
})
export class FamiconsLocateSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLocationIcon],svg[famicons-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="192" r="32" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M256 32c-88.22 0-160 68.65-160 153c0 40.17 18.31 93.59 54.42 158.78c29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0 0 51.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"></svg:path>`,
})
export class FamiconsLocationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLocationOutlineIcon],svg[famicons-location-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"></svg:path><svg:circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class FamiconsLocationOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLocationSharpIcon],svg[famicons-location-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"></svg:path>`,
})
export class FamiconsLocationSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLockClosedIcon],svg[famicons-lock-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 192h-16v-80a96 96 0 1 0-192 0v80h-16a64.07 64.07 0 0 0-64 64v176a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V256a64.07 64.07 0 0 0-64-64m-48 0H192v-80a64 64 0 1 1 128 0Z"></svg:path>`,
})
export class FamiconsLockClosedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLockClosedOutlineIcon],svg[famicons-lock-closed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 208v-95a80 80 0 0 0-160 0v95"></svg:path><svg:rect width="320" height="272" x="96" y="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect>`,
})
export class FamiconsLockClosedOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLockClosedSharpIcon],svg[famicons-lock-closed-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M420 192h-68v-80a96 96 0 1 0-192 0v80H92a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V204a12 12 0 0 0-12-12m-106 0H198v-80.75a58 58 0 1 1 116 0Z"></svg:path>`,
})
export class FamiconsLockClosedSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLockOpenIcon],svg[famicons-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 192H192v-80a64 64 0 1 1 128 0a16 16 0 0 0 32 0a96 96 0 1 0-192 0v80h-16a64.07 64.07 0 0 0-64 64v176a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V256a64.07 64.07 0 0 0-64-64"></svg:path>`,
})
export class FamiconsLockOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLockOpenOutlineIcon],svg[famicons-lock-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 112a80 80 0 0 0-160 0v96"></svg:path><svg:rect width="320" height="272" x="96" y="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect>`,
})
export class FamiconsLockOpenOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLockOpenSharpIcon],svg[famicons-lock-open-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M420 192H198v-80.75a58.08 58.08 0 0 1 99.07-41.07A59.4 59.4 0 0 1 314 112h38a96 96 0 1 0-192 0v80H92a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V204a12 12 0 0 0-12-12"></svg:path>`,
})
export class FamiconsLockOpenSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogInIcon],svg[famicons-log-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M392 80H232a56.06 56.06 0 0 0-56 56v104h153.37l-52.68-52.69a16 16 0 0 1 22.62-22.62l80 80a16 16 0 0 1 0 22.62l-80 80a16 16 0 0 1-22.62-22.62L329.37 272H176v104c0 32.05 33.79 56 64 56h152a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56M80 240a16 16 0 0 0 0 32h96v-32Z"></svg:path>`,
})
export class FamiconsLogInIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogInOutlineIcon],svg[famicons-log-in-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 176v-40a40 40 0 0 1 40-40h160a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H240c-22.09 0-48-17.91-48-40v-40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m288 336l80-80l-80-80M80 256h272"></svg:path>`,
})
export class FamiconsLogInOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogInSharpIcon],svg[famicons-log-in-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 80H192a16 16 0 0 0-16 16v144h153.37l-64-64L288 153.37l91.31 91.32a16 16 0 0 1 0 22.62L288 358.63L265.37 336l64-64H176v144a16 16 0 0 0 16 16h240a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M64 240h112v32H64z"></svg:path>`,
})
export class FamiconsLogInSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogOutIcon],svg[famicons-log-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 256a16 16 0 0 1 16-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h160a56.06 56.06 0 0 0 56-56V272H176a16 16 0 0 1-16-16m299.31-11.31l-80-80a16 16 0 0 0-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62"></svg:path>`,
})
export class FamiconsLogOutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogOutOutlineIcon],svg[famicons-log-out-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80l-80-80m-192 80h256"></svg:path>`,
})
export class FamiconsLogOutOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogOutSharpIcon],svg[famicons-log-out-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 240h160V96a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h240a16 16 0 0 0 16-16V272H160Zm299.31 4.69L368 153.37L345.37 176l64 64H320v32h89.37l-64 64L368 358.63l91.31-91.32a16 16 0 0 0 0-22.62"></svg:path>`,
})
export class FamiconsLogOutSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoAlipayIcon],svg[famicons-logo-alipay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102.41 32C62.38 32 32 64.12 32 103.78v304.45C32 447.86 64.38 480 104.41 480h303.2c40 0 72.39-32.14 72.39-71.77v-3.11c-1.35-.56-115.47-48.57-174.5-76.7c-39.82 48.57-91.18 78-144.5 78c-90.18 0-120.8-78.22-78.1-129.72c9.31-11.22 25.15-21.94 49.73-28c38.45-9.36 99.64 5.85 157 24.61a309.4 309.4 0 0 0 25.46-61.67H138.34V194h91.13v-31.83H119.09v-17.75h110.38V99s0-7.65 7.82-7.65h44.55v53H391v17.75H281.84V194h89.08a359.4 359.4 0 0 1-37.72 94.43c27 9.69 49.31 18.88 67.39 24.89c60.32 20 77.23 22.45 79.41 22.7V103.78C480 64.12 447.6 32 407.61 32zM152 274.73q-5.81.06-11.67.63c-11.3 1.13-32.5 6.07-44.09 16.23c-34.74 30-13.94 84.93 56.37 84.93c40.87 0 81.71-25.9 113.79-67.37c-41.36-20-77-34.85-114.4-34.42"></svg:path>`,
})
export class FamiconsLogoAlipayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoAmazonIcon],svg[famicons-logo-amazon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.48 378.73a300.5 300.5 0 0 0 152.89 95.92a262.57 262.57 0 0 0 159.3-17.25a225.5 225.5 0 0 0 66.79-47a6.36 6.36 0 0 0-2-8.53a11.76 11.76 0 0 0-8-.05a402 402 0 0 1-116.55 39.34a358.1 358.1 0 0 1-127.29-8.83a446.7 446.7 0 0 1-119.1-60.49a5 5 0 0 0-6.06 6.9Z"></svg:path><svg:path fill="currentColor" d="M387.15 388.44a168.1 168.1 0 0 1 48.94-2.23l.67.13a10 10 0 0 1 7.37 12.05A204.7 204.7 0 0 1 429 444.47a2.55 2.55 0 0 0 1.66 3.18a2.51 2.51 0 0 0 2.23-.37A83.31 83.31 0 0 0 464 382.86a12.44 12.44 0 0 0-10.22-13.22A95.75 95.75 0 0 0 384.91 384a2.55 2.55 0 0 0-.57 3.55a2.52 2.52 0 0 0 2.81.89m-82.91-63.52a164 164 0 0 1-28.92 25.3A135.16 135.16 0 0 1 208.63 369a99.5 99.5 0 0 1-57.49-19.85a97.25 97.25 0 0 1-27.36-100.28a112.35 112.35 0 0 1 65.3-69.06a367.7 367.7 0 0 1 104.7-15.55V127A37.82 37.82 0 0 0 261 94.72a59.9 59.9 0 0 0-31.17 4.08a48.89 48.89 0 0 0-27.13 34.67a12 12 0 0 1-12.58 6.72l-50.9-4.5a11.38 11.38 0 0 1-8.38-10.16a103.66 103.66 0 0 1 36.61-63.45A143.86 143.86 0 0 1 257.85 32a146.24 146.24 0 0 1 84.27 27.67a86.82 86.82 0 0 1 30.7 70.22V258.8a84.5 84.5 0 0 0 8 31.28l15.87 23.23a13 13 0 0 1 0 11.23l-46.99 39.71a12.5 12.5 0 0 1-12.68-.44a245 245 0 0 1-32.78-38.89m-10.6-116.83a257.7 257.7 0 0 0-44 2.89A63 63 0 0 0 208 242.54a63 63 0 0 0 3.07 54a40.6 40.6 0 0 0 47.11 12.19a78.61 78.61 0 0 0 35.46-55.58z"></svg:path>`,
})
export class FamiconsLogoAmazonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoAmplifyIcon],svg[famicons-logo-amplify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m112.31 268l40.36-68.69l34.65 59l-67.54 115h135L289.31 432H16Zm58.57-99.76l33.27-56.67L392.44 432h-66.68ZM222.67 80h66.59L496 432h-66.68Z"></svg:path>`,
})
export class FamiconsLogoAmplifyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoAndroidIcon],svg[famicons-logo-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m380.91 199l42.47-73.57a8.63 8.63 0 0 0-3.12-11.76a8.52 8.52 0 0 0-11.71 3.12l-43 74.52c-32.83-15-69.78-23.35-109.52-23.35s-76.69 8.36-109.52 23.35l-43-74.52a8.6 8.6 0 1 0-14.88 8.64L131 199C57.8 238.64 8.19 312.77 0 399.55h512c-8.19-86.78-57.8-160.91-131.09-200.55M138.45 327.65a21.46 21.46 0 1 1 21.46-21.46a21.47 21.47 0 0 1-21.46 21.46m235 0A21.46 21.46 0 1 1 395 306.19a21.47 21.47 0 0 1-21.51 21.46Z"></svg:path>`,
})
export class FamiconsLogoAndroidIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoAngularIcon],svg[famicons-logo-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.57 256h84.85l-42.43-89.36z"></svg:path><svg:path fill="currentColor" d="M256 32L32 112l46.12 272L256 480l177.75-96L480 112Zm88 320l-26.59-56H194.58L168 352h-40L256 72l128 280Z"></svg:path>`,
})
export class FamiconsLogoAngularIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoAppleIcon],svg[famicons-logo-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M349.13 136.86c-40.32 0-57.36 19.24-85.44 19.24c-28.79 0-50.75-19.1-85.69-19.1c-34.2 0-70.67 20.88-93.83 56.45c-32.52 50.16-27 144.63 25.67 225.11c18.84 28.81 44 61.12 77 61.47h.6c28.68 0 37.2-18.78 76.67-19h.6c38.88 0 46.68 18.89 75.24 18.89h.6c33-.35 59.51-36.15 78.35-64.85c13.56-20.64 18.6-31 29-54.35c-76.19-28.92-88.43-136.93-13.08-178.34c-23-28.8-55.32-45.48-85.79-45.48Z"></svg:path><svg:path fill="currentColor" d="M340.25 32c-24 1.63-52 16.91-68.4 36.86c-14.88 18.08-27.12 44.9-22.32 70.91h1.92c25.56 0 51.72-15.39 67-35.11c14.72-18.77 25.88-45.37 21.8-72.66"></svg:path>`,
})
export class FamiconsLogoAppleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoAppleAppstoreIcon],svg[famicons-logo-apple-appstore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C132.26 32 32 132.26 32 256s100.26 224 224 224s224-100.26 224-224S379.74 32 256 32m-85 321.89a15.48 15.48 0 0 1-13.46 7.65a14.9 14.9 0 0 1-7.86-2.16a15.48 15.48 0 0 1-5.6-21.21l15.29-25.42a8.73 8.73 0 0 1 7.54-4.3h2.26c11.09 0 18.85 6.67 21.11 13.13Zm129.45-50l-100.13.11h-66.55a15.46 15.46 0 0 1-15.51-16.15c.32-8.4 7.65-14.76 16-14.76h48.24l57.19-97.35l-18.52-31.55C217 137 218.85 127.52 226 123a15.57 15.57 0 0 1 21.87 5.17l9.9 16.91h.11l9.91-16.91A15.58 15.58 0 0 1 289.6 123c7.11 4.52 8.94 14 4.74 21.22l-18.52 31.55l-18 30.69l-39.09 66.66v.11h57.61c7.22 0 16.27 3.88 19.93 10.12l.32.65c3.23 5.49 5.06 9.26 5.06 14.75a13.8 13.8 0 0 1-1.17 5.17Zm77.75.11h-27.11v.11l19.82 33.71a15.8 15.8 0 0 1-5.17 21.53a15.53 15.53 0 0 1-8.08 2.27A15.71 15.71 0 0 1 344.2 354l-29.29-49.86l-18.2-31L273.23 233a38.35 38.35 0 0 1-.65-38c4.64-8.19 8.19-10.34 8.19-10.34L333 273h44.91c8.4 0 15.61 6.46 16 14.75A15.65 15.65 0 0 1 378.23 304Z"></svg:path>`,
})
export class FamiconsLogoAppleAppstoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoAppleArIcon],svg[famicons-logo-apple-ar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M201.14 64L256 32l54.86 32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 32v80"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M310.86 448L256 480l-54.86-32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 480v-80"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 207.51V144l53.15-31.51"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m64 144l67.29 40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 304.49V368l-53.15 31.51"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m448 368l-67.29-40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M117.15 400L64 368v-63.51"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m64 368l66.64-40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M394.85 112.49L448 144v63.51"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m448 144l-67.29 40M256 320v-64l54.86-32M256 256l-54.86-32"></svg:path>`,
})
export class FamiconsLogoAppleArIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoBehanceIcon],svg[famicons-logo-behance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M344.1 233.6c-28.9 0-32.9 28.8-32.9 28.8h61.4s.4-28.8-28.5-28.8m-139.3 28.8h-54.4v50h51.7c7.8-.2 22.4-2.4 22.4-24.3c0-26-19.7-25.7-19.7-25.7"></svg:path><svg:path fill="currentColor" d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224s224-100.3 224-224S379.7 32 256 32m47.2 137.6h77.1v23h-77.1zm-39 120.8c0 57-59.4 55.2-59.4 55.2h-97.2v-187h97.2c29.6 0 52.9 16.3 52.9 49.8S229.2 244 229.2 244c37.6 0 35 46.4 35 46.4m144.2-3.1h-96.9c0 34.7 32.9 32.5 32.9 32.5c31.1 0 30-20.1 30-20.1h32.9c0 53.4-64 49.7-64 49.7c-76.7 0-71.8-71.5-71.8-71.5s-.1-71.8 71.8-71.8c75.7.1 65.1 81.2 65.1 81.2"></svg:path><svg:path fill="currentColor" d="M218 211.3c0-19.4-13.2-19.4-13.2-19.4h-54.4v41.7h51c8.8 0 16.6-2.9 16.6-22.3"></svg:path>`,
})
export class FamiconsLogoBehanceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoBitbucketIcon],svg[famicons-logo-bitbucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M483.13 32.23a20 20 0 0 0-2.54-.23h-449C23 31.88 16.12 38.88 16 47.75a11.4 11.4 0 0 0 .23 2.8l65.3 411.25a22.52 22.52 0 0 0 7 12.95A20 20 0 0 0 102 480h313.18a15.45 15.45 0 0 0 15.34-13.42l38.88-247.91H325.19l-18.46 112H205.21l-25.73-148h295.58l20.76-132c1.27-8.75-4.38-17.04-12.69-18.44"></svg:path>`,
})
export class FamiconsLogoBitbucketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoBitcoinIcon],svg[famicons-logo-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M410.47 279.2c-5-11.5-12.7-21.6-28.1-30.1a98.2 98.2 0 0 0-25.4-10a62.2 62.2 0 0 0 16.3-11a56.4 56.4 0 0 0 15.6-23.3a77.1 77.1 0 0 0 3.5-28.2c-1.1-16.8-4.4-33.1-13.2-44.8s-21.2-20.7-37.6-27c-12.6-4.8-25.5-7.8-45.5-8.9V32h-40v64h-32V32h-41v64H96v48h27.87c8.7 0 14.6.8 17.6 2.3a13.22 13.22 0 0 1 6.5 6c1.3 2.5 1.9 8.4 1.9 17.5V343c0 9-.6 14.8-1.9 17.4s-2 4.9-5.1 6.3s-3.2 1.3-11.8 1.3h-26.4L96 416h87v64h41v-64h32v64h40v-64.4c26-1.3 44.5-4.7 59.4-10.3c19.3-7.2 34.1-17.7 44.7-31.5s14-34.9 14.93-51.2c.67-14.5-.03-33.2-4.56-43.4M224 150h32v74h-32Zm0 212v-90h32v90Zm72-208.1c6 2.5 9.9 7.5 13.8 12.7c4.3 5.7 6.5 13.3 6.5 21.4c0 7.8-2.9 14.5-7.5 20.5c-3.8 4.9-6.8 8.3-12.8 11.1Zm28.8 186.7c-7.8 6.9-12.3 10.1-22.1 13.8a56 56 0 0 1-6.7 1.9v-82.8a40.7 40.7 0 0 1 11.3 3.4c7.8 3.3 15.2 6.9 19.8 13.2a43.8 43.8 0 0 1 8 24.7c-.03 10.9-2.83 19.2-10.33 25.8Z"></svg:path>`,
})
export class FamiconsLogoBitcoinIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoBufferIcon],svg[famicons-logo-buffer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m39.93 149.25l197.4 95.32c5.14 2.45 12 3.73 18.79 3.73s13.65-1.28 18.78-3.73l197.4-95.32c10.38-5 10.38-13.18 0-18.2L274.9 35.73c-5.13-2.45-12-3.73-18.78-3.73s-13.65 1.28-18.79 3.73l-197.4 95.32c-10.38 5.02-10.38 13.18 0 18.2"></svg:path><svg:path fill="currentColor" d="M472.3 246.9s-36.05-17.38-40.83-19.72s-6.07-2.21-11.09.12s-145.6 70.23-145.6 70.23a45.7 45.7 0 0 1-18.78 3.74c-6.77 0-13.65-1.29-18.78-3.74c0 0-136.85-66-143.27-69.18C87 225 85 225 78.67 228l-39 18.78c-10.38 5-10.38 13.19 0 18.2L237.1 360.3c5.13 2.45 12 3.73 18.78 3.73s13.65-1.28 18.79-3.73l197.4-95.3c10.61-4.92 10.61-13.08.23-18.1"></svg:path><svg:path fill="currentColor" d="M472.3 362.75s-36.05-17.38-40.83-19.75s-6.07-2.21-11.09.12S274.9 413.5 274.9 413.5a45.7 45.7 0 0 1-18.78 3.73c-6.77 0-13.65-1.28-18.79-3.73c0 0-136.85-66-143.26-69.18c-7-3.39-9-3.39-15.29-.35l-39 18.78c-10.39 5-10.39 13.18 0 18.2l197.4 95.32c5.13 2.56 12 3.73 18.78 3.73s13.65-1.28 18.78-3.73L472.18 381c10.5-5.07 10.5-13.23.12-18.25"></svg:path>`,
})
export class FamiconsLogoBufferIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoCapacitorIcon],svg[famicons-logo-capacitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 101.09L372.37 208.72l106.86 107.06l-69.3 69.3l-283.22-283.23L196 32.54l107.07 106.88L410.67 32ZM32.55 196l69.3-69.31l283.22 283.24l-69.3 69.3l-107-106.87L101.08 480L32 410.67l107.42-107.61Z"></svg:path>`,
})
export class FamiconsLogoCapacitorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoChromeIcon],svg[famicons-logo-chrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.8 255.93a67.2 67.2 0 1 0 67.2-67.18a67.38 67.38 0 0 0-67.2 67.18"></svg:path><svg:path fill="currentColor" d="M476.75 217.79v.05a207 207 0 0 0-7-28.84h-.11a202 202 0 0 1 7.07 29a203.5 203.5 0 0 0-7.07-29h-155.4c19.05 17 31.36 40.17 31.36 67.05a86.55 86.55 0 0 1-12.31 44.73L231 478.45a2 2 0 0 1 0 .27v.28v-.26a224 224 0 0 0 25 1.26c6.84 0 13.61-.39 20.3-1a223 223 0 0 0 29.78-4.74C405.68 451.52 480 362.4 480 255.94a225 225 0 0 0-3.25-38.15"></svg:path><svg:path fill="currentColor" d="M256 345.5c-33.6 0-61.6-17.91-77.29-44.79L76 123.05l-.14-.24A224 224 0 0 0 207.4 474.55v-.05l77.69-134.6a84.1 84.1 0 0 1-29.09 5.6"></svg:path><svg:path fill="currentColor" d="m91.29 104.57l77.35 133.25A89.19 89.19 0 0 1 256 166h205.17a246.5 246.5 0 0 0-25.78-43.94l.12.08A245.3 245.3 0 0 1 461.17 166h.17a246 246 0 0 0-25.66-44a2.6 2.6 0 0 1-.35-.26a223.93 223.93 0 0 0-344.19-17.4l.14.24Z"></svg:path>`,
})
export class FamiconsLogoChromeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoClosedCaptioningIcon],svg[famicons-logo-closed-captioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 80v352h512V80Zm464 175.78c0 25.74-1.6 45.32-3.77 77.22s-19.2 54.34-59.09 57.86s-95.77 3.85-145.14 3.74c-49 .11-105.14-.11-145.14-3.74s-56.8-26-59.09-57.86S48 281.52 48 255.78s.11-42.46 3.77-77.22s23-54.12 59.09-57.64s98.28-3.52 145.14-3.52s109 0 145.14 3.52s55.43 23 59.09 57.64s3.77 51.59 3.77 77.22"></svg:path><svg:path fill="currentColor" d="M367.57 282.84v.77c0 17.93-11.11 28.49-25.95 28.49s-24.84-11.88-26.27-28.49c0 0-1.31-8.69-1.31-26.29a230 230 0 0 1 1.53-28.6c2.64-18.7 11.77-28.49 26.6-28.49s26.49 12.76 26.49 32.12v.55h49.58c0-24.09-6.05-45.76-18.25-59.4S369.76 153 345.8 153a108 108 0 0 0-33 4.73a58.8 58.8 0 0 0-25.94 16.61c-7.23 7.96-12.86 18.52-16.86 31.83s-6 30-6 50.27c0 19.8 1.65 36.3 4.84 49.61s8 23.87 14.4 31.79a49.76 49.76 0 0 0 24 16.5q14.5 4.62 34 4.62c27.47 0 47.26-7 59.13-20.57S418 305.06 418 279.1h-50.65c.22 0 .22 2.75.22 3.74m-170.27 0v.77c0 17.93-11.1 28.49-25.94 28.49s-24.84-11.88-26.27-28.49c0 0-1.31-8.69-1.31-26.29a230 230 0 0 1 1.53-28.6c2.64-18.7 11.77-28.49 26.6-28.49S198.4 213 198.4 232.35v.55H248c0-24.09-6-45.76-18.25-59.4S199.5 153 175.54 153a108 108 0 0 0-33 4.73a58.8 58.8 0 0 0-25.94 16.61c-7.26 7.92-12.86 18.48-16.93 31.79s-6 30-6 50.27c0 19.8 1.65 36.3 4.84 49.61s8 23.87 14.4 31.79a49.76 49.76 0 0 0 24 16.5q14.51 4.62 34 4.62c27.48 0 47.27-7 59.14-20.57s17.81-33.33 17.81-59.29h-50.78c.22.04.22 2.79.22 3.78"></svg:path>`,
})
export class FamiconsLogoClosedCaptioningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoCodepenIcon],svg[famicons-logo-codepen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.24 303.94c-15.32-10.36-30.74-20.57-46.06-30.93c-2-1.38-3.43-1.48-5.5 0l-38.88 26.12C182 319.9 244 361.32 244 361.32v-53.79c0-1.22-1.55-2.78-2.76-3.59m-46.15-63.27q23.19-15.24 46.11-30.86a7.54 7.54 0 0 0 2.8-5.34v-51.7s-62 41.12-93.26 61.94c13.7 9.16 26.67 17.91 39.78 26.44c1.02.66 3.4.28 4.57-.48m74.75-31.32q23.71 16.07 47.63 31.82a4.3 4.3 0 0 0 3.83 0l39.76-26.47L268 152.48v53.35a4.8 4.8 0 0 0 1.84 3.52m-11.73 21.02a5.27 5.27 0 0 0-4.74.17c-4.82 3-9.47 6.2-14.17 9.35c-8.25 5.53-25.35 17-25.35 17l38.84 25.86a6.18 6.18 0 0 0 6.26.11l39-26s-34.07-22.66-39.84-26.49M141 237.12v39.61l29.62-19.84z"></svg:path><svg:path fill="currentColor" d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224s224-100.29 224-224S379.71 32 256 32m139 265c0 5.78-2.65 9.86-7.51 13.09q-61.71 41-123.29 82.19c-5.85 3.92-11.17 3.75-17-.14q-61.17-41-122.63-81.67c-5.11-3.39-7.59-7.56-7.59-13.73V217c0-6.14 2.52-10.34 7.62-13.72c40.91-27.13 81.94-54.36 122.73-81.68c5.82-3.89 11.09-4 16.94-.09q61.54 41.21 123.26 82.19c4.68 3.11 7.45 6.95 7.45 12.66Z"></svg:path><svg:path fill="currentColor" d="M316.25 273.23q-22.59 15.34-45.39 30.34c-2.41 1.58-2.89 3.31-2.86 6.19v51.34l93-62l-38.53-25.88c-2.3-1.61-3.89-1.57-6.22.01m53.75 3.45v-39.62l-29.59 19.87z"></svg:path>`,
})
export class FamiconsLogoCodepenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoCss3Icon],svg[famicons-logo-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m64 32l35 403.22L255.77 480L413 435.15L448 32Zm290.68 334.9L256.07 395l-98.46-28.24l-6.75-77.76h48.26l3.43 39.56l53.59 15.16l.13.28l53.47-14.85l5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58Z"></svg:path>`,
})
export class FamiconsLogoCss3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoDesignernewsIcon],svg[famicons-logo-designernews-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M295.31 122.8L222.86 64l72.68 122.64z"></svg:path><svg:path fill="currentColor" d="M339.43 64v195.6h-41.6L225.6 141.28l1.94 118.32h-45.83V131.2L139.09 96c1.14 1.44 2.28 2.88 3.31 4.44c11.43 16.68 17.14 36.6 17.14 60.6c0 59-35 98.52-87.88 98.52H0v.48L228.11 448H512V205.72Z"></svg:path><svg:path fill="currentColor" d="M111.89 162.52c0-34.8-16.23-54.12-45.38-54.12H44.57v106.8h21.72c29.71 0 45.6-18.48 45.6-52.68"></svg:path>`,
})
export class FamiconsLogoDesignernewsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoDeviantartIcon],svg[famicons-logo-deviantart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408 103.28V16h-89.31l-8.9 8.78l-42.15 78.48l-13.25 8.74H104v119.85h82.68l7.36 8.71L104 408.72V496h89.3l8.91-8.79l42.14-78.48l13.26-8.73H408V280.13h-82.68l-7.36-8.75z"></svg:path>`,
})
export class FamiconsLogoDeviantartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoDiscordIcon],svg[famicons-logo-discord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 66.52A50 50 0 0 0 414.12 17L97.64 16A49.65 49.65 0 0 0 48 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44l109 100ZM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 0 1-27.85 14.25a173.3 173.3 0 0 1-35.11 10.39a170 170 0 0 1-62.72-.24a184.5 184.5 0 0 1-35.59-10.4a141.5 141.5 0 0 1-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21c-.49-.24-.73-.48-1-.48c-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81c-53.51-1.69-73.85-36.47-73.85-36.47c0-77.06 34.87-139.62 34.87-139.62c34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 0 1 4.12-.49a205.6 205.6 0 0 1 48.91-.48a201.6 201.6 0 0 1 72.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62c0-.28-20.35 34.5-73.86 36.19"></svg:path><svg:path fill="currentColor" d="M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57c.25-14.76-10.9-26.57-24.7-26.57m88.38 0c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218"></svg:path>`,
})
export class FamiconsLogoDiscordIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoDockerIcon],svg[famicons-logo-docker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M507 211.16c-1.42-1.19-14.25-10.94-41.79-10.94a132.6 132.6 0 0 0-21.61 1.9c-5.22-36.4-35.38-54-36.57-55l-7.36-4.28l-4.75 6.9a101.7 101.7 0 0 0-13.06 30.45c-5 20.7-1.9 40.2 8.55 56.85c-12.59 7.14-33 8.8-37.28 9H15.94A15.93 15.93 0 0 0 0 262.07a241.3 241.3 0 0 0 14.75 86.83C26.39 379.35 43.72 402 66 415.74C91.22 431.2 132.3 440 178.6 440a344 344 0 0 0 62.45-5.71a257.4 257.4 0 0 0 81.69-29.73a223.6 223.6 0 0 0 55.57-45.67c26.83-30.21 42.74-64 54.38-94h4.75c29.21 0 47.26-11.66 57.23-21.65a63.3 63.3 0 0 0 15.2-22.36l2.14-6.18Z"></svg:path><svg:path fill="currentColor" d="M47.29 236.37H92.4a4 4 0 0 0 4-4v-40.48a4 4 0 0 0-4-4H47.29a4 4 0 0 0-4 4v40.44a4.16 4.16 0 0 0 4 4m62.21.04h45.12a4 4 0 0 0 4-4v-40.48a4 4 0 0 0-4-4H109.5a4 4 0 0 0-4 4v40.44a4.16 4.16 0 0 0 4 4m63.4.04H218a4 4 0 0 0 4-4v-40.48a4 4 0 0 0-4-4h-45.1a4 4 0 0 0-4 4v40.44a3.87 3.87 0 0 0 4 4m62.46.04h45.12a4 4 0 0 0 4-4v-40.48a4 4 0 0 0-4-4h-45.12a4 4 0 0 0-4 4v40.44a4 4 0 0 0 4 4M109.5 178.57h45.12a4.16 4.16 0 0 0 4-4v-40.48a4 4 0 0 0-4-4H109.5a4 4 0 0 0-4 4v40.44a4.34 4.34 0 0 0 4 4m63.4.04H218a4.16 4.16 0 0 0 4-4v-40.48a4 4 0 0 0-4-4h-45.1a4 4 0 0 0-4 4v40.44a4 4 0 0 0 4 4m62.46.04h45.12a4.16 4.16 0 0 0 4-4v-40.48a4.16 4.16 0 0 0-4-4h-45.12a4 4 0 0 0-4 4v40.44a4.16 4.16 0 0 0 4 4m0-58h45.12a4 4 0 0 0 4-4V76a4.16 4.16 0 0 0-4-4h-45.12a4 4 0 0 0-4 4v40.44a4.17 4.17 0 0 0 4 4m62.92 115.93h45.12a4 4 0 0 0 4-4v-40.48a4 4 0 0 0-4-4h-45.12a4 4 0 0 0-4 4v40.44a4.16 4.16 0 0 0 4 4"></svg:path>`,
})
export class FamiconsLogoDockerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoDribbbleIcon],svg[famicons-logo-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C132.33 32 32 132.33 32 256s100.33 224 224 224s224-100.22 224-224S379.67 32 256 32m142.22 103.25a186.36 186.36 0 0 1 44 108.38c-40.37-2.1-88.67-2.1-127.4 1.52c-4.9-12.37-9.92-24.5-15.4-36.17c44.66-19.36 79.08-44.8 98.8-73.73M256 69.33a185.8 185.8 0 0 1 119.12 42.94c-20.3 25.66-52.15 48-91.82 64.86C261.6 137 236.63 102.47 210 75.28a187.5 187.5 0 0 1 46-5.95m-84.47 20.42c26.95 26.83 52.27 61 74.44 101C203.85 203.62 155.55 211 104 211c-9.8 0-19.36-.35-28.81-.94a186.78 186.78 0 0 1 96.34-120.31M69.68 247.13c10.62.47 21.35.7 32.2.59c58.8-.7 113.52-9.92 160.54-25q6.65 13.83 12.6 28.35a115.4 115.4 0 0 0-16.69 5c-64.28 27-114.91 70.51-142.33 123.13A186 186 0 0 1 69.33 256c0-3 .12-5.95.35-8.87M256 442.67a185.57 185.57 0 0 1-114.45-39.32c24.85-49.23 69.18-90 125.07-115.27c5.25-2.45 12.25-4.43 20.3-6.18q10 27.64 17.85 57.4A678 678 0 0 1 322 430.42a185.1 185.1 0 0 1-66 12.25m100.92-29.75a673 673 0 0 0-17.39-92.05c-4-15.17-8.51-29.87-13.41-44.22c36.63-3 80.5-2.57 115.38 0a186.5 186.5 0 0 1-84.58 136.27"></svg:path>`,
})
export class FamiconsLogoDribbbleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoDropboxIcon],svg[famicons-logo-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256.32 126.24l-120.16 78.25l120.16 78.24L136.16 361L16 282.08l120.16-78.24L16 126.24L136.16 48Zm-120.8 259.52l120.16-78.25l120.16 78.25L255.68 464Zm120.8-103.68l120.16-78.24l-120.16-77.6L375.84 48L496 126.24l-120.16 78.25L496 282.73L375.84 361Z"></svg:path>`,
})
export class FamiconsLogoDropboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoEdgeIcon],svg[famicons-logo-edge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M255.5 15c-132 0-240 108-240 240s108 240 240 240c85.4 0 160.8-45.2 203.3-112.9a6.87 6.87 0 0 0-9.1-9.7a108.6 108.6 0 0 1-18.4 8.6c-36.8 12.6-57.1 13.1-82.1 12c-27.9-1.2-61.9-10.8-85.8-25s-43.5-34.6-54.1-52.3s-17-39.9-14.1-68.3c2.9-29 29.4-52.6 60.4-52.6c33.5 0 60.8 26.6 60.8 60.1c0 17-8.1 31.7-18.5 43.5c-2.3 2.1-7.6 9.7 5.8 20c15.9 12.2 51.6 18 79.9 16.6s59.1-12.6 80.2-34.8c16.8-17.7 31.8-46.1 31.8-77.4C495.5 97.7 379.5 15 255.5 15"></svg:path>`,
})
export class FamiconsLogoEdgeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoElectronIcon],svg[famicons-logo-electron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M86.76 255a9.9 9.9 0 0 0 4.87-1.29a9.82 9.82 0 0 0 3.65-13.43c-16.46-28.56-17.81-52.12-7.45-70c14.26-24.57 53.61-33.65 105.27-24.29a9.86 9.86 0 0 0 11.45-7.9a9.84 9.84 0 0 0-7.93-11.44c-29.19-5.28-56-5.18-77.39.3c-22.3 5.71-39 17.28-48.45 33.48c-14 24.19-12.7 54.73 7.42 89.62a9.85 9.85 0 0 0 8.56 4.95m274.85-111.27c32.24.42 52.61 9.31 62.79 26.86c14.21 24.48 2.52 62.81-31.27 102.52a9.82 9.82 0 0 0 7.51 16.18a9.88 9.88 0 0 0 7.52-3.46c19.12-22.47 32.35-45.54 38.25-66.71c6.14-22 4.43-42.21-5-58.38c-13.8-23.78-40.13-36.15-79.59-36.67h-.14a9.83 9.83 0 0 0-.12 19.66Zm-35.14 271.16a9.88 9.88 0 0 0-13.5 3.35c-16.41 27.15-36.57 42.1-56.77 42.1c-28.49 0-56-29.31-73.73-78.42a9.87 9.87 0 0 0-12.59-5.92a9.83 9.83 0 0 0-6 12.58c10 27.77 23.47 50.75 39 66.46c16.11 16.34 34.55 25 53.32 25c27.38 0 53.54-18.33 73.65-51.61a9.81 9.81 0 0 0-3.38-13.5Zm105.23-76.35a32.14 32.14 0 0 0-29.9 44.33c-41.8 19.5-119.8 4.79-191.87-36.62c-32.91-18.9-62.16-41.86-84.6-66.39a9.9 9.9 0 0 0-13.91-.65a9.8 9.8 0 0 0-.65 13.9c23.79 26 54.68 50.28 89.33 70.18c40.28 23.13 82.27 38.63 121.43 44.81a225.5 225.5 0 0 0 35 2.91c23.12 0 43-4.3 58.51-12.79a32.2 32.2 0 1 0 16.7-59.68Zm0 44.66a12.6 12.6 0 0 1-7.82-2.72a10 10 0 0 0-2.2-2.21a12.61 12.61 0 1 1 10 4.93Z"></svg:path><svg:path fill="currentColor" d="M82.09 338.59c.57-21.26 12.41-47 33.68-73.16c23.19-28.45 56.69-56 94.34-77.65c33.25-19.1 65.2-31.9 98.07-38.91a9.83 9.83 0 1 0-4.12-19.22c-34.85 7.43-68.78 21-103.79 41.09C116.09 219.09 59.9 289.88 62.46 343.9a32.32 32.32 0 1 0 19.63-5.31M80.3 383.2a12.5 12.5 0 1 1 12.59-12.5a12.56 12.56 0 0 1-12.59 12.5"></svg:path><svg:path fill="currentColor" d="M256.2 96.32a32.23 32.23 0 0 0 26.53-13.81c17.89 11.69 34 35 45.81 66.12c13 34.39 19.84 75.38 19.84 118.54c0 37.18-5.19 72.35-15 103.6a9.72 9.72 0 0 0 .66 7.49a9.82 9.82 0 0 0 5.8 4.84a9.89 9.89 0 0 0 12.34-6.44c10.42-33.14 15.93-70.34 15.93-109.49c0-47.17-7.77-91.77-22.47-129c-14.41-36.48-34.13-62.4-57.14-75.16a32.3 32.3 0 1 0-32.3 33.31m0-44.66a12.5 12.5 0 1 1-12.59 12.5a12.56 12.56 0 0 1 12.59-12.5m-5.2 191.7a24.35 24.35 0 0 0 5.16 48.16a24.7 24.7 0 0 0 5.16-.55A24.36 24.36 0 1 0 251 243.36"></svg:path>`,
})
export class FamiconsLogoElectronIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoEuroIcon],svg[famicons-logo-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.8 272v-48H376l8-48H231.8v-8.12c0-38.69 16.47-62.56 87.18-62.56c28.89 0 61.45 2.69 102.5 9.42l10.52-70A508.5 508.5 0 0 0 315.46 32C189.26 32 135 76.4 135 158.46V176H80v48h55v48H80v48h55v33.54C135 435.6 189.23 480 315.43 480a507.8 507.8 0 0 0 116.44-12.78l-10.58-70c-41.05 6.73-73.46 9.42-102.35 9.42c-70.7 0-87.14-20.18-87.14-67.94V320h128.47l7.87-48Z"></svg:path>`,
})
export class FamiconsLogoEuroIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoFacebookIcon],svg[famicons-logo-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16c24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31"></svg:path>`,
})
export class FamiconsLogoFacebookIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoFamibotIcon],svg[famicons-logo-famibot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M99 494.87c-.69-1.56-2.35-1.29-3.55-1.72c-13.08-4.62-21.1-16.12-21.68-30c-.79-18.88 3.41-36 16.29-50.35a43 43 0 0 1 9.3-8.39c3.1-1.88 2.46-3.23.47-5.53c-15.83-18.37-28.59-38.72-36.48-61.65Q22.81 219.39 104.5 125a32 32 0 0 1 2.86-3c1.41-1.25 1.15-2.17-.1-3.4c-8.6-8.6-17.26-17.12-25.65-25.8c-2.16-2.23-3.51-.62-5.19.25c-22.17 11.47-49.21.39-56.58-23.2A39.79 39.79 0 1 1 93.13 76c-1.79 3.38-1.21 5 1.26 7.32c7.94 7.63 15.7 15.46 23.39 23.36c2 2 3.12 2.39 5.51.38c41.06-34.5 88.56-50.92 142-48.79c46.39 1.84 87.62 18.05 123.28 47.91c3.23 2.71 4.84 2.54 7.63-.42c7.57-8 15.47-15.7 23.32-23.42c1.64-1.61 2.16-2.7.93-5.06c-7.9-15.16-7.14-30 3.33-43.61c10-13 23.79-17.92 39.67-14.38C480.08 23 490.44 33.69 494 50.56c.07.36.53.64.81.95v14c-1.22.32-.93 1.46-1.18 2.27c-8.05 26.17-33.56 37.07-58.06 24.68c-2.18-1.1-3.2-.62-4.68.89C423.43 101 416 108.69 408.16 116c-3.45 3.21-3.65 4.94-.27 8.52c55.55 58.73 70.71 148.36 38 222.38a205 205 0 0 1-32.81 52.08c-2.18 2.51-2.11 3.68.66 5.48a48.6 48.6 0 0 1 9.9 9.12c12.67 14.57 16.48 31.79 15.5 50.61A32.18 32.18 0 0 1 417 493.37c-1.68.55-3.74-.19-5.05 1.5H305.78c-.3-.31-.56-.79-.92-.88c-11.84-3.18-19.72-10.54-23.23-22.3c-.75-2.53-2.26-2.1-3.88-1.93a190.2 190.2 0 0 1-42.6-.06c-2.55-.3-3.35.64-4.07 3A31.48 31.48 0 0 1 219 489.2c-4.16 3-9.08 4-13.76 5.67Zm348.2-228.71a204 204 0 0 0-3.89-39.77c-20.61-99-112.65-164.2-212.78-150.83C143.1 87.24 74.29 158.85 66.7 247.06C62.2 299.32 77 346 110.28 386.72c4.41 5.4 8.42 9.84 15.94 5.85a5.2 5.2 0 0 1 1.84-.23c15.17-1.64 30.44-1.45 45.57-.5c31.62 2 56 26.61 58.62 58.21c.23 2.74 1.09 3.63 3.81 3.88a224 224 0 0 0 40.44 0c3.19-.29 4-1.32 4.21-4.42c1.83-28.43 25.44-53.56 53.58-57.21c13.3-1.72 26.66-.47 40-.82a53.3 53.3 0 0 1 17 2.14c3.2 1 5 .35 7.13-2.06c32.11-36.17 47.95-78.56 48.78-125.4M153.38 447.24c19.54 0 39.08-.1 58.62.09c3.73 0 4-1.2 3.25-4.23c-4.47-17.9-20.48-32.61-38.79-34.9c-14.35-1.8-28.86-1.51-43.19-.4c-20.78 1.61-36.81 15.94-42 35.28c-1 3.85 0 4.26 3.48 4.23c19.55-.14 39.09-.07 58.63-.07m206.48 0c19.69 0 39.38-.06 59.06.07c3.07 0 3.66-.75 3-3.65c-4.33-18.14-20.37-33.12-38.8-35.45c-14.34-1.82-28.85-1.48-43.17-.43c-20.66 1.51-36.92 15.84-42.1 35.15c-.91 3.39-.43 4.45 3.44 4.41c19.49-.21 39.03-.1 58.57-.1M153 463.13c-19.87 0-39.74.08-59.6-.07c-3.61 0-4.15 1-3.14 4.21c2.15 6.86 7.79 11.62 15.1 11.64q48 .15 95.93 0A15.6 15.6 0 0 0 216 468c1-3.15 1.14-5-3.36-4.92c-19.87.18-39.74.05-59.64.05m206.68 0c-19.86 0-39.73.11-59.59-.09c-4.16 0-4.22 1.56-3.24 4.64a15.75 15.75 0 0 0 15 11.23q48 .13 95.91 0c7.08 0 12.69-4.72 14.87-11.33c1.1-3.35.65-4.57-3.31-4.53c-19.87.18-39.74.08-59.61.08Zm71.63-405.3a23.68 23.68 0 0 0 23.82 23.94a23.83 23.83 0 1 0-23.82-23.94m-349.64.77a23.83 23.83 0 0 0-23.35-24.49c-12.83-.31-23.73 10.11-24.24 23.21s10.15 24.12 23.43 24.43A23.71 23.71 0 0 0 81.67 58.6"></svg:path><svg:path fill="currentColor" d="M256.6 145.41c26.38 0 52.76-.15 79.14 0c34.64.25 62.51 22.88 70.09 56.59c9.58 42.55-23.26 85.48-66.82 86c-54.93.62-109.87.52-164.8 0c-36.14-.33-66.39-30.41-68.55-66.8s23.82-69.17 59.29-74.87a92 92 0 0 1 14.84-1q38.4.06 76.81.08m0 15.9h-77.75a63.3 63.3 0 0 0-12.5 1c-27.63 5.53-47.32 31.38-44.77 58.87c2.68 28.8 25.81 51 54.29 51.1q81 .39 162 0c28.89-.18 53.13-24.93 53.61-53.68c.54-32.12-24-57.13-56.22-57.23c-26.26-.13-52.46-.06-78.68-.06ZM255 375.68a177.6 177.6 0 0 1-64.68-9.91a31.42 31.42 0 0 1-19.82-39.27c5.32-16.68 22.51-26 39.08-21a160.94 160.94 0 0 0 92.94.34a31.73 31.73 0 0 1 39.22 20.93c5.27 16.67-3.8 34-20.69 39.63c-21.18 6.98-37.18 9.29-66.05 9.28m-41.3-46.61c2.12-4.6-.66-6.68-5.62-7.42c-1.51-.22-3-.89-4.46-1.15a15.79 15.79 0 0 0-17.86 10.61a15.6 15.6 0 0 0 8.66 19.26c4.53 1.88 9.38 3 14.07 4.51c2.16.69 3 .05 3.18-2.31c.54-7.57 1.33-15.08 2.03-23.5m98.14-8.88c-4.1.08-7.76 1.9-11.62 2.95c-1.72.47-1.25 1.84-1.15 3c.75 8.79 1.55 17.57 2.23 26.36c.17 2.24.94 3.06 3.19 2.33c4.55-1.48 9.23-2.6 13.66-4.35a15.17 15.17 0 0 0 9.43-17.2c-1.58-7.79-7.99-13.11-15.74-13.09m-63.26 23.62c0-4.35-.1-8.69 0-13c.07-2.18-.66-3-2.84-3.15c-4.49-.26-9-.6-13.43-1.15c-2.29-.28-2.59.91-2.73 2.63c-.74 8.8-1.43 17.62-2.33 26.41c-.23 2.25.73 2.58 2.53 2.7c5.41.38 10.82.79 16.22 1.33c2.26.23 2.58-.88 2.55-2.71c-.01-4.38.03-8.72.03-13.06m15.93-.06v13c0 1.72.1 3 2.47 2.77c5.55-.57 11.12-1 16.69-1.39c1.71-.12 2.33-.61 2.13-2.55c-.93-8.95-1.69-17.92-2.44-26.88c-.14-1.73-.66-2.48-2.55-2.27c-4.47.49-9 .86-13.44 1.13c-2.12.13-3 .87-2.89 3.11c.14 4.38.02 8.73.03 13.08"></svg:path><svg:path fill="currentColor" d="M209.5 208.92c16.39.21 30.4 13.7 31.05 29.88c.23 5.74-2.72 9.56-7.56 9.78c-4.61.21-7.74-3.07-8.28-8.66c-.85-8.85-7.4-15.12-15.83-15.14s-15 6.22-15.84 15.06c-.53 5.59-3.66 8.9-8.26 8.74c-4.83-.17-7.75-3.91-7.59-9.7c.47-16.67 15.04-30.18 32.31-29.96m94.79-.01c16.55 0 30.61 13.17 31.43 29.37c.32 6.19-2.44 10-7.39 10.29c-4.74.24-7.79-3-8.44-9.07c-1.18-10.95-11.65-17.64-21.56-13.6c-6.13 2.5-9.37 7.34-10.1 13.9c-.67 6-3.85 9.18-8.59 8.74c-5-.47-7.78-4.6-7.21-10.55a31.91 31.91 0 0 1 31.86-29.08"></svg:path>`,
})
export class FamiconsLogoFamibotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoFamilyIcon],svg[famicons-logo-family-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.14 300.81c0-28.96-.4-57.92.17-86.86c.28-14.29 6.35-26.87 15.17-38.17c9.28-11.9 22.51-18.64 34.49-26.94c26.89-18.64 54.1-36.82 81.17-55.2c12.42-8.43 24.31-17.77 37.33-25.14c26.93-15.25 53.25-11.85 78.33 5.2c22.33 15.19 44.62 30.45 66.94 45.65c21.1 14.36 42.47 28.33 63.26 43.12c16 11.38 26.27 26.72 28.93 46.78c.64 4.84.59 9.59.63 14.37c.04 4.71-5.16 10.16-10.01 11.25c-5.6 1.26-11.47-1.32-14.01-6.25c-1.5-2.92-2.45-5.96-2.34-9.38c.49-15.59-6.94-27.26-19.22-35.77c-27.23-18.89-54.75-37.36-82.18-55.97c-17.81-12.08-35.3-24.7-53.63-35.94c-15.45-9.47-31.7-8.44-46.82 1.68c-25.5 17.06-50.81 34.38-76.17 51.65c-19.05 12.97-38.04 26.03-57.05 39.06c-10.81 7.4-16.45 18.12-18.73 30.6c-.48 2.64.19 5.85.2 8.79c.05 53.57.26 107.13-.01 160.69c-.1 20.28 15.81 39.1 36.2 42.22c3.31.51 6.44.08 9.63.09c45.82.11 91.65.08 137.47.07c4.7 0 9.16.63 12.92 3.86c4.43 3.81 4.31 8.93 3.26 13.72c-1.01 4.6-4.69 7.5-9.39 8.5c-2.34.5-4.8.58-7.21.58c-45.52.03-91.04-.18-136.56.15c-13.38.1-25.79-2.59-37.34-9.06c-18.12-10.15-29.09-25.77-34.01-45.79c-1.44-5.87-1.51-11.89-1.51-17.9V300.8h.12Z"></svg:path><svg:path fill="currentColor" d="M473 337.43c-.13 20.76-7.36 38.93-19.86 55.3c-18.25 23.91-42.24 40.26-69.17 52.65c-6.48 2.98-12.97 6.4-20.25 7.12c-8.34.83-15.35-3.62-22.53-6.73c-15.76-6.82-30.49-15.62-43.8-26.45c-17.08-13.89-31.8-30.08-39.83-50.9c-10.55-27.36-7.92-54.01 8.95-78.18c11.91-17.07 29.05-25.74 50.17-26.23c16-.38 30.37 4.26 43.36 13.33c1.85 1.29 2.7 1.38 4.55.04c14.24-10.34 30.3-15.07 47.76-13.21c22.52 2.4 39.7 13.55 50.63 33.67c6.89 12.69 9.96 25.2 10.02 39.57Zm-194.88.68c0 2.27-.38 4.63.06 6.81c2.83 14.07 9.03 26.64 18.5 37.31c16.09 18.14 35.86 31.29 58.07 40.81c3.57 1.53 7.24 3.46 11.39 1.34c2.21-1.13 4.65-1.81 6.91-2.86c22.42-10.44 42.69-23.81 58.24-43.44c8.23-10.38 14.19-21.98 15.16-35.3c1-13.78-1.66-26.77-10.57-38.2c-9.73-12.47-24.72-15.85-37.69-13.6c-10.02 1.74-18.15 6.83-25.09 14.11c-6.11 6.41-15.68 6.29-21.8-.12c-2.37-2.49-4.81-4.91-7.71-6.85c-17.55-11.74-39.85-10.41-52.76 3.92c-9.09 10.09-12.84 22.5-12.72 36.07Z"></svg:path>`,
})
export class FamiconsLogoFamilyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoFigmaIcon],svg[famicons-logo-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 176a80 80 0 0 0 0-160H176a80 80 0 0 0 0 160a80 80 0 0 0 0 160a80 80 0 1 0 80 80V176Z"></svg:path><svg:circle cx="336" cy="256" r="80" fill="currentColor"></svg:circle>`,
})
export class FamiconsLogoFigmaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoFirebaseIcon],svg[famicons-logo-firebase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m93.19 329.38l47.45-304.07c1.64-10.37 15.55-12.82 20.46-3.55l51 95.45ZM432 400l-46.74-276.79a11 11 0 0 0-18.54-6L80 400l159.36 91.91a33.18 33.18 0 0 0 31.91 0ZM302.36 158.93l-36.54-69.54a10.86 10.86 0 0 0-19.36 0L85.83 375.74Z"></svg:path>`,
})
export class FamiconsLogoFirebaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoFirefoxIcon],svg[famicons-logo-firefox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M471.46 194.62v-.07c-.22-.76-.45-1.52-.68-2.28c-.05-.19-.11-.38-.17-.56c-.43-1.44-.87-2.88-1.33-4.31l-.06-.2a223 223 0 0 0-10-25.56a192 192 0 0 0-12.9-23.8a225.15 225.15 0 0 0-74.74-73.74A222.9 222.9 0 0 0 256 32c-7 0-14 .34-20.82 1c-24.12 2.54-64.78 11.21-97.77 40.18C257.5 11.86 417.94 85.7 404.29 223c-4.86 49-46.46 82.67-85.19 88.35a73.7 73.7 0 0 1-20.8.21c-94.59-13.15-88.8-90.68-60.06-123.83c-38-.24-67.47 46.79-53.15 93c-32.95-61.18.35-157 70.93-186c-82.95-12-160.71 28.2-185.7 98.07A330.2 330.2 0 0 1 88.07 118s-45.22 35.74-54.44 110.9c-.14 1.16-.27 2.32-.39 3.49c-.05.4-.09.8-.13 1.21q-.53 5.25-.8 10.57v.81c-.07 1.48-.13 3-.17 4.46v1.25c0 1.76-.07 3.52-.07 5.29c0 123.71 100.29 224 224 224S480 379.71 480 256a224 224 0 0 0-8.54-61.38"></svg:path>`,
})
export class FamiconsLogoFirefoxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoFlickrIcon],svg[famicons-logo-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C132.8 32 32 132.8 32 256s100.8 224 224 224s224-100.8 224-224S379.2 32 256 32m-82.16 280A56 56 0 1 1 228 257.84A56 56 0 0 1 173.84 312m168 0A56 56 0 1 1 396 257.84A56 56 0 0 1 341.84 312"></svg:path>`,
})
export class FamiconsLogoFlickrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoFoursquareIcon],svg[famicons-logo-foursquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M376.76 32H138.54C105.67 32 96 56.8 96 72.41v379.64c0 17.59 9.42 24.12 14.72 26.27s19.91 4 28.67-6.17c0 0 112.47-130.89 114.4-132.83c2.92-2.93 2.92-2.93 5.84-2.93h72.77c30.58 0 35.49-21.87 38.69-34.75c2.65-10.79 32.48-164 42.45-212.56C421.14 52 411.74 32 376.76 32m-5.67 269.64c2.65-10.79 32.48-164 42.45-212.56m-50.85 7.59l-10 51.73c-1.19 5.65-8.28 11.6-14.86 11.6h-95.92c-10.44 0-17.91 6.14-17.91 16.6v13.45c0 10.47 7.52 17.89 18 17.89h81.85c7.38 0 14.61 8.11 13 16s-9.09 46.57-10 50.89s-5.84 11.72-14.61 11.72H248c-11.7 0-15.24 1.54-23.07 11.3s-78.26 94.59-78.26 94.59c-.71.82-1.41.58-1.41-.31V95.9c0-6.69 5.8-14.53 14.48-14.53h191.14a12.42 12.42 0 0 1 11.81 15.3"></svg:path>`,
})
export class FamiconsLogoFoursquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoGithubIcon],svg[famicons-logo-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.6 17.6 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4c0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6c-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8c11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8a18.6 18.6 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.2 208.2 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.6 18.6 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 3.1 11.5 11.4 11.5a19.4 19.4 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32"></svg:path>`,
})
export class FamiconsLogoGithubIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoGitlabIcon],svg[famicons-logo-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m494.07 281.6l-25.18-78.08a11 11 0 0 0-.61-2.1l-50.5-156.94a20.08 20.08 0 0 0-19.17-13.82a19.77 19.77 0 0 0-18.95 13.94l-48.14 149.55h-152L131.34 44.59a19.76 19.76 0 0 0-18.86-13.94h-.11a20.15 20.15 0 0 0-19.12 14L42.7 201.73c0 .14-.11.26-.16.4l-25.63 79.48a29.15 29.15 0 0 0 10.44 32.46l221.44 162.41a11.25 11.25 0 0 0 13.38-.07l221.48-162.34a29.13 29.13 0 0 0 10.42-32.47m-331-64.51l61.73 191.76L76.63 217.09m209.64 191.8l59.19-183.84l2.55-8h86.52L300.47 390.44M398.8 59.31l43.37 134.83h-86.82M324.16 217l-43 133.58l-25.66 79.56L186.94 217M112.27 59.31l43.46 134.83H69M40.68 295.58a6.19 6.19 0 0 1-2.21-6.9l19-59l139.61 180.59m273.26-114.69L313.92 410.22l.52-.69L453.5 229.64l19 59a6.2 6.2 0 0 1-2.19 6.92"></svg:path>`,
})
export class FamiconsLogoGitlabIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoGoogleIcon],svg[famicons-logo-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72c-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 0 1-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4c57.73 0 112.45-22.62 151.45-63.66c38.34-40.4 58.17-96.3 58.17-154.9c0-24.67-2.48-39.32-2.59-39.96"></svg:path>`,
})
export class FamiconsLogoGoogleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoGooglePlaystoreIcon],svg[famicons-logo-google-playstore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256L55.37 56.42A4.33 4.33 0 0 0 48 59.49M345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32ZM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95ZM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50"></svg:path>`,
})
export class FamiconsLogoGooglePlaystoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoHackernewsIcon],svg[famicons-logo-hackernews-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 32v448h448V32Zm249.67 250.83v84H235v-84l-77-140h55l46.32 97.54l44.33-97.54h52.73Z"></svg:path>`,
})
export class FamiconsLogoHackernewsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoHtml5Icon],svg[famicons-logo-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m64 32l34.94 403.21L255.77 480L413 435.15L448 32Zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28l-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2Z"></svg:path>`,
})
export class FamiconsLogoHtml5Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoInstagramIcon],svg[famicons-logo-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34zm0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32"></svg:path><svg:path fill="currentColor" d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28M256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112"></svg:path>`,
})
export class FamiconsLogoInstagramIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoIonicIcon],svg[famicons-logo-ionic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 153.9A102.1 102.1 0 1 0 358.1 256A102.23 102.23 0 0 0 256 153.9"></svg:path><svg:circle cx="402.59" cy="116.45" r="46.52" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m459.86 163.2l-1.95-4.28l-3.11 3.52a70 70 0 0 1-28.06 19.32l-3 1.1l1.22 2.93A181.4 181.4 0 0 1 439 256c0 100.92-82.1 183-183 183S73 356.92 73 256S155.08 73 256 73a180.94 180.94 0 0 1 78.43 17.7l2.87 1.3l1.25-2.92A70.2 70.2 0 0 1 359.21 62l3.67-2.93l-4.17-2.07A221.6 221.6 0 0 0 256 32C132.49 32 32 132.49 32 256s100.49 224 224 224s224-100.49 224-224a222.2 222.2 0 0 0-20.14-92.8"></svg:path>`,
})
export class FamiconsLogoIonicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoJavascriptIcon],svg[famicons-logo-javascript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 32v448h448V32Zm240 348c0 43.61-25.76 64.87-63.05 64.87c-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65c12 0 21.86-5.41 21.86-26.46V240h44Zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56c17.44 0 27.57-7.72 27.57-19.75c0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45c0-31.57 24.05-54.63 61.64-54.63c26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18c-12.33 0-20.15 7.82-20.15 18c0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16c.01 37.9-29.76 57.64-69.76 57.64"></svg:path>`,
})
export class FamiconsLogoJavascriptIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoJigraIcon],svg[famicons-logo-jigra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M303.31 164.3c20.09 0 40.21-.1 60.33 0a46.24 46.24 0 0 1 44.88 35c3.43 13.49.66 25.9-7 37.38Q358.39 301 315.36 365.27q-37.73 56.31-75.42 112.64c-3.72 5.57-8.33 9.26-15.33 8.83c-8.14-.5-14.15-7.12-14.22-15.8c-.1-12.79 0-25.59 0-38.38c0-46.86-.05-93.72.1-140.58c0-3.94-.85-5-4.88-4.93c-18.23.25-36.46.14-54.69.1c-32.69-.07-54.35-27.9-46-59.35q22-83.27 44.27-166.45A46.82 46.82 0 0 1 195 26.11c30.07-.11 60.13-.18 90.19 0c32.07.23 53.81 30.89 43.6 61.38c-8.06 24-16.32 48-24.49 72c-.5 1.45-1.41 2.85-.99 4.81m-62.23 256.5c1.43-2.07 2.14-3.06 2.82-4.07q34.16-51 68.29-101.89q31.6-47.18 63.26-94.3c3.55-5.26 5.25-10.54 2.19-16.54c-3.14-6.17-8.34-8.95-15.18-8.94h-78.7c-14.29 0-20.93-9.34-16.29-22.91q15.93-46.6 31.88-93.21c4.17-12.22-2.78-22-15.66-22.08q-43.91-.08-87.81 0c-9.35 0-14.83 4.31-17.26 13.42q-21.94 82.3-43.85 164.62c-3.38 12.67 3.43 21.56 16.52 21.58h72a25.4 25.4 0 0 1 6.18.51c7.49 1.88 11.62 7.83 11.62 16.57c-.01 48.61-.01 97.23-.01 147.24"></svg:path>`,
})
export class FamiconsLogoJigraIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoKduIcon],svg[famicons-logo-kdu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M441.65 167.65c0 43.26.25 86.51-.12 129.77c-.16 18.45-2.62 36.69-8.96 54.25c-6.86 19-17.11 35.96-30.09 51.28c-15.03 17.75-32.39 32.86-52.22 45.14c-20.77 12.86-43 22.24-66.46 28.85c-2.75.78-5.48 1.64-8.22 2.44c-2.67.77-3.91-.14-3.9-3.04c.01-3.77-.35-7.55-.35-11.32c.03-25.1.12-50.21.15-75.31c0-3-.11-6.02-.47-9c-.56-4.73 1.7-7.4 5.9-8.85c11.75-4.06 22.86-9.44 33.28-16.22c20.8-13.53 35.05-31.86 41.78-56.02c3.9-14.01 4.71-28.22 5.52-42.64c1.32-23.26.32-46.49.79-69.73c.1-4.94-.03-4.99-4.5-2.72q-39.135 19.875-78.24 39.78c-4.07 2.07-4.47 1.89-4.47-2.83c-.03-20.57-.75-41.17.21-61.7c.87-18.6 8.64-34.46 23.21-46.79c18.87-15.99 40.72-26.95 62.52-38.08c20.02-10.22 39.92-20.68 59.88-31.01c6.71-3.47 13.44-6.88 20.17-10.31c4.45-2.26 4.6-2.17 4.61 2.93v131.13Zm-287.68 58.64c0 13-.47 26.03.1 39.01c1.13 25.92 7.73 50.2 24.73 70.53c7.92 9.48 17.53 17.26 28.39 23.32c9.53 5.32 19.46 9.8 29.71 13.53c2.58.94 3.71 2.44 3.71 5.36c.04 32.66.14 65.32.41 97.98c.03 3.78-1.92 4.27-4.43 3.45c-14.65-4.78-29.67-8.38-43.7-15.12c-13.45-6.46-26.69-13.14-39.06-21.54c-17.89-12.15-33.38-26.78-47.08-43.5c-13.48-16.45-23.54-34.72-30.17-54.83c-2.59-7.85-4.73-16.01-5.14-24.32c-2.2-44.08-.64-88.2-.91-132.3c-.3-50.36-.06-100.73-.05-151.09q0-5.32 4.97-2.84c19.16 9.63 38.21 19.46 57.07 29.67c15.71 8.5 31.83 16.24 47.66 24.52c15.33 8.01 29.79 17.35 42.22 29.53c9.79 9.59 14.95 21.42 16.89 34.87c2.52 17.52 2.27 35.14 1.61 52.72c-.23 5.98-.68 11.97-.71 17.98c0 2.1-.62 2.8-2.67 1.76c-3.57-1.8-7.25-3.39-10.77-5.27c-13.28-7.11-26.81-13.76-40.19-20.67c-9.57-4.94-19.29-9.59-28.7-14.8c-3.41-1.88-3.96-1.51-3.94 2.14c.1 13.31.04 26.61.04 39.92Z"></svg:path>`,
})
export class FamiconsLogoKduIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoLaravelIcon],svg[famicons-logo-laravel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M505.57 234.62c-3.28-3.53-26.82-32.29-39.51-47.79c-6.75-8.24-12.08-14.75-14.32-17.45l-.18-.22l-.2-.21c-5.22-5.83-12.64-12.51-23.78-12.51a40 40 0 0 0-5.41.44c-.37.05-.75.11-1.15.15c-2.45.27-10.06 1.5-28.14 4.48c-14 2.29-35.11 5.77-38.31 6.07l-.71.06l-.69.13c-10 1.78-16.62 6.22-19.56 13.19c-1.55 3.68-3.22 11.15 2.94 19.86c1.53 2.22 6.83 9.56 15.94 22.17c6.06 8.4 12.87 17.82 18.75 26L259.9 275L150.66 96.05l-.2-.34l-.23-.33l-.44-.65C145.32 88.17 139.76 80 123.7 80c-1.13 0-2.31 0-3.63.11c-4.6.25-21.42 1.57-40.89 3.11c-21.49 1.69-50.9 4-54.72 4.1h-.73l-.79.08c-9.14.89-15.77 4.6-19.7 11c-6.55 10.69-1.42 22.69.26 26.63C6.87 133 37.56 197.7 64.63 254.81c18 37.94 36.58 77.17 38.1 80.65a34.85 34.85 0 0 0 32.94 21.59a46.6 46.6 0 0 0 9.86-1.1h.21l.2-.05c13.86-3.38 57.83-14.54 89.2-22.59c1.9 3.32 3.9 6.83 6 10.44c21.93 38.5 37.9 66.35 43.16 73.46C287 421 295 432 310.06 432c5.46 0 10.46-1.4 15.74-2.89l1.53-.43h.12c10.53-3 150.69-52.16 157.87-55.35l.22-.1c5.44-2.41 13.66-6.05 16.18-15.4c1.65-6.12.18-12.33-4.38-18.46l-.07-.09l-.07-.09c-.85-1.1-4-5.21-8.27-10.9c-9.13-12.07-23.88-31.57-36.84-48.54c17.37-4.5 38.8-10.11 43.38-11.55c11.47-3.43 14.94-10.69 16-14.73c.79-3.15 1.82-11.2-5.9-18.85m-320 58.19c-17.81 4.17-30.22 7.08-37.89 8.9c-6.67-13.34-19.74-39.65-32.5-65.33c-29.74-59.92-45.1-90.77-53.18-106.9l8.15-.7c13.34-1.15 31.61-2.72 41.78-3.57c16.76 28.26 74.32 125.3 96.3 162.3Zm178.16 66.64c-24.21 8-37.33 12.37-44.42 14.74c-6.3-10.34-20.16-33.52-32.47-54.19l115.7-29.48c5 6.81 14.57 19.72 33.46 44.93c-18.07 6.04-48.2 16.02-72.27 24m55.87-121.63l-23.76-31.53c13.67-2.39 21.54-3.77 26.15-4.6l12 14.88l11.94 14.82c-8.2 1.99-17.74 4.32-26.33 6.43"></svg:path>`,
})
export class FamiconsLogoLaravelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoLinkedinIcon],svg[famicons-logo-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32m-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43c0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43m264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44c-17.74 0-28.24 12-32.91 23.69c-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44c42.13 0 74 27.77 74 87.64Z"></svg:path>`,
})
export class FamiconsLogoLinkedinIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoMarkdownIcon],svg[famicons-logo-markdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M475 64H37C16.58 64 0 81.38 0 102.77v306.42C0 430.59 16.58 448 37 448h438c20.38 0 37-17.41 37-38.81V102.77C512 81.38 495.42 64 475 64M288 368h-64V256l-48 64l-48-64v112H64V144h64l48 80l48-80h64Zm96 0l-80-112h48.05L352 144h64v112h48Z"></svg:path>`,
})
export class FamiconsLogoMarkdownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoMastodonIcon],svg[famicons-logo-mastodon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 173.59c0-104.13-68.26-134.65-68.26-134.65C377.3 23.15 318.2 16.5 256.8 16h-1.51c-61.4.5-120.46 7.15-154.88 22.94c0 0-68.27 30.52-68.27 134.65c0 23.85-.46 52.35.29 82.59C34.91 358 51.11 458.37 145.32 483.29c43.43 11.49 80.73 13.89 110.76 12.24c54.47-3 85-19.42 85-19.42l-1.79-39.5s-38.93 12.27-82.64 10.77c-43.31-1.48-89-4.67-96-57.81a108 108 0 0 1-1-14.9a559 559 0 0 0 96.39 12.85c32.95 1.51 63.84-1.93 95.22-5.67c60.18-7.18 112.58-44.24 119.16-78.09c10.42-53.34 9.58-130.17 9.58-130.17m-80.54 134.16h-50V185.38c0-25.8-10.86-38.89-32.58-38.89c-24 0-36.06 15.53-36.06 46.24v67h-49.66v-67c0-30.71-12-46.24-36.06-46.24c-21.72 0-32.58 13.09-32.58 38.89v122.37h-50V181.67q0-38.65 19.75-61.39c13.6-15.15 31.4-22.92 53.51-22.92c25.58 0 44.95 9.82 57.75 29.48L256 147.69l12.45-20.85c12.81-19.66 32.17-29.48 57.75-29.48c22.11 0 39.91 7.77 53.51 22.92q19.79 22.72 19.75 61.39Z"></svg:path>`,
})
export class FamiconsLogoMastodonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoMediumIcon],svg[famicons-logo-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 28v456h456V28zm378.83 108.04l-24.46 23.45a7.16 7.16 0 0 0-2.72 6.86v172.28c-.44 2.61.61 5.26 2.72 6.86l23.88 23.45v5.15H286.13v-5.15l24.74-24.02c2.43-2.43 2.43-3.15 2.43-6.86V198.81l-68.79 174.71h-9.3l-80.09-174.71v117.1c-.67 4.92.97 9.88 4.43 13.44l32.18 39.03v5.15h-91.24v-5.15l32.18-39.03c3.44-3.57 4.98-8.56 4.15-13.44V180.5c.38-3.76-1.05-7.48-3.86-10.01l-28.6-34.46v-5.15h88.81l68.65 150.55l60.35-150.55h84.66z"></svg:path>`,
})
export class FamiconsLogoMediumIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoMicrosoftIcon],svg[famicons-logo-microsoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.87 30.58H244.7v212.81H31.87Zm235.02 0H479.7v212.81H266.89ZM31.87 265.61H244.7v212.8H31.87Zm235.02 0H479.7v212.8H266.89Z"></svg:path>`,
})
export class FamiconsLogoMicrosoftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoNoSmokingIcon],svg[famicons-logo-no-smoking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M360 256h16v48h-16zm-248 48h129.6l-48-48H112z"></svg:path><svg:path fill="currentColor" d="M364.5 60.1a9 9 0 0 1-1-.6a219 219 0 0 0-34.4-14.8l-5.4-1.8A223.2 223.2 0 0 0 256 32C132.3 32 32 132.3 32 256a223.71 223.71 0 0 0 115.4 195.8c.4.2.7.5 1.1.7a219 219 0 0 0 34.4 14.8l5.4 1.8A222.7 222.7 0 0 0 256 480c123.7 0 224-100.3 224-224A223.76 223.76 0 0 0 364.5 60.1M256 426.4a162 162 0 0 1-27.2-2.4a170 170 0 0 1-28.5-7.3c-1.9-.6-3.8-1.2-5.6-1.9a162 162 0 0 1-19-8.6a170.33 170.33 0 0 1-90.1-150.3c0-37.2 12.4-71.4 32.7-99.4l237.2 237.2c-28.1 20.3-62.3 32.7-99.5 32.7m137.8-71L156.6 118.2c28-20.2 62.1-32.6 99.4-32.6a163 163 0 0 1 27.2 2.4a170 170 0 0 1 28.5 7.3c1.8.6 3.7 1.2 5.6 1.9a162 162 0 0 1 18 8.1a170.25 170.25 0 0 1 91.2 150.8c-.1 37.2-12.5 71.3-32.7 99.3"></svg:path><svg:path fill="currentColor" d="M352 256h-34l34 34zm32 0h16v48h-16zm-23.9-43.3c-8.8-4.1-22-5.7-45.6-5.7h-3.6c-12.7.1-15.9-.1-20-6.1c-2.8-4.2-1-14.8 3.7-21.9a8 8 0 0 0 .4-8.2a8.26 8.26 0 0 0-7-4.3a53.7 53.7 0 0 1-18.3-3.9c-10.6-4.5-15.6-12.1-15.6-23.1c0-25.8 21.8-27.7 22.8-27.7v-16c-12 0-38.8 11-38.8 43.7c0 17.5 9 31 25.7 38a66.6 66.6 0 0 0 12 3.6c-3.3 9.8-3.6 20.9 1.7 28.7c9 13.3 20.3 13.2 33.3 13.1h3.5c26.3 0 34.6 2.3 38.9 4.3c5.7 2.6 6.8 7.5 6.6 15.7v1h16v-1c0-7.1.3-22.8-15.7-30.2"></svg:path><svg:path fill="currentColor" d="M400 244c0-25.7-3-39.2-9.1-49.6C382.3 180 368.5 172 352 172h-17.4c2.9-8.3 5.4-19.8 3.5-30.9c-3.2-18.8-19.1-30-43.1-30v16c21 0 26.1 9.1 27.4 16.7c2.5 14.5-6.8 32.1-6.9 32.3a8 8 0 0 0 .1 7.9a8.06 8.06 0 0 0 6.9 3.9H352c10.9 0 19.4 4.9 25.1 14.6c3.1 5.3 6.9 13.5 6.9 41.4h16Z"></svg:path>`,
})
export class FamiconsLogoNoSmokingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoNodejsIcon],svg[famicons-logo-nodejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M429.76 130.07L274.33 36.85a37 37 0 0 0-36.65 0L82.24 130.06A38.2 38.2 0 0 0 64 162.83V349a38.26 38.26 0 0 0 18.24 32.8L123 406.14l.23.13c20.58 10.53 28.46 10.53 37.59 10.53c32.14 0 52.11-20.8 52.11-54.29V182a8.51 8.51 0 0 0-8.42-8.58h-22.38a8.51 8.51 0 0 0-8.42 8.58v180.51a15 15 0 0 1-6.85 13.07c-5.9 3.6-14.47 2.84-24.14-2.15l-39.06-23.51a1.1 1.1 0 0 1-.48-.92V165.46a1.32 1.32 0 0 1 .59-1.06l151.84-93a.82.82 0 0 1 .73 0l151.93 93a1.34 1.34 0 0 1 .55 1.1V349a1.28 1.28 0 0 1-.45 1l-152.06 90.65a1.22 1.22 0 0 1-.8 0l-38.83-23.06a7.8 7.8 0 0 0-7.83-.41l-.34.2c-10.72 6.35-13.6 8-23.54 11.62c-1.62.59-5.43 2-5.76 5.77s3.29 6.45 6.51 8.32l51.9 31.87a35.67 35.67 0 0 0 18.3 5.07h.58a35.87 35.87 0 0 0 17.83-5.07l155.43-93.13A38.37 38.37 0 0 0 448 349V162.83a38.21 38.21 0 0 0-18.24-32.76"></svg:path><svg:path fill="currentColor" d="M307.88 318.05c-37.29 0-45.24-10.42-47.6-27.24a8.43 8.43 0 0 0-8.22-7.32h-19.8a8.44 8.44 0 0 0-8.26 8.58c0 14.58 5.12 62.17 83.92 62.17c24.38 0 44.66-5.7 58.63-16.49S388 311.26 388 292.55c0-37.55-24.5-47.83-72.75-54.55c-49.05-6.82-49.05-10.29-49.05-17.89c0-5.47 0-18.28 35.46-18.28c25.23 0 38.74 3.19 43.06 20a8.35 8.35 0 0 0 8.06 6.67h19.87a8.24 8.24 0 0 0 6.16-2.86a8.9 8.9 0 0 0 2.12-6.44c-2.57-35.55-28.56-53.58-79.24-53.58c-46.06 0-73.55 20.75-73.55 55.5c0 38.1 28.49 48.87 71.29 53.33c50 5.17 50 12.71 50 19.37c.03 10.38-4.28 24.23-41.55 24.23"></svg:path>`,
})
export class FamiconsLogoNodejsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoNpmIcon],svg[famicons-logo-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.6 213.1H256v57.1h-28.4z"></svg:path><svg:path fill="currentColor" d="M0 156v171.4h142.2V356H256v-28.6h256V156Zm142.2 142.9h-28.4v-85.7H85.3v85.7H28.4V184.6h113.8Zm142.2 0h-56.9v28.6h-56.9V184.6h113.8Zm199.2 0h-28.4v-85.7h-28.4v85.7h-28.4v-85.7H370v85.7h-56.9V184.6h170.7v114.3Z"></svg:path>`,
})
export class FamiconsLogoNpmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoOctocatIcon],svg[famicons-logo-octocat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.86 290.12c-9.75 0-18.11 4.56-24.86 13.87s-10.07 20.58-10.07 34s3.43 24.91 10.07 34.12S163 386 172.86 386c9.1 0 17-4.66 23.68-13.87s10.07-20.58 10.07-34.12s-3.43-24.81-10.07-34s-14.54-13.89-23.68-13.89m167.46 0c-9.64 0-18.11 4.56-24.86 13.87s-10.07 20.58-10.07 34s3.43 24.91 10.07 34.12S330.57 386 340.32 386c9.11 0 17-4.66 23.79-13.87s10.07-20.58 10.07-34.12s-3.43-24.81-10.07-34s-14.57-13.89-23.79-13.89"></svg:path><svg:path fill="currentColor" d="M459.36 165c-.11 0 2.89-15.49.32-42.47c-2.36-27-8-51.78-17.25-74.53c0 0-4.72.87-13.72 3.14S405 58 384.89 67.18c-19.82 9.2-40.71 21.44-62.46 36.29c-14.79-4.23-36.86-6.39-66.43-6.39c-28.18 0-50.25 2.16-66.43 6.39Q117.9 53.25 69.46 48q-13.81 34.13-17.14 74.75c-2.57 27 .43 42.58.43 42.58C26.71 193.82 16 234.88 16 268.78c0 26.22.75 49.94 6.54 71c6 20.91 13.6 38 22.6 51.14A147.5 147.5 0 0 0 79 425.43c13.39 10.08 25.71 17.34 36.86 21.89c11.25 4.76 24 8.23 38.57 10.72a279 279 0 0 0 32.68 4.34s30 1.62 69 1.62s68.89-1.62 68.89-1.62a285 285 0 0 0 32.68-4.38a179 179 0 0 0 38.46-10.72c11.15-4.66 23.47-11.81 37-21.89a145 145 0 0 0 33.75-34.55c9-13.11 16.6-30.23 22.6-51.14s6.51-44.81 6.51-71.03c0-32.82-10.71-74.42-36.64-103.67m-70.07 253.07C359.39 432.26 315.46 438 257.18 438h-2.25c-58.29 0-102.22-5.63-131.57-19.93s-44.25-43.45-44.25-87.43c0-26.32 9.21-47.66 27.32-64c7.93-7 17.57-11.92 29.57-14.84s22.93-3 33.21-2.71c10.08.43 24.22 2.38 42.11 3.79s31.39 3.25 44.79 3.25c12.53 0 29.14-2.17 55.82-4.33s46.61-3.25 59.46-1.09c13.18 2.17 24.65 6.72 34.4 15.93q28.44 25.67 28.5 64c-.11 43.98-15.22 73.24-45 87.43"></svg:path>`,
})
export class FamiconsLogoOctocatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoPaypalIcon],svg[famicons-logo-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M424.81 148.79c-.43 2.76-.93 5.58-1.49 8.48c-19.17 98-84.76 131.8-168.54 131.8h-42.65a20.67 20.67 0 0 0-20.47 17.46l-21.84 137.84l-6.18 39.07a10.86 10.86 0 0 0 9.07 12.42a11 11 0 0 0 1.7.13h75.65a18.18 18.18 0 0 0 18-15.27l.74-3.83l14.24-90l.91-4.94a18.16 18.16 0 0 1 18-15.3h11.31c73.3 0 130.67-29.62 147.44-115.32c7-35.8 3.38-65.69-15.16-86.72a72.3 72.3 0 0 0-20.73-15.82"></svg:path><svg:path fill="currentColor" d="M385.52 51.09C363.84 26.52 324.71 16 274.63 16H129.25a20.75 20.75 0 0 0-20.54 17.48l-60.55 382a12.43 12.43 0 0 0 10.39 14.22a12.6 12.6 0 0 0 1.94.15h89.76l22.54-142.29l-.7 4.46a20.67 20.67 0 0 1 20.47-17.46h42.65c83.77 0 149.36-33.86 168.54-131.8c.57-2.9 1.05-5.72 1.49-8.48c5.7-36.22-.05-60.87-19.72-83.19"></svg:path>`,
})
export class FamiconsLogoPaypalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoPinterestIcon],svg[famicons-logo-pinterest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256.05 32c-123.7 0-224 100.3-224 224c0 91.7 55.2 170.5 134.1 205.2c-.6-15.6-.1-34.4 3.9-51.4c4.3-18.2 28.8-122.1 28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2 19.2-58 43.2-58c20.4 0 30.2 15.3 30.2 33.6c0 20.5-13.1 51.1-19.8 79.5c-5.6 23.8 11.9 43.1 35.4 43.1c42.4 0 71-54.5 71-119.1c0-49.1-33.1-85.8-93.2-85.8c-67.9 0-110.3 50.7-110.3 107.3c0 19.5 5.8 33.3 14.8 43.9c4.1 4.9 4.7 6.9 3.2 12.5c-1.1 4.1-3.5 14-4.6 18c-1.5 5.7-6.1 7.7-11.2 5.6c-31.3-12.8-45.9-47-45.9-85.6c0-63.6 53.7-139.9 160.1-139.9c85.5 0 141.8 61.9 141.8 128.3c0 87.9-48.9 153.5-120.9 153.5c-24.2 0-46.9-13.1-54.7-27.9c0 0-13 51.6-15.8 61.6c-4.7 17.3-14 34.5-22.5 48a225.1 225.1 0 0 0 63.5 9.2c123.7 0 224-100.3 224-224S379.75 32 256.05 32"></svg:path>`,
})
export class FamiconsLogoPinterestIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoPlaystationIcon],svg[famicons-logo-playstation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M399.77 203c-.8-17.1-3.3-34.5-10.8-50.1a82.5 82.5 0 0 0-16.5-23.2a105.6 105.6 0 0 0-21.3-16.3c-17.1-10.2-37.5-17-84.4-31S192 64 192 64v358.3l79.9 25.7s.1-198.8.1-299.5v-3.8c0-9.3 7.5-16.8 16.1-16.8h.5c8.5 0 15.5 7.5 15.5 16.8V278c11 5.3 29.2 9.3 41.8 9.1a47.8 47.8 0 0 0 24-5.7a49.1 49.1 0 0 0 18.4-17.8a78.6 78.6 0 0 0 9.9-27.3c1.87-10.8 1.97-22.1 1.57-33.3M86.67 357.8c27.4-9.8 89.3-29.5 89.3-29.5v-47.2s-76.5 24.8-111.3 37.1c-8.6 3.1-17.3 5.9-25.7 9.5c-9.8 4.1-19.4 8.7-28.1 14.8a26.3 26.3 0 0 0-9.2 10.1a17.36 17.36 0 0 0-.5 13.6c2 5.1 5.8 9.3 10.1 12.6c7.8 5.9 17.1 9.5 26.4 12.2a262.4 262.4 0 0 0 88.4 13.3c14.5-.2 36-1.9 50-4.4v-42s-11 2.5-41.3 12.5c-4.6 1.5-9.2 3.3-14 4.3a105 105 0 0 1-21.6 2.2c-6.5-.3-13.2-.7-19.3-3.1c-2.2-1-4.6-2.2-5.5-4.6c-.8-2 .3-4 1.7-5.4c2.8-2.9 6.8-4.5 10.6-6"></svg:path><svg:path fill="currentColor" d="M512 345.9c-.1-6-3.7-11.2-7.9-15c-7.1-6.3-15.9-10.3-24.7-13.5c-5.5-1.9-9.3-3.3-14.7-5c-25.2-8.2-51.9-11.2-78.3-11.3c-8 .3-23.1.5-31 1.4c-21.9 2.5-67.3 15.4-67.3 15.4v48.8s67.5-21.6 96.5-31.8a94.4 94.4 0 0 1 30.3-4.6c6.5.2 13.2.7 19.4 3.1c2.2.9 4.5 2.2 5.5 4.5c.9 2.6-.9 5-2.9 6.5c-4.7 3.8-10.7 5.3-16.2 7.4c-41 14.5-132.7 44.7-132.7 44.7v47s117.2-39.6 170.8-58.8c8.9-3.3 17.9-6.1 26.4-10.4c7.9-4 15.8-8.6 21.8-15.3a19.74 19.74 0 0 0 5-13.1"></svg:path>`,
})
export class FamiconsLogoPlaystationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoPwaIcon],svg[famicons-logo-pwa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m330.7 352l77.72-192H356.9l-53.16 124.07L265.93 160h-39.61l-40.58 124.07l-28.63-56.53l-25.9 79.46l26.3 45h50.7l36.68-111.27l35 111.27ZM48.79 286.09h31.65a93.4 93.4 0 0 0 25.62-3.21l8.18-25.19l22.88-70.39a56 56 0 0 0-6-7.82Q113.54 160 79.59 160H0v192h48.79Zm41.9-81.92q6.89 6.92 6.88 18.52t-6 18.53q-6.64 7.62-24.44 7.61H48.79v-51.58h18.42q16.59 0 23.48 6.92m286.16 113.44l14.79-37.25h42.69l-20.26-56.51L439.41 160L512 352h-53.53l-12.4-34.39Z"></svg:path>`,
})
export class FamiconsLogoPwaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoPythonIcon],svg[famicons-logo-python-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M314 36.38c-18.59-3.06-45.8-4.47-64.27-4.38a311 311 0 0 0-51.66 4.38c-45.74 8-54.07 24.7-54.07 55.54V128h112v16H107.62C66.06 144 32.33 193.67 32 255.12v.88a163 163 0 0 0 3.13 32c9.29 46.28 38.23 80 72.49 80H128v-54c0-31.3 20.84-59.95 55-66.1l9.87-1.23H314a56 56 0 0 0 15.06-2A52.48 52.48 0 0 0 368 193.68V91.92c0-28.92-24.68-50.73-54-55.54M194.93 105.5a20.37 20.37 0 1 1 20.3-20.3a20.29 20.29 0 0 1-20.3 20.3"></svg:path><svg:path fill="currentColor" d="M475.28 217c-10.7-42.61-38.41-73-70.9-73h-17.71v47.45c0 39.57-26 68.22-57.74 73.13a63.5 63.5 0 0 1-9.69.75H198.08a60 60 0 0 0-15.23 1.95C160.54 273.14 144 291.7 144 315.77v101.77c0 29 29.14 46 57.73 54.31c34.21 9.95 71.48 11.75 112.42 0c27.19-7.77 53.85-23.48 53.85-54.31V384H256v-16h148.38c29.44 0 54.95-24.93 67.45-61.31A156.8 156.8 0 0 0 480 256a160.6 160.6 0 0 0-4.72-39M316.51 404a20.37 20.37 0 1 1-20.3 20.3a20.29 20.29 0 0 1 20.3-20.3"></svg:path>`,
})
export class FamiconsLogoPythonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoReactIcon],svg[famicons-logo-react-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M410.66 180.72q-7.67-2.62-15.45-4.88q1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83c-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11q-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69c-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a321 321 0 0 0-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07q-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49c25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25q6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93c25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86q4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78c-.02-29-33.52-57.01-85.36-74.9m-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39c16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a488 488 0 0 0-64.18-10.16a481 481 0 0 0-40.57-50.75q5.38-5.22 11.02-10.15ZM157.73 280.25q6.51 12.6 13.61 24.89q7.23 12.54 15.07 24.71a435 435 0 0 1-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47m0-48.33c-6-14.19-11.08-28.15-15.25-41.63c13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88Zm10.9 24.17q9.48-19.77 20.42-38.78q10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76ZM340.75 305q7.25-12.58 13.92-25.49a440 440 0 0 1 16.12 42.32a434 434 0 0 1-44.79 7.65q7.62-12.09 14.75-24.48m13.72-73.07q-6.64-12.65-13.81-25q-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a440 440 0 0 1-15.37 41.39m-98.24-107.45a440 440 0 0 1 28.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18M145.66 65.86c16.06-9.32 51.57 4 89 37.27c2.39 2.13 4.8 4.36 7.2 6.67A491 491 0 0 0 201 160.51a499 499 0 0 0-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83m-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81c-11.88-10.19-17.9-20.36-17.9-28.6c0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.5 493.5 0 0 0 23.4 60.75a502.5 502.5 0 0 0-23.69 61.58m111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72c-14.78 5.23-26.55 5.38-33.66 1.27c-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a481 481 0 0 0 64.69 9.39a501 501 0 0 0 41.2 51c-2.98 2.93-6.03 5.75-9.14 8.48m23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439 439 0 0 1-28.2 34.74m124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86c-15.13 8.78-47.48-2.63-82.36-32.72c-4-3.44-8-7.13-12.07-11a484.5 484.5 0 0 0 40.23-51.2a478 478 0 0 0 65-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47m17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483 483 0 0 0-24.31-60.94a481.5 481.5 0 0 0 23.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52c44.42 15.32 71.52 38 71.52 55.43c0 18.6-29.27 42.74-76.78 58.52"></svg:path><svg:path fill="currentColor" d="M256 298.55a43 43 0 1 0-42.86-43a42.91 42.91 0 0 0 42.86 43"></svg:path>`,
})
export class FamiconsLogoReactIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoRedditIcon],svg[famicons-logo-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M324 256a36 36 0 1 0 36 36a36 36 0 0 0-36-36"></svg:path><svg:circle cx="188" cy="292" r="36" fill="currentColor" transform="rotate(-22.5 187.997 291.992)"></svg:circle><svg:path fill="currentColor" d="M496 253.77c0-31.19-25.14-56.56-56-56.56a55.72 55.72 0 0 0-35.61 12.86c-35-23.77-80.78-38.32-129.65-41.27l22-79l66.41 13.2c1.9 26.48 24 47.49 50.65 47.49c28 0 50.78-23 50.78-51.21S441 48 413 48c-19.53 0-36.31 11.19-44.85 28.77l-90-17.89l-31.1 109.52l-4.63.13c-50.63 2.21-98.34 16.93-134.77 41.53A55.38 55.38 0 0 0 72 197.21c-30.89 0-56 25.37-56 56.56a56.43 56.43 0 0 0 28.11 49.06a99 99 0 0 0-.89 13.34c.11 39.74 22.49 77 63 105C146.36 448.77 199.51 464 256 464s109.76-15.23 149.83-42.89c40.53-28 62.85-65.27 62.85-105.06a109 109 0 0 0-.84-13.3A56.32 56.32 0 0 0 496 253.77M414 75a24 24 0 1 1-24 24a24 24 0 0 1 24-24M42.72 253.77a29.6 29.6 0 0 1 29.42-29.71a29 29 0 0 1 13.62 3.43c-15.5 14.41-26.93 30.41-34.07 47.68a30.23 30.23 0 0 1-8.97-21.4M390.82 399c-35.74 24.59-83.6 38.14-134.77 38.14S157 423.61 121.29 399c-33-22.79-51.24-52.26-51.24-83A78.5 78.5 0 0 1 75 288.72c5.68-15.74 16.16-30.48 31.15-43.79a155 155 0 0 1 14.76-11.53l.3-.21l.24-.17c35.72-24.52 83.52-38 134.61-38s98.9 13.51 134.62 38l.23.17l.34.25A157 157 0 0 1 406 244.92c15 13.32 25.48 28.05 31.16 43.81a85.4 85.4 0 0 1 4.31 17.67a77 77 0 0 1 .6 9.65c-.01 30.72-18.21 60.19-51.25 82.95m69.6-123.92c-7.13-17.28-18.56-33.29-34.07-47.72A29.1 29.1 0 0 1 440 224a29.59 29.59 0 0 1 29.41 29.71a30.07 30.07 0 0 1-8.99 21.39Z"></svg:path><svg:path fill="currentColor" d="M323.23 362.22c-.25.25-25.56 26.07-67.15 26.27c-42-.2-66.28-25.23-67.31-26.27a4.14 4.14 0 0 0-5.83 0l-13.7 13.47a4.15 4.15 0 0 0 0 5.89c3.4 3.4 34.7 34.23 86.78 34.45c51.94-.22 83.38-31.05 86.78-34.45a4.16 4.16 0 0 0 0-5.9l-13.71-13.47a4.13 4.13 0 0 0-5.81 0Z"></svg:path>`,
})
export class FamiconsLogoRedditIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoRindoIcon],svg[famicons-logo-rindo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427.93 39.31c8.82 4.49 11.33 13.5 15.16 21.48c5.07 10.55 8.32 21.82 9.95 33.31c1.99 13.95 2.26 28.08-.77 42.01c-4.46 20.54-14.98 37.72-30.05 52.13c-6.08 5.82-12.82 10.95-19.84 15.62c-1.31.87-1.53 1.32-1.29 2.82c1.17 7.34 2.23 14.7 3.13 22.08c1.22 10.02 2.33 20.05 3.34 30.09c.43 4.29.59 8.65.71 12.92c.23 8.68.86 17.36 1.25 26.02c.5 11.17 1.39 22.37 3.05 33.5c2.18 14.62 5.9 29.17 4.37 44.15c-1.17 11.44-5.32 21.75-12.32 30.95c-10.65 14-25.16 22.89-40.98 29.24c-13.68 5.49-26.55 12.13-38.85 20.1c-11.33 7.34-24.05 11.13-37.08 13.97c-15.55 3.39-31.43 3.42-47.11 2.37c-23.68-1.59-45.58-9.26-64.95-23.33c-8.04-5.84-17.44-8.74-26.39-12.59c-11.44-4.92-22.2-10.76-31.65-19.06c-9.89-8.68-16.94-18.98-20.55-31.64c-3.11-10.88-3.05-21.9-1.24-32.94c1.38-8.4 3.11-16.73 4.08-25.22c1.4-12.18 2.04-24.37 2.59-36.6c.41-9.02.68-18.09 1.62-27.08c1.05-10.02 1.71-20.08 3.14-30.08c1.21-8.44 1.97-16.95 3.52-25.36c.42-2.26-.21-3.89-2.53-5.44c-17.26-11.58-31.63-25.9-40.8-44.87c-6.25-12.92-9.62-26.5-9.95-40.93c-.58-25.63 6.53-49.07 19.11-71.13c1.73-3.04 4.6-4.51 7.12-6.51h7.61c6.8 3.75 11.85 9.71 18.01 14.3c20.89 15.59 43.66 27.44 68.34 35.75c1.47.49 2.43.58 3.84-.1c22.9-10.91 47.37-14.62 72.41-15.03c11.63-.19 23.23 1.14 34.77 3.01c11.39 1.84 22.59 4.02 33.3 8.47c5.57 2.31 11.08 5.93 17.55 1.91c2.5-1.55 5.5-2.29 8.27-3.41c20.38-8.18 39.39-18.73 56.85-32.13c5.52-4.23 9.98-9.82 16.48-12.78h6.77ZM257.6 446.76c2.75-.24 8.02.07 13.35-.51c13.34-1.47 26.06-4.49 37.98-10.87c9.96-5.33 18.66-12.88 29.2-17.09c9.33-3.73 18.71-7.36 27.55-12.12c8.76-4.71 16.4-10.88 21.42-19.68c5.9-10.36 5.58-21.68 3.4-32.75c-2.56-12.99-4.38-26.05-5.57-39.18c-.9-9.98-1.23-20.04-1.68-30.06c-.53-11.83-1.49-23.58-2.56-35.37c-1.07-11.84-2.6-23.59-4.34-35.33c-2.08-14.11-3.88-28.25-7.51-42.09c-5.41-20.65-16.49-37.54-33.65-50.15c-18.47-13.57-39.97-18.87-62.35-20.28c-9.08-.57-18.21-1.44-27.51-.52c-10.59 1.04-21.09 2.11-31.46 4.52c-21.78 5.07-40.63 14.99-54.51 33.04c-9.29 12.07-14.99 25.83-18.05 40.64c-2.61 12.63-4.16 25.45-6.17 38.18c-2.05 12.97-3.4 26-4.79 39.03c-1.34 12.44-2.09 24.96-2.55 37.46c-.35 9.48-1.05 18.92-1.63 28.37c-.79 12.73-3.63 25.1-5.4 37.65c-1.5 10.59.19 20.14 5.78 29.21c5.53 8.97 13.94 14.4 22.9 19.13c8.33 4.4 17.28 7.45 25.89 11.22c9.44 4.12 17.45 10.8 26.43 15.74c16.56 9.12 34.5 12.62 55.84 11.84ZM396.17 176.6c10.36-7.36 18.22-16.42 24.01-27.08c6.85-12.61 9.63-26.12 8.77-40.66c-.69-11.75-3.32-22.8-7.49-33.68c-.88-2.3-1.35-2.65-3.34-1.13c-3.48 2.65-7.18 5.03-10.78 7.53c-14.07 9.79-29.35 17.36-44.96 24.27c-3.17 1.4-3.37 2.26-.87 4.52c9.66 8.75 17.15 19.18 23.03 30.75c5.64 11.11 9.46 22.88 11.63 35.46ZM82.91 113.86c-.66 4.37-.05 9.61 1.08 14.55c3.88 16.88 12.15 31.33 25.37 42.79c6.45 5.59 6.3 5.65 8.25-2.54c5.12-21.59 15.24-40.5 30.7-56.47c4.94-5.1 4.95-4.9-1.88-7.75c-18.19-7.59-35.11-17.41-50.88-29.22c-3.41-2.56-4.22-2.55-5.6 1.54c-3.97 11.77-7.5 23.65-7.04 37.11Z"></svg:path><svg:path fill="currentColor" d="M257.68 350.52c-20.74-.08-36.49-6.77-50.73-17.62c-10.09-7.69-13.95-20.78-9.91-33.2c8.01-24.58 15.86-49.21 23.78-73.83c7.12-22.13 14.25-44.24 21.33-66.38c1.03-3.24 1.77-6.58 3.64-9.48c3.47-5.38 9.03-4.61 14.01-4.01c4.21.51 6.94 3.85 8.26 7.92c7.37 22.81 14.69 45.64 22.01 68.48c7.96 24.82 15.8 49.67 23.87 74.45c3.46 10.63 3.82 20.83-2.94 30.33c-3.35 4.72-8.22 7.86-13.06 10.74c-13.16 7.82-27.23 12.88-40.26 12.6m-1.06-149.31c-1.41 1.3-1.69 2.32-2.03 3.37c-3.9 12.15-7.84 24.28-11.76 36.42c-7.26 22.45-14.48 44.91-21.81 67.34c-.66 2.01.26 3.52 1.4 4.38c9.31 7.04 19.67 11.97 31.47 12.31c12.88.37 24.38-4.32 34.83-11.64c2.31-1.62 2.57-3.69 1.61-6.57c-5.86-17.65-11.48-35.37-17.11-53.09c-5.52-17.33-10.96-34.69-16.59-52.52Zm7.24 198.21c.72-18.15 16.56-32.36 34.3-31.13c6.64.46 11.48 6.22 11.48 12.92c0 5.17-5.46 12.1-12.09 12.41c-4.93.23-8.46 3.06-8.21 7.38c.37 6.51-7.43 13.64-13.71 13.01c-6.93-.7-11.75-5.72-11.76-13.32v-1.27Zm-16.07.29c0 9.38-5.01 14.81-13.68 14.13c-6.17-.48-9.96-4.54-11.65-13.01c-1-5-2.93-6.96-7.74-7.22c-7.21-.39-11.73-5.72-11.89-13.24c-.13-6.04 6.34-12.26 12.3-12.25c17.34.03 33.8 14.98 32.67 31.58Zm-65.12-133.92c.7 8.48-6.5 12.51-12.55 12.74c-6.97.27-12.42-5.93-12.76-12.92c-.34-6.92 5.4-12.32 12.6-12.35c7.61-.04 12.66 4.95 12.72 12.53Zm159.17-12.53c7.51.02 12.5 5.23 12.53 12.92c.03 7.87-7.06 12.21-12.71 12.4c-6.54.23-12.78-6.39-12.67-13.18c.11-7.1 6.5-13.16 12.86-12.14Z"></svg:path>`,
})
export class FamiconsLogoRindoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoRssIcon],svg[famicons-logo-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108.56 342.78a60.34 60.34 0 1 0 60.56 60.44a60.63 60.63 0 0 0-60.56-60.44"></svg:path><svg:path fill="currentColor" d="M48 186.67v86.55c52 0 101.94 15.39 138.67 52.11s52 86.56 52 138.67h86.66c0-151.56-125.66-277.33-277.33-277.33"></svg:path><svg:path fill="currentColor" d="M48 48v86.56c185.25 0 329.22 144.08 329.22 329.44H464C464 234.66 277.67 48 48 48"></svg:path>`,
})
export class FamiconsLogoRssIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoSassIcon],svg[famicons-logo-sass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M511.78 328.07c-1.47-11.92-7.51-22.26-18-30.77a3.6 3.6 0 0 0-.43-.44l-.53-.38l-.17-.12l-5.57-4l-.19-.14l-.71-.5a3.5 3.5 0 0 0-.83-.35c-17.62-10.49-46.79-17.84-91.42-2.09c-10.65-17.92-11.86-32.28-4.73-54.28c1.27-3.83.09-6.36-3.71-8c-7.64-3.25-18.1-1.59-25.52.37c-3.46.9-5.54 2.86-6.2 5.83c-4.7 22-18.36 42.1-31.57 61.5l-.78 1.14c-8.14-17.26-6.45-30.63-.78-47.38c1.13-3.34.24-5.56-2.89-7.22c-8.74-4.51-21.85-1.41-27.07.13c-6.62 1.93-13.72 19.82-21.65 41.24c-2 5.39-3.72 10-4.75 12.15c-2.45 5-4.79 10.7-7.27 16.75c-5.6 13.69-11.91 29.1-20.93 38.78c-3.28-7.25 1.88-18.68 6.89-29.77c5.93-13.11 11.53-25.5 5.08-33.41a11.82 11.82 0 0 0-8.33-4.32a13.26 13.26 0 0 0-6.15 1c.67-5.65.7-10.11-.95-15.5c-2.36-7.69-8.49-12-16.93-11.77c-19.22.56-35.48 14.88-45.75 26.8c-6.84 8-22 14.1-35.31 19.45c-5.26 2.23-10.26 4.23-14.43 6.23c-6.65-5.62-15.1-11.29-24-17.28c-25-16.78-53.33-35.81-54.31-61.61c-1.4-38.11 42-65.14 79.88-84.43c28.71-14.6 53.67-24.28 76.31-29.57c31.8-7.43 58.66-5.93 79.82 4.44c11.58 5.67 17 18 13.56 30.68c-9 32.95-46.29 55.53-78.18 65.69c-19.21 6.12-35.56 8.68-50 7.84c-18.1-1.05-32.88-10.13-39.2-14a21 21 0 0 0-3.2-1.8l-.29-.07a3.21 3.21 0 0 0-3.19 1c-1.3 1.55-.84 4-.37 5.24c6.15 16.07 18.85 26.22 37.74 30.17a92 92 0 0 0 18.78 1.79c44.21 0 100.62-25.49 121.34-46.48c14.13-14.3 24.42-29 28.68-54.35c4.45-26.55-13.55-45-31.89-53.5c-44.57-20.57-95.19-12.44-129.81-2c-40.5 12.21-82.4 34.41-114.94 60.93c-40.12 32.67-54.62 63-43.12 90.25c11.81 27.93 40.61 45.4 68.46 62.3c9 5.45 17.56 10.64 25.27 16c-2.32 1.13-4.69 2.28-7.1 3.43c-23.38 11.33-49.9 24.08-64.61 45.15c-10.68 15.35-12.68 30.63-5.94 45.42c3.6 7.87 10 13.21 18.89 15.87A50 50 0 0 0 53 432c17.31 0 36.36-7 46.73-13.47c18.32-11.5 30.19-26.94 35.29-45.89c4.54-16.86 3.45-33.61-3.15-48.56l22.45-11.32c-10.83 36-2.53 57.5 6.59 69.36c3.36 4.37 9.42 7 16.19 7.12s13-2.43 16.52-6.77c6.66-8.25 11.58-17.9 16.11-27.55c-.24 6.3.06 12.68 2.21 18.09c1.93 4.87 5.11 8.1 9.21 9.34c4.36 1.33 9.47.21 14.39-3.15c22.17-15.17 37.33-51.58 49.51-80.85c1.73-4.16 3.39-8.16 5-11.9a152.5 152.5 0 0 0 12.5 31.07c1.18 2.14 1.08 3.08-.52 4.84c-2.41 2.64-5.77 5.83-9.33 9.21c-10.78 10.23-24.2 23-26 34.23c-.7 4.5 2.4 8.6 7.21 9.53c14.47 2.88 31.9-1.33 46.64-11.25c13.4-9 18.44-21.55 15-37.19c-3.33-15.06 4.27-33.76 22.59-55.62c3 12.53 7 22.66 12.52 31.53l-.15.12c-13.34 11.65-31.62 27.6-28.78 46.95a13.35 13.35 0 0 0 5.58 9.22a14.22 14.22 0 0 0 11.2 2.06c17.47-3.67 30.62-11.06 40.18-22.57s6.07-24.27 2.85-34.17c25-6.78 47.26-6.61 68.1.5c11.7 4 20.09 10.57 24.93 19.64c6.09 11.41 2.8 21.94-9.29 29.65c-3.71 2.37-5.5 3.82-5.61 5.65a2.65 2.65 0 0 0 1 2.23c1.4 1.15 5.72 3.15 15.49-3c9-5.65 14.28-13.34 15.63-23a39 39 0 0 0-.01-8.01m-399.73 25.06l-.1 1.28c-1.56 14.64-9 27.4-22.15 38c-8.26 6.66-17.23 10.75-25.25 11.53c-5.6.54-9.67-.22-12.09-2.27c-1.81-1.53-2.78-3.82-3-7c-1.64-25.48 38.32-50.8 60.81-59.13a51.4 51.4 0 0 1 1.78 17.59m102.35-71.86c-3.7 21.09-14.49 60.9-31.45 76.35c-.81.74-1.49 1-1.8.93s-.55-.44-.8-1c-5.66-13.12-3.57-35.28 5-52.69c6.59-13.42 16-22.31 26.52-25a5.3 5.3 0 0 1 1.34-.19a1.58 1.58 0 0 1 1 .27a1.64 1.64 0 0 1 .19 1.33m83.49 76.88c-3.19 3.33-7.56 2.88-6.53 1.66l16.24-17.24c-1.31 5.93-5.18 10.84-9.71 15.58m67.37-14.91a14.1 14.1 0 0 1-4.93 1.39c-.46-9.07 8.33-19.28 17-26.09c2.33 9.46-2.44 19.46-12.07 24.7"></svg:path>`,
})
export class FamiconsLogoSassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoSkypeIcon],svg[famicons-logo-skype-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M467.16 303.6a205.7 205.7 0 0 0 4.9-45.15c0-116.32-95.69-210.7-213.79-210.7a222 222 0 0 0-36.52 3A123.6 123.6 0 0 0 155.93 32C87.55 32 32 86.72 32 154.15A119.56 119.56 0 0 0 49 216a211 211 0 0 0-4.32 42.35c0 116.44 95.69 210.7 213.67 210.7a214 214 0 0 0 39.09-3.5A125.45 125.45 0 0 0 356.07 480C424.57 480 480 425.28 480 357.85a118 118 0 0 0-12.84-54.25M368 359c-9.92 13.76-24.51 24.73-43.41 32.43S283.36 403 257.69 403c-30.69 0-56.36-5.37-76.55-15.87a101 101 0 0 1-35.24-30.8c-9.11-12.83-13.66-25.66-13.66-38c0-7.7 3-14.35 8.87-19.95c5.84-5.37 13.42-8.17 22.29-8.17c7.35 0 13.65 2.1 18.79 6.42c4.9 4.08 9.1 10.15 12.48 18.08A108 108 0 0 0 207 336.15q6.32 8.22 17.86 13.65c7.82 3.62 18.2 5.48 31 5.48c17.62 0 32.09-3.73 42.94-11.08c10.74-7.12 15.88-15.75 15.88-26.25c0-8.28-2.69-14.82-8.29-19.95c-5.83-5.37-13.42-9.57-22.87-12.37c-9.69-3-22.87-6.18-39.21-9.56c-22.17-4.67-41-10.27-56-16.57c-15.28-6.42-27.65-15.4-36.76-26.48c-9.22-11.32-13.77-25.55-13.77-42.24a67.86 67.86 0 0 1 14.47-42.58c9.57-12.25 23.46-21.82 41.55-28.35c17.74-6.53 38.86-9.8 62.66-9.8c19.14 0 35.83 2.22 49.83 6.42s25.91 10.15 35.36 17.38s16.34 14.93 20.77 23s6.66 16.22 6.66 24c0 7.46-2.92 14.35-8.76 20.3a29.65 29.65 0 0 1-21.94 9.1c-7.93 0-14.12-1.87-18.43-5.6c-4-3.5-8.17-8.87-12.72-16.69c-5.37-9.91-11.79-17.85-19.14-23.45c-7.24-5.36-19.14-8.16-35.71-8.16c-15.29 0-27.77 3-37 9c-8.87 5.72-13.19 12.37-13.19 20.18a18.26 18.26 0 0 0 4.32 12.25a38.1 38.1 0 0 0 12.72 9.57a90 90 0 0 0 17.15 6.53c6 1.64 15.87 4.09 29.53 7.12c17.38 3.62 33.25 7.82 47.26 12.13c14.24 4.55 26.49 10 36.52 16.45a72.9 72.9 0 0 1 24.16 25.09c5.72 10 8.64 22.63 8.64 37.1A75.1 75.1 0 0 1 368 359"></svg:path>`,
})
export class FamiconsLogoSkypeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoSlackIcon],svg[famicons-logo-slack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126.12 315.1A47.06 47.06 0 1 1 79.06 268h47.06Zm23.72 0a47.06 47.06 0 0 1 94.12 0v117.84a47.06 47.06 0 1 1-94.12 0Zm47.06-188.98A47.06 47.06 0 1 1 244 79.06v47.06Zm0 23.72a47.06 47.06 0 0 1 0 94.12H79.06a47.06 47.06 0 0 1 0-94.12Zm188.98 47.06a47.06 47.06 0 1 1 47.06 47.1h-47.06Zm-23.72 0a47.06 47.06 0 0 1-94.12 0V79.06a47.06 47.06 0 1 1 94.12 0ZM315.1 385.88a47.06 47.06 0 1 1-47.1 47.06v-47.06Zm0-23.72a47.06 47.06 0 0 1 0-94.12h117.84a47.06 47.06 0 1 1 0 94.12Z"></svg:path>`,
})
export class FamiconsLogoSlackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoSnapchatIcon],svg[famicons-logo-snapchat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 347.21a190.3 190.3 0 0 1-32.79-5.31c-27.28-6.63-54.84-24.26-68.12-52.43c-6.9-14.63-2.64-18.59 11.86-24c14.18-5.27 29.8-7.72 36.86-23c5.89-12.76 1.13-27.76-10.41-35.49c-15.71-10.53-30.35-.21-46.62 2.07c3.73-46.66 8.66-88.57-22.67-127.73C338.14 48.86 297.34 32 256.29 32s-81.86 16.86-107.81 49.33c-31.38 39.26-26.4 81.18-22.67 127.92c-16.32-2.25-30.81-12.79-46.63-2.18c-14.72 9.85-17 29.76-5.44 43s31.64 9.5 43.45 20.6c6.49 6.09 3.49 12.61-.35 20.14c-14.48 28.4-39.26 45.74-69.84 51.56c-4 .76-22.31 2.87-31 3.65c0 9.28.52 16.78 1.63 21.73c2.94 13.06 12.32 23.58 23.69 30.1c11.18 6.4 35.48 6.43 41.68 15.51c3 4.48 1.76 12.28 5.33 17.38a23.8 23.8 0 0 0 15.37 9.75c18.61 3.61 37.32-7.2 56.42-2.1c14.85 3.95 26.52 15.87 39.26 24c15.51 9.85 32.34 16.42 50.83 17.49c38.1 2.21 59.93-18.91 90.58-36.42c19.5-11.14 38.15-3.86 58.88-2.68c20.1 1.15 23.53-9.25 29.62-24.88a27.4 27.4 0 0 0 1.54-4.85a10.5 10.5 0 0 0 2.28-1.47c2-1.57 10.55-2.34 12.76-2.86c10.28-2.44 20.34-5.15 29.17-11.2c11.31-7.76 17.65-18.5 19.58-32.64a94 94 0 0 0 1.38-15.67M208 128c8.84 0 16 10.74 16 24s-7.16 24-16 24s-16-10.74-16-24s7.16-24 16-24m103.62 77.7c-15.25 15-35 23.3-55.62 23.3a78.37 78.37 0 0 1-55.66-23.34a8 8 0 0 1 11.32-11.32A62.46 62.46 0 0 0 256 213c16.39 0 32.15-6.64 44.39-18.7a8 8 0 0 1 11.23 11.4M304 176c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24"></svg:path>`,
})
export class FamiconsLogoSnapchatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoSoundcloudIcon],svg[famicons-logo-soundcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.8 278a2.11 2.11 0 0 0-2 2L0 308.64l3.74 28.16a2.12 2.12 0 0 0 2.05 2a2.14 2.14 0 0 0 2-2l4.44-28.17L7.83 280a2.14 2.14 0 0 0-2-2Zm21.05-15.68a2.13 2.13 0 0 0-4.26 0l-5 46.32l5 45.3a2.13 2.13 0 0 0 4.26 0l5.73-45.31l-5.73-46.32Zm79.32-42.73a4 4 0 0 0-3.87 3.87l-4 85.22l4 55.08a3.88 3.88 0 0 0 7.75 0l4.53-55.08l-4.53-85.22a4 4 0 0 0-3.88-3.87m-41.05 29.62a3.09 3.09 0 0 0-3 3l-4.52 56.45l4.51 54.63a3 3 0 0 0 6 0l5.13-54.63l-5.13-56.48a3.1 3.1 0 0 0-2.99-2.97m82.76 118.39a4.83 4.83 0 0 0 4.75-4.74l3.93-54.15l-3.93-113.46a4.75 4.75 0 0 0-9.5 0l-3.49 113.45l3.49 54.17a4.81 4.81 0 0 0 4.75 4.73m85.4.25a6.6 6.6 0 0 0 6.5-6.52l2.74-52.6l-2.74-131a6.5 6.5 0 1 0-13 0l-2.45 131c0 .08 2.45 52.67 2.45 52.67a6.59 6.59 0 0 0 6.5 6.45m-43.02-.2a5.67 5.67 0 0 0 5.62-5.64l3.34-53.33l-3.34-114.28a5.63 5.63 0 1 0-11.25 0l-3 114.29l3 53.32a5.66 5.66 0 0 0 5.63 5.6Zm-104.7-.5a3.53 3.53 0 0 0 3.44-3.41l4.83-55.09l-4.83-52.4a3.44 3.44 0 0 0-6.88 0l-4.26 52.38l4.26 55.08a3.5 3.5 0 0 0 3.44 3.44m-40.72-3.02a2.67 2.67 0 0 0 2.57-2.52l5.43-53l-5.42-55a2.57 2.57 0 0 0-5.14 0l-4.78 55l4.78 53a2.62 2.62 0 0 0 2.56 2.53Zm166.85-171.6a6.1 6.1 0 0 0-6.07 6.09l-2.71 110.11l2.71 53a6.07 6.07 0 0 0 12.13 0l3-53l-3-110.13a6.1 6.1 0 0 0-6.06-6.07M127 367.71a4.41 4.41 0 0 0 4.31-4.3l4.23-54.71l-4.28-104.7a4.32 4.32 0 0 0-8.63 0l-3.74 104.7l3.75 54.73a4.38 4.38 0 0 0 4.36 4.28m47.17-5.17l3.63-53.8l-3.63-117.28a5.19 5.19 0 1 0-10.37 0l-3.23 117.28l3.23 53.83a5.18 5.18 0 0 0 10.36 0ZM449 241.1a62.4 62.4 0 0 0-24.33 4.9c-5-57.18-52.61-102-110.66-102a111.9 111.9 0 0 0-40.28 7.58c-4.75 1.85-6 3.76-6.06 7.46V360.4a7.66 7.66 0 0 0 6.8 7.5l174.56.11c34.78 0 63-28.41 63-63.45s-28.2-63.46-63-63.46Zm-194.21-82.23a7 7 0 0 0-6.94 7L245 308.75l2.85 51.87a6.94 6.94 0 1 0 13.87-.06v.06l3.09-51.87l-3.09-142.93a7 7 0 0 0-6.93-6.95"></svg:path>`,
})
export class FamiconsLogoSoundcloudIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoStackoverflowIcon],svg[famicons-logo-stackoverflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M392 440V320h40v160H64V320h40v120Z"></svg:path><svg:path fill="currentColor" d="m149.1 308.77l198.57 40.87l8.4-39.32l-198.57-40.87Zm26.27-93.12L359.22 300L376 263.76l-183.82-84.84Zm50.95-89l156 127.78l25.74-30.52l-156-127.78ZM328 32l-33.39 23.8l120.82 160.37L448 192ZM144 400h204v-40H144Z"></svg:path>`,
})
export class FamiconsLogoStackoverflowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoSteamIcon],svg[famicons-logo-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M478.8 208.2a36 36 0 1 1-36-36a36 36 0 0 1 36 36M442.6 139a69.42 69.42 0 0 0-69.4 68.7l-43.2 62a49 49 0 0 0-5.4-.3a51.27 51.27 0 0 0-26.4 7.3L102.4 198a51.8 51.8 0 1 0-50.6 62.9a51.27 51.27 0 0 0 26.4-7.3L274 332.2a51.76 51.76 0 0 0 102.1-5.9l66.5-48.6a69.35 69.35 0 1 0 0-138.7m0 22.9a46.45 46.45 0 1 1-46.5 46.5a46.54 46.54 0 0 1 46.5-46.5m-390.8 9a38.18 38.18 0 0 1 33.7 20.2l-18.9-7.6v.1a30.21 30.21 0 0 0-22.6 56v.1l16.1 6.4a36.8 36.8 0 0 1-8.2.9a38.05 38.05 0 0 1-.1-76.1m272.8 112.2a38.1 38.1 0 1 1-33.7 55.9c6.3 2.5 12.5 5 18.8 7.6a30.27 30.27 0 1 0 22.5-56.2l-15.9-6.4a47 47 0 0 1 8.3-.9"></svg:path>`,
})
export class FamiconsLogoSteamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoStencilIcon],svg[famicons-logo-stencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.8 334.07h197.33L279.47 448H83.2ZM512 199H106.61L0 313h405.39ZM232.2 64h196.6L322.62 177.93H125.87Z"></svg:path>`,
})
export class FamiconsLogoStencilIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoTableauIcon],svg[famicons-logo-tableau-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M242.69 340.3h26.62v-72.6h67v-25.82h-67v-72.6h-26.62v72.6h-66.15v25.82h66.15ZM119.26 445.18h22.59v-64.54h59.7v-20.17h-59.7v-65.34h-22.59v65.34h-59.7v20.17h59.7ZM370.15 212h22.59v-64.5h60.5v-19.37h-60.5V62.79h-22.59v65.34h-59.7v19.37h59.7ZM246.72 496h19.36v-46h41.15v-16.92h-41.15v-46h-19.36v46h-40.33V450h40.33ZM120.07 212h21v-65.31h60.51v-18.56H141V62.79h-21v65.34H59.56v18.56h60.51Zm315.65 96.84h19.36v-45.18H496v-17.74h-40.92v-45.18h-19.36v45.18h-40.33v17.74h40.33Z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M370.15 445.18h22.59v-64.54h60.5v-20.17h-60.5v-65.34h-22.59v65.34h-59.7v20.17h59.7Z"></svg:path><svg:path fill="currentColor" d="M307 74.08V60.37h-40.34V16h-14.52v44.37h-40.33v13.71h40.33v44.37h14.52V74.08ZM56.11 305.61h14.52v-44.37H111v-13.71H70.63V204H56.11v43.56H16v14.52l40.11-.08Z"></svg:path>`,
})
export class FamiconsLogoTableauIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoTiktokIcon],svg[famicons-logo-tiktok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M412.19 118.66a109 109 0 0 1-9.45-5.5a133 133 0 0 1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69c0 .52-.05 1-.08 1.56c0 .23 0 .47-.05.71v.18a70 70 0 0 1-35.22 55.56a68.8 68.8 0 0 1-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0 1 21.41 3.39l.1-83.94a153.14 153.14 0 0 0-118 34.52a161.8 161.8 0 0 0-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24c-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.5 167.5 0 0 0 115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34c7.66-.31 33.32 0 62.46-13.81c32.32-15.31 50.72-38.12 50.72-38.12a158.5 158.5 0 0 0 27.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61"></svg:path>`,
})
export class FamiconsLogoTiktokIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoTumblrIcon],svg[famicons-logo-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M390 32H120c-49.19 0-88 38.81-88 88v270c0 49.19 38.81 90 88 90h270c49.19 0 90-40.81 90-90V120c0-49.19-40.81-88-90-88m-54 364h-52c-42.51 0-72-23.68-72-76v-80h-36v-48c42.51-11 57.95-48.32 60-80h44v72h52v56h-52l-.39 70.51c0 21.87 11 29.43 28.62 29.43L336 340Z"></svg:path>`,
})
export class FamiconsLogoTumblrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoTuxIcon],svg[famicons-logo-tux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M443.66 405.05c-1.46-.79-2.85-1.54-4-2.2c-6.47-3.83-13-10.52-11.85-17.83c2.42-15.94 2.89-23.47-.49-28.79a15.6 15.6 0 0 0-7.67-6.2v-.06c1.41-2.56 2.26-5.66 2.83-10.12c1.44-11-5-44-13.7-70.7c-8.08-24.68-29.24-50-44.7-68.56l-3.61-4.34c-23.88-28.93-24.34-38.19-26.55-82.67c-.32-6.47-.69-13.8-1.17-22C329.87 41.43 304 16 256 16c-25.2 0-44.62 7.15-57.72 21.26C187.79 48.55 182 64 182 80.78c0 29.52 2 53 2.15 54.29c1.4 35.7 1 41.22-8.31 57.55c-2.23 3.93-8.38 10.87-14.89 18.21c-8.48 9.57-18.09 20.41-23.36 29.22c-3.77 6.31-5.88 12.63-8.11 19.33c-3.4 10.21-7.26 21.78-18.15 36.57c-12.57 17.07-15.52 29.61-11 47.45c-4.94 6.45-4.83 14.37-4.75 20.23a25.8 25.8 0 0 1-.3 6.09c-2.29 7.59-12.42 9.4-22 10.18c-1.58.12-3.1.21-4.55.29c-7.26.39-13.53.74-17.13 6.3c-3.47 5.36-1.12 13.8 2.14 25.48c.72 2.58 1.46 5.25 2.19 8.06c1.83 7-.16 10.48-2.68 14.84c-2.44 4.21-5.21 9-5.21 17.55c0 14.67 20 18 43.05 21.94c7.36 1.24 15 2.53 22.63 4.24a225.6 225.6 0 0 1 34.08 10.68c9.72 3.73 17.4 6.68 26.43 6.68c16.18 0 28.25-9.77 39.92-19.21l2.15-1.75c5.53-4.49 21.5-4 34.34-3.64c3.46.1 6.73.2 9.65.2h6.22c13.48-.08 31.94-.18 42.23 2.5c3.75 1 6.2 3.72 9.29 7.19c5.87 6.56 13.17 14.75 33.39 14.75c19.39 0 29.55-8.71 41.32-18.8c7.16-6.13 14.56-12.48 25.07-17.86c3.92-2 7.62-3.87 11.08-5.61c22.64-11.38 35.11-17.65 35.11-27.82c0-9.91-12.24-16.5-20.34-20.86M211.11 88.38a13.91 13.91 0 0 1 12.47 9c1.95 5.55 1.81 10.42.21 12.94c0 0-.22-1-.36-1.44a14.85 14.85 0 0 0-6.44-8.59a11.35 11.35 0 0 0-8.94-1.47c-4.26 1.13-8.41 5-8.91 18.79c-5.16-10.47-2.31-18 .92-23c2.31-3.73 7.47-6.33 11.05-6.23m-17.5 375C192 479.24 175.2 479 170.09 478.59c-9.81-.82-21.66-4.69-33.13-8.43c-4.52-1.47-9.19-3-13.73-4.34c-13.2-3.89-30.12-6.74-43.72-9c-3.22-.55-6.27-1.06-9.05-1.55s-4.61-1.27-5.2-2.3c-1-1.65.38-5.25 1.93-9.41C69.27 438 72.11 430.34 72 421c0-3.91-1.47-8.3-2.84-12.56c-1.62-5-3.28-10.17-1.93-12.62c1.23-2.23 6.75-2.49 11.6-2.49h2.26c3.55 0 6.62.06 8.75-.53c6.51-1.81 14.86-6.92 17.81-13.88c.9-2.17 1.37-6.94 2-14c.37-4.12.74-8.37 1.22-10.58a3.55 3.55 0 0 1 2.11-2.55c1.65-.77 6.78-1.91 18.63 4.08c11.18 5.65 22.88 25.84 34.2 45.37c3.56 6.14 6.92 11.94 10.3 17.36c14.04 22.54 18.83 31.6 17.5 44.8Zm128.84-31.56a69 69 0 0 1-4.55 10.9a.58.58 0 0 1-1.08-.42a56.6 56.6 0 0 0 2.11-18.43c-.25-4.73-.4-7.59-2.66-8.51s-4.26.83-9.45 5.54c-1.1 1-2.36 2.14-3.78 3.4c-10.8 9.47-26.88 20.68-55.61 23.37c-16.84 1.59-27.59-4.63-30.92-8.14a2.16 2.16 0 0 0-3.07-.08a2.23 2.23 0 0 0-.51 2.29c2.12 6.84 1.2 12.26-.49 16.19c-.95 2.2-1.85 2.05-2-.34c-.25-4.64-1-9.88-3-14.19c-3.11-6.94-7-14.34-8.89-17.88v-.05c3.24-1.49 8.86-4.83 11.37-10.88s4.48-18-9.82-31.74c-6.28-6.05-22.1-17.16-36.06-27c-10.9-7.65-22.17-15.56-23.65-17.51c-4.49-5.89-6.37-9.3-6.94-19.65c.07-2.3.13-4.59.19-6.89l.27-2.49a.58.58 0 0 1 1.15 0a63 63 0 0 0 2 9.72c1.08 3.73 2.4 7.58 3.62 9.18c3.19 4.22 7.56 7.39 11.67 8.49a5.48 5.48 0 0 0 5-.72c2.93-2.33 2.65-7.6 2.19-16.34c-.47-9-1.11-21.34 1.85-34.55c5.62-25 10.91-32.51 17.61-42c.86-1.22 1.75-2.47 2.65-3.79c1.44-2.08 3-4.1 4.67-6.23c7.47-9.61 15.93-20.49 13.92-40.95c-.51-5.19-.76-8.83-.86-11.39a1 1 0 0 1 1.88-.59l.49.77l1.21 2c4.86 8 13.64 22.57 25.1 22.57a13.6 13.6 0 0 0 2.36-.21c23.39-3.93 51.9-30.25 52.17-30.51c3.12-3 2.84-6.14 1.64-7.91a5.18 5.18 0 0 0-6.45-1.72c-3.29 1.4-7.14 3.15-11.22 5c-13.82 6.27-37 16.75-42.25 14.34a23.1 23.1 0 0 1-6.32-5.13a1 1 0 0 1 1.14-1.65c5.59 2.29 9.55 1.45 14.2-.08l1-.34c9.37-3.09 14.2-4.77 30.76-12.08a97.6 97.6 0 0 1 16.26-5.93c4-1 6.42-1.63 7.71-4.34a6.65 6.65 0 0 0-.5-7.13c-1.53-1.87-4.07-2.57-7-1.9c-3.22.75-4.7 3-6.41 4.49c-2.4 2.05-5 4.16-17.19 8.65c-27 10-34.58 10.61-45.21 3.43c-9.84-6.69-15.15-13.23-15.15-16c0-2.13 5.45-5.7 8.71-7.84c1.33-.87 2.59-1.69 3.62-2.46c4.34-3.22 13-11.39 13.38-11.73c5.4-5.41 17.91-2.18 25 2.58a2.23 2.23 0 0 0 1.72.41a2.14 2.14 0 0 0 1.68-2.58c-4.2-17.46-.13-27.34 4-32.55a22.58 22.58 0 0 1 17.48-8.48c12.81 0 21.76 10 21.76 24.42c0 11-2.82 16.79-5.48 20.3a1.73 1.73 0 0 1-2.58.18a1.78 1.78 0 0 1-.24-2.2A24.6 24.6 0 0 0 290 114a16.58 16.58 0 0 0-16.84-16.67c-3.94 0-13.48 1.5-16.77 15.44a29.8 29.8 0 0 0-.34 11.07l.08.71c.9 7.38 15.3 12.51 27.23 15.51c11.36 2.85 13 6.22 8.84 19.63s3.11 26.23 5.7 29.57a78.3 78.3 0 0 1 8.31 12.47a94 94 0 0 1 6.62 16.48c2.17 6.79 4.05 12.65 10.63 21.22c11.07 14.4 17.66 48.64 15 78c-.21 2.41-.53 4.29-.77 5.67c-.43 2.53-.72 4.2.66 5.38s3.16.7 7.26-.63l3.43-1.09a109 109 0 0 1 12.58-2.8a2.15 2.15 0 0 0 1.59-1.16c3.43-6.91 3.85-15.22 4-22.47q0-1.31.06-2.79c.19-7.77.45-18.93-2.95-32a1 1 0 0 1 1.93-.64a93 93 0 0 1 6.66 25.55c2.55 22.58-1.9 32.09-1.94 32.17a1.61 1.61 0 0 0 .95 2.25a17.1 17.1 0 0 1 6.95 4.67c1.46 1.66.93 2.4-1.14 1.62a36.3 36.3 0 0 0-12.77-2.29c-10.4 0-18.09 4.95-21.51 9.19c-3.19 3.94-3.7 7.67-3.83 11.27l-.06.05c-7.48-.75-12.94 1.21-17.47 6.21l-.08.09c-6.26 7.75-4 24.63-1.29 38.48c1.28 6.45 5.59 25.52 1.73 37.68Zm96.1 10.07c-15.71 6.71-25.43 14.51-34 21.39c-5.65 4.53-11 8.81-17.28 12.14c-10.12 5.34-24.91 6.53-33.27-7.7c-2.37-4-.71-9.86 1.58-17.95c3.05-10.75 7.23-25.46 3.71-44.65c-.94-5.12-1.77-9.51-2.49-13.31C334 377 332.9 371.43 334 367c.63-2.45 3.43-3 5.87-3a21 21 0 0 1 2.63.19a29.5 29.5 0 0 0 7 12.1c5.7 5.86 13.63 8.83 23.56 8.85c2.1.17 25.94 1.55 36.54-22.4c1.46.18 3.65.7 4.3 2.3c1.28 3.19-.27 8.91-1.52 13.5c-.9 3.31-1.68 6.16-1.63 8.37c.31 16 11 22.78 25.83 32.16c1.79 1.13 3.66 2.31 5.55 3.54S445 425 445 426c-.52 4.79-20 13.16-26.45 15.91Z"></svg:path>`,
})
export class FamiconsLogoTuxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoTwitchIcon],svg[famicons-logo-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m80 32l-32 80v304h96v64h64l64-64h80l112-112V32Zm336 256l-64 64h-96l-64 64v-64h-80V80h304Z"></svg:path><svg:path fill="currentColor" d="M320 143h48v129h-48zm-112 0h48v129h-48z"></svg:path>`,
})
export class FamiconsLogoTwitchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoTwitterIcon],svg[famicons-logo-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3a97.5 97.5 0 0 0 43.33-53.6a197.7 197.7 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.2 93.2 0 0 0 2.54 22.1a280.7 280.7 0 0 1-203-101.3A95.7 95.7 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.8 100.8 0 0 1-25.94 3.4a94.4 94.4 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.6 199.6 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.7 278.7 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8c0-4.2-.11-8.4-.31-12.5A198.5 198.5 0 0 0 496 109.5"></svg:path>`,
})
export class FamiconsLogoTwitterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoUsdIcon],svg[famicons-logo-usd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 480v-36.42C160.53 439 112.25 398.06 112 336h72c1.77 26.34 23.86 46.45 56 50v-98l-26.77-7c-61-14.18-93.64-49.39-93.64-102.08C119.59 116.81 164.08 76.08 240 70V32h32v38c77.39 6.3 119 47.74 120 106h-72c-.76-24.06-15.83-43.39-48-46v92l30.82 7.28C367.61 243.46 400 277 400 332c0 64.34-43.74 105.88-128 111.32V480Zm0-264v-86c-27.59 1.52-47.27 18.47-47.27 42.53c0 22.3 16.39 36.88 47.27 43.47m32 78v92c38.15-1.54 56.38-18.92 56.38-45.77c0-24.58-18.23-41.13-56.38-46.23"></svg:path>`,
})
export class FamiconsLogoUsdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoVenmoIcon],svg[famicons-logo-venmo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89V441.6c0 20.31 17.85 38.4 38.28 38.4h373.78c20.54 0 35.94-18.2 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32M278 387H174.32l-41.57-248.56l90.75-8.62l22 176.87c20.53-33.45 45.88-86 45.88-121.87c0-19.62-3.36-33-8.61-44l82.63-16.72c9.56 15.78 13.86 32 13.86 52.57c-.01 65.5-55.92 150.59-101.26 210.33"></svg:path>`,
})
export class FamiconsLogoVenmoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoVercelIcon],svg[famicons-logo-vercel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 48l240 416H16Z"></svg:path>`,
})
export class FamiconsLogoVercelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoVimeoIcon],svg[famicons-logo-vimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M476.9 114c-5-23.39-17.51-38.78-40.61-46.27s-64.92-4.5-94.12 16.79c-26.79 19.51-46.26 54.42-54 78.28a4 4 0 0 0 5.13 5c10.77-3.8 21.72-7.1 34-6.45c15 .8 24.51 12 24.91 25.29c.3 9.79-.2 18.69-3.6 27.68c-10.74 28.68-27.61 56.46-47.55 80.75a72.5 72.5 0 0 1-10 9.89c-10.21 8.29-18.81 6.1-25.41-5.2c-5.4-9.29-9-18.88-12.2-29.08c-12.4-39.67-16.81-80.84-23.81-121.52c-3.3-19.48-7-39.77-18-56.86c-11.6-17.79-28.61-24.58-50-22c-14.7 1.8-36.91 17.49-47.81 26.39c0 0-56 46.87-81.82 71.35l21.2 27s17.91-12.49 27.51-18.29c5.7-3.39 12.4-4.09 17.2.2c4.51 3.9 9.61 9 12.31 14.1c5.7 10.69 11.2 21.88 14.7 33.37c13.2 44.27 25.51 88.64 37.81 133.22c6.3 22.78 13.9 44.17 28 63.55c19.31 26.59 39.61 32.68 70.92 21.49c25.41-9.09 46.61-26.18 66-43.87c33.11-30.18 59.12-65.36 85.52-101.14c20.41-27.67 37.31-55.67 51.41-86.95C478.5 179.74 484 147.26 476.9 114"></svg:path>`,
})
export class FamiconsLogoVimeoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoVkIcon],svg[famicons-logo-vk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M484.7 132c3.56-11.28 0-19.48-15.75-19.48h-52.37c-13.21 0-19.31 7.18-22.87 14.86c0 0-26.94 65.6-64.56 108.13c-12.2 12.3-17.79 16.4-24.4 16.4c-3.56 0-8.14-4.1-8.14-15.37V131.47c0-13.32-4.06-19.47-15.25-19.47H199c-8.14 0-13.22 6.15-13.22 12.3c0 12.81 18.81 15.89 20.84 51.76V254c0 16.91-3 20-9.66 20c-17.79 0-61-66.11-86.92-141.44C105 117.64 99.88 112 86.66 112H33.79C18.54 112 16 119.17 16 126.86c0 13.84 17.79 83.53 82.86 175.77c43.21 63 104.72 96.86 160.13 96.86c33.56 0 37.62-7.69 37.62-20.5v-47.66c0-15.37 3.05-17.93 13.73-17.93c7.62 0 21.35 4.09 52.36 34.33C398.28 383.6 404.38 400 424.21 400h52.36c15.25 0 22.37-7.69 18.3-22.55c-4.57-14.86-21.86-36.38-44.23-62c-12.2-14.34-30.5-30.23-36.09-37.92c-7.62-10.25-5.59-14.35 0-23.57c-.51 0 63.55-91.22 70.15-122"></svg:path>`,
})
export class FamiconsLogoVkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoVueIcon],svg[famicons-logo-vue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 144.03l-55.49-96.11h-79.43L256 281.61L390.92 47.92h-79.43z"></svg:path><svg:path fill="currentColor" d="M409.4 47.92L256 313.61L102.6 47.92H15.74L256 464.08L496.26 47.92z"></svg:path>`,
})
export class FamiconsLogoVueIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoWebComponentIcon],svg[famicons-logo-web-component-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m179.9 388l-76.16-132zm0 0h152.21l76.15-132l-76.15-132H179.9l-76.16 132zm-76.16-132l76.16-132z"></svg:path><svg:path fill="currentColor" d="M496 256L376 48H239.74l-43.84 76h136.21l76.15 132l-76.15 132H195.9l43.84 76H376z"></svg:path><svg:path fill="currentColor" d="m179.9 388l-76.16-132l76.16-132l43.84-76H136L16 256l120 208h87.74z"></svg:path>`,
})
export class FamiconsLogoWebComponentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoWechatIcon],svg[famicons-logo-wechat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408.67 298.53a21 21 0 1 1 20.9-21a20.85 20.85 0 0 1-20.9 21m-102.17 0a21 21 0 1 1 20.9-21a20.84 20.84 0 0 1-20.9 21m152.09 118.86C491.1 394.08 512 359.13 512 319.51c0-71.08-68.5-129.35-154.41-129.35s-154.42 58.27-154.42 129.35s68.5 129.34 154.42 129.34c17.41 0 34.83-2.33 49.92-7c2.49-.86 3.48-1.17 4.64-1.17a16.67 16.67 0 0 1 8.13 2.34L454 462.83a11.6 11.6 0 0 0 3.48 1.17a5 5 0 0 0 4.65-4.66a14.3 14.3 0 0 0-.77-3.86c-.41-1.46-5-16-7.36-25.27a19 19 0 0 1-.33-3.47a11.4 11.4 0 0 1 5-9.35"></svg:path><svg:path fill="currentColor" d="M246.13 178.51a24.47 24.47 0 0 1 0-48.94c12.77 0 24.38 11.65 24.38 24.47c1.16 12.82-10.45 24.47-24.38 24.47m-123.06 0A24.47 24.47 0 1 1 147.45 154a24.57 24.57 0 0 1-24.38 24.47M184.6 48C82.43 48 0 116.75 0 203c0 46.61 24.38 88.56 63.85 116.53C67.34 321.84 68 327 68 329a11.4 11.4 0 0 1-.66 4.49C63.85 345.14 59.4 364 59.21 365s-1.16 3.5-1.16 4.66a5.49 5.49 0 0 0 5.8 5.83a7.15 7.15 0 0 0 3.49-1.17L108 351c3.49-2.33 5.81-2.33 9.29-2.33a16.3 16.3 0 0 1 5.81 1.16c18.57 5.83 39.47 8.16 60.37 8.16h10.45a133.2 133.2 0 0 1-5.81-38.45c0-78.08 75.47-141 168.35-141h10.45C354.1 105.1 277.48 48 184.6 48"></svg:path>`,
})
export class FamiconsLogoWechatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoWhatsappIcon],svg[famicons-logo-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.6 220.6 0 0 0 29.78 111L32 480l118.25-30.87a223.6 223.6 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1M256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4l-70.17 18.32l18.73-68.09l-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52m101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78s-14.4 18-17.65 21.75s-6.5 4.16-12.07 1.38s-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26s.93-6.94-.46-9.71s-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52c-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38s39.3 59.73 95.21 83.76a323 323 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2c10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37s-5.11-3.71-10.69-6.48"></svg:path>`,
})
export class FamiconsLogoWhatsappIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoWindowsIcon],svg[famicons-logo-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 265H232v179l248 36zm-264 0H32v150l184 26.7zM480 32L232 67.4V249h248zM216 69.7L32 96v153h184z"></svg:path>`,
})
export class FamiconsLogoWindowsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoWordpressIcon],svg[famicons-logo-wordpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M259 271.3L226.2 367h-.1l-25.4 73.1c1.8.5 3.5.9 5.3 1.4h.3a192.5 192.5 0 0 0 49.5 6.5a157 157 0 0 0 24.9-1.8a184.3 184.3 0 0 0 32.5-7.1c2.6-.8 5.2-1.7 7.8-2.6c-2.8-6-8.8-19.3-9.1-19.9ZM80.8 180.5C70.8 203.1 64 230.9 64 256c0 6.3.3 12.6.9 18.8c6.9 71.2 52.9 131 116.1 157.9c2.6 1.1 5.3 2.2 8 3.2L96 180.6c-8-.3-9.5.2-15.2-.1"></svg:path><svg:path fill="currentColor" d="M430.2 175.4a188 188 0 0 0-15.1-26.6c-1.6-2.4-3.4-4.8-5.1-7.2A193 193 0 0 0 325.1 77a189.2 189.2 0 0 0-69.2-13a191.51 191.51 0 0 0-149.4 71.7A196 196 0 0 0 89 161.3c14.2.1 31.8.1 33.8.1c18.1 0 46-2.2 46-2.2c9.4-.6 10.4 13.1 1.1 14.2c0 0-9.4 1.1-19.8 1.6L213 362l37.8-113.3l-26.8-73.6c-9.4-.5-18.1-1.6-18.1-1.6c-9.4-.5-8.2-14.8 1-14.2c0 0 28.5 2.2 45.5 2.2c18.1 0 46-2.2 46-2.2c9.3-.6 10.5 13.1 1.1 14.2c0 0-9.3 1.1-19.7 1.6l62.3 185.6l17.3-57.6c8.7-22.4 13.1-40.9 13.1-55.7c0-21.3-7.7-36.1-14.3-47.6c-8.7-14.3-16.9-26.3-16.9-40.4c0-15.9 12-30.7 29-30.7h2.2c26.2-.7 34.8 25.3 35.9 43v.6c.4 7.2.1 12.5.1 18.8c0 17.4-3.3 37.1-13.1 61.8l-39 112.8l-22.3 65.7c1.8-.8 3.5-1.6 5.3-2.5c56.7-27.4 98-82 106.7-146.7a172 172 0 0 0 1.9-26a191.1 191.1 0 0 0-17.8-80.8"></svg:path><svg:path fill="currentColor" d="M256 48a208.06 208.06 0 0 1 81 399.66A208.06 208.06 0 0 1 175 64.34A206.7 206.7 0 0 1 256 48m0-16C132.29 32 32 132.29 32 256s100.29 224 224 224s224-100.29 224-224S379.71 32 256 32"></svg:path>`,
})
export class FamiconsLogoWordpressIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoXboxIcon],svg[famicons-logo-xbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126.8 248.3c39.7-58.6 77.9-92.8 77.9-92.8s-42.1-48.9-92.8-67.4l-3.3-.8A224.13 224.13 0 0 0 77.2 391c0-4.4.6-70.3 49.6-142.7M480 256a223.7 223.7 0 0 0-76.6-168.7l-3.2.9c-50.7 18.5-92.9 67.4-92.9 67.4s38.2 34.2 77.9 92.8c49 72.4 49.6 138.3 49.5 142.7A222.8 222.8 0 0 0 480 256M201.2 80.9c29.3 13.1 54.6 34.6 54.6 34.6s25.5-21.4 54.8-34.6c36.8-16.5 64.9-11.3 72.3-9.5a224.06 224.06 0 0 0-253.8 0c7.2-1.8 35.2-7.1 72.1 9.5m157.5 212C312.4 236 255.8 199 255.8 199s-56.3 37-102.7 93.9c-39.8 48.9-54.6 84.8-62.6 107.8l-1.3 4.8a224 224 0 0 0 333.6 0l-1.4-4.8c-8-23-22.9-58.9-62.7-107.8"></svg:path>`,
})
export class FamiconsLogoXboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoXingIcon],svg[famicons-logo-xing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M313.8 303.9L469 32H365L209.4 303.8a1.35 1.35 0 0 0 0 1.7l98.9 173.8c.4.7.8.7 1.6.7H413l-99.3-174.7a1.74 1.74 0 0 1 .1-1.4m-91.9-87.7L163 113a2 2 0 0 0-2-1H65l58.9 104.4a1.13 1.13 0 0 1 .1.8L43 352h96.8a1.54 1.54 0 0 0 1.6-.9l80.5-133.7a2.44 2.44 0 0 0 0-1.2"></svg:path>`,
})
export class FamiconsLogoXingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoYahooIcon],svg[famicons-logo-yahoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M410.32 37.13c-13.56 0-27-.93-39.12-5.13L256 218.67L140.8 32c-12.12 4.2-24.84 5.13-38.4 5.13c-13.32 0-26.52-1.05-38.4-5.13l153.6 248.15V480c12-4.08 25-5.13 38.4-5.13s26.4 1.05 38.4 5.13V280.5L448 32c-11.88 4-24.36 5.13-37.68 5.13"></svg:path>`,
})
export class FamiconsLogoYahooIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoYenIcon],svg[famicons-logo-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 32h-80L256 253.13L144 32H64l112.37 208H128v48h73.56L216 319v17h-88v48h88v96h80v-96h88v-48h-88v-17l14.89-31H384v-48h-48.29Z"></svg:path>`,
})
export class FamiconsLogoYenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoYoutubeIcon],svg[famicons-logo-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5c58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5c2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9M207 353.89v-196.5l145 98.2Z"></svg:path>`,
})
export class FamiconsLogoYoutubeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMagnetIcon],svg[famicons-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M191.98 463.79v-48m-101.82 5.82l33.94-33.94m-76.12-67.88h48"></svg:path><svg:path fill="currentColor" d="m267.56 312.32l-31.11 31.11a16 16 0 0 0 0 22.63l45.26 45.25a16 16 0 0 0 22.62 0l31.12-31.11a4 4 0 0 0 0-5.66l-62.23-62.22a4 4 0 0 0-5.66 0M131.8 176.55l-31.11 31.12a16 16 0 0 0 0 22.62l45.25 45.26a16 16 0 0 0 22.63 0l31.11-31.11a4 4 0 0 0 0-5.66l-62.22-62.23a4 4 0 0 0-5.66 0m297.05-93.27a144 144 0 0 0-203.71-.06l-65.06 65.05a4 4 0 0 0 0 5.66l62.23 62.22a4 4 0 0 0 5.66 0l65-65.05a48 48 0 0 1 68.46.59c18.3 18.92 17.47 49.24-1.14 67.85L295.85 284a4 4 0 0 0 0 5.66l62.22 62.23a4 4 0 0 0 5.66 0l64.08-64.08c56.37-56.34 57.37-148.13 1.04-204.53"></svg:path>`,
})
export class FamiconsMagnetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMagnetOutlineIcon],svg[famicons-magnet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M421.83 293.82A144 144 0 0 0 218.18 90.17"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M353.94 225.94a48 48 0 0 0-67.88-67.88"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M192 464v-48m-101.82 5.82l33.94-33.94M48 320h48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M286.06 158.06L172.92 271.19a32 32 0 0 1-45.25 0L105 248.57a32 32 0 0 1 0-45.26L218.18 90.17m203.65 203.65L308.69 407a32 32 0 0 1-45.26 0l-22.62-22.63a32 32 0 0 1 0-45.26l113.13-113.17M139.6 169.98l67.88 67.89m67.88 67.88l67.89 67.88"></svg:path>`,
})
export class FamiconsMagnetOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMagnetSharpIcon],svg[famicons-magnet-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M191.98 463.58v-48M90.16 421.4l33.94-33.94m-76.12-67.88h48"></svg:path><svg:path fill="currentColor" d="M422.2 89.82a144 144 0 0 0-203.71-.07l-67.88 67.88l67.88 67.89l67.88-67.89a48 48 0 0 1 68.46.59c18.3 18.92 17.48 49.24-1.14 67.86l-67.32 67.32l67.88 67.88l66.91-66.91c56.37-56.37 57.37-148.15 1.04-204.55M82.719 225.517l45.254-45.254l67.883 67.882L150.6 293.4zM218.49 361.27l45.254-45.254l67.882 67.882l-45.255 45.255z"></svg:path>`,
})
export class FamiconsMagnetSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMailIcon],svg[famicons-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56m-14.18 92.63l-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26"></svg:path>`,
})
export class FamiconsMailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMailOpenIcon],svg[famicons-mail-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448.67 154.45L274.1 68.2a41.1 41.1 0 0 0-36.2 0L63.33 154.45A55.6 55.6 0 0 0 32 204.53v184.61c0 30.88 25.42 56 56.67 56h334.66c31.25 0 56.67-25.12 56.67-56V204.53a55.6 55.6 0 0 0-31.33-50.08M252.38 96.82a8.22 8.22 0 0 1 7.24 0L429 180.48l-172 85a8.22 8.22 0 0 1-7.24 0L80.35 181.81Z"></svg:path>`,
})
export class FamiconsMailOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMailOpenOutlineIcon],svg[famicons-mail-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M441.6 171.61L266.87 85.37a24.57 24.57 0 0 0-21.74 0L70.4 171.61A40 40 0 0 0 48 207.39V392c0 22.09 18.14 40 40.52 40h335c22.38 0 40.52-17.91 40.52-40V207.39a40 40 0 0 0-22.44-35.78"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M397.33 368L268.07 267.46a24 24 0 0 0-29.47 0L109.33 368m200-73l136-103m-384 0l139 105"></svg:path>`,
})
export class FamiconsMailOpenOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMailOpenSharpIcon],svg[famicons-mail-open-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M471.05 168.36L263.24 65.69a16.37 16.37 0 0 0-14.48 0L41 168.36a16 16 0 0 0-9 14.31V432a16.09 16.09 0 0 0 16.19 16h415.62A16.09 16.09 0 0 0 480 432V182.67a16 16 0 0 0-8.95-14.31M256 97.89l173 85.44l-175.7 86.78l-173-85.44Z"></svg:path>`,
})
export class FamiconsMailOpenSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMailOutlineIcon],svg[famicons-mail-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="320" x="48" y="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="40" ry="40"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l144 112l144-112"></svg:path>`,
})
export class FamiconsMailOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMailSharpIcon],svg[famicons-mail-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 80H48a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M265.82 284.63a16 16 0 0 1-19.64 0L89.55 162.81l19.64-25.26L256 251.73l146.81-114.18l19.64 25.26Z"></svg:path>`,
})
export class FamiconsMailSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMailUnreadIcon],svg[famicons-mail-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 128.05A64 64 0 0 0 389.62 80a64.5 64.5 0 0 0-12.71 15.3v.06c-.54.9-1.05 1.82-1.55 2.74l-.24.49c-.42.79-.81 1.59-1.19 2.4c-.12.25-.23.5-.34.75c-.33.73-.65 1.47-.95 2.22c-.13.31-.25.62-.37.93c-.27.7-.53 1.4-.78 2.11l-.36 1.06c-.22.68-.43 1.37-.63 2.06c-.12.39-.23.77-.33 1.16c-.19.67-.35 1.35-.51 2c-.1.41-.2.82-.29 1.23c-.14.68-.27 1.37-.39 2c-.08.42-.16.84-.23 1.26c-.11.7-.2 1.41-.29 2.12c-.05.41-.11.82-.16 1.24c-.08.77-.13 1.54-.19 2.32c0 .36-.06.72-.08 1.08c-.06 1.14-.1 2.28-.1 3.44c0 1 0 2 .08 2.94v.64q.08 1.41.21 2.82l.06.48c.09.85.19 1.69.32 2.52c0 .17 0 .35.07.52c.14.91.31 1.81.49 2.71c0 .22.09.43.13.65c.18.86.38 1.72.6 2.57v.19c.23.89.48 1.76.75 2.63l.21.68c.27.85.55 1.68.85 2.51c.06.18.13.36.2.54c.27.71.55 1.42.84 2.12c.08.21.16.41.25.61c.34.79.69 1.58 1.06 2.36l.33.67c.35.7.7 1.4 1.07 2.09a64.34 64.34 0 0 0 22.14 23.81a62 62 0 0 0 7.62 4.15l.39.18q2.66 1.2 5.43 2.16l.95.32l1.5.47c.45.14.9.26 1.36.39l1.92.5l1.73.4l1.15.23l1.83.33l.94.15c.9.13 1.81.25 2.72.35l.77.07c.73.06 1.47.12 2.21.16l.86.05c1 0 1.94.08 2.92.08c1.16 0 2.3 0 3.44-.1l1.08-.08c.78-.06 1.55-.11 2.32-.19l1.25-.16c.7-.09 1.41-.18 2.11-.29l1.26-.23c.68-.12 1.37-.25 2-.39l1.23-.29c.68-.16 1.36-.32 2-.51c.39-.1.77-.21 1.16-.33c.69-.2 1.38-.41 2.06-.63l1.06-.36c.71-.25 1.41-.51 2.11-.78l.93-.37c.75-.3 1.49-.62 2.22-.95l.75-.34c.81-.38 1.61-.77 2.4-1.19l.49-.24c.92-.5 1.84-1 2.74-1.55h.06A64.5 64.5 0 0 0 480 170.38a63.8 63.8 0 0 0 16-42.33"></svg:path><svg:path fill="currentColor" d="m371.38 202.53l-105.56 82.1a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l94.22-73.28A95.86 95.86 0 0 1 348.81 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V211.19a95.85 95.85 0 0 1-108.62-8.66"></svg:path>`,
})
export class FamiconsMailUnreadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMailUnreadOutlineIcon],svg[famicons-mail-unread-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 96H88a40 40 0 0 0-40 40v240a40 40 0 0 0 40 40h334.73a40 40 0 0 0 40-40V239"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l144 112l87-65.67"></svg:path><svg:circle cx="431.95" cy="128.05" r="47.95" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M432 192a63.95 63.95 0 1 1 63.95-63.95A64 64 0 0 1 432 192m0-95.9a32 32 0 1 0 31.95 32a32 32 0 0 0-31.95-32"></svg:path>`,
})
export class FamiconsMailUnreadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMailUnreadSharpIcon],svg[famicons-mail-unread-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M374.09 101c-.11.23-.21.46-.31.7c-.34.75-.67 1.5-1 2.26l-.36.9c-.27.71-.54 1.42-.79 2.14c-.12.35-.24.7-.35 1c-.23.68-.44 1.37-.64 2.07l-.33 1.15q-.27 1-.51 2c-.1.41-.2.82-.28 1.23c-.15.67-.28 1.36-.4 2c-.08.42-.16.84-.23 1.27c-.11.69-.2 1.4-.29 2.1c-.05.42-.11.83-.16 1.25c-.08.77-.13 1.54-.19 2.31c0 .36-.06.72-.08 1.09c-.06 1.13-.09 2.27-.09 3.41c0 1 0 2 .07 2.94v.62c.05.95.12 1.89.21 2.83l.06.46c.09.87.2 1.72.32 2.57c0 .15 0 .31.07.46c.14.92.31 1.84.49 2.75l.12.59c.2.92.4 1.84.64 2.75c.23.92.5 1.82.77 2.71c.06.19.12.38.17.57c.28.88.57 1.74.88 2.59c.05.15.11.29.16.43c.29.78.6 1.55.92 2.32c.05.14.11.28.17.42c.35.83.73 1.65 1.11 2.47l.27.53c.4.82.81 1.64 1.24 2.44a64.2 64.2 0 0 0 29.56 27.63l.37.17c1.78.8 3.59 1.53 5.45 2.17l.95.32l1.5.47c.45.14.9.26 1.36.39l1.92.5c.57.14 1.14.27 1.72.39l1.15.24l1.83.32l.93.16c.9.13 1.81.24 2.72.34l.77.07c.73.07 1.47.13 2.22.17l.85.05c1 0 1.94.07 2.93.07c1.15 0 2.29 0 3.43-.09l1.09-.09c.77 0 1.54-.11 2.3-.19c.42 0 .83-.1 1.25-.16c.7-.08 1.41-.17 2.1-.28l1.27-.23c.68-.12 1.36-.25 2-.39l1.24-.29c.67-.16 1.35-.32 2-.51c.39-.1.78-.21 1.16-.33c.69-.2 1.37-.41 2.05-.63l1.07-.36c.7-.24 1.4-.5 2.1-.77l.94-.37c.74-.3 1.47-.62 2.19-.95l.77-.34c.8-.37 1.58-.77 2.36-1.17c.17-.09.35-.17.52-.27c.91-.48 1.8-1 2.68-1.5l.12-.07a63.95 63.95 0 1 0-89.21-84.88l-.21.39c-.3 1.03-.72 1.86-1.11 2.69"></svg:path><svg:path fill="currentColor" d="m371.51 202.43l-105.69 82.2a16 16 0 0 1-19.64 0L89.55 162.81l19.64-25.26L256 251.73l94.36-73.39A95.81 95.81 0 0 1 349 80H48a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V211.13a95.75 95.75 0 0 1-108.49-8.7"></svg:path>`,
})
export class FamiconsMailUnreadSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMaleIcon],svg[famicons-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M442 48h-90a22 22 0 0 0 0 44h36.89l-60.39 60.39c-68.19-52.86-167-48-229.54 14.57C31.12 234.81 31.12 345.19 99 413a174.21 174.21 0 0 0 246 0c62.57-62.58 67.43-161.35 14.57-229.54L420 123.11V160a22 22 0 0 0 44 0V70a22 22 0 0 0-22-22M313.92 381.92a130.13 130.13 0 0 1-183.84 0c-50.69-50.68-50.69-133.16 0-183.84s133.16-50.69 183.84 0s50.69 133.16 0 183.84"></svg:path>`,
})
export class FamiconsMaleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMaleFemaleIcon],svg[famicons-male-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M426 16h-74a22 22 0 0 0 0 44h20.89l-37.1 37.09A157.68 157.68 0 0 0 216 42c-87.12 0-158 70.88-158 158c0 79.66 59.26 145.72 136 156.46V394h-28a22 22 0 0 0 0 44h28v36a22 22 0 0 0 44 0v-36h28a22 22 0 0 0 0-44h-28v-37.54c76.74-10.74 136-76.8 136-156.46a157.15 157.15 0 0 0-14-64.92l44-44V112a22 22 0 0 0 44 0V38a22 22 0 0 0-22-22M216 314a114 114 0 1 1 114-114a114.13 114.13 0 0 1-114 114"></svg:path>`,
})
export class FamiconsMaleFemaleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMaleFemaleOutlineIcon],svg[famicons-male-female-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="216" cy="200" r="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M216 352v128m56-64H160m272-304V32h-80m-16.72 96.72L432 32"></svg:path>`,
})
export class FamiconsMaleFemaleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMaleFemaleSharpIcon],svg[famicons-male-female-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M330 16v44h42.89l-37.1 37.09A157.67 157.67 0 0 0 216 42c-87.12 0-158 70.88-158 158c0 79.66 59.26 145.72 136 156.46V394h-50v44h50v58h44v-58h50v-44h-50v-37.54c76.74-10.74 136-76.8 136-156.46a157.2 157.2 0 0 0-14-64.93l44-44V134h44V16ZM216 314a114 114 0 1 1 114-114a114.13 114.13 0 0 1-114 114"></svg:path>`,
})
export class FamiconsMaleFemaleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMaleOutlineIcon],svg[famicons-male-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="216" cy="296" r="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 160V64h-96m-28 124L448 64"></svg:path>`,
})
export class FamiconsMaleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMaleSharpIcon],svg[famicons-male-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M330 48v44h58.89l-60.39 60.39c-68.2-52.86-167-48-229.54 14.57C31.12 234.81 31.12 345.19 99 413a174.21 174.21 0 0 0 246 0c62.57-62.58 67.43-161.34 14.57-229.54L420 123.11V182h44V48Zm-16.08 333.92a130.13 130.13 0 0 1-183.84 0c-50.69-50.68-50.69-133.16 0-183.84s133.16-50.69 183.84 0s50.69 133.16 0 183.84"></svg:path>`,
})
export class FamiconsMaleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsManIcon],svg[famicons-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="56" r="56" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M304 128h-96a64.19 64.19 0 0 0-64 64v107.52c0 10.85 8.43 20.08 19.27 20.47A20 20 0 0 0 184 300v-99.73a8.18 8.18 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8V489a23 23 0 0 0 23 23a23 23 0 0 0 23-23V346.34a10.24 10.24 0 0 1 9.33-10.34A10 10 0 0 1 266 346v143a23 23 0 0 0 23 23a23 23 0 0 0 23-23V200.27a8.18 8.18 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v99.52c0 10.85 8.43 20.08 19.27 20.47A20 20 0 0 0 368 300V192a64.19 64.19 0 0 0-64-64"></svg:path>`,
})
export class FamiconsManIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsManOutlineIcon],svg[famicons-man-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 208v264a23.73 23.73 0 0 0 24 24h0a23.73 23.73 0 0 0 24-24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 336v136a23.73 23.73 0 0 0 24 24h0a23.73 23.73 0 0 0 24-24V208"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 192v88a23.72 23.72 0 0 1-24 24h0a23.72 23.72 0 0 1-24-24v-88a48 48 0 0 1 48-48h96a48 48 0 0 1 48 48v88a23.72 23.72 0 0 1-24 24h0a23.72 23.72 0 0 1-24-24v-88"></svg:path><svg:circle cx="256" cy="56" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class FamiconsManOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsManSharpIcon],svg[famicons-man-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="56" r="56" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M336 128H176a32 32 0 0 0-32 32v160h48V192h8v320h52V328h8v184h52V192h8v128h48V160a32 32 0 0 0-32-32"></svg:path>`,
})
export class FamiconsManSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMapIcon],svg[famicons-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.17 113.34A32 32 0 0 0 32 141.24V438a32 32 0 0 0 47 28.37c.43-.23.85-.47 1.26-.74l84.14-55.05a8 8 0 0 0 3.63-6.72V46.45a8 8 0 0 0-12.51-6.63Zm164.19-74.03A8 8 0 0 0 200 46v357.56a8 8 0 0 0 3.63 6.72l96 62.42A8 8 0 0 0 312 466V108.67a8 8 0 0 0-3.64-6.73Zm252.17 7.16a31.64 31.64 0 0 0-31.5-.88a12 12 0 0 0-1.25.74l-84.15 55a8 8 0 0 0-3.63 6.72v357.46a8 8 0 0 0 12.52 6.63l107.07-73.46a32 32 0 0 0 16.41-28v-296a32.76 32.76 0 0 0-15.47-28.21"></svg:path>`,
})
export class FamiconsMapIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMapOutlineIcon],svg[famicons-map-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M313.27 124.64L198.73 51.36a32 32 0 0 0-29.28.35L56.51 127.49A16 16 0 0 0 48 141.63v295.8a16 16 0 0 0 23.49 14.14l97.82-63.79a32 32 0 0 1 29.5-.24l111.86 73a32 32 0 0 0 29.27-.11l115.43-75.94a16 16 0 0 0 8.63-14.2V74.57a16 16 0 0 0-23.49-14.14l-98 63.86a32 32 0 0 1-29.24.35M328 128v336M184 48v336"></svg:path>`,
})
export class FamiconsMapOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMapSharpIcon],svg[famicons-map-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M327.71 130.93L184 39L32 144v336l152.29-98.93L328 473l152-105V32ZM312 421l-112-72V91l112 72Z"></svg:path>`,
})
export class FamiconsMapSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMedalIcon],svg[famicons-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="352" r="32" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M99.78 32a48 48 0 0 0-42.94 26.53l-31 62A48.26 48.26 0 0 0 24.28 160h278.2a4 4 0 0 0 3.39-1.87l75.5-120A4 4 0 0 0 378 32Z"></svg:path><svg:path fill="currentColor" d="m486.17 120.56l-31-62a47.7 47.7 0 0 0-32.79-25.46L342.5 160L298 231.08a128 128 0 0 0-84 0l-23.32-37.2a4 4 0 0 0-3.39-1.88H51.14a4 4 0 0 0-3.36 6.16l82.7 128.73a128 128 0 1 0 251 0L483.62 168a48.22 48.22 0 0 0 2.55-47.44m-226 295.31a64 64 0 1 1 59.69-59.69a64.08 64.08 0 0 1-59.68 59.69Z"></svg:path>`,
})
export class FamiconsMedalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMedalOutlineIcon],svg[famicons-medal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="352" r="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="256" cy="352" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M147 323L41.84 159.32a32 32 0 0 1-1.7-31.61l31-62A32 32 0 0 1 99.78 48h312.44a32 32 0 0 1 28.62 17.69l31 62a32 32 0 0 1-1.7 31.61L365 323m6-179H37m391.74-91.4L305 250M140.55 144L207 250"></svg:path>`,
})
export class FamiconsMedalOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMedalSharpIcon],svg[famicons-medal-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 32L16 160h289.11l80.22-128z"></svg:path><svg:path fill="currentColor" d="M496 144L424 32L298 231.08a128 128 0 0 0-84 0L189.53 192H43.82l86.66 134.89a128 128 0 1 0 251 0ZM256 422a70 70 0 1 1 70-70a70.08 70.08 0 0 1-70 70"></svg:path><svg:circle cx="256" cy="352" r="32" fill="currentColor"></svg:circle>`,
})
export class FamiconsMedalSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMedicalIcon],svg[famicons-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 464h-32a32 32 0 0 1-32-32l.05-85.82a4 4 0 0 0-6-3.47l-74.34 43.06a31.48 31.48 0 0 1-43-11.52l-16.5-28.64l-.06-.1a31.65 31.65 0 0 1 11.56-42.8l74.61-43.25a4 4 0 0 0 0-6.92l-74.54-43.21a31.41 31.41 0 0 1-11.55-43l16.44-28.55a31.48 31.48 0 0 1 19.27-14.74a31.14 31.14 0 0 1 23.8 3.2l74.31 43a4 4 0 0 0 6-3.47L208 80a32 32 0 0 1 32-32h32a32 32 0 0 1 32 32v85.72a4 4 0 0 0 6 3.47l74.34-43.06a31.51 31.51 0 0 1 43 11.52l16.49 28.64l.06.09a31.52 31.52 0 0 1-11.64 42.86l-74.53 43.2a4 4 0 0 0 0 6.92l74.53 43.2a31.42 31.42 0 0 1 11.56 43l-16.44 28.55a31.48 31.48 0 0 1-19.27 14.74a31.14 31.14 0 0 1-23.8-3.2l-74.31-43a4 4 0 0 0-6 3.46L304 432a32 32 0 0 1-32 32m61.54-218.56"></svg:path>`,
})
export class FamiconsMedicalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMedicalOutlineIcon],svg[famicons-medical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m429.93 174.27l-16.47-28.59a15.49 15.49 0 0 0-21.15-5.7l-98.39 57a4 4 0 0 1-6-3.5L288 80a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16l.07 113.57a4 4 0 0 1-6 3.5l-98.39-57a15.49 15.49 0 0 0-21.15 5.7l-16.46 28.6a15.42 15.42 0 0 0 5.69 21.1l98.49 57.08a4 4 0 0 1 0 6.9l-98.49 57.08a15.54 15.54 0 0 0-5.69 21.1l16.47 28.59a15.49 15.49 0 0 0 21.15 5.7l98.39-57a4 4 0 0 1 6 3.5L224 432a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16l-.07-113.67a4 4 0 0 1 6-3.5l98.39 57a15.49 15.49 0 0 0 21.15-5.7l16.47-28.59a15.42 15.42 0 0 0-5.69-21.1l-98.49-57.08a4 4 0 0 1 0-6.9l98.49-57.08a15.51 15.51 0 0 0 5.68-21.11"></svg:path>`,
})
export class FamiconsMedicalOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMedicalSharpIcon],svg[famicons-medical-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M351.9 256L460 193.6l-48-83.2l-108 62.4V48h-96v124.8l-108-62.4l-48 83.2L160.1 256L52 318.4l48 83.2l108-62.4V464h96V339.2l108 62.4l48-83.2z"></svg:path>`,
})
export class FamiconsMedicalSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMedkitIcon],svg[famicons-medkit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M336 64H176a16 16 0 0 0-16 16v16h192V80a16 16 0 0 0-16-16"></svg:path><svg:path fill="currentColor" d="M432 96h-48V80a48.05 48.05 0 0 0-48-48H176a48.05 48.05 0 0 0-48 48v16H80a64.07 64.07 0 0 0-64 64v256a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64V160a64.07 64.07 0 0 0-64-64m-96 208h-64v64a16 16 0 0 1-32 0v-64h-64a16 16 0 0 1 0-32h64v-64a16 16 0 0 1 32 0v64h64a16 16 0 0 1 0 32m16-208H160V80a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Z"></svg:path>`,
})
export class FamiconsMedkitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMedkitOutlineIcon],svg[famicons-medkit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="448" height="352" x="32" y="112" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 112V80a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32m-112 96v160m80-80H176"></svg:path>`,
})
export class FamiconsMedkitOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMedkitSharpIcon],svg[famicons-medkit-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M168 72h176v24H168z"></svg:path><svg:path fill="currentColor" d="M484 96H384V40a8 8 0 0 0-8-8H136a8 8 0 0 0-8 8v56H28a12 12 0 0 0-12 12v360a12 12 0 0 0 12 12h456a12 12 0 0 0 12-12V108a12 12 0 0 0-12-12M168 72h176v24H168Zm184 238h-74v74h-44v-74h-74v-44h74v-74h44v74h74Z"></svg:path>`,
})
export class FamiconsMedkitSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMegaphoneIcon],svg[famicons-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 176v.66a17.38 17.38 0 0 1-4.2 11.23v.05C38.4 194.32 32 205.74 32 224c0 16.55 5.3 28.23 11.68 35.91A19 19 0 0 1 48 272a32 32 0 0 0 32 32h8a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-8a32 32 0 0 0-32 32m404.18 10.55l-.93-.17a4 4 0 0 1-3.25-3.93V62c0-12.64-8.39-24-20.89-28.32c-11.92-4.11-24.34-.76-31.68 8.53a431 431 0 0 1-51.31 51.69c-23.63 20-46.24 34.25-67 42.31a8 8 0 0 0-5.15 7.47V299a16 16 0 0 0 9.69 14.69c19.34 8.29 40.24 21.83 62 40.28a434 434 0 0 1 51.68 52.16a26.22 26.22 0 0 0 21.1 9.87a33 33 0 0 0 10.44-1.74C439.71 410 448 399.05 448 386.4V265.53a4 4 0 0 1 3.33-3.94l.85-.14C461.8 258.84 480 247.67 480 224s-18.2-34.84-27.82-37.45M240 320V152a8 8 0 0 0-8-8h-96a8 8 0 0 0-8 8v304a24 24 0 0 0 24 24h52.45a32.66 32.66 0 0 0 25.93-12.45a31.65 31.65 0 0 0 5.21-29.05c-1.62-5.18-3.63-11-5.77-17.19c-7.91-22.9-18.34-37.07-21.12-69.32A32 32 0 0 0 240 320"></svg:path>`,
})
export class FamiconsMegaphoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMegaphoneOutlineIcon],svg[famicons-megaphone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M407.94 52.22S321.3 160 240 160H80a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h160c81.3 0 167.94 108.23 167.94 108.23c6.06 8 24.06 2.52 24.06-9.83V62c0-12.31-17-18.82-24.06-9.78M64 256s-16-6-16-32s16-32 16-32m384 54s16-4.33 16-22s-16-22-16-22m-192-42v128M112 160v128"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 288v168a8 8 0 0 0 8 8h53a16 16 0 0 0 15.29-20.73C211.91 416.39 192 386.08 192 336h16a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-16"></svg:path>`,
})
export class FamiconsMegaphoneOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMegaphoneSharpIcon],svg[famicons-megaphone-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 144v332a4 4 0 0 0 4 4h100.07a8 8 0 0 0 7.82-9.7L208.71 352H232a8 8 0 0 0 8-8V144Zm324.18 42.55L448 185.5V36a4 4 0 0 0-4-4h-42.5a4 4 0 0 0-2.63 1L272 144v160l126.87 111a4 4 0 0 0 2.63 1H444a4 4 0 0 0 4-4V262.5l4.18-1.05C461.8 258.84 480 247.67 480 224s-18.2-34.84-27.82-37.45M96 144H52a4 4 0 0 0-4 4v35.59a43 43 0 0 0-4.24 4.35C38.4 194.32 32 205.74 32 224c0 20.19 7.89 33.13 16 40.42V300a4 4 0 0 0 4 4h44Z"></svg:path>`,
})
export class FamiconsMegaphoneSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMenuIcon],svg[famicons-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336"></svg:path>`,
})
export class FamiconsMenuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMenuOutlineIcon],svg[famicons-menu-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"></svg:path>`,
})
export class FamiconsMenuOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMenuSharpIcon],svg[famicons-menu-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 384h384v-42.67H64Zm0-106.67h384v-42.66H64ZM64 128v42.67h384V128Z"></svg:path>`,
})
export class FamiconsMenuSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMicIcon],svg[famicons-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 448h128m64-240v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32m128 160v80"></svg:path><svg:path fill="currentColor" d="M256 320a78.83 78.83 0 0 1-56.55-24.1A80.9 80.9 0 0 1 176 239V128a79.69 79.69 0 0 1 80-80c44.86 0 80 35.14 80 80v111c0 44.66-35.89 81-80 81"></svg:path>`,
})
export class FamiconsMicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMicCircleIcon],svg[famicons-mic-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-48 128a48.14 48.14 0 0 1 48-48a48.14 48.14 0 0 1 48 48v64a48.14 48.14 0 0 1-48 48a48.14 48.14 0 0 1-48-48Zm144 72.22c0 23.36-10.94 45.61-30.79 62.66A103.7 103.7 0 0 1 272 334.26V352h16a16 16 0 0 1 0 32h-64a16 16 0 0 1 0-32h16v-17.74a103.7 103.7 0 0 1-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V224.3a16 16 0 0 1 32 0v23.92c0 25.66 28 55.48 64 55.48c29.6 0 64-24.23 64-55.48V224.3a16 16 0 1 1 32 0Z"></svg:path>`,
})
export class FamiconsMicCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMicCircleOutlineIcon],svg[famicons-mic-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 368h64m48-143.7v23.92c0 39.42-40.58 71.48-80 71.48h0c-39.42 0-80-32.06-80-71.48V224.3m80 95.7v48"></svg:path><svg:rect width="96" height="160" x="208" y="128" fill="currentColor" rx="48" ry="48"></svg:rect>`,
})
export class FamiconsMicCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMicCircleSharpIcon],svg[famicons-mic-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-48 128a48.14 48.14 0 0 1 48-48a48.14 48.14 0 0 1 48 48v64a48.14 48.14 0 0 1-48 48a48.14 48.14 0 0 1-48-48Zm144 72.22c0 23.36-10.94 45.61-30.79 62.66A103.7 103.7 0 0 1 272 334.26V352h32v32h-96v-32h32v-17.74a103.7 103.7 0 0 1-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V208.3h32v39.92c0 25.66 28 55.48 64 55.48c29.6 0 64-24.23 64-55.48V208.3h32Z"></svg:path>`,
})
export class FamiconsMicCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMicOffIcon],svg[famicons-mic-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M432 400L96 64"></svg:path><svg:path fill="currentColor" d="M400 240v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 208v32a111.7 111.7 0 0 1-2.68 24.38a2 2 0 0 0 .53 1.84l22.59 22.59a2 2 0 0 0 3.29-.72A143.3 143.3 0 0 0 400 240M256 352a112.36 112.36 0 0 1-112-112v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 208v32c0 74 56.1 135.12 128 143.11V432h-47.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 192 464h127.55c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 320 432h-48v-48.89a143.1 143.1 0 0 0 52-16.22a4 4 0 0 0 .91-6.35l-18.4-18.39a3 3 0 0 0-3.41-.58A111 111 0 0 1 256 352m1.14-304a79.66 79.66 0 0 0-68.47 36.57a4 4 0 0 0 .54 5L332.59 233a2 2 0 0 0 3.41-1.42V128.91C336 85 301 48.6 257.14 48"></svg:path><svg:path fill="currentColor" d="M179.41 215a2 2 0 0 0-3.41 1.42V239a80.9 80.9 0 0 0 23.45 56.9a78.55 78.55 0 0 0 77.8 21.19a2 2 0 0 0 .86-3.35Z"></svg:path>`,
})
export class FamiconsMicOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMicOffCircleIcon],svg[famicons-mic-off-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m0 80a48.14 48.14 0 0 1 48 48v64a48 48 0 0 1-.63 7.71a2 2 0 0 1-3.46 1l-84.42-92.86a4 4 0 0 1-.47-4.77A48.08 48.08 0 0 1 256 128m32 256h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 224 352h16v-17.74a103.7 103.7 0 0 1-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V224a15.91 15.91 0 0 1 16.39-16A16.26 16.26 0 0 1 192 224.4v23.82c0 25.66 28 55.48 64 55.48c1.67 0 3.37-.09 5.06-.24a3.94 3.94 0 0 1 3.29 1.29l21.07 23.19a2 2 0 0 1-.89 3.26a100 100 0 0 1-12.53 3.06V352h15.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 288 384m-77.89-138.91l36.46 40.11a1 1 0 0 1-.95 1.66a48.26 48.26 0 0 1-37.25-41a1 1 0 0 1 1.74-.77m152.65 119.75a16 16 0 0 1-22.6-1.08l-192-210a16 16 0 0 1 23.68-21.52l192 210a16 16 0 0 1-1.08 22.6M352 248.22a77.1 77.1 0 0 1-11.93 40.87a2 2 0 0 1-3.19.3l-19.19-21.1a4 4 0 0 1-.76-4.16a43.4 43.4 0 0 0 3.07-15.91v-23.8a16.3 16.3 0 0 1 13.64-16.24c9.88-1.48 18.36 6.51 18.36 16.12Z"></svg:path>`,
})
export class FamiconsMicOffCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMicOffCircleOutlineIcon],svg[famicons-mic-off-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208s-93.31 208-208 208m0-384c-97 0-176 79-176 176s79 176 176 176s176-78.95 176-176S353.05 80 256 80"></svg:path><svg:path fill="currentColor" d="M352 369a15.93 15.93 0 0 1-11.84-5.24l-192-210a16 16 0 0 1 23.68-21.52l192 210A16 16 0 0 1 352 369m0-120.78v-23.8a16.3 16.3 0 0 0-13.64-16.24c-9.88-1.48-18.36 6.51-18.36 16.12v23.92a43.4 43.4 0 0 1-3.07 15.91a4 4 0 0 0 .76 4.16l19.19 21.1a2 2 0 0 0 3.19-.3A77.1 77.1 0 0 0 352 248.22M304 240v-64a48.14 48.14 0 0 0-48-48a48.08 48.08 0 0 0-41 23.1a4 4 0 0 0 .47 4.77l84.42 92.86a2 2 0 0 0 3.46-1A48 48 0 0 0 304 240m-57.43 45.2l-36.46-40.11a1 1 0 0 0-1.74.8a48.26 48.26 0 0 0 37.25 41a1 1 0 0 0 .95-1.69"></svg:path><svg:path fill="currentColor" d="M287.55 352H272v-17.74a100 100 0 0 0 12.53-3.06a2 2 0 0 0 .89-3.26l-21.07-23.19a3.94 3.94 0 0 0-3.29-1.29c-1.69.15-3.39.24-5.06.24c-36 0-64-29.82-64-55.48V224.4a16.26 16.26 0 0 0-15.61-16.4A15.91 15.91 0 0 0 160 224v24.22c0 23.36 10.94 45.61 30.79 62.66A103.7 103.7 0 0 0 240 334.26V352h-15.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 224 384h64a16 16 0 0 0 16-16.77c-.42-8.61-7.84-15.23-16.45-15.23"></svg:path>`,
})
export class FamiconsMicOffCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMicOffCircleSharpIcon],svg[famicons-mic-off-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m64 200.22V208h32v40.22a77.53 77.53 0 0 1-13.37 43.11L316 266.4a44.1 44.1 0 0 0 4-18.18M256 128a48.14 48.14 0 0 1 48 48v64a48 48 0 0 1-1.44 11.64l-89-97.92A48.13 48.13 0 0 1 256 128m48 256h-96v-32h32v-17.74a103.7 103.7 0 0 1-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V208h32v40.22c0 25.66 28 55.48 64 55.48a57 57 0 0 0 7-.45l24.52 27a99.6 99.6 0 0 1-15.5 4V352h32Zm-95.91-141.13l40.5 44.55a48.2 48.2 0 0 1-40.5-44.55m136.07 124.89l-200.5-218.5l23.68-21.52l200.5 218.5Z"></svg:path>`,
})
export class FamiconsMicOffCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMicOffOutlineIcon],svg[famicons-mic-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M432 400L96 64"></svg:path><svg:path fill="currentColor" d="M400 240v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 208v32a111.6 111.6 0 0 1-2.45 23.31a4.05 4.05 0 0 0 1.07 3.69l21.82 21.81a2 2 0 0 0 3.29-.72A143.3 143.3 0 0 0 400 240M256 352a112.36 112.36 0 0 1-112-112v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 208v32c0 74 56.1 135.12 128 143.11V432h-47.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 192 464h127.55c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 320 432h-48v-48.89a143.1 143.1 0 0 0 52-16.22a4 4 0 0 0 .91-6.35L307 342.63a4 4 0 0 0-4.51-.78A110.8 110.8 0 0 1 256 352m0-272a47.18 47.18 0 0 1 48 48v74.72a4 4 0 0 0 1.17 2.82L332.59 233a2 2 0 0 0 3.41-1.42V128.91C336 85 301 48.6 257.14 48a79.66 79.66 0 0 0-68.47 36.57a4 4 0 0 0 .54 5l19.54 19.54a2 2 0 0 0 3.25-.63A47.44 47.44 0 0 1 256 80"></svg:path><svg:path fill="currentColor" d="M207.27 242.9L179.41 215a2 2 0 0 0-3.41 1.42V239a80.9 80.9 0 0 0 23.45 56.9a78.55 78.55 0 0 0 77.8 21.19a2 2 0 0 0 .86-3.35l-24.91-24.91a4.08 4.08 0 0 0-2.42-1.15c-21.65-2.52-39.48-20.44-42.37-42.43a4 4 0 0 0-1.14-2.35"></svg:path>`,
})
export class FamiconsMicOffOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMicOffSharpIcon],svg[famicons-mic-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M432 400L96 64"></svg:path><svg:path fill="currentColor" d="M368 192v48a111.7 111.7 0 0 1-2.93 25.45L390.65 291a143.1 143.1 0 0 0 9.35-51v-48Zm-96 240v-48.89a143.1 143.1 0 0 0 56.65-18.83L305 340.65A112.13 112.13 0 0 1 144 240v-48h-32v48c0 74 56.1 135.12 128 143.11V432h-64v32h160v-32Zm64-195.63V128c0-44.86-35.14-80-80-80a79.68 79.68 0 0 0-69 39.34"></svg:path><svg:path fill="currentColor" d="M176 211.63V239a80.9 80.9 0 0 0 23.45 56.9a78.55 78.55 0 0 0 81 20.21Z"></svg:path>`,
})
export class FamiconsMicOffSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMicOutlineIcon],svg[famicons-mic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 448h128m64-240v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32m128 160v80"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 64a63.68 63.68 0 0 0-64 64v111c0 35.2 29 65 64 65s64-29 64-65V128c0-36-28-64-64-64"></svg:path>`,
})
export class FamiconsMicOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMicSharpIcon],svg[famicons-mic-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M192 448h128m64-240v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32m128 160v80"></svg:path><svg:path fill="currentColor" d="M256 320a78.83 78.83 0 0 1-56.55-24.1A80.9 80.9 0 0 1 176 239V128a79.69 79.69 0 0 1 80-80c44.86 0 80 35.14 80 80v111c0 44.66-35.89 81-80 81"></svg:path>`,
})
export class FamiconsMicSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMoonIcon],svg[famicons-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200c31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480"></svg:path>`,
})
export class FamiconsMoonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMoonOutlineIcon],svg[famicons-moon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216c88.68 0 166.73-51.57 200-128c-26.39 11.49-57.38 16-88 16c-119.29 0-216-96.71-216-216"></svg:path>`,
})
export class FamiconsMoonOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMoonSharpIcon],svg[famicons-moon-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38C32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85c-28.42 12.38-61.8 17.23-94.77 17.23c-128.47 0-232.61-104.14-232.61-232.61"></svg:path>`,
})
export class FamiconsMoonSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMoveIcon],svg[famicons-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m176 112l80-80l80 80m-80.02-80l.02 448m-80-80l80 80l80-80m64-224l80 80l-80 80M112 176l-80 80l80 80m-80-80h448"></svg:path>`,
})
export class FamiconsMoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMoveOutlineIcon],svg[famicons-move-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m176 112l80-80l80 80m-80.02-80l.02 448m-80-80l80 80l80-80m64-224l80 80l-80 80M112 176l-80 80l80 80m-80-80h448"></svg:path>`,
})
export class FamiconsMoveOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMoveSharpIcon],svg[famicons-move-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="m176 112l80-80l80 80m-80.02-80l.02 448m-80-80l80 80l80-80m64-224l80 80l-80 80M112 176l-80 80l80 80m-80-80h448"></svg:path>`,
})
export class FamiconsMoveSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMusicalNoteIcon],svg[famicons-musical-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.83 480a55.2 55.2 0 0 1-32.36-10.55A56.64 56.64 0 0 1 128 423.58a50.26 50.26 0 0 1 34.14-47.73L213 358.73a16.25 16.25 0 0 0 11-15.49V92a32.1 32.1 0 0 1 24.09-31.15l108.39-28.14A22 22 0 0 1 384 54v57.75a32.09 32.09 0 0 1-24.2 31.19l-91.65 23.13A16.24 16.24 0 0 0 256 181.91V424a48.22 48.22 0 0 1-32.78 45.81l-21.47 7.23a56 56 0 0 1-17.92 2.96"></svg:path>`,
})
export class FamiconsMusicalNoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMusicalNoteOutlineIcon],svg[famicons-musical-note-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M240 343.31V424a32.28 32.28 0 0 1-21.88 30.65l-21.47 7.23c-25.9 8.71-52.65-10.75-52.65-38.32h0A34.29 34.29 0 0 1 167.25 391l50.87-17.12A32.29 32.29 0 0 0 240 343.24V92a16.13 16.13 0 0 1 12.06-15.66L360.49 48.2A6 6 0 0 1 368 54v57.76a16.13 16.13 0 0 1-12.12 15.67l-91.64 23.13A32.25 32.25 0 0 0 240 181.91v39.39"></svg:path>`,
})
export class FamiconsMusicalNoteOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMusicalNoteSharpIcon],svg[famicons-musical-note-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M381.55 32.05c-18.13 4.28-126.57 31.07-156 38.19a2 2 0 0 0-1.55 1.94V353.3a2 2 0 0 1-1.32 1.88L182 369.88c-29.82 10.66-54 18.94-54 59.06c0 32.47 23.53 47.18 37.95 50a82 82 0 0 0 15 1.08c8.89 0 31-3.59 47.52-14.24C256 448 256 448 256 415.93V169.16a2 2 0 0 1 1.49-1.94l125-33a2 2 0 0 0 1.49-1.94V34a2 2 0 0 0-2.43-1.95"></svg:path>`,
})
export class FamiconsMusicalNoteSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMusicalNotesIcon],svg[famicons-musical-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M421.84 37.37a25.86 25.86 0 0 0-22.6-4.46L199.92 86.49A32.3 32.3 0 0 0 176 118v226c0 6.74-4.36 12.56-11.11 14.83l-.12.05l-52 18C92.88 383.53 80 402 80 423.91a55.54 55.54 0 0 0 23.23 45.63A54.78 54.78 0 0 0 135.34 480a55.8 55.8 0 0 0 17.75-2.93l.38-.13l21.84-7.94A47.84 47.84 0 0 0 208 423.91v-212c0-7.29 4.77-13.21 12.16-15.07l.21-.06L395 150.14a4 4 0 0 1 5 3.86v141.93c0 6.75-4.25 12.38-11.11 14.68l-.25.09l-50.89 18.11A49.09 49.09 0 0 0 304 375.92a55.67 55.67 0 0 0 23.23 45.8a54.63 54.63 0 0 0 49.88 7.35l.36-.12l21.84-7.95A47.83 47.83 0 0 0 432 375.92V58a25.74 25.74 0 0 0-10.16-20.63"></svg:path>`,
})
export class FamiconsMusicalNotesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMusicalNotesOutlineIcon],svg[famicons-musical-notes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 218v-6c0-14.84 10-27 24.24-30.59l174.59-46.68A20 20 0 0 1 416 154v22"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 295.94v80c0 13.91-8.93 25.59-22 30l-22 8c-25.9 8.72-52-10.42-52-38h0a33.37 33.37 0 0 1 23-32l51-18.15c13.07-4.4 22-15.94 22-29.85V58a10 10 0 0 0-12.6-9.61L204 102a16.48 16.48 0 0 0-12 16v226c0 13.91-8.93 25.6-22 30l-52 18c-13.88 4.68-22 17.22-22 32h0c0 27.58 26.52 46.55 52 38l22-8c13.07-4.4 22-16.08 22-30v-80"></svg:path>`,
})
export class FamiconsMusicalNotesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsMusicalNotesSharpIcon],svg[famicons-musical-notes-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M429.46 32.07c-23.6 6.53-205.55 58.81-250.54 71.43a4 4 0 0 0-2.92 3.83v247a2 2 0 0 1-1.33 1.89l-27.85 9.55c-19 7.44-66.82 16.68-66.82 59.19c0 35.54 24.63 51.54 45.86 54.28a52 52 0 0 0 7.81.8c7.37 0 36.38-7.08 53.3-18.08C208 448.25 208 448 208 412V202c0-.9.62-.84 1.48-1.07l188-51.92a2 2 0 0 1 2.53 2v155.54a2 2 0 0 1-1.36 1.89c-8.9 3-19.23 6.5-26.48 9.12C341.39 328.68 304 335.65 304 376c0 38.51 28.26 54.58 46.3 55.83a87.4 87.4 0 0 0 21.33-1c9-1.38 24.09-5.9 38.14-14.86C432 401.79 432 401.51 432 360V34a2 2 0 0 0-2.54-1.93"></svg:path>`,
})
export class FamiconsMusicalNotesSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNavigateIcon],svg[famicons-navigate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 464a16 16 0 0 1-16-16.42V264.13a8 8 0 0 0-8-8H64.41a16.31 16.31 0 0 1-15.49-10.65a16 16 0 0 1 8.41-19.87l384-176.15a16 16 0 0 1 21.22 21.19l-176 384A16 16 0 0 1 272 464"></svg:path>`,
})
export class FamiconsNavigateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNavigateCircleIcon],svg[famicons-navigate-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48M351 175.24l-82.24 186.52c-4.79 10.47-20.78 7-20.78-4.56V268a4 4 0 0 0-4-4H154.8c-11.52 0-15-15.87-4.57-20.67L336.76 161A10.73 10.73 0 0 1 351 175.24"></svg:path>`,
})
export class FamiconsNavigateCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNavigateCircleOutlineIcon],svg[famicons-navigate-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m336.76 161l-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 0 1 4 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 0 0 336.76 161"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class FamiconsNavigateCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNavigateCircleSharpIcon],svg[famicons-navigate-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48A208.23 208.23 0 0 0 48 256c0 114.68 93.31 208 208 208a208.23 208.23 0 0 0 208-208c0-114.69-93.31-208-208-208m-8 361V264H103l259-114.11Z"></svg:path>`,
})
export class FamiconsNavigateCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNavigateOutlineIcon],svg[famicons-navigate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 64L64 240.14h200a8 8 0 0 1 8 8V448Z"></svg:path>`,
})
export class FamiconsNavigateOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNavigateSharpIcon],svg[famicons-navigate-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 32L32 240h240v240z"></svg:path>`,
})
export class FamiconsNavigateSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNewspaperIcon],svg[famicons-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M439.91 112h-23.82a.09.09 0 0 0-.09.09V416a32 32 0 0 0 32 32a32 32 0 0 0 32-32V152.09A40.09 40.09 0 0 0 439.91 112"></svg:path><svg:path fill="currentColor" d="M384 416V72a40 40 0 0 0-40-40H72a40 40 0 0 0-40 40v352a56 56 0 0 0 56 56h342.85a1.14 1.14 0 0 0 1.15-1.15a1.14 1.14 0 0 0-.85-1.1A64.11 64.11 0 0 1 384 416M96 128a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16h-64a16 16 0 0 1-16-16Zm208 272H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 368h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 400m0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 304h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 336m0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 240h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 272m0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 240 176h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 208m0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 240 112h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 144"></svg:path>`,
})
export class FamiconsNewspaperIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNewspaperOutlineIcon],svg[famicons-newspaper-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M368 415.86V72a24.07 24.07 0 0 0-24-24H72a24.07 24.07 0 0 0-24 24v352a40.12 40.12 0 0 0 40 40h328"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M416 464a48 48 0 0 1-48-48V128h72a24 24 0 0 1 24 24v264a48 48 0 0 1-48 48Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M240 128h64m-64 64h64m-192 64h192m-192 64h192m-192 64h192"></svg:path><svg:path fill="currentColor" d="M176 208h-64a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16"></svg:path>`,
})
export class FamiconsNewspaperOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNewspaperSharpIcon],svg[famicons-newspaper-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="96" height="96" x="96" y="112" fill="none" rx="16" ry="16"></svg:rect><svg:path fill="currentColor" d="M468 112h-52v304a32 32 0 0 0 32 32a32 32 0 0 0 32-32V124a12 12 0 0 0-12-12"></svg:path><svg:path fill="currentColor" d="M431.15 477.75A64.11 64.11 0 0 1 384 416V44a12 12 0 0 0-12-12H44a12 12 0 0 0-12 12v380a56 56 0 0 0 56 56h342.85a1.14 1.14 0 0 0 .3-2.25M96 208v-96h96v96Zm224 192H96v-32h224Zm0-64H96v-32h224Zm0-64H96v-32h224Zm0-64h-96v-32h96Zm0-64h-96v-32h96Z"></svg:path>`,
})
export class FamiconsNewspaperSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNotificationsIcon],svg[famicons-notifications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93c-22-26.61-35.31-42.67-35.31-118c0-39-9.33-71-27.72-95c-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.1 3.1 0 0 1-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14c0 75.36-13.29 91.42-35.31 118c-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 0 0-4.61-37.66M256 480a80.06 80.06 0 0 0 70.44-42.13a4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480"></svg:path>`,
})
export class FamiconsNotificationsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNotificationsCircleIcon],svg[famicons-notifications-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m0 336c-20.9 0-37.52-8.86-39.75-27.58a4 4 0 0 1 4-4.42h71.45a4 4 0 0 1 4 4.48C293.15 374.85 276.68 384 256 384m98-48H158c-11.84 0-18-15-11.19-23c16.33-19.34 27.87-27.47 27.87-80.8c0-48.87 25.74-66.21 47-74.67a11.35 11.35 0 0 0 6.33-6.68C231.7 138.6 242.14 128 256 128s24.28 10.6 28 22.86a11.4 11.4 0 0 0 6.34 6.68c21.21 8.44 47 25.81 47 74.67c0 53.33 11.53 61.46 27.86 80.8c6.74 7.99.57 22.99-11.2 22.99"></svg:path>`,
})
export class FamiconsNotificationsCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNotificationsCircleOutlineIcon],svg[famicons-notifications-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="M365.2 313c-16.33-19.34-27.86-27.47-27.86-80.8c0-48.86-25.78-66.23-47-74.67a11.4 11.4 0 0 1-6.34-6.68C280.29 138.6 269.88 128 256 128s-24.31 10.6-28 22.86a11.35 11.35 0 0 1-6.33 6.68c-21.24 8.46-47 25.8-47 74.67c0 53.33-11.54 61.46-27.87 80.8c-6.77 8-.65 23 11.19 23H354C365.77 336 371.94 321 365.2 313m-144.96 39a4 4 0 0 0-4 4.42C218.49 375.14 235.11 384 256 384c20.67 0 37.14-9.15 39.66-27.52a4 4 0 0 0-4-4.48Z"></svg:path>`,
})
export class FamiconsNotificationsCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNotificationsCircleSharpIcon],svg[famicons-notifications-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M295.68 351.43v.57h.32Z"></svg:path><svg:path fill="none" d="M256 384c22.28 0 39.36-10.63 39.66-32H216c0 21.75 17.53 32 40 32m39.67-32h.33l-.32-.57c0 .19-.01.38-.01.57"></svg:path><svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m0 336c-22.48 0-40-10.25-40-32h80c-.3 21.37-17.71 32-40 32m112-48H144v-28l28-36v-32.3c0-40.41 15.82-75.35 56-84.27l4-27.43h48l4 27.43c40 8.92 56 44 56 84.27V272l28 36Z"></svg:path>`,
})
export class FamiconsNotificationsCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNotificationsOffIcon],svg[famicons-notifications-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 464a15.92 15.92 0 0 1-11.31-4.69l-384-384a16 16 0 0 1 22.62-22.62l384 384A16 16 0 0 1 448 464m-7.92-122.69c-1.66-2-3.29-4-4.89-5.93c-22-26.61-35.31-42.67-35.31-118c0-39-9.33-71-27.72-95c-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.1 3.1 0 0 1-.81.65a158 158 0 0 0-21.88 11a8 8 0 0 0-1.49 12.49l261.78 261.74a8 8 0 0 0 13.6-6.63a35.4 35.4 0 0 0-7.84-18.5M112.14 217.35c0 75.36-13.29 91.42-35.31 118c-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H312.8a8 8 0 0 0 5.66-13.66l-192-192a8 8 0 0 0-13.62 5q-.7 8.69-.7 18.04M256 480a80.06 80.06 0 0 0 70.44-42.13a4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480"></svg:path>`,
})
export class FamiconsNotificationsOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNotificationsOffCircleIcon],svg[famicons-notifications-off-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48M146.83 313c16.33-19.34 27.86-27.47 27.86-80.8q0-3.75.2-7.26a4 4 0 0 1 7-2.52l98 106.87a4 4 0 0 1-2.94 6.7H158C146.18 336 140.06 321 146.83 313m148.93 43.41C293.53 375.14 276.92 384 256 384s-37.51-8.86-39.75-27.58a4 4 0 0 1 4-4.42h71.53a4 4 0 0 1 3.98 4.42Zm67 17.42a16 16 0 0 1-22.6-1.08l-192-212a16 16 0 0 1 23.68-21.52l192 212a16 16 0 0 1-1.08 22.61ZM361 323.21L216.49 165.53a4 4 0 0 1 1.3-6.36c1.31-.58 2.61-1.12 3.89-1.63a11.33 11.33 0 0 0 6.32-6.68c3.72-12.26 14.15-22.86 28-22.86s24.29 10.6 28 22.86a11.34 11.34 0 0 0 6.34 6.68c21.21 8.44 47 25.81 47 74.67c0 53.33 11.54 61.46 27.87 80.8a12.1 12.1 0 0 1 2.76 7.25a4 4 0 0 1-6.97 2.95"></svg:path>`,
})
export class FamiconsNotificationsOffCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNotificationsOffCircleOutlineIcon],svg[famicons-notifications-off-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="M220.24 352a4 4 0 0 0-4 4.42C218.49 375.14 235.11 384 256 384s37.5-8.86 39.73-27.58a4 4 0 0 0-4-4.42ZM352 378a15.93 15.93 0 0 1-11.84-5.24l-192-212a16 16 0 0 1 23.68-21.52l192 212A16 16 0 0 1 352 378M174.68 232.21c0 53.33-11.54 61.46-27.87 80.8c-6.77 8-.65 23 11.19 23h118.83a4 4 0 0 0 2.95-6.7l-98-106.87a4 4 0 0 0-6.94 2.52c-.1 2.33-.16 4.75-.16 7.25M365.2 313c-16.33-19.34-27.86-27.47-27.86-80.8c0-48.86-25.78-66.23-47-74.67a11.4 11.4 0 0 1-6.34-6.68C280.29 138.6 269.88 128 256 128s-24.31 10.6-28 22.86a11.35 11.35 0 0 1-6.33 6.68c-1.28.51-2.57 1.05-3.88 1.63a4 4 0 0 0-1.3 6.36L361 323.21a4 4 0 0 0 6.94-2.95a12 12 0 0 0-2.74-7.26"></svg:path>`,
})
export class FamiconsNotificationsOffCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNotificationsOffCircleSharpIcon],svg[famicons-notifications-off-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48M144 308l28-36v-32.3a132 132 0 0 1 2.34-25.42L285.92 336H144Zm112.18 76C233.6 384 216 373.75 216 352h80c-.3 21.37-17.45 32-39.82 32m93.48-3.74l-211-227l23.68-21.52l211 227ZM368 330.85l-.32-.38l-155.5-169.63a73.4 73.4 0 0 1 15.82-5.41l4-27.43h48l4 27.43c40 8.92 56 44 56 84.27V272l28 36Z"></svg:path>`,
})
export class FamiconsNotificationsOffCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNotificationsOffOutlineIcon],svg[famicons-notifications-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128.51 204.59q-.37 6.15-.37 12.76C128.14 304 110 320 84.33 351.43C73.69 364.45 83 384 101.62 384H320m94.5-48.7c-18.48-23.45-30.62-47.05-30.62-118c0-79.3-40.52-107.57-73.88-121.3c-4.43-1.82-8.6-6-9.95-10.55C294.21 65.54 277.82 48 256 48s-38.2 17.55-44 37.47c-1.35 4.6-5.52 8.71-10 10.53a150 150 0 0 0-18 8.79M320 384v16a64 64 0 0 1-128 0v-16"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M448 448L64 64"></svg:path>`,
})
export class FamiconsNotificationsOffOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNotificationsOffSharpIcon],svg[famicons-notifications-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m41.37 64l22.628-22.628l406.629 406.63l-22.628 22.627zM256 480a80.09 80.09 0 0 0 73.3-48H182.7a80.09 80.09 0 0 0 73.3 48M112 227.47V288l-48 64v48h268.12L115.87 183.75a237 237 0 0 0-3.87 43.72M448 352l-48-64v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48a117.5 117.5 0 0 0-41.95 18.17l282 282Z"></svg:path>`,
})
export class FamiconsNotificationsOffSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNotificationsOutlineIcon],svg[famicons-notifications-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M427.68 351.43C402 320 383.87 304 383.87 217.35C383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53c-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43C73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57M320 384v16a64 64 0 0 1-128 0v-16"></svg:path>`,
})
export class FamiconsNotificationsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNotificationsSharpIcon],svg[famicons-notifications-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 480a80.09 80.09 0 0 0 73.3-48H182.7a80.09 80.09 0 0 0 73.3 48m144-192v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48c-68.88 15.61-96 76.76-96 147.47V288l-48 64v48h384v-48Z"></svg:path>`,
})
export class FamiconsNotificationsSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNuclearIcon],svg[famicons-nuclear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48M429 239.92l-93.08-.1a2 2 0 0 1-1.95-1.57a80.08 80.08 0 0 0-27.44-44.17a2 2 0 0 1-.54-2.43l41.32-83.43a2 2 0 0 1 2.87-.81A176.2 176.2 0 0 1 431 237.71a2 2 0 0 1-2 2.21m-220.8 20.46a48 48 0 1 1 43.42 43.42a48 48 0 0 1-43.42-43.42m-43.55-152.16L206 191.65a2 2 0 0 1-.54 2.43A80.08 80.08 0 0 0 178 238.25a2 2 0 0 1-2 1.57l-93.08.1a2 2 0 0 1-2-2.21a176.2 176.2 0 0 1 80.82-130.3a2 2 0 0 1 2.91.81m-.37 295.34l56.31-74.09a2 2 0 0 1 2.43-.6a79.84 79.84 0 0 0 66 0a2 2 0 0 1 2.43.6l56.31 74.09a2 2 0 0 1-.54 2.92a175.65 175.65 0 0 1-182.36 0a2 2 0 0 1-.58-2.92"></svg:path>`,
})
export class FamiconsNuclearIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNuclearOutlineIcon],svg[famicons-nuclear-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="256" cy="256" r="64" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M224 192L171 85m117 107l53-107m-13.45 170.81l119.41.13m-147.87 57.19l72.25 95.06M184.45 255.81l-119.41.13m147.87 57.19l-72.25 95.06"></svg:path>`,
})
export class FamiconsNuclearOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNuclearSharpIcon],svg[famicons-nuclear-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="48" fill="currentColor"></svg:circle><svg:path fill="none" d="m223.47 335.59l-51.71 68a169.73 169.73 0 0 0 168.48 0l-51.71-68"></svg:path><svg:path fill="currentColor" d="M403.08 108.92a208 208 0 0 0-294.16 294.16a208 208 0 0 0 294.16-294.16M342 256a86.13 86.13 0 0 1-53.47 79.59l51.71 68a169.73 169.73 0 0 1-168.48 0l51.71-68a86 86 0 0 1-50.56-101.77l-85.48.09a170.2 170.2 0 0 1 73.83-119l37.94 76.59a85.78 85.78 0 0 1 113.6 0l37.94-76.59a170.2 170.2 0 0 1 73.83 119l-85.48-.09A86 86 0 0 1 342 256"></svg:path>`,
})
export class FamiconsNuclearSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNutritionIcon],svg[famicons-nutrition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M439 166.29c-18.67-32.57-47.46-50.81-85.57-54.23c-20.18-1.8-39 3.37-57.23 8.38c-14.15 3.89-27.52 7.56-40.2 7.56s-26-3.68-40.06-7.57c-18.28-5-37.18-10.26-57.43-8.36c-36.39 3.41-65.51 22.11-84.31 54.08C56.82 195.76 48 236.76 48 288c0 40.4 15 90.49 40 134c12.82 22.25 47 74 87.16 74c30.77 0 47.15-9.44 59.11-16.33c8.3-4.78 13.31-7.67 21.69-7.67s13.39 2.89 21.69 7.67c12 6.89 28.35 16.33 59.15 16.33c40.17 0 74.34-51.76 87.16-74c25.07-43.5 40-93.59 40-134c.04-52.57-8.14-92.38-24.96-121.71M216 352c-13.25 0-24-21.49-24-48s10.75-48 24-48s24 21.49 24 48s-10.75 48-24 48m80 0c-13.25 0-24-21.49-24-48s10.75-48 24-48s24 21.49 24 48s-10.75 48-24 48"></svg:path><svg:path fill="currentColor" d="M265.1 111.93c13.16-1.75 37.86-7.83 58.83-28.79a98 98 0 0 0 28-58.2a8 8 0 0 0-8.55-8.94c-12.71.95-36.76 5.87-58.73 27.85A97.6 97.6 0 0 0 256 103.2a8 8 0 0 0 9.1 8.73"></svg:path>`,
})
export class FamiconsNutritionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNutritionOutlineIcon],svg[famicons-nutrition-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M352 128c-32.26-2.89-64 16-96 16s-63.75-19-96-16c-64 6-96 64-96 160c0 80 64 192 111.2 192s51.94-24 80.8-24s33.59 24 80.8 24S448 368 448 288c0-96-29-154-96-160Z"></svg:path><svg:path fill="currentColor" d="M323.92 83.14c-21 21-45.66 27-58.82 28.79a8 8 0 0 1-9.1-8.73a97.6 97.6 0 0 1 28.61-59.33c22-22 46-26.9 58.72-27.85a8 8 0 0 1 8.67 8.92a98 98 0 0 1-28.08 58.2"></svg:path><svg:ellipse cx="216" cy="304" fill="currentColor" rx="24" ry="48"></svg:ellipse><svg:ellipse cx="296" cy="304" fill="currentColor" rx="24" ry="48"></svg:ellipse>`,
})
export class FamiconsNutritionOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsNutritionSharpIcon],svg[famicons-nutrition-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M438.71 159.43c-17.6-28.31-45.5-43.8-85.28-47.37c-22.82-2-50.23 4.94-72.25 10.55C271.26 125.14 260 128 256 128s-15.18-2.86-25-5.39c-22.08-5.65-49.56-12.69-72.45-10.54c-38.53 3.61-66 19.19-84 47.62S48 229 48 288c0 61.28 29.53 114.58 47.13 140.89C116.82 461.34 149.25 496 175.2 496c18.57 0 34.12-7.23 47.82-13.64C243 473 256 472 256 472s11 0 31.94 10.11C301.65 488.73 317.3 496 336.8 496c26.58 0 59.08-34.69 80.63-67.15C434.82 402.65 464 349.52 464 288c0-60-8-100.83-25.29-128.57M216 352c-13.25 0-24-21.49-24-48s10.75-48 24-48s24 21.49 24 48s-10.75 48-24 48m80 0c-13.25 0-24-21.49-24-48s10.75-48 24-48s24 21.49 24 48s-10.75 48-24 48"></svg:path><svg:path fill="currentColor" d="M323.72 82.76C353.68 52.82 352 16.18 352 16.14s-35.77-3.76-67.23 27.67S256.06 112 256.06 112s37.68.71 67.66-29.24"></svg:path>`,
})
export class FamiconsNutritionSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsOpenIcon],svg[famicons-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 304a16 16 0 0 1-11.31-27.31l157.94-157.94A55.7 55.7 0 0 0 344 112H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V168a55.7 55.7 0 0 0-6.75-26.63L235.31 299.31A15.92 15.92 0 0 1 224 304"></svg:path><svg:path fill="currentColor" d="M448 48H336a16 16 0 0 0 0 32h73.37l-38.74 38.75a56.35 56.35 0 0 1 22.62 22.62L432 102.63V176a16 16 0 0 0 32 0V64a16 16 0 0 0-16-16"></svg:path>`,
})
export class FamiconsOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsOpenOutlineIcon],svg[famicons-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48M336 64h112v112M224 288L440 72"></svg:path>`,
})
export class FamiconsOpenOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsOpenSharpIcon],svg[famicons-open-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m201.37 288l176-176H48v352h352V134.63l-176 176z"></svg:path><svg:path fill="currentColor" d="M320 48v32h89.37l-32 32L400 134.63l32-32V192h32V48z"></svg:path>`,
})
export class FamiconsOpenSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsOptionsIcon],svg[famicons-options-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 144h226.75a48 48 0 0 0 90.5 0H448a16 16 0 0 0 0-32h-66.75a48 48 0 0 0-90.5 0H64a16 16 0 0 0 0 32m384 224h-66.75a48 48 0 0 0-90.5 0H64a16 16 0 0 0 0 32h226.75a48 48 0 0 0 90.5 0H448a16 16 0 0 0 0-32m0-128H221.25a48 48 0 0 0-90.5 0H64a16 16 0 0 0 0 32h66.75a48 48 0 0 0 90.5 0H448a16 16 0 0 0 0-32"></svg:path>`,
})
export class FamiconsOptionsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsOptionsOutlineIcon],svg[famicons-options-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 128h80m-384 0h240m64 256h80m-384 0h240m-96-128h240m-384 0h80"></svg:path><svg:circle cx="336" cy="128" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="176" cy="256" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="336" cy="384" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class FamiconsOptionsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsOptionsSharpIcon],svg[famicons-options-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M381.25 112a48 48 0 0 0-90.5 0H48v32h242.75a48 48 0 0 0 90.5 0H464v-32ZM176 208a48.09 48.09 0 0 0-45.25 32H48v32h82.75a48 48 0 0 0 90.5 0H464v-32H221.25A48.09 48.09 0 0 0 176 208m160 128a48.09 48.09 0 0 0-45.25 32H48v32h242.75a48 48 0 0 0 90.5 0H464v-32h-82.75A48.09 48.09 0 0 0 336 336"></svg:path>`,
})
export class FamiconsOptionsSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPaperPlaneIcon],svg[famicons-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M473 39.05a24 24 0 0 0-25.5-5.46L47.47 185h-.08a24 24 0 0 0 1 45.16l.41.13l137.3 58.63a16 16 0 0 0 15.54-3.59L422 80a7.07 7.07 0 0 1 10 10L226.66 310.26a16 16 0 0 0-3.59 15.54l58.65 137.38c.06.2.12.38.19.57c3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0 0 23-15.46L478.39 64.62A24 24 0 0 0 473 39.05"></svg:path>`,
})
export class FamiconsPaperPlaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPaperPlaneOutlineIcon],svg[famicons-paper-plane-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m53.12 199.94l400-151.39a8 8 0 0 1 10.33 10.33l-151.39 400a8 8 0 0 1-15-.34l-67.4-166.09a16 16 0 0 0-10.11-10.11L53.46 215a8 8 0 0 1-.34-15.06M460 52L227 285"></svg:path>`,
})
export class FamiconsPaperPlaneOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPaperPlaneSharpIcon],svg[famicons-paper-plane-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 16L15.88 208L195 289L448 64L223 317l81 179z"></svg:path>`,
})
export class FamiconsPaperPlaneSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPartlySunnyIcon],svg[famicons-partly-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-26.66 10.08-49.8 29.14-66.91c15.24-13.68 36.17-23.21 59-26.84c.06 0 .08 0 .09-.05c6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 0 1 232 160c30.23 0 58.48 9.39 81.71 27.17a142.24 142.24 0 0 1 42.19 53.21a16 16 0 0 0 11.19 9c26 5.61 48.4 17.29 65.17 34C453 304.11 464 331.71 464 363.2c0 32.85-13.13 62.87-37 84.52c-22.89 20.82-53.8 32.28-87 32.28m47.89-258.32a168.8 168.8 0 0 1 34.76 14.71a4 4 0 0 0 5.82-2.44a97 97 0 0 0 3.53-26.68c-.39-52.43-43.48-95.22-95.91-95.27A95.46 95.46 0 0 0 281 129.33h-.06a3.38 3.38 0 0 0 1 6a162.5 162.5 0 0 1 51.28 26.4a173.9 173.9 0 0 1 45.32 52.51a16 16 0 0 0 9.35 7.44M496 224h-32a16 16 0 0 1 0-32h32a16 16 0 0 1 0 32M336 96a16 16 0 0 1-16-16V48a16 16 0 0 1 32 0v32a16 16 0 0 1-16 16m-90.51 37.49a15.92 15.92 0 0 1-11.31-4.69l-22.63-22.62a16 16 0 0 1 22.63-22.63l22.62 22.63a16 16 0 0 1-11.31 27.31m181.02 0a16 16 0 0 1-11.31-27.31l22.62-22.63a16 16 0 0 1 22.63 22.63l-22.63 22.62a15.92 15.92 0 0 1-11.31 4.69"></svg:path>`,
})
export class FamiconsPartlySunnyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPartlySunnyOutlineIcon],svg[famicons-partly-sunny-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M90.61 306.85A16.07 16.07 0 0 0 104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0 0 12.2 9.87c50 8.15 91.6 41.54 91.6 99.59c0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2c0-48.47 38.67-72.22 74.61-77.95Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M384.8 271.4a80 80 0 1 0-123.55-92M464 208h32M336 48v32M222.86 94.86l22.63 22.63m203.65-22.63l-22.63 22.63"></svg:path>`,
})
export class FamiconsPartlySunnyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPartlySunnySharpIcon],svg[famicons-partly-sunny-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-26.66 10.08-49.8 29.14-66.91c15.24-13.68 36.17-23.21 59-26.84c.06 0 .08 0 .09-.05c6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 0 1 232 160c30.23 0 58.48 9.39 81.71 27.17a142.7 142.7 0 0 1 45.36 60.66c29.41 4.82 54.72 17.11 73.19 35.54C453 304.11 464 331.71 464 363.2c0 32.85-13.13 62.87-37 84.52c-22.89 20.82-53.8 32.28-87 32.28m41.5-260.11a169.2 169.2 0 0 1 45.44 19A96 96 0 0 0 281 129.33q-2.85 2-5.54 4.2a162.5 162.5 0 0 1 57.73 28.23a174.5 174.5 0 0 1 48.31 58.13M448 192h64v32h-64zM320 32h32v64h-32zm-64.65 97.63l12.45-12.45l-44.62-44.63l-22.63 22.63l33.17 33.17h.6a172 172 0 0 1 21.03 1.28m148.853-12.46l44.626-44.625l22.627 22.627l-44.625 44.626z"></svg:path>`,
})
export class FamiconsPartlySunnySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPauseIcon],svg[famicons-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 432h-48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v320a16 16 0 0 1-16 16m144 0h-48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v320a16 16 0 0 1-16 16"></svg:path>`,
})
export class FamiconsPauseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPauseCircleIcon],svg[famicons-pause-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-32 272a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0Zm96 0a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0Z"></svg:path>`,
})
export class FamiconsPauseCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPauseCircleOutlineIcon],svg[famicons-pause-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 192v128m96-128v128"></svg:path>`,
})
export class FamiconsPauseCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPauseCircleSharpIcon],svg[famicons-pause-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-32 288h-32V176h32Zm96 0h-32V176h32Z"></svg:path>`,
})
export class FamiconsPauseCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPauseOutlineIcon],svg[famicons-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 96h16v320h-16zm144 0h16v320h-16z"></svg:path>`,
})
export class FamiconsPauseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPauseSharpIcon],svg[famicons-pause-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 432h-80V80h80Zm144 0h-80V80h80Z"></svg:path>`,
})
export class FamiconsPauseSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPawIcon],svg[famicons-paw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M490.39 182.75c-5.55-13.19-14.77-22.7-26.67-27.49l-.16-.06a46.5 46.5 0 0 0-17-3.2h-.64c-27.24.41-55.05 23.56-69.19 57.61c-10.37 24.9-11.56 51.68-3.18 71.64c5.54 13.2 14.78 22.71 26.73 27.5l.13.05a46.5 46.5 0 0 0 17 3.2c27.5 0 55.6-23.15 70-57.65c10.24-24.87 11.37-51.63 2.98-71.6M381.55 329.61c-15.71-9.44-30.56-18.37-40.26-34.41C314.53 250.8 298.37 224 256 224s-58.57 26.8-85.39 71.2c-9.72 16.06-24.6 25-40.36 34.48c-18.07 10.86-36.74 22.08-44.8 44.16a66.9 66.9 0 0 0-4.65 25c0 35.95 28 65.2 62.4 65.2c17.75 0 36.64-6.15 56.63-12.66c19.22-6.26 39.09-12.73 56.27-12.73s37 6.47 56.15 12.73C332.2 457.85 351 464 368.8 464c34.35 0 62.3-29.25 62.3-65.2a67 67 0 0 0-4.75-25c-8.06-22.1-26.74-33.33-44.8-44.19M150 188.85c11.9 14.93 27 23.15 42.52 23.15a43 43 0 0 0 6.33-.47c32.37-4.76 52.54-44.26 45.92-90C242 102.3 234.6 84.39 224 71.11C212.12 56.21 197 48 181.49 48a43 43 0 0 0-6.33.47c-32.37 4.76-52.54 44.26-45.92 90c2.76 19.2 10.16 37.09 20.76 50.38m163.16 22.68a43 43 0 0 0 6.33.47c15.53 0 30.62-8.22 42.52-23.15c10.59-13.29 17.95-31.18 20.75-50.4c6.62-45.72-13.55-85.22-45.92-90a43 43 0 0 0-6.33-.47C315 48 299.88 56.21 288 71.11c-10.6 13.28-18 31.19-20.76 50.44c-6.62 45.72 13.55 85.22 45.92 89.98M111.59 308.8l.14-.05c11.93-4.79 21.16-14.29 26.69-27.48c8.38-20 7.2-46.75-3.15-71.65C120.94 175.16 92.85 152 65.38 152a46.4 46.4 0 0 0-17 3.2l-.14.05c-11.9 4.75-21.13 14.29-26.66 27.48c-8.38 20-7.2 46.75 3.15 71.65C39.06 288.84 67.15 312 94.62 312a46.4 46.4 0 0 0 16.97-3.2"></svg:path>`,
})
export class FamiconsPawIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPawOutlineIcon],svg[famicons-paw-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M457.74 170.1a30.3 30.3 0 0 0-11.16-2.1h-.4c-20.17.3-42.79 19.19-54.66 47.76c-14.23 34.18-7.68 69.15 14.74 78.14a30.2 30.2 0 0 0 11.15 2.1c20.27 0 43.2-19 55.17-47.76c14.13-34.18 7.48-69.15-14.84-78.14ZM327.6 303.48C299.8 257.35 287.8 240 256 240s-43.9 17.46-71.7 63.48c-23.8 39.36-71.9 42.64-83.9 76.07a50.9 50.9 0 0 0-3.6 19.25c0 27.19 20.8 49.2 46.4 49.2c31.8 0 75.1-25.39 112.9-25.39S337 448 368.8 448c25.6 0 46.3-22 46.3-49.2a51 51 0 0 0-3.7-19.25c-12-33.55-60-36.71-83.8-76.07ZM192.51 196a26.5 26.5 0 0 0 4-.3c23.21-3.37 37.7-35.53 32.44-71.85C224 89.61 203.22 64 181.49 64a26.5 26.5 0 0 0-4 .3c-23.21 3.37-37.7 35.53-32.44 71.85C150 170.29 170.78 196 192.51 196Zm174.41-59.85c5.26-36.32-9.23-68.48-32.44-71.85a26.5 26.5 0 0 0-4-.3c-21.73 0-42.47 25.61-47.43 59.85c-5.26 36.32 9.23 68.48 32.44 71.85a26.5 26.5 0 0 0 4 .3c21.73 0 42.51-25.71 47.43-59.85ZM105.77 293.9c22.39-9 28.93-44 14.72-78.14C108.53 187 85.62 168 65.38 168a30.2 30.2 0 0 0-11.15 2.1c-22.39 9-28.93 44-14.72 78.14C51.47 277 74.38 296 94.62 296a30.2 30.2 0 0 0 11.15-2.1Z"></svg:path>`,
})
export class FamiconsPawOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPawSharpIcon],svg[famicons-paw-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M442.8 361.82c-8.8-25.1-29.31-37.82-49.11-50.12c-17.23-10.71-33.5-20.83-44.14-39c-29.33-50.33-45.44-80.7-93.49-80.7s-64.21 30.38-93.61 80.69c-10.65 18.21-27 28.35-44.25 39.08c-19.8 12.31-40.27 25-49.1 50.05a78.1 78.1 0 0 0-5.1 28.29C64 430.85 96.45 464 132.4 464s83.31-18.13 123.76-18.13S343.31 464 379.71 464S448 430.85 448 390.11a78.3 78.3 0 0 0-5.2-28.29"></svg:path><svg:ellipse cx="72" cy="216" fill="currentColor" rx="56" ry="72"></svg:ellipse><svg:ellipse cx="184" cy="120" fill="currentColor" rx="56" ry="72"></svg:ellipse><svg:ellipse cx="328" cy="120" fill="currentColor" rx="56" ry="72"></svg:ellipse><svg:ellipse cx="440" cy="216" fill="currentColor" rx="56" ry="72"></svg:ellipse>`,
})
export class FamiconsPawSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPencilIcon],svg[famicons-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M358.62 129.28L86.49 402.08L70 442l39.92-16.49l272.8-272.13zm54.45-54.44l-11.79 11.78l24.1 24.1l11.79-11.79a16.51 16.51 0 0 0 0-23.34l-.75-.75a16.51 16.51 0 0 0-23.35 0"></svg:path>`,
})
export class FamiconsPencilIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPencilOutlineIcon],svg[famicons-pencil-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M364.13 125.25L87 403l-23 45l44.99-23l277.76-277.13zm56.56-56.56l-22.62 22.62l22.62 22.63l22.62-22.63a16 16 0 0 0 0-22.62h0a16 16 0 0 0-22.62 0"></svg:path>`,
})
export class FamiconsPencilOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPencilSharpIcon],svg[famicons-pencil-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M103 464H48v-55L358.14 98.09l55.77 55.78zm322.72-322L370 86.28l31.66-30.66C406.55 50.7 414.05 48 421 48a25.9 25.9 0 0 1 18.42 7.62l17 17A25.87 25.87 0 0 1 464 91c0 7-2.71 14.45-7.62 19.36Zm-7.52-70.83"></svg:path>`,
})
export class FamiconsPencilSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPeopleIcon],svg[famicons-people-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 256c-20.56 0-40.44-9.18-56-25.84c-15.13-16.25-24.37-37.92-26-61c-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52c15.47 16.62 23 39.22 21.26 63.63c-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256m131.83 176H204.18a27.71 27.71 0 0 1-22-10.67a30.22 30.22 0 0 1-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05c31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 0 1-5.32 25.78A27.68 27.68 0 0 1 467.83 432M147 260c-35.19 0-66.13-32.72-69-72.93c-1.42-20.6 5-39.65 18-53.62c12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52c-2.87 40.2-33.8 72.91-68.93 72.91m65.66 31.45c-17.59-8.6-40.42-12.9-65.65-12.9c-29.46 0-58.07 7.68-80.57 21.62c-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 0 0 4.79 23.36A25.32 25.32 0 0 0 41.72 400h111a8 8 0 0 0 7.87-6.57c.11-.63.25-1.26.41-1.88c8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 0 0-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89"></svg:path>`,
})
export class FamiconsPeopleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPeopleCircleIcon],svg[famicons-people-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48m-3.68 152.11c.21-1.2.44-2.4.71-3.59a66.46 66.46 0 0 1 16.29-31.21c12.89-13.73 31.16-21.31 51.45-21.31a74 74 0 0 1 25.06 4.26a66.7 66.7 0 0 1 26.27 17.2a68.15 68.15 0 0 1 18 42.14a78.5 78.5 0 0 1 0 11.4a86.2 86.2 0 0 1-8.2 31q-.76 1.59-1.59 3.15c-1.11 2.07-2.3 4.1-3.58 6.06a79.5 79.5 0 0 1-8.63 11c-13.12 14-29.92 21.73-47.31 21.73a59.6 59.6 0 0 1-19.17-3.18a64 64 0 0 1-6.1-2.43a70.8 70.8 0 0 1-22.07-16.12a83.76 83.76 0 0 1-22-51.32q-.27-3.88-.18-7.68a75.6 75.6 0 0 1 1.05-11.08Zm-149.73 24.34a59.9 59.9 0 0 1 5.2-20.64a57 57 0 0 1 2.78-5.3a54.5 54.5 0 0 1 7.19-9.56a55.6 55.6 0 0 1 14-10.82a57 57 0 0 1 8.11-3.64a63.85 63.85 0 0 1 33.35-2.39a57 57 0 0 1 30.78 17a57.86 57.86 0 0 1 15.41 38.62c.05 2.11 0 4.23-.15 6.38a71.6 71.6 0 0 1-6 23.84a69.5 69.5 0 0 1-5.73 10.42a65.4 65.4 0 0 1-15.76 16.57c-1.5 1.07-3.06 2.07-4.67 3.07a54.2 54.2 0 0 1-10 4.65a49.3 49.3 0 0 1-16.2 2.76c-.93 0-1.86 0-2.78-.08a48 48 0 0 1-5.48-.62a51 51 0 0 1-5.35-1.23a53.5 53.5 0 0 1-7.72-2.89c-.84-.39-1.66-.8-2.48-1.23c-18-9.49-31.57-29.16-34.23-52.12c-.12-1.05-.22-2.1-.29-3.16a66.6 66.6 0 0 1 .02-9.63m53.92 178.6a177.27 177.27 0 0 1-61.94-70.65a4 4 0 0 1 1.62-5.26C117.67 316.69 141.4 311 163.82 311c17 0 30.7 2 42.69 5.88a8 8 0 0 1 2.59 13.77c-23.35 19-38.4 42.54-45.47 70.75a2.77 2.77 0 0 1-4.22 1.65M256 432a175.1 175.1 0 0 1-65.7-12.72a4 4 0 0 1-2.4-4.46c.4-2.05.84-3.92 1.23-5.48c7.12-28.43 24.76-52 51-68.18c23.29-14.35 53-22.25 83.52-22.25c31.16 0 60 7.58 83.48 21.91a2.72 2.72 0 0 1 .91 3.67A176.1 176.1 0 0 1 256 432"></svg:path><svg:path fill="currentColor" d="M161 295.28a48 48 0 0 1-5.48-.62a48 48 0 0 0 5.48.62m-26.36-117.15a55.6 55.6 0 0 0-14 10.82a54.5 54.5 0 0 0-7.19 9.56a54.5 54.5 0 0 1 7.19-9.56a55.6 55.6 0 0 1 14-10.82m81.53 79.76a71.6 71.6 0 0 0 6-23.84c.15-2.15.2-4.27.15-6.38q.08 3.15-.15 6.38a71.6 71.6 0 0 1-6 23.84m-81.53-79.76a57 57 0 0 1 8.11-3.64a57 57 0 0 0-8.11 3.64m15.57 115.3a53.5 53.5 0 0 1-7.72-2.89a53.5 53.5 0 0 0 7.72 2.89m-44.43-56.24c2.66 23 16.26 42.63 34.23 52.12c-18.01-9.49-31.57-29.16-34.23-52.12M254.34 219a83.76 83.76 0 0 0 22 51.32a70.8 70.8 0 0 0 22.07 16.12a70.8 70.8 0 0 1-22.07-16.12a83.76 83.76 0 0 1-22-51.32q-.27-3.88-.18-7.68q-.09 3.75.18 7.68m50.16 69.82a64 64 0 0 1-6.1-2.43a64 64 0 0 0 6.1 2.43m-48.57-92.28a66.46 66.46 0 0 1 16.29-31.21a66.46 66.46 0 0 0-16.29 31.21M375 165.46a68.15 68.15 0 0 1 18 42.14a68.15 68.15 0 0 0-18-42.14a66.7 66.7 0 0 0-26.27-17.2a66.7 66.7 0 0 1 26.27 17.2M393 219a86.2 86.2 0 0 1-8.2 31a86.2 86.2 0 0 0 8.2-31m-138.84-7.73a75.6 75.6 0 0 1 1.06-11.14a75.6 75.6 0 0 0-1.06 11.14m-47.28-22.22a57.86 57.86 0 0 1 15.41 38.62a57.86 57.86 0 0 0-15.41-38.62a57 57 0 0 0-30.78-17a57 57 0 0 1 30.78 17M190 288a54.2 54.2 0 0 1-10 4.65a54.2 54.2 0 0 0 10-4.65m-84.51-63.55a59.9 59.9 0 0 1 5.2-20.64a59.9 59.9 0 0 0-5.2 20.64m89.19 60.43C193.17 286 191.61 287 190 288c1.61-1 3.17-2 4.68-3.12m21.49-26.99a69.5 69.5 0 0 1-5.73 10.42a69.5 69.5 0 0 0 5.73-10.42m-105.48-54.08a57 57 0 0 1 2.78-5.3a57 57 0 0 0-2.78 5.3m83.99 81.07a65.4 65.4 0 0 0 15.76-16.57a65.4 65.4 0 0 1-15.76 16.57"></svg:path>`,
})
export class FamiconsPeopleCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPeopleCircleOutlineIcon],svg[famicons-people-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208s-93.31 208-208 208m0-384c-97 0-176 79-176 176s79 176 176 176s176-78.95 176-176S353.05 80 256 80"></svg:path><svg:path fill="currentColor" d="M323.67 292c-17.4 0-34.21-7.72-47.34-21.73a83.76 83.76 0 0 1-22-51.32c-1.47-20.7 4.88-39.75 17.88-53.62S303.38 144 323.67 144c20.14 0 38.37 7.62 51.33 21.46s19.47 33 18 53.51a84 84 0 0 1-22 51.3C357.86 284.28 341.06 292 323.67 292m-159.85 3.36c-29.76 0-55.93-27.51-58.33-61.33c-1.23-17.32 4.15-33.33 15.17-45.08s26.22-18 43.15-18s32.12 6.44 43.07 18.14s16.5 27.82 15.25 45c-2.44 33.77-28.6 61.27-58.31 61.27m256.55 59.92c-1.59-4.7-5.46-9.71-13.22-14.46c-23.46-14.33-52.32-21.91-83.48-21.91c-30.57 0-60.23 7.9-83.53 22.25c-26.25 16.17-43.89 39.75-51 68.18c-1.68 6.69-4.13 19.14-1.51 26.11a192.18 192.18 0 0 0 232.75-80.17Zm-256.74 46.09c7.07-28.21 22.12-51.73 45.47-70.75a8 8 0 0 0-2.59-13.77c-12-3.83-25.7-5.88-42.69-5.88c-23.82 0-49.11 6.45-68.14 18.17c-5.4 3.33-10.7 4.61-14.78 5.75a192.84 192.84 0 0 0 77.78 86.64l1.79-.14a103 103 0 0 1 3.16-20.02"></svg:path>`,
})
export class FamiconsPeopleCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPeopleCircleSharpIcon],svg[famicons-people-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m69.3 96.17a72.5 72.5 0 1 1-72.6 72.5a72.55 72.55 0 0 1 72.6-72.5m-155.1 26.36a59.32 59.32 0 1 1-59.4 59.32a59.35 59.35 0 0 1 59.4-59.32m-75.85 155c24.5-13.29 55.87-19.94 75.85-19.94c15 0 34.32 3 53.33 10.2a133 133 0 0 0-34 27.11c-13.19 15-20.76 32.92-20.76 50.83v15a177.06 177.06 0 0 1-74.42-83.15ZM256 432a175.1 175.1 0 0 1-59.4-10.33v-27.05c0-52.59 85.75-79.09 128.7-79.09c23 0 58.38 7.63 86.21 22.81A176.14 176.14 0 0 1 256 432"></svg:path>`,
})
export class FamiconsPeopleCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPeopleOutlineIcon],svg[famicons-people-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M336 304c-65.17 0-127.84 32.37-143.54 95.41c-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M206 306c-18.05-8.27-37.93-11.45-59-11.45c-52 0-102.1 25.85-114.65 76.2c-1.65 6.66 2.53 13.25 9.37 13.25H154"></svg:path>`,
})
export class FamiconsPeopleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPeopleSharpIcon],svg[famicons-people-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="152" cy="184" r="72" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M234 296c-28.16-14.3-59.24-20-82-20c-44.58 0-136 27.34-136 82v42h150v-16.07c0-19 8-38.05 22-53.93c11.17-12.68 26.81-24.45 46-34"></svg:path><svg:path fill="currentColor" d="M340 288c-52.07 0-156 32.16-156 96v48h312v-48c0-63.84-103.93-96-156-96"></svg:path><svg:circle cx="340" cy="168" r="88" fill="currentColor"></svg:circle>`,
})
export class FamiconsPeopleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPersonIcon],svg[famicons-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38c-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6M432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75c1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480"></svg:path>`,
})
export class FamiconsPersonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPersonAddIcon],svg[famicons-person-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 256c52.79 0 99.43-49.71 104-110.82c2.27-30.7-7.36-59.33-27.12-80.6C345.33 43.57 318 32 288 32c-30.24 0-57.59 11.5-77 32.38c-19.63 21.11-29.2 49.8-27 80.78C188.49 206.28 235.12 256 288 256m207.38 183.76c-8.44-46.82-34.79-86.15-76.19-113.75C382.42 301.5 335.83 288 288 288s-94.42 13.5-131.19 38c-41.4 27.6-67.75 66.93-76.19 113.75c-1.93 10.73.69 21.34 7.19 29.11A30.94 30.94 0 0 0 112 480h352a30.94 30.94 0 0 0 24.21-11.13c6.48-7.77 9.1-18.38 7.17-29.11M104 288v-40h40a16 16 0 0 0 0-32h-40v-40a16 16 0 0 0-32 0v40H32a16 16 0 0 0 0 32h40v40a16 16 0 0 0 32 0"></svg:path>`,
})
export class FamiconsPersonAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPersonAddOutlineIcon],svg[famicons-person-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M288 304c-87 0-175.3 48-191.64 138.6c-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M88 176v112m56-56H32"></svg:path>`,
})
export class FamiconsPersonAddOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPersonAddSharpIcon],svg[famicons-person-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106 304v-54h54v-36h-54v-54H70v54H16v36h54v54z"></svg:path><svg:circle cx="288" cy="144" r="112" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128"></svg:path>`,
})
export class FamiconsPersonAddSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPersonCircleIcon],svg[famicons-person-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-50.22 116.82C218.45 151.39 236.28 144 256 144s37.39 7.44 50.11 20.94c12.89 13.68 19.16 32.06 17.68 51.82C320.83 256 290.43 288 256 288s-64.89-32-67.79-71.25c-1.47-19.92 4.79-38.36 17.57-51.93M256 432a175.5 175.5 0 0 1-126-53.22a122.9 122.9 0 0 1 35.14-33.44C190.63 329 222.89 320 256 320s65.37 9 90.83 25.34A122.9 122.9 0 0 1 382 378.78A175.45 175.45 0 0 1 256 432"></svg:path>`,
})
export class FamiconsPersonCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPersonCircleOutlineIcon],svg[famicons-person-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48m126.42 327.25a4 4 0 0 1-6.14-.32a124.3 124.3 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.2 124.2 0 0 0-32.35 29.58a4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25"></svg:path><svg:path fill="currentColor" d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144"></svg:path>`,
})
export class FamiconsPersonCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPersonCircleSharpIcon],svg[famicons-person-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m2 96a72 72 0 1 1-72 72a72 72 0 0 1 72-72m-2 288a175.55 175.55 0 0 1-129.18-56.6C135.66 329.62 215.06 320 256 320s120.34 9.62 129.18 55.39A175.52 175.52 0 0 1 256 432"></svg:path>`,
})
export class FamiconsPersonCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPersonOutlineIcon],svg[famicons-person-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304Z"></svg:path>`,
})
export class FamiconsPersonOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPersonRemoveIcon],svg[famicons-person-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 256c52.79 0 99.43-49.71 104-110.82c2.27-30.7-7.36-59.33-27.12-80.6C345.33 43.57 318 32 288 32c-30.24 0-57.59 11.5-77 32.38c-19.63 21.11-29.2 49.8-27 80.78C188.49 206.28 235.12 256 288 256m207.38 183.76c-8.44-46.82-34.79-86.15-76.19-113.75C382.42 301.5 335.83 288 288 288s-94.42 13.5-131.19 38c-41.4 27.6-67.75 66.93-76.19 113.75c-1.93 10.73.69 21.34 7.19 29.11A30.94 30.94 0 0 0 112 480h352a30.94 30.94 0 0 0 24.21-11.13c6.48-7.77 9.1-18.38 7.17-29.11M144 216H32a16 16 0 0 0 0 32h112a16 16 0 0 0 0-32"></svg:path>`,
})
export class FamiconsPersonRemoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPersonRemoveOutlineIcon],svg[famicons-person-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M288 304c-87 0-175.3 48-191.64 138.6c-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 232H32"></svg:path>`,
})
export class FamiconsPersonRemoveOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPersonRemoveSharpIcon],svg[famicons-person-remove-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 214h144v36H16z"></svg:path><svg:circle cx="288" cy="144" r="112" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128"></svg:path>`,
})
export class FamiconsPersonRemoveSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPersonSharpIcon],svg[famicons-person-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 256a112 112 0 1 0-112-112a112 112 0 0 0 112 112m0 32c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128"></svg:path>`,
})
export class FamiconsPersonSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPhoneLandscapeIcon],svg[famicons-phone-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="famiconsPhoneLandscape0" fill="currentColor" d="M0 176v160a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V176a64 64 0 0 0-64-64H64a64 64 0 0 0-64 64m448-32a32 32 0 0 1 32 32v160a32 32 0 0 1-32 32H64a32 32 0 0 1-32-32v-11.35a7.94 7.94 0 0 1 4.75-7.3A32 32 0 0 0 56 288v-64a32 32 0 0 0-19.25-29.35a7.94 7.94 0 0 1-4.75-7.3V176a32 32 0 0 1 32-32Z"></svg:path></svg:defs><svg:use href="#famiconsPhoneLandscape0"></svg:use><svg:path fill="currentColor" d="M48 176a11.88 11.88 0 0 0 4.69 9.53A48 48 0 0 1 72 224v64a48 48 0 0 1-19.31 38.47A11.88 11.88 0 0 0 48 336a16 16 0 0 0 16 16h384a16 16 0 0 0 16-16V176a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16"></svg:path><svg:use href="#famiconsPhoneLandscape0"></svg:use>`,
})
export class FamiconsPhoneLandscapeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPhoneLandscapeOutlineIcon],svg[famicons-phone-landscape-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="256" height="480" x="128" y="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="48" ry="48" transform="rotate(-90 256 256)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M16 336v-24a8 8 0 0 1 8-8h0a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16h0a8 8 0 0 1-8-8v-24"></svg:path>`,
})
export class FamiconsPhoneLandscapeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPhoneLandscapeSharpIcon],svg[famicons-phone-landscape-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 130v252a18 18 0 0 0 18 18h476a18 18 0 0 0 18-18V130a18 18 0 0 0-18-18H18a18 18 0 0 0-18 18m448 234H64V148h384Z"></svg:path>`,
})
export class FamiconsPhoneLandscapeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPhonePortraitIcon],svg[famicons-phone-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="famiconsPhonePortrait0" fill="currentColor" d="M336 0H176a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h160a64 64 0 0 0 64-64V64a64 64 0 0 0-64-64m32 448a32 32 0 0 1-32 32H176a32 32 0 0 1-32-32V64a32 32 0 0 1 32-32h11.35a7.94 7.94 0 0 1 7.3 4.75A32 32 0 0 0 224 56h64a32 32 0 0 0 29.35-19.25a7.94 7.94 0 0 1 7.3-4.75H336a32 32 0 0 1 32 32Z"></svg:path></svg:defs><svg:use href="#famiconsPhonePortrait0"></svg:use><svg:path fill="currentColor" d="M336 48a11.88 11.88 0 0 0-9.53 4.69A48 48 0 0 1 288 72h-64a48 48 0 0 1-38.47-19.31A11.88 11.88 0 0 0 176 48a16 16 0 0 0-16 16v384a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16"></svg:path><svg:use href="#famiconsPhonePortrait0"></svg:use>`,
})
export class FamiconsPhonePortraitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPhonePortraitOutlineIcon],svg[famicons-phone-portrait-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="256" height="480" x="128" y="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 16h24a8 8 0 0 1 8 8h0a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16h0a8 8 0 0 1 8-8h24"></svg:path>`,
})
export class FamiconsPhonePortraitOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPhonePortraitSharpIcon],svg[famicons-phone-portrait-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M382 0H130a18 18 0 0 0-18 18v476a18 18 0 0 0 18 18h252a18 18 0 0 0 18-18V18a18 18 0 0 0-18-18M148 448V64h216v384Z"></svg:path>`,
})
export class FamiconsPhonePortraitSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPieChartIcon],svg[famicons-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M66.1 357a16 16 0 0 1-14.61-9.46A224 224 0 0 1 256 32a16 16 0 0 1 16 16v208a16 16 0 0 1-9.47 14.61l-189.9 84.95A15.9 15.9 0 0 1 66.1 357"></svg:path><svg:path fill="currentColor" d="M313.59 68.18A8 8 0 0 0 304 76v180a48.07 48.07 0 0 1-28.4 43.82L103.13 377a8 8 0 0 0-3.35 11.81a208.4 208.4 0 0 0 48.46 50.41A206.32 206.32 0 0 0 272 480c114.69 0 208-93.31 208-208c0-100.45-71.58-184.5-166.41-203.82"></svg:path>`,
})
export class FamiconsPieChartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPieChartOutlineIcon],svg[famicons-pie-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256.05 80.65Q263.94 80 272 80c106 0 192 86 192 192s-86 192-192 192A192.09 192.09 0 0 1 89.12 330.65"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48C141.12 48 48 141.12 48 256a207.3 207.3 0 0 0 18.09 85L256 256Z"></svg:path>`,
})
export class FamiconsPieChartOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPieChartSharpIcon],svg[famicons-pie-chart-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m58 362.09l-6.51-14.59A224 224 0 0 1 256 32h16v234.37Z"></svg:path><svg:path fill="currentColor" d="M304 66.46v220.65L94.62 380.78A208.31 208.31 0 0 0 272 480c114.69 0 208-93.31 208-208c0-103.81-76.45-190.1-176-205.54"></svg:path>`,
})
export class FamiconsPieChartSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPinIcon],svg[famicons-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 96a80 80 0 1 0-96 78.39v283.17a32.1 32.1 0 0 0 2.49 12.38l10.07 24a3.92 3.92 0 0 0 6.88 0l10.07-24a32.1 32.1 0 0 0 2.49-12.38V174.39A80.13 80.13 0 0 0 336 96m-56 0a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class FamiconsPinIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPinOutlineIcon],svg[famicons-pin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="96" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="currentColor" d="M272 164a9 9 0 0 0-9-9h-14a9 9 0 0 0-9 9v293.56a32.1 32.1 0 0 0 2.49 12.38l10.07 24a3.92 3.92 0 0 0 6.88 0l10.07-24a32.1 32.1 0 0 0 2.49-12.38Z"></svg:path><svg:circle cx="280" cy="72" r="24" fill="currentColor"></svg:circle>`,
})
export class FamiconsPinOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPinSharpIcon],svg[famicons-pin-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M339 99a83 83 0 1 0-102 80.8V464l19 32l19-32V179.8A83.28 83.28 0 0 0 339 99m-59-6a21 21 0 1 1 21-21a21 21 0 0 1-21 21"></svg:path>`,
})
export class FamiconsPinSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPintIcon],svg[famicons-pint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M399 99.29c-.15-2.13-.3-4.35-.44-6.68L395.69 46a32 32 0 0 0-31.91-30H148.21a32 32 0 0 0-31.91 30l-2.91 46.63c-.14 2.31-.29 4.51-.43 6.62c-1.29 19.24-2.23 33.14 3.73 65.66c1.67 9.11 5.22 22.66 9.73 39.82c12.61 48 33.71 128.36 33.71 195.63V472a24 24 0 0 0 24 24h143.74a24 24 0 0 0 24-24v-71.62c0-77.09 21.31-153.29 34-198.81c4.38-15.63 7.83-28 9.41-36.62c5.99-32.51 5.05-46.42 3.72-65.66m-35-47.54l1.5 24a4 4 0 0 1-4 4.25h-211a4 4 0 0 1-4-4.25l1.48-24A4 4 0 0 1 152 48h208a4 4 0 0 1 4 3.75"></svg:path>`,
})
export class FamiconsPintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPintOutlineIcon],svg[famicons-pint-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M132.43 162c-6.24-34-4.49-45.55-3.07-68.39L132.27 47a16 16 0 0 1 15.94-15h215.57a16 16 0 0 1 15.94 15l2.91 46.61c1.43 22.86 3.19 34.39-3.06 68.45c-5.93 32.29-43.71 133.27-43.71 238.32V472a8 8 0 0 1-8 8H184.12a8 8 0 0 1-8-8v-71.63c.01-92.47-37.46-204.3-43.69-238.37m2.78-66h241.58"></svg:path>`,
})
export class FamiconsPintOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPintSharpIcon],svg[famicons-pint-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M399 99.29L394 16H118.45L113 99.26c-1.29 19.24-2.23 33.14 3.73 65.66c1.67 9.11 5.22 22.66 9.73 39.82c12.61 48 33.71 128.36 33.71 195.63V496h191.68v-95.62c0-77.09 21.31-153.29 34-198.81c4.38-15.63 7.83-28 9.41-36.62c6.01-32.51 5.07-46.42 3.74-65.66M146.23 80l2-32h215.52l2 32Z"></svg:path>`,
})
export class FamiconsPintSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPizzaIcon],svg[famicons-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M441.82 67.83C383.44 44.73 317.3 32 255.56 32C192 32 125.76 44.53 69 67.26C48.7 75.49 45.21 90 48.71 100.82L52.78 111a16 16 0 0 0 21.31 8.69c10.8-4.76 23.93-10.54 27-11.78C145.1 89.64 198.71 80 256 80c57.47 0 108.09 9.24 154.76 28.25c4.42 1.8 14.88 6.42 26.17 11.46a16 16 0 0 0 21.35-8.59L462 102l.34-.9c3.45-10.21.14-25.05-20.52-33.27"></svg:path><svg:path fill="currentColor" d="M409.18 140.86C363.67 122.53 307.68 112 255.56 112a425 425 0 0 0-153.74 28.89c-.53.21-2.06.88-4.29 1.88a16 16 0 0 0-8 21.27c4 8.71 9.42 20.58 15.5 33.89C137.94 270 199.21 404 227.26 462A31.74 31.74 0 0 0 256 480a31.73 31.73 0 0 0 28.76-18.06l.06-.13l137.3-297.57a15.94 15.94 0 0 0-8.31-21.45c-2.26-.95-3.85-1.61-4.5-1.87Zm-215.1 83.07a32 32 0 1 1 29.85-29.85a32 32 0 0 1-29.85 29.85m64 128a32 32 0 1 1 29.85-29.85a32 32 0 0 1-29.85 29.85m64-112a32 32 0 1 1 29.85-29.85a32 32 0 0 1-29.85 29.85"></svg:path>`,
})
export class FamiconsPizzaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPizzaOutlineIcon],svg[famicons-pizza-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M404.76 123.08C358.37 104.18 309.69 96 256 96s-106.1 9-148.9 26.68c-8.08 3.3-15.26 9-10.07 19.5C101.24 150.71 203 375 241.66 455a15.94 15.94 0 0 0 28.72 0l144.05-312.22c3.19-6.9.9-15.4-9.67-19.7Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M436.38 82.68C384.31 62.08 320.17 48 256 48S128.65 60.78 75.48 82.08C70.79 84 62 88.43 64.41 95.88L74.09 120c4 8.2 8.67 8.2 15.06 8.2c1.79 0 4.29-1 7.28-2.18A442.5 442.5 0 0 1 256 96c56.76 0 114.91 12 159.6 30c3.59 1.4 5.59 2.18 7.28 2.18c6.58 0 10.38 2.19 15-8.1L447.65 96c2.01-6-4.99-10.82-11.27-13.32Z"></svg:path><svg:circle cx="192" cy="192" r="32" fill="currentColor"></svg:circle><svg:circle cx="320" cy="208" r="32" fill="currentColor"></svg:circle><svg:circle cx="256" cy="320" r="32" fill="currentColor"></svg:circle>`,
})
export class FamiconsPizzaOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPizzaSharpIcon],svg[famicons-pizza-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M442.3 67.82C383.92 44.72 317.78 32 256 32c-63.57 0-129.8 12.51-186.56 35.25C49.18 75.48 42 80 42 80l22 44l37.53-16.14C147.58 89.53 199.19 80 256.51 80c57.49 0 108.09 9.23 154.75 28.25L448 124l22-44s-7-4-27.7-12.18"></svg:path><svg:ellipse cx="320.48" cy="207.99" fill="none" rx="31.97" ry="32.03" transform="rotate(-44.98 320.503 207.996)"></svg:ellipse><svg:ellipse cx="192.48" cy="191.99" fill="none" rx="31.97" ry="32.03" transform="rotate(-44.98 192.49 191.992)"></svg:ellipse><svg:ellipse cx="256.48" cy="319.99" fill="none" rx="31.97" ry="32.03" transform="rotate(-44.98 256.505 320)"></svg:ellipse><svg:path fill="currentColor" d="M409.66 140.85C364.15 122.52 308.16 112 256 112a425 425 0 0 0-153.7 28.9c-.25.1-9.24 4.23-19 8.71c7.46 16.22 18 39.16 22.2 48.33L256 480l173.74-330.84l-19.92-8.24Zm-185.25 53.22a32 32 0 1 1-34-34a32.12 32.12 0 0 1 34 34m64 128a32 32 0 1 1-34-34a32.12 32.12 0 0 1 34 34m64-112a32 32 0 1 1-34-34a32.12 32.12 0 0 1 34 34"></svg:path>`,
})
export class FamiconsPizzaSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlanetIcon],svg[famicons-planet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96.85 286.62a8 8 0 0 0-12.53 8.25C102.07 373.28 172.3 432 256 432a175.3 175.3 0 0 0 52.41-8a8 8 0 0 0 .79-15a1120 1120 0 0 1-109.48-55.61a1126 1126 0 0 1-102.87-66.77m395.87 52.89c-4.19-5.58-9.11-11.44-14.7-17.53a15.83 15.83 0 0 0-26.56 5.13c0 .16-.11.31-.17.47a15.75 15.75 0 0 0 3.15 16.06c22.74 25 26.42 38.51 25.48 41.36c-2 2.23-17.05 6.89-58.15-3.53q-8.83-2.24-19.32-5.46q-6.76-2.08-13.79-4.49a177 177 0 0 0 19.54-27.25c.17-.29.35-.58.52-.88A175.4 175.4 0 0 0 432 256a179 179 0 0 0-1-19c-9.57-88.17-84.4-157-175-157a175.37 175.37 0 0 0-106.4 35.89a177.4 177.4 0 0 0-45.83 51.84c-.16.29-.34.58-.51.87a175.5 175.5 0 0 0-13.83 30.52q-5.59-4.87-10.79-9.67c-5.39-5-10.17-9.63-14.42-14c-29.57-30.26-33.09-45.61-32.16-48.45c2-2.23 15.54-5.87 48.62 1.31A15.82 15.82 0 0 0 96.22 123l.36-.44a15.74 15.74 0 0 0-8.67-25.43A237 237 0 0 0 64.13 93c-30.72-3.53-50.83 2.52-59.78 18c-3.24 5.58-6.35 15.09-2.72 28.6C7 159.66 26.14 184 53.23 209.5c8.63 8.13 18.06 16.37 28.12 24.64c7.32 6 15 12.06 22.9 18.08q7.91 6 16.15 12T137.1 276c25.41 17.61 52.26 34.52 78.59 49.69q14.34 8.26 28.64 16t28.37 14.81c21.9 11 43.35 20.92 63.86 29.43q13.19 5.48 25.81 10.16c11.89 4.42 23.37 8.31 34.31 11.59l1.1.33c25.73 7.66 47.42 11.69 64.48 12H464c21.64 0 36.3-6.38 43.58-19c9.09-15.62 4.08-36.32-14.86-61.5"></svg:path>`,
})
export class FamiconsPlanetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlanetOutlineIcon],svg[famicons-planet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M413.48 284.46c58.87 47.24 91.61 89 80.31 108.55c-17.85 30.85-138.78-5.48-270.1-81.15S.37 149.84 18.21 119c11.16-19.28 62.58-12.32 131.64 14.09"></svg:path><svg:circle cx="256" cy="256" r="160" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class FamiconsPlanetOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlanetSharpIcon],svg[famicons-planet-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M81 274.71C90.36 363 165.26 432 256 432a174.9 174.9 0 0 0 71.49-15.19c-40.3-16.53-84.05-38.17-127.77-63.36C157 328.86 115.84 301.5 81 274.71m411.72 64.8c-8.5-11.31-20-23.8-34-37a205 205 0 0 1-11 34c28.72 29.5 33.2 45.34 32.17 48.45c-2 2.23-17.05 6.89-58.15-3.53q-8.83-2.24-19.32-5.46q-6.76-2.08-13.79-4.49a177 177 0 0 0 19.54-27.25c.17-.29.35-.58.52-.88A175.4 175.4 0 0 0 432 256a179 179 0 0 0-1-19c-9.57-88.17-84.4-157-175-157a175.37 175.37 0 0 0-106.4 35.89a177.4 177.4 0 0 0-45.83 51.84c-.16.29-.34.58-.51.87a175.5 175.5 0 0 0-13.83 30.52q-5.59-4.87-10.79-9.67c-5.39-5-10.17-9.63-14.42-14c-29.57-30.26-33.09-45.61-32.16-48.45c2.16-2.43 18.1-6.54 58.13 3.55a210 210 0 0 1 24-26.56c-18.86-5.61-35.79-9.35-50.05-11C33.41 89.47 13.3 95.52 4.35 111c-3.24 5.58-6.35 15.09-2.72 28.6C7 159.66 26.14 184 53.23 209.5c8.63 8.13 18.06 16.37 28.12 24.64c7.32 6 15 12.06 22.9 18.08q7.91 6 16.15 12T137.1 276c25.41 17.61 52.26 34.52 78.59 49.69q14.34 8.26 28.64 16t28.37 14.81c21.9 11 43.35 20.92 63.86 29.43q13.19 5.48 25.81 10.16c11.89 4.42 23.37 8.31 34.31 11.59l1.1.33c25.73 7.66 47.42 11.69 64.48 12H464c21.64 0 36.3-6.38 43.58-19c9.09-15.62 4.08-36.32-14.86-61.5"></svg:path>`,
})
export class FamiconsPlanetSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlayIcon],svg[famicons-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"></svg:path>`,
})
export class FamiconsPlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlayBackIcon],svg[famicons-play-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30.71 229.47l188.87-113a30.54 30.54 0 0 1 31.09-.39a33.74 33.74 0 0 1 16.76 29.47v79.05l180.72-108.16a30.54 30.54 0 0 1 31.09-.39A33.74 33.74 0 0 1 496 145.52v221A33.73 33.73 0 0 1 479.24 396a30.54 30.54 0 0 1-31.09-.39L267.43 287.4v79.08A33.73 33.73 0 0 1 250.67 396a30.54 30.54 0 0 1-31.09-.39l-188.87-113a31.27 31.27 0 0 1 0-53Z"></svg:path>`,
})
export class FamiconsPlayBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlayBackCircleIcon],svg[famicons-play-back-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48S48 141.31 48 256m69.23-9.3l114.45-69.14a10.78 10.78 0 0 1 16.32 9.31v53.32l103.68-62.63a10.78 10.78 0 0 1 16.32 9.31v138.26a10.78 10.78 0 0 1-16.32 9.31L248 271.81v53.32a10.78 10.78 0 0 1-16.32 9.31L117.23 265.3a10.89 10.89 0 0 1 0-18.6"></svg:path>`,
})
export class FamiconsPlayBackCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlayBackCircleOutlineIcon],svg[famicons-play-back-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 448c106 0 192-86 192-192S362 64 256 64S64 150 64 256s86 192 192 192Z"></svg:path><svg:path fill="currentColor" d="m117.23 246.7l114.45-69.14a10.78 10.78 0 0 1 16.32 9.31v53.32l103.68-62.63a10.78 10.78 0 0 1 16.32 9.31v138.26a10.78 10.78 0 0 1-16.32 9.31L248 271.81v53.32a10.78 10.78 0 0 1-16.32 9.31L117.23 265.3a10.89 10.89 0 0 1 0-18.6"></svg:path>`,
})
export class FamiconsPlayBackCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlayBackCircleSharpIcon],svg[famicons-play-back-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48S48 141.31 48 256m63.47 0L248 168v72.16l120-72.48v176.45l-120-72.32v71.44Z"></svg:path>`,
})
export class FamiconsPlayBackCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlayBackOutlineIcon],svg[famicons-play-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M480 145.52v221c0 13.28-13 21.72-23.63 15.35L267.5 268.8c-9.24-5.53-9.24-20.07 0-25.6l188.87-113C467 123.8 480 132.24 480 145.52Zm-228.57 0v221c0 13.28-13 21.72-23.63 15.35L38.93 268.8c-9.24-5.53-9.24-20.07 0-25.6l188.87-113c10.64-6.4 23.63 2.04 23.63 15.32Z"></svg:path>`,
})
export class FamiconsPlayBackOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlayBackSharpIcon],svg[famicons-play-back-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 400L256 256l240-144zm-240 0L16 256l240-144z"></svg:path>`,
})
export class FamiconsPlayBackSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlayCircleIcon],svg[famicons-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m74.77 217.3l-114.45 69.14a10.78 10.78 0 0 1-16.32-9.31V186.87a10.78 10.78 0 0 1 16.32-9.31l114.45 69.14a10.89 10.89 0 0 1 0 18.6"></svg:path>`,
})
export class FamiconsPlayCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlayCircleOutlineIcon],svg[famicons-play-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="m216.32 334.44l114.45-69.14a10.89 10.89 0 0 0 0-18.6l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31"></svg:path>`,
})
export class FamiconsPlayCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlayCircleSharpIcon],svg[famicons-play-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-56 296V168l144 88Z"></svg:path>`,
})
export class FamiconsPlayCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlayForwardIcon],svg[famicons-play-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m481.29 229.47l-188.87-113a30.54 30.54 0 0 0-31.09-.39a33.74 33.74 0 0 0-16.76 29.47v79.05L63.85 116.44a30.54 30.54 0 0 0-31.09-.39A33.74 33.74 0 0 0 16 145.52v221A33.74 33.74 0 0 0 32.76 396a30.54 30.54 0 0 0 31.09-.39L244.57 287.4v79.08A33.74 33.74 0 0 0 261.33 396a30.54 30.54 0 0 0 31.09-.39l188.87-113a31.27 31.27 0 0 0 0-53Z"></svg:path>`,
})
export class FamiconsPlayForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlayForwardCircleIcon],svg[famicons-play-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m138.77 217.3l-114.45 69.14a10.78 10.78 0 0 1-16.32-9.31v-53.32l-103.68 62.63a10.78 10.78 0 0 1-16.32-9.31V186.87a10.78 10.78 0 0 1 16.32-9.31L264 240.19v-53.32a10.78 10.78 0 0 1 16.32-9.31l114.45 69.14a10.89 10.89 0 0 1 0 18.6"></svg:path>`,
})
export class FamiconsPlayForwardCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlayForwardCircleOutlineIcon],svg[famicons-play-forward-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="m394.77 246.7l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v53.32l-103.68-62.63a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31L264 271.81v53.32a10.78 10.78 0 0 0 16.32 9.31l114.45-69.14a10.89 10.89 0 0 0 0-18.6"></svg:path>`,
})
export class FamiconsPlayForwardCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlayForwardCircleSharpIcon],svg[famicons-play-forward-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m8 295.25v-71.44l-120 72.32V167.71l120 72.48V168l136.53 88Z"></svg:path>`,
})
export class FamiconsPlayForwardCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlayForwardOutlineIcon],svg[famicons-play-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M32 145.52v221c0 13.28 13 21.72 23.63 15.35l188.87-113c9.24-5.53 9.24-20.07 0-25.6l-188.87-113C45 123.8 32 132.24 32 145.52Zm228.57 0v221c0 13.28 13 21.72 23.63 15.35l188.87-113c9.24-5.53 9.24-20.07 0-25.6l-188.87-113c-10.64-6.47-23.63 1.97-23.63 15.25Z"></svg:path>`,
})
export class FamiconsPlayForwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlayForwardSharpIcon],svg[famicons-play-forward-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 400l240-144L16 112zm240 0l240-144l-240-144z"></svg:path>`,
})
export class FamiconsPlayForwardSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlayOutlineIcon],svg[famicons-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16Z"></svg:path>`,
})
export class FamiconsPlayOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlaySharpIcon],svg[famicons-play-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m96 448l320-192L96 64z"></svg:path>`,
})
export class FamiconsPlaySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlaySkipBackIcon],svg[famicons-play-skip-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 64a16 16 0 0 1 16 16v136.43L360.77 77.11a35.13 35.13 0 0 1 35.77-.44c12 6.8 19.46 20 19.46 34.33v290c0 14.37-7.46 27.53-19.46 34.33a35.14 35.14 0 0 1-35.77-.45L128 295.57V432a16 16 0 0 1-32 0V80a16 16 0 0 1 16-16"></svg:path>`,
})
export class FamiconsPlaySkipBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlaySkipBackCircleIcon],svg[famicons-play-skip-back-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48S48 141.31 48 256m128-64a16 16 0 0 1 32 0v53l111.68-67.46a10.78 10.78 0 0 1 16.32 9.33v138.26a10.78 10.78 0 0 1-16.32 9.31L208 267v53a16 16 0 0 1-32 0Z"></svg:path>`,
})
export class FamiconsPlaySkipBackCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlaySkipBackCircleOutlineIcon],svg[famicons-play-skip-back-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 448c106 0 192-86 192-192S362 64 256 64S64 150 64 256s86 192 192 192Z"></svg:path><svg:path fill="currentColor" d="M192 176a16 16 0 0 1 16 16v53l111.68-67.46a10.78 10.78 0 0 1 16.32 9.33v138.26a10.78 10.78 0 0 1-16.32 9.31L208 267v53a16 16 0 0 1-32 0V192a16 16 0 0 1 16-16"></svg:path>`,
})
export class FamiconsPlaySkipBackCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlaySkipBackCircleSharpIcon],svg[famicons-play-skip-back-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48S48 141.31 48 256m128-80h32v69l128-77.53v176.9L208 267v69h-32Z"></svg:path>`,
})
export class FamiconsPlaySkipBackCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlaySkipBackOutlineIcon],svg[famicons-play-skip-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M400 111v290c0 17.44-17 28.52-31 20.16L121.09 272.79c-12.12-7.25-12.12-26.33 0-33.58L369 90.84c14-8.36 31 2.72 31 20.16Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M112 80v352"></svg:path>`,
})
export class FamiconsPlaySkipBackOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlaySkipBackSharpIcon],svg[famicons-play-skip-back-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M143.47 64v163.52L416 64v384L143.47 284.48V448H96V64z"></svg:path>`,
})
export class FamiconsPlaySkipBackSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlaySkipForwardIcon],svg[famicons-play-skip-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 64a16 16 0 0 0-16 16v136.43L151.23 77.11a35.13 35.13 0 0 0-35.77-.44C103.46 83.47 96 96.63 96 111v290c0 14.37 7.46 27.53 19.46 34.33a35.14 35.14 0 0 0 35.77-.45L384 295.57V432a16 16 0 0 0 32 0V80a16 16 0 0 0-16-16"></svg:path>`,
})
export class FamiconsPlaySkipForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlaySkipForwardCircleIcon],svg[famicons-play-skip-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m80 272a16 16 0 0 1-32 0v-53l-111.68 67.44a10.78 10.78 0 0 1-16.32-9.31V186.87a10.78 10.78 0 0 1 16.32-9.31L304 245v-53a16 16 0 0 1 32 0Z"></svg:path>`,
})
export class FamiconsPlaySkipForwardCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlaySkipForwardCircleOutlineIcon],svg[famicons-play-skip-forward-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="M320 176a16 16 0 0 0-16 16v53l-111.68-67.44a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31L304 267v53a16 16 0 0 0 32 0V192a16 16 0 0 0-16-16"></svg:path>`,
})
export class FamiconsPlaySkipForwardCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlaySkipForwardCircleSharpIcon],svg[famicons-play-skip-forward-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m80 288h-32v-69l-128 77.37V167.49L304 245v-69h32Z"></svg:path>`,
})
export class FamiconsPlaySkipForwardCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlaySkipForwardOutlineIcon],svg[famicons-play-skip-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M400 80v352"></svg:path>`,
})
export class FamiconsPlaySkipForwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPlaySkipForwardSharpIcon],svg[famicons-play-skip-forward-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368.53 64v163.52L96 64v384l272.53-163.52V448H416V64z"></svg:path>`,
})
export class FamiconsPlaySkipForwardSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
