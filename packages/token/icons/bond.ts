import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBondIcon],svg[token-bond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.5 17.476l-3.015 2.15A8.97 8.97 0 0 1 3 13.481v-.11a9 9 0 0 1 18 .005v.1a8.97 8.97 0 0 1-2.46 6.135l-3.04-2.155v-4.555l1.11-.82l-4.58-3.465l-4.58 3.465l1.05.82zm3.5-5.555h.075c1.36 0 2.5 1.005 2.42 2.28v2.55l-2.5-1.75L9.5 16.776v-2.575c0-1.28 1.135-2.28 2.5-2.28"></svg:path>`,
})
export class TokenBondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
