import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPrxIcon],svg[token-prx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.714 8.082L4.39 3.098l6.71 9.432z"></svg:path><svg:path fill="currentColor" d="M7.474 14.854L4.286 21l8.948-5.945L4.286 3z"></svg:path>`,
})
export class TokenPrxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
