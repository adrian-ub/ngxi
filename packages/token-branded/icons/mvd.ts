import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMvdIcon],svg[token-branded-mvd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedMvd0)" d="m3 7.5l9 9V21l-9-9z"></svg:path><svg:path fill="url(#tokenBrandedMvd1)" d="m3 12l4.5-4.5V3L3 7.5z"></svg:path><svg:path fill="#C58F3C" d="M5.25 9.75L3 12V7.5z"></svg:path><svg:path fill="#FFAA27" d="M12 12L7.5 7.5V3L12 7.579z"></svg:path><svg:path fill="url(#tokenBrandedMvd2)" d="m21 7.5l-9 9V21l9-9z"></svg:path><svg:path fill="url(#tokenBrandedMvd3)" d="m21 12l-4.5-4.5V3L21 7.5z"></svg:path><svg:path fill="#D79B3F" d="M18.75 9.75L21 12V7.5z"></svg:path><svg:path fill="#D28A1C" d="m12 12l4.5-4.5V3L12 7.579z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedMvd0" x1="3" x2="12.98" y1="4.898" y2="24.985" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#955A00"></svg:stop><svg:stop offset=".79" stop-color="#F29F20"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedMvd1" x1="6.532" x2="13.466" y1="14.205" y2="-.138" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9E877A"></svg:stop><svg:stop offset="1" stop-color="#fff"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedMvd2" x1="9.154" x2="12.601" y1="10.582" y2="15.596" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B06E07"></svg:stop><svg:stop offset="1" stop-color="#C77E0C"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedMvd3" x1="17.467" x2="10.534" y1="14.205" y2="-.138" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9E877A"></svg:stop><svg:stop offset="1" stop-color="#fff"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedMvdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
