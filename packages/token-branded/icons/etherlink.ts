import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEtherlinkIcon],svg[token-branded-etherlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedEtherlink0)" d="M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18m0 16.407a7.407 7.407 0 1 1 0-14.814a7.407 7.407 0 0 1 0 14.814"></svg:path><svg:path fill="url(#tokenBrandedEtherlink1)" d="M11.95 7.051c-2.723.027-4.93 2.283-4.899 5.006c.008.697.16 1.358.427 1.958c.04.09.159.11.227.039l1.091-1.126a.31.31 0 0 0 .08-.278a3.19 3.19 0 0 1 3.653-3.797a.35.35 0 0 0 .314-.1l1.085-1.12a.13.13 0 0 0-.043-.21a4.9 4.9 0 0 0-1.934-.372"></svg:path><svg:path fill="url(#tokenBrandedEtherlink2)" d="M12.049 16.955c2.723-.027 4.93-2.283 4.9-5.006a4.9 4.9 0 0 0-.427-1.957a.14.14 0 0 0-.227-.04l-1.091 1.127a.31.31 0 0 0-.08.277q.065.315.066.65a3.19 3.19 0 0 1-3.72 3.147a.35.35 0 0 0-.314.101l-1.085 1.12a.13.13 0 0 0 .043.21a4.9 4.9 0 0 0 1.935.37"></svg:path><svg:path fill="url(#tokenBrandedEtherlink3)" d="m9.45 12.98l-2.078 2.078a1.08 1.08 0 1 0 1.527 1.527l2.078-2.079A1.08 1.08 0 1 0 9.45 12.98"></svg:path><svg:path fill="url(#tokenBrandedEtherlink4)" d="m15.055 7.386l-2.078 2.078a1.08 1.08 0 0 0 1.527 1.527l2.078-2.078a1.08 1.08 0 1 0-1.527-1.527"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedEtherlink0" x1="3" x2="28.127" y1="12" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#38FF9C"></svg:stop><svg:stop offset="1" stop-color="#171717"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEtherlink1" x1="7.051" x2="16.503" y1="10.573" y2="10.573" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#38FF9C"></svg:stop><svg:stop offset="1" stop-color="#171717"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEtherlink2" x1="10.035" x2="19.436" y1="13.432" y2="13.432" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#38FF9C"></svg:stop><svg:stop offset="1" stop-color="#171717"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEtherlink3" x1="7.055" x2="14.185" y1="14.782" y2="14.782" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#38FF9C"></svg:stop><svg:stop offset="1" stop-color="#171717"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEtherlink4" x1="12.66" x2="19.238" y1="9.189" y2="9.189" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#38FF9C"></svg:stop><svg:stop offset="1" stop-color="#171717"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedEtherlinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
