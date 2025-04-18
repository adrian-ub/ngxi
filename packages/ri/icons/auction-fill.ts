import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAuctionFillIcon],svg[ri-auction-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.005 20.003v2h-12v-2zM14.59.689l7.778 7.778l-1.414 1.414l-1.061-.353l-2.475 2.475l5.657 5.657l-1.414 1.414l-5.657-5.657l-2.404 2.404l.283 1.132l-1.415 1.414l-7.778-7.778l1.414-1.415l1.132.283l6.293-6.293l-.353-1.06z"></svg:path>`,
})
export class RiAuctionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
