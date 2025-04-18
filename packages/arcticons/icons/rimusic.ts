import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRimusicIcon],svg[arcticons-rimusic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.674 5.5v37m-22.887-8.962L33.02 25.32a1.525 1.525 0 0 0 0-2.642L8.613 8.588a1.525 1.525 0 0 0-2.287 1.32v28.184a1.525 1.525 0 0 0 2.287 1.32l6.3-3.637"></svg:path>`,
})
export class ArcticonsRimusicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
