import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneDriveFolderUploadIcon],svg[ic-twotone-drive-folder-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.17 6H4v12h16V8h-8.83zM16 13h-3v4h-2v-4H8l4.01-4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20z"></svg:path><svg:path fill="currentColor" d="M11 13v4h2v-4h3l-3.99-4L8 13z"></svg:path>`,
})
export class IcTwotoneDriveFolderUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
