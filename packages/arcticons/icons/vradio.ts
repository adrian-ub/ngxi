import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVradioIcon],svg[arcticons-vradio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11.804h3.786l8.738 24.392m7.315-20.422l-7.315 20.422m18.45-20.422l-7.315 20.422m8.597-24.392H25.762m13.907 0c3.313 0 4.439 4.247 3.526 7.135c-.905 2.864-2.846 5.874-7.41 6.117l4.223 11.14"></svg:path>`,
})
export class ArcticonsVradioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
