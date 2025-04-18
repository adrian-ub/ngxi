import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRolluxIcon],svg[token-branded-rollux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#DBEF88" d="M12 21a9 9 0 1 0 .001-18A9 9 0 0 0 12 21"></svg:path><svg:path fill="#000" d="M8.024 7.353h.372l8.922 8.18v1.115H8.024zm7.036 5.396a3.717 3.717 0 0 0-5.278-4.838z"></svg:path></svg:g>`,
})
export class TokenBrandedRolluxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
