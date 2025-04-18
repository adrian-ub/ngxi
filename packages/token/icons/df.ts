import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenDfIcon],svg[token-df-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.3 6.6h7.8a5.4 5.4 0 0 1 0 10.8h-.6v-1.986h.258c2.178 0 3.942-1.584 3.942-3.51c0-1.92-1.764-3.504-3.942-3.504H5.1v10.2H3.3z"></svg:path><svg:path fill="currentColor" d="M6.3 3h5.4a9 9 0 0 1 0 18H6.9V10.2h1.8v9h3a7.2 7.2 0 0 0 0-14.4H6.3z"></svg:path>`,
})
export class TokenDfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
