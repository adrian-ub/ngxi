import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedGalIcon],svg[token-branded-gal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M3 21L20.238 6.646a2.05 2.05 0 1 0-2.884-2.884zm8.318-15.29l-7.26 5.447l5.446-7.26a1.294 1.294 0 1 1 1.814 1.813m8.785 8.786l-7.26 5.447l5.447-7.26a1.294 1.294 0 1 1 1.813 1.813"></svg:path>`,
})
export class TokenBrandedGalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
