import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCeloIcon],svg[token-branded-celo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FCFE52" d="M3 3h18v6.429h-3.111a6.428 6.428 0 1 0 0 5.143H21V21H3z"></svg:path>`,
})
export class TokenBrandedCeloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
