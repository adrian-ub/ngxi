import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSignalWifiConnectedNoInternet4Icon],svg[ic-round-signal-wifi-connected-no-internet-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.21 8.24A16.87 16.87 0 0 0 12 4C7.7 4 3.78 5.6.79 8.24C.35 8.63.32 9.3.73 9.71l10.56 10.58c.19.19.45.29.7.29V14c0-1.1.9-2 2-2h6.99l2.29-2.29c.41-.41.38-1.08-.06-1.47"></svg:path><svg:path fill="currentColor" d="M20.3 14.71a.996.996 0 0 0-1.41 0l-1.39 1.38l-1.39-1.38a.996.996 0 1 0-1.41 1.41l1.39 1.39l-1.39 1.39a.996.996 0 1 0 1.41 1.41l1.39-1.38l1.39 1.38a.996.996 0 1 0 1.41-1.41l-1.38-1.39l1.38-1.39a.996.996 0 0 0 0-1.41"></svg:path>`,
})
export class IcRoundSignalWifiConnectedNoInternet4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
