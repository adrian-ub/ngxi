import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagSwitzerlandIcon],svg[openmoji-flag-switzerland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M17 17h38v38H17z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width="2" d="M47 32.462h-7.462V25h-7.076v7.462H25v7.076h7.462V47h7.076v-7.462H47z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h38v38H17z"></svg:path>`,
})
export class OpenmojiFlagSwitzerlandIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
