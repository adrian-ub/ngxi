import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBatteryWarningIcon],svg[carbon-battery-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 11h-1v-1c0-1.1-.9-2-2-2H14v2h10v3h3v6h-3v3H6v-5H4v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-1h1c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2m-13 3c0-.13-.03-.27-.08-.39L8.89 3.55A1 1 0 0 0 8 3c-.38 0-.73.21-.89.55l-5 10a.99.99 0 0 0 .45 1.34c.14.07.29.11.45.11h10c.55 0 1-.45 1-1zm-9.38-1L8 6.24L11.38 13z"></svg:path>`,
})
export class CarbonBatteryWarningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
