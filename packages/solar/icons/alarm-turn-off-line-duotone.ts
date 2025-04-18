import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAlarmTurnOffLineDuotoneIcon],svg[solar-alarm-turn-off-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="9" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="M14.122 15.122L12 13m0 0l-2.12-2.12M12 13l2.122-2.121M12 13l-2.12 2.121"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"></svg:path></svg:g>`,
})
export class SolarAlarmTurnOffLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
