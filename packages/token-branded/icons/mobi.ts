import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMobiIcon],svg[token-branded-mobi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedMobi0)" d="M6.66 8.4c-2.778.057-3.565 2.261-3.627 3.354l.453.139c1.38-1.882 3.404-1.053 4.3-.546c1.15.649 3.874 2.18 5.566 3.112s3.45 1.149 4.117 1.14c2.685-.113 3.341-2.479 3.495-3.587l-.368-.261c-.902 2.09-3.442 1.362-4.6.736c-1.18-.673-3.927-2.224-5.473-3.042S7.303 8.408 6.66 8.4"></svg:path><svg:path fill="url(#tokenBrandedMobi1)" d="M20.721 12.96c-.328-1.764-2.2-2.206-3.094-2.206c-.783-.045-2.21.063-3.622.59l-1.12-.618c1.843-1.711 3.888-2.08 4.742-2.036c3.76.243 3.63 2.949 3.094 4.27"></svg:path><svg:path fill="url(#tokenBrandedMobi2)" d="M6.4 15.35c-3.605-.097-3.644-2.9-3.213-4.29c.517 1.78 2.358 2.253 3.213 2.267a11.3 11.3 0 0 0 3.545-.752l1.231.685c-1.779 1.693-3.898 2.104-4.776 2.09"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedMobi0" x1="2.971" x2="21.009" y1="11.211" y2="12.798" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D1E8F7"></svg:stop><svg:stop offset=".516" stop-color="#EEF3FC"></svg:stop><svg:stop offset="1" stop-color="#D9DCF8"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedMobi1" x1="3.93" x2="20.886" y1="12.342" y2="14.595" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#99B8ED"></svg:stop><svg:stop offset="1" stop-color="#F0F2FC"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedMobi2" x1="3" x2="10.444" y1="11.593" y2="13.107" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FCFEFF"></svg:stop><svg:stop offset="1" stop-color="#95B7EC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedMobiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
