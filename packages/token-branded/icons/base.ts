import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBaseIcon],svg[token-branded-base-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0052FF" d="M11.984 21C16.964 21 21 16.97 21 12s-4.036-9-9.016-9C7.26 3 3.384 6.627 3 11.244h11.917v1.513H3C3.385 17.373 7.26 21 11.984 21"></svg:path>`,
})
export class TokenBrandedBaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
