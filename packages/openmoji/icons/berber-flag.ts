import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBerberFlagIcon],svg[openmoji-berber-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M5 17h62v38H5z"></svg:path><svg:path fill="#b1cc33" d="M5 30h62v12H5z"></svg:path><svg:path fill="#61b2e4" d="M5 17h62v13H5z"></svg:path><svg:path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 24v24m0-8.437c-6.41 0-12.006 3.393-15 8.437m15-8.437c6.41 0 12.006 3.393 15 8.437M36 32.438c-6.41 0-12.006-3.394-15-8.438m15 8.438c6.41 0 12.006-3.394 15-8.438"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiBerberFlagIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
