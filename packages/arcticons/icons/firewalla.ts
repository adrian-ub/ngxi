import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFirewallaIcon],svg[arcticons-firewalla-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.801 10.555c2.418 7.407-2.33 17.08-5.772 21"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.327 40.16c8.401-17.754-14.21-21.544-3.885-35.66c.262 5.686 12.287 6.012 12.287 18.69s-12.7 20.31-12.7 20.31c-19.04-14.85-12.853-26.845-6.383-32.334c4.51 8.692 3.876 11.078 1.317 16.322"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.029 43.5c5.707-16.715-10.482-11.491-9.82-28.59"></svg:path>`,
})
export class ArcticonsFirewallaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
