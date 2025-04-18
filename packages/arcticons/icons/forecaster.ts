import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsForecasterIcon],svg[arcticons-forecaster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.659 8.271a3.303 3.303 0 0 0-4.189 3.187c-3.533-.706-3.533 4.24-.707 4.24h7.78a2.9 2.9 0 0 0 1.995-.686"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.22 2.72a21.5 21.5 0 0 1-21.5 21.5m2.632 10.486l5.377-6.015L25.39 45.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.431 31.789l10.78-13.139l8 10.808"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.773 40.207l15.948-14.988l6.609 8.201"></svg:path>`,
})
export class ArcticonsForecasterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
