import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTableMoveColumnAfterLtrIcon],svg[ooui-table-move-column-after-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 10l-5-4v3H6v2h5v3z"></svg:path><svg:path fill="currentColor" d="M0 2h20v16H0zm5 6v4h5v4h8V4h-8v4z"></svg:path>`,
})
export class OouiTableMoveColumnAfterLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
