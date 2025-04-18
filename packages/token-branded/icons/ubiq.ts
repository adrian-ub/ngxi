import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedUbiqIcon],svg[token-branded-ubiq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#0CA579" d="m4.35 14.976l5.298 3.272v-7.427z"></svg:path><svg:path fill="#00EA90" d="M12.514 3v7.15L4.35 14.976V7.715z"></svg:path><svg:path fill="#333" d="m19.65 9.024l-5.298-3.272v7.427z"></svg:path><svg:path fill="#494949" d="M11.486 21v-7.15l8.164-4.826v7.261z"></svg:path></svg:g>`,
})
export class TokenBrandedUbiqIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
