import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineStockIcon],svg[streamline-stock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.25 1.81V.5M11 5.31c0 .66.53.88 1.25.88s1.25 0 1.25-.88C13.5 4 11 4 11 2.69c0-.88.53-.88 1.25-.88s1.25.33 1.25.88m-1.25 3.5V7.5m-9.75-4h-1a1 1 0 0 0-1 1V9a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V4.5a1 1 0 0 0-1-1M2 10v1.5m0-8v-3m6 7H7a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8.5a1 1 0 0 0-1-1M7.5 11v2.5m0-6V4"></svg:path>`,
})
export class StreamlineStockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
