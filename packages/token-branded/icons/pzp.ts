import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPzpIcon],svg[token-branded-pzp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPzp0)" d="M11.5 18.5h1v1.945c0 .305-.225.555-.5.555s-.5-.25-.5-.555z"></svg:path><svg:path fill="url(#tokenBrandedPzp1)" d="M9.5 17.5h1v1.945c0 .305-.225.555-.5.555c-.276 0-.5-.25-.5-.555z"></svg:path><svg:path fill="url(#tokenBrandedPzp2)" d="M12.5 5.5h-1V3.555c0-.305.225-.555.5-.555s.5.25.5.555z"></svg:path><svg:path fill="url(#tokenBrandedPzp3)" d="M14.5 6h-.999V4.055c0-.305.225-.555.5-.555s.5.25.5.555z"></svg:path><svg:path fill="url(#tokenBrandedPzp4)" d="M7 5v1.525C7 7.745 8.015 8.5 9.27 8.5h2.125c.455 0 .9.14 1.065.21a328 328 0 0 0-3.9 4.115c-.365.42-1.56 1.7-1.56 3.32A2.22 2.22 0 0 0 8.915 18.5h8.086v-1.525C17 15.755 15.984 15 14.73 15h-1.98a4.7 4.7 0 0 1-1.246-.21c1.015-1.06 3.275-3.53 3.725-3.975c.57-.55 1.775-1.59 1.775-3.53c0-1.55-1.18-2.17-1.775-2.285z"></svg:path><svg:path fill="url(#tokenBrandedPzp5)" d="m12.53 8.95l-1.415 2.45c-.26.445-.615.93-.615 1.35c0 1 .695 1.565 1 1.75c.585-.825.805-1.155 1.375-1.995a3.28 3.28 0 0 0 .625-2.175c0-1.495-1.385-2.286-2-2.33H9.055A2.25 2.25 0 0 1 7 6.523C7 7.744 8.015 8.5 9.27 8.5h2.23c.385 0 .75.25 1.03.45"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPzp0" x1="6.994" x2="13.804" y1="4.511" y2="23.644" gradientUnits="userSpaceOnUse"><svg:stop offset=".02" stop-color="#D4964B"></svg:stop><svg:stop offset=".54" stop-color="#FFED87"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPzp1" x1="6.994" x2="14.063" y1="2.999" y2="17.889" gradientUnits="userSpaceOnUse"><svg:stop offset=".31" stop-color="#D4964B"></svg:stop><svg:stop offset=".79" stop-color="#FFED87"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPzp2" x1="6.994" x2="13.804" y1="4.512" y2="23.645" gradientUnits="userSpaceOnUse"><svg:stop offset=".52" stop-color="#FFED87"></svg:stop><svg:stop offset=".86" stop-color="#D4964B"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPzp3" x1="6.995" x2="14.064" y1="3" y2="17.889" gradientUnits="userSpaceOnUse"><svg:stop offset=".52" stop-color="#FFED87"></svg:stop><svg:stop offset=".86" stop-color="#D4964B"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPzp4" x1="16.435" x2="4.156" y1="4.013" y2="16.862" gradientUnits="userSpaceOnUse"><svg:stop offset=".05" stop-color="#F8FCDA"></svg:stop><svg:stop offset=".26" stop-color="#FCE34B"></svg:stop><svg:stop offset=".76" stop-color="#FFAB39"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPzp5" x1="13.384" x2="10.029" y1="9.015" y2="14.625" gradientUnits="userSpaceOnUse"><svg:stop offset=".06" stop-color="#F96428"></svg:stop><svg:stop offset=".8" stop-color="#F3F14F"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPzpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
