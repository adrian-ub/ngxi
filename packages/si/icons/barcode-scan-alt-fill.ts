import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siBarcodeScanAltFillIcon],svg[si-barcode-scan-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#siBarcodeScanAltFill0)"><svg:path d="M3.4 2A1.4 1.4 0 0 0 2 3.4V5a1 1 0 0 1-2 0V3.4A3.4 3.4 0 0 1 3.4 0H5a1 1 0 0 1 0 2zM18 1a1 1 0 0 1 1-1h1.6A3.4 3.4 0 0 1 24 3.4V5a1 1 0 1 1-2 0V3.4A1.4 1.4 0 0 0 20.6 2H19a1 1 0 0 1-1-1M1 18a1 1 0 0 1 1 1v1.6A1.4 1.4 0 0 0 3.4 22H5a1 1 0 1 1 0 2H3.4A3.4 3.4 0 0 1 0 20.6V19a1 1 0 0 1 1-1m22 0a1 1 0 0 1 1 1v1.6a3.4 3.4 0 0 1-3.4 3.4H19a1 1 0 1 1 0-2h1.6a1.4 1.4 0 0 0 1.4-1.4V19a1 1 0 0 1 1-1M9.4 5H6.6A1.6 1.6 0 0 0 5 6.6v2.8A1.6 1.6 0 0 0 6.6 11h2.8A1.6 1.6 0 0 0 11 9.4V6.6A1.6 1.6 0 0 0 9.4 5m-2.8 8h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8A1.6 1.6 0 0 1 9.4 19H6.6A1.6 1.6 0 0 1 5 17.4v-2.8A1.6 1.6 0 0 1 6.6 13m10.8-8h-2.8A1.6 1.6 0 0 0 13 6.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8A1.6 1.6 0 0 0 19 9.4V6.6A1.6 1.6 0 0 0 17.4 5m-2.8 8h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8a1.6 1.6 0 0 1-1.6-1.6v-2.8a1.6 1.6 0 0 1 1.6-1.6"></svg:path></svg:g><svg:defs><svg:clippath id="siBarcodeScanAltFill0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiBarcodeScanAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
