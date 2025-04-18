import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAlarmIcon],svg[icon-park-solid-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M14 25c0-5.523 4.477-10 10-10s10 4.477 10 10v16H14z"></svg:path><svg:path stroke-linecap="round" d="M24 5v3m11.892 1.328l-1.929 2.298m8.256 8.661l-2.955.521m-33.483-.521l2.955.521m3.373-11.48l1.928 2.298M6 41h37"></svg:path></svg:g>`,
})
export class IconParkSolidAlarmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
