import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWalpyIcon],svg[arcticons-walpy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.385 9.15S12.1 23.335 7.745 30.922c-6.288 10.955 2.324 5.448 5.237 2.517C17.595 28.8 24.885 18.88 27.374 18.34c5.929-1.28-8.007 17.743-3.716 20.122c3.244 1.798 6.06-8.852 9.731-8.982c2.98.176-.35 7.518 9.11 9.37"></svg:path>`,
})
export class ArcticonsWalpyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
