import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsParakeyIcon],svg[arcticons-parakey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 36.5c0-3.324 2.676-6 6-6h14c3.324 0 6-2.676 6-6v-14c0-3.324-2.676-6-6-6H17c-3.324 0-6 2.676-6 6v7c7.18 0 13 5.82 13 13s-5.82 13-13 13z"></svg:path><svg:circle cx="15.515" cy="23.985" r="1.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsParakeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
