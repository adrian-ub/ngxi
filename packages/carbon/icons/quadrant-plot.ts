import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonQuadrantPlotIcon],svg[carbon-quadrant-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15H17V2h-2v13H2v2h13v13h2V17h13z"></svg:path><svg:path fill="currentColor" d="M5 30a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1M8 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m14 9a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path><svg:circle cx="11" cy="11" r="2" fill="currentColor"></svg:circle><svg:circle cx="11" cy="21" r="2" fill="currentColor"></svg:circle><svg:circle cx="21" cy="21" r="2" fill="currentColor"></svg:circle><svg:circle cx="22" cy="28" r="2" fill="currentColor"></svg:circle><svg:circle cx="28" cy="24" r="2" fill="currentColor"></svg:circle><svg:circle cx="4" cy="11" r="2" fill="currentColor"></svg:circle><svg:circle cx="28" cy="4" r="2" fill="currentColor"></svg:circle>`,
})
export class CarbonQuadrantPlotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
