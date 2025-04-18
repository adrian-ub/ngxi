import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesAwardHalfStarSolidIcon],svg[bubbles-award-half-star-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.714 0a1.19 1.19 0 0 0-1.079.694L8.785 4.57l-4.048.616a1.2 1.2 0 0 0-.958.816a1.24 1.24 0 0 0 .288 1.268l2.955 3.076l-.692 4.222a1.23 1.23 0 0 0 .502 1.214a1.17 1.17 0 0 0 1.247.07l3.635-1.997a.57.57 0 0 0 .572-.571V.57a.57.57 0 0 0-.572-.57"></svg:path>`,
})
export class BubblesAwardHalfStarSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
