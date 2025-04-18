import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerHandHeldTabletKindleDeviceElectronicsIpadComputerIcon],svg[streamline-computer-hand-held-tablet-kindle-device-electronics-ipad-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="11" height="13" x="1.5" y=".5" rx="1"></svg:rect><svg:path d="M1.5 10.5h11M4.5 3h5m-5 2.5h5M4.5 8h3"></svg:path></svg:g>`,
})
export class StreamlineComputerHandHeldTabletKindleDeviceElectronicsIpadComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
