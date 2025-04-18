import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagGibraltarIcon],svg[openmoji-flag-gibraltar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M27 32h18v9H27zm7-10h4v9h-4z"></svg:path><svg:path fill="#d22f27" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M43 25h2v10h-2zm-16 0h2v10h-2z"></svg:path><svg:path fill="#d22f27" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 37v5m6-5v5m6-5v5"></svg:path><svg:path fill="#d22f27" d="M5 45h62v10H5z"></svg:path><svg:path fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 45v6"></svg:path><svg:path fill="#fff" d="M4.5 42h62v3h-62z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagGibraltarIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
