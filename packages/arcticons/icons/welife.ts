import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWelifeIcon],svg[arcticons-welife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.62 42.5V17.28L24.175 5.5L42.38 17.28V42.5l-15.62-8.02c-1.953-1.001-3.432-.982-5.366 0z"></svg:path>`,
})
export class ArcticonsWelifeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
