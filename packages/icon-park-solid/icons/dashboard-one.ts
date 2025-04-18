import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDashboardOneIcon],svg[icon-park-solid-dashboard-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24.778 7c-11.046 0-20 8.954-20 20c0 5.23 1.713 10.436 5 14h30c3.286-3.564 5-8.77 5-14c0-11.046-8.954-20-20-20"></svg:path><svg:circle cx="24.778" cy="30" r="4" fill="currentColor"></svg:circle><svg:path d="M24.778 20v6m0-14v2m-15 14h2m2-10l1.414 1.414M37.778 28h2m-5-8.586L36.192 18"></svg:path></svg:g>`,
})
export class IconParkSolidDashboardOneIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
