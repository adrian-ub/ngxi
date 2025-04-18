import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagGuatemalaIcon],svg[openmoji-flag-guatemala-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#92d3f5" d="M5 17h21v38H5zm41 0h21v38H46z"></svg:path><svg:path fill="none" stroke="#b1cc33" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M31.106 30a7 7 0 1 0 9.788 0"></svg:path><svg:path fill="none" stroke="#a57939" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m32 38l-3 4m11-3l3 3"></svg:path><svg:path fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M35 36a4.93 4.93 0 0 0 2.5-4a4.93 4.93 0 0 0-2.5-4Z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagGuatemalaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
