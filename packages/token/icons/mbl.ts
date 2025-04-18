import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMblIcon],svg[token-mbl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19.875V4.125l10.125 1.997l-4.5.816l-3.938-.816V17.85l3.938-.788l4.5.788z"></svg:path><svg:path fill="currentColor" d="M21 5.813L8.625 8.18v7.74L21 18.188z"></svg:path>`,
})
export class TokenMblIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
