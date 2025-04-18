import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiDisconnected01Icon],svg[hugeicons-wifi-disconnected-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 16c.867-.867 1.92-1.358 3-1.474m-6-2.026c3.173-3.173 7.122-3.83 10.5-1.968M2 8.5c6.316-5.333 13.684-5.333 20 0m-1 5l-6 6m6 0l-6-6" color="currentColor"></svg:path>`,
})
export class HugeiconsWifiDisconnected01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
