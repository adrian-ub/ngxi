import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneDriveFileMoveIcon],svg[ic-twotone-drive-file-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l1.41 1.41l.59.59H20z"></svg:path><svg:path fill="currentColor" d="M8 14h4v3l4-4l-4-4v3H8z"></svg:path><svg:path fill="currentColor" d="M10.59 7.41L9.17 6H4v12h16V8h-8.83zM12 9l4 4l-4 4v-3H8v-2h4z" opacity=".3"></svg:path>`,
})
export class IcTwotoneDriveFileMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
