import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackCwIcon],svg[flagpack-cw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2E42A5" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackCw0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackCw0)"><svg:path fill="#F7FCFF" d="M4.254 6.15L2.266 7.198l.96-1.868L2 3.963l1.523-.056L4.254 2l.558 1.907l1.783.056l-1.284 1.368l.815 1.868zm7.098 4.927l-2.454 1.028l.963-2.577L7.726 7.8h2.558l1.068-2.787l.816 2.787h2.56l-1.82 1.73l.905 2.576z"></svg:path><svg:path fill="#F9E813" d="M0 14v4h32v-4z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackCwIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
