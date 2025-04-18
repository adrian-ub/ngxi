import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiDataTransferUploadIcon],svg[oi-data-transfer-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v1h8V0zm4 2L1 5h2v3h2V5h2z"></svg:path>`,
})
export class OiDataTransferUploadIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
