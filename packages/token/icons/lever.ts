import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLeverIcon],svg[token-lever-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.056 4.125L3 19.875h6.997l8.831-15.75z"></svg:path><svg:path fill="currentColor" d="M18.823 4.125L3 19.875h6.997l8.831-15.75zm-6.672 15.75H21L16.584 12z"></svg:path><svg:path fill="currentColor" d="M17.513 19.875H21L16.584 12z"></svg:path>`,
})
export class TokenLeverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
