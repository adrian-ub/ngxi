import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiDataTransferDownloadIcon],svg[oi-data-transfer-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v3H1l3 3l3-3H5V0zM0 7v1h8V7z"></svg:path>`,
})
export class OiDataTransferDownloadIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
