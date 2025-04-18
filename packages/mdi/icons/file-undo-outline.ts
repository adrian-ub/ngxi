import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileUndoOutlineIcon],svg[mdi-file-undo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-1-2.39l-1.16.39a3.91 3.91 0 0 0-3.71-2.69c-.96 0-1.82.35-2.5.92L11.4 18H7v-4.4l1.76 1.76c.9-.79 2.07-1.27 3.37-1.27c2.27 0 4.2 1.48 4.87 3.52"></svg:path>`,
})
export class MdiFileUndoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
