import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmWifiSlashIcon],svg[charm-wifi-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 3.25c-1.5 0-3.5 1.5-3.5 1.5L8 13.25l2.25-3m-1.5-7.5s2.977-.135 5.5 2l-2 2.5m-8-5.5l8 10.5"></svg:path>`,
})
export class CharmWifiSlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
