import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPtuIcon],svg[token-branded-ptu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPtu0)" d="M14.669 3H9.33a4.84 4.84 0 0 0-4.78 4.903V21h3.104V7.903c0-1.117.577-1.8 1.676-1.8h5.338c1.098 0 1.676.677 1.676 1.8V21h3.103V7.903A4.84 4.84 0 0 0 14.668 3"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPtu0" x1="6.383" x2="21.037" y1="9.468" y2="17.673" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0A68F4"></svg:stop><svg:stop offset="1" stop-color="#3DFFB9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPtuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
