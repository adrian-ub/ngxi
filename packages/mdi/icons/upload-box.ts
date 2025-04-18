import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUploadBoxIcon],svg[mdi-upload-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m11 14v-2H8v2zm0-6l-4-4l-4 4h2.5v3h3v-3z"></svg:path>`,
})
export class MdiUploadBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
