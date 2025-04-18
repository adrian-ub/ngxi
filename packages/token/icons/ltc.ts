import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLtcIcon],svg[token-ltc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.734 15.611l-1.609.63l.776-3.116l1.62-.652L8.86 3h5.772l-1.71 6.975l1.586-.642l-.765 3.083l-1.598.653l-.956 4.074h8.685L18.895 21H4.406z"></svg:path>`,
})
export class TokenLtcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
