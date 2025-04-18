import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenDelIcon],svg[token-del-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.2 3H4.8v3.6H15v10.8H4.8V21h14.4zm-7.8 7.2H4.8v3.6h6.6z"></svg:path>`,
})
export class TokenDelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
