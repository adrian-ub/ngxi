import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedVaraIcon],svg[token-branded-vara-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00FFC4" fill-rule="evenodd" d="M12 3a9 9 0 1 1 0 18a9 9 0 0 1 0-18m.127 4.5l2.241 3.326V7.5h1.583v9.015h-2.374L7.5 7.5h1.584l5.284 7.84v-2.165L10.543 7.5z" clip-rule="evenodd"></svg:path>`,
})
export class TokenBrandedVaraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
