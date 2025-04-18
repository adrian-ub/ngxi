import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenRuneIcon],svg[token-rune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.125 21l12.612-5.292l-3.99-4.033zM8.757 7.647l3.99 4.028L19.876 3z"></svg:path>`,
})
export class TokenRuneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
