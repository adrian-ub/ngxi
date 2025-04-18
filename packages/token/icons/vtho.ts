import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenVthoIcon],svg[token-vtho-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.499 12.947L11.349 3H16.5l-4.4 7.105h3.937L7.992 21l3.357-8.053z"></svg:path>`,
})
export class TokenVthoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
