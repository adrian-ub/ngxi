import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTableMoveColumnBeforeLtrIcon],svg[ooui-table-move-column-before-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 10l5-4v3h5v2H9v3z"></svg:path><svg:path fill="currentColor" d="M0 2v16h20V2zm2 2h8v4h5v4h-5v4H2z"></svg:path>`,
})
export class OouiTableMoveColumnBeforeLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
