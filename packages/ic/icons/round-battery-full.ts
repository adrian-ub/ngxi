import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundBatteryFullIcon],svg[ic-round-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.34 22h7.32c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4"></svg:path>`,
})
export class IcRoundBatteryFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
