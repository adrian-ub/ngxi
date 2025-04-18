import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagKuwaitIcon],svg[openmoji-flag-kuwait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" d="M5 30h62v12H5z"></svg:path><svg:path fill="#b1cc33" d="M5 17h62v13H5z"></svg:path><svg:path d="M19.368 42L6.324 53.802A.792.792 0 0 1 5 53.215V18.08a.48.48 0 0 1 .801-.355L19.37 30z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagKuwaitIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
