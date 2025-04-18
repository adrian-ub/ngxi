import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAlphaIcon],svg[token-alpha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2v7.481l1.375 3.375L12 11.713v3.593l.043.044A26.8 26.8 0 0 0 20.126 22zm0 0v7.481l-1.375 3.375L12 11.713v3.593l-.044.044A26.8 26.8 0 0 1 3.875 22z"></svg:path><svg:path fill="currentColor" d="M12 20.125a1.875 1.875 0 1 0 0-3.75a1.875 1.875 0 0 0 0 3.75"></svg:path>`,
})
export class TokenAlphaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
