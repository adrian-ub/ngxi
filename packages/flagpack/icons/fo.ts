import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackFoIcon],svg[flagpack-fo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackFo0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackFo0)"><svg:path fill="#F50100" stroke="#2E42A5" stroke-width="2" d="M10-1H9V9H-1v6H9v10h6V15h18V9H15V-1z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackFoIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
