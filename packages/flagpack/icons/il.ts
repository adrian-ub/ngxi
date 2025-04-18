import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackIlIcon],svg[flagpack-il-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackIl0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill="#3D58DB" fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackIl0)"><svg:path d="M0 3v3h32V3zm0 15v3h32v-3zm11.381-3.061h9.377L16.116 6.62zm7.772-1.01h-6.132l3.086-5.47z"></svg:path><svg:path d="M11.264 9.076h9.417l-4.545 8.086zm7.781.974h-5.994l3.058 5.481z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackIlIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
