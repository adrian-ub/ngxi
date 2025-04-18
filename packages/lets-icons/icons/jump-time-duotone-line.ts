import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsJumpTimeDuotoneLineIcon],svg[lets-icons-jump-time-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsJumpTimeDuotoneLine0"><svg:g fill="none" stroke-linecap="round" stroke-width="1.2"><svg:path stroke="#fff" d="m17.652 5.58l-5.438 9.063a.25.25 0 0 1-.428 0L6.348 5.58a.25.25 0 0 1 .293-.366l5.28 1.76a.25.25 0 0 0 .158 0l5.28-1.76a.25.25 0 0 1 .293.366Z"></svg:path><svg:path stroke="silver" stroke-opacity=".25" d="M4 19h5m6 0h5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsJumpTimeDuotoneLine0)"></svg:path>`,
})
export class LetsIconsJumpTimeDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
