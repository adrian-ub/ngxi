import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagSyriaIcon],svg[openmoji-flag-syria-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 17h62v38H5z"></svg:path><svg:path fill="#5c9e31" stroke="#5c9e31" stroke-linecap="round" stroke-linejoin="round" d="M5 17h62v13H5z"></svg:path><svg:path fill="#fff" d="M5 30h62v12H5z"></svg:path><svg:path fill="#d22f27" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="m21 33.09l1.854 6L18 35.382h6l-4.854 3.708zm15 0l1.854 6L33 35.382h6l-4.854 3.708zm15 0l1.854 6L48 35.382h6l-4.854 3.708z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagSyriaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
