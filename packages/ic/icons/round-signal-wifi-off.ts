import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSignalWifiOffIcon],svg[ic-round-signal-wifi-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.64 7c-.45-.34-4.93-4-11.64-4c-1.32 0-2.55.14-3.69.38L18.43 13.5zM4.12 2.01a.996.996 0 1 0-1.41 1.41l1.35 1.35C1.91 5.76.59 6.82.36 7l10.08 12.56c.8 1 2.32 1 3.12 0l2.35-2.93l2.61 2.61a.996.996 0 1 0 1.41-1.41z"></svg:path>`,
})
export class IcRoundSignalWifiOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
