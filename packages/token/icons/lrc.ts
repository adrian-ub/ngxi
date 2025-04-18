import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLrcIcon],svg[token-lrc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.992 5.116v13.767L3 13.993zm.001 13.767l5.654-4.889l-1.644-2.582H21z"></svg:path>`,
})
export class TokenLrcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
