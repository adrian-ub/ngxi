import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackCrIcon],svg[flagpack-cr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2E42A5" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackCr0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackCr0)"><svg:path fill="#E31D1C" stroke="#F7FCFF" stroke-width="4" d="M0 8h-2v8h36V8z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackCrIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
