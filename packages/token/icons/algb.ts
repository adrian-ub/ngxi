import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAlgbIcon],svg[token-algb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.735 3.529V14.91L3 19.941zm.53 0V14.91L21 19.941zM12 15.442l-8.736 5.03h17.47z"></svg:path>`,
})
export class TokenAlgbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
