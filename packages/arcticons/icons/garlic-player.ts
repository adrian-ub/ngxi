import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGarlicPlayerIcon],svg[arcticons-garlic-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.717 39.201c-8.112-5.067-8.112-15.2-1.012-19.757m28.892-.069c7.786 5.717 5.567 15.77-1.534 19.826M25.918 26.022h5.067m-7.601 7.101c-5.067-.511-7.6-4.056-7.09-7.6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.862 8.799c0 9.123 9.123 8.112 13.69 13.679c4.556 5.578.5 15.712-11.657 15.2c-19.257-.5-15.2-16.723-4.055-18.745"></svg:path>`,
})
export class ArcticonsGarlicPlayerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
