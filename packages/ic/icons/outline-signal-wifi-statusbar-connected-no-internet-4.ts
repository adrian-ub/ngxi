import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineSignalWifiStatusbarConnectedNoInternet4Icon],svg[ic-outline-signal-wifi-statusbar-connected-no-internet-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21l5-5.01V8h5.92C19.97 5.51 16.16 4 12 4m7 14h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M19 10h2v6h-2z"></svg:path>`,
})
export class IcOutlineSignalWifiStatusbarConnectedNoInternet4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
