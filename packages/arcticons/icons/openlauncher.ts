import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpenlauncherIcon],svg[arcticons-openlauncher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="8" x="5.5" y="34.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29a4 4 0 0 1 4 4h0a4 4 0 0 1-4 4h-25"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 38.5v-29a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v25"></svg:path>`,
})
export class ArcticonsOpenlauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
