import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elCaretDownIcon],svg[el-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 125.407l600 949.186l600-949.186z"></svg:path>`,
})
export class ElCaretDownIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
