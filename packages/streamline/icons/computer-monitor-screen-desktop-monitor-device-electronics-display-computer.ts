import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerMonitorScreenDesktopMonitorDeviceElectronicsDisplayComputerIcon],svg[streamline-computer-monitor-screen-desktop-monitor-device-electronics-display-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11 5.5h1.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9"></svg:path><svg:rect width="8" height="6" x=".5" y="5.5" rx="1"></svg:rect><svg:path d="M4.5 11.5v2m-2 0h4"></svg:path></svg:g>`,
})
export class StreamlineComputerMonitorScreenDesktopMonitorDeviceElectronicsDisplayComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
