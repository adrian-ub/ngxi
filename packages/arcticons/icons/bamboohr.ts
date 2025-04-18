import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBamboohrIcon],svg[arcticons-bamboohr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="33.13" cy="30.687" r="9.37" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.757 30.63l.071-22.687m-10.223 3.14c4.192 1.818 5.22 7.141 6.266 11.248c-2.561 1.81-10.287-2.452-14.371-9.6c4.174.573 8.603 2.21 14.42 9.63"></svg:path>`,
})
export class ArcticonsBamboohrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
