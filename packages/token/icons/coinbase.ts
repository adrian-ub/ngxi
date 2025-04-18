import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenCoinbaseIcon],svg[token-coinbase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 0 0-9-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9M8.838 12a3.163 3.163 0 0 0 3.164 3.164a3.16 3.16 0 0 0 3.115-2.637h3.188a6.328 6.328 0 1 1 0-1.054h-3.187a3.163 3.163 0 0 0-6.28.527" clip-rule="evenodd"></svg:path>`,
})
export class TokenCoinbaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
