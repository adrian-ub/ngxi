import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsContactsIcon],svg[arcticons-contacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.5 4.5h-23a4 4 0 0 0-4 4v31a4 4 0 0 0 4 4h23a4 4 0 0 0 4-4v-31a4 4 0 0 0-4-4M24 13.275A5.362 5.362 0 1 1 24 24a5.362 5.362 0 1 1 0-10.725m0 12.675c5.966 0 10.725 1.667 10.725 3.656v5.119h-21.45v-5.119c0-1.989 4.758-3.656 10.725-3.656"></svg:path>`,
})
export class ArcticonsContactsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
