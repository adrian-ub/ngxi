import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerScreen2ScreenDeviceElectronicsMonitorDiplayComputerIcon],svg[streamline-computer-screen-2-screen-device-electronics-monitor-diplay-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="1.5" rx=".5"></svg:rect><svg:path d="M3.53 13.5a3.51 3.51 0 0 1 6.94 0"></svg:path></svg:g>`,
})
export class StreamlineComputerScreen2ScreenDeviceElectronicsMonitorDiplayComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
