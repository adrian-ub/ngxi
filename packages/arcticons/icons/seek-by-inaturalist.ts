import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSeekByInaturalistIcon],svg[arcticons-seek-by-inaturalist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 10.482c-1.96 45.487-30.731 17.697-39 26.716c2.213-44.666 32.18-16.956 39-26.716"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.216 28.784c6.405-9.858 14.99-9.467 23.82-7.915"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.397 16.324c4.931.338 6.996 2.515 8.639 4.545c-2.904.724-5.706 1.61-7.041 4.818"></svg:path>`,
})
export class ArcticonsSeekByInaturalistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
