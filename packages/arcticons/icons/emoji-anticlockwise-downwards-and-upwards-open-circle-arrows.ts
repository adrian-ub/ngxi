import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiAnticlockwiseDownwardsAndUpwardsOpenCircleArrowsIcon],svg[arcticons-emoji-anticlockwise-downwards-and-upwards-open-circle-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.94 13.842c-5.62-3.781-13.24-2.292-17.02 3.327a12.26 12.26 0 0 0-2.09 6.83v6.33m5.403 3.827a12.13 12.13 0 0 0 6.847 2.092c6.765 0 12.249-5.484 12.249-12.249v-6.33"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.173 23.999l-6.343 6.33l-6.33-6.33h0m24.34 0l6.489-6.33l6.171 6.33"></svg:path>`,
})
export class ArcticonsEmojiAnticlockwiseDownwardsAndUpwardsOpenCircleArrowsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
