import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneAlarmIcon],svg[icon-park-twotone-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTAlarm0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M14 25c0-5.523 4.477-10 10-10s10 4.477 10 10v16H14z"></svg:path><svg:path stroke-linecap="round" d="M24 5v3m11.892 1.328l-1.929 2.298m8.256 8.661l-2.955.521m-33.483-.521l2.955.521m3.373-11.48l1.928 2.298M6 41h37"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAlarm0)"></svg:path>`,
})
export class IconParkTwotoneAlarmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
