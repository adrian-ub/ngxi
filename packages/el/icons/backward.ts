import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elBackwardIcon],svg[el-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M627.277 0v545.462L1172.723 0v1200L627.262 654.538V1200L27.277 600z"></svg:path>`,
})
export class ElBackwardIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
