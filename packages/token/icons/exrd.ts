import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenExrdIcon],svg[token-exrd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13.061v-2.117h2.774c.254 0 .492.11.64.317l3.172 4.49l4.85-10.694a.79.79 0 0 1 .72-.466H21v2.117h-5.003l-5.543 12.389a.53.53 0 0 1-.91.095l-4.225-6.13z"></svg:path>`,
})
export class TokenExrdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
