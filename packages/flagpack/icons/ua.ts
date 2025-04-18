import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackUaIcon],svg[flagpack-ua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#3195F9" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackUa0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackUa0)"><svg:path fill="#FECA00" fill-rule="evenodd" d="M0 12v12h32V12z" clip-rule="evenodd"></svg:path></svg:g></svg:g>`,
})
export class FlagpackUaIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
