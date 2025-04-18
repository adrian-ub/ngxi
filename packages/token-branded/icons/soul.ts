import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSoulIcon],svg[token-branded-soul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSoul0)" d="M17.81 8.849H6.215c-1.762 0-3.19 1.412-3.19 3.154s1.428 3.153 3.19 3.153h11.593c1.762 0 3.19-1.412 3.19-3.153s-1.428-3.154-3.19-3.154"></svg:path><svg:path fill="url(#tokenBrandedSoul1)" d="m9.746 3.933l-5.81 5.786a3.174 3.174 0 0 0 0 4.502a3.205 3.205 0 0 0 4.52 0l5.81-5.786a3.174 3.174 0 0 0 0-4.502a3.205 3.205 0 0 0-4.52 0"></svg:path><svg:path fill="url(#tokenBrandedSoul2)" d="m15.544 9.779l-5.81 5.787a3.174 3.174 0 0 0 0 4.501a3.205 3.205 0 0 0 4.52 0l5.81-5.786a3.175 3.175 0 0 0 0-4.502a3.205 3.205 0 0 0-4.52 0"></svg:path><svg:defs><svg:radialgradient id="tokenBrandedSoul0" cx="0" cy="0" r="1" gradientTransform="matrix(-9.93267 5.27396 -4.54389 -8.5577 18.402 8.83)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFD8B0"></svg:stop><svg:stop offset=".359" stop-color="#FFA3AC"></svg:stop><svg:stop offset="1" stop-color="#FF87CD"></svg:stop></svg:radialgradient><svg:radialgradient id="tokenBrandedSoul1" cx="0" cy="0" r="1" gradientTransform="rotate(135.115 4.847 5.285)scale(9.52642 11.0623)" gradientUnits="userSpaceOnUse"><svg:stop offset=".25" stop-color="#FF2E79"></svg:stop><svg:stop offset=".87" stop-color="#FF8BD1"></svg:stop></svg:radialgradient><svg:radialgradient id="tokenBrandedSoul2" cx="0" cy="0" r="1" gradientTransform="rotate(-47.685 26.373 -4.382)scale(12.0539 7.71216)" gradientUnits="userSpaceOnUse"><svg:stop offset=".13" stop-color="#FF2B9D"></svg:stop><svg:stop offset=".724" stop-color="#FF9BBF"></svg:stop><svg:stop offset=".958" stop-color="#FAC7BD"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class TokenBrandedSoulIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
