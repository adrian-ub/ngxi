import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUploadMultipleOutlineIcon],svg[mdi-upload-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8h-4v6H9V8H5l7-7zm-4.83-2L12 3.83L9.83 6H11v6h2V6zM5 16v2h14v-2zm14 4v2H5v-2z"></svg:path>`,
})
export class MdiUploadMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
