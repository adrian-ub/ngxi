import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsAlarmIcon],svg[rivet-icons-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4.855.642A8.03 8.03 0 0 0 .642 4.855A3 3 0 0 1 4.855.642m10.503 4.213A3 3 0 0 0 11.145.642a8.03 8.03 0 0 1 4.213 4.213M9 7.586V5H7v3.414l2 2L10.414 9z"></svg:path><svg:path d="M1 8a7 7 0 1 1 12.606 4.192l2.308 2.308l-1.414 1.414l-2.308-2.308A6.97 6.97 0 0 1 8 15a6.97 6.97 0 0 1-4.192-1.394L1.5 15.914L.086 14.5l2.308-2.308A6.97 6.97 0 0 1 1 8m7-5a5 5 0 1 0 0 10A5 5 0 0 0 8 3"></svg:path></svg:g>`,
})
export class RivetIconsAlarmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
