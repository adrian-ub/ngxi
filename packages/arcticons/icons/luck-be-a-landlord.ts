import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLuckBeALandlordIcon],svg[arcticons-luck-be-a-landlord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="20.23" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="15.08" ry="19.5"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.23 4.5h7.54c8.328 0 15.08 8.73 15.08 19.5s-6.752 19.5-15.08 19.5h-7.54"></svg:path>`,
})
export class ArcticonsLuckBeALandlordIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
