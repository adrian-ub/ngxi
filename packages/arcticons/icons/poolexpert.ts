import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPoolexpertIcon],svg[arcticons-poolexpert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.669 30.524h8.994m-8.994-16.978h8.994m-8.994 8.489h5.846m-5.846-8.489v16.978M5.5 30.518V13.554h5.68c3.278 0 5.9 2.544 5.9 5.725s-2.622 5.726-5.9 5.726H5.5M33.408 8.151c4.184 5.3 7.506 13.509 9.092 26.043"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.23 39.849c4.55-9.286 9.01-19.2 20.269-25.72"></svg:path>`,
})
export class ArcticonsPoolexpertIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
