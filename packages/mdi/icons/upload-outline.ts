import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUploadOutlineIcon],svg[mdi-upload-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10v6h6v-6h4l-7-7l-7 7zm3-4.2L14.2 8H13v6h-2V8H9.8zM19 18H5v2h14z"></svg:path>`,
})
export class MdiUploadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
