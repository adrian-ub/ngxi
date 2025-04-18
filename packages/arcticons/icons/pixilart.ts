import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPixilartIcon],svg[arcticons-pixilart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.454 42.5h5.341v-6.15h5.142v-6.19h5.501V23.7H42.5V11.67h-5.062V5.5H26.796v6.17h-5.342V5.5H10.821v6.17H5.5V23.7h5.331v6.47h5.322v6.19h5.291z"></svg:path>`,
})
export class ArcticonsPixilartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
