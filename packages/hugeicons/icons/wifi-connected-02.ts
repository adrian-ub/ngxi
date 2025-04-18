import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiConnected02Icon],svg[hugeicons-wifi-connected-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.5 11.5c-3.768-3.333-9-3.333-13 0M2 8c6.316-5.333 13.684-5.333 20 0M9 18s1 0 2 2c0 0 2.477-3.898 5-5.499" color="currentColor"></svg:path>`,
})
export class HugeiconsWifiConnected02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
