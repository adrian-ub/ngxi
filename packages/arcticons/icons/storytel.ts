import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStorytelIcon],svg[arcticons-storytel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.67 43.5c4.47-5.72 32.81-4.74 32.81-22.5c0-12.28-9.7-16.5-16.48-16.5S6.52 10.42 6.52 26.42c0 12.43 2.15 17.08 2.15 17.08"></svg:path>`,
})
export class ArcticonsStorytelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
