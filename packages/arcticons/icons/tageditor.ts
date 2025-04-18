import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTageditorIcon],svg[arcticons-tageditor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 10.905h-6.522v21.668m0 0a4.522 4.522 0 1 1-9.043 0a4.522 4.522 0 0 1 9.043 0M27.33 10.905H5.5m21.83 8.616H5.5m13.248 8.616H5.5"></svg:path>`,
})
export class ArcticonsTageditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
