import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerConnectionCableSplitCablesCableSplitDeviceComputerElectronicsCordsCordSplitterIcon],svg[streamline-computer-connection-cable-split-cables-cable-split-device-computer-electronics-cords-cord-splitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="6.88" r="1.5"></svg:circle><svg:path d="M5.5 13.38h3m-3-2.5h3m.249-7.754L11.252.623l2 2l-2.502 2.504zM2.75.63l-2 2m2 2l2-2"></svg:path></svg:g>`,
})
export class StreamlineComputerConnectionCableSplitCablesCableSplitDeviceComputerElectronicsCordsCordSplitterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
