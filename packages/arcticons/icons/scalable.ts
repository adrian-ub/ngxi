import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsScalableIcon],svg[arcticons-scalable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 9.41v12.41L26.18 5.5h12.41a3.91 3.91 0 0 1 3.91 3.91M21.82 42.5H9.41a3.91 3.91 0 0 1-3.91-3.91V26.18zm18.327-2.353a8.034 8.034 0 0 1-11.362 0L7.853 19.215a8.034 8.034 0 0 1 0-11.362h0a8.034 8.034 0 0 1 11.362 0l20.932 20.932a8.034 8.034 0 0 1 0 11.362"></svg:path>`,
})
export class ArcticonsScalableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
