import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKlutterIcon],svg[arcticons-klutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.272 31.591l10.238-6.785m1.404 3.475L22.14 13.325m9.588 3.083L25.86 34.673M9.306 24L2.5 17.526l9.611-1.531l-1.399-8.946l8.747 3.997L24 3.049l4.541 8l8.747-3.998l-1.4 8.945l9.612 1.531L38.694 24l6.806 6.474l-9.611 1.531l1.399 8.946l-8.747-3.998L24 44.952l-4.541-8.001l-8.747 3.998l1.4-8.945l-9.612-1.53z"></svg:path>`,
})
export class ArcticonsKlutterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
