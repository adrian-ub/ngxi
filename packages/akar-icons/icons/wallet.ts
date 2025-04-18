import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsWalletIcon],svg[akar-icons-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm0 2h20"></svg:path><svg:path d="M2 12h7c0 1 .6 3 3 3s3-2 3-3h7"></svg:path></svg:g>`,
})
export class AkarIconsWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
