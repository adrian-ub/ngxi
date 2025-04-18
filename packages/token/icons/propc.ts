import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPropcIcon],svg[token-propc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h11.893a6.107 6.107 0 0 1 0 12.214H8.786V8.786H3zm5.786 12.214V21H3v-5.786z"></svg:path>`,
})
export class TokenPropcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
