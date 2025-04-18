import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChartDownBIcon],svg[mage-chart-down-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21h-4v-9h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2m-4 0H9V7h4a2 2 0 0 1 2 2zm-6 0H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z"></svg:path>`,
})
export class MageChartDownBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
