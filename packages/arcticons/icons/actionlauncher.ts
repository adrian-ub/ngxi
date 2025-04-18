import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsActionlauncherIcon],svg[arcticons-actionlauncher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M42.63 21.85L25.94 7.64a3 3 0 0 0-3.88 0L5.37 21.85A2.45 2.45 0 0 0 7 26.17h2.09v13.28a1.63 1.63 0 0 0 1.63 1.63h7.35a1.63 1.63 0 0 0 1.63-1.63v-4.86a4.3 4.3 0 1 1 8.6 0v4.86a1.63 1.63 0 0 0 1.63 1.63h7.35a1.63 1.63 0 0 0 1.63-1.63V26.17H41a2.45 2.45 0 0 0 1.63-4.32ZM24 28.3a4.3 4.3 0 1 1 4.3-4.3a4.31 4.31 0 0 1-4.3 4.3Z"></svg:path>`,
})
export class ArcticonsActionlauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
