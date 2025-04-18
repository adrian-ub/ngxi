import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDescendingNumberOrderIcon],svg[streamline-descending-number-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.167 8.5v5M9.5 9.75h.417c.69 0 1.25-.56 1.25-1.25v0m1.667 5H9.5m.922-10.156h.656a1.422 1.422 0 0 0 0-2.844h-.656a1.422 1.422 0 0 0 0 2.844"></svg:path><svg:path d="M12.5 1.813v2.625c0 .725-.588 1.312-1.312 1.312h-.875a1.31 1.31 0 0 1-1.238-.875M6 11l-2.5 2.5L1 11M3.5.5v13"></svg:path></svg:g>`,
})
export class StreamlineDescendingNumberOrderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
