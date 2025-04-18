import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSignalWifiStatusbar4BarIcon],svg[ic-round-signal-wifi-statusbar-4-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4C7.7 4 3.78 5.6.79 8.24C.35 8.63.32 9.3.73 9.71l10.56 10.58c.39.39 1.02.39 1.42 0L23.27 9.71c.41-.41.38-1.08-.06-1.47A16.87 16.87 0 0 0 12 4"></svg:path>`,
})
export class IcRoundSignalWifiStatusbar4BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
