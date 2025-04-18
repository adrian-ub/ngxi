import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTherapeerIcon],svg[arcticons-therapeer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="26.419" height="39" x="10.79" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.553"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.8 41.12l14.06-4.178a2.52 2.52 0 0 0 1.8-2.412V13.47a2.52 2.52 0 0 0-1.8-2.412L10.8 6.88m12.579 19.074v-3.908"></svg:path>`,
})
export class ArcticonsTherapeerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
