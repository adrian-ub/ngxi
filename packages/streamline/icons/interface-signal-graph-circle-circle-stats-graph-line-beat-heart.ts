import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSignalGraphCircleCircleStatsGraphLineBeatHeartIcon],svg[streamline-interface-signal-graph-circle-circle-stats-graph-line-beat-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.01h4L6 4.5L7.5 10l2-2.99h4M12.77 4A6.51 6.51 0 0 0 1.23 4m0 6a6.51 6.51 0 0 0 11.54 0"></svg:path>`,
})
export class StreamlineInterfaceSignalGraphCircleCircleStatsGraphLineBeatHeartIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
