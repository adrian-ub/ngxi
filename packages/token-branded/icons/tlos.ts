import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTlosIcon],svg[token-branded-tlos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedTlos0)" fill-rule="evenodd" d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0 3a9 9 0 1 0 0-18a9 9 0 0 0 0 18" clip-rule="evenodd"></svg:path><svg:defs><svg:radialgradient id="tokenBrandedTlos0" cx="0" cy="0" r="1" gradientTransform="matrix(0 9 -9 0 12 12)" gradientUnits="userSpaceOnUse"><svg:stop offset=".152" stop-color="#42A0B9"></svg:stop><svg:stop offset=".247" stop-color="#70C38D"></svg:stop><svg:stop offset=".344" stop-color="#6FC68F"></svg:stop><svg:stop offset=".488" stop-color="#3B74CE"></svg:stop><svg:stop offset=".66" stop-color="#954494"></svg:stop><svg:stop offset=".76" stop-color="#9A4290"></svg:stop><svg:stop offset=".871" stop-color="#7256AB"></svg:stop><svg:stop offset="1" stop-color="#3D7DC7"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class TokenBrandedTlosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
