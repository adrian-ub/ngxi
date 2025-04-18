import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLtxIcon],svg[token-ltx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 3L12 9.75l-2.13 2.365L5.25 7.5z"></svg:path><svg:path fill="currentColor" d="M18.75 3v4.5L5.25 20.979v-4.48z"></svg:path><svg:path fill="currentColor" d="M18.75 16.5V21L12 14.25v-4.5z"></svg:path>`,
})
export class TokenLtxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
