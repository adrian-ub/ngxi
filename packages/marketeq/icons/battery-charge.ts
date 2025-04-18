import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBatteryChargeIcon],svg[marketeq-battery-charge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m25 31.25l2.083-4.167h-4.166L25 22.917"></svg:path><svg:path stroke="#306CFE" d="M35.417 41.667V12.5a2.083 2.083 0 0 0-2.084-2.083H16.667a2.083 2.083 0 0 0-2.084 2.083v29.167a2.083 2.083 0 0 0 2.084 2.083h16.666a2.083 2.083 0 0 0 2.084-2.083M29.167 6.25h-8.334v4.167h8.334z"></svg:path></svg:g>`,
})
export class MarketeqBatteryChargeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
