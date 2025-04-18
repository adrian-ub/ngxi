import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenRev3lIcon],svg[token-rev3l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.937 3.563L14.25 6.374H8.248c-.872 0-2.436.664-2.436 2.812c0 2.15 1.654 2.684 2.532 2.813h2.812l-4.219 8.437H3.281l3.094-6.187C5.25 13.867 3 12.872 3 9.187s3.375-5.624 5.062-5.624zM8.062 20.437l1.407-2.812h6.283c.872 0 2.435-.664 2.435-2.813S16.534 12.13 15.657 12h-3.094l4.5-8.437h3.656l-3.094 6.13c1.125.395 3.375 1.435 3.375 5.12s-2.813 5.624-5.063 5.624z"></svg:path>`,
})
export class TokenRev3lIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
