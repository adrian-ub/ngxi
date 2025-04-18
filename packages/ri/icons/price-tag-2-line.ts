import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPriceTag2LineIcon],svg[ri-price-tag-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.005 7l8.445-5.63a1 1 0 0 1 1.11 0L21.005 7v14a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1zm2 1.07V20h14V8.07l-7-4.667zm3 7.93h8v2h-8zm0-3h8v2h-8zm4-2a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiPriceTag2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
