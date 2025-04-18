import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKdaIcon],svg[token-branded-kda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedKda0)" d="M20.357 21h-5.571L9.07 12.857l2.286-4.714z"></svg:path><svg:path fill="#6A0097" d="M3.643 3h4.5v18h-4.5z"></svg:path><svg:path fill="url(#tokenBrandedKda1)" d="M19.357 3h-5.142L8.143 9.187v5.623z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedKda0" x1="16.43" x2="7.141" y1="21" y2="7.898" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6A0097"></svg:stop><svg:stop offset="1" stop-color="#E40790"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedKda1" x1="17.706" x2="7.581" y1="3" y2="12.281" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#730196"></svg:stop><svg:stop offset="1" stop-color="#ED098F"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedKdaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
