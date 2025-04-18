import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUploadOffIcon],svg[mdi-upload-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l5.45 5.45L5 10h3.11l.89.89V16h5.11l2 2H5v2h13.11l2.73 2.73zM15 10h4l-7-7l-2.9 2.9l5.9 5.9z"></svg:path>`,
})
export class MdiUploadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
