import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedZilIcon],svg[token-branded-zil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedZil0)" d="M5.647 4.154L15.7 9.01l2.647-1.165L8.278 3z"></svg:path><svg:path fill="url(#tokenBrandedZil1)" d="M5.647 4.153v2.621l6.999 3.372l-7 3.426v2.584L15.707 21v-2.594l-6.814-3.31l6.814-3.494V9.008L5.646 4.164z"></svg:path><svg:path fill="url(#tokenBrandedZil2)" d="m15.706 8.994l2.647-1.15v2.595l-2.647 1.154zm0 11.986l2.647-1.154v-8.074l-2.647 1.165z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedZil0" x1="16.24" x2="3.146" y1="20.445" y2="15.548" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#60AAAC"></svg:stop><svg:stop offset="1" stop-color="#347181"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedZil1" x1="12" x2="12" y1="2.999" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5AC1C1"></svg:stop><svg:stop offset="1" stop-color="#216B79"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedZil2" x1="14.117" x2="19.941" y1="18.619" y2="13.854" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5AC1C1"></svg:stop><svg:stop offset="1" stop-color="#216B79"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedZilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
