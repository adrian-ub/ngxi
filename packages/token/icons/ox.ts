import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenOxIcon],svg[token-ox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.194 12.005a6.187 6.187 0 0 1-8.747 5.636a1.1 1.1 0 0 0-.528-.112c-1.277.084-2.42.607-3.089 1.024a9 9 0 1 0-.562-.58a3.43 3.43 0 0 0 1.21-3.026a1.1 1.1 0 0 0-.102-.371a6.188 6.188 0 1 1 11.818-2.57"></svg:path>`,
})
export class TokenOxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
