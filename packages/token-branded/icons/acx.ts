import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAcxIcon],svg[token-branded-acx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#6CF9D7" d="M9.66 11.466L3 4.806L4.806 3l6.66 6.66a2.4 2.4 0 0 0-1.806 1.806m2.874-1.806a2.4 2.4 0 0 1 1.806 1.806L21 4.806L19.194 3zm1.806 2.874a2.4 2.4 0 0 1-1.806 1.806l6.66 6.66L21 19.194zm-2.874 1.806L4.806 21L3 19.194l6.66-6.66a2.4 2.4 0 0 0 1.806 1.806"></svg:path>`,
})
export class TokenBrandedAcxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
