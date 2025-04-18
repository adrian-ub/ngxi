import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAskiIcon],svg[arcticons-aski-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" d="M2.611 21.816c28.792 4.998 13.471 9.124 39.557 13.68m-38.855-5.64c15.522.032 9.146 5.875 36.422 8.795M7.006 37.17c16.994-.618 5.482 3.202 26.653 6.038"></svg:path><svg:path fill="none" stroke="currentColor" d="M45.468 25.173c-18.481-.965-11.291 2.62-23.292 2.773"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.51 19.412c.5.6 1.1.9 2 .9h1.2c1.1 0 2-.9 2-2h0c0-1.1-.9-2-2-2h-1.3c-1.1 0-2-.9-2-2h0c0-1.1.9-2 2-2h1.2c.9 0 1.5.2 2 .9m-8.272 4.4h-3.6m-.9 2.7l2.7-8l2.7 8m10.452-8v8m0-2.8l4.2-5.2m0 8l-3.2-4m6.672-4v8"></svg:path><svg:circle cx="35.362" cy="9.858" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsAskiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
