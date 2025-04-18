import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLineChartOutlineIcon],svg[lsicon-line-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 2v11.5H14M4 10l3.5-3.5l2 2L14 4"></svg:path>`,
})
export class LsiconLineChartOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
