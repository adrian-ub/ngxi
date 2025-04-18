import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZeronetIcon],svg[arcticons-zeronet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 4.5l-13.73 7.92v15.86l6.44-3.75v-8.39L24 11.93l7.19 4.15l-20.92 12.2v7.3L24 43.5l13.73-7.93V19.72l-6.44 3.75v8.39L24 36.07l-7.19-4.15l20.92-12.2v-7.29Z"></svg:path>`,
})
export class ArcticonsZeronetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
