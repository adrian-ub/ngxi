import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHappnIcon],svg[arcticons-happn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.733 4.5c2.89 6.985 5.789 13.96 6.608 19.037c.81 5.077-.443 8.238-2.768 9.057s-5.723-.705-6.755-3.071c-1.032-2.358.303-5.56 2.3-7.672c1.999-2.113 4.66-3.144 7.468-3.832c2.809-.688 5.765-1.04 8.352-.467c2.58.565 4.79 2.055 5.83 4.454c1.04 2.391.909 5.683.311 8.442c-.606 2.751-1.687 4.979-3.226 7.058c-1.54 2.088-3.537 4.037-5.527 5.994"></svg:path>`,
})
export class ArcticonsHappnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
