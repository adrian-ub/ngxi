import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackPaIcon],svg[flagpack-pa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackPa0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackPa0)"><svg:path fill="#E31D1C" d="M16 0v12h16V0zm7.02 19.15l-2.302 1.424l.894-2.391l-1.957-1.811h2.374l.992-2.587l.757 2.587h2.377l-1.713 1.81l.839 2.392z"></svg:path><svg:path fill="#2E42A5" d="M9.02 8.365L6.719 9.79l.894-2.392l-1.957-1.81H8.03L9.021 3l.757 2.587h2.377l-1.713 1.81l.839 2.393zM0 12v12h16V12z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackPaIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
