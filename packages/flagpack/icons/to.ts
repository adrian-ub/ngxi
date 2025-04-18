import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackToIcon],svg[flagpack-to-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E31D1C" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackTo0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackTo0)"><svg:path fill="#F7FCFF" d="M0 0h18v16H0z"></svg:path><svg:path fill="#E31D1C" fill-rule="evenodd" d="M12 2H8v4H4v4h4v4h4v-4h4V6h-4z" clip-rule="evenodd"></svg:path></svg:g></svg:g>`,
})
export class FlagpackToIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
