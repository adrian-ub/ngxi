import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeploygateIcon],svg[arcticons-deploygate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.5 28.859c0-2.558-2.204-4.63-4.923-4.63s-4.923 2.072-4.923 4.63v3.01c0 2.558 2.204 4.631 4.923 4.631s4.923-2.073 4.923-4.63m0 4.63V17.976"></svg:path>`,
})
export class ArcticonsDeploygateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
