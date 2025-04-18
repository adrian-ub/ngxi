import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRouteIcon],svg[token-branded-route-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedRoute0)" d="M8.528 4.3a.29.29 0 0 1-.01-.393a2.624 2.624 0 0 1 3.852-.127l1.99 1.975a4.164 4.164 0 0 1 .047 5.789l-2.539 2.638l2.643 2.733a2.91 2.91 0 0 1 .01 4.003a.26.26 0 0 1-.293.06a.3.3 0 0 1-.086-.06l-3.785-3.827a4.164 4.164 0 0 1 .01-5.808l2.52-2.534l-4.359-4.453z"></svg:path><svg:path fill="url(#tokenBrandedRoute1)" d="m11.196 10.444l1.686-1.696a3.08 3.08 0 0 1 .422 3.941l-1.436 1.488c-.54-.545-1.535-1.848-.7-3.667z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedRoute0" x1="15.961" x2="10.527" y1="10.284" y2="10.284" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FE8664"></svg:stop><svg:stop offset="1" stop-color="#FF3B56"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedRoute1" x1="13.625" x2="11.171" y1="9.89" y2="13.447" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#AB3E55"></svg:stop><svg:stop offset=".51" stop-color="#BD4551"></svg:stop><svg:stop offset="1" stop-color="#AB3E55"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedRouteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
