import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChartBarThinIcon],svg[ph-chart-bar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 204h-12V40a4 4 0 0 0-4-4h-56a4 4 0 0 0-4 4v44H96a4 4 0 0 0-4 4v44H48a4 4 0 0 0-4 4v68H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8M156 44h48v160h-48Zm-56 48h48v112h-48Zm-48 48h40v64H52Z"></svg:path>`,
})
export class PhChartBarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
