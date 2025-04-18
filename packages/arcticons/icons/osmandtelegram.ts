import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOsmandtelegramIcon],svg[arcticons-osmandtelegram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.63 16.18a2.1 2.1 0 0 0-1 .21l-12.21 5.5a1.25 1.25 0 0 0 .09 2.45L20.83 26l1.61 4.29a1.25 1.25 0 0 0 2.45.09l5.5-12.21c.49-1.08.09-1.88-.76-1.94Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.66 3.2c-6.1 1.61-12.34 8.13-13.77 14.28A19.64 19.64 0 0 0 19 41.13a3 3 0 0 1 1.4.87l3.24 3.41a.5.5 0 0 0 .7 0h0L27.59 42a3 3 0 0 1 1.41-.86A19.66 19.66 0 0 0 18.66 3.2M24 33.88a11.7 11.7 0 1 1 .06 0Z"></svg:path>`,
})
export class ArcticonsOsmandtelegramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
