import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIclickerIcon],svg[arcticons-iclicker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="25.132" cy="24.073" r="1.894" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.509 23.813l-5.56-3.21a.3.3 0 0 0-.45.26v6.42a.3.3 0 0 0 .45.26l5.56-3.21a.3.3 0 0 0 0-.52m32.706-.26L16.668 8.226a.6.6 0 0 0-.9.52V39.4c0 .462.5.75.9.52l26.547-15.328a.6.6 0 0 0 0-1.04"></svg:path>`,
})
export class ArcticonsIclickerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
