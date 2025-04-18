import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenSiloIcon],svg[token-silo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.687 10.313V3H9.373A5.23 5.23 0 0 0 5.66 4.552a5.316 5.316 0 0 0 0 7.482a5.33 5.33 0 0 0 3.713 1.653h.94v-3.374zm.94 0h-.94v3.374h-3.374V21h4.314c1.39 0 2.728-.562 3.713-1.552a5.316 5.316 0 0 0 0-7.482a5.33 5.33 0 0 0-3.713-1.653"></svg:path>`,
})
export class TokenSiloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
