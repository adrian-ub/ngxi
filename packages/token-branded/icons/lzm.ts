import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLzmIcon],svg[token-branded-lzm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#36A4DE" d="M7.2 13.02L3 6.9v13.8h12l-2.7-3.6H7.2zm.6-9.72l4.5 7.5l4.5-7.5H21v17.4h-4.2V9.9l-4.5 7.2L3 3.3z"></svg:path>`,
})
export class TokenBrandedLzmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
