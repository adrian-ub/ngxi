import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLptIcon],svg[token-lpt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.2 3H3.6v3.6h3.6zm0 7.2H3.6v3.6h3.6zm-3.6 7.2h3.6V21H3.6zm10.201-3.6h-3.6v3.601h3.6zm-3.6-7.2h3.6v3.6h-3.6zm10.2 3.6h-3.6v3.6h3.6z"></svg:path>`,
})
export class TokenLptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
