import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elRoadIcon],svg[el-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1200 1200L957.743 0H658.691l9.164 276.675H532.144L541.308 0H242.256L0 1200h501.562l11.441-345.445h173.992L698.438 1200zM683.573 751.231H516.426l13.479-406.965h140.188z"></svg:path>`,
})
export class ElRoadIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
