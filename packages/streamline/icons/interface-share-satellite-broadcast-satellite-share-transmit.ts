import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceShareSatelliteBroadcastSatelliteShareTransmitIcon],svg[streamline-interface-share-satellite-broadcast-satellite-share-transmit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 9A6 6 0 0 1 5 .5ZM9.26 4.74L12 2"></svg:path><svg:path d="M3.96 7.57L.5 13.5H7L5.92 9.73"></svg:path></svg:g>`,
})
export class StreamlineInterfaceShareSatelliteBroadcastSatelliteShareTransmitIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
