import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDesktopRemoveDesktopDeviceSubtractDisplayMinusComputerIcon],svg[streamline-computer-desktop-remove-desktop-device-subtract-display-minus-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="2" rx=".5"></svg:rect><svg:path d="m6 11l-1 2.5M8 11l1 2.5m-5 0h6m-.5-7h-5"></svg:path></svg:g>`,
})
export class StreamlineComputerDesktopRemoveDesktopDeviceSubtractDisplayMinusComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
