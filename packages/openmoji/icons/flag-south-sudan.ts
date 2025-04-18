import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagSouthSudanIcon],svg[openmoji-flag-south-sudan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c9e31" d="M5 17h62v38H5z"></svg:path><svg:path d="M5 17h62v13H5z"></svg:path><svg:path fill="#d22f27" stroke="#fff" stroke-miterlimit="10" d="M5 30h62v12H5z"></svg:path><svg:path fill="#1e50a0" d="M26 36L5 55V17z"></svg:path><svg:path fill="#f1b31c" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" d="m10.5 36l5 1.545l-3.09-4.045v5l3.09-4.045z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagSouthSudanIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
