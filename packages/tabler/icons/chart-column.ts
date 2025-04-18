import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartColumnIcon],svg[tabler-chart-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h3m10 0h3m-9.5 0h3M4 16h3m10 0h3m-9.5 0h3M4 12h3m10 0h3m-9.5 0h3M4 8h3m10 0h3M4 4h3"></svg:path>`,
})
export class TablerChartColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
