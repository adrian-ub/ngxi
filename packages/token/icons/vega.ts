import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenVegaIcon],svg[token-vega-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3h2.4v13.2H4.5zm4.8 15.6H6.9v-2.4h2.4zm2.4 0V21H9.3v-2.4zm0 0v-2.4h2.4v2.4zm3-15.6h2.4v10.8h-2.4zm2.4 10.8h2.4v2.4h-2.4z"></svg:path>`,
})
export class TokenVegaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
