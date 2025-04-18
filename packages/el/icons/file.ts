import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elFileIcon],svg[el-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400.86 0L174.791 218.249v73.93h302.582V0zm179.219 0v391.27H174.791V1200h850.418V0z"></svg:path>`,
})
export class ElFileIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
