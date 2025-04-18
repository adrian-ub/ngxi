import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBarcodeScanner24FilledIcon],svg[fluent-barcode-scanner-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6a3 3 0 0 1 3-3h1.5a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v1.5a1 1 0 0 1-2 0zm14.5-2a1 1 0 0 1 1-1H19a3 3 0 0 1 3 3v1.5a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-1.5a1 1 0 0 1-1-1M3 15.5a1 1 0 0 1 1 1V18a1 1 0 0 0 1 1h1.5a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-1.5a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1V18a3 3 0 0 1-3 3h-1.5a1 1 0 1 1 0-2H19a1 1 0 0 0 1-1v-1.5a1 1 0 0 1 1-1M6 6.75a1 1 0 0 1 1 1v8.5a1 1 0 1 1-2 0v-8.5a1 1 0 0 1 1-1m5 1a1 1 0 1 0-2 0v8.5a1 1 0 1 0 2 0zm3-1a1 1 0 0 1 1 1v8.5a1 1 0 1 1-2 0v-8.5a1 1 0 0 1 1-1m5 1a1 1 0 1 0-2 0v8.5a1 1 0 1 0 2 0z"></svg:path>`,
})
export class FluentBarcodeScanner24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
