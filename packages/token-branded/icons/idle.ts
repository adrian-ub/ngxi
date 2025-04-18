import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedIdleIcon],svg[token-branded-idle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1B14DC" d="M11.5 18V3l-6 3.55V18zm7-12h-6v15l6-3.55z"></svg:path>`,
})
export class TokenBrandedIdleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
