import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonoclesBrowserIcon],svg[arcticons-monocles-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.005 29.023s1.874-1.47 3.021-.909c3.847 1.881 5.53 7.56 13.556 3.215c-5.478 9.967-14.201 5.72-16.577 2.231c-2.375 3.489-11.098 7.736-16.576-2.23c8.026 4.343 9.709-1.335 13.556-3.216c1.147-.56 3.02.909 3.02.909m18.735-.66v-6.9"></svg:path><svg:circle cx="33.53" cy="17.247" r="5.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.261 28.363v-6.9"></svg:path><svg:circle cx="14.47" cy="17.247" r="5.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="5.262" cy="17.247" r=".75" fill="currentColor"></svg:circle><svg:circle cx="42.74" cy="17.247" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMonoclesBrowserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
