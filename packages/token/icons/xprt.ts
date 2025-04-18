import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenXprtIcon],svg[token-xprt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.375 6.375V21H9.75v-5.063h3.066c2.655 0 4.809-2.137 4.809-4.78c0-2.645-2.154-4.782-4.81-4.782zm3.375 6.643h2.38a1.87 1.87 0 0 0 1.872-1.862c0-1.03-.838-1.862-1.873-1.862H9.75z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.375 3h11.25v2.25H6.375z"></svg:path>`,
})
export class TokenXprtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
