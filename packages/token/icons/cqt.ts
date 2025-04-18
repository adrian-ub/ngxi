import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenCqtIcon],svg[token-cqt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.844 3a9 9 0 0 0 0 18v-3.937a5.062 5.062 0 0 1 0-10.125zm0 14.063a5.063 5.063 0 0 0 0-10.125m5.062.562a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0 13.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"></svg:path>`,
})
export class TokenCqtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
