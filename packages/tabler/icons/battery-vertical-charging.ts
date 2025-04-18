import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBatteryVerticalChargingIcon],svg[tabler-battery-vertical-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 18V7a2 2 0 0 1 2-2h.5a.5.5 0 0 0 .5-.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2"></svg:path><svg:path d="M12.667 8L10 12h4l-2.667 4"></svg:path></svg:g>`,
})
export class TablerBatteryVerticalChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
