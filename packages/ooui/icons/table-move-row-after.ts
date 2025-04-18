import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTableMoveRowAfterIcon],svg[ooui-table-move-row-after-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 16l-4-5h3V6h2v5h3z"></svg:path><svg:path fill="currentColor" d="M2 0v20h16V0zm2 10h4V5h4v5h4v8H4z"></svg:path>`,
})
export class OouiTableMoveRowAfterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
