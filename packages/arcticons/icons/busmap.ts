import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBusmapIcon],svg[arcticons-busmap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.346 36.657l-2.082-.452l.252 2.233"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.264 36.205c3.083 5.139 14.389 5.139 17.472 0"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="15.778" cy="28.497" r="4.111"></svg:circle><svg:circle cx="32.222" cy="28.497" r="4.111"></svg:circle><svg:circle cx="15.778" cy="28.497" r="1.542"></svg:circle><svg:circle cx="32.222" cy="28.497" r="1.542"></svg:circle></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M19.889 28.497h8.222m-16.444 0H7.556c-1.028 0-2.056-1.028-2.056-2.056V9.997c0-1.028 1.028-2.056 2.056-2.056h32.889c1.027 0 2.055 1.028 2.055 2.055v16.445c0 1.028-1.028 2.056-2.056 2.056h-4.11"></svg:path><svg:path d="m5.5 20.274l8.222-2.57H38.39v-6.68H5.5m8.222 0v6.68m9.25.001v-6.68m9.25 6.68v-6.68"></svg:path></svg:g>`,
})
export class ArcticonsBusmapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
