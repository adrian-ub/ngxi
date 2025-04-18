import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagSerbiaIcon],svg[openmoji-flag-serbia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" d="M5 17h62v13H5z"></svg:path><svg:path fill="#1e50a0" d="M5 30h62v12H5z"></svg:path><svg:circle cx="27" cy="40" r="7" fill="#fff" stroke="#d22f27" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path fill="#fff" stroke="#d22f27" stroke-miterlimit="10" stroke-width="2" d="M34 40V29H20v11"></svg:path><svg:path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="m22 44l12-14m-2 14L20 30"></svg:path><svg:path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" d="M27 33v10m-5-5h10"></svg:path><svg:path fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M27 23c-3.126.623-5 1.6-4 4h8c1-2.4-.874-3.377-4-4m0-1.951V23"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagSerbiaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
