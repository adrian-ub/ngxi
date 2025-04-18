import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTableMergeCellsIcon],svg[ooui-table-merge-cells-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path id="oouiTableMergeCells0" fill="currentColor" d="M9 10L4 6v3H0v2h4v3zm-7 3H0v5h8v-2H2zM0 2v5h2V4h6V2z"></svg:path><svg:use href="#oouiTableMergeCells0" transform="matrix(-1 0 0 1 20 0)"></svg:use>`,
})
export class OouiTableMergeCellsIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
