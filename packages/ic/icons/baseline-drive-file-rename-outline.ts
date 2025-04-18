import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineDriveFileRenameOutlineIcon],svg[ic-baseline-drive-file-rename-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.41 5.8L17.2 4.59c-.78-.78-2.05-.78-2.83 0l-2.68 2.68L3 15.96V20h4.04l8.74-8.74l2.63-2.63c.79-.78.79-2.05 0-2.83M6.21 18H5v-1.21l8.66-8.66l1.21 1.21zM11 20l4-4h6v4z"></svg:path>`,
})
export class IcBaselineDriveFileRenameOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
