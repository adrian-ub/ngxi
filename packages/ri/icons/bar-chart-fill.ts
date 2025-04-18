import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBarChartFillIcon],svg[ri-bar-chart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12h4v9H3zm14-4h4v13h-4zm-7-6h4v19h-4z"></svg:path>`,
})
export class RiBarChartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
