import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPrinterBoldIcon],svg[ph-printer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214.67 68H204V40a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v28H41.33C25.16 68 12 80.56 12 96v80a12 12 0 0 0 12 12h28v28a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-28h28a12 12 0 0 0 12-12V96c0-15.44-13.16-28-29.33-28M76 52h104v16H76Zm104 152H76v-32h104Zm40-40h-16v-4a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v4H36V96c0-2.17 2.44-4 5.33-4h173.34c2.89 0 5.33 1.83 5.33 4Zm-16-44a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhPrinterBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
