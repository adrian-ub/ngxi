import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDecathlonIcon],svg[arcticons-decathlon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.68 20.946c-4.68 5.509-2.254 16.552 5.334 12.2c1.887-.978 6.31-5.03 14.76-17.551v20.761c-2.421 1.654-16.97 8.473-22.928 1.003c-2.492-3.4-2.492-7.986.186-12.455H6.03q4.005-7.215 12.408-12.36C36.408 1.792 43.6 9.87 43.95 14.5c.72 8.497-6.495 14.875-10.289 18.577v-6.333c9.195-9.054 4.795-14.035 3.794-14.85c-2.047-2.37-7.865-4.53-13.13-2.392"></svg:path>`,
})
export class ArcticonsDecathlonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
