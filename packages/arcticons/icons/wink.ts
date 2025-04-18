import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWinkIcon],svg[arcticons-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.102 5.5l4.292 11.035m-7.357-3.678l10.422-3.679M8.128 19.6v11.648m12.874-7.357l14.713-4.904m2.452 11.648Q27.133 49.026 5.541 38.91"></svg:path>`,
})
export class ArcticonsWinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
