import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedOdinIcon],svg[token-branded-odin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0C0C0C" d="M17.913 18.766A8.984 8.984 0 0 1 5.233 6.087l3.398 3.397v5.885h5.885zm.853-.853A8.984 8.984 0 0 0 6.087 5.233l3.397 3.398h5.885v5.885z"></svg:path>`,
})
export class TokenBrandedOdinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
