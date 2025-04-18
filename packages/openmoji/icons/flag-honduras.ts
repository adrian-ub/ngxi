import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagHondurasIcon],svg[openmoji-flag-honduras-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#61b2e4" d="M5 17h62v13H5zm0 25h62v13H5z"></svg:path><svg:circle cx="36" cy="36" r="1.5" fill="#61b2e4"></svg:circle><svg:circle cx="43" cy="39" r="1.5" fill="#61b2e4"></svg:circle><svg:circle cx="43" cy="33" r="1.5" fill="#61b2e4"></svg:circle><svg:circle cx="29" cy="39" r="1.5" fill="#61b2e4"></svg:circle><svg:circle cx="29" cy="33" r="1.5" fill="#61b2e4"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagHondurasIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
