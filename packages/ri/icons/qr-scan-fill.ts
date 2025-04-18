import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riQrScanFillIcon],svg[ri-qr-scan-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15v5.007a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007V15zM2 11h20v2H2zm19-2H3V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993z"></svg:path>`,
})
export class RiQrScanFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
