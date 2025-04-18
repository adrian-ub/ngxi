import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedOraiIcon],svg[token-branded-orai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#07ACEE" fill-rule="evenodd" d="M10.934 3A9.07 9.07 0 0 0 3 10.934h1.613a7.47 7.47 0 0 1 6.32-6.321zm2.132 1.613V3A9.07 9.07 0 0 1 21 10.934h-1.613a7.47 7.47 0 0 0-6.321-6.321m0 14.774a7.47 7.47 0 0 0 6.32-6.321H21A9.07 9.07 0 0 1 13.066 21zm-8.453-6.321a7.47 7.47 0 0 0 6.32 6.32V21A9.07 9.07 0 0 1 3 13.066z" clip-rule="evenodd"></svg:path><svg:path fill="#1B70EF" d="M7.735 8.305c0-.314.252-.57.563-.57H15.7c.31 0 .562.256.562.57v7.39c0 .315-.252.57-.563.57h-7.4a.566.566 0 0 1-.563-.57z"></svg:path><svg:path fill="url(#tokenBrandedOrai0)" fill-rule="evenodd" d="M15.197 10.667a.267.267 0 0 1 .267-.267h1.066a.267.267 0 0 1 0 .534h-1.067a.267.267 0 0 1-.266-.267m0 1.333a.267.267 0 0 1 .267-.267h1.066a.267.267 0 1 1 0 .533h-1.067a.266.266 0 0 1-.266-.266m.8 1.066a.267.267 0 0 0 0 .533h.533a.267.267 0 0 0 0-.533z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedOrai1)" fill-rule="evenodd" d="M8.801 10.667a.267.267 0 0 0-.266-.267H7.468a.267.267 0 0 0 0 .534h1.067a.267.267 0 0 0 .266-.267m0 1.333a.267.267 0 0 0-.266-.267H7.468a.267.267 0 0 0 0 .533h1.067A.266.266 0 0 0 8.8 12M8 13.066a.266.266 0 0 1 0 .533h-.533a.267.267 0 0 1 0-.533z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedOrai2)" fill-rule="evenodd" d="M10.4 7.47a.266.266 0 1 1 .534 0v1.065a.266.266 0 0 1-.533 0zm1.333 0a.267.267 0 0 1 .533 0v.532a.267.267 0 0 1-.533 0zm1.6-.267a.267.267 0 0 0-.267.266v.533a.266.266 0 1 0 .533 0V7.47a.266.266 0 0 0-.267-.266" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedOrai3)" fill-rule="evenodd" d="M10.4 16.53a.266.266 0 1 0 .534 0v-1.066a.266.266 0 0 0-.455-.188a.27.27 0 0 0-.078.188zm1.333 0a.267.267 0 0 0 .533 0v-.533a.267.267 0 0 0-.533 0zm1.6.267a.267.267 0 0 1-.267-.267v-.533a.266.266 0 1 1 .533 0v.533a.266.266 0 0 1-.267.267" clip-rule="evenodd"></svg:path><svg:path fill="#F0F3FA" fill-rule="evenodd" d="M10.134 12.001a1.066 1.066 0 1 1 2.132 0v1.066H12v-.533h-1.6v.533h-.266zm.267.267H12V12a.8.8 0 1 0-1.6 0zm2.132-1.333h1.332v.267h-.533V12.8h.533v.266h-1.332V12.8h.533v-1.6h-.533z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedOrai0" x1="2.999" x2="21.851" y1="12.041" y2="12.041" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9BD2FF"></svg:stop><svg:stop offset="1" stop-color="#E4EFF8"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedOrai1" x1="3" x2="16.955" y1="12" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E8F1F8"></svg:stop><svg:stop offset="1" stop-color="#9BD2FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedOrai2" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E6F0F8"></svg:stop><svg:stop offset="1" stop-color="#9BD2FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedOrai3" x1="12" x2="12" y1="8.987" y2="20.909" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9BD2FF"></svg:stop><svg:stop offset="1" stop-color="#E6F0F8"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedOraiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
