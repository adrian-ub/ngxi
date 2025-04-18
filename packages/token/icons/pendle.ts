import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPendleIcon],svg[token-pendle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.406 15.65a4.93 4.93 0 0 0-2.897 1.362A8.96 8.96 0 0 1 3 12.022a9 9 0 0 1 4.406-7.74zm1.104 0a4.95 4.95 0 0 1 4.376 5.328A9 9 0 1 0 8.511 3.724z"></svg:path>`,
})
export class TokenPendleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
