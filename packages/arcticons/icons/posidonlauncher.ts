import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPosidonlauncherIcon],svg[arcticons-posidonlauncher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31 8.13V22a7 7 0 0 1-4 6.27V4.5h-6v23.81A7 7 0 0 1 17 22V8.13l-6 3.24V22a13 13 0 0 0 10 12.64v8.86h6v-8.87A13 13 0 0 0 37 22V11.37Z"></svg:path>`,
})
export class ArcticonsPosidonlauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
