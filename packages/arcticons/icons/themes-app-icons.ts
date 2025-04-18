import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsThemesAppIconsIcon],svg[arcticons-themes-app-icons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.5 26h-33a2 2 0 0 0-2 2v12.5a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2V28a2 2 0 0 0-2-2"></svg:path><svg:rect width="16.5" height="16.5" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:rect width="6.452" height="6.452" x="26" y="15.548" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:rect width="6.452" height="6.452" x="26" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:rect width="6.452" height="6.452" x="36.048" y="15.548" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:rect width="6.452" height="6.452" x="36.048" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect>`,
})
export class ArcticonsThemesAppIconsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
