import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsContactsAltIcon],svg[arcticons-contacts-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5a9.237 9.237 0 1 1-9.22 9.254v-.017A9.237 9.237 0 0 1 24 5.5m0 21.897c10.32 0 18.457 6.873 18.457 10.296V42.5H5.543v-4.893c0-3.423 8.136-10.21 18.457-10.21"></svg:path>`,
})
export class ArcticonsContactsAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
