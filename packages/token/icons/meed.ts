import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMeedIcon],svg[token-meed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.182 16.636H4.909V3h3.818l3 8.727L15.273 3h3.818v18h-3.273V9l-3 7.636h-2.182L8.182 9z"></svg:path>`,
})
export class TokenMeedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
