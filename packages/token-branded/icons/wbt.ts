import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedWbtIcon],svg[token-branded-wbt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedWbt0)" fill-rule="evenodd" d="M18.364 18.364A9 9 0 1 1 5.636 5.636a9 9 0 0 1 12.728 12.728M12.42 9.321c.178.076.334.197.45.352h-.005l1.378 1.802l2.809-6.922a9 9 0 0 1 1.733 1.537l-3.244 7.993a1.09 1.09 0 0 1-1.433.592a1.1 1.1 0 0 1-.448-.349l-1.373-1.802l-1.808 4.447a1.09 1.09 0 0 1-.959.684h-.053a1.09 1.09 0 0 1-.965-.583L5.97 12.286a1.093 1.093 0 1 1 1.934-1.018l1.437 2.709l1.643-4.055a1.09 1.09 0 0 1 1.437-.6" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedWbt0" x1="2.995" x2="21" y1="12" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E9C570"></svg:stop><svg:stop offset="1" stop-color="#F7B839"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedWbtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
