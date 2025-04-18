import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMintIcon],svg[token-mint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a9 9 0 0 1 9 9a9 9 0 0 1-9-9m18 18a9 9 0 0 1-9-9a9 9 0 0 1 9 9m-9-9a4.5 4.5 0 0 1 4.5-4.5A4.5 4.5 0 0 1 12 12m0 0a4.5 4.5 0 0 1-4.5 4.5A4.5 4.5 0 0 1 12 12"></svg:path>`,
})
export class TokenMintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
