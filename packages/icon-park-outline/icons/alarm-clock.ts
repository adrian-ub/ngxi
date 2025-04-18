import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAlarmClockIcon],svg[icon-park-outline-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44.333c10.125 0 18.333-8.208 18.333-18.333S34.125 7.667 24 7.667S5.667 15.875 5.667 26S13.875 44.333 24 44.333Z"></svg:path><svg:path stroke-linecap="round" d="m23.76 15.354l-.002 11.008l7.773 7.773M4 9l7-5m33 5l-7-5"></svg:path></svg:g>`,
})
export class IconParkOutlineAlarmClockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
