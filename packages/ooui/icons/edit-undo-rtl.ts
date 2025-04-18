import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiEditUndoRtlIcon],svg[ooui-edit-undo-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15.25V20h4.75l8.33-8.33l-5.27-4.23z"></svg:path><svg:path fill="currentColor" d="M13 2.86V0l5 4l-5 4V5h-.86c-2.28 0-4 1.43-4 4.29H6a6.51 6.51 0 0 1 6.14-6.43z"></svg:path>`,
})
export class OouiEditUndoRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
