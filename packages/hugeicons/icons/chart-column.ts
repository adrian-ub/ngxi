import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChartColumnIcon],svg[hugeicons-chart-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 20h3m12 0h3m-10.5 0h3M3 16h3m12 0h3m-10.5 0h3M3 12h3m12 0h3m-10.5 0h3M3 8h3m12 0h3M3 4h3" color="currentColor"></svg:path>`,
})
export class HugeiconsChartColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
