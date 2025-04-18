import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAirbrushIcon],svg[arcticons-airbrush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.79 36.222l5.73-9.913c1.814-3.137 6.036-4.31 9.2-2.533c1.231.688 2.373 1.75 3.28 3.016l6.255 10.81a6.565 6.565 0 1 0 11.365-6.577L29.68 10.393a6.565 6.565 0 0 0-11.365 0L6.38 31.029a6.567 6.567 0 0 0 11.369 6.577l6.25-10.814"></svg:path>`,
})
export class ArcticonsAirbrushIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
