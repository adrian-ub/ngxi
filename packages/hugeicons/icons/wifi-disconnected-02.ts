import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiDisconnected02Icon],svg[hugeicons-wifi-disconnected-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.5 15l-5 5m5 0l-5-5m9-2c-3.768-4-9-4-13 0M2 8c6.316-5.333 13.684-5.333 20 0" color="currentColor"></svg:path>`,
})
export class HugeiconsWifiDisconnected02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
