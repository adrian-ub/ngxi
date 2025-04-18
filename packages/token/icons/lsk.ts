import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLskIcon],svg[token-lsk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.47 5.62L11.942 3l7.379 12.961L15.066 21h-3.403l4.369-5.37c-1.864-3.33-3.738-6.657-5.562-10.01"></svg:path><svg:path fill="currentColor" d="M10.115 18.18h2.547L10.343 21H8.921l-4.242-5.013L9.9 6.65l1.574 2.685l-3.53 6.308z"></svg:path>`,
})
export class TokenLskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
