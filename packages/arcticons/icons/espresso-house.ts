import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEspressoHouseIcon],svg[arcticons-espresso-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="13.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 23.6h7.6m1 5.6h-8m41.8 0h-8m1-5.6h7.6m-12.4 5.1c.1 2.2-6.4 3.2-11.8.4c-4.7-2.4-7.4-4.6-7.4-7.9s6-5.5 11.8-3.7c7.5 2.2 8.1 8.7 8.1 8.7c-6.1-8.2-13.1-6.7-13.1-6.7c6.9 1.8 12.3 6.4 12.4 9.2"></svg:path>`,
})
export class ArcticonsEspressoHouseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
