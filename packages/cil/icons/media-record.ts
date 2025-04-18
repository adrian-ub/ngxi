import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilMediaRecordIcon],svg[cil-media-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 72C154.542 72 72 154.542 72 256s82.542 184 184 184s184-82.542 184-184S357.458 72 256 72m0 336c-83.813 0-152-68.187-152-152s68.187-152 152-152s152 68.187 152 152s-68.187 152-152 152"></svg:path>`,
})
export class CilMediaRecordIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
