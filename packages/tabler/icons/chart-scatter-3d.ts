import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartScatter3dIcon],svg[tabler-chart-scatter-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 20l9-7m0-10v10l9 7m-4-8v.015m0-8v.015m4 3.985v.015m-9 10.985v.015m-9-7.015v.015m4-4.015v.015M3 4.015v.015"></svg:path>`,
})
export class TablerChartScatter3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
