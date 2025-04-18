import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedApfcIcon],svg[token-branded-apfc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedApfc0)" fill-rule="evenodd" d="m7.622 3.243l4.621 2.55v5.117l-4.621 2.55L3 10.91V5.792zm-4.135 7.38l3.891 2.15v-4.52l-3.891-1.93zm4.378-2.364v4.514l3.892-2.15V6.327zm3.614-2.336L7.623 7.84L3.764 5.923l3.858-2.125z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedApfc1)" fill-rule="evenodd" d="M16.378 3.243L21 5.793v5.117l-4.622 2.55l-4.621-2.55V5.792zm-4.135 7.38l3.892 2.15v-4.52l-3.892-1.93zm4.379-2.364v4.514l3.891-2.15V6.327zm3.614-2.336L16.378 7.84L12.52 5.923l3.858-2.125z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedApfc2)" fill-rule="evenodd" d="m12 10.541l4.622 2.55v5.117L12 20.758l-4.621-2.55V13.09zm-4.135 7.38l3.892 2.15v-4.52l-3.892-1.93zm4.378-2.364v4.514l3.892-2.15v-4.296zm3.615-2.335L12 15.138l-3.858-1.916L12 11.096z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedApfc0" x1="4.895" x2="20.037" y1="7.413" y2="16.519" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C66329"></svg:stop><svg:stop offset=".42" stop-color="#E08D39"></svg:stop><svg:stop offset="1" stop-color="#D6B087"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedApfc1" x1="3.474" x2="21" y1="14.085" y2="14.085" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E1B88A"></svg:stop><svg:stop offset=".47" stop-color="#274527"></svg:stop><svg:stop offset="1" stop-color="#3A5959"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedApfc2" x1="12.001" x2="12.001" y1="10.541" y2="20.757" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D3B088"></svg:stop><svg:stop offset=".41" stop-color="#B4B4B4"></svg:stop><svg:stop offset="1" stop-color="#A3A2A4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedApfcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
