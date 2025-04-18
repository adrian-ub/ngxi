import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftCompanyPortalIcon],svg[arcticons-microsoft-company-portal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.223 32.383H6.541a1.025 1.025 0 0 1-1.027-1.027V7.735c0-.57.458-1.027 1.027-1.027h34.918c.57 0 1.027.458 1.027 1.027v23.621c0 .57-.458 1.027-1.027 1.027H26.256"></svg:path><svg:circle cx="18.394" cy="20.831" r="6.162" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.064 41.292h20.415c.996-17.147-21.246-17.879-20.415 0m9.559-34.584v8.007m12.083-8.007v25.675m12.78-12.838H24.428m-18.914 0H12.3m17.475 6.309h12.711"></svg:path>`,
})
export class ArcticonsMicrosoftCompanyPortalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
