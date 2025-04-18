import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMbankCzIcon],svg[arcticons-mbank-cz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.22 22.13a6.134 6.134 0 0 1 5.993-6.232a6.134 6.134 0 0 1 5.993 6.232v9.971M13.22 15.898v16.204"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.206 22.13a5.998 5.998 0 1 1 11.986 0v9.971"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="6.25" d="M13.22 15.898h-2.403"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="6.25" d="M13.22 5.398v6.479m0 24.723v6.002M25.206 2.746v9.13m.02 24.724l-.02 8.793M37.154 6.994v4.883m0 24.723v4.406"></svg:path>`,
})
export class ArcticonsMbankCzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
