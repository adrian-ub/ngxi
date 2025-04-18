import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackFiIcon],svg[flagpack-fi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackFi0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackFi0)"><svg:path fill="#2E42A5" stroke="#2E42A5" stroke-width="2" d="M10.819 1h-1v9.323H-1v4H9.819V25h4V14.323H33v-4H13.819V1z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackFiIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
