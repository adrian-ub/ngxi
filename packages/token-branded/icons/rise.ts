import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRiseIcon],svg[token-branded-rise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedRise0)" d="M14.463 20.995a9.15 9.15 0 0 0 6.534-8.824C20.997 7.112 16.97 3 12 3s-8.998 4.105-8.998 9.172c0 4.194 2.761 7.731 6.535 8.828l1.9-11.252l-4.78 3.57l-.28-.286L12 5.249l5.623 7.783l-.281.281l-4.78-3.565z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedRise0" x1="3.002" x2="21.002" y1="10.451" y2="12.11" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CC1A3C"></svg:stop><svg:stop offset="1" stop-color="#FF9A2E"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedRiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
