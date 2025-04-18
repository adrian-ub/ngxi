import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMblIcon],svg[token-branded-mbl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#5B449B"><svg:path d="M3 19.875V4.125l10.125 1.997l-4.5.815l-3.938-.815V17.85l3.938-.788l4.5.788z"></svg:path><svg:path d="M21 5.813L8.625 8.18v7.74L21 18.187z"></svg:path></svg:g>`,
})
export class TokenBrandedMblIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
