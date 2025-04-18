import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBarcodeIcon],svg[memory-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17H2V5h2m2 12H5V5h1m4 12H7V5h3m2 12h-1V5h1m3 12h-2V5h2m2 12h-1V5h1m3 12h-2V5h2Z"></svg:path>`,
})
export class MemoryBarcodeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
