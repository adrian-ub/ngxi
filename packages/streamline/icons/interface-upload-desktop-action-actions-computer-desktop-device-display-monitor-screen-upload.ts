import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceUploadDesktopActionActionsComputerDesktopDeviceDisplayMonitorScreenUploadIcon],svg[streamline-interface-upload-desktop-action-actions-computer-desktop-device-display-monitor-screen-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 3h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-7A.5.5 0 0 1 1 3h1m5 8v2.5m-2 0h4m-2-7v-6m-2 2l2-2l2 2"></svg:path>`,
})
export class StreamlineInterfaceUploadDesktopActionActionsComputerDesktopDeviceDisplayMonitorScreenUploadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
