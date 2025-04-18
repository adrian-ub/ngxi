import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBatteryIcon],svg[marketeq-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M29.167 10.417h-8.334V6.25h8.334zm6.25 31.25V12.5a2.083 2.083 0 0 0-2.084-2.083H16.667a2.083 2.083 0 0 0-2.084 2.083v29.167a2.083 2.083 0 0 0 2.084 2.083h16.666a2.083 2.083 0 0 0 2.084-2.083"></svg:path>`,
})
export class MarketeqBatteryIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
