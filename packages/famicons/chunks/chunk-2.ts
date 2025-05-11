import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsPodiumOutlineIcon],svg[famicons-podium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 160v296a8 8 0 0 0 8 8h136V160a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16M320 48H192a16 16 0 0 0-16 16v400h160V64a16 16 0 0 0-16-16m144 160H352a16 16 0 0 0-16 16v240h136a8 8 0 0 0 8-8V224a16 16 0 0 0-16-16"></svg:path>`,
})
export class FamiconsPodiumOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPodiumSharpIcon],svg[famicons-podium-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 32h192v448H160zm224 160h112v288H384zM16 128h112v352H16z"></svg:path>`,
})
export class FamiconsPodiumSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPowerIcon],svg[famicons-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 464c-114.69 0-208-93.47-208-208.35c0-62.45 27.25-121 74.76-160.55a22 22 0 1 1 28.17 33.8C113.48 160.1 92 206.3 92 255.65C92 346.27 165.57 420 256 420s164-73.73 164-164.35A164 164 0 0 0 360.17 129a22 22 0 1 1 28-33.92A207.88 207.88 0 0 1 464 255.65C464 370.53 370.69 464 256 464"></svg:path><svg:path fill="currentColor" d="M256 272a22 22 0 0 1-22-22V70a22 22 0 0 1 44 0v180a22 22 0 0 1-22 22"></svg:path>`,
})
export class FamiconsPowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPowerOutlineIcon],svg[famicons-power-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M378 108a191.41 191.41 0 0 1 70 148c0 106-86 192-192 192S64 362 64 256a192 192 0 0 1 69-148m123-44v192"></svg:path>`,
})
export class FamiconsPowerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPowerSharpIcon],svg[famicons-power-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 464c-114.69 0-208-93.23-208-207.82a207.44 207.44 0 0 1 74.76-160.13l16.9-14l28.17 33.72l-16.9 14A163.72 163.72 0 0 0 92 256.18c0 90.39 73.57 163.93 164 163.93s164-73.54 164-163.93a163.38 163.38 0 0 0-59.83-126.36l-17-14l28-33.82l17 14A207.13 207.13 0 0 1 464 256.18C464 370.77 370.69 464 256 464"></svg:path><svg:path fill="currentColor" d="M234 48h44v224h-44z"></svg:path>`,
})
export class FamiconsPowerSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPricetagIcon],svg[famicons-pricetag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M467 45.2A44.45 44.45 0 0 0 435.29 32H312.36a30.63 30.63 0 0 0-21.52 8.89L45.09 286.59a44.82 44.82 0 0 0 0 63.32l117 117a44.83 44.83 0 0 0 63.34 0l245.65-245.6A30.6 30.6 0 0 0 480 199.8v-123a44.24 44.24 0 0 0-13-31.6M384 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsPricetagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPricetagOutlineIcon],svg[famicons-pricetag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M435.25 48h-122.9a14.46 14.46 0 0 0-10.2 4.2L56.45 297.9a28.85 28.85 0 0 0 0 40.7l117 117a28.85 28.85 0 0 0 40.7 0L459.75 210a14.46 14.46 0 0 0 4.2-10.2v-123a28.66 28.66 0 0 0-28.7-28.8"></svg:path><svg:path fill="currentColor" d="M384 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsPricetagOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPricetagSharpIcon],svg[famicons-pricetag-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M304 32L16 320l176 176l288-288V32Zm80 128a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsPricetagSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPricetagsIcon],svg[famicons-pricetags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 183.8v-123A44.66 44.66 0 0 0 403.29 16H280.36a30.62 30.62 0 0 0-21.51 8.89L13.09 270.58a44.86 44.86 0 0 0 0 63.34l117 117a44.84 44.84 0 0 0 63.33 0l245.69-245.61A30.6 30.6 0 0 0 448 183.8M352 144a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path><svg:path fill="currentColor" d="M496 64a16 16 0 0 0-16 16v127.37L218.69 468.69a16 16 0 1 0 22.62 22.62l262-262A29.84 29.84 0 0 0 512 208V80a16 16 0 0 0-16-16"></svg:path>`,
})
export class FamiconsPricetagsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPricetagsOutlineIcon],svg[famicons-pricetags-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M403.29 32H280.36a14.46 14.46 0 0 0-10.2 4.2L24.4 281.9a28.85 28.85 0 0 0 0 40.7l117 117a28.86 28.86 0 0 0 40.71 0L427.8 194a14.46 14.46 0 0 0 4.2-10.2v-123A28.66 28.66 0 0 0 403.29 32"></svg:path><svg:path fill="currentColor" d="M352 144a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m230 480l262-262a13.8 13.8 0 0 0 4-10V80"></svg:path>`,
})
export class FamiconsPricetagsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPricetagsSharpIcon],svg[famicons-pricetags-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 16L0 304l176 176l288-288V16Zm80 128a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path><svg:path fill="currentColor" d="M480 64v144L216.9 471.1L242 496l270-272V64z"></svg:path>`,
})
export class FamiconsPricetagsSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPrintIcon],svg[famicons-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408 112H106a58 58 0 0 0-58 58v158a56 56 0 0 0 56 56h8v39.68A40.32 40.32 0 0 0 152.32 464h207.36A40.32 40.32 0 0 0 400 423.68V384h8a56 56 0 0 0 56-56V168a56 56 0 0 0-56-56m-40 311.68a8.35 8.35 0 0 1-8.32 8.32H152.32a8.35 8.35 0 0 1-8.32-8.32V264.32a8.35 8.35 0 0 1 8.32-8.32h207.36a8.35 8.35 0 0 1 8.32 8.32Zm26-215.76a24 24 0 1 1 22-22a24 24 0 0 1-22 22M344 48H168a56.09 56.09 0 0 0-55.42 48h286.84A56.09 56.09 0 0 0 344 48"></svg:path>`,
})
export class FamiconsPrintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPrintOutlineIcon],svg[famicons-print-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M384 368h24a40.12 40.12 0 0 0 40-40V168a40.12 40.12 0 0 0-40-40H104a40.12 40.12 0 0 0-40 40v160a40.12 40.12 0 0 0 40 40h24"></svg:path><svg:rect width="256" height="208" x="128" y="240" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="24.32" ry="24.32"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M384 128v-24a40.12 40.12 0 0 0-40-40H168a40.12 40.12 0 0 0-40 40v24"></svg:path><svg:circle cx="392" cy="184" r="24" fill="currentColor"></svg:circle>`,
})
export class FamiconsPrintOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPrintSharpIcon],svg[famicons-print-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 96V56a8 8 0 0 0-8-8H120a8 8 0 0 0-8 8v40"></svg:path><svg:rect width="208" height="160" x="152" y="264" fill="none" rx="4" ry="4"></svg:rect><svg:rect width="208" height="160" x="152" y="264" fill="none" rx="4" ry="4"></svg:rect><svg:path fill="currentColor" d="M408 112H104a56 56 0 0 0-56 56v208a8 8 0 0 0 8 8h56v72a8 8 0 0 0 8 8h272a8 8 0 0 0 8-8v-72h56a8 8 0 0 0 8-8V168a56 56 0 0 0-56-56m-48 308a4 4 0 0 1-4 4H156a4 4 0 0 1-4-4V268a4 4 0 0 1 4-4h200a4 4 0 0 1 4 4Zm34-212.08a24 24 0 1 1 22-22a24 24 0 0 1-22 22"></svg:path>`,
})
export class FamiconsPrintSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPrismIcon],svg[famicons-prism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M487.83 319.44L295.63 36.88a48 48 0 0 0-79.26 0L24.17 319.44a47.1 47.1 0 0 0 16.93 68.13l192.2 102.75a48.05 48.05 0 0 0 45.4 0l192.2-102.75a47.1 47.1 0 0 0 16.93-68.13m-431.26 41a16.12 16.12 0 0 1-8-10.38a16.8 16.8 0 0 1 2.37-13.62L232.66 69.26c2.18-3.21 7.34-1.72 7.34 2.13v374c0 5.9-6.54 9.63-11.87 6.78Z"></svg:path>`,
})
export class FamiconsPrismIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPrismOutlineIcon],svg[famicons-prism-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M229.73 45.88L37.53 327.79a31.79 31.79 0 0 0 11.31 46L241 476.26a31.77 31.77 0 0 0 29.92 0l192.2-102.51a31.79 31.79 0 0 0 11.31-46L282.27 45.88a31.8 31.8 0 0 0-52.54 0M256 32v448"></svg:path>`,
})
export class FamiconsPrismOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPrismSharpIcon],svg[famicons-prism-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16L16 352l240 144l240-144Zm-20 96.82v324.53L73.73 340Z"></svg:path>`,
})
export class FamiconsPrismSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPulseIcon],svg[famicons-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 272a48.09 48.09 0 0 0-45.25 32h-39.22l-28.35-85.06a16 16 0 0 0-30.56.66l-44.51 155.76l-52.33-314a16 16 0 0 0-31.3-1.25L99.51 304H48a16 16 0 0 0 0 32h64a16 16 0 0 0 15.52-12.12l45.34-181.37l51.36 308.12A16 16 0 0 0 239.1 464h.91a16 16 0 0 0 15.37-11.6l49.8-174.28l15.64 46.94A16 16 0 0 0 336 336h50.75A48 48 0 1 0 432 272"></svg:path>`,
})
export class FamiconsPulseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPulseOutlineIcon],svg[famicons-pulse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 320h64l64-256l64 384l64-224l32 96h64"></svg:path><svg:circle cx="432" cy="320" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class FamiconsPulseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPulseSharpIcon],svg[famicons-pulse-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M426 266a54.07 54.07 0 0 0-49.3 32h-24.84l-27-81a22 22 0 0 0-42 .92l-37.2 130.2l-48-281.74a22 22 0 0 0-43-1.72L94.82 298H32v44h80a22 22 0 0 0 21.34-16.66L171.69 172l46.61 273.62A22 22 0 0 0 238.76 464H240a22 22 0 0 0 21.15-16l44.47-149.62l9.51 28.62A22 22 0 0 0 336 342h40.7a54 54 0 1 0 49.3-76"></svg:path>`,
})
export class FamiconsPulseSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPushIcon],svg[famicons-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M376 352H272V198.63l52.69 52.68a16 16 0 0 0 22.62-22.62l-80-80a16 16 0 0 0-22.62 0l-80 80a16 16 0 0 0 22.62 22.62L240 198.63V352H136a56.06 56.06 0 0 1-56-56V88a56.06 56.06 0 0 1 56-56h240a56.06 56.06 0 0 1 56 56v208a56.06 56.06 0 0 1-56 56M272 464a16 16 0 0 1-32 0V352h32Z"></svg:path>`,
})
export class FamiconsPushIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPushOutlineIcon],svg[famicons-push-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 336h40a40 40 0 0 0 40-40V88a40 40 0 0 0-40-40H136a40 40 0 0 0-40 40v208a40 40 0 0 0 40 40h40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m176 240l80-80l80 80m-80 224V176"></svg:path>`,
})
export class FamiconsPushOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsPushSharpIcon],svg[famicons-push-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 352V204.63l64 64L358.63 246L256 143.37L153.37 246L176 268.63l64-64V352H92a12 12 0 0 1-12-12V44a12 12 0 0 1 12-12h328a12 12 0 0 1 12 12v296a12 12 0 0 1-12 12Zm-32 0h32v128h-32z"></svg:path>`,
})
export class FamiconsPushSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsQrCodeIcon],svg[famicons-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="80" height="80" x="336" y="336" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="64" height="64" x="272" y="272" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="64" height="64" x="416" y="416" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="48" height="48" x="432" y="272" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="48" height="48" x="272" y="432" fill="currentColor" rx="8" ry="8"></svg:rect><svg:path fill="currentColor" d="M448 32H304a32 32 0 0 0-32 32v144a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m-32 136a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8ZM208 32H64a32 32 0 0 0-32 32v144a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m-32 136a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8Zm32 104H64a32 32 0 0 0-32 32v144a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V304a32 32 0 0 0-32-32m-32 136a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class FamiconsQrCodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsQrCodeOutlineIcon],svg[famicons-qr-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="80" height="80" x="336" y="336" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="64" height="64" x="272" y="272" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="64" height="64" x="416" y="416" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="48" height="48" x="432" y="272" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="48" height="48" x="272" y="432" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="80" height="80" x="336" y="96" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="176" height="176" x="288" y="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect><svg:rect width="80" height="80" x="96" y="96" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="176" height="176" x="48" y="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect><svg:rect width="80" height="80" x="96" y="336" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="176" height="176" x="48" y="288" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect>`,
})
export class FamiconsQrCodeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsQrCodeSharpIcon],svg[famicons-qr-code-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 336h80v80h-80zm-64-64h64v64h-64zm144 144h64v64h-64zm16-144h48v48h-48zM272 432h48v48h-48zm64-336h80v80h-80z"></svg:path><svg:path fill="currentColor" d="M480 240H272V32h208Zm-164-44h120V76H316ZM96 96h80v80H96z"></svg:path><svg:path fill="currentColor" d="M240 240H32V32h208ZM76 196h120V76H76Zm20 140h80v80H96z"></svg:path><svg:path fill="currentColor" d="M240 480H32V272h208ZM76 436h120V316H76Z"></svg:path>`,
})
export class FamiconsQrCodeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRadioIcon],svg[famicons-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="36" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M190.24 341.77a22 22 0 0 1-16.46-7.38a118 118 0 0 1 0-156.76a22 22 0 1 1 32.87 29.24a74 74 0 0 0 0 98.29a22 22 0 0 1-16.43 36.61Zm131.52 0a22 22 0 0 1-16.43-36.61a74 74 0 0 0 0-98.29a22 22 0 1 1 32.87-29.24a118 118 0 0 1 0 156.76a22 22 0 0 1-16.44 7.38"></svg:path><svg:path fill="currentColor" d="M139.29 392.72a21.92 21.92 0 0 1-16.08-7a190 190 0 0 1 0-259.49a22 22 0 1 1 32.13 30.06a146 146 0 0 0 0 199.38a22 22 0 0 1-16.06 37Zm233.42 0a22 22 0 0 1-16.06-37a146 146 0 0 0 0-199.38a22 22 0 1 1 32.13-30.06a190 190 0 0 1 0 259.49a21.92 21.92 0 0 1-16.07 6.95"></svg:path><svg:path fill="currentColor" d="M429 438a22 22 0 0 1-16.39-36.67a218.34 218.34 0 0 0 0-290.66a22 22 0 0 1 32.78-29.34a262.34 262.34 0 0 1 0 349.34A22 22 0 0 1 429 438m-346 0a21.94 21.94 0 0 1-16.41-7.33a262.34 262.34 0 0 1 0-349.34a22 22 0 0 1 32.78 29.34a218.34 218.34 0 0 0 0 290.66A22 22 0 0 1 83 438"></svg:path>`,
})
export class FamiconsRadioIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRadioButtonOffIcon],svg[famicons-radio-button-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class FamiconsRadioButtonOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRadioButtonOffOutlineIcon],svg[famicons-radio-button-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class FamiconsRadioButtonOffOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRadioButtonOffSharpIcon],svg[famicons-radio-button-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class FamiconsRadioButtonOffSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRadioButtonOnIcon],svg[famicons-radio-button-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:circle cx="256" cy="256" r="144" fill="currentColor"></svg:circle>`,
})
export class FamiconsRadioButtonOnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRadioButtonOnOutlineIcon],svg[famicons-radio-button-on-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:circle cx="256" cy="256" r="144" fill="currentColor"></svg:circle>`,
})
export class FamiconsRadioButtonOnOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRadioButtonOnSharpIcon],svg[famicons-radio-button-on-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:circle cx="256" cy="256" r="144" fill="currentColor"></svg:circle>`,
})
export class FamiconsRadioButtonOnSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRadioOutlineIcon],svg[famicons-radio-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256.02" r="32" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M184.25 192.25a96 96 0 0 0 0 127.52m143.52 0a96 96 0 0 0 0-127.52m-194.49-50.97a168 168 0 0 0 0 229.44m245.44 0a168 168 0 0 0 0-229.44"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M435 416a240.34 240.34 0 0 0 0-320M77 96a240.34 240.34 0 0 0 0 320"></svg:path>`,
})
export class FamiconsRadioOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRadioSharpIcon],svg[famicons-radio-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="256" cy="256" fill="currentColor" rx="36" ry="35.99"></svg:ellipse><svg:path fill="currentColor" d="m188.4 350.8l-14.62-16.44a117.91 117.91 0 0 1 0-156.71l14.62-16.43l32.87 29.24l-14.62 16.43a73.93 73.93 0 0 0 0 98.25l14.62 16.44Zm135.2 0l-32.89-29.22l14.62-16.44a73.93 73.93 0 0 0 0-98.25l-14.62-16.43l32.87-29.24l14.62 16.43a117.91 117.91 0 0 1 0 156.71Z"></svg:path><svg:path fill="currentColor" d="m138.24 401.76l-15-16.06a189.85 189.85 0 0 1 0-259.4l15-16.07l32.14 30.05l-15 16.06a145.88 145.88 0 0 0 0 199.32l15 16.06Zm235.52 0l-32.14-30l15-16.06a145.88 145.88 0 0 0 0-199.32l-15-16.06l32.14-30l15 16.07a189.85 189.85 0 0 1 0 259.4Z"></svg:path><svg:path fill="currentColor" d="m430.73 447l-32.79-29.33l14.66-16.39a218.2 218.2 0 0 0 0-290.56l-14.67-16.38L430.72 65l14.67 16.39a262.18 262.18 0 0 1 0 349.22Zm-349.46 0L66.6 430.61a262.18 262.18 0 0 1 0-349.22L81.28 65l32.79 29.34l-14.68 16.38a218.2 218.2 0 0 0 0 290.56l14.66 16.39Z"></svg:path>`,
})
export class FamiconsRadioSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRainyIcon],svg[famicons-rainy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M456.26 139.37c-16.77-16.73-39.17-28.41-65.17-34a16 16 0 0 1-11.19-9a142.24 142.24 0 0 0-42.19-53.21C314.48 25.39 286.23 16 256 16a140.24 140.24 0 0 0-93.5 35.32c-24.2 21.56-40.91 51.34-48.43 85.83a16.05 16.05 0 0 1-11.72 12.18c-25 6.3-35.71 12.54-49.21 24.56C34 190.93 24 214.14 24 240.8c0 30.55 11.23 55.64 32.47 72.56C75.08 328.17 100.5 336 130 336h234c33.2 0 64.11-11.46 87-32.28c23.84-21.65 37-51.67 37-84.52c0-31.49-11-59.09-31.74-79.83M112 448a16 16 0 0 1-13.3-24.88l32-48a16 16 0 0 1 26.62 17.76l-32 48A16 16 0 0 1 112 448m48 48a16 16 0 0 1-13.29-24.88l64-96a16 16 0 0 1 26.62 17.76l-64 96A16 16 0 0 1 160 496m112-48a16 16 0 0 1-13.3-24.88l32-48a16 16 0 0 1 26.62 17.76l-32 48A16 16 0 0 1 272 448m48 48a16 16 0 0 1-13.3-24.88l64-96a16 16 0 0 1 26.62 17.76l-64 96A16 16 0 0 1 320 496"></svg:path>`,
})
export class FamiconsRainyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRainyOutlineIcon],svg[famicons-rainy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M114.61 162.85A16.07 16.07 0 0 0 128 149.6C140.09 76.17 193.63 32 256 32c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0 0 12.2 9.87c50 8.15 91.6 41.54 91.6 99.59c0 59.4-48.6 100.8-108 100.8H130c-49.5 0-90-24.7-90-79.2c0-48.47 38.67-72.22 74.61-77.95Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m144 384l-32 48m112-48l-64 96m144-96l-32 48m112-48l-64 96"></svg:path>`,
})
export class FamiconsRainyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRainySharpIcon],svg[famicons-rainy-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M364 336H130c-29.5 0-54.92-7.83-73.53-22.64C35.23 296.44 24 271.35 24 240.8c0-26.66 10.08-49.8 29.14-66.91c15.24-13.68 36.17-23.21 59-26.84c.06 0 .08 0 .09-.05c6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 0 1 256 16c30.23 0 58.48 9.39 81.71 27.17a142.7 142.7 0 0 1 45.36 60.66c29.41 4.82 54.72 17.11 73.19 35.54C477 160.11 488 187.71 488 219.2c0 32.85-13.13 62.87-37 84.52c-22.89 20.82-53.8 32.28-87 32.28M93.82 430.423l49.75-74.627l26.626 17.75l-49.751 74.627zm47.997 48.005l81.751-122.627l26.626 17.75l-81.752 122.628zm111.995-48.003l49.75-74.627l26.626 17.75l-49.75 74.627zm47.996 48.005l81.751-122.628l26.626 17.75l-81.752 122.628z"></svg:path>`,
})
export class FamiconsRainySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReaderIcon],svg[famicons-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 32H144a64.07 64.07 0 0 0-64 64v320a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V96a64.07 64.07 0 0 0-64-64M256 304h-80a16 16 0 0 1 0-32h80a16 16 0 0 1 0 32m80-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32m0-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32"></svg:path>`,
})
export class FamiconsReaderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReaderOutlineIcon],svg[famicons-reader-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="320" height="416" x="96" y="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 128h160m-160 80h160m-160 80h80"></svg:path>`,
})
export class FamiconsReaderOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReaderSharpIcon],svg[famicons-reader-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 44v424a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V44a12 12 0 0 0-12-12H92a12 12 0 0 0-12 12m192 260H160v-32h112Zm80-80H160v-32h192Zm0-80H160v-32h192Z"></svg:path>`,
})
export class FamiconsReaderSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReceiptIcon],svg[famicons-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M483.82 32.45a16.28 16.28 0 0 0-11.23 1.37L448 46.1l-24.8-12.4a16 16 0 0 0-14.31 0l-25.11 12.41L359 33.7a16 16 0 0 0-14.36 0L320 46.07l-24.45-12.34a16 16 0 0 0-14.35-.06L256 46.12l-24.8-12.43a16.05 16.05 0 0 0-14.33 0L192 46.1l-24.84-12.41a16 16 0 0 0-19.36 3.94a16.25 16.25 0 0 0-3.8 10.65V288l.05.05H336a32 32 0 0 1 32 32V424c0 30.93 33.07 56 64 56h12a52 52 0 0 0 52-52V48a16 16 0 0 0-12.18-15.55M416 240H288.5c-8.64 0-16.1-6.64-16.48-15.28A16 16 0 0 1 288 208h127.5c8.64 0 16.1 6.64 16.48 15.28A16 16 0 0 1 416 240m0-80H224.5c-8.64 0-16.1-6.64-16.48-15.28A16 16 0 0 1 224 128h191.5c8.64 0 16.1 6.64 16.48 15.28A16 16 0 0 1 416 160"></svg:path><svg:path fill="currentColor" d="M336 424v-88a16 16 0 0 0-16-16H48a32.1 32.1 0 0 0-32 32.05c0 50.55 5.78 71.57 14.46 87.57C45.19 466.79 71.86 480 112 480h245.68a4 4 0 0 0 2.85-6.81C351.07 463.7 336 451 336 424"></svg:path>`,
})
export class FamiconsReceiptIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReceiptOutlineIcon],svg[famicons-receipt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M160 336V48l32 16l32-16l31.94 16l32.37-16L320 64l31.79-16l31.93 16L416 48l32.01 16L480 48v224"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M480 272v112a80 80 0 0 1-80 80a80 80 0 0 1-80-80v-48H48a15.86 15.86 0 0 0-16 16c0 64 6.74 112 80 112h288"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 144h192m-128 80h128"></svg:path>`,
})
export class FamiconsReceiptOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReceiptSharpIcon],svg[famicons-receipt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m448 48l-32-16l-32 16l-32-16l-32 16l-32-16l-32 16l-32-16l-32 16l-48-16v256.05h224V424c0 30.93 33.07 56 64 56h12c30.93 0 52-25.07 52-56V32ZM272.5 240l-.5-32h159.5l.5 32Zm-64-80l-.5-32h223.5l.5 32Z"></svg:path><svg:path fill="currentColor" d="M336 424V320H16v32c0 50.55 5.78 71.62 14.46 87.63C45.19 466.8 71.86 480 112 480h256s-32-20-32-56"></svg:path>`,
})
export class FamiconsReceiptSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRecordingIcon],svg[famicons-recording-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M380.79 144.05c-59.1 1.65-107.12 49.71-108.79 108.81a111.64 111.64 0 0 0 30.36 79.77A2 2 0 0 1 301 336h-90a2 2 0 0 1-1.44-3.37A111.64 111.64 0 0 0 240 252.86c-1.63-59.1-49.65-107.16-108.75-108.81A112.12 112.12 0 0 0 16 255.53C15.75 317.77 67 368 129.24 368h253.52C445 368 496.25 317.77 496 255.53a112.12 112.12 0 0 0-115.21-111.48"></svg:path>`,
})
export class FamiconsRecordingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRecordingOutlineIcon],svg[famicons-recording-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="128" cy="256" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="384" cy="256" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 352h256"></svg:path>`,
})
export class FamiconsRecordingOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRecordingSharpIcon],svg[famicons-recording-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 138a117.93 117.93 0 0 0-91.84 192h-72.32A118 118 0 1 0 128 374h256a118 118 0 0 0 0-236M54 256a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74m330 74a74 74 0 1 1 74-74a74.09 74.09 0 0 1-74 74"></svg:path>`,
})
export class FamiconsRecordingSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRefreshIcon],svg[famicons-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m256 58l80 80l-80 80"></svg:path>`,
})
export class FamiconsRefreshIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRefreshCircleIcon],svg[famicons-refresh-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.32 48 256c0 114.86 93.14 208 208 208c114.69 0 208-93.31 208-208c0-114.87-93.13-208-208-208m0 313a94 94 0 0 1 0-188h4.21l-14.11-14.1a14 14 0 0 1 19.8-19.8l40 40a14 14 0 0 1 0 19.8l-40 40a14 14 0 0 1-19.8-19.8l18-18c-2.38-.1-5.1-.1-8.1-.1a66 66 0 1 0 66 66a14 14 0 0 1 28 0a94.11 94.11 0 0 1-94 94"></svg:path>`,
})
export class FamiconsRefreshCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRefreshCircleOutlineIcon],svg[famicons-refresh-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="28" d="M288 193s12.18-6-32-6a80 80 0 1 0 80 80"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="28" d="m256 149l40 40l-40 40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"></svg:path>`,
})
export class FamiconsRefreshCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRefreshCircleSharpIcon],svg[famicons-refresh-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.32 48 256c0 114.86 93.14 208 208 208c114.69 0 208-93.31 208-208c0-114.87-93.13-208-208-208m94 219a94 94 0 1 1-94-94h4.21l-24-24L256 129.2l59.8 59.8l-59.8 59.8l-19.8-19.8l27.92-27.92c-2.4-.08-5.12-.08-8.12-.08a66 66 0 1 0 66 66v-14h28Z"></svg:path>`,
})
export class FamiconsRefreshCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRefreshOutlineIcon],svg[famicons-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m256 58l80 80l-80 80"></svg:path>`,
})
export class FamiconsRefreshOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRefreshSharpIcon],svg[famicons-refresh-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m256 58l80 80l-80 80"></svg:path>`,
})
export class FamiconsRefreshSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReloadIcon],svg[famicons-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128"></svg:path><svg:path fill="currentColor" d="M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42"></svg:path>`,
})
export class FamiconsReloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReloadCircleIcon],svg[famicons-reload-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m120 182.15a8.62 8.62 0 0 1-8.62 8.62h-59.54a8.61 8.61 0 0 1-6.09-14.71l22.17-22.17l-5.6-6.51a87.38 87.38 0 1 0-62.94 148a87.55 87.55 0 0 0 82.42-58.25A16 16 0 1 1 368 295.8a119.4 119.4 0 1 1-112.62-159.18a118.34 118.34 0 0 1 86.36 36.95l.56.62l4.31 5l14.68-14.68a8.44 8.44 0 0 1 6-2.54a8.61 8.61 0 0 1 8.68 8.63Z"></svg:path>`,
})
export class FamiconsReloadCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReloadCircleOutlineIcon],svg[famicons-reload-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m341.54 197.85l-11.37-13.23a103.37 103.37 0 1 0 22.71 105.84"></svg:path><svg:path fill="currentColor" d="M367.32 162a8.44 8.44 0 0 0-6 2.54l-59.54 59.54a8.61 8.61 0 0 0 6.09 14.71h59.54a8.62 8.62 0 0 0 8.62-8.62v-59.56a8.61 8.61 0 0 0-8.68-8.63Z"></svg:path>`,
})
export class FamiconsReloadCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReloadCircleSharpIcon],svg[famicons-reload-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m120 190.77h-89l36.88-36.88l-5.6-6.51a87.38 87.38 0 1 0-62.94 148a87.55 87.55 0 0 0 82.42-58.25l5.37-15.13l30.17 10.67l-5.3 15.13a119.4 119.4 0 1 1-112.62-159.18a118.34 118.34 0 0 1 86.36 36.95l.56.62l4.31 5L376 149.81Z"></svg:path>`,
})
export class FamiconsReloadCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReloadOutlineIcon],svg[famicons-reload-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128"></svg:path><svg:path fill="currentColor" d="M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42"></svg:path>`,
})
export class FamiconsReloadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReloadSharpIcon],svg[famicons-reload-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128"></svg:path><svg:path fill="currentColor" d="M464 68.45V220a4 4 0 0 1-4 4H308.45a4 4 0 0 1-2.83-6.83L457.17 65.62a4 4 0 0 1 6.83 2.83"></svg:path>`,
})
export class FamiconsReloadSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRemoveIcon],svg[famicons-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"></svg:path>`,
})
export class FamiconsRemoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRemoveCircleIcon],svg[famicons-remove-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m80 224H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32"></svg:path>`,
})
export class FamiconsRemoveCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRemoveCircleOutlineIcon],svg[famicons-remove-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 256H176"></svg:path>`,
})
export class FamiconsRemoveCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRemoveCircleSharpIcon],svg[famicons-remove-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m96 224H160v-32h192Z"></svg:path>`,
})
export class FamiconsRemoveCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRemoveOutlineIcon],svg[famicons-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"></svg:path>`,
})
export class FamiconsRemoveOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRemoveSharpIcon],svg[famicons-remove-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="M400 256H112"></svg:path>`,
})
export class FamiconsRemoveSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReorderFourIcon],svg[famicons-reorder-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M102 304h308m-308-96h308m-308-96h308M102 400h308"></svg:path>`,
})
export class FamiconsReorderFourIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReorderFourOutlineIcon],svg[famicons-reorder-four-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 304h320M96 208h320M96 112h320M96 400h320"></svg:path>`,
})
export class FamiconsReorderFourOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReorderFourSharpIcon],svg[famicons-reorder-four-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="44" d="M102 304h308m-308-96h308m-308-96h308M102 400h308"></svg:path>`,
})
export class FamiconsReorderFourSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReorderThreeIcon],svg[famicons-reorder-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M102 256h308m-308-80h308M102 336h308"></svg:path>`,
})
export class FamiconsReorderThreeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReorderThreeOutlineIcon],svg[famicons-reorder-three-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 256h320M96 176h320M96 336h320"></svg:path>`,
})
export class FamiconsReorderThreeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReorderThreeSharpIcon],svg[famicons-reorder-three-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="44" d="M102 256h308m-308-80h308M102 336h308"></svg:path>`,
})
export class FamiconsReorderThreeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReorderTwoIcon],svg[famicons-reorder-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M118 304h276m-276-96h276"></svg:path>`,
})
export class FamiconsReorderTwoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReorderTwoOutlineIcon],svg[famicons-reorder-two-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 304h288m-288-96h288"></svg:path>`,
})
export class FamiconsReorderTwoOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReorderTwoSharpIcon],svg[famicons-reorder-two-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="44" d="M118 304h276m-276-96h276"></svg:path>`,
})
export class FamiconsReorderTwoSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRepeatIcon],svg[famicons-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m320 120l48 48l-48 48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 168H144a80.24 80.24 0 0 0-80 80v16m128 128l-48-48l48-48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 344h208a80.24 80.24 0 0 0 80-80v-16"></svg:path>`,
})
export class FamiconsRepeatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRepeatOutlineIcon],svg[famicons-repeat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m320 120l48 48l-48 48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 168H144a80.24 80.24 0 0 0-80 80v16m128 128l-48-48l48-48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 344h208a80.24 80.24 0 0 0 80-80v-16"></svg:path>`,
})
export class FamiconsRepeatOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRepeatSharpIcon],svg[famicons-repeat-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m320 120l48 48l-48 48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M352 168H64v96m128 128l-48-48l48-48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M160 344h288v-96"></svg:path>`,
})
export class FamiconsRepeatSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsResizeIcon],svg[famicons-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 96h112v112m-10.23-101.8L111.98 400.02M208 416H96V304"></svg:path>`,
})
export class FamiconsResizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsResizeOutlineIcon],svg[famicons-resize-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 96h112v112m-10.23-101.8L111.98 400.02M208 416H96V304"></svg:path>`,
})
export class FamiconsResizeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsResizeSharpIcon],svg[famicons-resize-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M304 96h112v112m-10.23-101.8L111.98 400.02M208 416H96V304"></svg:path>`,
})
export class FamiconsResizeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRestaurantIcon],svg[famicons-restaurant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M357.57 223.94a79.48 79.48 0 0 0 56.58-23.44l77-76.95c6.09-6.09 6.65-16 .85-22.39a16 16 0 0 0-23.17-.56l-68.63 68.58a12.29 12.29 0 0 1-17.37 0c-4.79-4.78-4.53-12.86.25-17.64l68.33-68.33a16 16 0 0 0-.56-23.16A15.62 15.62 0 0 0 440.27 56a16.7 16.7 0 0 0-11.81 4.9l-68.27 68.26a12.29 12.29 0 0 1-17.37 0c-4.78-4.78-4.53-12.86.25-17.64l68.33-68.31a16 16 0 0 0-.56-23.16A15.62 15.62 0 0 0 400.26 16a16.73 16.73 0 0 0-11.81 4.9L311.5 97.85a79.5 79.5 0 0 0-23.44 56.59v8.23a16 16 0 0 1-4.69 11.33l-35.61 35.62a4 4 0 0 1-5.66 0L68.82 36.33a16 16 0 0 0-22.58-.06C31.09 51.28 23 72.47 23 97.54c-.1 41.4 21.66 89 56.79 124.08l85.45 85.45A64.8 64.8 0 0 0 211 326a64 64 0 0 0 16.21-2.08a16.2 16.2 0 0 1 4.07-.53a15.93 15.93 0 0 1 10.83 4.25l11.39 10.52a16.12 16.12 0 0 1 4.6 11.23v5.54a47.73 47.73 0 0 0 13.77 33.65l90.05 91.57l.09.1a53.29 53.29 0 0 0 75.36-75.37L302.39 269.9a4 4 0 0 1 0-5.66L338 228.63a16 16 0 0 1 11.32-4.69Z"></svg:path><svg:path fill="currentColor" d="M211 358a97.32 97.32 0 0 1-68.36-28.25l-13.86-13.86a8 8 0 0 0-11.3 0l-85 84.56c-15.15 15.15-20.56 37.45-13.06 59.29a31 31 0 0 0 1.49 3.6C31 484 50.58 496 72 496a55.68 55.68 0 0 0 39.64-16.44L225 365.66a4.69 4.69 0 0 0 1.32-3.72v-.26a4.63 4.63 0 0 0-5.15-4.27A97 97 0 0 1 211 358"></svg:path>`,
})
export class FamiconsRestaurantIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRestaurantOutlineIcon],svg[famicons-restaurant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="m57.49 47.74l368.43 368.43a37.28 37.28 0 0 1 0 52.72a37.29 37.29 0 0 1-52.72 0l-90-91.55a32 32 0 0 1-9.2-22.43v-5.53a32 32 0 0 0-9.52-22.78l-11.62-10.73a32 32 0 0 0-29.8-7.44a48.53 48.53 0 0 1-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 32l-77.25 77.25A64 64 0 0 0 304 154.51v14.86a16 16 0 0 1-4.69 11.32L288 192m32 32l11.31-11.31a16 16 0 0 1 11.32-4.69h14.86a64 64 0 0 0 45.26-18.75L480 112m-40-40l-80 80M200 368l-99.72 100.28a40 40 0 0 1-56.56 0h0a40 40 0 0 1 0-56.56L128 328"></svg:path>`,
})
export class FamiconsRestaurantOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRestaurantSharpIcon],svg[famicons-restaurant-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M342.7 223.94h14.87a79.48 79.48 0 0 0 56.58-23.44L496 118l-22.22-22.4l-83.58 83.58l-17.37-17.37l83.58-83.59l-23-22.31l-83.27 83.26l-17.32-17.37l83.58-83.59L394 16l-82.5 81.85a79.5 79.5 0 0 0-23.44 56.59v14.86l-43.13 43.13L48 16C3.72 70.87 29.87 171.71 79.72 221.57l85.5 85.5c26.55 26.55 31.82 28.92 61.94 16.8c6.49-2.61 8.85-2.32 14.9 3.72l13 12.13c2.93 3 3 3.88 3 9.62v5.54c0 21.08 13.48 33.2 22.36 42.24L384 496l72-72l-156.43-156.93Z"></svg:path><svg:path fill="currentColor" d="M227.37 354.59c-29.82 6.11-48.11 11.74-83.08-23.23c-.56-.56-1.14-1.1-1.7-1.66l-19.5-19.5L16 416l80 80l144-144Z"></svg:path>`,
})
export class FamiconsRestaurantSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReturnDownBackIcon],svg[famicons-return-down-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 352l-64-64l64-64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 288h294c58.76 0 106-49.33 106-108v-20"></svg:path>`,
})
export class FamiconsReturnDownBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReturnDownBackOutlineIcon],svg[famicons-return-down-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 352l-64-64l64-64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 288h294c58.76 0 106-49.33 106-108v-20"></svg:path>`,
})
export class FamiconsReturnDownBackOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReturnDownBackSharpIcon],svg[famicons-return-down-back-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m112 352l-64-64l64-64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M64 288h400V160"></svg:path>`,
})
export class FamiconsReturnDownBackSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReturnDownForwardIcon],svg[famicons-return-down-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 352l64-64l-64-64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 288H154c-58.76 0-106-49.33-106-108v-20"></svg:path>`,
})
export class FamiconsReturnDownForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReturnDownForwardOutlineIcon],svg[famicons-return-down-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 352l64-64l-64-64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 288H154c-58.76 0-106-49.33-106-108v-20"></svg:path>`,
})
export class FamiconsReturnDownForwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReturnDownForwardSharpIcon],svg[famicons-return-down-forward-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m400 352l64-64l-64-64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M448 288H48V160"></svg:path>`,
})
export class FamiconsReturnDownForwardSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReturnUpBackIcon],svg[famicons-return-up-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l-64 64l64 64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 224h294c58.76 0 106 49.33 106 108v20"></svg:path>`,
})
export class FamiconsReturnUpBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReturnUpBackOutlineIcon],svg[famicons-return-up-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l-64 64l64 64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 224h294c58.76 0 106 49.33 106 108v20"></svg:path>`,
})
export class FamiconsReturnUpBackOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReturnUpBackSharpIcon],svg[famicons-return-up-back-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m112 160l-64 64l64 64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M64 224h400v128"></svg:path>`,
})
export class FamiconsReturnUpBackSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReturnUpForwardIcon],svg[famicons-return-up-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 160l64 64l-64 64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 224H154c-58.76 0-106 49.33-106 108v20"></svg:path>`,
})
export class FamiconsReturnUpForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReturnUpForwardOutlineIcon],svg[famicons-return-up-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 160l64 64l-64 64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 224H154c-58.76 0-106 49.33-106 108v20"></svg:path>`,
})
export class FamiconsReturnUpForwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsReturnUpForwardSharpIcon],svg[famicons-return-up-forward-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m400 160l64 64l-64 64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M448 224H48v128"></svg:path>`,
})
export class FamiconsReturnUpForwardSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRibbonIcon],svg[famicons-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M269 335.61q-6.33.47-12.78.47c-5.23 0-10.4-.24-15.51-.69a176.11 176.11 0 0 1-127.67-72.94a4 4 0 0 0-6.77.35l-72 129.4c-2.74 5-3.17 11-.28 15.88A16.78 16.78 0 0 0 48.22 416h78a15.28 15.28 0 0 1 13.62 7.33L178.5 488a16.26 16.26 0 0 0 13.75 8c5.94-.33 12.09-4.19 14.56-9.6l66.11-145.15a4 4 0 0 0-3.92-5.64m208.64 56.27l-71.53-129.17a4 4 0 0 0-6.74-.36a176.5 176.5 0 0 1-78.31 61.42a16.1 16.1 0 0 0-8.72 8.25l-36.86 81.1a7.92 7.92 0 0 0 0 6.6l30.27 66.59c2.45 5.41 8.59 9.36 14.52 9.69a16.3 16.3 0 0 0 13.7-8.12l38.53-64.58c2.89-4.85 8.13-7.33 13.78-7.3h78.77c6.67 0 11.72-3.48 14-10a16.92 16.92 0 0 0-1.41-14.12"></svg:path><svg:ellipse cx="256.26" cy="160" fill="currentColor" rx="48.01" ry="48"></svg:ellipse><svg:path fill="currentColor" d="M256.26 16c-79.42 0-144 64.59-144 144s64.61 144 144 144s144-64.6 144-144s-64.59-144-144-144m0 224a80 80 0 1 1 80-80a80.1 80.1 0 0 1-80 80"></svg:path>`,
})
export class FamiconsRibbonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRibbonOutlineIcon],svg[famicons-ribbon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="160" r="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M143.65 227.82L48 400l86.86-.42a16 16 0 0 1 13.82 7.8L192 480l88.33-194.32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M366.54 224L464 400l-86.86-.42a16 16 0 0 0-13.82 7.8L320 480l-64-140.8"></svg:path><svg:circle cx="256" cy="160" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class FamiconsRibbonOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRibbonSharpIcon],svg[famicons-ribbon-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 336c-5.22 0-10.4-.24-15.51-.69a176.12 176.12 0 0 1-131.29-78.37L20 416h115l58 96l82.53-177.09A178 178 0 0 1 256 336m147-79.26a176.9 176.9 0 0 1-88.18 69.14L273.7 415.5L319 512l58-96h115Z"></svg:path><svg:circle cx="256.02" cy="160" r="48" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M256 16c-79.4 0-144 64.6-144 144s64.6 144 144 144s144-64.6 144-144S335.4 16 256 16m0 224a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80"></svg:path>`,
})
export class FamiconsRibbonSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRocketIcon],svg[famicons-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M328.85 156.79a26.69 26.69 0 1 0 18.88 7.81a26.6 26.6 0 0 0-18.88-7.81"></svg:path><svg:path fill="currentColor" d="M477.44 50.06a.3.3 0 0 1 0-.09a20.4 20.4 0 0 0-15.13-15.3c-29.8-7.27-76.68.48-128.63 21.28c-52.36 21-101.42 52-134.58 85.22A321 321 0 0 0 169.55 175c-22.33-1-42 2.18-58.57 9.41c-57.74 25.41-74.23 90.44-78.62 117.14a25 25 0 0 0 27.19 29h.13l64.32-7.02c.08.82.17 1.57.24 2.26a34.36 34.36 0 0 0 9.9 20.72l31.39 31.41a34.27 34.27 0 0 0 20.71 9.91l2.15.23l-7 64.24v.13A25 25 0 0 0 206 480a25 25 0 0 0 4.15-.34C237 475.34 302 459.05 327.34 401c7.17-16.46 10.34-36.05 9.45-58.34a315 315 0 0 0 33.95-29.55c33.43-33.26 64.53-81.92 85.31-133.52c20.69-51.36 28.48-98.59 21.39-129.53M370.38 224.94a58.77 58.77 0 1 1 0-83.07a58.3 58.3 0 0 1 0 83.07"></svg:path><svg:path fill="currentColor" d="M161.93 386.44a16 16 0 0 0-11 2.67c-6.39 4.37-12.81 8.69-19.29 12.9c-13.11 8.52-28.79-6.44-21-20l12.15-21a16 16 0 0 0-15.16-24.91A61.25 61.25 0 0 0 72 353.56c-3.66 3.67-14.79 14.81-20.78 57.26A358 358 0 0 0 48 447.59A16 16 0 0 0 64 464h.4a360 360 0 0 0 36.8-3.2c42.47-6 53.61-17.14 57.27-20.8a60.5 60.5 0 0 0 17.39-35.74a16 16 0 0 0-13.93-17.82"></svg:path>`,
})
export class FamiconsRocketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRocketOutlineIcon],svg[famicons-rocket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M461.81 53.81a4.4 4.4 0 0 0-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a295 295 0 0 0-33.09 39.08c-21-1.9-42-.3-59.88 7.5c-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 0 0 9.8 10.4l81.07-8.9a180 180 0 0 0 1.1 18.3a18.15 18.15 0 0 0 5.3 11.09l31.39 31.39a18.15 18.15 0 0 0 11.1 5.3a180 180 0 0 0 18.19 1.1l-8.89 81a9 9 0 0 0 10.39 9.79c24.9-4 83-18.69 105.07-69.17c7.8-17.9 9.4-38.79 7.6-59.69a294 294 0 0 0 39.19-33.09c68.38-68 115.47-190.86 102.37-247.95M298.66 213.67a42.7 42.7 0 1 1 60.38 0a42.65 42.65 0 0 1-60.38 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M109.64 352a45.06 45.06 0 0 0-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 0 0 160 402.32"></svg:path>`,
})
export class FamiconsRocketOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRocketSharpIcon],svg[famicons-rocket-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M477.64 38.26a4.75 4.75 0 0 0-3.55-3.66c-58.57-14.32-193.9 36.71-267.22 110a317 317 0 0 0-35.63 42.1c-22.61-2-45.22-.33-64.49 8.07C52.38 218.7 36.55 281.14 32.14 308a9.64 9.64 0 0 0 10.55 11.2l87.31-9.63a194 194 0 0 0 1.19 19.7a19.53 19.53 0 0 0 5.7 12L170.7 375a19.6 19.6 0 0 0 12 5.7a194 194 0 0 0 19.59 1.19l-9.58 87.2a9.65 9.65 0 0 0 11.2 10.55c26.81-4.3 89.36-20.13 113.15-74.5c8.4-19.27 10.12-41.77 8.18-64.27a317.7 317.7 0 0 0 42.21-35.64C441 232.05 491.74 99.74 477.64 38.26M294.07 217.93a48 48 0 1 1 67.86 0a47.95 47.95 0 0 1-67.86 0"></svg:path><svg:path fill="currentColor" d="M168.4 399.43c-5.48 5.49-14.27 7.63-24.85 9.46c-23.77 4.05-44.76-16.49-40.49-40.52c1.63-9.11 6.45-21.88 9.45-24.88a4.37 4.37 0 0 0-3.65-7.45a60 60 0 0 0-35.13 17.12C50.22 376.69 48 464 48 464s87.36-2.22 110.87-25.75A59.7 59.7 0 0 0 176 403.09c.37-4.18-4.72-6.67-7.6-3.66"></svg:path>`,
})
export class FamiconsRocketSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRoseIcon],svg[famicons-rose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M429.55 119.49a16 16 0 0 0-17.06-7.1c-18.64 4.19-37.06 9-54.73 14.22c-35.06 10.39-69.33 23.92-107.85 42.59c-18.62 9.05-26 13.35-48 26.13l-4.5 2.67c-32.95 19-57.09 40-73.79 64.29C105.29 288.89 96 320 96 354.64c0 40.74 15.71 77.1 44.24 102.37C169 482.52 209.06 496 256 496c46.76 0 86.89-14.33 116-41.43c28.35-26.35 44-63.39 44-104.29c0-25-6.19-47-12.17-68.22c-12.59-44.69-23.46-83.29 24.71-144.13a16 16 0 0 0 1.01-18.44m-210.55.06C168.46 92.08 101.46 80.69 98.63 80.22A16 16 0 0 0 81 90.55a16.47 16.47 0 0 0 3.79 16.84c31.84 33.78 32.86 68.79 28.65 104.63a4.45 4.45 0 0 0 2.5 4.54a4.44 4.44 0 0 0 5.08-.9c16.39-16.51 36.37-31.52 60.4-45.39l4.48-2.6C208 154.8 216.23 150 236 140.41l2.69-1.3a4 4 0 0 0 .64-6.83A179 179 0 0 0 219 119.55m15.26-28.1c3.44 1.87 7.09 4 10.9 6.29a189.3 189.3 0 0 1 29.57 22.39a4 4 0 0 0 4.28.76a672 672 0 0 1 69.65-25q7-2.07 14.08-4a4 4 0 0 0 2.53-5.62c-8.27-16.83-14.67-28.9-15.15-29.79A16 16 0 0 0 336 48c-1.91 0-33.28.36-76.87 21.3a279 279 0 0 0-26.39 14.51a4 4 0 0 0 .22 6.94Zm-24.93-30.66c7.3-4.77 14.74-9.22 22.25-13.31a2 2 0 0 0 .24-3.36c-26-19.57-49.73-27-51.15-27.42a16 16 0 0 0-17.56 5.82a217.6 217.6 0 0 0-19.28 32.38a2 2 0 0 0 1.29 2.81c13.61 3.57 29.4 8.29 45.61 14.29a2 2 0 0 0 1.79-.2Z"></svg:path>`,
})
export class FamiconsRoseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRoseOutlineIcon],svg[famicons-rose-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128c-18.9 4.25-36.8 8.94-53.7 13.95c-40.5 12-75.5 27.15-105.4 41.65c-19.3 9.37-26.2 13.51-51.5 28.23c-58.4 33.69-93.4 77.4-93.4 142.81C112 428.55 167.6 480 256 480s144-55.81 144-129.72S339 225.24 416 128"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M264 180.19c-19.69-27-38.2-38.69-52.7-46.59C162.6 107.1 96 96 96 96c41.5 43.7 37.2 90.1 32 128c0 0-3.87 32.88 1.91 58.41"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M372 139.15C356.55 102.6 336 64 336 64s-63.32 0-135.69 64m53.17-40.43C221.25 45.81 176 32 176 32c-15.3 20.8-28.79 51.58-34.87 74.17"></svg:path>`,
})
export class FamiconsRoseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsRoseSharpIcon],svg[famicons-rose-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 112s-17.62 0-30.51 1.39c-19 2-42.06 8-59.73 13.22c-35.06 10.39-69.33 23.92-107.85 42.59c-18.62 9.05-26 13.35-48 26.13l-4.5 2.67c-32.95 19-57.09 40-73.79 64.3C105.29 288.89 96 320 96 354.64c0 40.74 15.71 77.1 44.24 102.37C169 482.52 209.06 496 256 496c46.76 0 86.89-14.32 116-41.43c28.35-26.35 44-63.39 44-104.29c0-25-6.19-47-12.17-68.22c-12.59-44.69-23.46-83.29 24.71-144.13C432.75 132.62 448 112 448 112m-229 7.55C168.47 92.08 104.72 80 80 80c0 0 23.23 28.19 29.15 55.4s6.54 48.61 2.91 88.6c17.94-20.48 40.59-37.15 69.32-53.73l4.48-2.6C208 154.8 216.23 150 236 140.41c2.88-1.4 5.74-2.76 8.58-4.11A171 171 0 0 0 219 119.55M345.25 48s-42.53.36-86.12 21.3a280 280 0 0 0-32.27 18.27q3.73 1.89 7.4 3.88c3.44 1.87 7.09 4 10.9 6.29a189.7 189.7 0 0 1 31.46 24.16c24.57-10.41 73-26.1 90.77-31.28c-8-19.15-22.14-42.62-22.14-42.62M176 16c-16 10.83-33.24 41.1-33.24 41.1a494 494 0 0 1 48.92 15.25l17.65-11.56c8.18-5.35 16.55-10.29 25-14.77C234.31 46 202.59 24.17 176 16"></svg:path>`,
})
export class FamiconsRoseSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSadIcon],svg[famicons-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M184 208a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24m-23.67 149.83c12-40.3 50.2-69.83 95.62-69.83s83.62 29.53 95.71 69.83a8 8 0 0 1-7.82 10.17H168.15a8 8 0 0 1-7.82-10.17M328 256a24 24 0 1 1 24-24a23.94 23.94 0 0 1-24 24"></svg:path>`,
})
export class FamiconsSadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSadOutlineIcon],svg[famicons-sad-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="184" cy="232" r="24" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M256 288c45.42 0 83.62 29.53 95.71 69.83a8 8 0 0 1-7.87 10.17H168.15a8 8 0 0 1-7.82-10.17C172.32 317.53 210.53 288 256 288"></svg:path><svg:circle cx="328" cy="232" r="24" fill="currentColor"></svg:circle><svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class FamiconsSadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSadSharpIcon],svg[famicons-sad-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M328 208a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24m-144 0a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24m72 80c45.42 0 83.75 29.49 95.72 69.83c1 3.52 2.33 10.17 2.33 10.17H158s1.31-6.69 2.33-10.17C172.11 317.47 210.53 288 256 288"></svg:path>`,
})
export class FamiconsSadSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSaveIcon],svg[famicons-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m465.94 119.76l-73.7-73.7A47.68 47.68 0 0 0 358.3 32H96a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V153.7a47.68 47.68 0 0 0-14.06-33.94M120 112h176a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H120a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8m139.75 319.91a80 80 0 1 1 76.16-76.16a80.06 80.06 0 0 1-76.16 76.16"></svg:path><svg:circle cx="256" cy="352" r="48" fill="currentColor"></svg:circle>`,
})
export class FamiconsSaveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSaveOutlineIcon],svg[famicons-save-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M380.93 57.37A32 32 0 0 0 358.3 48H94.22A46.21 46.21 0 0 0 48 94.22v323.56A46.21 46.21 0 0 0 94.22 464h323.56A46.36 46.36 0 0 0 464 417.78V153.7a32 32 0 0 0-9.37-22.63ZM256 416a64 64 0 1 1 64-64a63.92 63.92 0 0 1-64 64m48-224H112a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16"></svg:path>`,
})
export class FamiconsSaveOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSaveSharpIcon],svg[famicons-save-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M380.44 32H64a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h384a32.09 32.09 0 0 0 32-32V131.56ZM112 176v-64h192v64Zm223.91 179.76a80 80 0 1 1-83.66-83.67a80.21 80.21 0 0 1 83.66 83.67"></svg:path>`,
})
export class FamiconsSaveSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsScaleIcon],svg[famicons-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 32H144A112.12 112.12 0 0 0 32 144v224a112.12 112.12 0 0 0 112 112h224a112.12 112.12 0 0 0 112-112V144A112.12 112.12 0 0 0 368 32m36.21 178l-33.32 39.21A41.76 41.76 0 0 1 339 264.05a42.3 42.3 0 0 1-22.29-6.38c-14.22-8.78-36.3-19.25-60.69-19.25s-46.47 10.47-60.69 19.25a41.86 41.86 0 0 1-54.2-8.46L107.79 210a50.48 50.48 0 0 1 4.49-70.27c27.84-25.35 75.37-55.57 143.72-55.57s115.88 30.22 143.72 55.57a50.48 50.48 0 0 1 4.49 70.27"></svg:path>`,
})
export class FamiconsScaleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsScaleOutlineIcon],svg[famicons-scale-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="416" x="48" y="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="96"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M388.94 151.56c-24.46-22.28-68.72-51.4-132.94-51.4s-108.48 29.12-132.94 51.4a34.66 34.66 0 0 0-3.06 48.08l33.32 39.21a26.07 26.07 0 0 0 33.6 5.21c15.92-9.83 40.91-21.64 69.1-21.64s53.18 11.81 69.1 21.64a26.07 26.07 0 0 0 33.6-5.21L392 199.64a34.66 34.66 0 0 0-3.06-48.08Z"></svg:path>`,
})
export class FamiconsScaleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsScaleSharpIcon],svg[famicons-scale-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 32H80a48.05 48.05 0 0 0-48 48v352a48.05 48.05 0 0 0 48 48h352a48.05 48.05 0 0 0 48-48V80a48.05 48.05 0 0 0-48-48m-16.71 165l-52.46 61.73a27.83 27.83 0 0 1-37.65 4.62c-13-9.29-39.27-24.89-69.18-24.89s-56.18 15.6-69.18 24.89a27.84 27.84 0 0 1-37.65-4.62L96.71 197a32.12 32.12 0 0 1 .42-42c18.93-21.31 72.3-70.87 158.87-70.87S395.94 133.72 414.87 155a32.12 32.12 0 0 1 .42 42"></svg:path>`,
})
export class FamiconsScaleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsScanIcon],svg[famicons-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M342 444h46a56 56 0 0 0 56-56v-46m0-172v-46a56 56 0 0 0-56-56h-46M170 444h-46a56 56 0 0 1-56-56v-46m0-172v-46a56 56 0 0 1 56-56h46"></svg:path>`,
})
export class FamiconsScanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsScanCircleIcon],svg[famicons-scan-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-40 320h-28a44.05 44.05 0 0 1-44-44v-28a16 16 0 0 1 32 0v28a12 12 0 0 0 12 12h28a16 16 0 0 1 0 32m0-192h-28a12 12 0 0 0-12 12v28a16 16 0 0 1-32 0v-28a44.05 44.05 0 0 1 44-44h28a16 16 0 0 1 0 32m152 148a44.05 44.05 0 0 1-44 44h-28a16 16 0 0 1 0-32h28a12 12 0 0 0 12-12v-28a16 16 0 0 1 32 0Zm0-108a16 16 0 0 1-32 0v-28a12 12 0 0 0-12-12h-28a16 16 0 0 1 0-32h28a44.05 44.05 0 0 1 44 44Z"></svg:path>`,
})
export class FamiconsScanCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsScanCircleOutlineIcon],svg[famicons-scan-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M296 352h28a28 28 0 0 0 28-28v-28m0-80v-28a28 28 0 0 0-28-28h-28m-80 192h-28a28 28 0 0 1-28-28v-28m0-80v-28a28 28 0 0 1 28-28h28"></svg:path>`,
})
export class FamiconsScanCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsScanCircleSharpIcon],svg[famicons-scan-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-24 320h-44a44.05 44.05 0 0 1-44-44v-44h32v44a12 12 0 0 0 12 12h44Zm0-192h-44a12 12 0 0 0-12 12v44h-32v-44a44.05 44.05 0 0 1 44-44h44Zm136 148a44.05 44.05 0 0 1-44 44h-44v-32h44a12 12 0 0 0 12-12v-44h32Zm0-92h-32v-44a12 12 0 0 0-12-12h-44v-32h44a44.05 44.05 0 0 1 44 44Z"></svg:path>`,
})
export class FamiconsScanCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsScanOutlineIcon],svg[famicons-scan-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 448h56a56 56 0 0 0 56-56v-56m0-160v-56a56 56 0 0 0-56-56h-56M176 448h-56a56 56 0 0 1-56-56v-56m0-160v-56a56 56 0 0 1 56-56h56"></svg:path>`,
})
export class FamiconsScanOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsScanSharpIcon],svg[famicons-scan-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M388 466h-68v-44h68a34 34 0 0 0 34-34v-68h44v68a78.09 78.09 0 0 1-78 78m78-274h-44v-68a34 34 0 0 0-34-34h-68V46h68a78.09 78.09 0 0 1 78 78ZM192 466h-68a78.09 78.09 0 0 1-78-78v-68h44v68a34 34 0 0 0 34 34h68ZM90 192H46v-68a78.09 78.09 0 0 1 78-78h68v44h-68a34 34 0 0 0-34 34Z"></svg:path>`,
})
export class FamiconsScanSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSchoolIcon],svg[famicons-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 368a16 16 0 0 1-7.94-2.11L108 285.84a8 8 0 0 0-12 6.94V368a16 16 0 0 0 8.23 14l144 80a16 16 0 0 0 15.54 0l144-80a16 16 0 0 0 8.23-14v-75.22a8 8 0 0 0-12-6.94l-140.06 80.05A16 16 0 0 1 256 368"></svg:path><svg:path fill="currentColor" d="M495.92 190.5v-.11a16 16 0 0 0-8-12.28l-224-128a16 16 0 0 0-15.88 0l-224 128a16 16 0 0 0 0 27.78l224 128a16 16 0 0 0 15.88 0L461 221.28a2 2 0 0 1 3 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 0 0 496 368V192a15 15 0 0 0-.08-1.5"></svg:path>`,
})
export class FamiconsSchoolIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSchoolOutlineIcon],svg[famicons-school-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 192L256 64l224 128l-224 128z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 240v128l144 80l144-80V240m80 128V192M256 320v128"></svg:path>`,
})
export class FamiconsSchoolOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSchoolSharpIcon],svg[famicons-school-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 370.43L96 279v98.42l160 88.88l160-88.88V279z"></svg:path><svg:path fill="currentColor" d="M512.25 192L256 45.57L-.25 192L256 338.43l208-118.86V384h48V192.14z"></svg:path>`,
})
export class FamiconsSchoolSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSearchIcon],svg[famicons-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M456.69 421.39L362.6 327.3a173.8 173.8 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.8 173.8 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3M97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8"></svg:path>`,
})
export class FamiconsSearchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSearchCircleIcon],svg[famicons-search-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192s192-86.13 192-192S361.87 64 256 64m91.31 283.31a16 16 0 0 1-22.62 0l-42.84-42.83a88.08 88.08 0 1 1 22.63-22.63l42.83 42.84a16 16 0 0 1 0 22.62"></svg:path><svg:circle cx="232" cy="232" r="56" fill="currentColor"></svg:circle>`,
})
export class FamiconsSearchCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSearchCircleOutlineIcon],svg[famicons-search-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M232 160a72 72 0 1 0 72 72a72 72 0 0 0-72-72Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M283.64 283.64L336 336"></svg:path>`,
})
export class FamiconsSearchCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSearchCircleSharpIcon],svg[famicons-search-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192s192-86.13 192-192S361.87 64 256 64m80 294.63l-54.15-54.15a88.08 88.08 0 1 1 22.63-22.63L358.63 336Z"></svg:path><svg:circle cx="232" cy="232" r="56" fill="currentColor"></svg:circle>`,
})
export class FamiconsSearchCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSearchOutlineIcon],svg[famicons-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"></svg:path>`,
})
export class FamiconsSearchOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSearchSharpIcon],svg[famicons-search-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 428L339.92 303.9a160.48 160.48 0 0 0 30.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0 0 94.58-30.72L428 464ZM209.32 319.69a110.38 110.38 0 1 1 110.37-110.37a110.5 110.5 0 0 1-110.37 110.37"></svg:path>`,
})
export class FamiconsSearchSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSendIcon],svg[famicons-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52A24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4a24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8"></svg:path>`,
})
export class FamiconsSendIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSendOutlineIcon],svg[famicons-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M470.3 271.15L43.16 447.31a7.83 7.83 0 0 1-11.16-7V327a8 8 0 0 1 6.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 0 1-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 0 1 0 29.39"></svg:path>`,
})
export class FamiconsSendOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSendSharpIcon],svg[famicons-send-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 464l480-208L16 48v160l320 48l-320 48Z"></svg:path>`,
})
export class FamiconsSendSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsServerIcon],svg[famicons-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 428c-52.35 0-111.39-11.61-157.93-31c-17.07-7.19-31.69-18.82-43.64-28a4 4 0 0 0-6.43 3.18v12.58c0 28.07 23.49 53.22 66.14 70.82C152.29 471.33 202.67 480 256 480s103.7-8.67 141.86-24.42C440.51 438 464 412.83 464 384.76v-12.58a4 4 0 0 0-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 28c-46.54 19.39-105.57 31-157.92 31m208-301.49c-.81-27.65-24.18-52.4-66-69.85C359.74 40.76 309.34 32 256 32s-103.74 8.76-141.91 24.66c-41.78 17.41-65.15 42.11-66 69.69L48 144c0 6.41 5.2 16.48 14.63 24.73c11.13 9.73 27.65 19.33 47.78 27.73C153.24 214.36 207.67 225 256 225s102.76-10.68 145.59-28.58c20.13-8.4 36.65-18 47.78-27.73C458.8 160.49 464 150.42 464 144Z"></svg:path><svg:path fill="currentColor" d="M413.92 226c-46.53 19.43-105.57 31-157.92 31s-111.39-11.57-157.93-31c-17.07-7.15-31.69-18.79-43.64-28a4 4 0 0 0-6.43 3.22V232c0 6.41 5.2 14.48 14.63 22.73c11.13 9.74 27.65 19.33 47.78 27.74C153.24 300.34 207.67 311 256 311s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 246.47 464 238.41 464 232v-30.78a4 4 0 0 0-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.96"></svg:path><svg:path fill="currentColor" d="M413.92 312c-46.54 19.41-105.57 31-157.92 31s-111.39-11.59-157.93-31c-17.07-7.17-31.69-18.81-43.64-28a4 4 0 0 0-6.43 3.2V317c0 6.41 5.2 14.47 14.62 22.71c11.13 9.74 27.66 19.33 47.79 27.74C153.24 385.32 207.66 396 256 396s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 331.44 464 323.37 464 317v-29.8a4 4 0 0 0-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.98"></svg:path>`,
})
export class FamiconsServerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsServerOutlineIcon],svg[famicons-server-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="256" cy="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" rx="192" ry="80"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M448 214c0 44.18-86 80-192 80S64 258.18 64 214m384 86c0 44.18-86 80-192 80S64 344.18 64 300"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M64 127.24v257.52C64 428.52 150 464 256 464s192-35.48 192-79.24V127.24"></svg:path>`,
})
export class FamiconsServerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsServerSharpIcon],svg[famicons-server-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M409.43 389.87C362 410 305.4 421.05 256 421.05s-105.87-11.3-153.44-31.18S48 353.16 48 353.16v38.2c0 31.15 18 43.64 67.32 64.35C153.13 471.59 203.18 480 256 480s102.87-8.41 140.68-24.29C446 435 464 422.51 464 391.36v-38.2s-7.14 16.59-54.57 36.71M63.69 173.22c11.23 9.84 27.82 19.49 48 27.92c42.48 17.76 96.45 28.37 144.36 28.37s101.88-10.61 144.36-28.37c20.13-8.43 36.72-18.08 47.95-27.92c6.06-5.31 10.85-10.12 13.47-12.85a8 8 0 0 0 2.22-5.54v-26.16c-.84-28.79-24.71-54.41-67.21-72.14C358.83 40.71 308.84 32 256 32s-102.83 8.71-140.74 24.53C72.85 74.22 49 99.78 48.05 128.5v26.33a8 8 0 0 0 2.21 5.54c2.58 2.73 7.36 7.54 13.43 12.85"></svg:path><svg:path fill="currentColor" d="M409.43 221.91C365 241 305.4 253.09 256 253.09s-108.87-12.27-153.43-31.18S48 185.2 48 185.2v47.36c.08 7.52 5.5 16.2 15.69 25.13c11.24 9.84 27.82 19.5 48 27.92C154.12 303.38 208.09 314 256 314s101.88-10.6 144.36-28.37c20.13-8.42 36.72-18.08 47.95-27.92c10.25-9 15.68-17.71 15.69-25.27V185.2s-10.13 17.62-54.57 36.71"></svg:path><svg:path fill="currentColor" d="M409.43 306.38C362 326 305.4 337.56 256 337.56s-109.87-12.8-153.43-31.18S48 269.67 48 269.67v46.25c0 7.55 5.44 16.28 15.69 25.26c11.23 9.84 27.81 19.5 48 27.92c42.48 17.77 96.44 28.37 144.36 28.37s101.88-10.6 144.36-28.37c20.13-8.43 36.72-18.08 47.95-27.92c10.19-8.93 15.61-17.61 15.69-25.13v-46.38s-7.18 17.09-54.62 36.71"></svg:path>`,
})
export class FamiconsServerSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSettingsIcon],svg[famicons-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="48" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m470.39 300l-.47-.38l-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.6 1.6 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13l-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59l-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56l-5.57 39.67a16 16 0 0 1-8.13 11.82a175 175 0 0 0-10 5.82a15.92 15.92 0 0 1-14.43 1.27l-37.13-15l-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22l-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38l31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.6 1.6 0 0 1 .13.22a26.86 26.86 0 0 0 32.45 11.3l.35-.13l37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59l.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56l5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95l.35.14a26.85 26.85 0 0 0 32.48-11.34a3 3 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11m-134.48-40.24a80 80 0 1 1-83.66-83.67a80.21 80.21 0 0 1 83.66 83.67"></svg:path>`,
})
export class FamiconsSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSettingsOutlineIcon],svg[famicons-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4M416.39 256a154 154 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.5 164.5 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155 155 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.5 164.5 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155 155 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47"></svg:path>`,
})
export class FamiconsSettingsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSettingsSharpIcon],svg[famicons-settings-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 176a80 80 0 1 0 80 80a80.24 80.24 0 0 0-80-80m172.72 80a165.5 165.5 0 0 1-1.64 22.34l48.69 38.12a11.59 11.59 0 0 1 2.63 14.78l-46.06 79.52a11.64 11.64 0 0 1-14.14 4.93l-57.25-23a176.6 176.6 0 0 1-38.82 22.67l-8.56 60.78a11.93 11.93 0 0 1-11.51 9.86h-92.12a12 12 0 0 1-11.51-9.53l-8.56-60.78A169.3 169.3 0 0 1 151.05 393L93.8 416a11.64 11.64 0 0 1-14.14-4.92L33.6 331.57a11.59 11.59 0 0 1 2.63-14.78l48.69-38.12A175 175 0 0 1 83.28 256a165.5 165.5 0 0 1 1.64-22.34l-48.69-38.12a11.59 11.59 0 0 1-2.63-14.78l46.06-79.52a11.64 11.64 0 0 1 14.14-4.93l57.25 23a176.6 176.6 0 0 1 38.82-22.67l8.56-60.78A11.93 11.93 0 0 1 209.94 26h92.12a12 12 0 0 1 11.51 9.53l8.56 60.78A169.3 169.3 0 0 1 361 119l57.2-23a11.64 11.64 0 0 1 14.14 4.92l46.06 79.52a11.59 11.59 0 0 1-2.63 14.78l-48.69 38.12a175 175 0 0 1 1.64 22.66"></svg:path>`,
})
export class FamiconsSettingsSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShapesIcon],svg[famicons-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 336H32a16 16 0 0 1-14-23.81l152-272a16 16 0 0 1 27.94 0l152 272A16 16 0 0 1 336 336"></svg:path><svg:path fill="currentColor" d="M336 160a161 161 0 0 0-32.57 3.32l74.47 133.27A48 48 0 0 1 336 368H183.33A160 160 0 1 0 336 160"></svg:path>`,
})
export class FamiconsShapesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShapesOutlineIcon],svg[famicons-shapes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M336 320H32L184 48z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M265.32 194.51A144 144 0 1 1 192 320"></svg:path>`,
})
export class FamiconsShapesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShapesSharpIcon],svg[famicons-shapes-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363.27 336H4.73L184 16Z"></svg:path><svg:path fill="currentColor" d="M336 160a160.5 160.5 0 0 0-32.55 3.36l87.75 157L417.81 368H183.36C203.8 432.85 264.49 480 336 480c88.22 0 160-71.78 160-160s-71.78-160-160-160"></svg:path>`,
})
export class FamiconsShapesSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShareIcon],svg[famicons-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M376 176H272v145a16 16 0 0 1-32 0V176H136a56.06 56.06 0 0 0-56 56v192a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V232a56.06 56.06 0 0 0-56-56M272 86.63l52.69 52.68a16 16 0 0 0 22.62-22.62l-80-80a16 16 0 0 0-22.62 0l-80 80a16 16 0 0 0 22.62 22.62L240 86.63V176h32Z"></svg:path>`,
})
export class FamiconsShareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShareOutlineIcon],svg[famicons-share-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 192h40a40 40 0 0 1 40 40v192a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V232a40 40 0 0 1 40-40h40m160-64l-80-80l-80 80m80 193V48"></svg:path>`,
})
export class FamiconsShareOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShareSharpIcon],svg[famicons-share-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 176v161h-32V176H92a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12Zm0-83.37l64 64L358.63 134L256 31.37L153.37 134L176 156.63l64-64V176h32z"></svg:path>`,
})
export class FamiconsShareSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShareSocialIcon],svg[famicons-share-social-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336"></svg:path>`,
})
export class FamiconsShareSocialIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShareSocialOutlineIcon],svg[famicons-share-social-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="128" cy="256" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="384" cy="112" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="384" cy="400" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m169.83 279.53l172.34 96.94m0-240.94l-172.34 96.94"></svg:path>`,
})
export class FamiconsShareSocialOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShareSocialSharpIcon],svg[famicons-share-social-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M378 324a69.78 69.78 0 0 0-48.83 19.91L202 272.41a69.7 69.7 0 0 0 0-32.82l127.13-71.5A69.76 69.76 0 1 0 308.87 129l-130.13 73.2a70 70 0 1 0 0 107.56L308.87 383A70 70 0 1 0 378 324"></svg:path>`,
})
export class FamiconsShareSocialSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShieldIcon],svg[famicons-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M479.07 111.35a16 16 0 0 0-13.15-14.75C379.89 81.18 343.69 69.12 266 34.16c-7.76-2.89-12.57-2.84-20 0c-77.69 35-113.89 47-199.92 62.44a16 16 0 0 0-13.15 14.75c-3.85 61.1 4.34 118 24.36 169.15a348.9 348.9 0 0 0 71.43 112.41c44.67 47.43 94.2 75.12 119.74 85.6a20 20 0 0 0 15.11 0c27-10.92 74.69-37.82 119.71-85.62a348.9 348.9 0 0 0 71.43-112.39c20.02-51.14 28.21-108.05 24.36-169.15"></svg:path>`,
})
export class FamiconsShieldIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShieldCheckmarkIcon],svg[famicons-shield-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M479.07 111.36a16 16 0 0 0-13.15-14.74c-86.5-15.52-122.61-26.74-203.33-63.2a16 16 0 0 0-13.18 0C168.69 69.88 132.58 81.1 46.08 96.62a16 16 0 0 0-13.15 14.74c-3.85 61.11 4.36 118.05 24.43 169.24A349.5 349.5 0 0 0 129 393.11c53.47 56.73 110.24 81.37 121.07 85.73a16 16 0 0 0 12 0c10.83-4.36 67.6-29 121.07-85.73a349.5 349.5 0 0 0 71.5-112.51c20.07-51.19 28.28-108.13 24.43-169.24m-131 75.11l-110.8 128a16 16 0 0 1-11.41 5.53h-.66a16 16 0 0 1-11.2-4.57l-49.2-48.2a16 16 0 1 1 22.4-22.86l37 36.29l99.7-115.13a16 16 0 0 1 24.2 20.94Z"></svg:path>`,
})
export class FamiconsShieldCheckmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShieldCheckmarkOutlineIcon],svg[famicons-shield-checkmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 176L225.2 304L176 255.8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63"></svg:path>`,
})
export class FamiconsShieldCheckmarkOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShieldCheckmarkSharpIcon],svg[famicons-shield-checkmark-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m479.07 111.36l-.79-12.53l-12.36-2.21c-86.5-15.52-122.61-26.74-203.33-63.2l-6.59-3l-6.59 3C168.69 69.88 132.58 81.1 46.08 96.62l-12.36 2.21l-.79 12.53c-3.85 61.11 4.36 118.05 24.43 169.24A349.5 349.5 0 0 0 129 393.11c53.47 56.73 110.24 81.37 121.07 85.73l6 2.41l6-2.41c10.83-4.36 67.6-29 121.07-85.73a349.5 349.5 0 0 0 71.5-112.51c20.07-51.19 28.28-108.13 24.43-169.24m-252.91 216L153.37 256l22.4-22.86l48.47 47.49l110.13-127.2l24.2 20.94Z"></svg:path>`,
})
export class FamiconsShieldCheckmarkSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShieldHalfIcon],svg[famicons-shield-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48.9 112.37C138.32 96.33 175.29 84.45 256 48c80.71 36.45 117.68 48.33 207.1 64.37C479.3 369.13 271.42 457.79 256 464c-15.42-6.21-223.3-94.87-207.1-351.63"></svg:path><svg:path fill="currentColor" d="M256 48c80.71 36.45 117.68 48.33 207.1 64.37C479.3 369.13 271.42 457.79 256 464Z"></svg:path>`,
})
export class FamiconsShieldHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShieldHalfOutlineIcon],svg[famicons-shield-half-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63"></svg:path><svg:path fill="currentColor" d="M256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464Z"></svg:path>`,
})
export class FamiconsShieldHalfOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShieldHalfSharpIcon],svg[famicons-shield-half-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C174 69.06 121.38 86.46 32 96c0 77.59 5.27 133.36 25.29 184.51a348.9 348.9 0 0 0 71.43 112.41c49.6 52.66 104.17 80.4 127.28 87.08c23.11-6.68 77.68-34.42 127.28-87.08a348.9 348.9 0 0 0 71.43-112.41C474.73 229.36 480 173.59 480 96c-89.38-9.54-142-26.94-224-64m161.47 233.93a309.2 309.2 0 0 1-63.31 99.56C316 406 276.65 428.31 256 437.36V75.8c38.75 17 68.73 28.3 97.93 36.89a613 613 0 0 0 85.6 18.52c-1.72 60.22-8.36 99.69-22.06 134.72"></svg:path>`,
})
export class FamiconsShieldHalfSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShieldOutlineIcon],svg[famicons-shield-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63"></svg:path>`,
})
export class FamiconsShieldOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShieldSharpIcon],svg[famicons-shield-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C174 69.06 121.38 86.46 32 96c0 77.59 5.27 133.36 25.29 184.51a348.9 348.9 0 0 0 71.43 112.41c49.6 52.66 104.17 80.4 127.28 87.08c23.11-6.68 77.68-34.42 127.28-87.08a348.9 348.9 0 0 0 71.43-112.41C474.73 229.36 480 173.59 480 96c-89.38-9.54-142-26.94-224-64"></svg:path>`,
})
export class FamiconsShieldSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShirtIcon],svg[famicons-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 96c33.08 0 60.71-25.78 64-58c.3-3-3-6-6-6a13 13 0 0 0-4.74.9c-.2.08-21.1 8.1-53.26 8.1s-53.1-8-53.26-8.1a16.2 16.2 0 0 0-5.3-.9h-.06a5.69 5.69 0 0 0-5.38 6c3.35 32.16 31 58 64 58"></svg:path><svg:path fill="currentColor" d="M485.29 89.9L356 44.64a4 4 0 0 0-5.27 3.16a96 96 0 0 1-189.38 0a4 4 0 0 0-5.35-3.16L26.71 89.9A16 16 0 0 0 16.28 108l16.63 88a16 16 0 0 0 13.92 12.9l48.88 5.52a8 8 0 0 1 7.1 8.19l-7.33 240.9a16 16 0 0 0 9.1 14.94A17.5 17.5 0 0 0 112 480h288a17.5 17.5 0 0 0 7.42-1.55a16 16 0 0 0 9.1-14.94l-7.33-240.9a8 8 0 0 1 7.1-8.19l48.88-5.52a16 16 0 0 0 13.92-12.9l16.63-88a16 16 0 0 0-10.43-18.1"></svg:path>`,
})
export class FamiconsShirtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShirtOutlineIcon],svg[famicons-shirt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M314.56 48s-22.78 8-58.56 8s-58.56-8-58.56-8a32 32 0 0 0-10.57 1.8L32 104l16.63 88l48.88 5.52a24 24 0 0 1 21.29 24.58L112 464h288l-6.8-241.9a24 24 0 0 1 21.29-24.58l48.88-5.52L480 104L325.13 49.8a32 32 0 0 0-10.57-1.8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M333.31 52.66a80 80 0 0 1-154.62 0"></svg:path>`,
})
export class FamiconsShirtOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShirtSharpIcon],svg[famicons-shirt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 42c-33.88 0-64-10-64-10v2a64 64 0 0 0 128 0v-2s-30.12 10-64 10"></svg:path><svg:path fill="currentColor" d="M352 44c-5.49 47.76-46.79 85-96 85s-90.51-37.24-96-85L16 94l18 114l61.71 7.42c7.08.9 7.1.9 7.1 8.19L96 480h320l-6.81-256.39c-.21-7-.21-7 7.1-8.19L478 208l18-114Z"></svg:path>`,
})
export class FamiconsShirtSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShuffleIcon],svg[famicons-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 304l48 48l-48 48m0-288l48 48l-48 48M64 352h85.19a80 80 0 0 0 66.56-35.62L256 256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 160h85.19a80 80 0 0 1 66.56 35.62l80.5 120.76A80 80 0 0 0 362.81 352H416m0-192h-53.19a80 80 0 0 0-66.56 35.62L288 208"></svg:path>`,
})
export class FamiconsShuffleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShuffleOutlineIcon],svg[famicons-shuffle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 304l48 48l-48 48m0-288l48 48l-48 48M64 352h85.19a80 80 0 0 0 66.56-35.62L256 256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 160h85.19a80 80 0 0 1 66.56 35.62l80.5 120.76A80 80 0 0 0 362.81 352H416m0-192h-53.19a80 80 0 0 0-66.56 35.62L288 208"></svg:path>`,
})
export class FamiconsShuffleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsShuffleSharpIcon],svg[famicons-shuffle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m400 304l48 48l-48 48m0-288l48 48l-48 48M64 352h128l60-92"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M64 160h128l128 192h96m0-192h-96l-32 48"></svg:path>`,
})
export class FamiconsShuffleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSkullIcon],svg[famicons-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M402 76.94C362.61 37.63 310.78 16 256 16h-.37A208 208 0 0 0 48 224v100.67A79.62 79.62 0 0 0 98.29 399l23.71 9.42a15.92 15.92 0 0 1 9.75 11.72l10 50.13A32.09 32.09 0 0 0 173.12 496H184a8 8 0 0 0 8-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 224 448v40a8 8 0 0 0 8 8a8 8 0 0 0 8-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 448v40a8 8 0 0 0 8 8a8 8 0 0 0 8-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 320 448v40a8 8 0 0 0 8 8h10.88a32.09 32.09 0 0 0 31.38-25.72l10-50.14a16 16 0 0 1 9.74-11.72l23.71-9.42A79.62 79.62 0 0 0 464 324.67v-99c0-56-22-108.81-62-148.73M171.66 335.88a56 56 0 1 1 52.22-52.22a56 56 0 0 1-52.22 52.22M281 397.25a16.37 16.37 0 0 1-9.3 2.75h-31.4a16.37 16.37 0 0 1-9.28-2.75a16 16 0 0 1-6.6-16.9l15.91-47.6C243 326 247.25 321 254 320.13c8.26-1 14 2.87 17.61 12.22l16 48a16 16 0 0 1-6.61 16.9m66.68-61.37a56 56 0 1 1 52.22-52.22a56 56 0 0 1-52.24 52.22Z"></svg:path>`,
})
export class FamiconsSkullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSkullOutlineIcon],svg[famicons-skull-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M448 225.64v99a64 64 0 0 1-40.23 59.42l-23.68 9.47A32 32 0 0 0 364.6 417l-10 50.14A16 16 0 0 1 338.88 480H173.12a16 16 0 0 1-15.69-12.86L147.4 417a32 32 0 0 0-19.49-23.44l-23.68-9.47A64 64 0 0 1 64 324.67V224c0-105.92 85.77-191.81 191.65-192S448 119.85 448 225.64Z"></svg:path><svg:circle cx="168" cy="280" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="344" cy="280" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m256 336l-16 48h32zm0 112v32m-48-32v32m96-32v32"></svg:path>`,
})
export class FamiconsSkullOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSkullSharpIcon],svg[famicons-skull-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16C141.31 16 48 109.31 48 224v154.83l82 32.81L146.88 496H192v-64h32v64h16v-64h32v64h16v-64h32v64h45.12L382 411.64l82-32.81V224c0-114.69-93.31-208-208-208m-88 320a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56m51.51 64L244 320h24l24.49 80ZM344 336a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56m104 32"></svg:path>`,
})
export class FamiconsSkullSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSnowIcon],svg[famicons-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m461 349l-34-19.64a89.5 89.5 0 0 1 20.94-16a22 22 0 0 0-21.28-38.51a133.6 133.6 0 0 0-38.55 32.1L300 256l88.09-50.86a133.5 133.5 0 0 0 38.55 32.1a22 22 0 1 0 21.28-38.51a89.7 89.7 0 0 1-20.94-16l34-19.64A22 22 0 1 0 439 125l-34 19.63a89.7 89.7 0 0 1-3.42-26.15A22 22 0 0 0 380 96h-.41a22 22 0 0 0-22 21.59a133.6 133.6 0 0 0 8.5 49.41L278 217.89V116.18a133.5 133.5 0 0 0 47.07-17.33a22 22 0 0 0-22.71-37.69A89.6 89.6 0 0 1 278 71.27V38a22 22 0 0 0-44 0v33.27a89.6 89.6 0 0 1-24.36-10.11a22 22 0 1 0-22.71 37.69A133.5 133.5 0 0 0 234 116.18v101.71L145.91 167a133.6 133.6 0 0 0 8.52-49.43a22 22 0 0 0-22-21.59H132a22 22 0 0 0-21.59 22.41a89.7 89.7 0 0 1-3.41 26.19L73 125a22 22 0 1 0-22 38.1l34 19.64a89.7 89.7 0 0 1-20.94 16a22 22 0 1 0 21.28 38.51a133.6 133.6 0 0 0 38.55-32.1L212 256l-88.09 50.86a133.6 133.6 0 0 0-38.55-32.1a22 22 0 1 0-21.28 38.51a89.7 89.7 0 0 1 20.94 16L51 349a22 22 0 1 0 22 38.1l34-19.63a89.7 89.7 0 0 1 3.42 26.15A22 22 0 0 0 132 416h.41a22 22 0 0 0 22-21.59a133.6 133.6 0 0 0-8.5-49.41L234 294.11v101.71a133.5 133.5 0 0 0-47.07 17.33a22 22 0 1 0 22.71 37.69A89.6 89.6 0 0 1 234 440.73V474a22 22 0 0 0 44 0v-33.27a89.6 89.6 0 0 1 24.36 10.11a22 22 0 0 0 22.71-37.69A133.5 133.5 0 0 0 278 395.82V294.11L366.09 345a133.6 133.6 0 0 0-8.52 49.43a22 22 0 0 0 22 21.59h.43a22 22 0 0 0 21.59-22.41a89.7 89.7 0 0 1 3.41-26.19l34 19.63A22 22 0 1 0 461 349"></svg:path>`,
})
export class FamiconsSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSnowOutlineIcon],svg[famicons-snow-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 32v448m57.72-400A111.47 111.47 0 0 1 256 96a111.47 111.47 0 0 1-57.72-16m0 352a112.11 112.11 0 0 1 115.44 0m136.27-288L62.01 368m375.26-150a112.09 112.09 0 0 1-57.71-100M74.73 294a112.09 112.09 0 0 1 57.71 100M62.01 144l387.98 224M74.73 218a112.09 112.09 0 0 0 57.71-100m304.83 176a112.09 112.09 0 0 0-57.71 100"></svg:path>`,
})
export class FamiconsSnowOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSnowSharpIcon],svg[famicons-snow-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m447.88 313.27l19.25-10.64l-21.28-38.51l-19.25 10.64a133.4 133.4 0 0 0-38.54 32.1L300 256l88.07-50.86a133.4 133.4 0 0 0 38.54 32.1l19.25 10.64l21.28-38.51l-19.25-10.64a89.3 89.3 0 0 1-20.93-16L480 152.05L458 114l-53 30.58a89 89 0 0 1-3.42-26.15l.41-22l-44-.82l-.41 22a133.6 133.6 0 0 0 8.49 49.39L278 217.89V116.18a133.5 133.5 0 0 0 47.06-17.33L343.9 87.5l-22.71-37.69l-18.84 11.35A89.5 89.5 0 0 1 278 71.27V16h-44v55.27a89.5 89.5 0 0 1-24.35-10.11l-18.84-11.35L168.1 87.5l18.84 11.35A133.5 133.5 0 0 0 234 116.18v101.71L145.93 167a133.6 133.6 0 0 0 8.53-49.43l-.41-22l-44 .82l.41 22a89 89 0 0 1-3.42 26.15L54 114l-22 38.1l53.05 30.64a89.3 89.3 0 0 1-20.93 16l-19.25 10.63l21.28 38.51l19.25-10.64a133.4 133.4 0 0 0 38.54-32.1L212 256l-88.07 50.86a133.4 133.4 0 0 0-38.54-32.1l-19.24-10.64l-21.28 38.51l19.25 10.64a89.3 89.3 0 0 1 20.93 16L32 360l22 38.1l53.05-30.63a89 89 0 0 1 3.42 26.15l-.41 22l44 .82l.41-22a133.6 133.6 0 0 0-8.54-49.44L234 294.11v101.71a133.5 133.5 0 0 0-47.06 17.33L168.1 424.5l22.71 37.69l18.84-11.35A89.5 89.5 0 0 1 234 440.73V496h44v-55.27a89.5 89.5 0 0 1 24.35 10.11l18.84 11.35l22.71-37.69l-18.84-11.35A133.5 133.5 0 0 0 278 395.82V294.11L366.07 345a133.6 133.6 0 0 0-8.53 49.43l.41 22l44-.82l-.41-22a89 89 0 0 1 3.46-26.19l53 30.63L480 360l-53-30.69a89.3 89.3 0 0 1 20.88-16.04"></svg:path>`,
})
export class FamiconsSnowSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSparklesIcon],svg[famicons-sparkles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 512a24.84 24.84 0 0 1-23.34-16l-39.84-103.6a16.06 16.06 0 0 0-9.19-9.19L32 343.34a25 25 0 0 1 0-46.68l103.6-39.84a16.06 16.06 0 0 0 9.19-9.19L184.66 144a25 25 0 0 1 46.68 0l39.84 103.6a16.06 16.06 0 0 0 9.19 9.19l103 39.63a25.49 25.49 0 0 1 16.63 24.1a24.82 24.82 0 0 1-16 22.82l-103.6 39.84a16.06 16.06 0 0 0-9.19 9.19L231.34 496A24.84 24.84 0 0 1 208 512M88 176a14.67 14.67 0 0 1-13.69-9.4l-16.86-43.84a7.28 7.28 0 0 0-4.21-4.21L9.4 101.69a14.67 14.67 0 0 1 0-27.38l43.84-16.86a7.3 7.3 0 0 0 4.21-4.21L74.16 9.79A15 15 0 0 1 86.23.11a14.67 14.67 0 0 1 15.46 9.29l16.86 43.84a7.3 7.3 0 0 0 4.21 4.21l43.84 16.86a14.67 14.67 0 0 1 0 27.38l-43.84 16.86a7.28 7.28 0 0 0-4.21 4.21l-16.86 43.84A14.67 14.67 0 0 1 88 176m312 80a16 16 0 0 1-14.93-10.26l-22.84-59.37a8 8 0 0 0-4.6-4.6l-59.37-22.84a16 16 0 0 1 0-29.86l59.37-22.84a8 8 0 0 0 4.6-4.6l22.67-58.95a16.45 16.45 0 0 1 13.17-10.57a16 16 0 0 1 16.86 10.15l22.84 59.37a8 8 0 0 0 4.6 4.6l59.37 22.84a16 16 0 0 1 0 29.86l-59.37 22.84a8 8 0 0 0-4.6 4.6l-22.84 59.37A16 16 0 0 1 400 256"></svg:path>`,
})
export class FamiconsSparklesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSparklesOutlineIcon],svg[famicons-sparkles-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M259.92 262.91L216.4 149.77a9 9 0 0 0-16.8 0l-43.52 113.14a9 9 0 0 1-5.17 5.17L37.77 311.6a9 9 0 0 0 0 16.8l113.14 43.52a9 9 0 0 1 5.17 5.17l43.52 113.14a9 9 0 0 0 16.8 0l43.52-113.14a9 9 0 0 1 5.17-5.17l113.14-43.52a9 9 0 0 0 0-16.8l-113.14-43.52a9 9 0 0 1-5.17-5.17M108 68L88 16L68 68L16 88l52 20l20 52l20-52l52-20zm318.67 49.33L400 48l-26.67 69.33L304 144l69.33 26.67L400 240l26.67-69.33L496 144z"></svg:path>`,
})
export class FamiconsSparklesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSparklesSharpIcon],svg[famicons-sparkles-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m208 512l-52.38-139.62L16 320l139.62-52.38L208 128l52.38 139.62L400 320l-139.62 52.38ZM88 176l-23.57-64.43L0 88l64.43-23.57L88 0l23.57 64.43L176 88l-64.43 23.57Zm312 80l-31.11-80.89L288 144l80.89-31.11L400 32l31.11 80.89L512 144l-80.89 31.11Z"></svg:path>`,
})
export class FamiconsSparklesSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSpeedometerIcon],svg[famicons-speedometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M425.7 118.25A240 240 0 0 0 76.32 447l.18.2c.33.35.64.71 1 1.05c.74.84 1.58 1.79 2.57 2.78a41.17 41.17 0 0 0 60.36-.42a157.13 157.13 0 0 1 231.26 0a41.18 41.18 0 0 0 60.65.06l3.21-3.5l.18-.2a239.93 239.93 0 0 0-10-328.76ZM240 128a16 16 0 0 1 32 0v32a16 16 0 0 1-32 0ZM128 304H96a16 16 0 0 1 0-32h32a16 16 0 0 1 0 32m48.8-95.2a16 16 0 0 1-22.62 0l-22.63-22.62a16 16 0 0 1 22.63-22.63l22.62 22.63a16 16 0 0 1 0 22.62m149.3 23.1l-47.5 75.5a31 31 0 0 1-7 7a30.11 30.11 0 0 1-35-49l75.5-47.5a10.23 10.23 0 0 1 11.7 0a10.06 10.06 0 0 1 2.3 14m31.72-23.1a16 16 0 0 1-22.62-22.62l22.62-22.63a16 16 0 0 1 22.63 22.63ZM416 304h-32a16 16 0 0 1 0-32h32a16 16 0 0 1 0 32"></svg:path>`,
})
export class FamiconsSpeedometerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSpeedometerOutlineIcon],svg[famicons-speedometer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m326.1 231.9l-47.5 75.5a31 31 0 0 1-7 7a30.11 30.11 0 0 1-35-49l75.5-47.5a10.23 10.23 0 0 1 11.7 0a10.06 10.06 0 0 1 2.3 14"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0 0 56.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0 0 37.1-.1a173.13 173.13 0 0 1 254.8 0a25.19 25.19 0 0 0 37.1.1l3.2-3.5A223.18 223.18 0 0 0 480 287.9C480 164.2 379.7 64 256 64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 128v32m160 128h-32m-256 0H96m69.49-90.51l-22.63-22.63m203.65 22.63l22.63-22.63"></svg:path>`,
})
export class FamiconsSpeedometerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSpeedometerSharpIcon],svg[famicons-speedometer-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C123.46 48 16 156.55 16 290.56a243.3 243.3 0 0 0 60.32 160.87c1.18 1.3 2.25 2.6 3.43 3.79C89.2 464 92.07 464 99.57 464s12.43 0 19.93-8.88C152 416.64 202 400 256 400s104.07 16.71 136.5 55.12C400 464 404.82 464 412.43 464s11.3 0 19.82-8.78c1.22-1.25 2.25-2.49 3.43-3.79A243.3 243.3 0 0 0 496 290.56C496 156.55 388.54 48 256 48m-16 64h32v64h-32Zm-96 192H80v-32h64Zm21.49-83.88l-45.25-45.26l22.62-22.62l45.26 45.25ZM278.6 307.4a31 31 0 0 1-7 7a30.11 30.11 0 0 1-35-49L320 224Zm45.28-109.91l45.26-45.25l22.62 22.62l-45.25 45.26ZM432 304h-64v-32h64Z"></svg:path>`,
})
export class FamiconsSpeedometerSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSquareIcon],svg[famicons-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 464H96a48.05 48.05 0 0 1-48-48V96a48.05 48.05 0 0 1 48-48h320a48.05 48.05 0 0 1 48 48v320a48.05 48.05 0 0 1-48 48"></svg:path>`,
})
export class FamiconsSquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSquareOutlineIcon],svg[famicons-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 448H96a32.09 32.09 0 0 1-32-32V96a32.09 32.09 0 0 1 32-32h320a32.09 32.09 0 0 1 32 32v320a32.09 32.09 0 0 1-32 32"></svg:path>`,
})
export class FamiconsSquareOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSquareSharpIcon],svg[famicons-square-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 48h416v416H48z"></svg:path>`,
})
export class FamiconsSquareSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStarIcon],svg[famicons-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"></svg:path>`,
})
export class FamiconsStarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStarHalfIcon],svg[famicons-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M480 208H308L256 48l-52 160H32l140 96l-54 160l138-100l138 100l-54-160Z"></svg:path><svg:path fill="currentColor" d="M256 48v316L118 464l54-160l-140-96h172z"></svg:path>`,
})
export class FamiconsStarHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStarHalfOutlineIcon],svg[famicons-star-half-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M480 208H308L256 48l-52 160H32l140 96l-54 160l138-100l138 100l-54-160Z"></svg:path><svg:path fill="currentColor" d="M256 48v316L118 464l54-160l-140-96h172z"></svg:path>`,
})
export class FamiconsStarHalfOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStarHalfSharpIcon],svg[famicons-star-half-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4l-58.5 171.3L256 373.84L404.29 480l-58.61-171.3ZM274.63 347.82L256 334.49v-200.1l26 78.91l7.24 22h105.39l-67.32 47.2l-19.69 13.81l7.78 22.75l26.26 76.75Z"></svg:path>`,
})
export class FamiconsStarHalfSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStarOutlineIcon],svg[famicons-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M480 208H308L256 48l-52 160H32l140 96l-54 160l138-100l138 100l-54-160Z"></svg:path>`,
})
export class FamiconsStarOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStarSharpIcon],svg[famicons-star-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4l-58.5 171.3L256 373.84L404.29 480l-58.61-171.3Z"></svg:path>`,
})
export class FamiconsStarSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStatsChartIcon],svg[famicons-stats-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 496H72a24 24 0 0 1-24-24V328a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v144a24 24 0 0 1-24 24m224 0h-32a24 24 0 0 1-24-24V232a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v240a24 24 0 0 1-24 24m112 0h-32a24 24 0 0 1-24-24V120a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v352a24 24 0 0 1-24 24m-224 0h-32a24 24 0 0 1-24-24V40a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v432a24 24 0 0 1-24 24"></svg:path>`,
})
export class FamiconsStatsChartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStatsChartOutlineIcon],svg[famicons-stats-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="48" height="160" x="64" y="320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="8" ry="8"></svg:rect><svg:rect width="48" height="256" x="288" y="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="8" ry="8"></svg:rect><svg:rect width="48" height="368" x="400" y="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="8" ry="8"></svg:rect><svg:rect width="48" height="448" x="176" y="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="8" ry="8"></svg:rect>`,
})
export class FamiconsStatsChartOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStatsChartSharpIcon],svg[famicons-stats-chart-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 496H48V304h80Zm224 0h-80V208h80Zm112 0h-80V96h80Zm-224 0h-80V16h80Z"></svg:path>`,
})
export class FamiconsStatsChartSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStopIcon],svg[famicons-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M392 432H120a40 40 0 0 1-40-40V120a40 40 0 0 1 40-40h272a40 40 0 0 1 40 40v272a40 40 0 0 1-40 40"></svg:path>`,
})
export class FamiconsStopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStopCircleIcon],svg[famicons-stop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m80 262.4a25.62 25.62 0 0 1-25.6 25.6H201.6a25.62 25.62 0 0 1-25.6-25.6V201.6a25.62 25.62 0 0 1 25.6-25.6h108.8a25.62 25.62 0 0 1 25.6 25.6Z"></svg:path>`,
})
export class FamiconsStopCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStopCircleOutlineIcon],svg[famicons-stop-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="M310.4 336H201.6a25.62 25.62 0 0 1-25.6-25.6V201.6a25.62 25.62 0 0 1 25.6-25.6h108.8a25.62 25.62 0 0 1 25.6 25.6v108.8a25.62 25.62 0 0 1-25.6 25.6"></svg:path>`,
})
export class FamiconsStopCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStopCircleSharpIcon],svg[famicons-stop-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m80 288H176V176h160Z"></svg:path>`,
})
export class FamiconsStopCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStopOutlineIcon],svg[famicons-stop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="320" height="320" x="96" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="24" ry="24"></svg:rect>`,
})
export class FamiconsStopOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStopSharpIcon],svg[famicons-stop-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 80h352v352H80z"></svg:path>`,
})
export class FamiconsStopSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStopwatchIcon],svg[famicons-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="272" r="16" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M280 81.5V72a24 24 0 0 0-48 0v9.5a191 191 0 0 0-84.43 32.13L137 103a24 24 0 0 0-34 34l8.6 8.6A191.17 191.17 0 0 0 64 272c0 105.87 86.13 192 192 192s192-86.13 192-192c0-97.74-73.42-178.66-168-190.5M256 320a48 48 0 0 1-16-93.25V152a16 16 0 0 1 32 0v74.75A48 48 0 0 1 256 320"></svg:path>`,
})
export class FamiconsStopwatchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStopwatchOutlineIcon],svg[famicons-stopwatch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 232v-80"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M256 88V72m-124 60l-12-12"></svg:path><svg:circle cx="256" cy="272" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 96a176 176 0 1 0 176 176A176 176 0 0 0 256 96Z"></svg:path>`,
})
export class FamiconsStopwatchOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStopwatchSharpIcon],svg[famicons-stopwatch-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M280 81.5V48h-48v33.5a191 191 0 0 0-84.43 32.13L120 86l-34 34l25.59 25.59A191.17 191.17 0 0 0 64 272c0 105.87 86.13 192 192 192s192-86.13 192-192c0-97.74-73.42-178.66-168-190.5M256 320a48 48 0 0 1-16-93.25V136h32v90.75A48 48 0 0 1 256 320"></svg:path>`,
})
export class FamiconsStopwatchSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStorefrontIcon],svg[famicons-storefront-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 448h-12a4 4 0 0 1-4-4V273.51a4 4 0 0 0-5.24-3.86a105 105 0 0 1-28.32 4.78c-1.18 0-2.3.05-3.4.05a108.2 108.2 0 0 1-52.85-13.64a8.23 8.23 0 0 0-8 0a108.2 108.2 0 0 1-52.84 13.64a106.1 106.1 0 0 1-52.46-13.79a8.21 8.21 0 0 0-8.09 0a108.14 108.14 0 0 1-53.16 13.8a106.2 106.2 0 0 1-52.77-14a8.25 8.25 0 0 0-8.16 0a106.2 106.2 0 0 1-52.77 14c-1.09 0-2.19 0-3.37-.05h-.06a105 105 0 0 1-29.28-5.09a4 4 0 0 0-5.23 3.8V444a4 4 0 0 1-4 4H32.5c-8.64 0-16.1 6.64-16.48 15.28A16 16 0 0 0 32 480h447.5c8.64 0 16.1-6.64 16.48-15.28A16 16 0 0 0 480 448m-256-68a4 4 0 0 1-4 4h-88a4 4 0 0 1-4-4v-64a12 12 0 0 1 12-12h72a12 12 0 0 1 12 12Zm156 68h-72a4 4 0 0 1-4-4V316a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v128a4 4 0 0 1-4 4m112.57-277.72l-42.92-98.49C438.41 47.62 412.74 32 384.25 32H127.7c-28.49 0-54.16 15.62-65.4 39.79l-42.92 98.49c-9 19.41 2.89 39.34 2.9 39.35l.28.45c.49.78 1.36 2 1.89 2.78c.05.06.09.13.14.2l5 6.05a8 8 0 0 0 .6.65l5 4.83l.42.36a69.7 69.7 0 0 0 9.39 6.78v.05a74 74 0 0 0 36 10.67h2.47a76.08 76.08 0 0 0 51.89-20.31l.33-.31a7.94 7.94 0 0 1 10.89 0l.33.31a77.3 77.3 0 0 0 104.46 0a8 8 0 0 1 10.87 0a77.31 77.31 0 0 0 104.21.23a7.88 7.88 0 0 1 10.71 0a76.8 76.8 0 0 0 52.31 20.08h2.49a71.35 71.35 0 0 0 35-10.7c.95-.57 1.86-1.17 2.78-1.77A71.3 71.3 0 0 0 488 212.17l1.74-2.63q.26-.4.48-.84c1.66-3.38 10.56-20.76 2.35-38.42"></svg:path>`,
})
export class FamiconsStorefrontIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStorefrontOutlineIcon],svg[famicons-storefront-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 448V240m-384 0v208M382.47 48H129.53c-21.79 0-41.47 12-49.93 30.46L36.3 173c-14.58 31.81 9.63 67.85 47.19 69h2c31.4 0 56.85-25.18 56.85-52.23c0 27 25.46 52.23 56.86 52.23s56.8-23.38 56.8-52.23c0 27 25.45 52.23 56.85 52.23s56.86-23.38 56.86-52.23c0 28.85 25.45 52.23 56.85 52.23h1.95c37.56-1.17 61.77-37.21 47.19-69l-43.3-94.54C423.94 60 404.26 48 382.47 48M32 464h448M136 288h80a24 24 0 0 1 24 24v88h0h-128h0v-88a24 24 0 0 1 24-24m152 176V312a24 24 0 0 1 24-24h64a24 24 0 0 1 24 24v152"></svg:path>`,
})
export class FamiconsStorefrontOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsStorefrontSharpIcon],svg[famicons-storefront-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 448V267.85a104.8 104.8 0 0 1-33.56 6.58c-1.18 0-2.3.05-3.4.05a108 108 0 0 1-56.86-16a108 108 0 0 1-56.85 16a106.16 106.16 0 0 1-56.51-16.2a107.84 107.84 0 0 1-57.2 16.2a106.14 106.14 0 0 1-56.85-16.42a106.14 106.14 0 0 1-56.85 16.42c-1.09 0-2.19 0-3.37-.05h-.06A104.7 104.7 0 0 1 48 267.49V448H16v32h480v-32Zm-240-64h-96v-76a4 4 0 0 1 4-4h88a4 4 0 0 1 4 4Zm160 64h-80V308a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4Zm108.57-277.72L445.89 64C432 32 432 32 400 32H112c-32 0-32 0-45.94 32L19.38 170.28c-9 19.41 2.89 39.34 2.9 39.35l.41.66c.42.66 1.13 1.75 1.62 2.37c.1.13.19.27.28.4l5.24 6.39l5.31 5.14l.42.36a69.7 69.7 0 0 0 9.44 6.78v.05a74 74 0 0 0 36 10.67h2.47a76.08 76.08 0 0 0 51.89-20.31a72 72 0 0 0 5.77-6a74 74 0 0 0 5.78 6a76.08 76.08 0 0 0 51.89 20.31c23.28 0 44.07-10 57.63-25.56a.11.11 0 0 1 .15 0l5.66 5.26a76.1 76.1 0 0 0 51.9 20.31c23.29 0 44.11-10 57.66-25.61c13.56 15.61 34.37 25.61 57.67 25.61h2.49a71.35 71.35 0 0 0 35-10.7c.95-.57 1.86-1.17 2.78-1.77A71.3 71.3 0 0 0 488 212.17l2-3c.9-2.04 11.21-20.3 2.57-38.89"></svg:path>`,
})
export class FamiconsStorefrontSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSubwayIcon],svg[famicons-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 16H160a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h192a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64M208 64h96a16 16 0 0 1 0 32h-96a16 16 0 0 1 0-32m-32 288a32 32 0 1 1 32-32a32 32 0 0 1-32 32m160 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32m48-160a16 16 0 0 1-16 16H144a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h224a16 16 0 0 1 16 16Zm-36.69 228.69a16 16 0 0 0-22.62 22.62l4.68 4.69H182.63l4.68-4.69a16 16 0 0 0-22.62-22.62l-48 48a16 16 0 1 0 22.62 22.62L150.63 480h210.74l11.32 11.31a16 16 0 0 0 22.62-22.62Z"></svg:path>`,
})
export class FamiconsSubwayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSubwayOutlineIcon],svg[famicons-subway-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="288" height="352" x="112" y="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M208 80h96"></svg:path><svg:rect width="288" height="96" x="112" y="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="32" ry="32"></svg:rect><svg:circle cx="176" cy="320" r="16" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="336" cy="320" r="16" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 464h224m-32-32l48 48m-208-48l-48 48"></svg:path>`,
})
export class FamiconsSubwayOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSubwaySharpIcon],svg[famicons-subway-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M392 16H120a24 24 0 0 0-24 24v336a24 24 0 0 0 24 24h272a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24M208 64h95.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 96h-95.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 208 64m-28.53 287.82a32 32 0 1 1 28.35-28.35a32 32 0 0 1-28.35 28.35m160 0a32 32 0 1 1 28.35-28.35a32 32 0 0 1-28.35 28.35M384 144v64H128v-64Zm-86 272l31.37 32H182.63L214 416h-44l-80.57 80h45.2l16-16h210.74l16 16h45.3L343 416z"></svg:path>`,
})
export class FamiconsSubwaySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSunnyIcon],svg[famicons-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 118a22 22 0 0 1-22-22V48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22m0 368a22 22 0 0 1-22-22v-48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22m113.14-321.14a22 22 0 0 1-15.56-37.55l33.94-33.94a22 22 0 0 1 31.11 31.11l-33.94 33.94a21.93 21.93 0 0 1-15.55 6.44M108.92 425.08a22 22 0 0 1-15.55-37.56l33.94-33.94a22 22 0 1 1 31.11 31.11l-33.94 33.94a21.94 21.94 0 0 1-15.56 6.45M464 278h-48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44m-368 0H48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44m307.08 147.08a21.94 21.94 0 0 1-15.56-6.45l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.55 37.56M142.86 164.86a21.9 21.9 0 0 1-15.55-6.44l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.56 37.55M256 358a102 102 0 1 1 102-102a102.12 102.12 0 0 1-102 102"></svg:path>`,
})
export class FamiconsSunnyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSunnyOutlineIcon],svg[famicons-sunny-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94"></svg:path><svg:circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class FamiconsSunnyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSunnySharpIcon],svg[famicons-sunny-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234 26h44v92h-44zm0 368h44v92h-44zm104.025-251.143l65.054-65.054l31.113 31.113l-65.054 65.054zM77.815 403.074l65.054-65.054l31.113 31.113l-65.054 65.053zM394 234h92v44h-92zm-368 0h92v44H26zm312.028 135.14l31.113-31.113l65.054 65.054l-31.113 31.112zM77.802 108.92l31.113-31.113l65.053 65.054l-31.112 31.113zM256 358a102 102 0 1 1 102-102a102.12 102.12 0 0 1-102 102"></svg:path>`,
})
export class FamiconsSunnySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSwapHorizontalIcon],svg[famicons-swap-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m304 48l112 112l-112 112m94.87-112H96m112 304L96 352l112-112m-94 112h302"></svg:path>`,
})
export class FamiconsSwapHorizontalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSwapHorizontalOutlineIcon],svg[famicons-swap-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m304 48l112 112l-112 112m94.87-112H96m112 304L96 352l112-112m-94 112h302"></svg:path>`,
})
export class FamiconsSwapHorizontalOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSwapHorizontalSharpIcon],svg[famicons-swap-horizontal-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m304 48l112 112l-112 112m94.87-112H96m112 304L96 352l112-112m-94 112h302"></svg:path>`,
})
export class FamiconsSwapHorizontalSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSwapVerticalIcon],svg[famicons-swap-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M464 208L352 96L240 208m112-94.87V416M48 304l112 112l112-112m-112 94V96"></svg:path>`,
})
export class FamiconsSwapVerticalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSwapVerticalOutlineIcon],svg[famicons-swap-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M464 208L352 96L240 208m112-94.87V416M48 304l112 112l112-112m-112 94V96"></svg:path>`,
})
export class FamiconsSwapVerticalOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSwapVerticalSharpIcon],svg[famicons-swap-vertical-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M464 208L352 96L240 208m112-94.87V416M48 304l112 112l112-112m-112 94V96"></svg:path>`,
})
export class FamiconsSwapVerticalSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSyncIcon],svg[famicons-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 0 0-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 0 0 140-66.92"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m32 256l44-44l46 44m358 0l-44 44l-46-44"></svg:path>`,
})
export class FamiconsSyncIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSyncCircleIcon],svg[famicons-sync-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m83.69 282.65a112.24 112.24 0 0 1-195-61.29a16 16 0 0 1-20.13-24.67l23.6-23.6a16 16 0 0 1 22.37-.25l24.67 23.6a16 16 0 0 1-18 26a80.25 80.25 0 0 0 138.72 38.83a16 16 0 0 1 23.77 21.41Zm47.76-63.34l-23.6 23.6a16 16 0 0 1-22.37.25l-24.67-23.6a16 16 0 0 1 17.68-26.11A80.17 80.17 0 0 0 196 202.64a16 16 0 1 1-23.82-21.37a112.17 112.17 0 0 1 194.88 61.57a16 16 0 0 1 20.39 24.47"></svg:path>`,
})
export class FamiconsSyncCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSyncCircleOutlineIcon],svg[famicons-sync-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M351.82 271.87v-16A96.15 96.15 0 0 0 184.09 192m-24.2 48.17v16A96.22 96.22 0 0 0 327.81 320"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m135.87 256l23.59-23.6l24.67 23.6m192 0l-23.59 23.6l-24.67-23.6"></svg:path>`,
})
export class FamiconsSyncCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSyncCircleSharpIcon],svg[famicons-sync-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m0 320a112.19 112.19 0 0 1-111.27-98.23l-8.86 8.86L113.24 256l46-46l47.55 45.48l-22.12 23.12l-7.2-6.88a80.26 80.26 0 0 0 138.48 37.5l23.77 21.41A112.82 112.82 0 0 1 256 368m96.79-66l-47.55-45.5l22.12-23.12l6.86 6.55A80.2 80.2 0 0 0 196 202.64l-23.82-21.37A112.18 112.18 0 0 1 367 242.49l9.11-9.12L398.76 256Z"></svg:path>`,
})
export class FamiconsSyncCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSyncOutlineIcon],svg[famicons-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 0 0-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 0 0 140-66.92"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m32 256l44-44l46 44m358 0l-44 44l-46-44"></svg:path>`,
})
export class FamiconsSyncOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsSyncSharpIcon],svg[famicons-sync-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 0 0-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 0 0 140-66.92"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m32 256l44-44l46 44m358 0l-44 44l-46-44"></svg:path>`,
})
export class FamiconsSyncSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTabletLandscapeIcon],svg[famicons-tablet-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 128v256a64.07 64.07 0 0 1-64 64H64a64.07 64.07 0 0 1-64-64V128a64.07 64.07 0 0 1 64-64h384a64.07 64.07 0 0 1 64 64M32 384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V128a32 32 0 0 0-32-32H64a32 32 0 0 0-32 32Z"></svg:path><svg:path fill="currentColor" d="M0 128a64.07 64.07 0 0 1 64-64h384a64.07 64.07 0 0 1 64 64v256a64.07 64.07 0 0 1-64 64H64a64.07 64.07 0 0 1-64-64zm480 256V128a32 32 0 0 0-32-32H64a32 32 0 0 0-32 32v256a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32m-16 0a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V128a16 16 0 0 1 16-16h384a16 16 0 0 1 16 16z"></svg:path>`,
})
export class FamiconsTabletLandscapeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTabletLandscapeOutlineIcon],svg[famicons-tablet-landscape-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="352" height="480" x="80" y="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="48" ry="48" transform="rotate(-90 256 256)"></svg:rect>`,
})
export class FamiconsTabletLandscapeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTabletLandscapeSharpIcon],svg[famicons-tablet-landscape-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 82v348a18 18 0 0 0 18 18h476a18 18 0 0 0 18-18V82a18 18 0 0 0-18-18H18A18 18 0 0 0 0 82m448 330H64V100h384Z"></svg:path>`,
})
export class FamiconsTabletLandscapeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTabletPortraitIcon],svg[famicons-tablet-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 512H128a64.07 64.07 0 0 1-64-64V64a64.07 64.07 0 0 1 64-64h256a64.07 64.07 0 0 1 64 64v384a64.07 64.07 0 0 1-64 64M128 32a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32Z"></svg:path><svg:path fill="currentColor" d="M384 0a64.07 64.07 0 0 1 64 64v384a64.07 64.07 0 0 1-64 64H128a64.07 64.07 0 0 1-64-64V64a64.07 64.07 0 0 1 64-64zM128 480h256a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32H128a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32m0-16a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h256a16 16 0 0 1 16 16v384a16 16 0 0 1-16 16Z"></svg:path>`,
})
export class FamiconsTabletPortraitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTabletPortraitOutlineIcon],svg[famicons-tablet-portrait-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="352" height="480" x="80" y="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect>`,
})
export class FamiconsTabletPortraitOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTabletPortraitSharpIcon],svg[famicons-tablet-portrait-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M430 0H82a18 18 0 0 0-18 18v476a18 18 0 0 0 18 18h348a18 18 0 0 0 18-18V18a18 18 0 0 0-18-18M100 448V64h312v384Z"></svg:path>`,
})
export class FamiconsTabletPortraitSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTelescopeIcon],svg[famicons-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107.56 250a16 16 0 0 0-21.85-5.86L36 272.81a39.7 39.7 0 0 0-18.8 24.91a40.9 40.9 0 0 0 4.55 30.35l4.36 7.54a40 40 0 0 0 54.62 14.62l49.67-28.63a16 16 0 0 0 5.87-21.86Z"></svg:path><svg:path fill="currentColor" d="M382.84 440.8L288.72 254a2 2 0 0 1 .79-2.63l8.3-4.79a16 16 0 0 0 5.86-21.86l-47.53-82.33a16 16 0 0 0-21.86-5.87l-86.38 49.8a39.73 39.73 0 0 0-18.65 24.28a34.8 34.8 0 0 0-1.37 9.76c.06 7.6 9.2 22.7 18.12 38.28c9.59 16.75 19.24 33.88 26.34 38.15c4.52 2.72 12.5 4.9 19.21 4.9h.84l-79.32 171.6a16 16 0 1 0 29.05 13.42l93.68-202.65a7.94 7.94 0 0 1 3.26-3.57l19.21-11.08a2 2 0 0 1 2.78.84l93.21 185a16 16 0 0 0 28.58-14.4Zm107.37-325.06L444.09 36a40.08 40.08 0 0 0-54.63-14.62l-93.34 53.78a39.7 39.7 0 0 0-18.65 24.28a32.8 32.8 0 0 0-1.27 13.25c1.74 12.62 13 30.4 26.41 53.89c13.58 23.73 28.91 50.48 36.93 56.27a40.2 40.2 0 0 0 23.18 7.37a39.77 39.77 0 0 0 19.92-5.34L476 171.07a39.72 39.72 0 0 0 18.79-24.84a41 41 0 0 0-4.58-30.49"></svg:path>`,
})
export class FamiconsTelescopeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTelescopeOutlineIcon],svg[famicons-telescope-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m39.93 327.56l-4.71-8.13A24 24 0 0 1 44 286.64l86.87-50.07a16 16 0 0 1 21.89 5.86l12.71 22a16 16 0 0 1-5.86 21.85l-86.85 50.07a24.06 24.06 0 0 1-32.83-8.79"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M170.68 273.72L147.12 233a24 24 0 0 1 8.8-32.78l124.46-71.75a16 16 0 0 1 21.89 5.86l31.57 54.59a16 16 0 0 1-5.84 21.84L203.51 282.5a24 24 0 0 1-32.83-8.78m171.17-71.51l-46.51-80.43a24 24 0 0 1 8.8-32.78l93.29-53.78A24.07 24.07 0 0 1 430.27 44l46.51 80.43a24 24 0 0 1-8.8 32.79L374.69 211a24.06 24.06 0 0 1-32.84-8.79M127.59 480l96.14-207.99m48.07-15.99L368.55 448"></svg:path>`,
})
export class FamiconsTelescopeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTelescopeSharpIcon],svg[famicons-telescope-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.41 292.9l44.82 76.97l98.14-56.38l-44.73-77.37z"></svg:path><svg:path fill="currentColor" d="m287.87 252.34l23.67-13.81l-63.42-110l-132.92 77C133.75 237.51 176 310 176 310l15.53-8.32c.24-.13.55 0 .83 0L102.65 496h35.16l99.05-214.25l23.24-13.4L358 464h36ZM262.08 96c24.81 42.23 60.25 104.25 86.4 148.76L510.79 151L424.07 1.41Z"></svg:path>`,
})
export class FamiconsTelescopeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTennisballIcon],svg[famicons-tennisball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 256a192.6 192.6 0 0 0 32-2.68A224 224 0 0 0 258.68 32A192.6 192.6 0 0 0 256 64c0 105.87 86.13 192 192 192M253.35 480c.94-5.67 1.65-11.4 2.09-17.18c.37-4.88.56-9.86.56-14.79c0-105.87-86.13-192-192-192a192.6 192.6 0 0 0-32 2.68A224 224 0 0 0 253.35 480"></svg:path><svg:path fill="currentColor" d="M289.61 222.39A222.53 222.53 0 0 1 224 64a226 226 0 0 1 2-30A224.1 224.1 0 0 0 34 226a226 226 0 0 1 30-2a222.53 222.53 0 0 1 158.39 65.61A222.53 222.53 0 0 1 288 448c0 5.74-.22 11.53-.65 17.22q-.5 6.42-1.36 12.79A224.12 224.12 0 0 0 478 286a226 226 0 0 1-30 2a222.53 222.53 0 0 1-158.39-65.61"></svg:path>`,
})
export class FamiconsTennisballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTennisballOutlineIcon],svg[famicons-tennisball-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M461.43 271.44c-5.09.37-8.24.56-13.43.56c-114.88 0-208-93.12-208-208c0-5.37.2-8.69.6-14M49.65 240.56S58.84 240 64 240c114.88 0 208 93.12 208 208c0 5.38-.61 14-.61 14"></svg:path>`,
})
export class FamiconsTennisballOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTennisballSharpIcon],svg[famicons-tennisball-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246.4 480a181 181 0 0 0 3.22-22.86c.35-4.61.53-9.31.53-14c0-100-81.34-181.32-181.32-181.32A181.7 181.7 0 0 0 32 265.61A224.2 224.2 0 0 0 246.4 480"></svg:path><svg:path fill="currentColor" d="M284.63 227.37A222.73 222.73 0 0 1 219 68.83a227 227 0 0 1 2.62-34.42A224.41 224.41 0 0 0 34.41 221.58A227 227 0 0 1 68.83 219a222.73 222.73 0 0 1 158.54 65.67A222.73 222.73 0 0 1 293 443.17c0 5.74-.22 11.54-.65 17.23s-1.11 11.51-2 17.2a224.42 224.42 0 0 0 187.24-187.18a227 227 0 0 1-34.42 2.58a222.73 222.73 0 0 1-158.54-65.63"></svg:path><svg:path fill="currentColor" d="M443.17 250.15a181.7 181.7 0 0 0 36.83-3.76A224.2 224.2 0 0 0 265.61 32a181.7 181.7 0 0 0-3.76 36.83c0 99.98 81.34 181.32 181.32 181.32"></svg:path>`,
})
export class FamiconsTennisballSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTerminalIcon],svg[famicons-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 32H80a64.07 64.07 0 0 0-64 64v320a64.07 64.07 0 0 0 64 64h352a64.07 64.07 0 0 0 64-64V96a64.07 64.07 0 0 0-64-64M96 256a16 16 0 0 1-10-28.49L150.39 176L86 124.49a16 16 0 1 1 20-25l80 64a16 16 0 0 1 0 25l-80 64A16 16 0 0 1 96 256m160 0h-64a16 16 0 0 1 0-32h64a16 16 0 0 1 0 32"></svg:path>`,
})
export class FamiconsTerminalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTerminalOutlineIcon],svg[famicons-terminal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="448" height="416" x="32" y="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m96 112l80 64l-80 64m96 0h64"></svg:path>`,
})
export class FamiconsTerminalOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTerminalSharpIcon],svg[famicons-terminal-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 44v424a12 12 0 0 0 12 12h456a12 12 0 0 0 12-12V44a12 12 0 0 0-12-12H28a12 12 0 0 0-12 12m57.51 193.5l76.88-61.5l-76.88-61.5l20-25l108.1 86.5L93.5 262.49ZM272 256h-96v-32h96Z"></svg:path>`,
})
export class FamiconsTerminalSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTextIcon],svg[famicons-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m292.6 407.78l-120-320a22 22 0 0 0-41.2 0l-120 320a22 22 0 0 0 41.2 15.44l36.16-96.42a2 2 0 0 1 1.87-1.3h122.74a2 2 0 0 1 1.87 1.3l36.16 96.42a22 22 0 0 0 41.2-15.44m-185.84-129l43.37-115.65a2 2 0 0 1 3.74 0l43.37 115.67a2 2 0 0 1-1.87 2.7h-86.74a2 2 0 0 1-1.87-2.7ZM400.77 169.5c-41.72-.3-79.08 23.87-95 61.4a22 22 0 0 0 40.5 17.2c8.88-20.89 29.77-34.44 53.32-34.6c32.32-.22 58.41 26.5 58.41 58.85a1.5 1.5 0 0 1-1.45 1.5c-21.92.61-47.92 2.07-71.12 4.8c-54.75 6.44-87.43 36.29-87.43 79.85c0 23.19 8.76 44 24.67 58.68C337.6 430.93 358 438.5 380 438.5c31 0 57.69-8 77.94-23.22h.06a22 22 0 1 0 44 .19v-143c0-56.18-45-102.56-101.23-102.97M380 394.5c-17.53 0-38-9.43-38-36c0-10.67 3.83-18.14 12.43-24.23c8.37-5.93 21.2-10.16 36.14-11.92c21.12-2.49 44.82-3.86 65.14-4.47a2 2 0 0 1 2 2.1C455 370.1 429.46 394.5 380 394.5"></svg:path>`,
})
export class FamiconsTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTextOutlineIcon],svg[famicons-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m32 415.5l120-320l120 320m-42-112H74m252-64c12.19-28.69 41-48 74-48h0c46 0 80 32 80 80v144"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 358.5c0 36 26.86 58 60 58c54 0 100-27 100-106v-15c-20 0-58 1-92 5c-32.77 3.86-68 19-68 58"></svg:path>`,
})
export class FamiconsTextOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTextSharpIcon],svg[famicons-text-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M404.42 170c-41.23 0-78.07 24.06-93.85 61.3L304 246.52l40.33 17.18l6.56-15.22c8.9-21 29.91-34.55 53.53-34.55c34.55 0 57.76 23.27 57.76 57.91v2.3c-22.12.59-48.65 2.05-72.27 4.84c-54.52 6.43-87.06 36.23-87.06 79.72c0 23.16 8.72 44 24.56 58.59C342.28 431 362.55 438 384.51 438c30.86 0 57.5-7.33 77.67-22.64V438H506V271.84C506 212.83 463.28 170 404.42 170m-19.91 225.07c-17.46 0-37.85-9.84-37.85-36.37c0-10.65 3.82-18.11 12.38-24.19c8.34-5.92 21.12-10.15 36-11.9c21.78-2.57 46.31-3.95 67-4.52c-2.16 51.49-27.57 76.98-77.53 76.98m-291.26-69.2h125.5L260.94 438H308L155 48L4 438h47.06ZM156 160.71L202.25 282h-92.5Z"></svg:path>`,
})
export class FamiconsTextSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsThermometerIcon],svg[famicons-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 287.18V81c0-35.12-27.89-64.42-63-64.95a64.08 64.08 0 0 0-65 64v207.13a8 8 0 0 1-3.18 6.37A113.48 113.48 0 0 0 144 384a112 112 0 0 0 224 0a113.48 113.48 0 0 0-44.82-90.45a8 8 0 0 1-3.18-6.37M254.07 432a48 48 0 0 1-22-89.54a16 16 0 0 0 8-13.84V112.45c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 112v216.58a16.18 16.18 0 0 0 8.15 13.94A48 48 0 0 1 254.07 432"></svg:path>`,
})
export class FamiconsThermometerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsThermometerOutlineIcon],svg[famicons-thermometer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M307.72 302.27a8 8 0 0 1-3.72-6.75V80a48 48 0 0 0-48-48h0a48 48 0 0 0-48 48v215.52a8 8 0 0 1-3.71 6.74a97.51 97.51 0 0 0-44.19 86.07A96 96 0 0 0 352 384a97.49 97.49 0 0 0-44.28-81.73ZM256 112v272"></svg:path><svg:circle cx="256" cy="384" r="48" fill="currentColor"></svg:circle>`,
})
export class FamiconsThermometerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsThermometerSharpIcon],svg[famicons-thermometer-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 291.24V80a64 64 0 1 0-128 0v211.24A113.39 113.39 0 0 0 144 384a112 112 0 0 0 224 0a113.39 113.39 0 0 0-48-92.76M256 432a48 48 0 0 1-16-93.26V96h32v242.74A48 48 0 0 1 256 432"></svg:path>`,
})
export class FamiconsThermometerSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsThumbsDownIcon],svg[famicons-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m39.94 178l144.16 6.12c4.61.36 23.9 1.22 23.9 25.88c0 23.8-19.16 25.33-24.14 25.88L39.94 242C27.27 241.87 16 227.56 16 210s11.27-31.87 23.94-32m141.45 131.66L74.65 318C62 318 48 301.31 48 284.12v-.33c0-16.33 11.14-29.63 24.88-29.79l108.45 1.72C208 259 208 275.16 208 282.12c0 22.88-21.8 27.14-26.61 27.54M90.15 32l89.37 8.93C204 41.86 208 58.18 208 68.4c0 18.39-13.41 24.6-26.67 24.6l-91 3C75.78 95.78 64 81.51 64 64s11.68-31.66 26.15-32m-34.36 71.5l126.4 6.22c9.39.63 25.81 3 25.81 26.36c0 12-4.35 25.62-25 27.53L55.79 167.5C42.65 167.35 32 154 32 136.08s10.65-32.43 23.79-32.58"></svg:path><svg:path fill="none" d="M378.45 273.93A15.84 15.84 0 0 1 386 272a15.9 15.9 0 0 0-7.51 1.91Zm-40.59 69.29l-.13.22a3 3 0 0 1 .13-.22c20.5-35.51 30.36-55 33.82-62c-3.47 7.06-13.34 26.51-33.82 62"></svg:path><svg:path fill="currentColor" d="m372.66 279.16l-1 2a16.3 16.3 0 0 1 6.77-7.26a16.5 16.5 0 0 0-5.77 5.26"></svg:path><svg:path fill="currentColor" d="M195.94 459.38C205.37 472.67 221 480 240 480a16 16 0 0 0 14.31-8.85c3-6.06 15.25-24 28.19-42.9c18-26.33 40.35-59.08 55.23-84.81l.13-.22c20.48-35.49 30.35-54.94 33.82-62l1-2a16.5 16.5 0 0 1 5.79-5.23A15.9 15.9 0 0 1 386 272h25.32A84.7 84.7 0 0 0 496 187.3v-38.6A84.7 84.7 0 0 0 411.31 64h-48.79a17.46 17.46 0 0 1-9.58-2.89C330 46.13 286.66 32 240 32c-7.45 0-14.19.14-20.27.38a8 8 0 0 0-6.2 12.68l.1.14C222.2 57.59 224 71 224 80a61.2 61.2 0 0 1-5.19 24.77a17.38 17.38 0 0 0 0 14.06a63.8 63.8 0 0 1 0 50.39a17.32 17.32 0 0 0 0 14a62.13 62.13 0 0 1 0 49.58a18.13 18.13 0 0 0 0 14.68A60.4 60.4 0 0 1 224 273c0 8.2-2 21.3-8 31.18a15.66 15.66 0 0 0-1.14 13.65c.38 1 .76 2.06 1.13 3.17a24.8 24.8 0 0 1 .86 11.57c-3 19.35-9.67 36.3-16.74 54.16c-3.08 7.78-6.27 15.82-9.22 24.27c-6.14 17.56-4.3 35.2 5.05 48.38"></svg:path>`,
})
export class FamiconsThumbsDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsThumbsDownOutlineIcon],svg[famicons-thumbs-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 53.84S208 48 256 48s74 16 96 32h64a64 64 0 0 1 64 64v48a64 64 0 0 1-64 64h-30a32.34 32.34 0 0 0-27.37 15.4S350 290.19 324 335.22S248 448 240 464c-29 0-43-22-34-47.71c10.28-29.39 23.71-54.38 27.46-87.09c.54-4.78-3.14-12-8-12L96 307"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="m96 241l80 2c20 1.84 32 12.4 32 30s-14 28.84-32 30l-80 4c-17.6 0-32-16.4-32-34v-.17A32 32 0 0 1 96 241Zm-32-65l112 2c18 .84 32 12.41 32 30c0 17.61-14 28.86-32 30l-112 2a32.1 32.1 0 0 1-32-32a32.1 32.1 0 0 1 32-32Zm48-128l64 3c21 1.84 32 11.4 32 29s-14.4 30-32 30l-64 2a32.09 32.09 0 0 1-32-32a32.09 32.09 0 0 1 32-32Zm-32 64l96 2c19 .84 32 12.4 32 30s-13 28.84-32 30l-96 2a32.09 32.09 0 0 1-32-32a32.09 32.09 0 0 1 32-32Z"></svg:path>`,
})
export class FamiconsThumbsDownOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsThumbsDownSharpIcon],svg[famicons-thumbs-down-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m56 320l156.05 12l-23 89.4c-6.08 26.6.7 41.87 22.39 48.62l34.69 9.85a4 4 0 0 0 4.4-1.72l129-202.34a8 8 0 0 1 6.81-3.81H496V64H378.39a48 48 0 0 1-15.18-2.46l-76.3-25.43a80 80 0 0 0-25.3-4.11H83.68c-19 0-31.5 13.52-35.23 32.16L16 206.42V280c0 22.06 18 38 40 40"></svg:path><svg:path fill="none" d="M378.45 273.93A15.84 15.84 0 0 1 386 272a15.9 15.9 0 0 0-7.51 1.91Zm-40.59 69.29l-.13.22a3 3 0 0 1 .13-.22c20.5-35.51 30.36-55 33.82-62c-3.47 7.06-13.34 26.51-33.82 62"></svg:path><svg:path fill="currentColor" d="m372.66 279.16l-1 2a16.3 16.3 0 0 1 6.77-7.26a16.5 16.5 0 0 0-5.77 5.26"></svg:path>`,
})
export class FamiconsThumbsDownSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsThumbsUpIcon],svg[famicons-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m472.06 334l-144.16-6.13c-4.61-.36-23.9-1.21-23.9-25.87c0-23.81 19.16-25.33 24.14-25.88L472.06 270c12.67.13 23.94 14.43 23.94 32s-11.27 31.87-23.94 32M330.61 202.33L437.35 194C450 194 464 210.68 464 227.88v.33c0 16.32-11.14 29.62-24.88 29.79l-108.45-1.73C304 253 304 236.83 304 229.88c0-22.88 21.8-27.15 26.61-27.55M421.85 480l-89.37-8.93C308 470.14 304 453.82 304 443.59c0-18.38 13.41-24.6 26.67-24.6l91-3c14.54.23 26.32 14.5 26.32 32s-11.67 31.67-26.14 32.01m34.36-71.5l-126.4-6.21c-9.39-.63-25.81-3-25.81-26.37c0-12 4.35-25.61 25-27.53l127.19-3.88c13.16.14 23.81 13.49 23.81 31.4s-10.65 32.43-23.79 32.58Z"></svg:path><svg:path fill="none" d="M133.55 238.06A15.85 15.85 0 0 1 126 240a15.8 15.8 0 0 0 7.51-1.92Zm40.59-69.28l.13-.23zc-20.5 35.51-30.36 54.95-33.82 62c3.47-7.07 13.34-26.51 33.82-62"></svg:path><svg:path fill="currentColor" d="m139.34 232.84l1-2a16.27 16.27 0 0 1-6.77 7.25a16.35 16.35 0 0 0 5.77-5.25"></svg:path><svg:path fill="currentColor" d="M316.06 52.62C306.63 39.32 291 32 272 32a16 16 0 0 0-14.31 8.84c-3 6.07-15.25 24-28.19 42.91c-18 26.33-40.35 59.07-55.23 84.8l-.13.23c-20.48 35.49-30.35 54.93-33.82 62l-1 2a16.35 16.35 0 0 1-5.79 5.22a15.8 15.8 0 0 1-7.53 2h-25.31A84.69 84.69 0 0 0 16 324.69v38.61a84.69 84.69 0 0 0 84.69 84.7h48.79a17.55 17.55 0 0 1 9.58 2.89C182 465.87 225.34 480 272 480c7.45 0 14.19-.14 20.27-.38a8 8 0 0 0 6.2-12.68l-.1-.14C289.8 454.41 288 441 288 432a61.2 61.2 0 0 1 5.19-24.77a17.36 17.36 0 0 0 0-14.05a63.8 63.8 0 0 1 0-50.39a17.32 17.32 0 0 0 0-14a62.15 62.15 0 0 1 0-49.59a18.13 18.13 0 0 0 0-14.68A60.3 60.3 0 0 1 288 239c0-8.2 2-21.3 8-31.19a15.63 15.63 0 0 0 1.14-13.64c-.38-1-.76-2.07-1.13-3.17a24.84 24.84 0 0 1-.86-11.58c3-19.34 9.67-36.29 16.74-54.16c3.08-7.78 6.27-15.82 9.22-24.26c6.14-17.57 4.3-35.2-5.05-48.38"></svg:path>`,
})
export class FamiconsThumbsUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsThumbsUpOutlineIcon],svg[famicons-thumbs-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 458.16S304 464 256 464s-74-16-96-32H96a64 64 0 0 1-64-64v-48a64 64 0 0 1 64-64h30a32.34 32.34 0 0 0 27.37-15.4S162 221.81 188 176.78S264 64 272 48c29 0 43 22 34 47.71c-10.28 29.39-23.71 54.38-27.46 87.09c-.54 4.78 3.14 12 7.95 12L416 205"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="m416 271l-80-2c-20-1.84-32-12.4-32-30s14-28.84 32-30l80-4c17.6 0 32 16.4 32 34v.17A32 32 0 0 1 416 271Zm32 65l-112-2c-18-.84-32-12.41-32-30c0-17.61 14-28.86 32-30l112-2a32.1 32.1 0 0 1 32 32a32.1 32.1 0 0 1-32 32Zm-48 128l-64-3c-21-1.84-32-11.4-32-29s14.4-30 32-30l64-2a32.09 32.09 0 0 1 32 32a32.09 32.09 0 0 1-32 32Zm32-64l-96-2c-19-.84-32-12.4-32-30s13-28.84 32-30l96-2a32.09 32.09 0 0 1 32 32a32.09 32.09 0 0 1-32 32Z"></svg:path>`,
})
export class FamiconsThumbsUpOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsThumbsUpSharpIcon],svg[famicons-thumbs-up-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m456 192l-156-12l23-89.4c6-26.6-.78-41.87-22.47-48.6l-34.69-9.85a4 4 0 0 0-4.4 1.72l-129 202.34a8 8 0 0 1-6.81 3.81H16V448h117.61a48 48 0 0 1 15.18 2.46l76.3 25.43a80 80 0 0 0 25.3 4.11h177.93c19 0 31.5-13.52 35.23-32.16L496 305.58V232c0-22.06-18-38-40-40"></svg:path>`,
})
export class FamiconsThumbsUpSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsThunderstormIcon],svg[famicons-thunderstorm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 416a16 16 0 0 1-14.3-23.16l24-48a16 16 0 0 1 28.62 14.32l-24 48A16 16 0 0 1 96 416m24 64a16 16 0 0 1-14.3-23.16l16-32a16 16 0 0 1 28.62 14.32l-16 32A16 16 0 0 1 120 480m256-64a16 16 0 0 1-14.3-23.16l24-48a16 16 0 0 1 28.62 14.32l-24 48A16 16 0 0 1 376 416m24 64a16 16 0 0 1-14.3-23.16l16-32a16 16 0 0 1 28.62 14.32l-16 32A16 16 0 0 1 400 480"></svg:path><svg:path fill="currentColor" d="M405.84 136.9a151.25 151.25 0 0 0-47.6-81.9a153 153 0 0 0-241.81 51.86C60.5 110.16 16 156.65 16 213.33C16 272.15 63.91 320 122.8 320h66.31l-12.89 77.37A16 16 0 0 0 192 416h32v64a16 16 0 0 0 29 9.3l80-112a16 16 0 0 0-13-25.3h-27.51l8-32h103.84a91.56 91.56 0 0 0 1.51-183.1"></svg:path>`,
})
export class FamiconsThunderstormIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsThunderstormOutlineIcon],svg[famicons-thunderstorm-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m120 352l-24 48m40 32l-16 32m280-112l-24 48m40 32l-16 32M208 304l-16 96h48v80l80-112h-48l16-64m116.33-151.11H392.2C384.71 84.85 326.14 32 256 32a136.39 136.39 0 0 0-128.63 90.67h-4.57c-49.94 0-90.8 40.8-90.8 90.66h0C32 263.2 72.86 304 122.8 304h281.53C446 304 480 270 480 228.44h0c0-41.55-34-75.55-75.67-75.55"></svg:path>`,
})
export class FamiconsThunderstormOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsThunderstormSharpIcon],svg[famicons-thunderstorm-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405.84 136.9a151.25 151.25 0 0 0-47.6-81.9a153 153 0 0 0-241.81 51.86C60.5 110.16 16 156.65 16 213.33C16 272.15 63.91 320 122.8 320h72.31L176 416h48v80l112-144h-43.51l8-32h103.84a91.56 91.56 0 0 0 1.51-183.1"></svg:path><svg:path fill="currentColor" d="m74.53 407.177l38.318-76.623l28.62 14.314l-38.319 76.622zm23.99 64.013l30.318-60.623l28.62 14.314l-30.317 60.621zm256.021-64.001l38.32-76.622l28.62 14.313l-38.32 76.622zm24.001 64.011l30.317-60.622l28.62 14.313l-30.317 60.622z"></svg:path>`,
})
export class FamiconsThunderstormSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTicketIcon],svg[famicons-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m490.18 181.4l-44.13-44.13a20 20 0 0 0-27-1a30.81 30.81 0 0 1-41.68-1.6a30.81 30.81 0 0 1-1.6-41.67a20 20 0 0 0-1-27L330.6 21.82a19.91 19.91 0 0 0-28.13 0l-70.35 70.34a39.9 39.9 0 0 0-9.57 15.5a7.71 7.71 0 0 1-4.83 4.83a39.8 39.8 0 0 0-15.5 9.58l-180.4 180.4a19.91 19.91 0 0 0 0 28.13L66 374.73a20 20 0 0 0 27 1a30.69 30.69 0 0 1 43.28 43.28a20 20 0 0 0 1 27l44.13 44.13a19.91 19.91 0 0 0 28.13 0l180.4-180.4a39.8 39.8 0 0 0 9.58-15.49a7.69 7.69 0 0 1 4.84-4.84a39.84 39.84 0 0 0 15.49-9.57l70.34-70.35a19.91 19.91 0 0 0-.01-28.09m-228.37-29.65a16 16 0 0 1-22.63 0l-11.51-11.51a16 16 0 0 1 22.63-22.62l11.51 11.5a16 16 0 0 1 0 22.63m44 44a16 16 0 0 1-22.62 0l-11-11a16 16 0 1 1 22.63-22.63l11 11a16 16 0 0 1 .01 22.66Zm44 44a16 16 0 0 1-22.63 0l-11-11a16 16 0 0 1 22.63-22.62l11 11a16 16 0 0 1 .05 22.67Zm44.43 44.54a16 16 0 0 1-22.63 0l-11.44-11.5a16 16 0 1 1 22.68-22.57l11.45 11.49a16 16 0 0 1-.01 22.63Z"></svg:path>`,
})
export class FamiconsTicketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTicketOutlineIcon],svg[famicons-ticket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M366.05 146a46.7 46.7 0 0 1-2.42-63.42a3.87 3.87 0 0 0-.22-5.26l-44.13-44.18a3.89 3.89 0 0 0-5.5 0l-70.34 70.34a23.6 23.6 0 0 0-5.71 9.24a23.66 23.66 0 0 1-14.95 15a23.7 23.7 0 0 0-9.25 5.71L33.14 313.78a3.89 3.89 0 0 0 0 5.5l44.13 44.13a3.87 3.87 0 0 0 5.26.22a46.69 46.69 0 0 1 65.84 65.84a3.87 3.87 0 0 0 .22 5.26l44.13 44.13a3.89 3.89 0 0 0 5.5 0l180.4-180.39a23.7 23.7 0 0 0 5.71-9.25a23.66 23.66 0 0 1 14.95-15a23.6 23.6 0 0 0 9.24-5.71l70.34-70.34a3.89 3.89 0 0 0 0-5.5l-44.13-44.13a3.87 3.87 0 0 0-5.26-.22a46.7 46.7 0 0 1-63.42-2.32Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m250.5 140.44l-16.51-16.51m60.53 60.53l-11.01-11m55.03 55.03l-11-11.01m60.53 60.53l-16.51-16.51"></svg:path>`,
})
export class FamiconsTicketOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTicketSharpIcon],svg[famicons-ticket-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m426.24 127.72l-10.94 10.94a29.67 29.67 0 0 1-42-42l10.94-10.94L314.52 16l-88 88l-4 12.09l-12.09 4L16 314.52l69.76 69.76l10.94-10.94a29.67 29.67 0 0 1 42 42l-10.94 10.94L197.48 496l194.4-194.4l4-12.09l12.09-4l88-88Zm-208.56 5.43l21.87-21.87l33 33l-21.88 21.87Zm43 43l21.88-21.88l32.52 32.52l-21.88 21.88Zm42.56 42.56l21.88-21.88l32.52 32.52l-21.84 21.93Zm75.57 75.56l-33-33l21.87-21.88l33 33Z"></svg:path>`,
})
export class FamiconsTicketSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTimeIcon],svg[famicons-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m96 240h-96a16 16 0 0 1-16-16V128a16 16 0 0 1 32 0v128h80a16 16 0 0 1 0 32"></svg:path>`,
})
export class FamiconsTimeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTimeOutlineIcon],svg[famicons-time-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96"></svg:path>`,
})
export class FamiconsTimeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTimeSharpIcon],svg[famicons-time-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256c0 114.69 93.32 208 208 208c114.86 0 208-93.14 208-208c0-114.69-93.31-208-208-208m108 240H244a4 4 0 0 1-4-4V116a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v140h92a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4"></svg:path>`,
})
export class FamiconsTimeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTimerIcon],svg[famicons-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.12 48 48 141.12 48 256s93.12 208 208 208s208-93.12 208-208S370.88 48 256 48m-82.33 114.34l105 71a32.5 32.5 0 0 1-37.25 53.26a33.2 33.2 0 0 1-8-8l-71-105a8.13 8.13 0 0 1 11.32-11.32ZM256 432c-97 0-176-78.95-176-176a174.55 174.55 0 0 1 53.87-126.72a14.15 14.15 0 1 1 19.64 20.37A146.53 146.53 0 0 0 108.3 256c0 81.44 66.26 147.7 147.7 147.7S403.7 337.44 403.7 256c0-76.67-58.72-139.88-133.55-147v55a14.15 14.15 0 1 1-28.3 0V94.15A14.15 14.15 0 0 1 256 80c97.05 0 176 79 176 176s-78.95 176-176 176"></svg:path>`,
})
export class FamiconsTimerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTimerOutlineIcon],svg[famicons-timer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112.91 128A191.85 191.85 0 0 0 64 254c-1.18 106.35 85.65 193.8 192 194c106.2.2 192-85.83 192-192c0-104.54-83.55-189.61-187.5-192a4.36 4.36 0 0 0-4.5 4.37V152"></svg:path><svg:path fill="currentColor" d="m233.38 278.63l-79-113a8.13 8.13 0 0 1 11.32-11.32l113 79a32.5 32.5 0 0 1-37.25 53.26a33.2 33.2 0 0 1-8.07-7.94"></svg:path>`,
})
export class FamiconsTimerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTimerSharpIcon],svg[famicons-timer-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.12 48 48 141.12 48 256s93.12 208 208 208s208-93.12 208-208S370.88 48 256 48m0 384c-97 0-176-78.95-176-176a174.55 174.55 0 0 1 53.87-126.72L279 233l-19 30l-125-91c-13 23-26.7 46-26.7 84c0 81.44 66.26 147.7 147.7 147.7S403.7 337.44 403.7 256c0-76.67-58.72-139.88-133.55-147v55h-28.3V79.89c4.24.07 8.94.11 14.15.11c97.05 0 176 79 176 176s-78.95 176-176 176"></svg:path>`,
})
export class FamiconsTimerSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTodayIcon],svg[famicons-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4v-12a64 64 0 0 0-64-64m61 112H35a3 3 0 0 0-3 3v237a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3M224 307.43A28.57 28.57 0 0 1 195.43 336h-70.86A28.57 28.57 0 0 1 96 307.43v-70.86A28.57 28.57 0 0 1 124.57 208h70.86A28.57 28.57 0 0 1 224 236.57Z"></svg:path>`,
})
export class FamiconsTodayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTodayOutlineIcon],svg[famicons-today-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="384" x="48" y="80" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 48v32m256-32v32"></svg:path><svg:rect width="96" height="96" x="112" y="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="13"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M464 160H48"></svg:path>`,
})
export class FamiconsTodayOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTodaySharpIcon],svg[famicons-today-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 456a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V176H32Zm80-238.86a9.14 9.14 0 0 1 9.14-9.14h109.72a9.14 9.14 0 0 1 9.14 9.14v109.72a9.14 9.14 0 0 1-9.14 9.14H121.14a9.14 9.14 0 0 1-9.14-9.14ZM456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 0 0-24 23.77V144h448V87.77A23.8 23.8 0 0 0 456 64"></svg:path>`,
})
export class FamiconsTodaySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsToggleIcon],svg[famicons-toggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 112H144C64.6 112 0 176.6 0 256s64.6 144 144 144h224c79.4 0 144-64.6 144-144s-64.6-144-144-144m0 256a112 112 0 1 1 112-112a112.12 112.12 0 0 1-112 112"></svg:path>`,
})
export class FamiconsToggleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsToggleOutlineIcon],svg[famicons-toggle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="368" cy="256" r="128" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:rect width="480" height="256" x="16" y="128" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="128" ry="128"></svg:rect>`,
})
export class FamiconsToggleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsToggleSharpIcon],svg[famicons-toggle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 112H144a144 144 0 0 0 0 288h224a144 144 0 0 0 0-288m0 230a86 86 0 1 1 86-86a85.88 85.88 0 0 1-86 86"></svg:path>`,
})
export class FamiconsToggleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrailSignIcon],svg[famicons-trail-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M491.31 324.69L432 265.37a31.8 31.8 0 0 0-22.63-9.37H272v-32h144a32 32 0 0 0 32-32V96a32 32 0 0 0-32-32H272V48a16 16 0 0 0-32 0v16H102.63A31.8 31.8 0 0 0 80 73.37l-59.31 59.32a16 16 0 0 0 0 22.62L80 214.63a31.8 31.8 0 0 0 22.63 9.37H240v32H96a32 32 0 0 0-32 32v96a32 32 0 0 0 32 32h144v48a16 16 0 0 0 32 0v-48h137.37a31.8 31.8 0 0 0 22.63-9.37l59.31-59.32a16 16 0 0 0 0-22.62"></svg:path>`,
})
export class FamiconsTrailSignIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrailSignOutlineIcon],svg[famicons-trail-sign-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 400v64m0-256v64m0-224v32m160 128H102.63a16 16 0 0 1-11.32-4.69L32 144l59.31-59.31A16 16 0 0 1 102.63 80H416a16 16 0 0 1 16 16v96a16 16 0 0 1-16 16M96 400h313.37a16 16 0 0 0 11.32-4.69L480 336l-59.31-59.31a16 16 0 0 0-11.32-4.69H96a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16"></svg:path>`,
})
export class FamiconsTrailSignOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrailSignSharpIcon],svg[famicons-trail-sign-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m502.63 336l-80-80H278v-32h170V64H278V32h-44v32H89.37l-80 80l80 80H234v32H64v160h170v64h44v-64h144.63Z"></svg:path>`,
})
export class FamiconsTrailSignSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrainIcon],svg[famicons-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="256" cy="304" fill="currentColor" rx="32.05" ry="31.94" transform="rotate(-45 256.001 304)"></svg:ellipse><svg:path fill="currentColor" d="M352 32h-15a10 10 0 0 1-7.87-3.78A31.94 31.94 0 0 0 304 16h-96a32 32 0 0 0-26.11 13.52A6 6 0 0 1 177 32h-17c-36.81 0-64 28.84-64 64v255c0 23.27 25.6 42.06 83 60.94a753 753 0 0 0 73.77 19.73a16 16 0 0 0 6.46 0A753 753 0 0 0 333 411.94c57.4-18.88 83-37.67 83-60.94V96a64 64 0 0 0-64-64m-168 96h144a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H184a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8m76.18 239.87a64 64 0 1 1 59.69-59.69a64.07 64.07 0 0 1-59.69 59.69"></svg:path><svg:path fill="currentColor" d="M395.31 468.69L347.63 421c-6.09-6.1-16-6.66-22.38-.86a16 16 0 0 0-.56 23.16l4.68 4.69H182.63l4.36-4.37c6.1-6.09 6.66-16 .86-22.38a16 16 0 0 0-23.16-.56l-48 48a16 16 0 1 0 22.62 22.62l11.32-11.3h210.74l11.32 11.31a16 16 0 0 0 22.62-22.62"></svg:path>`,
})
export class FamiconsTrainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrainOutlineIcon],svg[famicons-train-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 48h-24a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16h-24a56.16 56.16 0 0 0-56 56v247c0 35.3 144 65 144 65s144-29.7 144-65V104a56 56 0 0 0-56-56m-88 304a48 48 0 1 1 48-48a48 48 0 0 1-48 48m96-160a16 16 0 0 1-16 16H176a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16ZM144 464h224m-32-32l48 48m-208-48l-48 48"></svg:path>`,
})
export class FamiconsTrainOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrainSharpIcon],svg[famicons-train-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 32h-64a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16h-64c-16 0-32 16-32 32v288c0 23.92 160 80 160 80s160-56.74 160-80V64c0-16-16-32-32-32M256 352a48 48 0 1 1 48-48a48 48 0 0 1-48 48m112-152a8 8 0 0 1-8 8H152a8 8 0 0 1-8-8v-80a8 8 0 0 1 8-8h208a8 8 0 0 1 8 8Z"></svg:path><svg:path fill="currentColor" d="m314 432l15.32 16H182.58L198 432l-32-13l-76.62 77h45.2l16-16h210.74l16 16h45.3l-76.36-77.75z"></svg:path>`,
})
export class FamiconsTrainSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTransgenderIcon],svg[famicons-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M458 32h-68a22 22 0 0 0 0 44h14.89l-59.57 59.57a149.69 149.69 0 0 0-178.64 0l-7.57-7.57l26.45-26.44a22 22 0 0 0-31.12-31.12L128 96.89L107.11 76H122a22 22 0 0 0 0-44H54a22 22 0 0 0-22 22v68a22 22 0 0 0 44 0v-14.89L96.89 128l-26.42 26.42a22 22 0 1 0 31.11 31.11L128 159.11l7.57 7.57A149.2 149.2 0 0 0 106 256c0 82.71 67.29 150 150 150a149.2 149.2 0 0 0 89.46-29.67L369 399.9l-26.54 26.54a22 22 0 0 0 31.12 31.12l26.49-26.5l42.37 42.48a22 22 0 0 0 31.16-31.08L431.17 400l26.39-26.39a22 22 0 0 0-31.12-31.12l-26.35 26.35l-23.55-23.62a149.68 149.68 0 0 0-.11-178.49L436 107.11V122a22 22 0 0 0 44 0V54a22 22 0 0 0-22-22M150 256a106 106 0 1 1 106 106a106.12 106.12 0 0 1-106-106"></svg:path>`,
})
export class FamiconsTransgenderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTransgenderOutlineIcon],svg[famicons-transgender-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m448 352l-96 96M176 80l-95.98 95.98M464 128V48h-80M48 128V48h80m336 0L346.5 165.5M48 48l117.49 117.49M464 464L346.65 346.37"></svg:path>`,
})
export class FamiconsTransgenderOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTransgenderSharpIcon],svg[famicons-transgender-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m480 448.94l-48.94-49.08L464 366.92l-31.1-31.11l-32.9 32.9l-23.55-23.61a149.64 149.64 0 0 0-.1-178.45l59.55-59.56V144h44V32h-112v44h36.87l-59.55 59.55a149.65 149.65 0 0 0-178.59 0l-7.55-7.55l33-33L161 63.88l-33 33L107.09 76H144V32H32v112h44v-36.91L96.87 128l-33 33L95 192.05l33-33l7.56 7.57A149.18 149.18 0 0 0 106 255.94c0 82.69 67.27 150 150 150a149.12 149.12 0 0 0 89.44-29.67l23.51 23.58l-33.14 33.05l31.11 31.1l33-33l48.9 49Zm-330-193a106 106 0 1 1 106 106a106.09 106.09 0 0 1-106-106"></svg:path>`,
})
export class FamiconsTransgenderSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrashIcon],svg[famicons-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8"></svg:path><svg:path fill="currentColor" d="M432 96h-96V72a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v24H80a16 16 0 0 0 0 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 0 0 0-32M192.57 416H192a16 16 0 0 1-16-15.43l-8-224a16 16 0 1 1 32-1.14l8 224A16 16 0 0 1 192.57 416M272 400a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0Zm32-304h-96V72a7.91 7.91 0 0 1 8-8h80a7.91 7.91 0 0 1 8 8Zm32 304.57A16 16 0 0 1 320 416h-.58A16 16 0 0 1 304 399.43l8-224a16 16 0 1 1 32 1.14Z"></svg:path>`,
})
export class FamiconsTrashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrashBinIcon],svg[famicons-trash-bin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="448" height="80" x="32" y="48" fill="currentColor" rx="32" ry="32"></svg:rect><svg:path fill="currentColor" d="M74.45 160a8 8 0 0 0-8 8.83l26.31 252.56a1.5 1.5 0 0 0 0 .22A48 48 0 0 0 140.45 464h231.09a48 48 0 0 0 47.67-42.39v-.21l26.27-252.57a8 8 0 0 0-8-8.83Zm248.86 180.69a16 16 0 1 1-22.63 22.62L256 318.63l-44.69 44.68a16 16 0 0 1-22.63-22.62L233.37 296l-44.69-44.69a16 16 0 0 1 22.63-22.62L256 273.37l44.68-44.68a16 16 0 0 1 22.63 22.62L278.62 296Z"></svg:path>`,
})
export class FamiconsTrashBinIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrashBinOutlineIcon],svg[famicons-trash-bin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m432 144l-28.67 275.74A32 32 0 0 1 371.55 448H140.46a32 32 0 0 1-31.78-28.26L80 144"></svg:path><svg:rect width="448" height="80" x="32" y="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M312 240L200 352m112 0L200 240"></svg:path>`,
})
export class FamiconsTrashBinOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrashBinSharpIcon],svg[famicons-trash-bin-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="famiconsTrashBinSharp0" fill="none" d="M337.46 240L312 214.54l-56 56l-56-56L174.54 240l56 56l-56 56L200 377.46l56-56l56 56L337.46 352l-56-56z"></svg:path></svg:defs><svg:use href="#famiconsTrashBinSharp0"></svg:use><svg:use href="#famiconsTrashBinSharp0"></svg:use><svg:path fill="currentColor" d="m64 160l29.74 282.51A24 24 0 0 0 117.61 464h276.78a24 24 0 0 0 23.87-21.49L448 160Zm248 217.46l-56-56l-56 56L174.54 352l56-56l-56-56L200 214.54l56 56l56-56L337.46 240l-56 56l56 56Z"></svg:path><svg:rect width="448" height="80" x="32" y="48" fill="currentColor" rx="12" ry="12"></svg:rect>`,
})
export class FamiconsTrashBinSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrashOutlineIcon],svg[famicons-trash-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40m-64 64v224m-72-224l8 224m136-224l-8 224"></svg:path>`,
})
export class FamiconsTrashOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrashSharpIcon],svg[famicons-trash-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8"></svg:path><svg:path fill="none" d="M292 64h-72a4 4 0 0 0-4 4v28h80V68a4 4 0 0 0-4-4"></svg:path><svg:path fill="currentColor" d="M447.55 96H336V48a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v48H64.45L64 136h33l20.09 314A32 32 0 0 0 149 480h214a32 32 0 0 0 31.93-29.95L415 136h33ZM176 416l-9-256h33l9 256Zm96 0h-32V160h32Zm24-320h-80V68a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4Zm40 320h-33l9-256h33Z"></svg:path>`,
})
export class FamiconsTrashSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrendingDownIcon],svg[famicons-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 368h112V256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m48 144l121.37 121.37a32 32 0 0 0 45.26 0l50.74-50.74a32 32 0 0 1 45.26 0L448 352"></svg:path>`,
})
export class FamiconsTrendingDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrendingDownOutlineIcon],svg[famicons-trending-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 368h112V256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m48 144l121.37 121.37a32 32 0 0 0 45.26 0l50.74-50.74a32 32 0 0 1 45.26 0L448 352"></svg:path>`,
})
export class FamiconsTrendingDownOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrendingDownSharpIcon],svg[famicons-trending-down-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M352 368h112V256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m48 144l144 144l96-96l160 160"></svg:path>`,
})
export class FamiconsTrendingDownSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrendingUpIcon],svg[famicons-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 144h112v112"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m48 368l121.37-121.37a32 32 0 0 1 45.26 0l50.74 50.74a32 32 0 0 0 45.26 0L448 160"></svg:path>`,
})
export class FamiconsTrendingUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrendingUpOutlineIcon],svg[famicons-trending-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 144h112v112"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m48 368l121.37-121.37a32 32 0 0 1 45.26 0l50.74 50.74a32 32 0 0 0 45.26 0L448 160"></svg:path>`,
})
export class FamiconsTrendingUpOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrendingUpSharpIcon],svg[famicons-trending-up-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M352 144h112v112"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m48 368l144-144l96 96l160-160"></svg:path>`,
})
export class FamiconsTrendingUpSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTriangleIcon],svg[famicons-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 464H48a16 16 0 0 1-14.07-23.62l208-384a16 16 0 0 1 28.14 0l208 384A16 16 0 0 1 464 464"></svg:path>`,
})
export class FamiconsTriangleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTriangleOutlineIcon],svg[famicons-triangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 448L256 64l208 384z"></svg:path>`,
})
export class FamiconsTriangleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTriangleSharpIcon],svg[famicons-triangle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32L20 464h472z"></svg:path>`,
})
export class FamiconsTriangleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrophyIcon],svg[famicons-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 80h-60.1a4 4 0 0 1-4-4V63.92a32 32 0 0 0-32-31.92l-223.79.26a32 32 0 0 0-31.94 31.93V76a4 4 0 0 1-4 4H48a16 16 0 0 0-16 16v16c0 54.53 30 112.45 76.52 125.35a7.82 7.82 0 0 1 5.55 5.9c5.77 26.89 23.52 52.5 51.41 73.61c20.91 15.83 45.85 27.5 68.27 32.48a8 8 0 0 1 6.25 7.8V444a4 4 0 0 1-4 4h-59.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 176 480h159.55c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 336 448h-60a4 4 0 0 1-4-4v-86.86a8 8 0 0 1 6.25-7.8c22.42-5 47.36-16.65 68.27-32.48c27.89-21.11 45.64-46.72 51.41-73.61a7.82 7.82 0 0 1 5.55-5.9C450 224.45 480 166.53 480 112V96a16 16 0 0 0-16-16M112 198.22a4 4 0 0 1-6 3.45c-10.26-6.11-17.75-15.37-22.14-21.89c-11.91-17.69-19-40.67-19.79-63.63a4 4 0 0 1 4-4.15h40a4 4 0 0 1 4 4c-.02 27.45-.07 58.87-.07 82.22m316.13-18.44c-4.39 6.52-11.87 15.78-22.13 21.89a4 4 0 0 1-6-3.46c0-26.51 0-56.63-.05-82.21a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4.15c-.79 22.96-7.9 45.94-19.81 63.63Z"></svg:path>`,
})
export class FamiconsTrophyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrophyOutlineIcon],svg[famicons-trophy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 464h160m-80 0V336m128-112c0-50.64-.08-134.63-.12-160a16 16 0 0 0-16-16l-223.79.26a16 16 0 0 0-16 15.95c0 30.58-.13 129.17-.13 159.79c0 64.28 83 112 128 112S384 288.28 384 224"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 96H48v16c0 55.22 33.55 112 80 112M384 96h80v16c0 55.22-33.55 112-80 112"></svg:path>`,
})
export class FamiconsTrophyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTrophySharpIcon],svg[famicons-trophy-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M399.9 80V32H112v48H32v38c0 32 9.5 62.79 26.76 86.61c13.33 18.4 34.17 31.1 52.91 37.21c5.44 29.29 20.2 57.13 50.19 79.83c22 16.66 48.45 28.87 72.14 33.86V436h-74v44h192v-44h-74v-80.49c23.69-5 50.13-17.2 72.14-33.86c30-22.7 44.75-50.54 50.19-79.83c18.74-6.11 39.58-18.81 52.91-37.21C470.5 180.79 480 150 480 118V80ZM94.4 178.8c-10.68-14.68-17.17-34.4-18.24-54.8H112v67.37c-3.94-1.14-12.92-6.12-17.6-12.57m323.2 0c-4.6 6.61-11.6 12.58-17.6 12.58c0-22.4 0-46.29-.05-67.38h35.9c-1.08 20.4-7.85 39.9-18.25 54.8"></svg:path>`,
})
export class FamiconsTrophySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTvIcon],svg[famicons-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M447.86 384H64.14A48.2 48.2 0 0 1 16 335.86V128.14A48.2 48.2 0 0 1 64.14 80h383.72A48.2 48.2 0 0 1 496 128.14v207.72A48.2 48.2 0 0 1 447.86 384"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M128 416h256"></svg:path>`,
})
export class FamiconsTvIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTvOutlineIcon],svg[famicons-tv-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="448" height="272" x="32" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="32.14" ry="32.14"></svg:rect><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M128 416h256"></svg:path>`,
})
export class FamiconsTvOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsTvSharpIcon],svg[famicons-tv-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M488 384H24a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h464a8 8 0 0 1 8 8v288a8 8 0 0 1-8 8"></svg:path><svg:rect width="288" height="32" x="112" y="400" fill="currentColor" rx="4" ry="4"></svg:rect>`,
})
export class FamiconsTvSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsUmbrellaIcon],svg[famicons-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 113.61a222.26 222.26 0 0 0-136.33-64.54a8.09 8.09 0 0 1-6.88-5.62a15.79 15.79 0 0 0-30.36 0a8.09 8.09 0 0 1-6.88 5.62A224 224 0 0 0 32 271.52a16.41 16.41 0 0 0 7.24 13.87a16 16 0 0 0 20.07-2.08a51.89 51.89 0 0 1 73.31-.06a15.94 15.94 0 0 0 22.6.15a62.59 62.59 0 0 1 81.49-5.87a8.24 8.24 0 0 1 3.29 6.59v147.42c0 8.6-6.6 16-15.19 16.44A16 16 0 0 1 208 432a16 16 0 0 0-16.29-16c-9 .16-15.9 8.11-15.7 17.1a48.06 48.06 0 0 0 47.37 46.9c26.88.34 48.62-21.93 48.62-48.81V284.12a8.24 8.24 0 0 1 3.29-6.59a62.59 62.59 0 0 1 81.4 5.78a16 16 0 0 0 22.62 0a51.91 51.91 0 0 1 73.38 0a16 16 0 0 0 19.54 2.41a16.4 16.4 0 0 0 7.77-14.21a222.54 222.54 0 0 0-65.61-157.9"></svg:path>`,
})
export class FamiconsUmbrellaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsUmbrellaOutlineIcon],svg[famicons-umbrella-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 272v160a32 32 0 0 1-32 32h0a32 32 0 0 1-32-32m272-160c0-114.88-93.12-208-208-208S48 157.12 48 272h0a67.88 67.88 0 0 1 96 0h0a78.28 78.28 0 0 1 102.31-7.27L256 272l9.69-7.27A78.28 78.28 0 0 1 368 272h0a67.88 67.88 0 0 1 96 0M256 64V48"></svg:path>`,
})
export class FamiconsUmbrellaOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsUmbrellaSharpIcon],svg[famicons-umbrella-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m128.93 280l-.26-.3c-.9-.74-1.83-1.43-2.77-2.1Zm254.15 0l2.62-2.12c-.79.58-1.57 1.17-2.34 1.79Z"></svg:path><svg:path fill="currentColor" d="M463.14 186.44A224.55 224.55 0 0 0 272 48.57V32h-32v16.57A223.58 223.58 0 0 0 32 272v22.52l12.25-11.21a62.63 62.63 0 0 1 81.43-5.88l.22.17c.94.67 1.87 1.36 2.77 2.1q2.09 1.69 4 3.61L144 294.63l11.31-11.32a62.59 62.59 0 0 1 81.4-5.78L240 280v152a16 16 0 0 1-32 0v-16h-32v16a48 48 0 0 0 96 0V280l3.29-2.47a62.59 62.59 0 0 1 81.4 5.78L368 294.63l11.31-11.32q1.95-1.94 4.05-3.64c.77-.62 1.55-1.21 2.34-1.79l.26-.21c24.63-18.47 60-16.13 81.81 5.64l12.23 11.2V272a223.6 223.6 0 0 0-16.86-85.56"></svg:path>`,
})
export class FamiconsUmbrellaSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsUnlinkIcon],svg[famicons-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M200.66 352H144a96 96 0 0 1 0-192h55.41m113.18 0H368a96 96 0 0 1 0 192h-56.66"></svg:path>`,
})
export class FamiconsUnlinkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsUnlinkOutlineIcon],svg[famicons-unlink-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="36" d="M208 352h-64a96 96 0 0 1 0-192h64m96 0h64a96 96 0 0 1 0 192h-64"></svg:path>`,
})
export class FamiconsUnlinkOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsUnlinkSharpIcon],svg[famicons-unlink-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="48" d="M200.66 352H144a96 96 0 0 1 0-192h55.41m113.18 0H368a96 96 0 0 1 0 192h-56.66"></svg:path>`,
})
export class FamiconsUnlinkSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVideocamIcon],svg[famicons-videocam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 384.39a32 32 0 0 1-13-2.77a16 16 0 0 1-2.71-1.54l-82.71-58.22A32 32 0 0 1 352 295.7v-79.4a32 32 0 0 1 13.58-26.16l82.71-58.22a16 16 0 0 1 2.71-1.54a32 32 0 0 1 45 29.24v192.76a32 32 0 0 1-32 32ZM268 400H84a68.07 68.07 0 0 1-68-68V180a68.07 68.07 0 0 1 68-68h184.48A67.6 67.6 0 0 1 336 179.52V332a68.07 68.07 0 0 1-68 68"></svg:path>`,
})
export class FamiconsVideocamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVideocamOffIcon],svg[famicons-videocam-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 179.52A67.52 67.52 0 0 0 268.48 112h-79.2a4 4 0 0 0-2.82 6.83l142.71 142.71a4 4 0 0 0 6.83-2.82ZM16 180v152a68 68 0 0 0 68 68h184a67.66 67.66 0 0 0 42.84-15.24a4 4 0 0 0 .33-6L54.41 122a4 4 0 0 0-4.87-.62A68 68 0 0 0 16 180m448 204.39a32 32 0 0 1-13-2.77a16 16 0 0 1-2.71-1.54l-82.71-58.22A32 32 0 0 1 352 295.7v-79.4a32 32 0 0 1 13.58-26.16l82.71-58.22a16 16 0 0 1 2.71-1.54a32 32 0 0 1 45 29.24v192.76a32 32 0 0 1-32 32Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M416 416L80 80"></svg:path>`,
})
export class FamiconsVideocamOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVideocamOffOutlineIcon],svg[famicons-videocam-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M374.79 308.78L457.5 367a16 16 0 0 0 22.5-14.62V159.62A16 16 0 0 0 457.5 145l-82.71 58.22A16 16 0 0 0 368 216.3v79.4a16 16 0 0 0 6.79 13.08"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M50.19 140.57A51.94 51.94 0 0 0 32 180v152a52.15 52.15 0 0 0 52 52h184a51.6 51.6 0 0 0 22-4.9M208 128h60.48A51.68 51.68 0 0 1 320 179.52V248m96 168L80 80"></svg:path>`,
})
export class FamiconsVideocamOffOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVideocamOffSharpIcon],svg[famicons-videocam-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m57.376 79.998l22.627-22.627L438.633 416l-22.627 22.628zM32 112a16 16 0 0 0-16 16v256a16 16 0 0 0 16 16h288a15.9 15.9 0 0 0 9.34-3l-285-285Zm304 96v-80a16 16 0 0 0-16-16H179.63l245.44 245.44L496 400V112Z"></svg:path>`,
})
export class FamiconsVideocamOffSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVideocamOutlineIcon],svg[famicons-videocam-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M374.79 308.78L457.5 367a16 16 0 0 0 22.5-14.62V159.62A16 16 0 0 0 457.5 145l-82.71 58.22A16 16 0 0 0 368 216.3v79.4a16 16 0 0 0 6.79 13.08"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M268 384H84a52.15 52.15 0 0 1-52-52V180a52.15 52.15 0 0 1 52-52h184.48A51.68 51.68 0 0 1 320 179.52V332a52.15 52.15 0 0 1-52 52Z"></svg:path>`,
})
export class FamiconsVideocamOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVideocamSharpIcon],svg[famicons-videocam-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 208v-80a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v256a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-80l160 96V112Z"></svg:path>`,
})
export class FamiconsVideocamSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVolumeHighIcon],svg[famicons-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 416a23.88 23.88 0 0 1-14.2-4.68a8 8 0 0 1-.66-.51L125.76 336H56a24 24 0 0 1-24-24V200a24 24 0 0 1 24-24h69.75l91.37-74.81a8 8 0 0 1 .66-.51A24 24 0 0 1 256 120v272a24 24 0 0 1-24 24m88-80a16 16 0 0 1-14.29-23.19c9.49-18.87 14.3-38 14.3-56.81c0-19.38-4.66-37.94-14.25-56.73a16 16 0 0 1 28.5-14.54C346.19 208.12 352 231.44 352 256c0 23.86-6 47.81-17.7 71.19A16 16 0 0 1 320 336"></svg:path><svg:path fill="currentColor" d="M368 384a16 16 0 0 1-13.86-24C373.05 327.09 384 299.51 384 256c0-44.17-10.93-71.56-29.82-103.94a16 16 0 0 1 27.64-16.12C402.92 172.11 416 204.81 416 256c0 50.43-13.06 83.29-34.13 120a16 16 0 0 1-13.87 8"></svg:path><svg:path fill="currentColor" d="M416 432a16 16 0 0 1-13.39-24.74C429.85 365.47 448 323.76 448 256c0-66.5-18.18-108.62-45.49-151.39a16 16 0 1 1 27-17.22C459.81 134.89 480 181.74 480 256c0 64.75-14.66 113.63-50.6 168.74A16 16 0 0 1 416 432"></svg:path>`,
})
export class FamiconsVolumeHighIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVolumeHighOutlineIcon],svg[famicons-volume-high-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M126 192H56a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h69.65a15.93 15.93 0 0 1 10.14 3.54l91.47 74.89A8 8 0 0 0 240 392V120a8 8 0 0 0-12.74-6.43l-91.47 74.89A15 15 0 0 1 126 192m194 128c9.74-19.38 16-40.84 16-64c0-23.48-6-44.42-16-64m48 176c19.48-33.92 32-64.06 32-112s-12-77.74-32-112m48 272c30-46 48-91.43 48-160s-18-113-48-160"></svg:path>`,
})
export class FamiconsVolumeHighOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVolumeHighSharpIcon],svg[famicons-volume-high-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M320 320c9.74-19.38 16-40.84 16-64c0-23.48-6-44.42-16-64m48 176c19.48-33.92 32-64.06 32-112s-12-77.74-32-112m48 272c30-46 48-91.43 48-160s-18-113-48-160"></svg:path><svg:path fill="currentColor" d="M125.65 176.1H32v159.8h93.65L256 440V72z"></svg:path>`,
})
export class FamiconsVolumeHighSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVolumeLowIcon],svg[famicons-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296 416.19a23.92 23.92 0 0 1-14.21-4.69l-.66-.51l-91.46-75H120a24 24 0 0 1-24-24V200a24 24 0 0 1 24-24h69.65l91.46-75l.66-.51A24 24 0 0 1 320 119.83v272.34a24 24 0 0 1-24 24ZM384 336a16 16 0 0 1-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82c0-19.36-4.66-37.92-14.25-56.73a16 16 0 0 1 28.5-14.54C410.2 208.16 416 231.47 416 256c0 23.83-6 47.78-17.7 71.18A16 16 0 0 1 384 336"></svg:path>`,
})
export class FamiconsVolumeLowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVolumeLowOutlineIcon],svg[famicons-volume-low-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M189.65 192H120a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h69.65a16 16 0 0 1 10.14 3.63l91.47 75a8 8 0 0 0 12.74-6.46V119.83a8 8 0 0 0-12.74-6.44l-91.47 75a16 16 0 0 1-10.14 3.61M384 320c9.74-19.41 16-40.81 16-64c0-23.51-6-44.4-16-64"></svg:path>`,
})
export class FamiconsVolumeLowOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVolumeLowSharpIcon],svg[famicons-volume-low-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m391.12 341.48l-28.6-14.36l7.18-14.3c9.49-18.9 14.3-38 14.3-56.82c0-19.36-4.66-37.92-14.25-56.73L362.48 185L391 170.48l7.26 14.25C410.2 208.16 416 231.47 416 256c0 23.83-6 47.78-17.7 71.18ZM189.65 176.1H96v159.8h93.65L320 440V72z"></svg:path>`,
})
export class FamiconsVolumeLowSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVolumeMediumIcon],svg[famicons-volume-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M264 416.19a23.92 23.92 0 0 1-14.21-4.69l-.66-.51l-91.46-75H88a24 24 0 0 1-24-24V200a24 24 0 0 1 24-24h69.65l91.46-75l.66-.51A24 24 0 0 1 288 119.83v272.34a24 24 0 0 1-24 24ZM352 336a16 16 0 0 1-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82c0-19.36-4.66-37.92-14.25-56.73a16 16 0 0 1 28.5-14.54C378.2 208.16 384 231.47 384 256c0 23.83-6 47.78-17.7 71.18A16 16 0 0 1 352 336"></svg:path><svg:path fill="currentColor" d="M400 384a16 16 0 0 1-13.87-24C405 327.05 416 299.45 416 256c0-44.12-10.94-71.52-29.83-103.95A16 16 0 0 1 413.83 136C434.92 172.16 448 204.88 448 256c0 50.36-13.06 83.24-34.12 120a16 16 0 0 1-13.88 8"></svg:path>`,
})
export class FamiconsVolumeMediumIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVolumeMediumOutlineIcon],svg[famicons-volume-medium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M157.65 192H88a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h69.65a16 16 0 0 1 10.14 3.63l91.47 75a8 8 0 0 0 12.74-6.46V119.83a8 8 0 0 0-12.74-6.44l-91.47 75a16 16 0 0 1-10.14 3.61M352 320c9.74-19.41 16-40.81 16-64c0-23.51-6-44.4-16-64m48 176c19.48-34 32-64 32-112s-12-77.7-32-112"></svg:path>`,
})
export class FamiconsVolumeMediumOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVolumeMediumSharpIcon],svg[famicons-volume-medium-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M157.65 176.1H64v159.8h93.65L288 440V72z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="M352 320c9.74-19.41 16-40.81 16-64c0-23.51-6-44.4-16-64m48 176c19.48-34 32-64 32-112s-12-77.7-32-112"></svg:path>`,
})
export class FamiconsVolumeMediumSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVolumeMuteIcon],svg[famicons-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M416 432L64 80"></svg:path><svg:path fill="currentColor" d="M243.33 98.86a23.89 23.89 0 0 0-25.55 1.82l-.66.51l-28.52 23.35a8 8 0 0 0-.59 11.85l54.33 54.33a8 8 0 0 0 13.66-5.66v-64.49a24.51 24.51 0 0 0-12.67-21.71m8 236.43L96.69 180.69A16 16 0 0 0 85.38 176H56a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h69.76l92 75.31a23.9 23.9 0 0 0 25.87 1.69A24.51 24.51 0 0 0 256 391.45v-44.86a16 16 0 0 0-4.67-11.3M352 256c0-24.56-5.81-47.87-17.75-71.27a16 16 0 1 0-28.5 14.55C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 0 0 2.32 6.25l14.36 14.36a8 8 0 0 0 13.55-4.31A146 146 0 0 0 352 256m64 0c0-51.18-13.08-83.89-34.18-120.06a16 16 0 0 0-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 0 0 1.9 8.26L389 337.4a8 8 0 0 0 13.13-2.79C411 311.76 416 287.26 416 256"></svg:path><svg:path fill="currentColor" d="M480 256c0-74.25-20.19-121.11-50.51-168.61a16 16 0 1 0-27 17.22C429.82 147.38 448 189.5 448 256c0 46.19-8.43 80.27-22.43 110.53a8 8 0 0 0 1.59 9l11.92 11.92a8 8 0 0 0 12.92-2.16C471.6 344.9 480 305 480 256"></svg:path>`,
})
export class FamiconsVolumeMuteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVolumeMuteOutlineIcon],svg[famicons-volume-mute-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M416 432L64 80"></svg:path><svg:path fill="currentColor" d="M224 136.92v33.8a4 4 0 0 0 1.17 2.82l24 24a4 4 0 0 0 6.83-2.82v-74.15a24.53 24.53 0 0 0-12.67-21.72a23.91 23.91 0 0 0-25.55 1.83a8 8 0 0 0-.66.51l-31.94 26.15a4 4 0 0 0-.29 5.92l17.05 17.06a4 4 0 0 0 5.37.26Zm0 238.16l-78.07-63.92a32 32 0 0 0-20.28-7.16H64v-96h50.72a4 4 0 0 0 2.82-6.83l-24-24a4 4 0 0 0-2.82-1.17H56a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h69.76l91.36 74.8a8 8 0 0 0 .66.51a23.93 23.93 0 0 0 25.85 1.69A24.49 24.49 0 0 0 256 391.45v-50.17a4 4 0 0 0-1.17-2.82l-24-24a4 4 0 0 0-6.83 2.82ZM352 256c0-24.56-5.81-47.88-17.75-71.27a16 16 0 0 0-28.5 14.54C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 0 0 2.32 6.25l19.66 19.67a4 4 0 0 0 6.75-2A147 147 0 0 0 352 256m64 0c0-51.19-13.08-83.89-34.18-120.06a16 16 0 0 0-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 0 0 1.9 8.26l16.77 16.76a4 4 0 0 0 6.52-1.27C410.09 315.88 416 289.91 416 256"></svg:path><svg:path fill="currentColor" d="M480 256c0-74.26-20.19-121.11-50.51-168.61a16 16 0 1 0-27 17.22C429.82 147.38 448 189.5 448 256c0 47.45-8.9 82.12-23.59 113a4 4 0 0 0 .77 4.55L443 391.39a4 4 0 0 0 6.4-1C470.88 348.22 480 307 480 256"></svg:path>`,
})
export class FamiconsVolumeMuteOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVolumeMuteSharpIcon],svg[famicons-volume-mute-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M416 432L64 80"></svg:path><svg:path fill="currentColor" d="M352 256c0-24.56-5.81-47.88-17.75-71.27L327 170.47L298.48 185l7.27 14.25C315.34 218.06 320 236.62 320 256a113 113 0 0 1-.63 11.74l27.32 27.32A148.8 148.8 0 0 0 352 256m64 0c0-51.19-13.08-83.89-34.18-120.06l-8.06-13.82l-27.64 16.12l8.06 13.82C373.07 184.44 384 211.83 384 256c0 25.93-3.89 46.21-11 65.33l24.5 24.51C409.19 319.68 416 292.42 416 256"></svg:path><svg:path fill="currentColor" d="M480 256c0-74.26-20.19-121.11-50.51-168.61l-8.61-13.49l-27 17.22l8.61 13.49C429.82 147.38 448 189.5 448 256c0 48.76-9.4 84-24.82 115.55l23.7 23.7C470.16 351.39 480 309 480 256M256 72l-73.6 58.78l73.6 73.59zM32 176.1v159.8h93.65L256 440V339.63L92.47 176.1z"></svg:path>`,
})
export class FamiconsVolumeMuteSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVolumeOffIcon],svg[famicons-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M344 416a23.92 23.92 0 0 1-14.21-4.69c-.23-.16-.44-.33-.66-.51l-91.46-74.9H168a24 24 0 0 1-24-24V200.07a24 24 0 0 1 24-24h69.65l91.46-74.9c.22-.18.43-.35.66-.51A24 24 0 0 1 368 120v272a24 24 0 0 1-24 24"></svg:path>`,
})
export class FamiconsVolumeOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVolumeOffOutlineIcon],svg[famicons-volume-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M237.65 192H168a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h69.65a16 16 0 0 1 10.14 3.63l91.47 75a8 8 0 0 0 12.74-6.46V119.83a8 8 0 0 0-12.74-6.44l-91.47 75a16 16 0 0 1-10.14 3.61"></svg:path>`,
})
export class FamiconsVolumeOffOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsVolumeOffSharpIcon],svg[famicons-volume-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.65 176.1H144v159.8h93.65L368 440V72z"></svg:path>`,
})
export class FamiconsVolumeOffSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWalkIcon],svg[famicons-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m312.55 479.9l-56.42-114l-44.62-57a72.37 72.37 0 0 1-10.06-36.9V143.64H217a40 40 0 0 1 40 40v182.21"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M127.38 291.78v-74.07s37-74.07 74.07-74.07"></svg:path><svg:path fill="currentColor" d="M368.09 291.78a18.5 18.5 0 0 1-10.26-3.11L297.7 250a21.18 21.18 0 0 1-9.7-17.79v-23.7a5.65 5.65 0 0 1 8.69-4.77l81.65 54.11a18.52 18.52 0 0 1-10.29 33.93ZM171.91 493.47a18.5 18.5 0 0 1-14.83-7.41c-6.14-8.18-4-17.18 3.7-25.92l59.95-74.66a7.41 7.41 0 0 1 10.76 2.06c1.56 2.54 3.38 5.65 5.19 9.09c5.24 9.95 6 16.11-1.68 25.7c-8 10-52 67.44-52 67.44c-2.62 2.98-7.23 3.7-11.09 3.7"></svg:path><svg:circle cx="257" cy="69.56" r="37.04" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></svg:circle>`,
})
export class FamiconsWalkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWalkOutlineIcon],svg[famicons-walk-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m314.21 482.32l-56.77-114.74l-44.89-57.39a72.8 72.8 0 0 1-10.13-37.05V144h15.67a40.22 40.22 0 0 1 40.23 40.22v183.36M127.9 293.05v-74.52S165.16 144 202.42 144M370.1 274.42L304 231M170.53 478.36L224 400"></svg:path><svg:circle cx="258.32" cy="69.48" r="37.26" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class FamiconsWalkOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWalkSharpIcon],svg[famicons-walk-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="m315.09 481.38l-56.95-115.12l-45-57.56a73.1 73.1 0 0 1-10.16-37.17V142h15.73A40.36 40.36 0 0 1 259 182.32v162.52"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="M128.18 291.5v-74.77l64.95-65.1"></svg:path><svg:path fill="currentColor" d="m376.35 295.73l-83.95-56.38v-44.68l104.68 72.95zM175.13 498.58l-21.43-26.91l80.33-81.54l15.53 32.07z"></svg:path><svg:circle cx="259.02" cy="67.21" r="37.38" fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="16"></svg:circle>`,
})
export class FamiconsWalkSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWalletIcon],svg[famicons-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M95.5 104h320a88 88 0 0 1 11.18.71a66 66 0 0 0-77.51-55.56L86 94.08h-.3a66 66 0 0 0-41.07 26.13A87.57 87.57 0 0 1 95.5 104m320 24h-320a64.07 64.07 0 0 0-64 64v192a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V192a64.07 64.07 0 0 0-64-64M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path><svg:path fill="currentColor" d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16s-18.5 24.5 0 24.5s0 23.5 0 23.5L85.5 236Z"></svg:path>`,
})
export class FamiconsWalletIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWalletOutlineIcon],svg[famicons-wallet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="288" x="48" y="144" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M411.36 144v-30A50 50 0 0 0 352 64.9L88.64 109.85A50 50 0 0 0 48 159v49"></svg:path><svg:path fill="currentColor" d="M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsWalletOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWalletSharpIcon],svg[famicons-wallet-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M47.5 104H432V51.52a16 16 0 0 0-19.14-15.69l-368 60.48a16 16 0 0 0-12 10.47A39.7 39.7 0 0 1 47.5 104m416 24h-416a16 16 0 0 0-16 16v288a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V144a16 16 0 0 0-16-16M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path><svg:path fill="currentColor" d="M31.33 259.5V116c0-12.33 5.72-18.48 15.42-20c35.2-5.53 108.58-8.5 108.58-8.5s-8.33 16-27.33 16V128c18.5 0 31.33 23.5 31.33 23.5L84.83 236Z"></svg:path>`,
})
export class FamiconsWalletSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWarningIcon],svg[famicons-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0 0 80 446.25h340.89a32 32 0 0 0 28.18-47.17m-198.6-1.83a20 20 0 1 1 20-20a20 20 0 0 1-20 20m21.72-201.15l-5.74 122a16 16 0 0 1-32 0l-5.74-121.95a21.73 21.73 0 0 1 21.5-22.69h.21a21.74 21.74 0 0 1 21.73 22.7Z"></svg:path>`,
})
export class FamiconsWarningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWarningOutlineIcon],svg[famicons-warning-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M85.57 446.25h340.86a32 32 0 0 0 28.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0 0 28.17 47.17"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m250.26 195.39l5.74 122l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 5.95"></svg:path><svg:path fill="currentColor" d="M256 397.25a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class FamiconsWarningOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWarningSharpIcon],svg[famicons-warning-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M479 447.77L268.43 56.64a8 8 0 0 0-14.09 0L43.73 447.77a8 8 0 0 0 7.05 11.79H472a8 8 0 0 0 7-11.79m-197.62-36.29h-40v-40h40Zm-4-63.92h-32l-6-160h44Z"></svg:path>`,
})
export class FamiconsWarningSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWatchIcon],svg[famicons-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="240" height="240" x="136" y="136" fill="currentColor" rx="56" ry="56"></svg:rect><svg:path fill="currentColor" d="M336 96V32a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v64a80.09 80.09 0 0 0-80 80v160a80.09 80.09 0 0 0 80 80v64a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-64a80.09 80.09 0 0 0 80-80V176a80.09 80.09 0 0 0-80-80m56 224a72.08 72.08 0 0 1-72 72H192a72.08 72.08 0 0 1-72-72V192a72.08 72.08 0 0 1 72-72h128a72.08 72.08 0 0 1 72 72Z"></svg:path>`,
})
export class FamiconsWatchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWatchOutlineIcon],svg[famicons-watch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="288" height="288" x="112" y="112" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="64" ry="64"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M176 112V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v72m0 288v72a8 8 0 0 1-8 8H184a8 8 0 0 1-8-8v-72"></svg:path>`,
})
export class FamiconsWatchOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWatchSharpIcon],svg[famicons-watch-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="240" height="240" x="136" y="136" fill="currentColor" rx="8" ry="8"></svg:rect><svg:path fill="currentColor" d="M384 96h-48V16H176v80h-48a32 32 0 0 0-32 32v256a32 32 0 0 0 32 32h48v80h160v-80h48a32 32 0 0 0 32-32V128a32 32 0 0 0-32-32m8 272a24 24 0 0 1-24 24H144a24 24 0 0 1-24-24V144a24 24 0 0 1 24-24h224a24 24 0 0 1 24 24Z"></svg:path>`,
})
export class FamiconsWatchSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWaterIcon],svg[famicons-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M265.12 60.12a12 12 0 0 0-18.23 0C215.23 97.15 112 225.17 112 320c0 88.37 55.64 144 144 144s144-55.63 144-144c0-94.83-103.23-222.85-134.88-259.88M272 412a12 12 0 0 1-11.34-16a11.89 11.89 0 0 1 11.41-8A60.06 60.06 0 0 0 332 328.07a11.89 11.89 0 0 1 8-11.41A12 12 0 0 1 356 328a84.09 84.09 0 0 1-84 84"></svg:path>`,
})
export class FamiconsWaterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWaterOutlineIcon],svg[famicons-water-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M400 320c0 88.37-55.63 144-144 144s-144-55.63-144-144c0-94.83 103.23-222.85 134.89-259.88a12 12 0 0 1 18.23 0C296.77 97.15 400 225.17 400 320Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 328a72 72 0 0 1-72 72"></svg:path>`,
})
export class FamiconsWaterOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWaterSharpIcon],svg[famicons-water-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 43.91s-144 158.3-144 270.3c0 88.36 55.64 144 144 144s144-55.64 144-144c0-112-144-270.3-144-270.3m16 362.3v-24a60.07 60.07 0 0 0 60-60h24a84.09 84.09 0 0 1-84 84"></svg:path>`,
})
export class FamiconsWaterSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWifiIcon],svg[famicons-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M346.65 304.3a136 136 0 0 0-180.71 0a21 21 0 1 0 27.91 31.38a94 94 0 0 1 124.89 0a21 21 0 0 0 27.91-31.4Z"></svg:path><svg:path fill="currentColor" d="M256.28 183.7a221.47 221.47 0 0 0-151.8 59.92a21 21 0 1 0 28.68 30.67a180.28 180.28 0 0 1 246.24 0a21 21 0 1 0 28.68-30.67a221.47 221.47 0 0 0-151.8-59.92"></svg:path><svg:path fill="currentColor" d="M462 175.86a309 309 0 0 0-411.44 0a21 21 0 1 0 28 31.29a267 267 0 0 1 355.43 0a21 21 0 0 0 28-31.31Z"></svg:path><svg:circle cx="256.28" cy="393.41" r="32" fill="currentColor"></svg:circle>`,
})
export class FamiconsWifiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWifiOutlineIcon],svg[famicons-wifi-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M332.41 310.59a115 115 0 0 0-152.8 0m213.85-61.05a201.26 201.26 0 0 0-274.92 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M447.72 182.11a288 288 0 0 0-383.44 0"></svg:path><svg:path fill="currentColor" d="M256 416a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsWifiOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWifiSharpIcon],svg[famicons-wifi-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="42" d="M332.69 320a115 115 0 0 0-152.8 0m213.85-61a201.26 201.26 0 0 0-274.92 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="42" d="M448 191.52a288 288 0 0 0-383.44 0"></svg:path><svg:path fill="currentColor" d="M300.67 384L256 433l-44.34-49a56.73 56.73 0 0 1 88.92 0Z"></svg:path>`,
})
export class FamiconsWifiSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWineIcon],svg[famicons-wine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.56 94.92V80a16 16 0 0 0-16-16H113.44a16 16 0 0 0-16 16v14.92c-1.46 11.37-9.65 90.74 36.93 144.69c24.87 28.8 60.36 44.85 105.63 47.86V416h-80a16 16 0 0 0 0 32h192a16 16 0 0 0 0-32h-80V287.47c45.27-3 80.76-19.06 105.63-47.86c46.58-53.95 38.37-133.32 36.93-144.69m-285.3 3.41a15 15 0 0 0 .18-2.33h253.12a15 15 0 0 0 .18 2.33a202 202 0 0 1 0 45.67H129.32a204.3 204.3 0 0 1-.06-45.67"></svg:path>`,
})
export class FamiconsWineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWineOutlineIcon],svg[famicons-wine-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M398.57 80H113.43v16S87.51 272 256 272S398.57 96 398.57 96ZM256 272v160"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 432H160"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M112 160h288"></svg:path>`,
})
export class FamiconsWineOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWineSharpIcon],svg[famicons-wine-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M453 112V66.33H60.75V112l175.13 176v118H124.75v42H389v-42H277.88V288Zm-336.65-3.67h281l-37.81 38H154.16Z"></svg:path>`,
})
export class FamiconsWineSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWomanIcon],svg[famicons-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="255.75" cy="56" r="56" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m394.63 277.9l-10.33-34.41v-.11l-22.46-74.86h-.05l-2.51-8.45a44.87 44.87 0 0 0-43-32.08h-120a44.84 44.84 0 0 0-43 32.08l-2.51 8.45h-.06l-22.46 74.86v.11l-10.37 34.41c-3.12 10.39 2.3 21.66 12.57 25.14a20 20 0 0 0 25.6-13.18l25.58-85.25l2.17-7.23a8 8 0 0 1 15.53 2.62a7.8 7.8 0 0 1-.17 1.61L155.43 347.4a16 16 0 0 0 15.32 20.6h29v114.69c0 16.46 10.53 29.31 24 29.31s24-12.85 24-29.31V368h16v114.69c0 16.46 10.53 29.31 24 29.31s24-12.85 24-29.31V368h30a16 16 0 0 0 15.33-20.6l-43.74-145.81a7.5 7.5 0 0 1-.16-1.59a8 8 0 0 1 15.54-2.63l2.17 7.23l25.57 85.25A20 20 0 0 0 382.05 303c10.27-3.44 15.69-14.71 12.58-25.1"></svg:path>`,
})
export class FamiconsWomanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWomanOutlineIcon],svg[famicons-woman-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 368v104a23.73 23.73 0 0 0 24 24h0a23.73 23.73 0 0 0 24-24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 368v104a23.73 23.73 0 0 0 24 24h0a23.73 23.73 0 0 0 24-24V368m-121-94a23.73 23.73 0 0 1-29.84 16.18h0a23.72 23.72 0 0 1-16.17-29.84l25-84.28A44.85 44.85 0 0 1 205 144h102a44.85 44.85 0 0 1 43 32.08l25 84.28a23.72 23.72 0 0 1-16.17 29.84h0a23.73 23.73 0 0 1-29.78-16.2"></svg:path><svg:circle cx="256" cy="56" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m208 192l-48 160h192l-48-160"></svg:path>`,
})
export class FamiconsWomanOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWomanSharpIcon],svg[famicons-woman-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="255.75" cy="56" r="56" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M310.28 191.4h.05l7.66-2.3l36.79 122.6l46-13.8l-16.21-54.16c0-.12 0-.24-.07-.36l-16.84-56.12l-4.71-15.74l-.9-3H362l-2.51-8.45a44.84 44.84 0 0 0-43-32.08H195.24a44.84 44.84 0 0 0-43 32.08l-2.51 8.45h-.06l-.9 3l-4.71 15.74l-16.84 56.12c0 .12 0 .24-.07.36l-16.21 54.16l46 13.8l36.76-122.6l7.54 2.26L148.25 368h51.5v144h52V368h8v144h52V368h51.51Z"></svg:path>`,
})
export class FamiconsWomanSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsAddSharpIcon],svg[famicons-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="M256 112v288m144-144H112"></svg:path>`,
})
export class FamiconsAddSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
