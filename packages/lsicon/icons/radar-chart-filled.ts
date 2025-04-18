import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRadarChartFilledIcon],svg[lsicon-radar-chart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.125 6.953L8.5 4.766V1.27l6.011 4.836zm3.702.106l-3.505.876L10.083 10l2.528 4.214zM11.917 15l-2.621-4.368l-2.97 1.273L4.113 15zm-8.512-.727l2.033-2.847L4.12 7.912l-2.962-.83zM1.242 6.068l3.163.885L7.5 4.743v-3.49zm5.042 4.766l-1.181-3.15L7.976 5.63l2.375 1.979l-1.197 1.994z"></svg:path>`,
})
export class LsiconRadarChartFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
