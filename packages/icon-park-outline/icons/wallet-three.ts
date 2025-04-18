import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWalletThreeIcon],svg[icon-park-outline-wallet-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M39 16V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h27a3 3 0 0 0 3-3v-7"></svg:path><svg:rect width="20" height="16" x="22" y="16" stroke="currentColor" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:circle r="2" fill="currentColor" transform="matrix(0 -1 -1 0 30 24)"></svg:circle></svg:g>`,
})
export class IconParkOutlineWalletThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
