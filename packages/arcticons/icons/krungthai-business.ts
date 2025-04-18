import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKrungthaiBusinessIcon],svg[arcticons-krungthai-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.01 4.5l3.327 6.985M10.663 43.5l8.153-27.009l5.733 19.384L34.01 4.5l-6.456 5.705"></svg:path>`,
})
export class ArcticonsKrungthaiBusinessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
