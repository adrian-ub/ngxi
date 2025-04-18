import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDriveFileMoveRtlIcon],svg[ic-sharp-drive-file-move-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6H12l-2-2H2v16h20zM12 17l-4-4l4-4v3h4v2h-4z"></svg:path>`,
})
export class IcSharpDriveFileMoveRtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
