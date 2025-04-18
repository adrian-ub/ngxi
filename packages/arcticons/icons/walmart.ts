import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWalmartIcon],svg[arcticons-walmart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 15.42V4.5m7.41 15.2l9.46-5.46m-9.46 14.02l9.46 5.46M24 32.58V43.5m-7.41-15.24l-9.46 5.46m9.46-14.02l-9.46-5.46"></svg:path>`,
})
export class ArcticonsWalmartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
