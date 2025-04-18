import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsServicewaIcon],svg[arcticons-servicewa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.041 27.504h-3.653m-.911 2.796l2.741-8.408l2.74 8.433m-7.484-8.433l-2.108 8.433l-2.108-8.433l-2.108 8.433l-2.108-8.433"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.913 35.453v-26L31.993 4.5l-8.608 11.143l-12.298 4.952l1.23 8.667l3.074 8.048l-1.844 4.333l7.378 1.857l.527-1.238z"></svg:path>`,
})
export class ArcticonsServicewaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
