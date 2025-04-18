import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneScatterPlotIcon],svg[ic-twotone-scatter-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11" cy="6" r="2" fill="currentColor" opacity=".3"></svg:circle><svg:circle cx="16.6" cy="17.6" r="2" fill="currentColor" opacity=".3"></svg:circle><svg:circle cx="7" cy="14" r="2" fill="currentColor" opacity=".3"></svg:circle><svg:path fill="currentColor" d="M7 10c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m8-10c0-2.21-1.79-4-4-4S7 3.79 7 6s1.79 4 4 4s4-1.79 4-4m-4 2c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m5.6 5.6c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcTwotoneScatterPlotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
