import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elStepBackwardIcon],svg[el-step-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M250 1200V0h200v550L950 50v1100L450 650v550z"></svg:path>`,
})
export class ElStepBackwardIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
