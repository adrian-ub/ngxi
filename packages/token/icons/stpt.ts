import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenStptIcon],svg[token-stpt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.313 3H12l-7.312 9H12zm0 9H12l-7.312 9H12z"></svg:path>`,
})
export class TokenStptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
