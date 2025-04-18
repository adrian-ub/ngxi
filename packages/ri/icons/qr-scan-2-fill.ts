import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riQrScan2FillIcon],svg[ri-qr-scan-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h6v6h-6zM9 3v6H3V3zm6 18v-6h6v6zm-6 0H3v-6h6zM3 11h18v2H3z"></svg:path>`,
})
export class RiQrScan2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
