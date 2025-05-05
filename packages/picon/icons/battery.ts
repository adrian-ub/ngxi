import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBatteryIcon],svg[picon-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V1h1V0h2v1h1v7"></svg:path>`,
})
export class PiconBatteryIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
