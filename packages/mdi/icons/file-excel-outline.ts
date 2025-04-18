import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileExcelOutlineIcon],svg[mdi-file-excel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-5.1-5.5l2.9 4.5H14l-2-3.4l-2 3.4H8.2l2.9-4.5L8.2 10H10l2 3.4l2-3.4h1.8z"></svg:path>`,
})
export class MdiFileExcelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
