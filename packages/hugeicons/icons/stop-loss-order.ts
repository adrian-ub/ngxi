import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStopLossOrderIcon],svg[hugeicons-stop-loss-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m17.72 5.47l-3.403 3.4a3.751 3.751 0 0 0-5.196 5.196L5.94 17.25H3.25c-.41 0-.75.34-.75.75s.34.75.75.75h3c.2 0 .39-.08.53-.22l3.402-3.402a3.751 3.751 0 0 0 5.196-5.196l3.401-3.402c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0M10 12c0-1.24 1.01-2.25 2.25-2.25S14.5 10.76 14.5 12s-1.01 2.25-2.25 2.25S10 13.24 10 12m7.5.01c0 .41.34.75.75.75v.01c.41 0 .75-.34.75-.76a.749.749 0 1 0-1.5 0m3-.01c0 .41.34.75.75.75v.01c.41 0 .75-.34.75-.76a.749.749 0 1 0-1.5 0m-14.25.77c-.41 0-.75-.34-.75-.75s.34-.75.75-.75s.75.33.75.74c0 .42-.34.76-.75.76m-3-.01c-.41 0-.75-.34-.75-.75s.34-.75.75-.75s.75.33.75.75s-.34.76-.75.76zM11.5 12c0 .41.34.75.75.75v.01c.41 0 .75-.34.75-.76a.749.749 0 1 0-1.5 0" color="currentColor"></svg:path>`,
})
export class HugeiconsStopLossOrderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
