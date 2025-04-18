import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackTtIcon],svg[flagpack-tt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E31D1C" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackTt0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackTt0)"><svg:path fill="#272727" stroke="#F7FCFF" stroke-width="1.5" d="m29.56 29.496l-.543.444l-.48-.512L-1.807-2.971l-.548-.585l.62-.508l3.097-2.532l.543-.444l.48.512L32.727 25.87l.549.586l-.621.508z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackTtIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
