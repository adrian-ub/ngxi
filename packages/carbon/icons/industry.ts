import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIndustryIcon],svg[carbon-industry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.53 6.15a1 1 0 0 0-1 0L20 10.38V7a1 1 0 0 0-1.45-.89L10 10.38V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v25h28V7a1 1 0 0 0-.47-.85M22 26h-4v-7h4Zm6 0h-4v-8a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v8H4V4h4v9.62l10-5v5l10-5Z"></svg:path>`,
})
export class CarbonIndustryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
