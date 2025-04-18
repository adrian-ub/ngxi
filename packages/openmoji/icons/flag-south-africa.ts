import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagSouthAfricaIcon],svg[openmoji-flag-south-africa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:path fill="#1e50a0" d="M5 36h62v19H5z"></svg:path><svg:path fill="#5c9e31" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 55l21-13h41V30H26L5 17z"></svg:path><svg:path stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 36L5 46V26z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagSouthAfricaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
