import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBuilding04Icon],svg[hugeicons-building-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 2v12c0 3.31-.69 4-4 4H3m2-6h6m6.5 4h1m-1 3h1"></svg:path><svg:path d="M14 5v17H4.279c-1.241 0-1.862 0-2.148-.425c-.286-.426-.075-1.035.347-2.254L7.782 3.98c.331-.957.497-1.436.868-1.709C9.022 2 9.51 2 10.484 2h.643c1.354 0 2.032 0 2.452.44C14 2.878 14 3.585 14 5m0 5l3.79 1.184c2.03.635 3.044.952 3.627 1.745S22 14.785 22 16.91V20c0 .943 0 1.414-.293 1.707S20.943 22 20 22h-6"></svg:path></svg:g>`,
})
export class HugeiconsBuilding04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
