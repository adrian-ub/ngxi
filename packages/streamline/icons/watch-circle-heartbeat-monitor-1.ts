import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWatchCircleHeartbeatMonitor1Icon],svg[streamline-watch-circle-heartbeat-monitor-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.487 8.926a.695.695 0 0 1-.972 0L4.88 7.349C3.787 6.285 5.215 3.932 7 5.672c1.782-1.737 3.21.616 2.12 1.677L7.486 8.926Z"></svg:path><svg:path d="M7 11.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path><svg:path d="M9.5 3.25V1.5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1.75m5 7.484V12.5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1.766"></svg:path></svg:g>`,
})
export class StreamlineWatchCircleHeartbeatMonitor1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
