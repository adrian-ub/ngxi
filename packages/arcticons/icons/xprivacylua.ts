import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXprivacyluaIcon],svg[arcticons-xprivacylua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="31.761" cy="31.578" r="2.56"></svg:circle><svg:path d="m8.447 20.749l6.1-6.105l1.437 7.913l8.029-.03l.065-11.005M19.974 37.72l4.164-4.163l-.228-10.848"></svg:path><svg:path d="m33.867 14.588l-1.974 7.927l-7.938.022"></svg:path><svg:path d="M33.238 37.597a17 17 0 0 1-9.683 3.034c-9.519 0-17.235-7.864-17.235-17.566c0-9.7 7.716-17.565 17.235-17.565h0c9.519 0 17.235 7.864 17.235 17.565h0a17.78 17.78 0 0 1-3.687 10.858"></svg:path><svg:path d="M24.135 11.471a14 14 0 0 0 7.533 3.052c.73.063 1.464.067 2.191.012"></svg:path><svg:circle cx="39.092" cy="39.911" r="2.589"></svg:circle></svg:g>`,
})
export class ArcticonsXprivacyluaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
