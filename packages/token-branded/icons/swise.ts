import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSwiseIcon],svg[token-branded-swise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSwise0)" d="m4.5 17.2l7.504 3.8v-7.455L4.5 17.195z"></svg:path><svg:path fill="url(#tokenBrandedSwise1)" d="m12.005 21l7.495-3.785l-7.495-3.67z"></svg:path><svg:path fill="url(#tokenBrandedSwise2)" d="m12.005 13.545l7.494 3.67l-3.06-5.82L12 13.55z"></svg:path><svg:path fill="url(#tokenBrandedSwise3)" d="m4.5 17.2l7.504-3.655l-4.425-2.16z"></svg:path><svg:path fill="url(#tokenBrandedSwise4)" d="m7.58 11.385l4.42 2.16V3l-4.424 8.385z"></svg:path><svg:path fill="url(#tokenBrandedSwise5)" d="m12.005 13.545l4.434-2.15L12 3v10.55z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSwise0" x1="7.667" x2="24" y1="4.847" y2="11.709" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#8277A6"></svg:stop><svg:stop offset="1" stop-color="#655880"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSwise1" x1="3.33" x2="17.394" y1="22.666" y2="5.453" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#665A82"></svg:stop><svg:stop offset=".24" stop-color="#73638D"></svg:stop><svg:stop offset="1" stop-color="#B4A6D1"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSwise2" x1="11.65" x2="28.774" y1="15.928" y2="3.625" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B0A0CE"></svg:stop><svg:stop offset="1" stop-color="#CEC6E2"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSwise3" x1="12.224" x2="15.658" y1="14.298" y2="7.592" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#887CAE"></svg:stop><svg:stop offset="1" stop-color="#7A6E9B"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSwise4" x1="22.958" x2="9.772" y1="12.004" y2="12.004" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B0A0CE"></svg:stop><svg:stop offset="1" stop-color="#887CAE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSwise5" x1="13.33" x2="16.06" y1="9.52" y2="12.125" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B0A0CE"></svg:stop><svg:stop offset="1" stop-color="#CEC6E2"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSwiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
