import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsThemesIcon],svg[arcticons-themes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 24.974V38.5a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4V23.24a2.915 2.915 0 0 1-4.869-2.166V15.72c0-1.618-1.302-2.921-2.92-2.921s-2.922 1.303-2.922 2.921v1.46c0 1.619-1.303 2.922-2.92 2.922s-2.922-1.303-2.922-2.921v-1.46c0-1.62-1.303-2.922-2.921-2.922s-2.921 1.303-2.921 2.921v9.25c0 1.618-1.303 2.921-2.921 2.921s-2.921-1.303-2.921-2.92v-9.25a2.915 2.915 0 0 0-2.921-2.922v.005a2.915 2.915 0 0 0-2.922 2.92v6.33a2.915 2.915 0 0 1-2.92 2.92M42.5 9.5a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4z"></svg:path>`,
})
export class ArcticonsThemesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
