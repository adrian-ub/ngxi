import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siMicFillIcon],svg[si-mic-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C9.769 2 8 3.757 8 5.828v6.344C8 14.242 9.769 16 12 16s4-1.758 4-3.828V5.828C16 3.758 14.231 2 12 2" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13 20.945V23a1 1 0 1 1-2 0v-2.055A9 9 0 0 1 3 12a1 1 0 1 1 2 0a7 7 0 1 0 14 0a1 1 0 1 1 2 0a9 9 0 0 1-8 8.945"></svg:path>`,
})
export class SiMicFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMicLineIcon],svg[si-mic-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 23v-3m0 0a8 8 0 0 1-8-8m8 8a8 8 0 0 0 8-8m-8 5c-2.75 0-5-2.172-5-4.828V5.828C7 3.172 9.25 1 12 1s5 2.172 5 4.828v6.344C17 14.828 14.75 17 12 17"></svg:path>`,
})
export class SiMicLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoneyDuotoneIcon],svg[si-money-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19.2 9H2.8a.8.8 0 0 0-.8.8v8.4a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8V9.8a.8.8 0 0 0-.8-.8"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 9V6.8c0-.44.36-.8.8-.8h16.4c.44 0 .8.36.8.8v8.4c0 .44-.36.8-.8.8H20M2.8 9h16.4a.8.8 0 0 1 .8.8v8.4a.8.8 0 0 1-.8.8H2.8a.8.8 0 0 1-.8-.8V9.8a.8.8 0 0 1 .8-.8Zm9.2 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path></svg:g>`,
})
export class SiMoneyDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoneyFillIcon],svg[si-money-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 6.8V8H2.8A1.8 1.8 0 0 0 1 9.8v8.4A1.8 1.8 0 0 0 2.8 20h16.4a1.8 1.8 0 0 0 1.8-1.8V17h1.2c.992 0 1.8-.808 1.8-1.8V6.8c0-.992-.808-1.8-1.8-1.8H5.8C4.808 5 4 5.808 4 6.8M6 7v1h13.2A1.8 1.8 0 0 1 21 9.8V15h1V7zm3 7a2 2 0 1 1 4 0a2 2 0 0 1-4 0" clip-rule="evenodd"></svg:path>`,
})
export class SiMoneyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoneyLineIcon],svg[si-money-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 9V6.8c0-.44.36-.8.8-.8h16.4c.44 0 .8.36.8.8v8.4c0 .44-.36.8-.8.8H20M2.8 9h16.4a.8.8 0 0 1 .8.8v8.4a.8.8 0 0 1-.8.8H2.8a.8.8 0 0 1-.8-.8V9.8a.8.8 0 0 1 .8-.8Zm9.2 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path>`,
})
export class SiMoneyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoonDuotoneIcon],svg[si-moon-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M10.41 13.28C7.332 10.205 6.716 5.693 8.357 2c-1.23.41-2.256 1.23-3.281 2.256a10.4 10.4 0 0 0 0 14.768c4.102 4.102 10.46 3.897 14.562-.205c1.026-1.026 1.846-2.051 2.256-3.282c-3.896 1.436-8.409.82-11.486-2.256"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.41 13.28C7.332 10.205 6.716 5.693 8.357 2c-1.23.41-2.256 1.23-3.281 2.256a10.4 10.4 0 0 0 0 14.768c4.102 4.102 10.46 3.897 14.562-.205c1.026-1.026 1.846-2.051 2.256-3.282c-3.896 1.436-8.409.82-11.486-2.256"></svg:path></svg:g>`,
})
export class SiMoonDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoonFillIcon],svg[si-moon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.272 2.406a1 1 0 0 0-1.23-1.355C6.59 1.535 5.432 2.488 4.37 3.55a11.4 11.4 0 0 0 0 16.182c4.518 4.519 11.51 4.261 15.976-.205c1.062-1.062 2.014-2.22 2.498-3.673A1 1 0 0 0 21.55 14.6c-3.59 1.322-7.675.734-10.433-2.025C8.35 9.808 7.788 5.744 9.272 2.406"></svg:path>`,
})
export class SiMoonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoonLineIcon],svg[si-moon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.41 13.28C7.332 10.205 6.716 5.693 8.357 2c-1.23.41-2.256 1.23-3.281 2.256a10.4 10.4 0 0 0 0 14.768c4.102 4.102 10.46 3.897 14.562-.205c1.026-1.026 1.846-2.051 2.256-3.282c-3.896 1.436-8.409.82-11.486-2.256"></svg:path>`,
})
export class SiMoonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreHorizCircleDuotoneIcon],svg[si-more-horiz-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-5 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiMoreHorizCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreHorizCircleFillIcon],svg[si-more-horiz-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M5 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0m5 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0m7-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4" clip-rule="evenodd"></svg:path>`,
})
export class SiMoreHorizCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreHorizCircleLineIcon],svg[si-more-horiz-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-5 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiMoreHorizCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreHorizDuotoneIcon],svg[si-more-horiz-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-7 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m14 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-7 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm14 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiMoreHorizDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreHorizFillIcon],svg[si-more-horiz-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m9 2a2 2 0 1 1 0-4a2 2 0 0 1 0 4m7 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class SiMoreHorizFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreHorizLineIcon],svg[si-more-horiz-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-7 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm14 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path>`,
})
export class SiMoreHorizLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreHorizSquareDuotoneIcon],svg[si-more-horiz-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-5 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiMoreHorizSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreHorizSquareFillIcon],svg[si-more-horiz-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M5 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0m5 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0m7-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4" clip-rule="evenodd"></svg:path>`,
})
export class SiMoreHorizSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreHorizSquareLineIcon],svg[si-more-horiz-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"></svg:path><svg:path d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-5 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiMoreHorizSquareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedHorizCircleDuotoneIcon],svg[si-more-muted-horiz-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12v.1M8 12v.1m8-.1v.1m6-.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiMoreMutedHorizCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedHorizCircleFillIcon],svg[si-more-muted-horiz-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8 11a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiMoreMutedHorizCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedHorizCircleLineIcon],svg[si-more-muted-horiz-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12v.1M8 12v.1m8-.1v.1m6-.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiMoreMutedHorizCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedHorizDuotoneIcon],svg[si-more-muted-horiz-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12v1m-6-1v1m12-1v1"></svg:path>`,
})
export class SiMoreMutedHorizDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedHorizFillIcon],svg[si-more-muted-horiz-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m7 1a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0z"></svg:path>`,
})
export class SiMoreMutedHorizFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedHorizLineIcon],svg[si-more-muted-horiz-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12v1m-6-1v1m12-1v1"></svg:path>`,
})
export class SiMoreMutedHorizLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedHorizSquareDuotoneIcon],svg[si-more-muted-horiz-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 12v.1M8 12v.1m8-.1v.1M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"></svg:path></svg:g>`,
})
export class SiMoreMutedHorizSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedHorizSquareFillIcon],svg[si-more-muted-horiz-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M8 11a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiMoreMutedHorizSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedHorizSquareLineIcon],svg[si-more-muted-horiz-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12v.1M8 12v.1m8-.1v.1M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiMoreMutedHorizSquareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedVertCircleDuotoneIcon],svg[si-more-muted-vert-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.95 12.05h.1m-.1 4h.1m-.1-8h.1M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiMoreMutedVertCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedVertCircleFillIcon],svg[si-more-muted-vert-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M10.95 8.05a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2h-.1a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2h-.1a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2h-.1a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiMoreMutedVertCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedVertCircleLineIcon],svg[si-more-muted-vert-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.95 12.05h.1m-.1 4h.1m-.1-8h.1M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiMoreMutedVertCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedVertDuotoneIcon],svg[si-more-muted-vert-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12h1m-1 6h1M12 6h1"></svg:path>`,
})
export class SiMoreMutedVertDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedVertFillIcon],svg[si-more-muted-vert-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7h1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2m1 6h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2m0 6h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2"></svg:path>`,
})
export class SiMoreMutedVertFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedVertLineIcon],svg[si-more-muted-vert-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12h1m-1 6h1M12 6h1"></svg:path>`,
})
export class SiMoreMutedVertLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedVertSquareDuotoneIcon],svg[si-more-muted-vert-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.95 12.05h.1m-.1 4h.1m-.1-8h.1M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiMoreMutedVertSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedVertSquareFillIcon],svg[si-more-muted-vert-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m6.55 4.05a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2h-.1a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class SiMoreMutedVertSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedVertSquareLineIcon],svg[si-more-muted-vert-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.95 12.05h.1m-.1 4h.1m-.1-8h.1M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiMoreMutedVertSquareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreSquareHorizDuotoneIcon],svg[si-more-square-horiz-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533m7 0h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533m-14 0h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 6 12.467v-.934A.533.533 0 0 0 5.467 11"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm7 0h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm-14 0h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 6 12.467v-.934A.533.533 0 0 0 5.467 11Z"></svg:path></svg:g>`,
})
export class SiMoreSquareHorizDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreSquareHorizFillIcon],svg[si-more-square-horiz-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.533 14A1.533 1.533 0 0 1 10 12.467v-.934c0-.846.687-1.533 1.533-1.533h.934c.846 0 1.533.687 1.533 1.533v.934c0 .846-.687 1.533-1.533 1.533zm7 0A1.533 1.533 0 0 1 17 12.467v-.934c0-.846.686-1.533 1.533-1.533h.934c.847 0 1.533.687 1.533 1.533v.934c0 .846-.686 1.533-1.533 1.533zm-14 0A1.533 1.533 0 0 1 3 12.467v-.934C3 10.687 3.687 10 4.533 10h.934C6.314 10 7 10.687 7 11.533v.934C7 13.313 6.314 14 5.467 14z" clip-rule="evenodd"></svg:path>`,
})
export class SiMoreSquareHorizFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreSquareHorizLineIcon],svg[si-more-square-horiz-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm7 0h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm-14 0h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 6 12.467v-.934A.533.533 0 0 0 5.467 11Z"></svg:path>`,
})
export class SiMoreSquareHorizLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreSquareVertDuotoneIcon],svg[si-more-square-vert-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533m0 7h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533m0-14h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 13 5.467v-.934A.533.533 0 0 0 12.467 4"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm0 7h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm0-14h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 13 5.467v-.934A.533.533 0 0 0 12.467 4Z"></svg:path></svg:g>`,
})
export class SiMoreSquareVertDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreSquareVertFillIcon],svg[si-more-square-vert-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 11.533c0-.846.687-1.533 1.533-1.533h.934c.846 0 1.533.687 1.533 1.533v.934c0 .846-.687 1.533-1.533 1.533h-.934A1.533 1.533 0 0 1 10 12.467zm0 7c0-.847.687-1.533 1.533-1.533h.934c.846 0 1.533.686 1.533 1.533v.934c0 .847-.687 1.533-1.533 1.533h-.934A1.533 1.533 0 0 1 10 19.467zm0-14C10 3.686 10.687 3 11.533 3h.934C13.313 3 14 3.687 14 4.533v.934C14 6.314 13.313 7 12.467 7h-.934A1.533 1.533 0 0 1 10 5.467z" clip-rule="evenodd"></svg:path>`,
})
export class SiMoreSquareVertFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreSquareVertLineIcon],svg[si-more-square-vert-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm0 7h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm0-14h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 13 5.467v-.934A.533.533 0 0 0 12.467 4Z"></svg:path>`,
})
export class SiMoreSquareVertLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreVertCircleDuotoneIcon],svg[si-more-vert-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-10a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiMoreVertCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreVertCircleFillIcon],svg[si-more-vert-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M10 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 5a2 2 0 1 1 0-4a2 2 0 0 1 0 4" clip-rule="evenodd"></svg:path>`,
})
export class SiMoreVertCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreVertCircleLineIcon],svg[si-more-vert-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-10a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiMoreVertCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreVertDuotoneIcon],svg[si-more-vert-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-14a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-14a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiMoreVertDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreVertFillIcon],svg[si-more-vert-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-2 9a2 2 0 1 1 4 0a2 2 0 0 1-4 0m0 7a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class SiMoreVertFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreVertLineIcon],svg[si-more-vert-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-14a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path>`,
})
export class SiMoreVertLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreVertSquareDuotoneIcon],svg[si-more-vert-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-10a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiMoreVertSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreVertSquareFillIcon],svg[si-more-vert-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M10 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 5a2 2 0 1 1 0-4a2 2 0 0 1 0 4" clip-rule="evenodd"></svg:path>`,
})
export class SiMoreVertSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreVertSquareLineIcon],svg[si-more-vert-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"></svg:path><svg:path d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-10a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiMoreVertSquareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoveDuotoneIcon],svg[si-move-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m19 15l3-3m0 0l-3-3m3 3H2m0 0l3 3m-3-3l3-3m10-4l-3-3m0 0L9 5m3-3v20m0 0l3-3m-3 3l-3-3"></svg:path>`,
})
export class SiMoveDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoveFillIcon],svg[si-move-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.707 1.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L11 4.414V11H4.414l1.293-1.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L4.414 13H11v6.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13 19.586V13h6.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L19.586 11H13V4.414l1.293 1.293a1 1 0 1 0 1.414-1.414z"></svg:path>`,
})
export class SiMoveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoveLineIcon],svg[si-move-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m19 15l3-3m0 0l-3-3m3 3H2m0 0l3 3m-3-3l3-3m10-4l-3-3m0 0L9 5m3-3v20m0 0l3-3m-3 3l-3-3"></svg:path>`,
})
export class SiMoveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMovieDuotoneIcon],svg[si-movie-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="M23 9H1v9.6A2.4 2.4 0 0 0 3.4 21h17.2a2.4 2.4 0 0 0 2.4-2.4z"></svg:path><svg:path fill="currentColor" d="M14.289 8.763a.75.75 0 1 0 1.422.474zm3.423-5.526a.75.75 0 1 0-1.424-.474zM6.288 8.763a.75.75 0 1 0 1.424.474zm3.424-5.526a.75.75 0 1 0-1.424-.474zM3.4 3.75h17.2v-1.5H3.4zm17.2 0c.911 0 1.65.739 1.65 1.65h1.5a3.15 3.15 0 0 0-3.15-3.15zm1.65 1.65v13.2h1.5V5.4zm0 13.2a1.65 1.65 0 0 1-1.65 1.65v1.5a3.15 3.15 0 0 0 3.15-3.15zm-1.65 1.65H3.4v1.5h17.2zm-17.2 0a1.65 1.65 0 0 1-1.65-1.65H.25a3.15 3.15 0 0 0 3.15 3.15zM1.75 18.6V5.4H.25v13.2zm0-13.2c0-.911.739-1.65 1.65-1.65v-1.5A3.15 3.15 0 0 0 .25 5.4zM1 9.75h22v-1.5H1zm14.712-.513l2-6l-1.424-.474l-2 6zm-8 0l2-6l-1.424-.474l-2 6z"></svg:path>`,
})
export class SiMovieDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMovieFillIcon],svg[si-movie-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.054 3L8.387 8h5.892l1.667-5z"></svg:path><svg:path fill="currentColor" d="M7.946 3L6.279 8H2v2h20V8h-5.613l1.667-5H20.6A2.4 2.4 0 0 1 23 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 18.6V5.4A2.4 2.4 0 0 1 3.4 3z"></svg:path>`,
})
export class SiMovieFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMovieLineIcon],svg[si-movie-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m15 9l2-6M7 9l2-6M1 9h22M3.4 3h17.2A2.4 2.4 0 0 1 23 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 18.6V5.4A2.4 2.4 0 0 1 3.4 3"></svg:path>`,
})
export class SiMovieLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastCircleDuotoneIcon],svg[si-north-east-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 16l8-8m0 0v5m0-5h-5m11 4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiNorthEastCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastCircleFillIcon],svg[si-north-east-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M11 7a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15 10.414V13a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class SiNorthEastCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastCircleLineIcon],svg[si-north-east-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 16l8-8m0 0v5m0-5h-5m11 4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiNorthEastCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastDuotoneIcon],svg[si-north-east-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 16l8-8m0 0v5m0-5h-5"></svg:path>`,
})
export class SiNorthEastDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastEscapeAltDuotoneIcon],svg[si-north-east-escape-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m10 14l8-8m0 0v4m0-4h-4M9 9h-.6C7.07 9 6 10.07 6 11.4v4.2C6 16.93 7.07 18 8.4 18h4.2c1.33 0 2.4-1.07 2.4-2.4V15"></svg:path>`,
})
export class SiNorthEastEscapeAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastEscapeAltFillIcon],svg[si-north-east-escape-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L15.586 7H14a1 1 0 0 1-1-1m-8 5.4C5 9.518 6.518 8 8.4 8H9a1 1 0 0 1 0 2h-.6c-.778 0-1.4.622-1.4 1.4v4.2c0 .778.622 1.4 1.4 1.4h4.2c.778 0 1.4-.622 1.4-1.4V15a1 1 0 1 1 2 0v.6c0 1.882-1.518 3.4-3.4 3.4H8.4A3.394 3.394 0 0 1 5 15.6z" clip-rule="evenodd"></svg:path>`,
})
export class SiNorthEastEscapeAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastEscapeAltLineIcon],svg[si-north-east-escape-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m10 14l8-8m0 0v4m0-4h-4M9 9h-.6C7.07 9 6 10.07 6 11.4v4.2C6 16.93 7.07 18 8.4 18h4.2c1.33 0 2.4-1.07 2.4-2.4V15"></svg:path>`,
})
export class SiNorthEastEscapeAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastEscapeDuotoneIcon],svg[si-north-east-escape-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h-.6C7.07 7 6 8.07 6 9.4v6.2C6 16.93 7.07 18 8.4 18h6.2c1.33 0 2.4-1.07 2.4-2.4V15m-7-1l8-8m0 0h-4m4 0v4"></svg:path>`,
})
export class SiNorthEastEscapeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastEscapeFillIcon],svg[si-north-east-escape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L15.586 7H14a1 1 0 0 1-1-1M5 9.4C5 7.518 6.518 6 8.4 6H9a1 1 0 0 1 0 2h-.6C7.622 8 7 8.622 7 9.4v6.2c0 .778.622 1.4 1.4 1.4h6.2c.778 0 1.4-.622 1.4-1.4V15a1 1 0 1 1 2 0v.6c0 1.882-1.518 3.4-3.4 3.4H8.4A3.394 3.394 0 0 1 5 15.6z" clip-rule="evenodd"></svg:path>`,
})
export class SiNorthEastEscapeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastEscapeLineIcon],svg[si-north-east-escape-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h-.6C7.07 7 6 8.07 6 9.4v6.2C6 16.93 7.07 18 8.4 18h6.2c1.33 0 2.4-1.07 2.4-2.4V15m-7-1l8-8m0 0h-4m4 0v4"></svg:path>`,
})
export class SiNorthEastEscapeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastFillIcon],svg[si-north-east-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-2.586l-6.293 6.293a1 1 0 0 1-1.414-1.414L13.586 9H11a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiNorthEastFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastLineIcon],svg[si-north-east-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 16l8-8m0 0v5m0-5h-5"></svg:path>`,
})
export class SiNorthEastLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastSquareDuotoneIcon],svg[si-north-east-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 16l8-8m0 0v5m0-5h-5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiNorthEastSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastSquareFillIcon],svg[si-north-east-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M11 7a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15 10.414V13a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class SiNorthEastSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastSquareLineIcon],svg[si-north-east-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 16l8-8m0 0v5m0-5h-5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiNorthEastSquareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestCircleDuotoneIcon],svg[si-north-west-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16 16L8 8m0 0v5m0-5h5m9 4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiNorthWestCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestCircleFillIcon],svg[si-north-west-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M9 13v-2.586l6.293 6.293a1 1 0 0 0 1.414-1.414L10.414 9H13a1 1 0 0 0 0-2H8a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0" clip-rule="evenodd"></svg:path>`,
})
export class SiNorthWestCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestCircleLineIcon],svg[si-north-west-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16 16L8 8m0 0v5m0-5h5m9 4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiNorthWestCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestDuotoneIcon],svg[si-north-west-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 16L8 8m0 0v5m0-5h5"></svg:path>`,
})
export class SiNorthWestDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestEscapeAltDuotoneIcon],svg[si-north-west-escape-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14 14L6 6m0 0v4m0-4h4m5 3h.6c1.33 0 2.4 1.07 2.4 2.4v4.2c0 1.33-1.07 2.4-2.4 2.4h-4.2C10.07 18 9 16.93 9 15.6V15"></svg:path>`,
})
export class SiNorthWestEscapeAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestEscapeAltFillIcon],svg[si-north-west-escape-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 8.414V10a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8.414l6.293 6.293a1 1 0 1 1-1.414 1.414zM14 9a1 1 0 0 1 1-1h.6c1.882 0 3.4 1.518 3.4 3.4v4.2c0 1.882-1.518 3.4-3.4 3.4h-4.2A3.394 3.394 0 0 1 8 15.6V15a1 1 0 1 1 2 0v.6c0 .778.622 1.4 1.4 1.4h4.2c.778 0 1.4-.622 1.4-1.4v-4.2c0-.778-.622-1.4-1.4-1.4H15a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiNorthWestEscapeAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestEscapeAltLineIcon],svg[si-north-west-escape-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14 14L6 6m0 0v4m0-4h4m5 3h.6c1.33 0 2.4 1.07 2.4 2.4v4.2c0 1.33-1.07 2.4-2.4 2.4h-4.2C10.07 18 9 16.93 9 15.6V15"></svg:path>`,
})
export class SiNorthWestEscapeAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestEscapeDuotoneIcon],svg[si-north-west-escape-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 7h.6C16.93 7 18 8.07 18 9.4v6.2c0 1.33-1.07 2.4-2.4 2.4H9.4C8.07 18 7 16.93 7 15.6V15m7-1L6 6m0 0h4M6 6v4"></svg:path>`,
})
export class SiNorthWestEscapeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestEscapeFillIcon],svg[si-north-west-escape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 5h4a1 1 0 1 1 0 2H8.414l6.293 6.293a1 1 0 0 1-1.414 1.414L7 8.414V10a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m8 2a1 1 0 0 1 1-1h.6C17.482 6 19 7.518 19 9.4v6.2c0 1.882-1.518 3.4-3.4 3.4H9.4A3.394 3.394 0 0 1 6 15.6V15a1 1 0 1 1 2 0v.6c0 .778.622 1.4 1.4 1.4h6.2c.778 0 1.4-.622 1.4-1.4V9.4c0-.778-.622-1.4-1.4-1.4H15a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiNorthWestEscapeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestEscapeLineIcon],svg[si-north-west-escape-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 7h.6C16.93 7 18 8.07 18 9.4v6.2c0 1.33-1.07 2.4-2.4 2.4H9.4C8.07 18 7 16.93 7 15.6V15m7-1L6 6m0 0h4M6 6v4"></svg:path>`,
})
export class SiNorthWestEscapeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestFillIcon],svg[si-north-west-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 10.414V13a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-2.586l6.293 6.293a1 1 0 1 1-1.414 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class SiNorthWestFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestLineIcon],svg[si-north-west-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 16L8 8m0 0v5m0-5h5"></svg:path>`,
})
export class SiNorthWestLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestSquareDuotoneIcon],svg[si-north-west-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16 16L8 8m0 0v5m0-5h5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiNorthWestSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestSquareFillIcon],svg[si-north-west-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M9 13v-2.586l6.293 6.293a1 1 0 0 0 1.414-1.414L10.414 9H13a1 1 0 1 0 0-2H8a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0" clip-rule="evenodd"></svg:path>`,
})
export class SiNorthWestSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestSquareLineIcon],svg[si-north-west-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16 16L8 8m0 0v5m0-5h5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiNorthWestSquareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNortheastSouthwestDuotoneIcon],svg[si-northeast-southwest-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 6L6 18M18 6v4m0-4h-4M6 18v-4m0 4h4"></svg:path>`,
})
export class SiNortheastSouthwestDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNortheastSouthwestFillIcon],svg[si-northeast-southwest-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 5h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8.414L8.414 17H10a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.586L15.586 7H14a1 1 0 1 1 0-2" clip-rule="evenodd"></svg:path>`,
})
export class SiNortheastSouthwestFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNortheastSouthwestLineIcon],svg[si-northeast-southwest-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 6L6 18M18 6v4m0-4h-4M6 18v-4m0 4h4"></svg:path>`,
})
export class SiNortheastSouthwestLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthwestSoutheastDuotoneIcon],svg[si-northwest-southeast-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 6l12 12M6 6v4m0-4h4m8 12v-4m0 4h-4"></svg:path>`,
})
export class SiNorthwestSoutheastDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthwestSoutheastFillIcon],svg[si-northwest-southeast-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.293 5.293A1 1 0 0 1 6 5h4a1 1 0 1 1 0 2H8.414L17 15.586V14a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h1.586L7 8.414V10a1 1 0 1 1-2 0V6a1 1 0 0 1 .293-.707" clip-rule="evenodd"></svg:path>`,
})
export class SiNorthwestSoutheastFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthwestSoutheastLineIcon],svg[si-northwest-southeast-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 6l12 12M6 6v4m0-4h4m8 12v-4m0 4h-4"></svg:path>`,
})
export class SiNorthwestSoutheastLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNotificationsAltDuotoneIcon],svg[si-notifications-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M5 18a1 1 0 0 1-.894-1.447L6 12.764V10c0-3.728 2.55-6.86 6-7.748c3.45.888 6 4.02 6 7.748v2.764l1.894 3.789A1 1 0 0 1 19 18z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 18a4 4 0 0 1-8 0m-3 0a1 1 0 0 1-.894-1.447L6 12.763V10c0-3.728 2.55-6.86 6-7.748c3.45.888 6 4.02 6 7.748v2.764l1.894 3.789A1 1 0 0 1 19 18z"></svg:path></svg:g>`,
})
export class SiNotificationsAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNotificationsAltFillIcon],svg[si-notifications-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 18a1 1 0 0 1-.894-1.447L6 12.764V10c0-3.728 2.55-6.86 6-7.748c3.45.888 6 4.02 6 7.748v2.764l1.894 3.789A1 1 0 0 1 19 18zm3.126 1a4.002 4.002 0 0 0 7.748 0z" clip-rule="evenodd"></svg:path>`,
})
export class SiNotificationsAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNotificationsAltLineIcon],svg[si-notifications-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 18a4 4 0 0 1-8 0m-3 0a1 1 0 0 1-.894-1.447L6 12.763V10c0-3.728 2.55-6.86 6-7.748c3.45.888 6 4.02 6 7.748v2.764l1.894 3.789A1 1 0 0 1 19 18z"></svg:path>`,
})
export class SiNotificationsAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNotificationsDuotoneIcon],svg[si-notifications-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 4a6 6 0 0 0-6 6v8h12v-8a6 6 0 0 0-6-6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4a6 6 0 0 0-6 6v8h12v-8a6 6 0 0 0-6-6m0 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m8 14H4m10 2a2 2 0 1 1-4 0"></svg:path></svg:g>`,
})
export class SiNotificationsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNotificationsFillIcon],svg[si-notifications-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.25a1.75 1.75 0 0 0-1.737 1.967A7 7 0 0 0 5 10v7H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-7a7 7 0 0 0-5.263-6.783q.012-.106.013-.217A1.75 1.75 0 0 0 12 1.25M12 23a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3"></svg:path>`,
})
export class SiNotificationsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNotificationsLineIcon],svg[si-notifications-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4a6 6 0 0 0-6 6v8m6-14a6 6 0 0 1 6 6v8M12 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m8 14H4m10 2a2 2 0 1 1-4 0"></svg:path>`,
})
export class SiNotificationsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNotificationsThickDuotoneIcon],svg[si-notifications-thick-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M3 18h18a1 1 0 0 0 .894-1.447L20 12.763V10a8 8 0 1 0-16 0v2.764l-1.894 3.789A1 1 0 0 0 3 18"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 18H3a1 1 0 0 1-.894-1.447L4 12.763V10a8 8 0 1 1 16 0v2.764l1.894 3.789A1 1 0 0 1 21 18h-5m-8 0h8m-8 0a4 4 0 0 0 8 0"></svg:path></svg:g>`,
})
export class SiNotificationsThickDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNotificationsThickFillIcon],svg[si-notifications-thick-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18a1 1 0 0 1-.894-1.447L4 12.763V10a8 8 0 1 1 16 0v2.764l1.894 3.789A1 1 0 0 1 21 18zm9 4a4 4 0 0 1-3.874-3h7.748A4 4 0 0 1 12 22"></svg:path>`,
})
export class SiNotificationsThickFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNotificationsThickLineIcon],svg[si-notifications-thick-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 18H3a1 1 0 0 1-.894-1.447L4 12.763V10a8 8 0 1 1 16 0v2.764l1.894 3.789A1 1 0 0 1 21 18h-5m-8 0h8m-8 0a4 4 0 0 0 8 0"></svg:path>`,
})
export class SiNotificationsThickLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siOctagonCheckDuotoneIcon],svg[si-octagon-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M3.23 7.913L7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 13l3 3l5-7M3.23 7.913L7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"></svg:path></svg:g>`,
})
export class SiOctagonCheckDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siOctagonCheckFillIcon],svg[si-octagon-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.91 3.23L3.23 7.913v-.01a.8.8 0 0 0-.23.57v7.054c0 .22.08.42.23.57L7.9 20.77c.15.15.36.23.57.23h7.06c.22 0 .42-.08.57-.23l4.67-4.673a.8.8 0 0 0 .23-.57V8.473c0-.22-.08-.42-.23-.57L16.1 3.23a.8.8 0 0 0-.57-.23H8.48c-.22 0-.42.08-.57.23m8.904 6.351a1 1 0 1 0-1.628-1.162l-4.314 6.04l-2.165-2.166a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.52-.126z" clip-rule="evenodd"></svg:path>`,
})
export class SiOctagonCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siOctagonCheckLineIcon],svg[si-octagon-check-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 13l3 3l5-7M3.23 7.913L7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"></svg:path>`,
})
export class SiOctagonCheckLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siOctagonDuotoneIcon],svg[si-octagon-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M3.23 7.913L7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3.23 7.913L7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"></svg:path></svg:g>`,
})
export class SiOctagonDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siOctagonFillIcon],svg[si-octagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.23 7.913L7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"></svg:path>`,
})
export class SiOctagonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siOctagonLineIcon],svg[si-octagon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3.23 7.913L7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"></svg:path>`,
})
export class SiOctagonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPauseDuotoneIcon],svg[si-pause-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20.2 3h-4.4a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8m-12 0H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20.2 3h-4.4a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Zm-12 0H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Z"></svg:path></svg:g>`,
})
export class SiPauseDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPauseFillIcon],svg[si-pause-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.8 3h4.4a.8.8 0 0 1 .8.8v16.4a.8.8 0 0 1-.8.8H4.8a.8.8 0 0 1-.8-.8V3.8a.8.8 0 0 1 .8-.8m10 0h4.4a.8.8 0 0 1 .8.8v16.4a.8.8 0 0 1-.8.8h-4.4a.8.8 0 0 1-.8-.8V3.8a.8.8 0 0 1 .8-.8"></svg:path>`,
})
export class SiPauseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPauseLineIcon],svg[si-pause-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20.2 3h-4.4a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Zm-12 0H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Z"></svg:path>`,
})
export class SiPauseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPausePresentationDuotoneIcon],svg[si-pause-presentation-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14 16V8m-4 8V8M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"></svg:path></svg:g>`,
})
export class SiPausePresentationDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPausePresentationFillIcon],svg[si-pause-presentation-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M10 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiPausePresentationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPausePresentationLineIcon],svg[si-pause-presentation-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14 16V8m-4 8V8M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"></svg:path>`,
})
export class SiPausePresentationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneAddCallDuotoneIcon],svg[si-phone-add-call-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="m7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path><svg:path fill="currentColor" d="m7.18 10.27l-.44-.607l-.713.518l.625.62zm6.504 6.46l-.529.533l.571.567l.526-.61zm7.316.924l.748.052a.8.8 0 0 0-.038-.294zm-14.284-3l.516-.545l-.003-.002zM6.252 3l.242-.71l-.13-.044l-.139.004zM20 7.75a.75.75 0 0 0 0-1.5zm-6-1.5a.75.75 0 0 0 0 1.5zM17.75 4a.75.75 0 0 0-1.5 0zm-1.5 6a.75.75 0 0 0 1.5 0zm-9.598.801l6.503 6.462l1.058-1.064l-6.504-6.462zm7.6 6.42a9 9 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021c.586-.19 1.125-.178 1.624.129c.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38c-.97-.598-1.992-.564-2.873-.278c-.862.28-1.633.812-2.214 1.297c-.588.49-1.023.97-1.214 1.19zm6.748.433a54 54 0 0 1-.748-.053v-.007v.01l-.01.067a2 2 0 0 1-.07.286a2.8 2.8 0 0 1-.474.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962c.394-.505.61-1.01.726-1.392a4 4 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14c-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075c1.617 1.315 3.506 2.476 5.467 2.476zM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602c.316-.24.63-.365.864-.43a2 2 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22l-.068.005l-.144.016a4 4 0 0 0-.465.098a4.1 4.1 0 0 0-1.372.684C3.14 3.838 2.25 5.288 2.25 7.846zM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855c.284.522.237 1.087-.05 1.706c-.293.63-.8 1.227-1.267 1.683a9 9 0 0 1-.816.708l-.001.001l.442.606c.44.607.441.607.441.606h.001l.002-.002l.005-.003l.018-.014a6 6 0 0 0 .274-.216c.176-.145.418-.354.683-.614c.521-.51 1.175-1.254 1.578-2.123c.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29zM20 6.25h-6v1.5h6zM16.25 4v6h1.5V4z"></svg:path>`,
})
export class SiPhoneAddCallDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneAddCallFillIcon],svg[si-phone-add-call-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.684 16.73L7.18 10.27S13.684 5.537 6.25 3C6.252 3 3 3.115 3 7.846c0 2.308 1.626 4.846 3.716 6.808c.368.348.76.735 1.17 1.142c2.317 2.292 5.26 5.204 8.12 5.204C20.769 21 21 17.654 21 17.654c-2.206-6.462-6.62-1.73-7.316-.923"></svg:path><svg:path fill="currentColor" d="M17 11a1 1 0 0 1-1-1V8h-2a1 1 0 1 1 0-2h2V4a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 0 1-1 1"></svg:path>`,
})
export class SiPhoneAddCallFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneAddCallLineIcon],svg[si-phone-add-call-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20 7h-6m3-3v6m-9.82.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path>`,
})
export class SiPhoneAddCallLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneCallbackDuotoneIcon],svg[si-phone-callback-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="m7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path><svg:path fill="currentColor" d="m7.18 10.27l-.44-.607l-.713.518l.625.62zm6.504 6.46l-.529.533l.571.567l.526-.61zm7.316.924l.748.052a.8.8 0 0 0-.038-.294zm-14.284-3l.516-.545l-.003-.002zM6.252 3l.242-.71l-.13-.044l-.139.004zm8.67 2.586a.75.75 0 0 0-1.5 0zm-.75 4.242h-.75v.75h.75zm4.242.75a.75.75 0 0 0 0-1.5zm1.945-5.876a.75.75 0 0 0-1.06-1.06zm-13.707 6.1l6.503 6.46l1.058-1.063l-6.504-6.462zm7.6 6.419a9 9 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021c.586-.19 1.125-.178 1.624.129c.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38c-.97-.598-1.992-.564-2.873-.278c-.862.28-1.633.812-2.214 1.297c-.588.49-1.023.97-1.214 1.19zm6.748.433a54 54 0 0 1-.748-.053v-.007v.01l-.01.067a2 2 0 0 1-.07.286a2.8 2.8 0 0 1-.474.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962c.394-.505.61-1.01.726-1.392a4 4 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14c-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075c1.617 1.315 3.506 2.476 5.467 2.476zM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602c.316-.24.63-.365.864-.43a2 2 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22l-.068.005l-.144.016a4 4 0 0 0-.465.098a4.1 4.1 0 0 0-1.372.684C3.14 3.838 2.25 5.288 2.25 7.846zM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855c.284.522.237 1.087-.05 1.706c-.293.63-.8 1.227-1.267 1.683a9 9 0 0 1-.816.708l-.001.001l.442.606c.44.607.441.607.441.606h.001l.002-.002l.005-.003l.018-.014a6 6 0 0 0 .274-.216c.176-.145.418-.354.683-.614c.521-.51 1.175-1.254 1.578-2.123c.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29zm7.412 1.876v4.242h1.5V5.586zm.75 4.992h4.242v-1.5h-4.242zm.53-.22l5.657-5.656l-1.06-1.06l-5.658 5.656z"></svg:path>`,
})
export class SiPhoneCallbackDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneCallbackFillIcon],svg[si-phone-callback-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.684 16.73L7.18 10.27S13.684 5.537 6.25 3C6.252 3 3 3.115 3 7.846c0 2.308 1.626 4.846 3.716 6.808c.368.348.76.735 1.17 1.142c2.317 2.292 5.26 5.204 8.12 5.204C20.769 21 21 17.654 21 17.654c-2.206-6.462-6.62-1.73-7.316-.923"></svg:path><svg:path fill="currentColor" d="M18.414 8.828h-1.828l3.95-3.95a1 1 0 1 0-1.415-1.414l-3.95 3.95V5.586a1 1 0 1 0-2 0v4.242a1 1 0 0 0 1 1h4.243a1 1 0 1 0 0-2"></svg:path>`,
})
export class SiPhoneCallbackFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneCallbackLineIcon],svg[si-phone-callback-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.172 5.586v4.242m0 0h4.242m-4.242 0l5.656-5.656M7.181 10.269l6.503 6.462c.697-.808 5.11-5.539 7.316.923c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path>`,
})
export class SiPhoneCallbackLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneDuotoneIcon],svg[si-phone-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27Z"></svg:path></svg:g>`,
})
export class SiPhoneDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneEnabledDuotoneIcon],svg[si-phone-enabled-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m16.82 10.27l-6.504 6.46c-.697-.807-5.11-5.538-7.316.924c0 0 .232 3.346 4.994 3.346c3.367 0 6.851-4.038 9.29-6.346c2.09-1.962 3.716-4.5 3.716-6.808C21 3.116 17.748 3 17.748 3c-7.432 2.538-.929 7.27-.929 7.27"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m16.82 10.27l-6.504 6.46c-.697-.807-5.11-5.538-7.316.924c0 0 .232 3.346 4.994 3.346c3.367 0 6.851-4.038 9.29-6.346c2.09-1.962 3.716-4.5 3.716-6.808C21 3.116 17.748 3 17.748 3c-7.432 2.538-.929 7.27-.929 7.27Z"></svg:path></svg:g>`,
})
export class SiPhoneEnabledDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneEnabledFillIcon],svg[si-phone-enabled-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.82 10.27l-6.504 6.46c-.697-.807-5.11-5.538-7.316.924c0 0 .232 3.346 4.994 3.346c3.367 0 6.851-4.038 9.29-6.346c2.09-1.962 3.716-4.5 3.716-6.808C21 3.116 17.748 3 17.748 3c-7.432 2.538-.929 7.27-.929 7.27"></svg:path>`,
})
export class SiPhoneEnabledFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneEnabledLineIcon],svg[si-phone-enabled-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m16.82 10.27l-6.504 6.46c-.697-.807-5.11-5.538-7.316.924c0 0 .232 3.346 4.994 3.346c3.367 0 6.851-4.038 9.29-6.346c2.09-1.962 3.716-4.5 3.716-6.808C21 3.116 17.748 3 17.748 3c-7.432 2.538-.929 7.27-.929 7.27Z"></svg:path>`,
})
export class SiPhoneEnabledLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneFillIcon],svg[si-phone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path>`,
})
export class SiPhoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneForwardedDuotoneIcon],svg[si-phone-forwarded-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="m7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path><svg:path fill="currentColor" d="m7.18 10.27l-.44-.607l-.713.518l.625.62zm6.504 6.46l-.529.533l.571.567l.526-.61zm7.316.924l.748.052a.8.8 0 0 0-.038-.294zm-14.284-3l.516-.545l-.003-.002zM6.252 3l.242-.71l-.13-.044l-.139.004zM17.47 9.47a.75.75 0 1 0 1.06 1.06zM21 7l.53.53l.53-.53l-.53-.53zm-2.47-3.53a.75.75 0 1 0-1.06 1.06zM13 6.25a.75.75 0 0 0 0 1.5zm-6.348 4.551l6.503 6.462l1.058-1.064l-6.504-6.462zm7.6 6.42a9 9 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021c.586-.19 1.125-.178 1.624.129c.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38c-.97-.598-1.992-.564-2.873-.278c-.862.28-1.633.812-2.214 1.297c-.588.49-1.023.97-1.214 1.19zm6.748.433a54 54 0 0 1-.748-.053v-.007v.01l-.01.067a2 2 0 0 1-.07.286a2.8 2.8 0 0 1-.474.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962c.394-.505.61-1.01.726-1.392a4 4 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14c-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075c1.617 1.315 3.506 2.476 5.467 2.476zM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602c.316-.24.63-.365.864-.43a2 2 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22l-.068.005l-.144.016a4 4 0 0 0-.465.098a4.1 4.1 0 0 0-1.372.684C3.14 3.838 2.25 5.288 2.25 7.846zM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855c.284.522.237 1.087-.05 1.706c-.293.63-.8 1.227-1.267 1.683a9 9 0 0 1-.816.708l-.001.001l.442.606c.44.607.441.607.441.606h.001l.002-.002l.005-.003l.018-.014a6 6 0 0 0 .274-.216c.176-.145.418-.354.683-.614c.521-.51 1.175-1.254 1.578-2.123c.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29zm12.52 6.82l3-3l-1.06-1.06l-3 3zm3-4.06l-3-3l-1.06 1.06l3 3zM21 6.25h-8v1.5h8z"></svg:path>`,
})
export class SiPhoneForwardedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneForwardedFillIcon],svg[si-phone-forwarded-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 8H13a1 1 0 1 1 0-2h5.586l-1.293-1.293a1 1 0 0 1 0-1.414"></svg:path><svg:path fill="currentColor" d="M13.684 16.73L7.18 10.27S13.684 5.537 6.25 3C6.252 3 3 3.115 3 7.846c0 2.308 1.626 4.846 3.716 6.808c.368.348.76.735 1.17 1.142c2.317 2.292 5.26 5.204 8.12 5.204C20.769 21 21 17.654 21 17.654c-2.206-6.462-6.62-1.73-7.316-.923"></svg:path>`,
})
export class SiPhoneForwardedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneForwardedLineIcon],svg[si-phone-forwarded-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m18 10l3-3m0 0l-3-3m3 3h-8m-5.82 3.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path>`,
})
export class SiPhoneForwardedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneLineIcon],svg[si-phone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27Z"></svg:path>`,
})
export class SiPhoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneLockedDuotoneIcon],svg[si-phone-locked-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="m7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path><svg:path fill="currentColor" d="m7.18 10.27l-.44-.607l-.713.518l.625.62zm6.504 6.46l-.529.533l.571.567l.526-.61zm7.316.924l.748.052a.8.8 0 0 0-.038-.294zm-14.284-3l.516-.545l-.003-.002zM6.252 3l.242-.71l-.13-.044l-.139.004zm8.498 3.5a.75.75 0 1 0 1.5 0zm4 0a.75.75 0 1 0 1.5 0zM6.652 10.801l6.503 6.462l1.058-1.064l-6.504-6.462zm7.6 6.42a9 9 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021c.586-.19 1.125-.178 1.624.129c.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38c-.97-.598-1.992-.564-2.873-.278c-.862.28-1.633.812-2.214 1.297c-.588.49-1.023.97-1.214 1.19zm6.748.433a54 54 0 0 1-.748-.053v-.007v.01l-.01.067a2 2 0 0 1-.07.286a2.8 2.8 0 0 1-.474.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962c.394-.505.61-1.01.726-1.392a4 4 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14c-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075c1.617 1.315 3.506 2.476 5.467 2.476zM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602c.316-.24.63-.365.864-.43a2 2 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22l-.068.005l-.144.016a4 4 0 0 0-.465.098a4.1 4.1 0 0 0-1.372.684C3.14 3.838 2.25 5.288 2.25 7.846zM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855c.284.522.237 1.087-.05 1.706c-.293.63-.8 1.227-1.267 1.683a9 9 0 0 1-.816.708l-.001.001l.442.606c.44.607.441.607.441.606h.001l.002-.002l.005-.003l.018-.014a6 6 0 0 0 .274-.216c.176-.145.418-.354.683-.614c.521-.51 1.175-1.254 1.578-2.123c.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29zm8.79 4.04h5.4v-1.5h-5.4zm5.4 0q.017 0 .035.015a.05.05 0 0 1 .015.035h1.5c0-.854-.696-1.55-1.55-1.55zm.05.05v2h1.5v-2zm0 2c0 .246-.204.45-.45.45v1.5c1.074 0 1.95-.876 1.95-1.95zm-.45.45h-4.6v1.5h4.6zm-4.6 0a.454.454 0 0 1-.45-.45h-1.5c0 1.074.876 1.95 1.95 1.95zm-.45-.45v-2h-1.5v2zm0-2q0-.017.015-.035a.05.05 0 0 1 .035-.015v-1.5c-.854 0-1.55.696-1.55 1.55zm2.75-5.55A2.75 2.75 0 0 0 14.75 5h1.5c0-.69.56-1.25 1.25-1.25zM14.75 5v1.5h1.5V5zm5.5 1.5V5h-1.5v1.5zm0-1.5a2.75 2.75 0 0 0-2.75-2.75v1.5c.69 0 1.25.56 1.25 1.25z"></svg:path>`,
})
export class SiPhoneLockedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneLockedFillIcon],svg[si-phone-locked-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 5a3 3 0 1 1 6 0v1.025c.85.143 1.5.885 1.5 1.775v2c0 1.212-.988 2.2-2.2 2.2h-4.6c-1.212 0-2.2-.988-2.2-2.2v-2c0-.89.65-1.632 1.5-1.775zm4 0v1h-2V5a1 1 0 1 1 2 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.684 16.73L7.18 10.27S13.684 5.537 6.25 3C6.252 3 3 3.115 3 7.846c0 2.308 1.626 4.846 3.716 6.808c.368.348.76.735 1.17 1.142c2.317 2.292 5.26 5.204 8.12 5.204C20.769 21 21 17.654 21 17.654c-2.206-6.462-6.62-1.73-7.316-.923"></svg:path>`,
})
export class SiPhoneLockedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneLockedLineIcon],svg[si-phone-locked-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15.5 6.5V5a2 2 0 1 1 4 0v1.5M7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27M14.8 7h5.4c.44 0 .8.36.8.8v2c0 .66-.54 1.2-1.2 1.2h-4.6c-.66 0-1.2-.54-1.2-1.2v-2c0-.44.36-.8.8-.8"></svg:path>`,
})
export class SiPhoneLockedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhonePausedDuotoneIcon],svg[si-phone-paused-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="m7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path><svg:path fill="currentColor" d="m7.18 10.27l-.44-.607l-.713.518l.625.62zm6.504 6.46l-.529.533l.571.567l.526-.61zm7.316.924l.748.052a.8.8 0 0 0-.038-.294zm-14.284-3l.516-.545l-.003-.002zM6.252 3l.242-.71l-.13-.044l-.139.004zM19.25 9a.75.75 0 0 0 1.5 0zm1.5-6a.75.75 0 0 0-1.5 0zm-5.5 6a.75.75 0 0 0 1.5 0zm1.5-6a.75.75 0 0 0-1.5 0zM6.652 10.801l6.503 6.462l1.058-1.064l-6.504-6.462zm7.6 6.42a9 9 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021c.586-.19 1.125-.178 1.624.129c.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38c-.97-.598-1.992-.564-2.873-.278c-.862.28-1.633.812-2.214 1.297c-.588.49-1.023.97-1.214 1.19zm6.748.433a54 54 0 0 1-.748-.053v-.007v.01l-.01.067a2 2 0 0 1-.07.286a2.8 2.8 0 0 1-.474.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962c.394-.505.61-1.01.726-1.392a4 4 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14c-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075c1.617 1.315 3.506 2.476 5.467 2.476zM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602c.316-.24.63-.365.864-.43a2 2 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22l-.068.005l-.144.016a4 4 0 0 0-.465.098a4.1 4.1 0 0 0-1.372.684C3.14 3.838 2.25 5.288 2.25 7.846zM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855c.284.522.237 1.087-.05 1.706c-.293.63-.8 1.227-1.267 1.683a9 9 0 0 1-.816.708l-.001.001l.442.606c.44.607.441.607.441.606h.001l.002-.002l.005-.003l.018-.014a6 6 0 0 0 .274-.216c.176-.145.418-.354.683-.614c.521-.51 1.175-1.254 1.578-2.123c.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29zM20.75 9V3h-1.5v6zm-4 0V3h-1.5v6z"></svg:path>`,
})
export class SiPhonePausedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhonePausedFillIcon],svg[si-phone-paused-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.684 16.73L7.18 10.27S13.684 5.537 6.25 3C6.252 3 3 3.115 3 7.846c0 2.308 1.626 4.846 3.716 6.808c.368.348.76.735 1.17 1.142c2.317 2.292 5.26 5.204 8.12 5.204C20.769 21 21 17.654 21 17.654c-2.206-6.462-6.62-1.73-7.316-.923M17 4v6a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0m4 0v6a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class SiPhonePausedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhonePausedLineIcon],svg[si-phone-paused-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20 9V3m-4 6V3m-8.82 7.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path>`,
})
export class SiPhonePausedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayDuotoneIcon],svg[si-play-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m5 3l16 9l-16 9z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="m5 3l16 9l-16 9z"></svg:path></svg:g>`,
})
export class SiPlayDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayFillIcon],svg[si-play-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.192 3.67l13.568 7.633a.8.8 0 0 1 0 1.394L6.192 20.33A.8.8 0 0 1 5 19.632V4.368a.8.8 0 0 1 1.192-.697"></svg:path>`,
})
export class SiPlayFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayForwardDuotoneIcon],svg[si-play-forward-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="m4 5l10 7l-10 7z"></svg:path><svg:path fill="currentColor" d="m21 12l.43.614a.75.75 0 0 0 0-1.228zM11 5l.43-.614A.75.75 0 0 0 10.25 5zm0 14h-.75a.75.75 0 0 0 1.18.614zm.75-4.867a.75.75 0 0 0-1.5 0zM14 12l.43.614a.75.75 0 0 0 0-1.228zM4 5l.43-.614A.75.75 0 0 0 3.25 5zm0 14h-.75a.75.75 0 0 0 1.18.614zm17.43-7.614l-10-7l-.86 1.228l10 7zm-10 8.228l10-7l-.86-1.228l-10 7zM10.25 5v4.688h1.5V5zm0 9.133V19h1.5v-4.867zm4.18-2.747l-10-7l-.86 1.228l10 7zM3.25 5v14h1.5V5zm1.18 14.614l10-7l-.86-1.228l-10 7z"></svg:path>`,
})
export class SiPlayForwardDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayForwardFillIcon],svg[si-play-forward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.573 4.18A1 1 0 0 0 3 5v14a1 1 0 0 0 1.573.82L10 16.02V19a1 1 0 0 0 1.573.82l10-7a1 1 0 0 0 0-1.64l-10-7A1 1 0 0 0 10 5v2.98zM12 9.38l2.573 1.8a1 1 0 0 1 0 1.64L12 14.62v2.46L19.256 12L12 6.92z" clip-rule="evenodd"></svg:path>`,
})
export class SiPlayForwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayForwardLineIcon],svg[si-play-forward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 12l.43.614a.75.75 0 0 0 0-1.228zM11 5l.43-.614A.75.75 0 0 0 10.25 5zm0 14h-.75a.75.75 0 0 0 1.18.614zm.75-4.867a.75.75 0 0 0-1.5 0zM14 12l.43.614a.75.75 0 0 0 0-1.228zM4 5l.43-.614A.75.75 0 0 0 3.25 5zm0 14h-.75a.75.75 0 0 0 1.18.614zm17.43-7.614l-10-7l-.86 1.228l10 7zm-10 8.228l10-7l-.86-1.228l-10 7zM10.25 5v4.688h1.5V5zm0 9.133V19h1.5v-4.867zm4.18-2.747l-10-7l-.86 1.228l10 7zM3.25 5v14h1.5V5zm1.18 14.614l10-7l-.86-1.228l-10 7z"></svg:path>`,
})
export class SiPlayForwardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayLineIcon],svg[si-play-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="m5 3l16 9l-16 9z"></svg:path>`,
})
export class SiPlayLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayNextDuotoneIcon],svg[si-play-next-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m3 5l10 7l-10 7z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m3 5l10 7l-10 7zm17.2 0h-2.4a.8.8 0 0 0-.8.8v12.4a.8.8 0 0 0 .8.8h2.4a.8.8 0 0 0 .8-.8V5.8a.8.8 0 0 0-.8-.8Z"></svg:path></svg:g>`,
})
export class SiPlayNextDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayNextFillIcon],svg[si-play-next-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.538 4.113a1 1 0 0 1 1.035.068l10 7a1 1 0 0 1 0 1.638l-10 7A1 1 0 0 1 2 19V5a1 1 0 0 1 .538-.887M16 5.8A1.8 1.8 0 0 1 17.8 4h1.4A1.8 1.8 0 0 1 21 5.8v12.4a1.8 1.8 0 0 1-1.8 1.8h-1.4a1.8 1.8 0 0 1-1.8-1.8z" clip-rule="evenodd"></svg:path>`,
})
export class SiPlayNextFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayNextLineIcon],svg[si-play-next-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m3 5l10 7l-10 7zm17.2 0h-2.4a.8.8 0 0 0-.8.8v12.4a.8.8 0 0 0 .8.8h2.4a.8.8 0 0 0 .8-.8V5.8a.8.8 0 0 0-.8-.8Z"></svg:path>`,
})
export class SiPlayNextLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayPreviousDuotoneIcon],svg[si-play-previous-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m21 5l-10 7l10 7z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 5l-10 7l10 7zM3.8 5h2.4a.8.8 0 0 1 .8.8v12.4a.8.8 0 0 1-.8.8H3.8a.8.8 0 0 1-.8-.8V5.8a.8.8 0 0 1 .8-.8Z"></svg:path></svg:g>`,
})
export class SiPlayPreviousDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayPreviousFillIcon],svg[si-play-previous-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.8A1.8 1.8 0 0 1 4.8 4h1.4A1.8 1.8 0 0 1 8 5.8v12.4A1.8 1.8 0 0 1 6.2 20H4.8A1.8 1.8 0 0 1 3 18.2zm18.462-1.687A1 1 0 0 1 22 5v14a1 1 0 0 1-1.573.82l-10-7a1 1 0 0 1 0-1.64l10-7a1 1 0 0 1 1.035-.067"></svg:path>`,
})
export class SiPlayPreviousFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayPreviousLineIcon],svg[si-play-previous-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 5l-10 7l10 7zM3.8 5h2.4a.8.8 0 0 1 .8.8v12.4a.8.8 0 0 1-.8.8H3.8a.8.8 0 0 1-.8-.8V5.8a.8.8 0 0 1 .8-.8Z"></svg:path>`,
})
export class SiPlayPreviousLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayRewindDuotoneIcon],svg[si-play-rewind-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="m20 5l-10 7l10 7z"></svg:path><svg:path fill="currentColor" d="m3 12l-.43-.614a.75.75 0 0 0 0 1.228zm10-7h.75a.75.75 0 0 0-1.18-.614zm0 14l-.43.614A.75.75 0 0 0 13.75 19zm.75-4.867a.75.75 0 0 0-1.5 0zM10 12l-.43-.614a.75.75 0 0 0 0 1.228zm10-7h.75a.75.75 0 0 0-1.18-.614zm0 14l-.43.614A.75.75 0 0 0 20.75 19zM3.43 12.614l10-7l-.86-1.228l-10 7zm10 5.772l-10-7l-.86 1.228l10 7zM12.25 5v4.688h1.5V5zm0 9.133V19h1.5v-4.867zm-1.82-1.519l10-7l-.86-1.228l-10 7zM19.25 5v14h1.5V5zm1.18 13.386l-10-7l-.86 1.228l10 7z"></svg:path>`,
})
export class SiPlayRewindDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayRewindFillIcon],svg[si-play-rewind-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 5a1 1 0 0 0-1.573-.82l-10 7a1 1 0 0 0 0 1.64l10 7A1 1 0 0 0 14 19v-2.98l5.427 3.8A1 1 0 0 0 21 19V5a1 1 0 0 0-1.573-.82L14 7.98zm-2 4.38V6.92L4.744 12L12 17.08v-2.46l-2.573-1.8a1 1 0 0 1 0-1.64z" clip-rule="evenodd"></svg:path>`,
})
export class SiPlayRewindFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayRewindLineIcon],svg[si-play-rewind-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 12l-.43-.614a.75.75 0 0 0 0 1.228zm10-7h.75a.75.75 0 0 0-1.18-.614zm0 14l-.43.614A.75.75 0 0 0 13.75 19zm.75-4.867a.75.75 0 0 0-1.5 0zM10 12l-.43-.614a.75.75 0 0 0 0 1.228zm10-7h.75a.75.75 0 0 0-1.18-.614zm0 14l-.43.614A.75.75 0 0 0 20.75 19zM3.43 12.614l10-7l-.86-1.228l-10 7zm10 5.772l-10-7l-.86 1.228l10 7zM12.25 5v4.688h1.5V5zm0 9.133V19h1.5v-4.867zm-1.82-1.519l10-7l-.86-1.228l-10 7zM19.25 5v14h1.5V5zm1.18 13.386l-10-7l-.86 1.228l10 7z"></svg:path>`,
})
export class SiPlayRewindLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siProjectsAltDuotoneIcon],svg[si-projects-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 12V6m-5 8V6m10 10V6M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiProjectsAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siProjectsAltFillIcon],svg[si-projects-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 2h13.2A3.4 3.4 0 0 1 22 5.4v13.2a3.4 3.4 0 0 1-3.4 3.4H5.4A3.4 3.4 0 0 1 2 18.6V5.4A3.4 3.4 0 0 1 5.4 2M7 5a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m6 1a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class SiProjectsAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siProjectsAltLineIcon],svg[si-projects-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 12V6m-5 8V6m10 10V6M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiProjectsAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siProjectsDuotoneIcon],svg[si-projects-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 21V3m-7 7h18M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiProjectsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siProjectsFillIcon],svg[si-projects-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M9 4h2v5h9v2h-9v9H9v-9H4V9h5z" clip-rule="evenodd"></svg:path>`,
})
export class SiProjectsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siProjectsLineIcon],svg[si-projects-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10 21V3m-7 7h18M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiProjectsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPullRequestDuotoneIcon],svg[si-pull-request-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M8 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0M6 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18 16v-5.6A4.4 4.4 0 0 0 13.6 6H11m7 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4M11 6l2-2m-2 2l2 2m-7 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V8m0 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class SiPullRequestDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPullRequestFillIcon],svg[si-pull-request-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 8.83a3.001 3.001 0 1 0-2 0v6.34a3.001 3.001 0 1 0 2 0zM6 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2m11-1.83a3.001 3.001 0 1 0 2 0V10.4A5.4 5.4 0 0 0 13.6 5h-.186l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 1 0 1.414-1.414L13.414 7h.186a3.4 3.4 0 0 1 3.4 3.4zM17 18a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class SiPullRequestFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPullRequestLineIcon],svg[si-pull-request-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18 16v-5.6A4.4 4.4 0 0 0 13.6 6H11m7 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4M11 6l2-2m-2 2l2 2m-7 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V8m0 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class SiPullRequestLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRecordDuotoneIcon],svg[si-record-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path></svg:g>`,
})
export class SiRecordDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRecordFillIcon],svg[si-record-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class SiRecordFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRecordLineIcon],svg[si-record-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path>`,
})
export class SiRecordLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveAlarmDuotoneIcon],svg[si-remove-alarm-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 21a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 13h8m2-10l3 3M3 6l3-3m14 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class SiRemoveAlarmDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveAlarmFillIcon],svg[si-remove-alarm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.707 3.707a1 1 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414zm10.586-1.414a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20 13a8 8 0 1 1-16 0a8 8 0 0 1 16 0M8 12a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class SiRemoveAlarmFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveAlarmLineIcon],svg[si-remove-alarm-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 13h8m2-10l3 3M3 6l3-3m14 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path>`,
})
export class SiRemoveAlarmLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveCircleDuotoneIcon],svg[si-remove-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 12h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiRemoveCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveCircleFillIcon],svg[si-remove-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class SiRemoveCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveCircleLineIcon],svg[si-remove-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 12h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiRemoveCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveDuotoneIcon],svg[si-remove-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 12h12"></svg:path>`,
})
export class SiRemoveDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveFillIcon],svg[si-remove-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiRemoveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveFromLibraryDuotoneIcon],svg[si-remove-from-library-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19.6 3H8.4A2.4 2.4 0 0 0 6 5.4v11.2A2.4 2.4 0 0 0 8.4 19h11.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10 11h8m2 11H8.4C5.42 22 3 19.58 3 16.6V5m5.4-2h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3"></svg:path></svg:g>`,
})
export class SiRemoveFromLibraryDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveFromLibraryFillIcon],svg[si-remove-from-library-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.6 2H8.4A2.4 2.4 0 0 0 6 4.4v11.2A2.4 2.4 0 0 0 8.4 18h11.2a2.4 2.4 0 0 0 2.4-2.4V4.4A2.4 2.4 0 0 0 19.6 2M10 9a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3 3a1 1 0 0 1 1 1v11.6C4 18.028 5.972 20 8.4 20H20a1 1 0 1 1 0 2H8.4A6.403 6.403 0 0 1 2 15.6V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class SiRemoveFromLibraryFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveFromLibraryLineIcon],svg[si-remove-from-library-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10 11h8m2 11H8.4C5.42 22 3 19.58 3 16.6V5m5.4-2h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3"></svg:path>`,
})
export class SiRemoveFromLibraryLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveLineIcon],svg[si-remove-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 12h12"></svg:path>`,
})
export class SiRemoveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveSquareDuotoneIcon],svg[si-remove-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 12h8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiRemoveSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveSquareFillIcon],svg[si-remove-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class SiRemoveSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveSquareLineIcon],svg[si-remove-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 12h8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiRemoveSquareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siReorderAltDuotoneIcon],svg[si-reorder-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 12h16M4 16h16M4 20h16M4 8h16M4 4h16"></svg:path>`,
})
export class SiReorderAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siReorderAltFillIcon],svg[si-reorder-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0-4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiReorderAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siReorderAltLineIcon],svg[si-reorder-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 12h16M4 16h16M4 20h16M4 8h16M4 4h16"></svg:path>`,
})
export class SiReorderAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siReorderDuotoneIcon],svg[si-reorder-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 12h16M4 15h16M4 18h16M4 9h16M4 6h16"></svg:path>`,
})
export class SiReorderDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siReorderFillIcon],svg[si-reorder-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zM3 9a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1 2a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"></svg:path>`,
})
export class SiReorderFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siReorderLineIcon],svg[si-reorder-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 12h16M4 15h16M4 18h16M4 9h16M4 6h16"></svg:path>`,
})
export class SiReorderLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRightTwoHeadedDuotoneIcon],svg[si-right-two-headed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-3-3m3 3l-3 3m-5-6l3 3l-3 3"></svg:path>`,
})
export class SiRightTwoHeadedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRightTwoHeadedFillIcon],svg[si-right-two-headed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.293 8.293a1 1 0 0 1 1.414 0L15.414 11h2.172l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L17.586 13h-2.172l-2.707 2.707a1 1 0 0 1-1.414-1.414L12.586 13H4a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiRightTwoHeadedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRightTwoHeadedLineIcon],svg[si-right-two-headed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-3-3m3 3l-3 3m-5-6l3 3l-3 3"></svg:path>`,
})
export class SiRightTwoHeadedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRupeeDuotoneIcon],svg[si-rupee-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 4h3.75c1.393 0 2.728.474 3.713 1.318S16 7.307 16 8.5s-.553 2.338-1.537 3.182c-.985.844-2.32 1.318-3.712 1.318H7l8.2 7M7 8.5h11M11 4h7"></svg:path>`,
})
export class SiRupeeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRupeeFillIcon],svg[si-rupee-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.001 12h3.75c1.172 0 2.272-.4 3.061-1.077a3.43 3.43 0 0 0 1.01-1.423H7a1 1 0 0 1 0-2h7.822a3.43 3.43 0 0 0-1.01-1.423C13.022 5.401 11.923 5 10.751 5H7a1 1 0 1 1 0-2h3.75l.18.002L11 3h7a1 1 0 1 1 0 2h-2.425a5.24 5.24 0 0 1 1.322 2.5H18a1 1 0 1 1 0 2h-1.103c-.236 1.127-.865 2.154-1.783 2.941C13.934 13.452 12.363 14 10.75 14H9.712l6.138 5.24a1 1 0 0 1-1.299 1.52l-8.197-6.997l-.01-.009a.996.996 0 0 1-.207-1.26A1 1 0 0 1 7.001 12"></svg:path>`,
})
export class SiRupeeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRupeeLineIcon],svg[si-rupee-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 4h3.75c1.393 0 2.728.474 3.713 1.318S16 7.307 16 8.5s-.553 2.338-1.537 3.182c-.985.844-2.32 1.318-3.712 1.318H7l8.2 7M7 8.5h11M11 4h7"></svg:path>`,
})
export class SiRupeeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSearchAltDuotoneIcon],svg[si-search-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M9 15A6 6 0 1 0 9 3a6 6 0 0 0 0 12"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-7.5-7.5M15 9A6 6 0 1 1 3 9a6 6 0 0 1 12 0"></svg:path></svg:g>`,
})
export class SiSearchAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSearchAltFillIcon],svg[si-search-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 2a7 7 0 1 0 4.192 12.606l7.1 7.101a1 1 0 0 0 1.415-1.414l-7.1-7.1A7 7 0 0 0 9 2M4 9a5 5 0 1 1 10 0A5 5 0 0 1 4 9" clip-rule="evenodd"></svg:path>`,
})
export class SiSearchAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSearchAltLineIcon],svg[si-search-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-7.5-7.5M15 9A6 6 0 1 1 3 9a6 6 0 0 1 12 0"></svg:path>`,
})
export class SiSearchAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSearchDuotoneIcon],svg[si-search-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M11 19a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class SiSearchDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSearchFillIcon],svg[si-search-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 11a9 9 0 1 1 16.032 5.618l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675A9 9 0 0 1 2 11m9-7a7 7 0 1 0 0 14a7 7 0 0 0 0-14" clip-rule="evenodd"></svg:path>`,
})
export class SiSearchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSearchLineIcon],svg[si-search-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path>`,
})
export class SiSearchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSegmentDuotoneIcon],svg[si-segment-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 12h8M4 8h16m-8 8h8"></svg:path>`,
})
export class SiSegmentDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSegmentFillIcon],svg[si-segment-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m8 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"></svg:path>`,
})
export class SiSegmentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSegmentLineIcon],svg[si-segment-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 12h8M4 8h16m-8 8h8"></svg:path>`,
})
export class SiSegmentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsAltDuotoneIcon],svg[si-settings-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#siSettingsAltDuotone0)"><svg:path fill-opacity=".16" fill-rule="evenodd" d="M18.71 10h2.69c.88 0 1.6.72 1.6 1.6v.8c0 .88-.72 1.6-1.6 1.6h-2.69c-.14.47-.32.91-.55 1.33l1.9 1.9c.62.62.62 1.64 0 2.26l-.57.57c-.62.62-1.64.62-2.26 0l-1.9-1.9c-.42.23-.86.41-1.33.55v2.69c0 .88-.72 1.6-1.6 1.6h-.8c-.88 0-1.6-.72-1.6-1.6v-2.69a6.8 6.8 0 0 1-1.33-.55l-1.9 1.9c-.62.62-1.64.62-2.26 0l-.57-.57c-.62-.62-.62-1.64 0-2.26l1.9-1.9A6.8 6.8 0 0 1 5.29 14H2.6c-.88 0-1.6-.72-1.6-1.6v-.8c0-.88.72-1.6 1.6-1.6h2.69c.14-.47.32-.91.55-1.33l-1.9-1.9c-.62-.62-.62-1.64 0-2.26l.57-.57c.62-.62 1.64-.62 2.26 0l1.9 1.9c.42-.23.86-.41 1.33-.55V2.6c0-.88.72-1.6 1.6-1.6h.8c.88 0 1.6.72 1.6 1.6v2.69c.47.14.91.32 1.33.55l1.9-1.9c.62-.62 1.64-.62 2.26 0l.57.57c.62.62.62 1.64 0 2.26l-1.9 1.9c.23.42.41.86.55 1.33M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path><svg:path d="m18.71 10l-.719.214a.75.75 0 0 0 .719.536zm-.55-1.33l-.53-.53a.75.75 0 0 0-.128.89zm1.9-1.9l-.53-.53zm0-2.26l-.53.53zm-.57-.57l.53-.53zm-2.26 0l-.53-.53zm-1.9 1.9l-.36.658a.75.75 0 0 0 .89-.128zM14 5.29h-.75a.75.75 0 0 0 .536.719zm-4 0l.214.719a.75.75 0 0 0 .536-.719zm-1.33.55l-.53.53a.75.75 0 0 0 .89.128zM5.84 8.67l.658.36a.75.75 0 0 0-.128-.89zM5.29 10v.75a.75.75 0 0 0 .719-.536zm0 4l.719-.214a.75.75 0 0 0-.719-.536zm.55 1.33l.53.53a.75.75 0 0 0 .128-.89zm-1.9 1.9l-.53-.53zm0 2.26l-.53.53zm.57.57l.53-.53zm2.26 0l-.53-.53zm1.9-1.9l.36-.658a.75.75 0 0 0-.89.128zm1.33.55h.75a.75.75 0 0 0-.536-.719zm4 0l-.214-.719a.75.75 0 0 0-.536.719zm1.33-.55l.53-.53a.75.75 0 0 0-.89-.128zm2.83-2.83l-.658-.36a.75.75 0 0 0 .128.89zm.55-1.33v-.75a.75.75 0 0 0-.719.536zm2.69-4.75h-2.69v1.5h2.69zm-1.971.536a7.5 7.5 0 0 0-.611-1.476l-1.316.72c.203.37.363.76.49 1.184zM18.69 9.2l1.9-1.9l-1.06-1.06l-1.9 1.9zm1.9-1.9a2.355 2.355 0 0 0 0-3.32l-1.06 1.06a.856.856 0 0 1 0 1.2zm0-3.32l-.57-.57l-1.06 1.06l.57.57zm-.57-.57a2.355 2.355 0 0 0-3.32 0l1.06 1.06a.856.856 0 0 1 1.2 0zm-3.32 0l-1.9 1.9l1.06 1.06l1.9-1.9zm-1.01 1.772a7.5 7.5 0 0 0-1.476-.61l-.428 1.437a6 6 0 0 1 1.184.489zm-.94.108V2.6h-1.5v2.69zm0-2.69A2.355 2.355 0 0 0 12.4.25v1.5c.466 0 .85.384.85.85zM12.4.25h-.8v1.5h.8zm-.8 0A2.355 2.355 0 0 0 9.25 2.6h1.5c0-.466.384-.85.85-.85zM9.25 2.6v2.69h1.5V2.6zm.536 1.971a7.5 7.5 0 0 0-1.476.611l.72 1.316a6 6 0 0 1 1.184-.49zM9.2 5.31l-1.9-1.9l-1.06 1.06l1.9 1.9zm-1.9-1.9a2.355 2.355 0 0 0-3.32 0l1.06 1.06a.856.856 0 0 1 1.2 0zm-3.32 0l-.57.57l1.06 1.06l.57-.57zm-.57.57a2.355 2.355 0 0 0 0 3.32l1.06-1.06a.856.856 0 0 1 0-1.2zm0 3.32l1.9 1.9l1.06-1.06l-1.9-1.9zm1.772 1.01a7.5 7.5 0 0 0-.61 1.476l1.437.428a6 6 0 0 1 .489-1.184zm.108.94H2.6v1.5h2.69zm-2.69 0A2.355 2.355 0 0 0 .25 11.6h1.5c0-.466.384-.85.85-.85zM.25 11.6v.8h1.5v-.8zm0 .8a2.355 2.355 0 0 0 2.35 2.35v-1.5a.855.855 0 0 1-.85-.85zm2.35 2.35h2.69v-1.5H2.6zm1.971-.536a7.5 7.5 0 0 0 .611 1.476l1.316-.72a6 6 0 0 1-.49-1.184zm.739.586l-1.9 1.9l1.06 1.06l1.9-1.9zm-1.9 1.9a2.355 2.355 0 0 0 0 3.32l1.06-1.06a.856.856 0 0 1 0-1.2zm0 3.32l.57.57l1.06-1.06l-.57-.57zm.57.57a2.355 2.355 0 0 0 3.32 0l-1.06-1.06a.856.856 0 0 1-1.2 0zm3.32 0l1.9-1.9l-1.06-1.06l-1.9 1.9zm1.01-1.772a7.5 7.5 0 0 0 1.476.61l.428-1.437a6 6 0 0 1-1.184-.489zm.94-.108v2.69h1.5v-2.69zm0 2.69a2.355 2.355 0 0 0 2.35 2.35v-1.5a.855.855 0 0 1-.85-.85zm2.35 2.35h.8v-1.5h-.8zm.8 0a2.355 2.355 0 0 0 2.35-2.35h-1.5c0 .466-.384.85-.85.85zm2.35-2.35v-2.69h-1.5v2.69zm-.536-1.971a7.5 7.5 0 0 0 1.476-.611l-.72-1.316c-.37.203-.76.363-1.184.49zm.586-.739l1.9 1.9l1.06-1.06l-1.9-1.9zm1.9 1.9a2.355 2.355 0 0 0 3.32 0l-1.06-1.06a.856.856 0 0 1-1.2 0zm3.32 0l.57-.57l-1.06-1.06l-.57.57zm.57-.57a2.355 2.355 0 0 0 0-3.32l-1.06 1.06a.856.856 0 0 1 0 1.2zm0-3.32l-1.9-1.9l-1.06 1.06l1.9 1.9zm-1.772-1.01a7.5 7.5 0 0 0 .61-1.476l-1.437-.428a6 6 0 0 1-.489 1.184zm-.108-.94h2.69v-1.5h-2.69zm2.69 0a2.355 2.355 0 0 0 2.35-2.35h-1.5c0 .466-.384.85-.85.85zm2.35-2.35v-.8h-1.5v.8zm0-.8a2.355 2.355 0 0 0-2.35-2.35v1.5c.466 0 .85.384.85.85zm-8.5.4A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12zM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75zM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12zM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25z"></svg:path></svg:g><svg:defs><svg:clippath id="siSettingsAltDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiSettingsAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsAltFillIcon],svg[si-settings-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.71 10h2.69c.88 0 1.6.72 1.6 1.6v.8c0 .88-.72 1.6-1.6 1.6h-2.69c-.14.47-.32.91-.55 1.33l1.9 1.9c.62.62.62 1.64 0 2.26l-.57.57c-.62.62-1.64.62-2.26 0l-1.9-1.9c-.42.23-.86.41-1.33.55v2.69c0 .88-.72 1.6-1.6 1.6h-.8c-.88 0-1.6-.72-1.6-1.6v-2.69a6.8 6.8 0 0 1-1.33-.55l-1.9 1.9c-.62.62-1.64.62-2.26 0l-.57-.57c-.62-.62-.62-1.64 0-2.26l1.9-1.9A6.8 6.8 0 0 1 5.29 14H2.6c-.88 0-1.6-.72-1.6-1.6v-.8c0-.88.72-1.6 1.6-1.6h2.69c.14-.47.32-.91.55-1.33l-1.9-1.9c-.62-.62-.62-1.64 0-2.26l.57-.57c.62-.62 1.64-.62 2.26 0l1.9 1.9c.42-.23.86-.41 1.33-.55V2.6c0-.88.72-1.6 1.6-1.6h.8c.88 0 1.6.72 1.6 1.6v2.69c.47.14.91.32 1.33.55l1.9-1.9c.62-.62 1.64-.62 2.26 0l.57.57c.62.62.62 1.64 0 2.26l-1.9 1.9c.23.42.41.86.55 1.33M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path>`,
})
export class SiSettingsAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsAltLineIcon],svg[si-settings-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" clip-path="url(#siSettingsAltLine0)"><svg:path d="M21.4 10h-2.69a6.8 6.8 0 0 0-.55-1.33l1.9-1.9c.62-.62.62-1.64 0-2.26l-.57-.57c-.62-.62-1.64-.62-2.26 0l-1.9 1.9A6.8 6.8 0 0 0 14 5.29V2.6c0-.88-.72-1.6-1.6-1.6h-.8c-.88 0-1.6.72-1.6 1.6v2.69c-.47.14-.91.32-1.33.55l-1.9-1.9c-.62-.62-1.64-.62-2.26 0l-.57.57c-.62.62-.62 1.64 0 2.26l1.9 1.9c-.23.42-.41.86-.55 1.33H2.6c-.88 0-1.6.72-1.6 1.6v.8c0 .88.72 1.6 1.6 1.6h2.69c.14.47.32.91.55 1.33l-1.9 1.9c-.62.62-.62 1.64 0 2.26l.57.57c.62.62 1.64.62 2.26 0l1.9-1.9c.42.23.86.41 1.33.55v2.69c0 .88.72 1.6 1.6 1.6h.8c.88 0 1.6-.72 1.6-1.6v-2.69c.47-.14.91-.32 1.33-.55l1.9 1.9c.62.62 1.64.62 2.26 0l.57-.57c.62-.62.62-1.64 0-2.26l-1.9-1.9c.23-.42.41-.86.55-1.33h2.69c.88 0 1.6-.72 1.6-1.6v-.8c0-.88-.72-1.6-1.6-1.6Z"></svg:path><svg:path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path></svg:g><svg:defs><svg:clippath id="siSettingsAltLine0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiSettingsAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsApplicationsDuotoneIcon],svg[si-settings-applications-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#siSettingsApplicationsDuotone0)"><svg:path fill-opacity=".16" fill-rule="evenodd" d="M16.75 10.5h1.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-1.75c-.09.28-.2.55-.33.8l1.24 1.24c.59.58.59 1.53 0 2.12c-.58.59-1.53.59-2.12 0l-1.24-1.24c-.26.13-.52.24-.8.33v1.75c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-1.75c-.28-.09-.55-.2-.8-.33l-1.24 1.24c-.58.59-1.53.59-2.12 0a1.49 1.49 0 0 1 0-2.12l1.24-1.24c-.13-.26-.24-.52-.33-.8H5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h1.75c.09-.28.2-.55.33-.8L6.34 8.46c-.59-.58-.58-1.53 0-2.12a1.49 1.49 0 0 1 2.12 0L9.7 7.58c.26-.13.52-.24.8-.33V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1.75c.28.09.55.2.8.33l1.24-1.24c.58-.59 1.53-.58 2.12 0s.59 1.53 0 2.12L16.42 9.7c.13.26.24.52.33.8M12 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4" clip-rule="evenodd"></svg:path><svg:path d="m16.75 10.5l-.714.23c.1.31.388.52.714.52zm-.33-.8l-.53-.53a.75.75 0 0 0-.14.865zm-.88-3.36l.53.53l.005-.004zM14.3 7.58l-.346.665a.75.75 0 0 0 .876-.135zm-.8-.33h-.75c0 .326.21.614.52.714zm-3 0l.23.714a.75.75 0 0 0 .52-.714zm-.8.33l-.53.53a.75.75 0 0 0 .865.14zm-3.36.88l.53-.53l-.004-.005zM7.58 9.7l.665.346a.75.75 0 0 0-.135-.876zm-.33.8v.75a.75.75 0 0 0 .714-.52zm0 3l.714-.23a.75.75 0 0 0-.714-.52zm.33.8l.53.53a.75.75 0 0 0 .14-.865zm-1.24 3.36l.53-.53l-.004-.005zm2.12 0l-.53-.53l-.005.004zm1.24-1.24l.346-.665a.75.75 0 0 0-.876.135zm.8.33h.75a.75.75 0 0 0-.52-.714zm3 0l-.23-.714a.75.75 0 0 0-.52.714zm.8-.33l.53-.53a.75.75 0 0 0-.865-.14zm3.36 1.24l-.53-.53l-.005.004zm0-2.12l-.53.53l.004.005zm-1.24-1.24l-.665-.346a.75.75 0 0 0 .135.876zm.33-.8v-.75a.75.75 0 0 0-.714.52zM3.933 1.75h16.134V.25H3.933zm16.134 0c1.206 0 2.183.978 2.183 2.183h1.5A3.683 3.683 0 0 0 20.067.25zm2.183 2.183v16.134h1.5V3.933zm0 16.134a2.183 2.183 0 0 1-2.183 2.183v1.5a3.683 3.683 0 0 0 3.683-3.683zm-2.183 2.183H3.933v1.5h16.134zm-16.134 0a2.183 2.183 0 0 1-2.183-2.183H.25a3.683 3.683 0 0 0 3.683 3.683zM1.75 20.067V3.933H.25v16.134zm0-16.134c0-1.205.978-2.183 2.183-2.183V.25A3.683 3.683 0 0 0 .25 3.933zM18.5 9.75h-1.75v1.5h1.75zm-1.036.52a6.4 6.4 0 0 0-.373-.905l-1.342.67c.116.232.21.457.287.694zm-.514-.04l1.24-1.24l-1.06-1.06l-1.24 1.24zm1.24-1.24a2.24 2.24 0 0 0-.004-3.185l-1.052 1.07a.74.74 0 0 1-.004 1.055zm-.004-3.185c-.874-.858-2.299-.888-3.18.01l1.069 1.05a.75.75 0 0 1 1.06.01zm-3.176.005l-1.24 1.24l1.06 1.06l1.24-1.24zm-.364 1.105a6 6 0 0 0-.917-.379l-.458 1.428c.244.079.475.173.683.281zm-.396.335V5.5h-1.5v1.75zm0-1.75A2.25 2.25 0 0 0 12 3.25v1.5c.416 0 .75.334.75.75zM12 3.25A2.25 2.25 0 0 0 9.75 5.5h1.5c0-.416.334-.75.75-.75zM9.75 5.5v1.75h1.5V5.5zm.52 1.036a6.4 6.4 0 0 0-.905.373l.67 1.342a5 5 0 0 1 .694-.287zm-.04.514L8.99 5.81L7.93 6.87l1.24 1.24zM8.99 5.81a2.24 2.24 0 0 0-3.185.004l1.07 1.052a.74.74 0 0 1 1.055.004zm-3.185.004c-.858.874-.888 2.299.01 3.18l1.05-1.069a.75.75 0 0 1 .01-1.06zM5.81 8.99l1.24 1.24l1.06-1.06l-1.24-1.24zm1.105.364a6 6 0 0 0-.379.917l1.428.458c.079-.244.173-.475.281-.683zm.335.396H5.5v1.5h1.75zm-1.75 0A2.25 2.25 0 0 0 3.25 12h1.5c0-.416.334-.75.75-.75zM3.25 12a2.25 2.25 0 0 0 2.25 2.25v-1.5a.75.75 0 0 1-.75-.75zm2.25 2.25h1.75v-1.5H5.5zm1.036-.52c.103.322.229.617.373.905l1.342-.67a5 5 0 0 1-.287-.694zm.514.04l-1.24 1.24l1.06 1.06l1.24-1.24zm-1.24 1.24a2.24 2.24 0 0 0 .004 3.185l1.052-1.07a.74.74 0 0 1 .004-1.055zm0 3.18a2.24 2.24 0 0 0 3.185-.004l-1.07-1.052a.74.74 0 0 1-1.055-.004zm3.18 0l1.24-1.24l-1.06-1.06l-1.24 1.24zm.364-1.105c.292.152.601.278.917.379l.458-1.428a4.4 4.4 0 0 1-.683-.281zm.396-.335v1.75h1.5v-1.75zm0 1.75A2.25 2.25 0 0 0 12 20.75v-1.5a.75.75 0 0 1-.75-.75zM12 20.75a2.25 2.25 0 0 0 2.25-2.25h-1.5c0 .416-.334.75-.75.75zm2.25-2.25v-1.75h-1.5v1.75zm-.52-1.036c.322-.104.617-.229.905-.373l-.67-1.342a5 5 0 0 1-.694.287zm.04-.514l1.24 1.24l1.06-1.06l-1.24-1.24zm1.24 1.24a2.24 2.24 0 0 0 3.185-.004l-1.07-1.052a.74.74 0 0 1-1.055-.004zm3.18 0a2.24 2.24 0 0 0-.004-3.185l-1.052 1.07a.74.74 0 0 1-.004 1.055zm0-3.18l-1.24-1.24l-1.06 1.06l1.24 1.24zm-1.105-.364a6 6 0 0 0 .379-.917l-1.428-.458a4.4 4.4 0 0 1-.281.683zm-.335-.396h1.75v-1.5h-1.75zm1.75 0A2.25 2.25 0 0 0 20.75 12h-1.5c0 .416-.334.75-.75.75zM20.75 12a2.25 2.25 0 0 0-2.25-2.25v1.5c.416 0 .75.334.75.75zm-7.5 0c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 12zM12 13.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 14.75zM10.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 12zM12 10.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 9.25z"></svg:path></svg:g><svg:defs><svg:clippath id="siSettingsApplicationsDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiSettingsApplicationsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsApplicationsFillIcon],svg[si-settings-applications-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20.067 1H3.933A2.933 2.933 0 0 0 1 3.933v16.134A2.933 2.933 0 0 0 3.933 23h16.134A2.933 2.933 0 0 0 23 20.067V3.933A2.933 2.933 0 0 0 20.067 1M18.5 10.5h-1.75c-.09-.28-.2-.54-.33-.8l1.24-1.24c.59-.59.59-1.54 0-2.12s-1.54-.59-2.12 0L14.3 7.58c-.25-.13-.52-.24-.8-.33V5.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.75c-.28.09-.54.2-.8.33L8.46 6.34a1.49 1.49 0 0 0-2.12 0c-.58.59-.59 1.54 0 2.12L7.58 9.7c-.13.25-.24.52-.33.8H5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h1.75c.09.28.2.54.33.8l-1.24 1.24a1.49 1.49 0 0 0 0 2.12c.59.59 1.54.59 2.12 0l1.24-1.24c.25.13.52.24.8.33v1.75c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-1.75c.28-.09.54-.2.8-.33l1.24 1.24c.59.59 1.54.59 2.12 0c.59-.59.59-1.54 0-2.12l-1.24-1.24c.13-.25.24-.52.33-.8h1.75c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5" clip-rule="evenodd"></svg:path>`,
})
export class SiSettingsApplicationsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsApplicationsLineIcon],svg[si-settings-applications-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" clip-path="url(#siSettingsApplicationsLine0)"><svg:path d="M20.067 1H3.933A2.933 2.933 0 0 0 1 3.933v16.134A2.933 2.933 0 0 0 3.933 23h16.134A2.933 2.933 0 0 0 23 20.067V3.933A2.933 2.933 0 0 0 20.067 1Z"></svg:path><svg:path d="M18.5 10.5h-1.75c-.09-.28-.2-.54-.33-.8l1.24-1.24c.59-.59.59-1.54 0-2.12s-1.54-.59-2.12 0L14.3 7.58c-.25-.13-.52-.24-.8-.33V5.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.75c-.28.09-.54.2-.8.33L8.46 6.34a1.49 1.49 0 0 0-2.12 0c-.58.59-.59 1.54 0 2.12L7.58 9.7c-.13.25-.24.52-.33.8H5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h1.75c.09.28.2.54.33.8l-1.24 1.24a1.49 1.49 0 0 0 0 2.12c.59.59 1.54.59 2.12 0l1.24-1.24c.25.13.52.24.8.33v1.75c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-1.75c.28-.09.54-.2.8-.33l1.24 1.24c.59.59 1.54.59 2.12 0c.59-.59.59-1.54 0-2.12l-1.24-1.24c.13-.25.24-.52.33-.8h1.75c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5Z"></svg:path><svg:path d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></svg:path></svg:g><svg:defs><svg:clippath id="siSettingsApplicationsLine0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiSettingsApplicationsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsCuteDuotoneIcon],svg[si-settings-cute-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#siSettingsCuteDuotone0)"><svg:path fill-opacity=".16" fill-rule="evenodd" d="M20 9c1.66 0 3 1.34 3 3s-1.34 3-3 3h-.76l.54.54a3 3 0 0 1 0 4.24a3 3 0 0 1-4.24 0l-.54-.54V20c0 1.66-1.34 3-3 3s-3-1.34-3-3v-.76l-.54.54a3 3 0 0 1-4.24 0a3 3 0 0 1 0-4.24l.54-.54H4c-1.66 0-3-1.34-3-3s1.34-3 3-3h.76l-.54-.54a3 3 0 0 1 0-4.24a3 3 0 0 1 4.24 0l.54.54V4c0-1.66 1.34-3 3-3s3 1.34 3 3v.76l.54-.54a3 3 0 0 1 4.24 0a3 3 0 0 1 0 4.24l-.54.54zm-4 3a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path><svg:path d="m19.24 9l-.53-.53a.75.75 0 0 0 .53 1.28zm.54-.54l.53.53zm-4.24-4.24l-.53-.53zm-.54.54h-.75a.75.75 0 0 0 1.28.53zm-6 0l-.53.53a.75.75 0 0 0 1.28-.53zm-.54-.54l.53-.53zM4.22 8.46l-.53.53zm.54.54v.75a.75.75 0 0 0 .53-1.28zm0 6l.53.53a.75.75 0 0 0-.53-1.28zm-.54.54l-.53-.53zm4.24 4.24l.53.53zm.54-.54h.75a.75.75 0 0 0-1.28-.53zm6 0l.53-.53a.75.75 0 0 0-1.28.53zm.54.54l-.53.53zm4.24-4.24l.53-.53zm-.54-.54v-.75a.75.75 0 0 0-.53 1.28zm4.51-3A3.746 3.746 0 0 0 20 8.25v1.5A2.246 2.246 0 0 1 22.25 12zM20 8.25h-.76v1.5H20zm-.23 1.28l.54-.54l-1.06-1.06l-.54.54zm.54-.54a3.75 3.75 0 0 0 0-5.3l-1.06 1.06a2.25 2.25 0 0 1 0 3.18zm0-5.3a3.75 3.75 0 0 0-5.3 0l1.06 1.06a2.25 2.25 0 0 1 3.18 0zm-5.3 0l-.54.54l1.06 1.06l.54-.54zm.74 1.07V4h-1.5v.76zm0-.76A3.746 3.746 0 0 0 12 .25v1.5A2.246 2.246 0 0 1 14.25 4zM12 .25A3.746 3.746 0 0 0 8.25 4h1.5A2.246 2.246 0 0 1 12 1.75zM8.25 4v.76h1.5V4zm1.28.23l-.54-.54l-1.06 1.06l.54.54zm-.54-.54a3.75 3.75 0 0 0-5.3 0l1.06 1.06a2.25 2.25 0 0 1 3.18 0zm-5.3 0a3.75 3.75 0 0 0 0 5.3l1.06-1.06a2.25 2.25 0 0 1 0-3.18zm0 5.3l.54.54l1.06-1.06l-.54-.54zm1.07-.74H4v1.5h.76zm-.76 0A3.746 3.746 0 0 0 .25 12h1.5A2.246 2.246 0 0 1 4 9.75zM.25 12A3.746 3.746 0 0 0 4 15.75v-1.5A2.246 2.246 0 0 1 1.75 12zM4 15.75h.76v-1.5H4zm.23-1.28l-.54.54l1.06 1.06l.54-.54zm-.54.54a3.75 3.75 0 0 0 0 5.3l1.06-1.06a2.25 2.25 0 0 1 0-3.18zm0 5.3a3.75 3.75 0 0 0 5.3 0l-1.06-1.06a2.25 2.25 0 0 1-3.18 0zm5.3 0l.54-.54l-1.06-1.06l-.54.54zm-.74-1.07V20h1.5v-.76zm0 .76A3.746 3.746 0 0 0 12 23.75v-1.5A2.246 2.246 0 0 1 9.75 20zM12 23.75A3.746 3.746 0 0 0 15.75 20h-1.5A2.246 2.246 0 0 1 12 22.25zM15.75 20v-.76h-1.5V20zm-1.28-.23l.54.54l1.06-1.06l-.54-.54zm.54.54a3.75 3.75 0 0 0 5.3 0l-1.06-1.06a2.25 2.25 0 0 1-3.18 0zm5.3 0a3.75 3.75 0 0 0 0-5.3l-1.06 1.06a2.25 2.25 0 0 1 0 3.18zm0-5.3l-.54-.54l-1.06 1.06l.54.54zm-1.07.74H20v-1.5h-.76zm.76 0A3.746 3.746 0 0 0 23.75 12h-1.5A2.246 2.246 0 0 1 20 14.25zM15.25 12A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12zM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75zM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12zM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25z"></svg:path></svg:g><svg:defs><svg:clippath id="siSettingsCuteDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiSettingsCuteDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsCuteFillIcon],svg[si-settings-cute-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 9c1.66 0 3 1.34 3 3s-1.34 3-3 3h-.76l.54.54a3 3 0 0 1 0 4.24a3 3 0 0 1-4.24 0l-.54-.54V20c0 1.66-1.34 3-3 3s-3-1.34-3-3v-.76l-.54.54a3 3 0 0 1-4.24 0a3 3 0 0 1 0-4.24l.54-.54H4c-1.66 0-3-1.34-3-3s1.34-3 3-3h.76l-.54-.54a3 3 0 0 1 0-4.24a3 3 0 0 1 4.24 0l.54.54V4c0-1.66 1.34-3 3-3s3 1.34 3 3v.76l.54-.54a3 3 0 0 1 4.24 0a3 3 0 0 1 0 4.24l-.54.54zm-4 3a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path>`,
})
export class SiSettingsCuteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsCuteLineIcon],svg[si-settings-cute-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" clip-path="url(#siSettingsCuteLine0)"><svg:path d="M23 12c0-1.66-1.34-3-3-3h-.76l.54-.54a3 3 0 0 0 0-4.24a3 3 0 0 0-4.24 0l-.54.54V4c0-1.66-1.34-3-3-3S9 2.34 9 4v.76l-.54-.54a3 3 0 0 0-4.24 0a3 3 0 0 0 0 4.24l.54.54H4c-1.66 0-3 1.34-3 3s1.34 3 3 3h.76l-.54.54a3 3 0 0 0 0 4.24a3 3 0 0 0 4.24 0l.54-.54V20c0 1.66 1.34 3 3 3s3-1.34 3-3v-.76l.54.54a3 3 0 0 0 4.24 0a3 3 0 0 0 0-4.24l-.54-.54H20c1.66 0 3-1.34 3-3Z"></svg:path><svg:path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path></svg:g><svg:defs><svg:clippath id="siSettingsCuteLine0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiSettingsCuteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsDuotoneIcon],svg[si-settings-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#siSettingsDuotone0)"><svg:path fill-opacity=".16" fill-rule="evenodd" d="M18.71 10H21v-.02c1.1 0 2 .9 2 2s-.9 2-2 2h-2.29c-.07.23-.15.46-.24.68c-.1.22-.2.44-.31.65l1.62 1.62c.78.78.78 2.05 0 2.83s-2.05.78-2.83 0l-1.62-1.62c-.21.12-.43.22-.65.31s-.45.17-.68.24v2.29c0 1.1-.9 2-2 2s-2-.9-2-2v-2.29c-.23-.07-.46-.15-.68-.24c-.22-.1-.44-.2-.65-.31l-1.62 1.62c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83l1.62-1.62c-.12-.21-.22-.43-.31-.65s-.17-.45-.24-.68H3c-1.1 0-2-.9-2-2s.9-2 2-2h2.33a7.5 7.5 0 0 1 .54-1.32L4.25 7.04c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0L8.7 5.83c.21-.11.42-.21.64-.3h.01c.22-.09.44-.17.67-.24V3c0-1.1.9-2 2-2s2 .9 2 2v2.31c.23.07.45.15.67.24h.01c.22.09.43.19.64.3l1.62-1.62c.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83l-1.62 1.62a7.5 7.5 0 0 1 .54 1.32M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path><svg:path d="M21 10v.75a.75.75 0 0 0 .75-.75zm-2.29 0l-.718.218a.75.75 0 0 0 .718.532zm-.54-1.32l-.53-.53a.75.75 0 0 0-.134.878zm1.62-1.62l.53.53zm-2.83-2.83l-.53-.53zm-1.62 1.62l-.348.664a.75.75 0 0 0 .878-.134zm-.64-.3l.284-.694A.8.8 0 0 0 14.7 4.8zm-.01 0l-.284.694a.8.8 0 0 0 .284.056zm-.67-.24h-.75c0 .33.216.621.532.718zm-4-.02l.218.718a.75.75 0 0 0 .532-.718zm-.67.24v.75a.8.8 0 0 0 .284-.056zm-.01 0v-.75a.8.8 0 0 0-.284.056zm-.64.3l-.53.53a.75.75 0 0 0 .878.134zM5.87 8.66l.664.348A.75.75 0 0 0 6.4 8.13zm-.54 1.32v.75a.75.75 0 0 0 .718-.532zm-.04 4l.718-.218a.75.75 0 0 0-.718-.532zm.55 1.33l.53.53a.75.75 0 0 0 .121-.902zm-1.62 1.62l-.53-.53zm2.83 2.83l.53.53zm1.62-1.62l.348-.664a.75.75 0 0 0-.878.134zm.65.31l-.31.683l.026.011zm.68.24h.75a.75.75 0 0 0-.532-.718zm4 0l-.218-.718a.75.75 0 0 0-.532.718zm1.33-.55l.53-.53a.75.75 0 0 0-.902-.121zm4.45-1.21l.53-.53zm-1.62-1.62l-.664-.348a.75.75 0 0 0 .134.878zm.31-.65l.683.31l.011-.026zm.24-.68v-.75a.75.75 0 0 0-.718.532zm2.29-4v-.75a.75.75 0 0 0-.75.75zm0-.73h-2.29v1.5H21zm-1.573.532a9 9 0 0 0-.263-.746l-1.388.568c.08.195.152.403.216.614zm-.263-.746a8 8 0 0 0-.33-.704l-1.328.696c.1.193.19.382.27.576zm-.464.174l1.62-1.62l-1.06-1.06l-1.62 1.62zm1.62-1.62a2.754 2.754 0 0 0 0-3.89l-1.06 1.06a1.254 1.254 0 0 1 0 1.77zm0-3.89a2.754 2.754 0 0 0-3.89 0l1.06 1.06a1.254 1.254 0 0 1 1.77 0zm-3.89 0l-1.62 1.62l1.06 1.06l1.62-1.62zm-.742 1.486a8 8 0 0 0-.704-.33l-.568 1.388c.194.08.383.17.576.27zm-.988.364V4.8h-.01v1.5h.01zm.274-.694a8 8 0 0 0-.736-.264l-.436 1.436c.204.062.402.134.604.216zm-.204.454V3h-1.5v2.31zm0-2.31A2.756 2.756 0 0 0 12.02.25v1.5c.686 0 1.25.564 1.25 1.25zM12.02.25A2.756 2.756 0 0 0 9.27 3h1.5c0-.686.564-1.25 1.25-1.25zM9.27 3v2.29h1.5V3zm.532 1.572a8 8 0 0 0-.736.264l.568 1.388c.202-.082.4-.154.604-.216zm-.452.958v-.75h-.01v1.5h.01zm-.294-.694c-.246.1-.477.21-.704.33l.696 1.328c.193-.1.382-.19.576-.27zm.174.464L7.61 3.68L6.55 4.74l1.62 1.62zM7.61 3.68a2.754 2.754 0 0 0-3.89 0l1.06 1.06a1.254 1.254 0 0 1 1.77 0zm-3.89 0a2.754 2.754 0 0 0 0 3.89l1.06-1.06a1.254 1.254 0 0 1 0-1.77zm0 3.89l1.62 1.62L6.4 8.13L4.78 6.51zm1.486.742c-.12.227-.23.458-.33.704l1.388.568c.08-.194.17-.383.27-.576zm-.33.704c-.1.245-.188.497-.264.746l1.436.436c.064-.211.136-.419.216-.614zm.454.214H3v1.5h2.33zM3 9.23a2.756 2.756 0 0 0-2.75 2.75h1.5c0-.686.564-1.25 1.25-1.25zM.25 11.98A2.756 2.756 0 0 0 3 14.73v-1.5c-.686 0-1.25-.564-1.25-1.25zM3 14.73h2.29v-1.5H3zm1.572-.532c.076.249.164.501.264.746l1.388-.568a7 7 0 0 1-.216-.614zm.264.746c.097.237.21.49.353.738l1.302-.744a5 5 0 0 1-.267-.562zm.474-.164L3.69 16.4l1.06 1.06l1.62-1.62zM3.69 16.4a2.754 2.754 0 0 0 0 3.89l1.06-1.06a1.254 1.254 0 0 1 0-1.77zm0 3.89a2.754 2.754 0 0 0 3.89 0l-1.06-1.06a1.254 1.254 0 0 1-1.77 0zm3.89 0l1.62-1.62l-1.06-1.06l-1.62 1.62zm.742-1.486c.232.122.471.23.688.329l.62-1.366a12 12 0 0 1-.612-.291zm.714.34c.245.1.497.188.746.264l.436-1.436a7 7 0 0 1-.614-.216zm.214-.454v2.29h1.5v-2.29zm0 2.29A2.756 2.756 0 0 0 12 23.73v-1.5c-.686 0-1.25-.564-1.25-1.25zM12 23.73a2.756 2.756 0 0 0 2.75-2.75h-1.5c0 .686-.564 1.25-1.25 1.25zm2.75-2.75v-2.29h-1.5v2.29zm-.532-1.573c.249-.075.501-.163.746-.263l-.568-1.388c-.195.08-.403.152-.614.216zm.746-.263c.237-.097.49-.21.738-.353l-.744-1.302a5 5 0 0 1-.562.267zm-.164-.474l1.62 1.62l1.06-1.06l-1.62-1.62zm1.62 1.62a2.754 2.754 0 0 0 3.89 0l-1.06-1.06a1.254 1.254 0 0 1-1.77 0zm3.89 0a2.754 2.754 0 0 0 0-3.89l-1.06 1.06a1.254 1.254 0 0 1 0 1.77zm0-3.89l-1.62-1.62l-1.06 1.06l1.62 1.62zm-1.486-.742c.122-.232.23-.471.329-.688l-1.366-.62a12 12 0 0 1-.291.612zm.34-.714c.1-.245.188-.497.263-.746l-1.434-.436a7 7 0 0 1-.217.614zm-.454-.214H21v-1.5h-2.29zm2.29 0a2.756 2.756 0 0 0 2.75-2.75h-1.5c0 .686-.564 1.25-1.25 1.25zm2.75-2.75A2.756 2.756 0 0 0 21 9.23v1.5c.686 0 1.25.564 1.25 1.25zm-3.5-2V10h1.5v-.02zm-5 2.02A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12zM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75zM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12zM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25z"></svg:path></svg:g><svg:defs><svg:clippath id="siSettingsDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiSettingsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsFillIcon],svg[si-settings-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.71 10H21v-.02c1.1 0 2 .9 2 2s-.9 2-2 2h-2.29c-.07.23-.15.46-.24.68c-.1.22-.2.44-.31.65l1.62 1.62c.78.78.78 2.05 0 2.83s-2.05.78-2.83 0l-1.62-1.62c-.21.12-.43.22-.65.31s-.45.17-.68.24v2.29c0 1.1-.9 2-2 2s-2-.9-2-2v-2.29c-.23-.07-.46-.15-.68-.24c-.22-.1-.44-.2-.65-.31l-1.62 1.62c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83l1.62-1.62c-.12-.21-.22-.43-.31-.65s-.17-.45-.24-.68H3c-1.1 0-2-.9-2-2s.9-2 2-2h2.33a7.5 7.5 0 0 1 .54-1.32L4.25 7.04c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0L8.7 5.83c.21-.11.42-.21.64-.3h.01c.22-.09.44-.17.67-.24V3c0-1.1.9-2 2-2s2 .9 2 2v2.31c.23.07.45.15.67.24h.01c.22.09.43.19.64.3l1.62-1.62c.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83l-1.62 1.62a7.5 7.5 0 0 1 .54 1.32M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path>`,
})
export class SiSettingsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsLineIcon],svg[si-settings-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" clip-path="url(#siSettingsLine0)"><svg:path d="M21 10h-2.29a7.5 7.5 0 0 0-.54-1.32l1.62-1.62c.78-.78.78-2.05 0-2.83s-2.05-.78-2.83 0l-1.62 1.62c-.21-.11-.42-.21-.64-.3h-.01c-.22-.09-.44-.17-.67-.24V3c0-1.1-.9-2-2-2s-2 .9-2 2v2.29c-.23.07-.45.15-.67.24h-.01c-.22.09-.43.19-.64.3L7.08 4.21c-.78-.78-2.05-.78-2.83 0s-.78 2.05 0 2.83l1.62 1.62a7.5 7.5 0 0 0-.54 1.32H3c-1.1 0-2 .9-2 2s.9 2 2 2h2.29c.07.23.15.46.24.68s.19.44.31.65l-1.62 1.62c-.78.78-.78 2.05 0 2.83s2.05.78 2.83 0l1.62-1.62c.21.11.43.21.65.31c.22.09.45.17.68.24v2.29c0 1.1.9 2 2 2s2-.9 2-2v-2.29c.23-.07.46-.15.68-.24s.44-.19.65-.31l1.62 1.62c.78.78 2.05.78 2.83 0s.78-2.05 0-2.83l-1.62-1.62c.11-.21.21-.43.31-.65c.09-.22.17-.45.24-.68H21c1.1 0 2-.9 2-2s-.9-2-2-2z"></svg:path><svg:path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path></svg:g><svg:defs><svg:clippath id="siSettingsLine0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiSettingsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsThickDuotoneIcon],svg[si-settings-thick-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M18.51 9.49h1.87c.88 0 1.6.72 1.6 1.6v1.8c0 .88-.72 1.6-1.6 1.6h-1.87q-.047.136-.106.269l-.034.081l1.32 1.32c.62.62.62 1.64 0 2.26l-1.27 1.27c-.62.62-1.64.62-2.26 0l-1.32-1.32q-.096.043-.2.08l-.15.06v1.87c0 .88-.72 1.6-1.6 1.6h-1.8c-.88 0-1.6-.72-1.6-1.6v-1.87q-.136-.047-.269-.106l-.081-.034l-1.32 1.32c-.62.62-1.64.62-2.26 0l-1.27-1.27c-.62-.62-.62-1.64 0-2.26l1.32-1.32q-.043-.096-.08-.2l-.06-.15H3.6c-.88 0-1.6-.72-1.6-1.6v-1.8c0-.88.72-1.6 1.6-1.6h1.87q.047-.136.106-.269l.034-.081l-1.32-1.32c-.62-.62-.62-1.64 0-2.26l1.27-1.27c.62-.62 1.64-.62 2.26 0l1.32 1.32q.096-.043.2-.08l.15-.06V3.6c0-.88.72-1.6 1.6-1.6h1.8c.88 0 1.6.72 1.6 1.6v1.87q.136.047.269.106l.081.034l1.32-1.32c.62-.62 1.64-.62 2.26 0l1.27 1.27c.62.62.62 1.64 0 2.26l-1.32 1.32q.043.096.08.2zM16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m18.51 9.49l-.692.288a.75.75 0 0 0 .692.462zm-.14-.35l-.53-.53a.75.75 0 0 0-.153.84zm1.32-1.32l-.53-.53zm0-2.26l-.53.53zm-1.27-1.27l.53-.53zm-2.26 0l-.53-.53zm-1.32 1.32l-.288.692a.75.75 0 0 0 .818-.162zm-.35-.14h-.75c0 .323.207.61.513.712zm-5 0l.288.692a.75.75 0 0 0 .462-.692zm-.35.14l-.53.53a.75.75 0 0 0 .84.153zM7.82 4.29l.53-.53zm-2.26 0l-.53-.53zM4.29 5.56l.53.53zm0 2.26l.53-.53zm1.32 1.32l.692.288a.75.75 0 0 0-.162-.818zm-.14.35v.75a.75.75 0 0 0 .712-.513zm0 5l.692-.289a.75.75 0 0 0-.692-.461zm.14.35l.53.53a.75.75 0 0 0 .153-.84zm-1.32 1.32l-.53-.53zm0 2.26l.53-.53zm1.27 1.27l-.53.53zm2.26 0l.53.53zm1.32-1.32l.288-.692a.75.75 0 0 0-.818.162zm.35.14h.75a.75.75 0 0 0-.513-.712zm5 0l-.289-.692a.75.75 0 0 0-.461.692zm.35-.14l.53-.53a.75.75 0 0 0-.84-.153zm1.32 1.32l-.53.53zm2.26 0l.53.53zm1.27-1.27l-.53-.53zm-1.32-3.58l-.692-.288a.75.75 0 0 0 .162.818zm.14-.35v-.75a.75.75 0 0 0-.712.513zm1.87-5.75h-1.87v1.5h1.87zm-1.178.462c-.02-.048-.037-.093-.062-.159a4 4 0 0 0-.087-.213l-1.366.62c.015.033.03.072.053.13c.02.051.047.126.078.198zm-.302.468l1.32-1.32l-1.06-1.06l-1.32 1.32zm1.32-1.32a2.355 2.355 0 0 0 0-3.32l-1.06 1.06a.856.856 0 0 1 0 1.2zm0-3.32l-1.27-1.27l-1.06 1.06l1.27 1.27zm-1.27-1.27a2.355 2.355 0 0 0-3.32 0l1.06 1.06a.856.856 0 0 1 1.2 0zm-3.32 0l-1.32 1.32l1.06 1.06l1.32-1.32zm-.502 1.158c-.091-.039-.246-.108-.4-.16l-.475 1.424c.085.028.15.059.299.12zm.112.552V3.6h-1.5v1.87zm0-1.87a2.355 2.355 0 0 0-2.35-2.35v1.5c.466 0 .85.384.85.85zm-2.35-2.35h-1.8v1.5h1.8zm-1.8 0A2.355 2.355 0 0 0 8.74 3.6h1.5c0-.466.384-.85.85-.85zM8.74 3.6v1.87h1.5V3.6zm.462 1.178c-.048.02-.093.037-.159.062c-.06.022-.136.052-.213.087l.62 1.366c.033-.015.072-.03.13-.053c.051-.02.126-.047.198-.078zm.468.302L8.35 3.76L7.29 4.82l1.32 1.32zM8.35 3.76a2.355 2.355 0 0 0-3.32 0l1.06 1.06a.856.856 0 0 1 1.2 0zm-3.32 0L3.76 5.03l1.06 1.06l1.27-1.27zM3.76 5.03a2.355 2.355 0 0 0 0 3.32l1.06-1.06a.856.856 0 0 1 0-1.2zm0 3.32l1.32 1.32l1.06-1.06l-1.32-1.32zm1.158.502c-.039.091-.108.246-.16.4l1.424.475c.028-.085.059-.15.12-.299zm.552-.112H3.6v1.5h1.87zm-1.87 0a2.355 2.355 0 0 0-2.35 2.35h1.5c0-.466.384-.85.85-.85zm-2.35 2.35v1.8h1.5v-1.8zm0 1.8a2.355 2.355 0 0 0 2.35 2.35v-1.5a.855.855 0 0 1-.85-.85zm2.35 2.35h1.87v-1.5H3.6zm1.178-.462c.02.047.037.093.062.159c.022.06.052.136.087.213l1.366-.62a2 2 0 0 1-.053-.13c-.02-.051-.047-.126-.078-.199zm.302-.468l-1.32 1.32l1.06 1.06l1.32-1.32zm-1.32 1.32a2.355 2.355 0 0 0 0 3.32l1.06-1.06a.856.856 0 0 1 0-1.2zm0 3.32l1.27 1.27l1.06-1.06l-1.27-1.27zm1.27 1.27a2.355 2.355 0 0 0 3.32 0l-1.06-1.06a.856.856 0 0 1-1.2 0zm3.32 0l1.32-1.32l-1.06-1.06l-1.32 1.32zm.502-1.158c.091.039.246.108.4.16l.475-1.424c-.085-.028-.15-.059-.299-.12zm-.112-.552v1.87h1.5v-1.87zm0 1.87a2.355 2.355 0 0 0 2.35 2.35v-1.5a.855.855 0 0 1-.85-.85zm2.35 2.35h1.8v-1.5h-1.8zm1.8 0a2.355 2.355 0 0 0 2.35-2.35h-1.5c0 .466-.384.85-.85.85zm2.35-2.35v-1.87h-1.5v1.87zm-.462-1.178c.047-.02.093-.037.159-.062c.06-.023.136-.052.213-.087l-.62-1.366c-.033.015-.072.03-.13.053c-.051.02-.126.047-.199.078zm-.468-.302l1.32 1.32l1.06-1.06l-1.32-1.32zm1.32 1.32a2.355 2.355 0 0 0 3.32 0l-1.06-1.06a.856.856 0 0 1-1.2 0zm3.32 0l1.27-1.27l-1.06-1.06l-1.27 1.27zm1.27-1.27a2.355 2.355 0 0 0 0-3.32l-1.06 1.06a.856.856 0 0 1 0 1.2zm0-3.32l-1.32-1.32l-1.06 1.06l1.32 1.32zm-1.158-.502c.039-.091.108-.246.16-.4l-1.424-.475c-.028.085-.059.15-.12.299zm-.552.112h1.87v-1.5h-1.87zm1.87 0a2.355 2.355 0 0 0 2.35-2.35h-1.5c0 .466-.384.85-.85.85zm2.35-2.35v-1.8h-1.5v1.8zm0-1.8a2.355 2.355 0 0 0-2.35-2.35v1.5c.466 0 .85.384.85.85zm-7.48.91A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12zM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75zM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12zM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25z"></svg:path>`,
})
export class SiSettingsThickDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsThickFillIcon],svg[si-settings-thick-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.51 9.49h1.87c.88 0 1.6.72 1.6 1.6v1.8c0 .88-.72 1.6-1.6 1.6h-1.87q-.047.136-.106.269l-.034.081l1.32 1.32c.62.62.62 1.64 0 2.26l-1.27 1.27c-.62.62-1.64.62-2.26 0l-1.32-1.32q-.096.043-.2.08l-.15.06v1.87c0 .88-.72 1.6-1.6 1.6h-1.8c-.88 0-1.6-.72-1.6-1.6v-1.87q-.136-.047-.269-.106l-.081-.034l-1.32 1.32c-.62.62-1.64.62-2.26 0l-1.27-1.27c-.62-.62-.62-1.64 0-2.26l1.32-1.32q-.043-.096-.08-.2l-.06-.15H3.6c-.88 0-1.6-.72-1.6-1.6v-1.8c0-.88.72-1.6 1.6-1.6h1.87q.047-.136.106-.269l.034-.081l-1.32-1.32c-.62-.62-.62-1.64 0-2.26l1.27-1.27c.62-.62 1.64-.62 2.26 0l1.32 1.32q.096-.043.2-.08l.15-.06V3.6c0-.88.72-1.6 1.6-1.6h1.8c.88 0 1.6.72 1.6 1.6v1.87q.136.047.269.106l.081.034l1.32-1.32c.62-.62 1.64-.62 2.26 0l1.27 1.27c.62.62.62 1.64 0 2.26l-1.32 1.32q.043.096.08.2zM16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path>`,
})
export class SiSettingsThickFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsThickLineIcon],svg[si-settings-thick-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M20.38 9.49h-1.87c-.05-.12-.09-.24-.14-.35l1.32-1.32c.62-.62.62-1.64 0-2.26l-1.27-1.27c-.62-.62-1.64-.62-2.26 0l-1.32 1.32c-.12-.05-.23-.1-.35-.14V3.6c0-.88-.72-1.6-1.6-1.6h-1.8c-.88 0-1.6.72-1.6 1.6v1.87c-.12.05-.24.09-.35.14L7.82 4.29c-.62-.62-1.64-.62-2.26 0L4.29 5.56c-.62.62-.62 1.64 0 2.26l1.32 1.32c-.05.12-.1.23-.14.35H3.6c-.88 0-1.6.72-1.6 1.6v1.8c0 .88.72 1.6 1.6 1.6h1.87c.05.12.09.24.14.35l-1.32 1.32c-.62.62-.62 1.64 0 2.26l1.27 1.27c.62.62 1.64.62 2.26 0l1.32-1.32c.12.05.23.1.35.14v1.87c0 .88.72 1.6 1.6 1.6h1.8c.88 0 1.6-.72 1.6-1.6v-1.87c.12-.05.24-.09.35-.14l1.32 1.32c.62.62 1.64.62 2.26 0l1.27-1.27c.62-.62.62-1.64 0-2.26l-1.32-1.32c.05-.12.1-.23.14-.35h1.87c.88 0 1.6-.72 1.6-1.6v-1.8c0-.88-.72-1.6-1.6-1.6Z"></svg:path><svg:path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path></svg:g>`,
})
export class SiSettingsThickLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldAlertDuotoneIcon],svg[si-shield-alert-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 15h.008M12 7v5m-8-.748c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path></svg:g>`,
})
export class SiShieldAlertDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldAlertFillIcon],svg[si-shield-alert-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728M13 7a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0zm-1 7a1 1 0 1 0 0 2h.008a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class SiShieldAlertFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldAlertLineIcon],svg[si-shield-alert-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 15h.008M12 7v5m-8-.748c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path>`,
})
export class SiShieldAlertLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldBadDuotoneIcon],svg[si-shield-bad-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.172 13.828L12 11m0 0l2.828-2.828M12 11l2.828 2.828M12 11L9.172 8.172M4 11.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path></svg:g>`,
})
export class SiShieldBadDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldBadFillIcon],svg[si-shield-bad-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728m3.648-13.101a1 1 0 1 0-1.415-1.415L12 9.586L9.879 7.464A1 1 0 0 0 8.464 8.88L10.586 11l-2.122 2.121a1 1 0 1 0 1.415 1.415L12 12.414l2.121 2.122a1 1 0 1 0 1.415-1.415L13.414 11z" clip-rule="evenodd"></svg:path>`,
})
export class SiShieldBadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldBadLineIcon],svg[si-shield-bad-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m9.172 13.828l5.656-5.656m0 5.656L9.172 8.172M4 11.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path>`,
})
export class SiShieldBadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldDuotoneIcon],svg[si-shield-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"></svg:path></svg:g>`,
})
export class SiShieldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldFillIcon],svg[si-shield-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"></svg:path>`,
})
export class SiShieldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldHealthSafetyDuotoneIcon],svg[si-shield-health-safety-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 11h6m-3 3V8m-8 3.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path></svg:g>`,
})
export class SiShieldHealthSafetyDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldHealthSafetyFillIcon],svg[si-shield-health-safety-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728M12 7a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2V8a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiShieldHealthSafetyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldHealthSafetyLineIcon],svg[si-shield-health-safety-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 11h6m-3 3V8m-8 3.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path>`,
})
export class SiShieldHealthSafetyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldLineIcon],svg[si-shield-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"></svg:path>`,
})
export class SiShieldLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldPoliceDuotoneIcon],svg[si-shield-police-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728m2.334-10.045l2.652-2.147c.063-.126.126-.252.126-.379c-.063-.126-.19-.252-.316-.252H13.4l-1.073-2.904c-.063-.127-.19-.253-.316-.253s-.252.126-.315.253l-1.01 2.904H7.34c-.126 0-.252.126-.315.252a.304.304 0 0 0 .126.38L9.74 11.87l-.821 3.157a.304.304 0 0 0 .126.379a.4.4 0 0 0 .379 0l2.652-1.894l2.588 1.894c.063.063.126.063.19.063c.063 0 .126 0 .189-.063a.304.304 0 0 0 .126-.379z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m16.874 9.788l-2.652 2.147l.947 3.093a.304.304 0 0 1-.126.379c-.063.063-.126.063-.19.063c-.063 0-.126 0-.189-.063l-2.588-1.894l-2.652 1.894a.4.4 0 0 1-.379 0a.304.304 0 0 1-.126-.379l.82-3.157l-2.588-2.083a.304.304 0 0 1-.126-.379c.063-.126.19-.252.315-.252h3.347l1.01-2.904c.063-.127.19-.253.315-.253c.127 0 .253.126.316.253l1.073 2.904h3.283c.127 0 .253.126.316.252c0 .127-.063.253-.126.38Z"></svg:path></svg:g>`,
})
export class SiShieldPoliceDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldPoliceFillIcon],svg[si-shield-police-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728m2.334-10.045l2.652-2.147c.063-.126.126-.252.126-.379c-.063-.126-.19-.252-.316-.252H13.4l-1.073-2.904c-.063-.127-.19-.253-.316-.253s-.252.126-.315.253l-1.01 2.904H7.34c-.126 0-.252.126-.315.252a.304.304 0 0 0 .126.38L9.74 11.87l-.821 3.157a.304.304 0 0 0 .126.379a.4.4 0 0 0 .379 0l2.652-1.894l2.588 1.894c.063.063.126.063.19.063c.063 0 .126 0 .189-.063a.304.304 0 0 0 .126-.379z" clip-rule="evenodd"></svg:path>`,
})
export class SiShieldPoliceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldPoliceLineIcon],svg[si-shield-police-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"></svg:path><svg:path d="m16.874 9.788l-2.652 2.147l.947 3.093a.304.304 0 0 1-.126.379c-.063.063-.126.063-.19.063c-.063 0-.126 0-.189-.063l-2.588-1.894l-2.652 1.894a.4.4 0 0 1-.379 0a.304.304 0 0 1-.126-.379l.82-3.157l-2.588-2.083a.304.304 0 0 1-.126-.379c.063-.126.19-.252.315-.252h3.347l1.01-2.904c.063-.127.19-.253.315-.253c.127 0 .253.126.316.253l1.073 2.904h3.283c.127 0 .253.126.316.252c0 .127-.063.253-.126.38Z"></svg:path></svg:g>`,
})
export class SiShieldPoliceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldSecurityDuotoneIcon],svg[si-shield-security-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 11h16m-8 10V2m-8 9.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path></svg:g>`,
})
export class SiShieldSecurityDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldSecurityFillIcon],svg[si-shield-security-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728M13 10V3h-2v7H5v2h6v9h2v-9h6v-2z" clip-rule="evenodd"></svg:path>`,
})
export class SiShieldSecurityFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldSecurityLineIcon],svg[si-shield-security-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 11h16m-8 10V2m-8 9.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path>`,
})
export class SiShieldSecurityLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldTipDuotoneIcon],svg[si-shield-tip-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.008 7H12m.008 8v-5M4 11.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path></svg:g>`,
})
export class SiShieldTipDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldTipFillIcon],svg[si-shield-tip-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728M13.008 7a1 1 0 0 1-1 1H12a1 1 0 1 1 0-2h.008a1 1 0 0 1 1 1m-1 9a1 1 0 0 1-1-1v-5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path>`,
})
export class SiShieldTipFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldTipLineIcon],svg[si-shield-tip-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.008 7H12m.008 8v-5M4 11.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path>`,
})
export class SiShieldTipLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldVerifiedDuotoneIcon],svg[si-shield-verified-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 12l3 3l5-7M4 11.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path></svg:g>`,
})
export class SiShieldVerifiedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldVerifiedFillIcon],svg[si-shield-verified-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728m4.926-13.4a1 1 0 1 0-1.628-1.162l-4.314 6.04l-2.165-2.166a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.52-.126z" clip-rule="evenodd"></svg:path>`,
})
export class SiShieldVerifiedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldVerifiedLineIcon],svg[si-shield-verified-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 12l3 3l5-7M4 11.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path>`,
})
export class SiShieldVerifiedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSignInAltDuotoneIcon],svg[si-sign-in-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m13 16l4-4m0 0l-4-4m4 4H3m10.6-9h5A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H13"></svg:path>`,
})
export class SiSignInAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSignInAltFillIcon],svg[si-sign-in-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.6 2a1 1 0 0 0 0 2h5A1.4 1.4 0 0 1 20 5.4v13.2a1.4 1.4 0 0 1-1.4 1.4H13a1 1 0 1 0 0 2h5.6a3.4 3.4 0 0 0 3.4-3.4V5.4A3.4 3.4 0 0 0 18.6 2z"></svg:path><svg:path fill="currentColor" d="M12.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L14.586 13H3a1 1 0 1 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414"></svg:path>`,
})
export class SiSignInAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSignInAltLineIcon],svg[si-sign-in-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m13 16l4-4m0 0l-4-4m4 4H3m10.6-9h5A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H13"></svg:path>`,
})
export class SiSignInAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSignInDuotoneIcon],svg[si-sign-in-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14 15l3-3m0 0l-3-3m3 3H3m7-4V5.4A2.4 2.4 0 0 1 12.4 3h6.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4h-6.2a2.4 2.4 0 0 1-2.4-2.4V16"></svg:path>`,
})
export class SiSignInDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSignInFillIcon],svg[si-sign-in-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.4A1.4 1.4 0 0 1 12.4 4h6.2A1.4 1.4 0 0 1 20 5.4v13.2a1.4 1.4 0 0 1-1.4 1.4h-6.2a1.4 1.4 0 0 1-1.4-1.4V16a1 1 0 1 0-2 0v2.6a3.4 3.4 0 0 0 3.4 3.4h6.2a3.4 3.4 0 0 0 3.4-3.4V5.4A3.4 3.4 0 0 0 18.6 2h-6.2A3.4 3.4 0 0 0 9 5.4V8a1 1 0 1 0 2 0z"></svg:path><svg:path fill="currentColor" d="M13.293 8.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L14.586 13H3a1 1 0 1 1 0-2h11.586l-1.293-1.293a1 1 0 0 1 0-1.414"></svg:path>`,
})
export class SiSignInFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSignInLineIcon],svg[si-sign-in-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14 15l3-3m0 0l-3-3m3 3H3m7-4V5.4A2.4 2.4 0 0 1 12.4 3h6.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4h-6.2a2.4 2.4 0 0 1-2.4-2.4V16"></svg:path>`,
})
export class SiSignInLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSignOutAltDuotoneIcon],svg[si-sign-out-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m17 16l4-4m0 0l-4-4m4 4H7m4 9H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3H11"></svg:path>`,
})
export class SiSignOutAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSignOutAltFillIcon],svg[si-sign-out-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5.4A1.4 1.4 0 0 1 5.4 4H11a1 1 0 1 0 0-2H5.4A3.4 3.4 0 0 0 2 5.4v13.2A3.4 3.4 0 0 0 5.4 22H11a1 1 0 1 0 0-2H5.4A1.4 1.4 0 0 1 4 18.6z"></svg:path><svg:path fill="currentColor" d="M16.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 13H7a1 1 0 1 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414"></svg:path>`,
})
export class SiSignOutAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSignOutAltLineIcon],svg[si-sign-out-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m17 16l4-4m0 0l-4-4m4 4H7m4 9H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3H11"></svg:path>`,
})
export class SiSignOutAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSignOutDuotoneIcon],svg[si-sign-out-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m18 15l3-3m0 0l-3-3m3 3H7m7 4v2.6a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3h6.2A2.4 2.4 0 0 1 14 5.4V8"></svg:path>`,
})
export class SiSignOutDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSignOutFillIcon],svg[si-sign-out-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5.4A1.4 1.4 0 0 1 5.4 4h6.2A1.4 1.4 0 0 1 13 5.4V8a1 1 0 1 0 2 0V5.4A3.4 3.4 0 0 0 11.6 2H5.4A3.4 3.4 0 0 0 2 5.4v13.2A3.4 3.4 0 0 0 5.4 22h6.2a3.4 3.4 0 0 0 3.4-3.4V16a1 1 0 1 0-2 0v2.6a1.4 1.4 0 0 1-1.4 1.4H5.4A1.4 1.4 0 0 1 4 18.6z"></svg:path><svg:path fill="currentColor" d="M17.293 8.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 13H7a1 1 0 1 1 0-2h11.586l-1.293-1.293a1 1 0 0 1 0-1.414"></svg:path>`,
})
export class SiSignOutFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSignOutLineIcon],svg[si-sign-out-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m18 15l3-3m0 0l-3-3m3 3H7m7 4v2.6a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3h6.2A2.4 2.4 0 0 1 14 5.4V8"></svg:path>`,
})
export class SiSignOutLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSortAltDuotoneIcon],svg[si-sort-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 10h12M4 6h16M4 14h8m-8 4h4"></svg:path>`,
})
export class SiSortAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSortAltFillIcon],svg[si-sort-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zm0 4a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"></svg:path>`,
})
export class SiSortAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSortAltLineIcon],svg[si-sort-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 10h12M4 6h16M4 14h8m-8 4h4"></svg:path>`,
})
export class SiSortAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSortDuotoneIcon],svg[si-sort-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 12h12M4 8h16M4 16h8"></svg:path>`,
})
export class SiSortDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSortFillIcon],svg[si-sort-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0-4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiSortFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSortLineIcon],svg[si-sort-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 12h12M4 8h16M4 16h8"></svg:path>`,
})
export class SiSortLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastCircleDuotoneIcon],svg[si-south-east-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 8l8 8m0 0v-5m0 5h-5m11-4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiSouthEastCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastCircleFillIcon],svg[si-south-east-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.707 7.293a1 1 0 0 0-1.414 1.414L13.586 15H11a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1v-5a1 1 0 1 0-2 0v2.586z" clip-rule="evenodd"></svg:path>`,
})
export class SiSouthEastCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastCircleLineIcon],svg[si-south-east-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 8l8 8m0 0v-5m0 5h-5m11-4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiSouthEastCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastDuotoneIcon],svg[si-south-east-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 8l8 8m0 0v-5m0 5h-5"></svg:path>`,
})
export class SiSouthEastDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastEscapeAltDuotoneIcon],svg[si-south-east-escape-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m10 10l8 8m0 0v-4m0 4h-4m-5-3h-.6C7.07 15 6 13.93 6 12.6V8.4C6 7.07 7.07 6 8.4 6h4.2C13.93 6 15 7.07 15 8.4V9"></svg:path>`,
})
export class SiSouthEastEscapeAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastEscapeAltFillIcon],svg[si-south-east-escape-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.4 7C7.622 7 7 7.622 7 8.4v4.2c0 .778.622 1.4 1.4 1.4H9a1 1 0 1 1 0 2h-.6A3.394 3.394 0 0 1 5 12.6V8.4C5 6.518 6.518 5 8.4 5h4.2C14.482 5 16 6.518 16 8.4V9a1 1 0 1 1-2 0v-.6c0-.778-.622-1.4-1.4-1.4zm.893 2.293a1 1 0 0 1 1.414 0L17 15.586V14a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h1.586l-6.293-6.293a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiSouthEastEscapeAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastEscapeAltLineIcon],svg[si-south-east-escape-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m10 10l8 8m0 0v-4m0 4h-4m-5-3h-.6C7.07 15 6 13.93 6 12.6V8.4C6 7.07 7.07 6 8.4 6h4.2C13.93 6 15 7.07 15 8.4V9"></svg:path>`,
})
export class SiSouthEastEscapeAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastEscapeDuotoneIcon],svg[si-south-east-escape-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17h-.6C7.07 17 6 15.93 6 14.6V8.4C6 7.07 7.07 6 8.4 6h6.2C15.93 6 17 7.07 17 8.4V9m-7 1l8 8m0 0h-4m4 0v-4"></svg:path>`,
})
export class SiSouthEastEscapeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastEscapeFillIcon],svg[si-south-east-escape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.4 7C7.622 7 7 7.622 7 8.4v6.2c0 .778.622 1.4 1.4 1.4H9a1 1 0 1 1 0 2h-.6A3.394 3.394 0 0 1 5 14.6V8.4C5 6.518 6.518 5 8.4 5h6.2C16.482 5 18 6.518 18 8.4V9a1 1 0 1 1-2 0v-.6c0-.778-.622-1.4-1.4-1.4zm.893 2.293a1 1 0 0 1 1.414 0L17 15.586V14a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h1.586l-6.293-6.293a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiSouthEastEscapeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastEscapeLineIcon],svg[si-south-east-escape-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17h-.6C7.07 17 6 15.93 6 14.6V8.4C6 7.07 7.07 6 8.4 6h6.2C15.93 6 17 7.07 17 8.4V9m-7 1l8 8m0 0h-4m4 0v-4"></svg:path>`,
})
export class SiSouthEastEscapeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastFillIcon],svg[si-south-east-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.293 7.293a1 1 0 0 1 1.414 0L15 13.586V11a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.586L7.293 8.707a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiSouthEastFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastLineIcon],svg[si-south-east-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 8l8 8m0 0v-5m0 5h-5"></svg:path>`,
})
export class SiSouthEastLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastSquareDuotoneIcon],svg[si-south-east-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 8l8 8m0 0v-5m0 5h-5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiSouthEastSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastSquareFillIcon],svg[si-south-east-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m3.307 4.293a1 1 0 0 0-1.414 1.414L13.586 15H11a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1v-5a1 1 0 1 0-2 0v2.586z" clip-rule="evenodd"></svg:path>`,
})
export class SiSouthEastSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastSquareLineIcon],svg[si-south-east-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 8l8 8m0 0v-5m0 5h-5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiSouthEastSquareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestCircleDuotoneIcon],svg[si-south-west-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m16 8l-8 8m0 0v-5m0 5h5m9-4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiSouthWestCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestCircleFillIcon],svg[si-south-west-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.293-3.293a1 1 0 0 0-1.414-1.414L9 13.586V11a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-2.586z" clip-rule="evenodd"></svg:path>`,
})
export class SiSouthWestCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestCircleLineIcon],svg[si-south-west-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m16 8l-8 8m0 0v-5m0 5h5m9-4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiSouthWestCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestDuotoneIcon],svg[si-south-west-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16 8l-8 8m0 0v-5m0 5h5"></svg:path>`,
})
export class SiSouthWestDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestEscapeAltDuotoneIcon],svg[si-south-west-escape-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14 10l-8 8m0 0v-4m0 4h4m5-3h.6c1.33 0 2.4-1.07 2.4-2.4V8.4C18 7.07 16.93 6 15.6 6h-4.2C10.07 6 9 7.07 9 8.4V9"></svg:path>`,
})
export class SiSouthWestEscapeAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestEscapeAltFillIcon],svg[si-south-west-escape-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 8.4C8 6.518 9.518 5 11.4 5h4.2C17.482 5 19 6.518 19 8.4v4.2c0 1.882-1.518 3.4-3.4 3.4H15a1 1 0 1 1 0-2h.6c.778 0 1.4-.622 1.4-1.4V8.4c0-.778-.622-1.4-1.4-1.4h-4.2c-.778 0-1.4.622-1.4 1.4V9a1 1 0 1 1-2 0zm6.707.893a1 1 0 0 1 0 1.414L8.414 17H10a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.586l6.293-6.293a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class SiSouthWestEscapeAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestEscapeAltLineIcon],svg[si-south-west-escape-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14 10l-8 8m0 0v-4m0 4h4m5-3h.6c1.33 0 2.4-1.07 2.4-2.4V8.4C18 7.07 16.93 6 15.6 6h-4.2C10.07 6 9 7.07 9 8.4V9"></svg:path>`,
})
export class SiSouthWestEscapeAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestEscapeDuotoneIcon],svg[si-south-west-escape-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h.6c1.33 0 2.4-1.07 2.4-2.4V8.4C18 7.07 16.93 6 15.6 6H9.4C8.07 6 7 7.07 7 8.4V9m7 1l-8 8m0 0h4m-4 0v-4"></svg:path>`,
})
export class SiSouthWestEscapeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestEscapeFillIcon],svg[si-south-west-escape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 8.4C6 6.518 7.518 5 9.4 5h6.2C17.482 5 19 6.518 19 8.4v6.2c0 1.882-1.518 3.4-3.4 3.4H15a1 1 0 1 1 0-2h.6c.778 0 1.4-.622 1.4-1.4V8.4c0-.778-.622-1.4-1.4-1.4H9.4C8.622 7 8 7.622 8 8.4V9a1 1 0 0 1-2 0zm7.293.893a1 1 0 1 1 1.414 1.414L8.414 17H10a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.586z" clip-rule="evenodd"></svg:path>`,
})
export class SiSouthWestEscapeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestEscapeLineIcon],svg[si-south-west-escape-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h.6c1.33 0 2.4-1.07 2.4-2.4V8.4C18 7.07 16.93 6 15.6 6H9.4C8.07 6 7 7.07 7 8.4V9m7 1l-8 8m0 0h4m-4 0v-4"></svg:path>`,
})
export class SiSouthWestEscapeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestFillIcon],svg[si-south-west-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.707 7.293a1 1 0 0 1 0 1.414L10.414 15H13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1v-5a1 1 0 1 1 2 0v2.586l6.293-6.293a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class SiSouthWestFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestLineIcon],svg[si-south-west-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16 8l-8 8m0 0v-5m0 5h5"></svg:path>`,
})
export class SiSouthWestLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestSquareDuotoneIcon],svg[si-south-west-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m16 8l-8 8m0 0v-5m0 5h5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiSouthWestSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestSquareFillIcon],svg[si-south-west-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m11.307 5.707a1 1 0 0 0-1.414-1.414L9 13.586V11a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-2.586z" clip-rule="evenodd"></svg:path>`,
})
export class SiSouthWestSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestSquareLineIcon],svg[si-south-west-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m16 8l-8 8m0 0v-5m0 5h5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiSouthWestSquareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSpinnerDuotoneIcon],svg[si-spinner-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 2v4.167m0 11.666V22m10-10h-4.166M6.167 12H2m17.209-7.208l-2.917 2.917m-8.584 8.583l-2.917 2.916m14.418 0l-2.917-2.916M7.708 7.709L4.791 4.792"></svg:path>`,
})
export class SiSpinnerDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSpinnerFillIcon],svg[si-spinner-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2a1 1 0 0 0-2 0v4.167a1 1 0 1 0 2 0zm0 15.833a1 1 0 0 0-2 0V22a1 1 0 1 0 2 0zM16.834 12a1 1 0 0 1 1-1H22a1 1 0 0 1 0 2h-4.166a1 1 0 0 1-1-1M2 11a1 1 0 0 0 0 2h4.167a1 1 0 1 0 0-2zm17.916-6.915a1 1 0 0 1 0 1.414l-2.917 2.917A1 1 0 1 1 15.585 7l2.917-2.916a1 1 0 0 1 1.414 0M8.415 16.999a1 1 0 0 0-1.414-1.414L4.084 18.5A1 1 0 1 0 5.5 19.916zm7.17-1.414a1 1 0 0 1 1.414 0l2.917 2.916a1 1 0 1 1-1.414 1.415l-2.917-2.917a1 1 0 0 1 0-1.414M5.499 4.085a1 1 0 0 0-1.415 1.414l2.917 2.917A1 1 0 0 0 8.415 7z"></svg:path>`,
})
export class SiSpinnerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSpinnerLineIcon],svg[si-spinner-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 2v4.167m0 11.666V22m10-10h-4.166M6.167 12H2m17.209-7.208l-2.917 2.917m-8.584 8.583l-2.917 2.916m14.418 0l-2.917-2.916M7.708 7.709L4.791 4.792"></svg:path>`,
})
export class SiSpinnerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSquareDuotoneIcon],svg[si-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"></svg:path></svg:g>`,
})
export class SiSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSquareFillIcon],svg[si-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path>`,
})
export class SiSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSquareLineIcon],svg[si-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"></svg:path>`,
})
export class SiSquareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siStarAltDuotoneIcon],svg[si-star-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m21.748 10.576l-5.304 4.293l1.894 6.187c.127.253 0 .632-.252.758c-.127.126-.253.126-.38.126c-.125 0-.252 0-.378-.126l-5.177-3.788l-5.303 3.788a.8.8 0 0 1-.758 0c-.252-.126-.379-.505-.252-.758l1.641-6.313l-5.177-4.167c-.252-.126-.379-.505-.252-.757c.126-.253.378-.506.63-.506h6.693l2.02-5.808c.127-.252.38-.505.632-.505s.505.253.631.505l2.147 5.808h6.566c.252 0 .505.253.631.506c0 .252-.126.505-.253.757"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21.748 10.576l-5.304 4.293l1.894 6.187c.127.253 0 .632-.252.758c-.127.126-.253.126-.38.126c-.125 0-.252 0-.378-.126l-5.177-3.788l-5.303 3.788a.8.8 0 0 1-.758 0c-.252-.126-.379-.505-.252-.758l1.641-6.313l-5.177-4.167c-.252-.126-.379-.505-.252-.757c.126-.253.378-.506.63-.506h6.693l2.02-5.808c.127-.252.38-.505.632-.505s.505.253.631.505l2.147 5.808h6.566c.252 0 .505.253.631.506c0 .252-.126.505-.253.757Z"></svg:path></svg:g>`,
})
export class SiStarAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siStarAltFillIcon],svg[si-star-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.025 2c-.455 0-.805.22-1.014.399c-.22.189-.395.424-.512.659a1 1 0 0 0-.05.119L8.662 8.313H2.681c-.455 0-.805.22-1.014.399a2.1 2.1 0 0 0-.512.66c-.209.416-.18.858-.07 1.189c.1.297.305.627.65.842l4.614 3.714l-1.46 5.615c-.148.38-.115.769-.016 1.067c.11.33.353.7.77.91a1.8 1.8 0 0 0 1.652 0a1 1 0 0 0 .134-.081l4.715-3.368l4.548 3.328c.404.355.847.353.999.352h.032c.146.001.561.003.952-.313c.331-.215.53-.537.628-.828a1.58 1.58 0 0 0-.026-1.093l-1.68-5.484l4.78-3.869a1 1 0 0 0 .265-.33l.021-.043c.11-.215.337-.663.337-1.161a1 1 0 0 0-.106-.448a2.1 2.1 0 0 0-.512-.659c-.209-.18-.559-.399-1.013-.399h-5.87l-1.905-5.155a1 1 0 0 0-.043-.1a2.1 2.1 0 0 0-.512-.66c-.21-.179-.56-.398-1.014-.398"></svg:path>`,
})
export class SiStarAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siStarAltLineIcon],svg[si-star-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21.748 10.576l-5.304 4.293l1.894 6.187c.127.253 0 .632-.252.758c-.127.126-.253.126-.38.126c-.125 0-.252 0-.378-.126l-5.177-3.788l-5.303 3.788a.8.8 0 0 1-.758 0c-.252-.126-.379-.505-.252-.758l1.641-6.313l-5.177-4.167c-.252-.126-.379-.505-.252-.757c.126-.253.378-.506.63-.506h6.693l2.02-5.808c.127-.252.38-.505.632-.505s.505.253.631.505l2.147 5.808h6.566c.252 0 .505.253.631.506c0 .252-.126.505-.253.757Z"></svg:path>`,
})
export class SiStarAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siStarDuotoneIcon],svg[si-star-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m12 2l2.4 7.619l7.6-.005l-6.114 4.181l2.29 7.253L12 16.624l-6.181 4.424l2.29-7.253L2 9.615l7.595.004z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m12 2l2.4 7.619l7.6-.005l-6.114 4.181l2.29 7.253L12 16.624l-6.181 4.424l2.29-7.253L2 9.615l7.595.004z"></svg:path></svg:g>`,
})
export class SiStarDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siStarFillIcon],svg[si-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.954 1.7a1 1 0 0 0-1.908-.001l-2.184 6.92l-6.861-.005a1 1 0 0 0-.566 1.826l5.498 3.762l-2.067 6.545A1 1 0 0 0 6.4 21.86l5.6-4.006l5.594 4.007a1 1 0 0 0 1.536-1.114l-2.067-6.545l5.502-3.762a1 1 0 0 0-.566-1.826l-6.866.005z"></svg:path>`,
})
export class SiStarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siStarLineIcon],svg[si-star-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m12 2l2.4 7.619l7.6-.005l-6.114 4.181l2.29 7.253L12 16.624l-6.181 4.424l2.29-7.253L2 9.615l7.595.004z"></svg:path>`,
})
export class SiStarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siStopCircleDuotoneIcon],svg[si-stop-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M9 9.8a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v4.4a.8.8 0 0 1-.8.8H9.8a.8.8 0 0 1-.8-.8z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M14.2 9H9.8a.8.8 0 0 0-.8.8v4.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V9.8a.8.8 0 0 0-.8-.8Z"></svg:path></svg:g>`,
})
export class SiStopCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siStopCircleFillIcon],svg[si-stop-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M9 9.8a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v4.4a.8.8 0 0 1-.8.8H9.8a.8.8 0 0 1-.8-.8z" clip-rule="evenodd"></svg:path>`,
})
export class SiStopCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siStopCircleLineIcon],svg[si-stop-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path d="M14.2 9H9.8a.8.8 0 0 0-.8.8v4.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V9.8a.8.8 0 0 0-.8-.8Z"></svg:path></svg:g>`,
})
export class SiStopCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siStopDuotoneIcon],svg[si-stop-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20.2 3H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20.2 3H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Z"></svg:path></svg:g>`,
})
export class SiStopDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siStopFillIcon],svg[si-stop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.2 3H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8"></svg:path>`,
})
export class SiStopFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siStopLineIcon],svg[si-stop-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20.2 3H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Z"></svg:path>`,
})
export class SiStopLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSunDuotoneIcon],svg[si-sun-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" clip-path="url(#siSunDuotone0)"><svg:path d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></svg:path><svg:path stroke-linecap="round" d="M3 12H1m22 0h-2m-9 9v2m0-22v2M5.636 18.364l-1.414 1.414M19.778 4.222l-1.414 1.414m-12.728 0L4.222 4.222m15.556 15.556l-1.414-1.414M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0Z"></svg:path></svg:g><svg:defs><svg:clippath id="siSunDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiSunDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSunFillIcon],svg[si-sun-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#siSunFill0)"><svg:path d="M12 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1M0 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1m21-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-8 10a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm-6.657-3.343a1 1 0 0 1 0 1.414L4.93 20.485a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0M20.485 3.515a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0m-16.97 0a1 1 0 0 1 1.414 0l1.414 1.414A1 1 0 1 1 4.93 6.343L3.515 4.93a1 1 0 0 1 0-1.414m14.142 14.141a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414M5 12a7 7 0 1 1 14 0a7 7 0 0 1-14 0"></svg:path></svg:g><svg:defs><svg:clippath id="siSunFill0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiSunFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSunLineIcon],svg[si-sun-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#siSunLine0)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 12H1m22 0h-2m-9 9v2m0-22v2M5.636 18.364l-1.414 1.414M19.778 4.222l-1.414 1.414m-12.728 0L4.222 4.222m15.556 15.556l-1.414-1.414M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0"></svg:path></svg:g><svg:defs><svg:clippath id="siSunLine0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiSunLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSunSetDuotoneIcon],svg[si-sun-set-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M8.57 17.93A5.98 5.98 0 0 1 6 13c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.05-1.03 3.86-2.6 4.94"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 4V2M3 13H1m22 0h-2m-1.222-7.778l-1.414 1.414m-12.728 0L4.222 5.222M4 18h16M8 21h8m-7.43-3.07A5.98 5.98 0 0 1 6 13c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.05-1.03 3.86-2.6 4.94z"></svg:path></svg:g>`,
})
export class SiSunSetDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSunSetFillIcon],svg[si-sun-set-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M0 13a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1m20 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m.485-8.485a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0m-16.97 0a1 1 0 0 1 1.414 0l1.414 1.414A1 1 0 1 1 4.93 7.343L3.515 5.93a1 1 0 0 1 0-1.414M7 21a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m13-4h-2.257A6.96 6.96 0 0 0 19 13c0-3.862-3.138-7-7-7s-7 3.138-7 7c0 1.483.459 2.865 1.247 4H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2"></svg:path>`,
})
export class SiSunSetFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSunSetLineIcon],svg[si-sun-set-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.57 17.93A5.98 5.98 0 0 1 6 13c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.05-1.03 3.86-2.6 4.94M12 4V2M3 13H1m22 0h-2m-1.222-7.778l-1.414 1.414m-12.728 0L4.222 5.222M4 18h16M8 21h8"></svg:path>`,
})
export class SiSunSetLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSunnySnowingDuotoneIcon],svg[si-sunny-snowing-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M8 13c0-2.21 1.79-4 4-4s4 1.79 4 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13H1m22 0h-4M12 2v4M7.05 8.05L4.222 5.222m15.556 0L16.95 8.05M12 16h.1m3.9 0h.1m3.9 0h.1M8 16h.1m3.9 3h.1m-.1 3h.1m3.9-3h.1M8 19h.1M4 16h.1M8 13c0-2.21 1.79-4 4-4s4 1.79 4 4z"></svg:path></svg:g>`,
})
export class SiSunnySnowingDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSunnySnowingFillIcon],svg[si-sunny-snowing-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M1 12a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm17 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M4.929 4.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414zm15.556 1.414a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414zM7 13c0-2.762 2.238-5 5-5s5 2.238 5 5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1m-3 2a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm3 1a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m5-1a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm3 1a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H20a1 1 0 0 1-1-1m-7 2a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm4-3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm-8 0a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2z"></svg:path>`,
})
export class SiSunnySnowingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSunnySnowingLineIcon],svg[si-sunny-snowing-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13H1m22 0h-4M12 2v4M7.05 8.05L4.222 5.222m15.556 0L16.95 8.05M8 13c0-2.21 1.79-4 4-4s4 1.79 4 4m-4 3h.1m3.9 0h.1m3.9 0h.1M8 16h.1m3.9 3h.1m-.1 3h.1m3.9-3h.1M8 19h.1M4 16h.1"></svg:path>`,
})
export class SiSunnySnowingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSwapHorizDuotoneIcon],svg[si-swap-horiz-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 11L3 7m0 0l4-4M3 7h18m-4 14l4-4m0 0l-4-4m4 4H3"></svg:path>`,
})
export class SiSwapHorizDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSwapHorizFillIcon],svg[si-swap-horiz-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.707 2.293a1 1 0 0 1 0 1.414L5.414 6H21a1 1 0 1 1 0 2H5.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0m8.586 10a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 18H3a1 1 0 1 1 0-2h15.586l-2.293-2.293a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiSwapHorizFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSwapHorizLineIcon],svg[si-swap-horiz-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 11L3 7m0 0l4-4M3 7h18m-4 14l4-4m0 0l-4-4m4 4H3"></svg:path>`,
})
export class SiSwapHorizLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSwapVertDuotoneIcon],svg[si-swap-vert-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m11 17l-4 4m0 0l-4-4m4 4V3m14 4l-4-4m0 0l-4 4m4-4v18"></svg:path>`,
})
export class SiSwapVertDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSwapVertFillIcon],svg[si-swap-vert-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 2a1 1 0 0 1 1 1v15.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L6 18.586V3a1 1 0 0 1 1-1m9.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L18 5.414V21a1 1 0 1 1-2 0V5.414l-2.293 2.293a1 1 0 1 1-1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class SiSwapVertFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSwapVertLineIcon],svg[si-swap-vert-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m11 17l-4 4m0 0l-4-4m4 4V3m14 4l-4-4m0 0l-4 4m4-4v18"></svg:path>`,
})
export class SiSwapVertLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTableColumnsDuotoneIcon],svg[si-table-columns-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 21V3m6 18V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiTableColumnsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTableColumnsFillIcon],svg[si-table-columns-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M10 4v16H8V4zm6 0v16h-2V4z" clip-rule="evenodd"></svg:path>`,
})
export class SiTableColumnsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTableColumnsLineIcon],svg[si-table-columns-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 21V3m6 18V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiTableColumnsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTableDuotoneIcon],svg[si-table-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 15h18M3 9h18M9 21V3m6 18V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiTableDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTableFillIcon],svg[si-table-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10v4h-4v-4z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M10 8V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4V8h-4V4h-2v4z" clip-rule="evenodd"></svg:path>`,
})
export class SiTableFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTableLineIcon],svg[si-table-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 15h18M3 9h18M9 21V3m6 18V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiTableLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTableRowsDuotoneIcon],svg[si-table-rows-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 15h18M3 9h18M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiTableRowsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTableRowsFillIcon],svg[si-table-rows-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M4 8h16v2H4zm0 6h16v2H4z" clip-rule="evenodd"></svg:path>`,
})
export class SiTableRowsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTableRowsLineIcon],svg[si-table-rows-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 15h18M3 9h18M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiTableRowsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTargetDuotoneIcon],svg[si-target-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-4 0a6 6 0 1 1-12 0a6 6 0 0 1 12 0" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></svg:path></svg:g>`,
})
export class SiTargetDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTargetFillIcon],svg[si-target-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m6-10a6 6 0 1 1-12 0a6 6 0 0 1 12 0" clip-rule="evenodd"></svg:path>`,
})
export class SiTargetFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTargetLineIcon],svg[si-target-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></svg:path><svg:path d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></svg:path></svg:g>`,
})
export class SiTargetLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTerminalAltDuotoneIcon],svg[si-terminal-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m5 16l4-4l-4-4m6 8h8M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"></svg:path></svg:g>`,
})
export class SiTerminalAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTerminalAltFillIcon],svg[si-terminal-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4m.893 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L7.586 12L4.293 8.707a1 1 0 0 1 0-1.414M10 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiTerminalAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTerminalAltLineIcon],svg[si-terminal-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m5 16l4-4l-4-4m6 8h8M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"></svg:path>`,
})
export class SiTerminalAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTerminalDuotoneIcon],svg[si-terminal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m4 18l6-6l-6-6m8 12h8"></svg:path>`,
})
export class SiTerminalDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTerminalFillIcon],svg[si-terminal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.707 5.293a1 1 0 0 0-1.414 1.414L8.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414zM12 17a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"></svg:path>`,
})
export class SiTerminalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTerminalLineIcon],svg[si-terminal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m4 18l6-6l-6-6m8 12h8"></svg:path>`,
})
export class SiTerminalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siToggleOffDuotoneIcon],svg[si-toggle-off-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6m3 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 6H7a6 6 0 1 0 0 12h10a6 6 0 0 0 0-12Z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></svg:path></svg:g>`,
})
export class SiToggleOffDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siToggleOffFillIcon],svg[si-toggle-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6m3 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path>`,
})
export class SiToggleOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siToggleOffLineIcon],svg[si-toggle-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M17 6H7a6 6 0 1 0 0 12h10a6 6 0 0 0 0-12Z"></svg:path><svg:path d="M7 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></svg:path></svg:g>`,
})
export class SiToggleOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siToggleOnDuotoneIcon],svg[si-toggle-on-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6m13 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 6H7a6 6 0 1 0 0 12h10a6 6 0 0 0 0-12Z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></svg:path></svg:g>`,
})
export class SiToggleOnDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siToggleOnFillIcon],svg[si-toggle-on-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6m13 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path>`,
})
export class SiToggleOnFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siToggleOnLineIcon],svg[si-toggle-on-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M17 6H7a6 6 0 1 0 0 12h10a6 6 0 0 0 0-12Z"></svg:path><svg:path d="M17 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></svg:path></svg:g>`,
})
export class SiToggleOnLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTrafficConeDuotoneIcon],svg[si-traffic-cone-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M5 21L9.84 3.59c.1-.35.41-.59.77-.59h2.78c.36 0 .67.24.77.59L19 21"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 21L9.84 3.59c.1-.35.41-.59.77-.59h2.78c.36 0 .67.24.77.59L19 21M15.64 9.67c-1.18.22-2.4.33-3.64.33c-1.32 0-2.6-.13-3.85-.37m9.09 5.84c-1.69.35-3.44.53-5.24.53s-3.63-.19-5.36-.55M2 21h20"></svg:path></svg:g>`,
})
export class SiTrafficConeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTrafficConeFillIcon],svg[si-traffic-cone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20h-3.278l-1.014-3.646q-.122.066-.265.095A26.8 26.8 0 0 1 12 17c-1.868 0-3.767-.197-5.564-.571a1 1 0 0 1-.153-.045L5.278 20H2a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2M6.817 14.466l.027.005A25.6 25.6 0 0 0 12 15c1.733 0 3.415-.173 5.037-.51a1 1 0 0 1 .148-.019l-1.087-3.911a1 1 0 0 1-.275.093A21 21 0 0 1 12 11a21.4 21.4 0 0 1-4.108-.404zM8.43 8.665A19.3 19.3 0 0 0 12 9a19 19 0 0 0 3.457-.313q.058-.01.116-.015L14.16 3.59a.8.8 0 0 0-.77-.59h-2.78c-.36 0-.67.24-.77.59z"></svg:path>`,
})
export class SiTrafficConeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTrafficConeLineIcon],svg[si-traffic-cone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.277 20.8a.75.75 0 1 0 1.446.4zM9.84 3.59l-.721-.206l-.002.005zm4.32 0l.723-.2l-.002-.006zm4.117 17.61a.75.75 0 1 0 1.446-.4zm-2.5-10.793a.75.75 0 0 0-.274-1.474zM8.369 8.908l-.737-.139l-.277 1.475l.737.138zm9.024 7.296a.75.75 0 1 0-.304-1.468zm-10.6-1.488a.75.75 0 0 0-.305 1.468zM2 20.25a.75.75 0 0 0 0 1.5zm20 1.5a.75.75 0 0 0 0-1.5zM5.723 21.2l4.84-17.41l-1.446-.4l-4.84 17.41zM10.56 3.797a.07.07 0 0 1 .024-.038a.04.04 0 0 1 .025-.008v-1.5c-.706 0-1.302.473-1.491 1.134zm.049-.046h2.78v-1.5h-2.78zm2.78 0a.04.04 0 0 1 .025.008a.07.07 0 0 1 .024.038l1.442-.412a1.55 1.55 0 0 0-1.49-1.135zm.047.04l4.84 17.41l1.446-.4l-4.84-17.41zm2.066 5.143A19 19 0 0 1 12 9.25v1.5c1.284 0 2.55-.114 3.778-.343zM12 9.25c-1.243 0-2.45-.12-3.632-.342l-.277 1.474c1.268.239 2.568.368 3.909.368zm5.088 5.486q-2.462.512-5.088.514v1.5c1.85 0 3.651-.185 5.392-.546zM12 15.25c-1.749 0-3.527-.185-5.207-.534l-.306 1.468c1.78.37 3.662.566 5.513.566zm-10 6.5h20v-1.5H2z"></svg:path>`,
})
export class SiTrafficConeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTwitterDuotoneIcon],svg[si-twitter-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M7.91 20.889c8.302 0 12.845-6.885 12.845-12.845c0-.193 0-.387-.009-.58A9.2 9.2 0 0 0 23 5.121a9.2 9.2 0 0 1-2.597.713a4.54 4.54 0 0 0 1.99-2.5a9 9 0 0 1-2.87 1.091A4.5 4.5 0 0 0 16.23 3a4.52 4.52 0 0 0-4.516 4.516c0 .352.044.696.114 1.03a12.82 12.82 0 0 1-9.305-4.718a4.526 4.526 0 0 0 1.4 6.03a4.6 4.6 0 0 1-2.043-.563v.061a4.524 4.524 0 0 0 3.62 4.428a4.4 4.4 0 0 1-1.189.159q-.435 0-.845-.08a4.51 4.51 0 0 0 4.217 3.135a9.05 9.05 0 0 1-5.608 1.936A9 9 0 0 1 1 18.873a12.84 12.84 0 0 0 6.91 2.016"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.91 20.889c8.302 0 12.845-6.885 12.845-12.845c0-.193 0-.387-.009-.58A9.2 9.2 0 0 0 23 5.121a9.2 9.2 0 0 1-2.597.713a4.54 4.54 0 0 0 1.99-2.5a9 9 0 0 1-2.87 1.091A4.5 4.5 0 0 0 16.23 3a4.52 4.52 0 0 0-4.516 4.516c0 .352.044.696.114 1.03a12.82 12.82 0 0 1-9.305-4.718a4.526 4.526 0 0 0 1.4 6.03a4.6 4.6 0 0 1-2.043-.563v.061a4.524 4.524 0 0 0 3.62 4.428a4.4 4.4 0 0 1-1.189.159q-.435 0-.845-.08a4.51 4.51 0 0 0 4.217 3.135a9.05 9.05 0 0 1-5.608 1.936A9 9 0 0 1 1 18.873a12.84 12.84 0 0 0 6.91 2.016Z"></svg:path></svg:g>`,
})
export class SiTwitterDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTwitterFillIcon],svg[si-twitter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.91 20.889c8.302 0 12.845-6.885 12.845-12.845c0-.193 0-.387-.009-.58A9.2 9.2 0 0 0 23 5.121a9.2 9.2 0 0 1-2.597.713a4.54 4.54 0 0 0 1.99-2.5a9 9 0 0 1-2.87 1.091A4.5 4.5 0 0 0 16.23 3a4.52 4.52 0 0 0-4.516 4.516c0 .352.044.696.114 1.03a12.82 12.82 0 0 1-9.305-4.718a4.526 4.526 0 0 0 1.4 6.03a4.6 4.6 0 0 1-2.043-.563v.061a4.524 4.524 0 0 0 3.62 4.428a4.4 4.4 0 0 1-1.189.159q-.435 0-.845-.08a4.51 4.51 0 0 0 4.217 3.135a9.05 9.05 0 0 1-5.608 1.936A9 9 0 0 1 1 18.873a12.84 12.84 0 0 0 6.91 2.016"></svg:path>`,
})
export class SiTwitterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTwitterLineIcon],svg[si-twitter-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.91 20.889c8.302 0 12.845-6.885 12.845-12.845c0-.193 0-.387-.009-.58A9.2 9.2 0 0 0 23 5.121a9.2 9.2 0 0 1-2.597.713a4.54 4.54 0 0 0 1.99-2.5a9 9 0 0 1-2.87 1.091A4.5 4.5 0 0 0 16.23 3a4.52 4.52 0 0 0-4.516 4.516c0 .352.044.696.114 1.03a12.82 12.82 0 0 1-9.305-4.718a4.526 4.526 0 0 0 1.4 6.03a4.6 4.6 0 0 1-2.043-.563v.061a4.524 4.524 0 0 0 3.62 4.428a4.4 4.4 0 0 1-1.189.159q-.435 0-.845-.08a4.51 4.51 0 0 0 4.217 3.135a9.05 9.05 0 0 1-5.608 1.936A9 9 0 0 1 1 18.873a12.84 12.84 0 0 0 6.91 2.016Z"></svg:path>`,
})
export class SiTwitterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUnfoldMoreDuotoneIcon],svg[si-unfold-more-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 15l3 3l3-3M9 9l3-3l3 3"></svg:path>`,
})
export class SiUnfoldMoreDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUnfoldMoreFillIcon],svg[si-unfold-more-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.293 14.293a1 1 0 0 1 1.414 0L12 16.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414m3-9a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L12 7.414L9.707 9.707a1 1 0 0 1-1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class SiUnfoldMoreFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUnfoldMoreLineIcon],svg[si-unfold-more-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 15l3 3l3-3M9 9l3-3l3 3"></svg:path>`,
})
export class SiUnfoldMoreLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUnlockAltDuotoneIcon],svg[si-unlock-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5"><svg:path fill="currentColor" fill-opacity=".16" d="M4.6 11h14.8c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 7c0-2.21 1.79-4 4-4s4 1.79 4 4v4M4.6 11h14.8c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6m8.4 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SiUnlockAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUnlockAltFillIcon],svg[si-unlock-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v4h2.4c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6H15V7c0-1.658-1.342-3-3-3S9 5.342 9 7a1 1 0 0 1-2 0m3 9a2 2 0 1 1 4 0a2 2 0 0 1-4 0" clip-rule="evenodd"></svg:path>`,
})
export class SiUnlockAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUnlockAltLineIcon],svg[si-unlock-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 7c0-2.21 1.79-4 4-4s4 1.79 4 4v4M4.6 11h14.8c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6m8.4 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SiUnlockAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUnlockDuotoneIcon],svg[si-unlock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M6.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 10V7a4 4 0 0 1 7.874-1M12 15a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 0v3m-5.4-8h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6"></svg:path></svg:g>`,
})
export class SiUnlockDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUnlockFillIcon],svg[si-unlock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 7a5 5 0 0 1 9.843-1.25a1 1 0 0 1-1.937.5A3 3 0 0 0 9 7v3h8.4c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6H7zm5 5.25a1.75 1.75 0 0 0-.75 3.332V18a.75.75 0 0 0 1.5 0v-2.418A1.75 1.75 0 0 0 12 12.25" clip-rule="evenodd"></svg:path>`,
})
export class SiUnlockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUnlockLineIcon],svg[si-unlock-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 10V7a4 4 0 0 1 7.874-1M12 15a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 0v3m-5.4-8h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6"></svg:path>`,
})
export class SiUnlockLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUnlockMutedDuotoneIcon],svg[si-unlock-muted-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M4.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-7c0-.88.72-1.6 1.6-1.6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14 10V7c0-2.21 1.79-4 4-4s4 1.79 4 4v3M4.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-7c0-.88.72-1.6 1.6-1.6"></svg:path></svg:g>`,
})
export class SiUnlockMutedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUnlockMutedFillIcon],svg[si-unlock-muted-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a5 5 0 0 0-5 5v3H4.6c-.88 0-1.6.72-1.6 1.6v7C3 19.92 4.08 21 5.4 21h9.2c1.32 0 2.4-1.08 2.4-2.4v-7c0-.88-.72-1.6-1.6-1.6H15V7c0-1.658 1.342-3 3-3s3 1.342 3 3v3a1 1 0 1 0 2 0V7a5 5 0 0 0-5-5"></svg:path>`,
})
export class SiUnlockMutedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUnlockMutedLineIcon],svg[si-unlock-muted-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14 10V7c0-2.21 1.79-4 4-4s4 1.79 4 4v3M4.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-7c0-.88.72-1.6 1.6-1.6"></svg:path>`,
})
export class SiUnlockMutedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUpDownDuotoneIcon],svg[si-up-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m0-16L9 7m3-3l3 3m-3 13l-3-3m3 3l3-3"></svg:path>`,
})
export class SiUpDownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUpDownFillIcon],svg[si-up-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L13 6.414v11.172l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L11 17.586V6.414L9.707 7.707a1 1 0 0 1-1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class SiUpDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUpDownLineIcon],svg[si-up-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m0-16L9 7m3-3l3 3m-3 13l-3-3m3 3l3-3"></svg:path>`,
})
export class SiUpDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUpTwoHeadedDuotoneIcon],svg[si-up-two-headed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 20V4m0 0L9 7m3-3l3 3m-6 5l3-3l3 3"></svg:path>`,
})
export class SiUpTwoHeadedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUpTwoHeadedFillIcon],svg[si-up-two-headed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L13 6.414v2.172l2.707 2.707a1 1 0 0 1-1.414 1.414L13 11.414V20a1 1 0 1 1-2 0v-8.586l-1.293 1.293a1 1 0 0 1-1.414-1.414L11 8.586V6.414L9.707 7.707a1 1 0 0 1-1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class SiUpTwoHeadedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUpTwoHeadedLineIcon],svg[si-up-two-headed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 20V4m0 0L9 7m3-3l3 3m-6 5l3-3l3 3"></svg:path>`,
})
export class SiUpTwoHeadedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAlt2DuotoneIcon],svg[si-user-alt-2-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M8 6a4 4 0 1 1 8 0v1a4 4 0 0 1-8 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 22c0-4.418-3.626-8-8.1-8h-1.8C6.626 14 3 17.582 3 22m9-11a4 4 0 0 1-4-4V6a4 4 0 1 1 8 0v1a4 4 0 0 1-4 4"></svg:path></svg:g>`,
})
export class SiUserAlt2DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAlt2FillIcon],svg[si-user-alt-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 6a4.75 4.75 0 0 1 9.5 0v1a4.75 4.75 0 1 1-9.5 0zm3.85 7C6.086 13 2 17.018 2 22a1 1 0 1 0 2 0c0-3.854 3.167-7 7.1-7h1.8c3.933 0 7.1 3.146 7.1 7a1 1 0 1 0 2 0c0-4.982-4.086-9-9.1-9z"></svg:path>`,
})
export class SiUserAlt2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAlt2LineIcon],svg[si-user-alt-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 22c0-4.418-3.626-8-8.1-8h-1.8C6.626 14 3 17.582 3 22m9-11a4 4 0 0 1-4-4V6a4 4 0 1 1 8 0v1a4 4 0 0 1-4 4"></svg:path>`,
})
export class SiUserAlt2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAlt3DuotoneIcon],svg[si-user-alt-3-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="7" r="4" fill="currentColor" fill-opacity=".16"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20 21v-4.6a2.4 2.4 0 0 0-2.4-2.4H6.4A2.4 2.4 0 0 0 4 16.4V21M16 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path></svg:g>`,
})
export class SiUserAlt3DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAlt3FillIcon],svg[si-user-alt-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 7a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M5 16.4A1.4 1.4 0 0 1 6.4 15h11.2a1.4 1.4 0 0 1 1.4 1.4V21a1 1 0 1 0 2 0v-4.6a3.4 3.4 0 0 0-3.4-3.4H6.4A3.4 3.4 0 0 0 3 16.4V21a1 1 0 1 0 2 0z"></svg:path>`,
})
export class SiUserAlt3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAlt3LineIcon],svg[si-user-alt-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20 21v-4.6a2.4 2.4 0 0 0-2.4-2.4H6.4A2.4 2.4 0 0 0 4 16.4V21M16 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path>`,
})
export class SiUserAlt3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAlt4DuotoneIcon],svg[si-user-alt-4-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 13a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 13a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9m4-7a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path></svg:g>`,
})
export class SiUserAlt4DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAlt4FillIcon],svg[si-user-alt-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m-5 16c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SiUserAlt4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAlt4LineIcon],svg[si-user-alt-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 6a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-4 7a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9"></svg:path>`,
})
export class SiUserAlt4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAlt5DuotoneIcon],svg[si-user-alt-5-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.4 22h-.02m0 0H3.6c-.88 0-1.6-.72-1.6-1.6v-3.65c0-.25 0-.38.12-.62c.38-.88 1.5-1.62 3.25-2.25M20.38 22c.88 0 1.6-.72 1.6-1.6v-3.65c0-.24 0-.5-.12-.62c-.37-.87-1.5-1.63-3.25-2.25M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5"></svg:path></svg:g>`,
})
export class SiUserAlt5DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAlt5FillIcon],svg[si-user-alt-5-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 7c0-3.164 2.586-5.75 5.75-5.75S17.75 3.836 17.75 7v1.5c0 3.164-2.586 5.75-5.75 5.75S6.25 11.664 6.25 8.5z"></svg:path><svg:path fill="currentColor" d="M18.944 12.937a1 1 0 0 0-.668 1.886c.825.292 1.458.602 1.91.912c.458.315.67.589.754.786q.018.042.039.082l.001.147v3.65c0 .328-.272.6-.6.6H3.6a.605.605 0 0 1-.6-.6v-3.65l.001-.132v-.014l.013-.027l.024-.05c.09-.207.303-.479.758-.79c.452-.31 1.084-.618 1.913-.916a1 1 0 1 0-.678-1.882c-.92.332-1.723.708-2.364 1.147c-.63.43-1.16.96-1.454 1.622c-.09.183-.153.366-.185.57c-.028.175-.028.343-.028.45V20.4C1 21.832 2.168 23 3.6 23h16.833a2.605 2.605 0 0 0 2.547-2.6v-3.668c0-.108 0-.293-.024-.472a1.5 1.5 0 0 0-.232-.646c-.297-.615-.808-1.117-1.405-1.527c-.643-.442-1.45-.822-2.375-1.15"></svg:path>`,
})
export class SiUserAlt5FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAlt5LineIcon],svg[si-user-alt-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.4 22h-.02m0 0H3.6c-.88 0-1.6-.72-1.6-1.6v-3.65c0-.25 0-.38.12-.62c.38-.88 1.5-1.62 3.25-2.25M20.38 22c.88 0 1.6-.72 1.6-1.6v-3.65c0-.24 0-.5-.12-.62c-.37-.87-1.5-1.63-3.25-2.25M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5"></svg:path>`,
})
export class SiUserAlt5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAltDuotoneIcon],svg[si-user-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20.4 22H3.6c-.88 0-1.6-.72-1.6-1.6v-4.65c0-.25 0-.38.12-.62c.38-.88 1.5-1.62 3.25-2.25c1.25 2.38 3.75 4 6.62 4s5.38-1.62 6.62-4c1.75.62 2.88 1.38 3.25 2.25c.12.12.12.38.12.62v4.65c0 .88-.72 1.6-1.6 1.6z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.4 22H3.6c-.88 0-1.6-.72-1.6-1.6v-4.65c0-.25 0-.38.12-.62c.38-.88 1.5-1.62 3.25-2.25c1.25 2.38 3.75 4 6.62 4s5.38-1.62 6.62-4c1.75.62 2.88 1.38 3.25 2.25c.12.12.12.38.12.62v4.65c0 .88-.72 1.6-1.6 1.6z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5"></svg:path></svg:g>`,
})
export class SiUserAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAltFillIcon],svg[si-user-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8.5c0 2.75 2.25 5 5 5s5-2.25 5-5V7c0-2.75-2.25-5-5-5S7 4.25 7 7z"></svg:path><svg:path fill="currentColor" d="M2 20.4c0 .88.72 1.6 1.6 1.6h16.78c.88 0 1.6-.72 1.6-1.6v-4.65c0-.24 0-.5-.12-.62c-.37-.87-1.5-1.63-3.25-2.25c-1.24 2.38-3.75 4-6.62 4s-5.37-1.62-6.62-4c-1.75.63-2.87 1.37-3.25 2.25c-.12.24-.12.37-.12.62z"></svg:path>`,
})
export class SiUserAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAltLineIcon],svg[si-user-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.4 22H3.6c-.88 0-1.6-.72-1.6-1.6v-4.65c0-.25 0-.38.12-.62c.38-.88 1.5-1.62 3.25-2.25c1.25 2.38 3.75 4 6.62 4s5.38-1.62 6.62-4c1.75.62 2.88 1.38 3.25 2.25c.12.12.12.38.12.62v4.65c0 .88-.72 1.6-1.6 1.6z"></svg:path><svg:path d="M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5"></svg:path></svg:g>`,
})
export class SiUserAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserDuotoneIcon],svg[si-user-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19.523 21.99H4.488c-1.503 0-2.663-1.134-2.466-2.624l.114-.869c.207-1.2 1.305-1.955 2.497-2.214L11.928 15h.144l7.295 1.283c1.212.28 2.29.993 2.497 2.214l.114.88c.197 1.49-.963 2.623-2.466 2.623z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.523 21.99H4.488c-1.503 0-2.663-1.134-2.466-2.624l.114-.869c.207-1.2 1.305-1.955 2.497-2.214L11.928 15h.144l7.295 1.283c1.212.28 2.29.993 2.497 2.214l.114.88c.197 1.49-.963 2.623-2.466 2.623zM17 7A5 5 0 1 1 7 7a5 5 0 0 1 10 0"></svg:path></svg:g>`,
})
export class SiUserDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserFillIcon],svg[si-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 7a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0m5.548 7.261a1 1 0 0 1 .13-.011h.144q.066 0 .13.011l7.295 1.283l.038.008c1.344.31 2.788 1.163 3.069 2.82l.004.029l.114.877v.002c.264 2.009-1.329 3.47-3.21 3.47a1 1 0 0 1-.124-.01h-14.9c-1.881 0-3.475-1.462-3.21-3.472l.114-.869l.005-.03c.28-1.627 1.736-2.528 3.077-2.819l.029-.006z"></svg:path>`,
})
export class SiUserFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserLineIcon],svg[si-user-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.523 21.99H4.488c-1.503 0-2.663-1.134-2.466-2.624l.114-.869c.207-1.2 1.305-1.955 2.497-2.214L11.928 15h.144l7.295 1.283c1.212.28 2.29.993 2.497 2.214l.114.88c.197 1.49-.963 2.623-2.466 2.623zM17 7A5 5 0 1 1 7 7a5 5 0 0 1 10 0"></svg:path>`,
})
export class SiUserLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siVerifiedDuotoneIcon],svg[si-verified-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M22 12c0-1.395-.858-2.605-2.137-3.259c.45-1.356.195-2.829-.79-3.814c-.985-.986-2.458-1.24-3.815-.79C14.615 2.859 13.396 2 12 2s-2.605.859-3.249 2.137c-1.366-.45-2.839-.196-3.824.79c-.986.985-1.23 2.458-.78 3.814C2.867 9.395 2 10.605 2 12s.868 2.605 2.146 3.258c-.448 1.357-.205 2.83.78 3.815c.986.985 2.46 1.23 3.815.79C9.395 21.142 10.605 22 12 22s2.615-.858 3.258-2.137c1.357.44 2.83.195 3.815-.79s1.24-2.458.79-3.815C21.142 14.606 22 13.396 22 12"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 13l3 3l5-7m6 3c0-1.395-.858-2.605-2.137-3.259c.45-1.356.195-2.829-.79-3.814c-.985-.986-2.458-1.24-3.815-.79C14.615 2.859 13.396 2 12 2s-2.605.859-3.249 2.137c-1.366-.45-2.839-.196-3.824.79c-.986.985-1.23 2.458-.78 3.814C2.867 9.395 2 10.605 2 12s.868 2.605 2.146 3.258c-.448 1.357-.205 2.83.78 3.815c.986.985 2.46 1.23 3.815.79C9.395 21.142 10.605 22 12 22s2.615-.858 3.258-2.137c1.357.44 2.83.195 3.815-.79s1.24-2.458.79-3.815C21.142 14.606 22 13.396 22 12"></svg:path></svg:g>`,
})
export class SiVerifiedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siVerifiedFillIcon],svg[si-verified-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.007 8.27C22.194 9.125 23 10.45 23 12s-.806 2.876-1.993 3.73c.24 1.442-.134 2.958-1.227 4.05c-1.095 1.095-2.61 1.459-4.046 1.225C14.883 22.196 13.546 23 12 23c-1.55 0-2.878-.807-3.731-1.996c-1.438.235-2.954-.128-4.05-1.224c-1.095-1.095-1.459-2.611-1.217-4.05C1.816 14.877 1 13.551 1 12s.816-2.878 2.002-3.73c-.242-1.439.122-2.955 1.218-4.05c1.093-1.094 2.61-1.467 4.057-1.227C9.125 1.804 10.453 1 12 1c1.545 0 2.88.803 3.732 1.993c1.442-.24 2.956.135 4.048 1.227s1.468 2.608 1.227 4.05m-4.426-.084a1 1 0 0 1 .233 1.395l-5 7a1 1 0 0 1-1.521.126l-3-3a1 1 0 0 1 1.414-1.414l2.165 2.165l4.314-6.04a1 1 0 0 1 1.395-.232" clip-rule="evenodd"></svg:path>`,
})
export class SiVerifiedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siVerifiedLineIcon],svg[si-verified-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 13l3 3l5-7m6 3c0-1.395-.858-2.605-2.137-3.259c.45-1.356.195-2.829-.79-3.814c-.985-.986-2.458-1.24-3.815-.79C14.615 2.859 13.396 2 12 2s-2.605.859-3.249 2.137c-1.366-.45-2.839-.196-3.824.79c-.986.985-1.23 2.458-.78 3.814C2.867 9.395 2 10.605 2 12s.868 2.605 2.146 3.258c-.448 1.357-.205 2.83.78 3.815c.986.985 2.46 1.23 3.815.79C9.395 21.142 10.605 22 12 22s2.615-.858 3.258-2.137c1.357.44 2.83.195 3.815-.79s1.24-2.458.79-3.815C21.142 14.606 22 13.396 22 12"></svg:path>`,
})
export class SiVerifiedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siVideoDuotoneIcon],svg[si-video-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M11.6 6H3.4A2.4 2.4 0 0 0 1 8.4v7.2A2.4 2.4 0 0 0 3.4 18h8.2a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 11.6 6"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M11.6 6H3.4A2.4 2.4 0 0 0 1 8.4v7.2A2.4 2.4 0 0 0 3.4 18h8.2a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 11.6 6ZM23 6l-6 6l6 6z"></svg:path></svg:g>`,
})
export class SiVideoDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siVideoFillIcon],svg[si-video-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.383 5.076A1 1 0 0 1 24 6v12a1 1 0 0 1-1.707.707l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.09-.217M3.4 6h8.2A2.4 2.4 0 0 1 14 8.4v7.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 15.6V8.4A2.4 2.4 0 0 1 3.4 6"></svg:path>`,
})
export class SiVideoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siVideoLineIcon],svg[si-video-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M11.6 6H3.4A2.4 2.4 0 0 0 1 8.4v7.2A2.4 2.4 0 0 0 3.4 18h8.2a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 11.6 6ZM23 6l-6 6l6 6z"></svg:path>`,
})
export class SiVideoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siViewCompactDuotoneIcon],svg[si-view-compact-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19.6 5H4.4A2.4 2.4 0 0 0 2 7.4v10.2A2.4 2.4 0 0 0 4.4 20h15.2a2.4 2.4 0 0 0 2.4-2.4V7.4A2.4 2.4 0 0 0 19.6 5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 20V5m5 15V5m5 15V5M2 10h20M2 15h20M4.4 5h15.2A2.4 2.4 0 0 1 22 7.4v10.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 17.6V7.4A2.4 2.4 0 0 1 4.4 5"></svg:path></svg:g>`,
})
export class SiViewCompactDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siViewCompactFillIcon],svg[si-view-compact-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14H8v-3h3zm5 0h-3v-3h3z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.4 5h15.2A2.4 2.4 0 0 1 22 7.4v10.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 17.6V7.4A2.4 2.4 0 0 1 4.4 5M8 9V6H6v3H3v2h3v3H3v2h3v3h2v-3h3v3h2v-3h3v3h2v-3h3v-2h-3v-3h3V9h-3V6h-2v3h-3V6h-2v3z" clip-rule="evenodd"></svg:path>`,
})
export class SiViewCompactFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siViewCompactLineIcon],svg[si-view-compact-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 20V5m5 15V5m5 15V5M2 10h20M2 15h20M4.4 5h15.2A2.4 2.4 0 0 1 22 7.4v10.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 17.6V7.4A2.4 2.4 0 0 1 4.4 5"></svg:path>`,
})
export class SiViewCompactLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siViewStreamDuotoneIcon],svg[si-view-stream-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M1 12h22M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4Z"></svg:path></svg:g>`,
})
export class SiViewStreamDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siViewStreamFillIcon],svg[si-view-stream-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M22 11H2v2h20z" clip-rule="evenodd"></svg:path>`,
})
export class SiViewStreamFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siViewStreamLineIcon],svg[si-view-stream-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M1 12h22M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"></svg:path>`,
})
export class SiViewStreamLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWalletAltDuotoneIcon],svg[si-wallet-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M4.4 6h13.2C18.925 6 20 7.164 20 8.6v9.8c0 1.436-1.075 2.6-2.4 2.6H4.4C3.075 21 2 19.836 2 18.4V8.6C2 7.164 3.075 6 4.4 6M17 13.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 3h12.6C20.58 3 23 5.42 23 8.4V17M4.4 6h13.2C18.925 6 20 7.164 20 8.6v9.8c0 1.436-1.075 2.6-2.4 2.6H4.4C3.075 21 2 19.836 2 18.4V8.6C2 7.164 3.075 6 4.4 6M17 13.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path></svg:g>`,
})
export class SiWalletAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWalletAltFillIcon],svg[si-wallet-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#siWalletAltFill0)"><svg:path d="M17.6 4H5a1 1 0 1 1 0-2h12.6C21.132 2 24 4.868 24 8.4V17a1 1 0 1 1-2 0V8.4C22 5.972 20.028 4 17.6 4"></svg:path><svg:path fill-rule="evenodd" d="M17.6 6H4.4C3.075 6 2 7.164 2 8.6v9.8C2 19.836 3.075 21 4.4 21h13.2c1.325 0 2.4-1.164 2.4-2.6V8.6C20 7.164 18.925 6 17.6 6m-.6 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="siWalletAltFill0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiWalletAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWalletAltLineIcon],svg[si-wallet-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 3h12.6C20.58 3 23 5.42 23 8.4V17M4.4 6h13.2C18.925 6 20 7.164 20 8.6v9.8c0 1.436-1.075 2.6-2.4 2.6H4.4C3.075 21 2 19.836 2 18.4V8.6C2 7.164 3.075 6 4.4 6M17 13.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class SiWalletAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWalletDetailedDuotoneIcon],svg[si-wallet-detailed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 7H4.2C3.54 7 3 7.54 3 8.2v10.4C3 19.92 4.08 21 5.4 21h13.2c1.32 0 2.4-1.08 2.4-2.4V17h-6.286C13.767 17 13 16.284 13 15.4v-2.8c0-.884.768-1.6 1.714-1.6H21V9.4C21 8.08 19.92 7 18.6 7"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8.5v-3m0 0C3 4.67 3.67 4 4.5 4l11.99-1C17.88 3 19 4.06 19 5.38V7H4.5C3.67 7 3 6.33 3 5.5M16 14h.01M4.2 7h14.4C19.92 7 21 8.08 21 9.4v9.2c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6V8.2C3 7.54 3.54 7 4.2 7m10.514 4H21v6h-6.286C13.767 17 13 16.284 13 15.4v-2.8c0-.884.768-1.6 1.714-1.6"></svg:path></svg:g>`,
})
export class SiWalletDetailedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWalletDetailedFillIcon],svg[si-wallet-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.995 13A1 1 0 0 0 15 14c0 .552.445 1 .995 1h.01c.55 0 .995-.448.995-1s-.445-1-.995-1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.448 2h.042C18.38 2 20 3.458 20 5.38v.923c1.178.535 2 1.723 2 3.097v9.2c0 1.872-1.528 3.4-3.4 3.4H5.4A3.407 3.407 0 0 1 2 18.6V5.5A2.5 2.5 0 0 1 4.453 3zM18 5.38V6H4.5a.5.5 0 0 1-.5-.5c0-.278.222-.5.5-.5h.042l11.985-1c.87.018 1.473.672 1.473 1.38M21 11h-6.286c-.947 0-1.714.716-1.714 1.6v2.8c0 .884.768 1.6 1.714 1.6H21z" clip-rule="evenodd"></svg:path>`,
})
export class SiWalletDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWalletDetailedLineIcon],svg[si-wallet-detailed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8.5v-3m0 0C3 4.67 3.67 4 4.5 4l11.99-1C17.88 3 19 4.06 19 5.38V7H4.5C3.67 7 3 6.33 3 5.5M21 11h-6.286c-.947 0-1.714.716-1.714 1.6v2.8c0 .884.768 1.6 1.714 1.6H21m-5-3h.01M4.2 7h14.4C19.92 7 21 8.08 21 9.4v9.2c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6V8.2C3 7.54 3.54 7 4.2 7"></svg:path>`,
})
export class SiWalletDetailedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWalletDuotoneIcon],svg[si-wallet-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h15.2a2.4 2.4 0 0 0 2.4-2.4V15h-4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4V6.4A2.4 2.4 0 0 0 18.6 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 9V6.4c0-1.325-.88-2.4-1.964-2.4H2.964C1.879 4 1 5.075 1 6.4v11.2c0 1.325.88 2.4 1.964 2.4h16.072C20.121 20 21 18.925 21 17.6V15m-1-3h.01M16.6 9h4.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-4.8a1.6 1.6 0 0 1-1.6-1.6v-2.8A1.6 1.6 0 0 1 16.6 9"></svg:path></svg:g>`,
})
export class SiWalletDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWalletFillIcon],svg[si-wallet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H20a1 1 0 0 1-1-1"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h15.2a2.4 2.4 0 0 0 2.4-2.4V16h.4a2.6 2.6 0 0 0 2.6-2.6v-2.8A2.6 2.6 0 0 0 21.4 8H21V6.4A2.4 2.4 0 0 0 18.6 4m-2 6a.6.6 0 0 0-.6.6v2.8a.6.6 0 0 0 .6.6h4.8a.6.6 0 0 0 .6-.6v-2.8a.6.6 0 0 0-.6-.6z" clip-rule="evenodd"></svg:path>`,
})
export class SiWalletFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWalletLineIcon],svg[si-wallet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 9V6.4c0-1.325-.88-2.4-1.964-2.4H2.964C1.879 4 1 5.075 1 6.4v11.2c0 1.325.88 2.4 1.964 2.4h16.072C20.121 20 21 18.925 21 17.6V15m-1-3h.01M16.6 9h4.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-4.8a1.6 1.6 0 0 1-1.6-1.6v-2.8A1.6 1.6 0 0 1 16.6 9"></svg:path>`,
})
export class SiWalletLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWarningDuotoneIcon],svg[si-warning-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 16h.008M12 8v5m10-1c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></svg:path></svg:g>`,
})
export class SiWarningDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWarningFillIcon],svg[si-warning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m-1 9a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiWarningFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWarningLineIcon],svg[si-warning-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 16h.008M12 8v5m10-1c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></svg:path>`,
})
export class SiWarningLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWebcamDuotoneIcon],svg[si-webcam-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M20 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-6 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 0v4m-6 0h12m-4-12a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class SiWebcamDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWebcamFillIcon],svg[si-webcam-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1a9 9 0 0 0-1 17.945V21H6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-5v-2.055A9.001 9.001 0 0 0 12 1m-3 9a3 3 0 1 1 6 0a3 3 0 0 1-6 0" clip-rule="evenodd"></svg:path>`,
})
export class SiWebcamFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWebcamLineIcon],svg[si-webcam-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 22a.75.75 0 0 0 1.5 0zM6 22.75h12v-1.5H6zm6.75-.75v-4h-1.5v4zm6.5-12A7.25 7.25 0 0 1 12 17.25v1.5A8.75 8.75 0 0 0 20.75 10zM12 17.25A7.25 7.25 0 0 1 4.75 10h-1.5A8.75 8.75 0 0 0 12 18.75zM4.75 10A7.25 7.25 0 0 1 12 2.75v-1.5A8.75 8.75 0 0 0 3.25 10zM12 2.75A7.25 7.25 0 0 1 19.25 10h1.5A8.75 8.75 0 0 0 12 1.25zM13.25 10c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 10zM12 11.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 12.75zM10.75 10c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 10zM12 8.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 7.25z"></svg:path>`,
})
export class SiWebcamLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWindowDuotoneIcon],svg[si-window-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 12h18m-9 9V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiWindowDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWindowFillIcon],svg[si-window-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M13 4v7h7v2h-7v7h-2v-7H4v-2h7V4z" clip-rule="evenodd"></svg:path>`,
})
export class SiWindowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWindowLineIcon],svg[si-window-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 12h18m-9 9V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiWindowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siYoutubeDuotoneIcon],svg[si-youtube-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M22.54 6.42a2.77 2.77 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.77 2.77 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.77 2.77 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.77 2.77 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33M9.75 8.479v6.542l5.75-3.271z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20.595 4.463A2.77 2.77 0 0 1 22.54 6.42c.46 1.728.46 5.33.46 5.33s0 3.604-.46 5.33a2.77 2.77 0 0 1-1.945 1.958C18.88 19.5 12 19.5 12 19.5s-6.879 0-8.595-.462A2.77 2.77 0 0 1 1.46 17.08C1 15.353 1 11.75 1 11.75s0-3.602.46-5.33a2.77 2.77 0 0 1 1.945-1.957C5.12 4 12 4 12 4s6.88 0 8.595.463Z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.75 15.021V8.48l5.75 3.271z"></svg:path></svg:g>`,
})
export class SiYoutubeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siYoutubeFillIcon],svg[si-youtube-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.54 6.42a2.77 2.77 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.77 2.77 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.77 2.77 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.77 2.77 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33M9.75 8.479v6.542l5.75-3.271z" clip-rule="evenodd"></svg:path>`,
})
export class SiYoutubeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siYoutubeLineIcon],svg[si-youtube-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22.54 6.42a2.77 2.77 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.77 2.77 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.77 2.77 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.77 2.77 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33ZM9.75 15.021V8.48l5.75 3.271z"></svg:path>`,
})
export class SiYoutubeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siZoomInDuotoneIcon],svg[si-zoom-in-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M11 19a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-4-4m-9-6h6m-3 3V8m8 3a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class SiZoomInDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siZoomInFillIcon],svg[si-zoom-in-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 19a7.97 7.97 0 0 0 4.906-1.68l4.387 4.387a1 1 0 0 0 1.414-1.414l-4.387-4.387A8 8 0 1 0 11 19m0-12a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H8a1 1 0 1 1 0-2h2V8a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiZoomInFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siZoomInLineIcon],svg[si-zoom-in-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-4-4m-9-6h6m-3 3V8m8 3a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path>`,
})
export class SiZoomInLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siZoomOutDuotoneIcon],svg[si-zoom-out-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M11 19a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-4-4m-9-6h6m5 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class SiZoomOutDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siZoomOutFillIcon],svg[si-zoom-out-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 19a7.97 7.97 0 0 0 4.906-1.68l4.387 4.387a1 1 0 0 0 1.414-1.414l-4.387-4.387A8 8 0 1 0 11 19m-3-9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class SiZoomOutFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siZoomOutLineIcon],svg[si-zoom-out-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-4-4m-9-6h6m5 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path>`,
})
export class SiZoomOutLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siActionsFillIcon],svg[si-actions-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5 0L9 7.5v9z" clip-rule="evenodd"></svg:path>`,
})
export class SiActionsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAddAlarmDuotoneIcon],svg[si-add-alarm-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 21a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 13h8m-4 4V9m6-6l3 3M3 6l3-3m14 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class SiAddAlarmDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
