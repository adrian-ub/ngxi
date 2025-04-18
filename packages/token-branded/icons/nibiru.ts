import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNibiruIcon],svg[token-branded-nibiru-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedNibiru0)" d="M12.225 3L6.19 7.244l11.66 8.475V6.957zm4.52 10.504L8.156 7.26l4.09-2.878l4.5 3.165z"></svg:path><svg:path fill="url(#tokenBrandedNibiru1)" d="M6.15 8.281v8.767L11.92 21l5.88-4.25zm1.146 8.167v-5.952l8.597 6.252l-3.97 2.87z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedNibiru0" x1="-.462" x2="77.832" y1="1.062" y2="17.697" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F29AC4"></svg:stop><svg:stop offset=".13" stop-color="#F2A9CB"></svg:stop><svg:stop offset=".275" stop-color="#F2BAD5"></svg:stop><svg:stop offset=".395" stop-color="#CDC6D7"></svg:stop><svg:stop offset=".52" stop-color="#82D1D9"></svg:stop><svg:stop offset=".66" stop-color="#09D4D7"></svg:stop><svg:stop offset=".8" stop-color="#11BBCA"></svg:stop><svg:stop offset="1" stop-color="#17A0BF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNibiru1" x1="-.462" x2="77.832" y1="1.062" y2="17.697" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F29AC4"></svg:stop><svg:stop offset=".13" stop-color="#F2A9CB"></svg:stop><svg:stop offset=".275" stop-color="#F2BAD5"></svg:stop><svg:stop offset=".395" stop-color="#CDC6D7"></svg:stop><svg:stop offset=".52" stop-color="#82D1D9"></svg:stop><svg:stop offset=".66" stop-color="#09D4D7"></svg:stop><svg:stop offset=".8" stop-color="#11BBCA"></svg:stop><svg:stop offset="1" stop-color="#17A0BF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedNibiruIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
