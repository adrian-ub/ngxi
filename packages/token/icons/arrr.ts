import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenArrrIcon],svg[token-arrr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.321 6.857A3.857 3.857 0 0 1 7.18 3h9.642c.913 0 1.749.321 2.411.849l-4.596 2.365H8.464A1.286 1.286 0 0 0 7.18 7.5v2.559l-3.86 1.993zm0 9.084V21h2.25a1.61 1.61 0 0 0 1.608-1.607V16.5h9.642a3.86 3.86 0 0 0 3.857-3.857v-5.65l-3.857 1.992V12a1.286 1.286 0 0 1-1.285 1.286H8.47z"></svg:path>`,
})
export class TokenArrrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
