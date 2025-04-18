import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elCaretRightIcon],svg[el-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m100 0l1000 600l-1000 600z"></svg:path>`,
})
export class ElCaretRightIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
