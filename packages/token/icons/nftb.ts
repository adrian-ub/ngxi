import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenNftbIcon],svg[token-nftb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.4 19.8V21H6.6v-1.2zm0-16.8v15.6H6.6V3zm-1.2 1.2H7.8v13.2h8.4z"></svg:path>`,
})
export class TokenNftbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
