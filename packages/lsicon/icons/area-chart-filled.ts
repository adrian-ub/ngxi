import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAreaChartFilledIcon],svg[lsicon-area-chart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h1v11h11v1H2zm1.5 2.598l4.474 2.796l2.073-1.554L14 9.793V12.5H3.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAreaChartFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
