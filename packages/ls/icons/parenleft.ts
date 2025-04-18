import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsParenleftIcon],svg[ls-parenleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 0h-81C68 76 43 158 26 247S0 427 0 520c0 87 8 171 22 252c15 80 34 150 59 209h77c-26-61-47-134-62-215Q75 643 75 511c0-95 9-188 28-277c20-89 46-166 79-234"></svg:path>`,
})
export class LsParenleftIcon {
  readonly viewBox = input("0 0 182 981")
  readonly width = input("0.19em")
  readonly height = input("1em")
}
