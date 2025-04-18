import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSwishIcon],svg[arcticons-swish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.5 21.5 0 0 0 8.8 39.2l6.91-6.9A16.61 16.61 0 1 1 39.2 8.8A21.43 21.43 0 0 0 24 2.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 45.5A21.5 21.5 0 0 0 39.2 8.8l-6.91 6.9A16.61 16.61 0 1 1 8.8 39.2A21.43 21.43 0 0 0 24 45.5"></svg:path>`,
})
export class ArcticonsSwishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
