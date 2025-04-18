import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elForwardIcon],svg[el-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M572.728 1200V654.546L27.272 1200V0l545.455 545.454V0l600 600z"></svg:path>`,
})
export class ElForwardIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
