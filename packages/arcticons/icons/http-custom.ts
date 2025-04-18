import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHttpCustomIcon],svg[arcticons-http-custom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.123 44.5L6.75 34.25V13.898L24.123 3.5L41.25 13.898V34.25zM11.97 16.042v16.237m.038-8.119h9.246m0-13.638V37.65"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.793 17.717l-9.826-6.037v25.157l9.826-6.061"></svg:path>`,
})
export class ArcticonsHttpCustomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
