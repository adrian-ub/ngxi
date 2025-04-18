import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLbrIcon],svg[token-lbr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.6 18h6.402l-4.284-4.83L12 5.388l6.378 7.782L13.95 18h6.45v-1.8h-2.574l2.574-3.03L12 3L3.6 13.17l2.664 3.03H3.6zm16.8 1.2H3.6V21h16.8z"></svg:path>`,
})
export class TokenLbrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
