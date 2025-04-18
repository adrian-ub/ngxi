import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQuitTrackerIcon],svg[arcticons-quit-tracker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 31.223h5.395v7.792H4.5zm9.629 0H43.5v7.792H14.129zm-9.553-4.356c3.316-16.68 14.68-1.68 15.934-17.882"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.646 26.848c.807-11.148 13.788.912 15.551-17.806"></svg:path>`,
})
export class ArcticonsQuitTrackerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
