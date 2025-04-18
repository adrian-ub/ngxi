import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsColorPickerIcon],svg[arcticons-color-picker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m37.26 16.775l3.99-3.99a4.265 4.265 0 0 0-6.03-6.033l-3.992 3.991l-3.026-3.025l-2.962 2.962l12.077 12.076l2.962-2.962zM11.002 30.97a4.25 4.25 0 0 0-1 4.405l-3.96 3.958a1.853 1.853 0 1 0 2.621 2.62L12.618 38c1.496.52 3.22.197 4.416-.998L32.076 21.96l-6.032-6.032z"></svg:path>`,
})
export class ArcticonsColorPickerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
