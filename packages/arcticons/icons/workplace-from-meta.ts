import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWorkplaceFromMetaIcon],svg[arcticons-workplace-from-meta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.403 44.744a21.5 21.5 0 0 1-23.176-33.1C12.41 4.24 21.64.99 30.403 3.21c12.289 3.11 20.612 18.994 7.933 32.77l-8.503-19.93l-8.503 19.93l-8.504-19.93"></svg:path>`,
})
export class ArcticonsWorkplaceFromMetaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
