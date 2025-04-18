import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedXepIcon],svg[token-branded-xep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedXep0)" d="M12.003 20.998a8.998 8.998 0 0 0 8.846-10.64l-2.11 1.237l.012.405a6.75 6.75 0 0 1-12.13 4.077l2.693-1.608a3.654 3.654 0 0 0 5.973-3.566L18.21 9.16l1.879-1.097a8.998 8.998 0 1 0-8.087 12.935m-3.881-8.633l-2.587 1.547A6.749 6.749 0 0 1 16.76 7.208l-2.755 1.648a3.655 3.655 0 0 0-5.872 3.504zm9.392-3.925l-4.089 2.463v1.8l-1.704.984l-1.49-.86l-3.92 2.356l-.225-.371l3.931-2.362v-1.716l1.704-.984l1.418.821l4.15-2.497z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedXep0" x1="12" x2="12" y1="3.001" y2="20.998" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#017FEE"></svg:stop><svg:stop offset="1" stop-color="#171B6E"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedXepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
