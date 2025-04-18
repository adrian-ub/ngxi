import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsActiondashIcon],svg[arcticons-actiondash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.59 15.74V7.67a3.17 3.17 0 0 0-3.17-3.17H15.58a3.17 3.17 0 0 0-3.17 3.17v8.07a3.15 3.15 0 0 0 .95 2.26l6.12 6l-6.12 6a3.15 3.15 0 0 0-.95 2.26v8.07a3.17 3.17 0 0 0 3.17 3.17h16.84a3.17 3.17 0 0 0 3.17-3.17v-8.07a3.15 3.15 0 0 0-1-2.26l-6.12-6l6.12-6a3.15 3.15 0 0 0 1-2.26m-6.33 17.85v3.58H18.74v-3.58L24 28.43Zm0-19.18L24 19.57l-5.26-5.16v-3.58h10.52Z"></svg:path>`,
})
export class ArcticonsActiondashIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
