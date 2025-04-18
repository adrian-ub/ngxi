import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAlarmClockIcon],svg[icon-park-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M23.9998 44.3332C34.1251 44.3332 42.3332 36.1251 42.3332 25.9999C42.3332 15.8747 34.1251 7.66656 23.9998 7.66656C13.8746 7.66656 5.6665 15.8747 5.6665 25.9999C5.6665 36.1251 13.8746 44.3332 23.9998 44.3332Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M23.7594 15.3536L23.7582 26.3624L31.5305 34.1347"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 9.00001L11 4.00001"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 9.00001L37 4.00001"></svg:path></svg:g>`,
})
export class IconParkAlarmClockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
