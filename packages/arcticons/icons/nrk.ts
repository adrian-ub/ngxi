import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNrkIcon],svg[arcticons-nrk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 17.202h4.932v13.595H4.5zm14.195 0h4.932v13.595h-4.932zm10.01 0h4.932v13.595h-4.932zm14.795 0h-4.932L33.637 24l4.931 6.798H43.5L38.568 24zM18.695 30.798h-4.931L9.432 17.202h2.171c1.644 0 3.1 1.064 3.598 2.63z"></svg:path><svg:circle cx="26.093" cy="19.668" r="2.466" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsNrkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
