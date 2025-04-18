import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenNrgIcon],svg[token-nrg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.4 8.383L12 13.918L10.043 12l3.397-3.476L12 7.005l-5.288 5.158L12 17.3l7.2-7.099L21 12l-9 9l-9-9l9-9z"></svg:path>`,
})
export class TokenNrgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
