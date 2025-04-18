import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsWelcomeViewSiteIcon],svg[dashicons-welcome-view-site-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1m-8-8c2.3 0 4.4 1.14 6 3c-1.6 1.86-3.7 3-6 3s-4.4-1.14-6-3c1.6-1.86 3.7-3 6-3m2 3c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2s2-.9 2-2m2 8h3v1H3v-1h3v-1h8z"></svg:path>`,
})
export class DashiconsWelcomeViewSiteIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
