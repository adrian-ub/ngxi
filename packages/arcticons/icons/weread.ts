import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWereadIcon],svg[arcticons-weread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 36.526H21c1.703 0 2.345 1.497 3 2.55c.645-1.025 1.303-2.55 3-2.55h15.5m-2.846-8.202c0 2.613-3.024 5.011-6.41 5.011a5.1 5.1 0 0 1-2.385-.372l-1.749.823l.164-1.743c-1.45-.725-1.92-2.786-1.88-3.72c.113-2.61 2.745-4.731 6.13-4.731s6.13 2.119 6.13 4.732"></svg:path><svg:circle cx="32.303" cy="27.575" r=".75" fill="currentColor"></svg:circle><svg:circle cx="35.521" cy="27.575" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsWereadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
