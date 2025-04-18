import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagUzbekistanIcon],svg[openmoji-flag-uzbekistan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b1cc33" d="M5 17h62v38H5z"></svg:path><svg:path fill="#61b2e4" d="M5 17h62v13H5z"></svg:path><svg:path fill="#fff" stroke="#d22f27" stroke-miterlimit="10" stroke-width="1.5" d="M5 30.25h62v11.5H5z"></svg:path><svg:circle cx="29.25" cy="21" r="1" fill="#fff"></svg:circle><svg:circle cx="29.25" cy="24" r="1" fill="#fff"></svg:circle><svg:circle cx="29.25" cy="27" r="1" fill="#fff"></svg:circle><svg:circle cx="26.25" cy="21" r="1" fill="#fff"></svg:circle><svg:circle cx="26.25" cy="24" r="1" fill="#fff"></svg:circle><svg:circle cx="26.25" cy="27" r="1" fill="#fff"></svg:circle><svg:circle cx="23.25" cy="21" r="1" fill="#fff"></svg:circle><svg:circle cx="23.25" cy="24" r="1" fill="#fff"></svg:circle><svg:circle cx="23.25" cy="27" r="1" fill="#fff"></svg:circle><svg:circle cx="20.25" cy="24" r="1" fill="#fff"></svg:circle><svg:circle cx="20.25" cy="27" r="1" fill="#fff"></svg:circle><svg:circle cx="17.25" cy="27" r="1" fill="#fff"></svg:circle><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M11.297 24A3.465 3.465 0 0 1 14 20.567a3.2 3.2 0 0 0-.649-.067a3.503 3.503 0 0 0 0 7a3.2 3.2 0 0 0 .649-.067A3.465 3.465 0 0 1 11.297 24"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagUzbekistanIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
