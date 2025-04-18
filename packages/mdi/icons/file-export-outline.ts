import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileExportOutlineIcon],svg[mdi-file-export-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zm-2-9v7.1L13.9 16l-2.8 2.8L8.3 16l2.8-2.8L8.9 11z"></svg:path>`,
})
export class MdiFileExportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
