import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerScreen1ScreenDeviceElectronicsMonitorDiplayComputerIcon],svg[streamline-computer-screen-1-screen-device-electronics-monitor-diplay-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="2" rx=".5"></svg:rect><svg:path d="m6 11l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path></svg:g>`,
})
export class StreamlineComputerScreen1ScreenDeviceElectronicsMonitorDiplayComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
