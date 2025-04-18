import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAreaChartOutlineIcon],svg[lsicon-area-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 2v11.5H14m-10-8V12h9.5v-2L10 6.5L8 8z"></svg:path>`,
})
export class LsiconAreaChartOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
