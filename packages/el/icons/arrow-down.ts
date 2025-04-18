import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elArrowDownIcon],svg[el-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 1200L131.25 496.875h252.539V0h432.422v496.875h252.539z"></svg:path>`,
})
export class ElArrowDownIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
