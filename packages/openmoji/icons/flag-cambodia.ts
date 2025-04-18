import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagCambodiaIcon],svg[openmoji-flag-cambodia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:path fill="#1e50a0" d="M5 45h62v10H5zm0-28h62v10H5z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M45.882 42H26.118l2.117-4.235h15.53zm-7.058-6.353h-5.648L36 30zm4.235 0h-3.53l1.324-2.823h.882zm-10.588 0h-3.53l1.324-2.823h.882zm-4.236 0h15.529v2.118H28.235z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagCambodiaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
