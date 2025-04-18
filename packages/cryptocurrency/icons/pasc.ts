import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyPascIcon],svg[cryptocurrency-pasc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m0-28C9.373 4 4 9.373 4 16s5.373 12 12 12s12-5.373 12-12A12 12 0 0 0 16 4m6 5.813a2.25 2.25 0 0 1 2.25 2.25v3.374a2.25 2.25 0 0 1-2.25 2.25h-2.786l-.18.844a.49.49 0 0 1-.454.375h-.563a.294.294 0 0 1-.295-.375l.18-.843h-1.313l-.18.843a.49.49 0 0 1-.454.375h-.563a.294.294 0 0 1-.295-.375l.18-.843H13.87L12.634 23.5h-3l2.192-10.313h3l-.478 2.25h5.777c.621 0 1.125-.503 1.125-1.124v-1.126c0-.62-.504-1.124-1.125-1.124H7.75l1.875-2.25h7.326l.179-.844a.49.49 0 0 1 .454-.375h.563a.294.294 0 0 1 .295.375l-.179.844h1.313l.179-.844a.49.49 0 0 1 .454-.375h.563a.294.294 0 0 1 .295.375l-.179.844z"></svg:path>`,
})
export class CryptocurrencyPascIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
