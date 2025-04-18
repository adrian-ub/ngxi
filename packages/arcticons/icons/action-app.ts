import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsActionAppIcon],svg[arcticons-action-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.734 34.877l6.242-19.2c.443-1.362 1.553-2.554 2.977-2.554h6.348c1.425 0 2.391 1.139 2.167 2.554l-3.046 19.2M28.604 26.05h13.22M24.346 13.127l-7.348 21.75m.426-21.75l-7.347 21.75m1.771-21.75L4.5 34.877"></svg:path>`,
})
export class ArcticonsActionAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
