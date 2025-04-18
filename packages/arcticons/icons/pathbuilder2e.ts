import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPathbuilder2eIcon],svg[arcticons-pathbuilder2e-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.735 19.31l.46 17.94l-1.98 3.07l-2.01-3.07l.44-17.94m17.48.49l-11.28.95l-.38 8.64m3.05-5.82l7.76.2m-7.87 2.76l6.02.91m-7 1.92l4.97 1.5M7.875 19.72l11.29.95l.37 8.64m-3.04-5.82l-7.77.2m7.87 2.76l-6.02.91m7.01 1.92l-4.98 1.5m5.68-13.75h12.14m-6.3-9.35l.01 7.27"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5c11.876 0 21.5 9.624 21.5 21.5S35.876 45.5 24 45.5S2.5 35.876 2.5 24S12.124 2.5 24 2.5"></svg:path>`,
})
export class ArcticonsPathbuilder2eIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
