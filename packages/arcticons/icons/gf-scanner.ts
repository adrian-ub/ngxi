import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGfScannerIcon],svg[arcticons-gf-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.12 24h5.122m-5.122 7.88V16.12H35m-11.559 5.22a5.22 5.22 0 0 0-5.22-5.22h0A5.22 5.22 0 0 0 13 21.34v5.32a5.22 5.22 0 0 0 5.22 5.22h0a5.22 5.22 0 0 0 5.221-5.22h-5.22"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.707 37.52A21.4 21.4 0 0 0 45.5 24c0-11.874-9.626-21.5-21.5-21.5S2.5 12.126 2.5 24S12.126 45.5 24 45.5a21.4 21.4 0 0 0 13.943-5.153l4.883 2.044z"></svg:path>`,
})
export class ArcticonsGfScannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
