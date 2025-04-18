import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsReceiptRefund20SolidIcon],svg[heroicons-receipt-refund-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.93 2.31a41.4 41.4 0 0 1 10.14 0A2.213 2.213 0 0 1 17 4.517V17.25a.75.75 0 0 1-1.075.676l-2.8-1.344l-2.8 1.344a.75.75 0 0 1-.65 0l-2.8-1.344l-2.8 1.344A.75.75 0 0 1 3 17.25V4.517c0-1.103.806-2.068 1.93-2.207m4.822 3.997a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 0 0 1.004-1.114L8.704 8.75h1.921a1.875 1.875 0 0 1 0 3.75a.75.75 0 0 0 0 1.5a3.375 3.375 0 1 0 0-6.75h-1.92z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsReceiptRefund20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
