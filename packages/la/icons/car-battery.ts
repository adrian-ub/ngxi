import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCarBatteryIcon],svg[la-car-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v2h4V6zm12 0v2h4V6zM4 9v18h24V9zm2 2h20v14H6zm14 4v2h-2v2h2v2h2v-2h2v-2h-2v-2zM8 17v2h6v-2z"></svg:path>`,
})
export class LaCarBatteryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
