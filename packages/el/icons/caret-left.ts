import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elCaretLeftIcon],svg[el-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1100.007 1200L99.993 600L1100.007 0z"></svg:path>`,
})
export class ElCaretLeftIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
