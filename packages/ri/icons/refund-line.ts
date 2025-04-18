import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRefundLineIcon],svg[ri-refund-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.005 8V5h-16v3zm0 2h-16v9h16zm-17-7h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 11h6v2h-10.5l4.5-4.5z"></svg:path>`,
})
export class RiRefundLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
