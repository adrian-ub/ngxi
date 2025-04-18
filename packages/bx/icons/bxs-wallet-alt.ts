import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsWalletAltIcon],svg[bx-bxs-wallet-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M14 9h8v6h-8z" fill="currentColor"></svg:path><svg:path d="M20 3H5C3.346 3 2 4.346 2 6v12c0 1.654 1.346 3 3 3h15c1.103 0 2-.897 2-2v-2h-8c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h8V5c0-1.103-.897-2-2-2z" fill="currentColor"></svg:path>`,
})
export class BxBxsWalletAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
