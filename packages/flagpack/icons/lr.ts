import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackLrIcon],svg[flagpack-lr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"></svg:path><svg:path fill="#E31D1C" d="M.027 5.5h32v3h-32z"></svg:path><svg:path fill="#E31D1C" fill-rule="evenodd" d="M0 0h32v3H0z" clip-rule="evenodd"></svg:path><svg:path fill="#E31D1C" d="M-.059 11h32v3h-32zm.171 5.4h32v3h-32zm-.01 5.1h32v3h-32z"></svg:path><svg:path fill="#3D58DB" fill-rule="evenodd" d="M0 0h16v14H0z" clip-rule="evenodd"></svg:path><svg:path fill="#F7FCFF" fill-rule="evenodd" d="m8.132 9.213l-2.92 2.026l.933-3.47L4 5.552l2.904-.12L8.132 2l1.23 3.432h2.898l-2.14 2.337l1.072 3.266z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlagpackLrIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
