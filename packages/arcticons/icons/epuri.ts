import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEpuriIcon],svg[arcticons-epuri-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.584 8.545C40.884 11.842 45.5 18.603 45.5 26c0 10.77-9.626 19.5-21.5 19.5S2.5 36.77 2.5 26c0-10.416 9.026-18.993 20.497-19.48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.421 9.866c2.509 0 5.421-3.366 5.421-3.366s-2.912-3.366-5.421-3.366S25 6.5 25 6.5s2.912 3.366 5.421 3.366m-12.128 6.055s2.457 2.487 9.994 2.487m-12.794 3.55h13.438l-10.48 12.855c-.398.526-1.147 1.235-2.183 1.26c-1.728.043-2.69-2.075-.81-4.034c1.306-1.36 3.868-3.151 7.64-3.151c3.436 0 2.63 7.19 7.37 7.19c1.559 0 3.1-1.022 3.1-3.585M25 7.875c0 .345-.31.625-1 .625s-1-.28-1-.625v-4.75c0-.345.31-.625 1-.625s1 .28 1 .625z"></svg:path><svg:circle cx="32.786" cy="26.727" r=".75" fill="currentColor"></svg:circle><svg:circle cx="41.123" cy="26.727" r=".75" fill="currentColor"></svg:circle><svg:circle cx="36.954" cy="21.1" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.326 37.674l-2.77 2.77m25.737-25.737l3.15-3.15"></svg:path>`,
})
export class ArcticonsEpuriIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
