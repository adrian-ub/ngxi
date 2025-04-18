import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWalletBifoldIcon],svg[mdi-wallet-bifold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3H7C4.79 3 3 4.79 3 7v10c0 2.21 1.79 4 4 4h12c1.11 0 2-.89 2-2V9a2 2 0 0 0-2-2V5a2 2 0 0 0-2-2m0 2v2H7c-.73 0-1.41.2-2 .54V7c0-1.1.9-2 2-2m8.5 10.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class MdiWalletBifoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
