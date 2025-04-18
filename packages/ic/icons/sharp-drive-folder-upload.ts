import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDriveFolderUploadIcon],svg[ic-sharp-drive-folder-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6H12l-2-2H2v16h20zm-9 7v4h-2v-4H8l4.01-4L16 13z"></svg:path>`,
})
export class IcSharpDriveFolderUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
