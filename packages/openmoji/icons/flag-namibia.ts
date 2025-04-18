import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagNamibiaIcon],svg[openmoji-flag-namibia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c9e31" d="M5 17h62v38H5z"></svg:path><svg:path fill="#1e50a0" d="M5 17v38l62-38z"></svg:path><svg:path fill="#d22f27" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M67 24v-7h-8L5 48v7h8z"></svg:path><svg:circle cx="17" cy="27" r="4" fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagNamibiaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
