import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWalletThinIcon],svg[ph-wallet-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68H56a12 12 0 0 1 0-24h136a4 4 0 0 0 0-8H56a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h160a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H56a12 12 0 0 1-12-12V72a19.86 19.86 0 0 0 12 4h160a4 4 0 0 1 4 4Zm-32-60a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhWalletThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
