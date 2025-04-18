import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMoveIcon],svg[token-branded-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#6FE9B1" d="M3 12h3.484v6.968H3zm3.484 0h4.064v6.968h3.484V8.516H6.484zm7.548-6.968v3.484h3.484v10.452H21V5.032z"></svg:path>`,
})
export class TokenBrandedMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
