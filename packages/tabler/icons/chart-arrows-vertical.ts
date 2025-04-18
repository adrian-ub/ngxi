import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartArrowsVerticalIcon],svg[tabler-chart-arrows-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 21V7m-9 8l3-3l3 3m0-5l3-3l3 3M3 21h18m-9 0v-9M3 6l3-3l3 3M6 21V3"></svg:path>`,
})
export class TablerChartArrowsVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
