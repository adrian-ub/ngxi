import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackNlIcon],svg[flagpack-nl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackNl0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackNl0)"><svg:path fill="#E31D1C" d="M0 0v8h32V0z"></svg:path><svg:path fill="#3D58DB" d="M0 16v8h32v-8z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackNlIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
