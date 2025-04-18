import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSolanaIcon],svg[token-branded-solana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSolana0)" d="M18.413 7.902a.62.62 0 0 1-.411.163H3.58c-.512 0-.77-.585-.416-.928l2.369-2.284a.6.6 0 0 1 .41-.169H20.42c.517 0 .77.59.41.935z"></svg:path><svg:path fill="url(#tokenBrandedSolana1)" d="M18.413 19.158a.62.62 0 0 1-.411.158H3.58c-.512 0-.77-.58-.416-.923l2.369-2.29a.6.6 0 0 1 .41-.163H20.42c.517 0 .77.586.41.928z"></svg:path><svg:path fill="url(#tokenBrandedSolana2)" d="M18.413 10.473a.62.62 0 0 0-.411-.158H3.58c-.512 0-.77.58-.416.923l2.369 2.29c.111.103.257.16.41.163H20.42c.517 0 .77-.586.41-.928z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSolana0" x1="3.001" x2="21.459" y1="55.041" y2="54.871" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#599DB0"></svg:stop><svg:stop offset="1" stop-color="#47F8C3"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSolana1" x1="3.001" x2="21.341" y1="9.168" y2="9.027" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C44FE2"></svg:stop><svg:stop offset="1" stop-color="#73B0D0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSolana2" x1="4.036" x2="20.303" y1="12.003" y2="12.003" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#778CBF"></svg:stop><svg:stop offset="1" stop-color="#5DCDC9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSolanaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
