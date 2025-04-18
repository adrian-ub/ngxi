import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elHomeIcon],svg[el-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0L56.645 422.323V1200h373.829V730.541h339.054V1200h373.828V422.323z"></svg:path>`,
})
export class ElHomeIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
