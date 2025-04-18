import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderTransferFillIcon],svg[ri-folder-transfer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM12 12H8v2h4v3l4-4l-4-4z"></svg:path>`,
})
export class RiFolderTransferFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
