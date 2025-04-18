import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWaterdrinkreminderIcon],svg[arcticons-waterdrinkreminder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.55 29.61a7.95 7.95 0 1 0 8 7.94h0a7.94 7.94 0 0 0-8-7.93Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.29 43.5H17.12a2.34 2.34 0 0 1-2.33-2.08L10.8 5.8A1.17 1.17 0 0 1 12 4.5h24a1.17 1.17 0 0 1 1.2 1.3l-2.67 23.81"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.21 17c7.42 0 7.42 2.9 14.79 2.9c4.63 0 6.37-1.15 8.83-2m-3.28 19.65v-5.46m0 5.46l3.22 2.1"></svg:path>`,
})
export class ArcticonsWaterdrinkreminderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
