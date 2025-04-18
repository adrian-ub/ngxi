import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTraxxIcon],svg[token-branded-traxx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M3 6.6h8.55v1.35H3zm3.6 2.25h1.35v8.55H6.6zm5.85-2.25H21v1.35h-8.55zm3.6 2.25h1.35v8.55h-1.35z"></svg:path>`,
})
export class TokenBrandedTraxxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
