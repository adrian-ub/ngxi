import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elResizeHorizontalIcon],svg[el-resize-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M304.102 295.898L0 600l304.102 304.102v-203.54h591.797v203.539L1200 600L895.898 295.898v203.539H304.102z"></svg:path>`,
})
export class ElResizeHorizontalIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
