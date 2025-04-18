import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagEritreaIcon],svg[openmoji-flag-eritrea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c9e31" d="M5 17h62v38H5z"></svg:path><svg:path fill="#61b2e4" d="M5 36h62v19H5z"></svg:path><svg:path fill="#d22f27" d="M66 36L6 54V18z"></svg:path><svg:circle cx="19" cy="36.5" r="9.5" fill="none" stroke="#f1b31c" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 46V33m0 8h3m-3-4h3m-6 2h3m-3-4h3"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagEritreaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
