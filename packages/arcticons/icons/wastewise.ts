import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWastewiseIcon],svg[arcticons-wastewise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 14.25h27M18.5 10a5.5 5.5 0 1 1 11 0M13 18.5v22.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0 5.5 0V18.5m1.375 24.632A2.75 2.75 0 0 0 29.5 40.75a2.75 2.75 0 1 0 5.5 0V18.5m-5.5 22.25V18.5m-11 22.25V18.5"></svg:path>`,
})
export class ArcticonsWastewiseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
