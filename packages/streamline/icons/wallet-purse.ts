import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWalletPurseIcon],svg[streamline-wallet-purse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 12a6.5 6.5 0 1 0-13 0A1.5 1.5 0 0 0 2 13.5h10a1.5 1.5 0 0 0 1.5-1.5M9 1a2 2 0 1 1-4 0"></svg:path><svg:path d="M.64 5.64a9 9 0 0 1 12.72 0"></svg:path></svg:g>`,
})
export class StreamlineWalletPurseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
