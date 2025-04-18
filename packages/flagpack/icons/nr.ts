import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackNrIcon],svg[flagpack-nr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2E42A5" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackNr0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackNr0)"><svg:path fill="#FECA00" d="M0 8v4h32V8z"></svg:path><svg:path fill="#F7FCFF" d="m8.83 19.58l-1.545 2.005l-.072-2.53l-2.428.714l1.43-2.09l-2.385-.85l2.384-.85l-1.43-2.088l2.43.714l.07-2.53L8.83 14.08l1.545-2.006l.071 2.53l2.429-.713l-1.43 2.089l2.385.85l-2.385.85l1.43 2.089l-2.429-.715l-.071 2.53z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackNrIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
