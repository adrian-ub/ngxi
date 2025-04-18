import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons1010KlooniIcon],svg[arcticons-1010-klooni-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 4.5l17.92 9.75v19.5L24 43.5L6.08 33.75v-19.5ZM6.08 14.25L24 24m17.92-9.75L24 24m0 19.5V24"></svg:path>`,
})
export class Arcticons1010KlooniIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
