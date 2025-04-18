import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRarevisionIcon],svg[arcticons-rarevision-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.5 19.74l-6.872 5.601c-2.573 2.098-1.286 3.915 0 4.963l6.872 5.6M5.5 23.94h31.85M5.5 27.8h28.648M5.5 31.662h31.795M5.5 35.523h36.533M5.599 39.384H42.4M16.853 18.245h-.001m-.137-7.609h.001m-2.973 10.529v-.001m-1.673.001v-.001m-1.674.001v-.001"></svg:path>`,
})
export class ArcticonsRarevisionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
