import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStratumIcon],svg[arcticons-stratum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.487 15.291L26.733 7.076a5.62 5.62 0 0 0-5.465 0L6.513 15.29c-1.35.752-1.35 2.694 0 3.446l14.754 8.216a5.62 5.62 0 0 0 5.465 0l14.755-8.216c1.35-.752 1.35-2.694 0-3.446"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.308 20.508l3.179 1.769c1.35.753 1.35 2.695 0 3.448l-3.18 1.768l-11.573 6.448a5.63 5.63 0 0 1-5.468 0L9.692 27.493l-3.179-1.768c-1.35-.753-1.35-2.695 0-3.448l3.179-1.769"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.308 27.493l3.179 1.77c1.35.752 1.35 2.694 0 3.447l-14.753 8.216a5.63 5.63 0 0 1-5.468 0L6.513 32.71c-1.35-.753-1.35-2.695 0-3.448l3.179-1.769"></svg:path>`,
})
export class ArcticonsStratumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
