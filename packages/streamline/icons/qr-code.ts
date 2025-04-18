import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineQrCodeIcon],svg[streamline-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 3H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M3 .5H1.5a1 1 0 0 0-1 1V3M11 .5h1.5a1 1 0 0 1 1 1V3M3 13.5H1.5a1 1 0 0 1-1-1V11M11 13.5h1.5a1 1 0 0 0 1-1V11M3 9.5V11h1.5M7 11V9.5H5.5m5.5-5H9.5V3M11 8V6.5H9.5m0 3V11H11"></svg:path>`,
})
export class StreamlineQrCodeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
