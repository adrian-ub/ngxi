import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackTzIcon],svg[flagpack-tz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#3195F9" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackTz0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackTz0)"><svg:path fill="#73BE4A" fill-rule="evenodd" d="M0 0v24L32 0z" clip-rule="evenodd"></svg:path><svg:path fill="#272727" stroke="#FFD018" stroke-width="2.5" d="m-1.822 25.44l.694 1.039l1.04-.694L36.172 1.58l1.04-.693l-.693-1.04l-2.221-3.327l-.694-1.04l-1.04.694l-36.26 24.204l-1.04.694l.694 1.04z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackTzIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
