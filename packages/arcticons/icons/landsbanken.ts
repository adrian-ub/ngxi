import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLandsbankenIcon],svg[arcticons-landsbanken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.405 13.72l-3.071-5.318H12.557l3.06 5.301Zm1.295 2.025l14.8 23.821H26.194l2.943-5.097H15.048l-2.961 5.129H4.5L14.617 21.07l-3.316-5.348Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.572 25.572l2.075 3.557l-4.118.017l-4.12.018l2.046-3.574l2.043-3.576Z"></svg:path>`,
})
export class ArcticonsLandsbankenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
