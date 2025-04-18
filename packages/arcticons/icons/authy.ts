import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAuthyIcon],svg[arcticons-authy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.76 8.91a2.38 2.38 0 0 1 1.7.7l6.5 6.5A12.14 12.14 0 0 1 40.19 33l-.11.13l-.08.07v.06l-.13.12a12.15 12.15 0 0 1-16.91-.24l-6.49-6.49a2.41 2.41 0 0 1 3.4-3.41l6.49 6.5a7.23 7.23 0 1 0 10.19-10.23L30.06 13a2.4 2.4 0 0 1 1.7-4.1Zm-15.1 2.41a12.12 12.12 0 0 1 8.42 3.54l6.49 6.5a2.4 2.4 0 0 1-3.4 3.39l-6.49-6.49a7.23 7.23 0 1 0-10.23 10.23L17.94 35a2.4 2.4 0 0 1-3.4 3.4L8 31.9A12.15 12.15 0 0 1 7.81 15l.11-.13l.08-.07v-.06l.13-.11a12.1 12.1 0 0 1 8.49-3.31Z"></svg:path>`,
})
export class ArcticonsAuthyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
