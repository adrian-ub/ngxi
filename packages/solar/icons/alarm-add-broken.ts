import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAlarmAddBrokenIcon],svg[solar-alarm-add-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M15 13h-3m0 0H9m3 0v-3m0 3v3"></svg:path><svg:path stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"></svg:path><svg:path d="M7.5 5.204A9 9 0 1 1 4.204 8.5"></svg:path></svg:g>`,
})
export class SolarAlarmAddBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
