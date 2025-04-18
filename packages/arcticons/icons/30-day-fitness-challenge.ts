import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons30DayFitnessChallengeIcon],svg[arcticons-30-day-fitness-challenge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="12.014" cy="14.078" r="1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.068 13.011a15.476 15.476 0 1 1-1.906 2.3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.525 26.159a4.238 4.238 0 0 0 8.475 0V21.84a4.238 4.238 0 0 0-8.475 0Zm-6.247-2.157a3.2 3.2 0 0 0 3.197-3.198h0a3.2 3.2 0 0 0-3.197-3.197m0 12.789a3.2 3.2 0 0 0 3.197-3.197v0a3.2 3.2 0 0 0-3.197-3.197m-5.277 5.315c.884.74 1.837 1.08 3.978 1.08h1.299"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14 18.672c.885-.738 1.84-1.074 3.98-1.068l1.3.003m-3.26 6.395h3.258"></svg:path>`,
})
export class Arcticons30DayFitnessChallengeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
