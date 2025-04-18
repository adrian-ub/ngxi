import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneDriveFileMoveRtlIcon],svg[ic-twotone-drive-file-move-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.17 8l-2-2H4v12h16V8zM16 14h-4v3l-4-4l4-4v3h4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20zm-8-1l-4-4l4-4v3h4v2h-4z"></svg:path>`,
})
export class IcTwotoneDriveFileMoveRtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
