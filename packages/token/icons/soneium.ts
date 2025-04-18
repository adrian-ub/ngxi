import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenSoneiumIcon],svg[token-soneium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.153 16.867a4.99 4.99 0 0 1-4.69-1.32a4.845 4.845 0 0 1-.784-6.031a8.4 8.4 0 0 1 1.359-1.677c1.66-1.655 4.707-4.667 4.707-4.667A9 9 0 0 0 7.177 4.4a9.013 9.013 0 0 0-3.003 12.05a9 9 0 0 0 5.22 4.175z"></svg:path><svg:path fill="currentColor" d="M10.839 7.136a4.98 4.98 0 0 1 4.69 1.321c1.644 1.647 1.965 4.09.778 6.022a8.5 8.5 0 0 1-1.36 1.68c-1.66 1.652-4.707 4.666-4.707 4.666a9 9 0 0 0 6.578-1.221a9.01 9.01 0 0 0 3.005-12.062A9 9 0 0 0 14.59 3.37z"></svg:path>`,
})
export class TokenSoneiumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
