import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedHgptIcon],svg[token-branded-hgpt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedHgpt0)" d="M12.03 20.946a8.97 8.97 0 1 0 0-17.94a8.97 8.97 0 0 0 0 17.94"></svg:path><svg:path fill="url(#tokenBrandedHgpt1)" d="M17.587 19.02A8.97 8.97 0 1 1 6.52 4.9C7.76 6.53 8.436 8.646 8.024 11c-.074.421-.01.806.153 1.16c.253.56.765 1.045 1.435 1.499c.343.237.739.464 1.145.686c.475.258.971.511 1.488.77c.528.264 1.072.533 1.6.823q.825.452 1.609.976c.422.285.818.597 1.166.934q.555.527.966 1.172"></svg:path><svg:path fill="url(#tokenBrandedHgpt2)" fill-rule="evenodd" d="M17.148 9.864H6.917a1.79 1.79 0 0 0-1.747 1.847c0 1.599 1.235 2.902 2.744 2.902h8.226c1.515 0 2.75-1.303 2.75-2.902a1.8 1.8 0 0 0-1.742-1.847m-6.701 2.66a.96.96 0 0 1-.158.506H7.967a.96.96 0 0 1-.159-.506c0-.597.591-1.077 1.32-1.077c.728 0 1.319.48 1.319 1.077m6.332 0a.96.96 0 0 1-.159.506H14.3a.96.96 0 0 1-.159-.506c0-.597.591-1.077 1.32-1.077c.728 0 1.319.48 1.319 1.077" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedHgpt0" x1="19.528" x2="11.982" y1="9.126" y2="14.55" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6767D9"></svg:stop><svg:stop offset="1" stop-color="#9578EF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedHgpt1" x1="3.06" x2="10.373" y1="15.247" y2="9.575" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#AA80F9"></svg:stop><svg:stop offset="1" stop-color="#675ADD"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedHgpt2" x1="5.17" x2="18.889" y1="12.239" y2="12.239" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#444B8C"></svg:stop><svg:stop offset="1" stop-color="#26264F"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedHgptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
