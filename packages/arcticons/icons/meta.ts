import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetaIcon],svg[arcticons-meta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 18.657c-2.498-4.025-5.528-7.102-9.021-7.102S4.5 16.182 4.5 27.007c0 7.98 2.151 9.438 4.441 9.438c5.899 0 12.168-12.19 15.059-17.788m0 0c2.498-4.025 5.529-7.102 9.021-7.102S43.5 16.182 43.5 27.007c0 7.98-2.151 9.438-4.441 9.438c-5.899 0-12.168-12.19-15.059-17.788"></svg:path>`,
})
export class ArcticonsMetaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
