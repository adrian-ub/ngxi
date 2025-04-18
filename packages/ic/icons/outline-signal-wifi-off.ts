import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineSignalWifiOffIcon],svg[ic-outline-signal-wifi-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.64 7c-.45-.34-4.93-4-11.64-4c-1.32 0-2.55.14-3.69.38L18.43 13.5zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87l3.32 3.32l1.41-1.41z"></svg:path>`,
})
export class IcOutlineSignalWifiOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
