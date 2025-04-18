import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagBosniaAndHerzegovinaIcon],svg[openmoji-flag-bosnia-and-herzegovina-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:path fill="#f1b31c" d="M50 55L15 17h35z"></svg:path><svg:circle cx="11.1" cy="18" r="1.75" fill="#fff"></svg:circle><svg:circle cx="44.1" cy="54" r="1.75" fill="#fff"></svg:circle><svg:circle cx="40.1" cy="49.5" r="1.75" fill="#fff"></svg:circle><svg:circle cx="35.1" cy="45" r="1.75" fill="#fff"></svg:circle><svg:circle cx="31.1" cy="40.5" r="1.75" fill="#fff"></svg:circle><svg:circle cx="23.1" cy="31.5" r="1.75" fill="#fff"></svg:circle><svg:circle cx="27.1" cy="36" r="1.75" fill="#fff"></svg:circle><svg:circle cx="15.1" cy="22.5" r="1.75" fill="#fff"></svg:circle><svg:circle cx="19.1" cy="27" r="1.75" fill="#fff"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagBosniaAndHerzegovinaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
