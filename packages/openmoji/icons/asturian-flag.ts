import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiAsturianFlagIcon],svg[openmoji-asturian-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:path fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 26.5V47m-7.5-13h15"></svg:path><svg:path fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M34.2 24.764L36 26.5l1.8-1.8"></svg:path><svg:path fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M34 47.929L36 46l2 2z"></svg:path><svg:path fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M36 26.5V24m-9.236 11.8L28.5 34l-1.8-1.8m1.8 1.8H26m19.236 1.8L43.5 34l1.8-1.8M43.5 34H46"></svg:path><svg:circle cx="36" cy="34" r="1.5" fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiAsturianFlagIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
