import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudError24RegularIcon],svg[fluent-cloud-error-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5a4.5 4.5 0 0 0-4.495 4.285a.75.75 0 0 1-.75.715H6.5a3 3 0 1 0 0 6h3.576a6.6 6.6 0 0 0-.057 1.5H6.5a4.5 4.5 0 0 1-.42-8.98a6.001 6.001 0 0 1 11.84 0a4.5 4.5 0 0 1 4.053 4.973a6.5 6.5 0 0 0-1.8-1.857A3 3 0 0 0 17.5 9.5h-.256a.75.75 0 0 1-.749-.715A4.5 4.5 0 0 0 12 4.5m10 12a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M16.5 13a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5m0 7.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25"></svg:path>`,
})
export class FluentCloudError24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
