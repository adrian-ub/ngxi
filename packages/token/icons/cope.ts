import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenCopeIcon],svg[token-cope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12a1.8 1.8 0 1 1 3.6 0A1.8 1.8 0 0 1 3 12m7.2 0a1.8 1.8 0 1 1 3.6 0a1.8 1.8 0 0 1-3.6 0m9-1.8a1.8 1.8 0 1 0 0 3.599a1.8 1.8 0 0 0 0-3.599"></svg:path>`,
})
export class TokenCopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
