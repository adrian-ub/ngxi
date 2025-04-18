import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTtIcon],svg[token-branded-tt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedTt0)" d="m7.215 19.622l4.626-7.33c.07-.112-.01-.292-.143-.292H7.65c-.328 0-.529-.323-.354-.603l4.98-8.39l-.28-.005a8.998 8.998 0 0 0-4.78 16.62m4.515 1.376h.265a8.998 8.998 0 0 0 4.79-16.62l-4.441 7.363a.17.17 0 0 0 .143.26h4.35c.329 0 .572.401.398.682l-5.51 8.31z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedTt0" x1="11.995" x2="11.995" y1="3.532" y2="20.468" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#06FCD7"></svg:stop><svg:stop offset="1" stop-color="#0502DA"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedTtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
