import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenTgtIcon],svg[token-tgt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.827 11.674L8.41 7.646L20.72 3zm4.421 4.033L3.281 21l9.546-9.326z"></svg:path>`,
})
export class TokenTgtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
