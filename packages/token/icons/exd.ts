import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenExdIcon],svg[token-exd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.4 3h4.8v18H5.4zm13.2 0h-7.8l7.8 7.2zm0 18v-7.2L10.8 21z"></svg:path>`,
})
export class TokenExdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
