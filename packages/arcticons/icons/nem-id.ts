import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNemIdIcon],svg[arcticons-nem-id-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.972 23.514a6.264 6.264 0 1 1 .84 3.131m-.84-3.131H5.796c-1.279 0-2.296.706-2.296 1.697v5.54m6.488-7.237V30.7"></svg:path>`,
})
export class ArcticonsNemIdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
