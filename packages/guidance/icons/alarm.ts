import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceAlarmIcon],svg[guidance-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m20.5 23l-2.664-3.148M3.5 23l2.664-3.148M22.912 8A12.03 12.03 0 0 0 15 1.378M1.088 8A12.03 12.03 0 0 1 9 1.378M12 6s.5 3.5 0 7c2.75 1.5 5 4 5 4M6.164 19.852a9 9 0 1 1 11.672 0m-11.672 0A8.96 8.96 0 0 0 12 22a8.97 8.97 0 0 0 5.836-2.148"></svg:path>`,
})
export class GuidanceAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
