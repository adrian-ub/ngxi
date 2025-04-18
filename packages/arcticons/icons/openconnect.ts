import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpenconnectIcon],svg[arcticons-openconnect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5c-4.5 0-8.4 2.6-10.95 6.18A22.93 22.93 0 0 0 9.07 24a22.93 22.93 0 0 0 4 13.32c2.55 3.59 6.45 6.18 11 6.18s8.4-2.59 11-6.18a22.93 22.93 0 0 0 4-13.32a22.93 22.93 0 0 0-4-13.32C32.4 7.1 28.5 4.5 24 4.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.74 13v6.53a3.5 3.5 0 0 0 1.9 3.18v10.91a1.36 1.36 0 1 0 2.72 0V22.74a3.56 3.56 0 0 0 1.9-3.21V13Z"></svg:path>`,
})
export class ArcticonsOpenconnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
