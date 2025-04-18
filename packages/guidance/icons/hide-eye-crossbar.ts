import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceHideEyeCrossbarIcon],svg[guidance-hide-eye-crossbar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M17.416 17.416a8 8 0 0 0 .478-.47L20.5 14c1-1 2.224-2 3.5-2c-1.276 0-2.5-1-3.5-2l-2.606-2.947a8.08 8.08 0 0 0-11.31-.469m8.713 12.213a8.08 8.08 0 0 1-9.19-1.85L3.5 14c-1-1-2.224-2-3.5-2c1.276 0 2.5-1 3.5-2l1.408-1.592M.5.5l23 23m-9.732-9.732a2.5 2.5 0 0 0-3.536-3.536"></svg:path>`,
})
export class GuidanceHideEyeCrossbarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
