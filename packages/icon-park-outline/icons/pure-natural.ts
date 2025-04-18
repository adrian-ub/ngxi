import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePureNaturalIcon],svg[icon-park-outline-pure-natural-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" d="M11 41q6.25-2.686 11.775-2.898Q28.298 37.889 37 40"></svg:path><svg:path stroke-linecap="round" d="M23.045 44q-1.15-14.16.955-22"></svg:path><svg:path stroke-linejoin="round" d="M24 23.176q2.385-9.027 8.4-10.766q6.014-1.74 11.6 1.594q.028 7.338-6.37 10.751q-6.4 3.414-13.63-1.579Zm-.208-1.062q1.25-10.78-5.01-15.185T4.284 4.96Q2.846 14.906 8.683 20q5.838 5.094 15.109 2.114Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkOutlinePureNaturalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
