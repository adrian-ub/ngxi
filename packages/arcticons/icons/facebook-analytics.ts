import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFacebookAnalyticsIcon],svg[arcticons-facebook-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.475 5.5H9.5c-2.216 0-4 1.785-4 4v27.976l15.988-15.988l5.024 5.024L42.5 10.524V38.5c0 2.216-1.784 4-4 4H10.525"></svg:path>`,
})
export class ArcticonsFacebookAnalyticsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
