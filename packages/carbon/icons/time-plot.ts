import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTimePlotIcon],svg[carbon-time-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.586 13L21 10.414V6h2v3.586l2 2z"></svg:path><svg:path fill="currentColor" d="M22 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8m0-14a6 6 0 1 0 6 6a6.007 6.007 0 0 0-6-6"></svg:path><svg:path fill="currentColor" d="m8.63 18l7 6H30v-2H16.37l-7-6H4V2H2v26a2.003 2.003 0 0 0 2 2h26v-2H4V18Z"></svg:path>`,
})
export class CarbonTimePlotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
