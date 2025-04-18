import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChartUpBIcon],svg[mage-chart-up-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h4v9H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m6-5h4v14H9V9a2 2 0 0 1 2-2m6-4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MageChartUpBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
