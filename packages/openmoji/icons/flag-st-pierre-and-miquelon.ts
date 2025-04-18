import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagStPierreAndMiquelonIcon],svg[openmoji-flag-st-pierre-and-miquelon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h19v13H5z"></svg:path><svg:path fill="none" stroke="#5c9e31" stroke-miterlimit="10" stroke-width="2" d="m6 30l18-12M6 18l18 12"></svg:path><svg:path stroke="#fff" stroke-miterlimit="10" stroke-width="2" d="M15 30V18m-9 6h18"></svg:path><svg:path fill="#61b2e4" d="M24 17h43v38H24z"></svg:path><svg:path fill="#fff" d="M5 30h19v12H5z"></svg:path><svg:path fill="#f1b31c" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 35c0 3 4 5 7 5s11-1 15-9h2c0 4-3 11-6 13H37l-8-9z"></svg:path><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M24 46c3 0 3-2 6-2s3 2 6 2m0 0c3 0 3-2 6-2s3 2 6 2m0 0c3 0 3-2 6-2s3 2 6 2m0 0c3 0 3-2 6-2"></svg:path><svg:path fill="#d22f27" d="M5 42h19v13H5z"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 46h10m-10 4h10"></svg:path><svg:path fill="#f1b31c" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M47 24c-2 4-3 10-2 12l-4-1c0-5 2-9 5-11Zm8 0c-2 4-3 10-2 12l-4-1c0-5 2-9 5-11Zm-21.579 6.105A10.28 10.28 0 0 1 38 24h1a25 25 0 0 0-2.16 6.96Z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagStPierreAndMiquelonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
