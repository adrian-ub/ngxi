import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackNiIcon],svg[flagpack-ni-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackNi0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackNi0)"><svg:path fill="#0080EC" fill-rule="evenodd" d="M0 0v8h32V0zm0 16v8h32v-8z" clip-rule="evenodd"></svg:path><svg:path fill="#D0AB00" fill-rule="evenodd" d="M16 8q.284 0 .555.038l-.198 1.276a2.7 2.7 0 0 0-.872.026l-.093-1.294A4 4 0 0 1 16 8m1.152.168l-.348 1.244a2.71 2.71 0 0 1 1.904 2.677l1.287.11Q20 12.1 20 12c0-1.809-1.2-3.337-2.848-3.832m2.361 5.746a4 4 0 0 1-3.217 2.075v-1.296a2.7 2.7 0 0 0 1.83-1.014zm-6.936.156a4 4 0 0 0 3.194 1.924V14.7a2.7 2.7 0 0 1-1.935-1.07zm-.573-1.899L12 12a4 4 0 0 1 2.552-3.73l.334 1.26a2.71 2.71 0 0 0-1.595 2.45z" clip-rule="evenodd"></svg:path><svg:path fill="#7CDFFF" fill-rule="evenodd" d="m15.975 8.95l-2.737 4.73h5.517z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackNi1" width="6" height="6" x="13" y="8" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="m15.975 8.95l-2.737 4.73h5.517z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackNi1)"><svg:path stroke="#E31D1C" d="M16 15.118a2.39 2.39 0 1 0 0-4.782a2.39 2.39 0 0 0 0 4.782Z"></svg:path><svg:path stroke="#FFD018" d="M16 15.118a2.39 2.39 0 1 0 0-4.782a2.39 2.39 0 0 0 0 4.782Z"></svg:path><svg:path stroke="#4EDD00" d="M16 15.118a2.39 2.39 0 1 0 0-4.782a2.39 2.39 0 0 0 0 4.782Z"></svg:path><svg:path stroke="#3D58DB" d="M16 15.118a2.39 2.39 0 1 0 0-4.782a2.39 2.39 0 0 0 0 4.782Z"></svg:path><svg:path fill="#3D58DB" d="M13.018 12.218h6.255v1.818h-6.255z"></svg:path><svg:path fill="#97C923" fill-rule="evenodd" d="m13.437 12.99l1.247-1.239l.382.62l.267-.756l.297.567l.312-.43l.403.43l.37-.567l.316.567l.363-.43l.848.9l.152.339l-4.957.251z" clip-rule="evenodd"></svg:path></svg:g></svg:g></svg:g>`,
})
export class FlagpackNiIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
