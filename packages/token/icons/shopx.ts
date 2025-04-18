import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenShopxIcon],svg[token-shopx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.986 11.615a6.745 6.745 0 0 1-8.6-8.6c-.135-.012-.259-.012-.388-.012a8.994 8.994 0 0 0-8.69 11.327a4.53 4.53 0 0 1 6.104 6.284a8.994 8.994 0 0 0 11.58-8.993z"></svg:path>`,
})
export class TokenShopxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
