import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackJoIcon],svg[flagpack-jo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackJo0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackJo0)"><svg:path fill="#272727" d="M0 0v8h32V0z"></svg:path><svg:path fill="#093" d="M0 16v8h32v-8z"></svg:path></svg:g><svg:path fill="#E31D1C" fill-rule="evenodd" d="M0 0v24l20-12z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackJo1" width="20" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24l20-12z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackJo1)"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M9.002 13.87L7.132 15l.426-2.204L6 11.146l2.11-.088L9.001 9l.892 2.058H12l-1.554 1.738l.468 2.204z" clip-rule="evenodd"></svg:path></svg:g></svg:g>`,
})
export class FlagpackJoIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
