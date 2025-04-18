import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpInsertDriveFileIcon],svg[ic-sharp-insert-drive-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.01 2L4 22h16V8l-6-6zM13 9V3.5L18.5 9z"></svg:path>`,
})
export class IcSharpInsertDriveFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
