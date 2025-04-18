import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCarBatteryIcon],svg[mdi-car-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3v3H1v14h22V6h-3V3h-6v3h-4V3zM3 8h18v10H3zm12 2v2h-2v2h2v2h2v-2h2v-2h-2v-2zM5 12v2h6v-2z"></svg:path>`,
})
export class MdiCarBatteryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
