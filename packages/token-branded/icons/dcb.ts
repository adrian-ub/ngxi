import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDcbIcon],svg[token-branded-dcb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedDcb0)" d="M14.613 5.903c0-2.48 1.405-2.903 2.903-2.903v11.654c0 1.3.058 2.438-.58 3.443c1.16 0 2.322 1.335 2.322 2.903h-8.42c-3.35 0-6.096-2.845-6.096-6.346c0-3.508 2.961-6.428 6.311-6.428c1.243 0 2.602.493 3.56 1.161zm-3.56 12.194c1.858 0 3.56-1.51 3.56-3.443a3.594 3.594 0 0 0-3.525-3.525a3.483 3.483 0 0 0-3.443 3.484c0 1.94 1.556 3.484 3.408 3.484"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedDcb0" x1="6.556" x2="19.942" y1="17.464" y2="10.189" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C41859"></svg:stop><svg:stop offset="1" stop-color="#4D0E75"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedDcbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
