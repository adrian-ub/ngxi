import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenImoIcon],svg[token-imo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.588 21h-8.47V10.962L13.588 3zm2.647 0V8.538l2.647 2.768V21z"></svg:path>`,
})
export class TokenImoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
