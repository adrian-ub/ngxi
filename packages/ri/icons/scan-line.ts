import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riScanLineIcon],svg[ri-scan-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.671 4.257L13.414 12L12 13.414l-6.32-6.32a8 8 0 1 0 3.706-2.658L7.85 2.9A10 10 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.98 9.98 0 0 1 3.671-7.743"></svg:path>`,
})
export class RiScanLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
