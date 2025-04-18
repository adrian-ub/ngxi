import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsWalletIcon],svg[bxs-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2m-2 9h-2v-4h2zM5 7a1.001 1.001 0 0 1 0-2h13v2z"></svg:path>`,
})
export class BxsWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
