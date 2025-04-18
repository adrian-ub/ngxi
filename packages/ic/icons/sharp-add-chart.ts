import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAddChartIcon],svg[ic-sharp-add-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V5h9V3H3v18h18V10h-2z"></svg:path><svg:path fill="currentColor" d="M11 7h2v10h-2zm4 6h2v4h-2zm-8-3h2v7H7zm12-5V3h-2v2h-2v2h2v2h2V7h2V5z"></svg:path>`,
})
export class IcSharpAddChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
