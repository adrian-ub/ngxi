import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChartBarOneIcon],svg[mynaui-chart-bar-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 8v13M12 3v18m-6-9v9"></svg:path>`,
})
export class MynauiChartBarOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
