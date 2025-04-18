import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elStopIcon],svg[el-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h1200v1200H0z"></svg:path>`,
})
export class ElStopIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
