import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagGuineaBissauIcon],svg[openmoji-flag-guinea-bissau-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M5 17h62v38H5z"></svg:path><svg:path fill="#5c9e31" d="M5 36h62v19H5z"></svg:path><svg:path fill="#d22f27" d="M5 17h21v38H5z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m15.5 33.5l1.545 5L13 35.41h5l-4.045 3.09z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagGuineaBissauIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
