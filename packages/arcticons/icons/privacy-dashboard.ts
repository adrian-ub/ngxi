import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrivacyDashboardIcon],svg[arcticons-privacy-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.753 18.688a4.634 4.634 0 0 1 9.269 0m0 0v2.789m-9.269-2.789v2.752"></svg:path><svg:circle cx="22.387" cy="27.343" r="1.613" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.387 30.534v-1.528"></svg:path><svg:rect width="12.848" height="12.848" x="15.963" y="21.098" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.545"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.447 34.748A21.499 21.499 0 1 1 23.828 2.5"></svg:path>`,
})
export class ArcticonsPrivacyDashboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
