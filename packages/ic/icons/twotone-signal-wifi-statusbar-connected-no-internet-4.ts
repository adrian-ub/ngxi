import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSignalWifiStatusbarConnectedNoInternet4Icon],svg[ic-twotone-signal-wifi-statusbar-connected-no-internet-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18h2v2h-2zm0-8h2v6h-2z"></svg:path><svg:path fill="currentColor" d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21l5-5.01V8h5.92C19.97 5.51 16.16 4 12 4"></svg:path>`,
})
export class IcTwotoneSignalWifiStatusbarConnectedNoInternet4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
