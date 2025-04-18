import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagSenegalIcon],svg[openmoji-flag-senegal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M5 17h62v38H5z"></svg:path><svg:path fill="#5c9e31" d="M5 17h21v38H5z"></svg:path><svg:path fill="#d22f27" d="M46 17h21v38H46z"></svg:path><svg:path fill="#5c9e31" stroke="#5c9e31" stroke-linecap="round" stroke-linejoin="round" d="m32.122 42l3.983-12l3.434 11.816L30 34.696l12-.296z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagSenegalIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
