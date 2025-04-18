import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsControlScreenOrientationIcon],svg[arcticons-control-screen-orientation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="18.974" height="37" x="14.513" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.795" ry="3.795"></svg:rect><svg:rect width="37" height="18.974" x="5.5" y="14.513" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.795" ry="3.795"></svg:rect>`,
})
export class ArcticonsControlScreenOrientationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
