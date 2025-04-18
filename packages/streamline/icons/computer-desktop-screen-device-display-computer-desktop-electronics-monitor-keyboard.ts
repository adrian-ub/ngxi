import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDesktopScreenDeviceDisplayComputerDesktopElectronicsMonitorKeyboardIcon],svg[streamline-computer-desktop-screen-device-display-computer-desktop-electronics-monitor-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="11" height="8" x="1.5" y=".5" rx="1"></svg:rect><svg:path d="M12.28 11.05a1 1 0 0 0-.9-.55H2.62a1 1 0 0 0-.9.55l-.5 1a1 1 0 0 0 .05 1a1 1 0 0 0 .85.47h9.76a1 1 0 0 0 .85-.47a1 1 0 0 0 0-1ZM1.5 6h11"></svg:path></svg:g>`,
})
export class StreamlineComputerDesktopScreenDeviceDisplayComputerDesktopElectronicsMonitorKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
