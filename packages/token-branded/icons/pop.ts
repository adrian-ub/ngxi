import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPopIcon],svg[token-branded-pop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPop0)" d="M6.15 13.8h12.6V8.4H21v7.2H6.15zm-.9 1.8H3V8.4h14.85v1.8H5.25zm12.6-2.7v-1.8H6.15v1.8z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPop0" x1="12.45" x2="9.75" y1="7.5" y2="15.6" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00BAC9"></svg:stop><svg:stop offset=".12" stop-color="#2060B2"></svg:stop><svg:stop offset=".18" stop-color="#7046B2"></svg:stop><svg:stop offset=".24" stop-color="#CC83A1"></svg:stop><svg:stop offset=".3" stop-color="#663FA9"></svg:stop><svg:stop offset=".37" stop-color="#3557B8"></svg:stop><svg:stop offset=".45" stop-color="#8851B7"></svg:stop><svg:stop offset=".56" stop-color="#E096AC"></svg:stop><svg:stop offset=".75" stop-color="#7443B7"></svg:stop><svg:stop offset=".91" stop-color="#8F48A9"></svg:stop><svg:stop offset="1" stop-color="#C379AD"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
