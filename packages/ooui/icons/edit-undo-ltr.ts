import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiEditUndoLtrIcon],svg[ooui-edit-undo-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 14.25V19h4.75l8.33-8.33l-5.27-4.23zM13 2.86V0L8 4l5 4V5h.86c2.29 0 4 1.43 4 4.29H20a6.51 6.51 0 0 0-6.14-6.43z"></svg:path>`,
})
export class OouiEditUndoLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
