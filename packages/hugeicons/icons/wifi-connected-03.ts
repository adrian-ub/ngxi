import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiConnected03Icon],svg[hugeicons-wifi-connected-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 20h.012M8.25 17c2-2 5.5-2 7.5 0m2.75-3c-3.768-3.333-9-3.333-13 0M2 11c3.158-2.667 6.579-4 10-4m3 .5s1 0 2 2c0 0 2.477-3.9 5-5.5" color="currentColor"></svg:path>`,
})
export class HugeiconsWifiConnected03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
