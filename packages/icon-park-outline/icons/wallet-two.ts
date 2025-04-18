import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWalletTwoIcon],svg[icon-park-outline-wallet-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 8h40v8s-10 2-10 8s10 8 10 8v8H4z"></svg:path><svg:path stroke-linecap="round" d="M44 24h-2"></svg:path></svg:g>`,
})
export class IconParkOutlineWalletTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
