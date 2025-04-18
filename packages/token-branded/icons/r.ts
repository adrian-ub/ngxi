import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRIcon],svg[token-branded-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedR0)" d="M9.187 18.75V6.795l4.994 2.783l-3.869 2.036v3.76L18.187 21v-4.077l-4.584-3.277l4.022-2.111v-3.77L9.187 3L5.813 4.687V21z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedR0" x1="7.682" x2="19.229" y1="6.198" y2="15.195" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#771A4E"></svg:stop><svg:stop offset="1" stop-color="#3A0C4C"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
