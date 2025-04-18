import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAlarmAddLinearIcon],svg[solar-alarm-add-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="9"></svg:circle><svg:path stroke-linecap="round" d="M15 13h-3m0 0H9m3 0v-3m0 3v3"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"></svg:path></svg:g>`,
})
export class SolarAlarmAddLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
