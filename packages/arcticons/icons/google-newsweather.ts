import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoogleNewsweatherIcon],svg[arcticons-google-newsweather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h26.83v-9.17a2 2 0 0 1 2-2H44V10a2 2 0 0 0-2-2Zm38 20.83L32.83 40M9.08 33.42H26.5M9.08 14.58h29.84M9.08 24H26.5"></svg:path>`,
})
export class ArcticonsGoogleNewsweatherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
