import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsAnalyticsLineIcon],svg[majesticons-analytics-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16v-5m4 5V8m4 8v-2m2-10H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MajesticonsAnalyticsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
