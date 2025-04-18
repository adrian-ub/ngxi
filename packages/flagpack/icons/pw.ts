import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackPwIcon],svg[flagpack-pw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#61C6F0" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackPw0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackPw0)"><svg:path fill="#FBCD17" fill-rule="evenodd" d="M11.5 18a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13" clip-rule="evenodd"></svg:path></svg:g></svg:g>`,
})
export class FlagpackPwIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
