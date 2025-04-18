import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRlyIcon],svg[token-branded-rly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedRly0)" fill-rule="evenodd" d="M19.941 7.5L12 3L4.059 7.5v9l7.94 4.5l7.942-4.5zm-2.648 1.059l-5.294-2.912l-5.295 2.912v5.823l2.647 1.456V10.23l2.647-1.406l2.643 1.404l2.652-1.65z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedRly0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF4500"></svg:stop><svg:stop offset="1" stop-color="#FFC604"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedRlyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
