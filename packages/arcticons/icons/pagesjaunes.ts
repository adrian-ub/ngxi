import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPagesjaunesIcon],svg[arcticons-pagesjaunes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.162 8.839v4.933M42.5 9.44v11.01c0 6.498-6.257 18.711-17.146 18.711C12.359 39.161 5.5 28.994 5.5 28.994"></svg:path>`,
})
export class ArcticonsPagesjaunesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
