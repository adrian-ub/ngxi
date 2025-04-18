import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonQqPlotIcon],svg[carbon-qq-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="20" cy="4" r="2" fill="currentColor"></svg:circle><svg:circle cx="8" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="28" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="11" cy="7" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="24" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M30 3.413L28.586 2L4 26.585V2H2v26a2 2 0 0 0 2 2h26v-2H5.413Z"></svg:path>`,
})
export class CarbonQqPlotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
