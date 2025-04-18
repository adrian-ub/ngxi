import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHyveeIcon],svg[arcticons-hyvee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.163 4.5v31.2c0 5.426 4.821 7.22 9.75 7.8V16.875h5.85V43.5c5.106-.284 10.075-1.953 10.075-7.8V4.5H26.762v8.775h-5.85V4.5Z"></svg:path>`,
})
export class ArcticonsHyveeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
