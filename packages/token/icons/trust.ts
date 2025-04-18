import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenTrustIcon],svg[token-trust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.9 5.6L12 3v18c-5.786-2.4-8.1-7-8.1-9.6zm16.2 0L12 3v18c5.786-2.4 8.1-7 8.1-9.6z"></svg:path>`,
})
export class TokenTrustIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
