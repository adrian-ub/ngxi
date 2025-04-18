import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWifiAntennaIcon],svg[streamline-wifi-antenna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.18 9.137a4.52 4.52 0 0 1-1.93-3.53a4.52 4.52 0 0 1 1.93-3.56m-1.98 8.53a6.3 6.3 0 0 1-2.7-5A6.31 6.31 0 0 1 3.19.637m5.63 8.5a4.52 4.52 0 0 0 1.93-3.55a4.52 4.52 0 0 0-1.93-3.54m1.98 8.53a6.3 6.3 0 0 0 2.7-5a6.31 6.31 0 0 0-2.69-5M7 7.137a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 0v6.359"></svg:path>`,
})
export class StreamlineWifiAntennaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
