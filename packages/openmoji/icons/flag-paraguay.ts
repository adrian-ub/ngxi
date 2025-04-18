import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagParaguayIcon],svg[openmoji-flag-paraguay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" d="M5 17h62v13H5z"></svg:path><svg:path fill="#fff" d="M5 30h62v12H5z"></svg:path><svg:path fill="#f1b31c" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" d="m34.707 38l1.328-4l1.145 3.939L34 35.565l4-.098z"></svg:path><svg:circle cx="36" cy="36" r="5" fill="none" stroke="#5c9e31" stroke-miterlimit="10"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagParaguayIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
