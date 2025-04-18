import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneAlarmClockIcon],svg[icon-park-twotone-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTAlarmClock0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M24 44.333c10.125 0 18.333-8.208 18.333-18.333S34.125 7.667 24 7.667S5.667 15.875 5.667 26S13.875 44.333 24 44.333Z"></svg:path><svg:path stroke-linecap="round" d="m23.76 15.354l-.002 11.008l7.773 7.773M4 9l7-5m33 5l-7-5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAlarmClock0)"></svg:path>`,
})
export class IconParkTwotoneAlarmClockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
