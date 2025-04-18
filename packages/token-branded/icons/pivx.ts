import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPivxIcon],svg[token-branded-pivx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#5E4778"><svg:path d="M12.9 4.8H5.7V3h7.2a5.4 5.4 0 0 1 0 10.8H7.5V21H5.7v-9h7.2a3.6 3.6 0 0 0 0-7.2"></svg:path><svg:path d="M11.7 9h-6V7.2h6z"></svg:path></svg:g>`,
})
export class TokenBrandedPivxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
