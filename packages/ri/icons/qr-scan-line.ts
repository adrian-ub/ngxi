import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riQrScanLineIcon],svg[ri-qr-scan-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16v5H3v-5h2v3h14v-3zM3 11h18v2H3zm18-3h-2V5H5v3H3V3h18z"></svg:path>`,
})
export class RiQrScanLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
