import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAnalyticsReferenceIcon],svg[carbon-analytics-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zM30 4h-7v2h3.586L19 13.586l-4.293-4.293a1 1 0 0 0-1.414 0L8 14.586L9.414 16L14 11.414l4.293 4.293a1 1 0 0 0 1.414 0L28 7.414V11h2zM16 28h14v2H16zM2 2h2v14H2z"></svg:path>`,
})
export class CarbonAnalyticsReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
