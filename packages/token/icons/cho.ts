import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenChoIcon],svg[token-cho-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0M7.235 12c0-1.324 1.06-3.706 4.765-3.706c3.706 0 4.765 2.382 4.765 3.706S15.616 15.706 12 15.706c-3.796 0-4.765-2.383-4.765-3.706" clip-rule="evenodd"></svg:path>`,
})
export class TokenChoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
