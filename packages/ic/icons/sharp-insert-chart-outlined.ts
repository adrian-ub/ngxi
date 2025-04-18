import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpInsertChartOutlinedIcon],svg[ic-sharp-insert-chart-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2zm2 2H5V5h14zm2-16H3v18h18z"></svg:path>`,
})
export class IcSharpInsertChartOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
