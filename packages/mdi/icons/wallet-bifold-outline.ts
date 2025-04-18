import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWalletBifoldOutlineIcon],svg[mdi-wallet-bifold-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 15.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M7 3h10a2 2 0 0 1 2 2v2a2 2 0 0 1 2 2v10c0 1.11-.89 2-2 2H7c-2.21 0-4-1.79-4-4V7c0-2.21 1.79-4 4-4m10 4V5H7c-1.1 0-2 .9-2 2v.54A4 4 0 0 1 7 7zM5 17a2 2 0 0 0 2 2h12V9H7c-1.1 0-2 .9-2 2z"></svg:path>`,
})
export class MdiWalletBifoldOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
