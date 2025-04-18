import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRdnIcon],svg[token-branded-rdn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M14.093 13C14.13 7.28 8.713 3.95 6 3h7.623c3.613 2.654 4.422 7.773 4.375 10zM8.5 10v11l5-2.785z"></svg:path>`,
})
export class TokenBrandedRdnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
