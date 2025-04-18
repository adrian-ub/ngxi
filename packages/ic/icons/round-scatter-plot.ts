import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundScatterPlotIcon],svg[ic-round-scatter-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="14" r="3" fill="currentColor"></svg:circle><svg:circle cx="11" cy="6" r="3" fill="currentColor"></svg:circle><svg:circle cx="16.6" cy="17.6" r="3" fill="currentColor"></svg:circle>`,
})
export class IcRoundScatterPlotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
