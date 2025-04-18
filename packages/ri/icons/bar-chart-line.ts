import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBarChartLineIcon],svg[ri-bar-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12h2v9H3zm16-4h2v13h-2zm-8-6h2v19h-2z"></svg:path>`,
})
export class RiBarChartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
