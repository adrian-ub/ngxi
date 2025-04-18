import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMarketplaceOutlineIcon],svg[lsicon-marketplace-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M3 7.5h2.5m0 0V6m0 1.5H8m0 0V6m0 1.5h2.5m0 0V6m0 1.5H13m-6.5 2h1m1 0h1m-1 1.5h1m-3 0h1m-4 2.5v-6h-1v-2l1.5-3h8l1.5 3v2h-1v6z"></svg:path>`,
})
export class LsiconMarketplaceOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
