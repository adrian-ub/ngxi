import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPwrIcon],svg[token-branded-pwr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPwr0)" d="M11.998 20.999A9.004 9.004 0 0 0 20.65 9.515q.068.388.068.793c0 3.601-3.562 4.501-5.345 4.501H8.622l-.563 2.814H4.964a9 9 0 0 0 7.034 3.376"></svg:path><svg:path fill="url(#tokenBrandedPwr1)" d="M4.74 17.324A9.003 9.003 0 1 1 20.27 8.44c-.518-.872-1.56-1.508-3.49-1.508H8.623L5.81 9.745h9.565V8.62l3.376 2.25l-3.376 2.251v-1.125H5.81z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPwr0" x1="5.842" x2="21.373" y1="17.471" y2="13.118" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4D4D4D"></svg:stop><svg:stop offset="1" stop-color="#1A1A1A"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPwr1" x1="4.402" x2="19.594" y1="6.651" y2="6.932" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#008CC4"></svg:stop><svg:stop offset="1" stop-color="#00A8F8"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPwrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
