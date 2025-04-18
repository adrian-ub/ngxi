import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenDydxIcon],svg[token-dydx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.146 3L3.643 21h3.838L20.048 3zm-8.26 0l3.677 5.303l-1.922 2.893L3.965 3zm8.634 18l-4.082-5.87l1.922-2.808L20.357 21z"></svg:path>`,
})
export class TokenDydxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
