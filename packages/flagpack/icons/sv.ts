import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackSvIcon],svg[flagpack-sv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackSv0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackSv0)"><svg:path fill="#3D58DB" fill-rule="evenodd" d="M0 0v8h32V0zm0 16v8h32v-8z" clip-rule="evenodd"></svg:path><svg:path stroke="#E8AA00" d="M19.425 11.858a3.642 3.642 0 1 1-7.283 0a3.642 3.642 0 0 1 7.283 0Z"></svg:path><svg:path fill="#1E601B" fill-rule="evenodd" d="M13.81 9.662s-.952 1.568-.952 2.644s1.14 2.429 2.934 2.429c1.75 0 3.008-1.045 3.046-2.429s-.942-2.369-.942-2.369s.555 1.993.278 2.8c-.278.807-1.175 1.784-2.382 1.66s-2.353-1.61-2.353-2.09s.372-2.645.372-2.645" clip-rule="evenodd"></svg:path><svg:path stroke="#188396" d="M14.16 12.328h3.208"></svg:path><svg:path stroke="#E8AA00" d="M14.459 11.806h2.76m-.169.605h-2.457l1.24-2.056z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackSvIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
