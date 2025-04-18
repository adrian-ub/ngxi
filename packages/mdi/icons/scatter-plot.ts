import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiScatterPlotIcon],svg[mdi-scatter-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m4-8a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m5.6 11.6c1.65 0 3 1.34 3 3a3 3 0 0 1-3 3c-1.66 0-3-1.35-3-3a3 3 0 0 1 3-3"></svg:path>`,
})
export class MdiScatterPlotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
