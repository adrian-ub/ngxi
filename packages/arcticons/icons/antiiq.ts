import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAntiiqIcon],svg[arcticons-antiiq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 24.737h4.481l5.925 4.476l4.468-7.447l4.463 17.857l5.956-31.246l4.469 20.82l4.531-4.46H43.5m-20.329-1.641h14.35"></svg:path>`,
})
export class ArcticonsAntiiqIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
