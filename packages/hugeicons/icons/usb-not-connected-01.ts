import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUsbNotConnected01Icon],svg[hugeicons-usb-not-connected-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 6v-.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C12.607 2 11.904 2 10.5 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C7 3.393 7 4.096 7 5.5V6"></svg:path><svg:path d="M11 16.5H9.516a3.08 3.08 0 0 1-2.547-1.338l-.601-.885a9.9 9.9 0 0 1-1.68-4.785l-.184-2.379C4.437 6.243 5.14 5.5 6.03 5.5h8.94c.89 0 1.593.743 1.525 1.613L16.389 8.5M10.5 17v5m-1-13.5h2m8 2.5l-6 6m6 0l-6-6"></svg:path></svg:g>`,
})
export class HugeiconsUsbNotConnected01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
