import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedZilliqaIcon],svg[token-branded-zilliqa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedZilliqa0)" d="M5.647 4.155L15.701 9.01l2.648-1.165L8.279 3z"></svg:path><svg:path fill="url(#tokenBrandedZilliqa1)" d="M5.647 4.154v2.62l7 3.373l-7 3.425v2.583L15.707 21v-2.594l-6.814-3.31l6.813-3.492V9.01L5.647 4.164z"></svg:path><svg:path fill="url(#tokenBrandedZilliqa2)" d="m15.706 8.994l2.647-1.15v2.595l-2.647 1.154zm0 11.986l2.647-1.155v-8.072l-2.647 1.164z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedZilliqa0" x1="16.24" x2="3.147" y1="20.445" y2="15.548" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#60AAAC"></svg:stop><svg:stop offset="1" stop-color="#347181"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedZilliqa1" x1="12" x2="12" y1="2.999" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5AC1C1"></svg:stop><svg:stop offset="1" stop-color="#216B79"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedZilliqa2" x1="14.117" x2="19.942" y1="18.618" y2="13.853" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5AC1C1"></svg:stop><svg:stop offset="1" stop-color="#216B79"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedZilliqaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
