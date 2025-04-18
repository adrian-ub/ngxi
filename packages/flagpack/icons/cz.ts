import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackCzIcon],svg[flagpack-cz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E31D1C" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackCz0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackCz0)"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0-2v14h32V-2z" clip-rule="evenodd"></svg:path></svg:g><svg:path fill="#3D58DB" fill-rule="evenodd" d="M0 0v24l18-12z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlagpackCzIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
