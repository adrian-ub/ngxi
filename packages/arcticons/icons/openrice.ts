import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpenriceIcon],svg[arcticons-openrice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.412 23.081c8.13-29.206 36.288-16.693 37.62.225"></svg:path><svg:path d="M42.342 19.725c14.985 8.588-53.608 6.593-35.897.146"></svg:path><svg:path d="M3.5 21.939S5.682 42.42 24.222 42.42s20.263-20.266 20.263-20.266"></svg:path></svg:g>`,
})
export class ArcticonsOpenriceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
