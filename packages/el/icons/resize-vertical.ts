import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elResizeVerticalIcon],svg[el-resize-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M904.102 304.102L600 0L295.898 304.102h203.539v591.797H295.898L600 1200l304.102-304.102h-203.54V304.102z"></svg:path>`,
})
export class ElResizeVerticalIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
