import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChartBIcon],svg[mage-chart-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 9h4v12H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2m6-6h2a2 2 0 0 1 2 2v16H9V5a2 2 0 0 1 2-2m4 4h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4z"></svg:path>`,
})
export class MageChartBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
