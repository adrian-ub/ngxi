import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elCaretUpIcon],svg[el-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 1099.996l600-999.993l600 999.993z"></svg:path>`,
})
export class ElCaretUpIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
