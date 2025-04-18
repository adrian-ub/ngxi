import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackTnIcon],svg[flagpack-tn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E31D1C" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackTn0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackTn0)"><svg:path fill="#F7FCFF" d="M16 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path fill="#E31D1C" d="M17.403 17.65s-4.217-1.15-4.217-5.676c0-4.527 4.217-5.776 4.217-5.776c-1.744-.675-6.846.36-6.846 5.775c0 5.416 5.245 6.391 6.846 5.678m-.232-6.662l-2.092.765l2.248.786l.076 2.105l1.368-1.636l2.256.16l-1.625-1.326l.979-1.915l-1.913.644l-1.325-1.656z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackTnIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
