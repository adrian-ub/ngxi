import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKauIcon],svg[token-kau-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.29 9.387l-3.484 3.484l4.715 7.142a2.5 2.5 0 0 0 2.02.987H21a11 11 0 0 1-2.323-2.323zM3 3h5.226v10.097l-5.226 5zm10.452 0h4.645L13.45 7.645z"></svg:path>`,
})
export class TokenKauIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
