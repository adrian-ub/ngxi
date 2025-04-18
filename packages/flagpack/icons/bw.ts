import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackBwIcon],svg[flagpack-bw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#42ADDF" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackBw0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackBw0)"><svg:path fill="#58A5FF" fill-rule="evenodd" d="M0 0v8h32V0z" clip-rule="evenodd"></svg:path><svg:path fill="#272727" stroke="#F7FCFF" stroke-width="2" d="M0 9h-1v6h34V9z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackBwIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
