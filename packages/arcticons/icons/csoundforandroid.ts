import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCsoundforandroidIcon],svg[arcticons-csoundforandroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.43 31.87a5.25 5.25 0 0 1-4.56 2.65h0a5.26 5.26 0 0 1-5.26-5.26v-3.42a5.26 5.26 0 0 1 5.26-5.26h0a5.25 5.25 0 0 1 4.56 2.64v1.25m3.44 6.42v1.32A5.89 5.89 0 0 0 29 34.52h3.11a5.26 5.26 0 0 0 5.25-5.26h0A5.25 5.25 0 0 0 32.14 24H28.7a5.25 5.25 0 0 1-5.24-5.26h0a5.26 5.26 0 0 1 5.24-5.26h3.12A5.89 5.89 0 0 1 37 15.79v1.32"></svg:path>`,
})
export class ArcticonsCsoundforandroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
