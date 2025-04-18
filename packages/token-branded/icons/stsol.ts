import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedStsolIcon],svg[token-branded-stsol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedStsol0)" d="m11.997 14.102l-5.126-3.01l-.145.22a6.34 6.34 0 0 0 .85 7.846a6.23 6.23 0 0 0 6.816 1.363a6.2 6.2 0 0 0 2.026-1.363a6.32 6.32 0 0 0 .85-7.846l-.145-.22z"></svg:path><svg:path fill="url(#tokenBrandedStsol1)" d="m17.123 11.103l-5.126 3.01l-5.131-3.015l5.146-2.69z"></svg:path><svg:path fill="url(#tokenBrandedStsol2)" d="m11.997 3l4.426 6.901l-4.426 2.601z"></svg:path><svg:path fill="url(#tokenBrandedStsol3)" d="M11.998 3v9.502l-4.416-2.6z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedStsol0" x1="11.997" x2="11.997" y1="3" y2="21.007" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#498BE9"></svg:stop><svg:stop offset="1" stop-color="#56F2FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedStsol1" x1="11.997" x2="11.997" y1="3.001" y2="20.938" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4A8CEA"></svg:stop><svg:stop offset=".7" stop-color="#5ABEF4"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedStsol2" x1="13.336" x2="10.857" y1="12.947" y2="21.729" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FB8174"></svg:stop><svg:stop offset=".56" stop-color="#568FDD"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedStsol3" x1="8.517" x2="9.318" y1="7.716" y2="11.582" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFE235"></svg:stop><svg:stop offset=".61" stop-color="#5DCBA2"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedStsolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
