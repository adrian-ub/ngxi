import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNimIcon],svg[token-branded-nim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedNim0)" d="M20.802 11.269L17.05 4.853a1.5 1.5 0 0 0-1.295-.732H8.246a1.52 1.52 0 0 0-1.294.732l-3.754 6.416a1.45 1.45 0 0 0 0 1.463l3.754 6.416a1.49 1.49 0 0 0 1.294.732h7.508a1.52 1.52 0 0 0 1.295-.732l3.753-6.416a1.45 1.45 0 0 0 0-1.463"></svg:path><svg:defs><svg:radialgradient id="tokenBrandedNim0" cx="0" cy="0" r="1" gradientTransform="matrix(18.0163 0 0 17.7349 16.542 19.677)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EC991C"></svg:stop><svg:stop offset="1" stop-color="#E9B213"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class TokenBrandedNimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
