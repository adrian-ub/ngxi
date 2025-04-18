import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPibIcon],svg[token-branded-pib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPib0)" d="M5 10.232V7.045l3.574-2.033l2.755 1.582zM11.75 3L9 4.681l6.5 3.69V5.132zM16 12.82V5.399l3 1.64V11.2zm2.999 2.067v-3.194l-6.3 3.639l2.734 1.658zM8.5 16.777v-3.219L15 17.27L12.25 19zM5 19.364v-6.708L8 11v10zm5-9.686L12 8.5l2 1.178v2.555L12 13.5l-2-1.267z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPib0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#8CB69D"></svg:stop><svg:stop offset=".191" stop-color="#A2C98A"></svg:stop><svg:stop offset=".386" stop-color="#C1A879"></svg:stop><svg:stop offset=".579" stop-color="#DF6B83"></svg:stop><svg:stop offset=".8" stop-color="#6E7CB4"></svg:stop><svg:stop offset="1" stop-color="#7270AF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPibIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
