import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAclosetIcon],svg[arcticons-acloset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.382 27.638c10.876-3.617 23.766-.631 31.118-3.85"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 41.831c3.742.341 5.648-.533 7.454-4.645C20.99 18.895 29.8 4.328 36.854 6.276c-2.548 13.787-6.302 35.535.31 35.135l3.519-.213"></svg:path>`,
})
export class ArcticonsAclosetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
