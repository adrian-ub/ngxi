import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineReceiptIcon],svg[streamline-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.202 4.722a1.33 1.33 0 0 0-1.258-.889H4.912a1.19 1.19 0 0 0-.254 2.353l1.571.344a1.334 1.334 0 0 1-.285 2.637h-.888a1.33 1.33 0 0 1-1.258-.89M5.5 3.833V2.5m0 8V9.167"></svg:path><svg:path d="M12 .5H2.5a2 2 0 0 0-2 2v11L3 12l2.5 1.5L8 12l2.5 1.5V2a1.5 1.5 0 1 1 3 0v3.5h-3"></svg:path></svg:g>`,
})
export class StreamlineReceiptIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
