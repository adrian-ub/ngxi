import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNgcIcon],svg[token-branded-ngc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EC1B2E" d="m15.599 12.704l-2.375.194l2.024-5.318l-6.186.868l-.661 5.89l1.48-.086L9.611 21zM9.062 7.962l6.11-.765l-2.88-1.246s.37-2.19-1.732-2.951l-.252.742s1.364.27 1.17 2.263z"></svg:path>`,
})
export class TokenBrandedNgcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
