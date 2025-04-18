import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagNicaraguaIcon],svg[openmoji-flag-nicaragua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#61b2e4" d="M5 17h62v38H5z"></svg:path><svg:path fill="#61b2e4" d="M5 17h62v13H5z"></svg:path><svg:path fill="#fff" d="M5 30h62v12H5z"></svg:path><svg:path fill="#61b2e4" d="m33 37.5l3-5l3 5z"></svg:path><svg:circle cx="36" cy="36" r="5" fill="none" stroke="#fcea2b" stroke-miterlimit="10"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagNicaraguaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
