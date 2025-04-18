import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagGuamIcon],svg[openmoji-flag-guam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:path fill="#92d3f5" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="M36.002 46.5A11.74 11.74 0 0 0 42 36a11.74 11.74 0 0 0-6-10.5A11.74 11.74 0 0 0 30 36a11.74 11.74 0 0 0 5.998 10.5Z"></svg:path><svg:path fill="#fcea2b" d="M30.64 40a11.24 11.24 0 0 0 5.358 6.5h.004A11.24 11.24 0 0 0 41.36 40Z"></svg:path><svg:path fill="none" stroke="#d22f27" stroke-miterlimit="10" stroke-width="2" d="M7 19h58v34H7z"></svg:path><svg:path fill="none" stroke="#1e50a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M28 39h16"></svg:path><svg:path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36.002 46.5A11.74 11.74 0 0 0 42 36a11.74 11.74 0 0 0-6-10.5A11.74 11.74 0 0 0 30 36a11.74 11.74 0 0 0 5.998 10.5Z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagGuamIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
