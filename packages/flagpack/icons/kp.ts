import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackKpIcon],svg[flagpack-kp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#3D58DB" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackKp0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackKp0)"><svg:path fill="#C51918" stroke="#F7FCFF" stroke-width="2" d="M0 5h-1v14h34V5z"></svg:path><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M10 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10" clip-rule="evenodd"></svg:path><svg:path fill="#C51918" fill-rule="evenodd" d="M9.995 13.87L7.28 15.76l.958-3.168L5.6 10.593l3.309-.067L9.995 7.4l1.087 3.126l3.308.067l-2.637 2l.958 3.167z" clip-rule="evenodd"></svg:path></svg:g></svg:g>`,
})
export class FlagpackKpIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
