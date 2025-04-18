import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagSriLankaIcon],svg[openmoji-flag-sri-lanka-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:path fill="#5c9e31" d="M5 17h11v38H5z"></svg:path><svg:path fill="#e27022" d="M16 17h10v38H16z"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-miterlimit="10" stroke-width="2" d="M26 18v36M7 19h58v34H7z"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M50 45h2l1-2l-3-6m-9 8h2l1-2l-3-6m-4-11a7.07 7.07 0 0 0-1 4v12"></svg:path><svg:path fill="#f1b31c" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M44 41c3 0 3-2 7-2l5 2c-1-2 2-3 1-6H42s-3 2-3 5h3Z"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M54 45h2l1-2l-3-6m-19 0l4 3m17-9a2 2 0 0 1 0 4m-4-4a2 2 0 0 1 0-4"></svg:path><svg:rect width="4" height="5" x="42" y="30" fill="#f1b31c" rx="1" ry="1"></svg:rect><svg:rect width="4" height="5" x="42" y="30" fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="1" ry="1"></svg:rect><svg:path fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M52 31h4m4-7l1-1m-30 1l-1-1m13 9l-3-1m3 2l-3 1m20 14l1 1m-30-1l-1 1"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagSriLankaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
