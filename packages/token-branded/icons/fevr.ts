import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedFevrIcon],svg[token-branded-fevr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedFevr0)" d="M12.36 4H3.667A.667.667 0 0 0 3 4.667v14.666a.667.667 0 0 0 .667.667H7v-5.333h2.547l1.053-4H7V8h4.307zm.18 6.667h2.294a1.332 1.332 0 1 0 0-2.667h-1.587L14.3 4h.387a5.333 5.333 0 0 1 3.013 9.733L21 20h-4.46l-2.813-5.333h-2.24z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedFevr0" x1="6.536" x2="15.8" y1="6.143" y2="19.209" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E752F5"></svg:stop><svg:stop offset=".48" stop-color="#5C0CA9"></svg:stop><svg:stop offset="1" stop-color="#44019C"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedFevrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
