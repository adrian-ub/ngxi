import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elForwardAltIcon],svg[el-forward-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M300 375.366L600 600L300 824.634zm375 0L975 600L675 824.634z"></svg:path>`,
})
export class ElForwardAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
