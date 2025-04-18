import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDriveFileRenameOutlineIcon],svg[ic-sharp-drive-file-rename-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 16l-4 4h10v-4zm-2.94-8.81L3 16.25V20h3.75l9.06-9.06zm1.072-1.067l2.539-2.539l3.747 3.748L16.88 9.87z"></svg:path>`,
})
export class IcSharpDriveFileRenameOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
