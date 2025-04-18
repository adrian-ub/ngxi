import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenEverIcon],svg[token-ever-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.852 3L3 9.828h11.172V21L21 14.172V3z"></svg:path>`,
})
export class TokenEverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
