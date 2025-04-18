import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenSofiIcon],svg[token-sofi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 3l-9 9l9 9l9-9zm2.035 3.77L12.04 4.78l-7.23 7.23l4.4 4.4l4.01-4.005l.76.76l-4.01 4.005l2.02 2.02l7.23-7.23l-4.4-4.4l-4.035 4.03l-.785-.785z" clip-rule="evenodd"></svg:path>`,
})
export class TokenSofiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
