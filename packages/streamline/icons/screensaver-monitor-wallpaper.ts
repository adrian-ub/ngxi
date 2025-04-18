import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineScreensaverMonitorWallpaperIcon],svg[streamline-screensaver-monitor-wallpaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1 1.25h12c.3 0 .5.2.5.5v8c0 .3-.2.5-.5.5H1c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5"></svg:path><svg:path d="M4.64 5.75a1.39 1.39 0 1 0 0-2.781a1.39 1.39 0 0 0 0 2.781M6 10.25l-1 2.5m3-2.5l1 2.5m-5 0h6m-5.91-2.5l5.075-4.88a.48.48 0 0 1 .624 0L13.5 8.11"></svg:path></svg:g>`,
})
export class StreamlineScreensaverMonitorWallpaperIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
