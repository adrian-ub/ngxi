import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoneyCashierQrCodeCodesTagsCodeQrIcon],svg[streamline-money-cashier-qr-code-codes-tags-code-qr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="4" height="4" x="3" y="3" rx="1"></svg:rect><svg:path d="M3 .5H1.5a1 1 0 0 0-1 1V3M11 .5h1.5a1 1 0 0 1 1 1V3M3 13.5H1.5a1 1 0 0 1-1-1V11M11 13.5h1.5a1 1 0 0 0 1-1V11M3 9.5V11h1.5M7 11V9.5H5.5m5.5-5H9.5V3M11 8V6.5H9.5m0 3V11H11"></svg:path></svg:g>`,
})
export class StreamlineMoneyCashierQrCodeCodesTagsCodeQrIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
