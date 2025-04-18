import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPacklistIcon],svg[arcticons-packlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.15 13.6v-2.28a2.93 2.93 0 0 1 2.93-2.92h5.85a2.92 2.92 0 0 1 2.92 2.92v2.28m-21.45 0H10v26H8.4a3.91 3.91 0 0 1-3.9-3.9V17.5a3.91 3.91 0 0 1 3.9-3.9m1.6 0h28v26H10Zm28 0h1.6a3.91 3.91 0 0 1 3.9 3.9v18.2a3.91 3.91 0 0 1-3.9 3.9H38z"></svg:path>`,
})
export class ArcticonsPacklistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
