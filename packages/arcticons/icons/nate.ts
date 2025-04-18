import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNateIcon],svg[arcticons-nate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.4 24v17.267h11.1V21.533q0-14.8-14.8-14.8H5.5v34.534h11.1V17.833h8.633q6.167 0 6.167 6.167"></svg:path>`,
})
export class ArcticonsNateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
