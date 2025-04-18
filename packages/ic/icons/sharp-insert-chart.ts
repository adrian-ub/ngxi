import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpInsertChartIcon],svg[ic-sharp-insert-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z"></svg:path>`,
})
export class IcSharpInsertChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
