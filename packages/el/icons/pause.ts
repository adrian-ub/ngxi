import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elPauseIcon],svg[el-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h500v1200H0zm700 0h500v1200H700z"></svg:path>`,
})
export class ElPauseIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
