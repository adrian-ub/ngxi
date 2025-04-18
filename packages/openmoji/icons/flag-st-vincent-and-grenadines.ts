import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagStVincentAndGrenadinesIcon],svg[openmoji-flag-st-vincent-and-grenadines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M5 17h62v38H5z"></svg:path><svg:path fill="#1e50a0" d="M5 17h21v38H5z"></svg:path><svg:path fill="#5c9e31" d="M46 17h21v38H46zm-6.818 24L36 46l-3.182-5L36 36zM43 35l-3.182 5l-3.182-5l3.182-5zm-7.636 0l-3.182 5L29 35l3.182-5z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagStVincentAndGrenadinesIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
