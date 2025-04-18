import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsWifiIcon],svg[humbleicons-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.5 17.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8.437c5.115-4.583 12.885-4.583 18 0M5.667 11.42a9.5 9.5 0 0 1 12.666 0m-10 2.981a5.5 5.5 0 0 1 7.334 0M12.5 17.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path></svg:g>`,
})
export class HumbleiconsWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
