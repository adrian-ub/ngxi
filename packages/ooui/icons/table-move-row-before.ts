import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTableMoveRowBeforeIcon],svg[ooui-table-move-row-before-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9H6l4-5l4 5h-3v5H9z"></svg:path><svg:path fill="currentColor" d="M2 0h16v20H2zm2 2v8h4v5h4v-5h4V2z"></svg:path>`,
})
export class OouiTableMoveRowBeforeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
