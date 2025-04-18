import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGpstestIcon],svg[arcticons-gpstest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 41.06l9.1-12L21.26 37l9.1-11.8L42.5 41.06Z"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M17.37 6.94A11.61 11.61 0 0 1 5.76 18.55V6.94Z"></svg:path><svg:path d="M11.57 6.94a5.81 5.81 0 0 1-5.81 5.8v-5.8Z"></svg:path></svg:g>`,
})
export class ArcticonsGpstestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
