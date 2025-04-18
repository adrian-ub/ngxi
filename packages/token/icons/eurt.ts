import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenEurtIcon],svg[token-eurt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17.4h10.2V21H4.8V3h13.8v3.6H9v3.6h9v3.6H9z"></svg:path>`,
})
export class TokenEurtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
