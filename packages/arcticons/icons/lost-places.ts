import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLostPlacesIcon],svg[arcticons-lost-places-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.603 32.066l11.432 11.432l7.624-7.624m2.264-2.264l1.51-1.51c6.313-6.313 6.313-16.549 0-22.863q0 0 0 0c-6.314-6.314-16.55-6.314-22.865 0q0 0 0 0a16.17 16.17 0 0 0-2.064 20.333"></svg:path><svg:circle cx="24.038" cy="20.631" r="5.385" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsLostPlacesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
