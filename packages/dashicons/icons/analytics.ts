import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsAnalyticsIcon],svg[dashicons-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18V2H2v16zM16 5H4V4h12zM7 7v3h3c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m1 2V7c1.1 0 2 .9 2 2zm8-1h-4V7h4zm0 3h-4V9h4zm0 2h-4v-1h4zm0 3H4v-1h12z"></svg:path>`,
})
export class DashiconsAnalyticsIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
