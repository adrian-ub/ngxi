import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsTableOIcon],svg[vs-table-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 606L0 576V448L832 64l832 384v128l-64 30v534q0 38-26.5 57t-69.5 19t-69.5-19t-26.5-57V694L928 916v480q0 38-26.5 57t-69.5 19t-69.5-19t-26.5-57V916L256 694v446q0 38-26.5 57t-69.5 19t-69.5-19t-26.5-57zm768 226l768-352l-768-352L64 480z"></svg:path>`,
})
export class VsTableOIcon {
  readonly viewBox = input("0 0 1664 1472")
  readonly width = input("1.14em")
  readonly height = input("1em")
}
