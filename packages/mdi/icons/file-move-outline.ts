import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileMoveOutlineIcon],svg[mdi-file-move-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 .41.12.8.34 1.12c.07.11.16.21.25.29c.36.37.86.59 1.41.59h7.53c-.53-.58-.92-1.25-1.18-2H6V4h7v5h5v3c.7 0 1.37.12 2 .34V8zm4 21l5-4.5l-3-2.7l-2-1.8v3h-4v3h4z"></svg:path>`,
})
export class MdiFileMoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
