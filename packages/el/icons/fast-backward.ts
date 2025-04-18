import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elFastBackwardIcon],svg[el-fast-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1200V0h200v550L700 50v500l500-500v1100L700 650v500L200 650v550z"></svg:path>`,
})
export class ElFastBackwardIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
