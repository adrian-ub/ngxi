import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenTonicIcon],svg[token-tonic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.6 3h10.8v4.8H3.6zm12 0h4.8v4.8h-4.8zm-1.2 6H9.6v12h4.8z"></svg:path>`,
})
export class TokenTonicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
