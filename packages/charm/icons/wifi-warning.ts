import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmWifiWarningIcon],svg[charm-wifi-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.25 4.75C11 2 5 2 1.75 4.75L8 13.25l1-1.5m3.25-4v3.5"></svg:path>`,
})
export class CharmWifiWarningIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
