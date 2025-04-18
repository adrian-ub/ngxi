import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUklonIcon],svg[arcticons-uklon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.696 14.778c0-5.735 32.5-12.427 35.369-7.647c3.823 5.735-1.912 35.369-7.648 35.369c-6.691 0-27.722-20.074-27.722-27.722z"></svg:path>`,
})
export class ArcticonsUklonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
