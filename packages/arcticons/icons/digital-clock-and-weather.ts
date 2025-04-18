import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDigitalClockAndWeatherIcon],svg[arcticons-digital-clock-and-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.421 21.089l2-1.089v8m24.152 0v-8l-4.294 5.374h5.3M15.096 22.65a2.653 2.653 0 0 1 3.176-2.6c1.111.214 1.999 1.175 2.11 2.302c.081.837-.184 1.664-.762 2.172c-1.072.94-4.524 3.476-4.524 3.476h5.3"></svg:path><svg:circle cx="22.871" cy="26.65" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22.871" cy="21.35" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.347 27.325c.552.463 1.148.675 2.487.675h.312a2 2 0 0 0 2-2h0a2 2 0 0 0-2-1.999m-2.8-3.333c.553-.461 1.15-.672 2.49-.668l.31.002a2 2 0 0 1 2 2h0a2 2 0 0 1-2 1.999m-1.537 0h1.537"></svg:path>`,
})
export class ArcticonsDigitalClockAndWeatherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
