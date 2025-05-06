import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsWalletIcon],svg[lets-icons-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13.786c.2 0 .299 0 .38.028a.5.5 0 0 1 .306.307c.028.08.028.18.028.38c0 1.196 0 1.795-.168 2.276a3 3 0 0 1-1.841 1.84C17.51 9 16.91 9 15.714 9H15M3 6.5A2.5 2.5 0 0 0 5.5 9H19c.943 0 1.414 0 1.707.293S21 10.057 21 11v2M3 6.5V17c0 1.886 0 2.828.586 3.414S5.114 21 7 21h12c.943 0 1.414 0 1.707-.293S21 19.943 21 19v-2m0 0h-4c-.943 0-1.414 0-1.707-.293S15 15.943 15 15s0-1.414.293-1.707S16.057 13 17 13h4m0 4v-4"></svg:path>`,
})
export class LetsIconsWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWalletAltIcon],svg[lets-icons-wallet-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M14.25 4h-4.5C6.568 4 4.977 4 3.989 5.004S3 7.624 3 10.857v2.286c0 3.232 0 4.849.989 5.853C4.977 20 6.568 20 9.75 20h4.5c3.182 0 4.773 0 5.762-1.004s.988-2.62.988-5.853v-2.286c0-3.232 0-4.849-.988-5.853C19.023 4 17.432 4 14.25 4Z"></svg:path><svg:path stroke-linecap="round" d="M7 8h3"></svg:path><svg:path d="M19 16h-2c-.943 0-1.414 0-1.707-.293S15 14.943 15 14s0-1.414.293-1.707S16.057 12 17 12h2c.943 0 1.414 0 1.707.293S21 13.057 21 14s0 1.414-.293 1.707S19.943 16 19 16Z"></svg:path></svg:g>`,
})
export class LetsIconsWalletAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWalletAltDuotoneIcon],svg[lets-icons-wallet-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M3 10c0-2.828 0-4.243.879-5.121C4.757 4 6.172 4 9 4h6c2.828 0 4.243 0 5.121.879C21 5.757 21 7.172 21 10v1.7c0 .141 0 .212-.044.256S20.841 12 20.7 12h-4.2c-.465 0-.697 0-.89.038a2 2 0 0 0-1.572 1.572c-.038.193-.038.425-.038.89s0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038h4.357c.079 0 .143.064.143.143A2.857 2.857 0 0 1 18.143 20H9c-2.828 0-4.243 0-5.121-.879C3 18.243 3 16.828 3 14z"></svg:path><svg:path fill="currentColor" d="M14 14a2 2 0 0 1 2-2h4.85a.15.15 0 0 1 .15.15v4.7a.15.15 0 0 1-.15.15H16a2 2 0 0 1-2-2z"></svg:path><svg:rect width="6" height="1" x="6" y="7" fill="currentColor" rx=".5"></svg:rect>`,
})
export class LetsIconsWalletAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWalletAltDuotoneLineIcon],svg[lets-icons-wallet-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M15 12h6v4h-6z"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M14.25 4h-4.5C6.568 4 4.977 4 3.989 5.004S3 7.624 3 10.857v2.286c0 3.232 0 4.849.989 5.853C4.977 20 6.568 20 9.75 20h4.5c3.182 0 4.773 0 5.762-1.004s.988-2.62.988-5.853v-2.286c0-3.232 0-4.849-.988-5.853C19.023 4 17.432 4 14.25 4Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M7 8h3"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M19 16h-2c-.943 0-1.414 0-1.707-.293S15 14.943 15 14s0-1.414.293-1.707S16.057 12 17 12h2c.943 0 1.414 0 1.707.293S21 13.057 21 14s0 1.414-.293 1.707S19.943 16 19 16Z"></svg:path></svg:g>`,
})
export class LetsIconsWalletAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWalletAltFillIcon],svg[lets-icons-wallet-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M2.879 3.879C2 4.757 2 6.172 2 9v6c0 2.828 0 4.243.879 5.121C3.757 21 5.172 21 8 21h10c.93 0 1.395 0 1.776-.102a3 3 0 0 0 2.122-2.122C22 18.396 22 17.93 22 17h-6a3 3 0 1 1 0-6h6V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3H8c-2.828 0-4.243 0-5.121.879M7 7a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 14h-1"></svg:path></svg:g>`,
})
export class LetsIconsWalletAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWalletAltLightIcon],svg[lets-icons-wallet-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M14.25 4h-4.5C6.568 4 4.977 4 3.989 5.004S3 7.624 3 10.857v2.286c0 3.232 0 4.849.989 5.853C4.977 20 6.568 20 9.75 20h4.5c3.182 0 4.773 0 5.762-1.004s.988-2.62.988-5.853v-2.286c0-3.232 0-4.849-.988-5.853C19.023 4 17.432 4 14.25 4Z"></svg:path><svg:path stroke-linecap="round" d="M7 8h3"></svg:path><svg:path d="M19 16h-2c-.943 0-1.414 0-1.707-.293S15 14.943 15 14s0-1.414.293-1.707S16.057 12 17 12h2c.943 0 1.414 0 1.707.293S21 13.057 21 14s0 1.414-.293 1.707S19.943 16 19 16Z"></svg:path></svg:g>`,
})
export class LetsIconsWalletAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWalletDuotoneIcon],svg[lets-icons-wallet-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a2 2 0 0 1 2-2h14.5a.5.5 0 0 1 .5.5V6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"></svg:path><svg:path fill="currentColor" fill-opacity=".25" d="M3 16V6a2 2 0 0 0 2 2h14a2 2 0 0 1 2 2v2.85a.15.15 0 0 1-.15.15H18a2 2 0 1 0 0 4h2.85a.15.15 0 0 1 .15.15V18a2 2 0 0 1-2 2H7a4 4 0 0 1-4-4"></svg:path><svg:path fill="currentColor" d="M15 15a2 2 0 0 1 2-2h3.85a.15.15 0 0 1 .15.15v3.7a.15.15 0 0 1-.15.15H17a2 2 0 0 1-2-2"></svg:path><svg:rect width="6" height="1" x="5" y="10" fill="currentColor" rx=".5"></svg:rect>`,
})
export class LetsIconsWalletDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWalletDuotoneLineIcon],svg[lets-icons-wallet-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M15 13h6v4h-6zm5-6V4H5.5a2.5 2.5 0 0 0 0 5H18z"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13.786c.2 0 .299 0 .38.028a.5.5 0 0 1 .306.307c.028.08.028.18.028.38c0 1.196 0 1.795-.168 2.276a3 3 0 0 1-1.841 1.84C17.51 9 16.91 9 15.714 9H15M3 6.5A2.5 2.5 0 0 0 5.5 9H19c.943 0 1.414 0 1.707.293S21 10.057 21 11v2M3 6.5V17c0 1.886 0 2.828.586 3.414S5.114 21 7 21h12c.943 0 1.414 0 1.707-.293S21 19.943 21 19v-2m0 0h-4c-.943 0-1.414 0-1.707-.293S15 15.943 15 15s0-1.414.293-1.707S16.057 13 17 13h4m0 4v-4"></svg:path></svg:g>`,
})
export class LetsIconsWalletDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWalletFillIcon],svg[lets-icons-wallet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M20 5a1 1 0 1 0 0-2zM5.5 5H20V3H5.5zm0 5h8V8h-8zM4 6.5A1.5 1.5 0 0 1 5.5 5V3A3.5 3.5 0 0 0 2 6.5zm-2 0A3.5 3.5 0 0 0 5.5 10V8A1.5 1.5 0 0 1 4 6.5z"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M3 12V6.5"></svg:path><svg:path fill="currentColor" stroke="currentColor" d="M3 8.5h-.5v10.533c0 .443 0 .825.041 1.13c.044.329.144.643.398.898c.255.255.57.354.897.398c.306.041.688.041 1.131.041h14.066c.443 0 .825 0 1.13-.041c.329-.044.643-.143.898-.398s.354-.57.398-.897c.041-.306.041-.688.041-1.131V17.5H18a2.5 2.5 0 0 1 0-5h3.5v-1.533c0-.443 0-.825-.041-1.13c-.044-.329-.143-.643-.398-.898c-.255-.254-.57-.354-.897-.398c-.306-.041-.688-.041-1.131-.041z"></svg:path></svg:g>`,
})
export class LetsIconsWalletFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWalletLightIcon],svg[lets-icons-wallet-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 6.5a2 2 0 0 1 2-2h11.429c.066 0 .1 0 .127.003a.5.5 0 0 1 .44.441a1 1 0 0 1 .004.127c0 .398 0 .597-.019.765a3 3 0 0 1-2.645 2.645c-.168.019-.367.019-.765.019H15m-10.5-2a2 2 0 0 0 2 2h11c.943 0 1.414 0 1.707.293s.293.764.293 1.707v2m-15-6v9c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586h9c.943 0 1.414 0 1.707-.293s.293-.764.293-1.707v-1m0 0h-2c-.943 0-1.414 0-1.707-.293s-.293-.764-.293-1.707s0-1.414.293-1.707s.764-.293 1.707-.293h2m0 4v-4"></svg:path>`,
})
export class LetsIconsWalletLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWatchIcon],svg[lets-icons-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.5 7l.407-3.255A.85.85 0 0 1 9.75 3h4.5c.428 0 .79.32.843.745L15.5 7m-7 10l.407 3.255A.85.85 0 0 0 9.75 21h4.5a.85.85 0 0 0 .843-.745L15.5 17"></svg:path><svg:path fill="currentColor" d="M18.15 11h-.65v2h.65c.47 0 .85-.38.85-.85v-.3a.85.85 0 0 0-.85-.85"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m12 12l-1-3m1 3l2.5 1"></svg:path></svg:g>`,
})
export class LetsIconsWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWatchAltIcon],svg[lets-icons-watch-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="10" height="10" x="7" y="7" stroke="currentColor" stroke-width="2" rx="3"></svg:rect><svg:path fill="currentColor" d="M9 4c0-.943 0-1.414.293-1.707S10.057 2 11 2h2c.943 0 1.414 0 1.707.293S15 3.057 15 4v3H9zm0 16c0 .943 0 1.414.293 1.707S10.057 22 11 22h2c.943 0 1.414 0 1.707-.293S15 20.943 15 20v-3H9z"></svg:path></svg:g>`,
})
export class LetsIconsWatchAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWatchAltLightIcon],svg[lets-icons-watch-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="11" height="11" x="6.5" y="6.5" rx="2.5"></svg:rect><svg:path d="M15 6.5h.5V4.967c0-.443 0-.825-.041-1.13c-.044-.329-.143-.643-.398-.898c-.255-.254-.57-.354-.897-.398c-.306-.041-.688-.041-1.131-.041h-2.066c-.443 0-.825 0-1.13.041c-.329.044-.643.144-.898.398c-.254.255-.354.57-.398.897c-.041.306-.041.688-.041 1.131V6.5zm0 11h.5v1.533c0 .443 0 .825-.041 1.13c-.044.329-.143.643-.398.898s-.57.354-.897.398c-.306.041-.688.041-1.131.041h-2.066c-.443 0-.825 0-1.13-.041c-.329-.044-.643-.143-.898-.398c-.254-.255-.354-.57-.398-.897c-.041-.306-.041-.688-.041-1.131V17.5z"></svg:path></svg:g>`,
})
export class LetsIconsWatchAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWatchLightIcon],svg[lets-icons-watch-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="5.5" stroke="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.5 7.5l.407-3.255A.85.85 0 0 1 9.75 3.5h4.5c.428 0 .79.32.843.745L15.5 7.5m-7 9l.407 3.255a.85.85 0 0 0 .843.745h4.5a.85.85 0 0 0 .843-.745L15.5 16.5"></svg:path><svg:path fill="currentColor" d="M18.15 11h-.65v2h.65c.47 0 .85-.38.85-.85v-.3a.85.85 0 0 0-.85-.85"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="m12 12l-2-2.5m2 2.5l2.5.5"></svg:path></svg:g>`,
})
export class LetsIconsWatchLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWaterIcon],svg[lets-icons-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" d="M12 18a2 2 0 0 1-1.932-1.482"></svg:path><svg:path d="M10.424 4.679c.631-1.073.947-1.61 1.398-1.69a1 1 0 0 1 .356 0c.451.08.767.617 1.398 1.69l1.668 2.836a27.2 27.2 0 0 1 2.707 6.315c1.027 3.593-1.67 7.17-5.408 7.17h-1.086c-3.737 0-6.435-3.577-5.408-7.17a27.2 27.2 0 0 1 2.707-6.315z"></svg:path></svg:g>`,
})
export class LetsIconsWaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWaterLightIcon],svg[lets-icons-water-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M12 18a2 2 0 0 1-1.932-1.482"></svg:path><svg:path d="M10.424 4.679c.631-1.073.947-1.61 1.398-1.69a1 1 0 0 1 .356 0c.451.08.767.617 1.398 1.69l1.668 2.836a27.2 27.2 0 0 1 2.707 6.315c1.027 3.593-1.67 7.17-5.408 7.17h-1.086c-3.737 0-6.435-3.577-5.408-7.17a27.2 27.2 0 0 1 2.707-6.315z"></svg:path></svg:g>`,
})
export class LetsIconsWaterLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWaterfallIcon],svg[lets-icons-waterfall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M21 21H3m1-5v-2m8-2V9m-4 7v-6m8 3v-2m4 4V5"></svg:path>`,
})
export class LetsIconsWaterfallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWaterfallLightIcon],svg[lets-icons-waterfall-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M21 21H3m1-5v-2m8-2V9m-4 7v-6m8 3v-2m4 4V5"></svg:path>`,
})
export class LetsIconsWaterfallLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWidgetIcon],svg[lets-icons-widget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:rect width="7" height="7" x="3" y="3" rx="1"></svg:rect><svg:rect width="7" height="7" x="3" y="14" rx="1"></svg:rect><svg:rect width="7" height="7" x="14" y="3" rx="1"></svg:rect><svg:rect width="7" height="7" x="14" y="14" rx="1"></svg:rect></svg:g>`,
})
export class LetsIconsWidgetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWidgetAddIcon],svg[lets-icons-widget-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:rect width="7" height="7" x="3" y="3" rx="1"></svg:rect><svg:rect width="7" height="7" x="3" y="14" rx="1"></svg:rect><svg:rect width="7" height="7" x="14" y="3" rx="1"></svg:rect><svg:path d="M17.5 14v7m3.5-3.5h-7"></svg:path></svg:g>`,
})
export class LetsIconsWidgetAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWidgetAddLightIcon],svg[lets-icons-widget-add-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:rect width="7" height="7" x="3" y="3" rx="1"></svg:rect><svg:rect width="7" height="7" x="3" y="14" rx="1"></svg:rect><svg:rect width="7" height="7" x="14" y="3" rx="1"></svg:rect><svg:path d="M17.5 14v7m3.5-3.5h-7"></svg:path></svg:g>`,
})
export class LetsIconsWidgetAddLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWidgetAltIcon],svg[lets-icons-widget-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:rect width="6" height="6" rx="1" transform="matrix(1 0 0 -1 14 10)"></svg:rect><svg:path d="M10 14h4c.943 0 1.414 0 1.707.293S16 15.057 16 16v2c0 .943 0 1.414-.293 1.707S14.943 20 14 20h-4zm0-4c0-.943 0-1.414-.293-1.707S8.943 8 8 8H6c-.943 0-1.414 0-1.707.293S4 9.057 4 10v4h6zm0 10H6c-.943 0-1.414 0-1.707-.293S4 18.943 4 18v-4h6z"></svg:path></svg:g>`,
})
export class LetsIconsWidgetAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWidgetAltLightIcon],svg[lets-icons-widget-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:rect width="6" height="6" rx="1" transform="matrix(1 0 0 -1 14 10)"></svg:rect><svg:path d="M10 14h4c.943 0 1.414 0 1.707.293S16 15.057 16 16v2c0 .943 0 1.414-.293 1.707S14.943 20 14 20h-4zm0-4c0-.943 0-1.414-.293-1.707S8.943 8 8 8H6c-.943 0-1.414 0-1.707.293S4 9.057 4 10v4h6zm0 10H6c-.943 0-1.414 0-1.707-.293S4 18.943 4 18v-4h6z"></svg:path></svg:g>`,
})
export class LetsIconsWidgetAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWidgetLightIcon],svg[lets-icons-widget-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:rect width="7" height="7" x="3" y="3" rx="1"></svg:rect><svg:rect width="7" height="7" x="3" y="14" rx="1"></svg:rect><svg:rect width="7" height="7" x="14" y="3" rx="1"></svg:rect><svg:rect width="7" height="7" x="14" y="14" rx="1"></svg:rect></svg:g>`,
})
export class LetsIconsWidgetLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWinterIcon],svg[lets-icons-winter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path stroke-linecap="round" d="M12 8V6m0-3v3m0 0L9 4m3 2l3-2m1 8h2m3 0h-3m0 0l2-3m-2 3l2 3m-8 1v2m0 3v-3m0 0l-3 2m3-2l3 2m-7-8H6m-3 0h3m0 0L4 9m2 3l-2 3"></svg:path></svg:g>`,
})
export class LetsIconsWinterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWinterDuotoneIcon],svg[lets-icons-winter-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:circle cx="12" cy="12" r="2.4" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke-linecap="round" d="M12 9V7m0-3v3m0 0L9 5m3 2l3-2m0 7h2m3 0h-3m0 0l2-3m-2 3l2 3m-7 0v2m0 3v-3m0 0l-3 2m3-2l3 2m-6-7H7m-3 0h3m0 0L5 9m2 3l-2 3"></svg:path></svg:g>`,
})
export class LetsIconsWinterDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWinterFillIcon],svg[lets-icons-winter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="13" r="4" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 9V7m0-3v3m0 0L9 5m3 2l3-2m.5 7.5h2m3 0h-3m0 0l2-3m-2 3l2 3M12 16v2m0 3v-3m0 0l-3 2m3-2l3 2m-6.5-7.5h-2m-3 0h3m0 0l-2-3m2 3l-2 3"></svg:path></svg:g>`,
})
export class LetsIconsWinterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWinterLightIcon],svg[lets-icons-winter-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="2.5"></svg:circle><svg:path stroke-linecap="round" d="M12 9V6m0-3v3m0 0L9 4m3 2l3-2m0 8h3m3 0h-3m0 0l2-3m-2 3l2 3m-8 0v3m0 3v-3m0 0l-3 2m3-2l3 2m-6-8H6m-3 0h3m0 0L4 9m2 3l-2 3"></svg:path></svg:g>`,
})
export class LetsIconsWinterLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWorldIcon],svg[lets-icons-world-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="12" r="8"></svg:circle><svg:path d="M18.572 6.421c-.724.782-1.685 1.424-2.805 1.872A10.2 10.2 0 0 1 12.133 9a10.3 10.3 0 0 1-3.664-.615C7.33 7.964 6.34 7.346 5.583 6.583m12.989 10.996c-.724-.782-1.685-1.424-2.805-1.872A10.2 10.2 0 0 0 12.133 15a10.3 10.3 0 0 0-3.664.615c-1.139.42-2.128 1.038-2.886 1.801M12 4v16m8-8H4"></svg:path></svg:g>`,
})
export class LetsIconsWorldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWorld2Icon],svg[lets-icons-world-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="m19.5 6l-1.467 1.1a2 2 0 0 1-1.2.4h-3.358a1.578 1.578 0 0 0-.999 2.799l2 1.636a6 6 0 0 1 2.164 5.306l-.046.417a8 8 0 0 1-.362 1.646L16 20M2.5 10.5l3.238-.54a2 2 0 0 1 2.302 2.302l-.135.807a3.34 3.34 0 0 0 1.8 3.533a2.5 2.5 0 0 1 1.308 2.846L10.5 21.5"></svg:path><svg:circle cx="12" cy="12" r="9"></svg:circle></svg:g>`,
})
export class LetsIconsWorld2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWorld2LightIcon],svg[lets-icons-world-2-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m19.5 6l-1.467 1.1a2 2 0 0 1-1.2.4h-3.358a1.578 1.578 0 0 0-.999 2.799l2 1.636a6 6 0 0 1 2.164 5.306l-.02.18a8 8 0 0 1-.523 2.087L15.5 21m-13-10.5l3.238-.54a2 2 0 0 1 2.302 2.302l-.135.807a3.34 3.34 0 0 0 1.8 3.533a2.5 2.5 0 0 1 1.308 2.846L10.5 21.5"></svg:path><svg:circle cx="12" cy="12" r="9.5"></svg:circle></svg:g>`,
})
export class LetsIconsWorld2LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWorldAltIcon],svg[lets-icons-world-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="12" r="8"></svg:circle><svg:path d="M18.572 7.206c-.724.848-1.685 1.543-2.805 2.028a9.5 9.5 0 0 1-3.634.765a9.6 9.6 0 0 1-3.664-.666C7.33 8.877 6.34 8.209 5.583 7.38m12.989 9.414c-.724-.848-1.685-1.543-2.805-2.028A9.5 9.5 0 0 0 12.133 14a9.6 9.6 0 0 0-3.664.666c-1.139.456-2.128 1.124-2.886 1.952M12 4v16"></svg:path></svg:g>`,
})
export class LetsIconsWorldAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWorldAltDuotoneIcon],svg[lets-icons-world-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:circle cx="12" cy="12" r="8" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path d="M18.572 7.206c-.724.848-1.685 1.543-2.805 2.028a9.5 9.5 0 0 1-3.634.765a9.6 9.6 0 0 1-3.664-.666C7.33 8.877 6.34 8.209 5.583 7.38m12.989 9.414c-.724-.848-1.685-1.543-2.805-2.028A9.5 9.5 0 0 0 12.133 14a9.6 9.6 0 0 0-3.664.666c-1.139.456-2.128 1.124-2.886 1.952M12 4v16"></svg:path></svg:g>`,
})
export class LetsIconsWorldAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWorldAltDuotoneLineIcon],svg[lets-icons-world-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:circle cx="12" cy="12" r="8" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path d="M18.572 7.206c-.724.848-1.685 1.543-2.805 2.028a9.5 9.5 0 0 1-3.634.765a9.6 9.6 0 0 1-3.664-.666C7.33 8.877 6.34 8.209 5.583 7.38m12.989 9.414c-.724-.848-1.685-1.543-2.805-2.028A9.5 9.5 0 0 0 12.133 14a9.6 9.6 0 0 0-3.664.666c-1.139.456-2.128 1.124-2.886 1.952M12 4v16"></svg:path></svg:g>`,
})
export class LetsIconsWorldAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWorldAltFillIcon],svg[lets-icons-world-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 3.055v5.888c-1.537-.175-2.952-.75-4.026-1.623a5.7 5.7 0 0 1-1.39-1.63A8.97 8.97 0 0 1 11 3.055m2 0v5.888c1.537-.175 2.952-.75 4.026-1.623a5.6 5.6 0 0 0 1.39-1.63A8.97 8.97 0 0 0 13 3.055m6.717 4.311a8 8 0 0 1-1.43 1.506c-1.451 1.18-3.32 1.9-5.287 2.082v2.092c.815.076 1.616.244 2.38.501a9.3 9.3 0 0 1 2.907 1.58c.55.447 1.031.953 1.43 1.507A8.96 8.96 0 0 0 21 12c0-1.695-.469-3.28-1.283-4.634m-1.3 10.945a5.7 5.7 0 0 0-1.39-1.631a7.3 7.3 0 0 0-2.285-1.237A8.5 8.5 0 0 0 13 15.057v5.888a8.97 8.97 0 0 0 5.417-2.634M11 20.945v-5.888a8.5 8.5 0 0 0-1.742.386a7.3 7.3 0 0 0-2.284 1.237a5.7 5.7 0 0 0-1.391 1.63A8.97 8.97 0 0 0 11 20.946m-6.717-4.311c.399-.554.88-1.06 1.43-1.506a9.3 9.3 0 0 1 2.907-1.581a10.5 10.5 0 0 1 2.38-.5v-2.093c-1.968-.183-3.835-.902-5.287-2.082a8 8 0 0 1-1.43-1.506A8.96 8.96 0 0 0 3 12c0 1.695.468 3.28 1.283 4.634" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsWorldAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWorldAltLightIcon],svg[lets-icons-world-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="8"></svg:circle><svg:path d="M18.572 7.206c-.724.848-1.685 1.543-2.805 2.028a9.5 9.5 0 0 1-3.634.765a9.6 9.6 0 0 1-3.664-.666C7.33 8.877 6.34 8.209 5.583 7.38m12.989 9.414c-.724-.848-1.685-1.543-2.805-2.028A9.5 9.5 0 0 0 12.133 14a9.6 9.6 0 0 0-3.664.666c-1.139.456-2.128 1.124-2.886 1.952M12 4v16"></svg:path></svg:g>`,
})
export class LetsIconsWorldAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWorldDuotoneIcon],svg[lets-icons-world-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:circle cx="12" cy="12" r="8" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path d="M18.572 6.421c-.724.782-1.685 1.424-2.805 1.872A10.2 10.2 0 0 1 12.133 9a10.3 10.3 0 0 1-3.664-.615C7.33 7.964 6.34 7.346 5.583 6.583m12.989 10.996c-.724-.782-1.685-1.424-2.805-1.872A10.2 10.2 0 0 0 12.133 15a10.3 10.3 0 0 0-3.664.615c-1.139.42-2.128 1.038-2.886 1.801M12 4v16m8-8H4"></svg:path></svg:g>`,
})
export class LetsIconsWorldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWorldDuotoneLineIcon],svg[lets-icons-world-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:circle cx="12" cy="12" r="8" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path d="M18.572 6.421c-.724.782-1.685 1.424-2.805 1.872A10.2 10.2 0 0 1 12.133 9a10.3 10.3 0 0 1-3.664-.615C7.33 7.964 6.34 7.346 5.583 6.583m12.989 10.996c-.724-.782-1.685-1.424-2.805-1.872A10.2 10.2 0 0 0 12.133 15a10.3 10.3 0 0 0-3.664.615c-1.139.42-2.128 1.038-2.886 1.801M12 4v16m8-8H4"></svg:path></svg:g>`,
})
export class LetsIconsWorldDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWorldFillIcon],svg[lets-icons-world-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 3.055v4.893a9 9 0 0 1-1.765-.36a7.6 7.6 0 0 1-2.292-1.145a5.6 5.6 0 0 1-1.067-1.038A8.97 8.97 0 0 1 11 3.055m2 0v4.893a9 9 0 0 0 1.765-.36a7.6 7.6 0 0 0 2.292-1.145a5.6 5.6 0 0 0 1.067-1.038A8.97 8.97 0 0 0 13 3.055m6.447 3.89q-.527.6-1.19 1.098a9.6 9.6 0 0 1-2.899 1.455A11.2 11.2 0 0 1 13 9.957V11h7.945a8.95 8.95 0 0 0-1.498-4.056M20.945 13H13v1.043c.806.07 1.6.223 2.358.459a9.6 9.6 0 0 1 2.899 1.455q.663.499 1.19 1.1A8.95 8.95 0 0 0 20.945 13m-2.82 5.595a5.6 5.6 0 0 0-1.068-1.038a7.6 7.6 0 0 0-2.292-1.145a9 9 0 0 0-1.765-.36v4.893a8.97 8.97 0 0 0 5.124-2.35M11 20.945v-4.893c-.607.063-1.2.184-1.765.36a7.6 7.6 0 0 0-2.292 1.145a5.6 5.6 0 0 0-1.067 1.038A8.97 8.97 0 0 0 11 20.945m-6.447-3.889q.527-.6 1.19-1.099a9.6 9.6 0 0 1 2.899-1.455A11.2 11.2 0 0 1 11 14.043V13H3.055a8.95 8.95 0 0 0 1.498 4.056M3.055 11H11V9.957c-.806-.07-1.6-.223-2.358-.459a9.6 9.6 0 0 1-2.899-1.455a7.7 7.7 0 0 1-1.19-1.099A8.95 8.95 0 0 0 3.056 11" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsWorldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWorldLightIcon],svg[lets-icons-world-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="8"></svg:circle><svg:path d="M18.208 6.785c-.733.676-1.654 1.224-2.697 1.606s-2.187.59-3.348.608a10.4 10.4 0 0 1-3.378-.505c-1.064-.35-2.013-.87-2.782-1.523m12.319 10.353c-.74-.716-1.685-1.297-2.767-1.699A10.2 10.2 0 0 0 12.078 15a10.3 10.3 0 0 0-3.492.574c-1.092.386-2.053.953-2.811 1.657M12 4v16m8-8H4"></svg:path></svg:g>`,
})
export class LetsIconsWorldLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWowIcon],svg[lets-icons-wow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-linecap="round" stroke-width="2"></svg:circle><svg:circle cx="9" cy="9" r="1.25" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width=".5"></svg:circle><svg:circle cx="15" cy="9" r="1.25" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width=".5"></svg:circle><svg:path fill="currentColor" d="M15 15.5c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5s1.343-2.5 3-2.5s3 1.12 3 2.5"></svg:path></svg:g>`,
})
export class LetsIconsWowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsWowLightIcon],svg[lets-icons-wow-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-linecap="round"></svg:circle><svg:circle cx="9" cy="9" r="1" fill="currentColor" stroke="currentColor" stroke-linecap="round"></svg:circle><svg:circle cx="15" cy="9" r="1" fill="currentColor" stroke="currentColor" stroke-linecap="round"></svg:circle><svg:path fill="currentColor" d="M15 15.5c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5s1.343-2.5 3-2.5s3 1.12 3 2.5"></svg:path></svg:g>`,
})
export class LetsIconsWowLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIcons3dBoxLightIcon],svg[lets-icons-3d-box-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M12 21v-8m0 8l-6.162-4.402c-.411-.293-.616-.44-.727-.655S5 15.475 5 14.971V8m7 13l6.163-4.402c.41-.293.615-.44.726-.655s.111-.468.111-.972V8m-7 5L5 8m7 5l7-5M5 8l5.838-4.17c.56-.4.842-.601 1.162-.601s.601.2 1.162.601L19 8"></svg:path>`,
})
export class LetsIcons3dBoxLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddDuotoneIcon],svg[lets-icons-add-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="1.2" d="M12 8v8m4-4H8"></svg:path></svg:g>`,
})
export class LetsIconsAddDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
