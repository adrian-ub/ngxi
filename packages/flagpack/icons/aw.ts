import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackAwIcon],svg[flagpack-aw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#5BA3DA" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackAw0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackAw0)"><svg:path fill="red" stroke="#F7FCFF" stroke-width=".35" d="m5.773 7.96l-4.38-.925l4.434-.878l1.283-4.59L8.122 6.12l3.96.92l-3.914.92l-1.129 3.743z"></svg:path><svg:path fill="#FAD615" d="M32 14H0v2h32zm0 4H0v2h32z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackAwIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
