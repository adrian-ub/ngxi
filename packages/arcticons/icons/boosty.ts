import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBoostyIcon],svg[arcticons-boosty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.819 5.5l-6.98 25.064h4.724L18.946 42.35l11.47-16.626h-5.033l4.337-11.2c7.698 1.145 11.05 7.409 8.706 14.47C36.079 36.06 28.81 42.5 19.073 42.5c-9.21 0-11.23-6.839-9.834-11.86L16.22 5.5z"></svg:path>`,
})
export class ArcticonsBoostyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
