import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChartIcon],svg[hugeicons-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 21.5h20m-4-6h.009m-.009 3h.009M6 18.5h.009M6 15.5h.009M6 12.5h.009M6 9.5h.009M7.79 5.392l8.428 4.198M8 4.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m12 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0" color="currentColor"></svg:path>`,
})
export class HugeiconsChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
