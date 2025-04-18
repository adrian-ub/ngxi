import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedExdIcon],svg[token-branded-exd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#EC793E" d="M5.4 3h4.8v18H5.4z"></svg:path><svg:path fill="#0D1122" d="M18.6 3h-7.8l7.8 7.2zm0 18v-7.2L10.8 21z"></svg:path></svg:g>`,
})
export class TokenBrandedExdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
