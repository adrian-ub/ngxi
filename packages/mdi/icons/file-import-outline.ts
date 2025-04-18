import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileImportOutlineIcon],svg[mdi-file-import-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-3-8.07V19H7.93l2.12-2.12l-2.83-2.83l2.83-2.83l2.83 2.83z"></svg:path>`,
})
export class MdiFileImportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
