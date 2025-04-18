import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLedgerIcon],svg[token-ledger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15.5v4.6h6.77v-1.02H3.987V15.5zm17.014 0v3.58h-5.785v1.02H21v-4.6zM9.78 8.5v7h4.45v-.92h-3.463V8.5zM3 3.9v4.6h.986V4.92h5.785V3.9zm11.23 0v1.02h5.784V8.5H21V3.9z"></svg:path>`,
})
export class TokenLedgerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
